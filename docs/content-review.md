# September 2026 content review

The refinement keeps the original single-file app and its visual design. It expands 325 route steps to 375, rewrites 75 original steps, and reorders existing entries. All original save IDs remain present. The audit remains a collection cross-check rather than a claim to document every game interaction.

## Principal corrections

| Area | Refined behavior | References |
| --- | --- | --- |
| Chapter 1 | The Wight warning precedes the third bell. Fireproof Mantle has its own hanging-wolf pickup. The Arbor and cave meditation steps are placed along the appropriate path. | [Missables](https://game8.co/games/Black-Myth-Wukong/archives/469110), [boss rewards](https://www.powerpyx.com/black-myth-wukong-boss-guide-all-bosses/) |
| Chapter 2 | Six individual Eyeball checks; explicit Sobering Stone and Jade Lotus hand-ins; rat-hut dialogue for Ashen Slumber; A Pluck of Many at Windseal Gate; Loongwreathe crafting after both early Loongs. | [Eyeballs](https://www.powerpyx.com/black-myth-wukong-buddhas-eyeballs-locations/), [boar](https://www.polygon.com/guides/440630/black-myth-wukong-yellow-robed-squire-how-to-help-chapter-2-secret-area), [spells](https://www.shacknews.com/article/141360/all-spell-locations-black-myth-wukong) |
| Chapter 3 | Warden checks precede Wise-Voice; the Outside the Wheel meditation follows him. Apramana Bat’s boss portrait and Spirit are separate. Treasure Hunter starts at Bitter Lake. Ashen Slumber and Chubai Spearhead/crafting are separate rewards. | [Lantern Wardens](https://gamerant.com/black-myth-wukong-how-get-auspicious-lantern-all-warden-locations/), [Treasure Hunter](https://www.shacknews.com/article/141165/treasure-hunter-quest-guide-black-myth-wukong), [rat quest variants](https://www.reddit.com/r/BlackMythWukong/comments/1exyj5m/i_cant_get_the_ashen_slumber_transformation/) |
| Chapter 4 | Four talisman interactions; upper branches before Lower Hollow; three-feed worm sequence; arm-break condition followed by reward verification; Daoist Mi and Scorpionlord before Duskveil; Preservation Orb after the chapter boss. | [Talismans](https://www.thegamer.com/black-myth-wukong-purple-talisman-quest-guide/), [Venom Daoist](https://blackmythwukong.wiki.fextralife.com/Venom%2BDaoist), [Preservation Orb](https://wukong.cskl.pl/curios/preservation-orb/) |
| Chapter 5 | Rakshasa Palace before Emerald Hall; Ma Tianba completed after the Keeper sequence; explicit ox revisits and rolling-ball backtrack; four Flame Ores to summon Mother of Flamlings; frog outside Bishui Cave; steel-ball Spirit in Emerald Hall. | [Dark Thunder](https://game8.co/games/Black-Myth-Wukong/archives/470664), [carts](https://www.powerpyx.com/black-myth-wukong-oxs-five-element-carts-quest/), [Flamlings](https://game8.co/games/Black-Myth-Wukong/archives/473605), [Spirit](https://hardcoregamer.com/black-myth-wukong/top-takes-bottom-bottom-takes-top-boss/) |
| Chapter 6 / NG+ | Landmarks for optional encounters; instructions for Feng-Tail’s holds; mantis prerequisites; optional normal ending distinguished from secret-ending requirements. Repeated Poison Chiefs are not separate Journal identities. | [Huaguo](https://blast.tv/gaming/news/black-myth-wukong-chapter-6-boss-locations), [Feng-Tail](https://blackmythwukong.wiki.fextralife.com/Feng-Tail%2BGeneral), [quest/endgame overview](https://www.powerpyx.com/black-myth-wukong-all-side-quests/) |

## Collection cross-checks

All 24 meditation entries, 54 Spirits, 9 Drinks and 14 Formulas have explicit acquisition links. This checks route coverage, not actual player inventory. The 15 Vine and 12 Wine Worm acquisition opportunities include the three chapter stock additions at Shen Monkey; they are not all world pickups.

References: [meditations](https://www.powerpyx.com/black-myth-wukong-all-meditation-spots-locations/), [Drinks](https://www.powerpyx.com/black-myth-wukong-all-drinks-locations/), [Formulas](https://www.powerpyx.com/black-myth-wukong-all-formula-locations-tattered-pages/), [Vines](https://www.powerpyx.com/black-myth-wukong-all-luojia-fragrant-vine-locations/), [Wine Worms](https://www.powerpyx.com/black-myth-wukong-all-awaken-wine-worm-locations/), [armor](https://www.powerpyx.com/black-myth-wukong-all-armor-locations/).

## Conflicting guide details

- Some early guides say Dark Thunder requires Chapter 6. The refined route uses the earlier post-Keeper return and still places all horse conversations before that fight.
- Early Wight warnings sometimes name Elder Jinchi’s defeat. The route conservatively requires the Wight before ringing the third bell.
- Ashen Slumber can involve either a corpse pickup or a living rat encounter depending on when the Chapter 2 dialogue was completed. The route explains both, without treating the four-captain reward as the transformation itself.
- Maitreya’s Orb is routed to its Mindfulness Cliff chest, with a note about older Non-Able reward lists.
- Merchant availability can vary in old guides. Pinebrew is placed at the Chapter 4 visit, where the guide lists it as available.

## App regressions addressed

Previously, position-based keys could attach saved checks to different tasks after an insertion. IDs are now stored on the tasks themselves. Legacy positional-looking values are deliberately frozen, and the original key list is a regression fixture.

Previously, matching words in titles and descriptions could count a warning as an acquisition. `routeIds` now names the actual linked actions. Audit aggregate checks do not expand into new quest steps, and independently collected rewards remain checked when another reward on a bundled row is missing.

New optional Deluxe labels exclude five paid equipment entries from the core total. Post-launch challenge equipment is outside the scope of this base-campaign route.
