(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[77294],{17836:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var a=n(96540),l=n(58040),r=n(64775),o=n(10171),i=n(11451);const s=function(){var e=(0,o.A)({componentName:"FAB",props:{style:{type:i.B.Object,value:'{width:"80%",margin:20}'},placement:{type:i.B.Enum,options:{left:"left",right:"right"},value:"left"},color:{type:i.B.String,value:""},size:{type:i.B.Enum,options:{small:"small",large:"large"},value:"small"},visible:{type:i.B.Boolean,value:!1},upperCase:{type:i.B.Boolean,value:!1},overlayColor:{type:i.B.String,value:"#454545"},title:{type:i.B.String,value:"Create"},icon:{type:i.B.Object,value:"{ name: 'edit', color: '#fff' }"}},scope:{FAB:l.FAB},imports:{"@rneui/base":{named:["FAB"]}}});return a.createElement(a.Fragment,null,a.createElement(r.A,{params:e}))}},41298:(e,t,n)=>{"use strict";n.d(t,{y:()=>s});var a=n(96540),l=n(5260),r=n(14628),o=n(1547),i=n(83564),s=function(){return a.createElement(l.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.A+") format('truetype');\n          }\n        "))}},64775:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});var a=n(58168),l=n(96540),r=n(78478),o=n(32594),i=n(20018),s=n(96109),c=n(11245),d=n(34397),m=n(50546),p=n(25407);const g=function(e){var t=e.params,n=e.containerStyle,g=void 0===n?{}:n;return l.createElement(r.A,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(m.q9.Provider,null,l.createElement(m.Oy,{initialMetrics:p.Y},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},g)},l.createElement(o.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:i.A}))),l.createElement(s.A,{msg:t.errorProps.msg,isPopup:!0}),l.createElement(c.A,t.knobProps),l.createElement(s.A,t.errorProps),l.createElement(d.w,t.actions)))}))}},4588:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var a=n(98587),l=n(58168),r=n(96540),o=n(95404),i=n(20053),s=(n(21312),n(44586)),c=n(78478),d=n(26058);const m={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var p=n(92303),g=n(59644),y=["children","transformCode"];function u(){return r.createElement("div",null,"Loading...")}function A(e){var t=(0,p.A)(),n=(0,r.useContext)(o.MY),a=n.code,i=n.language,s=n.theme,c=n.disabled,d=n.onChange;return r.createElement(o.w,(0,l.A)({key:String(t),code:a,language:i,theme:s,disabled:c,onChange:d},e,{className:m.playgroundEditor}))}function v(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,l=(e.wrapper,r.useState(t)),s=l[0],d=l[1],p=function(){d((function(e){return!e}))};return r.createElement(r.Fragment,null,r.createElement("div",{className:m.playgroundPreview},r.createElement(c.A,{fallback:r.createElement(u,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(o.pA,null),r.createElement(o.p1,null),r.createElement("div",{className:m.toggleContainer},r.createElement("div",{className:(0,i.A)(m.toggleIcon),onClick:p},r.createElement(g.luQ,null),r.createElement("span",{className:m.showCode},s?"Hide":"Show"," Code"))))}))),s&&r.createElement(A,{preImports:a,showCode:s}))}function f(e){var t=e.children,n=(e.transformCode,(0,a.A)(e,y)),i=((0,s.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,d.A)());return r.createElement("div",{className:m.playgroundContainer},r.createElement(o.Q,(0,l.A)({code:t.replace(/\n$/,""),theme:i},n),r.createElement(v,{showCode:n.showCode})))}},51433:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var a=n(96540),l=n(36480),r=n(58040),o=n(45550),i=n(91147);const s=Object.assign({React:a,LinearGradient:i.A},l,r,o,a)},42298:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>A,default:()=>b,frontMatter:()=>u,metadata:()=>v,toc:()=>C});var a=n(58168),l=n(98587),r=(n(96540),n(15680)),o=n(41298),i=(n(11470),n(19365),n(21619)),s=n(35504),c=["components"],d={toc:[]},m="wrapper";function p(e){var t=e.components,n=(0,l.A)(e,c);return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{className:"snack-player","data-snack-name":"RNE FAB","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20FAB%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bvisible%2C%20setVisible%5D%20%3D%20React.useState(true)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20paddingVertical%3A%205%2C%0A%20%20%20%20%20%20%20%20flexGrow%3A%201%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Small%20Size%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20loading%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20size%3D%22small%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Large%20Size%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Primary%20Color%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20title%3D%22Navigate%22%0A%20%20%20%20%20%20%20%20upperCase%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'place'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EDisabled%3C%2FText%3E%0A%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20title%3D%22Extended%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20name%3A%20'place'%2C%0A%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setVisible(!visible)%7D%0A%20%20%20%20%20%20%20%20placement%3D%22right%22%0A%20%20%20%20%20%20%20%20title%3D%22Hide%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20color%3D%22red%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7B!visible%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setVisible(!visible)%7D%0A%20%20%20%20%20%20%20%20placement%3D%22left%22%0A%20%20%20%20%20%20%20%20title%3D%22Show%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'edit'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var g=n(17836),y=["components"],u={id:"fab",title:"FAB"},A=void 0,v={unversionedId:"components/fab",id:"version-4.0.0-rc.8/components/fab",title:"FAB",description:"A floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all screen content, typically as a circular shape with an icon in its center.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/FAB.mdx",sourceDirName:"components",slug:"/components/fab",permalink:"/docs/components/fab",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/FAB.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"fab",title:"FAB"}},f={},C=[{value:"Usage",id:"usage",level:2},{value:"Variants",id:"variants",level:3},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],B={toc:C},D="wrapper";function b(e){var t=e.components,n=(0,l.A)(e,y);return(0,r.yg)(D,(0,a.A)({},B,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.y,{mdxType:"IconsStyle"}),(0,r.yg)("p",null,"A floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all screen content, typically as a circular shape with an icon in its center."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("div",{class:"row inline-flex-center"},(0,r.yg)("div",{class:"col col--3"},(0,r.yg)("h4",null,"Import")),(0,r.yg)("div",{class:"col col--9"},(0,r.yg)(i.A,{mdxType:"CodeBlock"},"import { FAB } from '@rneui/themed';")),(0,r.yg)("div",{class:"col col--3"},(0,r.yg)("h4",null,"Theme Key"," ",(0,r.yg)("a",{href:"../customizing#using-themeprovider"},(0,r.yg)(s.wfp,{mdxType:"BiInfoCircle"})))),(0,r.yg)("div",{class:"col col--9"},(0,r.yg)(i.A,{mdxType:"CodeBlock"},"FAB"))),(0,r.yg)("h3",{id:"variants"},"Variants"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Stack row align="center" spacing={4}>\n  <FAB\n    size="small"\n    icon={{\n      name: "place",\n      color: "white",\n    }}\n  />\n  <FAB size="small" title="Solid" />\n  <FAB\n    size="small"\n    title="Extended"\n    icon={{\n      name: "place",\n      color: "white",\n    }}\n  />\n</Stack>\n')),(0,r.yg)(p,{mdxType:"Usage"}),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Includes all ",(0,r.yg)("a",{parentName:"p",href:"button#props"},"Button")," props.")),(0,r.yg)("div",{class:"table-responsive"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"color")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Change the color of the FAB.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"placement")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"left")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"right")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"FAB placement at bottom, (optional) use ",(0,r.yg)("a",{parentName:"td",href:"#style"},(0,r.yg)("inlineCode",{parentName:"a"},"style"))," in case of custom placement.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"size")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"small")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"large")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"large")),(0,r.yg)("td",{parentName:"tr",align:null},"Change Size of FAB.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"style")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Style for FAB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"upperCase")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Transform Extended Label text to uppercase.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"visible")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"Decide the visibility of the FAB."))))),(0,r.yg)("h2",{id:"playground"},"Playground"),(0,r.yg)(g.A,{mdxType:"Play"}))}b.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);