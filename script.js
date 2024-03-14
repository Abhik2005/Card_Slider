async function songsApi() {
  const sliderArr = [];

  const url =
    "https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ab166fbf10msh2e4c583ddbad501p13f571jsn42a0b046a95c",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  var songs = await fetch(url, options);
  var data = await songs.json();

  for (let i = 0; i <= data.items.length - 1; i++) {
    var songs = {
      id: i,
      imgUrl: data.items[i].track.album.images[1].url,
      title: data.items[i].track.name,
      musicUrl: data.items[i].track.preview_url,
    };
    sliderArr.push(songs);
  }
console.log(data.items[0].track.album.images[0].url);
  var index = 0;

  var slider = sliderArr.map((slider, index) => {
    var slid = document.createElement("div");
    slid.classList.add("slider");
    var img = document.createElement("img");
    img.src = slider.imgUrl;
    slid.appendChild(img);
    var h1 = document.createElement("h1");
    h1.innerText = slider.title;
    var div = document.createElement("div");
    div.appendChild(slid);
    div.appendChild(h1);
    document.querySelector(".musicSlider").appendChild(div);
  });

  var h1 = document.querySelector(".musicSlider>div>h1");
  var img = document.querySelector(".slider>img");
  var play = document.querySelector(".play");
  var pause = document.querySelector(".pause");
  var music = document.querySelector("audio");
  music.src = sliderArr[0].musicUrl;

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
}
songsApi();
