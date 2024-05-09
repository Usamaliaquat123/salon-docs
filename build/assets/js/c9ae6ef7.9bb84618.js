(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[52043],{49162:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var n=a(96540),r=a(58040),o=a(64775),i=a(10171),s=a(11451);const c=function(){var e=(0,i.A)({componentName:"Switch",props:{color:{value:r.defaultTheme.colors.primary,type:s.B.String,description:"Color"},value:{value:!1,type:s.B.Boolean,description:"Value",stateful:!0},onValueChange:{value:"() => setValue(!value)",propHook:{what:"!value",into:"value"},type:s.B.Function,description:"Function called when switch state is changed."}},scope:{Switch:r.Switch},imports:{"@rneui/base":{named:["Switch"]}}});return n.createElement(n.Fragment,null,n.createElement(o.A,{params:e}))}},64775:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var n=a(58168),r=a(96540),o=a(78478),i=a(32594),s=a(20018),c=a(96109),l=a(11245),p=a(34397),d=a(50546),m=a(25407);const u=function(e){var t=e.params,a=e.containerStyle,u=void 0===a?{}:a;return r.createElement(o.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(d.q9.Provider,null,r.createElement(d.Oy,{initialMetrics:m.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},r.createElement(i.A,(0,n.A)({},t.compilerProps,{minHeight:62,placeholder:s.A}))),r.createElement(c.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(l.A,t.knobProps),r.createElement(c.A,t.errorProps),r.createElement(p.w,t.actions)))}))}},38829:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>A,frontMatter:()=>m,metadata:()=>h,toc:()=>y});var n=a(58168),r=a(98587),o=(a(96540),a(15680)),i=(a(11470),a(19365),["components"]),s={toc:[]},c="wrapper";function l(e){var t=e.components,a=(0,r.A)(e,i);return(0,o.yg)(c,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("div",{className:"snack-player","data-snack-name":"RNE Switch","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Switch%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20SwitchComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SwitchComponent%3A%20React.FunctionComponent%3CSwitchComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bchecked%2C%20setChecked%5D%20%3D%20useState(false)%3B%0A%0Aconst%20toggleSwitch%20%3D%20()%20%3D%3E%20%7B%0A%20%20setChecked(!checked)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%3CSwitch%0A%20%20%20%20%20%20value%3D%7Bchecked%7D%0A%20%20%20%20%20%20onValueChange%3D%7B(value)%20%3D%3E%20setChecked(value)%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20SwitchComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}l.isMDXComponent=!0;var p=a(49162),d=["components"],m={id:"switch",title:"Switch"},u=void 0,h={unversionedId:"components/switch",id:"version-4.0.0-rc.3/components/switch",title:"Switch",description:"Switch represents user's decision of a process and indicates whether a state is on/off.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/Switch.mdx",sourceDirName:"components",slug:"/components/switch",permalink:"/docs/4.0.0-rc.3/components/switch",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/Switch.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"switch",title:"Switch"},sidebar:"docs",previous:{title:"SpeedDial.Action",permalink:"/docs/4.0.0-rc.3/components/speeddial_action"},next:{title:"Tab",permalink:"/docs/4.0.0-rc.3/components/tab"}},g={},y=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],v={toc:y},w="wrapper";function A(e){var t=e.components,a=(0,r.A)(e,d);return(0,o.yg)(w,(0,n.A)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Switch represents user's decision of a process and indicates whether a state is on/off.\nSwitch is a controlled component that requires an ",(0,o.yg)("inlineCode",{parentName:"p"},"onValueChange")," to update the ",(0,o.yg)("inlineCode",{parentName:"p"},"value")," prop.\nThis renders a ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")," value. React native elements provide you with additional ",(0,o.yg)("inlineCode",{parentName:"p"},"theme")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"color")," support in the Switch Button.\nThis component inherits ",(0,o.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/switch.html"},"all native Switch props that come with a standard React Native Switch element"),"."),(0,o.yg)("h2",{id:"import"},"Import"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Switch } from "@rneui/themed";\n')),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(l,{mdxType:"Usage"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Includes all ",(0,o.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"color")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"primary")),(0,o.yg)("td",{parentName:"tr",align:null},"The color of the Switch component."))))),(0,o.yg)("h2",{id:"playground"},"Playground"),(0,o.yg)(p.A,{mdxType:"Play"}))}A.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);