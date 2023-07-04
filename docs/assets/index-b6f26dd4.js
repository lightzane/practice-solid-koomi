(function(m){var w=document.createElement("style");w.textContent=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.py-20{padding-top:5rem;padding-bottom:5rem}.text-center{text-align:center}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}
`,document.head.appendChild(w),typeof define=="function"&&define.amd?define(m):m()})(function(){"use strict";let m=B;const w=1,y=2,L={owned:null,cleanups:null,context:null,owner:null};var f=null;let S=null,p=null,c=null,h=null,x=0;function F(t,i){const e=p,n=f,o=t.length===0,r=o?L:{owned:null,cleanups:null,context:null,owner:i===void 0?n:i},l=o?t:()=>t(()=>k(()=>v(r)));f=r,p=null;try{return A(l,!0)}finally{p=e,f=n}}function E(t,i,e){const n=D(t,i,!1,w);T(n)}function k(t){if(p===null)return t();const i=p;p=null;try{return t()}finally{p=i}}function _(t,i,e){let n=t.value;return(!t.comparator||!t.comparator(n,i))&&(t.value=i,t.observers&&t.observers.length&&A(()=>{for(let o=0;o<t.observers.length;o+=1){const r=t.observers[o],l=S&&S.running;l&&S.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?c.push(r):h.push(r),r.observers&&M(r)),l||(r.state=w)}if(c.length>1e6)throw c=[],new Error},!1)),i}function T(t){if(!t.fn)return;v(t);const i=f,e=p,n=x;p=f=t,R(t,t.value,n),p=e,f=i}function R(t,i,e){let n;try{n=t.fn(i)}catch(o){return t.pure&&(t.state=w,t.owned&&t.owned.forEach(v),t.owned=null),t.updatedAt=e+1,P(o)}(!t.updatedAt||t.updatedAt<=e)&&(t.updatedAt!=null&&"observers"in t?_(t,n):t.value=n,t.updatedAt=e)}function D(t,i,e,n=w,o){const r={fn:t,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:i,owner:f,context:null,pure:e};return f===null||f!==L&&(f.owned?f.owned.push(r):f.owned=[r]),r}function U(t){if(t.state===0)return;if(t.state===y)return z(t);if(t.suspense&&k(t.suspense.inFallback))return t.suspense.effects.push(t);const i=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<x);)t.state&&i.push(t);for(let e=i.length-1;e>=0;e--)if(t=i[e],t.state===w)T(t);else if(t.state===y){const n=c;c=null,A(()=>z(t,i[0]),!1),c=n}}function A(t,i){if(c)return t();let e=!1;i||(c=[]),h?e=!0:h=[],x++;try{const n=t();return H(e),n}catch(n){e||(h=null),c=null,P(n)}}function H(t){if(c&&(B(c),c=null),t)return;const i=h;h=null,i.length&&A(()=>m(i),!1)}function B(t){for(let i=0;i<t.length;i++)U(t[i])}function z(t,i){t.state=0;for(let e=0;e<t.sources.length;e+=1){const n=t.sources[e];if(n.sources){const o=n.state;o===w?n!==i&&(!n.updatedAt||n.updatedAt<x)&&U(n):o===y&&z(n,i)}}}function M(t){for(let i=0;i<t.observers.length;i+=1){const e=t.observers[i];e.state||(e.state=y,e.pure?c.push(e):h.push(e),e.observers&&M(e))}}function v(t){let i;if(t.sources)for(;t.sources.length;){const e=t.sources.pop(),n=t.sourceSlots.pop(),o=e.observers;if(o&&o.length){const r=o.pop(),l=e.observerSlots.pop();n<o.length&&(r.sourceSlots[l]=n,o[n]=r,e.observerSlots[n]=l)}}if(t.owned){for(i=t.owned.length-1;i>=0;i--)v(t.owned[i]);t.owned=null}if(t.cleanups){for(i=t.cleanups.length-1;i>=0;i--)t.cleanups[i]();t.cleanups=null}t.state=0,t.context=null}function q(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function P(t,i=f){throw q(t)}function G(t,i){return k(()=>t(i||{}))}function K(t,i,e){let n=e.length,o=i.length,r=n,l=0,s=0,a=i[o-1].nextSibling,d=null;for(;l<o||s<r;){if(i[l]===e[s]){l++,s++;continue}for(;i[o-1]===e[r-1];)o--,r--;if(o===l){const u=r<n?s?e[s-1].nextSibling:e[r-s]:a;for(;s<r;)t.insertBefore(e[s++],u)}else if(r===s)for(;l<o;)(!d||!d.has(i[l]))&&i[l].remove(),l++;else if(i[l]===e[r-1]&&e[s]===i[o-1]){const u=i[--o].nextSibling;t.insertBefore(e[s++],i[l++].nextSibling),t.insertBefore(e[--r],u),i[o]=e[r]}else{if(!d){d=new Map;let g=s;for(;g<r;)d.set(e[g],g++)}const u=d.get(i[l]);if(u!=null)if(s<u&&u<r){let g=l,O=1,j;for(;++g<o&&g<r&&!((j=d.get(i[g]))==null||j!==u+O);)O++;if(O>u-s){const Y=i[l];for(;s<u;)t.insertBefore(e[s++],Y)}else t.replaceChild(e[s++],i[l++])}else l++;else i[l++].remove()}}}function Q(t,i,e,n={}){let o;return F(r=>{o=r,i===document?t():W(i,t(),i.firstChild?null:void 0,e)},n.owner),()=>{o(),i.textContent=""}}function V(t,i,e){let n;const o=()=>{const l=document.createElement("template");return l.innerHTML=t,e?l.content.firstChild.firstChild:l.content.firstChild},r=i?()=>k(()=>document.importNode(n||(n=o()),!0)):()=>(n||(n=o())).cloneNode(!0);return r.cloneNode=r,r}function W(t,i,e,n){if(e!==void 0&&!n&&(n=[]),typeof i!="function")return C(t,i,n,e);E(o=>C(t,i(),o,e),n)}function C(t,i,e,n,o){for(;typeof e=="function";)e=e();if(i===e)return e;const r=typeof i,l=n!==void 0;if(t=l&&e[0]&&e[0].parentNode||t,r==="string"||r==="number")if(r==="number"&&(i=i.toString()),l){let s=e[0];s&&s.nodeType===3?s.data=i:s=document.createTextNode(i),e=b(t,e,n,s)}else e!==""&&typeof e=="string"?e=t.firstChild.data=i:e=t.textContent=i;else if(i==null||r==="boolean")e=b(t,e,n);else{if(r==="function")return E(()=>{let s=i();for(;typeof s=="function";)s=s();e=C(t,s,e,n)}),()=>e;if(Array.isArray(i)){const s=[],a=e&&Array.isArray(e);if(N(s,i,e,o))return E(()=>e=C(t,s,e,n,!0)),()=>e;if(s.length===0){if(e=b(t,e,n),l)return e}else a?e.length===0?I(t,s,n):K(t,e,s):(e&&b(t),I(t,s));e=s}else if(i.nodeType){if(Array.isArray(e)){if(l)return e=b(t,e,n,i);b(t,e,null,i)}else e==null||e===""||!t.firstChild?t.appendChild(i):t.replaceChild(i,t.firstChild);e=i}else console.warn("Unrecognized value. Skipped inserting",i)}return e}function N(t,i,e,n){let o=!1;for(let r=0,l=i.length;r<l;r++){let s=i[r],a=e&&e[r],d;if(!(s==null||s===!0||s===!1))if((d=typeof s)=="object"&&s.nodeType)t.push(s);else if(Array.isArray(s))o=N(t,s,a)||o;else if(d==="function")if(n){for(;typeof s=="function";)s=s();o=N(t,Array.isArray(s)?s:[s],Array.isArray(a)?a:[a])||o}else t.push(s),o=!0;else{const u=String(s);a&&a.nodeType===3&&a.data===u?t.push(a):t.push(document.createTextNode(u))}}return o}function I(t,i,e=null){for(let n=0,o=i.length;n<o;n++)t.insertBefore(i[n],e)}function b(t,i,e,n){if(e===void 0)return t.textContent="";const o=n||document.createTextNode("");if(i.length){let r=!1;for(let l=i.length-1;l>=0;l--){const s=i[l];if(o!==s){const a=s.parentNode===t;!r&&!l?a?t.replaceChild(o,s):t.insertBefore(o,e):a&&s.remove()}else r=!0}}else t.insertBefore(o,e);return[o]}const Z="",$=V('<p class="text-4xl text-green-700 text-center py-20">Hello tailwind!'),J=()=>$(),X=document.getElementById("root");Q(()=>G(J,{}),X)});
