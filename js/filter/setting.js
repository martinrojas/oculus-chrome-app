
(function($){
	'use strict';
	$("a[data-pretty^='prettyPhoto']").prettyPhoto();
	$(".video:first a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false});
	$(".video:gt(0) a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
				
	$(".image-caption").css({'opacity':'0','filter':'alpha(opacity=0)'});
	$('.image-wrapper').hover(function(){
			$(this).find('.image-caption').stop().fadeTo(800, 1);
			$(".zoom", this).stop().animate({top:'38%'},{queue:false,duration:300});
			$(".image-title", this).stop().animate({bottom:'40%'},{queue:false,duration:500});
	}, function() {
			$(this).find('.image-caption').stop().fadeTo(800, 0);
			$(".zoom", this).stop().animate({top:'-38%'},{queue:false,duration:300});
			$(".image-title", this).stop().animate({bottom:'-40%'},{queue:false,duration:500});
	});	
						
if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item');
		} else {
			var $filteredData = $data.find('.portfolio-item[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {
						$("a[data-pretty^='prettyPhoto']").prettyPhoto();
						$(".video:first a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false});
						$(".video:gt(0) a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});		

						$(".image-caption").css({'opacity':'0','filter':'alpha(opacity=0)'});
						$('.image-wrapper').hover(function(){
								$(this).find('.image-caption').stop().fadeTo(800, 1);
								$(".zoom", this).stop().animate({top:'38%'},{queue:false,duration:300});
								$(".image-title", this).stop().animate({bottom:'40%'},{queue:false,duration:500});
						}, function() {
								$(this).find('.image-caption').stop().fadeTo(800, 0);
								$(".zoom", this).stop().animate({top:'-38%'},{queue:false,duration:300});
								$(".image-title", this).stop().animate({bottom:'-40%'},{queue:false,duration:500});
						});	
	
						});		
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

})(jQuery);