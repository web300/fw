/*  */
/*!
 * 
 */
$(function(){

	var all_9_6_k_a_i_f_a_val=[];
	var id_9_6_k_a_i_f_a_val='';

	if($.cookie('the_cookie')=='' || $.cookie('the_cookie') == null){}else{
		all_9_6_k_a_i_f_a_val=encode($.cookie('the_cookie'));
	}
	$('.lq').each(function(){
		$(this).click(function(){

			$.get("/96kaifa/ka-ip-96kaifa.php", function(data){
				var ipp=data;
				id_9_6_k_a_i_f_a_val=$('#bg_tc').attr("value")+"="+ipp;
				var all_val_string = all_9_6_k_a_i_f_a_val.join(',');
				if(all_val_string.indexOf(id_9_6_k_a_i_f_a_val)!=-1){
		　　		alert("你今天已经领过啦，明天再来领吧！");
				}else{
					linghao ();
					if(id_9_6_k_a_i_f_a_val=='' || id_9_6_k_a_i_f_a_val==null){}else{
					all_9_6_k_a_i_f_a_val.push(id_9_6_k_a_i_f_a_val);
					$.unique(all_9_6_k_a_i_f_a_val);
					$.cookie('the_cookie', decode(all_9_6_k_a_i_f_a_val), { expires: 1, path: '/'  });//存入
					}
				}
			})
		})	
	})
	
//领取礼包 

	function linghao (){
		var lingId96kaifa =0
		lingId96kaifa = $("#bg_tc").attr("value")
		$('#bg_tc').css('display','block');
		$('#rycxzl').css('display','block');
		
		$.get("/96kaifa/ka-hao-96kaifa.php?id="+lingId96kaifa, function(data1){
			$('#biao1').val(data1);
		});
			
		$.get("/96kaifa/ka-syhao-96kaifa.php?id="+lingId96kaifa, function(data3){
			$('#syhao').text(data3);
		});
	}
	
	function decode(str){
		if(str=='' || str==null){}else{
		var _str = str.join(',');
		return _str;
		}
	}
	function encode(str){
		if(str=='' || str==null){}else{
		var _arr = str.split(',');
		return _arr;
		}
	}
});