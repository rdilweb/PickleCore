function openNav() {
  document.getElementById("nav-icon4").classList.toggle("open");
  document.getElementById("nav").style.width = "265px";
}

function closeNav() {
  document.getElementById("nav").style.width = "0";
}

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
