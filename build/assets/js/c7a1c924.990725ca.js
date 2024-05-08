"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[47210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,N=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(N,i(i({ref:t},k),{},{components:n})):a.createElement(N,i({ref:t},k))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>N,frontMatter:()=>p,metadata:()=>k,toc:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(44996),o=["components"],p={id:"pricing",title:"Pricing"},c=void 0,k={unversionedId:"pricing",id:"version-2.3.2/pricing",title:"Pricing",description:"Pricing is a convenience component used to display features and pricing tables",source:"@site/versioned_docs/version-2.3.2/pricing.md",sourceDirName:".",slug:"/pricing",permalink:"/docs/2.3.2/pricing",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/pricing.md",tags:[],version:"2.3.2",frontMatter:{id:"pricing",title:"Pricing"},sidebar:"version-2.3.2/docs",previous:{title:"Overlay",permalink:"/docs/2.3.2/overlay"},next:{title:"Rating",permalink:"/docs/2.3.2/rating"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>infoStyle</code>",id:"infostyle",level:3},{value:"<code>pricingStyle</code>",id:"pricingstyle",level:3},{value:"<code>titleStyle</code>",id:"titlestyle",level:3},{value:"<code>wrapperStyle</code>",id:"wrapperstyle",level:3},{value:"<code>price</code>",id:"price",level:3},{value:"<code>onButtonPress</code>",id:"onbuttonpress",level:3},{value:"<code>button</code>",id:"button",level:3},{value:"<code>info</code>",id:"info",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>title</code>",id:"title",level:3}],u={toc:m};function N(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pricing is a convenience component used to display features and pricing tables\nin a beautiful and engaging way."),(0,l.kt)("img",{alt:"Pricing Component",src:(0,i.Z)("img/pricing.png")}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { PricingCard } from 'react-native-elements';\n\n<PricingCard\n  color=\"#4f9deb\"\n  title=\"Free\"\n  price=\"$0\"\n  info={['1 User', 'Basic Support', 'All Core Features']}\n  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}\n/>;\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#buttonfont"},(0,l.kt)("inlineCode",{parentName:"a"},"buttonFont"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#infofont"},(0,l.kt)("inlineCode",{parentName:"a"},"infoFont"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pricingfont"},(0,l.kt)("inlineCode",{parentName:"a"},"pricingFont"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#titlefont"},(0,l.kt)("inlineCode",{parentName:"a"},"titleFont"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#wrapperstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"wrapperStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#price"},(0,l.kt)("inlineCode",{parentName:"a"},"price"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onbuttonpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onButtonPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#button"},(0,l.kt)("inlineCode",{parentName:"a"},"button"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#info"},(0,l.kt)("inlineCode",{parentName:"a"},"info"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#color"},(0,l.kt)("inlineCode",{parentName:"a"},"color"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#title"},(0,l.kt)("inlineCode",{parentName:"a"},"title")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"outer component styling (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"infostyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"infoStyle")),(0,l.kt)("p",null,"specify pricing information style"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"pricingstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"pricingStyle")),(0,l.kt)("p",null,"specify pricing text style"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"titlestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"titleStyle")),(0,l.kt)("p",null,"specify title text style"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"wrapperstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"wrapperStyle")),(0,l.kt)("p",null,"inner wrapper component styling (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"price"},(0,l.kt)("inlineCode",{parentName:"h3"},"price")),(0,l.kt)("p",null,"price (required)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onbuttonpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onButtonPress")),(0,l.kt)("p",null,"function to be run when button is pressed"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"any"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"button"},(0,l.kt)("inlineCode",{parentName:"h3"},"button")),(0,l.kt)("p",null,"button information (required)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"/docs/2.3.2/button#props"},"...Button props"),"}",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"OR"),(0,l.kt)("br",null)," component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"info"},(0,l.kt)("inlineCode",{parentName:"h3"},"info")),(0,l.kt)("p",null,"pricing information (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"array of strings"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h3"},"color")),(0,l.kt)("p",null,"color scheme for button & title"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h3"},"title")),(0,l.kt)("p",null,"title (required)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))))}N.isMDXComponent=!0}}]);