
$(document).ready(function(){

	//높이값 갱신
	var ht = $(window).height();	
	$("section").height(ht);
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});

  
	// variables
	var $footer = $('footer');
    
	// fullpage customization
	$('#fullpage').fullpage({
		easing:'easeOutSine',
   		scrollingSpeed: '1000',
		sectionSelector: '.vertical-scrolling',
		slideSelector: '.horizontal-scrolling',
		css3: true,
		controlArrows: false,
		anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
		menu: '#menu',
	
		afterLoad: function(anchorLink, index) {
			if (index == 5) {
				$('#menu').fadeOut();
				$('.scroll').fadeOut();
			}
		},
	
		onLeave: function(index, nextIndex, direction) {
			if(index == 5) {
			$('#menu').fadeIn();
			$('.scroll').fadeIn();
			}
		},
	}); 

	
	//main
	$(function() {
		new Typed('#typed', {
			strings: ["NOT"],
			typeSpeed: 100,
			backDelay: 1500,
			loop: true,
			callback: function(){}
		});
	});
	//footer
	$(document).on('click', '.f_site', function () {
		if($(".site_list").css('display') == 'block') {
			$(".f_site > i").addClass("fa-angle-up");
			$(".f_site > i").removeClass("fa-angle-down");
			$(".site_list").css({"display":"none"});
		} else {
			$(".f_site > i").removeClass("fa-angle-up");
			$(".f_site > i").addClass("fa-angle-down");
			$(".site_list").css({"display":"block"});
		}
	});
  });


