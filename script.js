// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
   delay: (el, i) => 70*i
  })
// Snap Scroll
  const gra = function (min, max) {
    return Math.random() * (max - min) + min;
  };
  const init = function () {
    let items = document.querySelectorAll("section");
    for (let i = 0; i < items.length; i++) {
      items[i].style.background = randomColor({ luminosity: "light" });
    }
    cssScrollSnapPolyfill();
  };
  init();
  
  