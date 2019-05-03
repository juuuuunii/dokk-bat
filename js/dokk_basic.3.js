


$(document).ready(function() {
	//높이값 갱신
	var ht = $(window).height();	
	$("section").height(ht);
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});

	//fullpage
	var main, vision, business, sns, foot;
	$('#main .mainWrap').fullpage({
		easing:'easeOutSine',
		navigation: false,
		scrollingSpeed: '1300',
		recordHistory: false,
		loopHorizontal: false,
		touchSensitivity: 15,
		fixedElements: '',
		normalScrollElements: '',
		afterRender: function(index){
			var idx = $('.section.active').index();
			
			$('.mainNavi li').removeClass('on');
			$('.mainNavi li').eq(idx).addClass('on');
			
			mainInit();
			
		},
		onLeave: function(index, nextIndex, direction){
			// mainNavi on
			if (index !== 6) {
				$('.mainNavi li').removeClass('on');
				
				$('.mainNavi li').eq(nextIndex-1).addClass('on');
				
			}

			if(nextIndex == foot) {
				$(".scroll").stop().fadeOut(500);
			} else{
				$(".scroll").stop().fadeIn(500);
			}

		}
	});
	
	function mainInit(){
		main = $('#sec1').index() + 1;
		vision = $('#sec2').index() + 1;
		business = $('#sec3').index() + 1;
		sns = $('#sec4').index() + 1;
		foot = $('#sec5').index() + 1;
	}

	//gnb
	$(document).on('click', '.mainNavi a', function () {
		var i = $('.mainNavi a').index(this);
		$('.mainNavi li').removeClass('on');
		$('.mainNavi li').eq(i).addClass('on');

		$.fn.fullpage.moveTo(i+1);
		return false;
	});

	$(document).on('click', '.scroll', function () {
		var i = $('.section.active').index();
		//console.log(i)
		$.fn.fullpage.moveTo(i+1);
	})


	//main
	$(function() {
		new Typed('#typed', {
			strings: ["NOT"],
			typeSpeed: 100,
			backDelay: 1500,
			loop: false,
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


