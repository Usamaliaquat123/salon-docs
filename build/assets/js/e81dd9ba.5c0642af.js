(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[74585],{15028:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var a=n(67294),r=n(13925),l=n(35643),o=n(54236),i=n(40318),p=n(62290);const d=function(){var t=(0,i.Z)({componentName:"Input",props:{containerStyle:{type:p.n.Object,value:"{}"},disabled:{type:p.n.Boolean,value:!1},disabledInputStyle:{type:p.n.Object,value:'{background:"#ddd"}'},inputContainerStyle:{type:p.n.Object,value:"{}"},errorMessage:{type:p.n.String,value:"Oops! that's not correct."},errorStyle:{type:p.n.Object,value:"{}"},errorProps:{type:p.n.Object,description:"props to be passed to the React Native Text component used to display the error message (optional)",value:"{}"},inputStyle:{type:p.n.Object,value:"{}"},label:{type:p.n.ReactNode,value:'"User Form"',description:"string OR React element or component\t"},labelStyle:{type:p.n.Object,value:"{}"},labelProps:{type:p.n.Object,value:"{}",description:"{...Text props} OR passed component props\t"},leftIcon:{type:p.n.ReactNode,value:'<Icon name="account-outline" size={20}/>'},leftIconContainerStyle:{type:p.n.Object,value:"{}"},rightIcon:{type:p.n.ReactNode,value:'<Icon name="close" size={20}/>'},rightIconContainerStyle:{type:p.n.Object,value:"{}"},renderErrorMessage:{type:p.n.Boolean,value:!1,description:"If the error message container should be rendered (take up vertical space). If false, when showing errorMessage, the layout will shift to add it at that time."},InputComponent:{type:p.n.ReactNode},placeholder:{type:p.n.String,value:"Enter Name"}},scope:{Input:r.Input,Icon:l.ZP},imports:{"@rneui/base":{named:["Input"]},"react-native-vector-icons/MaterialCommunityIcons":{default:"Icon"}}});return a.createElement(a.Fragment,null,a.createElement(o.Z,{params:t}))}},37047:(t,e,n)=>{"use strict";n.d(e,{w:()=>p});var a=n(67294),r=n(35742),l=n(14330),o=n(98576),i=n(61720),p=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var a=n(87462),r=n(67294),l=n(91262),o=n(18421),i=n(77356),p=n(41652),d=n(24309),s=n(16042),m=n(20346),u=n(30650);const c=function(t){var e=t.params,n=t.containerStyle,c=void 0===n?{}:n;return r.createElement(l.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(m.X9.Provider,null,r.createElement(m.PK,{initialMetrics:u.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},r.createElement(o.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:i.Z}))),r.createElement(p.Z,{msg:e.errorProps.msg,isPopup:!0}),r.createElement(d.Z,e.knobProps),r.createElement(p.Z,e.errorProps),r.createElement(s.E,e.actions)))}))}},22365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>C});var a=n(63366),r=n(87462),l=n(67294),o=n(10407),i=n(86010),p=(n(95999),n(52263)),d=n(91262),s=n(66412);const m="playgroundContainer_TGbA",u="playgroundEditor_PvJ1",c="playgroundPreview_bb8I",k="toggleContainer_ZZiH",N="toggleIcon_OnrQ",g="showCode_O0Od";var h=n(72389),y=n(5434),b=["children","transformCode"];function f(){return l.createElement("div",null,"Loading...")}function v(t){var e=(0,h.Z)(),n=(0,l.useContext)(o.L2),a=n.code,i=n.language,p=n.theme,d=n.disabled,s=n.onChange;return l.createElement(o.uz,(0,r.Z)({key:String(e),code:a,language:i,theme:p,disabled:d,onChange:s},t,{className:u}))}function I(t){var e=t.showCode,n=t.preImports,a=void 0===n?"":n,r=(t.wrapper,l.useState(e)),p=r[0],s=r[1],m=function(){s((function(t){return!t}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:c},l.createElement(d.Z,{fallback:l.createElement(f,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.i5,null),l.createElement(o.IF,null),l.createElement("div",{className:k},l.createElement("div",{className:(0,i.Z)(N),onClick:m},l.createElement(y.xoN,null),l.createElement("span",{className:g},p?"Hide":"Show"," Code"))))}))),p&&l.createElement(v,{preImports:a,showCode:p}))}function C(t){var e=t.children,n=(t.transformCode,(0,a.Z)(t,b)),i=((0,p.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return l.createElement("div",{className:m},l.createElement(o.nu,(0,r.Z)({code:e.replace(/\n$/,""),theme:i},n),l.createElement(I,{showCode:n.showCode})))}},56922:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var a=n(67294),r=n(32408),l=n(13925),o=n(53211),i=n(83279);const p=Object.assign({React:a,LinearGradient:i.Z},r,l,o,a)},78833:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>N,default:()=>f,frontMatter:()=>k,metadata:()=>g,toc:()=>y});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(37047),i=(n(74866),n(85162),n(96711)),p=n(47516),d=["components"],s={toc:[{value:"Interaction methods",id:"interaction-methods",level:3},{value:"Calling methods on Input",id:"calling-methods-on-input",level:3}]};function m(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"interaction-methods"},"Interaction methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus"),(0,l.kt)("td",{parentName:"tr",align:null},"Focuses the Input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blur"),(0,l.kt)("td",{parentName:"tr",align:null},"Removes focus from the Input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clear"),(0,l.kt)("td",{parentName:"tr",align:null},"Clears the text in the Input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isFocused"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," if the Input is focused")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setNativeProps"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets props directly on the react native component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shake"),(0,l.kt)("td",{parentName:"tr",align:null},"Shakes the input for error feedback")))),(0,l.kt)("h3",{id:"calling-methods-on-input"},"Calling methods on Input"),(0,l.kt)("p",null,"Store a reference to the Input in your component by using the ref prop\nprovided by React\n(",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"see docs"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const input = React.createRef();\n\n<Input\n  ref={input}\n  ...\n/>\n")),(0,l.kt)("p",null,"You can then use the Input methods like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"input.current.focus();\ninput.current.blur();\ninput.current.clear();\ninput.current.isFocused();\ninput.current.setNativeProps({ value: 'hello' });\ninput.current.shake();\n")),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Input","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Input%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'BASIC%20INPUT'%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20ICON'%0A%20%20%20%20%20%20leftIcon%3D%7B%7B%20type%3A%20'font-awesome'%2C%20name%3A%20'chevron-left'%20%7D%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20CUSTOM%20ICON'%0A%20%20%20%20%20%20leftIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D'user'%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B24%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D'black'%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%2F%3E%0A%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D%22Comment%22%0A%20%20%20%20%20%20leftIcon%3D%7B%7B%20type%3A%20'font-awesome'%2C%20name%3A%20'comment'%20%7D%7D%0A%20%20%20%20%20%20onChangeText%3D%7Bvalue%20%3D%3E%20this.setState(%7B%20comment%3A%20value%20%7D)%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20ERROR%20MESSAGE'%0A%20%20%20%20%20%20errorStyle%3D%7B%7B%20color%3A%20'red'%20%7D%7D%0A%20%20%20%20%20%20errorMessage%3D'ENTER%20A%20VALID%20ERROR%20HERE'%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CInput%20placeholder%3D%22Password%22%20secureTextEntry%3D%7Btrue%7D%20%2F%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0;var u=n(15028),c=["components"],k={id:"input",title:"Input"},N=void 0,g={unversionedId:"components/input",id:"version-4.0.0-rc.8/components/input",title:"Input",description:"Usage",source:"@site/versioned_docs/version-4.0.0-rc.8/components/Input.mdx",sourceDirName:"components",slug:"/components/input",permalink:"/docs/components/input",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/Input.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"input",title:"Input"}},h={},y=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],b={toc:y};function f(t){var e=t.components,n=(0,r.Z)(t,c);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(o.w,{mdxType:"IconsStyle"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Import")),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"import { Input } from '@rneui/themed';")),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Theme Key"," ",(0,l.kt)("a",{href:"../customizing#using-themeprovider"},(0,l.kt)(p.Fs0,{mdxType:"BiInfoCircle"})))),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"Input"))),(0,l.kt)(m,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/textinput#props"},"React Native TextInput"),", ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ErrorComponent")),(0,l.kt)("td",{parentName:"tr",align:null},"React Component"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"component that will be rendered in place of the error message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"InputComponent")),(0,l.kt)("td",{parentName:"tr",align:null},"React Component"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"component that will be rendered in place of the React Native TextInput")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"disables the input component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabledInputStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"disabled styles that will be passed to the style props of the React Native TextInput")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorMessage")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Error message to be displayed under the input field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorProps")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"props to be passed to the React Native Text component used to display the error message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"add styling to error message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inputContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"styling for Input Component Container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inputStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for Input Component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"add a label on top of the input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"labelProps")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"props to be passed to the React Native Text component used to display the label or React Component used instead of simple string in label prop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"labelStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"styling for the label; You can only use this if label is a string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"displays an icon on the left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftIconContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"styling for left Icon Component container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"renderErrorMessage")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"If the error message container should be rendered (take up vertical space). If false, when showing errorMessage, the layout will shift to add it at that time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"displays an icon on the right")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightIconContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"styling for right Icon Component container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shake")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Shake method"))))),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)(u.Z,{mdxType:"Play"}))}f.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);