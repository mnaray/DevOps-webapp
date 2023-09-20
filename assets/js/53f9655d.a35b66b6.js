"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),o=s(n),k=r,g=o["".concat(u,".").concat(k)]||o[k]||m[k]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[o]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,title:"Dokumentation"},i=void 0,d={unversionedId:"Dokumentation",id:"Dokumentation",title:"Dokumentation",description:"Dies ist die Dokumentation des Projekts. Sie wurde nach IPERKA umgesetzt. Es wird der Ablauf und die Vorgehensweise des ganzen Projekts dokumentiert.",source:"@site/docs/Dokumentation.md",sourceDirName:".",slug:"/Dokumentation",permalink:"/DevOps-webapp/docs/Dokumentation",draft:!1,editUrl:"https://github.com/mnaray/DevOps-webapp/edit/main/docs/docs/Dokumentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Dokumentation"},sidebar:"tutorialSidebar"},u={},s=[{value:"Informieren",id:"informieren",level:2},{value:"Was versteht man unter DevOps-Tools?",id:"was-versteht-man-unter-devops-tools",level:3},{value:"Was ist unser Ziel?",id:"was-ist-unser-ziel",level:3},{value:"Anforderungen",id:"anforderungen",level:3},{value:"Technologien",id:"technologien",level:3},{value:"Quellen",id:"quellen",level:3},{value:"Planen",id:"planen",level:2},{value:"Arbeitspakete",id:"arbeitspakete",level:3},{value:"Testf\xe4lle",id:"testf\xe4lle",level:3},{value:"Testumgebungen",id:"testumgebungen",level:4},{value:"Entscheiden",id:"entscheiden",level:2},{value:"Welche API?",id:"welche-api",level:3},{value:"Welche Pipeline Integrationen?",id:"welche-pipeline-integrationen",level:3},{value:"Sollen wir Git-Hooks verwenden?",id:"sollen-wir-git-hooks-verwenden",level:3},{value:"Realisieren",id:"realisieren",level:2},{value:"Hilfestellung",id:"hilfestellung",level:3},{value:"Was wurde realisiert?",id:"was-wurde-realisiert",level:3},{value:"Vorgehen bei der Realisierung",id:"vorgehen-bei-der-realisierung",level:3},{value:"Ausf\xfchrung",id:"ausf\xfchrung",level:3},{value:"Kontrollieren",id:"kontrollieren",level:2},{value:"Testprotokoll",id:"testprotokoll",level:3},{value:"Testfazit",id:"testfazit",level:3},{value:"Auswerten",id:"auswerten",level:2},{value:"Produkt",id:"produkt",level:3},{value:"Arbeitsprozess",id:"arbeitsprozess",level:3}],p={toc:s};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Dies ist die Dokumentation des Projekts. Sie wurde nach IPERKA umgesetzt. Es wird der Ablauf und die Vorgehensweise des ganzen Projekts dokumentiert."),(0,r.kt)("p",{parentName:"admonition"},"In diesem Projekt erstellen wir eine kleine Webanwendung welche Trivia-Fragen verschiedener Kategorien aus einer Datenbank fetcht und dann auf der dazugeh\xf6rigen Seite ausgibt. Der Fokus liegt jedoch bei den verwendeten DevOps-Tools.")),(0,r.kt)("h2",{id:"informieren"},"Informieren"),(0,r.kt)("p",null,"In diesem Kapitel der Dokumentation wird die Phase festgehalten, in welcher wir uns \xfcber alles N\xf6tige informieren. Dazu geh\xf6ren die Anforderungen und die Auflistung ",(0,r.kt)("a",{parentName:"p",href:"#quellen"},(0,r.kt)("strong",{parentName:"a"},"aller verwendeten Quellen")),"."),(0,r.kt)("h3",{id:"was-versteht-man-unter-devops-tools"},"Was versteht man unter DevOps-Tools?"),(0,r.kt)("p",null,"DevOps-Tools sind Softwarewerkzeuge, die verwendet werden, um die Kluft zwischen Entwicklung (Dev) und Betrieb (Ops) in der Softwareentwicklung zu \xfcberbr\xfccken. Diese Tools automatisieren, \xfcberwachen und unterst\xfctzen den gesamten Softwarebereitstellungsprozess, um eine schnellere Entwicklung, h\xf6here Qualit\xe4t und zuverl\xe4ssigere Bereitstellung von Anwendungen zu erm\xf6glichen. Sie reichen von Versionskontrolle und Build-Automatisierung bis hin zu Konfigurationsmanagement und kontinuierlicher Bereitstellung, um eine nahtlose Zusammenarbeit zwischen Entwicklungs- und Operations-Teams zu f\xf6rdern."),(0,r.kt)("h3",{id:"was-ist-unser-ziel"},"Was ist unser Ziel?"),(0,r.kt)("p",null,"In diesem Projekt unser Ziel, eine einfache, funktionsf\xe4hige SPA zu erstellen. Sie soll Daten von einer API fetchen und diese dann auf der Seite anzeigen."),(0,r.kt)("p",null,"Dabei m\xf6chten wir \xfcber den ganzen Prozess hinweg DevOps-Tools verwenden, um die Entwicklung einfacher zu gestalten. Wir wollen uns in das Modul 324 (DevOps-Prozesse mit Tools unterst\xfctzen) vertiefen und unsere Kenntnisse somit erweitern."),(0,r.kt)("h3",{id:"anforderungen"},"Anforderungen"),(0,r.kt)("p",null,"In der folgenden Tabelle sind die Anforderungen f\xfcr das Projekt."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nr."),(0,r.kt)("th",{parentName:"tr",align:null},"Muss/",(0,r.kt)("br",null),"Kann"),(0,r.kt)("th",{parentName:"tr",align:null},"funk./",(0,r.kt)("br",null),"qual./ rand"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"funk."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Die Anwendung soll durch eine Pipeline bereitgestellt werden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"funk."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Die Anwendung soll durch eine Pipeline automatisch deployed werden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"funk."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Die Anwendung soll vor der Bereitstellung gelintet werden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"funk."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Vor dem Bereitstellen sollen Unittests durchgef\xfchrt werden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"funk."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Vor dem Bereitstellen sollen Integrationstests durchgef\xfchrt werden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"qual."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Die Anwendung soll nur bereitgestellt werden, wenn alle Tests erfolgreich waren.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"qual."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Die Anwendung soll in der Pipeline auf Vulnerabilities getestet werden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"qual."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Die Anwendung soll einen HTML-Titel(",(0,r.kt)("inlineCode",{parentName:"td"},"<h1>"),") haben.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"rand"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Die Anwendung soll eine API integriert haben.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"funk."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Die Anwendung soll mindestens ein Objekt von dieser API fetchen k\xf6nnen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"funk."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Die Anwendung soll alle gefetchten Objekte im UI darstellen k\xf6nnen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"rand"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Der Cloudanbieter soll Deta sein.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"rand"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Die Anwendung soll mit SvelteKit erstellt sein.")))),(0,r.kt)("h3",{id:"technologien"},"Technologien"),(0,r.kt)("p",null,"F\xfcr dieses Projekt habe ich folgende Technologien verwendet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://deta.space"},"Deta Space")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://svelte.dev"},"Svelte")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com"},"GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://snyk.io/de/"},"Snyk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"NPM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://playwright.dev/"},"Playwright")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vitejs.dev/"},"Vite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eslint.org/"},"ESLint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://prettier.io/"},"Prettier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/husky"},"Husky Git-Hooks"))),(0,r.kt)("h3",{id:"quellen"},"Quellen"),(0,r.kt)("p",null,"Hier sind alle Quellen aufgelistet, welche w\xe4hrend dem Aublauf des Projekts als Hilfe oder Orientation verwendet wurden."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://deta.space/docs/en"},"Deta Space Dokumentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://svelte.dev/docs/introduction"},"Svelte Dokumentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/de/actions"},"GitHub Actions Dokumentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.snyk.io/"},"Snyk Dokumentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vitest.dev/guide/"},"Vitest Dokumentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/intro"},"Playwright Dokumetation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://typicode.github.io/husky/guide.html"},"Husky Dokumentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/71753958/git-add-same-files-in-precommit-after-formatting-cannot-add-deleted-files"},"Ver\xe4nderungen einbuchen nach Formatierung in Hooks"))),(0,r.kt)("h2",{id:"planen"},"Planen"),(0,r.kt)("h3",{id:"arbeitspakete"},"Arbeitspakete"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nr."),(0,r.kt)("th",{parentName:"tr",align:null},"Frist"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"),(0,r.kt)("th",{parentName:"tr",align:null},"Geplante Zeit in Paketen"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"17.08.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Informieren (von IPERKA): Technologien, Quellen und Informationen heraussuchen, Ziele setzen"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"31.08.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Planen und Entscheiden (von IPERKA): Zeitplan & Tests erstellen (manuell & automatisch), \xfcber Optionen entscheiden"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3.1"),(0,r.kt)("td",{parentName:"tr",align:null},"7.09.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Realisieren (von IPERKA): DevOps-Pipelines aufsetzen"),(0,r.kt)("td",{parentName:"tr",align:null},"15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3.2"),(0,r.kt)("td",{parentName:"tr",align:null},"14.09.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Realisieren (von IPERKA): Webapp implementieren"),(0,r.kt)("td",{parentName:"tr",align:null},"11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"21.09.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kontrollieren (von IPERKA): Alle Tests ausf\xfchren, protokollieren & Testbericht verfassen"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"21.09.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Auswerten (von IPERKA): Reflexion auf das Projekt"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"21.09.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Portfolioeintrag bis am Abend"),(0,r.kt)("td",{parentName:"tr",align:null},"6 (ggf. mehr)")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"1x Arbeitspaket = 45 Minuten = 1x Schullektion"),(0,r.kt)("p",{parentName:"admonition"},"1x Halbtag = 5x Arbeitspakete"),(0,r.kt)("p",{parentName:"admonition"},"6x Halbtage = 30x Arbeitspakete"),(0,r.kt)("p",{parentName:"admonition"},"30x Arbeitspakete * 2x Mitglieder = ",(0,r.kt)("strong",{parentName:"p"},"60x Arbeitspakete"))),(0,r.kt)("h3",{id:"testf\xe4lle"},"Testf\xe4lle"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Testf.",(0,r.kt)("br",null),"Nr."),(0,r.kt)("th",{parentName:"tr",align:null},"Anf.",(0,r.kt)("br",null),"Nr."),(0,r.kt)("th",{parentName:"tr",align:null},"Voraussetzungen"),(0,r.kt)("th",{parentName:"tr",align:null},"Testumgebung"),(0,r.kt)("th",{parentName:"tr",align:null},"Eingabe/Aktion"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Erw. Ausgabe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Actions, Vite"),(0,r.kt)("td",{parentName:"tr",align:null},"PR in main"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pipeline erstellt Build.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Build ist als Artefakt vorhanden"),(0,r.kt)("td",{parentName:"tr",align:null},"Deta Space, Actions"),(0,r.kt)("td",{parentName:"tr",align:null},"Pipeline erstellt Build."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Revision auf Deta")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"ESLint, Prettier, Actions"),(0,r.kt)("td",{parentName:"tr",align:null},"PR er\xf6ffnen"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pipeline lintet Code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Vite"),(0,r.kt)("td",{parentName:"tr",align:null},"PR in main"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unittests werden durchgef\xfchrt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Playwright"),(0,r.kt)("td",{parentName:"tr",align:null},"PR in main"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integrationstzests werden durchgef\xfchrt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6.1"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Tests werden ausgef\xfchrt"),(0,r.kt)("td",{parentName:"tr",align:null},"Actions, Vite, ESLint, Prettier, Playwright, Snyk"),(0,r.kt)("td",{parentName:"tr",align:null},"PR in main, Tests erfoglgen, PR in main"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pipeline erstellt Build.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6.2"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Tests werden ausgef\xfchrt"),(0,r.kt)("td",{parentName:"tr",align:null},"Actions, Vite, ESLint, Prettier, Playwright, Snyk"),(0,r.kt)("td",{parentName:"tr",align:null},"PR in main, Tests failen."),(0,r.kt)("td",{parentName:"tr",align:"left"},"PR abgelehnt. Pipeline erstellt keinen Build.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Snyk"),(0,r.kt)("td",{parentName:"tr",align:null},"PR in main"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Anwendung wird auf Vulnerabilities getestet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Playwright, Vite"),(0,r.kt)("td",{parentName:"tr",align:null},"PR in main"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test f\xfcr diese Anforderung erfolgreich.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Playwright, Vite"),(0,r.kt)("td",{parentName:"tr",align:null},"PR in main"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test f\xfcr diese Anforderung erfolgreich.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Playwright, Vite"),(0,r.kt)("td",{parentName:"tr",align:null},"PR in main"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test f\xfcr diese Anforderung erfolgreich.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Playwright"),(0,r.kt)("td",{parentName:"tr",align:null},"PR in main"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test f\xfcr diese Anforderung erfolgreich.")))),(0,r.kt)("h4",{id:"testumgebungen"},"Testumgebungen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visual Studio Code (VSC)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Version: 1.82.1 (user setup)"),(0,r.kt)("li",{parentName:"ul"},"Commit: 6509174151d557a81c9d0b5f8a5a1e9274db5585"),(0,r.kt)("li",{parentName:"ul"},"Date: 2023-09-08T08:45:05.575Z"),(0,r.kt)("li",{parentName:"ul"},"Electron: 25.8.0"),(0,r.kt)("li",{parentName:"ul"},"Chromium: 114.0.5735.289"),(0,r.kt)("li",{parentName:"ul"},"Node.js: 18.15.0"),(0,r.kt)("li",{parentName:"ul"},"V8: 11.4.183.29-electron.0"),(0,r.kt)("li",{parentName:"ul"},"OS: Windows_NT x64 10.0.19045"))),(0,r.kt)("li",{parentName:"ul"},"Chrome (f\xfcr PDFs und Dokumentation)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Version: 117.0.5938.63 (Official Build) (64-bit)"))),(0,r.kt)("li",{parentName:"ul"},"Node.js (f\xfcr das Projekt)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Version: v16.15.1")))),(0,r.kt)("h2",{id:"entscheiden"},"Entscheiden"),(0,r.kt)("h3",{id:"welche-api"},"Welche API?"),(0,r.kt)("p",null,"Uns standen verschiedene APIs zur Verf\xfcgung. Viele waren zwar interessant, hatten jedoch ein tiefes Rate-Limit. Wir sind auf der Suche nach einer kostenlosen API, die sich f\xfcr dieses Projekt eignet auf ",(0,r.kt)("a",{parentName:"p",href:"https://api-ninjas.com/"},"API Ninjas")," gestossen. Auf dieser Seite gibt es eine grosse Auswahl an APIs. Wir fanden die Jokes-API und die Trivia-API perfekt f\xfcr unsere ",(0,r.kt)("em",{parentName:"p"},"einfache")," Anwendung."),(0,r.kt)("p",null,"Die Jokes-API hat zwar ein sehr einfaches Interface, jedoch nur ein einziges Feld f\xfcr die Datens\xe4tze. Dies ist zwar toll f\xfcr eine schnelle und m\xf6glichst fehlerfreie Implementierung, aber dabei w\xfcrden wir ja die Tools in der Pipeline gradezu nicht nutzen m\xfcssen.\nDeshalb entschieden wir uns f\xfcr die Trivia-API. Diese hat drei Felder: ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"question")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"answer"),". Das gibt ein bisschen mehr zu programmieren in der Realisierungsphase, da wir noch z.B. einen Kategoriefilter einbauen k\xf6nnen."),(0,r.kt)("h3",{id:"welche-pipeline-integrationen"},"Welche Pipeline Integrationen?"),(0,r.kt)("p",null,"Die Pipelines in den GitHub-Actions sind das Zentrum von diesem Projekt. Wir m\xf6chten welche aufsetzen, die ein wenig anspruchsvoller in der Umsetzung sind, damit wir unsere Kenntnisse besser entwickeln k\xf6nnen."),(0,r.kt)("p",null,"Wir haben uns daf\xfcr entschieden, die Anwendung in einer Cloud zu hosten, dort, wo Webanwendungen im allt\xe4glichen Betrieb laufen. Wir m\xf6chten, dass die Pipeline die \xc4nderungen auf dem ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"-Branch nach jeder Pullrequest in die Cloud deployt. F\xfcr unseren Use-Case k\xf6nnen wir daf\xfcr die ",(0,r.kt)("a",{parentName:"p",href:"https://deta.space"},"Deta-Space")," Cloud mit ihrem ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/deta-space-deployment-github-action"},"Workflow f\xfcr das Pushen von \xc4nderungen")," verwenden."),(0,r.kt)("p",null,"Da unser Projekt eine Webanwendung mit vielen Dependencies ist, geh\xf6rt auch ein Security-Check dazu. Hierf\xfcr m\xf6chten wir ",(0,r.kt)("a",{parentName:"p",href:"https://snyk.io/de"},"Snyk")," in die Pipeline einbauen."),(0,r.kt)("p",null,"In Sachen Testing gibt es zwei bereiche, f\xfcr die wir uns hier Interessieren; Das Testen der Code-Logik und das Testen der Nutzeroberfl\xe4che. F\xfcr alles was mit Logik zu tun hat, werden wir ",(0,r.kt)("a",{parentName:"p",href:"https://vitest.dev/"},"Vitest")," einsetzen. Bei allem was mit der Nutzeroberfl\xe4che zu tun hat, werden wir ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," einsetzen. Diese beiden Tools m\xf6chten wir auch in die Pipeline einbauen."),(0,r.kt)("p",null,"Damit wir in der Gruppe dieselben Code-Konventionen einhalten k\xf6nnen, m\xf6chten wir auch ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org"},"ESlint")," und ",(0,r.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," integrieren. Das nicht nur lokal, sondern auch in der Pipeline, damit nur sauberer Code in die Cloud kommt."),(0,r.kt)("h3",{id:"sollen-wir-git-hooks-verwenden"},"Sollen wir Git-Hooks verwenden?"),(0,r.kt)("p",null,"Wir haben in der Zwischenzeit \xfcber Git-Hooks im Modul 324 gelernt. Wir haben uns daf\xfcr entschieden, diese f\xfcr das Code-Styling zu verwenden. So ist es nicht m\xf6glich, nicht den Konventionen entsprechenden Code einzubuchen, da vor jedem Commit formatiert und dann gelintet wird."),(0,r.kt)("p",null,"F\xfcr die pre-Commit Hooks wird ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/husky"},"Husky")," verwendet. So kann das Script einfach von Menschen gelesen und bearbeitet werden, ohne in das ",(0,r.kt)("inlineCode",{parentName:"p"},".git/hooks/")," directory wechseln zu m\xfcssen. Das Aufsetzen in einer frisch gecloneten Repository ist auch schnell gemacht mit ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run prepare"),"."),(0,r.kt)("h2",{id:"realisieren"},"Realisieren"),(0,r.kt)("h3",{id:"hilfestellung"},"Hilfestellung"),(0,r.kt)("p",null,"Um dieses Projekt zu realisieren haben wir diese ",(0,r.kt)("a",{parentName:"p",href:"#quellen"},"Quellen")," zu unserer Hilfe genommen.\nManchmal sind wir auch zu der betreuenden Lehrperson im Lernatelier (Daniel Lauk) f\xfcr Ratschlag oder eine zweite Meinung gegangen.\nSo konnten wir schlussendlich alle H\xfcrden, die w\xe4hrend der Implementation aufgetreten sind, \xfcberwinden."),(0,r.kt)("h3",{id:"was-wurde-realisiert"},"Was wurde realisiert?"),(0,r.kt)("p",null,"Die Anwendung, die realisiert wurde, besteht aus einem Svelte-Kit Projekt, das Fragen von einer API l\xe4dt und diese darstellt als Komponenten."),(0,r.kt)("p",null,"F\xfcr die Implementierung dieser Anwendung wurden diverse Pipelines f\xfcr die CI und CD aufgesetzt. Zu diesen geh\xf6ren zum Beispiel das Testen vor dem Mergen einer PR und das automatische Deployen, sobald etwas neues eingetragen wurde. Ausserdem wurde noch ein pre-Commit Hook eingebunden, damit der Code vor jedem Commit formatiert und gelintet werden kann."),(0,r.kt)("h3",{id:"vorgehen-bei-der-realisierung"},"Vorgehen bei der Realisierung"),(0,r.kt)("p",null,"Da hier der DevOps-Prozess im Mittelpunkt steht haben wir Zuerst alle Pipelines, Tests und Tools mit einer Vorlage von Svelte aufgesetzt. Das alles musste nat\xfcrlich noch vor der haupts\xe4chlichen Entwicklung getestet und konfiguriert werden, damit der ganze Prozess sauber ablaufen kann. Ausserdem wurden noch Branch-Protection-Regeln eingestellt, damit keiner direkte Commits auf ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," machen kann."),(0,r.kt)("p",null,"Im n\xe4chsten Schritt konnten wir mit der Entwicklung beginnen. Dabei haben wir f\xfcr jede Aufgabe einen eigenen Branch erstellt, um Konflikte zu vermeiden. Jeder Branch musste \xfcber eine Pull-Request gemerget werden, wobei jegliche Tests in Pipelines durchgef\xfchrt wurden. Sobald alle Tests erfolgreich waren, konnte ein Merge in ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," vorgenommen werden, davor war es durch die Branch-Protection-Regeln blockiert."),(0,r.kt)("p",null,"Im letzten Schritt wurde jeweils nach dem Merge die Dokumentation, falls es \xc4nderungen gab, auf GitHub-Pages deployed und die Svelte-App in die Cloud gepusht."),(0,r.kt)("h3",{id:"ausf\xfchrung"},"Ausf\xfchrung"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nr."),(0,r.kt)("th",{parentName:"tr",align:null},"Frist"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"),(0,r.kt)("th",{parentName:"tr",align:null},"Geplante Zeit"),(0,r.kt)("th",{parentName:"tr",align:null},"Effektive Zeit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"17.08.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Informieren (von IPERKA): Technologien, Quellen und Informationen heraussuchen, Ziele setzen"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"31.08.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Planen und Entscheiden (von IPERKA): Zeitplan & Tests erstellen (manuell & automatisch), \xfcber Optionen entscheiden"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3.1"),(0,r.kt)("td",{parentName:"tr",align:null},"7.09.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Realisieren (von IPERKA): DevOps-Pipelines aufsetzen"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3.2"),(0,r.kt)("td",{parentName:"tr",align:null},"14.09.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Realisieren (von IPERKA): Webapp implementieren"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"21.09.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kontrollieren (von IPERKA): Alle Tests ausf\xfchren, protokollieren & Testbericht verfassen"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"21.09.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Auswerten (von IPERKA): Reflexion auf das Projekt"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"21.09.2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Portfolioeintrag bis am Abend"),(0,r.kt)("td",{parentName:"tr",align:null},"6 (ggf. mehr)"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"1x Arbeitspaket = 45 Minuten = 1x Schullektion"),(0,r.kt)("p",{parentName:"admonition"},"1x Halbtag = 5x Arbeitspakete"),(0,r.kt)("p",{parentName:"admonition"},"6x Halbtage = 30x Arbeitspakete"),(0,r.kt)("p",{parentName:"admonition"},"30x Arbeitspakete * 2x Mitglieder = ",(0,r.kt)("strong",{parentName:"p"},"60x Arbeitspakete"))),(0,r.kt)("h2",{id:"kontrollieren"},"Kontrollieren"),(0,r.kt)("h3",{id:"testprotokoll"},"Testprotokoll"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("br",null),"Test-Nr."),(0,r.kt)("th",{parentName:"tr",align:null},"Bemerkung"),(0,r.kt)("th",{parentName:"tr",align:null},"Resultat"),(0,r.kt)("th",{parentName:"tr",align:null},"Datum"),(0,r.kt)("th",{parentName:"tr",align:null},"Visum"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"testfazit"},"Testfazit"),(0,r.kt)("p",null,". . ."),(0,r.kt)("h2",{id:"auswerten"},"Auswerten"),(0,r.kt)("h3",{id:"produkt"},"Produkt"),(0,r.kt)("p",null,"Wir haben uns ",(0,r.kt)("a",{parentName:"p",href:"#was-ist-unser-ziel"},"hier")," vorgenommen, dass ich . . ."),(0,r.kt)("h3",{id:"arbeitsprozess"},"Arbeitsprozess"),(0,r.kt)("p",null,"W\xe4hrend diesem Projekt haben wir viel neues gelernt . . ."))}o.isMDXComponent=!0}}]);