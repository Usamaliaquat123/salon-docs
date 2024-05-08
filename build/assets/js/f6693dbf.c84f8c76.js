"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[77147,93307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,s=m["".concat(c,".").concat(h)]||m[h]||d[h]||l;return n?a.createElement(s,o(o({ref:t},k),{},{components:n})):a.createElement(s,o({ref:t},k))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>N,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(44996),i=n(70316),c=["components"],p={id:"checkbox",title:"CheckBox"},k=void 0,d={unversionedId:"checkbox",id:"version-3.4.2/checkbox",title:"CheckBox",description:"CheckBoxes allow users to complete tasks that involve making choices such as",source:"@site/versioned_docs/version-3.4.2/checkbox.md",sourceDirName:".",slug:"/checkbox",permalink:"/docs/3.4.2/checkbox",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/checkbox.md",tags:[],version:"3.4.2",frontMatter:{id:"checkbox",title:"CheckBox"},sidebar:"version-3.4.2/docs",previous:{title:"Card",permalink:"/docs/3.4.2/card"},next:{title:"Chip",permalink:"/docs/3.4.2/chip"}},m={},h=[{value:"Usage",id:"usage",level:2}],s={toc:h};function N(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"CheckBoxes allow users to complete tasks that involve making choices such as\nselecting options, or switching settings on or off. It provides a clear visual\nof either a true or false choice."),(0,l.kt)("img",{alt:"Checkboxes",src:(0,o.Z)("img/checkbox.png")}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { CheckBox } from 'react-native-elements'\n\n<CheckBox\n  title='Click Here'\n  checked={this.state.checked}\n/>\n\n<CheckBox\n  center\n  title='Click Here'\n  checked={this.state.checked}\n/>\n\n<CheckBox\n  center\n  title='Click Here'\n  checkedIcon='dot-circle-o'\n  uncheckedIcon='circle-o'\n  checked={this.state.checked}\n/>\n\n<CheckBox\n  center\n  title='Click Here to Remove This Item'\n  iconRight\n  iconType='material'\n  checkedIcon='clear'\n  uncheckedIcon='add'\n  checkedColor='red'\n  checked={this.state.checked}\n/>\n\n<CheckBox\n  checkedIcon={<Image source={require('../checked.png')} />}\n  uncheckedIcon={<Image source={require('../unchecked.png')} />}\n  checked={this.state.checked}\n  onPress={() => this.setState({checked: !this.state.checked})}\n/>\n")),(0,l.kt)("hr",null),(0,l.kt)(i.default,{mdxType:"Props"}),(0,l.kt)("hr",null))}N.isMDXComponent=!0},70316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},c=void 0,p={unversionedId:"props/checkbox",id:"version-3.4.2/props/checkbox",title:"checkbox",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/checkbox.md",sourceDirName:"props",slug:"/props/checkbox",permalink:"/docs/3.4.2/props/checkbox",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/checkbox.md",tags:[],version:"3.4.2",frontMatter:{}},k={},d=[{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>center</code>",id:"center",level:3},{value:"<code>checked</code>",id:"checked",level:3},{value:"<code>checkedColor</code>",id:"checkedcolor",level:3},{value:"<code>checkedIcon</code>",id:"checkedicon",level:3},{value:"<code>checkedTitle</code>",id:"checkedtitle",level:3},{value:"<code>Component</code>",id:"component",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>fontFamily</code>",id:"fontfamily",level:3},{value:"<code>iconRight</code>",id:"iconright",level:3},{value:"<code>iconType</code>",id:"icontype",level:3},{value:"<code>onIconPress</code>",id:"oniconpress",level:3},{value:"<code>onLongIconPress</code>",id:"onlongiconpress",level:3},{value:"<code>onLongPress</code>",id:"onlongpress",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>right</code>",id:"right",level:3},{value:"<code>size</code>",id:"size",level:3},{value:"<code>textStyle</code>",id:"textstyle",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>titleProps</code>",id:"titleprops",level:3},{value:"<code>uncheckedColor</code>",id:"uncheckedcolor",level:3},{value:"<code>uncheckedIcon</code>",id:"uncheckedicon",level:3}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#center"},(0,l.kt)("inlineCode",{parentName:"a"},"center"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#checked"},(0,l.kt)("inlineCode",{parentName:"a"},"checked"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#checkedcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"checkedColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#checkedicon"},(0,l.kt)("inlineCode",{parentName:"a"},"checkedIcon"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#checkedtitle"},(0,l.kt)("inlineCode",{parentName:"a"},"checkedTitle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#component"},(0,l.kt)("inlineCode",{parentName:"a"},"Component"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#fontfamily"},(0,l.kt)("inlineCode",{parentName:"a"},"fontFamily"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#iconright"},(0,l.kt)("inlineCode",{parentName:"a"},"iconRight"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#icontype"},(0,l.kt)("inlineCode",{parentName:"a"},"iconType"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#oniconpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onIconPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onlongiconpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onLongIconPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onlongpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onLongPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#right"},(0,l.kt)("inlineCode",{parentName:"a"},"right"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#size"},(0,l.kt)("inlineCode",{parentName:"a"},"size"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#textstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"textStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#title"},(0,l.kt)("inlineCode",{parentName:"a"},"title"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#titleprops"},(0,l.kt)("inlineCode",{parentName:"a"},"titleProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#uncheckedcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"uncheckedColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#uncheckedicon"},(0,l.kt)("inlineCode",{parentName:"a"},"uncheckedIcon")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"center"},(0,l.kt)("inlineCode",{parentName:"h3"},"center")),(0,l.kt)("p",null,"Aligns checkbox to center (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"checked"},(0,l.kt)("inlineCode",{parentName:"h3"},"checked")),(0,l.kt)("p",null,"Flag for checking the icon (required)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"checkedcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"checkedColor")),(0,l.kt)("p",null,"Default checked color (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"green")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"checkedicon"},(0,l.kt)("inlineCode",{parentName:"h3"},"checkedIcon")),(0,l.kt)("p",null,"Default checked icon (",(0,l.kt)("a",{parentName:"p",href:"http://fontawesome.io/icons/"},"Font Awesome Icon"),")\n(optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string OR React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"check-square-o")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"checkedtitle"},(0,l.kt)("inlineCode",{parentName:"h3"},"checkedTitle")),(0,l.kt)("p",null,"Specify a custom checked message (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"component"},(0,l.kt)("inlineCode",{parentName:"h3"},"Component")),(0,l.kt)("p",null,"Specify React Native component for main button (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"TouchableOpacity")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"Style of main container (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fontfamily"},(0,l.kt)("inlineCode",{parentName:"h3"},"fontFamily")),(0,l.kt)("p",null,"Specify different font family"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"System font bold (iOS), Sans Serif Bold (android)")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"iconright"},(0,l.kt)("inlineCode",{parentName:"h3"},"iconRight")),(0,l.kt)("p",null,"Moves icon to right of text (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"icontype"},(0,l.kt)("inlineCode",{parentName:"h3"},"iconType")),(0,l.kt)("p",null,"type of icon set. ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.4.2/icon#available-icon-sets"},"Supported sets here"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"font-awesome")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"oniconpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onIconPress")),(0,l.kt)("p",null,"onPress function for checkbox (required)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onlongiconpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onLongIconPress")),(0,l.kt)("p",null,"onLongPress function for checkbox (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onlongpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onLongPress")),(0,l.kt)("p",null,"onLongPress function for checkbox (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,l.kt)("p",null,"onPress function for container (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"right"},(0,l.kt)("inlineCode",{parentName:"h3"},"right")),(0,l.kt)("p",null,"Aligns checkbox to right (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"size"},(0,l.kt)("inlineCode",{parentName:"h3"},"size")),(0,l.kt)("p",null,"Size of the checkbox"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"24")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"textstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"textStyle")),(0,l.kt)("p",null,"Style of text (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h3"},"title")),(0,l.kt)("p",null,"Title of checkbox"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string OR React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"titleprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"titleProps")),(0,l.kt)("p",null,"Additional props for the title Text component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/text#props-1"},"...Text props"),"}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"uncheckedcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"uncheckedColor")),(0,l.kt)("p",null,"Default unchecked color (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"#bfbfbf")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"uncheckedicon"},(0,l.kt)("inlineCode",{parentName:"h3"},"uncheckedIcon")),(0,l.kt)("p",null,"Default checked icon (",(0,l.kt)("a",{parentName:"p",href:"http://fontawesome.io/icons/"},"Font Awesome Icon"),")\n(optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string OR React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"square-o")))))}h.isMDXComponent=!0}}]);