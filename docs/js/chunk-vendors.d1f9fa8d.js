(self["webpackChunkjikken_todo_app"]=self["webpackChunkjikken_todo_app"]||[]).push([[504],{6743:function(e,t,n){"use strict";n.d(t,{Am:function(){return B},FA:function(){return D},Fy:function(){return w},I9:function(){return W},Im:function(){return V},Ku:function(){return H},T9:function(){return g},Tj:function(){return v},Uj:function(){return l},XA:function(){return y},ZQ:function(){return _},bD:function(){return L},c1:function(){return C},cY:function(){return b},eX:function(){return R},g:function(){return O},hp:function(){return j},jZ:function(){return S},lT:function(){return T},lV:function(){return I},nr:function(){return x},sr:function(){return k},tD:function(){return $},u:function(){return u},yU:function(){return m},zW:function(){return A}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],s=e[n++],a=e[n++],l=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,l=a?e[o+2]:0,u=t>>2,c=(3&t)<<4|s>>4;let d=(15&s)<<2|l>>6,h=63&l;a||(h=64,i||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,a=i?n[e.charAt(o)]:0;++o;const l=o<e.length,u=l?n[e.charAt(o)]:64;++o;const c=o<e.length,d=c?n[e.charAt(o)]:64;if(++o,null==t||null==a||null==u||null==d)throw new s;const h=t<<2|a>>4;if(r.push(h),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==d){const e=u<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return i.encodeByteArray(t,!0)},l=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>c().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyBHuYgEu5di4FUJmPsrA0EB_7j0VN-xUCk",VUE_APP_FIREBASE_AUTH_DOMAIN:"jikkentodoapp.firebaseapp.com",VUE_APP_FIREBASE_PROJECT_ID:"jikkentodoapp",VUE_APP_FIREBASE_STORAGE_BUCKET:"jikkentodoapp.firebasestorage.app",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"44572662255",VUE_APP_FIREBASE_APP_ID:"1:44572662255:web:d69ac54c0b27ed441d3e1a",VUE_APP_GEMINI_API_KEY:"AIzaSyDabHWSMe6kUQ0YOd5QrK1c8gd3Lur-nWw",BASE_URL:"/jikkenTodo/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return d()||h()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=v(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[l(JSON.stringify(n)),l(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function S(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function E(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function C(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function k(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function I(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function T(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=F,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?P(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new O(r,s,n);return a}}function P(e,t){return e.replace(N,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(M(n)&&M(i)){if(!L(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function M(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function W(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=K(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}},6445:function(e,t){"use strict";t.SchemaType=void 0,function(e){e["STRING"]="string",e["NUMBER"]="number",e["INTEGER"]="integer",e["BOOLEAN"]="boolean",e["ARRAY"]="array",e["OBJECT"]="object"}(t.SchemaType||(t.SchemaType={})),
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t.ExecutableCodeLanguage=void 0,function(e){e["LANGUAGE_UNSPECIFIED"]="language_unspecified",e["PYTHON"]="python"}(t.ExecutableCodeLanguage||(t.ExecutableCodeLanguage={})),t.Outcome=void 0,function(e){e["OUTCOME_UNSPECIFIED"]="outcome_unspecified",e["OUTCOME_OK"]="outcome_ok",e["OUTCOME_FAILED"]="outcome_failed",e["OUTCOME_DEADLINE_EXCEEDED"]="outcome_deadline_exceeded"}(t.Outcome||(t.Outcome={}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=["user","model","function","system"];t.HarmCategory=void 0,function(e){e["HARM_CATEGORY_UNSPECIFIED"]="HARM_CATEGORY_UNSPECIFIED",e["HARM_CATEGORY_HATE_SPEECH"]="HARM_CATEGORY_HATE_SPEECH",e["HARM_CATEGORY_SEXUALLY_EXPLICIT"]="HARM_CATEGORY_SEXUALLY_EXPLICIT",e["HARM_CATEGORY_HARASSMENT"]="HARM_CATEGORY_HARASSMENT",e["HARM_CATEGORY_DANGEROUS_CONTENT"]="HARM_CATEGORY_DANGEROUS_CONTENT"}(t.HarmCategory||(t.HarmCategory={})),t.HarmBlockThreshold=void 0,function(e){e["HARM_BLOCK_THRESHOLD_UNSPECIFIED"]="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e["BLOCK_LOW_AND_ABOVE"]="BLOCK_LOW_AND_ABOVE",e["BLOCK_MEDIUM_AND_ABOVE"]="BLOCK_MEDIUM_AND_ABOVE",e["BLOCK_ONLY_HIGH"]="BLOCK_ONLY_HIGH",e["BLOCK_NONE"]="BLOCK_NONE"}(t.HarmBlockThreshold||(t.HarmBlockThreshold={})),t.HarmProbability=void 0,function(e){e["HARM_PROBABILITY_UNSPECIFIED"]="HARM_PROBABILITY_UNSPECIFIED",e["NEGLIGIBLE"]="NEGLIGIBLE",e["LOW"]="LOW",e["MEDIUM"]="MEDIUM",e["HIGH"]="HIGH"}(t.HarmProbability||(t.HarmProbability={})),t.BlockReason=void 0,function(e){e["BLOCKED_REASON_UNSPECIFIED"]="BLOCKED_REASON_UNSPECIFIED",e["SAFETY"]="SAFETY",e["OTHER"]="OTHER"}(t.BlockReason||(t.BlockReason={})),t.FinishReason=void 0,function(e){e["FINISH_REASON_UNSPECIFIED"]="FINISH_REASON_UNSPECIFIED",e["STOP"]="STOP",e["MAX_TOKENS"]="MAX_TOKENS",e["SAFETY"]="SAFETY",e["RECITATION"]="RECITATION",e["LANGUAGE"]="LANGUAGE",e["OTHER"]="OTHER"}(t.FinishReason||(t.FinishReason={})),t.TaskType=void 0,function(e){e["TASK_TYPE_UNSPECIFIED"]="TASK_TYPE_UNSPECIFIED",e["RETRIEVAL_QUERY"]="RETRIEVAL_QUERY",e["RETRIEVAL_DOCUMENT"]="RETRIEVAL_DOCUMENT",e["SEMANTIC_SIMILARITY"]="SEMANTIC_SIMILARITY",e["CLASSIFICATION"]="CLASSIFICATION",e["CLUSTERING"]="CLUSTERING"}(t.TaskType||(t.TaskType={})),t.FunctionCallingMode=void 0,function(e){e["MODE_UNSPECIFIED"]="MODE_UNSPECIFIED",e["AUTO"]="AUTO",e["ANY"]="ANY",e["NONE"]="NONE"}(t.FunctionCallingMode||(t.FunctionCallingMode={})),t.DynamicRetrievalMode=void 0,function(e){e["MODE_UNSPECIFIED"]="MODE_UNSPECIFIED",e["MODE_DYNAMIC"]="MODE_DYNAMIC"}(t.DynamicRetrievalMode||(t.DynamicRetrievalMode={}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class r extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class o extends r{constructor(e,t){super(e),this.response=t}}class i extends r{constructor(e,t,n,r){super(e),this.status=t,this.statusText=n,this.errorDetails=r}}class s extends r{}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a="https://generativelanguage.googleapis.com",l="v1beta",u="0.21.0",c="genai-js";var d;(function(e){e["GENERATE_CONTENT"]="generateContent",e["STREAM_GENERATE_CONTENT"]="streamGenerateContent",e["COUNT_TOKENS"]="countTokens",e["EMBED_CONTENT"]="embedContent",e["BATCH_EMBED_CONTENTS"]="batchEmbedContents"})(d||(d={}));class h{constructor(e,t,n,r,o){this.model=e,this.task=t,this.apiKey=n,this.stream=r,this.requestOptions=o}toString(){var e,t;const n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||l,r=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||a;let o=`${r}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}function f(e){const t=[];return(null===e||void 0===e?void 0:e.apiClient)&&t.push(e.apiClient),t.push(`${c}/${u}`),t.join(" ")}async function p(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",f(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let r=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(o){throw new s(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${o.message}`)}for(const[e,t]of r.entries()){if("x-goog-api-key"===e)throw new s(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new s(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function v(e,t,n,r,o,i){const s=new h(e,t,n,r,i);return{url:s.toString(),fetchOptions:Object.assign(Object.assign({},w(i)),{method:"POST",headers:await p(s),body:o})}}async function m(e,t,n,r,o,i={},s=fetch){const{url:a,fetchOptions:l}=await v(e,t,n,r,o,i);return g(a,l,s)}async function g(e,t,n=fetch){let r;try{r=await n(e,t)}catch(o){y(o,e)}return r.ok||await b(r,e),r}function y(e,t){let n=e;throw e instanceof i||e instanceof s||(n=new r(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function b(e,t){let n,r="";try{const t=await e.json();r=t.error.message,t.error.details&&(r+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(o){}throw new i(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${r}`,e.status,e.statusText,n)}function w(e){const t={};if(void 0!==(null===e||void 0===e?void 0:e.signal)||(null===e||void 0===e?void 0:e.timeout)>=0){const n=new AbortController;(null===e||void 0===e?void 0:e.timeout)>=0&&setTimeout((()=>n.abort()),e.timeout),(null===e||void 0===e?void 0:e.signal)&&e.signal.addEventListener("abort",(()=>{n.abort()})),t.signal=n.signal}return t}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),k(e.candidates[0]))throw new o(`${I(e)}`,e);return S(e)}if(e.promptFeedback)throw new o(`Text not available. ${I(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),k(e.candidates[0]))throw new o(`${I(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),E(e)[0]}if(e.promptFeedback)throw new o(`Function call not available. ${I(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),k(e.candidates[0]))throw new o(`${I(e)}`,e);return E(e)}if(e.promptFeedback)throw new o(`Function call not available. ${I(e)}`,e)},e}function S(e){var t,n,r,o;const i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(const s of null===(o=null===(r=e.candidates)||void 0===r?void 0:r[0].content)||void 0===o?void 0:o.parts)s.text&&i.push(s.text),s.executableCode&&i.push("\n```"+s.executableCode.language+"\n"+s.executableCode.code+"\n```\n"),s.codeExecutionResult&&i.push("\n```\n"+s.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function E(e){var t,n,r,o;const i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(const s of null===(o=null===(r=e.candidates)||void 0===r?void 0:r[0].content)||void 0===o?void 0:o.parts)s.functionCall&&i.push(s.functionCall);return i.length>0?i:void 0}const C=[t.FinishReason.RECITATION,t.FinishReason.SAFETY,t.FinishReason.LANGUAGE];function k(e){return!!e.finishReason&&C.includes(e.finishReason)}function I(e){var t,n,r;let o="";if(e.candidates&&0!==e.candidates.length||!e.promptFeedback){if(null===(r=e.candidates)||void 0===r?void 0:r[0]){const t=e.candidates[0];k(t)&&(o+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(o+=`: ${t.finishMessage}`))}}else o+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(o+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);return o}function T(e){return this instanceof T?(this.v=e,this):new T(e)}function x(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{l(o[e](t))}catch(n){d(i[0][3],n)}}function l(e){e.value instanceof T?Promise.resolve(e.value.v).then(u,c):d(i[0][2],e)}function u(e){a("next",e)}function c(e){a("throw",e)}function d(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}"function"===typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function R(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=D(t),[r,o]=n.tee();return{stream:O(r),response:F(o)}}async function F(e){const t=[],n=e.getReader();while(1){const{done:e,value:r}=await n.read();if(e)return _(P(t));t.push(r)}}function O(e){return x(this,arguments,(function*(){const t=e.getReader();while(1){const{value:e,done:n}=yield T(t.read());if(n)break;yield yield T(_(e))}}))}function D(e){const t=e.getReader(),n=new ReadableStream({start(e){let n="";return o();function o(){return t.read().then((({value:t,done:i})=>{if(i)return n.trim()?void e.error(new r("Failed to parse stream")):void e.close();n+=t;let s,a=n.match(A);while(a){try{s=JSON.parse(a[1])}catch(l){return void e.error(new r(`Error parsing JSON response: "${a[1]}"`))}e.enqueue(s),n=n.substring(a[0].length),a=n.match(A)}return o()}))}}});return n}function P(e){const t=e[e.length-1],n={promptFeedback:null===t||void 0===t?void 0:t.promptFeedback};for(const r of e){if(r.candidates)for(const e of r.candidates){const t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});const r={};for(const o of e.content.parts)o.text&&(r.text=o.text),o.functionCall&&(r.functionCall=o.functionCall),o.executableCode&&(r.executableCode=o.executableCode),o.codeExecutionResult&&(r.codeExecutionResult=o.codeExecutionResult),0===Object.keys(r).length&&(r.text=""),n.candidates[t].content.parts.push(r)}}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N(e,t,n,r){const o=await m(t,d.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),r);return R(o)}async function V(e,t,n,r){const o=await m(t,d.GENERATE_CONTENT,e,!1,JSON.stringify(n),r),i=await o.json(),s=_(i);return{response:s}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){if(null!=e)return"string"===typeof e?{role:"system",parts:[{text:e}]}:e.text?{role:"system",parts:[e]}:e.parts?e.role?e:{role:"system",parts:e.parts}:void 0}function M(e){let t=[];if("string"===typeof e)t=[{text:e}];else for(const n of e)"string"===typeof n?t.push({text:n}):t.push(n);return B(t)}function B(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,i=!1;for(const r of e)"functionResponse"in r?(n.parts.push(r),i=!0):(t.parts.push(r),o=!0);if(o&&i)throw new r("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!i)throw new r("No content is provided for sending chat message.");return o?t:n}function W(e,t){var n;let r={model:null===t||void 0===t?void 0:t.model,generationConfig:null===t||void 0===t?void 0:t.generationConfig,safetySettings:null===t||void 0===t?void 0:t.safetySettings,tools:null===t||void 0===t?void 0:t.tools,toolConfig:null===t||void 0===t?void 0:t.toolConfig,systemInstruction:null===t||void 0===t?void 0:t.systemInstruction,cachedContent:null===(n=null===t||void 0===t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]};const o=null!=e.generateContentRequest;if(e.contents){if(o)throw new s("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=e.contents}else if(o)r=Object.assign(Object.assign({},r),e.generateContentRequest);else{const t=M(e);r.contents=[t]}return{generateContentRequest:r}}function j(e){let t;if(e.contents)t=e;else{const n=M(e);t={contents:[n]}}return e.systemInstruction&&(t.systemInstruction=L(e.systemInstruction)),t}function $(e){if("string"===typeof e||Array.isArray(e)){const t=M(e);return{content:t}}return e}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],K={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function z(e){let t=!1;for(const o of e){const{role:e,parts:i}=o;if(!t&&"user"!==e)throw new r(`First content should be with role 'user', got ${e}`);if(!n.includes(e))throw new r(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(n)}`);if(!Array.isArray(i))throw new r("Content should have 'parts' property with an array of Parts");if(0===i.length)throw new r("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const t of i)for(const e of U)e in t&&(s[e]+=1);const a=K[e];for(const t of U)if(!a.includes(t)&&s[t]>0)throw new r(`Content with role '${e}' can't contain '${t}' part`);t=!0}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="SILENT_ERROR";class q{constructor(e,t,n,r={}){this.model=t,this.params=n,this._requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null===n||void 0===n?void 0:n.history)&&(z(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,r,o,i,s,a;await this._sendPromise;const l=M(e),u={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(r=this.params)||void 0===r?void 0:r.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(s=this.params)||void 0===s?void 0:s.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,l]},c=Object.assign(Object.assign({},this._requestOptions),t);let d;return this._sendPromise=this._sendPromise.then((()=>V(this._apiKey,this.model,u,c))).then((e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(l);const n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{const t=I(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}d=e})),await this._sendPromise,d}async sendMessageStream(e,t={}){var n,r,o,i,s,a;await this._sendPromise;const l=M(e),u={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(r=this.params)||void 0===r?void 0:r.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(s=this.params)||void 0===s?void 0:s.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,l]},c=Object.assign(Object.assign({},this._requestOptions),t),d=N(this._apiKey,this.model,u,c);return this._sendPromise=this._sendPromise.then((()=>d)).catch((e=>{throw new Error(H)})).then((e=>e.response)).then((e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);const t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{const t=I(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}})).catch((e=>{e.message!==H&&console.error(e)})),d}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n,r){const o=await m(t,d.COUNT_TOKENS,e,!1,JSON.stringify(n),r);return o.json()}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t,n,r){const o=await m(t,d.EMBED_CONTENT,e,!1,JSON.stringify(n),r);return o.json()}async function X(e,t,n,r){const o=n.requests.map((e=>Object.assign(Object.assign({},e),{model:t}))),i=await m(t,d.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),r);return i.json()}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=L(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;const r=j(e),o=Object.assign(Object.assign({},this._requestOptions),t);return V(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},r),o)}async generateContentStream(e,t={}){var n;const r=j(e),o=Object.assign(Object.assign({},this._requestOptions),t);return N(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},r),o)}startChat(e){var t;return new q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){const n=W(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),r=Object.assign(Object.assign({},this._requestOptions),t);return G(this.apiKey,this.model,n,r)}async embedContent(e,t={}){const n=$(e),r=Object.assign(Object.assign({},this._requestOptions),t);return Y(this.apiKey,this.model,n,r)}async batchEmbedContents(e,t={}){const n=Object.assign(Object.assign({},this._requestOptions),t);return X(this.apiKey,this.model,e,n)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new r("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new J(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new s("Cached content must contain a `name` field.");if(!e.model)throw new s("Cached content must contain a `model` field.");const r=["model","systemInstruction"];for(const i of r)if((null===t||void 0===t?void 0:t[i])&&e[i]&&(null===t||void 0===t?void 0:t[i])!==e[i]){if("model"===i){const n=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,r=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(n===r)continue}throw new s(`Different value for "${i}" specified in modelParams (${t[i]}) and cachedContent (${e[i]})`)}const o=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new J(this.apiKey,o,n)}}t.ChatSession=q,t.GenerativeModel=J,t.GoogleGenerativeAI=Q,t.GoogleGenerativeAIError=r,t.GoogleGenerativeAIFetchError=i,t.GoogleGenerativeAIRequestInputError=s,t.GoogleGenerativeAIResponseError=o,t.POSSIBLE_ROLES=n},953:function(e,t,n){"use strict";n.d(t,{C4:function(){return I},EW:function(){return ze},Gc:function(){return we},IG:function(){return xe},IJ:function(){return De},KR:function(){return Oe},Kh:function(){return be},Pr:function(){return Me},QW:function(){return Be},R1:function(){return Ve},X2:function(){return d},bl:function(){return T},fE:function(){return ke},g8:function(){return Ee},hV:function(){return Je},hZ:function(){return M},i9:function(){return Fe},jr:function(){return u},ju:function(){return Ie},lJ:function(){return Ae},lW:function(){return $e},qA:function(){return j},tB:function(){return _e},u4:function(){return L},uY:function(){return a},ux:function(){return Te},wB:function(){return Xe},yC:function(){return s}});var r=n(33);
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let o,i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=o,!e&&o&&(this.index=(o.scopes||(o.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=o;try{return o=this,e()}finally{o=t}}else 0}on(){o=this}off(){o=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e){return new s(e)}function l(){return o}function u(e,t=!1){o&&o.cleanups.push(e)}const c=new WeakSet;class d{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,o&&o.active&&o.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||v(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,x(this),y(this);const e=i,t=C;i=this,C=!0;try{return this.fn()}finally{0,b(this),i=e,C=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)S(e);this.deps=this.depsTail=void 0,x(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){w(this)&&this.run()}get dirty(){return w(this)}}let h,f,p=0;function v(e,t=!1){if(e.flags|=8,t)return e.next=f,void(f=e);e.next=h,h=e}function m(){p++}function g(){if(--p>0)return;if(f){let e=f;f=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(h){let n=h;h=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function y(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function b(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),S(r),E(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function w(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(_(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function _(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===A)return;e.globalVersion=A;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!w(e))return void(e.flags&=-3);const n=i,o=C;i=e,C=!0;try{y(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e._value=n,t.version++)}catch(s){throw t.version++,s}finally{i=n,C=o,b(e),e.flags&=-3}}function S(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)S(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function E(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let C=!0;const k=[];function I(){k.push(C),C=!1}function T(){const e=k.pop();C=void 0===e||e}function x(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=i;i=void 0;try{t()}finally{i=e}}}let A=0;class R{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class F{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!i||!C||i===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==i)t=this.activeLink=new R(i,this),i.deps?(t.prevDep=i.depsTail,i.depsTail.nextDep=t,i.depsTail=t):i.deps=i.depsTail=t,O(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=i.depsTail,t.nextDep=void 0,i.depsTail.nextDep=t,i.depsTail=t,i.deps===t&&(i.deps=e)}return t}trigger(e){this.version++,A++,this.notify(e)}notify(e){m();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{g()}}}function O(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)O(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const D=new WeakMap,P=Symbol(""),N=Symbol(""),V=Symbol("");function L(e,t,n){if(C&&i){let t=D.get(e);t||D.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new F),r.map=t,r.key=n),r.track()}}function M(e,t,n,o,i,s){const a=D.get(e);if(!a)return void A++;const l=e=>{e&&e.trigger()};if(m(),"clear"===t)a.forEach(l);else{const i=(0,r.cy)(e),s=i&&(0,r.yI)(n);if(i&&"length"===n){const e=Number(o);a.forEach(((t,n)=>{("length"===n||n===V||!(0,r.Bm)(n)&&n>=e)&&l(t)}))}else switch((void 0!==n||a.has(void 0))&&l(a.get(n)),s&&l(a.get(V)),t){case"add":i?s&&l(a.get("length")):(l(a.get(P)),(0,r.CE)(e)&&l(a.get(N)));break;case"delete":i||(l(a.get(P)),(0,r.CE)(e)&&l(a.get(N)));break;case"set":(0,r.CE)(e)&&l(a.get(P));break}}g()}function B(e,t){const n=D.get(e);return n&&n.get(t)}function W(e){const t=Te(e);return t===e?t:(L(t,"iterate",V),ke(e)?t:t.map(Ae))}function j(e){return L(e=Te(e),"iterate",V),e}const $={__proto__:null,[Symbol.iterator](){return U(this,Symbol.iterator,Ae)},concat(...e){return W(this).concat(...e.map((e=>(0,r.cy)(e)?W(e):e)))},entries(){return U(this,"entries",(e=>(e[1]=Ae(e[1]),e)))},every(e,t){return z(this,"every",e,t,void 0,arguments)},filter(e,t){return z(this,"filter",e,t,(e=>e.map(Ae)),arguments)},find(e,t){return z(this,"find",e,t,Ae,arguments)},findIndex(e,t){return z(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return z(this,"findLast",e,t,Ae,arguments)},findLastIndex(e,t){return z(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return z(this,"forEach",e,t,void 0,arguments)},includes(...e){return q(this,"includes",e)},indexOf(...e){return q(this,"indexOf",e)},join(e){return W(this).join(e)},lastIndexOf(...e){return q(this,"lastIndexOf",e)},map(e,t){return z(this,"map",e,t,void 0,arguments)},pop(){return G(this,"pop")},push(...e){return G(this,"push",e)},reduce(e,...t){return H(this,"reduce",e,t)},reduceRight(e,...t){return H(this,"reduceRight",e,t)},shift(){return G(this,"shift")},some(e,t){return z(this,"some",e,t,void 0,arguments)},splice(...e){return G(this,"splice",e)},toReversed(){return W(this).toReversed()},toSorted(e){return W(this).toSorted(e)},toSpliced(...e){return W(this).toSpliced(...e)},unshift(...e){return G(this,"unshift",e)},values(){return U(this,"values",Ae)}};function U(e,t,n){const r=j(e),o=r[t]();return r===e||ke(e)||(o._next=o.next,o.next=()=>{const e=o._next();return e.value&&(e.value=n(e.value)),e}),o}const K=Array.prototype;function z(e,t,n,r,o,i){const s=j(e),a=s!==e&&!ke(e),l=s[t];if(l!==K[t]){const t=l.apply(e,i);return a?Ae(t):t}let u=n;s!==e&&(a?u=function(t,r){return n.call(this,Ae(t),r,e)}:n.length>2&&(u=function(t,r){return n.call(this,t,r,e)}));const c=l.call(s,u,r);return a&&o?o(c):c}function H(e,t,n,r){const o=j(e);let i=n;return o!==e&&(ke(e)?n.length>3&&(i=function(t,r,o){return n.call(this,t,r,o,e)}):i=function(t,r,o){return n.call(this,t,Ae(r),o,e)}),o[t](i,...r)}function q(e,t,n){const r=Te(e);L(r,"iterate",V);const o=r[t](...n);return-1!==o&&!1!==o||!Ie(n[0])?o:(n[0]=Te(n[0]),r[t](...n))}function G(e,t,n=[]){I(),m();const r=Te(e)[t].apply(e,n);return g(),T(),r}const Y=(0,r.pD)("__proto__,__v_isRef,__isVue"),X=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm));function J(e){(0,r.Bm)(e)||(e=String(e));const t=Te(this);return L(t,"has",e),t.hasOwnProperty(e)}class Q{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const o=this._isReadonly,i=this._isShallow;if("__v_isReactive"===t)return!o;if("__v_isReadonly"===t)return o;if("__v_isShallow"===t)return i;if("__v_raw"===t)return n===(o?i?me:ve:i?pe:fe).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=(0,r.cy)(e);if(!o){let e;if(s&&(e=$[t]))return e;if("hasOwnProperty"===t)return J}const a=Reflect.get(e,t,Fe(e)?e:n);return((0,r.Bm)(t)?X.has(t):Y(t))?a:(o||L(e,"get",t),i?a:Fe(a)?s&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?o?_e(a):be(a):a)}}class Z extends Q{constructor(e=!1){super(!1,e)}set(e,t,n,o){let i=e[t];if(!this._isShallow){const t=Ce(i);if(ke(n)||Ce(n)||(i=Te(i),n=Te(n)),!(0,r.cy)(e)&&Fe(i)&&!Fe(n))return!t&&(i.value=n,!0)}const s=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,Fe(e)?e:o);return e===Te(o)&&(s?(0,r.$H)(n,i)&&M(e,"set",t,n,i):M(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&M(e,"delete",t,void 0,o),i}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&X.has(t)||L(e,"has",t),n}ownKeys(e){return L(e,"iterate",(0,r.cy)(e)?"length":P),Reflect.ownKeys(e)}}class ee extends Q{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const te=new Z,ne=new ee,re=new Z(!0),oe=e=>e,ie=e=>Reflect.getPrototypeOf(e);function se(e,t,n){return function(...o){const i=this["__v_raw"],s=Te(i),a=(0,r.CE)(s),l="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,c=i[e](...o),d=n?oe:t?Re:Ae;return!t&&L(s,"iterate",u?N:P),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function le(e,t){const n={get(n){const o=this["__v_raw"],i=Te(o),s=Te(n);e||((0,r.$H)(n,s)&&L(i,"get",n),L(i,"get",s));const{has:a}=ie(i),l=t?oe:e?Re:Ae;return a.call(i,n)?l(o.get(n)):a.call(i,s)?l(o.get(s)):void(o!==i&&o.get(n))},get size(){const t=this["__v_raw"];return!e&&L(Te(t),"iterate",P),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],o=Te(n),i=Te(t);return e||((0,r.$H)(t,i)&&L(o,"has",t),L(o,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){const o=this,i=o["__v_raw"],s=Te(i),a=t?oe:e?Re:Ae;return!e&&L(s,"iterate",P),i.forEach(((e,t)=>n.call(r,a(e),a(t),o)))}};(0,r.X$)(n,e?{add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear")}:{add(e){t||ke(e)||Ce(e)||(e=Te(e));const n=Te(this),r=ie(n),o=r.has.call(n,e);return o||(n.add(e),M(n,"add",e,e)),this},set(e,n){t||ke(n)||Ce(n)||(n=Te(n));const o=Te(this),{has:i,get:s}=ie(o);let a=i.call(o,e);a||(e=Te(e),a=i.call(o,e));const l=s.call(o,e);return o.set(e,n),a?(0,r.$H)(n,l)&&M(o,"set",e,n,l):M(o,"add",e,n),this},delete(e){const t=Te(this),{has:n,get:r}=ie(t);let o=n.call(t,e);o||(e=Te(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&M(t,"delete",e,void 0,i),s},clear(){const e=Te(this),t=0!==e.size,n=void 0,r=e.clear();return t&&M(e,"clear",void 0,void 0,n),r}});const o=["keys","values","entries",Symbol.iterator];return o.forEach((r=>{n[r]=se(r,e,t)})),n}function ue(e,t){const n=le(e,t);return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get((0,r.$3)(n,o)&&o in t?n:t,o,i)}const ce={get:ue(!1,!1)},de={get:ue(!1,!0)},he={get:ue(!0,!1)};const fe=new WeakMap,pe=new WeakMap,ve=new WeakMap,me=new WeakMap;function ge(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ge((0,r.Zf)(e))}function be(e){return Ce(e)?e:Se(e,!1,te,ce,fe)}function we(e){return Se(e,!1,re,de,pe)}function _e(e){return Se(e,!0,ne,he,ve)}function Se(e,t,n,o,i){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=ye(e);if(0===a)return e;const l=new Proxy(e,2===a?o:n);return i.set(e,l),l}function Ee(e){return Ce(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ce(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return!(!e||!e["__v_isShallow"])}function Ie(e){return!!e&&!!e["__v_raw"]}function Te(e){const t=e&&e["__v_raw"];return t?Te(t):e}function xe(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ae=e=>(0,r.Gv)(e)?be(e):e,Re=e=>(0,r.Gv)(e)?_e(e):e;function Fe(e){return!!e&&!0===e["__v_isRef"]}function Oe(e){return Pe(e,!1)}function De(e){return Pe(e,!0)}function Pe(e,t){return Fe(e)?e:new Ne(e,t)}class Ne{constructor(e,t){this.dep=new F,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Te(e),this._value=t?e:Ae(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||ke(e)||Ce(e);e=n?e:Te(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Ae(e),this.dep.trigger())}}function Ve(e){return Fe(e)?e.value:e}const Le={get:(e,t,n)=>"__v_raw"===t?e:Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Fe(o)&&!Fe(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Me(e){return Ee(e)?e:new Proxy(e,Le)}function Be(e){const t=(0,r.cy)(e)?new Array(e.length):{};for(const n in e)t[n]=Ue(e,n);return t}class We{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this["__v_isRef"]=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return B(Te(this._object),this._key)}}class je{constructor(e){this._getter=e,this["__v_isRef"]=!0,this["__v_isReadonly"]=!0,this._value=void 0}get value(){return this._value=this._getter()}}function $e(e,t,n){return Fe(e)?e:(0,r.Tn)(e)?new je(e):(0,r.Gv)(e)&&arguments.length>1?Ue(e,t,n):Oe(e)}function Ue(e,t,n){const r=e[t];return Fe(r)?r:new We(e,t,n)}class Ke{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new F(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=A-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||i===this))return v(this,!0),!0}get value(){const e=this.dep.track();return _(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ze(e,t,n=!1){let o,i;(0,r.Tn)(e)?o=e:(o=e.get,i=e.set);const s=new Ke(o,i,n);return s}const He={},qe=new WeakMap;let Ge;function Ye(e,t=!1,n=Ge){if(n){let t=qe.get(n);t||qe.set(n,t=[]),t.push(e)}else 0}function Xe(e,t,n=r.MZ){const{immediate:o,deep:i,once:s,scheduler:a,augmentJob:u,call:c}=n,h=e=>i?e:ke(e)||!1===i||0===i?Je(e,1):Je(e);let f,p,v,m,g=!1,y=!1;if(Fe(e)?(p=()=>e.value,g=ke(e)):Ee(e)?(p=()=>h(e),g=!0):(0,r.cy)(e)?(y=!0,g=e.some((e=>Ee(e)||ke(e))),p=()=>e.map((e=>Fe(e)?e.value:Ee(e)?h(e):(0,r.Tn)(e)?c?c(e,2):e():void 0))):p=(0,r.Tn)(e)?t?c?()=>c(e,2):e:()=>{if(v){I();try{v()}finally{T()}}const t=Ge;Ge=f;try{return c?c(e,3,[m]):e(m)}finally{Ge=t}}:r.tE,t&&i){const e=p,t=!0===i?1/0:i;p=()=>Je(e(),t)}const b=l(),w=()=>{f.stop(),b&&(0,r.TF)(b.effects,f)};if(s&&t){const e=t;t=(...t)=>{e(...t),w()}}let _=y?new Array(e.length).fill(He):He;const S=e=>{if(1&f.flags&&(f.dirty||e))if(t){const e=f.run();if(i||g||(y?e.some(((e,t)=>(0,r.$H)(e,_[t]))):(0,r.$H)(e,_))){v&&v();const n=Ge;Ge=f;try{const n=[e,_===He?void 0:y&&_[0]===He?[]:_,m];c?c(t,3,n):t(...n),_=e}finally{Ge=n}}}else f.run()};return u&&u(S),f=new d(p),f.scheduler=a?()=>a(S,!1):S,m=e=>Ye(e,!1,f),v=f.onStop=()=>{const e=qe.get(f);if(e){if(c)c(e,4);else for(const t of e)t();qe.delete(f)}},t?o?S(!0):_=f.run():a?a(S.bind(null,!0),!0):f.run(),w.pause=f.pause.bind(f),w.resume=f.resume.bind(f),w.stop=w,w}function Je(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Fe(e))Je(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)Je(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{Je(e,t,n)}));else if((0,r.Qd)(e)){for(const r in e)Je(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Je(e[r],t,n)}return e}},641:function(e,t,n){"use strict";n.d(t,{$u:function(){return Se},$y:function(){return De},CE:function(){return An},Df:function(){return oe},E3:function(){return Bn},EW:function(){return vr},EY:function(){return bn},FK:function(){return yn},Gt:function(){return lt},Gy:function(){return H},Ic:function(){return _e},Im:function(){return j},K9:function(){return Rt},KC:function(){return be},Lk:function(){return Nn},MZ:function(){return re},Mw:function(){return wn},OW:function(){return ee},Q3:function(){return jn},QP:function(){return G},R8:function(){return yr},WQ:function(){return ut},Wv:function(){return Rn},Y4:function(){return he},bF:function(){return Vn},bo:function(){return A},dY:function(){return m},eW:function(){return Wn},g2:function(){return Fe},gN:function(){return Pe},h:function(){return mr},hi:function(){return Ce},k6:function(){return x},n:function(){return de},nI:function(){return Jn},nT:function(){return jt},pI:function(){return Le},pM:function(){return ie},pR:function(){return Q},qL:function(){return s},sV:function(){return we},tY:function(){return an},uX:function(){return Cn},v6:function(){return zn},vv:function(){return Fn},wB:function(){return $t},xo:function(){return Ee}});var r=n(953),o=n(33);function i(e,t,n,r){try{return r?e(...r):e()}catch(o){a(o,t,n)}}function s(e,t,n,r){if((0,o.Tn)(e)){const s=i(e,t,n,r);return s&&(0,o.yL)(s)&&s.catch((e=>{a(e,t,n)})),s}if((0,o.cy)(e)){const o=[];for(let i=0;i<e.length;i++)o.push(s(e[i],t,n,r));return o}}function a(e,t,n,s=!0){const a=t?t.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:c}=t&&t.appContext.config||o.MZ;if(t){let o=t.parent;const s=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(o){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,a))return;o=o.parent}if(u)return(0,r.C4)(),i(u,null,10,[e,s,a]),void(0,r.bl)()}l(e,n,a,s,c)}function l(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const u=[];let c=-1;const d=[];let h=null,f=0;const p=Promise.resolve();let v=null;function m(e){const t=v||p;return e?t.then(this?e.bind(this):e):t}function g(e){let t=c+1,n=u.length;while(t<n){const r=t+n>>>1,o=u[r],i=E(o);i<e||i===e&&2&o.flags?t=r+1:n=r}return t}function y(e){if(!(1&e.flags)){const t=E(e),n=u[u.length-1];!n||!(2&e.flags)&&t>=E(n)?u.push(e):u.splice(g(t),0,e),e.flags|=1,b()}}function b(){v||(v=p.then(C))}function w(e){(0,o.cy)(e)?d.push(...e):h&&-1===e.id?h.splice(f+1,0,e):1&e.flags||(d.push(e),e.flags|=1),b()}function _(e,t,n=c+1){for(0;n<u.length;n++){const t=u[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,u.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function S(e){if(d.length){const e=[...new Set(d)].sort(((e,t)=>E(e)-E(t)));if(d.length=0,h)return void h.push(...e);for(h=e,f=0;f<h.length;f++){const e=h[f];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}h=null,f=0}}const E=e=>null==e.id?2&e.flags?-1:1/0:e.id;function C(e){o.tE;try{for(c=0;c<u.length;c++){const e=u[c];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),i(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;c<u.length;c++){const e=u[c];e&&(e.flags&=-2)}c=-1,u.length=0,S(e),v=null,(u.length||d.length)&&C(e)}}let k=null,I=null;function T(e){const t=k;return k=e,I=e&&e.type.__scopeId||null,t}function x(e,t=k,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Tn(-1);const o=T(t);let i;try{i=e(...n)}finally{T(o),r._d&&Tn(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function A(e,t){if(null===k)return e;const n=hr(k),i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,a,l,u=o.MZ]=t[s];e&&((0,o.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(a),i.push({dir:e,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function R(e,t,n,o){const i=e.dirs,a=t&&t.dirs;for(let l=0;l<i.length;l++){const u=i[l];a&&(u.oldValue=a[l].value);let c=u.dir[o];c&&((0,r.C4)(),s(c,n,8,[e.el,u,e,t]),(0,r.bl)())}}const F=Symbol("_vte"),O=e=>e.__isTeleport,D=e=>e&&(e.disabled||""===e.disabled),P=e=>e&&(e.defer||""===e.defer),N=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,V=e=>"function"===typeof MathMLElement&&e instanceof MathMLElement,L=(e,t)=>{const n=e&&e.to;if((0,o.Kg)(n)){if(t){const e=t(n);return e}return null}return n},M={name:"Teleport",__isTeleport:!0,process(e,t,n,r,o,i,s,a,l,u){const{mc:c,pc:d,pbc:h,o:{insert:f,querySelector:p,createText:v,createComment:m}}=u,g=D(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=v(""),u=t.anchor=v("");f(e,n,r),f(u,n,r);const d=(e,t)=>{16&y&&(o&&o.isCE&&(o.ce._teleportTarget=e),c(b,e,t,o,i,s,a,l))},h=()=>{const e=t.target=L(t.props,p),n=U(e,t,v,f);e&&("svg"!==s&&N(e)?s="svg":"mathml"!==s&&V(e)&&(s="mathml"),g||(d(e,n),$(t,!1)))};g&&(d(n,u),$(t,!0)),P(t.props)?At(h,i):h()}else{t.el=e.el,t.targetStart=e.targetStart;const r=t.anchor=e.anchor,c=t.target=e.target,f=t.targetAnchor=e.targetAnchor,v=D(e.props),m=v?n:c,y=v?r:f;if("svg"===s||N(c)?s="svg":("mathml"===s||V(c))&&(s="mathml"),w?(h(e.dynamicChildren,w,m,o,i,s,a),Nt(e,t,!0)):l||d(e,t,m,y,o,i,s,a,!1),g)v?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):B(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=L(t.props,p);e&&B(t,e,null,u,0)}else v&&B(t,c,f,u,1);$(t,g)}},remove(e,t,n,{um:r,o:{remove:o}},i){const{shapeFlag:s,children:a,anchor:l,targetStart:u,targetAnchor:c,target:d,props:h}=e;if(d&&(o(u),o(c)),i&&o(l),16&s){const e=i||!D(h);for(let o=0;o<a.length;o++){const i=a[o];r(i,t,n,e,!!i.dynamicChildren)}}},move:B,hydrate:W};function B(e,t,n,{o:{insert:r},m:o},i=2){0===i&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:l,children:u,props:c}=e,d=2===i;if(d&&r(s,t,n),(!d||D(c))&&16&l)for(let h=0;h<u.length;h++)o(u[h],t,n,2);d&&r(a,t,n)}function W(e,t,n,r,o,i,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:u,createText:c}},d){const h=t.target=L(t.props,l);if(h){const l=D(t.props),f=h._lpa||h.firstChild;if(16&t.shapeFlag)if(l)t.anchor=d(s(e),t,a(e),n,r,o,i),t.targetStart=f,t.targetAnchor=f&&s(f);else{t.anchor=s(e);let a=f;while(a){if(a&&8===a.nodeType)if("teleport start anchor"===a.data)t.targetStart=a;else if("teleport anchor"===a.data){t.targetAnchor=a,h._lpa=t.targetAnchor&&s(t.targetAnchor);break}a=s(a)}t.targetAnchor||U(h,t,c,u),d(f&&s(f),t,h,n,r,o,i)}$(t,l)}return t.anchor&&s(t.anchor)}const j=M;function $(e,t){const n=e.ctx;if(n&&n.ut){let r,o;t?(r=e.el,o=e.anchor):(r=e.targetStart,o=e.targetAnchor);while(r&&r!==o)1===r.nodeType&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function U(e,t,n,r){const o=t.targetStart=n(""),i=t.targetAnchor=n("");return o[F]=i,e&&(r(o,e),r(i,e)),i}const K=Symbol("_leaveCb"),z=Symbol("_enterCb");function H(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return we((()=>{e.isMounted=!0})),Ee((()=>{e.isUnmounting=!0})),e}const q=[Function,Array],G={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:q,onEnter:q,onAfterEnter:q,onEnterCancelled:q,onBeforeLeave:q,onLeave:q,onAfterLeave:q,onLeaveCancelled:q,onBeforeAppear:q,onAppear:q,onAfterAppear:q,onAppearCancelled:q},Y=e=>{const t=e.subTree;return t.component?Y(t.component):t},X={name:"BaseTransition",props:G,setup(e,{slots:t}){const n=Jn(),o=H();return()=>{const i=t.default&&oe(t.default(),!0);if(!i||!i.length)return;const s=J(i),a=(0,r.ux)(e),{mode:l}=a;if(o.isLeaving)return te(s);const u=ne(s);if(!u)return te(s);let c=ee(u,a,o,n,(e=>c=e));u.type!==wn&&re(u,c);const d=n.subTree,h=d&&ne(d);if(h&&h.type!==wn&&!On(u,h)&&Y(n).type!==wn){const e=ee(h,a,o,n);if(re(h,e),"out-in"===l&&u.type!==wn)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,8&n.job.flags||n.update(),delete e.afterLeave},te(s);"in-out"===l&&u.type!==wn&&(e.delayLeave=(e,t,n)=>{const r=Z(o,h);r[String(h.key)]=h,e[K]=()=>{t(),e[K]=void 0,delete c.delayedLeave},c.delayedLeave=n})}return s}}};function J(e){let t=e[0];if(e.length>1){let n=!1;for(const r of e)if(r.type!==wn){0,t=r,n=!0;break}}return t}const Q=X;function Z(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ee(e,t,n,r,i){const{appear:a,mode:l,persisted:u=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:v,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:b,onAfterAppear:w,onAppearCancelled:_}=t,S=String(e.key),E=Z(n,e),C=(e,t)=>{e&&s(e,r,9,t)},k=(e,t)=>{const n=t[1];C(e,t),(0,o.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:l,persisted:u,beforeEnter(t){let r=c;if(!n.isMounted){if(!a)return;r=y||c}t[K]&&t[K](!0);const o=E[S];o&&On(e,o)&&o.el[K]&&o.el[K](),C(r,[t])},enter(e){let t=d,r=h,o=f;if(!n.isMounted){if(!a)return;t=b||d,r=w||h,o=_||f}let i=!1;const s=e[z]=t=>{i||(i=!0,C(t?o:r,[e]),I.delayedLeave&&I.delayedLeave(),e[z]=void 0)};t?k(t,[e,s]):s()},leave(t,r){const o=String(e.key);if(t[z]&&t[z](!0),n.isUnmounting)return r();C(p,[t]);let i=!1;const s=t[K]=n=>{i||(i=!0,r(),C(n?g:m,[t]),t[K]=void 0,E[o]===e&&delete E[o])};E[o]=e,v?k(v,[t,s]):s()},clone(e){const o=ee(e,t,n,r,i);return i&&i(o),o}};return I}function te(e){if(ue(e))return e=Bn(e),e.children=null,e}function ne(e){if(!ue(e))return O(e.type)&&e.children?J(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,o.Tn)(n.default))return n.default()}}function re(e,t){6&e.shapeFlag&&e.component?(e.transition=t,re(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function oe(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:i);s.type===yn?(128&s.patchFlag&&o++,r=r.concat(oe(s.children,t,a))):(t||s.type!==wn)&&r.push(null!=a?Bn(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function ie(e,t){return(0,o.Tn)(e)?(()=>(0,o.X$)({name:e.name},t,{setup:e}))():e}function se(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ae(e,t,n,s,a=!1){if((0,o.cy)(e))return void e.forEach(((e,r)=>ae(e,t&&((0,o.cy)(t)?t[r]:t),n,s,a)));if(le(s)&&!a)return;const l=4&s.shapeFlag?hr(s.component):s.el,u=a?null:l,{i:c,r:d}=e;const h=t&&t.r,f=c.refs===o.MZ?c.refs={}:c.refs,p=c.setupState,v=(0,r.ux)(p),m=p===o.MZ?()=>!1:e=>(0,o.$3)(v,e);if(null!=h&&h!==d&&((0,o.Kg)(h)?(f[h]=null,m(h)&&(p[h]=null)):(0,r.i9)(h)&&(h.value=null)),(0,o.Tn)(d))i(d,c,12,[u,f]);else{const t=(0,o.Kg)(d),i=(0,r.i9)(d);if(t||i){const r=()=>{if(e.f){const n=t?m(d)?p[d]:f[d]:d.value;a?(0,o.cy)(n)&&(0,o.TF)(n,l):(0,o.cy)(n)?n.includes(l)||n.push(l):t?(f[d]=[l],m(d)&&(p[d]=f[d])):(d.value=[l],e.k&&(f[e.k]=d.value))}else t?(f[d]=u,m(d)&&(p[d]=u)):i&&(d.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,At(r,n)):r()}else 0}}(0,o.We)().requestIdleCallback,(0,o.We)().cancelIdleCallback;const le=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const ue=e=>e.type.__isKeepAlive;RegExp,RegExp;function ce(e,t){return(0,o.cy)(e)?e.some((e=>ce(e,t))):(0,o.Kg)(e)?e.split(",").includes(t):!!(0,o.gd)(e)&&(e.lastIndex=0,e.test(t))}function de(e,t){fe(e,"a",t)}function he(e,t){fe(e,"da",t)}function fe(e,t,n=Xn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ge(t,r,n),n){let e=n.parent;while(e&&e.parent)ue(e.parent.vnode)&&pe(r,t,n,e),e=e.parent}}function pe(e,t,n,r){const i=ge(t,e,r,!0);Ce((()=>{(0,o.TF)(r[t],i)}),n)}function ve(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function me(e){return 128&e.shapeFlag?e.ssContent:e}function ge(e,t,n=Xn,o=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{(0,r.C4)();const i=er(n),a=s(t,n,e,o);return i(),(0,r.bl)(),a});return o?i.unshift(a):i.push(a),a}}const ye=e=>(t,n=Xn)=>{ir&&"sp"!==e||ge(e,((...e)=>t(...e)),n)},be=ye("bm"),we=ye("m"),_e=ye("bu"),Se=ye("u"),Ee=ye("bum"),Ce=ye("um"),ke=ye("sp"),Ie=ye("rtg"),Te=ye("rtc");function xe(e,t=Xn){ge("ec",e,t)}const Ae="components",Re="directives";function Fe(e,t){return Ne(Ae,e,!0,t)||e}const Oe=Symbol.for("v-ndc");function De(e){return(0,o.Kg)(e)?Ne(Ae,e,!1)||e:e||Oe}function Pe(e){return Ne(Re,e)}function Ne(e,t,n=!0,r=!1){const i=k||Xn;if(i){const n=i.type;if(e===Ae){const e=fr(n,!1);if(e&&(e===t||e===(0,o.PT)(t)||e===(0,o.ZH)((0,o.PT)(t))))return n}const s=Ve(i[e]||n[e],t)||Ve(i.appContext[e],t);return!s&&r?n:s}}function Ve(e,t){return e&&(e[t]||e[(0,o.PT)(t)]||e[(0,o.ZH)((0,o.PT)(t))])}function Le(e,t,n,i){let s;const a=n&&n[i],l=(0,o.cy)(e);if(l||(0,o.Kg)(e)){const n=l&&(0,r.g8)(e);let o=!1;n&&(o=!(0,r.fE)(e),e=(0,r.qA)(e)),s=new Array(e.length);for(let i=0,l=e.length;i<l;i++)s[i]=t(o?(0,r.lJ)(e[i]):e[i],i,void 0,a&&a[i])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,a&&a[n])}else if((0,o.Gv)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];s[r]=t(e[o],o,r,a&&a[r])}}else s=[];return n&&(n[i]=s),s}const Me=e=>e?nr(e)?hr(e):Me(e.parent):null,Be=(0,o.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Me(e.parent),$root:e=>Me(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ge(e),$forceUpdate:e=>e.f||(e.f=()=>{y(e.update)}),$nextTick:e=>e.n||(e.n=m.bind(e.proxy)),$watch:e=>Kt.bind(e)}),We=(e,t)=>e!==o.MZ&&!e.__isScriptSetup&&(0,o.$3)(e,t),je={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:i,data:s,props:a,accessCache:l,type:u,appContext:c}=e;let d;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(We(i,t))return l[t]=1,i[t];if(s!==o.MZ&&(0,o.$3)(s,t))return l[t]=2,s[t];if((d=e.propsOptions[0])&&(0,o.$3)(d,t))return l[t]=3,a[t];if(n!==o.MZ&&(0,o.$3)(n,t))return l[t]=4,n[t];Ue&&(l[t]=0)}}const h=Be[t];let f,p;return h?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),h(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==o.MZ&&(0,o.$3)(n,t)?(l[t]=4,n[t]):(p=c.config.globalProperties,(0,o.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return We(i,t)?(i[t]=n,!0):r!==o.MZ&&(0,o.$3)(r,t)?(r[t]=n,!0):!(0,o.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let l;return!!n[a]||e!==o.MZ&&(0,o.$3)(e,a)||We(t,a)||(l=s[0])&&(0,o.$3)(l,a)||(0,o.$3)(r,a)||(0,o.$3)(Be,a)||(0,o.$3)(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,o.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $e(e){return(0,o.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ue=!0;function Ke(e){const t=Ge(e),n=e.proxy,i=e.ctx;Ue=!1,t.beforeCreate&&He(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:l,watch:u,provide:c,inject:d,created:h,beforeMount:f,mounted:p,beforeUpdate:v,updated:m,activated:g,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:S,render:E,renderTracked:C,renderTriggered:k,errorCaptured:I,serverPrefetch:T,expose:x,inheritAttrs:A,components:R,directives:F,filters:O}=t,D=null;if(d&&ze(d,i,D),l)for(const r in l){const e=l[r];(0,o.Tn)(e)&&(i[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,o.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ue=!0,a)for(const r in a){const e=a[r],t=(0,o.Tn)(e)?e.bind(n,n):(0,o.Tn)(e.get)?e.get.bind(n,n):o.tE;0;const s=!(0,o.Tn)(e)&&(0,o.Tn)(e.set)?e.set.bind(n):o.tE,l=vr({get:t,set:s});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(u)for(const r in u)qe(u[r],i,n,r);if(c){const e=(0,o.Tn)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{lt(t,e[t])}))}function P(e,t){(0,o.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&He(h,e,"c"),P(be,f),P(we,p),P(_e,v),P(Se,m),P(de,g),P(he,y),P(xe,I),P(Te,C),P(Ie,k),P(Ee,w),P(Ce,S),P(ke,T),(0,o.cy)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===o.tE&&(e.render=E),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),F&&(e.directives=F),T&&se(e)}function ze(e,t,n=o.tE){(0,o.cy)(e)&&(e=Ze(e));for(const i in e){const n=e[i];let s;s=(0,o.Gv)(n)?"default"in n?ut(n.from||i,n.default,!0):ut(n.from||i):ut(n),(0,r.i9)(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function He(e,t,n){s((0,o.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function qe(e,t,n,r){let i=r.includes(".")?zt(n,r):()=>n[r];if((0,o.Kg)(e)){const n=t[e];(0,o.Tn)(n)&&$t(i,n)}else if((0,o.Tn)(e))$t(i,e.bind(n));else if((0,o.Gv)(e))if((0,o.cy)(e))e.forEach((e=>qe(e,t,n,r)));else{const r=(0,o.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,o.Tn)(r)&&$t(i,r,e)}else 0}function Ge(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,l=s.get(t);let u;return l?u=l:i.length||n||r?(u={},i.length&&i.forEach((e=>Ye(u,e,a,!0))),Ye(u,t,a)):u=t,(0,o.Gv)(t)&&s.set(t,u),u}function Ye(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Ye(e,i,n,!0),o&&o.forEach((t=>Ye(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Xe[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Xe={data:Je,props:nt,emits:nt,methods:tt,computed:tt,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:tt,directives:tt,watch:rt,provide:Je,inject:Qe};function Je(e,t){return t?e?function(){return(0,o.X$)((0,o.Tn)(e)?e.call(this,this):e,(0,o.Tn)(t)?t.call(this,this):t)}:t:e}function Qe(e,t){return tt(Ze(e),Ze(t))}function Ze(e){if((0,o.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function et(e,t){return e?[...new Set([].concat(e,t))]:t}function tt(e,t){return e?(0,o.X$)(Object.create(null),e,t):t}function nt(e,t){return e?(0,o.cy)(e)&&(0,o.cy)(t)?[...new Set([...e,...t])]:(0,o.X$)(Object.create(null),$e(e),$e(null!=t?t:{})):t}function rt(e,t){if(!e)return t;if(!t)return e;const n=(0,o.X$)(Object.create(null),e);for(const r in t)n[r]=et(e[r],t[r]);return n}function ot(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let it=0;function st(e,t){return function(n,r=null){(0,o.Tn)(n)||(n=(0,o.X$)({},n)),null==r||(0,o.Gv)(r)||(r=null);const i=ot(),a=new WeakSet,l=[];let u=!1;const c=i.app={_uid:it++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:gr,get config(){return i.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,o.Tn)(e.install)?(a.add(e),e.install(c,...t)):(0,o.Tn)(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(o,s,a){if(!u){0;const l=c._ceVNode||Vn(n,r);return l.appContext=i,!0===a?a="svg":!1===a&&(a=void 0),s&&t?t(l,o):e(l,o,a),u=!0,c._container=o,o.__vue_app__=c,hr(l.component)}},onUnmount(e){l.push(e)},unmount(){u&&(s(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){const t=at;at=c;try{return e()}finally{at=t}}};return c}}let at=null;function lt(e,t){if(Xn){let n=Xn.provides;const r=Xn.parent&&Xn.parent.provides;r===n&&(n=Xn.provides=Object.create(r)),n[e]=t}else 0}function ut(e,t,n=!1){const r=Xn||k;if(r||at){const i=at?at._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,o.Tn)(t)?t.call(r&&r.proxy):t}else 0}const ct={},dt=()=>Object.create(ct),ht=e=>Object.getPrototypeOf(e)===ct;function ft(e,t,n,o=!1){const i={},s=dt();e.propsDefaults=Object.create(null),vt(e,t,i,s);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=o?i:(0,r.Gc)(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function pt(e,t,n,i){const{props:s,attrs:a,vnode:{patchFlag:l}}=e,u=(0,r.ux)(s),[c]=e.propsOptions;let d=!1;if(!(i||l>0)||16&l){let r;vt(e,t,s,a)&&(d=!0);for(const i in u)t&&((0,o.$3)(t,i)||(r=(0,o.Tg)(i))!==i&&(0,o.$3)(t,r))||(c?!n||void 0===n[i]&&void 0===n[r]||(s[i]=mt(c,u,i,void 0,e,!0)):delete s[i]);if(a!==u)for(const e in a)t&&(0,o.$3)(t,e)||(delete a[e],d=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(Yt(e.emitsOptions,i))continue;const l=t[i];if(c)if((0,o.$3)(a,i))l!==a[i]&&(a[i]=l,d=!0);else{const t=(0,o.PT)(i);s[t]=mt(c,u,t,l,e,!1)}else l!==a[i]&&(a[i]=l,d=!0)}}d&&(0,r.hZ)(e.attrs,"set","")}function vt(e,t,n,i){const[s,a]=e.propsOptions;let l,u=!1;if(t)for(let r in t){if((0,o.SU)(r))continue;const c=t[r];let d;s&&(0,o.$3)(s,d=(0,o.PT)(r))?a&&a.includes(d)?(l||(l={}))[d]=c:n[d]=c:Yt(e.emitsOptions,r)||r in i&&c===i[r]||(i[r]=c,u=!0)}if(a){const t=(0,r.ux)(n),i=l||o.MZ;for(let r=0;r<a.length;r++){const l=a[r];n[l]=mt(s,t,l,i[l],e,!(0,o.$3)(i,l))}}return u}function mt(e,t,n,r,i,s){const a=e[n];if(null!=a){const e=(0,o.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,o.Tn)(e)){const{propsDefaults:o}=i;if(n in o)r=o[n];else{const s=er(i);r=o[n]=e.call(null,t),s()}}else r=e;i.ce&&i.ce._setProp(n,r)}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,o.Tg)(n)||(r=!0))}return r}const gt=new WeakMap;function yt(e,t,n=!1){const r=n?gt:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},l=[];let u=!1;if(!(0,o.Tn)(e)){const r=e=>{u=!0;const[n,r]=yt(e,t,!0);(0,o.X$)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,o.Gv)(e)&&r.set(e,o.Oj),o.Oj;if((0,o.cy)(s))for(let d=0;d<s.length;d++){0;const e=(0,o.PT)(s[d]);bt(e)&&(a[e]=o.MZ)}else if(s){0;for(const e in s){const t=(0,o.PT)(e);if(bt(t)){const n=s[e],r=a[t]=(0,o.cy)(n)||(0,o.Tn)(n)?{type:n}:(0,o.X$)({},n),i=r.type;let u=!1,c=!0;if((0,o.cy)(i))for(let e=0;e<i.length;++e){const t=i[e],n=(0,o.Tn)(t)&&t.name;if("Boolean"===n){u=!0;break}"String"===n&&(c=!1)}else u=(0,o.Tn)(i)&&"Boolean"===i.name;r[0]=u,r[1]=c,(u||(0,o.$3)(r,"default"))&&l.push(t)}}}const c=[a,l];return(0,o.Gv)(e)&&r.set(e,c),c}function bt(e){return"$"!==e[0]&&!(0,o.SU)(e)}const wt=e=>"_"===e[0]||"$stable"===e,_t=e=>(0,o.cy)(e)?e.map($n):[$n(e)],St=(e,t,n)=>{if(t._n)return t;const r=x(((...e)=>_t(t(...e))),n);return r._c=!1,r},Et=(e,t,n)=>{const r=e._ctx;for(const i in e){if(wt(i))continue;const n=e[i];if((0,o.Tn)(n))t[i]=St(i,n,r);else if(null!=n){0;const e=_t(n);t[i]=()=>e}}},Ct=(e,t)=>{const n=_t(t);e.slots.default=()=>n},kt=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},It=(e,t,n)=>{const r=e.slots=dt();if(32&e.vnode.shapeFlag){const e=t._;e?(kt(r,t,n),n&&(0,o.yQ)(r,"_",e,!0)):Et(t,r)}else t&&Ct(e,t)},Tt=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=o.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:kt(i,t,n):(s=!t.$stable,Et(t,i)),a=t}else t&&(Ct(e,t),a={default:1});if(s)for(const o in i)wt(o)||null!=a[o]||delete i[o]};function xt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,o.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const At=vn;function Rt(e){return Ft(e)}function Ft(e,t){xt();const n=(0,o.We)();n.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:l,createText:u,createComment:c,setText:d,setElementText:h,parentNode:f,nextSibling:p,setScopeId:v=o.tE,insertStaticContent:m}=e,g=(e,t,n,r=null,o=null,i=null,s=void 0,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!On(e,t)&&(r=X(e),z(e,o,i,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:u,ref:c,shapeFlag:d}=t;switch(u){case bn:b(e,t,n,r);break;case wn:w(e,t,n,r);break;case _n:null==e&&E(t,n,r,s);break;case yn:N(e,t,n,r,o,i,s,a,l);break;default:1&d?I(e,t,n,r,o,i,s,a,l):6&d?V(e,t,n,r,o,i,s,a,l):(64&d||128&d)&&u.process(e,t,n,r,o,i,s,a,l,Z)}null!=c&&o&&ae(c,e&&e.ref,i,t||e,!t)},b=(e,t,n,r)=>{if(null==e)i(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},w=(e,t,n,r)=>{null==e?i(t.el=c(t.children||""),n,r):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},C=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=p(e),i(e,n,r),e=o;i(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},I=(e,t,n,r,o,i,s,a,l)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?T(t,n,r,o,i,s,a,l):O(e,t,o,i,s,a,l)},T=(e,t,n,r,s,u,c,d)=>{let f,p;const{props:v,shapeFlag:m,transition:g,dirs:y}=e;if(f=e.el=l(e.type,u,v&&v.is,v),8&m?h(f,e.children):16&m&&A(e.children,f,null,r,s,Ot(e,u),c,d),y&&R(e,null,r,"created"),x(f,e,e.scopeId,c,r),v){for(const e in v)"value"===e||(0,o.SU)(e)||a(f,e,null,v[e],u,r);"value"in v&&a(f,"value",null,v.value,u),(p=v.onVnodeBeforeMount)&&Hn(p,r,e)}y&&R(e,null,r,"beforeMount");const b=Pt(s,g);b&&g.beforeEnter(f),i(f,t,n),((p=v&&v.onVnodeMounted)||b||y)&&At((()=>{p&&Hn(p,r,e),b&&g.enter(f),y&&R(e,null,r,"mounted")}),s)},x=(e,t,n,r,o)=>{if(n&&v(e,n),r)for(let i=0;i<r.length;i++)v(e,r[i]);if(o){let n=o.subTree;if(t===n||rn(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=o.vnode;x(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},A=(e,t,n,r,o,i,s,a,l=0)=>{for(let u=l;u<e.length;u++){const l=e[u]=a?Un(e[u]):$n(e[u]);g(null,l,t,n,r,o,i,s,a)}},O=(e,t,n,r,i,s,l)=>{const u=t.el=e.el;let{patchFlag:c,dynamicChildren:d,dirs:f}=t;c|=16&e.patchFlag;const p=e.props||o.MZ,v=t.props||o.MZ;let m;if(n&&Dt(n,!1),(m=v.onVnodeBeforeUpdate)&&Hn(m,n,t,e),f&&R(t,e,n,"beforeUpdate"),n&&Dt(n,!0),(p.innerHTML&&null==v.innerHTML||p.textContent&&null==v.textContent)&&h(u,""),d?D(e.dynamicChildren,d,u,n,r,Ot(t,i),s):l||j(e,t,u,null,n,r,Ot(t,i),s,!1),c>0){if(16&c)P(u,p,v,n,i);else if(2&c&&p.class!==v.class&&a(u,"class",null,v.class,i),4&c&&a(u,"style",p.style,v.style,i),8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],o=p[r],s=v[r];s===o&&"value"!==r||a(u,r,o,s,i,n)}}1&c&&e.children!==t.children&&h(u,t.children)}else l||null!=d||P(u,p,v,n,i);((m=v.onVnodeUpdated)||f)&&At((()=>{m&&Hn(m,n,t,e),f&&R(t,e,n,"updated")}),r)},D=(e,t,n,r,o,i,s)=>{for(let a=0;a<t.length;a++){const l=e[a],u=t[a],c=l.el&&(l.type===yn||!On(l,u)||70&l.shapeFlag)?f(l.el):n;g(l,u,c,null,r,o,i,s,!0)}},P=(e,t,n,r,i)=>{if(t!==n){if(t!==o.MZ)for(const s in t)(0,o.SU)(s)||s in n||a(e,s,t[s],null,i,r);for(const s in n){if((0,o.SU)(s))continue;const l=n[s],u=t[s];l!==u&&"value"!==s&&a(e,s,u,l,i,r)}"value"in n&&a(e,"value",t.value,n.value,i)}},N=(e,t,n,r,o,s,a,l,c)=>{const d=t.el=e?e.el:u(""),h=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:v}=t;v&&(l=l?l.concat(v):v),null==e?(i(d,n,r),i(h,n,r),A(t.children||[],n,h,o,s,a,l,c)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,o,s,a,l),(null!=t.key||o&&t===o.subTree)&&Nt(e,t,!0)):j(e,t,n,h,o,s,a,l,c)},V=(e,t,n,r,o,i,s,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,l):L(t,n,r,o,i,s,l):M(e,t,l)},L=(e,t,n,r,o,i,s)=>{const a=e.component=Yn(e,r,o);if(ue(e)&&(a.ctx.renderer=Z),sr(a,!1,s),a.asyncDep){if(o&&o.registerDep(a,B,s),!e.el){const e=a.subTree=Vn(wn);w(null,e,t,n)}}else B(a,e,t,n,o,i,s)},M=(e,t,n)=>{const r=t.component=e.component;if(en(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void W(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},B=(e,t,n,i,s,a,l)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:i,vnode:c}=e;{const n=Lt(e);if(n)return t&&(t.el=c.el,W(e,t,l)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let d,h=t;0,Dt(e,!1),t?(t.el=c.el,W(e,t,l)):t=c,n&&(0,o.DY)(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Hn(d,i,t,c),Dt(e,!0);const p=Xt(e);0;const v=e.subTree;e.subTree=p,g(v,p,f(v.el),X(v),e,s,a),t.el=p.el,null===h&&nn(e,p.el),r&&At(r,s),(d=t.props&&t.props.onVnodeUpdated)&&At((()=>Hn(d,i,t,c)),s)}else{let r;const{el:l,props:u}=t,{bm:c,m:d,parent:h,root:f,type:p}=e,v=le(t);if(Dt(e,!1),c&&(0,o.DY)(c),!v&&(r=u&&u.onVnodeBeforeMount)&&Hn(r,h,t),Dt(e,!0),l&&te){const t=()=>{e.subTree=Xt(e),te(l,e.subTree,e,s,null)};v&&p.__asyncHydrate?p.__asyncHydrate(l,e,t):t()}else{f.ce&&f.ce._injectChildStyle(p);const r=e.subTree=Xt(e);0,g(null,r,n,i,e,s,a),t.el=r.el}if(d&&At(d,s),!v&&(r=u&&u.onVnodeMounted)){const e=t;At((()=>Hn(r,h,e)),s)}(256&t.shapeFlag||h&&le(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&At(e.a,s),e.isMounted=!0,t=n=i=null}};e.scope.on();const c=e.effect=new r.X2(u);e.scope.off();const d=e.update=c.run.bind(c),h=e.job=c.runIfDirty.bind(c);h.i=e,h.id=e.uid,c.scheduler=()=>y(h),Dt(e,!0),d()},W=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,pt(e,t.props,o,n),Tt(e,t.children,n),(0,r.C4)(),_(e),(0,r.bl)()},j=(e,t,n,r,o,i,s,a,l=!1)=>{const u=e&&e.children,c=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void U(u,d,n,r,o,i,s,a,l);if(256&f)return void $(u,d,n,r,o,i,s,a,l)}8&p?(16&c&&Y(u,o,i),d!==u&&h(n,d)):16&c?16&p?U(u,d,n,r,o,i,s,a,l):Y(u,o,i,!0):(8&c&&h(n,""),16&p&&A(d,n,r,o,i,s,a,l))},$=(e,t,n,r,i,s,a,l,u)=>{e=e||o.Oj,t=t||o.Oj;const c=e.length,d=t.length,h=Math.min(c,d);let f;for(f=0;f<h;f++){const r=t[f]=u?Un(t[f]):$n(t[f]);g(e[f],r,n,null,i,s,a,l,u)}c>d?Y(e,i,s,!0,!1,h):A(t,n,r,i,s,a,l,u,h)},U=(e,t,n,r,i,s,a,l,u)=>{let c=0;const d=t.length;let h=e.length-1,f=d-1;while(c<=h&&c<=f){const r=e[c],o=t[c]=u?Un(t[c]):$n(t[c]);if(!On(r,o))break;g(r,o,n,null,i,s,a,l,u),c++}while(c<=h&&c<=f){const r=e[h],o=t[f]=u?Un(t[f]):$n(t[f]);if(!On(r,o))break;g(r,o,n,null,i,s,a,l,u),h--,f--}if(c>h){if(c<=f){const e=f+1,o=e<d?t[e].el:r;while(c<=f)g(null,t[c]=u?Un(t[c]):$n(t[c]),n,o,i,s,a,l,u),c++}}else if(c>f)while(c<=h)z(e[c],i,s,!0),c++;else{const p=c,v=c,m=new Map;for(c=v;c<=f;c++){const e=t[c]=u?Un(t[c]):$n(t[c]);null!=e.key&&m.set(e.key,c)}let y,b=0;const w=f-v+1;let _=!1,S=0;const E=new Array(w);for(c=0;c<w;c++)E[c]=0;for(c=p;c<=h;c++){const r=e[c];if(b>=w){z(r,i,s,!0);continue}let o;if(null!=r.key)o=m.get(r.key);else for(y=v;y<=f;y++)if(0===E[y-v]&&On(r,t[y])){o=y;break}void 0===o?z(r,i,s,!0):(E[o-v]=c+1,o>=S?S=o:_=!0,g(r,t[o],n,null,i,s,a,l,u),b++)}const C=_?Vt(E):o.Oj;for(y=C.length-1,c=w-1;c>=0;c--){const e=v+c,o=t[e],h=e+1<d?t[e+1].el:r;0===E[c]?g(null,o,n,h,i,s,a,l,u):_&&(y<0||c!==C[y]?K(o,n,h,2):y--)}}},K=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:l,children:u,shapeFlag:c}=e;if(6&c)return void K(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void a.move(e,t,n,Z);if(a===yn){i(s,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===_n)return void C(e,t,n);const d=2!==r&&1&c&&l;if(d)if(0===r)l.beforeEnter(s),i(s,t,n),At((()=>l.enter(s)),o);else{const{leave:e,delayLeave:r,afterLeave:o}=l,a=()=>i(s,t,n),u=()=>{e(s,(()=>{a(),o&&o()}))};r?r(s,a,u):u()}else i(s,t,n)},z=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:l,dynamicChildren:u,shapeFlag:c,patchFlag:d,dirs:h,cacheIndex:f}=e;if(-2===d&&(o=!1),null!=a&&ae(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&c)return void t.ctx.deactivate(e);const p=1&c&&h,v=!le(e);let m;if(v&&(m=s&&s.onVnodeBeforeUnmount)&&Hn(m,t,e),6&c)G(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);p&&R(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,Z,r):u&&!u.hasOnce&&(i!==yn||d>0&&64&d)?Y(u,t,n,!1,!0):(i===yn&&384&d||!o&&16&c)&&Y(l,t,n),r&&H(e)}(v&&(m=s&&s.onVnodeUnmounted)||p)&&At((()=>{m&&Hn(m,t,e),p&&R(e,null,t,"unmounted")}),n)},H=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===yn)return void q(n,r);if(t===_n)return void k(e);const i=()=>{s(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,s=()=>t(n,i);r?r(e.el,i,s):s()}else i()},q=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},G=(e,t,n)=>{const{bum:r,scope:i,job:s,subTree:a,um:l,m:u,a:c}=e;Mt(u),Mt(c),r&&(0,o.DY)(r),i.stop(),s&&(s.flags|=8,z(a,e,t,n)),l&&At(l,t),At((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)z(e[s],t,n,r,o)},X=e=>{if(6&e.shapeFlag)return X(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[F];return n?p(n):t};let J=!1;const Q=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),t._vnode=e,J||(J=!0,_(),S(),J=!1)},Z={p:g,um:z,m:K,r:H,mt:L,mc:A,pc:j,pbc:D,n:X,o:e};let ee,te;return t&&([ee,te]=t(Z)),{render:Q,hydrate:ee,createApp:st(Q,ee)}}function Ot({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Dt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Pt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Nt(e,t,n=!1){const r=e.children,i=t.children;if((0,o.cy)(r)&&(0,o.cy)(i))for(let o=0;o<r.length;o++){const e=r[o];let t=i[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[o]=Un(i[o]),t.el=e.el),n||-2===t.patchFlag||Nt(e,t)),t.type===bn&&(t.el=e.el)}}function Vt(e){const t=e.slice(),n=[0];let r,o,i,s,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(o=n[n.length-1],e[o]<l){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,e[n[a]]<l?i=a+1:s=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}function Lt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Lt(t)}function Mt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Bt=Symbol.for("v-scx"),Wt=()=>{{const e=ut(Bt);return e}};function jt(e,t){return Ut(e,null,t)}function $t(e,t,n){return Ut(e,t,n)}function Ut(e,t,n=o.MZ){const{immediate:i,deep:a,flush:l,once:u}=n;const c=(0,o.X$)({},n);const d=t&&i||!t&&"post"!==l;let h;if(ir)if("sync"===l){const e=Wt();h=e.__watcherHandles||(e.__watcherHandles=[])}else if(!d){const e=()=>{};return e.stop=o.tE,e.resume=o.tE,e.pause=o.tE,e}const f=Xn;c.call=(e,t,n)=>s(e,f,t,n);let p=!1;"post"===l?c.scheduler=e=>{At(e,f&&f.suspense)}:"sync"!==l&&(p=!0,c.scheduler=(e,t)=>{t?e():y(e)}),c.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const v=(0,r.wB)(e,t,c);return ir&&(h?h.push(v):d&&v()),v}function Kt(e,t,n){const r=this.proxy,i=(0,o.Kg)(e)?e.includes(".")?zt(r,e):()=>r[e]:e.bind(r,r);let s;(0,o.Tn)(t)?s=t:(s=t.handler,n=t);const a=er(this),l=Ut(i,s.bind(r),n);return a(),l}function zt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const Ht=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,o.PT)(t)}Modifiers`]||e[`${(0,o.Tg)(t)}Modifiers`];function qt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||o.MZ;let i=n;const a=t.startsWith("update:"),l=a&&Ht(r,t.slice(7));let u;l&&(l.trim&&(i=n.map((e=>(0,o.Kg)(e)?e.trim():e))),l.number&&(i=n.map(o.bB)));let c=r[u=(0,o.rU)(t)]||r[u=(0,o.rU)((0,o.PT)(t))];!c&&a&&(c=r[u=(0,o.rU)((0,o.Tg)(t))]),c&&s(c,e,6,i);const d=r[u+"Once"];if(d){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,s(d,e,6,i)}}function Gt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let a={},l=!1;if(!(0,o.Tn)(e)){const r=e=>{const n=Gt(e,t,!0);n&&(l=!0,(0,o.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||l?((0,o.cy)(s)?s.forEach((e=>a[e]=null)):(0,o.X$)(a,s),(0,o.Gv)(e)&&r.set(e,a),a):((0,o.Gv)(e)&&r.set(e,null),null)}function Yt(e,t){return!(!e||!(0,o.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,o.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,o.$3)(e,(0,o.Tg)(t))||(0,o.$3)(e,t))}function Xt(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:l,attrs:u,emit:c,render:d,renderCache:h,props:f,data:p,setupState:v,ctx:m,inheritAttrs:g}=e,y=T(e);let b,w;try{if(4&n.shapeFlag){const e=i||r,t=e;b=$n(d.call(t,e,h,f,v,p,m)),w=u}else{const e=t;0,b=$n(e.length>1?e(f,{attrs:u,slots:l,emit:c}):e(f,null)),w=t.props?u:Qt(u)}}catch(S){Sn.length=0,a(S,e,1),b=Vn(wn)}let _=b;if(w&&!1!==g){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(s&&e.some(o.CP)&&(w=Zt(w,s)),_=Bn(_,w,!1,!0))}return n.dirs&&(_=Bn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&re(_,n.transition),b=_,T(y),b}function Jt(e,t=!0){let n;for(let r=0;r<e.length;r++){const t=e[r];if(!Fn(t))return;if(t.type!==wn||"v-if"===t.children){if(n)return;n=t}}return n}const Qt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,o.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Zt=(e,t)=>{const n={};for(const r in e)(0,o.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function en(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||tn(r,s,u):!!s);if(1024&l)return!0;if(16&l)return r?tn(r,s,u):!!s;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Yt(u,n))return!0}}return!1}function tn(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Yt(n,i))return!0}return!1}function nn({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const rn=e=>e.__isSuspense;let on=0;const sn={name:"Suspense",__isSuspense:!0,process(e,t,n,r,o,i,s,a,l,u){if(null==e)un(t,n,r,o,i,s,a,l,u);else{if(i&&i.deps>0&&!e.suspense.isInFallback)return t.suspense=e.suspense,t.suspense.vnode=t,void(t.el=e.el);cn(e,t,n,r,o,s,a,l,u)}},hydrate:hn,normalize:fn},an=sn;function ln(e,t){const n=e.props&&e.props[t];(0,o.Tn)(n)&&n()}function un(e,t,n,r,o,i,s,a,l){const{p:u,o:{createElement:c}}=l,d=c("div"),h=e.suspense=dn(e,o,r,t,d,n,i,s,a,l);u(null,h.pendingBranch=e.ssContent,d,null,r,h,i,s),h.deps>0?(ln(e,"onPending"),ln(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,i,s),mn(h,e.ssFallback)):h.resolve(!1,!0)}function cn(e,t,n,r,o,i,s,a,{p:l,um:u,o:{createElement:c}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const h=t.ssContent,f=t.ssFallback,{activeBranch:p,pendingBranch:v,isInFallback:m,isHydrating:g}=d;if(v)d.pendingBranch=h,On(h,v)?(l(v,h,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0?d.resolve():m&&(g||(l(p,f,n,r,o,null,i,s,a),mn(d,f)))):(d.pendingId=on++,g?(d.isHydrating=!1,d.activeBranch=v):u(v,o,d),d.deps=0,d.effects.length=0,d.hiddenContainer=c("div"),m?(l(null,h,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0?d.resolve():(l(p,f,n,r,o,null,i,s,a),mn(d,f))):p&&On(h,p)?(l(p,h,n,r,o,d,i,s,a),d.resolve(!0)):(l(null,h,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0&&d.resolve()));else if(p&&On(h,p))l(p,h,n,r,o,d,i,s,a),mn(d,h);else if(ln(t,"onPending"),d.pendingBranch=h,512&h.shapeFlag?d.pendingId=h.component.suspenseId:d.pendingId=on++,l(null,h,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0)d.resolve();else{const{timeout:e,pendingId:t}=d;e>0?setTimeout((()=>{d.pendingId===t&&d.fallback(f)}),e):0===e&&d.fallback(f)}}function dn(e,t,n,r,i,s,l,u,c,d,h=!1){const{p:f,m:p,um:v,n:m,o:{parentNode:g,remove:y}}=d;let b;const _=gn(e);_&&t&&t.pendingBranch&&(b=t.pendingId,t.deps++);const S=e.props?(0,o.Ro)(e.props.timeout):void 0;const E=s,C={vnode:e,parent:t,parentComponent:n,namespace:l,container:r,hiddenContainer:i,deps:0,pendingId:on++,timeout:"number"===typeof S?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){const{vnode:r,activeBranch:o,pendingBranch:i,pendingId:a,effects:l,parentComponent:u,container:c}=C;let d=!1;C.isHydrating?C.isHydrating=!1:e||(d=o&&i.transition&&"out-in"===i.transition.mode,d&&(o.transition.afterLeave=()=>{a===C.pendingId&&(p(i,c,s===E?m(o):s,0),w(l))}),o&&(g(o.el)===c&&(s=m(o)),v(o,u,C,!0)),d||p(i,c,s,0)),mn(C,i),C.pendingBranch=null,C.isInFallback=!1;let h=C.parent,f=!1;while(h){if(h.pendingBranch){h.effects.push(...l),f=!0;break}h=h.parent}f||d||w(l),C.effects=[],_&&t&&t.pendingBranch&&b===t.pendingId&&(t.deps--,0!==t.deps||n||t.resolve()),ln(r,"onResolve")},fallback(e){if(!C.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:r,container:o,namespace:i}=C;ln(t,"onFallback");const s=m(n),a=()=>{C.isInFallback&&(f(null,e,o,s,r,null,i,u,c),mn(C,e))},l=e.transition&&"out-in"===e.transition.mode;l&&(n.transition.afterLeave=a),C.isInFallback=!0,v(n,r,null,!0),l||a()},move(e,t,n){C.activeBranch&&p(C.activeBranch,e,t,n),C.container=e},next(){return C.activeBranch&&m(C.activeBranch)},registerDep(e,t,n){const r=!!C.pendingBranch;r&&C.deps++;const o=e.vnode.el;e.asyncDep.catch((t=>{a(t,e,0)})).then((i=>{if(e.isUnmounted||C.isUnmounted||C.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:s}=e;lr(e,i,!1),o&&(s.el=o);const a=!o&&e.subTree.el;t(e,s,g(o||e.subTree.el),o?null:m(e.subTree),C,l,n),a&&y(a),nn(e,s.el),r&&0===--C.deps&&C.resolve()}))},unmount(e,t){C.isUnmounted=!0,C.activeBranch&&v(C.activeBranch,n,e,t),C.pendingBranch&&v(C.pendingBranch,n,e,t)}};return C}function hn(e,t,n,r,o,i,s,a,l){const u=t.suspense=dn(t,r,n,e.parentNode,document.createElement("div"),null,o,i,s,a,!0),c=l(e,u.pendingBranch=t.ssContent,n,u,i,s);return 0===u.deps&&u.resolve(!1,!0),c}function fn(e){const{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=pn(r?n.default:n),e.ssFallback=r?pn(n.fallback):Vn(wn)}function pn(e){let t;if((0,o.Tn)(e)){const n=In&&e._c;n&&(e._d=!1,Cn()),e=e(),n&&(e._d=!0,t=En,kn())}if((0,o.cy)(e)){const t=Jt(e);0,e=t}return e=$n(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function vn(e,t){t&&t.pendingBranch?(0,o.cy)(e)?t.effects.push(...e):t.effects.push(e):w(e)}function mn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let o=t.el;while(!o&&t.component)t=t.component.subTree,o=t.el;n.el=o,r&&r.subTree===n&&(r.vnode.el=o,nn(r,o))}function gn(e){const t=e.props&&e.props.suspensible;return null!=t&&!1!==t}const yn=Symbol.for("v-fgt"),bn=Symbol.for("v-txt"),wn=Symbol.for("v-cmt"),_n=Symbol.for("v-stc"),Sn=[];let En=null;function Cn(e=!1){Sn.push(En=e?null:[])}function kn(){Sn.pop(),En=Sn[Sn.length-1]||null}let In=1;function Tn(e){In+=e,e<0&&En&&(En.hasOnce=!0)}function xn(e){return e.dynamicChildren=In>0?En||o.Oj:null,kn(),In>0&&En&&En.push(e),e}function An(e,t,n,r,o,i){return xn(Nn(e,t,n,r,o,i,!0))}function Rn(e,t,n,r,o){return xn(Vn(e,t,n,r,o,!0))}function Fn(e){return!!e&&!0===e.__v_isVNode}function On(e,t){return e.type===t.type&&e.key===t.key}const Dn=({key:e})=>null!=e?e:null,Pn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,o.Kg)(e)||(0,r.i9)(e)||(0,o.Tn)(e)?{i:k,r:e,k:t,f:!!n}:e:null);function Nn(e,t=null,n=null,r=0,i=null,s=(e===yn?0:1),a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Dn(t),ref:t&&Pn(t),scopeId:I,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:k};return l?(Kn(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,o.Kg)(n)?8:16),In>0&&!a&&En&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&En.push(u),u}const Vn=Ln;function Ln(e,t=null,n=null,i=0,s=null,a=!1){if(e&&e!==Oe||(e=wn),Fn(e)){const r=Bn(e,t,!0);return n&&Kn(r,n),In>0&&!a&&En&&(6&r.shapeFlag?En[En.indexOf(e)]=r:En.push(r)),r.patchFlag=-2,r}if(pr(e)&&(e=e.__vccOpts),t){t=Mn(t);let{class:e,style:n}=t;e&&!(0,o.Kg)(e)&&(t.class=(0,o.C4)(e)),(0,o.Gv)(n)&&((0,r.ju)(n)&&!(0,o.cy)(n)&&(n=(0,o.X$)({},n)),t.style=(0,o.Tr)(n))}const l=(0,o.Kg)(e)?1:rn(e)?128:O(e)?64:(0,o.Gv)(e)?4:(0,o.Tn)(e)?2:0;return Nn(e,t,n,i,s,l,a,!0)}function Mn(e){return e?(0,r.ju)(e)||ht(e)?(0,o.X$)({},e):e:null}function Bn(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:l,transition:u}=e,c=t?zn(i||{},t):i,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Dn(c),ref:t&&t.ref?n&&s?(0,o.cy)(s)?s.concat(Pn(t)):[s,Pn(t)]:Pn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==yn?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bn(e.ssContent),ssFallback:e.ssFallback&&Bn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&re(d,u.clone(d)),d}function Wn(e=" ",t=0){return Vn(bn,null,e,t)}function jn(e="",t=!1){return t?(Cn(),Rn(wn,null,e)):Vn(wn,null,e)}function $n(e){return null==e||"boolean"===typeof e?Vn(wn):(0,o.cy)(e)?Vn(yn,null,e.slice()):Fn(e)?Un(e):Vn(bn,null,String(e))}function Un(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Bn(e)}function Kn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,o.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Kn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||ht(t)?3===r&&k&&(1===k.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=k}}else(0,o.Tn)(t)?(t={default:t,_ctx:k},n=32):(t=String(t),64&r?(n=16,t=[Wn(t)]):n=8);e.children=t,e.shapeFlag|=n}function zn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,o.C4)([t.class,r.class]));else if("style"===e)t.style=(0,o.Tr)([t.style,r.style]);else if((0,o.Mp)(e)){const n=t[e],i=r[e];!i||n===i||(0,o.cy)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function Hn(e,t,n,r=null){s(e,t,7,[n,r])}const qn=ot();let Gn=0;function Yn(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||qn,a={uid:Gn++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yt(i,s),emitsOptions:Gt(i,s),emit:null,emitted:null,propsDefaults:o.MZ,inheritAttrs:i.inheritAttrs,ctx:o.MZ,data:o.MZ,props:o.MZ,attrs:o.MZ,slots:o.MZ,refs:o.MZ,setupState:o.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=qt.bind(null,a),e.ce&&e.ce(a),a}let Xn=null;const Jn=()=>Xn||k;let Qn,Zn;{const e=(0,o.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};Qn=t("__VUE_INSTANCE_SETTERS__",(e=>Xn=e)),Zn=t("__VUE_SSR_SETTERS__",(e=>ir=e))}const er=e=>{const t=Xn;return Qn(e),e.scope.on(),()=>{e.scope.off(),Qn(t)}},tr=()=>{Xn&&Xn.scope.off(),Qn(null)};function nr(e){return 4&e.vnode.shapeFlag}let rr,or,ir=!1;function sr(e,t=!1,n=!1){t&&Zn(t);const{props:r,children:o}=e.vnode,i=nr(e);ft(e,r,i,t),It(e,o,n);const s=i?ar(e,t):void 0;return t&&Zn(!1),s}function ar(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,je);const{setup:s}=n;if(s){(0,r.C4)();const n=e.setupContext=s.length>1?dr(e):null,l=er(e),u=i(s,e,0,[e.props,n]),c=(0,o.yL)(u);if((0,r.bl)(),l(),!c&&!e.sp||le(e)||se(e),c){if(u.then(tr,tr),t)return u.then((n=>{lr(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=u}else lr(e,u,t)}else ur(e,t)}function lr(e,t,n){(0,o.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,o.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),ur(e,n)}function ur(e,t,n){const i=e.type;if(!e.render){if(!t&&rr&&!i.render){const t=i.template||Ge(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,l=(0,o.X$)((0,o.X$)({isCustomElement:n,delimiters:s},r),a);i.render=rr(t,l)}}e.render=i.render||o.tE,or&&or(e)}{const t=er(e);(0,r.C4)();try{Ke(e)}finally{(0,r.bl)(),t()}}}const cr={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function dr(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,cr),slots:e.slots,emit:e.emit,expose:t}}function hr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in Be?Be[n](e):void 0},has(e,t){return t in e||t in Be}})):e.proxy}function fr(e,t=!0){return(0,o.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function pr(e){return(0,o.Tn)(e)&&"__vccOpts"in e}const vr=(e,t)=>{const n=(0,r.EW)(e,t,ir);return n};function mr(e,t,n){const r=arguments.length;return 2===r?(0,o.Gv)(t)&&!(0,o.cy)(t)?Fn(t)?Vn(e,null,[t]):Vn(e,t):Vn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Fn(n)&&(n=[n]),Vn(e,t,n))}const gr="3.5.12",yr=o.tE},3751:function(e,t,n){"use strict";n.d(t,{D$:function(){return Ae},Ef:function(){return Ve},F:function(){return ge},Jo:function(){return Ie},XX:function(){return Ne},aG:function(){return M},eB:function(){return w},jR:function(){return Fe}});var r=n(641),o=n(33),i=n(953);
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const a="undefined"!==typeof window&&window.trustedTypes;if(a)try{s=a.createPolicy("vue",{createHTML:e=>e})}catch(Be){}const l=s?e=>s.createHTML(e):e=>e,u="http://www.w3.org/2000/svg",c="http://www.w3.org/1998/Math/MathML",d="undefined"!==typeof document?document:null,h=d&&d.createElement("template"),f={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o="svg"===t?d.createElementNS(u,e):"mathml"===t?d.createElementNS(c,e):n?d.createElement(e,{is:n}):d.createElement(e);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>d.createTextNode(e),createComment:e=>d.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>d.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{h.innerHTML=l("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const o=h.content;if("svg"===r||"mathml"===r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},p="transition",v="animation",m=Symbol("_vtc"),g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},y=(0,o.X$)({},r.QP,g),b=e=>(e.displayName="Transition",e.props=y,e),w=b(((e,{slots:t})=>(0,r.h)(r.pR,E(e),t))),_=(e,t=[])=>{(0,o.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},S=e=>!!e&&((0,o.cy)(e)?e.some((e=>e.length>1)):e.length>1);function E(e){const t={};for(const o in e)o in g||(t[o]=e[o]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:c=a,appearToClass:d=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=C(i),m=v&&v[0],y=v&&v[1],{onBeforeEnter:b,onEnter:w,onEnterCancelled:E,onLeave:k,onLeaveCancelled:A,onBeforeAppear:F=b,onAppear:O=w,onAppearCancelled:D=E}=t,N=(e,t,n)=>{T(e,t?d:l),T(e,t?c:a),n&&n()},V=(e,t)=>{e._isLeaving=!1,T(e,h),T(e,p),T(e,f),t&&t()},L=e=>(t,n)=>{const o=e?O:w,i=()=>N(t,e,n);_(o,[t,i]),x((()=>{T(t,e?u:s),I(t,e?d:l),S(o)||R(t,r,m,i)}))};return(0,o.X$)(t,{onBeforeEnter(e){_(b,[e]),I(e,s),I(e,a)},onBeforeAppear(e){_(F,[e]),I(e,u),I(e,c)},onEnter:L(!1),onAppear:L(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>V(e,t);I(e,h),I(e,f),P(),x((()=>{e._isLeaving&&(T(e,h),I(e,p),S(k)||R(e,r,y,n))})),_(k,[e,n])},onEnterCancelled(e){N(e,!1),_(E,[e])},onAppearCancelled(e){N(e,!0),_(D,[e])},onLeaveCancelled(e){V(e),_(A,[e])}})}function C(e){if(null==e)return null;if((0,o.Gv)(e))return[k(e.enter),k(e.leave)];{const t=k(e);return[t,t]}}function k(e){const t=(0,o.Ro)(e);return t}function I(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[m]||(e[m]=new Set)).add(t)}function T(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[m];n&&(n.delete(t),n.size||(e[m]=void 0))}function x(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let A=0;function R(e,t,n,r){const o=e._endId=++A,i=()=>{o===e._endId&&r()};if(null!=n)return setTimeout(i,n);const{type:s,timeout:a,propCount:l}=F(e,t);if(!s)return r();const u=s+"end";let c=0;const d=()=>{e.removeEventListener(u,h),i()},h=t=>{t.target===e&&++c>=l&&d()};setTimeout((()=>{c<l&&d()}),a+1),e.addEventListener(u,h)}function F(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(`${p}Delay`),i=r(`${p}Duration`),s=O(o,i),a=r(`${v}Delay`),l=r(`${v}Duration`),u=O(a,l);let c=null,d=0,h=0;t===p?s>0&&(c=p,d=s,h=i.length):t===v?u>0&&(c=v,d=u,h=l.length):(d=Math.max(s,u),c=d>0?s>u?p:v:null,h=c?c===p?i.length:l.length:0);const f=c===p&&/\b(transform|all)(,|$)/.test(r(`${p}Property`).toString());return{type:c,timeout:d,propCount:h,hasTransform:f}}function O(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>D(t)+D(e[n]))))}function D(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function P(){return document.body.offsetHeight}function N(e,t,n){const r=e[m];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const V=Symbol("_vod"),L=Symbol("_vsh"),M={beforeMount(e,{value:t},{transition:n}){e[V]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):B(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),B(e,!0),r.enter(e)):r.leave(e,(()=>{B(e,!1)})):B(e,t))},beforeUnmount(e,{value:t}){B(e,t)}};function B(e,t){e.style.display=t?e[V]:"none",e[L]=!t}const W=Symbol("");const j=/(^|;)\s*display\s*:/;function $(e,t,n){const r=e.style,i=(0,o.Kg)(n);let s=!1;if(n&&!i){if(t)if((0,o.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&K(r,t,"")}else for(const e in t)null==n[e]&&K(r,e,"");for(const e in n)"display"===e&&(s=!0),K(r,e,n[e])}else if(i){if(t!==n){const e=r[W];e&&(n+=";"+e),r.cssText=n,s=j.test(n)}}else t&&e.removeAttribute("style");V in e&&(e[V]=s?r.display:"",e[L]&&(r.display="none"))}const U=/\s*!important$/;function K(e,t,n){if((0,o.cy)(n))n.forEach((n=>K(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=q(e,t);U.test(n)?e.setProperty((0,o.Tg)(r),n.replace(U,""),"important"):e[r]=n}}const z=["Webkit","Moz","ms"],H={};function q(e,t){const n=H[t];if(n)return n;let r=(0,o.PT)(t);if("filter"!==r&&r in e)return H[t]=r;r=(0,o.ZH)(r);for(let o=0;o<z.length;o++){const n=z[o]+r;if(n in e)return H[t]=n}return t}const G="http://www.w3.org/1999/xlink";function Y(e,t,n,r,i,s=(0,o.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(G,t.slice(6,t.length)):e.setAttributeNS(G,t,n):null==n||s&&!(0,o.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,s?"":(0,o.Bm)(n)?String(n):n)}function X(e,t,n,r,i){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?l(n):n));const s=e.tagName;if("value"===t&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?e.getAttribute("value")||"":e.value,o=null==n?"checkbox"===e.type?"on":"":String(n);return r===o&&"_value"in e||(e.value=o),null==n&&e.removeAttribute(t),void(e._value=n)}let a=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,o.Y2)(n):null==n&&"string"===r?(n="",a=!0):"number"===r&&(n=0,a=!0)}try{e[t]=n}catch(Be){0}a&&e.removeAttribute(i||t)}function J(e,t,n,r){e.addEventListener(t,n,r)}function Q(e,t,n,r){e.removeEventListener(t,n,r)}const Z=Symbol("_vei");function ee(e,t,n,r,o=null){const i=e[Z]||(e[Z]={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=ne(t);if(r){const s=i[t]=se(r,o);J(e,n,s,a)}else s&&(Q(e,n,s,a),i[t]=void 0)}}const te=/(?:Once|Passive|Capture)$/;function ne(e){let t;if(te.test(e)){let n;t={};while(n=e.match(te))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,o.Tg)(e.slice(2));return[n,t]}let re=0;const oe=Promise.resolve(),ie=()=>re||(oe.then((()=>re=0)),re=Date.now());function se(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(ae(e,n.value),t,5,[e])};return n.value=e,n.attached=ie(),n}function ae(e,t){if((0,o.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const le=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ue=(e,t,n,r,i,s)=>{const a="svg"===i;"class"===t?N(e,r,a):"style"===t?$(e,n,r):(0,o.Mp)(t)?(0,o.CP)(t)||ee(e,t,n,r,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ce(e,t,r,a))?(X(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||Y(e,t,r,a,s,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,o.Kg)(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),Y(e,t,r,a)):X(e,(0,o.PT)(t),r,s,t)};function ce(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&le(t)&&(0,o.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!le(t)||!(0,o.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const de=new WeakMap,he=new WeakMap,fe=Symbol("_moveCb"),pe=Symbol("_enterCb"),ve=e=>(delete e.props.mode,e),me=ve({name:"TransitionGroup",props:(0,o.X$)({},y,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),o=(0,r.Gy)();let s,a;return(0,r.$u)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!_e(s[0].el,n.vnode.el,t))return;s.forEach(ye),s.forEach(be);const r=s.filter(we);P(),r.forEach((e=>{const n=e.el,r=n.style;I(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const o=n[fe]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",o),n[fe]=null,T(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const l=(0,i.ux)(e),u=E(l);let c=l.tag||r.FK;if(s=[],a)for(let e=0;e<a.length;e++){const t=a[e];t.el&&t.el instanceof Element&&(s.push(t),(0,r.MZ)(t,(0,r.OW)(t,u,o,n)),de.set(t,t.el.getBoundingClientRect()))}a=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,u,o,n))}return(0,r.bF)(c,null,a)}}}),ge=me;function ye(e){const t=e.el;t[fe]&&t[fe](),t[pe]&&t[pe]()}function be(e){he.set(e,e.el.getBoundingClientRect())}function we(e){const t=de.get(e),n=he.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${o}px)`,t.transitionDuration="0s",e}}function _e(e,t,n){const r=e.cloneNode(),o=e[m];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=F(r);return i.removeChild(r),s}const Se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,o.cy)(t)?e=>(0,o.DY)(t,e):t};function Ee(e){e.target.composing=!0}function Ce(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ke=Symbol("_assign"),Ie={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ke]=Se(i);const s=r||i.props&&"number"===i.props.type;J(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=(0,o.bB)(r)),e[ke](r)})),n&&J(e,"change",(()=>{e.value=e.value.trim()})),t||(J(e,"compositionstart",Ee),J(e,"compositionend",Ce),J(e,"change",Ce))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},a){if(e[ke]=Se(a),e.composing)return;const l=!s&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,o.bB)(e.value),u=null==t?"":t;if(l!==u){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(i&&e.value.trim()===u)return}e.value=u}}};const Te=["ctrl","shift","alt","meta"],xe={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Te.some((n=>e[`${n}Key`]&&!t.includes(n)))},Ae=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=xe[t[e]];if(r&&r(n,t))return}return e(n,...r)})},Re={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Fe=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,o.Tg)(n.key);return t.some((e=>e===r||Re[e]===r))?e(n):void 0})},Oe=(0,o.X$)({patchProp:ue},f);let De;function Pe(){return De||(De=(0,r.K9)(Oe))}const Ne=(...e)=>{Pe().render(...e)},Ve=(...e)=>{const t=Pe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Me(e);if(!r)return;const i=t._component;(0,o.Tn)(i)||i.render||i.template||(i.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const s=n(r,!1,Le(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function Le(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Me(e){if((0,o.Kg)(e)){const t=document.querySelector(e);return t}return e}},33:function(e,t,n){"use strict";
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,{$3:function(){return f},$H:function(){return L},BH:function(){return z},BX:function(){return ne},Bm:function(){return _},C4:function(){return J},CE:function(){return v},CP:function(){return u},DY:function(){return M},Gv:function(){return S},J$:function(){return Z},Kg:function(){return w},MZ:function(){return o},Mp:function(){return l},NO:function(){return a},Oj:function(){return i},PT:function(){return O},Qd:function(){return T},Ro:function(){return j},SU:function(){return A},TF:function(){return d},Tg:function(){return P},Tn:function(){return b},Tr:function(){return H},We:function(){return U},X$:function(){return c},Y2:function(){return ee},ZH:function(){return N},Zf:function(){return I},bB:function(){return W},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return V},tE:function(){return s},u3:function(){return re},vM:function(){return m},v_:function(){return ie},yI:function(){return x},yL:function(){return E},yQ:function(){return B}});const o={},i=[],s=()=>{},a=()=>!1,l=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),c=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},h=Object.prototype.hasOwnProperty,f=(e,t)=>h.call(e,t),p=Array.isArray,v=e=>"[object Map]"===k(e),m=e=>"[object Set]"===k(e),g=e=>"[object Date]"===k(e),y=e=>"[object RegExp]"===k(e),b=e=>"function"===typeof e,w=e=>"string"===typeof e,_=e=>"symbol"===typeof e,S=e=>null!==e&&"object"===typeof e,E=e=>(S(e)||b(e))&&b(e.then)&&b(e.catch),C=Object.prototype.toString,k=e=>C.call(e),I=e=>k(e).slice(8,-1),T=e=>"[object Object]"===k(e),x=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),R=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},F=/-(\w)/g,O=R((e=>e.replace(F,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,P=R((e=>e.replace(D,"-$1").toLowerCase())),N=R((e=>e.charAt(0).toUpperCase()+e.slice(1))),V=R((e=>{const t=e?`on${N(e)}`:"";return t})),L=(e,t)=>!Object.is(e,t),M=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},B=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},W=e=>{const t=parseFloat(e);return isNaN(t)?e:t},j=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let $;const U=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const K="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",z=r(K);function H(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=w(r)?X(r):H(r);if(o)for(const e in o)t[e]=o[e]}return t}if(w(e)||S(e))return e}const q=/;(?![^(]*\))/g,G=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(Y,"").split(q).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function J(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=J(e[n]);r&&(t+=r+" ")}else if(S(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Q="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(Q);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=_(e),r=_(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=S(e),r=S(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const oe=e=>!(!e||!0!==e["__v_isRef"]),ie=e=>w(e)?e:null==e?"":p(e)||S(e)&&(e.toString===C||!b(e.toString))?oe(e)?ie(e.value):JSON.stringify(e,se,2):String(e),se=(e,t)=>oe(t)?se(e,t.value):v(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:_(t)?ae(t):!S(t)||p(t)||T(t)?t:String(t),ae=(e,t="")=>{var n;return _(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},4866:function(e){function t(){return"undefined"!==typeof window&&"object"===typeof window.process&&"renderer"===window.process.type||(!("undefined"===typeof process||"object"!==typeof process.versions||!process.versions.electron)||"object"===typeof navigator&&"string"===typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0)}e.exports=t},5524:function(){},4493:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(D){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),a=new R(r||[]);return o(s,"_invoke",{value:I(e,n,a)}),s}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(D){return{type:"throw",arg:D}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",p="executing",v="completed",m={};function g(){}function y(){}function b(){}var w={};u(w,s,(function(){return this}));var _=Object.getPrototypeOf,S=_&&_(_(F([])));S&&S!==n&&r.call(S,s)&&(w=S);var E=b.prototype=g.prototype=Object.create(w);function C(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(o,i,s,a){var l=d(e[o],e,i);if("throw"!==l.type){var u=l.arg,c=u.value;return c&&"object"===typeof c&&r.call(c,"__await")?t.resolve(c.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(c).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(l.arg)}var i;function s(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}o(this,"_invoke",{value:s})}function I(e,t,n){var r=h;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return O()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var a=T(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=d(e,t,n);if("normal"===l.type){if(r=n.done?v:f,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=v,n.method="throw",n.arg=l.arg)}}}function T(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator["return"]&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function F(e){if(e){var n=e[s];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){while(++o<e.length)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},C(k.prototype),u(k.prototype,a,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var s=new k(c(t,n,r,o),i);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},C(E),u(E,l,"Generator"),u(E,s,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){while(n.length){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=F,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var l=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(l&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},7465:function(e,t,n){const r=n(2477),o=async(e,t,n)=>{const o=await r(t,1,n);return o.recognize(e).finally((async()=>{await o.terminate()}))},i=async(e,t)=>{const n=await r("osd",0,t);return n.detect(e).finally((async()=>{await n.terminate()}))};e.exports={recognize:o,detect:i}},9742:function(e){e.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},949:function(e){e.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}},4500:function(e){e.exports={workerBlobURL:!0,logger:()=>{}}},2646:function(e){e.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}},9500:function(e,t,n){const r=n(1028);let o=0;e.exports=({id:e,action:t,payload:n={}})=>{let i=e;return"undefined"===typeof i&&(i=r("Job",o),o+=1),{id:i,action:t,payload:n}}},882:function(e,t,n){const r=n(9500),{log:o}=n(8787),i=n(1028);let s=0;e.exports=()=>{const e=i("Scheduler",s),t={},n={};let a=[];s+=1;const l=()=>a.length,u=()=>Object.keys(t).length,c=()=>{if(0!==a.length){const e=Object.keys(t);for(let r=0;r<e.length;r+=1)if("undefined"===typeof n[e[r]]){a[0](t[e[r]]);break}}},d=(t,i)=>new Promise(((s,l)=>{const u=r({action:t,payload:i});a.push((async e=>{a.shift(),n[e.id]=u;try{s(await e[t].apply(this,[...i,u.id]))}catch(r){l(r)}finally{delete n[e.id],c()}})),o(`[${e}]: Add ${u.id} to JobQueue`),o(`[${e}]: JobQueue length=${a.length}`),c()})),h=n=>(t[n.id]=n,o(`[${e}]: Add ${n.id}`),o(`[${e}]: Number of workers=${u()}`),c(),n.id),f=async(t,...n)=>{if(0===u())throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return d(t,n)},p=async()=>{Object.keys(t).forEach((async e=>{await t[e].terminate()})),a=[]};return{addWorker:h,addJob:f,terminate:p,getQueueLen:l,getNumWorkers:u}}},2477:function(e,t,n){const r=n(5981),o=n(4760),i=n(9500),{log:s}=n(8787),a=n(1028),l=n(9742),{defaultOptions:u,spawnWorker:c,terminateWorker:d,onMessage:h,loadImage:f,send:p}=n(5321);let v=0;e.exports=async(e="eng",t=l.LSTM_ONLY,n={},m={})=>{const g=a("Worker",v),{logger:y,errorHandler:b,...w}=r({...u,...n}),_={},S={},E="string"===typeof e?e.split("+"):e;let C=t,k=m;const I=[l.DEFAULT,l.LSTM_ONLY].includes(t)&&!w.legacyCore;let T,x;const A=new Promise(((e,t)=>{x=e,T=t})),R=e=>{T(e.message)};let F=c(w);F.onerror=R,v+=1;const O=(e,t)=>{_[e]=t},D=(e,t)=>{S[e]=t},P=({id:e,action:t,payload:n})=>new Promise(((r,o)=>{s(`[${g}]: Start ${e}, action=${t}`);const i=`${t}-${e}`;O(i,r),D(i,o),p(F,{workerId:g,jobId:e,action:t,payload:n})})),N=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),V=e=>P(i({id:e,action:"load",payload:{options:{lstmOnly:I,corePath:w.corePath,logging:w.logging}}})),L=(e,t,n)=>P(i({id:n,action:"FS",payload:{method:"writeFile",args:[e,t]}})),M=(e,t)=>P(i({id:t,action:"FS",payload:{method:"readFile",args:[e,{encoding:"utf8"}]}})),B=(e,t)=>P(i({id:t,action:"FS",payload:{method:"unlink",args:[e]}})),W=(e,t,n)=>P(i({id:n,action:"FS",payload:{method:e,args:t}})),j=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),$=(e,t)=>P(i({id:t,action:"loadLanguage",payload:{langs:e,options:{langPath:w.langPath,dataPath:w.dataPath,cachePath:w.cachePath,cacheMethod:w.cacheMethod,gzip:w.gzip,lstmOnly:[l.DEFAULT,l.LSTM_ONLY].includes(C)&&!w.legacyLang}}})),U=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),K=(e,t,n,r)=>P(i({id:r,action:"initialize",payload:{langs:e,oem:t,config:n}})),z=(e="eng",t,n,r)=>{if(I&&[l.TESSERACT_ONLY,l.TESSERACT_LSTM_COMBINED].includes(t))throw Error("Legacy model requested but code missing.");const o=t||C;C=o;const i=n||k;k=i;const s="string"===typeof e?e.split("+"):e,a=s.filter((e=>!E.includes(e)));return E.push(...a),a.length>0?$(a,r).then((()=>K(e,o,i,r))):K(e,o,i,r)},H=(e={},t)=>P(i({id:t,action:"setParameters",payload:{params:e}})),q=async(e,t={},n={blocks:!0,text:!0,hocr:!0,tsv:!0},r)=>P(i({id:r,action:"recognize",payload:{image:await f(e),options:t,output:n}})),G=(e="Tesseract OCR Result",t=!1,n)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),P(i({id:n,action:"getPDF",payload:{title:e,textonly:t}}))),Y=async(e,t)=>{if(I)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return P(i({id:t,action:"detect",payload:{image:await f(e)}}))},X=async()=>(null!==F&&(d(F),F=null),Promise.resolve());h(F,(({workerId:e,jobId:t,status:n,action:r,data:i})=>{const a=`${r}-${t}`;if("resolve"===n){s(`[${e}]: Complete ${t}`);let n=i;"recognize"===r?n=o(i):"getPDF"===r&&(n=Array.from({...i,length:Object.keys(i).length})),_[a]({jobId:t,data:n})}else if("reject"===n){if(S[a](i),"load"===r&&T(i),!b)throw Error(i);b(i)}else"progress"===n&&y({...i,userJobId:t})}));const J={id:g,worker:F,setResolve:O,setReject:D,load:N,writeText:L,readText:M,removeFile:B,FS:W,loadLanguage:j,initialize:U,reinitialize:z,setParameters:H,recognize:q,getPDF:G,detect:Y,terminate:X};return V().then((()=>$(e))).then((()=>K(e,t,m))).then((()=>x(J))).catch((()=>{})),A}},4995:function(e,t,n){n(4493);const r=n(882),o=n(2477),i=n(7465),s=n(2646),a=n(9742),l=n(949),{setLogging:u}=n(8787);e.exports={languages:s,OEM:a,PSM:l,createScheduler:r,createWorker:o,setLogging:u,...i}},4760:function(e){e.exports=e=>{const t=[],n=[],r=[],o=[],i=[];return e.blocks&&e.blocks.forEach((s=>{s.paragraphs.forEach((t=>{t.lines.forEach((n=>{n.words.forEach((r=>{r.symbols.forEach((o=>{i.push({...o,page:e,block:s,paragraph:t,line:n,word:r})})),o.push({...r,page:e,block:s,paragraph:t,line:n})})),r.push({...n,page:e,block:s,paragraph:t})})),n.push({...t,page:e,block:s})})),t.push({...s,page:e})})),{...e,blocks:t,paragraphs:n,lines:r,words:o,symbols:i}}},3820:function(e,t,n){const r=n(4866);e.exports=e=>{const t={};return"undefined"!==typeof WorkerGlobalScope?t.type="webworker":r()?t.type="electron":"object"===typeof document?t.type="browser":"object"===typeof process&&(t.type="node"),"undefined"===typeof e?t:t[e]}},1028:function(e){e.exports=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`},8787:function(e,t){let n=!1;t.logging=n,t.setLogging=e=>{n=e},t.log=(...e)=>n?console.log.apply(this,e):null},5981:function(e,t,n){const r="browser"===n(3820)("type"),o=r?e=>new URL(e,window.location.href).href:e=>e;e.exports=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach((n=>{e[n]&&(t[n]=o(t[n]))})),t}},1848:function(e,t,n){const r=n(6125).rE,o=n(4500);e.exports={...o,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${r}/dist/worker.min.js`}},5321:function(e,t,n){const r=n(1848),o=n(7456),i=n(9548),s=n(5381),a=n(5039),l=n(9996);e.exports={defaultOptions:r,spawnWorker:o,terminateWorker:i,onMessage:s,send:a,loadImage:l}},9996:function(e){const t=e=>new Promise(((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:e}}})=>{n(Error(`File could not be read! Code=${e}`))},r.readAsArrayBuffer(e)})),n=async e=>{let r=e;if("undefined"===typeof e)return"undefined";if("string"===typeof e)if(/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e))r=atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0)));else{const t=await fetch(e);r=await t.arrayBuffer()}else if("undefined"!==typeof HTMLElement&&e instanceof HTMLElement)"IMG"===e.tagName&&(r=await n(e.src)),"VIDEO"===e.tagName&&(r=await n(e.poster)),"CANVAS"===e.tagName&&await new Promise((n=>{e.toBlob((async e=>{r=await t(e),n()}))}));else if("undefined"!==typeof OffscreenCanvas&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();r=await t(n)}else(e instanceof File||e instanceof Blob)&&(r=await t(e));return new Uint8Array(r)};e.exports=n},5381:function(e){e.exports=(e,t)=>{e.onmessage=({data:e})=>{t(e)}}},5039:function(e){e.exports=async(e,t)=>{e.postMessage(t)}},7456:function(e){e.exports=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){const t=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(t))}else n=new Worker(e);return n}},9548:function(e){e.exports=e=>{e.terminate()}},1021:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!e.vueAxiosInstalled){var n=a(t)?l(t):t;if(u(n)){var r=c(e);if(r){var o=r<3?i:s;Object.keys(n).forEach((function(t){o(e,t,n[t])})),e.vueAxiosInstalled=!0}else console.error("[vue-axios] unknown Vue version")}else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")}}function i(e,t,n){Object.defineProperty(e.prototype,t,{get:function(){return n}}),e[t]=n}function s(e,t,n){e.config.globalProperties[t]=n,e[t]=n}function a(e){return e&&"function"==typeof e.get&&"function"==typeof e.post}function l(e){return{axios:e,$http:e}}function u(e){return"object"===r(e)&&Object.keys(e).every((function(t){return a(e[t])}))}function c(e){return e&&e.version&&Number(e.version.split(".")[0])}n.d(t,{A:function(){return o}}),e=n.hmd(e),"object"==("undefined"==typeof exports?"undefined":r(exports))?e.exports=o:"function"==typeof define&&n.amdO?define([],(function(){return o})):window.Vue&&window.axios&&window.Vue.use&&Vue.use(o,window.axios)},6262:function(e,t){"use strict";t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},9306:function(e,t,n){"use strict";var r=n(4901),o=n(6823),i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not a function")}},679:function(e,t,n){"use strict";var r=n(1625),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new o("Incorrect invocation")}},8551:function(e,t,n){"use strict";var r=n(34),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not an object")}},9617:function(e,t,n){"use strict";var r=n(5397),o=n(5610),i=n(6198),s=function(e){return function(t,n,s){var a=r(t),l=i(a);if(0===l)return!e&&-1;var u,c=o(s,l);if(e&&n!==n){while(l>c)if(u=a[c++],u!==u)return!0}else for(;l>c;c++)if((e||c in a)&&a[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},4527:function(e,t,n){"use strict";var r=n(3724),o=n(4376),i=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(o(e)&&!s(e,"length").writable)throw new i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},6319:function(e,t,n){"use strict";var r=n(8551),o=n(9539);e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(s){o(e,"throw",s)}}},2195:function(e,t,n){"use strict";var r=n(9504),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},7740:function(e,t,n){"use strict";var r=n(9297),o=n(5031),i=n(7347),s=n(4913);e.exports=function(e,t,n){for(var a=o(t),l=s.f,u=i.f,c=0;c<a.length;c++){var d=a[c];r(e,d)||n&&r(n,d)||l(e,d,u(t,d))}}},2211:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},2529:function(e){"use strict";e.exports=function(e,t){return{value:e,done:t}}},6699:function(e,t,n){"use strict";var r=n(3724),o=n(4913),i=n(6980);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},4659:function(e,t,n){"use strict";var r=n(3724),o=n(4913),i=n(6980);e.exports=function(e,t,n){r?o.f(e,t,i(0,n)):e[t]=n}},2106:function(e,t,n){"use strict";var r=n(283),o=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},6840:function(e,t,n){"use strict";var r=n(4901),o=n(4913),i=n(283),s=n(9433);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&i(n,u,a),a.global)l?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(c){}l?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},6279:function(e,t,n){"use strict";var r=n(6840);e.exports=function(e,t,n){for(var o in t)r(e,o,t[o],n);return e}},9433:function(e,t,n){"use strict";var r=n(4576),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(e,t,n){"use strict";var r=n(4576),o=n(34),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},6837:function(e){"use strict";var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},8727:function(e){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2839:function(e,t,n){"use strict";var r=n(4576),o=r.navigator,i=o&&o.userAgent;e.exports=i?String(i):""},9519:function(e,t,n){"use strict";var r,o,i=n(4576),s=n(2839),a=i.process,l=i.Deno,u=a&&a.versions||l&&l.version,c=u&&u.v8;c&&(r=c.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},6518:function(e,t,n){"use strict";var r=n(4576),o=n(7347).f,i=n(6699),s=n(6840),a=n(9433),l=n(7740),u=n(2796);e.exports=function(e,t){var n,c,d,h,f,p,v=e.target,m=e.global,g=e.stat;if(c=m?r:g?r[v]||a(v,{}):r[v]&&r[v].prototype,c)for(d in t){if(f=t[d],e.dontCallGetSet?(p=o(c,d),h=p&&p.value):h=c[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==h){if(typeof f==typeof h)continue;l(f,h)}(e.sham||h&&h.sham)&&i(f,"sham",!0),s(c,d,f,e)}}},9039:function(e){"use strict";e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){"use strict";var r=n(616),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},350:function(e,t,n){"use strict";var r=n(3724),o=n(9297),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),l=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:u}},9504:function(e,t,n){"use strict";var r=n(616),o=Function.prototype,i=o.call,s=r&&o.bind.bind(i,i);e.exports=r?s:function(e){return function(){return i.apply(e,arguments)}}},7751:function(e,t,n){"use strict";var r=n(4576),o=n(4901),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},1767:function(e){"use strict";e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},5966:function(e,t,n){"use strict";var r=n(9306),o=n(4117);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},4576:function(e,t,n){"use strict";var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){"use strict";var r=n(9504),o=n(8981),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},421:function(e){"use strict";e.exports={}},397:function(e,t,n){"use strict";var r=n(7751);e.exports=r("document","documentElement")},5917:function(e,t,n){"use strict";var r=n(3724),o=n(9039),i=n(4055);e.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){"use strict";var r=n(9504),o=n(9039),i=n(2195),s=Object,a=r("".split);e.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?a(e,""):s(e)}:s},3706:function(e,t,n){"use strict";var r=n(9504),o=n(4901),i=n(7629),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},1181:function(e,t,n){"use strict";var r,o,i,s=n(8622),a=n(4576),l=n(34),u=n(6699),c=n(9297),d=n(7629),h=n(6119),f=n(421),p="Object already initialized",v=a.TypeError,m=a.WeakMap,g=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw new v("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var b=d.state||(d.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new v(p);return t.facade=e,b.set(e,t),t},o=function(e){return b.get(e)||{}},i=function(e){return b.has(e)}}else{var w=h("state");f[w]=!0,r=function(e,t){if(c(e,w))throw new v(p);return t.facade=e,u(e,w,t),t},o=function(e){return c(e,w)?e[w]:{}},i=function(e){return c(e,w)}}e.exports={set:r,get:o,has:i,enforce:g,getterFor:y}},4376:function(e,t,n){"use strict";var r=n(2195);e.exports=Array.isArray||function(e){return"Array"===r(e)}},4901:function(e){"use strict";var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){"use strict";var r=n(9039),o=n(4901),i=/#|\.prototype\./,s=function(e,t){var n=l[a(e)];return n===c||n!==u&&(o(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=s.data={},u=s.NATIVE="N",c=s.POLYFILL="P";e.exports=s},4117:function(e){"use strict";e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){"use strict";var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},6395:function(e){"use strict";e.exports=!1},757:function(e,t,n){"use strict";var r=n(7751),o=n(4901),i=n(1625),s=n(7040),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,a(e))}},9539:function(e,t,n){"use strict";var r=n(9565),o=n(8551),i=n(5966);e.exports=function(e,t,n){var s,a;o(e);try{if(s=i(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(l){a=!0,s=l}if("throw"===t)throw n;if(a)throw s;return o(s),n}},9462:function(e,t,n){"use strict";var r=n(9565),o=n(2360),i=n(6699),s=n(6279),a=n(8227),l=n(1181),u=n(5966),c=n(7657).IteratorPrototype,d=n(2529),h=n(9539),f=a("toStringTag"),p="IteratorHelper",v="WrapForValidIterator",m=l.set,g=function(e){var t=l.getterFor(e?v:p);return s(o(c),{next:function(){var n=t(this);if(e)return n.nextHandler();try{var r=n.done?void 0:n.nextHandler();return d(r,n.done)}catch(o){throw n.done=!0,o}},return:function(){var n=t(this),o=n.iterator;if(n.done=!0,e){var i=u(o,"return");return i?r(i,o):d(void 0,!0)}if(n.inner)try{h(n.inner.iterator,"normal")}catch(s){return h(o,"throw",s)}return o&&h(o,"normal"),d(void 0,!0)}})},y=g(!0),b=g(!1);i(b,f,"Iterator Helper"),e.exports=function(e,t){var n=function(n,r){r?(r.iterator=n.iterator,r.next=n.next):r=n,r.type=t?v:p,r.nextHandler=e,r.counter=0,r.done=!1,m(this,r)};return n.prototype=t?y:b,n}},713:function(e,t,n){"use strict";var r=n(9565),o=n(9306),i=n(8551),s=n(1767),a=n(9462),l=n(6319),u=a((function(){var e=this.iterator,t=i(r(this.next,e)),n=this.done=!!t.done;if(!n)return l(e,this.mapper,[t.value,this.counter++],!0)}));e.exports=function(e){return i(this),o(e),new u(s(this),{mapper:e})}},7657:function(e,t,n){"use strict";var r,o,i,s=n(9039),a=n(4901),l=n(34),u=n(2360),c=n(2787),d=n(6840),h=n(8227),f=n(6395),p=h("iterator"),v=!1;[].keys&&(i=[].keys(),"next"in i?(o=c(c(i)),o!==Object.prototype&&(r=o)):v=!0);var m=!l(r)||s((function(){var e={};return r[p].call(e)!==e}));m?r={}:f&&(r=u(r)),a(r[p])||d(r,p,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},6198:function(e,t,n){"use strict";var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){"use strict";var r=n(9504),o=n(9039),i=n(4901),s=n(9297),a=n(3724),l=n(350).CONFIGURABLE,u=n(3706),c=n(1181),d=c.enforce,h=c.get,f=String,p=Object.defineProperty,v=r("".slice),m=r("".replace),g=r([].join),y=a&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===v(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||l&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=d(e);return s(r,"source")||(r.source=g(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return i(this)&&h(this).source||u(this)}),"toString")},741:function(e){"use strict";var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2360:function(e,t,n){"use strict";var r,o=n(8551),i=n(6801),s=n(8727),a=n(421),l=n(397),u=n(4055),c=n(6119),d=">",h="<",f="prototype",p="script",v=c("IE_PROTO"),m=function(){},g=function(e){return h+p+d+e+h+"/"+p+d},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=s.length;while(e--)delete w[f][s[e]];return w()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=o(e),n=new m,m[f]=null,n[v]=e):n=w(),void 0===t?n:i.f(n,t)}},6801:function(e,t,n){"use strict";var r=n(3724),o=n(8686),i=n(4913),s=n(8551),a=n(5397),l=n(1072);t.f=r&&!o?Object.defineProperties:function(e,t){s(e);var n,r=a(t),o=l(t),u=o.length,c=0;while(u>c)i.f(e,n=o[c++],r[n]);return e}},4913:function(e,t,n){"use strict";var r=n(3724),o=n(5917),i=n(8686),s=n(8551),a=n(6969),l=TypeError,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",f="writable";t.f=r?i?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=c(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){"use strict";var r=n(3724),o=n(9565),i=n(8773),s=n(6980),a=n(5397),l=n(6969),u=n(9297),c=n(5917),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=l(t),c)try{return d(e,t)}catch(n){}if(u(e,t))return s(!o(i.f,e,t),e[t])}},8480:function(e,t,n){"use strict";var r=n(1828),o=n(8727),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},3717:function(e,t){"use strict";t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){"use strict";var r=n(9297),o=n(4901),i=n(8981),s=n(6119),a=n(2211),l=s("IE_PROTO"),u=Object,c=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=i(e);if(r(t,l))return t[l];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof u?c:null}},1625:function(e,t,n){"use strict";var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){"use strict";var r=n(9504),o=n(9297),i=n(5397),s=n(9617).indexOf,a=n(421),l=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,c=[];for(n in r)!o(a,n)&&o(r,n)&&l(c,n);while(t.length>u)o(r,n=t[u++])&&(~s(c,n)||l(c,n));return c}},1072:function(e,t,n){"use strict";var r=n(1828),o=n(8727);e.exports=Object.keys||function(e){return r(e,o)}},8773:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},4270:function(e,t,n){"use strict";var r=n(9565),o=n(4901),i=n(34),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&o(n=e.toString)&&!i(a=r(n,e)))return a;if(o(n=e.valueOf)&&!i(a=r(n,e)))return a;if("string"!==t&&o(n=e.toString)&&!i(a=r(n,e)))return a;throw new s("Can't convert object to primitive value")}},5031:function(e,t,n){"use strict";var r=n(7751),o=n(9504),i=n(8480),s=n(3717),a=n(8551),l=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=s.f;return n?l(t,n(e)):t}},7750:function(e,t,n){"use strict";var r=n(4117),o=TypeError;e.exports=function(e){if(r(e))throw new o("Can't call method on "+e);return e}},6119:function(e,t,n){"use strict";var r=n(5745),o=n(3392),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},7629:function(e,t,n){"use strict";var r=n(6395),o=n(4576),i=n(9433),s="__core-js_shared__",a=e.exports=o[s]||i(s,{});(a.versions||(a.versions=[])).push({version:"3.39.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){"use strict";var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},4495:function(e,t,n){"use strict";var r=n(9519),o=n(9039),i=n(4576),s=i.String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){"use strict";var r=n(1291),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5397:function(e,t,n){"use strict";var r=n(7055),o=n(7750);e.exports=function(e){return r(o(e))}},1291:function(e,t,n){"use strict";var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){"use strict";var r=n(1291),o=Math.min;e.exports=function(e){var t=r(e);return t>0?o(t,9007199254740991):0}},8981:function(e,t,n){"use strict";var r=n(7750),o=Object;e.exports=function(e){return o(r(e))}},2777:function(e,t,n){"use strict";var r=n(9565),o=n(34),i=n(757),s=n(5966),a=n(4270),l=n(8227),u=TypeError,c=l("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,l=s(e,c);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){"use strict";var r=n(2777),o=n(757);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},6823:function(e){"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){"use strict";var r=n(9504),o=0,i=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},7040:function(e,t,n){"use strict";var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){"use strict";var r=n(3724),o=n(9039);e.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8622:function(e,t,n){"use strict";var r=n(4576),o=n(4901),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},8227:function(e,t,n){"use strict";var r=n(4576),o=n(5745),i=n(9297),s=n(3392),a=n(4495),l=n(7040),u=r.Symbol,c=o("wks"),d=l?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return i(c,e)||(c[e]=a&&i(u,e)?u[e]:d("Symbol."+e)),c[e]}},4114:function(e,t,n){"use strict";var r=n(6518),o=n(8981),i=n(6198),s=n(4527),a=n(6837),l=n(9039),u=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=u||!c();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=o(this),n=i(t),r=arguments.length;a(n+r);for(var l=0;l<r;l++)t[n]=arguments[l],n++;return s(t,n),n}})},8111:function(e,t,n){"use strict";var r=n(6518),o=n(4576),i=n(679),s=n(8551),a=n(4901),l=n(2787),u=n(2106),c=n(4659),d=n(9039),h=n(9297),f=n(8227),p=n(7657).IteratorPrototype,v=n(3724),m=n(6395),g="constructor",y="Iterator",b=f("toStringTag"),w=TypeError,_=o[y],S=m||!a(_)||_.prototype!==p||!d((function(){_({})})),E=function(){if(i(this,p),l(this)===p)throw new w("Abstract class Iterator not directly constructable")},C=function(e,t){v?u(p,e,{configurable:!0,get:function(){return t},set:function(t){if(s(this),this===p)throw new w("You can't redefine this property");h(this,e)?this[e]=t:c(this,e,t)}}):p[e]=t};h(p,b)||C(b,y),!S&&h(p,g)&&p[g]!==Object||C(g,E),E.prototype=p,r({global:!0,constructor:!0,forced:S},{Iterator:E})},2489:function(e,t,n){"use strict";var r=n(6518),o=n(9565),i=n(9306),s=n(8551),a=n(1767),l=n(9462),u=n(6319),c=n(6395),d=l((function(){var e,t,n,r=this.iterator,i=this.predicate,a=this.next;while(1){if(e=s(o(a,r)),t=this.done=!!e.done,t)return;if(n=e.value,u(r,i,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:c},{filter:function(e){return s(this),i(e),new d(a(this),{predicate:e})}})},1701:function(e,t,n){"use strict";var r=n(6518),o=n(713),i=n(6395);r({target:"Iterator",proto:!0,real:!0,forced:i},{map:o})},8992:function(e,t,n){"use strict";n(8111)},4520:function(e,t,n){"use strict";n(2489)},1454:function(e,t,n){"use strict";n(1701)},9928:function(e,t,n){"use strict";n.d(t,{MF:function(){return be},j6:function(){return pe},xZ:function(){return ve},om:function(){return fe},Sx:function(){return _e},Wp:function(){return we},KO:function(){return Se}});var r=n(5125),o=n(3424),i=n(6743);const s=(e,t)=>t.some((t=>e instanceof t));let a,l;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,v=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(S(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),v.set(t,e),t}function g(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));h.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return S(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(E(this),t),S(d.get(this))}:function(...t){return S(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),S(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&g(e),s(e,u())?new Proxy(e,y):e)}function S(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),v.set(t,e)),t}const E=e=>v.get(e);function C(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=S(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(S(s.result),e.oldVersion,e.newVersion,S(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],T=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!k.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return T.set(t,i),i}b((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const F="@firebase/app",O="0.10.15",D=new o.Vy("@firebase/app"),P="@firebase/app-compat",N="@firebase/analytics-compat",V="@firebase/analytics",L="@firebase/app-check-compat",M="@firebase/app-check",B="@firebase/auth",W="@firebase/auth-compat",j="@firebase/database",$="@firebase/data-connect",U="@firebase/database-compat",K="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",q="@firebase/installations-compat",G="@firebase/messaging",Y="@firebase/messaging-compat",X="@firebase/performance",J="@firebase/performance-compat",Q="@firebase/remote-config",Z="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",re="@firebase/vertexai",oe="@firebase/firestore-compat",ie="firebase",se="11.0.1",ae="[DEFAULT]",le={[F]:"fire-core",[P]:"fire-core-compat",[V]:"fire-analytics",[N]:"fire-analytics-compat",[M]:"fire-app-check",[L]:"fire-app-check-compat",[B]:"fire-auth",[W]:"fire-auth-compat",[j]:"fire-rtdb",[$]:"fire-data-connect",[U]:"fire-rtdb-compat",[K]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[q]:"fire-iid-compat",[G]:"fire-fcm",[Y]:"fire-fcm-compat",[X]:"fire-perf",[J]:"fire-perf-compat",[Q]:"fire-rc",[Z]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[oe]:"fire-fst-compat",[re]:"fire-vertex","fire-js":"fire-js",[ie]:"fire-js-all"},ue=new Map,ce=new Map,de=new Map;function he(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fe(e){const t=e.name;if(de.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;de.set(t,e);for(const n of ue.values())he(n,e);for(const n of ce.values())he(n,e);return!0}function pe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ve(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ge=new i.FA("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be=se;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:ae,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!==typeof s||!s)throw ge.create("bad-app-name",{appName:String(s)});if(n||(n=(0,i.T9)()),!n)throw ge.create("no-options");const a=ue.get(s);if(a){if((0,i.bD)(n,a.options)&&(0,i.bD)(o,a.config))return a;throw ge.create("duplicate-app",{appName:s})}const l=new r.h1(s);for(const r of de.values())l.addComponent(r);const u=new ye(n,o,l);return ue.set(s,u),u}function _e(e=ae){const t=ue.get(e);if(!t&&e===ae&&(0,i.T9)())return we();if(!t)throw ge.create("no-app",{appName:e});return t}function Se(e,t,n){var o;let i=null!==(o=le[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}fe(new r.uA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ee="firebase-heartbeat-database",Ce=1,ke="firebase-heartbeat-store";let Ie=null;function Te(){return Ie||(Ie=C(Ee,Ce,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ke)}catch(n){console.warn(n)}}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function xe(e){try{const t=await Te(),n=t.transaction(ke),r=await n.objectStore(ke).get(Re(e));return await n.done,r}catch(t){if(t instanceof i.g)D.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ae(e,t){try{const n=await Te(),r=n.transaction(ke,"readwrite"),o=r.objectStore(ke);await o.put(t,Re(e)),await r.done}catch(n){if(n instanceof i.g)D.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=1024,Oe=2592e6;class De{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ve(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),o=Pe();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some((e=>e.date===o)))return;return this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Oe})),this._storage.overwrite(this._heartbeatsCache)}catch(n){D.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pe(),{heartbeatsToSend:n,unsentEntries:r}=Ne(this._heartbeatsCache.heartbeats),o=(0,i.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return D.warn(t),""}}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Ne(e,t=Fe){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Le(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Le(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ve{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await xe(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Le(e){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){fe(new r.uA("platform-logger",(e=>new A(e)),"PRIVATE")),fe(new r.uA("heartbeat",(e=>new De(e)),"PRIVATE")),Se(F,O,e),Se(F,O,"esm2017"),Se("fire-js","")}Me("")},5125:function(e,t,n){"use strict";n.d(t,{h1:function(){return u},uA:function(){return o}});var r=n(6743);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3424:function(e,t,n){"use strict";n.d(t,{$b:function(){return o},Vy:function(){return u}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},4335:function(e,t,n){"use strict";n.d(t,{A:function(){return bn}});var r={};function o(e,t){return function(){return e.apply(t,arguments)}}n.r(r),n.d(r,{hasBrowserEnv:function(){return Me},hasStandardBrowserEnv:function(){return We},hasStandardBrowserWebWorkerEnv:function(){return je},navigator:function(){return Be},origin:function(){return $e}});const{toString:i}=Object.prototype,{getPrototypeOf:s}=Object,a=(e=>t=>{const n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),l=e=>(e=e.toLowerCase(),t=>a(t)===e),u=e=>t=>typeof t===e,{isArray:c}=Array,d=u("undefined");function h(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const f=l("ArrayBuffer");function p(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t}const v=u("string"),m=u("function"),g=u("number"),y=e=>null!==e&&"object"===typeof e,b=e=>!0===e||!1===e,w=e=>{if("object"!==a(e))return!1;const t=s(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_=l("Date"),S=l("File"),E=l("Blob"),C=l("FileList"),k=e=>y(e)&&m(e.pipe),I=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=a(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},T=l("URLSearchParams"),[x,A,R,F]=["ReadableStream","Request","Response","Headers"].map(l),O=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),c(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function P(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}const N=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),V=e=>!d(e)&&e!==N;function L(){const{caseless:e}=V(this)&&this||{},t={},n=(n,r)=>{const o=e&&P(t,r)||r;w(t[o])&&w(n)?t[o]=L(t[o],n):w(n)?t[o]=L({},n):c(n)?t[o]=n.slice():t[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&D(arguments[r],n);return t}const M=(e,t,n,{allOwnKeys:r}={})=>(D(t,((t,r)=>{n&&m(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),B=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),W=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},j=(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),i=o.length;while(i-- >0)a=o[i],r&&!r(a,e,t)||l[a]||(t[a]=e[a],l[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},U=e=>{if(!e)return null;if(c(e))return e;let t=e.length;if(!g(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},K=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&s(Uint8Array)),z=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},H=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},q=l("HTMLFormElement"),G=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),Y=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),X=l("RegExp"),J=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},Q=e=>{J(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Z=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return c(e)?r(e):r(String(e).split(t)),n},ee=()=>{},te=(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",re="0123456789",oe={DIGIT:re,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+re},ie=(e=16,t=oe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function se(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const ae=e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=c(e)?[]:{};return D(e,((e,t)=>{const i=n(e,r+1);!d(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},le=l("AsyncFunction"),ue=e=>e&&(y(e)||m(e))&&m(e.then)&&m(e.catch),ce=((e,t)=>e?setImmediate:t?((e,t)=>(N.addEventListener("message",(({source:n,data:r})=>{n===N&&r===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),N.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))("function"===typeof setImmediate,m(N.postMessage)),de="undefined"!==typeof queueMicrotask?queueMicrotask.bind(N):"undefined"!==typeof process&&process.nextTick||ce;var he={isArray:c,isArrayBuffer:f,isBuffer:h,isFormData:I,isArrayBufferView:p,isString:v,isNumber:g,isBoolean:b,isObject:y,isPlainObject:w,isReadableStream:x,isRequest:A,isResponse:R,isHeaders:F,isUndefined:d,isDate:_,isFile:S,isBlob:E,isRegExp:X,isFunction:m,isStream:k,isURLSearchParams:T,isTypedArray:K,isFileList:C,forEach:D,merge:L,extend:M,trim:O,stripBOM:B,inherits:W,toFlatObject:j,kindOf:a,kindOfTest:l,endsWith:$,toArray:U,forEachEntry:z,matchAll:H,isHTMLForm:q,hasOwnProperty:Y,hasOwnProp:Y,reduceDescriptors:J,freezeMethods:Q,toObjectSet:Z,toCamelCase:G,noop:ee,toFiniteNumber:te,findKey:P,global:N,isContextDefined:V,ALPHABET:oe,generateString:ie,isSpecCompliantForm:se,toJSONObject:ae,isAsyncFn:le,isThenable:ue,setImmediate:ce,asap:de};function fe(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}he.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:he.toJSONObject(this.config),code:this.code,status:this.status}}});const pe=fe.prototype,ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ve[e]={value:e}})),Object.defineProperties(fe,ve),Object.defineProperty(pe,"isAxiosError",{value:!0}),fe.from=(e,t,n,r,o,i)=>{const s=Object.create(pe);return he.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),fe.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var me=fe,ge=null;function ye(e){return he.isPlainObject(e)||he.isArray(e)}function be(e){return he.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map((function(e,t){return e=be(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function _e(e){return he.isArray(e)&&!e.some(ye)}const Se=he.toFlatObject(he,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Ee(e,t,n){if(!he.isObject(e))throw new TypeError("target must be an object");t=t||new(ge||FormData),n=he.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!he.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||c,i=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,l=a&&he.isSpecCompliantForm(t);if(!he.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(he.isDate(e))return e.toISOString();if(!l&&he.isBlob(e))throw new me("Blob is not supported. Use a Buffer instead.");return he.isArrayBuffer(e)||he.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,o){let a=e;if(e&&!o&&"object"===typeof e)if(he.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(he.isArray(e)&&_e(e)||(he.isFileList(e)||he.endsWith(n,"[]"))&&(a=he.toArray(e)))return n=be(n),a.forEach((function(e,r){!he.isUndefined(e)&&null!==e&&t.append(!0===s?we([n],r,i):null===s?n:n+"[]",u(e))})),!1;return!!ye(e)||(t.append(we(o,n,i),u(e)),!1)}const d=[],h=Object.assign(Se,{defaultVisitor:c,convertValue:u,isVisitable:ye});function f(e,n){if(!he.isUndefined(e)){if(-1!==d.indexOf(e))throw Error("Circular reference detected in "+n.join("."));d.push(e),he.forEach(e,(function(e,r){const i=!(he.isUndefined(e)||null===e)&&o.call(t,e,he.isString(r)?r.trim():r,n,h);!0===i&&f(e,n?n.concat(r):[r])})),d.pop()}}if(!he.isObject(e))throw new TypeError("data must be an object");return f(e),t}var Ce=Ee;function ke(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ie(e,t){this._pairs=[],e&&Ce(e,this,t)}const Te=Ie.prototype;Te.append=function(e,t){this._pairs.push([e,t])},Te.toString=function(e){const t=e?function(t){return e.call(this,t,ke)}:ke;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var xe=Ie;function Ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Re(e,t,n){if(!t)return e;const r=n&&n.encode||Ae,o=n&&n.serialize;let i;if(i=o?o(t,n):he.isURLSearchParams(t)?t.toString():new xe(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}class Fe{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){he.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Oe=Fe,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pe="undefined"!==typeof URLSearchParams?URLSearchParams:xe,Ne="undefined"!==typeof FormData?FormData:null,Ve="undefined"!==typeof Blob?Blob:null,Le={isBrowser:!0,classes:{URLSearchParams:Pe,FormData:Ne,Blob:Ve},protocols:["http","https","file","blob","url","data"]};const Me="undefined"!==typeof window&&"undefined"!==typeof document,Be="object"===typeof navigator&&navigator||void 0,We=Me&&(!Be||["ReactNative","NativeScript","NS"].indexOf(Be.product)<0),je=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),$e=Me&&window.location.href||"http://localhost";var Ue={...r,...Le};function Ke(e,t){return Ce(e,new Ue.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Ue.isNode&&he.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function ze(e){return he.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function He(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function qe(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&he.isArray(r)?r.length:i,a)return he.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s;r[i]&&he.isObject(r[i])||(r[i]=[]);const l=t(e,n,r[i],o);return l&&he.isArray(r[i])&&(r[i]=He(r[i])),!s}if(he.isFormData(e)&&he.isFunction(e.entries)){const n={};return he.forEachEntry(e,((e,r)=>{t(ze(e),r,n,0)})),n}return null}var Ge=qe;function Ye(e,t,n){if(he.isString(e))try{return(t||JSON.parse)(e),he.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const Xe={transitional:De,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=he.isObject(e);o&&he.isHTMLForm(e)&&(e=new FormData(e));const i=he.isFormData(e);if(i)return r?JSON.stringify(Ge(e)):e;if(he.isArrayBuffer(e)||he.isBuffer(e)||he.isStream(e)||he.isFile(e)||he.isBlob(e)||he.isReadableStream(e))return e;if(he.isArrayBufferView(e))return e.buffer;if(he.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Ke(e,this.formSerializer).toString();if((s=he.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ce(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),Ye(e)):e}],transformResponse:[function(e){const t=this.transitional||Xe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(he.isResponse(e)||he.isReadableStream(e))return e;if(e&&he.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,i=!n&&r;try{return JSON.parse(e)}catch(o){if(i){if("SyntaxError"===o.name)throw me.from(o,me.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ue.classes.FormData,Blob:Ue.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};he.forEach(["delete","get","head","post","put","patch"],(e=>{Xe.headers[e]={}}));var Je=Xe;const Qe=he.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ze=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Qe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const et=Symbol("internals");function tt(e){return e&&String(e).trim().toLowerCase()}function nt(e){return!1===e||null==e?e:he.isArray(e)?e.map(nt):String(e)}function rt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const ot=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function it(e,t,n,r,o){return he.isFunction(r)?r.call(this,t,n):(o&&(t=n),he.isString(t)?he.isString(r)?-1!==t.indexOf(r):he.isRegExp(r)?r.test(t):void 0:void 0)}function st(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function at(e,t){const n=he.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}class lt{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=tt(t);if(!o)throw new Error("header name must be a non-empty string");const i=he.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=nt(e))}const i=(e,t)=>he.forEach(e,((e,n)=>o(e,n,t)));if(he.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(he.isString(e)&&(e=e.trim())&&!ot(e))i(Ze(e),t);else if(he.isHeaders(e))for(const[s,a]of e.entries())o(a,s,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=tt(e),e){const n=he.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return rt(e);if(he.isFunction(t))return t.call(this,e,n);if(he.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=tt(e),e){const n=he.findKey(this,e);return!(!n||void 0===this[n]||t&&!it(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=tt(e),e){const o=he.findKey(n,e);!o||t&&!it(n,n[o],o,t)||(delete n[o],r=!0)}}return he.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const o=t[n];e&&!it(this,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return he.forEach(this,((r,o)=>{const i=he.findKey(n,o);if(i)return t[i]=nt(r),void delete t[o];const s=e?st(o):String(o).trim();s!==o&&delete t[o],t[s]=nt(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return he.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&he.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[et]=this[et]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=tt(e);n[t]||(at(r,e),n[t]=!0)}return he.isArray(e)?e.forEach(o):o(e),this}}lt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),he.reduceDescriptors(lt.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),he.freezeMethods(lt);var ut=lt;function ct(e,t){const n=this||Je,r=t||n,o=ut.from(r.headers);let i=r.data;return he.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function dt(e){return!(!e||!e.__CANCEL__)}function ht(e,t,n){me.call(this,null==e?"canceled":e,me.ERR_CANCELED,t,n),this.name="CanceledError"}he.inherits(ht,me,{__CANCEL__:!0});var ft=ht;function pt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new me("Request failed with status code "+n.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}function vt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),u=r[s];o||(o=l),n[i]=a,r[i]=l;let c=s,d=0;while(c!==i)d+=n[c++],c%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),l-o<t)return;const h=u&&l-u;return h?Math.round(1e3*d/h):void 0}}var gt=mt;function yt(e,t){let n,r,o=0,i=1e3/t;const s=(t,i=Date.now())=>{o=i,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)},a=(...e)=>{const t=Date.now(),a=t-o;a>=i?s(e,t):(n=e,r||(r=setTimeout((()=>{r=null,s(n)}),i-a)))},l=()=>n&&s(n);return[a,l]}var bt=yt;const wt=(e,t,n=3)=>{let r=0;const o=gt(50,250);return bt((n=>{const i=n.loaded,s=n.lengthComputable?n.total:void 0,a=i-r,l=o(a),u=i<=s;r=i;const c={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-i)/l:void 0,event:n,lengthComputable:null!=s,[t?"download":"upload"]:!0};e(c)}),n)},_t=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},St=e=>(...t)=>he.asap((()=>e(...t)));var Et=Ue.hasStandardBrowserEnv?function(){const e=Ue.navigator&&/(msie|trident)/i.test(Ue.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=he.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}(),Ct=Ue.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];he.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),he.isString(r)&&s.push("path="+r),he.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function kt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function It(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Tt(e,t){return e&&!kt(t)?It(e,t):t}const xt=e=>e instanceof ut?{...e}:e;function At(e,t){t=t||{};const n={};function r(e,t,n){return he.isPlainObject(e)&&he.isPlainObject(t)?he.merge.call({caseless:n},e,t):he.isPlainObject(t)?he.merge({},t):he.isArray(t)?t.slice():t}function o(e,t,n){return he.isUndefined(t)?he.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!he.isUndefined(t))return r(void 0,t)}function s(e,t){return he.isUndefined(t)?he.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(xt(e),xt(t),!0)};return he.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=l[r]||o,s=i(e[r],t[r],r);he.isUndefined(s)&&i!==a||(n[r]=s)})),n}var Rt=e=>{const t=At({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:s,headers:a,auth:l}=t;if(t.headers=a=ut.from(a),t.url=Re(Tt(t.baseURL,t.url),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),he.isFormData(r))if(Ue.hasStandardBrowserEnv||Ue.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(Ue.hasStandardBrowserEnv&&(o&&he.isFunction(o)&&(o=o(t)),o||!1!==o&&Et(t.url))){const e=i&&s&&Ct.read(s);e&&a.set(i,e)}return t};const Ft="undefined"!==typeof XMLHttpRequest;var Ot=Ft&&function(e){return new Promise((function(t,n){const r=Rt(e);let o=r.data;const i=ut.from(r.headers).normalize();let s,a,l,u,c,{responseType:d,onUploadProgress:h,onDownloadProgress:f}=r;function p(){u&&u(),c&&c(),r.cancelToken&&r.cancelToken.unsubscribe(s),r.signal&&r.signal.removeEventListener("abort",s)}let v=new XMLHttpRequest;function m(){if(!v)return;const r=ut.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),o=d&&"text"!==d&&"json"!==d?v.response:v.responseText,i={data:o,status:v.status,statusText:v.statusText,headers:r,config:e,request:v};pt((function(e){t(e),p()}),(function(e){n(e),p()}),i),v=null}v.open(r.method.toUpperCase(),r.url,!0),v.timeout=r.timeout,"onloadend"in v?v.onloadend=m:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(m)},v.onabort=function(){v&&(n(new me("Request aborted",me.ECONNABORTED,e,v)),v=null)},v.onerror=function(){n(new me("Network Error",me.ERR_NETWORK,e,v)),v=null},v.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||De;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new me(t,o.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,e,v)),v=null},void 0===o&&i.setContentType(null),"setRequestHeader"in v&&he.forEach(i.toJSON(),(function(e,t){v.setRequestHeader(t,e)})),he.isUndefined(r.withCredentials)||(v.withCredentials=!!r.withCredentials),d&&"json"!==d&&(v.responseType=r.responseType),f&&([l,c]=wt(f,!0),v.addEventListener("progress",l)),h&&v.upload&&([a,u]=wt(h),v.upload.addEventListener("progress",a),v.upload.addEventListener("loadend",u)),(r.cancelToken||r.signal)&&(s=t=>{v&&(n(!t||t.type?new ft(null,e,v):t),v.abort(),v=null)},r.cancelToken&&r.cancelToken.subscribe(s),r.signal&&(r.signal.aborted?s():r.signal.addEventListener("abort",s)));const g=vt(r.url);g&&-1===Ue.protocols.indexOf(g)?n(new me("Unsupported protocol "+g+":",me.ERR_BAD_REQUEST,e)):v.send(o||null)}))};const Dt=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,s();const t=e instanceof Error?e:this.reason;r.abort(t instanceof me?t:new ft(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new me(`timeout ${t} of ms exceeded`,me.ETIMEDOUT))}),t);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=()=>he.asap(s),a}};var Pt=Dt;const Nt=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;while(o<n)r=o+t,yield e.slice(o,r),o=r},Vt=async function*(e,t){for await(const n of Lt(e))yield*Nt(n,t)},Lt=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Mt=(e,t,n,r)=>{const o=Vt(e,t);let i,s=0,a=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return a(),void e.close();let i=r.byteLength;if(n){let e=s+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw a(t),t}},cancel(e){return a(e),o.return()}},{highWaterMark:2})},Bt="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Wt=Bt&&"function"===typeof ReadableStream,jt=Bt&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),$t=(e,...t)=>{try{return!!e(...t)}catch(n){return!1}},Ut=Wt&&$t((()=>{let e=!1;const t=new Request(Ue.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Kt=65536,zt=Wt&&$t((()=>he.isReadableStream(new Response("").body))),Ht={stream:zt&&(e=>e.body)};Bt&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach((t=>{!Ht[t]&&(Ht[t]=he.isFunction(e[t])?e=>e[t]():(e,n)=>{throw new me(`Response type '${t}' is not supported`,me.ERR_NOT_SUPPORT,n)})}))})(new Response);const qt=async e=>{if(null==e)return 0;if(he.isBlob(e))return e.size;if(he.isSpecCompliantForm(e)){const t=new Request(Ue.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return he.isArrayBufferView(e)||he.isArrayBuffer(e)?e.byteLength:(he.isURLSearchParams(e)&&(e+=""),he.isString(e)?(await jt(e)).byteLength:void 0)},Gt=async(e,t)=>{const n=he.toFiniteNumber(e.getContentLength());return null==n?qt(t):n};var Yt=Bt&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:h}=Rt(e);u=u?(u+"").toLowerCase():"text";let f,p=Pt([o,i&&i.toAbortSignal()],s);const v=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let m;try{if(l&&Ut&&"get"!==n&&"head"!==n&&0!==(m=await Gt(c,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(he.isFormData(r)&&(e=n.headers.get("content-type"))&&c.setContentType(e),n.body){const[e,t]=_t(m,wt(St(l)));r=Mt(n.body,Kt,e,t)}}he.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;f=new Request(t,{...h,signal:p,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:o?d:void 0});let i=await fetch(f);const s=zt&&("stream"===u||"response"===u);if(zt&&(a||s&&v)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=he.toFiniteNumber(i.headers.get("content-length")),[n,r]=a&&_t(t,wt(St(a),!0))||[];i=new Response(Mt(i.body,Kt,n,(()=>{r&&r(),v&&v()})),e)}u=u||"text";let g=await Ht[he.findKey(Ht,u)||"text"](i,e);return!s&&v&&v(),await new Promise(((t,n)=>{pt(t,n,{data:g,headers:ut.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:f})}))}catch(g){if(v&&v(),g&&"TypeError"===g.name&&/fetch/i.test(g.message))throw Object.assign(new me("Network Error",me.ERR_NETWORK,e,f),{cause:g.cause||g});throw me.from(g,g&&g.code,e,f)}});const Xt={http:ge,xhr:Ot,fetch:Yt};he.forEach(Xt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Jt=e=>`- ${e}`,Qt=e=>he.isFunction(e)||null===e||!1===e;var Zt={getAdapter:e=>{e=he.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!Qt(n)&&(r=Xt[(t=String(n)).toLowerCase()],void 0===r))throw new me(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Jt).join("\n"):" "+Jt(e[0]):"as no adapter specified";throw new me("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:Xt};function en(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ft(null,e)}function tn(e){en(e),e.headers=ut.from(e.headers),e.data=ct.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=Zt.getAdapter(e.adapter||Je.adapter);return t(e).then((function(t){return en(e),t.data=ct.call(e,e.transformResponse,t),t.headers=ut.from(t.headers),t}),(function(t){return dt(t)||(en(e),t&&t.response&&(t.response.data=ct.call(e,e.transformResponse,t.response),t.response.headers=ut.from(t.response.headers))),Promise.reject(t)}))}const nn="1.7.7",rn={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{rn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const on={};function sn(e,t,n){if("object"!==typeof e)throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new me("option "+i+" must be "+n,me.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new me("Unknown option "+i,me.ERR_BAD_OPTION)}}rn.transitional=function(e,t,n){function r(e,t){return"[Axios v"+nn+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new me(r(o," has been removed"+(t?" in "+t:"")),me.ERR_DEPRECATED);return t&&!on[o]&&(on[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var an={assertOptions:sn,validators:rn};const ln=an.validators;class un{constructor(e){this.defaults=e,this.interceptors={request:new Oe,response:new Oe}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=At(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&an.assertOptions(n,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),null!=r&&(he.isFunction(r)?t.paramsSerializer={serialize:r}:an.assertOptions(r,{encode:ln.function,serialize:ln.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&he.merge(o.common,o[t.method]);o&&he.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ut.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const l=[];let u;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let c,d=0;if(!a){const e=[tn.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,l),c=e.length,u=Promise.resolve(t);while(d<c)u=u.then(e[d++],e[d++]);return u}c=s.length;let h=t;d=0;while(d<c){const e=s[d++],t=s[d++];try{h=e(h)}catch(f){t.call(this,f);break}}try{u=tn.call(this,h)}catch(f){return Promise.reject(f)}d=0,c=l.length;while(d<c)u=u.then(l[d++],l[d++]);return u}getUri(e){e=At(this.defaults,e);const t=Tt(e.baseURL,e.url);return Re(t,e.params,e.paramsSerializer)}}he.forEach(["delete","get","head","options"],(function(e){un.prototype[e]=function(t,n){return this.request(At(n||{},{method:e,url:t,data:(n||{}).data}))}})),he.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(At(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}un.prototype[e]=t(),un.prototype[e+"Form"]=t(!0)}));var cn=un;class dn{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ft(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new dn((function(t){e=t}));return{token:t,cancel:e}}}var hn=dn;function fn(e){return function(t){return e.apply(null,t)}}function pn(e){return he.isObject(e)&&!0===e.isAxiosError}const vn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(vn).forEach((([e,t])=>{vn[t]=e}));var mn=vn;function gn(e){const t=new cn(e),n=o(cn.prototype.request,t);return he.extend(n,cn.prototype,t,{allOwnKeys:!0}),he.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return gn(At(e,t))},n}const yn=gn(Je);yn.Axios=cn,yn.CanceledError=ft,yn.CancelToken=hn,yn.isCancel=dt,yn.VERSION=nn,yn.toFormData=Ce,yn.AxiosError=me,yn.Cancel=yn.CanceledError,yn.all=function(e){return Promise.all(e)},yn.spread=fn,yn.isAxiosError=pn,yn.mergeConfig=At,yn.AxiosHeaders=ut,yn.formToJSON=e=>Ge(he.isHTMLForm(e)?new FormData(e):e),yn.getAdapter=Zt.getAdapter,yn.HttpStatusCode=mn,yn.default=yn;var bn=yn},223:function(e,t,n){"use strict";n.d(t,{Wp:function(){return r.Wp}});var r=n(9928),o="firebase",i="11.0.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(o,i,"app")},5746:function(e,t,n){"use strict";n.d(t,{eJ:function(){return Lt},xI:function(){return Jr},hg:function(){return Ut},x9:function(){return Mt},r7:function(){return Wt}});var r=n(9928),o=n(6743),i=n(3424);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(5125);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,c=new o.FA("auth","Firebase",l()),d=new i.Vy("@firebase/auth");function h(e,...t){d.logLevel<=i.$b.WARN&&d.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){d.logLevel<=i.$b.ERROR&&d.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function v(e,...t){return y(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n}),i=new o.FA("auth","Firebase",r);return i.create(t,{appName:e.name})}function g(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function b(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function _(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,o.sr)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,o.jZ)()||(0,o.lV)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},F=new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,r,i={}){return P(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=(0,o.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},i);return(0,o.c1)()||(u.referrerPolicy="no-referrer"),A.fetch()(V(e,e.config.apiHost,n,a),u)}))}async function P(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},R),t);try{const t=new M(e),o=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await o.json();if("needConfirmation"in i)throw B(e,"account-exists-with-different-credential",i);if(o.ok&&!("errorMessage"in i))return i;{const t=o.ok?i.errorMessage:i.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw B(e,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);p(e,a)}}catch(i){if(i instanceof o.g)throw i;p(e,"network-request-failed",{message:String(i)})}}async function N(e,t,n,r,o={}){const i=await D(e,t,n,r,o);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function V(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?x(e.config,o):`${e.config.apiScheme}://${o}`}function L(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class M{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(v(this.auth,"network-request-failed"))),F.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=v(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){return void 0!==e&&void 0!==e.enterprise}class j{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return L(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return D(e,"GET","/v2/recaptchaConfig",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,o.Ku)(e),r=await n.getIdToken(t),i=G(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:z(q(i.auth_time)),issuedAtTime:z(q(i.iat)),expirationTime:z(q(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function q(e){return 1e3*Number(e)}function G(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,o.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function Y(e){const t=G(e);return b(t,"internal-error"),b("undefined"!==typeof t.exp,"internal-error"),b("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof o.g&&J(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),o=await X(e,K(n,{idToken:r}));b(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?re(i.providerUserInfo):[],a=ne(e.providerData,s),l=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),c=!!l&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Z(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function te(e){const t=(0,o.Ku)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ne(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function re(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await P(e,{},(async()=>{const n=(0,o.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=V(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ie(e,t){return D(e,"POST","/v2/accounts:revokeToken",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b("undefined"!==typeof e.idToken,"internal-error"),b("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){b(0!==e.length,"internal-error");const t=Y(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new se;return n&&(b("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(b("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){b("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Z(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return te(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(g(this.auth));const e=await this.getIdToken();return await X(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:_,providerData:S,stsTokenManager:E}=t;b(y&&E,e,"internal-error");const C=se.fromJSON(this.name,E);b("string"===typeof y,e,"internal-error"),ae(c,e.name),ae(d,e.name),b("boolean"===typeof w,e,"internal-error"),b("boolean"===typeof _,e,"internal-error"),ae(h,e.name),ae(f,e.name),ae(p,e.name),ae(v,e.name),ae(m,e.name),ae(g,e.name);const k=new le({uid:y,auth:e,email:d,emailVerified:w,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:g});return S&&Array.isArray(S)&&(k.providerData=S.map((e=>Object.assign({},e)))),v&&(k._redirectEventId=v),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new se;r.updateFromServerResponse(t);const o=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(o),o}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];b(void 0!==r.localId,"internal-error");const o=void 0!==r.providerUserInfo?re(r.providerUserInfo):[],i=!(r.email&&r.passwordHash)&&!(null===o||void 0===o?void 0:o.length),s=new se;s.updateFromIdToken(n);const a=new le({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:i}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Z(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===o||void 0===o?void 0:o.length)};return Object.assign(a,l),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map;function ce(e){_(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const he=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,o),this.fullPersistenceKey=fe("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(ce(he),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=r[0]||ce(he);const i=fe(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(i);if(t){const n=le._fromJSON(e,t);u!==o&&(s=n),o=u;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(l){}}))),new pe(o,e,n)):new pe(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(Se(t))return"Webos";if(ge(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=(0,o.ZQ)()){return/firefox\//i.test(e)}function ge(e=(0,o.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,o.ZQ)()){return/crios\//i.test(e)}function be(e=(0,o.ZQ)()){return/iemobile/i.test(e)}function we(e=(0,o.ZQ)()){return/android/i.test(e)}function _e(e=(0,o.ZQ)()){return/blackberry/i.test(e)}function Se(e=(0,o.ZQ)()){return/webos/i.test(e)}function Ee(e=(0,o.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ce(e=(0,o.ZQ)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return(0,o.lT)()&&10===document.documentMode}function Ie(e=(0,o.ZQ)()){return Ee(e)||we(e)||Se(e)||_e(e)||/windows phone/i.test(e)||be(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=ve((0,o.ZQ)());break;case"Worker":n=`${ve((0,o.ZQ)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t={}){return D(e,"GET","/v2/passwordPolicy",O(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=6;class Fe{constructor(e){var t,n,r,o;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=i.minPasswordLength)&&void 0!==t?t:Re,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),void 0!==i.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),void 0!==i.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),void 0!==i.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),void 0!==i.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(o=e.forceUpgradeOnSignin)&&void 0!==o&&o,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,o,i,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(o=a.containsUppercaseLetter)||void 0===o||o),a.isValid&&(a.isValid=null===(i=a.containsNumericCharacter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.beforeStateQueue=new xe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ce(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await K(this,{idToken:e}),n=await le._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let o=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===o||void 0===o?void 0:o._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(o=s.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(s){o=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(g(this));const t=e?(0,o.Ku)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(g(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(g(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ce(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ae(this),t=new Fe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new o.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await ie(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ce(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t);let i=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(s,this,"internal-error"),s.then((()=>{i||o(this.currentUser)})),"function"===typeof t){const o=e.addObserver(t,n,r);return()=>{i=!0,o()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&h(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function De(e){return(0,o.Ku)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,o.tD)((e=>this.observer=e))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ne={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ve(e){Ne=e}function Le(e){return Ne.loadJS(e)}function Me(){return Ne.recaptchaEnterpriseScript}function Be(){return Ne.gapiScript}function We(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(){this.enterprise=new $e}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $e{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ue="recaptcha-enterprise",Ke="NO_RECAPTCHA";class ze{constructor(e){this.type=Ue,this.auth=De(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{$(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new j(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const o=window.grecaptcha;W(o)?o.enterprise.ready((()=>{o.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ke)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const e=new je;return e.execute("siteKey",{action:"verify"})}return new Promise(((e,o)=>{n(this.auth).then((n=>{if(!t&&W(window.grecaptcha))r(n,e,o);else{if("undefined"===typeof window)return void o(new Error("RecaptchaVerifier is only supported in browser"));let t=Me();0!==t.length&&(t+=n),Le(t).then((()=>{r(n,e,o)})).catch((e=>{o(e)}))}})).catch((e=>{o(e)}))}))}}async function He(e,t,n,r=!1,o=!1){const i=new ze(e);let s;if(o)s=Ke;else try{s=await i.verify(n)}catch(l){s=await i.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function qe(e,t,n,r,o){var i,s;if("EMAIL_PASSWORD_PROVIDER"===o){if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await He(e,t,n,"getOobCode"===n);return r(e,o)}return r(e,t).catch((async o=>{if("auth/missing-recaptcha-token"===o.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await He(e,t,n,"getOobCode"===n);return r(e,o)}return Promise.reject(o)}))}if("PHONE_PROVIDER"===o){if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("PHONE_PROVIDER")){const o=await He(e,t,n);return r(e,o).catch((async o=>{var i;if("AUDIT"===(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===o.code||"auth/invalid-app-credential"===o.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const o=await He(e,t,n,!1,!0);return r(e,o)}return Promise.reject(o)}))}{const o=await He(e,t,n,!1,!0);return r(e,o)}}return Promise.reject(o+" provider is not supported.")}async function Ge(e){const t=De(e),n=await $(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new j(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){const e=new ze(t);e.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,o.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const i=n.initialize({options:t});return i}function Xe(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ce);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Je(e,t,n){const r=De(e);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Qe(t),{host:s,port:a}=Ze(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||tt()}function Qe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ze(e){const t=Qe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:et(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:et(t)}}}function et(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function tt(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t){return D(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}async function st(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends nt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new at(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new at(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,t,"signInWithPassword",ot,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return it(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,n,"signUpPassword",rt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return st(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="http://localhost";class ct extends nt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new ct(n,r);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return lt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,lt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lt(e,t)}buildRequest(){const e={requestUri:ut,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,o.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",O(e,t))}async function ht(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t))}async function ft(e,t){const n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const pt={["USER_NOT_FOUND"]:"user-not-found"};async function vt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,n),pt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends nt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new mt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new mt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ht(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ft(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return vt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new mt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yt(e){const t=(0,o.I9)((0,o.hp)(e))["link"],n=t?(0,o.I9)((0,o.hp)(t))["deep_link_id"]:null,r=(0,o.I9)((0,o.hp)(e))["deep_link_id"],i=r?(0,o.I9)((0,o.hp)(r))["link"]:null;return i||r||n||t||e}class bt{constructor(e){var t,n,r,i,s,a;const l=(0,o.I9)((0,o.hp)(e)),u=null!==(t=l["apiKey"])&&void 0!==t?t:null,c=null!==(n=l["oobCode"])&&void 0!==n?n:null,d=gt(null!==(r=l["mode"])&&void 0!==r?r:null);b(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=null!==(i=l["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=l["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=yt(e);try{return new bt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(){this.providerId=wt.PROVIDER_ID}static credential(e,t){return at._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bt.parseLink(t);return b(n,"argument-error"),at._fromEmailAndCode(e,n.code,n.tenantId)}}wt.PROVIDER_ID="password",wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends _t{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends St{constructor(){super("facebook.com")}static credential(e){return ct._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch(t){return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com",Et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends St{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ct._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ct.credential(t,n)}catch(r){return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com",Ct.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends St{constructor(){super("github.com")}static credential(e){return ct._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch(t){return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com",kt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends St{constructor(){super("twitter.com")}static credential(e,t){return ct._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tt(e,t){return N(e,"POST","/v1/accounts:signUp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await le._fromIdTokenResponse(e,n,r),i=At(n),s=new xt({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=At(n);return new xt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function At(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt extends o.g{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Rt.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Rt(e,t,n,r)}}function Ft(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Rt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dt(e,t,n=!1){const{auth:o}=e;if((0,r.xZ)(o.app))return Promise.reject(g(o));const i="reauthenticate";try{const r=await X(e,Ft(o,i,t,e),n);b(r.idToken,o,"internal-error");const s=G(r.idToken);b(s,o,"internal-error");const{sub:a}=s;return b(e.uid===a,o,"user-mismatch"),xt._forOperation(e,i,r)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(o,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(g(e));const o="signIn",i=await Ft(e,o,t),s=await xt._fromIdTokenResponse(e,o,i);return n||await e._updateCurrentUser(s.user),s}async function Nt(e,t){return Pt(De(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Vt(e){const t=De(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Lt(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(g(e));const o=De(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},s=qe(o,i,"signUpPassword",Tt,"EMAIL_PASSWORD_PROVIDER"),a=await s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Vt(e),t})),l=await xt._fromIdTokenResponse(o,"signIn",a);return await o._updateCurrentUser(l.user),l}function Mt(e,t,n){return(0,r.xZ)(e.app)?Promise.reject(g(e)):Nt((0,o.Ku)(e),wt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Vt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Bt(e,t){return D(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,o.Ku)(e),i=await r.getIdToken(),s={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},a=await X(r,Bt(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find((({providerId:e})=>"password"===e));l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function jt(e,t,n,r){return(0,o.Ku)(e).onIdTokenChanged(t,n,r)}function $t(e,t,n){return(0,o.Ku)(e).beforeAuthStateChanged(t,n)}function Ut(e,t,n,r){return(0,o.Ku)(e).onAuthStateChanged(t,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}function zt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}function Ht(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}function qt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}new WeakMap;const Gt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gt,"1"),this.storage.removeItem(Gt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=1e3,Jt=10;class Qt extends Yt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ie(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);ke()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Jt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Xt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qt.type="LOCAL";const Zt=Qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Yt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}en.type="SESSION";const tn=en;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new rn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map((async e=>e(t.origin,o))),a=await nn(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.receivers=[];class sn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise(((s,a)=>{const l=on("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(u),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function ln(e){an().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return"undefined"!==typeof an()["WorkerGlobalScope"]&&"function"===typeof an()["importScripts"]}async function cn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function dn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function hn(){return un()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="firebaseLocalStorageDb",pn=1,vn="firebaseLocalStorage",mn="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function yn(e,t){return e.transaction([vn],t?"readwrite":"readonly").objectStore(vn)}function bn(){const e=indexedDB.deleteDatabase(fn);return new gn(e).toPromise()}function wn(){const e=indexedDB.open(fn,pn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(vn,{keyPath:mn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(vn)?t(n):(n.close(),await bn(),t(await wn()))}))}))}async function _n(e,t,n){const r=yn(e,!0).put({[mn]:t,value:n});return new gn(r).toPromise()}async function Sn(e,t){const n=yn(e,!1).get(t),r=await new gn(n).toPromise();return void 0===r?null:r.value}function En(e,t){const n=yn(e,!0).delete(t);return new gn(n).toPromise()}const Cn=800,kn=3;class In{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await wn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>kn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return un()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rn._getInstance(hn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await cn(),!this.activeServiceWorker)return;this.sender=new sn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&dn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wn();return await _n(e,Gt,"1"),await En(e,Gt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>_n(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Sn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>En(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=yn(e,!1).getAll();return new gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}In.type="LOCAL";const Tn=In;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",O(e,t))}function An(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}function Rn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We("rcb"),new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fn="recaptcha";async function On(e,t,n){var r;if(!e._getRecaptchaConfig())try{await Ge(e)}catch(o){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){b("enroll"===t.type,e,"internal-error");const r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},i=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===Ke){b((null===n||void 0===n?void 0:n.type)===Fn,e,"argument-error");const r=await Dn(e,t,n);return Kt(e,r)}return Kt(e,t)},s=qe(e,r,"mfaSmsEnrollment",i,"PHONE_PROVIDER"),a=await s.catch((e=>Promise.reject(e)));return a.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const i=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;b(i,e,"missing-multi-factor-info");const s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===Ke){b((null===n||void 0===n?void 0:n.type)===Fn,e,"argument-error");const r=await Dn(e,t,n);return xn(e,r)}return xn(e,t)},l=qe(e,s,"mfaSmsSignIn",a,"PHONE_PROVIDER"),u=await l.catch((e=>Promise.reject(e)));return u.phoneResponseInfo.sessionInfo}}{const t={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=async(e,t)=>{if(t.captchaResponse===Ke){b((null===n||void 0===n?void 0:n.type)===Fn,e,"argument-error");const r=await Dn(e,t,n);return dt(e,r)}return dt(e,t)},i=qe(e,t,"sendVerificationCode",r,"PHONE_PROVIDER"),s=await i.catch((e=>Promise.reject(e)));return s.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function Dn(e,t,n){b(n.type===Fn,e,"argument-error");const r=await n.verify();b("string"===typeof r,e,"argument-error");const o=Object.assign({},t);if("phoneEnrollmentInfo"in o){const e=o.phoneEnrollmentInfo.phoneNumber,t=o.phoneEnrollmentInfo.captchaResponse,n=o.phoneEnrollmentInfo.clientType,i=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:i}}),o}if("phoneSignInInfo"in o){const e=o.phoneSignInInfo.captchaResponse,t=o.phoneSignInInfo.clientType,n=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),o}return Object.assign(o,{recaptchaToken:r}),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.providerId=Pn.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return On(this.auth,e,(0,o.Ku)(t))}static credential(e,t){return mt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pn.credentialFromTaggedObject(t)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?mt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nn(e,t){return t?ce(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.PROVIDER_ID="phone",Pn.PHONE_SIGN_IN_METHOD="phone";class Vn extends nt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ln(e){return Pt(e.auth,new Vn(e),e.bypassAuthState)}function Mn(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Dt(n,new Vn(e),e.bypassAuthState)}async function Bn(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Ot(n,new Vn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ln;case"linkViaPopup":case"linkViaRedirect":return Bn;case"reauthViaPopup":case"reauthViaRedirect":return Mn;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new T(2e3,1e4);class $n extends Wn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=on();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,jn.get())};e()}}$n.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un="pendingRedirect",Kn=new Map;class zn extends Wn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Kn.get(this.auth._key());if(!e){try{const t=await Hn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Kn.set(this.auth._key(),e)}return this.bypassAuthState||Kn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hn(e,t){const n=Yn(t),r=Gn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function qn(e,t){Kn.set(e._key(),t)}function Gn(e){return ce(e._redirectPersistence)}function Yn(e){return fe(Un,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(g(e));const o=De(e),i=Nn(o,t),s=new zn(o,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await o._persistUserIfCurrent(a.user),await o._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jn=6e5;class Qn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!tr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!er(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zn(e))}saveEventToCache(e){this.cachedEventUids.add(Zn(e)),this.lastProcessedEventTime=Date.now()}}function Zn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function er({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function tr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return er(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,or=/^https?/;async function ir(e){if(e.config.emulator)return;const{authorizedDomains:t}=await nr(e);for(const r of t)try{if(sr(r))return}catch(n){}p(e,"unauthorized-domain")}function sr(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!or.test(n))return!1;if(rr.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new T(3e4,6e4);function lr(){const e=an().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ur(e){return new Promise(((t,n)=>{var r,o,i;function s(){lr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{lr(),n(v(e,"network-request-failed"))},timeout:ar.get()})}if(null===(o=null===(r=an().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=an().gapi)||void 0===i?void 0:i.load)){const t=We("iframefcb");return an()[t]=()=>{gapi.load?s():n(v(e,"network-request-failed"))},Le(`${Be()}?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw cr=null,e}))}let cr=null;function dr(e){return cr=cr||ur(e),cr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new T(5e3,15e3),fr="__/auth/iframe",pr="emulator/auth/iframe",vr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gr(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,pr):`https://${e.config.authDomain}/${fr}`,i={apiKey:t.apiKey,appName:e.name,v:r.MF},s=mr.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,o.Am)(i).slice(1)}`}async function yr(e){const t=await dr(e),n=an().gapi;return b(n,e,"internal-error"),t.open({where:document.body,url:gr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=v(e,"network-request-failed"),i=an().setTimeout((()=>{r(o)}),hr.get());function s(){an().clearTimeout(i),n(t)}t.ping(s).then(s,(()=>{r(o)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wr=500,_r=600,Sr="_blank",Er="http://localhost";class Cr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function kr(e,t,n,r=wr,i=_r){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},br),{width:r.toString(),height:i.toString(),top:s,left:a}),c=(0,o.ZQ)().toLowerCase();n&&(l=ye(c)?Sr:n),me(c)&&(t=t||Er,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ce(c)&&"_self"!==l)return Ir(t||"",l),new Cr(null);const h=window.open(t||"",l,d);b(h,e,"popup-blocked");try{h.focus()}catch(f){}return new Cr(h)}function Ir(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="__/auth/handler",xr="emulator/auth/handler",Ar=encodeURIComponent("fac");async function Rr(e,t,n,i,s,a){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:r.MF,eventId:s};if(t instanceof _t){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,o.Im)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof St){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const c=await e._getAppCheckToken(),d=c?`#${Ar}=${encodeURIComponent(c)}`:"";return`${Fr(e)}?${(0,o.Am)(u).slice(1)}${d}`}function Fr({config:e}){return e.emulator?x(e,xr):`https://${e.authDomain}/${Tr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="webStorageSupport";class Dr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tn,this._completeRedirectFn=Xn,this._overrideRedirectResult=qn}async _openPopup(e,t,n,r){var o;_(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Rr(e,t,n,S(),r);return kr(e,i,on())}async _openRedirect(e,t,n,r){await this._originValidation(e);const o=await Rr(e,t,n,S(),r);return ln(o),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await yr(e),n=new Qn(e);return t.register("authEvent",(t=>{b(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Or,{type:Or},(n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Or];void 0!==o&&t(!!o),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ir(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ie()||ge()||Ee()}}const Pr=Dr;class Nr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class Vr extends Nr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Vr(e)}_finalizeEnroll(e,t,n){return zt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return An(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Lr{constructor(){}static assertion(e){return Vr._fromCredential(e)}}Lr.FACTOR_ID="phone";class Mr{static assertionForEnrollment(e,t){return Br._fromSecret(e,t)}static assertionForSignIn(e,t){return Br._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;b("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Ht(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Wr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Mr.FACTOR_ID="totp";class Br extends Nr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Br(t,void 0,e)}static _fromEnrollmentId(e,t){return new Br(t,e)}async _finalizeEnroll(e,t,n){return b("undefined"!==typeof this.secret,e,"argument-error"),qt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){b(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Rn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Wr{constructor(e,t,n,r,o,i,s){this.sessionInfo=i,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Wr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(jr(e)||jr(t))&&(r=!0),r&&(jr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),jr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function jr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var $r="@firebase/auth",Ur="1.8.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hr(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;b(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},u=new Oe(r,o,i,l);return Xe(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Kr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)($r,Ur,zr(e)),(0,r.KO)($r,Ur,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=300,Gr=(0,o.XA)("authIdTokenMaxAge")||qr;let Yr=null;const Xr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gr)return;const o=null===n||void 0===n?void 0:n.token;Yr!==o&&(Yr=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Jr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ye(e,{popupRedirectResolver:Pr,persistence:[Tn,Zt,tn]}),i=(0,o.XA)("authTokenSyncURL");if(i&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(i,location.origin);if(location.origin===e.origin){const t=Xr(e.toString());$t(n,t,(()=>t(n.currentUser))),jt(n,(e=>t(e)))}}const s=(0,o.Tj)("auth");return s&&Je(n,`http://${s}`),n}function Qr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Ve({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=v("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Qr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Hr("Browser")},1884:function(e,t,n){"use strict";n.d(t,{gS:function(){return ll},rJ:function(){return oa},kd:function(){return al},H9:function(){return ia},x7:function(){return rl},GG:function(){return il},aU:function(){return la},P:function(){return Ua},mZ:function(){return sl},_M:function(){return za}});var r,o,i=n(9928),s=n(5125),a=n(3424),l=n(6743),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},c={};(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[n].apply(e,o)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function s(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var o=0;16>o;++o)r[o]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(o=0;16>o;++o)r[o]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],o=e.g[2];var i=e.g[3],s=t+(i^n&(o^i))+r[0]+3614090360&4294967295;t=n+(s<<7&4294967295|s>>>25),s=i+(o^t&(n^o))+r[1]+3905402710&4294967295,i=t+(s<<12&4294967295|s>>>20),s=o+(n^i&(t^n))+r[2]+606105819&4294967295,o=i+(s<<17&4294967295|s>>>15),s=n+(t^o&(i^t))+r[3]+3250441966&4294967295,n=o+(s<<22&4294967295|s>>>10),s=t+(i^n&(o^i))+r[4]+4118548399&4294967295,t=n+(s<<7&4294967295|s>>>25),s=i+(o^t&(n^o))+r[5]+1200080426&4294967295,i=t+(s<<12&4294967295|s>>>20),s=o+(n^i&(t^n))+r[6]+2821735955&4294967295,o=i+(s<<17&4294967295|s>>>15),s=n+(t^o&(i^t))+r[7]+4249261313&4294967295,n=o+(s<<22&4294967295|s>>>10),s=t+(i^n&(o^i))+r[8]+1770035416&4294967295,t=n+(s<<7&4294967295|s>>>25),s=i+(o^t&(n^o))+r[9]+2336552879&4294967295,i=t+(s<<12&4294967295|s>>>20),s=o+(n^i&(t^n))+r[10]+4294925233&4294967295,o=i+(s<<17&4294967295|s>>>15),s=n+(t^o&(i^t))+r[11]+2304563134&4294967295,n=o+(s<<22&4294967295|s>>>10),s=t+(i^n&(o^i))+r[12]+1804603682&4294967295,t=n+(s<<7&4294967295|s>>>25),s=i+(o^t&(n^o))+r[13]+4254626195&4294967295,i=t+(s<<12&4294967295|s>>>20),s=o+(n^i&(t^n))+r[14]+2792965006&4294967295,o=i+(s<<17&4294967295|s>>>15),s=n+(t^o&(i^t))+r[15]+1236535329&4294967295,n=o+(s<<22&4294967295|s>>>10),s=t+(o^i&(n^o))+r[1]+4129170786&4294967295,t=n+(s<<5&4294967295|s>>>27),s=i+(n^o&(t^n))+r[6]+3225465664&4294967295,i=t+(s<<9&4294967295|s>>>23),s=o+(t^n&(i^t))+r[11]+643717713&4294967295,o=i+(s<<14&4294967295|s>>>18),s=n+(i^t&(o^i))+r[0]+3921069994&4294967295,n=o+(s<<20&4294967295|s>>>12),s=t+(o^i&(n^o))+r[5]+3593408605&4294967295,t=n+(s<<5&4294967295|s>>>27),s=i+(n^o&(t^n))+r[10]+38016083&4294967295,i=t+(s<<9&4294967295|s>>>23),s=o+(t^n&(i^t))+r[15]+3634488961&4294967295,o=i+(s<<14&4294967295|s>>>18),s=n+(i^t&(o^i))+r[4]+3889429448&4294967295,n=o+(s<<20&4294967295|s>>>12),s=t+(o^i&(n^o))+r[9]+568446438&4294967295,t=n+(s<<5&4294967295|s>>>27),s=i+(n^o&(t^n))+r[14]+3275163606&4294967295,i=t+(s<<9&4294967295|s>>>23),s=o+(t^n&(i^t))+r[3]+4107603335&4294967295,o=i+(s<<14&4294967295|s>>>18),s=n+(i^t&(o^i))+r[8]+1163531501&4294967295,n=o+(s<<20&4294967295|s>>>12),s=t+(o^i&(n^o))+r[13]+2850285829&4294967295,t=n+(s<<5&4294967295|s>>>27),s=i+(n^o&(t^n))+r[2]+4243563512&4294967295,i=t+(s<<9&4294967295|s>>>23),s=o+(t^n&(i^t))+r[7]+1735328473&4294967295,o=i+(s<<14&4294967295|s>>>18),s=n+(i^t&(o^i))+r[12]+2368359562&4294967295,n=o+(s<<20&4294967295|s>>>12),s=t+(n^o^i)+r[5]+4294588738&4294967295,t=n+(s<<4&4294967295|s>>>28),s=i+(t^n^o)+r[8]+2272392833&4294967295,i=t+(s<<11&4294967295|s>>>21),s=o+(i^t^n)+r[11]+1839030562&4294967295,o=i+(s<<16&4294967295|s>>>16),s=n+(o^i^t)+r[14]+4259657740&4294967295,n=o+(s<<23&4294967295|s>>>9),s=t+(n^o^i)+r[1]+2763975236&4294967295,t=n+(s<<4&4294967295|s>>>28),s=i+(t^n^o)+r[4]+1272893353&4294967295,i=t+(s<<11&4294967295|s>>>21),s=o+(i^t^n)+r[7]+4139469664&4294967295,o=i+(s<<16&4294967295|s>>>16),s=n+(o^i^t)+r[10]+3200236656&4294967295,n=o+(s<<23&4294967295|s>>>9),s=t+(n^o^i)+r[13]+681279174&4294967295,t=n+(s<<4&4294967295|s>>>28),s=i+(t^n^o)+r[0]+3936430074&4294967295,i=t+(s<<11&4294967295|s>>>21),s=o+(i^t^n)+r[3]+3572445317&4294967295,o=i+(s<<16&4294967295|s>>>16),s=n+(o^i^t)+r[6]+76029189&4294967295,n=o+(s<<23&4294967295|s>>>9),s=t+(n^o^i)+r[9]+3654602809&4294967295,t=n+(s<<4&4294967295|s>>>28),s=i+(t^n^o)+r[12]+3873151461&4294967295,i=t+(s<<11&4294967295|s>>>21),s=o+(i^t^n)+r[15]+530742520&4294967295,o=i+(s<<16&4294967295|s>>>16),s=n+(o^i^t)+r[2]+3299628645&4294967295,n=o+(s<<23&4294967295|s>>>9),s=t+(o^(n|~i))+r[0]+4096336452&4294967295,t=n+(s<<6&4294967295|s>>>26),s=i+(n^(t|~o))+r[7]+1126891415&4294967295,i=t+(s<<10&4294967295|s>>>22),s=o+(t^(i|~n))+r[14]+2878612391&4294967295,o=i+(s<<15&4294967295|s>>>17),s=n+(i^(o|~t))+r[5]+4237533241&4294967295,n=o+(s<<21&4294967295|s>>>11),s=t+(o^(n|~i))+r[12]+1700485571&4294967295,t=n+(s<<6&4294967295|s>>>26),s=i+(n^(t|~o))+r[3]+2399980690&4294967295,i=t+(s<<10&4294967295|s>>>22),s=o+(t^(i|~n))+r[10]+4293915773&4294967295,o=i+(s<<15&4294967295|s>>>17),s=n+(i^(o|~t))+r[1]+2240044497&4294967295,n=o+(s<<21&4294967295|s>>>11),s=t+(o^(n|~i))+r[8]+1873313359&4294967295,t=n+(s<<6&4294967295|s>>>26),s=i+(n^(t|~o))+r[15]+4264355552&4294967295,i=t+(s<<10&4294967295|s>>>22),s=o+(t^(i|~n))+r[6]+2734768916&4294967295,o=i+(s<<15&4294967295|s>>>17),s=n+(i^(o|~t))+r[13]+1309151649&4294967295,n=o+(s<<21&4294967295|s>>>11),s=t+(o^(n|~i))+r[4]+4149444226&4294967295,t=n+(s<<6&4294967295|s>>>26),s=i+(n^(t|~o))+r[11]+3174756917&4294967295,i=t+(s<<10&4294967295|s>>>22),s=o+(t^(i|~n))+r[2]+718787259&4294967295,o=i+(s<<15&4294967295|s>>>17),s=n+(i^(o|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(o+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+o&4294967295,e.g[3]=e.g[3]+i&4294967295}function a(e,t){var n=u;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function l(e,t){this.h=t;for(var n=[],r=!0,o=e.length-1;0<=o;o--){var i=0|e[o];r&&i==t||(n[o]=i,r=!1)}this.g=n}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.B,o=this.h,i=0;i<t;){if(0==o)for(;i<=n;)s(this,e,i),i+=this.blockSize;if("string"===typeof e){for(;i<t;)if(r[o++]=e.charCodeAt(i++),o==this.blockSize){s(this,r),o=0;break}}else for(;i<t;)if(r[o++]=e[i++],o==this.blockSize){s(this,r),o=0;break}}this.h=o,this.o+=t},i.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var u={};function d(e){return-128<=e&&128>e?a(e,(function(e){return new l([0|e],0>e?-1:0)})):new l([0|e],0>e?-1:0)}function h(e){if(isNaN(e)||!isFinite(e))return p;if(0>e)return b(h(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new l(t,0)}function f(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return b(f(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=h(Math.pow(t,8)),r=p,o=0;o<e.length;o+=8){var i=Math.min(8,e.length-o),s=parseInt(e.substring(o,o+i),t);8>i?(i=h(Math.pow(t,i)),r=r.j(i).add(h(s))):(r=r.j(n),r=r.add(h(s)))}return r}var p=d(0),v=d(1),m=d(16777216);function g(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function y(e){return-1==e.h}function b(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new l(n,~e.h).add(v)}function w(e,t){return e.add(b(t))}function _(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function S(e,t){this.g=e,this.h=t}function E(e,t){if(g(t))throw Error("division by zero");if(g(e))return new S(p,p);if(y(e))return t=E(b(e),t),new S(b(t.g),b(t.h));if(y(t))return t=E(e,b(t)),new S(b(t.g),t.h);if(30<e.g.length){if(y(e)||y(t))throw Error("slowDivide_ only works with positive integers.");for(var n=v,r=t;0>=r.l(e);)n=C(n),r=C(r);var o=k(n,1),i=k(r,1);for(r=k(r,2),n=k(n,2);!g(r);){var s=i.add(r);0>=s.l(e)&&(o=o.add(n),i=s),r=k(r,1),n=k(n,1)}return t=w(e,o.j(t)),new S(o,t)}for(o=p;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=h(n),s=i.j(t);y(s)||0<s.l(e);)n-=r,i=h(n),s=i.j(t);g(i)&&(i=v),o=o.add(i),e=w(e,s)}return new S(o,e)}function C(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new l(n,e.h)}function k(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,o=[],i=0;i<r;i++)o[i]=0<t?e.i(i+n)>>>t|e.i(i+n+1)<<32-t:e.i(i+n);return new l(o,e.h)}e=l.prototype,e.m=function(){if(y(this))return-b(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(g(this))return"0";if(y(this))return"-"+b(this).toString(e);for(var t=h(Math.pow(e,6)),n=this,r="";;){var o=E(n,t).g;n=w(n,o.j(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=o,g(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=w(this,e),y(e)?-1:g(e)?0:1},e.abs=function(){return y(this)?b(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,o=0;o<=t;o++){var i=r+(65535&this.i(o))+(65535&e.i(o)),s=(i>>>16)+(this.i(o)>>>16)+(e.i(o)>>>16);r=s>>>16,i&=65535,s&=65535,n[o]=s<<16|i}return new l(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(g(this)||g(e))return p;if(y(this))return y(e)?b(this).j(b(e)):b(b(this).j(e));if(y(e))return b(this.j(b(e)));if(0>this.l(m)&&0>e.l(m))return h(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var o=0;o<e.g.length;o++){var i=this.i(r)>>>16,s=65535&this.i(r),a=e.i(o)>>>16,u=65535&e.i(o);n[2*r+2*o]+=s*u,_(n,2*r+2*o),n[2*r+2*o+1]+=i*u,_(n,2*r+2*o+1),n[2*r+2*o+1]+=s*a,_(n,2*r+2*o+1),n[2*r+2*o+2]+=i*a,_(n,2*r+2*o+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new l(n,0)},e.A=function(e){return E(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new l(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new l(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new l(n,this.h^e.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,o=c.Md5=i,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=f,r=c.Integer=l}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var d,h,f,p,v,m,g,y,b="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},w={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof b&&b];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function o(e,n){if(n)e:{var o=r;e=e.split(".");for(var i=0;i<e.length-1;i++){var s=e[i];if(!(s in o))break e;o=o[s]}e=e[e.length-1],i=o[e],n=n(i),n!=i&&null!=n&&t(o,e,{configurable:!0,writable:!0,value:n})}}function i(e,t){e instanceof String&&(e+="");var n=0,r=!1,o={next:function(){if(!r&&n<e.length){var o=n++;return{value:t(o,e[o]),done:!1}}return r=!0,{done:!0,value:void 0}}};return o[Symbol.iterator]=function(){return o},o}o("Array.prototype.values",(function(e){return e||function(){return i(this,(function(e,t){return t}))}}));
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s=s||{},a=this||self;function l(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function c(e,t,n){return e.call.apply(e.bind,arguments)}function S(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function E(e,t,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?c:S,E.apply(null,arguments)}function k(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[n].apply(e,o)}}function T(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function x(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(l(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let o=0;o<r;o++)e[n+o]=t[o]}else e.push(t)}}class A{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function R(e){return/^[\s\xa0]*$/.test(e)}function F(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function O(e){return O[" "](e),e}O[" "]=function(){};var D=-1!=F().indexOf("Gecko")&&!(-1!=F().toLowerCase().indexOf("webkit")&&-1==F().indexOf("Edge"))&&!(-1!=F().indexOf("Trident")||-1!=F().indexOf("MSIE"))&&-1==F().indexOf("Edge");function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function N(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function V(e){const t={};for(const n in e)t[n]=e[n];return t}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let o=1;o<arguments.length;o++){for(n in r=arguments[o],r)e[n]=r[n];for(let t=0;t<L.length;t++)n=L[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function B(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function W(e){a.setTimeout((()=>{throw e}),0)}function j(){var e=q;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ${constructor(){this.h=this.g=null}add(e,t){const n=U.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var U=new A((()=>new K),(e=>e.reset()));class K{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let z,H=!1,q=new $,G=()=>{const e=a.Promise.resolve(void 0);z=()=>{e.then(Y)}};var Y=()=>{for(var e;e=j();){try{e.h.call(e.g)}catch(n){W(n)}var t=U;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}H=!1};function X(){this.s=this.s,this.C=this.C}function J(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},J.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(n){}return e}();function Z(e,t){if(J.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(D){e:{try{O(t.nodeName);var o=!0;break e}catch(i){}o=!1}o||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.aa.h.call(this)}}I(Z,J);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,o){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=o,this.key=++ne,this.da=this.fa=!1}function oe(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ie(e){this.src=e,this.g={},this.h=0}function se(e,t){var n=t.type;if(n in e.g){var r,o=e.g[n],i=Array.prototype.indexOf.call(o,t,void 0);(r=0<=i)&&Array.prototype.splice.call(o,i,1),r&&(oe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var o=0;o<e.length;++o){var i=e[o];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return o}return-1}ie.prototype.add=function(e,t,n,r,o){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var s=ae(e,t,r,o);return-1<s?(t=e[s],n||(t.fa=!1)):(t=new re(t,this.src,i,!!r,o),t.fa=n,e.push(t)),t};var le="closure_lm_"+(1e6*Math.random()|0),ue={};function ce(e,t,n,r,o){if(r&&r.once)return fe(e,t,n,r,o);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ce(e,t[i],n,r,o);return null}return n=we(n),e&&e[te]?e.K(t,n,u(r)?!!r.capture:!!r,o):de(e,t,n,!1,r,o)}function de(e,t,n,r,o,i){if(!t)throw Error("Invalid event type");var s=u(o)?!!o.capture:!!o,a=ye(e);if(a||(e[le]=a=new ie(e)),n=a.add(t,n,r,s,i),n.proxy)return n;if(r=he(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Q||(o=s),void 0===o&&(o=!1),e.addEventListener(t.toString(),r,o);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function he(){function e(n){return t.call(e.src,e.listener,n)}const t=ge;return e}function fe(e,t,n,r,o){if(Array.isArray(t)){for(var i=0;i<t.length;i++)fe(e,t[i],n,r,o);return null}return n=we(n),e&&e[te]?e.L(t,n,u(r)?!!r.capture:!!r,o):de(e,t,n,!0,r,o)}function pe(e,t,n,r,o){if(Array.isArray(t))for(var i=0;i<t.length;i++)pe(e,t[i],n,r,o);else r=u(r)?!!r.capture:!!r,n=we(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ae(i,n,r,o),-1<n&&(oe(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,o)),(n=-1<e?t[e]:null)&&ve(n))}function ve(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[te])se(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ye(t))?(se(n,e),0==n.h&&(n.src=null,t[le]=null)):oe(e)}}}function me(e){return e in ue?ue[e]:ue[e]="on"+e}function ge(e,t){if(e.da)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ve(e),e=n.call(r,t)}return e}function ye(e){return e=e[le],e instanceof ie?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function _e(){X.call(this),this.i=new ie(this),this.M=this,this.F=null}function Se(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new J(t,e);else if(t instanceof J)t.target=t.target||e;else{var o=t;t=new J(r,e),M(t,o)}if(o=!0,n)for(var i=n.length-1;0<=i;i--){var s=t.g=n[i];o=Ee(s,r,!0,t)&&o}if(s=t.g=e,o=Ee(s,r,!0,t)&&o,o=Ee(s,r,!1,t)&&o,n)for(i=0;i<n.length;i++)s=t.g=n[i],o=Ee(s,r,!1,t)&&o}function Ee(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var o=!0,i=0;i<t.length;++i){var s=t[i];if(s&&!s.da&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.fa&&se(e.i,s),o=!1!==a.call(l,r)&&o}}return o&&!r.defaultPrevented}function Ce(e,t,n){if("function"===typeof e)n&&(e=E(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=E(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function ke(e){e.g=Ce((()=>{e.g=null,e.i&&(e.i=!1,ke(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}I(_e,X),_e.prototype[te]=!0,_e.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oe(n[r]);delete t.g[e],t.h--}}this.F=null},_e.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},_e.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class Ie extends X{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ke(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Te(e){X.call(this),this.h=e,this.g={}}I(Te,X);var xe=[];function Ae(e){P(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ve(e)}),e),e.g={}}Te.prototype.N=function(){Te.aa.N.call(this),Ae(this)},Te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Re=a.JSON.stringify,Fe=a.JSON.parse,Oe=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function De(){}function Pe(e){return e.h||(e.h=e.i())}function Ne(){}De.prototype.h=null;var Ve={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Le(){J.call(this,"d")}function Me(){J.call(this,"c")}I(Le,J),I(Me,J);var Be={},We=null;function je(){return We=We||new _e}function $e(e){J.call(this,Be.La,e)}function Ue(e){const t=je();Se(t,new $e(t))}function Ke(e,t){J.call(this,Be.STAT_EVENT,e),this.stat=t}function ze(e){const t=je();Se(t,new Ke(t,e))}function He(e,t){J.call(this,Be.Ma,e),this.size=t}function qe(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}function Ge(){this.g=!0}function Ye(e,t,n,r,o,i){e.info((function(){if(e.g)if(i)for(var s="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");s=2<=d.length&&"type"==d[1]?s+(c+"=")+u+"&":s+(c+"=redacted&")}}else s=null;else s=i;return"XMLHTTP REQ ("+r+") [attempt "+o+"]: "+t+"\n"+n+"\n"+s}))}function Xe(e,t,n,r,o,i,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+o+"]: "+t+"\n"+n+"\n"+i+" "+s}))}function Je(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ze(e,n)+(r?" "+r:"")}))}function Qe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ze(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var o=r[1];if(Array.isArray(o)&&!(1>o.length)){var i=o[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var s=1;s<o.length;s++)o[s]=""}}}return Re(n)}catch(a){return t}}Be.La="serverreachability",I($e,J),Be.STAT_EVENT="statevent",I(Ke,J),Be.Ma="timingevent",I(He,J),Ge.prototype.xa=function(){this.g=!1},Ge.prototype.info=function(){};var et,tt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function rt(){}function ot(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new Te(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new it}function it(){this.i=null,this.g="",this.h=!1}I(rt,De),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},et=new rt;var st={},at={};function lt(e,t,n){e.L=1,e.v=Lt(Ot(t)),e.m=n,e.P=!0,ut(e,null)}function ut(e,t){e.F=Date.now(),ht(e),e.A=Ot(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Xt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new it,e.g=Un(e.j,n?t:null,!e.m),0<e.O&&(e.M=new Ie(E(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var o="readystatechange";Array.isArray(o)||(o&&(xe[0]=o.toString()),o=xe);for(var i=0;i<o.length;i++){var s=ce(n,o[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}t=e.H?V(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ue(),Ye(e.i,e.u,e.A,e.l,e.R,e.m)}function ct(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function dt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?at:(n=Number(t.substring(n,r)),isNaN(n)?st:(r+=1,r+n>t.length?at:(t=t.slice(r,r+n),e.C=r+n,t)))}function ht(e){e.S=Date.now()+e.I,ft(e,e.I)}function ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=qe(E(e.ba,e),t)}function pt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function vt(e){0==e.j.G||e.J||Mn(e.j,e)}function mt(e){pt(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,Ae(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function gt(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||St(n.h,e)))if(!e.K&&St(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var o=r;if(0==o[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Ln(n),In(n)}Pn(n),ze(18)}}else n.za=o[1],0<n.za-n.T&&37500>o[2]&&n.F&&0==n.v&&!n.C&&(n.C=qe(E(n.Za,n),6e3));if(1>=_t(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else Wn(n,11)}else if((e.K||n.g==e)&&Ln(n),!R(t))for(o=n.Da.g.parse(t),t=0;t<o.length;t++){let u=o[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const o=u[4];null!=o&&(n.Aa=o,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Et(i,i.h),i.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,Vt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var s=e;if(r.qa=$n(r,r.J?r.ia:null,r.W),s.K){Ct(r.h,s);var a=s,l=r.L;l&&(a.I=l),a.B&&(pt(a),ht(a)),r.g=s}else Dn(r);0<n.i.length&&xn(n)}else"stop"!=u[0]&&"close"!=u[0]||Wn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Wn(n,7):kn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ue(4)}catch(u){}}ot.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==wn(e)?t.j():this.Y(e)},ot.prototype.Y=function(e){try{if(e==this.g)e:{const h=wn(this.g);var t=this.g.Ba();const f=this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||_n(this.g)))){this.J||4!=h||7==t||Ue(8==t||0>=f?3:2),pt(this);var n=this.g.Z();this.X=n;t:if(ct(this)){var r=_n(this.g);e="";var o=r.length,i=4==wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){mt(this),vt(this);var s="";break t}this.h.i=new a.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(i&&t==o-1)});r.length=0,this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.oa();if(this.o=200==n,Xe(this.i,this.u,this.A,this.l,this.R,h,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,ze(12),mt(this),vt(this);break e}Je(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gt(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<s.length;){if(e=dt(this,s),e==at){4==h&&(this.s=4,ze(14),n=!1),Je(this.i,this.l,null,"[Incomplete Response]");break}if(e==st){this.s=4,ze(15),Je(this.i,this.l,s,"[Invalid Chunk]"),n=!1;break}Je(this.i,this.l,e,null),gt(this,e)}if(ct(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=s.length||this.h.h||(this.s=1,ze(16),n=!1),this.o=this.o&&n,n){if(0<s.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+s.length),Nn(d),d.M=!0,ze(11))}}else Je(this.i,this.l,s,"[Invalid Chunked Response]"),mt(this),vt(this)}else Je(this.i,this.l,s,null),gt(this,s);4==h&&mt(this),this.o&&!this.J&&(4==h?Mn(this.j,this):(this.o=!1,ht(this)))}else Sn(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),mt(this),vt(this)}}}catch(_){}},ot.prototype.cancel=function(){this.J=!0,mt(this)},ot.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(Qe(this.i,this.A),2!=this.L&&(Ue(),ze(17)),mt(this),this.s=2,vt(this)):ft(this,this.S-e)};var yt=class{constructor(e,t){this.g=e,this.map=t}};function bt(e){this.l=e||10,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function _t(e){return e.h?1:e.g?e.g.size:0}function St(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Et(e,t){e.g?e.g.add(t):e.h=t}function Ct(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function kt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return T(e.i)}function It(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(l(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Tt(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(l(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function xt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(l(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Tt(e),r=It(e),o=r.length,i=0;i<o;i++)t.call(void 0,r[i],n&&n[i],e)}bt.prototype.cancel=function(){if(this.i=kt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var At=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),o=null;if(0<=r){var i=e[n].substring(0,r);o=e[n].substring(r+1)}else i=e[n];t(i,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function Ft(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof Ft){this.h=e.h,Dt(this,e.j),this.o=e.o,this.g=e.g,Pt(this,e.s),this.l=e.l;var t=e.i,n=new Ht;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Nt(this,n),this.m=e.m}else e&&(t=String(e).match(At))?(this.h=!1,Dt(this,t[1]||"",!0),this.o=Mt(t[2]||""),this.g=Mt(t[3]||"",!0),Pt(this,t[4]),this.l=Mt(t[5]||"",!0),Nt(this,t[6]||"",!0),this.m=Mt(t[7]||"")):(this.h=!1,this.i=new Ht(null,this.h))}function Ot(e){return new Ft(e)}function Dt(e,t,n){e.j=n?Mt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Pt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function Nt(e,t,n){t instanceof Ht?(e.i=t,Qt(e.i,e.h)):(n||(t=Bt(t,Kt)),e.i=new Ht(t,e.h))}function Vt(e,t,n){e.i.set(t,n)}function Lt(e){return Vt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Mt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Bt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Wt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Wt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Bt(t,jt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(Bt(t,jt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Bt(n,"/"==n.charAt(0)?Ut:$t,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",Bt(n,zt)),e.join("")};var jt=/[#\/\?@]/g,$t=/[#\?:]/g,Ut=/[#\?]/g,Kt=/[#\?@]/g,zt=/#/g;function Ht(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function qt(e){e.g||(e.g=new Map,e.h=0,e.i&&Rt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Gt(e,t){qt(e),t=Jt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Yt(e,t){return qt(e),t=Jt(e,t),e.g.has(t)}function Xt(e,t,n){Gt(e,t),0<n.length&&(e.i=null,e.g.set(Jt(e,t),T(n)),e.h+=n.length)}function Jt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Qt(e,t){t&&!e.j&&(qt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Gt(this,t),Xt(this,n,e))}),e)),e.j=t}function Zt(e,t){const n=new Ge;if(a.Image){const r=new Image;r.onload=k(tn,n,"TestLoadImage: loaded",!0,t,r),r.onerror=k(tn,n,"TestLoadImage: error",!1,t,r),r.onabort=k(tn,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=k(tn,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function en(e,t){const n=new Ge,r=new AbortController,o=setTimeout((()=>{r.abort(),tn(n,"TestPingServer: timeout",!1,t)}),1e4);fetch(e,{signal:r.signal}).then((e=>{clearTimeout(o),e.ok?tn(n,"TestPingServer: ok",!0,t):tn(n,"TestPingServer: server error",!1,t)})).catch((()=>{clearTimeout(o),tn(n,"TestPingServer: error",!1,t)}))}function tn(e,t,n,r,o){try{o&&(o.onload=null,o.onerror=null,o.onabort=null,o.ontimeout=null),r(n)}catch(i){}}function nn(){this.g=new Oe}function rn(e,t,n){const r=n||"";try{xt(e,(function(e,n){let o=e;u(e)&&(o=Re(e)),t.push(r+n+"="+encodeURIComponent(o))}))}catch(o){throw t.push(r+"type="+encodeURIComponent("_badmap")),o}}function on(e){this.l=e.Ub||null,this.j=e.eb||!1}function sn(e,t){_e.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function ln(e){e.readyState=4,e.l=null,e.j=null,e.v=null,un(e)}function un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function cn(e){let t="";return P(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function dn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=cn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Vt(e,t,n))}function hn(e){_e.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}e=Ht.prototype,e.add=function(e,t){qt(this),this.i=null,e=Jt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){qt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){qt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const o=e[r];for(let e=0;e<o.length;e++)n.push(t[r])}return n},e.V=function(e){qt(this);let t=[];if("string"===typeof e)Yt(this,e)&&(t=t.concat(this.g.get(Jt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return qt(this),this.i=null,e=Jt(this,e),Yt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),s=this.V(r);for(r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")},I(on,De),on.prototype.g=function(){return new sn(this.l,this.j)},on.prototype.i=function(e){return function(){return e}}({}),I(sn,_e),e=sn.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,un(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ln(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ln(this):un(this),3==this.readyState&&an(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,ln(this))},e.Qa=function(e){this.g&&(this.response=e,ln(this))},e.ga=function(){this.g&&ln(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),I(hn,_e);var fn=/^https?$/i,pn=["POST","PUT"];function vn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,mn(e),yn(e)}function mn(e){e.A||(e.A=!0,Se(e,"complete"),Se(e,"error"))}function gn(e){if(e.h&&"undefined"!=typeof s&&(!e.v[1]||4!=wn(e)||2!=e.Z()))if(e.u&&4==wn(e))Ce(e.Ea,0,e);else if(Se(e,"readystatechange"),4==wn(e)){e.h=!1;try{const s=e.Z();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===s){var o=String(e.D).match(At)[1]||null;!o&&a.self&&a.self.location&&(o=a.self.location.protocol.slice(0,-1)),r=!fn.test(o?o.toLowerCase():"")}n=r}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var i=2<wn(e)?e.g.statusText:""}catch(l){i=""}e.l=i+" ["+e.Z()+"]",mn(e)}}finally{yn(e)}}}function yn(e,t){if(e.g){bn(e);const r=e.g,o=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||Se(e,"ready");try{r.onreadystatechange=o}catch(n){}}}function bn(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function wn(e){return e.g?e.g.readyState:0}function _n(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(C){return null}}function Sn(e){const t={};e=(e.g&&2<=wn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(R(e[r]))continue;var n=B(e[r]);const o=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=t[o]||[];t[o]=i,i.push(n)}N(t,(function(e){return e.join(", ")}))}function En(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Cn(e){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,e),this.cb=En("retryDelaySeedMs",1e4,e),this.Wa=En("forwardChannelMaxRetries",2,e),this.wa=En("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new bt(e&&e.concurrentRequestLimit),this.Da=new nn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function kn(e){if(Tn(e),3==e.G){var t=e.U++,n=Ot(e.I);if(Vt(n,"SID",e.K),Vt(n,"RID",t),Vt(n,"TYPE","terminate"),Fn(e,n),t=new ot(e,e.j,t),t.L=2,t.v=Lt(Ot(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=Un(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ht(t)}jn(e)}function In(e){e.g&&(Nn(e),e.g.cancel(),e.g=null)}function Tn(e){In(e),e.u&&(a.clearTimeout(e.u),e.u=null),Ln(e),e.h.cancel(),e.s&&("number"===typeof e.s&&a.clearTimeout(e.s),e.s=null)}function xn(e){if(!wt(e.h)&&!e.s){e.s=!0;var t=e.Ga;z||G(),H||(z(),H=!0),q.add(t,e),e.B=0}}function An(e,t){return!(_t(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=qe(E(e.Ga,e,t),Bn(e,e.B)),e.B++,!0))}function Rn(e,t){var n;n=t?t.l:e.U++;const r=Ot(e.I);Vt(r,"SID",e.K),Vt(r,"RID",n),Vt(r,"AID",e.T),Fn(e,r),e.m&&e.o&&dn(r,e.m,e.o),n=new ot(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=On(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Et(e.h,n),lt(n,r,t)}function Fn(e,t){e.H&&P(e.H,(function(e,n){Vt(t,n,e)})),e.l&&xt({},(function(e,n){Vt(t,n,e)}))}function On(e,t,n){n=Math.min(e.i.length,n);var r=e.l?E(e.l.Na,e.l,e):null;e:{var o=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=o[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let s=0;s<n;s++){let n=o[s].g;const a=o[s].map;if(n-=t,0>n)t=Math.max(0,o[s].g-100),i=!1;else try{rn(a,e,"req"+n+"_")}catch(_){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Dn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;z||G(),H||(z(),H=!0),q.add(t,e),e.v=0}}function Pn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=qe(E(e.Fa,e),Bn(e,e.v)),e.v++,!0)}function Nn(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function Vn(e){e.g=new ot(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=Ot(e.qa);Vt(t,"RID","rpc"),Vt(t,"SID",e.K),Vt(t,"AID",e.T),Vt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&Vt(t,"TO",e.ja),Vt(t,"TYPE","xmlhttp"),Fn(e,t),e.m&&e.o&&dn(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=Lt(Ot(t)),n.m=null,n.P=!0,ut(n,e)}function Ln(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function Mn(e,t){var n=null;if(e.g==t){Ln(e),Nn(e),e.g=null;var r=2}else{if(!St(e.h,t))return;n=t.D,Ct(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var o=e.B;r=je(),Se(r,new He(r,n)),xn(e)}else Dn(e);else if(o=t.s,3==o||0==o&&0<t.X||!(1==r&&An(e,t)||2==r&&Pn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),o){case 1:Wn(e,5);break;case 4:Wn(e,10);break;case 3:Wn(e,6);break;default:Wn(e,2)}}function Bn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function Wn(e,t){if(e.j.info("Error code "+t),2==t){var n=E(e.fb,e),r=e.Xa;const t=!r;r=new Ft(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Dt(r,"https"),Lt(r),t?Zt(r.toString(),n):en(r.toString(),n)}else ze(2);e.G=0,e.l&&e.l.sa(t),jn(e),Tn(e)}function jn(e){if(e.G=0,e.ka=[],e.l){const t=kt(e.h);0==t.length&&0==e.i.length||(x(e.ka,t),x(e.ka,e.i),e.h.i.length=0,T(e.i),e.i.length=0),e.l.ra()}}function $n(e,t,n){var r=n instanceof Ft?Ot(n):new Ft(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Pt(r,r.s);else{var o=a.location;r=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var i=new Ft(null);r&&Dt(i,r),t&&(i.g=t),o&&Pt(i,o),n&&(i.l=n),r=i}return n=e.D,t=e.ya,n&&t&&Vt(r,n,t),Vt(r,"VER",e.la),Fn(e,r),r}function Un(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ca&&!e.pa?new hn(new on({eb:n})):new hn(e.pa),t.Ha(e.J),t}function Kn(){}function zn(){}function Hn(e,t){_e.call(this),this.g=new Cn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!R(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Yn(this)}function qn(e){Le.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Gn(){Me.call(this),this.status=1}function Yn(e){this.g=e}e=hn.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():et.g(),this.v=this.o?Pe(this.o):Pe(et),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(i){return void vn(this,i)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),o=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,t,void 0))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bn(this),this.u=!0,this.g.send(e),this.u=!1}catch(i){vn(this,i)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),yn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),hn.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?gn(this):this.bb())},e.bb=function(){gn(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Fe(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},e=Cn.prototype,e.la=8,e.G=1,e.connect=function(e,t,n,r){ze(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=$n(this,null,this.W),xn(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const o=new ot(this,this.j,e);let i=this.o;if(this.S&&(i?(i=V(i),M(i,this.S)):i=this.S),null!==this.m||this.O||(o.H=i,i=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=On(this,o,t),n=Ot(this.I),Vt(n,"RID",e),Vt(n,"CVER",22),this.D&&Vt(n,"X-HTTP-Session-Id",this.D),Fn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(cn(i)))+"&"+t:this.m&&dn(n,this.m,i)),Et(this.h,o),this.Ua&&Vt(n,"TYPE","init"),this.P?(Vt(n,"$req",t),Vt(n,"SID","null"),o.T=!0,lt(o,n,null)):lt(o,n,t),this.G=2}}else 3==this.G&&(e?Rn(this,e):0==this.i.length||wt(this.h)||Rn(this))},e.Fa=function(){if(this.u=null,Vn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=qe(E(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),In(this),Vn(this))},e.Za=function(){null!=this.C&&(this.C=null,In(this),Pn(this),ze(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=Kn.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},zn.prototype.g=function(e,t){return new Hn(e,t)},I(Hn,_e),Hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Hn.prototype.close=function(){kn(this.g)},Hn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.u&&(n={},n.__data__=Re(e),e=n);t.i.push(new yt(t.Ya++,e)),3==t.G&&xn(t)},Hn.prototype.N=function(){this.g.l=null,delete this.j,kn(this.g),delete this.g,Hn.aa.N.call(this)},I(qn,Le),I(Gn,Me),I(Yn,Kn),Yn.prototype.ua=function(){Se(this.g,"a")},Yn.prototype.ta=function(e){Se(this.g,new qn(e))},Yn.prototype.sa=function(e){Se(this.g,new Gn)},Yn.prototype.ra=function(){Se(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,Hn.prototype.send=Hn.prototype.o,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,y=w.createWebChannelTransport=function(){return new zn},g=w.getStatEventTarget=function(){return je()},m=w.Event=Be,v=w.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tt.NO_ERROR=0,tt.TIMEOUT=8,tt.HTTP_ERROR=6,p=w.ErrorCode=tt,nt.COMPLETE="complete",f=w.EventType=nt,Ne.EventType=Ve,Ve.OPEN="a",Ve.CLOSE="b",Ve.ERROR="c",Ve.MESSAGE="d",_e.prototype.listen=_e.prototype.K,h=w.WebChannel=Ne,w.FetchXmlHttpFactory=on,hn.prototype.listenOnce=hn.prototype.L,hn.prototype.getLastError=hn.prototype.Ka,hn.prototype.getLastErrorCode=hn.prototype.Ba,hn.prototype.getStatus=hn.prototype.Z,hn.prototype.getResponseJson=hn.prototype.Oa,hn.prototype.getResponseText=hn.prototype.oa,hn.prototype.send=hn.prototype.ea,hn.prototype.setWithCredentials=hn.prototype.Ha,d=w.XhrIo=hn}).apply("undefined"!==typeof b?b:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const _="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}S.UNAUTHENTICATED=new S(null),S.GOOGLE_CREDENTIALS=new S("google-credentials-uid"),S.FIRST_PARTY=new S("first-party-uid"),S.MOCK_USER=new S("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let E="11.0.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new a.Vy("@firebase/firestore");function k(){return C.logLevel}function I(e,...t){if(C.logLevel<=a.$b.DEBUG){const n=t.map(A);C.debug(`Firestore (${E}): ${e}`,...n)}}function T(e,...t){if(C.logLevel<=a.$b.ERROR){const n=t.map(A);C.error(`Firestore (${E}): ${e}`,...n)}}function x(e,...t){if(C.logLevel<=a.$b.WARN){const n=t.map(A);C.warn(`Firestore (${E}): ${e}`,...n)}}function A(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e="Unexpected state"){const t=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: `+e;throw T(t),new Error(t)}function F(e,t){e||R()}function O(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends l.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(S.UNAUTHENTICATED)))}shutdown(){}}class M{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class B{constructor(e){this.t=e,this.currentUser=S.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){F(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let o=new N;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new N,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=o;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},s=e=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new N)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(F("string"==typeof t.accessToken),new V(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return F(null===e||"string"==typeof e),new S(e)}}class W{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=S.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class j{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new W(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(S.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){F(void 0===this.o);const n=e=>{null!=e.error&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,I("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(F("string"==typeof e.token),this.R=e.token,new $(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=K(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<t&&(n+=e.charAt(r[o]%e.length))}return n}}function H(e,t){return e<t?-1:e>t?1:0}function q(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new P(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new P(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new P(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return G.fromMillis(Date.now())}static fromDate(e){return G.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new G(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new G(0,0))}static max(){return new Y(new G(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n){void 0===t?t=0:t>e.length&&R(),void 0===n?n=e.length-t:n>e.length-t&&R(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===X.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof X?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),o=t.get(r);if(n<o)return-1;if(n>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class J extends X{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new P(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const Q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends X{construct(e,t,n){return new Z(e,t,n)}static isValidIdentifier(e){return Q.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Z(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const o=()=>{if(0===n.length)throw new P(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new P(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new P(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(o(),r++)}if(o(),i)throw new P(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z(t)}static emptyPath(){return new Z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(J.fromString(e))}static fromName(e){return new ee(J.fromString(e).popFirst(5))}static empty(){return new ee(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===J.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new J(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}te.UNKNOWN_ID=-1;function ne(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,o=Y.fromTimestamp(1e9===r?new G(n+1,0):new G(n,r));return new oe(o,ee.empty(),t)}function re(e){return new oe(e.readTime,e.key,-1)}class oe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new oe(Y.min(),ee.empty(),-1)}static max(){return new oe(Y.max(),ee.empty(),-1)}}function ie(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ee.comparator(e.documentKey,t.documentKey),0!==n?n:H(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const se="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ae{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(e){if(e.code!==D.FAILED_PRECONDITION||e.message!==se)throw e;I("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ue(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ue?t:ue.resolve(t)}catch(e){return ue.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ue.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ue.reject(t)}static resolve(e){return new ue(((t,n)=>{t(e)}))}static reject(e){return new ue(((t,n)=>{n(e)}))}static waitFor(e){return new ue(((t,n)=>{let r=0,o=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++o,i&&o===r&&t()}),(e=>n(e)))})),i=!0,o===r&&t()}))}static or(e){let t=ue.resolve(!1);for(const n of e)t=t.next((e=>e?ue.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new ue(((n,r)=>{const o=e.length,i=new Array(o);let s=0;for(let a=0;a<o;a++){const l=a;t(e[l]).next((e=>{i[l]=e,++s,s===o&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new ue(((n,r)=>{const o=()=>{!0===e()?t().next((()=>{o()}),r):n()};o()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function de(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function fe(e){return null==e}function pe(e){return 0===e&&1/e==-1/0}function ve(e){return"number"==typeof e&&Number.isInteger(e)&&!pe(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ye(t)),t=ge(e.get(n),t);return ye(t)}function ge(e,t){let n=t;const r=e.length;for(let o=0;o<r;o++){const t=e.charAt(o);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ye(e){return e+""}he.oe=-1;const be=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],we=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],_e=we,Se=[..._e,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ee(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ce(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ke(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new Ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Te(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Te(this.root,e,this.comparator,!1)}getReverseIterator(){return new Te(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Te(this.root,e,this.comparator,!0)}}class Te{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(0===o){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,n,r,o){this.key=e,this.value=t,this.color=null!=n?n:xe.RED,this.left=null!=r?r:xe.EMPTY,this.right=null!=o?o:xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,o){return new xe(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const o=n(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===o?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return xe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw R();if(this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1,xe.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,n,r,o){return this}insert(e,t,n){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Re(this.data.getIterator())}getIteratorFrom(e){return new Re(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ae))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Re{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(e){this.fields=e,e.sort(Z.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new Ae(Z.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return q(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Oe("Invalid base64 string: "+e):e}}(e);return new De(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const Pe=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ne(e){if(F(!!e),"string"==typeof e){let t=0;const n=Pe.exec(e);if(F(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ve(e.seconds),nanos:Ve(e.nanos)}}function Ve(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Le(e){return"string"==typeof e?De.fromBase64String(e):De.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Be(e){const t=e.mapValue.fields.__previous_value__;return Me(t)?Be(t):t}function We(e){const t=Ne(e.mapValue.fields.__local_write_time__.timestampValue);return new G(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,n,r,o,i,s,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=i,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=l}}class $e{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new $e("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof $e&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ke(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Me(e)?4:at(e)?9007199254740991:it(e)?10:11:R()}function ze(e,t){if(e===t)return!0;const n=Ke(e);if(n!==Ke(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return We(e).isEqual(We(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ne(e.timestampValue),r=Ne(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Le(e.bytesValue).isEqual(Le(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ve(e.geoPointValue.latitude)===Ve(t.geoPointValue.latitude)&&Ve(e.geoPointValue.longitude)===Ve(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ve(e.integerValue)===Ve(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ve(e.doubleValue),r=Ve(t.doubleValue);return n===r?pe(n)===pe(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return q(e.arrayValue.values||[],t.arrayValue.values||[],ze);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ee(n)!==Ee(r))return!1;for(const o in n)if(n.hasOwnProperty(o)&&(void 0===r[o]||!ze(n[o],r[o])))return!1;return!0}(e,t);default:return R()}}function He(e,t){return void 0!==(e.values||[]).find((e=>ze(e,t)))}function qe(e,t){if(e===t)return 0;const n=Ke(e),r=Ke(t);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ve(e.integerValue||e.doubleValue),r=Ve(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Ge(e.timestampValue,t.timestampValue);case 4:return Ge(We(e),We(t));case 5:return H(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Le(e),r=Le(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let o=0;o<n.length&&o<r.length;o++){const e=H(n[o],r[o]);if(0!==e)return e}return H(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=H(Ve(e.latitude),Ve(t.latitude));return 0!==n?n:H(Ve(e.longitude),Ve(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Ye(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,o,i;const s=e.fields||{},a=t.fields||{},l=null===(n=s.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,c=H((null===(o=null==l?void 0:l.values)||void 0===o?void 0:o.length)||0,(null===(i=null==u?void 0:u.values)||void 0===i?void 0:i.length)||0);return 0!==c?c:Ye(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Ue.mapValue&&t===Ue.mapValue)return 0;if(e===Ue.mapValue)return 1;if(t===Ue.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),o=t.fields||{},i=Object.keys(o);r.sort(),i.sort();for(let s=0;s<r.length&&s<i.length;++s){const e=H(r[s],i[s]);if(0!==e)return e;const t=qe(n[r[s]],o[i[s]]);if(0!==t)return t}return H(r.length,i.length)}(e.mapValue,t.mapValue);default:throw R()}}function Ge(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return H(e,t);const n=Ne(e),r=Ne(t),o=H(n.seconds,r.seconds);return 0!==o?o:H(n.nanos,r.nanos)}function Ye(e,t){const n=e.values||[],r=t.values||[];for(let o=0;o<n.length&&o<r.length;++o){const e=qe(n[o],r[o]);if(e)return e}return H(n.length,r.length)}function Xe(e){return Je(e)}function Je(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ne(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Le(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ee.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Je(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const o of t)r?r=!1:n+=",",n+=`${o}:${Je(e.fields[o])}`;return n+"}"}(e.mapValue):R()}function Qe(e){switch(Ke(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Be(e);return t?16+Qe(t):16;case 5:return 2*e.stringValue.length;case 6:return Le(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce(((e,t)=>e+Qe(t)),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return Ce(e.fields,((e,n)=>{t+=e.length+Qe(n)})),t}(e.mapValue);default:throw R()}}function Ze(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function et(e){return!!e&&"integerValue"in e}function tt(e){return!!e&&"arrayValue"in e}function nt(e){return!!e&&"nullValue"in e}function rt(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ot(e){return!!e&&"mapValue"in e}function it(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function st(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ce(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=st(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=st(e.arrayValue.values[n]);return t}return Object.assign({},e)}function at(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ot(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=st(t)}setAll(e){let t=Z.emptyPath(),n={},r=[];e.forEach(((e,o)=>{if(!t.isImmediateParentOf(o)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=o.popLast()}e?n[o.lastSegment()]=st(e):r.push(o.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,n,r)}delete(e){const t=this.field(e.popLast());ot(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ot(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ce(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new lt(st(this.value))}}function ut(e){const t=[];return Ce(e.fields,((e,n)=>{const r=new Z([e]);if(ot(n)){const e=ut(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Fe(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ct{constructor(e,t,n,r,o,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=o,this.data=i,this.documentState=s}static newInvalidDocument(e){return new ct(e,0,Y.min(),Y.min(),Y.min(),lt.empty(),0)}static newFoundDocument(e,t,n,r){return new ct(e,1,t,Y.min(),n,r,0)}static newNoDocument(e,t){return new ct(e,2,t,Y.min(),Y.min(),lt.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,Y.min(),Y.min(),lt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){this.position=e,this.inclusive=t}}function ht(e,t,n){let r=0;for(let o=0;o<e.position.length;o++){const i=t[o],s=e.position[o];if(r=i.field.isKeyField()?ee.comparator(ee.fromName(s.referenceValue),n.key):qe(s,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function ft(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ze(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t="asc"){this.field=e,this.dir=t}}function vt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{}class gt extends mt{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new kt(e,t,n):"array-contains"===t?new At(e,n):"in"===t?new Rt(e,n):"not-in"===t?new Ft(e,n):"array-contains-any"===t?new Ot(e,n):new gt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new It(e,n):new Tt(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(qe(t,this.value)):null!==t&&Ke(this.value)===Ke(t)&&this.matchesComparison(qe(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yt extends mt{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new yt(e,t)}matches(e){return bt(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function bt(e){return"and"===e.op}function wt(e){return _t(e)&&bt(e)}function _t(e){for(const t of e.filters)if(t instanceof yt)return!1;return!0}function St(e){if(e instanceof gt)return e.field.canonicalString()+e.op.toString()+Xe(e.value);if(wt(e))return e.filters.map((e=>St(e))).join(",");{const t=e.filters.map((e=>St(e))).join(",");return`${e.op}(${t})`}}function Et(e,t){return e instanceof gt?function(e,t){return t instanceof gt&&e.op===t.op&&e.field.isEqual(t.field)&&ze(e.value,t.value)}(e,t):e instanceof yt?function(e,t){return t instanceof yt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Et(n,t.filters[r])),!0)}(e,t):void R()}function Ct(e){return e instanceof gt?function(e){return`${e.field.canonicalString()} ${e.op} ${Xe(e.value)}`}(e):e instanceof yt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ct).join(" ,")+"}"}(e):"Filter"}class kt extends gt{constructor(e,t,n){super(e,t,n),this.key=ee.fromName(n.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class It extends gt{constructor(e,t){super(e,"in",t),this.keys=xt("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Tt extends gt{constructor(e,t){super(e,"not-in",t),this.keys=xt("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function xt(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ee.fromName(e.referenceValue)))}class At extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tt(t)&&He(t.arrayValue,this.value)}}class Rt extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&He(this.value.arrayValue,t)}}class Ft extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(He(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!He(this.value.arrayValue,t)}}class Ot extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tt(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>He(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t=null,n=[],r=[],o=null,i=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=i,this.endAt=s,this.ue=null}}function Pt(e,t=null,n=[],r=[],o=null,i=null,s=null){return new Dt(e,t,n,r,o,i,s)}function Nt(e){const t=O(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>St(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),fe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Xe(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Xe(e))).join(",")),t.ue=e}return t.ue}function Vt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!vt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Et(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ft(e.startAt,t.startAt)&&ft(e.endAt,t.endAt)}function Lt(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(e,t=null,n=[],r=[],o=null,i="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=i,this.startAt=s,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bt(e,t,n,r,o,i,s,a){return new Mt(e,t,n,r,o,i,s,a)}function Wt(e){return new Mt(e)}function jt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function $t(e){return null!==e.collectionGroup}function Ut(e){const t=O(e);if(null===t.ce){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Ae(Z.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new pt(r,n))})),e.has(Z.keyField().canonicalString())||t.ce.push(new pt(Z.keyField(),n))}return t.ce}function Kt(e){const t=O(e);return t.le||(t.le=zt(t,Ut(e))),t.le}function zt(e,t){if("F"===e.limitType)return Pt(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new pt(e.field,t)}));const n=e.endAt?new dt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new dt(e.startAt.position,e.startAt.inclusive):null;return Pt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ht(e,t){const n=e.filters.concat([t]);return new Mt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function qt(e,t,n){return new Mt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Gt(e,t){return Vt(Kt(e),Kt(t))&&e.limitType===t.limitType}function Yt(e){return`${Nt(Kt(e))}|lt:${e.limitType}`}function Xt(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Ct(e))).join(", ")}]`),fe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Xe(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Xe(e))).join(",")),`Target(${t})`}(Kt(e))}; limitType=${e.limitType})`}function Jt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ee.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Ut(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=ht(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ut(e),t))&&!(e.endAt&&!function(e,t,n){const r=ht(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ut(e),t))}(e,t)}function Qt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Zt(e){return(t,n)=>{let r=!1;for(const o of Ut(e)){const e=en(o,t,n);if(0!==e)return e;r=r||o.field.isKeyField()}return 0}}function en(e,t,n){const r=e.field.isKeyField()?ee.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),o=n.data.field(e);return null!==r&&null!==o?qe(r,o):R()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,o]of n)if(this.equalsFn(r,e))return o}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ce(this.inner,((t,n)=>{for(const[r,o]of n)e(r,o)}))}isEmpty(){return ke(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Ie(ee.comparator);function rn(){return nn}const on=new Ie(ee.comparator);function sn(...e){let t=on;for(const n of e)t=t.insert(n.key,n);return t}function an(e){let t=on;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ln(){return cn()}function un(){return cn()}function cn(){return new tn((e=>e.toString()),((e,t)=>e.isEqual(t)))}const dn=new Ie(ee.comparator),hn=new Ae(ee.comparator);function fn(...e){let t=hn;for(const n of e)t=t.add(n);return t}const pn=new Ae(H);function vn(){return pn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pe(t)?"-0":t}}function gn(e){return{integerValue:""+e}}function yn(e,t){return ve(t)?gn(t):mn(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this._=void 0}}function wn(e,t,n){return e instanceof En?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Me(t)&&(t=Be(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Cn?kn(e,t):e instanceof In?Tn(e,t):function(e,t){const n=Sn(e,t),r=An(n)+An(e.Pe);return et(n)&&et(e.Pe)?gn(r):mn(e.serializer,r)}(e,t)}function _n(e,t,n){return e instanceof Cn?kn(e,t):e instanceof In?Tn(e,t):n}function Sn(e,t){return e instanceof xn?function(e){return et(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class En extends bn{}class Cn extends bn{constructor(e){super(),this.elements=e}}function kn(e,t){const n=Rn(t);for(const r of e.elements)n.some((e=>ze(e,r)))||n.push(r);return{arrayValue:{values:n}}}class In extends bn{constructor(e){super(),this.elements=e}}function Tn(e,t){let n=Rn(t);for(const r of e.elements)n=n.filter((e=>!ze(e,r)));return{arrayValue:{values:n}}}class xn extends bn{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function An(e){return Ve(e.integerValue||e.doubleValue)}function Rn(e){return tt(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Cn&&t instanceof Cn||e instanceof In&&t instanceof In?q(e.elements,t.elements,ze):e instanceof xn&&t instanceof xn?ze(e.Pe,t.Pe):e instanceof En&&t instanceof En}(e.transform,t.transform)}class On{constructor(e,t){this.version=e,this.transformResults=t}}class Dn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Nn{}function Vn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Hn(e.key,Dn.none()):new jn(e.key,e.data,Dn.none());{const n=e.data,r=lt.empty();let o=new Ae(Z.comparator);for(let e of t.fields)if(!o.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),o=o.add(e)}return new $n(e.key,r,new Fe(o.toArray()),Dn.none())}}function Ln(e,t,n){e instanceof jn?function(e,t,n){const r=e.value.clone(),o=Kn(e.fieldTransforms,t,n.transformResults);r.setAll(o),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof $n?function(e,t,n){if(!Pn(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Kn(e.fieldTransforms,t,n.transformResults),o=t.data;o.setAll(Un(e)),o.setAll(r),t.convertToFoundDocument(n.version,o).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Mn(e,t,n,r){return e instanceof jn?function(e,t,n,r){if(!Pn(e.precondition,t))return n;const o=e.value.clone(),i=zn(e.fieldTransforms,r,t);return o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null}(e,t,n,r):e instanceof $n?function(e,t,n,r){if(!Pn(e.precondition,t))return n;const o=zn(e.fieldTransforms,r,t),i=t.data;return i.setAll(Un(e)),i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Pn(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Bn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),o=Sn(r.transform,e||null);null!=o&&(null===n&&(n=lt.empty()),n.set(r.field,o))}return n||null}function Wn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&q(e,t,((e,t)=>Fn(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class jn extends Nn{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class $n extends Nn{constructor(e,t,n,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Un(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Kn(e,t,n){const r=new Map;F(e.length===n.length);for(let o=0;o<n.length;o++){const i=e[o],s=i.transform,a=t.data.field(i.field);r.set(i.field,_n(s,a,n[o]))}return r}function zn(e,t,n){const r=new Map;for(const o of e){const e=o.transform,i=n.data.field(o.field);r.set(o.field,wn(e,i,t))}return r}class Hn extends Nn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qn extends Nn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Ln(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Mn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Mn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=un();return this.mutations.forEach((r=>{const o=e.get(r.key),i=o.overlayedDocument;let s=this.applyToLocalView(i,o.mutatedFields);s=t.has(r.key)?null:s;const a=Vn(i,s);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Y.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fn())}isEqual(e){return this.batchId===e.batchId&&q(this.mutations,e.mutations,((e,t)=>Wn(e,t)))&&q(this.baseMutations,e.baseMutations,((e,t)=>Wn(e,t)))}}class Yn{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){F(e.mutations.length===n.length);let r=function(){return dn}();const o=e.mutations;for(let i=0;i<o.length;i++)r=r.insert(o[i].key,n[i].version);return new Yn(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn,Zn;function er(e){switch(e){default:return R();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function tr(e){if(void 0===e)return T("GRPC error has no .code"),D.UNKNOWN;switch(e){case Qn.OK:return D.OK;case Qn.CANCELLED:return D.CANCELLED;case Qn.UNKNOWN:return D.UNKNOWN;case Qn.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Qn.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Qn.INTERNAL:return D.INTERNAL;case Qn.UNAVAILABLE:return D.UNAVAILABLE;case Qn.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Qn.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Qn.NOT_FOUND:return D.NOT_FOUND;case Qn.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Qn.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Qn.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Qn.ABORTED:return D.ABORTED;case Qn.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Qn.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Qn.DATA_LOSS:return D.DATA_LOSS;default:return R()}}(Zn=Qn||(Qn={}))[Zn.OK=0]="OK",Zn[Zn.CANCELLED=1]="CANCELLED",Zn[Zn.UNKNOWN=2]="UNKNOWN",Zn[Zn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Zn[Zn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Zn[Zn.NOT_FOUND=5]="NOT_FOUND",Zn[Zn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Zn[Zn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Zn[Zn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Zn[Zn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Zn[Zn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Zn[Zn.ABORTED=10]="ABORTED",Zn[Zn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Zn[Zn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Zn[Zn.INTERNAL=13]="INTERNAL",Zn[Zn.UNAVAILABLE=14]="UNAVAILABLE",Zn[Zn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let nr=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new r([4294967295,4294967295],0);function ir(e){const t=rr().encode(e),n=new o;return n.update(t),new Uint8Array(n.digest())}function sr(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),o=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new r([n,o],0),new r([i,s],0)]}class ar{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new lr(`Invalid padding: ${t}`);if(n<0)throw new lr(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new lr(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new lr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=r.fromNumber(this.Ie)}Ee(e,t,n){let o=e.add(t.multiply(r.fromNumber(n)));return 1===o.compare(or)&&(o=new r([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=ir(e),[n,r]=sr(t);for(let o=0;o<this.hashCount;o++){const e=this.Ee(n,r,o);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),i=new ar(o,r,t);return n.forEach((e=>i.insert(e))),i}insert(e){if(0===this.Ie)return;const t=ir(e),[n,r]=sr(t);for(let o=0;o<this.hashCount;o++){const e=this.Ee(n,r,o);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,n,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,cr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ur(Y.min(),r,new Ie(H),rn(),fn())}}class cr{constructor(e,t,n,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new cr(n,t,fn(),fn(),fn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class hr{constructor(e,t){this.targetId=e,this.me=t}}class fr{constructor(e,t,n=De.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class pr{constructor(){this.fe=0,this.ge=gr(),this.pe=De.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fn(),t=fn(),n=fn();return this.ge.forEach(((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:R()}})),new cr(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=gr()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,F(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vr{constructor(e){this.Le=e,this.Be=new Map,this.ke=rn(),this.qe=mr(),this.Qe=new Ie(H)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:R()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const o=r.target;if(Lt(o))if(0===n){const e=new ee(o.path);this.Ue(t,e,ct.newNoDocument(e,Y.min()))}else F(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),o=n?this.Xe(n,e,r):1;if(0!==o){this.je(t);const e=2===o?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}null==nr||nr.et(function(e,t,n,r,o){var i,s,a,l,u,c;const d={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},h=t.unchangedNames;return h&&(d.bloomFilter={applied:0===o,hashCount:null!==(i=null==h?void 0:h.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(l=null===(a=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===a?void 0:a.length)&&void 0!==l?l:0,padding:null!==(c=null===(u=null==h?void 0:h.bits)||void 0===u?void 0:u.padding)&&void 0!==c?c:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),d}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.me,this.Le.tt(),n,o))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:o=0}=t;let i,s;try{i=Le(n).toUint8Array()}catch(e){if(e instanceof Oe)return x("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{s=new ar(i,r,o)}catch(e){return x(e instanceof lr?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===s.Ie?null:s}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const o=this.Le.tt(),i=`projects/${o.projectId}/databases/${o.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const o=this.Je(r);if(o){if(n.current&&Lt(o.target)){const t=new ee(o.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,ct.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=fn();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new ur(e,t,this.Qe,this.ke,n);return this.ke=rn(),this.qe=mr(),this.Qe=new Ie(H),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new pr,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ae(H),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||I("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new pr),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function mr(){return new Ie(ee.comparator)}function gr(){return new Ie(ee.comparator)}const yr=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),br=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),wr=(()=>{const e={and:"AND",or:"OR"};return e})();class _r{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sr(e,t){return e.useProto3Json||fe(t)?t:{value:t}}function Er(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cr(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function kr(e,t){return Er(e,t.toTimestamp())}function Ir(e){return F(!!e),Y.fromTimestamp(function(e){const t=Ne(e);return new G(t.seconds,t.nanos)}(e))}function Tr(e,t){return xr(e,t).canonicalString()}function xr(e,t){const n=function(e){return new J(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Ar(e){const t=J.fromString(e);return F(Qr(t)),t}function Rr(e,t){return Tr(e.databaseId,t.path)}function Fr(e,t){const n=Ar(t);if(n.get(1)!==e.databaseId.projectId)throw new P(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new P(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ee(Nr(n))}function Or(e,t){return Tr(e.databaseId,t)}function Dr(e){const t=Ar(e);return 4===t.length?J.emptyPath():Nr(t)}function Pr(e){return new J(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Nr(e){return F(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Vr(e,t,n){return{name:Rr(e,t),fields:n.value.mapValue.fields}}function Lr(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:R()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(F(void 0===t||"string"==typeof t),De.fromBase64String(t||"")):(F(void 0===t||t instanceof Buffer||t instanceof Uint8Array),De.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?D.UNKNOWN:tr(e.code);return new P(t,e.message||"")}(s);n=new fr(r,o,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const o=Fr(e,r.document.name),i=Ir(r.document.updateTime),s=r.document.createTime?Ir(r.document.createTime):Y.min(),a=new lt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(o,i,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new dr(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const o=Fr(e,r.document),i=r.readTime?Ir(r.readTime):Y.min(),s=ct.newNoDocument(o,i),a=r.removedTargetIds||[];n=new dr([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const o=Fr(e,r.document),i=r.removedTargetIds||[];n=new dr([],i,o,null)}else{if(!("filter"in t))return R();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:o}=e,i=new Jn(r,o),s=e.targetId;n=new hr(s,i)}}return n}function Mr(e,t){let n;if(t instanceof jn)n={update:Vr(e,t.key,t.value)};else if(t instanceof Hn)n={delete:Rr(e,t.key)};else if(t instanceof $n)n={update:Vr(e,t.key,t.data),updateMask:Jr(t.fieldMask)};else{if(!(t instanceof qn))return R();n={verify:Rr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof En)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Cn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof In)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof xn)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw R()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:kr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:R()}(e,t.precondition)),n}function Br(e,t){return e&&e.length>0?(F(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ir(e.updateTime):Ir(t);return n.isEqual(Y.min())&&(n=Ir(t)),new On(n,e.transformResults||[])}(e,t)))):[]}function Wr(e,t){return{documents:[Or(e,t.path)]}}function jr(e,t){const n={structuredQuery:{}},r=t.path;let o;null!==t.collectionGroup?(o=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Or(e,o);const i=function(e){if(0!==e.length)return Xr(yt.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Gr(e.field),direction:zr(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Sr(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:o}}function $r(e){let t=Dr(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){F(1===r);const e=n.from[0];e.allDescendants?o=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Kr(e);return t instanceof yt&&wt(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=function(e){return e.map((e=>function(e){return new pt(Yr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,fe(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new dt(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new dt(n,t)}(n.endAt)),Bt(t,o,s,i,a,"F",l,u)}function Ur(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Kr(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yr(e.unaryFilter.field);return gt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Yr(e.unaryFilter.field);return gt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yr(e.unaryFilter.field);return gt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yr(e.unaryFilter.field);return gt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(e):void 0!==e.fieldFilter?function(e){return gt.create(Yr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return yt.create(e.compositeFilter.filters.map((e=>Kr(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return R()}}(e.compositeFilter.op))}(e):R()}function zr(e){return yr[e]}function Hr(e){return br[e]}function qr(e){return wr[e]}function Gr(e){return{fieldPath:e.canonicalString()}}function Yr(e){return Z.fromServerFormat(e.fieldPath)}function Xr(e){return e instanceof gt?function(e){if("=="===e.op){if(rt(e.value))return{unaryFilter:{field:Gr(e.field),op:"IS_NAN"}};if(nt(e.value))return{unaryFilter:{field:Gr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rt(e.value))return{unaryFilter:{field:Gr(e.field),op:"IS_NOT_NAN"}};if(nt(e.value))return{unaryFilter:{field:Gr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(e.field),op:Hr(e.op),value:e.value}}}(e):e instanceof yt?function(e){const t=e.getFilters().map((e=>Xr(e)));return 1===t.length?t[0]:{compositeFilter:{op:qr(e.op),filters:t}}}(e):R()}function Jr(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Qr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,n,r,o=Y.min(),i=Y.min(),s=De.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.ct=e}}function to(e){const t=$r({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?qt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Ve(e.integerValue));else if("doubleValue"in e){const n=Ve(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),pe(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=Ne(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Le(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?at(e)?this.dt(t,Number.MAX_SAFE_INTEGER):it(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):R()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const r of Object.keys(n))this.Vt(r,t),this.Tt(n[r],t)}wt(e,t){var n,r;const o=e.fields||{};this.dt(t,53);const i="value",s=(null===(r=null===(n=o[i].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(t,15),t.At(Ve(s)),this.Vt(i,t),this.Tt(o[i],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const r of n)this.Tt(r,t)}yt(e,t){this.dt(t,37),ee.fromName(e).path.forEach((e=>{this.dt(t,60),this.Dt(e,t)}))}dt(e,t){e.At(t)}ft(e){e.At(2)}}no.vt=new no;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(){this.un=new oo}addToCollectionParentIndex(e,t){return this.un.add(t),ue.resolve()}getCollectionParents(e,t){return ue.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return ue.resolve()}deleteFieldIndex(e,t){return ue.resolve()}deleteAllFieldIndexes(e){return ue.resolve()}createTargetIndexes(e,t){return ue.resolve()}getDocumentsMatchingTarget(e,t){return ue.resolve(null)}getIndexType(e,t){return ue.resolve(0)}getFieldIndexes(e,t){return ue.resolve([])}getNextCollectionGroupToUpdate(e){return ue.resolve(null)}getMinOffset(e,t){return ue.resolve(oe.min())}getMinOffsetFromCollectionGroup(e,t){return ue.resolve(oe.min())}updateCollectionGroup(e,t,n){return ue.resolve()}updateIndexEntries(e,t){return ue.resolve()}}class oo{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ae(J.comparator),o=!r.has(n);return this.index[t]=r.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ae(J.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const io={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class so{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new so(e,so.DEFAULT_COLLECTION_PERCENTILE,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */so.DEFAULT_COLLECTION_PERCENTILE=10,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,so.DEFAULT=new so(41943040,so.DEFAULT_COLLECTION_PERCENTILE,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),so.DISABLED=new so(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ao(0)}static kn(){return new ao(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lo([e,t],[n,r]){const o=H(e,n);return 0===o?H(t,r):o}class uo{constructor(e){this.Un=e,this.buffer=new Ae(lo),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();lo(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class co{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return null!==this.jn}Hn(e){I("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){de(e)?I("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await le(e)}await this.Hn(3e5)}))}}class ho{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return ue.resolve(he.oe);const n=new uo(t);return this.Jn.forEachTarget(e,(e=>n.zn(e.sequenceNumber))).next((()=>this.Jn.Zn(e,(e=>n.zn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector","Garbage collection skipped; disabled"),ue.resolve(io)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),io):this.Xn(e,t)))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,r,o,i,s,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(I("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,s=Date.now(),this.removeTargets(e,n,t)))).next((t=>(o=t,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),k()<=a.$b.DEBUG&&I("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-c}ms\n\tDetermined least recently used ${r} in `+(s-i)+"ms\n"+`\tRemoved ${o} targets in `+(l-s)+"ms\n"+`\tRemoved ${e} documents in `+(u-l)+"ms\n"+`Total Duration: ${u-c}ms`),ue.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:e}))))}}function fo(e,t){return new ho(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po{constructor(){this.changes=new tn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ue.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vo{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Mn(n.mutation,e,Fe.empty(),G.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,fn()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=fn()){const r=ln();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=sn();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ln();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,fn())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let o=rn();const i=cn(),s=function(){return cn()}();return t.forEach(((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof $n)?o=o.insert(t.key,t):void 0!==s?(i.set(t.key,s.mutation.getFieldMask()),Mn(s.mutation,t,s.mutation.getFieldMask(),G.now())):i.set(t.key,Fe.empty())})),this.recalculateAndSaveOverlays(e,o).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return s.set(e,new vo(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(e,t){const n=cn();let r=new Ie(((e,t)=>e-t)),o=fn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const o of e)o.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let s=n.get(e)||Fe.empty();s=o.applyToLocalView(i,s),n.set(e,s);const a=(r.get(o.batchId)||fn()).add(e);r=r.insert(o.batchId,a)}))})).next((()=>{const i=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,l=r.value,u=un();l.forEach((e=>{if(!o.has(e)){const r=Vn(t.get(e),n.get(e));null!==r&&u.set(e,r),o=o.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return ue.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$t(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((o=>{const i=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-o.size):ue.resolve(ln());let s=-1,a=o;return i.next((t=>ue.forEach(t,((t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),o.get(t)?ue.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,o))).next((()=>this.computeViews(e,a,t,fn()))).next((e=>({batchId:s,changes:an(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next((e=>{let t=sn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const o=t.collectionGroup;let i=sn();return this.indexManager.getCollectionParents(e,o).next((s=>ue.forEach(s,(s=>{const a=function(e,t){return new Mt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(o));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(o=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,r)))).next((e=>{o.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ct.newInvalidDocument(r)))}));let n=sn();return e.forEach(((e,r)=>{const i=o.get(e);void 0!==i&&Mn(i.mutation,r,Fe.empty(),G.now()),Jt(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return ue.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Ir(e.createTime)}}(t)),ue.resolve()}getNamedQuery(e,t){return ue.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(e){return{name:e.name,query:to(e.bundledQuery),readTime:Ir(e.readTime)}}(t)),ue.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.overlays=new Ie(ee.comparator),this.Ir=new Map}getOverlay(e,t){return ue.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ln();return ue.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),ue.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),ue.resolve()}getOverlaysForCollection(e,t,n){const r=ln(),o=t.length+1,i=new ee(t.child("")),s=this.overlays.getIteratorFrom(i);for(;s.hasNext();){const e=s.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===o&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ue.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let o=new Ie(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=o.get(e.largestBatchId);null===t&&(t=ln(),o=o.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=ln(),a=o.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>s.set(e,t))),s.size()>=r)break;return ue.resolve(s)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Xn(t,n));let o=this.Ir.get(t);void 0===o&&(o=fn(),this.Ir.set(t,o)),this.Ir.set(t,o.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return ue.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ue.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.Tr=new Ae(_o.Er),this.dr=new Ae(_o.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new _o(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new _o(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new ee(new J([])),n=new _o(t,e),r=new _o(t,e+1),o=[];return this.dr.forEachInRange([n,r],(e=>{this.Vr(e),o.push(e.key)})),o}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ee(new J([])),n=new _o(t,e),r=new _o(t,e+1);let o=fn();return this.dr.forEachInRange([n,r],(e=>{o=o.add(e.key)})),o}containsKey(e){const t=new _o(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class _o{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ee.comparator(e.key,t.key)||H(e.wr,t.wr)}static Ar(e,t){return H(e.wr,t.wr)||ee.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ae(_o.Er)}checkEmpty(e){return ue.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Gn(o,t,n,r);this.mutationQueue.push(i);for(const s of r)this.br=this.br.add(new _o(s.key,o)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return ue.resolve(i)}lookupMutationBatch(e,t){return ue.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),o=r<0?0:r;return ue.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return ue.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return ue.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new _o(t,0),r=new _o(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,r],(e=>{const t=this.Dr(e.wr);o.push(t)})),ue.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ae(H);return t.forEach((e=>{const t=new _o(e,0),r=new _o(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],(e=>{n=n.add(e.wr)}))})),ue.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let o=n;ee.isDocumentKey(o)||(o=o.child(""));const i=new _o(new ee(o),0);let s=new Ae(H);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.wr)),!0)}),i),ue.resolve(this.Cr(s))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){F(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return ue.forEach(t.mutations,(r=>{const o=new _o(r.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new _o(t,0),r=this.br.firstAfterOrEqual(n);return ue.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ue.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.Mr=e,this.docs=function(){return new Ie(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),o=r?r.size:0,i=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ue.resolve(n?n.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let n=rn();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ct.newInvalidDocument(e))})),ue.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let o=rn();const i=t.path,s=new ee(i.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:e,value:{document:s}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||ie(re(s),n)<=0||(r.has(s.key)||Jt(t,s))&&(o=o.insert(s.key,s.mutableCopy()))}return ue.resolve(o)}getAllFromCollectionGroup(e,t,n,r){R()}Or(e,t){return ue.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Co(this)}getSize(e){return ue.resolve(this.size)}}class Co extends po{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)})),ue.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.persistence=e,this.Nr=new tn((e=>Nt(e)),Vt),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new wo,this.targetCount=0,this.kr=ao.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),ue.resolve()}getLastRemoteSnapshotVersion(e){return ue.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ue.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),ue.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),ue.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ao(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,ue.resolve()}updateTargetData(e,t){return this.Kn(t),ue.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,ue.resolve()}removeTargets(e,t,n){let r=0;const o=[];return this.Nr.forEach(((i,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.Nr.delete(i),o.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)})),ue.waitFor(o).next((()=>r))}getTargetCount(e){return ue.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return ue.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),ue.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((t=>{o.push(r.markPotentiallyOrphaned(e,t))})),ue.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),ue.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return ue.resolve(n)}containsKey(e,t){return ue.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.qr={},this.overlays={},this.Qr=new he(0),this.Kr=!1,this.Kr=!0,this.$r=new bo,this.referenceDelegate=e(this),this.Ur=new ko(this),this.indexManager=new ro,this.remoteDocumentCache=function(e){return new Eo(e)}((e=>this.referenceDelegate.Wr(e))),this.serializer=new eo(t),this.Gr=new go(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yo,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new So(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){I("MemoryPersistence","Starting transaction:",e);const r=new To(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((e=>this.referenceDelegate.jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Hr(e,t){return ue.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class To extends ae{constructor(e){super(),this.currentSequenceNumber=e}}class xo{constructor(e){this.persistence=e,this.Jr=new wo,this.Yr=null}static Zr(e){return new xo(e)}get Xr(){if(this.Yr)return this.Yr;throw R()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),ue.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),ue.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),ue.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ue.forEach(this.Xr,(n=>{const r=ee.fromPath(n);return this.ei(e,r).next((e=>{e||t.removeEntry(r,Y.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return ue.or([()=>ue.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}class Ao{constructor(e,t){this.persistence=e,this.ti=new tn((e=>me(e.path)),((e,t)=>e.isEqual(t))),this.garbageCollector=fo(this,t)}static Zr(e,t){return new Ao(e,t)}zr(){}jr(e){return ue.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Yn(e){const t=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}er(e){let t=0;return this.Zn(e,(e=>{t++})).next((()=>t))}Zn(e,t){return ue.forEach(this.ti,((n,r)=>this.nr(e,n,r).next((e=>e?ue.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.Or(e,(r=>this.nr(e,r,t).next((e=>{e||(n++,o.removeEntry(r,Y.min()))})))).next((()=>o.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.ti.set(t,e.currentSequenceNumber),ue.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ti.set(n,e.currentSequenceNumber),ue.resolve()}removeReference(e,t,n){return this.ti.set(n,e.currentSequenceNumber),ue.resolve()}updateLimboDocument(e,t){return this.ti.set(t,e.currentSequenceNumber),ue.resolve()}Wr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qe(e.data.value)),t}nr(e,t,n){return ue.or([()=>this.persistence.Hr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.ti.get(t);return ue.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=fn(),r=fn();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Ro(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return(0,l.nr)()?8:ce((0,l.ZQ)())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const o={result:null};return this.Yi(e,t).next((e=>{o.result=e})).next((()=>{if(!o.result)return this.Zi(e,t,r,n).next((e=>{o.result=e}))})).next((()=>{if(o.result)return;const n=new Fo;return this.Xi(e,t,n).next((r=>{if(o.result=r,this.zi)return this.es(e,t,n,r.size)}))})).next((()=>o.result))}es(e,t,n,r){return n.documentReadCount<this.ji?(k()<=a.$b.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",Xt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),ue.resolve()):(k()<=a.$b.DEBUG&&I("QueryEngine","Query:",Xt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(k()<=a.$b.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",Xt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):ue.resolve())}Yi(e,t){if(jt(t))return ue.resolve(null);let n=Kt(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=qt(t,null,"F"),n=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const o=fn(...r);return this.Ji.getDocuments(e,o).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.ts(t,r);return this.ns(t,i,o,n.readTime)?this.Yi(e,qt(t,null,"F")):this.rs(e,i,t,n)}))))})))))}Zi(e,t,n,r){return jt(t)||r.isEqual(Y.min())?ue.resolve(null):this.Ji.getDocuments(e,n).next((o=>{const i=this.ts(t,o);return this.ns(t,i,n,r)?ue.resolve(null):(k()<=a.$b.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xt(t)),this.rs(e,i,t,ne(r,-1)).next((e=>e)))}))}ts(e,t){let n=new Ae(Zt(e));return t.forEach(((t,r)=>{Jt(e,r)&&(n=n.add(r))})),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const o="F"===e.limitType?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Xi(e,t,n){return k()<=a.$b.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",Xt(t)),this.Ji.getDocumentsMatchingQuery(e,t,oe.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new Ie(H),this._s=new tn((e=>Nt(e)),Vt),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mo(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function Po(e,t,n,r){return new Do(e,t,n,r)}async function No(e,t){const n=O(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((o=>(r=o,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const o=[],i=[];let s=fn();for(const e of r){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next((e=>({hs:e,removedBatchIds:o,addedBatchIds:i})))}))}))}function Vo(e,t){const n=O(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const o=n.batch,i=o.keys();let s=ue.resolve();return i.forEach((e=>{s=s.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);F(null!==i),t.version.compareTo(i)<0&&(o.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(t,o)))}(n,e,t,o).next((()=>o.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=fn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Lo(e){const t=O(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function Mo(e,t){const n=O(e),r=t.snapshotVersion;let o=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.cs.newChangeBuffer({trackRemovals:!0});o=n.os;const s=[];t.targetChanges.forEach(((i,a)=>{const l=o.get(a);if(!l)return;s.push(n.Ur.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(e,i.addedDocuments,a))));let u=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(De.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),o=o.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,u,i)&&s.push(n.Ur.updateTargetData(e,u))}));let a=rn(),l=fn();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),s.push(Bo(e,i,t.documentUpdates).next((e=>{a=e.Ps,l=e.Is}))),!r.isEqual(Y.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r)));s.push(t)}return ue.waitFor(s).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.os=o,e)))}function Bo(e,t,n){let r=fn(),o=fn();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=rn();return n.forEach(((n,i)=>{const s=e.get(n);i.isFoundDocument()!==s.isFoundDocument()&&(o=o.add(n)),i.isNoDocument()&&i.version.isEqual(Y.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):I("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)})),{Ps:r,Is:o}}))}function Wo(e,t){const n=O(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function jo(e,t){const n=O(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ur.getTargetData(e,t).next((o=>o?(r=o,ue.resolve(r)):n.Ur.allocateTargetId(e).next((o=>(r=new Zr(t,o,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}async function $o(e,t,n){const r=O(e),o=r.os.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,o)))}catch(e){if(!de(e))throw e;I("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.os=r.os.remove(t),r._s.delete(o.target)}function Uo(e,t,n){const r=O(e);let o=Y.min(),i=fn();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=O(e),o=r._s.get(n);return void 0!==o?ue.resolve(r.os.get(o)):r.Ur.getTargetData(t,n)}(r,e,Kt(t)).next((t=>{if(t)return o=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.ss.getDocumentsMatchingQuery(e,t,n?o:Y.min(),n?i:fn()))).next((e=>(Ko(r,Qt(t),e),{documents:e,Ts:i})))))}function Ko(e,t,n){let r=e.us.get(t)||Y.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.us.set(t,r)}class zo{constructor(){this.activeTargetIds=vn()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ho{constructor(){this.so=new zo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new zo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo=null;function Xo(){return null===Yo?Yo=function(){return 268435456+Math.round(2147483648*Math.random())}():Yo++,"0x"+Yo.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Jo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="WebChannelConnection";class ei extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,o){const i=Xo(),s=this.xo(e,t.toUriEncodedString());I("RestConnection",`Sending RPC '${e}' ${i}:`,s,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,o),this.No(e,s,a,n).then((t=>(I("RestConnection",`Received RPC '${e}' ${i}: `,t),t)),(t=>{throw x("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",s,"request:",n),t}))}Lo(e,t,n,r,o,i){return this.Mo(e,t,n,r,o)}Oo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=Jo[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const o=Xo();return new Promise(((i,s)=>{const a=new d;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const t=a.getResponseJson();I(Zo,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(t)),i(t);break;case p.TIMEOUT:I(Zo,`RPC '${e}' ${o} timed out`),s(new P(D.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(I(Zo,`RPC '${e}' ${o} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(t)>=0?t:D.UNKNOWN}(t.status);s(new P(e,t.message))}else s(new P(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new P(D.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{I(Zo,`RPC '${e}' ${o} completed.`)}}));const l=JSON.stringify(r);I(Zo,`RPC '${e}' ${o} sending request:`,r),a.send(t,"POST",l,n,15)}))}Bo(e,t,n){const r=Xo(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=y(),s=g(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=o.join("");I(Zo,`Creating RPC '${e}' stream ${r}: ${u}`,a);const c=i.createWebChannel(u,a);let d=!1,f=!1;const p=new Qo({Io:t=>{f?I(Zo,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(I(Zo,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),I(Zo,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},To:()=>c.close()}),b=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return b(c,h.EventType.OPEN,(()=>{f||(I(Zo,`RPC '${e}' stream ${r} transport opened.`),p.yo())})),b(c,h.EventType.CLOSE,(()=>{f||(f=!0,I(Zo,`RPC '${e}' stream ${r} transport closed`),p.So())})),b(c,h.EventType.ERROR,(t=>{f||(f=!0,x(Zo,`RPC '${e}' stream ${r} transport errored:`,t),p.So(new P(D.UNAVAILABLE,"The operation could not be completed")))})),b(c,h.EventType.MESSAGE,(t=>{var n;if(!f){const o=t.data[0];F(!!o);const i=o,s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){I(Zo,`RPC '${e}' stream ${r} received error:`,s);const t=s.status;let n=function(e){const t=Qn[e];if(void 0!==t)return tr(t)}(t),o=s.message;void 0===n&&(n=D.INTERNAL,o="Unknown error status: "+t+" with message "+s.message),f=!0,p.So(new P(n,o)),c.close()}else I(Zo,`RPC '${e}' stream ${r} received:`,o),p.bo(o)}})),b(s,m.STAT_EVENT,(t=>{t.stat===v.PROXY?I(Zo,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===v.NOPROXY&&I(Zo,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.wo()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){return new _r(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,n=1e3,r=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&I("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,n,r,o,i,s,a){this.ui=e,this.Ho=n,this.Jo=r,this.connection=o,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ri(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(T(t.toString()),T("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new P(D.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return I("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ii extends oi{constructor(e,t,n,r,o,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Lr(this.serializer,e),n=function(e){if(!("targetChange"in e))return Y.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Y.min():t.readTime?Ir(t.readTime):Y.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Pr(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Lt(r)?{documents:Wr(e,r)}:{query:jr(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Cr(e,t.resumeToken);const r=Sr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Y.min())>0){n.readTime=Er(e,t.snapshotVersion.toTimestamp());const r=Sr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=Ur(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Pr(this.serializer),t.removeTarget=e,this.a_(t)}}class si extends oi{constructor(e,t,n,r,o,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return F(!!e.streamToken),this.lastStreamToken=e.streamToken,F(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Br(e.writeResults,e.commitTime),n=Ir(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Pr(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Mr(this.serializer,e)))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new P(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,i])=>this.connection.Mo(e,xr(t,n),r,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(D.UNKNOWN,e.toString())}))}Lo(e,t,n,r,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Lo(e,xr(t,n),r,i,s,o))).catch((e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(D.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class li{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(T(t),this.D_=!1):I("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,n,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o((e=>{n.enqueueAndForget((async()=>{yi(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=O(e);t.L_.add(4),await di(t),t.q_.set("Unknown"),t.L_.delete(4),await ci(t)}(this))}))})),this.q_=new li(n,r)}}async function ci(e){if(yi(e))for(const t of e.B_)await t(!0)}async function di(e){for(const t of e.B_)await t(!1)}function hi(e,t){const n=O(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),gi(n)?mi(n):Li(n).r_()&&pi(n,t))}function fi(e,t){const n=O(e),r=Li(n);n.N_.delete(t),r.r_()&&vi(n,t),0===n.N_.size&&(r.r_()?r.o_():yi(n)&&n.q_.set("Unknown"))}function pi(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Li(e).A_(t)}function vi(e,t){e.Q_.xe(t),Li(e).R_(t)}function mi(e){e.Q_=new vr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Li(e).start(),e.q_.v_()}function gi(e){return yi(e)&&!Li(e).n_()&&e.N_.size>0}function yi(e){return 0===O(e).L_.size}function bi(e){e.Q_=void 0}async function wi(e){e.q_.set("Online")}async function _i(e){e.N_.forEach(((t,n)=>{pi(e,t)}))}async function Si(e,t){bi(e),gi(e)?(e.q_.M_(t),mi(e)):e.q_.set("Unknown")}async function Ei(e,t,n){if(e.q_.set("Online"),t instanceof fr&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(n){I("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ci(e,n)}else if(t instanceof dr?e.Q_.Ke(t):t instanceof hr?e.Q_.He(t):e.Q_.We(t),!n.isEqual(Y.min()))try{const t=await Lo(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const o=e.N_.get(r);o&&e.N_.set(r,o.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(De.EMPTY_BYTE_STRING,r.snapshotVersion)),vi(e,t);const o=new Zr(r.target,t,n,r.sequenceNumber);pi(e,o)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){I("RemoteStore","Failed to raise snapshot:",t),await Ci(e,t)}}async function Ci(e,t,n){if(!de(t))throw t;e.L_.add(1),await di(e),e.q_.set("Offline"),n||(n=()=>Lo(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{I("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await ci(e)}))}function ki(e,t){return t().catch((n=>Ci(e,n,t)))}async function Ii(e){const t=O(e),n=Mi(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Ti(t);)try{const e=await Wo(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,xi(t,e)}catch(e){await Ci(t,e)}Ai(t)&&Ri(t)}function Ti(e){return yi(e)&&e.O_.length<10}function xi(e,t){e.O_.push(t);const n=Mi(e);n.r_()&&n.V_&&n.m_(t.mutations)}function Ai(e){return yi(e)&&!Mi(e).n_()&&e.O_.length>0}function Ri(e){Mi(e).start()}async function Fi(e){Mi(e).p_()}async function Oi(e){const t=Mi(e);for(const n of e.O_)t.m_(n.mutations)}async function Di(e,t,n){const r=e.O_.shift(),o=Yn.from(r,t,n);await ki(e,(()=>e.remoteSyncer.applySuccessfulWrite(o))),await Ii(e)}async function Pi(e,t){t&&Mi(e).V_&&await async function(e,t){if(function(e){return er(e)&&e!==D.ABORTED}(t.code)){const n=e.O_.shift();Mi(e).s_(),await ki(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Ii(e)}}(e,t),Ai(e)&&Ri(e)}async function Ni(e,t){const n=O(e);n.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const r=yi(n);n.L_.add(3),await di(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await ci(n)}async function Vi(e,t){const n=O(e);t?(n.L_.delete(2),await ci(n)):t||(n.L_.add(2),await di(n),n.q_.set("Unknown"))}function Li(e){return e.K_||(e.K_=function(e,t,n){const r=O(e);return r.w_(),new ii(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Eo:wi.bind(null,e),Ro:_i.bind(null,e),mo:Si.bind(null,e),d_:Ei.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),gi(e)?mi(e):e.q_.set("Unknown")):(await e.K_.stop(),bi(e))}))),e.K_}function Mi(e){return e.U_||(e.U_=function(e,t,n){const r=O(e);return r.w_(),new si(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Fi.bind(null,e),mo:Pi.bind(null,e),f_:Oi.bind(null,e),g_:Di.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await Ii(e)):(await e.U_.stop(),e.O_.length>0&&(I("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Bi{constructor(e,t,n,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=o,this.deferred=new N,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,o){const i=Date.now()+n,s=new Bi(e,t,i,r,o);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wi(e,t){if(T("AsyncQueue",`${t}: ${e}`),de(e))return new P(D.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ee.comparator(t.key,n.key):(e,t)=>ee.comparator(e.key,t.key),this.keyedMap=sn(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new ji(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ji))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ji;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.W_=new Ie(ee.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):R():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ui{constructor(e,t,n,r,o,i,s,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=o,this.fromCache=i,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,o){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Ui(e,t,ji.emptySet(t),i,n,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class zi{constructor(){this.queries=Hi(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=O(e),r=n.queries;n.queries=Hi(),r.forEach(((e,n)=>{for(const r of n.j_)r.onError(t)}))}(this,new P(D.ABORTED,"Firestore shutting down"))}}function Hi(){return new tn((e=>Yt(e)),Gt)}async function qi(e,t){const n=O(e);let r=3;const o=t.query;let i=n.queries.get(o);i?!i.H_()&&t.J_()&&(r=2):(i=new Ki,r=t.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(o,!0);break;case 1:i.z_=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(e){const n=Wi(e,`Initialization of query '${Xt(t.query)}' failed`);return void t.onError(n)}n.queries.set(o,i),i.j_.push(t),t.Z_(n.onlineState),i.z_&&t.X_(i.z_)&&Ji(n)}async function Gi(e,t){const n=O(e),r=t.query;let o=3;const i=n.queries.get(r);if(i){const e=i.j_.indexOf(t);e>=0&&(i.j_.splice(e,1),0===i.j_.length?o=t.J_()?0:1:!i.H_()&&t.J_()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Yi(e,t){const n=O(e);let r=!1;for(const o of t){const e=o.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(o)&&(r=!0);t.z_=o}}r&&Ji(n)}function Xi(e,t,n){const r=O(e),o=r.queries.get(t);if(o)for(const i of o.j_)i.onError(n);r.queries.delete(t)}function Ji(e){e.Y_.forEach((e=>{e.next()}))}var Qi,Zi;(Zi=Qi||(Qi={})).ea="default",Zi.Cache="cache";class es{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ui(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=Ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Qi.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(e){this.key=e}}class ns{constructor(e){this.key=e}}class rs{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fn(),this.mutatedKeys=fn(),this.Aa=Zt(e),this.Ra=new ji(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new $i,r=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,i=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Jt(this.query,t)?t:null,d=!!u&&this.mutatedKeys.has(u.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?d!==h&&(n.track({type:3,doc:c}),f=!0):this.ga(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Aa(c,a)>0||l&&this.Aa(c,l)<0)&&(s=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(s=!0)),f&&(c?(i=i.add(c),o=h?o.add(e):o.delete(e)):(i=i.delete(e),o=o.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),o=o.delete(e.key),n.track({type:1,doc:e})}return{Ra:i,fa:n,ns:s,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const i=e.fa.G_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),r=null!=r&&r;const s=t&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,l=a!==this.Ea;return this.Ea=a,0!==i.length||l?{snapshot:new Ui(this.query,e.Ra,o,i,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:s}:{wa:s}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $i,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fn(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new ns(e))})),this.da.forEach((n=>{e.has(n)||t.push(new ts(n))})),t}ba(e){this.Ta=e.Ts,this.da=fn();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ui.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class os{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class is{constructor(e){this.key=e,this.va=!1}}class ss{constructor(e,t,n,r,o,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=i,this.Ca={},this.Fa=new tn((e=>Yt(e)),Gt),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(ee.comparator),this.Na=new Map,this.La=new wo,this.Ba={},this.ka=new Map,this.qa=ao.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function as(e,t,n=!0){const r=As(e);let o;const i=r.Fa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),o=i.view.Da()):o=await us(r,t,n,!0),o}async function ls(e,t){const n=As(e);await us(n,t,!0,!1)}async function us(e,t,n,r){const o=await jo(e.localStore,Kt(t)),i=o.targetId,s=e.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await cs(e,t,i,"current"===s,o.resumeToken)),e.isPrimaryClient&&n&&hi(e.remoteStore,o),a}async function cs(e,t,n,r,o){e.Ka=(t,n,r)=>async function(e,t,n,r){let o=t.view.ma(n);o.ns&&(o=await Uo(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,o))));const i=r&&r.targetChanges.get(t.targetId),s=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(o,e.isPrimaryClient,i,s);return Es(e,t.targetId,a.wa),a.snapshot}(e,t,n,r);const i=await Uo(e.localStore,t,!0),s=new rs(t,i.Ts),a=s.ma(i.documents),l=cr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,o),u=s.applyChanges(a,e.isPrimaryClient,l);Es(e,n,u.wa);const c=new os(t,n,s);return e.Fa.set(t,c),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function ds(e,t,n){const r=O(e),o=r.Fa.get(t),i=r.Ma.get(o.targetId);if(i.length>1)return r.Ma.set(o.targetId,i.filter((e=>!Gt(e,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await $o(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),n&&fi(r.remoteStore,o.targetId),_s(r,o.targetId)})).catch(le)):(_s(r,o.targetId),await $o(r.localStore,o.targetId,!0))}async function hs(e,t){const n=O(e),r=n.Fa.get(t),o=n.Ma.get(r.targetId);n.isPrimaryClient&&1===o.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fi(n.remoteStore,r.targetId))}async function fs(e,t,n){const r=Rs(e);try{const e=await function(e,t){const n=O(e),r=G.now(),o=t.reduce(((e,t)=>e.add(t.key)),fn());let i,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=rn(),l=fn();return n.cs.getEntries(e,o).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((o=>{i=o;const s=[];for(const e of t){const t=Bn(e,i.get(e.key).overlayedDocument);null!=t&&s.push(new $n(e.key,t,ut(t.value.mapValue),Dn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)})).next((t=>{s=t;const r=t.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:an(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new Ie(H)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await Is(r,e.changes),await Ii(r.remoteStore)}catch(e){const t=Wi(e,"Failed to persist write");n.reject(t)}}async function ps(e,t){const n=O(e);try{const e=await Mo(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Na.get(t);r&&(F(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?F(r.va):e.removedDocuments.size>0&&(F(r.va),r.va=!1))})),await Is(n,e,t)}catch(e){await le(e)}}function vs(e,t,n){const r=O(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach(((n,r)=>{const o=r.view.Z_(t);o.snapshot&&e.push(o.snapshot)})),function(e,t){const n=O(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const o of n.j_)o.Z_(t)&&(r=!0)})),r&&Ji(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ms(e,t,n){const r=O(e);r.sharedClientState.updateQueryState(t,"rejected",n);const o=r.Na.get(t),i=o&&o.key;if(i){let e=new Ie(ee.comparator);e=e.insert(i,ct.newNoDocument(i,Y.min()));const n=fn().add(i),o=new ur(Y.min(),new Map,new Ie(H),e,n);await ps(r,o),r.Oa=r.Oa.remove(i),r.Na.delete(t),ks(r)}else await $o(r.localStore,t,!1).then((()=>_s(r,t,n))).catch(le)}async function gs(e,t){const n=O(e),r=t.batch.batchId;try{const e=await Vo(n.localStore,t);ws(n,r,null),bs(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Is(n,e)}catch(e){await le(e)}}async function ys(e,t,n){const r=O(e);try{const e=await function(e,t){const n=O(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(F(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);ws(r,t,n),bs(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Is(r,e)}catch(n){await le(n)}}function bs(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function ws(e,t,n){const r=O(e);let o=r.Ba[r.currentUser.toKey()];if(o){const e=o.get(t);e&&(n?e.reject(n):e.resolve(),o=o.remove(t)),r.Ba[r.currentUser.toKey()]=o}}function _s(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||Ss(e,t)}))}function Ss(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(fi(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),ks(e))}function Es(e,t,n){for(const r of n)r instanceof ts?(e.La.addReference(r.key,t),Cs(e,r)):r instanceof ns?(I("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||Ss(e,r.key)):R()}function Cs(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(I("SyncEngine","New document in limbo: "+n),e.xa.add(r),ks(e))}function ks(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new ee(J.fromString(t)),r=e.qa.next();e.Na.set(r,new is(n)),e.Oa=e.Oa.insert(n,r),hi(e.remoteStore,new Zr(Kt(Wt(n.path)),r,"TargetPurposeLimboResolution",he.oe))}}async function Is(e,t,n){const r=O(e),o=[],i=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach(((e,a)=>{s.push(r.Ka(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const o=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,o?"current":"not-current")}if(e){o.push(e);const t=Ro.Wi(a.targetId,e);i.push(t)}})))})),await Promise.all(s),r.Ca.d_(o),await async function(e,t){const n=O(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ue.forEach(t,(t=>ue.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ue.forEach(t.Ui,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!de(e))throw e;I("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.os.get(e),r=t.snapshotVersion,o=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,o)}}}(r.localStore,i))}async function Ts(e,t){const n=O(e);if(!n.currentUser.isEqual(t)){I("SyncEngine","User change. New user:",t.toKey());const e=await No(n.localStore,t);n.currentUser=t,function(e,t){e.ka.forEach((e=>{e.forEach((e=>{e.reject(new P(D.CANCELLED,t))}))})),e.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Is(n,e.hs)}}function xs(e,t){const n=O(e),r=n.Na.get(t);if(r&&r.va)return fn().add(r.key);{let e=fn();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function As(e){const t=O(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ps.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xs.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ms.bind(null,t),t.Ca.d_=Yi.bind(null,t.eventManager),t.Ca.$a=Xi.bind(null,t.eventManager),t}function Rs(e){const t=O(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=gs.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ys.bind(null,t),t}class Fs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ni(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Po(this.persistence,new Oo,e.initialUser,this.serializer)}Ga(e){return new Io(xo.Zr,this.serializer)}Wa(e){return new Ho}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fs.provider={build:()=>new Fs};class Os extends Fs{constructor(e){super(),this.cacheSizeBytes=e}ja(e,t){F(this.persistence.referenceDelegate instanceof Ao);const n=this.persistence.referenceDelegate.garbageCollector;return new co(n,e.asyncQueue,t)}Ga(e){const t=void 0!==this.cacheSizeBytes?so.withCacheSize(this.cacheSizeBytes):so.DEFAULT;return new Io((e=>Ao.Zr(e,t)),this.serializer)}}class Ds{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>vs(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ts.bind(null,this.syncEngine),await Vi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zi}()}createDatastore(e){const t=ni(e.databaseInfo.databaseId),n=function(e){return new ei(e)}(e.databaseInfo);return function(e,t,n,r){return new ai(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,o){return new ui(e,t,n,r,o)}(this.localStore,this.datastore,e.asyncQueue,(e=>vs(this.syncEngine,e,0)),function(){return Go.D()?new Go:new qo}())}createSyncEngine(e,t){return function(e,t,n,r,o,i,s){const a=new ss(e,t,n,r,o,i);return s&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=O(e);I("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await di(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}Ds.provider={build:()=>new Ds};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):T("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns{constructor(e,t,n,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=S.UNAUTHENTICATED,this.clientId=z.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async e=>{I("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(I("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new N;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Wi(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Vs(e,t){e.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await No(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Ls(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ms(e);I("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>Ni(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Ni(t.remoteStore,n))),e._onlineComponents=t}async function Ms(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===D.FAILED_PRECONDITION||e.code===D.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;x("Error using user provided cache. Falling back to memory cache: "+n),await Vs(e,new Fs)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await Vs(e,new Os(void 0));return e._offlineComponents}async function Bs(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await Ls(e,e._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await Ls(e,new Ds))),e._onlineComponents}function Ws(e){return Bs(e).then((e=>e.syncEngine))}async function js(e){const t=await Bs(e),n=t.eventManager;return n.onListen=as.bind(null,t.syncEngine),n.onUnlisten=ds.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ls.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=hs.bind(null,t.syncEngine),n}function $s(e,t,n={}){const r=new N;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,o){const i=new Ps({next:a=>{i.Za(),t.enqueueAndForget((()=>Gi(e,s)));const l=a.docs.has(n);!l&&a.fromCache?o.reject(new P(D.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&r&&"server"===r.source?o.reject(new P(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):o.resolve(a)},error:e=>o.reject(e)}),s=new es(Wt(n.path),i,{includeMetadataChanges:!0,_a:!0});return qi(e,s)}(await js(e),e.asyncQueue,t,n,r))),r.promise}function Us(e,t,n={}){const r=new N;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,o){const i=new Ps({next:n=>{i.Za(),t.enqueueAndForget((()=>Gi(e,s))),n.fromCache&&"server"===r.source?o.reject(new P(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(n)},error:e=>o.reject(e)}),s=new es(n,i,{includeMetadataChanges:!0,_a:!0});return qi(e,s)}(await js(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ks(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const zs=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(e,t,n){if(!n)throw new P(D.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function qs(e,t,n,r){if(!0===t&&!0===r)throw new P(D.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Gs(e){if(!ee.isDocumentKey(e))throw new P(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ys(e){if(ee.isDocumentKey(e))throw new P(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Xs(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":R()}function Js(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new P(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xs(e);throw new P(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new P(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new P(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qs("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ks(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zs{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qs({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new P(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qs(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new L;switch(e.type){case"firstParty":return new j(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new P(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=zs.get(e);t&&(I("ComponentProvider","Removing Datastore"),zs.delete(e),t.terminate())}(this),Promise.resolve()}}function ea(e,t,n,r={}){var o;const i=(e=Js(e,Zs))._getSettings(),s=`${t}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==s&&x("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:s,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=S.MOCK_USER;else{t=(0,l.Fy)(r.mockUserToken,null===(o=e._app)||void 0===o?void 0:o.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new P(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new S(i)}e._authCredentials=new M(new V(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ta(this.firestore,e,this._query)}}class na{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ra(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new na(this.firestore,e,this._key)}}class ra extends ta{constructor(e,t,n){super(e,t,Wt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new na(this.firestore,null,new ee(e))}withConverter(e){return new ra(this.firestore,e,this._path)}}function oa(e,t,...n){if(e=(0,l.Ku)(e),Hs("collection","path",t),e instanceof Zs){const r=J.fromString(t,...n);return Ys(r),new ra(e,null,r)}{if(!(e instanceof na||e instanceof ra))throw new P(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return Ys(r),new ra(e.firestore,null,r)}}function ia(e,t,...n){if(e=(0,l.Ku)(e),1===arguments.length&&(t=z.newId()),Hs("doc","path",t),e instanceof Zs){const r=J.fromString(t,...n);return Gs(r),new na(e,null,new ee(r))}{if(!(e instanceof na||e instanceof ra))throw new P(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return Gs(r),new na(e.firestore,e instanceof ra?e.converter:null,new ee(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sa{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ri(this,"async_queue_retry"),this.Vu=()=>{const e=ti();e&&I("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=ti();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ti();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new N;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!de(e))throw e;I("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((e=>{this.Eu=e,this.du=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw T("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.du=!1,e))))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=Bi.createAndSchedule(this,e,t,n,(e=>this.yu(e)));return this.Tu.push(r),r}fu(){this.Eu&&R()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class aa extends Zs{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sa,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sa(e),this._firestoreClient=void 0,await e}}}function la(e,t){const n="object"==typeof e?e:(0,i.Sx)(),r="string"==typeof e?e:t||"(default)",o=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const e=(0,l.yU)("firestore");e&&ea(o,...e)}return o}function ua(e){if(e._terminated)throw new P(D.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||ca(e),e._firestoreClient}function ca(e){var t,n,r;const o=e._freezeSettings(),i=function(e,t,n,r){return new je(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Ks(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,o);e._componentsProvider||(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),e._firestoreClient=new Ns(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da{constructor(e){this._byteString=e}static fromBase64String(e){try{return new da(De.fromBase64String(e))}catch(e){throw new P(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new da(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new P(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new P(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new P(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=/^__.*__$/;class ga{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new $n(e,this.data,this.fieldMask,t,this.fieldTransforms):new jn(e,this.data,t,this.fieldTransforms)}}class ya{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new $n(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ba(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class wa{constructor(e,t,n,r,o,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===o&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new wa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Na(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(ba(this.Cu)&&ma.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class _a{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ni(e)}Qu(e,t,n,r=!1){return new wa({Cu:e,methodName:t,qu:n,path:Z.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sa(e){const t=e._freezeSettings(),n=ni(e._databaseId);return new _a(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ea(e,t,n,r,o,i={}){const s=e.Qu(i.merge||i.mergeFields?2:0,t,n,o);Fa("Data must be an object, but it was:",s,r);const a=Aa(r,s);let l,u;if(i.merge)l=new Fe(s.fieldMask),u=s.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const o=Oa(t,r,n);if(!s.contains(o))throw new P(D.INVALID_ARGUMENT,`Field '${o}' is specified in your field mask but missing from your input data.`);Va(e,o)||e.push(o)}l=new Fe(e),u=s.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=s.fieldTransforms;return new ga(new lt(a),l,u)}class Ca extends fa{_toFieldTransform(e){if(2!==e.Cu)throw 1===e.Cu?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ca}}function ka(e,t,n,r){const o=e.Qu(1,t,n);Fa("Data must be an object, but it was:",o,r);const i=[],s=lt.empty();Ce(r,((e,r)=>{const a=Pa(t,e,n);r=(0,l.Ku)(r);const u=o.Nu(a);if(r instanceof Ca)i.push(a);else{const e=xa(r,u);null!=e&&(i.push(a),s.set(a,e))}}));const a=new Fe(i);return new ya(s,a,o.fieldTransforms)}function Ia(e,t,n,r,o,i){const s=e.Qu(1,t,n),a=[Oa(t,r,n)],u=[o];if(i.length%2!=0)throw new P(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let l=0;l<i.length;l+=2)a.push(Oa(t,i[l])),u.push(i[l+1]);const c=[],d=lt.empty();for(let f=a.length-1;f>=0;--f)if(!Va(c,a[f])){const e=a[f];let t=u[f];t=(0,l.Ku)(t);const n=s.Nu(e);if(t instanceof Ca)c.push(e);else{const r=xa(t,n);null!=r&&(c.push(e),d.set(e,r))}}const h=new Fe(c);return new ya(d,h,s.fieldTransforms)}function Ta(e,t,n,r=!1){return xa(n,e.Qu(r?4:3,t))}function xa(e,t){if(Ra(e=(0,l.Ku)(e)))return Fa("Unsupported field value:",t,e),Aa(e,t);if(e instanceof fa)return function(e,t){if(!ba(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const o of e){let e=xa(o,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return yn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=G.fromDate(e);return{timestampValue:Er(t.serializer,n)}}if(e instanceof G){const n=new G(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Er(t.serializer,n)}}if(e instanceof pa)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof da)return{bytesValue:Cr(t.serializer,e._byteString)};if(e instanceof na){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Tr(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof va)return function(e,t){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw t.Bu("VectorValues must only contain numeric values.");return mn(t.serializer,e)}))}}}}}}(e,t);throw t.Bu(`Unsupported field value: ${Xs(e)}`)}(e,t)}function Aa(e,t){const n={};return ke(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ce(e,((e,r)=>{const o=xa(r,t.Mu(e));null!=o&&(n[e]=o)})),{mapValue:{fields:n}}}function Ra(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof G||e instanceof pa||e instanceof da||e instanceof na||e instanceof fa||e instanceof va)}function Fa(e,t,n){if(!Ra(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Xs(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}}function Oa(e,t,n){if((t=(0,l.Ku)(t))instanceof ha)return t._internalPath;if("string"==typeof t)return Pa(e,t);throw Na("Field path arguments must be of type string or ",e,!1,void 0,n)}const Da=new RegExp("[~\\*/\\[\\]]");function Pa(e,t,n){if(t.search(Da)>=0)throw Na(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ha(...t.split("."))._internalPath}catch(r){throw Na(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Na(e,t,n,r,o){const i=r&&!r.isEmpty(),s=void 0!==o;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||s)&&(l+=" (found",i&&(l+=` in field ${r}`),s&&(l+=` in document ${o}`),l+=")"),new P(D.INVALID_ARGUMENT,a+e+l)}function Va(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,n,r,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new na(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ma(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ba("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ma extends La{data(){return super.data()}}function Ba(e,t){return"string"==typeof t?Pa(e,t):t instanceof ha?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new P(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ja{}class $a extends ja{}function Ua(e,t,...n){let r=[];t instanceof ja&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Ha)).length,n=e.filter((e=>e instanceof Ka)).length;if(t>1||t>0&&n>0)throw new P(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const o of r)e=o._apply(e);return e}class Ka extends $a{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ka(e,t,n)}_apply(e){const t=this._parse(e);return Ya(e._query,t),new ta(e.firestore,e.converter,Ht(e._query,t))}_parse(e){const t=Sa(e.firestore),n=function(e,t,n,r,o,i,s){let a;if(o.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new P(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Ga(s,i);const t=[];for(const n of s)t.push(qa(r,e,n));a={arrayValue:{values:t}}}else a=qa(r,e,s)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Ga(s,i),a=Ta(n,t,s,"in"===i||"not-in"===i);return gt.create(o,i,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function za(e,t,n){const r=t,o=Ba("where",e);return Ka._create(o,r,n)}class Ha extends ja{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ha(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:yt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const o of r)Ya(n,o),n=Ht(n,o)}(e._query,t),new ta(e.firestore,e.converter,Ht(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function qa(e,t,n){if("string"==typeof(n=(0,l.Ku)(n))){if(""===n)throw new P(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$t(t)&&-1!==n.indexOf("/"))throw new P(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(J.fromString(n));if(!ee.isDocumentKey(r))throw new P(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ze(e,new ee(r))}if(n instanceof na)return Ze(e,n._key);throw new P(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xs(n)}.`)}function Ga(e,t){if(!Array.isArray(e)||0===e.length)throw new P(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ya(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new P(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new P(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Xa{convertValue(e,t="none"){switch(Ke(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Le(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ce(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const o=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Ve(e.doubleValue)));return new va(o)}convertGeoPoint(e){return new pa(Ve(e.latitude),Ve(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Be(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(We(e));default:return null}}convertTimestamp(e){const t=Ne(e);return new G(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);F(Qr(n));const r=new $e(n.get(1),n.get(3)),o=new ee(n.popFirst(5));return r.isEqual(t)||T(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Za extends La{constructor(e,t,n,r,o,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new el(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ba("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class el extends Za{data(e={}){return super.data(e)}}class tl{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Qa(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new el(this._firestore,this._userDataWriter,n.key,n,new Qa(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new P(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new el(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Qa(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new el(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Qa(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let o=-1,i=-1;return 0!==t.type&&(o=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:nl(t.type),doc:r,oldIndex:o,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rl(e){e=Js(e,na);const t=Js(e.firestore,aa);return $s(ua(t),e._key).then((n=>cl(t,e,n)))}class ol extends Xa{constructor(e){super(),this.firestore=e}convertBytes(e){return new da(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new na(this.firestore,null,t)}}function il(e){e=Js(e,ta);const t=Js(e.firestore,aa),n=ua(t),r=new ol(t);return Wa(e._query),Us(n,e._query).then((n=>new tl(t,r,e,n)))}function sl(e,t,n,...r){e=Js(e,na);const o=Js(e.firestore,aa),i=Sa(o);let s;return s="string"==typeof(t=(0,l.Ku)(t))||t instanceof ha?Ia(i,"updateDoc",e._key,t,n,r):ka(i,"updateDoc",e._key,t),ul(o,[s.toMutation(e._key,Dn.exists(!0))])}function al(e){return ul(Js(e.firestore,aa),[new Hn(e._key,Dn.none())])}function ll(e,t){const n=Js(e.firestore,aa),r=ia(e),o=Ja(e.converter,t);return ul(n,[Ea(Sa(e.firestore),"addDoc",r._key,o,null!==e.converter,{}).toMutation(r._key,Dn.exists(!1))]).then((()=>r))}function ul(e,t){return function(e,t){const n=new N;return e.asyncQueue.enqueueAndForget((async()=>fs(await Ws(e),t,n))),n.promise}(ua(e),t)}function cl(e,t,n){const r=n.docs.get(t._key),o=new ol(e);return new Za(e,o,t._key,r,new Qa(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){E=e}(i.MF),(0,i.om)(new s.uA("firestore",((e,{instanceIdentifier:n,options:r})=>{const o=e.getProvider("app").getImmediate(),i=new aa(new B(e.getProvider("auth-internal")),new U(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new P(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $e(e.options.projectId,t)}(o,n),o);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(_,"4.7.4",e),(0,i.KO)(_,"4.7.4","esm2017")}()},5904:function(e,t,n){"use strict";n.d(t,{c7:function(){return H}});var r=n(9928),o=n(6743),i=n(5125);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",l=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c extends o.g{constructor(e,t,n=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var d,h;function f(e){return"storage/"+e}function p(){const e="An unknown error occurred, please check the error payload for server response.";return new c(d.UNKNOWN,e)}function v(){return new c(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m(){return new c(d.CANCELED,"User canceled the upload/download.")}function g(e){return new c(d.INVALID_URL,"Invalid URL '"+e+"'.")}function y(e){return new c(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function b(e){return new c(d.INVALID_ARGUMENT,e)}function w(){return new c(d.APP_DELETED,"The Firebase app was deleted.")}function _(e){return new c(d.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(d||(d={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=S.makeFromUrl(e,t)}catch(r){return new S(e,"")}if(""===n.path)return n;throw y(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),l={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const c="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${c}/b/${r}/o${h}`,"i"),p={bucket:1,path:3},v=t===s?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",y=new RegExp(`^https?://${v}/${r}/${m}`,"i"),b={bucket:1,path:2},w=[{regex:a,indices:l,postModify:o},{regex:f,indices:p,postModify:u},{regex:y,indices:b,postModify:u}];for(let s=0;s<w.length;s++){const t=w[s],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let o=r[t.indices.path];o||(o=""),n=new S(e,o),t.postModify(n);break}}if(null==n)throw g(e);return n}}class E{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t,n){let r=1,o=null,i=null,s=!1,a=0;function l(){return 2===a}let u=!1;function c(...e){u||(u=!0,t.apply(null,e))}function d(t){o=setTimeout((()=>{o=null,e(f,l())}),t)}function h(){i&&clearTimeout(i)}function f(e,...t){if(u)return void h();if(e)return h(),void c.call(null,e,...t);const n=l()||s;if(n)return h(),void c.call(null,e,...t);let o;r<64&&(r*=2),1===a?(a=2,o=0):o=1e3*(r+Math.random()),d(o)}let p=!1;function v(e){p||(p=!0,h(),u||(null!==o?(e||(a=2),clearTimeout(o),d(0)):e||(a=1)))}return d(0),i=setTimeout((()=>{s=!0,v(!0)}),n),v}function k(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){return void 0!==e}function T(e,t,n,r){if(r<t)throw b(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw b(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const o=t(r)+"="+t(e[r]);n=n+o+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e,t){const n=e>=500&&e<600,r=[408,429],o=-1!==r.indexOf(e),i=-1!==t.indexOf(e);return n||o||i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(h||(h={}));class R{constructor(e,t,n,r,o,i,s,a,l,u,c,d=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=s,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new F(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===h.NO_ERROR,o=n.getStatus();if(!t||A(o,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===h.ABORT;return void e(!1,new F(!1,null,t))}const i=-1!==this.successCodes_.indexOf(o);e(!0,new F(i,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());I(e)?n(e):n()}catch(i){r(i)}else if(null!==o){const e=p();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){const e=this.appDelete_?w():m();r(e)}else{const e=v();r(e)}};this.canceled_?t(!1,new F(!1,null,!0)):this.backoffId_=C(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&k(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class F{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function O(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function D(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function P(e,t){t&&(e["X-Firebase-GMPID"]=t)}function N(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function V(e,t,n,r,o,i,s=!0){const a=x(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return P(u,t),O(u,n),D(u,i),N(u,r),new R(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function M(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(e,t){this._service=e,this._location=t instanceof S?t:S.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new B(e,t)}get root(){const e=new S(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return M(this._location.path)}get storage(){return this._service}get parent(){const e=L(this._location.path);if(null===e)return null;const t=new S(this._location.bucket,e);return new B(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw _(e)}}function W(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:S.makeFromBucketSpec(n,e)}function j(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:(0,o.Fy)(i,e.app.options.projectId))}class ${constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?S.makeFromBucketSpec(r,this._host):W(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=S.makeFromBucketSpec(this._url,e):this._bucket=W(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){T("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){T("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new B(this,e)}_makeRequest(e,t,n,r,o=!0){if(this._deleted)return new E(w());{const i=V(e,this._appId,n,r,t,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const U="@firebase/storage",K="0.13.3",z="storage";function H(e=(0,r.Sx)(),t){e=(0,o.Ku)(e);const n=(0,r.j6)(e,z),i=n.getImmediate({identifier:t}),s=(0,o.yU)("storage");return s&&q(i,...s),i}function q(e,t,n,r={}){j(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new $(n,o,i,t,r.MF)}function Y(){(0,r.om)(new i.uA(z,G,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(U,K,""),(0,r.KO)(U,K,"esm2017")}Y()},5220:function(e,t,n){"use strict";n.d(t,{LA:function(){return le},aE:function(){return rt},rd:function(){return it}});var r=n(641),o=n(953);
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const r=2.4,o=.2126729,i=.7151522,s=.072175,a=.55,l=.58,u=.57,c=.62,d=.03,h=1.45,f=5e-4,p=1.25,v=1.25,m=.078,g=12.82051282051282,y=.06,b=.001;function w(e,t){const n=(e.r/255)**r,w=(e.g/255)**r,_=(e.b/255)**r,S=(t.r/255)**r,E=(t.g/255)**r,C=(t.b/255)**r;let k,I=n*o+w*i+_*s,T=S*o+E*i+C*s;if(I<=d&&(I+=(d-I)**h),T<=d&&(T+=(d-T)**h),Math.abs(T-I)<f)return 0;if(T>I){const e=(T**a-I**l)*p;k=e<b?0:e<m?e-e*g*y:e-y}else{const e=(T**c-I**u)*v;k=e>-b?0:e>-m?e-e*g*y:e+y}return 100*k}var _=n(4653),S=n(4717);const E=.20689655172413793,C=e=>e>E**3?Math.cbrt(e):e/(3*E**2)+4/29,k=e=>e>E?e**3:3*E**2*(e-4/29);function I(e){const t=C,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function T(e){const t=k,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}const x=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],A=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,R=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],F=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function O(e){const t=Array(3),n=A,r=x;for(let o=0;o<3;++o)t[o]=Math.round(255*(0,S.qE)(n(r[o][0]*e[0]+r[o][1]*e[1]+r[o][2]*e[2])));return{r:t[0],g:t[1],b:t[2]}}function D(e){let{r:t,g:n,b:r}=e;const o=[0,0,0],i=F,s=R;t=i(t/255),n=i(n/255),r=i(r/255);for(let a=0;a<3;++a)o[a]=s[a][0]*t+s[a][1]*n+s[a][2]*r;return o}function P(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function N(e){return P(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const V=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,L={rgb:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),rgba:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),hsl:(e,t,n,r)=>W({h:e,s:t,l:n,a:r}),hsla:(e,t,n,r)=>W({h:e,s:t,l:n,a:r}),hsv:(e,t,n,r)=>B({h:e,s:t,v:n,a:r}),hsva:(e,t,n,r)=>B({h:e,s:t,v:n,a:r})};function M(e){if("number"===typeof e)return(isNaN(e)||e<0||e>16777215)&&(0,_.OP)(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e};if("string"===typeof e&&V.test(e)){const{groups:t}=e.match(V),{fn:n,values:r}=t,o=r.split(/,\s*/).map((e=>e.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(e)/100:parseFloat(e)));return L[n](...o)}if("string"===typeof e){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map((e=>e+e)).join(""):[6,8].includes(t.length)||(0,_.OP)(`'${e}' is not a valid hex(a) color`);const n=parseInt(t,16);return(isNaN(n)||n<0||n>4294967295)&&(0,_.OP)(`'${e}' is not a valid hex(a) color`),G(t)}if("object"===typeof e){if((0,S.zy)(e,["r","g","b"]))return e;if((0,S.zy)(e,["h","s","l"]))return B(U(e));if((0,S.zy)(e,["h","s","v"]))return B(e)}throw new TypeError(`Invalid color: ${null==e?e:String(e)||e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function B(e){const{h:t,s:n,v:r,a:o}=e,i=e=>{const o=(e+t/60)%6;return r-r*n*Math.max(Math.min(o,4-o,1),0)},s=[i(5),i(3),i(1)].map((e=>Math.round(255*e)));return{r:s[0],g:s[1],b:s[2],a:o}}function W(e){return B(U(e))}function j(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,r=e.b/255,o=Math.max(t,n,r),i=Math.min(t,n,r);let s=0;o!==i&&(o===t?s=60*(0+(n-r)/(o-i)):o===n?s=60*(2+(r-t)/(o-i)):o===r&&(s=60*(4+(t-n)/(o-i)))),s<0&&(s+=360);const a=0===o?0:(o-i)/o,l=[s,a,o];return{h:l[0],s:l[1],v:l[2],a:e.a}}function $(e){const{h:t,s:n,v:r,a:o}=e,i=r-r*n/2,s=1===i||0===i?0:(r-i)/Math.min(i,1-i);return{h:t,s:s,l:i,a:o}}function U(e){const{h:t,s:n,l:r,a:o}=e,i=r+n*Math.min(r,1-r),s=0===i?0:2-2*r/i;return{h:t,s:s,v:i,a:o}}function K(e){let{r:t,g:n,b:r,a:o}=e;return void 0===o?`rgb(${t}, ${n}, ${r})`:`rgba(${t}, ${n}, ${r}, ${o})`}function z(e){return K(B(e))}function H(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function q(e){let{r:t,g:n,b:r,a:o}=e;return`#${[H(t),H(n),H(r),void 0!==o?H(Math.round(255*o)):""].join("")}`}function G(e){e=J(e);let[t,n,r,o]=(0,S.iv)(e,2).map((e=>parseInt(e,16)));return o=void 0===o?o:o/255,{r:t,g:n,b:r,a:o}}function Y(e){const t=G(e);return j(t)}function X(e){return q(B(e))}function J(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),3!==e.length&&4!==e.length||(e=e.split("").map((e=>e+e)).join("")),6!==e.length&&(e=(0,S.f)((0,S.f)(e,6),8,"F")),e}function Q(e,t){const n=I(D(e));return n[0]=n[0]+10*t,O(T(n))}function Z(e,t){const n=I(D(e));return n[0]=n[0]-10*t,O(T(n))}function ee(e){const t=M(e);return D(t)[1]}function te(e,t){const n=ee(e),r=ee(t),o=Math.max(n,r),i=Math.min(n,r);return(o+.05)/(i+.05)}function ne(e){const t=Math.abs(w(M(0),M(e))),n=Math.abs(w(M(16777215),M(e)));return n>Math.min(t,50)?"#fff":"#000"}},4653:function(e,t,n){"use strict";n.d(t,{CI:function(){return s},OP:function(){return o},yA:function(){return i}});var r=n(641);function o(e){(0,r.R8)(`Vuetify: ${e}`)}function i(e){(0,r.R8)(`Vuetify error: ${e}`)}function s(e,t){t=Array.isArray(t)?t.slice(0,-1).map((e=>`'${e}'`)).join(", ")+` or '${t.at(-1)}'`:`'${t}'`,(0,r.R8)(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`)}},2636:function(e,t,n){"use strict";n.d(t,{RW:function(){return u},cq:function(){return c},pM:function(){return l}});var r=n(7562),o=n(641),i=n(4653),s=n(4717),a=n(1094);function l(e){if(e._setup=e._setup??e.setup,!e.name)return(0,i.OP)("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=(0,a.j)(e.props??{},e.name)();const t=Object.keys(e.props).filter((e=>"class"!==e&&"style"!==e));e.filterProps=function(e){return(0,s.Up)(e,t)},e.props._as=String,e.setup=function(t,n){const o=(0,r.Y8)();if(!o.value)return e._setup(t,n);const{props:i,provideSubDefaults:s}=(0,r.bL)(t,t._as??e.name,o),a=e._setup(i,n);return s(),a}}return e}function u(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t=>(e?l:o.pM)(t)}function c(e,t){return t.props=e,t}},265:function(e,t,n){"use strict";n.d(t,{B2:function(){return r},S8:function(){return o},z3:function(){return i}});const r="cubic-bezier(0.4, 0, 0.2, 1)",o="cubic-bezier(0.0, 0, 0.2, 1)",i="cubic-bezier(0.4, 0, 1, 1)"},4268:function(e,t,n){"use strict";n.d(t,{MR:function(){return s},nI:function(){return i},v6:function(){return u}});var r=n(641),o=n(4717);function i(e,t){const n=(0,r.nI)();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";const t=i(e).type;return(0,o.fX)(t?.aliasName||t?.name)}let a=0,l=new WeakMap;function u(){const e=i("getUid");if(l.has(e))return l.get(e);{const t=a++;return l.set(e,t),t}}u.reset=()=>{a=0,l=new WeakMap}},2473:function(e,t,n){"use strict";function r(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];while(e){if(t?s(e):i(e))return e;e=e.parentElement}return document.scrollingElement}function o(e,t){const n=[];if(t&&e&&!t.contains(e))return n;while(e){if(i(e)&&n.push(e),e===t)break;e=e.parentElement}return n}function i(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}function s(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}n.d(t,{D_:function(){return i},Rd:function(){return o},mH:function(){return r}})},162:function(e,t,n){"use strict";n.d(t,{ZK:function(){return r},o$:function(){return s},tB:function(){return o},vd:function(){return i}});const r="undefined"!==typeof window,o=r&&"IntersectionObserver"in window,i=r&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),s=r&&"EyeDropper"in window},4717:function(e,t,n){"use strict";n.d(t,{$m:function(){return L},Ai:function(){return k},B5:function(){return ae},BN:function(){return P},CF:function(){return B},CZ:function(){return G},D9:function(){return $},Dg:function(){return g},Gv:function(){return y},HP:function(){return S},Im:function(){return ie},K7:function(){return _},Mp:function(){return A},OW:function(){return ne},P:function(){return te},Pv:function(){return O},Sd:function(){return m},T4:function(){return le},TD:function(){return v},Up:function(){return C},_p:function(){return b},bD:function(){return f},bq:function(){return oe},cJ:function(){return I},e9:function(){return U},eX:function(){return re},e_:function(){return Y},eq:function(){return Q},f:function(){return M},fX:function(){return K},hA:function(){return j},if:function(){return z},iv:function(){return W},j6:function(){return T},jF:function(){return de},lQ:function(){return se},lm:function(){return ee},m:function(){return he},mK:function(){return J},no:function(){return p},ph:function(){return D},qE:function(){return V},qr:function(){return fe},sg:function(){return N},uA:function(){return ce},uP:function(){return w},uR:function(){return Z},v6:function(){return ue},yc:function(){return X},zy:function(){return E}});var r=n(953),o=n(641),i=n(33),s=n(162);function a(e,t,n){l(e,t),t.set(e,n)}function l(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function u(e,t,n){return e.set(d(e,t),n),n}function c(e,t){return e.get(d(e,t))}function d(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function h(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let o=0;o<r;o++){if(null==e)return n;e=e[t[o]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function f(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>f(e[n],t[n])))}function p(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),h(e,t.split("."),n)):n}function v(e,t,n){if(!0===t)return void 0===e?n:e;if(null==t||"boolean"===typeof t)return n;if(e!==Object(e)){if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}if("string"===typeof t)return p(e,t,n);if(Array.isArray(t))return h(e,t,n);if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,n)=>t+n))}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function y(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function b(e){if(e&&"$el"in e){const t=e.$el;return t?.nodeType===Node.TEXT_NODE?t.nextElementSibling:t}return e}const w=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),_=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function S(e){return Object.keys(e)}function E(e,t){return t.every((t=>e.hasOwnProperty(t)))}function C(e,t){const n={},r=new Set(Object.keys(e));for(const o of t)r.has(o)&&(n[o]=e[o]);return n}function k(e,t,n){const r=Object.create(null),o=Object.create(null);for(const i in e)t.some((e=>e instanceof RegExp?e.test(i):e===i))&&!n?.some((e=>e===i))?r[i]=e[i]:o[i]=e[i];return[r,o]}function I(e,t){const n={...e};return t.forEach((e=>delete n[e])),n}function T(e,t){const n={};return t.forEach((t=>n[t]=e[t])),n}const x=/^on[^a-z]/,A=e=>x.test(e),R=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],F=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function O(e){return e.isComposing&&F.includes(e.key)}function D(e){const[t,n]=k(e,[x]),r=I(t,R),[o,i]=k(n,["class","style","id",/^data-/]);return Object.assign(o,t),Object.assign(i,r),[o,i]}function P(e){return null==e?[]:Array.isArray(e)?e:[e]}function N(e,t){let n=0;const o=function(){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];clearTimeout(n),n=setTimeout((()=>e(...i)),(0,r.R1)(t))};return o.clear=()=>{clearTimeout(n)},o.immediate=e,o}function V(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function L(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function M(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function B(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return n.repeat(Math.max(0,t-e.length))+e}function W(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=[];let r=0;while(r<e.length)n.push(e.substr(r,t)),r+=t;return n}function j(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(e<t)return`${e} B`;const n=1024===t?["Ki","Mi","Gi"]:["k","M","G"];let r=-1;while(Math.abs(e)>=t&&r<n.length-1)e/=t,++r;return`${e.toFixed(1)} ${n[r]}B`}function $(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const o in e)r[o]=e[o];for(const o in t){const i=e[o],s=t[o];y(i)&&y(s)?r[o]=$(i,s,n):Array.isArray(i)&&Array.isArray(s)&&n?r[o]=n(i,s):r[o]=s}return r}function U(e){return e.map((e=>e.type===o.FK?U(e.children):e)).flat()}function K(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(K.cache.has(e))return K.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return K.cache.set(e,t),t}function z(e,t){if(!t||"object"!==typeof t)return[];if(Array.isArray(t))return t.map((t=>z(e,t))).flat(1);if(t.suspense)return z(e,t.ssContent);if(Array.isArray(t.children))return t.children.map((t=>z(e,t))).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return z(e,t.component.subTree).flat(1)}return[]}K.cache=new Map;var H=new WeakMap,q=new WeakMap;class G{constructor(e){a(this,H,[]),a(this,q,0),this.size=e}push(e){c(H,this)[c(q,this)]=e,u(q,this,(c(q,this)+1)%this.size)}values(){return c(H,this).slice(c(q,this)).concat(c(H,this).slice(0,c(q,this)))}}function Y(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function X(e){const t=(0,r.Kh)({}),n=(0,o.EW)(e);return(0,o.nT)((()=>{for(const e in n.value)t[e]=n.value[e]}),{flush:"sync"}),(0,r.QW)(t)}function J(e,t){return e.includes(t)}function Q(e){return e[2].toLowerCase()+e.slice(3)}const Z=()=>[Function,Array];function ee(e,t){return t="on"+(0,i.ZH)(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(e))for(const o of e)o(...n);else"function"===typeof e&&e(...n)}function ne(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}${t?':not([tabindex="-1"])':""}:not([disabled])`)).join(", ");return[...e.querySelectorAll(n)]}function re(e,t,n){let r,o=e.indexOf(document.activeElement);const i="next"===t?1:-1;do{o+=i,r=e[o]}while((!r||null==r.offsetParent||!(n?.(r)??1))&&o<e.length&&o>=0);return r}function oe(e,t){const n=ne(e);if(t)if("first"===t)n[0]?.focus();else if("last"===t)n.at(-1)?.focus();else if("number"===typeof t)n[t]?.focus();else{const r=re(n,t);r?r.focus():oe(e,"next"===t?"first":"last")}else e!==document.activeElement&&e.contains(document.activeElement)||n[0]?.focus()}function ie(e){return null===e||void 0===e||"string"===typeof e&&""===e.trim()}function se(){}function ae(e,t){const n=s.ZK&&"undefined"!==typeof CSS&&"undefined"!==typeof CSS.supports&&CSS.supports(`selector(${t})`);if(!n)return null;try{return!!e&&e.matches(t)}catch(r){return null}}function le(e){return e.some((e=>!(0,o.vv)(e)||e.type!==o.Mw&&(e.type!==o.FK||le(e.children))))?e:null}function ue(e,t){if(!s.ZK||0===e)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function ce(e,t){const n=(0,r.IJ)();return(0,o.nT)((()=>{n.value=e()}),{flush:"sync",...t}),(0,r.tB)(n)}function de(e,t){const n=e.clientX,r=e.clientY,o=t.getBoundingClientRect(),i=o.left,s=o.top,a=o.right,l=o.bottom;return n>=i&&n<=a&&r>=s&&r<=l}function he(){const e=(0,r.IJ)(),t=t=>{e.value=t};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:t=>e.value=t}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>b(e.value)}),t}function fe(e){const t=1===e.key.length,n=!e.ctrlKey&&!e.metaKey&&!e.altKey;return t&&n}},1094:function(e,t,n){"use strict";function r(e,t){return n=>Object.keys(e).reduce(((r,o)=>{const i="object"===typeof e[o]&&null!=e[o]&&!Array.isArray(e[o]),s=i?e[o]:{type:e[o]};return r[o]=n&&o in n?{...s,default:n[o]}:s,t&&!r[o].source&&(r[o].source=t),r}),{})}n.d(t,{j:function(){return r}})},4675:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var r=n(4268);function o(e){const t=(0,r.nI)("useRender");t.render=e}},6125:function(e){"use strict";e.exports={rE:"5.1.1"}}}]);
//# sourceMappingURL=chunk-vendors.d1f9fa8d.js.map