(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f103032"],{"0cb2":function(t,e,i){var a=i("e330"),n=i("7b0b"),o=Math.floor,r=a("".charAt),l=a("".replace),c=a("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,i,a,g,p){var d=i+t.length,h=a.length,f=u;return void 0!==g&&(g=n(g),f=s),l(p,f,(function(n,l){var s;switch(r(l,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,i);case"'":return c(e,d);case"<":s=g[c(l,1,-1)];break;default:var u=+l;if(0===u)return n;if(u>h){var p=o(u/10);return 0===p?n:p<=h?void 0===a[p-1]?r(l,1):a[p-1]+r(l,1):n}s=a[u-1]}return void 0===s?"":s}))}},"14c3":function(t,e,i){var a=i("da84"),n=i("c65b"),o=i("825a"),r=i("1626"),l=i("c6b6"),c=i("9263"),s=a.TypeError;t.exports=function(t,e){var i=t.exec;if(r(i)){var a=n(i,t,e);return null!==a&&o(a),a}if("RegExp"===l(t))return n(c,t,e);throw s("RegExp#exec called on incompatible receiver")}},1719:function(t,e,i){},"25f0":function(t,e,i){"use strict";var a=i("e330"),n=i("5e77").PROPER,o=i("6eeb"),r=i("825a"),l=i("3a9b"),c=i("577e"),s=i("d039"),u=i("ad6d"),g="toString",p=RegExp.prototype,d=p[g],h=a(u),f=s((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),v=n&&d.name!=g;(f||v)&&o(RegExp.prototype,g,(function(){var t=r(this),e=c(t.source),i=t.flags,a=c(void 0===i&&l(p,t)&&!("flags"in p)?h(t):i);return"/"+e+"/"+a}),{unsafe:!0})},"2c3e":function(t,e,i){var a=i("da84"),n=i("83ab"),o=i("9f7f").MISSED_STICKY,r=i("c6b6"),l=i("9bf2").f,c=i("69f3").get,s=RegExp.prototype,u=a.TypeError;n&&o&&l(s,"sticky",{configurable:!0,get:function(){if(this!==s){if("RegExp"===r(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},"44de4":function(t,e,i){},"44e7":function(t,e,i){var a=i("861d"),n=i("c6b6"),o=i("b622"),r=o("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},"498a":function(t,e,i){"use strict";var a=i("23e7"),n=i("58a8").trim,o=i("c8d2");a({target:"String",proto:!0,forced:o("trim")},{trim:function(){return n(this)}})},"4d63":function(t,e,i){var a=i("83ab"),n=i("da84"),o=i("e330"),r=i("94ca"),l=i("7156"),c=i("9112"),s=i("9bf2").f,u=i("241c").f,g=i("3a9b"),p=i("44e7"),d=i("577e"),h=i("ad6d"),f=i("9f7f"),v=i("6eeb"),b=i("d039"),y=i("1a2d"),S=i("69f3").enforce,m=i("2626"),k=i("b622"),w=i("fce3"),x=i("107c"),C=k("match"),R=n.RegExp,D=R.prototype,$=n.SyntaxError,E=o(h),I=o(D.exec),M=o("".charAt),L=o("".replace),P=o("".indexOf),_=o("".slice),A=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,F=/a/g,T=/a/g,N=new R(F)!==F,V=f.MISSED_STICKY,O=f.UNSUPPORTED_Y,U=a&&(!N||V||w||x||b((function(){return T[C]=!1,R(F)!=F||R(T)==T||"/a/i"!=R(F,"i")}))),K=function(t){for(var e,i=t.length,a=0,n="",o=!1;a<=i;a++)e=M(t,a),"\\"!==e?o||"."!==e?("["===e?o=!0:"]"===e&&(o=!1),n+=e):n+="[\\s\\S]":n+=e+M(t,++a);return n},W=function(t){for(var e,i=t.length,a=0,n="",o=[],r={},l=!1,c=!1,s=0,u="";a<=i;a++){if(e=M(t,a),"\\"===e)e+=M(t,++a);else if("]"===e)l=!1;else if(!l)switch(!0){case"["===e:l=!0;break;case"("===e:I(A,_(t,a+1))&&(a+=2,c=!0),n+=e,s++;continue;case">"===e&&c:if(""===u||y(r,u))throw new $("Invalid capture group name");r[u]=!0,o[o.length]=[u,s],c=!1,u="";continue}c?u+=e:n+=e}return[n,o]};if(r("RegExp",U)){for(var H=function(t,e){var i,a,n,o,r,s,u=g(D,this),h=p(t),f=void 0===e,v=[],b=t;if(!u&&h&&f&&t.constructor===H)return t;if((h||g(D,t))&&(t=t.source,f&&(e="flags"in b?b.flags:E(b))),t=void 0===t?"":d(t),e=void 0===e?"":d(e),b=t,w&&"dotAll"in F&&(a=!!e&&P(e,"s")>-1,a&&(e=L(e,/s/g,""))),i=e,V&&"sticky"in F&&(n=!!e&&P(e,"y")>-1,n&&O&&(e=L(e,/y/g,""))),x&&(o=W(t),t=o[0],v=o[1]),r=l(R(t,e),u?this:D,H),(a||n||v.length)&&(s=S(r),a&&(s.dotAll=!0,s.raw=H(K(t),i)),n&&(s.sticky=!0),v.length&&(s.groups=v)),t!==b)try{c(r,"source",""===b?"(?:)":b)}catch(y){}return r},J=function(t){t in H||s(H,t,{configurable:!0,get:function(){return R[t]},set:function(e){R[t]=e}})},j=u(R),q=0;j.length>q;)J(j[q++]);D.constructor=H,H.prototype=D,v(n,"RegExp",H)}m("RegExp")},"4d7f":function(t,e,i){(function(e){var i,a={},n={16:!1,18:!1,17:!1,91:!1},o="all",r={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},l={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},c=function(t){return l[t]||t.toUpperCase().charCodeAt(0)},s=[];for(i=1;i<20;i++)l["f"+i]=111+i;function u(t,e){var i=t.length;while(i--)if(t[i]===e)return i;return-1}function g(t,e){if(t.length!=e.length)return!1;for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}var p={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function d(t){for(i in n)n[i]=t[p[i]]}function h(t){var e,i,o,l,c,g;if(e=t.keyCode,-1==u(s,e)&&s.push(e),93!=e&&224!=e||(e=91),e in n)for(o in n[e]=!0,r)r[o]==e&&(b[o]=!0);else if(d(t),b.filter.call(this,t)&&e in a)for(g=x(),l=0;l<a[e].length;l++)if(i=a[e][l],i.scope==g||"all"==i.scope){for(o in c=i.mods.length>0,n)(!n[o]&&u(i.mods,+o)>-1||n[o]&&-1==u(i.mods,+o))&&(c=!1);(0!=i.mods.length||n[16]||n[18]||n[17]||n[91])&&!c||!1===i.method(t,i)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}function f(t){var e,i=t.keyCode,a=u(s,i);if(a>=0&&s.splice(a,1),93!=i&&224!=i||(i=91),i in n)for(e in n[i]=!1,r)r[e]==i&&(b[e]=!1)}function v(){for(i in n)n[i]=!1;for(i in r)b[i]=!1}function b(t,e,i){var n,o;n=R(t),void 0===i&&(i=e,e="all");for(var r=0;r<n.length;r++)o=[],t=n[r].split("+"),t.length>1&&(o=D(t),t=[t[t.length-1]]),t=t[0],t=c(t),t in a||(a[t]=[]),a[t].push({shortcut:n[r],scope:e,method:i,key:n[r],mods:o})}function y(t,e){var i,n,o,r,l,s=[];for(i=R(t),r=0;r<i.length;r++){if(n=i[r].split("+"),n.length>1&&(s=D(n),t=n[n.length-1]),t=c(t),void 0===e&&(e=x()),!a[t])return;for(o=0;o<a[t].length;o++)l=a[t][o],l.scope===e&&g(l.mods,s)&&(a[t][o]={})}}function S(t){return"string"==typeof t&&(t=c(t)),-1!=u(s,t)}function m(){return s.slice(0)}function k(t){var e=(t.target||t.srcElement).tagName;return!("INPUT"==e||"SELECT"==e||"TEXTAREA"==e)}for(i in r)b[i]=!1;function w(t){o=t||"all"}function x(){return o||"all"}function C(t){var e,i,n;for(e in a)for(i=a[e],n=0;n<i.length;)i[n].scope===t?i.splice(n,1):n++}function R(t){var e;return t=t.replace(/\s/g,""),e=t.split(","),""==e[e.length-1]&&(e[e.length-2]+=","),e}function D(t){for(var e=t.slice(0,t.length-1),i=0;i<e.length;i++)e[i]=r[e[i]];return e}function $(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on"+e,(function(){i(window.event)}))}$(document,"keydown",(function(t){h(t)})),$(document,"keyup",f),$(window,"focus",v);var E=e.key;function I(){var t=e.key;return e.key=E,t}e.key=b,e.key.setScope=w,e.key.getScope=x,e.key.deleteScope=C,e.key.filter=k,e.key.isPressed=S,e.key.getPressedKeyCodes=m,e.key.noConflict=I,e.key.unbind=y,t.exports=b})(this)},5319:function(t,e,i){"use strict";var a=i("2ba4"),n=i("c65b"),o=i("e330"),r=i("d784"),l=i("d039"),c=i("825a"),s=i("1626"),u=i("5926"),g=i("50c4"),p=i("577e"),d=i("1d80"),h=i("8aa5"),f=i("dc4a"),v=i("0cb2"),b=i("14c3"),y=i("b622"),S=y("replace"),m=Math.max,k=Math.min,w=o([].concat),x=o([].push),C=o("".indexOf),R=o("".slice),D=function(t){return void 0===t?t:String(t)},$=function(){return"$0"==="a".replace(/./,"$0")}(),E=function(){return!!/./[S]&&""===/./[S]("a","$0")}(),I=!l((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,i){var o=E?"$":"$0";return[function(t,i){var a=d(this),o=void 0==t?void 0:f(t,S);return o?n(o,t,a,i):n(e,p(a),t,i)},function(t,n){var r=c(this),l=p(t);if("string"==typeof n&&-1===C(n,o)&&-1===C(n,"$<")){var d=i(e,r,l,n);if(d.done)return d.value}var f=s(n);f||(n=p(n));var y=r.global;if(y){var S=r.unicode;r.lastIndex=0}var $=[];while(1){var E=b(r,l);if(null===E)break;if(x($,E),!y)break;var I=p(E[0]);""===I&&(r.lastIndex=h(l,g(r.lastIndex),S))}for(var M="",L=0,P=0;P<$.length;P++){E=$[P];for(var _=p(E[0]),A=m(k(u(E.index),l.length),0),F=[],T=1;T<E.length;T++)x(F,D(E[T]));var N=E.groups;if(f){var V=w([_],F,A,l);void 0!==N&&x(V,N);var O=p(a(n,void 0,V))}else O=v(_,l,A,F,N,n);A>=L&&(M+=R(l,L,A)+O,L=A+_.length)}return M+R(l,L)}]}),!I||!$||E)},"5b81":function(t,e,i){"use strict";var a=i("23e7"),n=i("da84"),o=i("c65b"),r=i("e330"),l=i("1d80"),c=i("1626"),s=i("44e7"),u=i("577e"),g=i("dc4a"),p=i("ad6d"),d=i("0cb2"),h=i("b622"),f=i("c430"),v=h("replace"),b=RegExp.prototype,y=n.TypeError,S=r(p),m=r("".indexOf),k=r("".replace),w=r("".slice),x=Math.max,C=function(t,e,i){return i>t.length?-1:""===e?i:m(t,e,i)};a({target:"String",proto:!0},{replaceAll:function(t,e){var i,a,n,r,p,h,R,D,$,E=l(this),I=0,M=0,L="";if(null!=t){if(i=s(t),i&&(a=u(l("flags"in b?t.flags:S(t))),!~m(a,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(n=g(t,v),n)return o(n,t,E,e);if(f&&i)return k(u(E),t,e)}r=u(E),p=u(t),h=c(e),h||(e=u(e)),R=p.length,D=x(1,R),I=C(r,p,0);while(-1!==I)$=h?u(e(p,I,r)):d(p,r,I,[],void 0,e),L+=w(r,M,I)+$,M=I+R,I=C(r,p,I+D);return M<r.length&&(L+=w(r,M)),L}})},"8aa5":function(t,e,i){"use strict";var a=i("6547").charAt;t.exports=function(t,e,i){return e+(i?a(t,e).length:1)}},acd1:function(t,e,i){"use strict";i("44de4")},c607:function(t,e,i){var a=i("da84"),n=i("83ab"),o=i("fce3"),r=i("c6b6"),l=i("9bf2").f,c=i("69f3").get,s=RegExp.prototype,u=a.TypeError;n&&o&&l(s,"dotAll",{configurable:!0,get:function(){if(this!==s){if("RegExp"===r(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},c8d2:function(t,e,i){var a=i("5e77").PROPER,n=i("d039"),o=i("5899"),r="​᠎";t.exports=function(t){return n((function(){return!!o[t]()||r[t]()!==r||a&&o[t].name!==t}))}},d784:function(t,e,i){"use strict";i("ac1f");var a=i("e330"),n=i("6eeb"),o=i("9263"),r=i("d039"),l=i("b622"),c=i("9112"),s=l("species"),u=RegExp.prototype;t.exports=function(t,e,i,g){var p=l(t),d=!r((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=d&&!r((function(){var e=!1,i=/a/;return"split"===t&&(i={},i.constructor={},i.constructor[s]=function(){return i},i.flags="",i[p]=/./[p]),i.exec=function(){return e=!0,null},i[p](""),!e}));if(!d||!h||i){var f=a(/./[p]),v=e(p,""[t],(function(t,e,i,n,r){var l=a(t),c=e.exec;return c===o||c===u.exec?d&&!r?{done:!0,value:f(e,i,n)}:{done:!0,value:l(i,e,n)}:{done:!1}}));n(String.prototype,t,v[0]),n(u,p,v[1])}g&&c(u[p],"sham",!0)}},e0e0:function(t,e,i){"use strict";i("1719")},e407:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-view"},[i("div",{staticClass:"flash-cards-header "},[t.notebookSitting.notebookMode?i("div",{staticClass:"task-progress"},[i("el-progress",{attrs:{"show-text":!1,"stroke-width":12,percentage:t.notebookSitting.index/t.vocabularyList.length-100}}),t._v(" "+t._s(t.notebookSitting.index+1)+" / "+t._s(t.vocabularyList.length)+" ")],1):i("div",{staticClass:"task-progress"},[i("el-progress",{attrs:{"show-text":!1,"stroke-width":12,percentage:t.vocabularySitting.currentChapterIndex/t.vocabularySitting.chapterMaxWords*100}}),t._v(" "+t._s(t.vocabularySitting.currentChapterIndex)+" / "+t._s(t.vocabularySitting.chapterMaxWords)+" "),i("div",[t._v(t._s(Number(t.vocabularySitting.listNumber)+1)+" - "+t._s(Number(t.vocabularySitting.currentChapter)+1))])],1),i("div",{staticClass:"page-sitting"},[i("i",{staticClass:"el-icon-menu",on:{click:function(e){t.dialogShowing.pageSittingDialog=!0}}})])]),i("div",{staticClass:"flash-cards-deck background-css"},[i("div",{staticClass:"mark-vocabulary",class:{"marked-vocabulary":t.vocabulary.marked}},[i("i",{class:{"el-icon-star-off":!t.vocabulary.marked,"el-icon-star-on":t.vocabulary.marked}})]),i("div",{staticClass:"flashcard-img"},[i("img",{attrs:{src:t.vocabulary.wordImage,height:"150px",alt:""}})]),i("div",{directives:[{name:"popover",rawName:"v-popover:popover2",arg:"popover2"}],staticClass:"flashcard-vocabulary"},[i("span",{staticClass:"word",domProps:{innerHTML:t._s(t.vocabulary.word)},on:{click:function(e){return t.play(t.vocabulary.word)}}}),t._v("   "),i("span",{staticClass:"symbol",domProps:{innerHTML:t._s(t.vocabulary.symbol)}})]),i("el-popover",{ref:"popover2",attrs:{placement:"bottom","popper-class":"chineseDefinitionPopper",title:"",trigger:"click"}},[i("span",{domProps:{innerHTML:t._s(t.vocabulary.chineseDefinition?t.vocabulary.chineseDefinition:"Don't have any definition yet.")}})]),t.itemShowingSitting.exampleShowing?i("div",{staticClass:"flashcard-line flashcard-example"},[t.vocabulary.example?i("span",{on:{click:function(e){return t.play(t.vocabulary.example)}}},[i("i",{staticClass:"el-icon-caret-right"})]):t._e(),i("span",{domProps:{innerHTML:t._s(t.vocabulary.example)}})]):i("div",{staticClass:"flashcard-line flashcard-example",on:{click:function(e){t.itemShowingSitting.exampleShowing=!0}}}),t.itemShowingSitting.shortDefinitionShowing?i("div",{staticClass:"flashcard-line flashcard-shortDefinition"},[t.vocabulary.shortDefinition?i("span",{on:{click:function(e){return t.play(t.vocabulary.shortDefinition)}}},[i("i",{staticClass:"el-icon-caret-right"})]):t._e(),i("span",{domProps:{innerHTML:t._s(t.vocabulary.shortDefinition)}})]):i("div",{staticClass:"flashcard-line flashcard-shortDefinition",on:{click:function(e){t.itemShowingSitting.shortDefinitionShowing=!0}}}),t.itemShowingSitting.longDefinitionShowing?i("div",{staticClass:"flashcard-line flashcard-longDefinitionShowing",attrs:{id:"longDefinition"}},[t.vocabulary.longDefinition?i("span",{on:{click:function(e){return t.play(t.vocabulary.longDefinition)}}},[i("i",{staticClass:"el-icon-caret-right"})]):t._e(),i("span",{domProps:{innerHTML:t._s(t.vocabulary.longDefinition)}})]):i("div",{staticClass:"flashcard-line flashcard-longDefinitionShowing",on:{click:function(e){t.itemShowingSitting.longDefinitionShowing=!0}}})],1),i("div",{staticClass:"flashcard-operation"},[i("div",{staticClass:"flashcard-operation-button"},[i("button",{staticClass:"button-round",on:{click:function(e){return t.playLast()}}},[i("i",{staticClass:"el-icon-arrow-left"})]),i("div",{staticClass:"shortcut-tops"},[t._v(" A ")])]),i("div",{staticClass:"flashcard-operation-button"},[i("button",{staticClass:"button-round",on:{click:function(e){return t.play()}}},[i("i",{staticClass:"el-icon-refresh"})]),i("div",{staticClass:"shortcut-tops"},[t._v(" S ")])]),i("div",{staticClass:"flashcard-operation-button"},[i("button",{staticClass:"button-round",on:{click:function(e){return t.showFlashcardLine()}}},[i("i",{staticClass:"el-icon-view"})]),i("div",{staticClass:"shortcut-tops"},[t._v(" E ")])]),i("div",{staticClass:"flashcard-operation-button"},[i("button",{staticClass:"button-round",on:{click:function(e){return t.playNext()}}},[i("i",{staticClass:"el-icon-arrow-right"})]),i("div",{staticClass:"shortcut-tops"},[t._v(" D ")])])]),i("el-dialog",{attrs:{title:"Page Sitting",visible:t.dialogShowing.pageSittingDialog,width:"350px","before-close":t.handleSittingClose()},on:{"update:visible":function(e){return t.$set(t.dialogShowing,"pageSittingDialog",e)}}},[i("div",{staticClass:"sitting",attrs:{id:"sitting"}},[i("el-form",{ref:"form",attrs:{"label-width":"130px"}},[i("el-form-item",{attrs:{label:"音频优先"}},[i("el-switch",{model:{value:t.playSitting.audioFirst,callback:function(e){t.$set(t.playSitting,"audioFirst",e)},expression:"playSitting.audioFirst"}})],1),i("el-form-item",{attrs:{label:"使用随机语音"}},[i("el-switch",{model:{value:t.playSitting.voiceSpeakerRandom,callback:function(e){t.$set(t.playSitting,"voiceSpeakerRandom",e)},expression:"playSitting.voiceSpeakerRandom"}})],1),i("el-form-item",{attrs:{label:"播报语音"}},[i("el-select",{attrs:{disabled:t.playSitting.voiceSpeakerRandom,placeholder:"请选择声音"},model:{value:t.playSitting.voiceSelectedSpeaker,callback:function(e){t.$set(t.playSitting,"voiceSelectedSpeaker",e)},expression:"playSitting.voiceSelectedSpeaker"}},t._l(t.playSitting.voices,(function(t,e){return i("el-option",{key:e,attrs:{label:t.name+" ("+t.lang+")",value:t}})})),1)],1),i("el-form-item",{attrs:{label:"播报语速"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.playSitting.speakRate,expression:"playSitting.speakRate"}],attrs:{disabled:t.playSitting.voiceSpeakerRandom,name:"speakRate"},domProps:{value:t.playSitting.speakRate},on:{input:function(e){e.target.composing||t.$set(t.playSitting,"speakRate",e.target.value)}}})]),i("el-form-item",{attrs:{label:"音频倍速"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.playSitting.audioPlayRate,expression:"playSitting.audioPlayRate"}],attrs:{name:"audioPlayRate"},domProps:{value:t.playSitting.audioPlayRate},on:{input:function(e){e.target.composing||t.$set(t.playSitting,"audioPlayRate",e.target.value)}}})]),i("el-form-item",{attrs:{label:"使用随机语速"}},[i("el-switch",{model:{value:t.playSitting.voiceSpeakRateRandom,callback:function(e){t.$set(t.playSitting,"voiceSpeakRateRandom",e)},expression:"playSitting.voiceSpeakRateRandom"}})],1),i("el-form-item",{attrs:{label:"（0.8 ~ 1.4）"}},[i("el-input",{attrs:{name:"voiceSpeakRateRandomMin"},model:{value:t.playSitting.voiceSpeakRateRandomMin,callback:function(e){t.$set(t.playSitting,"voiceSpeakRateRandomMin",e)},expression:"playSitting.voiceSpeakRateRandomMin"}}),i("el-input",{attrs:{name:"voiceSpeakRateRandomMax"},model:{value:t.playSitting.voiceSpeakRateRandomMax,callback:function(e){t.$set(t.playSitting,"voiceSpeakRateRandomMax",e)},expression:"playSitting.voiceSpeakRateRandomMax"}})],1),i("el-form-item",{attrs:{label:"当前合集下标"}},[i("el-select",{attrs:{name:"listNumber",placeholder:"当前合集下标"},model:{value:t.vocabularySitting.listNumber,callback:function(e){t.$set(t.vocabularySitting,"listNumber",e)},expression:"vocabularySitting.listNumber"}},t._l(t.$vocabularyDatabase.length,(function(t){return i("el-option",{key:t,attrs:{label:t,value:t-1}})})),1)],1),i("el-form-item",{attrs:{label:"子章节-词汇数量"}},[i("el-input",{attrs:{name:"chapterMaxWords"},model:{value:t.vocabularySitting.chapterMaxWords,callback:function(e){t.$set(t.vocabularySitting,"chapterMaxWords",e)},expression:"vocabularySitting.chapterMaxWords"}})],1),i("el-form-item",{attrs:{label:"当前合集子章节"}},[i("el-input",{attrs:{name:"currentChapter"},model:{value:t.vocabularySitting.currentChapter,callback:function(e){t.$set(t.vocabularySitting,"currentChapter",e)},expression:"vocabularySitting.currentChapter"}})],1),i("el-form-item",{attrs:{label:"当前下标"}},[i("el-input",{attrs:{name:"currentChapterIndex"},model:{value:t.vocabularySitting.currentChapterIndex,callback:function(e){t.$set(t.vocabularySitting,"currentChapterIndex",e)},expression:"vocabularySitting.currentChapterIndex"}})],1),i("el-form-item",{attrs:{label:"快捷键"}},[i("i",{staticClass:"el-icon-date",on:{click:function(e){t.dialogShowing.shortcutDialog=!0}}})]),i("el-form-item",{attrs:{label:"githubSitting"}},[i("el-input",{attrs:{name:"owner"},model:{value:t.githubSitting,callback:function(e){t.githubSitting=e},expression:"githubSitting"}})],1),i("el-form-item",{attrs:{label:"拉取数据"}},[i("i",{staticClass:"el-icon-download",on:{click:function(e){return t.onDownloadUserData()}}})]),i("el-form-item",{attrs:{label:"上传数据"}},[i("i",{staticClass:"el-icon-upload2",on:{click:function(e){return t.onUploadUserData()}}})])],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogShowing.pageSittingDialog=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSavePageSitting()}}},[t._v("确 定")])],1)]),i("el-dialog",{attrs:{title:"Shortcut",width:"400px",visible:t.dialogShowing.shortcutDialog},on:{"update:visible":function(e){return t.$set(t.dialogShowing,"shortcutDialog",e)}}},[i("el-table",{attrs:{data:t.shortcut}},[i("el-table-column",{attrs:{property:"description",label:"description",width:"200"}}),i("el-table-column",{attrs:{property:"keyboard",label:"keyboard",width:"150"}})],1)],1),i("div",[i("audio",{ref:"audioPlayer",attrs:{autoplay:"autoplay",preload:"auto"}},[t._v(" 你的浏览器不支持audio标签 ")])])],1)},n=[],o=i("1da1"),r=i("b85c"),l=(i("96cf"),i("e9c4"),i("a9e3"),i("d3b7"),i("159b"),i("ac1f"),i("5319"),i("5b81"),i("4d63"),i("c607"),i("2c3e"),i("25f0"),i("498a"),i("4d7f")),c=i.n(l),s={name:"vocabulary-deck",data:function(){return{playSitting:{voices:[],to_speak:void 0,voiceSpeakerRandom:!1,voiceSpeakRateRandom:!1,voiceSpeakRateRandomMin:.8,voiceSpeakRateRandomMax:1.4,voiceSelectedSpeaker:void 0,voiceSelectedIndex:0,audioFirst:!0,speakRate:1,audioPlayRate:2},notebookSitting:{index:0,notebookMode:!1},vocabularySitting:{listNumber:0,chapterMaxWords:100,currentChapter:0,currentChapterIndex:2},githubSitting:"",dialogShowing:{pageSittingDialog:!1,shortcutDialog:!1},shortcut:[{keyboard:"w",description:"重播 word",selfFunction:this.playVocabulary},{keyboard:"q",description:"show translation",selfFunction:this.showTranslation},{keyboard:"z",description:"重播 example",selfFunction:this.playExample},{keyboard:"x",description:"重播 shortDefinition",selfFunction:this.playShortDefinition},{keyboard:"c",description:"重播 longDefinition",selfFunction:this.playLongDefinition},{keyboard:"a",description:"play last",selfFunction:this.playLast},{keyboard:"s",description:"重播",selfFunction:this.playRepeat},{keyboard:"d",description:"play next",selfFunction:this.playNext},{keyboard:"e",description:"show flashcard line",selfFunction:this.showFlashcardLine},{keyboard:"i",description:"show page sitting",selfFunction:this.showPageSitting}],itemShowingSitting:{wordShowing:!0,showingIndex:0,oldShowingIndex:0,exampleShowing:!1,shortDefinitionShowing:!1,longDefinitionShowing:!1},playCache:"",vocabularyList:[],vocabulary:{},vocabularyCache:{}}},watch:{$route:{handler:function(t,e){var i=this;t.param&&t.param.notebookMode?this.notebookSitting.notebookMode=!0:this.notebookSitting.notebookMode=!1,i.initPage()},deep:!0},vocabularySitting:{handler:function(t,e){var i=this,a=i.$vocabularyDatabase[t.listNumber];if(i.notebookSitting.notebookMode);else{a&&a[0].word!==i.vocabularyList[0].word&&(i.vocabularyList=a,t.currentChapterIndex=0);var n=t.currentChapter*t.chapterMaxWords+t.currentChapterIndex,o=i.vocabularyList[n];o&&o.word!==i.vocabulary.word&&(i.setVocabulary(o),i.playExample())}return i.$storage.saveToLocal("vocabularySitting","vocabularySitting",t),t},deep:!0},itemShowingSitting:{handler:function(t,e){console.log(t);var i=this;return t.showingIndex==t.oldShowingIndex||(0==t.showingIndex?(t.exampleShowing=!1,t.shortDefinitionShowing=!1,t.longDefinitionShowing=!1,t.oldShowingIndex=0):i.vocabulary.example&&1==t.showingIndex?(t.exampleShowing=!0,t.shortDefinitionShowing=!1,t.longDefinitionShowing=!1,i.playExample(),t.oldShowingIndex=1):i.vocabulary.shortDefinition&&2==t.showingIndex?(t.exampleShowing=!0,t.shortDefinitionShowing=!0,t.longDefinitionShowing=!1,i.playShortDefinition(),t.oldShowingIndex=2):i.vocabulary.longDefinition&&3==t.showingIndex?(t.exampleShowing=!0,t.shortDefinitionShowing=!0,t.longDefinitionShowing=!0,i.playLongDefinition(),t.oldShowingIndex=3):(console.log("init"),i.itemShowingSitting.showingIndex=0),i.$storage.saveToLocal("itemShowingSitting","itemShowingSitting",t)),t},deep:!0}},created:function(){},mounted:function(){var t=this;console.log("1112"),t.initPage()},methods:{onUploadUserData:function(){var t=this,e=t.$storage.loadLocalRootData();if(e){var a=i("a9b4")(JSON.parse(t.githubSitting));a.put(e).then((function(t){console.log(t),alert("upload user data success")}))}else alert("local cache is empty!")},onDownloadUserData:function(){var t=this,e=(t.$storage.getRootKey(),i("a9b4")(JSON.parse(t.githubSitting)));console.log(e.list()),e.list().then((function(e){if(!e||e.length<1)alert("issue is empty");else for(var i=0;i<e.length;i++)if(console.log(e[i].title==t.$storage.getRootKey()),console.log(i),e[i].title==t.$storage.getRootKey())return t.$storage.setRootCache(e[i].body),void alert("download user data success")}))},onSavePageSitting:function(){var t=this;t.dialogShowing.pageSittingDialog=!1,t.$storage.saveToLocal("vocabularySitting","vocabularySitting",t.vocabularySitting),t.$storage.saveToLocal("githubSitting","githubSitting",t.githubSitting),t.$storage.saveToLocal("itemShowingSitting","itemShowingSitting",t.itemShowingSitting)},handleSittingClose:function(){},initPage:function(){var t=this;console.log("notebookMode",t.$route.params.notebookMode),t.notebookSitting.notebookMode=t.$route.params.notebookMode,t.queryInitDataFromCookies(),t.initVoicesSitting(),t.initVocabularyData(),t.initShortcutSitting()},queryInitDataFromCookies:function(){var t=this;t.vocabularySitting=t.$storage.loadFromLocal("vocabularySitting","vocabularySitting",t.vocabularySitting),t.itemShowingSitting=t.$storage.loadFromLocal("itemShowingSitting","itemShowingSitting",t.itemShowingSitting),t.vocabularyCache=t.$storage.loadFromLocal("userVocabularyInfo","userVocabularyInfo",{});var e=t.$storage.loadFromLocal("githubSitting","githubSitting","");t.githubSitting=JSON.stringify(e)},initShortcutSitting:function(){var t,e=this,i=Object(r["a"])(e.shortcut);try{for(i.s();!(t=i.n()).done;){var a=t.value;c()(a.keyboard,a.selfFunction.bind(this,void 0))}}catch(n){i.e(n)}finally{i.f()}},showTranslation:function(){document.getElementsByClassName("flashcard-vocabulary")[0].click()},showPageSitting:function(){var t=this;t.dialogShowing.pageSittingDialog=!0},showFlashcardLine:function(){var t=this;t.itemShowingSitting.showingIndex++},playVocabulary:function(){var t=this;t.setVocabularyCacheCountAdd(t.vocabulary.word,"wordCount"),t.playSitting.audioFirst?t.playAudio(t.vocabulary.wordAudio):t.play(t.vocabulary.word)},playExample:function(){var t=this;t.vocabulary.example&&(t.setVocabularyCacheCountAdd(t.vocabulary.word,"examplePlayCount"),t.playSitting.audioFirst?t.playAudio(t.vocabulary.exampleAudio):t.play(t.vocabulary.example))},playShortDefinition:function(){var t=this;t.vocabulary.shortDefinition&&(t.setVocabularyCacheCountAdd(t.vocabulary.word,"shortDefinitionPlayCount"),t.playSitting.audioFirst?t.playAudio(t.vocabulary.definitionAudio):t.play(t.vocabulary.shortDefinition))},playLongDefinition:function(){var t=this;t.vocabulary.longDefinition&&(t.setVocabularyCacheCountAdd(t.vocabulary.word,"longDefinitionPlayCount"),t.play(t.vocabulary.longDefinition))},playLast:function(){var t=this;t.notebookSitting.notebookMode?t.notebookSitting.index>0&&(t.notebookSitting.index--,t.setVocabulary(t.vocabularyList[t.notebookSitting.index]),t.playExample()):t.vocabularySitting.currentChapterIndex>0&&t.vocabularySitting.currentChapterIndex--},playRepeat:function(){var t=this;t.play()},playNext:function(){var t=this;t.notebookSitting.notebookMode?t.notebookSitting.index<t.notebook.length-1&&(console.log(t.notebookSitting.index),t.notebookSitting.index++,t.setVocabulary(t.vocabularyList[t.notebookSitting.index]),t.playExample()):t.vocabularySitting.currentChapterIndex<t.vocabularySitting.chapterMaxWords&&t.vocabularySitting.currentChapterIndex++},setVocabularyCacheCountAdd:function(t,e){var i=this,a=i.vocabularyCache[t]||{},n=Number(a[e]||0);i.setVocabularyCache(t,e,++n)},setVocabularyCache:function(t,e,i){var a=this,n=a.vocabularyCache[t]||{};n[e]=i,a.vocabularyCache[t]=n,a.$storage.saveToLocal("userVocabularyInfo","userVocabularyInfo",a.vocabularyCache)},initVocabularyData:function(){var t=this,e={};if(t.notebookSitting.notebookMode){if(t.vocabularyList=[],t.notebookSitting.index=0,t.notebook=t.$storage.loadFromLocal("notebook","notebook",[]),!t.notebook||t.notebook.length<1)return void alert("empty notebook");t.notebook.forEach((function(e){var i=t.$vocabularyDatabaseMap.get(e.word);console.log(i),i&&t.vocabularyList.push(i)})),e=t.vocabularyList[0]}else t.vocabularyList=t.$vocabularyDatabase[t.vocabularySitting.listNumber],e=t.vocabularyList[t.vocabularySitting.currentChapterIndex];t.setVocabulary(e)},setVocabulary:function(t){var e=this,i=document.getElementsByClassName("chineseDefinitionPopper");i.length>0&&"false"==i[0].ariaHidden&&e.showTranslation(),e.itemShowingSitting.showingIndex=0;var a=JSON.parse(JSON.stringify(t));a.example=a.example?a.example.replaceAll(new RegExp("("+a.word+")","ig"),"<span class=highlight>$1</span>"):"",a.shortDefinition=a.shortDefinition?a.shortDefinition.replaceAll(new RegExp("("+a.word+")","ig"),"<span class=highlight>$1</span>"):"",a.longDefinition=a.longDefinition?a.longDefinition.replaceAll(new RegExp("("+a.word+")","ig"),"<span class=highlight>$1</span>"):"";var n=a.wordImage.replace('<img src="',"").trim();n=n.substring(0,n.indexOf(".jpg")+4),a.wordImage=e.$vocabularyFileDatabaseURL+"/"+n,e.vocabulary=a},parseDom:function(t){var e=document.createElement("div");return e.innerHTML=t,e.childNodes},initVoicesSitting:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t,"speechSynthesis"in window){e.next=4;break}throw alert("对不起，您的浏览器不支持");case 4:return e.next=6,i.setSpeech();case 6:a=e.sent,a.forEach((function(t){"en-US"===t.lang&&i.playSitting.voices.push(t)})),console.log(i.playSitting);case 9:case"end":return e.stop()}}),e)})))()},setSpeech:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t,e.abrupt("return",new Promise((function(t,e){var i,a=window.speechSynthesis;i=setInterval((function(){0!==a.getVoices().length&&(t(a.getVoices()),clearInterval(i))}),100)})));case 2:case"end":return e.stop()}}),e)})))()},cancel:function(){window.speechSynthesis.cancel()},play:function(t){var e=this;if(t||e.playCache||(t=e.vocabulary.example,e.playCache=t),t&&(e.playCache=t),e.setVocabularyCacheCountAdd(e.vocabulary.word,"wordPlayCount"),e.pauseAudio(),e.cancel(),e.playSitting.to_speak=new SpeechSynthesisUtterance(e.toText(e.playCache)),e.playSitting.voiceSpeakerRandom){var i=e.random(0,e.playSitting.voices.length-1);e.playSitting.to_speak.voice=e.playSitting.voices[i]}else e.playSitting.to_speak.voice=e.playSitting.voiceSelectedSpeaker?e.playSitting.voiceSelectedSpeaker:e.playSitting.voices[0];if(e.playSitting.voiceSpeakRateRandom){var a=e.random(0,10*e.playSitting.voiceSpeakRateRandomMax-10*e.playSitting.voiceSpeakRateRandomMin);console.log(a),e.playSitting.to_speak.rate=e.playSitting.voiceSpeakRateRandomMin+a/10}else e.playSitting.to_speak.rate=e.playSitting.speakRate;window.speechSynthesis.speak(e.playSitting.to_speak)},changeSpeed:function(t){var e=this.$refs.audioPlayer;e.playbackRate=t},pauseAudio:function(){var t=this.$refs.audioPlayer;t.pause()},playAudio:function(t){var e=this,i=this.$refs.audioPlayer;e.pauseAudio(),e.cancel(),i.currentTime=0,i.src=e.$vocabularyFileDatabaseURL+"/"+t,e.changeSpeed(e.playSitting.audioPlayRate),i.play()},random:function(t,e){return Math.floor(Math.random()*(e-t))+t},toText:function(t){var e=t;return e.replace(/<[^>]+?>/g,"").replace(/\s+/g," ").replace(/ /g," ").replace(/>/g," ")}}},u=s,g=(i("e0e0"),i("acd1"),i("2877")),p=Object(g["a"])(u,a,n,!1,null,"2a31fefc",null);e["default"]=p.exports}}]);