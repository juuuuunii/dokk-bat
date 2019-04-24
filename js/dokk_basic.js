

$(document).ready(function() {

	
	
	//높이값 갱신
	var ht = $(window).height();	
	$("section").height(ht);
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});

	//fullpage
	var i_main, i_mall, i_cafe, i_law, i_foot;
	$('#main .mainWrap').fullpage({
		easing:'easeOutSine',
		scrollingSpeed: '1300',
		lockAnchors: true,
		recordHistory: false,
		loopHorizontal: false,
		touchSensitivity: 15,
		fixedElements: '',
		normalScrollElements: '',
		afterRender: function(){
			var idx = $('.section.active').index();
			$('.mainNavi li').removeClass('on');
			$('.mainNavi li').eq(idx).addClass('on');
			mainInit();
		},
		onLeave: function(index, nextIndex, direction){
			if (index !== 7) {
				$('.mainNavi li').removeClass('on');
				$('.mainNavi li').eq(nextIndex-1).addClass('on');
			}
			
			if(index == 7) {
				$('.mainNavi').stop().fadeOut();
			}

			if(nextIndex !== i_main) {
				$('.mainNavi').stop().fadeIn(2000);
			} else {
				$('.mainNavi').stop().fadeOut();
			}
			
			if(nextIndex == i_foot) {
				$('.section:not(:last-child)').css({"opacity":"0.5"})
			} else {
				$('.section').css({"opacity":"1"})
			}
			
		}
	});
	
	function mainInit(){
		i_main = $('#sec1').index() + 1;
		i_dokk = $('#sec2').index() + 1;
		i_mall = $('#sec3').index() + 1;
		i_cafe = $('#sec4').index() + 1;
		i_law = $('#sec5').index() + 1;
		i_foot = $('#sec6').index() + 1;
	}
	//gnb
	$(document).on('click', '.mainNavi a', function () {
		var i = $('.mainNavi a').index(this);
		$('.mainNavi li').removeClass('on');
		$('.mainNavi li').eq(i).addClass('on');

		$.fn.fullpage.moveTo(i+1);
		return false;
	});


	//page3
	$(function() {
		$(".busi-list li").on("mouseenter",function(e){
			$(this).addClass("active");
			$(".page3 .sec-con").addClass("active");
		});
		$(".busi-list li").on("mouseleave",function(e){
			$(this).removeClass("active");
			$(".page3 .sec-con").removeClass("active");
		});
	})

	//page5
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
		spaceBetween: 30,
		keyboard: {
		  enabled: true,
		},
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
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



