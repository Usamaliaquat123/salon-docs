"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[10371],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>N});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,N=d["".concat(g,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(N,i(i({ref:t},y),{},{components:a})):n.createElement(N,i({ref:t},y))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61065:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>N,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(58168),r=a(98587),l=(a(96540),a(15680)),i=["components"],o={},g=void 0,p={unversionedId:"props/listitem",id:"version-3.4.2/props/listitem",title:"listitem",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/listitem.md",sourceDirName:"props",slug:"/props/listitem",permalink:"/docs/3.4.2/props/listitem",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/listitem.md",tags:[],version:"3.4.2",frontMatter:{}},y={},d=[{value:"Props",id:"props",level:2},{value:"Child Components",id:"child-components",level:2},{value:"ListItem.ButtonGroup",id:"listitembuttongroup",level:3},{value:"ListItem.CheckBox",id:"listitemcheckbox",level:3},{value:"ListItem.Chevron",id:"listitemchevron",level:3},{value:"ListItem.Content",id:"listitemcontent",level:3},{value:"ListItem.Input",id:"listiteminput",level:3},{value:"ListItem.Subtitle",id:"listitemsubtitle",level:3},{value:"ListItem.Title",id:"listitemtitle",level:3},{value:"ListItem.Accordion",id:"listitemaccordion",level:3},{value:"ListItem.Swipeable",id:"listitemswipeable",level:3},{value:"Reference",id:"reference",level:2},{value:"<code>bottomDivider</code>",id:"bottomdivider",level:3},{value:"<code>Component</code>",id:"component",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>disabledStyle</code>",id:"disabledstyle",level:3},{value:"<code>onLongPress</code>",id:"onlongpress",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>pad</code>",id:"pad",level:3},{value:"<code>topDivider</code>",id:"topdivider",level:3},{value:"<code>ViewComponent</code>",id:"viewcomponent",level:3},{value:"<code>isExpanded</code>",id:"isexpanded",level:3},{value:"<code>icon</code>",id:"icon",level:3},{value:"<code>expandIcon</code>",id:"expandicon",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>noIcon</code>",id:"noicon",level:3},{value:"<code>noRotation</code>",id:"norotation",level:3},{value:"<code>animation</code>",id:"animation",level:3},{value:"<code>leftContent</code>",id:"leftcontent",level:3},{value:"<code>rightContent</code>",id:"rightcontent",level:3},{value:"<code>leftStyle</code>",id:"leftstyle",level:3},{value:"<code>rightStyle</code>",id:"rightstyle",level:3},{value:"<code>leftWidth</code>",id:"leftwidth",level:3},{value:"<code>rightWidth</code>",id:"rightwidth",level:3}],m={toc:d},c="wrapper";function N(e){var t=e.components,a=(0,r.A)(e,i);return(0,l.yg)(c,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Also receives all\n",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/touchablehighlight#props"},"TouchableHighlight"),"\nprops")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#bottomdivider"},(0,l.yg)("inlineCode",{parentName:"a"},"bottomDivider"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#component"},(0,l.yg)("inlineCode",{parentName:"a"},"Component"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#containerstyle"},(0,l.yg)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#disabled"},(0,l.yg)("inlineCode",{parentName:"a"},"disabled"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#disabledstyle"},(0,l.yg)("inlineCode",{parentName:"a"},"disabledStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#onlongpress"},(0,l.yg)("inlineCode",{parentName:"a"},"onLongPress"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#onpress"},(0,l.yg)("inlineCode",{parentName:"a"},"onPress"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#pad"},(0,l.yg)("inlineCode",{parentName:"a"},"pad"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#topdivider"},(0,l.yg)("inlineCode",{parentName:"a"},"topDivider"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#viewcomponent"},(0,l.yg)("inlineCode",{parentName:"a"},"ViewComponent")))),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"child-components"},"Child Components"),(0,l.yg)("h3",{id:"listitembuttongroup"},"ListItem.ButtonGroup"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Receives all ",(0,l.yg)("a",{parentName:"p",href:"/docs/3.4.2/button_group#props"},"ButtonGroup")," props.")),(0,l.yg)("h3",{id:"listitemcheckbox"},"ListItem.CheckBox"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Receives all ",(0,l.yg)("a",{parentName:"p",href:"/docs/3.4.2/checkbox#props"},"CheckBox")," props.")),(0,l.yg)("h3",{id:"listitemchevron"},"ListItem.Chevron"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Receives all ",(0,l.yg)("a",{parentName:"p",href:"/docs/3.4.2/icon#props"},"Icon")," props.")),(0,l.yg)("h3",{id:"listitemcontent"},"ListItem.Content"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Receives all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.yg)("h3",{id:"listiteminput"},"ListItem.Input"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Receives all ",(0,l.yg)("a",{parentName:"p",href:"/docs/3.4.2/input#props"},"Input")," props.")),(0,l.yg)("h3",{id:"listitemsubtitle"},"ListItem.Subtitle"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Receives all ",(0,l.yg)("a",{parentName:"p",href:"/docs/3.4.2/text#props"},"Text")," props.")),(0,l.yg)("h3",{id:"listitemtitle"},"ListItem.Title"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Receives all ",(0,l.yg)("a",{parentName:"p",href:"/docs/3.4.2/text#props"},"Text")," props.")),(0,l.yg)("h3",{id:"listitemaccordion"},"ListItem.Accordion"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#isexpanded"},(0,l.yg)("inlineCode",{parentName:"a"},"isExpanded"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#icon"},(0,l.yg)("inlineCode",{parentName:"a"},"icon"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#expandicon"},(0,l.yg)("inlineCode",{parentName:"a"},"expandIcon"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#content"},(0,l.yg)("inlineCode",{parentName:"a"},"content"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#noicon"},(0,l.yg)("inlineCode",{parentName:"a"},"noIcon"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#norotation"},(0,l.yg)("inlineCode",{parentName:"a"},"noRotation"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#animation"},(0,l.yg)("inlineCode",{parentName:"a"},"animation")))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Also Receives all ",(0,l.yg)("a",{parentName:"p",href:"#props"},"ListItem")," props.")),(0,l.yg)("h3",{id:"listitemswipeable"},"ListItem.Swipeable"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Also recieves all ",(0,l.yg)("inlineCode",{parentName:"p"},"ListItem")," Props")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#leftcontent"},(0,l.yg)("inlineCode",{parentName:"a"},"leftContent"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#leftcontent"},(0,l.yg)("inlineCode",{parentName:"a"},"rightContent"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#leftstyle"},(0,l.yg)("inlineCode",{parentName:"a"},"leftStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#rightstyle"},(0,l.yg)("inlineCode",{parentName:"a"},"rightStyle"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#leftwidth"},(0,l.yg)("inlineCode",{parentName:"a"},"leftWidth"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#rightwidth"},(0,l.yg)("inlineCode",{parentName:"a"},"rightWidth")))),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"reference"},"Reference"),(0,l.yg)("h3",{id:"bottomdivider"},(0,l.yg)("inlineCode",{parentName:"h3"},"bottomDivider")),(0,l.yg)("p",null,"Add divider at the bottom of the list item"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"center"},"false")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"component"},(0,l.yg)("inlineCode",{parentName:"h3"},"Component")),(0,l.yg)("p",null,"replace element with custom element (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"View or TouchableHighlight (default) if onPress method is added as prop"),(0,l.yg)("td",{parentName:"tr",align:"center"},"component")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"containerstyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.yg)("p",null,"additional main container styling (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"disabled"},(0,l.yg)("inlineCode",{parentName:"h3"},"disabled")),(0,l.yg)("p",null,"If true the user won't be able to perform any action on the list item."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"disabledstyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"disabledStyle")),(0,l.yg)("p",null,"Specific styling to be used when list item is disabled."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"onlongpress"},(0,l.yg)("inlineCode",{parentName:"h3"},"onLongPress")),(0,l.yg)("p",null,"onLongPress method for link (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"function"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"onpress"},(0,l.yg)("inlineCode",{parentName:"h3"},"onPress")),(0,l.yg)("p",null,"onPress method for link (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"function"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"pad"},(0,l.yg)("inlineCode",{parentName:"h3"},"pad")),(0,l.yg)("p",null,"adds spacing between the leftComponent, the title component & right component"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"number"),(0,l.yg)("td",{parentName:"tr",align:"center"},(0,l.yg)("inlineCode",{parentName:"td"},"16"))))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"topdivider"},(0,l.yg)("inlineCode",{parentName:"h3"},"topDivider")),(0,l.yg)("p",null,"Add divider at the top of the list item"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"center"},"false")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"viewcomponent"},(0,l.yg)("inlineCode",{parentName:"h3"},"ViewComponent")),(0,l.yg)("p",null,"Container for linear gradient (for non-expo user)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"component"),(0,l.yg)("td",{parentName:"tr",align:"center"},"View")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"isexpanded"},(0,l.yg)("inlineCode",{parentName:"h3"},"isExpanded")),(0,l.yg)("p",null,"Accordion Expanded"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"booleon"),(0,l.yg)("td",{parentName:"tr",align:"center"},"false")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"icon"},(0,l.yg)("inlineCode",{parentName:"h3"},"icon")),(0,l.yg)("p",null,"Icon for unexpanded Accordion"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"IocnNode"),(0,l.yg)("td",{parentName:"tr",align:"center"},"chevron-down")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"expandicon"},(0,l.yg)("inlineCode",{parentName:"h3"},"expandIcon")),(0,l.yg)("p",null,"Icon when Accordion is expanded, if not provided ",(0,l.yg)("inlineCode",{parentName:"p"},"icon")," will be rotated 180deg (optional)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"IconNode"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"content"},(0,l.yg)("inlineCode",{parentName:"h3"},"content")),(0,l.yg)("p",null,"Similar to ListItem's child"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"ReactNode"),(0,l.yg)("td",{parentName:"tr",align:"center"},"Empty ListItem.Content")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"noicon"},(0,l.yg)("inlineCode",{parentName:"h3"},"noIcon")),(0,l.yg)("p",null,"Don't show accordion icon"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"center"},"false")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"norotation"},(0,l.yg)("inlineCode",{parentName:"h3"},"noRotation")),(0,l.yg)("p",null,"Don't rotate when Accordion is expanded"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"center"},"false")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"animation"},(0,l.yg)("inlineCode",{parentName:"h3"},"animation")),(0,l.yg)("p",null,"Boolean to show animation,"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"Object or number"),(0,l.yg)("td",{parentName:"tr",align:"center"},(0,l.yg)("inlineCode",{parentName:"td"},'{type:"timing",duration:350}'))))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"leftcontent"},(0,l.yg)("inlineCode",{parentName:"h3"},"leftContent")),(0,l.yg)("p",null,"Left Content"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"ReactNode"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"rightcontent"},(0,l.yg)("inlineCode",{parentName:"h3"},"rightContent")),(0,l.yg)("p",null,"Right Content"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"ReactNode"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"leftstyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"leftStyle")),(0,l.yg)("p",null,"Style of left container"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"rightstyle"},(0,l.yg)("inlineCode",{parentName:"h3"},"rightStyle")),(0,l.yg)("p",null,"Style of right container"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"leftwidth"},(0,l.yg)("inlineCode",{parentName:"h3"},"leftWidth")),(0,l.yg)("p",null,"Width to swipe left"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"number"),(0,l.yg)("td",{parentName:"tr",align:"center"},"ScreenWidth/3")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"rightwidth"},(0,l.yg)("inlineCode",{parentName:"h3"},"rightWidth")),(0,l.yg)("p",null,"Width to swipe right"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"number"),(0,l.yg)("td",{parentName:"tr",align:"center"},"ScreenWidth/3")))),(0,l.yg)("hr",null))}N.isMDXComponent=!0}}]);