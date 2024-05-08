"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[53237],{85345:(e,t,a)=>{a.d(t,{A:()=>n});var l=a(67294);function n(e){var t=e.color,a=void 0===t?"#e2e2e2":t,n=e.alpha,r=void 0===n?.3:n,c=e.overlayColor,o=void 0===c?a+100*r:c,m=e.icon,i=e.size,s=e.padding,d=void 0===s?"6px":s,u=e.style;return l.createElement("div",{className:"inline-flex-center",style:Object.assign({backgroundColor:o,borderRadius:"6px",padding:d},u)},l.createElement(m,{fill:a,fontSize:i}))}},66182:(e,t,a)=>{a.d(t,{M:()=>m});var l=a(87462),n=a(63366),r=a(67294),c=a(85345),o=["size","header","subheader","primary","color","icon","noMargin"];function m(e){var t=e.size,a=void 0===t?"1.5rem":t,m=e.header,i=e.subheader,s=e.primary,d=e.color,u=e.icon,E=e.noMargin,g=(0,n.Z)(e,o);return r.createElement("div",{className:"container "+(E?"":"margin-vert--lg")},r.createElement("div",{className:"row"},r.createElement("div",null,u&&r.createElement(c.A,(0,l.Z)({icon:u,color:d,padding:8,size:a,style:{marginRight:12}},g))),r.createElement("div",null,r.createElement("h1",{className:s&&"gradient clip-text",style:{lineHeight:.8,margin:"4px 0px",color:d}},m),i&&r.createElement("small",null,i))))}},1217:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(67294),n=a(86091),r=a(52263),c=a(39960),o=a(44996),m=a(5434),i=a(97735);const s=function(){(0,r.Z)().siteConfig;return l.createElement("section",null,l.createElement("header",{className:"hero"},l.createElement("div",{className:"container  padding-vert--xl"},l.createElement("div",{className:"row padding-vert--md",style:{alignItems:"center"}},l.createElement("div",{className:"col col--3 col--offset-1"},l.createElement("img",{className:"rne-hero-logo",src:"/img/website/logo.png"})),l.createElement("div",{className:"col col--6 col--offset-1"},l.createElement("h1",{className:"hero__title"},"Salon App ",l.createElement("br",null),l.createElement("span",{className:"gradient clip-text"},"Documentation")," SDK toolkit"),l.createElement("h3",{className:""},"Raise Your Glass to Adventure: Discover, Connect, and Celebrate at the Best Local Saloons!"),l.createElement("div",null,l.createElement(c.Z,{className:"button button--primary margin-vert--sm margin-right--md ",style:{color:"white"},to:(0,o.Z)("/docs")},"Get Started")),l.createElement("div",{className:"ball",style:{left:80,top:"20%"}},l.createElement(i.pNp,null)),l.createElement("div",{className:"ball",style:{bottom:200,right:"5%"}},l.createElement(m.Cp4,null)),l.createElement("div",{className:"ball",style:{left:20,top:"70%"}},l.createElement(m.RZ0,null)),l.createElement("div",{className:"ball",style:{right:"40%",bottom:90}},l.createElement(m.Jn8,null)),l.createElement("div",{className:"ball",style:{left:"40%",top:180}},l.createElement(i.Eur,null)),l.createElement("div",{className:"ball",style:{right:270,top:140}},l.createElement(m.rEK,null)))))),l.createElement("svg",{className:"hero-wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 220"},l.createElement("path",{"fill-opacity":"1",d:"M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,90.7C672,64,768,32,864,32C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})))};var d=a(85345),u=[{title:"Cross-Platform",description:"Consistent design across android, iOS, and web. 30+ components designed to save development time.",img:m.bFs,color:"#894cff"},{title:"Easy to use",description:"Built completely in TypeScript. Starting your react native app has never been easier. Supports Expo too! ",img:m.xoN,color:"#ff5381"},{title:"Customizable",description:"Easily style any of our components just the way you want.",img:m.zmo,color:"#00b85c"},{title:"Community-Driven",description:"100% built by the community. We're here because we love open source.",img:m.q6M,color:"#328aff"}];const E=function(){return l.createElement("section",{className:"",id:"why"},l.createElement("div",{className:"container text--center"},l.createElement("h1",{className:"hero__title gradient clip-text"},"Why Salon App Documentation?")),l.createElement("div",{className:"container"},l.createElement("div",{className:"row is-multiline"},u.map((function(e,t){var a=e.title,n=e.description,r=e.img,o=e.color;return l.createElement("div",{className:"col col--3",key:t},l.createElement(c.Z,{className:"card shadow--md",style:{height:"100%"}},l.createElement("div",{className:"card__body"},l.createElement("h4",{className:"gradient clip-text inline-flex-center"},l.createElement(d.A,{icon:r,color:o,style:{marginRight:8}}),a),l.createElement("p",{className:"p--desc",style:{lineHeight:1.4,fontSize:"0.8rem"}},n))))})))))};var g=a(96711);const p=function(){return l.createElement(l.Fragment,null,l.createElement("section",{className:"margin-vert--xl"},l.createElement("div",{className:"container "},l.createElement("div",{className:"row",style:{alignItems:"center"}},l.createElement("div",{className:"col col--5 text--center"},l.createElement("h6",{className:"hero__title gradient clip-text"},"How to get started?")),l.createElement("div",{className:"col col--7 "},l.createElement("p",null,l.createElement("b",null,"1. Before Installing make sure your you had a npmrc private token"),l.createElement("p",{className:"margin-vert--md margin-horiz--md"},l.createElement(g.Z,{language:"tsx"},"\n@umar-epacken:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=NPM_TOKEN\n\n# This is how to login in the cli to publish a pacakge via github\n# npm login --scope=@umar-epacken  --registry=https://npm.pkg.github.com\n\n")),l.createElement("b",null,"2. Install the @umar-epacken/saloon-data package from the NPM and YARN"),l.createElement("p",{className:"margin-vert--md margin-horiz--md"},l.createElement(g.Z,{language:"bash"},"npm install @umar-epacken/saloon-data"))))))))};const h=function(){return l.createElement("section",{id:"expo"})};var v=a(66182);const N=function(){return l.createElement(l.Fragment,null,l.createElement("section",{className:"margin-vert--xl",id:"community"},l.createElement("div",{className:"container"},l.createElement(v.M,{color:"#00A98F",header:"Community",subheader:"We are a community of developers who love React Native.",icon:m.Zs9})),l.createElement("div",{className:"container"},l.createElement("div",{className:"row margin-horiz--lg is-multiline"},l.createElement("div",{className:"col col--4"},l.createElement(c.Z,{style:{height:"100%",backgroundColor:"#1DA1F2",color:"white"},className:"card shadow--md"},l.createElement("div",{className:"card__body padding--lg"},l.createElement("h3",{className:"margin-bottom--sm "},l.createElement(i.mWf,{fill:"#fff"})),l.createElement("h4",null,"Stay up to date "),l.createElement("b",null,"Follow us on Twitter to get the latest updates.")))),l.createElement("div",{className:"col col--4"},l.createElement(c.Z,{style:{backgroundColor:"#5865F2",color:"white"},className:"card shadow--md"},l.createElement("div",{className:"card__body padding--lg"},l.createElement("h3",{className:"margin-bottom--sm "},l.createElement(i.Mqf,{fill:"#fff"})),l.createElement("h4",null,"Talk to us"),l.createElement("b",null,"Have any other question? or like to say Hi! to the RNE community,")))),l.createElement("div",{className:"col col--4"},l.createElement(c.Z,{style:{backgroundColor:"#F58025",color:"white"},className:"card shadow--md"},l.createElement("div",{className:"card__body padding--lg"},l.createElement("h3",{className:"margin-bottom--sm "},l.createElement(i.tLB,{fill:"#fff"})),l.createElement("h4",null,"Any question?"),l.createElement("b",null,"Have any other question? or like to say Hi! to the RNE community,"))))))))};var f=function(){return l.createElement(l.Fragment,null)},y=function(){return l.createElement("section",{id:"sponsor",className:"container"})};const b=function(){(0,r.Z)().siteConfig;return l.createElement(n.Z,null,l.createElement(s,null),l.createElement(E,null),l.createElement(p,null),l.createElement(h,null),l.createElement(f,null),l.createElement(y,null),l.createElement(N,null))}},22365:(e,t,a)=>{a.d(t,{Z:()=>w});var l=a(63366),n=a(87462),r=a(67294),c=a(10407),o=a(86010),m=(a(95999),a(52263)),i=a(91262),s=a(66412);const d="playgroundContainer_TGbA",u="playgroundEditor_PvJ1",E="playgroundPreview_bb8I",g="toggleContainer_ZZiH",p="toggleIcon_OnrQ",h="showCode_O0Od";var v=a(72389),N=a(5434),f=["children","transformCode"];function y(){return r.createElement("div",null,"Loading...")}function b(e){var t=(0,v.Z)(),a=(0,r.useContext)(c.L2),l=a.code,o=a.language,m=a.theme,i=a.disabled,s=a.onChange;return r.createElement(c.uz,(0,n.Z)({key:String(t),code:l,language:o,theme:m,disabled:i,onChange:s},e,{className:u}))}function C(e){var t=e.showCode,a=e.preImports,l=void 0===a?"":a,n=(e.wrapper,r.useState(t)),m=n[0],s=n[1],d=function(){s((function(e){return!e}))};return r.createElement(r.Fragment,null,r.createElement("div",{className:E},r.createElement(i.Z,{fallback:r.createElement(y,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(c.i5,null),r.createElement(c.IF,null),r.createElement("div",{className:g},r.createElement("div",{className:(0,o.Z)(p),onClick:d},r.createElement(N.xoN,null),r.createElement("span",{className:h},m?"Hide":"Show"," Code"))))}))),m&&r.createElement(b,{preImports:l,showCode:m}))}function w(e){var t=e.children,a=(e.transformCode,(0,l.Z)(e,f)),o=((0,m.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return r.createElement("div",{className:d},r.createElement(c.nu,(0,n.Z)({code:t.replace(/\n$/,""),theme:o},a),r.createElement(C,{showCode:a.showCode})))}},56922:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),n=a(32408),r=a(13925),c=a(53211),o=a(83279);const m=Object.assign({React:l,LinearGradient:o.Z},n,r,c,l)}}]);