"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[88714,81774],{50010:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ke});var a=n(96540),r=n(20053),l=n(69024),o=n(17559),i=n(2967),c=n(76153),d=n(32252),s=n(26588),m=n(28653),u=n(21312),b=n(23104),p=n(75062);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function v(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],o=(0,a.useRef)(!1),i=(0,b.gk)(),c=i.startScroll,d=i.cancelScroll;return(0,b.Mq)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(d(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.$)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.A)("clean-btn",o.G.common.backToTopButton,h.backToTopButton,t&&h.backToTopButtonShow),type:"button",onClick:n})}var E=n(53109),f=n(56347),g=n(24581),_=n(6342),A=n(23465),C=n(58168);function k(e){return a.createElement("svg",(0,C.A)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.A)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(k,{className:S.collapseSidebarButtonIcon}))}var T=n(65041),I=n(98587),x=n(43807),w=Symbol("EmptyContext"),B=a.createContext(w);function y(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],o=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(B.Provider,{value:o},t)}var L=n(41422),M=n(99169),P=n(75489),H=n(92303),G=["item","onItemClick","activePath","level","index"];function F(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function W(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,d=e.index,s=(0,I.A)(e,G),m=t.items,u=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,_.p)().docs.sidebar.autoCollapseCategories,E=function(e){var t=(0,H.A)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c._o)(e):void 0}),[e,t])}(t),f=(0,c.w8)(t,l),g=(0,M.ys)(h,l),A=(0,L.u)({initialState:function(){return!!b&&(!f&&t.collapsed)}}),k=A.collapsed,S=A.setCollapsed,N=function(){var e=(0,a.useContext)(B);if(e===w)throw new x.dV("DocSidebarItemsExpandedStateProvider");return e}(),T=N.expandedItem,y=N.setExpandedItem,W=function(e){void 0===e&&(e=!k),y(e?null:d),S(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,x.ZC)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:f,collapsed:k,updateCollapsed:W}),(0,a.useEffect)((function(){b&&null!=T&&T!==d&&v&&S(!0)}),[b,T,d,S,v]),a.createElement("li",{className:(0,r.A)(o.G.docs.docSidebarItemCategory,o.G.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,r.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(P.A,(0,C.A)({className:(0,r.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?function(e){null==n||n(t),h?W(!1):(e.preventDefault(),W())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!k:void 0,href:b?null!=E?E:"#":E},s),u),h&&b&&a.createElement(F,{categoryLabel:u,onClick:function(e){e.preventDefault(),W()}})),a.createElement(L.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(Z,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:l,level:i+1})))}var D=n(16654),V=n(43186);const U={menuExternalLink:"menuExternalLink_NmtK"};var z=["item","onItemClick","activePath","level","index"];function R(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,d=(e.index,(0,I.A)(e,z)),s=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c.w8)(t,l),h=(0,D.A)(s);return a.createElement("li",{className:(0,r.A)(o.G.docs.docSidebarItemLink,o.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:m},a.createElement(P.A,(0,C.A)({className:(0,r.A)("menu__link",!h&&U.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},h&&{onClick:n?function(){return n(t)}:void 0},d),m,!h&&a.createElement(V.A,null)))}const j={menuHtmlItem:"menuHtmlItem_M9Kj"};function K(e){var t=e.item,n=e.level,l=e.index,i=t.value,c=t.defaultStyle,d=t.className;return a.createElement("li",{className:(0,r.A)(o.G.docs.docSidebarItemLink,o.G.docs.docSidebarItemLinkLevel(n),c&&[j.menuHtmlItem,"menu__list-item"],d),key:l,dangerouslySetInnerHTML:{__html:i}})}var q=["item"];function O(e){var t=e.item,n=(0,I.A)(e,q);switch(t.type){case"category":return a.createElement(W,(0,C.A)({item:t},n));case"html":return a.createElement(K,(0,C.A)({item:t},n));default:return a.createElement(R,(0,C.A)({item:t},n))}}var X=["items"];function Y(e){var t=e.items,n=(0,I.A)(e,X);return a.createElement(y,null,t.map((function(e,t){return a.createElement(O,(0,C.A)({key:t,item:e,index:t},n))})))}const Z=(0,a.memo)(Y),$={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function J(e){var t=e.path,n=e.sidebar,l=e.className,i=function(){var e=(0,T.Mj)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.Mq)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{"aria-label":(0,u.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.A)("menu thin-scrollbar",$.menu,i&&$.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,r.A)(o.G.docs.docSidebarMenu,"menu__list")},a.createElement(Z,{items:n,activePath:t,level:1})))}const Q="sidebar_njMd",ee="sidebarWithHideableNavbar_wUlq",te="sidebarHidden_VK0M",ne="sidebarLogo_isFc";function ae(e){var t=e.path,n=e.sidebar,l=e.onCollapse,o=e.isHidden,i=(0,_.p)(),c=i.navbar.hideOnScroll,d=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.A)(Q,c&&ee,o&&te)},c&&a.createElement(A.A,{tabIndex:-1,className:ne}),a.createElement(J,{path:t,sidebar:n}),d&&a.createElement(N,{onClick:l}))}const re=a.memo(ae);var le=n(75600),oe=n(22069),ie=function(e){var t=e.sidebar,n=e.path,l=(0,oe.M)();return a.createElement("ul",{className:(0,r.A)(o.G.docs.docSidebarMenu,"menu__list")},a.createElement(Z,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ce(e){return a.createElement(le.GX,{component:ie,props:e})}const de=a.memo(ce);function se(e){var t=(0,g.l)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(re,e),r&&a.createElement(de,e))}const me={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function ue(e){var t=e.toggleSidebar;return a.createElement("div",{className:me.expandButton,title:(0,u.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(k,{className:me.expandButtonIcon}))}const be={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function pe(e){var t,n=e.children,r=(0,s.t)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function he(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,f.zy)().pathname,c=(0,a.useState)(!1),d=c[0],s=c[1],m=(0,a.useCallback)((function(){d&&s(!1),!d&&(0,E.O)()&&s(!0),l((function(e){return!e}))}),[l,d]);return a.createElement("aside",{className:(0,r.A)(o.G.docs.docSidebarContainer,be.docSidebarContainer,n&&be.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(be.docSidebarContainer)&&n&&s(!0)}},a.createElement(pe,null,a.createElement("div",{className:(0,r.A)(be.sidebarViewport,d&&be.sidebarViewportHidden)},a.createElement(se,{sidebar:t,path:i,onCollapse:m,isHidden:d}),d&&a.createElement(ue,{toggleSidebar:m}))))}const ve={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,s.t)();return a.createElement("main",{className:(0,r.A)(ve.docMainContainer,(t||!l)&&ve.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.A)("container padding-top--md padding-bottom--lg",ve.docItemWrapper,t&&ve.docItemWrapperEnhanced)},n))}const fe={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function ge(e){var t=e.children,n=(0,s.t)(),r=(0,a.useState)(!1),l=r[0],o=r[1];return a.createElement(m.A,{wrapperClassName:fe.docsWrapper},a.createElement(v,null),a.createElement("div",{className:fe.docPage},n&&a.createElement(he,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(Ee,{hiddenSidebarContainer:l},t)))}var _e=n(81774),Ae=n(41463);function Ce(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Ae.A,{version:t.version,tag:(0,i.tU)(t.pluginId,t.version)}),a.createElement(l.be,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ke(e){var t=e.versionMetadata,n=(0,c.mz)(e);if(!n)return a.createElement(_e.default,null);var i=n.docElement,m=n.sidebarName,u=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Ce,e),a.createElement(l.e3,{className:(0,r.A)(o.G.wrapper.docsPages,o.G.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.n,{version:t},a.createElement(s.V,{name:m,items:u},a.createElement(ge,null,i)))))}},81774:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(96540),r=n(21312),l=n(69024),o=n(28653);function i(){return a.createElement(a.Fragment,null,a.createElement(l.be,{title:(0,r.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.A,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},32252:(e,t,n)=>{n.d(t,{n:()=>o,r:()=>i});var a=n(96540),r=n(43807),l=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(l);if(null===e)throw new r.dV("DocsVersionProvider");return e}}}]);