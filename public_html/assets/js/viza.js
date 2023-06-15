

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

document.getElementById('myButton').onclick = function() {
    alert('На жаль, ця функція зараз не працуює. Пишіть в любу соц мережу або на пошту, дякуюємо за співпрацю!');
}

