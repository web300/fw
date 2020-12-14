/*  *//**
 * 名称:x_move
 * 功能:基于jquery的动画插件
 * @author luozx
 * @Email luozx@ucweb.com
 * @version 1.0.0
 * @dependencies none
 */
(function(window){var tools={clone:function(par){var f=function(){};f.prototype=new par;return f;},getBow:function(){var Sys={};var ua=navigator.userAgent.toLowerCase();var s;(s=ua.match(/msie ([\d.]+)/))?Sys.ie=s[1]:(s=ua.match(/firefox\/([\d.]+)/))?Sys.firefox=s[1]:(s=ua.match(/chrome\/([\d.]+)/))?Sys.chrome=s[1]:(s=ua.match(/opera.([\d.]+)/))?Sys.opera=s[1]:(s=ua.match(/version\/([\d.]+).*safari/))?Sys.safari=s[1]:0;if(Sys.ie&&Sys.ie=='6.0')return'IE6';else if(Sys.ie&&Sys.ie=='7.0')return'IE7';else if(Sys.ie&&Sys.ie=='8.0')return'IE8';else if(Sys.ie&&Sys.ie=='9.0')return'IE9';else if(Sys.ie&&Sys.ie=='10.0')return'IE10';else if(Sys.ie&&Sys.ie=='11.0')return'IE11';else if(Sys.firefox)return'';else if(Sys.chrome)return'-webkit-';else if(Sys.opera)return'-o-';else if(Sys.safari)return'-a-';else return'';},trim:function(s){return s.replace(/(^\s*)|(\s*$)/ig,"");}};var animateFun={tabMoveFun:function($ctrled,mode,p_index,bow,playTime,runLength){switch(mode){case'toggle':this.toggleFun($ctrled,p_index,bow);break;case'fade':this.fadeFun($ctrled,p_index,bow,playTime);break;case'xrun':this.runFun($ctrled,p_index,'x',bow,playTime,runLength);break;case'yrun':this.runFun($ctrled,p_index,'y',bow,playTime,runLength);break;default:return;}},toggleFun:function($ctrled,p_index){var $current=$ctrled.children().eq(p_index);$current.show().siblings().hide();},fadeFun:function($ctrled,p_index,bow,playTime){var $current=$ctrled.children().eq(p_index);if(bow!='IE6'&&bow!='IE7'&&bow!=''){$current.fadeIn(playTime).siblings().stop().fadeOut(playTime);}else{$current.show().siblings().hide();}},runFun:function($ctrled,p_index,toward,bow,playTime,runLength){var move=runLength*(p_index)*-1;if(toward=='x'){$ctrled.clearQueue().animate({'left':move+'px'},playTime);}else if(toward=='y'){$ctrled.clearQueue().animate({'top':move+'px'},playTime);}}};var publicFun={outerSize:function($ctrled,toward){var runLength=0;var $temple=$ctrled.children().eq(0);if(toward=='xrun'){runLength=parseInt($temple.outerWidth(true));}else if(toward=='yrun'){runLength=parseInt($temple.outerHeight(true));}
return runLength;}};var xTabMove=(function(){var xTabMove=function(ctrl,ctrled,param){return new xTabMove.fn.init(ctrl,ctrled,param);}
xTabMove.fn=xTabMove.prototype={constructor:xTabMove,init:function(ctrl,ctrled,param){this.setParam(ctrl,ctrled,param);this.modeFun();this.autoplay=this.autoplay||false;if(param.autoplay){var copy=param;copy['ctrl']=ctrl;xAutoPlay(ctrled,copy);}},setParam:function(ctrl,ctrled,param){this.parent=param.parent||window.document;this.ctrl=ctrl;this.ctrled=ctrled;this.mouse=param.mouse||'hover';this.mode=param.mode||'toggle';this.playTime=param.playTime||300;this.active=param.active||'';this.beginFun=param.beginFun;this.endFun=param.endFun;this.bow=tools.getBow();this.runLength=param.runLength||publicFun.outerSize($(this.ctrled),this.mode);this.now=0;},modeFun:function(){var This=this;$(This.parent).each(function(){var $This=$(this);var $ctrl=$This.find(This.ctrl);var $ctrled=$This.find(This.ctrled);$ctrl.children().each(function(){if(This.mouse=='hover'){$(this).bind({'mouseenter':function(){var $this=$(this);var p_index=$this.index();$this.addClass(This.active).siblings().removeClass(This.active);animateFun.tabMoveFun($ctrled,This.mode,p_index,This.bow,This.playTime,This.runLength);This.moveEndFun($ctrled,p_index);}});}else if(This.mouse=='click'){$(this).bind({'click':function(){var $this=$(this);var p_index=$this.index();$this.addClass(This.active).siblings().removeClass(This.active);animateFun.tabMoveFun($ctrled,This.mode,p_index,This.bow,This.playTime,This.runLength);This.moveEndFun($ctrled,p_index);}});}});});},moveEndFun:function($ctrled,p_index){$ctrled.attr('x-now-data',p_index);this.now=p_index;if(this.endFun)
this.endFun.call(this);}};xTabMove.fn.init.prototype=xTabMove.fn;return xTabMove;})();var xAutoPlay=(function(){var xAutoPlay=function(ctrled,param){return new xAutoPlay.fn.init(ctrled,param);}
xAutoPlay.fn=xAutoPlay.prototype={constructor:xAutoPlay,init:function(ctrled,param){this.setParam(ctrled,param);this.autoPlayFun();},setParam:function(ctrled,param){this.parent=param.parent||window.document;this.ctrl=param.ctrl;this.ctrled=ctrled;this.mode=param.mode||'fade';this.speed=param.speed||3000;this.playTime=param.playTime||300;this.active=param.active||'';this.beginFun=param.beginFun;this.endFun=param.endFun;this.bow=tools.getBow();this.runLength=param.runLength||publicFun.outerSize($(this.ctrled),this.mode);this.now=0;},autoPlayFun:function(){var This=this;$(This.parent).each(function(){var $This=$(this);var $ctrled=$This.find(This.ctrled);var $aCtrled=$ctrled.children();var $ctrl;var timer=null;$ctrled.attr('x-now-data','0');if(This.ctrl!=null&&This.ctrl!=''){$ctrl=$This.find(This.ctrl);$ctrl.bind({'mouseleave':function(){if(!timer)timer=This.timeFun($ctrled,$aCtrled,$ctrl);},'mouseenter':function(){clearInterval(timer);timer=null;}});}
$ctrled.bind({'mouseleave':function(){if(!timer)timer=This.timeFun($ctrled,$aCtrled,$ctrl);},'mouseenter':function(){clearInterval(timer);timer=null;}});if(!timer)timer=This.timeFun($ctrled,$aCtrled,$ctrl);});},timeFun:function($ctrled,$aCtrled,$ctrl){var This=this;var timer=setInterval(function(){var go=(parseInt($ctrled.attr('x-now-data'))+1)%$aCtrled.length;if(This.ctrl!=null&&This.ctrl!=''){$ctrl.children().eq(go).addClass(This.active).siblings().removeClass(This.active);}
animateFun.tabMoveFun($ctrled,This.mode,go,This.bow,This.playTime,This.runLength);This.moveEndFun($ctrled,go);},3000);return timer;},moveEndFun:function($ctrled,p_index){$ctrled.attr('x-now-data',p_index);this.now=p_index;if(this.endFun)
this.endFun.call(this);}};xAutoPlay.fn.init.prototype=xAutoPlay.fn;return xAutoPlay;})();var xCtrlTurn=(function(){var xCtrlTurn=function(ctrled,prev,next,param){return new xCtrlTurn.fn.init(ctrled,prev,next,param);}
xCtrlTurn.fn=xCtrlTurn.prototype={constructor:xCtrlTurn,init:function(ctrled,prev,next,param){this.setParam(ctrled,prev,next,param);this.modeFun();},setParam:function(ctrled,prev,next,param){this.parent=param.parent||window.document;this.ctrl=param.ctrl;this.ctrled=ctrled;this.prev=prev;this.next=next;this.mode=param.mode||'toggle';this.playTime=param.playTime||300;this.active=param.active||'';this.btn_active=param.btn_active||'';this.endFun=param.endFun;this.bow=tools.getBow();this.runLength=param.runLength||publicFun.outerSize($(this.ctrled),this.mode);},modeFun:function(){var This=this;$(This.parent).each(function(){var $This=$(this);var $ctrl=$This.find(This.ctrl);var $ctrled=$This.find(This.ctrled);var $aCtrled=$ctrled.children();var $prev=$This.find(This.prev);var $next=$This.find(This.next);$ctrled.attr('x-now-data','0');$prev.bind({'click':function(){var go=($aCtrled.length+parseInt($ctrled.attr('x-now-data'))-1)%$aCtrled.length;animateFun.tabMoveFun($ctrled,This.mode,go,This.bow,This.playTime,This.runLength);This.moveEndFun($ctrled,go);if(This.ctrl!=null&&This.ctrl!=''){$ctrl.children().eq(go).addClass(This.active).siblings().removeClass(This.active);}},'mouseenter':function(){$(this).addClass(This.btn_active);},'mouseleave':function(){$(this).removeClass(This.btn_active);}});$next.bind({'click':function(){var go=(parseInt($ctrled.attr('x-now-data'))+1)%$aCtrled.length;animateFun.tabMoveFun($ctrled,This.mode,go,This.bow,This.playTime,This.runLength);This.moveEndFun($ctrled,go);if(This.ctrl!=null&&This.ctrl!=''){$ctrl.children().eq(go).addClass(This.active).siblings().removeClass(This.active);}},'mouseenter':function(){$(this).addClass(This.btn_active);},'mouseleave':function(){$(this).removeClass(This.btn_active);}});});},moveEndFun:function($ctrled,p_index){$ctrled.attr('x-now-data',p_index);this.now=p_index;if(this.endFun)
this.endFun.call(this);}};xCtrlTurn.fn.init.prototype=xCtrlTurn.fn;return xCtrlTurn;})();window.xTabMove=xTabMove;window.xAutoPlay=xAutoPlay;window.xCtrlTurn=xCtrlTurn;})(window);