/*  */$(document).ready(function(){
	xTabMove('.focus-ctrl','.focus-img',{'parent':'.foucs-con','active':'current','mode':'fade','autoplay':'true'});
	xTabMove('.gift-list','',{'parent':'.gift-con','active':'current'});
	xTabMove('.tab-tit','.list-box',{'parent':'.right-recom','active':'current'});
	xTabMove('.tab-tit','.list-box',{'parent':'.relative-art','active':'current'});
	xTabMove('.tag-tit-ul','.box-text',{'parent':'.fri-link','active':'current'});
	var $getBow=getBow();
	//游戏截图
	$('.game-pic-con').each(function(index,val){
		var This=this;
		var $This=$(this);
		var ul=$This.find('.special-img');
		var li=ul.find('.img');
		var temp=li.eq(0).find('img');
		var img = new Image();
		img.onload = function(){
			var width=this.width;
			var height=this.height;
			if(width>=height){
				ul.addClass('short');
				ul.removeClass('tall');
			}else{
				ul.addClass('tall');
				ul.removeClass('short');
			}
		}
		img.src=temp.attr('src');
		this.pre=$(this).find('.prev').eq(0);
		this.next=$(this).find('.next').eq(0);
		this.img_ul=$(this).find('.special-img');
		this.img_leg=this.img_ul.find('.img').length;
		this.li_width=this.img_ul.find('.img').eq(0).outerWidth(true);
		this.img_ul.css({'width':this.img_leg*this.li_width + this.li_width +'px'});
		this.max=3;
		this.now=0;
		this.move_legth=2;
		this.status=false;
		this.pre.addClass('no');
		if(this.img_leg<=this.max)
			this.next.addClass('no');
		this.img_move=function($this){
			if($($this).attr('class').match(/next/)){
				if(This.now + This.max < This.img_leg){
					if(This.now + This.max + This.move_legth > This.img_leg)
						This.now = This.img_leg - This.max;
					else 
						This.now+=This.move_legth ;
				}else return;
			}else{
				if(This.now!=0){
					if(This.now - This.move_legth < 0)
						This.now = 0;
					else 
						This.now-=This.move_legth;	
				}else return;
			}
			var move=This.li_width * This.now * -1;
			move=move+'px';
			This.img_ul.animate({'left': move },'fast');
			if(This.now<=0){
				This.pre.addClass('no');
			}else{
				This.pre.removeClass('no');
			}
			if(This.now + This.max >= This.img_leg){
				This.next.addClass('no');
			}else{
				This.next.removeClass('no');
			}
		}
		this.pre.bind({'click':function(){
			This.img_move(this);
		},'mouseenter':function(){
			if(This.now!=0 && !($(this).hasClass('no')) ){
				$(this).addClass('current');
			}
		},'mouseleave':function(){
			$(this).removeClass('current');
		}});
		this.next.bind({'click':function(){
			This.img_move(this);
		},'mouseenter':function(){
			if(This.now + This.max < This.img_leg && !($(this).hasClass('no')) )
				$(this).addClass('current');
		},'mouseleave':function(){
			$(this).removeClass('current');
		}});
	});
	(function(){
		//礼包详情显示
		$('.down-con-ff').delegate('.more','mouseenter',function(){
			$(this).children('.tips').show();
		});
		$('.down-con-ff').delegate('.more','mouseleave',function(){
			$(this).children('.tips').hide();
		});
	})();
	
	//首页下载 游戏介绍
	$(".game-des-con .show_all").click(function(){
		var $phase = $(".game_info");
		$phase.toggleClass("hidding");
		if($phase.hasClass("hidding")){
			$(this).text("+展开");
		}
		else{
			$(this).text("-收起");
		}
	});
	//电脑版下载 游戏介绍
	$(".game-intro .show_all").click(function(){
		var $phase = $(".game_info");
		$phase.toggleClass("hidding");
		if($phase.hasClass("hidding")){
			$(this).text("+展开");
		}
		else{
			$(this).text("-收起");
		}
	});

	//同时滚动
	/*$(window).bind('load',function(){
		var parent=$('#same_scroll');
		if(parent.length>0){
			var parTop=parent.offset().top;
			var tar=[],tarHeight=[],hightest=0,sign=-1;
			parent.children().each(function(i){
				tar[i]=$(this);
				tarHeight[i]=tar[i].height();
				if(tarHeight[i] > hightest){
					hightest=tarHeight[i];
					sign=i;
				}
			});
			if(hightest>$(window).height() && tarHeight[1] >$(window).height() ){
				tar.splice(sign,1);
				tarHeight.splice(sign,1);
				$(window).scroll(function(){
					var top=$(this).scrollTop();
					var height=$(this).height();
					for(var i=0;i<tar.length;i++){
						var move=0;
						if(top>parTop){
							
							move=(top - parTop) /  (hightest - height);
							move= move  > 1 ? (hightest - tarHeight[i]) : move * (hightest - tarHeight[i]);	
							if(tarHeight[i]<height){
								move=top - parTop;
								if(top+tarHeight[i]  > parTop+ hightest){
									var hh=hightest-tarHeight[i];
									tar[i].css({'top':hh+'px',"position":"absolute"});
									return ;
								}
								tar[i].css({'top':0+'px',"position":"fixed"});
								return ;
							} 
						}
						
						tar[i].css({'top':move+'px',"position":"relative"});
					}
				});
			}
		}
	});*/
	//数据库内页-论坛报错
	$(window).scroll(function(){
		var top=$(this).scrollTop();
		var into_forum_btn = $(".into_forum_btn");
		if(into_forum_btn.length){
			var maxTop = $(".box-text").height() - 97,
				pos_top;
			if(top > 590){
				pos_top = top - 400;
				pos_top = pos_top > maxTop ? maxTop : pos_top;
				into_forum_btn.css({"top" : pos_top +"px"});
			}
			else{
				into_forum_btn.css({"top" : 0});
			}
		}
	});
	(function(window){
		/* 弹窗下载 */
		
		var pb_popup_yr=$('#pb_popup');
		$('.down-btn').click(function(){
			pb_popup_yr.show();
			$('body').addClass('popup_of');
			if($(this).hasClass('android')){
				pb_popup_yr.find('.pop-android').show();
				pb_popup_yr.find('.pop-apple').hide();
			}else if($(this).hasClass('apple')){
				pb_popup_yr.find('.pop-android').hide();
				pb_popup_yr.find('.pop-apple').show();
			}
		});
		$('.code-show-yr').click(function(e){
			estop(e);
			pb_popup_yr.show();
			$('body').addClass('popup_of');
		});
		pb_popup_yr.find('.close').click(function(e){
			pb_popup_yr.hide();
			$('body').removeClass('popup_of');
		});
		pb_popup_yr.bind({'click':function(){
			$(this).hide();
			$('body').removeClass('popup_of');
		}});
		pb_popup_yr.find('.popup-down-con').bind({'mouseenter':function(){
			pb_popup_yr.unbind();
		},'mouseleave':function(){
			pb_popup_yr.bind({'click':function(){
				$(this).hide();
				$('body').removeClass('popup_of');
			}});
		}});
		/* 二维码 */
		pb_popup_yr.find('.i-code').each(function(){
			var This=$(this);
			if($getBow=="IE6" || $getBow=="IE7" || $getBow=="IE8")
				This.append(xMan_qrcode({render: "table",width:180,height:180,correctLevel:0,text:This.attr('data-code')}));
			else{
				This.append(xMan_qrcode({render: "canvas",width:180,height:180,correctLevel:0,text:This.attr('data-code')}));
			}
		});
	})(window);
	(function(window){
		/* 弹窗下载 */
		
		var pb_popup_yr=$('#client_popup');
		$("body").delegate(".clientGuide","click",function(e){
				estop(e);
				pb_popup_yr.show();
				$('body').addClass('popup_of');
				var This=$(this),con=pb_popup_yr.find('.img');
				con.html("");
				if($getBow=="IE6" || $getBow=="IE7" || $getBow=="IE8")
					con.append(xMan_qrcode({render: "table",width:180,height:180,correctLevel:0,text:This.attr('href')}));
				else{
					con.append(xMan_qrcode({render: "canvas",width:180,height:180,correctLevel:0,text:This.attr('href')}));
				}
		  });
		pb_popup_yr.find('.close').click(function(e){
			pb_popup_yr.hide();
			$('body').removeClass('popup_of');
		});
		pb_popup_yr.bind({'click':function(){
			$(this).hide();
			$('body').removeClass('popup_of');
		}});
		pb_popup_yr.find('.popup-down-con').bind({'mouseenter':function(){
			pb_popup_yr.unbind();
		},'mouseleave':function(){
			pb_popup_yr.bind({'click':function(){
				$(this).hide();
				$('body').removeClass('popup_of');
			}});
		}});
		pb_popup_yr.find('.i-code').each(function(){
			
		});
	})(window);
	(function(window){
		/* 详情页游戏弹出下载 */
		var link=$('#link_pop');
		if(link.length>0){
			var pop=$('.article-page-con').find('.pop-link');
			var top=parseInt(link.position().top) - parseInt(pop.eq(0).outerHeight(true)) - 10;
			var left=parseInt(link.position().left) + parseInt(link.outerWidth(true))/2;
			var time=null;
			pop.css({'left':left+'px','top':top +'px' });
			link.bind({'mouseenter':function(){
				clearTimeout(time);
				pop.show();
			},'mouseleave':function(){
				time=setTimeout(function(){
					pop.hide();
				},300);
			}});
			pop.bind({'mouseenter':function(){
				clearTimeout(time);
				pop.show();
			},'mouseleave':function(){
				time=setTimeout(function(){
					pop.hide();
				},300);
			}});
		}
	})(window);
	//截图3D轮播
	(function(window){
		$('.game-pic-con').each(function(){
			var This=$(this);
			var ul=This.find('.special-img');
			var li=ul.find('.img');
			var temp=li.eq(0).find('img');
			var img = new Image();
			img.onload = function(){
				var width=this.width;
				var height=this.height;
				if(width>=height){
					ul.addClass('short');
					ul.removeClass('tall');
				}else{
					ul.addClass('tall');
					ul.removeClass('short');
				}
			}
			img.src=temp.attr('src');
		});
		
	})(window);
	//阻止事件冒泡
	function estop(e){
		if ( e && e.preventDefault ) 
			e.preventDefault(); 
		else
			window.event.returnValue = false; 
	}
	function getBow(){//判断浏览器类型
		var Sys = {};
		var ua = navigator.userAgent.toLowerCase();
		var s;
		(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
		(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
		(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

		//以下进行测试
		if (Sys.ie &&  Sys.ie=='6.0'  ) return 'IE6';
		else if (Sys.ie &&  Sys.ie=='7.0'  ) return 'IE7';
		else if (Sys.ie &&  Sys.ie=='8.0'  ) return 'IE8';
		else if (Sys.ie &&  Sys.ie=='9.0'  ) return 'IE9';
		else if (Sys.ie &&  Sys.ie=='10.0'  ) return 'IE10';
		else if (Sys.ie &&  Sys.ie=='11.0'  ) return 'IE11';
		else if (Sys.firefox) return '';
		else if (Sys.chrome) return '-webkit-';
		else if (Sys.opera) return '-o-';
		else if (Sys.safari) return '-a-';
		else return '';
	}
	
	
	var cookie={
		setRaw : function(key, value, options) {
			if (!cookie._isValidKey(key)) {
				return;
			}
			
			options = options || {};
			
			// 计算cookie过期时间
			var expires = options.expires;
			if ('number' == typeof options.expires) {
				expires = new Date();
				expires.setTime(expires.getTime() + options.expires);
			}
			
			document.cookie = key + "=" + value + (options.path ? "; path=" + options.path : "")
					+ (expires ? "; expires=" + expires.toGMTString() : "")
					+ (options.domain ? "; domain=" + options.domain : "") + (options.secure ? "; secure" : '');
					
		},
		set:function(key, value, options) {
			
			cookie.setRaw(key, encodeURIComponent(value), options);
			
		},
		getRaw : function(key) {
			if (this._isValidKey(key)) {
				var reg = new RegExp("(^| )" + key + "=([^;]*)(;|\x24)"), result = reg.exec(document.cookie);
				
				if (result) {
					return result[2] || null;
				}
			}
			return null;
		},
		_isValidKey : function(key) {
			
			return (new RegExp("^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24"))
					.test(key);
		},
		get: function(key) {
			var value = cookie.getRaw(key);
			if ('string' == typeof value   ) {
				value = decodeURIComponent(value);
				return value;
			}
			return null;
		}
	}
	$(".guide-app-fix .close").click(function(){
		hidePop();
	});
	cookie.get("game9guideapp")? $(".guide-app-fix").hide():$(".guide-app-fix").show();
	function hidePop(){
		$(".guide-app-fix").hide();
		cookie.set("game9guideapp", "game9guideapp", {
			expires:3600 * 24,
			path : "/",
			domain : ".9game.cn" // 揪心
		});
		return true;
	}
	(function(window){
		var ele=document.createComment("页面设计: huangyp | 页面制作:Chinhung_Law | by:九游I.C.E 工作室 ");
		document.getElementsByTagName('head')[0].appendChild(ele);
	})(window);
});