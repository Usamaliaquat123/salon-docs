(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[51570],{31396:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var n=a(96540),r=a(58040),i=a(64775),l=a(10171),o=a(11451);const s=function(){var e=(0,l.A)({componentName:"Tab",props:{children:{value:' \n          <Tab.Item title="Recent" />\n          <Tab.Item title="favourite" />\n          <Tab.Item title="cart" />\n         ',type:o.B.ReactNode},value:{type:o.B.Number,value:0},onChange:{type:o.B.Function,value:'() => console.log("onChange()")'},disableIndicator:{type:o.B.Boolean,value:!1},indicatorStyle:{type:o.B.Object,value:"{}"},variant:{type:o.B.Enum,options:{primary:"primary",default:"default"},value:"default"}},scope:{Tab:r.Tab},imports:{"@rneui/base":{named:["Tab"]}}});return n.createElement(n.Fragment,null,n.createElement(i.A,{params:e}))}},41298:(e,t,a)=>{"use strict";a.d(t,{y:()=>s});var n=a(96540),r=a(5260),i=a(14628),l=a(1547),o=a(83564),s=function(){return n.createElement(r.A,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+i.A+") format('truetype');\n          }\n        "))}},64775:(e,t,a)=>{"use strict";a.d(t,{A:()=>g});var n=a(58168),r=a(96540),i=a(78478),l=a(32594),o=a(20018),s=a(96109),d=a(11245),m=a(34397),c=a(50546),p=a(25407);const g=function(e){var t=e.params,a=e.containerStyle,g=void 0===a?{}:a;return r.createElement(i.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(c.q9.Provider,null,r.createElement(c.Oy,{initialMetrics:p.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},g)},r.createElement(l.A,(0,n.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),r.createElement(s.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.A,t.knobProps),r.createElement(s.A,t.errorProps),r.createElement(m.w,t.actions)))}))}},59402:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>T,frontMatter:()=>g,metadata:()=>u,toc:()=>A});var n=a(58168),r=a(98587),i=(a(96540),a(15680)),l=a(41298),o=(a(11470),a(19365),["components"]),s={toc:[]},d="wrapper";function m(e){var t=e.components,a=(0,r.A)(e,o);return(0,i.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{className:"snack-player","data-snack-name":"RNE Tab","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tab%2C%20Text%2C%20TabView%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bindex%2C%20setIndex%5D%20%3D%20React.useState(0)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CTab%0A%20%20%20%20%20%20value%3D%7Bindex%7D%0A%20%20%20%20%20%20onChange%3D%7B(e)%20%3D%3E%20setIndex(e)%7D%0A%20%20%20%20%20%20indicatorStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20height%3A%203%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20variant%3D%22primary%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20title%3D%22Recent%22%0A%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'timer'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20title%3D%22favorite%22%0A%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'heart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20title%3D%22cart%22%0A%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'cart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FTab%3E%0A%0A%20%20%20%20%3CTabView%20value%3D%7Bindex%7D%20onChange%3D%7BsetIndex%7D%20animationType%3D%22spring%22%3E%0A%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'red'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20h1%3ERecent%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'blue'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20h1%3EFavorite%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'green'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20h1%3ECart%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%3C%2FTabView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0;var c=a(31396),p=["components"],g={id:"tab",title:"Tab"},y=void 0,u={unversionedId:"components/tab",id:"version-4.0.0-rc.6/components/tab",title:"Tab",description:"Tabs organize content across different screens, data sets, and other interactions.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/Tab.mdx",sourceDirName:"components",slug:"/components/tab",permalink:"/docs/4.0.0-rc.6/components/tab",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/Tab.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"tab",title:"Tab"},sidebar:"docs",previous:{title:"Switch",permalink:"/docs/4.0.0-rc.6/components/switch"},next:{title:"Tab.Item",permalink:"/docs/4.0.0-rc.6/components/tab_item"}},b={},A=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Tabs",id:"basic-tabs",level:3},{value:"Active Tab Items",id:"active-tab-items",level:3},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],v={toc:A},N="wrapper";function T(e){var t=e.components,a=(0,r.A)(e,p);return(0,i.yg)(N,(0,n.A)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(l.y,{mdxType:"IconsStyle"}),(0,i.yg)("p",null,"Tabs organize content across different screens, data sets, and other interactions."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This component is not for (complex) navigation. Use ",(0,i.yg)("a",{parentName:"p",href:"https://reactnavigation.org"},"React Navigation")," for that.")),(0,i.yg)("h2",{id:"import"},"Import"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Tab } from "@rneui/themed";\n')),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("h3",{id:"basic-tabs"},"Basic Tabs"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Tab value={0} variant="primary">\n  <Tab.Item>Tab</Tab.Item>\n  <Tab.Item>Tab</Tab.Item>\n</Tab>\n')),(0,i.yg)("h3",{id:"active-tab-items"},"Active Tab Items"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Tab value={0} variant="primary" scrollable>\n  <Tab.Item\n    containerStyle={(active) => ({\n      backgroundColor: active ? "red" : undefined,\n    })}\n  >\n    Tab\n  </Tab.Item>\n  <Tab.Item\n    buttonStyle={(active) => ({\n      backgroundColor: active ? "red" : undefined,\n    })}\n  >\n    Tab\n  </Tab.Item>\n</Tab>\n')),(0,i.yg)(m,{mdxType:"Usage"}),(0,i.yg)("h2",{id:"props"},"Props"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Includes all ",(0,i.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,i.yg)("div",{class:"table-responsive"},(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,i.yg)("td",{parentName:"tr",align:null},"View Style"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Style for Tab container")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"disableIndicator")),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Disable the indicator below.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"indicatorStyle")),(0,i.yg)("td",{parentName:"tr",align:null},"View Style"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Additional styling for tab indicator.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"onChange")),(0,i.yg)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"Function")),(0,i.yg)("td",{parentName:"tr",align:null},"On Index Change Callback.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"scrollable")),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},"Makes Tab Scrolling")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"value")),(0,i.yg)("td",{parentName:"tr",align:null},"number"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Child position index value.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"variant")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"primary")," ","|"," ",(0,i.yg)("inlineCode",{parentName:"td"},"default")),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Define the background Variant."))))),(0,i.yg)("h2",{id:"playground"},"Playground"),(0,i.yg)(c.A,{mdxType:"Play"}))}T.isMDXComponent=!0},83564:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14628:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},1547:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},52352:()=>{},18411:()=>{}}]);