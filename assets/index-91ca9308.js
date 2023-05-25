var Ah=Object.defineProperty;var Fh=(e,t,n)=>t in e?Ah(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var I=(e,t,n)=>(Fh(e,typeof t!="symbol"?t+"":t,n),n);function Vh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Dh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Uh(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var R={},Wh={get exports(){return R},set exports(e){R=e}},qo={},_={},Bh={get exports(){return _},set exports(e){_=e}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ui=Symbol.for("react.element"),bh=Symbol.for("react.portal"),Qh=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Yh=Symbol.for("react.profiler"),Xh=Symbol.for("react.provider"),Kh=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),qh=Symbol.for("react.suspense"),Zh=Symbol.for("react.memo"),Jh=Symbol.for("react.lazy"),yc=Symbol.iterator;function em(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,wd={};function nr(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||gd}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sd(){}Sd.prototype=nr.prototype;function Ks(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||gd}var Gs=Ks.prototype=new Sd;Gs.constructor=Ks;vd(Gs,nr.prototype);Gs.isPureReactComponent=!0;var gc=Array.isArray,kd=Object.prototype.hasOwnProperty,qs={current:null},xd={key:!0,ref:!0,__self:!0,__source:!0};function _d(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)kd.call(t,r)&&!xd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ui,type:e,key:o,ref:l,props:i,_owner:qs.current}}function tm(e,t){return{$$typeof:ui,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zs(e){return typeof e=="object"&&e!==null&&e.$$typeof===ui}function nm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vc=/\/+/g;function Kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nm(""+e.key):t.toString(36)}function Ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ui:case bh:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Kl(l,0):r,gc(i)?(n="",e!=null&&(n=e.replace(vc,"$&/")+"/"),Ki(i,t,n,"",function(u){return u})):i!=null&&(Zs(i)&&(i=tm(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(vc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",gc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Kl(o,a);l+=Ki(o,t,n,s,i)}else if(s=em(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Kl(o,a++),l+=Ki(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ki(e,t,n){if(e==null)return e;var r=[],i=0;return Ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function rm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Gi={transition:null},im={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Gi,ReactCurrentOwner:qs};A.Children={map:ki,forEach:function(e,t,n){ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ki(e,function(){t++}),t},toArray:function(e){return ki(e,function(t){return t})||[]},only:function(e){if(!Zs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=nr;A.Fragment=Qh;A.Profiler=Yh;A.PureComponent=Ks;A.StrictMode=Hh;A.Suspense=qh;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=im;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=qs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)kd.call(t,s)&&!xd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ui,type:e.type,key:i,ref:o,props:r,_owner:l}};A.createContext=function(e){return e={$$typeof:Kh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xh,_context:e},e.Consumer=e};A.createElement=_d;A.createFactory=function(e){var t=_d.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Gh,render:e}};A.isValidElement=Zs;A.lazy=function(e){return{$$typeof:Jh,_payload:{_status:-1,_result:e},_init:rm}};A.memo=function(e,t){return{$$typeof:Zh,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Gi.transition;Gi.transition={};try{e()}finally{Gi.transition=t}};A.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};A.useCallback=function(e,t){return Ce.current.useCallback(e,t)};A.useContext=function(e){return Ce.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};A.useEffect=function(e,t){return Ce.current.useEffect(e,t)};A.useId=function(){return Ce.current.useId()};A.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return Ce.current.useMemo(e,t)};A.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};A.useRef=function(e){return Ce.current.useRef(e)};A.useState=function(e){return Ce.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return Ce.current.useTransition()};A.version="18.2.0";(function(e){e.exports=A})(Bh);const Ed=Dh(_),wc=Vh({__proto__:null,default:Ed},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om=_,lm=Symbol.for("react.element"),am=Symbol.for("react.fragment"),sm=Object.prototype.hasOwnProperty,um=om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cm={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)sm.call(t,r)&&!cm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lm,type:e,key:o,ref:l,props:i,_owner:um.current}}qo.Fragment=am;qo.jsx=Cd;qo.jsxs=Cd;(function(e){e.exports=qo})(Wh);var Ta={},po={},fm={get exports(){return po},set exports(e){po=e}},Ve={},Ra={},dm={get exports(){return Ra},set exports(e){Ra=e}},$d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,L){var j=N.length;N.push(L);e:for(;0<j;){var te=j-1>>>1,ae=N[te];if(0<i(ae,L))N[te]=L,N[j]=ae,j=te;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],j=N.pop();if(j!==L){N[0]=j;e:for(var te=0,ae=N.length,wi=ae>>>1;te<wi;){var rn=2*(te+1)-1,Xl=N[rn],on=rn+1,Si=N[on];if(0>i(Xl,j))on<ae&&0>i(Si,Xl)?(N[te]=Si,N[on]=j,te=on):(N[te]=Xl,N[rn]=j,te=rn);else if(on<ae&&0>i(Si,j))N[te]=Si,N[on]=j,te=on;else break e}}return L}function i(N,L){var j=N.sortIndex-L.sortIndex;return j!==0?j:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,d=null,m=3,y=!1,v=!1,g=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=N)r(u),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(u)}}function w(N){if(g=!1,h(N),!v)if(n(s)!==null)v=!0,Hl(k);else{var L=n(u);L!==null&&Yl(w,L.startTime-N)}}function k(N,L){v=!1,g&&(g=!1,f(T),T=-1),y=!0;var j=m;try{for(h(L),d=n(s);d!==null&&(!(d.expirationTime>L)||N&&!de());){var te=d.callback;if(typeof te=="function"){d.callback=null,m=d.priorityLevel;var ae=te(d.expirationTime<=L);L=e.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(s)&&r(s),h(L)}else r(s);d=n(s)}if(d!==null)var wi=!0;else{var rn=n(u);rn!==null&&Yl(w,rn.startTime-L),wi=!1}return wi}finally{d=null,m=j,y=!1}}var C=!1,E=null,T=-1,b=5,z=-1;function de(){return!(e.unstable_now()-z<b)}function pe(){if(E!==null){var N=e.unstable_now();z=N;var L=!0;try{L=E(!0,N)}finally{L?We():(C=!1,E=null)}}else C=!1}var We;if(typeof c=="function")We=function(){c(pe)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,Ql=vt.port2;vt.port1.onmessage=pe,We=function(){Ql.postMessage(null)}}else We=function(){S(pe,0)};function Hl(N){E=N,C||(C=!0,We())}function Yl(N,L){T=S(function(){N(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Hl(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var j=m;m=L;try{return N()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=m;m=N;try{return L()}finally{m=j}},e.unstable_scheduleCallback=function(N,L,j){var te=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?te+j:te):j=te,N){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=j+ae,N={id:p++,callback:L,priorityLevel:N,startTime:j,expirationTime:ae,sortIndex:-1},j>te?(N.sortIndex=j,t(u,N),n(s)===null&&N===n(u)&&(g?(f(T),T=-1):g=!0,Yl(w,j-te))):(N.sortIndex=ae,t(s,N),v||y||(v=!0,Hl(k))),N},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(N){var L=m;return function(){var j=m;m=L;try{return N.apply(this,arguments)}finally{m=j}}}})($d);(function(e){e.exports=$d})(dm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd=_,Fe=Ra;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Id=new Set,jr={};function xn(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(jr[e]=t,e=0;e<t.length;e++)Id.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),za=Object.prototype.hasOwnProperty,pm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sc={},kc={};function hm(e){return za.call(kc,e)?!0:za.call(Sc,e)?!1:pm.test(e)?kc[e]=!0:(Sc[e]=!0,!1)}function mm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ym(e,t,n,r){if(t===null||typeof t>"u"||mm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Js=/[\-:]([a-z])/g;function eu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Js,eu);ge[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Js,eu);ge[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Js,eu);ge[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function tu(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ym(t,n,i,r)&&(n=null),r||i===null?hm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nt=Pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xi=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Pn=Symbol.for("react.fragment"),nu=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),ru=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),ja=Symbol.for("react.suspense_list"),iu=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Td=Symbol.for("react.offscreen"),xc=Symbol.iterator;function lr(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Gl;function vr(e){if(Gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||""}return`
`+Gl+e}var ql=!1;function Zl(e,t){if(!e||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vr(e):""}function gm(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=Zl(e.type,!1),e;case 11:return e=Zl(e.type.render,!1),e;case 1:return e=Zl(e.type,!0),e;default:return""}}function Aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pn:return"Fragment";case $n:return"Portal";case Ma:return"Profiler";case nu:return"StrictMode";case La:return"Suspense";case ja:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nd:return(e.displayName||"Context")+".Consumer";case Od:return(e._context.displayName||"Context")+".Provider";case ru:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case iu:return t=e.displayName||null,t!==null?t:Aa(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return Aa(e(t))}catch{}}return null}function vm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Aa(t);case 8:return t===nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wm(e){var t=Rd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=wm(e))}function zd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fa(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Md(e,t){t=t.checked,t!=null&&tu(e,"checked",t,!1)}function Va(e,t){Md(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Da(e,t.type,n):t.hasOwnProperty("defaultValue")&&Da(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ec(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Da(e,t,n){(t!=="number"||ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wr=Array.isArray;function Fn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(wr(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function Ld(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $c(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,Ad=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sm=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){Sm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function Fd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function Vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var km=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ba(e,t){if(t){if(km[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ba(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,Vn=null,Dn=null;function Pc(e){if(e=di(e)){if(typeof Ha!="function")throw Error(x(280));var t=e.stateNode;t&&(t=nl(t),Ha(e.stateNode,e.type,t))}}function Dd(e){Vn?Dn?Dn.push(e):Dn=[e]:Vn=e}function Ud(){if(Vn){var e=Vn,t=Dn;if(Dn=Vn=null,Pc(e),t)for(e=0;e<t.length;e++)Pc(t[e])}}function Wd(e,t){return e(t)}function Bd(){}var Jl=!1;function bd(e,t,n){if(Jl)return e(t,n);Jl=!0;try{return Wd(e,t,n)}finally{Jl=!1,(Vn!==null||Dn!==null)&&(Bd(),Ud())}}function Fr(e,t){var n=e.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var Ya=!1;if(Ct)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){Ya=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{Ya=!1}function xm(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Er=!1,mo=null,yo=!1,Xa=null,_m={onError:function(e){Er=!0,mo=e}};function Em(e,t,n,r,i,o,l,a,s){Er=!1,mo=null,xm.apply(_m,arguments)}function Cm(e,t,n,r,i,o,l,a,s){if(Em.apply(this,arguments),Er){if(Er){var u=mo;Er=!1,mo=null}else throw Error(x(198));yo||(yo=!0,Xa=u)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ic(e){if(_n(e)!==e)throw Error(x(188))}function $m(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ic(i),e;if(o===r)return Ic(i),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Hd(e){return e=$m(e),e!==null?Yd(e):null}function Yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yd(e);if(t!==null)return t;e=e.sibling}return null}var Xd=Fe.unstable_scheduleCallback,Oc=Fe.unstable_cancelCallback,Pm=Fe.unstable_shouldYield,Im=Fe.unstable_requestPaint,ne=Fe.unstable_now,Om=Fe.unstable_getCurrentPriorityLevel,lu=Fe.unstable_ImmediatePriority,Kd=Fe.unstable_UserBlockingPriority,go=Fe.unstable_NormalPriority,Nm=Fe.unstable_LowPriority,Gd=Fe.unstable_IdlePriority,Zo=null,mt=null;function Tm(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Zo,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Mm,Rm=Math.log,zm=Math.LN2;function Mm(e){return e>>>=0,e===0?32:31-(Rm(e)/zm|0)|0}var Ci=64,$i=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Sr(a):(o&=l,o!==0&&(r=Sr(o)))}else l=n&~i,l!==0?r=Sr(l):o!==0&&(r=Sr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),i=1<<n,r|=e[n],t&=~i;return r}function Lm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-ot(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=Lm(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qd(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function Am(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function au(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Zd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jd,su,ep,tp,np,Ga=!1,Pi=[],Bt=null,bt=null,Qt=null,Vr=new Map,Dr=new Map,At=[],Fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nc(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function sr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=di(t),t!==null&&su(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vm(e,t,n,r,i){switch(t){case"focusin":return Bt=sr(Bt,e,t,n,r,i),!0;case"dragenter":return bt=sr(bt,e,t,n,r,i),!0;case"mouseover":return Qt=sr(Qt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vr.set(o,sr(Vr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Dr.set(o,sr(Dr.get(o)||null,e,t,n,r,i)),!0}return!1}function rp(e){var t=un(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=Qd(n),t!==null){e.blockedOn=t,np(e.priority,function(){ep(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qa=r,n.target.dispatchEvent(r),Qa=null}else return t=di(n),t!==null&&su(t),e.blockedOn=n,!1;t.shift()}return!0}function Tc(e,t,n){qi(e)&&n.delete(t)}function Dm(){Ga=!1,Bt!==null&&qi(Bt)&&(Bt=null),bt!==null&&qi(bt)&&(bt=null),Qt!==null&&qi(Qt)&&(Qt=null),Vr.forEach(Tc),Dr.forEach(Tc)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Ga||(Ga=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,Dm)))}function Ur(e){function t(i){return ur(i,e)}if(0<Pi.length){ur(Pi[0],e);for(var n=1;n<Pi.length;n++){var r=Pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&ur(Bt,e),bt!==null&&ur(bt,e),Qt!==null&&ur(Qt,e),Vr.forEach(t),Dr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)rp(n),n.blockedOn===null&&At.shift()}var Un=Nt.ReactCurrentBatchConfig,wo=!0;function Um(e,t,n,r){var i=U,o=Un.transition;Un.transition=null;try{U=1,uu(e,t,n,r)}finally{U=i,Un.transition=o}}function Wm(e,t,n,r){var i=U,o=Un.transition;Un.transition=null;try{U=4,uu(e,t,n,r)}finally{U=i,Un.transition=o}}function uu(e,t,n,r){if(wo){var i=qa(e,t,n,r);if(i===null)ca(e,t,r,So,n),Nc(e,r);else if(Vm(i,e,t,n,r))r.stopPropagation();else if(Nc(e,r),t&4&&-1<Fm.indexOf(e)){for(;i!==null;){var o=di(i);if(o!==null&&Jd(o),o=qa(e,t,n,r),o===null&&ca(e,t,r,So,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ca(e,t,r,null,n)}}var So=null;function qa(e,t,n,r){if(So=null,e=ou(r),e=un(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return So=e,null}function ip(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Om()){case lu:return 1;case Kd:return 4;case go:case Nm:return 16;case Gd:return 536870912;default:return 16}default:return 16}}var Vt=null,cu=null,Zi=null;function op(){if(Zi)return Zi;var e,t=cu,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Zi=i.slice(e,1<r?1-r:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function Rc(){return!1}function De(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ii:Rc,this.isPropagationStopped=Rc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=De(rr),fi=J({},rr,{view:0,detail:0}),Bm=De(fi),ta,na,cr,Jo=J({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(ta=e.screenX-cr.screenX,na=e.screenY-cr.screenY):na=ta=0,cr=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:na}}),zc=De(Jo),bm=J({},Jo,{dataTransfer:0}),Qm=De(bm),Hm=J({},fi,{relatedTarget:0}),ra=De(Hm),Ym=J({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xm=De(Ym),Km=J({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gm=De(Km),qm=J({},rr,{data:0}),Mc=De(qm),Zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e1[e])?!!t[e]:!1}function du(){return t1}var n1=J({},fi,{key:function(e){if(e.key){var t=Zm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r1=De(n1),i1=J({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lc=De(i1),o1=J({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),l1=De(o1),a1=J({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=De(a1),u1=J({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),c1=De(u1),f1=[9,13,27,32],pu=Ct&&"CompositionEvent"in window,Cr=null;Ct&&"documentMode"in document&&(Cr=document.documentMode);var d1=Ct&&"TextEvent"in window&&!Cr,lp=Ct&&(!pu||Cr&&8<Cr&&11>=Cr),jc=String.fromCharCode(32),Ac=!1;function ap(e,t){switch(e){case"keyup":return f1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function p1(e,t){switch(e){case"compositionend":return sp(t);case"keypress":return t.which!==32?null:(Ac=!0,jc);case"textInput":return e=t.data,e===jc&&Ac?null:e;default:return null}}function h1(e,t){if(In)return e==="compositionend"||!pu&&ap(e,t)?(e=op(),Zi=cu=Vt=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lp&&t.locale!=="ko"?null:t.data;default:return null}}var m1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!m1[e.type]:t==="textarea"}function up(e,t,n,r){Dd(r),t=ko(t,"onChange"),0<t.length&&(n=new fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,Wr=null;function y1(e){Sp(e,0)}function el(e){var t=Tn(e);if(zd(t))return e}function g1(e,t){if(e==="change")return t}var cp=!1;if(Ct){var ia;if(Ct){var oa="oninput"in document;if(!oa){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),oa=typeof Vc.oninput=="function"}ia=oa}else ia=!1;cp=ia&&(!document.documentMode||9<document.documentMode)}function Dc(){$r&&($r.detachEvent("onpropertychange",fp),Wr=$r=null)}function fp(e){if(e.propertyName==="value"&&el(Wr)){var t=[];up(t,Wr,e,ou(e)),bd(y1,t)}}function v1(e,t,n){e==="focusin"?(Dc(),$r=t,Wr=n,$r.attachEvent("onpropertychange",fp)):e==="focusout"&&Dc()}function w1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(Wr)}function S1(e,t){if(e==="click")return el(t)}function k1(e,t){if(e==="input"||e==="change")return el(t)}function x1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:x1;function Br(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!za.call(t,i)||!at(e[i],t[i]))return!1}return!0}function Uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wc(e,t){var n=Uc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uc(n)}}function dp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pp(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ho(e.document)}return t}function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _1(e){var t=pp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dp(n.ownerDocument.documentElement,n)){if(r!==null&&hu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Wc(n,o);var l=Wc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E1=Ct&&"documentMode"in document&&11>=document.documentMode,On=null,Za=null,Pr=null,Ja=!1;function Bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ja||On==null||On!==ho(r)||(r=On,"selectionStart"in r&&hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Br(Pr,r)||(Pr=r,r=ko(Za,"onSelect"),0<r.length&&(t=new fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=On)))}function Oi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:Oi("Animation","AnimationEnd"),animationiteration:Oi("Animation","AnimationIteration"),animationstart:Oi("Animation","AnimationStart"),transitionend:Oi("Transition","TransitionEnd")},la={},hp={};Ct&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function tl(e){if(la[e])return la[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hp)return la[e]=t[n];return e}var mp=tl("animationend"),yp=tl("animationiteration"),gp=tl("animationstart"),vp=tl("transitionend"),wp=new Map,bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){wp.set(e,t),xn(t,[e])}for(var aa=0;aa<bc.length;aa++){var sa=bc[aa],C1=sa.toLowerCase(),$1=sa[0].toUpperCase()+sa.slice(1);en(C1,"on"+$1)}en(mp,"onAnimationEnd");en(yp,"onAnimationIteration");en(gp,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(vp,"onTransitionEnd");Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P1=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function Qc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cm(r,t,void 0,e),e.currentTarget=null}function Sp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Qc(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Qc(i,a,u),o=s}}}if(yo)throw e=Xa,yo=!1,Xa=null,e}function H(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var r=e+"__bubble";n.has(r)||(kp(t,e,2,!1),n.add(r))}function ua(e,t,n){var r=0;t&&(r|=4),kp(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function br(e){if(!e[Ni]){e[Ni]=!0,Id.forEach(function(n){n!=="selectionchange"&&(P1.has(n)||ua(n,!1,e),ua(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,ua("selectionchange",!1,t))}}function kp(e,t,n,r){switch(ip(t)){case 1:var i=Um;break;case 4:i=Wm;break;default:i=uu}n=i.bind(null,t,n,e),i=void 0,!Ya||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ca(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=un(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}bd(function(){var u=o,p=ou(n),d=[];e:{var m=wp.get(e);if(m!==void 0){var y=fu,v=e;switch(e){case"keypress":if(Ji(n)===0)break e;case"keydown":case"keyup":y=r1;break;case"focusin":v="focus",y=ra;break;case"focusout":v="blur",y=ra;break;case"beforeblur":case"afterblur":y=ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=l1;break;case mp:case yp:case gp:y=Xm;break;case vp:y=s1;break;case"scroll":y=Bm;break;case"wheel":y=c1;break;case"copy":case"cut":case"paste":y=Gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Lc}var g=(t&4)!==0,S=!g&&e==="scroll",f=g?m!==null?m+"Capture":null:m;g=[];for(var c=u,h;c!==null;){h=c;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,f!==null&&(w=Fr(c,f),w!=null&&g.push(Qr(c,w,h)))),S)break;c=c.return}0<g.length&&(m=new y(m,v,null,n,p),d.push({event:m,listeners:g}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Qa&&(v=n.relatedTarget||n.fromElement)&&(un(v)||v[$t]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?un(v):null,v!==null&&(S=_n(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(g=zc,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=Lc,w="onPointerLeave",f="onPointerEnter",c="pointer"),S=y==null?m:Tn(y),h=v==null?m:Tn(v),m=new g(w,c+"leave",y,n,p),m.target=S,m.relatedTarget=h,w=null,un(p)===u&&(g=new g(f,c+"enter",v,n,p),g.target=h,g.relatedTarget=S,w=g),S=w,y&&v)t:{for(g=y,f=v,c=0,h=g;h;h=En(h))c++;for(h=0,w=f;w;w=En(w))h++;for(;0<c-h;)g=En(g),c--;for(;0<h-c;)f=En(f),h--;for(;c--;){if(g===f||f!==null&&g===f.alternate)break t;g=En(g),f=En(f)}g=null}else g=null;y!==null&&Hc(d,m,y,g,!1),v!==null&&S!==null&&Hc(d,S,v,g,!0)}}e:{if(m=u?Tn(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var k=g1;else if(Fc(m))if(cp)k=k1;else{k=w1;var C=v1}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=S1);if(k&&(k=k(e,u))){up(d,k,n,p);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Da(m,"number",m.value)}switch(C=u?Tn(u):window,e){case"focusin":(Fc(C)||C.contentEditable==="true")&&(On=C,Za=u,Pr=null);break;case"focusout":Pr=Za=On=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,Bc(d,n,p);break;case"selectionchange":if(E1)break;case"keydown":case"keyup":Bc(d,n,p)}var E;if(pu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else In?ap(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(lp&&n.locale!=="ko"&&(In||T!=="onCompositionStart"?T==="onCompositionEnd"&&In&&(E=op()):(Vt=p,cu="value"in Vt?Vt.value:Vt.textContent,In=!0)),C=ko(u,T),0<C.length&&(T=new Mc(T,e,null,n,p),d.push({event:T,listeners:C}),E?T.data=E:(E=sp(n),E!==null&&(T.data=E)))),(E=d1?p1(e,n):h1(e,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(p=new Mc("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=E))}Sp(d,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fr(e,n),o!=null&&r.unshift(Qr(e,o,i)),o=Fr(e,t),o!=null&&r.push(Qr(e,o,i))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Fr(n,o),s!=null&&l.unshift(Qr(n,s,a))):i||(s=Fr(n,o),s!=null&&l.push(Qr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var I1=/\r\n?/g,O1=/\u0000|\uFFFD/g;function Yc(e){return(typeof e=="string"?e:""+e).replace(I1,`
`).replace(O1,"")}function Ti(e,t,n){if(t=Yc(t),Yc(e)!==t&&n)throw Error(x(425))}function xo(){}var es=null,ts=null;function ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rs=typeof setTimeout=="function"?setTimeout:void 0,N1=typeof clearTimeout=="function"?clearTimeout:void 0,Xc=typeof Promise=="function"?Promise:void 0,T1=typeof queueMicrotask=="function"?queueMicrotask:typeof Xc<"u"?function(e){return Xc.resolve(null).then(e).catch(R1)}:rs;function R1(e){setTimeout(function(){throw e})}function fa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ur(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),ht="__reactFiber$"+ir,Hr="__reactProps$"+ir,$t="__reactContainer$"+ir,is="__reactEvents$"+ir,z1="__reactListeners$"+ir,M1="__reactHandles$"+ir;function un(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kc(e);e!==null;){if(n=e[ht])return n;e=Kc(e)}return t}e=n,n=e.parentNode}return null}function di(e){return e=e[ht]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function nl(e){return e[Hr]||null}var os=[],Rn=-1;function tn(e){return{current:e}}function Y(e){0>Rn||(e.current=os[Rn],os[Rn]=null,Rn--)}function Q(e,t){Rn++,os[Rn]=e.current,e.current=t}var Jt={},xe=tn(Jt),Ne=tn(!1),mn=Jt;function Xn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function _o(){Y(Ne),Y(xe)}function Gc(e,t,n){if(xe.current!==Jt)throw Error(x(168));Q(xe,t),Q(Ne,n)}function xp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,vm(e)||"Unknown",i));return J({},n,r)}function Eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,mn=xe.current,Q(xe,e),Q(Ne,Ne.current),!0}function qc(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=xp(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,Y(Ne),Y(xe),Q(xe,e)):Y(Ne),Q(Ne,n)}var kt=null,rl=!1,da=!1;function _p(e){kt===null?kt=[e]:kt.push(e)}function L1(e){rl=!0,_p(e)}function nn(){if(!da&&kt!==null){da=!0;var e=0,t=U;try{var n=kt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,rl=!1}catch(i){throw kt!==null&&(kt=kt.slice(e+1)),Xd(lu,nn),i}finally{U=t,da=!1}}return null}var zn=[],Mn=0,Co=null,$o=0,Be=[],be=0,yn=null,xt=1,_t="";function ln(e,t){zn[Mn++]=$o,zn[Mn++]=Co,Co=e,$o=t}function Ep(e,t,n){Be[be++]=xt,Be[be++]=_t,Be[be++]=yn,yn=e;var r=xt;e=_t;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var o=32-ot(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,xt=1<<32-ot(t)+i|n<<i|r,_t=o+e}else xt=1<<o|n<<i|r,_t=e}function mu(e){e.return!==null&&(ln(e,1),Ep(e,1,0))}function yu(e){for(;e===Co;)Co=zn[--Mn],zn[Mn]=null,$o=zn[--Mn],zn[Mn]=null;for(;e===yn;)yn=Be[--be],Be[be]=null,_t=Be[--be],Be[be]=null,xt=Be[--be],Be[be]=null}var je=null,Le=null,K=!1,nt=null;function Cp(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Le=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yn!==null?{id:xt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Le=null,!0):!1;default:return!1}}function ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(K){var t=Le;if(t){var n=t;if(!Zc(e,t)){if(ls(e))throw Error(x(418));t=Ht(n.nextSibling);var r=je;t&&Zc(e,t)?Cp(r,n):(e.flags=e.flags&-4097|2,K=!1,je=e)}}else{if(ls(e))throw Error(x(418));e.flags=e.flags&-4097|2,K=!1,je=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Ri(e){if(e!==je)return!1;if(!K)return Jc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ns(e.type,e.memoizedProps)),t&&(t=Le)){if(ls(e))throw $p(),Error(x(418));for(;t;)Cp(e,t),t=Ht(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=je?Ht(e.stateNode.nextSibling):null;return!0}function $p(){for(var e=Le;e;)e=Ht(e.nextSibling)}function Kn(){Le=je=null,K=!1}function gu(e){nt===null?nt=[e]:nt.push(e)}var j1=Nt.ReactCurrentBatchConfig;function et(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Po=tn(null),Io=null,Ln=null,vu=null;function wu(){vu=Ln=Io=null}function Su(e){var t=Po.current;Y(Po),e._currentValue=t}function ss(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){Io=e,vu=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(vu!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(Io===null)throw Error(x(308));Ln=e,Io.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var cn=null;function ku(e){cn===null?cn=[e]:cn.push(e)}function Pp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ku(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pt(e,n)}return i=r.interleaved,i===null?(t.next=t,ku(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pt(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,au(e,n)}}function ef(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oo(e,t,n,r){var i=e.updateQueue;jt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;l=0,p=u=s=null,a=o;do{var m=a.lane,y=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,g=a;switch(m=t,y=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(y,d,m);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,m=typeof v=="function"?v.call(y,d,m):v,m==null)break e;d=J({},d,m);break e;case 2:jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=y,s=d):p=p.next=y,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(p===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);vn|=l,e.lanes=l,e.memoizedState=d}}function tf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Op=new Pd.Component().refs;function us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Kt(e),o=Et(r,i);o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(lt(t,e,i,r),eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Kt(e),o=Et(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(lt(t,e,i,r),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Kt(e),i=Et(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yt(e,i,r),t!==null&&(lt(t,e,r,n),eo(t,e,r))}};function nf(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(i,o):!0}function Np(e,t,n){var r=!1,i=Jt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(i=Te(t)?mn:xe.current,r=t.contextTypes,o=(r=r!=null)?Xn(e,i):Jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function rf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function cs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Op,xu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ge(o):(o=Te(t)?mn:xe.current,i.context=Xn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(us(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Op&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function zi(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function of(e){var t=e._init;return t(e._payload)}function Tp(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Gt(f,c),f.index=0,f.sibling=null,f}function o(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,h,w){return c===null||c.tag!==6?(c=wa(h,f.mode,w),c.return=f,c):(c=i(c,h),c.return=f,c)}function s(f,c,h,w){var k=h.type;return k===Pn?p(f,c,h.props.children,w,h.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Lt&&of(k)===c.type)?(w=i(c,h.props),w.ref=fr(f,c,h),w.return=f,w):(w=lo(h.type,h.key,h.props,null,f.mode,w),w.ref=fr(f,c,h),w.return=f,w)}function u(f,c,h,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Sa(h,f.mode,w),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function p(f,c,h,w,k){return c===null||c.tag!==7?(c=hn(h,f.mode,w,k),c.return=f,c):(c=i(c,h),c.return=f,c)}function d(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wa(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case xi:return h=lo(c.type,c.key,c.props,null,f.mode,h),h.ref=fr(f,null,c),h.return=f,h;case $n:return c=Sa(c,f.mode,h),c.return=f,c;case Lt:var w=c._init;return d(f,w(c._payload),h)}if(wr(c)||lr(c))return c=hn(c,f.mode,h,null),c.return=f,c;zi(f,c)}return null}function m(f,c,h,w){var k=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(f,c,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xi:return h.key===k?s(f,c,h,w):null;case $n:return h.key===k?u(f,c,h,w):null;case Lt:return k=h._init,m(f,c,k(h._payload),w)}if(wr(h)||lr(h))return k!==null?null:p(f,c,h,w,null);zi(f,h)}return null}function y(f,c,h,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(h)||null,a(c,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xi:return f=f.get(w.key===null?h:w.key)||null,s(c,f,w,k);case $n:return f=f.get(w.key===null?h:w.key)||null,u(c,f,w,k);case Lt:var C=w._init;return y(f,c,h,C(w._payload),k)}if(wr(w)||lr(w))return f=f.get(h)||null,p(c,f,w,k,null);zi(c,w)}return null}function v(f,c,h,w){for(var k=null,C=null,E=c,T=c=0,b=null;E!==null&&T<h.length;T++){E.index>T?(b=E,E=null):b=E.sibling;var z=m(f,E,h[T],w);if(z===null){E===null&&(E=b);break}e&&E&&z.alternate===null&&t(f,E),c=o(z,c,T),C===null?k=z:C.sibling=z,C=z,E=b}if(T===h.length)return n(f,E),K&&ln(f,T),k;if(E===null){for(;T<h.length;T++)E=d(f,h[T],w),E!==null&&(c=o(E,c,T),C===null?k=E:C.sibling=E,C=E);return K&&ln(f,T),k}for(E=r(f,E);T<h.length;T++)b=y(E,f,T,h[T],w),b!==null&&(e&&b.alternate!==null&&E.delete(b.key===null?T:b.key),c=o(b,c,T),C===null?k=b:C.sibling=b,C=b);return e&&E.forEach(function(de){return t(f,de)}),K&&ln(f,T),k}function g(f,c,h,w){var k=lr(h);if(typeof k!="function")throw Error(x(150));if(h=k.call(h),h==null)throw Error(x(151));for(var C=k=null,E=c,T=c=0,b=null,z=h.next();E!==null&&!z.done;T++,z=h.next()){E.index>T?(b=E,E=null):b=E.sibling;var de=m(f,E,z.value,w);if(de===null){E===null&&(E=b);break}e&&E&&de.alternate===null&&t(f,E),c=o(de,c,T),C===null?k=de:C.sibling=de,C=de,E=b}if(z.done)return n(f,E),K&&ln(f,T),k;if(E===null){for(;!z.done;T++,z=h.next())z=d(f,z.value,w),z!==null&&(c=o(z,c,T),C===null?k=z:C.sibling=z,C=z);return K&&ln(f,T),k}for(E=r(f,E);!z.done;T++,z=h.next())z=y(E,f,T,z.value,w),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?T:z.key),c=o(z,c,T),C===null?k=z:C.sibling=z,C=z);return e&&E.forEach(function(pe){return t(f,pe)}),K&&ln(f,T),k}function S(f,c,h,w){if(typeof h=="object"&&h!==null&&h.type===Pn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case xi:e:{for(var k=h.key,C=c;C!==null;){if(C.key===k){if(k=h.type,k===Pn){if(C.tag===7){n(f,C.sibling),c=i(C,h.props.children),c.return=f,f=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Lt&&of(k)===C.type){n(f,C.sibling),c=i(C,h.props),c.ref=fr(f,C,h),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}h.type===Pn?(c=hn(h.props.children,f.mode,w,h.key),c.return=f,f=c):(w=lo(h.type,h.key,h.props,null,f.mode,w),w.ref=fr(f,c,h),w.return=f,f=w)}return l(f);case $n:e:{for(C=h.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Sa(h,f.mode,w),c.return=f,f=c}return l(f);case Lt:return C=h._init,S(f,c,C(h._payload),w)}if(wr(h))return v(f,c,h,w);if(lr(h))return g(f,c,h,w);zi(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=wa(h,f.mode,w),c.return=f,f=c),l(f)):n(f,c)}return S}var Gn=Tp(!0),Rp=Tp(!1),pi={},yt=tn(pi),Yr=tn(pi),Xr=tn(pi);function fn(e){if(e===pi)throw Error(x(174));return e}function _u(e,t){switch(Q(Xr,t),Q(Yr,e),Q(yt,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wa(t,e)}Y(yt),Q(yt,t)}function qn(){Y(yt),Y(Yr),Y(Xr)}function zp(e){fn(Xr.current);var t=fn(yt.current),n=Wa(t,e.type);t!==n&&(Q(Yr,e),Q(yt,n))}function Eu(e){Yr.current===e&&(Y(yt),Y(Yr))}var G=tn(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=[];function Cu(){for(var e=0;e<pa.length;e++)pa[e]._workInProgressVersionPrimary=null;pa.length=0}var to=Nt.ReactCurrentDispatcher,ha=Nt.ReactCurrentBatchConfig,gn=0,Z=null,oe=null,ue=null,To=!1,Ir=!1,Kr=0,A1=0;function ve(){throw Error(x(321))}function $u(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Pu(e,t,n,r,i,o){if(gn=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?U1:W1,e=n(r,i),Ir){o=0;do{if(Ir=!1,Kr=0,25<=o)throw Error(x(301));o+=1,ue=oe=null,t.updateQueue=null,to.current=B1,e=n(r,i)}while(Ir)}if(to.current=Ro,t=oe!==null&&oe.next!==null,gn=0,ue=oe=Z=null,To=!1,t)throw Error(x(300));return e}function Iu(){var e=Kr!==0;return Kr=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function qe(){if(oe===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?Z.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(x(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function Gr(e,t){return typeof t=="function"?t(e):t}function ma(e){var t=qe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var p=u.lane;if((gn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,Z.lanes|=p,vn|=p}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,at(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ya(e){var t=qe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);at(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mp(){}function Lp(e,t){var n=Z,r=qe(),i=t(),o=!at(r.memoizedState,i);if(o&&(r.memoizedState=i,Oe=!0),r=r.queue,Ou(Fp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,qr(9,Ap.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(x(349));gn&30||jp(n,t,i)}return i}function jp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ap(e,t,n,r){t.value=n,t.getSnapshot=r,Vp(t)&&Dp(e)}function Fp(e,t,n){return n(function(){Vp(t)&&Dp(e)})}function Vp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function Dp(e){var t=Pt(e,1);t!==null&&lt(t,e,1,-1)}function lf(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},t.queue=e,e=e.dispatch=D1.bind(null,Z,e),[t.memoizedState,e]}function qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Up(){return qe().memoizedState}function no(e,t,n,r){var i=ct();Z.flags|=e,i.memoizedState=qr(1|t,n,void 0,r===void 0?null:r)}function ol(e,t,n,r){var i=qe();r=r===void 0?null:r;var o=void 0;if(oe!==null){var l=oe.memoizedState;if(o=l.destroy,r!==null&&$u(r,l.deps)){i.memoizedState=qr(t,n,o,r);return}}Z.flags|=e,i.memoizedState=qr(1|t,n,o,r)}function af(e,t){return no(8390656,8,e,t)}function Ou(e,t){return ol(2048,8,e,t)}function Wp(e,t){return ol(4,2,e,t)}function Bp(e,t){return ol(4,4,e,t)}function bp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qp(e,t,n){return n=n!=null?n.concat([e]):null,ol(4,4,bp.bind(null,t,e),n)}function Nu(){}function Hp(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$u(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yp(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$u(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xp(e,t,n){return gn&21?(at(n,t)||(n=qd(),Z.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function F1(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ha.transition;ha.transition={};try{e(!1),t()}finally{U=n,ha.transition=r}}function Kp(){return qe().memoizedState}function V1(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gp(e))qp(t,n);else if(n=Pp(e,t,n,r),n!==null){var i=Ee();lt(n,e,r,i),Zp(n,t,r)}}function D1(e,t,n){var r=Kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gp(e))qp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,at(a,l)){var s=t.interleaved;s===null?(i.next=i,ku(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Pp(e,t,i,r),n!==null&&(i=Ee(),lt(n,e,r,i),Zp(n,t,r))}}function Gp(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function qp(e,t){Ir=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,au(e,n)}}var Ro={readContext:Ge,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},U1={readContext:Ge,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:af,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,bp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=V1.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:lf,useDebugValue:Nu,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=lf(!1),t=e[0];return e=F1.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=ct();if(K){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ce===null)throw Error(x(349));gn&30||jp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,af(Fp.bind(null,r,o,e),[e]),r.flags|=2048,qr(9,Ap.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ct(),t=ce.identifierPrefix;if(K){var n=_t,r=xt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=A1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},W1={readContext:Ge,useCallback:Hp,useContext:Ge,useEffect:Ou,useImperativeHandle:Qp,useInsertionEffect:Wp,useLayoutEffect:Bp,useMemo:Yp,useReducer:ma,useRef:Up,useState:function(){return ma(Gr)},useDebugValue:Nu,useDeferredValue:function(e){var t=qe();return Xp(t,oe.memoizedState,e)},useTransition:function(){var e=ma(Gr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Mp,useSyncExternalStore:Lp,useId:Kp,unstable_isNewReconciler:!1},B1={readContext:Ge,useCallback:Hp,useContext:Ge,useEffect:Ou,useImperativeHandle:Qp,useInsertionEffect:Wp,useLayoutEffect:Bp,useMemo:Yp,useReducer:ya,useRef:Up,useState:function(){return ya(Gr)},useDebugValue:Nu,useDeferredValue:function(e){var t=qe();return oe===null?t.memoizedState=e:Xp(t,oe.memoizedState,e)},useTransition:function(){var e=ya(Gr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Mp,useSyncExternalStore:Lp,useId:Kp,unstable_isNewReconciler:!1};function Zn(e,t){try{var n="",r=t;do n+=gm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ga(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var b1=typeof WeakMap=="function"?WeakMap:Map;function Jp(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mo||(Mo=!0,ks=r),fs(e,t)},n}function e0(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fs(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function sf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new b1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=iy.bind(null,e,t,n),t.then(e,e))}function uf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var Q1=Nt.ReactCurrentOwner,Oe=!1;function _e(e,t,n,r){t.child=e===null?Rp(t,null,n,r):Gn(t,e.child,n,r)}function ff(e,t,n,r,i){n=n.render;var o=t.ref;return Wn(t,i),r=Pu(e,t,n,r,o,i),n=Iu(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(K&&n&&mu(t),t.flags|=1,_e(e,t,r,i),t.child)}function df(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,t0(e,t,o,r,i)):(e=lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Br,n(l,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=Gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function t0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Br(o,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,It(e,t,i)}return ds(e,t,n,r,i)}function n0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(An,Me),Me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(An,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Q(An,Me),Me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Q(An,Me),Me|=r;return _e(e,t,i,n),t.child}function r0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ds(e,t,n,r,i){var o=Te(n)?mn:xe.current;return o=Xn(t,o),Wn(t,i),n=Pu(e,t,n,r,o,i),r=Iu(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(K&&r&&mu(t),t.flags|=1,_e(e,t,n,i),t.child)}function pf(e,t,n,r,i){if(Te(n)){var o=!0;Eo(t)}else o=!1;if(Wn(t,i),t.stateNode===null)ro(e,t),Np(t,n,r),cs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Te(n)?mn:xe.current,u=Xn(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&rf(t,l,r,u),jt=!1;var m=t.memoizedState;l.state=m,Oo(t,r,l,i),s=t.memoizedState,a!==r||m!==s||Ne.current||jt?(typeof p=="function"&&(us(t,n,p,r),s=t.memoizedState),(a=jt||nf(t,n,a,r,m,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ip(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:et(t.type,a),l.props=u,d=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ge(s):(s=Te(n)?mn:xe.current,s=Xn(t,s));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||m!==s)&&rf(t,l,r,s),jt=!1,m=t.memoizedState,l.state=m,Oo(t,r,l,i);var v=t.memoizedState;a!==d||m!==v||Ne.current||jt?(typeof y=="function"&&(us(t,n,y,r),v=t.memoizedState),(u=jt||nf(t,n,u,r,m,v,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ps(e,t,n,r,o,i)}function ps(e,t,n,r,i,o){r0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&qc(t,n,!1),It(e,t,o);r=t.stateNode,Q1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Gn(t,e.child,null,o),t.child=Gn(t,null,a,o)):_e(e,t,a,o),t.memoizedState=r.state,i&&qc(t,n,!0),t.child}function i0(e){var t=e.stateNode;t.pendingContext?Gc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gc(e,t.context,!1),_u(e,t.containerInfo)}function hf(e,t,n,r,i){return Kn(),gu(i),t.flags|=256,_e(e,t,n,r),t.child}var hs={dehydrated:null,treeContext:null,retryLane:0};function ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function o0(e,t,n){var r=t.pendingProps,i=G.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(G,i&1),e===null)return as(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=sl(l,r,0,null),e=hn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ms(n),t.memoizedState=hs,e):Tu(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return H1(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Gt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Gt(a,o):(o=hn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ms(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=hs,r}return o=e.child,e=o.sibling,r=Gt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tu(e,t){return t=sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mi(e,t,n,r){return r!==null&&gu(r),Gn(t,e.child,null,n),e=Tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ga(Error(x(422))),Mi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=sl({mode:"visible",children:r.children},i,0,null),o=hn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Gn(t,e.child,null,l),t.child.memoizedState=ms(l),t.memoizedState=hs,o);if(!(t.mode&1))return Mi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(x(419)),r=ga(o,r,void 0),Mi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Oe||a){if(r=ce,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pt(e,i),lt(r,e,i,-1))}return Au(),r=ga(Error(x(421))),Mi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=oy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Le=Ht(i.nextSibling),je=t,K=!0,nt=null,e!==null&&(Be[be++]=xt,Be[be++]=_t,Be[be++]=yn,xt=e.id,_t=e.overflow,yn=t),t=Tu(t,r.children),t.flags|=4096,t)}function mf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ss(e.return,t,n)}function va(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function l0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mf(e,n,t);else if(e.tag===19)mf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),va(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&No(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}va(t,!0,n,null,o);break;case"together":va(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Y1(e,t,n){switch(t.tag){case 3:i0(t),Kn();break;case 5:zp(t);break;case 1:Te(t.type)&&Eo(t);break;case 4:_u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(Po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?o0(e,t,n):(Q(G,G.current&1),e=It(e,t,n),e!==null?e.sibling:null);Q(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return l0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,n0(e,t,n)}return It(e,t,n)}var a0,ys,s0,u0;a0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ys=function(){};s0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(yt.current);var o=null;switch(n){case"input":i=Fa(e,i),r=Fa(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=Ua(e,i),r=Ua(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xo)}Ba(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};u0=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function X1(e,t,n){var r=t.pendingProps;switch(yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Te(t.type)&&_o(),we(t),null;case 3:return r=t.stateNode,qn(),Y(Ne),Y(xe),Cu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(Es(nt),nt=null))),ys(e,t),we(t),null;case 5:Eu(t);var i=fn(Xr.current);if(n=t.type,e!==null&&t.stateNode!=null)s0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return we(t),null}if(e=fn(yt.current),Ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ht]=t,r[Hr]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<kr.length;i++)H(kr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":_c(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":Cc(r,o),H("invalid",r)}Ba(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ti(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ti(r.textContent,a,e),i=["children",""+a]):jr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":_i(r),Ec(r,o,!0);break;case"textarea":_i(r),$c(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ht]=t,e[Hr]=r,a0(e,t,!1,!1),t.stateNode=e;e:{switch(l=ba(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<kr.length;i++)H(kr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":_c(e,r),i=Fa(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),H("invalid",e);break;case"textarea":Cc(e,r),i=Ua(e,r),H("invalid",e);break;default:i=r}Ba(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Vd(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ad(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ar(e,s):typeof s=="number"&&Ar(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&H("scroll",e):s!=null&&tu(e,o,s,l))}switch(n){case"input":_i(e),Ec(e,r,!1);break;case"textarea":_i(e),$c(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Fn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)u0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=fn(Xr.current),fn(yt.current),Ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(o=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ti(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return we(t),null;case 13:if(Y(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Le!==null&&t.mode&1&&!(t.flags&128))$p(),Kn(),t.flags|=98560,o=!1;else if(o=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[ht]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),o=!1}else nt!==null&&(Es(nt),nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?le===0&&(le=3):Au())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return qn(),ys(e,t),e===null&&br(t.stateNode.containerInfo),we(t),null;case 10:return Su(t.type._context),we(t),null;case 17:return Te(t.type)&&_o(),we(t),null;case 19:if(Y(G),o=t.memoizedState,o===null)return we(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)dr(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=No(e),l!==null){for(t.flags|=128,dr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&ne()>Jn&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304)}else{if(!r)if(e=No(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!K)return we(t),null}else 2*ne()-o.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ne(),t.sibling=null,n=G.current,Q(G,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return ju(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function K1(e,t){switch(yu(t),t.tag){case 1:return Te(t.type)&&_o(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(),Y(Ne),Y(xe),Cu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Eu(t),null;case 13:if(Y(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(G),null;case 4:return qn(),null;case 10:return Su(t.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var Li=!1,ke=!1,G1=typeof WeakSet=="function"?WeakSet:Set,O=null;function jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function gs(e,t,n){try{n()}catch(r){ee(e,t,r)}}var yf=!1;function q1(e,t){if(es=wo,e=pp(),hu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,d=e,m=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=l+i),d!==o||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(y=d.firstChild)!==null;)m=d,d=y;for(;;){if(d===e)break t;if(m===n&&++u===i&&(a=l),m===o&&++p===r&&(s=l),(y=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ts={focusedElem:e,selectionRange:n},wo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,S=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:et(t.type,g),S);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=yf,yf=!1,v}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&gs(t,n,o)}i=i.next}while(i!==r)}}function ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function c0(e){var t=e.alternate;t!==null&&(e.alternate=null,c0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Hr],delete t[is],delete t[z1],delete t[M1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function f0(e){return e.tag===5||e.tag===3||e.tag===4}function gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||f0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xo));else if(r!==4&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function Ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}var he=null,tt=!1;function Tt(e,t,n){for(n=n.child;n!==null;)d0(e,t,n),n=n.sibling}function d0(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Zo,n)}catch{}switch(n.tag){case 5:ke||jn(n,t);case 6:var r=he,i=tt;he=null,Tt(e,t,n),he=r,tt=i,he!==null&&(tt?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(tt?(e=he,n=n.stateNode,e.nodeType===8?fa(e.parentNode,n):e.nodeType===1&&fa(e,n),Ur(e)):fa(he,n.stateNode));break;case 4:r=he,i=tt,he=n.stateNode.containerInfo,tt=!0,Tt(e,t,n),he=r,tt=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&gs(n,t,l),i=i.next}while(i!==r)}Tt(e,t,n);break;case 1:if(!ke&&(jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Tt(e,t,n),ke=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function vf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new G1),t.forEach(function(r){var i=ly.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,tt=!1;break e;case 3:he=a.stateNode.containerInfo,tt=!0;break e;case 4:he=a.stateNode.containerInfo,tt=!0;break e}a=a.return}if(he===null)throw Error(x(160));d0(o,l,i),he=null,tt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)p0(t,e),t=t.sibling}function p0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),ut(e),r&4){try{Or(3,e,e.return),ll(3,e)}catch(g){ee(e,e.return,g)}try{Or(5,e,e.return)}catch(g){ee(e,e.return,g)}}break;case 1:Je(t,e),ut(e),r&512&&n!==null&&jn(n,n.return);break;case 5:if(Je(t,e),ut(e),r&512&&n!==null&&jn(n,n.return),e.flags&32){var i=e.stateNode;try{Ar(i,"")}catch(g){ee(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Md(i,o),ba(a,l);var u=ba(a,o);for(l=0;l<s.length;l+=2){var p=s[l],d=s[l+1];p==="style"?Vd(i,d):p==="dangerouslySetInnerHTML"?Ad(i,d):p==="children"?Ar(i,d):tu(i,p,d,u)}switch(a){case"input":Va(i,o);break;case"textarea":Ld(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Fn(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?Fn(i,!!o.multiple,o.defaultValue,!0):Fn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Hr]=o}catch(g){ee(e,e.return,g)}}break;case 6:if(Je(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){ee(e,e.return,g)}}break;case 3:if(Je(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(g){ee(e,e.return,g)}break;case 4:Je(t,e),ut(e);break;case 13:Je(t,e),ut(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Mu=ne())),r&4&&vf(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(u=ke)||p,Je(t,e),ke=u):Je(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(O=e,p=e.child;p!==null;){for(d=O=p;O!==null;){switch(m=O,y=m.child,m.tag){case 0:case 11:case 14:case 15:Or(4,m,m.return);break;case 1:jn(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){ee(r,n,g)}}break;case 5:jn(m,m.return);break;case 22:if(m.memoizedState!==null){Sf(d);continue}}y!==null?(y.return=m,O=y):Sf(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Fd("display",l))}catch(g){ee(e,e.return,g)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){ee(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Je(t,e),ut(e),r&4&&vf(e);break;case 21:break;default:Je(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(f0(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ar(i,""),r.flags&=-33);var o=gf(e);Ss(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=gf(e);ws(e,a,l);break;default:throw Error(x(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Z1(e,t,n){O=e,h0(e)}function h0(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Li;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ke;a=Li;var u=ke;if(Li=l,(ke=s)&&!u)for(O=i;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?kf(i):s!==null?(s.return=l,O=s):kf(i);for(;o!==null;)O=o,h0(o),o=o.sibling;O=i,Li=a,ke=u}wf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):wf(e)}}function wf(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||ll(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&tf(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tf(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Ur(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ke||t.flags&512&&vs(t)}catch(m){ee(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Sf(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function kf(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ll(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ee(t,i,s)}}var o=t.return;try{vs(t)}catch(s){ee(t,o,s)}break;case 5:var l=t.return;try{vs(t)}catch(s){ee(t,l,s)}}}catch(s){ee(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var J1=Math.ceil,zo=Nt.ReactCurrentDispatcher,Ru=Nt.ReactCurrentOwner,Ke=Nt.ReactCurrentBatchConfig,F=0,ce=null,ie=null,ye=0,Me=0,An=tn(0),le=0,Zr=null,vn=0,al=0,zu=0,Nr=null,Ie=null,Mu=0,Jn=1/0,wt=null,Mo=!1,ks=null,Xt=null,ji=!1,Dt=null,Lo=0,Tr=0,xs=null,io=-1,oo=0;function Ee(){return F&6?ne():io!==-1?io:io=ne()}function Kt(e){return e.mode&1?F&2&&ye!==0?ye&-ye:j1.transition!==null?(oo===0&&(oo=qd()),oo):(e=U,e!==0||(e=window.event,e=e===void 0?16:ip(e.type)),e):1}function lt(e,t,n,r){if(50<Tr)throw Tr=0,xs=null,Error(x(185));ci(e,n,r),(!(F&2)||e!==ce)&&(e===ce&&(!(F&2)&&(al|=n),le===4&&Ft(e,ye)),Re(e,r),n===1&&F===0&&!(t.mode&1)&&(Jn=ne()+500,rl&&nn()))}function Re(e,t){var n=e.callbackNode;jm(e,t);var r=vo(e,e===ce?ye:0);if(r===0)n!==null&&Oc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oc(n),t===1)e.tag===0?L1(xf.bind(null,e)):_p(xf.bind(null,e)),T1(function(){!(F&6)&&nn()}),n=null;else{switch(Zd(r)){case 1:n=lu;break;case 4:n=Kd;break;case 16:n=go;break;case 536870912:n=Gd;break;default:n=go}n=x0(n,m0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function m0(e,t){if(io=-1,oo=0,F&6)throw Error(x(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=vo(e,e===ce?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=jo(e,r);else{t=r;var i=F;F|=2;var o=g0();(ce!==e||ye!==t)&&(wt=null,Jn=ne()+500,pn(e,t));do try{ny();break}catch(a){y0(e,a)}while(1);wu(),zo.current=o,F=i,ie!==null?t=0:(ce=null,ye=0,t=le)}if(t!==0){if(t===2&&(i=Ka(e),i!==0&&(r=i,t=_s(e,i))),t===1)throw n=Zr,pn(e,0),Ft(e,r),Re(e,ne()),n;if(t===6)Ft(e,r);else{if(i=e.current.alternate,!(r&30)&&!ey(i)&&(t=jo(e,r),t===2&&(o=Ka(e),o!==0&&(r=o,t=_s(e,o))),t===1))throw n=Zr,pn(e,0),Ft(e,r),Re(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:an(e,Ie,wt);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=Mu+500-ne(),10<t)){if(vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rs(an.bind(null,e,Ie,wt),t);break}an(e,Ie,wt);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ot(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*J1(r/1960))-r,10<r){e.timeoutHandle=rs(an.bind(null,e,Ie,wt),r);break}an(e,Ie,wt);break;case 5:an(e,Ie,wt);break;default:throw Error(x(329))}}}return Re(e,ne()),e.callbackNode===n?m0.bind(null,e):null}function _s(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=jo(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Es(t)),e}function Es(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function ey(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!at(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~zu,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function xf(e){if(F&6)throw Error(x(327));Bn();var t=vo(e,0);if(!(t&1))return Re(e,ne()),null;var n=jo(e,t);if(e.tag!==0&&n===2){var r=Ka(e);r!==0&&(t=r,n=_s(e,r))}if(n===1)throw n=Zr,pn(e,0),Ft(e,t),Re(e,ne()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Ie,wt),Re(e,ne()),null}function Lu(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Jn=ne()+500,rl&&nn())}}function wn(e){Dt!==null&&Dt.tag===0&&!(F&6)&&Bn();var t=F;F|=1;var n=Ke.transition,r=U;try{if(Ke.transition=null,U=1,e)return e()}finally{U=r,Ke.transition=n,F=t,!(F&6)&&nn()}}function ju(){Me=An.current,Y(An)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,N1(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_o();break;case 3:qn(),Y(Ne),Y(xe),Cu();break;case 5:Eu(r);break;case 4:qn();break;case 13:Y(G);break;case 19:Y(G);break;case 10:Su(r.type._context);break;case 22:case 23:ju()}n=n.return}if(ce=e,ie=e=Gt(e.current,null),ye=Me=t,le=0,Zr=null,zu=al=vn=0,Ie=Nr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}cn=null}return e}function y0(e,t){do{var n=ie;try{if(wu(),to.current=Ro,To){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}To=!1}if(gn=0,ue=oe=Z=null,Ir=!1,Kr=0,Ru.current=null,n===null||n.return===null){le=1,Zr=t,ie=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=ye,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=uf(l);if(y!==null){y.flags&=-257,cf(y,l,a,o,t),y.mode&1&&sf(o,u,t),t=y,s=u;var v=t.updateQueue;if(v===null){var g=new Set;g.add(s),t.updateQueue=g}else v.add(s);break e}else{if(!(t&1)){sf(o,u,t),Au();break e}s=Error(x(426))}}else if(K&&a.mode&1){var S=uf(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),cf(S,l,a,o,t),gu(Zn(s,a));break e}}o=s=Zn(s,a),le!==4&&(le=2),Nr===null?Nr=[o]:Nr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Jp(o,s,t);ef(o,f);break e;case 1:a=s;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Xt===null||!Xt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=e0(o,a,t);ef(o,w);break e}}o=o.return}while(o!==null)}w0(n)}catch(k){t=k,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function g0(){var e=zo.current;return zo.current=Ro,e===null?Ro:e}function Au(){(le===0||le===3||le===2)&&(le=4),ce===null||!(vn&268435455)&&!(al&268435455)||Ft(ce,ye)}function jo(e,t){var n=F;F|=2;var r=g0();(ce!==e||ye!==t)&&(wt=null,pn(e,t));do try{ty();break}catch(i){y0(e,i)}while(1);if(wu(),F=n,zo.current=r,ie!==null)throw Error(x(261));return ce=null,ye=0,le}function ty(){for(;ie!==null;)v0(ie)}function ny(){for(;ie!==null&&!Pm();)v0(ie)}function v0(e){var t=k0(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?w0(e):ie=t,Ru.current=null}function w0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=K1(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=X1(n,t,Me),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function an(e,t,n){var r=U,i=Ke.transition;try{Ke.transition=null,U=1,ry(e,t,n,r)}finally{Ke.transition=i,U=r}return null}function ry(e,t,n,r){do Bn();while(Dt!==null);if(F&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Am(e,o),e===ce&&(ie=ce=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ji||(ji=!0,x0(go,function(){return Bn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var l=U;U=1;var a=F;F|=4,Ru.current=null,q1(e,n),p0(n,e),_1(ts),wo=!!es,ts=es=null,e.current=n,Z1(n),Im(),F=a,U=l,Ke.transition=o}else e.current=n;if(ji&&(ji=!1,Dt=e,Lo=i),o=e.pendingLanes,o===0&&(Xt=null),Tm(n.stateNode),Re(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mo)throw Mo=!1,e=ks,ks=null,e;return Lo&1&&e.tag!==0&&Bn(),o=e.pendingLanes,o&1?e===xs?Tr++:(Tr=0,xs=e):Tr=0,nn(),null}function Bn(){if(Dt!==null){var e=Zd(Lo),t=Ke.transition,n=U;try{if(Ke.transition=null,U=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Lo=0,F&6)throw Error(x(331));var i=F;for(F|=4,O=e.current;O!==null;){var o=O,l=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(O=u;O!==null;){var p=O;switch(p.tag){case 0:case 11:case 15:Or(8,p,o)}var d=p.child;if(d!==null)d.return=p,O=d;else for(;O!==null;){p=O;var m=p.sibling,y=p.return;if(c0(p),p===u){O=null;break}if(m!==null){m.return=y,O=m;break}O=y}}}var v=o.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var S=g.sibling;g.sibling=null,g=S}while(g!==null)}}O=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,O=l;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Or(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,O=f;break e}O=o.return}}var c=e.current;for(O=c;O!==null;){l=O;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,O=h;else e:for(l=c;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ll(9,a)}}catch(k){ee(a,a.return,k)}if(a===l){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if(F=i,nn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Zo,e)}catch{}r=!0}return r}finally{U=n,Ke.transition=t}}return!1}function _f(e,t,n){t=Zn(n,t),t=Jp(e,t,1),e=Yt(e,t,1),t=Ee(),e!==null&&(ci(e,1,t),Re(e,t))}function ee(e,t,n){if(e.tag===3)_f(e,e,n);else for(;t!==null;){if(t.tag===3){_f(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=Zn(n,e),e=e0(t,e,1),t=Yt(t,e,1),e=Ee(),t!==null&&(ci(t,1,e),Re(t,e));break}}t=t.return}}function iy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(ye&n)===n&&(le===4||le===3&&(ye&130023424)===ye&&500>ne()-Mu?pn(e,0):zu|=n),Re(e,t)}function S0(e,t){t===0&&(e.mode&1?(t=$i,$i<<=1,!($i&130023424)&&($i=4194304)):t=1);var n=Ee();e=Pt(e,t),e!==null&&(ci(e,t,n),Re(e,n))}function oy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S0(e,n)}function ly(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),S0(e,n)}var k0;k0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,Y1(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,K&&t.flags&1048576&&Ep(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var i=Xn(t,xe.current);Wn(t,n),i=Pu(null,t,r,e,i,n);var o=Iu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(o=!0,Eo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xu(t),i.updater=il,t.stateNode=i,i._reactInternals=t,cs(t,r,e,n),t=ps(null,t,r,!0,o,n)):(t.tag=0,K&&o&&mu(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sy(r),e=et(r,e),i){case 0:t=ds(null,t,r,e,n);break e;case 1:t=pf(null,t,r,e,n);break e;case 11:t=ff(null,t,r,e,n);break e;case 14:t=df(null,t,r,et(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),ds(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),pf(e,t,r,i,n);case 3:e:{if(i0(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ip(e,t),Oo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zn(Error(x(423)),t),t=hf(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(x(424)),t),t=hf(e,t,r,n,i);break e}else for(Le=Ht(t.stateNode.containerInfo.firstChild),je=t,K=!0,nt=null,n=Rp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===i){t=It(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return zp(t),e===null&&as(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ns(r,i)?l=null:o!==null&&ns(r,o)&&(t.flags|=32),r0(e,t),_e(e,t,l,n),t.child;case 6:return e===null&&as(t),null;case 13:return o0(e,t,n);case 4:return _u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),ff(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Q(Po,r._currentValue),r._currentValue=l,o!==null)if(at(o.value,l)){if(o.children===i.children&&!Ne.current){t=It(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Et(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ss(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(x(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ss(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wn(t,n),i=Ge(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=et(r,t.pendingProps),i=et(r.type,i),df(e,t,r,i,n);case 15:return t0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),ro(e,t),t.tag=1,Te(r)?(e=!0,Eo(t)):e=!1,Wn(t,n),Np(t,r,i),cs(t,r,i,n),ps(null,t,r,!0,e,n);case 19:return l0(e,t,n);case 22:return n0(e,t,n)}throw Error(x(156,t.tag))};function x0(e,t){return Xd(e,t)}function ay(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new ay(e,t,n,r)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sy(e){if(typeof e=="function")return Fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ru)return 11;if(e===iu)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Fu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Pn:return hn(n.children,i,o,t);case nu:l=8,i|=8;break;case Ma:return e=Ye(12,n,t,i|2),e.elementType=Ma,e.lanes=o,e;case La:return e=Ye(13,n,t,i),e.elementType=La,e.lanes=o,e;case ja:return e=Ye(19,n,t,i),e.elementType=ja,e.lanes=o,e;case Td:return sl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Od:l=10;break e;case Nd:l=9;break e;case ru:l=11;break e;case iu:l=14;break e;case Lt:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ye(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function hn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function sl(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=Td,e.lanes=n,e.stateNode={isHidden:!1},e}function wa(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function Sa(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,i,o,l,a,s){return e=new uy(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ye(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(o),e}function cy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _0(e){if(!e)return Jt;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(Te(n))return xp(e,n,t)}return t}function E0(e,t,n,r,i,o,l,a,s){return e=Vu(n,r,!0,e,i,o,l,a,s),e.context=_0(null),n=e.current,r=Ee(),i=Kt(n),o=Et(r,i),o.callback=t??null,Yt(n,o,i),e.current.lanes=i,ci(e,i,r),Re(e,r),e}function ul(e,t,n,r){var i=t.current,o=Ee(),l=Kt(i);return n=_0(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(i,t,l),e!==null&&(lt(e,i,l,o),eo(e,i,l)),l}function Ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Du(e,t){Ef(e,t),(e=e.alternate)&&Ef(e,t)}function fy(){return null}var C0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uu(e){this._internalRoot=e}cl.prototype.render=Uu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));ul(e,t,null,null)};cl.prototype.unmount=Uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){ul(null,e,null,null)}),t[$t]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=tp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&rp(e)}};function Wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cf(){}function dy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ao(l);o.call(u)}}var l=E0(t,r,e,0,null,!1,!1,"",Cf);return e._reactRootContainer=l,e[$t]=l.current,br(e.nodeType===8?e.parentNode:e),wn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ao(s);a.call(u)}}var s=Vu(e,0,!1,null,null,!1,!1,"",Cf);return e._reactRootContainer=s,e[$t]=s.current,br(e.nodeType===8?e.parentNode:e),wn(function(){ul(t,s,n,r)}),s}function dl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Ao(l);a.call(s)}}ul(t,l,e,i)}else l=dy(n,t,e,i,r);return Ao(l)}Jd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sr(t.pendingLanes);n!==0&&(au(t,n|1),Re(t,ne()),!(F&6)&&(Jn=ne()+500,nn()))}break;case 13:wn(function(){var r=Pt(e,1);if(r!==null){var i=Ee();lt(r,e,1,i)}}),Du(e,1)}};su=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Ee();lt(t,e,134217728,n)}Du(e,134217728)}};ep=function(e){if(e.tag===13){var t=Kt(e),n=Pt(e,t);if(n!==null){var r=Ee();lt(n,e,t,r)}Du(e,t)}};tp=function(){return U};np=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Ha=function(e,t,n){switch(t){case"input":if(Va(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=nl(r);if(!i)throw Error(x(90));zd(r),Va(r,i)}}}break;case"textarea":Ld(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};Wd=Lu;Bd=wn;var py={usingClientEntryPoint:!1,Events:[di,Tn,nl,Dd,Ud,Lu]},pr={findFiberByHostInstance:un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hy={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hd(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Zo=Ai.inject(hy),mt=Ai}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(t))throw Error(x(200));return cy(e,t,null,n)};Ve.createRoot=function(e,t){if(!Wu(e))throw Error(x(299));var n=!1,r="",i=C0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vu(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,br(e.nodeType===8?e.parentNode:e),new Uu(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Hd(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return wn(e)};Ve.hydrate=function(e,t,n){if(!fl(t))throw Error(x(200));return dl(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Wu(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=C0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=E0(t,null,e,1,n??null,i,!1,o,l),e[$t]=t.current,br(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new cl(t)};Ve.render=function(e,t,n){if(!fl(t))throw Error(x(200));return dl(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!fl(e))throw Error(x(40));return e._reactRootContainer?(wn(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};Ve.unstable_batchedUpdates=Lu;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return dl(e,t,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ve})(fm);var $f=po;Ta.createRoot=$f.createRoot,Ta.hydrateRoot=$f.hydrateRoot;var Bu=mi(),M=e=>hi(e,Bu),bu=mi();M.write=e=>hi(e,bu);var pl=mi();M.onStart=e=>hi(e,pl);var Qu=mi();M.onFrame=e=>hi(e,Qu);var Hu=mi();M.onFinish=e=>hi(e,Hu);var bn=[];M.setTimeout=(e,t)=>{let n=M.now()+t,r=()=>{let o=bn.findIndex(l=>l.cancel==r);~o&&bn.splice(o,1),Wt-=~o?1:0},i={time:n,handler:e,cancel:r};return bn.splice($0(n),0,i),Wt+=1,P0(),i};var $0=e=>~(~bn.findIndex(t=>t.time>e)||~bn.length);M.cancel=e=>{pl.delete(e),Qu.delete(e),Hu.delete(e),Bu.delete(e),bu.delete(e)};M.sync=e=>{Cs=!0,M.batchedUpdates(e),Cs=!1};M.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...i){t=i,M.onStart(n)}return r.handler=e,r.cancel=()=>{pl.delete(n),t=null},r};var Yu=typeof window<"u"?window.requestAnimationFrame:()=>{};M.use=e=>Yu=e;M.now=typeof performance<"u"?()=>performance.now():Date.now;M.batchedUpdates=e=>e();M.catch=console.error;M.frameLoop="always";M.advance=()=>{M.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):O0()};var Ut=-1,Wt=0,Cs=!1;function hi(e,t){Cs?(t.delete(e),e(0)):(t.add(e),P0())}function P0(){Ut<0&&(Ut=0,M.frameLoop!=="demand"&&Yu(I0))}function my(){Ut=-1}function I0(){~Ut&&(Yu(I0),M.batchedUpdates(O0))}function O0(){let e=Ut;Ut=M.now();let t=$0(Ut);if(t&&(N0(bn.splice(0,t),n=>n.handler()),Wt-=t),!Wt){my();return}pl.flush(),Bu.flush(e?Math.min(64,Ut-e):16.667),Qu.flush(),bu.flush(),Hu.flush()}function mi(){let e=new Set,t=e;return{add(n){Wt+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return Wt-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,Wt-=t.size,N0(t,r=>r(n)&&e.add(r)),Wt+=e.size,t=e)}}}function N0(e,t){e.forEach(n=>{try{t(n)}catch(r){M.catch(r)}})}var yy=Object.defineProperty,gy=(e,t)=>{for(var n in t)yy(e,n,{get:t[n],enumerable:!0})},st={};gy(st,{assign:()=>wy,colors:()=>qt,createStringInterpolator:()=>Ku,skipAnimation:()=>R0,to:()=>T0,willAdvance:()=>Gu});function $s(){}var vy=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),P={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function St(e,t){if(P.arr(e)){if(!P.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var q=(e,t)=>e.forEach(t);function Ot(e,t,n){if(P.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(let r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Xe=e=>P.und(e)?[]:P.arr(e)?e:[e];function Rr(e,t){if(e.size){let n=Array.from(e);e.clear(),q(n,t)}}var xr=(e,...t)=>Rr(e,n=>n(...t)),Xu=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ku,T0,qt=null,R0=!1,Gu=$s,wy=e=>{e.to&&(T0=e.to),e.now&&(M.now=e.now),e.colors!==void 0&&(qt=e.colors),e.skipAnimation!=null&&(R0=e.skipAnimation),e.createStringInterpolator&&(Ku=e.createStringInterpolator),e.requestAnimationFrame&&M.use(e.requestAnimationFrame),e.batchedUpdates&&(M.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Gu=e.willAdvance),e.frameLoop&&(M.frameLoop=e.frameLoop)},zr=new Set,He=[],ka=[],Fo=0,hl={get idle(){return!zr.size&&!He.length},start(e){Fo>e.priority?(zr.add(e),M.onStart(Sy)):(z0(e),M(Ps))},advance:Ps,sort(e){if(Fo)M.onFrame(()=>hl.sort(e));else{let t=He.indexOf(e);~t&&(He.splice(t,1),M0(e))}},clear(){He=[],zr.clear()}};function Sy(){zr.forEach(z0),zr.clear(),M(Ps)}function z0(e){He.includes(e)||M0(e)}function M0(e){He.splice(ky(He,t=>t.priority>e.priority),0,e)}function Ps(e){let t=ka;for(let n=0;n<He.length;n++){let r=He[n];Fo=r.priority,r.idle||(Gu(r),r.advance(e),r.idle||t.push(r))}return Fo=0,ka=He,ka.length=0,He=t,He.length>0}function ky(e,t){let n=e.findIndex(t);return n<0?e.length:n}var xy=(e,t,n)=>Math.min(Math.max(n,e),t),_y={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},it="[-+]?\\d*\\.?\\d+",Vo=it+"%";function ml(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ey=new RegExp("rgb"+ml(it,it,it)),Cy=new RegExp("rgba"+ml(it,it,it,it)),$y=new RegExp("hsl"+ml(it,Vo,Vo)),Py=new RegExp("hsla"+ml(it,Vo,Vo,it)),Iy=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Oy=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ny=/^#([0-9a-fA-F]{6})$/,Ty=/^#([0-9a-fA-F]{8})$/;function Ry(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ny.exec(e))?parseInt(t[1]+"ff",16)>>>0:qt&&qt[e]!==void 0?qt[e]:(t=Ey.exec(e))?(Cn(t[1])<<24|Cn(t[2])<<16|Cn(t[3])<<8|255)>>>0:(t=Cy.exec(e))?(Cn(t[1])<<24|Cn(t[2])<<16|Cn(t[3])<<8|Of(t[4]))>>>0:(t=Iy.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ty.exec(e))?parseInt(t[1],16)>>>0:(t=Oy.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=$y.exec(e))?(Pf(If(t[1]),Fi(t[2]),Fi(t[3]))|255)>>>0:(t=Py.exec(e))?(Pf(If(t[1]),Fi(t[2]),Fi(t[3]))|Of(t[4]))>>>0:null}function xa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Pf(e,t,n){let r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=xa(i,r,e+1/3),l=xa(i,r,e),a=xa(i,r,e-1/3);return Math.round(o*255)<<24|Math.round(l*255)<<16|Math.round(a*255)<<8}function Cn(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function If(e){return(parseFloat(e)%360+360)%360/360}function Of(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function Fi(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}function Nf(e){let t=Ry(e);if(t===null)return e;t=t||0;let n=(t&4278190080)>>>24,r=(t&16711680)>>>16,i=(t&65280)>>>8,o=(t&255)/255;return`rgba(${n}, ${r}, ${i}, ${o})`}var Jr=(e,t,n)=>{if(P.fun(e))return e;if(P.arr(e))return Jr({range:e,output:t,extrapolate:n});if(P.str(e.output[0]))return Ku(e);let r=e,i=r.output,o=r.range||[0,1],l=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",s=r.easing||(u=>u);return u=>{let p=My(u,o);return zy(u,o[p],o[p+1],i[p],i[p+1],s,l,a,r.map)}};function zy(e,t,n,r,i,o,l,a,s){let u=s?s(e):e;if(u<t){if(l==="identity")return u;l==="clamp"&&(u=t)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return r===i?r:t===n?e<=t?r:i:(t===-1/0?u=-u:n===1/0?u=u-t:u=(u-t)/(n-t),u=o(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function My(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}var Ly=(e,t="end")=>n=>{n=t==="end"?Math.min(n,.999):Math.max(n,.001);let r=n*e,i=t==="end"?Math.floor(r):Math.ceil(r);return xy(0,1,i/e)},Do=1.70158,Vi=Do*1.525,Tf=Do+1,Rf=2*Math.PI/3,zf=2*Math.PI/4.5,Di=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,jy={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Tf*e*e*e-Do*e*e,easeOutBack:e=>1+Tf*Math.pow(e-1,3)+Do*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((Vi+1)*2*e-Vi)/2:(Math.pow(2*e-2,2)*((Vi+1)*(e*2-2)+Vi)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*Rf),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*Rf)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*zf))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*zf)/2+1,easeInBounce:e=>1-Di(1-e),easeOutBounce:Di,easeInOutBounce:e=>e<.5?(1-Di(1-2*e))/2:(1+Di(2*e-1))/2,steps:Ly},er=Symbol.for("FluidValue.get"),Sn=Symbol.for("FluidValue.observers"),Qe=e=>!!(e&&e[er]),Pe=e=>e&&e[er]?e[er]():e,Mf=e=>e[Sn]||null;function Ay(e,t){e.eventObserved?e.eventObserved(t):e(t)}function ei(e,t){let n=e[Sn];n&&n.forEach(r=>{Ay(r,t)})}var l2,a2,yd,L0=(yd=class{constructor(e){I(this,l2);I(this,a2);if(!e&&!(e=this.get))throw Error("Unknown getter");Fy(this,e)}},l2=er,a2=Sn,yd),Fy=(e,t)=>j0(e,er,t);function yi(e,t){if(e[er]){let n=e[Sn];n||j0(e,Sn,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function ti(e,t){let n=e[Sn];if(n&&n.has(t)){let r=n.size-1;r?n.delete(t):e[Sn]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var j0=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),ao=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Vy=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Lf=new RegExp(`(${ao.source})(%|[a-z]+)`,"i"),Dy=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,yl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,A0=e=>{let[t,n]=Uy(e);if(!t||Xu())return e;let r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r?r.trim():n&&n.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(n)||e:n&&yl.test(n)?A0(n):n||e},Uy=e=>{let t=yl.exec(e);if(!t)return[,];let[,n,r]=t;return[n,r]},_a,Wy=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,F0=e=>{_a||(_a=qt?new RegExp(`(${Object.keys(qt).join("|")})(?!\\w)`,"g"):/^\b$/);let t=e.output.map(i=>Pe(i).replace(yl,A0).replace(Vy,Nf).replace(_a,Nf)),n=t.map(i=>i.match(ao).map(Number)),r=n[0].map((i,o)=>n.map(l=>{if(!(o in l))throw Error('The arity of each "output" value must be equal');return l[o]})).map(i=>Jr({...e,output:i}));return i=>{var a;let o=!Lf.test(t[0])&&((a=t.find(s=>Lf.test(s)))==null?void 0:a.replace(ao,"")),l=0;return t[0].replace(ao,()=>`${r[l++](i)}${o||""}`).replace(Dy,Wy)}},V0="react-spring: ",D0=e=>{let t=e,n=!1;if(typeof t!="function")throw new TypeError(`${V0}once requires a function parameter`);return(...r)=>{n||(t(...r),n=!0)}},By=D0(console.warn);function by(){By(`${V0}The "interpolate" function is deprecated in v9 (use "to" instead)`)}D0(console.warn);function gl(e){return P.str(e)&&(e[0]=="#"||/\d/.test(e)||!Xu()&&yl.test(e)||e in(qt||{}))}var U0=Xu()?_.useEffect:_.useLayoutEffect,Qy=()=>{let e=_.useRef(!1);return U0(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function Hy(){let e=_.useState()[1],t=Qy();return()=>{t.current&&e(Math.random())}}function Uo(e,t){let[n]=_.useState(()=>({inputs:t,result:e()})),r=_.useRef(),i=r.current,o=i;return o?t&&o.inputs&&Yy(t,o.inputs)||(o={inputs:t,result:e()}):o=n,_.useEffect(()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)},[o]),o.result}function Yy(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var Wo=e=>_.useEffect(e,Xy),Xy=[],ni=Symbol.for("Animated:node"),Ky=e=>!!e&&e[ni]===e,ft=e=>e&&e[ni],qu=(e,t)=>vy(e,ni,t),vl=e=>e&&e[ni]&&e[ni].getPayload(),W0=class{constructor(){I(this,"payload");qu(this,this)}getPayload(){return this.payload||[]}},gi=class extends W0{constructor(n){super();I(this,"done",!0);I(this,"elapsedTime");I(this,"lastPosition");I(this,"lastVelocity");I(this,"v0");I(this,"durationProgress",0);this._value=n,P.num(this._value)&&(this.lastPosition=this._value)}static create(n){return new gi(n)}getPayload(){return[this]}getValue(){return this._value}setValue(n,r){return P.num(n)&&(this.lastPosition=n,r&&(n=Math.round(n/r)*r,this.done&&(this.lastPosition=n))),this._value===n?!1:(this._value=n,!0)}reset(){let{done:n}=this;this.done=!1,P.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,n&&(this.lastVelocity=null),this.v0=null)}},ri=class extends gi{constructor(n){super(0);I(this,"_string",null);I(this,"_toString");this._toString=Jr({output:[n,n]})}static create(n){return new ri(n)}getValue(){return this._string??(this._string=this._toString(this._value))}setValue(n){if(P.str(n)){if(n==this._string)return!1;this._string=n,this._value=1}else if(super.setValue(n))this._string=null;else return!1;return!0}reset(n){n&&(this._toString=Jr({output:[this.getValue(),n]})),this._value=0,super.reset()}},Bo={dependencies:null},wl=class extends W0{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){let n={};return Ot(this.source,(r,i)=>{Ky(r)?n[i]=r.getValue(t):Qe(r)?n[i]=Pe(r):t||(n[i]=r)}),n}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&q(this.payload,t=>t.reset())}_makePayload(t){if(t){let n=new Set;return Ot(t,this._addToPayload,n),Array.from(n)}}_addToPayload(t){Bo.dependencies&&Qe(t)&&Bo.dependencies.add(t);let n=vl(t);n&&q(n,r=>this.add(r))}},B0=class extends wl{constructor(t){super(t)}static create(t){return new B0(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){let n=this.getPayload();return t.length==n.length?n.map((r,i)=>r.setValue(t[i])).some(Boolean):(super.setValue(t.map(Gy)),!0)}};function Gy(e){return(gl(e)?ri:gi).create(e)}function Is(e){let t=ft(e);return t?t.constructor:P.arr(e)?B0:gl(e)?ri:gi}var jf=(e,t)=>{let n=!P.fun(e)||e.prototype&&e.prototype.isReactComponent;return _.forwardRef((r,i)=>{let o=_.useRef(null),l=n&&_.useCallback(v=>{o.current=Jy(i,v)},[i]),[a,s]=Zy(r,t),u=Hy(),p=()=>{let v=o.current;n&&!v||(v?t.applyAnimatedValues(v,a.getValue(!0)):!1)===!1&&u()},d=new qy(p,s),m=_.useRef();U0(()=>(m.current=d,q(s,v=>yi(v,d)),()=>{m.current&&(q(m.current.deps,v=>ti(v,m.current)),M.cancel(m.current.update))})),_.useEffect(p,[]),Wo(()=>()=>{let v=m.current;q(v.deps,g=>ti(g,v))});let y=t.getComponentProps(a.getValue());return _.createElement(e,{...y,ref:l})})},qy=class{constructor(t,n){this.update=t,this.deps=n}eventObserved(t){t.type=="change"&&M.write(this.update)}};function Zy(e,t){let n=new Set;return Bo.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new wl(e),Bo.dependencies=null,[e,n]}function Jy(e,t){return e&&(P.fun(e)?e(t):e.current=t),t}var Af=Symbol.for("AnimatedComponent"),eg=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=i=>new wl(i),getComponentProps:r=i=>i}={})=>{let i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=l=>{let a=Ff(l)||"Anonymous";return P.str(l)?l=o[l]||(o[l]=jf(l,i)):l=l[Af]||(l[Af]=jf(l,i)),l.displayName=`Animated(${a})`,l};return Ot(e,(l,a)=>{P.arr(e)&&(a=Ff(l)),o[a]=o(l)}),{animated:o}},Ff=e=>P.str(e)?e:e&&P.str(e.displayName)?e.displayName:P.fun(e)&&e.name||null;function sn(e,...t){return P.fun(e)?e(...t):e}var Mr=(e,t)=>e===!0||!!(t&&e&&(P.fun(e)?e(t):Xe(e).includes(t))),b0=(e,t)=>P.obj(e)?t&&e[t]:e,Q0=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,tg=e=>e,H0=(e,t=tg)=>{let n=ng;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));let r={};for(let i of n){let o=t(e[i],i);P.und(o)||(r[i]=o)}return r},ng=["config","onProps","onStart","onChange","onPause","onResume","onRest"],rg={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ig(e){let t={},n=0;if(Ot(e,(r,i)=>{rg[i]||(t[i]=r,n++)}),n)return t}function Y0(e){let t=ig(e);if(t){let n={to:t};return Ot(e,(r,i)=>i in t||(n[i]=r)),n}return{...e}}function ii(e){return e=Pe(e),P.arr(e)?e.map(ii):gl(e)?st.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Os(e){return P.fun(e)||P.arr(e)&&P.obj(e[0])}var X0={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Ns={...X0.default,mass:1,damping:1,easing:jy.linear,clamp:!1},og=class{constructor(){I(this,"tension");I(this,"friction");I(this,"frequency");I(this,"damping");I(this,"mass");I(this,"velocity",0);I(this,"restVelocity");I(this,"precision");I(this,"progress");I(this,"duration");I(this,"easing");I(this,"clamp");I(this,"bounce");I(this,"decay");I(this,"round");Object.assign(this,Ns)}};function lg(e,t,n){n&&(n={...n},Vf(n,t),t={...n,...t}),Vf(e,t),Object.assign(e,t);for(let l in Ns)e[l]==null&&(e[l]=Ns[l]);let{frequency:r,damping:i}=e,{mass:o}=e;return P.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r),e}function Vf(e,t){if(!P.und(t.decay))e.duration=void 0;else{let n=!P.und(t.tension)||!P.und(t.friction);(n||!P.und(t.frequency)||!P.und(t.damping)||!P.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}var Df=[],ag=class{constructor(){I(this,"changed",!1);I(this,"values",Df);I(this,"toValues",null);I(this,"fromValues",Df);I(this,"to");I(this,"from");I(this,"config",new og);I(this,"immediate",!1)}};function K0(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise((l,a)=>{let s,u,p=Mr(n.cancel??(r==null?void 0:r.cancel),t);if(p)y();else{P.und(n.pause)||(i.paused=Mr(n.pause,t));let v=r==null?void 0:r.pause;v!==!0&&(v=i.paused||Mr(v,t)),s=sn(n.delay||0,t),v?(i.resumeQueue.add(m),o.pause()):(o.resume(),m())}function d(){i.resumeQueue.add(m),i.timeouts.delete(u),u.cancel(),s=u.time-M.now()}function m(){s>0&&!st.skipAnimation?(i.delayed=!0,u=M.setTimeout(y,s),i.pauseQueue.add(d),i.timeouts.add(u)):y()}function y(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),e<=(i.cancelId||0)&&(p=!0);try{o.start({...n,callId:e,cancel:p},l)}catch(v){a(v)}}})}var Zu=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?Qn(e.get()):t.every(n=>n.noop)?G0(e.get()):rt(e.get(),t.every(n=>n.finished)),G0=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),rt=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Qn=e=>({value:e,cancelled:!0,finished:!1});function q0(e,t,n,r){let{callId:i,parentId:o,onRest:l}=t,{asyncTo:a,promise:s}=n;return!o&&e===a&&!t.reset?s:n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;let u=H0(t,(S,f)=>f==="onRest"?void 0:S),p,d,m=new Promise((S,f)=>(p=S,d=f)),y=S=>{let f=i<=(n.cancelId||0)&&Qn(r)||i!==n.asyncId&&rt(r,!1);if(f)throw S.result=f,d(S),S},v=(S,f)=>{let c=new Uf,h=new Wf;return(async()=>{if(st.skipAnimation)throw oi(n),h.result=rt(r,!1),d(h),h;y(c);let w=P.obj(S)?{...S}:{...f,to:S};w.parentId=i,Ot(u,(C,E)=>{P.und(w[E])&&(w[E]=C)});let k=await r.start(w);return y(c),n.paused&&await new Promise(C=>{n.resumeQueue.add(C)}),k})()},g;if(st.skipAnimation)return oi(n),rt(r,!1);try{let S;P.arr(e)?S=(async f=>{for(let c of f)await v(c)})(e):S=Promise.resolve(e(v,r.stop.bind(r))),await Promise.all([S.then(p),m]),g=rt(r.get(),!0,!1)}catch(S){if(S instanceof Uf)g=S.result;else if(S instanceof Wf)g=S.result;else throw S}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?a:void 0,n.promise=o?s:void 0)}return P.fun(l)&&M.batchedUpdates(()=>{l(g,r,r.item)}),g})()}function oi(e,t){Rr(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Uf=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");I(this,"result")}},Wf=class extends Error{constructor(){super("SkipAnimationSignal");I(this,"result")}},Ts=e=>e instanceof Ju,sg=1,Ju=class extends L0{constructor(){super(...arguments);I(this,"id",sg++);I(this,"_priority",0)}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){let t=ft(this);return t&&t.getValue()}to(...t){return st.to(this,t)}interpolate(...t){return by(),st.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,n=!1){ei(this,{type:"change",parent:this,value:t,idle:n})}_onPriorityChange(t){this.idle||hl.sort(this),ei(this,{type:"priority",parent:this,priority:t})}},kn=Symbol.for("SpringPhase"),Z0=1,Rs=2,zs=4,Ea=e=>(e[kn]&Z0)>0,Rt=e=>(e[kn]&Rs)>0,hr=e=>(e[kn]&zs)>0,Bf=(e,t)=>t?e[kn]|=Rs|Z0:e[kn]&=~Rs,bf=(e,t)=>t?e[kn]|=zs:e[kn]&=~zs,ug=class extends Ju{constructor(t,n){super();I(this,"key");I(this,"animation",new ag);I(this,"queue");I(this,"defaultProps",{});I(this,"_state",{paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});I(this,"_pendingCalls",new Set);I(this,"_lastCallId",0);I(this,"_lastToId",0);I(this,"_memoizedDuration",0);if(!P.und(t)||!P.und(n)){let r=P.obj(t)?{...t}:{...n,from:t};P.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Rt(this)||this._state.asyncTo)||hr(this)}get goal(){return Pe(this.animation.to)}get velocity(){let t=ft(this);return t instanceof gi?t.lastVelocity||0:t.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return Ea(this)}get isAnimating(){return Rt(this)}get isPaused(){return hr(this)}get isDelayed(){return this._state.delayed}advance(t){let n=!0,r=!1,i=this.animation,{toValues:o}=i,{config:l}=i,a=vl(i.to);!a&&Qe(i.to)&&(o=Xe(Pe(i.to))),i.values.forEach((p,d)=>{if(p.done)return;let m=p.constructor==ri?1:a?a[d].lastPosition:o[d],y=i.immediate,v=m;if(!y){if(v=p.lastPosition,l.tension<=0){p.done=!0;return}let g=p.elapsedTime+=t,S=i.fromValues[d],f=p.v0!=null?p.v0:p.v0=P.arr(l.velocity)?l.velocity[d]:l.velocity,c,h=l.precision||(S==m?.005:Math.min(1,Math.abs(m-S)*.001));if(P.und(l.duration))if(l.decay){let w=l.decay===!0?.998:l.decay,k=Math.exp(-(1-w)*g);v=S+f/(1-w)*(1-k),y=Math.abs(p.lastPosition-v)<=h,c=f*k}else{c=p.lastVelocity==null?f:p.lastVelocity;let w=l.restVelocity||h/10,k=l.clamp?0:l.bounce,C=!P.und(k),E=S==m?p.v0>0:S<m,T,b=!1,z=1,de=Math.ceil(t/z);for(let pe=0;pe<de&&(T=Math.abs(c)>w,!(!T&&(y=Math.abs(m-v)<=h,y)));++pe){C&&(b=v==m||v>m==E,b&&(c=-c*k,v=m));let We=-l.tension*1e-6*(v-m),vt=-l.friction*.001*c,Ql=(We+vt)/l.mass;c=c+Ql*z,v=v+c*z}}else{let w=1;l.duration>0&&(this._memoizedDuration!==l.duration&&(this._memoizedDuration=l.duration,p.durationProgress>0&&(p.elapsedTime=l.duration*p.durationProgress,g=p.elapsedTime+=t)),w=(l.progress||0)+g/this._memoizedDuration,w=w>1?1:w<0?0:w,p.durationProgress=w),v=S+l.easing(w)*(m-S),c=(v-p.lastPosition)/t,y=w==1}p.lastVelocity=c,Number.isNaN(v)&&(console.warn("Got NaN while animating:",this),y=!0)}a&&!a[d].done&&(y=!1),y?p.done=!0:n=!1,p.setValue(v,l.round)&&(r=!0)});let s=ft(this),u=s.getValue();if(n){let p=Pe(i.to);(u!==p||r)&&!l.decay?(s.setValue(p),this._onChange(p)):r&&l.decay&&this._onChange(u),this._stop()}else r&&this._onChange(u)}set(t){return M.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Rt(this)){let{to:t,config:n}=this.animation;M.batchedUpdates(()=>{this._onStart(),n.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,n){let r;return P.und(t)?(r=this.queue||[],this.queue=[]):r=[P.obj(t)?t:{...n,to:t}],Promise.all(r.map(i=>this._update(i))).then(i=>Zu(this,i))}stop(t){let{to:n}=this.animation;return this._focus(this.get()),oi(this._state,t&&this._lastCallId),M.batchedUpdates(()=>this._stop(n,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){let n=this.key||"",{to:r,from:i}=t;r=P.obj(r)?r[n]:r,(r==null||Os(r))&&(r=void 0),i=P.obj(i)?i[n]:i,i==null&&(i=void 0);let o={to:r,from:i};return Ea(this)||(t.reverse&&([r,i]=[i,r]),i=Pe(i),P.und(i)?ft(this)||this._set(r):this._set(i)),o}_update({...t},n){let{key:r,defaultProps:i}=this;t.default&&Object.assign(i,H0(t,(a,s)=>/^on/.test(s)?b0(a,r):a)),Hf(this,t,"onProps"),yr(this,"onProps",t,this);let o=this._prepareNode(t);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let l=this._state;return K0(++this._lastCallId,{key:r,props:t,defaultProps:i,state:l,actions:{pause:()=>{hr(this)||(bf(this,!0),xr(l.pauseQueue),yr(this,"onPause",rt(this,mr(this,this.animation.to)),this))},resume:()=>{hr(this)&&(bf(this,!1),Rt(this)&&this._resume(),xr(l.resumeQueue),yr(this,"onResume",rt(this,mr(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then(a=>{if(t.loop&&a.finished&&!(n&&a.noop)){let s=J0(t);if(s)return this._update(s,!0)}return a})}_merge(t,n,r){if(n.cancel)return this.stop(!0),r(Qn(this));let i=!P.und(t.to),o=!P.und(t.from);if(i||o)if(n.callId>this._lastToId)this._lastToId=n.callId;else return r(Qn(this));let{key:l,defaultProps:a,animation:s}=this,{to:u,from:p}=s,{to:d=u,from:m=p}=t;o&&!i&&(!n.default||P.und(d))&&(d=m),n.reverse&&([d,m]=[m,d]);let y=!St(m,p);y&&(s.from=m),m=Pe(m);let v=!St(d,u);v&&this._focus(d);let g=Os(n.to),{config:S}=s,{decay:f,velocity:c}=S;(i||o)&&(S.velocity=0),n.config&&!g&&lg(S,sn(n.config,l),n.config!==a.config?sn(a.config,l):void 0);let h=ft(this);if(!h||P.und(d))return r(rt(this,!0));let w=P.und(n.reset)?o&&!n.default:!P.und(m)&&Mr(n.reset,l),k=w?m:this.get(),C=ii(d),E=P.num(C)||P.arr(C)||gl(C),T=!g&&(!E||Mr(a.immediate||n.immediate,l));if(v){let pe=Is(d);if(pe!==h.constructor)if(T)h=this._set(C);else throw Error(`Cannot animate between ${h.constructor.name} and ${pe.name}, as the "to" prop suggests`)}let b=h.constructor,z=Qe(d),de=!1;if(!z){let pe=w||!Ea(this)&&y;(v||pe)&&(de=St(ii(k),C),z=!de),(!St(s.immediate,T)&&!T||!St(S.decay,f)||!St(S.velocity,c))&&(z=!0)}if(de&&Rt(this)&&(s.changed&&!w?z=!0:z||this._stop(u)),!g&&((z||Qe(u))&&(s.values=h.getPayload(),s.toValues=Qe(d)?null:b==ri?[1]:Xe(C)),s.immediate!=T&&(s.immediate=T,!T&&!w&&this._set(u)),z)){let{onRest:pe}=s;q(cg,vt=>Hf(this,n,vt));let We=rt(this,mr(this,u));xr(this._pendingCalls,We),this._pendingCalls.add(r),s.changed&&M.batchedUpdates(()=>{var vt;s.changed=!w,pe==null||pe(We,this),w?sn(a.onRest,We):(vt=s.onStart)==null||vt.call(s,We,this)})}w&&this._set(k),g?r(q0(n.to,n,this._state,this)):z?this._start():Rt(this)&&!v?this._pendingCalls.add(r):r(G0(k))}_focus(t){let n=this.animation;t!==n.to&&(Mf(this)&&this._detach(),n.to=t,Mf(this)&&this._attach())}_attach(){let t=0,{to:n}=this.animation;Qe(n)&&(yi(n,this),Ts(n)&&(t=n.priority+1)),this.priority=t}_detach(){let{to:t}=this.animation;Qe(t)&&ti(t,this)}_set(t,n=!0){let r=Pe(t);if(!P.und(r)){let i=ft(this);if(!i||!St(r,i.getValue())){let o=Is(r);!i||i.constructor!=o?qu(this,o.create(r)):i.setValue(r),i&&M.batchedUpdates(()=>{this._onChange(r,n)})}}return ft(this)}_onStart(){let t=this.animation;t.changed||(t.changed=!0,yr(this,"onStart",rt(this,mr(this,t.to)),this))}_onChange(t,n){n||(this._onStart(),sn(this.animation.onChange,t,this)),sn(this.defaultProps.onChange,t,this),super._onChange(t,n)}_start(){let t=this.animation;ft(this).reset(Pe(t.to)),t.immediate||(t.fromValues=t.values.map(n=>n.lastPosition)),Rt(this)||(Bf(this,!0),hr(this)||this._resume())}_resume(){st.skipAnimation?this.finish():hl.start(this)}_stop(t,n){if(Rt(this)){Bf(this,!1);let r=this.animation;q(r.values,o=>{o.done=!0}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),ei(this,{type:"idle",parent:this});let i=n?Qn(this.get()):rt(this.get(),mr(this,t??r.to));xr(this._pendingCalls,i),r.changed&&(r.changed=!1,yr(this,"onRest",i,this))}}};function mr(e,t){let n=ii(t),r=ii(e.get());return St(r,n)}function J0(e,t=e.loop,n=e.to){let r=sn(t);if(r){let i=r!==!0&&Y0(r),o=(i||e).reverse,l=!i||i.reset;return Ms({...e,loop:t,default:!1,pause:void 0,to:!o||Os(n)?n:void 0,from:l?e.from:void 0,reset:l,...i})}}function Ms(e){let{to:t,from:n}=e=Y0(e),r=new Set;return P.obj(t)&&Qf(t,r),P.obj(n)&&Qf(n,r),e.keys=r.size?Array.from(r):null,e}function Qf(e,t){Ot(e,(n,r)=>n!=null&&t.add(r))}var cg=["onStart","onRest","onChange","onPause","onResume"];function Hf(e,t,n){e.animation[n]=t[n]!==Q0(t,n)?b0(t[n],e.key):void 0}function yr(e,t,...n){var r,i,o,l;(i=(r=e.animation)[t])==null||i.call(r,...n),(l=(o=e.defaultProps)[t])==null||l.call(o,...n)}var fg=["onStart","onChange","onRest"],dg=1,eh=class{constructor(e,t){I(this,"id",dg++);I(this,"springs",{});I(this,"queue",[]);I(this,"ref");I(this,"_flush");I(this,"_initialProps");I(this,"_lastAsyncId",0);I(this,"_active",new Set);I(this,"_changed",new Set);I(this,"_started",!1);I(this,"_item");I(this,"_state",{paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});I(this,"_events",{onStart:new Map,onChange:new Map,onRest:new Map});this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){let e={};return this.each((t,n)=>e[n]=t.get()),e}set(e){for(let t in e){let n=e[t];P.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Ms(e)),this}start(e){let{queue:t}=this;return e?t=Xe(e).map(Ms):this.queue=[],this._flush?this._flush(this,t):(nh(this,t),pg(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){let n=this.springs;q(Xe(t),r=>n[r].stop(!!e))}else oi(this._state,this._lastAsyncId),this.each(n=>n.stop(!!e));return this}pause(e){if(P.und(e))this.start({pause:!0});else{let t=this.springs;q(Xe(e),n=>t[n].pause())}return this}resume(e){if(P.und(e))this.start({pause:!1});else{let t=this.springs;q(Xe(e),n=>t[n].resume())}return this}each(e){Ot(this.springs,e)}_onFrame(){let{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Rr(e,([a,s])=>{s.value=this.get(),a(s,this,this._item)}));let o=!r&&this._started,l=i||o&&n.size?this.get():null;i&&t.size&&Rr(t,([a,s])=>{s.value=l,a(s,this,this._item)}),o&&(this._started=!1,Rr(n,([a,s])=>{s.value=l,a(s,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;M.onFrame(this._onFrame)}};function pg(e,t){return Promise.all(t.map(n=>th(e,n))).then(n=>Zu(e,n))}async function th(e,t,n){let{keys:r,to:i,from:o,loop:l,onRest:a,onResolve:s}=t,u=P.obj(t.default)&&t.default;l&&(t.loop=!1),i===!1&&(t.to=null),o===!1&&(t.from=null);let p=P.arr(i)||P.fun(i)?i:void 0;p?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):q(fg,g=>{let S=t[g];if(P.fun(S)){let f=e._events[g];t[g]=({finished:c,cancelled:h})=>{let w=f.get(S);w?(c||(w.finished=!1),h&&(w.cancelled=!0)):f.set(S,{value:null,finished:c||!1,cancelled:h||!1})},u&&(u[g]=t[g])}});let d=e._state;t.pause===!d.paused?(d.paused=t.pause,xr(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);let m=(r||Object.keys(e.springs)).map(g=>e.springs[g].start(t)),y=t.cancel===!0||Q0(t,"cancel")===!0;(p||y&&d.asyncId)&&m.push(K0(++e._lastAsyncId,{props:t,state:d,actions:{pause:$s,resume:$s,start(g,S){y?(oi(d,e._lastAsyncId),S(Qn(e))):(g.onRest=a,S(q0(p,g,d,e)))}}})),d.paused&&await new Promise(g=>{d.resumeQueue.add(g)});let v=Zu(e,await Promise.all(m));if(l&&v.finished&&!(n&&v.noop)){let g=J0(t,l,i);if(g)return nh(e,[g]),th(e,g,!0)}return s&&M.batchedUpdates(()=>s(v,e,e.item)),v}function hg(e,t){let n=new ug;return n.key=e,t&&yi(n,t),n}function mg(e,t,n){t.keys&&q(t.keys,r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)})}function nh(e,t){q(t,n=>{mg(e.springs,n,r=>hg(r,e))})}var ec=({children:e,...t})=>{let n=_.useContext(bo),r=t.pause||!!n.pause,i=t.immediate||!!n.immediate;t=Uo(()=>({pause:r,immediate:i}),[r,i]);let{Provider:o}=bo;return _.createElement(o,{value:t},e)},bo=yg(ec,{});ec.Provider=bo.Provider;ec.Consumer=bo.Consumer;function yg(e,t){return Object.assign(e,_.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}var gg=class extends Ju{constructor(t,n){super();I(this,"key");I(this,"idle",!0);I(this,"calc");I(this,"_active",new Set);this.source=t,this.calc=Jr(...n);let r=this._get(),i=Is(r);qu(this,i.create(r))}advance(t){let n=this._get(),r=this.get();St(n,r)||(ft(this).setValue(n),this._onChange(n,this.idle)),!this.idle&&Yf(this._active)&&Ca(this)}_get(){let t=P.arr(this.source)?this.source.map(Pe):Xe(Pe(this.source));return this.calc(...t)}_start(){this.idle&&!Yf(this._active)&&(this.idle=!1,q(vl(this),t=>{t.done=!1}),st.skipAnimation?(M.batchedUpdates(()=>this.advance()),Ca(this)):hl.start(this))}_attach(){let t=1;q(Xe(this.source),n=>{Qe(n)&&yi(n,this),Ts(n)&&(n.idle||this._active.add(n),t=Math.max(t,n.priority+1))}),this.priority=t,this._start()}_detach(){q(Xe(this.source),t=>{Qe(t)&&ti(t,this)}),this._active.clear(),Ca(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=Xe(this.source).reduce((n,r)=>Math.max(n,(Ts(r)?r.priority:0)+1),0))}};function vg(e){return e.idle!==!1}function Yf(e){return!e.size||Array.from(e).every(vg)}function Ca(e){e.idle||(e.idle=!0,q(vl(e),t=>{t.done=!0}),ei(e,{type:"idle",parent:e}))}st.assign({createStringInterpolator:F0,to:(e,t)=>new gg(e,t)});var rh=/^--/;function wg(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!rh.test(e)&&!(Lr.hasOwnProperty(e)&&Lr[e])?t+"px":(""+t).trim()}var Xf={};function Sg(e,t){if(!e.nodeType||!e.setAttribute)return!1;let n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",{style:r,children:i,scrollTop:o,scrollLeft:l,viewBox:a,...s}=t,u=Object.values(s),p=Object.keys(s).map(d=>n||e.hasAttribute(d)?d:Xf[d]||(Xf[d]=d.replace(/([A-Z])/g,m=>"-"+m.toLowerCase())));i!==void 0&&(e.textContent=i);for(let d in r)if(r.hasOwnProperty(d)){let m=wg(d,r[d]);rh.test(d)?e.style.setProperty(d,m):e.style[d]=m}p.forEach((d,m)=>{e.setAttribute(d,u[m])}),o!==void 0&&(e.scrollTop=o),l!==void 0&&(e.scrollLeft=l),a!==void 0&&e.setAttribute("viewBox",a)}var Lr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kg=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),xg=["Webkit","Ms","Moz","O"];Lr=Object.keys(Lr).reduce((e,t)=>(xg.forEach(n=>e[kg(n,t)]=e[t]),e),Lr);var _g=/^(matrix|translate|scale|rotate|skew)/,Eg=/^(translate)/,Cg=/^(rotate|skew)/,$a=(e,t)=>P.num(e)&&e!==0?e+t:e,so=(e,t)=>P.arr(e)?e.every(n=>so(n,t)):P.num(e)?e===t:parseFloat(e)===t,$g=class extends wl{constructor({x:t,y:n,z:r,...i}){let o=[],l=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),l.push(a=>[`translate3d(${a.map(s=>$a(s,"px")).join(",")})`,so(a,0)])),Ot(i,(a,s)=>{if(s==="transform")o.push([a||""]),l.push(u=>[u,u===""]);else if(_g.test(s)){if(delete i[s],P.und(a))return;let u=Eg.test(s)?"px":Cg.test(s)?"deg":"";o.push(Xe(a)),l.push(s==="rotate3d"?([p,d,m,y])=>[`rotate3d(${p},${d},${m},${$a(y,u)})`,so(y,0)]:p=>[`${s}(${p.map(d=>$a(d,u)).join(",")})`,so(p,s.startsWith("scale")?1:0)])}}),o.length&&(i.transform=new Pg(o,l)),super(i)}},Pg=class extends L0{constructor(n,r){super();I(this,"_value",null);this.inputs=n,this.transforms=r}get(){return this._value||(this._value=this._get())}_get(){let n="",r=!0;return q(this.inputs,(i,o)=>{let l=Pe(i[0]),[a,s]=this.transforms[o](P.arr(l)?l:i.map(Pe));n+=" "+a,r=r&&s}),r?"none":n}observerAdded(n){n==1&&q(this.inputs,r=>q(r,i=>Qe(i)&&yi(i,this)))}observerRemoved(n){n==0&&q(this.inputs,r=>q(r,i=>Qe(i)&&ti(i,this)))}eventObserved(n){n.type=="change"&&(this._value=null),ei(this,n)}},Ig=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];st.assign({batchedUpdates:po.unstable_batchedUpdates,createStringInterpolator:F0,colors:_y});var Og=eg(Ig,{applyAnimatedValues:Sg,createAnimatedStyle:e=>new $g(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Ls=Og.animated,js=_.createContext(null);function Pa(e){return e?"scrollLeft":"scrollTop"}function As(e,t){let n=r=>r.type?r.type===_.Fragment:r===_.Fragment;return _.Children.map(e,r=>n(r)?As(r.props.children,t):t(r))}var Kf="translate3d(0px,0px,0px)",Ui="translate(0px,0px)",Wi=_.memo(_.forwardRef(({horizontal:e,factor:t=1,offset:n=0,speed:r=0,sticky:i,...o},l)=>{let a=_.useContext(js),s=Uo(()=>{let y;if(i)y=(i.start||0)*a.space;else{let v=Math.floor(n)*a.space,g=a.space*n+v*r;y=-(a.current*r)+g}return new eh({space:i?a.space:a.space*t,translate:y})},[]),u=Uo(()=>({horizontal:e===void 0||i?a.horizontal:e,sticky:void 0,isSticky:!1,setPosition(y,v,g=!1){if(i)d(y,v);else{let S=Math.floor(n)*y,f=y*n+S*r;s.start({translate:-(v*r)+f,config:a.config,immediate:g})}},setHeight(y,v=!1){s.start({space:i?y:y*t,config:a.config,immediate:v})}}),[]);Wo(()=>{if(i){let y=i.start||0,v=i.end||y+1;u.sticky={start:y,end:v}}}),_.useImperativeHandle(l,()=>u);let p=_.useRef(),d=(y,v)=>{let g=u.sticky.start*y,S=u.sticky.end*y,f=v>=g&&v<=S;if(f===u.isSticky)return;u.isSticky=f;let c=p.current;c.style.position=f?"sticky":"absolute",s.set({translate:f?0:v<g?g:S})};Wo(()=>{if(a)return a.layers.add(u),a.update(),()=>{a.layers.delete(u),a.update()}});let m=s.springs.translate.to(u.horizontal?y=>`translate3d(${y}px,0,0)`:y=>`translate3d(0,${y}px,0)`);return _.createElement(Ls.div,{...o,ref:p,style:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundSize:"auto",backgroundRepeat:"no-repeat",willChange:"transform",[u.horizontal?"height":"width"]:"100%",[u.horizontal?"width":"height"]:s.springs.space,WebkitTransform:m,msTransform:m,transform:m,...o.style}})})),Ng=_.memo(_.forwardRef((e,t)=>{let[n,r]=_.useState(!1),{pages:i,innerStyle:o,config:l=X0.slow,enabled:a=!0,horizontal:s=!1,children:u,...p}=e,d=_.useRef(),m=_.useRef(),y=Uo(()=>({config:l,horizontal:s,busy:!1,space:0,current:0,offset:0,controller:new eh({scroll:0}),layers:new Set,container:d,content:m,update:()=>v(),scrollTo:c=>g(c),stop:()=>y.controller.stop()}),[]);_.useEffect(()=>{y.config=l},[l]),_.useImperativeHandle(t,()=>y);let v=()=>{let c=d.current;if(!c)return;let h=s?"clientWidth":"clientHeight";y.space=c[h];let w=Pa(s);a?y.current=c[w]:c[w]=y.current=y.offset*y.space;let k=m.current;if(k){let C=s?"width":"height";k.style[C]=`${y.space*i}px`}y.layers.forEach(C=>{C.setHeight(y.space,!0),C.setPosition(y.space,y.current,!0)})},g=c=>{let h=d.current,w=Pa(s);y.offset=c,y.controller.set({scroll:y.current}),y.controller.stop().start({scroll:c*y.space,config:l,onChange({value:{scroll:k}}){h[w]=k}})},S=c=>{y.busy||(y.busy=!0,y.current=c.target[Pa(s)],M.onStart(()=>{y.layers.forEach(h=>h.setPosition(y.space,y.current)),y.busy=!1}))};_.useEffect(()=>y.update()),Wo(()=>{r(!0);let c=()=>{let h=()=>y.update();M.onFrame(h),setTimeout(h,150)};return window.addEventListener("resize",c,!1),()=>window.removeEventListener("resize",c,!1)});let f=a?{overflowY:s?"hidden":"scroll",overflowX:s?"scroll":"hidden"}:{overflowY:"hidden",overflowX:"hidden"};return _.createElement(Ls.div,{...p,ref:d,onScroll:S,onWheel:a?y.stop:void 0,onTouchStart:a?y.stop:void 0,style:{position:"absolute",width:"100%",height:"100%",...f,WebkitOverflowScrolling:"touch",WebkitTransform:Ui,msTransform:Ui,transform:Kf,...p.style}},n&&_.createElement(_.Fragment,null,_.createElement(Ls.div,{ref:m,style:{overflow:"hidden",position:"absolute",[s?"height":"width"]:"100%",[s?"width":"height"]:y.space*i,WebkitTransform:Ui,msTransform:Ui,transform:Kf,...e.innerStyle}},_.createElement(js.Provider,{value:y},As(u,c=>!c.props.sticky&&c))),_.createElement(js.Provider,{value:y},As(u,c=>c.props.sticky&&c))))})),Sl={},Qo={},Tg={get exports(){return Qo},set exports(e){Qo=e}},Rg="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zg=Rg,Mg=zg;function ih(){}function oh(){}oh.resetWarningCache=ih;var Lg=function(){function e(r,i,o,l,a,s){if(s!==Mg){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:oh,resetWarningCache:ih};return n.PropTypes=n,n};Tg.exports=Lg();var Ho={},jg={get exports(){return Ho},set exports(e){Ho=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(jg);Sl.__esModule=!0;Sl.default=void 0;var Ag=tc(_),zt=tc(Qo),Fg=tc(Ho);function tc(e){return e&&e.__esModule?e:{default:e}}const lh=({animate:e=!0,className:t="",layout:n="2-columns",lineColor:r="#FFF",children:i})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",r),Ag.default.createElement("div",{className:(0,Fg.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":n==="2-columns","vertical-timeline--one-column-left":n==="1-column"||n==="1-column-left","vertical-timeline--one-column-right":n==="1-column-right"})},i));lh.propTypes={children:zt.default.oneOfType([zt.default.arrayOf(zt.default.node),zt.default.node]).isRequired,className:zt.default.string,animate:zt.default.bool,layout:zt.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:zt.default.string};var Vg=lh;Sl.default=Vg;var kl={};function Fs(){return Fs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fs.apply(this,arguments)}function Dg(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Vs(e,t)}function Vs(e,t){return Vs=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Vs(e,t)}function Ug(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Ds=new Map,Bi=new WeakMap,Gf=0,ah=void 0;function Wg(e){ah=e}function Bg(e){return e?(Bi.has(e)||(Gf+=1,Bi.set(e,Gf.toString())),Bi.get(e)):"0"}function bg(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?Bg(e.root):e[t])}).toString()}function Qg(e){var t=bg(e),n=Ds.get(t);if(!n){var r=new Map,i,o=new IntersectionObserver(function(l){l.forEach(function(a){var s,u=a.isIntersecting&&i.some(function(p){return a.intersectionRatio>=p});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(function(p){p(u,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Ds.set(t,n)}return n}function nc(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=ah),typeof window.IntersectionObserver>"u"&&r!==void 0){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=Qg(n),l=o.id,a=o.observer,s=o.elements,u=s.get(e)||[];return s.has(e)||s.set(e,u),u.push(t),a.observe(e),function(){u.splice(u.indexOf(t),1),u.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),Ds.delete(l))}}var Hg=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function qf(e){return typeof e.children!="function"}var Yo=function(e){Dg(t,e);function t(r){var i;return i=e.call(this,r)||this,i.node=null,i._unobserveCb=null,i.handleNode=function(o){i.node&&(i.unobserve(),!o&&!i.props.triggerOnce&&!i.props.skip&&i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=o||null,i.observeNode()},i.handleChange=function(o,l){o&&i.props.triggerOnce&&i.unobserve(),qf(i.props)||i.setState({inView:o,entry:l}),i.props.onChange&&i.props.onChange(o,l)},i.state={inView:!!r.initialInView,entry:void 0},i}var n=t.prototype;return n.componentDidUpdate=function(i){(i.rootMargin!==this.props.rootMargin||i.root!==this.props.root||i.threshold!==this.props.threshold||i.skip!==this.props.skip||i.trackVisibility!==this.props.trackVisibility||i.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var i=this.props,o=i.threshold,l=i.root,a=i.rootMargin,s=i.trackVisibility,u=i.delay,p=i.fallbackInView;this._unobserveCb=nc(this.node,this.handleChange,{threshold:o,root:l,rootMargin:a,trackVisibility:s,delay:u},p)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!qf(this.props)){var i=this.state,o=i.inView,l=i.entry;return this.props.children({inView:o,entry:l,ref:this.handleNode})}var a=this.props,s=a.children,u=a.as,p=Ug(a,Hg);return _.createElement(u||"div",Fs({ref:this.handleNode},p),s)},t}(_.Component);Yo.displayName="InView";Yo.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function Yg(e){var t=e===void 0?{}:e,n=t.threshold,r=t.delay,i=t.trackVisibility,o=t.rootMargin,l=t.root,a=t.triggerOnce,s=t.skip,u=t.initialInView,p=t.fallbackInView,d=_.useRef(),m=_.useState({inView:!!u}),y=m[0],v=m[1],g=_.useCallback(function(f){d.current!==void 0&&(d.current(),d.current=void 0),!s&&f&&(d.current=nc(f,function(c,h){v({inView:c,entry:h}),h.isIntersecting&&a&&d.current&&(d.current(),d.current=void 0)},{root:l,rootMargin:o,threshold:n,trackVisibility:i,delay:r},p))},[Array.isArray(n)?n.toString():n,l,o,a,s,i,p,r]);_.useEffect(function(){!d.current&&y.entry&&!a&&!s&&v({inView:!!u})});var S=[g,y.inView,y.entry];return S.ref=S[0],S.inView=S[1],S.entry=S[2],S}const Xg=Object.freeze(Object.defineProperty({__proto__:null,InView:Yo,default:Yo,defaultFallbackInView:Wg,observe:nc,useInView:Yg},Symbol.toStringTag,{value:"Module"})),Kg=Uh(Xg);kl.__esModule=!0;kl.default=void 0;var Mt=rc(_),X=rc(Qo),bi=rc(Ho),Gg=Kg;function rc(e){return e&&e.__esModule?e:{default:e}}const sh=({children:e="",className:t="",contentArrowStyle:n=null,contentStyle:r=null,date:i="",dateClassName:o="",icon:l=null,iconClassName:a="",iconOnClick:s=null,onTimelineElementClick:u=null,iconStyle:p=null,id:d="",position:m="",style:y=null,textClassName:v="",intersectionObserverProps:g={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:S=!1})=>Mt.default.createElement(Gg.InView,g,({inView:f,ref:c})=>Mt.default.createElement("div",{ref:c,id:d,className:(0,bi.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":m==="left","vertical-timeline-element--right":m==="right","vertical-timeline-element--no-children":e===""}),style:y},Mt.default.createElement(Mt.default.Fragment,null,Mt.default.createElement("span",{style:p,onClick:s,className:(0,bi.default)(a,"vertical-timeline-element-icon",{"bounce-in":f||S,"is-hidden":!(f||S)})},l),Mt.default.createElement("div",{style:r,onClick:u,className:(0,bi.default)(v,"vertical-timeline-element-content",{"bounce-in":f||S,"is-hidden":!(f||S)})},Mt.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),e,Mt.default.createElement("span",{className:(0,bi.default)(o,"vertical-timeline-element-date")},i)))));sh.propTypes={children:X.default.oneOfType([X.default.arrayOf(X.default.node),X.default.node]),className:X.default.string,contentArrowStyle:X.default.shape({}),contentStyle:X.default.shape({}),date:X.default.node,dateClassName:X.default.string,icon:X.default.element,iconClassName:X.default.string,iconStyle:X.default.shape({}),iconOnClick:X.default.func,onTimelineElementClick:X.default.func,id:X.default.string,position:X.default.string,style:X.default.shape({}),textClassName:X.default.string,visible:X.default.bool,intersectionObserverProps:X.default.shape({root:X.default.object,rootMargin:X.default.string,threshold:X.default.number,triggerOnce:X.default.bool})};var qg=sh;kl.default=qg;var Qi={VerticalTimeline:Sl.default,VerticalTimelineElement:kl.default};const Zf="/websitecv/assets/my_resume-sh-2b235763.pdf",Zg="/websitecv/assets/pjatk-c52df4ed.png",Jg="/websitecv/assets/snowflake-feccbac9.png",ev="/websitecv/assets/webscraper-d0b51d76.png",tv="/websitecv/assets/ecg-e03acf31.png";function nv(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function rv(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var iv=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(rv(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=nv(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Se="-ms-",Xo="-moz-",V="-webkit-",uh="comm",ic="rule",oc="decl",ov="@import",ch="@keyframes",lv=Math.abs,xl=String.fromCharCode,av=Object.assign;function sv(e,t){return me(e,0)^45?(((t<<2^me(e,0))<<2^me(e,1))<<2^me(e,2))<<2^me(e,3):0}function fh(e){return e.trim()}function uv(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Us(e,t){return e.indexOf(t)}function me(e,t){return e.charCodeAt(t)|0}function li(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function lc(e){return e.length}function Hi(e,t){return t.push(e),e}function cv(e,t){return e.map(t).join("")}var _l=1,tr=1,dh=0,ze=0,re=0,or="";function El(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:_l,column:tr,length:l,return:""}}function gr(e,t){return av(El("",null,null,"",null,null,0),e,{length:-e.length},t)}function fv(){return re}function dv(){return re=ze>0?me(or,--ze):0,tr--,re===10&&(tr=1,_l--),re}function Ae(){return re=ze<dh?me(or,ze++):0,tr++,re===10&&(tr=1,_l++),re}function gt(){return me(or,ze)}function uo(){return ze}function vi(e,t){return li(or,e,t)}function ai(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ph(e){return _l=tr=1,dh=dt(or=e),ze=0,[]}function hh(e){return or="",e}function co(e){return fh(vi(ze-1,Ws(e===91?e+2:e===40?e+1:e)))}function pv(e){for(;(re=gt())&&re<33;)Ae();return ai(e)>2||ai(re)>3?"":" "}function hv(e,t){for(;--t&&Ae()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return vi(e,uo()+(t<6&&gt()==32&&Ae()==32))}function Ws(e){for(;Ae();)switch(re){case e:return ze;case 34:case 39:e!==34&&e!==39&&Ws(re);break;case 40:e===41&&Ws(e);break;case 92:Ae();break}return ze}function mv(e,t){for(;Ae()&&e+re!==47+10;)if(e+re===42+42&&gt()===47)break;return"/*"+vi(t,ze-1)+"*"+xl(e===47?e:Ae())}function yv(e){for(;!ai(gt());)Ae();return vi(e,ze)}function gv(e){return hh(fo("",null,null,null,[""],e=ph(e),0,[0],e))}function fo(e,t,n,r,i,o,l,a,s){for(var u=0,p=0,d=l,m=0,y=0,v=0,g=1,S=1,f=1,c=0,h="",w=i,k=o,C=r,E=h;S;)switch(v=c,c=Ae()){case 40:if(v!=108&&me(E,d-1)==58){Us(E+=D(co(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:E+=co(c);break;case 9:case 10:case 13:case 32:E+=pv(v);break;case 92:E+=hv(uo()-1,7);continue;case 47:switch(gt()){case 42:case 47:Hi(vv(mv(Ae(),uo()),t,n),s);break;default:E+="/"}break;case 123*g:a[u++]=dt(E)*f;case 125*g:case 59:case 0:switch(c){case 0:case 125:S=0;case 59+p:f==-1&&(E=D(E,/\f/g,"")),y>0&&dt(E)-d&&Hi(y>32?ed(E+";",r,n,d-1):ed(D(E," ","")+";",r,n,d-2),s);break;case 59:E+=";";default:if(Hi(C=Jf(E,t,n,u,p,i,a,h,w=[],k=[],d),o),c===123)if(p===0)fo(E,t,C,C,w,o,d,a,k);else switch(m===99&&me(E,3)===110?100:m){case 100:case 109:case 115:fo(e,C,C,r&&Hi(Jf(e,C,C,0,0,i,a,h,i,w=[],d),k),i,k,d,a,r?w:k);break;default:fo(E,C,C,C,[""],k,0,a,k)}}u=p=y=0,g=f=1,h=E="",d=l;break;case 58:d=1+dt(E),y=v;default:if(g<1){if(c==123)--g;else if(c==125&&g++==0&&dv()==125)continue}switch(E+=xl(c),c*g){case 38:f=p>0?1:(E+="\f",-1);break;case 44:a[u++]=(dt(E)-1)*f,f=1;break;case 64:gt()===45&&(E+=co(Ae())),m=gt(),p=d=dt(h=E+=yv(uo())),c++;break;case 45:v===45&&dt(E)==2&&(g=0)}}return o}function Jf(e,t,n,r,i,o,l,a,s,u,p){for(var d=i-1,m=i===0?o:[""],y=lc(m),v=0,g=0,S=0;v<r;++v)for(var f=0,c=li(e,d+1,d=lv(g=l[v])),h=e;f<y;++f)(h=fh(g>0?m[f]+" "+c:D(c,/&\f/g,m[f])))&&(s[S++]=h);return El(e,t,n,i===0?ic:a,s,u,p)}function vv(e,t,n){return El(e,t,n,uh,xl(fv()),li(e,2,-2),0)}function ed(e,t,n,r){return El(e,t,n,oc,li(e,0,r),li(e,r+1,-1),r)}function Hn(e,t){for(var n="",r=lc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function wv(e,t,n,r){switch(e.type){case ov:case oc:return e.return=e.return||e.value;case uh:return"";case ch:return e.return=e.value+"{"+Hn(e.children,r)+"}";case ic:e.value=e.props.join(",")}return dt(n=Hn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Sv(e){var t=lc(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function kv(e){return function(t){t.root||(t=t.return)&&e(t)}}function xv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var _v=function(t,n,r){for(var i=0,o=0;i=o,o=gt(),i===38&&o===12&&(n[r]=1),!ai(o);)Ae();return vi(t,ze)},Ev=function(t,n){var r=-1,i=44;do switch(ai(i)){case 0:i===38&&gt()===12&&(n[r]=1),t[r]+=_v(ze-1,n,r);break;case 2:t[r]+=co(i);break;case 4:if(i===44){t[++r]=gt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=xl(i)}while(i=Ae());return t},Cv=function(t,n){return hh(Ev(ph(t),n))},td=new WeakMap,$v=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!td.get(r))&&!i){td.set(t,!0);for(var o=[],l=Cv(n,o),a=r.props,s=0,u=0;s<l.length;s++)for(var p=0;p<a.length;p++,u++)t.props[u]=o[s]?l[s].replace(/&\f/g,a[p]):a[p]+" "+l[s]}}},Pv=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function mh(e,t){switch(sv(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+Xo+e+Se+e+e;case 6828:case 4268:return V+e+Se+e+e;case 6165:return V+e+Se+"flex-"+e+e;case 5187:return V+e+D(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+Se+"flex-$1$2")+e;case 5443:return V+e+Se+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return V+e+Se+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return V+e+Se+D(e,"shrink","negative")+e;case 5292:return V+e+Se+D(e,"basis","preferred-size")+e;case 6060:return V+"box-"+D(e,"-grow","")+V+e+Se+D(e,"grow","positive")+e;case 4554:return V+D(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(me(e,t+1)){case 109:if(me(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+Xo+(me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Us(e,"stretch")?mh(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(me(e,t+1)!==115)break;case 6444:switch(me(e,dt(e)-3-(~Us(e,"!important")&&10))){case 107:return D(e,":",":"+V)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+V+(me(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+Se+"$2box$3")+e}break;case 5936:switch(me(e,t+11)){case 114:return V+e+Se+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+Se+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+Se+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return V+e+Se+e+e}return e}var Iv=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case oc:t.return=mh(t.value,t.length);break;case ch:return Hn([gr(t,{value:D(t.value,"@","@"+V)})],i);case ic:if(t.length)return cv(t.props,function(o){switch(uv(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Hn([gr(t,{props:[D(o,/:(read-\w+)/,":"+Xo+"$1")]})],i);case"::placeholder":return Hn([gr(t,{props:[D(o,/:(plac\w+)/,":"+V+"input-$1")]}),gr(t,{props:[D(o,/:(plac\w+)/,":"+Xo+"$1")]}),gr(t,{props:[D(o,/:(plac\w+)/,Se+"input-$1")]})],i)}return""})}},Ov=[Iv],Nv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var S=g.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=t.stylisPlugins||Ov,o={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var S=g.getAttribute("data-emotion").split(" "),f=1;f<S.length;f++)o[S[f]]=!0;a.push(g)});var s,u=[$v,Pv];{var p,d=[wv,kv(function(g){p.insert(g)})],m=Sv(u.concat(i,d)),y=function(S){return Hn(gv(S),m)};s=function(S,f,c,h){p=c,y(S?S+"{"+f.styles+"}":f.styles),h&&(v.inserted[f.name]=!0)}}var v={key:n,sheet:new iv({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return v.sheet.hydrate(a),v},Bs={},Tv={get exports(){return Bs},set exports(e){Bs=e}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=typeof Symbol=="function"&&Symbol.for,ac=fe?Symbol.for("react.element"):60103,sc=fe?Symbol.for("react.portal"):60106,Cl=fe?Symbol.for("react.fragment"):60107,$l=fe?Symbol.for("react.strict_mode"):60108,Pl=fe?Symbol.for("react.profiler"):60114,Il=fe?Symbol.for("react.provider"):60109,Ol=fe?Symbol.for("react.context"):60110,uc=fe?Symbol.for("react.async_mode"):60111,Nl=fe?Symbol.for("react.concurrent_mode"):60111,Tl=fe?Symbol.for("react.forward_ref"):60112,Rl=fe?Symbol.for("react.suspense"):60113,Rv=fe?Symbol.for("react.suspense_list"):60120,zl=fe?Symbol.for("react.memo"):60115,Ml=fe?Symbol.for("react.lazy"):60116,zv=fe?Symbol.for("react.block"):60121,Mv=fe?Symbol.for("react.fundamental"):60117,Lv=fe?Symbol.for("react.responder"):60118,jv=fe?Symbol.for("react.scope"):60119;function Ue(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ac:switch(e=e.type,e){case uc:case Nl:case Cl:case Pl:case $l:case Rl:return e;default:switch(e=e&&e.$$typeof,e){case Ol:case Tl:case Ml:case zl:case Il:return e;default:return t}}case sc:return t}}}function yh(e){return Ue(e)===Nl}W.AsyncMode=uc;W.ConcurrentMode=Nl;W.ContextConsumer=Ol;W.ContextProvider=Il;W.Element=ac;W.ForwardRef=Tl;W.Fragment=Cl;W.Lazy=Ml;W.Memo=zl;W.Portal=sc;W.Profiler=Pl;W.StrictMode=$l;W.Suspense=Rl;W.isAsyncMode=function(e){return yh(e)||Ue(e)===uc};W.isConcurrentMode=yh;W.isContextConsumer=function(e){return Ue(e)===Ol};W.isContextProvider=function(e){return Ue(e)===Il};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ac};W.isForwardRef=function(e){return Ue(e)===Tl};W.isFragment=function(e){return Ue(e)===Cl};W.isLazy=function(e){return Ue(e)===Ml};W.isMemo=function(e){return Ue(e)===zl};W.isPortal=function(e){return Ue(e)===sc};W.isProfiler=function(e){return Ue(e)===Pl};W.isStrictMode=function(e){return Ue(e)===$l};W.isSuspense=function(e){return Ue(e)===Rl};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Cl||e===Nl||e===Pl||e===$l||e===Rl||e===Rv||typeof e=="object"&&e!==null&&(e.$$typeof===Ml||e.$$typeof===zl||e.$$typeof===Il||e.$$typeof===Ol||e.$$typeof===Tl||e.$$typeof===Mv||e.$$typeof===Lv||e.$$typeof===jv||e.$$typeof===zv)};W.typeOf=Ue;(function(e){e.exports=W})(Tv);var gh=Bs,Av={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vh={};vh[gh.ForwardRef]=Av;vh[gh.Memo]=Fv;var Vv=!0;function wh(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var cc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Vv===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Sh=function(t,n,r){cc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Dv(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Uv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wv=/[A-Z]|^ms/g,Bv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,kh=function(t){return t.charCodeAt(1)===45},nd=function(t){return t!=null&&typeof t!="boolean"},Ia=xv(function(e){return kh(e)?e:e.replace(Wv,"-$&").toLowerCase()}),rd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Bv,function(r,i,o){return pt={name:i,styles:o,next:pt},i})}return Uv[t]!==1&&!kh(t)&&typeof n=="number"&&n!==0?n+"px":n};function si(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pt={name:n.name,styles:n.styles,next:pt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pt={name:r.name,styles:r.styles,next:pt},r=r.next;var i=n.styles+";";return i}return bv(e,t,n)}case"function":{if(e!==void 0){var o=pt,l=n(e);return pt=o,si(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function bv(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=si(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":nd(l)&&(r+=Ia(o)+":"+rd(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)nd(l[a])&&(r+=Ia(o)+":"+rd(o,l[a])+";");else{var s=si(e,t,l);switch(o){case"animation":case"animationName":{r+=Ia(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var id=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pt,fc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";pt=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=si(r,n,l)):o+=l[0];for(var a=1;a<t.length;a++)o+=si(r,n,t[a]),i&&(o+=l[a]);id.lastIndex=0;for(var s="",u;(u=id.exec(o))!==null;)s+="-"+u[1];var p=Dv(o)+s;return{name:p,styles:o,next:pt}},Qv=function(t){return t()},Hv=wc["useInsertionEffect"]?wc["useInsertionEffect"]:!1,xh=Hv||Qv,dc={}.hasOwnProperty,_h=_.createContext(typeof HTMLElement<"u"?Nv({key:"css"}):null);_h.Provider;var Eh=function(t){return _.forwardRef(function(n,r){var i=_.useContext(_h);return t(n,i,r)})},Ch=_.createContext({}),bs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Yv=function(t,n){var r={};for(var i in n)dc.call(n,i)&&(r[i]=n[i]);return r[bs]=t,r},Xv=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return cc(n,r,i),xh(function(){return Sh(n,r,i)}),null},Kv=Eh(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[bs],o=[r],l="";typeof e.className=="string"?l=wh(t.registered,o,e.className):e.className!=null&&(l=e.className+" ");var a=fc(o,void 0,_.useContext(Ch));l+=t.key+"-"+a.name;var s={};for(var u in e)dc.call(e,u)&&u!=="css"&&u!==bs&&(s[u]=e[u]);return s.ref=n,s.className=l,_.createElement(_.Fragment,null,_.createElement(Xv,{cache:t,serialized:a,isStringTag:typeof i=="string"}),_.createElement(i,s))});function $h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fc(t)}var $=function(){var t=$h.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Gv=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var l=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))l=e(o);else{l="";for(var a in o)o[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=o}l&&(i&&(i+=" "),i+=l)}}return i};function qv(e,t,n){var r=[],i=wh(e,r,n);return r.length<2?n:i+t(r)}var Zv=function(t){var n=t.cache,r=t.serializedArr;return xh(function(){for(var i=0;i<r.length;i++)Sh(n,r[i],!1)}),null},Oa=Eh(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,p=new Array(u),d=0;d<u;d++)p[d]=arguments[d];var m=fc(p,t.registered);return r.push(m),cc(t,m,!1),t.key+"-"+m.name},o=function(){for(var u=arguments.length,p=new Array(u),d=0;d<u;d++)p[d]=arguments[d];return qv(t.registered,i,Gv(p))},l={css:i,cx:o,theme:_.useContext(Ch)},a=e.children(l);return n=!0,_.createElement(_.Fragment,null,_.createElement(Zv,{cache:t,serializedArr:r}),a)});function Qs(){return Qs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qs.apply(this,arguments)}function Jv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const Hs=new Map,Yi=new WeakMap;let od=0,ew;function tw(e){return e?(Yi.has(e)||(od+=1,Yi.set(e,od.toString())),Yi.get(e)):"0"}function nw(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?tw(e.root):e[t]}`).toString()}function rw(e){let t=nw(e),n=Hs.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&i.some(p=>a.intersectionRatio>=p);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(p=>{p(u,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Hs.set(t,n)}return n}function Ph(e,t,n={},r=ew){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:i,observer:o,elements:l}=rw(n);let a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),o.unobserve(e)),l.size===0&&(o.disconnect(),Hs.delete(i))}}const iw=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function ld(e){return typeof e.children!="function"}class ad extends _.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=n=>{this.node&&(this.unobserve(),!n&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=n||null,this.observeNode()},this.handleChange=(n,r)=>{n&&this.props.triggerOnce&&this.unobserve(),ld(this.props)||this.setState({inView:n,entry:r}),this.props.onChange&&this.props.onChange(n,r)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o,fallbackInView:l}=this.props;this._unobserveCb=Ph(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!ld(this.props)){const{inView:o,entry:l}=this.state;return this.props.children({inView:o,entry:l,ref:this.handleNode})}const t=this.props,{children:n,as:r}=t,i=Jv(t,iw);return _.createElement(r||"div",Qs({ref:this.handleNode},i),n)}}function Ih({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var p;const[d,m]=_.useState(null),y=_.useRef(),[v,g]=_.useState({inView:!!a,entry:void 0});y.current=u,_.useEffect(()=>{if(l||!d)return;let h;return h=Ph(d,(w,k)=>{g({inView:w,entry:k}),y.current&&y.current(w,k),k.isIntersecting&&o&&h&&(h(),h=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{h&&h()}},[Array.isArray(e)?e.toString():e,d,i,r,o,l,n,s,t]);const S=(p=v.entry)==null?void 0:p.target,f=_.useRef();!d&&S&&!o&&!l&&f.current!==S&&(f.current=S,g({inView:!!a,entry:void 0}));const c=[m,v.inView,v.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var Ys={},ow={get exports(){return Ys},set exports(e){Ys=e}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc=Symbol.for("react.element"),hc=Symbol.for("react.portal"),Ll=Symbol.for("react.fragment"),jl=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),Fl=Symbol.for("react.provider"),Vl=Symbol.for("react.context"),lw=Symbol.for("react.server_context"),Dl=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),Bl=Symbol.for("react.memo"),bl=Symbol.for("react.lazy"),aw=Symbol.for("react.offscreen"),Oh;Oh=Symbol.for("react.module.reference");function Ze(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pc:switch(e=e.type,e){case Ll:case Al:case jl:case Ul:case Wl:return e;default:switch(e=e&&e.$$typeof,e){case lw:case Vl:case Dl:case bl:case Bl:case Fl:return e;default:return t}}case hc:return t}}}B.ContextConsumer=Vl;B.ContextProvider=Fl;B.Element=pc;B.ForwardRef=Dl;B.Fragment=Ll;B.Lazy=bl;B.Memo=Bl;B.Portal=hc;B.Profiler=Al;B.StrictMode=jl;B.Suspense=Ul;B.SuspenseList=Wl;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return Ze(e)===Vl};B.isContextProvider=function(e){return Ze(e)===Fl};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pc};B.isForwardRef=function(e){return Ze(e)===Dl};B.isFragment=function(e){return Ze(e)===Ll};B.isLazy=function(e){return Ze(e)===bl};B.isMemo=function(e){return Ze(e)===Bl};B.isPortal=function(e){return Ze(e)===hc};B.isProfiler=function(e){return Ze(e)===Al};B.isStrictMode=function(e){return Ze(e)===jl};B.isSuspense=function(e){return Ze(e)===Ul};B.isSuspenseList=function(e){return Ze(e)===Wl};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ll||e===Al||e===jl||e===Ul||e===Wl||e===aw||typeof e=="object"&&e!==null&&(e.$$typeof===bl||e.$$typeof===Bl||e.$$typeof===Fl||e.$$typeof===Vl||e.$$typeof===Dl||e.$$typeof===Oh||e.getModuleId!==void 0)};B.typeOf=Ze;(function(e){e.exports=B})(ow);var sw=R.Fragment;function se(e,t,n){return dc.call(t,"css")?R.jsx(Kv,Yv(e,t),n):R.jsx(e,t,n)}$`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;$`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;$`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;$`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;$`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;$`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;$`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;$`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;$`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var uw=$`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,cw=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fw=$`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dw=$`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pw=$`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mc=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hw=$`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mw=$`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yw=$`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gw=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vw=$`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ww=$`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sw=$`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function kw({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=mc,iterationCount:i=1}){return $h`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function xw(e){return e==null}function _w(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Nh(e,t){return n=>n?e():t()}function Ko(e){return Nh(e,()=>null)}var Th=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:l=mc,triggerOnce:a=!1,className:s,style:u,childClassName:p,childStyle:d,children:m,onVisibilityChange:y}=e,v=_.useMemo(()=>kw({keyframes:l,duration:i}),[i,l]);return xw(m)?null:_w(m)?se(Cw,{...e,animationStyles:v,children:String(m)}):Ys.isFragment(m)?se(Rh,{...e,animationStyles:v}):se(sw,{children:_.Children.map(m,(g,S)=>{if(!_.isValidElement(g))return null;const f=r+(t?S*i*n:0);switch(g.type){case"ol":case"ul":return se(Oa,{children:({cx:c})=>se(g.type,{...g.props,className:c(s,g.props.className),style:Object.assign({},u,g.props.style),children:se(Th,{...e,children:g.props.children})})});case"li":return se(ad,{threshold:o,triggerOnce:a,onChange:y,children:({inView:c,ref:h})=>se(Oa,{children:({cx:w})=>se(g.type,{...g.props,ref:h,className:w(p,g.props.className),css:Ko(()=>v)(c),style:Object.assign({},d,g.props.style,{animationDelay:f+"ms"})})})});default:return se(ad,{threshold:o,triggerOnce:a,onChange:y,children:({inView:c,ref:h})=>se("div",{ref:h,className:s,css:Ko(()=>v)(c),style:Object.assign({},u,{animationDelay:f+"ms"}),children:se(Oa,{children:({cx:w})=>se(g.type,{...g.props,className:w(p,g.props.className),style:Object.assign({},d,g.props.style)})})})})}})})},Ew={display:"inline-block",whiteSpace:"pre"},Cw=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:u,children:p,onVisibilityChange:d}=e,{ref:m,inView:y}=Ih({triggerOnce:a,threshold:l,onChange:d});return Nh(()=>se("div",{ref:m,className:s,style:Object.assign({},u,Ew),children:p.split("").map((v,g)=>se("span",{css:Ko(()=>t)(y),style:{animationDelay:i+g*o*r+"ms"},children:v},g))}),()=>se(Rh,{...e,children:p}))(n)},Rh=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:l,onVisibilityChange:a}=e,{ref:s,inView:u}=Ih({triggerOnce:r,threshold:n,onChange:a});return se("div",{ref:s,className:i,css:Ko(()=>t)(u),style:o,children:l})};$`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;$`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;$`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;$`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;$`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var $w=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Pw=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Iw=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ow=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Nw=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Tw=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Rw=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,zw=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Mw=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Lw=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,jw=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Aw=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Fw=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Vw(e,t,n){switch(n){case"bottom-left":return t?Pw:cw;case"bottom-right":return t?Iw:fw;case"down":return e?t?Nw:pw:t?Ow:dw;case"left":return e?t?Rw:hw:t?Tw:mc;case"right":return e?t?Mw:yw:t?zw:mw;case"top-left":return t?Lw:gw;case"top-right":return t?jw:vw;case"up":return e?t?Fw:Sw:t?Aw:ww;default:return t?$w:uw}}var Dw=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=_.useMemo(()=>Vw(t,r,n),[t,n,r]);return se(Th,{keyframes:o,...i})};$`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;$`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;$`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;$`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;$`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;$`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;$`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;$`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Uw=({body:e})=>R.jsxs("div",{style:{display:"flex"},children:[R.jsx("div",{style:{textAlign:"left",marginRight:"30px"},children:e.bodyText}),e.embedContent&&e.embedContent]}),Na=({header:e,body:t,footer:n,options:r})=>R.jsx(Dw,{direction:r==null?void 0:r.fadeDirections,triggerOnce:r==null?void 0:r.triggerOnce,children:R.jsxs("div",{style:{width:"1000px",height:"500px",marginLeft:"auto",marginRight:"auto"},children:[R.jsxs("h2",{style:{textAlign:"left"},children:[e.headerText," ",e.link&&R.jsx("a",{href:e.link,target:"_blank",children:"Github repo link"})]}),R.jsx(Uw,{body:t}),R.jsx("div",{children:n==null?void 0:n.footerText})]})}),Xi=({children:e,title:t,width:n="700px",height:r="700px"})=>R.jsxs("div",{style:{width:n,height:r,marginLeft:"auto",marginRight:"auto"},children:[R.jsx("h1",{style:{textAlign:"left"},children:t}),e]}),Ww='Ok, not actually a bomb. I just wanted to make it more interesting rather than a single dot moving around. It is simply a bunch of random blobs with random target destination. More specifically, given a random destination, each blob will start from the middle of the screen and reach the target using direction vector. However, this is not enough because you would end up with a blob reaching destination in light speed! To make it seem "smooth" I used dissipation factor to specify how fast it plays out and then I use linear interpolation to slow down the movement of the blob as it closes in to the destination.',Bw="I have quite a few web-scrapers. It is quite nice to have scripts that do all the data gathering for you, it is also really REALLY practical and I use it often. What is a web-scraper? It is a program that goes onto the internet without actually opening the browser and automatically download data in all sorts of format in batch. Most obvious usages is for machine learning, you could scraper lots of images to train an image AI, texts for language AI, etc. The hardest part of web-scraping is knowing how to scrape dynamic websites because unlike static websites where everything is already given, you need to make extra requests or you need to know specifically what headers you need in your request. Furthermore, due to the amount of data you are able to scrape, you can easily exceed 10GB, this means a good file structure is REALLY nice to have. I made my web-scrapers able to fetch/update existing websites.",bw="For my university, I created an educational application for the Medical University of Warsaw. The application is meant for professors to manage groups and assign tasks to students. Students on the other hand will be able to receive the tasks to work on. Many features were implemented, I have, in accordance to the medical professor's suggestions, made functionalities that will assist professors to know more about the students better in the form of statistics. Of course, I have made sure there are permission restrictions to ensure there is no room for unwanted curiosities.",Qw="Physics simulation, Webscraper, Raspi server, Automated video editing, File organizer, Video stream downloader ...",Hw="Frontend development in ReactTS, Hackathon, Public deployment, Teamwork, Communication, Working with multiple departments",Yw="I learned Java, C++ and C# and later self-taught myself Python, Javascript/Typescript, React",Xw=`First and foremost, I have graduated from Polish-Japanese Academy of Information Technology, I hold an engineer's degree with the highest grade possible. I would like to assume that I have put in the efforts to stand out from most if not all my peers because I constantly engaged myself in activities/materials outside of the university curriculum, thereby making me more versatile. I say this mainly because I have noticed that 9/10 self-taught engineers are better than most CS students I come across, so I'm copying them :P. A degree weighs really precious little :/.
`,Kw="As my engineering thesis, I have created a web application (frontend, backend, database, deployment on azure) so I am quite familiar with web related apps, SaaS, business logics, etc. I have created web-scrapers which has taught me a lot about HTTP, TCP and UDP requests, more than I was taught in university, which gave me a more low level understanding than just one the endpoints to endpoints level in most REST applications. And file structure, yikes, it is not hard but it can get harder when you have so much data. I learn many programming languages, currently Rust, this lets me understand code from different spectrums and allows me to be more critical towards each programming language I come across. Java pls no. I had plans to create more physics simulations as they sound challenging and it sounds cool on a resume but I have recently decided to start creating a game, something which I have never done, good lucks to me.",Gw="All in all, I am a great learner, I hope. I have been to a big corpo and I know how things work in companies. The first step to get to know the codebase is quite important to get up to speed with colleagues. And thank goodness I am not afraid of asking questions in companies (I was asking around for horror stories in my previous company, heard some scary ones).";function qw(){return _.useState(0),R.jsx("div",{className:"App",children:R.jsx("div",{style:{marginLeft:"auto",marginRight:"auto"},children:R.jsxs(Ng,{pages:3,config:{tension:100},children:[R.jsx(Wi,{offset:0,children:R.jsx(Xi,{title:"About me",children:R.jsxs("div",{children:["I am Alex, here is ",R.jsx("a",{href:Zf,children:"my resume"})," this is",R.jsx("a",{href:"https://www.linkedin.com/in/alexander-tu-515092223/",children:" my linkedin"}),", I plan to show you most things here on this page but here you go."]})})}),R.jsx(Wi,{offset:.5,speed:1,factor:.5,children:R.jsx("div",{style:{marginRight:"300px"},children:R.jsxs(Xi,{title:"Highlights",children:[R.jsx(Na,{header:{headerText:"Physics bomb",link:"https://github.com/momipochi/physics_bomb"},body:{bodyText:Ww,embedContent:R.jsx("iframe",{src:"./physics_bomb/index.html",width:250,height:250})},options:{triggerOnce:!1,fadeDirections:"left"}}),R.jsx(Na,{header:{headerText:"Web-scrapers",link:"https://github.com/momipochi/exh"},body:{bodyText:Bw,embedContent:R.jsx("img",{src:ev,width:500,height:350})},options:{triggerOnce:!1,fadeDirections:"right"}}),R.jsx(Na,{header:{headerText:"University thesis"},body:{bodyText:bw,embedContent:R.jsx("img",{src:tv,width:450,height:250})},options:{triggerOnce:!1,fadeDirections:"left"}})]})})}),R.jsx(Wi,{offset:1.4,speed:1,children:R.jsxs(Xi,{title:"Experience",children:[R.jsx("div",{children:R.jsx("a",{href:Zf,children:R.jsx("h2",{children:"My Resume"})})}),R.jsxs(Qi.VerticalTimeline,{layout:"2-columns",children:[R.jsxs(Qi.VerticalTimelineElement,{contentStyle:{background:"rgb(200, 0, 0)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(200, 0, 0)"},date:"2019, Oct - 2023, March",iconStyle:{background:"rgb(255,255,255)",color:"#fff"},icon:R.jsx("img",{style:{marginTop:"8px"},width:"45px",height:"45px",src:Zg}),children:[R.jsx("h3",{className:"vertical-timeline-element-title",children:"Computer Science"}),R.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Warsaw, Poland"}),R.jsx("p",{children:Yw})]}),R.jsxs(Qi.VerticalTimelineElement,{contentStyle:{background:"rgb(33, 150, 243)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},date:"2022, Oct - 2023, April .",iconStyle:{background:"rgb(255,255,255)",color:"#fff"},icon:R.jsx("img",{style:{marginTop:"4px"},width:"50px",height:"50px",src:Jg}),children:[R.jsx("h3",{className:"vertical-timeline-element-title",children:"Software Engineer"}),R.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Warsaw, Poland"}),R.jsx("p",{children:Hw})]}),R.jsxs(Qi.VerticalTimelineElement,{contentStyle:{background:"rgb(0,0,0)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(0,0,0)"},date:"End of time",iconStyle:{background:"rgb(0,0,0)",color:"#fff"},children:[R.jsx("h3",{className:"vertical-timeline-element-title",children:"Personal Projects"}),R.jsx("p",{children:Qw})]})]})]})}),R.jsx(Wi,{offset:2,speed:1,children:R.jsx(Xi,{title:"What can I do for you?",children:R.jsxs("div",{style:{textAlign:"left"},children:[R.jsx("p",{children:Xw}),R.jsx("p",{children:Kw}),R.jsx("p",{children:Gw})]})})})]})})})}/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Go.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const sd="popstate";function Zw(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Xs("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Mh(i)}return e2(t,n,null,e)}function zh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jw(){return Math.random().toString(36).substr(2,8)}function ud(e,t){return{usr:e.state,key:e.key,idx:t}}function Xs(e,t,n,r){return n===void 0&&(n=null),Go({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Lh(t):t,{state:n,key:t&&t.key||r||Jw()})}function Mh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Lh(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function e2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=dn.Pop,s=null,u=p();u==null&&(u=0,l.replaceState(Go({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function d(){a=dn.Pop;let S=p(),f=S==null?null:S-u;u=S,s&&s({action:a,location:g.location,delta:f})}function m(S,f){a=dn.Push;let c=Xs(g.location,S,f);n&&n(c,S),u=p()+1;let h=ud(c,u),w=g.createHref(c);try{l.pushState(h,"",w)}catch{i.location.assign(w)}o&&s&&s({action:a,location:g.location,delta:1})}function y(S,f){a=dn.Replace;let c=Xs(g.location,S,f);n&&n(c,S),u=p();let h=ud(c,u),w=g.createHref(c);l.replaceState(h,"",w),o&&s&&s({action:a,location:g.location,delta:0})}function v(S){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof S=="string"?S:Mh(S);return zh(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let g={get action(){return a},get location(){return e(i,l)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(sd,d),s=S,()=>{i.removeEventListener(sd,d),s=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let f=v(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:y,go(S){return l.go(S)}};return g}var cd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cd||(cd={}));function t2(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const n2=_.createContext(null),jh=_.createContext(null);function r2(){return _.useContext(jh)!=null}var fd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(fd||(fd={}));var dd;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(dd||(dd={}));function i2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:o,static:l=!1}=e;r2()&&zh(!1);let a=t.replace(/^\/*/,"/"),s=_.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=Lh(r));let{pathname:u="/",search:p="",hash:d="",state:m=null,key:y="default"}=r,v=_.useMemo(()=>{let g=t2(u,a);return g==null?null:{location:{pathname:g,search:p,hash:d,state:m,key:y},navigationType:i}},[a,u,p,d,m,y,i]);return v==null?null:_.createElement(n2.Provider,{value:s},_.createElement(jh.Provider,{children:n,value:v}))}var pd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(pd||(pd={}));new Promise(()=>{});/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function o2(e){let{basename:t,children:n,window:r}=e,i=_.useRef();i.current==null&&(i.current=Zw({window:r,v5Compat:!0}));let o=i.current,[l,a]=_.useState({action:o.action,location:o.location});return _.useLayoutEffect(()=>o.listen(a),[o]),_.createElement(i2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}var hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(hd||(hd={}));var md;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(md||(md={}));Ta.createRoot(document.getElementById("root")).render(R.jsx(Ed.StrictMode,{children:R.jsx(o2,{children:R.jsx(qw,{})})}));
