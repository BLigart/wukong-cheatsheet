import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(script);
const ctx=vm.createContext({console});
vm.runInContext(script.slice(script.indexOf('const route='),script.indexOf('const wikiBase=')),ctx);
const data=vm.runInContext('({route,audits,routeSources})',ctx);
const rows=data.route.flatMap(c=>c.segments.flatMap(s=>s.tasks));
const byId=new Map(rows.map(t=>[t.id,t]));
const audit=(g,n)=>data.audits.find(x=>x.id===g).items.find(x=>x.n===n);
const index=id=>rows.findIndex(t=>t.id===id);
const before=(a,b)=>assert.ok(index(a)>=0&&index(a)<index(b),`${a} must precede ${b}`);
const legacy=JSON.parse(fs.readFileSync(new URL('legacy-ids.json',import.meta.url),'utf8'));
vm.runInContext(`let state={active:'A',routeChecks:{A:{},B:{}},auditChecks:{A:{},B:{}}};const rc=()=>state.routeChecks[state.active];const ac=()=>state.auditChecks[state.active];`,ctx);
vm.runInContext(script.slice(script.indexOf('const syncAuditToRoutes='),script.indexOf('function refreshCompletionDOM()'))+';buildSyncMaps();',ctx);
vm.runInContext(script.slice(script.indexOf('function normalizeBackup('),script.indexOf('function importBackup(')),ctx);
const run=code=>vm.runInContext(code,ctx);
const reset=()=>run("state={active:'A',routeChecks:{A:{},B:{}},auditChecks:{A:{},B:{}}}");
test('unique stable IDs preserve every legacy route and audit key',()=>{
 assert.equal(rows.length,375);assert.equal(byId.size,rows.length);
 const ids=data.audits.flatMap(g=>g.items.map(a=>a.id));assert.equal(new Set(ids).size,ids.length);
 legacy.route.forEach(id=>assert.ok(byId.has(id),id));legacy.audit.forEach(id=>assert.ok(ids.includes(id),id));
});
test('all explicit links and researched source references resolve',()=>{
 data.audits.forEach(g=>g.items.forEach(a=>(a.routeIds||[]).forEach(id=>assert.ok(byId.has(id),`${a.n}: ${id}`))));
 rows.filter(t=>t.source).forEach(t=>assert.ok(data.routeSources[t.source]?.[1].startsWith('https://'),t.id));
});
test('all boss identities, 54 spirits, 24 meditations, 9 drinks and 14 formulas have acquisition steps',()=>{
 for(const group of ['bosses','spirits','meditations','drinks','formulas']){
  data.audits.find(g=>g.id===group).items.forEach(a=>assert.ok(a.routeIds.length,`${group}: ${a.n}`));
 }
 assert.equal(data.audits.find(g=>g.id==='spirits').items.length,54);
 assert.equal(data.audits.find(g=>g.id==='meditations').items.length,24);
});
test('missable warnings and quest prerequisites precede their cutoffs',()=>{
 const pairs=[['c1:0:5','c1:2:0'],['c1:2:3','c1:2:0'],['c1:2:2','c1-fireproof'],['c2:2:1','c2:2:5'],['c2:5:4','c2-boar-lotus'],['c2-boar-lotus','c2:5:5'],['c2:2:12','c2:1:3'],['c3-warden-last','c3:1:8'],['c3:1:8','c3:1:5'],['c3:2:5','c3:6:11'],['c3:4:10','c3:4:11'],['c3:4:11','c3:4:19'],['c4:2:1','c4:1:8'],['c4:3:3','c4-talisman-2'],['c4-talisman-2','c4-talisman-3'],['c4-talisman-3','c4:5:9'],['c4:5:9','c4:7:1'],['c4:6:6','c4:6:7'],['c4:6:7','c4:6:10'],['c4:6:9','c4:6:10'],['c4:7:1','c4:7:0'],['c5:2:1','c5:1:6'],['c5:1:3','c5:1:6'],['c5:1:6','c5:6:0'],['c5-ball-path','c5:3:3'],['c5:3:7','c5:4:1'],['c5:4:1','c5:4:0'],['c6:2:2','c6:2:3'],['c6:4:2','c6:5:0']];
 pairs.forEach(([a,b])=>before(a,b));
 for(const id of rows.filter(t=>t.id.startsWith('c2-eye-')).map(t=>t.id))before(id,'c2:2:8');
});
test('all 15 vines and 12 wine worms are individually tracked',()=>{
 assert.equal(rows.filter(t=>t.title.includes('Luojia Fragrant Vine')).length,15);
 assert.equal(rows.filter(t=>t.title.includes('Awaken Wine Worm')).length,12);
 assert.equal(data.audits.find(g=>g.id==='upgrade').items.filter(a=>a.id.startsWith('upgrade-')).length,27);
});
test('Wight warning, Elder Jinchi victory and Bat portrait do not falsely award separate pickups',()=>{
 reset();run("rc()['c1:2:3']=true;syncFromRoute('c1:2:3');rc()['c1:2:2']=true;syncFromRoute('c1:2:2');rc()['c3:2:5']=true;syncFromRoute('c3:2:5');");
 for(const a of [audit('spirits','Wandering Wight'),audit('vessels','Fireproof Mantle'),audit('spirits','Apramana Bat')])assert.notEqual(run(`ac()[${JSON.stringify(a.id)}]`),true);
 run("rc()['c1-fireproof']=true;syncFromRoute('c1-fireproof')");assert.equal(run(`ac()[${JSON.stringify(audit('vessels','Fireproof Mantle').id)}]`),true);
});
test('single acquisition syncs both ways, with profile isolation',()=>{
 reset();const a=audit('curios','Preservation Orb');run(`ac()[${JSON.stringify(a.id)}]=true;syncFromAudit(${JSON.stringify(a.id)},true)`);
 assert.equal(run("rc()['c4:7:0']"),true);assert.equal(run("state.routeChecks.B['c4:7:0']"),undefined);
 run("rc()['c4:7:0']=false;syncFromRoute('c4:7:0')");assert.equal(run(`ac()[${JSON.stringify(a.id)}]`),false);
});
test('an aggregate quest check does not tick new conversations or rewards',()=>{
 reset();const a=audit('npcquests','Horse Guai / Ma Tianba — Chapters 1–5');run(`ac()[${JSON.stringify(a.id)}]=true;syncFromAudit(${JSON.stringify(a.id)},true)`);assert.equal(run('Object.keys(rc()).length'),0);
});
test('legacy import preserves all profiles and adds no completed new steps',()=>{
 const old={version:3,profiles:['A','B'],active:'B',routeChecks:{A:{'c4:6:6':true},B:{'c5:6:0':true}},auditChecks:{A:{'spirits:0':true},B:{}},settings:{hideDone:true}};
 const migrated=JSON.parse(run(`JSON.stringify(normalizeBackup(${JSON.stringify(old)}))`));assert.deepEqual(migrated.routeChecks,old.routeChecks);assert.deepEqual(migrated.auditChecks,old.auditChecks);assert.equal(migrated.active,'B');assert.equal(migrated.version,4);
 assert.throws(()=>run('normalizeBackup({profiles:[],routeChecks:{},auditChecks:{}})'));
 assert.throws(()=>run('normalizeBackup({profiles:["__proto__"],routeChecks:{},auditChecks:{}})'));
 assert.throws(()=>run('normalizeBackup({profiles:["A"],routeChecks:{A:{x:"yes"}},auditChecks:{A:{}}})'));
});
test('optional Deluxe equipment is labeled and excluded from core totals',()=>{
 const optional=data.audits.flatMap(g=>g.items).filter(a=>a.optional);assert.equal(optional.length,5);
 assert.ok(optional.every(a=>/Deluxe/i.test(a.note)));assert.match(script,/if\(it.optional\)return;at\+\+;gt\+\+/);
});
