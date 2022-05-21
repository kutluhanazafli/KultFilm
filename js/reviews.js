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

$(function() {  // Bookmark button
    //var bookmarkOn = '<i class="fa fa-bookmark"></i>'
    //var bookmarkOff = '<i class="fa fa-bookmark-o"></i>'

    $('.pp-bookmark-btn')
        //.html( $('.pp-bookmark-btn').data('state') ? bookmarkOn : bookmarkOff )
        //.html( $('.pp-bookmark-btn').hasClass( "active" ) ? bookmarkOn : bookmarkOff )
        .click(function() {
            var btn = $(this);

            var context = $(this).data("context");
            var contextAction = $(this).data("context-action");
            var contextId = $(this).data("context-id");
            // $('#log').html(context + " " + contextAction + " " + contextId )

            // if( btn.data('state') ) {
            //    btn.data('state', false);
            if (btn.hasClass("active")) {
                btn.removeClass("active")
                // $getJSON
                //btn.html(bookmarkOff);
            } else {
                // btn.data('state', true);
                btn.addClass("active");
                //btn.html(bookmarkOn);
            };
        });

    /*
      updateBookmarks(action, context, context-action, context-id) {

      }
      */
    //     $('form').html('asfafaf');
    //     var btn = $('form').attr('action');
    //     var jqxhr = $.ajax({
    //         url: '/echo/html/',
    //         dataType: 'json',
    //         data:{ id: $('form input').val() }
    //     })
    //     .success(function(data) {
    //         alert("success"+data);
    //     })
    //     .error(function(err) {
    //         alert("error"+err);
    //     })
    //     .complete(function(stuff) {
    //         alert("complete"+stuff);
    //     });
    //
    //     e.preventDefault();

});