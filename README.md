# pigletRnD
Research Files for Fickle Piglet

## 3rd Party API's


| Provider        | Method      | Url/Endpoint  | Ex. # | Notes |
| ------------- |:-------------:| ------------:|------------:| ------------:|
| Apple Itunes | `GET` | https://itunes.apple.com/search?term={SEARCH+TERM}&entity=podcast | 1 | |
| Google Books | `GET` | https://www.googleapis.com/books/v1/volumes?q={SEARCH+TERM} | 2 | |
| Youtube | `GET` | https://www.googleapis.com/youtube/v3/search?part=snippet&q={SEARCH+TERM}&key={YOUR_API_KEY} | 3 | Access video via https://www.youtube.com/watch?v={items[i].id.videoId}|
| Wikipedia | `GET` | https://en.wikipedia.org/w/api.php?action=query&titles={SEARCH_TERM}&prop=revisions&rvprop=content&format=json | 4 | Need to parse through and delete "url" and other markup stuff. Also need a perfect match or will have a #REDIRECT in the results|
| Vimeo | `GET` | https://api.vimeo.com/videos?query={SEARCH+TERM} | 5 | Required OAuth 2.0 to access api. Access token needs to be sent in header. Reference credentials for access keys and tokens|



## Examples (Reponses CLEANED of unnecessary data)

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
			description:
				"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, \
				JavaScript is a flexible, complex language that you can use to build full-scale applications. Eloquent JavaScript, 2nd Edition dives deep into the JavaScript language to show you how to  \
				write beautiful, effective code. Author Marijn Haverbeke immerses you in example code from the start, while exercises and full-chapter projects give you hands-on experience with writing  \
				your own programs. As you build projects such as an artificial life simulation, a simple programming language, and a paint program, you’ll learn: The essential elements of programming,  \
				including syntax, control, and dataHow to organize and clarify your code with object-oriented and functional programming techniquesHow to script the browser and make basic web  \
				applicationsHow to use the DOM effectively to interact with browsersHow to harness Node.js to build servers and utilities This edition is thoroughly revised and modernized to reflect the \
				current state of Java­Script and web browsers, with brand-new material, such as a chapter on code performance in Java­Script, and expanded coverage of recursion and closures.  \
				All source code is available online in an inter­active sandbox, where you can edit the code, run it, and see its output instantly. Isn’t it time you became fluent in the language \
				 of the Web?",
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
### 3. Youtube (Javascript Example)

```Javascript

{
	kind: "youtube#searchListResponse",
	etag: ""abQHWywil_AkNqdqji7_FqiK-u4/UHCrGIpB2OUcX5hogzhPiWXDcxQ"",
	nextPageToken: "CAUQAA",
	pageInfo:
		{
			totalResults: 921655,
			resultsPerPage: 5
		},
	items:
		[
			{
				kind: "youtube#searchResult",
				etag: ""abQHWywil_AkNqdqji7_FqiK-u4/KvMPTK3_YQLSyYmZiYJFtUPk67U"",
				id:
					{
					kind: "youtube#video",
					videoId: "Ukg_U3CnJWI"
					},
			snippet:
				{
					publishedAt: "2014-08-05T14:30:15.000Z",
					channelId: "UCc1Pn7FxieMohCZFPYEbs7w",
					title: "Learn JavaScript in 12 Minutes",
					description: "Learn the fundamental features of JavaScript - the language used to add dynamic, interactive content to websites. I teach you how to get started with JavaScript, ...",
					thumbnails:
						{
							default:
								{
									url: "https://i.ytimg.com/vi/Ukg_U3CnJWI/default.jpg",
									width: 120,
									height: 90
								},
							medium:
								{
									url: "https://i.ytimg.com/vi/Ukg_U3CnJWI/mqdefault.jpg",
									width: 320,
									height: 180
								},
							high:
								{
									url: "https://i.ytimg.com/vi/Ukg_U3CnJWI/hqdefault.jpg",
									width: 480,
									height: 360
								}
						},
					channelTitle: "jaketvee",
					liveBroadcastContent: "none"
				}
			}...

		]
}
```

