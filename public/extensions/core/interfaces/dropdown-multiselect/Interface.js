var __DirectusExtension__=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=52)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i,s){var c=typeof(e=e||{}).default;"object"!==c&&"function"!==c||(e=e.default);var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId=a),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var d=l.render;l.render=function(e,t){return u.call(t),d(e,t)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:l}}n.d(t,"a",function(){return r})},1:function(e,t){e.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1}}}},143:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.select[data-v-082c0ae7]{border:var(--input-border-width) solid var(--light-gray);border-radius:var(--border-radius);width:100%;font-family:Roboto,sans-serif}.select[data-v-082c0ae7]:focus{border-color:var(--accent)}.select:focus option[data-v-082c0ae7]{color:var(--darker-gray)}.select option[data-v-082c0ae7]{padding:5px 10px;color:var(--gray)}.select option[data-v-082c0ae7]:checked{background:var(--accent) linear-gradient(0deg,var(--accent),var(--accent));position:relative;color:var(--white);-webkit-text-fill-color:var(--white)}.select option[data-v-082c0ae7]:checked:after{content:"check";font-family:Material Icons;font-size:24px;position:absolute;right:10px;top:50%;transform:translateY(-54%)}.x-small[data-v-082c0ae7]{max-width:var(--width-x-small)}.small[data-v-082c0ae7]{max-width:var(--width-small)}.medium[data-v-082c0ae7]{max-width:var(--width-normal)}',""])},144:function(e,t,n){var r=n(143);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,n(4).default)("e56670e0",r,!0,{})},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}},3:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var a=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},4:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(2),o=n.n(r),a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=a&&(document.head||document.getElementsByTagName("head")[0]),c=null,u=0,l=!1,d=function(){},f=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,r){l=n,f=r||{};var a=o()(e,t);return m(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r];(c=i[s.id]).refs--,n.push(c)}for(t?m(a=o()(e,t)):a=[],r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(y(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function y(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(l)return d;r.parentNode.removeChild(r)}if(h){var o=u++;r=c||(c=g()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=g(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute(p,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,_=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},52:function(e,t,n){"use strict";n.r(t);var r=n(1),o={mixins:[n.n(r).a],computed:{choices:function(){var e=this.options.choices;return e?("string"==typeof this.options.choices&&(e=JSON.parse(this.options.choices)),e):{}},width:function(){if(!this.choices)return"medium";var e="";Object.values(this.choices).forEach(function(t){t.length>e.length&&(e=t)});var t=e.length;return t<=7?"x-small":t>7&&t<=25?"small":"medium"}},methods:{updateValue:function(e){var t=Array.from(e).filter(function(e){return e.selected&&Boolean(e.value)}).map(function(e){return e.value}).join();t&&this.options.wrapWithDelimiter&&(t=","+t+","),this.$emit("input",t)}}},a=n(0),i=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{staticClass:"select",class:e.width,attrs:{disabled:e.readonly,id:e.name,multiple:""},on:{change:function(t){e.updateValue(t.target.options)}}},[e.options.placeholder?n("option",{attrs:{value:"",disabled:e.required}},[e._v(e._s(e.options.placeholder))]):e._e(),e._v(" "),e._l(e.options.choices,function(t,r){return n("option",{domProps:{value:r,selected:e.value&&e.value.includes(r)}},[e._v(e._s(t))])})],2)},[],!1,function(e){n(144)},"data-v-082c0ae7",null);t.default=i.exports}});