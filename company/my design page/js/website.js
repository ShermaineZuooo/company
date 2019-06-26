function showMainMenu() {
  var x = document.querySelector("nav ul");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
