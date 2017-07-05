One thing we will see pretty common going forward
will be the use of Objects inside of arrays and 
Arrays inside of Objects.

Let's say we have a post and each post has comments

Our website will have an array of posts.

var posts = [
	{//This is one post object [0]
		title: "Cats are mediocre pets",
		author: "Jerry",
		comments: ["Awesome post", "terrible post"]
	},
	{//This is the second post object [0]
		title: "Cats are actually awesome",
		author: "Cat Luvr",
		comments: ["<3", "You're stupid"]
	}
]

posts.length
2
posts[0].title
"Cats are mediocre pets"
posts[1].comments[1]
"You're stupid"