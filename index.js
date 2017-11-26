$(window).scroll(function() {
    if ($(this).scrollTop()>=0 ) {//not in the end of page
      $(".FadeInOut").each(function(){ ElementFadeIn(this); ElementFadeOut(this); });
      $(".Fadein").each(function(){ ElementFadeIn(this);});
      $(".FadeOut").each(function(){ElementFadeOut(this); });
      $(".NavBar").each(function(){MinimaliseNavbar(this,50,150);});
      $(".Nav_item").each(function(){MinimaliseNavbar(this,50,150);});
    }
});
$( document ).ready(function() {
  $(".FadeInOut").each(function(){ ElementFadeIn(this); ElementFadeOut(this); });
  $(".Fadein").each(function(){ ElementFadeIn(this);});
  $(".FadeOut").each(function(){ElementFadeOut(this); });
  $(".NavBar").each(function(){MinimaliseNavbar(this,50,150);});
  $(".Nav_item").each(function(){MinimaliseNavbar(this,50,150);});

  $(".Document").fadeTo( "slow" , 1, function() {});// fade on show
});

function ElementFadeIn(elem){//from bottom to top
  var opac=(($(window).scrollTop() + $(window).height()) - $(elem).offset().top) / $(elem).height();
  var middle =($(window).scrollTop() + $(window).height()/2)-$(elem).offset().top;
  if(opac>1){opac=1;}
  if(opac<0){opac=0;}
  if(middle<0){$(elem).css("opacity",opac);}
  return;
}

function ElementFadeOut(elem){//from top to bottom
  var opac=1-($(window).scrollTop() - $(elem).offset().top) / $(elem).height();
  var middle =($(window).scrollTop() + $(window).height()/2)-$(elem).offset().top;
  if(opac>1){opac=1;}
  if(opac<0){opac=0;}
  if(middle>0){$(elem).css("opacity",opac);}
  return;
}

function MinimaliseNavbar(elem,min,max){

  $(elem).css("height",NavSize(min,max))
}

function NavSize(min,max){
  var siz=1-$(window).scrollTop() / (max*3);
  if(siz>1){siz=1;}
  if(siz<0){siz=0;}
  siz=(siz * (max - min)) + min;7
  return siz;
}

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);
    if(target=="#top"){
      $('html, body').stop().animate({'scrollTop': 0}, 900, 'swing', function () {});
    }else{
      $('html, body').stop().animate({'scrollTop': $target.offset().top - 80}, 900, 'swing', function () {});
    }
  });
});