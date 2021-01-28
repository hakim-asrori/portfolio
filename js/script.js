// slide menu
const menuToggle = document.querySelector('._menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
	nav.classList.toggle('_slide');
});

var navbarCollapse = function () {
	if ($("#_main-nav").offset().top > 100) {
		$("#_main-nav").addClass("_nav-scroll");
	} else {
		$("#_main-nav").removeClass("_nav-scroll");
	}
};
navbarCollapse();
$(window).scroll(navbarCollapse);


// event untuk link di klik
$('._scroll').on('click', function (e) {

	// ambil isi href
	var tujuan = $(this).attr('href');

	// ambil elemen bersangkutan
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1300, 'easeInOutExpo');

	e.preventDefault();

});

// parallax
$(window).on('load', function(){
	$('._bottom-about').addClass('_bottom-about-go');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform': 'translate(0px, '+ wScroll / 4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, '+ wScroll / 2 +'%)'
	});

	$('.jumbotron a').css({
		'transform': 'translate(0px, '+ wScroll / 1.2 +'%)'
	});


	// portfolio
	if( wScroll > $('._myTeam').offset().top - 400 ) {
		
		$('._myTeam ._thumbnail').each(function(i) {
			setTimeout(function() {
				$('._myTeam ._thumbnail').eq(i).addClass('_muncul');
			}, 500 * (i+1))

		});

	}

});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		document.getElementById("_back-to-top").style.display = "block";
	} else {
		document.getElementById("_back-to-top").style.display = "none";
	}
}
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;	
}