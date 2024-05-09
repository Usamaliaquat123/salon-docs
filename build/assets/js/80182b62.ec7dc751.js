(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[33896],{11624:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(96540),r=n(58040),l=n(64775),i=n(10171),o=n(11451);const d=function(){var e=(0,i.A)({componentName:"Text",props:{h1:{value:!0,type:o.B.Boolean,description:"Heading 1"},h1Style:{value:"{}",type:o.B.Object,description:"Styling for h1"},h2:{value:!1,type:o.B.Boolean,description:"Heading 2"},h2Style:{value:"{}",type:o.B.Object,description:"Styling for h2"},h3:{value:!1,type:o.B.Boolean,description:"Heading 3"},h3Style:{value:"{}",type:o.B.Object,description:"Styling for h3"},h4:{value:!1,type:o.B.Boolean,description:"Heading 4"},h4Style:{value:"{}",type:o.B.Object,description:"Styling for h4"},style:{value:"{}",type:o.B.Object,description:"Styling of the text"},children:{value:"This is a Text.",type:o.B.String,description:"Text Content"}},scope:{Text:r.Text},imports:{"@rneui/base":{named:["Text"]}}});return a.createElement(a.Fragment,null,a.createElement(l.A,{params:e}))}},41298:(e,t,n)=>{"use strict";n.d(t,{y:()=>d});var a=n(96540),r=n(5260),l=n(14628),i=n(1547),o=n(83564),d=function(){return a.createElement(r.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},64775:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var a=n(58168),r=n(96540),l=n(78478),i=n(32594),o=n(20018),d=n(96109),s=n(11245),g=n(34397),p=n(50546),y=n(25407);const m=function(e){var t=e.params,n=e.containerStyle,m=void 0===n?{}:n;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(p.q9.Provider,null,r.createElement(p.Oy,{initialMetrics:y.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},m)},r.createElement(i.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),r.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(s.A,t.knobProps),r.createElement(d.A,t.errorProps),r.createElement(g.w,t.actions)))}))}},20306:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>c,toc:()=>h});var a=n(58168),r=n(98587),l=(n(96540),n(15680)),i=n(41298),o=(n(11470),n(19365),["components"]),d={toc:[{value:"Using font-weight on android",id:"using-font-weight-on-android",level:3}]},s="wrapper";function g(e){var t=e.components,n=(0,r.A)(e,o);return(0,l.yg)(s,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"<Text h2>Hello World</Text>\n")),(0,l.yg)("h3",{id:"using-font-weight-on-android"},"Using font-weight on android"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"For Android the font. weights MUST align with the used font. So try out which is the regarding font weight to your used font.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},"\n    h1Style: {\n      fontFamily: 'Nunito-SemiBold',\n      fontWeight: '300',\n    },\n    h2Style: {\n      fontFamily: 'Nunito-Regular',\n      fontWeight: '100',\n    },\n    h3Style: {\n      fontFamily: 'Nunito-Bold',\n      fontWeight: '500',\n    },\n")))}g.isMDXComponent=!0;var p=n(11624),y=["components"],m={id:"text",title:"Text"},u=void 0,c={unversionedId:"components/text",id:"version-4.0.0-rc.4/components/text",title:"Text",description:"Text displays words and characters of various sizes.",source:"@site/versioned_docs/version-4.0.0-rc.4/components/Text.mdx",sourceDirName:"components",slug:"/components/text",permalink:"/docs/4.0.0-rc.4/components/text",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.4/components/Text.mdx",tags:[],version:"4.0.0-rc.4",frontMatter:{id:"text",title:"Text"},sidebar:"docs",previous:{title:"TabView.Item",permalink:"/docs/4.0.0-rc.4/components/tabview_item"},next:{title:"Tile",permalink:"/docs/4.0.0-rc.4/components/tile"}},N={},h=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],f={toc:h},v="wrapper";function b(e){var t=e.components,n=(0,r.A)(e,y);return(0,l.yg)(v,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(i.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"Text displays words and characters of various sizes."),(0,l.yg)("h2",{id:"import"},"Import"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Text } from "@rneui/themed";\n')),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)(g,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"h1")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Text with Font size 40.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"h1Style")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"Styling when h1 is set.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"h2")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Text with Font size 34.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"h2Style")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"Styling when h2 is set.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"h3")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Text with Font size 28.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"h3Style")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"Styling when h3 is set.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"h4")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Text with Font size 22.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"h4Style")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"Styling when h4 is set.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"style")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"Add additional styling for Text."))))),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(p.A,{mdxType:"Play"}))}b.isMDXComponent=!0},83564:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14628:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},1547:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},52352:()=>{},18411:()=>{}}]);