# Aufgabe 02

## Ziele

* Grundlagen verproben
* Typen und Interfaces kennenlernen

### Checkliste der erledigten Aufgaben

- [ ] Aufgabe 1 - Beispiel Projekt ready
- [ ] Aufgabe 2 - TypeScript Konfiguration vorbereiten
- [ ] Aufgabe 3 - TodoList implementieren
- [ ] Aufgabe 4 - TodoList erweitern

## Aufgabenstellungen

### Aufgabe #1 - Beispiel-Projekt ready
* Das [Beispiel-Projekt](./simple-todo) lässt sich über ``npm install`` und ``npm start`` starten
* Auf der Konsole wird ``Hello World`` ausgegeben
* Der Dev-Mode mit HotCode-Replacement funktioniert und loggt Änderungen aus
  * Ändere die Ausgabe von ``Hello World`` auf ``Hello from first TypeScript project!``
  * Die Ausgabe erscheint ohne einen Neustart

### Aufgabe #2 - TypeScript Konfiguration vorbereiten
* Lege eine neue TypeScript Konfiguration für das Projekt an
* Benutze dafür den Befehl ``tsc --init`` im Projekt-Root
* Setze folgende Eigenschaften:
  * ``strict = true`` 
  * ``target = ES2020`` 
  * ``module = NodeNext`` 
* Prüfe das die Log-Aufgabe noch funktioniert

### Aufgabe #3 - Todo-List implementieren
* Lege ein neues File für die TodoList an ``./src/todoList.ts``
  * Die TodoList soll *keine* Class sein
* Schreibe Typen zur Abbildung eines Todos
* Erstelle und exportiere folgende Funktionen
  * Offene Todos ausgeben
  * Erledigte Todos ausgeben
  * Hinzufügen eines Todos
  * Erledigen eines Todos
  * Zuweisen eines Todos
* Erstelle in der ``./src/main.ts`` folgenden Ablauf:
  * Alle offenen Todos ausgeben
  * Mehrere Todos hinzufügen
  * Alle offenen Todos ausgeben
  * Ein Todo jemandem zuweisen
  * Ein Todo erledigen
  * Alle erledigten Todos ausgeben

### Aufgabe #4 - TodoList erweitern
* Überlege dir einen neuen Use-Case den du anschließend in deiner TodoList abbildest
