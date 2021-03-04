$(function() {
	$('[rel=popover]').popover();
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
	$('#thuadat').on('click',function(){
		if(click){
			$('.ddc_thuadat').show();
		}else{
			$('.ddc_thuadat').hide();
		}
		click =!click;
	});
	$('#giadat').on('click',function(){
		if(click){
			$('.ddc_giadat').show();
		}else{
			$('.ddc_giadat').hide();
		}
		click =!click;
	});
	$('#quydat').on('click',function(){
		if(click){
			$('.ddc_quydat').show();
		}else{
			$('.ddc_quydat').hide();
		}
		click =!click;
	});
	$('#doluong').on('click',function(){
		if(click){
			$('.ddc_doluong').show();
		}else{
			$('.ddc_doluong').hide();
		}
		click =!click;
	});
});