import"./modulepreload-polyfill-B5Qt9EMX.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=globalThis,c=n=>{f.emitLitDebugLogEvents&&f.dispatchEvent(new CustomEvent("lit-debug",{detail:n}))};let Xe=0,U;f.litIssuedWarnings??(f.litIssuedWarnings=new Set),U=(n,e)=>{e+=n?` See https://lit.dev/msg/${n} for more information.`:"",f.litIssuedWarnings.has(e)||(console.warn(e),f.litIssuedWarnings.add(e))},U("dev-mode","Lit is in dev mode. Not recommended for production!");var Ne,Ae;const b=(Ne=f.ShadyDOM)!=null&&Ne.inUse&&((Ae=f.ShadyDOM)==null?void 0:Ae.noPatch)===!0?f.ShadyDOM.wrap:n=>n,B=f.trustedTypes,me=B?B.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ze=n=>n,J=(n,e,t)=>Ze,Ke=n=>{if(x!==J)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");x=n},et=()=>{x=J},re=(n,e,t)=>x(n,e,t),ae="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,le="?"+P,tt=`<${le}>`,C=document,I=()=>C.createComment(""),V=n=>n===null||typeof n!="object"&&typeof n!="function",Ue=Array.isArray,Ie=n=>Ue(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",G=`[ 	
\f\r]`,nt=`[^ 	
\f\r"'\`<>=]`,it=`[^\\s"'>=/]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=1,X=2,st=3,_e=/-->/g,ye=/>/g,S=new RegExp(`>|${G}(?:(${it}+)(${G}*=${G}*(?:${nt}|("|')|))|$)`,"g"),rt=0,ge=1,ot=2,be=3,Z=/'/g,K=/"/g,Ve=/^(?:script|style|textarea|title)$/i,ke=1,oe=2,de=1,F=2,at=3,lt=4,dt=5,ce=6,ct=7,ht=n=>(e,...t)=>(e.some(i=>i===void 0)&&console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`),t.some(i=>i==null?void 0:i._$litStatic$)&&U("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`),{_$litType$:n,strings:e,values:t}),pt=ht(ke),T=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),$e=new WeakMap,E=C.createTreeWalker(C,129);let x=J;function De(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw")){let t="invalid template strings array";throw t=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),new Error(t)}return me!==void 0?me.createHTML(e):e}const ze=(n,e)=>{const t=n.length-1,i=[];let s=e===oe?"<svg>":"",o,r=R;for(let a=0;a<t;a++){const d=n[a];let _=-1,h,m=0,p;for(;m<d.length&&(r.lastIndex=m,p=r.exec(d),p!==null);)if(m=r.lastIndex,r===R){if(p[fe]==="!--")r=_e;else if(p[fe]!==void 0)r=ye;else if(p[X]!==void 0)Ve.test(p[X])&&(o=new RegExp(`</${p[X]}`,"g")),r=S;else if(p[st]!==void 0)throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else r===S?p[rt]===">"?(r=o??R,_=-1):p[ge]===void 0?_=-2:(_=r.lastIndex-p[ot].length,h=p[ge],r=p[be]===void 0?S:p[be]==='"'?K:Z):r===K||r===Z?r=S:r===_e||r===ye?r=R:(r=S,o=void 0);console.assert(_===-1||r===S||r===Z||r===K,"unexpected parse state B");const W=r===S&&n[a+1].startsWith("/>")?" ":"";s+=r===R?d+tt:_>=0?(i.push(h),d.slice(0,_)+ae+d.slice(_)+P+W):d+P+(_===-2?a:W)}const l=s+(n[t]||"<?>")+(e===oe?"</svg>":"");return[De(n,l),i]};class k{constructor({strings:e,["_$litType$"]:t},i){this.parts=[];let s,o=0,r=0;const l=e.length-1,a=this.parts,[d,_]=ze(e,t);if(this.el=k.createElement(d,i),E.currentNode=this.el.content,t===oe){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=E.nextNode())!==null&&a.length<l;){if(s.nodeType===1){{const h=s.localName;if(/^(?:textarea|template)$/i.test(h)&&s.innerHTML.includes(P)){const m=`Expressions are not supported inside \`${h}\` elements. See https://lit.dev/msg/expression-in-${h} for more information.`;if(h==="template")throw new Error(m);U("",m)}}if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ae)){const m=_[r++],W=s.getAttribute(h).split(P),L=/([.?@])?(.*)/.exec(m);a.push({type:de,index:o,name:L[2],strings:W,ctor:L[1]==="."?He:L[1]==="?"?je:L[1]==="@"?Be:D}),s.removeAttribute(h)}else h.startsWith(P)&&(a.push({type:ce,index:o}),s.removeAttribute(h));if(Ve.test(s.tagName)){const h=s.textContent.split(P),m=h.length-1;if(m>0){s.textContent=B?B.emptyScript:"";for(let p=0;p<m;p++)s.append(h[p],I()),E.nextNode(),a.push({type:F,index:++o});s.append(h[m],I())}}}else if(s.nodeType===8)if(s.data===le)a.push({type:F,index:o});else{let m=-1;for(;(m=s.data.indexOf(P,m+1))!==-1;)a.push({type:ct,index:o}),m+=P.length-1}o++}if(_.length!==r)throw new Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");c&&c({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function N(n,e,t=n,i){var r,l;if(e===T)return e;let s=i!==void 0?(r=t.__directives)==null?void 0:r[i]:t.__directive;const o=V(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$notifyDirectiveConnectionChanged)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(n),s._$initialize(n,t,i)),i!==void 0?(t.__directives??(t.__directives=[]))[i]=s:t.__directive=s),s!==void 0&&(e=N(n,s._$resolve(n,e.values),s,i)),e}let We=class{constructor(e,t){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){const{el:{content:t},parts:i}=this._$template,s=((e==null?void 0:e.creationScope)??C).importNode(t,!0);E.currentNode=s;let o=E.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let d;a.type===F?d=new Q(o,o.nextSibling,this,e):a.type===de?d=new a.ctor(o,a.name,a.strings,this,e):a.type===ce&&(d=new Fe(o,this,e)),this._$parts.push(d),a=i[++l]}r!==(a==null?void 0:a.index)&&(o=E.nextNode(),r++)}return E.currentNode=C,s}_update(e){let t=0;for(const i of this._$parts)i!==void 0&&(c&&c({kind:"set part",part:i,value:e[t],valueIndex:t,values:e,templateInstance:this}),i.strings!==void 0?(i._$setValue(e,i,t),t+=i.strings.length-2):i._$setValue(e[t])),t++}},Q=class Le{get _$isConnected(){var e;return((e=this._$parent)==null?void 0:e._$isConnected)??this.__isConnected}constructor(e,t,i,s){this.type=F,this._$committedValue=u,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=i,this.options=s,this.__isConnected=(s==null?void 0:s.isConnected)??!0,this._textSanitizer=void 0}get parentNode(){let e=b(this._$startNode).parentNode;const t=this._$parent;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){var i;if(this.parentNode===null)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=N(this,e,t),V(e))e===u||e==null||e===""?(this._$committedValue!==u&&(c&&c({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=u):e!==this._$committedValue&&e!==T&&this._commitText(e);else if(e._$litType$!==void 0)this._commitTemplateResult(e);else if(e.nodeType!==void 0){if(((i=this.options)==null?void 0:i.host)===e){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(e)}else Ie(e)?this._commitIterable(e):this._commitText(e)}_insert(e){return b(b(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){var t;if(this._$committedValue!==e){if(this._$clear(),x!==J){const i=(t=this._$startNode.parentNode)==null?void 0:t.nodeName;if(i==="STYLE"||i==="SCRIPT"){let s="Forbidden";throw i==="STYLE"?s="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":s="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(s)}}c&&c({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==u&&V(this._$committedValue)){const t=b(this._$startNode).nextSibling;this._textSanitizer===void 0&&(this._textSanitizer=re(t,"data","property")),e=this._textSanitizer(e),c&&c({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{const t=C.createTextNode("");this._commitNode(t),this._textSanitizer===void 0&&(this._textSanitizer=re(t,"data","property")),e=this._textSanitizer(e),c&&c({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){var o;const{values:t,["_$litType$"]:i}=e,s=typeof i=="number"?this._$getTemplate(e):(i.el===void 0&&(i.el=k.createElement(De(i.h,i.h[0]),this.options)),i);if(((o=this._$committedValue)==null?void 0:o._$template)===s)c&&c({kind:"template updating",template:s,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:t}),this._$committedValue._update(t);else{const r=new We(s,this),l=r._clone(this.options);c&&c({kind:"template instantiated",template:s,instance:r,parts:r._$parts,options:this.options,fragment:l,values:t}),r._update(t),c&&c({kind:"template instantiated and updated",template:s,instance:r,parts:r._$parts,options:this.options,fragment:l,values:t}),this._commitNode(l),this._$committedValue=r}}_$getTemplate(e){let t=$e.get(e.strings);return t===void 0&&$e.set(e.strings,t=new k(e)),t}_commitIterable(e){Ue(this._$committedValue)||(this._$committedValue=[],this._$clear());const t=this._$committedValue;let i=0,s;for(const o of e)i===t.length?t.push(s=new Le(this._insert(I()),this._insert(I()),this,this.options)):s=t[i],s._$setValue(o),i++;i<t.length&&(this._$clear(s&&b(s._$endNode).nextSibling,i),t.length=i)}_$clear(e=b(this._$startNode).nextSibling,t){var i;for((i=this._$notifyConnectionChanged)==null||i.call(this,!1,!0,t);e&&e!==this._$endNode;){const s=b(e).nextSibling;b(e).remove(),e=s}}setConnected(e){var t;if(this._$parent===void 0)this.__isConnected=e,(t=this._$notifyConnectionChanged)==null||t.call(this,e);else throw new Error("part.setConnected() may only be called on a RootPart returned from render().")}};class D{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,t,i,s,o){this.type=de,this._$committedValue=u,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$committedValue=new Array(i.length-1).fill(new String),this.strings=i):this._$committedValue=u,this._sanitizer=void 0}_$setValue(e,t=this,i,s){const o=this.strings;let r=!1;if(o===void 0)e=N(this,e,t,0),r=!V(e)||e!==this._$committedValue&&e!==T,r&&(this._$committedValue=e);else{const l=e;e=o[0];let a,d;for(a=0;a<o.length-1;a++)d=N(this,l[i+a],t,a),d===T&&(d=this._$committedValue[a]),r||(r=!V(d)||d!==this._$committedValue[a]),d===u?e=u:e!==u&&(e+=(d??"")+o[a+1]),this._$committedValue[a]=d}r&&!s&&this._commitValue(e)}_commitValue(e){e===u?b(this.element).removeAttribute(this.name):(this._sanitizer===void 0&&(this._sanitizer=x(this.element,this.name,"attribute")),e=this._sanitizer(e??""),c&&c({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),b(this.element).setAttribute(this.name,e??""))}}class He extends D{constructor(){super(...arguments),this.type=at}_commitValue(e){this._sanitizer===void 0&&(this._sanitizer=x(this.element,this.name,"property")),e=this._sanitizer(e),c&&c({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===u?void 0:e}}class je extends D{constructor(){super(...arguments),this.type=lt}_commitValue(e){c&&c({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==u),options:this.options}),b(this.element).toggleAttribute(this.name,!!e&&e!==u)}}class Be extends D{constructor(e,t,i,s,o){if(super(e,t,i,s,o),this.type=dt,this.strings!==void 0)throw new Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){if(e=N(this,e,t,0)??u,e===T)return;const i=this._$committedValue,s=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==u&&(i===u||s);c&&c({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:s,addListener:o,oldListener:i}),s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){var t;typeof this._$committedValue=="function"?this._$committedValue.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$committedValue.handleEvent(e)}}let Fe=class{constructor(e,t,i){this.element=e,this.type=ce,this._$disconnectableChildren=void 0,this._$parent=t,this.options=i}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){c&&c({kind:"commit to element binding",element:this.element,value:e,options:this.options}),N(this,e)}};const g={_boundAttributeSuffix:ae,_marker:P,_markerMatch:le,_HTML_RESULT:ke,_getTemplateHtml:ze,_TemplateInstance:We,_isIterable:Ie,_resolveDirective:N,_ChildPart:Q,_AttributePart:D,_BooleanAttributePart:je,_EventPart:Be,_PropertyPart:He,_ElementPart:Fe},ee=f.litHtmlPolyfillSupportDevMode;ee==null||ee(k,Q);(f.litHtmlVersions??(f.litHtmlVersions=[])).push("3.1.3");f.litHtmlVersions.length>1&&U("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");const M=(n,e,t)=>{if(e==null)throw new TypeError(`The container to render into may not be ${e}`);const i=Xe++,s=(t==null?void 0:t.renderBefore)??e;let o=s._$litPart$;if(c&&c({kind:"begin render",id:i,value:n,container:e,options:t,part:o}),o===void 0){const r=(t==null?void 0:t.renderBefore)??null;s._$litPart$=o=new Q(e.insertBefore(I(),r),r,void 0,t??{})}return o._$setValue(n),c&&c({kind:"end render",id:i,value:n,container:e,options:t,part:o}),o};M.setSanitizer=Ke,M.createSanitizer=re,M._testOnlyClearSanitizerFactoryDoNotCallOrElse=et;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let te=null;const ut={boundAttributeSuffix:g._boundAttributeSuffix,marker:g._marker,markerMatch:g._markerMatch,HTML_RESULT:g._HTML_RESULT,getTemplateHtml:g._getTemplateHtml,overrideDirectiveResolve:(n,e)=>class extends n{_$resolve(t,i){return e(this,i)}},patchDirectiveResolve:(n,e)=>{if(n.prototype._$resolve!==e){te??(te=n.prototype._$resolve.name);for(let t=n.prototype;t!==Object.prototype;t=Object.getPrototypeOf(t))if(t.hasOwnProperty(te)){t[te]=e;return}throw new Error("Internal error: It is possible that both dev mode and production mode Lit was mixed together during SSR. Please comment on the issue: https://github.com/lit/lit/issues/4527")}},setDirectiveClass(n,e){n._$litDirective$=e},getAttributePartCommittedValue:(n,e,t)=>{let i=T;return n._commitValue=s=>i=s,n._$setValue(e,n,t),i},connectedDisconnectable:n=>({...n,_$isConnected:!0}),resolveDirective:g._resolveDirective,AttributePart:g._AttributePart,PropertyPart:g._PropertyPart,BooleanAttributePart:g._BooleanAttributePart,EventPart:g._EventPart,ElementPart:g._ElementPart,TemplateInstance:g._TemplateInstance,isIterable:g._isIterable,ChildPart:g._ChildPart};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re,ve;(Re=window.ShadyDOM)!=null&&Re.inUse&&((ve=window.ShadyDOM)==null?void 0:ve.noPatch)===!0&&window.ShadyDOM.wrap;const mt=n=>n===null||typeof n!="object"&&typeof n!="function",ft=(n,e)=>(n==null?void 0:n._$litType$)!==void 0,_t=n=>{var e;return((e=n==null?void 0:n._$litType$)==null?void 0:e.h)!=null},yt=n=>n.strings===void 0;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{TemplateInstance:gt,isIterable:bt,resolveDirective:qe,ChildPart:O,ElementPart:$t}=ut,Pt=(n,e,t={})=>{if(e._$litPart$!==void 0)throw new Error("container already contains a live render");let i,s,o;const r=[],l=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT);let a;for(;(a=l.nextNode())!==null;){const d=a.data;if(d.startsWith("lit-part")){if(r.length===0&&i!==void 0)throw new Error(`There must be only one root part per container. Found a part marker (${a}) when we already have a root part marker (${s})`);o=wt(n,a,r,t),i===void 0&&(i=o),s??(s=a)}else if(d.startsWith("lit-node"))St(a,r,t);else if(d.startsWith("/lit-part")){if(r.length===1&&o!==i)throw new Error("internal error");o=Tt(a,o,r)}}if(i===void 0){const d=e instanceof ShadowRoot?"{container.host.localName}'s shadow root":e instanceof DocumentFragment?"DocumentFragment":e.localName;console.error(`There should be exactly one root part in a render container, but we didn't find any in ${d}.`)}e._$litPart$=i},wt=(n,e,t,i)=>{let s,o;if(t.length===0)o=new O(e,null,void 0,i),s=n;else{const r=t[t.length-1];if(r.type==="template-instance")o=new O(e,null,r.instance,i),r.instance._$parts.push(o),s=r.result.values[r.instancePartIndex++],r.templatePartIndex++;else if(r.type==="iterable"){o=new O(e,null,r.part,i);const l=r.iterator.next();if(l.done)throw s=void 0,r.done=!0,new Error("Unhandled shorter than expected iterable");s=l.value,r.part._$committedValue.push(o)}else o=new O(e,null,r.part,i)}if(s=qe(o,s),s===T)t.push({part:o,type:"leaf"});else if(mt(s))t.push({part:o,type:"leaf"}),o._$committedValue=s;else if(ft(s)){if(_t(s))throw new Error("compiled templates are not supported");const r=`lit-part ${Et(s)}`;if(e.data===r){const l=O.prototype._$getTemplate(s),a=new gt(l,o);t.push({type:"template-instance",instance:a,part:o,templatePartIndex:0,instancePartIndex:0,result:s}),o._$committedValue=a}else throw new Error("Hydration value mismatch: Unexpected TemplateResult rendered to part")}else bt(s)?(t.push({part:o,type:"iterable",value:s,iterator:s[Symbol.iterator](),done:!1}),o._$committedValue=[]):(t.push({part:o,type:"leaf"}),o._$committedValue=s??"");return o},Tt=(n,e,t)=>{if(e===void 0)throw new Error("unbalanced part marker");e._$endNode=n;const i=t.pop();if(i.type==="iterable"&&!i.iterator.next().done)throw new Error("unexpected longer than expected iterable");if(t.length>0)return t[t.length-1].part},St=(n,e,t)=>{const i=/lit-node (\d+)/.exec(n.data),s=parseInt(i[1]),o=n.nextElementSibling;if(o===null)throw new Error("could not find node for attribute parts");o.removeAttribute("defer-hydration");const r=e[e.length-1];if(r.type==="template-instance"){const l=r.instance;for(;;){const a=l._$template.parts[r.templatePartIndex];if(a===void 0||a.type!==v.ATTRIBUTE&&a.type!==v.ELEMENT||a.index!==s)break;if(a.type===v.ATTRIBUTE){const d=new a.ctor(o,a.name,a.strings,r.instance,t),_=yt(d)?r.result.values[r.instancePartIndex]:r.result.values,h=!(d.type===v.EVENT||d.type===v.PROPERTY);d._$setValue(_,d,r.instancePartIndex,h),r.instancePartIndex+=a.strings.length-1,l._$parts.push(d)}else{const d=new $t(o,r.instance,t);qe(d,r.result.values[r.instancePartIndex++]),l._$parts.push(d)}r.templatePartIndex++}}else throw new Error("Hydration value mismatch: Primitive found where TemplateResult expected. This usually occurs due to conditional rendering that resulted in a different value or template being rendered between the server and client.")},ne=2,Et=n=>{const e=new Uint32Array(ne).fill(5381);for(const i of n.strings)for(let s=0;s<i.length;s++)e[s%ne]=e[s%ne]*33^i.charCodeAt(s);const t=String.fromCharCode(...new Uint8Array(e.buffer));return btoa(t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe="hydrate-internals-";globalThis.litElementHydrateSupport=({LitElement:n})=>{const e=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(n),"observedAttributes").get;Object.defineProperty(n,"observedAttributes",{get(){return[...e.call(this),"defer-hydration"]}});const t=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(r,l,a){r==="defer-hydration"&&a===null&&i.call(this),t.call(this,r,l,a)};const i=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||i.call(this)};const s=n.prototype.createRenderRoot;n.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$needsHydration=!0,this.shadowRoot):s.call(this)};const o=Object.getPrototypeOf(n.prototype).update;n.prototype.update=function(r){const l=this.render();if(o.call(this,r),this._$needsHydration){this._$needsHydration=!1;for(let a=0;a<this.attributes.length;a++){const d=this.attributes[a];if(d.name.startsWith(Pe)){const _=d.name.slice(Pe.length);this.removeAttribute(_),this.removeAttribute(d.name)}}Pt(l,this.renderRoot,this.renderOptions)}else M(l,this.renderRoot,this.renderOptions)}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=!1,H=globalThis,he=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol(),we=new WeakMap;class Ye{constructor(e,t,i){if(this._$cssResult$=!0,i!==pe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet;const t=this._strings;if(he&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=we.get(t)),e===void 0&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),i&&we.set(t,e))}return e}toString(){return this.cssText}}const xt=n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${n}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},Nt=n=>new Ye(typeof n=="string"?n:String(n),void 0,pe),At=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,o)=>i+xt(s)+n[o+1],n[0]);return new Ye(t,n,pe)},Rt=(n,e)=>{if(he)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},vt=n=>{let e="";for(const t of n.cssRules)e+=t.cssText;return Nt(e)},Te=he||Ct?n=>n:n=>n instanceof CSSStyleSheet?vt(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ot,defineProperty:Mt,getOwnPropertyDescriptor:Se,getOwnPropertyNames:Ut,getOwnPropertySymbols:It,getPrototypeOf:Ee}=Object,y=globalThis;let $;const Ce=y.trustedTypes,Vt=Ce?Ce.emptyScript:"",j=y.reactiveElementPolyfillSupportDevMode;var Oe;{const n=y.litIssuedWarnings??(y.litIssuedWarnings=new Set);$=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,n.has(t)||(console.warn(t),n.add(t))},$("dev-mode","Lit is in dev mode. Not recommended for production!"),(Oe=y.ShadyDOM)!=null&&Oe.inUse&&j===void 0&&$("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")}const ie=n=>{y.emitLitDebugLogEvents&&y.dispatchEvent(new CustomEvent("lit-debug",{detail:n}))},A=(n,e)=>n,q={toAttribute(n,e){switch(e){case Boolean:n=n?Vt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n);break}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}break}return t}},ue=(n,e)=>!Ot(n,e),xe={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:ue};Symbol.metadata??(Symbol.metadata=Symbol("metadata"));y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??(this._initializers=[])).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=xe){if(t.state&&(t.attribute=!1),this.__prepare(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol.for(`${String(e)} (@property() cache)`),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Mt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=Se(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};if(s==null){if("value"in(Se(this.prototype,e)??{}))throw new Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);$("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get(){return s==null?void 0:s.call(this)},set(r){const l=s==null?void 0:s.call(this);o.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xe}static __prepare(){if(this.hasOwnProperty(A("elementProperties")))return;const e=Ee(this);e.finalize(),e._initializers!==void 0&&(this._initializers=[...e._initializers]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(A("properties"))){const t=this.properties,i=[...Ut(t),...It(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this.__attributeToPropertyMap=new Map;for(const[t,i]of this.elementProperties){const s=this.__attributeNameForProperty(t,i);s!==void 0&&this.__attributeToPropertyMap.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles),this.hasOwnProperty("createProperty")&&$("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators"),this.hasOwnProperty("getPropertyDescriptor")&&$("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Te(s))}else e!==void 0&&t.push(Te(e));return t}static __attributeNameForProperty(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){var e;this.__updatePromise=new Promise(t=>this.enableUpdating=t),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),(e=this.constructor._initializers)==null||e.forEach(t=>t(this))}addController(e){var t;(this.__controllers??(this.__controllers=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this.__controllers)==null||t.delete(e)}__saveInstanceProperties(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this.__instanceProperties=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Rt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.__controllers)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this.__controllers)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$attributeToProperty(e,i)}__propertyToAttribute(e,t){var r;const s=this.constructor.elementProperties.get(e),o=this.constructor.__attributeNameForProperty(e,s);if(o!==void 0&&s.reflect===!0){const a=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:q).toAttribute(t,s.type);this.constructor.enabledWarnings.includes("migration")&&a===void 0&&$("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this.__reflectingProperty=null}}_$attributeToProperty(e,t){var o;const i=this.constructor,s=i.__attributeToPropertyMap.get(e);if(s!==void 0&&this.__reflectingProperty!==s){const r=i.getPropertyOptions(s),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:q;this.__reflectingProperty=s,this[s]=l.fromAttribute(t,r.type),this.__reflectingProperty=null}}requestUpdate(e,t,i){if(e!==void 0){e instanceof Event&&$("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()"),i??(i=this.constructor.getPropertyOptions(e));const s=i.hasChanged??ue,o=this[e];if(s(o,t))this._$changeProperty(e,t,i);else return}this.isUpdatePending===!1&&(this.__updatePromise=this.__enqueueUpdate())}_$changeProperty(e,t,i){this._$changedProperties.has(e)||this._$changedProperties.set(e,t),i.reflect===!0&&this.__reflectingProperty!==e&&(this.__reflectingProperties??(this.__reflectingProperties=new Set)).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){const e=this.performUpdate();return this.constructor.enabledWarnings.includes("async-perform-update")&&typeof(e==null?void 0:e.then)=="function"&&$("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`),e}performUpdate(){var i;if(!this.isUpdatePending)return;if(ie==null||ie({kind:"update"}),!this.hasUpdated){this.renderRoot??(this.renderRoot=this.createRenderRoot());{const r=[...this.constructor.elementProperties.keys()].filter(l=>this.hasOwnProperty(l)&&l in Ee(this));if(r.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${r.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(const[o,r]of this.__instanceProperties)this[o]=r;this.__instanceProperties=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,r]of s)r.wrapped===!0&&!this._$changedProperties.has(o)&&this[o]!==void 0&&this._$changeProperty(o,this[o],r)}let e=!1;const t=this._$changedProperties;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this.__controllers)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this.__markUpdated()}catch(s){throw e=!1,this.__markUpdated(),s}e&&this._$didUpdate(t)}willUpdate(e){}_$didUpdate(e){var t;(t=this.__controllers)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update")&&$("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&(this.__reflectingProperties=this.__reflectingProperties.forEach(t=>this.__propertyToAttribute(t,this[t]))),this.__markUpdated()}updated(e){}firstUpdated(e){}}w.elementStyles=[];w.shadowRootOptions={mode:"open"};w[A("elementProperties")]=new Map;w[A("finalized")]=new Map;j==null||j({ReactiveElement:w});{w.enabledWarnings=["change-in-update","async-perform-update"];const n=function(e){e.hasOwnProperty(A("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};w.enableWarning=function(e){n(this),this.enabledWarnings.includes(e)||this.enabledWarnings.push(e)},w.disableWarning=function(e){n(this);const t=this.enabledWarnings.indexOf(e);t>=0&&this.enabledWarnings.splice(t,1)}}(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");y.reactiveElementVersions.length>1&&$("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=(n,e)=>n;let Je;{const n=globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);Je=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,n.has(t)||(console.warn(t),n.add(t))}}class z extends w{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=M(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.__childPart)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.__childPart)==null||e.setConnected(!1)}render(){return T}}z._$litElement$=!0;z[kt("finalized")]=!0;var Me;(Me=globalThis.litElementHydrateSupport)==null||Me.call(globalThis,{LitElement:z});const se=globalThis.litElementPolyfillSupportDevMode;se==null||se({LitElement:z});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");globalThis.litElementVersions.length>1&&Je("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qe;{const n=globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);Qe=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,n.has(t)||(console.warn(t),n.add(t))}}const zt=(n,e,t)=>{const i=e.hasOwnProperty(t);return e.constructor.createProperty(t,i?{...n,wrapped:!0}:n),i?Object.getOwnPropertyDescriptor(e,t):void 0},Wt={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:ue},Lt=(n=Wt,e,t)=>{const{kind:i,metadata:s}=t;s==null&&Qe("missing-class-metadata",`The class ${e} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(t.name,n),i==="accessor"){const{name:r}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,a,n)},init(l){return l!==void 0&&this._$changeProperty(r,void 0,n),l}}}else if(i==="setter"){const{name:r}=t;return function(l){const a=this[r];e.call(this,l),this.requestUpdate(r,a,n)}}throw new Error(`Unsupported decorator location: ${i}`)};function Ht(n){return(e,t)=>typeof t=="object"?Lt(n,e,t):zt(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);var jt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Ge=(n,e,t,i)=>{for(var s=i>1?void 0:i?Bt(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&jt(e,t,s),s};let Y=class extends z{constructor(){super(...arguments),this.count=0}render(){return pt`
			<button
				@click=${()=>{this.count+=1}}
			>
				Increment
			</button>

			<hr />
			<data>${this.count}</data>
		`}};Y.styles=[At`
			:host {
				display: block;
			}
		`];Ge([Ht({type:Number})],Y.prototype,"count",2);Y=Ge([Dt("lit-element")],Y);
//# sourceMappingURL=index-CD_ncSzw.js.map
