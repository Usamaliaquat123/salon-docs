"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[3566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),p=n(91980),d=n(67392),u=n(50012);function s(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,d.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function k(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function g(e){var t,n,a,o,l=e.defaultValue,i=e.queryString,p=void 0!==i&&i,d=e.groupId,s=m(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:s})})),f=g[0],N=g[1],h=k({queryString:p,groupId:d}),C=h[0],b=h[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),y=v[0],A=v[1],w=function(){var e=null!=C?C:y;return c({value:e,tabValues:s})?e:null}();return(0,r.useEffect)((function(){w&&N(w)}),[w]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!c({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);N(e),b(e),A(e)}),[b,A,s]),tabValues:s}}var f=n(72389);const N="tabList__CuJ",h="tabItem_LNqP";function C(e){var t=e.className,n=e.block,i=e.selectedValue,p=e.selectValue,d=e.tabValues,u=[],s=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=u.indexOf(t),a=d[n].value;a!==i&&(s(t),p(a))},c=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;n=null!=(o=u[l])?o:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},d.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:c,onClick:m},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function v(e){var t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",N)},r.createElement(C,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function y(e){var t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>p});var a=n(67294),r=n(35742),o=n(14330),l=n(98576),i=n(61720),p=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},97794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(37047),i=(n(74866),n(85162),["components"]),p={toc:[]};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Web-platform specific note"),":"),(0,o.kt)("p",{parentName:"blockquote"},"You ",(0,o.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,o.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,o.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,o.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Tooltip ModalComponent={Modal} ... />\n...\n")),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Tooltip","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tooltip%2C%20Text%2C%20lightColors%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Dimensions%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0A%0Aconst%20%7B%20height%20%7D%20%3D%20Dimensions.get('window')%3B%0A%0Atype%20ToolTipComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20TooltipComponent%3A%20React.FunctionComponent%3CToolTipComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20toolProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginVertical%3A%20height%20%2F%208%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3Eno%20caret!%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20withPointer%3D%7Bfalse%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3Ewithout%20caret%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.primary%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.secondary%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3ETooltip%20info%20goes%20here%20too.%20Find%20tooltip%20everywhere%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20width%3A%20200%2C%20height%3A%2060%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20width%3A%20145%2C%20height%3A%20130%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Some%20big%20text%20full%20of%20important%20stuff%20for%20the%20super%20duper%20user%20that%20our%20design%20has%20been%20created%20for'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EHUGE%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.primary1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EMore%20attention%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.primary2%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EI'm%20different%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20justifyContent%3A%20'space-evenly'%2C%0A%20%20marginVertical%3A%2050%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20TooltipComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base,modal-react-native-web","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var u=["components"],s={id:"tooltip",title:"Tooltip"},m=void 0,c={unversionedId:"components/tooltip",id:"version-4.0.0-rc.6/components/tooltip",title:"Tooltip",description:"Tooltips display informative text when users tap on an element.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/Tooltip.mdx",sourceDirName:"components",slug:"/components/tooltip",permalink:"/docs/4.0.0-rc.6/components/tooltip",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/Tooltip.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"tooltip",title:"Tooltip"},sidebar:"docs",previous:{title:"Tile",permalink:"/docs/4.0.0-rc.6/components/tile"},next:{title:"Contributing",permalink:"/docs/4.0.0-rc.6/contributing"}},k={},g=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],f={toc:g};function N(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"Tooltips display informative text when users tap on an element."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Tooltip } from "@rneui/themed";\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(d,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ModalComponent")),(0,o.kt)("td",{parentName:"tr",align:null},"typeof Component"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Override React Native ",(0,o.kt)("inlineCode",{parentName:"td"},"Modal")," component (usable for web-platform).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"animationType")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"none")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"fade")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"fade")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"backgroundColor")),(0,o.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"#617080")),(0,o.kt)("td",{parentName:"tr",align:null},"Sets backgroundColor of the tooltip and pointer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"closeOnlyOnBackdropPress")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to determine whether to disable auto hiding of tooltip when touching/scrolling anywhere inside the active tooltip popover container. When ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", Tooltip closes only when overlay backdrop is pressed (or) highlighted tooltip button is pressed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}")),(0,o.kt)("td",{parentName:"tr",align:null},"Passes style object to tooltip container")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"height")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"40")),(0,o.kt)("td",{parentName:"tr",align:null},"Tooltip container height. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"highlightColor")),(0,o.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"transparent")),(0,o.kt)("td",{parentName:"tr",align:null},"Color to highlight the item the tooltip is surrounding.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onClose")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"Function which gets called on closing the tooltip.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onOpen")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"Function which gets called on opening the tooltip.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"overlayColor")),(0,o.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"#fafafa14")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of overlay shadow when tooltip is open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pointerColor")),(0,o.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"#617080")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of tooltip pointer, it defaults to the ",(0,o.kt)("a",{parentName:"td",href:"#backgroundcolor"},(0,o.kt)("inlineCode",{parentName:"a"},"backgroundColor"))," if none is passed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pointerStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Style to be applied on the pointer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"popover")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactElement<{}, string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Component to be rendered as the display container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"skipAndroidStatusBar")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Force skip StatusBar height when calculating element position. Pass ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," if Tooltip used inside react-native Modal component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"toggleAction")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPress")),(0,o.kt)("td",{parentName:"tr",align:null},"Define type of action that should trigger tooltip. Available options ",(0,o.kt)("em",{parentName:"td"},"onPress"),", ",(0,o.kt)("em",{parentName:"td"},"onLongPress"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"toggleOnPress")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to determine to toggle or not the tooltip on press.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"visible")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"To show the tooltip.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"width")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"150")),(0,o.kt)("td",{parentName:"tr",align:null},"Tooltip container width. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"withOverlay")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to determine whether or not display overlay shadow when tooltip is open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"withPointer")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to determine whether or not to display the pointer."))))))}N.isMDXComponent=!0},61720:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"}}]);