### 4. Wikipedia (Elm Example)
```Javascript

{
	batchcomplete: "",
	query: {
		normalized: [
			{
				from: "Elm_(programming_language)",
				to: "Elm (programming language)"
			}
		],
		pages: {
			37552825: {
				pageid: 37552825,
				ns: 0,
				title: "Elm (programming language)",
				revisions: [
					{
						contentformat: "text/x-wiki",
						contentmodel: "wikitext",
						*:
							"{{Infobox programming language | name = Elm | paradigm = [[Functional reactive programming|functional reactive]], [[functional programming|functional]] | year = 2012 | latest release version = 0.16 | latest release date = {{Start date and age|2015|11|19}} | influenced_by = [[Haskell (programming language)|Haskell]], \
							[[Rust (programming language)|Rust]], [[Standard ML]], [[OCaml]], [[F Sharp (programming language)|F#]] | typing = [[static typing|static]], [[strong typing|strong]], [[type inference|inferred]] | designer = Evan Czaplicki | website = [http://elm-lang.org/ elm-lang.org] | license = [[Permissive license|Permissive]] \
							([[BSD license|Revised BSD]]) <ref name=license>https://github.com/evancz/Elm/blob/master/LICENSE</ref> | file_ext = .elm }} '''Elm''' is a [[functional programming]] language for [[Declarative programming|declaratively]] creating [[web browser]]-based [[graphical user interface]]s. Elm uses the [[functional reactive programming]] \
							style and [[purely functional]] graphical layout to build user interface without any destructive updates. == History == Elm was designed by Evan Czaplicki as his thesis in 2012.<ref>[http://elm-lang.org/papers/concurrent-frp.pdf Evan Czaplicki's thesis on Elm]</ref> The first release of Elm came with many examples and an online \
							editor that made it easy to try out in a web browser.<ref>[http://elm-lang.org/try Elm's Online Editor]</ref> Evan Czaplicki joined [[Prezi]] in 2013 to work on Elm,<ref>[http://elm-lang.org/blog/announce/Elm-and-Prezi.elm Elm joins Prezi]</ref> and in 2016 moved to [[NoRedInk]] as an Open Source Engineer, also starting the Elm \
							Software Foundation.<ref>[http://elm-lang.org/blog/new-adventures-for-elm New Adventures for Elm]</ref> The initial implementation of the Elm compiler targets HTML, CSS, and JavaScript.<ref>[https://github.com/elm-lang/Elm Elm compiler source code]</ref> The set of core tools has continued to expand, now including a [[Read-eval-print \
							loop|REPL]],<ref>[http://elm-lang.org/blog/announce/Repl.elm Elm REPL announcement]</ref> [[Package management system|package manager]],<ref>[http://elm-lang.org/blog/announce/PackageManager.elm Elm Package Manager announcement]</ref> time-traveling debugger,<ref>[http://debug.elm-lang.org/ Elm's Time-Traveling Debugger]</ref> and \
							installers for Mac and Windows.<ref>[https://github.com/elm-lang/elm-platform Elm Platform]</ref> Elm also has an ecosystem of community created libraries.<ref>[http://package.elm-lang.org/packages/ Elm Public Libraries]</ref> == Features == Elm has a small but expressive set of language constructs, including if-expressions, \
							let-expressions, case-expressions, anonymous functions, and list interpolation.<ref name="syntax">[http://elm-lang.org/learn/Syntax.elm The Syntax of Elm]</ref><ref>[http://elm-lang.org/About.elm About Elm] Elm features</ref> From there the key features include signals, immutability, static types, and interoperability with HTML, \
							CSS, and JavaScript. === Signals === The key abstraction in Elm is called a Signal. It is a value that changes over time.<ref>[http://elm-lang.org/learn/What-is-FRP.elm Elm - What is FRP?]</ref> For example, the <code>Mouse.position</code> signal in the following code acts on "the current position of the mouse", so the programmer \
							does not need to manually handle an event each time the mouse moves:<ref>[http://elm-lang.org/edit/examples/Reactive/Position.elm Mouse Position]</ref> <code>Signal.map</code> refers to the map function in the Signal module, which applies <code>show</code> to each mouse position to transform it into a DOM element onscreen. \
							<source lang="haskell"> import Mouse import Graphics.Element exposing (show, Element) main : Signal Element main = Signal.map show Mouse.position </source> The <code>Signal</code> library allows users to model change over time without resorting to callbacks and shared mutable memory.<ref> \
							[http://package.elm-lang.org/packages/elm-lang/core/latest/Signal Signal library]</ref> This leads to an architecture that centralizes state, making it much harder for parts of the model to get out of sync.<ref>[https://gist.github.com/evancz/2b2ba366cae1887fe621 Architecture in Elm]</ref> === Immutability === All values in Elm \
							are [[Immutable object|immutable]], meaning that a value cannot be modified after it is created. Elm uses [[persistent data structure]]s to implement its <code>Array</code>, <code>Dict</code>, and <code>Set</code> libraries.<ref>[http://package.elm-lang.org/packages/elm-lang/core/latest/ Elm Standard Libraries]</ref> === Static \
							Types === Elm is statically typed. Every definition in Elm can be given a type annotation that describes the exact shape of the value. Types include: * primitive types such as integers and strings * basic data structures such as lists, tuples, and extensible records * custom types called [[algebraic data types|ADTs]] that let you \
							build entirely new types<ref>[http://elm-lang.org/learn/Understanding-Types.elm Elm - Getting started with Types]</ref> Elm also supports full type inference, so the compiler can verify that a program is type-safe without any type annotations. === Module System === Elm has a [[Modular programming|module system]] that allows users \
							to break their code into smaller parts called modules. Users can import and export values, making it possible to hide implementation details that other programmers do not need to think about. Modules form the basis of Elm's community library website, the [http://package.elm-lang.org/packages/ Elm Public Library]. === \
							Interoperability with HTML, CSS, and JavaScript === Elm uses an abstraction called ports to communicate with [[JavaScript]].<ref>[http://elm-lang.org/learn/Ports.elm Ports]</ref> It allows values to flow in and out of Elm programs, making it possible to communicate between Elm and JavaScript. Elm also has a library called \
							elm-html which lets users use HTML within Elm and style it with CSS.<ref>[http://package.elm-lang.org/packages/evancz/elm-html/latest/ elm-html documentation]</ref> It uses a virtual DOM approach to make updates efficient.<ref>[http://elm-lang.org/blog/Blazing-Fast-Html.elm Blazing Fast Html]</ref> == Limitations == Unlike \
							[[Haskell (programming language)|Haskell]], Elm has no support for [[Kind (type theory)|higher-kinded types]], and thus cannot provide generic abstractions for many common operations.<ref>{{cite web|title=Higher-Kinded types Not Expressible? #396|url=https://github.com/elm-lang/elm-compiler/issues/396 \
							|website=github.com/elm-lang/elm-compiler|accessdate=6 March 2015}}</ref> For example, there is no generic <code>map</code>, <code>apply</code>, <code>fold</code>, or <code>filter</code> function. Instead, such names are used prefixed by their module, such as <code>List.map</code> and <code>Dict.map</code>. == Tools == * \
							Online editor at [http://elm-lang.org/try elm-lang.org/try] for easy experimentation * [https://github.com/elm-lang/elm-platform Elm Platform] for installing the core tools locally * [http://debug.elm-lang.org/ Time-Traveling Debugger] * [http://elm-lang.org/Learn.elm Learning resources] and [http://elm-lang.org/Examples.elm \
							examples] * [http://package.elm-lang.org/packages/elm-lang/core/latest/ Core Libraries] and [http://package.elm-lang.org/packages/ Community Libraries] == Example Code == <source lang="haskell"> -- This is a single line comment {- This is a multi-line comment. It can span multiple lines. -} {- It is possible to {- nest -} \
							multi-line comments -} -- Here we define a value named `greeting`. The type will be inferred as a String. greeting = "Hello World!" -- It is best to add type annotations to top-level declarations. hello : String hello = "Hi there." -- Functions are declared the same way, with arguments following the function name. add x y = \
							x + y -- Again, it is best to add type annotations. hypotenuse : Float -> Float -> Float hypotenuse a b = sqrt (a^2 + b^2) -- If-expressions are used to branch on values absoluteValue : Int -> Int absoluteValue number = if number < 0 then -number else number -- Records are used to hold values with named fields book : \
							{ title:String, author:String, pages:Int } book = { title = "Steppenwolf" , author = "Hesse" , pages = 237 } -- We can create entirely new types with the `type` keyword. -- The following value represents a binary tree. type Tree a = Empty | Node a (Tree a) (Tree a) -- It is possible to inspect these types with \
							case-expressions. depth : Tree a -> Int depth tree = case tree of Empty -> 0 Node value left right -> 1 + max (depth left) (depth right) </source> ==References== {{Reflist|2}} == External links == * [http://elm-lang.org/ Elm official website] [[Category:Functional languages]] [[Category:Reactive programming languages]] \
							[[Category:Haskell programming language family]]"
					}
				]
			}
		}
	}
}
```

