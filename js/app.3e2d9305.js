(function(e){function t(t){for(var r,i,a=t[0],l=t[1],c=t[2],u=0,d=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},i={app:0},o={app:0},s=[];function a(e){return l.p+"js/"+({"home~move":"home~move",home:"home",move:"move"}[e]||e)+"."+{"home~move":"1afaacd4",home:"8d909063",move:"b79fbf15"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"home~move":1,home:1,move:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({"home~move":"home~move",home:"home",move:"move"}[e]||e)+"."+{"home~move":"de7efbec",home:"00649c12",move:"861dde5e"}[e]+".css",o=l.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var c=s[a],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){c=d[a],u=c.getAttribute("data-href");if(u===r||u===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[e],m.parentNode.removeChild(m),n(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=a(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("19b3"),i=n.n(r);i.a},"19b3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view"),n("InfoSnackbar")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-snackbar",{attrs:{timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" "),n("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(t){e.snackbar=!1}}},[n("v-icon",[e._v("mdi-close")])],1)],1)],1)},a=[],l={computed:{snackbar:{get:function(){return this.$store.getters.snackbar.visible},set:function(e){this.$store.commit("updatePropertyGlobal",{path:"snackbar.visible",value:e})}},timeout:{get:function(){return this.$store.getters.snackbar.timeout}},text:{get:function(){return this.$store.getters.snackbar.text}}}},c=l,u=n("2877"),d=n("6544"),m=n.n(d),f=n("8336"),h=n("132d"),p=n("2db4"),g=Object(u["a"])(c,s,a,!1,null,null,null),v=g.exports;m()(g,{VBtn:f["a"],VIcon:h["a"],VSnackbar:p["a"]});var b={name:"App",components:{InfoSnackbar:v}},w=b,k=(n("034f"),n("7496")),y=Object(u["a"])(w,i,o,!1,null,null,null),O=y.exports;m()(y,{VApp:k["a"]});var S=n("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var A=n("8c4f");r["a"].use(A["a"]);var j=[{path:"/",name:"home",component:function(){return Promise.all([n.e("home~move"),n.e("home")]).then(n.bind(null,"bb51"))}},{path:"/umzug/:uuid",name:"move",component:function(){return Promise.all([n.e("home~move"),n.e("move")]).then(n.bind(null,"0fae"))}}],P=new A["a"]({routes:j}),z=P,D=(n("caad"),n("ac1f"),n("2532"),n("1276"),n("f309")),E=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),B=n("0fe0"),x=n.n(B);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=I({},x.a,{},{messages:{saved:"Gespeichert!"},rules:{required:"Pflichtfeld",invalidMail:"Keine gültige E-Mail"},form:{street:"Strasse",nr:"Nr.",additional:"Adresszusatz, c/o, Stock",additional1:"Adresszusatz 1, c/o, Stock",additional2:"Adresszusatz 2, c/o, Stock",postcode:"PLZ",location:"Ort",mail:"E-Mail",password:"Passwort",passwordRepeat:"Passwort wiederholen",salutation:"Anrede",title:"Titel",firstname:"Vorname",lastname:"Nachname",birthdate:"Geburtsdatum",customernr:"Kundennummer",search:"Suche"},auth:{title:"Melde dich an",tabs:{login:"Anmelden",register:"Registrieren"},btns:{cancel:"Abbrechen",login:"Anmelden",register:"Registrieren"}},home:{footer:{disclaimer:"Disclaimer",imprint:"Impressum",contact:"Kontakt"},header:{headline:"Das Werkzeug für Ihren problemlosen Umzug!",subline:"einfach · fair · kostenlos",createBtn:"Meinen Umzug planen"},registration:{text:"Zum Versenden von E-Mails, Drucken von Briefen oder Bearbeiten der Checkliste müssen Sie sich registrieren. Ansonsten können Sie sämtliche Funktionalitäten auch ohne vorgängige Registration nutzen."},steps:{title:"Unser Konzept",step1:{title:"Schritt 1",headline:"Angaben zum Umzug",currentAddress:{title:"Bisherige Adresse",description:"Ihre bisherige Adresse pflegen"},newAddress:{title:"Neue Adresse",description:"Ihre neue Adresse pflegen"}},step2:{title:"Schritt 2",headline:"Wer zieht um?",personal:{title:"Meine Personalien",description:"Personalien von Ihnen pflegen"},further:{title:"Weitere Umziehende",description:"Weitere mit Umziehende pflegen"}},step3:{title:"Schritt 3",headline:"Wer soll informiert werden?",authorities:{title:"Behörden informieren",description:"Behörden pflegen, welche informiert werden müssen"},companies:{title:"Unternehmen informieren",description:"Nötige Unternehmen, welche informiert werden müssen"},friends:{title:"Freunde informieren",description:"Freunde, welche ebenfalls informiert werden sollen"}},step4:{title:"Schritt 4",headline:"Alles unter Kontrolle",checklist:{title:"Interaktive Checkliste",description:"Dynamisch generierte, interaktive Checkliste bearbeiten"},send:{title:"Versand",description:"Alle nötigen E-Mails versenden"}},step5:{title:"Schritt 5",headline:"Hilfe?",providers:{title:"Dienstleister finden",description:"Benötigte Dienstleister finden für den angenehmen Umzug"},tips:{title:"Tipps",description:"Letzte Tipps für einen angenehmen Umzug"}}},welcome:{title:"Willkommen!",headline:"In nur 5 Schritten zum problemlosen Umzug",main:"In nur fünf Schritten stellen Sie sicher, dass Ihr Umzug problemlos verläuft und alle davon erfahren, welche davon wissen müssen oder sollen. Zudem finden Sie weitere nützliche Tipps und Tricks rund ums Umziehen.",intro:"Wir wünschen Ihnen viel Spass beim Entdecken unserer Homepage sowie einen problemlosen Umzug und viel Freude im neuen Heim."}},global:{title:"Ich ziehe um!",auth:"Registrieren / Anmelden",save:"Speichern",socialmedia:{twitter:"Twitter",facebook:"Facebook",roadmap:"Entwicklungs Roadmap"}},move:{step1:{title:"Angaben zum Umzug",headline:"Bitte erfassen Sie Ihren bisherigen und neuen Wohnort.",checkboxes:{currentAddress:"Allfällige Schlussrechnungen an diese Adresse",otherAddress:"Allfällige Schlussrechnungen an andere Adresse",newAddress:"Allfällige Schlussrechnungen an diese Adresse"},currentAddress:{title:"Bisherige Adresse",date:"Auszugsdatum",key:"Schlüsselübergabe"},otherAddress:{title:"Andere Adresse"},newAddress:{title:"Neue Adresse",date:"Einzugsdatum",key:"Schlüsselübernahme"}},step2:{title:"Wer zieht um?",headline:"Bitte erfassen Sie Ihre Personalien sowie allenfalls die Angaben zu weitere Personen, welche mit Ihnen umziehen.",personal:{title:"Meine Angaben"},further:{title:"{0}. weitere Person",btnAdd:"Weitere Person anfügen"}},step3:{title:"Wer soll informiert werden?",description:"Aufgrund der bisher erfassten Informationen wurden bereits erste Selektionen vorgenommen. Sämtliche Eingaben können durch Sie übersteuert werden. Bei Behörden und Ämtern ist es oft notwendig, persönlich vorzusprechen, andere können per E-Mail oder Briefpost informiert werden. Diese Informationen werden übersichtlich in der interaktiven Umzugscheckliste ausgehend von den nachfolgend erfassten Daten zusammengestellt. Falls Sie noch keine Angaben zu der bisherigen und neuen Adresse gemacht haben, empfiehlt es sich, dies vorgängig zu tun, um vom vollen Funktionsumfang der Anwendung profitieren zu können.",headline:"Zu informierende Stellen, Ämter, Familie, Bekannte, Verwandte, Freunde, sonstige",btnAddAdditional:"Hinzufügen",btnRemove:"Entfernen",areas:{authorities:{title:"Ämter, ermittelt aufgrund Ihrer Angaben",use:"Amt (z.B. Einwohnerkontrolle)",name:"Name des Amtes"},energy:{title:"Energieversorger, ermittelt aufgrund Ihrer Angaben",use:"Art Energieversorger",name:"Name des Energieversorgers"},insurance:{title:"Versicherungen, Krankenkasse und andere zu informierende Unternehmen",use:"Art der Versicherung (z.B. Krankenkasse)",name:"Name der Versicherung"},banks:{title:"Banken, Kreditinstiture, Leasing",use:"Typ (Bank, Kredit, Leasing, etc.)",name:"Name des Unternehmen"},friends:{title:"Freunde, Familie und Verwandte"}}},step4:{title:"Alles unter Kontrolle",headline:"Mit der Interaktiven Checkliste haben Sie alles unter Kontrolle. Sämtliche bisher erfassten Informationen sind darin zusammengeführt. Sie können nun die Versandarten festlegen oder die generierten E-Mails, Briefe und E-Cards bearbeiten. Die Liste können Sie frei nach jeder Spalte sortieren. Sie können eine Auswahl treffen sowie den Versand auslösen oder die Briefe ausdrucken. Der Status ändert sich danach automatisch. Sie können jederzeit hierhin zurückkehren und weitere Aktionen auslösen oder den Status verändern.",headers:{colChecked:"Auswahl",colReceiver:"Informationsempfänger",colDate:"Datum",colType:"Informationsart",colCarrier:"Informationsträger",colStatus:"Status"}},step5:{title:"Hilfe?",tips:{title:"Tipps",description:"Mit der Interaktiven Checkliste haben Sie alles unter Kontrolle. Sämtliche bisher erfassten Informationen sind darin zusammengeführt. Sie können nun die Versandarten festlegen oder die generierten E-Mails, Briefe und E-Cards bearbeiten. Die Liste können Sie frei nach jeder Spalte sortieren. Sie können eine Auswahl treffen sowie den Versand auslösen oder die Briefe ausdrucken. Der Status ändert sich danach automatisch. Sie können jederzeit hierhin zurückkehren und weitere Aktionen auslösen oder den Status verändern.",headline:"Hier finden Sie nützliche Tipps und Tricks!",headers:{colTip:"Tipp",colMoment:"Zeitpunkt",colLocation:"Ort"}},provider:{title:"Dienstleister",description:"Ein Umzug gibt sehr viel zu tun. Vieles kann alleine oder mit Freunden erledigt werden. Manchmal ist es jedoch ratsam und sinnvoll, sich professionelle Hilfe zu suchen. Ausgehend von ihrem bisherigen und neuen Wohnort stellen wir Ihnen mögliche Dienstleister zusammen.",headline:"Selbstverständlich können Sie auch frei nach Dienstleistern suchen oder Sie nutzen die Filtermöglichkeiten.",headers:{colChecked:"Auswahl",colProvider:"Dienstleister",colTrade:"Branche",colRating:"Bewertung",colLocation:"Ort",colStatus:"Status"}},sitemap:{title:"Sitemap",labels:{personal:"Meine Personalien",oldAddress:"Bisherige Adresse",newAddress:"Neue Adresse",further:"Weitere Umziehende",serviceProvider:"Dienstleister finden",authorities:"Behörden informieren",companies:"Unternehmen informieren",friends:"Freunde informieren",todo:"TODO's",send:"Versand",tips:"Tipps"}}}},roadmap:{title:"Offizielle Entwicklungs Roadmap!",description:"Wir versuchen anhand dieser Roadmap öffentlich und transparenz unsere Ziele zu kommunizieren! Die Daten sind aber nur Anhaltspunkte und sind inhaltlich und von der Zeit her nicht verbindlich. Die Roadmap wird so gut wie möglich aktuell gehalten.",btnClose:"Schliessen",lblEstimated:"Ungefährer Zeitpunkt: {0}",goals:{goal1:{title:"Funktionaler Prototyp",description:"Erster nutzbarer Prototyp",estimated:"Q2 2020"},goal2:{title:"Interaktive Checkliste",description:"Statt einer statischen Checkliste diese interaktiv gestalten anhand Ihrer eingegebenen Informationen.",estimated:"Q3 2020"},goal3:{title:"Anbindung erster Dienstleister",description:"Bessere integration von Dienstleistern für gewisse Tätigkeiten (Putzunternehmen, Umzugshelfer, etc.).",estimated:"Q3/Q4 2020"},goal4:{title:"Weitere Medien integrieren",description:"Anstatt nur E-Mails zu generieren, auch wenn notwendig Briefe und diverse Vorlagen. Zusätzlich exports der Tabellen als PDF und Excel",estimated:"Q4 2020"}}}}),N=U,F=n("da5b"),T=n.n(F);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=V({},N,{},T.a,{},{rules:{required:"Required field",invalidMail:"invalid e-mail"}}),R=W,$=n("18f2"),L=n.n($);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=K({},N,{},L.a,{},{}),Z=q,H=n("3afe"),G=n.n(H);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=J({},N,{},G.a,{},{}),Y=X,ee=n("2e15"),te=n.n(ee);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie=re({},N,{},te.a,{},{}),oe=ie,se=n("eea9"),ae=n.n(se);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=ce({},N,{},ae.a,{},{}),de=ue;function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he=fe({},N,{},T.a,{},{}),pe=he;r["a"].use(D["a"]);var ge,ve="de",be=navigator.language||ve;ge=be.includes("-")?be.split("-")[0]:be,"de"===ge&&"en"===ge&&"fr"===ge&&"it"===ge&&"es"===ge&&"pt"===ge&&"sq"===ge||(ge=ve);var we=new D["a"]({lang:{locales:{de:N,en:R,fr:Z,it:Y,es:oe,pt:de,sq:pe},current:ge}}),ke=n("2f62"),ye=n("bf96"),Oe={auth:{token:"",validUntil:null,name:""}},Se={},Ae={},je={},Pe={state:Oe,getters:Se,mutations:Ae,actions:je},ze=(n("a434"),n("0d03"),n("96cf"),n("74ce")),De=function(e,t,n){var r=new ze["a"](e),i={};return i[t]=n,r.version(1).stores(i),r},Ee=n("c64e"),Be="move",xe="uuid,object",Me={move:{uuid:"",currentStep:1,addresses:{currentAddress:{street:"",nr:"",additional1:"",additional2:"",postcode:"",location:"",date:"",key:""},newAddress:{street:"",nr:"",additional1:"",additional2:"",postcode:"",location:"",date:"",key:""},otherAddress:{street:"",nr:"",additional1:"",additional2:"",postcode:"",location:""}},billing:{billCurrentAddress:!1,billNewAddress:!0,billOtherAddress:!1},persons:{creator:{salutation:"",title:"",firstname:"",lastname:"",birthdate:""},further:[]},informations:{authorities:[],energy:[],insurance:[],banks:[],friends:[]},checklist:{headers:[{text:we.framework.lang.t("$vuetify.move.step4.headers.colChecked"),align:"left",sortable:!1,value:"checked"},{text:we.framework.lang.t("$vuetify.move.step4.headers.colReceiver"),value:"receiver",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step4.headers.colDate"),value:"date",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step4.headers.colType"),value:"type",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step4.headers.colCarrier"),value:"carrier",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step4.headers.colStatus"),value:"status",sortable:!0,filterable:!0}],items:[{checked:!0,receiver:"Gemeindeverwaltung Belp",date:new Date,type:"Persönlich",carrier:"Mitbringen:\n ID, Ausweise, Familienbüchlein",status:"Erledigt, 20.11.2019"},{checked:!0,receiver:"Gemeindeverwaltung Anderswo",date:new Date,type:"Persönlich",carrier:"Mitbringen:\n ID, Ausweise, Familienbüchlein",status:"Erledigt, 21.11.2019"},{checked:!1,receiver:"Stromversorgung Belp",date:new Date,type:"Übernimmt ehem. Verwaltung",carrier:"E-Mail",status:"Offen"},{checked:!1,receiver:"Stromversorgung Anderswo",date:new Date,type:"Umzugsschreiben",carrier:"E-Mail",status:"Offen"},{checked:!0,receiver:"Bank PostFinance",date:new Date,type:"Umzugsschreiben",carrier:"E-Mail",status:"Erledigt, 11.11.2019"},{checked:!1,receiver:"Bank UBS",date:new Date,type:"Umzugsschreiben",carrier:"E-Mail",status:"Offen"}]},serviceprovider:{headers:[{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colChecked"),align:"left",sortable:!1,value:"checked"},{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colProvider"),value:"provider",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colTrade"),value:"trade",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colRating"),value:"rating",sortable:!0,filterable:!1},{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colLocation"),value:"location",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step5.provider.headers.colStatus"),value:"status",sortable:!0,filterable:!0}],items:[{checked:!0,provider:"Firma, Beschreibung, Kontaktinformationen",trade:"Putzunternehmen",rating:4.5,location:"Bisheriger Wohnort",status:"Angebot verlangt, 22.11.2019"},{checked:!0,provider:"Firma, Beschreibung, Kontaktinformationen",trade:"Malerei",rating:4.1,location:"Neuer Wohnort",status:"Vertrag abgeschlossen, 22.11.2019"}]}}},Ie={fullMove:function(e){return e.move},uuid:function(e){return e.move.uuid},addresses:function(e){return e.move.addresses},billing:function(e){return e.move.billing},persons:function(e){return e.move.persons},currentStep:function(e){return e.move.currentStep},informations:function(e){return e.move.informations},checklist:function(e){return e.move.checklist},serviceprovider:function(e){return e.move.serviceprovider}},Ue={setFullMove:function(e,t){e.move=Object.assign(e.move,t)},updateProperty:function(e,t){var n=t.path,r=t.value;Object(ye["b"])(e.move,n,r)},createPerson:function(e){e.move.persons.further.push({salutation:"",title:"",firstname:"",lastname:"",birthdate:""})},removePerson:function(e,t){e.move.persons.further.splice(t,1)},createAuthority:function(e){e.move.informations.authorities.push({use:"",name:"",street:"",nr:"",additional:"",postcode:"",location:""})},removeAuthority:function(e,t){e.move.informations.authorities.splice(t,1)},createInsurance:function(e){e.move.informations.insurance.push({use:"",name:"",street:"",nr:"",additional:"",postcode:"",location:""})},removeInsurance:function(e,t){e.move.informations.insurance.splice(t,1)},createEnergy:function(e){e.move.informations.energy.push({use:"",name:"",street:"",nr:"",additional:"",postcode:"",location:""})},removeEnergy:function(e,t){e.move.informations.energy.splice(t,1)},createBank:function(e){e.move.informations.banks.push({use:"",name:"",customernr:"",street:"",nr:"",additional:"",postcode:"",location:""})},removeBank:function(e,t){e.move.informations.banks.splice(t,1)},createFriend:function(e){e.move.informations.friends.push({firstname:"",lastname:"",mail:""})},removeFriend:function(e,t){e.move.informations.friends.splice(t,1)},setStep:function(e,t){console.log(t),e.move.currentStep=t},nextStep:function(e){e.move.currentStep++},prevStep:function(e){e.move.currentStep--},switchBillingAddress:function(e,t){e.move.billing.billCurrentAddress="billCurrentAddress"===t,e.move.billing.billNewAddress="billNewAddress"===t,e.move.billing.billOtherAddress="billOtherAddress"===t}},Ne={loadFromLocalDB:function(e,t){var n,r,i,o;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return n=e.commit,r=De(ye["a"],Be,xe),s.next=4,regeneratorRuntime.awrap(r[Be].where("uuid").equals(t).toArray());case 4:i=s.sent,o=i[0].object,n("setFullMove",o);case 7:case"end":return s.stop()}}))},createNewMove:function(e){var t=e.commit,n=Object.assign({},Me);n.move.uuid=Ee(),t("setFullMove",n.move)},createLocalMove:function(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=De(ye["a"],Be,xe),n=e.getters.fullMove,r.next=4,regeneratorRuntime.awrap(t[Be].add({uuid:n.uuid,object:n}));case 4:case"end":return r.stop()}}))},updateLocalMove:function(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=De(ye["a"],Be,xe),n=e.getters.fullMove,r.next=4,regeneratorRuntime.awrap(t[Be].where("uuid").equals(n.uuid).modify({object:n}));case 4:case"end":return r.stop()}}))}},Fe={state:Me,getters:Ie,mutations:Ue,actions:Ne};r["a"].use(ke["a"]);var Te=new ke["a"].Store({state:{snackbar:{visible:!1,text:"",timeout:2e3},tips:{headers:[{text:we.framework.lang.t("$vuetify.move.step5.tips.headers.colTip"),align:"left",sortable:!0,filterable:!0,value:"tip"},{text:we.framework.lang.t("$vuetify.move.step5.tips.headers.colMoment"),value:"moment",sortable:!0,filterable:!0},{text:we.framework.lang.t("$vuetify.move.step5.tips.headers.colLocation"),value:"location",sortable:!0,filterable:!0}],items:[{tip:"Wohnung gründlich putzen",moment:"Vor dem Umzug",location:"Bisheriger Wohnort"},{tip:"Wohnungseinrichtung planen",moment:"Vor dem Umzug",location:"Neuer Wohnort"},{tip:"Neue Route zum Arbeitsort anschauen",moment:"Vor dem Umzug",location:"Unabhängig"},{tip:"An der Türe Notiz legen, dass Sie nun hier her kommen. Inkl. Datum, damit Nachbaren eventuell mit dem Lärm klar kommen",moment:"Vor dem Umzug",location:"Neuer Wohnort"},{tip:"Über Waschplan, etc. informieren",moment:"Nach dem Umzug",location:"Neuer Wohnort"},{tip:"Bisherige Gegenstände los werden, welche sowieso nicht mehr gebraucht werden - Neustart",moment:"Vor dem Umzug",location:"Unabhängig"}]}},getters:{tips:function(e){return e.tips},snackbar:function(e){return e.snackbar}},mutations:{updatePropertyGlobal:function(e,t){var n=t.path,r=t.value;Object(ye["b"])(e,n,r)},showSnackbar:function(e,t){var n=t.text,r=t.timeout;e.snackbar=Object.assign({visible:!0,timeout:5e3},{text:n,timeout:r})}},modules:{auth:Pe,move:Fe}});r["a"].config.productionTip=!1,new r["a"]({router:z,vuetify:we,store:Te,render:function(e){return e(O)}}).$mount("#app")},bf96:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));n("fb6a"),n("ac1f"),n("1276");var r="SimplyMove",i=function e(t,n,r){return"string"==typeof n?e(t,n.split("."),r):1==n.length&&void 0!==r?t[n[0]]=r:0==n.length?t:e(t[n[0]],n.slice(1),r)}}});
//# sourceMappingURL=app.3e2d9305.js.map