(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[91313],{33730:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(96540),l=n(58040),r=n(64775),o=n(10171),i=n(11451);const d=function(){var e=(0,o.A)({componentName:"SocialIcon",props:{activityIndicatorStyle:{type:i.B.Object,value:"",description:"Style to render when in loading state"},button:{type:i.B.Boolean,value:!1},Component:{type:i.B.ReactNode,description:"React Native Component. Default =>\tTouchableHighlight",value:null},disabled:{type:i.B.Boolean,value:!1},fontFamily:{type:i.B.String,description:"System font bold (iOS), Sans Serif Black (android)"},fontStyle:{type:i.B.Object,value:"{}"},fontWeight:{type:i.B.String,description:"specify font weight of title if set as a button with a title"},iconColor:{type:i.B.String,value:""},iconSize:{type:i.B.Number,value:25},iconStyle:{type:i.B.Object,value:"{}"},iconType:{type:i.B.String,value:"font-awesome"},light:{type:i.B.Boolean,value:!1},loading:{type:i.B.Boolean,value:!1},onLongPress:{type:i.B.Function,value:'() => console.log("onLongPress()")'},onPress:{type:i.B.Function,value:'() => console.log("onPress()")'},raised:{type:i.B.Boolean,value:!1},style:{type:i.B.Object,value:"{paddingHorizontal:10}"},title:{type:i.B.String,value:"GitHub",description:"title if made into a button."},type:{type:i.B.String,value:"github"},underlayColor:{type:i.B.String,value:""}},scope:{SocialIcon:l.SocialIcon},imports:{"@rneui/base":{named:["SocialIcon"]}}});return a.createElement(a.Fragment,null,a.createElement(r.A,{params:e}))}},41298:(e,t,n)=>{"use strict";n.d(t,{y:()=>d});var a=n(96540),l=n(5260),r=n(14628),o=n(1547),i=n(83564),d=function(){return a.createElement(l.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.A+") format('truetype');\n          }\n        "))}},64775:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var a=n(58168),l=n(96540),r=n(78478),o=n(32594),i=n(20018),d=n(96109),g=n(11245),p=n(34397),y=n(50546),c=n(25407);const s=function(e){var t=e.params,n=e.containerStyle,s=void 0===n?{}:n;return l.createElement(r.A,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(y.q9.Provider,null,l.createElement(y.Oy,{initialMetrics:c.Y},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},s)},l.createElement(o.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:i.A}))),l.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),l.createElement(g.A,t.knobProps),l.createElement(d.A,t.errorProps),l.createElement(p.w,t.actions)))}))}},4588:(e,t,n)=>{"use strict";n.d(t,{A:()=>C});var a=n(98587),l=n(58168),r=n(96540),o=n(95404),i=n(20053),d=(n(21312),n(44586)),g=n(78478),p=n(26058);const y={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var c=n(92303),s=n(59644),m=["children","transformCode"];function u(){return r.createElement("div",null,"Loading...")}function A(e){var t=(0,c.A)(),n=(0,r.useContext)(o.MY),a=n.code,i=n.language,d=n.theme,g=n.disabled,p=n.onChange;return r.createElement(o.w,(0,l.A)({key:String(t),code:a,language:i,theme:d,disabled:g,onChange:p},e,{className:y.playgroundEditor}))}function N(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,l=(e.wrapper,r.useState(t)),d=l[0],p=l[1],c=function(){p((function(e){return!e}))};return r.createElement(r.Fragment,null,r.createElement("div",{className:y.playgroundPreview},r.createElement(g.A,{fallback:r.createElement(u,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(o.pA,null),r.createElement(o.p1,null),r.createElement("div",{className:y.toggleContainer},r.createElement("div",{className:(0,i.A)(y.toggleIcon),onClick:c},r.createElement(s.luQ,null),r.createElement("span",{className:y.showCode},d?"Hide":"Show"," Code"))))}))),d&&r.createElement(A,{preImports:a,showCode:d}))}function C(e){var t=e.children,n=(e.transformCode,(0,a.A)(e,m)),i=((0,d.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,p.A)());return r.createElement("div",{className:y.playgroundContainer},r.createElement(o.Q,(0,l.A)({code:t.replace(/\n$/,""),theme:i},n),r.createElement(N,{showCode:n.showCode})))}},51433:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(96540),l=n(36480),r=n(58040),o=n(45550),i=n(91147);const d=Object.assign({React:a,LinearGradient:i.A},l,r,o,a)},29958:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>A,default:()=>h,frontMatter:()=>u,metadata:()=>N,toc:()=>f});var a=n(58168),l=n(98587),r=(n(96540),n(15680)),o=n(41298),i=(n(11470),n(19365),n(21619)),d=n(35504),g=["components"],p={toc:[]},y="wrapper";function c(e){var t=e.components,n=(0,l.A)(e,g);return(0,r.yg)(y,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{className:"snack-player","data-snack-name":"RNE Social Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SocialIcon%2C%20SocialIconProps%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20IconData%20%3D%20%7B%0Atype%3A%20SocialMediaType%3B%0AiconType%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20Partial%3CIconData%3E%5B%5D%20%3D%20%5B%0A%7B%0A%20%20type%3A%20'facebook'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'twitter'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'google-plus-official'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'google'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'pinterest'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'linkedin'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'youtube'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'vimeo'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'tumblr'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'instagram'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'quora'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'flickr'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'foursquare'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'wordpress'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'stumbleupon'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'github'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'github-alt'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'twitch'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'medium'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'soundcloud'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'stack-overflow'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'gitlab'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'angellist'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'codepen'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'weibo'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'vk'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'facebook-messenger'%2C%0A%20%20iconType%3A%20'material-community'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'whatsapp'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20SocialIconsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SocialIcons%3A%20React.FunctionComponent%3CSocialIconsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20socialProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%7B_.chunk(dataList%2C%203).map(%0A%20%20%20%20%20%20%20%20(chunk%3A%20Partial%3CIconData%3E%5B%5D%2C%20chunkIndex%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%234c4c4c'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%3A%20Partial%3CIconData%3E%2C%20i%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSocialIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%7Bl.type%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconType%3D%7Bl.iconType%20%3F%20l.iconType%20%3A%20'font-awesome'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20SocialIcons%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0;var s=n(33730),m=["components"],u={id:"socialicon",title:"SocialIcon"},A=void 0,N={unversionedId:"components/socialicon",id:"version-4.0.0-rc.8/components/socialicon",title:"SocialIcon",description:"SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/SocialIcon.mdx",sourceDirName:"components",slug:"/components/socialicon",permalink:"/docs/components/socialicon",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/SocialIcon.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"socialicon",title:"SocialIcon"}},C={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],b={toc:f},v="wrapper";function h(e){var t=e.components,n=(0,l.A)(e,m);return(0,r.yg)(v,(0,a.A)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.y,{mdxType:"IconsStyle"}),(0,r.yg)("p",null,"SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("div",{class:"row inline-flex-center"},(0,r.yg)("div",{class:"col col--3"},(0,r.yg)("h4",null,"Import")),(0,r.yg)("div",{class:"col col--9"},(0,r.yg)(i.A,{mdxType:"CodeBlock"},"import { SocialIcon } from '@rneui/themed';")),(0,r.yg)("div",{class:"col col--3"},(0,r.yg)("h4",null,"Theme Key"," ",(0,r.yg)("a",{href:"../customizing#using-themeprovider"},(0,r.yg)(d.wfp,{mdxType:"BiInfoCircle"})))),(0,r.yg)("div",{class:"col col--9"},(0,r.yg)(i.A,{mdxType:"CodeBlock"},"SocialIcon"))),(0,r.yg)(c,{mdxType:"Usage"}),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("div",{class:"table-responsive"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Component")),(0,r.yg)("td",{parentName:"tr",align:null},"React Component"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View")),(0,r.yg)("td",{parentName:"tr",align:null},"Type of button.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"activityIndicatorStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Style to render when in loading state.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"button")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Creates button with a social icon.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabled")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Disables the button, if true.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fontFamily")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify different font family.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fontStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify text styling.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fontWeight")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify font weight of title if set as a button with a title.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"iconColor")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"white")),(0,r.yg)("td",{parentName:"tr",align:null},"Specify the color of the icon.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"iconSize")),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"24")),(0,r.yg)("td",{parentName:"tr",align:null},"Specify the size of the icon.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"iconStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Extra styling for icon component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"iconType")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"font-awesome")),(0,r.yg)("td",{parentName:"tr",align:null},"Type of icon set. ",(0,r.yg)("a",{parentName:"td",href:"icon#available-icon-sets"},"Supported sets here"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"light")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Reverses icon color scheme, setting background to white and icon to primary color.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"loading")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Shows loading indicator.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onLongPress")),(0,r.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onPress")),(0,r.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onPressIn")),(0,r.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,r.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onPressOut")),(0,r.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,r.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pressableProps")),(0,r.yg)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"raised")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"Raised adds a drop shadow, set to false to remove.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"small")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Decides the size of the activity indicator.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"style")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Adds styling to the button.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"title")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Title if made into a button.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"type")),(0,r.yg)("td",{parentName:"tr",align:null},"SocialMediaType"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Social media type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"underlayColor")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Add Underlay color."))))),(0,r.yg)("h2",{id:"playground"},"Playground"),(0,r.yg)(s.A,{mdxType:"Play"}))}h.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);