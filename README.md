# e52510f4-714a-4c1c-93b4-aef021c55011

## Anleitung zum Starten eines Angular-Projekts

**Voraussetzungen:**

Stellen Sie sicher, dass Sie Node.js und die Angular CLI (Command Line Interface) auf Ihrem Computer installiert haben.

- Node.js: [Node.js-Website](https://nodejs.org/)
- Angular CLI: [Angular CLI-Dokumentation](https://angular.io/cli)

**Schritte zum Starten:**

1. **Projekt klonen:** Klonen Sie Ihr Angular-Projekt von Ihrem Git-Repository auf Ihren Computer.

   ```bash
   git clone <repository-url>
   ```

   Ersetzen Sie `<repository-url>` durch die URL Ihres Git-Repositories.

2. **Projektverzeichnis wechseln:** Navigieren Sie in das Projektverzeichnis:

   ```bash
   cd <projektverzeichnis>
   ```

   Ersetzen Sie `<projektverzeichnis>` durch den Namen Ihres Projektverzeichnisses.

3. **Abhängigkeiten installieren:** Installieren Sie die erforderlichen Abhängigkeiten, indem Sie den folgenden Befehl
   ausführen:

   ```bash
   npm install
   ```

4. **Anwendung starten:** Starten Sie Ihre Angular-Anwendung mit dem Befehl:

   ```bash
   ng serve
   ```

5. **Öffnen Sie den Browser:** Öffnen Sie Ihren Webbrowser und navigieren Sie zu `http://localhost:4200/`, um Ihre
   Angular-Anwendung anzuzeigen.

6. **Beenden:** Um den Entwicklungsserver zu stoppen, drücken Sie `Ctrl + C` in Ihrer Befehlszeile und bestätigen Sie,
   wenn Sie dazu aufgefordert werden.

Das war's! Sie haben erfolgreich Ihr Angular-Projekt lokal gestartet und können mit der Entwicklung beginnen.
Während `ng serve` läuft, werden Änderungen im Code automatisch erkannt und die Anwendung wird aktualisiert, sodass Sie
Ihre Arbeit in Echtzeit überprüfen können.

## Projektbeschreibung

### Antwort zur Frage

Die Daten kommen als JSON (JavaScript Object Notation) zurück. Das ist das Standardformat für JavaScript-Anwendungen.

### Verwendete Technologien

1. Angular v16.2
2. Tailwind CSS (SCSS)

### Anforderungsdokumentation

**Umgesetzte Aufgaben und Anforderungen:**

1. Abruf von Events aus der API.
2. Sortierung der Events nach Datum.
3. Sticky-Darstellung des Datums in der Sektion.
4. Hinzufügen von Event-Items in den Warenkorb mit einer Modal-Ansicht zur Übersicht der Items.
5. Öffnen von Google Maps beim Klicken auf den Standort.
6. Implementierung einer Suchleiste zur Filterung von Events nach Titel.

**Zusätzliche Aufgaben:**

1. Implementierung einer Funktion zum Löschen von Items aus dem Warenkorb.
2. Lazy Loading für alle Event-Bilder.
3. Erstellung einer Einstellungsseite, auf der die Anzahl der Spalten und der bevorzugte Veranstaltungsort im Local
   Storage gespeichert werden.

### Architektur

**DataRepository-Service:**

Dieser Service dient der Speicherung und Verwaltung aller wichtigen Objekte innerhalb der Anwendung, wie z.B. der
Event-Liste und dem Warenkorb.

**Models & Interfaces:**

Alle relevanten Objekte wurden typisiert und in separaten Model-Dateien mit Interfaces beschrieben.

***PS: Bitte beachten Sie, dass es sich hierbei bewusst um eine kompakte Dokumentation handelt, die die wesentlichen
Informationen vermittelt.***