(function(e){function n(n){for(var r,i,a=n[0],l=n[1],u=n[2],c=0,d=[];c<a.length;c++)i=a[c],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(n);while(d.length)d.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var a=t[i];0!==s[a]&&(r=!1)}r&&(o.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},i={app:0},s={app:0},o=[];function a(e){return l.p+"js/"+({"home~move":"home~move",home:"home",move:"move"}[e]||e)+"."+{"home~move":"36cd0401",home:"e0c3e94b",move:"46c34de4"}[e]+".js"}function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"home~move":1,home:1,move:1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=new Promise((function(n,t){for(var r="css/"+({"home~move":"home~move",home:"home",move:"move"}[e]||e)+"."+{"home~move":"2470f10e",home:"1575886c",move:"9992f54b"}[e]+".css",s=l.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var u=o[a],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===s))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],c=u.getAttribute("data-href");if(c===r||c===s)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var r=n&&n.target&&n.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[e],m.parentNode.removeChild(m),t(o)},m.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){i[e]=0})));var r=s[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=s[e]=[n,t]}));n.push(r[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=a(e);var d=new Error;u=function(n){c.onerror=c.onload=null,clearTimeout(m);var t=s[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,t[1](d)}s[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(n)},l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var m=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("19b3"),i=t.n(r);i.a},"19b3":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("router-view"),t("InfoSnackbar")],1)},s=[],o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-snackbar",{attrs:{timeout:e.timeout},model:{value:e.snackbar,callback:function(n){e.snackbar=n},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" "),t("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(n){e.snackbar=!1}}},[t("v-icon",[e._v("mdi-close")])],1)],1)],1)},a=[],l={computed:{snackbar:{get:function(){return this.$store.getters.snackbar.visible},set:function(e){this.$store.commit("updatePropertyGlobal",{path:"snackbar.visible",value:e})}},timeout:{get:function(){return this.$store.getters.snackbar.timeout}},text:{get:function(){return this.$store.getters.snackbar.text}}}},u=l,c=t("2877"),d=t("6544"),m=t.n(d),h=t("8336"),f=t("132d"),p=t("2db4"),g=Object(c["a"])(u,o,a,!1,null,null,null),b=g.exports;m()(g,{VBtn:h["a"],VIcon:f["a"],VSnackbar:p["a"]});var v={name:"App",components:{InfoSnackbar:b}},w=v,k=(t("034f"),t("7496")),y=Object(c["a"])(w,i,s,!1,null,null,null),O=y.exports;m()(y,{VApp:k["a"]});var z=t("9483");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var D=t("8c4f");r["a"].use(D["a"]);var A=[{path:"/",name:"home",component:function(){return Promise.all([t.e("home~move"),t.e("home")]).then(t.bind(null,"bb51"))}},{path:"/umzug/:uuid",name:"move",component:function(){return Promise.all([t.e("home~move"),t.e("move")]).then(t.bind(null,"0fae"))}}],P=new D["a"]({routes:A}),j=P,S=(t("caad"),t("ac1f"),t("2532"),t("1276"),t("f309")),E=(t("a4d3"),t("4de4"),t("4160"),t("e439"),t("dbb4"),t("b64b"),t("159b"),t("2fa7")),M=t("0fe0"),B=t.n(M);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(t,!0).forEach((function(n){Object(E["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var T=U({},B.a,{},{messages:{saved:"Gespeichert!"},rules:{required:"Pflichtfeld",invalidMail:"Keine gültige E-Mail"},form:{street:"Strasse",nr:"Nr.",additional:"Adresszusatz, c/o, Stock",additional1:"Adresszusatz 1, c/o, Stock",additional2:"Adresszusatz 2, c/o, Stock",postcode:"PLZ",location:"Ort",locationFrom:"Ort von",locationTo:"Ort nach",country:"Land",mail:"E-Mail",password:"Passwort",passwordRepeat:"Passwort wiederholen",salutation:"Anrede",title:"Titel",firstname:"Vorname",lastname:"Nachname",birthdate:"Geburtsdatum",customernr:"Kundennummer",search:"Suche"},auth:{title:"Melde dich an",tabs:{login:"Anmelden",register:"Registrieren"},btns:{cancel:"Abbrechen",login:"Anmelden",register:"Registrieren"}},home:{footer:{disclaimer:"Disclaimer",imprint:"Impressum",contact:"Kontakt"},header:{headline:"Willkommen zu Hause",subline:"In 5 einfachen Schritten Umzug planen und ummelden!",createBtn:"Meinen Umzug planen - Los geht's!"},registration:{text:"Zum Versenden von E-Mails, Drucken von Briefen oder Bearbeiten der Checkliste musst du dich registrieren. Ansonsten kannst du sämtliche Funktionalitäten auch ohne vorgängige Registration nutzen."},steps:{title:"Unser Umzugs- und Ummeldeprozess",step1:{title:"Schritt 1",headline:"Angaben zum Umzug",currentAddress:{title:"Bisherige Adresse",description:"Bisherige Adresse erfassen"},newAddress:{title:"Neue Adresse",description:"Neue Adresse erfassen"}},step2:{title:"Schritt 2",headline:"Wer zieht um?",personal:{title:"Meine Personalien",description:"Deine Personalien erfassen"},further:{title:"Weitere Umziehende",description:"Personalien mitumziehender Personen erfassen"}},step3:{title:"Schritt 3",headline:"Wer soll informiert werden?",authorities:{title:"Behörden informieren",description:"Behörden auswählen und erfassen, die informiert werden müssen"},companies:{title:"Unternehmen informieren",description:"Unternehmen auswählen und erfassen, die informiert werden müssen"},friends:{title:"Verwandte, Bekannte und Freunde informieren",description:"Privatpersonen, die ebenfalls informiert werden sollen"}},step4:{title:"Schritt 4",headline:"Alles unter Kontrolle",checklist:{title:"Interaktive Checkliste",description:"Dynamisch generierte, interaktive Checkliste bearbeiten"},send:{title:"Versand Umzugsmeldungen",description:"E-Mails und Briefe versenden"}},step5:{title:"Schritt 5",headline:"Dienstleister und Tipps",providers:{title:"Dienstleister finden",description:"Benötigte Dienstleister finden für den angenehmen Umzug"},tips:{title:"Nützliche Tipps",description:"Letzte Tipps für einen sorglosen Umzug"}}},welcome:{title:"Willkommen zu Hause!",headline:"In nur 5 einfachen Schritten zum problemlosen Umzug",main:"In nur fünf Schritten stellst du sicher, dass dein Umzug problemlos verläuft und alle rechtzeitig davon erfahren, die davon wissen müssen oder davon wissen sollen. Zudem findest du weitere nützliche Tipps und Tricks rund ums Umziehen und Ummelden.",intro:"Wir wünschen dir einem sorglosen Umzug und viel Freude im neuen Heim.\nViel Spass beim Entdecken unserer Website."},btnClose:"Schliessen",disclaimer:{title:"Disclaimer",mdContent:"\nWir übernehmen __keine__ Haftung für irgendwelche Sachen. Bei Missversändnissen melden sie sich bitte bei uns (info@ich-ziehe-um.ch) und wir werden so schnell wie möglich auf Ihr Anliegen reagieren.\n      "},impress:{title:"Impressum",mdContent:"\n### Firma\nIch ziehe um! GmbH\n\n__Inhaber__  \nMax Mustermann  \nBeispielstrasse 12  \n1234 Irgendwo  \nSchweiz  \n\nE-Mail: info@ich-ziehe-um.ch  \n\n      "},contact:{title:"Kontakt",mdContent:"\n### Kontakt\nSie wollen mit uns Kontakt aufnehmen? Das freut uns! Melden Sie sich bitte mit einer der untenstehenden E-Mail Adressen.  \nDas weitergeben von privaten E-Mails, Kontaktdaten von Mitarbeitern sind unerwünscht. Für den Erstkontakt immer eine der untenstehenden E-Mails verwenden!\n\nWir beantworten Ihre Anliegen gerne in folgenden Sprachen:\n- Deutsch\n- Englisch\n\n</br>\n\n---\n\n#### Fragen allgemein\nE-Mail: info@ich-ziehe-um.ch\n\n#### Fehler melden\nE-Mail: issues@ich-ziehe-um.ch\n\n#### Dienstleister anmelden\nSie sind Dienstleister und wollen auf den Listen erscheinen? Nehme Sie bitte mit uns Kontakt auf:  \nE-Mail: service-provider@ich-ziehe-um.ch\n      "},scrollTop:"Zum Anfang scrollen",legal:{title:"Nutzung bestätigen",description:"Bei der Nutzung der Anwendung stimmen sie den AGB und der DSGVO zu. Die Daten werden für keine fremden Zwecke misnutzt. Mit dem aktivieren der Checkbox stimmen sie allen Informationen und der Datenerhebung zu.",txtCheckbox:"AGB und DSGVO bestätigen",btn:{close:"Schliessen",continue:"Fortfahren"},agb:{title:"Allgemeine Geschäftsbedingungen (AGB)",mdDesc:"\n# Geschäftsbedingungen\n\nMarkdown inhalt. Wir dürfen alles mit Ihren Daten machen\n        "},dsgvo:{title:"Datenschutz-Grundverordnung (DSGVO)",mdDesc:"\n# Datenschutz\n\nWir behandeln alle Ihre Daten mit vollestem Respekt\n        "}}},global:{title:"Ich ziehe um!",auth:"Registrieren / Anmelden",save:"Speichern",socialmedia:{twitter:"Twitter",facebook:"Facebook",roadmap:"Entwicklungs Roadmap",faq:"Häufig gestellte Fragen"}},move:{step1:{title:"Angaben zum Umzug",headline:"Bitte erfasse deinen bisherigen und neuen Wohnort.",checkboxes:{currentAddress:"Allfällige Schlussrechnungen an diese Adresse",otherAddress:"Allfällige Schlussrechnungen an andere Adresse",newAddress:"Allfällige Schlussrechnungen an diese Adresse"},currentAddress:{title:"Bisherige Adresse",date:"Auszugsdatum",key:"Schlüsselübergabe"},otherAddress:{title:"Andere Adresse"},newAddress:{title:"Neue Adresse",date:"Einzugsdatum",key:"Schlüsselübernahme"}},step2:{title:"Wer zieht um?",headline:"Bitte erfasse deine Personalien sowie allenfalls die Angaben zu weiterne Personen, die mit dir zusammen umziehen.",personal:{title:"Meine Angaben"},further:{title:"{0}. weitere Person",btnAdd:"Weitere Person anfügen"}},step3:{title:"Wer soll informiert werden?",description:"Aufgrund der bisher erfassten Informationen wurden bereits erste Selektionen vorgenommen. Sämtliche Eingaben können übersteuert werden. Bei Behörden und Ämtern ist es oft notwendig persönlich vorzusprechen, andere Stellen können per E-Mail oder Briefpost informiert werden. Diese Informationen werden übersichtlich in der interaktiven Umzugs-Checkliste ausgehend von den nachfolgend erfassten Daten zusammengestellt. Falls Du noch keine Angaben zu der bisherigen und neuen Adresse gemacht hast, empfehlen wir dir, dies vorgängig zu tun, um vom vollen Funktionsumfang der Anwendung profitieren zu können.",headline:"Zu informierende Stellen, Ämter, Familie, Bekannte, Verwandte, Freunde, weitere",btnAddAdditional:"Hinzufügen",btnRemove:"Entfernen",areas:{authorities:{title:"Ämter, ermittelt aufgrund deiner Angaben",use:"Amt (z.B. Einwohnerkontrolle)",name:"Name des Amtes"},energy:{title:"Energieversorger, ermittelt aufgrund deiner Angaben",use:"Art Energieversorger",name:"Name des Energieversorgers"},insurance:{title:"Versicherungen, Krankenkasse und andere zu informierende Unternehmen",use:"Art der Versicherung (z.B. Krankenkasse)",name:"Name der Versicherung"},banks:{title:"Banken, Kreditinstiture, Leasing",use:"Typ (Bank, Kredit, Leasing, etc.)",name:"Name des Unternehmen"},friends:{title:"Freunde, Familie und Verwandte"}}},step4:{title:"Alles unter Kontrolle",headline:"Mit der Interaktiven Checkliste hast du alles unter Kontrolle. Sämtliche bisher erfassten Informationen sind darin zusammengeführt. Du kannst nun die Versandarten festlegen oder die generierten E-Mails, Briefe und E-Cards bearbeiten. Die Liste kann frei nach jeder Spalte sortiert werden. Du kannst eine Auswahl treffen sowie den Versand auslösen oder die Briefe ausdrucken. Der Status ändert sich danach automatisch. Du kannst jederzeit hierhin zurückkehren und weitere Aktionen auslösen oder den Status verändern.",headers:{colChecked:"Auswahl",colReceiver:"Informationsempfänger",colDate:"Datum",colType:"Informationsart",colCarrier:"Informationsträger",colStatus:"Status"}},step5:{title:"Dienstleister finden und Tipps",tips:{title:"Tipps",description:"Mit der Interaktiven Checkliste hast du alles unter Kontrolle. Sämtliche bisher erfassten Informationen sind darin zusammengeführt. Du kannst nun die Versandarten festlegen oder die generierten E-Mails, Briefe und E-Cards bearbeiten. Die Liste kann frei nach jeder Spalte sortiert werden. Du kannst eine Auswahl treffen sowie den Versand auslösen oder die Briefe ausdrucken. Der Status ändert sich danach automatisch. Du kannst jederzeit hierhin zurückkehren und weitere Aktionen auslösen oder den Status verändern.",headline:"Hier findest du nützliche Tipps und Tricks!",headers:{colTip:"Tipp",colMoment:"Zeitpunkt",colLocation:"Ort"}},provider:{title:"Dienstleister",description:"Ein Umzug gibt sehr viel zu tun. Vieles kann alleine oder mit Freunden erledigt werden. Manchmal ist es jedoch ratsam und sinnvoll, sich professionelle Hilfe zu suchen. Ausgehend von deinem bisherigen und neuen Wohnort stellen wir dir mögliche Dienstleister zusammen.",headline:"Selbstverständlich kannst du auch frei nach Dienstleistern suchen oder die Filtermöglichkeiten nutzen.",headers:{colChecked:"Auswahl",colProvider:"Dienstleister",colTrade:"Branche",colRating:"Bewertung",colLocation:"Ort",colStatus:"Status"}},sitemap:{title:"Sitemap",labels:{personal:"Meine Personalien",oldAddress:"Bisherige Adresse",newAddress:"Neue Adresse",further:"Weitere Umziehende",serviceProvider:"Dienstleister finden",authorities:"Behörden informieren",companies:"Unternehmen informieren",friends:"Freunde informieren",todo:"TODO's",send:"Versand",tips:"Tipps"}}}},roadmap:{title:"Offizielle Entwicklungs Roadmap!",description:"Wir kommunizieren anhand dieser Roadmap öffentlich und transparenz unsere Entwicklungsziele! Die Daten sind aber nur Anhaltspunkte und sind inhaltlich und von der Zeit her unverbindlich. Daraus können keine Haftungs- oder andere Ansprüche geltend gemacht werden. Die Roadmap wird so aktuell wie möglich gehalten.",btnClose:"Schliessen",lblEstimated:"Ungefährer Zeitpunkt: {0}",goals:{goal1:{title:"Funktionaler Prototyp",description:"Erster nutzbarer Prototyp",estimated:"Q2 2020"},goal2:{title:"Interaktive Checkliste",description:"Statt einer statischen Checkliste, wird unsere Checkliste anhand der erfassten Angaben interaktiv und dynamisch zusammengestellt.",estimated:"Q3 2020"},goal3:{title:"Anbindung erster Dienstleister",description:"Bessere integration von Dienstleistern für gewisse Tätigkeiten (Reinigungsunternehmen, Umzugshelfer, etc.).",estimated:"Q3/Q4 2020"},goal4:{title:"Weitere Medien integrieren",description:"Statt nur E-Mails zu generieren, können auch Briefe ausgedruckt werden. Diverse Vorlagen werden dazu zur Verfügung gestellt. Export der Tabellen als PDF und Excel möglich",estimated:"Q4 2020"}}},faq:{title:"Häufig gestellte Fragen",btnClose:"Schliessen",why:{title:"Wieso das Projekt?",mdDesc:"In der Schweiz ziehen jährlich ca. 15 % der Einwohner um, d.h. etwa 1.3 Millionen Menschen. Der Umzugsprozess ist insbesondere auch damit verbunden, dass man sich bei unzähligen Stellen an- und abmelden muss. Auch will man seine Verwandten, Bekannten, Freunde über den Umzug informieren. Doch wo muss ich was machen? Habe ich an alles gedacht, niemanden vergessen? Behörden, Versicherungen, Banken, Energieversorger, etc. Die Konsequenzen von verspäteten Meldungen sind falsche Rechnungen, Verärgerung, Verlust von Zustellungen oder gar Strafgebühren. Unsere Website löst dieses Problem, indem die Kunden ihre Umzugsadressen eingeben und durch einen Dialog geführt werden, sodass möglichst sichergestellt wird, dass sie sich rechtzeitig und korrekt an- und abmelden. Der Versand wird über unsere Plattform gesteuert und überwacht. Über das Dashboard hat der Nutzer jederzeit die volle Transparenz darüber, was er bereits erledigt und was er noch zu tun hat."},price:{title:"Wie viel kostet die Nutzung der Plattform?",mdDesc:"Für Umziehende ist die Nutzung bis auf weiteres kostenlos! Wir behalten uns vor, mit zunehmender Funktionalität später eventuell einen kleinen Entwicklungsbeitrag zu erheben. Ansonsten finanzieren wir uns über Werbung und Vermittlungsgebühren.Letzlich sollen alle von der Plattform profitieren. Die umziehenden Personen, da ein schöner Teil der administrativen Arbeiten einfacher über unsere Plattform abgewickelt werden können. Die Informationsempfänger, da sie früh- bzw. rechtzeitg von einem Umzug erfahren und auch die Dienstleister, die einen qualifizierten Zugang zu potenziellen Kunden erhalten."},access:{title:"Kann die Anwendung auch über Smartphone und Tablets genutzt werden?",mdDesc:'Selbstverständlich. Die Applikation ist so optimiert, dass sie mit jedem browserfähigen Gerät genutzt werden kann. Zusätzlich ist unsere Umzugsanwendunge nach erstem Laden voll offline-fähig, d.h. sie kann auch genutzt werden, wenn mal keine Internetverbindung vorhanden sein sollte. Und schliesslich kann unsere Umzugs-Anwendung auf mobilen Endgeräten als App hinzugefügt werden! Mehr dazu: <a href="https://de.wikipedia.org/wiki/Progressive_Web_App" target="_blank">Information</a>.'},development:{title:"Wie viele arbeiten an diesem Projekt?",mdDesc:"Aktuell sind wir nur zu zweit und auch nur Teilzeit. Dennoch haben wir grosse Pläne und eine Releaseplanung, die wir möglichst einhalten wollen."},goal:{title:"Aktuelles Ziel und weiteres",mdDesc:"Zunächst wird dei Plattform für die Schweiz (zunächst nur auf Deutsch) aufgebaut. Geplant ist eine Ausdehnung auf Deutschland und Österreich und später in weitere Sprachen und Länder."},markdown:{title:"Offizieller Markdown Support",mdDesc:'\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\n\n## Text\nThis is normal text  \n_This text is italic_  \n__This text is bold__  \n___This text is bold and italic___  \n\n## Striketrough\n~~The world is flat.~~\n\n## Integrating every Content (Pure HTML)\n<iframe src="https://www.youtube.com/embed/ePLeFRZix1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n<a href="http://example.com/" target="_blank">Hello, world!</a>\n\n## We also support tables!\n|Test|Description|\n|:-|:-|\n|a|dasdasd|\n|b|dasdasdasdasd|\n\n## Links and Images\n[Link to marked](https://marked.js.org/#/README.md#README.md)  \n![Alt text](https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400)\n\n## Blockquote\n> This content is in a blockquote\n\n## Horizontal Line\n---\n\n## Ordered List\n1. Do 1\n2. Do 2\n3. Do 3\n4. Do 4\n\n## Unordered List\n- Do 1\n- Do 2\n- Do 3\n- Do 4\n\n## Definition\nterm\n: definition\n\n## Tasks\n- [x] Write the press release\n- [ ] Update the website\n- [ ] Contact the media\n'}}}),F=T,I=t("da5b"),_=t.n(I);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(t,!0).forEach((function(n){Object(E["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var V=N({},F,{},_.a,{},{rules:{required:"Required field",invalidMail:"invalid e-mail"}}),W=V,L=t("18f2"),R=t.n(L);function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(t,!0).forEach((function(n){Object(E["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=K({},F,{},R.a,{},{}),G=$,q=t("3afe"),Z=t.n(q);function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(t,!0).forEach((function(n){Object(E["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var X=J({},F,{},Z.a,{},{}),Y=X,ee=t("2e15"),ne=t.n(ee);function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?te(t,!0).forEach((function(n){Object(E["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ie=re({},F,{},ne.a,{},{}),se=ie,oe=t("eea9"),ae=t.n(oe);function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?le(t,!0).forEach((function(n){Object(E["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ce=ue({},F,{},ae.a,{},{}),de=ce;function me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function he(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?me(t,!0).forEach((function(n){Object(E["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var fe=he({},F,{},_.a,{},{}),pe=fe;r["a"].use(S["a"]);var ge,be="de",ve=navigator.language||be;ge=ve.includes("-")?ve.split("-")[0]:ve,"de"===ge&&"en"===ge&&"fr"===ge&&"it"===ge&&"es"===ge&&"pt"===ge&&"sq"===ge||(ge=be);var we=new S["a"]({lang:{locales:{de:F,en:W,fr:G,it:Y,es:se,pt:de,sq:pe},current:ge}}),ke=t("2f62"),ye=t("bf96"),Oe={auth:{token:"",validUntil:null,name:""}},ze={},De={},Ae={},Pe={state:Oe,getters:ze,mutations:De,actions:Ae},je=(t("e01a"),t("d28b"),t("a434"),t("0d03"),t("3ca3"),t("ddb0"),t("96cf"),t("74ce")),Se=function(e,n,t){var r=new je["a"](e),i={};return i[n]=t,r.version(1).stores(i),r};function Ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Me(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ee(t,!0).forEach((function(n){Object(E["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ee(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Be=t("c64e"),xe="move",Ue="uuid,object",Te={move:{uuid:"",currentStep:1,addresses:{currentAddress:{street:"",nr:"",additional1:"",additional2:"",postcode:"",location:"",date:"",key:""},newAddress:{street:"",nr:"",additional1:"",additional2:"",postcode:"",location:"",date:"",key:""},otherAddress:{street:"",nr:"",additional1:"",additional2:"",postcode:"",location:""}},billing:{billCurrentAddress:!1,billNewAddress:!0,billOtherAddress:!1},persons:{creator:{salutation:"",title:"",firstname:"",lastname:"",birthdate:""},further:[]},informations:{authorities:[],energy:[],insurance:[],banks:[],friends:[]},checklist:{headers:[{text:we.framework.lang.t("$vuetify.move.step4.headers.colChecked"),align:"left",sortable:!1,value:"checked"},{text:we.framework.lang.t("$vuetify.move.step4.headers.colReceiver"),value:"receiver",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step4.headers.colDate"),value:"date",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step4.headers.colType"),value:"type",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step4.headers.colCarrier"),value:"carrier",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step4.headers.colStatus"),value:"status",sortable:!0,filterable:!0}],items:[{checked:!0,receiver:"Gemeindeverwaltung Belp",date:new Date,type:"Persönlich",carrier:"Mitbringen:\n ID, Ausweise, Familienbüchlein",status:"Erledigt, 20.11.2019"},{checked:!0,receiver:"Gemeindeverwaltung Anderswo",date:new Date,type:"Persönlich",carrier:"Mitbringen:\n ID, Ausweise, Familienbüchlein",status:"Erledigt, 21.11.2019"},{checked:!1,receiver:"Stromversorgung Belp",date:new Date,type:"Übernimmt ehem. Verwaltung",carrier:"E-Mail",status:"Offen"},{checked:!1,receiver:"Stromversorgung Anderswo",date:new Date,type:"Umzugsschreiben",carrier:"E-Mail",status:"Offen"},{checked:!0,receiver:"Bank PostFinance",date:new Date,type:"Umzugsschreiben",carrier:"E-Mail",status:"Erledigt, 11.11.2019"},{checked:!1,receiver:"Bank UBS",date:new Date,type:"Umzugsschreiben",carrier:"E-Mail",status:"Offen"}]},serviceprovider:{headers:[{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colChecked"),align:"left",sortable:!1,value:"checked"},{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colProvider"),value:"provider",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colTrade"),value:"trade",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colRating"),value:"rating",sortable:!0,filterable:!1},{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colLocation"),value:"location",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colStatus"),value:"status",sortable:!0,filterable:!0}],items:[{checked:!0,provider:"Firma, Beschreibung, Kontaktinformationen",trade:"Putzunternehmen",rating:4.5,location:"Bisheriger Wohnort",status:"Angebot verlangt, 22.11.2019"},{checked:!0,provider:"Firma, Beschreibung, Kontaktinformationen",trade:"Malerei",rating:4.1,location:"Neuer Wohnort",status:"Vertrag abgeschlossen, 22.11.2019"}]}}},Fe={fullMove:function(e){return e.move},uuid:function(e){return e.move.uuid},addresses:function(e){return e.move.addresses},billing:function(e){return e.move.billing},persons:function(e){return e.move.persons},currentStep:function(e){return e.move.currentStep},informations:function(e){return e.move.informations},checklist:function(e){return e.move.checklist},serviceprovider:function(e){return e.move.serviceprovider}},Ie={setFullMove:function(e,n){e.move=Object.assign(e.move,n)},updateProperty:function(e,n){var t=n.path,r=n.value;Object(ye["b"])(e.move,t,r)},createPerson:function(e){e.move.persons.further.push({salutation:"",title:"",firstname:"",lastname:"",birthdate:""})},removePerson:function(e,n){e.move.persons.further.splice(n,1)},createAuthority:function(e){e.move.informations.authorities.push({use:"",name:"",street:"",nr:"",additional:"",postcode:"",location:""})},removeAuthority:function(e,n){e.move.informations.authorities.splice(n,1)},createInsurance:function(e){e.move.informations.insurance.push({use:"",name:"",street:"",nr:"",additional:"",postcode:"",location:""})},removeInsurance:function(e,n){e.move.informations.insurance.splice(n,1)},createEnergy:function(e){e.move.informations.energy.push({use:"",name:"",street:"",nr:"",additional:"",postcode:"",location:""})},removeEnergy:function(e,n){e.move.informations.energy.splice(n,1)},createBank:function(e){e.move.informations.banks.push({use:"",name:"",customernr:"",street:"",nr:"",additional:"",postcode:"",location:""})},removeBank:function(e,n){e.move.informations.banks.splice(n,1)},createFriend:function(e){e.move.informations.friends.push({firstname:"",lastname:"",mail:""})},removeFriend:function(e,n){e.move.informations.friends.splice(n,1)},setStep:function(e,n){e.move.currentStep=n},nextStep:function(e){e.move.currentStep++},prevStep:function(e){e.move.currentStep--},switchBillingAddress:function(e,n){e.move.billing.billCurrentAddress="billCurrentAddress"===n,e.move.billing.billNewAddress="billNewAddress"===n,e.move.billing.billOtherAddress="billOtherAddress"===n}},_e={loadFromLocalDB:function(e,n){var t,r,i,s;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return t=e.commit,r=Se(ye["a"],xe,Ue),o.next=4,regeneratorRuntime.awrap(r[xe].where("uuid").equals(n).toArray());case 4:i=o.sent,s=i[0].object,t("setFullMove",s);case 7:case"end":return o.stop()}}))},createNewMove:function(e,n){var t=e.commit,r=Me({},Te),i=!0,s=!1,o=void 0;try{for(var a,l=n[Symbol.iterator]();!(i=(a=l.next()).done);i=!0){var u=a.value,c=u.path,d=u.value;Object(ye["b"])(r,c,d)}}catch(m){s=!0,o=m}finally{try{i||null==l.return||l.return()}finally{if(s)throw o}}r.move.uuid=Be(),t("setFullMove",r.move)},createLocalMove:function(e){var n,t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return n=Se(ye["a"],xe,Ue),t=e.getters.fullMove,r.next=4,regeneratorRuntime.awrap(n[xe].add({uuid:t.uuid,object:t}));case 4:case"end":return r.stop()}}))},updateLocalMove:function(e){var n,t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return n=Se(ye["a"],xe,Ue),t=e.getters.fullMove,r.next=4,regeneratorRuntime.awrap(n[xe].where("uuid").equals(t.uuid).modify({object:t}));case 4:case"end":return r.stop()}}))}},Ce={state:Te,getters:Fe,mutations:Ie,actions:_e};r["a"].use(ke["a"]);var Ne=new ke["a"].Store({state:{snackbar:{visible:!1,text:"",timeout:2e3},tips:{headers:[{text:we.framework.lang.t("$vuetify.move.step5.tips.headers.colTip"),align:"left",sortable:!0,filterable:!0,value:"tip"},{text:we.framework.lang.t("$vuetify.move.step5.tips.headers.colMoment"),value:"moment",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step5.tips.headers.colLocation"),value:"location",sortable:!0,filterable:!0}],items:[{tip:"Wohnung gründlich putzen",moment:"Vor dem Umzug",location:"Bisheriger Wohnort"},{tip:"Wohnungseinrichtung planen",moment:"Vor dem Umzug",location:"Neuer Wohnort"},{tip:"Neue Route zum Arbeitsort anschauen",moment:"Vor dem Umzug",location:"Unabhängig"},{tip:"An der Türe Notiz legen, dass Sie nun hier her kommen. Inkl. Datum, damit Nachbaren eventuell mit dem Lärm klar kommen",moment:"Vor dem Umzug",location:"Neuer Wohnort"},{tip:"Über Waschplan, etc. informieren",moment:"Nach dem Umzug",location:"Neuer Wohnort"},{tip:"Bisherige Gegenstände los werden, welche sowieso nicht mehr gebraucht werden - Neustart",moment:"Vor dem Umzug",location:"Unabhängig"}]}},getters:{tips:function(e){return e.tips},snackbar:function(e){return e.snackbar}},mutations:{updatePropertyGlobal:function(e,n){var t=n.path,r=n.value;Object(ye["b"])(e,t,r)},showSnackbar:function(e,n){var t=n.text,r=n.timeout;e.snackbar=Object.assign({visible:!0,timeout:5e3},{text:t,timeout:r})}},modules:{auth:Pe,move:Ce}});r["a"].config.productionTip=!1,new r["a"]({router:j,vuetify:we,store:Ne,render:function(e){return e(O)}}).$mount("#app")},bf96:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));t("fb6a"),t("ac1f"),t("1276");var r="SimplyMove",i=function e(n,t,r){return"string"==typeof t?e(n,t.split("."),r):1==t.length&&void 0!==r?n[t[0]]=r:0==t.length?n:e(n[t[0]],t.slice(1),r)}}});
//# sourceMappingURL=app.c8bf54ab.js.map