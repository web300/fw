/*  */
$(function(){
	// 下载详情右侧排行
	$('.top_ph ul li').mouseenter(function(){
		$(this).siblings().removeClass('showstyle');
		$(this).addClass('showstyle');
	})
	
	// 下载详情 其他版本展开更多
	 	var bbnm = $('.ath-bb ul li').size();
	 	if(bbnm>3){
	 		$('.mor-btn').show();
	 	}
	 	var bbzt = true;
	 	$('.mor-btn').click(function(){
	 		if(bbzt==true){
	 			$('.ath-bb ul').animate({maxHeight:bbnm*48},'fast');
	 			$(this).html('收起')
	 			bbzt =false
	 		}else{
	 			$('.ath-bb ul').animate({maxHeight:142},'fast');
	 			bbzt=true
	 			$(this).html('展开')
	 		}
	 	})
	//	 下载详情 游戏介绍 展开更多
	$('.info-mor p').click(function(){
		$('.game-info-c').css('max-height','none');
		$('.info-mor').hide();
	})
	//猜你喜欢 切换
	$('.tblist span').mouseenter(function(){
		$('.tblist span').removeClass('tab-color');
		$(this).addClass('tab-color');
		var tbnm =$(this).index();
		$('.love .tab-cont .tab-list').hide();
		$('.love .tab-cont .tab-list').eq(tbnm).show();
	})
	
	//猜你喜欢 更多
	var allw =0;
	$('.tblist span').each(function(){
		var listw = $(this).outerWidth();
			allw +=Number(listw);
			if(allw>620){
				$('.tblist').css('width',allw)
			}
	})
	if(allw>630){
		$('.tit-btn .next').click(function(){
			var mgL = $('.tblist').position().left;
			mgL = mgL - 48;
			if(650 - mgL>=allw){
				console.log(1)
				mgL = mgL + 48;
			} else if(mgL>=0){
				mgL=0
			}
			$('.tblist').animate({left:mgL},'fast')
		})
		$('.tit-btn .prev').click(function(){
			var mgL = $('.tblist').position().left;
			mgL = mgL + 48;
			if(mgL>=0){
				mgL=0
			}
			$('.tblist').animate({left:mgL},'fast')
		
		})
	}
	
})
function IsPhoneNum(phone){
	var validateReg = /^1\d{10}$/;
	return validateReg.test($.trim(phone));
}

//截图轮播
 window.onload=function(){
if ($('.snopshot').length > 0) {
        var sst = $(".snopshot");
        if (sst.length == 1) {
            sst.css({
                "position": "relative",
                "text-align": "center"
            }).find("img").css({
                "max-width": "600px",
                "max-height": "462px;"
            }).next(".elementOverlay").hide();
            $(".snap-shot-btn").hide();
        } else if (sst.length == 2) {
            sst.css({
                "position": "relative",
                "float": "left"
            }).find("img").css({
                "max-width": "400px",
                "margin-right": "10px"
            }).next(".elementOverlay").hide();
            $(".snap-shot-btn").hide();
        } else {
            var img = new Image();
 			img.src = $(".snapShotCont li").eq(0).find("img").attr("src");
 			var imgWidth = img.width;
            var imgHeight = img.height;
            if (imgWidth > imgHeight) {
                imgHeight = 343;
                imgWidth = 600;
            } else {
                imgHeight = 600;
                imgWidth = 343;
            }
            var snapShotWrap = new posterTvGrid('snapShotWrap', {
                imgHeight: imgHeight,
                //图片宽高，来调整框架样式
                imgWidth: imgWidth,
                imgP: parseInt(imgWidth / 1.2) //小图与大图比例暂定1比1.2
            });
		}
	}
}