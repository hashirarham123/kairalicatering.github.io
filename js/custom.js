
/*----------------- OWL CAROUSEL -----------------*/
$(document).ready(function(){
	  $(".about-carousel").owlCarousel({
	  	items:1,
	  	responsiveClass:true,
	  	autoplay:true,
	  	smartSpeed: 2000,
	  	autoplayTimeout:4000,
	  	loop:true,
	  	dots:true,
	  	nav:false,	  
	  });
	});


$(document).ready(function(){
  $(".service-carousel").owlCarousel({
	  	responsiveClass:true,
	  	autoplay:false,
	  	loop:true,
	  	dots:true,
	  	nav:false,	
	  	responsive:{
        0:{
            items:1,
            nav:false
        },
        576:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
  });
});


$(document).ready(function(){
  $(".food-carousel").owlCarousel({
  		responsiveClass:true,
	  	autoplay:true,
	  	autoplayTimeout:9000,
	  	smartSpeed:3000,
	  	loop:true,
	  	dots:false,
	  	nav:false,	
	  	margin:0,
	  	responsive:{
        0:{
            items:1		/*450 kazhinjaal pinne thazhe 0 vare Enik 1 aayitt kandaal mathi*/
        },
        450:{
            items:2		/*768 kazhinjaal 450 vare Enik 2 ennamayi kaananam*/
        },
       768:{
            items:3		/*1000 kazhinjaal 768 vare Enik 3 ennamayi kaananam*/
        },
        1000:{
            items:4  	/*1000 vare 4 ennamayi kaananam*/
        }
    }
  });
  var owl = $('.food-carousel');
	owl.owlCarousel();
	// Go to the next item
	$('.food-owl-next').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.food-owl-prev').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel');
	})
});

/*----------------- end -----------------*/


/*----------------- SMOOTH STICKEY NAVBAR -----------------*/
	$(document).ready(function () {
	let nav_offset_top = $('.navbar-section').height() + 200;

    function navbarFixed() {
        if ($('.navbar-section').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.navbar-section .main-menu').addClass('navbar-fixed');
                } else {
                    $('.navbar-section .main-menu').removeClass('navbar-fixed');
                }
            })						
        }
    }                                  
    navbarFixed();
	});
/*--------- end ---------*/




/*----------------- SMOOTH SCROLL-ARROW-UP -----------------*/
	mybutton = document.getElementById("myBtn");
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
	mybutton.style.display = "block";
} else {
	mybutton.style.display = "none";
}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
/*--------- end ---------*/




/*----------- PAGE LOADING ANIM ----------*/
 
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

/*--------- end ---------*/





/*----------- NAV SLIDE-BAR ANIM ----------*/

let toggleNavStatus = true;


let toggleNav = function() {
	let getSideBar = document.querySelector(".nav-sidebar");
	let getSideBarUL = document.querySelector(".nav-sidebar ul");
	let getSideBarTitle = document.querySelector(".nav-sidebar span");
	let getSideBarLinks = document.querySelectorAll(".nav-sidebar a");
	let iconBar = document.querySelector('.toggler .fa-bars');

	if (toggleNavStatus === true) {
		getSideBarUL.style.visibility = "visible";
		getSideBar.style.width = "180px";
		getSideBar.style.boxShadow = "1.5px 1.5px 7px 1px rgba(0,0,0,0.4)";
		getSideBarTitle.style.opacity = "0.5";
		iconBar.style.transform = "rotateZ(360deg)";
		iconBar.style.transition = "0.8s ease-in-out all";

		let arrayLength = getSideBarLinks.length;
		for (let i = 0; i<arrayLength; i++) {
			getSideBarLinks[i].style.opacity = "1";
		}
			toggleNavStatus = false; 
	}
	else if (toggleNavStatus === false) {
		getSideBarUL.style.visibility = "hidden";
		getSideBar.style.width = "0px";
		getSideBar.style.boxShadow = "";
		getSideBarTitle.style.opacity = "0";
		iconBar.style.transform = "rotateZ(0deg)";

		let arrayLength = getSideBarLinks.length;
		for (let i = 0; i<arrayLength; i++) {
			getSideBarLinks[i].style.opacity = "0";
		}
		toggleNavStatus = true; 
	}
}

/*--------- end ---------*/


   wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };
