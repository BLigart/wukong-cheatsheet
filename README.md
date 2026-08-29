# Black Myth: Wukong — 100% Linear Checklist

A mobile-first, spoiler-heavy completion companion for **Black Myth: Wukong**.

The project turns a full playthrough into a chronological checklist so you can follow the game in a practical order without constantly switching between boss lists, quest guides, collectible guides, missable warnings, and build videos.

It is a **single self-contained HTML file**: no framework, no build step, no account, and no backend.

> **Warning:** this checklist contains major gameplay, boss, area, quest, item, and ending spoilers.

<!--
Add a screenshot to the repository and uncomment this line:
![Black Myth: Wukong 100% Checklist](docs/screenshot-mobile.png)
-->

## Features

- **Chronological Route** — ordered from the prologue through Chapters 1–6, secret content, endgame cleanup, and NG+.
- **100% Audit** — collection-oriented cross-check for completion items that would make the main route too noisy.
- **Bidirectional Route ↔ Audit sync** — checking a linked item in either view automatically updates the other view.
- **Missable warnings** — timing-sensitive bosses, NPC dialogue, quest chains, one-run rewards, and points of no return are surfaced where they matter.
- **Bosses and secret encounters** — main, optional, hidden, and secret-ending encounters are integrated into the route.
- **NPC and quest tracking** — including chapter-dependent dialogue and multi-step quest chains.
- **Completion systems** — Spirits, Curios, armor, weapons, transformations, Gourds, Drinks, Soaks, Meditation Spots, Seeds, Formulas, Celestial Pills, Key Items, Vessels, Skandhas, upgrade materials, and NG+ requirements.
- **Direct Wukong Wiki links** — gold dotted names open the relevant Black Myth: Wukong Wiki detail page in a new tab.
- **Become OP guide** — a chapter-by-chapter power route covering stance investment, Sparks, spells, Spirits, armor upgrades, weapons, Vessels, respec timing, and alternate endgame builds.
- **Search and filters** — quickly isolate bosses, NPCs, missables, secrets, gear, collectibles, and more.
- **Next unchecked** — jumps directly to the next unfinished visible route step.
- **Multiple profiles** — useful for separate characters, fresh runs, or NG+ cycles.
- **Automatic local saving** — progress is stored in the browser using `localStorage`.
- **Backup / restore** — export progress as JSON and import it later or on another browser/device.
- **Mobile-first UI** — designed primarily for phone use, with large touch targets, sticky controls, bottom navigation, safe-area handling, and horizontal filter chips.

## What “100%” Means Here

The checklist is aimed at **full journal / trophy / achievement-style completion plus unique equipment and meaningful one-time content**.

It does **not** require you to:

- open every generic Will chest,
- collect every common crafting-material pickup,
- farm duplicate copies of equipment,
- clear every ordinary enemy spawn.

RNG-dependent drops are placed at sensible farming checkpoints and can generally be postponed to the Chapter 6 cleanup phase if you prefer.

## Build Guide: Becoming OP

The built-in **Guide** page contains a first-playthrough power roadmap rather than a single static endgame build.

The default recommendation is built around:

- **Smash Stance** as the main stance,
- **Pilgrim Armor Set** as the main upgrade path,
- **Immobilize + Cloud Step** as the safe general-purpose spell package,
- **Wandering Wight** as a strong early Spirit,
- **Spell Binder** as a boss-delete alternative once you know a moveset,
- **Golden Armor + Qi / Vessel cycling** as a control-focused alternative,
- **Jingubang + Wukong armor** as an easy Chapter 6 baseline,
- **Bull King gear** as a later NG+ direction.

The guide also explains **when to spend Sparks, what not to over-invest in, when to upgrade armor, when to respec, and how to avoid wasting rare materials across too many half-finished builds**.

## Running It

### Option 1 — Open it directly

Download `black_myth_wukong_100_checklist.html` and open it in a modern browser.

That is all that is required.

### Option 2 — Host with GitHub Pages

For the cleanest GitHub Pages setup:

1. Rename `black_myth_wukong_100_checklist.html` to `index.html`.
2. Push `index.html` and this `README.md` to your repository.
3. Open the repository on GitHub.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your default branch (usually `main`) and the repository root (`/`).
7. Save the setting.

GitHub will provide the public Pages URL after deployment.

No package manager, server, database, or build command is required.

## Saving Progress

Checklist progress is stored locally in your browser with `localStorage`.

This means:

- progress is private to that browser/profile,
- refreshing or closing the page does not normally erase progress,
- clearing site/browser data can erase it,
- a different browser or device has separate storage,
- moving from a local `file://` copy to a hosted GitHub Pages version uses a different storage origin.

Use **More → Export backup** periodically. The generated JSON backup can later be restored with **Import backup**.

## Route and Audit Synchronization

The Route and 100% Audit share completion state wherever a meaningful relationship exists.

Examples:

- checking an acquisition in the Route can automatically complete its Audit entry,
- checking an Audit entry can complete its corresponding Route step,
- unchecking either side reverses the linked state,
- multi-step items only become complete when all required linked route steps are complete,
- aggregate or crafted collection entries remain independent when there is no honest one-to-one route step.

This avoids falsely marking a whole quest or collection complete because only one sub-step was finished.

## Mobile Usage

The UI was designed primarily for **Samsung Internet on a Galaxy S25 Ultra**, but it should work well in current Chromium-based browsers and other modern mobile browsers.

Useful mobile controls:

- tap almost anywhere on a checklist row to check/uncheck it,
- use **Next** in the bottom navigation to jump to the next unfinished step,
- swipe horizontally through category filters,
- tap gold dotted names to open Wiki detail pages,
- use profiles for separate runs,
- export a backup before clearing browser data or moving devices.

## Project Structure

```text
.
├── black_myth_wukong_100_checklist.html   # Entire application
└── README.md                              # Project documentation
```

If you deploy through GitHub Pages, you may prefer:

```text
.
├── index.html
└── README.md
```

## Technical Notes

The application intentionally stays simple:

- plain HTML,
- plain CSS,
- vanilla JavaScript,
- no external JavaScript dependencies,
- no backend,
- no analytics,
- no sign-in,
- browser `localStorage` for progress,
- JSON files for manual backup/restore.

The checklist data, Wiki entity mappings, synchronization rules, rendering logic, and UI are all contained in the same HTML file.

## Research and Reference Sources

The checklist is fan-curated and cross-checked against multiple public resources. The in-app Guide includes direct research links, including:

- [Black Myth: Wukong Wiki](https://blackmythwukong.fandom.com/wiki/Black_Myth:_Wukong_Wiki) — entity, item, equipment, skill, and mechanic detail pages.
- [PowerPyx — All Bosses](https://www.powerpyx.com/black-myth-wukong-boss-guide-all-bosses/) — chronological boss routing and rewards.
- [PowerPyx — All Side Quests](https://www.powerpyx.com/black-myth-wukong-all-side-quests/) — quest NPCs, hidden encounters, and dialogue chains.
- [PowerPyx — Trophy Guide & Roadmap](https://www.powerpyx.com/black-myth-wukong-trophy-guide-roadmap/) — missables and NG+ requirements.
- [PowerPyx — Spirits](https://www.powerpyx.com/black-myth-wukong-all-spirits-locations/)
- [PowerPyx — Curios](https://www.powerpyx.com/black-myth-wukong-all-curios-locations/)
- [PowerPyx — Armor](https://www.powerpyx.com/black-myth-wukong-all-armor-locations/)
- [PowerPyx — Weapons](https://www.powerpyx.com/black-myth-wukong-all-weapon-locations/)
- [PowerPyx — Meditation Spots](https://www.powerpyx.com/black-myth-wukong-all-meditation-spots-locations/)
- [Game8 — Missables & Points of No Return](https://game8.co/games/Black-Myth-Wukong/archives/469110)
- [Game8 — Best Spells](https://game8.co/games/Black-Myth-Wukong/archives/468558)
- [Epic Games — Best Skills Guide](https://store.epicgames.com/news/black-myth-wukong-guide-best-skills?lang=en-US)
- [Gameranx — Pilgrim Armor Guide](https://gameranx.com/features/id/507197/article/black-myth-wukong-how-to-get-pilgrim-set-best-armor-guide/)

External websites are maintained by their respective owners and their URLs/content may change independently of this project.

## Contributing

Corrections and improvements are welcome.

Good contributions include:

- fixing incorrect ordering,
- correcting a missable condition,
- adding a missing boss, NPC step, item, or collection entry,
- fixing a broken Wiki detail link,
- improving Route ↔ Audit synchronization,
- improving mobile usability,
- updating a build recommendation when game/community knowledge changes.

When changing checklist data, please try to preserve these rules:

1. **Route order comes first.** A user should be able to follow the checklist from top to bottom during an actual playthrough.
2. **Missables belong where the decision happens.** Do not hide critical warnings only in an endgame cleanup section.
3. **Do not overload the Route.** Large collections belong in the Audit unless their acquisition is important to progression or timing.
4. **Sync only real relationships.** Do not make one checkbox complete an unrelated aggregate entry.
5. **Keep mobile interaction intact.** Tapping Wiki links must not toggle checklist rows accidentally.
6. **Prefer direct detail links.** Bosses, NPCs, gear, spells, and important items should link to their specific Wiki pages where available.

## Disclaimer

This is an unofficial, fan-made project and is not affiliated with or endorsed by Game Science, the game's publishers, Fandom, PowerPyx, Game8, Epic Games, Gameranx, or the maintainers of the referenced resources.

**Black Myth: Wukong**, its characters, names, logos, game content, and related intellectual property belong to their respective owners. This project does not include or redistribute game assets.

Guide information can contain mistakes or become outdated. Always feel free to open an issue or pull request with a correction.

## License

No open-source license is declared by this README. If you plan to allow redistribution, modification, or reuse of the project, add an explicit `LICENSE` file to the repository (for example, MIT or another license that matches your intent).
