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

var storyData = JSON.parse(localStorage.getItem("data"));
console.log(storyData);
function showStory() {
  var allStory = storyData.map((story) => {
    if (story.key == "top") {
      const topStoryContainer = document.getElementById("topstory");
      const storyContainer = document.createElement("div");
      storyContainer.style.cursor = "pointer";
      storyContainer.className = "story-container";
      const storyContainerImage = document.createElement("img");
      storyContainerImage.src = story.image;
      const storyContainerHeading = document.createElement("h3");
      storyContainerHeading.innerHTML = story.heading;
      storyContainerHeading.className = "story-heading";
      storyContainer.append(storyContainerImage, storyContainerHeading);
      topStoryContainer.append(storyContainer);
      storyContainer.addEventListener("click", function () {
        localStorage.setItem("newsData", JSON.stringify(story));
        window.location.href = "./News/news.html";
      });
    }

    if (story.key == "bigstory") {
      document.querySelector("#bigstory").style.cursor = "pointer";
      var img = document.createElement("img");
      img.src = story.image;
      var heading = document.createElement("h3");
      heading.innerText = story.heading;
      document.querySelector("#bigstory").append(img, heading);
      document
        .querySelector("#bigstory")
        .addEventListener("click", function () {
          localStorage.setItem("newsData", JSON.stringify(story));
          window.location.href = "./News/news.html";
        });
    }
    if (story.key == "headline") {
      document.querySelector("#headline").style.cursor = "pointer";
      var img = document.createElement("img");
      img.src = story.image;
      var heading = document.createElement("h2");
      heading.innerText = story.heading;
      heading.id = "heading";
      document.querySelector("#headline").append(img, heading);
      document
        .querySelector("#headline")
        .addEventListener("click", function () {
          localStorage.setItem("newsData", JSON.stringify(story));
          window.location.href = "./News/news.html";
        });
    }
    if (story.key == "shortnews1") {
      var div = document.createElement("div");
      div.style.cursor = "pointer";
      var img = document.createElement("img");
      img.src = story.image;
      var heading = document.createElement("h4");
      heading.innerText = story.heading;
      div.append(img, heading);
      document.querySelector(".shortnews1").append(div);
      div.addEventListener("click", function () {
        localStorage.setItem("newsData", JSON.stringify(story));
        window.location.href = "./News/news.html";
      });
    }
    if (story.key == "shortnews2") {
      var div = document.createElement("div");
      div.style.cursor = "pointer";
      div.className = "sn2";
      var heading = document.createElement("h4");
      heading.innerText = story.heading;
      var img = document.createElement("img");
      img.src = story.image;
      div.append(heading, img);
      document.querySelector(".first-div").append(div);
      div.addEventListener("click", function () {
        localStorage.setItem("newsData", JSON.stringify(story));
        window.location.href = "./News/news.html";
      });
    }
    if (story.key == "modiNews") {
      var div = document.createElement("div");
      div.style.cursor = "pointer";
      div.style.position = "relative";
      var heading = document.createElement("h4");
      heading.innerText = story.heading;
      heading.id = "modiHeading";
      var img = document.createElement("img");
      img.src = story.image;
      img.id = "modiImg";
      div.append(img, heading);
      document.querySelector(".second-div").append(div);
      div.addEventListener("click", function () {
        localStorage.setItem("newsData", JSON.stringify(story));
        window.location.href = "./News/news.html";
      });
    }
  });
}
showStory();
function redirection() {
  window.location.href = "index.html";
}

function palash() {
  window.location.href =
    "https://www.kooapp.com/koo/palashsen/b4eb5052-841d-467d-8d72-05b25a6c5944";
}
function cmo() {
  window.location.href =
    "https://www.kooapp.com/koo/CMOPb/f9f48f81-47ad-4001-9f35-f2ee6ce73417https://www.kooapp.com/koo/CMOPb/f9f48f81-47ad-4001-9f35-f2ee6ce73417";
}
function pib() {
  window.location.href =
    "https://www.kooapp.com/koo/PIB_India/23b3f550-6e40-4814-9558-4af2bbbf1fa3";
}
function rail() {
  window.location.href =
    "https://www.kooapp.com/koo/RailMinIndia/f503ffe5-2634-44db-ac14-481fd585e073";
}

var amazon = JSON.parse(localStorage.getItem("amazonData"));

function scroll() {
  var x = amazon.map(function (item) {
    var div = document.createElement("div");
    div.style.display = "flex";
    div.style.margin = "10px";
    div.style.cursor = "pointer";
    var img = document.createElement("img");
    img.src = item.image;
    var title = document.createElement("p");
    title.innerText = item.title;
    title.style.padding = "10px";
    div.append(img, title);
    document.querySelector("#amazon").append(div);
    title.addEventListener("click", function () {
      window.location.href = item.link;
    });
  });
}
scroll();
