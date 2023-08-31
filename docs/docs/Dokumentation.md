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


| Nr. | Muss/<br />Kann | funk./<br />qual./ rand | Beschreibung |
| --- | --------------- | ----------------------- | ------------ |
|     |                 |                         |              |

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

### Quellen

Hier sind alle Quellen aufgelistet, welche während dem Aublauf des Projekts als Hilfe oder Orientation verwendet wurden.

- [Deta Space Dokumentation](https://deta.space/docs/en)
- [Svelte Dokumentation](https://svelte.dev/docs/introduction)
- [GitHub Actions Dokumentation](https://docs.github.com/de/actions)
- [Snyk Dokumentation](https://docs.snyk.io/)

## Planen

### Arbeitspakete


| Nr. | Frist      | Beschreibung                                                                                                       | Geplante Zeit in Paketen |
| --- | ---------- | :----------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 1   | 17.08.2023 | Informieren (von IPERKA): Technologien, Quellen und Informationen heraussuchen, Ziele setzen                       | 10                       |
| 2   | 31.08.2023 | Planen und Entscheiden (von IPERKA): Zeitplan & Tests erstellen (manuell & automatisch), über Optionen entscheiden | 10                       |
| 3.1 | 7.09.2023  | Realisieren (von IPERKA): DevOps-Pipelines aufsetzen                                                               | 15                       |
| 3.2 | 7.09.2023  | Realisieren (von IPERKA): Webapp implementieren                                                                    | 11                       |
| 4   | 21.09.2023 | Kontrollieren (von IPERKA): Alle Tests ausführen, protokollieren & Testbericht verfassen                           | 4                        |
| 5   | 21.09.2023 | Auswerten (von IPERKA): Reflexion auf das Projekt                                                                  | 4                        |
| 6   | 21.09.2023 | Portfolioeintrag bis am Abend                                                                                      | 6 (ggf. mehr)            |

:::info

1x Arbeitspaket = 45 Minuten = 1x Schullektion

1x Halbtag = 5x Arbeitspakete

6x Halbtage = 30x Arbeitspakete

30x Arbeitspakete * 2x Mitglieder = **60x Arbeitspakete**

:::

### Testfälle


| Testf.<br />Nr. | Anf.<br />Nr. | Voraussetzungen | Testumgebung | Eingabe/Aktion | Erw. Ausgabe |
| --------------- | ------------- | --------------- | ------------ | -------------- | ------------ |
|                 |               |                 |              |                |              |

#### Testumgebungen

- Visual Studio Code (VSC)
  - Version: 1.78.2 (user setup)
  - Commit: b3e4e68a0bc097f0ae7907b217c1119af9e03435
  - Date: 2023-05-10T14:39:26.248Z
  - Electron: 22.5.2
  - Chromium: 108.0.5359.215
  - Node.js: 16.17.1
  - V8: 10.8.168.25-electron.0
  - OS: Windows_NT x64 10.0.19045
  - Sandboxed: Yes
- Chrome (für PDFs und Dokumentation)
  - Version: 114.0.5735.134 (Official Build) (64-bit)

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

## Realisieren

### Hilfestellung

Um dieses Projekt zu realisieren haben wir diese [Quellen](#quellen) zu unserer Hilfe genommen.
Manchmal sind wir auch zu der betreuenden Lehrperson im Lernatelier (Daniel Lauk) für Ratschlag oder eine zweite Meinung gegangen.
So konnten wir schlussendlich alle Hürden, die während der Implementation aufgetreten sind, überwinden.

### Was wurde realisiert?

Die Anwendung . . .

### Vorgehen bei der Realisierung

Da hier der DevOps-Prozess im Mittelpunkt steht . . .

### Ausführung


| Nr. | Frist | Bemerkung | Zeit geplant | Zeit effektiv |
| --- | ----- | --------- | ------------ | ------------- |
|     |       |           |              |               |

## Kontrollieren

### Testprotokoll


| <br />Test-Nr. | Bemerkung | Resultat | Datum | Visum |
| -------------- | --------- | -------- | ----- | ----- |
|                |           |          |       |       |

### Testfazit

. . .

## Auswerten

### Produkt

Wir haben uns [hier](#was-ist-unser-ziel) vorgenommen, dass ich . . .

### Arbeitsprozess

Während diesem Projekt haben wir viel neues gelernt . . .