### 4. Vimeo (Javascript Example)

```Javascript

{
    "total": 9796,
    "page": 1,
    "per_page": 25,
    "paging": {
        "next": "/videos?query=javascript&page=2",
        "previous": null,
        "first": "/videos?query=javascript&page=1",
        "last": "/videos?query=javascript&page=392"
    },
    "data": [
        {
            "uri": "/videos/49384334",
            "name": "Pure JavaScript",
            "description":
            	"Are you comfortable passing functions around, returning them from other functions, and generally enjoy the pleasures of higher-order functions? \
            	 Join in on an hour implementing ideas from functional programming in JavaScript. I will show you how you can significantly up your game by  \
            	 leaving loops behind and embracing functions as the primary unit of abstraction.\n\nChristian Johansen\n\nChristian is a passionate programmer \
            	 currently working at gitorious.org where he does everything from JavaScript to Ruby to Unix systems tuning. He is the author of \"Test-Driven  \
            	 JavaScript Development\", and he maintains several open source projects, including the recently released test-framework Buster.JS and the  \
            	 popular mocking framework Sinon.JS. After dark you may find him tinkering with his Emacs setup, coding Lisp and slowly being devoured by the \
            	 world of functional programming.",
            "link": "https://vimeo.com/49384334",
            "embed": {
                "html": "<iframe src=\"https://player.vimeo.com/video/49384334?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0\" width=\"1280\" height=\"720\"frameborder=\"0\" title=\"Pure JavaScript\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
            },
            "pictures": {
                "uri": "/videos/49384334/pictures/340785640",
                "active": true,
                "type": "custom",
                "sizes": [
                    {
                        "width": 1280,
                        "height": 720,
                        "link": "https://i.vimeocdn.com/video/340785640_1280x720.jpg?r=pad"
                    }
                ]
            },
            "tags": [
                {
                    "uri": "/tags/javazone2012",
                    "tag": "JavaZone 2012"
                },
                {
                    "uri": "/tags/conference",
                    "tag": "Conference"
                },
                {
                    "uri": "/tags/javabin",
                    "tag": "JavaBin"
                },
                {
                    "uri": "/tags/presentation",
                    "tag": "Presentation"
                },
                {
                    "uri": "/tags/english",
                    "tag": "English",
                },
                {
                    "uri": "/tags/functional",
                    "tag": "Functional",
                },
                {
                    "uri": "/tags/christianjohansen",
                    "tag": "Christian Johansen",
                },
                {
                    "uri": "/tags/javascript",
                    "tag": "JavaScript",
                }
            ],
            "user": {
                "uri": "/users/7540193",
                "name": "JavaZone",
                "link": "https://vimeo.com/javazone",
                "location": "Norway",
                "bio": null,
                "created_time": "2011-06-22T11:19:21+00:00",
                "pictures": {
                    "uri": "/users/7540193/pictures/6324199",
                    "active": true,
                    "type": "custom",
                    "sizes": [
                        {
                            "width": 30,
                            "height": 30,
                            "link": "https://i.vimeocdn.com/portrait/6324199_30x30.jpg?r=pad"
                        },
                        {
                            "width": 75,
                            "height": 75,
                            "link": "https://i.vimeocdn.com/portrait/6324199_75x75.jpg?r=pad"
                        },
                        {
                            "width": 100,
                            "height": 100,
                            "link": "https://i.vimeocdn.com/portrait/6324199_100x100.jpg?r=pad"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "link": "https://i.vimeocdn.com/portrait/6324199_300x300.jpg?r=pad"
                        }
                    ]
                }
            }
        } ...
    ]
}

```


