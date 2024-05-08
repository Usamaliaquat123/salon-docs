(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[14098],{21512:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var a=n(67294),r=n(13925),l=n(54236),i=n(40318),o=n(62290);const d=function(){var t=(0,i.Z)({componentName:"Text",props:{h1:{value:!0,type:o.n.Boolean,description:"Heading 1"},h1Style:{value:"{}",type:o.n.Object,description:"Styling for h1"},h2:{value:!1,type:o.n.Boolean,description:"Heading 2"},h2Style:{value:"{}",type:o.n.Object,description:"Styling for h2"},h3:{value:!1,type:o.n.Boolean,description:"Heading 3"},h3Style:{value:"{}",type:o.n.Object,description:"Styling for h3"},h4:{value:!1,type:o.n.Boolean,description:"Heading 4"},h4Style:{value:"{}",type:o.n.Object,description:"Styling for h4"},style:{value:"{}",type:o.n.Object,description:"Styling of the text"},children:{value:"This is a Text.",type:o.n.String,description:"Text Content"}},scope:{Text:r.Text},imports:{"@rneui/base":{named:["Text"]}}});return a.createElement(a.Fragment,null,a.createElement(l.Z,{params:t}))}},37047:(t,e,n)=>{"use strict";n.d(e,{w:()=>d});var a=n(67294),r=n(35742),l=n(14330),i=n(98576),o=n(61720),d=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var a=n(87462),r=n(67294),l=n(91262),i=n(18421),o=n(77356),d=n(41652),s=n(24309),p=n(16042),m=n(20346),u=n(30650);const c=function(t){var e=t.params,n=t.containerStyle,c=void 0===n?{}:n;return r.createElement(l.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(m.X9.Provider,null,r.createElement(m.PK,{initialMetrics:u.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},r.createElement(i.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:o.Z}))),r.createElement(d.Z,{msg:e.errorProps.msg,isPopup:!0}),r.createElement(s.Z,e.knobProps),r.createElement(d.Z,e.errorProps),r.createElement(p.E,e.actions)))}))}},51906:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>k,toc:()=>N});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(37047),o=(n(74866),n(85162),["components"]),d={toc:[{value:"Using font-weight on android",id:"using-font-weight-on-android",level:3}]};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"<Text h2>Hello World</Text>\n")),(0,l.kt)("h3",{id:"using-font-weight-on-android"},"Using font-weight on android"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For Android the font. weights MUST align with the used font. So try out which is the regarding font weight to your used font.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"\n    h1Style: {\n      fontFamily: 'Nunito-SemiBold',\n      fontWeight: '300',\n    },\n    h2Style: {\n      fontFamily: 'Nunito-Regular',\n      fontWeight: '100',\n    },\n    h3Style: {\n      fontFamily: 'Nunito-Bold',\n      fontWeight: '500',\n    },\n")))}s.isMDXComponent=!0;var p=n(21512),m=["components"],u={id:"text",title:"Text"},c=void 0,k={unversionedId:"components/text",id:"version-4.0.0-rc.6/components/text",title:"Text",description:"Text displays words and characters of various sizes.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/Text.mdx",sourceDirName:"components",slug:"/components/text",permalink:"/docs/4.0.0-rc.6/components/text",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/Text.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"text",title:"Text"},sidebar:"docs",previous:{title:"TabView.Item",permalink:"/docs/4.0.0-rc.6/components/tabview_item"},next:{title:"Tile",permalink:"/docs/4.0.0-rc.6/components/tile"}},g={},N=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],y={toc:N};function h(t){var e=t.components,n=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(i.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"Text displays words and characters of various sizes."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Text } from "@rneui/themed";\n')),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(s,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"h1")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Text with Font size 40.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"h1Style")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null},"Styling when h1 is set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"h2")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Text with Font size 34.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"h2Style")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null},"Styling when h2 is set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"h3")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Text with Font size 28.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"h3Style")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null},"Styling when h3 is set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"h4")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Text with Font size 22.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"h4Style")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null},"Styling when h4 is set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null},"Add additional styling for Text."))))),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)(p.Z,{mdxType:"Play"}))}h.isMDXComponent=!0},61720:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},33770:()=>{},72950:()=>{},54882:()=>{}}]);