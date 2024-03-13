import sliderArr from "./songs.js";

var index = 0;

var slider = sliderArr.map((slider, index) => {
  var slid = document.createElement("div");
  slid.classList.add("slider");
  var img = document.createElement("img");
  img.src = slider.imgUrl;
  slid.appendChild(img);
  var h1 = document.createElement("h1");
  h1.innerText = slider.title;
  slid.appendChild(h1);
  document.querySelector(".musicSlider").appendChild(slid);
});

var h1 = document.querySelector(".slider>h1");
var img = document.querySelector(".slider>img");
var music = document.querySelector("audio");
var play = document.querySelector(".play");
var pause = document.querySelector(".pause");

function musicPlay() {
  pause.style.display = "block";
  play.style.display = "none";
  music.play();
}

function musicPause() {
  pause.style.display = "none";
  play.style.display = "block";
  music.pause();
}

function forward() {
  index++;
  var slide = sliderArr.filter((slide) => {
    return slide.id == index;
  });
  if (index < sliderArr.length - 1) {
    h1.innerHTML = slide[0].title;
    img.src = slide[0].imgUrl;
    music.src = slide[0].musicUrl;
    musicPlay();
  } else if (index == sliderArr.length - 1 || index == sliderArr.length) {
    index = -1;
    h1.innerHTML = slide[0].title;
    img.src = slide[0].imgUrl;
    music.src = slide[0].musicUrl;
    musicPlay();
  }
}

function backward() {
  index--;
  var slide = sliderArr.filter((slide) => {
    return slide.id == index;
  });
  if (index >= 0) {
    h1.innerHTML = slide[0].title;
    img.src = slide[0].imgUrl;
    music.src = slide[0].musicUrl;
    musicPlay();
  } else if (index < 0) {
    index = sliderArr.length - 1;
    if (index == 3) {
      console.log(sliderArr[3], index);
      h1.innerHTML = sliderArr[3].title;
      img.src = sliderArr[3].imgUrl;
      music.src = slide[0].musicUrl;
      musicPlay();
    } else {
      h1.innerHTML = slide[0].title;
      img.src = slide[0].imgUrl;
      music.src = slide[0].musicUrl;
      musicPlay();
    }
  }
}

document.querySelector(".rightArrow").addEventListener("click", function () {
  forward();
});

document.querySelector(".leftArrow").addEventListener("click", function () {
  backward();
});

play.addEventListener("click", function () {
  musicPlay();
});

pause.addEventListener("click", function () {
  musicPause();
});
