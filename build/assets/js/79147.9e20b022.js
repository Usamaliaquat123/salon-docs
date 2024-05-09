"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[79147],{79147:(e,t,n)=>{n.r(t),n.d(t,{AccessibilityInfo:()=>b,ActivityIndicator:()=>ge.A,Alert:()=>g,Animated:()=>p.A,AppRegistry:()=>k,AppState:()=>Y,Appearance:()=>R,BackHandler:()=>Z,Button:()=>me,CheckBox:()=>De,Clipboard:()=>X,DeviceEventEmitter:()=>nn,DeviceInfo:()=>J,Dimensions:()=>q.A,DrawerLayoutAndroid:()=>Kt,Easing:()=>Q.A,FlatList:()=>Ce.A,I18nManager:()=>$.A,Image:()=>Ne.A,ImageBackground:()=>Ie.A,InputAccessoryView:()=>Xt,InteractionManager:()=>te.A,Keyboard:()=>ee.A,KeyboardAvoidingView:()=>we.A,LayoutAnimation:()=>ne.A,Linking:()=>ae,LogBox:()=>Zt,Modal:()=>Le.A,NativeEventEmitter:()=>se,NativeModules:()=>c.A,PanResponder:()=>le.A,PermissionsAndroid:()=>Qt,Picker:()=>xe,PixelRatio:()=>ce.A,Platform:()=>ue.A,Pressable:()=>Ue.A,ProgressBar:()=>Ye,RefreshControl:()=>Fe.A,SafeAreaView:()=>Ze.A,ScrollView:()=>Ke.A,SectionList:()=>Xe.A,Settings:()=>$t,Share:()=>de,StatusBar:()=>qe.A,StyleSheet:()=>_.A,Switch:()=>Je.A,Systrace:()=>en,TVEventHandler:()=>tn,Text:()=>ve.A,TextInput:()=>Qe.A,ToastAndroid:()=>qt,Touchable:()=>Ht,TouchableHighlight:()=>xt.A,TouchableNativeFeedback:()=>Ut.A,TouchableOpacity:()=>pe.A,TouchableWithoutFeedback:()=>zt.A,UIManager:()=>Ee.A,Vibration:()=>be,View:()=>P.A,VirtualizedList:()=>Bt,YellowBox:()=>Ft,findNodeHandle:()=>r.A,processColor:()=>i.A,render:()=>s,unmountComponentAtNode:()=>l,unstable_createElement:()=>o.A,useColorScheme:()=>on,useWindowDimensions:()=>rn});var o=n(35131),r=n(4992),i=n(2901),a=n(40961);const s=a.render,l=a.unmountComponentAtNode;var c=n(57947),u=n(18367);function h(){return new Promise((function(e,t){e(!0)}))}var d=u.canUseDOM&&"function"==typeof window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):null;var E={},f={isScreenReaderEnabled:h,isReduceMotionEnabled:function(){return new Promise((function(e,t){e(!d||d.matches)}))},fetch:h,addEventListener:function(e,t){if("reduceMotionChanged"===e){if(!d)return;var n=function(e){t(e.matches)};o=n,null!=d&&(null!=d.addEventListener?d.addEventListener("change",o):d.addListener(o)),E[t]=n}var o;return{remove:function(){return f.removeEventListener(e,t)}}},setAccessibilityFocus:function(e){},announceForAccessibility:function(e){},removeEventListener:function(e,t){if("reduceMotionChanged"===e){var n=E[t];if(!n||!d)return;o=n,null!=d&&(null!=d.removeEventListener?d.removeEventListener("change",o):d.removeListener(o))}var o}};const b=f;const g=function(){function e(){}return e.alert=function(){},e}();var p=n(91846);var v=u.canUseDOM&&null!=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,S=new WeakMap;const R={getColorScheme:function(){return v&&v.matches?"dark":"light"},addChangeListener:function(e){var t=S.get(e);t||(t=function(t){var n=t.matches;e({colorScheme:n?"dark":"light"})},S.set(e,t)),v&&v.addListener(t)},removeChangeListener:function(e){var t=S.get(e);t&&(v&&v.removeListener(t),S.delete(e))}};var m=n(90646),A=n.n(m),y=n(96540),_=n(71005),P=n(9176),O=y.createContext(null);function T(e){var t=e.children,n=e.WrapperComponent,o=y.createElement(P.A,{children:t,key:1,pointerEvents:"box-none",style:D.appContainer});return n&&(o=y.createElement(n,null,o)),y.createElement(O.Provider,{value:e.rootTag},y.createElement(P.A,{pointerEvents:"box-none",style:D.appContainer},o))}var D=_.A.create({appContainer:{flex:1}}),C=n(30870);function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},N.apply(this,arguments)}var I,w={},L={},M=function(e){return e()},k=function(){function e(){}return e.getAppKeys=function(){return Object.keys(L)},e.getApplication=function(e,t){return A()(L[e]&&L[e].getApplication,"Application "+e+" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent."),L[e].getApplication(t)},e.registerComponent=function(e,t){return L[e]={getApplication:function(e){return n=M(t),o=e?e.initialProps:w,r=I&&I(e),{element:y.createElement(T,{WrapperComponent:r,rootTag:{}},y.createElement(n,o)),getStyleElement:function(e){var t=C.A.getStyleSheet();return y.createElement("style",N({},e,{dangerouslySetInnerHTML:{__html:t.textContent},id:t.id}))}};var n,o,r},run:function(e){return n=M(t),o=I&&I(e),r=e.callback,i={hydrate:e.hydrate||!1,initialProps:e.initialProps||w,rootTag:e.rootTag},l=i.hydrate,c=i.initialProps,u=i.rootTag,h=l?a.hydrate:s,A()(u,"Expect to have a valid rootTag, instead got ",u),void h(y.createElement(T,{WrapperComponent:o,rootTag:u},y.createElement(n,c)),u,r);var n,o,r,i,l,c,u,h}},e},e.registerConfig=function(t){t.forEach((function(t){var n=t.appKey,o=t.component,r=t.run;r?e.registerRunnable(n,r):(A()(o,"No component provider passed in"),e.registerComponent(n,o))}))},e.registerRunnable=function(e,t){return L[e]={run:t},e},e.runApplication=function(e,t){A()(L[e]&&L[e].run,'Application "'+e+'" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.'),L[e].run(t)},e.setComponentProviderInstrumentationHook=function(e){M=e},e.setWrapperComponentProvider=function(e){I=e},e.unmountApplicationComponentAtRootTag=function(e){l(e)},e}(),j=n(8113);function V(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var G=u.canUseDOM&&!document.hasOwnProperty("hidden")&&document.hasOwnProperty("webkitHidden"),H=["change","memoryWarning"],x=G?"webkitvisibilitychange":"visibilitychange",U=G?"webkitVisibilityState":"visibilityState",z="background",B="active",W=null,Y=function(){function e(){}var t,n,o;return e.addEventListener=function(t,n){if(e.isAvailable&&(A()(-1!==H.indexOf(t),'Trying to subscribe to unknown event: "%s"',t),"change"===t))return W||(W=new j.A,document.addEventListener(x,(function(){W&&W.emit("change",e.currentState)}),!1)),W.addListener(t,n)},e.removeEventListener=function(t,n){e.isAvailable&&(console.error("AppState.removeListener('"+t+"', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `AppState.addEventListener`."),A()(-1!==H.indexOf(t),'Trying to remove listener for unknown event: "%s"',t),"change"===t&&W&&W.removeListener(n))},t=e,o=[{key:"currentState",get:function(){if(!e.isAvailable)return B;switch(document[U]){case"hidden":case"prerender":case"unloaded":return z;default:return B}}}],(n=null)&&V(t.prototype,n),o&&V(t,o),e}();function F(){}Y.isAvailable=u.canUseDOM&&document[U];const Z={exitApp:F,addEventListener:function(){return{remove:F}},removeEventListener:F};var K,X=function(){function e(){}return e.isAvailable=function(){return void 0===K&&(K="function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")),K},e.getString=function(){return Promise.resolve("")},e.setString=function(e){var t=!1,n=document.body;if(n){var o=document.createElement("span");o.textContent=e,o.style.opacity="0",o.style.position="absolute",o.style.whiteSpace="pre-wrap",o.style.userSelect="auto",n.appendChild(o);var r=window.getSelection();r.removeAllRanges();var i=document.createRange();i.selectNodeContents(o),r.addRange(i);try{document.execCommand("copy"),t=!0}catch(a){}r.removeAllRanges(),n.removeChild(o)}return t},e}(),q=n(63384);const J={Dimensions:{get windowPhysicalPixels(){var e=q.A.get("window"),t=e.width,n=e.height,o=e.fontScale,r=e.scale;return{width:t*r,height:n*r,scale:r,fontScale:o}},get screenPhysicalPixels(){var e=q.A.get("screen"),t=e.width,n=e.height,o=e.fontScale,r=e.scale;return{width:t*r,height:n*r,scale:r,fontScale:o}}},get locale(){if(u.canUseDOM)return navigator.languages?navigator.languages[0]:navigator.language},get totalMemory(){return u.canUseDOM?navigator.deviceMemory:void 0},get userAgent(){return u.canUseDOM?navigator.userAgent:""}};var Q=n(94095),$=n(95784),ee=n(87068),te=n(87890),ne=n(25051),oe=u.canUseDOM?window.location.href:"",re=function(){function e(){var e=this;this._eventCallbacks={},this.addEventListener=function(t,n){e._eventCallbacks[t]?e._eventCallbacks[t].push(n):e._eventCallbacks[t]=[n]},this.removeEventListener=function(t,n){var o=e._eventCallbacks[t].filter((function(e){return e.toString()!==n.toString()}));e._eventCallbacks[t]=o}}var t=e.prototype;return t._dispatchEvent=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=this._eventCallbacks[e];null!=r&&Array.isArray(r)&&r.map((function(e){e.apply(void 0,n)}))},t.canOpenURL=function(){return Promise.resolve(!0)},t.getInitialURL=function(){return Promise.resolve(oe)},t.openURL=function(e){try{return ie(e),this._dispatchEvent("onOpen",e),Promise.resolve()}catch(t){return Promise.reject(t)}},t._validateURL=function(e){A()("string"==typeof e,"Invalid URL: should be a string. Was: "+e),A()(e,"Invalid URL: cannot be empty")},e}(),ie=function(e){if(u.canUseDOM){var t=new URL(e,window.location).toString();0===t.indexOf("tel:")?window.location=t:window.open(t,"_blank","noopener")}};const ae=new re;const se=n(3055).A;var le=n(37959),ce=n(99518),ue=n(67862);function he(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const de=function(){function e(){}var t,n,o;return e.share=function(e,t){return void 0===t&&(t={}),A()("object"==typeof e&&null!==e,"Content to share must be a valid object"),A()("string"==typeof e.url||"string"==typeof e.message,"At least one of URL and message is required"),A()("object"==typeof t&&null!==t,"Options must be a valid object"),A()(!e.title||"string"==typeof e.title,"Invalid title: title should be a string."),void 0!==window.navigator.share?window.navigator.share({title:e.title,text:e.message,url:e.url}):Promise.reject(new Error("Share is not supported in this browser"))},t=e,o=[{key:"sharedAction",get:function(){return"sharedAction"}},{key:"dismissedAction",get:function(){return"dismissedAction"}}],(n=null)&&he(t.prototype,n),o&&he(t,o),e}();var Ee=n(85621),fe=function(e){"vibrate"in window.navigator&&window.navigator.vibrate(e)};const be={cancel:function(){fe(0)},vibrate:function(e){void 0===e&&(e=400),fe(e)}};var ge=n(92869),pe=n(46413),ve=n(78506),Se=y.forwardRef((function(e,t){var n=e.accessibilityLabel,o=e.color,r=e.disabled,i=e.onPress,a=e.testID,s=e.title;return y.createElement(pe.A,{accessibilityLabel:n,accessibilityRole:"button",disabled:r,focusable:!r,onPress:i,ref:t,style:[Re.button,o&&{backgroundColor:o},r&&Re.buttonDisabled],testID:a},y.createElement(ve.A,{style:[Re.text,r&&Re.textDisabled]},s))}));Se.displayName="Button";var Re=_.A.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const me=Se;function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(n),!0).forEach((function(t){_e(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pe(){return Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Pe.apply(this,arguments)}var Oe=y.forwardRef((function(e,t){var n=e.color,r=e.disabled,i=e.onChange,a=e.onValueChange,s=e.style,l=e.value,c=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["color","disabled","onChange","onValueChange","style","value"]);var u=y.createElement(P.A,{style:[Te.fakeControl,l&&Te.fakeControlChecked,l&&n&&{backgroundColor:n,borderColor:n},r&&Te.fakeControlDisabled,l&&r&&Te.fakeControlCheckedAndDisabled]}),h=(0,o.A)("input",{checked:l,disabled:r,onChange:function(e){var t=e.nativeEvent.target.checked;e.nativeEvent.value=t,i&&i(e),a&&a(t)},ref:t,style:[Te.nativeControl,Te.cursorInherit],type:"checkbox"});return y.createElement(P.A,Pe({},c,{accessibilityDisabled:r,style:[Te.root,s,r&&Te.cursorDefault]}),u,h)}));Oe.displayName="CheckBox";var Te=_.A.create({root:{cursor:"pointer",height:16,userSelect:"none",width:16},cursorDefault:{cursor:"default"},cursorInherit:{cursor:"inherit"},fakeControl:{alignItems:"center",backgroundColor:"#fff",borderColor:"#657786",borderRadius:2,borderStyle:"solid",borderWidth:2,height:"100%",justifyContent:"center",width:"100%"},fakeControlChecked:{backgroundColor:"#009688",backgroundImage:'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")',backgroundRepeat:"no-repeat",borderColor:"#009688"},fakeControlDisabled:{borderColor:"#CCD6DD"},fakeControlCheckedAndDisabled:{backgroundColor:"#AAB8C2",borderColor:"#AAB8C2"},nativeControl:ye(ye({},_.A.absoluteFillObject),{},{height:"100%",margin:0,opacity:0,padding:0,width:"100%"})});const De=Oe;var Ce=n(14021),Ne=n(9761),Ie=n(31022),we=n(25470),Le=n(17936),Me=n(11804),ke=n(96177);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ge=y.forwardRef((function(e,t){var n=e.children,r=e.enabled,i=e.onValueChange,a=e.selectedValue,s=e.style,l=e.testID,c=(e.itemStyle,e.mode,e.prompt,function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","enabled","onValueChange","selectedValue","style","testID","itemStyle","mode","prompt"])),u=y.useRef(null);var h=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){Ve(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:n,disabled:!1===r||void 0,onChange:function(e){var t=e.target,n=t.selectedIndex,o=t.value;i&&i(o,n)},style:[He.initial,s],testID:l,value:a},c),d=(0,ke.A)(h),E=(0,Me.A)(u,d,t);return h.ref=E,(0,o.A)("select",h)}));Ge.Item=function(e){var t=e.color,n=e.label,r=e.testID,i=e.value,a={color:t};return(0,o.A)("option",{style:a,testID:r,value:i},n)};var He=_.A.create({initial:{fontFamily:"System",fontSize:"inherit",margin:0}});const xe=Ge;var Ue=n(70690);function ze(){return ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ze.apply(this,arguments)}var Be=y.forwardRef((function(e,t){var n=e.color,o=void 0===n?"#1976D2":n,r=e.indeterminate,i=void 0!==r&&r,a=e.progress,s=void 0===a?0:a,l=e.trackColor,c=void 0===l?"transparent":l,u=e.style,h=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["color","indeterminate","progress","trackColor","style"]),d=100*s,E=y.useRef(null);return y.useEffect((function(){var e=i?"25%":d+"%";null!=E.current&&E.current.setNativeProps({style:{width:e}})}),[i,d,E]),y.createElement(P.A,ze({},h,{accessibilityRole:"progressbar",accessibilityValue:{max:100,min:0,now:i?null:d},ref:t,style:[We.track,u,{backgroundColor:c}]}),y.createElement(P.A,{ref:E,style:[We.progress,i&&We.animation,{backgroundColor:o}]}))}));Be.displayName="ProgressBar";var We=_.A.create({track:{forcedColorAdjust:"none",height:5,overflow:"hidden",userSelect:"none",zIndex:0},progress:{forcedColorAdjust:"none",height:"100%",zIndex:-1},animation:{animationDuration:"1s",animationKeyframes:[{"0%":{transform:[{translateX:"-100%"}]},"100%":{transform:[{translateX:"400%"}]}}],animationTimingFunction:"linear",animationIterationCount:"infinite"}});const Ye=Be;var Fe=n(71217),Ze=n(68444),Ke=n(17345),Xe=n(81846),qe=n(97576),Je=n(7497),Qe=n(15782),$e=n(99934),et=function(e,t){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t),o}return new n(e,t)},tt=function(e){var t=this;e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},nt=et;const ot={addPoolingTo:function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||nt,n.poolSize||(n.poolSize=10),n.release=tt,n},twoArgumentPooler:et};var rt=ot.twoArgumentPooler;function it(e,t){this.width=e,this.height=t}it.prototype.destructor=function(){this.width=null,this.height=null},it.getPooledFromElement=function(e){return it.getPooled(e.offsetWidth,e.offsetHeight)},ot.addPoolingTo(it,rt);const at=it;var st=n(61644),lt=n.n(st),ct=ot.twoArgumentPooler;function ut(e,t){this.left=e,this.top=t}ut.prototype.destructor=function(){this.left=null,this.top=null},ot.addPoolingTo(ut,ct);const ht=ut;function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?dt(Object(n),!0).forEach((function(t){ft(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var bt=function(e){var t=e.touches,n=e.changedTouches,o=t&&t.length>0,r=n&&n.length>0;return!o&&r?n[0]:o?t[0]:e},gt="NOT_RESPONDER",pt="RESPONDER_INACTIVE_PRESS_IN",vt="RESPONDER_INACTIVE_PRESS_OUT",St="RESPONDER_ACTIVE_PRESS_IN",Rt="RESPONDER_ACTIVE_PRESS_OUT",mt="RESPONDER_ACTIVE_LONG_PRESS_IN",At="RESPONDER_ACTIVE_LONG_PRESS_OUT",yt="ERROR",_t={NOT_RESPONDER:!1,RESPONDER_INACTIVE_PRESS_IN:!1,RESPONDER_INACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_PRESS_IN:!1,RESPONDER_ACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_LONG_PRESS_IN:!1,RESPONDER_ACTIVE_LONG_PRESS_OUT:!1,ERROR:!1},Pt=Et(Et({},_t),{},{RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0}),Ot=Et(Et({},_t),{},{RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),Tt=Et(Et({},_t),{},{RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),Dt="DELAY",Ct="RESPONDER_GRANT",Nt="RESPONDER_RELEASE",It="RESPONDER_TERMINATED",wt="ENTER_PRESS_RECT",Lt="LEAVE_PRESS_RECT",Mt="LONG_PRESS_DETECTED",kt={NOT_RESPONDER:{DELAY:yt,RESPONDER_GRANT:pt,RESPONDER_RELEASE:yt,RESPONDER_TERMINATED:yt,ENTER_PRESS_RECT:yt,LEAVE_PRESS_RECT:yt,LONG_PRESS_DETECTED:yt},RESPONDER_INACTIVE_PRESS_IN:{DELAY:St,RESPONDER_GRANT:yt,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:pt,LEAVE_PRESS_RECT:vt,LONG_PRESS_DETECTED:yt},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:Rt,RESPONDER_GRANT:yt,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:pt,LEAVE_PRESS_RECT:vt,LONG_PRESS_DETECTED:yt},RESPONDER_ACTIVE_PRESS_IN:{DELAY:yt,RESPONDER_GRANT:yt,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:St,LEAVE_PRESS_RECT:Rt,LONG_PRESS_DETECTED:mt},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:yt,RESPONDER_GRANT:yt,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:St,LEAVE_PRESS_RECT:Rt,LONG_PRESS_DETECTED:yt},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:yt,RESPONDER_GRANT:yt,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:mt,LEAVE_PRESS_RECT:At,LONG_PRESS_DETECTED:mt},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:yt,RESPONDER_GRANT:yt,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:mt,LEAVE_PRESS_RECT:At,LONG_PRESS_DETECTED:yt},error:{DELAY:gt,RESPONDER_GRANT:pt,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:gt,LEAVE_PRESS_RECT:gt,LONG_PRESS_DETECTED:gt}},jt={componentDidMount:function(){var e=this;this._touchableNode=(0,r.A)(this),this._touchableNode&&this._touchableNode.addEventListener&&(this._touchableBlurListener=function(t){e._isTouchableKeyboardActive&&(e.state.touchable.touchState&&e.state.touchable.touchState!==gt&&e.touchableHandleResponderTerminate({nativeEvent:t}),e._isTouchableKeyboardActive=!1)},this._touchableNode.addEventListener("blur",this._touchableBlurListener))},componentWillUnmount:function(){this._touchableNode&&this._touchableNode.addEventListener&&this._touchableNode.removeEventListener("blur",this._touchableBlurListener),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressInLocation=null,this.state.touchable.responderID=null,this._touchableNode=null},touchableGetInitialState:function(){return{touchable:{touchState:void 0,responderID:null}}},touchableHandleResponderTerminationRequest:function(){return!this.props.rejectResponderTermination},touchableHandleStartShouldSetResponder:function(){return!this.props.disabled},touchableLongPressCancelsPress:function(){return!0},touchableHandleResponderGrant:function(e){var t=e.currentTarget;e.persist(),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null,this.state.touchable.touchState=gt,this.state.touchable.responderID=t,this._receiveSignal(Ct,e);var n=void 0!==this.touchableGetHighlightDelayMS?Math.max(this.touchableGetHighlightDelayMS(),0):130;0!==(n=isNaN(n)?130:n)?this.touchableDelayTimeout=setTimeout(this._handleDelay.bind(this,e),n):this._handleDelay(e);var o=void 0!==this.touchableGetLongPressDelayMS?Math.max(this.touchableGetLongPressDelayMS(),10):370;o=isNaN(o)?370:o,this.longPressDelayTimeout=setTimeout(this._handleLongDelay.bind(this,e),o+n)},touchableHandleResponderRelease:function(e){this.pressInLocation=null,this._receiveSignal(Nt,e)},touchableHandleResponderTerminate:function(e){this.pressInLocation=null,this._receiveSignal(It,e)},touchableHandleResponderMove:function(e){if(this.state.touchable.positionOnActivate){var t=this.state.touchable.positionOnActivate,n=this.state.touchable.dimensionsOnActivate,o=this.touchableGetPressRectOffset?this.touchableGetPressRectOffset():{left:20,right:20,top:20,bottom:20},r=o.left,i=o.top,a=o.right,s=o.bottom,l=this.touchableGetHitSlop?this.touchableGetHitSlop():null;l&&(r+=l.left||0,i+=l.top||0,a+=l.right||0,s+=l.bottom||0);var c=bt(e.nativeEvent),u=c&&c.pageX,h=c&&c.pageY;if(this.pressInLocation)this._getDistanceBetweenPoints(u,h,this.pressInLocation.pageX,this.pressInLocation.pageY)>10&&this._cancelLongPressDelayTimeout();if(u>t.left-r&&h>t.top-i&&u<t.left+n.width+a&&h<t.top+n.height+s){var d=this.state.touchable.touchState;this._receiveSignal(wt,e),this.state.touchable.touchState===pt&&d!==pt&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(Lt,e)}},touchableHandleFocus:function(e){this.props.onFocus&&this.props.onFocus(e)},touchableHandleBlur:function(e){this.props.onBlur&&this.props.onBlur(e)},_remeasureMetricsOnActivation:function(){var e=this.state.touchable.responderID;null!=e&&Ee.A.measure(e,this._handleQueryLayout)},_handleQueryLayout:function(e,t,n,o,r,i){(e||t||n||o||r||i)&&(this.state.touchable.positionOnActivate&&ht.release(this.state.touchable.positionOnActivate),this.state.touchable.dimensionsOnActivate&&at.release(this.state.touchable.dimensionsOnActivate),this.state.touchable.positionOnActivate=ht.getPooled(r,i),this.state.touchable.dimensionsOnActivate=at.getPooled(n,o))},_handleDelay:function(e){this.touchableDelayTimeout=null,this._receiveSignal(Dt,e)},_handleLongDelay:function(e){this.longPressDelayTimeout=null;var t=this.state.touchable.touchState;t!==St&&t!==mt?console.error("Attempted to transition from state `"+t+"` to `"+mt+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(Mt,e)},_receiveSignal:function(e,t){var n=this.state.touchable.responderID,o=this.state.touchable.touchState,r=kt[o]&&kt[o][e];if(n||e!==Nt){if(!r)throw new Error("Unrecognized signal `"+e+"` or state `"+o+"` for Touchable responder `"+n+"`");if(r===yt)throw new Error("Touchable cannot transition from `"+o+"` to `"+e+"` for responder `"+n+"`");o!==r&&(this._performSideEffectsForTransition(o,r,e,t),this.state.touchable.touchState=r)}},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null},_isHighlight:function(e){return e===St||e===mt},_savePressInLocation:function(e){var t=bt(e.nativeEvent),n=t&&t.pageX,o=t&&t.pageY,r=t&&t.locationX,i=t&&t.locationY;this.pressInLocation={pageX:n,pageY:o,locationX:r,locationY:i}},_getDistanceBetweenPoints:function(e,t,n,o){var r=e-n,i=t-o;return Math.sqrt(r*r+i*i)},_performSideEffectsForTransition:function(e,t,n,o){var r=this._isHighlight(e),i=this._isHighlight(t);(n===It||n===Nt)&&this._cancelLongPressDelayTimeout();var a=e===gt&&t===pt,s=!Pt[e]&&Pt[t];if((a||s)&&this._remeasureMetricsOnActivation(),Ot[e]&&n===Mt&&this.touchableHandleLongPress&&this.touchableHandleLongPress(o),i&&!r?this._startHighlight(o):!i&&r&&this._endHighlight(o),Ot[e]&&n===Nt){var l=!!this.props.onLongPress,c=Tt[e]&&(!l||!this.touchableLongPressCancelsPress());(!Tt[e]||c)&&this.touchableHandlePress&&(i||r||(this._startHighlight(o),this._endHighlight(o)),this.touchableHandlePress(o))}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null},_playTouchSound:function(){Ee.A.playTouchSound()},_startHighlight:function(e){this._savePressInLocation(e),this.touchableHandleActivePressIn&&this.touchableHandleActivePressIn(e)},_endHighlight:function(e){var t=this;this.touchableHandleActivePressOut&&(this.touchableGetPressOutDelayMS&&this.touchableGetPressOutDelayMS()?this.pressOutDelayTimeout=setTimeout((function(){t.touchableHandleActivePressOut(e)}),this.touchableGetPressOutDelayMS()):this.touchableHandleActivePressOut(e))},touchableHandleKeyEvent:function(e){var t=e.type,n=e.key;"Enter"!==n&&" "!==n||("keydown"===t?this._isTouchableKeyboardActive||this.state.touchable.touchState&&this.state.touchable.touchState!==gt||(this.touchableHandleResponderGrant(e),this._isTouchableKeyboardActive=!0):"keyup"===t&&this._isTouchableKeyboardActive&&this.state.touchable.touchState&&this.state.touchable.touchState!==gt&&(this.touchableHandleResponderRelease(e),this._isTouchableKeyboardActive=!1),e.stopPropagation(),"Enter"===n&&"link"===$e.A.propsToAriaRole(this.props)||e.preventDefault())},withoutDefaultFocusAndBlur:{}},Vt=(jt.touchableHandleFocus,jt.touchableHandleBlur,function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(jt,["touchableHandleFocus","touchableHandleBlur"]));jt.withoutDefaultFocusAndBlur=Vt;var Gt={Mixin:jt,TOUCH_TARGET_DEBUG:!1,renderDebugView:function(e){var t=e.color,n=e.hitSlop;if(!Gt.TOUCH_TARGET_DEBUG)return null;var o={};for(var r in n=n||{top:0,bottom:0,left:0,right:0})o[r]=-n[r];var i=lt()(t);if("number"!=typeof i)return null;var a="#"+("00000000"+i.toString(16)).substr(-8);return y.createElement(P.A,{pointerEvents:"none",style:Et({position:"absolute",borderColor:a.slice(0,-2)+"55",borderWidth:1,borderStyle:"dashed",backgroundColor:a.slice(0,-2)+"0F"},o)})}};const Ht=Gt;var xt=n(75584),Ut=n(14504),zt=n(29359);const Bt=n(31476).A;var Wt=n(81441);function Yt(e){return y.createElement(Wt.A,e)}Yt.ignoreWarnings=function(){};const Ft=Yt;const Zt={ignoreLogs:function(){},ignoreAllLogs:function(){},uninstall:function(){},install:function(){}},Kt=Wt.A,Xt=Wt.A,qt=Wt.A;var Jt=function(){return Promise.resolve(!1)};const Qt={PERMISSIONS:{},RESULTS:{},checkPermission:Jt,check:Jt,requestPermission:Jt,request:Jt,requestMultiple:Jt},$t={},en={},tn={};const nn=n(161).A;function on(){var e=y.useState(R.getColorScheme()),t=e[0],n=e[1];return y.useEffect((function(){function e(e){n(e.colorScheme)}return R.addChangeListener(e),function(){return R.removeChangeListener(e)}})),t}function rn(){var e=(0,y.useState)((function(){return q.A.get("window")})),t=e[0],n=e[1];return(0,y.useEffect)((function(){function e(e){var t=e.window;null!=t&&n(t)}return q.A.addEventListener("change",e),n(q.A.get("window")),function(){q.A.removeEventListener("change",e)}}),[]),t}}}]);