/*!
 * jQuery UI 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(e,t){function n(t){return!e(t).parents().andSelf().filter(function(){return e.curCSS(this,"visibility")==="hidden"||e.expr.filters.hidden(this)}).length}function r(t,r){var i=t.nodeName.toLowerCase();if("area"===i){var s=t.parentNode,o=s.name,u;return!t.href||!o||s.nodeName.toLowerCase()!=="map"?!1:(u=e("img[usemap=#"+o+"]")[0],!!u&&n(u))}return(/input|select|textarea|button|object/.test(i)?!t.disabled:"a"==i?t.href||r:r)&&n(t)}e.ui=e.ui||{},e.ui.version||(e.extend(e.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),e.fn.extend({propAttr:e.fn.prop||e.fn.attr,_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.curCSS(this,"position",1))&&/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.each(["Width","Height"],function(n,r){function i(t,n,r,i){return e.each(s,function(){n-=parseFloat(e.curCSS(t,"padding"+this,!0))||0,r&&(n-=parseFloat(e.curCSS(t,"border"+this+"Width",!0))||0),i&&(n-=parseFloat(e.curCSS(t,"margin"+this,!0))||0)}),n}var s=r==="Width"?["Left","Right"]:["Top","Bottom"],o=r.toLowerCase(),u={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?u["inner"+r].call(this):this.each(function(){e(this).css(o,i(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?u["outer"+r].call(this,t):this.each(function(){e(this).css(o,i(this,t,!0,n)+"px")})}}),e.extend(e.expr[":"],{data:function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return r(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),i=isNaN(n);return(i||n>=0)&&r(t,!i)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i=e.ui[t].prototype;for(var s in r)i.plugins[s]=i.plugins[s]||[],i.plugins[s].push([n,r[s]])},call:function(e,t,n){var r=e.plugins[t];if(!!r&&!!e.element[0].parentNode)for(var i=0;i<r.length;i++)e.options[r[i][0]]&&r[i][1].apply(e.element,n)}},contains:function(e,t){return document.compareDocumentPosition?e.compareDocumentPosition(t)&16:e!==t&&e.contains(t)},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}}))})(jQuery),function(e,t){if(e.cleanData){var n=e.cleanData;e.cleanData=function(t){for(var r=0,i;(i=t[r])!=null;r++)try{e(i).triggerHandler("remove")}catch(s){}n(t)}}else{var r=e.fn.remove;e.fn.remove=function(t,n){return this.each(function(){return n||(!t||e.filter(t,[this]).length)&&e("*",this).add([this]).each(function(){try{e(this).triggerHandler("remove")}catch(t){}}),r.call(e(this),t,n)})}}e.widget=function(t,n,r){var i=t.split(".")[0],s;t=t.split(".")[1],s=i+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][s]=function(n){return!!e.data(n,t)},e[i]=e[i]||{},e[i][t]=function(e,t){arguments.length&&this._createWidget(e,t)};var o=new n;o.options=e.extend(!0,{},o.options),e[i][t].prototype=e.extend(!0,o,{namespace:i,widgetName:t,widgetEventPrefix:e[i][t].prototype.widgetEventPrefix||t,widgetBaseClass:s},r),e.widget.bridge(t,e[i][t])},e.widget.bridge=function(n,r){e.fn[n]=function(i){var s=typeof i=="string",o=Array.prototype.slice.call(arguments,1),u=this;return i=!s&&o.length?e.extend.apply(null,[!0,i].concat(o)):i,s&&i.charAt(0)==="_"?u:(s?this.each(function(){var r=e.data(this,n),s=r&&e.isFunction(r[i])?r[i].apply(r,o):r;if(s!==r&&s!==t)return u=s,!1}):this.each(function(){var t=e.data(this,n);t?t.option(i||{})._init():e.data(this,n,new r(i,this))}),u)}},e.Widget=function(e,t){arguments.length&&this._createWidget(e,t)},e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(t,n){e.data(n,this.widgetName,this),this.element=e(n),this.options=e.extend(!0,{},this.options,this._getCreateOptions(),t);var r=this;this.element.bind("remove."+this.widgetName,function(){r.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(n,r){var i=n;if(arguments.length===0)return e.extend({},this.options);if(typeof n=="string"){if(r===t)return this.options[n];i={},i[n]=r}return this._setOptions(i),this},_setOptions:function(t){var n=this;return e.each(t,function(e,t){n._setOption(e,t)}),this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&this.widget()[t?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",t),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.call(this.element[0],n,r)===!1||n.isDefaultPrevented())}}}(jQuery),function(e,t){e.ui=e.ui||{};var n=/left|center|right/,r=/top|center|bottom/,i="center",s={},o=e.fn.position,u=e.fn.offset;e.fn.position=function(t){if(!t||!t.of)return o.apply(this,arguments);t=e.extend({},t);var u=e(t.of),l=u[0],h=(t.collision||"flip").split(" "),p=t.offset?t.offset.split(" "):[0,0],v,m,y;return l.nodeType===9?(v=u.width(),m=u.height(),y={top:0,left:0}):l.setTimeout?(v=u.width(),m=u.height(),y={top:u.scrollTop(),left:u.scrollLeft()}):l.preventDefault?(t.at="left top",v=m=0,y={top:t.of.pageY,left:t.of.pageX}):(v=u.outerWidth(),m=u.outerHeight(),y=u.offset()),e.each(["my","at"],function(){var e=(t[this]||"").split(" ");e.length===1&&(e=n.test(e[0])?e.concat([i]):r.test(e[0])?[i].concat(e):[i,i]),e[0]=n.test(e[0])?e[0]:i,e[1]=r.test(e[1])?e[1]:i,t[this]=e}),h.length===1&&(h[1]=h[0]),p[0]=parseInt(p[0],10)||0,p.length===1&&(p[1]=p[0]),p[1]=parseInt(p[1],10)||0,t.at[0]==="right"?y.left+=v:t.at[0]===i&&(y.left+=v/2),t.at[1]==="bottom"?y.top+=m:t.at[1]===i&&(y.top+=m/2),y.left+=p[0],y.top+=p[1],this.each(function(){var n=e(this),r=n.outerWidth(),o=n.outerHeight(),u=parseInt(e.curCSS(this,"marginLeft",!0))||0,l=parseInt(e.curCSS(this,"marginTop",!0))||0,c=r+u+(parseInt(e.curCSS(this,"marginRight",!0))||0),d=o+l+(parseInt(e.curCSS(this,"marginBottom",!0))||0),g=e.extend({},y),w;t.my[0]==="right"?g.left-=r:t.my[0]===i&&(g.left-=r/2),t.my[1]==="bottom"?g.top-=o:t.my[1]===i&&(g.top-=o/2),s.fractions||(g.left=Math.round(g.left),g.top=Math.round(g.top)),w={left:g.left-u,top:g.top-l},e.each(["left","top"],function(n,i){e.ui.position[h[n]]&&e.ui.position[h[n]][i](g,{targetWidth:v,targetHeight:m,elemWidth:r,elemHeight:o,collisionPosition:w,collisionWidth:c,collisionHeight:d,offset:p,my:t.my,at:t.at})}),e.fn.bgiframe&&n.bgiframe(),n.offset(e.extend(g,{using:t.using}))})},e.ui.position={fit:{left:function(t,n){var r=e(window),i=n.collisionPosition.left+n.collisionWidth-r.width()-r.scrollLeft();t.left=i>0?t.left-i:Math.max(t.left-n.collisionPosition.left,t.left)},top:function(t,n){var r=e(window),i=n.collisionPosition.top+n.collisionHeight-r.height()-r.scrollTop();t.top=i>0?t.top-i:Math.max(t.top-n.collisionPosition.top,t.top)}},flip:{left:function(t,n){if(n.at[0]!==i){var r=e(window),s=n.collisionPosition.left+n.collisionWidth-r.width()-r.scrollLeft(),o=n.my[0]==="left"?-n.elemWidth:n.my[0]==="right"?n.elemWidth:0,u=n.at[0]==="left"?n.targetWidth:-n.targetWidth,f=-2*n.offset[0];t.left+=n.collisionPosition.left<0?o+u+f:s>0?o+u+f:0}},top:function(t,n){if(n.at[1]!==i){var r=e(window),s=n.collisionPosition.top+n.collisionHeight-r.height()-r.scrollTop(),o=n.my[1]==="top"?-n.elemHeight:n.my[1]==="bottom"?n.elemHeight:0,u=n.at[1]==="top"?n.targetHeight:-n.targetHeight,f=-2*n.offset[1];t.top+=n.collisionPosition.top<0?o+u+f:s>0?o+u+f:0}}}},e.offset.setOffset||(e.offset.setOffset=function(t,n){/static/.test(e.curCSS(t,"position"))&&(t.style.position="relative");var r=e(t),i=r.offset(),s=parseInt(e.curCSS(t,"top",!0),10)||0,o=parseInt(e.curCSS(t,"left",!0),10)||0,u={top:n.top-i.top+s,left:n.left-i.left+o};"using"in n?n.using.call(t,u):r.css(u)},e.fn.offset=function(t){var n=this[0];return!n||!n.ownerDocument?null:t?this.each(function(){e.offset.setOffset(this,t)}):u.call(this)}),function(){var t=document.getElementsByTagName("body")[0],n=document.createElement("div"),r,i,o,u,l;r=document.createElement(t?"div":"body"),o={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},t&&jQuery.extend(o,{position:"absolute",left:"-1000px",top:"-1000px"});for(var c in o)r.style[c]=o[c];r.appendChild(n),i=t||document.documentElement,i.insertBefore(r,i.firstChild),n.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",u=e(n).offset(function(e,t){return t}).offset(),r.innerHTML="",i.removeChild(r),l=u.top+u.left+(t?2e3:0),s.fractions=l>21&&l<22}()}(jQuery),function(e,t){var n=0;e.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var t=this,n=this.element[0].ownerDocument,r;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(n){if(!t.options.disabled&&!t.element.propAttr("readOnly")){r=!1;var i=e.ui.keyCode;switch(n.keyCode){case i.PAGE_UP:t._move("previousPage",n);break;case i.PAGE_DOWN:t._move("nextPage",n);break;case i.UP:t._move("previous",n),n.preventDefault();break;case i.DOWN:t._move("next",n),n.preventDefault();break;case i.ENTER:case i.NUMPAD_ENTER:t.menu.active&&(r=!0,n.preventDefault());case i.TAB:if(!t.menu.active)return;t.menu.select(n);break;case i.ESCAPE:t.element.val(t.term),t.close(n);break;default:clearTimeout(t.searching),t.searching=setTimeout(function(){t.term!=t.element.val()&&(t.selectedItem=null,t.search(null,n))},t.options.delay)}}}).bind("keypress.autocomplete",function(e){r&&(r=!1,e.preventDefault())}).bind("focus.autocomplete",function(){t.options.disabled||(t.selectedItem=null,t.previous=t.element.val())}).bind("blur.autocomplete",function(e){t.options.disabled||(clearTimeout(t.searching),t.closing=setTimeout(function(){t.close(e),t._change(e)},150))}),this._initSource(),this.response=function(){return t._response.apply(t,arguments)},this.menu=e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo||"body",n)[0]).mousedown(function(n){var r=t.menu.element[0];e(n.target).closest(".ui-menu-item").length||setTimeout(function(){e(document).one("mousedown",function(n){n.target!==t.element[0]&&n.target!==r&&!e.ui.contains(r,n.target)&&t.close()})},1),setTimeout(function(){clearTimeout(t.closing)},13)}).menu({focus:function(e,n){var r=n.item.data("item.autocomplete");!1!==t._trigger("focus",e,{item:r})&&/^key/.test(e.originalEvent.type)&&t.element.val(r.value)},selected:function(e,r){var i=r.item.data("item.autocomplete"),s=t.previous;t.element[0]!==n.activeElement&&(t.element.focus(),t.previous=s,setTimeout(function(){t.previous=s,t.selectedItem=i},1)),!1!==t._trigger("select",e,{item:i})&&t.element.val(i.value),t.term=t.element.val(),t.close(e),t.selectedItem=i},blur:function(e,n){t.menu.element.is(":visible")&&t.element.val()!==t.term&&t.element.val(t.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),e.fn.bgiframe&&this.menu.element.bgiframe(),t.beforeunloadHandler=function(){t.element.removeAttr("autocomplete")},e(window).bind("beforeunload",t.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),e(window).unbind("beforeunload",this.beforeunloadHandler),e.Widget.prototype.destroy.call(this)},_setOption:function(t,n){e.Widget.prototype._setOption.apply(this,arguments),t==="source"&&this._initSource(),t==="appendTo"&&this.menu.element.appendTo(e(n||"body",this.element[0].ownerDocument)[0]),t==="disabled"&&n&&this.xhr&&this.xhr.abort()},_initSource:function(){var t=this,r,i;e.isArray(this.options.source)?(r=this.options.source,this.source=function(t,n){n(e.ui.autocomplete.filter(r,t.term))}):typeof this.options.source=="string"?(i=this.options.source,this.source=function(r,s){t.xhr&&t.xhr.abort(),t.xhr=e.ajax({url:i,data:r,dataType:"json",autocompleteRequest:++n,success:function(e,t){this.autocompleteRequest===n&&s(e)},error:function(){this.autocompleteRequest===n&&s([])}})}):this.source=this.options.source},search:function(e,t){e=e!=null?e:this.element.val(),this.term=this.element.val();if(e.length<this.options.minLength)return this.close(t);clearTimeout(this.closing);if(this._trigger("search",t)!==!1)return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:e},this.response)},_response:function(e){!this.options.disabled&&e&&e.length?(e=this._normalize(e),this._suggest(e),this._trigger("open")):this.close(),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(e){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",e))},_change:function(e){this.previous!==this.element.val()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(n,t),this.menu.deactivate(),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new e.Event("mouseover"))},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItem(t,n)})},_renderItem:function(t,n){return e("<li></li>").data("item.autocomplete",n).append(e("<a></a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible"))this.search(null,t);else{if(this.menu.first()&&/^previous/.test(e)||this.menu.last()&&/^next/.test(e)){this.element.val(this.term),this.menu.deactivate();return}this.menu[e](t)}},widget:function(){return this.menu.element}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}})}(jQuery),function(e){e.widget("ui.menu",{_create:function(){var t=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(n){!e(n.target).closest(".ui-menu-item a").length||(n.preventDefault(),t.select(n))}),this.refresh()},refresh:function(){var t=this,n=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");n.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(n){t.activate(n,e(this).parent())}).mouseleave(function(){t.deactivate()})},activate:function(e,t){this.deactivate();if(this.hasScroll()){var n=t.offset().top-this.element.offset().top,r=this.element.scrollTop(),i=this.element.height();n<0?this.element.scrollTop(r+n):n>=i&&this.element.scrollTop(r+n-i+t.height())}this.active=t.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",e,{item:t})},deactivate:function(){!this.active||(this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null)},next:function(e){this.move("next",".ui-menu-item:first",e)},previous:function(e){this.move("prev",".ui-menu-item:last",e)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(e,t,n){if(!this.active)this.activate(n,this.element.children(t));else{var r=this.active[e+"All"](".ui-menu-item").eq(0);r.length?this.activate(n,r):this.activate(n,this.element.children(t))}},nextPage:function(t){if(this.hasScroll()){if(!this.active||this.last()){this.activate(t,this.element.children(".ui-menu-item:first"));return}var n=this.active.offset().top,r=this.element.height(),i=this.element.children(".ui-menu-item").filter(function(){var t=e(this).offset().top-n-r+e(this).height();return t<10&&t>-10});i.length||(i=this.element.children(".ui-menu-item:last")),this.activate(t,i)}else this.activate(t,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(t){if(this.hasScroll()){if(!this.active||this.first()){this.activate(t,this.element.children(".ui-menu-item:last"));return}var n=this.active.offset().top,r=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var t=e(this).offset().top-n+r-e(this).height();return t<10&&t>-10}),result.length||(result=this.element.children(".ui-menu-item:first")),this.activate(t,result)}else this.activate(t,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[e.fn.prop?"prop":"attr"]("scrollHeight")},select:function(e){this._trigger("selected",e,{item:this.active})}})}(jQuery);var Forem={};Forem.base_path="forums",function(e){e(document).ready(function(){group_id=e("#add_member").data("group-id"),e("#new_member").autocomplete({source:Forem.base_path+"/admin/users/autocomplete"}),e("#new_member").bind("autocompleteselect",function(t,n){e("#add_member").attr("disabled",!1)}),add_member=function(){user=e("#new_member").val(),e.post(Forem.base_path+"/admin/groups/"+group_id+"/members",{user:user}),e(this).attr("disabled",!0),e("#new_member").val(""),e("#members").append("<li>"+user+"</li>")},e("#add_member").click(add_member),e("#new_member").keypress(function(e){e.which==13&&add_member()})})}(jQuery);