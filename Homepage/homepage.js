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

var topStoryData = JSON.parse(localStorage.getItem("data"));
console.log(topStoryData);
function showTopStory() {
  const topStoryContainer = document.getElementById("topstory");

  // var title = document.createElement("p");
  // title.innerText = "Top Stories";
  // title.id = "title";
  // topStoryContainer.appendChild(title);
  var allStory = topStoryData.map((story) => {
    const storyContainer = document.createElement("div");
    storyContainer.className = "story-container";
    const storyContainerImage = document.createElement("img");
    storyContainerImage.src = story.image;
    const storyContainerHeading = document.createElement("h3");
    storyContainerHeading.innerHTML = story.heading;
    storyContainerHeading.className = "story-heading";
    storyContainer.append(storyContainerImage, storyContainerHeading);
    topStoryContainer.append(storyContainer);
  });
}
showTopStory();
