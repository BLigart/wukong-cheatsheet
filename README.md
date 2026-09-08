# Black Myth: Wukong — Refined Completion Checklist

A mobile-first, spoiler-heavy companion for the base campaign and New Game+. The `develop` revision contains **375 route steps**, up from 325, with clearer directions, quest hand-ins, prerequisite order and collection checkpoints.

Open **`index.html`** directly in a modern browser, or serve the repository as a static website. No framework, build, account or backend is needed.

## What changed in develop

- Added 50 steps and rewrote 75 existing steps, with further changes to their order.
- Split the six Buddha’s Eyeballs, purple talismans, worm-feeding quest and important NPC hand-ins into actionable checks.
- Corrected the Pagoda meditation order, Chapter 4 upper/lower route, Rakshasa Palace/Emerald Hall order, Ma Tianba reward timing and Preservation Orb backtrack.
- Added or clarified missing drink, armor and curio opportunities. All 15 Vine acquisitions and 12 Wine Worm acquisitions, including merchant stock, now have individual route and Audit entries.
- Put cutoff warnings before the action that can lock content out, and distinguished boss portraits from separately awarded Spirits.
- Preserved existing check IDs, even when rows move. New steps begin unchecked.
- Replaced prose-matching synchronization with explicit acquisition links, so a warning or recipe mention cannot award an item.
- Fixed **Next** to find unfinished steps inside collapsed chapters without clearing your search or filters.
- Labeled optional Deluxe equipment and excluded it from the core Audit total.

See [the content review](docs/content-review.md) for corrections, sources and scope.

## Using the checklist

**Route** follows a practical chapter order. Named detours return to earlier shrines. Tick a pickup after obtaining it; seeing a recipe or attempting an RNG farm does not mean you own the item. Farming can be postponed to the endgame cleanup.

**Audit** cross-checks inventory and quest completion. Linked route acquisitions update their Audit entries. Checking one Audit item completes a single linked route step only when all individually linked rewards for that step are checked. Multi-step quest aggregates do not check off conversations or new route steps for you. Unlinked crafted equipment and broad collection goals are manual checks.

**Guide** retains the chapter build suggestions and general reference links. Researched route changes also have direct source links underneath the step. External links do not toggle checkboxes.

Use search, category filters, Hide done, chapter jumps, Next, and chapter/subchapter Check all / Uncheck all to navigate. Bulk actions apply to the visible filtered rows in that group.

The first normal-ending section is **optional**, for seeing both ending scenes. For only the secret ending, complete Mount Mei before the final encounter. Use **Continue Journey** afterward to finish cleanup before **Enter a New Cycle**.

## Existing progress and backups

The app retains the `bmw100Linear.v3` browser storage key and freezes every legacy Route and Audit ID. The state format is version 4. Version 3 backups remain importable, including all their profiles. Loading or importing does not infer that newly added steps are complete.

Progress belongs to the browser and origin that saved it. A branch preview, downloaded file and production website can each have separate storage. Export from the old app using **More → Export backup**, then import into the revised app when changing origin. Checklist backups do not back up the game save.

An edited legacy step retains its check, so review newly clarified conditions against your actual inventory if you checked a vague step in the old version. New prerequisites remain unchecked even when an older quest summary was marked complete.

## Completion scope

The checklist covers base-campaign bosses, main and side quests, secret areas, equipment and collectible systems, endings, and NG+ cleanup. It is not an inventory of every ordinary chest, enemy spawn or repeat material drop, and it does not cover the post-launch challenge reward catalog. Deluxe equipment is optional. Some full equipment collections require NG+ materials.

Source guides occasionally disagree about patch behavior or optional encounter classifications. The route uses conservative early cutoffs and names known alternate quest outcomes where useful. A filled checklist is a companion to the in-game Journal and inventory, not a guarantee that every possible interaction is documented.

## Development and verification

```text
index.html                  App, data, styles and persistence
README.md                   Usage and compatibility
docs/content-review.md      Research and correction notes
tests/checklist.test.mjs     Content-order and progress regressions
tests/legacy-ids.json        Frozen original save keys
```

Run the dependency-free regression checks with Node.js:

```bash
node --test tests/checklist.test.mjs
```

They verify stable IDs, acquisition coverage, critical route ordering, source/link integrity, material counts, synchronization, optional equipment and legacy backup imports. They do not simulate a game playthrough.

When editing content, preserve `id` values and assign a new descriptive ID to a genuinely new task. Do not derive IDs from the current row position or infer collection links by searching prose. Review `routeIds` whenever the meaning of an acquisition changes.

For GitHub Pages, select the branch you want to serve and the repository root in **Settings → Pages**. Merely pushing `develop` does not change a Pages site configured to publish `main`.

## Credits

Unofficial fan project; not affiliated with Game Science or the referenced guide publishers. Black Myth: Wukong and related intellectual property belong to their respective owners. No game assets are redistributed. No open-source license is declared.
