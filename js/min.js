$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
        margin:20,
        items:3,
        loop:true,
        autoplayHoverPause:true,
        autoplay:true,
        autoplayTimeout:3000,
        responseresponsiveRefreshRate:true,
        responsive:{
            0:{
                items:1,
            },
            575.98:{
                items:1,
            },
            767.98:{
                items:2,
            },
            991.98:{
                items:3
            },
            1199.98:{
                items:4,
            },
            1919.98:{
                items:4,
            }

        }
    });






	const typed = new Typed('#typing', {
		strings: [
				'Nostrum, culpa possimus repellendus,',
				' maiores ut rem officia rerum.',
				'quas aut dignissimos recusandae', 
				'Aperiam quos quia modi recusandae',
				'Odit excepturi harum, sed debitis',
				'Lorem ipsum dolor sit,'
		],
				typeSpeed: 100,
				startDelay: 0,
				backSpeed: 40,
				backDelay:1500,
				loop:true,
				smartBackspace: true,
		});
                window.addEventListener("scroll",function(){
    let header=document.querySelector('#sticker');
    header.classList.toggle("rashid",window.scrollY >350,50 )
    });
                $(document).ready(function(){
                    $('.counting').counterUp({
                        delay: 50,
                        time: 3000,
                    });
                }) ;
                AOS.init({
                    useClassNames: true,
                    offset: 220,
                    duration: 800,
                    once: false,     
                    mirror:false,
                    anchorPlacement: 'top-bottom',
                });
})

