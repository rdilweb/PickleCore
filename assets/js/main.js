navOpen = false;

function toggleNav() {
  if (navOpen) {
    document.getElementById("nav").style.width = "0";
    navOpen = false;
  } else {
    document.getElementById("nav").style.width = "265px";
    navOpen = true;
  }
  document.getElementById("nav-btn").classList.toggle("open");
}
