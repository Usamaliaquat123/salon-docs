(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[43189],{24917:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var a=n(67294),l=n(13925),r=n(54236),i=n(40318),o=n(62290);const d=function(){var t=(0,i.Z)({componentName:"Slider",props:{animateTransitions:{value:!0,type:o.n.Boolean},animationConfig:{valie:"{}",type:o.n.Object},animationType:{value:"timing",options:{timing:"timing",spring:"spring"},type:o.n.Enum,description:"Defines the Animation type."},debugTouchArea:{type:o.n.Boolean,value:!1,description:"Set this to true to visually see the thumb touch rect in green."},disabled:{type:o.n.Boolean,value:!1,description:"Disables the slider"},maximumTrackTintColor:{type:o.n.String,value:"#ccc"},maximumValue:{value:100,type:o.n.Number},minimumTrackTintColor:{type:o.n.String,value:"#222"},minimumValue:{value:0,type:o.n.Number},allowTouchTrack:{type:o.n.Boolean,value:!1,description:"If true, thumb will respond and jump to any touch along the track."},onSlidingComplete:{type:o.n.Function,value:'() => console.log("onSlidingComplete()")'},onSlidingStart:{type:o.n.Function,value:'() => console.log("onSlidingStart()")'},onValueChange:{type:o.n.Function,value:'(value) => console.log("onValueChange()",value)'},orientation:{value:"horizontal",options:{horizontal:"horizontal",vertical:"vertical"},type:o.n.Enum,description:"Slider's Orientation"},step:{value:1,type:o.n.Number},style:{value:'{width:"80%",height:200}',type:o.n.Object},thumbStyle:{value:"{ height: 20, width: 20 }",type:o.n.Object},thumbProps:{value:'{\n          children: (\n            <Icon\n              name="heartbeat"\n              type="font-awesome"\n              size={20}\n              reverse\n              containerStyle={{ bottom: 20, right: 20 }}\n              color="#f50"\n            />\n          ),\n        }',type:o.n.Object},thumbTintColor:{type:o.n.String,value:"#0c0"},thumbTouchSize:{type:o.n.Object,value:"{width: 40, height: 40}"},trackStyle:{value:"{ height: 10,borderRadius:20 }",type:o.n.Object},value:{value:50,type:o.n.Number}},scope:{Slider:l.Slider,Icon:l.Icon},imports:{"@rneui/base":{named:["Slider","Icon"]}}});return a.createElement(a.Fragment,null,a.createElement(r.Z,{params:t}))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>k});var a=n(87462),l=n(67294),r=n(91262),i=n(18421),o=n(77356),d=n(41652),m=n(24309),p=n(16042),u=n(20346),s=n(30650);const k=function(t){var e=t.params,n=t.containerStyle,k=void 0===n?{}:n;return l.createElement(r.Z,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(u.X9.Provider,null,l.createElement(u.PK,{initialMetrics:s.o},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},k)},l.createElement(i.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:o.Z}))),l.createElement(d.Z,{msg:e.errorProps.msg,isPopup:!0}),l.createElement(m.Z,e.knobProps),l.createElement(d.Z,e.errorProps),l.createElement(p.E,e.actions)))}))}},60791:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>N,frontMatter:()=>u,metadata:()=>k,toc:()=>g});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),o={toc:[]};function d(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Slider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Slider%2C%20Text%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20SlidersComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Sliders%3A%20React.FunctionComponent%3CSlidersComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvalue%2C%20setValue%5D%20%3D%20useState(0)%3B%0Aconst%20%5BvertValue%2C%20setVertValue%5D%20%3D%20useState(0)%3B%0A%0Aconst%20interpolate%20%3D%20(start%3A%20number%2C%20end%3A%20number)%20%3D%3E%20%7B%0A%20%20let%20k%20%3D%20(value%20-%200)%20%2F%2010%3B%20%2F%2F%200%20%3D%3Emin%20%20%26%26%2010%20%3D%3E%20MAX%0A%20%20return%20Math.ceil((1%20-%20k)%20*%20start%20%2B%20k%20*%20end)%20%25%20256%3B%0A%7D%3B%0A%0Aconst%20color%20%3D%20()%20%3D%3E%20%7B%0A%20%20let%20r%20%3D%20interpolate(255%2C%200)%3B%0A%20%20let%20g%20%3D%20interpolate(0%2C%20255)%3B%0A%20%20let%20b%20%3D%20interpolate(0%2C%200)%3B%0A%20%20return%20%60rgb(%24%7Br%7D%2C%24%7Bg%7D%2C%24%7Bb%7D)%60%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Slider%3C%2FText%3E%0A%0A%20%20%20%20%3CView%20style%3D%7B%5Bstyles.contentView%5D%7D%3E%0A%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BsetValue%7D%0A%20%20%20%20%20%20%20%20maximumValue%3D%7B10%7D%0A%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20step%3D%7B1%7D%0A%20%20%20%20%20%20%20%20allowTouchTrack%0A%20%20%20%20%20%20%20%20trackStyle%3D%7B%7B%20height%3A%205%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbStyle%3D%7B%7B%20height%3A%2020%2C%20width%3A%2020%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20children%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22heartbeat%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20bottom%3A%2020%2C%20right%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolor()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20paddingTop%3A%2020%20%7D%7D%3EValue%3A%20%7Bvalue%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Slider%3C%2FText%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.verticalContent%7D%3E%0A%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20value%3D%7BvertValue%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BsetVertValue%7D%0A%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20minimumValue%3D%7B20%7D%0A%20%20%20%20%20%20%20%20step%3D%7B1%7D%0A%20%20%20%20%20%20%20%20orientation%3D%22vertical%22%0A%20%20%20%20%20%20%20%20thumbStyle%3D%7B%7B%20height%3A%2020%2C%20width%3A%2016%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20children%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22heartbeat%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20bottom%3A%2020%2C%20right%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23f50%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20paddingLeft%3A%2025%20%7D%7D%3EValue%3A%20%7BvertValue%7D%3C%2FText%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AcontentView%3A%20%7B%0A%20%20padding%3A%2020%2C%0A%20%20width%3A%20'100%25'%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'stretch'%2C%0A%7D%2C%0AverticalContent%3A%20%7B%0A%20%20padding%3A%2020%2C%0A%20%20flex%3A%201%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20height%3A%20500%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'stretch'%2C%0A%7D%2C%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)%3B%0A%0Aexport%20default%20Sliders%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var m=n(24917),p=["components"],u={id:"slider",title:"Slider"},s=void 0,k={unversionedId:"components/slider",id:"version-4.0.0-rc.3/components/slider",title:"Slider",description:"Sliders allow users to select a value from a fixed set of values using drag utility.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/Slider.mdx",sourceDirName:"components",slug:"/components/slider",permalink:"/docs/4.0.0-rc.3/components/slider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/Slider.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"slider",title:"Slider"},sidebar:"docs",previous:{title:"SearchBar",permalink:"/docs/4.0.0-rc.3/components/searchbar"},next:{title:"Skeleton",permalink:"/docs/4.0.0-rc.3/components/skeleton"}},c={},g=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],h={toc:g};function N(t){var e=t.components,n=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sliders allow users to select a value from a fixed set of values using drag utility."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Slider } from "@rneui/themed";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allowTouchTrack")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, thumb will respond and jump to any touch along the track.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"animateTransitions")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Set to true if you want to use the default 'spring' animation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"animationConfig")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TimingAnimationConfig")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"SpringAnimationConfig")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Used to configure the animation parameters. These are the same parameters in the ",(0,r.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/animations.html"},"Animated library"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"animationType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spring")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"timing")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timing")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to 'spring' or 'timing' to use one of those two types of animations with the default ",(0,r.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/animations.html"},"animation properties"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Apply style to the container of the slider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"debugTouchArea")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Set this to true to visually see the thumb touch rect in green.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If true the user won't be able to move the slider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"maximumTrackTintColor")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#b3b3b3")),(0,r.kt)("td",{parentName:"tr",align:null},"The color used for the track to the right of the button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"maximumValue")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"Initial maximum value of the slider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minimumTrackTintColor")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#3f3f3f")),(0,r.kt)("td",{parentName:"tr",align:null},"The color used for the track to the left of the button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minimumValue")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Initial minimum value of the slider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onSlidingComplete")),(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Callback called when the user finishes changing the value (e.g. when the slider is released).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onSlidingStart")),(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Callback called when the user starts changing the value (e.g. when the slider is pressed).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onValueChange")),(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Callback continuously called while the user is dragging the slider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orientation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vertical")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"horizontal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"horizontal")),(0,r.kt)("td",{parentName:"tr",align:null},"Set the orientation of the slider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"step")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Step value of the slider. The value should be between 0 and maximumValue - minimumValue).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The style applied to the slider container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thumbProps")),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The props applied to the thumb. Uses ",(0,r.kt)("inlineCode",{parentName:"td"},"Component")," prop which can accept ",(0,r.kt)("inlineCode",{parentName:"td"},"Animated")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thumbStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The style applied to the thumb.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thumbTintColor")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"red")),(0,r.kt)("td",{parentName:"tr",align:null},"The color used for the thumb.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thumbTouchSize")),(0,r.kt)("td",{parentName:"tr",align:null},"Sizable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ width: THUMB_SIZE, height: THUMB_SIZE }")),(0,r.kt)("td",{parentName:"tr",align:null},"The size of the touch area that allows moving the thumb. The touch area has the same center as the visible thumb. This allows to have a visually small thumb while still allowing the user to move it easily.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"trackStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The style applied to the track.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Initial value of the slider."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(m.Z,{mdxType:"Play"}))}N.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);