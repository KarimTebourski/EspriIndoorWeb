/*! jQuery v3.5.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t=Object.create(null),V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

;!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.Tether=e()}(this,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){var o=t.getBoundingClientRect(),i={};for(var n in o)i[n]=o[n];try{if(t.ownerDocument!==document){var r=t.ownerDocument.defaultView.frameElement;if(r){var s=e(r);i.top+=s.top,i.bottom+=s.top,i.left+=s.left,i.right+=s.left}}}catch(a){}return i}function o(t){var e=getComputedStyle(t)||{},o=e.position,i=[];if("fixed"===o)return[t];for(var n=t;(n=n.parentNode)&&n&&1===n.nodeType;){var r=void 0;try{r=getComputedStyle(n)}catch(s){}if("undefined"==typeof r||null===r)return i.push(n),i;var a=r,f=a.overflow,l=a.overflowX,h=a.overflowY;/(auto|scroll|overlay)/.test(f+h+l)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(r.position)>=0)&&i.push(n)}return i.push(t.ownerDocument.body),t.ownerDocument!==document&&i.push(t.ownerDocument.defaultView),i}function i(){O&&document.body.removeChild(O),O=null}function n(t){var o=void 0;t===document?(o=document,t=document.documentElement):o=t.ownerDocument;var i=o.documentElement,n=e(t),r=A();return n.top-=r.top,n.left-=r.left,"undefined"==typeof n.width&&(n.width=document.body.scrollWidth-n.left-n.right),"undefined"==typeof n.height&&(n.height=document.body.scrollHeight-n.top-n.bottom),n.top=n.top-i.clientTop,n.left=n.left-i.clientLeft,n.right=o.body.clientWidth-n.width-n.left,n.bottom=o.body.clientHeight-n.height-n.top,n}function r(t){return t.offsetParent||document.documentElement}function s(){if(T)return T;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");a(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return T={width:n,height:n}}function a(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function f(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=d(t).replace(o," ");u(t,i)}}function l(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{f(t,e);var o=d(t)+(" "+e);u(t,o)}}function h(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=d(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function d(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function u(t,e){t.setAttribute("class",e)}function p(t,e,o){o.forEach(function(o){e.indexOf(o)===-1&&h(t,o)&&f(t,o)}),e.forEach(function(e){h(t,e)||l(t,e)})}function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function g(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function m(){return"object"==typeof performance&&"function"==typeof performance.now?performance.now():+new Date}function v(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];return o.forEach(function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i}),t}function y(t,e){return"string"==typeof t.left&&t.left.indexOf("%")!==-1&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&t.top.indexOf("%")!==-1&&(t.top=parseFloat(t.top,10)/100*e.height),t}function b(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=e,o=n(e),i=o,r=getComputedStyle(e);if(e=[i.left,i.top,o.width+i.left,o.height+i.top],t.ownerDocument!==document){var s=t.ownerDocument.defaultView;e[0]+=s.pageXOffset,e[1]+=s.pageYOffset,e[2]+=s.pageXOffset,e[3]+=s.pageYOffset}I.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(r["border"+t+"Width"]):e[o]-=parseFloat(r["border"+t+"Width"])})}(),e}var w=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),C=void 0;"undefined"==typeof C&&(C={modules:[]});var O=null,E=function(){var t=0;return function(){return++t}}(),x={},A=function(){var t=O;t&&document.body.contains(t)||(t=document.createElement("div"),t.setAttribute("data-tether-id",E()),a(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),O=t);var o=t.getAttribute("data-tether-id");return"undefined"==typeof x[o]&&(x[o]=e(t),S(function(){delete x[o]})),x[o]},T=null,P=[],S=function(t){P.push(t)},W=function(){for(var t=void 0;t=P.pop();)t()},M=function(){function e(){t(this,e)}return w(e,[{key:"on",value:function(t,e,o){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"!=typeof this.bindings&&"undefined"!=typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(o>1?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,l=a;"undefined"==typeof l&&(l=this),s.apply(l,i),f?this.bindings[t].splice(e,1):++e}}}}]),e}();C.Utils={getActualBoundingClientRect:e,getScrollParents:o,getBounds:n,getOffsetParent:r,extend:a,addClass:l,removeClass:f,hasClass:h,updateClasses:p,defer:S,flush:W,uniqueId:E,Evented:M,getScrollBarSize:s,removeUtilElements:i};var k=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),_=function(t,e,o){for(var i=!0;i;){var n=t,r=e,s=o;i=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,r);if(void 0!==a){if("value"in a)return a.value;var f=a.get;if(void 0===f)return;return f.call(s)}var l=Object.getPrototypeOf(n);if(null===l)return;t=l,e=r,o=s,i=!0,a=l=void 0}};if("undefined"==typeof C)throw new Error("You must include the utils.js file before tether.js");var z=C.Utils,o=z.getScrollParents,n=z.getBounds,r=z.getOffsetParent,a=z.extend,l=z.addClass,f=z.removeClass,p=z.updateClasses,S=z.defer,W=z.flush,s=z.getScrollBarSize,i=z.removeUtilElements,B=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),j=[],F=function(){j.forEach(function(t){t.position(!1)}),W()};!function(){var t=null,e=null,o=null,i=function n(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(n,250))):void("undefined"!=typeof t&&m()-t<10||(null!=o&&(clearTimeout(o),o=null),t=m(),F(),e=m()-t))};"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var Y={center:"center",left:"right",right:"left"},D={middle:"middle",top:"bottom",bottom:"top"},L={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},X=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=Y[e.left]),"auto"===i&&(i=D[e.top]),{left:o,top:i}},H=function(t){var e=t.left,o=t.top;return"undefined"!=typeof L[t.left]&&(e=L[t.left]),"undefined"!=typeof L[t.top]&&(o=L[t.top]),{left:e,top:o}},N=function(t){var e=t.split(" "),o=k(e,2),i=o[0],n=o[1];return{top:i,left:n}},R=N,U=function(e){function h(e){var o=this;t(this,h),_(Object.getPrototypeOf(h.prototype),"constructor",this).call(this),this.position=this.position.bind(this),j.push(this),this.history=[],this.setOptions(e,!1),C.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return c(h,e),w(h,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,i=arguments.length<=1||void 0===arguments[1]||arguments[1],n={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=a(n,t);var r=this.options,s=r.element,f=r.target,h=r.targetModifier;if(this.element=s,this.target=f,this.targetModifier=h,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),l(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&l(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=R(this.options.targetAttachment),this.attachment=R(this.options.attachment),this.offset=N(this.options.offset),this.targetOffset=N(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=o(this.target),this.options.enabled!==!1&&this.enable(i)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return n(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=n(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=n(o);var i=getComputedStyle(o),r=o.scrollWidth>o.clientWidth||[i.overflow,i.overflowX].indexOf("scroll")>=0||this.target!==document.body,s=0;r&&(s=15);var a=t.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-s,e={width:15,height:.975*a*(a/o.scrollHeight),left:t.left+t.width-parseFloat(i.borderLeftWidth)-15},f=0;a<408&&this.target===document.body&&(f=-11e-5*Math.pow(a,2)-.00727*a+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var l=this.target.scrollTop/(o.scrollHeight-a);return e.top=l*(a-e.height-f)+t.top+parseFloat(i.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];this.options.addTargetClasses!==!1&&l(this.target,this.getClass("enabled")),l(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)}),e&&this.position()}},{key:"disable",value:function(){var t=this;f(this.target,this.getClass("enabled")),f(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function(){var t=this;this.disable(),j.forEach(function(e,o){e===t&&j.splice(o,1)}),0===j.length&&i()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),S(function(){"undefined"!=typeof o._addAttachClasses&&(p(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&p(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var o=X(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return n(t.element)}),a=i.width,f=i.height;if(0===a&&0===f&&"undefined"!=typeof this.lastSize){var l=this.lastSize;a=l.width,f=l.height}else this.lastSize={width:a,height:f};var h=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=h,u=y(H(this.attachment),{width:a,height:f}),p=y(H(o),d),c=y(this.offset,{width:a,height:f}),g=y(this.targetOffset,d);u=v(u,c),p=v(p,g);for(var m=h.left+p.left-u.left,b=h.top+p.top-u.top,w=0;w<C.modules.length;++w){var O=C.modules[w],E=O.position.call(this,{left:m,top:b,targetAttachment:o,targetPos:h,elementPos:i,offset:u,targetOffset:p,manualOffset:c,manualTargetOffset:g,scrollbarSize:P,attachment:this.attachment});if(E===!1)return!1;"undefined"!=typeof E&&"object"==typeof E&&(b=E.top,m=E.left)}var x={page:{top:b,left:m},viewport:{top:b-pageYOffset,bottom:pageYOffset-b-f+innerHeight,left:m-pageXOffset,right:pageXOffset-m-a+innerWidth}},A=this.target.ownerDocument,T=A.defaultView,P=void 0;return T.innerHeight>A.documentElement.clientHeight&&(P=this.cache("scrollbar-size",s),x.viewport.bottom-=P.height),T.innerWidth>A.documentElement.clientWidth&&(P=this.cache("scrollbar-size",s),x.viewport.right-=P.width),["","static"].indexOf(A.body.style.position)!==-1&&["","static"].indexOf(A.body.parentElement.style.position)!==-1||(x.page.bottom=A.body.scrollHeight-b-f,x.page.right=A.body.scrollWidth-m-a),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return r(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return n(e)}),i=getComputedStyle(e),s=o,a={};if(["Top","Left","Bottom","Right"].forEach(function(t){a[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])}),o.right=A.body.scrollWidth-o.left-s.width+a.right,o.bottom=A.body.scrollHeight-o.top-s.height+a.bottom,x.page.top>=o.top+a.top&&x.page.bottom>=o.bottom&&x.page.left>=o.left+a.left&&x.page.right>=o.right){var f=e.scrollTop,l=e.scrollLeft;x.offset={top:x.page.top-o.top+f-a.top,left:x.page.left-o.left+l-a.left}}}(),this.move(x),this.history.unshift(x),this.history.length>3&&this.history.pop(),e&&W(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var i in t){o[i]={};for(var n in t[i]){for(var s=!1,f=0;f<this.history.length;++f){var l=this.history[f];if("undefined"!=typeof l[i]&&!g(l[i][n],t[i][n])){s=!0;break}}s||(o[i][n]=!0)}}var h={top:"",left:"",right:"",bottom:""},d=function(t,o){var i="undefined"!=typeof e.options.optimizations,n=i?e.options.optimizations.gpu:null;if(n!==!1){var r=void 0,s=void 0;t.top?(h.top=0,r=o.top):(h.bottom=0,r=-o.bottom),t.left?(h.left=0,s=o.left):(h.right=0,s=-o.right),"number"==typeof window.devicePixelRatio&&devicePixelRatio%1===0&&(s=Math.round(s*devicePixelRatio)/devicePixelRatio,r=Math.round(r*devicePixelRatio)/devicePixelRatio),h[B]="translateX("+s+"px) translateY("+r+"px)","msTransform"!==B&&(h[B]+=" translateZ(0)")}else t.top?h.top=o.top+"px":h.bottom=o.bottom+"px",t.left?h.left=o.left+"px":h.right=o.right+"px"},u=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(h.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(h.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){h.position="absolute";var i=e.cache("target-offsetparent",function(){return r(e.target)});r(e.element)!==i&&S(function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)}),d(o.offset,t.offset),u=!0}():(h.position="absolute",d({top:!0,left:!0},t.page)),!u)if(this.options.bodyElement)this.element.parentNode!==this.options.bodyElement&&this.options.bodyElement.appendChild(this.element);else{for(var p=function(t){var e=t.ownerDocument,o=e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement;return o===t},c=!0,m=this.element.parentNode;m&&1===m.nodeType&&"BODY"!==m.tagName&&!p(m);){if("static"!==getComputedStyle(m).position){c=!1;break}m=m.parentNode}c||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var v={},y=!1;for(var n in h){var b=h[n],w=this.element.style[n];w!==b&&(y=!0,v[n]=b)}y&&S(function(){a(e.element.style,v),e.trigger("repositioned")})}}}]),h}(M);U.modules=[],C.position=F;var V=a(U,C),k=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),z=C.Utils,n=z.getBounds,a=z.extend,p=z.updateClasses,S=z.defer,I=["left","top","right","bottom"];C.modules.push({position:function(t){var e=this,o=t.top,i=t.left,r=t.targetAttachment;if(!this.options.constraints)return!0;var s=this.cache("element-bounds",function(){return n(e.element)}),f=s.height,l=s.width;if(0===l&&0===f&&"undefined"!=typeof this.lastSize){var h=this.lastSize;l=h.width,f=h.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),u=d.height,c=d.width,g=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&g.push(e),o&&g.push(o)}),g.forEach(function(t){["left","top","right","bottom"].forEach(function(e){g.push(t+"-"+e)})});var m=[],v=a({},r),y=a({},this.attachment);return this.options.constraints.forEach(function(t){var n=t.to,s=t.attachment,a=t.pin;"undefined"==typeof s&&(s="");var h=void 0,d=void 0;if(s.indexOf(" ")>=0){var p=s.split(" "),g=k(p,2);d=g[0],h=g[1]}else h=d=s;var w=b(e,n);"target"!==d&&"both"!==d||(o<w[1]&&"top"===v.top&&(o+=u,v.top="bottom"),o+f>w[3]&&"bottom"===v.top&&(o-=u,v.top="top")),"together"===d&&("top"===v.top&&("bottom"===y.top&&o<w[1]?(o+=u,v.top="bottom",o+=f,y.top="top"):"top"===y.top&&o+f>w[3]&&o-(f-u)>=w[1]&&(o-=f-u,v.top="bottom",y.top="bottom")),"bottom"===v.top&&("top"===y.top&&o+f>w[3]?(o-=u,v.top="top",o-=f,y.top="bottom"):"bottom"===y.top&&o<w[1]&&o+(2*f-u)<=w[3]&&(o+=f-u,v.top="top",y.top="top")),"middle"===v.top&&(o+f>w[3]&&"top"===y.top?(o-=f,y.top="bottom"):o<w[1]&&"bottom"===y.top&&(o+=f,y.top="top"))),"target"!==h&&"both"!==h||(i<w[0]&&"left"===v.left&&(i+=c,v.left="right"),i+l>w[2]&&"right"===v.left&&(i-=c,v.left="left")),"together"===h&&(i<w[0]&&"left"===v.left?"right"===y.left?(i+=c,v.left="right",i+=l,y.left="left"):"left"===y.left&&(i+=c,v.left="right",i-=l,y.left="right"):i+l>w[2]&&"right"===v.left?"left"===y.left?(i-=c,v.left="left",i-=l,y.left="right"):"right"===y.left&&(i-=c,v.left="left",i+=l,y.left="left"):"center"===v.left&&(i+l>w[2]&&"left"===y.left?(i-=l,y.left="right"):i<w[0]&&"right"===y.left&&(i+=l,y.left="left"))),"element"!==d&&"both"!==d||(o<w[1]&&"bottom"===y.top&&(o+=f,y.top="top"),o+f>w[3]&&"top"===y.top&&(o-=f,y.top="bottom")),"element"!==h&&"both"!==h||(i<w[0]&&("right"===y.left?(i+=l,y.left="left"):"center"===y.left&&(i+=l/2,y.left="left")),i+l>w[2]&&("left"===y.left?(i-=l,y.left="right"):"center"===y.left&&(i-=l/2,y.left="right"))),"string"==typeof a?a=a.split(",").map(function(t){return t.trim()}):a===!0&&(a=["top","left","right","bottom"]),a=a||[];var C=[],O=[];o<w[1]&&(a.indexOf("top")>=0?(o=w[1],C.push("top")):O.push("top")),o+f>w[3]&&(a.indexOf("bottom")>=0?(o=w[3]-f,C.push("bottom")):O.push("bottom")),i<w[0]&&(a.indexOf("left")>=0?(i=w[0],C.push("left")):O.push("left")),i+l>w[2]&&(a.indexOf("right")>=0?(i=w[2]-l,C.push("right")):O.push("right")),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),m.push(t),C.forEach(function(e){m.push(t+"-"+e)})}(),O.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),m.push(t),O.forEach(function(e){m.push(t+"-"+e)})}(),(C.indexOf("left")>=0||C.indexOf("right")>=0)&&(y.left=v.left=!1),(C.indexOf("top")>=0||C.indexOf("bottom")>=0)&&(y.top=v.top=!1),v.top===r.top&&v.left===r.left&&y.top===e.attachment.top&&y.left===e.attachment.left||(e.updateAttachClasses(y,v),e.trigger("update",{attachment:y,targetAttachment:v}))}),S(function(){e.options.addTargetClasses!==!1&&p(e.target,m,g),p(e.element,m,g)}),{top:o,left:i}}});var z=C.Utils,n=z.getBounds,p=z.updateClasses,S=z.defer;C.modules.push({position:function(t){var e=this,o=t.top,i=t.left,r=this.cache("element-bounds",function(){return n(e.element)}),s=r.height,a=r.width,f=this.getTargetBounds(),l=o+s,h=i+a,d=[];o<=f.bottom&&l>=f.top&&["left","right"].forEach(function(t){var e=f[t];e!==i&&e!==h||d.push(t)}),i<=f.right&&h>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];e!==o&&e!==l||d.push(t)});var u=[],c=[],g=["left","top","right","bottom"];return u.push(this.getClass("abutted")),g.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),d.length&&c.push(this.getClass("abutted")),d.forEach(function(t){c.push(e.getClass("abutted")+"-"+t)}),S(function(){e.options.addTargetClasses!==!1&&p(e.target,c,u),p(e.element,c,u)}),!0}});var k=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return C.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var s=i,a=k(s,2);n=a[0],r=a[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return e+=n,o+=r,{top:e,left:o}}}}),V});
;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.7",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map
;/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Sortable = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var version = "1.10.2";

  function userAgent(pattern) {
    if (typeof window !== 'undefined' && window.navigator) {
      return !!
      /*@__PURE__*/
      navigator.userAgent.match(pattern);
    }
  }

  var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
  var Edge = userAgent(/Edge/i);
  var FireFox = userAgent(/firefox/i);
  var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
  var IOS = userAgent(/iP(ad|od|hone)/i);
  var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

  var captureMode = {
    capture: false,
    passive: false
  };

  function on(el, event, fn) {
    el.addEventListener(event, fn, !IE11OrLess && captureMode);
  }

  function off(el, event, fn) {
    el.removeEventListener(event, fn, !IE11OrLess && captureMode);
  }

  function matches(
  /**HTMLElement*/
  el,
  /**String*/
  selector) {
    if (!selector) return;
    selector[0] === '>' && (selector = selector.substring(1));

    if (el) {
      try {
        if (el.matches) {
          return el.matches(selector);
        } else if (el.msMatchesSelector) {
          return el.msMatchesSelector(selector);
        } else if (el.webkitMatchesSelector) {
          return el.webkitMatchesSelector(selector);
        }
      } catch (_) {
        return false;
      }
    }

    return false;
  }

  function getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
  }

  function closest(
  /**HTMLElement*/
  el,
  /**String*/
  selector,
  /**HTMLElement*/
  ctx, includeCTX) {
    if (el) {
      ctx = ctx || document;

      do {
        if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
          return el;
        }

        if (el === ctx) break;
        /* jshint boss:true */
      } while (el = getParentOrHost(el));
    }

    return null;
  }

  var R_SPACE = /\s+/g;

  function toggleClass(el, name, state) {
    if (el && name) {
      if (el.classList) {
        el.classList[state ? 'add' : 'remove'](name);
      } else {
        var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
        el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
      }
    }
  }

  function css(el, prop, val) {
    var style = el && el.style;

    if (style) {
      if (val === void 0) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
          val = document.defaultView.getComputedStyle(el, '');
        } else if (el.currentStyle) {
          val = el.currentStyle;
        }

        return prop === void 0 ? val : val[prop];
      } else {
        if (!(prop in style) && prop.indexOf('webkit') === -1) {
          prop = '-webkit-' + prop;
        }

        style[prop] = val + (typeof val === 'string' ? '' : 'px');
      }
    }
  }

  function matrix(el, selfOnly) {
    var appliedTransforms = '';

    if (typeof el === 'string') {
      appliedTransforms = el;
    } else {
      do {
        var transform = css(el, 'transform');

        if (transform && transform !== 'none') {
          appliedTransforms = transform + ' ' + appliedTransforms;
        }
        /* jshint boss:true */

      } while (!selfOnly && (el = el.parentNode));
    }

    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */

    return matrixFn && new matrixFn(appliedTransforms);
  }

  function find(ctx, tagName, iterator) {
    if (ctx) {
      var list = ctx.getElementsByTagName(tagName),
          i = 0,
          n = list.length;

      if (iterator) {
        for (; i < n; i++) {
          iterator(list[i], i);
        }
      }

      return list;
    }

    return [];
  }

  function getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;

    if (scrollingElement) {
      return scrollingElement;
    } else {
      return document.documentElement;
    }
  }
  /**
   * Returns the "bounding client rect" of given element
   * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
   * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
   * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
   * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
   * @param  {[HTMLElement]} container              The parent the element will be placed in
   * @return {Object}                               The boundingClientRect of el, with specified adjustments
   */


  function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;

    if (el !== window && el !== getWindowScrollingElement()) {
      elRect = el.getBoundingClientRect();
      top = elRect.top;
      left = elRect.left;
      bottom = elRect.bottom;
      right = elRect.right;
      height = elRect.height;
      width = elRect.width;
    } else {
      top = 0;
      left = 0;
      bottom = window.innerHeight;
      right = window.innerWidth;
      height = window.innerHeight;
      width = window.innerWidth;
    }

    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
      // Adjust for translate()
      container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
      // Not needed on <= IE11

      if (!IE11OrLess) {
        do {
          if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
            var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

            top -= containerRect.top + parseInt(css(container, 'border-top-width'));
            left -= containerRect.left + parseInt(css(container, 'border-left-width'));
            bottom = top + elRect.height;
            right = left + elRect.width;
            break;
          }
          /* jshint boss:true */

        } while (container = container.parentNode);
      }
    }

    if (undoScale && el !== window) {
      // Adjust for scale()
      var elMatrix = matrix(container || el),
          scaleX = elMatrix && elMatrix.a,
          scaleY = elMatrix && elMatrix.d;

      if (elMatrix) {
        top /= scaleY;
        left /= scaleX;
        width /= scaleX;
        height /= scaleY;
        bottom = top + height;
        right = left + width;
      }
    }

    return {
      top: top,
      left: left,
      bottom: bottom,
      right: right,
      width: width,
      height: height
    };
  }
  /**
   * Checks if a side of an element is scrolled past a side of its parents
   * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
   * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
   * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
   * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
   */


  function isScrolledPast(el, elSide, parentSide) {
    var parent = getParentAutoScrollElement(el, true),
        elSideVal = getRect(el)[elSide];
    /* jshint boss:true */

    while (parent) {
      var parentSideVal = getRect(parent)[parentSide],
          visible = void 0;

      if (parentSide === 'top' || parentSide === 'left') {
        visible = elSideVal >= parentSideVal;
      } else {
        visible = elSideVal <= parentSideVal;
      }

      if (!visible) return parent;
      if (parent === getWindowScrollingElement()) break;
      parent = getParentAutoScrollElement(parent, false);
    }

    return false;
  }
  /**
   * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
   * and non-draggable elements
   * @param  {HTMLElement} el       The parent element
   * @param  {Number} childNum      The index of the child
   * @param  {Object} options       Parent Sortable's options
   * @return {HTMLElement}          The child at index childNum, or null if not found
   */


  function getChild(el, childNum, options) {
    var currentChild = 0,
        i = 0,
        children = el.children;

    while (i < children.length) {
      if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
        if (currentChild === childNum) {
          return children[i];
        }

        currentChild++;
      }

      i++;
    }

    return null;
  }
  /**
   * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
   * @param  {HTMLElement} el       Parent element
   * @param  {selector} selector    Any other elements that should be ignored
   * @return {HTMLElement}          The last child, ignoring ghostEl
   */


  function lastChild(el, selector) {
    var last = el.lastElementChild;

    while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
      last = last.previousElementSibling;
    }

    return last || null;
  }
  /**
   * Returns the index of an element within its parent for a selected set of
   * elements
   * @param  {HTMLElement} el
   * @param  {selector} selector
   * @return {number}
   */


  function index(el, selector) {
    var index = 0;

    if (!el || !el.parentNode) {
      return -1;
    }
    /* jshint boss:true */


    while (el = el.previousElementSibling) {
      if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
        index++;
      }
    }

    return index;
  }
  /**
   * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
   * The value is returned in real pixels.
   * @param  {HTMLElement} el
   * @return {Array}             Offsets in the format of [left, top]
   */


  function getRelativeScrollOffset(el) {
    var offsetLeft = 0,
        offsetTop = 0,
        winScroller = getWindowScrollingElement();

    if (el) {
      do {
        var elMatrix = matrix(el),
            scaleX = elMatrix.a,
            scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
      } while (el !== winScroller && (el = el.parentNode));
    }

    return [offsetLeft, offsetTop];
  }
  /**
   * Returns the index of the object within the given array
   * @param  {Array} arr   Array that may or may not hold the object
   * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
   * @return {Number}      The index of the object in the array, or -1
   */


  function indexOfObject(arr, obj) {
    for (var i in arr) {
      if (!arr.hasOwnProperty(i)) continue;

      for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
      }
    }

    return -1;
  }

  function getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;

    do {
      // we don't need to get elem css if it isn't even overflowing in the first place (performance)
      if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = css(elem);

        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
          if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
          if (gotSelf || includeSelf) return elem;
          gotSelf = true;
        }
      }
      /* jshint boss:true */

    } while (elem = elem.parentNode);

    return getWindowScrollingElement();
  }

  function extend(dst, src) {
    if (dst && src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dst[key] = src[key];
        }
      }
    }

    return dst;
  }

  function isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
  }

  var _throttleTimeout;

  function throttle(callback, ms) {
    return function () {
      if (!_throttleTimeout) {
        var args = arguments,
            _this = this;

        if (args.length === 1) {
          callback.call(_this, args[0]);
        } else {
          callback.apply(_this, args);
        }

        _throttleTimeout = setTimeout(function () {
          _throttleTimeout = void 0;
        }, ms);
      }
    };
  }

  function cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
  }

  function scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
  }

  function clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;

    if (Polymer && Polymer.dom) {
      return Polymer.dom(el).cloneNode(true);
    } else if ($) {
      return $(el).clone(true)[0];
    } else {
      return el.cloneNode(true);
    }
  }

  function setRect(el, rect) {
    css(el, 'position', 'absolute');
    css(el, 'top', rect.top);
    css(el, 'left', rect.left);
    css(el, 'width', rect.width);
    css(el, 'height', rect.height);
  }

  function unsetRect(el) {
    css(el, 'position', '');
    css(el, 'top', '');
    css(el, 'left', '');
    css(el, 'width', '');
    css(el, 'height', '');
  }

  var expando = 'Sortable' + new Date().getTime();

  function AnimationStateManager() {
    var animationStates = [],
        animationCallbackId;
    return {
      captureAnimationState: function captureAnimationState() {
        animationStates = [];
        if (!this.options.animation) return;
        var children = [].slice.call(this.el.children);
        children.forEach(function (child) {
          if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
          animationStates.push({
            target: child,
            rect: getRect(child)
          });

          var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


          if (child.thisAnimationDuration) {
            var childMatrix = matrix(child, true);

            if (childMatrix) {
              fromRect.top -= childMatrix.f;
              fromRect.left -= childMatrix.e;
            }
          }

          child.fromRect = fromRect;
        });
      },
      addAnimationState: function addAnimationState(state) {
        animationStates.push(state);
      },
      removeAnimationState: function removeAnimationState(target) {
        animationStates.splice(indexOfObject(animationStates, {
          target: target
        }), 1);
      },
      animateAll: function animateAll(callback) {
        var _this = this;

        if (!this.options.animation) {
          clearTimeout(animationCallbackId);
          if (typeof callback === 'function') callback();
          return;
        }

        var animating = false,
            animationTime = 0;
        animationStates.forEach(function (state) {
          var time = 0,
              target = state.target,
              fromRect = target.fromRect,
              toRect = getRect(target),
              prevFromRect = target.prevFromRect,
              prevToRect = target.prevToRect,
              animatingRect = state.rect,
              targetMatrix = matrix(target, true);

          if (targetMatrix) {
            // Compensate for current animation
            toRect.top -= targetMatrix.f;
            toRect.left -= targetMatrix.e;
          }

          target.toRect = toRect;

          if (target.thisAnimationDuration) {
            // Could also check if animatingRect is between fromRect and toRect
            if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
            (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
              // If returning to same place as started from animation and on same axis
              time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
            }
          } // if fromRect != toRect: animate


          if (!isRectEqual(toRect, fromRect)) {
            target.prevFromRect = fromRect;
            target.prevToRect = toRect;

            if (!time) {
              time = _this.options.animation;
            }

            _this.animate(target, animatingRect, toRect, time);
          }

          if (time) {
            animating = true;
            animationTime = Math.max(animationTime, time);
            clearTimeout(target.animationResetTimer);
            target.animationResetTimer = setTimeout(function () {
              target.animationTime = 0;
              target.prevFromRect = null;
              target.fromRect = null;
              target.prevToRect = null;
              target.thisAnimationDuration = null;
            }, time);
            target.thisAnimationDuration = time;
          }
        });
        clearTimeout(animationCallbackId);

        if (!animating) {
          if (typeof callback === 'function') callback();
        } else {
          animationCallbackId = setTimeout(function () {
            if (typeof callback === 'function') callback();
          }, animationTime);
        }

        animationStates = [];
      },
      animate: function animate(target, currentRect, toRect, duration) {
        if (duration) {
          css(target, 'transition', '');
          css(target, 'transform', '');
          var elMatrix = matrix(this.el),
              scaleX = elMatrix && elMatrix.a,
              scaleY = elMatrix && elMatrix.d,
              translateX = (currentRect.left - toRect.left) / (scaleX || 1),
              translateY = (currentRect.top - toRect.top) / (scaleY || 1);
          target.animatingX = !!translateX;
          target.animatingY = !!translateY;
          css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
          repaint(target); // repaint

          css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
          css(target, 'transform', 'translate3d(0,0,0)');
          typeof target.animated === 'number' && clearTimeout(target.animated);
          target.animated = setTimeout(function () {
            css(target, 'transition', '');
            css(target, 'transform', '');
            target.animated = false;
            target.animatingX = false;
            target.animatingY = false;
          }, duration);
        }
      }
    };
  }

  function repaint(target) {
    return target.offsetWidth;
  }

  function calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
  }

  var plugins = [];
  var defaults = {
    initializeByDefault: true
  };
  var PluginManager = {
    mount: function mount(plugin) {
      // Set default static properties
      for (var option in defaults) {
        if (defaults.hasOwnProperty(option) && !(option in plugin)) {
          plugin[option] = defaults[option];
        }
      }

      plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
      var _this = this;

      this.eventCanceled = false;

      evt.cancel = function () {
        _this.eventCanceled = true;
      };

      var eventNameGlobal = eventName + 'Global';
      plugins.forEach(function (plugin) {
        if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

        if (sortable[plugin.pluginName][eventNameGlobal]) {
          sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
            sortable: sortable
          }, evt));
        } // Only fire plugin event if plugin is enabled in this sortable,
        // and plugin has event defined


        if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
          sortable[plugin.pluginName][eventName](_objectSpread({
            sortable: sortable
          }, evt));
        }
      });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults, options) {
      plugins.forEach(function (plugin) {
        var pluginName = plugin.pluginName;
        if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
        var initialized = new plugin(sortable, el, sortable.options);
        initialized.sortable = sortable;
        initialized.options = sortable.options;
        sortable[pluginName] = initialized; // Add default options from plugin

        _extends(defaults, initialized.defaults);
      });

      for (var option in sortable.options) {
        if (!sortable.options.hasOwnProperty(option)) continue;
        var modified = this.modifyOption(sortable, option, sortable.options[option]);

        if (typeof modified !== 'undefined') {
          sortable.options[option] = modified;
        }
      }
    },
    getEventProperties: function getEventProperties(name, sortable) {
      var eventProperties = {};
      plugins.forEach(function (plugin) {
        if (typeof plugin.eventProperties !== 'function') return;

        _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
      });
      return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
      var modifiedValue;
      plugins.forEach(function (plugin) {
        // Plugin must exist on the Sortable
        if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

        if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
          modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        }
      });
      return modifiedValue;
    }
  };

  function dispatchEvent(_ref) {
    var sortable = _ref.sortable,
        rootEl = _ref.rootEl,
        name = _ref.name,
        targetEl = _ref.targetEl,
        cloneEl = _ref.cloneEl,
        toEl = _ref.toEl,
        fromEl = _ref.fromEl,
        oldIndex = _ref.oldIndex,
        newIndex = _ref.newIndex,
        oldDraggableIndex = _ref.oldDraggableIndex,
        newDraggableIndex = _ref.newDraggableIndex,
        originalEvent = _ref.originalEvent,
        putSortable = _ref.putSortable,
        extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl && rootEl[expando];
    if (!sortable) return;
    var evt,
        options = sortable.options,
        onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

    if (window.CustomEvent && !IE11OrLess && !Edge) {
      evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
      });
    } else {
      evt = document.createEvent('Event');
      evt.initEvent(name, true, true);
    }

    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = oldIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = oldDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

    var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

    for (var option in allEventProperties) {
      evt[option] = allEventProperties[option];
    }

    if (rootEl) {
      rootEl.dispatchEvent(evt);
    }

    if (options[onName]) {
      options[onName].call(sortable, evt);
    }
  }

  var pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        originalEvent = _ref.evt,
        data = _objectWithoutProperties(_ref, ["evt"]);

    PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
      dragEl: dragEl,
      parentEl: parentEl,
      ghostEl: ghostEl,
      rootEl: rootEl,
      nextEl: nextEl,
      lastDownEl: lastDownEl,
      cloneEl: cloneEl,
      cloneHidden: cloneHidden,
      dragStarted: moved,
      putSortable: putSortable,
      activeSortable: Sortable.active,
      originalEvent: originalEvent,
      oldIndex: oldIndex,
      oldDraggableIndex: oldDraggableIndex,
      newIndex: newIndex,
      newDraggableIndex: newDraggableIndex,
      hideGhostForTarget: _hideGhostForTarget,
      unhideGhostForTarget: _unhideGhostForTarget,
      cloneNowHidden: function cloneNowHidden() {
        cloneHidden = true;
      },
      cloneNowShown: function cloneNowShown() {
        cloneHidden = false;
      },
      dispatchSortableEvent: function dispatchSortableEvent(name) {
        _dispatchEvent({
          sortable: sortable,
          name: name,
          originalEvent: originalEvent
        });
      }
    }, data));
  };

  function _dispatchEvent(info) {
    dispatchEvent(_objectSpread({
      putSortable: putSortable,
      cloneEl: cloneEl,
      targetEl: dragEl,
      rootEl: rootEl,
      oldIndex: oldIndex,
      oldDraggableIndex: oldDraggableIndex,
      newIndex: newIndex,
      newDraggableIndex: newDraggableIndex
    }, info));
  }

  var dragEl,
      parentEl,
      ghostEl,
      rootEl,
      nextEl,
      lastDownEl,
      cloneEl,
      cloneHidden,
      oldIndex,
      newIndex,
      oldDraggableIndex,
      newDraggableIndex,
      activeGroup,
      putSortable,
      awaitingDragStarted = false,
      ignoreNextClick = false,
      sortables = [],
      tapEvt,
      touchEvt,
      lastDx,
      lastDy,
      tapDistanceLeft,
      tapDistanceTop,
      moved,
      lastTarget,
      lastDirection,
      pastFirstInvertThresh = false,
      isCircumstantialInvert = false,
      targetMoveDistance,
      // For positioning ghost absolutely
  ghostRelativeParent,
      ghostRelativeParentInitialScroll = [],
      // (left, top)
  _silent = false,
      savedInputChecked = [];
  /** @const */

  var documentExists = typeof document !== 'undefined',
      PositionGhostAbsolutely = IOS,
      CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
      // This will not pass for IE9, because IE9 DnD only works on anchors
  supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
      supportCssPointerEvents = function () {
    if (!documentExists) return; // false when <= IE11

    if (IE11OrLess) {
      return false;
    }

    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
  }(),
      _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el),
        elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
        child1 = getChild(el, 0, options),
        child2 = getChild(el, 1, options),
        firstChildCSS = child1 && css(child1),
        secondChildCSS = child2 && css(child2),
        firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
        secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

    if (elCSS.display === 'flex') {
      return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    }

    if (elCSS.display === 'grid') {
      return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    }

    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
      var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
      return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }

    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
  },
      _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
        dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
        dragElOppLength = vertical ? dragRect.width : dragRect.height,
        targetS1Opp = vertical ? targetRect.left : targetRect.top,
        targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
        targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
  },

  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function (sortable) {
      if (lastChild(sortable)) return;
      var rect = getRect(sortable),
          threshold = sortable[expando].options.emptyInsertThreshold,
          insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
          insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

      if (threshold && insideHorizontally && insideVertically) {
        return ret = sortable;
      }
    });
    return ret;
  },
      _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
      return function (to, from, dragEl, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

        if (value == null && (pull || sameGroup)) {
          // Default pull value
          // Default pull and put value if same group
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === 'clone') {
          return value;
        } else if (typeof value === 'function') {
          return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }

    var group = {};
    var originalGroup = options.group;

    if (!originalGroup || _typeof(originalGroup) != 'object') {
      originalGroup = {
        name: originalGroup
      };
    }

    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  },
      _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', 'none');
    }
  },
      _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', '');
    }
  }; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


  if (documentExists) {
    document.addEventListener('click', function (evt) {
      if (ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        ignoreNextClick = false;
        return false;
      }
    }, true);
  }

  var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if (dragEl) {
      evt = evt.touches ? evt.touches[0] : evt;

      var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

      if (nearest) {
        // Create imitation event
        var event = {};

        for (var i in evt) {
          if (evt.hasOwnProperty(i)) {
            event[i] = evt[i];
          }
        }

        event.target = event.rootEl = nearest;
        event.preventDefault = void 0;
        event.stopPropagation = void 0;

        nearest[expando]._onDragOver(event);
      }
    }
  };

  var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if (dragEl) {
      dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
    }
  };
  /**
   * @class  Sortable
   * @param  {HTMLElement}  el
   * @param  {Object}       [options]
   */


  function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) {
      throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
    }

    this.el = el; // root element

    this.options = options = _extends({}, options); // Export instance

    el[expando] = this;
    var defaults = {
      group: null,
      sort: true,
      disabled: false,
      store: null,
      handle: null,
      draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
      swapThreshold: 1,
      // percentage; 0 <= x <= 1
      invertSwap: false,
      // invert always
      invertedSwapThreshold: null,
      // will be set to same as swapThreshold if default
      removeCloneOnHide: true,
      direction: function direction() {
        return _detectDirection(el, this.options);
      },
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',
      ignore: 'a, img',
      filter: null,
      preventOnFilter: true,
      animation: 0,
      easing: null,
      setData: function setData(dataTransfer, dragEl) {
        dataTransfer.setData('Text', dragEl.textContent);
      },
      dropBubble: false,
      dragoverBubble: false,
      dataIdAttr: 'data-id',
      delay: 0,
      delayOnTouchOnly: false,
      touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
      forceFallback: false,
      fallbackClass: 'sortable-fallback',
      fallbackOnBody: false,
      fallbackTolerance: 0,
      fallbackOffset: {
        x: 0,
        y: 0
      },
      supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
      emptyInsertThreshold: 5
    };
    PluginManager.initializePlugins(this, el, defaults); // Set default options

    for (var name in defaults) {
      !(name in options) && (options[name] = defaults[name]);
    }

    _prepareGroup(options); // Bind all private methods


    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    } // Setup drag mode


    this.nativeDraggable = options.forceFallback ? false : supportDraggable;

    if (this.nativeDraggable) {
      // Touch start threshold cannot be greater than the native dragstart threshold
      this.options.touchStartThreshold = 1;
    } // Bind events


    if (options.supportPointer) {
      on(el, 'pointerdown', this._onTapStart);
    } else {
      on(el, 'mousedown', this._onTapStart);
      on(el, 'touchstart', this._onTapStart);
    }

    if (this.nativeDraggable) {
      on(el, 'dragover', this);
      on(el, 'dragenter', this);
    }

    sortables.push(this.el); // Restore sorting

    options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

    _extends(this, AnimationStateManager());
  }

  Sortable.prototype =
  /** @lends Sortable.prototype */
  {
    constructor: Sortable,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
      if (!this.el.contains(target) && target !== this.el) {
        lastTarget = null;
      }
    },
    _getDirection: function _getDirection(evt, target) {
      return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(
    /** Event|TouchEvent */
    evt) {
      if (!evt.cancelable) return;

      var _this = this,
          el = this.el,
          options = this.options,
          preventOnFilter = options.preventOnFilter,
          type = evt.type,
          touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
          target = (touch || evt).target,
          originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
          filter = options.filter;

      _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


      if (dragEl) {
        return;
      }

      if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
        return; // only left button and enabled
      } // cancel dnd if original target is content editable


      if (originalTarget.isContentEditable) {
        return;
      }

      target = closest(target, options.draggable, el, false);

      if (target && target.animated) {
        return;
      }

      if (lastDownEl === target) {
        // Ignoring duplicate `down`
        return;
      } // Get the index of the dragged element within its parent


      oldIndex = index(target);
      oldDraggableIndex = index(target, options.draggable); // Check filter

      if (typeof filter === 'function') {
        if (filter.call(this, evt, target, this)) {
          _dispatchEvent({
            sortable: _this,
            rootEl: originalTarget,
            name: 'filter',
            targetEl: target,
            toEl: el,
            fromEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          preventOnFilter && evt.cancelable && evt.preventDefault();
          return; // cancel dnd
        }
      } else if (filter) {
        filter = filter.split(',').some(function (criteria) {
          criteria = closest(originalTarget, criteria.trim(), el, false);

          if (criteria) {
            _dispatchEvent({
              sortable: _this,
              rootEl: criteria,
              name: 'filter',
              targetEl: target,
              fromEl: el,
              toEl: el
            });

            pluginEvent('filter', _this, {
              evt: evt
            });
            return true;
          }
        });

        if (filter) {
          preventOnFilter && evt.cancelable && evt.preventDefault();
          return; // cancel dnd
        }
      }

      if (options.handle && !closest(originalTarget, options.handle, el, false)) {
        return;
      } // Prepare `dragstart`


      this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(
    /** Event */
    evt,
    /** Touch */
    touch,
    /** HTMLElement */
    target) {
      var _this = this,
          el = _this.el,
          options = _this.options,
          ownerDocument = el.ownerDocument,
          dragStartFn;

      if (target && !dragEl && target.parentNode === el) {
        var dragRect = getRect(target);
        rootEl = el;
        dragEl = target;
        parentEl = dragEl.parentNode;
        nextEl = dragEl.nextSibling;
        lastDownEl = target;
        activeGroup = options.group;
        Sortable.dragged = dragEl;
        tapEvt = {
          target: dragEl,
          clientX: (touch || evt).clientX,
          clientY: (touch || evt).clientY
        };
        tapDistanceLeft = tapEvt.clientX - dragRect.left;
        tapDistanceTop = tapEvt.clientY - dragRect.top;
        this._lastX = (touch || evt).clientX;
        this._lastY = (touch || evt).clientY;
        dragEl.style['will-change'] = 'all';

        dragStartFn = function dragStartFn() {
          pluginEvent('delayEnded', _this, {
            evt: evt
          });

          if (Sortable.eventCanceled) {
            _this._onDrop();

            return;
          } // Delayed drag has been triggered
          // we can re-enable the events: touchmove/mousemove


          _this._disableDelayedDragEvents();

          if (!FireFox && _this.nativeDraggable) {
            dragEl.draggable = true;
          } // Bind the events: dragstart/dragend


          _this._triggerDragStart(evt, touch); // Drag start event


          _dispatchEvent({
            sortable: _this,
            name: 'choose',
            originalEvent: evt
          }); // Chosen item


          toggleClass(dragEl, options.chosenClass, true);
        }; // Disable "draggable"


        options.ignore.split(',').forEach(function (criteria) {
          find(dragEl, criteria.trim(), _disableDraggable);
        });
        on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
        on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
        on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
        on(ownerDocument, 'mouseup', _this._onDrop);
        on(ownerDocument, 'touchend', _this._onDrop);
        on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

        if (FireFox && this.nativeDraggable) {
          this.options.touchStartThreshold = 4;
          dragEl.draggable = true;
        }

        pluginEvent('delayStart', this, {
          evt: evt
        }); // Delay is impossible for native DnD in Edge or IE

        if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
          if (Sortable.eventCanceled) {
            this._onDrop();

            return;
          } // If the user moves the pointer or let go the click or touch
          // before the delay has been reached:
          // disable the delayed drag


          on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
          on(ownerDocument, 'touchend', _this._disableDelayedDrag);
          on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
          on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
          on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
          options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
          _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
        } else {
          dragStartFn();
        }
      }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
    /** TouchEvent|PointerEvent **/
    e) {
      var touch = e.touches ? e.touches[0] : e;

      if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
        this._disableDelayedDrag();
      }
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
      dragEl && _disableDraggable(dragEl);
      clearTimeout(this._dragStartTimer);

      this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
      var ownerDocument = this.el.ownerDocument;
      off(ownerDocument, 'mouseup', this._disableDelayedDrag);
      off(ownerDocument, 'touchend', this._disableDelayedDrag);
      off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
      off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
      off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
      off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(
    /** Event */
    evt,
    /** Touch */
    touch) {
      touch = touch || evt.pointerType == 'touch' && evt;

      if (!this.nativeDraggable || touch) {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._onTouchMove);
        } else if (touch) {
          on(document, 'touchmove', this._onTouchMove);
        } else {
          on(document, 'mousemove', this._onTouchMove);
        }
      } else {
        on(dragEl, 'dragend', this);
        on(rootEl, 'dragstart', this._onDragStart);
      }

      try {
        if (document.selection) {
          // Timeout neccessary for IE9
          _nextTick(function () {
            document.selection.empty();
          });
        } else {
          window.getSelection().removeAllRanges();
        }
      } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {

      awaitingDragStarted = false;

      if (rootEl && dragEl) {
        pluginEvent('dragStarted', this, {
          evt: evt
        });

        if (this.nativeDraggable) {
          on(document, 'dragover', _checkOutsideTargetEl);
        }

        var options = this.options; // Apply effect

        !fallback && toggleClass(dragEl, options.dragClass, false);
        toggleClass(dragEl, options.ghostClass, true);
        Sortable.active = this;
        fallback && this._appendGhost(); // Drag start event

        _dispatchEvent({
          sortable: this,
          name: 'start',
          originalEvent: evt
        });
      } else {
        this._nulling();
      }
    },
    _emulateDragOver: function _emulateDragOver() {
      if (touchEvt) {
        this._lastX = touchEvt.clientX;
        this._lastY = touchEvt.clientY;

        _hideGhostForTarget();

        var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        var parent = target;

        while (target && target.shadowRoot) {
          target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
          if (target === parent) break;
          parent = target;
        }

        dragEl.parentNode[expando]._isOutsideThisEl(target);

        if (parent) {
          do {
            if (parent[expando]) {
              var inserted = void 0;
              inserted = parent[expando]._onDragOver({
                clientX: touchEvt.clientX,
                clientY: touchEvt.clientY,
                target: target,
                rootEl: parent
              });

              if (inserted && !this.options.dragoverBubble) {
                break;
              }
            }

            target = parent; // store last element
          }
          /* jshint boss:true */
          while (parent = parent.parentNode);
        }

        _unhideGhostForTarget();
      }
    },
    _onTouchMove: function _onTouchMove(
    /**TouchEvent*/
    evt) {
      if (tapEvt) {
        var options = this.options,
            fallbackTolerance = options.fallbackTolerance,
            fallbackOffset = options.fallbackOffset,
            touch = evt.touches ? evt.touches[0] : evt,
            ghostMatrix = ghostEl && matrix(ghostEl, true),
            scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
            scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
            relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
            dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
            dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

        if (!Sortable.active && !awaitingDragStarted) {
          if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
            return;
          }

          this._onDragStart(evt, true);
        }

        if (ghostEl) {
          if (ghostMatrix) {
            ghostMatrix.e += dx - (lastDx || 0);
            ghostMatrix.f += dy - (lastDy || 0);
          } else {
            ghostMatrix = {
              a: 1,
              b: 0,
              c: 0,
              d: 1,
              e: dx,
              f: dy
            };
          }

          var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
          css(ghostEl, 'webkitTransform', cssMatrix);
          css(ghostEl, 'mozTransform', cssMatrix);
          css(ghostEl, 'msTransform', cssMatrix);
          css(ghostEl, 'transform', cssMatrix);
          lastDx = dx;
          lastDy = dy;
          touchEvt = touch;
        }

        evt.cancelable && evt.preventDefault();
      }
    },
    _appendGhost: function _appendGhost() {
      // Bug if using scale(): https://stackoverflow.com/questions/2637058
      // Not being adjusted for
      if (!ghostEl) {
        var container = this.options.fallbackOnBody ? document.body : rootEl,
            rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
            options = this.options; // Position absolutely

        if (PositionGhostAbsolutely) {
          // Get relatively positioned parent
          ghostRelativeParent = container;

          while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
            ghostRelativeParent = ghostRelativeParent.parentNode;
          }

          if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
            if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
            rect.top += ghostRelativeParent.scrollTop;
            rect.left += ghostRelativeParent.scrollLeft;
          } else {
            ghostRelativeParent = getWindowScrollingElement();
          }

          ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
        }

        ghostEl = dragEl.cloneNode(true);
        toggleClass(ghostEl, options.ghostClass, false);
        toggleClass(ghostEl, options.fallbackClass, true);
        toggleClass(ghostEl, options.dragClass, true);
        css(ghostEl, 'transition', '');
        css(ghostEl, 'transform', '');
        css(ghostEl, 'box-sizing', 'border-box');
        css(ghostEl, 'margin', 0);
        css(ghostEl, 'top', rect.top);
        css(ghostEl, 'left', rect.left);
        css(ghostEl, 'width', rect.width);
        css(ghostEl, 'height', rect.height);
        css(ghostEl, 'opacity', '0.8');
        css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
        css(ghostEl, 'zIndex', '100000');
        css(ghostEl, 'pointerEvents', 'none');
        Sortable.ghost = ghostEl;
        container.appendChild(ghostEl); // Set transform-origin

        css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
      }
    },
    _onDragStart: function _onDragStart(
    /**Event*/
    evt,
    /**boolean*/
    fallback) {
      var _this = this;

      var dataTransfer = evt.dataTransfer;
      var options = _this.options;
      pluginEvent('dragStart', this, {
        evt: evt
      });

      if (Sortable.eventCanceled) {
        this._onDrop();

        return;
      }

      pluginEvent('setupClone', this);

      if (!Sortable.eventCanceled) {
        cloneEl = clone(dragEl);
        cloneEl.draggable = false;
        cloneEl.style['will-change'] = '';

        this._hideClone();

        toggleClass(cloneEl, this.options.chosenClass, false);
        Sortable.clone = cloneEl;
      } // #1143: IFrame support workaround


      _this.cloneId = _nextTick(function () {
        pluginEvent('clone', _this);
        if (Sortable.eventCanceled) return;

        if (!_this.options.removeCloneOnHide) {
          rootEl.insertBefore(cloneEl, dragEl);
        }

        _this._hideClone();

        _dispatchEvent({
          sortable: _this,
          name: 'clone'
        });
      });
      !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

      if (fallback) {
        ignoreNextClick = true;
        _this._loopId = setInterval(_this._emulateDragOver, 50);
      } else {
        // Undo what was set in _prepareDragStart before drag started
        off(document, 'mouseup', _this._onDrop);
        off(document, 'touchend', _this._onDrop);
        off(document, 'touchcancel', _this._onDrop);

        if (dataTransfer) {
          dataTransfer.effectAllowed = 'move';
          options.setData && options.setData.call(_this, dataTransfer, dragEl);
        }

        on(document, 'drop', _this); // #1276 fix:

        css(dragEl, 'transform', 'translateZ(0)');
      }

      awaitingDragStarted = true;
      _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
      on(document, 'selectstart', _this);
      moved = true;

      if (Safari) {
        css(document.body, 'user-select', 'none');
      }
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(
    /**Event*/
    evt) {
      var el = this.el,
          target = evt.target,
          dragRect,
          targetRect,
          revert,
          options = this.options,
          group = options.group,
          activeSortable = Sortable.active,
          isOwner = activeGroup === group,
          canSort = options.sort,
          fromSortable = putSortable || activeSortable,
          vertical,
          _this = this,
          completedFired = false;

      if (_silent) return;

      function dragOverEvent(name, extra) {
        pluginEvent(name, _this, _objectSpread({
          evt: evt,
          isOwner: isOwner,
          axis: vertical ? 'vertical' : 'horizontal',
          revert: revert,
          dragRect: dragRect,
          targetRect: targetRect,
          canSort: canSort,
          fromSortable: fromSortable,
          target: target,
          completed: completed,
          onMove: function onMove(target, after) {
            return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
          },
          changed: changed
        }, extra));
      } // Capture animation state


      function capture() {
        dragOverEvent('dragOverAnimationCapture');

        _this.captureAnimationState();

        if (_this !== fromSortable) {
          fromSortable.captureAnimationState();
        }
      } // Return invocation when dragEl is inserted (or completed)


      function completed(insertion) {
        dragOverEvent('dragOverCompleted', {
          insertion: insertion
        });

        if (insertion) {
          // Clones must be hidden before folding animation to capture dragRectAbsolute properly
          if (isOwner) {
            activeSortable._hideClone();
          } else {
            activeSortable._showClone(_this);
          }

          if (_this !== fromSortable) {
            // Set ghost class to new sortable's ghost class
            toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
            toggleClass(dragEl, options.ghostClass, true);
          }

          if (putSortable !== _this && _this !== Sortable.active) {
            putSortable = _this;
          } else if (_this === Sortable.active && putSortable) {
            putSortable = null;
          } // Animation


          if (fromSortable === _this) {
            _this._ignoreWhileAnimating = target;
          }

          _this.animateAll(function () {
            dragOverEvent('dragOverAnimationComplete');
            _this._ignoreWhileAnimating = null;
          });

          if (_this !== fromSortable) {
            fromSortable.animateAll();
            fromSortable._ignoreWhileAnimating = null;
          }
        } // Null lastTarget if it is not inside a previously swapped element


        if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
          lastTarget = null;
        } // no bubbling and not fallback


        if (!options.dragoverBubble && !evt.rootEl && target !== document) {
          dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


          !insertion && nearestEmptyInsertDetectEvent(evt);
        }

        !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
        return completedFired = true;
      } // Call when dragEl has been inserted


      function changed() {
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);

        _dispatchEvent({
          sortable: _this,
          name: 'change',
          toEl: el,
          newIndex: newIndex,
          newDraggableIndex: newDraggableIndex,
          originalEvent: evt
        });
      }

      if (evt.preventDefault !== void 0) {
        evt.cancelable && evt.preventDefault();
      }

      target = closest(target, options.draggable, el, true);
      dragOverEvent('dragOver');
      if (Sortable.eventCanceled) return completedFired;

      if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
        return completed(false);
      }

      ignoreNextClick = false;

      if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
      : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
        vertical = this._getDirection(evt, target) === 'vertical';
        dragRect = getRect(dragEl);
        dragOverEvent('dragOverValid');
        if (Sortable.eventCanceled) return completedFired;

        if (revert) {
          parentEl = rootEl; // actualization

          capture();

          this._hideClone();

          dragOverEvent('revert');

          if (!Sortable.eventCanceled) {
            if (nextEl) {
              rootEl.insertBefore(dragEl, nextEl);
            } else {
              rootEl.appendChild(dragEl);
            }
          }

          return completed(true);
        }

        var elLastChild = lastChild(el, options.draggable);

        if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
          // If already at end of list: Do not insert
          if (elLastChild === dragEl) {
            return completed(false);
          } // assign target only if condition is true


          if (elLastChild && el === evt.target) {
            target = elLastChild;
          }

          if (target) {
            targetRect = getRect(target);
          }

          if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
            capture();
            el.appendChild(dragEl);
            parentEl = el; // actualization

            changed();
            return completed(true);
          }
        } else if (target.parentNode === el) {
          targetRect = getRect(target);
          var direction = 0,
              targetBeforeFirstSwap,
              differentLevel = dragEl.parentNode !== el,
              differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
              side1 = vertical ? 'top' : 'left',
              scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
              scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

          if (lastTarget !== target) {
            targetBeforeFirstSwap = targetRect[side1];
            pastFirstInvertThresh = false;
            isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
          }

          direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
          var sibling;

          if (direction !== 0) {
            // Check if target is beside dragEl in respective direction (ignoring hidden elements)
            var dragIndex = index(dragEl);

            do {
              dragIndex -= direction;
              sibling = parentEl.children[dragIndex];
            } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
          } // If dragEl is already beside target: Do not insert


          if (direction === 0 || sibling === target) {
            return completed(false);
          }

          lastTarget = target;
          lastDirection = direction;
          var nextSibling = target.nextElementSibling,
              after = false;
          after = direction === 1;

          var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

          if (moveVector !== false) {
            if (moveVector === 1 || moveVector === -1) {
              after = moveVector === 1;
            }

            _silent = true;
            setTimeout(_unsilent, 30);
            capture();

            if (after && !nextSibling) {
              el.appendChild(dragEl);
            } else {
              target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
            } // Undo chrome's scroll adjustment (has no effect on other browsers)


            if (scrolledPastTop) {
              scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
            }

            parentEl = dragEl.parentNode; // actualization
            // must be done before animation

            if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
              targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
            }

            changed();
            return completed(true);
          }
        }

        if (el.contains(dragEl)) {
          return completed(false);
        }
      }

      return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
      off(document, 'mousemove', this._onTouchMove);
      off(document, 'touchmove', this._onTouchMove);
      off(document, 'pointermove', this._onTouchMove);
      off(document, 'dragover', nearestEmptyInsertDetectEvent);
      off(document, 'mousemove', nearestEmptyInsertDetectEvent);
      off(document, 'touchmove', nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
      var ownerDocument = this.el.ownerDocument;
      off(ownerDocument, 'mouseup', this._onDrop);
      off(ownerDocument, 'touchend', this._onDrop);
      off(ownerDocument, 'pointerup', this._onDrop);
      off(ownerDocument, 'touchcancel', this._onDrop);
      off(document, 'selectstart', this);
    },
    _onDrop: function _onDrop(
    /**Event*/
    evt) {
      var el = this.el,
          options = this.options; // Get the index of the dragged element within its parent

      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      pluginEvent('drop', this, {
        evt: evt
      });
      parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      if (Sortable.eventCanceled) {
        this._nulling();

        return;
      }

      awaitingDragStarted = false;
      isCircumstantialInvert = false;
      pastFirstInvertThresh = false;
      clearInterval(this._loopId);
      clearTimeout(this._dragStartTimer);

      _cancelNextTick(this.cloneId);

      _cancelNextTick(this._dragStartId); // Unbind events


      if (this.nativeDraggable) {
        off(document, 'drop', this);
        off(el, 'dragstart', this._onDragStart);
      }

      this._offMoveEvents();

      this._offUpEvents();

      if (Safari) {
        css(document.body, 'user-select', '');
      }

      css(dragEl, 'transform', '');

      if (evt) {
        if (moved) {
          evt.cancelable && evt.preventDefault();
          !options.dropBubble && evt.stopPropagation();
        }

        ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

        if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
          // Remove clone(s)
          cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
        }

        if (dragEl) {
          if (this.nativeDraggable) {
            off(dragEl, 'dragend', this);
          }

          _disableDraggable(dragEl);

          dragEl.style['will-change'] = ''; // Remove classes
          // ghostClass is added in dragStarted

          if (moved && !awaitingDragStarted) {
            toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
          }

          toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

          _dispatchEvent({
            sortable: this,
            name: 'unchoose',
            toEl: parentEl,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: evt
          });

          if (rootEl !== parentEl) {
            if (newIndex >= 0) {
              // Add event
              _dispatchEvent({
                rootEl: parentEl,
                name: 'add',
                toEl: parentEl,
                fromEl: rootEl,
                originalEvent: evt
              }); // Remove event


              _dispatchEvent({
                sortable: this,
                name: 'remove',
                toEl: parentEl,
                originalEvent: evt
              }); // drag from one list and drop into another


              _dispatchEvent({
                rootEl: parentEl,
                name: 'sort',
                toEl: parentEl,
                fromEl: rootEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }

            putSortable && putSortable.save();
          } else {
            if (newIndex !== oldIndex) {
              if (newIndex >= 0) {
                // drag & drop within the same list
                _dispatchEvent({
                  sortable: this,
                  name: 'update',
                  toEl: parentEl,
                  originalEvent: evt
                });

                _dispatchEvent({
                  sortable: this,
                  name: 'sort',
                  toEl: parentEl,
                  originalEvent: evt
                });
              }
            }
          }

          if (Sortable.active) {
            /* jshint eqnull:true */
            if (newIndex == null || newIndex === -1) {
              newIndex = oldIndex;
              newDraggableIndex = oldDraggableIndex;
            }

            _dispatchEvent({
              sortable: this,
              name: 'end',
              toEl: parentEl,
              originalEvent: evt
            }); // Save sorting


            this.save();
          }
        }
      }

      this._nulling();
    },
    _nulling: function _nulling() {
      pluginEvent('nulling', this);
      rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
      savedInputChecked.forEach(function (el) {
        el.checked = true;
      });
      savedInputChecked.length = lastDx = lastDy = 0;
    },
    handleEvent: function handleEvent(
    /**Event*/
    evt) {
      switch (evt.type) {
        case 'drop':
        case 'dragend':
          this._onDrop(evt);

          break;

        case 'dragenter':
        case 'dragover':
          if (dragEl) {
            this._onDragOver(evt);

            _globalDragOver(evt);
          }

          break;

        case 'selectstart':
          evt.preventDefault();
          break;
      }
    },

    /**
     * Serializes the item into an array of string.
     * @returns {String[]}
     */
    toArray: function toArray() {
      var order = [],
          el,
          children = this.el.children,
          i = 0,
          n = children.length,
          options = this.options;

      for (; i < n; i++) {
        el = children[i];

        if (closest(el, options.draggable, this.el, false)) {
          order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
      }

      return order;
    },

    /**
     * Sorts the elements according to the array.
     * @param  {String[]}  order  order of the items
     */
    sort: function sort(order) {
      var items = {},
          rootEl = this.el;
      this.toArray().forEach(function (id, i) {
        var el = rootEl.children[i];

        if (closest(el, this.options.draggable, rootEl, false)) {
          items[id] = el;
        }
      }, this);
      order.forEach(function (id) {
        if (items[id]) {
          rootEl.removeChild(items[id]);
          rootEl.appendChild(items[id]);
        }
      });
    },

    /**
     * Save the current sorting
     */
    save: function save() {
      var store = this.options.store;
      store && store.set && store.set(this);
    },

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param   {HTMLElement}  el
     * @param   {String}       [selector]  default: `options.draggable`
     * @returns {HTMLElement|null}
     */
    closest: function closest$1(el, selector) {
      return closest(el, selector || this.options.draggable, this.el, false);
    },

    /**
     * Set/get option
     * @param   {string} name
     * @param   {*}      [value]
     * @returns {*}
     */
    option: function option(name, value) {
      var options = this.options;

      if (value === void 0) {
        return options[name];
      } else {
        var modifiedValue = PluginManager.modifyOption(this, name, value);

        if (typeof modifiedValue !== 'undefined') {
          options[name] = modifiedValue;
        } else {
          options[name] = value;
        }

        if (name === 'group') {
          _prepareGroup(options);
        }
      }
    },

    /**
     * Destroy
     */
    destroy: function destroy() {
      pluginEvent('destroy', this);
      var el = this.el;
      el[expando] = null;
      off(el, 'mousedown', this._onTapStart);
      off(el, 'touchstart', this._onTapStart);
      off(el, 'pointerdown', this._onTapStart);

      if (this.nativeDraggable) {
        off(el, 'dragover', this);
        off(el, 'dragenter', this);
      } // Remove draggable attributes


      Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
        el.removeAttribute('draggable');
      });

      this._onDrop();

      this._disableDelayedDragEvents();

      sortables.splice(sortables.indexOf(this.el), 1);
      this.el = el = null;
    },
    _hideClone: function _hideClone() {
      if (!cloneHidden) {
        pluginEvent('hideClone', this);
        if (Sortable.eventCanceled) return;
        css(cloneEl, 'display', 'none');

        if (this.options.removeCloneOnHide && cloneEl.parentNode) {
          cloneEl.parentNode.removeChild(cloneEl);
        }

        cloneHidden = true;
      }
    },
    _showClone: function _showClone(putSortable) {
      if (putSortable.lastPutMode !== 'clone') {
        this._hideClone();

        return;
      }

      if (cloneHidden) {
        pluginEvent('showClone', this);
        if (Sortable.eventCanceled) return; // show clone at dragEl or original position

        if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
          rootEl.insertBefore(cloneEl, dragEl);
        } else if (nextEl) {
          rootEl.insertBefore(cloneEl, nextEl);
        } else {
          rootEl.appendChild(cloneEl);
        }

        if (this.options.group.revertClone) {
          this.animate(dragEl, cloneEl);
        }

        css(cloneEl, 'display', '');
        cloneHidden = false;
      }
    }
  };

  function _globalDragOver(
  /**Event*/
  evt) {
    if (evt.dataTransfer) {
      evt.dataTransfer.dropEffect = 'move';
    }

    evt.cancelable && evt.preventDefault();
  }

  function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt,
        sortable = fromEl[expando],
        onMoveFn = sortable.options.onMove,
        retVal; // Support for new CustomEvent feature

    if (window.CustomEvent && !IE11OrLess && !Edge) {
      evt = new CustomEvent('move', {
        bubbles: true,
        cancelable: true
      });
    } else {
      evt = document.createEvent('Event');
      evt.initEvent('move', true, true);
    }

    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);

    if (onMoveFn) {
      retVal = onMoveFn.call(sortable, evt, originalEvent);
    }

    return retVal;
  }

  function _disableDraggable(el) {
    el.draggable = false;
  }

  function _unsilent() {
    _silent = false;
  }

  function _ghostIsLast(evt, vertical, sortable) {
    var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
    var spacer = 10;
    return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
  }

  function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
        targetLength = vertical ? targetRect.height : targetRect.width,
        targetS1 = vertical ? targetRect.top : targetRect.left,
        targetS2 = vertical ? targetRect.bottom : targetRect.right,
        invert = false;

    if (!invertSwap) {
      // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
      if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
        // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
        // check if past first invert threshold on side opposite of lastDirection
        if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
          // past first invert threshold, do not restrict inverted threshold to dragEl shadow
          pastFirstInvertThresh = true;
        }

        if (!pastFirstInvertThresh) {
          // dragEl shadow (target move distance shadow)
          if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
          : mouseOnAxis > targetS2 - targetMoveDistance) {
            return -lastDirection;
          }
        } else {
          invert = true;
        }
      } else {
        // Regular
        if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
          return _getInsertDirection(target);
        }
      }
    }

    invert = invert || invertSwap;

    if (invert) {
      // Invert of regular
      if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
        return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
      }
    }

    return 0;
  }
  /**
   * Gets the direction dragEl must be swapped relative to target in order to make it
   * seem that dragEl has been "inserted" into that element's position
   * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
   * @return {Number}                   Direction dragEl must be swapped
   */


  function _getInsertDirection(target) {
    if (index(dragEl) < index(target)) {
      return 1;
    } else {
      return -1;
    }
  }
  /**
   * Generate id
   * @param   {HTMLElement} el
   * @returns {String}
   * @private
   */


  function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent,
        i = str.length,
        sum = 0;

    while (i--) {
      sum += str.charCodeAt(i);
    }

    return sum.toString(36);
  }

  function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName('input');
    var idx = inputs.length;

    while (idx--) {
      var el = inputs[idx];
      el.checked && savedInputChecked.push(el);
    }
  }

  function _nextTick(fn) {
    return setTimeout(fn, 0);
  }

  function _cancelNextTick(id) {
    return clearTimeout(id);
  } // Fixed #973:


  if (documentExists) {
    on(document, 'touchmove', function (evt) {
      if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
        evt.preventDefault();
      }
    });
  } // Export utils


  Sortable.utils = {
    on: on,
    off: off,
    css: css,
    find: find,
    is: function is(el, selector) {
      return !!closest(el, selector, el, false);
    },
    extend: extend,
    throttle: throttle,
    closest: closest,
    toggleClass: toggleClass,
    clone: clone,
    index: index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild: getChild
  };
  /**
   * Get the Sortable instance of an element
   * @param  {HTMLElement} element The element
   * @return {Sortable|undefined}         The instance of Sortable
   */

  Sortable.get = function (element) {
    return element[expando];
  };
  /**
   * Mount a plugin to Sortable
   * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
   */


  Sortable.mount = function () {
    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    if (plugins[0].constructor === Array) plugins = plugins[0];
    plugins.forEach(function (plugin) {
      if (!plugin.prototype || !plugin.prototype.constructor) {
        throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
      }

      if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
      PluginManager.mount(plugin);
    });
  };
  /**
   * Create sortable instance
   * @param {HTMLElement}  el
   * @param {Object}      [options]
   */


  Sortable.create = function (el, options) {
    return new Sortable(el, options);
  }; // Export


  Sortable.version = version;

  var autoScrolls = [],
      scrollEl,
      scrollRootEl,
      scrolling = false,
      lastAutoScrollX,
      lastAutoScrollY,
      touchEvt$1,
      pointerElemChangedInterval;

  function AutoScrollPlugin() {
    function AutoScroll() {
      this.defaults = {
        scroll: true,
        scrollSensitivity: 30,
        scrollSpeed: 10,
        bubbleScroll: true
      }; // Bind all private methods

      for (var fn in this) {
        if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
          this[fn] = this[fn].bind(this);
        }
      }
    }

    AutoScroll.prototype = {
      dragStarted: function dragStarted(_ref) {
        var originalEvent = _ref.originalEvent;

        if (this.sortable.nativeDraggable) {
          on(document, 'dragover', this._handleAutoScroll);
        } else {
          if (this.options.supportPointer) {
            on(document, 'pointermove', this._handleFallbackAutoScroll);
          } else if (originalEvent.touches) {
            on(document, 'touchmove', this._handleFallbackAutoScroll);
          } else {
            on(document, 'mousemove', this._handleFallbackAutoScroll);
          }
        }
      },
      dragOverCompleted: function dragOverCompleted(_ref2) {
        var originalEvent = _ref2.originalEvent;

        // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
        if (!this.options.dragOverBubble && !originalEvent.rootEl) {
          this._handleAutoScroll(originalEvent);
        }
      },
      drop: function drop() {
        if (this.sortable.nativeDraggable) {
          off(document, 'dragover', this._handleAutoScroll);
        } else {
          off(document, 'pointermove', this._handleFallbackAutoScroll);
          off(document, 'touchmove', this._handleFallbackAutoScroll);
          off(document, 'mousemove', this._handleFallbackAutoScroll);
        }

        clearPointerElemChangedInterval();
        clearAutoScrolls();
        cancelThrottle();
      },
      nulling: function nulling() {
        touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
        autoScrolls.length = 0;
      },
      _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
        this._handleAutoScroll(evt, true);
      },
      _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
        var _this = this;

        var x = (evt.touches ? evt.touches[0] : evt).clientX,
            y = (evt.touches ? evt.touches[0] : evt).clientY,
            elem = document.elementFromPoint(x, y);
        touchEvt$1 = evt; // IE does not seem to have native autoscroll,
        // Edge's autoscroll seems too conditional,
        // MACOS Safari does not have autoscroll,
        // Firefox and Chrome are good

        if (fallback || Edge || IE11OrLess || Safari) {
          autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

          var ogElemScroller = getParentAutoScrollElement(elem, true);

          if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
            pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

            pointerElemChangedInterval = setInterval(function () {
              var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

              if (newElem !== ogElemScroller) {
                ogElemScroller = newElem;
                clearAutoScrolls();
              }

              autoScroll(evt, _this.options, newElem, fallback);
            }, 10);
            lastAutoScrollX = x;
            lastAutoScrollY = y;
          }
        } else {
          // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
          if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
            clearAutoScrolls();
            return;
          }

          autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
        }
      }
    };
    return _extends(AutoScroll, {
      pluginName: 'scroll',
      initializeByDefault: true
    });
  }

  function clearAutoScrolls() {
    autoScrolls.forEach(function (autoScroll) {
      clearInterval(autoScroll.pid);
    });
    autoScrolls = [];
  }

  function clearPointerElemChangedInterval() {
    clearInterval(pointerElemChangedInterval);
  }

  var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX,
        y = (evt.touches ? evt.touches[0] : evt).clientY,
        sens = options.scrollSensitivity,
        speed = options.scrollSpeed,
        winScroller = getWindowScrollingElement();
    var scrollThisInstance = false,
        scrollCustomFn; // New scroll root, set scrollEl

    if (scrollRootEl !== rootEl) {
      scrollRootEl = rootEl;
      clearAutoScrolls();
      scrollEl = options.scroll;
      scrollCustomFn = options.scrollFn;

      if (scrollEl === true) {
        scrollEl = getParentAutoScrollElement(rootEl, true);
      }
    }

    var layersOut = 0;
    var currentParent = scrollEl;

    do {
      var el = currentParent,
          rect = getRect(el),
          top = rect.top,
          bottom = rect.bottom,
          left = rect.left,
          right = rect.right,
          width = rect.width,
          height = rect.height,
          canScrollX = void 0,
          canScrollY = void 0,
          scrollWidth = el.scrollWidth,
          scrollHeight = el.scrollHeight,
          elCSS = css(el),
          scrollPosX = el.scrollLeft,
          scrollPosY = el.scrollTop;

      if (el === winScroller) {
        canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
        canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
      } else {
        canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
        canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
      }

      var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
      var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

      if (!autoScrolls[layersOut]) {
        for (var i = 0; i <= layersOut; i++) {
          if (!autoScrolls[i]) {
            autoScrolls[i] = {};
          }
        }
      }

      if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
        autoScrolls[layersOut].el = el;
        autoScrolls[layersOut].vx = vx;
        autoScrolls[layersOut].vy = vy;
        clearInterval(autoScrolls[layersOut].pid);

        if (vx != 0 || vy != 0) {
          scrollThisInstance = true;
          /* jshint loopfunc:true */

          autoScrolls[layersOut].pid = setInterval(function () {
            // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
            if (isFallback && this.layer === 0) {
              Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

            }

            var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
            var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

            if (typeof scrollCustomFn === 'function') {
              if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
                return;
              }
            }

            scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
          }.bind({
            layer: layersOut
          }), 24);
        }
      }

      layersOut++;
    } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

    scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
  }, 30);

  var drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent,
        putSortable = _ref.putSortable,
        dragEl = _ref.dragEl,
        activeSortable = _ref.activeSortable,
        dispatchSortableEvent = _ref.dispatchSortableEvent,
        hideGhostForTarget = _ref.hideGhostForTarget,
        unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();

    if (toSortable && !toSortable.el.contains(target)) {
      dispatchSortableEvent('spill');
      this.onSpill({
        dragEl: dragEl,
        putSortable: putSortable
      });
    }
  };

  function Revert() {}

  Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
      var oldDraggableIndex = _ref2.oldDraggableIndex;
      this.startIndex = oldDraggableIndex;
    },
    onSpill: function onSpill(_ref3) {
      var dragEl = _ref3.dragEl,
          putSortable = _ref3.putSortable;
      this.sortable.captureAnimationState();

      if (putSortable) {
        putSortable.captureAnimationState();
      }

      var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

      if (nextSibling) {
        this.sortable.el.insertBefore(dragEl, nextSibling);
      } else {
        this.sortable.el.appendChild(dragEl);
      }

      this.sortable.animateAll();

      if (putSortable) {
        putSortable.animateAll();
      }
    },
    drop: drop
  };

  _extends(Revert, {
    pluginName: 'revertOnSpill'
  });

  function Remove() {}

  Remove.prototype = {
    onSpill: function onSpill(_ref4) {
      var dragEl = _ref4.dragEl,
          putSortable = _ref4.putSortable;
      var parentSortable = putSortable || this.sortable;
      parentSortable.captureAnimationState();
      dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
      parentSortable.animateAll();
    },
    drop: drop
  };

  _extends(Remove, {
    pluginName: 'removeOnSpill'
  });

  var lastSwapEl;

  function SwapPlugin() {
    function Swap() {
      this.defaults = {
        swapClass: 'sortable-swap-highlight'
      };
    }

    Swap.prototype = {
      dragStart: function dragStart(_ref) {
        var dragEl = _ref.dragEl;
        lastSwapEl = dragEl;
      },
      dragOverValid: function dragOverValid(_ref2) {
        var completed = _ref2.completed,
            target = _ref2.target,
            onMove = _ref2.onMove,
            activeSortable = _ref2.activeSortable,
            changed = _ref2.changed,
            cancel = _ref2.cancel;
        if (!activeSortable.options.swap) return;
        var el = this.sortable.el,
            options = this.options;

        if (target && target !== el) {
          var prevSwapEl = lastSwapEl;

          if (onMove(target) !== false) {
            toggleClass(target, options.swapClass, true);
            lastSwapEl = target;
          } else {
            lastSwapEl = null;
          }

          if (prevSwapEl && prevSwapEl !== lastSwapEl) {
            toggleClass(prevSwapEl, options.swapClass, false);
          }
        }

        changed();
        completed(true);
        cancel();
      },
      drop: function drop(_ref3) {
        var activeSortable = _ref3.activeSortable,
            putSortable = _ref3.putSortable,
            dragEl = _ref3.dragEl;
        var toSortable = putSortable || this.sortable;
        var options = this.options;
        lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

        if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
          if (dragEl !== lastSwapEl) {
            toSortable.captureAnimationState();
            if (toSortable !== activeSortable) activeSortable.captureAnimationState();
            swapNodes(dragEl, lastSwapEl);
            toSortable.animateAll();
            if (toSortable !== activeSortable) activeSortable.animateAll();
          }
        }
      },
      nulling: function nulling() {
        lastSwapEl = null;
      }
    };
    return _extends(Swap, {
      pluginName: 'swap',
      eventProperties: function eventProperties() {
        return {
          swapItem: lastSwapEl
        };
      }
    });
  }

  function swapNodes(n1, n2) {
    var p1 = n1.parentNode,
        p2 = n2.parentNode,
        i1,
        i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
    i1 = index(n1);
    i2 = index(n2);

    if (p1.isEqualNode(p2) && i1 < i2) {
      i2++;
    }

    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
  }

  var multiDragElements = [],
      multiDragClones = [],
      lastMultiDragSelect,
      // for selection with modifier key down (SHIFT)
  multiDragSortable,
      initialFolding = false,
      // Initial multi-drag fold when drag started
  folding = false,
      // Folding any other time
  dragStarted = false,
      dragEl$1,
      clonesFromRect,
      clonesHidden;

  function MultiDragPlugin() {
    function MultiDrag(sortable) {
      // Bind all private methods
      for (var fn in this) {
        if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
          this[fn] = this[fn].bind(this);
        }
      }

      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }

      on(document, 'keydown', this._checkKeyDown);
      on(document, 'keyup', this._checkKeyUp);
      this.defaults = {
        selectedClass: 'sortable-selected',
        multiDragKey: null,
        setData: function setData(dataTransfer, dragEl) {
          var data = '';

          if (multiDragElements.length && multiDragSortable === sortable) {
            multiDragElements.forEach(function (multiDragElement, i) {
              data += (!i ? '' : ', ') + multiDragElement.textContent;
            });
          } else {
            data = dragEl.textContent;
          }

          dataTransfer.setData('Text', data);
        }
      };
    }

    MultiDrag.prototype = {
      multiDragKeyDown: false,
      isMultiDrag: false,
      delayStartGlobal: function delayStartGlobal(_ref) {
        var dragged = _ref.dragEl;
        dragEl$1 = dragged;
      },
      delayEnded: function delayEnded() {
        this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
      },
      setupClone: function setupClone(_ref2) {
        var sortable = _ref2.sortable,
            cancel = _ref2.cancel;
        if (!this.isMultiDrag) return;

        for (var i = 0; i < multiDragElements.length; i++) {
          multiDragClones.push(clone(multiDragElements[i]));
          multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
          multiDragClones[i].draggable = false;
          multiDragClones[i].style['will-change'] = '';
          toggleClass(multiDragClones[i], this.options.selectedClass, false);
          multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
        }

        sortable._hideClone();

        cancel();
      },
      clone: function clone(_ref3) {
        var sortable = _ref3.sortable,
            rootEl = _ref3.rootEl,
            dispatchSortableEvent = _ref3.dispatchSortableEvent,
            cancel = _ref3.cancel;
        if (!this.isMultiDrag) return;

        if (!this.options.removeCloneOnHide) {
          if (multiDragElements.length && multiDragSortable === sortable) {
            insertMultiDragClones(true, rootEl);
            dispatchSortableEvent('clone');
            cancel();
          }
        }
      },
      showClone: function showClone(_ref4) {
        var cloneNowShown = _ref4.cloneNowShown,
            rootEl = _ref4.rootEl,
            cancel = _ref4.cancel;
        if (!this.isMultiDrag) return;
        insertMultiDragClones(false, rootEl);
        multiDragClones.forEach(function (clone) {
          css(clone, 'display', '');
        });
        cloneNowShown();
        clonesHidden = false;
        cancel();
      },
      hideClone: function hideClone(_ref5) {
        var _this = this;

        var sortable = _ref5.sortable,
            cloneNowHidden = _ref5.cloneNowHidden,
            cancel = _ref5.cancel;
        if (!this.isMultiDrag) return;
        multiDragClones.forEach(function (clone) {
          css(clone, 'display', 'none');

          if (_this.options.removeCloneOnHide && clone.parentNode) {
            clone.parentNode.removeChild(clone);
          }
        });
        cloneNowHidden();
        clonesHidden = true;
        cancel();
      },
      dragStartGlobal: function dragStartGlobal(_ref6) {
        var sortable = _ref6.sortable;

        if (!this.isMultiDrag && multiDragSortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
        }

        multiDragElements.forEach(function (multiDragElement) {
          multiDragElement.sortableIndex = index(multiDragElement);
        }); // Sort multi-drag elements

        multiDragElements = multiDragElements.sort(function (a, b) {
          return a.sortableIndex - b.sortableIndex;
        });
        dragStarted = true;
      },
      dragStarted: function dragStarted(_ref7) {
        var _this2 = this;

        var sortable = _ref7.sortable;
        if (!this.isMultiDrag) return;

        if (this.options.sort) {
          // Capture rects,
          // hide multi drag elements (by positioning them absolute),
          // set multi drag elements rects to dragRect,
          // show multi drag elements,
          // animate to rects,
          // unset rects & remove from DOM
          sortable.captureAnimationState();

          if (this.options.animation) {
            multiDragElements.forEach(function (multiDragElement) {
              if (multiDragElement === dragEl$1) return;
              css(multiDragElement, 'position', 'absolute');
            });
            var dragRect = getRect(dragEl$1, false, true, true);
            multiDragElements.forEach(function (multiDragElement) {
              if (multiDragElement === dragEl$1) return;
              setRect(multiDragElement, dragRect);
            });
            folding = true;
            initialFolding = true;
          }
        }

        sortable.animateAll(function () {
          folding = false;
          initialFolding = false;

          if (_this2.options.animation) {
            multiDragElements.forEach(function (multiDragElement) {
              unsetRect(multiDragElement);
            });
          } // Remove all auxiliary multidrag items from el, if sorting enabled


          if (_this2.options.sort) {
            removeMultiDragElements();
          }
        });
      },
      dragOver: function dragOver(_ref8) {
        var target = _ref8.target,
            completed = _ref8.completed,
            cancel = _ref8.cancel;

        if (folding && ~multiDragElements.indexOf(target)) {
          completed(false);
          cancel();
        }
      },
      revert: function revert(_ref9) {
        var fromSortable = _ref9.fromSortable,
            rootEl = _ref9.rootEl,
            sortable = _ref9.sortable,
            dragRect = _ref9.dragRect;

        if (multiDragElements.length > 1) {
          // Setup unfold animation
          multiDragElements.forEach(function (multiDragElement) {
            sortable.addAnimationState({
              target: multiDragElement,
              rect: folding ? getRect(multiDragElement) : dragRect
            });
            unsetRect(multiDragElement);
            multiDragElement.fromRect = dragRect;
            fromSortable.removeAnimationState(multiDragElement);
          });
          folding = false;
          insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
        }
      },
      dragOverCompleted: function dragOverCompleted(_ref10) {
        var sortable = _ref10.sortable,
            isOwner = _ref10.isOwner,
            insertion = _ref10.insertion,
            activeSortable = _ref10.activeSortable,
            parentEl = _ref10.parentEl,
            putSortable = _ref10.putSortable;
        var options = this.options;

        if (insertion) {
          // Clones must be hidden before folding animation to capture dragRectAbsolute properly
          if (isOwner) {
            activeSortable._hideClone();
          }

          initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

          if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
            // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
            var dragRectAbsolute = getRect(dragEl$1, false, true, true);
            multiDragElements.forEach(function (multiDragElement) {
              if (multiDragElement === dragEl$1) return;
              setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
              // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

              parentEl.appendChild(multiDragElement);
            });
            folding = true;
          } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


          if (!isOwner) {
            // Only remove if not folding (folding will remove them anyways)
            if (!folding) {
              removeMultiDragElements();
            }

            if (multiDragElements.length > 1) {
              var clonesHiddenBefore = clonesHidden;

              activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


              if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
                multiDragClones.forEach(function (clone) {
                  activeSortable.addAnimationState({
                    target: clone,
                    rect: clonesFromRect
                  });
                  clone.fromRect = clonesFromRect;
                  clone.thisAnimationDuration = null;
                });
              }
            } else {
              activeSortable._showClone(sortable);
            }
          }
        }
      },
      dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
        var dragRect = _ref11.dragRect,
            isOwner = _ref11.isOwner,
            activeSortable = _ref11.activeSortable;
        multiDragElements.forEach(function (multiDragElement) {
          multiDragElement.thisAnimationDuration = null;
        });

        if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
          clonesFromRect = _extends({}, dragRect);
          var dragMatrix = matrix(dragEl$1, true);
          clonesFromRect.top -= dragMatrix.f;
          clonesFromRect.left -= dragMatrix.e;
        }
      },
      dragOverAnimationComplete: function dragOverAnimationComplete() {
        if (folding) {
          folding = false;
          removeMultiDragElements();
        }
      },
      drop: function drop(_ref12) {
        var evt = _ref12.originalEvent,
            rootEl = _ref12.rootEl,
            parentEl = _ref12.parentEl,
            sortable = _ref12.sortable,
            dispatchSortableEvent = _ref12.dispatchSortableEvent,
            oldIndex = _ref12.oldIndex,
            putSortable = _ref12.putSortable;
        var toSortable = putSortable || this.sortable;
        if (!evt) return;
        var options = this.options,
            children = parentEl.children; // Multi-drag selection

        if (!dragStarted) {
          if (options.multiDragKey && !this.multiDragKeyDown) {
            this._deselectMultiDrag();
          }

          toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

          if (!~multiDragElements.indexOf(dragEl$1)) {
            multiDragElements.push(dragEl$1);
            dispatchEvent({
              sortable: sortable,
              rootEl: rootEl,
              name: 'select',
              targetEl: dragEl$1,
              originalEvt: evt
            }); // Modifier activated, select from last to dragEl

            if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
              var lastIndex = index(lastMultiDragSelect),
                  currentIndex = index(dragEl$1);

              if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                // (but previous selection existed)
                var n, i;

                if (currentIndex > lastIndex) {
                  i = lastIndex;
                  n = currentIndex;
                } else {
                  i = currentIndex;
                  n = lastIndex + 1;
                }

                for (; i < n; i++) {
                  if (~multiDragElements.indexOf(children[i])) continue;
                  toggleClass(children[i], options.selectedClass, true);
                  multiDragElements.push(children[i]);
                  dispatchEvent({
                    sortable: sortable,
                    rootEl: rootEl,
                    name: 'select',
                    targetEl: children[i],
                    originalEvt: evt
                  });
                }
              }
            } else {
              lastMultiDragSelect = dragEl$1;
            }

            multiDragSortable = toSortable;
          } else {
            multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
            lastMultiDragSelect = null;
            dispatchEvent({
              sortable: sortable,
              rootEl: rootEl,
              name: 'deselect',
              targetEl: dragEl$1,
              originalEvt: evt
            });
          }
        } // Multi-drag drop


        if (dragStarted && this.isMultiDrag) {
          // Do not "unfold" after around dragEl if reverted
          if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
            var dragRect = getRect(dragEl$1),
                multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
            if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
            toSortable.captureAnimationState();

            if (!initialFolding) {
              if (options.animation) {
                dragEl$1.fromRect = dragRect;
                multiDragElements.forEach(function (multiDragElement) {
                  multiDragElement.thisAnimationDuration = null;

                  if (multiDragElement !== dragEl$1) {
                    var rect = folding ? getRect(multiDragElement) : dragRect;
                    multiDragElement.fromRect = rect; // Prepare unfold animation

                    toSortable.addAnimationState({
                      target: multiDragElement,
                      rect: rect
                    });
                  }
                });
              } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
              // properly they must all be removed


              removeMultiDragElements();
              multiDragElements.forEach(function (multiDragElement) {
                if (children[multiDragIndex]) {
                  parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                } else {
                  parentEl.appendChild(multiDragElement);
                }

                multiDragIndex++;
              }); // If initial folding is done, the elements may have changed position because they are now
              // unfolding around dragEl, even though dragEl may not have his index changed, so update event
              // must be fired here as Sortable will not.

              if (oldIndex === index(dragEl$1)) {
                var update = false;
                multiDragElements.forEach(function (multiDragElement) {
                  if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                    update = true;
                    return;
                  }
                });

                if (update) {
                  dispatchSortableEvent('update');
                }
              }
            } // Must be done after capturing individual rects (scroll bar)


            multiDragElements.forEach(function (multiDragElement) {
              unsetRect(multiDragElement);
            });
            toSortable.animateAll();
          }

          multiDragSortable = toSortable;
        } // Remove clones if necessary


        if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
          multiDragClones.forEach(function (clone) {
            clone.parentNode && clone.parentNode.removeChild(clone);
          });
        }
      },
      nullingGlobal: function nullingGlobal() {
        this.isMultiDrag = dragStarted = false;
        multiDragClones.length = 0;
      },
      destroyGlobal: function destroyGlobal() {
        this._deselectMultiDrag();

        off(document, 'pointerup', this._deselectMultiDrag);
        off(document, 'mouseup', this._deselectMultiDrag);
        off(document, 'touchend', this._deselectMultiDrag);
        off(document, 'keydown', this._checkKeyDown);
        off(document, 'keyup', this._checkKeyUp);
      },
      _deselectMultiDrag: function _deselectMultiDrag(evt) {
        if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

        if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

        if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

        if (evt && evt.button !== 0) return;

        while (multiDragElements.length) {
          var el = multiDragElements[0];
          toggleClass(el, this.options.selectedClass, false);
          multiDragElements.shift();
          dispatchEvent({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: 'deselect',
            targetEl: el,
            originalEvt: evt
          });
        }
      },
      _checkKeyDown: function _checkKeyDown(evt) {
        if (evt.key === this.options.multiDragKey) {
          this.multiDragKeyDown = true;
        }
      },
      _checkKeyUp: function _checkKeyUp(evt) {
        if (evt.key === this.options.multiDragKey) {
          this.multiDragKeyDown = false;
        }
      }
    };
    return _extends(MultiDrag, {
      // Static methods & properties
      pluginName: 'multiDrag',
      utils: {
        /**
         * Selects the provided multi-drag item
         * @param  {HTMLElement} el    The element to be selected
         */
        select: function select(el) {
          var sortable = el.parentNode[expando];
          if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

          if (multiDragSortable && multiDragSortable !== sortable) {
            multiDragSortable.multiDrag._deselectMultiDrag();

            multiDragSortable = sortable;
          }

          toggleClass(el, sortable.options.selectedClass, true);
          multiDragElements.push(el);
        },

        /**
         * Deselects the provided multi-drag item
         * @param  {HTMLElement} el    The element to be deselected
         */
        deselect: function deselect(el) {
          var sortable = el.parentNode[expando],
              index = multiDragElements.indexOf(el);
          if (!sortable || !sortable.options.multiDrag || !~index) return;
          toggleClass(el, sortable.options.selectedClass, false);
          multiDragElements.splice(index, 1);
        }
      },
      eventProperties: function eventProperties() {
        var _this3 = this;

        var oldIndicies = [],
            newIndicies = [];
        multiDragElements.forEach(function (multiDragElement) {
          oldIndicies.push({
            multiDragElement: multiDragElement,
            index: multiDragElement.sortableIndex
          }); // multiDragElements will already be sorted if folding

          var newIndex;

          if (folding && multiDragElement !== dragEl$1) {
            newIndex = -1;
          } else if (folding) {
            newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
          } else {
            newIndex = index(multiDragElement);
          }

          newIndicies.push({
            multiDragElement: multiDragElement,
            index: newIndex
          });
        });
        return {
          items: _toConsumableArray(multiDragElements),
          clones: [].concat(multiDragClones),
          oldIndicies: oldIndicies,
          newIndicies: newIndicies
        };
      },
      optionListeners: {
        multiDragKey: function multiDragKey(key) {
          key = key.toLowerCase();

          if (key === 'ctrl') {
            key = 'Control';
          } else if (key.length > 1) {
            key = key.charAt(0).toUpperCase() + key.substr(1);
          }

          return key;
        }
      }
    });
  }

  function insertMultiDragElements(clonesInserted, rootEl) {
    multiDragElements.forEach(function (multiDragElement, i) {
      var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

      if (target) {
        rootEl.insertBefore(multiDragElement, target);
      } else {
        rootEl.appendChild(multiDragElement);
      }
    });
  }
  /**
   * Insert multi-drag clones
   * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
   * @param  {HTMLElement} rootEl
   */


  function insertMultiDragClones(elementsInserted, rootEl) {
    multiDragClones.forEach(function (clone, i) {
      var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

      if (target) {
        rootEl.insertBefore(clone, target);
      } else {
        rootEl.appendChild(clone);
      }
    });
  }

  function removeMultiDragElements() {
    multiDragElements.forEach(function (multiDragElement) {
      if (multiDragElement === dragEl$1) return;
      multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
  }

  Sortable.mount(new AutoScrollPlugin());
  Sortable.mount(Remove, Revert);

  Sortable.mount(new SwapPlugin());
  Sortable.mount(new MultiDragPlugin());

  return Sortable;

}));

;/*!
 * Chart.js v2.9.3
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Chart=e()}(this,(function(){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function t(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},i=e((function(t){var e={};for(var i in n)n.hasOwnProperty(i)&&(e[n[i]]=i);var a=t.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var r in a)if(a.hasOwnProperty(r)){if(!("channels"in a[r]))throw new Error("missing channels property: "+r);if(!("labels"in a[r]))throw new Error("missing channel labels property: "+r);if(a[r].labels.length!==a[r].channels)throw new Error("channel and label counts mismatch: "+r);var o=a[r].channels,s=a[r].labels;delete a[r].channels,delete a[r].labels,Object.defineProperty(a[r],"channels",{value:o}),Object.defineProperty(a[r],"labels",{value:s})}a.rgb.hsl=function(t){var e,n,i=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(i,a,r),s=Math.max(i,a,r),l=s-o;return s===o?e=0:i===s?e=(a-r)/l:a===s?e=2+(r-i)/l:r===s&&(e=4+(i-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),n=(o+s)/2,[e,100*(s===o?0:n<=.5?l/(s+o):l/(2-s-o)),100*n]},a.rgb.hsv=function(t){var e,n,i,a,r,o=t[0]/255,s=t[1]/255,l=t[2]/255,u=Math.max(o,s,l),d=u-Math.min(o,s,l),h=function(t){return(u-t)/6/d+.5};return 0===d?a=r=0:(r=d/u,e=h(o),n=h(s),i=h(l),o===u?a=i-n:s===u?a=1/3+e-i:l===u&&(a=2/3+n-e),a<0?a+=1:a>1&&(a-=1)),[360*a,100*r,100*u]},a.rgb.hwb=function(t){var e=t[0],n=t[1],i=t[2];return[a.rgb.hsl(t)[0],100*(1/255*Math.min(e,Math.min(n,i))),100*(i=1-1/255*Math.max(e,Math.max(n,i)))]},a.rgb.cmyk=function(t){var e,n=t[0]/255,i=t[1]/255,a=t[2]/255;return[100*((1-n-(e=Math.min(1-n,1-i,1-a)))/(1-e)||0),100*((1-i-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]},a.rgb.keyword=function(t){var i=e[t];if(i)return i;var a,r,o,s=1/0;for(var l in n)if(n.hasOwnProperty(l)){var u=n[l],d=(r=t,o=u,Math.pow(r[0]-o[0],2)+Math.pow(r[1]-o[1],2)+Math.pow(r[2]-o[2],2));d<s&&(s=d,a=l)}return a},a.keyword.rgb=function(t){return n[t]},a.rgb.xyz=function(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)),100*(.2126*e+.7152*n+.0722*i),100*(.0193*e+.1192*n+.9505*i)]},a.rgb.lab=function(t){var e=a.rgb.xyz(t),n=e[0],i=e[1],r=e[2];return i/=100,r/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(n-i),200*(i-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},a.hsl.rgb=function(t){var e,n,i,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0===s)return[r=255*l,r,r];e=2*l-(n=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(i=o+1/3*-(u-1))<0&&i++,i>1&&i--,r=6*i<1?e+6*(n-e)*i:2*i<1?n:3*i<2?e+(n-e)*(2/3-i)*6:e,a[u]=255*r;return a},a.hsl.hsv=function(t){var e=t[0],n=t[1]/100,i=t[2]/100,a=n,r=Math.max(i,.01);return n*=(i*=2)<=1?i:2-i,a*=r<=1?r:2-r,[e,100*(0===i?2*a/(r+a):2*n/(i+n)),100*((i+n)/2)]},a.hsv.rgb=function(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*i*(1-n),s=255*i*(1-n*r),l=255*i*(1-n*(1-r));switch(i*=255,a){case 0:return[i,l,o];case 1:return[s,i,o];case 2:return[o,i,l];case 3:return[o,s,i];case 4:return[l,o,i];case 5:return[i,o,s]}},a.hsv.hsl=function(t){var e,n,i,a=t[0],r=t[1]/100,o=t[2]/100,s=Math.max(o,.01);return i=(2-r)*o,n=r*s,[a,100*(n=(n/=(e=(2-r)*s)<=1?e:2-e)||0),100*(i/=2)]},a.hwb.rgb=function(t){var e,n,i,a,r,o,s,l=t[0]/360,u=t[1]/100,d=t[2]/100,h=u+d;switch(h>1&&(u/=h,d/=h),i=6*l-(e=Math.floor(6*l)),0!=(1&e)&&(i=1-i),a=u+i*((n=1-d)-u),e){default:case 6:case 0:r=n,o=a,s=u;break;case 1:r=a,o=n,s=u;break;case 2:r=u,o=n,s=a;break;case 3:r=u,o=a,s=n;break;case 4:r=a,o=u,s=n;break;case 5:r=n,o=u,s=a}return[255*r,255*o,255*s]},a.cmyk.rgb=function(t){var e=t[0]/100,n=t[1]/100,i=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a))]},a.xyz.rgb=function(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100;return n=-.9689*a+1.8758*r+.0415*o,i=.0557*a+-.204*r+1.057*o,e=(e=3.2406*a+-1.5372*r+-.4986*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:12.92*i,[255*(e=Math.min(Math.max(0,e),1)),255*(n=Math.min(Math.max(0,n),1)),255*(i=Math.min(Math.max(0,i),1))]},a.xyz.lab=function(t){var e=t[0],n=t[1],i=t[2];return n/=100,i/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(e-n),200*(n-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]},a.lab.xyz=function(t){var e,n,i,a=t[0];e=t[1]/500+(n=(a+16)/116),i=n-t[2]/200;var r=Math.pow(n,3),o=Math.pow(e,3),s=Math.pow(i,3);return n=r>.008856?r:(n-16/116)/7.787,e=o>.008856?o:(e-16/116)/7.787,i=s>.008856?s:(i-16/116)/7.787,[e*=95.047,n*=100,i*=108.883]},a.lab.lch=function(t){var e,n=t[0],i=t[1],a=t[2];return(e=360*Math.atan2(a,i)/2/Math.PI)<0&&(e+=360),[n,Math.sqrt(i*i+a*a),e]},a.lch.lab=function(t){var e,n=t[0],i=t[1];return e=t[2]/360*2*Math.PI,[n,i*Math.cos(e),i*Math.sin(e)]},a.rgb.ansi16=function(t){var e=t[0],n=t[1],i=t[2],r=1 in arguments?arguments[1]:a.rgb.hsv(t)[2];if(0===(r=Math.round(r/50)))return 30;var o=30+(Math.round(i/255)<<2|Math.round(n/255)<<1|Math.round(e/255));return 2===r&&(o+=60),o},a.hsv.ansi16=function(t){return a.rgb.ansi16(a.hsv.rgb(t),t[2])},a.rgb.ansi256=function(t){var e=t[0],n=t[1],i=t[2];return e===n&&n===i?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(i/255*5)},a.ansi16.rgb=function(t){var e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),[e=e/10.5*255,e,e];var n=.5*(1+~~(t>50));return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},a.ansi256.rgb=function(t){if(t>=232){var e=10*(t-232)+8;return[e,e,e]}var n;return t-=16,[Math.floor(t/36)/5*255,Math.floor((n=t%36)/6)/5*255,n%6/5*255]},a.rgb.hex=function(t){var e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},a.hex.rgb=function(t){var e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var n=e[0];3===e[0].length&&(n=n.split("").map((function(t){return t+t})).join(""));var i=parseInt(n,16);return[i>>16&255,i>>8&255,255&i]},a.rgb.hcg=function(t){var e,n=t[0]/255,i=t[1]/255,a=t[2]/255,r=Math.max(Math.max(n,i),a),o=Math.min(Math.min(n,i),a),s=r-o;return e=s<=0?0:r===n?(i-a)/s%6:r===i?2+(a-n)/s:4+(n-i)/s+4,e/=6,[360*(e%=1),100*s,100*(s<1?o/(1-s):0)]},a.hsl.hcg=function(t){var e=t[1]/100,n=t[2]/100,i=1,a=0;return(i=n<.5?2*e*n:2*e*(1-n))<1&&(a=(n-.5*i)/(1-i)),[t[0],100*i,100*a]},a.hsv.hcg=function(t){var e=t[1]/100,n=t[2]/100,i=e*n,a=0;return i<1&&(a=(n-i)/(1-i)),[t[0],100*i,100*a]},a.hcg.rgb=function(t){var e=t[0]/360,n=t[1]/100,i=t[2]/100;if(0===n)return[255*i,255*i,255*i];var a,r=[0,0,0],o=e%1*6,s=o%1,l=1-s;switch(Math.floor(o)){case 0:r[0]=1,r[1]=s,r[2]=0;break;case 1:r[0]=l,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=s;break;case 3:r[0]=0,r[1]=l,r[2]=1;break;case 4:r[0]=s,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=l}return a=(1-n)*i,[255*(n*r[0]+a),255*(n*r[1]+a),255*(n*r[2]+a)]},a.hcg.hsv=function(t){var e=t[1]/100,n=e+t[2]/100*(1-e),i=0;return n>0&&(i=e/n),[t[0],100*i,100*n]},a.hcg.hsl=function(t){var e=t[1]/100,n=t[2]/100*(1-e)+.5*e,i=0;return n>0&&n<.5?i=e/(2*n):n>=.5&&n<1&&(i=e/(2*(1-n))),[t[0],100*i,100*n]},a.hcg.hwb=function(t){var e=t[1]/100,n=e+t[2]/100*(1-e);return[t[0],100*(n-e),100*(1-n)]},a.hwb.hcg=function(t){var e=t[1]/100,n=1-t[2]/100,i=n-e,a=0;return i<1&&(a=(n-i)/(1-i)),[t[0],100*i,100*a]},a.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},a.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},a.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},a.gray.hsl=a.gray.hsv=function(t){return[0,0,t[0]]},a.gray.hwb=function(t){return[0,100,t[0]]},a.gray.cmyk=function(t){return[0,0,0,t[0]]},a.gray.lab=function(t){return[t[0],0,0]},a.gray.hex=function(t){var e=255&Math.round(t[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(n.length)+n},a.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}}));i.rgb,i.hsl,i.hsv,i.hwb,i.cmyk,i.xyz,i.lab,i.lch,i.hex,i.keyword,i.ansi16,i.ansi256,i.hcg,i.apple,i.gray;function a(t){var e=function(){for(var t={},e=Object.keys(i),n=e.length,a=0;a<n;a++)t[e[a]]={distance:-1,parent:null};return t}(),n=[t];for(e[t].distance=0;n.length;)for(var a=n.pop(),r=Object.keys(i[a]),o=r.length,s=0;s<o;s++){var l=r[s],u=e[l];-1===u.distance&&(u.distance=e[a].distance+1,u.parent=a,n.unshift(l))}return e}function r(t,e){return function(n){return e(t(n))}}function o(t,e){for(var n=[e[t].parent,t],a=i[e[t].parent][t],o=e[t].parent;e[o].parent;)n.unshift(e[o].parent),a=r(i[e[o].parent][o],a),o=e[o].parent;return a.conversion=n,a}var s={};Object.keys(i).forEach((function(t){s[t]={},Object.defineProperty(s[t],"channels",{value:i[t].channels}),Object.defineProperty(s[t],"labels",{value:i[t].labels});var e=function(t){for(var e=a(t),n={},i=Object.keys(e),r=i.length,s=0;s<r;s++){var l=i[s];null!==e[l].parent&&(n[l]=o(l,e))}return n}(t);Object.keys(e).forEach((function(n){var i=e[n];s[t][n]=function(t){var e=function(e){if(null==e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var n=t(e);if("object"==typeof n)for(var i=n.length,a=0;a<i;a++)n[a]=Math.round(n[a]);return n};return"conversion"in t&&(e.conversion=t.conversion),e}(i),s[t][n].raw=function(t){var e=function(e){return null==e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(i)}))}));var l=s,u={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},d={getRgba:h,getHsla:c,getRgb:function(t){var e=h(t);return e&&e.slice(0,3)},getHsl:function(t){var e=c(t);return e&&e.slice(0,3)},getHwb:f,getAlpha:function(t){var e=h(t);if(e)return e[3];if(e=c(t))return e[3];if(e=f(t))return e[3]},hexString:function(t,e){e=void 0!==e&&3===t.length?e:t[3];return"#"+b(t[0])+b(t[1])+b(t[2])+(e>=0&&e<1?b(Math.round(255*e)):"")},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return g(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:g,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return m(t,e);var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+n+"%, "+i+"%, "+a+"%)"},percentaString:m,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return p(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:p,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return y[t.slice(0,3)]}};function h(t){if(t){var e=[0,0,0],n=1,i=t.match(/^#([a-fA-F0-9]{3,4})$/i),a="";if(i){a=(i=i[1])[3];for(var r=0;r<e.length;r++)e[r]=parseInt(i[r]+i[r],16);a&&(n=Math.round(parseInt(a+a,16)/255*100)/100)}else if(i=t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)){a=i[2],i=i[1];for(r=0;r<e.length;r++)e[r]=parseInt(i.slice(2*r,2*r+2),16);a&&(n=Math.round(parseInt(a,16)/255*100)/100)}else if(i=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=parseInt(i[r+1]);n=parseFloat(i[4])}else if(i=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=Math.round(2.55*parseFloat(i[r+1]));n=parseFloat(i[4])}else if(i=t.match(/(\w+)/)){if("transparent"==i[1])return[0,0,0,0];if(!(e=u[i[1]]))return}for(r=0;r<e.length;r++)e[r]=v(e[r],0,255);return n=n||0==n?v(n,0,1):1,e[3]=n,e}}function c(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[v(parseInt(e[1]),0,360),v(parseFloat(e[2]),0,100),v(parseFloat(e[3]),0,100),v(isNaN(n)?1:n,0,1)]}}}function f(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[v(parseInt(e[1]),0,360),v(parseFloat(e[2]),0,100),v(parseFloat(e[3]),0,100),v(isNaN(n)?1:n,0,1)]}}}function g(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function m(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function v(t,e,n){return Math.min(Math.max(e,t),n)}function b(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var y={};for(var x in u)y[u[x]]=x;var _=function(t){return t instanceof _?t:this instanceof _?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=d.getRgba(t))?this.setValues("rgb",e):(e=d.getHsla(t))?this.setValues("hsl",e):(e=d.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new _(t);var e};_.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return d.hexString(this.values.rgb)},rgbString:function(){return d.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return d.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return d.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return d.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return d.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return d.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return d.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=t,i=void 0===e?.5:e,a=2*i-1,r=this.alpha()-n.alpha(),o=((a*r==-1?a:(a+r)/(1+a*r))+1)/2,s=1-o;return this.rgb(o*this.red()+s*n.red(),o*this.green()+s*n.green(),o*this.blue()+s*n.blue()).alpha(this.alpha()*i+n.alpha()*(1-i))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new _,i=this.values,a=n.values;for(var r in i)i.hasOwnProperty(r)&&(t=i[r],"[object Array]"===(e={}.toString.call(t))?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return n}},_.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},_.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},_.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},_.prototype.setValues=function(t,e){var n,i,a=this.values,r=this.spaces,o=this.maxes,s=1;if(this.valid=!0,"alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];s=e.a}else if(void 0!==e[r[t][0]]){var u=r[t];for(n=0;n<t.length;n++)a[t][n]=e[u[n]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;for(n=0;n<t.length;n++)i=Math.max(0,Math.min(o[t][n],a[t][n])),a[t][n]=Math.round(i);for(var d in r)d!==t&&(a[d]=l[t][d](a[t]));return!0},_.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},_.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=_);var w,k=_,M={noop:function(){},uid:(w=0,function(){return w++}),isNullOrUndef:function(t){return null==t},isArray:function(t){if(Array.isArray&&Array.isArray(t))return!0;var e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},isFinite:function(t){return("number"==typeof t||t instanceof Number)&&isFinite(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,n){return M.valueOrDefault(M.isArray(t)?t[e]:t,n)},callback:function(t,e,n){if(t&&"function"==typeof t.call)return t.apply(n,e)},each:function(t,e,n,i){var a,r,o;if(M.isArray(t))if(r=t.length,i)for(a=r-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;a<r;a++)e.call(n,t[a],a);else if(M.isObject(t))for(r=(o=Object.keys(t)).length,a=0;a<r;a++)e.call(n,t[o[a]],o[a])},arrayEquals:function(t,e){var n,i,a,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(a=t[n],r=e[n],a instanceof Array&&r instanceof Array){if(!M.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},clone:function(t){if(M.isArray(t))return t.map(M.clone);if(M.isObject(t)){for(var e={},n=Object.keys(t),i=n.length,a=0;a<i;++a)e[n[a]]=M.clone(t[n[a]]);return e}return t},_merger:function(t,e,n,i){var a=e[t],r=n[t];M.isObject(a)&&M.isObject(r)?M.merge(a,r,i):e[t]=M.clone(r)},_mergerIf:function(t,e,n){var i=e[t],a=n[t];M.isObject(i)&&M.isObject(a)?M.mergeIf(i,a):e.hasOwnProperty(t)||(e[t]=M.clone(a))},merge:function(t,e,n){var i,a,r,o,s,l=M.isArray(e)?e:[e],u=l.length;if(!M.isObject(t))return t;for(i=(n=n||{}).merger||M._merger,a=0;a<u;++a)if(e=l[a],M.isObject(e))for(s=0,o=(r=Object.keys(e)).length;s<o;++s)i(r[s],t,e,n);return t},mergeIf:function(t,e){return M.merge(t,e,{merger:M._mergerIf})},extend:Object.assign||function(t){return M.merge(t,[].slice.call(arguments,1),{merger:function(t,e,n){e[t]=n[t]}})},inherits:function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=M.inherits,t&&M.extend(n.prototype,t),n.__super__=e.prototype,n},_deprecated:function(t,e,n,i){void 0!==e&&console.warn(t+': "'+n+'" is deprecated. Please use "'+i+'" instead')}},S=M;M.callCallback=M.callback,M.indexOf=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},M.getValueOrDefault=M.valueOrDefault,M.getValueAtIndexOrDefault=M.valueAtIndexOrDefault;var D={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2==(t/=.5)?1:(n||(n=.45),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-D.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*D.easeInBounce(2*t):.5*D.easeOutBounce(2*t-1)+.5}},C={effects:D};S.easingEffects=D;var P=Math.PI,T=P/180,O=2*P,A=P/2,F=P/4,I=2*P/3,L={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,n,i,a,r){if(r){var o=Math.min(r,a/2,i/2),s=e+o,l=n+o,u=e+i-o,d=n+a-o;t.moveTo(e,l),s<u&&l<d?(t.arc(s,l,o,-P,-A),t.arc(u,l,o,-A,0),t.arc(u,d,o,0,A),t.arc(s,d,o,A,P)):s<u?(t.moveTo(s,n),t.arc(u,l,o,-A,A),t.arc(s,l,o,A,P+A)):l<d?(t.arc(s,l,o,-P,0),t.arc(s,d,o,0,P)):t.arc(s,l,o,-P,P),t.closePath(),t.moveTo(e,n)}else t.rect(e,n,i,a)},drawPoint:function(t,e,n,i,a,r){var o,s,l,u,d,h=(r||0)*T;if(e&&"object"==typeof e&&("[object HTMLImageElement]"===(o=e.toString())||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(i,a),t.rotate(h),t.drawImage(e,-e.width/2,-e.height/2,e.width,e.height),void t.restore();if(!(isNaN(n)||n<=0)){switch(t.beginPath(),e){default:t.arc(i,a,n,0,O),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(h)*n,a-Math.cos(h)*n),h+=I,t.lineTo(i+Math.sin(h)*n,a-Math.cos(h)*n),h+=I,t.lineTo(i+Math.sin(h)*n,a-Math.cos(h)*n),t.closePath();break;case"rectRounded":u=n-(d=.516*n),s=Math.cos(h+F)*u,l=Math.sin(h+F)*u,t.arc(i-s,a-l,d,h-P,h-A),t.arc(i+l,a-s,d,h-A,h),t.arc(i+s,a+l,d,h,h+A),t.arc(i-l,a+s,d,h+A,h+P),t.closePath();break;case"rect":if(!r){u=Math.SQRT1_2*n,t.rect(i-u,a-u,2*u,2*u);break}h+=F;case"rectRot":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+l,a-s),t.lineTo(i+s,a+l),t.lineTo(i-l,a+s),t.closePath();break;case"crossRot":h+=F;case"cross":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s);break;case"star":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s),h+=F,s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s);break;case"line":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l);break;case"dash":t.moveTo(i,a),t.lineTo(i+Math.cos(h)*n,a+Math.sin(h)*n)}t.fill(),t.stroke()}},_isPointInArea:function(t,e){return t.x>e.left-1e-6&&t.x<e.right+1e-6&&t.y>e.top-1e-6&&t.y<e.bottom+1e-6},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,n,i){var a=n.steppedLine;if(a){if("middle"===a){var r=(e.x+n.x)/2;t.lineTo(r,i?n.y:e.y),t.lineTo(r,i?e.y:n.y)}else"after"===a&&!i||"after"!==a&&i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}else n.tension?t.bezierCurveTo(i?e.controlPointPreviousX:e.controlPointNextX,i?e.controlPointPreviousY:e.controlPointNextY,i?n.controlPointNextX:n.controlPointPreviousX,i?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):t.lineTo(n.x,n.y)}},R=L;S.clear=L.clear,S.drawRoundedRectangle=function(t){t.beginPath(),L.roundedRect.apply(L,arguments)};var N={_set:function(t,e){return S.merge(this[t]||(this[t]={}),e)}};N._set("global",{defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",defaultLineHeight:1.2,showLines:!0});var W=N,Y=S.valueOrDefault;var z={toLineHeight:function(t,e){var n=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,n,i,a;return S.isObject(t)?(e=+t.top||0,n=+t.right||0,i=+t.bottom||0,a=+t.left||0):e=n=i=a=+t||0,{top:e,right:n,bottom:i,left:a,height:e+i,width:a+n}},_parseFont:function(t){var e=W.global,n=Y(t.fontSize,e.defaultFontSize),i={family:Y(t.fontFamily,e.defaultFontFamily),lineHeight:S.options.toLineHeight(Y(t.lineHeight,e.defaultLineHeight),n),size:n,style:Y(t.fontStyle,e.defaultFontStyle),weight:null,string:""};return i.string=function(t){return!t||S.isNullOrUndef(t.size)||S.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(i),i},resolve:function(t,e,n,i){var a,r,o,s=!0;for(a=0,r=t.length;a<r;++a)if(void 0!==(o=t[a])&&(void 0!==e&&"function"==typeof o&&(o=o(e),s=!1),void 0!==n&&S.isArray(o)&&(o=o[n],s=!1),void 0!==o))return i&&!s&&(i.cacheable=!1),o}},E={_factorize:function(t){var e,n=[],i=Math.sqrt(t);for(e=1;e<i;e++)t%e==0&&(n.push(e),n.push(t/e));return i===(0|i)&&n.push(i),n.sort((function(t,e){return t-e})).pop(),n},log10:Math.log10||function(t){var e=Math.log(t)*Math.LOG10E,n=Math.round(e);return t===Math.pow(10,n)?n:e}},V=E;S.log10=E.log10;var H=S,B=C,j=R,U=z,G=V,q={getRtlAdapter:function(t,e,n){return t?function(t,e){return{x:function(n){return t+t+e-n},setWidth:function(t){e=t},textAlign:function(t){return"center"===t?t:"right"===t?"left":"right"},xPlus:function(t,e){return t-e},leftForLtr:function(t,e){return t-e}}}(e,n):{x:function(t){return t},setWidth:function(t){},textAlign:function(t){return t},xPlus:function(t,e){return t+e},leftForLtr:function(t,e){return t}}},overrideTextDirection:function(t,e){var n,i;"ltr"!==e&&"rtl"!==e||(i=[(n=t.canvas.style).getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)},restoreTextDirection:function(t){var e=t.prevTextDirection;void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}};H.easing=B,H.canvas=j,H.options=U,H.math=G,H.rtl=q;var Z=function(t){H.extend(this,t),this.initialize.apply(this,arguments)};H.extend(Z.prototype,{_type:void 0,initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=H.extend({},t._model)),t._start={},t},transition:function(t){var e=this,n=e._model,i=e._start,a=e._view;return n&&1!==t?(a||(a=e._view={}),i||(i=e._start={}),function(t,e,n,i){var a,r,o,s,l,u,d,h,c,f=Object.keys(n);for(a=0,r=f.length;a<r;++a)if(u=n[o=f[a]],e.hasOwnProperty(o)||(e[o]=u),(s=e[o])!==u&&"_"!==o[0]){if(t.hasOwnProperty(o)||(t[o]=s),(d=typeof u)===typeof(l=t[o]))if("string"===d){if((h=k(l)).valid&&(c=k(u)).valid){e[o]=c.mix(h,i).rgbString();continue}}else if(H.isFinite(l)&&H.isFinite(u)){e[o]=l+(u-l)*i;continue}e[o]=u}}(i,a,n,t),e):(e._view=H.extend({},n),e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return H.isNumber(this._model.x)&&H.isNumber(this._model.y)}}),Z.extend=H.inherits;var $=Z,X=$.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),K=X;Object.defineProperty(X.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(X.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}}),W._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:H.noop,onComplete:H.noop}});var J={animations:[],request:null,addAnimation:function(t,e,n,i){var a,r,o=this.animations;for(e.chart=t,e.startTime=Date.now(),e.duration=n,i||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e);o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=H.findIndex(this.animations,(function(e){return e.chart===t}));-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=H.requestAnimFrame.call(window,(function(){t.request=null,t.startDigest()})))},startDigest:function(){this.advance(),this.animations.length>0&&this.requestAnimationFrame()},advance:function(){for(var t,e,n,i,a=this.animations,r=0;r<a.length;)e=(t=a[r]).chart,n=t.numSteps,i=Math.floor((Date.now()-t.startTime)/t.duration*n)+1,t.currentStep=Math.min(i,n),H.callback(t.render,[e,t],e),H.callback(t.onAnimationProgress,[t],e),t.currentStep>=n?(H.callback(t.onAnimationComplete,[t],e),e.animating=!1,a.splice(r,1)):++r}},Q=H.options.resolve,tt=["push","pop","shift","splice","unshift"];function et(t,e){var n=t._chartjs;if(n){var i=n.listeners,a=i.indexOf(e);-1!==a&&i.splice(a,1),i.length>0||(tt.forEach((function(e){delete t[e]})),delete t._chartjs)}}var nt=function(t,e){this.initialize(t,e)};H.extend(nt.prototype,{datasetElementType:null,dataElementType:null,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth"],_dataElementOptions:["backgroundColor","borderColor","borderWidth","pointStyle"],initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements(),n._type=n.getMeta().type},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.chart,n=e.scales,i=this.getDataset(),a=e.options.scales;null!==t.xAxisID&&t.xAxisID in n&&!i.xAxisID||(t.xAxisID=i.xAxisID||a.xAxes[0].id),null!==t.yAxisID&&t.yAxisID in n&&!i.yAxisID||(t.yAxisID=i.yAxisID||a.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},_getValueScaleId:function(){return this.getMeta().yAxisID},_getIndexScaleId:function(){return this.getMeta().xAxisID},_getValueScale:function(){return this.getScaleForId(this._getValueScaleId())},_getIndexScale:function(){return this.getScaleForId(this._getIndexScaleId())},reset:function(){this._update(!0)},destroy:function(){this._data&&et(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,n=this.getMeta(),i=this.getDataset().data||[],a=n.data;for(t=0,e=i.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);n.dataset=n.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,e,n=this,i=n.getDataset(),a=i.data||(i.data=[]);n._data!==a&&(n._data&&et(n._data,n),a&&Object.isExtensible(a)&&(e=n,(t=a)._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),tt.forEach((function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),i=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),a=i.apply(this,e);return H.each(t._chartjs.listeners,(function(t){"function"==typeof t[n]&&t[n].apply(t,e)})),a}})})))),n._data=a),n.resyncElements()},_configure:function(){this._config=H.merge({},[this.chart.options.datasets[this._type],this.getDataset()],{merger:function(t,e,n){"_meta"!==t&&"data"!==t&&H._merger(t,e,n)}})},_update:function(t){this._configure(),this._cachedDataOpts=null,this.update(t)},update:H.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],i=n.length,a=0;a<i;++a)n[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,i=0;for(t.dataset&&t.dataset.draw();i<n;++i)e[i].draw()},getStyle:function(t){var e,n=this.getMeta(),i=n.dataset;return this._configure(),i&&void 0===t?e=this._resolveDatasetElementOptions(i||{}):(t=t||0,e=this._resolveDataElementOptions(n.data[t]||{},t)),!1!==e.fill&&null!==e.fill||(e.backgroundColor=e.borderColor),e},_resolveDatasetElementOptions:function(t,e){var n,i,a,r,o=this,s=o.chart,l=o._config,u=t.custom||{},d=s.options.elements[o.datasetElementType.prototype._type]||{},h=o._datasetElementOptions,c={},f={chart:s,dataset:o.getDataset(),datasetIndex:o.index,hover:e};for(n=0,i=h.length;n<i;++n)a=h[n],r=e?"hover"+a.charAt(0).toUpperCase()+a.slice(1):a,c[a]=Q([u[r],l[r],d[r]],f);return c},_resolveDataElementOptions:function(t,e){var n=this,i=t&&t.custom,a=n._cachedDataOpts;if(a&&!i)return a;var r,o,s,l,u=n.chart,d=n._config,h=u.options.elements[n.dataElementType.prototype._type]||{},c=n._dataElementOptions,f={},g={chart:u,dataIndex:e,dataset:n.getDataset(),datasetIndex:n.index},m={cacheable:!i};if(i=i||{},H.isArray(c))for(o=0,s=c.length;o<s;++o)f[l=c[o]]=Q([i[l],d[l],h[l]],g,e,m);else for(o=0,s=(r=Object.keys(c)).length;o<s;++o)f[l=r[o]]=Q([i[l],d[c[l]],d[l],h[l]],g,e,m);return m.cacheable&&(n._cachedDataOpts=Object.freeze(f)),f},removeHoverStyle:function(t){H.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},a=t._model,r=H.getHoverColor;t.$previousStyle={backgroundColor:a.backgroundColor,borderColor:a.borderColor,borderWidth:a.borderWidth},a.backgroundColor=Q([i.hoverBackgroundColor,e.hoverBackgroundColor,r(a.backgroundColor)],void 0,n),a.borderColor=Q([i.hoverBorderColor,e.hoverBorderColor,r(a.borderColor)],void 0,n),a.borderWidth=Q([i.hoverBorderWidth,e.hoverBorderWidth,a.borderWidth],void 0,n)},_removeDatasetHoverStyle:function(){var t=this.getMeta().dataset;t&&this.removeHoverStyle(t)},_setDatasetHoverStyle:function(){var t,e,n,i,a,r,o=this.getMeta().dataset,s={};if(o){for(r=o._model,a=this._resolveDatasetElementOptions(o,!0),t=0,e=(i=Object.keys(a)).length;t<e;++t)s[n=i[t]]=r[n],r[n]=a[n];o.$previousStyle=s}},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,n=t.data.length,i=e.length;i<n?t.data.splice(i,n-i):i>n&&this.insertElements(n,i-n)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){var t=arguments.length;this.insertElements(this.getDataset().data.length-t,t)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),nt.extend=H.inherits;var it=nt,at=2*Math.PI;function rt(t,e){var n=e.startAngle,i=e.endAngle,a=e.pixelMargin,r=a/e.outerRadius,o=e.x,s=e.y;t.beginPath(),t.arc(o,s,e.outerRadius,n-r,i+r),e.innerRadius>a?(r=a/e.innerRadius,t.arc(o,s,e.innerRadius-a,i+r,n-r,!0)):t.arc(o,s,a,i+Math.PI/2,n-Math.PI/2),t.closePath(),t.clip()}function ot(t,e,n){var i="inner"===e.borderAlign;i?(t.lineWidth=2*e.borderWidth,t.lineJoin="round"):(t.lineWidth=e.borderWidth,t.lineJoin="bevel"),n.fullCircles&&function(t,e,n,i){var a,r=n.endAngle;for(i&&(n.endAngle=n.startAngle+at,rt(t,n),n.endAngle=r,n.endAngle===n.startAngle&&n.fullCircles&&(n.endAngle+=at,n.fullCircles--)),t.beginPath(),t.arc(n.x,n.y,n.innerRadius,n.startAngle+at,n.startAngle,!0),a=0;a<n.fullCircles;++a)t.stroke();for(t.beginPath(),t.arc(n.x,n.y,e.outerRadius,n.startAngle,n.startAngle+at),a=0;a<n.fullCircles;++a)t.stroke()}(t,e,n,i),i&&rt(t,n),t.beginPath(),t.arc(n.x,n.y,e.outerRadius,n.startAngle,n.endAngle),t.arc(n.x,n.y,n.innerRadius,n.endAngle,n.startAngle,!0),t.closePath(),t.stroke()}W._set("global",{elements:{arc:{backgroundColor:W.global.defaultColor,borderColor:"#fff",borderWidth:2,borderAlign:"center"}}});var st=$.extend({_type:"arc",inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var n=this._view;if(n){for(var i=H.getAngleFromPoint(n,{x:t,y:e}),a=i.angle,r=i.distance,o=n.startAngle,s=n.endAngle;s<o;)s+=at;for(;a>s;)a-=at;for(;a<o;)a+=at;var l=a>=o&&a<=s,u=r>=n.innerRadius&&r<=n.outerRadius;return l&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t,e=this._chart.ctx,n=this._view,i="inner"===n.borderAlign?.33:0,a={x:n.x,y:n.y,innerRadius:n.innerRadius,outerRadius:Math.max(n.outerRadius-i,0),pixelMargin:i,startAngle:n.startAngle,endAngle:n.endAngle,fullCircles:Math.floor(n.circumference/at)};if(e.save(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,a.fullCircles){for(a.endAngle=a.startAngle+at,e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),t=0;t<a.fullCircles;++t)e.fill();a.endAngle=a.startAngle+n.circumference%at}e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),e.fill(),n.borderWidth&&ot(e,n,a),e.restore()}}),lt=H.valueOrDefault,ut=W.global.defaultColor;W._set("global",{elements:{line:{tension:.4,backgroundColor:ut,borderWidth:3,borderColor:ut,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}});var dt=$.extend({_type:"line",draw:function(){var t,e,n,i=this,a=i._view,r=i._chart.ctx,o=a.spanGaps,s=i._children.slice(),l=W.global,u=l.elements.line,d=-1,h=i._loop;if(s.length){if(i._loop){for(t=0;t<s.length;++t)if(e=H.previousItem(s,t),!s[t]._view.skip&&e._view.skip){s=s.slice(t).concat(s.slice(0,t)),h=o;break}h&&s.push(s[0])}for(r.save(),r.lineCap=a.borderCapStyle||u.borderCapStyle,r.setLineDash&&r.setLineDash(a.borderDash||u.borderDash),r.lineDashOffset=lt(a.borderDashOffset,u.borderDashOffset),r.lineJoin=a.borderJoinStyle||u.borderJoinStyle,r.lineWidth=lt(a.borderWidth,u.borderWidth),r.strokeStyle=a.borderColor||l.defaultColor,r.beginPath(),(n=s[0]._view).skip||(r.moveTo(n.x,n.y),d=0),t=1;t<s.length;++t)n=s[t]._view,e=-1===d?H.previousItem(s,t):s[d],n.skip||(d!==t-1&&!o||-1===d?r.moveTo(n.x,n.y):H.canvas.lineTo(r,e._view,n),d=t);h&&r.closePath(),r.stroke(),r.restore()}}}),ht=H.valueOrDefault,ct=W.global.defaultColor;function ft(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}W._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:ct,borderColor:ct,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}});var gt=$.extend({_type:"point",inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:ft,inXRange:ft,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,n=this._chart.ctx,i=e.pointStyle,a=e.rotation,r=e.radius,o=e.x,s=e.y,l=W.global,u=l.defaultColor;e.skip||(void 0===t||H.canvas._isPointInArea(e,t))&&(n.strokeStyle=e.borderColor||u,n.lineWidth=ht(e.borderWidth,l.elements.point.borderWidth),n.fillStyle=e.backgroundColor||u,H.canvas.drawPoint(n,i,r,o,s,a))}}),mt=W.global.defaultColor;function pt(t){return t&&void 0!==t.width}function vt(t){var e,n,i,a,r;return pt(t)?(r=t.width/2,e=t.x-r,n=t.x+r,i=Math.min(t.y,t.base),a=Math.max(t.y,t.base)):(r=t.height/2,e=Math.min(t.x,t.base),n=Math.max(t.x,t.base),i=t.y-r,a=t.y+r),{left:e,top:i,right:n,bottom:a}}function bt(t,e,n){return t===e?n:t===n?e:t}function yt(t,e,n){var i,a,r,o,s=t.borderWidth,l=function(t){var e=t.borderSkipped,n={};return e?(t.horizontal?t.base>t.x&&(e=bt(e,"left","right")):t.base<t.y&&(e=bt(e,"bottom","top")),n[e]=!0,n):n}(t);return H.isObject(s)?(i=+s.top||0,a=+s.right||0,r=+s.bottom||0,o=+s.left||0):i=a=r=o=+s||0,{t:l.top||i<0?0:i>n?n:i,r:l.right||a<0?0:a>e?e:a,b:l.bottom||r<0?0:r>n?n:r,l:l.left||o<0?0:o>e?e:o}}function xt(t,e,n){var i=null===e,a=null===n,r=!(!t||i&&a)&&vt(t);return r&&(i||e>=r.left&&e<=r.right)&&(a||n>=r.top&&n<=r.bottom)}W._set("global",{elements:{rectangle:{backgroundColor:mt,borderColor:mt,borderSkipped:"bottom",borderWidth:0}}});var _t=$.extend({_type:"rectangle",draw:function(){var t=this._chart.ctx,e=this._view,n=function(t){var e=vt(t),n=e.right-e.left,i=e.bottom-e.top,a=yt(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i},inner:{x:e.left+a.l,y:e.top+a.t,w:n-a.l-a.r,h:i-a.t-a.b}}}(e),i=n.outer,a=n.inner;t.fillStyle=e.backgroundColor,t.fillRect(i.x,i.y,i.w,i.h),i.w===a.w&&i.h===a.h||(t.save(),t.beginPath(),t.rect(i.x,i.y,i.w,i.h),t.clip(),t.fillStyle=e.borderColor,t.rect(a.x,a.y,a.w,a.h),t.fill("evenodd"),t.restore())},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){return xt(this._view,t,e)},inLabelRange:function(t,e){var n=this._view;return pt(n)?xt(n,t,null):xt(n,null,e)},inXRange:function(t){return xt(this._view,t,null)},inYRange:function(t){return xt(this._view,null,t)},getCenterPoint:function(){var t,e,n=this._view;return pt(n)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view;return pt(t)?t.width*Math.abs(t.y-t.base):t.height*Math.abs(t.x-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}}),wt={},kt=st,Mt=dt,St=gt,Dt=_t;wt.Arc=kt,wt.Line=Mt,wt.Point=St,wt.Rectangle=Dt;var Ct=H._deprecated,Pt=H.valueOrDefault;function Tt(t,e,n){var i,a,r=n.barThickness,o=e.stackCount,s=e.pixels[t],l=H.isNullOrUndef(r)?function(t,e){var n,i,a,r,o=t._length;for(a=1,r=e.length;a<r;++a)o=Math.min(o,Math.abs(e[a]-e[a-1]));for(a=0,r=t.getTicks().length;a<r;++a)i=t.getPixelForTick(a),o=a>0?Math.min(o,Math.abs(i-n)):o,n=i;return o}(e.scale,e.pixels):-1;return H.isNullOrUndef(r)?(i=l*n.categoryPercentage,a=n.barPercentage):(i=r*o,a=1),{chunk:i/o,ratio:a,start:s-i/2}}W._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),W._set("global",{datasets:{bar:{categoryPercentage:.8,barPercentage:.9}}});var Ot=it.extend({dataElementType:wt.Rectangle,_dataElementOptions:["backgroundColor","borderColor","borderSkipped","borderWidth","barPercentage","barThickness","categoryPercentage","maxBarThickness","minBarLength"],initialize:function(){var t,e,n=this;it.prototype.initialize.apply(n,arguments),(t=n.getMeta()).stack=n.getDataset().stack,t.bar=!0,e=n._getIndexScale().options,Ct("bar chart",e.barPercentage,"scales.[x/y]Axes.barPercentage","dataset.barPercentage"),Ct("bar chart",e.barThickness,"scales.[x/y]Axes.barThickness","dataset.barThickness"),Ct("bar chart",e.categoryPercentage,"scales.[x/y]Axes.categoryPercentage","dataset.categoryPercentage"),Ct("bar chart",n._getValueScale().options.minBarLength,"scales.[x/y]Axes.minBarLength","dataset.minBarLength"),Ct("bar chart",e.maxBarThickness,"scales.[x/y]Axes.maxBarThickness","dataset.maxBarThickness")},update:function(t){var e,n,i=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,n=i.length;e<n;++e)this.updateElement(i[e],e,t)},updateElement:function(t,e,n){var i=this,a=i.getMeta(),r=i.getDataset(),o=i._resolveDataElementOptions(t,e);t._xScale=i.getScaleForId(a.xAxisID),t._yScale=i.getScaleForId(a.yAxisID),t._datasetIndex=i.index,t._index=e,t._model={backgroundColor:o.backgroundColor,borderColor:o.borderColor,borderSkipped:o.borderSkipped,borderWidth:o.borderWidth,datasetLabel:r.label,label:i.chart.data.labels[e]},H.isArray(r.data[e])&&(t._model.borderSkipped=null),i._updateElementGeometry(t,e,n,o),t.pivot()},_updateElementGeometry:function(t,e,n,i){var a=this,r=t._model,o=a._getValueScale(),s=o.getBasePixel(),l=o.isHorizontal(),u=a._ruler||a.getRuler(),d=a.calculateBarValuePixels(a.index,e,i),h=a.calculateBarIndexPixels(a.index,e,u,i);r.horizontal=l,r.base=n?s:d.base,r.x=l?n?s:d.head:h.center,r.y=l?h.center:n?s:d.head,r.height=l?h.size:void 0,r.width=l?void 0:h.size},_getStacks:function(t){var e,n,i=this._getIndexScale(),a=i._getMatchingVisibleMetas(this._type),r=i.options.stacked,o=a.length,s=[];for(e=0;e<o&&(n=a[e],(!1===r||-1===s.indexOf(n.stack)||void 0===r&&void 0===n.stack)&&s.push(n.stack),n.index!==t);++e);return s},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var n=this._getStacks(t),i=void 0!==e?n.indexOf(e):-1;return-1===i?n.length-1:i},getRuler:function(){var t,e,n=this._getIndexScale(),i=[];for(t=0,e=this.getMeta().data.length;t<e;++t)i.push(n.getPixelForValue(null,t,this.index));return{pixels:i,start:n._startPixel,end:n._endPixel,stackCount:this.getStackCount(),scale:n}},calculateBarValuePixels:function(t,e,n){var i,a,r,o,s,l,u,d=this.chart,h=this._getValueScale(),c=h.isHorizontal(),f=d.data.datasets,g=h._getMatchingVisibleMetas(this._type),m=h._parseValue(f[t].data[e]),p=n.minBarLength,v=h.options.stacked,b=this.getMeta().stack,y=void 0===m.start?0:m.max>=0&&m.min>=0?m.min:m.max,x=void 0===m.start?m.end:m.max>=0&&m.min>=0?m.max-m.min:m.min-m.max,_=g.length;if(v||void 0===v&&void 0!==b)for(i=0;i<_&&(a=g[i]).index!==t;++i)a.stack===b&&(r=void 0===(u=h._parseValue(f[a.index].data[e])).start?u.end:u.min>=0&&u.max>=0?u.max:u.min,(m.min<0&&r<0||m.max>=0&&r>0)&&(y+=r));return o=h.getPixelForValue(y),l=(s=h.getPixelForValue(y+x))-o,void 0!==p&&Math.abs(l)<p&&(l=p,s=x>=0&&!c||x<0&&c?o-p:o+p),{size:l,base:o,head:s,center:s+l/2}},calculateBarIndexPixels:function(t,e,n,i){var a="flex"===i.barThickness?function(t,e,n){var i,a=e.pixels,r=a[t],o=t>0?a[t-1]:null,s=t<a.length-1?a[t+1]:null,l=n.categoryPercentage;return null===o&&(o=r-(null===s?e.end-e.start:s-r)),null===s&&(s=r+r-o),i=r-(r-Math.min(o,s))/2*l,{chunk:Math.abs(s-o)/2*l/e.stackCount,ratio:n.barPercentage,start:i}}(e,n,i):Tt(e,n,i),r=this.getStackIndex(t,this.getMeta().stack),o=a.start+a.chunk*r+a.chunk/2,s=Math.min(Pt(i.maxBarThickness,1/0),a.chunk*a.ratio);return{base:o-s/2,head:o+s/2,center:o,size:s}},draw:function(){var t=this.chart,e=this._getValueScale(),n=this.getMeta().data,i=this.getDataset(),a=n.length,r=0;for(H.canvas.clipArea(t.ctx,t.chartArea);r<a;++r){var o=e._parseValue(i.data[r]);isNaN(o.min)||isNaN(o.max)||n[r].draw()}H.canvas.unclipArea(t.ctx)},_resolveDataElementOptions:function(){var t=this,e=H.extend({},it.prototype._resolveDataElementOptions.apply(t,arguments)),n=t._getIndexScale().options,i=t._getValueScale().options;return e.barPercentage=Pt(n.barPercentage,e.barPercentage),e.barThickness=Pt(n.barThickness,e.barThickness),e.categoryPercentage=Pt(n.categoryPercentage,e.categoryPercentage),e.maxBarThickness=Pt(n.maxBarThickness,e.maxBarThickness),e.minBarLength=Pt(i.minBarLength,e.minBarLength),e}}),At=H.valueOrDefault,Ft=H.options.resolve;W._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}});var It=it.extend({dataElementType:wt.Point,_dataElementOptions:["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"],update:function(t){var e=this,n=e.getMeta().data;H.each(n,(function(n,i){e.updateElement(n,i,t)}))},updateElement:function(t,e,n){var i=this,a=i.getMeta(),r=t.custom||{},o=i.getScaleForId(a.xAxisID),s=i.getScaleForId(a.yAxisID),l=i._resolveDataElementOptions(t,e),u=i.getDataset().data[e],d=i.index,h=n?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof u?u:NaN,e,d),c=n?s.getBasePixel():s.getPixelForValue(u,e,d);t._xScale=o,t._yScale=s,t._options=l,t._datasetIndex=d,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,rotation:l.rotation,radius:n?0:l.radius,skip:r.skip||isNaN(h)||isNaN(c),x:h,y:c},t.pivot()},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=At(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=At(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=At(n.hoverBorderWidth,n.borderWidth),e.radius=n.radius+n.hoverRadius},_resolveDataElementOptions:function(t,e){var n=this,i=n.chart,a=n.getDataset(),r=t.custom||{},o=a.data[e]||{},s=it.prototype._resolveDataElementOptions.apply(n,arguments),l={chart:i,dataIndex:e,dataset:a,datasetIndex:n.index};return n._cachedDataOpts===s&&(s=H.extend({},s)),s.radius=Ft([r.radius,o.r,n._config.radius,i.options.elements.point.radius],l,e),s}}),Lt=H.valueOrDefault,Rt=Math.PI,Nt=2*Rt,Wt=Rt/2;W._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,n=o[0].data.length;e<n;++e)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&i.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,i){var a=t.getDatasetMeta(0),r=a.controller.getStyle(i);return{text:n,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[i])||a.data[i].hidden,index:i}})):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)(a=o.getDatasetMeta(n)).data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:-Wt,circumference:Nt,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.labels[t.index],i=": "+e.datasets[t.datasetIndex].data[t.index];return H.isArray(n)?(n=n.slice())[0]+=i:n+=i,n}}}});var Yt=it.extend({dataElementType:wt.Arc,linkScales:H.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var e,n,i,a,r=this,o=r.chart,s=o.chartArea,l=o.options,u=1,d=1,h=0,c=0,f=r.getMeta(),g=f.data,m=l.cutoutPercentage/100||0,p=l.circumference,v=r._getRingWeight(r.index);if(p<Nt){var b=l.rotation%Nt,y=(b+=b>=Rt?-Nt:b<-Rt?Nt:0)+p,x=Math.cos(b),_=Math.sin(b),w=Math.cos(y),k=Math.sin(y),M=b<=0&&y>=0||y>=Nt,S=b<=Wt&&y>=Wt||y>=Nt+Wt,D=b<=-Wt&&y>=-Wt||y>=Rt+Wt,C=b===-Rt||y>=Rt?-1:Math.min(x,x*m,w,w*m),P=D?-1:Math.min(_,_*m,k,k*m),T=M?1:Math.max(x,x*m,w,w*m),O=S?1:Math.max(_,_*m,k,k*m);u=(T-C)/2,d=(O-P)/2,h=-(T+C)/2,c=-(O+P)/2}for(i=0,a=g.length;i<a;++i)g[i]._options=r._resolveDataElementOptions(g[i],i);for(o.borderWidth=r.getMaxBorderWidth(),e=(s.right-s.left-o.borderWidth)/u,n=(s.bottom-s.top-o.borderWidth)/d,o.outerRadius=Math.max(Math.min(e,n)/2,0),o.innerRadius=Math.max(o.outerRadius*m,0),o.radiusLength=(o.outerRadius-o.innerRadius)/(r._getVisibleDatasetWeightTotal()||1),o.offsetX=h*o.outerRadius,o.offsetY=c*o.outerRadius,f.total=r.calculateTotal(),r.outerRadius=o.outerRadius-o.radiusLength*r._getRingWeightOffset(r.index),r.innerRadius=Math.max(r.outerRadius-o.radiusLength*v,0),i=0,a=g.length;i<a;++i)r.updateElement(g[i],i,t)},updateElement:function(t,e,n){var i=this,a=i.chart,r=a.chartArea,o=a.options,s=o.animation,l=(r.left+r.right)/2,u=(r.top+r.bottom)/2,d=o.rotation,h=o.rotation,c=i.getDataset(),f=n&&s.animateRotate?0:t.hidden?0:i.calculateCircumference(c.data[e])*(o.circumference/Nt),g=n&&s.animateScale?0:i.innerRadius,m=n&&s.animateScale?0:i.outerRadius,p=t._options||{};H.extend(t,{_datasetIndex:i.index,_index:e,_model:{backgroundColor:p.backgroundColor,borderColor:p.borderColor,borderWidth:p.borderWidth,borderAlign:p.borderAlign,x:l+a.offsetX,y:u+a.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:m,innerRadius:g,label:H.valueAtIndexOrDefault(c.label,e,a.data.labels[e])}});var v=t._model;n&&s.animateRotate||(v.startAngle=0===e?o.rotation:i.getMeta().data[e-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),n=this.getMeta(),i=0;return H.each(n.data,(function(n,a){t=e.data[a],isNaN(t)||n.hidden||(i+=Math.abs(t))})),i},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?Nt*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){var e,n,i,a,r,o,s,l,u=0,d=this.chart;if(!t)for(e=0,n=d.data.datasets.length;e<n;++e)if(d.isDatasetVisible(e)){t=(i=d.getDatasetMeta(e)).data,e!==this.index&&(r=i.controller);break}if(!t)return 0;for(e=0,n=t.length;e<n;++e)a=t[e],r?(r._configure(),o=r._resolveDataElementOptions(a,e)):o=a._options,"inner"!==o.borderAlign&&(s=o.borderWidth,u=(l=o.hoverBorderWidth)>(u=s>u?s:u)?l:u);return u},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=Lt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Lt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Lt(n.hoverBorderWidth,n.borderWidth)},_getRingWeightOffset:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e},_getRingWeight:function(t){return Math.max(Lt(this.chart.data.datasets[t].weight,1),0)},_getVisibleDatasetWeightTotal:function(){return this._getRingWeightOffset(this.chart.data.datasets.length)}});W._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{type:"category",position:"left",offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{mode:"index",axis:"y"}}),W._set("global",{datasets:{horizontalBar:{categoryPercentage:.8,barPercentage:.9}}});var zt=Ot.extend({_getValueScaleId:function(){return this.getMeta().xAxisID},_getIndexScaleId:function(){return this.getMeta().yAxisID}}),Et=H.valueOrDefault,Vt=H.options.resolve,Ht=H.canvas._isPointInArea;function Bt(t,e){var n=t&&t.options.ticks||{},i=n.reverse,a=void 0===n.min?e:0,r=void 0===n.max?e:0;return{start:i?r:a,end:i?a:r}}function jt(t,e,n){var i=n/2,a=Bt(t,i),r=Bt(e,i);return{top:r.end,right:a.end,bottom:r.start,left:a.start}}function Ut(t){var e,n,i,a;return H.isObject(t)?(e=t.top,n=t.right,i=t.bottom,a=t.left):e=n=i=a=t,{top:e,right:n,bottom:i,left:a}}W._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}});var Gt=it.extend({datasetElementType:wt.Line,dataElementType:wt.Point,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth","cubicInterpolationMode","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},update:function(t){var e,n,i=this,a=i.getMeta(),r=a.dataset,o=a.data||[],s=i.chart.options,l=i._config,u=i._showLine=Et(l.showLine,s.showLines);for(i._xScale=i.getScaleForId(a.xAxisID),i._yScale=i.getScaleForId(a.yAxisID),u&&(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=i._yScale,r._datasetIndex=i.index,r._children=o,r._model=i._resolveDatasetElementOptions(r),r.pivot()),e=0,n=o.length;e<n;++e)i.updateElement(o[e],e,t);for(u&&0!==r._model.tension&&i.updateBezierControlPoints(),e=0,n=o.length;e<n;++e)o[e].pivot()},updateElement:function(t,e,n){var i,a,r=this,o=r.getMeta(),s=t.custom||{},l=r.getDataset(),u=r.index,d=l.data[e],h=r._xScale,c=r._yScale,f=o.dataset._model,g=r._resolveDataElementOptions(t,e);i=h.getPixelForValue("object"==typeof d?d:NaN,e,u),a=n?c.getBasePixel():r.calculatePointY(d,e,u),t._xScale=h,t._yScale=c,t._options=g,t._datasetIndex=u,t._index=e,t._model={x:i,y:a,skip:s.skip||isNaN(i)||isNaN(a),radius:g.radius,pointStyle:g.pointStyle,rotation:g.rotation,backgroundColor:g.backgroundColor,borderColor:g.borderColor,borderWidth:g.borderWidth,tension:Et(s.tension,f?f.tension:0),steppedLine:!!f&&f.steppedLine,hitRadius:g.hitRadius}},_resolveDatasetElementOptions:function(t){var e=this,n=e._config,i=t.custom||{},a=e.chart.options,r=a.elements.line,o=it.prototype._resolveDatasetElementOptions.apply(e,arguments);return o.spanGaps=Et(n.spanGaps,a.spanGaps),o.tension=Et(n.lineTension,r.tension),o.steppedLine=Vt([i.steppedLine,n.steppedLine,r.stepped]),o.clip=Ut(Et(n.clip,jt(e._xScale,e._yScale,o.borderWidth))),o},calculatePointY:function(t,e,n){var i,a,r,o,s,l,u,d=this.chart,h=this._yScale,c=0,f=0;if(h.options.stacked){for(s=+h.getRightValue(t),u=(l=d._getSortedVisibleDatasetMetas()).length,i=0;i<u&&(r=l[i]).index!==n;++i)a=d.data.datasets[r.index],"line"===r.type&&r.yAxisID===h.id&&((o=+h.getRightValue(a.data[e]))<0?f+=o||0:c+=o||0);return s<0?h.getPixelForValue(f+s):h.getPixelForValue(c+s)}return h.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,n,i,a=this.chart,r=this.getMeta(),o=r.dataset._model,s=a.chartArea,l=r.data||[];function u(t,e,n){return Math.max(Math.min(t,n),e)}if(o.spanGaps&&(l=l.filter((function(t){return!t._model.skip}))),"monotone"===o.cubicInterpolationMode)H.splineCurveMonotone(l);else for(t=0,e=l.length;t<e;++t)n=l[t]._model,i=H.splineCurve(H.previousItem(l,t)._model,n,H.nextItem(l,t)._model,o.tension),n.controlPointPreviousX=i.previous.x,n.controlPointPreviousY=i.previous.y,n.controlPointNextX=i.next.x,n.controlPointNextY=i.next.y;if(a.options.elements.line.capBezierPoints)for(t=0,e=l.length;t<e;++t)n=l[t]._model,Ht(n,s)&&(t>0&&Ht(l[t-1]._model,s)&&(n.controlPointPreviousX=u(n.controlPointPreviousX,s.left,s.right),n.controlPointPreviousY=u(n.controlPointPreviousY,s.top,s.bottom)),t<l.length-1&&Ht(l[t+1]._model,s)&&(n.controlPointNextX=u(n.controlPointNextX,s.left,s.right),n.controlPointNextY=u(n.controlPointNextY,s.top,s.bottom)))},draw:function(){var t,e=this.chart,n=this.getMeta(),i=n.data||[],a=e.chartArea,r=e.canvas,o=0,s=i.length;for(this._showLine&&(t=n.dataset._model.clip,H.canvas.clipArea(e.ctx,{left:!1===t.left?0:a.left-t.left,right:!1===t.right?r.width:a.right+t.right,top:!1===t.top?0:a.top-t.top,bottom:!1===t.bottom?r.height:a.bottom+t.bottom}),n.dataset.draw(),H.canvas.unclipArea(e.ctx));o<s;++o)i[o].draw(a)},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Et(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Et(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Et(n.hoverBorderWidth,n.borderWidth),e.radius=Et(n.hoverRadius,n.radius)}}),qt=H.options.resolve;W._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,n=o[0].data.length;e<n;++e)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&i.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,i){var a=t.getDatasetMeta(0),r=a.controller.getStyle(i);return{text:n,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[i])||a.data[i].hidden,index:i}})):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)(a=o.getDatasetMeta(n)).data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}});var Zt=it.extend({dataElementType:wt.Arc,linkScales:H.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,n,i,a=this,r=a.getDataset(),o=a.getMeta(),s=a.chart.options.startAngle||0,l=a._starts=[],u=a._angles=[],d=o.data;for(a._updateRadius(),o.count=a.countVisibleElements(),e=0,n=r.data.length;e<n;e++)l[e]=s,i=a._computeAngle(e),u[e]=i,s+=i;for(e=0,n=d.length;e<n;++e)d[e]._options=a._resolveDataElementOptions(d[e],e),a.updateElement(d[e],e,t)},_updateRadius:function(){var t=this,e=t.chart,n=e.chartArea,i=e.options,a=Math.min(n.right-n.left,n.bottom-n.top);e.outerRadius=Math.max(a/2,0),e.innerRadius=Math.max(i.cutoutPercentage?e.outerRadius/100*i.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,n){var i=this,a=i.chart,r=i.getDataset(),o=a.options,s=o.animation,l=a.scale,u=a.data.labels,d=l.xCenter,h=l.yCenter,c=o.startAngle,f=t.hidden?0:l.getDistanceFromCenterForValue(r.data[e]),g=i._starts[e],m=g+(t.hidden?0:i._angles[e]),p=s.animateScale?0:l.getDistanceFromCenterForValue(r.data[e]),v=t._options||{};H.extend(t,{_datasetIndex:i.index,_index:e,_scale:l,_model:{backgroundColor:v.backgroundColor,borderColor:v.borderColor,borderWidth:v.borderWidth,borderAlign:v.borderAlign,x:d,y:h,innerRadius:0,outerRadius:n?p:f,startAngle:n&&s.animateRotate?c:g,endAngle:n&&s.animateRotate?c:m,label:H.valueAtIndexOrDefault(u,e,u[e])}}),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),n=0;return H.each(e.data,(function(e,i){isNaN(t.data[i])||e.hidden||n++})),n},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor,a=H.valueOrDefault;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=a(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=a(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=a(n.hoverBorderWidth,n.borderWidth)},_computeAngle:function(t){var e=this,n=this.getMeta().count,i=e.getDataset(),a=e.getMeta();if(isNaN(i.data[t])||a.data[t].hidden)return 0;var r={chart:e.chart,dataIndex:t,dataset:i,datasetIndex:e.index};return qt([e.chart.options.elements.arc.angle,2*Math.PI/n],r,t)}});W._set("pie",H.clone(W.doughnut)),W._set("pie",{cutoutPercentage:0});var $t=Yt,Xt=H.valueOrDefault;W._set("radar",{spanGaps:!1,scale:{type:"radialLinear"},elements:{line:{fill:"start",tension:0}}});var Kt=it.extend({datasetElementType:wt.Line,dataElementType:wt.Point,linkScales:H.noop,_datasetElementOptions:["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,n,i=this,a=i.getMeta(),r=a.dataset,o=a.data||[],s=i.chart.scale,l=i._config;for(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=s,r._datasetIndex=i.index,r._children=o,r._loop=!0,r._model=i._resolveDatasetElementOptions(r),r.pivot(),e=0,n=o.length;e<n;++e)i.updateElement(o[e],e,t);for(i.updateBezierControlPoints(),e=0,n=o.length;e<n;++e)o[e].pivot()},updateElement:function(t,e,n){var i=this,a=t.custom||{},r=i.getDataset(),o=i.chart.scale,s=o.getPointPositionForValue(e,r.data[e]),l=i._resolveDataElementOptions(t,e),u=i.getMeta().dataset._model,d=n?o.xCenter:s.x,h=n?o.yCenter:s.y;t._scale=o,t._options=l,t._datasetIndex=i.index,t._index=e,t._model={x:d,y:h,skip:a.skip||isNaN(d)||isNaN(h),radius:l.radius,pointStyle:l.pointStyle,rotation:l.rotation,backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,tension:Xt(a.tension,u?u.tension:0),hitRadius:l.hitRadius}},_resolveDatasetElementOptions:function(){var t=this,e=t._config,n=t.chart.options,i=it.prototype._resolveDatasetElementOptions.apply(t,arguments);return i.spanGaps=Xt(e.spanGaps,n.spanGaps),i.tension=Xt(e.lineTension,n.elements.line.tension),i},updateBezierControlPoints:function(){var t,e,n,i,a=this.getMeta(),r=this.chart.chartArea,o=a.data||[];function s(t,e,n){return Math.max(Math.min(t,n),e)}for(a.dataset._model.spanGaps&&(o=o.filter((function(t){return!t._model.skip}))),t=0,e=o.length;t<e;++t)n=o[t]._model,i=H.splineCurve(H.previousItem(o,t,!0)._model,n,H.nextItem(o,t,!0)._model,n.tension),n.controlPointPreviousX=s(i.previous.x,r.left,r.right),n.controlPointPreviousY=s(i.previous.y,r.top,r.bottom),n.controlPointNextX=s(i.next.x,r.left,r.right),n.controlPointNextY=s(i.next.y,r.top,r.bottom)},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Xt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Xt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Xt(n.hoverBorderWidth,n.borderWidth),e.radius=Xt(n.hoverRadius,n.radius)}});W._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),W._set("global",{datasets:{scatter:{showLine:!1}}});var Jt={bar:Ot,bubble:It,doughnut:Yt,horizontalBar:zt,line:Gt,polarArea:Zt,pie:$t,radar:Kt,scatter:Gt};function Qt(t,e){return t.native?{x:t.x,y:t.y}:H.getRelativePosition(t,e)}function te(t,e){var n,i,a,r,o,s,l=t._getSortedVisibleDatasetMetas();for(i=0,r=l.length;i<r;++i)for(a=0,o=(n=l[i].data).length;a<o;++a)(s=n[a])._view.skip||e(s)}function ee(t,e){var n=[];return te(t,(function(t){t.inRange(e.x,e.y)&&n.push(t)})),n}function ne(t,e,n,i){var a=Number.POSITIVE_INFINITY,r=[];return te(t,(function(t){if(!n||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),s=i(e,o);s<a?(r=[t],a=s):s===a&&r.push(t)}})),r}function ie(t){var e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,i){var a=e?Math.abs(t.x-i.x):0,r=n?Math.abs(t.y-i.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function ae(t,e,n){var i=Qt(e,t);n.axis=n.axis||"x";var a=ie(n.axis),r=n.intersect?ee(t,i):ne(t,i,!1,a),o=[];return r.length?(t._getSortedVisibleDatasetMetas().forEach((function(t){var e=t.data[r[0]._index];e&&!e._view.skip&&o.push(e)})),o):[]}var re={modes:{single:function(t,e){var n=Qt(e,t),i=[];return te(t,(function(t){if(t.inRange(n.x,n.y))return i.push(t),i})),i.slice(0,1)},label:ae,index:ae,dataset:function(t,e,n){var i=Qt(e,t);n.axis=n.axis||"xy";var a=ie(n.axis),r=n.intersect?ee(t,i):ne(t,i,!1,a);return r.length>0&&(r=t.getDatasetMeta(r[0]._datasetIndex).data),r},"x-axis":function(t,e){return ae(t,e,{intersect:!1})},point:function(t,e){return ee(t,Qt(e,t))},nearest:function(t,e,n){var i=Qt(e,t);n.axis=n.axis||"xy";var a=ie(n.axis);return ne(t,i,n.intersect,a)},x:function(t,e,n){var i=Qt(e,t),a=[],r=!1;return te(t,(function(t){t.inXRange(i.x)&&a.push(t),t.inRange(i.x,i.y)&&(r=!0)})),n.intersect&&!r&&(a=[]),a},y:function(t,e,n){var i=Qt(e,t),a=[],r=!1;return te(t,(function(t){t.inYRange(i.y)&&a.push(t),t.inRange(i.x,i.y)&&(r=!0)})),n.intersect&&!r&&(a=[]),a}}},oe=H.extend;function se(t,e){return H.where(t,(function(t){return t.pos===e}))}function le(t,e){return t.sort((function(t,n){var i=e?n:t,a=e?t:n;return i.weight===a.weight?i.index-a.index:i.weight-a.weight}))}function ue(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function de(t,e,n){var i,a,r=n.box,o=t.maxPadding;if(n.size&&(t[n.pos]-=n.size),n.size=n.horizontal?r.height:r.width,t[n.pos]+=n.size,r.getPadding){var s=r.getPadding();o.top=Math.max(o.top,s.top),o.left=Math.max(o.left,s.left),o.bottom=Math.max(o.bottom,s.bottom),o.right=Math.max(o.right,s.right)}if(i=e.outerWidth-ue(o,t,"left","right"),a=e.outerHeight-ue(o,t,"top","bottom"),i!==t.w||a!==t.h)return t.w=i,t.h=a,n.horizontal?i!==t.w:a!==t.h}function he(t,e){var n=e.maxPadding;function i(t){var i={left:0,top:0,right:0,bottom:0};return t.forEach((function(t){i[t]=Math.max(e[t],n[t])})),i}return i(t?["left","right"]:["top","bottom"])}function ce(t,e,n){var i,a,r,o,s,l,u=[];for(i=0,a=t.length;i<a;++i)(o=(r=t[i]).box).update(r.width||e.w,r.height||e.h,he(r.horizontal,e)),de(e,n,r)&&(l=!0,u.length&&(s=!0)),o.fullWidth||u.push(r);return s&&ce(u,e,n)||l}function fe(t,e,n){var i,a,r,o,s=n.padding,l=e.x,u=e.y;for(i=0,a=t.length;i<a;++i)o=(r=t[i]).box,r.horizontal?(o.left=o.fullWidth?s.left:e.left,o.right=o.fullWidth?n.outerWidth-s.right:e.left+e.w,o.top=u,o.bottom=u+o.height,o.width=o.right-o.left,u=o.bottom):(o.left=l,o.right=l+o.width,o.top=e.top,o.bottom=e.top+e.h,o.height=o.bottom-o.top,l=o.right);e.x=l,e.y=u}W._set("global",{layout:{padding:{top:0,right:0,bottom:0,left:0}}});var ge,me={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw:function(){e.draw.apply(e,arguments)}}]},t.boxes.push(e)},removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure:function(t,e,n){for(var i,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)i=a[o],n.hasOwnProperty(i)&&(e[i]=n[i])},update:function(t,e,n){if(t){var i=t.options.layout||{},a=H.options.toPadding(i.padding),r=e-a.width,o=n-a.height,s=function(t){var e=function(t){var e,n,i,a=[];for(e=0,n=(t||[]).length;e<n;++e)i=t[e],a.push({index:e,box:i,pos:i.position,horizontal:i.isHorizontal(),weight:i.weight});return a}(t),n=le(se(e,"left"),!0),i=le(se(e,"right")),a=le(se(e,"top"),!0),r=le(se(e,"bottom"));return{leftAndTop:n.concat(a),rightAndBottom:i.concat(r),chartArea:se(e,"chartArea"),vertical:n.concat(i),horizontal:a.concat(r)}}(t.boxes),l=s.vertical,u=s.horizontal,d=Object.freeze({outerWidth:e,outerHeight:n,padding:a,availableWidth:r,vBoxMaxWidth:r/2/l.length,hBoxMaxHeight:o/2}),h=oe({maxPadding:oe({},a),w:r,h:o,x:a.left,y:a.top},a);!function(t,e){var n,i,a;for(n=0,i=t.length;n<i;++n)(a=t[n]).width=a.horizontal?a.box.fullWidth&&e.availableWidth:e.vBoxMaxWidth,a.height=a.horizontal&&e.hBoxMaxHeight}(l.concat(u),d),ce(l,h,d),ce(u,h,d)&&ce(l,h,d),function(t){var e=t.maxPadding;function n(n){var i=Math.max(e[n]-t[n],0);return t[n]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}(h),fe(s.leftAndTop,h,d),h.x+=h.w,h.y+=h.h,fe(s.rightAndBottom,h,d),t.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h},H.each(s.chartArea,(function(e){var n=e.box;oe(n,t.chartArea),n.update(h.w,h.h)}))}}},pe=(ge=Object.freeze({__proto__:null,default:"@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"}))&&ge.default||ge,ve="$chartjs",be="chartjs-size-monitor",ye="chartjs-render-monitor",xe="chartjs-render-animation",_e=["animationstart","webkitAnimationStart"],we={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function ke(t,e){var n=H.getStyle(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}var Me=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function Se(t,e,n){t.addEventListener(e,n,Me)}function De(t,e,n){t.removeEventListener(e,n,Me)}function Ce(t,e,n,i,a){return{type:t,chart:e,native:a||null,x:void 0!==n?n:null,y:void 0!==i?i:null}}function Pe(t){var e=document.createElement("div");return e.className=t||"",e}function Te(t,e,n){var i,a,r,o,s=t[ve]||(t[ve]={}),l=s.resizer=function(t){var e=Pe(be),n=Pe(be+"-expand"),i=Pe(be+"-shrink");n.appendChild(Pe()),i.appendChild(Pe()),e.appendChild(n),e.appendChild(i),e._reset=function(){n.scrollLeft=1e6,n.scrollTop=1e6,i.scrollLeft=1e6,i.scrollTop=1e6};var a=function(){e._reset(),t()};return Se(n,"scroll",a.bind(n,"expand")),Se(i,"scroll",a.bind(i,"shrink")),e}((i=function(){if(s.resizer){var i=n.options.maintainAspectRatio&&t.parentNode,a=i?i.clientWidth:0;e(Ce("resize",n)),i&&i.clientWidth<a&&n.canvas&&e(Ce("resize",n))}},r=!1,o=[],function(){o=Array.prototype.slice.call(arguments),a=a||this,r||(r=!0,H.requestAnimFrame.call(window,(function(){r=!1,i.apply(a,o)})))}));!function(t,e){var n=t[ve]||(t[ve]={}),i=n.renderProxy=function(t){t.animationName===xe&&e()};H.each(_e,(function(e){Se(t,e,i)})),n.reflow=!!t.offsetParent,t.classList.add(ye)}(t,(function(){if(s.resizer){var e=t.parentNode;e&&e!==l.parentNode&&e.insertBefore(l,e.firstChild),l._reset()}}))}function Oe(t){var e=t[ve]||{},n=e.resizer;delete e.resizer,function(t){var e=t[ve]||{},n=e.renderProxy;n&&(H.each(_e,(function(e){De(t,e,n)})),delete e.renderProxy),t.classList.remove(ye)}(t),n&&n.parentNode&&n.parentNode.removeChild(n)}var Ae={disableCSSInjection:!1,_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,_ensureLoaded:function(t){if(!this.disableCSSInjection){var e=t.getRootNode?t.getRootNode():document;!function(t,e){var n=t[ve]||(t[ve]={});if(!n.containsStyles){n.containsStyles=!0,e="/* Chart.js */\n"+e;var i=document.createElement("style");i.setAttribute("type","text/css"),i.appendChild(document.createTextNode(e)),t.appendChild(i)}}(e.host?e:document.head,pe)}},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(this._ensureLoaded(t),function(t,e){var n=t.style,i=t.getAttribute("height"),a=t.getAttribute("width");if(t[ve]={initial:{height:i,width:a,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",null===a||""===a){var r=ke(t,"width");void 0!==r&&(t.width=r)}if(null===i||""===i)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var o=ke(t,"height");void 0!==r&&(t.height=o)}}(t,e),n):null},releaseContext:function(t){var e=t.canvas;if(e[ve]){var n=e[ve].initial;["height","width"].forEach((function(t){var i=n[t];H.isNullOrUndef(i)?e.removeAttribute(t):e.setAttribute(t,i)})),H.each(n.style||{},(function(t,n){e.style[n]=t})),e.width=e.width,delete e[ve]}},addEventListener:function(t,e,n){var i=t.canvas;if("resize"!==e){var a=n[ve]||(n[ve]={});Se(i,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){n(function(t,e){var n=we[t.type]||t.type,i=H.getRelativePosition(t,e);return Ce(n,e,i.x,i.y,t)}(e,t))})}else Te(i,n,t)},removeEventListener:function(t,e,n){var i=t.canvas;if("resize"!==e){var a=((n[ve]||{}).proxies||{})[t.id+"_"+e];a&&De(i,e,a)}else Oe(i)}};H.addEvent=Se,H.removeEvent=De;var Fe=Ae._enabled?Ae:{acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}},Ie=H.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},Fe);W._set("global",{plugins:{}});var Le={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach((function(t){-1===e.indexOf(t)&&e.push(t)})),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach((function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)})),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var i,a,r,o,s,l=this.descriptors(t),u=l.length;for(i=0;i<u;++i)if("function"==typeof(s=(r=(a=l[i]).plugin)[e])&&((o=[t].concat(n||[])).push(a.options),!1===s.apply(r,o)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var n=[],i=[],a=t&&t.config||{},r=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach((function(t){if(-1===n.indexOf(t)){var e=t.id,a=r[e];!1!==a&&(!0===a&&(a=H.clone(W.global.plugins[e])),n.push(t),i.push({plugin:t,options:a||{}}))}})),e.descriptors=i,e.id=this._cacheId,i},_invalidate:function(t){delete t.$plugins}},Re={constructors:{},defaults:{},registerScaleType:function(t,e,n){this.constructors[t]=e,this.defaults[t]=H.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?H.merge({},[W.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=H.extend(this.defaults[t],e))},addScalesToLayout:function(t){H.each(t.scales,(function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,me.addBox(t,e)}))}},Ne=H.valueOrDefault,We=H.rtl.getRtlAdapter;W._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:H.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var r=t[0];r.label?n=r.label:r.xLabel?n=r.xLabel:a>0&&r.index<a&&(n=i[r.index])}return n},afterTitle:H.noop,beforeBody:H.noop,beforeLabel:H.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),H.isNullOrUndef(t.value)?n+=t.yLabel:n+=t.value,n},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:H.noop,afterBody:H.noop,beforeFooter:H.noop,footer:H.noop,afterFooter:H.noop}}});var Ye={average:function(t){if(!t.length)return!1;var e,n,i=0,a=0,r=0;for(e=0,n=t.length;e<n;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();i+=s.x,a+=s.y,++r}}return{x:i/r,y:a/r}},nearest:function(t,e){var n,i,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(n=0,i=t.length;n<i;++n){var l=t[n];if(l&&l.hasValue()){var u=l.getCenterPoint(),d=H.distanceBetweenPoints(e,u);d<s&&(s=d,a=l)}}if(a){var h=a.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}};function ze(t,e){return e&&(H.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ee(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function Ve(t){var e=W.global;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,rtl:t.rtl,textDirection:t.textDirection,bodyFontColor:t.bodyFontColor,_bodyFontFamily:Ne(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:Ne(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:Ne(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:Ne(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:Ne(t.titleFontStyle,e.defaultFontStyle),titleFontSize:Ne(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:Ne(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:Ne(t.footerFontStyle,e.defaultFontStyle),footerFontSize:Ne(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function He(t,e){return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-t.xPadding:t.x+t.xPadding}function Be(t){return ze([],Ee(t))}var je=$.extend({initialize:function(){this._model=Ve(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options,n=e.callbacks,i=n.beforeTitle.apply(t,arguments),a=n.title.apply(t,arguments),r=n.afterTitle.apply(t,arguments),o=[];return o=ze(o,Ee(i)),o=ze(o,Ee(a)),o=ze(o,Ee(r))},getBeforeBody:function(){return Be(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var n=this,i=n._options.callbacks,a=[];return H.each(t,(function(t){var r={before:[],lines:[],after:[]};ze(r.before,Ee(i.beforeLabel.call(n,t,e))),ze(r.lines,i.label.call(n,t,e)),ze(r.after,Ee(i.afterLabel.call(n,t,e))),a.push(r)})),a},getAfterBody:function(){return Be(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this,e=t._options.callbacks,n=e.beforeFooter.apply(t,arguments),i=e.footer.apply(t,arguments),a=e.afterFooter.apply(t,arguments),r=[];return r=ze(r,Ee(n)),r=ze(r,Ee(i)),r=ze(r,Ee(a))},update:function(t){var e,n,i,a,r,o,s,l,u,d,h=this,c=h._options,f=h._model,g=h._model=Ve(c),m=h._active,p=h._data,v={xAlign:f.xAlign,yAlign:f.yAlign},b={x:f.x,y:f.y},y={width:f.width,height:f.height},x={x:f.caretX,y:f.caretY};if(m.length){g.opacity=1;var _=[],w=[];x=Ye[c.position].call(h,m,h._eventPosition);var k=[];for(e=0,n=m.length;e<n;++e)k.push((i=m[e],a=void 0,r=void 0,o=void 0,s=void 0,l=void 0,u=void 0,d=void 0,a=i._xScale,r=i._yScale||i._scale,o=i._index,s=i._datasetIndex,l=i._chart.getDatasetMeta(s).controller,u=l._getIndexScale(),d=l._getValueScale(),{xLabel:a?a.getLabelForIndex(o,s):"",yLabel:r?r.getLabelForIndex(o,s):"",label:u?""+u.getLabelForIndex(o,s):"",value:d?""+d.getLabelForIndex(o,s):"",index:o,datasetIndex:s,x:i._model.x,y:i._model.y}));c.filter&&(k=k.filter((function(t){return c.filter(t,p)}))),c.itemSort&&(k=k.sort((function(t,e){return c.itemSort(t,e,p)}))),H.each(k,(function(t){_.push(c.callbacks.labelColor.call(h,t,h._chart)),w.push(c.callbacks.labelTextColor.call(h,t,h._chart))})),g.title=h.getTitle(k,p),g.beforeBody=h.getBeforeBody(k,p),g.body=h.getBody(k,p),g.afterBody=h.getAfterBody(k,p),g.footer=h.getFooter(k,p),g.x=x.x,g.y=x.y,g.caretPadding=c.caretPadding,g.labelColors=_,g.labelTextColors=w,g.dataPoints=k,y=function(t,e){var n=t._chart.ctx,i=2*e.yPadding,a=0,r=e.body,o=r.reduce((function(t,e){return t+e.before.length+e.lines.length+e.after.length}),0);o+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,l=e.footer.length,u=e.titleFontSize,d=e.bodyFontSize,h=e.footerFontSize;i+=s*u,i+=s?(s-1)*e.titleSpacing:0,i+=s?e.titleMarginBottom:0,i+=o*d,i+=o?(o-1)*e.bodySpacing:0,i+=l?e.footerMarginTop:0,i+=l*h,i+=l?(l-1)*e.footerSpacing:0;var c=0,f=function(t){a=Math.max(a,n.measureText(t).width+c)};return n.font=H.fontString(u,e._titleFontStyle,e._titleFontFamily),H.each(e.title,f),n.font=H.fontString(d,e._bodyFontStyle,e._bodyFontFamily),H.each(e.beforeBody.concat(e.afterBody),f),c=e.displayColors?d+2:0,H.each(r,(function(t){H.each(t.before,f),H.each(t.lines,f),H.each(t.after,f)})),c=0,n.font=H.fontString(h,e._footerFontStyle,e._footerFontFamily),H.each(e.footer,f),{width:a+=2*e.xPadding,height:i}}(this,g),b=function(t,e,n,i){var a=t.x,r=t.y,o=t.caretSize,s=t.caretPadding,l=t.cornerRadius,u=n.xAlign,d=n.yAlign,h=o+s,c=l+s;return"right"===u?a-=e.width:"center"===u&&((a-=e.width/2)+e.width>i.width&&(a=i.width-e.width),a<0&&(a=0)),"top"===d?r+=h:r-="bottom"===d?e.height+h:e.height/2,"center"===d?"left"===u?a+=h:"right"===u&&(a-=h):"left"===u?a-=c:"right"===u&&(a+=c),{x:a,y:r}}(g,y,v=function(t,e){var n,i,a,r,o,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",h="center";s.y<e.height?h="top":s.y>l.height-e.height&&(h="bottom");var c=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===h?(n=function(t){return t<=c},i=function(t){return t>c}):(n=function(t){return t<=e.width/2},i=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},r=function(t){return t-e.width-s.caretSize-s.caretPadding<0},o=function(t){return t<=f?"top":"bottom"},n(s.x)?(d="left",a(s.x)&&(d="center",h=o(s.y))):i(s.x)&&(d="right",r(s.x)&&(d="center",h=o(s.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:d,yAlign:g.yAlign?g.yAlign:h}}(this,y),h._chart)}else g.opacity=0;return g.xAlign=v.xAlign,g.yAlign=v.yAlign,g.x=b.x,g.y=b.y,g.width=y.width,g.height=y.height,g.caretX=x.x,g.caretY=x.y,h._model=g,t&&c.custom&&c.custom.call(h,g),h},drawCaret:function(t,e){var n=this._chart.ctx,i=this._view,a=this.getCaretPosition(t,e,i);n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,n){var i,a,r,o,s,l,u=n.caretSize,d=n.cornerRadius,h=n.xAlign,c=n.yAlign,f=t.x,g=t.y,m=e.width,p=e.height;if("center"===c)s=g+p/2,"left"===h?(a=(i=f)-u,r=i,o=s+u,l=s-u):(a=(i=f+m)+u,r=i,o=s-u,l=s+u);else if("left"===h?(i=(a=f+d+u)-u,r=a+u):"right"===h?(i=(a=f+m-d-u)-u,r=a+u):(i=(a=n.caretX)-u,r=a+u),"top"===c)s=(o=g)-u,l=o;else{s=(o=g+p)+u,l=o;var v=r;r=i,i=v}return{x1:i,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,e,n){var i,a,r,o=e.title,s=o.length;if(s){var l=We(e.rtl,e.x,e.width);for(t.x=He(e,e._titleAlign),n.textAlign=l.textAlign(e._titleAlign),n.textBaseline="middle",i=e.titleFontSize,a=e.titleSpacing,n.fillStyle=e.titleFontColor,n.font=H.fontString(i,e._titleFontStyle,e._titleFontFamily),r=0;r<s;++r)n.fillText(o[r],l.x(t.x),t.y+i/2),t.y+=i+a,r+1===s&&(t.y+=e.titleMarginBottom-a)}},drawBody:function(t,e,n){var i,a,r,o,s,l,u,d,h=e.bodyFontSize,c=e.bodySpacing,f=e._bodyAlign,g=e.body,m=e.displayColors,p=0,v=m?He(e,"left"):0,b=We(e.rtl,e.x,e.width),y=function(e){n.fillText(e,b.x(t.x+p),t.y+h/2),t.y+=h+c},x=b.textAlign(f);for(n.textAlign=f,n.textBaseline="middle",n.font=H.fontString(h,e._bodyFontStyle,e._bodyFontFamily),t.x=He(e,x),n.fillStyle=e.bodyFontColor,H.each(e.beforeBody,y),p=m&&"right"!==x?"center"===f?h/2+1:h+2:0,s=0,u=g.length;s<u;++s){for(i=g[s],a=e.labelTextColors[s],r=e.labelColors[s],n.fillStyle=a,H.each(i.before,y),l=0,d=(o=i.lines).length;l<d;++l){if(m){var _=b.x(v);n.fillStyle=e.legendColorBackground,n.fillRect(b.leftForLtr(_,h),t.y,h,h),n.lineWidth=1,n.strokeStyle=r.borderColor,n.strokeRect(b.leftForLtr(_,h),t.y,h,h),n.fillStyle=r.backgroundColor,n.fillRect(b.leftForLtr(b.xPlus(_,1),h-2),t.y+1,h-2,h-2),n.fillStyle=a}y(o[l])}H.each(i.after,y)}p=0,H.each(e.afterBody,y),t.y-=c},drawFooter:function(t,e,n){var i,a,r=e.footer,o=r.length;if(o){var s=We(e.rtl,e.x,e.width);for(t.x=He(e,e._footerAlign),t.y+=e.footerMarginTop,n.textAlign=s.textAlign(e._footerAlign),n.textBaseline="middle",i=e.footerFontSize,n.fillStyle=e.footerFontColor,n.font=H.fontString(i,e._footerFontStyle,e._footerFontFamily),a=0;a<o;++a)n.fillText(r[a],s.x(t.x),t.y+i/2),t.y+=i+e.footerSpacing}},drawBackground:function(t,e,n,i){n.fillStyle=e.backgroundColor,n.strokeStyle=e.borderColor,n.lineWidth=e.borderWidth;var a=e.xAlign,r=e.yAlign,o=t.x,s=t.y,l=i.width,u=i.height,d=e.cornerRadius;n.beginPath(),n.moveTo(o+d,s),"top"===r&&this.drawCaret(t,i),n.lineTo(o+l-d,s),n.quadraticCurveTo(o+l,s,o+l,s+d),"center"===r&&"right"===a&&this.drawCaret(t,i),n.lineTo(o+l,s+u-d),n.quadraticCurveTo(o+l,s+u,o+l-d,s+u),"bottom"===r&&this.drawCaret(t,i),n.lineTo(o+d,s+u),n.quadraticCurveTo(o,s+u,o,s+u-d),"center"===r&&"left"===a&&this.drawCaret(t,i),n.lineTo(o,s+d),n.quadraticCurveTo(o,s,o+d,s),n.closePath(),n.fill(),e.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},i={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&r&&(t.save(),t.globalAlpha=a,this.drawBackground(i,e,t,n),i.y+=e.yPadding,H.rtl.overrideTextDirection(t,e.textDirection),this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),H.rtl.restoreTextDirection(t,e.textDirection),t.restore())}},handleEvent:function(t){var e,n=this,i=n._options;return n._lastActive=n._lastActive||[],"mouseout"===t.type?n._active=[]:(n._active=n._chart.getElementsAtEventForMode(t,i.mode,i),i.reverse&&n._active.reverse()),(e=!H.arrayEquals(n._active,n._lastActive))&&(n._lastActive=n._active,(i.enabled||i.custom)&&(n._eventPosition={x:t.x,y:t.y},n.update(!0),n.pivot())),e}}),Ue=Ye,Ge=je;Ge.positioners=Ue;var qe=H.valueOrDefault;function Ze(){return H.merge({},[].slice.call(arguments),{merger:function(t,e,n,i){if("xAxes"===t||"yAxes"===t){var a,r,o,s=n[t].length;for(e[t]||(e[t]=[]),a=0;a<s;++a)o=n[t][a],r=qe(o.type,"xAxes"===t?"category":"linear"),a>=e[t].length&&e[t].push({}),!e[t][a].type||o.type&&o.type!==e[t][a].type?H.merge(e[t][a],[Re.getScaleDefaults(r),o]):H.merge(e[t][a],o)}else H._merger(t,e,n,i)}})}function $e(){return H.merge({},[].slice.call(arguments),{merger:function(t,e,n,i){var a=e[t]||{},r=n[t];"scales"===t?e[t]=Ze(a,r):"scale"===t?e[t]=H.merge(a,[Re.getScaleDefaults(r.type),r]):H._merger(t,e,n,i)}})}function Xe(t){var e=t.options;H.each(t.scales,(function(e){me.removeBox(t,e)})),e=$e(W.global,W[t.config.type],e),t.options=t.config.options=e,t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.tooltip._options=e.tooltips,t.tooltip.initialize()}function Ke(t,e,n){var i,a=function(t){return t.id===i};do{i=e+n++}while(H.findIndex(t,a)>=0);return i}function Je(t){return"top"===t||"bottom"===t}function Qe(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}W._set("global",{elements:{},events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,maintainAspectRatio:!0,responsive:!0,responsiveAnimationDuration:0});var tn=function(t,e){return this.construct(t,e),this};H.extend(tn.prototype,{construct:function(t,e){var n=this;e=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=$e(W.global,W[t.type],t.options||{}),t}(e);var i=Ie.acquireContext(t,e),a=i&&i.canvas,r=a&&a.height,o=a&&a.width;n.id=H.uid(),n.ctx=i,n.canvas=a,n.config=e,n.width=o,n.height=r,n.aspectRatio=r?o/r:null,n.options=e.options,n._bufferedRender=!1,n._layers=[],n.chart=n,n.controller=n,tn.instances[n.id]=n,Object.defineProperty(n,"data",{get:function(){return n.config.data},set:function(t){n.config.data=t}}),i&&a?(n.initialize(),n.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return Le.notify(t,"beforeInit"),H.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.initToolTip(),Le.notify(t,"afterInit"),t},clear:function(){return H.canvas.clear(this),this},stop:function(){return J.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,i=e.canvas,a=n.maintainAspectRatio&&e.aspectRatio||null,r=Math.max(0,Math.floor(H.getMaximumWidth(i))),o=Math.max(0,Math.floor(a?r/a:H.getMaximumHeight(i)));if((e.width!==r||e.height!==o)&&(i.width=e.width=r,i.height=e.height=o,i.style.width=r+"px",i.style.height=o+"px",H.retinaScale(e,n.devicePixelRatio),!t)){var s={width:r,height:o};Le.notify(e,"resize",[s]),n.onResize&&n.onResize(e,s),e.stop(),e.update({duration:n.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;H.each(e.xAxes,(function(t,n){t.id||(t.id=Ke(e.xAxes,"x-axis-",n))})),H.each(e.yAxes,(function(t,n){t.id||(t.id=Ke(e.yAxes,"y-axis-",n))})),n&&(n.id=n.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,n=t.scales||{},i=[],a=Object.keys(n).reduce((function(t,e){return t[e]=!1,t}),{});e.scales&&(i=i.concat((e.scales.xAxes||[]).map((function(t){return{options:t,dtype:"category",dposition:"bottom"}})),(e.scales.yAxes||[]).map((function(t){return{options:t,dtype:"linear",dposition:"left"}})))),e.scale&&i.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),H.each(i,(function(e){var i=e.options,r=i.id,o=qe(i.type,e.dtype);Je(i.position)!==Je(e.dposition)&&(i.position=e.dposition),a[r]=!0;var s=null;if(r in n&&n[r].type===o)(s=n[r]).options=i,s.ctx=t.ctx,s.chart=t;else{var l=Re.getScaleConstructor(o);if(!l)return;s=new l({id:r,type:o,options:i,ctx:t.ctx,chart:t}),n[s.id]=s}s.mergeTicksOptions(),e.isDefault&&(t.scale=s)})),H.each(a,(function(t,e){t||delete n[e]})),t.scales=n,Re.addScalesToLayout(this)},buildOrUpdateControllers:function(){var t,e,n=this,i=[],a=n.data.datasets;for(t=0,e=a.length;t<e;t++){var r=a[t],o=n.getDatasetMeta(t),s=r.type||n.config.type;if(o.type&&o.type!==s&&(n.destroyDatasetMeta(t),o=n.getDatasetMeta(t)),o.type=s,o.order=r.order||0,o.index=t,o.controller)o.controller.updateIndex(t),o.controller.linkScales();else{var l=Jt[o.type];if(void 0===l)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new l(n,t),i.push(o.controller)}}return i},resetElements:function(){var t=this;H.each(t.data.datasets,(function(e,n){t.getDatasetMeta(n).controller.reset()}),t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e,n,i=this;if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),Xe(i),Le._invalidate(i),!1!==Le.notify(i,"beforeUpdate")){i.tooltip._data=i.data;var a=i.buildOrUpdateControllers();for(e=0,n=i.data.datasets.length;e<n;e++)i.getDatasetMeta(e).controller.buildOrUpdateElements();i.updateLayout(),i.options.animation&&i.options.animation.duration&&H.each(a,(function(t){t.reset()})),i.updateDatasets(),i.tooltip.initialize(),i.lastActive=[],Le.notify(i,"afterUpdate"),i._layers.sort(Qe("z","_idx")),i._bufferedRender?i._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:i.render(t)}},updateLayout:function(){var t=this;!1!==Le.notify(t,"beforeLayout")&&(me.update(this,this.width,this.height),t._layers=[],H.each(t.boxes,(function(e){e._configure&&e._configure(),t._layers.push.apply(t._layers,e._layers())}),t),t._layers.forEach((function(t,e){t._idx=e})),Le.notify(t,"afterScaleUpdate"),Le.notify(t,"afterLayout"))},updateDatasets:function(){if(!1!==Le.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);Le.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),n={meta:e,index:t};!1!==Le.notify(this,"beforeDatasetUpdate",[n])&&(e.controller._update(),Le.notify(this,"afterDatasetUpdate",[n]))},render:function(t){var e=this;t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]});var n=e.options.animation,i=qe(t.duration,n&&n.duration),a=t.lazy;if(!1!==Le.notify(e,"beforeRender")){var r=function(t){Le.notify(e,"afterRender"),H.callback(n&&n.onComplete,[t],e)};if(n&&i){var o=new K({numSteps:i/16.66,easing:t.easing||n.easing,render:function(t,e){var n=H.easing.effects[e.easing],i=e.currentStep,a=i/e.numSteps;t.draw(n(a),a,i)},onAnimationProgress:n.onProgress,onAnimationComplete:r});J.addAnimation(e,o,i,a)}else e.draw(),r(new K({numSteps:0,chart:e}));return e}},draw:function(t){var e,n,i=this;if(i.clear(),H.isNullOrUndef(t)&&(t=1),i.transition(t),!(i.width<=0||i.height<=0)&&!1!==Le.notify(i,"beforeDraw",[t])){for(n=i._layers,e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(i.chartArea);for(i.drawDatasets(t);e<n.length;++e)n[e].draw(i.chartArea);i._drawTooltip(t),Le.notify(i,"afterDraw",[t])}},transition:function(t){for(var e=0,n=(this.data.datasets||[]).length;e<n;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},_getSortedDatasetMetas:function(t){var e,n,i=[];for(e=0,n=(this.data.datasets||[]).length;e<n;++e)t&&!this.isDatasetVisible(e)||i.push(this.getDatasetMeta(e));return i.sort(Qe("order","index")),i},_getSortedVisibleDatasetMetas:function(){return this._getSortedDatasetMetas(!0)},drawDatasets:function(t){var e,n;if(!1!==Le.notify(this,"beforeDatasetsDraw",[t])){for(n=(e=this._getSortedVisibleDatasetMetas()).length-1;n>=0;--n)this.drawDataset(e[n],t);Le.notify(this,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n={meta:t,index:t.index,easingValue:e};!1!==Le.notify(this,"beforeDatasetDraw",[n])&&(t.controller.draw(e),Le.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,n={tooltip:e,easingValue:t};!1!==Le.notify(this,"beforeTooltipDraw",[n])&&(e.draw(),Le.notify(this,"afterTooltipDraw",[n]))},getElementAtEvent:function(t){return re.modes.single(this,t)},getElementsAtEvent:function(t){return re.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return re.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,n){var i=re.modes[e];return"function"==typeof i?i(this,t,n):[]},getDatasetAtEvent:function(t){return re.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var n=e._meta[this.id];return n||(n=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e.order||0,index:t}),n},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,n=this.data.datasets[t],i=n._meta&&n._meta[e];i&&(i.controller.destroy(),delete n._meta[e])},destroy:function(){var t,e,n=this,i=n.canvas;for(n.stop(),t=0,e=n.data.datasets.length;t<e;++t)n.destroyDatasetMeta(t);i&&(n.unbindEvents(),H.canvas.clear(n),Ie.releaseContext(n.ctx),n.canvas=null,n.ctx=null),Le.notify(n,"destroy"),delete tn.instances[n.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new Ge({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};H.each(t.options.events,(function(i){Ie.addEventListener(t,i,n),e[i]=n})),t.options.responsive&&(n=function(){t.resize()},Ie.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,H.each(e,(function(e,n){Ie.removeEventListener(t,n,e)})))},updateHoverStyle:function(t,e,n){var i,a,r,o=n?"set":"remove";for(a=0,r=t.length;a<r;++a)(i=t[a])&&this.getDatasetMeta(i._datasetIndex).controller[o+"HoverStyle"](i);"dataset"===e&&this.getDatasetMeta(t[0]._datasetIndex).controller["_"+o+"DatasetHoverStyle"]()},eventHandler:function(t){var e=this,n=e.tooltip;if(!1!==Le.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var i=e.handleEvent(t);n&&(i=n._start?n.handleEvent(t):i|n.handleEvent(t)),Le.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):i&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,n=this,i=n.options||{},a=i.hover;return n.lastActive=n.lastActive||[],"mouseout"===t.type?n.active=[]:n.active=n.getElementsAtEventForMode(t,a.mode,a),H.callback(i.onHover||i.hover.onHover,[t.native,n.active],n),"mouseup"!==t.type&&"click"!==t.type||i.onClick&&i.onClick.call(n,t.native,n.active),n.lastActive.length&&n.updateHoverStyle(n.lastActive,a.mode,!1),n.active.length&&a.mode&&n.updateHoverStyle(n.active,a.mode,!0),e=!H.arrayEquals(n.active,n.lastActive),n.lastActive=n.active,e}}),tn.instances={};var en=tn;tn.Controller=tn,tn.types={},H.configMerge=$e,H.scaleMerge=Ze;function nn(){throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")}function an(t){this.options=t||{}}H.extend(an.prototype,{formats:nn,parse:nn,format:nn,add:nn,diff:nn,startOf:nn,endOf:nn,_create:function(t){return t}}),an.override=function(t){H.extend(an.prototype,t)};var rn={_date:an},on={formatters:{values:function(t){return H.isArray(t)?t:""+t},linear:function(t,e,n){var i=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(i)>1&&t!==Math.floor(t)&&(i=t-Math.floor(t));var a=H.log10(Math.abs(i)),r="";if(0!==t)if(Math.max(Math.abs(n[0]),Math.abs(n[n.length-1]))<1e-4){var o=H.log10(Math.abs(t)),s=Math.floor(o)-Math.floor(a);s=Math.max(Math.min(s,20),0),r=t.toExponential(s)}else{var l=-1*Math.floor(a);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r},logarithmic:function(t,e,n){var i=t/Math.pow(10,Math.floor(H.log10(t)));return 0===t?"0":1===i||2===i||5===i||0===e||e===n.length-1?t.toExponential():""}}},sn=H.isArray,ln=H.isNullOrUndef,un=H.valueOrDefault,dn=H.valueAtIndexOrDefault;function hn(t,e,n){var i,a=t.getTicks().length,r=Math.min(e,a-1),o=t.getPixelForTick(r),s=t._startPixel,l=t._endPixel;if(!(n&&(i=1===a?Math.max(o-s,l-o):0===e?(t.getPixelForTick(1)-o)/2:(o-t.getPixelForTick(r-1))/2,(o+=r<e?i:-i)<s-1e-6||o>l+1e-6)))return o}function cn(t,e,n,i){var a,r,o,s,l,u,d,h,c,f,g,m,p,v=n.length,b=[],y=[],x=[];for(a=0;a<v;++a){if(s=n[a].label,l=n[a].major?e.major:e.minor,t.font=u=l.string,d=i[u]=i[u]||{data:{},gc:[]},h=l.lineHeight,c=f=0,ln(s)||sn(s)){if(sn(s))for(r=0,o=s.length;r<o;++r)g=s[r],ln(g)||sn(g)||(c=H.measureText(t,d.data,d.gc,c,g),f+=h)}else c=H.measureText(t,d.data,d.gc,c,s),f=h;b.push(c),y.push(f),x.push(h/2)}function _(t){return{width:b[t]||0,height:y[t]||0,offset:x[t]||0}}return function(t,e){H.each(t,(function(t){var n,i=t.gc,a=i.length/2;if(a>e){for(n=0;n<a;++n)delete t.data[i[n]];i.splice(0,a)}}))}(i,v),m=b.indexOf(Math.max.apply(null,b)),p=y.indexOf(Math.max.apply(null,y)),{first:_(0),last:_(v-1),widest:_(m),highest:_(p)}}function fn(t){return t.drawTicks?t.tickMarkLength:0}function gn(t){var e,n;return t.display?(e=H.options._parseFont(t),n=H.options.toPadding(t.padding),e.lineHeight+n.height):0}function mn(t,e){return H.extend(H.options._parseFont({fontFamily:un(e.fontFamily,t.fontFamily),fontSize:un(e.fontSize,t.fontSize),fontStyle:un(e.fontStyle,t.fontStyle),lineHeight:un(e.lineHeight,t.lineHeight)}),{color:H.options.resolve([e.fontColor,t.fontColor,W.global.defaultFontColor])})}function pn(t){var e=mn(t,t.minor);return{minor:e,major:t.major.enabled?mn(t,t.major):e}}function vn(t){var e,n,i,a=[];for(n=0,i=t.length;n<i;++n)void 0!==(e=t[n])._index&&a.push(e);return a}function bn(t,e,n,i){var a,r,o,s,l=un(n,0),u=Math.min(un(i,t.length),t.length),d=0;for(e=Math.ceil(e),i&&(e=(a=i-n)/Math.floor(a/e)),s=l;s<0;)d++,s=Math.round(l+d*e);for(r=Math.max(l,0);r<u;r++)o=t[r],r===s?(o._index=r,d++,s=Math.round(l+d*e)):delete o.label}W._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:on.formatters.values,minor:{},major:{}}});var yn=$.extend({zeroLineIndex:0,getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},_getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]},mergeTicksOptions:function(){},beforeUpdate:function(){H.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var i,a,r,o,s,l=this,u=l.options.ticks,d=u.sampleSize;if(l.beforeUpdate(),l.maxWidth=t,l.maxHeight=e,l.margins=H.extend({left:0,right:0,top:0,bottom:0},n),l._ticks=null,l.ticks=null,l._labelSizes=null,l._maxLabelLines=0,l.longestLabelWidth=0,l.longestTextCache=l.longestTextCache||{},l._gridLineItems=null,l._labelItems=null,l.beforeSetDimensions(),l.setDimensions(),l.afterSetDimensions(),l.beforeDataLimits(),l.determineDataLimits(),l.afterDataLimits(),l.beforeBuildTicks(),o=l.buildTicks()||[],(!(o=l.afterBuildTicks(o)||o)||!o.length)&&l.ticks)for(o=[],i=0,a=l.ticks.length;i<a;++i)o.push({value:l.ticks[i],major:!1});return l._ticks=o,s=d<o.length,r=l._convertTicksToLabels(s?function(t,e){for(var n=[],i=t.length/e,a=0,r=t.length;a<r;a+=i)n.push(t[Math.floor(a)]);return n}(o,d):o),l._configure(),l.beforeCalculateTickRotation(),l.calculateTickRotation(),l.afterCalculateTickRotation(),l.beforeFit(),l.fit(),l.afterFit(),l._ticksToDraw=u.display&&(u.autoSkip||"auto"===u.source)?l._autoSkip(o):o,s&&(r=l._convertTicksToLabels(l._ticksToDraw)),l.ticks=r,l.afterUpdate(),l.minSize},_configure:function(){var t,e,n=this,i=n.options.ticks.reverse;n.isHorizontal()?(t=n.left,e=n.right):(t=n.top,e=n.bottom,i=!i),n._startPixel=t,n._endPixel=e,n._reversePixels=i,n._length=e-t},afterUpdate:function(){H.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){H.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){H.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){H.callback(this.options.beforeDataLimits,[this])},determineDataLimits:H.noop,afterDataLimits:function(){H.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){H.callback(this.options.beforeBuildTicks,[this])},buildTicks:H.noop,afterBuildTicks:function(t){var e=this;return sn(t)&&t.length?H.callback(e.options.afterBuildTicks,[e,t]):(e.ticks=H.callback(e.options.afterBuildTicks,[e,e.ticks])||e.ticks,t)},beforeTickToLabelConversion:function(){H.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){H.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){H.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t,e,n,i,a,r,o,s=this,l=s.options,u=l.ticks,d=s.getTicks().length,h=u.minRotation||0,c=u.maxRotation,f=h;!s._isVisible()||!u.display||h>=c||d<=1||!s.isHorizontal()?s.labelRotation=h:(e=(t=s._getLabelSizes()).widest.width,n=t.highest.height-t.highest.offset,i=Math.min(s.maxWidth,s.chart.width-e),e+6>(a=l.offset?s.maxWidth/d:i/(d-1))&&(a=i/(d-(l.offset?.5:1)),r=s.maxHeight-fn(l.gridLines)-u.padding-gn(l.scaleLabel),o=Math.sqrt(e*e+n*n),f=H.toDegrees(Math.min(Math.asin(Math.min((t.highest.height+6)/a,1)),Math.asin(Math.min(r/o,1))-Math.asin(n/o))),f=Math.max(h,Math.min(c,f))),s.labelRotation=f)},afterCalculateTickRotation:function(){H.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){H.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},n=t.chart,i=t.options,a=i.ticks,r=i.scaleLabel,o=i.gridLines,s=t._isVisible(),l="bottom"===i.position,u=t.isHorizontal();if(u?e.width=t.maxWidth:s&&(e.width=fn(o)+gn(r)),u?s&&(e.height=fn(o)+gn(r)):e.height=t.maxHeight,a.display&&s){var d=pn(a),h=t._getLabelSizes(),c=h.first,f=h.last,g=h.widest,m=h.highest,p=.4*d.minor.lineHeight,v=a.padding;if(u){var b=0!==t.labelRotation,y=H.toRadians(t.labelRotation),x=Math.cos(y),_=Math.sin(y),w=_*g.width+x*(m.height-(b?m.offset:0))+(b?0:p);e.height=Math.min(t.maxHeight,e.height+w+v);var k,M,S=t.getPixelForTick(0)-t.left,D=t.right-t.getPixelForTick(t.getTicks().length-1);b?(k=l?x*c.width+_*c.offset:_*(c.height-c.offset),M=l?_*(f.height-f.offset):x*f.width+_*f.offset):(k=c.width/2,M=f.width/2),t.paddingLeft=Math.max((k-S)*t.width/(t.width-S),0)+3,t.paddingRight=Math.max((M-D)*t.width/(t.width-D),0)+3}else{var C=a.mirror?0:g.width+v+p;e.width=Math.min(t.maxWidth,e.width+C),t.paddingTop=c.height/2,t.paddingBottom=f.height/2}}t.handleMargins(),u?(t.width=t._length=n.width-t.margins.left-t.margins.right,t.height=e.height):(t.width=e.width,t.height=t._length=n.height-t.margins.top-t.margins.bottom)},handleMargins:function(){var t=this;t.margins&&(t.margins.left=Math.max(t.paddingLeft,t.margins.left),t.margins.top=Math.max(t.paddingTop,t.margins.top),t.margins.right=Math.max(t.paddingRight,t.margins.right),t.margins.bottom=Math.max(t.paddingBottom,t.margins.bottom))},afterFit:function(){H.callback(this.options.afterFit,[this])},isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(ln(t))return NaN;if(("number"==typeof t||t instanceof Number)&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},_convertTicksToLabels:function(t){var e,n,i,a=this;for(a.ticks=t.map((function(t){return t.value})),a.beforeTickToLabelConversion(),e=a.convertTicksToLabels(t)||a.ticks,a.afterTickToLabelConversion(),n=0,i=t.length;n<i;++n)t[n].label=e[n];return e},_getLabelSizes:function(){var t=this,e=t._labelSizes;return e||(t._labelSizes=e=cn(t.ctx,pn(t.options.ticks),t.getTicks(),t.longestTextCache),t.longestLabelWidth=e.widest.width),e},_parseValue:function(t){var e,n,i,a;return sn(t)?(e=+this.getRightValue(t[0]),n=+this.getRightValue(t[1]),i=Math.min(e,n),a=Math.max(e,n)):(e=void 0,n=t=+this.getRightValue(t),i=t,a=t),{min:i,max:a,start:e,end:n}},_getScaleLabel:function(t){var e=this._parseValue(t);return void 0!==e.start?"["+e.start+", "+e.end+"]":+this.getRightValue(t)},getLabelForIndex:H.noop,getPixelForValue:H.noop,getValueForPixel:H.noop,getPixelForTick:function(t){var e=this.options.offset,n=this._ticks.length,i=1/Math.max(n-(e?0:1),1);return t<0||t>n-1?null:this.getPixelForDecimal(t*i+(e?i/2:0))},getPixelForDecimal:function(t){return this._reversePixels&&(t=1-t),this._startPixel+t*this._length},getDecimalForPixel:function(t){var e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,n,i,a,r=this.options.ticks,o=this._length,s=r.maxTicksLimit||o/this._tickSize()+1,l=r.major.enabled?function(t){var e,n,i=[];for(e=0,n=t.length;e<n;e++)t[e].major&&i.push(e);return i}(t):[],u=l.length,d=l[0],h=l[u-1];if(u>s)return function(t,e,n){var i,a,r=0,o=e[0];for(n=Math.ceil(n),i=0;i<t.length;i++)a=t[i],i===o?(a._index=i,o=e[++r*n]):delete a.label}(t,l,u/s),vn(t);if(i=function(t,e,n,i){var a,r,o,s,l=function(t){var e,n,i=t.length;if(i<2)return!1;for(n=t[0],e=1;e<i;++e)if(t[e]-t[e-1]!==n)return!1;return n}(t),u=(e.length-1)/i;if(!l)return Math.max(u,1);for(o=0,s=(a=H.math._factorize(l)).length-1;o<s;o++)if((r=a[o])>u)return r;return Math.max(u,1)}(l,t,0,s),u>0){for(e=0,n=u-1;e<n;e++)bn(t,i,l[e],l[e+1]);return a=u>1?(h-d)/(u-1):null,bn(t,i,H.isNullOrUndef(a)?0:d-a,d),bn(t,i,h,H.isNullOrUndef(a)?t.length:h+a),vn(t)}return bn(t,i),vn(t)},_tickSize:function(){var t=this.options.ticks,e=H.toRadians(this.labelRotation),n=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,s=a?a.highest.height+r:0;return this.isHorizontal()?s*n>o*i?o/n:s/i:s*i<o*n?s/n:o/i},_isVisible:function(){var t,e,n,i=this.chart,a=this.options.display;if("auto"!==a)return!!a;for(t=0,e=i.data.datasets.length;t<e;++t)if(i.isDatasetVisible(t)&&((n=i.getDatasetMeta(t)).xAxisID===this.id||n.yAxisID===this.id))return!0;return!1},_computeGridLineItems:function(t){var e,n,i,a,r,o,s,l,u,d,h,c,f,g,m,p,v,b=this,y=b.chart,x=b.options,_=x.gridLines,w=x.position,k=_.offsetGridLines,M=b.isHorizontal(),S=b._ticksToDraw,D=S.length+(k?1:0),C=fn(_),P=[],T=_.drawBorder?dn(_.lineWidth,0,0):0,O=T/2,A=H._alignPixel,F=function(t){return A(y,t,T)};for("top"===w?(e=F(b.bottom),s=b.bottom-C,u=e-O,h=F(t.top)+O,f=t.bottom):"bottom"===w?(e=F(b.top),h=t.top,f=F(t.bottom)-O,s=e+O,u=b.top+C):"left"===w?(e=F(b.right),o=b.right-C,l=e-O,d=F(t.left)+O,c=t.right):(e=F(b.left),d=t.left,c=F(t.right)-O,o=e+O,l=b.left+C),n=0;n<D;++n)i=S[n]||{},ln(i.label)&&n<S.length||(n===b.zeroLineIndex&&x.offset===k?(g=_.zeroLineWidth,m=_.zeroLineColor,p=_.zeroLineBorderDash||[],v=_.zeroLineBorderDashOffset||0):(g=dn(_.lineWidth,n,1),m=dn(_.color,n,"rgba(0,0,0,0.1)"),p=_.borderDash||[],v=_.borderDashOffset||0),void 0!==(a=hn(b,i._index||n,k))&&(r=A(y,a,g),M?o=l=d=c=r:s=u=h=f=r,P.push({tx1:o,ty1:s,tx2:l,ty2:u,x1:d,y1:h,x2:c,y2:f,width:g,color:m,borderDash:p,borderDashOffset:v})));return P.ticksLength=D,P.borderValue=e,P},_computeLabelItems:function(){var t,e,n,i,a,r,o,s,l,u,d,h,c=this,f=c.options,g=f.ticks,m=f.position,p=g.mirror,v=c.isHorizontal(),b=c._ticksToDraw,y=pn(g),x=g.padding,_=fn(f.gridLines),w=-H.toRadians(c.labelRotation),k=[];for("top"===m?(r=c.bottom-_-x,o=w?"left":"center"):"bottom"===m?(r=c.top+_+x,o=w?"right":"center"):"left"===m?(a=c.right-(p?0:_)-x,o=p?"left":"right"):(a=c.left+(p?0:_)+x,o=p?"right":"left"),t=0,e=b.length;t<e;++t)i=(n=b[t]).label,ln(i)||(s=c.getPixelForTick(n._index||t)+g.labelOffset,u=(l=n.major?y.major:y.minor).lineHeight,d=sn(i)?i.length:1,v?(a=s,h="top"===m?((w?1:.5)-d)*u:(w?0:.5)*u):(r=s,h=(1-d)*u/2),k.push({x:a,y:r,rotation:w,label:i,font:l,textOffset:h,textAlign:o}));return k},_drawGrid:function(t){var e=this,n=e.options.gridLines;if(n.display){var i,a,r,o,s,l=e.ctx,u=e.chart,d=H._alignPixel,h=n.drawBorder?dn(n.lineWidth,0,0):0,c=e._gridLineItems||(e._gridLineItems=e._computeGridLineItems(t));for(r=0,o=c.length;r<o;++r)i=(s=c[r]).width,a=s.color,i&&a&&(l.save(),l.lineWidth=i,l.strokeStyle=a,l.setLineDash&&(l.setLineDash(s.borderDash),l.lineDashOffset=s.borderDashOffset),l.beginPath(),n.drawTicks&&(l.moveTo(s.tx1,s.ty1),l.lineTo(s.tx2,s.ty2)),n.drawOnChartArea&&(l.moveTo(s.x1,s.y1),l.lineTo(s.x2,s.y2)),l.stroke(),l.restore());if(h){var f,g,m,p,v=h,b=dn(n.lineWidth,c.ticksLength-1,1),y=c.borderValue;e.isHorizontal()?(f=d(u,e.left,v)-v/2,g=d(u,e.right,b)+b/2,m=p=y):(m=d(u,e.top,v)-v/2,p=d(u,e.bottom,b)+b/2,f=g=y),l.lineWidth=h,l.strokeStyle=dn(n.color,0),l.beginPath(),l.moveTo(f,m),l.lineTo(g,p),l.stroke()}}},_drawLabels:function(){var t=this;if(t.options.ticks.display){var e,n,i,a,r,o,s,l,u=t.ctx,d=t._labelItems||(t._labelItems=t._computeLabelItems());for(e=0,i=d.length;e<i;++e){if(o=(r=d[e]).font,u.save(),u.translate(r.x,r.y),u.rotate(r.rotation),u.font=o.string,u.fillStyle=o.color,u.textBaseline="middle",u.textAlign=r.textAlign,s=r.label,l=r.textOffset,sn(s))for(n=0,a=s.length;n<a;++n)u.fillText(""+s[n],0,l),l+=o.lineHeight;else u.fillText(s,0,l);u.restore()}}},_drawTitle:function(){var t=this,e=t.ctx,n=t.options,i=n.scaleLabel;if(i.display){var a,r,o=un(i.fontColor,W.global.defaultFontColor),s=H.options._parseFont(i),l=H.options.toPadding(i.padding),u=s.lineHeight/2,d=n.position,h=0;if(t.isHorizontal())a=t.left+t.width/2,r="bottom"===d?t.bottom-u-l.bottom:t.top+u+l.top;else{var c="left"===d;a=c?t.left+u+l.top:t.right-u-l.top,r=t.top+t.height/2,h=c?-.5*Math.PI:.5*Math.PI}e.save(),e.translate(a,r),e.rotate(h),e.textAlign="center",e.textBaseline="middle",e.fillStyle=o,e.font=s.string,e.fillText(i.labelString,0,0),e.restore()}},draw:function(t){this._isVisible()&&(this._drawGrid(t),this._drawTitle(),this._drawLabels())},_layers:function(){var t=this,e=t.options,n=e.ticks&&e.ticks.z||0,i=e.gridLines&&e.gridLines.z||0;return t._isVisible()&&n!==i&&t.draw===t._draw?[{z:i,draw:function(){t._drawGrid.apply(t,arguments),t._drawTitle.apply(t,arguments)}},{z:n,draw:function(){t._drawLabels.apply(t,arguments)}}]:[{z:n,draw:function(){t.draw.apply(t,arguments)}}]},_getMatchingVisibleMetas:function(t){var e=this,n=e.isHorizontal();return e.chart._getSortedVisibleDatasetMetas().filter((function(i){return(!t||i.type===t)&&(n?i.xAxisID===e.id:i.yAxisID===e.id)}))}});yn.prototype._draw=yn.prototype.draw;var xn=yn,_n=H.isNullOrUndef,wn=xn.extend({determineDataLimits:function(){var t,e=this,n=e._getLabels(),i=e.options.ticks,a=i.min,r=i.max,o=0,s=n.length-1;void 0!==a&&(t=n.indexOf(a))>=0&&(o=t),void 0!==r&&(t=n.indexOf(r))>=0&&(s=t),e.minIndex=o,e.maxIndex=s,e.min=n[o],e.max=n[s]},buildTicks:function(){var t=this._getLabels(),e=this.minIndex,n=this.maxIndex;this.ticks=0===e&&n===t.length-1?t:t.slice(e,n+1)},getLabelForIndex:function(t,e){var n=this.chart;return n.getDatasetMeta(e).controller._getValueScaleId()===this.id?this.getRightValue(n.data.datasets[e].data[t]):this._getLabels()[t]},_configure:function(){var t=this,e=t.options.offset,n=t.ticks;xn.prototype._configure.call(t),t.isHorizontal()||(t._reversePixels=!t._reversePixels),n&&(t._startValue=t.minIndex-(e?.5:0),t._valueRange=Math.max(n.length-(e?0:1),1))},getPixelForValue:function(t,e,n){var i,a,r,o=this;return _n(e)||_n(n)||(t=o.chart.data.datasets[n].data[e]),_n(t)||(i=o.isHorizontal()?t.x:t.y),(void 0!==i||void 0!==t&&isNaN(e))&&(a=o._getLabels(),t=H.valueOrDefault(i,t),e=-1!==(r=a.indexOf(t))?r:e,isNaN(e)&&(e=t)),o.getPixelForDecimal((e-o._startValue)/o._valueRange)},getPixelForTick:function(t){var e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t],t+this.minIndex)},getValueForPixel:function(t){var e=Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange);return Math.min(Math.max(e,0),this.ticks.length-1)},getBasePixel:function(){return this.bottom}}),kn={position:"bottom"};wn._defaults=kn;var Mn=H.noop,Sn=H.isNullOrUndef;var Dn=xn.extend({getRightValue:function(t){return"string"==typeof t?+t:xn.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var n=H.sign(t.min),i=H.sign(t.max);n<0&&i<0?t.max=0:n>0&&i>0&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==r&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:function(){var t,e=this.options.ticks,n=e.stepSize,i=e.maxTicksLimit;return n?t=Math.ceil(this.max/n)-Math.floor(this.min/n)+1:(t=this._computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t},_computeTickLimit:function(){return Number.POSITIVE_INFINITY},handleDirectionalChanges:Mn,buildTicks:function(){var t=this,e=t.options.ticks,n=t.getTickLimit(),i={maxTicks:n=Math.max(2,n),min:e.min,max:e.max,precision:e.precision,stepSize:H.valueOrDefault(e.fixedStepSize,e.stepSize)},a=t.ticks=function(t,e){var n,i,a,r,o=[],s=t.stepSize,l=s||1,u=t.maxTicks-1,d=t.min,h=t.max,c=t.precision,f=e.min,g=e.max,m=H.niceNum((g-f)/u/l)*l;if(m<1e-14&&Sn(d)&&Sn(h))return[f,g];(r=Math.ceil(g/m)-Math.floor(f/m))>u&&(m=H.niceNum(r*m/u/l)*l),s||Sn(c)?n=Math.pow(10,H._decimalPlaces(m)):(n=Math.pow(10,c),m=Math.ceil(m*n)/n),i=Math.floor(f/m)*m,a=Math.ceil(g/m)*m,s&&(!Sn(d)&&H.almostWhole(d/m,m/1e3)&&(i=d),!Sn(h)&&H.almostWhole(h/m,m/1e3)&&(a=h)),r=(a-i)/m,r=H.almostEquals(r,Math.round(r),m/1e3)?Math.round(r):Math.ceil(r),i=Math.round(i*n)/n,a=Math.round(a*n)/n,o.push(Sn(d)?i:d);for(var p=1;p<r;++p)o.push(Math.round((i+p*m)*n)/n);return o.push(Sn(h)?a:h),o}(i,t);t.handleDirectionalChanges(),t.max=H.max(a),t.min=H.min(a),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),xn.prototype.convertTicksToLabels.call(t)},_configure:function(){var t,e=this,n=e.getTicks(),i=e.min,a=e.max;xn.prototype._configure.call(e),e.options.offset&&n.length&&(i-=t=(a-i)/Math.max(n.length-1,1)/2,a+=t),e._startValue=i,e._endValue=a,e._valueRange=a-i}}),Cn={position:"left",ticks:{callback:on.formatters.linear}};function Pn(t,e,n,i){var a,r,o=t.options,s=function(t,e,n){var i=[n.type,void 0===e&&void 0===n.stack?n.index:"",n.stack].join(".");return void 0===t[i]&&(t[i]={pos:[],neg:[]}),t[i]}(e,o.stacked,n),l=s.pos,u=s.neg,d=i.length;for(a=0;a<d;++a)r=t._parseValue(i[a]),isNaN(r.min)||isNaN(r.max)||n.data[a].hidden||(l[a]=l[a]||0,u[a]=u[a]||0,o.relativePoints?l[a]=100:r.min<0||r.max<0?u[a]+=r.min:l[a]+=r.max)}function Tn(t,e,n){var i,a,r=n.length;for(i=0;i<r;++i)a=t._parseValue(n[i]),isNaN(a.min)||isNaN(a.max)||e.data[i].hidden||(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}var On=Dn.extend({determineDataLimits:function(){var t,e,n,i,a=this,r=a.options,o=a.chart.data.datasets,s=a._getMatchingVisibleMetas(),l=r.stacked,u={},d=s.length;if(a.min=Number.POSITIVE_INFINITY,a.max=Number.NEGATIVE_INFINITY,void 0===l)for(t=0;!l&&t<d;++t)l=void 0!==(e=s[t]).stack;for(t=0;t<d;++t)n=o[(e=s[t]).index].data,l?Pn(a,u,e,n):Tn(a,e,n);H.each(u,(function(t){i=t.pos.concat(t.neg),a.min=Math.min(a.min,H.min(i)),a.max=Math.max(a.max,H.max(i))})),a.min=H.isFinite(a.min)&&!isNaN(a.min)?a.min:0,a.max=H.isFinite(a.max)&&!isNaN(a.max)?a.max:1,a.handleTickRangeOptions()},_computeTickLimit:function(){var t;return this.isHorizontal()?Math.ceil(this.width/40):(t=H.options._parseFont(this.options.ticks),Math.ceil(this.height/t.lineHeight))},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){return this.getPixelForDecimal((+this.getRightValue(t)-this._startValue)/this._valueRange)},getValueForPixel:function(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange},getPixelForTick:function(t){var e=this.ticksAsNumbers;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])}}),An=Cn;On._defaults=An;var Fn=H.valueOrDefault,In=H.math.log10;var Ln={position:"left",ticks:{callback:on.formatters.logarithmic}};function Rn(t,e){return H.isFinite(t)&&t>=0?t:e}var Nn=xn.extend({determineDataLimits:function(){var t,e,n,i,a,r,o=this,s=o.options,l=o.chart,u=l.data.datasets,d=o.isHorizontal();function h(t){return d?t.xAxisID===o.id:t.yAxisID===o.id}o.min=Number.POSITIVE_INFINITY,o.max=Number.NEGATIVE_INFINITY,o.minNotZero=Number.POSITIVE_INFINITY;var c=s.stacked;if(void 0===c)for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e)&&void 0!==e.stack){c=!0;break}if(s.stacked||c){var f={};for(t=0;t<u.length;t++){var g=[(e=l.getDatasetMeta(t)).type,void 0===s.stacked&&void 0===e.stack?t:"",e.stack].join(".");if(l.isDatasetVisible(t)&&h(e))for(void 0===f[g]&&(f[g]=[]),a=0,r=(i=u[t].data).length;a<r;a++){var m=f[g];n=o._parseValue(i[a]),isNaN(n.min)||isNaN(n.max)||e.data[a].hidden||n.min<0||n.max<0||(m[a]=m[a]||0,m[a]+=n.max)}}H.each(f,(function(t){if(t.length>0){var e=H.min(t),n=H.max(t);o.min=Math.min(o.min,e),o.max=Math.max(o.max,n)}}))}else for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e))for(a=0,r=(i=u[t].data).length;a<r;a++)n=o._parseValue(i[a]),isNaN(n.min)||isNaN(n.max)||e.data[a].hidden||n.min<0||n.max<0||(o.min=Math.min(n.min,o.min),o.max=Math.max(n.max,o.max),0!==n.min&&(o.minNotZero=Math.min(n.min,o.minNotZero)));o.min=H.isFinite(o.min)?o.min:null,o.max=H.isFinite(o.max)?o.max:null,o.minNotZero=H.isFinite(o.minNotZero)?o.minNotZero:null,this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;t.min=Rn(e.min,t.min),t.max=Rn(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(In(t.min))-1),t.max=Math.pow(10,Math.floor(In(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(In(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(In(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(In(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,n=!t.isHorizontal(),i={min:Rn(e.min),max:Rn(e.max)},a=t.ticks=function(t,e){var n,i,a=[],r=Fn(t.min,Math.pow(10,Math.floor(In(e.min)))),o=Math.floor(In(e.max)),s=Math.ceil(e.max/Math.pow(10,o));0===r?(n=Math.floor(In(e.minNotZero)),i=Math.floor(e.minNotZero/Math.pow(10,n)),a.push(r),r=i*Math.pow(10,n)):(n=Math.floor(In(r)),i=Math.floor(r/Math.pow(10,n)));var l=n<0?Math.pow(10,Math.abs(n)):1;do{a.push(r),10===++i&&(i=1,l=++n>=0?1:l),r=Math.round(i*Math.pow(10,n)*l)/l}while(n<o||n===o&&i<s);var u=Fn(t.max,r);return a.push(u),a}(i,t);t.max=H.max(a),t.min=H.min(a),e.reverse?(n=!n,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),n&&a.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),xn.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){var e=this.tickValues;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])},_getFirstTickValue:function(t){var e=Math.floor(In(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},_configure:function(){var t=this,e=t.min,n=0;xn.prototype._configure.call(t),0===e&&(e=t._getFirstTickValue(t.minNotZero),n=Fn(t.options.ticks.fontSize,W.global.defaultFontSize)/t._length),t._startValue=In(e),t._valueOffset=n,t._valueRange=(In(t.max)-In(e))/(1-n)},getPixelForValue:function(t){var e=this,n=0;return(t=+e.getRightValue(t))>e.min&&t>0&&(n=(In(t)-e._startValue)/e._valueRange+e._valueOffset),e.getPixelForDecimal(n)},getValueForPixel:function(t){var e=this,n=e.getDecimalForPixel(t);return 0===n&&0===e.min?0:Math.pow(10,e._startValue+(n-e._valueOffset)*e._valueRange)}}),Wn=Ln;Nn._defaults=Wn;var Yn=H.valueOrDefault,zn=H.valueAtIndexOrDefault,En=H.options.resolve,Vn={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,borderDash:[],borderDashOffset:0},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:on.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function Hn(t){var e=t.ticks;return e.display&&t.display?Yn(e.fontSize,W.global.defaultFontSize)+2*e.backdropPaddingY:0}function Bn(t,e,n,i,a){return t===i||t===a?{start:e-n/2,end:e+n/2}:t<i||t>a?{start:e-n,end:e}:{start:e,end:e+n}}function jn(t){return 0===t||180===t?"center":t<180?"left":"right"}function Un(t,e,n,i){var a,r,o=n.y+i/2;if(H.isArray(e))for(a=0,r=e.length;a<r;++a)t.fillText(e[a],n.x,o),o+=i;else t.fillText(e,n.x,o)}function Gn(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function qn(t){return H.isNumber(t)?t:0}var Zn=Dn.extend({setDimensions:function(){var t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=Hn(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;H.each(e.data.datasets,(function(a,r){if(e.isDatasetVisible(r)){var o=e.getDatasetMeta(r);H.each(a.data,(function(e,a){var r=+t.getRightValue(e);isNaN(r)||o.data[a].hidden||(n=Math.min(r,n),i=Math.max(r,i))}))}})),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=i===Number.NEGATIVE_INFINITY?0:i,t.handleTickRangeOptions()},_computeTickLimit:function(){return Math.ceil(this.drawingArea/Hn(this.options))},convertTicksToLabels:function(){var t=this;Dn.prototype.convertTicksToLabels.call(t),t.pointLabels=t.chart.data.labels.map((function(){var e=H.callback(t.options.pointLabels.callback,arguments,t);return e||0===e?e:""}))},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t=this.options;t.display&&t.pointLabels.display?function(t){var e,n,i,a=H.options._parseFont(t.options.pointLabels),r={l:0,r:t.width,t:0,b:t.height-t.paddingTop},o={};t.ctx.font=a.string,t._pointLabelSizes=[];var s,l,u,d=t.chart.data.labels.length;for(e=0;e<d;e++){i=t.getPointPosition(e,t.drawingArea+5),s=t.ctx,l=a.lineHeight,u=t.pointLabels[e],n=H.isArray(u)?{w:H.longestText(s,s.font,u),h:u.length*l}:{w:s.measureText(u).width,h:l},t._pointLabelSizes[e]=n;var h=t.getIndexAngle(e),c=H.toDegrees(h)%360,f=Bn(c,i.x,n.w,0,180),g=Bn(c,i.y,n.h,90,270);f.start<r.l&&(r.l=f.start,o.l=h),f.end>r.r&&(r.r=f.end,o.r=h),g.start<r.t&&(r.t=g.start,o.t=h),g.end>r.b&&(r.b=g.end,o.b=h)}t.setReductions(t.drawingArea,r,o)}(this):this.setCenterPoint(0,0,0,0)},setReductions:function(t,e,n){var i=this,a=e.l/Math.sin(n.l),r=Math.max(e.r-i.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),s=-Math.max(e.b-(i.height-i.paddingTop),0)/Math.cos(n.b);a=qn(a),r=qn(r),o=qn(o),s=qn(s),i.drawingArea=Math.min(Math.floor(t-(a+r)/2),Math.floor(t-(o+s)/2)),i.setCenterPoint(a,r,o,s)},setCenterPoint:function(t,e,n,i){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=n+a.drawingArea,l=a.height-a.paddingTop-i-a.drawingArea;a.xCenter=Math.floor((o+r)/2+a.left),a.yCenter=Math.floor((s+l)/2+a.top+a.paddingTop)},getIndexAngle:function(t){var e=this.chart,n=(t*(360/e.data.labels.length)+((e.options||{}).startAngle||0))%360;return(n<0?n+360:n)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(H.isNullOrUndef(t))return NaN;var n=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this.getIndexAngle(t)-Math.PI/2;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(t){var e=this.min,n=this.max;return this.getPointPositionForValue(t||0,this.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0)},_drawGrid:function(){var t,e,n,i=this,a=i.ctx,r=i.options,o=r.gridLines,s=r.angleLines,l=Yn(s.lineWidth,o.lineWidth),u=Yn(s.color,o.color);if(r.pointLabels.display&&function(t){var e=t.ctx,n=t.options,i=n.pointLabels,a=Hn(n),r=t.getDistanceFromCenterForValue(n.ticks.reverse?t.min:t.max),o=H.options._parseFont(i);e.save(),e.font=o.string,e.textBaseline="middle";for(var s=t.chart.data.labels.length-1;s>=0;s--){var l=0===s?a/2:0,u=t.getPointPosition(s,r+l+5),d=zn(i.fontColor,s,W.global.defaultFontColor);e.fillStyle=d;var h=t.getIndexAngle(s),c=H.toDegrees(h);e.textAlign=jn(c),Gn(c,t._pointLabelSizes[s],u),Un(e,t.pointLabels[s],u,o.lineHeight)}e.restore()}(i),o.display&&H.each(i.ticks,(function(t,n){0!==n&&(e=i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]),function(t,e,n,i){var a,r=t.ctx,o=e.circular,s=t.chart.data.labels.length,l=zn(e.color,i-1),u=zn(e.lineWidth,i-1);if((o||s)&&l&&u){if(r.save(),r.strokeStyle=l,r.lineWidth=u,r.setLineDash&&(r.setLineDash(e.borderDash||[]),r.lineDashOffset=e.borderDashOffset||0),r.beginPath(),o)r.arc(t.xCenter,t.yCenter,n,0,2*Math.PI);else{a=t.getPointPosition(0,n),r.moveTo(a.x,a.y);for(var d=1;d<s;d++)a=t.getPointPosition(d,n),r.lineTo(a.x,a.y)}r.closePath(),r.stroke(),r.restore()}}(i,o,e,n))})),s.display&&l&&u){for(a.save(),a.lineWidth=l,a.strokeStyle=u,a.setLineDash&&(a.setLineDash(En([s.borderDash,o.borderDash,[]])),a.lineDashOffset=En([s.borderDashOffset,o.borderDashOffset,0])),t=i.chart.data.labels.length-1;t>=0;t--)e=i.getDistanceFromCenterForValue(r.ticks.reverse?i.min:i.max),n=i.getPointPosition(t,e),a.beginPath(),a.moveTo(i.xCenter,i.yCenter),a.lineTo(n.x,n.y),a.stroke();a.restore()}},_drawLabels:function(){var t=this,e=t.ctx,n=t.options.ticks;if(n.display){var i,a,r=t.getIndexAngle(0),o=H.options._parseFont(n),s=Yn(n.fontColor,W.global.defaultFontColor);e.save(),e.font=o.string,e.translate(t.xCenter,t.yCenter),e.rotate(r),e.textAlign="center",e.textBaseline="middle",H.each(t.ticks,(function(r,l){(0!==l||n.reverse)&&(i=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),n.showLabelBackdrop&&(a=e.measureText(r).width,e.fillStyle=n.backdropColor,e.fillRect(-a/2-n.backdropPaddingX,-i-o.size/2-n.backdropPaddingY,a+2*n.backdropPaddingX,o.size+2*n.backdropPaddingY)),e.fillStyle=s,e.fillText(r,0,-i))})),e.restore()}},_drawTitle:H.noop}),$n=Vn;Zn._defaults=$n;var Xn=H._deprecated,Kn=H.options.resolve,Jn=H.valueOrDefault,Qn=Number.MIN_SAFE_INTEGER||-9007199254740991,ti=Number.MAX_SAFE_INTEGER||9007199254740991,ei={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ni=Object.keys(ei);function ii(t,e){return t-e}function ai(t){return H.valueOrDefault(t.time.min,t.ticks.min)}function ri(t){return H.valueOrDefault(t.time.max,t.ticks.max)}function oi(t,e,n,i){var a=function(t,e,n){for(var i,a,r,o=0,s=t.length-1;o>=0&&o<=s;){if(a=t[(i=o+s>>1)-1]||null,r=t[i],!a)return{lo:null,hi:r};if(r[e]<n)o=i+1;else{if(!(a[e]>n))return{lo:a,hi:r};s=i-1}}return{lo:r,hi:null}}(t,e,n),r=a.lo?a.hi?a.lo:t[t.length-2]:t[0],o=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=o[e]-r[e],l=s?(n-r[e])/s:0,u=(o[i]-r[i])*l;return r[i]+u}function si(t,e){var n=t._adapter,i=t.options.time,a=i.parser,r=a||i.format,o=e;return"function"==typeof a&&(o=a(o)),H.isFinite(o)||(o="string"==typeof r?n.parse(o,r):n.parse(o)),null!==o?+o:(a||"function"!=typeof r||(o=r(e),H.isFinite(o)||(o=n.parse(o))),o)}function li(t,e){if(H.isNullOrUndef(e))return null;var n=t.options.time,i=si(t,t.getRightValue(e));return null===i?i:(n.round&&(i=+t._adapter.startOf(i,n.round)),i)}function ui(t,e,n,i){var a,r,o,s=ni.length;for(a=ni.indexOf(t);a<s-1;++a)if(o=(r=ei[ni[a]]).steps?r.steps:ti,r.common&&Math.ceil((n-e)/(o*r.size))<=i)return ni[a];return ni[s-1]}function di(t,e,n){var i,a,r=[],o={},s=e.length;for(i=0;i<s;++i)o[a=e[i]]=i,r.push({value:a,major:!1});return 0!==s&&n?function(t,e,n,i){var a,r,o=t._adapter,s=+o.startOf(e[0].value,i),l=e[e.length-1].value;for(a=s;a<=l;a=+o.add(a,1,i))(r=n[a])>=0&&(e[r].major=!0);return e}(t,r,o,n):r}var hi=xn.extend({initialize:function(){this.mergeTicksOptions(),xn.prototype.initialize.call(this)},update:function(){var t=this,e=t.options,n=e.time||(e.time={}),i=t._adapter=new rn._date(e.adapters.date);return Xn("time scale",n.format,"time.format","time.parser"),Xn("time scale",n.min,"time.min","ticks.min"),Xn("time scale",n.max,"time.max","ticks.max"),H.mergeIf(n.displayFormats,i.formats()),xn.prototype.update.apply(t,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),xn.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,n,i,a,r,o,s=this,l=s.chart,u=s._adapter,d=s.options,h=d.time.unit||"day",c=ti,f=Qn,g=[],m=[],p=[],v=s._getLabels();for(t=0,n=v.length;t<n;++t)p.push(li(s,v[t]));for(t=0,n=(l.data.datasets||[]).length;t<n;++t)if(l.isDatasetVisible(t))if(a=l.data.datasets[t].data,H.isObject(a[0]))for(m[t]=[],e=0,i=a.length;e<i;++e)r=li(s,a[e]),g.push(r),m[t][e]=r;else m[t]=p.slice(0),o||(g=g.concat(p),o=!0);else m[t]=[];p.length&&(c=Math.min(c,p[0]),f=Math.max(f,p[p.length-1])),g.length&&(g=n>1?function(t){var e,n,i,a={},r=[];for(e=0,n=t.length;e<n;++e)a[i=t[e]]||(a[i]=!0,r.push(i));return r}(g).sort(ii):g.sort(ii),c=Math.min(c,g[0]),f=Math.max(f,g[g.length-1])),c=li(s,ai(d))||c,f=li(s,ri(d))||f,c=c===ti?+u.startOf(Date.now(),h):c,f=f===Qn?+u.endOf(Date.now(),h)+1:f,s.min=Math.min(c,f),s.max=Math.max(c+1,f),s._table=[],s._timestamps={data:g,datasets:m,labels:p}},buildTicks:function(){var t,e,n,i=this,a=i.min,r=i.max,o=i.options,s=o.ticks,l=o.time,u=i._timestamps,d=[],h=i.getLabelCapacity(a),c=s.source,f=o.distribution;for(u="data"===c||"auto"===c&&"series"===f?u.data:"labels"===c?u.labels:function(t,e,n,i){var a,r=t._adapter,o=t.options,s=o.time,l=s.unit||ui(s.minUnit,e,n,i),u=Kn([s.stepSize,s.unitStepSize,1]),d="week"===l&&s.isoWeekday,h=e,c=[];if(d&&(h=+r.startOf(h,"isoWeek",d)),h=+r.startOf(h,d?"day":l),r.diff(n,e,l)>1e5*u)throw e+" and "+n+" are too far apart with stepSize of "+u+" "+l;for(a=h;a<n;a=+r.add(a,u,l))c.push(a);return a!==n&&"ticks"!==o.bounds||c.push(a),c}(i,a,r,h),"ticks"===o.bounds&&u.length&&(a=u[0],r=u[u.length-1]),a=li(i,ai(o))||a,r=li(i,ri(o))||r,t=0,e=u.length;t<e;++t)(n=u[t])>=a&&n<=r&&d.push(n);return i.min=a,i.max=r,i._unit=l.unit||(s.autoSkip?ui(l.minUnit,i.min,i.max,h):function(t,e,n,i,a){var r,o;for(r=ni.length-1;r>=ni.indexOf(n);r--)if(o=ni[r],ei[o].common&&t._adapter.diff(a,i,o)>=e-1)return o;return ni[n?ni.indexOf(n):0]}(i,d.length,l.minUnit,i.min,i.max)),i._majorUnit=s.major.enabled&&"year"!==i._unit?function(t){for(var e=ni.indexOf(t)+1,n=ni.length;e<n;++e)if(ei[ni[e]].common)return ni[e]}(i._unit):void 0,i._table=function(t,e,n,i){if("linear"===i||!t.length)return[{time:e,pos:0},{time:n,pos:1}];var a,r,o,s,l,u=[],d=[e];for(a=0,r=t.length;a<r;++a)(s=t[a])>e&&s<n&&d.push(s);for(d.push(n),a=0,r=d.length;a<r;++a)l=d[a+1],o=d[a-1],s=d[a],void 0!==o&&void 0!==l&&Math.round((l+o)/2)===s||u.push({time:s,pos:a/(r-1)});return u}(i._timestamps.data,a,r,f),i._offsets=function(t,e,n,i,a){var r,o,s=0,l=0;return a.offset&&e.length&&(r=oi(t,"time",e[0],"pos"),s=1===e.length?1-r:(oi(t,"time",e[1],"pos")-r)/2,o=oi(t,"time",e[e.length-1],"pos"),l=1===e.length?o:(o-oi(t,"time",e[e.length-2],"pos"))/2),{start:s,end:l,factor:1/(s+1+l)}}(i._table,d,0,0,o),s.reverse&&d.reverse(),di(i,d,i._majorUnit)},getLabelForIndex:function(t,e){var n=this,i=n._adapter,a=n.chart.data,r=n.options.time,o=a.labels&&t<a.labels.length?a.labels[t]:"",s=a.datasets[e].data[t];return H.isObject(s)&&(o=n.getRightValue(s)),r.tooltipFormat?i.format(si(n,o),r.tooltipFormat):"string"==typeof o?o:i.format(si(n,o),r.displayFormats.datetime)},tickFormatFunction:function(t,e,n,i){var a=this._adapter,r=this.options,o=r.time.displayFormats,s=o[this._unit],l=this._majorUnit,u=o[l],d=n[e],h=r.ticks,c=l&&u&&d&&d.major,f=a.format(t,i||(c?u:s)),g=c?h.major:h.minor,m=Kn([g.callback,g.userCallback,h.callback,h.userCallback]);return m?m(f,e,n):f},convertTicksToLabels:function(t){var e,n,i=[];for(e=0,n=t.length;e<n;++e)i.push(this.tickFormatFunction(t[e].value,e,t));return i},getPixelForOffset:function(t){var e=this._offsets,n=oi(this._table,"time",t,"pos");return this.getPixelForDecimal((e.start+n)*e.factor)},getPixelForValue:function(t,e,n){var i=null;if(void 0!==e&&void 0!==n&&(i=this._timestamps.datasets[n][e]),null===i&&(i=li(this,t)),null!==i)return this.getPixelForOffset(i)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end,i=oi(this._table,"pos",n,"time");return this._adapter._create(i)},_getLabelSize:function(t){var e=this.options.ticks,n=this.ctx.measureText(t).width,i=H.toRadians(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(i),r=Math.sin(i),o=Jn(e.fontSize,W.global.defaultFontSize);return{w:n*a+o*r,h:n*r+o*a}},getLabelWidth:function(t){return this._getLabelSize(t).w},getLabelCapacity:function(t){var e=this,n=e.options.time,i=n.displayFormats,a=i[n.unit]||i.millisecond,r=e.tickFormatFunction(t,0,di(e,[t],e._majorUnit),a),o=e._getLabelSize(r),s=Math.floor(e.isHorizontal()?e.width/o.w:e.height/o.h);return e.options.offset&&s--,s>0?s:1}}),ci={position:"bottom",distribution:"linear",bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}};hi._defaults=ci;var fi={category:wn,linear:On,logarithmic:Nn,radialLinear:Zn,time:hi},gi=e((function(e,n){e.exports=function(){var n,i;function a(){return n.apply(null,arguments)}function r(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function o(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function s(t){return void 0===t}function l(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function u(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function d(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function h(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function c(t,e){for(var n in e)h(e,n)&&(t[n]=e[n]);return h(e,"toString")&&(t.toString=e.toString),h(e,"valueOf")&&(t.valueOf=e.valueOf),t}function f(t,e,n,i){return Ie(t,e,n,i,!0).utc()}function g(t){return null==t._pf&&(t._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),t._pf}function m(t){if(null==t._isValid){var e=g(t),n=i.call(e.parsedDateParts,(function(t){return null!=t})),a=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(a=a&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return a;t._isValid=a}return t._isValid}function p(t){var e=f(NaN);return null!=t?c(g(e),t):g(e).userInvalidated=!0,e}i=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;i<n;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};var v=a.momentProperties=[];function b(t,e){var n,i,a;if(s(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),s(e._i)||(t._i=e._i),s(e._f)||(t._f=e._f),s(e._l)||(t._l=e._l),s(e._strict)||(t._strict=e._strict),s(e._tzm)||(t._tzm=e._tzm),s(e._isUTC)||(t._isUTC=e._isUTC),s(e._offset)||(t._offset=e._offset),s(e._pf)||(t._pf=g(e)),s(e._locale)||(t._locale=e._locale),v.length>0)for(n=0;n<v.length;n++)s(a=e[i=v[n]])||(t[i]=a);return t}var y=!1;function x(t){b(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===y&&(y=!0,a.updateOffset(this),y=!1)}function _(t){return t instanceof x||null!=t&&null!=t._isAMomentObject}function w(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function k(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=w(e)),n}function M(t,e,n){var i,a=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),o=0;for(i=0;i<a;i++)(n&&t[i]!==e[i]||!n&&k(t[i])!==k(e[i]))&&o++;return o+r}function S(t){!1===a.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function D(t,e){var n=!0;return c((function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,t),n){for(var i,r=[],o=0;o<arguments.length;o++){if(i="","object"==typeof arguments[o]){for(var s in i+="\n["+o+"] ",arguments[0])i+=s+": "+arguments[0][s]+", ";i=i.slice(0,-2)}else i=arguments[o];r.push(i)}S(t+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),n=!1}return e.apply(this,arguments)}),e)}var C,P={};function T(t,e){null!=a.deprecationHandler&&a.deprecationHandler(t,e),P[t]||(S(e),P[t]=!0)}function O(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function A(t,e){var n,i=c({},t);for(n in e)h(e,n)&&(o(t[n])&&o(e[n])?(i[n]={},c(i[n],t[n]),c(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);for(n in t)h(t,n)&&!h(e,n)&&o(t[n])&&(i[n]=c({},i[n]));return i}function F(t){null!=t&&this.set(t)}a.suppressDeprecationWarnings=!1,a.deprecationHandler=null,C=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)h(t,e)&&n.push(e);return n};var I={};function L(t,e){var n=t.toLowerCase();I[n]=I[n+"s"]=I[e]=t}function R(t){return"string"==typeof t?I[t]||I[t.toLowerCase()]:void 0}function N(t){var e,n,i={};for(n in t)h(t,n)&&(e=R(n))&&(i[e]=t[n]);return i}var W={};function Y(t,e){W[t]=e}function z(t,e,n){var i=""+Math.abs(t),a=e-i.length;return(t>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+i}var E=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,V=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,H={},B={};function j(t,e,n,i){var a=i;"string"==typeof i&&(a=function(){return this[i]()}),t&&(B[t]=a),e&&(B[e[0]]=function(){return z(a.apply(this,arguments),e[1],e[2])}),n&&(B[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),t)})}function U(t,e){return t.isValid()?(e=G(e,t.localeData()),H[e]=H[e]||function(t){var e,n,i,a=t.match(E);for(e=0,n=a.length;e<n;e++)B[a[e]]?a[e]=B[a[e]]:a[e]=(i=a[e]).match(/\[[\s\S]/)?i.replace(/^\[|\]$/g,""):i.replace(/\\/g,"");return function(e){var i,r="";for(i=0;i<n;i++)r+=O(a[i])?a[i].call(e,t):a[i];return r}}(e),H[e](t)):t.localeData().invalidDate()}function G(t,e){var n=5;function i(t){return e.longDateFormat(t)||t}for(V.lastIndex=0;n>=0&&V.test(t);)t=t.replace(V,i),V.lastIndex=0,n-=1;return t}var q=/\d/,Z=/\d\d/,$=/\d{3}/,X=/\d{4}/,K=/[+-]?\d{6}/,J=/\d\d?/,Q=/\d\d\d\d?/,tt=/\d\d\d\d\d\d?/,et=/\d{1,3}/,nt=/\d{1,4}/,it=/[+-]?\d{1,6}/,at=/\d+/,rt=/[+-]?\d+/,ot=/Z|[+-]\d\d:?\d\d/gi,st=/Z|[+-]\d\d(?::?\d\d)?/gi,lt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,ut={};function dt(t,e,n){ut[t]=O(e)?e:function(t,i){return t&&n?n:e}}function ht(t,e){return h(ut,t)?ut[t](e._strict,e._locale):new RegExp(ct(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(t,e,n,i,a){return e||n||i||a}))))}function ct(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var ft={};function gt(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),l(e)&&(i=function(t,n){n[e]=k(t)}),n=0;n<t.length;n++)ft[t[n]]=i}function mt(t,e){gt(t,(function(t,n,i,a){i._w=i._w||{},e(t,i._w,i,a)}))}function pt(t,e,n){null!=e&&h(ft,t)&&ft[t](e,n._a,n,t)}var vt=0,bt=1,yt=2,xt=3,_t=4,wt=5,kt=6,Mt=7,St=8;function Dt(t){return Ct(t)?366:365}function Ct(t){return t%4==0&&t%100!=0||t%400==0}j("Y",0,0,(function(){var t=this.year();return t<=9999?""+t:"+"+t})),j(0,["YY",2],0,(function(){return this.year()%100})),j(0,["YYYY",4],0,"year"),j(0,["YYYYY",5],0,"year"),j(0,["YYYYYY",6,!0],0,"year"),L("year","y"),Y("year",1),dt("Y",rt),dt("YY",J,Z),dt("YYYY",nt,X),dt("YYYYY",it,K),dt("YYYYYY",it,K),gt(["YYYYY","YYYYYY"],vt),gt("YYYY",(function(t,e){e[vt]=2===t.length?a.parseTwoDigitYear(t):k(t)})),gt("YY",(function(t,e){e[vt]=a.parseTwoDigitYear(t)})),gt("Y",(function(t,e){e[vt]=parseInt(t,10)})),a.parseTwoDigitYear=function(t){return k(t)+(k(t)>68?1900:2e3)};var Pt,Tt=Ot("FullYear",!0);function Ot(t,e){return function(n){return null!=n?(Ft(this,t,n),a.updateOffset(this,e),this):At(this,t)}}function At(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function Ft(t,e,n){t.isValid()&&!isNaN(n)&&("FullYear"===e&&Ct(t.year())&&1===t.month()&&29===t.date()?t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),It(n,t.month())):t._d["set"+(t._isUTC?"UTC":"")+e](n))}function It(t,e){if(isNaN(t)||isNaN(e))return NaN;var n=function(t,e){return(t%e+e)%e}(e,12);return t+=(e-n)/12,1===n?Ct(t)?29:28:31-n%7%2}Pt=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},j("M",["MM",2],"Mo",(function(){return this.month()+1})),j("MMM",0,0,(function(t){return this.localeData().monthsShort(this,t)})),j("MMMM",0,0,(function(t){return this.localeData().months(this,t)})),L("month","M"),Y("month",8),dt("M",J),dt("MM",J,Z),dt("MMM",(function(t,e){return e.monthsShortRegex(t)})),dt("MMMM",(function(t,e){return e.monthsRegex(t)})),gt(["M","MM"],(function(t,e){e[bt]=k(t)-1})),gt(["MMM","MMMM"],(function(t,e,n,i){var a=n._locale.monthsParse(t,i,n._strict);null!=a?e[bt]=a:g(n).invalidMonth=t}));var Lt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Rt="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Nt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Wt(t,e,n){var i,a,r,o=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)r=f([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===e?-1!==(a=Pt.call(this._shortMonthsParse,o))?a:null:-1!==(a=Pt.call(this._longMonthsParse,o))?a:null:"MMM"===e?-1!==(a=Pt.call(this._shortMonthsParse,o))?a:-1!==(a=Pt.call(this._longMonthsParse,o))?a:null:-1!==(a=Pt.call(this._longMonthsParse,o))?a:-1!==(a=Pt.call(this._shortMonthsParse,o))?a:null}function Yt(t,e){var n;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=k(e);else if(!l(e=t.localeData().monthsParse(e)))return t;return n=Math.min(t.date(),It(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function zt(t){return null!=t?(Yt(this,t),a.updateOffset(this,!0),this):At(this,"Month")}var Et=lt,Vt=lt;function Ht(){function t(t,e){return e.length-t.length}var e,n,i=[],a=[],r=[];for(e=0;e<12;e++)n=f([2e3,e]),i.push(this.monthsShort(n,"")),a.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(i.sort(t),a.sort(t),r.sort(t),e=0;e<12;e++)i[e]=ct(i[e]),a[e]=ct(a[e]);for(e=0;e<24;e++)r[e]=ct(r[e]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function Bt(t,e,n,i,a,r,o){var s;return t<100&&t>=0?(s=new Date(t+400,e,n,i,a,r,o),isFinite(s.getFullYear())&&s.setFullYear(t)):s=new Date(t,e,n,i,a,r,o),s}function jt(t){var e;if(t<100&&t>=0){var n=Array.prototype.slice.call(arguments);n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)}else e=new Date(Date.UTC.apply(null,arguments));return e}function Ut(t,e,n){var i=7+e-n;return-(7+jt(t,0,i).getUTCDay()-e)%7+i-1}function Gt(t,e,n,i,a){var r,o,s=1+7*(e-1)+(7+n-i)%7+Ut(t,i,a);return s<=0?o=Dt(r=t-1)+s:s>Dt(t)?(r=t+1,o=s-Dt(t)):(r=t,o=s),{year:r,dayOfYear:o}}function qt(t,e,n){var i,a,r=Ut(t.year(),e,n),o=Math.floor((t.dayOfYear()-r-1)/7)+1;return o<1?i=o+Zt(a=t.year()-1,e,n):o>Zt(t.year(),e,n)?(i=o-Zt(t.year(),e,n),a=t.year()+1):(a=t.year(),i=o),{week:i,year:a}}function Zt(t,e,n){var i=Ut(t,e,n),a=Ut(t+1,e,n);return(Dt(t)-i+a)/7}function $t(t,e){return t.slice(e,7).concat(t.slice(0,e))}j("w",["ww",2],"wo","week"),j("W",["WW",2],"Wo","isoWeek"),L("week","w"),L("isoWeek","W"),Y("week",5),Y("isoWeek",5),dt("w",J),dt("ww",J,Z),dt("W",J),dt("WW",J,Z),mt(["w","ww","W","WW"],(function(t,e,n,i){e[i.substr(0,1)]=k(t)})),j("d",0,"do","day"),j("dd",0,0,(function(t){return this.localeData().weekdaysMin(this,t)})),j("ddd",0,0,(function(t){return this.localeData().weekdaysShort(this,t)})),j("dddd",0,0,(function(t){return this.localeData().weekdays(this,t)})),j("e",0,0,"weekday"),j("E",0,0,"isoWeekday"),L("day","d"),L("weekday","e"),L("isoWeekday","E"),Y("day",11),Y("weekday",11),Y("isoWeekday",11),dt("d",J),dt("e",J),dt("E",J),dt("dd",(function(t,e){return e.weekdaysMinRegex(t)})),dt("ddd",(function(t,e){return e.weekdaysShortRegex(t)})),dt("dddd",(function(t,e){return e.weekdaysRegex(t)})),mt(["dd","ddd","dddd"],(function(t,e,n,i){var a=n._locale.weekdaysParse(t,i,n._strict);null!=a?e.d=a:g(n).invalidWeekday=t})),mt(["d","e","E"],(function(t,e,n,i){e[i]=k(t)}));var Xt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Kt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Jt="Su_Mo_Tu_We_Th_Fr_Sa".split("_");function Qt(t,e,n){var i,a,r,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)r=f([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===e?-1!==(a=Pt.call(this._weekdaysParse,o))?a:null:"ddd"===e?-1!==(a=Pt.call(this._shortWeekdaysParse,o))?a:null:-1!==(a=Pt.call(this._minWeekdaysParse,o))?a:null:"dddd"===e?-1!==(a=Pt.call(this._weekdaysParse,o))?a:-1!==(a=Pt.call(this._shortWeekdaysParse,o))?a:-1!==(a=Pt.call(this._minWeekdaysParse,o))?a:null:"ddd"===e?-1!==(a=Pt.call(this._shortWeekdaysParse,o))?a:-1!==(a=Pt.call(this._weekdaysParse,o))?a:-1!==(a=Pt.call(this._minWeekdaysParse,o))?a:null:-1!==(a=Pt.call(this._minWeekdaysParse,o))?a:-1!==(a=Pt.call(this._weekdaysParse,o))?a:-1!==(a=Pt.call(this._shortWeekdaysParse,o))?a:null}var te=lt,ee=lt,ne=lt;function ie(){function t(t,e){return e.length-t.length}var e,n,i,a,r,o=[],s=[],l=[],u=[];for(e=0;e<7;e++)n=f([2e3,1]).day(e),i=this.weekdaysMin(n,""),a=this.weekdaysShort(n,""),r=this.weekdays(n,""),o.push(i),s.push(a),l.push(r),u.push(i),u.push(a),u.push(r);for(o.sort(t),s.sort(t),l.sort(t),u.sort(t),e=0;e<7;e++)s[e]=ct(s[e]),l[e]=ct(l[e]),u[e]=ct(u[e]);this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function ae(){return this.hours()%12||12}function re(t,e){j(t,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)}))}function oe(t,e){return e._meridiemParse}j("H",["HH",2],0,"hour"),j("h",["hh",2],0,ae),j("k",["kk",2],0,(function(){return this.hours()||24})),j("hmm",0,0,(function(){return""+ae.apply(this)+z(this.minutes(),2)})),j("hmmss",0,0,(function(){return""+ae.apply(this)+z(this.minutes(),2)+z(this.seconds(),2)})),j("Hmm",0,0,(function(){return""+this.hours()+z(this.minutes(),2)})),j("Hmmss",0,0,(function(){return""+this.hours()+z(this.minutes(),2)+z(this.seconds(),2)})),re("a",!0),re("A",!1),L("hour","h"),Y("hour",13),dt("a",oe),dt("A",oe),dt("H",J),dt("h",J),dt("k",J),dt("HH",J,Z),dt("hh",J,Z),dt("kk",J,Z),dt("hmm",Q),dt("hmmss",tt),dt("Hmm",Q),dt("Hmmss",tt),gt(["H","HH"],xt),gt(["k","kk"],(function(t,e,n){var i=k(t);e[xt]=24===i?0:i})),gt(["a","A"],(function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t})),gt(["h","hh"],(function(t,e,n){e[xt]=k(t),g(n).bigHour=!0})),gt("hmm",(function(t,e,n){var i=t.length-2;e[xt]=k(t.substr(0,i)),e[_t]=k(t.substr(i)),g(n).bigHour=!0})),gt("hmmss",(function(t,e,n){var i=t.length-4,a=t.length-2;e[xt]=k(t.substr(0,i)),e[_t]=k(t.substr(i,2)),e[wt]=k(t.substr(a)),g(n).bigHour=!0})),gt("Hmm",(function(t,e,n){var i=t.length-2;e[xt]=k(t.substr(0,i)),e[_t]=k(t.substr(i))})),gt("Hmmss",(function(t,e,n){var i=t.length-4,a=t.length-2;e[xt]=k(t.substr(0,i)),e[_t]=k(t.substr(i,2)),e[wt]=k(t.substr(a))}));var se,le=Ot("Hours",!0),ue={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Rt,monthsShort:Nt,week:{dow:0,doy:6},weekdays:Xt,weekdaysMin:Jt,weekdaysShort:Kt,meridiemParse:/[ap]\.?m?\.?/i},de={},he={};function ce(t){return t?t.toLowerCase().replace("_","-"):t}function fe(n){var i=null;if(!de[n]&&e&&e.exports)try{i=se._abbr,t(),ge(i)}catch(t){}return de[n]}function ge(t,e){var n;return t&&((n=s(e)?pe(t):me(t,e))?se=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),se._abbr}function me(t,e){if(null!==e){var n,i=ue;if(e.abbr=t,null!=de[t])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=de[t]._config;else if(null!=e.parentLocale)if(null!=de[e.parentLocale])i=de[e.parentLocale]._config;else{if(null==(n=fe(e.parentLocale)))return he[e.parentLocale]||(he[e.parentLocale]=[]),he[e.parentLocale].push({name:t,config:e}),null;i=n._config}return de[t]=new F(A(i,e)),he[t]&&he[t].forEach((function(t){me(t.name,t.config)})),ge(t),de[t]}return delete de[t],null}function pe(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return se;if(!r(t)){if(e=fe(t))return e;t=[t]}return function(t){for(var e,n,i,a,r=0;r<t.length;){for(e=(a=ce(t[r]).split("-")).length,n=(n=ce(t[r+1]))?n.split("-"):null;e>0;){if(i=fe(a.slice(0,e).join("-")))return i;if(n&&n.length>=e&&M(a,n,!0)>=e-1)break;e--}r++}return se}(t)}function ve(t){var e,n=t._a;return n&&-2===g(t).overflow&&(e=n[bt]<0||n[bt]>11?bt:n[yt]<1||n[yt]>It(n[vt],n[bt])?yt:n[xt]<0||n[xt]>24||24===n[xt]&&(0!==n[_t]||0!==n[wt]||0!==n[kt])?xt:n[_t]<0||n[_t]>59?_t:n[wt]<0||n[wt]>59?wt:n[kt]<0||n[kt]>999?kt:-1,g(t)._overflowDayOfYear&&(e<vt||e>yt)&&(e=yt),g(t)._overflowWeeks&&-1===e&&(e=Mt),g(t)._overflowWeekday&&-1===e&&(e=St),g(t).overflow=e),t}function be(t,e,n){return null!=t?t:null!=e?e:n}function ye(t){var e,n,i,r,o,s=[];if(!t._d){for(i=function(t){var e=new Date(a.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}(t),t._w&&null==t._a[yt]&&null==t._a[bt]&&function(t){var e,n,i,a,r,o,s,l;if(null!=(e=t._w).GG||null!=e.W||null!=e.E)r=1,o=4,n=be(e.GG,t._a[vt],qt(Le(),1,4).year),i=be(e.W,1),((a=be(e.E,1))<1||a>7)&&(l=!0);else{r=t._locale._week.dow,o=t._locale._week.doy;var u=qt(Le(),r,o);n=be(e.gg,t._a[vt],u.year),i=be(e.w,u.week),null!=e.d?((a=e.d)<0||a>6)&&(l=!0):null!=e.e?(a=e.e+r,(e.e<0||e.e>6)&&(l=!0)):a=r}i<1||i>Zt(n,r,o)?g(t)._overflowWeeks=!0:null!=l?g(t)._overflowWeekday=!0:(s=Gt(n,i,a,r,o),t._a[vt]=s.year,t._dayOfYear=s.dayOfYear)}(t),null!=t._dayOfYear&&(o=be(t._a[vt],i[vt]),(t._dayOfYear>Dt(o)||0===t._dayOfYear)&&(g(t)._overflowDayOfYear=!0),n=jt(o,0,t._dayOfYear),t._a[bt]=n.getUTCMonth(),t._a[yt]=n.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=s[e]=i[e];for(;e<7;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[xt]&&0===t._a[_t]&&0===t._a[wt]&&0===t._a[kt]&&(t._nextDay=!0,t._a[xt]=0),t._d=(t._useUTC?jt:Bt).apply(null,s),r=t._useUTC?t._d.getUTCDay():t._d.getDay(),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[xt]=24),t._w&&void 0!==t._w.d&&t._w.d!==r&&(g(t).weekdayMismatch=!0)}}var xe=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_e=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,we=/Z|[+-]\d\d(?::?\d\d)?/,ke=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Me=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Se=/^\/?Date\((\-?\d+)/i;function De(t){var e,n,i,a,r,o,s=t._i,l=xe.exec(s)||_e.exec(s);if(l){for(g(t).iso=!0,e=0,n=ke.length;e<n;e++)if(ke[e][1].exec(l[1])){a=ke[e][0],i=!1!==ke[e][2];break}if(null==a)return void(t._isValid=!1);if(l[3]){for(e=0,n=Me.length;e<n;e++)if(Me[e][1].exec(l[3])){r=(l[2]||" ")+Me[e][0];break}if(null==r)return void(t._isValid=!1)}if(!i&&null!=r)return void(t._isValid=!1);if(l[4]){if(!we.exec(l[4]))return void(t._isValid=!1);o="Z"}t._f=a+(r||"")+(o||""),Ae(t)}else t._isValid=!1}var Ce=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Pe(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}var Te={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Oe(t){var e,n,i,a,r,o,s,l=Ce.exec(t._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(l){var u=(e=l[4],n=l[3],i=l[2],a=l[5],r=l[6],o=l[7],s=[Pe(e),Nt.indexOf(n),parseInt(i,10),parseInt(a,10),parseInt(r,10)],o&&s.push(parseInt(o,10)),s);if(!function(t,e,n){return!t||Kt.indexOf(t)===new Date(e[0],e[1],e[2]).getDay()||(g(n).weekdayMismatch=!0,n._isValid=!1,!1)}(l[1],u,t))return;t._a=u,t._tzm=function(t,e,n){if(t)return Te[t];if(e)return 0;var i=parseInt(n,10),a=i%100;return(i-a)/100*60+a}(l[8],l[9],l[10]),t._d=jt.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),g(t).rfc2822=!0}else t._isValid=!1}function Ae(t){if(t._f!==a.ISO_8601)if(t._f!==a.RFC_2822){t._a=[],g(t).empty=!0;var e,n,i,r,o,s=""+t._i,l=s.length,u=0;for(i=G(t._f,t._locale).match(E)||[],e=0;e<i.length;e++)r=i[e],(n=(s.match(ht(r,t))||[])[0])&&((o=s.substr(0,s.indexOf(n))).length>0&&g(t).unusedInput.push(o),s=s.slice(s.indexOf(n)+n.length),u+=n.length),B[r]?(n?g(t).empty=!1:g(t).unusedTokens.push(r),pt(r,n,t)):t._strict&&!n&&g(t).unusedTokens.push(r);g(t).charsLeftOver=l-u,s.length>0&&g(t).unusedInput.push(s),t._a[xt]<=12&&!0===g(t).bigHour&&t._a[xt]>0&&(g(t).bigHour=void 0),g(t).parsedDateParts=t._a.slice(0),g(t).meridiem=t._meridiem,t._a[xt]=function(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?((i=t.isPM(n))&&e<12&&(e+=12),i||12!==e||(e=0),e):e}(t._locale,t._a[xt],t._meridiem),ye(t),ve(t)}else Oe(t);else De(t)}function Fe(t){var e=t._i,n=t._f;return t._locale=t._locale||pe(t._l),null===e||void 0===n&&""===e?p({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),_(e)?new x(ve(e)):(u(e)?t._d=e:r(n)?function(t){var e,n,i,a,r;if(0===t._f.length)return g(t).invalidFormat=!0,void(t._d=new Date(NaN));for(a=0;a<t._f.length;a++)r=0,e=b({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[a],Ae(e),m(e)&&(r+=g(e).charsLeftOver,r+=10*g(e).unusedTokens.length,g(e).score=r,(null==i||r<i)&&(i=r,n=e));c(t,n||e)}(t):n?Ae(t):function(t){var e=t._i;s(e)?t._d=new Date(a.now()):u(e)?t._d=new Date(e.valueOf()):"string"==typeof e?function(t){var e=Se.exec(t._i);null===e?(De(t),!1===t._isValid&&(delete t._isValid,Oe(t),!1===t._isValid&&(delete t._isValid,a.createFromInputFallback(t)))):t._d=new Date(+e[1])}(t):r(e)?(t._a=d(e.slice(0),(function(t){return parseInt(t,10)})),ye(t)):o(e)?function(t){if(!t._d){var e=N(t._i);t._a=d([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],(function(t){return t&&parseInt(t,10)})),ye(t)}}(t):l(e)?t._d=new Date(e):a.createFromInputFallback(t)}(t),m(t)||(t._d=null),t))}function Ie(t,e,n,i,a){var s,l={};return!0!==n&&!1!==n||(i=n,n=void 0),(o(t)&&function(t){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(t).length;var e;for(e in t)if(t.hasOwnProperty(e))return!1;return!0}(t)||r(t)&&0===t.length)&&(t=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=a,l._l=n,l._i=t,l._f=e,l._strict=i,(s=new x(ve(Fe(l))))._nextDay&&(s.add(1,"d"),s._nextDay=void 0),s}function Le(t,e,n,i){return Ie(t,e,n,i,!1)}a.createFromInputFallback=D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))})),a.ISO_8601=function(){},a.RFC_2822=function(){};var Re=D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var t=Le.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:p()})),Ne=D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var t=Le.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:p()}));function We(t,e){var n,i;if(1===e.length&&r(e[0])&&(e=e[0]),!e.length)return Le();for(n=e[0],i=1;i<e.length;++i)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n}var Ye=["year","quarter","month","week","day","hour","minute","second","millisecond"];function ze(t){var e=N(t),n=e.year||0,i=e.quarter||0,a=e.month||0,r=e.week||e.isoWeek||0,o=e.day||0,s=e.hour||0,l=e.minute||0,u=e.second||0,d=e.millisecond||0;this._isValid=function(t){for(var e in t)if(-1===Pt.call(Ye,e)||null!=t[e]&&isNaN(t[e]))return!1;for(var n=!1,i=0;i<Ye.length;++i)if(t[Ye[i]]){if(n)return!1;parseFloat(t[Ye[i]])!==k(t[Ye[i]])&&(n=!0)}return!0}(e),this._milliseconds=+d+1e3*u+6e4*l+1e3*s*60*60,this._days=+o+7*r,this._months=+a+3*i+12*n,this._data={},this._locale=pe(),this._bubble()}function Ee(t){return t instanceof ze}function Ve(t){return t<0?-1*Math.round(-1*t):Math.round(t)}function He(t,e){j(t,0,0,(function(){var t=this.utcOffset(),n="+";return t<0&&(t=-t,n="-"),n+z(~~(t/60),2)+e+z(~~t%60,2)}))}He("Z",":"),He("ZZ",""),dt("Z",st),dt("ZZ",st),gt(["Z","ZZ"],(function(t,e,n){n._useUTC=!0,n._tzm=je(st,t)}));var Be=/([\+\-]|\d\d)/gi;function je(t,e){var n=(e||"").match(t);if(null===n)return null;var i=((n[n.length-1]||[])+"").match(Be)||["-",0,0],a=60*i[1]+k(i[2]);return 0===a?0:"+"===i[0]?a:-a}function Ue(t,e){var n,i;return e._isUTC?(n=e.clone(),i=(_(t)||u(t)?t.valueOf():Le(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+i),a.updateOffset(n,!1),n):Le(t).local()}function Ge(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function qe(){return!!this.isValid()&&this._isUTC&&0===this._offset}a.updateOffset=function(){};var Ze=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,$e=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Xe(t,e){var n,i,a,r,o,s,u=t,d=null;return Ee(t)?u={ms:t._milliseconds,d:t._days,M:t._months}:l(t)?(u={},e?u[e]=t:u.milliseconds=t):(d=Ze.exec(t))?(n="-"===d[1]?-1:1,u={y:0,d:k(d[yt])*n,h:k(d[xt])*n,m:k(d[_t])*n,s:k(d[wt])*n,ms:k(Ve(1e3*d[kt]))*n}):(d=$e.exec(t))?(n="-"===d[1]?-1:1,u={y:Ke(d[2],n),M:Ke(d[3],n),w:Ke(d[4],n),d:Ke(d[5],n),h:Ke(d[6],n),m:Ke(d[7],n),s:Ke(d[8],n)}):null==u?u={}:"object"==typeof u&&("from"in u||"to"in u)&&(r=Le(u.from),o=Le(u.to),a=r.isValid()&&o.isValid()?(o=Ue(o,r),r.isBefore(o)?s=Je(r,o):((s=Je(o,r)).milliseconds=-s.milliseconds,s.months=-s.months),s):{milliseconds:0,months:0},(u={}).ms=a.milliseconds,u.M=a.months),i=new ze(u),Ee(t)&&h(t,"_locale")&&(i._locale=t._locale),i}function Ke(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Je(t,e){var n={};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function Qe(t,e){return function(n,i){var a;return null===i||isNaN(+i)||(T(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=n,n=i,i=a),tn(this,Xe(n="string"==typeof n?+n:n,i),t),this}}function tn(t,e,n,i){var r=e._milliseconds,o=Ve(e._days),s=Ve(e._months);t.isValid()&&(i=null==i||i,s&&Yt(t,At(t,"Month")+s*n),o&&Ft(t,"Date",At(t,"Date")+o*n),r&&t._d.setTime(t._d.valueOf()+r*n),i&&a.updateOffset(t,o||s))}Xe.fn=ze.prototype,Xe.invalid=function(){return Xe(NaN)};var en=Qe(1,"add"),nn=Qe(-1,"subtract");function an(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,"months");return-(n+(e-i<0?(e-i)/(i-t.clone().add(n-1,"months")):(e-i)/(t.clone().add(n+1,"months")-i)))||0}function rn(t){var e;return void 0===t?this._locale._abbr:(null!=(e=pe(t))&&(this._locale=e),this)}a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var on=D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(t){return void 0===t?this.localeData():this.locale(t)}));function sn(){return this._locale}var ln=1e3,un=60*ln,dn=60*un,hn=3506328*dn;function cn(t,e){return(t%e+e)%e}function fn(t,e,n){return t<100&&t>=0?new Date(t+400,e,n)-hn:new Date(t,e,n).valueOf()}function gn(t,e,n){return t<100&&t>=0?Date.UTC(t+400,e,n)-hn:Date.UTC(t,e,n)}function mn(t,e){j(0,[t,t.length],0,e)}function pn(t,e,n,i,a){var r;return null==t?qt(this,i,a).year:(e>(r=Zt(t,i,a))&&(e=r),vn.call(this,t,e,n,i,a))}function vn(t,e,n,i,a){var r=Gt(t,e,n,i,a),o=jt(r.year,0,r.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}j(0,["gg",2],0,(function(){return this.weekYear()%100})),j(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),mn("gggg","weekYear"),mn("ggggg","weekYear"),mn("GGGG","isoWeekYear"),mn("GGGGG","isoWeekYear"),L("weekYear","gg"),L("isoWeekYear","GG"),Y("weekYear",1),Y("isoWeekYear",1),dt("G",rt),dt("g",rt),dt("GG",J,Z),dt("gg",J,Z),dt("GGGG",nt,X),dt("gggg",nt,X),dt("GGGGG",it,K),dt("ggggg",it,K),mt(["gggg","ggggg","GGGG","GGGGG"],(function(t,e,n,i){e[i.substr(0,2)]=k(t)})),mt(["gg","GG"],(function(t,e,n,i){e[i]=a.parseTwoDigitYear(t)})),j("Q",0,"Qo","quarter"),L("quarter","Q"),Y("quarter",7),dt("Q",q),gt("Q",(function(t,e){e[bt]=3*(k(t)-1)})),j("D",["DD",2],"Do","date"),L("date","D"),Y("date",9),dt("D",J),dt("DD",J,Z),dt("Do",(function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient})),gt(["D","DD"],yt),gt("Do",(function(t,e){e[yt]=k(t.match(J)[0])}));var bn=Ot("Date",!0);j("DDD",["DDDD",3],"DDDo","dayOfYear"),L("dayOfYear","DDD"),Y("dayOfYear",4),dt("DDD",et),dt("DDDD",$),gt(["DDD","DDDD"],(function(t,e,n){n._dayOfYear=k(t)})),j("m",["mm",2],0,"minute"),L("minute","m"),Y("minute",14),dt("m",J),dt("mm",J,Z),gt(["m","mm"],_t);var yn=Ot("Minutes",!1);j("s",["ss",2],0,"second"),L("second","s"),Y("second",15),dt("s",J),dt("ss",J,Z),gt(["s","ss"],wt);var xn,_n=Ot("Seconds",!1);for(j("S",0,0,(function(){return~~(this.millisecond()/100)})),j(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),j(0,["SSS",3],0,"millisecond"),j(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),j(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),j(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),j(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),j(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),j(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),L("millisecond","ms"),Y("millisecond",16),dt("S",et,q),dt("SS",et,Z),dt("SSS",et,$),xn="SSSS";xn.length<=9;xn+="S")dt(xn,at);function wn(t,e){e[kt]=k(1e3*("0."+t))}for(xn="S";xn.length<=9;xn+="S")gt(xn,wn);var kn=Ot("Milliseconds",!1);j("z",0,0,"zoneAbbr"),j("zz",0,0,"zoneName");var Mn=x.prototype;function Sn(t){return t}Mn.add=en,Mn.calendar=function(t,e){var n=t||Le(),i=Ue(n,this).startOf("day"),r=a.calendarFormat(this,i)||"sameElse",o=e&&(O(e[r])?e[r].call(this,n):e[r]);return this.format(o||this.localeData().calendar(r,this,Le(n)))},Mn.clone=function(){return new x(this)},Mn.diff=function(t,e,n){var i,a,r;if(!this.isValid())return NaN;if(!(i=Ue(t,this)).isValid())return NaN;switch(a=6e4*(i.utcOffset()-this.utcOffset()),e=R(e)){case"year":r=an(this,i)/12;break;case"month":r=an(this,i);break;case"quarter":r=an(this,i)/3;break;case"second":r=(this-i)/1e3;break;case"minute":r=(this-i)/6e4;break;case"hour":r=(this-i)/36e5;break;case"day":r=(this-i-a)/864e5;break;case"week":r=(this-i-a)/6048e5;break;default:r=this-i}return n?r:w(r)},Mn.endOf=function(t){var e;if(void 0===(t=R(t))||"millisecond"===t||!this.isValid())return this;var n=this._isUTC?gn:fn;switch(t){case"year":e=n(this.year()+1,0,1)-1;break;case"quarter":e=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=n(this.year(),this.month()+1,1)-1;break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=dn-cn(e+(this._isUTC?0:this.utcOffset()*un),dn)-1;break;case"minute":e=this._d.valueOf(),e+=un-cn(e,un)-1;break;case"second":e=this._d.valueOf(),e+=ln-cn(e,ln)-1}return this._d.setTime(e),a.updateOffset(this,!0),this},Mn.format=function(t){t||(t=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var e=U(this,t);return this.localeData().postformat(e)},Mn.from=function(t,e){return this.isValid()&&(_(t)&&t.isValid()||Le(t).isValid())?Xe({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},Mn.fromNow=function(t){return this.from(Le(),t)},Mn.to=function(t,e){return this.isValid()&&(_(t)&&t.isValid()||Le(t).isValid())?Xe({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},Mn.toNow=function(t){return this.to(Le(),t)},Mn.get=function(t){return O(this[t=R(t)])?this[t]():this},Mn.invalidAt=function(){return g(this).overflow},Mn.isAfter=function(t,e){var n=_(t)?t:Le(t);return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=R(e)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf())},Mn.isBefore=function(t,e){var n=_(t)?t:Le(t);return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=R(e)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf())},Mn.isBetween=function(t,e,n,i){var a=_(t)?t:Le(t),r=_(e)?e:Le(e);return!!(this.isValid()&&a.isValid()&&r.isValid())&&("("===(i=i||"()")[0]?this.isAfter(a,n):!this.isBefore(a,n))&&(")"===i[1]?this.isBefore(r,n):!this.isAfter(r,n))},Mn.isSame=function(t,e){var n,i=_(t)?t:Le(t);return!(!this.isValid()||!i.isValid())&&("millisecond"===(e=R(e)||"millisecond")?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf()))},Mn.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)},Mn.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)},Mn.isValid=function(){return m(this)},Mn.lang=on,Mn.locale=rn,Mn.localeData=sn,Mn.max=Ne,Mn.min=Re,Mn.parsingFlags=function(){return c({},g(this))},Mn.set=function(t,e){if("object"==typeof t)for(var n=function(t){var e=[];for(var n in t)e.push({unit:n,priority:W[n]});return e.sort((function(t,e){return t.priority-e.priority})),e}(t=N(t)),i=0;i<n.length;i++)this[n[i].unit](t[n[i].unit]);else if(O(this[t=R(t)]))return this[t](e);return this},Mn.startOf=function(t){var e;if(void 0===(t=R(t))||"millisecond"===t||!this.isValid())return this;var n=this._isUTC?gn:fn;switch(t){case"year":e=n(this.year(),0,1);break;case"quarter":e=n(this.year(),this.month()-this.month()%3,1);break;case"month":e=n(this.year(),this.month(),1);break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=n(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=cn(e+(this._isUTC?0:this.utcOffset()*un),dn);break;case"minute":e=this._d.valueOf(),e-=cn(e,un);break;case"second":e=this._d.valueOf(),e-=cn(e,ln)}return this._d.setTime(e),a.updateOffset(this,!0),this},Mn.subtract=nn,Mn.toArray=function(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]},Mn.toObject=function(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}},Mn.toDate=function(){return new Date(this.valueOf())},Mn.toISOString=function(t){if(!this.isValid())return null;var e=!0!==t,n=e?this.clone().utc():this;return n.year()<0||n.year()>9999?U(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):O(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",U(n,"Z")):U(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},Mn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var n="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a=e+'[")]';return this.format(n+i+"-MM-DD[T]HH:mm:ss.SSS"+a)},Mn.toJSON=function(){return this.isValid()?this.toISOString():null},Mn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},Mn.unix=function(){return Math.floor(this.valueOf()/1e3)},Mn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},Mn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},Mn.year=Tt,Mn.isLeapYear=function(){return Ct(this.year())},Mn.weekYear=function(t){return pn.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},Mn.isoWeekYear=function(t){return pn.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)},Mn.quarter=Mn.quarters=function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},Mn.month=zt,Mn.daysInMonth=function(){return It(this.year(),this.month())},Mn.week=Mn.weeks=function(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")},Mn.isoWeek=Mn.isoWeeks=function(t){var e=qt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")},Mn.weeksInYear=function(){var t=this.localeData()._week;return Zt(this.year(),t.dow,t.doy)},Mn.isoWeeksInYear=function(){return Zt(this.year(),1,4)},Mn.date=bn,Mn.day=Mn.days=function(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=function(t,e){return"string"!=typeof t?t:isNaN(t)?"number"==typeof(t=e.weekdaysParse(t))?t:null:parseInt(t,10)}(t,this.localeData()),this.add(t-e,"d")):e},Mn.weekday=function(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")},Mn.isoWeekday=function(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=function(t,e){return"string"==typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7},Mn.dayOfYear=function(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")},Mn.hour=Mn.hours=le,Mn.minute=Mn.minutes=yn,Mn.second=Mn.seconds=_n,Mn.millisecond=Mn.milliseconds=kn,Mn.utcOffset=function(t,e,n){var i,r=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"==typeof t){if(null===(t=je(st,t)))return this}else Math.abs(t)<16&&!n&&(t*=60);return!this._isUTC&&e&&(i=Ge(this)),this._offset=t,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==t&&(!e||this._changeInProgress?tn(this,Xe(t-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Ge(this)},Mn.utc=function(t){return this.utcOffset(0,t)},Mn.local=function(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Ge(this),"m")),this},Mn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var t=je(ot,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this},Mn.hasAlignedHourOffset=function(t){return!!this.isValid()&&(t=t?Le(t).utcOffset():0,(this.utcOffset()-t)%60==0)},Mn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},Mn.isLocal=function(){return!!this.isValid()&&!this._isUTC},Mn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},Mn.isUtc=qe,Mn.isUTC=qe,Mn.zoneAbbr=function(){return this._isUTC?"UTC":""},Mn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},Mn.dates=D("dates accessor is deprecated. Use date instead.",bn),Mn.months=D("months accessor is deprecated. Use month instead",zt),Mn.years=D("years accessor is deprecated. Use year instead",Tt),Mn.zone=D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",(function(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()})),Mn.isDSTShifted=D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",(function(){if(!s(this._isDSTShifted))return this._isDSTShifted;var t={};if(b(t,this),(t=Fe(t))._a){var e=t._isUTC?f(t._a):Le(t._a);this._isDSTShifted=this.isValid()&&M(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}));var Dn=F.prototype;function Cn(t,e,n,i){var a=pe(),r=f().set(i,e);return a[n](r,t)}function Pn(t,e,n){if(l(t)&&(e=t,t=void 0),t=t||"",null!=e)return Cn(t,e,n,"month");var i,a=[];for(i=0;i<12;i++)a[i]=Cn(t,i,n,"month");return a}function Tn(t,e,n,i){"boolean"==typeof t?(l(e)&&(n=e,e=void 0),e=e||""):(n=e=t,t=!1,l(e)&&(n=e,e=void 0),e=e||"");var a,r=pe(),o=t?r._week.dow:0;if(null!=n)return Cn(e,(n+o)%7,i,"day");var s=[];for(a=0;a<7;a++)s[a]=Cn(e,(a+o)%7,i,"day");return s}Dn.calendar=function(t,e,n){var i=this._calendar[t]||this._calendar.sameElse;return O(i)?i.call(e,n):i},Dn.longDateFormat=function(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,(function(t){return t.slice(1)})),this._longDateFormat[t])},Dn.invalidDate=function(){return this._invalidDate},Dn.ordinal=function(t){return this._ordinal.replace("%d",t)},Dn.preparse=Sn,Dn.postformat=Sn,Dn.relativeTime=function(t,e,n,i){var a=this._relativeTime[n];return O(a)?a(t,e,n,i):a.replace(/%d/i,t)},Dn.pastFuture=function(t,e){var n=this._relativeTime[t>0?"future":"past"];return O(n)?n(e):n.replace(/%s/i,e)},Dn.set=function(t){var e,n;for(n in t)O(e=t[n])?this[n]=e:this["_"+n]=e;this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},Dn.months=function(t,e){return t?r(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||Lt).test(e)?"format":"standalone"][t.month()]:r(this._months)?this._months:this._months.standalone},Dn.monthsShort=function(t,e){return t?r(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Lt.test(e)?"format":"standalone"][t.month()]:r(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},Dn.monthsParse=function(t,e,n){var i,a,r;if(this._monthsParseExact)return Wt.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(a=f([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}},Dn.monthsRegex=function(t){return this._monthsParseExact?(h(this,"_monthsRegex")||Ht.call(this),t?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=Vt),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)},Dn.monthsShortRegex=function(t){return this._monthsParseExact?(h(this,"_monthsRegex")||Ht.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=Et),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)},Dn.week=function(t){return qt(t,this._week.dow,this._week.doy).week},Dn.firstDayOfYear=function(){return this._week.doy},Dn.firstDayOfWeek=function(){return this._week.dow},Dn.weekdays=function(t,e){var n=r(this._weekdays)?this._weekdays:this._weekdays[t&&!0!==t&&this._weekdays.isFormat.test(e)?"format":"standalone"];return!0===t?$t(n,this._week.dow):t?n[t.day()]:n},Dn.weekdaysMin=function(t){return!0===t?$t(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin},Dn.weekdaysShort=function(t){return!0===t?$t(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort},Dn.weekdaysParse=function(t,e,n){var i,a,r;if(this._weekdaysParseExact)return Qt.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(a=f([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}},Dn.weekdaysRegex=function(t){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||ie.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=te),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)},Dn.weekdaysShortRegex=function(t){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||ie.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ee),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},Dn.weekdaysMinRegex=function(t){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||ie.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ne),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},Dn.isPM=function(t){return"p"===(t+"").toLowerCase().charAt(0)},Dn.meridiem=function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},ge("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1===k(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),a.lang=D("moment.lang is deprecated. Use moment.locale instead.",ge),a.langData=D("moment.langData is deprecated. Use moment.localeData instead.",pe);var On=Math.abs;function An(t,e,n,i){var a=Xe(e,n);return t._milliseconds+=i*a._milliseconds,t._days+=i*a._days,t._months+=i*a._months,t._bubble()}function Fn(t){return t<0?Math.floor(t):Math.ceil(t)}function In(t){return 4800*t/146097}function Ln(t){return 146097*t/4800}function Rn(t){return function(){return this.as(t)}}var Nn=Rn("ms"),Wn=Rn("s"),Yn=Rn("m"),zn=Rn("h"),En=Rn("d"),Vn=Rn("w"),Hn=Rn("M"),Bn=Rn("Q"),jn=Rn("y");function Un(t){return function(){return this.isValid()?this._data[t]:NaN}}var Gn=Un("milliseconds"),qn=Un("seconds"),Zn=Un("minutes"),$n=Un("hours"),Xn=Un("days"),Kn=Un("months"),Jn=Un("years"),Qn=Math.round,ti={ss:44,s:45,m:45,h:22,d:26,M:11};function ei(t,e,n,i,a){return a.relativeTime(e||1,!!n,t,i)}var ni=Math.abs;function ii(t){return(t>0)-(t<0)||+t}function ai(){if(!this.isValid())return this.localeData().invalidDate();var t,e,n=ni(this._milliseconds)/1e3,i=ni(this._days),a=ni(this._months);t=w(n/60),e=w(t/60),n%=60,t%=60;var r=w(a/12),o=a%=12,s=i,l=e,u=t,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=ii(this._months)!==ii(h)?"-":"",g=ii(this._days)!==ii(h)?"-":"",m=ii(this._milliseconds)!==ii(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(o?f+o+"M":"")+(s?g+s+"D":"")+(l||u||d?"T":"")+(l?m+l+"H":"")+(u?m+u+"M":"")+(d?m+d+"S":"")}var ri=ze.prototype;return ri.isValid=function(){return this._isValid},ri.abs=function(){var t=this._data;return this._milliseconds=On(this._milliseconds),this._days=On(this._days),this._months=On(this._months),t.milliseconds=On(t.milliseconds),t.seconds=On(t.seconds),t.minutes=On(t.minutes),t.hours=On(t.hours),t.months=On(t.months),t.years=On(t.years),this},ri.add=function(t,e){return An(this,t,e,1)},ri.subtract=function(t,e){return An(this,t,e,-1)},ri.as=function(t){if(!this.isValid())return NaN;var e,n,i=this._milliseconds;if("month"===(t=R(t))||"quarter"===t||"year"===t)switch(e=this._days+i/864e5,n=this._months+In(e),t){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(e=this._days+Math.round(Ln(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}},ri.asMilliseconds=Nn,ri.asSeconds=Wn,ri.asMinutes=Yn,ri.asHours=zn,ri.asDays=En,ri.asWeeks=Vn,ri.asMonths=Hn,ri.asQuarters=Bn,ri.asYears=jn,ri.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*k(this._months/12):NaN},ri._bubble=function(){var t,e,n,i,a,r=this._milliseconds,o=this._days,s=this._months,l=this._data;return r>=0&&o>=0&&s>=0||r<=0&&o<=0&&s<=0||(r+=864e5*Fn(Ln(s)+o),o=0,s=0),l.milliseconds=r%1e3,t=w(r/1e3),l.seconds=t%60,e=w(t/60),l.minutes=e%60,n=w(e/60),l.hours=n%24,o+=w(n/24),a=w(In(o)),s+=a,o-=Fn(Ln(a)),i=w(s/12),s%=12,l.days=o,l.months=s,l.years=i,this},ri.clone=function(){return Xe(this)},ri.get=function(t){return t=R(t),this.isValid()?this[t+"s"]():NaN},ri.milliseconds=Gn,ri.seconds=qn,ri.minutes=Zn,ri.hours=$n,ri.days=Xn,ri.weeks=function(){return w(this.days()/7)},ri.months=Kn,ri.years=Jn,ri.humanize=function(t){if(!this.isValid())return this.localeData().invalidDate();var e=this.localeData(),n=function(t,e,n){var i=Xe(t).abs(),a=Qn(i.as("s")),r=Qn(i.as("m")),o=Qn(i.as("h")),s=Qn(i.as("d")),l=Qn(i.as("M")),u=Qn(i.as("y")),d=a<=ti.ss&&["s",a]||a<ti.s&&["ss",a]||r<=1&&["m"]||r<ti.m&&["mm",r]||o<=1&&["h"]||o<ti.h&&["hh",o]||s<=1&&["d"]||s<ti.d&&["dd",s]||l<=1&&["M"]||l<ti.M&&["MM",l]||u<=1&&["y"]||["yy",u];return d[2]=e,d[3]=+t>0,d[4]=n,ei.apply(null,d)}(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)},ri.toISOString=ai,ri.toString=ai,ri.toJSON=ai,ri.locale=rn,ri.localeData=sn,ri.toIsoString=D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ai),ri.lang=on,j("X",0,0,"unix"),j("x",0,0,"valueOf"),dt("x",rt),dt("X",/[+-]?\d+(\.\d{1,3})?/),gt("X",(function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))})),gt("x",(function(t,e,n){n._d=new Date(k(t))})),a.version="2.24.0",n=Le,a.fn=Mn,a.min=function(){return We("isBefore",[].slice.call(arguments,0))},a.max=function(){return We("isAfter",[].slice.call(arguments,0))},a.now=function(){return Date.now?Date.now():+new Date},a.utc=f,a.unix=function(t){return Le(1e3*t)},a.months=function(t,e){return Pn(t,e,"months")},a.isDate=u,a.locale=ge,a.invalid=p,a.duration=Xe,a.isMoment=_,a.weekdays=function(t,e,n){return Tn(t,e,n,"weekdays")},a.parseZone=function(){return Le.apply(null,arguments).parseZone()},a.localeData=pe,a.isDuration=Ee,a.monthsShort=function(t,e){return Pn(t,e,"monthsShort")},a.weekdaysMin=function(t,e,n){return Tn(t,e,n,"weekdaysMin")},a.defineLocale=me,a.updateLocale=function(t,e){if(null!=e){var n,i,a=ue;null!=(i=fe(t))&&(a=i._config),e=A(a,e),(n=new F(e)).parentLocale=de[t],de[t]=n,ge(t)}else null!=de[t]&&(null!=de[t].parentLocale?de[t]=de[t].parentLocale:null!=de[t]&&delete de[t]);return de[t]},a.locales=function(){return C(de)},a.weekdaysShort=function(t,e,n){return Tn(t,e,n,"weekdaysShort")},a.normalizeUnits=R,a.relativeTimeRounding=function(t){return void 0===t?Qn:"function"==typeof t&&(Qn=t,!0)},a.relativeTimeThreshold=function(t,e){return void 0!==ti[t]&&(void 0===e?ti[t]:(ti[t]=e,"s"===t&&(ti.ss=e-1),!0))},a.calendarFormat=function(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},a.prototype=Mn,a.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},a}()})),mi={datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"};rn._date.override("function"==typeof gi?{_id:"moment",formats:function(){return mi},parse:function(t,e){return"string"==typeof t&&"string"==typeof e?t=gi(t,e):t instanceof gi||(t=gi(t)),t.isValid()?t.valueOf():null},format:function(t,e){return gi(t).format(e)},add:function(t,e,n){return gi(t).add(e,n).valueOf()},diff:function(t,e,n){return gi(t).diff(gi(e),n)},startOf:function(t,e,n){return t=gi(t),"isoWeek"===e?t.isoWeekday(n).valueOf():t.startOf(e).valueOf()},endOf:function(t,e){return gi(t).endOf(e).valueOf()},_create:function(t){return gi(t)}}:{}),W._set("global",{plugins:{filler:{propagate:!0}}});var pi={dataset:function(t){var e=t.fill,n=t.chart,i=n.getDatasetMeta(e),a=i&&n.isDatasetVisible(e)&&i.dataset._children||[],r=a.length||0;return r?function(t,e){return e<r&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,i=e?e.y:null;return H.isArray(e)?function(t,n){return e[n]}:function(t){return{x:null===n?t.x:n,y:null===i?t.y:i}}}};function vi(t,e,n){var i,a=t._model||{},r=a.fill;if(void 0===r&&(r=!!a.backgroundColor),!1===r||null===r)return!1;if(!0===r)return"origin";if(i=parseFloat(r,10),isFinite(i)&&Math.floor(i)===i)return"-"!==r[0]&&"+"!==r[0]||(i=e+i),!(i===e||i<0||i>=n)&&i;switch(r){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return r;default:return!1}}function bi(t){return(t.el._scale||{}).getPointPositionForValue?function(t){var e,n,i,a,r,o=t.el._scale,s=o.options,l=o.chart.data.labels.length,u=t.fill,d=[];if(!l)return null;for(e=s.ticks.reverse?o.max:o.min,n=s.ticks.reverse?o.min:o.max,i=o.getPointPositionForValue(0,e),a=0;a<l;++a)r="start"===u||"end"===u?o.getPointPositionForValue(a,"start"===u?e:n):o.getBasePosition(a),s.gridLines.circular&&(r.cx=i.x,r.cy=i.y,r.angle=o.getIndexAngle(a)-Math.PI/2),d.push(r);return d}(t):function(t){var e,n=t.el._model||{},i=t.el._scale||{},a=t.fill,r=null;if(isFinite(a))return null;if("start"===a?r=void 0===n.scaleBottom?i.bottom:n.scaleBottom:"end"===a?r=void 0===n.scaleTop?i.top:n.scaleTop:void 0!==n.scaleZero?r=n.scaleZero:i.getBasePixel&&(r=i.getBasePixel()),null!=r){if(void 0!==r.x&&void 0!==r.y)return r;if(H.isFinite(r))return{x:(e=i.isHorizontal())?r:null,y:e?null:r}}return null}(t)}function yi(t,e,n){var i,a=t[e].fill,r=[e];if(!n)return a;for(;!1!==a&&-1===r.indexOf(a);){if(!isFinite(a))return a;if(!(i=t[a]))return!1;if(i.visible)return a;r.push(a),a=i.fill}return!1}function xi(t){var e=t.fill,n="dataset";return!1===e?null:(isFinite(e)||(n="boundary"),pi[n](t))}function _i(t){return t&&!t.skip}function wi(t,e,n,i,a){var r,o,s,l;if(i&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<i;++r)H.canvas.lineTo(t,e[r-1],e[r]);if(void 0===n[0].angle)for(t.lineTo(n[a-1].x,n[a-1].y),r=a-1;r>0;--r)H.canvas.lineTo(t,n[r],n[r-1],!0);else for(o=n[0].cx,s=n[0].cy,l=Math.sqrt(Math.pow(n[0].x-o,2)+Math.pow(n[0].y-s,2)),r=a-1;r>0;--r)t.arc(o,s,l,n[r].angle,n[r-1].angle,!0)}}function ki(t,e,n,i,a,r){var o,s,l,u,d,h,c,f,g=e.length,m=i.spanGaps,p=[],v=[],b=0,y=0;for(t.beginPath(),o=0,s=g;o<s;++o)d=n(u=e[l=o%g]._view,l,i),h=_i(u),c=_i(d),r&&void 0===f&&h&&(s=g+(f=o+1)),h&&c?(b=p.push(u),y=v.push(d)):b&&y&&(m?(h&&p.push(u),c&&v.push(d)):(wi(t,p,v,b,y),b=y=0,p=[],v=[]));wi(t,p,v,b,y),t.closePath(),t.fillStyle=a,t.fill()}var Mi={id:"filler",afterDatasetsUpdate:function(t,e){var n,i,a,r,o=(t.data.datasets||[]).length,s=e.propagate,l=[];for(i=0;i<o;++i)r=null,(a=(n=t.getDatasetMeta(i)).dataset)&&a._model&&a instanceof wt.Line&&(r={visible:t.isDatasetVisible(i),fill:vi(a,i,o),chart:t,el:a}),n.$filler=r,l.push(r);for(i=0;i<o;++i)(r=l[i])&&(r.fill=yi(l,i,s),r.boundary=bi(r),r.mapper=xi(r))},beforeDatasetsDraw:function(t){var e,n,i,a,r,o,s,l=t._getSortedVisibleDatasetMetas(),u=t.ctx;for(n=l.length-1;n>=0;--n)(e=l[n].$filler)&&e.visible&&(a=(i=e.el)._view,r=i._children||[],o=e.mapper,s=a.backgroundColor||W.global.defaultColor,o&&s&&r.length&&(H.canvas.clipArea(u,t.chartArea),ki(u,r,o,a,s,i._loop),H.canvas.unclipArea(u)))}},Si=H.rtl.getRtlAdapter,Di=H.noop,Ci=H.valueOrDefault;function Pi(t,e){return t.usePointStyle&&t.boxWidth>e?e:t.boxWidth}W._set("global",{legend:{display:!0,position:"top",align:"center",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data.datasets,n=t.options.legend||{},i=n.labels&&n.labels.usePointStyle;return t._getSortedDatasetMetas().map((function(n){var a=n.controller.getStyle(i?0:void 0);return{text:e[n.index].label,fillStyle:a.backgroundColor,hidden:!t.isDatasetVisible(n.index),lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:a.borderWidth,strokeStyle:a.borderColor,pointStyle:a.pointStyle,rotation:a.rotation,datasetIndex:n.index}}),this)}}},legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data.datasets;for(a.setAttribute("class",t.id+"-legend"),e=0,n=r.length;e<n;e++)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=r[e].backgroundColor,r[e].label&&i.appendChild(document.createTextNode(r[e].label));return a.outerHTML}});var Ti=$.extend({initialize:function(t){H.extend(this,t),this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1},beforeUpdate:Di,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:Di,beforeSetDimensions:Di,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Di,beforeBuildLabels:Di,buildLabels:function(){var t=this,e=t.options.labels||{},n=H.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(n=n.filter((function(n){return e.filter(n,t.chart.data)}))),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:Di,beforeFit:Di,fit:function(){var t=this,e=t.options,n=e.labels,i=e.display,a=t.ctx,r=H.options._parseFont(n),o=r.size,s=t.legendHitBoxes=[],l=t.minSize,u=t.isHorizontal();if(u?(l.width=t.maxWidth,l.height=i?10:0):(l.width=i?10:0,l.height=t.maxHeight),i){if(a.font=r.string,u){var d=t.lineWidths=[0],h=0;a.textAlign="left",a.textBaseline="middle",H.each(t.legendItems,(function(t,e){var i=Pi(n,o)+o/2+a.measureText(t.text).width;(0===e||d[d.length-1]+i+2*n.padding>l.width)&&(h+=o+n.padding,d[d.length-(e>0?0:1)]=0),s[e]={left:0,top:0,width:i,height:o},d[d.length-1]+=i+n.padding})),l.height+=h}else{var c=n.padding,f=t.columnWidths=[],g=t.columnHeights=[],m=n.padding,p=0,v=0;H.each(t.legendItems,(function(t,e){var i=Pi(n,o)+o/2+a.measureText(t.text).width;e>0&&v+o+2*c>l.height&&(m+=p+n.padding,f.push(p),g.push(v),p=0,v=0),p=Math.max(p,i),v+=o+c,s[e]={left:0,top:0,width:i,height:o}})),m+=p,f.push(p),g.push(v),l.width+=m}t.width=l.width,t.height=l.height}else t.width=l.width=t.height=l.height=0},afterFit:Di,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,n=e.labels,i=W.global,a=i.defaultColor,r=i.elements.line,o=t.height,s=t.columnHeights,l=t.width,u=t.lineWidths;if(e.display){var d,h=Si(e.rtl,t.left,t.minSize.width),c=t.ctx,f=Ci(n.fontColor,i.defaultFontColor),g=H.options._parseFont(n),m=g.size;c.textAlign=h.textAlign("left"),c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=g.string;var p=Pi(n,m),v=t.legendHitBoxes,b=function(t,i){switch(e.align){case"start":return n.padding;case"end":return t-i;default:return(t-i+n.padding)/2}},y=t.isHorizontal();d=y?{x:t.left+b(l,u[0]),y:t.top+n.padding,line:0}:{x:t.left+n.padding,y:t.top+b(o,s[0]),line:0},H.rtl.overrideTextDirection(t.ctx,e.textDirection);var x=m+n.padding;H.each(t.legendItems,(function(e,i){var f=c.measureText(e.text).width,g=p+m/2+f,_=d.x,w=d.y;h.setWidth(t.minSize.width),y?i>0&&_+g+n.padding>t.left+t.minSize.width&&(w=d.y+=x,d.line++,_=d.x=t.left+b(l,u[d.line])):i>0&&w+x>t.top+t.minSize.height&&(_=d.x=_+t.columnWidths[d.line]+n.padding,d.line++,w=d.y=t.top+b(o,s[d.line]));var k=h.x(_);!function(t,e,i){if(!(isNaN(p)||p<=0)){c.save();var o=Ci(i.lineWidth,r.borderWidth);if(c.fillStyle=Ci(i.fillStyle,a),c.lineCap=Ci(i.lineCap,r.borderCapStyle),c.lineDashOffset=Ci(i.lineDashOffset,r.borderDashOffset),c.lineJoin=Ci(i.lineJoin,r.borderJoinStyle),c.lineWidth=o,c.strokeStyle=Ci(i.strokeStyle,a),c.setLineDash&&c.setLineDash(Ci(i.lineDash,r.borderDash)),n&&n.usePointStyle){var s=p*Math.SQRT2/2,l=h.xPlus(t,p/2),u=e+m/2;H.canvas.drawPoint(c,i.pointStyle,s,l,u,i.rotation)}else c.fillRect(h.leftForLtr(t,p),e,p,m),0!==o&&c.strokeRect(h.leftForLtr(t,p),e,p,m);c.restore()}}(k,w,e),v[i].left=h.leftForLtr(k,v[i].width),v[i].top=w,function(t,e,n,i){var a=m/2,r=h.xPlus(t,p+a),o=e+a;c.fillText(n.text,r,o),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(r,o),c.lineTo(h.xPlus(r,i),o),c.stroke())}(k,w,e,f),y?d.x+=g+n.padding:d.y+=x})),H.rtl.restoreTextDirection(t.ctx,e.textDirection)}},_getLegendItemAt:function(t,e){var n,i,a,r=this;if(t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom)for(a=r.legendHitBoxes,n=0;n<a.length;++n)if(t>=(i=a[n]).left&&t<=i.left+i.width&&e>=i.top&&e<=i.top+i.height)return r.legendItems[n];return null},handleEvent:function(t){var e,n=this,i=n.options,a="mouseup"===t.type?"click":t.type;if("mousemove"===a){if(!i.onHover&&!i.onLeave)return}else{if("click"!==a)return;if(!i.onClick)return}e=n._getLegendItemAt(t.x,t.y),"click"===a?e&&i.onClick&&i.onClick.call(n,t.native,e):(i.onLeave&&e!==n._hoveredItem&&(n._hoveredItem&&i.onLeave.call(n,t.native,n._hoveredItem),n._hoveredItem=e),i.onHover&&e&&i.onHover.call(n,t.native,e))}});function Oi(t,e){var n=new Ti({ctx:t.ctx,options:e,chart:t});me.configure(t,n,e),me.addBox(t,n),t.legend=n}var Ai={id:"legend",_element:Ti,beforeInit:function(t){var e=t.options.legend;e&&Oi(t,e)},beforeUpdate:function(t){var e=t.options.legend,n=t.legend;e?(H.mergeIf(e,W.global.legend),n?(me.configure(t,n,e),n.options=e):Oi(t,e)):n&&(me.removeBox(t,n),delete t.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}},Fi=H.noop;W._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,padding:10,position:"top",text:"",weight:2e3}});var Ii=$.extend({initialize:function(t){H.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:Fi,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:Fi,beforeSetDimensions:Fi,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Fi,beforeBuildLabels:Fi,buildLabels:Fi,afterBuildLabels:Fi,beforeFit:Fi,fit:function(){var t,e=this,n=e.options,i=e.minSize={},a=e.isHorizontal();n.display?(t=(H.isArray(n.text)?n.text.length:1)*H.options._parseFont(n).lineHeight+2*n.padding,e.width=i.width=a?e.maxWidth:t,e.height=i.height=a?t:e.maxHeight):e.width=i.width=e.height=i.height=0},afterFit:Fi,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,n=t.options;if(n.display){var i,a,r,o=H.options._parseFont(n),s=o.lineHeight,l=s/2+n.padding,u=0,d=t.top,h=t.left,c=t.bottom,f=t.right;e.fillStyle=H.valueOrDefault(n.fontColor,W.global.defaultFontColor),e.font=o.string,t.isHorizontal()?(a=h+(f-h)/2,r=d+l,i=f-h):(a="left"===n.position?h+l:f-l,r=d+(c-d)/2,i=c-d,u=Math.PI*("left"===n.position?-.5:.5)),e.save(),e.translate(a,r),e.rotate(u),e.textAlign="center",e.textBaseline="middle";var g=n.text;if(H.isArray(g))for(var m=0,p=0;p<g.length;++p)e.fillText(g[p],0,m,i),m+=s;else e.fillText(g,0,0,i);e.restore()}}});function Li(t,e){var n=new Ii({ctx:t.ctx,options:e,chart:t});me.configure(t,n,e),me.addBox(t,n),t.titleBlock=n}var Ri={},Ni=Mi,Wi=Ai,Yi={id:"title",_element:Ii,beforeInit:function(t){var e=t.options.title;e&&Li(t,e)},beforeUpdate:function(t){var e=t.options.title,n=t.titleBlock;e?(H.mergeIf(e,W.global.title),n?(me.configure(t,n,e),n.options=e):Li(t,e)):n&&(me.removeBox(t,n),delete t.titleBlock)}};for(var zi in Ri.filler=Ni,Ri.legend=Wi,Ri.title=Yi,en.helpers=H,function(){function t(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}function e(t){return null!=t&&"none"!==t}function n(n,i,a){var r=document.defaultView,o=H._getParentNode(n),s=r.getComputedStyle(n)[i],l=r.getComputedStyle(o)[i],u=e(s),d=e(l),h=Number.POSITIVE_INFINITY;return u||d?Math.min(u?t(s,n,a):h,d?t(l,o,a):h):"none"}H.where=function(t,e){if(H.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return H.each(t,(function(t){e(t)&&n.push(t)})),n},H.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;i<a;++i)if(e.call(n,t[i],i,t))return i;return-1},H.findNextWhere=function(t,e,n){H.isNullOrUndef(n)&&(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},H.findPreviousWhere=function(t,e,n){H.isNullOrUndef(n)&&(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},H.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},H.almostEquals=function(t,e,n){return Math.abs(t-e)<n},H.almostWhole=function(t,e){var n=Math.round(t);return n-e<=t&&n+e>=t},H.max=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.max(t,e)}),Number.NEGATIVE_INFINITY)},H.min=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.min(t,e)}),Number.POSITIVE_INFINITY)},H.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},H.toRadians=function(t){return t*(Math.PI/180)},H.toDegrees=function(t){return t*(180/Math.PI)},H._decimalPlaces=function(t){if(H.isFinite(t)){for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++;return n}},H.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),r=Math.atan2(i,n);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},H.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},H.aliasPixel=function(t){return t%2==0?0:.5},H._alignPixel=function(t,e,n){var i=t.currentDevicePixelRatio,a=n/2;return Math.round((e-a)*i)/i+a},H.splineCurve=function(t,e,n,i){var a=t.skip?e:t,r=e,o=n.skip?e:n,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l),h=i*(u=isNaN(u)?0:u),c=i*(d=isNaN(d)?0:d);return{previous:{x:r.x-h*(o.x-a.x),y:r.y-h*(o.y-a.y)},next:{x:r.x+c*(o.x-a.x),y:r.y+c*(o.y-a.y)}}},H.EPSILON=Number.EPSILON||1e-14,H.splineCurveMonotone=function(t){var e,n,i,a,r,o,s,l,u,d=(t||[]).map((function(t){return{model:t._model,deltaK:0,mK:0}})),h=d.length;for(e=0;e<h;++e)if(!(i=d[e]).model.skip){if(n=e>0?d[e-1]:null,(a=e<h-1?d[e+1]:null)&&!a.model.skip){var c=a.model.x-i.model.x;i.deltaK=0!==c?(a.model.y-i.model.y)/c:0}!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2}for(e=0;e<h-1;++e)i=d[e],a=d[e+1],i.model.skip||a.model.skip||(H.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(r=i.mK/i.deltaK,o=a.mK/i.deltaK,(l=Math.pow(r,2)+Math.pow(o,2))<=9||(s=3/Math.sqrt(l),i.mK=r*s*i.deltaK,a.mK=o*s*i.deltaK)));for(e=0;e<h;++e)(i=d[e]).model.skip||(n=e>0?d[e-1]:null,a=e<h-1?d[e+1]:null,n&&!n.model.skip&&(u=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-u,i.model.controlPointPreviousY=i.model.y-u*i.mK),a&&!a.model.skip&&(u=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+u,i.model.controlPointNextY=i.model.y+u*i.mK))},H.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},H.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},H.niceNum=function(t,e){var n=Math.floor(H.log10(t)),i=t/Math.pow(10,n);return(e?i<1.5?1:i<3?2:i<7?5:10:i<=1?1:i<=2?2:i<=5?5:10)*Math.pow(10,n)},H.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},H.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,r=t.target||t.srcElement,o=r.getBoundingClientRect(),s=a.touches;s&&s.length>0?(n=s[0].clientX,i=s[0].clientY):(n=a.clientX,i=a.clientY);var l=parseFloat(H.getStyle(r,"padding-left")),u=parseFloat(H.getStyle(r,"padding-top")),d=parseFloat(H.getStyle(r,"padding-right")),h=parseFloat(H.getStyle(r,"padding-bottom")),c=o.right-o.left-l-d,f=o.bottom-o.top-u-h;return{x:n=Math.round((n-o.left-l)/c*r.width/e.currentDevicePixelRatio),y:i=Math.round((i-o.top-u)/f*r.height/e.currentDevicePixelRatio)}},H.getConstraintWidth=function(t){return n(t,"max-width","clientWidth")},H.getConstraintHeight=function(t){return n(t,"max-height","clientHeight")},H._calculatePadding=function(t,e,n){return(e=H.getStyle(t,e)).indexOf("%")>-1?n*parseInt(e,10)/100:parseInt(e,10)},H._getParentNode=function(t){var e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e},H.getMaximumWidth=function(t){var e=H._getParentNode(t);if(!e)return t.clientWidth;var n=e.clientWidth,i=n-H._calculatePadding(e,"padding-left",n)-H._calculatePadding(e,"padding-right",n),a=H.getConstraintWidth(t);return isNaN(a)?i:Math.min(i,a)},H.getMaximumHeight=function(t){var e=H._getParentNode(t);if(!e)return t.clientHeight;var n=e.clientHeight,i=n-H._calculatePadding(e,"padding-top",n)-H._calculatePadding(e,"padding-bottom",n),a=H.getConstraintHeight(t);return isNaN(a)?i:Math.min(i,a)},H.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},H.retinaScale=function(t,e){var n=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==n){var i=t.canvas,a=t.height,r=t.width;i.height=a*n,i.width=r*n,t.ctx.scale(n,n),i.style.height||i.style.width||(i.style.height=a+"px",i.style.width=r+"px")}},H.fontString=function(t,e,n){return e+" "+t+"px "+n},H.longestText=function(t,e,n,i){var a=(i=i||{}).data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e;var o,s,l,u,d,h=0,c=n.length;for(o=0;o<c;o++)if(null!=(u=n[o])&&!0!==H.isArray(u))h=H.measureText(t,a,r,h,u);else if(H.isArray(u))for(s=0,l=u.length;s<l;s++)null==(d=u[s])||H.isArray(d)||(h=H.measureText(t,a,r,h,d));var f=r.length/2;if(f>n.length){for(o=0;o<f;o++)delete a[r[o]];r.splice(0,f)}return h},H.measureText=function(t,e,n,i,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,n.push(a)),r>i&&(i=r),i},H.numberOfLabelLines=function(t){var e=1;return H.each(t,(function(t){H.isArray(t)&&t.length>e&&(e=t.length)})),e},H.color=k?function(t){return t instanceof CanvasGradient&&(t=W.global.defaultColor),k(t)}:function(t){return console.error("Color.js not found!"),t},H.getHoverColor=function(t){return t instanceof CanvasPattern||t instanceof CanvasGradient?t:H.color(t).saturate(.5).darken(.1).rgbString()}}(),en._adapters=rn,en.Animation=K,en.animationService=J,en.controllers=Jt,en.DatasetController=it,en.defaults=W,en.Element=$,en.elements=wt,en.Interaction=re,en.layouts=me,en.platform=Ie,en.plugins=Le,en.Scale=xn,en.scaleService=Re,en.Ticks=on,en.Tooltip=Ge,en.helpers.each(fi,(function(t,e){en.scaleService.registerScaleType(e,t,t._defaults)})),Ri)Ri.hasOwnProperty(zi)&&en.plugins.register(Ri[zi]);en.platform.initialize();var Ei=en;return"undefined"!=typeof window&&(window.Chart=en),en.Chart=en,en.Legend=Ri.legend._element,en.Title=Ri.title._element,en.pluginService=en.plugins,en.PluginBase=en.Element.extend({}),en.canvasHelpers=en.helpers.canvas,en.layoutService=en.layouts,en.LinearScaleBase=Dn,en.helpers.each(["Bar","Bubble","Doughnut","Line","PolarArea","Radar","Scatter"],(function(t){en[t]=function(e,n){return new en(e,en.helpers.merge(n||{},{type:t.charAt(0).toLowerCase()+t.slice(1)}))}})),Ei}));

;/*!
 * Cropper v3.0.0-rc.2
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2017 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2017-05-30T05:04:38.958Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (factory(global.jQuery));
}(this, (function ($) { 'use strict';

$ = 'default' in $ ? $['default'] : $;

var DEFAULTS = {
  // Define the view mode of the cropper
  viewMode: 0, // 0, 1, 2, 3

  // Define the dragging mode of the cropper
  dragMode: 'crop', // 'crop', 'move' or 'none'

  // Define the aspect ratio of the crop box
  aspectRatio: NaN,

  // An object with the previous cropping result data
  data: null,

  // A selector for adding extra containers to preview
  preview: '',

  // Re-render the cropper when resize the window
  responsive: true,

  // Restore the cropped area after resize the window
  restore: true,

  // Check if the current image is a cross-origin image
  checkCrossOrigin: true,

  // Check the current image's Exif Orientation information
  checkOrientation: true,

  // Show the black modal
  modal: true,

  // Show the dashed lines for guiding
  guides: true,

  // Show the center indicator for guiding
  center: true,

  // Show the white modal to highlight the crop box
  highlight: true,

  // Show the grid background
  background: true,

  // Enable to crop the image automatically when initialize
  autoCrop: true,

  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,

  // Enable to move the image
  movable: true,

  // Enable to rotate the image
  rotatable: true,

  // Enable to scale the image
  scalable: true,

  // Enable to zoom the image
  zoomable: true,

  // Enable to zoom the image by dragging touch
  zoomOnTouch: true,

  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: true,

  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,

  // Enable to move the crop box
  cropBoxMovable: true,

  // Enable to resize the crop box
  cropBoxResizable: true,

  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: true,

  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: 200,
  minContainerHeight: 100,

  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
};

var TEMPLATE = '<div class="cropper-container">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-action="e"></span>' + '<span class="cropper-line line-n" data-action="n"></span>' + '<span class="cropper-line line-w" data-action="w"></span>' + '<span class="cropper-line line-s" data-action="s"></span>' + '<span class="cropper-point point-e" data-action="e"></span>' + '<span class="cropper-point point-n" data-action="n"></span>' + '<span class="cropper-point point-w" data-action="w"></span>' + '<span class="cropper-point point-s" data-action="s"></span>' + '<span class="cropper-point point-ne" data-action="ne"></span>' + '<span class="cropper-point point-nw" data-action="nw"></span>' + '<span class="cropper-point point-sw" data-action="sw"></span>' + '<span class="cropper-point point-se" data-action="se"></span>' + '</div>' + '</div>';

var REGEXP_DATA_URL_HEAD = /^data:.*,/;
var REGEXP_USERAGENT = /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i;
var navigator = typeof window !== 'undefined' ? window.navigator : null;
var IS_SAFARI_OR_UIWEBVIEW = navigator && REGEXP_USERAGENT.test(navigator.userAgent);
var fromCharCode = String.fromCharCode;

function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
}

function isUndefined(n) {
  return typeof n === 'undefined';
}

function toArray(obj, offset) {
  var args = [];

  // This is necessary for IE8
  if (isNumber(offset)) {
    args.push(offset);
  }

  return args.slice.apply(obj, args);
}

// Custom proxy to avoid jQuery's guid
function proxy(fn, context) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args2[_key2] = arguments[_key2];
    }

    return fn.apply(context, args.concat(toArray(args2)));
  };
}

function objectKeys(obj) {
  var keys = [];

  $.each(obj, function (key) {
    keys.push(key);
  });

  return keys;
}

function isCrossOriginURL(url) {
  var parts = url.match(/^(https?:)\/\/([^:/?#]+):?(\d*)/i);

  return parts && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
}

function addTimestamp(url) {
  var timestamp = 'timestamp=' + new Date().getTime();

  return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
}

function getImageSize(image, callback) {
  // Modern browsers (ignore Safari, #120 & #509)
  if (image.naturalWidth && !IS_SAFARI_OR_UIWEBVIEW) {
    callback(image.naturalWidth, image.naturalHeight);
    return;
  }

  // IE8: Don't use `new Image()` here (#319)
  var newImage = document.createElement('img');

  newImage.onload = function load() {
    callback(this.width, this.height);
  };

  newImage.src = image.src;
}

function getTransform(options) {
  var transforms = [];
  var translateX = options.translateX;
  var translateY = options.translateY;
  var rotate = options.rotate;
  var scaleX = options.scaleX;
  var scaleY = options.scaleY;

  if (isNumber(translateX) && translateX !== 0) {
    transforms.push('translateX(' + translateX + 'px)');
  }

  if (isNumber(translateY) && translateY !== 0) {
    transforms.push('translateY(' + translateY + 'px)');
  }

  // Rotate should come first before scale to match orientation transform
  if (isNumber(rotate) && rotate !== 0) {
    transforms.push('rotate(' + rotate + 'deg)');
  }

  if (isNumber(scaleX) && scaleX !== 1) {
    transforms.push('scaleX(' + scaleX + ')');
  }

  if (isNumber(scaleY) && scaleY !== 1) {
    transforms.push('scaleY(' + scaleY + ')');
  }

  return transforms.length ? transforms.join(' ') : 'none';
}

function getRotatedSizes(data, isReversed) {
  var deg = Math.abs(data.degree) % 180;
  var arc = (deg > 90 ? 180 - deg : deg) * Math.PI / 180;
  var sinArc = Math.sin(arc);
  var cosArc = Math.cos(arc);
  var width = data.width;
  var height = data.height;
  var aspectRatio = data.aspectRatio;
  var newWidth = void 0;
  var newHeight = void 0;

  if (!isReversed) {
    newWidth = width * cosArc + height * sinArc;
    newHeight = width * sinArc + height * cosArc;
  } else {
    newWidth = width / (cosArc + sinArc / aspectRatio);
    newHeight = newWidth / aspectRatio;
  }

  return {
    width: newWidth,
    height: newHeight
  };
}

function getSourceCanvas(image, data) {
  var canvas = $('<canvas>')[0];
  var context = canvas.getContext('2d');
  var dstX = 0;
  var dstY = 0;
  var dstWidth = data.naturalWidth;
  var dstHeight = data.naturalHeight;
  var rotate = data.rotate;
  var scaleX = data.scaleX;
  var scaleY = data.scaleY;
  var scalable = isNumber(scaleX) && isNumber(scaleY) && (scaleX !== 1 || scaleY !== 1);
  var rotatable = isNumber(rotate) && rotate !== 0;
  var advanced = rotatable || scalable;
  var canvasWidth = dstWidth * Math.abs(scaleX || 1);
  var canvasHeight = dstHeight * Math.abs(scaleY || 1);
  var translateX = void 0;
  var translateY = void 0;
  var rotated = void 0;

  if (scalable) {
    translateX = canvasWidth / 2;
    translateY = canvasHeight / 2;
  }

  if (rotatable) {
    rotated = getRotatedSizes({
      width: canvasWidth,
      height: canvasHeight,
      degree: rotate
    });

    canvasWidth = rotated.width;
    canvasHeight = rotated.height;
    translateX = canvasWidth / 2;
    translateY = canvasHeight / 2;
  }

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  if (advanced) {
    dstX = -dstWidth / 2;
    dstY = -dstHeight / 2;

    context.save();
    context.translate(translateX, translateY);
  }

  // Rotate should come first before scale as in the "getTransform" function
  if (rotatable) {
    context.rotate(rotate * Math.PI / 180);
  }

  if (scalable) {
    context.scale(scaleX, scaleY);
  }

  context.drawImage(image, Math.floor(dstX), Math.floor(dstY), Math.floor(dstWidth), Math.floor(dstHeight));

  if (advanced) {
    context.restore();
  }

  return canvas;
}

function getStringFromCharCode(dataView, start, length) {
  var str = '';
  var i = void 0;

  for (i = start, length += start; i < length; i++) {
    str += fromCharCode(dataView.getUint8(i));
  }

  return str;
}

function getOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var length = dataView.byteLength;
  var orientation = void 0;
  var exifIDCode = void 0;
  var tiffOffset = void 0;
  var firstIFDOffset = void 0;
  var littleEndian = void 0;
  var endianness = void 0;
  var app1Start = void 0;
  var ifdStart = void 0;
  var offset = void 0;
  var i = void 0;

  // Only handle JPEG image (start by 0xFFD8)
  if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
    offset = 2;

    while (offset < length) {
      if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
        app1Start = offset;
        break;
      }

      offset++;
    }
  }

  if (app1Start) {
    exifIDCode = app1Start + 4;
    tiffOffset = app1Start + 10;

    if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
      endianness = dataView.getUint16(tiffOffset);
      littleEndian = endianness === 0x4949;

      if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
            firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

            if (firstIFDOffset >= 0x00000008) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
    }
  }

  if (ifdStart) {
    length = dataView.getUint16(ifdStart, littleEndian);

    for (i = 0; i < length; i++) {
      offset = ifdStart + i * 12 + 2;

      if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {
          // 8 is the offset of the current tag's value
          offset += 8;

          // Get the original orientation value
          orientation = dataView.getUint16(offset, littleEndian);

          // Override the orientation with its default value for Safari (#120)
          if (IS_SAFARI_OR_UIWEBVIEW) {
            dataView.setUint16(offset, 1, littleEndian);
          }

          break;
        }
    }
  }

  return orientation;
}

function dataURLToArrayBuffer(dataURL) {
  var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
  var binary = atob(base64);
  var length = binary.length;
  var arrayBuffer = new ArrayBuffer(length);
  var dataView = new Uint8Array(arrayBuffer);
  var i = void 0;

  for (i = 0; i < length; i++) {
    dataView[i] = binary.charCodeAt(i);
  }

  return arrayBuffer;
}

// Only available for JPEG image
function arrayBufferToDataURL(arrayBuffer) {
  var dataView = new Uint8Array(arrayBuffer);
  var length = dataView.length;
  var base64 = '';
  var i = void 0;

  for (i = 0; i < length; i++) {
    base64 += fromCharCode(dataView[i]);
  }

  return 'data:image/jpeg;base64,' + btoa(base64);
}

var render$1 = {
  render: function render() {
    var self = this;

    self.initContainer();
    self.initCanvas();
    self.initCropBox();

    self.renderCanvas();

    if (self.cropped) {
      self.renderCropBox();
    }
  },
  initContainer: function initContainer() {
    var self = this;
    var options = self.options;
    var $this = self.$element;
    var $container = self.$container;
    var $cropper = self.$cropper;
    var hidden = 'cropper-hidden';

    $cropper.addClass(hidden);
    $this.removeClass(hidden);

    $cropper.css(self.container = {
      width: Math.max($container.width(), Number(options.minContainerWidth) || 200),
      height: Math.max($container.height(), Number(options.minContainerHeight) || 100)
    });

    $this.addClass(hidden);
    $cropper.removeClass(hidden);
  },


  // Canvas (image wrapper)
  initCanvas: function initCanvas() {
    var self = this;
    var viewMode = self.options.viewMode;
    var container = self.container;
    var containerWidth = container.width;
    var containerHeight = container.height;
    var image = self.image;
    var imageNaturalWidth = image.naturalWidth;
    var imageNaturalHeight = image.naturalHeight;
    var is90Degree = Math.abs(image.rotate) % 180 === 90;
    var naturalWidth = is90Degree ? imageNaturalHeight : imageNaturalWidth;
    var naturalHeight = is90Degree ? imageNaturalWidth : imageNaturalHeight;
    var aspectRatio = naturalWidth / naturalHeight;
    var canvasWidth = containerWidth;
    var canvasHeight = containerHeight;

    if (containerHeight * aspectRatio > containerWidth) {
      if (viewMode === 3) {
        canvasWidth = containerHeight * aspectRatio;
      } else {
        canvasHeight = containerWidth / aspectRatio;
      }
    } else if (viewMode === 3) {
      canvasHeight = containerWidth / aspectRatio;
    } else {
      canvasWidth = containerHeight * aspectRatio;
    }

    var canvas = {
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight,
      aspectRatio: aspectRatio,
      width: canvasWidth,
      height: canvasHeight
    };

    canvas.oldLeft = canvas.left = (containerWidth - canvasWidth) / 2;
    canvas.oldTop = canvas.top = (containerHeight - canvasHeight) / 2;

    self.canvas = canvas;
    self.limited = viewMode === 1 || viewMode === 2;
    self.limitCanvas(true, true);
    self.initialImage = $.extend({}, image);
    self.initialCanvas = $.extend({}, canvas);
  },
  limitCanvas: function limitCanvas(isSizeLimited, isPositionLimited) {
    var self = this;
    var options = self.options;
    var viewMode = options.viewMode;
    var container = self.container;
    var containerWidth = container.width;
    var containerHeight = container.height;
    var canvas = self.canvas;
    var aspectRatio = canvas.aspectRatio;
    var cropBox = self.cropBox;
    var cropped = self.cropped && cropBox;

    if (isSizeLimited) {
      var minCanvasWidth = Number(options.minCanvasWidth) || 0;
      var minCanvasHeight = Number(options.minCanvasHeight) || 0;

      if (viewMode) {
        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerWidth);
          minCanvasHeight = Math.max(minCanvasHeight, containerHeight);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (minCanvasWidth) {
          minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBox.width : 0);
        } else if (minCanvasHeight) {
          minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBox.height : 0);
        } else if (cropped) {
          minCanvasWidth = cropBox.width;
          minCanvasHeight = cropBox.height;

          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      }

      if (minCanvasWidth && minCanvasHeight) {
        if (minCanvasHeight * aspectRatio > minCanvasWidth) {
          minCanvasHeight = minCanvasWidth / aspectRatio;
        } else {
          minCanvasWidth = minCanvasHeight * aspectRatio;
        }
      } else if (minCanvasWidth) {
        minCanvasHeight = minCanvasWidth / aspectRatio;
      } else if (minCanvasHeight) {
        minCanvasWidth = minCanvasHeight * aspectRatio;
      }

      canvas.minWidth = minCanvasWidth;
      canvas.minHeight = minCanvasHeight;
      canvas.maxWidth = Infinity;
      canvas.maxHeight = Infinity;
    }

    if (isPositionLimited) {
      if (viewMode) {
        var newCanvasLeft = containerWidth - canvas.width;
        var newCanvasTop = containerHeight - canvas.height;

        canvas.minLeft = Math.min(0, newCanvasLeft);
        canvas.minTop = Math.min(0, newCanvasTop);
        canvas.maxLeft = Math.max(0, newCanvasLeft);
        canvas.maxTop = Math.max(0, newCanvasTop);

        if (cropped && self.limited) {
          canvas.minLeft = Math.min(cropBox.left, cropBox.left + cropBox.width - canvas.width);
          canvas.minTop = Math.min(cropBox.top, cropBox.top + cropBox.height - canvas.height);
          canvas.maxLeft = cropBox.left;
          canvas.maxTop = cropBox.top;

          if (viewMode === 2) {
            if (canvas.width >= containerWidth) {
              canvas.minLeft = Math.min(0, newCanvasLeft);
              canvas.maxLeft = Math.max(0, newCanvasLeft);
            }

            if (canvas.height >= containerHeight) {
              canvas.minTop = Math.min(0, newCanvasTop);
              canvas.maxTop = Math.max(0, newCanvasTop);
            }
          }
        }
      } else {
        canvas.minLeft = -canvas.width;
        canvas.minTop = -canvas.height;
        canvas.maxLeft = containerWidth;
        canvas.maxTop = containerHeight;
      }
    }
  },
  renderCanvas: function renderCanvas(isChanged) {
    var self = this;
    var canvas = self.canvas;
    var image = self.image;
    var rotate = image.rotate;
    var naturalWidth = image.naturalWidth;
    var naturalHeight = image.naturalHeight;

    if (self.rotated) {
      self.rotated = false;

      // Computes rotated sizes with image sizes
      var rotated = getRotatedSizes({
        width: image.width,
        height: image.height,
        degree: rotate
      });
      var aspectRatio = rotated.width / rotated.height;
      var isSquareImage = image.aspectRatio === 1;

      if (isSquareImage || aspectRatio !== canvas.aspectRatio) {
        canvas.left -= (rotated.width - canvas.width) / 2;
        canvas.top -= (rotated.height - canvas.height) / 2;
        canvas.width = rotated.width;
        canvas.height = rotated.height;
        canvas.aspectRatio = aspectRatio;
        canvas.naturalWidth = naturalWidth;
        canvas.naturalHeight = naturalHeight;

        // Computes rotated sizes with natural image sizes
        if (isSquareImage && rotate % 90 || rotate % 180) {
          var rotated2 = getRotatedSizes({
            width: naturalWidth,
            height: naturalHeight,
            degree: rotate
          });

          canvas.naturalWidth = rotated2.width;
          canvas.naturalHeight = rotated2.height;
        }

        self.limitCanvas(true, false);
      }
    }

    if (canvas.width > canvas.maxWidth || canvas.width < canvas.minWidth) {
      canvas.left = canvas.oldLeft;
    }

    if (canvas.height > canvas.maxHeight || canvas.height < canvas.minHeight) {
      canvas.top = canvas.oldTop;
    }

    canvas.width = Math.min(Math.max(canvas.width, canvas.minWidth), canvas.maxWidth);
    canvas.height = Math.min(Math.max(canvas.height, canvas.minHeight), canvas.maxHeight);

    self.limitCanvas(false, true);

    canvas.oldLeft = canvas.left = Math.min(Math.max(canvas.left, canvas.minLeft), canvas.maxLeft);
    canvas.oldTop = canvas.top = Math.min(Math.max(canvas.top, canvas.minTop), canvas.maxTop);

    self.$canvas.css({
      width: canvas.width,
      height: canvas.height,
      transform: getTransform({
        translateX: canvas.left,
        translateY: canvas.top
      })
    });

    self.renderImage();

    if (self.cropped && self.limited) {
      self.limitCropBox(true, true);
    }

    if (isChanged) {
      self.output();
    }
  },
  renderImage: function renderImage(isChanged) {
    var self = this;
    var canvas = self.canvas;
    var image = self.image;
    var reversed = void 0;

    if (image.rotate) {
      reversed = getRotatedSizes({
        width: canvas.width,
        height: canvas.height,
        degree: image.rotate,
        aspectRatio: image.aspectRatio
      }, true);
    }

    $.extend(image, reversed ? {
      width: reversed.width,
      height: reversed.height,
      left: (canvas.width - reversed.width) / 2,
      top: (canvas.height - reversed.height) / 2
    } : {
      width: canvas.width,
      height: canvas.height,
      left: 0,
      top: 0
    });

    self.$clone.css({
      width: image.width,
      height: image.height,
      transform: getTransform($.extend({
        translateX: image.left,
        translateY: image.top
      }, image))
    });

    if (isChanged) {
      self.output();
    }
  },
  initCropBox: function initCropBox() {
    var self = this;
    var options = self.options;
    var canvas = self.canvas;
    var aspectRatio = options.aspectRatio;
    var autoCropArea = Number(options.autoCropArea) || 0.8;
    var cropBox = {
      width: canvas.width,
      height: canvas.height
    };

    if (aspectRatio) {
      if (canvas.height * aspectRatio > canvas.width) {
        cropBox.height = cropBox.width / aspectRatio;
      } else {
        cropBox.width = cropBox.height * aspectRatio;
      }
    }

    self.cropBox = cropBox;
    self.limitCropBox(true, true);

    // Initialize auto crop area
    cropBox.width = Math.min(Math.max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
    cropBox.height = Math.min(Math.max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

    // The width of auto crop area must large than "minWidth", and the height too. (#164)
    cropBox.width = Math.max(cropBox.minWidth, cropBox.width * autoCropArea);
    cropBox.height = Math.max(cropBox.minHeight, cropBox.height * autoCropArea);
    cropBox.oldLeft = cropBox.left = canvas.left + (canvas.width - cropBox.width) / 2;
    cropBox.oldTop = cropBox.top = canvas.top + (canvas.height - cropBox.height) / 2;

    self.initialCropBox = $.extend({}, cropBox);
  },
  limitCropBox: function limitCropBox(isSizeLimited, isPositionLimited) {
    var self = this;
    var options = self.options;
    var aspectRatio = options.aspectRatio;
    var container = self.container;
    var containerWidth = container.width;
    var containerHeight = container.height;
    var canvas = self.canvas;
    var cropBox = self.cropBox;
    var limited = self.limited;

    if (isSizeLimited) {
      var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
      var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
      var maxCropBoxWidth = Math.min(containerWidth, limited ? canvas.width : containerWidth);
      var maxCropBoxHeight = Math.min(containerHeight, limited ? canvas.height : containerHeight);

      // The min/maxCropBoxWidth/Height must be less than containerWidth/Height
      minCropBoxWidth = Math.min(minCropBoxWidth, containerWidth);
      minCropBoxHeight = Math.min(minCropBoxHeight, containerHeight);

      if (aspectRatio) {
        if (minCropBoxWidth && minCropBoxHeight) {
          if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
        } else if (minCropBoxWidth) {
          minCropBoxHeight = minCropBoxWidth / aspectRatio;
        } else if (minCropBoxHeight) {
          minCropBoxWidth = minCropBoxHeight * aspectRatio;
        }

        if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
          maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
        } else {
          maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
        }
      }

      // The minWidth/Height must be less than maxWidth/Height
      cropBox.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
      cropBox.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
      cropBox.maxWidth = maxCropBoxWidth;
      cropBox.maxHeight = maxCropBoxHeight;
    }

    if (isPositionLimited) {
      if (limited) {
        cropBox.minLeft = Math.max(0, canvas.left);
        cropBox.minTop = Math.max(0, canvas.top);
        cropBox.maxLeft = Math.min(containerWidth, canvas.left + canvas.width) - cropBox.width;
        cropBox.maxTop = Math.min(containerHeight, canvas.top + canvas.height) - cropBox.height;
      } else {
        cropBox.minLeft = 0;
        cropBox.minTop = 0;
        cropBox.maxLeft = containerWidth - cropBox.width;
        cropBox.maxTop = containerHeight - cropBox.height;
      }
    }
  },
  renderCropBox: function renderCropBox() {
    var self = this;
    var options = self.options;
    var container = self.container;
    var containerWidth = container.width;
    var containerHeight = container.height;
    var cropBox = self.cropBox;

    if (cropBox.width > cropBox.maxWidth || cropBox.width < cropBox.minWidth) {
      cropBox.left = cropBox.oldLeft;
    }

    if (cropBox.height > cropBox.maxHeight || cropBox.height < cropBox.minHeight) {
      cropBox.top = cropBox.oldTop;
    }

    cropBox.width = Math.min(Math.max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
    cropBox.height = Math.min(Math.max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

    self.limitCropBox(false, true);

    cropBox.oldLeft = cropBox.left = Math.min(Math.max(cropBox.left, cropBox.minLeft), cropBox.maxLeft);
    cropBox.oldTop = cropBox.top = Math.min(Math.max(cropBox.top, cropBox.minTop), cropBox.maxTop);

    if (options.movable && options.cropBoxMovable) {
      // Turn to move the canvas when the crop box is equal to the container
      self.$face.data('action', cropBox.width === containerWidth && cropBox.height === containerHeight ? 'move' : 'all');
    }

    self.$cropBox.css({
      width: cropBox.width,
      height: cropBox.height,
      transform: getTransform({
        translateX: cropBox.left,
        translateY: cropBox.top
      })
    });

    if (self.cropped && self.limited) {
      self.limitCanvas(true, true);
    }

    if (!self.disabled) {
      self.output();
    }
  },
  output: function output() {
    var self = this;

    self.preview();

    if (self.completed) {
      self.trigger('crop', self.getData());
    }
  }
};

var DATA_PREVIEW = 'preview';

var preview$1 = {
  initPreview: function initPreview() {
    var self = this;
    var crossOrigin = self.crossOrigin;
    var url = crossOrigin ? self.crossOriginUrl : self.url;
    var image = document.createElement('img');

    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }

    image.src = url;

    var $clone2 = $(image);

    self.$preview = $(self.options.preview);
    self.$clone2 = $clone2;
    self.$viewBox.html($clone2);
    self.$preview.each(function (i, element) {
      var $this = $(element);
      var img = document.createElement('img');

      // Save the original size for recover
      $this.data(DATA_PREVIEW, {
        width: $this.width(),
        height: $this.height(),
        html: $this.html()
      });

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.src = url;

      /**
       * Override img element styles
       * Add `display:block` to avoid margin top issue
       * Add `height:auto` to override `height` attribute on IE8
       * (Occur only when margin-top <= -height)
       */
      img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';

      $this.html(img);
    });
  },
  resetPreview: function resetPreview() {
    this.$preview.each(function (i, element) {
      var $this = $(element);
      var data = $this.data(DATA_PREVIEW);

      $this.css({
        width: data.width,
        height: data.height
      }).html(data.html).removeData(DATA_PREVIEW);
    });
  },
  preview: function preview() {
    var self = this;
    var image = self.image;
    var canvas = self.canvas;
    var cropBox = self.cropBox;
    var cropBoxWidth = cropBox.width;
    var cropBoxHeight = cropBox.height;
    var width = image.width;
    var height = image.height;
    var left = cropBox.left - canvas.left - image.left;
    var top = cropBox.top - canvas.top - image.top;

    if (!self.cropped || self.disabled) {
      return;
    }

    self.$clone2.css({
      width: width,
      height: height,
      transform: getTransform($.extend({
        translateX: -left,
        translateY: -top
      }, image))
    });

    self.$preview.each(function (i, element) {
      var $this = $(element);
      var data = $this.data(DATA_PREVIEW);
      var originalWidth = data.width;
      var originalHeight = data.height;
      var newWidth = originalWidth;
      var newHeight = originalHeight;
      var ratio = 1;

      if (cropBoxWidth) {
        ratio = originalWidth / cropBoxWidth;
        newHeight = cropBoxHeight * ratio;
      }

      if (cropBoxHeight && newHeight > originalHeight) {
        ratio = originalHeight / cropBoxHeight;
        newWidth = cropBoxWidth * ratio;
        newHeight = originalHeight;
      }

      $this.css({
        width: newWidth,
        height: newHeight
      }).find('img').css({
        width: width * ratio,
        height: height * ratio,
        transform: getTransform($.extend({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, image))
      });
    });
  }
};

// Globals
var PointerEvent = typeof window !== 'undefined' ? window.PointerEvent : null;

// Events
var EVENT_POINTER_DOWN = PointerEvent ? 'pointerdown' : 'touchstart mousedown';
var EVENT_POINTER_MOVE = PointerEvent ? 'pointermove' : 'touchmove mousemove';
var EVENT_POINTER_UP = PointerEvent ? ' pointerup pointercancel' : 'touchend touchcancel mouseup';
var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
var EVENT_DBLCLICK = 'dblclick';
var EVENT_RESIZE = 'resize';
var EVENT_CROP_START = 'cropstart';
var EVENT_CROP_MOVE = 'cropmove';
var EVENT_CROP_END = 'cropend';
var EVENT_CROP = 'crop';
var EVENT_ZOOM = 'zoom';

var events = {
  bind: function bind() {
    var self = this;
    var options = self.options;
    var $this = self.$element;
    var $cropper = self.$cropper;

    if ($.isFunction(options.cropstart)) {
      $this.on(EVENT_CROP_START, options.cropstart);
    }

    if ($.isFunction(options.cropmove)) {
      $this.on(EVENT_CROP_MOVE, options.cropmove);
    }

    if ($.isFunction(options.cropend)) {
      $this.on(EVENT_CROP_END, options.cropend);
    }

    if ($.isFunction(options.crop)) {
      $this.on(EVENT_CROP, options.crop);
    }

    if ($.isFunction(options.zoom)) {
      $this.on(EVENT_ZOOM, options.zoom);
    }

    $cropper.on(EVENT_POINTER_DOWN, proxy(self.cropStart, this));

    if (options.zoomable && options.zoomOnWheel) {
      $cropper.on(EVENT_WHEEL, proxy(self.wheel, this));
    }

    if (options.toggleDragModeOnDblclick) {
      $cropper.on(EVENT_DBLCLICK, proxy(self.dblclick, this));
    }

    $(document).on(EVENT_POINTER_MOVE, self.onCropMove = proxy(self.cropMove, this)).on(EVENT_POINTER_UP, self.onCropEnd = proxy(self.cropEnd, this));

    if (options.responsive) {
      $(window).on(EVENT_RESIZE, self.onResize = proxy(self.resize, this));
    }
  },
  unbind: function unbind() {
    var self = this;
    var options = self.options;
    var $this = self.$element;
    var $cropper = self.$cropper;

    if ($.isFunction(options.cropstart)) {
      $this.off(EVENT_CROP_START, options.cropstart);
    }

    if ($.isFunction(options.cropmove)) {
      $this.off(EVENT_CROP_MOVE, options.cropmove);
    }

    if ($.isFunction(options.cropend)) {
      $this.off(EVENT_CROP_END, options.cropend);
    }

    if ($.isFunction(options.crop)) {
      $this.off(EVENT_CROP, options.crop);
    }

    if ($.isFunction(options.zoom)) {
      $this.off(EVENT_ZOOM, options.zoom);
    }

    $cropper.off(EVENT_POINTER_DOWN, self.cropStart);

    if (options.zoomable && options.zoomOnWheel) {
      $cropper.off(EVENT_WHEEL, self.wheel);
    }

    if (options.toggleDragModeOnDblclick) {
      $cropper.off(EVENT_DBLCLICK, self.dblclick);
    }

    $(document).off(EVENT_POINTER_MOVE, self.onCropMove).off(EVENT_POINTER_UP, self.onCropEnd);

    if (options.responsive) {
      $(window).off(EVENT_RESIZE, self.onResize);
    }
  }
};

var REGEXP_ACTIONS = /^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;

function getPointer(_ref, endOnly) {
  var pageX = _ref.pageX,
      pageY = _ref.pageY;

  var end = {
    endX: pageX,
    endY: pageY
  };

  if (endOnly) {
    return end;
  }

  return $.extend({
    startX: pageX,
    startY: pageY
  }, end);
}

var handlers = {
  resize: function resize() {
    var self = this;
    var options = self.options;
    var $container = self.$container;
    var container = self.container;
    var minContainerWidth = Number(options.minContainerWidth) || 200;
    var minContainerHeight = Number(options.minContainerHeight) || 100;

    if (self.disabled || container.width === minContainerWidth || container.height === minContainerHeight) {
      return;
    }

    var ratio = $container.width() / container.width;

    // Resize when width changed or height changed
    if (ratio !== 1 || $container.height() !== container.height) {
      (function () {
        var canvasData = void 0;
        var cropBoxData = void 0;

        if (options.restore) {
          canvasData = self.getCanvasData();
          cropBoxData = self.getCropBoxData();
        }

        self.render();

        if (options.restore) {
          self.setCanvasData($.each(canvasData, function (i, n) {
            canvasData[i] = n * ratio;
          }));
          self.setCropBoxData($.each(cropBoxData, function (i, n) {
            cropBoxData[i] = n * ratio;
          }));
        }
      })();
    }
  },
  dblclick: function dblclick() {
    var self = this;

    if (self.disabled || self.options.dragMode === 'none') {
      return;
    }

    self.setDragMode(self.$dragBox.hasClass('cropper-crop') ? 'move' : 'crop');
  },
  wheel: function wheel(event) {
    var self = this;
    var e = event.originalEvent || event;
    var ratio = Number(self.options.wheelZoomRatio) || 0.1;

    if (self.disabled) {
      return;
    }

    event.preventDefault();

    // Limit wheel speed to prevent zoom too fast
    if (self.wheeling) {
      return;
    }

    self.wheeling = true;

    setTimeout(function () {
      self.wheeling = false;
    }, 50);

    var delta = 1;

    if (e.deltaY) {
      delta = e.deltaY > 0 ? 1 : -1;
    } else if (e.wheelDelta) {
      delta = -e.wheelDelta / 120;
    } else if (e.detail) {
      delta = e.detail > 0 ? 1 : -1;
    }

    self.zoom(-delta * ratio, event);
  },
  cropStart: function cropStart(e) {
    var self = this;

    if (self.disabled) {
      return;
    }

    var options = self.options;
    var pointers = self.pointers;
    var originalEvent = e.originalEvent;
    var action = void 0;

    if (originalEvent && originalEvent.changedTouches) {
      // Handle touch event
      $.each(originalEvent.changedTouches, function (i, touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      // Handle mouse event and pointer event
      pointers[originalEvent && originalEvent.pointerId || 0] = getPointer(originalEvent || e);
    }

    if (objectKeys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
      action = 'zoom';
    } else {
      action = $(e.target).data('action');
    }

    if (!REGEXP_ACTIONS.test(action)) {
      return;
    }

    if (self.trigger('cropstart', {
      originalEvent: originalEvent,
      action: action
    }).isDefaultPrevented()) {
      return;
    }

    e.preventDefault();

    self.action = action;
    self.cropping = false;

    if (action === 'crop') {
      self.cropping = true;
      self.$dragBox.addClass('cropper-modal');
    }
  },
  cropMove: function cropMove(e) {
    var self = this;
    var action = self.action;

    if (self.disabled || !action) {
      return;
    }

    var pointers = self.pointers;
    var originalEvent = e.originalEvent;

    e.preventDefault();

    if (self.trigger('cropmove', {
      originalEvent: originalEvent,
      action: action
    }).isDefaultPrevented()) {
      return;
    }

    if (originalEvent && originalEvent.changedTouches) {
      $.each(originalEvent.changedTouches, function (i, touch) {
        $.extend(pointers[touch.identifier], getPointer(touch, true));
      });
    } else {
      $.extend(pointers[originalEvent && originalEvent.pointerId || 0], getPointer(originalEvent || e, true));
    }

    self.change(e);
  },
  cropEnd: function cropEnd(e) {
    var self = this;

    if (self.disabled) {
      return;
    }

    var action = self.action;
    var pointers = self.pointers;
    var originalEvent = e.originalEvent;

    if (originalEvent && originalEvent.changedTouches) {
      $.each(originalEvent.changedTouches, function (i, touch) {
        delete pointers[touch.identifier];
      });
    } else {
      delete pointers[originalEvent && originalEvent.pointerId || 0];
    }

    if (!action) {
      return;
    }

    e.preventDefault();

    if (!objectKeys(pointers).length) {
      self.action = '';
    }

    if (self.cropping) {
      self.cropping = false;
      self.$dragBox.toggleClass('cropper-modal', self.cropped && self.options.modal);
    }

    self.trigger('cropend', {
      originalEvent: originalEvent,
      action: action
    });
  }
};

// Actions
var ACTION_EAST = 'e';
var ACTION_WEST = 'w';
var ACTION_SOUTH = 's';
var ACTION_NORTH = 'n';
var ACTION_SOUTH_EAST = 'se';
var ACTION_SOUTH_WEST = 'sw';
var ACTION_NORTH_EAST = 'ne';
var ACTION_NORTH_WEST = 'nw';

function getMaxZoomRatio(pointers) {
  var pointers2 = $.extend({}, pointers);
  var ratios = [];

  $.each(pointers, function (pointerId, pointer) {
    delete pointers2[pointerId];

    $.each(pointers2, function (pointerId2, pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;

      ratios.push(ratio);
    });
  });

  ratios.sort(function (a, b) {
    return Math.abs(a) < Math.abs(b);
  });

  return ratios[0];
}

var change$1 = {
  change: function change(e) {
    var self = this;
    var options = self.options;
    var pointers = self.pointers;
    var pointer = pointers[objectKeys(pointers)[0]];
    var container = self.container;
    var canvas = self.canvas;
    var cropBox = self.cropBox;
    var action = self.action;
    var aspectRatio = options.aspectRatio;
    var width = cropBox.width;
    var height = cropBox.height;
    var left = cropBox.left;
    var top = cropBox.top;
    var right = left + width;
    var bottom = top + height;
    var minLeft = 0;
    var minTop = 0;
    var maxWidth = container.width;
    var maxHeight = container.height;
    var renderable = true;
    var offset = void 0;

    // Locking aspect ratio in "free mode" by holding shift key (#259)
    if (!aspectRatio && e.shiftKey) {
      aspectRatio = width && height ? width / height : 1;
    }

    if (self.limited) {
      minLeft = cropBox.minLeft;
      minTop = cropBox.minTop;
      maxWidth = minLeft + Math.min(container.width, canvas.width, canvas.left + canvas.width);
      maxHeight = minTop + Math.min(container.height, canvas.height, canvas.top + canvas.height);
    }

    var range = {
      x: pointer.endX - pointer.startX,
      y: pointer.endY - pointer.startY
    };

    if (aspectRatio) {
      range.X = range.y * aspectRatio;
      range.Y = range.x / aspectRatio;
    }

    switch (action) {
      // Move crop box
      case 'all':
        left += range.x;
        top += range.y;
        break;

      // Resize crop box
      case ACTION_EAST:
        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        width += range.x;

        if (aspectRatio) {
          height = width / aspectRatio;
          top -= range.Y / 2;
        }

        if (width < 0) {
          action = ACTION_WEST;
          width = 0;
        }

        break;

      case ACTION_NORTH:
        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        height -= range.y;
        top += range.y;

        if (aspectRatio) {
          width = height * aspectRatio;
          left += range.X / 2;
        }

        if (height < 0) {
          action = ACTION_SOUTH;
          height = 0;
        }

        break;

      case ACTION_WEST:
        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        width -= range.x;
        left += range.x;

        if (aspectRatio) {
          height = width / aspectRatio;
          top += range.Y / 2;
        }

        if (width < 0) {
          action = ACTION_EAST;
          width = 0;
        }

        break;

      case ACTION_SOUTH:
        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        height += range.y;

        if (aspectRatio) {
          width = height * aspectRatio;
          left -= range.X / 2;
        }

        if (height < 0) {
          action = ACTION_NORTH;
          height = 0;
        }

        break;

      case ACTION_NORTH_EAST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
            renderable = false;
            break;
          }

          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
        } else {
          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_WEST;
          height = 0;
          width = 0;
        } else if (width < 0) {
          action = ACTION_NORTH_WEST;
          width = 0;
        } else if (height < 0) {
          action = ACTION_SOUTH_EAST;
          height = 0;
        }

        break;

      case ACTION_NORTH_WEST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
            renderable = false;
            break;
          }

          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
          left += range.X;
        } else {
          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_EAST;
          height = 0;
          width = 0;
        } else if (width < 0) {
          action = ACTION_NORTH_EAST;
          width = 0;
        } else if (height < 0) {
          action = ACTION_SOUTH_WEST;
          height = 0;
        }

        break;

      case ACTION_SOUTH_WEST:
        if (aspectRatio) {
          if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          width -= range.x;
          left += range.x;
          height = width / aspectRatio;
        } else {
          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_NORTH_EAST;
          height = 0;
          width = 0;
        } else if (width < 0) {
          action = ACTION_SOUTH_EAST;
          width = 0;
        } else if (height < 0) {
          action = ACTION_NORTH_WEST;
          height = 0;
        }

        break;

      case ACTION_SOUTH_EAST:
        if (aspectRatio) {
          if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          width += range.x;
          height = width / aspectRatio;
        } else {
          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_NORTH_WEST;
          height = 0;
          width = 0;
        } else if (width < 0) {
          action = ACTION_SOUTH_WEST;
          width = 0;
        } else if (height < 0) {
          action = ACTION_NORTH_EAST;
          height = 0;
        }

        break;

      // Move canvas
      case 'move':
        self.move(range.x, range.y);
        renderable = false;
        break;

      // Zoom canvas
      case 'zoom':
        self.zoom(getMaxZoomRatio(pointers), e.originalEvent);
        renderable = false;
        break;

      // Create crop box
      case 'crop':
        if (!range.x || !range.y) {
          renderable = false;
          break;
        }

        offset = self.$cropper.offset();
        left = pointer.startX - offset.left;
        top = pointer.startY - offset.top;
        width = cropBox.minWidth;
        height = cropBox.minHeight;

        if (range.x > 0) {
          action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
        } else if (range.x < 0) {
          left -= width;
          action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
        }

        if (range.y < 0) {
          top -= height;
        }

        // Show the crop box if is hidden
        if (!self.cropped) {
          self.$cropBox.removeClass('cropper-hidden');
          self.cropped = true;

          if (self.limited) {
            self.limitCropBox(true, true);
          }
        }

        break;

      // No default
    }

    if (renderable) {
      cropBox.width = width;
      cropBox.height = height;
      cropBox.left = left;
      cropBox.top = top;
      self.action = action;
      self.renderCropBox();
    }

    // Override
    $.each(pointers, function (i, p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  }
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;

  $.each(pointers, function (i, _ref) {
    var startX = _ref.startX,
        startY = _ref.startY;

    pageX += startX;
    pageY += startY;
    count += 1;
  });

  pageX /= count;
  pageY /= count;

  return {
    pageX: pageX,
    pageY: pageY
  };
}

var methods = {
  // Show the crop box manually
  crop: function crop() {
    var self = this;

    if (!self.ready || self.disabled) {
      return;
    }

    if (!self.cropped) {
      self.cropped = true;
      self.limitCropBox(true, true);

      if (self.options.modal) {
        self.$dragBox.addClass('cropper-modal');
      }

      self.$cropBox.removeClass('cropper-hidden');
    }

    self.setCropBoxData(self.initialCropBox);
  },


  // Reset the image and crop box to their initial states
  reset: function reset() {
    var self = this;

    if (!self.ready || self.disabled) {
      return;
    }

    self.image = $.extend({}, self.initialImage);
    self.canvas = $.extend({}, self.initialCanvas);
    self.cropBox = $.extend({}, self.initialCropBox);

    self.renderCanvas();

    if (self.cropped) {
      self.renderCropBox();
    }
  },


  // Clear the crop box
  clear: function clear() {
    var self = this;

    if (!self.cropped || self.disabled) {
      return;
    }

    $.extend(self.cropBox, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    });

    self.cropped = false;
    self.renderCropBox();

    self.limitCanvas(true, true);

    // Render canvas after crop box rendered
    self.renderCanvas();

    self.$dragBox.removeClass('cropper-modal');
    self.$cropBox.addClass('cropper-hidden');
  },


  /**
   * Replace the image's src and rebuild the cropper
   *
   * @param {String} url
   * @param {Boolean} onlyColorChanged (optional)
   */
  replace: function replace(url, onlyColorChanged) {
    var self = this;

    if (!self.disabled && url) {
      if (self.isImg) {
        self.$element.attr('src', url);
      }

      if (onlyColorChanged) {
        self.url = url;
        self.$clone.attr('src', url);

        if (self.ready) {
          self.$preview.find('img').add(self.$clone2).attr('src', url);
        }
      } else {
        if (self.isImg) {
          self.replaced = true;
        }

        // Clear previous data
        self.options.data = null;
        self.load(url);
      }
    }
  },


  // Enable (unfreeze) the cropper
  enable: function enable() {
    var self = this;

    if (self.ready) {
      self.disabled = false;
      self.$cropper.removeClass('cropper-disabled');
    }
  },


  // Disable (freeze) the cropper
  disable: function disable() {
    var self = this;

    if (self.ready) {
      self.disabled = true;
      self.$cropper.addClass('cropper-disabled');
    }
  },


  // Destroy the cropper and remove the instance from the image
  destroy: function destroy() {
    var self = this;
    var $this = self.$element;

    if (self.loaded) {
      if (self.isImg && self.replaced) {
        $this.attr('src', self.originalUrl);
      }

      self.unbuild();
      $this.removeClass('cropper-hidden');
    } else if (self.isImg) {
      $this.off('load', self.start);
    } else if (self.$clone) {
      self.$clone.remove();
    }

    $this.removeData('cropper');
  },


  /**
   * Move the canvas with relative offsets
   *
   * @param {Number} offsetX
   * @param {Number} offsetY (optional)
   */
  move: function move(offsetX, offsetY) {
    var self = this;
    var canvas = self.canvas;

    self.moveTo(isUndefined(offsetX) ? offsetX : canvas.left + Number(offsetX), isUndefined(offsetY) ? offsetY : canvas.top + Number(offsetY));
  },


  /**
   * Move the canvas to an absolute point
   *
   * @param {Number} x
   * @param {Number} y (optional)
   */
  moveTo: function moveTo(x, y) {
    var self = this;
    var canvas = self.canvas;
    var changed = false;

    // If "y" is not present, its default value is "x"
    if (isUndefined(y)) {
      y = x;
    }

    x = Number(x);
    y = Number(y);

    if (self.ready && !self.disabled && self.options.movable) {
      if (isNumber(x)) {
        canvas.left = x;
        changed = true;
      }

      if (isNumber(y)) {
        canvas.top = y;
        changed = true;
      }

      if (changed) {
        self.renderCanvas(true);
      }
    }
  },


  /**
   * Zoom the canvas with a relative ratio
   *
   * @param {Number} ratio
   * @param {jQuery Event} _event (private)
   */
  zoom: function zoom(ratio, _event) {
    var self = this;
    var canvas = self.canvas;

    ratio = Number(ratio);

    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }

    self.zoomTo(canvas.width * ratio / canvas.naturalWidth, _event);
  },


  /**
   * Zoom the canvas to an absolute ratio
   *
   * @param {Number} ratio
   * @param {jQuery Event} _event (private)
   */
  zoomTo: function zoomTo(ratio, _event) {
    var self = this;
    var options = self.options;
    var pointers = self.pointers;
    var canvas = self.canvas;
    var width = canvas.width;
    var height = canvas.height;
    var naturalWidth = canvas.naturalWidth;
    var naturalHeight = canvas.naturalHeight;

    ratio = Number(ratio);

    if (ratio >= 0 && self.ready && !self.disabled && options.zoomable) {
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;
      var originalEvent = void 0;

      if (_event) {
        originalEvent = _event.originalEvent;
      }

      if (self.trigger('zoom', {
        originalEvent: originalEvent,
        oldRatio: width / naturalWidth,
        ratio: newWidth / naturalWidth
      }).isDefaultPrevented()) {
        return;
      }

      if (originalEvent) {
        var offset = self.$cropper.offset();
        var center = pointers && objectKeys(pointers).length ? getPointersCenter(pointers) : {
          pageX: _event.pageX || originalEvent.pageX || 0,
          pageY: _event.pageY || originalEvent.pageY || 0
        };

        // Zoom from the triggering point of the event
        canvas.left -= (newWidth - width) * ((center.pageX - offset.left - canvas.left) / width);
        canvas.top -= (newHeight - height) * ((center.pageY - offset.top - canvas.top) / height);
      } else {
        // Zoom from the center of the canvas
        canvas.left -= (newWidth - width) / 2;
        canvas.top -= (newHeight - height) / 2;
      }

      canvas.width = newWidth;
      canvas.height = newHeight;
      self.renderCanvas(true);
    }
  },


  /**
   * Rotate the canvas with a relative degree
   *
   * @param {Number} degree
   */
  rotate: function rotate(degree) {
    var self = this;

    self.rotateTo((self.image.rotate || 0) + Number(degree));
  },


  /**
   * Rotate the canvas to an absolute degree
   * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#rotate()
   *
   * @param {Number} degree
   */
  rotateTo: function rotateTo(degree) {
    var self = this;

    degree = Number(degree);

    if (isNumber(degree) && self.ready && !self.disabled && self.options.rotatable) {
      self.image.rotate = degree % 360;
      self.rotated = true;
      self.renderCanvas(true);
    }
  },


  /**
   * Scale the image
   * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scale()
   *
   * @param {Number} scaleX
   * @param {Number} scaleY (optional)
   */
  scale: function scale(scaleX, scaleY) {
    var self = this;
    var image = self.image;
    var changed = false;

    // If "scaleY" is not present, its default value is "scaleX"
    if (isUndefined(scaleY)) {
      scaleY = scaleX;
    }

    scaleX = Number(scaleX);
    scaleY = Number(scaleY);

    if (self.ready && !self.disabled && self.options.scalable) {
      if (isNumber(scaleX)) {
        image.scaleX = scaleX;
        changed = true;
      }

      if (isNumber(scaleY)) {
        image.scaleY = scaleY;
        changed = true;
      }

      if (changed) {
        self.renderImage(true);
      }
    }
  },


  /**
   * Scale the abscissa of the image
   *
   * @param {Number} scaleX
   */
  scaleX: function scaleX(_scaleX) {
    var self = this;
    var scaleY = self.image.scaleY;

    self.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
  },


  /**
   * Scale the ordinate of the image
   *
   * @param {Number} scaleY
   */
  scaleY: function scaleY(_scaleY) {
    var self = this;
    var scaleX = self.image.scaleX;

    self.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
  },


  /**
   * Get the cropped area position and size data (base on the original image)
   *
   * @param {Boolean} isRounded (optional)
   * @return {Object} data
   */
  getData: function getData(isRounded) {
    var self = this;
    var options = self.options;
    var image = self.image;
    var canvas = self.canvas;
    var cropBox = self.cropBox;
    var ratio = void 0;
    var data = void 0;

    if (self.ready && self.cropped) {
      data = {
        x: cropBox.left - canvas.left,
        y: cropBox.top - canvas.top,
        width: cropBox.width,
        height: cropBox.height
      };

      ratio = image.width / image.naturalWidth;

      $.each(data, function (i, n) {
        n /= ratio;
        data[i] = isRounded ? Math.round(n) : n;
      });
    } else {
      data = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }

    if (options.rotatable) {
      data.rotate = image.rotate || 0;
    }

    if (options.scalable) {
      data.scaleX = image.scaleX || 1;
      data.scaleY = image.scaleY || 1;
    }

    return data;
  },


  /**
   * Set the cropped area position and size with new data
   *
   * @param {Object} data
   */
  setData: function setData(data) {
    var self = this;
    var options = self.options;
    var image = self.image;
    var canvas = self.canvas;
    var cropBoxData = {};
    var rotated = void 0;
    var isScaled = void 0;
    var ratio = void 0;

    if ($.isFunction(data)) {
      data = data.call(self.element);
    }

    if (self.ready && !self.disabled && $.isPlainObject(data)) {
      if (options.rotatable) {
        if (isNumber(data.rotate) && data.rotate !== image.rotate) {
          image.rotate = data.rotate;
          self.rotated = rotated = true;
        }
      }

      if (options.scalable) {
        if (isNumber(data.scaleX) && data.scaleX !== image.scaleX) {
          image.scaleX = data.scaleX;
          isScaled = true;
        }

        if (isNumber(data.scaleY) && data.scaleY !== image.scaleY) {
          image.scaleY = data.scaleY;
          isScaled = true;
        }
      }

      if (rotated) {
        self.renderCanvas();
      } else if (isScaled) {
        self.renderImage();
      }

      ratio = image.width / image.naturalWidth;

      if (isNumber(data.x)) {
        cropBoxData.left = data.x * ratio + canvas.left;
      }

      if (isNumber(data.y)) {
        cropBoxData.top = data.y * ratio + canvas.top;
      }

      if (isNumber(data.width)) {
        cropBoxData.width = data.width * ratio;
      }

      if (isNumber(data.height)) {
        cropBoxData.height = data.height * ratio;
      }

      self.setCropBoxData(cropBoxData);
    }
  },


  /**
   * Get the container size data
   *
   * @return {Object} data
   */
  getContainerData: function getContainerData() {
    return this.ready ? this.container : {};
  },


  /**
   * Get the image position and size data
   *
   * @return {Object} data
   */
  getImageData: function getImageData() {
    return this.loaded ? this.image : {};
  },


  /**
   * Get the canvas position and size data
   *
   * @return {Object} data
   */
  getCanvasData: function getCanvasData() {
    var self = this;
    var canvas = self.canvas;
    var data = {};

    if (self.ready) {
      $.each(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (i, n) {
        data[n] = canvas[n];
      });
    }

    return data;
  },


  /**
   * Set the canvas position and size with new data
   *
   * @param {Object} data
   */
  setCanvasData: function setCanvasData(data) {
    var self = this;
    var canvas = self.canvas;
    var aspectRatio = canvas.aspectRatio;

    if ($.isFunction(data)) {
      data = data.call(self.$element);
    }

    if (self.ready && !self.disabled && $.isPlainObject(data)) {
      if (isNumber(data.left)) {
        canvas.left = data.left;
      }

      if (isNumber(data.top)) {
        canvas.top = data.top;
      }

      if (isNumber(data.width)) {
        canvas.width = data.width;
        canvas.height = data.width / aspectRatio;
      } else if (isNumber(data.height)) {
        canvas.height = data.height;
        canvas.width = data.height * aspectRatio;
      }

      self.renderCanvas(true);
    }
  },


  /**
   * Get the crop box position and size data
   *
   * @return {Object} data
   */
  getCropBoxData: function getCropBoxData() {
    var self = this;
    var cropBox = self.cropBox;

    return self.ready && self.cropped ? {
      left: cropBox.left,
      top: cropBox.top,
      width: cropBox.width,
      height: cropBox.height
    } : {};
  },


  /**
   * Set the crop box position and size with new data
   *
   * @param {Object} data
   */
  setCropBoxData: function setCropBoxData(data) {
    var self = this;
    var cropBox = self.cropBox;
    var aspectRatio = self.options.aspectRatio;
    var widthChanged = void 0;
    var heightChanged = void 0;

    if ($.isFunction(data)) {
      data = data.call(self.$element);
    }

    if (self.ready && self.cropped && !self.disabled && $.isPlainObject(data)) {
      if (isNumber(data.left)) {
        cropBox.left = data.left;
      }

      if (isNumber(data.top)) {
        cropBox.top = data.top;
      }

      if (isNumber(data.width) && data.width !== cropBox.width) {
        widthChanged = true;
        cropBox.width = data.width;
      }

      if (isNumber(data.height) && data.height !== cropBox.height) {
        heightChanged = true;
        cropBox.height = data.height;
      }

      if (aspectRatio) {
        if (widthChanged) {
          cropBox.height = cropBox.width / aspectRatio;
        } else if (heightChanged) {
          cropBox.width = cropBox.height * aspectRatio;
        }
      }

      self.renderCropBox();
    }
  },


  /**
   * Get a canvas drawn the cropped image
   *
   * @param {Object} options (optional)
   * @return {HTMLCanvasElement} canvas
   */
  getCroppedCanvas: function getCroppedCanvas(options) {
    var self = this;

    if (!self.ready || !window.HTMLCanvasElement) {
      return null;
    }

    if (!self.cropped) {
      return getSourceCanvas(self.$clone[0], self.image);
    }

    if (!$.isPlainObject(options)) {
      options = {};
    }

    var data = self.getData();
    var originalWidth = data.width;
    var originalHeight = data.height;
    var aspectRatio = originalWidth / originalHeight;
    var scaledWidth = void 0;
    var scaledHeight = void 0;
    var scaledRatio = void 0;

    if ($.isPlainObject(options)) {
      scaledWidth = options.width;
      scaledHeight = options.height;

      if (scaledWidth) {
        scaledHeight = scaledWidth / aspectRatio;
        scaledRatio = scaledWidth / originalWidth;
      } else if (scaledHeight) {
        scaledWidth = scaledHeight * aspectRatio;
        scaledRatio = scaledHeight / originalHeight;
      }
    }

    // The canvas element will use `Math.Math.floor` on a float number, so Math.floor first
    var canvasWidth = Math.floor(scaledWidth || originalWidth);
    var canvasHeight = Math.floor(scaledHeight || originalHeight);

    var canvas = $('<canvas>')[0];
    var context = canvas.getContext('2d');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    if (options.fillColor) {
      context.fillStyle = options.fillColor;
      context.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
    var parameters = function () {
      var source = getSourceCanvas(self.$clone[0], self.image);
      var sourceWidth = source.width;
      var sourceHeight = source.height;
      var canvasData = self.canvas;
      var params = [source];

      // Source canvas
      var srcX = data.x + canvasData.naturalWidth * (Math.abs(data.scaleX || 1) - 1) / 2;
      var srcY = data.y + canvasData.naturalHeight * (Math.abs(data.scaleY || 1) - 1) / 2;
      var srcWidth = void 0;
      var srcHeight = void 0;

      // Destination canvas
      var dstX = void 0;
      var dstY = void 0;
      var dstWidth = void 0;
      var dstHeight = void 0;

      if (srcX <= -originalWidth || srcX > sourceWidth) {
        srcX = srcWidth = dstX = dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = dstWidth = Math.min(sourceWidth, originalWidth + srcX);
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = dstWidth = Math.min(originalWidth, sourceWidth - srcX);
      }

      if (srcWidth <= 0 || srcY <= -originalHeight || srcY > sourceHeight) {
        srcY = srcHeight = dstY = dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = dstHeight = Math.min(sourceHeight, originalHeight + srcY);
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = dstHeight = Math.min(originalHeight, sourceHeight - srcY);
      }

      // All the numerical parameters should be integer for `drawImage` (#476)
      params.push(Math.floor(srcX), Math.floor(srcY), Math.floor(srcWidth), Math.floor(srcHeight));

      // Scale destination sizes
      if (scaledRatio) {
        dstX *= scaledRatio;
        dstY *= scaledRatio;
        dstWidth *= scaledRatio;
        dstHeight *= scaledRatio;
      }

      // Avoid "IndexSizeError" in IE and Firefox
      if (dstWidth > 0 && dstHeight > 0) {
        params.push(Math.floor(dstX), Math.floor(dstY), Math.floor(dstWidth), Math.floor(dstHeight));
      }

      return params;
    }();

    context.drawImage.apply(context, toConsumableArray(parameters));

    return canvas;
  },


  /**
   * Change the aspect ratio of the crop box
   *
   * @param {Number} aspectRatio
   */
  setAspectRatio: function setAspectRatio(aspectRatio) {
    var self = this;
    var options = self.options;

    if (!self.disabled && !isUndefined(aspectRatio)) {
      // 0 -> NaN
      options.aspectRatio = Math.max(0, aspectRatio) || NaN;

      if (self.ready) {
        self.initCropBox();

        if (self.cropped) {
          self.renderCropBox();
        }
      }
    }
  },


  /**
   * Change the drag mode
   *
   * @param {String} mode (optional)
   */
  setDragMode: function setDragMode(mode) {
    var self = this;
    var options = self.options;
    var croppable = void 0;
    var movable = void 0;

    if (self.loaded && !self.disabled) {
      croppable = mode === 'crop';
      movable = options.movable && mode === 'move';
      mode = croppable || movable ? mode : 'none';

      self.$dragBox.data('action', mode).toggleClass('cropper-crop', croppable).toggleClass('cropper-move', movable);

      if (!options.cropBoxMovable) {
        // Sync drag mode to crop box when it is not movable(#300)
        self.$face.data('action', mode).toggleClass('cropper-crop', croppable).toggleClass('cropper-move', movable);
      }
    }
  }
};

var CLASS_HIDDEN = 'cropper-hidden';
var REGEXP_DATA_URL = /^data:/;
var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;

var Cropper = function () {
  function Cropper(element, options) {
    classCallCheck(this, Cropper);

    var self = this;

    self.$element = $(element);
    self.options = $.extend({}, DEFAULTS, $.isPlainObject(options) && options);
    self.loaded = false;
    self.ready = false;
    self.completed = false;
    self.rotated = false;
    self.cropped = false;
    self.disabled = false;
    self.replaced = false;
    self.limited = false;
    self.wheeling = false;
    self.isImg = false;
    self.originalUrl = '';
    self.canvas = null;
    self.cropBox = null;
    self.pointers = {};
    self.init();
  }

  createClass(Cropper, [{
    key: 'init',
    value: function init() {
      var self = this;
      var $this = self.$element;
      var url = void 0;

      if ($this.is('img')) {
        self.isImg = true;

        // Should use `$.fn.attr` here. e.g.: "img/picture.jpg"
        self.originalUrl = url = $this.attr('src');

        // Stop when it's a blank image
        if (!url) {
          return;
        }

        // Should use `$.fn.prop` here. e.g.: "http://example.com/img/picture.jpg"
        url = $this.prop('src');
      } else if ($this.is('canvas') && window.HTMLCanvasElement) {
        url = $this[0].toDataURL();
      }

      self.load(url);
    }

    // A shortcut for triggering custom events

  }, {
    key: 'trigger',
    value: function trigger(type, data) {
      var e = $.Event(type, data);

      this.$element.trigger(e);

      return e;
    }
  }, {
    key: 'load',
    value: function load(url) {
      var self = this;
      var options = self.options;
      var $this = self.$element;

      if (!url) {
        return;
      }

      self.url = url;
      self.image = {};

      if (!options.checkOrientation || !window.ArrayBuffer) {
        self.clone();
        return;
      }

      // XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari
      if (REGEXP_DATA_URL.test(url)) {
        if (REGEXP_DATA_URL_JPEG.test(url)) {
          self.read(dataURLToArrayBuffer(url));
        } else {
          self.clone();
        }
        return;
      }

      var xhr = new XMLHttpRequest();

      xhr.onerror = xhr.onabort = $.proxy(function () {
        self.clone();
      }, this);

      xhr.onload = function load() {
        self.read(this.response);
      };

      if (options.checkCrossOrigin && isCrossOriginURL(url) && $this.prop('crossOrigin')) {
        url = addTimestamp(url);
      }

      xhr.open('get', url);
      xhr.responseType = 'arraybuffer';
      xhr.withCredentials = $this.prop('crossOrigin') === 'use-credentials';
      xhr.send();
    }
  }, {
    key: 'read',
    value: function read(arrayBuffer) {
      var self = this;
      var options = self.options;
      var orientation = getOrientation(arrayBuffer);
      var image = self.image;
      var rotate = 0;
      var scaleX = 1;
      var scaleY = 1;

      if (orientation > 1) {
        self.url = arrayBufferToDataURL(arrayBuffer);

        switch (orientation) {

          // flip horizontal
          case 2:
            scaleX = -1;
            break;

          // rotate left 180°
          case 3:
            rotate = -180;
            break;

          // flip vertical
          case 4:
            scaleY = -1;
            break;

          // flip vertical + rotate right 90°
          case 5:
            rotate = 90;
            scaleY = -1;
            break;

          // rotate right 90°
          case 6:
            rotate = 90;
            break;

          // flip horizontal + rotate right 90°
          case 7:
            rotate = 90;
            scaleX = -1;
            break;

          // rotate left 90°
          case 8:
            rotate = -90;
            break;
        }
      }

      if (options.rotatable) {
        image.rotate = rotate;
      }

      if (options.scalable) {
        image.scaleX = scaleX;
        image.scaleY = scaleY;
      }

      self.clone();
    }
  }, {
    key: 'clone',
    value: function clone() {
      var self = this;
      var options = self.options;
      var $this = self.$element;
      var url = self.url;
      var crossOrigin = '';
      var crossOriginUrl = void 0;

      if (options.checkCrossOrigin && isCrossOriginURL(url)) {
        crossOrigin = $this.prop('crossOrigin');

        if (crossOrigin) {
          crossOriginUrl = url;
        } else {
          crossOrigin = 'anonymous';

          // Bust cache (#148) when there is not a "crossOrigin" property
          crossOriginUrl = addTimestamp(url);
        }
      }

      self.crossOrigin = crossOrigin;
      self.crossOriginUrl = crossOriginUrl;

      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = crossOriginUrl || url;

      var $clone = $(image);

      self.$clone = $clone;

      if (self.isImg) {
        if ($this[0].complete) {
          self.start();
        } else {
          $this.one('load', $.proxy(self.start, this));
        }
      } else {
        $clone.one('load', $.proxy(self.start, this)).one('error', $.proxy(self.stop, this)).addClass('cropper-hide').insertAfter($this);
      }
    }
  }, {
    key: 'start',
    value: function start() {
      var self = this;
      var $clone = self.$clone;
      var $image = self.$element;

      if (!self.isImg) {
        $clone.off('error', self.stop);
        $image = $clone;
      }

      getImageSize($image[0], function (naturalWidth, naturalHeight) {
        $.extend(self.image, {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          aspectRatio: naturalWidth / naturalHeight
        });

        self.loaded = true;
        self.build();
      });
    }
  }, {
    key: 'stop',
    value: function stop() {
      var self = this;

      self.$clone.remove();
      self.$clone = null;
    }
  }, {
    key: 'build',
    value: function build() {
      var self = this;
      var options = self.options;
      var $this = self.$element;
      var $clone = self.$clone;
      var $cropper = void 0;
      var $cropBox = void 0;
      var $face = void 0;

      if (!self.loaded) {
        return;
      }

      // Unbuild first when replace
      if (self.ready) {
        self.unbuild();
      }

      // Create cropper elements
      self.$container = $this.parent();
      self.$cropper = $cropper = $(TEMPLATE);
      self.$canvas = $cropper.find('.cropper-canvas').append($clone);
      self.$dragBox = $cropper.find('.cropper-drag-box');
      self.$cropBox = $cropBox = $cropper.find('.cropper-crop-box');
      self.$viewBox = $cropper.find('.cropper-view-box');
      self.$face = $face = $cropBox.find('.cropper-face');

      // Hide the original image
      $this.addClass(CLASS_HIDDEN).after($cropper);

      // Show the clone image if is hidden
      if (!self.isImg) {
        $clone.removeClass('cropper-hide');
      }

      self.initPreview();
      self.bind();

      options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
      options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;

      self.cropped = options.autoCrop;

      if (options.autoCrop) {
        if (options.modal) {
          self.$dragBox.addClass('cropper-modal');
        }
      } else {
        $cropBox.addClass(CLASS_HIDDEN);
      }

      if (!options.guides) {
        $cropBox.find('.cropper-dashed').addClass(CLASS_HIDDEN);
      }

      if (!options.center) {
        $cropBox.find('.cropper-center').addClass(CLASS_HIDDEN);
      }

      if (options.cropBoxMovable) {
        $face.addClass('cropper-move').data('action', 'all');
      }

      if (!options.highlight) {
        $face.addClass('cropper-invisible');
      }

      if (options.background) {
        $cropper.addClass('cropper-bg');
      }

      if (!options.cropBoxResizable) {
        $cropBox.find('.cropper-line, .cropper-point').addClass(CLASS_HIDDEN);
      }

      self.setDragMode(options.dragMode);
      self.render();
      self.ready = true;
      self.setData(options.data);

      // Trigger the ready event asynchronously to keep `data('cropper')` is defined
      self.completing = setTimeout(function () {
        if ($.isFunction(options.ready)) {
          $this.one('ready', options.ready);
        }

        self.trigger('ready');
        self.trigger('crop', self.getData());
        self.completed = true;
      }, 0);
    }
  }, {
    key: 'unbuild',
    value: function unbuild() {
      var self = this;

      if (!self.ready) {
        return;
      }

      if (!self.completed) {
        clearTimeout(self.completing);
      }

      self.ready = false;
      self.completed = false;
      self.initialImage = null;

      // Clear `initialCanvas` is necessary when replace
      self.initialCanvas = null;
      self.initialCropBox = null;
      self.container = null;
      self.canvas = null;

      // Clear `cropBox` is necessary when replace
      self.cropBox = null;
      self.unbind();

      self.resetPreview();
      self.$preview = null;

      self.$viewBox = null;
      self.$cropBox = null;
      self.$dragBox = null;
      self.$canvas = null;
      self.$container = null;

      self.$cropper.remove();
      self.$cropper = null;
    }
  }], [{
    key: 'setDefaults',
    value: function setDefaults(options) {
      $.extend(DEFAULTS, $.isPlainObject(options) && options);
    }
  }]);
  return Cropper;
}();

$.extend(Cropper.prototype, render$1);
$.extend(Cropper.prototype, preview$1);
$.extend(Cropper.prototype, events);
$.extend(Cropper.prototype, handlers);
$.extend(Cropper.prototype, change$1);
$.extend(Cropper.prototype, methods);

var NAMESPACE = 'cropper';
var OtherCropper = $.fn.cropper;

$.fn.cropper = function jQueryCropper(option) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var result = void 0;

  this.each(function (i, element) {
    var $this = $(element);
    var data = $this.data(NAMESPACE);

    if (!data) {
      if (/destroy/.test(option)) {
        return;
      }

      var options = $.extend({}, $this.data(), $.isPlainObject(option) && option);
      $this.data(NAMESPACE, data = new Cropper(element, options));
    }

    if (typeof option === 'string') {
      var fn = data[option];

      if ($.isFunction(fn)) {
        result = fn.apply(data, args);
      }
    }
  });

  return typeof result !== 'undefined' ? result : this;
};

$.fn.cropper.Constructor = Cropper;
$.fn.cropper.setDefaults = Cropper.setDefaults;

// No conflict
$.fn.cropper.noConflict = function noConflict() {
  $.fn.cropper = OtherCropper;
  return this;
};

})));

;/* Mapbox GL JS is licensed under the 3-Clause BSD License. Full text of license: https://github.com/mapbox/mapbox-gl-js/blob/v1.11.0/LICENSE.txt */
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global = global || self, global.mapboxgl = factory());
}(this, (function () { 'use strict';

/* eslint-disable */

var shared, worker, mapboxgl;
// define gets called three times: one for each chunk. we rely on the order
// they're imported to know which is which
function define(_, chunk) {
if (!shared) {
    shared = chunk;
} else if (!worker) {
    worker = chunk;
} else {
    var workerBundleString = 'var sharedChunk = {}; (' + shared + ')(sharedChunk); (' + worker + ')(sharedChunk);'

    var sharedChunk = {};
    shared(sharedChunk);
    mapboxgl = chunk(sharedChunk);
    if (typeof window !== 'undefined') {
        mapboxgl.workerUrl = window.URL.createObjectURL(new Blob([workerBundleString], { type: 'text/javascript' }));
    }
}
}


define(["exports"],(function(t){"use strict";function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=n;function n(t,e,r,n){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(n-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=n,this.p2x=r,this.p2y=n;}n.prototype.sampleCurveX=function(t){return ((this.ax*t+this.bx)*t+this.cx)*t},n.prototype.sampleCurveY=function(t){return ((this.ay*t+this.by)*t+this.cy)*t},n.prototype.sampleCurveDerivativeX=function(t){return (3*this.ax*t+2*this.bx)*t+this.cx},n.prototype.solveCurveX=function(t,e){var r,n,i,a,o;for(void 0===e&&(e=1e-6),i=t,o=0;o<8;o++){if(a=this.sampleCurveX(i)-t,Math.abs(a)<e)return i;var s=this.sampleCurveDerivativeX(i);if(Math.abs(s)<1e-6)break;i-=a/s;}if((i=t)<(r=0))return r;if(i>(n=1))return n;for(;r<n;){if(a=this.sampleCurveX(i),Math.abs(a-t)<e)return i;t>a?r=i:n=i,i=.5*(n-r)+r;}return i},n.prototype.solve=function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))};var i=a;function a(t,e){this.x=t,this.y=e;}a.prototype={clone:function(){return new a(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[2]*this.x+t[3]*this.y;return this.x=t[0]*this.x+t[1]*this.y,this.y=e,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=r*this.x+e*this.y;return this.x=e*this.x-r*this.y,this.y=n,this},_rotateAround:function(t,e){var r=Math.cos(t),n=Math.sin(t),i=e.y+n*(this.x-e.x)+r*(this.y-e.y);return this.x=e.x+r*(this.x-e.x)-n*(this.y-e.y),this.y=i,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},a.convert=function(t){return t instanceof a?t:Array.isArray(t)?new a(t[0],t[1]):t};var o="undefined"!=typeof self?self:{};function s(t,e,n,i){var a=new r(t,e,n,i);return function(t){return a.solve(t)}}var u=s(.25,.1,.25,1);function l(t,e,r){return Math.min(r,Math.max(e,t))}function p(t,e,r){var n=r-e,i=((t-e)%n+n)%n+e;return i===e?r:i}function c(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var n=0,i=e;n<i.length;n+=1){var a=i[n];for(var o in a)t[o]=a[o];}return t}var h=1;function f(){return h++}function y(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-[1e3]+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}function d(t){return !!t&&/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)}function m(t,e){t.forEach((function(t){e[t]&&(e[t]=e[t].bind(e));}));}function v(t,e){return -1!==t.indexOf(e,t.length-e.length)}function g(t,e,r){var n={};for(var i in t)n[i]=e.call(r||this,t[i],i,t);return n}function x(t,e,r){var n={};for(var i in t)e.call(r||this,t[i],i,t)&&(n[i]=t[i]);return n}function b(t){return Array.isArray(t)?t.map(b):"object"==typeof t&&t?g(t,b):t}var w={};function _(t){w[t]||("undefined"!=typeof console&&console.warn(t),w[t]=!0);}function A(t,e,r){return (r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function S(t){for(var e=0,r=0,n=t.length,i=n-1,a=void 0,o=void 0;r<n;i=r++)e+=((o=t[i]).x-(a=t[r]).x)*(a.y+o.y);return e}function k(){return "undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function I(t){var e={};if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,(function(t,r,n,i){var a=n||i;return e[r]=!a||a.toLowerCase(),""})),e["max-age"]){var r=parseInt(e["max-age"],10);isNaN(r)?delete e["max-age"]:e["max-age"]=r;}return e}var z=null;function C(t){if(null==z){var e=t.navigator?t.navigator.userAgent:null;z=!!t.safari||!(!e||!(/\b(iPad|iPhone|iPod)\b/.test(e)||e.match("Safari")&&!e.match("Chrome")));}return z}function M(t){try{var e=o[t];return e.setItem("_mapbox_test_",1),e.removeItem("_mapbox_test_"),!0}catch(t){return !1}}var E,T,P,B,V=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now.bind(Date),F=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||o.msRequestAnimationFrame,D=o.cancelAnimationFrame||o.mozCancelAnimationFrame||o.webkitCancelAnimationFrame||o.msCancelAnimationFrame,L={now:V,frame:function(t){var e=F(t);return {cancel:function(){return D(e)}}},getImageData:function(t,e){void 0===e&&(e=0);var r=o.document.createElement("canvas"),n=r.getContext("2d");if(!n)throw new Error("failed to create canvas 2d context");return r.width=t.width,r.height=t.height,n.drawImage(t,0,0,t.width,t.height),n.getImageData(-e,-e,t.width+2*e,t.height+2*e)},resolveURL:function(t){return E||(E=o.document.createElement("a")),E.href=t,E.href},hardwareConcurrency:o.navigator&&o.navigator.hardwareConcurrency||4,get devicePixelRatio(){return o.devicePixelRatio},get prefersReducedMotion(){return !!o.matchMedia&&(null==T&&(T=o.matchMedia("(prefers-reduced-motion: reduce)")),T.matches)}},R={API_URL:"https://api.mapbox.com",get EVENTS_URL(){return this.API_URL?0===this.API_URL.indexOf("https://api.mapbox.cn")?"https://events.mapbox.cn/events/v2":0===this.API_URL.indexOf("https://api.mapbox.com")?"https://events.mapbox.com/events/v2":null:null},FEEDBACK_URL:"https://apps.mapbox.com/feedback",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null,MAX_PARALLEL_IMAGE_REQUESTS:16},O={supported:!1,testSupport:function(t){!U&&B&&(j?q(t):P=t);}},U=!1,j=!1;function q(t){var e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e);try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,B),t.isContextLost())return;O.supported=!0;}catch(t){}t.deleteTexture(e),U=!0;}o.document&&((B=o.document.createElement("img")).onload=function(){P&&q(P),P=null,j=!0;},B.onerror=function(){U=!0,P=null;},B.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=");var N="01",K=function(t,e){this._transformRequestFn=t,this._customAccessToken=e,this._createSkuToken();};function G(t){return 0===t.indexOf("mapbox:")}K.prototype._createSkuToken=function(){var t=function(){for(var t="",e=0;e<10;e++)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())];return {token:["1",N,t].join(""),tokenExpiresAt:Date.now()+432e5}}();this._skuToken=t.token,this._skuTokenExpiresAt=t.tokenExpiresAt;},K.prototype._isSkuTokenExpired=function(){return Date.now()>this._skuTokenExpiresAt},K.prototype.transformRequest=function(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}},K.prototype.normalizeStyleURL=function(t,e){if(!G(t))return t;var r=H(t);return r.path="/styles/v1"+r.path,this._makeAPIURL(r,this._customAccessToken||e)},K.prototype.normalizeGlyphsURL=function(t,e){if(!G(t))return t;var r=H(t);return r.path="/fonts/v1"+r.path,this._makeAPIURL(r,this._customAccessToken||e)},K.prototype.normalizeSourceURL=function(t,e){if(!G(t))return t;var r=H(t);return r.path="/v4/"+r.authority+".json",r.params.push("secure"),this._makeAPIURL(r,this._customAccessToken||e)},K.prototype.normalizeSpriteURL=function(t,e,r,n){var i=H(t);return G(t)?(i.path="/styles/v1"+i.path+"/sprite"+e+r,this._makeAPIURL(i,this._customAccessToken||n)):(i.path+=""+e+r,Y(i))},K.prototype.normalizeTileURL=function(t,e){if(this._isSkuTokenExpired()&&this._createSkuToken(),t&&!G(t))return t;var r=H(t);r.path=r.path.replace(/(\.(png|jpg)\d*)(?=$)/,(L.devicePixelRatio>=2||512===e?"@2x":"")+(O.supported?".webp":"$1")),r.path=r.path.replace(/^.+\/v4\//,"/"),r.path="/v4"+r.path;var n=this._customAccessToken||function(t){for(var e=0,r=t;e<r.length;e+=1){var n=r[e].match(/^access_token=(.*)$/);if(n)return n[1]}return null}(r.params)||R.ACCESS_TOKEN;return R.REQUIRE_ACCESS_TOKEN&&n&&this._skuToken&&r.params.push("sku="+this._skuToken),this._makeAPIURL(r,n)},K.prototype.canonicalizeTileURL=function(t,e){var r=H(t);if(!r.path.match(/(^\/v4\/)/)||!r.path.match(/\.[\w]+$/))return t;var n="mapbox://tiles/";n+=r.path.replace("/v4/","");var i=r.params;return e&&(i=i.filter((function(t){return !t.match(/^access_token=/)}))),i.length&&(n+="?"+i.join("&")),n},K.prototype.canonicalizeTileset=function(t,e){for(var r=!!e&&G(e),n=[],i=0,a=t.tiles||[];i<a.length;i+=1){var o=a[i];X(o)?n.push(this.canonicalizeTileURL(o,r)):n.push(o);}return n},K.prototype._makeAPIURL=function(t,e){var r="See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes",n=H(R.API_URL);if(t.protocol=n.protocol,t.authority=n.authority,"/"!==n.path&&(t.path=""+n.path+t.path),!R.REQUIRE_ACCESS_TOKEN)return Y(t);if(!(e=e||R.ACCESS_TOKEN))throw new Error("An API access token is required to use Mapbox GL. "+r);if("s"===e[0])throw new Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). "+r);return t.params=t.params.filter((function(t){return -1===t.indexOf("access_token")})),t.params.push("access_token="+e),Y(t)};var Z=/^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/|\?|$)/i;function X(t){return Z.test(t)}var J=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/;function H(t){var e=t.match(J);if(!e)throw new Error("Unable to parse URL object");return {protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function Y(t){var e=t.params.length?"?"+t.params.join("&"):"";return t.protocol+"://"+t.authority+t.path+e}function $(t){if(!t)return null;var e=t.split(".");if(!e||3!==e.length)return null;try{return JSON.parse(decodeURIComponent(o.atob(e[1]).split("").map((function(t){return "%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join("")))}catch(t){return null}}var W=function(t){this.type=t,this.anonId=null,this.eventData={},this.queue=[],this.pendingRequest=null;};W.prototype.getStorageKey=function(t){var e,r=$(R.ACCESS_TOKEN);return e=r&&r.u?o.btoa(encodeURIComponent(r.u).replace(/%([0-9A-F]{2})/g,(function(t,e){return String.fromCharCode(Number("0x"+e))}))):R.ACCESS_TOKEN||"",t?"mapbox.eventData."+t+":"+e:"mapbox.eventData:"+e},W.prototype.fetchEventData=function(){var t=M("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid");if(t)try{var n=o.localStorage.getItem(e);n&&(this.eventData=JSON.parse(n));var i=o.localStorage.getItem(r);i&&(this.anonId=i);}catch(t){_("Unable to read from LocalStorage");}},W.prototype.saveEventData=function(){var t=M("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid");if(t)try{o.localStorage.setItem(r,this.anonId),Object.keys(this.eventData).length>=1&&o.localStorage.setItem(e,JSON.stringify(this.eventData));}catch(t){_("Unable to write to LocalStorage");}},W.prototype.processRequests=function(t){},W.prototype.postEvent=function(t,e,r,n){var i=this;if(R.EVENTS_URL){var a=H(R.EVENTS_URL);a.params.push("access_token="+(n||R.ACCESS_TOKEN||""));var o={event:this.type,created:new Date(t).toISOString(),sdkIdentifier:"mapbox-gl-js",sdkVersion:"1.11.0",skuId:N,userId:this.anonId},s=e?c(o,e):o,u={url:Y(a),headers:{"Content-Type":"text/plain"},body:JSON.stringify([s])};this.pendingRequest=bt(u,(function(t){i.pendingRequest=null,r(t),i.saveEventData(),i.processRequests(n);}));}},W.prototype.queueRequest=function(t,e){this.queue.push(t),this.processRequests(e);};var Q,tt,et=function(t){function e(){t.call(this,"map.load"),this.success={},this.skuToken="";}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.postMapLoadEvent=function(t,e,r,n){this.skuToken=r,(R.EVENTS_URL&&n||R.ACCESS_TOKEN&&Array.isArray(t)&&t.some((function(t){return G(t)||X(t)})))&&this.queueRequest({id:e,timestamp:Date.now()},n);},e.prototype.processRequests=function(t){var e=this;if(!this.pendingRequest&&0!==this.queue.length){var r=this.queue.shift(),n=r.id,i=r.timestamp;n&&this.success[n]||(this.anonId||this.fetchEventData(),d(this.anonId)||(this.anonId=y()),this.postEvent(i,{skuToken:this.skuToken},(function(t){t||n&&(e.success[n]=!0);}),t));}},e}(W),rt=new(function(t){function e(e){t.call(this,"appUserTurnstile"),this._customAccessToken=e;}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.postTurnstileEvent=function(t,e){R.EVENTS_URL&&R.ACCESS_TOKEN&&Array.isArray(t)&&t.some((function(t){return G(t)||X(t)}))&&this.queueRequest(Date.now(),e);},e.prototype.processRequests=function(t){var e=this;if(!this.pendingRequest&&0!==this.queue.length){this.anonId&&this.eventData.lastSuccess&&this.eventData.tokenU||this.fetchEventData();var r=$(R.ACCESS_TOKEN),n=r?r.u:R.ACCESS_TOKEN,i=n!==this.eventData.tokenU;d(this.anonId)||(this.anonId=y(),i=!0);var a=this.queue.shift();if(this.eventData.lastSuccess){var o=new Date(this.eventData.lastSuccess),s=new Date(a),u=(a-this.eventData.lastSuccess)/864e5;i=i||u>=1||u<-1||o.getDate()!==s.getDate();}else i=!0;if(!i)return this.processRequests();this.postEvent(a,{"enabled.telemetry":!1},(function(t){t||(e.eventData.lastSuccess=a,e.eventData.tokenU=n);}),t);}},e}(W)),nt=rt.postTurnstileEvent.bind(rt),it=new et,at=it.postMapLoadEvent.bind(it),ot=500,st=50;function ut(){o.caches&&!Q&&(Q=o.caches.open("mapbox-tiles"));}function lt(t){var e=t.indexOf("?");return e<0?t:t.slice(0,e)}var pt,ct=1/0;function ht(){return null==pt&&(pt=o.OffscreenCanvas&&new o.OffscreenCanvas(1,1).getContext("2d")&&"function"==typeof o.createImageBitmap),pt}var ft={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"};"function"==typeof Object.freeze&&Object.freeze(ft);var yt=function(t){function e(e,r,n){401===r&&X(n)&&(e+=": you may have provided an invalid Mapbox access token. See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes"),t.call(this,e),this.status=r,this.url=n,this.name=this.constructor.name,this.message=e;}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.toString=function(){return this.name+": "+this.message+" ("+this.status+"): "+this.url},e}(Error),dt=k()?function(){return self.worker&&self.worker.referrer}:function(){return ("blob:"===o.location.protocol?o.parent:o).location.href};var mt,vt,gt=function(t,e){if(!(/^file:/.test(r=t.url)||/^file:/.test(dt())&&!/^\w+:/.test(r))){if(o.fetch&&o.Request&&o.AbortController&&o.Request.prototype.hasOwnProperty("signal"))return function(t,e){var r,n=new o.AbortController,i=new o.Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:dt(),signal:n.signal}),a=!1,s=!1,u=(r=i.url).indexOf("sku=")>0&&X(r);"json"===t.type&&i.headers.set("Accept","application/json");var l=function(r,n,a){if(!s){if(r&&"SecurityError"!==r.message&&_(r),n&&a)return p(n);var l=Date.now();o.fetch(i).then((function(r){if(r.ok){var n=u?r.clone():null;return p(r,n,l)}return e(new yt(r.statusText,r.status,t.url))})).catch((function(t){20!==t.code&&e(new Error(t.message));}));}},p=function(r,n,u){("arrayBuffer"===t.type?r.arrayBuffer():"json"===t.type?r.json():r.text()).then((function(t){s||(n&&u&&function(t,e,r){if(ut(),Q){var n={status:e.status,statusText:e.statusText,headers:new o.Headers};e.headers.forEach((function(t,e){return n.headers.set(e,t)}));var i=I(e.headers.get("Cache-Control")||"");i["no-store"]||(i["max-age"]&&n.headers.set("Expires",new Date(r+1e3*i["max-age"]).toUTCString()),new Date(n.headers.get("Expires")).getTime()-r<42e4||function(t,e){if(void 0===tt)try{new Response(new ReadableStream),tt=!0;}catch(t){tt=!1;}tt?e(t.body):t.blob().then(e);}(e,(function(e){var r=new o.Response(e,n);ut(),Q&&Q.then((function(e){return e.put(lt(t.url),r)})).catch((function(t){return _(t.message)}));})));}}(i,n,u),a=!0,e(null,t,r.headers.get("Cache-Control"),r.headers.get("Expires")));})).catch((function(t){s||e(new Error(t.message));}));};return u?function(t,e){if(ut(),!Q)return e(null);var r=lt(t.url);Q.then((function(t){t.match(r).then((function(n){var i=function(t){if(!t)return !1;var e=new Date(t.headers.get("Expires")||0),r=I(t.headers.get("Cache-Control")||"");return e>Date.now()&&!r["no-cache"]}(n);t.delete(r),i&&t.put(r,n.clone()),e(null,n,i);})).catch(e);})).catch(e);}(i,l):l(null,null),{cancel:function(){s=!0,a||n.abort();}}}(t,e);if(k()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e,void 0,!0)}var r;return function(t,e){var r=new o.XMLHttpRequest;for(var n in r.open(t.method||"GET",t.url,!0),"arrayBuffer"===t.type&&(r.responseType="arraybuffer"),t.headers)r.setRequestHeader(n,t.headers[n]);return "json"===t.type&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials="include"===t.credentials,r.onerror=function(){e(new Error(r.statusText));},r.onload=function(){if((r.status>=200&&r.status<300||0===r.status)&&null!==r.response){var n=r.response;if("json"===t.type)try{n=JSON.parse(r.response);}catch(t){return e(t)}e(null,n,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"));}else e(new yt(r.statusText,r.status,t.url));},r.send(t.body),{cancel:function(){return r.abort()}}}(t,e)},xt=function(t,e){return gt(c(t,{type:"arrayBuffer"}),e)},bt=function(t,e){return gt(c(t,{method:"POST"}),e)};mt=[],vt=0;var wt=function(t,e){if(O.supported&&(t.headers||(t.headers={}),t.headers.accept="image/webp,*/*"),vt>=R.MAX_PARALLEL_IMAGE_REQUESTS){var r={requestParameters:t,callback:e,cancelled:!1,cancel:function(){this.cancelled=!0;}};return mt.push(r),r}vt++;var n=!1,i=function(){if(!n)for(n=!0,vt--;mt.length&&vt<R.MAX_PARALLEL_IMAGE_REQUESTS;){var t=mt.shift();t.cancelled||(t.cancel=wt(t.requestParameters,t.callback).cancel);}},a=xt(t,(function(t,r,n,a){i(),t?e(t):r&&(ht()?function(t,e){var r=new o.Blob([new Uint8Array(t)],{type:"image/png"});o.createImageBitmap(r).then((function(t){e(null,t);})).catch((function(t){e(new Error("Could not load image because of "+t.message+". Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."));}));}(r,e):function(t,e,r,n){var i=new o.Image,a=o.URL;i.onload=function(){e(null,i),a.revokeObjectURL(i.src);},i.onerror=function(){return e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))};var s=new o.Blob([new Uint8Array(t)],{type:"image/png"});i.cacheControl=r,i.expires=n,i.src=t.byteLength?a.createObjectURL(s):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";}(r,e,n,a));}));return {cancel:function(){a.cancel(),i();}}};function _t(t,e,r){r[t]&&-1!==r[t].indexOf(e)||(r[t]=r[t]||[],r[t].push(e));}function At(t,e,r){if(r&&r[t]){var n=r[t].indexOf(e);-1!==n&&r[t].splice(n,1);}}var St=function(t,e){void 0===e&&(e={}),c(this,e),this.type=t;},kt=function(t){function e(e,r){void 0===r&&(r={}),t.call(this,"error",c({error:e},r));}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(St),It=function(){};It.prototype.on=function(t,e){return this._listeners=this._listeners||{},_t(t,e,this._listeners),this},It.prototype.off=function(t,e){return At(t,e,this._listeners),At(t,e,this._oneTimeListeners),this},It.prototype.once=function(t,e){return this._oneTimeListeners=this._oneTimeListeners||{},_t(t,e,this._oneTimeListeners),this},It.prototype.fire=function(t,e){"string"==typeof t&&(t=new St(t,e||{}));var r=t.type;if(this.listens(r)){t.target=this;for(var n=0,i=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];n<i.length;n+=1)i[n].call(this,t);for(var a=0,o=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];a<o.length;a+=1){var s=o[a];At(r,s,this._oneTimeListeners),s.call(this,t);}var u=this._eventedParent;u&&(c(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),u.fire(t));}else t instanceof kt&&console.error(t.error);return this},It.prototype.listens=function(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)},It.prototype.setEventedParent=function(t,e){return this._eventedParent=t,this._eventedParentData=e,this};var zt={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},promoteId:{type:"promoteId"},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterMinPoints:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1},promoteId:{type:"promoteId"}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"resolvedImage",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{},within:{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:24,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},expression_name:{type:"enum",values:{let:{group:"Variable binding"},var:{group:"Variable binding"},literal:{group:"Types"},array:{group:"Types"},at:{group:"Lookup"},in:{group:"Lookup"},"index-of":{group:"Lookup"},slice:{group:"Lookup"},case:{group:"Decision"},match:{group:"Decision"},coalesce:{group:"Decision"},step:{group:"Ramps, scales, curves"},interpolate:{group:"Ramps, scales, curves"},"interpolate-hcl":{group:"Ramps, scales, curves"},"interpolate-lab":{group:"Ramps, scales, curves"},ln2:{group:"Math"},pi:{group:"Math"},e:{group:"Math"},typeof:{group:"Types"},string:{group:"Types"},number:{group:"Types"},boolean:{group:"Types"},object:{group:"Types"},collator:{group:"Types"},format:{group:"Types"},image:{group:"Types"},"number-format":{group:"Types"},"to-string":{group:"Types"},"to-number":{group:"Types"},"to-boolean":{group:"Types"},"to-rgba":{group:"Color"},"to-color":{group:"Types"},rgb:{group:"Color"},rgba:{group:"Color"},get:{group:"Lookup"},has:{group:"Lookup"},length:{group:"Lookup"},properties:{group:"Feature data"},"feature-state":{group:"Feature data"},"geometry-type":{group:"Feature data"},id:{group:"Feature data"},zoom:{group:"Zoom"},"heatmap-density":{group:"Heatmap"},"line-progress":{group:"Feature data"},accumulated:{group:"Feature data"},"+":{group:"Math"},"*":{group:"Math"},"-":{group:"Math"},"/":{group:"Math"},"%":{group:"Math"},"^":{group:"Math"},sqrt:{group:"Math"},log10:{group:"Math"},ln:{group:"Math"},log2:{group:"Math"},sin:{group:"Math"},cos:{group:"Math"},tan:{group:"Math"},asin:{group:"Math"},acos:{group:"Math"},atan:{group:"Math"},min:{group:"Math"},max:{group:"Math"},round:{group:"Math"},abs:{group:"Math"},ceil:{group:"Math"},floor:{group:"Math"},distance:{group:"Math"},"==":{group:"Decision"},"!=":{group:"Decision"},">":{group:"Decision"},"<":{group:"Decision"},">=":{group:"Decision"},"<=":{group:"Decision"},all:{group:"Decision"},any:{group:"Decision"},"!":{group:"Decision"},within:{group:"Decision"},"is-supported-script":{group:"String"},upcase:{group:"String"},downcase:{group:"String"},concat:{group:"String"},"resolved-locale":{group:"String"}}},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"line-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}},promoteId:{"*":{type:"string"}}},Ct=function(t,e,r,n){this.message=(t?t+": ":"")+r,n&&(this.identifier=n),null!=e&&e.__line__&&(this.line=e.__line__);};function Mt(t){var e=t.value;return e?[new Ct(t.key,e,"constants have been deprecated as of v8")]:[]}function Et(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var n=0,i=e;n<i.length;n+=1){var a=i[n];for(var o in a)t[o]=a[o];}return t}function Tt(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function Pt(t){if(Array.isArray(t))return t.map(Pt);if(t instanceof Object&&!(t instanceof Number||t instanceof String||t instanceof Boolean)){var e={};for(var r in t)e[r]=Pt(t[r]);return e}return Tt(t)}var Bt=function(t){function e(e,r){t.call(this,r),this.message=r,this.key=e;}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(Error),Vt=function(t,e){void 0===e&&(e=[]),this.parent=t,this.bindings={};for(var r=0,n=e;r<n.length;r+=1){var i=n[r];this.bindings[i[0]]=i[1];}};Vt.prototype.concat=function(t){return new Vt(this,t)},Vt.prototype.get=function(t){if(this.bindings[t])return this.bindings[t];if(this.parent)return this.parent.get(t);throw new Error(t+" not found in scope.")},Vt.prototype.has=function(t){return !!this.bindings[t]||!!this.parent&&this.parent.has(t)};var Ft={kind:"null"},Dt={kind:"number"},Lt={kind:"string"},Rt={kind:"boolean"},Ot={kind:"color"},Ut={kind:"object"},jt={kind:"value"},qt={kind:"collator"},Nt={kind:"formatted"},Kt={kind:"resolvedImage"};function Gt(t,e){return {kind:"array",itemType:t,N:e}}function Zt(t){if("array"===t.kind){var e=Zt(t.itemType);return "number"==typeof t.N?"array<"+e+", "+t.N+">":"value"===t.itemType.kind?"array":"array<"+e+">"}return t.kind}var Xt=[Ft,Dt,Lt,Rt,Ot,Nt,Ut,Gt(jt),Kt];function Jt(t,e){if("error"===e.kind)return null;if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!Jt(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else {if(t.kind===e.kind)return null;if("value"===t.kind)for(var r=0,n=Xt;r<n.length;r+=1)if(!Jt(n[r],e))return null}return "Expected "+Zt(t)+" but found "+Zt(e)+" instead."}function Ht(t,e){return e.some((function(e){return e.kind===t.kind}))}function Yt(t,e){return e.some((function(e){return "null"===e?null===t:"array"===e?Array.isArray(t):"object"===e?t&&!Array.isArray(t)&&"object"==typeof t:e===typeof t}))}var $t=e((function(t,e){var r={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function n(t){return (t=Math.round(t))<0?0:t>255?255:t}function i(t){return n("%"===t[t.length-1]?parseFloat(t)/100*255:parseInt(t))}function a(t){return (e="%"===t[t.length-1]?parseFloat(t)/100:parseFloat(t))<0?0:e>1?1:e;var e;}function o(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}try{e.parseCSSColor=function(t){var e,s=t.replace(/ /g,"").toLowerCase();if(s in r)return r[s].slice();if("#"===s[0])return 4===s.length?(e=parseInt(s.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===s.length&&(e=parseInt(s.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null;var u=s.indexOf("("),l=s.indexOf(")");if(-1!==u&&l+1===s.length){var p=s.substr(0,u),c=s.substr(u+1,l-(u+1)).split(","),h=1;switch(p){case"rgba":if(4!==c.length)return null;h=a(c.pop());case"rgb":return 3!==c.length?null:[i(c[0]),i(c[1]),i(c[2]),h];case"hsla":if(4!==c.length)return null;h=a(c.pop());case"hsl":if(3!==c.length)return null;var f=(parseFloat(c[0])%360+360)%360/360,y=a(c[1]),d=a(c[2]),m=d<=.5?d*(y+1):d+y-d*y,v=2*d-m;return [n(255*o(v,m,f+1/3)),n(255*o(v,m,f)),n(255*o(v,m,f-1/3)),h];default:return null}}return null};}catch(t){}})).parseCSSColor,Wt=function(t,e,r,n){void 0===n&&(n=1),this.r=t,this.g=e,this.b=r,this.a=n;};Wt.parse=function(t){if(t){if(t instanceof Wt)return t;if("string"==typeof t){var e=$t(t);if(e)return new Wt(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3])}}},Wt.prototype.toString=function(){var t=this.toArray(),e=t[1],r=t[2],n=t[3];return "rgba("+Math.round(t[0])+","+Math.round(e)+","+Math.round(r)+","+n+")"},Wt.prototype.toArray=function(){var t=this.a;return 0===t?[0,0,0,0]:[255*this.r/t,255*this.g/t,255*this.b/t,t]},Wt.black=new Wt(0,0,0,1),Wt.white=new Wt(1,1,1,1),Wt.transparent=new Wt(0,0,0,0),Wt.red=new Wt(1,0,0,1);var Qt=function(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"});};Qt.prototype.compare=function(t,e){return this.collator.compare(t,e)},Qt.prototype.resolvedLocale=function(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale};var te=function(t,e,r,n,i){this.text=t,this.image=e,this.scale=r,this.fontStack=n,this.textColor=i;},ee=function(t){this.sections=t;};ee.fromString=function(t){return new ee([new te(t,null,null,null,null)])},ee.prototype.isEmpty=function(){return 0===this.sections.length||!this.sections.some((function(t){return 0!==t.text.length||t.image&&0!==t.image.name.length}))},ee.factory=function(t){return t instanceof ee?t:ee.fromString(t)},ee.prototype.toString=function(){return 0===this.sections.length?"":this.sections.map((function(t){return t.text})).join("")},ee.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var n=r[e];if(n.image)t.push(["image",n.image.name]);else {t.push(n.text);var i={};n.fontStack&&(i["text-font"]=["literal",n.fontStack.split(",")]),n.scale&&(i["font-scale"]=n.scale),n.textColor&&(i["text-color"]=["rgba"].concat(n.textColor.toArray())),t.push(i);}}return t};var re=function(t){this.name=t.name,this.available=t.available;};function ne(t,e,r,n){return "number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===n||"number"==typeof n&&n>=0&&n<=1?null:"Invalid rgba value ["+[t,e,r,n].join(", ")+"]: 'a' must be between 0 and 1.":"Invalid rgba value ["+("number"==typeof n?[t,e,r,n]:[t,e,r]).join(", ")+"]: 'r', 'g', and 'b' must be between 0 and 255."}function ie(t){if(null===t)return !0;if("string"==typeof t)return !0;if("boolean"==typeof t)return !0;if("number"==typeof t)return !0;if(t instanceof Wt)return !0;if(t instanceof Qt)return !0;if(t instanceof ee)return !0;if(t instanceof re)return !0;if(Array.isArray(t)){for(var e=0,r=t;e<r.length;e+=1)if(!ie(r[e]))return !1;return !0}if("object"==typeof t){for(var n in t)if(!ie(t[n]))return !1;return !0}return !1}function ae(t){if(null===t)return Ft;if("string"==typeof t)return Lt;if("boolean"==typeof t)return Rt;if("number"==typeof t)return Dt;if(t instanceof Wt)return Ot;if(t instanceof Qt)return qt;if(t instanceof ee)return Nt;if(t instanceof re)return Kt;if(Array.isArray(t)){for(var e,r=t.length,n=0,i=t;n<i.length;n+=1){var a=ae(i[n]);if(e){if(e===a)continue;e=jt;break}e=a;}return Gt(e||jt,r)}return Ut}function oe(t){var e=typeof t;return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof Wt||t instanceof ee||t instanceof re?t.toString():JSON.stringify(t)}re.prototype.toString=function(){return this.name},re.fromString=function(t){return t?new re({name:t,available:!1}):null},re.prototype.serialize=function(){return ["image",this.name]};var se=function(t,e){this.type=t,this.value=e;};se.parse=function(t,e){if(2!==t.length)return e.error("'literal' expression requires exactly one argument, but found "+(t.length-1)+" instead.");if(!ie(t[1]))return e.error("invalid value");var r=t[1],n=ae(r),i=e.expectedType;return "array"!==n.kind||0!==n.N||!i||"array"!==i.kind||"number"==typeof i.N&&0!==i.N||(n=i),new se(n,r)},se.prototype.evaluate=function(){return this.value},se.prototype.eachChild=function(){},se.prototype.outputDefined=function(){return !0},se.prototype.serialize=function(){return "array"===this.type.kind||"object"===this.type.kind?["literal",this.value]:this.value instanceof Wt?["rgba"].concat(this.value.toArray()):this.value instanceof ee?this.value.serialize():this.value};var ue=function(t){this.name="ExpressionEvaluationError",this.message=t;};ue.prototype.toJSON=function(){return this.message};var le={string:Lt,number:Dt,boolean:Rt,object:Ut},pe=function(t,e){this.type=t,this.args=e;};pe.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r,n=1,i=t[0];if("array"===i){var a,o;if(t.length>2){var s=t[1];if("string"!=typeof s||!(s in le)||"object"===s)return e.error('The item type argument of "array" must be one of string, number, boolean',1);a=le[s],n++;}else a=jt;if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2);o=t[2],n++;}r=Gt(a,o);}else r=le[i];for(var u=[];n<t.length;n++){var l=e.parse(t[n],n,jt);if(!l)return null;u.push(l);}return new pe(r,u)},pe.prototype.evaluate=function(t){for(var e=0;e<this.args.length;e++){var r=this.args[e].evaluate(t);if(!Jt(this.type,ae(r)))return r;if(e===this.args.length-1)throw new ue("Expected value to be of type "+Zt(this.type)+", but found "+Zt(ae(r))+" instead.")}return null},pe.prototype.eachChild=function(t){this.args.forEach(t);},pe.prototype.outputDefined=function(){return this.args.every((function(t){return t.outputDefined()}))},pe.prototype.serialize=function(){var t=this.type,e=[t.kind];if("array"===t.kind){var r=t.itemType;if("string"===r.kind||"number"===r.kind||"boolean"===r.kind){e.push(r.kind);var n=t.N;("number"==typeof n||this.args.length>1)&&e.push(n);}}return e.concat(this.args.map((function(t){return t.serialize()})))};var ce=function(t){this.type=Nt,this.sections=t;};ce.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r=t[1];if(!Array.isArray(r)&&"object"==typeof r)return e.error("First argument must be an image or text section.");for(var n=[],i=!1,a=1;a<=t.length-1;++a){var o=t[a];if(i&&"object"==typeof o&&!Array.isArray(o)){i=!1;var s=null;if(o["font-scale"]&&!(s=e.parse(o["font-scale"],1,Dt)))return null;var u=null;if(o["text-font"]&&!(u=e.parse(o["text-font"],1,Gt(Lt))))return null;var l=null;if(o["text-color"]&&!(l=e.parse(o["text-color"],1,Ot)))return null;var p=n[n.length-1];p.scale=s,p.font=u,p.textColor=l;}else {var c=e.parse(t[a],1,jt);if(!c)return null;var h=c.type.kind;if("string"!==h&&"value"!==h&&"null"!==h&&"resolvedImage"!==h)return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");i=!0,n.push({content:c,scale:null,font:null,textColor:null});}}return new ce(n)},ce.prototype.evaluate=function(t){return new ee(this.sections.map((function(e){var r=e.content.evaluate(t);return ae(r)===Kt?new te("",r,null,null,null):new te(oe(r),null,e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)})))},ce.prototype.eachChild=function(t){for(var e=0,r=this.sections;e<r.length;e+=1){var n=r[e];t(n.content),n.scale&&t(n.scale),n.font&&t(n.font),n.textColor&&t(n.textColor);}},ce.prototype.outputDefined=function(){return !1},ce.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var n=r[e];t.push(n.content.serialize());var i={};n.scale&&(i["font-scale"]=n.scale.serialize()),n.font&&(i["text-font"]=n.font.serialize()),n.textColor&&(i["text-color"]=n.textColor.serialize()),t.push(i);}return t};var he=function(t){this.type=Kt,this.input=t;};he.parse=function(t,e){if(2!==t.length)return e.error("Expected two arguments.");var r=e.parse(t[1],1,Lt);return r?new he(r):e.error("No image name provided.")},he.prototype.evaluate=function(t){var e=this.input.evaluate(t),r=re.fromString(e);return r&&t.availableImages&&(r.available=t.availableImages.indexOf(e)>-1),r},he.prototype.eachChild=function(t){t(this.input);},he.prototype.outputDefined=function(){return !1},he.prototype.serialize=function(){return ["image",this.input.serialize()]};var fe={"to-boolean":Rt,"to-color":Ot,"to-number":Dt,"to-string":Lt},ye=function(t,e){this.type=t,this.args=e;};ye.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r=t[0];if(("to-boolean"===r||"to-string"===r)&&2!==t.length)return e.error("Expected one argument.");for(var n=fe[r],i=[],a=1;a<t.length;a++){var o=e.parse(t[a],a,jt);if(!o)return null;i.push(o);}return new ye(n,i)},ye.prototype.evaluate=function(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t));if("color"===this.type.kind){for(var e,r,n=0,i=this.args;n<i.length;n+=1){if(r=null,(e=i[n].evaluate(t))instanceof Wt)return e;if("string"==typeof e){var a=t.parseColor(e);if(a)return a}else if(Array.isArray(e)&&!(r=e.length<3||e.length>4?"Invalid rbga value "+JSON.stringify(e)+": expected an array containing either three or four numeric values.":ne(e[0],e[1],e[2],e[3])))return new Wt(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new ue(r||"Could not parse color from value '"+("string"==typeof e?e:String(JSON.stringify(e)))+"'")}if("number"===this.type.kind){for(var o=null,s=0,u=this.args;s<u.length;s+=1){if(null===(o=u[s].evaluate(t)))return 0;var l=Number(o);if(!isNaN(l))return l}throw new ue("Could not convert "+JSON.stringify(o)+" to number.")}return "formatted"===this.type.kind?ee.fromString(oe(this.args[0].evaluate(t))):"resolvedImage"===this.type.kind?re.fromString(oe(this.args[0].evaluate(t))):oe(this.args[0].evaluate(t))},ye.prototype.eachChild=function(t){this.args.forEach(t);},ye.prototype.outputDefined=function(){return this.args.every((function(t){return t.outputDefined()}))},ye.prototype.serialize=function(){if("formatted"===this.type.kind)return new ce([{content:this.args[0],scale:null,font:null,textColor:null}]).serialize();if("resolvedImage"===this.type.kind)return new he(this.args[0]).serialize();var t=["to-"+this.type.kind];return this.eachChild((function(e){t.push(e.serialize());})),t};var de=["Unknown","Point","LineString","Polygon"],me=function(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null,this.canonical=null;};me.prototype.id=function(){return this.feature&&"id"in this.feature?this.feature.id:null},me.prototype.geometryType=function(){return this.feature?"number"==typeof this.feature.type?de[this.feature.type]:this.feature.type:null},me.prototype.geometry=function(){return this.feature&&"geometry"in this.feature?this.feature.geometry:null},me.prototype.canonicalID=function(){return this.canonical},me.prototype.properties=function(){return this.feature&&this.feature.properties||{}},me.prototype.parseColor=function(t){var e=this._parseColorCache[t];return e||(e=this._parseColorCache[t]=Wt.parse(t)),e};var ve=function(t,e,r,n){this.name=t,this.type=e,this._evaluate=r,this.args=n;};ve.prototype.evaluate=function(t){return this._evaluate(t,this.args)},ve.prototype.eachChild=function(t){this.args.forEach(t);},ve.prototype.outputDefined=function(){return !1},ve.prototype.serialize=function(){return [this.name].concat(this.args.map((function(t){return t.serialize()})))},ve.parse=function(t,e){var r,n=t[0],i=ve.definitions[n];if(!i)return e.error('Unknown expression "'+n+'". If you wanted a literal array, use ["literal", [...]].',0);for(var a=Array.isArray(i)?i[0]:i.type,o=Array.isArray(i)?[[i[1],i[2]]]:i.overloads,s=o.filter((function(e){var r=e[0];return !Array.isArray(r)||r.length===t.length-1})),u=null,l=0,p=s;l<p.length;l+=1){var c=p[l],h=c[0],f=c[1];u=new Oe(e.registry,e.path,null,e.scope);for(var y=[],d=!1,m=1;m<t.length;m++){var v=t[m],g=Array.isArray(h)?h[m-1]:h.type,x=u.parse(v,1+y.length,g);if(!x){d=!0;break}y.push(x);}if(!d)if(Array.isArray(h)&&h.length!==y.length)u.error("Expected "+h.length+" arguments, but found "+y.length+" instead.");else {for(var b=0;b<y.length;b++){var w=Array.isArray(h)?h[b]:h.type,_=y[b];u.concat(b+1).checkSubtype(w,_.type);}if(0===u.errors.length)return new ve(n,a,f,y)}}if(1===s.length)(r=e.errors).push.apply(r,u.errors);else {for(var A=(s.length?s:o).map((function(t){var e;return e=t[0],Array.isArray(e)?"("+e.map(Zt).join(", ")+")":"("+Zt(e.type)+"...)"})).join(" | "),S=[],k=1;k<t.length;k++){var I=e.parse(t[k],1+S.length);if(!I)return null;S.push(Zt(I.type));}e.error("Expected arguments of type "+A+", but found ("+S.join(", ")+") instead.");}return null},ve.register=function(t,e){for(var r in ve.definitions=e,e)t[r]=ve;};var ge=function(t,e,r){this.type=qt,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e;};function xe(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);}function be(t,e){return !(t[0]<=e[0]||t[2]>=e[2]||t[1]<=e[1]||t[3]>=e[3])}function we(t,e){var r=(180+t[0])/360,n=(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t[1]*Math.PI/360)))/360,i=Math.pow(2,e.z);return [Math.round(r*i*8192),Math.round(n*i*8192)]}function _e(t,e,r){return e[1]>t[1]!=r[1]>t[1]&&t[0]<(r[0]-e[0])*(t[1]-e[1])/(r[1]-e[1])+e[0]}function Ae(t,e){for(var r,n,i,a,o,s,u,l=!1,p=0,c=e.length;p<c;p++)for(var h=e[p],f=0,y=h.length;f<y-1;f++){if((a=(r=t)[0]-(n=h[f])[0])*(u=r[1]-(i=h[f+1])[1])-(s=r[0]-i[0])*(o=r[1]-n[1])==0&&a*s<=0&&o*u<=0)return !1;_e(t,h[f],h[f+1])&&(l=!l);}return l}function Se(t,e){for(var r=0;r<e.length;r++)if(Ae(t,e[r]))return !0;return !1}function ke(t,e,r,n){var i=n[0]-r[0],a=n[1]-r[1],o=(t[0]-r[0])*a-i*(t[1]-r[1]),s=(e[0]-r[0])*a-i*(e[1]-r[1]);return o>0&&s<0||o<0&&s>0}function Ie(t,e,r){for(var n=0,i=r;n<i.length;n+=1)for(var a=i[n],o=0;o<a.length-1;++o)if(0!=(c=[(p=a[o+1])[0]-(l=a[o])[0],p[1]-l[1]])[0]*(h=[(u=e)[0]-(s=t)[0],u[1]-s[1]])[1]-c[1]*h[0]&&ke(s,u,l,p)&&ke(l,p,s,u))return !0;var s,u,l,p,c,h;return !1}function ze(t,e){for(var r=0;r<t.length;++r)if(!Ae(t[r],e))return !1;for(var n=0;n<t.length-1;++n)if(Ie(t[n],t[n+1],e))return !1;return !0}function Ce(t,e){for(var r=0;r<e.length;r++)if(ze(t,e[r]))return !0;return !1}function Me(t,e,r){for(var n=[],i=0;i<t.length;i++){for(var a=[],o=0;o<t[i].length;o++){var s=we(t[i][o],r);xe(e,s),a.push(s);}n.push(a);}return n}function Ee(t,e,r){for(var n=[],i=0;i<t.length;i++){var a=Me(t[i],e,r);n.push(a);}return n}function Te(t,e,r,n){if(t[0]<r[0]||t[0]>r[2]){var i=.5*n,a=t[0]-r[0]>i?-n:r[0]-t[0]>i?n:0;0===a&&(a=t[0]-r[2]>i?-n:r[2]-t[0]>i?n:0),t[0]+=a;}xe(e,t);}function Pe(t,e,r,n){for(var i=8192*Math.pow(2,n.z),a=[8192*n.x,8192*n.y],o=[],s=0,u=t;s<u.length;s+=1)for(var l=0,p=u[s];l<p.length;l+=1){var c=p[l],h=[c.x+a[0],c.y+a[1]];Te(h,e,r,i),o.push(h);}return o}function Be(t,e,r,n){for(var i,a=8192*Math.pow(2,n.z),o=[8192*n.x,8192*n.y],s=[],u=0,l=t;u<l.length;u+=1){for(var p=[],c=0,h=l[u];c<h.length;c+=1){var f=h[c],y=[f.x+o[0],f.y+o[1]];xe(e,y),p.push(y);}s.push(p);}if(e[2]-e[0]<=a/2){(i=e)[0]=i[1]=1/0,i[2]=i[3]=-1/0;for(var d=0,m=s;d<m.length;d+=1)for(var v=0,g=m[d];v<g.length;v+=1)Te(g[v],e,r,a);}return s}ge.parse=function(t,e){if(2!==t.length)return e.error("Expected one argument.");var r=t[1];if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.");var n=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,Rt);if(!n)return null;var i=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,Rt);if(!i)return null;var a=null;return r.locale&&!(a=e.parse(r.locale,1,Lt))?null:new ge(n,i,a)},ge.prototype.evaluate=function(t){return new Qt(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)},ge.prototype.eachChild=function(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale);},ge.prototype.outputDefined=function(){return !1},ge.prototype.serialize=function(){var t={};return t["case-sensitive"]=this.caseSensitive.serialize(),t["diacritic-sensitive"]=this.diacriticSensitive.serialize(),this.locale&&(t.locale=this.locale.serialize()),["collator",t]};var Ve=function(t,e){this.type=Rt,this.geojson=t,this.geometries=e;};function Fe(t){if(t instanceof ve){if("get"===t.name&&1===t.args.length)return !1;if("feature-state"===t.name)return !1;if("has"===t.name&&1===t.args.length)return !1;if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return !1;if(/^filter-/.test(t.name))return !1}if(t instanceof Ve)return !1;var e=!0;return t.eachChild((function(t){e&&!Fe(t)&&(e=!1);})),e}function De(t){if(t instanceof ve&&"feature-state"===t.name)return !1;var e=!0;return t.eachChild((function(t){e&&!De(t)&&(e=!1);})),e}function Le(t,e){if(t instanceof ve&&e.indexOf(t.name)>=0)return !1;var r=!0;return t.eachChild((function(t){r&&!Le(t,e)&&(r=!1);})),r}Ve.parse=function(t,e){if(2!==t.length)return e.error("'within' expression requires exactly one argument, but found "+(t.length-1)+" instead.");if(ie(t[1])){var r=t[1];if("FeatureCollection"===r.type)for(var n=0;n<r.features.length;++n){var i=r.features[n].geometry.type;if("Polygon"===i||"MultiPolygon"===i)return new Ve(r,r.features[n].geometry)}else if("Feature"===r.type){var a=r.geometry.type;if("Polygon"===a||"MultiPolygon"===a)return new Ve(r,r.geometry)}else if("Polygon"===r.type||"MultiPolygon"===r.type)return new Ve(r,r)}return e.error("'within' expression requires valid geojson object that contains polygon geometry type.")},Ve.prototype.evaluate=function(t){if(null!=t.geometry()&&null!=t.canonicalID()){if("Point"===t.geometryType())return function(t,e){var r=[1/0,1/0,-1/0,-1/0],n=[1/0,1/0,-1/0,-1/0],i=t.canonicalID();if("Polygon"===e.type){var a=Me(e.coordinates,n,i),o=Pe(t.geometry(),r,n,i);if(!be(r,n))return !1;for(var s=0,u=o;s<u.length;s+=1)if(!Ae(u[s],a))return !1}if("MultiPolygon"===e.type){var l=Ee(e.coordinates,n,i),p=Pe(t.geometry(),r,n,i);if(!be(r,n))return !1;for(var c=0,h=p;c<h.length;c+=1)if(!Se(h[c],l))return !1}return !0}(t,this.geometries);if("LineString"===t.geometryType())return function(t,e){var r=[1/0,1/0,-1/0,-1/0],n=[1/0,1/0,-1/0,-1/0],i=t.canonicalID();if("Polygon"===e.type){var a=Me(e.coordinates,n,i),o=Be(t.geometry(),r,n,i);if(!be(r,n))return !1;for(var s=0,u=o;s<u.length;s+=1)if(!ze(u[s],a))return !1}if("MultiPolygon"===e.type){var l=Ee(e.coordinates,n,i),p=Be(t.geometry(),r,n,i);if(!be(r,n))return !1;for(var c=0,h=p;c<h.length;c+=1)if(!Ce(h[c],l))return !1}return !0}(t,this.geometries)}return !1},Ve.prototype.eachChild=function(){},Ve.prototype.outputDefined=function(){return !0},Ve.prototype.serialize=function(){return ["within",this.geojson]};var Re=function(t,e){this.type=e.type,this.name=t,this.boundExpression=e;};Re.parse=function(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.");var r=t[1];return e.scope.has(r)?new Re(r,e.scope.get(r)):e.error('Unknown variable "'+r+'". Make sure "'+r+'" has been bound in an enclosing "let" expression before using it.',1)},Re.prototype.evaluate=function(t){return this.boundExpression.evaluate(t)},Re.prototype.eachChild=function(){},Re.prototype.outputDefined=function(){return !1},Re.prototype.serialize=function(){return ["var",this.name]};var Oe=function(t,e,r,n,i){void 0===e&&(e=[]),void 0===n&&(n=new Vt),void 0===i&&(i=[]),this.registry=t,this.path=e,this.key=e.map((function(t){return "["+t+"]"})).join(""),this.scope=n,this.errors=i,this.expectedType=r;};function Ue(t,e){for(var r,n=t.length-1,i=0,a=n,o=0;i<=a;)if((r=t[o=Math.floor((i+a)/2)])<=e){if(o===n||e<t[o+1])return o;i=o+1;}else {if(!(r>e))throw new ue("Input is not a number.");a=o-1;}return 0}Oe.prototype.parse=function(t,e,r,n,i){return void 0===i&&(i={}),e?this.concat(e,r,n)._parse(t,i):this._parse(t,i)},Oe.prototype._parse=function(t,e){function r(t,e,r){return "assert"===r?new pe(e,[t]):"coerce"===r?new ye(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');var n=t[0];if("string"!=typeof n)return this.error("Expression name must be a string, but found "+typeof n+' instead. If you wanted a literal array, use ["literal", [...]].',0),null;var i=this.registry[n];if(i){var a=i.parse(t,this);if(!a)return null;if(this.expectedType){var o=this.expectedType,s=a.type;if("string"!==o.kind&&"number"!==o.kind&&"boolean"!==o.kind&&"object"!==o.kind&&"array"!==o.kind||"value"!==s.kind)if("color"!==o.kind&&"formatted"!==o.kind&&"resolvedImage"!==o.kind||"value"!==s.kind&&"string"!==s.kind){if(this.checkSubtype(o,s))return null}else a=r(a,o,e.typeAnnotation||"coerce");else a=r(a,o,e.typeAnnotation||"assert");}if(!(a instanceof se)&&"resolvedImage"!==a.type.kind&&function t(e){if(e instanceof Re)return t(e.boundExpression);if(e instanceof ve&&"error"===e.name)return !1;if(e instanceof ge)return !1;if(e instanceof Ve)return !1;var r=e instanceof ye||e instanceof pe,n=!0;return e.eachChild((function(e){n=r?n&&t(e):n&&e instanceof se;})),!!n&&Fe(e)&&Le(e,["zoom","heatmap-density","line-progress","accumulated","is-supported-script"])}(a)){var u=new me;try{a=new se(a.type,a.evaluate(u));}catch(t){return this.error(t.message),null}}return a}return this.error('Unknown expression "'+n+'". If you wanted a literal array, use ["literal", [...]].',0)}return this.error(void 0===t?"'undefined' value invalid. Use null instead.":"object"==typeof t?'Bare objects invalid. Use ["literal", {...}] instead.':"Expected an array, but found "+typeof t+" instead.")},Oe.prototype.concat=function(t,e,r){var n="number"==typeof t?this.path.concat(t):this.path,i=r?this.scope.concat(r):this.scope;return new Oe(this.registry,n,e||null,i,this.errors)},Oe.prototype.error=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var n=""+this.key+e.map((function(t){return "["+t+"]"})).join("");this.errors.push(new Bt(n,t));},Oe.prototype.checkSubtype=function(t,e){var r=Jt(t,e);return r&&this.error(r),r};var je=function(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[];for(var n=0,i=r;n<i.length;n+=1){var a=i[n],o=a[1];this.labels.push(a[0]),this.outputs.push(o);}};function qe(t,e,r){return t*(1-r)+e*r}je.parse=function(t,e){if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");var r=e.parse(t[1],1,Dt);if(!r)return null;var n=[],i=null;e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType);for(var a=1;a<t.length;a+=2){var o=1===a?-1/0:t[a],s=t[a+1],u=a,l=a+1;if("number"!=typeof o)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',u);if(n.length&&n[n.length-1][0]>=o)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',u);var p=e.parse(s,l,i);if(!p)return null;i=i||p.type,n.push([o,p]);}return new je(i,r,n)},je.prototype.evaluate=function(t){var e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);var n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);var i=e.length;return n>=e[i-1]?r[i-1].evaluate(t):r[Ue(e,n)].evaluate(t)},je.prototype.eachChild=function(t){t(this.input);for(var e=0,r=this.outputs;e<r.length;e+=1)t(r[e]);},je.prototype.outputDefined=function(){return this.outputs.every((function(t){return t.outputDefined()}))},je.prototype.serialize=function(){for(var t=["step",this.input.serialize()],e=0;e<this.labels.length;e++)e>0&&t.push(this.labels[e]),t.push(this.outputs[e].serialize());return t};var Ne=Object.freeze({__proto__:null,number:qe,color:function(t,e,r){return new Wt(qe(t.r,e.r,r),qe(t.g,e.g,r),qe(t.b,e.b,r),qe(t.a,e.a,r))},array:function(t,e,r){return t.map((function(t,n){return qe(t,e[n],r)}))}}),Ke=6/29*3*(6/29),Ge=Math.PI/180,Ze=180/Math.PI;function Xe(t){return t>.008856451679035631?Math.pow(t,1/3):t/Ke+4/29}function Je(t){return t>6/29?t*t*t:Ke*(t-4/29)}function He(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Ye(t){return (t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function $e(t){var e=Ye(t.r),r=Ye(t.g),n=Ye(t.b),i=Xe((.4124564*e+.3575761*r+.1804375*n)/.95047),a=Xe((.2126729*e+.7151522*r+.072175*n)/1);return {l:116*a-16,a:500*(i-a),b:200*(a-Xe((.0193339*e+.119192*r+.9503041*n)/1.08883)),alpha:t.a}}function We(t){var e=(t.l+16)/116,r=isNaN(t.a)?e:e+t.a/500,n=isNaN(t.b)?e:e-t.b/200;return e=1*Je(e),r=.95047*Je(r),n=1.08883*Je(n),new Wt(He(3.2404542*r-1.5371385*e-.4985314*n),He(-.969266*r+1.8760108*e+.041556*n),He(.0556434*r-.2040259*e+1.0572252*n),t.alpha)}function Qe(t,e,r){var n=e-t;return t+r*(n>180||n<-180?n-360*Math.round(n/360):n)}var tr={forward:$e,reverse:We,interpolate:function(t,e,r){return {l:qe(t.l,e.l,r),a:qe(t.a,e.a,r),b:qe(t.b,e.b,r),alpha:qe(t.alpha,e.alpha,r)}}},er={forward:function(t){var e=$e(t),r=e.l,n=e.a,i=e.b,a=Math.atan2(i,n)*Ze;return {h:a<0?a+360:a,c:Math.sqrt(n*n+i*i),l:r,alpha:t.a}},reverse:function(t){var e=t.h*Ge,r=t.c;return We({l:t.l,a:Math.cos(e)*r,b:Math.sin(e)*r,alpha:t.alpha})},interpolate:function(t,e,r){return {h:Qe(t.h,e.h,r),c:qe(t.c,e.c,r),l:qe(t.l,e.l,r),alpha:qe(t.alpha,e.alpha,r)}}},rr=Object.freeze({__proto__:null,lab:tr,hcl:er}),nr=function(t,e,r,n,i){this.type=t,this.operator=e,this.interpolation=r,this.input=n,this.labels=[],this.outputs=[];for(var a=0,o=i;a<o.length;a+=1){var s=o[a],u=s[1];this.labels.push(s[0]),this.outputs.push(u);}};function ir(t,e,r,n){var i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}nr.interpolationFactor=function(t,e,n,i){var a=0;if("exponential"===t.name)a=ir(e,t.base,n,i);else if("linear"===t.name)a=ir(e,1,n,i);else if("cubic-bezier"===t.name){var o=t.controlPoints;a=new r(o[0],o[1],o[2],o[3]).solve(ir(e,1,n,i));}return a},nr.parse=function(t,e){var r=t[0],n=t[1],i=t[2],a=t.slice(3);if(!Array.isArray(n)||0===n.length)return e.error("Expected an interpolation type expression.",1);if("linear"===n[0])n={name:"linear"};else if("exponential"===n[0]){var o=n[1];if("number"!=typeof o)return e.error("Exponential interpolation requires a numeric base.",1,1);n={name:"exponential",base:o};}else {if("cubic-bezier"!==n[0])return e.error("Unknown interpolation type "+String(n[0]),1,0);var s=n.slice(1);if(4!==s.length||s.some((function(t){return "number"!=typeof t||t<0||t>1})))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1);n={name:"cubic-bezier",controlPoints:s};}if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");if(!(i=e.parse(i,2,Dt)))return null;var u=[],l=null;"interpolate-hcl"===r||"interpolate-lab"===r?l=Ot:e.expectedType&&"value"!==e.expectedType.kind&&(l=e.expectedType);for(var p=0;p<a.length;p+=2){var c=a[p],h=a[p+1],f=p+3,y=p+4;if("number"!=typeof c)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',f);if(u.length&&u[u.length-1][0]>=c)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',f);var d=e.parse(h,y,l);if(!d)return null;l=l||d.type,u.push([c,d]);}return "number"===l.kind||"color"===l.kind||"array"===l.kind&&"number"===l.itemType.kind&&"number"==typeof l.N?new nr(l,r,n,i,u):e.error("Type "+Zt(l)+" is not interpolatable.")},nr.prototype.evaluate=function(t){var e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);var n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);var i=e.length;if(n>=e[i-1])return r[i-1].evaluate(t);var a=Ue(e,n),o=nr.interpolationFactor(this.interpolation,n,e[a],e[a+1]),s=r[a].evaluate(t),u=r[a+1].evaluate(t);return "interpolate"===this.operator?Ne[this.type.kind.toLowerCase()](s,u,o):"interpolate-hcl"===this.operator?er.reverse(er.interpolate(er.forward(s),er.forward(u),o)):tr.reverse(tr.interpolate(tr.forward(s),tr.forward(u),o))},nr.prototype.eachChild=function(t){t(this.input);for(var e=0,r=this.outputs;e<r.length;e+=1)t(r[e]);},nr.prototype.outputDefined=function(){return this.outputs.every((function(t){return t.outputDefined()}))},nr.prototype.serialize=function(){var t;t="linear"===this.interpolation.name?["linear"]:"exponential"===this.interpolation.name?1===this.interpolation.base?["linear"]:["exponential",this.interpolation.base]:["cubic-bezier"].concat(this.interpolation.controlPoints);for(var e=[this.operator,t,this.input.serialize()],r=0;r<this.labels.length;r++)e.push(this.labels[r],this.outputs[r].serialize());return e};var ar=function(t,e){this.type=t,this.args=e;};ar.parse=function(t,e){if(t.length<2)return e.error("Expectected at least one argument.");var r=null,n=e.expectedType;n&&"value"!==n.kind&&(r=n);for(var i=[],a=0,o=t.slice(1);a<o.length;a+=1){var s=e.parse(o[a],1+i.length,r,void 0,{typeAnnotation:"omit"});if(!s)return null;r=r||s.type,i.push(s);}var u=n&&i.some((function(t){return Jt(n,t.type)}));return new ar(u?jt:r,i)},ar.prototype.evaluate=function(t){for(var e,r=null,n=0,i=0,a=this.args;i<a.length&&(n++,(r=a[i].evaluate(t))&&r instanceof re&&!r.available&&(e||(e=r.name),r=null,n===this.args.length&&(r=e)),null===r);i+=1);return r},ar.prototype.eachChild=function(t){this.args.forEach(t);},ar.prototype.outputDefined=function(){return this.args.every((function(t){return t.outputDefined()}))},ar.prototype.serialize=function(){var t=["coalesce"];return this.eachChild((function(e){t.push(e.serialize());})),t};var or=function(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e;};or.prototype.evaluate=function(t){return this.result.evaluate(t)},or.prototype.eachChild=function(t){for(var e=0,r=this.bindings;e<r.length;e+=1)t(r[e][1]);t(this.result);},or.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found "+(t.length-1)+" instead.");for(var r=[],n=1;n<t.length-1;n+=2){var i=t[n];if("string"!=typeof i)return e.error("Expected string, but found "+typeof i+" instead.",n);if(/[^a-zA-Z0-9_]/.test(i))return e.error("Variable names must contain only alphanumeric characters or '_'.",n);var a=e.parse(t[n+1],n+1);if(!a)return null;r.push([i,a]);}var o=e.parse(t[t.length-1],t.length-1,e.expectedType,r);return o?new or(r,o):null},or.prototype.outputDefined=function(){return this.result.outputDefined()},or.prototype.serialize=function(){for(var t=["let"],e=0,r=this.bindings;e<r.length;e+=1){var n=r[e];t.push(n[0],n[1].serialize());}return t.push(this.result.serialize()),t};var sr=function(t,e,r){this.type=t,this.index=e,this.input=r;};sr.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1,Dt),n=e.parse(t[2],2,Gt(e.expectedType||jt));return r&&n?new sr(n.type.itemType,r,n):null},sr.prototype.evaluate=function(t){var e=this.index.evaluate(t),r=this.input.evaluate(t);if(e<0)throw new ue("Array index out of bounds: "+e+" < 0.");if(e>=r.length)throw new ue("Array index out of bounds: "+e+" > "+(r.length-1)+".");if(e!==Math.floor(e))throw new ue("Array index must be an integer, but found "+e+" instead.");return r[e]},sr.prototype.eachChild=function(t){t(this.index),t(this.input);},sr.prototype.outputDefined=function(){return !1},sr.prototype.serialize=function(){return ["at",this.index.serialize(),this.input.serialize()]};var ur=function(t,e){this.type=Rt,this.needle=t,this.haystack=e;};ur.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1,jt),n=e.parse(t[2],2,jt);return r&&n?Ht(r.type,[Rt,Lt,Dt,Ft,jt])?new ur(r,n):e.error("Expected first argument to be of type boolean, string, number or null, but found "+Zt(r.type)+" instead"):null},ur.prototype.evaluate=function(t){var e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!r)return !1;if(!Yt(e,["boolean","string","number","null"]))throw new ue("Expected first argument to be of type boolean, string, number or null, but found "+Zt(ae(e))+" instead.");if(!Yt(r,["string","array"]))throw new ue("Expected second argument to be of type array or string, but found "+Zt(ae(r))+" instead.");return r.indexOf(e)>=0},ur.prototype.eachChild=function(t){t(this.needle),t(this.haystack);},ur.prototype.outputDefined=function(){return !0},ur.prototype.serialize=function(){return ["in",this.needle.serialize(),this.haystack.serialize()]};var lr=function(t,e,r){this.type=Dt,this.needle=t,this.haystack=e,this.fromIndex=r;};lr.parse=function(t,e){if(t.length<=2||t.length>=5)return e.error("Expected 3 or 4 arguments, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1,jt),n=e.parse(t[2],2,jt);if(!r||!n)return null;if(!Ht(r.type,[Rt,Lt,Dt,Ft,jt]))return e.error("Expected first argument to be of type boolean, string, number or null, but found "+Zt(r.type)+" instead");if(4===t.length){var i=e.parse(t[3],3,Dt);return i?new lr(r,n,i):null}return new lr(r,n)},lr.prototype.evaluate=function(t){var e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!Yt(e,["boolean","string","number","null"]))throw new ue("Expected first argument to be of type boolean, string, number or null, but found "+Zt(ae(e))+" instead.");if(!Yt(r,["string","array"]))throw new ue("Expected second argument to be of type array or string, but found "+Zt(ae(r))+" instead.");if(this.fromIndex){var n=this.fromIndex.evaluate(t);return r.indexOf(e,n)}return r.indexOf(e)},lr.prototype.eachChild=function(t){t(this.needle),t(this.haystack),this.fromIndex&&t(this.fromIndex);},lr.prototype.outputDefined=function(){return !1},lr.prototype.serialize=function(){if(null!=this.fromIndex&&void 0!==this.fromIndex){var t=this.fromIndex.serialize();return ["index-of",this.needle.serialize(),this.haystack.serialize(),t]}return ["index-of",this.needle.serialize(),this.haystack.serialize()]};var pr=function(t,e,r,n,i,a){this.inputType=t,this.type=e,this.input=r,this.cases=n,this.outputs=i,this.otherwise=a;};pr.parse=function(t,e){if(t.length<5)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if(t.length%2!=1)return e.error("Expected an even number of arguments.");var r,n;e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType);for(var i={},a=[],o=2;o<t.length-1;o+=2){var s=t[o],u=t[o+1];Array.isArray(s)||(s=[s]);var l=e.concat(o);if(0===s.length)return l.error("Expected at least one branch label.");for(var p=0,c=s;p<c.length;p+=1){var h=c[p];if("number"!=typeof h&&"string"!=typeof h)return l.error("Branch labels must be numbers or strings.");if("number"==typeof h&&Math.abs(h)>Number.MAX_SAFE_INTEGER)return l.error("Branch labels must be integers no larger than "+Number.MAX_SAFE_INTEGER+".");if("number"==typeof h&&Math.floor(h)!==h)return l.error("Numeric branch labels must be integer values.");if(r){if(l.checkSubtype(r,ae(h)))return null}else r=ae(h);if(void 0!==i[String(h)])return l.error("Branch labels must be unique.");i[String(h)]=a.length;}var f=e.parse(u,o,n);if(!f)return null;n=n||f.type,a.push(f);}var y=e.parse(t[1],1,jt);if(!y)return null;var d=e.parse(t[t.length-1],t.length-1,n);return d?"value"!==y.type.kind&&e.concat(1).checkSubtype(r,y.type)?null:new pr(r,n,y,i,a,d):null},pr.prototype.evaluate=function(t){var e=this.input.evaluate(t);return (ae(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)},pr.prototype.eachChild=function(t){t(this.input),this.outputs.forEach(t),t(this.otherwise);},pr.prototype.outputDefined=function(){return this.outputs.every((function(t){return t.outputDefined()}))&&this.otherwise.outputDefined()},pr.prototype.serialize=function(){for(var t=this,e=["match",this.input.serialize()],r=[],n={},i=0,a=Object.keys(this.cases).sort();i<a.length;i+=1){var o=a[i];void 0===(c=n[this.cases[o]])?(n[this.cases[o]]=r.length,r.push([this.cases[o],[o]])):r[c][1].push(o);}for(var s=function(e){return "number"===t.inputType.kind?Number(e):e},u=0,l=r;u<l.length;u+=1){var p=l[u],c=p[0],h=p[1];e.push(1===h.length?s(h[0]):h.map(s)),e.push(this.outputs[outputIndex$1].serialize());}return e.push(this.otherwise.serialize()),e};var cr=function(t,e,r){this.type=t,this.branches=e,this.otherwise=r;};cr.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found only "+(t.length-1)+".");if(t.length%2!=0)return e.error("Expected an odd number of arguments.");var r;e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType);for(var n=[],i=1;i<t.length-1;i+=2){var a=e.parse(t[i],i,Rt);if(!a)return null;var o=e.parse(t[i+1],i+1,r);if(!o)return null;n.push([a,o]),r=r||o.type;}var s=e.parse(t[t.length-1],t.length-1,r);return s?new cr(r,n,s):null},cr.prototype.evaluate=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var n=r[e],i=n[1];if(n[0].evaluate(t))return i.evaluate(t)}return this.otherwise.evaluate(t)},cr.prototype.eachChild=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var n=r[e],i=n[1];t(n[0]),t(i);}t(this.otherwise);},cr.prototype.outputDefined=function(){return this.branches.every((function(t){return t[1].outputDefined()}))&&this.otherwise.outputDefined()},cr.prototype.serialize=function(){var t=["case"];return this.eachChild((function(e){t.push(e.serialize());})),t};var hr=function(t,e,r,n){this.type=t,this.input=e,this.beginIndex=r,this.endIndex=n;};function fr(t,e){return "=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function yr(t,e,r,n){return 0===n.compare(e,r)}function dr(t,e,r){var n="=="!==t&&"!="!==t;return function(){function i(t,e,r){this.type=Rt,this.lhs=t,this.rhs=e,this.collator=r,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind;}return i.parse=function(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.");var r=t[0],a=e.parse(t[1],1,jt);if(!a)return null;if(!fr(r,a.type))return e.concat(1).error('"'+r+"\" comparisons are not supported for type '"+Zt(a.type)+"'.");var o=e.parse(t[2],2,jt);if(!o)return null;if(!fr(r,o.type))return e.concat(2).error('"'+r+"\" comparisons are not supported for type '"+Zt(o.type)+"'.");if(a.type.kind!==o.type.kind&&"value"!==a.type.kind&&"value"!==o.type.kind)return e.error("Cannot compare types '"+Zt(a.type)+"' and '"+Zt(o.type)+"'.");n&&("value"===a.type.kind&&"value"!==o.type.kind?a=new pe(o.type,[a]):"value"!==a.type.kind&&"value"===o.type.kind&&(o=new pe(a.type,[o])));var s=null;if(4===t.length){if("string"!==a.type.kind&&"string"!==o.type.kind&&"value"!==a.type.kind&&"value"!==o.type.kind)return e.error("Cannot use collator to compare non-string types.");if(!(s=e.parse(t[3],3,qt)))return null}return new i(a,o,s)},i.prototype.evaluate=function(i){var a=this.lhs.evaluate(i),o=this.rhs.evaluate(i);if(n&&this.hasUntypedArgument){var s=ae(a),u=ae(o);if(s.kind!==u.kind||"string"!==s.kind&&"number"!==s.kind)throw new ue('Expected arguments for "'+t+'" to be (string, string) or (number, number), but found ('+s.kind+", "+u.kind+") instead.")}if(this.collator&&!n&&this.hasUntypedArgument){var l=ae(a),p=ae(o);if("string"!==l.kind||"string"!==p.kind)return e(i,a,o)}return this.collator?r(i,a,o,this.collator.evaluate(i)):e(i,a,o)},i.prototype.eachChild=function(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator);},i.prototype.outputDefined=function(){return !0},i.prototype.serialize=function(){var e=[t];return this.eachChild((function(t){e.push(t.serialize());})),e},i}()}hr.parse=function(t,e){if(t.length<=2||t.length>=5)return e.error("Expected 3 or 4 arguments, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1,jt),n=e.parse(t[2],2,Dt);if(!r||!n)return null;if(!Ht(r.type,[Gt(jt),Lt,jt]))return e.error("Expected first argument to be of type array or string, but found "+Zt(r.type)+" instead");if(4===t.length){var i=e.parse(t[3],3,Dt);return i?new hr(r.type,r,n,i):null}return new hr(r.type,r,n)},hr.prototype.evaluate=function(t){var e=this.input.evaluate(t),r=this.beginIndex.evaluate(t);if(!Yt(e,["string","array"]))throw new ue("Expected first argument to be of type array or string, but found "+Zt(ae(e))+" instead.");if(this.endIndex){var n=this.endIndex.evaluate(t);return e.slice(r,n)}return e.slice(r)},hr.prototype.eachChild=function(t){t(this.input),t(this.beginIndex),this.endIndex&&t(this.endIndex);},hr.prototype.outputDefined=function(){return !1},hr.prototype.serialize=function(){if(null!=this.endIndex&&void 0!==this.endIndex){var t=this.endIndex.serialize();return ["slice",this.input.serialize(),this.beginIndex.serialize(),t]}return ["slice",this.input.serialize(),this.beginIndex.serialize()]};var mr=dr("==",(function(t,e,r){return e===r}),yr),vr=dr("!=",(function(t,e,r){return e!==r}),(function(t,e,r,n){return !yr(0,e,r,n)})),gr=dr("<",(function(t,e,r){return e<r}),(function(t,e,r,n){return n.compare(e,r)<0})),xr=dr(">",(function(t,e,r){return e>r}),(function(t,e,r,n){return n.compare(e,r)>0})),br=dr("<=",(function(t,e,r){return e<=r}),(function(t,e,r,n){return n.compare(e,r)<=0})),wr=dr(">=",(function(t,e,r){return e>=r}),(function(t,e,r,n){return n.compare(e,r)>=0})),_r=function(t,e,r,n,i){this.type=Lt,this.number=t,this.locale=e,this.currency=r,this.minFractionDigits=n,this.maxFractionDigits=i;};_r.parse=function(t,e){if(3!==t.length)return e.error("Expected two arguments.");var r=e.parse(t[1],1,Dt);if(!r)return null;var n=t[2];if("object"!=typeof n||Array.isArray(n))return e.error("NumberFormat options argument must be an object.");var i=null;if(n.locale&&!(i=e.parse(n.locale,1,Lt)))return null;var a=null;if(n.currency&&!(a=e.parse(n.currency,1,Lt)))return null;var o=null;if(n["min-fraction-digits"]&&!(o=e.parse(n["min-fraction-digits"],1,Dt)))return null;var s=null;return n["max-fraction-digits"]&&!(s=e.parse(n["max-fraction-digits"],1,Dt))?null:new _r(r,i,a,o,s)},_r.prototype.evaluate=function(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))},_r.prototype.eachChild=function(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits);},_r.prototype.outputDefined=function(){return !1},_r.prototype.serialize=function(){var t={};return this.locale&&(t.locale=this.locale.serialize()),this.currency&&(t.currency=this.currency.serialize()),this.minFractionDigits&&(t["min-fraction-digits"]=this.minFractionDigits.serialize()),this.maxFractionDigits&&(t["max-fraction-digits"]=this.maxFractionDigits.serialize()),["number-format",this.number.serialize(),t]};var Ar=function(t){this.type=Dt,this.input=t;};Ar.parse=function(t,e){if(2!==t.length)return e.error("Expected 1 argument, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1);return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error("Expected argument of type string or array, but found "+Zt(r.type)+" instead."):new Ar(r):null},Ar.prototype.evaluate=function(t){var e=this.input.evaluate(t);if("string"==typeof e)return e.length;if(Array.isArray(e))return e.length;throw new ue("Expected value to be of type string or array, but found "+Zt(ae(e))+" instead.")},Ar.prototype.eachChild=function(t){t(this.input);},Ar.prototype.outputDefined=function(){return !1},Ar.prototype.serialize=function(){var t=["length"];return this.eachChild((function(e){t.push(e.serialize());})),t};var Sr={"==":mr,"!=":vr,">":xr,"<":gr,">=":wr,"<=":br,array:pe,at:sr,boolean:pe,case:cr,coalesce:ar,collator:ge,format:ce,image:he,in:ur,"index-of":lr,interpolate:nr,"interpolate-hcl":nr,"interpolate-lab":nr,length:Ar,let:or,literal:se,match:pr,number:pe,"number-format":_r,object:pe,slice:hr,step:je,string:pe,"to-boolean":ye,"to-color":ye,"to-number":ye,"to-string":ye,var:Re,within:Ve};function kr(t,e){var r=e[0],n=e[1],i=e[2],a=e[3];r=r.evaluate(t),n=n.evaluate(t),i=i.evaluate(t);var o=a?a.evaluate(t):1,s=ne(r,n,i,o);if(s)throw new ue(s);return new Wt(r/255*o,n/255*o,i/255*o,o)}function Ir(t,e){return t in e}function zr(t,e){var r=e[t];return void 0===r?null:r}function Cr(t){return {type:t}}function Mr(t){return {result:"success",value:t}}function Er(t){return {result:"error",value:t}}function Tr(t){return "data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function Pr(t){return !!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function Br(t){return !!t.expression&&t.expression.interpolated}function Vr(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function Fr(t){return "object"==typeof t&&null!==t&&!Array.isArray(t)}function Dr(t){return t}function Lr(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function Rr(t,e,r,n,i){return Lr(typeof r===i?n[r]:void 0,t.default,e.default)}function Or(t,e,r){if("number"!==Vr(r))return Lr(t.default,e.default);var n=t.stops.length;if(1===n)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[n-1][0])return t.stops[n-1][1];var i=Ue(t.stops.map((function(t){return t[0]})),r);return t.stops[i][1]}function Ur(t,e,r){var n=void 0!==t.base?t.base:1;if("number"!==Vr(r))return Lr(t.default,e.default);var i=t.stops.length;if(1===i)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[i-1][0])return t.stops[i-1][1];var a=Ue(t.stops.map((function(t){return t[0]})),r),o=function(t,e,r,n){var i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}(r,n,t.stops[a][0],t.stops[a+1][0]),s=t.stops[a][1],u=t.stops[a+1][1],l=Ne[e.type]||Dr;if(t.colorSpace&&"rgb"!==t.colorSpace){var p=rr[t.colorSpace];l=function(t,e){return p.reverse(p.interpolate(p.forward(t),p.forward(e),o))};}return "function"==typeof s.evaluate?{evaluate:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var r=s.evaluate.apply(void 0,t),n=u.evaluate.apply(void 0,t);if(void 0!==r&&void 0!==n)return l(r,n,o)}}:l(s,u,o)}function jr(t,e,r){return "color"===e.type?r=Wt.parse(r):"formatted"===e.type?r=ee.fromString(r.toString()):"resolvedImage"===e.type?r=re.fromString(r.toString()):Vr(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0),Lr(r,t.default,e.default)}ve.register(Sr,{error:[{kind:"error"},[Lt],function(t,e){throw new ue(e[0].evaluate(t))}],typeof:[Lt,[jt],function(t,e){return Zt(ae(e[0].evaluate(t)))}],"to-rgba":[Gt(Dt,4),[Ot],function(t,e){return e[0].evaluate(t).toArray()}],rgb:[Ot,[Dt,Dt,Dt],kr],rgba:[Ot,[Dt,Dt,Dt,Dt],kr],has:{type:Rt,overloads:[[[Lt],function(t,e){return Ir(e[0].evaluate(t),t.properties())}],[[Lt,Ut],function(t,e){var r=e[1];return Ir(e[0].evaluate(t),r.evaluate(t))}]]},get:{type:jt,overloads:[[[Lt],function(t,e){return zr(e[0].evaluate(t),t.properties())}],[[Lt,Ut],function(t,e){var r=e[1];return zr(e[0].evaluate(t),r.evaluate(t))}]]},"feature-state":[jt,[Lt],function(t,e){return zr(e[0].evaluate(t),t.featureState||{})}],properties:[Ut,[],function(t){return t.properties()}],"geometry-type":[Lt,[],function(t){return t.geometryType()}],id:[jt,[],function(t){return t.id()}],zoom:[Dt,[],function(t){return t.globals.zoom}],"heatmap-density":[Dt,[],function(t){return t.globals.heatmapDensity||0}],"line-progress":[Dt,[],function(t){return t.globals.lineProgress||0}],accumulated:[jt,[],function(t){return void 0===t.globals.accumulated?null:t.globals.accumulated}],"+":[Dt,Cr(Dt),function(t,e){for(var r=0,n=0,i=e;n<i.length;n+=1)r+=i[n].evaluate(t);return r}],"*":[Dt,Cr(Dt),function(t,e){for(var r=1,n=0,i=e;n<i.length;n+=1)r*=i[n].evaluate(t);return r}],"-":{type:Dt,overloads:[[[Dt,Dt],function(t,e){var r=e[1];return e[0].evaluate(t)-r.evaluate(t)}],[[Dt],function(t,e){return -e[0].evaluate(t)}]]},"/":[Dt,[Dt,Dt],function(t,e){var r=e[1];return e[0].evaluate(t)/r.evaluate(t)}],"%":[Dt,[Dt,Dt],function(t,e){var r=e[1];return e[0].evaluate(t)%r.evaluate(t)}],ln2:[Dt,[],function(){return Math.LN2}],pi:[Dt,[],function(){return Math.PI}],e:[Dt,[],function(){return Math.E}],"^":[Dt,[Dt,Dt],function(t,e){var r=e[1];return Math.pow(e[0].evaluate(t),r.evaluate(t))}],sqrt:[Dt,[Dt],function(t,e){return Math.sqrt(e[0].evaluate(t))}],log10:[Dt,[Dt],function(t,e){return Math.log(e[0].evaluate(t))/Math.LN10}],ln:[Dt,[Dt],function(t,e){return Math.log(e[0].evaluate(t))}],log2:[Dt,[Dt],function(t,e){return Math.log(e[0].evaluate(t))/Math.LN2}],sin:[Dt,[Dt],function(t,e){return Math.sin(e[0].evaluate(t))}],cos:[Dt,[Dt],function(t,e){return Math.cos(e[0].evaluate(t))}],tan:[Dt,[Dt],function(t,e){return Math.tan(e[0].evaluate(t))}],asin:[Dt,[Dt],function(t,e){return Math.asin(e[0].evaluate(t))}],acos:[Dt,[Dt],function(t,e){return Math.acos(e[0].evaluate(t))}],atan:[Dt,[Dt],function(t,e){return Math.atan(e[0].evaluate(t))}],min:[Dt,Cr(Dt),function(t,e){return Math.min.apply(Math,e.map((function(e){return e.evaluate(t)})))}],max:[Dt,Cr(Dt),function(t,e){return Math.max.apply(Math,e.map((function(e){return e.evaluate(t)})))}],abs:[Dt,[Dt],function(t,e){return Math.abs(e[0].evaluate(t))}],round:[Dt,[Dt],function(t,e){var r=e[0].evaluate(t);return r<0?-Math.round(-r):Math.round(r)}],floor:[Dt,[Dt],function(t,e){return Math.floor(e[0].evaluate(t))}],ceil:[Dt,[Dt],function(t,e){return Math.ceil(e[0].evaluate(t))}],"filter-==":[Rt,[Lt,jt],function(t,e){var r=e[0],n=e[1];return t.properties()[r.value]===n.value}],"filter-id-==":[Rt,[jt],function(t,e){var r=e[0];return t.id()===r.value}],"filter-type-==":[Rt,[Lt],function(t,e){var r=e[0];return t.geometryType()===r.value}],"filter-<":[Rt,[Lt,jt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i<a}],"filter-id-<":[Rt,[jt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n<i}],"filter->":[Rt,[Lt,jt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i>a}],"filter-id->":[Rt,[jt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n>i}],"filter-<=":[Rt,[Lt,jt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i<=a}],"filter-id-<=":[Rt,[jt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n<=i}],"filter->=":[Rt,[Lt,jt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i>=a}],"filter-id->=":[Rt,[jt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n>=i}],"filter-has":[Rt,[jt],function(t,e){return e[0].value in t.properties()}],"filter-has-id":[Rt,[],function(t){return null!==t.id()&&void 0!==t.id()}],"filter-type-in":[Rt,[Gt(Lt)],function(t,e){return e[0].value.indexOf(t.geometryType())>=0}],"filter-id-in":[Rt,[Gt(jt)],function(t,e){return e[0].value.indexOf(t.id())>=0}],"filter-in-small":[Rt,[Lt,Gt(jt)],function(t,e){var r=e[0];return e[1].value.indexOf(t.properties()[r.value])>=0}],"filter-in-large":[Rt,[Lt,Gt(jt)],function(t,e){var r=e[0],n=e[1];return function(t,e,r,n){for(;r<=n;){var i=r+n>>1;if(e[i]===t)return !0;e[i]>t?n=i-1:r=i+1;}return !1}(t.properties()[r.value],n.value,0,n.value.length-1)}],all:{type:Rt,overloads:[[[Rt,Rt],function(t,e){var r=e[1];return e[0].evaluate(t)&&r.evaluate(t)}],[Cr(Rt),function(t,e){for(var r=0,n=e;r<n.length;r+=1)if(!n[r].evaluate(t))return !1;return !0}]]},any:{type:Rt,overloads:[[[Rt,Rt],function(t,e){var r=e[1];return e[0].evaluate(t)||r.evaluate(t)}],[Cr(Rt),function(t,e){for(var r=0,n=e;r<n.length;r+=1)if(n[r].evaluate(t))return !0;return !1}]]},"!":[Rt,[Rt],function(t,e){return !e[0].evaluate(t)}],"is-supported-script":[Rt,[Lt],function(t,e){var r=t.globals&&t.globals.isSupportedScript;return !r||r(e[0].evaluate(t))}],upcase:[Lt,[Lt],function(t,e){return e[0].evaluate(t).toUpperCase()}],downcase:[Lt,[Lt],function(t,e){return e[0].evaluate(t).toLowerCase()}],concat:[Lt,Cr(jt),function(t,e){return e.map((function(e){return oe(e.evaluate(t))})).join("")}],"resolved-locale":[Lt,[qt],function(t,e){return e[0].evaluate(t).resolvedLocale()}]});var qr=function(t,e){this.expression=t,this._warningHistory={},this._evaluator=new me,this._defaultValue=e?function(t){return "color"===t.type&&Fr(t.default)?new Wt(0,0,0,0):"color"===t.type?Wt.parse(t.default)||null:void 0===t.default?null:t.default}(e):null,this._enumValues=e&&"enum"===e.type?e.values:null;};function Nr(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in Sr}function Kr(t,e){var r=new Oe(Sr,[],e?function(t){var e={color:Ot,string:Lt,number:Dt,enum:Lt,boolean:Rt,formatted:Nt,resolvedImage:Kt};return "array"===t.type?Gt(e[t.value]||jt,t.length):e[t.type]}(e):void 0),n=r.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0);return n?Mr(new qr(n,e)):Er(r.errors)}qr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n,i,a){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=r,this._evaluator.canonical=n,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=a,this.expression.evaluate(this._evaluator)},qr.prototype.evaluate=function(t,e,r,n,i,a){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=r||null,this._evaluator.canonical=n,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=a||null;try{var o=this.expression.evaluate(this._evaluator);if(null==o||"number"==typeof o&&o!=o)return this._defaultValue;if(this._enumValues&&!(o in this._enumValues))throw new ue("Expected value to be one of "+Object.keys(this._enumValues).map((function(t){return JSON.stringify(t)})).join(", ")+", but found "+JSON.stringify(o)+" instead.");return o}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}};var Gr=function(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!De(e.expression);};Gr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n,i,a){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i,a)},Gr.prototype.evaluate=function(t,e,r,n,i,a){return this._styleExpression.evaluate(t,e,r,n,i,a)};var Zr=function(t,e,r,n){this.kind=t,this.zoomStops=r,this._styleExpression=e,this.isStateDependent="camera"!==t&&!De(e.expression),this.interpolationType=n;};function Xr(t,e){if("error"===(t=Kr(t,e)).result)return t;var r=t.value.expression,n=Fe(r);if(!n&&!Tr(e))return Er([new Bt("","data expressions not supported")]);var i=Le(r,["zoom"]);if(!i&&!Pr(e))return Er([new Bt("","zoom expressions not supported")]);var a=function t(e){var r=null;if(e instanceof or)r=t(e.result);else if(e instanceof ar)for(var n=0,i=e.args;n<i.length&&!(r=t(i[n]));n+=1);else (e instanceof je||e instanceof nr)&&e.input instanceof ve&&"zoom"===e.input.name&&(r=e);return r instanceof Bt||e.eachChild((function(e){var n=t(e);n instanceof Bt?r=n:!r&&n?r=new Bt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):r&&n&&r!==n&&(r=new Bt("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));})),r}(r);return a||i?a instanceof Bt?Er([a]):a instanceof nr&&!Br(e)?Er([new Bt("",'"interpolate" expressions cannot be used with this property')]):Mr(a?new Zr(n?"camera":"composite",t.value,a.labels,a instanceof nr?a.interpolation:void 0):new Gr(n?"constant":"source",t.value)):Er([new Bt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])}Zr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n,i,a){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i,a)},Zr.prototype.evaluate=function(t,e,r,n,i,a){return this._styleExpression.evaluate(t,e,r,n,i,a)},Zr.prototype.interpolationFactor=function(t,e,r){return this.interpolationType?nr.interpolationFactor(this.interpolationType,t,e,r):0};var Jr=function(t,e){this._parameters=t,this._specification=e,Et(this,function t(e,r){var n,i,a,o="color"===r.type,s=e.stops&&"object"==typeof e.stops[0][0],u=s||!(s||void 0!==e.property),l=e.type||(Br(r)?"exponential":"interval");if(o&&((e=Et({},e)).stops&&(e.stops=e.stops.map((function(t){return [t[0],Wt.parse(t[1])]}))),e.default=Wt.parse(e.default?e.default:r.default)),e.colorSpace&&"rgb"!==e.colorSpace&&!rr[e.colorSpace])throw new Error("Unknown color space: "+e.colorSpace);if("exponential"===l)n=Ur;else if("interval"===l)n=Or;else if("categorical"===l){n=Rr,i=Object.create(null);for(var p=0,c=e.stops;p<c.length;p+=1){var h=c[p];i[h[0]]=h[1];}a=typeof e.stops[0][0];}else {if("identity"!==l)throw new Error('Unknown function type "'+l+'"');n=jr;}if(s){for(var f={},y=[],d=0;d<e.stops.length;d++){var m=e.stops[d],v=m[0].zoom;void 0===f[v]&&(f[v]={zoom:v,type:e.type,property:e.property,default:e.default,stops:[]},y.push(v)),f[v].stops.push([m[0].value,m[1]]);}for(var g=[],x=0,b=y;x<b.length;x+=1){var w=b[x];g.push([f[w].zoom,t(f[w],r)]);}var _={name:"linear"};return {kind:"composite",interpolationType:_,interpolationFactor:nr.interpolationFactor.bind(void 0,_),zoomStops:g.map((function(t){return t[0]})),evaluate:function(t,n){var i=t.zoom;return Ur({stops:g,base:e.base},r,i).evaluate(i,n)}}}if(u){var A="exponential"===l?{name:"exponential",base:void 0!==e.base?e.base:1}:null;return {kind:"camera",interpolationType:A,interpolationFactor:nr.interpolationFactor.bind(void 0,A),zoomStops:e.stops.map((function(t){return t[0]})),evaluate:function(t){return n(e,r,t.zoom,i,a)}}}return {kind:"source",evaluate:function(t,o){var s=o&&o.properties?o.properties[e.property]:void 0;return void 0===s?Lr(e.default,r.default):n(e,r,s,i,a)}}}(this._parameters,this._specification));};function Hr(t){var e=t.key,r=t.value,n=t.valueSpec||{},i=t.objectElementValidators||{},a=t.style,o=t.styleSpec,s=[],u=Vr(r);if("object"!==u)return [new Ct(e,r,"object expected, "+u+" found")];for(var l in r){var p=l.split(".")[0],c=n[p]||n["*"],h=void 0;if(i[p])h=i[p];else if(n[p])h=wn;else if(i["*"])h=i["*"];else {if(!n["*"]){s.push(new Ct(e,r[l],'unknown property "'+l+'"'));continue}h=wn;}s=s.concat(h({key:(e?e+".":e)+l,value:r[l],valueSpec:c,style:a,styleSpec:o,object:r,objectKey:l},r));}for(var f in n)i[f]||n[f].required&&void 0===n[f].default&&void 0===r[f]&&s.push(new Ct(e,r,'missing required property "'+f+'"'));return s}function Yr(t){var e=t.value,r=t.valueSpec,n=t.style,i=t.styleSpec,a=t.key,o=t.arrayElementValidator||wn;if("array"!==Vr(e))return [new Ct(a,e,"array expected, "+Vr(e)+" found")];if(r.length&&e.length!==r.length)return [new Ct(a,e,"array length "+r.length+" expected, length "+e.length+" found")];if(r["min-length"]&&e.length<r["min-length"])return [new Ct(a,e,"array length at least "+r["min-length"]+" expected, length "+e.length+" found")];var s={type:r.value,values:r.values};i.$version<7&&(s.function=r.function),"object"===Vr(r.value)&&(s=r.value);for(var u=[],l=0;l<e.length;l++)u=u.concat(o({array:e,arrayIndex:l,value:e[l],valueSpec:s,style:n,styleSpec:i,key:a+"["+l+"]"}));return u}function $r(t){var e=t.key,r=t.value,n=t.valueSpec,i=Vr(r);return "number"===i&&r!=r&&(i="NaN"),"number"!==i?[new Ct(e,r,"number expected, "+i+" found")]:"minimum"in n&&r<n.minimum?[new Ct(e,r,r+" is less than the minimum value "+n.minimum)]:"maximum"in n&&r>n.maximum?[new Ct(e,r,r+" is greater than the maximum value "+n.maximum)]:[]}function Wr(t){var e,r,n,i=t.valueSpec,a=Tt(t.value.type),o={},s="categorical"!==a&&void 0===t.value.property,u=!s,l="array"===Vr(t.value.stops)&&"array"===Vr(t.value.stops[0])&&"object"===Vr(t.value.stops[0][0]),p=Hr({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===a)return [new Ct(t.key,t.value,'identity function may not have a "stops" property')];var e=[],r=t.value;return e=e.concat(Yr({key:t.key,value:r,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:c})),"array"===Vr(r)&&0===r.length&&e.push(new Ct(t.key,r,"array must have at least one stop")),e},default:function(t){return wn({key:t.key,value:t.value,valueSpec:i,style:t.style,styleSpec:t.styleSpec})}}});return "identity"===a&&s&&p.push(new Ct(t.key,t.value,'missing required property "property"')),"identity"===a||t.value.stops||p.push(new Ct(t.key,t.value,'missing required property "stops"')),"exponential"===a&&t.valueSpec.expression&&!Br(t.valueSpec)&&p.push(new Ct(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(u&&!Tr(t.valueSpec)?p.push(new Ct(t.key,t.value,"property functions not supported")):s&&!Pr(t.valueSpec)&&p.push(new Ct(t.key,t.value,"zoom functions not supported"))),"categorical"!==a&&!l||void 0!==t.value.property||p.push(new Ct(t.key,t.value,'"property" property is required')),p;function c(t){var e=[],a=t.value,s=t.key;if("array"!==Vr(a))return [new Ct(s,a,"array expected, "+Vr(a)+" found")];if(2!==a.length)return [new Ct(s,a,"array length 2 expected, length "+a.length+" found")];if(l){if("object"!==Vr(a[0]))return [new Ct(s,a,"object expected, "+Vr(a[0])+" found")];if(void 0===a[0].zoom)return [new Ct(s,a,"object stop key must have zoom")];if(void 0===a[0].value)return [new Ct(s,a,"object stop key must have value")];if(n&&n>Tt(a[0].zoom))return [new Ct(s,a[0].zoom,"stop zoom values must appear in ascending order")];Tt(a[0].zoom)!==n&&(n=Tt(a[0].zoom),r=void 0,o={}),e=e.concat(Hr({key:s+"[0]",value:a[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:$r,value:h}}));}else e=e.concat(h({key:s+"[0]",value:a[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},a));return Nr(Pt(a[1]))?e.concat([new Ct(s+"[1]",a[1],"expressions are not allowed in function stops.")]):e.concat(wn({key:s+"[1]",value:a[1],valueSpec:i,style:t.style,styleSpec:t.styleSpec}))}function h(t,n){var s=Vr(t.value),u=Tt(t.value),l=null!==t.value?t.value:n;if(e){if(s!==e)return [new Ct(t.key,l,s+" stop domain type must match previous stop domain type "+e)]}else e=s;if("number"!==s&&"string"!==s&&"boolean"!==s)return [new Ct(t.key,l,"stop domain value must be a number, string, or boolean")];if("number"!==s&&"categorical"!==a){var p="number expected, "+s+" found";return Tr(i)&&void 0===a&&(p+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new Ct(t.key,l,p)]}return "categorical"!==a||"number"!==s||isFinite(u)&&Math.floor(u)===u?"categorical"!==a&&"number"===s&&void 0!==r&&u<r?[new Ct(t.key,l,"stop domain values must appear in ascending order")]:(r=u,"categorical"===a&&u in o?[new Ct(t.key,l,"stop domain values must be unique")]:(o[u]=!0,[])):[new Ct(t.key,l,"integer expected, found "+u)]}}function Qr(t){var e=("property"===t.expressionContext?Xr:Kr)(Pt(t.value),t.valueSpec);if("error"===e.result)return e.value.map((function(e){return new Ct(""+t.key+e.key,t.value,e.message)}));var r=e.value.expression||e.value._styleExpression.expression;if("property"===t.expressionContext&&"text-font"===t.propertyKey&&!r.outputDefined())return [new Ct(t.key,t.value,'Invalid data expression for "'+t.propertyKey+'". Output values must be contained as literals within the expression.')];if("property"===t.expressionContext&&"layout"===t.propertyType&&!De(r))return [new Ct(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')];if("filter"===t.expressionContext&&!De(r))return [new Ct(t.key,t.value,'"feature-state" data expressions are not supported with filters.')];if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!Le(r,["zoom","feature-state"]))return [new Ct(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')];if("cluster-initial"===t.expressionContext&&!Fe(r))return [new Ct(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return []}function tn(t){var e=t.key,r=t.value,n=t.valueSpec,i=[];return Array.isArray(n.values)?-1===n.values.indexOf(Tt(r))&&i.push(new Ct(e,r,"expected one of ["+n.values.join(", ")+"], "+JSON.stringify(r)+" found")):-1===Object.keys(n.values).indexOf(Tt(r))&&i.push(new Ct(e,r,"expected one of ["+Object.keys(n.values).join(", ")+"], "+JSON.stringify(r)+" found")),i}function en(t){if(!0===t||!1===t)return !0;if(!Array.isArray(t)||0===t.length)return !1;switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1];case"in":return t.length>=3&&("string"!=typeof t[1]||Array.isArray(t[2]));case"!in":case"!has":case"none":return !1;case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2]);case"any":case"all":for(var e=0,r=t.slice(1);e<r.length;e+=1){var n=r[e];if(!en(n)&&"boolean"!=typeof n)return !1}return !0;default:return !0}}Jr.deserialize=function(t){return new Jr(t._parameters,t._specification)},Jr.serialize=function(t){return {_parameters:t._parameters,_specification:t._specification}};var rn={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}};function nn(t){if(null==t)return {filter:function(){return !0},needGeometry:!1};en(t)||(t=on(t));var e=Kr(t,rn);if("error"===e.result)throw new Error(e.value.map((function(t){return t.key+": "+t.message})).join(", "));return {filter:function(t,r,n){return e.value.evaluate(t,r,{},n)},needGeometry:function t(e){if(!Array.isArray(e))return !1;if("within"===e[0])return !0;for(var r=1;r<e.length;r++)if(t(e[r]))return !0;return !1}(t)}}function an(t,e){return t<e?-1:t>e?1:0}function on(t){if(!t)return !0;var e,r=t[0];return t.length<=1?"any"!==r:"=="===r?sn(t[1],t[2],"=="):"!="===r?pn(sn(t[1],t[2],"==")):"<"===r||">"===r||"<="===r||">="===r?sn(t[1],t[2],r):"any"===r?(e=t.slice(1),["any"].concat(e.map(on))):"all"===r?["all"].concat(t.slice(1).map(on)):"none"===r?["all"].concat(t.slice(1).map(on).map(pn)):"in"===r?un(t[1],t.slice(2)):"!in"===r?pn(un(t[1],t.slice(2))):"has"===r?ln(t[1]):"!has"===r?pn(ln(t[1])):"within"!==r||t}function sn(t,e,r){switch(t){case"$type":return ["filter-type-"+r,e];case"$id":return ["filter-id-"+r,e];default:return ["filter-"+r,t,e]}}function un(t,e){if(0===e.length)return !1;switch(t){case"$type":return ["filter-type-in",["literal",e]];case"$id":return ["filter-id-in",["literal",e]];default:return e.length>200&&!e.some((function(t){return typeof t!=typeof e[0]}))?["filter-in-large",t,["literal",e.sort(an)]]:["filter-in-small",t,["literal",e]]}}function ln(t){switch(t){case"$type":return !0;case"$id":return ["filter-has-id"];default:return ["filter-has",t]}}function pn(t){return ["!",t]}function cn(t){return en(Pt(t.value))?Qr(Et({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):function t(e){var r=e.value,n=e.key;if("array"!==Vr(r))return [new Ct(n,r,"array expected, "+Vr(r)+" found")];var i,a=e.styleSpec,o=[];if(r.length<1)return [new Ct(n,r,"filter array must have at least 1 element")];switch(o=o.concat(tn({key:n+"[0]",value:r[0],valueSpec:a.filter_operator,style:e.style,styleSpec:e.styleSpec})),Tt(r[0])){case"<":case"<=":case">":case">=":r.length>=2&&"$type"===Tt(r[1])&&o.push(new Ct(n,r,'"$type" cannot be use with operator "'+r[0]+'"'));case"==":case"!=":3!==r.length&&o.push(new Ct(n,r,'filter array for operator "'+r[0]+'" must have 3 elements'));case"in":case"!in":r.length>=2&&"string"!==(i=Vr(r[1]))&&o.push(new Ct(n+"[1]",r[1],"string expected, "+i+" found"));for(var s=2;s<r.length;s++)i=Vr(r[s]),"$type"===Tt(r[1])?o=o.concat(tn({key:n+"["+s+"]",value:r[s],valueSpec:a.geometry_type,style:e.style,styleSpec:e.styleSpec})):"string"!==i&&"number"!==i&&"boolean"!==i&&o.push(new Ct(n+"["+s+"]",r[s],"string, number, or boolean expected, "+i+" found"));break;case"any":case"all":case"none":for(var u=1;u<r.length;u++)o=o.concat(t({key:n+"["+u+"]",value:r[u],style:e.style,styleSpec:e.styleSpec}));break;case"has":case"!has":i=Vr(r[1]),2!==r.length?o.push(new Ct(n,r,'filter array for "'+r[0]+'" operator must have 2 elements')):"string"!==i&&o.push(new Ct(n+"[1]",r[1],"string expected, "+i+" found"));break;case"within":i=Vr(r[1]),2!==r.length?o.push(new Ct(n,r,'filter array for "'+r[0]+'" operator must have 2 elements')):"object"!==i&&o.push(new Ct(n+"[1]",r[1],"object expected, "+i+" found"));}return o}(t)}function hn(t,e){var r=t.key,n=t.style,i=t.styleSpec,a=t.value,o=t.objectKey,s=i[e+"_"+t.layerType];if(!s)return [];var u=o.match(/^(.*)-transition$/);if("paint"===e&&u&&s[u[1]]&&s[u[1]].transition)return wn({key:r,value:a,valueSpec:i.transition,style:n,styleSpec:i});var l,p=t.valueSpec||s[o];if(!p)return [new Ct(r,a,'unknown property "'+o+'"')];if("string"===Vr(a)&&Tr(p)&&!p.tokens&&(l=/^{([^}]+)}$/.exec(a)))return [new Ct(r,a,'"'+o+'" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": '+JSON.stringify(l[1])+" }`.")];var c=[];return "symbol"===t.layerType&&("text-field"===o&&n&&!n.glyphs&&c.push(new Ct(r,a,'use of "text-field" requires a style "glyphs" property')),"text-font"===o&&Fr(Pt(a))&&"identity"===Tt(a.type)&&c.push(new Ct(r,a,'"text-font" does not support identity functions'))),c.concat(wn({key:t.key,value:a,valueSpec:p,style:n,styleSpec:i,expressionContext:"property",propertyType:e,propertyKey:o}))}function fn(t){return hn(t,"paint")}function yn(t){return hn(t,"layout")}function dn(t){var e=[],r=t.value,n=t.key,i=t.style,a=t.styleSpec;r.type||r.ref||e.push(new Ct(n,r,'either "type" or "ref" is required'));var o,s=Tt(r.type),u=Tt(r.ref);if(r.id)for(var l=Tt(r.id),p=0;p<t.arrayIndex;p++){var c=i.layers[p];Tt(c.id)===l&&e.push(new Ct(n,r.id,'duplicate layer id "'+r.id+'", previously used at line '+c.id.__line__));}if("ref"in r)["type","source","source-layer","filter","layout"].forEach((function(t){t in r&&e.push(new Ct(n,r[t],'"'+t+'" is prohibited for ref layers'));})),i.layers.forEach((function(t){Tt(t.id)===u&&(o=t);})),o?o.ref?e.push(new Ct(n,r.ref,"ref cannot reference another ref layer")):s=Tt(o.type):e.push(new Ct(n,r.ref,'ref layer "'+u+'" not found'));else if("background"!==s)if(r.source){var h=i.sources&&i.sources[r.source],f=h&&Tt(h.type);h?"vector"===f&&"raster"===s?e.push(new Ct(n,r.source,'layer "'+r.id+'" requires a raster source')):"raster"===f&&"raster"!==s?e.push(new Ct(n,r.source,'layer "'+r.id+'" requires a vector source')):"vector"!==f||r["source-layer"]?"raster-dem"===f&&"hillshade"!==s?e.push(new Ct(n,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==s||!r.paint||!r.paint["line-gradient"]||"geojson"===f&&h.lineMetrics||e.push(new Ct(n,r,'layer "'+r.id+'" specifies a line-gradient, which requires a GeoJSON source with `lineMetrics` enabled.')):e.push(new Ct(n,r,'layer "'+r.id+'" must specify a "source-layer"')):e.push(new Ct(n,r.source,'source "'+r.source+'" not found'));}else e.push(new Ct(n,r,'missing required property "source"'));return e=e.concat(Hr({key:n,value:r,valueSpec:a.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(){return []},type:function(){return wn({key:n+".type",value:r.type,valueSpec:a.layer.type,style:t.style,styleSpec:t.styleSpec,object:r,objectKey:"type"})},filter:cn,layout:function(t){return Hr({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return yn(Et({layerType:s},t))}}})},paint:function(t){return Hr({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return fn(Et({layerType:s},t))}}})}}}))}function mn(t){var e=t.value,r=t.key,n=Vr(e);return "string"!==n?[new Ct(r,e,"string expected, "+n+" found")]:[]}var vn={promoteId:function(t){var e=t.key,r=t.value;if("string"===Vr(r))return mn({key:e,value:r});var n=[];for(var i in r)n.push.apply(n,mn({key:e+"."+i,value:r[i]}));return n}};function gn(t){var e=t.value,r=t.key,n=t.styleSpec,i=t.style;if(!e.type)return [new Ct(r,e,'"type" is required')];var a,o=Tt(e.type);switch(o){case"vector":case"raster":case"raster-dem":return Hr({key:r,value:e,valueSpec:n["source_"+o.replace("-","_")],style:t.style,styleSpec:n,objectElementValidators:vn});case"geojson":if(a=Hr({key:r,value:e,valueSpec:n.source_geojson,style:i,styleSpec:n,objectElementValidators:vn}),e.cluster)for(var s in e.clusterProperties){var u=e.clusterProperties[s],l=u[0],p="string"==typeof l?[l,["accumulated"],["get",s]]:l;a.push.apply(a,Qr({key:r+"."+s+".map",value:u[1],expressionContext:"cluster-map"})),a.push.apply(a,Qr({key:r+"."+s+".reduce",value:p,expressionContext:"cluster-reduce"}));}return a;case"video":return Hr({key:r,value:e,valueSpec:n.source_video,style:i,styleSpec:n});case"image":return Hr({key:r,value:e,valueSpec:n.source_image,style:i,styleSpec:n});case"canvas":return [new Ct(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")];default:return tn({key:r+".type",value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:i,styleSpec:n})}}function xn(t){var e=t.value,r=t.styleSpec,n=r.light,i=t.style,a=[],o=Vr(e);if(void 0===e)return a;if("object"!==o)return a.concat([new Ct("light",e,"object expected, "+o+" found")]);for(var s in e){var u=s.match(/^(.*)-transition$/);a=a.concat(u&&n[u[1]]&&n[u[1]].transition?wn({key:s,value:e[s],valueSpec:r.transition,style:i,styleSpec:r}):n[s]?wn({key:s,value:e[s],valueSpec:n[s],style:i,styleSpec:r}):[new Ct(s,e[s],'unknown property "'+s+'"')]);}return a}var bn={"*":function(){return []},array:Yr,boolean:function(t){var e=t.value,r=t.key,n=Vr(e);return "boolean"!==n?[new Ct(r,e,"boolean expected, "+n+" found")]:[]},number:$r,color:function(t){var e=t.key,r=t.value,n=Vr(r);return "string"!==n?[new Ct(e,r,"color expected, "+n+" found")]:null===$t(r)?[new Ct(e,r,'color expected, "'+r+'" found')]:[]},constants:Mt,enum:tn,filter:cn,function:Wr,layer:dn,object:Hr,source:gn,light:xn,string:mn,formatted:function(t){return 0===mn(t).length?[]:Qr(t)},resolvedImage:function(t){return 0===mn(t).length?[]:Qr(t)}};function wn(t){var e=t.value,r=t.valueSpec,n=t.styleSpec;return r.expression&&Fr(Tt(e))?Wr(t):r.expression&&Nr(Pt(e))?Qr(t):r.type&&bn[r.type]?bn[r.type](t):Hr(Et({},t,{valueSpec:r.type?n[r.type]:r}))}function _n(t){var e=t.value,r=t.key,n=mn(t);return n.length||(-1===e.indexOf("{fontstack}")&&n.push(new Ct(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&n.push(new Ct(r,e,'"glyphs" url must include a "{range}" token'))),n}function An(t,e){void 0===e&&(e=zt);var r=[];return r=r.concat(wn({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:_n,"*":function(){return []}}})),t.constants&&(r=r.concat(Mt({key:"constants",value:t.constants,style:t,styleSpec:e}))),Sn(r)}function Sn(t){return [].concat(t).sort((function(t,e){return t.line-e.line}))}function kn(t){return function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return Sn(t.apply(this,e))}}An.source=kn(gn),An.light=kn(xn),An.layer=kn(dn),An.filter=kn(cn),An.paintProperty=kn(fn),An.layoutProperty=kn(yn);var In=An,zn=In.light,Cn=In.paintProperty,Mn=In.layoutProperty;function En(t,e){var r=!1;if(e&&e.length)for(var n=0,i=e;n<i.length;n+=1)t.fire(new kt(new Error(i[n].message))),r=!0;return r}var Tn=Pn;function Pn(t,e,r){var n=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;var i=new Int32Array(this.arrayBuffer);t=i[0],this.d=(e=i[1])+2*(r=i[2]);for(var a=0;a<this.d*this.d;a++){var o=i[3+a],s=i[3+a+1];n.push(o===s?null:i.subarray(o,s));}var u=i[3+n.length+1];this.keys=i.subarray(i[3+n.length],u),this.bboxes=i.subarray(u),this.insert=this._insertReadonly;}else {this.d=e+2*r;for(var l=0;l<this.d*this.d;l++)n.push([]);this.keys=[],this.bboxes=[];}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0;var p=r/e*t;this.min=-p,this.max=t+p;}Pn.prototype.insert=function(t,e,r,n,i){this._forEachCell(e,r,n,i,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(n),this.bboxes.push(i);},Pn.prototype._insertReadonly=function(){throw "Cannot insert into a GridIndex created from an ArrayBuffer."},Pn.prototype._insertCell=function(t,e,r,n,i,a){this.cells[i].push(a);},Pn.prototype.query=function(t,e,r,n,i){var a=this.min,o=this.max;if(t<=a&&e<=a&&o<=r&&o<=n&&!i)return Array.prototype.slice.call(this.keys);var s=[];return this._forEachCell(t,e,r,n,this._queryCell,s,{},i),s},Pn.prototype._queryCell=function(t,e,r,n,i,a,o,s){var u=this.cells[i];if(null!==u)for(var l=this.keys,p=this.bboxes,c=0;c<u.length;c++){var h=u[c];if(void 0===o[h]){var f=4*h;(s?s(p[f+0],p[f+1],p[f+2],p[f+3]):t<=p[f+2]&&e<=p[f+3]&&r>=p[f+0]&&n>=p[f+1])?(o[h]=!0,a.push(l[h])):o[h]=!1;}}},Pn.prototype._forEachCell=function(t,e,r,n,i,a,o,s){for(var u=this._convertToCellCoord(t),l=this._convertToCellCoord(e),p=this._convertToCellCoord(r),c=this._convertToCellCoord(n),h=u;h<=p;h++)for(var f=l;f<=c;f++){var y=this.d*f+h;if((!s||s(this._convertFromCellCoord(h),this._convertFromCellCoord(f),this._convertFromCellCoord(h+1),this._convertFromCellCoord(f+1)))&&i.call(this,t,e,r,n,y,a,o,s))return}},Pn.prototype._convertFromCellCoord=function(t){return (t-this.padding)/this.scale},Pn.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},Pn.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer;for(var t=this.cells,e=3+this.cells.length+1+1,r=0,n=0;n<this.cells.length;n++)r+=this.cells[n].length;var i=new Int32Array(e+r+this.keys.length+this.bboxes.length);i[0]=this.extent,i[1]=this.n,i[2]=this.padding;for(var a=e,o=0;o<t.length;o++){var s=t[o];i[3+o]=a,i.set(s,a),a+=s.length;}return i[3+t.length]=a,i.set(this.keys,a),i[3+t.length+1]=a+=this.keys.length,i.set(this.bboxes,a),a+=this.bboxes.length,i.buffer};var Bn=o.ImageData,Vn=o.ImageBitmap,Fn={};function Dn(t,e,r){void 0===r&&(r={}),Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),Fn[t]={klass:e,omit:r.omit||[],shallow:r.shallow||[]};}for(var Ln in Dn("Object",Object),Tn.serialize=function(t,e){var r=t.toArrayBuffer();return e&&e.push(r),{buffer:r}},Tn.deserialize=function(t){return new Tn(t.buffer)},Dn("Grid",Tn),Dn("Color",Wt),Dn("Error",Error),Dn("ResolvedImage",re),Dn("StylePropertyFunction",Jr),Dn("StyleExpression",qr,{omit:["_evaluator"]}),Dn("ZoomDependentExpression",Zr),Dn("ZoomConstantExpression",Gr),Dn("CompoundExpression",ve,{omit:["_evaluate"]}),Sr)Sr[Ln]._classRegistryKey||Dn("Expression_"+Ln,Sr[Ln]);function Rn(t){return t&&"undefined"!=typeof ArrayBuffer&&(t instanceof ArrayBuffer||t.constructor&&"ArrayBuffer"===t.constructor.name)}function On(t){return Vn&&t instanceof Vn}function Un(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp)return t;if(Rn(t)||On(t))return e&&e.push(t),t;if(ArrayBuffer.isView(t)){var r=t;return e&&e.push(r.buffer),r}if(t instanceof Bn)return e&&e.push(t.data.buffer),t;if(Array.isArray(t)){for(var n=[],i=0,a=t;i<a.length;i+=1)n.push(Un(a[i],e));return n}if("object"==typeof t){var o=t.constructor,s=o._classRegistryKey;if(!s)throw new Error("can't serialize object of unregistered class");var u=o.serialize?o.serialize(t,e):{};if(!o.serialize){for(var l in t)if(t.hasOwnProperty(l)&&!(Fn[s].omit.indexOf(l)>=0)){var p=t[l];u[l]=Fn[s].shallow.indexOf(l)>=0?p:Un(p,e);}t instanceof Error&&(u.message=t.message);}if(u.$name)throw new Error("$name property is reserved for worker serialization logic.");return "Object"!==s&&(u.$name=s),u}throw new Error("can't serialize object of type "+typeof t)}function jn(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||Rn(t)||On(t)||ArrayBuffer.isView(t)||t instanceof Bn)return t;if(Array.isArray(t))return t.map(jn);if("object"==typeof t){var e=t.$name||"Object",r=Fn[e].klass;if(!r)throw new Error("can't deserialize unregistered class "+e);if(r.deserialize)return r.deserialize(t);for(var n=Object.create(r.prototype),i=0,a=Object.keys(t);i<a.length;i+=1){var o=a[i];if("$name"!==o){var s=t[o];n[o]=Fn[e].shallow.indexOf(o)>=0?s:jn(s);}}return n}throw new Error("can't deserialize object of type "+typeof t)}var qn=function(){this.first=!0;};qn.prototype.update=function(t,e){var r=Math.floor(t);return this.first?(this.first=!1,this.lastIntegerZoom=r,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=r,!0):(this.lastFloorZoom>r?(this.lastIntegerZoom=r+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<r&&(this.lastIntegerZoom=r,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=r,!0))};var Nn={"Latin-1 Supplement":function(t){return t>=128&&t<=255},Arabic:function(t){return t>=1536&&t<=1791},"Arabic Supplement":function(t){return t>=1872&&t<=1919},"Arabic Extended-A":function(t){return t>=2208&&t<=2303},"Hangul Jamo":function(t){return t>=4352&&t<=4607},"Unified Canadian Aboriginal Syllabics":function(t){return t>=5120&&t<=5759},Khmer:function(t){return t>=6016&&t<=6143},"Unified Canadian Aboriginal Syllabics Extended":function(t){return t>=6320&&t<=6399},"General Punctuation":function(t){return t>=8192&&t<=8303},"Letterlike Symbols":function(t){return t>=8448&&t<=8527},"Number Forms":function(t){return t>=8528&&t<=8591},"Miscellaneous Technical":function(t){return t>=8960&&t<=9215},"Control Pictures":function(t){return t>=9216&&t<=9279},"Optical Character Recognition":function(t){return t>=9280&&t<=9311},"Enclosed Alphanumerics":function(t){return t>=9312&&t<=9471},"Geometric Shapes":function(t){return t>=9632&&t<=9727},"Miscellaneous Symbols":function(t){return t>=9728&&t<=9983},"Miscellaneous Symbols and Arrows":function(t){return t>=11008&&t<=11263},"CJK Radicals Supplement":function(t){return t>=11904&&t<=12031},"Kangxi Radicals":function(t){return t>=12032&&t<=12255},"Ideographic Description Characters":function(t){return t>=12272&&t<=12287},"CJK Symbols and Punctuation":function(t){return t>=12288&&t<=12351},Hiragana:function(t){return t>=12352&&t<=12447},Katakana:function(t){return t>=12448&&t<=12543},Bopomofo:function(t){return t>=12544&&t<=12591},"Hangul Compatibility Jamo":function(t){return t>=12592&&t<=12687},Kanbun:function(t){return t>=12688&&t<=12703},"Bopomofo Extended":function(t){return t>=12704&&t<=12735},"CJK Strokes":function(t){return t>=12736&&t<=12783},"Katakana Phonetic Extensions":function(t){return t>=12784&&t<=12799},"Enclosed CJK Letters and Months":function(t){return t>=12800&&t<=13055},"CJK Compatibility":function(t){return t>=13056&&t<=13311},"CJK Unified Ideographs Extension A":function(t){return t>=13312&&t<=19903},"Yijing Hexagram Symbols":function(t){return t>=19904&&t<=19967},"CJK Unified Ideographs":function(t){return t>=19968&&t<=40959},"Yi Syllables":function(t){return t>=40960&&t<=42127},"Yi Radicals":function(t){return t>=42128&&t<=42191},"Hangul Jamo Extended-A":function(t){return t>=43360&&t<=43391},"Hangul Syllables":function(t){return t>=44032&&t<=55215},"Hangul Jamo Extended-B":function(t){return t>=55216&&t<=55295},"Private Use Area":function(t){return t>=57344&&t<=63743},"CJK Compatibility Ideographs":function(t){return t>=63744&&t<=64255},"Arabic Presentation Forms-A":function(t){return t>=64336&&t<=65023},"Vertical Forms":function(t){return t>=65040&&t<=65055},"CJK Compatibility Forms":function(t){return t>=65072&&t<=65103},"Small Form Variants":function(t){return t>=65104&&t<=65135},"Arabic Presentation Forms-B":function(t){return t>=65136&&t<=65279},"Halfwidth and Fullwidth Forms":function(t){return t>=65280&&t<=65519}};function Kn(t){for(var e=0,r=t;e<r.length;e+=1)if(Gn(r[e].charCodeAt(0)))return !0;return !1}function Gn(t){return !(746!==t&&747!==t&&(t<4352||!(Nn["Bopomofo Extended"](t)||Nn.Bopomofo(t)||Nn["CJK Compatibility Forms"](t)&&!(t>=65097&&t<=65103)||Nn["CJK Compatibility Ideographs"](t)||Nn["CJK Compatibility"](t)||Nn["CJK Radicals Supplement"](t)||Nn["CJK Strokes"](t)||!(!Nn["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||Nn["CJK Unified Ideographs Extension A"](t)||Nn["CJK Unified Ideographs"](t)||Nn["Enclosed CJK Letters and Months"](t)||Nn["Hangul Compatibility Jamo"](t)||Nn["Hangul Jamo Extended-A"](t)||Nn["Hangul Jamo Extended-B"](t)||Nn["Hangul Jamo"](t)||Nn["Hangul Syllables"](t)||Nn.Hiragana(t)||Nn["Ideographic Description Characters"](t)||Nn.Kanbun(t)||Nn["Kangxi Radicals"](t)||Nn["Katakana Phonetic Extensions"](t)||Nn.Katakana(t)&&12540!==t||!(!Nn["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||!(!Nn["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||Nn["Unified Canadian Aboriginal Syllabics"](t)||Nn["Unified Canadian Aboriginal Syllabics Extended"](t)||Nn["Vertical Forms"](t)||Nn["Yijing Hexagram Symbols"](t)||Nn["Yi Syllables"](t)||Nn["Yi Radicals"](t))))}function Zn(t){return !(Gn(t)||function(t){return !!(Nn["Latin-1 Supplement"](t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||Nn["General Punctuation"](t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||Nn["Letterlike Symbols"](t)||Nn["Number Forms"](t)||Nn["Miscellaneous Technical"](t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||Nn["Control Pictures"](t)&&9251!==t||Nn["Optical Character Recognition"](t)||Nn["Enclosed Alphanumerics"](t)||Nn["Geometric Shapes"](t)||Nn["Miscellaneous Symbols"](t)&&!(t>=9754&&t<=9759)||Nn["Miscellaneous Symbols and Arrows"](t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||Nn["CJK Symbols and Punctuation"](t)||Nn.Katakana(t)||Nn["Private Use Area"](t)||Nn["CJK Compatibility Forms"](t)||Nn["Small Form Variants"](t)||Nn["Halfwidth and Fullwidth Forms"](t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function Xn(t){return t>=1424&&t<=2303||Nn["Arabic Presentation Forms-A"](t)||Nn["Arabic Presentation Forms-B"](t)}function Jn(t,e){return !(!e&&Xn(t)||t>=2304&&t<=3583||t>=3840&&t<=4255||Nn.Khmer(t))}function Hn(t){for(var e=0,r=t;e<r.length;e+=1)if(Xn(r[e].charCodeAt(0)))return !0;return !1}var Yn=null,$n="unavailable",Wn=null,Qn=function(t){t&&"string"==typeof t&&t.indexOf("NetworkError")>-1&&($n="error"),Yn&&Yn(t);};function ti(){ei.fire(new St("pluginStateChange",{pluginStatus:$n,pluginURL:Wn}));}var ei=new It,ri=function(){return $n},ni=function(){if("deferred"!==$n||!Wn)throw new Error("rtl-text-plugin cannot be downloaded unless a pluginURL is specified");$n="loading",ti(),Wn&&xt({url:Wn},(function(t){t?Qn(t):($n="loaded",ti());}));},ii={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:function(){return "loaded"===$n||null!=ii.applyArabicShaping},isLoading:function(){return "loading"===$n},setState:function(t){$n=t.pluginStatus,Wn=t.pluginURL;},isParsed:function(){return null!=ii.applyArabicShaping&&null!=ii.processBidirectionalText&&null!=ii.processStyledBidirectionalText},getPluginURL:function(){return Wn}},ai=function(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new qn,this.transition={});};ai.prototype.isSupportedScript=function(t){return function(t,e){for(var r=0,n=t;r<n.length;r+=1)if(!Jn(n[r].charCodeAt(0),e))return !1;return !0}(t,ii.isLoaded())},ai.prototype.crossFadingFactor=function(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)},ai.prototype.getCrossfadeParameters=function(){var t=this.zoom,e=t-Math.floor(t),r=this.crossFadingFactor();return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*r}:{fromScale:.5,toScale:1,t:1-(1-r)*e}};var oi=function(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(Fr(t))return new Jr(t,e);if(Nr(t)){var r=Xr(t,e);if("error"===r.result)throw new Error(r.value.map((function(t){return t.key+": "+t.message})).join(", "));return r.value}var n=t;return "string"==typeof t&&"color"===e.type&&(n=Wt.parse(t)),{kind:"constant",evaluate:function(){return n}}}(void 0===e?t.specification.default:e,t.specification);};oi.prototype.isDataDriven=function(){return "source"===this.expression.kind||"composite"===this.expression.kind},oi.prototype.possiblyEvaluate=function(t,e,r){return this.property.possiblyEvaluate(this,t,e,r)};var si=function(t){this.property=t,this.value=new oi(t,void 0);};si.prototype.transitioned=function(t,e){return new li(this.property,this.value,e,c({},t.transition,this.transition),t.now)},si.prototype.untransitioned=function(){return new li(this.property,this.value,null,{},0)};var ui=function(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues);};ui.prototype.getValue=function(t){return b(this._values[t].value.value)},ui.prototype.setValue=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new si(this._values[t].property)),this._values[t].value=new oi(this._values[t].property,null===e?void 0:b(e));},ui.prototype.getTransition=function(t){return b(this._values[t].transition)},ui.prototype.setTransition=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new si(this._values[t].property)),this._values[t].transition=b(e)||void 0;},ui.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e],i=this.getValue(n);void 0!==i&&(t[n]=i);var a=this.getTransition(n);void 0!==a&&(t[n+"-transition"]=a);}return t},ui.prototype.transitioned=function(t,e){for(var r=new pi(this._properties),n=0,i=Object.keys(this._values);n<i.length;n+=1){var a=i[n];r._values[a]=this._values[a].transitioned(t,e._values[a]);}return r},ui.prototype.untransitioned=function(){for(var t=new pi(this._properties),e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e];t._values[n]=this._values[n].untransitioned();}return t};var li=function(t,e,r,n,i){this.property=t,this.value=e,this.begin=i+n.delay||0,this.end=this.begin+n.duration||0,t.specification.transition&&(n.delay||n.duration)&&(this.prior=r);};li.prototype.possiblyEvaluate=function(t,e,r){var n=t.now||0,i=this.value.possiblyEvaluate(t,e,r),a=this.prior;if(a){if(n>this.end)return this.prior=null,i;if(this.value.isDataDriven())return this.prior=null,i;if(n<this.begin)return a.possiblyEvaluate(t,e,r);var o=(n-this.begin)/(this.end-this.begin);return this.property.interpolate(a.possiblyEvaluate(t,e,r),i,function(t){if(t<=0)return 0;if(t>=1)return 1;var e=t*t,r=e*t;return 4*(t<.5?r:3*(t-e)+r-.75)}(o))}return i};var pi=function(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues);};pi.prototype.possiblyEvaluate=function(t,e,r){for(var n=new fi(this._properties),i=0,a=Object.keys(this._values);i<a.length;i+=1){var o=a[i];n._values[o]=this._values[o].possiblyEvaluate(t,e,r);}return n},pi.prototype.hasTransition=function(){for(var t=0,e=Object.keys(this._values);t<e.length;t+=1)if(this._values[e[t]].prior)return !0;return !1};var ci=function(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues);};ci.prototype.getValue=function(t){return b(this._values[t].value)},ci.prototype.setValue=function(t,e){this._values[t]=new oi(this._values[t].property,null===e?void 0:b(e));},ci.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e],i=this.getValue(n);void 0!==i&&(t[n]=i);}return t},ci.prototype.possiblyEvaluate=function(t,e,r){for(var n=new fi(this._properties),i=0,a=Object.keys(this._values);i<a.length;i+=1){var o=a[i];n._values[o]=this._values[o].possiblyEvaluate(t,e,r);}return n};var hi=function(t,e,r){this.property=t,this.value=e,this.parameters=r;};hi.prototype.isConstant=function(){return "constant"===this.value.kind},hi.prototype.constantOr=function(t){return "constant"===this.value.kind?this.value.value:t},hi.prototype.evaluate=function(t,e,r,n){return this.property.evaluate(this.value,this.parameters,t,e,r,n)};var fi=function(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues);};fi.prototype.get=function(t){return this._values[t]};var yi=function(t){this.specification=t;};yi.prototype.possiblyEvaluate=function(t,e){return t.expression.evaluate(e)},yi.prototype.interpolate=function(t,e,r){var n=Ne[this.specification.type];return n?n(t,e,r):t};var di=function(t,e){this.specification=t,this.overrides=e;};di.prototype.possiblyEvaluate=function(t,e,r,n){return new hi(this,"constant"===t.expression.kind||"camera"===t.expression.kind?{kind:"constant",value:t.expression.evaluate(e,null,{},r,n)}:t.expression,e)},di.prototype.interpolate=function(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t;if(void 0===t.value.value||void 0===e.value.value)return new hi(this,{kind:"constant",value:void 0},t.parameters);var n=Ne[this.specification.type];return n?new hi(this,{kind:"constant",value:n(t.value.value,e.value.value,r)},t.parameters):t},di.prototype.evaluate=function(t,e,r,n,i,a){return "constant"===t.kind?t.value:t.evaluate(e,r,n,i,a)};var mi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.possiblyEvaluate=function(t,e,r,n){if(void 0===t.value)return new hi(this,{kind:"constant",value:void 0},e);if("constant"===t.expression.kind){var i=t.expression.evaluate(e,null,{},r,n),a="resolvedImage"===t.property.specification.type&&"string"!=typeof i?i.name:i,o=this._calculate(a,a,a,e);return new hi(this,{kind:"constant",value:o},e)}if("camera"===t.expression.kind){var s=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e);return new hi(this,{kind:"constant",value:s},e)}return new hi(this,t.expression,e)},e.prototype.evaluate=function(t,e,r,n,i,a){if("source"===t.kind){var o=t.evaluate(e,r,n,i,a);return this._calculate(o,o,o,e)}return "composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},r,n),t.evaluate({zoom:Math.floor(e.zoom)},r,n),t.evaluate({zoom:Math.floor(e.zoom)+1},r,n),e):t.value},e.prototype._calculate=function(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},e.prototype.interpolate=function(t){return t},e}(di),vi=function(t){this.specification=t;};vi.prototype.possiblyEvaluate=function(t,e,r,n){if(void 0!==t.value){if("constant"===t.expression.kind){var i=t.expression.evaluate(e,null,{},r,n);return this._calculate(i,i,i,e)}return this._calculate(t.expression.evaluate(new ai(Math.floor(e.zoom-1),e)),t.expression.evaluate(new ai(Math.floor(e.zoom),e)),t.expression.evaluate(new ai(Math.floor(e.zoom+1),e)),e)}},vi.prototype._calculate=function(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},vi.prototype.interpolate=function(t){return t};var gi=function(t){this.specification=t;};gi.prototype.possiblyEvaluate=function(t,e,r,n){return !!t.expression.evaluate(e,null,{},r,n)},gi.prototype.interpolate=function(){return !1};var xi=function(t){for(var e in this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[],t){var r=t[e];r.specification.overridable&&this.overridableProperties.push(e);var n=this.defaultPropertyValues[e]=new oi(r,void 0),i=this.defaultTransitionablePropertyValues[e]=new si(r);this.defaultTransitioningPropertyValues[e]=i.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=n.possiblyEvaluate({});}};Dn("DataDrivenProperty",di),Dn("DataConstantProperty",yi),Dn("CrossFadedDataDrivenProperty",mi),Dn("CrossFadedProperty",vi),Dn("ColorRampProperty",gi);var bi=function(t){function e(e,r){if(t.call(this),this.id=e.id,this.type=e.type,this._featureFilter={filter:function(){return !0},needGeometry:!1},"custom"!==e.type&&(this.metadata=(e=e).metadata,this.minzoom=e.minzoom,this.maxzoom=e.maxzoom,"background"!==e.type&&(this.source=e.source,this.sourceLayer=e["source-layer"],this.filter=e.filter),r.layout&&(this._unevaluatedLayout=new ci(r.layout)),r.paint)){for(var n in this._transitionablePaint=new ui(r.paint),e.paint)this.setPaintProperty(n,e.paint[n],{validate:!1});for(var i in e.layout)this.setLayoutProperty(i,e.layout[i],{validate:!1});this._transitioningPaint=this._transitionablePaint.untransitioned(),this.paint=new fi(r.paint);}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getCrossfadeParameters=function(){return this._crossfadeParameters},e.prototype.getLayoutProperty=function(t){return "visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)},e.prototype.setLayoutProperty=function(t,e,r){void 0===r&&(r={}),null!=e&&this._validate(Mn,"layers."+this.id+".layout."+t,t,e,r)||("visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e);},e.prototype.getPaintProperty=function(t){return v(t,"-transition")?this._transitionablePaint.getTransition(t.slice(0,-"-transition".length)):this._transitionablePaint.getValue(t)},e.prototype.setPaintProperty=function(t,e,r){if(void 0===r&&(r={}),null!=e&&this._validate(Cn,"layers."+this.id+".paint."+t,t,e,r))return !1;if(v(t,"-transition"))return this._transitionablePaint.setTransition(t.slice(0,-"-transition".length),e||void 0),!1;var n=this._transitionablePaint._values[t],i="cross-faded-data-driven"===n.property.specification["property-type"],a=n.value.isDataDriven(),o=n.value;this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t);var s=this._transitionablePaint._values[t].value;return s.isDataDriven()||a||i||this._handleOverridablePaintPropertyUpdate(t,o,s)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){},e.prototype._handleOverridablePaintPropertyUpdate=function(t,e,r){return !1},e.prototype.isHidden=function(t){return !!(this.minzoom&&t<this.minzoom)||!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility},e.prototype.updateTransitions=function(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint);},e.prototype.hasTransition=function(){return this._transitioningPaint.hasTransition()},e.prototype.recalculate=function(t,e){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,void 0,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,void 0,e);},e.prototype.serialize=function(){var t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()};return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),x(t,(function(t,e){return !(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)}))},e.prototype._validate=function(t,e,r,n,i){return void 0===i&&(i={}),(!i||!1!==i.validate)&&En(this,t.call(In,{key:e,layerType:this.type,objectKey:r,value:n,styleSpec:zt,style:{glyphs:!0,sprite:!0}}))},e.prototype.is3D=function(){return !1},e.prototype.isTileClipped=function(){return !1},e.prototype.hasOffscreenPass=function(){return !1},e.prototype.resize=function(){},e.prototype.isStateDependent=function(){for(var t in this.paint._values){var e=this.paint.get(t);if(e instanceof hi&&Tr(e.property.specification)&&("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent)return !0}return !1},e}(It),wi={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array},_i=function(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8;},Ai=function(){this.isTransferred=!1,this.capacity=-1,this.resize(0);};function Si(t,e){void 0===e&&(e=1);var r=0,n=0;return {members:t.map((function(t){var i=wi[t.type].BYTES_PER_ELEMENT,a=r=ki(r,Math.max(e,i)),o=t.components||1;return n=Math.max(n,i),r+=i*o,{name:t.name,type:t.type,components:o,offset:a}})),size:ki(r,Math.max(n,e)),alignment:e}}function ki(t,e){return Math.ceil(t/e)*e}Ai.serialize=function(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}},Ai.deserialize=function(t){var e=Object.create(this.prototype);return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e},Ai.prototype._trim=function(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews());},Ai.prototype.clear=function(){this.length=0;},Ai.prototype.resize=function(t){this.reserve(t),this.length=t;},Ai.prototype.reserve=function(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);var e=this.uint8;this._refreshViews(),e&&this.uint8.set(e);}},Ai.prototype._refreshViews=function(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")};var Ii=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.int16[n+0]=e,this.int16[n+1]=r,t},e}(Ai);Ii.prototype.bytesPerElement=4,Dn("StructArrayLayout2i4",Ii);var zi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=4*t;return this.int16[a+0]=e,this.int16[a+1]=r,this.int16[a+2]=n,this.int16[a+3]=i,t},e}(Ai);zi.prototype.bytesPerElement=8,Dn("StructArrayLayout4i8",zi);var Ci=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=6*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=n,this.int16[s+3]=i,this.int16[s+4]=a,this.int16[s+5]=o,t},e}(Ai);Ci.prototype.bytesPerElement=12,Dn("StructArrayLayout2i4i12",Ci);var Mi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=4*t,u=8*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.uint8[u+4]=n,this.uint8[u+5]=i,this.uint8[u+6]=a,this.uint8[u+7]=o,t},e}(Ai);Mi.prototype.bytesPerElement=8,Dn("StructArrayLayout2i4ub8",Mi);var Ei=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l){var p=this.length;return this.resize(p+1),this.emplace(p,t,e,r,n,i,a,o,s,u,l)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p){var c=10*t;return this.uint16[c+0]=e,this.uint16[c+1]=r,this.uint16[c+2]=n,this.uint16[c+3]=i,this.uint16[c+4]=a,this.uint16[c+5]=o,this.uint16[c+6]=s,this.uint16[c+7]=u,this.uint16[c+8]=l,this.uint16[c+9]=p,t},e}(Ai);Ei.prototype.bytesPerElement=20,Dn("StructArrayLayout10ui20",Ei);var Ti=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c){var h=this.length;return this.resize(h+1),this.emplace(h,t,e,r,n,i,a,o,s,u,l,p,c)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h){var f=12*t;return this.int16[f+0]=e,this.int16[f+1]=r,this.int16[f+2]=n,this.int16[f+3]=i,this.uint16[f+4]=a,this.uint16[f+5]=o,this.uint16[f+6]=s,this.uint16[f+7]=u,this.int16[f+8]=l,this.int16[f+9]=p,this.int16[f+10]=c,this.int16[f+11]=h,t},e}(Ai);Ti.prototype.bytesPerElement=24,Dn("StructArrayLayout4i4ui4i24",Ti);var Pi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.float32[i+0]=e,this.float32[i+1]=r,this.float32[i+2]=n,t},e}(Ai);Pi.prototype.bytesPerElement=12,Dn("StructArrayLayout3f12",Pi);var Bi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){return this.uint32[1*t+0]=e,t},e}(Ai);Bi.prototype.bytesPerElement=4,Dn("StructArrayLayout1ul4",Bi);var Vi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u){var l=this.length;return this.resize(l+1),this.emplace(l,t,e,r,n,i,a,o,s,u)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l){var p=10*t,c=5*t;return this.int16[p+0]=e,this.int16[p+1]=r,this.int16[p+2]=n,this.int16[p+3]=i,this.int16[p+4]=a,this.int16[p+5]=o,this.uint32[c+3]=s,this.uint16[p+8]=u,this.uint16[p+9]=l,t},e}(Ai);Vi.prototype.bytesPerElement=20,Dn("StructArrayLayout6i1ul2ui20",Vi);var Fi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=6*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=n,this.int16[s+3]=i,this.int16[s+4]=a,this.int16[s+5]=o,t},e}(Ai);Fi.prototype.bytesPerElement=12,Dn("StructArrayLayout2i2i2i12",Fi);var Di=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i){var a=this.length;return this.resize(a+1),this.emplace(a,t,e,r,n,i)},e.prototype.emplace=function(t,e,r,n,i,a){var o=4*t,s=8*t;return this.float32[o+0]=e,this.float32[o+1]=r,this.float32[o+2]=n,this.int16[s+6]=i,this.int16[s+7]=a,t},e}(Ai);Di.prototype.bytesPerElement=16,Dn("StructArrayLayout2f1f2i16",Di);var Li=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=12*t,o=3*t;return this.uint8[a+0]=e,this.uint8[a+1]=r,this.float32[o+1]=n,this.float32[o+2]=i,t},e}(Ai);Li.prototype.bytesPerElement=12,Dn("StructArrayLayout2ub2f12",Li);var Ri=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.uint16[i+0]=e,this.uint16[i+1]=r,this.uint16[i+2]=n,t},e}(Ai);Ri.prototype.bytesPerElement=6,Dn("StructArrayLayout3ui6",Ri);var Oi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m){var v=this.length;return this.resize(v+1),this.emplace(v,t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v){var g=24*t,x=12*t,b=48*t;return this.int16[g+0]=e,this.int16[g+1]=r,this.uint16[g+2]=n,this.uint16[g+3]=i,this.uint32[x+2]=a,this.uint32[x+3]=o,this.uint32[x+4]=s,this.uint16[g+10]=u,this.uint16[g+11]=l,this.uint16[g+12]=p,this.float32[x+7]=c,this.float32[x+8]=h,this.uint8[b+36]=f,this.uint8[b+37]=y,this.uint8[b+38]=d,this.uint32[x+10]=m,this.int16[g+22]=v,t},e}(Ai);Oi.prototype.bytesPerElement=48,Dn("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i48",Oi);var Ui=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,w,_,A,S,k,I,z){var C=this.length;return this.resize(C+1),this.emplace(C,t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,w,_,A,S,k,I,z)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,w,_,A,S,k,I,z,C){var M=34*t,E=17*t;return this.int16[M+0]=e,this.int16[M+1]=r,this.int16[M+2]=n,this.int16[M+3]=i,this.int16[M+4]=a,this.int16[M+5]=o,this.int16[M+6]=s,this.int16[M+7]=u,this.uint16[M+8]=l,this.uint16[M+9]=p,this.uint16[M+10]=c,this.uint16[M+11]=h,this.uint16[M+12]=f,this.uint16[M+13]=y,this.uint16[M+14]=d,this.uint16[M+15]=m,this.uint16[M+16]=v,this.uint16[M+17]=g,this.uint16[M+18]=x,this.uint16[M+19]=b,this.uint16[M+20]=w,this.uint16[M+21]=_,this.uint16[M+22]=A,this.uint32[E+12]=S,this.float32[E+13]=k,this.float32[E+14]=I,this.float32[E+15]=z,this.float32[E+16]=C,t},e}(Ai);Ui.prototype.bytesPerElement=68,Dn("StructArrayLayout8i15ui1ul4f68",Ui);var ji=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){return this.float32[1*t+0]=e,t},e}(Ai);ji.prototype.bytesPerElement=4,Dn("StructArrayLayout1f4",ji);var qi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.int16[i+0]=e,this.int16[i+1]=r,this.int16[i+2]=n,t},e}(Ai);qi.prototype.bytesPerElement=6,Dn("StructArrayLayout3i6",qi);var Ni=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=4*t;return this.uint32[2*t+0]=e,this.uint16[i+2]=r,this.uint16[i+3]=n,t},e}(Ai);Ni.prototype.bytesPerElement=8,Dn("StructArrayLayout1ul2ui8",Ni);var Ki=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.uint16[n+0]=e,this.uint16[n+1]=r,t},e}(Ai);Ki.prototype.bytesPerElement=4,Dn("StructArrayLayout2ui4",Ki);var Gi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){return this.uint16[1*t+0]=e,t},e}(Ai);Gi.prototype.bytesPerElement=2,Dn("StructArrayLayout1ui2",Gi);var Zi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.float32[n+0]=e,this.float32[n+1]=r,t},e}(Ai);Zi.prototype.bytesPerElement=8,Dn("StructArrayLayout2f8",Zi);var Xi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=4*t;return this.float32[a+0]=e,this.float32[a+1]=r,this.float32[a+2]=n,this.float32[a+3]=i,t},e}(Ai);Xi.prototype.bytesPerElement=16,Dn("StructArrayLayout4f16",Xi);var Ji=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var r={anchorPointX:{configurable:!0},anchorPointY:{configurable:!0},x1:{configurable:!0},y1:{configurable:!0},x2:{configurable:!0},y2:{configurable:!0},featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0},anchorPoint:{configurable:!0}};return r.anchorPointX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorPointY.get=function(){return this._structArray.int16[this._pos2+1]},r.x1.get=function(){return this._structArray.int16[this._pos2+2]},r.y1.get=function(){return this._structArray.int16[this._pos2+3]},r.x2.get=function(){return this._structArray.int16[this._pos2+4]},r.y2.get=function(){return this._structArray.int16[this._pos2+5]},r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+8]},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.anchorPoint.get=function(){return new i(this.anchorPointX,this.anchorPointY)},Object.defineProperties(e.prototype,r),e}(_i);Ji.prototype.size=20;var Hi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.get=function(t){return new Ji(this,t)},e}(Vi);Dn("CollisionBoxArray",Hi);var Yi=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var r={anchorX:{configurable:!0},anchorY:{configurable:!0},glyphStartIndex:{configurable:!0},numGlyphs:{configurable:!0},vertexStartIndex:{configurable:!0},lineStartIndex:{configurable:!0},lineLength:{configurable:!0},segment:{configurable:!0},lowerSize:{configurable:!0},upperSize:{configurable:!0},lineOffsetX:{configurable:!0},lineOffsetY:{configurable:!0},writingMode:{configurable:!0},placedOrientation:{configurable:!0},hidden:{configurable:!0},crossTileID:{configurable:!0},associatedIconIndex:{configurable:!0}};return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.glyphStartIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.numGlyphs.get=function(){return this._structArray.uint16[this._pos2+3]},r.vertexStartIndex.get=function(){return this._structArray.uint32[this._pos4+2]},r.lineStartIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.lineLength.get=function(){return this._structArray.uint32[this._pos4+4]},r.segment.get=function(){return this._structArray.uint16[this._pos2+10]},r.lowerSize.get=function(){return this._structArray.uint16[this._pos2+11]},r.upperSize.get=function(){return this._structArray.uint16[this._pos2+12]},r.lineOffsetX.get=function(){return this._structArray.float32[this._pos4+7]},r.lineOffsetY.get=function(){return this._structArray.float32[this._pos4+8]},r.writingMode.get=function(){return this._structArray.uint8[this._pos1+36]},r.placedOrientation.get=function(){return this._structArray.uint8[this._pos1+37]},r.placedOrientation.set=function(t){this._structArray.uint8[this._pos1+37]=t;},r.hidden.get=function(){return this._structArray.uint8[this._pos1+38]},r.hidden.set=function(t){this._structArray.uint8[this._pos1+38]=t;},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+10]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+10]=t;},r.associatedIconIndex.get=function(){return this._structArray.int16[this._pos2+22]},Object.defineProperties(e.prototype,r),e}(_i);Yi.prototype.size=48;var $i=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.get=function(t){return new Yi(this,t)},e}(Oi);Dn("PlacedSymbolArray",$i);var Wi=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var r={anchorX:{configurable:!0},anchorY:{configurable:!0},rightJustifiedTextSymbolIndex:{configurable:!0},centerJustifiedTextSymbolIndex:{configurable:!0},leftJustifiedTextSymbolIndex:{configurable:!0},verticalPlacedTextSymbolIndex:{configurable:!0},placedIconSymbolIndex:{configurable:!0},verticalPlacedIconSymbolIndex:{configurable:!0},key:{configurable:!0},textBoxStartIndex:{configurable:!0},textBoxEndIndex:{configurable:!0},verticalTextBoxStartIndex:{configurable:!0},verticalTextBoxEndIndex:{configurable:!0},iconBoxStartIndex:{configurable:!0},iconBoxEndIndex:{configurable:!0},verticalIconBoxStartIndex:{configurable:!0},verticalIconBoxEndIndex:{configurable:!0},featureIndex:{configurable:!0},numHorizontalGlyphVertices:{configurable:!0},numVerticalGlyphVertices:{configurable:!0},numIconVertices:{configurable:!0},numVerticalIconVertices:{configurable:!0},useRuntimeCollisionCircles:{configurable:!0},crossTileID:{configurable:!0},textBoxScale:{configurable:!0},textOffset0:{configurable:!0},textOffset1:{configurable:!0},collisionCircleDiameter:{configurable:!0}};return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.rightJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+2]},r.centerJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+3]},r.leftJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+4]},r.verticalPlacedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+5]},r.placedIconSymbolIndex.get=function(){return this._structArray.int16[this._pos2+6]},r.verticalPlacedIconSymbolIndex.get=function(){return this._structArray.int16[this._pos2+7]},r.key.get=function(){return this._structArray.uint16[this._pos2+8]},r.textBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.textBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+10]},r.verticalTextBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+11]},r.verticalTextBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+12]},r.iconBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+13]},r.iconBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+14]},r.verticalIconBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+15]},r.verticalIconBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+16]},r.featureIndex.get=function(){return this._structArray.uint16[this._pos2+17]},r.numHorizontalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+18]},r.numVerticalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+19]},r.numIconVertices.get=function(){return this._structArray.uint16[this._pos2+20]},r.numVerticalIconVertices.get=function(){return this._structArray.uint16[this._pos2+21]},r.useRuntimeCollisionCircles.get=function(){return this._structArray.uint16[this._pos2+22]},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+12]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+12]=t;},r.textBoxScale.get=function(){return this._structArray.float32[this._pos4+13]},r.textOffset0.get=function(){return this._structArray.float32[this._pos4+14]},r.textOffset1.get=function(){return this._structArray.float32[this._pos4+15]},r.collisionCircleDiameter.get=function(){return this._structArray.float32[this._pos4+16]},Object.defineProperties(e.prototype,r),e}(_i);Wi.prototype.size=68;var Qi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.get=function(t){return new Wi(this,t)},e}(Ui);Dn("SymbolInstanceArray",Qi);var ta=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getoffsetX=function(t){return this.float32[1*t+0]},e}(ji);Dn("GlyphOffsetArray",ta);var ea=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getx=function(t){return this.int16[3*t+0]},e.prototype.gety=function(t){return this.int16[3*t+1]},e.prototype.gettileUnitDistanceFromAnchor=function(t){return this.int16[3*t+2]},e}(qi);Dn("SymbolLineVertexArray",ea);var ra=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var r={featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0}};return r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+0]},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+3]},Object.defineProperties(e.prototype,r),e}(_i);ra.prototype.size=8;var na=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.get=function(t){return new ra(this,t)},e}(Ni);Dn("FeatureIndexArray",na);var ia=Si([{name:"a_pos",components:2,type:"Int16"}],4).members,aa=function(t){void 0===t&&(t=[]),this.segments=t;};function oa(t,e){return 256*(t=l(Math.floor(t),0,255))+l(Math.floor(e),0,255)}aa.prototype.prepareSegment=function(t,e,r,n){var i=this.segments[this.segments.length-1];return t>aa.MAX_VERTEX_ARRAY_LENGTH&&_("Max vertices per segment is "+aa.MAX_VERTEX_ARRAY_LENGTH+": bucket requested "+t),(!i||i.vertexLength+t>aa.MAX_VERTEX_ARRAY_LENGTH||i.sortKey!==n)&&(i={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},void 0!==n&&(i.sortKey=n),this.segments.push(i)),i},aa.prototype.get=function(){return this.segments},aa.prototype.destroy=function(){for(var t=0,e=this.segments;t<e.length;t+=1){var r=e[t];for(var n in r.vaos)r.vaos[n].destroy();}},aa.simpleSegment=function(t,e,r,n){return new aa([{vertexOffset:t,primitiveOffset:e,vertexLength:r,primitiveLength:n,vaos:{},sortKey:0}])},aa.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,Dn("SegmentVector",aa);var sa=Si([{name:"a_pattern_from",components:4,type:"Uint16"},{name:"a_pattern_to",components:4,type:"Uint16"},{name:"a_pixel_ratio_from",components:1,type:"Uint16"},{name:"a_pixel_ratio_to",components:1,type:"Uint16"}]),ua=e((function(t){t.exports=function(t,e){var r,n,i,a,o,s,u,l;for(n=t.length-(r=3&t.length),i=e,o=3432918353,s=461845907,l=0;l<n;)u=255&t.charCodeAt(l)|(255&t.charCodeAt(++l))<<8|(255&t.charCodeAt(++l))<<16|(255&t.charCodeAt(++l))<<24,++l,i=27492+(65535&(a=5*(65535&(i=(i^=u=(65535&(u=(u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295)<<15|u>>>17))*s+(((u>>>16)*s&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(a>>>16)&65535)<<16);switch(u=0,r){case 3:u^=(255&t.charCodeAt(l+2))<<16;case 2:u^=(255&t.charCodeAt(l+1))<<8;case 1:i^=u=(65535&(u=(u=(65535&(u^=255&t.charCodeAt(l)))*o+(((u>>>16)*o&65535)<<16)&4294967295)<<15|u>>>17))*s+(((u>>>16)*s&65535)<<16)&4294967295;}return i^=t.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0};})),la=e((function(t){t.exports=function(t,e){for(var r,n=t.length,i=e^n,a=0;n>=4;)r=1540483477*(65535&(r=255&t.charCodeAt(a)|(255&t.charCodeAt(++a))<<8|(255&t.charCodeAt(++a))<<16|(255&t.charCodeAt(++a))<<24))+((1540483477*(r>>>16)&65535)<<16),i=1540483477*(65535&i)+((1540483477*(i>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),n-=4,++a;switch(n){case 3:i^=(255&t.charCodeAt(a+2))<<16;case 2:i^=(255&t.charCodeAt(a+1))<<8;case 1:i=1540483477*(65535&(i^=255&t.charCodeAt(a)))+((1540483477*(i>>>16)&65535)<<16);}return i=1540483477*(65535&(i^=i>>>13))+((1540483477*(i>>>16)&65535)<<16),(i^=i>>>15)>>>0};})),pa=ua,ca=la;pa.murmur3=ua,pa.murmur2=ca;var ha=function(){this.ids=[],this.positions=[],this.indexed=!1;};ha.prototype.add=function(t,e,r,n){this.ids.push(ya(t)),this.positions.push(e,r,n);},ha.prototype.getPositions=function(t){for(var e=ya(t),r=0,n=this.ids.length-1;r<n;){var i=r+n>>1;this.ids[i]>=e?n=i:r=i+1;}for(var a=[];this.ids[r]===e;)a.push({index:this.positions[3*r],start:this.positions[3*r+1],end:this.positions[3*r+2]}),r++;return a},ha.serialize=function(t,e){var r=new Float64Array(t.ids),n=new Uint32Array(t.positions);return function t(e,r,n,i){for(;n<i;){for(var a=e[n+i>>1],o=n-1,s=i+1;;){do{o++;}while(e[o]<a);do{s--;}while(e[s]>a);if(o>=s)break;da(e,o,s),da(r,3*o,3*s),da(r,3*o+1,3*s+1),da(r,3*o+2,3*s+2);}s-n<i-s?(t(e,r,n,s),n=s+1):(t(e,r,s+1,i),i=s);}}(r,n,0,r.length-1),e&&e.push(r.buffer,n.buffer),{ids:r,positions:n}},ha.deserialize=function(t){var e=new ha;return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e};var fa=Math.pow(2,53)-1;function ya(t){var e=+t;return !isNaN(e)&&e<=fa?e:pa(String(t))}function da(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}Dn("FeaturePositionMap",ha);var ma=function(t,e){this.gl=t.gl,this.location=e;},va=function(t){function e(e,r){t.call(this,e,r),this.current=0;}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t));},e}(ma),ga=function(t){function e(e,r){t.call(this,e,r),this.current=0;}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t));},e}(ma),xa=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0];}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]));},e}(ma),ba=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0];}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]));},e}(ma),wa=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0,0];}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]));},e}(ma),_a=function(t){function e(e,r){t.call(this,e,r),this.current=Wt.transparent;}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a));},e}(ma),Aa=new Float32Array(16),Sa=function(t){function e(e,r){t.call(this,e,r),this.current=Aa;}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.set=function(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t);for(var e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t);break}},e}(ma);function ka(t){return [oa(255*t.r,255*t.g),oa(255*t.b,255*t.a)]}var Ia=function(t,e,r){this.value=t,this.uniformNames=e.map((function(t){return "u_"+t})),this.type=r;};Ia.prototype.setUniform=function(t,e,r){t.set(r.constantOr(this.value));},Ia.prototype.getBinding=function(t,e,r){return "color"===this.type?new _a(t,e):new ga(t,e)};var za=function(t,e){this.uniformNames=e.map((function(t){return "u_"+t})),this.patternFrom=null,this.patternTo=null,this.pixelRatioFrom=1,this.pixelRatioTo=1;};za.prototype.setConstantPatternPositions=function(t,e){this.pixelRatioFrom=e.pixelRatio,this.pixelRatioTo=t.pixelRatio,this.patternFrom=e.tlbr,this.patternTo=t.tlbr;},za.prototype.setUniform=function(t,e,r,n){var i="u_pattern_to"===n?this.patternTo:"u_pattern_from"===n?this.patternFrom:"u_pixel_ratio_to"===n?this.pixelRatioTo:"u_pixel_ratio_from"===n?this.pixelRatioFrom:null;i&&t.set(i);},za.prototype.getBinding=function(t,e,r){return "u_pattern"===r.substr(0,9)?new wa(t,e):new ga(t,e)};var Ca=function(t,e,r,n){this.expression=t,this.type=r,this.maxValue=0,this.paintVertexAttributes=e.map((function(t){return {name:"a_"+t,type:"Float32",components:"color"===r?2:1,offset:0}})),this.paintVertexArray=new n;};Ca.prototype.populatePaintArray=function(t,e,r,n,i){var a=this.paintVertexArray.length,o=this.expression.evaluate(new ai(0),e,{},n,[],i);this.paintVertexArray.resize(t),this._setPaintValue(a,t,o);},Ca.prototype.updatePaintArray=function(t,e,r,n){var i=this.expression.evaluate({zoom:0},r,n);this._setPaintValue(t,e,i);},Ca.prototype._setPaintValue=function(t,e,r){if("color"===this.type)for(var n=ka(r),i=t;i<e;i++)this.paintVertexArray.emplace(i,n[0],n[1]);else {for(var a=t;a<e;a++)this.paintVertexArray.emplace(a,r);this.maxValue=Math.max(this.maxValue,Math.abs(r));}},Ca.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},Ca.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();};var Ma=function(t,e,r,n,i,a){this.expression=t,this.uniformNames=e.map((function(t){return "u_"+t+"_t"})),this.type=r,this.useIntegerZoom=n,this.zoom=i,this.maxValue=0,this.paintVertexAttributes=e.map((function(t){return {name:"a_"+t,type:"Float32",components:"color"===r?4:2,offset:0}})),this.paintVertexArray=new a;};Ma.prototype.populatePaintArray=function(t,e,r,n,i){var a=this.expression.evaluate(new ai(this.zoom),e,{},n,[],i),o=this.expression.evaluate(new ai(this.zoom+1),e,{},n,[],i),s=this.paintVertexArray.length;this.paintVertexArray.resize(t),this._setPaintValue(s,t,a,o);},Ma.prototype.updatePaintArray=function(t,e,r,n){var i=this.expression.evaluate({zoom:this.zoom},r,n),a=this.expression.evaluate({zoom:this.zoom+1},r,n);this._setPaintValue(t,e,i,a);},Ma.prototype._setPaintValue=function(t,e,r,n){if("color"===this.type)for(var i=ka(r),a=ka(n),o=t;o<e;o++)this.paintVertexArray.emplace(o,i[0],i[1],a[0],a[1]);else {for(var s=t;s<e;s++)this.paintVertexArray.emplace(s,r,n);this.maxValue=Math.max(this.maxValue,Math.abs(r),Math.abs(n));}},Ma.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},Ma.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();},Ma.prototype.setUniform=function(t,e){var r=this.useIntegerZoom?Math.floor(e.zoom):e.zoom,n=l(this.expression.interpolationFactor(r,this.zoom,this.zoom+1),0,1);t.set(n);},Ma.prototype.getBinding=function(t,e,r){return new ga(t,e)};var Ea=function(t,e,r,n,i,a){this.expression=t,this.type=e,this.useIntegerZoom=r,this.zoom=n,this.layerId=a,this.zoomInPaintVertexArray=new i,this.zoomOutPaintVertexArray=new i;};Ea.prototype.populatePaintArray=function(t,e,r){var n=this.zoomInPaintVertexArray.length;this.zoomInPaintVertexArray.resize(t),this.zoomOutPaintVertexArray.resize(t),this._setPaintValues(n,t,e.patterns&&e.patterns[this.layerId],r);},Ea.prototype.updatePaintArray=function(t,e,r,n,i){this._setPaintValues(t,e,r.patterns&&r.patterns[this.layerId],i);},Ea.prototype._setPaintValues=function(t,e,r,n){if(n&&r){var i=n[r.min],a=n[r.mid],o=n[r.max];if(i&&a&&o)for(var s=t;s<e;s++)this.zoomInPaintVertexArray.emplace(s,a.tl[0],a.tl[1],a.br[0],a.br[1],i.tl[0],i.tl[1],i.br[0],i.br[1],a.pixelRatio,i.pixelRatio),this.zoomOutPaintVertexArray.emplace(s,a.tl[0],a.tl[1],a.br[0],a.br[1],o.tl[0],o.tl[1],o.br[0],o.br[1],a.pixelRatio,o.pixelRatio);}},Ea.prototype.upload=function(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,sa.members,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,sa.members,this.expression.isStateDependent));},Ea.prototype.destroy=function(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy();};var Ta=function(t,e,r){this.binders={},this._buffers=[];var n=[];for(var i in t.paint._values)if(r(i)){var a=t.paint.get(i);if(a instanceof hi&&Tr(a.property.specification)){var o=Ba(i,t.type),s=a.value,u=a.property.specification.type,l=a.property.useIntegerZoom,p=a.property.specification["property-type"],c="cross-faded"===p||"cross-faded-data-driven"===p;if("constant"===s.kind)this.binders[i]=c?new za(s.value,o):new Ia(s.value,o,u),n.push("/u_"+i);else if("source"===s.kind||c){var h=Va(i,u,"source");this.binders[i]=c?new Ea(s,u,l,e,h,t.id):new Ca(s,o,u,h),n.push("/a_"+i);}else {var f=Va(i,u,"composite");this.binders[i]=new Ma(s,o,u,l,e,f),n.push("/z_"+i);}}}this.cacheKey=n.sort().join("");};Ta.prototype.getMaxValue=function(t){var e=this.binders[t];return e instanceof Ca||e instanceof Ma?e.maxValue:0},Ta.prototype.populatePaintArrays=function(t,e,r,n,i){for(var a in this.binders){var o=this.binders[a];(o instanceof Ca||o instanceof Ma||o instanceof Ea)&&o.populatePaintArray(t,e,r,n,i);}},Ta.prototype.setConstantPatternPositions=function(t,e){for(var r in this.binders){var n=this.binders[r];n instanceof za&&n.setConstantPatternPositions(t,e);}},Ta.prototype.updatePaintArrays=function(t,e,r,n,i){var a=!1;for(var o in t)for(var s=0,u=e.getPositions(o);s<u.length;s+=1){var l=u[s],p=r.feature(l.index);for(var c in this.binders){var h=this.binders[c];if((h instanceof Ca||h instanceof Ma||h instanceof Ea)&&!0===h.expression.isStateDependent){var f=n.paint.get(c);h.expression=f.value,h.updatePaintArray(l.start,l.end,p,t[o],i),a=!0;}}}return a},Ta.prototype.defines=function(){var t=[];for(var e in this.binders){var r=this.binders[e];(r instanceof Ia||r instanceof za)&&t.push.apply(t,r.uniformNames.map((function(t){return "#define HAS_UNIFORM_"+t})));}return t},Ta.prototype.getBinderAttributes=function(){var t=[];for(var e in this.binders){var r=this.binders[e];if(r instanceof Ca||r instanceof Ma)for(var n=0;n<r.paintVertexAttributes.length;n++)t.push(r.paintVertexAttributes[n].name);else if(r instanceof Ea)for(var i=0;i<sa.members.length;i++)t.push(sa.members[i].name);}return t},Ta.prototype.getBinderUniforms=function(){var t=[];for(var e in this.binders){var r=this.binders[e];if(r instanceof Ia||r instanceof za||r instanceof Ma)for(var n=0,i=r.uniformNames;n<i.length;n+=1)t.push(i[n]);}return t},Ta.prototype.getPaintVertexBuffers=function(){return this._buffers},Ta.prototype.getUniforms=function(t,e){var r=[];for(var n in this.binders){var i=this.binders[n];if(i instanceof Ia||i instanceof za||i instanceof Ma)for(var a=0,o=i.uniformNames;a<o.length;a+=1){var s=o[a];if(e[s]){var u=i.getBinding(t,e[s],s);r.push({name:s,property:n,binding:u});}}}return r},Ta.prototype.setUniforms=function(t,e,r,n){for(var i=0,a=e;i<a.length;i+=1){var o=a[i],s=o.name,u=o.property;this.binders[u].setUniform(o.binding,n,r.get(u),s);}},Ta.prototype.updatePaintBuffers=function(t){for(var e in this._buffers=[],this.binders){var r=this.binders[e];if(t&&r instanceof Ea){var n=2===t.fromScale?r.zoomInPaintVertexBuffer:r.zoomOutPaintVertexBuffer;n&&this._buffers.push(n);}else (r instanceof Ca||r instanceof Ma)&&r.paintVertexBuffer&&this._buffers.push(r.paintVertexBuffer);}},Ta.prototype.upload=function(t){for(var e in this.binders){var r=this.binders[e];(r instanceof Ca||r instanceof Ma||r instanceof Ea)&&r.upload(t);}this.updatePaintBuffers();},Ta.prototype.destroy=function(){for(var t in this.binders){var e=this.binders[t];(e instanceof Ca||e instanceof Ma||e instanceof Ea)&&e.destroy();}};var Pa=function(t,e,r){void 0===r&&(r=function(){return !0}),this.programConfigurations={};for(var n=0,i=t;n<i.length;n+=1){var a=i[n];this.programConfigurations[a.id]=new Ta(a,e,r);}this.needsUpload=!1,this._featureMap=new ha,this._bufferOffset=0;};function Ba(t,e){return {"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-extrusion-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"]}[t]||[t.replace(e+"-","").replace(/-/g,"_")]}function Va(t,e,r){var n={color:{source:Zi,composite:Xi},number:{source:ji,composite:Zi}},i=function(t){return {"line-pattern":{source:Ei,composite:Ei},"fill-pattern":{source:Ei,composite:Ei},"fill-extrusion-pattern":{source:Ei,composite:Ei}}[t]}(t);return i&&i[r]||n[e][r]}Pa.prototype.populatePaintArrays=function(t,e,r,n,i,a){for(var o in this.programConfigurations)this.programConfigurations[o].populatePaintArrays(t,e,n,i,a);void 0!==e.id&&this._featureMap.add(e.id,r,this._bufferOffset,t),this._bufferOffset=t,this.needsUpload=!0;},Pa.prototype.updatePaintArrays=function(t,e,r,n){for(var i=0,a=r;i<a.length;i+=1){var o=a[i];this.needsUpload=this.programConfigurations[o.id].updatePaintArrays(t,this._featureMap,e,o,n)||this.needsUpload;}},Pa.prototype.get=function(t){return this.programConfigurations[t]},Pa.prototype.upload=function(t){if(this.needsUpload){for(var e in this.programConfigurations)this.programConfigurations[e].upload(t);this.needsUpload=!1;}},Pa.prototype.destroy=function(){for(var t in this.programConfigurations)this.programConfigurations[t].destroy();},Dn("ConstantBinder",Ia),Dn("CrossFadedConstantBinder",za),Dn("SourceExpressionBinder",Ca),Dn("CrossFadedCompositeBinder",Ea),Dn("CompositeExpressionBinder",Ma),Dn("ProgramConfiguration",Ta,{omit:["_buffers"]}),Dn("ProgramConfigurationSet",Pa);var Fa=Math.pow(2,14)-1,Da=-Fa-1;function La(t){for(var e=8192/t.extent,r=t.loadGeometry(),n=0;n<r.length;n++)for(var i=r[n],a=0;a<i.length;a++){var o=i[a],s=Math.round(o.x*e),u=Math.round(o.y*e);o.x=l(s,Da,Fa),o.y=l(u,Da,Fa),(s<o.x||s>o.x+1||u<o.y||u>o.y+1)&&_("Geometry exceeds allowed extent, reduce your vector tile buffer size");}return r}function Ra(t,e,r,n,i){t.emplaceBack(2*e+(n+1)/2,2*r+(i+1)/2);}var Oa=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new Ii,this.indexArray=new Ri,this.segments=new aa,this.programConfigurations=new Pa(t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};function Ua(t,e){for(var r=0;r<t.length;r++)if(Ha(e,t[r]))return !0;for(var n=0;n<e.length;n++)if(Ha(t,e[n]))return !0;return !!Ka(t,e)}function ja(t,e,r){return !!Ha(t,e)||!!Za(e,t,r)}function qa(t,e){if(1===t.length)return Ja(e,t[0]);for(var r=0;r<e.length;r++)for(var n=e[r],i=0;i<n.length;i++)if(Ha(t,n[i]))return !0;for(var a=0;a<t.length;a++)if(Ja(e,t[a]))return !0;for(var o=0;o<e.length;o++)if(Ka(t,e[o]))return !0;return !1}function Na(t,e,r){if(t.length>1){if(Ka(t,e))return !0;for(var n=0;n<e.length;n++)if(Za(e[n],t,r))return !0}for(var i=0;i<t.length;i++)if(Za(t[i],e,r))return !0;return !1}function Ka(t,e){if(0===t.length||0===e.length)return !1;for(var r=0;r<t.length-1;r++)for(var n=t[r],i=t[r+1],a=0;a<e.length-1;a++)if(Ga(n,i,e[a],e[a+1]))return !0;return !1}function Ga(t,e,r,n){return A(t,r,n)!==A(e,r,n)&&A(t,e,r)!==A(t,e,n)}function Za(t,e,r){var n=r*r;if(1===e.length)return t.distSqr(e[0])<n;for(var i=1;i<e.length;i++)if(Xa(t,e[i-1],e[i])<n)return !0;return !1}function Xa(t,e,r){var n=e.distSqr(r);if(0===n)return t.distSqr(e);var i=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/n;return t.distSqr(i<0?e:i>1?r:r.sub(e)._mult(i)._add(e))}function Ja(t,e){for(var r,n,i,a=!1,o=0;o<t.length;o++)for(var s=0,u=(r=t[o]).length-1;s<r.length;u=s++)(n=r[s]).y>e.y!=(i=r[u]).y>e.y&&e.x<(i.x-n.x)*(e.y-n.y)/(i.y-n.y)+n.x&&(a=!a);return a}function Ha(t,e){for(var r=!1,n=0,i=t.length-1;n<t.length;i=n++){var a=t[n],o=t[i];a.y>e.y!=o.y>e.y&&e.x<(o.x-a.x)*(e.y-a.y)/(o.y-a.y)+a.x&&(r=!r);}return r}function Ya(t,e,r){var n=r[0],i=r[2];if(t.x<n.x&&e.x<n.x||t.x>i.x&&e.x>i.x||t.y<n.y&&e.y<n.y||t.y>i.y&&e.y>i.y)return !1;var a=A(t,e,r[0]);return a!==A(t,e,r[1])||a!==A(t,e,r[2])||a!==A(t,e,r[3])}function $a(t,e,r){var n=e.paint.get(t).value;return "constant"===n.kind?n.value:r.programConfigurations.get(e.id).getMaxValue(t)}function Wa(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function Qa(t,e,r,n,a){if(!e[0]&&!e[1])return t;var o=i.convert(e)._mult(a);"viewport"===r&&o._rotate(-n);for(var s=[],u=0;u<t.length;u++)s.push(t[u].sub(o));return s}Oa.prototype.populate=function(t,e,r){var n=this.layers[0],i=[],a=null;"circle"===n.type&&(a=n.layout.get("circle-sort-key"));for(var o=0,s=t;o<s.length;o+=1){var u=s[o],l=u.feature,p=u.id,c=u.index,h=u.sourceLayerIndex,f=this.layers[0]._featureFilter.needGeometry,y={type:l.type,id:p,properties:l.properties,geometry:f?La(l):[]};if(this.layers[0]._featureFilter.filter(new ai(this.zoom),y,r)){f||(y.geometry=La(l));var d=a?a.evaluate(y,{},r):void 0;i.push({id:p,properties:l.properties,type:l.type,sourceLayerIndex:h,index:c,geometry:y.geometry,patterns:{},sortKey:d});}}a&&i.sort((function(t,e){return t.sortKey-e.sortKey}));for(var m=0,v=i;m<v.length;m+=1){var g=v[m],x=g.geometry,b=g.index,w=g.sourceLayerIndex,_=t[b].feature;this.addFeature(g,x,b,r),e.featureIndex.insert(_,x,b,w,this.index);}},Oa.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},Oa.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Oa.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},Oa.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,ia),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},Oa.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},Oa.prototype.addFeature=function(t,e,r,n){for(var i=0,a=e;i<a.length;i+=1)for(var o=0,s=a[i];o<s.length;o+=1){var u=s[o],l=u.x,p=u.y;if(!(l<0||l>=8192||p<0||p>=8192)){var c=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),h=c.vertexLength;Ra(this.layoutVertexArray,l,p,-1,-1),Ra(this.layoutVertexArray,l,p,1,-1),Ra(this.layoutVertexArray,l,p,1,1),Ra(this.layoutVertexArray,l,p,-1,1),this.indexArray.emplaceBack(h,h+1,h+2),this.indexArray.emplaceBack(h,h+3,h+2),c.vertexLength+=4,c.primitiveLength+=2;}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,{},n);},Dn("CircleBucket",Oa,{omit:["layers"]});var to=new xi({"circle-sort-key":new di(zt.layout_circle["circle-sort-key"])}),eo={paint:new xi({"circle-radius":new di(zt.paint_circle["circle-radius"]),"circle-color":new di(zt.paint_circle["circle-color"]),"circle-blur":new di(zt.paint_circle["circle-blur"]),"circle-opacity":new di(zt.paint_circle["circle-opacity"]),"circle-translate":new yi(zt.paint_circle["circle-translate"]),"circle-translate-anchor":new yi(zt.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new yi(zt.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new yi(zt.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new di(zt.paint_circle["circle-stroke-width"]),"circle-stroke-color":new di(zt.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new di(zt.paint_circle["circle-stroke-opacity"])}),layout:to},ro="undefined"!=typeof Float32Array?Float32Array:Array;function no(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function io(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],l=e[6],p=e[7],c=e[8],h=e[9],f=e[10],y=e[11],d=e[12],m=e[13],v=e[14],g=e[15],x=r[0],b=r[1],w=r[2],_=r[3];return t[0]=x*n+b*s+w*c+_*d,t[1]=x*i+b*u+w*h+_*m,t[2]=x*a+b*l+w*f+_*v,t[3]=x*o+b*p+w*y+_*g,t[4]=(x=r[4])*n+(b=r[5])*s+(w=r[6])*c+(_=r[7])*d,t[5]=x*i+b*u+w*h+_*m,t[6]=x*a+b*l+w*f+_*v,t[7]=x*o+b*p+w*y+_*g,t[8]=(x=r[8])*n+(b=r[9])*s+(w=r[10])*c+(_=r[11])*d,t[9]=x*i+b*u+w*h+_*m,t[10]=x*a+b*l+w*f+_*v,t[11]=x*o+b*p+w*y+_*g,t[12]=(x=r[12])*n+(b=r[13])*s+(w=r[14])*c+(_=r[15])*d,t[13]=x*i+b*u+w*h+_*m,t[14]=x*a+b*l+w*f+_*v,t[15]=x*o+b*p+w*y+_*g,t}Math.hypot||(Math.hypot=function(){for(var t=arguments,e=0,r=arguments.length;r--;)e+=t[r]*t[r];return Math.sqrt(e)});var ao,oo=io;function so(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*o,t[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*o,t[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*o,t[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*o,t}ao=new ro(3),ro!=Float32Array&&(ao[0]=0,ao[1]=0,ao[2]=0),function(){var t=new ro(4);ro!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0);}();var uo=(function(){var t=new ro(2);ro!=Float32Array&&(t[0]=0,t[1]=0);}(),function(t){function e(e){t.call(this,e,eo);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.createBucket=function(t){return new Oa(t)},e.prototype.queryRadius=function(t){var e=t;return $a("circle-radius",this,e)+$a("circle-stroke-width",this,e)+Wa(this.paint.get("circle-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,a,o,s){for(var u=Qa(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),a.angle,o),l=this.paint.get("circle-radius").evaluate(e,r)+this.paint.get("circle-stroke-width").evaluate(e,r),p="map"===this.paint.get("circle-pitch-alignment"),c=p?u:function(t,e){return t.map((function(t){return lo(t,e)}))}(u,s),h=p?l*o:l,f=0,y=n;f<y.length;f+=1)for(var d=0,m=y[f];d<m.length;d+=1){var v=m[d],g=p?v:lo(v,s),x=h,b=so([],[v.x,v.y,0,1],s);if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?x*=b[3]/a.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(x*=a.cameraToCenterDistance/b[3]),ja(c,g,x))return !0}return !1},e}(bi));function lo(t,e){var r=so([],[t.x,t.y,0,1],e);return new i(r[0]/r[3],r[1]/r[3])}var po=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(Oa);function co(t,e,r,n){var i=e.width,a=e.height;if(n){if(n instanceof Uint8ClampedArray)n=new Uint8Array(n.buffer);else if(n.length!==i*a*r)throw new RangeError("mismatched image size")}else n=new Uint8Array(i*a*r);return t.width=i,t.height=a,t.data=n,t}function ho(t,e,r){var n=e.width,i=e.height;if(n!==t.width||i!==t.height){var a=co({},{width:n,height:i},r);fo(t,a,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,n),height:Math.min(t.height,i)},r),t.width=n,t.height=i,t.data=a.data;}}function fo(t,e,r,n,i,a){if(0===i.width||0===i.height)return e;if(i.width>t.width||i.height>t.height||r.x>t.width-i.width||r.y>t.height-i.height)throw new RangeError("out of range source coordinates for image copy");if(i.width>e.width||i.height>e.height||n.x>e.width-i.width||n.y>e.height-i.height)throw new RangeError("out of range destination coordinates for image copy");for(var o=t.data,s=e.data,u=0;u<i.height;u++)for(var l=((r.y+u)*t.width+r.x)*a,p=((n.y+u)*e.width+n.x)*a,c=0;c<i.width*a;c++)s[p+c]=o[l+c];return e}Dn("HeatmapBucket",po,{omit:["layers"]});var yo=function(t,e){co(this,t,1,e);};yo.prototype.resize=function(t){ho(this,t,1);},yo.prototype.clone=function(){return new yo({width:this.width,height:this.height},new Uint8Array(this.data))},yo.copy=function(t,e,r,n,i){fo(t,e,r,n,i,1);};var mo=function(t,e){co(this,t,4,e);};mo.prototype.resize=function(t){ho(this,t,4);},mo.prototype.replace=function(t,e){e?this.data.set(t):this.data=t instanceof Uint8ClampedArray?new Uint8Array(t.buffer):t;},mo.prototype.clone=function(){return new mo({width:this.width,height:this.height},new Uint8Array(this.data))},mo.copy=function(t,e,r,n,i){fo(t,e,r,n,i,4);},Dn("AlphaImage",yo),Dn("RGBAImage",mo);var vo={paint:new xi({"heatmap-radius":new di(zt.paint_heatmap["heatmap-radius"]),"heatmap-weight":new di(zt.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new yi(zt.paint_heatmap["heatmap-intensity"]),"heatmap-color":new gi(zt.paint_heatmap["heatmap-color"]),"heatmap-opacity":new yi(zt.paint_heatmap["heatmap-opacity"])})};function go(t,e){for(var r=new Uint8Array(1024),n={},i=0,a=0;i<256;i++,a+=4){n[e]=i/255;var o=t.evaluate(n);r[a+0]=Math.floor(255*o.r/o.a),r[a+1]=Math.floor(255*o.g/o.a),r[a+2]=Math.floor(255*o.b/o.a),r[a+3]=Math.floor(255*o.a);}return new mo({width:256,height:1},r)}var xo=function(t){function e(e){t.call(this,e,vo),this._updateColorRamp();}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.createBucket=function(t){return new po(t)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){"heatmap-color"===t&&this._updateColorRamp();},e.prototype._updateColorRamp=function(){this.colorRamp=go(this._transitionablePaint._values["heatmap-color"].value.expression,"heatmapDensity"),this.colorRampTexture=null;},e.prototype.resize=function(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null);},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return !1},e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility},e}(bi),bo={paint:new xi({"hillshade-illumination-direction":new yi(zt.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new yi(zt.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new yi(zt.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new yi(zt.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new yi(zt.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new yi(zt.paint_hillshade["hillshade-accent-color"])})},wo=function(t){function e(e){t.call(this,e,bo);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility},e}(bi),_o=Si([{name:"a_pos",components:2,type:"Int16"}],4).members,Ao=ko,So=ko;function ko(t,e,r){r=r||2;var n,i,a,o,s,u,l,p=e&&e.length,c=p?e[0]*r:t.length,h=Io(t,0,c,r,!0),f=[];if(!h||h.next===h.prev)return f;if(p&&(h=function(t,e,r,n){var i,a,o,s=[];for(i=0,a=e.length;i<a;i++)(o=Io(t,e[i]*n,i<a-1?e[i+1]*n:t.length,n,!1))===o.next&&(o.steiner=!0),s.push(Lo(o));for(s.sort(Bo),i=0;i<s.length;i++)Vo(s[i],r),r=zo(r,r.next);return r}(t,e,h,r)),t.length>80*r){n=a=t[0],i=o=t[1];for(var y=r;y<c;y+=r)(s=t[y])<n&&(n=s),(u=t[y+1])<i&&(i=u),s>a&&(a=s),u>o&&(o=u);l=0!==(l=Math.max(a-n,o-i))?1/l:0;}return Co(h,f,r,n,i,l),f}function Io(t,e,r,n,i){var a,o;if(i===Yo(t,e,r,n)>0)for(a=e;a<r;a+=n)o=Xo(a,t[a],t[a+1],o);else for(a=r-n;a>=e;a-=n)o=Xo(a,t[a],t[a+1],o);return o&&jo(o,o.next)&&(Jo(o),o=o.next),o}function zo(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!jo(n,n.next)&&0!==Uo(n.prev,n,n.next))n=n.next;else {if(Jo(n),(n=e=n.prev)===n.next)break;r=!0;}}while(r||n!==e);return e}function Co(t,e,r,n,i,a,o){if(t){!o&&a&&function(t,e,r,n){var i=t;do{null===i.z&&(i.z=Do(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,a,o,s,u,l=1;do{for(r=t,t=null,a=null,o=0;r;){for(o++,n=r,s=0,e=0;e<l&&(s++,n=n.nextZ);e++);for(u=l;s>0||u>0&&n;)0!==s&&(0===u||!n||r.z<=n.z)?(i=r,r=r.nextZ,s--):(i=n,n=n.nextZ,u--),a?a.nextZ=i:t=i,i.prevZ=a,a=i;r=n;}a.nextZ=null,l*=2;}while(o>1)}(i);}(t,n,i,a);for(var s,u,l=t;t.prev!==t.next;)if(s=t.prev,u=t.next,a?Eo(t,n,i,a):Mo(t))e.push(s.i/r),e.push(t.i/r),e.push(u.i/r),Jo(t),t=u.next,l=u.next;else if((t=u)===l){o?1===o?Co(t=To(zo(t),e,r),e,r,n,i,a,2):2===o&&Po(t,e,r,n,i,a):Co(zo(t),e,r,n,i,a,1);break}}}function Mo(t){var e=t.prev,r=t,n=t.next;if(Uo(e,r,n)>=0)return !1;for(var i=t.next.next;i!==t.prev;){if(Ro(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&Uo(i.prev,i,i.next)>=0)return !1;i=i.next;}return !0}function Eo(t,e,r,n){var i=t.prev,a=t,o=t.next;if(Uo(i,a,o)>=0)return !1;for(var s=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,u=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,l=Do(i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,e,r,n),p=Do(s,u,e,r,n),c=t.prevZ,h=t.nextZ;c&&c.z>=l&&h&&h.z<=p;){if(c!==t.prev&&c!==t.next&&Ro(i.x,i.y,a.x,a.y,o.x,o.y,c.x,c.y)&&Uo(c.prev,c,c.next)>=0)return !1;if(c=c.prevZ,h!==t.prev&&h!==t.next&&Ro(i.x,i.y,a.x,a.y,o.x,o.y,h.x,h.y)&&Uo(h.prev,h,h.next)>=0)return !1;h=h.nextZ;}for(;c&&c.z>=l;){if(c!==t.prev&&c!==t.next&&Ro(i.x,i.y,a.x,a.y,o.x,o.y,c.x,c.y)&&Uo(c.prev,c,c.next)>=0)return !1;c=c.prevZ;}for(;h&&h.z<=p;){if(h!==t.prev&&h!==t.next&&Ro(i.x,i.y,a.x,a.y,o.x,o.y,h.x,h.y)&&Uo(h.prev,h,h.next)>=0)return !1;h=h.nextZ;}return !0}function To(t,e,r){var n=t;do{var i=n.prev,a=n.next.next;!jo(i,a)&&qo(i,n,n.next,a)&&Go(i,a)&&Go(a,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(a.i/r),Jo(n),Jo(n.next),n=t=a),n=n.next;}while(n!==t);return zo(n)}function Po(t,e,r,n,i,a){var o=t;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&Oo(o,s)){var u=Zo(o,s);return o=zo(o,o.next),u=zo(u,u.next),Co(o,e,r,n,i,a),void Co(u,e,r,n,i,a)}s=s.next;}o=o.next;}while(o!==t)}function Bo(t,e){return t.x-e.x}function Vo(t,e){if(e=function(t,e){var r,n=e,i=t.x,a=t.y,o=-1/0;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){var s=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=i&&s>o){if(o=s,s===i){if(a===n.y)return n;if(a===n.next.y)return n.next}r=n.x<n.next.x?n:n.next;}}n=n.next;}while(n!==e);if(!r)return null;if(i===o)return r;var u,l=r,p=r.x,c=r.y,h=1/0;n=r;do{i>=n.x&&n.x>=p&&i!==n.x&&Ro(a<c?i:o,a,p,c,a<c?o:i,a,n.x,n.y)&&(u=Math.abs(a-n.y)/(i-n.x),Go(n,t)&&(u<h||u===h&&(n.x>r.x||n.x===r.x&&Fo(r,n)))&&(r=n,h=u)),n=n.next;}while(n!==l);return r}(t,e)){var r=Zo(e,t);zo(e,e.next),zo(r,r.next);}}function Fo(t,e){return Uo(t.prev,t,e.prev)<0&&Uo(e.next,t,t.next)<0}function Do(t,e,r,n,i){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Lo(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;}while(e!==t);return r}function Ro(t,e,r,n,i,a,o,s){return (i-o)*(e-s)-(t-o)*(a-s)>=0&&(t-o)*(n-s)-(r-o)*(e-s)>=0&&(r-o)*(a-s)-(i-o)*(n-s)>=0}function Oo(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&qo(r,r.next,t,e))return !0;r=r.next;}while(r!==t);return !1}(t,e)&&(Go(t,e)&&Go(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,a=(t.y+e.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;}while(r!==t);return n}(t,e)&&(Uo(t.prev,t,e.prev)||Uo(t,e.prev,e))||jo(t,e)&&Uo(t.prev,t,t.next)>0&&Uo(e.prev,e,e.next)>0)}function Uo(t,e,r){return (e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function jo(t,e){return t.x===e.x&&t.y===e.y}function qo(t,e,r,n){var i=Ko(Uo(t,e,r)),a=Ko(Uo(t,e,n)),o=Ko(Uo(r,n,t)),s=Ko(Uo(r,n,e));return i!==a&&o!==s||!(0!==i||!No(t,r,e))||!(0!==a||!No(t,n,e))||!(0!==o||!No(r,t,n))||!(0!==s||!No(r,e,n))}function No(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function Ko(t){return t>0?1:t<0?-1:0}function Go(t,e){return Uo(t.prev,t,t.next)<0?Uo(t,e,t.next)>=0&&Uo(t,t.prev,e)>=0:Uo(t,e,t.prev)<0||Uo(t,t.next,e)<0}function Zo(t,e){var r=new Ho(t.i,t.x,t.y),n=new Ho(e.i,e.x,e.y),i=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function Xo(t,e,r,n){var i=new Ho(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Jo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function Ho(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function Yo(t,e,r,n){for(var i=0,a=e,o=r-n;a<r;a+=n)i+=(t[o]-t[a])*(t[a+1]+t[o+1]),o=a;return i}function $o(t,e,r,n,i){!function t(e,r,n,i,a){for(;i>n;){if(i-n>600){var o=i-n+1,s=r-n+1,u=Math.log(o),l=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*l*(o-l)/o)*(s-o/2<0?-1:1);t(e,r,Math.max(n,Math.floor(r-s*l/o+p)),Math.min(i,Math.floor(r+(o-s)*l/o+p)),a);}var c=e[r],h=n,f=i;for(Wo(e,n,r),a(e[i],c)>0&&Wo(e,n,i);h<f;){for(Wo(e,h,f),h++,f--;a(e[h],c)<0;)h++;for(;a(e[f],c)>0;)f--;}0===a(e[n],c)?Wo(e,n,f):Wo(e,++f,i),f<=r&&(n=f+1),r<=f&&(i=f-1);}}(t,e,r||0,n||t.length-1,i||Qo);}function Wo(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}function Qo(t,e){return t<e?-1:t>e?1:0}function ts(t,e){var r=t.length;if(r<=1)return [t];for(var n,i,a=[],o=0;o<r;o++){var s=S(t[o]);0!==s&&(t[o].area=Math.abs(s),void 0===i&&(i=s<0),i===s<0?(n&&a.push(n),n=[t[o]]):n.push(t[o]));}if(n&&a.push(n),e>1)for(var u=0;u<a.length;u++)a[u].length<=e||($o(a[u],e,1,a[u].length-1,es),a[u]=a[u].slice(0,e));return a}function es(t,e){return e.area-t.area}function rs(t,e,r){for(var n=r.patternDependencies,i=!1,a=0,o=e;a<o.length;a+=1){var s=o[a].paint.get(t+"-pattern");s.isConstant()||(i=!0);var u=s.constantOr(null);u&&(i=!0,n[u.to]=!0,n[u.from]=!0);}return i}function ns(t,e,r,n,i){for(var a=i.patternDependencies,o=0,s=e;o<s.length;o+=1){var u=s[o],l=u.paint.get(t+"-pattern").value;if("constant"!==l.kind){var p=l.evaluate({zoom:n-1},r,{},i.availableImages),c=l.evaluate({zoom:n},r,{},i.availableImages),h=l.evaluate({zoom:n+1},r,{},i.availableImages);c=c&&c.name?c.name:c,h=h&&h.name?h.name:h,a[p=p&&p.name?p.name:p]=!0,a[c]=!0,a[h]=!0,r.patterns[u.id]={min:p,mid:c,max:h};}}return r}ko.deviation=function(t,e,r,n){var i=e&&e.length,a=Math.abs(Yo(t,0,i?e[0]*r:t.length,r));if(i)for(var o=0,s=e.length;o<s;o++)a-=Math.abs(Yo(t,e[o]*r,o<s-1?e[o+1]*r:t.length,r));var u=0;for(o=0;o<n.length;o+=3){var l=n[o]*r,p=n[o+1]*r,c=n[o+2]*r;u+=Math.abs((t[l]-t[c])*(t[p+1]-t[l+1])-(t[l]-t[p])*(t[c+1]-t[l+1]));}return 0===a&&0===u?0:Math.abs((u-a)/a)},ko.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var a=0;a<t[i].length;a++)for(var o=0;o<e;o++)r.vertices.push(t[i][a][o]);i>0&&r.holes.push(n+=t[i-1].length);}return r},Ao.default=So;var is=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new Ii,this.indexArray=new Ri,this.indexArray2=new Ki,this.programConfigurations=new Pa(t.layers,t.zoom),this.segments=new aa,this.segments2=new aa,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};is.prototype.populate=function(t,e,r){this.hasPattern=rs("fill",this.layers,e);for(var n=this.layers[0].layout.get("fill-sort-key"),i=[],a=0,o=t;a<o.length;a+=1){var s=o[a],u=s.feature,l=s.id,p=s.index,c=s.sourceLayerIndex,h=this.layers[0]._featureFilter.needGeometry,f={type:u.type,id:l,properties:u.properties,geometry:h?La(u):[]};if(this.layers[0]._featureFilter.filter(new ai(this.zoom),f,r)){h||(f.geometry=La(u));var y=n?n.evaluate(f,{},r,e.availableImages):void 0;i.push({id:l,properties:u.properties,type:u.type,sourceLayerIndex:c,index:p,geometry:f.geometry,patterns:{},sortKey:y});}}n&&i.sort((function(t,e){return t.sortKey-e.sortKey}));for(var d=0,m=i;d<m.length;d+=1){var v=m[d],g=v.geometry,x=v.index,b=v.sourceLayerIndex;if(this.hasPattern){var w=ns("fill",this.layers,v,this.zoom,e);this.patternFeatures.push(w);}else this.addFeature(v,g,x,r,{});e.featureIndex.insert(t[x].feature,g,x,b,this.index);}},is.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},is.prototype.addFeatures=function(t,e,r){for(var n=0,i=this.patternFeatures;n<i.length;n+=1){var a=i[n];this.addFeature(a,a.geometry,a.index,e,r);}},is.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},is.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},is.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,_o),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0;},is.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy());},is.prototype.addFeature=function(t,e,r,n,i){for(var a=0,o=ts(e,500);a<o.length;a+=1){for(var s=o[a],u=0,l=0,p=s;l<p.length;l+=1)u+=p[l].length;for(var c=this.segments.prepareSegment(u,this.layoutVertexArray,this.indexArray),h=c.vertexLength,f=[],y=[],d=0,m=s;d<m.length;d+=1){var v=m[d];if(0!==v.length){v!==s[0]&&y.push(f.length/2);var g=this.segments2.prepareSegment(v.length,this.layoutVertexArray,this.indexArray2),x=g.vertexLength;this.layoutVertexArray.emplaceBack(v[0].x,v[0].y),this.indexArray2.emplaceBack(x+v.length-1,x),f.push(v[0].x),f.push(v[0].y);for(var b=1;b<v.length;b++)this.layoutVertexArray.emplaceBack(v[b].x,v[b].y),this.indexArray2.emplaceBack(x+b-1,x+b),f.push(v[b].x),f.push(v[b].y);g.vertexLength+=v.length,g.primitiveLength+=v.length;}}for(var w=Ao(f,y),_=0;_<w.length;_+=3)this.indexArray.emplaceBack(h+w[_],h+w[_+1],h+w[_+2]);c.vertexLength+=u,c.primitiveLength+=w.length/3;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);},Dn("FillBucket",is,{omit:["layers","patternFeatures"]});var as=new xi({"fill-sort-key":new di(zt.layout_fill["fill-sort-key"])}),os={paint:new xi({"fill-antialias":new yi(zt.paint_fill["fill-antialias"]),"fill-opacity":new di(zt.paint_fill["fill-opacity"]),"fill-color":new di(zt.paint_fill["fill-color"]),"fill-outline-color":new di(zt.paint_fill["fill-outline-color"]),"fill-translate":new yi(zt.paint_fill["fill-translate"]),"fill-translate-anchor":new yi(zt.paint_fill["fill-translate-anchor"]),"fill-pattern":new mi(zt.paint_fill["fill-pattern"])}),layout:as},ss=function(t){function e(e){t.call(this,e,os);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.recalculate=function(e,r){t.prototype.recalculate.call(this,e,r);var n=this.paint._values["fill-outline-color"];"constant"===n.value.kind&&void 0===n.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"]);},e.prototype.createBucket=function(t){return new is(t)},e.prototype.queryRadius=function(){return Wa(this.paint.get("fill-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,a,o){return qa(Qa(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),a.angle,o),n)},e.prototype.isTileClipped=function(){return !0},e}(bi),us=Si([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4).members,ls=ps;function ps(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(cs,this,e);}function cs(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){for(var r=t.readVarint()+t.pos;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i;}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos);}function hs(t){for(var e,r,n=0,i=0,a=t.length,o=a-1;i<a;o=i++)n+=((r=t[o]).x-(e=t[i]).x)*(e.y+r.y);return n}ps.types=["Unknown","Point","LineString","Polygon"],ps.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,n=1,a=0,o=0,s=0,u=[];t.pos<r;){if(a<=0){var l=t.readVarint();n=7&l,a=l>>3;}if(a--,1===n||2===n)o+=t.readSVarint(),s+=t.readSVarint(),1===n&&(e&&u.push(e),e=[]),e.push(new i(o,s));else {if(7!==n)throw new Error("unknown command "+n);e&&e.push(e[0].clone());}}return e&&u.push(e),u},ps.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,a=0,o=1/0,s=-1/0,u=1/0,l=-1/0;t.pos<e;){if(n<=0){var p=t.readVarint();r=7&p,n=p>>3;}if(n--,1===r||2===r)(i+=t.readSVarint())<o&&(o=i),i>s&&(s=i),(a+=t.readSVarint())<u&&(u=a),a>l&&(l=a);else if(7!==r)throw new Error("unknown command "+r)}return [o,u,s,l]},ps.prototype.toGeoJSON=function(t,e,r){var n,i,a=this.extent*Math.pow(2,r),o=this.extent*t,s=this.extent*e,u=this.loadGeometry(),l=ps.types[this.type];function p(t){for(var e=0;e<t.length;e++){var r=t[e];t[e]=[360*(r.x+o)/a-180,360/Math.PI*Math.atan(Math.exp((180-360*(r.y+s)/a)*Math.PI/180))-90];}}switch(this.type){case 1:var c=[];for(n=0;n<u.length;n++)c[n]=u[n][0];p(u=c);break;case 2:for(n=0;n<u.length;n++)p(u[n]);break;case 3:for(u=function(t){var e=t.length;if(e<=1)return [t];for(var r,n,i=[],a=0;a<e;a++){var o=hs(t[a]);0!==o&&(void 0===n&&(n=o<0),n===o<0?(r&&i.push(r),r=[t[a]]):r.push(t[a]));}return r&&i.push(r),i}(u),n=0;n<u.length;n++)for(i=0;i<u[n].length;i++)p(u[n][i]);}1===u.length?u=u[0]:l="Multi"+l;var h={type:"Feature",geometry:{type:l,coordinates:u},properties:this.properties};return "id"in this&&(h.id=this.id),h};var fs=ys;function ys(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(ds,this,e),this.length=this._features.length;}function ds(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){for(var e=null,r=t.readVarint()+t.pos;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null;}return e}(r));}function ms(t,e,r){if(3===t){var n=new fs(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n);}}ys.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new ls(this._pbf,e,this.extent,this._keys,this._values)};var vs={VectorTile:function(t,e){this.layers=t.readFields(ms,{},e);},VectorTileFeature:ls,VectorTileLayer:fs},gs=vs.VectorTileFeature.types,xs=Math.pow(2,13);function bs(t,e,r,n,i,a,o,s){t.emplaceBack(e,r,2*Math.floor(n*xs)+o,i*xs*2,a*xs*2,Math.round(s));}var ws=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new Ci,this.indexArray=new Ri,this.programConfigurations=new Pa(t.layers,t.zoom),this.segments=new aa,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};function _s(t,e){return t.x===e.x&&(t.x<0||t.x>8192)||t.y===e.y&&(t.y<0||t.y>8192)}ws.prototype.populate=function(t,e,r){this.features=[],this.hasPattern=rs("fill-extrusion",this.layers,e);for(var n=0,i=t;n<i.length;n+=1){var a=i[n],o=a.feature,s=a.id,u=a.index,l=a.sourceLayerIndex,p=this.layers[0]._featureFilter.needGeometry,c={type:o.type,id:s,properties:o.properties,geometry:p?La(o):[]};if(this.layers[0]._featureFilter.filter(new ai(this.zoom),c,r)){var h={id:s,sourceLayerIndex:l,index:u,geometry:p?c.geometry:La(o),properties:o.properties,type:o.type,patterns:{}};void 0!==o.id&&(h.id=o.id),this.hasPattern?this.features.push(ns("fill-extrusion",this.layers,h,this.zoom,e)):this.addFeature(h,h.geometry,u,r,{}),e.featureIndex.insert(o,h.geometry,u,l,this.index,!0);}}},ws.prototype.addFeatures=function(t,e,r){for(var n=0,i=this.features;n<i.length;n+=1){var a=i[n];this.addFeature(a,a.geometry,a.index,e,r);}},ws.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},ws.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},ws.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},ws.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,us),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},ws.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},ws.prototype.addFeature=function(t,e,r,n,i){for(var a=0,o=ts(e,500);a<o.length;a+=1){for(var s=o[a],u=0,l=0,p=s;l<p.length;l+=1)u+=p[l].length;for(var c=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray),h=0,f=s;h<f.length;h+=1){var y=f[h];if(0!==y.length&&!((P=y).every((function(t){return t.x<0}))||P.every((function(t){return t.x>8192}))||P.every((function(t){return t.y<0}))||P.every((function(t){return t.y>8192}))))for(var d=0,m=0;m<y.length;m++){var v=y[m];if(m>=1){var g=y[m-1];if(!_s(v,g)){c.vertexLength+4>aa.MAX_VERTEX_ARRAY_LENGTH&&(c=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray));var x=v.sub(g)._perp()._unit(),b=g.dist(v);d+b>32768&&(d=0),bs(this.layoutVertexArray,v.x,v.y,x.x,x.y,0,0,d),bs(this.layoutVertexArray,v.x,v.y,x.x,x.y,0,1,d),bs(this.layoutVertexArray,g.x,g.y,x.x,x.y,0,0,d+=b),bs(this.layoutVertexArray,g.x,g.y,x.x,x.y,0,1,d);var w=c.vertexLength;this.indexArray.emplaceBack(w,w+2,w+1),this.indexArray.emplaceBack(w+1,w+2,w+3),c.vertexLength+=4,c.primitiveLength+=2;}}}}if(c.vertexLength+u>aa.MAX_VERTEX_ARRAY_LENGTH&&(c=this.segments.prepareSegment(u,this.layoutVertexArray,this.indexArray)),"Polygon"===gs[t.type]){for(var _=[],A=[],S=c.vertexLength,k=0,I=s;k<I.length;k+=1){var z=I[k];if(0!==z.length){z!==s[0]&&A.push(_.length/2);for(var C=0;C<z.length;C++){var M=z[C];bs(this.layoutVertexArray,M.x,M.y,0,0,1,1,0),_.push(M.x),_.push(M.y);}}}for(var E=Ao(_,A),T=0;T<E.length;T+=3)this.indexArray.emplaceBack(S+E[T],S+E[T+2],S+E[T+1]);c.primitiveLength+=E.length/3,c.vertexLength+=u;}}var P;this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);},Dn("FillExtrusionBucket",ws,{omit:["layers","features"]});var As={paint:new xi({"fill-extrusion-opacity":new yi(zt["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new di(zt["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new yi(zt["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new yi(zt["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new mi(zt["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new di(zt["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new di(zt["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new yi(zt["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})},Ss=function(t){function e(e){t.call(this,e,As);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.createBucket=function(t){return new ws(t)},e.prototype.queryRadius=function(){return Wa(this.paint.get("fill-extrusion-translate"))},e.prototype.is3D=function(){return !0},e.prototype.queryIntersectsFeature=function(t,e,r,n,a,o,s,u){var l=Qa(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),o.angle,s),p=this.paint.get("fill-extrusion-height").evaluate(e,r),c=this.paint.get("fill-extrusion-base").evaluate(e,r),h=function(t,e,r,n){for(var a=[],o=0,s=t;o<s.length;o+=1){var u=s[o],l=[u.x,u.y,0,1];so(l,l,e),a.push(new i(l[0]/l[3],l[1]/l[3]));}return a}(l,u),f=function(t,e,r,n){for(var a=[],o=[],s=n[8]*e,u=n[9]*e,l=n[10]*e,p=n[11]*e,c=n[8]*r,h=n[9]*r,f=n[10]*r,y=n[11]*r,d=0,m=t;d<m.length;d+=1){for(var v=[],g=[],x=0,b=m[d];x<b.length;x+=1){var w=b[x],_=w.x,A=w.y,S=n[0]*_+n[4]*A+n[12],k=n[1]*_+n[5]*A+n[13],I=n[2]*_+n[6]*A+n[14],z=n[3]*_+n[7]*A+n[15],C=I+l,M=z+p,E=S+c,T=k+h,P=I+f,B=z+y,V=new i((S+s)/M,(k+u)/M);V.z=C/M,v.push(V);var F=new i(E/B,T/B);F.z=P/B,g.push(F);}a.push(v),o.push(g);}return [a,o]}(n,c,p,u);return function(t,e,r){var n=1/0;qa(r,e)&&(n=Is(r,e[0]));for(var i=0;i<e.length;i++)for(var a=e[i],o=t[i],s=0;s<a.length-1;s++){var u=a[s],l=[u,a[s+1],o[s+1],o[s],u];Ua(r,l)&&(n=Math.min(n,Is(r,l)));}return n!==1/0&&n}(f[0],f[1],h)},e}(bi);function ks(t,e){return t.x*e.x+t.y*e.y}function Is(t,e){if(1===t.length){for(var r,n=0,i=e[n++];!r||i.equals(r);)if(!(r=e[n++]))return 1/0;for(;n<e.length;n++){var a=e[n],o=t[0],s=r.sub(i),u=a.sub(i),l=o.sub(i),p=ks(s,s),c=ks(s,u),h=ks(u,u),f=ks(l,s),y=ks(l,u),d=p*h-c*c,m=(h*f-c*y)/d,v=(p*y-c*f)/d,g=i.z*(1-m-v)+r.z*m+a.z*v;if(isFinite(g))return g}return 1/0}for(var x=1/0,b=0,w=e;b<w.length;b+=1)x=Math.min(x,w[b].z);return x}var zs=Si([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4).members,Cs=vs.VectorTileFeature.types,Ms=Math.cos(Math.PI/180*37.5),Es=Math.pow(2,14)/.5,Ts=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new Mi,this.indexArray=new Ri,this.programConfigurations=new Pa(t.layers,t.zoom),this.segments=new aa,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};Ts.prototype.populate=function(t,e,r){this.hasPattern=rs("line",this.layers,e);for(var n=this.layers[0].layout.get("line-sort-key"),i=[],a=0,o=t;a<o.length;a+=1){var s=o[a],u=s.feature,l=s.id,p=s.index,c=s.sourceLayerIndex,h=this.layers[0]._featureFilter.needGeometry,f={type:u.type,id:l,properties:u.properties,geometry:h?La(u):[]};if(this.layers[0]._featureFilter.filter(new ai(this.zoom),f,r)){h||(f.geometry=La(u));var y=n?n.evaluate(f,{},r):void 0;i.push({id:l,properties:u.properties,type:u.type,sourceLayerIndex:c,index:p,geometry:f.geometry,patterns:{},sortKey:y});}}n&&i.sort((function(t,e){return t.sortKey-e.sortKey}));for(var d=0,m=i;d<m.length;d+=1){var v=m[d],g=v.geometry,x=v.index,b=v.sourceLayerIndex;if(this.hasPattern){var w=ns("line",this.layers,v,this.zoom,e);this.patternFeatures.push(w);}else this.addFeature(v,g,x,r,{});e.featureIndex.insert(t[x].feature,g,x,b,this.index);}},Ts.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},Ts.prototype.addFeatures=function(t,e,r){for(var n=0,i=this.patternFeatures;n<i.length;n+=1){var a=i[n];this.addFeature(a,a.geometry,a.index,e,r);}},Ts.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Ts.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},Ts.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,zs),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},Ts.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},Ts.prototype.addFeature=function(t,e,r,n,i){for(var a=this.layers[0].layout,o=a.get("line-join").evaluate(t,{}),s=a.get("line-cap"),u=a.get("line-miter-limit"),l=a.get("line-round-limit"),p=0,c=e;p<c.length;p+=1)this.addLine(c[p],t,o,s,u,l);this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);},Ts.prototype.addLine=function(t,e,r,n,i,a){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,e.properties&&e.properties.hasOwnProperty("mapbox_clip_start")&&e.properties.hasOwnProperty("mapbox_clip_end")){this.clipStart=+e.properties.mapbox_clip_start,this.clipEnd=+e.properties.mapbox_clip_end;for(var o=0;o<t.length-1;o++)this.totalDistance+=t[o].dist(t[o+1]);this.updateScaledDistance();}for(var s="Polygon"===Cs[e.type],u=t.length;u>=2&&t[u-1].equals(t[u-2]);)u--;for(var l=0;l<u-1&&t[l].equals(t[l+1]);)l++;if(!(u<(s?3:2))){"bevel"===r&&(i=1.05);var p,c=this.overscaling<=16?122880/(512*this.overscaling):0,h=this.segments.prepareSegment(10*u,this.layoutVertexArray,this.indexArray),f=void 0,y=void 0,d=void 0,m=void 0;this.e1=this.e2=-1,s&&(m=t[l].sub(p=t[u-2])._unit()._perp());for(var v=l;v<u;v++)if(!(y=v===u-1?s?t[l+1]:void 0:t[v+1])||!t[v].equals(y)){m&&(d=m),p&&(f=p),p=t[v],m=y?y.sub(p)._unit()._perp():d;var g=(d=d||m).add(m);0===g.x&&0===g.y||g._unit();var x=d.x*m.x+d.y*m.y,b=g.x*m.x+g.y*m.y,w=0!==b?1/b:1/0,_=2*Math.sqrt(2-2*b),A=b<Ms&&f&&y,S=d.x*m.y-d.y*m.x>0;if(A&&v>l){var k=p.dist(f);if(k>2*c){var I=p.sub(p.sub(f)._mult(c/k)._round());this.updateDistance(f,I),this.addCurrentVertex(I,d,0,0,h),f=I;}}var z=f&&y,C=z?r:s?"butt":n;if(z&&"round"===C&&(w<a?C="miter":w<=2&&(C="fakeround")),"miter"===C&&w>i&&(C="bevel"),"bevel"===C&&(w>2&&(C="flipbevel"),w<i&&(C="miter")),f&&this.updateDistance(f,p),"miter"===C)g._mult(w),this.addCurrentVertex(p,g,0,0,h);else if("flipbevel"===C){if(w>100)g=m.mult(-1);else {var M=w*d.add(m).mag()/d.sub(m).mag();g._perp()._mult(M*(S?-1:1));}this.addCurrentVertex(p,g,0,0,h),this.addCurrentVertex(p,g.mult(-1),0,0,h);}else if("bevel"===C||"fakeround"===C){var E=-Math.sqrt(w*w-1),T=S?E:0,P=S?0:E;if(f&&this.addCurrentVertex(p,d,T,P,h),"fakeround"===C)for(var B=Math.round(180*_/Math.PI/20),V=1;V<B;V++){var F=V/B;if(.5!==F){var D=F-.5;F+=F*D*(F-1)*((1.0904+x*(x*(3.55645-1.43519*x)-3.2452))*D*D+(.848013+x*(.215638*x-1.06021)));}var L=m.sub(d)._mult(F)._add(d)._unit()._mult(S?-1:1);this.addHalfVertex(p,L.x,L.y,!1,S,0,h);}y&&this.addCurrentVertex(p,m,-T,-P,h);}else if("butt"===C)this.addCurrentVertex(p,g,0,0,h);else if("square"===C){var R=f?1:-1;this.addCurrentVertex(p,g,R,R,h);}else "round"===C&&(f&&(this.addCurrentVertex(p,d,0,0,h),this.addCurrentVertex(p,d,1,1,h,!0)),y&&(this.addCurrentVertex(p,m,-1,-1,h,!0),this.addCurrentVertex(p,m,0,0,h)));if(A&&v<u-1){var O=p.dist(y);if(O>2*c){var U=p.add(y.sub(p)._mult(c/O)._round());this.updateDistance(p,U),this.addCurrentVertex(U,m,0,0,h),p=U;}}}}},Ts.prototype.addCurrentVertex=function(t,e,r,n,i,a){void 0===a&&(a=!1);var o=e.y*n-e.x,s=-e.y-e.x*n;this.addHalfVertex(t,e.x+e.y*r,e.y-e.x*r,a,!1,r,i),this.addHalfVertex(t,o,s,a,!0,-n,i),this.distance>Es/2&&0===this.totalDistance&&(this.distance=0,this.addCurrentVertex(t,e,r,n,i,a));},Ts.prototype.addHalfVertex=function(t,e,r,n,i,a,o){var s=.5*this.scaledDistance;this.layoutVertexArray.emplaceBack((t.x<<1)+(n?1:0),(t.y<<1)+(i?1:0),Math.round(63*e)+128,Math.round(63*r)+128,1+(0===a?0:a<0?-1:1)|(63&s)<<2,s>>6);var u=o.vertexLength++;this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,u),o.primitiveLength++),i?this.e2=u:this.e1=u;},Ts.prototype.updateScaledDistance=function(){this.scaledDistance=this.totalDistance>0?(this.clipStart+(this.clipEnd-this.clipStart)*this.distance/this.totalDistance)*(Es-1):this.distance;},Ts.prototype.updateDistance=function(t,e){this.distance+=t.dist(e),this.updateScaledDistance();},Dn("LineBucket",Ts,{omit:["layers","patternFeatures"]});var Ps=new xi({"line-cap":new yi(zt.layout_line["line-cap"]),"line-join":new di(zt.layout_line["line-join"]),"line-miter-limit":new yi(zt.layout_line["line-miter-limit"]),"line-round-limit":new yi(zt.layout_line["line-round-limit"]),"line-sort-key":new di(zt.layout_line["line-sort-key"])}),Bs={paint:new xi({"line-opacity":new di(zt.paint_line["line-opacity"]),"line-color":new di(zt.paint_line["line-color"]),"line-translate":new yi(zt.paint_line["line-translate"]),"line-translate-anchor":new yi(zt.paint_line["line-translate-anchor"]),"line-width":new di(zt.paint_line["line-width"]),"line-gap-width":new di(zt.paint_line["line-gap-width"]),"line-offset":new di(zt.paint_line["line-offset"]),"line-blur":new di(zt.paint_line["line-blur"]),"line-dasharray":new vi(zt.paint_line["line-dasharray"]),"line-pattern":new mi(zt.paint_line["line-pattern"]),"line-gradient":new gi(zt.paint_line["line-gradient"])}),layout:Ps},Vs=new(function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.possiblyEvaluate=function(e,r){return r=new ai(Math.floor(r.zoom),{now:r.now,fadeDuration:r.fadeDuration,zoomHistory:r.zoomHistory,transition:r.transition}),t.prototype.possiblyEvaluate.call(this,e,r)},e.prototype.evaluate=function(e,r,n,i){return r=c({},r,{zoom:Math.floor(r.zoom)}),t.prototype.evaluate.call(this,e,r,n,i)},e}(di))(Bs.paint.properties["line-width"].specification);Vs.useIntegerZoom=!0;var Fs=function(t){function e(e){t.call(this,e,Bs);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype._handleSpecialPaintPropertyUpdate=function(t){"line-gradient"===t&&this._updateGradient();},e.prototype._updateGradient=function(){this.gradient=go(this._transitionablePaint._values["line-gradient"].value.expression,"lineProgress"),this.gradientTexture=null;},e.prototype.recalculate=function(e,r){t.prototype.recalculate.call(this,e,r),this.paint._values["line-floorwidth"]=Vs.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,e);},e.prototype.createBucket=function(t){return new Ts(t)},e.prototype.queryRadius=function(t){var e=t,r=Ds($a("line-width",this,e),$a("line-gap-width",this,e)),n=$a("line-offset",this,e);return r/2+Math.abs(n)+Wa(this.paint.get("line-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,a,o,s){var u=Qa(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),o.angle,s),l=s/2*Ds(this.paint.get("line-width").evaluate(e,r),this.paint.get("line-gap-width").evaluate(e,r)),p=this.paint.get("line-offset").evaluate(e,r);return p&&(n=function(t,e){for(var r=[],n=new i(0,0),a=0;a<t.length;a++){for(var o=t[a],s=[],u=0;u<o.length;u++){var l=o[u],p=o[u+1],c=0===u?n:l.sub(o[u-1])._unit()._perp(),h=u===o.length-1?n:p.sub(l)._unit()._perp(),f=c._add(h)._unit();f._mult(1/(f.x*h.x+f.y*h.y)),s.push(f._mult(e)._add(l));}r.push(s);}return r}(n,p*s)),function(t,e,r){for(var n=0;n<e.length;n++){var i=e[n];if(t.length>=3)for(var a=0;a<i.length;a++)if(Ha(t,i[a]))return !0;if(Na(t,i,r))return !0}return !1}(u,n,l)},e.prototype.isTileClipped=function(){return !0},e}(bi);function Ds(t,e){return e>0?e+2*t:t}var Ls=Si([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"},{name:"a_pixeloffset",components:4,type:"Int16"}],4),Rs=Si([{name:"a_projected_pos",components:3,type:"Float32"}],4),Os=(Si([{name:"a_fade_opacity",components:1,type:"Uint32"}],4),Si([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}])),Us=(Si([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"}]),Si([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4)),js=Si([{name:"a_pos",components:2,type:"Float32"},{name:"a_radius",components:1,type:"Float32"},{name:"a_flags",components:2,type:"Int16"}],4);function qs(t,e,r){return t.sections.forEach((function(t){t.text=function(t,e,r){var n=e.layout.get("text-transform").evaluate(r,{});return "uppercase"===n?t=t.toLocaleUpperCase():"lowercase"===n&&(t=t.toLocaleLowerCase()),ii.applyArabicShaping&&(t=ii.applyArabicShaping(t)),t}(t.text,e,r);})),t}Si([{name:"triangle",components:3,type:"Uint16"}]),Si([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"}]),Si([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Int16",name:"verticalPlacedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"verticalIconBoxStartIndex"},{type:"Uint16",name:"verticalIconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint16",name:"numVerticalIconVertices"},{type:"Uint16",name:"useRuntimeCollisionCircles"},{type:"Uint32",name:"crossTileID"},{type:"Float32",name:"textBoxScale"},{type:"Float32",components:2,name:"textOffset"},{type:"Float32",name:"collisionCircleDiameter"}]),Si([{type:"Float32",name:"offsetX"}]),Si([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}]);var Ns={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"},Ks=function(t,e,r,n,i){var a,o,s=8*i-n-1,u=(1<<s)-1,l=u>>1,p=-7,c=r?i-1:0,h=r?-1:1,f=t[e+c];for(c+=h,a=f&(1<<-p)-1,f>>=-p,p+=s;p>0;a=256*a+t[e+c],c+=h,p-=8);for(o=a&(1<<-p)-1,a>>=-p,p+=n;p>0;o=256*o+t[e+c],c+=h,p-=8);if(0===a)a=1-l;else {if(a===u)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,n),a-=l;}return (f?-1:1)*o*Math.pow(2,a-n)},Gs=function(t,e,r,n,i,a){var o,s,u,l=8*a-i-1,p=(1<<l)-1,c=p>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:a-1,y=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,o=p):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),(e+=o+c>=1?h/u:h*Math.pow(2,1-c))*u>=2&&(o++,u/=2),o+c>=p?(s=0,o=p):o+c>=1?(s=(e*u-1)*Math.pow(2,i),o+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;t[r+f]=255&s,f+=y,s/=256,i-=8);for(o=o<<i|s,l+=i;l>0;t[r+f]=255&o,f+=y,o/=256,l-=8);t[r+f-y]|=128*d;},Zs=Xs;function Xs(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length;}Xs.Varint=0,Xs.Fixed64=1,Xs.Bytes=2,Xs.Fixed32=5;var Js="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function Hs(t){return t.type===Xs.Bytes?t.readVarint()+t.pos:t.pos+1}function Ys(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function $s(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i];}function Ws(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r]);}function Qs(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r]);}function tu(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r]);}function eu(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r]);}function ru(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r]);}function nu(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r]);}function iu(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r]);}function au(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r]);}function ou(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r]);}function su(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function uu(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24;}function lu(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function pu(t,e,r){1===t&&r.readMessage(cu,e);}function cu(t,e,r){if(3===t){var n=r.readMessage(hu,{}),i=n.width,a=n.height,o=n.left,s=n.top,u=n.advance;e.push({id:n.id,bitmap:new yo({width:i+6,height:a+6},n.bitmap),metrics:{width:i,height:a,left:o,top:s,advance:u}});}}function hu(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint());}function fu(t){for(var e=0,r=0,n=0,i=t;n<i.length;n+=1){var a=i[n];e+=a.w*a.h,r=Math.max(r,a.w);}t.sort((function(t,e){return e.h-t.h}));for(var o=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),r),h:1/0}],s=0,u=0,l=0,p=t;l<p.length;l+=1)for(var c=p[l],h=o.length-1;h>=0;h--){var f=o[h];if(!(c.w>f.w||c.h>f.h)){if(c.x=f.x,c.y=f.y,u=Math.max(u,c.y+c.h),s=Math.max(s,c.x+c.w),c.w===f.w&&c.h===f.h){var y=o.pop();h<o.length&&(o[h]=y);}else c.h===f.h?(f.x+=c.w,f.w-=c.w):c.w===f.w?(f.y+=c.h,f.h-=c.h):(o.push({x:f.x+c.w,y:f.y,w:f.w-c.w,h:c.h}),f.y+=c.h,f.h-=c.h);break}}return {w:s,h:u,fill:e/(s*u)||0}}Xs.prototype={destroy:function(){this.buf=null;},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,a=this.pos;this.type=7&n,t(i,e,this),this.pos===a&&this.skip(n);}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=su(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=lu(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=su(this.buf,this.pos)+4294967296*su(this.buf,this.pos+4);return this.pos+=8,t},readSFixed64:function(){var t=su(this.buf,this.pos)+4294967296*lu(this.buf,this.pos+4);return this.pos+=8,t},readFloat:function(){var t=Ks(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=Ks(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,r,n=this.buf;return e=127&(r=n[this.pos++]),r<128?e:(e|=(127&(r=n[this.pos++]))<<7,r<128?e:(e|=(127&(r=n[this.pos++]))<<14,r<128?e:(e|=(127&(r=n[this.pos++]))<<21,r<128?e:function(t,e,r){var n,i,a=r.buf;if(n=(112&(i=a[r.pos++]))>>4,i<128)return Ys(t,n,e);if(n|=(127&(i=a[r.pos++]))<<3,i<128)return Ys(t,n,e);if(n|=(127&(i=a[r.pos++]))<<10,i<128)return Ys(t,n,e);if(n|=(127&(i=a[r.pos++]))<<17,i<128)return Ys(t,n,e);if(n|=(127&(i=a[r.pos++]))<<24,i<128)return Ys(t,n,e);if(n|=(1&(i=a[r.pos++]))<<31,i<128)return Ys(t,n,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=n[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&Js?function(t,e,r){return Js.decode(t.subarray(e,r))}(this.buf,e,t):function(t,e,r){for(var n="",i=e;i<r;){var a,o,s,u=t[i],l=null,p=u>239?4:u>223?3:u>191?2:1;if(i+p>r)break;1===p?u<128&&(l=u):2===p?128==(192&(a=t[i+1]))&&(l=(31&u)<<6|63&a)<=127&&(l=null):3===p?(o=t[i+2],128==(192&(a=t[i+1]))&&128==(192&o)&&((l=(15&u)<<12|(63&a)<<6|63&o)<=2047||l>=55296&&l<=57343)&&(l=null)):4===p&&(o=t[i+2],s=t[i+3],128==(192&(a=t[i+1]))&&128==(192&o)&&128==(192&s)&&((l=(15&u)<<18|(63&a)<<12|(63&o)<<6|63&s)<=65535||l>=1114112)&&(l=null)),null===l?(l=65533,p=1):l>65535&&(l-=65536,n+=String.fromCharCode(l>>>10&1023|55296),l=56320|1023&l),n+=String.fromCharCode(l),i+=p;}return n}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==Xs.Bytes)return t.push(this.readVarint(e));var r=Hs(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==Xs.Bytes)return t.push(this.readSVarint());var e=Hs(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==Xs.Bytes)return t.push(this.readBoolean());var e=Hs(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==Xs.Bytes)return t.push(this.readFloat());var e=Hs(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==Xs.Bytes)return t.push(this.readDouble());var e=Hs(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==Xs.Bytes)return t.push(this.readFixed32());var e=Hs(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==Xs.Bytes)return t.push(this.readSFixed32());var e=Hs(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==Xs.Bytes)return t.push(this.readFixed64());var e=Hs(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==Xs.Bytes)return t.push(this.readSFixed64());var e=Hs(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===Xs.Varint)for(;this.buf[this.pos++]>127;);else if(e===Xs.Bytes)this.pos=this.readVarint()+this.pos;else if(e===Xs.Fixed32)this.pos+=4;else {if(e!==Xs.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8;}},writeTag:function(t,e){this.writeVarint(t<<3|e);},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e;}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),uu(this.buf,t,this.pos),this.pos+=4;},writeSFixed32:function(t){this.realloc(4),uu(this.buf,t,this.pos),this.pos+=4;},writeFixed64:function(t){this.realloc(8),uu(this.buf,-1&t,this.pos),uu(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8;},writeSFixed64:function(t){this.realloc(8),uu(this.buf,-1&t,this.pos),uu(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8;},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,n;if(t>=0?(r=t%4294967296|0,n=t/4294967296|0):(n=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,n=n+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,r.buf[r.pos]=127&(t>>>=7);}(r,0,e),function(t,e){var r=(7&t)<<4;e.buf[e.pos++]|=r|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))));}(n,e);}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))));},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t);},writeBoolean:function(t){this.writeVarint(Boolean(t));},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,r){for(var n,i,a=0;a<e.length;a++){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){n>56319||a+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):i=n;continue}if(n<56320){t[r++]=239,t[r++]=191,t[r++]=189,i=n;continue}n=i-55296<<10|n-56320|65536,i=null;}else i&&(t[r++]=239,t[r++]=191,t[r++]=189,i=null);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:(n<65536?t[r++]=n>>12|224:(t[r++]=n>>18|240,t[r++]=n>>12&63|128),t[r++]=n>>6&63|128),t[r++]=63&n|128);}return r}(this.buf,t,this.pos);var r=this.pos-e;r>=128&&$s(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r;},writeFloat:function(t){this.realloc(4),Gs(this.buf,t,this.pos,!0,23,4),this.pos+=4;},writeDouble:function(t){this.realloc(8),Gs(this.buf,t,this.pos,!0,52,8),this.pos+=8;},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r];},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&$s(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n;},writeMessage:function(t,e,r){this.writeTag(t,Xs.Bytes),this.writeRawMessage(e,r);},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,Ws,e);},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,Qs,e);},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,ru,e);},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,tu,e);},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,eu,e);},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,nu,e);},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,iu,e);},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,au,e);},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,ou,e);},writeBytesField:function(t,e){this.writeTag(t,Xs.Bytes),this.writeBytes(e);},writeFixed32Field:function(t,e){this.writeTag(t,Xs.Fixed32),this.writeFixed32(e);},writeSFixed32Field:function(t,e){this.writeTag(t,Xs.Fixed32),this.writeSFixed32(e);},writeFixed64Field:function(t,e){this.writeTag(t,Xs.Fixed64),this.writeFixed64(e);},writeSFixed64Field:function(t,e){this.writeTag(t,Xs.Fixed64),this.writeSFixed64(e);},writeVarintField:function(t,e){this.writeTag(t,Xs.Varint),this.writeVarint(e);},writeSVarintField:function(t,e){this.writeTag(t,Xs.Varint),this.writeSVarint(e);},writeStringField:function(t,e){this.writeTag(t,Xs.Bytes),this.writeString(e);},writeFloatField:function(t,e){this.writeTag(t,Xs.Fixed32),this.writeFloat(e);},writeDoubleField:function(t,e){this.writeTag(t,Xs.Fixed64),this.writeDouble(e);},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e));}};var yu=function(t,e){var r=e.pixelRatio,n=e.version,i=e.stretchX,a=e.stretchY,o=e.content;this.paddedRect=t,this.pixelRatio=r,this.stretchX=i,this.stretchY=a,this.content=o,this.version=n;},du={tl:{configurable:!0},br:{configurable:!0},tlbr:{configurable:!0},displaySize:{configurable:!0}};du.tl.get=function(){return [this.paddedRect.x+1,this.paddedRect.y+1]},du.br.get=function(){return [this.paddedRect.x+this.paddedRect.w-1,this.paddedRect.y+this.paddedRect.h-1]},du.tlbr.get=function(){return this.tl.concat(this.br)},du.displaySize.get=function(){return [(this.paddedRect.w-2)/this.pixelRatio,(this.paddedRect.h-2)/this.pixelRatio]},Object.defineProperties(yu.prototype,du);var mu=function(t,e){var r={},n={};this.haveRenderCallbacks=[];var i=[];this.addImages(t,r,i),this.addImages(e,n,i);var a=fu(i),o=new mo({width:a.w||1,height:a.h||1});for(var s in t){var u=t[s],l=r[s].paddedRect;mo.copy(u.data,o,{x:0,y:0},{x:l.x+1,y:l.y+1},u.data);}for(var p in e){var c=e[p],h=n[p].paddedRect,f=h.x+1,y=h.y+1,d=c.data.width,m=c.data.height;mo.copy(c.data,o,{x:0,y:0},{x:f,y:y},c.data),mo.copy(c.data,o,{x:0,y:m-1},{x:f,y:y-1},{width:d,height:1}),mo.copy(c.data,o,{x:0,y:0},{x:f,y:y+m},{width:d,height:1}),mo.copy(c.data,o,{x:d-1,y:0},{x:f-1,y:y},{width:1,height:m}),mo.copy(c.data,o,{x:0,y:0},{x:f+d,y:y},{width:1,height:m});}this.image=o,this.iconPositions=r,this.patternPositions=n;};mu.prototype.addImages=function(t,e,r){for(var n in t){var i=t[n],a={x:0,y:0,w:i.data.width+2,h:i.data.height+2};r.push(a),e[n]=new yu(a,i),i.hasRenderCallback&&this.haveRenderCallbacks.push(n);}},mu.prototype.patchUpdatedImages=function(t,e){for(var r in t.dispatchRenderCallbacks(this.haveRenderCallbacks),t.updatedImages)this.patchUpdatedImage(this.iconPositions[r],t.getImage(r),e),this.patchUpdatedImage(this.patternPositions[r],t.getImage(r),e);},mu.prototype.patchUpdatedImage=function(t,e,r){if(t&&e&&t.version!==e.version){t.version=e.version;var n=t.tl;r.update(e.data,void 0,{x:n[0],y:n[1]});}},Dn("ImagePosition",yu),Dn("ImageAtlas",mu);var vu={horizontal:1,vertical:2,horizontalOnly:3},gu=function(){this.scale=1,this.fontStack="",this.imageName=null;};gu.forText=function(t,e){var r=new gu;return r.scale=t||1,r.fontStack=e,r},gu.forImage=function(t){var e=new gu;return e.imageName=t,e};var xu=function(){this.text="",this.sectionIndex=[],this.sections=[],this.imageSectionID=null;};function bu(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d){var m,v=xu.fromFeature(t,i);c===vu.vertical&&v.verticalizePunctuation();var g=ii.processBidirectionalText,x=ii.processStyledBidirectionalText;if(g&&1===v.sections.length){m=[];for(var b=0,w=g(v.toString(),zu(v,l,a,e,n,f,y));b<w.length;b+=1){var _=w[b],A=new xu;A.text=_,A.sections=v.sections;for(var S=0;S<_.length;S++)A.sectionIndex.push(0);m.push(A);}}else if(x){m=[];for(var k=0,I=x(v.text,v.sectionIndex,zu(v,l,a,e,n,f,y));k<I.length;k+=1){var z=I[k],C=new xu;C.text=z[0],C.sectionIndex=z[1],C.sections=v.sections,m.push(C);}}else m=function(t,e){for(var r=[],n=t.text,i=0,a=0,o=e;a<o.length;a+=1){var s=o[a];r.push(t.substring(i,s)),i=s;}return i<n.length&&r.push(t.substring(i,n.length)),r}(v,zu(v,l,a,e,n,f,y));var M=[],E={positionedLines:M,text:v.toString(),top:p[1],bottom:p[1],left:p[0],right:p[0],writingMode:c,iconsInText:!1,verticalizable:!1};return function(t,e,r,n,i,a,o,s,u,l,p,c){for(var h=0,f=-17,y=0,d=0,m="right"===s?1:"left"===s?0:.5,v=0,g=0,x=i;g<x.length;g+=1){var b=x[g];b.trim();var w=b.getMaxScale(),_=24*(w-1),A={positionedGlyphs:[],lineOffset:0};t.positionedLines[v]=A;var S=A.positionedGlyphs,k=0;if(b.length()){for(var I=0;I<b.length();I++){var z=b.getSection(I),C=b.getSectionIndex(I),M=b.getCharCode(I),E=0,T=null,P=null,B=null,V=24,F=!(u===vu.horizontal||!p&&!Gn(M)||p&&(wu[M]||(K=M,Nn.Arabic(K)||Nn["Arabic Supplement"](K)||Nn["Arabic Extended-A"](K)||Nn["Arabic Presentation Forms-A"](K)||Nn["Arabic Presentation Forms-B"](K))));if(z.imageName){var D=n[z.imageName];if(!D)continue;B=z.imageName,t.iconsInText=t.iconsInText||!0,P=D.paddedRect;var L=D.displaySize;z.scale=24*z.scale/c,E=_+(24-L[1]*z.scale),V=(T={width:L[0],height:L[1],left:1,top:-3,advance:F?L[1]:L[0]}).advance;var R=F?L[0]*z.scale-24*w:L[1]*z.scale-24*w;R>0&&R>k&&(k=R);}else {var O=r[z.fontStack],U=O&&O[M];if(U&&U.rect)P=U.rect,T=U.metrics;else {var j=e[z.fontStack],q=j&&j[M];if(!q)continue;T=q.metrics;}E=24*(w-z.scale);}F?(t.verticalizable=!0,S.push({glyph:M,imageName:B,x:h,y:f+E,vertical:F,scale:z.scale,fontStack:z.fontStack,sectionIndex:C,metrics:T,rect:P}),h+=V*z.scale+l):(S.push({glyph:M,imageName:B,x:h,y:f+E,vertical:F,scale:z.scale,fontStack:z.fontStack,sectionIndex:C,metrics:T,rect:P}),h+=T.advance*z.scale+l);}0!==S.length&&(y=Math.max(h-l,y),Mu(S,0,S.length-1,m,k)),h=0;var N=a*w+k;A.lineOffset=Math.max(k,_),f+=N,d=Math.max(N,d),++v;}else f+=a,++v;}var K,G=f- -17,Z=Cu(o),X=Z.horizontalAlign,J=Z.verticalAlign;(function(t,e,r,n,i,a,o,s,u){var l,p=(e-r)*i;l=a!==o?-s*n- -17:(-n*u+.5)*o;for(var c=0,h=t;c<h.length;c+=1)for(var f=0,y=h[c].positionedGlyphs;f<y.length;f+=1){var d=y[f];d.x+=p,d.y+=l;}})(t.positionedLines,m,X,J,y,d,a,G,i.length),t.top+=-J*G,t.bottom=t.top+G,t.left+=-X*y,t.right=t.left+y;}(E,e,r,n,m,o,s,u,c,l,h,d),!function(t){for(var e=0,r=t;e<r.length;e+=1)if(0!==r[e].positionedGlyphs.length)return !1;return !0}(M)&&E}xu.fromFeature=function(t,e){for(var r=new xu,n=0;n<t.sections.length;n++){var i=t.sections[n];i.image?r.addImageSection(i):r.addTextSection(i,e);}return r},xu.prototype.length=function(){return this.text.length},xu.prototype.getSection=function(t){return this.sections[this.sectionIndex[t]]},xu.prototype.getSectionIndex=function(t){return this.sectionIndex[t]},xu.prototype.getCharCode=function(t){return this.text.charCodeAt(t)},xu.prototype.verticalizePunctuation=function(){this.text=function(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r+1)||null,i=t.charCodeAt(r-1)||null;e+=n&&Zn(n)&&!Ns[t[r+1]]||i&&Zn(i)&&!Ns[t[r-1]]||!Ns[t[r]]?t[r]:Ns[t[r]];}return e}(this.text);},xu.prototype.trim=function(){for(var t=0,e=0;e<this.text.length&&wu[this.text.charCodeAt(e)];e++)t++;for(var r=this.text.length,n=this.text.length-1;n>=0&&n>=t&&wu[this.text.charCodeAt(n)];n--)r--;this.text=this.text.substring(t,r),this.sectionIndex=this.sectionIndex.slice(t,r);},xu.prototype.substring=function(t,e){var r=new xu;return r.text=this.text.substring(t,e),r.sectionIndex=this.sectionIndex.slice(t,e),r.sections=this.sections,r},xu.prototype.toString=function(){return this.text},xu.prototype.getMaxScale=function(){var t=this;return this.sectionIndex.reduce((function(e,r){return Math.max(e,t.sections[r].scale)}),0)},xu.prototype.addTextSection=function(t,e){this.text+=t.text,this.sections.push(gu.forText(t.scale,t.fontStack||e));for(var r=this.sections.length-1,n=0;n<t.text.length;++n)this.sectionIndex.push(r);},xu.prototype.addImageSection=function(t){var e=t.image?t.image.name:"";if(0!==e.length){var r=this.getNextImageSectionCharCode();r?(this.text+=String.fromCharCode(r),this.sections.push(gu.forImage(e)),this.sectionIndex.push(this.sections.length-1)):_("Reached maximum number of images 6401");}else _("Can't add FormattedSection with an empty image.");},xu.prototype.getNextImageSectionCharCode=function(){return this.imageSectionID?this.imageSectionID>=63743?null:++this.imageSectionID:(this.imageSectionID=57344,this.imageSectionID)};var wu={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},_u={};function Au(t,e,r,n,i,a){if(e.imageName){var o=n[e.imageName];return o?o.displaySize[0]*e.scale*24/a+i:0}var s=r[e.fontStack],u=s&&s[t];return u?u.metrics.advance*e.scale+i:0}function Su(t,e,r,n){var i=Math.pow(t-e,2);return n?t<e?i/2:2*i:i+Math.abs(r)*r}function ku(t,e,r){var n=0;return 10===t&&(n-=1e4),r&&(n+=150),40!==t&&65288!==t||(n+=50),41!==e&&65289!==e||(n+=50),n}function Iu(t,e,r,n,i,a){for(var o=null,s=Su(e,r,i,a),u=0,l=n;u<l.length;u+=1){var p=l[u],c=Su(e-p.x,r,i,a)+p.badness;c<=s&&(o=p,s=c);}return {index:t,x:e,priorBreak:o,badness:s}}function zu(t,e,r,n,i,a,o){if("point"!==a)return [];if(!t)return [];for(var s,u=[],l=function(t,e,r,n,i,a){for(var o=0,s=0;s<t.length();s++){var u=t.getSection(s);o+=Au(t.getCharCode(s),u,n,i,e,a);}return o/Math.max(1,Math.ceil(o/r))}(t,e,r,n,i,o),p=t.text.indexOf("​")>=0,c=0,h=0;h<t.length();h++){var f=t.getSection(h),y=t.getCharCode(h);if(wu[y]||(c+=Au(y,f,n,i,e,o)),h<t.length()-1){var d=!((s=y)<11904||!(Nn["Bopomofo Extended"](s)||Nn.Bopomofo(s)||Nn["CJK Compatibility Forms"](s)||Nn["CJK Compatibility Ideographs"](s)||Nn["CJK Compatibility"](s)||Nn["CJK Radicals Supplement"](s)||Nn["CJK Strokes"](s)||Nn["CJK Symbols and Punctuation"](s)||Nn["CJK Unified Ideographs Extension A"](s)||Nn["CJK Unified Ideographs"](s)||Nn["Enclosed CJK Letters and Months"](s)||Nn["Halfwidth and Fullwidth Forms"](s)||Nn.Hiragana(s)||Nn["Ideographic Description Characters"](s)||Nn["Kangxi Radicals"](s)||Nn["Katakana Phonetic Extensions"](s)||Nn.Katakana(s)||Nn["Vertical Forms"](s)||Nn["Yi Radicals"](s)||Nn["Yi Syllables"](s)));(_u[y]||d||f.imageName)&&u.push(Iu(h+1,c,l,u,ku(y,t.getCharCode(h+1),d&&p),!1));}}return function t(e){return e?t(e.priorBreak).concat(e.index):[]}(Iu(t.length(),c,l,u,0,!0))}function Cu(t){var e=.5,r=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;}return {horizontalAlign:e,verticalAlign:r}}function Mu(t,e,r,n,i){if(n||i)for(var a=t[r],o=(t[r].x+a.metrics.advance*a.scale)*n,s=e;s<=r;s++)t[s].x-=o,t[s].y+=i;}function Eu(t,e,r,n,i,a){var o,s=t.image;if(s.content){var u=s.content,l=s.pixelRatio||1;o=[u[0]/l,u[1]/l,s.displaySize[0]-u[2]/l,s.displaySize[1]-u[3]/l];}var p,c,h,f,y=e.left*a,d=e.right*a;"width"===r||"both"===r?(f=i[0]+y-n[3],c=i[0]+d+n[1]):c=(f=i[0]+(y+d-s.displaySize[0])/2)+s.displaySize[0];var m=e.top*a,v=e.bottom*a;return "height"===r||"both"===r?(p=i[1]+m-n[0],h=i[1]+v+n[2]):h=(p=i[1]+(m+v-s.displaySize[1])/2)+s.displaySize[1],{image:s,top:p,right:c,bottom:h,left:f,collisionPadding:o}}_u[10]=!0,_u[32]=!0,_u[38]=!0,_u[40]=!0,_u[41]=!0,_u[43]=!0,_u[45]=!0,_u[47]=!0,_u[173]=!0,_u[183]=!0,_u[8203]=!0,_u[8208]=!0,_u[8211]=!0,_u[8231]=!0;var Tu=function(t){function e(e,r,n,i){t.call(this,e,r),this.angle=n,void 0!==i&&(this.segment=i);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.clone=function(){return new e(this.x,this.y,this.angle,this.segment)},e}(i);function Pu(t,e){var r=e.expression;if("constant"===r.kind)return {kind:"constant",layoutSize:r.evaluate(new ai(t+1))};if("source"===r.kind)return {kind:"source"};for(var n=r.zoomStops,i=r.interpolationType,a=0;a<n.length&&n[a]<=t;)a++;for(var o=a=Math.max(0,a-1);o<n.length&&n[o]<t+1;)o++;o=Math.min(n.length-1,o);var s=n[a],u=n[o];return "composite"===r.kind?{kind:"composite",minZoom:s,maxZoom:u,interpolationType:i}:{kind:"camera",minZoom:s,maxZoom:u,minSize:r.evaluate(new ai(s)),maxSize:r.evaluate(new ai(u)),interpolationType:i}}function Bu(t,e,r){var n=e.uSize,i=r.lowerSize;return "source"===t.kind?i/128:"composite"===t.kind?qe(i/128,r.upperSize/128,e.uSizeT):n}function Vu(t,e){var r=0,n=0;if("constant"===t.kind)n=t.layoutSize;else if("source"!==t.kind){var i=t.interpolationType,a=i?l(nr.interpolationFactor(i,e,t.minZoom,t.maxZoom),0,1):0;"camera"===t.kind?n=qe(t.minSize,t.maxSize,a):r=a;}return {uSizeT:r,uSize:n}}Dn("Anchor",Tu);var Fu=Object.freeze({__proto__:null,getSizeData:Pu,evaluateSizeForFeature:Bu,evaluateSizeForZoom:Vu,SIZE_PACK_FACTOR:128});function Du(t,e,r,n,i){if(void 0===e.segment)return !0;for(var a=e,o=e.segment+1,s=0;s>-r/2;){if(--o<0)return !1;s-=t[o].dist(a),a=t[o];}s+=t[o].dist(t[o+1]),o++;for(var u=[],l=0;s<r/2;){var p=t[o],c=t[o+1];if(!c)return !1;var h=t[o-1].angleTo(p)-p.angleTo(c);for(h=Math.abs((h+3*Math.PI)%(2*Math.PI)-Math.PI),u.push({distance:s,angleDelta:h}),l+=h;s-u[0].distance>n;)l-=u.shift().angleDelta;if(l>i)return !1;o++,s+=p.dist(c);}return !0}function Lu(t){for(var e=0,r=0;r<t.length-1;r++)e+=t[r].dist(t[r+1]);return e}function Ru(t,e,r){return t?.6*e*r:0}function Ou(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function Uu(t,e,r,n,i,a){for(var o=Ru(r,i,a),s=Ou(r,n)*a,u=0,l=Lu(t)/2,p=0;p<t.length-1;p++){var c=t[p],h=t[p+1],f=c.dist(h);if(u+f>l){var y=(l-u)/f,d=qe(c.x,h.x,y),m=qe(c.y,h.y,y),v=new Tu(d,m,h.angleTo(c),p);return v._round(),!o||Du(t,v,s,o,e)?v:void 0}u+=f;}}function ju(t,e,r,n,i,a,o,s,u){var l=Ru(n,a,o),p=Ou(n,i),c=p*o,h=0===t[0].x||t[0].x===u||0===t[0].y||t[0].y===u;return e-c<e/4&&(e=c+e/4),function t(e,r,n,i,a,o,s,u,l){for(var p=o/2,c=Lu(e),h=0,f=r-n,y=[],d=0;d<e.length-1;d++){for(var m=e[d],v=e[d+1],g=m.dist(v),x=v.angleTo(m);f+n<h+g;){var b=((f+=n)-h)/g,w=qe(m.x,v.x,b),_=qe(m.y,v.y,b);if(w>=0&&w<l&&_>=0&&_<l&&f-p>=0&&f+p<=c){var A=new Tu(w,_,x,d);A._round(),i&&!Du(e,A,o,i,a)||y.push(A);}}h+=g;}return u||y.length||s||(y=t(e,h/2,n,i,a,o,s,!0,l)),y}(t,h?e/2*s%e:(p/2+2*a)*o*s%e,e,l,r,c,h,!1,u)}function qu(t,e,r,n,a){for(var o=[],s=0;s<t.length;s++)for(var u=t[s],l=void 0,p=0;p<u.length-1;p++){var c=u[p],h=u[p+1];c.x<e&&h.x<e||(c.x<e?c=new i(e,c.y+(e-c.x)/(h.x-c.x)*(h.y-c.y))._round():h.x<e&&(h=new i(e,c.y+(e-c.x)/(h.x-c.x)*(h.y-c.y))._round()),c.y<r&&h.y<r||(c.y<r?c=new i(c.x+(r-c.y)/(h.y-c.y)*(h.x-c.x),r)._round():h.y<r&&(h=new i(c.x+(r-c.y)/(h.y-c.y)*(h.x-c.x),r)._round()),c.x>=n&&h.x>=n||(c.x>=n?c=new i(n,c.y+(n-c.x)/(h.x-c.x)*(h.y-c.y))._round():h.x>=n&&(h=new i(n,c.y+(n-c.x)/(h.x-c.x)*(h.y-c.y))._round()),c.y>=a&&h.y>=a||(c.y>=a?c=new i(c.x+(a-c.y)/(h.y-c.y)*(h.x-c.x),a)._round():h.y>=a&&(h=new i(c.x+(a-c.y)/(h.y-c.y)*(h.x-c.x),a)._round()),l&&c.equals(l[l.length-1])||o.push(l=[c]),l.push(h)))));}return o}function Nu(t,e,r,n){var a=[],o=t.image,s=o.pixelRatio,u=o.paddedRect.w-2,l=o.paddedRect.h-2,p=t.right-t.left,c=t.bottom-t.top,h=o.stretchX||[[0,u]],f=o.stretchY||[[0,l]],y=function(t,e){return t+e[1]-e[0]},d=h.reduce(y,0),m=f.reduce(y,0),v=u-d,g=l-m,x=0,b=d,w=0,_=m,A=0,S=v,k=0,I=g;if(o.content&&n){var z=o.content;x=Ku(h,0,z[0]),w=Ku(f,0,z[1]),b=Ku(h,z[0],z[2]),_=Ku(f,z[1],z[3]),A=z[0]-x,k=z[1]-w,S=z[2]-z[0]-b,I=z[3]-z[1]-_;}var C=function(n,a,u,l){var h=Zu(n.stretch-x,b,p,t.left),f=Xu(n.fixed-A,S,n.stretch,d),y=Zu(a.stretch-w,_,c,t.top),v=Xu(a.fixed-k,I,a.stretch,m),g=Zu(u.stretch-x,b,p,t.left),z=Xu(u.fixed-A,S,u.stretch,d),C=Zu(l.stretch-w,_,c,t.top),M=Xu(l.fixed-k,I,l.stretch,m),E=new i(h,y),T=new i(g,y),P=new i(g,C),B=new i(h,C),V=new i(f/s,v/s),F=new i(z/s,M/s),D=e*Math.PI/180;if(D){var L=Math.sin(D),R=Math.cos(D),O=[R,-L,L,R];E._matMult(O),T._matMult(O),B._matMult(O),P._matMult(O);}var U=n.stretch+n.fixed,j=a.stretch+a.fixed;return {tl:E,tr:T,bl:B,br:P,tex:{x:o.paddedRect.x+1+U,y:o.paddedRect.y+1+j,w:u.stretch+u.fixed-U,h:l.stretch+l.fixed-j},writingMode:void 0,glyphOffset:[0,0],sectionIndex:0,pixelOffsetTL:V,pixelOffsetBR:F,minFontScaleX:S/s/p,minFontScaleY:I/s/c,isSDF:r}};if(n&&(o.stretchX||o.stretchY))for(var M=Gu(h,v,d),E=Gu(f,g,m),T=0;T<M.length-1;T++)for(var P=M[T],B=M[T+1],V=0;V<E.length-1;V++)a.push(C(P,E[V],B,E[V+1]));else a.push(C({fixed:0,stretch:-1},{fixed:0,stretch:-1},{fixed:0,stretch:u+1},{fixed:0,stretch:l+1}));return a}function Ku(t,e,r){for(var n=0,i=0,a=t;i<a.length;i+=1){var o=a[i];n+=Math.max(e,Math.min(r,o[1]))-Math.max(e,Math.min(r,o[0]));}return n}function Gu(t,e,r){for(var n=[{fixed:-1,stretch:0}],i=0,a=t;i<a.length;i+=1){var o=a[i],s=o[0],u=o[1],l=n[n.length-1];n.push({fixed:s-l.stretch,stretch:l.stretch}),n.push({fixed:s-l.stretch,stretch:l.stretch+(u-s)});}return n.push({fixed:e+1,stretch:r}),n}function Zu(t,e,r,n){return t/e*r+n}function Xu(t,e,r,n){return t-e*r/n}var Ju=function(t,e,r,n,a,o,s,u,l,p){if(this.boxStartIndex=t.length,l){var c=o.top,h=o.bottom,f=o.collisionPadding;f&&(c-=f[1],h+=f[3]);var y=h-c;y>0&&(y=Math.max(10,y),this.circleDiameter=y);}else {var d=o.top*s-u,m=o.bottom*s+u,v=o.left*s-u,g=o.right*s+u,x=o.collisionPadding;if(x&&(v-=x[0]*s,d-=x[1]*s,g+=x[2]*s,m+=x[3]*s),p){var b=new i(v,d),w=new i(g,d),_=new i(v,m),A=new i(g,m),S=p*Math.PI/180;b._rotate(S),w._rotate(S),_._rotate(S),A._rotate(S),v=Math.min(b.x,w.x,_.x,A.x),g=Math.max(b.x,w.x,_.x,A.x),d=Math.min(b.y,w.y,_.y,A.y),m=Math.max(b.y,w.y,_.y,A.y);}t.emplaceBack(e.x,e.y,v,d,g,m,r,n,a);}this.boxEndIndex=t.length;},Hu=function(t,e){if(void 0===t&&(t=[]),void 0===e&&(e=Yu),this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(var r=(this.length>>1)-1;r>=0;r--)this._down(r);};function Yu(t,e){return t<e?-1:t>e?1:0}function $u(t,e,r){void 0===e&&(e=1),void 0===r&&(r=!1);for(var n=1/0,a=1/0,o=-1/0,s=-1/0,u=t[0],l=0;l<u.length;l++){var p=u[l];(!l||p.x<n)&&(n=p.x),(!l||p.y<a)&&(a=p.y),(!l||p.x>o)&&(o=p.x),(!l||p.y>s)&&(s=p.y);}var c=Math.min(o-n,s-a),h=c/2,f=new Hu([],Wu);if(0===c)return new i(n,a);for(var y=n;y<o;y+=c)for(var d=a;d<s;d+=c)f.push(new Qu(y+h,d+h,h,t));for(var m=function(t){for(var e=0,r=0,n=0,i=t[0],a=0,o=i.length,s=o-1;a<o;s=a++){var u=i[a],l=i[s],p=u.x*l.y-l.x*u.y;r+=(u.x+l.x)*p,n+=(u.y+l.y)*p,e+=3*p;}return new Qu(r/e,n/e,0,t)}(t),v=f.length;f.length;){var g=f.pop();(g.d>m.d||!m.d)&&(m=g,r&&console.log("found best %d after %d probes",Math.round(1e4*g.d)/1e4,v)),g.max-m.d<=e||(f.push(new Qu(g.p.x-(h=g.h/2),g.p.y-h,h,t)),f.push(new Qu(g.p.x+h,g.p.y-h,h,t)),f.push(new Qu(g.p.x-h,g.p.y+h,h,t)),f.push(new Qu(g.p.x+h,g.p.y+h,h,t)),v+=4);}return r&&(console.log("num probes: "+v),console.log("best distance: "+m.d)),m.p}function Wu(t,e){return e.max-t.max}function Qu(t,e,r,n){this.p=new i(t,e),this.h=r,this.d=function(t,e){for(var r=!1,n=1/0,i=0;i<e.length;i++)for(var a=e[i],o=0,s=a.length,u=s-1;o<s;u=o++){var l=a[o],p=a[u];l.y>t.y!=p.y>t.y&&t.x<(p.x-l.x)*(t.y-l.y)/(p.y-l.y)+l.x&&(r=!r),n=Math.min(n,Xa(t,l,p));}return (r?1:-1)*Math.sqrt(n)}(this.p,n),this.max=this.d+this.h*Math.SQRT2;}Hu.prototype.push=function(t){this.data.push(t),this.length++,this._up(this.length-1);},Hu.prototype.pop=function(){if(0!==this.length){var t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}},Hu.prototype.peek=function(){return this.data[0]},Hu.prototype._up=function(t){for(var e=this.data,r=this.compare,n=e[t];t>0;){var i=t-1>>1,a=e[i];if(r(n,a)>=0)break;e[t]=a,t=i;}e[t]=n;},Hu.prototype._down=function(t){for(var e=this.data,r=this.compare,n=this.length>>1,i=e[t];t<n;){var a=1+(t<<1),o=e[a],s=a+1;if(s<this.length&&r(e[s],o)<0&&(a=s,o=e[s]),r(o,i)>=0)break;e[t]=o,t=a;}e[t]=i;};var tl=Number.POSITIVE_INFINITY;function el(t,e){return e[1]!==tl?function(t,e,r){var n=0,i=0;switch(e=Math.abs(e),r=Math.abs(r),t){case"top-right":case"top-left":case"top":i=r-7;break;case"bottom-right":case"bottom-left":case"bottom":i=7-r;}switch(t){case"top-right":case"bottom-right":case"right":n=-e;break;case"top-left":case"bottom-left":case"left":n=e;}return [n,i]}(t,e[0],e[1]):function(t,e){var r=0,n=0;e<0&&(e=0);var i=e/Math.sqrt(2);switch(t){case"top-right":case"top-left":n=i-7;break;case"bottom-right":case"bottom-left":n=7-i;break;case"bottom":n=7-e;break;case"top":n=e-7;}switch(t){case"top-right":case"bottom-right":r=-i;break;case"top-left":case"bottom-left":r=i;break;case"left":r=e;break;case"right":r=-e;}return [r,n]}(t,e[0])}function rl(t){switch(t){case"right":case"top-right":case"bottom-right":return "right";case"left":case"top-left":case"bottom-left":return "left"}return "center"}function nl(t,e,r,n,a,o,s,u,l,p,c,h,f,y,d){var m=function(t,e,r,n,a,o,s,u){for(var l=n.layout.get("text-rotate").evaluate(o,{})*Math.PI/180,p=[],c=0,h=e.positionedLines;c<h.length;c+=1)for(var f=h[c],y=0,d=f.positionedGlyphs;y<d.length;y+=1){var m=d[y];if(m.rect){var v=m.rect||{},g=4,x=!0,b=1,w=0,_=(a||u)&&m.vertical,A=m.metrics.advance*m.scale/2;if(u&&e.verticalizable&&(w=f.lineOffset/2-(m.imageName?-(24-m.metrics.width*m.scale)/2:24*(m.scale-1))),m.imageName){var S=s[m.imageName];x=S.sdf,g=1/(b=S.pixelRatio);}var k=a?[m.x+A,m.y]:[0,0],I=a?[0,0]:[m.x+A+r[0],m.y+r[1]-w],z=[0,0];_&&(z=I,I=[0,0]);var C=(m.metrics.left-g)*m.scale-A+I[0],M=(-m.metrics.top-g)*m.scale+I[1],E=C+v.w*m.scale/b,T=M+v.h*m.scale/b,P=new i(C,M),B=new i(E,M),V=new i(C,T),F=new i(E,T);if(_){var D=new i(-A,A- -17),L=-Math.PI/2,R=12-A,O=new i(22-R,-(m.imageName?R:0)),U=new(Function.prototype.bind.apply(i,[null].concat(z)));P._rotateAround(L,D)._add(O)._add(U),B._rotateAround(L,D)._add(O)._add(U),V._rotateAround(L,D)._add(O)._add(U),F._rotateAround(L,D)._add(O)._add(U);}if(l){var j=Math.sin(l),q=Math.cos(l),N=[q,-j,j,q];P._matMult(N),B._matMult(N),V._matMult(N),F._matMult(N);}var K=new i(0,0),G=new i(0,0);p.push({tl:P,tr:B,bl:V,br:F,tex:v,writingMode:e.writingMode,glyphOffset:k,sectionIndex:m.sectionIndex,isSDF:x,pixelOffsetTL:K,pixelOffsetBR:G,minFontScaleX:0,minFontScaleY:0});}}return p}(0,r,u,a,o,s,n,t.allowVerticalPlacement),v=t.textSizeData,g=null;"source"===v.kind?(g=[128*a.layout.get("text-size").evaluate(s,{})])[0]>32640&&_(t.layerIds[0]+': Value for "text-size" is >= 255. Reduce your "text-size".'):"composite"===v.kind&&((g=[128*y.compositeTextSizes[0].evaluate(s,{},d),128*y.compositeTextSizes[1].evaluate(s,{},d)])[0]>32640||g[1]>32640)&&_(t.layerIds[0]+': Value for "text-size" is >= 255. Reduce your "text-size".'),t.addSymbols(t.text,m,g,u,o,s,p,e,l.lineStartIndex,l.lineLength,f,d);for(var x=0,b=c;x<b.length;x+=1)h[b[x]]=t.text.placedSymbolArray.length-1;return 4*m.length}function il(t){for(var e in t)return t[e];return null}function al(t,e,r,n){var i=t.compareText;if(e in i){for(var a=i[e],o=a.length-1;o>=0;o--)if(n.dist(a[o])<r)return !0}else i[e]=[];return i[e].push(n),!1}var ol=vs.VectorTileFeature.types,sl=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}];function ul(t,e,r,n,i,a,o,s,u,l,p,c,h){var f=s?Math.min(32640,Math.round(s[0])):0,y=s?Math.min(32640,Math.round(s[1])):0;t.emplaceBack(e,r,Math.round(32*n),Math.round(32*i),a,o,(f<<1)+(u?1:0),y,16*l,16*p,256*c,256*h);}function ll(t,e,r){t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r);}function pl(t){for(var e=0,r=t.sections;e<r.length;e+=1)if(Hn(r[e].text))return !0;return !1}var cl=function(t){this.layoutVertexArray=new Ti,this.indexArray=new Ri,this.programConfigurations=t,this.segments=new aa,this.dynamicLayoutVertexArray=new Pi,this.opacityVertexArray=new Bi,this.placedSymbolArray=new $i;};cl.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length&&0===this.indexArray.length&&0===this.dynamicLayoutVertexArray.length&&0===this.opacityVertexArray.length},cl.prototype.upload=function(t,e,r,n){this.isEmpty()||(r&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Ls.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,Rs.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,sl,!0),this.opacityVertexBuffer.itemSize=1),(r||n)&&this.programConfigurations.upload(t));},cl.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy());},Dn("SymbolBuffers",cl);var hl=function(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new aa,this.collisionVertexArray=new Li;};hl.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,Os.members,!0);},hl.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy());},Dn("CollisionBuffers",hl);var fl=function(t){this.collisionBoxArray=t.collisionBoxArray,this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.pixelRatio=t.pixelRatio,this.sourceLayerIndex=t.sourceLayerIndex,this.hasPattern=!1,this.hasRTLText=!1,this.sortKeyRanges=[],this.collisionCircleArray=[],this.placementInvProjMatrix=no([]),this.placementViewportMatrix=no([]);var e=this.layers[0]._unevaluatedLayout._values;this.textSizeData=Pu(this.zoom,e["text-size"]),this.iconSizeData=Pu(this.zoom,e["icon-size"]);var r=this.layers[0].layout,n=r.get("symbol-sort-key"),i=r.get("symbol-z-order");this.sortFeaturesByKey="viewport-y"!==i&&void 0!==n.constantOr(1),this.sortFeaturesByY=("viewport-y"===i||"auto"===i&&!this.sortFeaturesByKey)&&(r.get("text-allow-overlap")||r.get("icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement")),"point"===r.get("symbol-placement")&&(this.writingModes=r.get("text-writing-mode").map((function(t){return vu[t]}))),this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id})),this.sourceID=t.sourceID;};fl.prototype.createArrays=function(){this.text=new cl(new Pa(this.layers,this.zoom,(function(t){return /^text/.test(t)}))),this.icon=new cl(new Pa(this.layers,this.zoom,(function(t){return /^icon/.test(t)}))),this.glyphOffsetArray=new ta,this.lineVertexArray=new ea,this.symbolInstances=new Qi;},fl.prototype.calculateGlyphDependencies=function(t,e,r,n,i){for(var a=0;a<t.length;a++)if(e[t.charCodeAt(a)]=!0,(r||n)&&i){var o=Ns[t.charAt(a)];o&&(e[o.charCodeAt(0)]=!0);}},fl.prototype.populate=function(t,e,r){var n=this.layers[0],i=n.layout,a=i.get("text-font"),o=i.get("text-field"),s=i.get("icon-image"),u=("constant"!==o.value.kind||o.value.value instanceof ee&&!o.value.value.isEmpty()||o.value.value.toString().length>0)&&("constant"!==a.value.kind||a.value.value.length>0),l="constant"!==s.value.kind||!!s.value.value||Object.keys(s.parameters).length>0,p=i.get("symbol-sort-key");if(this.features=[],u||l){for(var c=e.iconDependencies,h=e.glyphDependencies,f=e.availableImages,y=new ai(this.zoom),d=0,m=t;d<m.length;d+=1){var v=m[d],g=v.feature,x=v.id,b=v.index,w=v.sourceLayerIndex,_=n._featureFilter.needGeometry,A={type:g.type,id:x,properties:g.properties,geometry:_?La(g):[]};if(n._featureFilter.filter(y,A,r)){_||(A.geometry=La(g));var S=void 0;if(u){var k=n.getValueAndResolveTokens("text-field",A,r,f),I=ee.factory(k);pl(I)&&(this.hasRTLText=!0),(!this.hasRTLText||"unavailable"===ri()||this.hasRTLText&&ii.isParsed())&&(S=qs(I,n,A));}var z=void 0;if(l){var C=n.getValueAndResolveTokens("icon-image",A,r,f);z=C instanceof re?C:re.fromString(C);}if(S||z){var M=this.sortFeaturesByKey?p.evaluate(A,{},r):void 0,E={id:x,text:S,icon:z,index:b,sourceLayerIndex:w,geometry:La(g),properties:g.properties,type:ol[g.type],sortKey:M};if(this.features.push(E),z&&(c[z.name]=!0),S){var T=a.evaluate(A,{},r).join(","),P="map"===i.get("text-rotation-alignment")&&"point"!==i.get("symbol-placement");this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(vu.vertical)>=0;for(var B=0,V=S.sections;B<V.length;B+=1){var F=V[B];if(F.image)c[F.image.name]=!0;else {var D=Kn(S.toString()),L=F.fontStack||T,R=h[L]=h[L]||{};this.calculateGlyphDependencies(F.text,R,P,this.allowVerticalPlacement,D);}}}}}}"line"===i.get("symbol-placement")&&(this.features=function(t){var e={},r={},n=[],i=0;function a(e){n.push(t[e]),i++;}function o(t,e,i){var a=r[t];return delete r[t],r[e]=a,n[a].geometry[0].pop(),n[a].geometry[0]=n[a].geometry[0].concat(i[0]),a}function s(t,r,i){var a=e[r];return delete e[r],e[t]=a,n[a].geometry[0].shift(),n[a].geometry[0]=i[0].concat(n[a].geometry[0]),a}function u(t,e,r){var n=r?e[0][e[0].length-1]:e[0][0];return t+":"+n.x+":"+n.y}for(var l=0;l<t.length;l++){var p=t[l],c=p.geometry,h=p.text?p.text.toString():null;if(h){var f=u(h,c),y=u(h,c,!0);if(f in r&&y in e&&r[f]!==e[y]){var d=s(f,y,c),m=o(f,y,n[d].geometry);delete e[f],delete r[y],r[u(h,n[m].geometry,!0)]=m,n[d].geometry=null;}else f in r?o(f,y,c):y in e?s(f,y,c):(a(l),e[f]=i-1,r[y]=i-1);}else a(l);}return n.filter((function(t){return t.geometry}))}(this.features)),this.sortFeaturesByKey&&this.features.sort((function(t,e){return t.sortKey-e.sortKey}));}},fl.prototype.update=function(t,e,r){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,r),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,r));},fl.prototype.isEmpty=function(){return 0===this.symbolInstances.length&&!this.hasRTLText},fl.prototype.uploadPending=function(){return !this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload},fl.prototype.upload=function(t){!this.uploaded&&this.hasDebugData()&&(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0;},fl.prototype.destroyDebugData=function(){this.textCollisionBox.destroy(),this.iconCollisionBox.destroy();},fl.prototype.destroy=function(){this.text.destroy(),this.icon.destroy(),this.hasDebugData()&&this.destroyDebugData();},fl.prototype.addToLineVertexArray=function(t,e){var r=this.lineVertexArray.length;if(void 0!==t.segment){for(var n=t.dist(e[t.segment+1]),i=t.dist(e[t.segment]),a={},o=t.segment+1;o<e.length;o++)a[o]={x:e[o].x,y:e[o].y,tileUnitDistanceFromAnchor:n},o<e.length-1&&(n+=e[o+1].dist(e[o]));for(var s=t.segment||0;s>=0;s--)a[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:i},s>0&&(i+=e[s-1].dist(e[s]));for(var u=0;u<e.length;u++){var l=a[u];this.lineVertexArray.emplaceBack(l.x,l.y,l.tileUnitDistanceFromAnchor);}}return {lineStartIndex:r,lineLength:this.lineVertexArray.length-r}},fl.prototype.addSymbols=function(t,e,r,n,i,a,o,s,u,l,p,c){for(var h=t.indexArray,f=t.layoutVertexArray,y=t.segments.prepareSegment(4*e.length,f,h,a.sortKey),d=this.glyphOffsetArray.length,m=y.vertexLength,v=this.allowVerticalPlacement&&o===vu.vertical?Math.PI/2:0,g=a.text&&a.text.sections,x=0;x<e.length;x++){var b=e[x],w=b.tl,_=b.tr,A=b.bl,S=b.br,k=b.tex,I=b.pixelOffsetTL,z=b.pixelOffsetBR,C=b.minFontScaleX,M=b.minFontScaleY,E=b.glyphOffset,T=b.isSDF,P=b.sectionIndex,B=y.vertexLength,V=E[1];ul(f,s.x,s.y,w.x,V+w.y,k.x,k.y,r,T,I.x,I.y,C,M),ul(f,s.x,s.y,_.x,V+_.y,k.x+k.w,k.y,r,T,z.x,I.y,C,M),ul(f,s.x,s.y,A.x,V+A.y,k.x,k.y+k.h,r,T,I.x,z.y,C,M),ul(f,s.x,s.y,S.x,V+S.y,k.x+k.w,k.y+k.h,r,T,z.x,z.y,C,M),ll(t.dynamicLayoutVertexArray,s,v),h.emplaceBack(B,B+1,B+2),h.emplaceBack(B+1,B+2,B+3),y.vertexLength+=4,y.primitiveLength+=2,this.glyphOffsetArray.emplaceBack(E[0]),x!==e.length-1&&P===e[x+1].sectionIndex||t.programConfigurations.populatePaintArrays(f.length,a,a.index,{},c,g&&g[P]);}t.placedSymbolArray.emplaceBack(s.x,s.y,d,this.glyphOffsetArray.length-d,m,u,l,s.segment,r?r[0]:0,r?r[1]:0,n[0],n[1],o,0,!1,0,p);},fl.prototype._addCollisionDebugVertex=function(t,e,r,n,i,a){return e.emplaceBack(0,0),t.emplaceBack(r.x,r.y,n,i,Math.round(a.x),Math.round(a.y))},fl.prototype.addCollisionDebugVertices=function(t,e,r,n,a,o,s){var u=a.segments.prepareSegment(4,a.layoutVertexArray,a.indexArray),l=u.vertexLength,p=a.layoutVertexArray,c=a.collisionVertexArray,h=s.anchorX,f=s.anchorY;this._addCollisionDebugVertex(p,c,o,h,f,new i(t,e)),this._addCollisionDebugVertex(p,c,o,h,f,new i(r,e)),this._addCollisionDebugVertex(p,c,o,h,f,new i(r,n)),this._addCollisionDebugVertex(p,c,o,h,f,new i(t,n)),u.vertexLength+=4;var y=a.indexArray;y.emplaceBack(l,l+1),y.emplaceBack(l+1,l+2),y.emplaceBack(l+2,l+3),y.emplaceBack(l+3,l),u.primitiveLength+=4;},fl.prototype.addDebugCollisionBoxes=function(t,e,r,n){for(var i=t;i<e;i++){var a=this.collisionBoxArray.get(i);this.addCollisionDebugVertices(a.x1,a.y1,a.x2,a.y2,n?this.textCollisionBox:this.iconCollisionBox,a.anchorPoint,r);}},fl.prototype.generateCollisionDebugBuffers=function(){this.hasDebugData()&&this.destroyDebugData(),this.textCollisionBox=new hl(Fi,Us.members,Ki),this.iconCollisionBox=new hl(Fi,Us.members,Ki);for(var t=0;t<this.symbolInstances.length;t++){var e=this.symbolInstances.get(t);this.addDebugCollisionBoxes(e.textBoxStartIndex,e.textBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.verticalTextBoxStartIndex,e.verticalTextBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.iconBoxStartIndex,e.iconBoxEndIndex,e,!1),this.addDebugCollisionBoxes(e.verticalIconBoxStartIndex,e.verticalIconBoxEndIndex,e,!1);}},fl.prototype._deserializeCollisionBoxesForSymbol=function(t,e,r,n,i,a,o,s,u){for(var l={},p=e;p<r;p++){var c=t.get(p);l.textBox={x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2,anchorPointX:c.anchorPointX,anchorPointY:c.anchorPointY},l.textFeatureIndex=c.featureIndex;break}for(var h=n;h<i;h++){var f=t.get(h);l.verticalTextBox={x1:f.x1,y1:f.y1,x2:f.x2,y2:f.y2,anchorPointX:f.anchorPointX,anchorPointY:f.anchorPointY},l.verticalTextFeatureIndex=f.featureIndex;break}for(var y=a;y<o;y++){var d=t.get(y);l.iconBox={x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2,anchorPointX:d.anchorPointX,anchorPointY:d.anchorPointY},l.iconFeatureIndex=d.featureIndex;break}for(var m=s;m<u;m++){var v=t.get(m);l.verticalIconBox={x1:v.x1,y1:v.y1,x2:v.x2,y2:v.y2,anchorPointX:v.anchorPointX,anchorPointY:v.anchorPointY},l.verticalIconFeatureIndex=v.featureIndex;break}return l},fl.prototype.deserializeCollisionBoxes=function(t){this.collisionArrays=[];for(var e=0;e<this.symbolInstances.length;e++){var r=this.symbolInstances.get(e);this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,r.textBoxStartIndex,r.textBoxEndIndex,r.verticalTextBoxStartIndex,r.verticalTextBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex,r.verticalIconBoxStartIndex,r.verticalIconBoxEndIndex));}},fl.prototype.hasTextData=function(){return this.text.segments.get().length>0},fl.prototype.hasIconData=function(){return this.icon.segments.get().length>0},fl.prototype.hasDebugData=function(){return this.textCollisionBox&&this.iconCollisionBox},fl.prototype.hasTextCollisionBoxData=function(){return this.hasDebugData()&&this.textCollisionBox.segments.get().length>0},fl.prototype.hasIconCollisionBoxData=function(){return this.hasDebugData()&&this.iconCollisionBox.segments.get().length>0},fl.prototype.addIndicesForPlacedSymbol=function(t,e){for(var r=t.placedSymbolArray.get(e),n=r.vertexStartIndex+4*r.numGlyphs,i=r.vertexStartIndex;i<n;i+=4)t.indexArray.emplaceBack(i,i+1,i+2),t.indexArray.emplaceBack(i+1,i+2,i+3);},fl.prototype.getSortedSymbolIndexes=function(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes;for(var e=Math.sin(t),r=Math.cos(t),n=[],i=[],a=[],o=0;o<this.symbolInstances.length;++o){a.push(o);var s=this.symbolInstances.get(o);n.push(0|Math.round(e*s.anchorX+r*s.anchorY)),i.push(s.featureIndex);}return a.sort((function(t,e){return n[t]-n[e]||i[e]-i[t]})),a},fl.prototype.addToSortKeyRanges=function(t,e){var r=this.sortKeyRanges[this.sortKeyRanges.length-1];r&&r.sortKey===e?r.symbolInstanceEnd=t+1:this.sortKeyRanges.push({sortKey:e,symbolInstanceStart:t,symbolInstanceEnd:t+1});},fl.prototype.sortFeatures=function(t){var e=this;if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[];for(var r=0,n=this.symbolInstanceIndexes;r<n.length;r+=1){var i=this.symbolInstances.get(n[r]);this.featureSortOrder.push(i.featureIndex),[i.rightJustifiedTextSymbolIndex,i.centerJustifiedTextSymbolIndex,i.leftJustifiedTextSymbolIndex].forEach((function(t,r,n){t>=0&&n.indexOf(t)===r&&e.addIndicesForPlacedSymbol(e.text,t);})),i.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.text,i.verticalPlacedTextSymbolIndex),i.placedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,i.placedIconSymbolIndex),i.verticalPlacedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,i.verticalPlacedIconSymbolIndex);}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray);}},Dn("SymbolBucket",fl,{omit:["layers","collisionBoxArray","features","compareText"]}),fl.MAX_GLYPHS=65535,fl.addDynamicAttributes=ll;var yl=new xi({"symbol-placement":new yi(zt.layout_symbol["symbol-placement"]),"symbol-spacing":new yi(zt.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new yi(zt.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new di(zt.layout_symbol["symbol-sort-key"]),"symbol-z-order":new yi(zt.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new yi(zt.layout_symbol["icon-allow-overlap"]),"icon-ignore-placement":new yi(zt.layout_symbol["icon-ignore-placement"]),"icon-optional":new yi(zt.layout_symbol["icon-optional"]),"icon-rotation-alignment":new yi(zt.layout_symbol["icon-rotation-alignment"]),"icon-size":new di(zt.layout_symbol["icon-size"]),"icon-text-fit":new yi(zt.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new yi(zt.layout_symbol["icon-text-fit-padding"]),"icon-image":new di(zt.layout_symbol["icon-image"]),"icon-rotate":new di(zt.layout_symbol["icon-rotate"]),"icon-padding":new yi(zt.layout_symbol["icon-padding"]),"icon-keep-upright":new yi(zt.layout_symbol["icon-keep-upright"]),"icon-offset":new di(zt.layout_symbol["icon-offset"]),"icon-anchor":new di(zt.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new yi(zt.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new yi(zt.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new yi(zt.layout_symbol["text-rotation-alignment"]),"text-field":new di(zt.layout_symbol["text-field"]),"text-font":new di(zt.layout_symbol["text-font"]),"text-size":new di(zt.layout_symbol["text-size"]),"text-max-width":new di(zt.layout_symbol["text-max-width"]),"text-line-height":new yi(zt.layout_symbol["text-line-height"]),"text-letter-spacing":new di(zt.layout_symbol["text-letter-spacing"]),"text-justify":new di(zt.layout_symbol["text-justify"]),"text-radial-offset":new di(zt.layout_symbol["text-radial-offset"]),"text-variable-anchor":new yi(zt.layout_symbol["text-variable-anchor"]),"text-anchor":new di(zt.layout_symbol["text-anchor"]),"text-max-angle":new yi(zt.layout_symbol["text-max-angle"]),"text-writing-mode":new yi(zt.layout_symbol["text-writing-mode"]),"text-rotate":new di(zt.layout_symbol["text-rotate"]),"text-padding":new yi(zt.layout_symbol["text-padding"]),"text-keep-upright":new yi(zt.layout_symbol["text-keep-upright"]),"text-transform":new di(zt.layout_symbol["text-transform"]),"text-offset":new di(zt.layout_symbol["text-offset"]),"text-allow-overlap":new yi(zt.layout_symbol["text-allow-overlap"]),"text-ignore-placement":new yi(zt.layout_symbol["text-ignore-placement"]),"text-optional":new yi(zt.layout_symbol["text-optional"])}),dl={paint:new xi({"icon-opacity":new di(zt.paint_symbol["icon-opacity"]),"icon-color":new di(zt.paint_symbol["icon-color"]),"icon-halo-color":new di(zt.paint_symbol["icon-halo-color"]),"icon-halo-width":new di(zt.paint_symbol["icon-halo-width"]),"icon-halo-blur":new di(zt.paint_symbol["icon-halo-blur"]),"icon-translate":new yi(zt.paint_symbol["icon-translate"]),"icon-translate-anchor":new yi(zt.paint_symbol["icon-translate-anchor"]),"text-opacity":new di(zt.paint_symbol["text-opacity"]),"text-color":new di(zt.paint_symbol["text-color"],{runtimeType:Ot,getOverride:function(t){return t.textColor},hasOverride:function(t){return !!t.textColor}}),"text-halo-color":new di(zt.paint_symbol["text-halo-color"]),"text-halo-width":new di(zt.paint_symbol["text-halo-width"]),"text-halo-blur":new di(zt.paint_symbol["text-halo-blur"]),"text-translate":new yi(zt.paint_symbol["text-translate"]),"text-translate-anchor":new yi(zt.paint_symbol["text-translate-anchor"])}),layout:yl},ml=function(t){this.type=t.property.overrides?t.property.overrides.runtimeType:Ft,this.defaultValue=t;};ml.prototype.evaluate=function(t){if(t.formattedSection){var e=this.defaultValue.property.overrides;if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default},ml.prototype.eachChild=function(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression);},ml.prototype.outputDefined=function(){return !1},ml.prototype.serialize=function(){return null},Dn("FormatSectionOverride",ml,{omit:["defaultValue"]});var vl=function(t){function e(e){t.call(this,e,dl);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.recalculate=function(e,r){if(t.prototype.recalculate.call(this,e,r),"auto"===this.layout.get("icon-rotation-alignment")&&(this.layout._values["icon-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-rotation-alignment")&&(this.layout._values["text-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]=this.layout.get("text-rotation-alignment")),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){var n=this.layout.get("text-writing-mode");if(n){for(var i=[],a=0,o=n;a<o.length;a+=1){var s=o[a];i.indexOf(s)<0&&i.push(s);}this.layout._values["text-writing-mode"]=i;}else this.layout._values["text-writing-mode"]=["horizontal"];}this._setPaintOverrides();},e.prototype.getValueAndResolveTokens=function(t,e,r,n){var i=this.layout.get(t).evaluate(e,{},r,n),a=this._unevaluatedLayout._values[t];return a.isDataDriven()||Nr(a.value)||!i?i:function(t,e){return e.replace(/{([^{}]+)}/g,(function(e,r){return r in t?String(t[r]):""}))}(e.properties,i)},e.prototype.createBucket=function(t){return new fl(t)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return !1},e.prototype._setPaintOverrides=function(){for(var t=0,r=dl.paint.overridableProperties;t<r.length;t+=1){var n=r[t];if(e.hasPaintOverride(this.layout,n)){var i,a=this.paint.get(n),o=new ml(a),s=new qr(o,a.property.specification);i="constant"===a.value.kind||"source"===a.value.kind?new Gr("source",s):new Zr("composite",s,a.value.zoomStops,a.value._interpolationType),this.paint._values[n]=new hi(a.property,i,a.parameters);}}},e.prototype._handleOverridablePaintPropertyUpdate=function(t,r,n){return !(!this.layout||r.isDataDriven()||n.isDataDriven())&&e.hasPaintOverride(this.layout,t)},e.hasPaintOverride=function(t,e){var r=t.get("text-field"),n=dl.paint.properties[e],i=!1,a=function(t){for(var e=0,r=t;e<r.length;e+=1)if(n.overrides&&n.overrides.hasOverride(r[e]))return void(i=!0)};if("constant"===r.value.kind&&r.value.value instanceof ee)a(r.value.value.sections);else if("source"===r.value.kind){var o=function(t){i||(t instanceof se&&ae(t.value)===Nt?a(t.value.sections):t instanceof ce?a(t.sections):t.eachChild(o));},s=r.value;s._styleExpression&&o(s._styleExpression.expression);}return i},e}(bi),gl={paint:new xi({"background-color":new yi(zt.paint_background["background-color"]),"background-pattern":new vi(zt.paint_background["background-pattern"]),"background-opacity":new yi(zt.paint_background["background-opacity"])})},xl=function(t){function e(e){t.call(this,e,gl);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(bi),bl={paint:new xi({"raster-opacity":new yi(zt.paint_raster["raster-opacity"]),"raster-hue-rotate":new yi(zt.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new yi(zt.paint_raster["raster-brightness-min"]),"raster-brightness-max":new yi(zt.paint_raster["raster-brightness-max"]),"raster-saturation":new yi(zt.paint_raster["raster-saturation"]),"raster-contrast":new yi(zt.paint_raster["raster-contrast"]),"raster-resampling":new yi(zt.paint_raster["raster-resampling"]),"raster-fade-duration":new yi(zt.paint_raster["raster-fade-duration"])})},wl=function(t){function e(e){t.call(this,e,bl);}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(bi),_l=function(t){function e(e){t.call(this,e,{}),this.implementation=e;}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.is3D=function(){return "3d"===this.implementation.renderingMode},e.prototype.hasOffscreenPass=function(){return void 0!==this.implementation.prerender},e.prototype.recalculate=function(){},e.prototype.updateTransitions=function(){},e.prototype.hasTransition=function(){},e.prototype.serialize=function(){},e.prototype.onAdd=function(t){this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl);},e.prototype.onRemove=function(t){this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl);},e}(bi),Al={circle:uo,heatmap:xo,hillshade:wo,fill:ss,"fill-extrusion":Ss,line:Fs,symbol:vl,background:xl,raster:wl},Sl=o.HTMLImageElement,kl=o.HTMLCanvasElement,Il=o.HTMLVideoElement,zl=o.ImageData,Cl=o.ImageBitmap,Ml=function(t,e,r,n){this.context=t,this.format=r,this.texture=t.gl.createTexture(),this.update(e,n);};Ml.prototype.update=function(t,e,r){var n=t.width,i=t.height,a=!(this.size&&this.size[0]===n&&this.size[1]===i||r),o=this.context,s=o.gl;if(this.useMipmap=Boolean(e&&e.useMipmap),s.bindTexture(s.TEXTURE_2D,this.texture),o.pixelStoreUnpackFlipY.set(!1),o.pixelStoreUnpack.set(1),o.pixelStoreUnpackPremultiplyAlpha.set(this.format===s.RGBA&&(!e||!1!==e.premultiply)),a)this.size=[n,i],t instanceof Sl||t instanceof kl||t instanceof Il||t instanceof zl||Cl&&t instanceof Cl?s.texImage2D(s.TEXTURE_2D,0,this.format,this.format,s.UNSIGNED_BYTE,t):s.texImage2D(s.TEXTURE_2D,0,this.format,n,i,0,this.format,s.UNSIGNED_BYTE,t.data);else {var u=r||{x:0,y:0},l=u.x,p=u.y;t instanceof Sl||t instanceof kl||t instanceof Il||t instanceof zl||Cl&&t instanceof Cl?s.texSubImage2D(s.TEXTURE_2D,0,l,p,s.RGBA,s.UNSIGNED_BYTE,t):s.texSubImage2D(s.TEXTURE_2D,0,l,p,n,i,s.RGBA,s.UNSIGNED_BYTE,t.data);}this.useMipmap&&this.isSizePowerOfTwo()&&s.generateMipmap(s.TEXTURE_2D);},Ml.prototype.bind=function(t,e,r){var n=this.context.gl;n.bindTexture(n.TEXTURE_2D,this.texture),r!==n.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(r=n.LINEAR),t!==this.filter&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,r||t),this.filter=t),e!==this.wrap&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,e),this.wrap=e);},Ml.prototype.isSizePowerOfTwo=function(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0},Ml.prototype.destroy=function(){this.context.gl.deleteTexture(this.texture),this.texture=null;};var El=function(t){var e=this;this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=function(){e._triggered=!1,e._callback();});};El.prototype.trigger=function(){var t=this;this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout((function(){t._triggered=!1,t._callback();}),0));},El.prototype.remove=function(){delete this._channel,this._callback=function(){};};var Tl=function(t,e,r){this.target=t,this.parent=e,this.mapId=r,this.callbacks={},this.tasks={},this.taskQueue=[],this.cancelCallbacks={},m(["receive","process"],this),this.invoker=new El(this.process),this.target.addEventListener("message",this.receive,!1),this.globalScope=k()?t:o;};function Pl(t,e,r){var n=2*Math.PI*6378137/256/Math.pow(2,r);return [t*n-2*Math.PI*6378137/2,e*n-2*Math.PI*6378137/2]}Tl.prototype.send=function(t,e,r,n,i){var a=this;void 0===i&&(i=!1);var o=Math.round(1e18*Math.random()).toString(36).substring(0,10);r&&(this.callbacks[o]=r);var s=C(this.globalScope)?void 0:[];return this.target.postMessage({id:o,type:t,hasCallback:!!r,targetMapId:n,mustQueue:i,sourceMapId:this.mapId,data:Un(e,s)},s),{cancel:function(){r&&delete a.callbacks[o],a.target.postMessage({id:o,type:"<cancel>",targetMapId:n,sourceMapId:a.mapId});}}},Tl.prototype.receive=function(t){var e=t.data,r=e.id;if(r&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){delete this.tasks[r];var n=this.cancelCallbacks[r];delete this.cancelCallbacks[r],n&&n();}else k()||e.mustQueue?(this.tasks[r]=e,this.taskQueue.push(r),this.invoker.trigger()):this.processTask(r,e);},Tl.prototype.process=function(){if(this.taskQueue.length){var t=this.taskQueue.shift(),e=this.tasks[t];delete this.tasks[t],this.taskQueue.length&&this.invoker.trigger(),e&&this.processTask(t,e);}},Tl.prototype.processTask=function(t,e){var r=this;if("<response>"===e.type){var n=this.callbacks[t];delete this.callbacks[t],n&&(e.error?n(jn(e.error)):n(null,jn(e.data)));}else {var i=!1,a=C(this.globalScope)?void 0:[],o=e.hasCallback?function(e,n){i=!0,delete r.cancelCallbacks[t],r.target.postMessage({id:t,type:"<response>",sourceMapId:r.mapId,error:e?Un(e):null,data:Un(n,a)},a);}:function(t){i=!0;},s=null,u=jn(e.data);if(this.parent[e.type])s=this.parent[e.type](e.sourceMapId,u,o);else if(this.parent.getWorkerSource){var l=e.type.split(".");s=this.parent.getWorkerSource(e.sourceMapId,l[0],u.source)[l[1]](u,o);}else o(new Error("Could not find function "+e.type));!i&&s&&s.cancel&&(this.cancelCallbacks[t]=s.cancel);}},Tl.prototype.remove=function(){this.invoker.remove(),this.target.removeEventListener("message",this.receive,!1);};var Bl=function(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]));};Bl.prototype.setNorthEast=function(t){return this._ne=t instanceof Vl?new Vl(t.lng,t.lat):Vl.convert(t),this},Bl.prototype.setSouthWest=function(t){return this._sw=t instanceof Vl?new Vl(t.lng,t.lat):Vl.convert(t),this},Bl.prototype.extend=function(t){var e,r,n=this._sw,i=this._ne;if(t instanceof Vl)e=t,r=t;else {if(!(t instanceof Bl))return Array.isArray(t)?4===t.length||t.every(Array.isArray)?this.extend(Bl.convert(t)):this.extend(Vl.convert(t)):this;if(r=t._ne,!(e=t._sw)||!r)return this}return n||i?(n.lng=Math.min(e.lng,n.lng),n.lat=Math.min(e.lat,n.lat),i.lng=Math.max(r.lng,i.lng),i.lat=Math.max(r.lat,i.lat)):(this._sw=new Vl(e.lng,e.lat),this._ne=new Vl(r.lng,r.lat)),this},Bl.prototype.getCenter=function(){return new Vl((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},Bl.prototype.getSouthWest=function(){return this._sw},Bl.prototype.getNorthEast=function(){return this._ne},Bl.prototype.getNorthWest=function(){return new Vl(this.getWest(),this.getNorth())},Bl.prototype.getSouthEast=function(){return new Vl(this.getEast(),this.getSouth())},Bl.prototype.getWest=function(){return this._sw.lng},Bl.prototype.getSouth=function(){return this._sw.lat},Bl.prototype.getEast=function(){return this._ne.lng},Bl.prototype.getNorth=function(){return this._ne.lat},Bl.prototype.toArray=function(){return [this._sw.toArray(),this._ne.toArray()]},Bl.prototype.toString=function(){return "LngLatBounds("+this._sw.toString()+", "+this._ne.toString()+")"},Bl.prototype.isEmpty=function(){return !(this._sw&&this._ne)},Bl.prototype.contains=function(t){var e=Vl.convert(t),r=e.lng,n=e.lat,i=this._sw.lng<=r&&r<=this._ne.lng;return this._sw.lng>this._ne.lng&&(i=this._sw.lng>=r&&r>=this._ne.lng),this._sw.lat<=n&&n<=this._ne.lat&&i},Bl.convert=function(t){return !t||t instanceof Bl?t:new Bl(t)};var Vl=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid LngLat object: ("+t+", "+e+")");if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")};Vl.prototype.wrap=function(){return new Vl(p(this.lng,-180,180),this.lat)},Vl.prototype.toArray=function(){return [this.lng,this.lat]},Vl.prototype.toString=function(){return "LngLat("+this.lng+", "+this.lat+")"},Vl.prototype.distanceTo=function(t){var e=Math.PI/180,r=this.lat*e,n=t.lat*e,i=Math.sin(r)*Math.sin(n)+Math.cos(r)*Math.cos(n)*Math.cos((t.lng-this.lng)*e);return 6371008.8*Math.acos(Math.min(i,1))},Vl.prototype.toBounds=function(t){void 0===t&&(t=0);var e=360*t/40075017,r=e/Math.cos(Math.PI/180*this.lat);return new Bl(new Vl(this.lng-r,this.lat-e),new Vl(this.lng+r,this.lat+e))},Vl.convert=function(t){if(t instanceof Vl)return t;if(Array.isArray(t)&&(2===t.length||3===t.length))return new Vl(Number(t[0]),Number(t[1]));if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new Vl(Number("lng"in t?t.lng:t.lon),Number(t.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")};var Fl=2*Math.PI*6371008.8;function Dl(t){return Fl*Math.cos(t*Math.PI/180)}function Ll(t){return (180+t)/360}function Rl(t){return (180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function Ol(t,e){return t/Dl(e)}function Ul(t){return 360/Math.PI*Math.atan(Math.exp((180-360*t)*Math.PI/180))-90}var jl=function(t,e,r){void 0===r&&(r=0),this.x=+t,this.y=+e,this.z=+r;};jl.fromLngLat=function(t,e){void 0===e&&(e=0);var r=Vl.convert(t);return new jl(Ll(r.lng),Rl(r.lat),Ol(e,r.lat))},jl.prototype.toLngLat=function(){return new Vl(360*this.x-180,Ul(this.y))},jl.prototype.toAltitude=function(){return this.z*Dl(Ul(this.y))},jl.prototype.meterInMercatorCoordinateUnits=function(){return 1/Fl*(t=Ul(this.y),1/Math.cos(t*Math.PI/180));var t;};var ql=function(t,e,r){this.z=t,this.x=e,this.y=r,this.key=Gl(0,t,t,e,r);};ql.prototype.equals=function(t){return this.z===t.z&&this.x===t.x&&this.y===t.y},ql.prototype.url=function(t,e){var r,n,i,a,o,s=(n=this.y,i=this.z,a=Pl(256*(r=this.x),256*(n=Math.pow(2,i)-n-1),i),o=Pl(256*(r+1),256*(n+1),i),a[0]+","+a[1]+","+o[0]+","+o[1]),u=function(t,e,r){for(var n,i="",a=t;a>0;a--)i+=(e&(n=1<<a-1)?1:0)+(r&n?2:0);return i}(this.z,this.x,this.y);return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",String(this.z)).replace("{x}",String(this.x)).replace("{y}",String("tms"===e?Math.pow(2,this.z)-this.y-1:this.y)).replace("{quadkey}",u).replace("{bbox-epsg-3857}",s)},ql.prototype.getTilePoint=function(t){var e=Math.pow(2,this.z);return new i(8192*(t.x*e-this.x),8192*(t.y*e-this.y))},ql.prototype.toString=function(){return this.z+"/"+this.x+"/"+this.y};var Nl=function(t,e){this.wrap=t,this.canonical=e,this.key=Gl(t,e.z,e.z,e.x,e.y);},Kl=function(t,e,r,n,i){this.overscaledZ=t,this.wrap=e,this.canonical=new ql(r,+n,+i),this.key=Gl(e,t,r,n,i);};function Gl(t,e,r,n,i){(t*=2)<0&&(t=-1*t-1);var a=1<<r;return (a*a*t+a*i+n).toString(36)+r.toString(36)+e.toString(36)}Kl.prototype.equals=function(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)},Kl.prototype.scaledTo=function(t){var e=this.canonical.z-t;return t>this.canonical.z?new Kl(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new Kl(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)},Kl.prototype.calculateScaledKey=function(t,e){var r=this.canonical.z-t;return t>this.canonical.z?Gl(this.wrap*+e,t,this.canonical.z,this.canonical.x,this.canonical.y):Gl(this.wrap*+e,t,t,this.canonical.x>>r,this.canonical.y>>r)},Kl.prototype.isChildOf=function(t){if(t.wrap!==this.wrap)return !1;var e=this.canonical.z-t.canonical.z;return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e},Kl.prototype.children=function(t){if(this.overscaledZ>=t)return [new Kl(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)];var e=this.canonical.z+1,r=2*this.canonical.x,n=2*this.canonical.y;return [new Kl(e,this.wrap,e,r,n),new Kl(e,this.wrap,e,r+1,n),new Kl(e,this.wrap,e,r,n+1),new Kl(e,this.wrap,e,r+1,n+1)]},Kl.prototype.isLessThan=function(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))},Kl.prototype.wrapped=function(){return new Kl(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)},Kl.prototype.unwrapTo=function(t){return new Kl(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)},Kl.prototype.overscaleFactor=function(){return Math.pow(2,this.overscaledZ-this.canonical.z)},Kl.prototype.toUnwrapped=function(){return new Nl(this.wrap,this.canonical)},Kl.prototype.toString=function(){return this.overscaledZ+"/"+this.canonical.x+"/"+this.canonical.y},Kl.prototype.getTilePoint=function(t){return this.canonical.getTilePoint(new jl(t.x-this.wrap,t.y))},Dn("CanonicalTileID",ql),Dn("OverscaledTileID",Kl,{omit:["posMatrix"]});var Zl=function(t,e,r){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square");if(r&&"mapbox"!==r&&"terrarium"!==r)return _('"'+r+'" is not a valid encoding type. Valid types include "mapbox" and "terrarium".');this.stride=e.height;var n=this.dim=e.height-2;this.data=new Uint32Array(e.data.buffer),this.encoding=r||"mapbox";for(var i=0;i<n;i++)this.data[this._idx(-1,i)]=this.data[this._idx(0,i)],this.data[this._idx(n,i)]=this.data[this._idx(n-1,i)],this.data[this._idx(i,-1)]=this.data[this._idx(i,0)],this.data[this._idx(i,n)]=this.data[this._idx(i,n-1)];this.data[this._idx(-1,-1)]=this.data[this._idx(0,0)],this.data[this._idx(n,-1)]=this.data[this._idx(n-1,0)],this.data[this._idx(-1,n)]=this.data[this._idx(0,n-1)],this.data[this._idx(n,n)]=this.data[this._idx(n-1,n-1)];};Zl.prototype.get=function(t,e){var r=new Uint8Array(this.data.buffer),n=4*this._idx(t,e);return ("terrarium"===this.encoding?this._unpackTerrarium:this._unpackMapbox)(r[n],r[n+1],r[n+2])},Zl.prototype.getUnpackVector=function(){return "terrarium"===this.encoding?[256,1,1/256,32768]:[6553.6,25.6,.1,1e4]},Zl.prototype._idx=function(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data");return (e+1)*this.stride+(t+1)},Zl.prototype._unpackMapbox=function(t,e,r){return (256*t*256+256*e+r)/10-1e4},Zl.prototype._unpackTerrarium=function(t,e,r){return 256*t+e+r/256-32768},Zl.prototype.getPixels=function(){return new mo({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))},Zl.prototype.backfillBorder=function(t,e,r){if(this.dim!==t.dim)throw new Error("dem dimension mismatch");var n=e*this.dim,i=e*this.dim+this.dim,a=r*this.dim,o=r*this.dim+this.dim;switch(e){case-1:n=i-1;break;case 1:i=n+1;}switch(r){case-1:a=o-1;break;case 1:o=a+1;}for(var s=-e*this.dim,u=-r*this.dim,l=a;l<o;l++)for(var p=n;p<i;p++)this.data[this._idx(p,l)]=t.data[this._idx(p+s,l+u)];},Dn("DEMData",Zl);var Xl=function(t){this._stringToNumber={},this._numberToString=[];for(var e=0;e<t.length;e++){var r=t[e];this._stringToNumber[r]=e,this._numberToString[e]=r;}};Xl.prototype.encode=function(t){return this._stringToNumber[t]},Xl.prototype.decode=function(t){return this._numberToString[t]};var Jl=function(t,e,r,n,i){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=r,t._y=n,this.properties=t.properties,this.id=i;},Hl={geometry:{configurable:!0}};Hl.geometry.get=function(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry},Hl.geometry.set=function(t){this._geometry=t;},Jl.prototype.toJSON=function(){var t={geometry:this.geometry};for(var e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e]);return t},Object.defineProperties(Jl.prototype,Hl);var Yl=function(){this.state={},this.stateChanges={},this.deletedStates={};};Yl.prototype.updateState=function(t,e,r){var n=String(e);if(this.stateChanges[t]=this.stateChanges[t]||{},this.stateChanges[t][n]=this.stateChanges[t][n]||{},c(this.stateChanges[t][n],r),null===this.deletedStates[t])for(var i in this.deletedStates[t]={},this.state[t])i!==n&&(this.deletedStates[t][i]=null);else if(this.deletedStates[t]&&null===this.deletedStates[t][n])for(var a in this.deletedStates[t][n]={},this.state[t][n])r[a]||(this.deletedStates[t][n][a]=null);else for(var o in r)this.deletedStates[t]&&this.deletedStates[t][n]&&null===this.deletedStates[t][n][o]&&delete this.deletedStates[t][n][o];},Yl.prototype.removeFeatureState=function(t,e,r){if(null!==this.deletedStates[t]){var n=String(e);if(this.deletedStates[t]=this.deletedStates[t]||{},r&&void 0!==e)null!==this.deletedStates[t][n]&&(this.deletedStates[t][n]=this.deletedStates[t][n]||{},this.deletedStates[t][n][r]=null);else if(void 0!==e)if(this.stateChanges[t]&&this.stateChanges[t][n])for(r in this.deletedStates[t][n]={},this.stateChanges[t][n])this.deletedStates[t][n][r]=null;else this.deletedStates[t][n]=null;else this.deletedStates[t]=null;}},Yl.prototype.getState=function(t,e){var r=String(e),n=c({},(this.state[t]||{})[r],(this.stateChanges[t]||{})[r]);if(null===this.deletedStates[t])return {};if(this.deletedStates[t]){var i=this.deletedStates[t][e];if(null===i)return {};for(var a in i)delete n[a];}return n},Yl.prototype.initializeTileState=function(t,e){t.setFeatureState(this.state,e);},Yl.prototype.coalesceChanges=function(t,e){var r={};for(var n in this.stateChanges){this.state[n]=this.state[n]||{};var i={};for(var a in this.stateChanges[n])this.state[n][a]||(this.state[n][a]={}),c(this.state[n][a],this.stateChanges[n][a]),i[a]=this.state[n][a];r[n]=i;}for(var o in this.deletedStates){this.state[o]=this.state[o]||{};var s={};if(null===this.deletedStates[o])for(var u in this.state[o])s[u]={},this.state[o][u]={};else for(var l in this.deletedStates[o]){if(null===this.deletedStates[o][l])this.state[o][l]={};else for(var p=0,h=Object.keys(this.deletedStates[o][l]);p<h.length;p+=1)delete this.state[o][l][h[p]];s[l]=this.state[o][l];}r[o]=r[o]||{},c(r[o],s);}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(r).length)for(var f in t)t[f].setFeatureState(r,e);};var $l=function(t,e){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=new Tn(8192,16,0),this.grid3D=new Tn(8192,16,0),this.featureIndexArray=new na,this.promoteId=e;};function Wl(t,e,r,n,i){return g(t,(function(t,a){var o=e instanceof fi?e.get(a):null;return o&&o.evaluate?o.evaluate(r,n,i):o}))}function Ql(t){for(var e=1/0,r=1/0,n=-1/0,i=-1/0,a=0,o=t;a<o.length;a+=1){var s=o[a];e=Math.min(e,s.x),r=Math.min(r,s.y),n=Math.max(n,s.x),i=Math.max(i,s.y);}return {minX:e,minY:r,maxX:n,maxY:i}}function tp(t,e){return e-t}$l.prototype.insert=function(t,e,r,n,i,a){var o=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(r,n,i);for(var s=a?this.grid3D:this.grid,u=0;u<e.length;u++){for(var l=e[u],p=[1/0,1/0,-1/0,-1/0],c=0;c<l.length;c++){var h=l[c];p[0]=Math.min(p[0],h.x),p[1]=Math.min(p[1],h.y),p[2]=Math.max(p[2],h.x),p[3]=Math.max(p[3],h.y);}p[0]<8192&&p[1]<8192&&p[2]>=0&&p[3]>=0&&s.insert(o,p[0],p[1],p[2],p[3]);}},$l.prototype.loadVTLayers=function(){return this.vtLayers||(this.vtLayers=new vs.VectorTile(new Zs(this.rawTileData)).layers,this.sourceLayerCoder=new Xl(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers},$l.prototype.query=function(t,e,r,n){var a=this;this.loadVTLayers();for(var o=t.params||{},s=8192/t.tileSize/t.scale,u=nn(o.filter),l=t.queryGeometry,p=t.queryPadding*s,c=Ql(l),h=this.grid.query(c.minX-p,c.minY-p,c.maxX+p,c.maxY+p),f=Ql(t.cameraQueryGeometry),y=this.grid3D.query(f.minX-p,f.minY-p,f.maxX+p,f.maxY+p,(function(e,r,n,a){return function(t,e,r,n,a){for(var o=0,s=t;o<s.length;o+=1){var u=s[o];if(e<=u.x&&r<=u.y&&n>=u.x&&a>=u.y)return !0}var l=[new i(e,r),new i(e,a),new i(n,a),new i(n,r)];if(t.length>2)for(var p=0,c=l;p<c.length;p+=1)if(Ha(t,c[p]))return !0;for(var h=0;h<t.length-1;h++)if(Ya(t[h],t[h+1],l))return !0;return !1}(t.cameraQueryGeometry,e-p,r-p,n+p,a+p)})),d=0,m=y;d<m.length;d+=1)h.push(m[d]);h.sort(tp);for(var v,g={},x=function(i){var p=h[i];if(p!==v){v=p;var c=a.featureIndexArray.get(p),f=null;a.loadMatchingFeature(g,c.bucketIndex,c.sourceLayerIndex,c.featureIndex,u,o.layers,o.availableImages,e,r,n,(function(e,r,n){return f||(f=La(e)),r.queryIntersectsFeature(l,e,n,f,a.z,t.transform,s,t.pixelPosMatrix)}));}},b=0;b<h.length;b++)x(b);return g},$l.prototype.loadMatchingFeature=function(t,e,r,n,i,a,o,s,u,l,p){var c=this.bucketLayerIDs[e];if(!a||function(t,e){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return !0;return !1}(a,c)){var h=this.sourceLayerCoder.decode(r),f=this.vtLayers[h].feature(n);if(i.filter(new ai(this.tileID.overscaledZ),f))for(var y=this.getId(f,h),d=0;d<c.length;d++){var m=c[d];if(!(a&&a.indexOf(m)<0)){var v=s[m];if(v){var g={};void 0!==y&&l&&(g=l.getState(v.sourceLayer||"_geojsonTileLayer",y));var x=u[m];x.paint=Wl(x.paint,v.paint,f,g,o),x.layout=Wl(x.layout,v.layout,f,g,o);var b=!p||p(f,v,g);if(b){var w=new Jl(f,this.z,this.x,this.y,y);w.layer=x;var _=t[m];void 0===_&&(_=t[m]=[]),_.push({featureIndex:n,feature:w,intersectionZ:b});}}}}}},$l.prototype.lookupSymbolFeatures=function(t,e,r,n,i,a,o,s){var u={};this.loadVTLayers();for(var l=nn(i),p=0,c=t;p<c.length;p+=1)this.loadMatchingFeature(u,r,n,c[p],l,a,o,s,e);return u},$l.prototype.hasLayer=function(t){for(var e=0,r=this.bucketLayerIDs;e<r.length;e+=1)for(var n=0,i=r[e];n<i.length;n+=1)if(t===i[n])return !0;return !1},$l.prototype.getId=function(t,e){var r=t.id;return this.promoteId&&"boolean"==typeof(r=t.properties["string"==typeof this.promoteId?this.promoteId:this.promoteId[e]])&&(r=Number(r)),r},Dn("FeatureIndex",$l,{omit:["rawTileData","sourceLayerCoder"]});var ep=function(t,e){this.tileID=t,this.uid=f(),this.uses=0,this.tileSize=e,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.hasRTLText=!1,this.dependencies={},this.expiredRequestCount=0,this.state="loading";};ep.prototype.registerFadeDuration=function(t){var e=t+this.timeAdded;e<L.now()||this.fadeEndTime&&e<this.fadeEndTime||(this.fadeEndTime=e);},ep.prototype.wasRequested=function(){return "errored"===this.state||"loaded"===this.state||"reloading"===this.state},ep.prototype.loadVectorData=function(t,e,r){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",t){for(var n in t.featureIndex&&(this.latestFeatureIndex=t.featureIndex,t.rawTileData?(this.latestRawTileData=t.rawTileData,this.latestFeatureIndex.rawTileData=t.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=t.collisionBoxArray,this.buckets=function(t,e){var r={};if(!e)return r;for(var n=function(){var t=a[i],n=t.layerIds.map((function(t){return e.getLayer(t)})).filter(Boolean);if(0!==n.length){t.layers=n,t.stateDependentLayerIds&&(t.stateDependentLayers=t.stateDependentLayerIds.map((function(t){return n.filter((function(e){return e.id===t}))[0]})));for(var o=0,s=n;o<s.length;o+=1)r[s[o].id]=t;}},i=0,a=t;i<a.length;i+=1)n();return r}(t.buckets,e.style),this.hasSymbolBuckets=!1,this.buckets){var i=this.buckets[n];if(i instanceof fl){if(this.hasSymbolBuckets=!0,!r)break;i.justReloaded=!0;}}if(this.hasRTLText=!1,this.hasSymbolBuckets)for(var a in this.buckets){var o=this.buckets[a];if(o instanceof fl&&o.hasRTLText){this.hasRTLText=!0,ii.isLoading()||ii.isLoaded()||"deferred"!==ri()||ni();break}}for(var s in this.queryPadding=0,this.buckets){var u=this.buckets[s];this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(s).queryRadius(u));}t.imageAtlas&&(this.imageAtlas=t.imageAtlas),t.glyphAtlasImage&&(this.glyphAtlasImage=t.glyphAtlasImage);}else this.collisionBoxArray=new Hi;},ep.prototype.unloadVectorData=function(){for(var t in this.buckets)this.buckets[t].destroy();this.buckets={},this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.imageAtlas&&(this.imageAtlas=null),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded";},ep.prototype.getBucket=function(t){return this.buckets[t.id]},ep.prototype.upload=function(t){for(var e in this.buckets){var r=this.buckets[e];r.uploadPending()&&r.upload(t);}var n=t.gl;this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new Ml(t,this.imageAtlas.image,n.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new Ml(t,this.glyphAtlasImage,n.ALPHA),this.glyphAtlasImage=null);},ep.prototype.prepare=function(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture);},ep.prototype.queryRenderedFeatures=function(t,e,r,n,i,a,o,s,u,l){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:n,cameraQueryGeometry:i,scale:a,tileSize:this.tileSize,pixelPosMatrix:l,transform:s,params:o,queryPadding:this.queryPadding*u},t,e,r):{}},ep.prototype.querySourceFeatures=function(t,e){var r=this.latestFeatureIndex;if(r&&r.rawTileData){var n=r.loadVTLayers(),i=e?e.sourceLayer:"",a=n._geojsonTileLayer||n[i];if(a)for(var o=nn(e&&e.filter),s=this.tileID.canonical,u=s.z,l=s.x,p=s.y,c={z:u,x:l,y:p},h=0;h<a.length;h++){var f=a.feature(h);if(o.filter(new ai(this.tileID.overscaledZ),f)){var y=r.getId(f,i),d=new Jl(f,u,l,p,y);d.tile=c,t.push(d);}}}},ep.prototype.hasData=function(){return "loaded"===this.state||"reloading"===this.state||"expired"===this.state},ep.prototype.patternsLoaded=function(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length},ep.prototype.setExpiryData=function(t){var e=this.expirationTime;if(t.cacheControl){var r=I(t.cacheControl);r["max-age"]&&(this.expirationTime=Date.now()+1e3*r["max-age"]);}else t.expires&&(this.expirationTime=new Date(t.expires).getTime());if(this.expirationTime){var n=Date.now(),i=!1;if(this.expirationTime>n)i=!1;else if(e)if(this.expirationTime<e)i=!0;else {var a=this.expirationTime-e;a?this.expirationTime=n+Math.max(a,3e4):i=!0;}else i=!0;i?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0;}},ep.prototype.getExpiryTimeout=function(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)},ep.prototype.setFeatureState=function(t,e){if(this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData&&0!==Object.keys(t).length){var r=this.latestFeatureIndex.loadVTLayers();for(var n in this.buckets)if(e.style.hasLayer(n)){var i=this.buckets[n],a=i.layers[0].sourceLayer||"_geojsonTileLayer",o=r[a],s=t[a];if(o&&s&&0!==Object.keys(s).length){i.update(s,o,this.imageAtlas&&this.imageAtlas.patternPositions||{});var u=e&&e.style&&e.style.getLayer(n);u&&(this.queryPadding=Math.max(this.queryPadding,u.queryRadius(i)));}}}},ep.prototype.holdingForFade=function(){return void 0!==this.symbolFadeHoldUntil},ep.prototype.symbolFadeFinished=function(){return !this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<L.now()},ep.prototype.clearFadeHold=function(){this.symbolFadeHoldUntil=void 0;},ep.prototype.setHoldDuration=function(t){this.symbolFadeHoldUntil=L.now()+t;},ep.prototype.setDependencies=function(t,e){for(var r={},n=0,i=e;n<i.length;n+=1)r[i[n]]=!0;this.dependencies[t]=r;},ep.prototype.hasDependency=function(t,e){for(var r=0,n=t;r<n.length;r+=1){var i=this.dependencies[n[r]];if(i)for(var a=0,o=e;a<o.length;a+=1)if(i[o[a]])return !0}return !1};var rp=o.performance,np=function(t){this._marks={start:[t.url,"start"].join("#"),end:[t.url,"end"].join("#"),measure:t.url.toString()},rp.mark(this._marks.start);};np.prototype.finish=function(){rp.mark(this._marks.end);var t=rp.getEntriesByName(this._marks.measure);return 0===t.length&&(rp.measure(this._marks.measure,this._marks.start,this._marks.end),t=rp.getEntriesByName(this._marks.measure),rp.clearMarks(this._marks.start),rp.clearMarks(this._marks.end),rp.clearMeasures(this._marks.measure)),t},t.Actor=Tl,t.AlphaImage=yo,t.CanonicalTileID=ql,t.CollisionBoxArray=Hi,t.Color=Wt,t.DEMData=Zl,t.DataConstantProperty=yi,t.DictionaryCoder=Xl,t.EXTENT=8192,t.ErrorEvent=kt,t.EvaluationParameters=ai,t.Event=St,t.Evented=It,t.FeatureIndex=$l,t.FillBucket=is,t.FillExtrusionBucket=ws,t.ImageAtlas=mu,t.ImagePosition=yu,t.LineBucket=Ts,t.LngLat=Vl,t.LngLatBounds=Bl,t.MercatorCoordinate=jl,t.ONE_EM=24,t.OverscaledTileID=Kl,t.Point=i,t.Point$1=i,t.Properties=xi,t.Protobuf=Zs,t.RGBAImage=mo,t.RequestManager=K,t.RequestPerformance=np,t.ResourceType=ft,t.SegmentVector=aa,t.SourceFeatureState=Yl,t.StructArrayLayout1ui2=Gi,t.StructArrayLayout2f1f2i16=Di,t.StructArrayLayout2i4=Ii,t.StructArrayLayout3ui6=Ri,t.StructArrayLayout4i8=zi,t.SymbolBucket=fl,t.Texture=Ml,t.Tile=ep,t.Transitionable=ui,t.Uniform1f=ga,t.Uniform1i=va,t.Uniform2f=xa,t.Uniform3f=ba,t.Uniform4f=wa,t.UniformColor=_a,t.UniformMatrix4f=Sa,t.UnwrappedTileID=Nl,t.ValidationError=Ct,t.WritingMode=vu,t.ZoomHistory=qn,t.add=function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t},t.addDynamicAttributes=ll,t.asyncAll=function(t,e,r){if(!t.length)return r(null,[]);var n=t.length,i=new Array(t.length),a=null;t.forEach((function(t,o){e(t,(function(t,e){t&&(a=t),i[o]=e,0==--n&&r(a,i);}));}));},t.bezier=s,t.bindAll=m,t.browser=L,t.cacheEntryPossiblyAdded=function(t){++ct>st&&(t.getActor().send("enforceCacheSizeLimit",ot),ct=0);},t.clamp=l,t.clearTileCache=function(t){var e=o.caches.delete("mapbox-tiles");t&&e.catch(t).then((function(){return t()}));},t.clipLine=qu,t.clone=function(t){var e=new ro(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$1=b,t.clone$2=function(t){var e=new ro(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},t.collisionCircleLayout=js,t.config=R,t.create=function(){var t=new ro(16);return ro!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.create$1=function(){var t=new ro(9);return ro!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t},t.create$2=function(){var t=new ro(4);return ro!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},t.createCommonjsModule=e,t.createExpression=Kr,t.createLayout=Si,t.createStyleLayer=function(t){return "custom"===t.type?new _l(t):new Al[t.type](t)},t.cross=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=r[0],s=r[1],u=r[2];return t[0]=i*u-a*s,t[1]=a*o-n*u,t[2]=n*s-i*o,t},t.deepEqual=function t(e,r){if(Array.isArray(e)){if(!Array.isArray(r)||e.length!==r.length)return !1;for(var n=0;n<e.length;n++)if(!t(e[n],r[n]))return !1;return !0}if("object"==typeof e&&null!==e&&null!==r){if("object"!=typeof r)return !1;if(Object.keys(e).length!==Object.keys(r).length)return !1;for(var i in e)if(!t(e[i],r[i]))return !1;return !0}return e===r},t.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},t.dot$1=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},t.ease=u,t.emitValidationErrors=En,t.endsWith=v,t.enforceCacheSizeLimit=function(t){ut(),Q&&Q.then((function(e){e.keys().then((function(r){for(var n=0;n<r.length-t;n++)e.delete(r[n]);}));}));},t.evaluateSizeForFeature=Bu,t.evaluateSizeForZoom=Vu,t.evaluateVariableOffset=el,t.evented=ei,t.extend=c,t.featureFilter=nn,t.filterObject=x,t.fromRotation=function(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},t.getAnchorAlignment=Cu,t.getAnchorJustification=rl,t.getArrayBuffer=xt,t.getImage=wt,t.getJSON=function(t,e){return gt(c(t,{type:"json"}),e)},t.getRTLTextPluginStatus=ri,t.getReferrer=dt,t.getVideo=function(t,e){var r,n,i=o.document.createElement("video");i.muted=!0,i.onloadstart=function(){e(null,i);};for(var a=0;a<t.length;a++){var s=o.document.createElement("source");r=t[a],n=void 0,(n=o.document.createElement("a")).href=r,(n.protocol!==o.document.location.protocol||n.host!==o.document.location.host)&&(i.crossOrigin="Anonymous"),s.src=t[a],i.appendChild(s);}return {cancel:function(){}}},t.identity=no,t.invert=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],l=e[7],p=e[8],c=e[9],h=e[10],f=e[11],y=e[12],d=e[13],m=e[14],v=e[15],g=r*s-n*o,x=r*u-i*o,b=r*l-a*o,w=n*u-i*s,_=n*l-a*s,A=i*l-a*u,S=p*d-c*y,k=p*m-h*y,I=p*v-f*y,z=c*m-h*d,C=c*v-f*d,M=h*v-f*m,E=g*M-x*C+b*z+w*I-_*k+A*S;return E?(t[0]=(s*M-u*C+l*z)*(E=1/E),t[1]=(i*C-n*M-a*z)*E,t[2]=(d*A-m*_+v*w)*E,t[3]=(h*_-c*A-f*w)*E,t[4]=(u*I-o*M-l*k)*E,t[5]=(r*M-i*I+a*k)*E,t[6]=(m*b-y*A-v*x)*E,t[7]=(p*A-h*b+f*x)*E,t[8]=(o*C-s*I+l*S)*E,t[9]=(n*I-r*C-a*S)*E,t[10]=(y*_-d*b+v*g)*E,t[11]=(c*b-p*_-f*g)*E,t[12]=(s*k-o*z-u*S)*E,t[13]=(r*z-n*k+i*S)*E,t[14]=(d*x-y*w-m*g)*E,t[15]=(p*w-c*x+h*g)*E,t):null},t.isChar=Nn,t.isMapboxURL=G,t.keysDifference=function(t,e){var r=[];for(var n in t)n in e||r.push(n);return r},t.makeRequest=gt,t.mapObject=g,t.mercatorXfromLng=Ll,t.mercatorYfromLat=Rl,t.mercatorZfromAltitude=Ol,t.mul=oo,t.multiply=io,t.mvt=vs,t.normalize=function(t,e){var r=e[0],n=e[1],i=e[2],a=r*r+n*n+i*i;return a>0&&(a=1/Math.sqrt(a)),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a,t},t.number=qe,t.offscreenCanvasSupported=ht,t.ortho=function(t,e,r,n,i,a,o){var s=1/(e-r),u=1/(n-i),l=1/(a-o);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(e+r)*s,t[13]=(i+n)*u,t[14]=(o+a)*l,t[15]=1,t},t.parseGlyphPBF=function(t){return new Zs(t).readFields(pu,[])},t.pbf=Zs,t.performSymbolLayout=function(t,e,r,n,i,a,o){t.createArrays(),t.tilePixelRatio=8192/(512*t.overscaling),t.compareText={},t.iconsNeedLinear=!1;var s=t.layers[0].layout,u=t.layers[0]._unevaluatedLayout._values,l={};if("composite"===t.textSizeData.kind){var p=t.textSizeData,c=p.maxZoom;l.compositeTextSizes=[u["text-size"].possiblyEvaluate(new ai(p.minZoom),o),u["text-size"].possiblyEvaluate(new ai(c),o)];}if("composite"===t.iconSizeData.kind){var h=t.iconSizeData,f=h.maxZoom;l.compositeIconSizes=[u["icon-size"].possiblyEvaluate(new ai(h.minZoom),o),u["icon-size"].possiblyEvaluate(new ai(f),o)];}l.layoutTextSize=u["text-size"].possiblyEvaluate(new ai(t.zoom+1),o),l.layoutIconSize=u["icon-size"].possiblyEvaluate(new ai(t.zoom+1),o),l.textMaxSize=u["text-size"].possiblyEvaluate(new ai(18));for(var y=24*s.get("text-line-height"),d="map"===s.get("text-rotation-alignment")&&"point"!==s.get("symbol-placement"),m=s.get("text-keep-upright"),v=s.get("text-size"),g=function(){var a=b[x],u=s.get("text-font").evaluate(a,{},o).join(","),p=v.evaluate(a,{},o),c=l.layoutTextSize.evaluate(a,{},o),h=l.layoutIconSize.evaluate(a,{},o),f={horizontal:{},vertical:void 0},g=a.text,w=[0,0];if(g){var A=g.toString(),S=24*s.get("text-letter-spacing").evaluate(a,{},o),k=function(t){for(var e=0,r=t;e<r.length;e+=1)if(n=r[e].charCodeAt(0),Nn.Arabic(n)||Nn["Arabic Supplement"](n)||Nn["Arabic Extended-A"](n)||Nn["Arabic Presentation Forms-A"](n)||Nn["Arabic Presentation Forms-B"](n))return !1;var n;return !0}(A)?S:0,I=s.get("text-anchor").evaluate(a,{},o),z=s.get("text-variable-anchor");if(!z){var C=s.get("text-radial-offset").evaluate(a,{},o);w=C?el(I,[24*C,tl]):s.get("text-offset").evaluate(a,{},o).map((function(t){return 24*t}));}var M=d?"center":s.get("text-justify").evaluate(a,{},o),E=s.get("symbol-placement"),T="point"===E?24*s.get("text-max-width").evaluate(a,{},o):0,P=function(){t.allowVerticalPlacement&&Kn(A)&&(f.vertical=bu(g,e,r,i,u,T,y,I,"left",k,w,vu.vertical,!0,E,c,p));};if(!d&&z){for(var B="auto"===M?z.map((function(t){return rl(t)})):[M],V=!1,F=0;F<B.length;F++){var D=B[F];if(!f.horizontal[D])if(V)f.horizontal[D]=f.horizontal[0];else {var L=bu(g,e,r,i,u,T,y,"center",D,k,w,vu.horizontal,!1,E,c,p);L&&(f.horizontal[D]=L,V=1===L.positionedLines.length);}}P();}else {"auto"===M&&(M=rl(I));var R=bu(g,e,r,i,u,T,y,I,M,k,w,vu.horizontal,!1,E,c,p);R&&(f.horizontal[M]=R),P(),Kn(A)&&d&&m&&(f.vertical=bu(g,e,r,i,u,T,y,I,M,k,w,vu.vertical,!1,E,c,p));}}var O=void 0,U=!1;if(a.icon&&a.icon.name){var j=n[a.icon.name];j&&(O=function(t,e,r){var n=Cu(r),i=e[0]-t.displaySize[0]*n.horizontalAlign,a=e[1]-t.displaySize[1]*n.verticalAlign;return {image:t,top:a,bottom:a+t.displaySize[1],left:i,right:i+t.displaySize[0]}}(i[a.icon.name],s.get("icon-offset").evaluate(a,{},o),s.get("icon-anchor").evaluate(a,{},o)),U=j.sdf,void 0===t.sdfIcons?t.sdfIcons=j.sdf:t.sdfIcons!==j.sdf&&_("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),(j.pixelRatio!==t.pixelRatio||0!==s.get("icon-rotate").constantOr(1))&&(t.iconsNeedLinear=!0));}var q=il(f.horizontal)||f.vertical;t.iconsInText=!!q&&q.iconsInText,(q||O)&&function(t,e,r,n,i,a,o,s,u,l,p){var c=a.textMaxSize.evaluate(e,{});void 0===c&&(c=o);var h,f=t.layers[0].layout,y=f.get("icon-offset").evaluate(e,{},p),d=il(r.horizontal),m=o/24,v=t.tilePixelRatio*m,g=t.tilePixelRatio*c/24,x=t.tilePixelRatio*s,b=t.tilePixelRatio*f.get("symbol-spacing"),w=f.get("text-padding")*t.tilePixelRatio,A=f.get("icon-padding")*t.tilePixelRatio,S=f.get("text-max-angle")/180*Math.PI,k="map"===f.get("text-rotation-alignment")&&"point"!==f.get("symbol-placement"),I="map"===f.get("icon-rotation-alignment")&&"point"!==f.get("symbol-placement"),z=f.get("symbol-placement"),C=b/2,M=f.get("icon-text-fit");n&&"none"!==M&&(t.allowVerticalPlacement&&r.vertical&&(h=Eu(n,r.vertical,M,f.get("icon-text-fit-padding"),y,m)),d&&(n=Eu(n,d,M,f.get("icon-text-fit-padding"),y,m)));var E=function(s,c){c.x<0||c.x>=8192||c.y<0||c.y>=8192||function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,w,A,S,k){var I,z,C,M,E,T=t.addToLineVertexArray(e,r),P=0,B=0,V=0,F=0,D=-1,L=-1,R={},O=pa(""),U=0,j=0;if(void 0===s._unevaluatedLayout.getValue("text-radial-offset")?(U=(I=s.layout.get("text-offset").evaluate(b,{},S).map((function(t){return 24*t})))[0],j=I[1]):(U=24*s.layout.get("text-radial-offset").evaluate(b,{},S),j=tl),t.allowVerticalPlacement&&n.vertical){var q=s.layout.get("text-rotate").evaluate(b,{},S)+90;M=new Ju(u,e,l,p,c,n.vertical,h,f,y,q),o&&(E=new Ju(u,e,l,p,c,o,m,v,y,q));}if(i){var N=s.layout.get("icon-rotate").evaluate(b,{}),K="none"!==s.layout.get("icon-text-fit"),G=Nu(i,N,A,K),Z=o?Nu(o,N,A,K):void 0;C=new Ju(u,e,l,p,c,i,m,v,!1,N),P=4*G.length;var X=t.iconSizeData,J=null;"source"===X.kind?(J=[128*s.layout.get("icon-size").evaluate(b,{})])[0]>32640&&_(t.layerIds[0]+': Value for "icon-size" is >= 255. Reduce your "icon-size".'):"composite"===X.kind&&((J=[128*w.compositeIconSizes[0].evaluate(b,{},S),128*w.compositeIconSizes[1].evaluate(b,{},S)])[0]>32640||J[1]>32640)&&_(t.layerIds[0]+': Value for "icon-size" is >= 255. Reduce your "icon-size".'),t.addSymbols(t.icon,G,J,x,g,b,!1,e,T.lineStartIndex,T.lineLength,-1,S),D=t.icon.placedSymbolArray.length-1,Z&&(B=4*Z.length,t.addSymbols(t.icon,Z,J,x,g,b,vu.vertical,e,T.lineStartIndex,T.lineLength,-1,S),L=t.icon.placedSymbolArray.length-1);}for(var H in n.horizontal){var Y=n.horizontal[H];if(!z){O=pa(Y.text);var $=s.layout.get("text-rotate").evaluate(b,{},S);z=new Ju(u,e,l,p,c,Y,h,f,y,$);}var W=1===Y.positionedLines.length;if(V+=nl(t,e,Y,a,s,y,b,d,T,n.vertical?vu.horizontal:vu.horizontalOnly,W?Object.keys(n.horizontal):[H],R,D,w,S),W)break}n.vertical&&(F+=nl(t,e,n.vertical,a,s,y,b,d,T,vu.vertical,["vertical"],R,L,w,S));var Q=z?z.boxStartIndex:t.collisionBoxArray.length,tt=z?z.boxEndIndex:t.collisionBoxArray.length,et=M?M.boxStartIndex:t.collisionBoxArray.length,rt=M?M.boxEndIndex:t.collisionBoxArray.length,nt=C?C.boxStartIndex:t.collisionBoxArray.length,it=C?C.boxEndIndex:t.collisionBoxArray.length,at=E?E.boxStartIndex:t.collisionBoxArray.length,ot=E?E.boxEndIndex:t.collisionBoxArray.length,st=-1,ut=function(t,e){return t&&t.circleDiameter?Math.max(t.circleDiameter,e):e};st=ut(z,st),st=ut(M,st),st=ut(C,st);var lt=(st=ut(E,st))>-1?1:0;lt&&(st*=k/24),t.glyphOffsetArray.length>=fl.MAX_GLYPHS&&_("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),void 0!==b.sortKey&&t.addToSortKeyRanges(t.symbolInstances.length,b.sortKey),t.symbolInstances.emplaceBack(e.x,e.y,R.right>=0?R.right:-1,R.center>=0?R.center:-1,R.left>=0?R.left:-1,R.vertical||-1,D,L,O,Q,tt,et,rt,nt,it,at,ot,l,V,F,P,B,lt,0,h,U,j,st);}(t,c,s,r,n,i,h,t.layers[0],t.collisionBoxArray,e.index,e.sourceLayerIndex,t.index,v,w,k,u,x,A,I,y,e,a,l,p,o);};if("line"===z)for(var T=0,P=qu(e.geometry,0,0,8192,8192);T<P.length;T+=1)for(var B=P[T],V=0,F=ju(B,b,S,r.vertical||d,n,24,g,t.overscaling,8192);V<F.length;V+=1){var D=F[V];d&&al(t,d.text,C,D)||E(B,D);}else if("line-center"===z)for(var L=0,R=e.geometry;L<R.length;L+=1){var O=R[L];if(O.length>1){var U=Uu(O,S,r.vertical||d,n,24,g);U&&E(O,U);}}else if("Polygon"===e.type)for(var j=0,q=ts(e.geometry,0);j<q.length;j+=1){var N=q[j],K=$u(N,16);E(N[0],new Tu(K.x,K.y,0));}else if("LineString"===e.type)for(var G=0,Z=e.geometry;G<Z.length;G+=1){var X=Z[G];E(X,new Tu(X[0].x,X[0].y,0));}else if("Point"===e.type)for(var J=0,H=e.geometry;J<H.length;J+=1)for(var Y=0,$=H[J];Y<$.length;Y+=1){var W=$[Y];E([W],new Tu(W.x,W.y,0));}}(t,a,f,O,n,l,c,h,w,U,o);},x=0,b=t.features;x<b.length;x+=1)g();a&&t.generateCollisionDebugBuffers();},t.perspective=function(t,e,r,n,i){var a,o=1/Math.tan(e/2);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(t[10]=(i+n)*(a=1/(n-i)),t[14]=2*i*n*a):(t[10]=-1,t[14]=-2*n),t},t.pick=function(t,e){for(var r={},n=0;n<e.length;n++){var i=e[n];i in t&&(r[i]=t[i]);}return r},t.plugin=ii,t.polygonIntersectsPolygon=Ua,t.postMapLoadEvent=at,t.postTurnstileEvent=nt,t.potpack=fu,t.refProperties=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.register=Dn,t.registerForPluginStateChange=function(t){return t({pluginStatus:$n,pluginURL:Wn}),ei.on("pluginStateChange",t),t},t.rotate=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=Math.sin(r),u=Math.cos(r);return t[0]=n*u+a*s,t[1]=i*u+o*s,t[2]=n*-s+a*u,t[3]=i*-s+o*u,t},t.rotateX=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[4],o=e[5],s=e[6],u=e[7],l=e[8],p=e[9],c=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*i+l*n,t[5]=o*i+p*n,t[6]=s*i+c*n,t[7]=u*i+h*n,t[8]=l*i-a*n,t[9]=p*i-o*n,t[10]=c*i-s*n,t[11]=h*i-u*n,t},t.rotateZ=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[0],o=e[1],s=e[2],u=e[3],l=e[4],p=e[5],c=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*i+l*n,t[1]=o*i+p*n,t[2]=s*i+c*n,t[3]=u*i+h*n,t[4]=l*i-a*n,t[5]=p*i-o*n,t[6]=c*i-s*n,t[7]=h*i-u*n,t},t.scale=function(t,e,r){var n=r[0],i=r[1],a=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.scale$1=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t},t.scale$2=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t},t.setCacheLimits=function(t,e){ot=t,st=e;},t.setRTLTextPlugin=function(t,e,r){if(void 0===r&&(r=!1),"deferred"===$n||"loading"===$n||"loaded"===$n)throw new Error("setRTLTextPlugin cannot be called multiple times.");Wn=L.resolveURL(t),$n="deferred",Yn=e,ti(),r||ni();},t.sphericalToCartesian=function(t){var e=t[0],r=t[1],n=t[2];return r+=90,r*=Math.PI/180,n*=Math.PI/180,{x:e*Math.cos(r)*Math.sin(n),y:e*Math.sin(r)*Math.sin(n),z:e*Math.cos(n)}},t.sqrLen=function(t){var e=t[0],r=t[1];return e*e+r*r},t.styleSpec=zt,t.sub=function(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t},t.symbolSize=Fu,t.transformMat3=function(t,e,r){var n=e[0],i=e[1],a=e[2];return t[0]=n*r[0]+i*r[3]+a*r[6],t[1]=n*r[1]+i*r[4]+a*r[7],t[2]=n*r[2]+i*r[5]+a*r[8],t},t.transformMat4=so,t.translate=function(t,e,r){var n,i,a,o,s,u,l,p,c,h,f,y,d=r[0],m=r[1],v=r[2];return e===t?(t[12]=e[0]*d+e[4]*m+e[8]*v+e[12],t[13]=e[1]*d+e[5]*m+e[9]*v+e[13],t[14]=e[2]*d+e[6]*m+e[10]*v+e[14],t[15]=e[3]*d+e[7]*m+e[11]*v+e[15]):(i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],l=e[6],p=e[7],c=e[8],h=e[9],f=e[10],y=e[11],t[0]=n=e[0],t[1]=i,t[2]=a,t[3]=o,t[4]=s,t[5]=u,t[6]=l,t[7]=p,t[8]=c,t[9]=h,t[10]=f,t[11]=y,t[12]=n*d+s*m+c*v+e[12],t[13]=i*d+u*m+h*v+e[13],t[14]=a*d+l*m+f*v+e[14],t[15]=o*d+p*m+y*v+e[15]),t},t.triggerPluginCompletionEvent=Qn,t.uniqueId=f,t.validateCustomStyleLayer=function(t){var e=[],r=t.id;return void 0===r&&e.push({message:"layers."+r+': missing required property "id"'}),void 0===t.render&&e.push({message:"layers."+r+': missing required method "render"'}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:"layers."+r+': property "renderingMode" must be either "2d" or "3d"'}),e},t.validateLight=zn,t.validateStyle=In,t.values=function(t){var e=[];for(var r in t)e.push(t[r]);return e},t.vectorTile=vs,t.version="1.11.0",t.warnOnce=_,t.webpSupported=O,t.window=o,t.wrap=p;}));

define(["./shared"],(function(e){"use strict";function t(e){var r=typeof e;if("number"===r||"boolean"===r||"string"===r||null==e)return JSON.stringify(e);if(Array.isArray(e)){for(var i="[",o=0,n=e;o<n.length;o+=1)i+=t(n[o])+",";return i+"]"}for(var s=Object.keys(e).sort(),a="{",l=0;l<s.length;l++)a+=JSON.stringify(s[l])+":"+t(e[s[l]])+",";return a+"}"}function r(r){for(var i="",o=0,n=e.refProperties;o<n.length;o+=1)i+="/"+t(r[n[o]]);return i}var i=function(e){this.keyCache={},e&&this.replace(e);};i.prototype.replace=function(e){this._layerConfigs={},this._layers={},this.update(e,[]);},i.prototype.update=function(t,i){for(var o=this,n=0,s=t;n<s.length;n+=1){var a=s[n];this._layerConfigs[a.id]=a;var l=this._layers[a.id]=e.createStyleLayer(a);l._featureFilter=e.featureFilter(l.filter),this.keyCache[a.id]&&delete this.keyCache[a.id];}for(var u=0,h=i;u<h.length;u+=1){var c=h[u];delete this.keyCache[c],delete this._layerConfigs[c],delete this._layers[c];}this.familiesBySource={};for(var p=0,f=function(e,t){for(var i={},o=0;o<e.length;o++){var n=t&&t[e[o].id]||r(e[o]);t&&(t[e[o].id]=n);var s=i[n];s||(s=i[n]=[]),s.push(e[o]);}var a=[];for(var l in i)a.push(i[l]);return a}(e.values(this._layerConfigs),this.keyCache);p<f.length;p+=1){var d=f[p].map((function(e){return o._layers[e.id]})),g=d[0];if("none"!==g.visibility){var m=g.source||"",v=this.familiesBySource[m];v||(v=this.familiesBySource[m]={});var y=g.sourceLayer||"_geojsonTileLayer",x=v[y];x||(x=v[y]=[]),x.push(d);}}};var o=function(t){var r={},i=[];for(var o in t){var n=t[o],s=r[o]={};for(var a in n){var l=n[+a];if(l&&0!==l.bitmap.width&&0!==l.bitmap.height){var u={x:0,y:0,w:l.bitmap.width+2,h:l.bitmap.height+2};i.push(u),s[a]={rect:u,metrics:l.metrics};}}}var h=e.potpack(i),c=new e.AlphaImage({width:h.w||1,height:h.h||1});for(var p in t){var f=t[p];for(var d in f){var g=f[+d];if(g&&0!==g.bitmap.width&&0!==g.bitmap.height){var m=r[p][d].rect;e.AlphaImage.copy(g.bitmap,c,{x:0,y:0},{x:m.x+1,y:m.y+1},g.bitmap);}}}this.image=c,this.positions=r;};e.register("GlyphAtlas",o);var n=function(t){this.tileID=new e.OverscaledTileID(t.tileID.overscaledZ,t.tileID.wrap,t.tileID.canonical.z,t.tileID.canonical.x,t.tileID.canonical.y),this.uid=t.uid,this.zoom=t.zoom,this.pixelRatio=t.pixelRatio,this.tileSize=t.tileSize,this.source=t.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=t.showCollisionBoxes,this.collectResourceTiming=!!t.collectResourceTiming,this.returnDependencies=!!t.returnDependencies,this.promoteId=t.promoteId;};function s(t,r,i){for(var o=new e.EvaluationParameters(r),n=0,s=t;n<s.length;n+=1)s[n].recalculate(o,i);}function a(t,r){var i=e.getArrayBuffer(t.request,(function(t,i,o,n){t?r(t):i&&r(null,{vectorTile:new e.vectorTile.VectorTile(new e.pbf(i)),rawData:i,cacheControl:o,expires:n});}));return function(){i.cancel(),r();}}n.prototype.parse=function(t,r,i,n,a){var l=this;this.status="parsing",this.data=t,this.collisionBoxArray=new e.CollisionBoxArray;var u=new e.DictionaryCoder(Object.keys(t.layers).sort()),h=new e.FeatureIndex(this.tileID,this.promoteId);h.bucketLayerIDs=[];var c,p,f,d,g={},m={featureIndex:h,iconDependencies:{},patternDependencies:{},glyphDependencies:{},availableImages:i},v=r.familiesBySource[this.source];for(var y in v){var x=t.layers[y];if(x){1===x.version&&e.warnOnce('Vector tile source "'+this.source+'" layer "'+y+'" does not use vector tile spec v2 and therefore may have some rendering errors.');for(var w=u.encode(y),S=[],I=0;I<x.length;I++){var M=x.feature(I),b=h.getId(M,y);S.push({feature:M,id:b,index:I,sourceLayerIndex:w});}for(var _=0,k=v[y];_<k.length;_+=1){var P=k[_],T=P[0];T.minzoom&&this.zoom<Math.floor(T.minzoom)||T.maxzoom&&this.zoom>=T.maxzoom||"none"!==T.visibility&&(s(P,this.zoom,i),(g[T.id]=T.createBucket({index:h.bucketLayerIDs.length,layers:P,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:w,sourceID:this.source})).populate(S,m,this.tileID.canonical),h.bucketLayerIDs.push(P.map((function(e){return e.id}))));}}}var C=e.mapObject(m.glyphDependencies,(function(e){return Object.keys(e).map(Number)}));Object.keys(C).length?n.send("getGlyphs",{uid:this.uid,stacks:C},(function(e,t){c||(c=e,p=t,z.call(l));})):p={};var D=Object.keys(m.iconDependencies);D.length?n.send("getImages",{icons:D,source:this.source,tileID:this.tileID,type:"icons"},(function(e,t){c||(c=e,f=t,z.call(l));})):f={};var L=Object.keys(m.patternDependencies);function z(){if(c)return a(c);if(p&&f&&d){var t=new o(p),r=new e.ImageAtlas(f,d);for(var n in g){var l=g[n];l instanceof e.SymbolBucket?(s(l.layers,this.zoom,i),e.performSymbolLayout(l,p,t.positions,f,r.iconPositions,this.showCollisionBoxes,this.tileID.canonical)):l.hasPattern&&(l instanceof e.LineBucket||l instanceof e.FillBucket||l instanceof e.FillExtrusionBucket)&&(s(l.layers,this.zoom,i),l.addFeatures(m,this.tileID.canonical,r.patternPositions));}this.status="done",a(null,{buckets:e.values(g).filter((function(e){return !e.isEmpty()})),featureIndex:h,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:t.image,imageAtlas:r,glyphMap:this.returnDependencies?p:null,iconMap:this.returnDependencies?f:null,glyphPositions:this.returnDependencies?t.positions:null});}}L.length?n.send("getImages",{icons:L,source:this.source,tileID:this.tileID,type:"patterns"},(function(e,t){c||(c=e,d=t,z.call(l));})):d={},z.call(this);};var l=function(e,t,r,i){this.actor=e,this.layerIndex=t,this.availableImages=r,this.loadVectorData=i||a,this.loading={},this.loaded={};};l.prototype.loadTile=function(t,r){var i=this,o=t.uid;this.loading||(this.loading={});var s=!!(t&&t.request&&t.request.collectResourceTiming)&&new e.RequestPerformance(t.request),a=this.loading[o]=new n(t);a.abort=this.loadVectorData(t,(function(t,n){if(delete i.loading[o],t||!n)return a.status="done",i.loaded[o]=a,r(t);var l=n.rawData,u={};n.expires&&(u.expires=n.expires),n.cacheControl&&(u.cacheControl=n.cacheControl);var h={};if(s){var c=s.finish();c&&(h.resourceTiming=JSON.parse(JSON.stringify(c)));}a.vectorTile=n.vectorTile,a.parse(n.vectorTile,i.layerIndex,i.availableImages,i.actor,(function(t,i){if(t||!i)return r(t);r(null,e.extend({rawTileData:l.slice(0)},i,u,h));})),i.loaded=i.loaded||{},i.loaded[o]=a;}));},l.prototype.reloadTile=function(e,t){var r=this,i=this.loaded,o=e.uid,n=this;if(i&&i[o]){var s=i[o];s.showCollisionBoxes=e.showCollisionBoxes;var a=function(e,i){var o=s.reloadCallback;o&&(delete s.reloadCallback,s.parse(s.vectorTile,n.layerIndex,r.availableImages,n.actor,o)),t(e,i);};"parsing"===s.status?s.reloadCallback=a:"done"===s.status&&(s.vectorTile?s.parse(s.vectorTile,this.layerIndex,this.availableImages,this.actor,a):a());}},l.prototype.abortTile=function(e,t){var r=this.loading,i=e.uid;r&&r[i]&&r[i].abort&&(r[i].abort(),delete r[i]),t();},l.prototype.removeTile=function(e,t){var r=this.loaded,i=e.uid;r&&r[i]&&delete r[i],t();};var u=e.window.ImageBitmap,h=function(){this.loaded={};};function c(e,t){if(0!==e.length){p(e[0],t);for(var r=1;r<e.length;r++)p(e[r],!t);}}function p(e,t){for(var r=0,i=0,o=e.length,n=o-1;i<o;n=i++)r+=(e[i][0]-e[n][0])*(e[n][1]+e[i][1]);r>=0!=!!t&&e.reverse();}h.prototype.loadTile=function(t,r){var i=t.uid,o=t.encoding,n=t.rawImageData,s=u&&n instanceof u?this.getImageData(n):n,a=new e.DEMData(i,s,o);this.loaded=this.loaded||{},this.loaded[i]=a,r(null,a);},h.prototype.getImageData=function(t){this.offscreenCanvas&&this.offscreenCanvasContext||(this.offscreenCanvas=new OffscreenCanvas(t.width,t.height),this.offscreenCanvasContext=this.offscreenCanvas.getContext("2d")),this.offscreenCanvas.width=t.width,this.offscreenCanvas.height=t.height,this.offscreenCanvasContext.drawImage(t,0,0,t.width,t.height);var r=this.offscreenCanvasContext.getImageData(-1,-1,t.width+2,t.height+2);return this.offscreenCanvasContext.clearRect(0,0,this.offscreenCanvas.width,this.offscreenCanvas.height),new e.RGBAImage({width:r.width,height:r.height},r.data)},h.prototype.removeTile=function(e){var t=this.loaded,r=e.uid;t&&t[r]&&delete t[r];};var f=e.vectorTile.VectorTileFeature.prototype.toGeoJSON,d=function(t){this._feature=t,this.extent=e.EXTENT,this.type=t.type,this.properties=t.tags,"id"in t&&!isNaN(t.id)&&(this.id=parseInt(t.id,10));};d.prototype.loadGeometry=function(){if(1===this._feature.type){for(var t=[],r=0,i=this._feature.geometry;r<i.length;r+=1){var o=i[r];t.push([new e.Point$1(o[0],o[1])]);}return t}for(var n=[],s=0,a=this._feature.geometry;s<a.length;s+=1){for(var l=[],u=0,h=a[s];u<h.length;u+=1){var c=h[u];l.push(new e.Point$1(c[0],c[1]));}n.push(l);}return n},d.prototype.toGeoJSON=function(e,t,r){return f.call(this,e,t,r)};var g=function(t){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=e.EXTENT,this.length=t.length,this._features=t;};g.prototype.feature=function(e){return new d(this._features[e])};var m=e.vectorTile.VectorTileFeature,v=y;function y(e,t){this.options=t||{},this.features=e,this.length=e.length;}function x(e,t){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=t||4096;}y.prototype.feature=function(e){return new x(this.features[e],this.options.extent)},x.prototype.loadGeometry=function(){var t=this.rawGeometry;this.geometry=[];for(var r=0;r<t.length;r++){for(var i=t[r],o=[],n=0;n<i.length;n++)o.push(new e.Point$1(i[n][0],i[n][1]));this.geometry.push(o);}return this.geometry},x.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,r=-1/0,i=1/0,o=-1/0,n=0;n<e.length;n++)for(var s=e[n],a=0;a<s.length;a++){var l=s[a];t=Math.min(t,l.x),r=Math.max(r,l.x),i=Math.min(i,l.y),o=Math.max(o,l.y);}return [t,i,r,o]},x.prototype.toGeoJSON=m.prototype.toGeoJSON;var w=I,S=v;function I(t){var r=new e.pbf;return function(e,t){for(var r in e.layers)t.writeMessage(3,M,e.layers[r]);}(t,r),r.finish()}function M(e,t){var r;t.writeVarintField(15,e.version||1),t.writeStringField(1,e.name||""),t.writeVarintField(5,e.extent||4096);var i={keys:[],values:[],keycache:{},valuecache:{}};for(r=0;r<e.length;r++)i.feature=e.feature(r),t.writeMessage(2,b,i);var o=i.keys;for(r=0;r<o.length;r++)t.writeStringField(3,o[r]);var n=i.values;for(r=0;r<n.length;r++)t.writeMessage(4,C,n[r]);}function b(e,t){var r=e.feature;void 0!==r.id&&t.writeVarintField(1,r.id),t.writeMessage(2,_,e),t.writeVarintField(3,r.type),t.writeMessage(4,T,r);}function _(e,t){var r=e.feature,i=e.keys,o=e.values,n=e.keycache,s=e.valuecache;for(var a in r.properties){var l=n[a];void 0===l&&(i.push(a),n[a]=l=i.length-1),t.writeVarint(l);var u=r.properties[a],h=typeof u;"string"!==h&&"boolean"!==h&&"number"!==h&&(u=JSON.stringify(u));var c=h+":"+u,p=s[c];void 0===p&&(o.push(u),s[c]=p=o.length-1),t.writeVarint(p);}}function k(e,t){return (t<<3)+(7&e)}function P(e){return e<<1^e>>31}function T(e,t){for(var r=e.loadGeometry(),i=e.type,o=0,n=0,s=r.length,a=0;a<s;a++){var l=r[a],u=1;1===i&&(u=l.length),t.writeVarint(k(1,u));for(var h=3===i?l.length-1:l.length,c=0;c<h;c++){1===c&&1!==i&&t.writeVarint(k(2,h-1));var p=l[c].x-o,f=l[c].y-n;t.writeVarint(P(p)),t.writeVarint(P(f)),o+=p,n+=f;}3===i&&t.writeVarint(k(7,1));}}function C(e,t){var r=typeof e;"string"===r?t.writeStringField(1,e):"boolean"===r?t.writeBooleanField(7,e):"number"===r&&(e%1!=0?t.writeDoubleField(3,e):e<0?t.writeSVarintField(6,e):t.writeVarintField(5,e));}function D(e,t,r,i){L(e,r,i),L(t,2*r,2*i),L(t,2*r+1,2*i+1);}function L(e,t,r){var i=e[t];e[t]=e[r],e[r]=i;}function z(e,t,r,i){var o=e-r,n=t-i;return o*o+n*n}w.fromVectorTileJs=I,w.fromGeojsonVt=function(e,t){t=t||{};var r={};for(var i in e)r[i]=new v(e[i].features,t),r[i].name=i,r[i].version=t.version,r[i].extent=t.extent;return I({layers:r})},w.GeoJSONWrapper=S;var O=function(e){return e[0]},E=function(e){return e[1]},F=function(e,t,r,i,o){void 0===t&&(t=O),void 0===r&&(r=E),void 0===i&&(i=64),void 0===o&&(o=Float64Array),this.nodeSize=i,this.points=e;for(var n=e.length<65536?Uint16Array:Uint32Array,s=this.ids=new n(e.length),a=this.coords=new o(2*e.length),l=0;l<e.length;l++)s[l]=l,a[2*l]=t(e[l]),a[2*l+1]=r(e[l]);!function e(t,r,i,o,n,s){if(!(n-o<=i)){var a=o+n>>1;!function e(t,r,i,o,n,s){for(;n>o;){if(n-o>600){var a=n-o+1,l=i-o+1,u=Math.log(a),h=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*h*(a-h)/a)*(l-a/2<0?-1:1);e(t,r,i,Math.max(o,Math.floor(i-l*h/a+c)),Math.min(n,Math.floor(i+(a-l)*h/a+c)),s);}var p=r[2*i+s],f=o,d=n;for(D(t,r,o,i),r[2*n+s]>p&&D(t,r,o,n);f<d;){for(D(t,r,f,d),f++,d--;r[2*f+s]<p;)f++;for(;r[2*d+s]>p;)d--;}r[2*o+s]===p?D(t,r,o,d):D(t,r,++d,n),d<=i&&(o=d+1),i<=d&&(n=d-1);}}(t,r,a,o,n,s%2),e(t,r,i,o,a-1,s+1),e(t,r,i,a+1,n,s+1);}}(s,a,i,0,s.length-1,0);};F.prototype.range=function(e,t,r,i){return function(e,t,r,i,o,n,s){for(var a,l,u=[0,e.length-1,0],h=[];u.length;){var c=u.pop(),p=u.pop(),f=u.pop();if(p-f<=s)for(var d=f;d<=p;d++)l=t[2*d+1],(a=t[2*d])>=r&&a<=o&&l>=i&&l<=n&&h.push(e[d]);else {var g=Math.floor((f+p)/2);l=t[2*g+1],(a=t[2*g])>=r&&a<=o&&l>=i&&l<=n&&h.push(e[g]);var m=(c+1)%2;(0===c?r<=a:i<=l)&&(u.push(f),u.push(g-1),u.push(m)),(0===c?o>=a:n>=l)&&(u.push(g+1),u.push(p),u.push(m));}}return h}(this.ids,this.coords,e,t,r,i,this.nodeSize)},F.prototype.within=function(e,t,r){return function(e,t,r,i,o,n){for(var s=[0,e.length-1,0],a=[],l=o*o;s.length;){var u=s.pop(),h=s.pop(),c=s.pop();if(h-c<=n)for(var p=c;p<=h;p++)z(t[2*p],t[2*p+1],r,i)<=l&&a.push(e[p]);else {var f=Math.floor((c+h)/2),d=t[2*f],g=t[2*f+1];z(d,g,r,i)<=l&&a.push(e[f]);var m=(u+1)%2;(0===u?r-o<=d:i-o<=g)&&(s.push(c),s.push(f-1),s.push(m)),(0===u?r+o>=d:i+o>=g)&&(s.push(f+1),s.push(h),s.push(m));}}return a}(this.ids,this.coords,e,t,r,this.nodeSize)};var N={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:function(e){return e}},J=function(e){this.options=V(Object.create(N),e),this.trees=new Array(this.options.maxZoom+1);};function Z(e,t,r,i,o){return {x:e,y:t,zoom:1/0,id:r,parentId:-1,numPoints:i,properties:o}}function A(e,t){var r=e.geometry.coordinates,i=r[1];return {x:Y(r[0]),y:j(i),zoom:1/0,index:t,parentId:-1}}function B(e){return {type:"Feature",id:e.id,properties:G(e),geometry:{type:"Point",coordinates:[(i=e.x,360*(i-.5)),(t=e.y,r=(180-360*t)*Math.PI/180,360*Math.atan(Math.exp(r))/Math.PI-90)]}};var t,r,i;}function G(e){var t=e.numPoints,r=t>=1e4?Math.round(t/1e3)+"k":t>=1e3?Math.round(t/100)/10+"k":t;return V(V({},e.properties),{cluster:!0,cluster_id:e.id,point_count:t,point_count_abbreviated:r})}function Y(e){return e/360+.5}function j(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function V(e,t){for(var r in t)e[r]=t[r];return e}function X(e){return e.x}function W(e){return e.y}function R(e,t,r,i,o,n){var s=o-r,a=n-i;if(0!==s||0!==a){var l=((e-r)*s+(t-i)*a)/(s*s+a*a);l>1?(r=o,i=n):l>0&&(r+=s*l,i+=a*l);}return (s=e-r)*s+(a=t-i)*a}function q(e,t,r,i){var o={id:void 0===e?null:e,type:t,geometry:r,tags:i,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,r=e.type;if("Point"===r||"MultiPoint"===r||"LineString"===r)U(e,t);else if("Polygon"===r||"MultiLineString"===r)for(var i=0;i<t.length;i++)U(e,t[i]);else if("MultiPolygon"===r)for(i=0;i<t.length;i++)for(var o=0;o<t[i].length;o++)U(e,t[i][o]);}(o),o}function U(e,t){for(var r=0;r<t.length;r+=3)e.minX=Math.min(e.minX,t[r]),e.minY=Math.min(e.minY,t[r+1]),e.maxX=Math.max(e.maxX,t[r]),e.maxY=Math.max(e.maxY,t[r+1]);}function $(e,t,r,i){if(t.geometry){var o=t.geometry.coordinates,n=t.geometry.type,s=Math.pow(r.tolerance/((1<<r.maxZoom)*r.extent),2),a=[],l=t.id;if(r.promoteId?l=t.properties[r.promoteId]:r.generateId&&(l=i||0),"Point"===n)H(o,a);else if("MultiPoint"===n)for(var u=0;u<o.length;u++)H(o[u],a);else if("LineString"===n)K(o,a,s,!1);else if("MultiLineString"===n){if(r.lineMetrics){for(u=0;u<o.length;u++)K(o[u],a=[],s,!1),e.push(q(l,"LineString",a,t.properties));return}Q(o,a,s,!1);}else if("Polygon"===n)Q(o,a,s,!0);else {if("MultiPolygon"!==n){if("GeometryCollection"===n){for(u=0;u<t.geometry.geometries.length;u++)$(e,{id:l,geometry:t.geometry.geometries[u],properties:t.properties},r,i);return}throw new Error("Input data is not a valid GeoJSON object.")}for(u=0;u<o.length;u++){var h=[];Q(o[u],h,s,!0),a.push(h);}}e.push(q(l,n,a,t.properties));}}function H(e,t){t.push(ee(e[0])),t.push(te(e[1])),t.push(0);}function K(e,t,r,i){for(var o,n,s=0,a=0;a<e.length;a++){var l=ee(e[a][0]),u=te(e[a][1]);t.push(l),t.push(u),t.push(0),a>0&&(s+=i?(o*u-l*n)/2:Math.sqrt(Math.pow(l-o,2)+Math.pow(u-n,2))),o=l,n=u;}var h=t.length-3;t[2]=1,function e(t,r,i,o){for(var n,s=o,a=i-r>>1,l=i-r,u=t[r],h=t[r+1],c=t[i],p=t[i+1],f=r+3;f<i;f+=3){var d=R(t[f],t[f+1],u,h,c,p);if(d>s)n=f,s=d;else if(d===s){var g=Math.abs(f-a);g<l&&(n=f,l=g);}}s>o&&(n-r>3&&e(t,r,n,o),t[n+2]=s,i-n>3&&e(t,n,i,o));}(t,0,h,r),t[h+2]=1,t.size=Math.abs(s),t.start=0,t.end=t.size;}function Q(e,t,r,i){for(var o=0;o<e.length;o++){var n=[];K(e[o],n,r,i),t.push(n);}}function ee(e){return e/360+.5}function te(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function re(e,t,r,i,o,n,s,a){if(i/=t,n>=(r/=t)&&s<i)return e;if(s<r||n>=i)return null;for(var l=[],u=0;u<e.length;u++){var h=e[u],c=h.geometry,p=h.type,f=0===o?h.minX:h.minY,d=0===o?h.maxX:h.maxY;if(f>=r&&d<i)l.push(h);else if(!(d<r||f>=i)){var g=[];if("Point"===p||"MultiPoint"===p)ie(c,g,r,i,o);else if("LineString"===p)oe(c,g,r,i,o,!1,a.lineMetrics);else if("MultiLineString"===p)se(c,g,r,i,o,!1);else if("Polygon"===p)se(c,g,r,i,o,!0);else if("MultiPolygon"===p)for(var m=0;m<c.length;m++){var v=[];se(c[m],v,r,i,o,!0),v.length&&g.push(v);}if(g.length){if(a.lineMetrics&&"LineString"===p){for(m=0;m<g.length;m++)l.push(q(h.id,p,g[m],h.tags));continue}"LineString"!==p&&"MultiLineString"!==p||(1===g.length?(p="LineString",g=g[0]):p="MultiLineString"),"Point"!==p&&"MultiPoint"!==p||(p=3===g.length?"Point":"MultiPoint"),l.push(q(h.id,p,g,h.tags));}}}return l.length?l:null}function ie(e,t,r,i,o){for(var n=0;n<e.length;n+=3){var s=e[n+o];s>=r&&s<=i&&(t.push(e[n]),t.push(e[n+1]),t.push(e[n+2]));}}function oe(e,t,r,i,o,n,s){for(var a,l,u=ne(e),h=0===o?le:ue,c=e.start,p=0;p<e.length-3;p+=3){var f=e[p],d=e[p+1],g=e[p+2],m=e[p+3],v=e[p+4],y=0===o?f:d,x=0===o?m:v,w=!1;s&&(a=Math.sqrt(Math.pow(f-m,2)+Math.pow(d-v,2))),y<r?x>r&&(l=h(u,f,d,m,v,r),s&&(u.start=c+a*l)):y>i?x<i&&(l=h(u,f,d,m,v,i),s&&(u.start=c+a*l)):ae(u,f,d,g),x<r&&y>=r&&(l=h(u,f,d,m,v,r),w=!0),x>i&&y<=i&&(l=h(u,f,d,m,v,i),w=!0),!n&&w&&(s&&(u.end=c+a*l),t.push(u),u=ne(e)),s&&(c+=a);}var S=e.length-3;f=e[S],d=e[S+1],g=e[S+2],(y=0===o?f:d)>=r&&y<=i&&ae(u,f,d,g),S=u.length-3,n&&S>=3&&(u[S]!==u[0]||u[S+1]!==u[1])&&ae(u,u[0],u[1],u[2]),u.length&&t.push(u);}function ne(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function se(e,t,r,i,o,n){for(var s=0;s<e.length;s++)oe(e[s],t,r,i,o,n,!1);}function ae(e,t,r,i){e.push(t),e.push(r),e.push(i);}function le(e,t,r,i,o,n){var s=(n-t)/(i-t);return e.push(n),e.push(r+(o-r)*s),e.push(1),s}function ue(e,t,r,i,o,n){var s=(n-r)/(o-r);return e.push(t+(i-t)*s),e.push(n),e.push(1),s}function he(e,t){for(var r=[],i=0;i<e.length;i++){var o,n=e[i],s=n.type;if("Point"===s||"MultiPoint"===s||"LineString"===s)o=ce(n.geometry,t);else if("MultiLineString"===s||"Polygon"===s){o=[];for(var a=0;a<n.geometry.length;a++)o.push(ce(n.geometry[a],t));}else if("MultiPolygon"===s)for(o=[],a=0;a<n.geometry.length;a++){for(var l=[],u=0;u<n.geometry[a].length;u++)l.push(ce(n.geometry[a][u],t));o.push(l);}r.push(q(n.id,s,o,n.tags));}return r}function ce(e,t){var r=[];r.size=e.size,void 0!==e.start&&(r.start=e.start,r.end=e.end);for(var i=0;i<e.length;i+=3)r.push(e[i]+t,e[i+1],e[i+2]);return r}function pe(e,t){if(e.transformed)return e;var r,i,o,n=1<<e.z,s=e.x,a=e.y;for(r=0;r<e.features.length;r++){var l=e.features[r],u=l.geometry,h=l.type;if(l.geometry=[],1===h)for(i=0;i<u.length;i+=2)l.geometry.push(fe(u[i],u[i+1],t,n,s,a));else for(i=0;i<u.length;i++){var c=[];for(o=0;o<u[i].length;o+=2)c.push(fe(u[i][o],u[i][o+1],t,n,s,a));l.geometry.push(c);}}return e.transformed=!0,e}function fe(e,t,r,i,o,n){return [Math.round(r*(e*i-o)),Math.round(r*(t*i-n))]}function de(e,t,r,i,o){for(var n=t===o.maxZoom?0:o.tolerance/((1<<t)*o.extent),s={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:i,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},a=0;a<e.length;a++){s.numFeatures++,ge(s,e[a],n,o);var l=e[a].minX,u=e[a].minY,h=e[a].maxX,c=e[a].maxY;l<s.minX&&(s.minX=l),u<s.minY&&(s.minY=u),h>s.maxX&&(s.maxX=h),c>s.maxY&&(s.maxY=c);}return s}function ge(e,t,r,i){var o=t.geometry,n=t.type,s=[];if("Point"===n||"MultiPoint"===n)for(var a=0;a<o.length;a+=3)s.push(o[a]),s.push(o[a+1]),e.numPoints++,e.numSimplified++;else if("LineString"===n)me(s,o,e,r,!1,!1);else if("MultiLineString"===n||"Polygon"===n)for(a=0;a<o.length;a++)me(s,o[a],e,r,"Polygon"===n,0===a);else if("MultiPolygon"===n)for(var l=0;l<o.length;l++){var u=o[l];for(a=0;a<u.length;a++)me(s,u[a],e,r,!0,0===a);}if(s.length){var h=t.tags||null;if("LineString"===n&&i.lineMetrics){for(var c in h={},t.tags)h[c]=t.tags[c];h.mapbox_clip_start=o.start/o.size,h.mapbox_clip_end=o.end/o.size;}var p={geometry:s,type:"Polygon"===n||"MultiPolygon"===n?3:"LineString"===n||"MultiLineString"===n?2:1,tags:h};null!==t.id&&(p.id=t.id),e.features.push(p);}}function me(e,t,r,i,o,n){var s=i*i;if(i>0&&t.size<(o?s:i))r.numPoints+=t.length/3;else {for(var a=[],l=0;l<t.length;l+=3)(0===i||t[l+2]>s)&&(r.numSimplified++,a.push(t[l]),a.push(t[l+1])),r.numPoints++;o&&function(e,t){for(var r=0,i=0,o=e.length,n=o-2;i<o;n=i,i+=2)r+=(e[i]-e[n])*(e[i+1]+e[n+1]);if(r>0===t)for(i=0,o=e.length;i<o/2;i+=2){var s=e[i],a=e[i+1];e[i]=e[o-2-i],e[i+1]=e[o-1-i],e[o-2-i]=s,e[o-1-i]=a;}}(a,n),e.push(a);}}function ve(e,t){var r=(t=this.options=function(e,t){for(var r in t)e[r]=t[r];return e}(Object.create(this.options),t)).debug;if(r&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var i=function(e,t){var r=[];if("FeatureCollection"===e.type)for(var i=0;i<e.features.length;i++)$(r,e.features[i],t,i);else $(r,"Feature"===e.type?e:{geometry:e},t);return r}(e,t);this.tiles={},this.tileCoords=[],r&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),(i=function(e,t){var r=t.buffer/t.extent,i=e,o=re(e,1,-1-r,r,0,-1,2,t),n=re(e,1,1-r,2+r,0,-1,2,t);return (o||n)&&(i=re(e,1,-r,1+r,0,-1,2,t)||[],o&&(i=he(o,1).concat(i)),n&&(i=i.concat(he(n,-1)))),i}(i,t)).length&&this.splitTile(i,0,0,0),r&&(i.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)));}function ye(e,t,r){return 32*((1<<e)*r+t)+e}function xe(e,t){var r=e.tileID.canonical;if(!this._geoJSONIndex)return t(null,null);var i=this._geoJSONIndex.getTile(r.z,r.x,r.y);if(!i)return t(null,null);var o=new g(i.features),n=w(o);0===n.byteOffset&&n.byteLength===n.buffer.byteLength||(n=new Uint8Array(n)),t(null,{vectorTile:o,rawData:n.buffer});}J.prototype.load=function(e){var t=this.options,r=t.log,i=t.minZoom,o=t.maxZoom,n=t.nodeSize;r&&console.time("total time");var s="prepare "+e.length+" points";r&&console.time(s),this.points=e;for(var a=[],l=0;l<e.length;l++)e[l].geometry&&a.push(A(e[l],l));this.trees[o+1]=new F(a,X,W,n,Float32Array),r&&console.timeEnd(s);for(var u=o;u>=i;u--){var h=+Date.now();a=this._cluster(a,u),this.trees[u]=new F(a,X,W,n,Float32Array),r&&console.log("z%d: %d clusters in %dms",u,a.length,+Date.now()-h);}return r&&console.timeEnd("total time"),this},J.prototype.getClusters=function(e,t){var r=((e[0]+180)%360+360)%360-180,i=Math.max(-90,Math.min(90,e[1])),o=180===e[2]?180:((e[2]+180)%360+360)%360-180,n=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)r=-180,o=180;else if(r>o){var s=this.getClusters([r,i,180,n],t),a=this.getClusters([-180,i,o,n],t);return s.concat(a)}for(var l=this.trees[this._limitZoom(t)],u=[],h=0,c=l.range(Y(r),j(n),Y(o),j(i));h<c.length;h+=1){var p=l.points[c[h]];u.push(p.numPoints?B(p):this.points[p.index]);}return u},J.prototype.getChildren=function(e){var t=this._getOriginId(e),r=this._getOriginZoom(e),i="No cluster with the specified id.",o=this.trees[r];if(!o)throw new Error(i);var n=o.points[t];if(!n)throw new Error(i);for(var s=this.options.radius/(this.options.extent*Math.pow(2,r-1)),a=[],l=0,u=o.within(n.x,n.y,s);l<u.length;l+=1){var h=o.points[u[l]];h.parentId===e&&a.push(h.numPoints?B(h):this.points[h.index]);}if(0===a.length)throw new Error(i);return a},J.prototype.getLeaves=function(e,t,r){var i=[];return this._appendLeaves(i,e,t=t||10,r=r||0,0),i},J.prototype.getTile=function(e,t,r){var i=this.trees[this._limitZoom(e)],o=Math.pow(2,e),n=this.options,s=n.radius/n.extent,a=(r-s)/o,l=(r+1+s)/o,u={features:[]};return this._addTileFeatures(i.range((t-s)/o,a,(t+1+s)/o,l),i.points,t,r,o,u),0===t&&this._addTileFeatures(i.range(1-s/o,a,1,l),i.points,o,r,o,u),t===o-1&&this._addTileFeatures(i.range(0,a,s/o,l),i.points,-1,r,o,u),u.features.length?u:null},J.prototype.getClusterExpansionZoom=function(e){for(var t=this._getOriginZoom(e)-1;t<=this.options.maxZoom;){var r=this.getChildren(e);if(t++,1!==r.length)break;e=r[0].properties.cluster_id;}return t},J.prototype._appendLeaves=function(e,t,r,i,o){for(var n=0,s=this.getChildren(t);n<s.length;n+=1){var a=s[n],l=a.properties;if(l&&l.cluster?o+l.point_count<=i?o+=l.point_count:o=this._appendLeaves(e,l.cluster_id,r,i,o):o<i?o++:e.push(a),e.length===r)break}return o},J.prototype._addTileFeatures=function(e,t,r,i,o,n){for(var s=0,a=e;s<a.length;s+=1){var l=t[a[s]],u=l.numPoints,h={type:1,geometry:[[Math.round(this.options.extent*(l.x*o-r)),Math.round(this.options.extent*(l.y*o-i))]],tags:u?G(l):this.points[l.index].properties},c=void 0;u?c=l.id:this.options.generateId?c=l.index:this.points[l.index].id&&(c=this.points[l.index].id),void 0!==c&&(h.id=c),n.features.push(h);}},J.prototype._limitZoom=function(e){return Math.max(this.options.minZoom,Math.min(+e,this.options.maxZoom+1))},J.prototype._cluster=function(e,t){for(var r=[],i=this.options,o=i.reduce,n=i.minPoints,s=i.radius/(i.extent*Math.pow(2,t)),a=0;a<e.length;a++){var l=e[a];if(!(l.zoom<=t)){l.zoom=t;for(var u=this.trees[t+1],h=u.within(l.x,l.y,s),c=l.numPoints||1,p=c,f=0,d=h;f<d.length;f+=1){var g=u.points[d[f]];g.zoom>t&&(p+=g.numPoints||1);}if(p>=n){for(var m=l.x*c,v=l.y*c,y=o&&c>1?this._map(l,!0):null,x=(a<<5)+(t+1)+this.points.length,w=0,S=h;w<S.length;w+=1){var I=u.points[S[w]];if(!(I.zoom<=t)){I.zoom=t;var M=I.numPoints||1;m+=I.x*M,v+=I.y*M,I.parentId=x,o&&(y||(y=this._map(l,!0)),o(y,this._map(I)));}}l.parentId=x,r.push(Z(m/p,v/p,x,p,y));}else if(r.push(l),p>1)for(var b=0,_=h;b<_.length;b+=1){var k=u.points[_[b]];k.zoom<=t||(k.zoom=t,r.push(k));}}}return r},J.prototype._getOriginId=function(e){return e-this.points.length>>5},J.prototype._getOriginZoom=function(e){return (e-this.points.length)%32},J.prototype._map=function(e,t){if(e.numPoints)return t?V({},e.properties):e.properties;var r=this.points[e.index].properties,i=this.options.map(r);return t&&i===r?V({},i):i},ve.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},ve.prototype.splitTile=function(e,t,r,i,o,n,s){for(var a=[e,t,r,i],l=this.options,u=l.debug;a.length;){i=a.pop(),r=a.pop(),t=a.pop(),e=a.pop();var h=1<<t,c=ye(t,r,i),p=this.tiles[c];if(!p&&(u>1&&console.time("creation"),p=this.tiles[c]=de(e,t,r,i,l),this.tileCoords.push({z:t,x:r,y:i}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,r,i,p.numFeatures,p.numPoints,p.numSimplified),console.timeEnd("creation"));var f="z"+t;this.stats[f]=(this.stats[f]||0)+1,this.total++;}if(p.source=e,o){if(t===l.maxZoom||t===o)continue;var d=1<<o-t;if(r!==Math.floor(n/d)||i!==Math.floor(s/d))continue}else if(t===l.indexMaxZoom||p.numPoints<=l.indexMaxPoints)continue;if(p.source=null,0!==e.length){u>1&&console.time("clipping");var g,m,v,y,x,w,S=.5*l.buffer/l.extent,I=.5-S,M=.5+S,b=1+S;g=m=v=y=null,x=re(e,h,r-S,r+M,0,p.minX,p.maxX,l),w=re(e,h,r+I,r+b,0,p.minX,p.maxX,l),e=null,x&&(g=re(x,h,i-S,i+M,1,p.minY,p.maxY,l),m=re(x,h,i+I,i+b,1,p.minY,p.maxY,l),x=null),w&&(v=re(w,h,i-S,i+M,1,p.minY,p.maxY,l),y=re(w,h,i+I,i+b,1,p.minY,p.maxY,l),w=null),u>1&&console.timeEnd("clipping"),a.push(g||[],t+1,2*r,2*i),a.push(m||[],t+1,2*r,2*i+1),a.push(v||[],t+1,2*r+1,2*i),a.push(y||[],t+1,2*r+1,2*i+1);}}},ve.prototype.getTile=function(e,t,r){var i=this.options,o=i.extent,n=i.debug;if(e<0||e>24)return null;var s=1<<e,a=ye(e,t=(t%s+s)%s,r);if(this.tiles[a])return pe(this.tiles[a],o);n>1&&console.log("drilling down to z%d-%d-%d",e,t,r);for(var l,u=e,h=t,c=r;!l&&u>0;)u--,h=Math.floor(h/2),c=Math.floor(c/2),l=this.tiles[ye(u,h,c)];return l&&l.source?(n>1&&console.log("found parent tile z%d-%d-%d",u,h,c),n>1&&console.time("drilling down"),this.splitTile(l.source,u,h,c,e,t,r),n>1&&console.timeEnd("drilling down"),this.tiles[a]?pe(this.tiles[a],o):null):null};var we=function(t){function r(e,r,i,o){t.call(this,e,r,i,xe),o&&(this.loadGeoJSON=o);}return t&&(r.__proto__=t),(r.prototype=Object.create(t&&t.prototype)).constructor=r,r.prototype.loadData=function(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),this._pendingCallback=t,this._pendingLoadDataParams=e,this._state&&"Idle"!==this._state?this._state="NeedsLoadData":(this._state="Coalescing",this._loadData());},r.prototype._loadData=function(){var t=this;if(this._pendingCallback&&this._pendingLoadDataParams){var r=this._pendingCallback,i=this._pendingLoadDataParams;delete this._pendingCallback,delete this._pendingLoadDataParams;var o=!!(i&&i.request&&i.request.collectResourceTiming)&&new e.RequestPerformance(i.request);this.loadGeoJSON(i,(function(n,s){if(n||!s)return r(n);if("object"!=typeof s)return r(new Error("Input data given to '"+i.source+"' is not a valid GeoJSON object."));!function e(t,r){var i,o=t&&t.type;if("FeatureCollection"===o)for(i=0;i<t.features.length;i++)e(t.features[i],r);else if("GeometryCollection"===o)for(i=0;i<t.geometries.length;i++)e(t.geometries[i],r);else if("Feature"===o)e(t.geometry,r);else if("Polygon"===o)c(t.coordinates,r);else if("MultiPolygon"===o)for(i=0;i<t.coordinates.length;i++)c(t.coordinates[i],r);return t}(s,!0);try{t._geoJSONIndex=i.cluster?new J(function(t){var r=t.superclusterOptions,i=t.clusterProperties;if(!i||!r)return r;for(var o={},n={},s={accumulated:null,zoom:0},a={properties:null},l=Object.keys(i),u=0,h=l;u<h.length;u+=1){var c=h[u],p=i[c],f=p[0],d=e.createExpression(p[1]),g=e.createExpression("string"==typeof f?[f,["accumulated"],["get",c]]:f);o[c]=d.value,n[c]=g.value;}return r.map=function(e){a.properties=e;for(var t={},r=0,i=l;r<i.length;r+=1){var n=i[r];t[n]=o[n].evaluate(s,a);}return t},r.reduce=function(e,t){a.properties=t;for(var r=0,i=l;r<i.length;r+=1){var o=i[r];s.accumulated=e[o],e[o]=n[o].evaluate(s,a);}},r}(i)).load(s.features):function(e,t){return new ve(e,t)}(s,i.geojsonVtOptions);}catch(n){return r(n)}t.loaded={};var a={};if(o){var l=o.finish();l&&(a.resourceTiming={},a.resourceTiming[i.source]=JSON.parse(JSON.stringify(l)));}r(null,a);}));}},r.prototype.coalesce=function(){"Coalescing"===this._state?this._state="Idle":"NeedsLoadData"===this._state&&(this._state="Coalescing",this._loadData());},r.prototype.reloadTile=function(e,r){var i=this.loaded;return i&&i[e.uid]?t.prototype.reloadTile.call(this,e,r):this.loadTile(e,r)},r.prototype.loadGeoJSON=function(t,r){if(t.request)e.getJSON(t.request,r);else {if("string"!=typeof t.data)return r(new Error("Input data given to '"+t.source+"' is not a valid GeoJSON object."));try{return r(null,JSON.parse(t.data))}catch(e){return r(new Error("Input data given to '"+t.source+"' is not a valid GeoJSON object."))}}},r.prototype.removeSource=function(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),t();},r.prototype.getClusterExpansionZoom=function(e,t){try{t(null,this._geoJSONIndex.getClusterExpansionZoom(e.clusterId));}catch(e){t(e);}},r.prototype.getClusterChildren=function(e,t){try{t(null,this._geoJSONIndex.getChildren(e.clusterId));}catch(e){t(e);}},r.prototype.getClusterLeaves=function(e,t){try{t(null,this._geoJSONIndex.getLeaves(e.clusterId,e.limit,e.offset));}catch(e){t(e);}},r}(l),Se=function(t){var r=this;this.self=t,this.actor=new e.Actor(t,this),this.layerIndexes={},this.availableImages={},this.workerSourceTypes={vector:l,geojson:we},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=function(e,t){if(r.workerSourceTypes[e])throw new Error('Worker source with name "'+e+'" already registered.');r.workerSourceTypes[e]=t;},this.self.registerRTLTextPlugin=function(t){if(e.plugin.isParsed())throw new Error("RTL text plugin already registered.");e.plugin.applyArabicShaping=t.applyArabicShaping,e.plugin.processBidirectionalText=t.processBidirectionalText,e.plugin.processStyledBidirectionalText=t.processStyledBidirectionalText;};};return Se.prototype.setReferrer=function(e,t){this.referrer=t;},Se.prototype.setImages=function(e,t,r){for(var i in this.availableImages[e]=t,this.workerSources[e]){var o=this.workerSources[e][i];for(var n in o)o[n].availableImages=t;}r();},Se.prototype.setLayers=function(e,t,r){this.getLayerIndex(e).replace(t),r();},Se.prototype.updateLayers=function(e,t,r){this.getLayerIndex(e).update(t.layers,t.removedIds),r();},Se.prototype.loadTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).loadTile(t,r);},Se.prototype.loadDEMTile=function(e,t,r){this.getDEMWorkerSource(e,t.source).loadTile(t,r);},Se.prototype.reloadTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).reloadTile(t,r);},Se.prototype.abortTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).abortTile(t,r);},Se.prototype.removeTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).removeTile(t,r);},Se.prototype.removeDEMTile=function(e,t){this.getDEMWorkerSource(e,t.source).removeTile(t);},Se.prototype.removeSource=function(e,t,r){if(this.workerSources[e]&&this.workerSources[e][t.type]&&this.workerSources[e][t.type][t.source]){var i=this.workerSources[e][t.type][t.source];delete this.workerSources[e][t.type][t.source],void 0!==i.removeSource?i.removeSource(t,r):r();}},Se.prototype.loadWorkerSource=function(e,t,r){try{this.self.importScripts(t.url),r();}catch(e){r(e.toString());}},Se.prototype.syncRTLPluginState=function(t,r,i){try{e.plugin.setState(r);var o=e.plugin.getPluginURL();if(e.plugin.isLoaded()&&!e.plugin.isParsed()&&null!=o){this.self.importScripts(o);var n=e.plugin.isParsed();i(n?void 0:new Error("RTL Text Plugin failed to import scripts from "+o),n);}}catch(e){i(e.toString());}},Se.prototype.getAvailableImages=function(e){var t=this.availableImages[e];return t||(t=[]),t},Se.prototype.getLayerIndex=function(e){var t=this.layerIndexes[e];return t||(t=this.layerIndexes[e]=new i),t},Se.prototype.getWorkerSource=function(e,t,r){var i=this;return this.workerSources[e]||(this.workerSources[e]={}),this.workerSources[e][t]||(this.workerSources[e][t]={}),this.workerSources[e][t][r]||(this.workerSources[e][t][r]=new this.workerSourceTypes[t]({send:function(t,r,o){i.actor.send(t,r,o,e);}},this.getLayerIndex(e),this.getAvailableImages(e))),this.workerSources[e][t][r]},Se.prototype.getDEMWorkerSource=function(e,t){return this.demWorkerSources[e]||(this.demWorkerSources[e]={}),this.demWorkerSources[e][t]||(this.demWorkerSources[e][t]=new h),this.demWorkerSources[e][t]},Se.prototype.enforceCacheSizeLimit=function(t,r){e.enforceCacheSizeLimit(r);},"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope&&(self.worker=new Se(self)),Se}));


//

return mapboxgl;

})));
//# sourceMappingURL=mapbox-gl.js.map

;
//# sourceMappingURL=scripts.js.map