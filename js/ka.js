/*  */
/*!
 * 
 */
$(function(){
	
	var lingId96kaifa =0
	lingId96kaifa = $("#bg_tc").attr("value")

//淘号
	taohao ()
	function taohao (){
		$.get("/96kaifa/ka-syhao-96kaifa.php?id="+lingId96kaifa, function(data2){
			$('#syhao').text(data2);
		});	
		$('.th').click(function(){
			$('#bg_tc').css('display','block');
			$('#rycxzl').css('display','block');
			
			$.get("/96kaifa/ka-taohao-96kaifa.php?id="+lingId96kaifa, function(data1){
				$('#biao1').val(data1);
			});

		});
	}
});