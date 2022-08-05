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

// 簡易無限スクロールコンテンツ
(() => {
    window.fetch = url => new Promise(resolve => {
        setTimeout(() => {
            const content = '<div>コンテンツが入ります</div>';
            resolve({ text: async () => content });
        }, 100)
    });
})();
(() => {
    const contents = document.getElementById('contents');

    const infiniteScrollObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            infiniteScrollObserver.unobserve(entry.target);
            loadContent();
        });
    });

    let i = 0;
    const max = 2147483647;

    const loadContent = async () => {
        const response = await fetch('https://example.com/load?i=' + i);

        contents.insertAdjacentHTML('beforeend',
            '<div>' +
                '<div>#' + (i + 1) + '</div>' +
                await response.text() +
            '</div>'
        );
        i++;
        if ( i < max ) infiniteScrollObserver.observe(contents.lastElementChild);
    };
    loadContent();
})(); // ここまで簡易無限スクロールコンテンツ

$(function(){
    $(window).on('scroll', function () {
        if($(window).scrollTop() > 50) {
            $('.sidebar').css('top', '100px').stop().animate({scrollTop: 2000}, 100);
        } else {
            $('.sidebar').css('top', '0').stop().animate({scrollTop: 0}, 100);
        }
    });
});