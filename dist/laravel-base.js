(()=>{"use strict";var t,e=function(t,e){try{var n=t.offsetTop;e.scrollTop=n||0,t.focus({preventScroll:!0})}catch(t){}};const n=function(n){return{open:!1,fixed:n.fixed||!1,disabled:n.disabled||!1,placement:n.placement||"bottom-start",offset:n.offset,focusedIndex:-1,focusableElements:null,_popper:null,get trigger(){return this.$refs.trigger?this.$refs.trigger:this.$root.querySelector('[x-ref="trigger"]')},get menu(){return this.$refs.menu?this.$refs.menu:this.$root.querySelector('[x-ref="menu"]')},init:function(){if("function"!=typeof(t=window.Popper?window.Popper.createPopper:window.createPopper))throw new TypeError("<x-dropdown> requires Popper (https://popper.js.org)")},closeMenu:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.open&&(this.open=!1,this.focusedIndex=-1,this.focusableElements=null,this._popper&&(this._popper.destroy(),this._popper=null),t&&this.trigger&&this.trigger.focus())},openMenu:function(){this.disabled||(this._popper=t(this.trigger,this.menu,{placement:this.placement,strategy:this.fixed?"fixed":"absolute",modifiers:[{name:"offset",options:{offset:[0,this.offset]}},{name:"preventOverflow",options:{boundariesElement:this.$root}}]}),this.open=!0)},toggleMenu:function(){if(this.open)return this.closeMenu();this.openMenu()},getFocusableElements:function(){return null!==this.focusableElements?this.focusableElements:this.focusableElements=this.menu.querySelectorAll('.dropdown-item:not([disabled]), [role="menuitem"]:not([disabled])')},focusNext:function(){var t=this;if(!this.disabled){if(!this.open)return this.openMenu(),this.$nextTick((function(){t.focusNext()}));var n=this.getFocusableElements();n.length?(this.focusedIndex++,this.focusedIndex+1>n.length&&(this.focusedIndex=0),e(n[this.focusedIndex],this.menu)):this.focusedIndex=-1}},focusPrevious:function(){var t=this;if(!this.disabled){if(!this.open)return this.openMenu(),this.$nextTick((function(){t.focusPrevious()}));var n=this.getFocusableElements();n.length?(this.focusedIndex--,this.focusedIndex<0&&(this.focusedIndex=n.length-1),e(n[this.focusedIndex],this.menu)):this.focusedIndex=-1}},focusFirst:function(){var t=this.getFocusableElements();t.length?(this.focusedIndex=0,e(t[this.focusedIndex],this.menu)):this.focusedIndex=-1},focusLast:function(){var t=this.getFocusableElements();t.length?(this.focusedIndex=t.length-1,e(t[this.focusedIndex],this.menu)):this.focusedIndex=-1}}};function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}const s=function(t){return{show:t.show||!1,id:t.id,init:function(){var t=this;this.$watch("show",(function(e){e?(t.$dispatch("modal-shown",t.id),document.body.classList.add("overflow-y-hidden"),setTimeout((function(){t.autofocus()}),100)):document.body.classList.remove("overflow-y-hidden")}))},hideModal:function(){this.show=!1,this.$dispatch("modal-closed",this.id)},focusables:function(){return o(this.$root.querySelectorAll('a, button, input, textearea, select, details, [tabindex]:not([tabindex="-1"])')).filter((function(t){return!t.hasAttribute("disabled")}))},autofocus:function(){var t=o(this.$root.querySelectorAll("[autofocus], [focus]")).filter((function(t){return!t.hasAttribute("disabled")}))[0];t&&t.focus()},firstFocusable:function(){return this.focusables()[0]},lastFocusable:function(){return this.focusables().slice(-1)[0]},nextFocusable:function(){return this.focusables()[this.nextFocusableIndex()]||this.firstFocusable()},nextFocusableIndex:function(){return(this.focusables().indexOf(document.activeElement)+1)%(this.focusables().length+1)},prevFocusable:function(){return this.focusables()[this.prevFocusableIndex()]||this.lastFocusable()},prevFocusableIndex:function(){return Math.max(0,this.focusables().indexOf(document.activeElement))-1}}},r=function(t){return{notices:[],visible:[],timeShown:t.timeout||5e3,add:function(t){this.notices.push(t),this.fire(t.id)},fire:function(t){var e=this,n=this.notices.find((function(e){return e.id===t}));n&&(this.visible.push(n),n.autoDismiss&&setTimeout((function(){e.remove(t)}),this.timeShown))},remove:function(t){this.removeFrom("visible",t),this.removeFrom("notices",t)},removeFrom:function(t,e){var n=this[t].find((function(t){return t.id===e})),o=this[t].indexOf(n);o>-1&&this[t].splice(o,1)}}},u=function(){return{show:!1,observer:null,init:function(){var t=this;this.observer=new IntersectionObserver((function(e){e.forEach((function(e){t.show=!e.isIntersecting}))})),this.observer.observe(this.$el)},toTop:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}};var l;const c=function(t){return{placement:t.placement||"top",content:t.content||"",title:(t.content||"").replace(/(<([^>]+)>)/gi,""),tooltipId:null,_popper:null,init:function(){if("function"!=typeof(l=window.Popper?window.Popper.createPopper:window.createPopper))throw new TypeError("<x-tooltip> requires Popper (https://popper.js.org)")},hide:function(){var t=document.getElementById(this.tooltipId);t&&t.parentNode.removeChild(t),this._popper&&(this._popper.destroy(),this._popper=null),this.title=this.content,this.tooltipId=null},show:function(){if(null!==this.title){this.title=null,this.tooltipId=function(t){do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t}("tooltip");var t=document.createElement("div");t.setAttribute("class","tooltip"),t.setAttribute("role","tooltip"),t.setAttribute("id",this.tooltipId),t.innerHTML=this.content;var e=document.createElement("div");e.setAttribute("class","tooltip-arrow"),t.appendChild(e),document.body.append(t),this._popper=l(this.$el,t,{placement:this.placement,modifiers:[{name:"offset",options:{offset:function(t){var e=t.placement;return["top","bottom"].includes(e)?[0,20]:[0,10]}}},{name:"preventOverflow",options:{boundariesElement:this.$el}}]})}},toggle:function(){if(null===this.title)return this.hide();this.show()}}};document.addEventListener("alpine:init",(function(){Alpine.data("dropdown",n),Alpine.data("modal",s),Alpine.data("notification",r),Alpine.data("scrollToTopButton",u),Alpine.data("tooltip",c)}))})();