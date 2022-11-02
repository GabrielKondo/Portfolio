var blocks = $('.block__reveal'),
    menuButton = $('.menu'),
    menuLinks = $('.nav__link');

var blockAnimation = new TimelineMax({
  paused: true,
  reversed: true
});

blockAnimation
  .staggerTo (blocks, 0.6, {
    width: '25%',
    ease: Circ.easeInOut
  }, 0.05)

  .staggerFromTo (menuLinks, 0.6, {
    y: 20,
    autoAlpha: 0,
    ease: Circ.easeInOut }, {
      y: 0,
      autoAlpha: 1
  }, 0.2)

menuButton.click(function(e) {
  blockAnimation.reversed() ?
    blockAnimation.play() : blockAnimation.reverse();
});

const navContainer = document.getElementsByClassName('nav__container__link')[0]
const projectLi = document.getElementsByClassName('nav__link__dorpdown')[0]
const hiddenLi = document.getElementsByClassName('nav__dropdown')[0]

let aberturaEstado = false;

projectLi.addEventListener('mouseenter', () => {
  const tamanhoListaEscondida = hiddenLi.childElementCount;
  if (!aberturaEstado) {
    aberturaEstado = true;
    hiddenLi.style.height = `${tamanhoListaEscondida * 63}px`;
  }
})

navContainer.addEventListener('mousemove', (event) => {
  console.log(event.target.className)
  if (aberturaEstado) {
    if (
      !(
        event.target.className === 'nav__dropdown_link' ||
        event.target.className === 'nav__dropdown_item' ||
        event.target.className === 'nav__link' ||
        event.target.className === 'nav__link__dorpdown'
      )
    ) {
      aberturaEstado = false;
      hiddenLi.style.height = `0px`;
    }
  }

})