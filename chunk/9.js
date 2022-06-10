/*! For license information please see 9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"102":function(r,n,i){"use strict";i.r(n),i.d(n,"taro_pull_to_refresh",(function(){return p}));var s=i(33),a=i(27),c=i(118);function setTransform(r,n){r.transform=n,r.webkitTransform=n,r.MozTransform=n}var l="undefined"!=typeof navigator&&/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),u={"activate":"release","deactivate":"pull","release":"loading","finish":"finish"},d=!1;try{var h=Object.defineProperty({},"passive",{"get":function(){d=!0}});window.addEventListener("cancel",(function(){return{}}),h)}catch(r){}var f=!!d&&{"passive":!1},p=function(){function e(r){var n=this;Object(s.g)(this,r),this.onRefresh=Object(s.c)(this,"refresh",7),this.prefixCls="rmc-pull-to-refresh",this.distanceToRefresh=50,this.damping=100,this.indicator=u,this.currSt="deactivate",this.dragOnEdge=!1,this._ScreenY=0,this._startScreenY=0,this._lastScreenY=0,this._isMounted=!1,this.triggerPullDownRefresh=function(r){!n.dragOnEdge&&n._isMounted&&(r?(n._lastScreenY=n.distanceToRefresh+1,n.currSt="release",n.setContentStyle(n._lastScreenY)):(n.currSt="finish",n.reset()))},this.init=function(){var r=n.scrollContainer,i=n.el.childNodes[n.el.childNodes.length-1].childNodes[0];n.el.appendChild=i.appendChild.bind(i),n.el.insertBefore=i.insertBefore.bind(i),n.el.replaceChild=i.replaceChild.bind(i),n.el.removeChild=i.removeChild.bind(i),n._to={"touchstart":n.onTouchStart.bind(n,r),"touchmove":n.onTouchMove.bind(n,r),"touchend":n.onTouchEnd.bind(n,r),"touchcancel":n.onTouchEnd.bind(n,r)},Object.keys(n._to).forEach((function(i){r.addEventListener(i,n._to[i],f)}))},this.destroy=function(){var r=n.scrollContainer;Object.keys(n._to).forEach((function(i){r.removeEventListener(i,n._to[i])}))},this.onTouchStart=function(r,i){n._ScreenY=n._startScreenY=i.touches[0].screenY,n._lastScreenY=n._lastScreenY||0},this.isEdge=function(r){var i=n.scrollContainer;return i&&i===document.body?(document.scrollingElement?document.scrollingElement:document.body).scrollTop<=0:r.scrollTop<=0},this.damp=function(r){return Math.abs(n._lastScreenY)>n.damping?0:r*=.6*(1-Math.abs(n._ScreenY-n._startScreenY)/window.screen.height)},this.onTouchMove=function(r,i){var s=i.touches[0].screenY;if(!(n._startScreenY>s)&&n.isEdge(r)){n.dragOnEdge||(n._ScreenY=n._startScreenY=i.touches[0].screenY,n.dragOnEdge=!0),i.cancelable&&i.preventDefault();var a=Math.round(s-n._ScreenY);n._ScreenY=s,n._lastScreenY+=n.damp(a),n.setContentStyle(n._lastScreenY),Math.abs(n._lastScreenY)<n.distanceToRefresh?"deactivate"!==n.currSt&&(n.currSt="deactivate"):"deactivate"===n.currSt&&(n.currSt="activate"),l&&i.changedTouches[0].clientY<0&&n.onTouchEnd()}},this.onTouchEnd=function(){n.dragOnEdge&&(n.dragOnEdge=!1),"activate"===n.currSt?(n.currSt="release",n.onRefresh.emit(n),n._lastScreenY=n.distanceToRefresh+1,n.setContentStyle(n._lastScreenY)):"release"===n.currSt?(n._lastScreenY=n.distanceToRefresh+1,n.setContentStyle(n._lastScreenY)):n.reset()},this.reset=function(){n._lastScreenY=0,n.setContentStyle(0)},this.setContentStyle=function(r){n.contentRef&&setTransform(n.contentRef.style,r?"translate3d(0px,"+r+"px,0)":"")}}return Object.defineProperty(e.prototype,"scrollContainer",{"get":function(){return document.querySelector(".taro_page_stationed")||document.querySelector(".taro_page")||document.querySelector(".taro_router")||document.querySelector(".taro-tabbar__panel")||document.body},"enumerable":!1,"configurable":!0}),e.prototype.statusChange=function(){if("release"===this.currSt){var r=this.el.closest(".taro_page");r&&r.__page&&r.__page.onPullDownRefresh()}},e.prototype.disconnectedCallback=function(){this.destroy()},e.prototype.componentDidLoad=function(){var r=this;this.init(),this._isMounted=!0,a.a.eventCenter.on("__taroStartPullDownRefresh",(function(n){var i=n.successHandler,s=n.errorHandler;try{r.triggerPullDownRefresh(!0),i({"errMsg":"startPullDownRefresh: ok"})}catch(r){s({"errMsg":"startPullDownRefresh: fail"})}})),a.a.eventCenter.on("__taroStopPullDownRefresh",(function(n){var i=n.successHandler,s=n.errorHandler;try{r.triggerPullDownRefresh(!1),i({"errMsg":"stopPullDownRefresh: ok"})}catch(r){s({"errMsg":"stopPullDownRefresh: fail"})}}))},e.prototype.render=function(){var r=this,t=function(n){var i=r,a=i.currSt,l=i.dragOnEdge,u=i.prefixCls,d=Object(c.a)(n,!l&&u+"-transition"),h="activate"===a||"release"===a;return Object(s.e)("div",{"class":u+"-content-wrapper"},Object(s.e)("div",{"class":d,"ref":function(n){r.contentRef=n}},h&&Object(s.e)("div",{"class":u+"-indicator"},Object(s.e)("div",null),Object(s.e)("div",null),Object(s.e)("div",null)),Object(s.e)("slot",null)))};return this.scrollContainer?t(this.prefixCls+"-content "+this.prefixCls+"-down"):Object(s.e)(s.a,{"class":Object(c.a)(this.prefixCls,this.prefixCls+"-down")},t(this.prefixCls+"-content"))},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(s.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"currSt":["statusChange"]}},"enumerable":!1,"configurable":!0}),e}();p.style=".rmc-pull-to-refresh-content{-webkit-transform-origin:left top 0px;transform-origin:left top 0px}.rmc-pull-to-refresh-content-wrapper{overflow:hidden;min-height:100vh}.rmc-pull-to-refresh-transition{-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s}@-webkit-keyframes rmc-pull-to-refresh-indicator{50%{opacity:0.2}100%{opacity:1}}@keyframes rmc-pull-to-refresh-indicator{50%{opacity:0.2}100%{opacity:1}}.rmc-pull-to-refresh-indicator{text-align:center;height:30px;line-height:10px}.rmc-pull-to-refresh-indicator>div{background-color:grey;width:6px;height:6px;border-radius:100%;margin:3px;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block;-webkit-animation:rmc-pull-to-refresh-indicator 0.5s 0s infinite linear;animation:rmc-pull-to-refresh-indicator 0.5s 0s infinite linear}.rmc-pull-to-refresh-indicator>div:nth-child(0){-webkit-animation-delay:-0.1s !important;animation-delay:-0.1s !important}.rmc-pull-to-refresh-indicator>div:nth-child(1){-webkit-animation-delay:-0.2s !important;animation-delay:-0.2s !important}.rmc-pull-to-refresh-indicator>div:nth-child(2){-webkit-animation-delay:-0.3s !important;animation-delay:-0.3s !important}.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator{margin-top:-25px}"},"118":function(r,n,i){"use strict";i.d(n,"a",(function(){return s}));var s=function createCommonjsModule(r,n,i){return r(i={"path":n,"exports":{},"require":function(r,n){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports),i.exports}((function(r){!function(){var n={}.hasOwnProperty;function o(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var a=typeof s;if("string"===a||"number"===a)r.push(s);else if(Array.isArray(s)){if(s.length){var c=o.apply(null,s);c&&r.push(c)}}else if("object"===a)if(s.toString===Object.prototype.toString)for(var l in s)n.call(s,l)&&s[l]&&r.push(l);else r.push(s.toString())}}return r.join(" ")}r.exports?(o.default=o,r.exports=o):window.classNames=o}()}))}}]);