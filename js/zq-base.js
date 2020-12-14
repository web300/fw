/*  */

//首页 点赞
var dz_zt = true;
$('.g_like>div').on('click',function () {
    if(dz_zt==true){
        var t = $(this);
        var like_num =  $(this).find('span').html();
        var type = $(this).attr('class');
        var url = "/zt/addScore.html";
        $.ajax({
            url:url,
            data:{type:type,sid:_sid,ty:_ty},
            type:"POST",
            success:function(data){
                var req = eval('('+data+')');
                if(req.code ==200){
                    t.addClass('on');
                    t.find('span').html(Number(like_num)+1);
                }else{
                    alert('您已经评过分了！')
                }
            }
        });
        dz_zt = false;
    }else{
        alert('您已经支持过！');
    }


/*var num = $(this).parents('.g_like').attr('data-dz');
    if(num == 0){
        $(this).parents('.g_like').attr('data-dz','1')
        $('.g_like>div').removeClass('on');
        $(this).addClass('on')
        var nm = $(this).find('span').html();
        $(this).find('span').html(Number(nm)+1);
    }else{
        alert('您已经支持过！')
    }*/
})
// 小幻灯
if($('#hdsilid').size()>=1){
    var hdlis =	$('#hdsilid .bd ul li').size();
    for(i=0;i<hdlis;i++){
        $('#hdsilid .hd ul').append('<li></li>');
    }
    $('#hdsilid .hd ul li').css('width',420/hdlis)
    jQuery("#hdsilid").slide({
        mainCell: ".bd ul",
        effect:'leftLoop',
        autoPlay: true,
        trigger: 'mouseover',
        easing: 'swing',
        delayTime: '500',
        mouseOverStop: 'true',
        pnLoop: 'true'
    });
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
                "max-width": "600",
                "max-height": "350;"
            }).next(".elementOverlay").hide();
            $(".snap-shot-btn").hide();
        } else if (sst.length == 2) {
            sst.css({
                "position": "relative",
                "float": "left"
            }).find("img").css({
                "max-width": "320",
                "margin-right": "10px"
            }).next(".elementOverlay").hide();
            $(".snap-shot-btn").hide();
        } else {
            var img = new Image();
            img.src = $(".snapShotCont li").eq(0).find("img").attr("src");
            var imgWidth = img.width;
            var imgHeight = img.height;
            if (imgWidth > imgHeight) {
                imgHeight = 350;
                imgWidth = 600;
                sst.css('height',290)
                $('.snap-shot-btn i').css('top','40%')
            } else {
                imgHeight = 564;
                imgWidth = 320;
                sst.css('height',470)
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
$('.Ritem_3 .downl').mouseenter(function () {
    $this = $(this).find('span')
    if($this.html() != '进入'){
        var txt = $(this).html();
        $this.html('下载');
        $(this).mouseleave(function () {
            $(this).find('span').html(txt)
        })
    }
})

function IsPhoneNum(phone){
    var validateReg = /^1\d{10}$/;
    return validateReg.test($.trim(phone));
}

function  tab_mouser(e,f) {
    e.mouseenter(function () {
        $(this).addClass('on').siblings().removeClass('on');
        f.hide().eq($(this).index()).show();
    })
}
tab_mouser($('.Ritem_4 .r_tab p'),$('.Ritem_4 .item ul'));//排行切换


//二维码切换
tab_mouser($('.downl_wrap .btn .lis'),$('.downl_wrap .ewm .img img'));
