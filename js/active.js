 $('#counter-block').ready(function () {
     $('.client').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         items: 1,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
     });

     $('.our_cuauses_single').owlCarousel({
         loop: true,
         margin: 50,
         nav: true,
         items: 3,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
         responsive: {
             992: {
                 items: 3,
                 nav: true,
                 loop: true
             },
             500: {
                 items: 2,
                 nav: true,
                 loop: true
             },
             0: {
                 items: 1,
                 nav: true,
                 loop: true
             }
         },
     });

     $('.donors_featured').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         items: 1,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
     });

     $('.volunteer_single').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         items: 3,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
         responsive: {
             1400: {
                 items: 3,
                 nav: true,
                 loop: true
             },
             768: {
                 items: 2,
                 nav: true,
                 loop: true
             },
             500: {
                 items: 2,
                 nav: true,
                 loop: true
             },
             0: {
                 items: 1,
                 nav: true,
                 loop: true
             }
         },
     });

     $('.carosal_bottom_single').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         items: 1,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
     });

     $('.footer_carosal_icon').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         items: 5,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
         responsive: {
             1400: {
                 items: 5,
                 nav: true,
                 loop: true
             },
             991: {
                 items: 4,
                 nav: true,
                 loop: true
             },
             768: {
                 items: 4,
                 nav: true,
                 loop: true
             },
             500: {
                 items: 3,
                 nav: true,
                 loop: true
             },
             0: {
                 items: 2,
                 nav: true,
                 loop: true
             }
         },
     });


     $('.fb').animationCounter({
         start: 0,
         end: 6012,
         step: 10,
         delay: 20
     });
     $('.bike').animationCounter({
         start: 0,
         end: 12,
         step: 1,
         delay: 300,
     });
     $('.code').animationCounter({
         start: 0,
         end: 52,
         step: 2,
         delay: 200,
     });
     $('.coffee').animationCounter({
         start: 0,
         end: 6,
         step: 1,
         delay: 200,
     });
 });