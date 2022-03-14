import{T as rt}from"./TwIcon.dab0926b.js";import{q as it,g as Ae,w as st,f as H,A as we,r as ot,o as ne,e as xe,i as re,c as ct,s as at,j as F,m as lt,k as ut,T as ft,t as gt}from"./vendor.d121aa1e.js";import{a as ht}from"./index.c3c05765.js";import{_ as dt}from"./index.c058fc65.js";var oe={exports:{}};function ce(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var n=e[t];typeof n=="object"&&!Object.isFrozen(n)&&ce(n)}),e}oe.exports=ce;oe.exports.default=ce;var pt=oe.exports;class ye{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ke(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function C(e,...t){const n=Object.create(null);for(const a in e)n[a]=e[a];return t.forEach(function(a){for(const d in a)n[d]=a[d]}),n}const bt="</span>",Me=e=>!!e.kind,Et=(e,{prefix:t})=>{if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((a,d)=>`${a}${"_".repeat(d+1)}`)].join(" ")}return`${t}${e}`};class _t{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=ke(t)}openNode(t){if(!Me(t))return;let n=t.kind;t.sublanguage?n=`language-${n}`:n=Et(n,{prefix:this.classPrefix}),this.span(n)}closeNode(t){!Me(t)||(this.buffer+=bt)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}class ae{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n={kind:t,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(a=>this._walk(t,a)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&(!t.children||(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{ae._collapse(n)})))}}class wt extends ae{constructor(t){super();this.options=t}addKeyword(t,n){t!==""&&(this.openNode(n),this.addText(t),this.closeNode())}addText(t){t!==""&&this.add(t)}addSublanguage(t,n){const a=t.root;a.kind=n,a.sublanguage=!0,this.add(a)}toHTML(){return new _t(this,this.options).value()}finalize(){return!0}}function P(e){return e?typeof e=="string"?e:e.source:null}function Te(e){return D("(?=",e,")")}function xt(e){return D("(?:",e,")*")}function yt(e){return D("(?:",e,")?")}function D(...e){return e.map(n=>P(n)).join("")}function Mt(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function le(...e){const t=Mt(e);return"("+(t.capture?"":"?:")+e.map(a=>P(a)).join("|")+")"}function Ce(e){return new RegExp(e.toString()+"|").exec("").length-1}function Ot(e,t){const n=e&&e.exec(t);return n&&n.index===0}const vt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ue(e,{joinWith:t}){let n=0;return e.map(a=>{n+=1;const d=n;let b=P(a),o="";for(;b.length>0;){const s=vt.exec(b);if(!s){o+=b;break}o+=b.substring(0,s.index),b=b.substring(s.index+s[0].length),s[0][0]==="\\"&&s[1]?o+="\\"+String(Number(s[1])+d):(o+=s[0],s[0]==="("&&n++)}return o}).map(a=>`(${a})`).join(t)}const Rt=/\b\B/,Ie="[a-zA-Z]\\w*",fe="[a-zA-Z_]\\w*",Be="\\b\\d+(\\.\\d+)?",De="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Le="\\b(0b[01]+)",St="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Nt=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=D(t,/.*\b/,e.binary,/\b.*/)),C({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,a)=>{n.index!==0&&a.ignoreMatch()}},e)},m={begin:"\\\\[\\s\\S]",relevance:0},At={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[m]},kt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[m]},Tt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Y=function(e,t,n={}){const a=C({scope:"comment",begin:e,end:t,contains:[]},n);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const d=le("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:D(/[ ]+/,"(",d,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},Ct=Y("//","$"),It=Y("/\\*","\\*/"),Bt=Y("#","$"),Dt={scope:"number",begin:Be,relevance:0},Lt={scope:"number",begin:De,relevance:0},jt={scope:"number",begin:Le,relevance:0},Ht={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[m,{begin:/\[/,end:/\]/,relevance:0,contains:[m]}]}]},Pt={scope:"title",begin:Ie,relevance:0},mt={scope:"title",begin:fe,relevance:0},Ut={begin:"\\.\\s*"+fe,relevance:0},$t=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var X=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Rt,IDENT_RE:Ie,UNDERSCORE_IDENT_RE:fe,NUMBER_RE:Be,C_NUMBER_RE:De,BINARY_NUMBER_RE:Le,RE_STARTERS_RE:St,SHEBANG:Nt,BACKSLASH_ESCAPE:m,APOS_STRING_MODE:At,QUOTE_STRING_MODE:kt,PHRASAL_WORDS_MODE:Tt,COMMENT:Y,C_LINE_COMMENT_MODE:Ct,C_BLOCK_COMMENT_MODE:It,HASH_COMMENT_MODE:Bt,NUMBER_MODE:Dt,C_NUMBER_MODE:Lt,BINARY_NUMBER_MODE:jt,REGEXP_MODE:Ht,TITLE_MODE:Pt,UNDERSCORE_TITLE_MODE:mt,METHOD_GUARD:Ut,END_SAME_AS_BEGIN:$t});function Gt(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Kt(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function zt(e,t){!t||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Gt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Wt(e,t){!Array.isArray(e.illegal)||(e.illegal=le(...e.illegal))}function Ft(e,t){if(!!e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Xt(e,t){e.relevance===void 0&&(e.relevance=1)}const Vt=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=n.keywords,e.begin=D(n.beforeMatch,Te(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Yt=["of","and","for","in","not","or","if","then","parent","list","value"],Zt="keyword";function je(e,t,n=Zt){const a=Object.create(null);return typeof e=="string"?d(n,e.split(" ")):Array.isArray(e)?d(n,e):Object.keys(e).forEach(function(b){Object.assign(a,je(e[b],t,b))}),a;function d(b,o){t&&(o=o.map(s=>s.toLowerCase())),o.forEach(function(s){const u=s.split("|");a[u[0]]=[b,qt(u[0],u[1])]})}}function qt(e,t){return t?Number(t):Jt(e)?0:1}function Jt(e){return Yt.includes(e.toLowerCase())}const Oe={},B=e=>{console.error(e)},ve=(e,...t)=>{console.log(`WARN: ${e}`,...t)},L=(e,t)=>{Oe[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Oe[`${e}/${t}`]=!0)},V=new Error;function He(e,t,{key:n}){let a=0;const d=e[n],b={},o={};for(let s=1;s<=t.length;s++)o[s+a]=d[s],b[s+a]=!0,a+=Ce(t[s-1]);e[n]=o,e[n]._emit=b,e[n]._multi=!0}function Qt(e){if(!!Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw B("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),V;if(typeof e.beginScope!="object"||e.beginScope===null)throw B("beginScope must be object"),V;He(e,e.begin,{key:"beginScope"}),e.begin=ue(e.begin,{joinWith:""})}}function en(e){if(!!Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw B("skip, excludeEnd, returnEnd not compatible with endScope: {}"),V;if(typeof e.endScope!="object"||e.endScope===null)throw B("endScope must be object"),V;He(e,e.end,{key:"endScope"}),e.end=ue(e.end,{joinWith:""})}}function tn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function nn(e){tn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Qt(e),en(e)}function rn(e){function t(o,s){return new RegExp(P(o),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(s?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,s]),this.matchAt+=Ce(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(u=>u[1]);this.matcherRe=t(ue(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(s);if(!u)return null;const y=u.findIndex((j,Z)=>Z>0&&j!==void 0),w=this.matchIndexes[y];return u.splice(0,y),Object.assign(u,w)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const u=new n;return this.rules.slice(s).forEach(([y,w])=>u.addRule(y,w)),u.compile(),this.multiRegexes[s]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,u){this.rules.push([s,u]),u.type==="begin"&&this.count++}exec(s){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let y=u.exec(s);if(this.resumingScanAtSamePosition()&&!(y&&y.index===this.lastIndex)){const w=this.getMatcher(0);w.lastIndex=this.lastIndex+1,y=w.exec(s)}return y&&(this.regexIndex+=y.position+1,this.regexIndex===this.count&&this.considerAll()),y}}function d(o){const s=new a;return o.contains.forEach(u=>s.addRule(u.begin,{rule:u,type:"begin"})),o.terminatorEnd&&s.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&s.addRule(o.illegal,{type:"illegal"}),s}function b(o,s){const u=o;if(o.isCompiled)return u;[Kt,Ft,nn,Vt].forEach(w=>w(o,s)),e.compilerExtensions.forEach(w=>w(o,s)),o.__beforeBegin=null,[zt,Wt,Xt].forEach(w=>w(o,s)),o.isCompiled=!0;let y=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),y=o.keywords.$pattern,delete o.keywords.$pattern),y=y||/\w+/,o.keywords&&(o.keywords=je(o.keywords,e.case_insensitive)),u.keywordPatternRe=t(y,!0),s&&(o.begin||(o.begin=/\B|\b/),u.beginRe=t(u.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(u.endRe=t(u.end)),u.terminatorEnd=P(u.end)||"",o.endsWithParent&&s.terminatorEnd&&(u.terminatorEnd+=(o.end?"|":"")+s.terminatorEnd)),o.illegal&&(u.illegalRe=t(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(w){return sn(w==="self"?o:w)})),o.contains.forEach(function(w){b(w,u)}),o.starts&&b(o.starts,s),u.matcher=d(u),u}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=C(e.classNameAliases||{}),b(e)}function Pe(e){return e?e.endsWithParent||Pe(e.starts):!1}function sn(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return C(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Pe(e)?C(e,{starts:e.starts?C(e.starts):null}):Object.isFrozen(e)?C(e):e}var on="11.5.0";class cn extends Error{constructor(t,n){super(t);this.name="HTMLInjectionError",this.html=n}}const ie=ke,Re=C,Se=Symbol("nomatch"),an=7,ln=function(e){const t=Object.create(null),n=Object.create(null),a=[];let d=!0;const b="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:wt};function u(r){return s.noHighlightRe.test(r)}function y(r){let l=r.className+" ";l+=r.parentNode?r.parentNode.className:"";const h=s.languageDetectRe.exec(l);if(h){const E=N(h[1]);return E||(ve(b.replace("{}",h[1])),ve("Falling back to no-highlight mode for this block.",r)),E?h[1]:"no-highlight"}return l.split(/\s+/).find(E=>u(E)||N(E))}function w(r,l,h){let E="",x="";typeof l=="object"?(E=r,h=l.ignoreIllegals,x=l.language):(L("10.7.0","highlight(lang, code, ...args) has been deprecated."),L("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),x=r,E=l),h===void 0&&(h=!0);const R={code:E,language:x};G("before:highlight",R);const A=R.result?R.result:j(R.language,R.code,h);return A.code=R.code,G("after:highlight",A),A}function j(r,l,h,E){const x=Object.create(null);function R(i,c){return i.keywords[c]}function A(){if(!f.keywords){M.addText(_);return}let i=0;f.keywordPatternRe.lastIndex=0;let c=f.keywordPatternRe.exec(_),g="";for(;c;){g+=_.substring(i,c.index);const p=T.case_insensitive?c[0].toLowerCase():c[0],O=R(f,p);if(O){const[S,tt]=O;if(M.addText(g),g="",x[p]=(x[p]||0)+1,x[p]<=an&&(W+=tt),S.startsWith("_"))g+=c[0];else{const nt=T.classNameAliases[S]||S;M.addKeyword(c[0],nt)}}else g+=c[0];i=f.keywordPatternRe.lastIndex,c=f.keywordPatternRe.exec(_)}g+=_.substr(i),M.addText(g)}function K(){if(_==="")return;let i=null;if(typeof f.subLanguage=="string"){if(!t[f.subLanguage]){M.addText(_);return}i=j(f.subLanguage,_,!0,_e[f.subLanguage]),_e[f.subLanguage]=i._top}else i=q(_,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(W+=i.relevance),M.addSublanguage(i._emitter,i.language)}function v(){f.subLanguage!=null?K():A(),_=""}function k(i,c){let g=1;const p=c.length-1;for(;g<=p;){if(!i._emit[g]){g++;continue}const O=T.classNameAliases[i[g]]||i[g],S=c[g];O?M.addKeyword(S,O):(_=S,A(),_=""),g++}}function pe(i,c){return i.scope&&typeof i.scope=="string"&&M.openNode(T.classNameAliases[i.scope]||i.scope),i.beginScope&&(i.beginScope._wrap?(M.addKeyword(_,T.classNameAliases[i.beginScope._wrap]||i.beginScope._wrap),_=""):i.beginScope._multi&&(k(i.beginScope,c),_="")),f=Object.create(i,{parent:{value:f}}),f}function be(i,c,g){let p=Ot(i.endRe,g);if(p){if(i["on:end"]){const O=new ye(i);i["on:end"](c,O),O.isMatchIgnored&&(p=!1)}if(p){for(;i.endsParent&&i.parent;)i=i.parent;return i}}if(i.endsWithParent)return be(i.parent,c,g)}function Ze(i){return f.matcher.regexIndex===0?(_+=i[0],1):(te=!0,0)}function qe(i){const c=i[0],g=i.rule,p=new ye(g),O=[g.__beforeBegin,g["on:begin"]];for(const S of O)if(!!S&&(S(i,p),p.isMatchIgnored))return Ze(c);return g.skip?_+=c:(g.excludeBegin&&(_+=c),v(),!g.returnBegin&&!g.excludeBegin&&(_=c)),pe(g,i),g.returnBegin?0:c.length}function Je(i){const c=i[0],g=l.substr(i.index),p=be(f,i,g);if(!p)return Se;const O=f;f.endScope&&f.endScope._wrap?(v(),M.addKeyword(c,f.endScope._wrap)):f.endScope&&f.endScope._multi?(v(),k(f.endScope,i)):O.skip?_+=c:(O.returnEnd||O.excludeEnd||(_+=c),v(),O.excludeEnd&&(_=c));do f.scope&&M.closeNode(),!f.skip&&!f.subLanguage&&(W+=f.relevance),f=f.parent;while(f!==p.parent);return p.starts&&pe(p.starts,i),O.returnEnd?0:c.length}function Qe(){const i=[];for(let c=f;c!==T;c=c.parent)c.scope&&i.unshift(c.scope);i.forEach(c=>M.openNode(c))}let z={};function Ee(i,c){const g=c&&c[0];if(_+=i,g==null)return v(),0;if(z.type==="begin"&&c.type==="end"&&z.index===c.index&&g===""){if(_+=l.slice(c.index,c.index+1),!d){const p=new Error(`0 width match regex (${r})`);throw p.languageName=r,p.badRule=z.rule,p}return 1}if(z=c,c.type==="begin")return qe(c);if(c.type==="illegal"&&!h){const p=new Error('Illegal lexeme "'+g+'" for mode "'+(f.scope||"<unnamed>")+'"');throw p.mode=f,p}else if(c.type==="end"){const p=Je(c);if(p!==Se)return p}if(c.type==="illegal"&&g==="")return 1;if(ee>1e5&&ee>c.index*3)throw new Error("potential infinite loop, way more iterations than matches");return _+=g,g.length}const T=N(r);if(!T)throw B(b.replace("{}",r)),new Error('Unknown language: "'+r+'"');const et=rn(T);let Q="",f=E||et;const _e={},M=new s.__emitter(s);Qe();let _="",W=0,I=0,ee=0,te=!1;try{for(f.matcher.considerAll();;){ee++,te?te=!1:f.matcher.considerAll(),f.matcher.lastIndex=I;const i=f.matcher.exec(l);if(!i)break;const c=l.substring(I,i.index),g=Ee(c,i);I=i.index+g}return Ee(l.substr(I)),M.closeAllNodes(),M.finalize(),Q=M.toHTML(),{language:r,value:Q,relevance:W,illegal:!1,_emitter:M,_top:f}}catch(i){if(i.message&&i.message.includes("Illegal"))return{language:r,value:ie(l),illegal:!0,relevance:0,_illegalBy:{message:i.message,index:I,context:l.slice(I-100,I+100),mode:i.mode,resultSoFar:Q},_emitter:M};if(d)return{language:r,value:ie(l),illegal:!1,relevance:0,errorRaised:i,_emitter:M,_top:f};throw i}}function Z(r){const l={value:ie(r),illegal:!1,relevance:0,_top:o,_emitter:new s.__emitter(s)};return l._emitter.addText(r),l}function q(r,l){l=l||s.languages||Object.keys(t);const h=Z(r),E=l.filter(N).filter(de).map(v=>j(v,r,!1));E.unshift(h);const x=E.sort((v,k)=>{if(v.relevance!==k.relevance)return k.relevance-v.relevance;if(v.language&&k.language){if(N(v.language).supersetOf===k.language)return 1;if(N(k.language).supersetOf===v.language)return-1}return 0}),[R,A]=x,K=R;return K.secondBest=A,K}function me(r,l,h){const E=l&&n[l]||h;r.classList.add("hljs"),r.classList.add(`language-${E}`)}function J(r){let l=null;const h=y(r);if(u(h))return;if(G("before:highlightElement",{el:r,language:h}),r.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(r)),s.throwUnescapedHTML))throw new cn("One of your code blocks includes unescaped HTML.",r.innerHTML);l=r;const E=l.textContent,x=h?w(E,{language:h,ignoreIllegals:!0}):q(E);r.innerHTML=x.value,me(r,h,x.language),r.result={language:x.language,re:x.relevance,relevance:x.relevance},x.secondBest&&(r.secondBest={language:x.secondBest.language,relevance:x.secondBest.relevance}),G("after:highlightElement",{el:r,result:x,text:E})}function Ue(r){s=Re(s,r)}const $e=()=>{$(),L("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Ge(){$(),L("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let ge=!1;function $(){if(document.readyState==="loading"){ge=!0;return}document.querySelectorAll(s.cssSelector).forEach(J)}function Ke(){ge&&$()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Ke,!1);function ze(r,l){let h=null;try{h=l(e)}catch(E){if(B("Language definition for '{}' could not be registered.".replace("{}",r)),d)B(E);else throw E;h=o}h.name||(h.name=r),t[r]=h,h.rawDefinition=l.bind(null,e),h.aliases&&he(h.aliases,{languageName:r})}function We(r){delete t[r];for(const l of Object.keys(n))n[l]===r&&delete n[l]}function Fe(){return Object.keys(t)}function N(r){return r=(r||"").toLowerCase(),t[r]||t[n[r]]}function he(r,{languageName:l}){typeof r=="string"&&(r=[r]),r.forEach(h=>{n[h.toLowerCase()]=l})}function de(r){const l=N(r);return l&&!l.disableAutodetect}function Xe(r){r["before:highlightBlock"]&&!r["before:highlightElement"]&&(r["before:highlightElement"]=l=>{r["before:highlightBlock"](Object.assign({block:l.el},l))}),r["after:highlightBlock"]&&!r["after:highlightElement"]&&(r["after:highlightElement"]=l=>{r["after:highlightBlock"](Object.assign({block:l.el},l))})}function Ve(r){Xe(r),a.push(r)}function G(r,l){const h=r;a.forEach(function(E){E[h]&&E[h](l)})}function Ye(r){return L("10.7.0","highlightBlock will be removed entirely in v12.0"),L("10.7.0","Please use highlightElement now."),J(r)}Object.assign(e,{highlight:w,highlightAuto:q,highlightAll:$,highlightElement:J,highlightBlock:Ye,configure:Ue,initHighlighting:$e,initHighlightingOnLoad:Ge,registerLanguage:ze,unregisterLanguage:We,listLanguages:Fe,getLanguage:N,registerAliases:he,autoDetection:de,inherit:Re,addPlugin:Ve}),e.debugMode=function(){d=!1},e.safeMode=function(){d=!0},e.versionString=on,e.regex={concat:D,lookahead:Te,either:le,optional:yt,anyNumberOfTimes:xt};for(const r in X)typeof X[r]=="object"&&pt(X[r]);return Object.assign(e,X),e};var U=ln({}),un=U;U.HighlightJS=U;U.default=U;var se=un,Ne=it({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(e){var t=Ae(e.language);st(function(){return e.language},function(d){t.value=d});var n=H(function(){return e.autodetect||!t.value}),a=H(function(){return!n.value&&!se.getLanguage(t.value)});return{className:H(function(){return a.value?"":"hljs "+t.value}),highlightedCode:H(function(){var d;if(a.value)return console.warn('The language "'+t.value+'" you specified could not be found.'),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(n.value){var b=se.highlightAuto(e.code);return t.value=(d=b.language)!==null&&d!==void 0?d:"",b.value}return(b=se.highlight(e.code,{language:t.value,ignoreIllegals:e.ignoreIllegals})).value})}},render:function(){return we("pre",{},[we("code",{class:this.className,innerHTML:this.highlightedCode})])}}),fn={install:function(e){e.component("highlightjs",Ne)},component:Ne};const gn={name:"TwCodePreviewEditor",components:{highlightjs:fn.component},props:{source:{type:String,required:!0},components:{type:Object,default:()=>{}}},setup(e){const t=Ae(!1),n=H(()=>({components:e.components,template:e.source})),{copy:a}=ht();return{result:n,showCode:t,copyCode:()=>{a(e.source).then(()=>{console.log("Copied to clipboard!")}).catch(b=>{console.log("Can not copy!",b)})}}}},hn={class:"my-3"},dn={class:"border border-gray-200 border-b-0 px-5 py-6"},pn={key:0,class:"relative border border-gray-200 border-b-0"},bn={class:"ml-2 text-sm text-gray-500 group-hover:text-gray-700"};function En(e,t,n,a,d,b){const o=rt,s=ot("highlightjs");return ne(),xe("div",hn,[re("div",dn,[(ne(),ct(at(a.result)))]),F(ft,{"enter-from-class":"max-h-0","enter-active-class":"transition-all duration-300","enter-to-class":"max-h-screen","leave-from-class":"max-h-screen","leave-active-class":"transition-all duration-300","leave-to-class":"max-h-0"},{default:lt(()=>[a.showCode?(ne(),xe("div",pn,[F(o,{name:"heroicons-outline:duplicate",class:"absolute top-1 right-1 w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer z-10",onClick:t[0]||(t[0]=u=>a.copyCode())}),F(s,{autodetect:"",code:n.source},null,8,["code"])])):ut("",!0)]),_:1}),re("div",{class:"group py-2 bg-white hover:bg-gray-50 cursor-pointer flex justify-center items-center border border-gray-200",onClick:t[1]||(t[1]=u=>a.showCode=!a.showCode)},[F(o,{name:"heroicons-outline:code",class:"w-4 h-4 text-gray-500 group-hover:text-gray-700"}),re("span",bn,gt(a.showCode?"Hide":"Show")+" Code ",1)])])}var Mn=dt(gn,[["render",En]]);export{Mn as _};
