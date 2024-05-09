(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[22354],{14340:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var a=n(96540),o=n(58040),r=n(64775),l=n(10171),i=n(11451);const c=function(){var e=(0,l.A)({componentName:"CheckBox",props:{center:{type:i.B.Boolean,value:!1,description:"Aligns checkbox to center (optional)"},right:{type:i.B.Boolean,value:!1,description:"Aligns checkbox to right (optional)"},checked:{type:i.B.Boolean,value:!1,stateful:!0,description:"Flag for checking the icon (required)"},checkedColor:{type:i.B.String,value:"#0F0",description:"Default checked color (optional)"},checkedIcon:{type:i.B.Object,value:"",description:"string OR React Native Component\t"},checkedTitle:{type:i.B.String,value:"Great!",description:"Specify a custom checked message (optional)"},Component:{type:i.B.ReactNode,value:null,description:"React Native Component"},containerStyle:{type:i.B.Object,value:'{width: "75%"}',description:"Style of main container (optional)"},fontFamily:{type:i.B.String,value:null,description:"Specify different font family"},iconRight:{type:i.B.Boolean,value:!1,description:"Moves icon to right of text (optional)"},iconType:{type:i.B.String,value:null,description:"type of icon set"},onIconPress:{type:i.B.Function,value:"() => setChecked(!checked)",propHook:{what:"!checked",into:"checked"},description:"onPress function for checkbox (required)"},onLongIconPress:{type:i.B.Function,value:'() => console.log("onLongIconPress()")',description:"onLongPress function for checkbox (optional)"},onLongPress:{type:i.B.Function,value:'() => console.log("onLongPress()")',description:"onLongPress function for checkbox (optional)"},onPress:{type:i.B.Function,value:'() => console.log("onPress()")',description:"onPress function for container (optional)"},size:{type:i.B.Number,value:30,description:"Size of the checkbox"},textStyle:{type:i.B.Object,value:"{}",description:"Style of text (optional)"},title:{type:i.B.Object,value:'"Check for Awesomeness"',description:"Title of checkbox"},titleProps:{type:i.B.Object,value:"{}",description:"Additional props for the title Text component (optional)"},uncheckedColor:{type:i.B.String,value:"#F00",description:"Default unchecked color (optional)"},uncheckedIcon:{type:i.B.Object,value:null,description:"string OR React Native Component"}},scope:{CheckBox:o.CheckBox},imports:{"@rneui/base":{named:["CheckBox"]}}});return a.createElement(a.Fragment,null,a.createElement(r.A,{params:e}))}},41298:(e,t,n)=>{"use strict";n.d(t,{y:()=>c});var a=n(96540),o=n(5260),r=n(14628),l=n(1547),i=n(83564),c=function(){return a.createElement(o.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.A+") format('truetype');\n          }\n        "))}},64775:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var a=n(58168),o=n(96540),r=n(78478),l=n(32594),i=n(20018),c=n(96109),s=n(11245),p=n(34397),d=n(50546),g=n(25407);const m=function(e){var t=e.params,n=e.containerStyle,m=void 0===n?{}:n;return o.createElement(r.A,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement(d.q9.Provider,null,o.createElement(d.Oy,{initialMetrics:g.Y},o.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},m)},o.createElement(l.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:i.A}))),o.createElement(c.A,{msg:t.errorProps.msg,isPopup:!0}),o.createElement(s.A,t.knobProps),o.createElement(c.A,t.errorProps),o.createElement(p.w,t.actions)))}))}},88133:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>A,frontMatter:()=>m,metadata:()=>u,toc:()=>k});var a=n(58168),o=n(98587),r=(n(96540),n(15680)),l=n(41298),i=(n(11470),n(19365),["components"]),c={toc:[]},s="wrapper";function p(e){var t=e.components,n=(0,o.A)(e,i);return(0,r.yg)(s,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{className:"snack-player","data-snack-name":"RNE CheckBox","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20CheckBox%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20CheckboxComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20CheckboxComponent%3A%20React.FunctionComponent%3CCheckboxComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bcheck1%2C%20setCheck1%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck2%2C%20setCheck2%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck3%2C%20setCheck3%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck4%2C%20setCheck4%5D%20%3D%20useState(false)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%22Click%20Here%22%0A%20%20%20%20%20%20checked%3D%7Bcheck1%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck1(!check1)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%22Click%20Here%22%0A%20%20%20%20%20%20checkedIcon%3D%22dot-circle-o%22%0A%20%20%20%20%20%20uncheckedIcon%3D%22circle-o%22%0A%20%20%20%20%20%20checked%3D%7Bcheck2%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck2(!check2)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%7B%60Click%20Here%20to%20%24%7Bcheck3%20%3F%20'Remove'%20%3A%20'Add'%7D%20This%20Item%60%7D%0A%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20iconType%3D%22material%22%0A%20%20%20%20%20%20checkedIcon%3D%22clear%22%0A%20%20%20%20%20%20uncheckedIcon%3D%22add%22%0A%20%20%20%20%20%20checkedColor%3D%22red%22%0A%20%20%20%20%20%20checked%3D%7Bcheck3%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck3(!check3)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20checkedIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D%22radio-button-checked%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22material%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20uncheckedIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D%22radio-button-unchecked%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22material%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22grey%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20checked%3D%7Bcheck4%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck4(!check4)%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20CheckboxComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var d=n(14340),g=["components"],m={id:"checkbox",title:"CheckBox"},y=void 0,u={unversionedId:"components/checkbox",id:"version-4.0.0-rc.4/components/checkbox",title:"CheckBox",description:"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.",source:"@site/versioned_docs/version-4.0.0-rc.4/components/CheckBox.mdx",sourceDirName:"components",slug:"/components/checkbox",permalink:"/docs/4.0.0-rc.4/components/checkbox",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.4/components/CheckBox.mdx",tags:[],version:"4.0.0-rc.4",frontMatter:{id:"checkbox",title:"CheckBox"},sidebar:"docs",previous:{title:"Card.Title",permalink:"/docs/4.0.0-rc.4/components/card_title"},next:{title:"Chip",permalink:"/docs/4.0.0-rc.4/components/chip"}},h={},k=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],N={toc:k},f="wrapper";function A(e){var t=e.components,n=(0,o.A)(e,g);return(0,r.yg)(f,(0,a.A)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(l.y,{mdxType:"IconsStyle"}),(0,r.yg)("p",null,"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.\nIt provides a clear visual of either a true or false choice."),(0,r.yg)("h2",{id:"import"},"Import"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { CheckBox } from "@rneui/themed";\n')),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(p,{mdxType:"Usage"}),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Includes all ",(0,r.yg)("a",{parentName:"p",href:"checkboxicon#props"},"CheckBoxIcon"),", ",(0,r.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,r.yg)("div",{class:"table-responsive"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Component")),(0,r.yg)("td",{parentName:"tr",align:null},"React Component"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify React Native component for main button.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"center")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Aligns checkbox to center.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"checkedTitle")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify a custom checked message.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Style of main container.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabled")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Disables user interaction.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabledStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Style of the checkbox container when disabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabledTitleStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Style of the title when disabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fontFamily")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify different font family.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"iconRight")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Moves icon to right of text.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"right")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Aligns checkbox to right.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"textStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Style of text.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"title")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"ReactElement<{}, string")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Title of checkbox.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"titleProps")),(0,r.yg)("td",{parentName:"tr",align:null},"TextProps"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:null},"Additional props for the title Text component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Style for the wrapper of checkbox."))))),(0,r.yg)("h2",{id:"playground"},"Playground"),(0,r.yg)(d.A,{mdxType:"Play"}))}A.isMDXComponent=!0},83564:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14628:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},1547:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},52352:()=>{},18411:()=>{}}]);