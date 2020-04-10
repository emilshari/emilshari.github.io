

    document.body.onload = function () {
        setTimeout(function() {
            var preloader = document.getElementById('page-preloader');
            if(!preloader.classList.contains('preloader')) {
                preloader.classList.add('done');
            }
        }, 2000); }
        function addCoverLetter() {
            const cover = document.querySelector('.cover_letter');
            const header = document.querySelector('.header');
            const main = document.querySelector('.main');
            const footer = document.querySelector('.footer');
            const span = document.querySelector('.span');
            const link = document.querySelector('.button_right');
            const corner = document.querySelector('.corner_right');
            corner.classList.add('corner_right_active');
            span.classList.add('span_cover_active');
            link.classList.add('links_button_cover_active');
            //corner.classList.toggle('corner_right_acitve');
            cover.classList.add('cover_letter_active');
            header.classList.add('header_cover_active');
            main.classList.add('main_cover_active');
            footer.classList.add('footer_cover_active');
            //const button_cover_letter = document.getElementById('button');

        }
        function removeCoverLetter() {
            const cover = document.querySelector('.cover_letter');
            const header = document.querySelector('.header');
            const main = document.querySelector('.main');
            const footer = document.querySelector('.footer');
            const span = document.querySelector('.span');
            const link = document.querySelector('.button_right');
            const corner = document.querySelector('.corner_right');
            corner.classList.remove('corner_right_active');
            span.classList.remove('span_cover_active');
            link.classList.remove('links_button_cover_active');
            //corner.classList.toggle('corner_right_acitve');
            cover.classList.remove('cover_letter_active');
            header.classList.remove('header_cover_active');
            main.classList.remove('main_cover_active');
            footer.classList.remove('footer_cover_active');
        }

        var button_cover_letter_remove = document.getElementById('remove_button');
        button_cover_letter_remove.addEventListener('click', ()=> removeCoverLetter());
        var button_cover_letter = document.getElementById('button');
        button_cover_letter.addEventListener('click', ()=> addCoverLetter());
 function addClass() {
     const button_cover_letter = document.querySelector('.header_cover_letter_wrap_title_button');
     const button_inner     =    document.querySelector('.button_inner');
     const menu_navbar      =    document.querySelector('.menu_navbar_wrap');
     const button_right     =    document.querySelector('.button_right');
     const navbar_photo     =    document.querySelector('.navbar_wrap_photo'); 
     const body_active      =    document.querySelector('.body');
     const header           =    document.querySelector('.header');
     const main           =    document.querySelector('.main');
     const footer           =    document.querySelector('.footer');
        button_cover_letter.classList.toggle('header_cover_letter_wrap_title_button_active');
        header.classList.toggle('header_active');
        main.classList.toggle('main_active');
        footer.classList.toggle('footer_active');
        body_active.classList.toggle('body_active');
        navbar_photo.classList.toggle('navbar_wrap_photo_splend_active');
        button_inner.classList.toggle('button_inner_active');
        menu_navbar.classList.toggle('menu_navbar_wrap_active');
        button_right.classList.toggle('button_right_active');
        //document.body.style.overflowY = 'hidden';
}

  
function scrollSlow(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
        }, 10);
        return false;
}


    $('.a').on('click', function() {
        $('.menu_navbar_wrap').removeClass('menu_navbar_wrap_active');
        $('.button_inner').removeClass('button_inner_active');
        $('.navbar_wrap_photo').removeClass('navbar_wrap_photo_splend_active');
        $('.body').removeClass('body_active');
        $('.header').removeClass('header_active');
        $('.main').removeClass('main_active');
        $('.footer').removeClass('footer_active');
        $('.header_cover_letter_wrap_title_button').removeClass('header_cover_letter_wrap_title_button_active');

    });
    $('.menu_navbar_wrap_li').on('click', function() {
        $('.menu_navbar_wrap').removeClass('menu_navbar_wrap_active');
        $('.button_inner').removeClass('button_inner_active');
        $('.navbar_wrap_photo').removeClass('navbar_wrap_photo_splend_active');
        $('.body').removeClass('body_active');
        $('.header').removeClass('header_active');
        $('.main').removeClass('main_active');
        $('.footer').removeClass('footer_active');
        $('.header_cover_letter_wrap_title_button').removeClass('header_cover_letter_wrap_title_button_active');
    });

 const link = document.getElementById('link_button');
 const close = document.getElementById('close_menu');
 //close.addEventListener('click', () => removeClass());
 link.addEventListener('click',() => addClass());

    window.addEventListener('scroll', function() {
        var delta = 65;
        const scroll_value = document.querySelector('.button_right');
        const scroll_value_after = document.querySelector('.navbar_wrap_after');
        const scroll_button = document.getElementById('link');
        if (pageYOffset > 75) {
            scroll_button.style.transform = 'translateY(' + (pageYOffset - 75) + 'px)';
            scroll_value.style.transform = 'translate(' + -10 + 'px,' + (pageYOffset - delta) + 'px)';
            scroll_value_after.style.transform = 'rotate(-360deg) translateY(' + (pageYOffset - 75) + 'px)';
            scroll_value_after.style.borderTop = '40px solid #2c3e50';
            scroll_value_after.style.borderRight ='40px solid #2c3e50';
        } else {
            scroll_button.style.transform = 'translateY(0px)';
            scroll_value.style.transform = 'translate(' + -10 + 'px,' +10 + 'px)';
            scroll_value_after.style.transform = 'rotate(-360deg)';
            scroll_value_after.style.borderTop = '40px solid rgba(255, 255, 255, 0.1)';
            scroll_value_after.style.borderRight ='40px solid rgba(255, 255, 255, 0.1)';
        }
    });

