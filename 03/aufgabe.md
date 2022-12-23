# Aufgabe 03 - Konvertiere ein Node Projekt

## Ziele

* Grundlagen vertiefen
* Bisher gelerntes anwenden
* Bestehenden JavaScript-Code in TypeScript konvertieren

### Checkliste der erledigten Aufgaben

- [ ] Aufgabe 1 - Beispiel Projekt ready
- [ ] Aufgabe 2 - TypeScript einführen
- [ ] Aufgabe 3 - Types einführen
- [ ] Aufgabe 4 - Printer erweitern

## Aufgabenstellungen

### Aufgabe #1 - Beispiel-Projekt ready
* Das [Beispiel-Projekt](./pdf-generator) lässt sich über ``npm install`` und ``npm start`` starten
* Es wird ein PDF generiert und unter ``./target`` abgelegt
* Der Dev-Mode mit HotCode-Replacement funktioniert und generiert bei Änderungen ein neues PDF

### Aufgabe #2 - TypeScript einführen
* Lege eine neue TypeScript Konfiguration für das Projekt an
* Benutze dafür den Befehl ``tsc --init`` im Projekt-Root
* Setze folgende Eigenschaften:
  * ``strict = true`` 
  * ``target = ES2020`` 
  * ``module = NodeNext`` 
* Konvertiere den bestehenden Code Richtung TypeScript
  * Hinweis: ``Require`` muss in import ``umgebaut`` werden 

### Aufgabe #3 - Types einführen
* Überlege dir sinnvolle Typen für den zu druckenden Inhalt
* Verwende den Typen im Parameter des ``./src/common/printer.js``

### Aufgabe #4 - Printer erweitern
* Erweitere die Ausgabe in ``./src/index.js`` um den generierten Datei-Namen
