(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[85876],{81384:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var n=a(96540),r=a(58040),l=a(64775),o=a(10171),i=a(11451);const d=function(){var e=(0,o.A)({componentName:"SearchBar",props:{platform:{value:"default",options:{default:"default",ios:"ios",android:"android"},type:i.B.Enum,description:"Defines the Platfrom."},clearIcon:{type:i.B.Object,value:""},searchIcon:{type:i.B.Object,value:""},cancelIcon:{type:i.B.Object,value:"",description:"Android Only"},containerStyle:{type:i.B.Object,value:"{}"},inputContainerStyle:{type:i.B.Object,value:"{}"},inputStyle:{type:i.B.Object,value:"{}"},leftIconContainerStyle:{type:i.B.Object,value:"{}"},rightIconContainerStyle:{type:i.B.Object,value:"{}"},lightTheme:{type:i.B.Boolean,value:!1,description:"Default (platform) only "},loadingProps:{type:i.B.Object,value:"{}"},onChangeText:{type:i.B.Function,value:"(newVal) => setValue(newVal)"},onClearText:{type:i.B.Function,value:"() => console.log(onClearText())"},placeholder:{type:i.B.String,value:"Type query here..."},placeholderTextColor:{type:i.B.String,value:"#888"},round:{type:i.B.Boolean,value:!1,description:"Default (platform) only "},showCancel:{type:i.B.Boolean,value:!1,description:"ios (platform) only "},showLoading:{type:i.B.Boolean,value:!1,description:"Shows loader"},underlineColorAndroid:{type:i.B.String,value:""},cancelButtonTitle:{type:i.B.String,value:"Cancel",description:"ios (platform) only "},cancelButtonProps:{type:i.B.Object,value:"{}",description:"ios (platform) only "},onCancel:{type:i.B.Function,value:"() => console.log(onCancel())"},value:{type:i.B.String,value:"",stateful:!0}},scope:{SearchBar:r.SearchBar},imports:{"@rneui/base":{named:["SearchBar"]}}});return n.createElement(n.Fragment,null,n.createElement(l.A,{params:e}))}},41298:(e,t,a)=>{"use strict";a.d(t,{y:()=>d});var n=a(96540),r=a(5260),l=a(14628),o=a(1547),i=a(83564),d=function(){return n.createElement(r.A,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},64775:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});var n=a(58168),r=a(96540),l=a(78478),o=a(32594),i=a(20018),d=a(96109),g=a(11245),c=a(34397),p=a(50546),y=a(25407);const m=function(e){var t=e.params,a=e.containerStyle,m=void 0===a?{}:a;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(p.q9.Provider,null,r.createElement(p.Oy,{initialMetrics:y.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},m)},r.createElement(o.A,(0,n.A)({},t.compilerProps,{minHeight:62,placeholder:i.A}))),r.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(g.A,t.knobProps),r.createElement(d.A,t.errorProps),r.createElement(c.w,t.actions)))}))}},4588:(e,t,a)=>{"use strict";a.d(t,{A:()=>f});var n=a(98587),r=a(58168),l=a(96540),o=a(95404),i=a(20053),d=(a(21312),a(44586)),g=a(78478),c=a(26058);const p={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var y=a(92303),m=a(59644),s=["children","transformCode"];function u(){return l.createElement("div",null,"Loading...")}function h(e){var t=(0,y.A)(),a=(0,l.useContext)(o.MY),n=a.code,i=a.language,d=a.theme,g=a.disabled,c=a.onChange;return l.createElement(o.w,(0,r.A)({key:String(t),code:n,language:i,theme:d,disabled:g,onChange:c},e,{className:p.playgroundEditor}))}function N(e){var t=e.showCode,a=e.preImports,n=void 0===a?"":a,r=(e.wrapper,l.useState(t)),d=r[0],c=r[1],y=function(){c((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:p.playgroundPreview},l.createElement(g.A,{fallback:l.createElement(u,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.pA,null),l.createElement(o.p1,null),l.createElement("div",{className:p.toggleContainer},l.createElement("div",{className:(0,i.A)(p.toggleIcon),onClick:y},l.createElement(m.luQ,null),l.createElement("span",{className:p.showCode},d?"Hide":"Show"," Code"))))}))),d&&l.createElement(h,{preImports:n,showCode:d}))}function f(e){var t=e.children,a=(e.transformCode,(0,n.A)(e,s)),i=((0,d.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,c.A)());return l.createElement("div",{className:p.playgroundContainer},l.createElement(o.Q,(0,r.A)({code:t.replace(/\n$/,""),theme:i},a),l.createElement(N,{showCode:a.showCode})))}},51433:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var n=a(96540),r=a(36480),l=a(58040),o=a(45550),i=a(91147);const d=Object.assign({React:n,LinearGradient:i.A},r,l,o,n)},33718:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>B,frontMatter:()=>u,metadata:()=>N,toc:()=>b});var n=a(58168),r=a(98587),l=(a(96540),a(15680)),o=a(41298),i=(a(11470),a(19365),a(21619)),d=a(35504),g=["components"],c={toc:[{value:"Default SearchBar",id:"default-searchbar",level:3},{value:"Platform specific SearchBar",id:"platform-specific-searchbar",level:3},{value:"Interaction methods",id:"interaction-methods",level:3},{value:'<a name="calling"></a> Calling methods on SearchBar',id:"-calling-methods-on-searchbar",level:4}]},p="wrapper";function y(e){var t=e.components,a=(0,r.A)(e,g);return(0,l.yg)(p,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"default-searchbar"},"Default SearchBar"),(0,l.yg)("img",{src:"../../../img/searchbar.png",width:"300"}),(0,l.yg)("h3",{id:"platform-specific-searchbar"},"Platform specific SearchBar"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"iOS")),(0,l.yg)("img",{src:"https://user-images.githubusercontent.com/17592779/31585176-b124cdae-b1bd-11e7-809f-ba966cebc663.gif",width:"300"}),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Android")),(0,l.yg)("img",{src:"https://user-images.githubusercontent.com/17592779/31586716-f6e8ff9c-b1d4-11e7-918f-2a7e11d51b08.gif",width:"300"}),(0,l.yg)("h3",{id:"interaction-methods"},"Interaction methods"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"method"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"focus"),(0,l.yg)("td",{parentName:"tr",align:null},"call focus on the textinput (",(0,l.yg)("a",{parentName:"td",href:"#calling"},"example"),")")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"blur"),(0,l.yg)("td",{parentName:"tr",align:null},"call blur on the textinput (",(0,l.yg)("a",{parentName:"td",href:"#calling"},"example"),")")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"clear"),(0,l.yg)("td",{parentName:"tr",align:null},"call clear on the textinput (",(0,l.yg)("a",{parentName:"td",href:"#calling"},"example"),")")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cancel"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"(Android and iOS SearchBars only)")," call cancel on the SearchBar (left arrow on Android, Cancel button on iOS). This will basically blur the input and hide the keyboard (",(0,l.yg)("a",{parentName:"td",href:"#calling"},"example"),")")))),(0,l.yg)("h4",{id:"-calling-methods-on-searchbar"},(0,l.yg)("a",{name:"calling"})," Calling methods on SearchBar"),(0,l.yg)("p",null,"Store a reference to the SearchBar in your component by using the ref prop\nprovided by React\n(",(0,l.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"see docs"),"):"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"<SearchBar\n  ref={search => this.search = search}\n  ...\n/>\n")),(0,l.yg)("p",null,"You can then access SearchBar methods like so:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'this.search.focus();\nthis.search.blur();\nthis.search.clear();\nthis.search.cancel(); // Only available if `platform` props is "ios"\xa0| "android"\n')),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE SearchBar","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20SearchBar%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20SearchBarComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SwitchComponent%3A%20React.FunctionComponent%3CSearchBarComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bsearch%2C%20setSearch%5D%20%3D%20useState(%22%22)%3B%0A%0Aconst%20updateSearch%20%3D%20(search)%20%3D%3E%20%7B%0A%20%20setSearch(search)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%3CSearchBar%0A%20%20%20%20%20%20placeholder%3D%22Type%20Here...%22%0A%20%20%20%20%20%20onChangeText%3D%7BupdateSearch%7D%0A%20%20%20%20%20%20value%3D%7Bsearch%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20SwitchComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}y.isMDXComponent=!0;var m=a(81384),s=["components"],u={id:"searchbar",title:"SearchBar"},h=void 0,N={unversionedId:"components/searchbar",id:"version-4.0.0-rc.7/components/searchbar",title:"SearchBar",description:"Usage",source:"@site/versioned_docs/version-4.0.0-rc.7/components/SearchBar.mdx",sourceDirName:"components",slug:"/components/searchbar",permalink:"/docs/4.0.0-rc.7/components/searchbar",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/SearchBar.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"searchbar",title:"SearchBar"},sidebar:"docs",previous:{title:"PricingCard",permalink:"/docs/4.0.0-rc.7/components/pricingcard"},next:{title:"Slider",permalink:"/docs/4.0.0-rc.7/components/slider"}},f={},b=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],v={toc:b},C="wrapper";function B(e){var t=e.components,a=(0,r.A)(e,s);return(0,l.yg)(C,(0,n.A)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(o.y,{mdxType:"IconsStyle"}),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("div",{class:"row inline-flex-center"},(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Import")),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"import { SearchBar } from '@rneui/themed';")),(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Theme Key"," ",(0,l.yg)("a",{href:"../customizing#using-themeprovider"},(0,l.yg)(d.wfp,{mdxType:"BiInfoCircle"})))),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"SearchBar"))),(0,l.yg)(y,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"input#props"},"Input")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cancelButtonProps")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cancelButtonTitle")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cancelIcon")),(0,l.yg)("td",{parentName:"tr",align:null},"IconNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"clearIcon")),(0,l.yg)("td",{parentName:"tr",align:null},"IconNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Clear Icon")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style for container")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"inputContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style for input container")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"inputStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Input Style")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"leftIconContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Left Icon Container Style")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"lightTheme")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"loadingProps")),(0,l.yg)("td",{parentName:"tr",align:null},"ActivityIndicatorProps"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"ActivityIndicatorProps")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onCancel")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"(() => any)")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"(() => any)")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Callback Function on cancel icon press")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onClear")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onKeyboardHide")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Callback Function on keyboard hides")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"platform")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"default")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"android")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"ios")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"default")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"rightIconContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Right Icon Container Style")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"round")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"searchIcon")),(0,l.yg)("td",{parentName:"tr",align:null},"IconNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Icon for search")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"showCancel")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Show cancel")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"showLoading")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Show loading"))))),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(m.A,{mdxType:"Play"}))}B.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);