$(document).ready(function() {

  // bars
  $("#bars").click(function() {
      $(this).toggleClass("on");
  });
  $("#wrap .main .mainTxt").addClass("on", 800);
  
  
  //contBt
  $(".bt_wrap .contBt").click(function(){
    $("#wrap .bt_wrap .contBt").hide();
    TweenMax.to($("#wrap .main .line span"), 1, {height:"100%", ease:Cubic.easeInOut, onComplete:function(){
      $("#wrap .main .line").hide();
      TweenMax.to($("#wrap .main .line span"), 0, {height:0, ease:Power0.easeNone});

      TweenMax.to($("#wrap .main"), 1.5, {height:$(window).height(), delay:0.2, ease:Power3.easeOut});
      TweenMax.to($("#wrap .main .txtArea .slogan"), 2, {top:-190, scale:1.1, ease:Power3.easeOut});
      TweenMax.to($("#wrap .main .txtArea .tit"), 2, {top:-190, ease:Power3.easeOut});
      $(".mainCon").fadeIn(300);

      TweenMax.to($("#wrap .main .mainBox"), 2, {height:"86%", delay:0.2, ease:Power3.easeOut});
      TweenMax.to($(".mainCon").find(".siteInfo .infoImg"), 1.8, {marginTop: -($(".mainCon").find(".siteInfo .infoImg").height()/2 + 100), opacity:1, delay:0.9, ease:Power3.easeOut});
    
    }});
	});
});
