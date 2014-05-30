	$(document).ready(function(){
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////						   

		$(".bgchanger li a").click(function() { 
			$("#css-bg").attr("href",'background/'+$(this).attr('rel'));
			return false;
		});
		
		$(".stylechanger li a").click(function() { 
			$("#css-skin").attr("href",'skin/'+$(this).attr('rel'));
			return false;
		});
		
		
	$(".openpanel").click(function(){$(".demo-panel").toggle("slow");$(this).toggleClass("active");return false});	
				});