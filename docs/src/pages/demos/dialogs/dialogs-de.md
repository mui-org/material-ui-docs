---
title: Dialog React Komponente
components: Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide
---
# Dialoge

<p class="description">Dialoge informieren Benutzer über eine Aufgabe und können wichtige Informationen enthalten, Entscheidungen erfordern oder mehrere Aufgaben umfassen.</p>

Ein [Dialog](https://material.io/design/components/dialogs.html) ist ein Typ von [modalen](/utils/modal/) Fenstern, der vor dem App-Inhalt angezeigt wird, um wichtige Informationen bereitzustellen oder um eine Entscheidung zu bitten. Dialoge deaktivieren alle App-Funktionen, wenn sie angezeigt werden, und bleiben auf dem Bildschirm, bis sie bestätigt, abgewiesen oder eine erforderliche Aktion ausgeführt wurde.

Dialoge sind absichtlich unterbrechend und sollten sparsam eingesetzt werden.

## Einfache Dialoge

Einfache Dialoge können zusätzliche Details oder Aktionen zu einem Listenelement bereitstellen. Sie können zum Beispiel Avatare, Symbole, Subtexte oder orthogonale Aktionen (z. B. ein Konto hinzufügen) beinhalten.

Berührungsmechanik:

- Durch die Auswahl einer Option wird die Option sofort übernommen und das Menü geschlossen
- Durch Berühren außerhalb des Dialogs oder Drücken von Zurück wird die Aktion abgebrochen und der Dialog geschlossen

{{"demo": "pages/demos/dialogs/SimpleDialog.js"}}

## Warnungen

Alarme sind dringende Unterbrechungen, die eine Bestätigung erfordern und den Benutzer über eine Situation informieren.

Die meisten Benachrichtigungen benötigen keine Titel. Sie fassen eine Entscheidung in einem oder zwei Sätzen zusammen:

- Eine Frage stellen (zB "Dieses Gespräch löschen?")
- Eine Aussage zu den Aktionsschaltflächen machen

Verwenden Sie Titelleisten-Alarme nur für Situationen mit hohem Risiko, z. B. den möglichen Verbindungsverlust. Benutzer sollten die Auswahlmöglichkeiten allein anhand des Titels und des Schaltflächentextes verstehen können.

Falls ein Titel erforderlich ist:

- Verwenden Sie eine klare Frage oder eine Erklärung mit einer Erläuterung im Inhaltsbereich, z. B. "USB-Speicher löschen?".
- Vermeiden Sie Entschuldigungen, Unklarheiten oder Fragen wie "Warnung!" oder "Sind Sie sicher?"

{{"demo": "pages/demos/dialogs/AlertDialog.js"}}

Sie können den Übergang auch austauschen. Das nächste Beispiel verwendet `Slide (Gleiten)`.

{{"demo": "pages/demos/dialogs/AlertDialogSlide.js"}}

## Formulardialoge

Formulardialoge ermöglichen Benutzern das Ausfüllen von Formularfeldern innerhalb eines Dialogs. Wenn Ihre Seite beispielsweise potenziellen Abonnenten zur Eingabe ihrer E-Mail-Adresse auffordert, können sie das E-Mail-Feld ausfüllen und auf "Senden" klicken.

{{"demo": "pages/demos/dialogs/FormDialog.js"}}

## Benutzerdefinierter Dialog

Wenn du die [Overrides Dokumentationsseite](/customization/overrides/) gelesen hast, aber dich noch nicht sicher genug fühlst, um direkt loszulegen, ist hier noch ein Beispiel, wie du den `DialogTitle` anpassen könntest.

⚠️ Auch wenn die Material-Design Spezifikation zur Verwendung von Themes ermutigt, liegen diese Beispiele außerhalb der üblichen Pfade.

{{"demo": "pages/demos/dialogs/CustomizedDialog.js"}}

## Vollbild-Dialoge

{{"demo": "pages/demos/dialogs/FullScreenDialog.js"}}

## Optionale Größen

Sie können die maximale Breite eines Dialogs festlegen, indem Sie die `maxWidth` Eigenschaft in Kombination mit dem boolean `fullWidth` verwenden. Wenn die Eigenschaft `fullWidth` wahr ist, wird der Dialog basierend auf dem Wert `maxWidth` angepasst.

{{"demo": "pages/demos/dialogs/MaxWidthDialog.js"}}

## Responsive Vollbild

Sie können einen Dialog responsive machen, indem Sie `withMobileDialog` verwenden. Standardmäßig wird `withMobileDialog()(Dialog)` gesetzt, wenn die [Bildschirmgröße](/layout/basics/) *kleiner gleich* `sm` ist. You can choose your own breakpoint for example `xs` by passing the `breakpoint` argument: `withMobileDialog({breakpoint: 'xs'})(Dialog)`.

{{"demo": "pages/demos/dialogs/ResponsiveDialog.js"}}

## Confirmation dialogs

Confirmation dialogs require users to explicitly confirm their choice before an option is committed. For example, users can listen to multiple ringtones but only make a final selection upon touching “OK”.

Touching “Cancel” in a confirmation dialog, or pressing Back, cancels the action, discards any changes, and closes the dialog.

{{"demo": "pages/demos/dialogs/ConfirmationDialog.js"}}

## Accessibility

Follow the [Modal accessibility section](/utils/modal/#accessibility).

## Scrolling long content

When dialogs become too long for the user’s viewport or device, they scroll.

- `scroll=paper` the content of the dialog scrolls within the paper element.
- `scroll=body` the content of the dialog scrolls within the body element.

Try the demo below to see what we mean:

{{"demo": "pages/demos/dialogs/ScrollDialog.js"}}

## Draggable dialog

You can create a draggable dialog by using [react-draggable](https://github.com/mzabriskie/react-draggable). To do so, you can pass the the imported `Draggable` component as the `PaperComponent` of the `Dialog` component. This will make the entire dialog draggable.

{{"demo": "pages/demos/dialogs/DraggableDialog.js"}}

## Performance

Follow the [Modal performance section](/utils/modal/#performance).