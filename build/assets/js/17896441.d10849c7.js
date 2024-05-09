"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[18401],{10652:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ge});var n=a(96540),l=a(69024),r=a(43807),o=n.createContext(null);function s(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(o.Provider,{value:a},t)}function c(){var e=(0,n.useContext)(o);if(null===e)throw new r.dV("DocProvider");return e}function i(){var e,t=c(),a=t.metadata,r=t.frontMatter,o=t.assets;return n.createElement(l.be,{title:a.title,description:a.description,keywords:r.keywords,image:null!=(e=o.image)?e:r.image})}var d=a(20053),m=a(24581),u=a(58168),v=a(21312),p=a(75489);function b(e){var t=e.permalink,a=e.title,l=e.subLabel,r=e.isNext;return n.createElement(p.A,{className:(0,d.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function g(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(b,(0,u.A)({},t,{subLabel:n.createElement(v.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(b,(0,u.A)({},a,{subLabel:n.createElement(v.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function E(){var e=c().metadata;return n.createElement(g,{previous:e.previous,next:e.next})}var h=a(44586),f=a(44070),A=a(17559),C=a(55597),_=a(32252);var N={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){var t=N[e.versionMetadata.banner];return n.createElement(t,e)}function w(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(v.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(p.A,{to:a,onClick:l},n.createElement(v.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){var t,a=e.className,l=e.versionMetadata,r=(0,h.A)().siteConfig.title,o=(0,f.vT)({failfast:!0}).pluginId,s=(0,C.g1)(o).savePreferredVersionName,c=(0,f.HW)(o),i=c.latestDocSuggestion,m=c.latestVersionSuggestion,u=null!=i?i:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.A)(a,A.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(L,{siteTitle:r,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(w,{versionLabel:m.label,to:u.path,onClick:function(){return s(m.name)}})))}function k(e){var t=e.className,a=(0,_.r)();return a.banner?n.createElement(T,{className:t,versionMetadata:a}):null}function y(e){var t=e.className,a=(0,_.r)();return a.badge?n.createElement("span",{className:(0,d.A)(t,A.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(v.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function U(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(v.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function x(e){var t=e.lastUpdatedBy;return n.createElement(v.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function M(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:A.G.common.lastUpdated},n.createElement(v.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(x,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var B=a(98587);const I={iconEdit:"iconEdit_Z9Sw"};var H=["className"];function P(e){var t=e.className,a=(0,B.A)(e,H);return n.createElement("svg",(0,u.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.A)(I.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function V(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:A.G.common.editThisPage},n.createElement(P,null),n.createElement(v.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var G=a(56133);const S={tags:"tags_jXut",tag:"tag_QGVx"};function D(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(v.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.A)(S.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:S.tag},n.createElement(G.A,{label:t,permalink:a}))}))))}const O={lastUpdated:"lastUpdated_vwxv"};function F(e){return n.createElement("div",{className:(0,d.A)(A.G.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(D,e)))}function R(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.A)(A.G.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(V,{editUrl:t})),n.createElement("div",{className:(0,d.A)("col",O.lastUpdated)},(a||l)&&n.createElement(M,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function j(){var e=c().metadata,t=e.editUrl,a=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,r=e.lastUpdatedBy,o=e.tags,s=o.length>0,i=!!(t||a||r);return s||i?n.createElement("footer",{className:(0,d.A)(A.G.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(F,{tags:o}),i&&n.createElement(R,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var z=a(41422),Q=a(65195);const W={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var Z=["collapsed"];function q(e){var t=e.collapsed,a=(0,B.A)(e,Z);return n.createElement("button",(0,u.A)({type:"button"},a,{className:(0,d.A)("clean-btn",W.tocCollapsibleButton,!t&&W.tocCollapsibleButtonExpanded,a.className)}),n.createElement(v.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const Y={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function J(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,r=e.maxHeadingLevel,o=(0,z.u)({initialState:!0}),s=o.collapsed,c=o.toggleCollapsed;return n.createElement("div",{className:(0,d.A)(Y.tocCollapsible,!s&&Y.tocCollapsibleExpanded,a)},n.createElement(q,{collapsed:s,onClick:c}),n.createElement(z.N,{lazy:!0,className:Y.tocCollapsibleContent,collapsed:s},n.createElement(Q.A,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const X={tocMobile:"tocMobile_ITEo"};function $(){var e=c(),t=e.toc,a=e.frontMatter;return n.createElement(J,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.A)(A.G.docs.docTocMobile,X.tocMobile)})}var K=a(67763);function ee(){var e=c(),t=e.toc,a=e.frontMatter;return n.createElement(K.A,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:A.G.docs.docTocDesktop})}var te=a(51107),ae=a(58838);function ne(e){var t,a,l,r,o=e.children,s=(t=c(),a=t.metadata,l=t.frontMatter,r=t.contentTitle,l.hide_title||void 0!==r?null:a.title);return n.createElement("div",{className:(0,d.A)(A.G.docs.docMarkdown,"markdown")},s&&n.createElement("header",null,n.createElement(te.A,{as:"h1"},s)),n.createElement(ae.A,null,o))}var le=a(76153),re=a(99169),oe=a(86025);function se(e){return n.createElement("svg",(0,u.A)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ce={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ie(){var e=(0,oe.A)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(p.A,{"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(se,{className:ce.breadcrumbHomeIcon})))}const de={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function me(e){var t=e.children,a=e.href,l="breadcrumbs__link";return e.isLast?n.createElement("span",{className:l,itemProp:"name"},t):a?n.createElement(p.A,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l},t)}function ue(e){var t=e.children,a=e.active,l=e.index,r=e.addMicrodata;return n.createElement("li",(0,u.A)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ve(){var e=(0,le.OF)(),t=(0,re.Dt)();return e?n.createElement("nav",{className:(0,d.A)(A.G.docs.docBreadcrumbs,de.breadcrumbsContainer),"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ie,null),e.map((function(t,a){var l=a===e.length-1;return n.createElement(ue,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(me,{href:t.href,isLast:l},t.label))})))):null}const pe={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function be(e){var t,a,l,r,o,s,i=e.children,u=(t=c(),a=t.frontMatter,l=t.toc,r=(0,m.l)(),o=a.hide_table_of_contents,s=!o&&l.length>0,{hidden:o,mobile:s?n.createElement($,null):void 0,desktop:!s||"desktop"!==r&&"ssr"!==r?void 0:n.createElement(ee,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.A)("col",!u.hidden&&pe.docItemCol)},n.createElement(k,null),n.createElement("div",{className:pe.docItemContainer},n.createElement("article",null,n.createElement(ve,null),n.createElement(y,null),u.mobile,n.createElement(ne,null,i),n.createElement(j,null)),n.createElement(E,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function ge(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.e3,{className:t},n.createElement(i,null),n.createElement(be,null,n.createElement(a,null))))}},56133:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540),l=a(20053),r=a(75489);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){var t=e.permalink,a=e.label,s=e.count;return n.createElement(r.A,{href:t,className:(0,l.A)(o.tag,s?o.tagWithCount:o.tagRegular)},a,s&&n.createElement("span",null,s))}},32252:(e,t,a)=>{a.d(t,{n:()=>o,r:()=>s});var n=a(96540),l=a(43807),r=n.createContext(null);function o(e){var t=e.children,a=e.version;return n.createElement(r.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(r);if(null===e)throw new l.dV("DocsVersionProvider");return e}},4588:(e,t,a)=>{a.d(t,{A:()=>h});var n=a(98587),l=a(58168),r=a(96540),o=a(95404),s=a(20053),c=(a(21312),a(44586)),i=a(78478),d=a(26058);const m={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var u=a(92303),v=a(59644),p=["children","transformCode"];function b(){return r.createElement("div",null,"Loading...")}function g(e){var t=(0,u.A)(),a=(0,r.useContext)(o.MY),n=a.code,s=a.language,c=a.theme,i=a.disabled,d=a.onChange;return r.createElement(o.w,(0,l.A)({key:String(t),code:n,language:s,theme:c,disabled:i,onChange:d},e,{className:m.playgroundEditor}))}function E(e){var t=e.showCode,a=e.preImports,n=void 0===a?"":a,l=(e.wrapper,r.useState(t)),c=l[0],d=l[1],u=function(){d((function(e){return!e}))};return r.createElement(r.Fragment,null,r.createElement("div",{className:m.playgroundPreview},r.createElement(i.A,{fallback:r.createElement(b,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(o.pA,null),r.createElement(o.p1,null),r.createElement("div",{className:m.toggleContainer},r.createElement("div",{className:(0,s.A)(m.toggleIcon),onClick:u},r.createElement(v.luQ,null),r.createElement("span",{className:m.showCode},c?"Hide":"Show"," Code"))))}))),c&&r.createElement(g,{preImports:n,showCode:c}))}function h(e){var t=e.children,a=(e.transformCode,(0,n.A)(e,p)),s=((0,c.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,d.A)());return r.createElement("div",{className:m.playgroundContainer},r.createElement(o.Q,(0,l.A)({code:t.replace(/\n$/,""),theme:s},a),r.createElement(E,{showCode:a.showCode})))}},51433:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(96540),l=a(36480),r=a(58040),o=a(45550),s=a(91147);const c=Object.assign({React:n,LinearGradient:s.A},l,r,o,n)}}]);