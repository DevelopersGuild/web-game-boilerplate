# Web Game Boilerplate

## How to Install and Set Up

1. If you don't have Node.js, download it at [http://nodejs.org/](http://nodejs.org/) and install it.
1. Clone the repo.
1. Navigate to the 'web-game-boilerplate' folder in your terminal terminal/cmd.
1. Run `npm install`. This will install all the packages used in the app.
1. Run `node server.js`
1. Open [http://localhost:3040/](http://localhost:3040/) and you should see your game!

## Other Info

* `public/js/scripts.js` is the file that you want to write your JavaScript in.
	* Whenever you make a change to the above file, refresh the tab that's on http://localhost:3040/
* Phaser is already included in the project.

## How to setup a Node.js server for a Phaser.io project (tutorial)

This is an HTML 5 game. What that means is: we write our game code in JavaScript, and we'll load it into a webpage.

By "webpage", I mean an HTML file that's rendered in your browser.

---

To start, let's create a basic HTML file with this code (if you need a text editor to write your HTML code, I recommend [Sublime Text](https://www.sublimetext.com/)):

```
<!doctype html>
<html>
	<body>
	</body>
</html>
```

And save it as [whatever name you want].html and make sure it's in a folder that's easily accessible (e.g. your Desktop). I named my file `anwarsucks.html`. This HTML page should be blank.

To render the HTML file in your browser, you can either: 1. drag it onto a browser window or 2. right click the file and open it with any web browser (Chrome, Firefox, Safari, Edge).

If you did it right, you should see a blank white page.

---

Now let's load a JavaScript file. Let's create a JavaScript file with the following content:

```
alert('JavaScript has been loaded!');
```

and name it [whatever you name want].js **AND MAKE SURE YOU SAVE IT IN THE SAME FOLDER THAT YOUR HTML FILE IS IN**. I named my file `anwarsuckseggs.js`.

Now let's go back to our HTML file (`anwarsucks.html`) and add the following line of code RIGHT ABOVE the `</body>` tag:
`<script src="[whatever you named your js file].js"></script>`

Make sure you replace [whatever you named your js file] to the name of your JS file. This is how my HTML file looks now:

```
<!doctype html>
<html>
	<body>
		<script src="anwarsuckseggs.js"></script>
	</body>
</html>
```

Go back to your browser, and refresh the tab that has your HTML file loaded. If you did it right, you should get a popup that says: "JavaScript has been loaded!"

---

So you just learned how to create an HTML file, load it into your browser, create a JavaScript file, and load that into your HTML page. For our project, you don't need to know any more about HTML; but if you want to learn more, check out [W3Schools.com](http://www.w3schools.com/).

We now run into a problem. Our game will need to load assets (i.e. music, graphics) from our computer for this tutorial. However, your browser will not allow your JavaScript files to access files locally on your computer for security reasons. (See: [explanation on Phaser.io's website](http://phaser.io/tutorials/getting-started)).

This is where Node.js comes into the picture (and where things get a million times more complicated). We can use Node.js to "serve" the assets (i.e. music, graphics) from our computer, and have our JavaScript file load those assets from the Node.js server. Seems confusing? Too bad.

---

Let's start by setting up our Node.js server.

If you don't have Node.js, download it at [http://nodejs.org/](http://nodejs.org/) and install it.

Once installed, create a new folder in an easily accessible place on your computer. My folder name is `jesus-fucking-christ-anwar-not-this-again` and it'll sit on my Desktop. This folder will hold all of the files related to our Phaser.io project. If you like, you can move the HTML and JS files you made earlier into this folder.

Now open up your Terminal (OSX) or Command Prompt (Windows) and navigate to the folder you just made. If you don't know how to "navigate", type `cd ` (there is a space after the d) and drag the folder into Terminal or Command Prompt, then press enter on your keyboard.
For me, my terminal says `cd /Users/chrisbanh/Desktop/jesus-fucking-christ-anwar-not-this-again` before I hit enter.

Now, type `npm init` in your terminal. This will initialize your Node.js environment. You'll be asked to fill in a bunch of fields, but they're not that important right now so I recommend just hitting enter until it stops.

This is how my terminal window looks right now:
![](http://i.imgur.com/o7bf615.png)

`npm` is a tool that comes with Node.js that allows us to download packages (libraries) that we can plug into our Node.js app easily. So, let's get some packages.

The packages we'll be using are **Express** and **Nunjucks**. Express is a Node.js framework that'll make our lives easier. Nunjucks is a tool I personally like to use to render HTML pages.

To install those packages, type the following into your Terminal or Command Prompt: `npm install --save express nunjucks`.

---

So let's start writing Node.js code now. We write code for Node.js in JavaScript.

Create a new JavaScript file with the following content:

```
// Load Express into our app
var express = require('express');

// Load Nunjucks into our app
var nunjucks = require('nunjucks');

// Create an instance of our Express app
var app = express();

// Make Nunjucks look for our HTML files inside the views/ directory
// and make it load itself into Express
nunjucks.configure('views', {
    express: app
});

// Tell Express to serve files in the public/ directory
app.use(express.static('public'));

// Make Express render index.html when someone visits on '/'
app.get('/', function(req, res) {
	res.render('anwarsucks.html');
})

// Have our Express server listen on port 3040
app.listen(3040);

// Print this message to console
console.log('Server is now running at localhost:3040');
```

and save it in the same folder and name it [whatever name you want].js . My file is named `index.js`.

You are probably thinking: "I have no idea what is going on in that file even though Chris spent a good amount of time writing those comments". So, I'll break it down:

--
```
// Load Express into our app
var express = require('express');

// Load Nunjucks into our app
var nunjucks = require('nunjucks');
```

Remember earlier when we installed Express and Nunjucks using npm? Well this is how we load it into our Node.js project.

--

```
// Create an instance of our Express app
var app = express();
```

We are creating an instance of our Express app. This app can do stuff which you'll see later.

--

```
// Make Nunjucks look for our HTML files inside the views/ directory
// and make it load itself into Express
nunjucks.configure('views', {
    express: app
});
```

The comments pretty much explain it all. Notice the usage of app here, which we created earlier. NOTE: We have not created the views folder yet.

--

```
// Tell Express to serve files in the public/ directory
app.use(express.static('public'));
```

Earlier, I said that we wanted to use Node.js so that we can serve the assets, such as sprites and music. This is where that is happening. Node.js will now serve anything in the public folder (which will reside in the project's folder). NOTE: We have not created the public yet.

--

```
// Make Express render index.html when someone visits on '/'
app.get('/', function(req, res) {
	res.render('anwarsucks.html');
})
```

Earlier, I said that our Express app can handle HTTP requests. Here, we are handling an HTTP GET request on `/`. In response, we are sending back a HTML page for them to render. The name of my HTML file is `anwarsucks.html`, so remember to change this if your HTML file has a different name.

--

```
// Have our Express server listen on port 3040
app.listen(3040);

// Print this message to console
console.log('Server is now running at localhost:3040');
```

Lastly, we will have our Express app listen for HTTP requests on port 3040.

The `console.log` statement only exists to tell the developer where to find the Node.js server so we can make requests on it.

---

**NOTE:** You now have 2 JS files. We'll refer to the file we just created as our "Node JS file", and the one we created at the beginning of this tutorial as our "first JS file"

Earlier, we defined two currently nonexistent folders to use in our Node.js app. Let's create those folders now. If you're too lazy to scroll up, the two folders are: `public` and `views`.

Move the HTML file you made at the beginning of this tutorial into `views`, and our first JS file into `public`. (DO NOT PUT OUR NODE JS FILE INTO PUBLIC)

---

Now it's time for us to start our Node.js server. To do so, type

```
node index.js
```

into your Terminal or Command Prompt and hit enter. If your Node JS file has a different name, then replace `index.js` with it in your terminal before you run this command.

If you did it right, your Terminal or Command Prompt should now have a message that says `Server is now running at localhost:3040`.

And if you visit [http://localhost:3040/](http://localhost:3040/), you should get a popup message, like what happened near the beginning of our tutorial.

---

That's about it! You can now write your Phaser.io code inside of our first JS file (that is currently sitting in the public folder).
