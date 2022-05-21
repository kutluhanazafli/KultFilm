function filterMovies(e) { // Filmleri kategorilerine göre filtreler
    const movies = document.querySelectorAll(".liste article");
    let filter = e.target.dataset.filter;
    if (filter === '*') {
        movies.forEach(movie => movie.classList.remove('hidden'));
    } else {
        movies.forEach(movie => {
            movie.classList.contains(filter) ?
                movie.classList.remove('hidden') :
                movie.classList.add('hidden');
        });
    }
    ;
};


var snippet = [].slice.call(document.querySelectorAll(".hover")); // Resimlerin üzerine mouse götürülünce animasyon gerçekleşir
if (snippet.length) {
    snippet.forEach(function (snippet) {
        snippet.addEventListener("mouseout", function (event) {
            if (event.target.parentNode.tagName === "img") {
                event.target.parentNode.classList.remove("hover");
            } else {
                event.target.parentNode.classList.remove("hover");
            }
        });
    });
}


$(document).ready(function () {  //p taglarının üzerindeyken yazının altı çizilir

    $('p').mouseenter(
        function () {
            $(this).css({"text-decoration": "underline"});
        });

    $('p').mouseleave(
        function () {
            $(this).css({"text-decoration": "none"});
        });

});


$(document).ready(function () {  //Başlkların üzerindeyken yazılar italik olur

    $('strong').mouseenter(
        function () {
            $(this).css({"font-style": "italic"});
        });

    $('strong').mouseleave(
        function () {
            $(this).css({"font-style": "normal"});
        });

});

$(document).ready(function () {  //En üste geri dön
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});