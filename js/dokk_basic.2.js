


$(document).ready(function() {
	//높이값 갱신
	var ht = $(window).height();	
	$("section").height(ht);
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});

	//fullpage
	var main, mall, cafe, law, news, foot;
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
			$('.mainNavi .blank').css({"display":"block"});
			$('.mainNavi .num').css({"display":"none"});
			$('.mainNavi li').removeClass('on');
			
			//console.log($('.mainNavi .blank').eq(idx));
			$('.mainNavi .blank').eq(idx).css({"display":"none"});
			$('.mainNavi .num').eq(idx).css({"display":"block"});
			$('.mainNavi li').eq(idx).addClass('on');
			
			mainInit();
			
		},
		onLeave: function(index, nextIndex, direction){
			// mainNavi on
			if (index !== 7) {
				$('.mainNavi .blank').css({"display":"block"});;
				$('.mainNavi .num').css({"display":"none"});
				$('.mainNavi li').removeClass('on');
				
				
				//console.log($('.mainNavi .blank').eq(nextIndex));
				$('.mainNavi .blank').eq(nextIndex-2).css({"display":"none"});
				$('.mainNavi .num').eq(nextIndex-1).css({"display":"block"});
				$('.mainNavi li').eq(nextIndex-1).addClass('on');
				
			}
			
			// mainNavi In/Out
			if(nextIndex !== 1) {
				$('.mainNavi').stop().fadeIn(2000);
			} else {
				$('.mainNavi').stop().fadeOut();
			}
			if(nextIndex == news) {
				$('.mainNavi').stop().fadeOut();
			}

			// txtMotion
			if (nextIndex == 2) {
				TweenMax.set($('.imgBox.bott'),{bottom:'-100%'});
				
				TweenMax.to($('.imgBox.bott'),2.2,{bottom:'0',ease: Power3.easeInOut});
				txtMotion();
				console.log("hihi~")
			} 
			if (nextIndex == 3) {
				TweenMax.set($('.imgBox.right'),{right:'-100%'});
				
				TweenMax.to($('.imgBox.right'),2.2,{right:'0',ease: Power3.easeInOut});
				txtMotion();
				console.log("hihi~")
			} 
			if (nextIndex == 4) {
				TweenMax.set($('.imgBox.left'),{left:'-100%'});

				TweenMax.to($('.imgBox.left'),2.2,{left:'0',ease: Power3.easeInOut});
				txtMotion();
				console.log("hihi~")
			} 
				
		}
	});
	
	function mainInit(){
		main = $('#sec1').index() + 1;
		mall = $('#sec2').index() + 1;
		cafe = $('#sec3').index() + 1;
		law = $('#sec4').index() + 1;
		news = $('#sec5').index() + 1;
		foot = $('#sec6').index() + 1;
	}

	//gnb
	$(document).on('click', '.mainNavi a', function () {
		var i = $('.mainNavi a').index(this);
		$('.mainNavi .blank').css({"display":"block"});
		$('.mainNavi .num').css({"display":"none"});
		$('.mainNavi li').removeClass('on');
		
		//console.log($('.mainNavi .blank').eq(i));
		$('.mainNavi .blank').eq(i).css({"display":"none"});
		$('.mainNavi .num').eq(i).css({"display":"block"});
		$('.mainNavi li').eq(i).addClass('on');
		

		$.fn.fullpage.moveTo(i+1);
		return false;
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


function txtMotion() {
	TweenMax.to($('.txtBox .slogan'),{y:100,opacity:0});
	TweenMax.set($('.txtBox .slogan span'),{x:30,fontSize:'42px',opacity:0});
	TweenMax.set($('.txtBox .tit'),{opacity:0});
	TweenMax.set($('.txtBox .btnMore'),{opacity:0});

	TweenMax.to($('.txtBox .slogan'),1,{y:0,opacity:1,delay:1,ease: Power3.easeOut});
	TweenMax.delayedCall(1.5, function(){
		for(var i = 0,len = $('.txtBox .slogan span').length;i<len;i++){
			TweenMax.to($('.txtBox .slogan span').eq(i),0.8,{x:0,opacity:1,fontSize:'40px',delay:0.08*(i+1),ease: Power3.easeOut});
		}
	});
	TweenMax.to($('.txtBox .tit'),1,{opacity:1,delay:2,ease: Power3.easeInOut});
	TweenMax.to($('.txtBox .btnMore'),1,{opacity:1,delay:2.2,ease: Power3.easeInOut});

	return;
}
