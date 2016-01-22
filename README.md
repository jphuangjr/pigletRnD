# pigletRnD
Research Files for Fickle Piglet

## 3rd Party API's


| Provider        | Method      | Url/Endpoint  | Example Response Number |
| ------------- |:-------------:| ------------:|------------:|
| Apple Itunes | `GET` | https://itunes.apple.com/search?term=serial&entity=podcast | 1 |
| Google Books | `GET` | https://www.googleapis.com/books/v1/volumes?q=eloquent+javascript | 2 |


## Examples
### 1. Apple Itunes (serial example)
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

### 2. Google Books (Eloquent Javascript Example)
```Javascript
{
	kind: "books#volumes",
	totalItems: 424,
	items: [
		{
			kind: "books#volume",
			volumeInfo: {
			title: "Eloquent JavaScript, 2nd Ed.",
			subtitle: "A Modern Introduction to Programming",
			authors: [
			"Marijn Haverbeke"
			],
			publisher: "No Starch Press",
			publishedDate: "2014-12-14",
			description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications. Eloquent JavaScript, 2nd Edition dives deep into the JavaScript language to show you how to write beautiful, effective code. Author Marijn Haverbeke immerses you in example code from the start, while exercises and full-chapter projects give you hands-on experience with writing your own programs. As you build projects such as an artificial life simulation, a simple programming language, and a paint program, you’ll learn: The essential elements of programming, including syntax, control, and dataHow to organize and clarify your code with object-oriented and functional programming techniquesHow to script the browser and make basic web applicationsHow to use the DOM effectively to interact with browsersHow to harness Node.js to build servers and utilities This edition is thoroughly revised and modernized to reflect the current state of Java­Script and web browsers, with brand-new material, such as a chapter on code performance in Java­Script, and expanded coverage of recursion and closures. All source code is available online in an inter­active sandbox, where you can edit the code, run it, and see its output instantly. Isn’t it time you became fluent in the language of the Web?",
			industryIdentifiers: [
				{
					type: "ISBN_13",
					identifier: "9781593275846"
				},
				{
					type: "ISBN_10",
					identifier: "1593275846"
				}
			],
			pageCount: 472,
			categories: [
				"Computers"
			],
			averageRating: 4,
			ratingsCount: 35,
			imageLinks: {
				smallThumbnail: "http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
				thumbnail: "http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
			},
			previewLink: "http://books.google.com/books?id=mDzDBQAAQBAJ&printsec=frontcover&dq=eloquent+javascript&hl=&cd=1&source=gbs_api",
			infoLink: "http://books.google.com/books?id=mDzDBQAAQBAJ&dq=eloquent+javascript&hl=&source=gbs_api",
			canonicalVolumeLink: "http://books.google.com/books/about/Eloquent_JavaScript_2nd_Ed.html?hl=&id=mDzDBQAAQBAJ"
			},
			searchInfo: {
			textSnippet: "As you build projects such as an artificial life simulation, a simple programming language, and a paint program, you’ll learn: The essential elements of programming, including syntax, control, and dataHow to organize and clarify your code ..."
			}
		} ...
	]
}
```



