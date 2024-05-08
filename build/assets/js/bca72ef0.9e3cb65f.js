(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[12682],{54904:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),r=n(13925),l=n(54236),i=n(40318),o=n(62290);const s=function(){var e=(0,i.Z)({componentName:"AirbnbRating",props:{count:{type:o.n.Number,value:5},defaultRating:{type:o.n.Number,value:1},reviews:{type:o.n.Array,value:'["Terrible", "Bad", "Okay", "Good", "Great"]'},onFinishRating:{type:o.n.Function,value:'() => console.log("onFinishRating()")'},showRating:{type:o.n.Boolean,value:!0}},scope:{AirbnbRating:r.AirbnbRating},imports:{"@rneui/base":{named:["AirbnbRating"]}}});return a.createElement(a.Fragment,null,a.createElement(l.Z,{params:e}))}},37047:(e,t,n)=>{"use strict";n.d(t,{w:()=>s});var a=n(67294),r=n(35742),l=n(14330),i=n(98576),o=n(61720),s=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(91262),i=n(18421),o=n(77356),s=n(41652),m=n(24309),d=n(16042),u=n(20346),p=n(30650);const c=function(e){var t=e.params,n=e.containerStyle,c=void 0===n?{}:n;return r.createElement(l.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(u.X9.Provider,null,r.createElement(u.PK,{initialMetrics:p.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},r.createElement(i.Z,(0,a.Z)({},t.compilerProps,{minHeight:62,placeholder:o.Z}))),r.createElement(s.Z,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(m.Z,t.knobProps),r.createElement(s.Z,t.errorProps),r.createElement(d.E,t.actions)))}))}},22365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(63366),r=n(87462),l=n(67294),i=n(10407),o=n(86010),s=(n(95999),n(52263)),m=n(91262),d=n(66412);const u="playgroundContainer_TGbA",p="playgroundEditor_PvJ1",c="playgroundPreview_bb8I",g="toggleContainer_ZZiH",k="toggleIcon_OnrQ",A="showCode_O0Od";var b=n(72389),f=n(5434),C=["children","transformCode"];function N(){return l.createElement("div",null,"Loading...")}function v(e){var t=(0,b.Z)(),n=(0,l.useContext)(i.L2),a=n.code,o=n.language,s=n.theme,m=n.disabled,d=n.onChange;return l.createElement(i.uz,(0,r.Z)({key:String(t),code:a,language:o,theme:s,disabled:m,onChange:d},e,{className:p}))}function y(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,r=(e.wrapper,l.useState(t)),s=r[0],d=r[1],u=function(){d((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:c},l.createElement(m.Z,{fallback:l.createElement(N,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(i.i5,null),l.createElement(i.IF,null),l.createElement("div",{className:g},l.createElement("div",{className:(0,o.Z)(k),onClick:u},l.createElement(f.xoN,null),l.createElement("span",{className:A},s?"Hide":"Show"," Code"))))}))),s&&l.createElement(v,{preImports:a,showCode:s}))}function h(e){var t=e.children,n=(e.transformCode,(0,a.Z)(e,C)),o=((0,s.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,d.p)());return l.createElement("div",{className:u},l.createElement(i.nu,(0,r.Z)({code:t.replace(/\n$/,""),theme:o},n),l.createElement(y,{showCode:n.showCode})))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),r=n(32408),l=n(13925),i=n(53211),o=n(83279);const s=Object.assign({React:a,LinearGradient:o.Z},r,l,i,a)},99418:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>N,frontMatter:()=>g,metadata:()=>A,toc:()=>f});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(37047),o=(n(74866),n(85162),n(96711)),s=n(47516),m=["components"],d={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE AirbnbRating","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20Platform%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20AirbnbRating%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20RatingsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Ratings%3A%20React.FunctionComponent%3CRatingsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20ratingCompleted%20%3D%20(rating%3A%20number)%20%3D%3E%20%7B%0A%20%20console.log('Rating%20is%3A%20'%20%2B%20rating)%3B%0A%7D%3B%0A%0Aconst%20ratingProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CScrollView%20style%3D%7Bstyles.viewContainer%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%20isDisabled%3D%7Btrue%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%0A%20%20%20%20%20%20%20%20%20%20count%3D%7B11%7D%0A%20%20%20%20%20%20%20%20%20%20reviews%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20'Terrible'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Bad'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Meh'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'OK'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Good'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Hmm...'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Very%20Good'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Wow'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Amazing'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Unbelievable'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Jesus'%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%20%20defaultRating%3D%7B11%7D%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0AheadingContainer%3A%20%7B%0A%20%20paddingTop%3A%2050%2C%0A%7D%2C%0AtitleText%3A%20%7B%0A%20%20fontSize%3A%2025%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20paddingVertical%3A%205%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Menlo-Bold'%20%3A%20''%2C%0A%20%20color%3A%20'%2327ae60'%2C%0A%7D%2C%0AsubtitleText%3A%20%7B%0A%20%20fontSize%3A%2018%2C%0A%20%20fontWeight%3A%20'400'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Trebuchet%20MS'%20%3A%20''%2C%0A%20%20color%3A%20'%2334495e'%2C%0A%7D%2C%0AviewContainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Arating%3A%20%7B%0A%20%20paddingVertical%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Ratings%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0;var p=n(54904),c=["components"],g={id:"airbnbrating",title:"AirbnbRating"},k=void 0,A={unversionedId:"components/airbnbrating",id:"components/airbnbrating",title:"AirbnbRating",description:"Ratings are used to collect measurable feedback from users.",source:"@site/docs/components/AirbnbRating.mdx",sourceDirName:"components",slug:"/components/airbnbrating",permalink:"/docs/next/components/airbnbrating",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/AirbnbRating.mdx",tags:[],version:"current",frontMatter:{id:"airbnbrating",title:"AirbnbRating"},sidebar:"docs",previous:{title:"Common Pitfalls",permalink:"/docs/next/customization/pitfall"},next:{title:"Avatar",permalink:"/docs/next/components/avatar"}},b={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],C={toc:f};function N(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"Ratings are used to collect measurable feedback from users.\nUse Rating over an Input where imagery can increase user interaction.\nThis component is imported from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Monte9/react-native-ratings"},"react-native-ratings"),".\nThere are two types of rating - TapRating and SwipeRating.\nThis documentation is for Tap Rating version."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Import")),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"import { AirbnbRating } from '@rneui/themed';")),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Theme Key"," ",(0,l.kt)("a",{href:"../customizing#using-themeprovider"},(0,l.kt)(s.Fs0,{mdxType:"BiInfoCircle"})))),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"AirbnbRating"))),(0,l.kt)(u,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"count")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of ratings to displayDefault is 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"defaultRating")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Initial value for the ratingDefault is 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isDisabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the rating can be modiefied by the userDefault is false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onFinishRating")),(0,l.kt)("td",{parentName:"tr",align:null},"(number: any) => void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback method when the user finishes rating. Gives you the final rating value as a whole number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for rating containerDefault is none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reviewColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Color value for review.Default is #f1c40f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reviewSize")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Size value for review.Default is 40")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reviews")),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Labels to show when each value is tappede.g. If the first star is tapped, then value in index 0 will be used as the labelDefault is ","['Terrible', 'Bad', 'Okay', 'Good', 'Great']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"selectedColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Color value for filled stars.Default is #004666")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showRating")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Determines if to show the reviews above the ratingDefault is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Size of rating imageDefault is 40")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"starContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for star containerDefault is none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"starImage")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pass in a custom base image source"))))),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)(p.Z,{mdxType:"Play"}))}N.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);