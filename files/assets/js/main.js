
//---------------------------
$(document).ready(function() {
  if($('.slider-pro').length!=0){
  $('#sliderProo').sliderPro({
    width: '100%',
    height: 500,
	//autoHeight:true,
    arrows: true,
    rightToLeft:true,
    buttons: true,
    fade: true,
	//touchSwipe:false,
    autoplay: false
	//,autoHeight:true
	//,fadeArrows: false
	//,autoplayOnHover: "none"
	//,fadeOutPreviousSlide:false
	,
    breakpoints:{
     768:{height:400}
	  ,650:{height:300}
	  ,412:{height:350}
    }
  });
  }
  var num = 130; //number of pixels before modifying styles

  $(window).bind('scroll', function() {

    if ($(window).scrollTop() > num) {
      $('.header-nav').addClass('fixed');

    } else {
      $('.header-nav').removeClass('fixed');

    }
  });
  $('.nav-btn-toggler').click(function() {
    $('.nav').toggleClass('open');

  });
  // the megav menu closing function
  $('.mega-menu-toggler').click(function() {
	  if($('#megaMenu').hasClass('open')){
	  	$('#megaMenu').removeClass('open');
	  }else{
	   $('#megaMenu').addClass('open');
	  }
  });
  $('.close-megamenu').click(function() {
    $('#megaMenu').removeClass('open');
  });
  $('#megaMenu').mouseleave(function() {
    $('#megaMenu').removeClass('open');
  });
  $('.mega-menu-toggler').mouseleave(function() {
    $('#megaMenu').removeClass('open');
  });

  // init wow librarry for scroll animation
  new WOW().init();
  // sidebar lsit toggling
  $('#sidebarList .list-item a.dropdown-toggler').click(function(event) {
    event.preventDefault();
	if ($(this).parent('li').hasClass('active')) {
      $('.sidebar-list .list-item').removeClass('active');
    } else {
      $('.sidebar-list .list-item').removeClass('active');
      $(this).parent('li').addClass('active');
    }
  });
  
  // login form
  $('.login-btn').click(function() {
    $('.login-form').addClass('active');
    $('.overlay').addClass('overlaied');
  });
  $('.overlay').click(function() {
    $('.login-form').removeClass('active');
    $(this).removeClass('overlaied');
  });
  $('.login-form .login-cancel').click(function() {
    $('.login-form').removeClass('active');
    $('.overlay').removeClass('overlaied');
  });
  $('.signUp-toggler').click(function() {
    $('.login-card').addClass('signingUp');
  });
  $('.signin-toggler').click(function() {
    $('.login-card').removeClass('signingUp');
  })
  // owl carousel initializing
  $('#services-slider,#teamwork-slider').owlCarousel({
    loop: true,
    rtl: true,
    navElement: 'div',
    navContanier: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    navClass: ['owl-prev', 'owl-next'],
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1.3
      },
      480: {
        items: 1.3
      },
      768: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  // owl carousel initializing
  $('#opinions-slider').owlCarousel({
    loop: true,
    rtl: true,
    navElement: 'div',
    navContanier: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    navClass: ['owl-prev', 'owl-next'],
    margin: 10,
    nav: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });


  
  
  if($('.service-steps .media .number1').length > 0){
    $('.service-steps .media .number1').longShadow({
      colorShadow: 'rgba(244, 71, 53, .5)',
      sizeShadow: 50
    });
    
    $('.service-steps .media .number2').longShadow({
      colorShadow: 'rgba(239, 65, 65, .5)',
      sizeShadow: 50

    });
    $('.service-steps .media .number3').longShadow({
      colorShadow: 'rgba(233, 53, 83, .5)',
      sizeShadow: 50
    });
  }
  
  
  

  $(".urgentOrder input[type='radio']").click(function() {
  	$(".urgentOrder label").removeClass('active');
	$(this).parent('label').addClass('active');
	if($(this).attr('id')=='yes'){
		$('.urgentDet').css('display','block');	
	}else{
		$('.urgentDet').css('display','none');	
	}
	//.is(':checked')){ alert("it's checked"); }else{alert('no');}
	});

});
