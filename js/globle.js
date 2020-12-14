/*  */
/**
 * Created by zhangyun on 2017/12/15
 */

function getUrlPath(url){
    if(url=='' ||url == null)return true;
    var arrUrl = url.split("//");
    var end = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(0,end);
    return relUrl.toLowerCase();
}


//领取礼包
/*
function getkabygmz88(kaid,sign){
    $('#rycxzl').remove();
    $.ajax({
        url: '/getka.html',
        type: 'GET',
        data: {id:kaid,sign:sign},
        success: function(result){
            if(result=='chongfu'){
                alert("你今天已经领过啦，明天在来领吧！");
                hidewindow();
                return ;
            }else if(result=='wrong'){
                alert("没有有效卡号或本卡号已领完！");
                hidewindow();
                return ;
            }
            jQuery('body').append(result);
            show_c('rycxzl');
            $('#bg_tc').show();
            $('#popIframe').show();
        }
    });
}
//淘号
function taokabygmz88(kaid,sign){
    $.ajax({
        url: '/gettaoka.html',
        type: 'GET',
        data: {id:kaid,sign:sign},
        success: function(result){
            if(result=='chongfu'){
                alert("你今天已经领过啦，明天在来领吧！");
                hidewindow();
                return ;
            }else if(result=='wrong'){
                alert("没有有效卡号或本卡号已领完！");
                hidewindow();
                return ;
            }
            jQuery('body').append(result);
            show_c('rycxzl');
            $('#bg_tc').show();
            $('#popIframe').show();
        }
    });
}
function taokabygmz882(kaid,sign){
    $.ajax({
        url: '/gettaoka2.html',
        type: 'GET',
        data: {id:kaid,sign:sign},
        success: function(result){
            if(result=='chongfu'){
                alert("你今天已经领过啦，明天在来领吧！");
                hidewindow();
                return ;
            }else if(result=='wrong'){
                alert("没有有效卡号或本卡号已领完！");
                hidewindow();
                return ;
            }
            $("#biao1").val(result);
        }
    });
}*/
function CloseLibaoDiv(){
    $('#rycxzl').hide();
    $('#bg_tc').hide();
    $('#popIframe').hide();

}
function show_center()
{
    if(jQuery("#dd_light").length==0){
        var html='<div id=dd_light style="display:none;z-index:99;filter: alpha(opacity=30);left: 0px;position: absolute;top: 0px;background-color: #000;moz-opacity: 0.3;opacity: .30;"></div>';
        jQuery('body').append(html);
    }
    jQuery('#dd_light').css('width',document.body.scrollWidth+'px');
    jQuery('#dd_light').css('height',document.body.scrollHeight+'px');
    jQuery('#dd_light').show();
}
function show_c(obj){
    // jQuery('#'+obj).css("left",((jQuery(document).width())/2-(parseInt(jQuery('#'+obj).width())/2))+"px");
    // jQuery('#'+obj).css('top',jQuery(document).scrollTop()+(window.screen.availHeight/2-220));
    jQuery('#'+obj).show();
}
function hidewindow(){
    jQuery('#lbtc_all').remove();
    jQuery('#dd_light').hide();
}

function copyUrl2()
{
var Url2=document.getElementById("biao1");
Url2.select(); // 选择对象
document.execCommand("Copy"); // 执行浏览器复制命令
alert("复制成功");
}

