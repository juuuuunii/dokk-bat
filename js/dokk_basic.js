

$(document).ready(function() {
	//fullpage
	var i_main, i_mall, i_cafe, i_law, i_foot;
	$('#main .mainWrap').fullpage({
		easing:'easeOutSine',
		scrollingSpeed: '1500',
		lockAnchors: true,
		recordHistory: false,
		loopHorizontal: false,
		touchSensitivity: 15,
		fixedElements: '',
		normalScrollElements: '',
		afterRender: function(){
			var idx = $('.section.active').index();
			$('.mainNavi').removeClass('hide');
			$('.mainNavi li').removeClass('on');
			$('.mainNavi li').eq(idx).addClass('on');
			mainInit();
		},
		onLeave: function(index, nextIndex, delta){
			if (nextIndex != i_foot) {
				$('.mainNavi li').removeClass('on');
				$('.mainNavi li').eq(nextIndex-1).addClass('on');
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
	$(document).on('click', '.mainNavi a', function () {
		var i = $('.mainNavi a').index(this);
		$('.mainNavi li').removeClass('on');
		$('.mainNavi li').eq(i).addClass('on');

		$.fn.fullpage.moveTo(i+1);
		return false;
	});


	$(function() {
		$(".busi-con .busi-list li").on("mouseenter",function(e){
			$(this).addClass("active");
			$(".busi-con").addClass("active");
		});
		$(".busi-con .busi-list li").on("mouseleave",function(e){
			$(this).removeClass("active");
			$(".busi-con").removeClass("active");
		});
	})
	
});



