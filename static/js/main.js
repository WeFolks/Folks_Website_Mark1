$('h2').textfill({
  maxFontPixels: 200
});

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

setInterval(function() {
    card.classList.toggle('is-flipped');
  }, 2000);

  