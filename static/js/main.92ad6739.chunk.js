(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c(3),i=c(1),a=c(0),l=Object(i.createContext)(),r=function(e){var t=e.children,c=Object(i.useState)("light"),n=Object(s.a)(c,2),r=n[0],o=n[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://ctodd678.github.io/portfolio-website",j="CT.",b={name:"Connor Todd",role:"Computer Science New-Grad",social:{linkedin:"https://linkedin.com",github:"https://github.com"}},h=[{name:"University Course Utility",description:"React web-app with a Python back-end, hosted using Flask and NGINX. A simple utility that compiles all courses for University of Guelph and Waterloo into JSON databases. Can be used to search for courses and create interactive graphs of courses, subjects and majors.",stack:["React","MaterialUI","Python","NGINX","Flask"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Study Helper",description:"iOS/Android app created using Flutter and Material UI.",stack:["Flutter/Dart","Material UI","BookshelfJS"],sourceCode:"https://github.com"},{name:"Cryptocurrency Auto-Miner",description:"Automatically switching cryptocurrency mining script. Switches to currently most profitably mineable cryptocurrency using the whattomine.com API.",stack:["Python"],sourceCode:"https://github.com"}],u=["C","Java","Python","HTML","CSS","JavaScript","React","Flutter/Dart","Material UI","Git","CI/CD"],d="ctodd678@mail.com",m=c(16),O=c.n(m),x=c(14),p=c.n(x),f=c(18),k=c.n(f),N=c(17),v=c.n(N),g=(c(28),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],b=o[1],m=function(){return b(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[h.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,u.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,d?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(a.jsx)(p.a,{}):Object(a.jsx)(O.a,{})}),Object(a.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(v.a,{}):Object(a.jsx)(k.a,{})})]})}),_=(c(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(g,{})]})}),y=c(11),C=c.n(y),w=c(19),S=c.n(w),P=(c(33),function(){var e=b.name,t=b.role,c=b.description,n=b.resume,s=b.social;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsx)("h1",{children:Object(a.jsx)("span",{className:"about__name",children:e})}),t&&Object(a.jsx)("h2",{className:"about__role",children:t}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(C.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(S.a,{})})]})]})]})}),I=c(7),E=c.n(I),M=c(20),U=c.n(M),F=(c(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},E()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(C.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(U.a,{})})]})}),J=(c(36),function(){return h.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:h.map((function(e){return Object(a.jsx)(F,{project:e},E()())}))})]}):null}),A=(c(37),function(){return u.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:u.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())}))})]}):null}),G=c(21),T=c.n(G),L=(c(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(T.a,{fontSize:"large"})})}):null}),R=(c(39),function(){return d?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(d),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),D=(c(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/ctodd678/portfolio-website",className:"link footer__link"})})}),B=(c(41),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(_,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(P,{}),Object(a.jsx)(J,{}),Object(a.jsx)(A,{}),Object(a.jsx)(R,{})]}),Object(a.jsx)(L,{}),Object(a.jsx)(D,{})]})});c(42);Object(n.render)(Object(a.jsx)(r,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.92ad6739.chunk.js.map