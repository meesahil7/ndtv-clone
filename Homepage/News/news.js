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

var news = JSON.parse(localStorage.getItem("newsData"));

function showNews() {
  var div = document.createElement("div");
  div.style.backgroundColor = "white";
  div.style.padding = "40px";
  var heading = document.createElement("h1");
  heading.innerText = news.heading;
  heading.id = "news-heading";
  var img = document.createElement("img");
  img.src = news.image;
  img.id = "news-img";
  var des = document.createElement("h3");
  des.innerText = news.description;
  des.id = "news-des";
  div.append(heading, img, des);
  document.querySelector("#news").append(div);
}
showNews();
