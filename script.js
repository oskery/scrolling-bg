const bg = document.getElementById("bg");
// bg.style.left

function traverseBackground () {
  // bg.style.left = -Math.min(window.scrollY, 2489-window.innerWidth) + 'px'

  // Change style of background. Specifically change left-attribute to minus the amount of scroll
  bg.style.left = -window.scrollY + 'px'
}