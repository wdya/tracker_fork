(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{7005:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n(3045)}])},3045:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return W},default:function(){return K}});var r=n(5893);function o(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function a(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}var i=n(7294),c=n(4051),s=n.n(c);let u,l;const f=new WeakMap,d=new WeakMap,p=new WeakMap,y=new WeakMap,h=new WeakMap;let m={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(x(this),t),g(f.get(this))}:function(...t){return g(e.apply(x(this),t))}:function(t,...n){const r=e.call(x(this),t,...n);return p.set(r,t.sort?t.sort():[t]),g(r)}}function b(e){return"function"===typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)}));d.set(e,t)}(e),t=e,(u||(u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,m):e);var t}function g(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{t(g(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&f.set(t,e)})).catch((()=>{})),h.set(t,e),t}(e);if(y.has(e))return y.get(e);const t=b(e);return t!==e&&(y.set(e,t),h.set(t,e)),t}const x=e=>h.get(e);const j=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],k=new Map;function E(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!j.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,o?"readwrite":"readonly");let i=a.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),o&&a.done]))[0]};return k.set(t,a),a}m=(e=>({...e,get:(t,n,r)=>E(t,n)||e.get(t,n,r),has:(t,n)=>!!E(t,n)||e.has(t,n)}))(m);var S=["aboveground-bosses","underground-bosses"];function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){D(a,r,o,i,c,"next",e)}function c(e){D(a,r,o,i,c,"throw",e)}i(void 0)}))}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B,_=function(){return function(e,t,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const i=indexedDB.open(e,t),c=g(i);return r&&i.addEventListener("upgradeneeded",(e=>{r(g(i.result),e.oldVersion,e.newVersion,g(i.transaction))})),n&&i.addEventListener("blocked",(()=>n())),c.then((e=>{a&&e.addEventListener("close",(()=>a())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}("tracker",1,{upgrade:function(e){var t=!0,n=!1,r=void 0;try{for(var o,a=S[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value;e.createObjectStore(i)}}catch(c){n=!0,r=c}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}})};function L(e,t){var n=(0,i.useState)(t),r=n[0],o=n[1],a=(0,i.useRef)(null);(0,i.useEffect)((function(){function t(){return(t=N(s().mark((function t(){var n,r,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,_();case 3:return a.current=t.sent,t.next=6,Promise.all([null===(n=a.current)||void 0===n?void 0:n.getAllKeys(e),null===(r=a.current)||void 0===r?void 0:r.getAll(e)]).then((function(e){var t=A(e,2),n=t[0],r=t[1];return n.map((function(e,t){return[e,r[t]]}))}));case 6:i=t.sent,o(Object.fromEntries(i));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){return t.apply(this,arguments)}().catch((function(e){console.error("Failed to open db. ",e)})),function(){var e;null===(e=a.current)||void 0===e||e.close()}}),[e]);var c=(0,i.useCallback)((function(t,n){var r;return o((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}({},e,O({},t,n))})),null===(r=a.current)||void 0===r?void 0:r.put(e,n,t)}),[e]);return[r,c]}function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}var P=function(e){return i.createElement("svg",C({width:24,height:24,fill:"none"},e),B||(B=i.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m5.75 12.867 2.59 3.547a2 2 0 0 0 3.26-.043l6.65-9.621"})))};function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=!0,K=function(e){var t,n=e.sheet,o=n._meta,a=n.data,c=M(L(o.id,{}),2),s=c[0],u=c[1],l=(0,i.useCallback)((function(e){var t=e.currentTarget.name,n=e.currentTarget.checked;u(t,n)}),[u]);return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-2xl font-bold my-4 text-stone-300",children:o.title}),(0,r.jsxs)("table",{className:"w-full max-w-screen-xl",children:[(0,r.jsx)("thead",{className:"border-b border-stone-300",children:(0,r.jsxs)("tr",{children:[o.schema.map((function(e){return(0,r.jsx)("th",{scope:"col",className:"text-sm font-medium px-6 py-4 text-left capitalize",children:e.name},e.name)})),(0,r.jsx)("th",{})]})}),Object.keys(a).map((function(e){return(0,r.jsx)("tbody",{className:"border-b border-stone-300 relative",children:a[e].map((function(n,i){return(0,r.jsx)(R,{i:i,id:"".concat(i,"_").concat(n.name),checked:null!==(t=s["".concat(i,"_").concat(n.name)])&&void 0!==t&&t,groupedColumn:o.groupBy,groupedRowSpan:a[e].length,data:n,onUpdate:l},"".concat(i,"_").concat(n.name))}))},e)}))]})]},o.title)};function R(e){var t=e.i,n=e.id,o=e.checked,i=e.data,c=e.groupedColumn,s=e.groupedRowSpan,u=e.onUpdate;return(0,r.jsxs)("tr",{className:"even:bg-stone-800 transition-opacity duration-150 ease-in-out",children:[0===t&&(0,r.jsx)("td",{className:"px-3 py-4 align-top opacity-100",rowSpan:s,children:(0,r.jsx)("span",{className:"sticky top-4 bg-stone-900",children:i[c]})}),Object.keys(i).map((function(e){return e===c?null:(0,r.jsx)("td",{className:a("text-sm font-light px-6 py-4 line-through decoration-transparent transition duration-150 ease-in-out",o&&"opacity-50 decoration-inherit"),children:i[e]},i[e])})),(0,r.jsx)("td",{className:"text-sm px-5 py-3",children:(0,r.jsxs)("label",{className:"block p-1 rounded border border-stone-700",children:[(0,r.jsx)("input",{className:"hidden",name:n,type:"checkbox",onChange:u,checked:o}),(0,r.jsx)(P,{className:a("h-6 w-6 text-stone-50 transition-opacity duration-150 ease-in-out",o?"opacity-100":"opacity-0")})]})})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=7005,e(e.s=t);var t}));var t=e.O();_N_E=t}]);