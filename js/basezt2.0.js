/*  *///导航更多$('.zthead .mornav').mouseenter(function () {    $(this).addClass('on')    $('.mornav_wrap').slideDown()})$('.zthead').mouseleave(function () {    $('.mornav_wrap').slideUp()    $('.zthead .mornav').removeClass('on')})// imgif($('.lazy').size()>=0){    $("img.lazy").lazyload({        //	 placeholder : "images/loading.gif",        effect : "fadeIn",        threshold : 700    });}$('#data_box ul li').mousemove(function (e) {    var name = $(this).attr('data-zb');    $('.poppup-item').show();    $(".poppup-item .lis[data-name="+ name +"]").show()    var downx=e.pageX;    var downy=e.pageY;    $('.poppup-item').css({'left':downx,'top':downy})})$('#data_box ul li').mouseleave(function () {    $('.poppup-item,.poppup-item .lis').hide();})//左右 滚动function HomeScroll(a,b){function g(){var g=$(window).scrollLeft(),h=$(window).scrollTop(),i=$(document).height(),j=$(window).height(),k=c.height(),l=d.height(),m=k>l?f:e,n=k>l?d:c,o=k>l?c.offset().left+c.outerWidth(!0)-g:d.offset().left-c.outerWidth(!0)-g,p=k>l?l:k,q=k>l?k:l,r=parseInt(q-j)-parseInt(p-j);$(a+","+b).removeAttr("style"),j>i||p>q||m>h||p-j+m>=h?n.removeAttr("style"):j>p&&h-m>=r||p>j&&h-m>=q-j?n.attr("style","margin-top:"+r+"px;"):n.attr("style","_margin-top:"+(h-m)+"px;position:fixed;left:"+o+"px;"+(j>p?"top":"bottom")+":0;")}if($(a).length>0&&$(b).length>0){var c=$(a),d=$(b),e=c.offset().top,f=d.offset().top;$(window).resize(g).scroll(g).trigger("resize")}}$(function(){    HomeScroll(".cont_L",".cont_R");})//微信展示$('.search_wrap a.wx').mouseenter(function () {    $('.search_wrap .ewmwrap').stop().slideDown();}).mouseleave(function () {    $('.search_wrap .ewmwrap').stop().slideUp();})$('.search_wrap a.qq').mouseenter(function () {    $('.search_wrap a.wx').css('width','35px')}).mouseleave(function () {    $('.search_wrap a.wx').css('width','120px')})// TABfunction  tab_mouser(e,f) {    e.mouseenter(function () {        $(this).addClass('on').siblings().removeClass('on');        if(f){f.hide().eq($(this).index()).show();}    })}// TAB2function  tab_mouser2(a,b) {    a.mouseenter(function () {        $(this).addClass('on').siblings().removeClass('on');        $(this).parent('div').next('div').find(b).eq($(this).index()).show().siblings().hide();    })}tab_mouser($('.head_tj .tj_item .item'));//周免 爆料 技巧切换tab_mouser($('.downl_box .btn_r a'),$('.downl_box .img img'));//弹窗二维码切换tab_mouser($('.Gx_item .Gx_tab p'),$('.Gx_item .item_list .list'));//更新切换tab_mouser($('.new_item .new_tab p'),$('.new_item .list ul'));//新闻tab_mouser($('.bl_item .bl_tab p'),$('.bl_item .item'));//右侧爆料tab_mouser($('.Min2_cont .SJ_tab span'),$('.JS_item .item'));//赛季tab_mouser($('.Min_3 .tab_lis a'),$('.Min3_cont .cont_list'));//Min3 tabtab_mouser($('.Ritem_4 .r_tab p'),$('.Ritem_4 .lis'));//右侧排行tab_mouser($('.tggl .tab_lis a'),$('.tggl_cont .lis'));//通关攻略tab_mouser($('.chuzhuang .lis a'),$('.chuzhuang .item .lis'));//英雄出装tab_mouser($('.guanxi .lis a'),$('.guanxi .item .lis'));//英雄关系tab_mouser($('.jn_item ul li'),$('.jn_item .item .lis'));//更新tab_mouser($('.Ritem_e .r_tab p'),$('.Ritem_e .warp ul'));//最热攻略tab_mouser($('.Ritem_e .warp ul li'));//最热攻略tab_mouser($('.Ritem_b .tite .data_a'),$('.Ritem_b .item .info'));//最热攻略// tab_mouser2($('.JS_item .item .day_tab span'),$('.list'));// 赛季日期切换tab_mouser2($('.Min3_L .yx_tab p'),$('.item'));// 压制英雄切换tab_mouser2($('.Min6_tab span'),$('.item'));// 攻略切换tab_mouser2($('.tggl_tab span'),$('.item'));// 通关攻略tab_mouser2($('.gx_hreotab .img'),$('p'));// 游戏礼包//index$('.tab_wrap .tab_lis a').mouseenter(function () {    $(this).addClass('on').siblings().removeClass('on');    $(this).parents('.tab_wrap').find('.tab_item').find('.lis').eq($(this).index()).show().siblings().hide();})// 技巧function  tab_mouser3(a,b) {    a.mouseenter(function () {        $('.blitem .item').eq(b).show().siblings().hide();        $('.blitem .item').eq(b).find('.lis').eq($(this).index()).show().siblings().hide();        $('.blitem').slideDown(function () {            $('.blitem').stop()        });    })}tab_mouser3($('.head_tj .jiqiao a'),0)tab_mouser3($('.head_tj .zhoumian a'),1)$('.bl_list').mouseenter(function () {    $('.blitem').slideUp();    $('.blitem .item').hide()})$('.head_tj .tj_item .item').eq(0).mouseenter(function () {    $('.blitem').slideUp();    $('.blitem .item').hide()})$('.blitem').mouseleave(function () {    $('.blitem').slideUp();    $('.blitem .item').hide()})//弹窗下载$('#downl_btn').click(function () {    $('.Gm_downl').fadeIn();})$('.Gm_downl .mengban').click(function () {    $('.Gm_downl').fadeOut();})// 弹窗居中function  position_() {    $('.downl_box').css({'left':$(window).width()/2 - 240,'top':$(window).height()/2 - 200});    var r_ = $(window).width()/2 - 700;    if(r_<0){r_=0}    $('.ztfix_nav').css({'right':r_})}position_();$(window).resize(function () {    position_()})// 幻灯if($('#hdsilid').size()>=1){    var hdlis =	$('#hdsilid .bd ul li').size();    for(i=0;i<hdlis;i++){        $('#hdsilid .hd ul').append('<li></li>');    }    $('#hdsilid .hd ul li').css('width',390/hdlis)    jQuery("#hdsilid").slide({        mainCell: ".bd ul",        effect:'leftLoop',        autoPlay: true,        trigger: 'mouseover',        easing: 'swing',        delayTime: '500',        mouseOverStop: 'true',        pnLoop: 'true'    });}// 标签$('.hover_bq a').mouseenter(function () {    $(this).addClass('on').siblings().removeClass('on');    if($(this).hasClass('li_1')){        $('.li_1').css({'left':'0','top':'0'})        $('.li_2').css({'left':'131px','top':'0'})        $('.li_3').css({'left':'262px','top':'0'})        $('.li_4').css({'left':'131px','top':'39px'})        $('.li_5').css({'left':'262px','top':'39px'})    }else if($(this).hasClass('li_2')){        $('.li_1').css({'left':'0','top':'0'})        $('.li_2').css({'left':'131px','top':'0'})        $('.li_3').css({'left':'262px','top':'0'})        $('.li_4').css({'left':'0','top':'39px'})        $('.li_5').css({'left':'262px','top':'39px'})    }else if($(this).hasClass('li_3')){        $('.li_1').css({'left':'0','top':'0'})        $('.li_2').css({'left':'131px','top':'0'})        $('.li_3').css({'left':'262px','top':'0'})        $('.li_4').css({'left':'0','top':'39px'})        $('.li_5').css({'left':'131px','top':'39px'})    }else if($(this).hasClass('li_4')){        $('.li_1').css({'left':'0','top':'39px'})        $('.li_2').css({'left':'0','top':'0'})        $('.li_3').css({'left':'262px','top':'0'})        $('.li_4').css({'left':'131px','top':'0'})        $('.li_5').css({'left':'262px','top':'39px'})    }else if($(this).hasClass('li_5')){        $('.li_1').css({'left':'0','top':'0'})        $('.li_2').css({'left':'0','top':'39px'})        $('.li_3').css({'left':'131px','top':'0'})        $('.li_4').css({'left':'131px','top':'39px'})        $('.li_5').css({'left':'262px','top':'0'})    }})// 赛程轮播if($('.day_item .list .slidwrap').size()>=1){    var myDate = new Date();    var Month = myDate.getMonth()+1;    var day = myDate.getDate();    var show_item = 0;    var day_all =[]    // console.log("月:"+ Month + "_" +"日:" +day)    $('#sc_item li').each(function () {        var month_ = $(this).attr('data-month');        if(month_==Month){            $(this).addClass('onmonth');            day_all.push($(this).attr('data-day'))        }    })    day_all.sort(function(a,b){        return Math.abs(a-day)-Math.abs(b-day);    })    // console.log(day_all[0])    for(i=0;i<$("#sc_item li").size();i++){        if($("#sc_item li").eq(i).attr('data-day')==day_all[0] && $("#sc_item li").eq(i).hasClass("onmonth")){            show_item=i-1;        }    }    if($("#sc_item .onmonth").size()<=1){        show_item = $('#sc_item li').size()-3;    }    // console.log(show_item)    jQuery(".day_item .list .slidwrap").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",vis:3,"defaultIndex":show_item ,"pnLoop":false});}// 其他游戏if($('.Min7_cont .slidwrap_tl ').size()>=1){    jQuery(".slidwrap_tl").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",vis:8});}//标签$('.bq-item .item').each(function () {    if($(this).height()>61){        $(this).css('max-height','60px')        $(this).find('.lis').next('.mor_list').show();    }})$('.bq-item .item .mor_list').click(function () {    if($(this).hasClass('on')){        $(this).removeClass('on')        $(this).parents('.item' ).css('max-height','60px')        $(this).html('展开')    }else{        $(this).addClass('on');        $(this).html('收起')        $(this).parents('.item').css('max-height','initial')    }})//英雄筛选$('#hero_tab li').mouseenter(function () {    $(this).addClass('on').siblings().removeClass('on');    var data_yx = $(this).attr('data-yx');    if(data_yx=='所有'){        $('#hero_lis .lis').show();    }else{        $('#hero_lis .lis').hide();        $('#hero_lis .lis[data-yxlis='+data_yx+']').show();    }})function getname() {    var data_name = $('#key').val();    $('#hero_lis .lis').hide()    $('#hero_lis .lis[data-name='+data_name+']').show();}$("#key").bind('input porpertychange',function(){    getname();});$('.search_box .btn').click(function () {    getname();})$('#yx_btn').click(function () {    $('.yx_search').slideDown();})$('.yx_wrap .lis').click(function () {    $('.yx_search').slideUp();})$(document).bind("click",function(e){    var target = $(e.target);    if(target.closest(".search_yx").length == 0){        $('.yx_search').slideUp()    }})//英雄信息$('.pf-tab .lis').mouseenter(function () {    var url = $(this).attr('data-url');    var name_ = $(this).find('span').html();    $('.hreo_bg').css('background','url("'+url+'")')    $('.name_box .name i').html(name_)    $('.btn_lis .btn_2').attr('data-txtb',name_);})//英雄故事 台词弹窗$('.btn_lis span').click(function () {    $('.txtwrap').css('height',$(document).height())    var name = $(this).html();    $('.hero-story .story_top').html(name);    $('.txt_list div').hide();    if($(this).hasClass('btn_1')){        $('.txt_list div.story_txt').show();    }else{        $('.txt_list .txt').show();    }    $('.txtwrap').fadeIn()    var w_h = $(window).height();    var box_ = $('.hero-story').height();    $("body,html").animate({scrollTop:0},300);    if(box_<w_h){        $('.txtwrap .hero-story').css('margin-top',(w_h - box_)/2)    }else{        $('.txtwrap .hero-story').css('margin-top','100px')    }})$('.hero-story .clos_btn').click(function () {    $('.txtwrap').hide();})$('#comments_btn').click(function () {    var top = $('.comments_wrap').offset().top;    $("body,html").animate({scrollTop:top},500);})//视频切换$('.video_rit .net ul li').click(function () {    var url = $(this).attr('data-url');    if(url){        $('.video').html('<embed src="'+url+'" allowFullScreen="true" quality="high" width="800" height="555" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')    }})//悬浮导航if($('.index')){    $(window).scroll(function() {        var scroll_len = $(window).scrollTop();        if(scroll_len<1000){            $('.ztfix_nav').fadeOut();        }else {            $('.ztfix_nav').fadeIn();        }        var wrapnm = $('.index .post').size();        for(i=0;i<wrapnm;i++){            var top_ = $('.index .post').eq(i).offset().top;            var top2_ = $('.index .post').eq(wrapnm-2).offset().top;            if(scroll_len>top_ && scroll_len<top2_){                $('.ztfix_nav span').removeClass('on');                $('.ztfix_nav span').eq(i+1).addClass('on')            }else if(scroll_len>top2_){                $('.ztfix_nav span').removeClass('on');                $('.ztfix_nav span').eq(6).addClass('on')            }            if(scroll_len<1250){                $('.ztfix_nav span').removeClass('on');                $('.ztfix_nav span').eq(0).addClass('on')            }        }    });}$('.ztfix_nav span').click(function(){    var nm_ = $(this).index();    var anm_ =  $('.index .post').eq(nm_).offset().top;    $("body,html").animate({scrollTop:anm_ - 300},300);    if(nm_!=6){        $('.ztfix_nav span').removeClass('on');        $(this).addClass('on');    }else{        console.log('111')        $('.ztfix_nav span').removeClass('on');        $('.ztfix_nav span').eq(6).addClass('on')    }})$('.ztfix_nav p').click(function () {    $("body,html").animate({scrollTop:0},300);})$('.Ritem_3 .downl').mouseenter(function () {    $this = $(this).find('span')    if($this.html() != '进入'){        var txt = $(this).html();        $this.html('下载');        $(this).mouseleave(function () {            $(this).find('span').html(txt)        })    }})