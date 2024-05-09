"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[14445],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),y=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=y(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=y(n),m=r,u=d["".concat(g,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var y=2;y<l;y++)i[y]=n[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>u,frontMatter:()=>o,metadata:()=>y,toc:()=>d});var a=n(58168),r=n(98587),l=(n(96540),n(15680)),i=["components"],o={id:"button",title:"Button"},g=void 0,y={unversionedId:"button",id:"version-2.3.2/button",title:"Button",description:"Buttons are touchable elements used to interact with the screen. They may",source:"@site/versioned_docs/version-2.3.2/button.md",sourceDirName:".",slug:"/button",permalink:"/docs/2.3.2/button",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/button.md",tags:[],version:"2.3.2",frontMatter:{id:"button",title:"Button"},sidebar:"version-2.3.2/docs",previous:{title:"Bottom Sheet",permalink:"/docs/2.3.2/bottomsheet"},next:{title:"ButtonGroup",permalink:"/docs/2.3.2/button_group"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>buttonStyle</code>",id:"buttonstyle",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>disabledStyle</code>",id:"disabledstyle",level:3},{value:"<code>disabledTitleStyle</code>",id:"disabledtitlestyle",level:3},{value:"<code>icon</code>",id:"icon",level:3},{value:"<code>iconContainerStyle</code>",id:"iconcontainerstyle",level:3},{value:"<code>iconRight</code>",id:"iconright",level:3},{value:"<code>linearGradientProps</code>",id:"lineargradientprops",level:3},{value:"<code>loading</code>",id:"loading",level:3},{value:"<code>loadingProps</code>",id:"loadingprops",level:3},{value:"<code>loadingStyle</code>",id:"loadingstyle",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>raised</code>",id:"raised",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>titleProps</code>",id:"titleprops",level:3},{value:"<code>titleStyle</code>",id:"titlestyle",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>TouchableComponent</code>",id:"touchablecomponent",level:3},{value:"<code>ViewComponent</code>",id:"viewcomponent",level:3},{value:"LinearGradient Usage",id:"lineargradient-usage",level:2}],c={toc:d},m="wrapper";function u(e){var t=e.components,n=(0,r.A)(e,i);return(0,l.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Buttons are touchable elements used to interact with the screen. They may\ndisplay text, icons, or both. Buttons can be styled with several props to look a\nspecific way."),(0,l.yg)("div",{className:"component-preview component-preview--grid component-preview--grid-3"},(0,l.yg)("figure",null,(0,l.yg)("img",{src:"/img/button/button--solid.jpg",alt:"Solid Button"}),(0,l.yg)("figcaption",null,"Solid")),(0,l.yg)("figure",null,(0,l.yg)("img",{src:"/img/button/button--clear.jpg",alt:"Clear Button"}),(0,l.yg)("figcaption",null,"Clear")),(0,l.yg)("figure",null,(0,l.yg)("img",{src:"/img/button/button--outline.jpg",alt:"Outline Button"}),(0,l.yg)("figcaption",null,"Outline"))),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'import { Button } from \'react-native-elements\';\nimport Icon from \'react-native-vector-icons/FontAwesome\';\n\n<Button\n  title="Solid Button"\n/>\n\n<Button\n  title="Outline button"\n  type="outline"\n/>\n\n<Button\n  title="Clear button"\n  type="clear"\n/>\n\n<Button\n  icon={\n    <Icon\n      name="arrow-right"\n      size={15}\n      color="white"\n    />\n  }\n  title="Button with icon component"\n/>\n\n<Button\n  icon={{\n    name: "arrow-right",\n    size: 15,\n    color: "white"\n  }}\n  title="Button with icon object"\n/>\n\n<Button\n  icon={\n    <Icon\n      name="arrow-right"\n      size={15}\n      color="white"\n    />\n  }\n  iconRight\n  title="Button with right icon"\n/>\n\n<Button\n  title="Loading button"\n  loading\n/>\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Also receives all\n",(0,l.yg)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchablenativefeedback.html#props"},"TouchableNativeFeedback"),"\n(Android) or\n",(0,l.yg)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchableopacity.html#props"},"TouchableOpacity"),"\n(iOS) props")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#buttonstyle"},(0,l.yg)("inlineCode",{parentName:"a"},"buttonStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#containerstyle"},(0,l.yg)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#disabled"},(0,l.yg)("inlineCode",{parentName:"a"},"disabled"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#disabledstyle"},(0,l.yg)("inlineCode",{parentName:"a"},"disabledStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#disabledtitlestyle"},(0,l.yg)("inlineCode",{parentName:"a"},"disabledTitleStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#icon"},(0,l.yg)("inlineCode",{parentName:"a"},"icon"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#iconcontainerstyle"},(0,l.yg)("inlineCode",{parentName:"a"},"iconContainerStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#iconright"},(0,l.yg)("inlineCode",{parentName:"a"},"iconRight"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#lineargradientprops"},(0,l.yg)("inlineCode",{parentName:"a"},"linearGradientProps"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#loading"},(0,l.yg)("inlineCode",{parentName:"a"},"loading"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#loadingprops"},(0,l.yg)("inlineCode",{parentName:"a"},"loadingProps"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#loadingstyle"},(0,l.yg)("inlineCode",{parentName:"a"},"loadingStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#onpress"},(0,l.yg)("inlineCode",{parentName:"a"},"onPress"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#raised"},(0,l.yg)("inlineCode",{parentName:"a"},"raised"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#title"},(0,l.yg)("inlineCode",{parentName:"a"},"title"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#titleprops"},(0,l.yg)("inlineCode",{parentName:"a"},"titleProps"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#titlestyle"},(0,l.yg)("inlineCode",{parentName:"a"},"titleStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#type"},(0,l.yg)("inlineCode",{parentName:"a"},"type"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#touchablecomponent"},(0,l.yg)("inlineCode",{parentName:"a"},"TouchableComponent"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#viewcomponent"},(0,l.yg)("inlineCode",{parentName:"a"},"ViewComponent")))),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"reference"},"Reference"),(0,l.yg)("h3",{id:"buttonstyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"buttonStyle")),(0,l.yg)("p",null,"add additional styling for button component (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"containerstyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.yg)("p",null,"styling for Component container"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"disabled"},(0,l.yg)("inlineCode",{parentName:"h3"},"disabled")),(0,l.yg)("p",null,"disables user interaction"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"center"},"false")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"disabledstyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"disabledStyle")),(0,l.yg)("p",null,"style of the button when disabled"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"disabledtitlestyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"disabledTitleStyle")),(0,l.yg)("p",null,"style of the title when disabled"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"icon"},(0,l.yg)("inlineCode",{parentName:"h3"},"icon")),(0,l.yg)("p",null,"displays a centered icon (when no title) or to the left (with text). (can be\nused along with iconRight as well). Can be an object or a custom component."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"{",(0,l.yg)("a",{parentName:"td",href:"/docs/2.3.2/icon#props"},"...Icon props"),"}",(0,l.yg)("br",null),(0,l.yg)("strong",{parentName:"td"},"OR"),(0,l.yg)("br",null)," component"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"iconcontainerstyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"iconContainerStyle")),(0,l.yg)("p",null,"styling for Icon Component container"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"iconright"},(0,l.yg)("inlineCode",{parentName:"h3"},"iconRight")),(0,l.yg)("p",null,"displays Icon to the right of title. Needs to be used along with ",(0,l.yg)("inlineCode",{parentName:"p"},"icon")," prop"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"center"},"false")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"lineargradientprops"},(0,l.yg)("inlineCode",{parentName:"h3"},"linearGradientProps")),(0,l.yg)("p",null,"displays a linear gradient. See ",(0,l.yg)("a",{parentName:"p",href:"#lineargradient-usage"},"usage"),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"{",(0,l.yg)("a",{parentName:"td",href:"https://github.com/react-native-community/react-native-linear-gradient#additional-props"},"...Gradient props"),"}"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"loading"},(0,l.yg)("inlineCode",{parentName:"h3"},"loading")),(0,l.yg)("p",null,"prop to display a loading spinner (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"center"},"false")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"loadingprops"},(0,l.yg)("inlineCode",{parentName:"h3"},"loadingProps")),(0,l.yg)("p",null,"add additional props for ActivityIndicator component (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"{",(0,l.yg)("a",{parentName:"td",href:"https://reactnative.dev/docs/activityindicator#props"},"...ActivityIndicator props"),"}"),(0,l.yg)("td",{parentName:"tr",align:"center"},"Internal object")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"loadingstyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"loadingStyle")),(0,l.yg)("p",null,"add additional styling for loading component (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"onpress"},(0,l.yg)("inlineCode",{parentName:"h3"},"onPress")),(0,l.yg)("p",null,"onPress method (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"function"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"raised"},(0,l.yg)("inlineCode",{parentName:"h3"},"raised")),(0,l.yg)("p",null,"Add raised button styling (optional). Has no effect if ",(0,l.yg)("inlineCode",{parentName:"p"},'type="clear"'),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"center"},"false")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"title"},(0,l.yg)("inlineCode",{parentName:"h3"},"title")),(0,l.yg)("p",null,"button title (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"string"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"titleprops"},(0,l.yg)("inlineCode",{parentName:"h3"},"titleProps")),(0,l.yg)("p",null,"add additional props for Text component (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"{",(0,l.yg)("a",{parentName:"td",href:"https://reactnative.dev/docs/text#props"},"...Text props"),"}"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"titlestyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"titleStyle")),(0,l.yg)("p",null,"add additional styling for title component (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"type"},(0,l.yg)("inlineCode",{parentName:"h3"},"type")),(0,l.yg)("p",null,"Type of button (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},(0,l.yg)("inlineCode",{parentName:"td"},"solid"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"clear"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"outline")),(0,l.yg)("td",{parentName:"tr",align:"center"},"solid")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"touchablecomponent"},(0,l.yg)("inlineCode",{parentName:"h3"},"TouchableComponent")),(0,l.yg)("p",null,"component for user interaction"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"Touchable Component"),(0,l.yg)("td",{parentName:"tr",align:"center"},"TouchableOpacity (ios) or TouchableNativeFeedback (android)")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"viewcomponent"},(0,l.yg)("inlineCode",{parentName:"h3"},"ViewComponent")),(0,l.yg)("p",null,"component for container"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,l.yg)("td",{parentName:"tr",align:"center"},"View")))),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,l.yg)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,l.yg)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,l.yg)("p",null,"For react-native-cli users, make sure to follow the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-jsx"},"import { Button } from 'react-native-elements';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Button\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")))}u.isMDXComponent=!0}}]);