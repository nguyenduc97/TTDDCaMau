$(function() {
	var click = true;
	$('#tintuc').on('click',function(){
		if(click){
			$('.ddc_info').show();
		}else{
			$('.ddc_info').hide();
		}
		click =!click;
	});
	$('.ddc_close').on('click',function(){
		if(!click){
			$('.ddc_popup').hide();
		}
		click =!click;
	});
	$('#baseMap').on('click',function(){
		if(click){
			$('.ddc_baseMap').show();
		}else{
			$('.ddc_baseMap').hide();
		}
		click =!click;
	});
	$('#layerList').on('click',function(){
		if(click){
			$('.ddc_layerList').show();
		}else{
			$('.ddc_layerList').hide();
		}
		click =!click;
	});
});