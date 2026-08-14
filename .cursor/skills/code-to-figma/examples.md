# Code-to-Figma examples

## Invocation

User provides only source + destination:

```
Design Table in Figma from Storybook Components/Table.
Destination: https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=1462-4965
```

Agent should:

1. Read `src/components/Table/Table.tsx`, `Table.css`, `Table.stories.tsx`
2. Target page `1462:4965` (`🟡  Table`) in file `JpqUOwWPAM6x80LNylauHx`
3. Instance existing **Button** for pagination; build Cell → Header Cell → Row → Table

## Worked example: Table (Aug 2026)

Storybook axes: `size` (small/middle/large), `bordered`, `loading`, `striped`, `pagination`, empty `dataSource`.

Figma result on page [🟡 Table](https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=1462-4965):

| Set | Node | Axes / props |
|---|---|---|
| Table Cell | `1464:4081` | Size × State; Content, leading/trailing show + swap, custom slot |
| Table Header Cell | `1465:4001` | Size; Label, Show sort, Sort icon swap, trailing slot (hidden empty) |
| Table Row | `1465:4704` | Size × State; Selection slot; 3 nested cells |
| Table Pagination | `1465:4706` | Button outline/small; page 1 = filled (library primary) |
| Table | `1465:8432` | Size × Content × Bordered; Show pagination; Storybook sample rows |

Fixes that were required after first screenshot (bake these into the workflow):

- Header **Trailing slot** defaulted to 100×100 visible → hide empty slots
- Age column too narrow while slot was visible → labels stacked
- Hover/Active/Selected all used the same blue fill → split Blue/100, Blue/200, Grey/100 + left accent
- Large cells stayed 40px until `layoutSizingVertical = 'HUG'`

## Naming

Match the destination file:

- Component sets: `Table`, `Table Cell`, `Table Header Cell` (no `Property 1=`)
- Variant names: `Size=Middle, State=Default` (comma-space, `Key=Value`)
- Nested layers: `Header / Name`, `Cell / Age` so swaps can target by name
