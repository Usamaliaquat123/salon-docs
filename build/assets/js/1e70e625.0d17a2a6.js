(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[57066],{49162:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var a=n(96540),o=n(58040),r=n(64775),i=n(10171),l=n(11451);const c=function(){var e=(0,i.A)({componentName:"Switch",props:{color:{value:o.defaultTheme.colors.primary,type:l.B.String,description:"Color"},value:{value:!1,type:l.B.Boolean,description:"Value",stateful:!0},onValueChange:{value:"() => setValue(!value)",propHook:{what:"!value",into:"value"},type:l.B.Function,description:"Function called when switch state is changed."}},scope:{Switch:o.Switch},imports:{"@rneui/base":{named:["Switch"]}}});return a.createElement(a.Fragment,null,a.createElement(r.A,{params:e}))}},41298:(e,t,n)=>{"use strict";n.d(t,{y:()=>c});var a=n(96540),o=n(5260),r=n(14628),i=n(1547),l=n(83564),c=function(){return a.createElement(o.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.A+") format('truetype');\n          }\n        "))}},64775:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var a=n(58168),o=n(96540),r=n(78478),i=n(32594),l=n(20018),c=n(96109),s=n(11245),p=n(34397),d=n(50546),m=n(25407);const u=function(e){var t=e.params,n=e.containerStyle,u=void 0===n?{}:n;return o.createElement(r.A,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement(d.q9.Provider,null,o.createElement(d.Oy,{initialMetrics:m.Y},o.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},o.createElement(i.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:l.A}))),o.createElement(c.A,{msg:t.errorProps.msg,isPopup:!0}),o.createElement(s.A,t.knobProps),o.createElement(c.A,t.errorProps),o.createElement(p.w,t.actions)))}))}},4588:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var a=n(98587),o=n(58168),r=n(96540),i=n(95404),l=n(20053),c=(n(21312),n(44586)),s=n(78478),p=n(26058);const d={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var m=n(92303),u=n(59644),g=["children","transformCode"];function h(){return r.createElement("div",null,"Loading...")}function y(e){var t=(0,m.A)(),n=(0,r.useContext)(i.MY),a=n.code,l=n.language,c=n.theme,s=n.disabled,p=n.onChange;return r.createElement(i.w,(0,o.A)({key:String(t),code:a,language:l,theme:c,disabled:s,onChange:p},e,{className:d.playgroundEditor}))}function v(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,o=(e.wrapper,r.useState(t)),c=o[0],p=o[1],m=function(){p((function(e){return!e}))};return r.createElement(r.Fragment,null,r.createElement("div",{className:d.playgroundPreview},r.createElement(s.A,{fallback:r.createElement(h,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(i.pA,null),r.createElement(i.p1,null),r.createElement("div",{className:d.toggleContainer},r.createElement("div",{className:(0,l.A)(d.toggleIcon),onClick:m},r.createElement(u.luQ,null),r.createElement("span",{className:d.showCode},c?"Hide":"Show"," Code"))))}))),c&&r.createElement(y,{preImports:a,showCode:c}))}function w(e){var t=e.children,n=(e.transformCode,(0,a.A)(e,g)),l=((0,c.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,p.A)());return r.createElement("div",{className:d.playgroundContainer},r.createElement(i.Q,(0,o.A)({code:t.replace(/\n$/,""),theme:l},n),r.createElement(v,{showCode:n.showCode})))}},51433:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var a=n(96540),o=n(36480),r=n(58040),i=n(45550),l=n(91147);const c=Object.assign({React:a,LinearGradient:l.A},o,r,i,a)},523:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>y,default:()=>E,frontMatter:()=>h,metadata:()=>v,toc:()=>A});var a=n(58168),o=n(98587),r=(n(96540),n(15680)),i=n(41298),l=(n(11470),n(19365),n(21619)),c=n(35504),s=["components"],p={toc:[]},d="wrapper";function m(e){var t=e.components,n=(0,o.A)(e,s);return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{className:"snack-player","data-snack-name":"RNE Switch","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Switch%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20SwitchComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SwitchComponent%3A%20React.FunctionComponent%3CSwitchComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bchecked%2C%20setChecked%5D%20%3D%20useState(false)%3B%0A%0Aconst%20toggleSwitch%20%3D%20()%20%3D%3E%20%7B%0A%20%20setChecked(!checked)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%3CSwitch%0A%20%20%20%20%20%20value%3D%7Bchecked%7D%0A%20%20%20%20%20%20onValueChange%3D%7B(value)%20%3D%3E%20setChecked(value)%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20SwitchComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0;var u=n(49162),g=["components"],h={id:"switch",title:"Switch"},y=void 0,v={unversionedId:"components/switch",id:"components/switch",title:"Switch",description:"Switch represents user's decision of a process and indicates whether a state is on/off.",source:"@site/docs/components/Switch.mdx",sourceDirName:"components",slug:"/components/switch",permalink:"/docs/next/components/switch",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Switch.mdx",tags:[],version:"current",frontMatter:{id:"switch",title:"Switch"},sidebar:"docs",previous:{title:"SpeedDial.Action",permalink:"/docs/next/components/speeddial_action"},next:{title:"Tab",permalink:"/docs/next/components/tab"}},w={},A=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],f={toc:A},C="wrapper";function E(e){var t=e.components,n=(0,o.A)(e,g);return(0,r.yg)(C,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(i.y,{mdxType:"IconsStyle"}),(0,r.yg)("p",null,"Switch represents user's decision of a process and indicates whether a state is on/off.\nSwitch is a controlled component that requires an ",(0,r.yg)("inlineCode",{parentName:"p"},"onValueChange")," to update the ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," prop.\nThis renders a ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")," value. React native elements provide you with additional ",(0,r.yg)("inlineCode",{parentName:"p"},"theme")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"color")," support in the Switch Button."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("div",{class:"row inline-flex-center"},(0,r.yg)("div",{class:"col col--3"},(0,r.yg)("h4",null,"Import")),(0,r.yg)("div",{class:"col col--9"},(0,r.yg)(l.A,{mdxType:"CodeBlock"},"import { Switch } from '@rneui/themed';")),(0,r.yg)("div",{class:"col col--3"},(0,r.yg)("h4",null,"Theme Key"," ",(0,r.yg)("a",{href:"../customizing#using-themeprovider"},(0,r.yg)(c.wfp,{mdxType:"BiInfoCircle"})))),(0,r.yg)("div",{class:"col col--9"},(0,r.yg)(l.A,{mdxType:"CodeBlock"},"Switch"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function RNESwitch() {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <Stack row align="center">\n      <Switch value={open} onValueChange={setOpen} />\n    </Stack>\n  );\n}\n')),(0,r.yg)(m,{mdxType:"Usage"}),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Includes all ",(0,r.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/switch.html#props"},"React Native Switch"),", ",(0,r.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,r.yg)("div",{class:"table-responsive"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"color")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"primary")),(0,r.yg)("td",{parentName:"tr",align:null},"The color of the Switch component."))))),(0,r.yg)("h2",{id:"playground"},"Playground"),(0,r.yg)(u.A,{mdxType:"Play"}))}E.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);