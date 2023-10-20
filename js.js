document.addEventListener('DOMContentLoaded', function () {
    jQuery(document).ready(function () {
    var checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
        
        if (checkbox.checked) {
            // do this
            jQuery(".EN").removeClass("hide");
            jQuery(".PT").addClass("hide");
          
            console.log('Checked');
        } else {
            // do that
            jQuery(".EN").addClass("hide");
            jQuery(".PT").removeClass("hide");
            console.log('Not checked');
        }
        });
    });
});

var w = window.innerWidth;
var h = window.innerHeight;

jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        var scroll = jQuery(window).scrollTop();
        const curl = window.location.href;
        var w = window.innerWidth;

        if (scroll >= 50) {
            jQuery(".logo").addClass("logo_fix");
            if (w > 920) {
                jQuery(".hea").addClass("hea_fix");
            }
        }
        else {
            jQuery(".logo").removeClass("logo_fix");
            if (w > 920) {
                jQuery(".hea").removeClass("hea_fix");
            }
        }

    });
});
//gsap.from('.box img', { duration: 1, opacity: 0, x: '-25%', stagger: .4 });
$(document).ready(function () {
    //alert("The current page path is " + window.location.pathname);

    var path = window.location.pathname;

    if (path == '/discografia.html') {
        jQuery('.disco').addClass('activeCor');
        jQuery('.bio').removeClass('activeCor');
        jQuery('.proj').removeClass('activeCor');
        jQuery('.event').removeClass('activeCor');
        jQuery('.cont').removeClass('activeCor');
    } else if (path == '/biografia.html') {
        jQuery('.bio').addClass('activeCor');
        jQuery('.disco').removeClass('activeCor');
        jQuery('.proj').removeClass('activeCor');
        jQuery('.event').removeClass('activeCor');
        jQuery('.cont').removeClass('activeCor');
}else if (path == '/eventos.html') {
        jQuery('.event').addClass('activeCor');
        jQuery('.bio').removeClass('activeCor');
        jQuery('.proj').removeClass('activeCor');
        jQuery('.disco').removeClass('activeCor');
        jQuery('.cont').removeClass('activeCor');
 }   else if (path == '/projetos.html') {
        jQuery('.proj').addClass('activeCor');
        jQuery('.bio').removeClass('activeCor');
        jQuery('.disco').removeClass('activeCor');
        jQuery('.event').removeClass('activeCor');
        jQuery('.cont').removeClass('activeCor');
} else if (path == '/contactos.html') {
        jQuery('.cont').addClass('activeCor');
        jQuery('.bio').removeClass('activeCor');
        jQuery('.proj').removeClass('activeCor');
        jQuery('.event').removeClass('activeCor');
        jQuery('.disco').removeClass('activeCor');
}
});