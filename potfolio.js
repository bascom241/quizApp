
window.addEventListener('scroll',function(){
  console.log('erfsdcghisdf')
})

const allSections = document.querySelector('body')
const sections = document.querySelector('.my-main')
const hambuger = document.querySelector('.hambuger');
const liiiki = document.querySelector('.links')
const nav = document.querySelector('.show-nav')
const image = document.querySelector('.img4');
image.addEventListener('click', () =>{
  console.log('sahvx')
  liiiki.classList.remove('lanks');
  nav.classList.remove('dipper');
  image.classList.add('img4-hidden')
})

hambuger.addEventListener('click',()=>{
  console.log('dascfguj')
  liiiki.classList.add('lanks');
  nav.classList.add('dipper');
  image.classList.remove('img4-hidden')
})


const pageChanging = function () {
  document.querySelectorAll('.btn').forEach(function (link) {
    link.addEventListener('click', () => {
      const sideBar = link.parentElement;
      const sideBarContainer = sideBar.parentElement;

      const sideBarIndicator = link.dataset.forButton;
      const tabToActivate = sideBarContainer.querySelector
        (`.section[data-button="${sideBarIndicator}"]`);

      ``
      sideBar.querySelectorAll('.btn').forEach((button) => {
        button.classList.remove('btn--active');
        
      })
      sideBarContainer.querySelectorAll('.section').forEach((sect) => {
        sect.classList.remove('section--active');
        
      })
      link.classList.add('btn--active');
      tabToActivate.classList.add('section--active');
    })
  })

  var icon = document.querySelector('#icon')
  icon.onclick = function () {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
      icon.src = "icons8-sun-48.png";
    } else {
      icon.src = "icons8-do-not-disturb-ios-48 (1).png"
    }
  }

}
document.addEventListener("DOMContentLoaded", function () {
  pageChanging();
})

const mediaQuery = window.matchMedia("(max-width: 600px)");

let sideBarContent = document.querySelectorAll('.links')[0];
const handleScroll = () => {
  let scrollTop = window.scrollY;

  let viewportHeight = window.innerHeight;

  let contentHeight = sideBarContent.getBoundingClientRect().height;

  if (scrollTop >= contentHeight - viewportHeight && !mediaQuery.matches) {
    sideBarContent.style.transform = `translateY(${contentHeight - viewportHeight}px)`;
    sideBarContent.style.position = "fixed";
  } else {
    sideBarContent.style.transform = "";
    sideBarContent.style.position = "";
  }
};


if (window.matchMedia("(max-width: 768px)").matches) {
  window.addEventListener("scroll", function() {
    liiiki.classList.remove('lanks');
    nav.classList.remove('dipper');
  });
}

window.onscroll = handleScroll;
let close = document.querySelector('#img')
let content = document.querySelector('.pop-container');
function openPopup() {
  content.classList.add('pop-open');
  

}
function closePopup() {
  content.classList.remove('pop-open');

}
const imgD = document.querySelectorAll('.igg img');
const p2 = document.querySelectorAll('.igg p');

for (let i = 0; i < imgD.length; i++) {
  imgD[i].addEventListener('mouseover', () => {
    imgD[i].style.transform = `translateY(${-50}px)`;
    p2[i].style.transform = `translateY(${80}px)`;
  });
}









