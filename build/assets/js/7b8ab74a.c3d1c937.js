(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[92781],{28640:(e,n,t)=>{"use strict";t.d(n,{A:()=>d});var a=t(96540),l=t(58040),r=t(64775),o=t(10171),i=t(11451);const d=function(){var e=(0,o.A)({componentName:"SpeedDial",props:{children:{value:"\n        <SpeedDial.Action\n          icon={{ name: 'add', color: '#fff' }}\n          title=\"Add\"\n          onPress={() => console.log('Add Something')}\n        />\n        <SpeedDial.Action\n          icon={{ name: 'delete', color: '#fff' }}\n          title=\"Delete\"\n          onPress={() => console.log('Delete Something')}\n        />"},isOpen:{type:i.B.Boolean,value:!0},openIcon:{type:i.B.Object,value:"{ name: 'close', color: '#fff' }"},onOpen:{type:i.B.Function,value:'() => console.log("onOpen()")'},onClose:{type:i.B.Function,value:'() => console.log("onClose()")'},transitionDuration:{type:i.B.Number,value:150},icon:{type:i.B.Object,value:"{ name: 'edit', color: '#fff' }"}},scope:{SpeedDial:l.SpeedDial},imports:{"@rneui/base":{named:["SpeedDial"]}}});return a.createElement(a.Fragment,null,a.createElement(r.A,{params:e,containerStyle:{height:"200px"}}))}},41298:(e,n,t)=>{"use strict";t.d(n,{y:()=>d});var a=t(96540),l=t(5260),r=t(14628),o=t(1547),i=t(83564),d=function(){return a.createElement(l.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.A+") format('truetype');\n          }\n        "))}},64775:(e,n,t)=>{"use strict";t.d(n,{A:()=>g});var a=t(58168),l=t(96540),r=t(78478),o=t(32594),i=t(20018),d=t(96109),s=t(11245),p=t(34397),c=t(50546),m=t(25407);const g=function(e){var n=e.params,t=e.containerStyle,g=void 0===t?{}:t;return l.createElement(r.A,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(c.q9.Provider,null,l.createElement(c.Oy,{initialMetrics:m.Y},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},g)},l.createElement(o.A,(0,a.A)({},n.compilerProps,{minHeight:62,placeholder:i.A}))),l.createElement(d.A,{msg:n.errorProps.msg,isPopup:!0}),l.createElement(s.A,n.knobProps),l.createElement(d.A,n.errorProps),l.createElement(p.w,n.actions)))}))}},4588:(e,n,t)=>{"use strict";t.d(n,{A:()=>h});var a=t(98587),l=t(58168),r=t(96540),o=t(95404),i=t(20053),d=(t(21312),t(44586)),s=t(78478),p=t(26058);const c={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var m=t(92303),g=t(59644),u=["children","transformCode"];function y(){return r.createElement("div",null,"Loading...")}function f(e){var n=(0,m.A)(),t=(0,r.useContext)(o.MY),a=t.code,i=t.language,d=t.theme,s=t.disabled,p=t.onChange;return r.createElement(o.w,(0,l.A)({key:String(n),code:a,language:i,theme:d,disabled:s,onChange:p},e,{className:c.playgroundEditor}))}function A(e){var n=e.showCode,t=e.preImports,a=void 0===t?"":t,l=(e.wrapper,r.useState(n)),d=l[0],p=l[1],m=function(){p((function(e){return!e}))};return r.createElement(r.Fragment,null,r.createElement("div",{className:c.playgroundPreview},r.createElement(s.A,{fallback:r.createElement(y,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(o.pA,null),r.createElement(o.p1,null),r.createElement("div",{className:c.toggleContainer},r.createElement("div",{className:(0,i.A)(c.toggleIcon),onClick:m},r.createElement(g.luQ,null),r.createElement("span",{className:c.showCode},d?"Hide":"Show"," Code"))))}))),d&&r.createElement(f,{preImports:a,showCode:d}))}function h(e){var n=e.children,t=(e.transformCode,(0,a.A)(e,u)),i=((0,d.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,p.A)());return r.createElement("div",{className:c.playgroundContainer},r.createElement(o.Q,(0,l.A)({code:n.replace(/\n$/,""),theme:i},t),r.createElement(A,{showCode:t.showCode})))}},51433:(e,n,t)=>{"use strict";t.d(n,{A:()=>d});var a=t(96540),l=t(36480),r=t(58040),o=t(45550),i=t(91147);const d=Object.assign({React:a,LinearGradient:i.A},l,r,o,a)},35640:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>f,default:()=>b,frontMatter:()=>y,metadata:()=>A,toc:()=>N});var a=t(58168),l=t(98587),r=(t(96540),t(15680)),o=t(41298),i=(t(11470),t(19365),t(21619)),d=t(35504),s=["components"],p={toc:[]},c="wrapper";function m(e){var n=e.components,t=(0,l.A)(e,s);return(0,r.yg)(c,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("div",{className:"snack-player","data-snack-name":"RNE SpeedDial","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20SpeedDial%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bopen%2C%20setOpen%5D%20%3D%20React.useState(false)%3B%0Areturn%20(%0A%20%20%3CSpeedDial%0A%20%20%20%20isOpen%3D%7Bopen%7D%0A%20%20%20%20icon%3D%7B%7B%20name%3A%20'edit'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20openIcon%3D%7B%7B%20name%3A%20'close'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20onOpen%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%20%20onClose%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%3E%0A%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20title%3D%22Add%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Add%20Something')%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20title%3D%22Delete%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Delete%20Something')%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FSpeedDial%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0;var g=t(28640),u=["components"],y={id:"speeddial",title:"SpeedDial"},f=void 0,A={unversionedId:"components/speeddial",id:"version-4.0.0-rc.7/components/speeddial",title:"SpeedDial",description:"When pressed, a floating action button can display three to six related actions in the form of a speed dial.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/SpeedDial.mdx",sourceDirName:"components",slug:"/components/speeddial",permalink:"/docs/4.0.0-rc.7/components/speeddial",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/SpeedDial.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"speeddial",title:"SpeedDial"},sidebar:"docs",previous:{title:"SocialIcon",permalink:"/docs/4.0.0-rc.7/components/socialicon"},next:{title:"SpeedDial.Action",permalink:"/docs/4.0.0-rc.7/components/speeddial_action"}},h={},N=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],v={toc:N},D="wrapper";function b(e){var n=e.components,t=(0,l.A)(e,u);return(0,r.yg)(D,(0,a.A)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)(o.y,{mdxType:"IconsStyle"}),(0,r.yg)("p",null,"When pressed, a floating action button can display three to six related actions in the form of a speed dial.\nIf more than six actions are needed, something other than a FAB should be used to present them.\nUpon press, the FAB remains visible and emits a stack of related actions.\nIf the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("div",{class:"row inline-flex-center"},(0,r.yg)("div",{class:"col col--3"},(0,r.yg)("h4",null,"Import")),(0,r.yg)("div",{class:"col col--9"},(0,r.yg)(i.A,{mdxType:"CodeBlock"},"import { SpeedDial } from '@rneui/themed';")),(0,r.yg)("div",{class:"col col--3"},(0,r.yg)("h4",null,"Theme Key"," ",(0,r.yg)("a",{href:"../customizing#using-themeprovider"},(0,r.yg)(d.wfp,{mdxType:"BiInfoCircle"})))),(0,r.yg)("div",{class:"col col--9"},(0,r.yg)(i.A,{mdxType:"CodeBlock"},"SpeedDial"))),(0,r.yg)(m,{mdxType:"Usage"}),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Includes all ",(0,r.yg)("a",{parentName:"p",href:"button#props"},"Button"),", ",(0,r.yg)("a",{parentName:"p",href:"fab#props"},"FAB")," props.")),(0,r.yg)("div",{class:"table-responsive"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"backdropPressableProps")),(0,r.yg)("td",{parentName:"tr",align:null},"PressableProps"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Props for Backdrop Pressable")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"children")),(0,r.yg)("td",{parentName:"tr",align:null},"SpeedDial.Action"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"SpeedDial Action as children.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"isOpen")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Opens the action stack.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"labelPressable")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"onPress on Label Press for all Actions")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onClose")),(0,r.yg)("td",{parentName:"tr",align:null},"Function"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Function")),(0,r.yg)("td",{parentName:"tr",align:null},"Callback fired when the component requests to be closed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onOpen")),(0,r.yg)("td",{parentName:"tr",align:null},"Function"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Function")),(0,r.yg)("td",{parentName:"tr",align:null},"Callback fired when the component requests to be open.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"openIcon")),(0,r.yg)("td",{parentName:"tr",align:null},"IconNode"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Icon shown on FAB when action stack is open.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"overlayColor")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Add overlay color to the speed dial.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"transitionDuration")),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"150")),(0,r.yg)("td",{parentName:"tr",align:null},"The duration for the transition, in milliseconds."))))),(0,r.yg)("h2",{id:"playground"},"Playground"),(0,r.yg)(g.A,{mdxType:"Play"}))}b.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);