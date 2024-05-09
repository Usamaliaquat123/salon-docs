"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[34817],{41298:(e,t,n)=>{n.d(t,{y:()=>d});var a=n(96540),o=n(5260),l=n(14628),r=n(1547),i=n(83564),d=function(){return a.createElement(o.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+r.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},4588:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(98587),o=n(58168),l=n(96540),r=n(95404),i=n(20053),d=(n(21312),n(44586)),p=n(78478),g=n(26058);const m={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var s=n(92303),y=n(59644),c=["children","transformCode"];function u(){return l.createElement("div",null,"Loading...")}function C(e){var t=(0,s.A)(),n=(0,l.useContext)(r.MY),a=n.code,i=n.language,d=n.theme,p=n.disabled,g=n.onChange;return l.createElement(r.w,(0,o.A)({key:String(t),code:a,language:i,theme:d,disabled:p,onChange:g},e,{className:m.playgroundEditor}))}function N(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,o=(e.wrapper,l.useState(t)),d=o[0],g=o[1],s=function(){g((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:m.playgroundPreview},l.createElement(p.A,{fallback:l.createElement(u,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(r.pA,null),l.createElement(r.p1,null),l.createElement("div",{className:m.toggleContainer},l.createElement("div",{className:(0,i.A)(m.toggleIcon),onClick:s},l.createElement(y.luQ,null),l.createElement("span",{className:m.showCode},d?"Hide":"Show"," Code"))))}))),d&&l.createElement(C,{preImports:a,showCode:d}))}function h(e){var t=e.children,n=(e.transformCode,(0,a.A)(e,c)),i=((0,d.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,g.A)());return l.createElement("div",{className:m.playgroundContainer},l.createElement(r.Q,(0,o.A)({code:t.replace(/\n$/,""),theme:i},n),l.createElement(N,{showCode:n.showCode})))}},51433:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(96540),o=n(36480),l=n(58040),r=n(45550),i=n(91147);const d=Object.assign({React:a,LinearGradient:i.A},o,l,r,a)},53090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>C,default:()=>v,frontMatter:()=>u,metadata:()=>N,toc:()=>A});var a=n(58168),o=n(98587),l=(n(96540),n(15680)),r=n(41298),i=(n(11470),n(19365),n(21619)),d=n(35504),p=n(11963),g=["components"],m={toc:[]},s="wrapper";function y(e){var t=e.components,n=(0,o.A)(e,g);return(0,l.yg)(s,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(p.A,{type:"tip",icon:"\ud83d\udca1",title:"Web-platform specific note",mdxType:"Admonition"},"You ",(0,l.yg)("b",null,"must")," pass a valid React Native"," ",(0,l.yg)("a",{href:"https://reactnative.dev/docs/modal"},"Modal")," component implementation into ",(0,l.yg)("a",{href:"#modalcomponent"},"ModalComponent")," prop because `Modal` component is not implemented yet in `react-native-web`"),(0,l.yg)("hr",null),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"\nimport Modal from 'modal-react-native-web';\n\n\n<Tooltip ModalComponent={Modal} ... />\n\n")),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Tooltip","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tooltip%2C%20Text%2C%20lightColors%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Dimensions%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20Modal%20from%20'modal-react-native-web'%3B%0A%0Aconst%20%7B%20height%20%7D%20%3D%20Dimensions.get('window')%3B%0A%0Aconst%20ControlledTooltip%3A%20React.FC%3CTooltipProps%3E%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20const%20%5Bopen%2C%20setOpen%5D%20%3D%20React.useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20visible%3D%7Bopen%7D%0A%20%20%20%20%20%20onOpen%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setOpen(true)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20onClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setOpen(false)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%7B...props%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%3B%0Aconst%20TooltipComponent%20%3D%20()%20%3D%3E%20%7B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginVertical%3A%20height%20%2F%208%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3Eno%20caret!%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20withPointer%3D%7Bfalse%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3Ewithout%20caret%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.primary%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20ModalComponent%3D%7BModal%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.secondary%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3ETooltip%20info%20goes%20here%20too.%20Find%20tooltip%20everywhere%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20width%3A%20200%2C%20height%3A%2060%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20width%3A%20145%2C%20height%3A%20130%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Some%20big%20text%20full%20of%20important%20stuff%20for%20the%20super%20duper%20user%20that%20our%20design%20has%20been%20created%20for'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EHUGE%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.primary1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EMore%20attention%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.primary2%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EI'm%20different%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20justifyContent%3A%20'space-evenly'%2C%0A%20%20marginVertical%3A%2050%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20TooltipComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base,modal-react-native-web","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}y.isMDXComponent=!0;var c=["components"],u={id:"tooltip",title:"Tooltip"},C=void 0,N={unversionedId:"components/tooltip",id:"version-4.0.0-rc.8/components/tooltip",title:"Tooltip",description:"Tooltips display informative text when users tap on an element.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/Tooltip.mdx",sourceDirName:"components",slug:"/components/tooltip",permalink:"/docs/components/tooltip",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/Tooltip.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"tooltip",title:"Tooltip"}},h={},A=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Props",id:"props",level:2}],f={toc:A},E="wrapper";function v(e){var t=e.components,n=(0,o.A)(e,c);return(0,l.yg)(E,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(r.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"Tooltips display informative text when users tap on an element."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("div",{class:"row inline-flex-center"},(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Import")),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"import { Tooltip } from '@rneui/themed';")),(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Theme Key"," ",(0,l.yg)("a",{href:"../customizing#using-themeprovider"},(0,l.yg)(d.wfp,{mdxType:"BiInfoCircle"})))),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"Tooltip"))),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function RNETooltip() {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <Stack row align="center">\n      <Tooltip\n        visible={open}\n        onOpen={() => setOpen(true)}\n        onClose={() => setOpen(false)}\n        popover={<Text style={{ color: "#fff" }}>Tooltip text</Text>}\n      >\n        Click me\n      </Tooltip>\n    </Stack>\n  );\n}\n')),(0,l.yg)(y,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ModalComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"typeof Component"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Override React Native ",(0,l.yg)("inlineCode",{parentName:"td"},"Modal")," component (usable for web-platform).")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"animationType")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"none")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"fade")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"fade")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backgroundColor")),(0,l.yg)("td",{parentName:"tr",align:null},"ColorValue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"#617080")),(0,l.yg)("td",{parentName:"tr",align:null},"Sets backgroundColor of the tooltip and pointer.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"closeOnlyOnBackdropPress")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Flag to determine whether to disable auto hiding of tooltip when touching/scrolling anywhere inside the active tooltip popover container. When ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", Tooltip closes only when overlay backdrop is pressed (or) highlighted tooltip button is pressed.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"Passes style object to tooltip container")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"height")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"40")),(0,l.yg)("td",{parentName:"tr",align:null},"Tooltip container height. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"highlightColor")),(0,l.yg)("td",{parentName:"tr",align:null},"ColorValue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"transparent")),(0,l.yg)("td",{parentName:"tr",align:null},"Color to highlight the item the tooltip is surrounding.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onClose")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Function")),(0,l.yg)("td",{parentName:"tr",align:null},"Function which gets called on closing the tooltip.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onOpen")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Function")),(0,l.yg)("td",{parentName:"tr",align:null},"Function which gets called on opening the tooltip.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"overlayColor")),(0,l.yg)("td",{parentName:"tr",align:null},"ColorValue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"#fafafa14")),(0,l.yg)("td",{parentName:"tr",align:null},"Color of overlay shadow when tooltip is open.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"pointerColor")),(0,l.yg)("td",{parentName:"tr",align:null},"ColorValue"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"#617080")),(0,l.yg)("td",{parentName:"tr",align:null},"Color of tooltip pointer, it defaults to the ",(0,l.yg)("a",{parentName:"td",href:"#backgroundcolor"},(0,l.yg)("inlineCode",{parentName:"a"},"backgroundColor"))," if none is passed.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"pointerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style to be applied on the pointer.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"popover")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ReactElement<{}, string")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Component to be rendered as the display container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"skipAndroidStatusBar")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Force skip StatusBar height when calculating element position. Pass ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," if Tooltip used inside react-native Modal component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"toggleAction")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPress")),(0,l.yg)("td",{parentName:"tr",align:null},"Define type of action that should trigger tooltip. Available options ",(0,l.yg)("em",{parentName:"td"},"onPress"),", ",(0,l.yg)("em",{parentName:"td"},"onLongPress"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"toggleOnPress")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"true")),(0,l.yg)("td",{parentName:"tr",align:null},"Flag to determine to toggle or not the tooltip on press.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"visible")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"To show the tooltip.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"width")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"150")),(0,l.yg)("td",{parentName:"tr",align:null},"Tooltip container width. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"withOverlay")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"true")),(0,l.yg)("td",{parentName:"tr",align:null},"Flag to determine whether or not display overlay shadow when tooltip is open.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"withPointer")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"true")),(0,l.yg)("td",{parentName:"tr",align:null},"Flag to determine whether or not to display the pointer."))))))}v.isMDXComponent=!0}}]);