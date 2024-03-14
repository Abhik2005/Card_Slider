


async function songsApi (){
  const sliderArr = [];

const url = 'https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ab166fbf10msh2e4c583ddbad501p13f571jsn42a0b046a95c',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

var songs = await fetch(url, options);
var data = await songs.json();

for(let i=0; i<=data.items.length-1;i++){
  var songs = {
    id: i,
    imgUrl:
      "https://i.ytimg.com/vi/XLqmL9cPN1E/mqdefault.jpg",
    title: data.items[i].track.name,
    musicUrl: data.items[i].track.preview_url
  }
   sliderArr.push(songs);
}
console.log(sliderArr);
}
songsApi()

// .then((res)=>res.json())
// .then((data)=>{
//         for(let i=0; i<=data.items.length-1;i++){
//           var songs = {
//             id: i,
//             imgUrl:
//               "https://i.ytimg.com/vi/XLqmL9cPN1E/mqdefault.jpg",
//             title: data.items[i].track.name,
//             musicUrl: data.items[i].track.preview_url
//           }
//            sliderArr.push(songs);
//           // console.log(songs);
//         }
// })

  export default songsApi