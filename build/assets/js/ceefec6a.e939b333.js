(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[87333],{90262:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(96540),a=n(58040),o=n(64775),i=n(10171),l=n(11451);const s=function(){var e=(0,i.A)({componentName:"LinearProgress",props:{value:{type:l.B.Number,value:0},variant:{type:l.B.Enum,options:{determinate:"determinate",indeterminate:"indeterminate"},value:"indeterminate"},style:{type:l.B.Object,value:'{width: "90%"}'},color:{type:l.B.String,value:"secondary"},trackColor:{type:l.B.String,value:""}},scope:{LinearProgress:a.LinearProgress},imports:{"@rneui/base":{named:["LinearProgress"]}}});return r.createElement(r.Fragment,null,r.createElement(o.A,{params:e}))}},41298:(e,t,n)=>{"use strict";n.d(t,{y:()=>s});var r=n(96540),a=n(5260),o=n(14628),i=n(1547),l=n(83564),s=function(){return r.createElement(a.A,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.A+") format('truetype');\n          }\n        "))}},64775:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(58168),a=n(96540),o=n(78478),i=n(32594),l=n(20018),s=n(96109),d=n(11245),g=n(34397),m=n(50546),p=n(25407);const c=function(e){var t=e.params,n=e.containerStyle,c=void 0===n?{}:n;return a.createElement(o.A,{fallback:a.createElement(a.Fragment,null,"Loading...")},(function(){return a.createElement(m.q9.Provider,null,a.createElement(m.Oy,{initialMetrics:p.Y},a.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},a.createElement(i.A,(0,r.A)({},t.compilerProps,{minHeight:62,placeholder:l.A}))),a.createElement(s.A,{msg:t.errorProps.msg,isPopup:!0}),a.createElement(d.A,t.knobProps),a.createElement(s.A,t.errorProps),a.createElement(g.w,t.actions)))}))}},4588:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var r=n(98587),a=n(58168),o=n(96540),i=n(95404),l=n(20053),s=(n(21312),n(44586)),d=n(78478),g=n(26058);const m={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var p=n(92303),c=n(59644),u=["children","transformCode"];function y(){return o.createElement("div",null,"Loading...")}function A(e){var t=(0,p.A)(),n=(0,o.useContext)(i.MY),r=n.code,l=n.language,s=n.theme,d=n.disabled,g=n.onChange;return o.createElement(i.w,(0,a.A)({key:String(t),code:r,language:l,theme:s,disabled:d,onChange:g},e,{className:m.playgroundEditor}))}function v(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,o.useState(t)),s=a[0],g=a[1],p=function(){g((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:m.playgroundPreview},o.createElement(d.A,{fallback:o.createElement(y,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(i.pA,null),o.createElement(i.p1,null),o.createElement("div",{className:m.toggleContainer},o.createElement("div",{className:(0,l.A)(m.toggleIcon),onClick:p},o.createElement(c.luQ,null),o.createElement("span",{className:m.showCode},s?"Hide":"Show"," Code"))))}))),s&&o.createElement(A,{preImports:r,showCode:s}))}function f(e){var t=e.children,n=(e.transformCode,(0,r.A)(e,u)),l=((0,s.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,g.A)());return o.createElement("div",{className:m.playgroundContainer},o.createElement(i.Q,(0,a.A)({code:t.replace(/\n$/,""),theme:l},n),o.createElement(v,{showCode:n.showCode})))}},51433:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(96540),a=n(36480),o=n(58040),i=n(45550),l=n(91147);const s=Object.assign({React:r,LinearGradient:l.A},a,o,i,r)},18433:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>A,default:()=>h,frontMatter:()=>y,metadata:()=>v,toc:()=>C});var r=n(58168),a=n(98587),o=(n(96540),n(15680)),i=n(41298),l=(n(11470),n(19365),n(21619)),s=n(35504),d=["components"],g={toc:[]},m="wrapper";function p(e){var t=e.components,n=(0,a.A)(e,d);return(0,o.yg)(m,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("div",{className:"snack-player","data-snack-name":"RNE Linear Progress","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Button%2C%20LinearProgress%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20LinearProgressAPI%3A%20React.FunctionComponent%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bprogress%2C%20setProgress%5D%20%3D%20React.useState(0)%3B%0A%0AReact.useEffect(()%20%3D%3E%20%7B%0A%20%20let%20subs%20%3D%20true%3B%0A%20%20if%20(progress%20%3C%201%20%26%26%20progress%20!%3D%3D%200)%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(subs)%20%7B%0A%20%20%20%20%20%20%20%20setProgress(progress%20%2B%200.1)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%20100)%3B%0A%20%20%7D%0A%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20subs%20%3D%20false%3B%0A%20%20%7D%3B%0A%7D%2C%20%5Bprogress%5D)%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20margin%3A%2010%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20with%20color%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20color%3D%22red%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EDeterminate%20Variant%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20value%3D%7Bprogress%7D%0A%20%20%20%20%20%20%20%20variant%3D%22determinate%22%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3E%200%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(0.00001)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%7B'Start%20Progress'%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3D%3D%3D%200%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(0)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%7B'Restart'%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20LinearProgressAPI%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var c=n(90262),u=["components"],y={id:"linearprogress",title:"LinearProgress"},A=void 0,v={unversionedId:"components/linearprogress",id:"version-4.0.0-rc.8/components/linearprogress",title:"LinearProgress",description:"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/LinearProgress.mdx",sourceDirName:"components",slug:"/components/linearprogress",permalink:"/docs/components/linearprogress",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/LinearProgress.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"linearprogress",title:"LinearProgress"}},f={},C=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],D={toc:C},N="wrapper";function h(e){var t=e.components,n=(0,a.A)(e,u);return(0,o.yg)(N,(0,r.A)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.y,{mdxType:"IconsStyle"}),(0,o.yg)("p",null,"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.\nThey communicate an app\u2019s state and indicate available actions, such as whether users can navigate away from the current screen.\nAlso receives all ",(0,o.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props"),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("div",{class:"row inline-flex-center"},(0,o.yg)("div",{class:"col col--3"},(0,o.yg)("h4",null,"Import")),(0,o.yg)("div",{class:"col col--9"},(0,o.yg)(l.A,{mdxType:"CodeBlock"},"import { LinearProgress } from '@rneui/themed';")),(0,o.yg)("div",{class:"col col--3"},(0,o.yg)("h4",null,"Theme Key"," ",(0,o.yg)("a",{href:"../customizing#using-themeprovider"},(0,o.yg)(s.wfp,{mdxType:"BiInfoCircle"})))),(0,o.yg)("div",{class:"col col--9"},(0,o.yg)(l.A,{mdxType:"CodeBlock"},"LinearProgress"))),(0,o.yg)(p,{mdxType:"Usage"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Includes all ",(0,o.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"animation")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"{ duration?: number; }")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"{ duration: 2000 }")),(0,o.yg)("td",{parentName:"tr",align:null},"Animation duration")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"color")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"secondary")),(0,o.yg)("td",{parentName:"tr",align:null},"Color for linear progress.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"style")),(0,o.yg)("td",{parentName:"tr",align:null},"View Style"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Add additional styling for linear progress component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"trackColor")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Track color for linear progress.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"value")),(0,o.yg)("td",{parentName:"tr",align:null},"number"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"The value of the progress indicator for the determinate variant. Value between 0 and 1.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"variant")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"determinate")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"indeterminate")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"value === undefined ? 'indeterminate' : 'determinate'")),(0,o.yg)("td",{parentName:"tr",align:null},"Type of button."))))),(0,o.yg)("h2",{id:"playground"},"Playground"),(0,o.yg)(c.A,{mdxType:"Play"}))}h.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);