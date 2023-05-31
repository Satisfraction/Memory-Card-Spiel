# Memory Card Spiel

Autor: Satisfraction

## Beschreibung

Das Memory Card Spiel ist ein unterhaltsames Spiel, bei dem es darum geht, Paare von verdeckten Karten aufzudecken und sie zu finden. Das Ziel des Spiels ist es, alle Paare von Karten zu finden, indem man sich die Positionen der Karten merkt und sie im Laufe des Spiels aufdeckt.

## Installation

Es sind keine besonderen Installationsschritte erforderlich, um das Spiel auszuführen. Befolgen Sie einfach die Anweisungen unten, um das Spiel zu starten.

## Anleitung

1. Laden Sie die `index.html`, `style.css` und `script.js` Dateien herunter.
2. Öffnen Sie die `index.html` Datei in einem Webbrowser Ihrer Wahl.

## Spielanleitung

1. Sobald das Spiel geladen ist, wird ein Spielfeld mit verdeckten Karten angezeigt.
2. Klicken Sie auf eine Karte, um sie aufzudecken. Merken Sie sich die Position und das Bild der aufgedeckten Karte.
3. Decken Sie eine zweite Karte auf und vergleichen Sie sie mit der vorherigen Karte.
4. Wenn die beiden Karten übereinstimmen, bleiben sie aufgedeckt und Sie erhalten einen Punkt.
5. Wenn die beiden Karten nicht übereinstimmen, werden sie wieder verdeckt.
6. Das Spiel endet, wenn alle Paare gefunden wurden.
7. Klicken Sie auf den "Neues Spiel" Button, um ein neues Spiel zu starten.

## Spielstatistiken

- Züge: Die Anzahl der Kartenpaare, die Sie bereits aufgedeckt haben.
- Paare gefunden: Die Anzahl der korrekt aufgedeckten Kartenpaare.

## Lizenz

Dieses Spiel wurde unter der [MIT-Lizenz](https://opensource.org/licenses/MIT) erstellt.

## Funktionen

### shuffleCards()

Diese Funktion mischt die Karten vor Spielbeginn. Sie verwendet den Fisher-Yates-Algorithmus, um die Karten im Array zufällig anzuordnen.

### displayCards()

Diese Funktion generiert das Spielfeld und zeigt die Karten an. Sie verwendet das DOM, um dynamisch HTML-Elemente für jede Karte zu erstellen und sie dem Spielfeld hinzuzufügen.

### handleCardClick(event)

Diese Funktion wird ausgeführt, wenn der Spieler auf eine Karte klickt. Sie behandelt den Klick und überprüft, ob die ausgewählte Karte ein gültiger Zug ist. Wenn die ausgewählte Karte mit einer zuvor aufgedeckten Karte übereinstimmt, werden die Karten als Paar markiert. Andernfalls werden die Karten wieder verdeckt.

### updateGameStats()

Diese Funktion aktualisiert die Spielstatistiken wie die Anzahl der Züge und die Anzahl der gefundenen Paare. Sie aktualisiert die entsprechenden HTML-Elemente im DOM.

### restartGame()

Diese Funktion startet ein neues Spiel, indem sie die Karten mischt, die Spielstatistiken zurücksetzt und das Spielfeld neu generiert.

### initGame()

Diese Funktion initialisiert das Spiel, indem sie die Karten mischt, das Spielfeld generiert und den Neues Spiel-Button konfiguriert.

