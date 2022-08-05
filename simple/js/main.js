// const showElementAnimation = () => {
//     const element = document.getElementsByClassName('slidein');
//     if (!element) return;

//     const showTiming = window.innerHeight > 768 ? 200 : 40;
//     const scrollY = window.pageYOffset;
//     const windowH = window.innerHeight;

//     for (let i=0; i<element.length; i++) { 
//         const elemClientRect = element[i].getBoundingClientRect(); 
//         const elemY = scrollY + elemClientRect.top; 
        
//         if(scrollY + windowH - showTiming > elemY) {
//             element[i].classList.add('is-show');
//         } else if (scrollY + windowH < elemY) {
//             element[i].classList.remove('is-show');
//         }
//     }
// }
// showElementAnimation();
// window.addEventListener('scroll', showElementAnimation);

$(function(){
    $(window).on('scroll', function () {
        if($(window).scrollTop() > 50) {
            $('.sidebar').css('top', '100px').stop().animate({scrollTop: 2000}, 100);
        } else {
            $('.sidebar').css('top', '0').stop().animate({scrollTop: 0}, 100);
        }
    });
});