(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[30372],{45102:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(67294),l=n(13925),r=n(54236),o=n(40318),i=n(62290);const d=function(){var e=(0,o.Z)({componentName:"SpeedDial",props:{children:{value:"\n        <SpeedDial.Action\n          icon={{ name: 'add', color: '#fff' }}\n          title=\"Add\"\n          onPress={() => console.log('Add Something')}\n        />\n        <SpeedDial.Action\n          icon={{ name: 'delete', color: '#fff' }}\n          title=\"Delete\"\n          onPress={() => console.log('Delete Something')}\n        />"},isOpen:{type:i.n.Boolean,value:!0},openIcon:{type:i.n.Object,value:"{ name: 'close', color: '#fff' }"},onOpen:{type:i.n.Function,value:'() => console.log("onOpen()")'},onClose:{type:i.n.Function,value:'() => console.log("onClose()")'},transitionDuration:{type:i.n.Number,value:150},icon:{type:i.n.Object,value:"{ name: 'edit', color: '#fff' }"}},scope:{SpeedDial:l.SpeedDial},imports:{"@rneui/base":{named:["SpeedDial"]}}});return a.createElement(a.Fragment,null,a.createElement(r.Z,{params:e,containerStyle:{height:"200px"}}))}},37047:(e,t,n)=>{"use strict";n.d(t,{w:()=>d});var a=n(67294),l=n(35742),r=n(14330),o=n(98576),i=n(61720),d=function(){return a.createElement(l.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.Z+") format('truetype');\n          }\n        "))}},54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(87462),l=n(67294),r=n(91262),o=n(18421),i=n(77356),d=n(41652),s=n(24309),p=n(16042),c=n(20346),m=n(30650);const u=function(e){var t=e.params,n=e.containerStyle,u=void 0===n?{}:n;return l.createElement(r.Z,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(c.X9.Provider,null,l.createElement(c.PK,{initialMetrics:m.o},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},l.createElement(o.Z,(0,a.Z)({},t.compilerProps,{minHeight:62,placeholder:i.Z}))),l.createElement(d.Z,{msg:t.errorProps.msg,isPopup:!0}),l.createElement(s.Z,t.knobProps),l.createElement(d.Z,t.errorProps),l.createElement(p.E,t.actions)))}))}},22365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var a=n(63366),l=n(87462),r=n(67294),o=n(10407),i=n(86010),d=(n(95999),n(52263)),s=n(91262),p=n(66412);const c="playgroundContainer_TGbA",m="playgroundEditor_PvJ1",u="playgroundPreview_bb8I",k="toggleContainer_ZZiH",g="toggleIcon_OnrQ",f="showCode_O0Od";var N=n(72389),h=n(5434),D=["children","transformCode"];function v(){return r.createElement("div",null,"Loading...")}function b(e){var t=(0,N.Z)(),n=(0,r.useContext)(o.L2),a=n.code,i=n.language,d=n.theme,s=n.disabled,p=n.onChange;return r.createElement(o.uz,(0,l.Z)({key:String(t),code:a,language:i,theme:d,disabled:s,onChange:p},e,{className:m}))}function y(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,l=(e.wrapper,r.useState(t)),d=l[0],p=l[1],c=function(){p((function(e){return!e}))};return r.createElement(r.Fragment,null,r.createElement("div",{className:u},r.createElement(s.Z,{fallback:r.createElement(v,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(o.i5,null),r.createElement(o.IF,null),r.createElement("div",{className:k},r.createElement("div",{className:(0,i.Z)(g),onClick:c},r.createElement(h.xoN,null),r.createElement("span",{className:f},d?"Hide":"Show"," Code"))))}))),d&&r.createElement(b,{preImports:a,showCode:d}))}function C(e){var t=e.children,n=(e.transformCode,(0,a.Z)(e,D)),i=((0,d.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,p.p)());return r.createElement("div",{className:c},r.createElement(o.nu,(0,l.Z)({code:t.replace(/\n$/,""),theme:i},n),r.createElement(y,{showCode:n.showCode})))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(67294),l=n(32408),r=n(13925),o=n(53211),i=n(83279);const d=Object.assign({React:a,LinearGradient:i.Z},l,r,o,a)},56073:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>g,default:()=>v,frontMatter:()=>k,metadata:()=>f,toc:()=>h});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=n(37047),i=(n(74866),n(85162),n(96711)),d=n(47516),s=["components"],p={toc:[]};function c(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE SpeedDial","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20SpeedDial%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bopen%2C%20setOpen%5D%20%3D%20React.useState(false)%3B%0Areturn%20(%0A%20%20%3CSpeedDial%0A%20%20%20%20isOpen%3D%7Bopen%7D%0A%20%20%20%20icon%3D%7B%7B%20name%3A%20'edit'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20openIcon%3D%7B%7B%20name%3A%20'close'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20onOpen%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%20%20onClose%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%3E%0A%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20title%3D%22Add%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Add%20Something')%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20title%3D%22Delete%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Delete%20Something')%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FSpeedDial%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0;var m=n(45102),u=["components"],k={id:"speeddial",title:"SpeedDial"},g=void 0,f={unversionedId:"components/speeddial",id:"version-4.0.0-rc.8/components/speeddial",title:"SpeedDial",description:"When pressed, a floating action button can display three to six related actions in the form of a speed dial.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/SpeedDial.mdx",sourceDirName:"components",slug:"/components/speeddial",permalink:"/docs/components/speeddial",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/SpeedDial.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"speeddial",title:"SpeedDial"}},N={},h=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],D={toc:h};function v(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.w,{mdxType:"IconsStyle"}),(0,r.kt)("p",null,"When pressed, a floating action button can display three to six related actions in the form of a speed dial.\nIf more than six actions are needed, something other than a FAB should be used to present them.\nUpon press, the FAB remains visible and emits a stack of related actions.\nIf the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("div",{class:"row inline-flex-center"},(0,r.kt)("div",{class:"col col--3"},(0,r.kt)("h4",null,"Import")),(0,r.kt)("div",{class:"col col--9"},(0,r.kt)(i.Z,{mdxType:"CodeBlock"},"import { SpeedDial } from '@rneui/themed';")),(0,r.kt)("div",{class:"col col--3"},(0,r.kt)("h4",null,"Theme Key"," ",(0,r.kt)("a",{href:"../customizing#using-themeprovider"},(0,r.kt)(d.Fs0,{mdxType:"BiInfoCircle"})))),(0,r.kt)("div",{class:"col col--9"},(0,r.kt)(i.Z,{mdxType:"CodeBlock"},"SpeedDial"))),(0,r.kt)(c,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Includes all ",(0,r.kt)("a",{parentName:"p",href:"button#props"},"Button"),", ",(0,r.kt)("a",{parentName:"p",href:"fab#props"},"FAB")," props.")),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backdropPressableProps")),(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Props for Backdrop Pressable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"children")),(0,r.kt)("td",{parentName:"tr",align:null},"SpeedDial.Action"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SpeedDial Action as children.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isOpen")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Opens the action stack.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labelPressable")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"onPress on Label Press for all Actions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onClose")),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"Callback fired when the component requests to be closed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onOpen")),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"Callback fired when the component requests to be open.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openIcon")),(0,r.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Icon shown on FAB when action stack is open.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"overlayColor")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Add overlay color to the speed dial.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transitionDuration")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"150")),(0,r.kt)("td",{parentName:"tr",align:null},"The duration for the transition, in milliseconds."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(m.Z,{mdxType:"Play"}))}v.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);