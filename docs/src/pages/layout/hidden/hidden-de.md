---
title: Hidden React-Komponente
components: Hidden
---
# Hidden

<p class="description">Wechseln Sie mit unseren versteckten Komponenten schnell und ansprechend den Sichtbarkeitswert von Komponenten und mehr.</p>

Alle Elemente sind sichtbar, außer **sie explizit versteckt**. Um die Integration mit unseren [responsiven Haltepunkten](/layout/basics/) zu vereinfachen, können Sie mit dieser Komponente jeden Inhalt ausblenden oder Sie können ihn zusammen mit unserer [`Grid`](/layout/grid/) Komponente verwenden.

## So funktioniert es

Hidden funktioniert mit einem Bereich von Haltepunkten, z. B. `xsUp` oder `mdDown`, oder einem oder mehreren Haltepunkten, z. B. `only='sm'` oder `only {['md','xl']}`. Bereiche und individuelle Haltepunkte können gleichzeitig verwendet werden, um ein sehr benutzerdefiniertes Verhalten zu erreichen. Die Bereiche enthalten die angegebenen Haltepunkte.

```js
innerWidth  |xs      sm       md       lg       xl
            |--------|--------|--------|--------|-------->
width       |   xs   |   sm   |   md   |   lg   |   xl

smUp        |   show | hide
mdDown      |                     hide | show

```

## Implementierungen

### js

Standardmäßig wird die `js` Implementierung verwendet, die den Inhalt basierend auf der [`withWidth()`](/layout/breakpoints/#withwidth-)-Komponente höherer Ordnung, die die Bildschirmgröße überwacht, ansprechend versteckt. Dies hat den Vorteil, dass überhaupt kein Inhalt dargestellt wird, wenn der Haltepunkt nicht erreicht wird.

### css

Wenn Sie serverseitiges Rendering verwenden, können Sie `implementation="css"` festlegen, wenn der Browser Ihren Inhalt nicht erneut auf dem Bildschirm anzeigen soll.

## Haltepunkte Up

Unter Verwendung einer beliebigen Haltepunkte `up` Eigenschaft, werden die angegebenen *Kinder* ausgeblendet *bei oder über* dem Haltepunkt.

{{"demo": "pages/layout/hidden/BreakpointUp.js"}}

## Haltepunkte Down

Unter Verwendung einer beliebigen Haltepunkte `down` Eigenschaft, werden die angegebenen *Kinder* ausgeblendet *bei oder unter* dem Haltepunkt.

{{"demo": "pages/layout/hidden/BreakpointDown.js"}}

## Haltepunkte einzeln

Using the breakpoint `only` property, the given *children* will be hidden *at* the specified breakpoint(s).

The `only` property can be used in two ways:

- list a single breakpoint
- list an array of breakpoints

{{"demo": "pages/layout/hidden/BreakpointOnly.js"}}

## Integration with Grid

It is quite common to alter `Grid` at different responsive breakpoints, and in many cases, you want to hide some of those elements.

{{"demo": "pages/layout/hidden/GridIntegration.js"}}