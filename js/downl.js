/*  */

$('#openbtn').click(function () {

    if($(this).hasClass('on')){
        $(this).removeClass('on')
        $(this).html('展开内容')
        $('.operation').css('max-height','500px')
    }else {
        $(this).addClass('on')
        $('.operation').css('max-height','inherit')
        $(this).html('收起内容')
    }
})



$('.downl_wrap>.btn').on('click', function () {
    var nav_num = document.getElementById('downl_item').offsetTop
    $("body,html").animate({scrollTop: nav_num}, 300);

})

var list = $(".m-previmg-show ul").find("li").length;
if(list<=1)
{
    $(".m-previmg-fix").find("b").hide();
}
$(".m-previmg-fix").slide({mainCell:".m-previmg-show ul",effect:"left",scroll:1});


//phb
$('.rank .tab-side li').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.rank .rank-list').hide().eq($(this).index()).show();
})

