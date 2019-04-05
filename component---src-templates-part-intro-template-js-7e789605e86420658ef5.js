(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{131:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return B}),t.d(a,"partInfoQuery",function(){return F});t(368),t(67),t(46),t(167),t(370);var n=t(168),l=t(149),r=t(140),o=t(151),i=t(162),s=t(178),c=t.n(s),u=t(251),m=t(0),p=t.n(m),k=t(161),d=t(143),f=t(170),b=t.n(f),g=t(522),v=t.n(g),E=t(173),h=t.n(E),N=t(154),y=t.n(N),w=t(158),C=t.n(w),j=t(281),x=t(241),_=t.n(x),L=t(188),O=t.n(L);function B(e){var a=e.data.markdownRemark,t=a.frontmatter,s=a.html,m=t.mainImage,f=t.part,g=v()(C.a[f])?[]:Object.keys(C.a[f]),E={replace:function(e){var a=e.type,t=e.attribs,n=e.children;if("tag"===a&&"intro"===t.class)return p.a.createElement("div",{className:"col-7"},b()(n,E))}};return p.a.createElement(i.a,null,p.a.createElement(k.a,{title:"Fullstack osa"+f,description:h.a,keywords:[].concat(y.a,[C.a[f]?Object.values(C.a[f]):[]])}),p.a.createElement("div",{className:"spacing--after"},p.a.createElement(l.a,{className:"part-intro__banner spacing--mobile--small",style:{backgroundImage:"url("+_.a.resolve(m.publicURL)+")",backgroundColor:d[j.a[f]]}},p.a.createElement(r.a,{className:"container"},p.a.createElement(n.a,{className:"breadcrumb",content:[{backgroundColor:d[j.a[f]],text:"Fullstack",link:"/#course-contents"},{backgroundColor:d.black,text:"osa "+f}]}),p.a.createElement("div",{className:"part-intro col-7 col-10--mobile spacing--after-small"},c()(s,E)),g&&p.a.createElement(n.a,{wrapperClassName:"spacing--mobile--large",stack:!0,content:g.map(function(e){return{backgroundColor:d.white,letter:e,path:"/osa"+f+"/"+O()(C.a[f][e]),text:e+" "+C.a[f][e]}})}))),p.a.createElement(u.a,{part:f})),p.a.createElement(o.a,null))}var F="2600260727"},143:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},149:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28);var n=t(142),l=t.n(n),r=(t(159),t(4)),o=t.n(r),i=t(0),s=t.n(i),c=function(e){var a=e.className,t=e.backgroundColor,n=l()(e,["className","backgroundColor"]),r=t?{backgroundColor:t}:null;return s.a.createElement("div",Object.assign({className:"banner "+a,style:r},n))};c.defaultProps={className:""},c.propTypes={className:o.a.string}},151:function(e,a,t){"use strict";t(152);var n=t(140),l=t(146),r=t(141),o=t(0),i=t.n(o),s=t(156),c=t.n(s),u=t(163),m=t(157),p=[{src:t.n(m).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:c.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(){return i.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},i.a.createElement(n.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return i.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},i.a.createElement(l.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),i.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},i.a.createElement("div",{className:"footer__navigation-link-container"},u.b.map(function(e){return i.a.createElement(r.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},152:function(e,a,t){},154:function(e,a){e.exports=["fullstack","full stack open 2019","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","full stack open","web-sovelluskehitys","web","houston","houston inc","websovelluskehitys","web-sovellus","React","Redux","Node.js","Node","MongoDB","GraphQL","REST","REST api","single page -sovellus","ohjelmointi"]},158:function(e,a){e.exports={0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"Custom hookit"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria, connect",c:"Redux-sovelluksen kommunikointi palvelimen kanssa"},7:{a:"React-router",b:"Lisää tyyleistä",c:"Webpack",d:"Luokkakomponentit, E2E-testaus",e:"Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"}}},159:function(e,a,t){},168:function(e,a,t){"use strict";t(28),t(164),t(177);var n=t(142),l=t.n(n),r=(t(169),t(140)),o=t(141),i=t(4),s=t.n(i),c=t(0),u=t.n(c),m=t(143),p=function(e){var a,t=e.className,n=e.wrapperClassName,i=e.link,s=e.content,c=e.stack,p=e.bold,k=e.thickBorder,d=e.upperCase,f=l()(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),b=u.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},s.map(function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return u.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},f),u.a.createElement("div",{className:"arrow__rectangle "+(p?"bold":"")+" "+(k?"arrow__rectangle--thick-border":""),style:t},e.link?u.a.createElement(o.Link,{to:e.link},d?e.text.toUpperCase():e.text):d?e.text.toUpperCase():e.text),u.a.createElement("div",{className:"arrow__point "+(k?"arrow__point--thick-border":""),style:t}))}));return c||i?!c&&i?a=u.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},u.a.createElement(o.Link,{to:i,style:{display:"inline-block"}},b)):c&&(a=u.a.createElement("div",{className:"col-10 spacing--after "+n},u.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},s.map(function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return u.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},f),u.a.createElement(r.a,{flex:!0,className:"arrow__rectangle",style:a},u.a.createElement("p",{className:"arrow--stacked-title"},u.a.createElement("span",null,e.text))),u.a.createElement("div",{className:"arrow__point",style:a}))})))):a=u.a.createElement("div",{className:"col-10 spacing--after"},b),a};p.propTypes={className:s.a.string,wrapperClassName:s.a.string,link:s.a.string,content:s.a.array.isRequired,stack:s.a.bool,upperCase:s.a.bool,bold:s.a.bool,thickBorder:s.a.bool},p.defaultProps={className:"",wrapperClassName:""},a.a=p},169:function(e,a,t){},173:function(e,a){e.exports="Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun."},251:function(e,a,t){"use strict";t(309),t(311),t(312),t(67),t(46),t(167),t(252);var n=t(140),l=t(141),r=t(4),o=t(0),i=t.n(o),s=t(158),c=t.n(s),u=t(188),m=t.n(u),p=Object.keys(c.a),k=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},d=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},f=function(e){return p.includes(e.toString())},b=function(e,a){return d(e)in c.a[a]},g=function(e,a){return!e&&f(a+1)||e&&b(e,a)},v=function(e){var a=e.part,t=e.letter;return i.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&f(a-1)?i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Link,{to:"/osa"+(a-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",a-1),i.a.createElement("b",null,"Edellinen osa"))),g(t,a)&&i.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Link,{to:"/osa"+a+"/"+m()(c.a[a][k(t)]),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",""+a+k(t)),i.a.createElement("b",null,"Edellinen osa"))),g(t,a)&&i.a.createElement("div",{className:"col-1--mobile separator"})):f(a-1)?i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Link,{to:"/osa"+(a-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",a-1),i.a.createElement("b",null,"Edellinen osa"))),g(t,a)&&i.a.createElement("div",{className:"col-1--mobile separator"})):i.a.createElement(n.a,{className:"push-right-1"}):i.a.createElement(n.a,{className:"push-right-1"}),!t&&f(a+1)?i.a.createElement(l.Link,{to:"/osa"+(a+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",a+1),i.a.createElement("b",null,"Seuraava osa"))):t?b(t,a)?i.a.createElement(l.Link,{to:"/osa"+a+"/"+m()(c.a[a][d(t)]),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",""+a+d(t)),i.a.createElement("b",null,"Seuraava osa"))):f(a+1)?i.a.createElement(l.Link,{to:"/osa"+(a+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",a+1),i.a.createElement("b",null,"Seuraava osa"))):i.a.createElement(n.a,{className:"push-left-1"}):i.a.createElement(n.a,{className:"push-left-1"}))};v.defaultProps={part:void 0,letter:void 0},v.propTypes={part:r.PropTypes.number,letter:r.PropTypes.string},a.a=v},252:function(e,a,t){},281:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise"}},368:function(e,a,t){var n=t(21),l=t(369)(!1);n(n.S,"Object",{values:function(e){return l(e)}})},369:function(e,a,t){var n=t(29),l=t(32),r=t(71).f;e.exports=function(e){return function(a){for(var t,o=l(a),i=n(o),s=i.length,c=0,u=[];s>c;)r.call(o,t=i[c++])&&u.push(e?[t,o[t]]:o[t]);return u}}},370:function(e,a,t){},522:function(e,a,t){var n=t(253)("isEmpty",t(523),t(279));n.placeholder=t(226),e.exports=n},523:function(e,a,t){var n=t(269),l=t(180),r=t(232),o=t(148),i=t(270),s=t(233),c=t(234),u=t(265),m="[object Map]",p="[object Set]",k=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||u(e)||r(e)))return!e.length;var a=l(e);if(a==m||a==p)return!e.size;if(c(e))return!n(e).length;for(var t in e)if(k.call(e,t))return!1;return!0}}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-7e789605e86420658ef5.js.map