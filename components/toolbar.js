!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="Zg15")}({"6Y56":function(t,e,n){"use strict";e.a={props:{url:String}}},Aqzh:function(t,e,n){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var n=Object.prototype.toString.call(t);return"[object RegExp]"===n||"[object Date]"===n||function(t){return t.$$typeof===e}(t)}(t)},e="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?o((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function i(t,e,i){return t.concat(e).map(function(t){return n(t,i)})}function r(t,e,i){var r={};return i.isMergeableObject(t)&&Object.keys(t).forEach(function(e){r[e]=n(t[e],i)}),Object.keys(e).forEach(function(a){i.isMergeableObject(e[a])&&t[a]?r[a]=function(t,e){if(!e.customMerge)return o;var n=e.customMerge(t);return"function"===typeof n?n:o}(a,i)(t[a],e[a],i):r[a]=n(e[a],i)}),r}function o(e,o,a){(a=a||{}).arrayMerge=a.arrayMerge||i,a.isMergeableObject=a.isMergeableObject||t;var s=Array.isArray(o),u=Array.isArray(e),c=s===u;return c?s?a.arrayMerge(e,o,a):r(e,o,a):n(o,a)}return o.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return o(t,n,e)},{})},o}()},"J+RK":function(t,e,n){"use strict";var i=n("zOht"),r=n("oLRI"),o={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},a={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},s={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},u=n("MuGO");n.d(e,"a",function(){return f});var c=["touchstart","pointerdown","mousedown","keydown"],l=["touchend","pointerup","mouseup","contextmenu"],d=[],f=function(t){function e(n){var r=t.call(this,i.__assign({},e.defaultAdapter,n))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return i.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(r),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(i),t.adapter_.removeClass(r),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(c.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):l.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;c.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),l.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&d.length>0&&d.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(d.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){d=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,p=d.endPoint;c=f.x+"px, "+f.y+"px",l=p.x+"px, "+p.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},u)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(u.b)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,o=i.isActivated;(r||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(n)},s.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=i.__assign({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))},e}(r.a)},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},MuGO:function(t,e,n){"use strict";var i,r;function o(t,e){void 0===e&&(e=!1);var n=t.CSS,r=i;if("boolean"===typeof i&&!e)return i;if(!(n&&"function"===typeof n.supports))return!1;var o=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return r=!(!o&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;return n.parentNode&&n.parentNode.removeChild(n),r}(t),e||(i=r),r}function a(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===r||e){var n=!1;try{t.document.addEventListener("test",function(){},{get passive(){return n=!0}})}catch(i){}r=n}return!!r&&{passive:!0}}function s(t,e,n){if(!t)return{x:0,y:0};var i,r,o=e.x,a=e.y,s=o+n.left,u=a+n.top;if("touchstart"===t.type){var c=t;i=c.changedTouches[0].pageX-s,r=c.changedTouches[0].pageY-u}else{var l=t;i=l.pageX-s,r=l.pageY-u}return{x:i,y:r}}n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},PSzo:function(t,e,n){"use strict";var i=n("kUbF"),r=n("gVot"),o=function(t,e){Object.keys(e).forEach(function(n){if(void 0!==t[n]){var i=t[n],o=e[n];Object(r.a)(i,o)}})};e.a=function(t){var e={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var i in o(t,n),t){var r=t[i];e.component(r.name,r)}}};return Object(i.a)(e),e}},QnW2:function(t,e,n){"use strict";var i=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(i,"$1").toLowerCase()}},SBAC:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("zOht"),r=n("oLRI"),o=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,i.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new r.a({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e){this.root_.addEventListener(t,e)},t.prototype.unlisten=function(t,e){this.root_.removeEventListener(t,e)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"===typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},t}()},Zg15:function(t,e,n){"use strict";n.r(e);var i=n("PSzo"),r=function(){var t=this.$createElement;return(this._self._c||t)("header",{class:this.className},[this._t("default")],2)};r._withStripped=!0;var o=n("zOht"),a=n("SBAC"),s=n("mE3l"),u=n("oLRI"),c={FIXED:"mdc-toolbar--fixed",FIXED_AT_LAST_ROW:"mdc-toolbar--fixed-at-last-row",FIXED_LASTROW:"mdc-toolbar--fixed-lastrow-only",FLEXIBLE_DEFAULT_BEHAVIOR:"mdc-toolbar--flexible-default-behavior",FLEXIBLE_MAX:"mdc-toolbar--flexible-space-maximized",FLEXIBLE_MIN:"mdc-toolbar--flexible-space-minimized",TOOLBAR_ROW_FLEXIBLE:"mdc-toolbar--flexible"},l={CHANGE_EVENT:"MDCToolbar:change",FIRST_ROW_SELECTOR:".mdc-toolbar__row:first-child",ICON_SELECTOR:".mdc-toolbar__icon",TITLE_SELECTOR:".mdc-toolbar__title"},d={MAX_TITLE_SIZE:2.125,MIN_TITLE_SIZE:1.25,TOOLBAR_MOBILE_BREAKPOINT:600,TOOLBAR_ROW_HEIGHT:64,TOOLBAR_ROW_MOBILE_HEIGHT:56},f=function(t){function e(n){var i=t.call(this,o.__assign({},e.defaultAdapter,n))||this;return i.checkRowHeightFrame_=0,i.scrollFrame_=0,i.executedLastChange_=!1,i.isFixed_=!1,i.isFixedLastRow_=!1,i.hasFlexibleFirstRow_=!1,i.useFlexDefaultBehavior_=!1,i.calculations_={flexibleExpansionHeight:0,flexibleExpansionRatio:0,maxTranslateYDistance:0,maxTranslateYRatio:0,scrollThreshold:0,scrollThresholdRatio:0,toolbarHeight:0,toolbarRatio:0,toolbarRowHeight:0},i}return o.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},registerScrollHandler:function(){},deregisterScrollHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},getViewportWidth:function(){return 0},getViewportScrollY:function(){return 0},getOffsetHeight:function(){return 0},getFirstRowElementOffsetHeight:function(){return 0},notifyChange:function(){},setStyle:function(){},setStyleForTitleElement:function(){},setStyleForFlexibleRowElement:function(){},setStyleForFixedAdjustElement:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.isFixed_=this.adapter_.hasClass(c.FIXED),this.isFixedLastRow_=this.adapter_.hasClass(c.FIXED_LASTROW)&&this.isFixed_,this.hasFlexibleFirstRow_=this.adapter_.hasClass(c.TOOLBAR_ROW_FLEXIBLE),this.hasFlexibleFirstRow_&&(this.useFlexDefaultBehavior_=this.adapter_.hasClass(c.FLEXIBLE_DEFAULT_BEHAVIOR)),this.resizeHandler_=function(){return t.checkRowHeight_()},this.scrollHandler_=function(){return t.updateToolbarStyles_()},this.adapter_.registerResizeHandler(this.resizeHandler_),this.adapter_.registerScrollHandler(this.scrollHandler_),this.initKeyRatio_(),this.setKeyHeights_()},e.prototype.destroy=function(){this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.deregisterScrollHandler(this.scrollHandler_)},e.prototype.updateAdjustElementStyles=function(){this.isFixed_&&this.adapter_.setStyleForFixedAdjustElement("margin-top",this.calculations_.toolbarHeight+"px")},e.prototype.getFlexibleExpansionRatio_=function(t){return Math.max(0,1-t/(this.calculations_.flexibleExpansionHeight+1e-4))},e.prototype.checkRowHeight_=function(){var t=this;cancelAnimationFrame(this.checkRowHeightFrame_),this.checkRowHeightFrame_=requestAnimationFrame(function(){return t.setKeyHeights_()})},e.prototype.setKeyHeights_=function(){var t=this.getRowHeight_();t!==this.calculations_.toolbarRowHeight&&(this.calculations_.toolbarRowHeight=t,this.calculations_.toolbarHeight=this.calculations_.toolbarRatio*this.calculations_.toolbarRowHeight,this.calculations_.flexibleExpansionHeight=this.calculations_.flexibleExpansionRatio*this.calculations_.toolbarRowHeight,this.calculations_.maxTranslateYDistance=this.calculations_.maxTranslateYRatio*this.calculations_.toolbarRowHeight,this.calculations_.scrollThreshold=this.calculations_.scrollThresholdRatio*this.calculations_.toolbarRowHeight,this.updateAdjustElementStyles(),this.updateToolbarStyles_())},e.prototype.updateToolbarStyles_=function(){var t=this;cancelAnimationFrame(this.scrollFrame_),this.scrollFrame_=requestAnimationFrame(function(){var e=t.adapter_.getViewportScrollY(),n=t.scrolledOutOfThreshold_(e);if(!n||!t.executedLastChange_){var i=t.getFlexibleExpansionRatio_(e);t.updateToolbarFlexibleState_(i),t.isFixedLastRow_&&t.updateToolbarFixedState_(e),t.hasFlexibleFirstRow_&&t.updateFlexibleRowElementStyles_(i),t.executedLastChange_=n,t.adapter_.notifyChange({flexibleExpansionRatio:i})}})},e.prototype.scrolledOutOfThreshold_=function(t){return t>this.calculations_.scrollThreshold},e.prototype.initKeyRatio_=function(){var t=this.getRowHeight_(),e=this.adapter_.getFirstRowElementOffsetHeight()/t;this.calculations_.toolbarRatio=this.adapter_.getOffsetHeight()/t,this.calculations_.flexibleExpansionRatio=e-1,this.calculations_.maxTranslateYRatio=this.isFixedLastRow_?this.calculations_.toolbarRatio-e:0,this.calculations_.scrollThresholdRatio=(this.isFixedLastRow_?this.calculations_.toolbarRatio:e)-1},e.prototype.getRowHeight_=function(){var t=d.TOOLBAR_MOBILE_BREAKPOINT;return this.adapter_.getViewportWidth()<t?d.TOOLBAR_ROW_MOBILE_HEIGHT:d.TOOLBAR_ROW_HEIGHT},e.prototype.updateToolbarFlexibleState_=function(t){this.adapter_.removeClass(c.FLEXIBLE_MAX),this.adapter_.removeClass(c.FLEXIBLE_MIN),1===t?this.adapter_.addClass(c.FLEXIBLE_MAX):0===t&&this.adapter_.addClass(c.FLEXIBLE_MIN)},e.prototype.updateToolbarFixedState_=function(t){var e=Math.max(0,Math.min(t-this.calculations_.flexibleExpansionHeight,this.calculations_.maxTranslateYDistance));this.adapter_.setStyle("transform","translateY("+-e+"px)"),e===this.calculations_.maxTranslateYDistance?this.adapter_.addClass(c.FIXED_AT_LAST_ROW):this.adapter_.removeClass(c.FIXED_AT_LAST_ROW)},e.prototype.updateFlexibleRowElementStyles_=function(t){if(this.isFixed_){var e=this.calculations_.flexibleExpansionHeight*t;this.adapter_.setStyleForFlexibleRowElement("height",e+this.calculations_.toolbarRowHeight+"px")}this.useFlexDefaultBehavior_&&this.updateElementStylesDefaultBehavior_(t)},e.prototype.updateElementStylesDefaultBehavior_=function(t){var e=d.MIN_TITLE_SIZE,n=(d.MAX_TITLE_SIZE-e)*t+e;this.adapter_.setStyleForTitleElement("font-size",n+"rem")},e}(u.a),p=f.strings,_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){var t=this;this.ripples_=[],this.fixedAdjustElement_=null,this.titleElement_=this.root_.querySelector(p.TITLE_SELECTOR);var e=this.root_.querySelector(p.FIRST_ROW_SELECTOR);if(!e)throw new Error("MDCToolbar: Required sub-element '"+p.FIRST_ROW_SELECTOR+"' is missing");this.firstRowElement_=e,[].forEach.call(this.root_.querySelectorAll(p.ICON_SELECTOR),function(e){var n=s.a.attachTo(e);n.unbounded=!0,t.ripples_.push(n)})},e.prototype.destroy=function(){this.ripples_.forEach(function(t){t.destroy()}),t.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"fixedAdjustElement",{get:function(){return this.fixedAdjustElement_},set:function(t){this.fixedAdjustElement_=t,this.foundation_.updateAdjustElementStyles()},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new f({hasClass:function(e){return t.root_.classList.contains(e)},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},registerScrollHandler:function(t){return window.addEventListener("scroll",t)},deregisterScrollHandler:function(t){return window.removeEventListener("scroll",t)},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getViewportWidth:function(){return window.innerWidth},getViewportScrollY:function(){return window.pageYOffset},getOffsetHeight:function(){return t.root_.offsetHeight},getFirstRowElementOffsetHeight:function(){return t.firstRowElement_.offsetHeight},notifyChange:function(e){return t.emit(p.CHANGE_EVENT,e)},setStyle:function(e,n){return t.root_.style.setProperty(e,n)},setStyleForTitleElement:function(e,n){t.titleElement_&&t.titleElement_.style.setProperty(e,n)},setStyleForFlexibleRowElement:function(e,n){return t.firstRowElement_.style.setProperty(e,n)},setStyleForFixedAdjustElement:function(e,n){t.fixedAdjustElement&&t.fixedAdjustElement.style.setProperty(e,n)}})},e}(a.a),h={CHANGE:"change"},m={name:"ui-toolbar",props:{fixed:{type:Boolean,default:!1},waterfall:{type:Boolean,default:!1},fixedLastrow:{type:Boolean,default:!1},flexible:{type:Boolean,default:!1},defaultFlexible:{type:Boolean,default:!1},contentSelector:{type:String,default:".mdc-toolbar-fixed-adjust"}},data:function(){return{$toolbar:null}},computed:{isFixed:function(){return this.fixed||this.waterfall||this.fixedLastrow},className:function(){var t=this.flexible||this.defaultFlexible;return{"mdc-toolbar":!0,"mdc-toolbar--fixed":this.isFixed,"mdc-toolbar--waterfall":this.waterfall,"mdc-toolbar--fixed-lastrow-only":this.fixedLastrow,"mdc-toolbar--flexible":t,"mdc-toolbar--flexible-default-behavior":this.defaultFlexible}}},mounted:function(){var t=this;this.$toolbar=new _(this.$el),this.$toolbar.listen("MDCToolbar:".concat(h.CHANGE),function(e){var n=e.detail;t.$emit(h.CHANGE,n.flexibleExpansionRatio)}),this.isFixed&&this.fixedAdjustContent()},methods:{fixedAdjustContent:function(){var t=document.querySelector(this.contentSelector);t&&(this.$toolbar.fixedAdjustElement=t)}}},v=n("KHd+"),b=Object(v.a)(m,r,[],!1,null,null,null);b.options.__file="src/scripts/components/toolbar/toolbar.vue";var y=b.exports,g=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mdc-toolbar__row"},[this._t("default")],2)};g._withStripped=!0;var E={name:"ui-toolbar-row"},w=Object(v.a)(E,g,[],!1,null,null,null);w.options.__file="src/scripts/components/toolbar/toolbar-row.vue";var A=w.exports,S=function(){var t=this.$createElement;return(this._self._c||t)("section",{class:this.className},[this._t("default")],2)};S._withStripped=!0;var O=["start","end"],R={name:"ui-toolbar-section",props:{align:{type:String,default:""},fit:{type:Boolean,default:!1}},computed:{className:function(){var t=["mdc-toolbar__section"];if(this.align){var e=this.align.toLowerCase();O.includes(e)&&t.push("mdc-toolbar__section--align-".concat(e))}return this.fit&&t.push("mdc-toolbar__section--shrink-to-fit"),t}}},T=Object(v.a)(R,S,[],!1,null,null,null);T.options.__file="src/scripts/components/toolbar/toolbar-section.vue";var x=T.exports,C=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"mdc-toolbar__title"},[this._t("default")],2)};C._withStripped=!0;var F={name:"ui-toolbar-title"},I=Object(v.a)(F,C,[],!1,null,null,null);I.options.__file="src/scripts/components/toolbar/toolbar-title.vue";var H=I.exports,L=function(){var t=this.$createElement;return(this._self._c||t)("a",{class:this.className,attrs:{href:this.url}},[this._t("default",[this._v(this._s(this.isMenu?"menu":""))])],2)};L._withStripped=!0;var j=n("oIJy"),D="menu",M={props:{type:{type:String,default:"icon"}},computed:{isMenu:function(){return this.type.toLowerCase()===D},className:function(){return[j.a.mdi,this.isMenu?"mdc-toolbar__menu-icon":"mdc-toolbar__icon"]}}},P={name:"ui-toolbar-anchor",mixins:[M,n("6Y56").a]},B=Object(v.a)(P,L,[],!1,null,null,null);B.options.__file="src/scripts/components/toolbar/icons/toolbar-anchor.vue";var N=B.exports,V=function(){var t=this.$createElement;return(this._self._c||t)("span",{class:this.className},[this._t("default",[this._v(this._s(this.isMenu?"menu":""))])],2)};V._withStripped=!0;var U={name:"ui-toolbar-span",mixins:[M]},z=Object(v.a)(U,V,[],!1,null,null,null);z.options.__file="src/scripts/components/toolbar/icons/toolbar-span.vue";var G=z.exports,k=function(){var t=this.$createElement;return(this._self._c||t)("button",{class:this.className,attrs:{type:"button"},on:{click:this.handleClick}},[this._t("default",[this._v(this._s(this.isMenu?"menu":""))])],2)};k._withStripped=!0;var X={name:"ui-toolbar-button",mixins:[M],methods:{handleClick:function(t){this.$emit("click",t)}}},W=Object(v.a)(X,k,[],!1,null,null,null);W.options.__file="src/scripts/components/toolbar/icons/toolbar-button.vue";var $=W.exports;e.default=Object(i.a)({UiToolbar:y,UiToolbarRow:A,UiToolbarSection:x,UiToolbarTitle:H,UiToolbarAnchor:N,UiToolbarSpan:G,UiToolbarButton:$})},gVot:function(t,e,n){"use strict";var i=n("Aqzh"),r=n.n(i),o=n("QnW2"),a=function(t){var e=t.componentProps,n=t.propName,i=t.props,a=e[n].default,s=i[n];"object"!==Object(o.a)(a)?e[n].default=s:e[n].default=r()(a,s)},s=function(t){var e=t.componentMixins,n=t.propName,i=t.props;if(e.length)for(var r=e.length;r--;)if(void 0!==e[r].props[n]){a({componentProps:e[r].props,propName:n,props:i});break}};e.a=function(t,e){Object.keys(e).forEach(function(n){t.props?void 0===t.props[n]?s({componentMixins:t.mixins,propName:n,props:e}):a({componentProps:t.props,propName:n,props:e}):s({componentMixins:t.mixins,propName:n,props:e})})}},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("yLpj"))},mE3l:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n("zOht"),r=n("SBAC"),o=n("rsrW"),a=n("J+RK"),s=n("MuGO"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return i.__extends(e,t),e.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var i=new e(t);return void 0!==n.isUnbounded&&(i.unbounded=n.isUnbounded),i},e.createAdapter=function(t){return{addClass:function(e){return t.root_.classList.add(e)},browserSupportsCssVars:function(){return s.c(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,s.a())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,s.a())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return Object(o.b)(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,s.a())},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,s.a())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root_.classList.remove(e)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new a.a(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},e}(r.a)},oIJy:function(t,e,n){"use strict";e.a={mdi:"material-icons"}},oLRI:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}()},rsrW:function(t,e,n){"use strict";function i(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(r(n,e))return n;n=n.parentElement}return null}function r(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},zOht:function(t,e,n){(function(n){var i,r,o,a,s,u,c,l,d,f,p,_,h,m,v,b,y,g,E,w;!function(A){var S="object"===typeof n?n:"object"===typeof self?self:"object"===typeof this?this:{};function O(t,e){return t!==S&&("function"===typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(n,i){return t[n]=e?e(n,i):i}}void 0===(i=function(t){!function(t){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};r=function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)},o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},a=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&(n[i[r]]=t[i[r]]);return n},s=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},u=function(t,e){return function(n,i){e(n,i,t)}},c=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function a(t){try{u(i.next(t))}catch(e){o(e)}}function s(t){try{u(i.throw(t))}catch(e){o(e)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,s)}u((i=i.apply(t,e||[])).next())})},d=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(s){o=[6,s],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},f=function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])},p=function(t){var e="function"===typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},_=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(s){r={error:s}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return a},h=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(_(arguments[e]));return t},m=function(t){return this instanceof m?(this.v=t,this):new m(t)},v=function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,r=n.apply(t,e||[]),o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(t){r[t]&&(i[t]=function(e){return new Promise(function(n,i){o.push([t,e,n,i])>1||s(t,e)})})}function s(t,e){try{(n=r[t](e)).value instanceof m?Promise.resolve(n.value.v).then(u,c):l(o[0][2],n)}catch(i){l(o[0][3],i)}var n}function u(t){s("next",t)}function c(t){s("throw",t)}function l(t,e){t(e),o.shift(),o.length&&s(o[0][0],o[0][1])}},b=function(t){var e,n;return e={},i("next"),i("throw",function(t){throw t}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(i,r){e[i]=t[i]?function(e){return(n=!n)?{value:m(t[i](e)),done:"return"===i}:r?r(e):e}:r}},y=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=p(t),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(n){e[n]=t[n]&&function(e){return new Promise(function(i,r){e=t[n](e),function(t,e,n,i){Promise.resolve(i).then(function(e){t({value:e,done:n})},e)}(i,r,e.done,e.value)})}}},g=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},E=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},w=function(t){return t&&t.__esModule?t:{default:t}},t("__extends",r),t("__assign",o),t("__rest",a),t("__decorate",s),t("__param",u),t("__metadata",c),t("__awaiter",l),t("__generator",d),t("__exportStar",f),t("__values",p),t("__read",_),t("__spread",h),t("__await",m),t("__asyncGenerator",v),t("__asyncDelegator",b),t("__asyncValues",y),t("__makeTemplateObject",g),t("__importStar",E),t("__importDefault",w)}(O(S,O(t)))}.apply(e,[e]))||(t.exports=i)}()}).call(this,n("yLpj"))}})});