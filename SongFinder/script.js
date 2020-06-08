const url = 'https://itunes.apple.com/search?term=beyonce'

fetch(url)

.then((response) => response.json())
.then((data)=>{
	//console.log(data.results); 
	const songContainer = document.getElementById('songs')
	
	const artists = data.results; 
	return artists.map(result => {
		const articles = document.createElement("article"),
		const artist = document.createElement("p"),
		const song = document.createElement("p"),
		const img= document.createElement("img"), 
		const audio = document.createElement("audio")
		
		artist.innerHTML = result.artistName
		song.innerHTML = result.trackName
		img.src = result.artworkUrl100

		console.log(result); 
	}) 
})

.catch(error => console.log("Request Failed:", error))
