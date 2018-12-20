!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-drag-slider",[],t):"object"==typeof exports?exports["vue-drag-slider"]=t():e["vue-drag-slider"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t.default=o.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7),i=(r=o)&&r.__esModule?r:{default:r};t.default={name:"DragSlider",props:{direction:{type:String,default:"horizontal"},percent:{type:Number,default:0},color:{type:Object,default:function(){return{active:"#EC4C42",background:"#E7E5E1"}}}},data:function(){return{percentVal:this.percent||0,tooltipWidth:0,tooltipLeft:""}},mounted:function(){(0,i.default)(this.$refs.slider,{value:this.percentVal,drag:this.drag,create:this.create,stop:this.stop},"horizontal"!==this.direction&&this.direction,{ranger:this.$refs.ranger,dragger:this.$refs.dragger})},methods:{tooltipLeftCalc:function(e){},create:function(e,t){var n=this.$refs.slider.querySelector(".tooltip"),r=this.$refs.dragger;n&&r&&(this.tooltipWidth=n.offsetWidth,this.tooltipLeft=(r.offsetWidth-this.tooltipWidth)/2+"px",n.style.left=this.tooltipLeft)},drag:function(e,t,n){this.percentVal=e,this.$emit("update:percent",e),this.$emit("change",{value:e,target:t,event:n})},stop:function(e,t,n){}}}},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(11).default)("3134a5d6",r,!1,{})},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slider",staticClass:"range-slider",class:"range-slider-"+e.direction},[e._t("label"),e._v(" "),n("div",{ref:"ranger",staticClass:"range-slider-track"},[n("span",{staticClass:"bg",style:{backgroundColor:e.color.background}}),e._v(" "),n("span",{ref:"dragger",staticClass:"dragger"},[e._t("tooltip")],2),e._v(" "),n("span",{staticClass:"active",style:{width:e.percentVal+"%",backgroundColor:e.color.active}})])],2)},o=[];r._withStripped=!0,n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,s){var u,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(d.functional){d._injectStyles=u;var l=d.render;d.render=function(e,t){return u.call(t),l(e,t)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,u):[u]}return{exports:e,options:d}}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(6),i=(r=o)&&r.__esModule?r:{default:r};var a=function e(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.installed||t.component(i.default.name,i.default)};"undefined"!=typeof window&&window.Vue&&a(window.Vue),t.default={install:a,DragSlider:i.default}},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(0);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n(8);var a=n(4),s=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);s.options.__file="src/drag-slider/drag-slider.vue",t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=
/*!
 * ==========================================================
 *  RANGE SLIDER 2.0.1
 * ==========================================================
 * Author: Taufik Nurrohman <https://github.com/tovic>
 * License: MIT
 * ----------------------------------------------------------
 */
function(e,t,n,r){t=t||{};var o=r.ranger,i=r.dragger,a=window,s=document,u=!1,d=0,l=0,c=0,f=0,p=n?"offsetHeight":"offsetWidth",h=n?"top":"left",g=n?"pageY":"pageX",v=n?"offsetTop":"offsetLeft",b=n?"clientY":"clientX",m=n?"scrollTop":"scrollLeft";function y(e){return"function"==typeof e}function x(e,t,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}function _(e,t,n){t.removeEventListener?t.removeEventListener(e,n):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}function C(e,t,n){return e<t?t:e>n?n:e}function w(e){return e.preventDefault&&e.preventDefault(),!1}function E(){d=o[p],c=function(e){for(var t=e[v];e=e.offsetParent;)t+=e[v];return t}(o),l=i[p]}function S(n){return E(),u=!0,M(n),x("touchmove",s,j),x("mousemove",s,j),y(t.start)&&t.start(f,e,n),w(n)}function j(e){return M(e),w(e)}function k(n){return u=!1,_("touchmove",s,j),_("mousemove",s,j),y(t.stop)&&t.stop(f,e,n),w(n)}function M(n){var r=(n=n||a.event).touches?n.touches[0][g]:n[g],o=C(r-c,0,d),p=C((r-c)/d*100,0,100);r||(r=n[b]+s.body[m]+s.documentElement[m]),u&&(i.style[h]=o-l/2+"px",f=Math.round(p),y(t.drag)&&t.drag(f,e,n))}return n=n||t.vertical||!1,y(t)&&(t={drag:t}),x("touchstart",o,S),x("mousedown",o,S),x("touchend",s,k),x("mouseup",s,k),x("resize",a,function(e){E(),u=!1,i.style[h]=f/100*d-l/2+"px"}),o.appendChild(i),e.appendChild(o),E(),f=C(void 0!==t.value?t.value:0,0,100),i.style[h]=f/100*d-l/2+"px",y(t.create)&&t.create(f,e),y(t.drag)&&t.drag(f,e),e}},function(e,t,n){"use strict";var r=n(2);n.n(r).a},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".range-slider-track {\n  width: auto;\n  height: 16px;\n  margin: 0 auto;\n  position: relative;\n  cursor: pointer;\n}\n.range-slider-track .bg {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 5px;\n    left: 0;\n    width: 100%;\n    height: 6px;\n    border-radius: 2px;\n    background-color: #E7E5E1;\n}\n.range-slider-track .dragger {\n    display: block;\n    width: 16px;\n    height: inherit;\n    border-radius: 50%;\n    position: relative;\n    z-index: 4;\n    background-color: #fff;\n    cursor: inherit;\n    box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);\n}\n.range-slider-track .active {\n    position: absolute;\n    height: 6px;\n    background-color: #EC4C42;\n    z-index: 3;\n    left: 0;\n    top: 5px;\n    border-radius: 2px;\n}\n.range-slider-track .tooltip {\n    position: absolute;\n    top: -190%;\n    left: -50%;\n    font-size: 14px;\n    white-space: nowrap;\n    padding: 2px 5px;\n    min-width: 20px;\n    border-radius: 5px;\n    border: 1px solid #EC4C42;\n    background-color: #EC4C42;\n    color: #fff;\n}\n.range-slider-track .tooltip:before {\n      content: '';\n      position: absolute;\n      bottom: -10px;\n      left: 50%;\n      width: 0;\n      height: 0;\n      border: 5px solid transparent;\n      border-top-color: inherit;\n      transform: translate(-50%, 0);\n}\n.range-slider-vertical {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 5px 10px 5px 0;\n}\n.range-slider-vertical .range-slider-track {\n    cursor: pointer;\n    width: 16px;\n    height: 100px;\n}\n.range-slider-vertical .range-slider-track .bg {\n      top: 0;\n      right: auto;\n      left: 5px;\n      width: 6px;\n      height: 100%;\n}\n.range-slider-vertical .range-slider-track .dragger {\n      width: inherit;\n      height: 10px;\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",function(){return h});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,d=!1,l=function(){},c=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,o){d=n,c=o||{};var a=r(e,t);return g(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o];(u=i[s.id]).refs--,n.push(u)}t?g(a=r(e,t)):a=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete i[u.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(b(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(b(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(d)return l;r.parentNode.removeChild(r)}if(p){var o=u++;r=s||(s=v()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=v(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);c.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var m,y=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}}])});
//# sourceMappingURL=index.js.map