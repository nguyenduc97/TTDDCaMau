$(function() {
	var click = true;
	$('#tintuc').on('click',function(){
		if(click){
			$('.ddc_popup').show();
		}else{
			$('.ddc_popup').hide();
		}
		click =!click;
	});
	$('.ddc_close').on('click',function(){
		if(!click){
			$('.ddc_popup').hide();
		}
		click =!click;
	});
});