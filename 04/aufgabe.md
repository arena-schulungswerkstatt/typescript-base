# Aufgabe 04 - Konvertiere ein Express Projekt

## Ziele

* Grundlagen vertiefen
* Bisher gelerntes anwenden
* Bestehenden JavaScript-Code in TypeScript konvertieren
* Express kennenlernen

### Checkliste der erledigten Aufgaben

- [ ] Aufgabe 1 - Beispiel Projekt ready
- [ ] Aufgabe 2 - TypeScript einführen
- [ ] Aufgabe 3 - Anwendung testen

## Aufgabenstellungen

### Aufgabe #1 - Beispiel-Projekt ready
* Das [Beispiel-Projekt](./mock-service) lässt sich über ``npm install`` und ``npm run serve`` starten
* Es wird ein REST-Service gestartet 
* Unter [http://localhost:3000/](http://localhost:3000/) wird ein Willkommens-Text ausgegeben
* Der Dev-Mode mit HotCode-Replacement funktioniert 
* Grundsätzlich hat der REST-Service zwei Endpunkte
  * Über einen POST auf ``http://localhost:3000/mock/upload`` wird das im Body übergebene Objekt persistiert
  * Über ein GET auf ``http://localhost:3000/mock/:mockId`` wird das persistierte Objekt wieder ausgegeben
* Zum Testen liegt eine Postman-Collection unter ``./mock-service/mock-service.postman_collection.json``

### Aufgabe #2 - TypeScript einführen
* Lege eine neue TypeScript Konfiguration für das Projekt an
* Benutze dafür den Befehl ``tsc --init`` im Projekt-Root
* Setze folgende Eigenschaften:
  * ``strict = true`` 
  * ``target = ES2020`` 
  * ``module = NodeNext`` 
* Konvertiere den bestehenden Code Richtung TypeScript
  * Hinweis: ``Require`` muss in import ``umgebaut`` werden

### Aufgabe #3 - Anwendung testen
* Die Anwendung funktioniert noch genauso wie zuvor, ist nun aber Typ-sicher
* Auch der Dev-Mode funktioniert wieder und ermöglicht die Entwicklung mithilfe von Hot-Code-Replacement
