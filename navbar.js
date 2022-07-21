let showMoreNavbarCheck = false;

function showMoreNavbar() {
  if (showMoreNavbarCheck) {
    document.getElementById("extra").style.display = "none";
    document.getElementById("bottom").style.height = "50px";
    showMoreNavbarCheck = false;
  } else {
    document.getElementById("extra").style.display = "flex";
    document.getElementById("bottom").style.height = "80px";
    showMoreNavbarCheck = true;
  }
}
