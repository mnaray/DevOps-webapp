---
sidebar_position: 1
title: Dokumentation
---
:::note

Dies ist die Dokumentation des Projekts. Sie wurde nach IPERKA umgesetzt. Es wird der Ablauf und die Vorgehensweise des ganzen Projekts dokumentiert.

In diesem Projekt erstellen wir eine kleine Webanwendung welche Trivia-Fragen verschiedener Kategorien aus einer Datenbank fetcht und dann auf der dazugehörigen Seite ausgibt. Der Fokus liegt jedoch bei den verwendeten DevOps-Tools.

:::

## Informieren

In diesem Kapitel der Dokumentation wird die Phase festgehalten, in welcher wir uns über alles Nötige informieren. Dazu gehören die Anforderungen und die Auflistung [**aller verwendeten Quellen**](#quellen).

### Was versteht man unter DevOps-Tools?

DevOps-Tools sind Softwarewerkzeuge, die verwendet werden, um die Kluft zwischen Entwicklung (Dev) und Betrieb (Ops) in der Softwareentwicklung zu überbrücken. Diese Tools automatisieren, überwachen und unterstützen den gesamten Softwarebereitstellungsprozess, um eine schnellere Entwicklung, höhere Qualität und zuverlässigere Bereitstellung von Anwendungen zu ermöglichen. Sie reichen von Versionskontrolle und Build-Automatisierung bis hin zu Konfigurationsmanagement und kontinuierlicher Bereitstellung, um eine nahtlose Zusammenarbeit zwischen Entwicklungs- und Operations-Teams zu fördern.

### Was ist unser Ziel?

In diesem Projekt unser Ziel, eine einfache, funktionsfähige SPA zu erstellen. Sie soll beim Daten von einer API fetchen und diese dann auf der Seite anzeigen.

Dabei möchten wir über den ganzen Prozess hinweg DevOps-Tools verwenden, um die Entwicklung einfacher zu gestalten. Wir wollen uns in das Modul 324 (DevOps-Prozesse mit Tools unterstützen) vertiefen und dadurch eine bessere Note an der Leistungsbeurteilung erzielen.

### Anforderungen

In der folgenden Tabelle sind die Anforderungen für das Projekt.


| Nr. | Muss/<br />Kann | funk./<br />qual./ rand | Beschreibung                                                                     |
| ----- | ----------------- | ------------------------- | :--------------------------------------------------------------------------------- |
| 1   | M               | funk.                   | Die Anwendung soll durch eine Pipeline bereitgestellt werden.                    |
| 2   | M               | funk.                   | Die Anwendung soll durch eine Pipeline automatisch deployed werden.              |
| 3   | M               | funk.                   | Die Anwendung soll vor der Bereitstellung gelintet werden.                       |
| 4   | M               | funk.                   | Vor dem Bereitstellen sollen Unittests durchgeführt werden.                     |
| 5   | M               | funk.                   | Vor dem Bereitstellen sollen Integrationstests durchgeführt werden.             |
| 6   | M               | qual.                   | Die Anwendung soll nur bereitgestellt werden, wenn alle Tests erfolgreich waren. |
| 7   | M               | qual.                   | Die Anwendung soll in der Pipeline auf Vulnerabilities getestet werden.          |
| 8   | M               | qual.                   | Die Anwendung soll einen HTML-Titel(`<h1>`) haben.                               |
| 9   | M               | rand                    | Die Anwendung soll eine API integriert haben.                                    |
| 10  | M               | funk.                   | Die Anwendung soll mindestens ein Objekt von dieser API fetchen können.         |
| 11  | M               | funk.                   | Die Anwendung soll alle gefetchten Objekte im UI darstellen können.             |
| 12  | M               | rand                    | Der Cloudanbieter soll Deta sein.                                                |
| 13  | M               | rand                    | Die Anwendung soll mit SvelteKit erstellt sein.                                  |

### Technologien

Für dieses Projekt habe ich folgende Technologien verwendet:

- [Deta Space](https://deta.space)
- [Svelte](https://svelte.dev)
- [GitHub](https://github.com)
- [Snyk](https://snyk.io/de/)
- [NPM](https://www.npmjs.com/)
- [Playwright](https://playwright.dev/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky Git-Hooks](https://www.npmjs.com/package/husky)

### Quellen

Hier sind alle Quellen aufgelistet, welche während dem Aublauf des Projekts als Hilfe oder Orientation verwendet wurden.

- [Deta Space Dokumentation](https://deta.space/docs/en)
- [Svelte Dokumentation](https://svelte.dev/docs/introduction)
- [GitHub Actions Dokumentation](https://docs.github.com/de/actions)
- [Snyk Dokumentation](https://docs.snyk.io/)
- [Vitest Dokumentation](https://vitest.dev/guide/)
- [Playwright Dokumetation](https://playwright.dev/docs/intro)
- [Husky Dokumentation](https://typicode.github.io/husky/guide.html)
- [Veränderungen einbuchen nach Formatierung in Hooks](https://stackoverflow.com/questions/71753958/git-add-same-files-in-precommit-after-formatting-cannot-add-deleted-files)

## Planen

### Arbeitspakete


| Nr. | Frist      | Beschreibung                                                                                                        | Geplante Zeit in Paketen |
| ----- | ------------ | :-------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 1   | 17.08.2023 | Informieren (von IPERKA): Technologien, Quellen und Informationen heraussuchen, Ziele setzen                        | 10                       |
| 2   | 31.08.2023 | Planen und Entscheiden (von IPERKA): Zeitplan & Tests erstellen (manuell & automatisch), über Optionen entscheiden | 10                       |
| 3.1 | 7.09.2023  | Realisieren (von IPERKA): DevOps-Pipelines aufsetzen                                                                | 15                       |
| 3.2 | 14.09.2023 | Realisieren (von IPERKA): Webapp implementieren                                                                     | 11                       |
| 4   | 21.09.2023 | Kontrollieren (von IPERKA): Alle Tests ausführen, protokollieren & Testbericht verfassen                           | 4                        |
| 5   | 21.09.2023 | Auswerten (von IPERKA): Reflexion auf das Projekt                                                                   | 4                        |
| 6   | 21.09.2023 | Portfolioeintrag bis am Abend                                                                                       | 6 (ggf. mehr)            |

:::info

1x Arbeitspaket = 45 Minuten = 1x Schullektion

1x Halbtag = 5x Arbeitspakete

6x Halbtage = 30x Arbeitspakete

30x Arbeitspakete * 2x Mitglieder = **60x Arbeitspakete**

:::

### Testfälle


| Testf.<br />Nr. | Anf.<br />Nr. | Voraussetzungen                  | Testumgebung                                      | Eingabe/Aktion                          | Erw. Ausgabe                                  |
| ----------------- | --------------- | ---------------------------------- | --------------------------------------------------- | ----------------------------------------- | :---------------------------------------------- |
| 1               | 1             | -                                | Actions, Vite                                     | PR in main                              | Pipeline erstellt Build.                      |
| 2               | 2             | Build ist als Artefakt vorhanden | Deta Space, Actions                               | Pipeline erstellt Build.                | Revision auf Deta                             |
| 3               | 3             | -                                | ESLint, Prettier, Actions                         | PR eröffnen                            | Pipeline lintet Code                          |
| 4               | 4             | -                                | Vite                                              | PR in main                              | Unittests werden durchgeführt                |
| 5               | 5             | -                                | Playwright                                        | PR in main                              | Integrationstzests werden durchgeführt       |
| 6.1             | 6             | Tests werden ausgeführt         | Actions, Vite, ESLint, Prettier, Playwright, Snyk | PR in main, Tests erfoglgen, PR in main | Pipeline erstellt Build.                      |
| 6.2             | 6             | Tests werden ausgeführt         | Actions, Vite, ESLint, Prettier, Playwright, Snyk | PR in main, Tests failen.               | PR abgelehnt. Pipeline erstellt keinen Build. |
| 7               | 7             | -                                | Snyk                                              | PR in main                              | Anwendung wird auf Vulnerabilities getestet   |
| 8               | 8             | -                                | Playwright, Vite                                  | PR in main                              | Test für diese Anforderung erfolgreich.      |
| 9               | 9             | -                                | Playwright, Vite                                  | PR in main                              | Test für diese Anforderung erfolgreich.      |
| 10              | 10            | -                                | Playwright, Vite                                  | PR in main                              | Test für diese Anforderung erfolgreich.      |
| 11              | 11            | -                                | Playwright                                        | PR in main                              | Test für diese Anforderung erfolgreich.      |

#### Testumgebungen

- Visual Studio Code (VSC)
  - Version: 1.82.1 (user setup)
  - Commit: 6509174151d557a81c9d0b5f8a5a1e9274db5585
  - Date: 2023-09-08T08:45:05.575Z
  - Electron: 25.8.0
  - Chromium: 114.0.5735.289
  - Node.js: 18.15.0
  - V8: 11.4.183.29-electron.0
  - OS: Windows_NT x64 10.0.19045
- Chrome (für PDFs und Dokumentation)
  - Version: 117.0.5938.63 (Official Build) (64-bit)
- Node.js (für das Projekt)
  - Version: v16.15.1

## Entscheiden

### Welche API?

Uns standen verschiedene APIs zur Verfügung. Viele waren zwar interessant, hatten jedoch ein tiefes Rate-Limit. Wir sind auf der Suche nach einer kostenlosen API, die sich für dieses Projekt eignet auf [API Ninjas](https://api-ninjas.com/) gestossen. Auf dieser Seite gibt es eine grosse Auswahl an APIs. Wir fanden die Jokes-API und die Trivia-API perfekt für unsere *einfache* Anwendung.

Die Jokes-API hat zwar ein sehr einfaches Interface, jedoch nur ein einziges Feld für die Datensätze. Dies ist zwar toll für eine schnelle und möglichst fehlerfreie Implementierung, aber dabei würden wir ja die Tools in der Pipeline gradezu nicht nutzen müssen.
Deshalb entschieden wir uns für die Trivia-API. Diese hat drei Felder: `category`, `question` und `answer`. Das gibt ein bisschen mehr zu programmieren in der Realisierungsphase, da wir noch z.B. einen Kategoriefilter einbauen können.

### Welche Pipeline Integrationen?

Die Pipelines in den GitHub-Actions sind das Zentrum von diesem Projekt. Wir möchten welche aufsetzen, die ein wenig anspruchsvoller in der Umsetzung sind, damit wir unsere Kenntnisse besser entwickeln können.

Wir haben uns dafür entschieden, die Anwendung in einer Cloud zu hosten, dort, wo Webanwendungen im alltäglichen Betrieb laufen. Wir möchten, dass die Pipeline die Änderungen auf dem `main`-Branch nach jeder Pullrequest in die Cloud deployt. Für unseren Use-Case können wir dafür die [Deta-Space](https://deta.space) Cloud mit ihrem [Workflow für das Pushen von Änderungen](https://github.com/marketplace/actions/deta-space-deployment-github-action) verwenden.

Da unser Projekt eine Webanwendung mit vielen Dependencies ist, gehört auch ein Security-Check dazu. Hierfür möchten wir [Snyk](https://snyk.io/de) in die Pipeline einbauen.

In Sachen Testing gibt es zwei bereiche, für die wir uns hier Interessieren; Das Testen der Code-Logik und das Testen der Nutzeroberfläche. Für alles was mit Logik zu tun hat, werden wir [Vitest](https://vitest.dev/) einsetzen. Bei allem was mit der Nutzeroberfläche zu tun hat, werden wir [Playwright](https://playwright.dev/) einsetzen. Diese beiden Tools möchten wir auch in die Pipeline einbauen.

Damit wir in der Gruppe dieselben Code-Konventionen einhalten können, möchten wir auch [ESlint](https://eslint.org) und [Prettier](https://prettier.io/) integrieren. Das nicht nur lokal, sondern auch in der Pipeline, damit nur sauberer Code in die Cloud kommt.

### Sollen wir Git-Hooks verwenden?

Wir haben in der Zwischenzeit über Git-Hooks im Modul 324 gelernt. Wir haben uns dafür entschieden, diese für das Code-Styling zu verwenden. So ist es nicht möglich, nicht den Konventionen entsprechenden Code einzubuchen, da vor jedem Commit formatiert und dann gelintet wird.

Für die pre-Commit Hooks wird [Husky](https://www.npmjs.com/package/husky) verwendet. So kann das Script einfach von Menschen gelesen und bearbeitet werden, ohne in das `.git/hooks/` directory wechseln zu müssen. Das Aufsetzen in einer frisch gecloneten Repository ist auch schnell gemacht mit `npm run prepare`.

## Realisieren

### Hilfestellung

Um dieses Projekt zu realisieren haben wir diese [Quellen](#quellen) zu unserer Hilfe genommen.
Manchmal sind wir auch zu der betreuenden Lehrperson im Lernatelier (Daniel Lauk) für Ratschlag oder eine zweite Meinung gegangen.
So konnten wir schlussendlich alle Hürden, die während der Implementation aufgetreten sind, überwinden.

### Was wurde realisiert?

Die Anwendung, die realisiert wurde, besteht aus einem Svelte-Kit Projekt, das Fragen von einer API lädt und diese darstellt als Komponenten.

Für die Implementierung dieser Anwendung wurden diverse Pipelines für die CI und CD aufgesetzt. Zu diesen gehören zum Beispiel das Testen vor dem Mergen einer PR und das automatische Deployen, sobald etwas neues eingetragen wurde. Ausserdem wurde noch ein pre-Commit Hook eingebunden, damit der Code vor jedem Commit formatiert und gelintet werden kann.

### Vorgehen bei der Realisierung

Da hier der DevOps-Prozess im Mittelpunkt steht haben wir Zuerst alle Pipelines, Tests und Tools mit einer Vorlage von Svelte aufgesetzt. Das alles musste natürlich noch vor der hauptsächlichen Entwicklung getestet und konfiguriert werden, damit der ganze Prozess sauber ablaufen kann. Ausserdem wurden noch Branch-Protection-Regeln eingestellt, damit keiner direkte Commits auf `main` machen kann.

Im nächsten Schritt konnten wir mit der Entwicklung beginnen. Dabei haben wir für jede Aufgabe einen eigenen Branch erstellt, um Konflikte zu vermeiden. Jeder Branch musste über eine Pull-Request gemerget werden, wobei jegliche Tests in Pipelines durchgeführt wurden. Sobald alle Tests erfolgreich waren, konnte ein Merge in `main` vorgenommen werden, davor war es durch die Branch-Protection-Regeln blockiert.

Im letzten Schritt wurde jeweils nach dem Merge die Dokumentation, falls es Änderungen gab, auf GitHub-Pages deployed und die Svelte-App in die Cloud gepusht.

### Ausführung


| Nr. | Frist      | Beschreibung                                                                                                        | Geplante Zeit | Effektive Zeit |
| ----- | ------------ | :-------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------- |
| 1   | 17.08.2023 | Informieren (von IPERKA): Technologien, Quellen und Informationen heraussuchen, Ziele setzen                        | 10            | 10             |
| 2   | 31.08.2023 | Planen und Entscheiden (von IPERKA): Zeitplan & Tests erstellen (manuell & automatisch), über Optionen entscheiden | 10            | 10             |
| 3.1 | 7.09.2023  | Realisieren (von IPERKA): DevOps-Pipelines aufsetzen                                                                | 15            | 10             |
| 3.2 | 14.09.2023 | Realisieren (von IPERKA): Webapp implementieren                                                                     | 11            | 13             |
| 4   | 21.09.2023 | Kontrollieren (von IPERKA): Alle Tests ausführen, protokollieren & Testbericht verfassen                           | 4             |                |
| 5   | 21.09.2023 | Auswerten (von IPERKA): Reflexion auf das Projekt                                                                   | 4             |                |
| 6   | 21.09.2023 | Portfolioeintrag bis am Abend                                                                                       | 6 (ggf. mehr) |                |

:::info

1x Arbeitspaket = 45 Minuten = 1x Schullektion

1x Halbtag = 5x Arbeitspakete

6x Halbtage = 30x Arbeitspakete

30x Arbeitspakete * 2x Mitglieder = **60x Arbeitspakete**

:::

## Kontrollieren

### Testprotokoll


| <br />Test-Nr. | Bemerkung | Resultat | Datum | Visum |
| ---------------- | ----------- | ---------- | ------- | ------- |
|                |           |          |       |       |

### Testfazit

. . .

## Auswerten

### Produkt

Wir haben uns [hier](#was-ist-unser-ziel) vorgenommen, dass ich . . .

### Arbeitsprozess

Während diesem Projekt haben wir viel neues gelernt . . .
