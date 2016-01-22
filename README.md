# pigletRnD
Research Files for Fickle Piglet

## 3rd Party API's


| Provider        | Method      | Url/Endpoint  | Example Response Number |
| ------------- |:-------------:| ------------:|------------:|
| Apple Itunes | `GET` | https://itunes.apple.com/search?term=serial&entity=podcast | 1 |
| Google Books | `GET` | https://www.googleapis.com/books/v1/volumes?q=eloquent+javascript | 2 |


## Examples
### 1. Apple Itunes
```Javascript
{
	resultsCount: 50,
	results: [
		{
		wrapperType: "track",
		kind: "podcast",
		artistName: "This American Life",
		collectionName: "Serial",
		trackName: "Serial",
		collectionViewUrl:"https://itunes.apple.com/us/podcast/serial/id917918570?mt=2&uo=4",
		feedUrl: "http://feeds.serialpodcast.org/serialpodcast",
		trackViewUrl: "https://itunes.apple.com/us/podcast/serial/id917918570?mt=2&uo=4",
		artworkUrl30:"http://is2.mzstatic.com/image/thumb/Music69/v4/70/c9/71/70c97133-f3a8-738e-ea2c-27a6dc7d9731/source/30x30bb.jpg",
		artworkUrl60:"http://is2.mzstatic.com/image/thumb/Music69/v4/70/c9/71/70c97133-f3a8-738e-ea2c-27a6dc7d9731/source/60x60bb.jpg",
		artworkUrl100:"http://is2.mzstatic.com/image/thumb/Music69/v4/70/c9/71/70c97133-f3a8-738e-ea2c-27a6dc7d9731/source/100x100bb.jpg",
		releaseDate: "2016-01-21T10:30:00Z",
		trackCount: 18,
		primaryGenreName: "News & Politics",
		radioStationUrl: "https://itunes.apple.com/station/idra.917918570",
		artworkUrl600:"http://is2.mzstatic.com/image/thumb/Music69/v4/70/c9/71/70c97133-f3a8-738e-ea2c-27a6dc7d9731/source/600x600bb.jpg",
		genres: 
		[
		"News & Politics",
		"Podcasts"
		]
	}...
]
```



