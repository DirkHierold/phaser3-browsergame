<!--
Downloaded via https://llm.codes by @steipete on August 14, 2025 at 09:04 PM
Source URL: https://docs.phaser.io/phaser/
Total pages processed: 53
URLs filtered: Yes
Content de-duplicated: Yes
Availability strings filtered: Yes
Code blocks only: No
-->

# https://docs.phaser.io/phaser/

# What is Phaser?

An overview of what Phaser is and what it can be used for.

Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers and has been actively developed for over 10 years.

Games can be built for the web, or as YouTube Playables, Discord Activies, Twitch Overlays or compiled to iOS, Android, Steam and native apps using 3rd party tools. You can use JavaScript or TypeScript for development. Phaser supports over 40 different front-end frameworks including React and Vue.

Phaser is commercially developed and maintained by **Phaser Studio Inc** along with our fantastic open source community. As a result of rapid support, and a developer friendly API, Phaser is currently one of the most starred game frameworks on GitHub.

Interested in learning more? Click the image below to watch our intro video.

![YouTube](https://www.youtube.com/watch?v=jHTRu4iNTcA)

## What is it used for?

Phaser is an HTML5 game framework designed specifically for web browsers. It is built using, and relying on, web technologies. And the games it creates are meant to be played in desktop or mobile browsers, or apps capable of running web games, such as Discord, SnapChat, Facebook and more. There are ways to convert browser games to native mobile or desktop apps using 3rd party tools, and many Phaser developers have done this successfully. However, Phasers primary focus is, and always will be, the web.

Phaser is a 2D game framework. This means that both its features and internal design are based entirely around creating lightning fast 2D games. It does not include 3D rendering or 3D physics as built-in features. Again, there are ways to integrate 3rd party libraries to provide this, but Phaser itself is 2D and our documentation and examples reflect this.

Phaser was developed in JavaScript, because this is the language of the web browser. As such, you will need to code your game using either JavaScript or TypeScript. All of our examples and documentation are provided in JavaScript, but we also provide TypeScript definitions.

Phaser is made available as a JavaScript library. This can be downloaded, linked from a Content Delivery Network (CDN), or installed via any of the standard JavaScript package managers, such as npm. Phaser itself is not a desktop application. You do not 'install' it, although we do provide Phaser Editor. At its core, Phaser is a JavaScript library that you include in your own web pages, or bundle. You then write your game code in JavaScript and run them together in a web browser.

Phaser has been in active development for over 11 years. There is a small but dedicated full-time team behind it, who are constantly striving to make it the best it can be, while keeping it easy to learn. It is used by developers around the world and has been used to create many thousands of games, from small prototypes to full-scale commercial titles with millions of players. Because of its maturity, Phaser is a stable and reliable framework. It is not a 'fad'. When changes are made, they're for the benefit of the framework as whole, not just to chase a 'trendy' new technology.

## When is Phaser not the right choice?

To this end it's important to understand when Phaser _is not_ a suitable choice:

- You want to make your game fully in 3D.
- You want to publish your game on a modern console, such as PS5, XBox or Nintendo Switch.
- You don't want to learn JavaScript and need a no-code based editor.

If any of the above apply to you, then Phaser isn't the right choice for your game. There are plenty of other frameworks and tools that will be a better fit. However, if you're looking to make a 2D game for the web, then we firmly believe that Phaser is a great choice.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Installing

---

# https://docs.phaser.io/phaser/getting-started/installation

# Installing

How to install Phaser

## Create Phaser Game App

The easiest way to get started quickly with Phaser is our `create-phaser-game` app. This CLI tool presents an interactive selection of official project templates and demo games. Issue the command, answer some questions and the app will download and configure the right package for you.

```hljs bash
Copynpm create @phaserjs/game@latest
npx @phaserjs/create-game@latest
yarn create @phaserjs/game
pnpm create @phaserjs/game@latest
bun create @phaserjs/game@latest

We have a create game app tutorial you can read to learn more about this tool and what it offers.

## Installing Phaser from NPM

Install via npm:

```hljs bash
Copynpm install phaser

## Cloning Phaser from GitHub

Phaser is available on GitHub at

You can clone it via git with either:

```hljs bash
Copyhttps://github.com/phaserjs/phaser.git
# or
git@github.com:phaserjs/phaser.git

Or, you can use GitHub Desktop. See the Phaser GitHub page for details.

## Using Phaser from a CDN

Phaser is on jsDelivr which is a "super-fast CDN for developers". Include _either_ of the following in your html:

```hljs html

It is also available from Cloudflare's cdnjs:

## Phaser TypeScript Definitions

Full TypeScript definitions can be found inside the types folder. They are also referenced in the `types` entry in `package.json`, meaning modern editors such as VSCode will detect them automatically.

Depending on your project, you may need to add the following to your `tsconfig.json` file:

```hljs json
Copy"lib": ["es6", "dom", "dom.iterable", "scripthost"],
"typeRoots": ["./node_modules/phaser/types"],
"types": ["Phaser"]

Updated on June 4, 2025, 1:16 PM UTC

* * *

What is Phaser?

Working with Phaser

---

# https://docs.phaser.io/phaser/getting-started/project-templates

# Project Templates

Using our official Phaser Project Templates

Phaser has support for all of the major front-end frameworks and bundlers. The templates are all presented on GitHub using the 'template' setting, allowing you to select the 'Use this template' feature. This allows you to copy the template to your own repository, or open it into GitHub Codespaces.

We support all of the following frameworks and bundlers:

| Frameworks | Bundlers |
| --- | --- |
| Vue.js | Vite |
| React | Rollup |
| Angular | Parcel |
| Next.js | Webpack |
| SolidJS | ESBuild |
| Svelte | Import Map |
| Remix | Bun |

Most come in both JavaScript and TypeScript versions.

## Framework Templates

Pick from the following framework templates:

- React + Vite Template \- also available as a TypeScript Template
- Vue 3 + Vite Template \- also available as a TypeScript Template
- Angular + Vite Template
- Svelte Template
- NextJS Template
- SolidJS + Vite Template
- Remix Template

## Bundler Templates

We also have pure bundler templates, that don't involve using any frameworks. Pick from the following:

- Vite Template \- also available as a TypeScript Template
- Webpack Template \- also available as a TypeScript Template
- ESBuild Template \- also available as a TypeScript Template
- Rollup Template \- also available as a TypeScript Template
- Parcel Template \- also available as a TypeScript Template
- Import Map Template
- Bun Template

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Working with Phaser

Making your first Phaser Game

---

# https://docs.phaser.io/phaser/getting-started/set-up-dev-environment

# Working with Phaser

How to set-up a Phaser Development Environment

In this tutorial we're going to cover setting-up a development environment with which you can build your Phaser games. This will include running a local web server, picking an IDE, getting the latest version of Phaser and checking it all works together.

If you trust us that you _do_ need a local web server for development, then you can skip the explanation below and head directly to part 2.

If you'd like to know the reasoning why, please read on ...

### A web server? But I want to make games!

Not these days, no. I appreciate that it's a bit confusing, even contradictory at times, but it all boils down to browser security. If you're making a static html web page then you can happily drag this file into your browser and see the end results. You can also "Save As" entire web pages locally and re-open them with most the contents intact. If both of these things work why can't you drag an HTML5 game into a browser and run it?

It's to do with the protocol used to access the files. When you request anything over the web you're using `http`, and the server level security is enough to ensure you can only access files you're meant to. But when you drag a file in it's loaded via the local file system (technically `file://`) and that is massively restricted, for obvious reasons. Under `file://` there's no concept of domains, no server level security, just a raw file system. If JavaScript had free reign while operating under `file://` there would be nothing stopping it loading pretty much _any_ file, and sending it off who knows where.

Because this is so dangerous browsers lock themselves down when running under `file://`. Every single page becomes treated as a unique local domain. That is why "Save Web page" works, to a degree. It opens under the same cross-site restrictions as if they were on a live server.

There's a detailed post about it on the Chromium blog that is well worth a read if you'd like to learn more.

Your game is going to need to load resources: images, audio files, JSON data, maybe other JavaScript files. And in order to do this it needs to run unhindered by the browser security shackles. It needs `http://` access to the game files. And for that we need a web server.

## Installing a web server

### Windows

On Windows there are lots of "bundle installers" available which package together and set-up popular web technologies like Apache, PHP and MySQL from a single exe.

We would recommend WAMP.Net. It has an easy set-up guide available, installs an icon into your system-tray from which you can stop and restart the services, as well as modify Apache or Nginx settings and makes creating new sites a breeze, including with SSL certificates.

Cesanta provide the Mongoose web server. This is a really small application that requires no installation and can run as a single exe file. Without all of the additional bundles like SSI and WebDAV (none of which you'll need for an HTML5 game) the exe is a paltry 45KB in size. Even the fully featured version is only 355KB.

Instead of an 'all in one' solution you could also download a web server on its own. Both Microsoft IIS and Apache can be downloaded for free.

### macOS

Being a Unix environment at heart there are more options available on macOS than Windows. But if you'd like an "all in one" approach like WAMP, with a nice clean and easy to use interface, then we'd strongly recommend MAMP. This comes in two versions: one free and one paid for.

Naturally there are also guides for setting up a local web server manually, such as this guide written for Mountain Lion. Pick whichever approach you feel most comfortable with.

### Simple HTTP Server with Python

If you need a quick web server running and you don't want to mess around with setting up Apache or downloading an app, then Python can help. Python comes with a simple built-in HTTP server, which can serve files from any local folder. Naturally the only thing you need to have installed is Python. Read the full guide here

### http-server for node.js

_http-server_ is a simple, zero-configuration command-line http server for node.js. It is powerful enough for production usage, but is simple and hackable enough to be used for testing, local development and learning. Or as the web site says "Serving up static files like they were turtles strapped to rockets". Get the npm and instructions from the http-server web site

### php built-in web server

As of PHP 5.4.0, the CLI SAPI provides a built-in web server. It's only really suitable for development purposes and serves all files sequentially, but is easily powerful enough for testing HTML5 games. It's invoked from a single command-line call and you can find details on how to do this here in the PHP Manual.

However you do it, it's important to have the ability to serve files locally. With that done you're ready to pick an editor.

* * *

## Choosing an Editor

You're going to need an editor in which to prepare your JavaScript code. There are _many_ available, each with their own strengths and weaknesses. If you're an experienced developer you will probably already have your own preferred editor, in which case carry on to Part 4 of this guide. Otherwise here are some options for you:

### Visual Studio Code

This is the editor the Phaser team use for building the framework and all projects. It's even the editor this guide is being written in.

Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity).

Visit the VS Code web site.

### Sublime Text

Sublime should be considered as an extremely powerful text editor rather than an IDE.

Features such as the ability to "Goto" anything, Split Editing, Multiple cursors, Distraction Free mode and loads of powerful Plugins make this the fastest and most versatile editor we've ever used in literally _decades_ of development.

Using its comprehensive Package system you can enhance it in multiple ways. Here is an excellent guide to features and packages for Sublime.

The full version costs $70 but is worth every penny and is available for Windows, OS X and Linux.

Visit the Sublime Text web site.

### WebStorm

JetBrains WebStorm is an extremely advanced full development environment. It goes well beyond simple code editing and offers all of the high-level features you'd expect from a proper IDE. Including code insight, npm built-in, code style and syntax reports, source control and a wealth of other features. Lots of the features are designed for web developers rather than game developers, but are still handy to have around.

It's based on IntelliJ IDEA, a heavily Java based editor, which is both a good and bad thing. For a start the actual code editing experience is nothing like as smooth and freeform as with Sublime, and the non-standard OS integration is weak. But the power features can often make up for that. Having errors with your code spotted for you, before you've even tested your game can be really useful. And code-completion is great too, although obviously somewhat limited by the myriad ways JavaScript can be written.

The full version starts from $49 and is available for Windows and OS X. There are often deals to be found on the JetBrains site too.

Visit the JetBrains WebStorm web site.

## Downloading Phaser

Phaser is made available as a JavaScript library. This can be downloaded, linked from a Content Delivery Network (CDN), or installed via any of the standard JavaScript package managers, such as npm. Phaser is not a desktop application. You do not 'install' it and there is no 'Phaser IDE'. It is a JavaScript library that you include in your own web pages, or bundle. You then write your game code in JavaScript and run them together in a web browser.

Phaser is an open source project and available to download for free. There are no fees to pay when using Phaser, regardless if you use it for a commercial or free project. We use GitHub to manage the project and you have various options on how to download it. These are all explained on the download page.

Yes. GitHub provides the option to download the whole repository as a zip or tar file. However we would strongly recommend you learn to use git instead. It will allow you to easily update to the latest versions of Phaser as they are released. And if in time you wish to contribute code towards Phaser it makes doing so much easier.

If you don't fancy learning to use git via the command-line there are some great applications you can use instead. We'd recommend SmartGIT on Windows or Git Tower on macOS.

## Hello World!

With your editor set-up, web server installed and Phaser downloaded it's time to create something and check everything is working.

You need to discover where your 'web root' is on your machine. This is the folder in which the server looks for files. If you are using WAMP on Windows you can locate it by clicking the WAMP icon in your system-tray and select "www directory" from the pop-up menu. Other servers will have other methods of determining the location, but from this point on we'll refer to it as the 'webroot'.

Create a file called `index.html` inside of the webroot and paste the following code into it:

```hljs html

{
preload ()
{
this.load.setBaseURL('https://cdn.phaserfiles.com/v385');

this.load.image('sky', 'assets/skies/space3.png');
this.load.image('logo', 'assets/sprites/phaser3-logo.png');
this.load.image('red', 'assets/particles/red.png');
}

create ()
{
this.add.image(400, 300, 'sky');

const particles = this.add.particles(0, 0, 'red', {
speed: 100,
scale: { start: 1, end: 0 },
blendMode: 'ADD'
});

const logo = this.physics.add.image(400, 100, 'logo');

logo.setVelocity(100, 200);
logo.setBounce(1, 1);
logo.setCollideWorldBounds(true);

particles.startFollow(logo);
}
}

const config = {
type: Phaser.AUTO,
width: 800,
height: 600,
scene: Example,
physics: {
default: 'arcade',
arcade: {
gravity: { y: 200 }
}
}
};

const game = new Phaser.Game(config);

### Testing, testing ...

Open your web browser and load the `index.html` page up. This may be as simple as typing in `localhost/` or `127.0.0.1/` into your browser. Or you may need to specify a port number as well, it depends entirely on which server set-up method you used.

If everything goes right it will display the following demo in your browser:

If it doesn't for whatever reason you need to bring up the debug console and see what errors are output. In most browsers you can do this by pressing `F12`. This works in Chrome, Firefox and Internet Explorer 11. Check to see what the error is, hopefully it's a simple one like a file being missing, in which case check your folder names and refresh the page.

If it's something more complex, please join us in the Phaser Discord and talk in our Beginners channel. We'll try our best to help.

It's just a tiny example, and we've hundreds more for you to explore, but hopefully it shows how expressive and quick Phaser is to use. With just a few easily readable lines of code we've got something pretty impressive up on screen!

## Phaser Examples

From the moment we released the first version of Phaser we knew that one of the best ways for people to learn how to use it would be to produce examples. So we set out to create many different examples, covering all the key areas of Phaser. From how to set-up animations to how to use the physics.

### Online Phaser Examples

You can browse all the Phaser Examples on this site. You'll also find a live code editor, so you can modify the source and re-run it in real-time to see the changes immediately.

### Making a Game in Phaser Tutorial

Now you're all set-up we strongly recommend you work through the guide to Making a Game in Phaser 3. From it you'll learn how to construct a game allowing you to control a character who can leap off platforms and collect items.

## Next Steps

Your game development experience with Phaser begins here! Although we've only touched upon the basics, if you've followed this guide through you now have a fully working development environment, access to the API docs and hundreds of examples.

Even so it's always best to code as part of a community. And for that we cannot recommend our forum enough. It has gone from strength to strength over the past few months and you're sure to find help and support when you need it most.

Bounce ideas off others, hang-out in the chat room, browse the games showcase and just be involved!

Join the Forum or Chat on Discord

### Contribute

You can help shape the way in which Phaser grows. If you find a bug, please report it. It won't take you long, and to date we have fixed over 91% of all reported issues (and we're still working on the other 9%). You can also issue Pull Requests against the development branch, or release your own plugins or filters.

Report Issues on GitHub

### Show us your games!

We spend many tireless hours working on Phaser because we want it to be the best HTML5 game development framework it can possibly be. We understand it won't be perfect for everyone, and we're cool with that. But if you use it and make something, no matter how small you think that is, please do let us know. You won't believe what a real motivational boost it is when devs show us the games they've been working on! Reach out to us either on the forum, via twitter ( @phaser\_) or by email.

Most of all though, we truly hope you have fun making your game.

Updated onJune4, 2025, 1:16 PMUTC

Installing

Project Templates

---

# https://docs.phaser.io/phaser/concepts/animations

# Animations

Animations

The primary means of animation in Phaser is by using 'frame' based animations. As mentioned previously, Phaser maintains a Texture class, which contains as many Frames as may exist on that Texture. The Animation systen allows you to play a sequence of these Frames, one after the other, at a given frame rate. This is how you create the illusion of animation on Sprites in your game. To achieve this, you often see texture image files divided into a 'grid' of frames, where each frame is a different animation frame. This is known as a Sprite Sheet or Texture Atlas.

Animations are created via the Animation Manager. Each Scene has its own instance of the Animation Manager. You can create as many animations as you like, and each animation can have as many frames as you like. You can also create multiple animations that all use the same frames, if you wish. For example, you could have a 'walk' animation that uses frames 1 to 4, and a 'run' animation that uses frames 1 to 8. Both animations would use overlapping frames, but play them at different speeds.

Not all Game Objects can be animated. The main one you'll use is the Sprite Game Object. This carries its own Animation State component with it, allowing you to create and play animations directly on a Sprite instance.

Animations can be either global or local. A global animation is one that is created via the Animation Manager and is available to all Game Objects in your game. A local animation is one that is created directly on a Game Object, such as a Sprite. Local animations are only available to that Game Object and cannot be used by any other Game Object.

It's worth mentioning that animation can also be achieved by tweening objects, if you just need a blend of motion + subtle changes (like scale or alpha), and that Phaser 3 also has a plugin available for Spine animations, which is a bone-based animation software package published by Esoteric Software.

## Animation manager

### Add animation

```hljs js
Copyvar animationConfig = {
key: "",

frames: [],

sortFrames: true,
defaultTextureKey: null,
skipMissedFrames: true,
randomFrame: false,

// time
delay: 0,
duration: null,
frameRate: null,
timeScale: 1,

// repeat
repeat: 0, // set to (-1) to repeat forever
repeatDelay: 0,
yoyo: false,

// visible
showBeforeDelay: false,
showOnStart: false,
hideOnComplete: false,
};

this.anims.create(animationConfig);

- `key` : Unique key of this animation data

- `frames` : An array of `{key, frame}`
- Properties

```hljs js
Copy{
key: '',
frame: '', // string, or number
duration: 0
}

- `duration` : The duration, in ms, of this frame of the animation.
- A string : Texture key.

- Every frame in the atlas

```hljs js
Copythis.anims.generateFrameNames(key);

- Frame sequence indexing from start to end

```hljs js
Copyvar config = ;
this.anims.generateFrameNames(key,
{
prefix: '',
start: 0,
end: 0,
suffix: '',
zeroPad: 0,
// outputArray: [], // Append frames into this array
});

- `prefix + Pad(i, zeroPad, '0', 1) + suffix`, i: start ~ end
- Custom frame sequence

```hljs js
Copyvar config = ;
this.anims.generateFrameNames(key,
{
prefix: '',
suffix: '',
zeroPad: 0,
frames: [ ... ]
// outputArray: [], // Append frames into this array
});

- `prefix + Pad(frames[i], zeroPad, '0', 1) + suffix`
- `sortFrames` : Frame names numerically sorted. Default value is `true`.

- `defaultTextureKey` : The key of the texture all frames of the animation will use. Can be overridden on a per frame basis.

- `skipMissedFrames` : Skip frames if the time lags, or always advanced anyway? Default value is `true`.

- `randomFrame` : Start playback of this animation from a randomly selected frame? Default value is `false`.

- `delay` : Delay before starting playback. Value given in milliseconds.

- `duration` : How long the animation should play for in milliseconds. If not given its derived from `frameRate`.

- `frameRate` : The frame rate of playback in frames per second. Default value is `24`.

- `timeScale` : The time scale to be applied to playback of this animation. Default value is `1`.

- `repeat` : Number of times to repeat the animation. Default value is `0`.
- `-1` : Infinity
- `repeatDelay` : Delay before the animation repeats. Value given in milliseconds.

- `yoyo` : Should the animation yoyo? (reverse back down to the start) before repeating? Default value is `false`.

- `showBeforeDelay` : If this animation has a delay, should it show the first frame immediately ( `true`), or only after the delay ( `false`)

- `showOnStart` : Should `sprite.visible = true` when the animation starts to play? This happens _after_ any delay, if set. Default value is `false`.

- `hideOnComplete` : Should sprite.visible = false when the animation finishes? Default value is `false`.

#### Use every frame in a texture

```hljs js
Copy// Create animation 'mummyWalk' from every frame in texture 'mummy':
this.anims.create({
key: "mummyWalk",
frames: "mummy",
});

#### Choosing texture frames

You will usually need to know the texture frame names. To get the frame names:

```hljs js
Copyconsole.assert(this.texture.exists("mummy"));
console.log(this.textures.get("mummy").getFrameNames());

```hljs js
Copy// Create animation 'mummyWalk' from frames 0, 1, 2 of texture 'mummy':
this.anims.create({
key: "mummyWalk",
frames: [\
{ key: "mummy", frame: 0 },\
{ key: "mummy", frame: 1 },\
{ key: "mummy", frame: 2 },\
],
});

You can of course create animations using any technique.

```hljs js
Copy// We have 3 textures with identical frame patterns.
const textureKeys = ["giant", "elf", "goblin"];

// We will create 9 animations from 3 sequences.
const anims = {
idle: [0],
walk: [1, 2],
attack: [3, 4],
};

for (const textureKey of textureKeys) {
for (const animName of anims) {
this.anims.create({
// 'giant:idle', 'giant:walk', etc.
key: `${textureKey}:${animName}`,
frames: anims[animName],
});
}
}

#### Frame timing

You can give either `frameRate` (default 24 fps) or a `duration` for the whole animation. The frame duration is calculated as `1000 / frameRate` or `duration / frames.length`.

If you set per-frame durations, these are **added** to the calculated frame durations. So if you want to set only frame durations, use an animation duration of 1ms.

```hljs js
Copythis.anims.create({
key: "spikes",
repeat: -1,
defaultTextureKey: "spikes",
duration: 1, // 1 ms, close enough to 0
frames: [\
{ frame: 0, duration: 3000 },\
{ frame: 1, duration: 250 },\
{ frame: 2, duration: 250 },\
{ frame: 3, duration: 3000 },\
{ frame: 2, duration: 250 },\
{ frame: 1, duration: 250 },\
],
});

#### generateFrameNumbers() and generateFrameNames()

The helper methods generateFrameNumbers() and generateFrameNames() both **select** frame names from a texture according to a pattern and then **generate** an array of AnimationFrame objects that can be passed as the `frames` property. `generateFrameNumbers()` selects spritesheet-style frame names (indexes) and `generateFrameNames()` selects atlas-style frame names. They never select frame names that don't exist in the texture.

For example,

```hljs js
Copythis.anims.generateFrameNumbers("mummy", { frames: [0, 1, 2] });

or

```hljs js
Copythis.anims.generateFrameNumbers("mummy", { start: 0, end: 2 });

would produce an array of the 3 frame configs that we wrote above.

The `generateFrameNames()` config has all the options of `generateFrameNumbers()`, plus `prefix`, `suffix`, and `zeroPad`.

Log the output of these methods if you run into trouble.

#### Add from Aseprite

Aseprite is a powerful animation sprite editor and pixel art tool. Create one, or more animations from a loaded Aseprite JSON file.

```hljs js
Copythis.anims.createFromAseprite(key);
// this.anims.createFromAseprite(key, tags, target);

- `key` : The key of the loaded Aseprite atlas.
- `tags` :
- `undefined` : Load all tags.
- Array of string tag : Load these tags.
- `target` : Create the animations on this target Sprite.
- `undefined` : Created globally in this Animation Manager. Default behavior.

### Remove animation

```hljs js
Copythis.anims.remove(key);

### Mixing and delaying between two animations

- Add

```hljs js
Copythis.anims.addMix(animA, animB, delay);

- `animA`, `animB` : String key of an animation, or an instance of animation.
- Remove

```hljs js
Copythis.anims.removeMix(animA, animB);
// this.anims.removeMix(animA);

- Get

```hljs js
Copyvar delay = this.anims.getMix(animA, animB);

- Example of an animation mix for transitioning from one animation to another.

```hljs js
Copythis.anims.create({ key: "animA" /* etc. */ });
this.anims.create({ key: "animB" /* etc. */ });

this.anims.addMix("animA", "animB", 200);

The delay is applied automatically if you play the second animation while the first is playing.

```hljs js
Copysprite.play("animA");
// Later:
sprite.play("animB");

It's very similar to

```hljs js
Copyif (sprite.anims.isPlaying && sprite.anims.getName() === "animA") {
sprite.anims.playAfterDelay("animB", 200);
}

### Play animation

- Play

```hljs js
Copythis.anims.play(key, children);

- Stagger play (delay play)

```hljs js
Copythis.anims.staggerPlay(key, children, stagger, staggerFirst);

- `children` : An array of Game Objects to play the animation on
- `stagger` : The amount of time, in milliseconds, to offset each play time by
- `staggerFirst` : Set `true` to apply delay on 1st child
- Playing an animation when an event is triggered

```hljs js
Copysprite.on(event, function () {
sprite.play(key);
}

Example:

```hljs js
Copysprite.on('pointerdown', function () {
sprite.play('smile');
}

- Ignore playing an animation if it is already playing

```hljs js
Copysprite.play(key, ignoreIfPlaying);

- `ignoreIfPlaying` : Set to `true` to ignore restarting an animation.

```hljs js
Copysprite.play("run", true); // only plays the "run" animation if it is not already playing

- Chaining animation

`chain()` schedules an animation to play once the current one **completes** or **stops**. Repeated chaining adds to the **end** of the queue. If an animation is repeating, only `stop()` will advance the queue. If you want a final stop, do

```hljs js
Copysprite.chain().stop();

Be careful of chaining too many animations by mistake.

```hljs js
Copyfunction update() {
// Choose a reasonable maximum.

throw new Error("Too many chained animations");
}
}

Internally, the next chained animation is in `nextAnim` and any additional ones are in `nextAnimsQueue`.

- Play animation after delay or repeat count
- `playAfterDelay()`

```hljs js
Copysprite.playAfterDelay(key, delay);

- `key` : The string-based key of the animation to play.
- `delay` : The delay, in milliseconds, to wait before playing the animation.
- `playAfterRepeat()`

```hljs js
Copysprite.playAfterRepeat(key, repeatCount);

- `key` : The string-based key of the animation to play.
- `repeatCount` : Optional argument that defaults to 1. Number of current animation repeats before next animation plays.

### Pause all animations

```hljs js
Copythis.anims.pauseAll();

### Resume all animations

```hljs js
Copythis.anims.resumeAll();

### Global time scale

The global time scale of the Animation Manager. This scales the time delta between two frames, thus influencing the speed of time for the Animation Manager.

```hljs js
Copyvar timeScale = this.anims.globalTimeScale;

- Set

```hljs js
Copythis.anims.globalTimeScale = timeScale;

### Has animation

```hljs js
Copyvar hasAnim = this.anims.exists(key);

### Export/load

- Export JSON

```hljs js
Copyvar json = this.anims.toJSON();

- Load from JSON

```hljs js
Copythis.anims.fromJSON(json);
// this.anims.fromJSON(json, clearCurrentAnimations);

- Load JSON in preload stage

```hljs js
Copyscene.load.json(key, url);

- Load animation in preload stage

```hljs js
Copyscene.load.animation(key, url);

### Events

- On add animation

```hljs js
Copythis.anims.on("add", function (key, anim) {});

- On remove animation

```hljs js
Copythis.anims.on("remove", function (key, anim) {});

- On pause all animations

```hljs js
Copythis.anims.on("pauseall", function () {});

- On resume all animations

```hljs js
Copythis.anims.on("resumeall", function () {});

## Animation object

```hljs js
Copyvar anim = this.anims.get(key);

```hljs js
Copyconst mummyWalkAnim = this.anims.get("mummyWalk");

### Add frame

- Append frames

```hljs js
Copyanim.addFrame(frame);

- `frame` : `this.anims.generateFrameNames(key, config)`
- Insert frames at index

```hljs js
Copyanim.addFrameAt(index, frame);

- `frame` : `this.anims.generateFrameNames(key, config)`

### Remove frame

- Remove frame at

```hljs js
Copyanim.removeFrameAt(index);

- Remove frame

```hljs js
Copyanim.removeFrame(frame);

### Get frame

- Has frame index

```hljs js
Copyvar HasFrameAt = anim.checkFrame(index);

- Get frame at index

```hljs js
Copyvar frame = anim.getFrameAt(index);

```hljs js
Copyconst mummyWalkFrame1 = this.anims.get("mummyWalk").getFrameAt(1);

- Get last frame

```hljs js
Copyvar frame = anim.getLastFrame();

### Export

```hljs js
Copyvar json = anim.toJSON();

```hljs js
Copyvar jsonString = JSON.stringify(anim);

You're playing on a non-Sprite game object.

## Author Credits

Content on this page includes work by:

- RexRainbow
- samme

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Actions

Audio

---

# https://docs.phaser.io/phaser/concepts/actions

# Actions

Actions

In Phaser, Actions are functions that typically perform a single task by combining multiple Phaser features together, such as Placing a set of sprites along a Line, or rotating a set of sprites around a given point. Actions run across an array of Game Objects, allowing you to perform the same action on them all, often with optional offsets. Some Actions are meant to be called once, while others are designed to be called continuously as part of an update loop.

Actions are available under the `Phaser.Actions` namespace and are all static functions, so you can call them directly.

## Applying an Action to a Group

If you wish to apply an Action to a Phaser Game Objects Group, you can do so by calling the Groups `getChildren()` method when invoking the Action. For example, to set the alpha of all children in a Group to 0.5 you could do:

```hljs js
CopyPhaser.Actions.SetAlpha(myGroup.getChildren(), 0.5);

## Step, Index and Direction

As well as the array of Game Objects to manipulate, lots of Actions also take the following optional parameters:

- `step`
- `index`
- `direction`

The `step` parameter is an optional amount that is added to the `value` passed into the Action, multiplied by the iteration counter. For example, if you pass in an array of 10 sprites to the `SetX` Action, and set the `value` to be 100, then every Sprite will given the same x coordinate of 100. But if you set the `step` parameter to 50, then the first sprite will have a position of 100, the second will be at 150, the third at 200 and so on, as the `step` value (50) is multiplied by the array iteration. This is extremely useful to quickly provide variety from a single Action without calling it repeatedly.

The `index` parameter controls the offset to start from in the given array. When you call an Action function, you pass in an array of Game Objects to modify. The `index` parameter allows you to skip 'n' number of items in the array, as defined by the starting `index` and only apply the Action to the remaining entries. By default, the `index` is zero, which means it will run the Action across every entry in the array. The `index` should never exceed the length of the Game Objects array.

The `direction` parameter allows you to adjust the order in which you iterate through the Game Objects array. The default value is `1` which means it will iterate from the start to the end of the array. If you set the `direction` to be `-1` it will iterate from the end to the start of the array instead. This is useful if you wish to reverse the order in which the Action is applied to the array, without modifying the array itself.

If an Action allows you to specify the Step, Index and Direction, please refer ;

- `items` : The array of items to be updated by this action.
- `position` : The position to align the items with. This is an align constant, such as `Phaser.Display.Align.LEFT_CENTER`.
- `offsetX` : Optional horizontal offset from the position.
- `offsetY` : Optional vertical offset from the position.

### Angle

The Angle Action will _add_ the given value to the `angle` property of an array of Game Objects.

```hljs js
CopyPhaser.Actions.Angle(myObjects, 90);

As covered in the Game Objects guide, the `angle` sets the angle of rotation of a Game Object in degrees.

Because this Action is additive it means you can call it in an `update` loop, or similar, and keep incrementing the angle of the objects by small amounts.

\[file: actions/angle update.js\]

This Action supports the optional `step`, `index` and `direction` parameters. See the "Step, Index and Direction" section for details.

### Call

The Call Action will take an array of Game Objects and pass them to the given callback:

```hljs js
CopyPhaser.Actions.Call(myObjects, callback, context);

The `callback` is a function that will be invoked for each Game Object in the array. It will be sent the Game Object itself as the first argument.

This Action isn't required if you are coding in ES6, because you can achieve the same thing with the native `forEach` method:

```hljs js
CopymyObjects.forEach(callback, context);

However, if you're using ES5 then this Action is a useful shortcut.

### Get First and Get Last

The Get First Action will take an array of Game Objects along with a comparison object. It will iterate the array and return the first Game Object that matches all conditions in the comparison object:

```hljs js
Copyconst first = Phaser.Actions.GetFirst(myObjects, { scaleX: 0.5, alpha: 1 });

In the example above, the first Game Object that has a `scaleX` value of 0.5 and an `alpha` value of 1 will be returned. If no Game Object in the array matches the conditions, `null` is returned.

The comparison can also include references to other objects. For example, to get the first Game Object that has a specific texture, you can do:

```hljs js
Copyconst fireTexture = this.textures.get('fire');

const first = Phaser.Actions.GetFirst(myObjects, { texture: fireTexture });

The comparison object can have as many properties as you like. Each property in the comparison object must map to a property on the Game Object, i.e. `visible`, `x`, `y`, `scaleX`, etc. If you include a property that Game Objects do not have, it will likely never return a match. The comparison cannot match against nested properties, such as `texture.name`. Comparisons are strict, so `===` is used to compare the values.

The Get Last Action works in exactly the same way, but returns the _last_ Game Object from the array that matches the comparison object. It does this by starting at the end of the array and iterating towards the start.

### Grid Align

Takes an array of Game Objects, or any objects that have public `x` and `y` properties, and then aligns them based on the grid configuration given to this action.

```hljs js
CopyPhaser.Actions.GridAlign(items, options);

- `items` : The array of items to be updated by this action.
- `options` : The GridAlign Configuration object.
- `width`: The width of the grid in items (not pixels). -1 means lay all items out horizontally, regardless of quantity.
- `height` : The height of the grid in items (not pixels). -1 means lay all items out vertically, regardless of quantity.
- `cellWidth` : The width of the cell, in pixels, in which the item is positioned.
- `cellHeight` : The height of the cell, in pixels, in which the item is positioned.
- `position` : The alignment position. One of the `Phaser.Display.Align` consts such as `TOP_LEFT` or `RIGHT_CENTER`.
- `x` : Optionally place the top-left of the final grid at this coordinate.
- `y` : Optionally place the top-left of the final grid at this coordinate.

### Inc Alpha

The Inc Alpha Action will _add_ the given value to the `alpha` property of an array of Game Objects.

```hljs js
CopyPhaser.Actions.IncAlpha(myObjects, 0.1);

As covered in the Game Objects guide, the `alpha` property controls the alpha value of a Game Object, where 0 is fully transparent and 1 is fully opaque.

Because this Action is additive it means you can call it in an `update` loop, or similar, to keep incrementing the alpha of the objects by small amounts.

\[file: actions/inc alpha update.js\]

### Inc X, Inc Y and Inc XY

The Inc X Action will _add_ the given value to the `x` property of an array of Game Objects.

```hljs js
CopyPhaser.Actions.IncX(myObjects, 10);

In the example above, all Game Objects in the array will have 10 added to their current `x` value.

The Inc Y Action will _add_ the given value to the `y` property of an array of Game Objects.

```hljs js
CopyPhaser.Actions.IncY(myObjects, 10);

In this example, all Game Objects in the array will have 10 added to their current `y` value.

Both of these Actions are additive which means you can call them in an `update` loop, or similar, to keep incrementing the position of the objects by small amounts.

Both Inc X and Inc Y Actions support the optional `step`, `index` and `direction` parameters. See the "Step, Index and Direction" section for details.

The Inc XY Action will _add_ the given values to the `x` and `y` properties of an array of Game Objects.

```hljs js
CopyPhaser.Actions.IncXY(myObjects, 4, 6);

In the example above, all Game Objects in the array will have 4 added to their current `x` value and 6 added to their current `y` value.

This Action is additive which means you can call it in an `update` loop, or similar, to keep incrementing the position of the objects by small amounts.

This Action supports the optional `index` and `direction` parameters. See the "Step, Index and Direction" section for details. It also supports `step`, however this is specified as two different values, `stepX` and `stepY` which are used to multiply the `x` and `y` values respectively:

```hljs js
CopyPhaser.Actions.IncXY(myObjects, 4, 6, 1.25, 1.5);

In the example above, the `x` value will be multiplied by 1.25 and the `y` value will be multiplied by 1.5.

If you wish to set the positions of the Game Objects rather than increment them, see the Set XY Actions instead.

### Place On Circle

The Place on Circle Action takes an array of Game Objects and positions them on evenly spaced points around the circumference of the given circle.

```hljs js
Copyconst circle = new Phaser.Geom.Circle(400, 300, 200);

Phaser.Actions.PlaceOnCircle(myObjects, circle, startAngle, endAngle);

The `circle` argument can be any object that has public `x`, `y` and `radius` properties, however for strongly-typed languages this Action will expect you to pass a `Phaser.Geom.Circle` object, or one that extends it.

The `startAngle` and `endAngle` arguments are optional and allow you to control where the placement starts and ends. The angles are given in radians where the value 0 is to the right and increases clockwise. So, for example, if you wanted to display an arc of Game Objects from the top of the circle to the bottom, you could use:

```hljs js
CopyPhaser.Actions.PlaceOnCircle(myObjects, circle, Math.PI * 1.5, Math.PI * 0.5);

The Game Objects are positioned in the order in which they appear in the array. The first Game Object in the array will be placed at the `startAngle` point on the circle, with the next Game Object placed at the next point around the circle, and so on until it reaches the `endAngle` point. They are positioned by adjusting their `x` and `y` coordinates, so their Origin will play a role in how they are displayed in relation to these points.

If you modify the underlying circle object after calling this Action, it will have no effect on the Game Objects that were positioned on it until you call this Action again. Should you wish to animate the process, you can call this Action in an `update`, tween or timed loop while modifying the circle shape to create some interesting realtime effects.

### Place On Ellipse

The Place on Ellipse Action takes an array of Game Objects and positions them on evenly spaced points around the perimeter of the given ellipse.

```hljs js
Copyconst ellipse = new Phaser.Geom.Ellipse(400, 300, 200, 300);

Phaser.Actions.PlaceOnEllipse(myObjects, ellipse, startAngle, endAngle);

The `ellipse` argument can be any object that has public `x`, `y`, `width` and `height` properties, however for strongly-typed languages this Action will expect you to pass a `Phaser.Geom.Ellipse` object, or one that extends it.

The `startAngle` and `endAngle` arguments are optional and allow you to control where the placement starts and ends. The angles are given in radians where the value 0 is to the right and increases clockwise. So, for example, if you wanted to display an arc of Game Objects from the top of the ellipse to the bottom, you could use:

```hljs js
CopyPhaser.Actions.PlaceOnEllipse(myObjects, ellipse, Math.PI * 1.5, Math.PI * 0.5);

The Game Objects are positioned in the order in which they appear in the array. The first Game Object in the array will be placed at the `startAngle` point on the ellipse, with the next Game Object placed at the next point around the ellipse, and so on until it reaches the `endAngle` point. They are positioned by adjusting their `x` and `y` coordinates, so their Origin will play a role in how they are displayed in relation to these points.

If you modify the underlying ellipse object after calling this Action, it will have no effect on the Game Objects that were positioned on it until you call this Action again. Should you wish to animate the process, you can call this Action in an `update`, tween or timed loop while modifying the ellipse shape to create some interesting realtime effects.

### Place On Line

The Place on Line Action takes an array of Game Objects and positions them on evenly spaced points along the length of the given line.

```hljs js
Copyconst line = new Phaser.Geom.Line(100, 100, 700, 500);

Phaser.Actions.PlaceOnLine(myObjects, line);

The `line` argument can be any object that has public `x1`, `y1`, `x2` and `y2` properties, however for strongly-typed languages this Action will expect you to pass a `Phaser.Geom.Line` object, or one that extends it.

The Game Objects are positioned in the order in which they appear in the array. The first Game Object in the array will be placed at the `x1` and `y1` point on the line, with the next Game Object placed at the next point along the line, and so on until it reaches the `x2` and `y2` point. They are positioned by adjusting their `x` and `y` coordinates, so their Origin will play a role in how they are displayed in relation to these points.

If you modify the underlying line object after calling this Action, it will have no effect on the Game Objects that were positioned on it until you call this Action again. Should you wish to animate the process, you can call this Action in an `update`, tween or timed loop while modifying the line shape to create some interesting realtime effects.

### Place On Rectangle

The Place on Rectangle Action takes an array of Game Objects and positions them on evenly spaced points around the perimeter of the given rectangle.

```hljs js
Copyconst rect = new Phaser.Geom.Rectangle(100, 100, 600, 400);

Phaser.Actions.PlaceOnRectangle(myObjects, rect);

The `rect` argument should be an instance of a `Phaser.Geom.Rectangle` object, or one that extends it.

Placement starts from the top-left of the rectangle and continues around it in a clockwise direction. The Game Objects are positioned in the order in which they appear in the array. The first Game Object in the array will be placed at the top-left of the rectangle, with the next Game Object placed at the next point around the rectangle, and so on until it wraps around to the top-left point again. They are positioned by adjusting their `x` and `y` coordinates, so their Origin will play a role in how they are displayed in relation to these points.

This Action also has an optional `shift` parameter. This allows you to control the starting point of the placement. By default, the first Game Object in the array is positioned at the first point on the perimeter. But the `shift` parameter allows you to start the placement from a different point. For example, if you set `shift` to be 1, then the first Game Object in the array will be placed at the second point on the perimeter, instead of the first. If you set `shift` to be 2, then the first Game Object in the array will be placed at the third point on the perimeter, and so on. The Game Objects will still wrap around the full perimeter of the rectangle, regardless of the `shift` value.

If you modify the underlying rectangle object after calling this Action, it will have no effect on the Game Objects that were positioned on it until you call this Action again. Should you wish to animate the process, you can call this Action in an `update`, tween or timed loop while modifying the rectangle shape to create some interesting realtime effects.

### Place On Triangle

The Place on Triangle Action takes an array of Game Objects and positions them on evenly spaced points around the perimeter of the given triangle.

```hljs js
Copyconst triangle = new Phaser.Geom.Triangle(400, 100, 100, 500, 700, 500);

Phaser.Actions.PlaceOnTriangle(myObjects, triangle);

The `triangle` argument can be any object that has public `x1`, `y1`, `x2`, `y2`, `x3` and `y3` properties, however for strongly-typed languages this Action will expect you to pass a `Phaser.Geom.Triangle` object, or one that extends it.

The Game Objects are positioned in the order in which they appear in the array. The first Game Object in the array will be placed at the `x1` and `y1` point on the triangle, with the next Game Object placed at the next point around the triangle, and so on until it reaches starting point again. The points on each face of the triangle are calculated using the Bresenhams Line Algorithm, with overlaps removed.

The Game Objects are positioned by adjusting their `x` and `y` coordinates, so their Origin will play a role in how they are displayed in relation to these points.

This Action has an optional `stepRate` parameter. This allows you to control the density of the packing of the points. This default to 1. Change it to lower or higher values to modify the spacing between the points.

If you modify the underlying triangle object after calling this Action, it will have no effect on the Game Objects that were positioned on it until you call this Action again. Should you wish to animate the process, you can call this Action in an `update`, tween or timed loop while modifying the triangle shape to create some interesting realtime effects.

### Play Animation

The Play Animation Action will start playing the given animation on all Game Objects in the array.

```hljs js
CopyPhaser.Actions.PlayAnimation(myObjects, key);

This Action will check to ensure that the Game Object has an Animation State component before trying to play the animation. If it doesn't, it will be skipped.

The Action has an optional `ignoreIfPlaying` parameter. If set to `true` it will not start the animation if the Game Object is already playing the given animation. The default value is `false`.

### Property Value Inc

Takes an array of Game Objects, or any objects that have a public property as defined in `key`, and then _adds_ the given value to it. The optional `step` property is applied incrementally, multiplied by each item in the array.

```hljs js
CopyPhaser.Actions.PropertyValueInc(items, key, value, [step], [index], [direction]);

- `items` : The array of items to be updated by this action.
- `key` : The property to be updated.
- `value` : The amount to be added to the property.
- `step` : This is added to the value amount, multiplied by the iteration counter.
- `index` : An optional offset to start searching from within the items array.
- `direction` : The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning.

### Property Value Set

Takes an array of Game Objects, or any objects that have a public property as defined in `key`, and then sets it to the given value. The optional `step` property is applied incrementally, multiplied by each item in the array.

```hljs js
CopyPhaser.Actions.PropertyValueSet(items, key, value, [step], [index], [direction]);

### Random Circle

The Random Circle Action takes an array of Game Objects and positions them at random locations within a circle shape.

Phaser.Actions.RandomCircle(myObjects, circle);

The Game Objects are positioned in the order in which they appear in the array. The first Game Object in the array will be placed at a random point within the circle, with the next Game Object placed at the next random point within the circle, and so on until it reaches the end of the array. They are positioned by adjusting their `x` and `y` coordinates, so their Origin will play a role in how they are displayed in relation to these points.

This Action does not try to fit the bounds of the Game Object within the circle, it simply places them by their position, so it's entirely possible that your Game Objects will extend outside of the circle depending on their size. The random positions chosen from the circle are uniformly distributed, meaning that it's just as likely to return a point within the center of the circle as it is on the edge of the circle.

If you modify the underlying circle object after calling this Action, it will have no effect on the Game Objects that were positioned within it until you call this Action again. Note that calling this Action multiple times will always result in you getting different random positions back.

### Random Ellipse

The Random Ellipse Action takes an array of Game Objects and positions them at random locations within an ellipse shape.

Phaser.Actions.RandomEllipse(myObjects, ellipse);

The Game Objects are positioned in the order in which they appear in the array. The first Game Object in the array will be placed at a random point within the ellipse, with the next Game Object placed at the next random point within the ellipse, and so on until it reaches the end of the array. They are positioned by adjusting their `x` and `y` coordinates, so their Origin will play a role in how they are displayed in relation to these points.

This Action does not try to fit the bounds of the Game Object within the ellipse, it simply places them by their position, so it's entirely possible that your Game Objects will extend outside of the ellipse depending on their size.

If you modify the underlying ellipse object after calling this Action, it will have no effect on the Game Objects that were positioned within it until you call this Action again. Note that calling this Action multiple times will always result in you getting different random positions back.

### Random Line

The Random Line Action takes an array of Game Objects and positions them at random locations along the length of a line segment.

Phaser.Actions.RandomLine(myObjects, line);

The Game Objects are positioned in the order in which they appear in the array. The first Game Object in the array will be placed at a random point on the line, with the next Game Object placed at the next random point on the line, and so on until it reaches the end of the array. They are positioned by adjusting their `x` and `y` coordinates, so their Origin will play a role in how they are displayed in relation to these points.

If you modify the underlying line object after calling this Action, it will have no effect on the Game Objects that were previously positioned on it until you call this Action again. Note that calling this Action multiple times will always result in you getting different random positions back.

### Random Rectangle

The Random Rectangle Action takes an array of Game Objects and positions them at random locations within a rectangle shape.

Phaser.Actions.RandomRectangle(myObjects, rect);

The `rect` argument can be any object that has public `x`, `y`, `width` and `height` properties, however for strongly-typed languages this Action will expect you to pass a `Phaser.Geom.Rectangle` object, or one that extends it.

The Game Objects are positioned in the order in which they appear in the array. The first Game Object in the array will be placed at a random point within the rectangle, with the next Game Object placed at the next random point within the rectangle, and so on until it reaches the end of the array. They are positioned by adjusting their `x` and `y` coordinates, so their Origin will play a role in how they are displayed in relation to these points.

This Action does not try to fit the bounds of the Game Object within the rectangle, it simply places them by their position, so it's entirely possible that your Game Objects will extend outside of the rectangle depending on their size.

If you modify the underlying rectangle object after calling this Action, it will have no effect on the Game Objects that were positioned within it until you call this Action again. Note that calling this Action multiple times will always result in you getting different random positions back.

### Random Triangle

The Random Triangle Action takes an array of Game Objects and positions them at random locations within a triangle shape.

Phaser.Actions.RandomTriangle(myObjects, triangle);

The Game Objects are positioned in the order in which they appear in the array. The first Game Object in the array will be placed at a random point within the triangle, with the next Game Object placed at the next random point within the triangle, and so on until it reaches the end of the array. They are positioned by adjusting their `x` and `y` coordinates, so their Origin will play a role in how they are displayed in relation to these points.

This Action does not try to fit the bounds of the Game Object within the triangle, it simply places them by their position, so it's entirely possible that your Game Objects will extend outside of the triangle depending on their size.

If you modify the underlying triangle object after calling this Action, it will have no effect on the Game Objects that were positioned within it until you call this Action again. Note that calling this Action multiple times will always result in you getting different random positions back.

### Rotate

The Rotate Action will _add_ the given value to the `rotation` property of an array of Game Objects.

```hljs js
CopyPhaser.Actions.Rotate(myObjects, 0.5);

As covered in the Game Objects guide, the `rotation` sets the angle of rotation of a Game Object in radians.

Because this Action is additive it means you can call it in an `update` loop, or similar, and keep incrementing the rotation of the objects by small amounts.

### Rotate Around

Rotates each item around the given point by the given angle in radians.

```hljs js
CopyPhaser.Actions.RotateAround(items, point, angle);

- `items` : An array of Game Objects. The contents of this array are updated by this Action.
- `point` : Any object with public x and y properties.
- `angle` : The angle to rotate by, in radians.

### Rotate Around Distance

Rotates an array of Game Objects around a point by the given angle and distance.

```hljs js
CopyPhaser.Actions.RotateAroundDistance(items, point, angle, distance);

- `items` : An array of Game Objects. The contents of this array are updated by this Action.
- `point` : Any object with public x and y properties.
- `angle` : The angle to rotate by, in radians.
- `distance` : The distance from the point of rotation in pixels.

### Scale X, Y and XY

The Scale Actions will _add_ the given value to the `scaleX` or `scaleY` properties of an array of Game Objects.

```hljs js
CopyPhaser.Actions.ScaleX(myObjects, 0.5);
Phaser.Actions.ScaleY(myObjects, 0.5);
Phaser.Actions.ScaleXY(myObjects, 0.5, 0.25);

In the example above, all Game Objects in the array will have 0.5 added to their current `scaleX` value. The Scale Y Action will do the same for the `scaleY` property. The Scale XY Action will do the same for both the `scaleX` and `scaleY` properties. You can pick whichever action suits your needs.

Because these Actions are additive it means you can call them in an `update` loop, or similar, and keep modifying the scale of the objects by small amounts.

These three Actions support the optional `step`, `index` and `direction` parameters. See the "Step, Index and Direction" section for details.

### Set Alpha

The Set Alpha Action will set the `alpha` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetAlpha(myObjects, 0.5);

The Set Alpha Action does not test to see if the Game Object has an Alpha component. It just sets the property regardless, so be careful about the array of items you pass.

### Set Blend Mode

The Set Blend Mode Action will set the `blendMode` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetBlendMode(myObjects, Phaser.BlendModes.ADD);

Please see the Blend Modes section of the guide for details about the different modes available.

The Set Blend Mode Action does not test to see if the Game Object supports blend modes. It just sets the property regardless, so be careful about the array of items you pass.

This Action supports the optional `index` and `direction` parameters. See the "Step, Index and Direction" section for details. Note that it does not include `step` support.

### Set Depth

The Set Depth Action will set the `depth` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetDepth(myObjects, 100);

As covered in the Game Objects guide, the `depth` property controls the rendering order of a Game Object, where the higher the value, the more it will be rendered on-top of other Game Objects.

The Set Depth Action does not test to see if the Game Object has a Depth component. It just sets the property regardless, so be careful about the array of items you pass.

### Set Hit Area

Passes all provided Game Objects to the Input Manager to enable them for input with identical areas and callbacks.

```hljs js
CopyPhaser.Actions.SetHitArea(items, [hitArea], [callback]);

- `items` : An array of Game Objects. The contents of this array are updated by this Action.
- `hitArea` : Either an input configuration object, or a geometric shape that defines the hit area for the Game Object. If not given it will try to create a Rectangle based on the texture frame.
- `callback` : The callback that determines if the pointer is within the Hit Area shape or not. If you provide a shape you must also provide a callback.

### Set Rotation

The Set Rotation Action will set the `rotation` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetRotation(myObjects, 1.5707);

The Set Rotation Action does not test to see if the Game Object has a Transform component. It just sets the property regardless, so be careful about the array of items you pass.

### Set Scale

The Set Scale Action will set the `scaleX` and `scaleY` properties of an array of Game Objects to the given values:

```hljs js
CopyPhaser.Actions.SetScale(myObjects, 0.5, 0.25);

In the example above, all Game Objects in the array will have their `scaleX` property set to 0.5 and their `scaleY` property set to 0.25.

The Set ScaleX Action will set the `scaleX` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetScaleX(myObjects, 0.5);

In the example above, all Game Objects in the array will have their `scaleX` property set to 0.5. Their `scaleY` properties will remain untouched.

The Set ScaleY Action will set the `scaleY` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetScaleY(myObjects, 0.25);

In the example above, all Game Objects in the array will have their `scaleY` property set to 0.25. Their `scaleX` properties will remain untouched.

The Set Scale Actions do not test to see if the Game Object has a Transform component. It just sets the properties regardless, so be careful about the array of items you pass.

These Actions support the optional `stepX`, `stepY`, `index` and `direction` parameters. See the "Step, Index and Direction" section for details.

### Set Scroll Factor

The Set Scroll Factor Action will set the `scrollFactorX` and `scrollFactorY` properties of an array of Game Objects to the given values:

```hljs js
CopyPhaser.Actions.SetScrollFactor(myObjects, 1, 0);

In the example above, all Game Objects in the array will have their `scrollFactorX` property set to 1 and their `scrollFactorY` property set to 0.

The Set ScrollFactorX Action will set the `scrollFactorX` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetScrollFactorX(myObjects, 1);

In the example above, all Game Objects in the array will have their `scrollFactorX` property set to 1. Their `scrollFactorY` properties will remain untouched.

The Set ScrollFactorY Action will set the `scrollFactorY` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetScrollFactorY(myObjects, 0);

In the example above, all Game Objects in the array will have their `scrollFactorY` property set to 0.25. Their `scrollFactorX` properties will remain untouched.

The Set Scroll Factor Actions do not test to see if the Game Object has a Transform component. It just sets the properties regardless, so be careful about the array of items you pass.

### Set Tint

The Set Tint Action take an array of Game Objects and call the `setTint` method on each of them:

```hljs js
CopyPhaser.Actions.SetTint(myObjects, 0xff0000);

As covered in the Game Objects guide, tinting allows you to change the color of a Game Object by applying a tint to it. A tint works by taking the original pixel color values from the Game Object, and then multiplying each of them by the color value of the tint. You can provide either one color value, in which case the whole Game Object will be tinted in that color. Or you can provide a color per corner:

```hljs js
CopyPhaser.Actions.SetTint(myObjects, 0xff0000, 0x00ff00, 0x0000ff, 0xff00ff, 0x00ffff);

In the example above the Game Object will be tinted with a red color in the top-left corner, green in the top-right, blue in the bottom-left and purple in the bottom-right. The colors are blended together across the extent of the Game Object.

The Set Tint Action does not test to see if the Game Object has a Tint component. It just sets the property regardless, so be careful about the array of items you pass.

### Set Visible

The Set Visible Action will set the `visible` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetVisible(myObjects, false);

As covered in the Game Objects guide, the `visible` property controls if a Game Object is rendered or not.

### Set XY

The Set XY Action will set the `x` and `y` properties of an array of Game Objects to the given values:

```hljs js
CopyPhaser.Actions.SetXY(myObjects, 100, 200);

In the example above, all Game Objects in the array will have their `x` property set to 100 and their `y` property set to 200.

The Set X Action will set the `x` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetX(myObjects, 100);

In the example above, all Game Objects in the array will have their `x` property set to 100. Their `y` properties will remain untouched.

The Set Y Action will set the `y` property of an array of Game Objects to the given value:

```hljs js
CopyPhaser.Actions.SetY(myObjects, 200);

In the example above, all Game Objects in the array will have their `y` property set to 200. Their `x` properties will remain untouched.

The Set XY Actions do not test to see if the Game Object has a Transform component. It just sets the properties regardless, so be careful about the array of items you pass.

If you wish to increment the positions of the Game Objects rather than set them, see the Inc X, Inc Y and Inc XY Actions instead.

### Shift Position

The Shift Position Action takes an array of Game Objects and then iterates through them, adjusting their `x` and `y` positions to be that of the previous entry in the array. The first Game Object in the array is known as the 'head' item. The position of the head is set to the `x` and `y` values you pass to this Action:

```hljs js
CopyPhaser.Actions.ShiftPosition(myObjects, 400, 300);

In the example above, the first Game Object in the array will be positioned at 400 x 300. The next Game Object in the array will have its position set to whatever position the first Game Object had before it was moved, and so on. At the end of the array, the last Game Object will have its position set to that of the second-last Game Object.

You can pass in the `direction` parameter, which controls the iteration order. The default value is 0, which means from first to last in the input array. If you pass in a value of 1 it iterates backwards, from the final element in the array to the first.

The Action returns a Vector2 that contains the position of the last Game Object in the array before the Action was called.

A good way to think about this Action is with the classic Nokia Snake game. When the snake moves, the 'head' of the snake moves in one direction and then all tail pieces shift to be in the position of the previous tail segment. This Action can be used to replicate this effect.

### Shuffle

The Shuffle Action will take an array, which can actually be on anything, but is primarily meant for Game Objects, and shuffles the contents of it:

```hljs js
CopyPhaser.Actions.Shuffle(myObjects);

The contents of the array are shuffled in place. No new array is created.

### Smooth Step and Smoother Step

This is convenient for creating a sequence of transitions using `smoothstep` to interpolate each segment as an alternative to using more sophisticated or expensive interpolation techniques.

```hljs js
CopyPhaser.Actions.SmoothStep(items, property, min, max, [inc]);
Phaser.Actions.SmootherStep(items, property, min, max, [inc]);

- `items` : An array of Game Objects. The contents of this array are updated by this Action.
- `property` : The property of the Game Object to interpolate.
- `min` : The minimum interpolation value.
- `max` : The maximum interpolation value.
- `inc` : Should the property value be incremented ( `true`) or set ( `false`)?

### Toggle Visible

The Toggle Visible Action will take an array of Game Objects and then toggle the 'visible' state of each of them:

```hljs js
CopyPhaser.Actions.ToggleVisible(myObjects);

If the Game Object is visible it will be set to invisible. If it is invisible it will be set to visible.

The Toggle Visible Action does not test to see if the Game Object has a visible property. It just sets the property regardless, so be careful about the array of items you pass.

### Wrap In Rectangle

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Making your first Phaser Game

Animations

---

# https://docs.phaser.io/phaser/getting-started/making-your-first-phaser-game

# Making your first Phaser Game

Learn how to make your first Phaser game in this tutorial

Welcome to our first tutorial on Making a Game with Phaser 3. Here we will learn how to create a small game involving a player running and jumping around platforms, collecting stars and avoiding baddies. While going through this process we'll explain some of the core features of the framework.

## Requirements

Download this zip file which contains each step of this tutorial in code and the assets that go with it.

You need to have a very basic knowledge of JavaScript.

Also make sure you go through the Getting Started Guide, it will show you how to download the framework, set up a local development environment, and give you a glimpse of the structure of a Phaser project and its core functions.

If you've gone through the Getting Started Guide you will have downloaded Phaser and got everything set-up and ready to code. Download the resources for this tutorial and unzip them into your web root.

Open the `part1.html` page in your editor of choice and let's have a closer look at the code. After a little boilerplate HTML that includes Phaser the code structure looks like this:

```hljs js
Copyvar config = {
type: Phaser.AUTO,
width: 800,
height: 600,
scene: {
preload: preload,
create: create,
update: update
}
};

var game = new Phaser.Game(config);

function preload ()
{
}

function create ()
{
}

function update ()
{
}

The config object is how you configure your Phaser Game. There are lots of options that can be placed in this object and as you expand on your Phaser knowledge you'll encounter more of them. But in this tutorial we're just going to set the renderer, dimensions and a default Scene.

An instance of a Phaser.Game object is assigned to a local variable called `game` and the configuration object is passed to it. This will start the process of bringing Phaser to life.

The `type` property can be either `Phaser.CANVAS`, `Phaser.WEBGL`, or `Phaser.AUTO`. This is the rendering context that you want to use for your game. The recommended value is `Phaser.AUTO` which automatically tries to use WebGL, but if the browser or device doesn't support it it'll fall

The values `400` and `300` are the x and y coordinates of the image. Why 400 and 300? It's because in Phaser 3 all Game Objects are positioned based on their center by default. The background image is 800 x 600 pixels in size, so if we were to display it centered at 0 x 0 you'd only see the bottom-right corner of it. If we display it at 400 x 300 you see the whole thing.

**Hint:** You can use `setOrigin` to change this. For example the code: `this.add.image(0, 0, 'sky').setOrigin(0, 0)` would reset the drawing position of the image to the top-left. In Phaser 2 this was achieved via the `anchor` property but in Phaser 3 it's the `originX` and `originY` properties instead.

The order in which game objects are displayed matches the order in which you create them. So if you wish to place a star sprite above the background, you would need to ensure that it was added as an image second, after the sky image:

```hljs js
Copyfunction create ()
{
this.add.image(400, 300, 'sky');
this.add.image(400, 300, 'star');
}

If you put the `star` image first it will be covered-up by the sky image.

# World Building

Under the hood `this.add.image` is creating a new Image Game Object and adding it to the current Scenes display list. This list is where all of your Game Objects live. You could position the image anywhere and Phaser will not mind. Of course, if it's outside of the region 0x0 to 800x600 then you're not going to visually see it, because it'll be "off screen", but it will still exist within the Scene.

The Scene itself has no fixed size and extends infinitely in all directions. The Camera system controls your view into the Scene and you can move and zoom the active camera as required. You can also create new cameras for other views into the Scene. This topic is beyond the scope of this specific tutorial, suffice to say the camera system in Phaser 3 is significantly more powerful than in v2. Things that were literally not possible before now are.

For now let's build up the Scene by adding a background image and some platforms. Here is the updated `create` function:

```hljs js
Copyvar platforms;

function create ()
{
this.add.image(400, 300, 'sky');

platforms = this.physics.add.staticGroup();

platforms.create(400, 568, 'ground').setScale(2).refreshBody();

platforms.create(600, 400, 'ground');
platforms.create(50, 250, 'ground');
platforms.create(750, 220, 'ground');
}

Glancing quickly at the code you'll see a call to `this.physics`. This means we're using the Arcade Physics system, but before we can do that we need to add it to our Game Config to tell Phaser our game requires it. So let's update that to include physics support. Here is the revised game config:

```hljs js
Copyvar config = {
type: Phaser.AUTO,
width: 800,
height: 600,
physics: {
default: 'arcade',
arcade: {
gravity: { y: 300 },
debug: false
}
},
scene: {
preload: preload,
create: create,
update: update
}
};

The new addition is the `physics` property. With this code in place if you run it, which you'll find as `part4.html` in the tutorial zip file, you should see a much more game-like scene:

We've got a backdrop and some platforms, but how exactly are those platforms working?

# The Platforms

We just added a bunch of code to our `create` function that deserves a more detailed explanation. First, this part:

```hljs js
Copyplatforms = this.physics.add.staticGroup();

This creates a new Static Physics Group and assigns it to the local variable `platforms`. In Arcade Physics there are two types of physics bodies: Dynamic and Static. A dynamic body is one that can move around via forces such as velocity or acceleration. It can bounce and collide with other objects and that collision is influenced by the mass of the body and other elements.

In stark contrast, a Static Body simply has a position and a size. It isn't touched by gravity, you cannot set velocity on it and when something collides with it, it never moves. Static by name, static by nature. And perfect for the ground and platforms that we're going to let the player run around on.

But what is a Group? As their name implies they are ways for you to group together similar objects and control them all as one single unit. You can also check for collision between Groups and other game objects. Groups are capable of creating their own Game Objects via handy helper functions like `create`. A Physics Group will automatically create physics enabled children, saving you some leg-work in the process.

With our platform Group made we can now use it to create the platforms:

```hljs js
Copyplatforms.create(400, 568, 'ground').setScale(2).refreshBody();

platforms.create(600, 400, 'ground');
platforms.create(50, 250, 'ground');
platforms.create(750, 220, 'ground');

As we saw previously it creates this scene:

During our preload we imported a 'ground' image. It's a simple green rectangle, 400 x 32 pixels in size and will serve for our basic plaform needs:

The first line of code above adds a new ground image at 400 x 568 (remember, images are positioned based on their center) - the problem is that we need this platform to span the full width of our game, otherwise the player will just drop off the sides. To do that we scale it x2 with the function `setScale(2)`. It's now 800 x 64 in size, which is perfect for our needs. The call to `refreshBody()` is required because we have scaled a _static_ physics body, so we have to tell the physics world about the changes we made.

The ground is scaled and in place, so it's time for the other platforms:

```hljs js
Copyplatforms.create(600, 400, 'ground');
platforms.create(50, 250, 'ground');
platforms.create(750, 220, 'ground');

The process is exactly the same as before, only we don't need to scale these platforms as they're the right size already.

3 platforms are placed around the screen, the right distances apart to allow the player to leap up to them.

So let's add our player.

# Ready Player One

We've got some lovely tempting platforms, but no-one to run around them. Let's rectify that.

Create a new variable called `player` and add the following code to the `create` function. You can see this in `part5.html`:

```hljs js
Copyplayer = this.physics.add.sprite(100, 450, 'dude');

player.setBounce(0.2);
player.setCollideWorldBounds(true);

this.anims.create({
key: 'left',
frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
frameRate: 10,
repeat: -1
});

this.anims.create({
key: 'turn',
frames: [ { key: 'dude', frame: 4 } ],
frameRate: 20
});

this.anims.create({
key: 'right',
frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
frameRate: 10,
repeat: -1
});

There are two separate things going on here: the creation of a Physics Sprite and the creation of some animations that it can use.

### Physics Sprite

The first part of the code creates the sprite:

This creates a new sprite called `player`, positioned at 100 x 450 pixels from the bottom of the game. The sprite was created via the Physics Game Object Factory ( `this.physics.add`) which means it has a Dynamic Physics body by default.

After creating the sprite it is given a slight bounce value of 0.2. This means when it lands after jumping it will bounce ever so slightly. The sprite is then set to collide with the world bounds. The bounds, by default, are on the outside of the game dimensions. As we set the game to be 800 x 600 then the player won't be able to run outside of this area. It will stop the player from being able to run off the edges of the screen or jump through the top.

### Animations

If you glance

There are 9 frames in total, 4 for running left, 1 for facing the camera and 4 for running right. Note: Phaser supports flipping sprites to save on animation frames, but for the sake of this tutorial we'll keep it old school.

We define two animations called 'left' and 'right'. Here is the left animation:

```hljs js
Copythis.anims.create({
key: 'left',
frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
frameRate: 10,
repeat: -1
});

The 'left' animation uses frames 0, 1, 2 and 3 and runs at 10 frames per second. The 'repeat -1' value tells the animation to loop.

This is our standard run-cycle and we repeat it for running in the opposite direction, using the key 'right' and a final one for 'turn'.

**Extra Info:** In Phaser 3 the Animation Manager is a global system. Animations created within it are globally available to all Game Objects. They share the base animation data while managing their own timelines. This allows you to define a single animation once and apply it to as many Game Objects as you require. This is different to Phaser 2 where animations belonged specifically to the Game Objects they were created on.

# Body Velocity: A world of physics

Phaser has support for a variety of different physics systems, each acting as a plugin available to any Phaser Scene. At the time of writing it ships with Arcade Physics, Impact Physics and Matter.js Physics. For the sake of this tutorial we will be using the Arcade Physics system for our game, which is simple and light-weight, perfect for mobile browsers.

When a Physics Sprite is created it is given a `body` property, which is a reference to its Arcade Physics Body. This represents the sprite as a physical body in Phasers Arcade Physics engine. The body object has a lot of properties and methods that we can play with.

For example, to simulate the effects of gravity on a sprite, it's as simple as writing:

```hljs js
Copyplayer.body.setGravityY(300);

This is an arbitrary value, but logically, the higher the value, the heavier your object feels and the quicker it falls. If you add this to your code or run `part5.html` you will see that the player falls down without stopping, completely ignoring the ground we created earlier:

The reason for this is that we're not yet testing for collision between the ground and the player.

We already told Phaser that our ground and platforms would be static bodies. Had we not done that, and created dynamic ones instead, then when the player collided with them it would stop for a moment and then everything would have collapsed. This is because unless told otherwise, the ground sprite is a moving physical object and when the player hits it, the resulting force of the collision is applied to the ground, therefore, the two bodies exchange their velocities and ground starts falling as well.

In order to allow the player to collide with the platforms we can create a Collider object. This object monitors two physics objects (which can include Groups) and checks for collisions or overlap between them. If that occurs it can then optionally invoke your own callback, but for the sake of just colliding with platforms we don't require that:

```hljs js
Copythis.physics.add.collider(player, platforms);

The Collider is the one that performs the magic. It takes two objects and tests for collision and performs separation against them. In this case we're giving it the player sprite and the platforms Group. It's clever enough to run collision against all Group members, so this one call will collide against the ground and all platforms. The result is a firm platform that doesn't collapse:

# Controlling the player with the keyboard

Colliding is all good and well, but we really need the player to move. You would probably think of heading to the documentation and searching about how to add an event listener, but that is not necessary here. Phaser has a built-in Keyboard manager and one of the benefits of using that is this handy little function:

```hljs js
Copycursors = this.input.keyboard.createCursorKeys();

This populates the cursors object with four properties: up, down, left, right, that are all instances of Key objects. Then all we need to do is poll these in our `update` loop:

```hljs js
Copyif (cursors.left.isDown)
{
player.setVelocityX(-160);

player.anims.play('left', true);
}
else if (cursors.right.isDown)
{
player.setVelocityX(160);

player.anims.play('right', true);
}
else
{
player.setVelocityX(0);

player.anims.play('turn');
}

if (cursors.up.isDown && player.body.touching.down)
{
player.setVelocityY(-330);
}

Although we've added a lot of code it should all be pretty readable.

The first thing it does is check to see if the left key is being held down. If it is we apply a negative horizontal velocity and start the 'left' running animation. If they are holding down 'right' instead we literally do the opposite. By clearing the velocity and setting it in this manner, every frame, it creates a 'stop-start' style of movement.

The player sprite will move only when a key is held down and stop immediately they are not. Phaser also allows you to create more complex motions, with momentum and acceleration, but this gives us the effect we need for this game. The final part of the key check sets the animation to 'turn' and zero the horizontal velocity if no key is held down.

### Jump to it

The final part of the code adds the ability to jump. The up cursor is our jump key and we test if that is down. However we also test if the player is touching the floor, otherwise they could jump while in mid-air.

If both of these conditions are met we apply a vertical velocity of 330 px/sec sq. The player will fall to the ground automatically because of gravity. With the controls in place we now have a game world we can explore. Load up part7.html and have a play. Try tweaking values like the 330 for the jump to lower and higher values to see the effect it will have.

# Stardust

It's time to give our little game a purpose. Let's drop a sprinkling of stars into the scene and allow the player to collect them. To achieve this we'll create a new Group called 'stars' and populate it. In our create function we add the following code (this can be seen in `part8.html`):

```hljs js
Copystars = this.physics.add.group({
key: 'star',
repeat: 11,
setXY: { x: 12, y: 0, stepX: 70 }
});

stars.children.iterate(function (child) {

child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});

The process is similar to when we created the platforms Group. As we need the stars to move and bounce we create a dynamic physics group instead of a static one.

Groups are able to take configuration objects to aid in their setup. In this case the group configuration object has 3 parts: First it sets the texture key to be the star image. This means that any children created as a result of the config object will all be given the star texture by default. Then it sets the repeat value to be 11. Because it creates 1 child automatically, repeating 11 times means we'll get 12 in total, which is just what we need for our game.

The final part is `setXY` \- this is used to set the position of the 12 children the Group creates. Each child will be placed starting at x: 12, y: 0 and with an x step of 70. This means that the first child will be positioned at 12 x 0, the second one is 70 pixels on from that at 82 x 0, the third one is at 152 x 0, and so on. The 'step' values are a really handy way of spacing out a Groups children during creation. The value of 70 is chosen because it means all 12 children will be perfectly spaced out across the screen.

The next piece of code iterates all children in the Group and gives them a random Y bounce value between 0.4 and 0.8. The bounce range is between 0, no bounce at all, and 1, a full bounce. Because the stars are all spawned at y 0 gravity is going to pull them down until they collide with the platforms or ground. The bounce value means they'll randomly bounce back up again until finally settling to rest.

If we were to run the code like it is now the stars would fall through the bottom of the game and out of sight. To stop that we need to check for their collision against the platforms. We can use another Collider object to do this:

```hljs js
Copythis.physics.add.collider(stars, platforms);

As well as doing this we will also check to see if the player overlaps with a star or not:

```hljs js
Copythis.physics.add.overlap(player, stars, collectStar, null, this);

This tells Phaser to check for an overlap between the player and any star in the stars Group. If found then they are passed to the 'collectStar' function:

```hljs js
Copyfunction collectStar (player, star)
{
star.disableBody(true, true);
}

Quite simply the star has its physics body disabled and its parent Game Object is made inactive and invisible, which removes it from display. Running the game now gives us a player that can dash about, jump, bounce off the platforms and collecting the stars that fall from above. Not bad for a few lines of hopefully mostly quite readable code :)

# A Score to settle

There are two final touches we're going to add to our game: an enemy to avoid that can kill the player, and a score when you collect the stars. First, the score.

To do this we'll make use of a Text Game Object. Here we create two new variables, one to hold the actual score and the text object itself:

```hljs js
Copyvar score = 0;
var scoreText;

The `scoreText` is set-up in the `create` function:

```hljs js
CopyscoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

16 x 16 is the coordinate to display the text at. 'score: 0' is the default string to display and the object that follows contains a font size and fill color. By not specifying which font we'll actually use the Phaser default, which is Courier.

Next we need to modify the `collectStar` function so that when the player picks-up a star their score increases and the text is updated to reflect this:

```hljs js
Copyfunction collectStar (player, star)
{
star.disableBody(true, true);

score += 10;
scoreText.setText('Score: ' + score);
}

So 10 points are added for every star and the `scoreText` is updated to show this new total. If you run `part9.html` you will see the stars fall and the score increase as you collect them.

In the final part we'll add some baddies.

# Bouncing Bombs

In order to round our game out it's time to add some baddies. This will give a nice element of challenge to the game, something that was previously missing.

The idea is this: When you collect all the stars the first time it will release a bouncing bomb. The bomb will just randomly bounce around the level and if you collide with it, you die. All of the stars will respawn so you can collect them again, and if you do, it will release another bomb. This will give the player a challenge: get as high a score as possible without dying.

The first thing we need is a Group for the bombs and a couple of Colliders:

```hljs js
Copybombs = this.physics.add.group();

this.physics.add.collider(bombs, platforms);

this.physics.add.collider(player, bombs, hitBomb, null, this);

The bombs will of course bounce off the platforms, and if the player hits them we'll call the `hitBomb` function. All that will do is stop the game and turn the player red:

```hljs js
Copyfunction hitBomb (player, bomb)
{
this.physics.pause();

player.setTint(0xff0000);

player.anims.play('turn');

gameOver = true;
}

So far, so good, but we need to release a bomb. To do that we modify the `collectStar` function:

score += 10;
scoreText.setText('Score: ' + score);

if (stars.countActive(true) === 0)
{
stars.children.iterate(function (child) {

child.enableBody(true, child.x, 0, true, true);

var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

var bomb = bombs.create(x, 16, 'bomb');
bomb.setBounce(1);
bomb.setCollideWorldBounds(true);
bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

}
}

We use a Group method called `countActive` to see how many stars are left alive. If it's none then the player has collected them all, so we use the iterate function to re-enable all of the stars and reset their y position to zero. This will make all of the stars drop from the top of the screen again.

The next part of the code creates a bomb. First we pick a random x coordinate for it, always on the opposite side of the screen to the player, just to give them a chance. Then the bomb is created, it's set to collide with the world, bounce and have a random velocity.

The end result is a nice little bomb sprite that rebounds around the screen. Small enough to be easy to avoid, at the start, but as soon as the numbers build up it becomes a lot harder!

And our game is done 😊

# Conclusion

You have now learned how to create a sprite with physics properties, to control its motion and to make it interact with other objects in a small game world. There are lots more things you can do to enhance this. Why not expand the size of the level and allow the camera to scroll? Maybe add in different baddie types, different value pick-ups, or give the player a health bar.

Or for a non-violent style game you could make it a speed-run and simply challenge them to collect the stars as quickly as possible.

With the help of what you have learned in this tutorial and the hundreds of examples available to you, you should now have a solid foundation for a future project. But as always if you have questions, need advice or want to share what you've been working on then feel free to ask for help in the Phaser forum.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Project Templates

Actions

---

# https://docs.phaser.io/phaser/concepts/device

# Device

Device

Get information of device, built-in properties of phaser.

## OS

- Platform

```hljs javascript
Copyscene.sys.game.device.os.android // Is running on android?
scene.sys.game.device.os.chromeOS // Is running on chromeOS?
scene.sys.game.device.os.cordova // Is the game running under Apache Cordova?
scene.sys.game.device.os.crosswalk // Is the game running under the Intel Crosswalk XDK?
scene.sys.game.device.os.desktop // Is running on a desktop?
scene.sys.game.device.os.ejecta // Is the game running under Ejecta?
scene.sys.game.device.os.electron // Is the game running under GitHub Electron?
scene.sys.game.device.os.iOS // Is running on iOS?
scene.sys.game.device.os.iPad // Is running on iPad?
scene.sys.game.device.os.iPhone // Is running on iPhone?
scene.sys.game.device.os.kindle // Is running on an Amazon Kindle?
scene.sys.game.device.os.linux // Is running on linux?
scene.sys.game.device.os.macOS // Is running on macOS?
scene.sys.game.device.os.node // Is the game running under Node.js?
scene.sys.game.device.os.nodeWebkit // Is the game running under Node-/Webkit?
scene.sys.game.device.os.webApp // Set to true if running as a WebApp, i.e. within a WebView
scene.sys.game.device.os.windows // Is running on windows?
scene.sys.game.device.os.windowsPhone // Is running on a Windows Phone?

- Major version number of ios

```hljs javascript
Copyvar version = scene.sys.game.device.os.iOSVersion;

- Pixel-ratio of the host device

```hljs javascript
Copyvar pixelRatio = scene.sys.game.device.os.pixelRatio;

## Browser

```hljs javascript
Copyscene.sys.game.device.browser.chrome // Is running in Chrome?
scene.sys.game.device.browser.edge // Is running in Microsoft Edge browser?
scene.sys.game.device.browser.firefox // Is running in Firefox?
scene.sys.game.device.browser.ie // Is running in Internet Explorer 11 or less (not Edge)?
scene.sys.game.device.browser.mobileSafari // Is running in Mobile Safari?
scene.sys.game.device.browser.opera // Is running in Opera?
scene.sys.game.device.browser.safari // Is running in Safari?
scene.sys.game.device.browser.silk // Is running in the Silk browser (as used on the Amazon Kindle)?
scene.sys.game.device.browser.trident // Is running a Trident version of Internet Explorer (IE11+)?

- Version

```hljs javascript
Copyvar version = scene.sys.game.device.browser.chromeVersion;
var version = scene.sys.game.device.browser.firefoxVersion;
var version = scene.sys.game.device.browser.ieVersion;
var version = scene.sys.game.device.browser.safariVersion;
var version = scene.sys.game.device.browser.tridentVersion;

## Audio

```hljs javascript
Copyvar flac = scene.sys.game.device.audio.flac;
var aac = scene.sys.game.device.audio.aac;
var dolby = scene.sys.game.device.audio.dolby;
var m4a = scene.sys.game.device.audio.m4a;
var mp3 = scene.sys.game.device.audio.mp3;
var ogg = scene.sys.game.device.audio.ogg;
var opus = scene.sys.game.device.audio.opus;
var wav = scene.sys.game.device.audio.wav;
var webm = scene.sys.game.device.audio.webm;
var webAudio = scene.sys.game.device.audio.webAudio;
var audioData = scene.sys.game.device.audio.audioData;

## Video

```hljs javascript
Copyvar h264Video = scene.sys.game.device.video.h264; // Can this device play h264 mp4 video files?
var hlsVideo = scene.sys.game.device.video.hls; // Can this device play hls video files?
var mp4Video = scene.sys.game.device.video.mp4; // Can this device play h264 mp4 video files?
var m4vVideo = scene.sys.game.device.video.m4v; // Can this device play m4v (typically mp4) video files?
var oggVideo = scene.sys.game.device.video.ogg; // Can this device play ogg video files?
var vp9Video = scene.sys.game.device.video.vp9; // Can this device play vp9 video files?
var webmVideo = scene.sys.game.device.video.webm; // Can this device play webm video files?

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Data Manager

Display

---

# https://docs.phaser.io/phaser/concepts/events

# Events

Events

Events are a way for one system to send a signal, that other systems may listen for and then act upon. For example, if the player clicks their mouse on your game, that will internally emit a sequence of events within Phaser. Or if the Loader finishes downloading a file, that will emit a related event.

Events are a core part of Phaser and you'll find them used throughout the framework. They are used both internally, for one system to talk to another, and externally, for your game code to listen for and respond to. There are hundreds of such events that Phaser will emit during the course of a game.

Events are always emitted by what is known as an Event Emitter. Most systems and Game Objects within Phaser are Event Emitters, meaning they can emit events directly and you can hook event handlers to them.

We adopted this practise because events are extremely common in the web browser. Most browser APIs are event-driven, so it made sense to follow this pattern. It also means that you can easily extend Phaser by adding your own events, or listening for existing ones and responding to them.

## The Event Emitter

Phaser 3 uses a slightly modified eventemitter3, as Phaser.Events.EventEmitter.

- Event names are strings
- The emitter chooses a default context ( `this` value), but listeners can override this
- The emitter chooses the callback arguments
- `on()` is the same as `addListener()`
- `off()` is the same as `removeListener()`
- `off()` with no arguments is the same as `removeAllListeners()`
- `off()` can match event name; event name and listener; or event name, listener, and context; but no other combination
- A listener added with `once()` is removed after its first call

All of Phaser's events (names, default context, arguments) are defined in the API.

Some Phaser classes (e.g., GameObject) extend Phaser.Events.EventEmitter directly, and some (e.g., Game, Scene) hold an emitter on their `events` property.

You can emit and listen to your own events on these objects, but don't use any of Phaser's event names (e.g., "update"), and never remove listeners that aren't yours. Be careful of removing more than you meant to with `off()`.

```hljs js
Copy// NO (removes all listeners on all events)
this.game.events.off();

// NO (removes all listeners to `step`)
this.game.events.off('step');

// YES (same arguments used on `on()`)
this.game.events.off('step', this.onStep, this);

Remember that event emitters just hook up functions to other functions. The emitter doesn't know or care about any state associated with the listener. It's up to you to remove listeners when appropriate.

### Get event emitter

- Scene:

```hljs js
Copyvar ee = scene.events;

- Game object:

```hljs js
Copyvar ee = gameObject;

### Attach listener

```hljs js
Copyee.on(eventName, callback, scope);
ee.once(eventName, callback, scope); // only fire listeners one time

Alias

```hljs js
Copyee.addListener(eventName, callback, scope);
ee.addListener(eventName, callback, scope, true); // only fire listeners one time

### Fire event

```hljs js
Copyee.emit(eventName, parameter0, ...);

### Remove listeners

- Remove a listener

```hljs js
Copyee.off(eventName, callback, scope);
ee.off(eventName, callback, scope, true); // only remove one-time listeners

or

```hljs js
Copyee.removeListener(eventName, callback, scope);
ee.removeListener(eventName, callback, scope, true); // only remove one-time listeners

- Remove listeners of an event

```hljs js
Copyee.off(eventName);

```hljs js
Copyee.removeListener(eventName);

- Remove listeners of all events

```hljs js
Copyee.removeAllListeners();

### Get listeners count

```hljs js
Copyvar count = ee.listenerCount(eventName);
//var noListener = (ee.listenerCount(eventName) === 0);

### Get listeners

```hljs js
Copyvar listeners = ee.listeners(eventName);

### Get event names

```hljs js
Copyvar names = ee.eventNames();

### Listener

```hljs js
Copy{
fn: callback,
context: scope,
once: once
}

## Custom event emitter class

```hljs js
Copyclass MyEventEmitter extends Phaser.Events.EventEmitter {
// construct() {
// super();
// }

// destroy() {
// super.destroy();
// }
}

## Author Credits

Content on this page includes work by:

- RexRainbow
- samme

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Display

FX

---

# https://docs.phaser.io/phaser/concepts/audio

# Audio

A Guide to Phaser Audio

Web Browsers offer the ability to play audio in two different ways. The first is known as the Audio Tag. This is an HTML tag you can put on a web page that offers UI controls to play and pause/resume audio files. The second is known as the Web Audio API. This is a JavaScript API that allows you to create and control audio files directly from your code. It's a much more powerful system than the Audio Tag, but is not supported by all browsers.

Phaser has a built-in Sound Manager that allows you to play audio files in your game. It will automatically detect if the browser supports the Web Audio API and if it does, it will use that. If not, it will fall

## Configuration

### Web audio

Web audio is the default audio context.

### Disable web audio

```hljs js
Copyvar config = {
// ....
audio: {
disableWebAudio: true,
},
// ....
};
var game = new Phaser.Game(config);

### Disable all audio

```hljs js
Copyvar config = {
// ....
audio: {
noAudio: true,
},
// ....
};
var game = new Phaser.Game(config);

## Loading audio files

See details in Media container formats and Web audio codec guide. If you're publishing a game you should probably support at least MP3.

When loading audio, Phaser matches the media type (inferred from the URL or given by you) with the device's support for that type. If there's no match, **nothing** is downloaded and if you try to create or play a sound with that key it will fail with an error.

```hljs js
Copythis.load.audio(key, urls, config, xhrSettings);

- `key` : The key to use for this file, or a file configuration object, or array of them.
- `urls` : The absolute or relative URL to load the audio files from.
- `config` : An object containing an instances property for HTML5Audio. Defaults to 1.
- `xhrSettings` : An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.

### Decode audio

Decode audio data into a format ready for playback via Web Audio. The audio data can be a base64 encoded string, an audio media-type data uri, or an ArrayBuffer instance.

```hljs js
Copythis.sound.decodeAudio(key, audioData);

- `audioData` : Audio data
- A base64 encoded string
- An audio media-type data uri
- An ArrayBuffer instance

Or

```hljs js
Copythis.sound.decodeAudio(audioFiles);

- `audioFiles` : An array of `{key, data}`
- `data` : Audio data
- A base64 encoded string
- An audio media-type data uri
- An ArrayBuffer instance

### Decoded events

- Finished decoding an audio data

```hljs js
Copythis.sound.on("decoded", key);

- Finished decoding all audio data

```hljs js
Copythis.sound.on("decodedall");

## Unlock audio

Unlocks Web Audio API/HTML5 Audio loading on the initial input event.

```hljs js
Copythis.sound.unlock();

## Play sound

Sound instance will be destroyed when playback ends.

```hljs js
Copythis.sound.play(key);

or

```hljs js
Copythis.sound.play(key, config);
/*
var sound = this.sound.add(key);
sound.play(config);
*/

## Position of the Spatial Audio listener

Sets the `x` and `y` position of the Spatial Audio listener on this Web Audios context.

```hljs js
Copythis.sound.setListenerPosition(x, y);

- `x`, `y` : The x/y position of the Spatial Audio listener. Default value is center of the game canvas.

Web audio only

## Sound instance

### Create sound instance

Adds a new sound into the sound manager.

```hljs js
Copyvar music = this.sound.add(key);

```hljs js
Copyvar music = this.sound.add(key, config);

- `config` : An optional config object containing default sound settings.

#### Sound instance configuration

```hljs js
Copy{
mute: false,
volume: 1,
rate: 1,
detune: 0,
seek: 0,
loop: false,
delay: 0,

// source of the spatial sound
source: {
x: 0,
y: 0,
z: 0,
panningModel: 'equalpower',
distanceModel: 'inverse',
orientationX: 0,
orientationY: 0,
orientationZ: -1,
refDistance: 1,
maxDistance: 10000,
rolloffFactor: 1,
coneInnerAngle: 360,
coneOuterAngle: 0,
coneOuterGain: 0,
follow: undefined
}
}

- `source` : Source of the spatial sound
- `x`, `y` : The horizontal/vertical position of the audio in a right-hand Cartesian coordinate system.
- `z` : Represents the longitudinal (back and forth) position of the audio in a right-hand Cartesian coordinate system.
- `panningModel` : An enumerated value determining which spatialization algorithm to use to position the audio in 3D space.
- `'equalpower'`
- `'HRTF'`
- `orientationX`, `orientationY` : The horizontal/vertical position of the audio source's vector in a right-hand Cartesian coordinate system.
- `orientationZ` : Represents the longitudinal (back and forth) position of the audio source's vector in a right-hand Cartesian coordinate system.
- `refDistance` : A double value representing the reference distance for reducing volume as the audio source moves further from the listener. For distances greater than this the volume will be reduced based on `rolloffFactor` and `distanceModel`.
- `maxDistance` : The maximum distance between the audio source and the listener, after which the volume is not reduced any further.
- `rolloffFactor` : A double value describing how quickly the volume is reduced as the source moves away from the listener. This value is used by all distance models.
- `coneInnerAngle` : The angle, in degrees, of a cone inside of which there will be no volume reduction.
- `coneOuterAngle` : The angle, in degrees, of a cone outside of which the volume will be reduced by a constant value, defined by the `coneOuterGain` property.
- `coneOuterGain` : The amount of volume reduction outside the cone defined by the `coneOuterAngle` attribute. Its default value is `0`, meaning that no sound can be heard. A value between `0` and `1`.
- `follow` : Set this Sound object to automatically track the x/y position of this object. Can be a Phaser Game Object, Vec2 or anything that exposes public x/y properties.

### Play sound instance

- Start playing

```hljs js
Copymusic.play();

- Start playing with configuration

```hljs js
Copymusic.play(config);

- config
- Stop

```hljs js
Copymusic.stop();

- Pause

```hljs js
Copymusic.pause();

- Resume

```hljs js
Copymusic.resume();

#### Mute

- Set

```hljs js
Copymusic.setMute(mute); // mute: true/false
// music.mute = mute;

- Get

```hljs js
Copyvar mute = music.mute;

#### Volume

```hljs js
Copymusic.setVolume(volume); // volume: 0 to 1
// music.volume = volume;

```hljs js
Copyvar volume = music.volume;

#### Detune

Sets global detuning of all sounds in cents. The range of the value is -1200 to 1200, but we recommend setting it to 50.

```hljs js
Copymusic.setDetune(detune); // detune: -1200 to 1200
// music.detune = detune;

```hljs js
Copyvar detune = music.detune;

#### Playback rate

```hljs js
Copymusic.setRate(rate); // rate: 1.0(normal speed), 0.5(half speed), 2.0(double speed)
// music.rate = rate;

```hljs js
Copyvar rate = music.rate;

#### Seek to

- Seek to

```hljs js
Copymusic.setSeek(time); // seek: playback time
// music.seek = seek;

- Get current playback time

```hljs js
Copyvar time = music.seek; // return 0 when playback ends

#### Loop

```hljs js
Copymusic.setLoop(loop); // loop: true/false
// music.loop = loop;

```hljs js
Copyvar loop = music.loop;

### Properties

- Duration : duration of this sound

```hljs js
Copyvar duration = music.duration;

- Is playing

```hljs js
Copyvar isPlaying = music.isPlaying;

- Is paused

```hljs js
Copyvar isPaused = music.isPaused;

- Asset key

```hljs js
Copyvar key = music.key;

### Events

```hljs js
Copymusic.once("play", function (music) {});

- Playback end

```hljs js
Copymusic.once("complete", function (music) {});

- Looping

```hljs js
Copymusic.once("looped", function (music) {});

```hljs js
Copymusic.once("pause", function (music) {});

```hljs js
Copymusic.once("resume", function (music) {});

- Stop

```hljs js
Copymusic.once("stop", function (music) {});

- Set mute

```hljs js
Copymusic.once("mute", function (music, mute) {});

- Set volume

```hljs js
Copymusic.once("volume", function (music, volume) {});

- Set detune

```hljs js
Copymusic.once("detune", function (music, detune) {});

- Set play-rate

```hljs js
Copymusic.once("rate", function (music, rate) {});

```hljs js
Copymusic.once("seek", function (music, time) {});

- set loop

```hljs js
Copymusic.once("loop", function (music, loop) {});

## Play marked sound

```hljs js
Copythis.sound.play(key, marker);

- `marker` : Marked section of a sound represented by name, and optionally start time, duration, and config object.

### Marker

```hljs js
Copy{
name: '',
start: 0,
duration: music.duration,
config: {
mute: false,
volume: 1,
rate: 1,
detune: 0,
seek: 0,
loop: false,
delay: 0
}
}

## Markers in sound instance

### Add marker

```hljs js
Copymusic.addMarker(marker);

Marker

### Play marked sound

```hljs js
Copymusic.play(markerName);

```hljs js
Copymusic.play(markerName, config);

config

## Audio sprite

### Load audio sprite

```hljs js
Copyscene.load.audioSprite(key, urls, markersConfig, config);

See loader

Format of markersConfig

```hljs js
Copy{
resources: urls, // an array of audio files
spritemap: {
markerName0: {
start: 0,
end: 0
},
markerName1: {
start: 0,
end: 0
}
// ...
}
}

### Play sound

Create a sound instance then play the marked section, this sound instance will be destroyed when playback ends.

```hljs js
Copythis.sound.playAudioSprite(key, markerName, config);

### Sound instance

Create a sound instance with markers.

```hljs js
Copyvar music = this.sound.addAudioSprite(key, config);

### Play sound instance

## Sound manager

### Mute

```hljs js
Copythis.sound.setMute(mute); // mute: true/false
// this.sound.mute = mute;

```hljs js
Copyvar mute = this.sound.mute;

### Volume

```hljs js
Copythis.sound.setVolume(volume); // volume: 0 to 1
// this.sound.volume = volume;

```hljs js
Copyvar volume = this.sound.volume;

### Detune

```hljs js
Copythis.sound.setDetune(detune); // detune: -1200 to 1200
// this.sound.detune = detune;

```hljs js
Copyvar detune = this.sound.detune;

### Playback rate

```hljs js
Copythis.sound.setRate(rate); // rate: 1.0(normal speed), 0.5(half speed), 2.0(double speed)
// this.sound.rate = rate;

```hljs js
Copyvar rate = this.sound.rate;

### Get music instance

- Get first by key

```hljs js
Copyvar music = this.sound.get(key); // music instance, or null

- Get all by key

```hljs js
Copyvar musicArray = this.sound.getAll(key); // music instance, or null

- Get all

```hljs js
Copyvar musicArray = this.sound.getAll();

- Get all playing

```hljs js
Copyvar musicArray = this.sound.getAllPlaying();

### Remove music instance

- Remove by key

```hljs js
Copyvar removed = this.sound.removeByKey(key);

- `removed` : The number of matching sound objects that were removed.
- Remove all

```hljs js
Copythis.sound.removeAll();

### Stop music instance

- Stop by key

```hljs js
Copyvar stopped = this.sound.stopByKey(key);

- `stopped` : How many sounds were stopped.
- Stop all

```hljs js
Copythis.sound.stopAll();

## Analyser

Web Audio API has the ability to extract frequency, waveform, and other data from your audio source, which can then be used to create visualizations.

1. Create analyser node

```hljs js
Copyvar analyser = this.sound.context.createAnalyser();

2. Configure analyser node

```hljs js
Copyanalyser.smoothingTimeConstant = 1;
analyser.fftSize = 8192;
analyser.minDecibels = -90;
analyser.maxDecibels = -10;

- `smoothingTimeConstant` : Averaging constant with the last analysis frame.
- `0`(no time averaging) ~ `1`. Default value is `0.8`.
- `fftSize` : Window size.
- `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, `16384`, and `32768`. Defaults to `2048`.
- `minDecibels` : Minimum _decibel_ value for scaling the FFT analysis data.
- `0` dB is the loudest possible sound, `-10` dB is a 10th of that, etc. The default value is `-100` dB
- `maxDecibels` : Maximum _decibel_ value for scaling the FFT analysis data.
- The default value is `-30` dB.
3. Set source of analyser node

```hljs js
Copythis.sound.masterVolumeNode.connect(analyser);

```hljs js
Copymusic.volumeNode.connect(analyser);

4. Ouput analyser node to audio context

```hljs js
Copyanalyser.connect(this.sound.context.destination);

5. Create output data array

```hljs js
Copyvar dataArrayLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(dataArrayLength);

6. Get output data

```hljs js
Copyanalyser.getByteTimeDomainData(dataArray);

- Retrieve output data

```hljs js
Copyfor (var i = 0; i < dataArrayLength; i++) {
var data = dataArray[i];
}

## Author Credits

Content on this page includes work by:

- RexRainbow
- samme

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Animations

Cameras

---

# https://docs.phaser.io/phaser/concepts/data-manager

# Data Manager

Data Manager

The Data Manager is a component that allows you to store, query and get key/value paired information. This information is isolated to the parent of the Data Manager.

By default in Phaser 3 there is one instance of the Data Manager that belongs to the Game, which is known as the 'registry'. In addition to this, every Scene has a Data Manager instance. And finally, all Game Objects are able to have a Data Manager instance as well. Plus, should you need to, you can create your own instances and manage those.

## Data Manager Parents

A Data Manager needs to be bound to a parent. There are four types of parent that a Data Manager can belong to: The Game, a Scene, a Game Object or a custom object.

### Game Object Data Manager

All Game Objects have a property called `data`. This is `null` by default, but is set to hold an instance of the `DataManager` class if the method `setDataEnabled` is called on the Game Object:

```hljs js
Copyconst sprite = this.add.sprite();

sprite.setDataEnabled();

Alternatively, if any of the following data related methods: `setData`, `incData`, `toggleData` or `getData` are called, they will also trigger the creation of a Data Manager belonging to the Game Object. Those methods are covered in more detail further in this section.

Once the Data Manager exists it can act as a store for any data you would like to bind to that specific Game Object.

### Scene Data Manager Plugin

Every Scene has its own instance of the Data Manager Plugin. This is accessed via the `data` property from within a Scene, for example:

```hljs js
Copyclass MyScene extends Phaser.Scene
{
constructor ()
{
super('myScene');
}

create ()
{
this.data.set('lives', 3);
}
}

The Data Manager Plugin is exactly the same as the Data Manager, including all of the same features and methods, but is constructed to function as a Scene Plugin.

### Game Data Manager

The Game instance also has a Data Manager, which is accessed via the `registry` property from within a Scene:

create ()
{
this.registry.set('lives', 3);
}
}

Unlike the Scene's Data Manager, this one is owned by the Game instance itself. It is created automatically by during the boot process and is then available in all Scenes via the `registry` property.

This means that any data set into the registry in one Scene is instantly available in all other Scenes in your game. It also means you can use it as a place to store global data, such as highscores, level data, settings and more.

### Custom Data Manager Instances

You can create your own instances of a Data Manager. A Data Manager must always have a parent and an Event Emitter it can use. While the parent is typically a Game Object or Scene, it can be any custom object you wish to bind to.

Here's an example of a class that can function as your own Data Manager:

```hljs js
Copyclass CustomDataManager extends Phaser.Data.DataManager
{
constructor ()
{
super(this, new Phaser.Events.EventEmitter());
}
}

const myData = new CustomDataManager();

The first parameter is the parent of the Data Manager, in this case the class itself. The second parameter is the Event Emitter instance it will use. You can use any Event Emitter you like, but it must have an instance of one.

## Data Manager Methods

Once a Data Manager has been created or referenced, you're ready to store data within it.

### Set Data

The first thing you'll want to do is set some data. You can do this using the `set` method:

```hljs js
Copy// In the Registry
this.registry.set('playerName', 'Vasquez');

// From within a Scene
this.data.set('playerName', 'Vasquez');

// On a Game Object instance
sprite.setData('playerName', 'Vasquez');
// or:
sprite.data.set('playerName', 'Vasquez');

The `set` method takes two arguments: A key and a value. The _key_ is a unique string that acts as the identifier for this value, i.e. `playerName`. As with most things in JavaScript, the key is case-sensitive, so `playerName` is not the same as `PlayerName`. It must also be a valid string. Keep this in mind when setting and getting data.

The second argument is the _value_ and this can be anything you like: a string, an integer, an array, an object, or even a reference to another class or function.

If the data is successfully set, a `SET_DATA` event will be emitted.

Or, if the key already existed in the Data Manager then its previous value will be overwritten with the new one and a `CHANGE_DATA` event will be emitted instead. Please see the Events section for more details.

#### Setting Multiple Values

You can set multiple values in one call by passing an object to the `set` method:

```hljs js
Copy// In the Registry
this.registry.set({ playerName: 'Hicks', weapon: 'M41A Pulse Rifle', score: 0 });

// From within a Scene
this.data.set({ playerName: 'Hicks', weapon: 'M41A Pulse Rifle', score: 0 });

// On a Game Object instance
sprite.setData({ playerName: 'Hicks', weapon: 'M41A Pulse Rifle', score: 0 });
// or:
sprite.data.set({ playerName: 'Hicks', weapon: 'M41A Pulse Rifle', score: 0 });

In this case 3 new values will be set into the Data Manager, with the keys `playerName`, `weapon` and `score`. A `SET_DATA` event will be emitted for each one. If, for example, two of the values were new and one was updating a previous value, then you'd get 2 `SET_DATA` events and 1 `CHANGE_DATA` event.

The object passed to the `set` method is only recursed one-level deep. If you pass a nested object, such as:

```hljs js
Copythis.data.set({ playerName: 'Hicks', weapon: { name: 'M41A Pulse Rifle', ammo: 10 }, score: 0 });

Then the `weapon` object will be set as the value of the `weapon` entry itself, not the individual properties within it.

#### Merge an existing Object into the Data Manager

You can populate the Data Manager with key/value pairs from an existing object by using the `merge` method:

```hljs js
Copyconst weapon = { name: 'M41A Pulse Rifle', ammo: 10 };

// In the Registry
this.registry.merge(weapon, true);

// From within a Scene
this.data.merge(weapon, true);

// On a Game Object instance
sprite.data.merge(weapon, true);

The first argument is the object to merge into the Data Manager. The second argument is the boolean `overwrite`. If `true` it will overwrite any existing values in the Data Manager with the values from the object. If `false` it will skip any keys that already exist in the Data Manager.

If the key didn't exist in the Data Manager, it will be created and a `SET_DATA` event will be emitted. If the key did exist and `overwrite` was `true`, it will be updated and a `CHANGE_DATA` event will be emitted.

All of the same rules apply as with the `set` method, in that the object is only recursed one-level deep, keys are case-sensitive, etc.

#### Using Objects as Values

While you can use objects as values, you should be careful when doing so. For example:

this.data.set({ playerName: 'Hicks', weapon });

In the above, the `weapon` value is a _reference_ to the object itself. The Data Manager will not make a copy of it. This means that if you later directly update the `weapon` object, the value stored in the Data Manager will also be updated. For example:

```hljs js
Copyweapon.ammo = 20;

However, doing so will not emit any events and you will lose the benefits of using the Data Manager in the first place.

### Get Data

Once you've stored some data you can retrieve it again using the `get` method:

```hljs js
Copy// In the Registry
this.registry.get('playerName');

// From within a Scene
this.data.get('playerName');

// On a Game Object instance
sprite.getData('playerName');
// or:
sprite.data.get('playerName');

If the key exists in the Data Manager then the value will be returned. If the key doesn't exist, `undefined` will be returned instead.

To get several values at once, pass an array of keys:

```hljs js
Copy// In the Registry
this.registry.get([ 'playerName', 'score' ]);

// From within a Scene
this.data.get([ 'playerName', 'score' ]);

// On a Game Object instance
sprite.getData([ 'playerName', 'score' ]);
// or:
sprite.data.get([ 'playerName', 'score' ]);

If you pass an array in, then an array of values will be returned, in the same order as the keys given. If a key doesn't exist, `undefined` will be returned in its place.

This is especially useful for destructuring:

```hljs js
Copyconst { playerName, score } = this.data.get([ 'playerName', 'score' ]);

### Data Values

When you get data, what you're getting in most cases is a _copy_ of that data. For example, if the data is a string, number or boolean, then calling `get` will return that value. If you then manipulate the value, the Data Manager will not be aware of this change. For example:

```hljs js
Copyconst score = this.data.get('score');

score += 10;

In this case the `score` value is a copy of the value stored in the Data Manager. Although you modified it by adding 10 to it, the Data Manager will not be aware of this change. If you then call `get` again, the value returned will be the original value, not the updated one.

To avoid this situation, use the `values` property of the Data Manager:

```hljs js
Copyconst score = this.data.values.score;

Any value set in the Data Manager is available via the `values` property.

Here, `score` is a reference to a special value stored in the Data Manager. This time, if you add 10 to it, the Data Manager will be aware of this change and will emit the `CHANGE_DATA` event, too. If you call `get` again, the value returned will be the updated one.

You can also modify the values directly, such as:

```hljs js
Copythis.data.values.score += 10;

Again, this is a 'safe' way to modify the values in the Data Manager, as it will emit the `CHANGE_DATA` event and the value will be updated.

### Increment Data

The `inc` method will increment a value by the given amount. If the value doesn't already exist in the Data Manager, it will be created and given the value of the amount:

```hljs js
Copy// In the Registry
this.registry.inc('score', 10);

// From within a Scene
this.data.inc('score', 10);

// On a Game Object instance
sprite.incData('score', 10);
// or:
sprite.data.inc('score', 10);

In this case, if the `score` value didn't already exist, it will be created and given the value of 10. If it did exist, it will be incremented by 10. As with other forms of setting data, the relevant events will also be emitted, depending on if the value was created or updated.

To reduce a value, simply pass a negative amount:

```hljs js
Copythis.data.inc('score', -10);

Note that the `inc` feature only works if the value is a standard JavaScript number data type. If you try to increment a string, it will append the value onto the end of the string. I.e. a value of `"10"` will become `"1010"`. If you try and increment a boolean, it will be converted to a number first, i.e. `true` becomes `1` and `false` becomes `0`. Adding numeric values to objects by mistake will actually destroy the original object and replace it with the string `[object Object]` with your number appended to it! So be sure to only call `inc` on number data types.

Fundamentally, there's no difference between calling the `inc` method and just modifying the value via the `values` property, except that the `inc` method call is chainable.

### Toggle Data

The `toggle` method will toggle a boolean value between `true` and `false`:

```hljs js
Copy// In the Registry
this.registry.toggle('musicEnabled');

// From within a Scene
this.data.toggle('musicEnabled');

// On a Game Object instance
sprite.toggleData('musicEnabled');
// or:
sprite.data.toggle('musicEnabled');

If the value doesn't already exist in the Data Manager, it will be created and given the value of `true`. If it did exist, it will be toggled to the opposite boolean value. As with other forms of setting data, the relevant events will also be emitted, depending on if the value was created or updated.

### Freezing Data

The Data Manager has the ability to be 'frozen'. If you enable this, then no further data can be added or removed from the Data Manager, and values already stored within it cannot be modified. This is useful if you wish to lock-down a Data Manager and make it read-only.

To freeze, or un-freeze a Data Manager, call the chainable `setFreeze` method:

```hljs js
Copy// In the Registry
this.registry.setFreeze(true);

// From within a Scene
this.data.setFreeze(true);

// On a Game Object instance
sprite.data.setFreeze(true);

Or, you can modify the `freeze` property directly:

```hljs js
Copy// In the Registry
this.registry.freeze = true;

// From within a Scene
this.data.freeze = true;

// On a Game Object instance
sprite.data.freeze = true;

Changing the frozen state of the Data Manager is immediate. For example, if you are adding an object containing several new values, and in the `SET_DATA` event listener you call `setFreeze(true)`, then the remaining values will never be added.

### Removing Data

You can remove a single item of data from the Data Manager using the `remove` method:

```hljs js
Copy// In the Registry
this.registry.remove('playerName');

// From within a Scene
this.data.remove('playerName');

// On a Game Object instance
sprite.data.remove('playerName');

If the key exists in the Data Manager it will be removed and a `REMOVE_DATA` event will be emitted. If the key doesn't exist, nothing happens.

You can remove multiple values at once by passing an array of strings to the `remove` method:

```hljs js
Copy// In the Registry
this.registry.remove([ 'playerName', 'score' ]);

// From within a Scene
this.data.remove([ 'playerName', 'score' ]);

// On a Game Object instance
sprite.data.remove([ 'playerName', 'score' ]);

The Data Manager also provides the `pop` method. This works in the same way as `remove`, except it returns the value that was removed:

```hljs js
Copy// In the Registry
const playerName = this.registry.pop('playerName');

// From within a Scene
const playerName = this.data.pop('playerName');

// On a Game Object instance
const playerName = sprite.data.pop('playerName');

If the key doesn't exist in the Data Manager, `undefined` is returned.

Each key successfully removed, regardless of the method used to remove it, will emit a `REMOVE_DATA` event.

As with setting data, if the Data Manager has been frozen, no values will be removed.

### Reset the Data Manager

You can reset the Data Manager, removing all data it contains, by calling the `reset` method:

```hljs js
Copy// In the Registry
this.registry.reset();

// From within a Scene
this.data.reset();

// On a Game Object instance
sprite.data.reset();

This will remove all data from the Data Manager and reset its frozen status to false. No events are emitted by this method. It's just a fast way to clear out a Data Manager entirely, should you wish to do so.

### Querying the Data Manager

There are several methods available for querying the Data Manager.

#### has

The first, and most simple, is the `has` method. This checks to see if the Data Manager has a key matching the given string:

```hljs js
Copy// In the Registry
this.registry.has('playerName');

// From within a Scene
this.data.has('playerName');

// On a Game Object instance
sprite.data.has('playerName');

If the key exists in the Data Manager it will return `true`, otherwise it will return `false`. As with all uses of keys in JavaScript, please remember this is highly case-sensitive.

#### count

To return the total number of entries currently being stored in the Data Manager, use the `count` property:

```hljs js
Copy// In the Registry
this.registry.count;

// From within a Scene
this.data.count;

// On a Game Object instance
sprite.data.count;

This is a numeric value that represents the total number of entries in the Data Manager.

#### getAll

To return everything within the Data Manager, use the `getAll` method:

```hljs js
Copy// In the Registry
this.registry.getAll();

// From within a Scene
this.data.getAll();

// On a Game Object instance
sprite.data.getAll();

This will return a new object containing all of the data stored in the Data Manager. For example:

```hljs js
Copy{
playerName: 'Hicks',
weapon: 'M41A Pulse Rifle',
score: 0
}

If the Data Manager is empty, an empty object is returned.

When using `getAll` you should treat the returned object as read-only. If you modify it directly, the Data Manager will not be aware of the changes.

#### each

The `each` method allows you to pass all entries in the Data Manager to a given callback. You pass the callback as the first argument, an optional context as the second and then any further arguments:

```hljs js
Copy// In the Registry

console.log(key, value);
});

// From within a Scene

// On a Game Object instance

The callback will be sent three arguments: The parent of the Data Manager, the key and the value. If you specified additional arguments, they will be sent after these three.

The Data Manager does not use, or expect a return value from the callback, so if you wish to modify a value sent to your callback, you must do so via the normal Data Manager methods.

#### query

The `query` method allows you to search the Data Manager for keys that match the given Regular Expression. It will then return an object containing any matching key/value pairs.

For example, let's assume we have populated the Data Manager with a number of different weapons:

```hljs js
Copythis.data.set({
'M41A Pulse Rifle': 10,
'M56 Smartgun': 20,
'M240 Flamethrower': 30,
'M42A Scope Rifle': 40,
'M83 SADAR': 50,
'M92 Grenade Launcher': 60
});

We can then use the `query` method to return all weapons that contain the word 'Rifle':

```hljs js
Copyconst rifles = this.data.query(/Rifle/);

The returned object will contain all matching key/value pairs:

```hljs js
Copy{
'M41A Pulse Rifle': 10,
'M42A Scope Rifle': 40
}

If no matches are found, an empty object is returned.

The `query` method accepts any valid regular expression.

#### The `list` and `values` properties

The `list` property is an array containing all of the keys in the Data Manager:

```hljs js
Copy// In the Registry
this.registry.list;

// From within a Scene
this.data.list;

// On a Game Object instance
sprite.data.list;

The `values` property is an array containing all of the values in the Data Manager:

```hljs js
Copy// In the Registry
this.registry.values;

// From within a Scene
this.data.values;

// On a Game Object instance
sprite.data.values;

These objects should be treated as read-only and never modified directly. However, they are made public so that you can use them from any of the regular JavaScript methods, such as destructuring, `map`, `forEach` and so on.

## Data Manager Events

When the Data Manager is created it has to be given an Event Emitter to use. This means there are a few different ways to listen to the Data Manager events, depending on where you are setting the data. Here are the different ways you can listen for Data Manager events.

The Game Data Manager (the Registry) will emit events from itself:

```hljs js
Copy// From within a Scene:

console.log('Registry set:', key, value);
});

A Scene Data Manager will emit events via the Scene Systems, which is mapped to the `events` property from within a Scene:

console.log('Scene data set:', key, value);
});

A Game Object Data Manager will emit events via the Game Object itself:

```hljs js

console.log('Sprite data set:', key, value);
});

Finally, if you have created your own instance of the Data Manager, then you would have provided an Event Emitter when you did this. It's this emitter you should listen tgo events from.

## Destroying the Data Manager

If the Data Manager belongs to a Game (i.e. the Registry), a Scene, or a Game Object, then it is automatically destroyed when the parent object is destroyed. However, if you created your own Data Manager instance, then you are responsible for destroying it when it is no longer needed.

To do this, call the `destroy` method:

```hljs js
CopymyData.destroy();

This will emit a `DESTROY` event, remove all listeners and clear-up any references it holds to other objects.

Note that if a Scene is shutdown, rather than destroyed, then the Data Manager will persist and retain all data within it. If you want to clear the data from the Data Manager when the Scene is shutdown, then you should listen for the shutdown event and call `reset` on its Data Manager:

create ()
{
this.data.set('lives', 3);

this.events.once('shutdown', this.shutdown, this);
}

shutdown ()
{
this.data.reset();
}
}

### Using JSON

You can take the contents of the Data Manager and convert it to JSON via:

```hljs js
Copyconst json = JSON.stringify(data.list);

Where `data` is a reference to the Data Manager, which could belong to the Game or a Game Object.

You can also do the opposite:

```hljs js
Copydata.reset().merge(JSON.parse(json));

Where `json` is your well-formed JSON data.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Cameras

Device

---

# https://docs.phaser.io/phaser/concepts/input

# Input

A Guide to Handling Input in Phaser

Phaser maintains a unified input system that works across all browsers and devices. By unified we mean that you don't have to worry about whether the user is on a desktop with a mouse, or a mobile device with touch input, or even a touch capable desktop. All you need to do is listen for, and respond to, the input events that Phaser provides. You can also respond to input events from both keyboards and gamepads.

Internally there is a global Input Manager and every Scene has an instance of the Input Plugin. The Input Manager is responsible for listening for native DOM events, such as mouse movement, touch gestures and keyboard presses. It then passes these events on to the Input Plugins, which in turn processes them.

By default, Game Objects in Phaser do not process input. This is because not all Game Objects need to respond to input. For example, a background image or game logo likely doesn't need to respond to input, but a button does. Therefore, you must enable input processing on the Game Objects that you specifically want to respond to input.

Once enabled for input, a Game Object will then listen for input events from the Input Plugin and check to see if it has been 'clicked', or not. There are lots of events that can be emitted, such as pointer up and down events, drag events, scroll wheel events, etc. We'll explore these in more detail later in this guide, along with how the input system works internally. For now, it's enough to know that you can enable input on almost any Game Object and then respond to the events it emits as your game requires.

## Enabling a Game Object for input

Phaser combines mouse and touch (pointer) events into one single unified API for you. When you enable a Game Object for input and listen for an event, such as 'pointerdown', it doesn't matter if it was a mouse click on a desktop, or a finger pointer on a mobile that caused it. Phaser will emit the same event for your game to listen for.

To enable a Game Object for input:

```hljs js
CopygameObject.setInteractive();

Not all Game Objects can receive input. Check the API Documentation for specifics. However, all of the common ones (Sprites, Images, Text, etc) can.

## Setting hit areas

The `setInteractive` method can take a custom hit area.

- Set hit area from width and height (rectangle) of the texture the Game Object is using:

- Set hit area from game object

```hljs js
CopygameObject.setInteractive(shape, callback);

- Circle
- shape : `new Phaser.Geom.Circle(x, y, radius)`
- callback : `Phaser.Geom.Circle.Contains`
- Ellipse
- shape : `new Phaser.Geom.Ellipse(x, y, width, height)`
- callback : `Phaser.Geom.Ellipse.Contains`
- Rectangle
- shape : `new Phaser.Geom.Rectangle(x, y, width, height)`
- callback : `Phaser.Geom.Rectangle.Contains`
- Triangle
- shape : `new Phaser.Geom.Triangle(x1, y1, x2, y2, x3, y3)`
- callback : `Phaser.Geom.Triangle.Contains`
- Polygon
- shape : `new Phaser.Geom.Polygon(points)`
- callback : `Phaser.Geom.Polygon.Contains`
- Hexagon
- shape : `new Phaser.Geom.rexHexagon(x, y, size, type)`
- callback : `Phaser.Geom.Polygon.Contains`
- Rhombus
- shape : `new Phaser.Geom.rexRhombus(x, y, width, height)`
- callback : `Phaser.Geom.Polygon.Contains`
- Note: `x`, `y` relate to the **top-left** of the gameObject.
- Set hit area from input plugin

```hljs js
Copyscene.input.setHitArea(gameObjects, shape, callback);

- Circle

```hljs js
Copyscene.input.setHitAreaCircle(gameObjects, x, y, radius);
// scene.input.setHitAreaCircle(gameObjects, x, y, radius, callback); // callback = Circle.Contains

- Ellipse

```hljs js
Copyscene.input.setHitAreaEllipse(gameObjects, x, y, width, height);
// scene.input.setHitAreaEllipse(gameObjects, x, y, width, height, callback); // callback = Ellipse.Contains

- Rectangle

```hljs js
Copyscene.input.setHitAreaRectangle(gameObjects, x, y, width, height);
// scene.input.setHitAreaRectangle(gameObjects, x, y, width, height, callback); // callback = Rectangle.Contains

- Triangle

```hljs js
Copyscene.input.setHitAreaTriangle(gameObjects, x1, y1, x2, y2, x3, y3);
// scene.input.setHitAreaTriangle(gameObjects, x1, y1, x2, y2, x3, y3, callback); // callback = Triangle.Contains

- Note: `x`, `y` relate to the **top-left** of the gameObject.
- Set interactive configuration

```hljs js
CopygameObject.setInteractive({
hitArea: shape,
hitAreaCallback: callback,
hitAreaDebug: shape,
draggable: false,
dropZone: false,
useHandCursor: false,
cursor: CSSString,
pixelPerfect: false,
alphaTolerance: 1,
});

- Hit area
- shape
- Pixel alpha
- `pixelPerfect` : `true`
- `alphaTolerance` : `1` (0-255)
- Custom hit-testing function
- `hitAreaCallback` `javascript function(shape, x, y, gameObject) { return hit; // true/false } `
- `shape` : Hit area object
- `x`, `y` : Local position of texture.
- `gameObject` : Game object.
- `hitAreaDebug` : Debug shape.
- Dragging
- `draggable` : `true`
- Drop zone
- `dropZone` : `true`
- Cursor
- `cursor` : CSS string
- `useHandCursor` : `true`

This is an expensive process, should only be enabled on Game Objects that really need it.

## Disable input

- Disable temporary

```hljs js
CopygameObject.disableInteractive();

- Remove interaction

```hljs js
CopygameObject.removeInteractive();

## Top only game object input

When set to `true` this Input Plugin will emulate DOM behavior by only emitting events from the top-most Game Objects in the Display List.
If set to `false` it will emit events from all Game Objects below a Pointer, not just the top one.

- Getting top only game object input value:

```hljs js
Copyvar topOnly = scene.input.topOnly;

- Setting top only game object input value:

```hljs js
Copyscene.input.topOnly = value; // true or false
scene.input.setTopOnly(value); // true or false

Each scene can has its own `scene.input.topOnly` setting.

## Touch events

Trigger these events from top scene to bottom scene.

1. Events on touched Game object

```hljs js
CopygameObject.on(
"pointerdown",
function (pointer, localX, localY, event) {
/* ... */
},
scope
);
gameObject.on(
"pointerup",
function (pointer, localX, localY, event) {
/* ... */
},
scope
);
gameObject.on(
"pointermove",
function (pointer, localX, localY, event) {
/* ... */
},
scope
);
gameObject.on(
"pointerover",
function (pointer, localX, localY, event) {
/* ... */
},
scope
);
gameObject.on(
"pointerout",
function (pointer, event) {
/* ... */
},
scope
);

- Cancel remaining touch events

```hljs js
Copyfunction(pointer, localX, localY, event) {
event.stopPropagation();
}

2. Event on input plugin for each touched Game object

```hljs js
Copyscene.input.on(
"gameobjectdown",
function (pointer, gameObject, event) {
/* ... */
},
scope
);
scene.input.on(
"gameobjectup",
function (pointer, gameObject, event) {
/* ... */
},
scope
);
scene.input.on(
"gameobjectmove",
function (pointer, gameObject, event) {
/* ... */
},
scope
);
scene.input.on(
"gameobjectover",
function (pointer, gameObject, event) {
/* ... */
},
scope
);
scene.input.on(
"gameobjectout",
function (pointer, gameObject, event) {
/* ... */
},
scope
);

- Cancel remaining touched events

```hljs js
Copyfunction(pointer, gameObject, event) {
event.stopPropagation();
}

3. Events to get **all** touched Game Objects

```hljs js
Copyscene.input.on(
"pointerdown",
function (pointer, currentlyOver) {
/* ... */
},
scope
);
scene.input.on(
"pointerdownoutside",
function (pointer) {
/* ... */
},
scope
);
scene.input.on(
"pointerup",
function (pointer, currentlyOver) {
/* ... */
},
scope
);
scene.input.on(
"pointerupoutside",
function (pointer) {
/* ... */
},
scope
);
scene.input.on(
"pointermove",
function (pointer, currentlyOver) {
/* ... */
},
scope
);
scene.input.on(
"pointerover",
function (pointer, justOver) {
/* ... */
},
scope
);
scene.input.on(
"pointerout",
function (pointer, justOut) {
/* ... */
},
scope
);
scene.input.on(
"gameout",
function (timeStamp, domEvent) {
/* ... */
},
scope
);
scene.input.on(
"gameover",
function (timeStamp, domEvent) {
/* ... */
},
scope
);

- Check `pointer.camera` in multiple-cameras scene.

#### Game canvas

```hljs js
Copyscene.input.on(
"gameout",
function (timeStamp, event) {
/* ... */
},
scope
);
scene.input.on(
"gameover",
function (timeStamp, event) {
/* ... */
},
scope
);

#### Enable dragging

- Enable dragging when registering interactive

```hljs js
CopygameObject.setInteractive({ draggable: true });

- Enable dragging and add it to dragging detecting list after registered interactive

```hljs js
Copyscene.input.setDraggable(gameObject);

- Enable dragging

```hljs js
CopygameObject.input.draggable = true;

#### Disable dragging

- Remove Game Object from dragging detecting list

```hljs js
Copyscene.input.setDraggable(gameObject, false);

- Disable dragging but keep it in dragging detecting list

```hljs js
CopygameObject.input.draggable = false;

#### Dragging events

```hljs js
CopygameObject.on(
"dragstart",
function (pointer, dragX, dragY) {
/* ... */
},
scope
);
gameObject.on(
"drag",
function (pointer, dragX, dragY) {
/* ... */
},
scope
);
gameObject.on(
"dragend",
function (pointer, dragX, dragY, dropped) {
/* ... */
},
scope
);

```hljs js
Copyscene.input.on(
"dragstart",
function (pointer, gameObject) {
/* ... */
},
scope
);
scene.input.on(
"drag",
function (pointer, gameObject, dragX, dragY) {
/* ... */
},
scope
);
scene.input.on(
"dragend",
function (pointer, gameObject, dropped) {
/* ... */
},
scope
);

- `dropped` : `'dragend'` and also `'drop'`.

#### Dragging properties

```hljs js
Copyscene.input.dragDistanceThreshold = 16;
scene.input.dragTimeThreshold = 500;

#### Enable drop zone

- Enable dropping when registering interactive

```hljs js
CopygameObject.setInteractive({ dropZone: true });

- Enable dropping after registered interactive

```hljs js
CopygameObject.input.dropZone = true;

#### Disable drop zone

```hljs js
CopygameObject.input.dropZone = false;

#### Dropping events

```hljs js
CopygameObject.on(
"drop",
function (pointer, target) {
/* ... */
},
scope
);

gameObject.on(
"dragenter",
function (pointer, target) {
/* ... */
},
scope
);
gameObject.on(
"dragover",
function (pointer, target) {
/* ... */
},
scope
);
gameObject.on(
"dragleave",
function (pointer, target) {
/* ... */
},
scope
);

```hljs js
Copyscene.input.on(
"drop",
function (pointer, gameObject, target) {
/* ... */
},
scope
);

scene.input.on(
"dragenter",
function (pointer, gameObject, target) {
/* ... */
},
scope
);
scene.input.on(
"dragover",
function (pointer, gameObject, target) {
/* ... */
},
scope
);
scene.input.on(
"dragleave",
function (pointer, gameObject, target) {
/* ... */
},
scope
);

### First event of all

```hljs js
Copyscene.input.on(
"preupdate",
function () {
/* ... */
},
scope
);

#### Pointer

```hljs js
Copyvar pointer = scene.input.activePointer;

#### Amount of active pointers

Set amount of active pointers in game configuration

```hljs js
Copyvar config = {
// ...
input: {
activePointers: 1,
// ...
},
};
var game = new Phaser.Game(config);

Or add pointers in run-time.

```hljs js
Copyscene.input.addPointer(num); // total points = num + 1

#### Pointers

- pointer 1 ~ 10

```hljs js
Copyvar pointer = scene.input.pointer1;
// ...
var pointer = scene.input.pointer10;

- pointer n

```hljs js
Copyvar pointer = scene.input.manager.pointers[n];

- Amount of total pointers

```hljs js
Copyvar amount = scene.input.manager.pointersTotal;

- `1` in desktop
- `2` in touch device. ( `0` for mouse, `1` for 1 touch pointer)

### Pointer

- Position
- Current touching
- Position in screen : `pointer.x` , `pointer.y`
- Position in camera :
- Single camera :

```hljs js
Copyvar worldX = pointer.worldX;
var worldY = pointer.worldY;

- Multiple cameras :

```hljs js
Copyvar worldXY = pointer.positionToCamera(camera); // worldXY: {x, y}
// var worldXY = pointer.positionToCamera(camera, worldXY);
var worldX = worldXY.x;
var worldY = worldXY.y;

- Camera

```hljs js
Copyvar camera = pointer.camera;

- Position of previous moving : `pointer.prevPosition.x` , `pointer.prevPosition.y`
- Updating when pointer-down, potiner-move, or pointer-up.
- Interpolated position :

```hljs js
Copyvar points = pointer.getInterpolatedPosition(step);
// var out = pointer.getInterpolatedPosition(step, out);

- Drag
- Touching start : `pointer.downX`, `pointer.downY`
- Touching end : `pointer.upX`, `pointer.upY`
- Drag distance between pointer-down to latest pointer : `pointer.getDistance()`
- Horizontal drag distance : `pointer.getDistanceX()`
- Vertical drag distance : `pointer.getDistanceY()`
- Drag angle : `pointer.getAngle()`
- Time
- Touching start : `pointer.downTime`
- Touching end : `pointer.upTime`
- Drag : `pointer.getDuration()`
- Touch state
- Is touching/any button down : `pointer.isDown`
- Is primary button down : `pointer.primaryDown`
- Button state : `pointer.button`
- On Touch devices the value is always `0`.
- Button down
- No button down : `pointer.noButtonDown()`
- Is primary (left) button down : `pointer.leftButtonDown()`
- Is secondary (right) button down : `pointer.rightButtonDown()`
- Is middle (mouse wheel) button down : `pointer.middleButtonDown()`
- Is back button down : `pointer.backButtonDown()`
- Is forward button down : `pointer.forwardButtonDown()`
- Button released
- Is primary (left) button released : `pointer.leftButtonReleased()`
- Is secondary (right) button released : `pointer.rightButtonReleased()`
- Is middle (mouse wheel) button released : `pointer.middleButtonReleased()`
- Is back button released : `pointer.backButtonReleased()`
- Is forward button released : `pointer.forwardButtonReleased()`
- Index in `scene.input.manager.pointers` : `pointer.id`
- Motion
- Angle: `pointer.angle`
- Distance: `pointer.distance`
- Velocity: `pointer.velocity`
- `pointer.velocity.x`, \`\`pointer.velocity.y\`

### Input object

- `gameObject.input` : Game object's input object.
- `gameObject.input.localX`, `gameObject.input.localY` : Pointer to local position of texture.
- `gameObject.input.dragStartX`, `gameObject.input.dragStartY` : The x/y coordinate of the Game Object
that owns this Interactive Object when the drag started.
- `gameObject.input.dragStartXGlobal`, `gameObject.input.dragStartYGlobal` : The x/y coordinate that
the Pointer started dragging this Interactive Object from.
- `gameObject.input.dragX`, `gameObject.input.dragY` : The x/y coordinate that this Interactive Object
is currently being dragged to.

### Smooth

Get touch position from interpolation of previous touch position and current touch position.

CopyTouch-position = (current-touch-position * smooth-factor) + (previous-touch-position * (1 - smooth-factor))

1. Set smooth factor. In game configuration

```hljs js
Copyvar config = {
// ....
input: {
smoothFactor: 0,
},
};

2. Get touch position

```hljs js
Copyvar x = pointer.x;
var y = pointer.y;
var worldX = pointer.worldX;
var worldY = pointer.worldY;

### Debug

- Enable, draw shape of (shape) hit area.

```hljs js
Copyscene.input.enableDebug(gameObject);
// scene.input.enableDebug(gameObject, color);

- Disable

```hljs js
Copyscene.input.removeDebug(gameObject);

- Get debug shape game object

```hljs js
Copyvar shape = gameObject.input.hitAreaDebug;

### Poll rate

- Poll when touches moved, or updated. Default behavior.

```hljs js
Copyscene.input.setPollOnMove();

- Poll every tick.

```hljs js
Copyscene.input.setPollAlways();

- Set poll rate.

```hljs js
Copyscene.input.setPollRate(rate);

## Touch / mouse input

No touch input events fired in preload stage.

### Usage

- Is touching / mouse button is pressed. Usually used in the `update()` game loop:

```hljs js
Copyvar pointer = scene.input.activePointer;
if (pointer.isDown) {
var touchX = pointer.x;
var touchY = pointer.y;
// ...
}

- On any touching start / mouse button press event:

```hljs js
Copyscene.input.on(
"pointerdown",
function (pointer) {
var touchX = pointer.x;
var touchY = pointer.y;
// ...
},
scope
);

- On any touching end / mouse button release event:

```hljs js
Copyscene.input.on(
"pointerup",
function (pointer) {
var touchX = pointer.x;
var touchY = pointer.y;
// ...
},
scope
);

- On touch game object start / mouse button press event:

```hljs js
CopygameObject.setInteractive().on(
"pointerdown",
function (pointer, localX, localY, event) {
// ...
},
scope
);

- On touch game object end / mouse button release event:

```hljs js
CopygameObject.setInteractive().on(
"pointerup",
function (pointer, localX, localY, event) {
// ...
},
scope
);

- Dragging a game object:

```hljs js
CopygameObject
.setInteractive({ draggable: true })
.on('dragstart', function(pointer, dragX, dragY){
// ...
}, scope);
.on('drag', function(pointer, dragX, dragY){
gameObject.setPosition(dragX, dragY);
}, scope);
.on('dragend', function(pointer, dragX, dragY, dropped){
// ...
}, scope);

Reference : Properties of point

### Usage

References:

- Cursor

### Set default cursor

```hljs js
Copyscene.input.setDefaultCursor(CSSString);
// CSSString: 'url(assets/input/cursors/sword.cur), pointer'

### Set cursor of a Game Object

Change cursor image when cursor is over that Game Object.

```hljs js
CopygameObject.setInteractive({
cursor: CSSString,
});
// CSSString: 'url(assets/input/cursors/sword.cur), pointer'

Set cursor image directly after `gameObject.setInteractive()`.

```hljs js
CopygameObject.input.cursor = CSSString;
// CSSString: 'url(assets/input/cursors/sword.cur), pointer'

Use pointer (hand cursor).

```hljs js
CopygameObject.setInteractive({
useHandCursor: true,
});

### Change current cursor

```hljs js
Copyscene.input.manager.canvas.style.cursor = cursor;

- `cursor` : CSSString

## Keyboard input

### Quick start

- Is key-down/is key-up

```hljs js
Copyvar keyObject = scene.input.keyboard.addKey("W"); // Get key object
var isDown = keyObject.isDown;
var isUp = keyObject.isUp;
var shiftKey = keyObject.shiftKey;

- Key is down after a duration

```hljs js
Copyvar keyObject = scene.input.keyboard.addKey("W"); // Get key object
var isDown = scene.input.keyboard.checkDown(keyObject, duration);

- On key-down/on key-up

```hljs js
Copyvar keyObject = scene.input.keyboard.addKey("W"); // Get key object
keyObject.on("down", function (event) {
/* ... */
});
keyObject.on("up", function (event) {
/* ... */
});

or

```hljs js
Copyscene.input.keyboard.on("keydown-" + "W", function (event) {
/* ... */
});
scene.input.keyboard.on("keyup-" + "W", function (event) {
/* ... */
});

- Any key-down/any key-up

```hljs js
Copyscene.input.keyboard.on("keydown", function (event) {
/* ... */
});
scene.input.keyboard.on("keyup", function (event) {
/* ... */
});

- `event` : KeyboardEvent
- `event.code` : 'Key' + 'W'

### Key object

- Get key object

```hljs js
Copyvar keyObject = scene.input.keyboard.addKey("W"); // see `Key map` section
// var keyObject = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

```hljs js
Copyvar keyObject = scene.input.keyboard.addKey("W", enableCapture, emitOnRepeat);

- `enableCapture` : Automatically call `preventDefault` on the native DOM browser event for the key codes being added.
- `emitOnRepeat` : Controls if the Key will continuously emit a 'down' event while being held down (true), or emit the event just once (false, the default).
- Get key objects

```hljs js
Copyvar keyObjects = scene.input.keyboard.addKeys("W,S,A,D"); // keyObjects.W, keyObjects.S, keyObjects.A, keyObjects.D
// var keyObjects = scene.input.keyboard.addKeys('W,S,A,D', enableCapture, emitOnRepeat);

```hljs js
Copyvar keyObjects = scene.input.keyboard.addKeys({
up: "W",
down: "S",
left: "A",
right: "D",
}); // keyObjects.up, keyObjects.down, keyObjects.left, keyObjects.right

- Remove key object

```hljs js
Copyscene.input.keyboard.removeKey("W");
// scene.input.keyboard.removeKey(Phaser.Input.Keyboard.KeyCodes.W);
// scene.input.keyboard.removeKey(key, destroy, removeCapture);

- `destroy` : Call `Key.destroy` on each removed Key object
- `removeCapture` : Remove all key captures for Key objects owened by this plugin?
- Remove all key objects

```hljs js
Copyscene.input.keyboard.removeAllKeys(true);
// scene.input.keyboard.removeAllKeys(destroy, removeCapture);

- `destroy` : Call `Key.destroy` on each removed Key object
- `removeCapture` : Remove all key captures for Key objects owened by this plugin?
- Key-down/key-up state

```hljs js
Copyvar isDown = keyObject.isDown;
var isUp = keyObject.isUp;

- Duration of key-down

```hljs js
Copyvar duration = keyObject.getDuration(); // ms

- Enable/disable

```hljs js
CopykeyObject.enabled = enabled; // Set false to disable key event

### Key object of cursorkeys

1. Get key state object

```hljs js
Copyvar cursorKeys = scene.input.keyboard.createCursorKeys();

2. Get key state

```hljs js
Copyvar isUpDown = cursorKeys.up.isDown;
var isDownDown = cursorKeys.down.isDown;
var isLeftDown = cursorKeys.left.isDown;
var isRightDown = cursorKeys.right.isDown;
var isSpaceDown = cursorKeys.space.isDown;
var isShiftDown = cursorKeys.shift.isDown;

### Order of key-down/key-up events

1. Key-down/key-up events of key object

- `event.stopImmediatePropagation()` : Stop any further listeners from being invoked in the current Scene.
- `event.stopPropagation()` : Stop it reaching any other Scene.
2. On key-down/on key-up

- `event.stopImmediatePropagation()` : Stop any further listeners from being invoked in the current Scene.
- `event.stopPropagation()` : Stop it reaching any other Scene.
- Invoke `event.preventDefault()` to stop event propagation to native DOM.
3. Any key-down/on key-up

- `event.key` : `'a'`
- `event.keyCode` : `65`
- `event.code` : `'KeyA'`
- `event.stopImmediatePropagation()` : Stop any further listeners from being invoked in the current Scene.
- `event.stopPropagation()` : Stop it reaching any other Scene.

### Destroy key object

```hljs js
CopykeyObject.destroy();

### Key map

- `A` ~ `Z`
- `F1` ~ `F12`
- `BACKSPACE`
- `TAB`
- `ENTER`
- `SHIFT`
- `CTRL`. `ALT`
- `PAUSE`
- `CAPS_LOCK`
- `ESC`
- `SPACE`
- `PAGE_UP`, `PAGE_DOWN`
- `END`, `HOME`
- `LEFT`, `UP`, `RIGHT`, `DOWN`
- `PRINT_SCREEN`
- `INSERT`, `DELETE`
- `ZERO`, `ONE`, `TWO`, `THREE`, `FOUR`, `FIVE`, `SIX`, `SEVEN`, `EIGHT`, `NINE`
- `NUMPAD_ZERO`, `NUMPAD_ONE`, `NUMPAD_TWO`, `NUMPAD_THREE`, `NUMPAD_FOUR`, `NUMPAD_FIVE`, `NUMPAD_SIX`, `NUMPAD_SEVEN`, `NUMPAD_EIGHT`, `NUMPAD_NINE`, `NUMPAD_ADD`, `NUMPAD_SUBTRACT`
- `OPEN_BRACKET`, `CLOSED_BRACKET`
- `SEMICOLON_FIREFOX`, `COLON`, `COMMA_FIREFOX_WINDOWS`, `COMMA_FIREFOX`, `BRACKET_RIGHT_FIREFOX`, `BRACKET_LEFT_FIREFOX`

### Keyboard combos

1. Create combo

```hljs js
Copyvar keyCombo = scene.input.keyboard.createCombo(keys, {
// resetOnWrongKey: true,
// maxKeyDelay: 0,
// resetOnMatch: false,
// deleteOnMatch: false,
});

- `keys` : Array of keyCodes
- In strings. ex: `['up', 'up', 'down', 'down']`, or `['UP', 'UP', 'DOWN', 'DOWN']`
- In key map. ex: `[Phaser.Input.Keyboard.KeyCodes.UP, ... ]`
- In numbers. ex: `[38, 38, 40, 40]`
- `resetOnWrongKey` : Set `true` to reset the combo when press the wrong key.
- `maxKeyDelay` : The max delay in ms between each key press. Set `0` to disable this feature.
- `resetOnMatch` : Set `true` to reset the combo when previously matched.
- `deleteOnMatch` : Set `true` to delete this combo when matched.
2. Listen combo matching event

```hljs js
Copyscene.input.keyboard.on("keycombomatch", function (keyCombo, keyboardEvent) {
/* ... */
});

## Gamepad input

### Enable gamepad manager

```hljs js
Copyvar config = {
// ...
input: {
gamepad: true,
},
// ...
};
var game = new Phaser.Game(config);

### Get gamepad

- Get all currently connected Gamepads.

```hljs js
Copyvar gamepads = scene.input.gamepad.getAll();

- Get gamepad by index

```hljs js
Copyvar gamepad = scene.input.gamepad.getPad(0);
// var gamepad = scene.input.gamepad.getPad(index);

- Get gamepad when button-down.

```hljs js
Copyscene.input.gamepad.once('down', function (gamepad, button, value) {
}

- `gamepad` : A reference to the Gamepad on which the button was released. See Properties of gamepad
- `button` : A reference to the Button which was released.
- `value` : The value of the button at the time it was released. Between 0 and 1. Some Gamepads have pressure-sensitive buttons.

### Events

- Button down

```hljs js
Copyscene.input.gamepad.on("down", function (gamepad, button, value) {});

```hljs js
Copygamepad.on("down", function (buttonIndex, value, button) {});

- Button up

```hljs js
Copyscene.input.gamepad.on('up', function (gamepad, button, value) {
}

```hljs js
Copygamepad.on("up", function (buttonIndex, value, button) {});

- Gamepad connected

```hljs js
Copyscene.input.gamepad.on('connected', function (gamepad, event) {
}

- Gamepad disconnected

```hljs js
Copyscene.input.gamepad.on('disconnected', function (gamepad, event) {
}

#### Buttons

- Cursor buttons

```hljs js
Copyvar isLeftDown = gamepad.left;
var isRightftDown = gamepad.right;
var isUpDown = gamepad.up;
var isDownDown = gamepad.down;

- Right buttons cluster

```hljs js
Copyvar isADown = gamepad.A; // Dual Shock controller: X button
var isYDown = gamepad.Y; // Dual Shock controller: Triangle button
var isXDown = gamepad.X; // Dual Shock controller: Square button.
var isBDown = gamepad.B; // Dual Shock controller: Circle button

- Shoulder buttons

```hljs js
Copyvar isL1Down = gamepad.L1; // XBox controller: LB button
var isL2Down = gamepad.L2; // XBox controller: LT button
var isR1Down = gamepad.R1; // XBox controller: RB button
var isR2Down = gamepad.R2; // XBox controller: RT button

#### Axis sticks

- Left sticks, right sticks

```hljs js
Copyvar leftStick = gamepad.leftStick;
var rightStick = gamepad.rightStick;

- `leftStick`, `rightStick` : Read only vector2.
- Angle : `leftStick.angle()`
- Length : `leftStick.length()`
- x, y : `leftStick.x` , `leftStick.y`

#### Properties

- `gamepad.index` : An integer that is unique for each Gamepad currently connected to the system.
This can be used to distinguish multiple controllers.
Note that disconnecting a device and then connecting a new device may reuse the previous index.
- `gamepad.id` : A string containing some information about the controller.
- `gamepad.buttons` : An array of Gamepad Button objects, corresponding to the different buttons available on the Gamepad.
- `gamepad.axes` : An array of Gamepad Axis objects, corresponding to the different axes available on the Gamepad, if any.

## Mouse wheel input

### Mouse wheel events

```hljs js
CopygameObject.on("wheel", function (pointer, dx, dy, dz, event) {
/* ... */
});

```hljs js
Copyscene.input.on(
"gameobjectwheel",
function (pointer, gameObject, dx, dy, dz, event) {
/* ... */
}
);

```hljs js
Copyscene.input.on(
"wheel",
function (pointer, currentlyOver, dx, dy, dz, event) {
/* ... */
}
);

### Mouse wheel properties

- `pointer.deltaX` : The horizontal scroll amount that occurred due to the user moving a mouse wheel or similar input device.
- `pointer.deltaY` : The vertical scroll amount that occurred due to the user moving a mouse wheel or similar input device.
- `pointer.deltaZ` : The z-axis scroll amount that occurred due to the user moving a mouse wheel or similar input device.

## Disable All Input Events

To enable / disable input events:

```hljs js
Copyscene.input.enabled = enabled; // enabled: true/false

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Geometry

Loader

---

# https://docs.phaser.io/phaser/concepts/game

# Game

Game

If you look at any Phaser example you'll see they all create an instance of the Phaser.Game class. Indeed, without it, nothing will actually happen. This one class can be considered as the heart of your game, for without it, nothing will run.

Typically, you only ever have one instance of a Phaser game at any given time. The Game class itself doesn't do a great deal, and beyond creating it, you rarely ever interact with it. Yet it's responsible for creating and updating all of the internal systems that your game needs while it is executing.

Even if you're creating the type of game that consists of lots of smaller games (think Mario Party, or Wario Ware), you'll still only ever have one instance of the Phaser Game class itself.

## Creating a basic Phaser Game instance

```hljs js
Copynew Phaser.Game({
scene: {
create: function () {
this.add.text(0, 0, 'Hello world');
}
}
});

It's not necessary to wait for DOMContentLoaded or window.onload before creating the game.

But if you have external stylesheets or images that affect page layout and you're using the Scale Manager, you may need to use window.onload.

The game is available on all scenes as `this.game` and is passed as an argument to relevant callbacks and event listeners, so you usually don't need to save a reference to the game unless you need to reach it from outside Phaser.

## Game configuration

- Basic game configuration object:

```hljs js
Copyconst config = {
type: Phaser.AUTO, // automatically detect browser WebGL support
width: 800, // canvas width
height: 600, // canvas height
backgroundColor: '#2d2d2d', // canvas background color
parent: 'phaser-example', // parent DOM element
scene: Example //
};

- Game config examples

You can read about the full list of config options here. For historical reasons, some config values can be set in two places: e.g., `width` and `height` are the same as `scale.width` and `scale.height`.

For most cases, you should add scenes and any plugins directly to the game config, as that's the simplest method.

Any special startup work should usually be done in the `preBoot` or `postBoot` callbacks.

`preBoot` runs only after DOMContentLoaded. `game.config` and `game.device` are available. **Some** `game.config` values can still be modified here. Most game systems have not been set up yet. You can add scenes to the game here. The game's BOOT event happens around the same time.

`postBoot` runs after all the game systems are ready. The game's READY event happens around the same time. Any scenes added before this are available (not pending) and have started if set to do so.

The game loop starts immediately after `postBoot`.

```hljs js
Copyconst config = {
preBoot: function (game) {
// Config (including defaults) has been created.
console.log('game config' game.config);
},
postBoot: function (game) {
// Game canvas has been created.
console.log('game canvas', game.canvas);
}
};

const game = new Phaser.Game(config);

## Global members

### Scene manager

Global scene manager in `game.scene`, or `scene.scene` in each scene.

### Data manager

Instance of data manager in `game.registry`, or `scene.registry` in each scene.

- Get the data manager:

```hljs javascript
Copyvar value = scene.registry.get(key);
// var value = game.registry.get(key);

- Add / update data in the data manager:

```hljs javascript
Copyscene.registry.set(key, value);
// game.registry.set(key, value);

- Events
- Set data events:

```hljs javascript
Copyscene.registry.events.on('setdata', function(parent, key, value){ /* ... */ });
// game.registry.events.on('setdata', function(parent, key, value){ /* ... */ })

- Change data events:

```hljs javascript
Copyscene.registry.events.on('changedata', function(parent, key, value, previousValue){ /* ... */ });
// game.registry.events.on('changedata', function(parent, key, value, previousValue){ /* ... */ })

```hljs javascript
Copyscene.registry.events.on('changedata-' + key, function(parent, value, previousValue){ /* ... */ });
// game.registry.events.on('changedata-' + key, function(parent, value, previousValue){ /* ... */ });

### Game time

- The time that the current game step started at.

```hljs javascript
Copyvar time = game.getTime();
// var time = scene.game.getTime();

- The current game frame.

```hljs javascript
Copyvar frameCount = game.getFrame();
// var frameCount = scene.game.getFrame();

- The delta time, since the last game step. This is a clamped and smoothed average value.

```hljs javascript
Copyvar delta = game.loop.delta;
// var delta = scene.game.loop.delta;

### Game config

```hljs javascript
Copyvar config = game.config;
// var config = scene.game.config;

### Window size

- Window width:

```hljs javascript
Copyvar width = game.config.width;
// var width = scene.game.config.width;

- Window height:

```hljs javascript
Copyvar height = game.config.height;
// var height = scene.game.config.height;

## Pause and resume

You can pause or resume the entire game with its `pause()` and `resume()` methods. You won't be able to resume the game from Phaser's input events, though, since they're also paused.

- Pause the entire game and emit a `PAUSE` event.

```hljs javascript
Copygame.pause();

- Resume the entire game and emit a `RESUME` event.

```hljs javascript
Copygame.resume();

- Is paused

```hljs javascript
Copyvar isPaused = game.isPaused;

## Events

Game events are emitted from the game's `events`.

`FOCUS` and `BLUR` happen when the game window or frame gains or loses focus by the user's mouse clicks or key presses.

`HIDDEN` and `VISIBLE` happen when the game tab or window is hidden, switched away from, minimized, or restored, per the Page Visibility API. Operating systems can differ here. `PAUSE` and `RESUME` events usually occur at the same time.

You can emit and listen to your own events on this emitter as long you avoid Phaser's event names.

- Pause (window is invisible) / Resume (window is visible) events

```hljs javascript
Copygame.events.on('pause', function() {});

```hljs javascript
Copygame.events.on('resume', function() {});

- Destroy event, triggered by `game.destroy()`

```hljs javascript
Copygame.events.on('destroy', function() {})

- On window focused/blurred events

```hljs javascript
Copygame.events.on('focus', function() {})

```hljs javascript
Copygame.events.on('blur', function(){ })

## Registry

The registry is the game's data store.

There's no way to pass registry data directly through the game config, but you can do it in a callback:

```hljs js
Copyconst config = {
callbacks: {
preBoot: function (game) {
game.registry.merge({
highScore: 0
});
}
}
};

## Systems

| Game | Scene | Description | Notes |
| --- | --- | --- | --- |
| `anims` | `anims` | Animation Manager | |
| `cache` | `cache` | Cache Manager | |
| `device` | `game.device` | Device record | |
| `events` | `game.events` | Global events emitter | The scene's `events` is its own emitter. |
| `input` | `input.manager` | Input Manager | Use the scene's Input Plugin `input` instead. |
| `loop` | `game.loop` | The game loop | |
| `plugins` | `plugins` | Plugins Manager | |
| `registry` | `registry` | Global registry | |
| `renderer` | `renderer` | Renderer | |
| `scale` | `scale` | Scale Manager | |
| `scene` | `scene.manager` | Scene Manager | Use the scene's Scene Plugin `scene` instead. |
| `sound` | `sound` | Sound Manager | |
| `textures` | `textures` | Texture Manager | |

## Destroying the game instance

```hljs javascript
Copygame.destroy();
// game.destroy(removeCanvas, noReturn);

## Author Credits

Content on this page includes work by:

- RexRainbow
- samme

Updated onJuly30, 2025, 3:14 PMUTC

* * *

FX

Game Objects

---

# https://docs.phaser.io/phaser/concepts/fx

# FX

FX

As of Phaser v3.60, the framework includes a new FX Pipeline system with lots of built-in effects. This is a powerful and flexible way to apply both pre and post-processing effects to your game. It's a WebGL only feature and is not available in Canvas mode as it relies on shaders.

The built-in FX include: Barrel, Bloom, Blur, Bokeh, Circle, ColorMatrix, Displacement, Glow, Gradient, Pixelate, Shadow, Shine, Vignette and Wipe.

The FX can be enabled on all of the common types of Game Objects and you can stack effects and control the stacking order. For example, you can apply both a glow and vignette effect to a Sprite. Cameras can also have FX applied to them, which impacts everything they render and lets you create effects such as a 'zoom blur' or pixelate.

- Barrel Distortion : A nice pinch / bulge distortion effect.
- Bloom : Add bloom to any Game Object, with custom offset, blur strength, steps and color.
- Blur : 3 different levels of gaussian blur (low, medium and high) and custom distance and color.
- Bokeh / Tilt Shift : A bokeh and tiltshift effect, with intensity, contrast and distance settings.
- Circle Outline : Add a circular ring around any Game Object, useful for masking / avatar frames, with custom color, width and background color.
- Color Matrix : Add a ColorMatrix to any Game Object with access to all of its methods, such as `sepia`, `greyscale`, `lsd` and lots more.
- Glow : Add a smooth inner or outer glow, with custom distance, strength and color.
- Displacement : Use a displacement texture, such as a noise texture, to drastically (or subtly!) alter the appearance of a Game Object.
- Gradient : Draw a gradient between two colors across any Game Object, with optional 'chunky' mode for classic retro style games.
- Pixelate : Make any Game Object appear pixelated, to a varying degree.
- Shine : Run a 'shine' effect across a Game Object, either additively or as part of a reveal.
- Shadow : Add a drop shadow behind a Game Object, with custom depth and color.
- Vignette : Apply a vignette around a Game Object, with custom offset position, radius and color.
- Wipe / Reveal : Set a Game Object to 'wipe' or 'reveal' with custom line width, direction and axis of the effect.

Texture-based Game Objects also support Pre FX, including: Image, Sprite, TileSprite, Text, RenderTexture, Video.

All Game Objects and camera support Post FX. These are effects applied after the Game Object has been rendered.

- Author: Richard Davey
- Pre-fx, and Post-fx shader effects

Only work in WebGL render mode.

## Live demos

- Official demos

## Barrel

- Add pre-fx to game object

```hljs javascript
Copy// gameObject.preFX.setPadding(padding);
var effect = gameObject.preFX.addBarrel(amount);

- `padding` : The amount of padding to add to this Game Object, in pixels.
- Used when `amount` is larger than `1`.
- `amount` : The amount of distortion applied to the barrel effect.
- `1` : No distortion
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addBarrel(amount);

```hljs javascript
Copyvar effect = camera.postFX.addBarrel(amount);

- Disable effect

```hljs javascript
Copyeffect.setActive(false);
// effect.active = false;

- Remove effect

```hljs javascript
CopygameObject.preFX.remove(effect);

```hljs javascript
Copycamera.postFX.remove(effect);

- Properties

```hljs javascript
Copyeffect.amount = amount;

## Bloom

```hljs javascript
Copyvar effect = gameObject.preFX.addBloom(color, offsetX, offsetY, blurStrength, strength, steps);

- `color` : The color of the Bloom, as a hex value.
- `offsetX`, `offsetY` : The horizontal/vertical offset of the bloom effect. Default value is `1`.
- `blurStrength` , `strength` : The strength of the blur/blend process of the bloom effect. Default value is `1`.
- `steps` : The number of steps to run the Bloom effect for. This value should always be an integer. Default value is `4`.
- The higher the value, the smoother the Bloom, but at the cost of exponentially more gl operations.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addBloom(color, offsetX, offsetY, blurStrength, strength, steps);

```hljs javascript
Copyvar effect = camera.postFX.addBloom(color, offsetX, offsetY, blurStrength, strength, steps);

```hljs javascript
Copyeffect.color = color; // hex value
effect.offsetX = offsetX;
effect.offsetY = offsetY;
effect.blurStrength = blurStrength;
effect.strength = strength;
effect.steps = steps; // integer

## Blur

```hljs javascript
Copyvar effect = gameObject.preFX.addBlur(quality, x, y, strength, color, steps);

- `quality` : The quality of the blur effect. Default value is `0`.
- `0` : Low Quality
- `1` : Medium Quality
- `2` : High Quality
- `x`, `y` : The horizontal/vertical offset of the blur effect. Default value is `2`
- `strength` : The strength of the blur effect. Default value is `1`.
- `color` : The color of the blur, as a hex value. Default value is `0xffffff`.
- `steps` : The number of steps to run the blur effect for. This value should always be an integer.
- The higher the value, the smoother the blur, but at the cost of exponentially more gl operations.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addBlur(quality, x, y, strength, color, steps);

```hljs javascript
Copyvar effect = camera.postFX.addBlur(quality, x, y, strength, color, steps);

```hljs javascript
Copyeffect.quality = quality;
effect.x = x;
effect.y = y;
effect.strength = strength;
effect.color = color;
effect.steps = steps;

## Bokeh

```hljs javascript
Copyvar effect = gameObject.preFX.addBokeh(radius, amount, contrast);

- `radius` : The radius of the bokeh effect. Default value is `0.5`.
- `amount` : The amount of the bokeh effect. Default value is `1`.
- `contrast` : The color contrast of the bokeh effect. Default value is `0.2`.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = camera.postFX.addBokeh(radius, amount, contrast);

```hljs javascript
Copyeffect.radius = radius;
effect.amount = amount;
effect.contrast = contrast;

## Tilt Shift

```hljs javascript
Copyvar effect = gameObject.preFX.addTiltShift(radius, amount, contrast, blurX, blurY, strength);

- `radius` : The radius of the bokeh effect. Default value is `0.5`.
- `amount` : The amount of the bokeh effect. Default value is `1`.
- `contrast` : The color contrast of the bokeh effect. Default value is `0.2`.
- `blurX`, `blurY` : The amount of horizontal/vertical blur.
- `strength` : The strength of the blur.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addTiltShift(radius, amount, contrast, blurX, blurY, strength);

```hljs javascript
Copyvar effect = camera.postFX.addTiltShift(radius, amount, contrast, blurX, blurY, strength);

```hljs javascript
Copyeffect.radius = radius;
effect.amount = amount;
effect.contrast = contrast;
effect.blurX = blurX;
effect.blurY = blurY;
effect.strength = strength;

## Circle Outline

```hljs javascript
Copyvar effect = gameObject.preFX.addCircle(thickness, color, backgroundColor, scale, feather);

- `thickness` : The width of the circle around the texture, in pixels. Default value is `8`.
- `color` : The color of the circular ring, given as a number value. Default value is `0xfeedb6`.
- `backgroundColor` : The color of the background, behind the texture, given as a number value. Default value is `0xff0000`.
- `scale` : The scale of the circle. Default value is `1`.
- `1` : Full size of the underlying texture.
- `feather` : The amount of feathering to apply to the circle from the ring. Default value is `0.005`.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addCircle(thickness, color, backgroundColor, scale, feather);

```hljs javascript
Copyvar effect = camera.postFX.addCircle(thickness, color, backgroundColor, scale, feather);

```hljs javascript
Copyeffect.thickness = thickness;
effect.color = color;
effect.backgroundColor = backgroundColor;
effect.backgroundAlpha = backgroundAlpha;
effect.scale = scale;
effect.feather = feather;

## ColorMatrix

```hljs javascript
Copyvar effect = gameObject.preFX.addColorMatrix();

- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addColorMatrix();

```hljs javascript
Copyvar effect = camera.postFX.addColorMatrix();

- Methods
- Brightness : Changes the brightness of this ColorMatrix by the given amount.

```hljs javascript
Copyeffect.brightness(value, multiply);

- `value` : The amount of brightness to apply to this ColorMatrix. `0`(black)~ `1`. Default value is `0`.
- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Saturate : Changes the saturation of this ColorMatrix by the given amount.

```hljs javascript
Copyeffect.saturate(value, multiply);

- `value` : The amount of saturation to apply to this ColorMatrix. Default value is `0`.
- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Desaturate : Desaturates this ColorMatrix (removes color from it).

```hljs javascript
Copyeffect.desaturate(value, multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Hue : Rotates the hues of this ColorMatrix by the value given.

```hljs javascript
Copyeffect.hue(rotation, multiply);

- `rotation` : The amount of hue rotation to apply to this ColorMatrix, in degrees. Default value is `0`.
- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Grayscale : Sets this ColorMatrix to be grayscale.

```hljs javascript
Copyeffect.grayscale(value, multiply);

- `value` : The grayscale scale `0`(black)~ `1`. Default value is `1`.
- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- BlackWhite : Sets this ColorMatrix to be black and white.

```hljs javascript
Copyeffect.blackWhite(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Contrast : Change the contrast of this ColorMatrix by the amount given.

```hljs javascript
Copyeffect.contrast(value, multiply);

- `value` : The amount of contrast to apply to this ColorMatrix. Default value is `0`.
- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Negative : Converts this ColorMatrix to have negative values.

```hljs javascript
Copyeffect.negative(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- DesaturateLuminance : Apply a desaturated luminance to this ColorMatrix.

```hljs javascript
Copyeffect.desaturateLuminance(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Sepia : Applies a sepia tone to this ColorMatrix.

```hljs javascript
Copyeffect.sepia(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Night : Applies a night vision tone to this ColorMatrix.

```hljs javascript
Copyeffect.night(intensity, multiply);

- `intensity` : The intensity of this effect. Default value is `0.1`.
- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- LSD : Applies a trippy color tone to this ColorMatrix.

```hljs javascript
Copyeffect.lsd(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Brown : Applies a brown tone to this ColorMatrix.

```hljs javascript
Copyeffect.brown(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- VintagePinhole : Applies a vintage pinhole color effect to this ColorMatrix.

```hljs javascript
Copyeffect.vintagePinhole(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Kodachrome : Applies a kodachrome color effect to this ColorMatrix.

```hljs javascript
Copyeffect.kodachrome(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Technicolor : Applies a technicolor color effect to this ColorMatrix.

```hljs javascript
Copyeffect.technicolor(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- Polaroid : Applies a polaroid color effect to this ColorMatrix.

```hljs javascript
Copyeffect.polaroid(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.
- ShiftToBGR : Shifts the values of this ColorMatrix into BGR order.

```hljs javascript
Copyeffect.shiftToBGR(multiply);

- `multiply` : Multiply the resulting ColorMatrix ( `true`), or set it ( `false`) ?
- `true` : Multiply the resulting.
- `false` : Set the resulting. Default behavior.

## Displacement

```hljs javascript
Copyvar effect = gameObject.preFX.addDisplacement(texture, x, y);

- `texture` : The unique string-based key of the texture to use for displacement, which must exist in the Texture Manager. Default value is `'__WHITE'`.
- You can only use a whole texture, not a frame from a texture atlas or sprite sheet.
- `x`, `y` : The amount of horizontal/vertical displacement to apply. Default value is `0.005`.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addDisplacement(texture, x, y);

```hljs javascript
Copyvar effect = camera.postFX.addDisplacement(texture, x, y);

```hljs javascript
Copyeffect.x = x;
effect.y = y;

- Methods
- Set texture

```hljs javascript
Copyeffect.setTexture(key);

## Glow

```hljs javascript
Copy// gameObject.preFX.setPadding(padding);
var effect = gameObject.preFX.addGlow(color, outerStrength, innerStrength, knockout);

- `padding` : The amount of padding to add to this Game Object, in pixels.
- Used when `amount` is larger than `1`.
- `color` : The color of the glow effect as a number value. Default value is `0xffffff`.
- `outerStrength`, `innerStrength` : The strength of the glow outward/inward from the edge of the Sprite. Default value is `4`/ `0`.
- `knockout` :
- `true` : Only the glow is drawn
- `false` : Draw glow and texture. Default behavior.
- `quality` : Only available for PostFX. Sets the quality of this Glow effect. Default is 0.1. Cannot be changed post-creation.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addGlow(color, outerStrength, innerStrength, knockout, quality, distance);

```hljs javascript
Copyvar effect = camera.postFX.addGlow(color, outerStrength, innerStrength, knockout, quality, distance);

- `quality` : Sets the quality of this Glow effect. Default is `0.1`. Cannot be changed post-creation.
- `distance` : Sets the distance of this Glow effect. Default is `10`. Cannot be changed post-creation.
- Disable effect

```hljs javascript
Copyeffect.color = color;
effect.outerStrength = outerStrength;
effect.innerStrength = innerStrength;
effect.knockout = knockout;

## Gradient

```hljs javascript
Copyvar effect = gameObject.preFX.addGradient(color1, color2, alpha, fromX, fromY, toX, toY, size);

- `color1`, `color2` : The first/second gradient color, given as a number value. Default values are `0xff0000`/ `0x00ff00`.
- `alpha` : The alpha value of the gradient effect.
- `fromX`, `fromY` : The horizontal/vertical position the gradient will start from. Value between `0` and `1`.
- `toX`, `toY` : The horizontal/vertical position the gradient will end at. Value between `0` and `1`.
- `size` : How many 'chunks' the gradient is divided in to, as spread over the entire height of the texture.
- `0` : Smooth gradient. Default behavior.
- Others : Retro chunky effect.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addGradient(color1, color2, alpha, fromX, fromY, toX, toY, size);

```hljs javascript
Copyvar effect = camera.postFX.addGradient(color1, color2, alpha, fromX, fromY, toX, toY, size);

```hljs javascript
Copyeffect.color1 = color1;
effect.color2 = color2;
effect.alpha = alpha;
effect.fromX = fromX;
effect.fromY = fromY;
effect.toX = toX;
effect.toY = toY;
effect.size = size;

## Pixelate

```hljs javascript
Copyvar effect = gameObject.preFX.addPixelate(amount);

- `amount` : The amount of pixelation to apply, in pixels.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addPixelate(amount);

```hljs javascript
Copyvar effect = camera.postFX.addPixelate(amount);

## Shadow

```hljs javascript
Copy// gameObject.preFX.setPadding(padding);
var effect = gameObject.preFX.addShadow(x, y, decay, power, color, samples, intensity);

- `padding` : The amount of padding to add to this Game Object, in pixels.
- Used when `amount` is larger than `1`.
- `x`, `y` : The horizontal/vertical offset of the shadow effect. Default value is `0`.
- `decay` : The amount of decay for shadow effect. Default value is `0.1`.
- `power` : The power of the shadow effect. Default value is `1`.
- `color` : The color of the shadow. Default value is `0x000000`.
- `samples` : The number of samples that the shadow effect will run for. An integer between `1` and `12`.
- `intensity` : The intensity of the shadow effect. Default value is `1`.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addShadow(x, y, decay, power, color, samples, intensity);

```hljs javascript
Copyvar effect = camera.postFX.addShadow(x, y, decay, power, color, samples, intensity);

```hljs javascript
Copyeffect.x = x;
effect.y = y;
effect.decay = decay;
effect.power = power;
effect.color = color;
effect.samples = samples;
effect.intensity = intensity;

## Shine

```hljs javascript
Copyvar effect = gameObject.preFX.addShine(speed, lineWidth, gradient, reveal);

- `speed` : The speed of the Shine effect. Default value is `0.5`.
- `lineWidth` : The line width of the Shine effect. Default value is `0.5`.
- `gradient` : The gradient of the Shine effect. Default value is `3`.
- `reveal` : Does this Shine effect reveal or get added to its target?
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addShine(speed, lineWidth, gradient, reveal);

```hljs javascript
Copyvar effect = camera.postFX.addShine(speed, lineWidth, gradient, reveal);

```hljs javascript
Copyeffect.speed = speed;
effect.lineWidth = lineWidth;
effect.gradient = gradient;
effect.reveal = reveal;

## Vignette

```hljs javascript
Copyvar effect = gameObject.preFX.addVignette(x, y, radius, strength);

- `x`, `y` : The horizontal/vertical offset of the vignette effect. Value is between `0` and `1`. Default value is `0.5`.
- `radius` : The radius of the vignette effect. Value is between `0` and `1`. Default value is `0.5`.
- `strength` : The strength of the vignette effect. Default value is `0.5`.
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addVignette(x, y, radius, strength);

```hljs javascript
Copyvar effect = camera.postFX.addVignette(x, y, radius, strength);

```hljs javascript
Copyeffect.x = x;
effect.y = y;
effect.radius = radius;
effect.strength = strength;

## Wipe

```hljs javascript
Copyvar effect = gameObject.preFX.addWipe(wipeWidth, direction, axis);

- `wipeWidth` : The width of the wipe effect. Value is between `0` and `1`. Default value is `0.1`.
- `direction` : The direction of the wipe effect.
- `0` : Left to right, or top to bottom
- `1` : Right to left, or bottom to top
- `axis` : The axis of the wipe effect.
- `0` : Left to right, or right to left
- `1` : Bottom to top, or top to bottom
- Add post-fx to game object, or camera

```hljs javascript
Copyvar effect = gameObject.postFX.addWipe(wipeWidth, direction, axis);

```hljs javascript
Copyvar effect = camera.postFX.addWipe(wipeWidth, direction, axis);

```hljs javascript
Copyeffect.progress = t; // 0~1
effect.wipeWidth = wipeWidth;
effect.direction = direction; // 0, 1
effect.axis = axis; // 0, 1

## Reveal

```hljs javascript
Copyvar effect = gameObject.preFX.addReveal(wipeWidth, direction, axis);

```hljs javascript
Copyvar effect = gameObject.postFX.addReveal(wipeWidth, direction, axis);

```hljs javascript
Copyvar effect = camera.postFX.addReveal(wipeWidth, direction, axis);

## Remove all effects

```hljs javascript
CopygameObject.preFX.clear();

```hljs javascript
CopygameObject.postFX.clear();

```hljs javascript
Copycamera.postFX.clear();

## Disable all effects

```hljs javascript
CopygameObject.preFX.disable();
// gameObject.preFX.disable(true); // Also remove all effects

```hljs javascript
CopygameObject.postFX.disable();
// gameObject.postFX.disable(true); // Also remove all effects

```hljs javascript
Copycamera.postFX.disable();
// camera.postFX.disable(true); // Also remove all effects

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Events

Game

---

# https://docs.phaser.io/phaser/concepts/scenes

# Scenes

A Guide to Phaser Scenes

Phaser uses the concept of Scenes to allow you to divide your game up into logical sections. A Scene can be as large, or as small, as you like. Typical uses for a Scene would be a Loading Screen, a Main Menu, a Game Level, a Boss Fight, an in-game Item Shop, a High Score Table, etc. You can have as many Scenes in your game as you like. When you are starting out, you'll probably only have one or two, but as your game grows in complexity, you'll find yourself adding more.

It's important to understand that you do not have to have one Scene per file. You can, if you like, but it's not a requirement. You can have all of your Scenes in a single file, or you can have one file per Scene. It's entirely up to you.

Internally, there is a Scene Manager. This Manager is what you interact with when you add, remove or switch between Scenes. It's also responsible for updating and rendering the Scenes. You have full control over the order in which the Scenes are rendered in your game. For example, it's a common practise to have a Scene dedicated entirely to handling the UI for your game, that is rendered above all other Scenes.

We will look at the life-cycle of a Scene in more detail later, but for now it's worth understanding that you can pause, resume and sleep a Scene at will, and that you can easily run multiple Scenes at the same time.

## What is a Scene?

In Phaser 2 there was the concept of a Game World and States. A State allowed you a view into the Game World and only one State could ever be running at once. The State had access to all kinds of systems, such as a Camera, Tweens and the Game Object Factory. When you used a command like `this.add` from within a State, you were talking to the global Game Object Factory. Once you were done with a State you moved to the next one. States were often split up into logical sections, such as a Preloader State, a Main Menu State and so on.

In Phaser 3 we changed our approach to this entirely. The first change was that States were renamed to Scenes. This was to avoid ambiguity with 'state machines', which are commonly used in games. The global State Manager was also replaced with a Scene Manager. The two terms are conceptually interchangeable, but Scene is the correct term to use and expect to see in Phaser 3. If you find any reference to States in code or a tutorial you've found online, it's for Phaser 2 and likely won't work in Phaser 3. The changes were not just in the naming of the classes though, they run much deeper than this.

Rather than Phaser managing one 'Game World' there is now no World object at all. Instead of Scenes just having references to all of the systems that the Phaser.Game instance owns, they now own them themselves. You can think of Scenes as being almost entirely self-contained Game Worlds in their own right. They manage their own input, tweens, game objects, display list, cameras and more. A Tween created in Scene A is completely separate to one created in Scene B.

Scenes now control everything using their own instances of plugins. In fact the only thing that the Game itself is responsible for is passing on global DOM based events to the Scenes, such as when to update (from RequestAnimationFrame) or core input events from the Input Manager. The handling of these events are done by the Scenes themselves though.

### What does Game still control?

There are a few systems which are inherently global in their nature and therefore belong to the Game instance. These are:

- The Renderer. There is only one instance of either the Canvas or WebGL Renderer per Game, and it's a property of the Game object.
- The Animation Manager. Animations in Phaser 3 are global and no longer bound to a specific Game Object. You can create many different animations, which are all stored in the Animation Manager, and then any Game Object, in any Scene, can use them without duplicating lots of data and wasting memory.
- The Cache. When files are loaded by a Scene they are placed into a global cache. So if Scene A loads an XML file, that XML data can be retrieved by any Scene as the cache is global.
- The Registry. Every Scene has its own instance of the DataManager, but the Game also has one which you can reference from a Scene via the property `registry`. This allows for easy cross-Scene data exchange (as we'll see later in this guide)
- The Input Manager. The Input Manager does very little in Phaser 3. It just monitors and processes DOM-level input events, such as those raised from pointers, gamepads or the keyboard. Every Scene has its own Input Plugin, which is what does all of the real work with the events, and is what you interface with when calling `this.input` from a Scene.
- The Scene Manager. Responsible for creating, managing and updating all of the Scenes in your game.
- The Device Inspector. Allows you to poll for features supported by the browser and hardware your game is running on. The Device class is actual a singleton and only runs once per browser, so isn't directly bound to your Game instance (i.e. if you had 2 game instances running on the same page, they would share the global Device inspector)
- The Sound Manager. Like rendering, sounds are managed by a global system in Phaser 3. You can create Sound objects, markers, and so on from your Scenes, but there is only one manager running at once to avoid resource allocation issues.
- The TimeStep. This plugin manages the Request Animation Frame loop and updates the core Game, causing it to step. You rarely need to interact with this directly.

Everything else, such as Tweens, Physics, Game Objects and Input handling are all managed through Scene level plugins. The Game is now only used for the timestep and the systems that are truly global, which wouldn't have made sense to duplicate per Scene.

### What happens when you create a Scene

There are lots of different ways to create a Scene but the fundamental approach is the same in all of them. A Scene consists of a Scene Configuration object and a bunch of functions. Here we'll create an example Scene using an ES6 approach:

```hljs js
Copyclass MyScene extends Phaser.Scene {

constructor ()
{
super('MyFirstScene');
}

preload ()
{
this.load.image('logo', 'assets/sprites/logo.png');
}

create ()
{
this.add.image(400, 300, 'logo');
}

}

We extend the `Phaser.Scene` object and give it a unique key (in this case `MyFirstScene`) in the constructor. There are two methods: `preload` and `create`. The first loads an image, the second displays it. You don't _have_ to have a `preload` method, the only requirement to be a valid Scene is a `create` method as this is the global entry-point of all Scenes in Phaser 3.

Here is the exact same thing using ES5:

```hljs js
Copyvar MyScene = new Phaser.Scene('MyFirstScene');

MyScene.preload = function ()
{
this.load.image('logo', 'assets/sprites/logo.png');
}

MyScene.create = function ()
{
this.add.image(400, 300, 'logo');
}

### Game configuration

Creating the Scene on its own isn't enough though, it also needs to be added to the Game. You can do this when the Game is created, using the game config like this:

```hljs js
Copyvar config = {
type: Phaser.AUTO,
width: 800,
height: 600,
scene: MyScene
};

var game = new Phaser.Game(config);

The Scene has been passed in via the `scene` property. This can also be an array of Scenes if you have more than one. This is exactly the same regardless of ES5 or ES6.

If you've looked at any of the Phaser 3 examples you'll probably have seen a completely different method of creating a Scene that looks more like this:

```hljs js
Copyvar config = {
type: Phaser.AUTO,
width: 800,
height: 600,
scene: {
preload: preload,
create: create
}
};

function preload ()
{
this.load.image('logo', 'assets/sprites/logo.png');
}

function create ()
{
this.add.image(400, 300, 'logo');
}

So hang on a minute, in the ES6 and ES5 Scenes we passed an instance of them in the game config, but in the above code we're passing an actual object with just a couple of properties ( `preload` and `create`) instead.

The reason this works is that, internally, the Scene Manager does a lot to determine what's being given to it.

First it looks at the `scene` property of the game config. If it's an array it then iterates through it, processing each entry in turn, otherwise it just processes the first entry found. It inspects each item given to it to see what type it is, i.e. a class, an object or a prototype function, and then turns them into full Scene objects, adding them into the Scene Manager.

Ultimately, it doesn't matter which approach you use to define your Scene, once the Scene Manager is done with them they're all treated the same internally anyway. And it's when they get turned into full Scenes that they gain several important additions such as the Scene Settings and Systems, plus the ability to communicate with each other.

#### Scene Settings

When your Scene is created it extracts any settings you may have defined in its config. If there aren't any, it just uses the defaults. Settings are defined in a configuration object passed to the Scene constructor. Here's an example of setting the Scenes name and physics engine from the config:

Copyclass Level1Scene extends Phaser.Scene {

constructor ()
{
super({
key: 'Level1',
physics: {
arcade: {
debug: true,
gravity: { y: 200 }
}
}
});
}

The Settings object can also be used to load files. You should really only use this for loading small files as no progress feedback is ever given to the user. Use the following syntax:

Copyclass BootScene extends Phaser.Scene {

constructor ()
{
super({
key: 'boot',
files: [\
{ type: 'image', key: 'bar', url: 'loaderBar.png' },\
{ type: 'image', key: 'bg', url: 'background.png' }\
]
});
}

The assets are loaded _before_ your Scene Preload method is called.

It's perfect for loading a very small number of graphics, i.e. a background and progress bar image, that your Preloader Scene can then display while loading all the rest of the game assets. Or you could use it to load your internal game config, which could be parsed before loading the rest of the assets.

#### Scene Systems

When the Scene Manager creates your scene it installs a Scene Systems object into it. This is placed on the property `sys`, meaning you should never replace or overwrite the property `sys` in your game code, or very bad things will happen :)

The Scene Systems class is the heart of your Scene. It controls all of the Scene plugins, emits events, lets you to modify the Scene (such as sending it to sleep, waking it up, etc) and allows all of the plugins to communicate with the each other.

It will automatically install 7 **Core Plugins** into your Scenes:

- An Event Emitter
- The 2D Camera Manager
- The Game Object Creator
- The Game Object Factory
- The Scene Plugin
- The Display List
- The Update List

As you can see from the list above, each Scene has its own Display List, factories and Camera system. So when you issue a command like `this.add.image` you're interfacing directly with the Scene based Game Object Factory, and adding the resulting image to the Scene level display list.

These plugins are non-optional, as they all rely on each other being present. So every Scene has them. However, you can control which are exposed as _properties_ on the Scene objects via the Injection Map.

There are also 7 **Default Plugins**. These are installed into your Scenes unless you specify otherwise via the Scene config:

- The 3D Camera Manager
- The Clock
- The Data Manager Plugin
- The Input Plugin
- The Loader Plugin
- The Tween Manager
- The Lights Plugin

The plugins above are all optional. As with the Core Plugins you can control which ones are exposed via properties using the Injection Map.

#### Configuring Plugins

Remember that the Core Plugins cannot be removed. To remove all of the Default Plugins you simply have to pass an empty plugins array in your scene config:

constructor ()
{
super({
key: 'boot',
plugins: []
});
}

If you now try and use `this.load` in your Scene, it will fail, because the Loader Plugin has been excluded from this Scene.

If you want just the Loader and Tween plugin, but none of the others, you can specify just those:

constructor ()
{
super({
key: 'boot',
plugins: [ 'Loader', 'TweenManager' ]
});
}

If you're not sure which plugins you will need when you create your Scene you can install them via the Scene Systems. This must be done in an `init` method:

init ()
{
this.sys.install('TweenManager');
}

The call to `install` tells it to install the Default Plugin `TweenManager`, allowing you to add tweens in this Scene.

#### Scene Injection Map

In Phaser 2 the State Manager would create no less than 19 properties within your State, all linked to global game systems. For example it would take your State and then add the `physics` property to it, which mapped to the Physics manager, `scale` mapped to the Scale Manager, and so on.

This was a double-edged sword. It made Phaser incredibly easy to use. There was no convoluted access required to a system, you literally just typed it out and there it was. However, you had no choice over the quantity or name of the properties that were injected. If you really wanted to use a local property called `world` you couldn't without literally breaking your game. If you accidentally overwrote one of the 19 default properties, it would also break your game. Experienced devs learned to deal with this but we thought there was a better way for Phaser 3.

To that end, we created a Scene Injection Map. This object controls which plugins are mapped to properties within your Scene, and controls exactly what those properties are called.

By default all of the following properties are installed into a Scene:

'anims' = Animation Manager (Global)
'cache' = Cache (Global)
'game' = Phaser.Game instance (Global)
'registry' = Game Data Manager (Global)
'sound' = Sound Manager (Global)
'textures' = Texture Manager (Global)

'add' = Game Object Factory (Local, Core)
'cameras' = 2D Camera Manager (Local, Core)
'children' = Display List (Local, Core)
'events' = Event Emitter (Local, Core)
'make' = Game Object Creator (Local, Core)
'scene' = Scene Manager Plugin (Local, Core)

The following properties are installed into a Scene only if the respective plugin is available:

'cameras3d' = 3D Camera Manager (Local, Optional)
'data' = Scene Data Manager (Local, Optional)
'impact' = Impact Physics (Local, Optional)
'input' = Input Plugin (Local, Optional)
'lights' = Lights Manager Plugin (Local, Optional)
'load' = Loader Plugin (Local, Optional)
'matter' = Matter JS Physics (Local, Optional)
'physics' = Arcade Physics (Local, Optional)
'time' = Time / Clock Plugin (Local, Optional)
'tweens' = Tween Manager (Local, Optional)

If you prefer you can choose not to have any properties added to your Scene at all:

constructor ()
{
super({
key: 'boot',
map: {}
});
}

Or you can change the name of the property that is injected using the `map` object. Here we will replace the English properties with Spanish equivalents:

constructor ()
{
super({
key: 'boot',
map: {
add: 'agregar',
anims: 'animaciones',
cameras: 'camaras',
events: 'eventos',
load: 'cargar',
sound: 'sonido'
}
});
}

preload ()
{
this.cargar.image('face', 'assets/bw-face.png');
}

create ()
{
this.agregar.image(400, 300, 'face');
}

If your IDE supports it, you can even use UTF8, such as this Simplified Chinese version:

constructor ()
{
super({
key: 'boot',
map: {
add: '加',
load: '加载'
}
});
}

preload ()
{
this.加载.image('face', 'assets/pics/bw-face.png');
}

create ()
{
this.加.image(400, 300, 'face');
}

## Scene Callbacks

The scene callback methods are `init()`, `preload()`, `create()`, and `update()`. The archetypal callback pattern is

```hljs js
Copy// Configure this scene cycle
function init(data) {}

// Queue assets for downloading
function preload() {}

// Create game objects with loaded assets
function create(data) {}

// Work on game objects at each game step
function update(time, delta) {}

`init()` is less often used.

You can create game objects in any method, but if you've queued assets in `preload()` then you won't be able to use those assets before `create()`.

If you don't use `preload()` then the pattern is simply:

```hljs js
Copy// Create game objects
function create(data) {}

Either `init()` or `create()` can be used.

Within the scene callbacks, this is the scene. If you don't much like using `this`, you can assign it to a variable:

```hljs js
Copylet scene;

function init() {
if (scene) throw new Error("Only one scene can use the `scene` variable");

scene = this;

scene = null;
});

scene = null;
});
}

Or you can destructure it within a callback:

```hljs js
Copyfunction create() {
const { add, cameras, events } = this;

add.sprite(/*…*/);
}

## Scene creation

Scenes can be created from a class or a config object. They're added to the game through the Scene Manager. This can be done through the game config, the `add()` methods, or (rarely) load.scene().

- If a config object is given, a new `Phaser.Scene` is instantiated and some of the config values are copied onto it.
- If a class is given, it's instantiated.
- The scene is booted.
- The scene is started, if you indicated so.

Every scene in the Scene Manager's list is an object (instance) that's been booted, and lasts until it's removed (destroyed).

#### Using an ES6 class

```hljs js
Copyclass MyScene extends Phaser.Scene {
constructor(config) {
super(config);
}

init(data) {}
preload() {}
create(data) {}
update(time, delta) {}
}

- `data` : Parameters passed from adding new scene, or starting scene

#### Using a Class

```hljs js
Copyvar MyScene = new Phaser.Class({
Extends: Phaser.Scene,

initialize: function MyScene(config) {
Phaser.Scene.call(this, config);
},

init: function (data) {},
preload: function () {},
create: function (data) {},
update: function (time, delta) {},
});

```hljs js
Copyvar MyGame = {};

MyGame.Boot = function () {};

MyGame.Boot.prototype.constructor = MyGame.Boot;

MyGame.Boot.prototype = {
init: function (data) {},
preload: function () {},
create: function (data) {},
update: function (time, delta) {},
};

#### Overriding default callbacks

```hljs js
Copyvar demo = new Phaser.Scene("Demo");

demo.init = function (data) {};
demo.preload = function () {};
demo.create = function (data) {};
demo.update = function (time, delta) {};

### Creating a single-scene game

It's simplest to use the game config. When only one scene is given, it is started automatically.

#### A scene config in the game config

```hljs js
Copyconst sceneConfig = {
create: function () {
/*…*/
},
};

new Phaser.Game({
scene: sceneConfig,
});

#### A scene class in the game config

```hljs js
Copyclass Scene extends Phaser.Scene {
create() {
/*…*/
}
}

new Phaser.Game({
scene: Scene,
});

#### A scene instance in the game config

new Phaser.Game({
scene: new Scene(),
});

You may also use `scene.add()`, although there's no great advantage in this case. `autoStart` (the third argument) means start the scene at the time that's added.

#### Add a scene from a config object

new Phaser.Game({
callbacks: {

game.scene.add("default", sceneConfig, true);
},
},
});

#### Add a scene from a scene class

game.scene.add("default", Scene, true);
},
},
});

#### Add a scene from a scene instance

game.scene.add("default", new Scene(), true);
},
},
});

Beware that with `scene.add()`, it's possible provide conflicting scene keys:

```hljs js
Copy// OOPS
game.scene.add("yin", new Scene("yang"), true);

In this case the scene is instantiated with the key 'yang' and then the Scene Manager changes the key to 'yin'.

### Creating a multi-scene game

In a multi-scene game, each scene needs a unique key.

Again, it's easiest to add scenes in the game config. The first scene plus any additional scenes with `{ active: true }` are started automatically.

#### Multiple scene configs in the game config

```hljs js
Copyconst bootSceneConfig = { key: 'boot', /*…*/ };
const playSceneConfig = { key: 'play', /*…*/ };
const uiSceneConfig = { key: 'ui', active: true };

new Phaser.Game({
// 'boot' and 'ui' will be started
scene: [ bootSceneConfig, playSceneConfig, uiSceneConfig ]
};

#### Multiple scene instances in the game config

```hljs js
Copy// Scene classes:
class BootScene {
/*…*/
}
class PlayScene {
/*…*/
}
class UIScene {
/*…*/
}

new Phaser.Game({
// 'boot' and 'ui' will be started
scene: [\
new BootScene("boot"),\
new PlayScene("play"),\
new UIScene({ key: "ui", active: true }),\
],
});

You can configure scenes in their constructors instead if you like.

#### Multiple scenes from a base config

```hljs js
Copyconst levelSceneConfig = { preload, create, update };
const level1SceneConfig = { ...levelSceneConfig, key: 'level1' };
const level2SceneConfig = { ...levelSceneConfig, key: 'level2' };

new Phaser.Game({
scene: [ level1SceneConfig, level2SceneConfig ]
};

#### Multiple scenes from one class

```hljs js
Copyclass LevelScene {/*…*/};

new Phaser.Game({
scene: [ new LevelScene('level1'), new LevelScene('level2') ]
};

##### A 2-scene game

```hljs js
Copyclass Boot extends Phaser.Scene {
// Load assets
preload() {}

// Start Play scene
create() {}
}

class Play extends Phaser.Scene {
// Create game objects with loaded assets
create() {}

// Update the scene
update() {}
}

new Phaser.Game({
scene: [\
// Only 'boot' will start.\
new Boot("boot"),\
new Play("play"),\
],
});

### Listing scenes after game boot

```hljs js
Copynew Phaser.Game({
scene: [\
/* etc. */\
],
callbacks: {
postBoot: function (game) {
game.scene.dump();
// Look for output in console.
},
},
});

## Scene Configuration Object

Here is an example of a scene configuration object:

```hljs js
Copyvar config = {
key: "",
// active: false,
// visible: true,
// pack: false,
// cameras: null,
// map: {},
// physics: {},
// loader: {},
// plugins: false,
// input: {}
};

- `key` : The unique key of this Scene. Must be unique within the entire Game instance.

- `active` : Does the Scene start as active or not? An active Scene updates each step.

- `visible` : Does the Scene start as visible or not? A visible Scene renders each step.

- `pack` : An optional Loader Packfile to be loaded before the Scene begins.

- `cameras` : An optional Camera configuration object.

```hljs js
Copy{
name: '',
x: 0,
y: 0,
width: scene.sys.scale.width,
height: scene.sys.scale.height,
zoom: 1,
rotation: 0,
scrollX: 0,
scrollY: 0,
roundPixels: false,
visible: true,
backgroundColor: false,
bounds: null, // {x, y, width, height}
}

- `map` : Overwrites the default injection map for a scene.

- `physics` : The physics configuration object for the Scene.

```hljs js
Copy{
default: 'arcade', // 'arcade', or 'matter'
arcade: {...},
matter: {...}
}

- `arcade` : Arcade Physics configuration.
- `matter` : Matter Physics configuration.
- `loader` : The loader configuration object for the Scene.

```hljs js
Copy{
baseURL: '',
path: '',
enableParallel: true,
maxParallelDownloads: 4,
crossOrigin: undefined,
responseType: '',
async: true,
user: '',
password: '',
timeout: 0
}

- `plugins` : The plugin configuration object for the Scene.

```hljs js
Copy{
global: [\
//{key, plugin, start}\
],
scene: [\
// ...\
]
}

- `input` : The input configuration object for the Scene.

## Scene life cycle

A scene is booted once and can be started any number of times (or never). It lasts until it's removed (destroyed).

A scene that hasn't been added to the manager has status `PENDING`.

A scene that has been added to the manager but never started has status `INIT`. (This means "booted" and is unrelated to the scene `init()` method.)

When a scene starts it goes through statuses `START`, `LOADING` (if assets were queued during `preload()`), `CREATING`, and `RUNNING`. Its methods `init()`, `preload()`, and `create()` are called also, if they exist. `update()` is called at each game step while the scene is in the `RUNNING` state.

A `RUNNING` scene can change to `PAUSED` and back by pause/resume or to `SLEEPING` and back by sleep/wake.

A scene that has been stopped has status `SHUTDOWN`. It can be started again.

A scene that has been removed/destroyed has status `DESTROYED`. It can't be used again.

A scene is **active** only during `START`, `LOADING`, `CREATING`, and `RUNNING`; and **visible** only during `START`, `LOADING`, `CREATING`, `RUNNING`, and `PAUSED`.

### Flowchart: Scene life cycle

Create

Update

Stop

scene.scene.pause()

scene.scene.sleep()

scene.scene.resume()

scene.scene.wake()

scene.scene.stop()

scene.scene.restart()

scene.scene.start()

scene.scene.launch()

scene.events: destroy

Shutdown

Free game objects

Run: Every tick

scene.update()

scene.events: pause

scene.events: sleep

Pause: render but no update

Sleep: no update, no render

scene.events: resume

scene.events: wake

scene.events: start

scene.events: ready

scene.init()

Load assets

scene.preload()

Create game objects

scene.create()

Start

- `Run` : Update and render
- `Pause` : Render but no update
- `Sleep` : No update, no render
- `Stop` : Shutdown

### Changing scenes

There are a lot of ways, because it depends on what you want to do, and Phaser lets you run multiple scenes at once.

#### Scene operations

The basic operation pairs are **pause–resume**, **sleep–wake**, and **shutdown–start**.

Usually, with a typical gameplay scene, you will enter the scene with **start** and exit with **shutdown**. Gameplay starts over each time.

But to move to an intermission scene and back, you might exit the gameplay scene with **sleep** and then reenter with **wake**. It's hidden in the meantime, but then the player returns to the same state they left.

And to move to a modal scene and back, you might exit the gameplay scene with **pause** and then reenter with **resume**. In this case it's still visible but suspended.

With scenes like menu or title screens that you expect the player to revisit, you have a choice of **sleep–wake** or **shutdown–start**. The sleep–wake pattern may be more manageable. It's easier to reason about scenes that start only once.

##### The simple methods

- `launch()` and `stop()` do start and shutdown.
- `sleep()` and `wake()` do sleep and wake.
- `pause()` and `resume()` do pause and resume.

##### The conditional methods

- `run()` may start, wake, or resume a scene
- `switch()` may start or wake a scene

##### The "double" methods

These affect both the target scene and the calling scene. They're convenient for moving through scenes one at a time.

- `start()` stops the calling scene.
- `switch()` sleeps the calling scene.

##### start()

`start('target')` starts the target scene and stops the calling scene. It's equivalent to `stop().launch('target')`.

If you want to start a second scene without stopping anything, use `launch('target')` instead.

```hljs js
Copy// In scene A: stop A, start B
this.scene.start("B");

// In scene B: stop B, start C
this.scene.start("C");

// In scene C: stop C, start A again
this.scene.start("A");

##### switch()

`switch('target')` starts or wakes the target scene and sleeps the calling scene.

```hljs js
Copy// In scene A: sleep A, start B
this.scene.switch("B");

// In scene B: sleep B, start C
this.scene.switch("C");

// In scene C: sleep C, *wake* A
this.scene.switch("A");

Here each scene is started only once, and never shut down.

A `switch()` equivalent is

```hljs js
Copythis.scene.sleep();

if (this.scene.isSleeping('target') {
this.scene.wake('target');
} else {
this.scene.launch('target');
}

`switch()` **restarts** a paused scene, never resumes it — cf. `run()`.

##### launch()

`launch()` starts or restarts the target scene. It never resumes or wakes — cf. `run()`.

##### run()

`run()` resumes the target scene if paused; wakes it if sleeping; restarts it if running; and starts it otherwise.

### Problems restarting a scene

Some common causes:

- Your own state variables haven't been reset
- You're working on an invalid object from the previous scene cycle, e.g., a game object or camera
- Often, a destroyed game object's method is still registered to an event emitter

#### Example: bad state after restart

```hljs js
Copylet gameOver = false;

function update() {
if (gameOver) {
// GAME OVER :(
}
}

After restarting the scene it's _GAME OVER_ immediately, because the `gameOver` variable hasn't been reset. Rewrite as

```hljs js
Copylet gameOver;

function init() {
gameOver = false;
}

In a scene class, you might introduce the same problem in the scene constructor:

```hljs js
Copyclass Scene extends Phaser.Scene {
constructor() {
super();

this.gameOver = false;
}
}

Rewrite it similarly:

this.gameOver;
}

init() {
this.gameOver = false;
}
}

#### Example: invalid game objects after restart

```hljs js
Copyconst sprites = [];

function create() {
sprites.push(this.physics.add.sprite(/*…*/));
}

function update(time) {
for (const sprite of sprites) {
sprite.setVelocity(1, 1);

}
}

Here you get an error after restarting the scene. The destroyed sprites from the last cycle are still in the `sprites` array. Rewrite as

```hljs js
Copyfunction create() {
// …

sprites.length = 0;
});
}

### Removing a scene

If you never use a scene again, you can remove it:

```hljs js
Copythis.scene.destroy();

#### Replacing a scene with the same key

You can't reuse the key until the original scene is removed.

##### A scene removing itself

```hljs js
Copy// After destruction, `this.scene` and `this.sys.scenePlugin` are unusable.
// So we need to use the manager directly.
const { manager } = this.scene;

manager.add('key', newScene);
}

this.scene.remove();

##### A second scene removing the first

```hljs js

this.scene.add('key', newScene);
}

this.scene.remove(sceneToRemove);

##### An alternative

Instead of juggling scene keys, you can use dynamic keys.

```hljs js
Copythis.registry.set("levelSceneKey", "level1");

this.scene.remove(this.registry.get("levelSceneKey"));

this.registry.set("levelSceneKey", "level2");

this.scene.add(this.registry.get("levelSceneKey"), Level, true);

## Scene systems and plugins

Scenes have their own systems, core plugins that are always installed and default plugins that are installed unless disabled. Any extra scene plugins you've added in the game config with `{ start: true }` or any `{ mapping: … }` are also default plugins.

If you've added a scene plugin to the game config without those, the plugin isn't installed by default, and you can install it in a specific scene by adding its key to the `plugins` array:

```hljs js
Copynew Phaser.Scene({
plugins: [\
...Phaser.Plugins.DefaultPlugins.DefaultScene,\
"SomeOtherPluginKey",\
],
});

You can also remove default plugins this way:

```hljs js
Copynew Phaser.Scene({
// "DataManagerPlugin", "Loader", and "LightsPlugin" are omitted.
plugins: ["Clock", "InputPlugin", "TweenManager"],
});

Physics plugins are different. They are installed in a scene if the game config's `physics.default` is `'arcade'` or `'matter'` or if the scene settings config includes `physics.arcade` or `physics.matter` config objects (even if empty).

### Table: Systems and plugins

The table below is a list of systems and plugins (bolded in the table below) as well as references to some global systems.

These can be mapped onto different property names if you like.

| Scene | Systems | Notes |
| --- | --- | --- |
| **add** | sys.add | Core plugin |
| anims | sys.anims | |
| cache | sys.cache | |
| **cameras** | sys.cameras | Core plugin |
| **children** | sys.displayList | Core plugin |
| **data** | sys.data | Default plugin |
| **events** | sys.events | Core plugin. Different from `game.events`. |
| facebook | sys.facebook | |
| game | sys.game | |
| **input** | sys.input | Default plugin |
| **lights** | sys.lights | Default plugin |
| **load** | sys.load | Default plugin |
| **make** | sys.make | Core plugin |
| **matter** | sys.matterPhysics | Optional plugin |
| **physics** | sys.arcadePhysics | Optional plugin |
| plugins | sys.plugins | |
| registry | sys.registry | |
| renderer | sys.renderer | |
| scale | sys.scale | |
| **scene** | sys.scenePlugin | Core plugin |
| sound | sys.sound | |
| textures | sys.textures | |
| **time** | sys.time | Default plugin |
| **tweens** | sys.tweens | Default plugin |

## Rendering

Scenes render from first to last (bottom to top). You can rearrange them with Scene Manager methods like `bringToTop()`, or `sendToBack()`, but this is unusual, except for some visual effects. Don't use these methods to "fix" visibility problems when changing scenes — you should probably be using sleep/wake or start/stop instead. Remember you can add all your scene definitions to the game config and so establish the rendering order there, even for scenes that aren't started immediately.

You can toggle a scene's visibility with `scene.setVisible()`. This doesn't change the scene's status.

## Scene Events

- Start (Before `scene.init()`)

```hljs js
Copyscene.events.on("start", function () {});

- Ready (After `start`)

```hljs js
Copyscene.events.on("ready", function () {});

- Every tick
- Preupdate

```hljs js
Copyscene.events.on("preupdate", function (time, delta) {});

- Update

```hljs js
Copyscene.events.on("update", function (time, delta) {});

- Postupdate

```hljs js
Copyscene.events.on("postupdate", function (time, delta) {});

- Render

```hljs js
Copyscene.events.on("render", function () {});

- State changed
- Pause (from `scene.scene.pause()`)

```hljs js
Copyscene.events.on("pause", function () {});

- Resume (from `scene.scene.resume()`)

```hljs js
Copyscene.events.on("resume", function () {});

- Sleep (from `scene.scene.sleep()`)

```hljs js
Copyscene.events.on("sleep", function () {});

- Wake (from `scene.scene.wake()`)

```hljs js
Copyscene.events.on("wake", function () {});

- Stop/shutdown (from `scene.scene.stop()`)

```hljs js
Copyscene.events.on("shutdown", function () {});

- **Free-up any resources that may be in use by this scene**

- Destroy (from `scene.scene.remove()`)

```hljs js
Copyscene.events.on("destroy", function () {});

- Resize

```hljs js
Copyscene.events.on("resize", function () {});

- Boot

```hljs js
Copyscene.events.on("boot", function () {});

- Game object added to scene
- Add

```hljs js
Copyscene.events.on("addedtoscene", function (gameObject, scene) {});

- Remove

```hljs js
Copyscene.events.on("removedfromscene", function (gameObject, scene) {});

## Author Credits

Content on this page includes work by:

- RexRainbow
- samme

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Scale Manager

Cross Scene Communication

---

# https://docs.phaser.io/phaser/concepts/math

# Math

A Guide to the Phaser Math Functions

JavaScript itself has a pretty comprehensive Math API, which is of course optimized to run quickly in browser. Phaser extends this with its own set of Math functions, that are primarily geared around common use-cases in games. For example, there are Math functions for working with angles, distances, random numbers, interpolation, and more. Lots of these exist because they are required internally, so we expose them for you to use too. The rest are just functions we've found that we have come to require over the years.

All Phaser Math functions are contained in their own namespace. We do not, and never will, modify or pollute the native JavaScript Math namespace. This means that you can use both Phaser Math functions and native Math functions in your game, without any conflicts.

## Basic functions

### Average

Calculate the mean average of the given `values`.

#### Usage

```hljs js
Copyvar result = Phaser.Math.Average(values);

- `result`: Average of all values provided.
- `values` : An array of numbers.

### Difference

Calculates the positive difference of two given numbers.

#### Usage

```hljs js
Copyvar result = Phaser.Math.Difference(a, b);

- `a`: first number.
- `b`: second number.
- `result` : Positive difference between `a` and `b`.

### Factorial

Calculates the factorial of a given `value` for integer values greater than 0.

#### Usage

```hljs js
Copyvar result = Phaser.Math.Factorial(value);

- `value` : A positive integer to calculate the factorial of.
- `result` : Factorial of the given number.

### IsEven

Check if a given `value` is an even number using abstract equality `==`.

#### Usage

```hljs js
Copyvar result = Phaser.Math.IsEven(value); // returns true or false

### IsEvenStrict

Check if a given `value` is an even number using a strict equality `===`.

#### Usage

```hljs js
Copyvar result = Phaser.Math.IsEvenStrict(value); // returns true or false

### Pow2

Check if values given are related to a power of two.

#### Usage

- Get the next nearest power of 2 to the given `value`.

```hljs js
Copyvar result = Phaser.Math.Pow2.GetNext(value);

- Examples:

```hljs js
Copyvar result = Phaser.Math.Pow2.GetNext(3); // returns 4
// var result = Phaser.Math.Pow2.GetNext(4.1); // returns 8
// var result = Phaser.Math.Pow2.GetNext(9); // returns 16

- Checks if both the given `width` and `height` are a power of two.

```hljs js
Copyvar result = Phaser.Math.Pow2.IsSize(width, height);

```hljs js
Copyvar result = Phaser.Math.Pow2.IsSize(2, 2); // returns true
// var result = Phaser.Math.Pow2.IsSize(2, 3); // returns false
// var result = Phaser.Math.Pow2.IsSize(4, 16); // returns true

- Tests the `value` and returns `true` if it is a power of two.

```hljs js
Copyvar result = Phaser.Math.Pow2.IsValue(value);

```hljs js
Copyvar result = Phaser.Math.Pow2.IsValue(2); // returns true
// var result = Phaser.Math.Pow2.IsValue(3); // returns false
// var result = Phaser.Math.Pow2.IsValue(16); // returns true

## Minimum, maximum

### Interpolation

Calculates interpolation value over t (0~1), built-in method of phaser.

#### Usage

- Linear interpolation (lerp) two values

```hljs js
Copyvar result = Phaser.Math.Linear(p0, p1, t);

- Linear interpolation (lerp) two Vectors

```hljs js
Copyvar result = Phaser.Math.LinearXY(vector0, vector1, t);

- `vector0`, `vector1` : Phaser.Math.Vector2
- Smooth interpolation

```hljs js
Copyvar result = Phaser.Math.Interpolation.SmoothStep(t, min, max);

- `t` : 0~1
- Smoother interpolation

```hljs js
Copyvar result = Phaser.Math.Interpolation.SmootherStep(t, min, max);

- `t` : 0~1
- Quadratic bezier interpolation

```hljs js
Copyvar result = Phaser.Math.Interpolation.QuadraticBezier(t, p0, p1, p2);

- `t` : 0~1
- `p0` : The start point.
- `p1` : The control point.
- `p2` : The end point.
- Cubic bezier interpolation

```hljs js
Copyvar result = Phaser.Math.Interpolation.CubicBezier(t, p0, p1, p2, p3);

- `t` : 0~1
- `p0` : The start point.
- `p1` : The first control point.
- `p2` : The second control point.
- `p3` : The end point.

### Percentage

Work out what percentage `value` is of the range between `min` and `max`, built-in method of phaser.

#### Usage

- Get percentage of `value` between `min` and `max`:

```hljs js
Copyvar result = Phaser.Math.Percent(value, min, max, upperMax);

- `result`: Percentage (0~1).
- `value` : The number to determine the percentage.
- `min` : Minimum number of range
- `max` : Maximum number of range
- `upperMax` : The mid-way point in the range that represents 100%.
- Get value based on the `percent` between `min` and `max`:

```hljs js
Copyvar result = Phaser.Math.FromPercent(percent, min, max);

- `result`: Number based on percentage between `min` and `max` range.
- `percent` : A number between 0 and 1 representing the percentage.
- `min` : Minimum number of range
- `max` : Maximum number of range

### Clamp

Force a `value` within the boundaries by clamping it to the range `min`, `max`, built-in method of phaser.

#### Usage

```hljs js
Copyvar result = Phaser.Math.Clamp(value, min, max);

- `value` : The value to be clamped.
- `min` : Minimum number of range
- `max` : Maximum number of range

### MaxAdd

Add an `amount` to a `value`, limiting the maximum result to `max`.

#### Usage

```hljs js
Copyvar result = Phaser.Math.MaxAdd(value, amount, max);

- `value` : The value to add to.
- `amount` : The amount to add.
- `max` : The maximum value to return.

### MinSub

Subtract an `amount` from `value`, limiting the minimum result to `min`.

#### Usage

```hljs js
Copyvar result = Phaser.Math.MinSub(value, amount, min);

- `value` : The value to subtract to.
- `amount` : The amount to subtract.
- `min` : The minimum value to return.

### Wrap

Wrap the given `value` between `min` and `max`, built-in method of phaser.

#### Usage

```hljs js
Copyvar result = Phaser.Math.Wrap(value, min, max);

- `value` : The value to wrap.
- `min` : Minimum number of range
- `max` : Maximum number of range

### Ease

Ease functions, built-in method of phaser.

##### Ease functions

- Linear : `Phaser.Math.Easing.Linear`
- Quadratic, Power1
- Quadratic ease-out : `Phaser.Math.Easing.Quadratic.Out`
- Quadratic ease-in : `Phaser.Math.Easing.Quadratic.In`
- Quadratic ease-in/out : `Phaser.Math.Easing.Quadratic.InOut`
- Cubic, Power2
- Cubic ease-out : `Phaser.Math.Easing.Cubic.Out`
- Cubic ease-in : `Phaser.Math.Easing.Cubic.In`
- Cubic ease-in/out : `Phaser.Math.Easing.Cubic.InOut`
- Quartic, Power3
- Quartic ease-out : `Phaser.Math.Easing.Quartic.Out`
- Quartic ease-in : `Phaser.Math.Easing.Quartic.In`
- Quartic ease-in/out : `Phaser.Math.Easing.Quartic.InOut`
- Quintic, Power4
- Quintic ease-out : `Phaser.Math.Easing.Quintic.Out`
- Quintic ease-in : `Phaser.Math.Easing.Quintic.In`
- Quintic ease-in/out : `Phaser.Math.Easing.Quintic.InOut`
- Sinusoidal
- Sinusoidal ease-out : `Phaser.Math.Easing.Sine.Out`
- Sinusoidal ease-in : `Phaser.Math.Easing.Sine.In`
- Sinusoidal ease-in/out : `Phaser.Math.Easing.Sine.InOut`
- Exponential
- Exponential ease-out : `Phaser.Math.Easing.Expo.Out`
- Exponential ease-in : `Phaser.Math.Easing.Expo.In`
- Exponential ease-in/out : `Phaser.Math.Easing.Expo.InOut`
- Circular
- Circular ease-out : `Phaser.Math.Easing.Circular.Out`
- Circular ease-in : `Phaser.Math.Easing.Circular.In`
- Circular ease-in/out : `Phaser.Math.Easing.Circular.InOut`
- Elastic
- Elastic ease-out : `Phaser.Math.Easing.Elastic.Out`
- Elastic ease-in : `Phaser.Math.Easing.Elastic.In`
- Elastic ease-in/out : `Phaser.Math.Easing.Elastic.InOut`
- Bounce
- Bounce ease-out : `Phaser.Math.Easing.Bounce.Out`
- Bounce ease-in : `Phaser.Math.Easing.Bounce.In`
- Bounce ease-in/out : `Phaser.Math.Easing.Bounce.InOut`
- Back
- Back ease-out : `Phaser.Math.Easing.Back.Out`
- Back ease-in : `Phaser.Math.Easing.Back.In`
- Back ease-in/out : `Phaser.Math.Easing.Back.InOut`
- Stepped : `Phaser.Math.Easing.Stepped(v, step)`

##### Get ease function via string

```hljs js
Copyvar easeFunction = Phaser.Tweens.Builders.GetEaseFunction(ease);
// var easeFunction = Phaser.Tweens.Builders.GetEaseFunction(ease, easeParams);

- `ease` :
- A string :
- `Power0` : Linear
- `Power1` : Quadratic.Out
- `Power2` : Cubic.Out
- `Power3` : Quartic.Out
- `Power4` : Quintic.Out
- `Linear`
- `Quad` : Quadratic.Out
- `Cubic` : Cubic.Out
- `Quart` : Quartic.Out
- `Quint` : Quintic.Out
- `Sine` : Sine.Out
- `Expo` : Expo.Out
- `Circ` : Circular.Out
- `Elastic` : Elastic.Out
- `Back` : Back.Out
- `Bounce` : Bounce.Out
- `Stepped`
- `Quad.easeIn`
- `Cubic.easeIn`
- `Quart.easeIn`
- `Quint.easeIn`
- `Sine.easeIn`
- `Expo.easeIn`
- `Circ.easeIn`
- `Back.easeIn`
- `Bounce.easeIn`
- `Quad.easeOut`
- `Cubic.easeOut`
- `Quart.easeOut`
- `Quint.easeOut`
- `Sine.easeOut`
- `Expo.easeOut`
- `Circ.easeOut`
- `Back.easeOut`
- `Bounce.easeOut`
- `Quad.easeInOut`
- `Cubic.easeInOut`
- `Quart.easeInOut`
- `Quint.easeInOut`
- `Sine.easeInOut`
- `Expo.easeInOut`
- `Circ.easeInOut`
- `Back.easeInOut`
- `Bounce.easeInOut`
- A custom function

```hljs js
Copyfunction(v) {
return v;
}

```hljs js
Copyfunction(v, param0, param1, ...) {
return v;
}

- `v` : `0` ~ `1`

##### Get result

```hljs js
Copyvar result = easeFunction(t);

- `t` : `0` ~ `1`

## Round To

Round/ceil/floor to the given precision, built-in method of phaser.

### CeilTo

Ceils to some place comparative to a base, default is 10 for decimal place.

The place is represented by the power applied to base to get that place.

#### Usage

```hljs js
Copyvar result = Phaser.Math.CeilTo(value);

or

```hljs js
Copyvar result = Phaser.Math.CeilTo(value, place, base);

- `value` : The value to round.
- `place` : The place to round to. Positive to round the units, negative to round the decimal. Default is `0`.
- `base` : The base to round in. Default is `10` for decimal.

### FloorTo

Floors to some place comparative to a base, default is 10 for decimal place.

#### Usage

```hljs js
Copyvar result = Phaser.Math.floorTo(value);

```hljs js
Copyvar result = Phaser.Math.floorTo(value, place, base);

### RoundAwayFromZero

Round a given number so it is further away from zero. That is, positive numbers are rounded up, and negative numbers are rounded down.

#### Usage

```hljs js
Copyvar result = Phaser.Math.RoundAwayFromZero(value);

- `value` : The value to round.

Examples:

```hljs js
CopyRoundAwayFromZero(10.5) = 11
RoundAwayFromZero(123.45) = 124
RoundAwayFromZero(-5.45) = -6
RoundAwayFromZero(-123.45) = -124

### RoundTo

Round a value to the given precision.

#### Usage

```hljs js
Copyvar result = Phaser.Math.RoundTo(value);

```hljs js
Copyvar result = Phaser.Math.RoundTo(value, place, base);

```hljs js
CopyRoundTo(123.456789, 0) = 123
RoundTo(123.456789, -1) = 123.5
RoundTo(123.456789, -2) = 123.46
RoundTo(123.456789, -3) = 123.457

### Snap

Snap a value to nearest grid slice, built-in methods of phaser.

#### Usage

- Snap a value to nearest grid slice, using rounding.

```hljs js
Copyvar out = Phaser.Math.Snap.To(value, gap);
// var out = Phaser.Math.Snap.To(value, gap, start);

Example: set `gap` to `5`
- Set `value` to `12`, return `10`
- Set `value` to `14`, return `15`
- Snap a value to nearest grid slice, using `Ceil`.

```hljs js
Copyvar out = Phaser.Math.Snap.Ceil(value, gap);
// var out = Phaser.Math.Snap.Ceil(value, gap, start);

Example: set `gap` to `5`
- Set `value` to `12`, return `15`
- Set `value` to `14`, return `15`
- Snap a value to nearest grid slice, using `Floor`.

```hljs js
Copyvar out = Phaser.Math.Snap.Floor(value, gap);
// var out = Phaser.Math.Snap.Floor(value, gap, start);

Example: set `gap` to `5`
- Set `value` to `12`, return `10`
- Set `value` to `14`, return `10`

## Distance

Get distance, built-in methods of phaser.

### Get distance between 2 points

```hljs js
Copyvar d = Phaser.Math.Distance.Between(x1, y1, x2, y2);

```hljs js
Copyvar d = Phaser.Math.Distance.BetweenPoints(a, b); // a, b: {x, y}

### Get squared distance between two points

```hljs js
Copyvar d = Phaser.Math.Distance.BetweenPointsSquared(a, b); // a, b: {x, y}

```hljs js
Copyvar d = Phaser.Math.Distance.Squared(x1, y1, x2, y2);

### Get Chebyshev distance (the maximum of the horizontal and vertical distances)

```hljs js
Copyvar d = Phaser.Math.Distance.Chebyshev(x1, y1, x2, y2);

### Get power distance (the sum of the horizontal power distance and vertical power distance)

```hljs js
Copyvar d = Phaser.Math.Distance.Power(x1, y1, x2, y2);

### Get snake distance(i.e. rectilinear distance, Manhattan distance, the sum of the horizontal and vertical distance)

```hljs js
Copyvar d = Phaser.Math.Distance.Snake(x1, y1, x2, y2);

### Get speed

```hljs js
Copyvar d = Phaser.Math.GetSpeed(distance, time);

- `distance` : The distance to travel in pixels.
- `time` : The time, in ms, to cover the distance in.

## Angle

Convert angle value, built-in methods of phaser.

Convert the given angle from `degrees` to radians.

```hljs js
Copyvar radians = Phaser.Math.DegToRad(degrees);

Convert the given angle from `radians` to degrees.

```hljs js
Copyvar degrees = Phaser.Math.RadToDeg(radians); // degrees : -180 ~ 180

### Angle between points

Angle from (0,0) to vector (x2 - x1 , y2 - y1)

```hljs js
Copyvar rad = Phaser.Math.Angle.Between(x1, y1, x2, y2);

```hljs js
Copyvar rad = Phaser.Math.Angle.BetweenPoints(point1, point2);

### Angle between angles

Shortest angle (degrees) between 2 angles

```hljs js
Copyvar deg = Phaser.Math.Angle.ShortestBetween(angle1, angle2);

- `angle1`, `angle2` : Angle in degrees in the range of -180 to 180
- `deg` : Shortest angle in degrees

- deg < 0 : ClockWise rotation

### Clockwise to counter-clockwise

Converts Phasers default clockwise `angle` format to counter-clockwise.

```hljs js
Copyvar deg = Phaser.Math.Angle.CounterClockwise(angle);

- `angle` : Angle in radians
- `deg` : Angle in radians

### Random angle

Returns a random angle in the range \[-pi, pi\].

```hljs js
Copyvar angle = Phaser.Math.Angle.Random();

Returns a random angle in the range \[-180, 180\].

```hljs js
Copyvar angle = Phaser.Math.Angle.RandomDegrees();

### Reverse

Reverse the given `angle` (rotates the angle by 180 degrees).

```hljs js
Copyvar angle = Phaser.Math.Angle.Reverse(angle);

- `angle` : Angle in radians

### Rotate around position

Rotate a `point` around `x` and `y` by the given `angle`.

```hljs js
Copyvar out = Phaser.Math.RotateAround(point, x, y, angle);

Rotate a `point` around `x` and `y` by the given `angle` and `distance`.

```hljs js
Copyvar out = Phaser.Math.RotateAroundDistance(point, x, y, angle, distance);

### Rotate to angle

Rotates `currentAngle` towards `targetAngle`, taking the shortest rotation distance. `lerp` is the amount to rotate.

```hljs js
Copyvar rad = Phaser.Math.Angle.RotateTo(currentAngle, targetAngle, lerp);

### Wrap Angle

- Wrap angle (radians) in the range of -PI to PI

```hljs js
Copyvar rad = Phaser.Math.Angle.Wrap(angle);

- Wrap angle (radians) in the range of 0 to 2\*PI

```hljs js
Copyvar rad = Phaser.Math.Angle.Normalize(angle);

- Wrap angle (degrees) in the range of -180 to 180

```hljs js
Copyvar deg = Phaser.Math.Angle.WrapDegrees(angle);

### RotateVec3

Rotates a vector in place by axis angle.

```hljs js
Copyvar result = Phaser.Math.RotateVec3(vector, axis, angle);

- `vector` : The vector to be rotated.
- `axis` : The axis to rotate around.
- `angle` : The angle of rotation in radians.

Example:

```hljs js
Copyvar vector = Phaser.Math.Vector3(1, 0, 0); // x = 1, y = 0, z = 0
var axis = new Phaser.Math.Vector3(0, 0, 1); // rotate along z-axis
var angle = Math.PI / 2; // rotate 90 degrees in radians
var result = Phaser.Math.vector(vec, axis, angle);

- `result` : Vector3 {x: 0, y: 1, z: 0}

## Random

### Between minimum and maximum

- Get a random value between `min` and `max` values, including `min` and `max`.

```hljs js

- Get a random floating point number between `min` and `max`, including `min`, excluding `max`.

### Random vector

- Gets a random 2D `vector` between -1 and 1. Set the default `scale` value (default is 1) to multiply the resulting vector.

```hljs js
Copyvar vec = Phaser.Math.RandomXY(vector); // return vec {x, y}
// var vec = Phaser.Math.RandomXY(vector, scale);

- Get a random 3D position `vector` in a spherical area. Set the default `radius` value (default is 1) to multiply the resulting vector.

```hljs js
Copyvar vec = Phaser.Math.RandomXYZ(vector); // return vec {x, y, z}
// var vec = Phaser.Math.RandomXYZ(vector, radius);

- Gets a random 4D `vector`. Set the default `scale` value (default is 1) to multiply the resulting vector.

```hljs js
Copyvar vec = Phaser.Math.RandomXYZW(vector); // return vec {x, y, z, w}
// var vec = Phaser.Math.RandomXYZW(vector, scale);

### RandomDataGenerator

A seeded Random Data Generator. Access via `Phaser.Math.RND` which is an instance of this class pre-defined by Phaser.

- Set seed in game config for pre-defined random data generator

```hljs js
Copyvar config = {
// ...
seed: seed,
// ...
};
var game = new Phaser.Game(config);

- `seed` :
- A string or an array of strings.
- Set seed at run time

```hljs js
Copyrnd.init(seed);

- `seed` : A string or an array of strings.
- Get pre-defined random data generator

```hljs js
Copyvar rnd = Phaser.Math.RND;

- Create new random generator

```hljs js
Copyvar rnd = new Phaser.Math.RandomDataGenerator(seed); // seed is a string

### Get random value

- Random real number between `0` and `1`.

```hljs js
Copyvar value = rnd.frac();

- Random integer between `0` and `2^32`.

```hljs js
Copyvar value = rnd.integer();

- Random real number between 0 and 2^32.

```hljs js
Copyvar value = rnd.real();

- Random integer between and including min and max.

```hljs js
Copyvar value = rnd.between(min, max);
// var value = rnd.integerInRange(min, max);

- Random real number between min and max.

```hljs js
Copyvar value = rnd.realInRange(min, max);

- Random real number between -1 and 1.

```hljs js
Copyvar value = rnd.normal();

- Random angle between `-180` and `180`.

```hljs js
Copyvar angle = rnd.angle();

- Random rotation in radians, between `-3.141` and `3.141`.

```hljs js
Copyvar angle = rnd.rotation();

- Random timestamp between min and max.

```hljs js
Copyvar timestamp = rnd.timestamp(min, max);

- `min` : Default value is the beginning of 2000.
- `max` : Default value is the end of 2020.
- UUID

```hljs js
Copyvar uuid = rnd.uuid();

- Random sign value

```hljs js
Copyvar sign = rnd.sign();

- `sign` : `-1` or `1`

### Get random item

- Random element from within the given array.

```hljs js
Copyvar item = rnd.pick(array);

- Random element from within the given array, favoring the earlier entries.

```hljs js
Copyvar item = rnd.weightedPick(array);

### Shuffle array

```hljs js
Copyvar array = rnd.shuffle(array);

## Color

### Get color integer

- Hex string, or color integer

```hljs js
Copyvar color = Phaser.Display.Color.ValueToColor(input);

- `input` : Hex string, or color integer
- RGB to color

```hljs js
Copyvar color = Phaser.Display.Color.GetColor(red, green, blue);

- `red`, `green`, `blue` : 0 ~ 255
- RGBA to color

```hljs js
Copyvar color = Phaser.Display.Color.GetColor32(red, green, blue, alpha);

- `red`, `green`, `blue`, `alpha` : 0 ~ 255
- Hex string to color

```hljs js
Copyvar color = Phaser.Display.Color.HexStringToColor(hex).color;

- hex : `#0033ff`, `#03f`, `0x0033ff`, or `0x03f`
- RGB string to color

```hljs js
Copyvar color = Phaser.Display.Color.RGBStringToColor(rgb);

- rgb : `'rgb(r,g,b)'`, or `'rgba(r,g,b,a)'`
- r, g, b : 0 ~ 255
- a : 0 ~ 1
- HSV to color

```hljs js
Copyvar color = Phaser.Display.Color.HSVToRGB(h, s, v).color;

- `h`, `s`, `v` : 0 ~ 1

### Color integer to RGB

```hljs js
Copyvar rgb = Phaser.Display.Color.IntegerToRGB(color);

- `color` : Color integer ( `0xAARRGGBB`)
- `rgb` : JSON object ( `{r, g, b, a}`)

### HSV color wheel

1. Create color array

```hljs js
Copyvar colorArray = Phaser.Display.Color.HSVColorWheel(s, v);

2. Get color

```hljs js
Copyvar color = colorArray[i].color; // i : 0 ~ 359

### Create color object

- Create via r,g,b,a components

```hljs js
Copyvar color = new Phaser.Display.Color(red, green, blue); // alpha = 255
// var color = new Phaser.Display.Color(red, green, blue, alpha);

- `red`, `green`, `blue`, `alpha`: 0 ~ 255
- Create via color integer

```hljs js
Copyvar color = Phaser.Display.Color.IntegerToColor(colorInteger);

- colorInteger : Color integer ( `0xAARRGGBB`)

#### Set color

- Set color

```hljs js
Copycolor.setTo(red, green, blue); // alpha = 255
// color.setTo(red, green, blue, alpha);

- `red`, `green`, `blue`, `alpha`: 0 ~ 255
- Set color in GL values

```hljs js
Copycolor.setGLTo(red, green, blue); // alpha = 1
// color.setTo(red, green, blue, alpha);

- `red`, `green`, `blue`, `alpha`: 0 ~ 1
- Set color from color object

```hljs js
Copycolor.setFromRGB(rgba);

- rgba :

```hljs js
Copy{
r: 0,
g: 0,
b: 0,
// a: 0
}

- Set color from HSV

```hljs js
Copycolor.setFromHSV(h, s, v);

- Set to transparent ()

```hljs js
Copycolor.transparent();

- Set (red, green, blue) to `0`
- Set to gray color

```hljs js
Copycolor.gray(value);

- Set to a random color

```hljs js
Copycolor.random();

```hljs js
Copycolor.random(min, max);

- `min` : 0 ~ 255. Default value is 0.
- `max` : 0 ~ 255. Default value is 255.
- Set to random gray

```hljs js
Copycolor.randomGray();

```hljs js
Copycolor.randomGray(min, max);

- Set red/green/blue/alpha channel : 0 ~ 255

```hljs js
Copycolor.red = value;
// color.red += value;
color.green = value;
// color.green += value;
color.blue = value;
// color.blue += value;
color.alpha = value;
// color.alpha += value;

- Set H/S/V channel : 0 ~ 1

```hljs js
Copycolor.h = value;
// color.h += value;
color.s = value;
// color.s += value;
color.v = value;
// color.v += value;

- Set normalized red, green, blue, alpha : 0 ~ 1

```hljs js
Copycolor.redGL = value;
// color.redGL += value;
color.greenGL = value;
// color.greenGL += value;
color.blueGL = value;
// color.blueGL += value;
color.alphaGL = value;
// color.alphaGL += value;

- Set brighten

```hljs js
Copycolor.brighten(value);

- `value` : Percentage, 0 ~ 100
- Saturate : Increase the saturation (S) of this Color by the percentage amount given.

```hljs js
Copycolor.saturate(value);

- `value` : Percentage, 0 ~ 100
- Desaturate : Decrease the saturation (S) of this Color by the percentage amount given.

```hljs js
Copycolor.desaturate(value);

- `value` : Percentage, 0 ~ 100
- Lighten : Increase the lightness (V) of this Color by the percentage amount given.

```hljs js
Copycolor.lighten(value);

- `value` : Percentage, 0 ~ 100
- Darken : Decrease the lightness (V) of this Color by the percentage amount given.

```hljs js
Copycolor.darken(value);

- `value` : Percentage, 0 ~ 100

#### Color Properties

- RGB Color, not including the alpha channel

```hljs js
Copyvar c = color.color;

- RGB Color, including the alpha channel.

```hljs js
Copyvar c = color.color32;

- RGB color string which can be used in CSS color values.

```hljs js
Copyvar c = color.rgba;

- Red, green, blue, alpha : 0 ~ 255

```hljs js
Copyvar r = color.red;
var g = color.green;
var b = color.blue;
var a = color.alpha;

- H, S, V : 0 ~ 1

```hljs js
Copyvar h = color.h;
var s = color.s;
var v = color.v;

- Normalized red, green, blue, alpha : 0 ~ 1

```hljs js
Copyvar r = color.redGL;
var g = color.greenGL;
var b = color.blueGL;
var a = color.alphaGL;

#### Clone

```hljs js
Copyvar newColor = color.clone();

### To hex string

```hljs js
Copyvar hexString = Phaser.Display.Color.RGBToString(
color.r,
color.g,
color.b,
color.a
);
// var hexString = Phaser.Display.Color.RGBToString(color.r, color.g, color.b, color.a, prefix);

### Interpolation

Interpolate between 2 colors.

```hljs js
Copyvar colorOut = Phaser.Display.Color.Interpolate.RGBWithRGB(
r1,
g1,
b1,
r2,
g2,
b2,
length,
index
);
var colorOut = Phaser.Display.Color.Interpolate.ColorWithColor(
color1,
color2,
length,
index
);
var colorOut = Phaser.Display.Color.Interpolate.ColorWithRGB(
color,
r,
g,
b,
length,
index
);

- `length`, `index` : t = `index/length` (0~1)

## Vector

A representation of a vector in 2D space ( `{x, y}`), built-in object of phaser.

### Create vector

```hljs js
Copyvar vector = new Phaser.Math.Vector2();
// var vector = new Phaser.Math.Vector2(x, y);
// var vector = new Phaser.Math.Vector2({x, y});

### Clone vector

```hljs js
Copyvar newVector = vector.clone();

### Set vector components

- Set (x, y)

```hljs js
Copyvector.set(x, y);
// vector.setTo(x, y);

```hljs js
Copyvector.copy({ x, y });
// vector.setFromObject({x, y});

- Set angle

```hljs js
Copyvector.setAngle(angle);

- `angle` : Angle in radians.
- Rotate

```hljs js
Copyvector.rotate(delta);

- `delta` : The angle to rotate by, in radians.
- Project

```hljs js
Copyvector.project(srcVector2);

- Set length

```hljs js
Copyvector.setLength(length);

- Set from polar coordinate

```hljs js
Copyvector.setToPolar(azimuth, radius);

- `azimuth` : The angular coordinate, in radians.
- `radius` : The radial coordinate (length). Default is `1`.
- Reset to (0, 0)

```hljs js
Copyvector.reset();

### Get vector componments

- X, Y

```hljs js
Copyvar x = vector.x;
var y = vector.y;

- Angle

```hljs js
Copyvar angle = vector.angle(); // angle in radians

- Length

```hljs js
Copyvar length = vector.length();

```hljs js
Copyvar lengthSq = vector.lengthSq(); // squared

### Methods

- Scale

```hljs js
Copyvector.scale(value);

- Limit the length

```hljs js
Copyvector.limit(value);

- Normalize

```hljs js
Copyvector.normalize();

- Negate

```hljs js
Copyvector.negate();

- Rotate perpendicular

```hljs js
Copyvector.normalizeRightHand();
vector.normalizeLeftHand();

- Reflect
- Reflect this Vector off a line defined by a normal.

```hljs js
Copyvector.reflect(normal);

- `normal` : A vector perpendicular to the line.
- Reflect this Vector across another.

```hljs js
Copyvector.mirror(axis);

- `axis` : A vector to reflect across.

#### Vector methods

- Add

```hljs js
Copyvector.add(src); // src: {x, y}

- Subtract

```hljs js
Copyvector.subtract(src); // src: {x, y}

- Multiply

```hljs js
Copyvector.multiply(src); // src: {x, y}

- Divide

```hljs js
Copyvector.divide(src); // src: {x, y}

- Dot

```hljs js
Copyvar value = vector.dot(src); // src: {x, y}

- Cross

```hljs js
Copyvar value = vector.cross(src); // src: {x, y}

- Fuzzy Equal

```hljs js
Copyvar equal = vector.fuzzyEquals(src); // src: {x, y}
// var equal = vector.fuzzyEquals(src, epsilon);

#### Vector points method

- Distance between 2 points.

```hljs js
Copyvar distance = vector.distance(src);

```hljs js
Copyvar distanceSq = vector.distanceSq(src); // squared

- Linearly interpolate between 2 points.

```hljs js
Copyvector.lerp(src, t); // src: {x, y}

- `t` : The interpolation percentage, between 0 and 1.

#### Constant

- Zero `(0,0)`

```hljs js
Copyvar vector = Phaser.Math.Vector2.ZERO;

- One `(1,1)`

```hljs js
Copyvar vector = Phaser.Math.Vector2.ONE;

- Right `(1,0)`

```hljs js
Copyvar vector = Phaser.Math.Vector2.RIGHT;

- Left `(-1,0)`

```hljs js
Copyvar vector = Phaser.Math.Vector2.LEFT;

- Up `(0,-1)`

```hljs js
Copyvar vector = Phaser.Math.Vector2.UP;

- Down `(0,1)`

```hljs js
Copyvar vector = Phaser.Math.Vector2.DOWN;

## Curve

#### Add path object

```hljs js
Copyvar path = scene.add.path();
// var path = scene.add.path(x, y); // curve start from (x, y)

```hljs js
Copyvar path = new Phaser.Curves.Path();
// var path = new Phaser.Curves.Path(x, y); // curve start from (x, y)

#### Add path object with curves

```hljs js
Copyvar path = scene.add.path(json);

```hljs js
Copyvar path = new Phaser.Curves.Path(json);

#### Line

- Add line object
1. Create line object

```hljs js
Copyvar curve = new Phaser.Curves.Line({ x: x0, y: y0 }, { x: x1, y: y1 });

```hljs js
Copyvar curve = new Phaser.Curves.Line([x0, y0, x1, y1]);

2. Add to path

```hljs js
Copypath.add(curve);

- Add line started from previous end point to next point

```hljs js
Copypath.lineTo(endX, endY);

```hljs js
Copypath.lineTo(new Phaser.Math.Vector2({ x, y }));

Properties:

- `curve.p0` : The first endpoint.
- `curve.p0.x`, `curve.p0.y`
- `curve.p1` : The second endpoint.
- `curve.p1.x`, `curve.p1.y`

#### Circle/ellipse/arc

- Add circle/ellipse/arc object
1. Create circle/ellipse/arc object
- Circle

```hljs js
Copyvar curve = new Phaser.Curves.Ellipse(x, y, radius);

- Ellipse

```hljs js
Copyvar curve = new Phaser.Curves.Ellipse(x, y, xRadius, yRadius);

- Arc

```hljs js
Copyvar curve = new Phaser.Curves.Ellipse(
x,
y,
xRadius,
yRadius,
startAngle,
endAngle,
clockwise,
rotation
);

- Add circle/ellipse/arc started from previous end point to next point
- Circle

```hljs js
Copypath.circleTo(radius);

```hljs js
Copypath.ellipseTo(xRadius, yRadius);

```hljs js
Copypath.ellipseTo(xRadius, yRadius, startAngle, endAngle, clockwise, rotation);

- `curve.p0` : Center point.
- `curve.p0.x`, `curve.p0.y`
- `curve.xRadius`, `curve.yRadius` : Horizontal/vertical radiuse.
- `curve.startAngle`, `curve.endAngle` : Start/end angle, in degrees.
- `curve.clockwise` : `true` if Clockwise, `false` if anti-clockwise.
- `curve.angle` : Rotation, in degrees.
- `curve.rotation` : Rotation, in radians.

#### Spline

- Add spline object
1. Create spline object

```hljs js
Copyvar curve = new Phaser.Curves.Spline([\
p0, // {x, y}, or [x, y]\
p1, // {x, y}, or [x, y]\
// ...\
]);

```hljs js
Copyvar curve = new Phaser.Curves.Spline([\
x0,\
y0,\
x1,\
y1,\
// ...\
]);

- Add spline started from previous end point to next point

```hljs js
Copyvar points = ;
path.splineTo([\
p0, // {x, y}, or [x, y]\
p1, // {x, y}, or [x, y]\
// ...\
]);

```hljs js
Copypath.splineTo([\
x0,\
y0,\
x1,\
y1,\
// ...\
]);

##### Append point

```hljs js
Copyvar point = curve.addPoint(x, y);

#### Quadratic bezier curve

1. Create quadratic bezier curve object

```hljs js
Copyvar curve = new Phaser.Curves.QuadraticBezier(
startPoint,
controlPoint,
endPoint
); // point: {x, y}

```hljs js
Copyvar points = [\
x0,\
y0, // start point\
x1,\
y1, // control point\
x2,\
y2, // end point\
];
var curve = new Phaser.Curves.QuadraticBezier(points);

```hljs js
Copypath.add(curve);

Add quadratic bezier curve started from previous end point to next point

```hljs js
Copypath.quadraticBezierTo(endX, endY, controlX, controlY);

```hljs js
Copypath.quadraticBezierTo(endPoint, controlPoint); // point : Phaser.Math.Vector2

#### Cubic bezier curve

```hljs js
Copyvar curve = new Phaser.Curves.CubicBezier(
startPoint,
controlPoint1,
controlPoint2,
endPoint
); // point: {x, y}

```hljs js
Copyvar points = [\
x0,\
y0, // start point\
x1,\
y1, // control point1\
x2,\
y2, // control point2\
x3,\
y3, // end point\
];
var curve = new Phaser.Curves.CubicBezier(points);

Add cubic bezier curve started from previous end point to next point

```hljs js
Copypath.cubicBezierTo(endX, endY, control1X, control1Y, control2X, control2Y);

```hljs js
Copypath.cubicBezierTo(endPoint, controlPoint1, controlPoint2); // point : Phaser.Math.Vector2

#### Move to point

```hljs js
Copypath.moveTo(x, y);

#### Add curves from JSON

```hljs js
Copypath.fromJSON(json);

### Get curves

```hljs js
Copyvar curves = path.curves;

#### Get curve at t

```hljs js
Copyvar curve = path.getCurveAt(t);

- `t` : The normalized location on the Path. Between `0` and `1`

### Draw on graphics

```hljs js
Copypath.draw(graphics);
// path.draw(graphics, pointsTotal);

- `pointsTotal` : The number of points to draw for each Curve.

```hljs js
Copycurve.draw(graphics);
// curve.draw(graphics, pointsTotal);

- `pointsTotal` : The resolution of the curve.

### Point

- Get point

```hljs js
Copyvar out = path.getPoint(t); // t: 0 ~ 1
// var out = path.getPoint(t, out); // modify out

```hljs js
Copyvar out = curve.getPoint(t); // t: 0 ~ 1
// var out = curve.getPoint(t, out); // modify out

Distance of path from start point to target point (out) might not linear with t.

- Get random point

```hljs js
Copyvar out = path.getRandomPoint();
// var out = path.getRandomPoint(out); // modify out

```hljs js
Copyvar out = curve.getRandomPoint();
// var out = curve.getRandomPoint(out); // modify out

- Get n points
- Path

```hljs js
Copyvar points = path.getPoints(divisions);

- `divisions` : The number of divisions per resolution **per curve**.
- Curve

```hljs js
Copyvar points = curve.getPoints(divisions);
// var points = curve.getPoints(divisions, undefined, out);

```hljs js
Copyvar points = curve.getPoints(undefined, stepRate);
// var points = curve.getPoints(undefined, stepRate, out);

- `divisions` : The number of divisions in this curve.

3. `defaultDivisions`
- `points` : Return `1 + divisions` points.
- Get (n+1) points equally spaced out along the curve

```hljs js
Copyvar points = path.getSpacedPoints(n);

```hljs js
Copyvar points = curve.getSpacedPoints(n);
// var points = curve.getSpacedPoints(undefined, stepRate);
// var points = curve.getSpacedPoints(divisions, stepRate, out);

- Get points spaced out n distance pixels apart

```hljs js
Copyvar points = curve.getDistancePoints(n);

The smaller the distance, the larger the array will be.

Path object does **NOT** support this feature yet.

- Get start point

```hljs js
Copyvar out = path.getStartPoint();
// var out = path.getStartPoint(out); // modify out

```hljs js
Copyvar out = curve.getStartPoint();
// var out = curve.getStartPoint(out); // modify out

- Get end point

```hljs js
Copyvar out = path.getEndPoint();
// var out = path.getEndPoint(out); // modify out

```hljs js
Copyvar out = curve.getEndPoint();
// var out = curve.getEndPoint(out); // modify out

- Get t (0~1) from distance

```hljs js
Copyvar t = curve.getTFromDistance(d);

- Get tangent

```hljs js
Copyvar out = path.getTangent(t); // t: 0~1
// var out = path.getTangent(t, out); // modify out

```hljs js
Copyvar out = curve.getTangent(t); // t: 0~1
// var out = curve.getTangent(t, out); // modify out

### Length of path

```hljs js
Copyvar l = path.getLength();

```hljs js
Copyvar l = curve.getLength();

Length of path/curve will be cached.

#### Update length

```hljs js
Copypath.updateArcLengths();

```hljs js
Copycurve.updateArcLengths();

### Curves to JSON

```hljs js
Copyvar json = path.toJSON();

```hljs js
Copyvar json = curve.toJSON();

### Path Bounds

Get bounds

```hljs js
Copyvar out = path.getBounds(); // accuracy = 16
// var out = path.getBounds(out);
// var out = path.getBounds(out, accuracy);

```hljs js
Copyvar out = curve.getBounds(); // accuracy = 16
// var out = curve.getBounds(out);
// var out = curve.getBounds(out, accuracy);

- `out` : A rectangle object

### Destroy path

```hljs js
Copypath.destroy();

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Cache

Physics

---

# https://docs.phaser.io/phaser/concepts/physics

# Physics

Using the Phaser Physics Systems

Phaser has two physics systems built in. The first is called Arcade Physics and the second is Matter JS.

Arcade Physics is, as its name implies, meant for more 'arcade' or 'retro' style games, although is not limited just to those. It's a lightweight physics system that can only handle two different types of physics shapes: rectangles and circles. It's not meant for complex physics simulations, but rather for simple things like platformers, top-down games, or puzzle games. It's very fast and easy to use, with lots of helper functions, but due to its nature it does have its limitations.

Matter JS is an open-source third party physics library and Phaser has its own custom version of it bundled. The reason for including Matter is that it provides a more advanced 'full body' physics system. If you need to move beyond rectangles and circles, with more complex physics shapes, and features such as constraints, joints and behaviours, then Matter is the system to use.

Both physics systems need to be enabled before they can be used. This can be done via the Game Configuration or on a per-Scene basis. Once enabled, you can then add physics-enabled Game Objects to your game. For example, if you enable Arcade Physics, you can then add a Sprite and enable physics on it. This will allow you to control the Sprite using the built-in physics functions, such as velocity, acceleration, gravity, etc.

By default a Game Object is not enabled for physics. This is because not all Game Objects need to be. For example, a background image or game logo likely doesn't need to be affected by physics, but a player character does. Therefore, you must enable physics on the Game Objects that you specifically want to be affected by it. We will cover this in detail in later chapters.

The two systems are entirely separate. An Arcade Physics sprite, for example, cannot collide with a Matter Physics sprite. You cannot add the same Sprite to both systems, you need to pick one or the other. However, although it's unusual to do so, both systems can actually run in parallel in the same Scene. This means that you can have a Sprite that uses Arcade Physics and another that uses Matter Physics, and they will both work at the same time, although they will not interact together.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Math

Arcade Physics

---

# https://docs.phaser.io/phaser/concepts/loader

# Loader

Loader

The Loader, as the name implies, is responsible for loading any external assets that your game may require. Common asset types include images, texture atlases, sprite sheets, fonts, audio files and JSON data, but there are many more that Phaser can handle.

By default, every Scene has access to its own Loader instance. The Loader works on a queue-basis, which means you can add as many 'load requests' to it as you like and they all get added to an internal queue. You then tell the Loader to start and it will work through the queue, loading each asset in turn.

Scenes have a special method available to you called 'preload'. This method is called automatically by Phaser when the Scene starts. It's a good place to add all of your game assets to the Loader and you'll see this convention used heavily in our examples and third-party tutorials. However, you can also add assets to the Loader at any point in your game, not just from within the preload method.

When you add a file to the loader, you have to give it a string-based key. This is a unique identifier for that file and its related resource. For example, if you load an image and give it the key 'player', then you identify that image by the key 'player' from that point on. The keys are case-sensitive and their uniqueness is applied per file type. I.e. a sound file could have the key 'player' as well as an image file. String-based keys is a very important concept in Phaser and you'll see it used throughout the framework.

The files are loaded via built-in browser APIs, which often allows for many files to be downloaded in parallel, depending on the browser and server settings. The Loader is specialised in loading files based on network requests and across a network. It is not for loading files from the local file system, something that all modern web browsers prohibit for security reasons.

As with most systems in Phaser, there are lots of events you can listen for that come from the Loader. These events are naturally centered around the loading progress: such as which files have completed, or maybe failed, and how far along the process is. You can use these events to create loading bars and progress displays for your game.

## Strategy

- Load assets before using them
- Load shared assets in a "boot" or "preload" scene
- Load any non-shared assets in the scene they will be used in
- Use a scene payload to load small assets before the scene `preload()` callback, if needed
- For special cases, run the scene loader manually and access the newly loaded assets in event callbacks
- You can remove assets if they are no longer needed to save some memory

## Assets

There are many types, and you can read about all of them.

Assets need to be loaded before you can use them, but once loaded, they are available everywhere. It doesn't matter which loader or scene loaded them. Once loaded they are in the Texture Manager ( `this.textures`) or the asset caches ( `this.cache`).

Use unique keys (names) for assets.

### Where to load assets

In a single-scene game, you'll load assets in that scene, naturally.

In a multi-scene game, it's convenient to load shared assets in a "boot" or "preloader" scene and then start the other scenes afterwards. Any non-shared assets can be loaded in the scene that uses them, and removed if necessary when that scene shuts down.

#### Image

- Image

```hljs js
Copythis.load.image(key, url);
// this.load.image(key, url, xhrSettings);

- `url` : Url of texture, or base64 string of Uri.
- Image and normal map

```hljs js
Copythis.load.image(key, [url, normalMapUrl]);
// this.load.image(key, [url, normalMapUrl], xhrSettings);

- `url` : Url of texture, or base64 string of Uri.
- `normalMapUrl` : Url of normal map.
- SVG

```hljs js
Copythis.load.svg(key, url);
// this.load.svg(key, url, svgConfig);
// this.load.svg(key, url, svgConfig, xhrSettings);

- `svgConfig` : `{width, height}`, or `{scale}`
- Html texture

```hljs js
Copythis.load.htmlTexture(key, url, width, height);
// this.load.htmlTexture(key, url, width, height, xhrSettings);

#### Sprite sheet

```hljs js
Copythis.load.spritesheet(key, url, {
// frameWidth: frameWidth,
// frameHeight: frameHeight,
// startFrame: startFrame,
// endFrame: endFrame,
// margin: margin,
// spacing: spacing
});
// this.load.spritesheet(key, url, frameConfig, xhrSettings);

#### Texture atlas

```hljs js
Copythis.load.atlas(key, textureURL, atlasURL);
// this.load.atlas(key, textureURL, atlasURL, textureXhrSettings, atlasXhrSettings);

#### Multi file texture atlas

```hljs js
Copythis.load.multiatlas(key, atlasURL);
// this.load.multiatlas(key, atlasURL, path, baseURL, atlasXhrSettings);

- `atlasURL` : The absolute or relative URL to load the texture atlas json data file from.
- `path` : Optional path to use when loading the textures defined in the atlas data.
- `baseURL` : Optional Base URL to use when loading the textures defined in the atlas data.

#### Unity texture atlas

```hljs js
Copythis.load.unityAtlas(key, textureURL, atlasURL);
// this.load.unityAtlas(key, textureURL, atlasURL, textureXhrSettings, atlasXhrSettings);

#### Animation

```hljs js
Copythis.load.animation(key, url);
// this.load.animation(key, url, dataKey, xhrSettings);

#### Audio

```hljs js
Copythis.load.audio(key, urls);
// this.load.audio(key, urls, {instances: 1}, xhrSettings);

- `urls` : The absolute or relative URL to load the audio files from, or a blob, or a base64 string of Uri.
- `config.instances` : Number of audio instances for HTML5Audio. Defaults to `1`.

#### Audio sprite

```hljs js
Copythis.load.audioSprite(key, jsonURL, audioURL, audioConfig);
// this.load.audioSprite(key, jsonURL, audioURL, audioConfig, audioXhrSettings, jsonXhrSettings);

- `jsonURL` : The absolute or relative URL to load the json file from.
- `audioURL` : The absolute or relative URL to load the audio file from.
- `audioConfig` : An object containing an `instances` property for HTML5Audio. Defaults to `1`.

#### Video

```hljs js
Copythis.load.video(key, url, noAudio);
// this.load.video(key, url, noAudio, xhrSettings);

- `url` : The absolute or relative URL to load the video files from, or a blob.
- `loadEvent` : The load event to listen for when _not_ loading as a blob.
- `'loadeddata'` : Data for the current frame is available. Default value.
- `'canplay'` : The video is ready to start playing.
- `'canplaythrough'` : The video can be played all the way through, without stopping.
- `asBlob` : Load the video as a data blob, or via the Video element? Default value is `false`.
- `noAudio` : Does the video have an audio track? If not you can enable auto-playing on it.
- `false` : Has audio track, default behavior.

#### Bitmap font

```hljs js
Copythis.load.bitmapFont(key, textureURL, fontDataURL);
// this.load.bitmapFont(key, textureURL, fontDataURL, textureXhrSettings, fontDataXhrSettings);

- `textureURL` : The absolute or relative URL to load the font image file from.
- `fontDataURL` : The absolute or relative URL to load the font _xml_ data file from, which created by software such as
- Angelcode Bitmap Font Generator
- Glyph Designer
- Littera (Flash-based - yes, really, free)

#### Tile map

- JSON : Created using the Tiled Map Editor and selecting JSON as the export format

```hljs js
Copythis.load.tilemapTiledJSON(key, url);
// this.load.tilemapTiledJSON(key, url, xhrSettings);

- CSV : Created in a text editor, or a 3rd party app that exports as CSV.

```hljs js
Copythis.load.tilemapCSV(key, url);
// this.load.tilemapCSV(key, url, xhrSettings);

#### Text

```hljs js
Copythis.load.text(key, url);
// this.load.text(key, url, xhrSettings);

#### JSON

```hljs js
Copythis.load.json(key, url);
// this.load.json(key, url, dataKey, xhrSettings);

- `dataKey` : When the JSON file loads only this property will be stored in the Cache.

#### XML

```hljs js
Copythis.load.xml(key, url);
// this.load.xml(key, url, xhrSettings);

#### HTML

```hljs js
Copythis.load.html(key, url);
// this.load.html(key, url, xhrSettings);

#### CSS

```hljs js
Copythis.load.css(key, url);
// this.load.css(key, url, xhrSettings);

#### Scene

```hljs js
Copythis.load.sceneFile(key, url);
// this.load.sceneFile(key, url, xhrSettings);

The `key` matches the **class name** in the JavaScript file.

##### Script

```hljs js
Copythis.load.script(key, url);
// this.load.script(key, url, type, xhrSettings);

- `type` :　`'script'`, or `'module'`.

##### Scripts

```hljs js
Copythis.load.scripts(key, urlArray);
// this.load.scripts(key, urlArray, xhrSettings);

Add scripts in the exact order of `urlArray`.

##### GLSL

```hljs js
Copythis.load.glsl(key, url);
// this.load.glsl(key, url, shaderType, xhrSettings);

- `shaderType` : The type of shader.
- `'fragment'` : Fragment shader. Default value.
- `'vertex'` : Vertex shader.

Get data from cache

```hljs js
Copyvar cache = scene.cache.shader;
var data = cache.get(key);

A glsl file can contain multiple shaders, all separated by a frontmatter block.

```hljs GLSL
Copy---
name:
type:

void main(void)
{
}

##### Binary

```hljs js
Copythis.load.binary(key, url, dataType); // dataType: Uint8Array
// this.load.binary(key, url, dataType, xhrSettings);

- `dataType` : Optional type to cast the binary file to once loaded.
- `Uint8Array`, `Uint8ClampedArray`, `Uint16Array` `Uint32Array`
- `Int8Array`, `Int16Array`, `Int32Array`
- `Float32Array`, `Float64Array`
- `BigInt64Array`, `BigUint64Array`

```hljs js
Copyvar cache = scene.cache.binary;
var data = cache.get(key);

##### Plugin

```hljs js
Copythis.load.plugin(key, url, true); // start plugin when loaded
// this.load.plugin(key, url, true, undefined, xhrSettings);

- `url` : File url or class instance.

##### Scene plugin

```hljs js
Copythis.load.scenePlugin(key, url, systemKey, sceneKey);
// this.load.scenePlugin(key, url, systemKey, sceneKey, xhrSettings);

##### File pack

Load files in JSON format.

```hljs js
Copythis.load.pack(key, url);
// this.load.pack(key, url, dataKey, xhrSettings);

or

```hljs js
Copythis.load.pack(key, json);
// this.load.pack(key, json, dataKey);

JSON pack file:

```hljs js
Copy{
'dataKey': {
// "prefix": "...", // optional, extend key by prefix
// "path": "...", // optional, extend url by path
// "defaultType": "image", // optional, default file type
'files': [\
{\
'type': 'image',\
'key': '...',\
'url': '...'\
},\
{\
'type': 'image',\
'key': '...',\
'url': '...'\
}\
// ...\
]
},

'node0': {
'node1': {
'node2': {
'files': [\
// ....\
]
}
}
}
// dataKey: 'node0.node1.node2'
}

File type:

- `audio`
- `binary`
- `glsl`
- `html`
- `htmlTexture`
- `image`
- `json`
- `script`
- `spritesheet`
- `svg`
- `text`
- `tilemapCSV`
- `tilemapJSON`
- `xml`

Get pack json data from cache

```hljs js
Copyvar cache = scene.cache.json; // pack json is stored in json cache
var data = cache.get(key);

Event name in `'filecomplete'` event : `'filecomplete-packfile-' + key`

## The loader

Each scene has a loader plugin, `this.load`, for loading assets.

### Set path

The `path` value is added before the filename but after the `baseURL` (if set). Once a path is set it will affect every file added to the Loader from that point on. It does not change any file already in the load queue. To reset it, call this method with no arguments.

#### Usage

```hljs js
Copythis.load.setPath(path);

- Example:

```hljs js
Copythis.load.setPath("images/sprites/");
this.load.image("ball", "ball.png"); // loads the ball.png file from images/sprites/ball.png

### Status of loader

- Ready to start loading

```hljs js
Copyvar isReady = this.load.isReady();

- Is loading

```hljs js
Copyvar isLoading = this.load.isLoading();

### Adding files to the loader

Each asset-loading method queues a resource by key and URL. You use the key to identify the asset later.

There is a `(key, url)` argument format:

```hljs js
Copythis.load.image("treasure", "treasure.png");

And an object config format:

```hljs js
Copythis.load.image({ key: "treasure", url: "treasure.png" });

And an array format:

```hljs js
Copythis.load.spritesheet([\
{\
key: "mermaid",\
url: "mermaid.png",\
frameConfig: { frameWidth: 16, frameHeight: 16 },\
},\
{\
key: "merman",\
url: "merman.png",\
frameConfig: { frameWidth: 16, frameHeight: 16 },\
},\
]);

The loader will not add assets with duplicate keys (per asset type) at all:

```hljs js
Copythis.load.image("sky", "sky1.png");
// 'sky1.png' will be queued and (if loaded) stored as texture key 'sky'

// OOPS:
this.load.image("sky", "sky2.png");
// 'sky2.png' will not be queued at all

Some `key` exceptions:

- For some asset types ( `script()`, sometimes `pack()`), you won't use the key again to retrieve anything, so it's not very important which key you choose.
- For `plugin()`, `sceneFile()`, and `scenePlugin()`, `key` must be the global class name of the plugin or scene.

Relative URLs are resolved to the base URL of the document, unless you configure the loader's `path` or `baseURL` values.

Each asset-loading method creates a temporary File object for the loader which you can access through the load event handlers if you need. These last only for the duration of the load cycle.

You can write your own asset manifest pretty easily:

```hljs js
Copyconst files = {
animation: [/* … */],
audio: [/* … */],
image: [/* … */],
spritesheet: [/* … */],
};

this.load.animation(files.animation);
this.load.audio(files.audio);
this.load.image(files.images);
this.load.spritesheet(files.spritesheet};

A File Pack could do as well:

```hljs js
Copythis.load.pack("pack1", {
section1: {
files: [\
{ type: "image", key: "conch", url: "conch.png" },\
{\
type: "spritesheet",\
key: "mermaid",\
url: "mermaid.png",\
frameConfig: {\
/* … */\
},\
},\
],
},
});

A File Pack needs at least one named section (e.g., `section1` above). If you're loading all the pack assets at once, it doesn't really matter what the section names are. The docs describe a method for downloading pack sections separately, but if you want to do this it seems more practical to download the entire pack with `load.json()` then select sections from the JSON data and pass those into `load.pack()`.

You can add assets to the load queue while the loader is running:

```hljs js
Copythis.load.json("level1", "level1.json");

this.load.image(data.images);
this.load.spritesheet(data.spritesheets);
});

`load.multiatlas()`, `load.pack()`, and `load.spine()` work this way.

#### Events

- Load file complete event

```hljs js
Copythis.load.on("filecomplete", function (key, type, data) {}, scope);

```hljs js
Copythis.load.on(
"filecomplete-" + type + "-" + key,
function (key, type, data) {},
scope
);

- Add loading file event

```hljs js
Copythis.load.on("addfile", function (key, type, file) {}, scope);

- Start loading

```hljs js
Copythis.load.once("start", function () {}, scope);

- Loading progressing

```hljs js
Copythis.load.on("progress", function (progress) {}, scope);

- `progress` value will increase when a file is loaded, and decrease when a new file loading request is added.

```hljs js
Copyvar loader = this.load;
var total = loader.totalToLoad;
var remainder = loader.list.size + loader.inflight.size;
var progress = 1 - remainder / total;

- Loading file progressing

```hljs js
Copythis.load.on(
"fileprogress",
function (file, progress) {
// var key = file.key;
},
scope
);

- Loading a file object successful

```hljs js
Copythis.load.once("load", function (fileObj) {}, scope);

- Loading a file object failed

```hljs js
Copythis.load.once("loaderror", function (fileObj) {}, scope);

- All loading completed
- Before releasing resources

```hljs js
Copythis.load.once("postprocess", function (loader) {}, scope);

- After releasing resources

```hljs js
Copythis.load.once("complete", function (loader) {}, scope);

- Scene's `'preupdate'`, `'update'`, `'postupdate'`, `'render'` events will be triggered during preload stage.

#### Preload stage

Most of the time you will load assets in a scene `preload()` method.

When `preload()` returns, the loader starts automatically, then `create()` is called only after loading finishes. In the meantime the scene is in a `LOADING` state and still updates and renders any of its game objects, but doesn't call scene `update()`. You can show load progress this way.

##### Usage

```hljs js
Copythis.load.image(key, url);
// this.load.image(config); // config: {key, url}

Loader in preload stage will start loading automatically by scene.

#### Loading progress

It's best to create any game objects in the load `START` event and destroy them in the load `COMPLETE` event, so that restarting the loader doesn't cause any errors.

- load progress event
- file progress event

#### Loading after preload stage

To load assets outside of `preload()`, you add files as usual, add listeners for the completion events, and then start the loader yourself.

##### Usage

```hljs js
Copythis.load.image(key, url); // add task
// this.load.image(config); // config: {key, url}
this.load.once("complete", callback, scope); // add callback of 'complete' event
this.load.start(); // start loading

```hljs js
Copythis.load
.image(["conch", "treasure", "trident"])

// All files complete
})
.start();

It's fine if two processes call the loader's `start()` separately. If it's already loading, it won't restart or clear the queue.

Other scenes should listen for "add" events from the game caches or Texture Manager:

```hljs js

if (key === "music") {
this.sound.play("music");
}
});

// The key is also in `texture.key`.
this.add.image(0, 0, "map");
});

## Scene payload

A scene payload is alternative to `preload()` that lets you load assets right when the scene starts. It's often used when you need to load a few small assets to use **during** `preload()`, and you don't want the trouble of starting an extra scene (and its loader) before that. A scene downloading a payload is not in a `LOADING` state and can't update or render anything, so it's best to keep payloads small.

The pack object structure is the same as the `files` portion of a pack file section.

```hljs js
Copyconst sceneConfig = {
pack: {
files: [\
{ type: "json", key: "settings", url: "settings.json" },\
{ type: "image", key: "bar", url: "bar.png" },\
],
},
init: function () {
// Pack has downloaded. 'settings' is in JSON cache.
this.game.registry.merge(this.cache.json.get("settings"));
},
preload: function () {
// 'bar' is in the Texture Manager.

const loadingBar = this.add.image(0, 0, "bar");
});
},
};

## Removing assets

You can remove assets to save memory. Remove any game objects or scene objects (e.g., Sounds) using these assets first!

Remove textures from the Texture Manager:

```hljs js
Copythis.textures.remove("conch");

and other assets from their respective caches:

```hljs js
Copythis.cache.audio.remove("chime");
this.cache.json.remove("settings");

Removing assets to reuse their keys for different assets is usually a bad idea.

## XHR Settings Object

You have a lot of control over the `xhrSettings` object used by every file loaded. This allows you to modify the timeout, request or credential headers. The object takes the following form:

```hljs js
Copy{
async: true,
user: '',
password: '',
timeout: 0,
headers: undefined,
header: undefined,
headerValue: undefined,
requestedWith: undefined,
overrideMimeType: undefined,
withCredentials: false
}

- `user` : Optional username for the XHR request.
- `password` : Optional password for the XHR request.
- `timeout` : Optional XHR timeout value.
- `headers`, `header`, `headerValue`, `requestedWith` : This value is used to populate the XHR `setRequestHeader`
- `overrideMimeType` : Provide a custom mime-type to use instead of the default.
- `withCredentials` : Whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. _Setting `withCredentials` has no effect on same-site requests._

## More configurations

More configurations in game config

```hljs js
Copyloader:{
baseURL: '',
path: '',
enableParallel: true,
maxParallelDownloads: 4,
crossOrigin: undefined,
responseType: '',
async: true,
user: '',
password: '',
timeout: 0,
withCredentials: false,
imageLoadType: 'XHR', // 'HTMLImageElement'
localScheme: [ 'file://', 'capacitor://' ]
},

## Author Credits

Content on this page includes work by:

- RexRainbow
- samme

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Input

Cache

---

# https://docs.phaser.io/phaser/concepts/scale-manager

# Scale Manager

Scale Manager

Scale game window, built-in method of phaser.

## Setup

Setup scale mode in game configuration.

```hljs javascript
Copyvar config = {
// ...
parent: divId,

// Game size
width: 1024,
height: 768,

scale: {
// Or set parent divId here
parent: divId,

mode: Phaser.Scale.FIT,
autoCenter: Phaser.Scale.CENTER_BOTH,

// Or put game size here
// width: 1024,
// height: 768,

// Minimum size
min: {
width: 800,
height: 600
},
// Or set minimum size like these
// minWidth: 800,
// minHeight: 600,

// Maximum size
max: {
width: 1600,
height: 1200
},
// Or set maximum size like these
// maxWidth: 1600,
// maxHeight: 1200,

zoom: 1, // Size of game canvas = game size * zoom
},
autoRound: false
// ...
};
var game = new Phaser.Game(config);

- `scale.mode` :
- `Phaser.Scale.NONE` : No scaling happens at all.
- `Phaser.Scale.FIT` : The width and height are automatically adjusted to fit inside the given target area, while keeping the aspect ratio. Depending on the aspect ratio there may be some space inside the area which is not covered.
- `Phaser.Scale.ENVELOP` : The width and height are automatically adjusted to make the size cover the entire target area while keeping the aspect ratio. This may extend further out than the target size.
- `Phaser.Scale.WIDTH_CONTROLS_HEIGHT` : The height is automatically adjusted based on the width.
- `Phaser.Scale.HEIGHT_CONTROLS_WIDTH` : The width is automatically adjusted based on the height.
- `Phaser.Scale.EXPAND` : The Canvas's visible area is resized to fit all available parent space like RESIZE mode, and scale canvas size to fit inside the visible area like FIT mode.
- `Phaser.Scale.RESIZE` : The Canvas is resized to fit all available _parent_ space, regardless of aspect ratio.
- `scale.autoCenter` :
- `Phaser.Scale.NO_CENTER` : The game canvas is not centered within the parent by Phaser.
- `Phaser.Scale.CENTER_BOTH` : The game canvas is centered both horizontally and vertically within the parent.
- `Phaser.Scale.CENTER_HORIZONTALLY` : The game canvas is centered horizontally within the parent.
- `Phaser.Scale.CENTER_VERTICALLY` : The game canvas is centered both vertically within the parent.

## Resize canvas element

```hljs javascript
Copyscene.scale.resize(width, height);

Modify the size of the Phaser canvas element directly. You should only use this if you are using the `NO_SCALE` scale mode,

## Set game size

```hljs javascript
Copyscene.scale.setGameSize(width, height);

It should only be used if you're looking to change the base size of your game and are using one of the Scale Manager scaling modes, i.e. `FIT`. If you're using `NO_SCALE` and wish to change the game and canvas size directly, then please use the `resize` method instead.

## Get view port

```hljs javascript
Copyvar viewport = scene.scale.getViewPort();
// var viewport = scene.scale.getViewPort(camera, out);

- `viewport` : The Rectangle of visible area.
- `camera` : The camera this viewport is respond upon.
- `out` : The Rectangle of visible area.

## Members

- The un-modified game size, as requested in the game config (the raw width / height), as used for world bounds, cameras, etc

```hljs javascript
Copyvar gameSize = scene.scale.gameSize;

- `gameSize.width`, `gameSize.height`
- The modified game size, which is the auto-rounded gameSize, used to set the canvas width and height (but not the CSS style)

```hljs javascript
Copyvar baseSize = scene.scale.baseSize;

- `baseSize.width`, `baseSize.height`
- The size used for the canvas style, factoring in the scale mode, parent and other values.

```hljs javascript
Copyvar displaySize = scene.scale.displaySize;

- `displaySize.width`, `displaySize.height`
- The size of parent dom element

```hljs javascript
Copyvar parentSize = scene.scale.parentSize;

- `parentSize.width`, `parentSize.height`

## Events

```hljs javascript
Copyscene.scale.on('resize', function(gameSize, baseSize, displaySize, previousWidth, previousHeight) {});

- `gameSize` : The un-modified game size, as requested in the game config (the raw width / height)
- `gameSize.width`, `gameSize.height`
- `baseSize` : The canvas width and height (actually size of canvas)
- `baseSize.width`, `baseSize.height`
- `displaySize` : Size used for the canvas style (display size of canvas)
- `displaySize.width`, `displaySize.height`

## Update bounds

This method dose not have to be invoked, unless the canvas position, or visibility is changed via any other method (i.e. via an Angular route).

```hljs javascript
Copyscene.scale.updateBounds();

## Full screen

Under `'pointerup'` touch event :

- Start full screen

```hljs javascript
Copyscene.scale.startFullscreen();

- Stop full screen

```hljs javascript
Copyscene.scale.stopFullscreen();

- Toggle full screen

```hljs javascript
Copyscene.scale.toggleFullscreen();

- Is full screen

```hljs javascript
Copyvar isFullscreen = scene.scale.isFullscreen;

Games within an iframe will also be blocked from fullscreen
unless the iframe has the `allowfullscreen` attribute.

Performing an action that navigates to another page,
or opens another tab, will automatically cancel fullscreen mode,
as will the user pressing the ESC key.

### Events

- Enter full screen

```hljs javascript
Copyscene.scale.on('enterfullscreen', function() {}, scope);

- Enter full screen failed

```hljs javascript
Copyscene.scale.on('fullscreenfailed', function(error) {}, scope);

- Leave full screen

```hljs javascript
Copyscene.scale.on('leavefullscreen', function() {}, scope);

- Full screen unsupport

```hljs javascript
Copyscene.scale.on('fullscreenunsupported', function() {}, scope);

## Orientation

### Properties

- Is portrait orientation

```hljs javascript
Copyvar isPortrait = scene.scale.isPortrait;

- Is landscape orientation

```hljs javascript
Copyvar isLandscape = scene.scale.isLandscape;

### Lock orientation

```hljs javascript
Copyscene.scale.lockOrientation(orientation);

- `orientation` : `'landscape'`, or `'portrait'`;

### Events

```hljs javascript
Copyscene.scale.on('orientationchange', function(orientation) {
if (orientation === Phaser.Scale.PORTRAIT) {

} else if (orientation === Phaser.Scale.LANDSCAPE) {

}
}, scope);

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Matter Physics

Scenes

---

# https://docs.phaser.io/phaser/concepts/display

# Display

Display

## Blend Mode

Control how textures are blended with the background when rendering. Setting a blend mode affects how the colors of a sprite or a game object are combined with the colors of the pixels behind them.

Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these reasons try to be careful about the construction of your Scene and the frequency in which blend modes are used.

### WebGL and Canvas

- `'NORMAL'`, or `Phaser.BlendModes.NORMAL`, or `0`
- Default setting and draws new shapes on top of the existing canvas content.
- `'ADD'`, or `Phaser.BlendModes.ADD`, or `1`
- Where both shapes overlap the color is determined by adding color values.
- `'MULTIPLY'`, or `Phaser.BlendModes.MULTIPLY`, or `2`
- The pixels are of the top layer are multiplied with the corresponding pixel of the bottom layer. A darker picture is the result.
- `'SCREEN'`, or `Phaser.BlendModes.SCREEN`, or `3`
- The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)
- `'ERASE'`, or `Phaser.BlendModes.ERASE`, or `17`
- Alpha erase blend mode. Only works when rendering to a framebuffer, like a _Render Texture_

### Canvas only

- `'OVERLAY'`, or `Phaser.BlendModes.OVERLAY`, or `4`
- A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter.
- `'DARKEN'`, or `Phaser.BlendModes.DARKEN`, or `5`
- Retains the darkest pixels of both layers.
- `'LIGHTEN'`, or `Phaser.BlendModes.LIGHTEN`, or `6`
- Retains the lightest pixels of both layers.
- `'COLOR_DODGE'`, or `Phaser.BlendModes.COLOR_DODGE`, or `7`
- Divides the bottom layer by the inverted top layer.
- `'COLOR_BURN'`, or `Phaser.BlendModes.COLOR_BURN`, or `8`
- Divides the inverted bottom layer by the top layer, and then inverts the result.
- `'HARD_LIGHT'`, or `Phaser.BlendModes.HARD_LIGHT`, or `9`
- A combination of multiply and screen like overlay, but with top and bottom layer swapped.
- `'SOFT_LIGHT'`, or `Phaser.BlendModes.SOFT_LIGHT`, or `10`
- A softer version of hard-light. Pure black or white does not result in pure black or white.
- `'DIFFERENCE'`, or `Phaser.BlendModes.DIFFERENCE`, or `11`
- Subtracts the bottom layer from the top layer or the other way round to always get a positive value.
- `'EXCLUSION'`, or `Phaser.BlendModes.EXCLUSION`, or `12`
- Like difference, but with lower contrast.
- `'HUE'`, or `Phaser.BlendModes.HUE`, or `13`
- Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer.
- `'SATURATION'`, or `Phaser.BlendModes.SATURATION`, or `14`
- Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer.
- `'COLOR'`, or `Phaser.BlendModes.COLOR`, or `15`
- Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer.
- `'LUMINOSITY'`, or `Phaser.BlendModes.LUMINOSITY`, or `16`
- Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer.
- `'SOURCE_IN'`, or `Phaser.BlendModes.SOURCE_IN`, or `18`
- The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent.
- `'SOURCE_OUT'`, or `Phaser.BlendModes.SOURCE_OUT`, or `19`
- The new shape is drawn where it doesn't overlap the existing canvas content.
- `'SOURCE_ATOP'`, or `Phaser.BlendModes.SOURCE_ATOP`, or `20`
- The new shape is only drawn where it overlaps the existing canvas content.
- `'DESTINATION_OVER'`, or `Phaser.BlendModes.DESTINATION_OVER`, or `21`
- New shapes are drawn behind the existing canvas content.
- `'DESTINATION_IN'`, or `Phaser.BlendModes.DESTINATION_IN`, or `22`
- The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.
- `'DESTINATION_OUT'`, or `Phaser.BlendModes.DESTINATION_OUT`, or `23`
- The existing content is kept where it doesn't overlap the new shape.
- `'DESTINATION_ATOP'`, or `Phaser.BlendModes.DESTINATION_ATOP`, or `24`
- The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content.
- `'LIGHTER'`, or `Phaser.BlendModes.LIGHTER`, or `25`
- Where both shapes overlap the color is determined by adding color values.
- `'COPY'`, or `Phaser.BlendModes.COPY`, or `26`
- Only the new shape is shown.
- `'XOR'`, or `Phaser.BlendModes.XOR`, or `27`
- Shapes are made transparent where both overlap and drawn normal everywhere else.

## Color

The Color class holds a single color value and allows for easy modification and reading of it.

### Get color integer

- Hex string, or color integer

```hljs javascript
Copyvar color = Phaser.Display.Color.ValueToColor(input);

- `input` : Hex string, or color integer
- RGB to color

```hljs javascript
Copyvar color = Phaser.Display.Color.GetColor(red, green, blue);

- `red`, `green`, `blue` : 0 ~ 255
- RGBA to color

```hljs javascript
Copyvar color = Phaser.Display.Color.GetColor32(red, green, blue, alpha);

- `red`, `green`, `blue`, `alpha` : 0 ~ 255
- Hex string to color

```hljs javascript
Copyvar color = Phaser.Display.Color.HexStringToColor(hex).color;

- hex : `#0033ff`, `#03f`, `0x0033ff`, or `0x03f`
- RGB string to color

```hljs javascript
Copyvar color = Phaser.Display.Color.RGBStringToColor(rgb);

- rgb : `'rgb(r,g,b)'`, or `'rgba(r,g,b,a)'`
- r, g, b : 0 ~ 255
- a : 0 ~ 1
- HSV to color

```hljs javascript
Copyvar color = Phaser.Display.Color.HSVToRGB(h, s, v).color;

- `h`, `s`, `v` : 0 ~ 1

### Color integer to RGB

```hljs javascript
Copyvar rgb = Phaser.Display.Color.IntegerToRGB(color);

- `color` : Color integer ( `0xAARRGGBB`)
- `rgb` : JSON object ( `{r, g, b, a}`)

### HSV color wheel

1. Create color array

```hljs javascript
Copyvar colorArray = Phaser.Display.Color.HSVColorWheel(s, v);

2. Get color

```hljs javascript
Copyvar color = colorArray[i].color; // i : 0 ~ 359

#### Create color object

- Create via r,g,b,a components

```hljs javascript
Copyvar color = new Phaser.Display.Color(red, green, blue); // alpha = 255
// var color = new Phaser.Display.Color(red, green, blue, alpha);

- `red`, `green`, `blue`, `alpha`: 0 ~ 255
- Create via color integer

```hljs javascript
Copyvar color = Phaser.Display.Color.IntegerToColor(colorInteger);

- colorInteger : Color integer ( `0xAARRGGBB`)

#### Set color

- Set color

```hljs javascript
Copycolor.setTo(red, green, blue); // alpha = 255
// color.setTo(red, green, blue, alpha);

- `red`, `green`, `blue`, `alpha`: 0 ~ 255
- Set color in GL values

```hljs javascript
Copycolor.setGLTo(red, green, blue); // alpha = 1
// color.setTo(red, green, blue, alpha);

- `red`, `green`, `blue`, `alpha`: 0 ~ 1
- Set color from color object

```hljs javascript
Copycolor.setFromRGB(rgba);

- rgba :

```hljs javascript
Copy{
r: 0,
g: 0,
b: 0,
// a: 0
}

- Set color from HSV

```hljs javascript
Copycolor.setFromHSV(h, s, v);

- Set to transparent ()

```hljs javascript
Copycolor.transparent();

- Set (red, green, blue) to `0`
- Set to gray color

```hljs javascript
Copycolor.gray(value);

- Set to a random color

```hljs javascript
Copycolor.random();

or

```hljs javascript
Copycolor.random(min, max);

- `min` : 0 ~ 255. Default value is 0.
- `max` : 0 ~ 255. Default value is 255.
- Set to random gray

```hljs javascript
Copycolor.randomGray();

```hljs javascript
Copycolor.randomGray(min, max);

- Set red/green/blue/alpha channel : 0 ~ 255

```hljs javascript
Copycolor.red = value;
// color.red += value;
color.green = value;
// color.green += value;
color.blue = value;
// color.blue += value;
color.alpha = value;
// color.alpha += value;

- Set H/S/V channel : 0 ~ 1

```hljs javascript
Copycolor.h = value;
// color.h += value;
color.s = value;
// color.s += value;
color.v = value;
// color.v += value;

- Set normalized red, green, blue, alpha : 0 ~ 1

```hljs javascript
Copycolor.redGL = value;
// color.redGL += value;
color.greenGL = value;
// color.greenGL += value;
color.blueGL = value;
// color.blueGL += value;
color.alphaGL = value;
// color.alphaGL += value;

- Set brighten

```hljs javascript
Copycolor.brighten(value);

- `value` : Percentage, 0 ~ 100
- Saturate : Increase the saturation (S) of this Color by the percentage amount given.

```hljs javascript
Copycolor.saturate(value);

- `value` : Percentage, 0 ~ 100
- Desaturate : Decrease the saturation (S) of this Color by the percentage amount given.

```hljs javascript
Copycolor.desaturate(value);

- `value` : Percentage, 0 ~ 100
- Lighten : Increase the lightness (V) of this Color by the percentage amount given.

```hljs javascript
Copycolor.lighten(value);

- `value` : Percentage, 0 ~ 100
- Darken : Decrease the lightness (V) of this Color by the percentage amount given.

```hljs javascript
Copycolor.darken(value);

- `value` : Percentage, 0 ~ 100

#### Properties

- RGB Color, not including the alpha channel

```hljs javascript
Copyvar c = color.color;

- RGB Color, including the alpha channel.

```hljs javascript
Copyvar c = color.color32;

- RGB color string which can be used in CSS color values.

```hljs javascript
Copyvar c = color.rgba;

- Red, green, blue, alpha : 0 ~ 255

```hljs javascript
Copyvar r = color.red;
var g = color.green;
var b = color.blue;
var a = color.alpha;

- H, S, V : 0 ~ 1

```hljs javascript
Copyvar h = color.h;
var s = color.s;
var v = color.v;

- Normalized red, green, blue, alpha : 0 ~ 1

```hljs javascript
Copyvar r = color.redGL;
var g = color.greenGL;
var b = color.blueGL;
var a = color.alphaGL;

#### Clone

```hljs javascript
Copyvar newColor = color.clone();

### To hex string

```hljs javascript
Copyvar hexString = Phaser.Display.Color.RGBToString(color.r, color.g, color.b, color.a);
// var hexString = Phaser.Display.Color.RGBToString(color.r, color.g, color.b, color.a, prefix);

### Interpolation

Interpolate between 2 colors.

```hljs javascript
Copyvar colorOut = Phaser.Display.Color.Interpolate.RGBWithRGB(r1, g1, b1, r2, g2, b2, length, index);
var colorOut = Phaser.Display.Color.Interpolate.ColorWithColor(color1, color2, length, index);
var colorOut = Phaser.Display.Color.Interpolate.ColorWithRGB(color, r, g, b, length, index);

- `length`, `index` : t = `index/length` (0~1)

## Masks

Phaser has the ability to 'mask' Game Objects as they are rendered. A mask allows you to 'hide' areas of the Game Object from rendering. There are two types of mask available: Geometry Masks and Bitmap Masks. The Geometry Mask works by using geometry data in order to create the mask. For example rectangles, circles, ellipses, polygons and more. This data is used to create a path that forms the mask. Internally, it uses what is known as the stencil buffer in WebGL and the clip path in Canvas.

The Bitmap Mask works by using a texture as the mask. This texture can be any size and shape you like, and can be animated, or even a video. The alpha values of the pixels in the texture control what the mask looks like on-screen. For example, a pixel with an alpha value of 0 will hide the Game Object, where-as a pixel with an alpha value of 1 will show it. This allows you to create detailed effects, such as feathering, not possible with a Geometry Mask. Bitmap Masks are a WebGL only feature.

Masks in Phaser are slightly unique in that they are drawn and positioned in world space. A Game Object can only have one mask applied to it at any one time. However, you can apply the same mask to multiple Game Objects, if you wish. They are not Game Object specific and if you then move the Game Object, the mask will not 'follow' it. This means they require some careful planning to use effectively.

#### Bitmap mask

```hljs javascript
Copyvar mask = scene.add.bitmapMask([maskObject], [x], [y], [texture], [frame]);

- `maskObject` : The Game Object or Dynamic Texture that will be used as the mask. If null it will generate an Image Game Object using the rest of the arguments.
- `x` : If creating a Game Object, the horizontal position in the world.
- `y` : If creating a Game Object, the vertical position in the world.
- `texture` : If creating a Game Object, the key, or instance of the Texture it will use to render with, as stored in the Texture Manager.
- `frame` : If creating a Game Object, an optional frame from the Texture this Game Object is rendering with.

Examples

1. Create image ( image, sprite, bitmap text, particles, text),or shader

```hljs javascript
Copyvar shape = scene.add.image(x, y, key).setVisible(false);

2. Create mask

```hljs javascript
Copyvar mask = shape.createBitmapMask();

```hljs javascript
Copyvar mask = scene.add.bitmapMask(shape);

#### Geometry mask

The mask is essentially a clipping path which can only make a masked pixel fully visible or fully invisible without changing its alpha (opacity).

1. Create graphics

```hljs javascript
Copyvar shape = scene.make.graphics();

```hljs javascript
Copyvar mask = shape.createGeometryMask();

### Apply mask object

```hljs javascript
CopygameObject.setMask(mask); // image.mask = mask;

A mask object could be added to many game objects.

Don't put game object and its mask into a container together.
See this testing, enable line 22-24.

Bitmap Mask is WebGL only.

Can combine Geometry Masks and Blend Modes on the same Game Object,
but Bitmap Masks can't.

### Clear mask

- Clear mask

```hljs javascript
Copyimage.clearMask();

- Clear mask and destroy mask object

```hljs javascript
Copyimage.clearMask(true);

### Invert alpha

Only GeometryMask has `inverse alpha` feature.

- Inverse alpha

```hljs javascript
Copymask.setInvertAlpha();
// mask.invertAlpha = true;

- Disable

```hljs javascript
Copymask.setInvertAlpha(false);
// mask.invertAlpha = false;

### Get shape game object

- Bitmap mask

```hljs javascript
Copyvar shape = mask.bitmapMask;

- Geometry mask

```hljs javascript
Copyvar shape = mask.geometryMask;

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Device

Events

---

# https://docs.phaser.io/phaser/concepts/geometry

# Geometry

Geometry

Phaser has an extensive set of Geometry classes. These are used internally by the physics and input systems, but are also available for you to use in your own games. The geometry classes on offer include: Circle, Ellipse, Line, Point, Polygon, Rectangle, Triangle and the Mesh class.

Each of these classes has a set of methods and support functions that allow you to perform geometric operations on them. For example, you can check if a point is contained within a circle, get the bounds of an ellipse, or the nearest point from a line, as well as many other features.

There are also a wide range of intersection functions. You can test for conditions such as a Circle intersecting with a Rectangle, or getting the rays from a point to a polygon.

The Geometry classes are not Game Objects. You cannot add them on to the Display List. Instead, think of them as data structures that you can use to perform geometric operations on, of which most games tend to have quite a few.

## Circle

### Create circle

```hljs js
Copyvar circle = new Phaser.Geom.Circle(x, y, radius);

### Clone circle

```hljs js
Copyvar circle1 = Phaser.Geom.Circle.Clone(circle0);

### Draw on Graphics object

- Fill shape

```hljs js
Copy// graphics.fillStyle(color, alpha); // color: 0xRRGGBB
graphics.fillCircleShape(circle);

- Stroke shape

```hljs js
Copy// graphics.lineStyle(lineWidth, color, alpha); // color: 0xRRGGBB
graphics.strokeCircleShape(circle);

Negative radius will be treated as positive radius. i.e. `Math.abs(radius)`

### Set circle properties

- All properties

```hljs js
Copycircle.setTo(x, y, radius);

or

```hljs js
CopyPhaser.Geom.Circle.CopyFrom(source, dest);

`CopyFrom` requires source and dest circles that already exist

- Position

```hljs js
Copycircle.setPosition(x, y);

```hljs js
Copycircle.x = 0;
circle.y = 0;

```hljs js
Copycircle.left = 0; // circle.x
circle.top = 0; // circle.y
// circle.right = 0; // circle.x
// circle.bottom = 0; // circle.y

```hljs js
CopyPhaser.Geom.Circle.Offset(circle, dx, dy); // circle.x += dx, circle.y += dy

```hljs js
CopyPhaser.Geom.Circle.OffsetPoint(circle, point); // circle.x += point.x, circle.y += point.y

- Radius

```hljs js
Copycircle.radius = radius;

```hljs js
Copycircle.diameter = diameter; // diameter = 2 * radius

### Get properties

```hljs js
Copyvar x = circle.x;
var y = circle.y;
var top = circle.top;
var left = circle.left;
var right = circle.right;
var bottom = circle.bottom;

```hljs js
Copyvar radius = circle.radius;
// var diameter = circle.diameter;

- Bounds

```hljs js
Copyvar bound = Phaser.Geom.Circle.GetBounds(circle);
// var bound = Phaser.Geom.Circle.GetBounds(circle, bound); // push bound

- `bound` : `GetBounds` returns a Rectangle shape
- Area

```hljs js
Copyvar area = Phaser.Geom.Circle.Area(circle);

- Circumference

```hljs js
Copyvar circumference = Phaser.Geom.Circle.Circumference(circle);

- Type:

```hljs js
Copyvar type = circle.type; // GEOM_CONST.CIRCLE or 0

### Point(s) & shape

- Get point at circle's edge

```hljs js
Copyvar point = circle.getPoint(t);
// var point = circle.getPoint(t, point);

- Arguments:
- `t` : A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the circle.
- `point` : an existing point or returns a new point if point is not provided

```hljs js
Copyvar point = Phaser.Geom.Circle.CircumferencePoint(circle, angle); // angle in radians
// var point = Phaser.Geom.Circle.CircumferencePoint(circle, angle, point); // modify existing point or returns a new point if point is not provided

- Get a random point inside circle

```hljs js
Copyvar point = circle.getRandomPoint();
// var point = circle.getRandomPoint(point); // modify existing point or returns a new point if point is not provided

- Get points around circle's edge.

- Based on quantity:

```hljs js
Copyvar points = circle.getPoints(quantity);
// var points = circle.getPoints(quantity, null, pointsArray); // If pointsArray not provided a new array will be created.

- Based on stepRate:

```hljs js
Copyvar points = circle.getPoints(false, stepRate);
// var points = circle.getPoints(false, stepRate, pointsArray); // If pointsArray not provided a new array will be created.

- `pointsArray` : an existing array
- `stepRate` : sets the quantity by getting the circumference of the circle divided by the stepRate
- Point is inside circle

```hljs js
Copyvar isInside = circle.contains(x, y);

```hljs js
Copyvar isInside = Phaser.Geom.Circle.ContainsPoint(circle, point);

- Rectangle is inside shape

```hljs js
Copyvar isInside = Phaser.Geom.Circle.ContainsRect(circle, rect); // rect : 4 points

### Empty

- Set empty

```hljs js
Copycircle.setEmpty(); // circle.radius = 0

- Is empty

```hljs js
Copyvar isEmpty = circle.isEmpty(); // circle.radius <= 0

### Equal

```hljs js
Copyvar isEqual = Phaser.Geom.Circle.Equals(circle0, circle1);

Position and radius are equal.

#### Circle to circle

- Is intersection

```hljs js
Copyvar result = Phaser.Geom.Intersects.CircleToCircle(circleA, circleB);

- Get intersection points

```hljs js
Copyvar result = Phaser.Geom.Intersects.GetCircleToCircle(circleA, circleB);
// var out = Phaser.Geom.Intersects.GetCircleToCircle(circleA, circleB, out);

#### Circle to rectangle

```hljs js
Copyvar result = Phaser.Geom.Intersects.CircleToRectangle(circle, rect);

```hljs js
Copyvar result = Phaser.Geom.Intersects.GetCircleToRectangle(circle, rect);
// var out = Phaser.Geom.Intersects.GetCircleToRectangle(circle, rect, out);

#### Circle to triangle

```hljs js
Copyvar result = Phaser.Geom.Intersects.TriangleToCircle(triangle, circle);

```hljs js
Copyvar result = Phaser.Geom.Intersects.GetTriangleToCircle(triangle, circle);
// var out = Phaser.Geom.Intersects.GetTriangleToCircle(triangle, circle, out);

#### Circle to line

```hljs js
Copyvar result = Phaser.Geom.Intersects.LineToCircle(line, circle);
// var result = Phaser.Geom.Intersects.LineToCircle(line, circle, nearest);

- `nearest` : Nearest point on line.
- Get intersection points

```hljs js
Copyvar result = Phaser.Geom.Intersects.GetLineToCircle(line, circle);
// var out = Phaser.Geom.Intersects.GetLineToCircle(line, circle, out);

## Ellipse

### Create ellipse

```hljs js
Copyvar ellipse = new Phaser.Geom.Ellipse(x, y, width, height);

### Clone ellipse

```hljs js
Copyvar ellipse1 = Phaser.Geom.Ellipse.Clone(ellipse0);

### Draw on Graphics object

```hljs js
Copy// graphics.fillStyle(color, alpha); // color: 0xRRGGBB
graphics.fillEllipseShape(ellipse);

```hljs js
Copy// graphics.lineStyle(lineWidth, color, alpha); // color: 0xRRGGBB
graphics.strokeEllipseShape(ellipse);

Negative width, height will be treated as positive width, height. i.e. `Math.abs(width)`, `Math.abs(height)`

### Set properties

```hljs js
Copyellipse.setTo(x, y, width, height);

```hljs js
CopyPhaser.Geom.Ellipse.CopyFrom(source, dest);

```hljs js
Copyellipse.setPosition(x, y);

```hljs js
Copyellipse.x = 0;
ellipse.y = 0;

```hljs js
Copyellipse.left = 0; // ellipse.x
ellipse.top = 0; // ellipse.y
// ellipse.right = 0; // ellipse.x
// ellipse.bottom = 0; // ellipse.y

```hljs js
CopyPhaser.Geom.Ellipse.Offset(ellipse, dx, dy); // ellipse.x += dx, ellipse.y += dy

```hljs js
CopyPhaser.Geom.Ellipse.OffsetPoint(ellipse, point); // ellipse.x += point.x, ellipse.y += point.y

- Width, height

```hljs js
Copyellipse.width = width;
ellipse.height = height;

### Get properties

```hljs js
Copyvar x = ellipse.x;
var y = ellipse.y;
var top = ellipse.top;
var left = ellipse.left;
var right = ellipse.right;
var bottom = ellipse.bottom;

```hljs js
Copyvar width = ellipse.width;
var height = ellipse.height;

```hljs js
Copyvar bound = Phaser.Geom.Ellipse.GetBounds(ellipse);
// var bound = Phaser.Geom.Ellipse.GetBounds(ellipse, bound); // push bound

```hljs js
Copyvar area = Phaser.Geom.Ellipse.Area(ellipse);

```hljs js
Copyvar circumference = Phaser.Geom.Ellipse.Circumference(ellipse);

```hljs js
Copyvar type = ellipse.type; // GEOM_CONST.ELLIPSE or 1

### Point(s) & shape

- Get point at shape's edge

```hljs js
Copyvar point = ellipse.getPoint(t);
// var point = ellipse.getPoint(t, point);

```hljs js
Copyvar point = Phaser.Geom.Ellipse.CircumferencePoint(ellipse, angle); // angle in degrees
// var point = Phaser.Geom.Ellipse.CircumferencePoint(ellipse, angle, point); // modify point

- Get a random point inside shape

```hljs js
Copyvar point = ellipse.getRandomPoint();
// var point = ellipse.getRandomPoint(point); // modify point

- Get points around shape's edge

```hljs js
Copyvar points = ellipse.getPoints(quantity);
// var points = ellipse.getPoints(quantity, null, pointsArray); // If pointsArray not provided a new array will be created.

```hljs js
Copyvar points = ellipse.getPoints(false, stepRate);
// var points = ellipse.getPoints(false, stepRate, pointsArray); // If pointsArray not provided a new array will be created.

- `pointsArray` : an existing array
- `stepRate` : sets the quantity by getting the circumference of the ellipse divided by the stepRate
- Point is inside shape

```hljs js
Copyvar isInside = ellipse.contains(x, y);

```hljs js
Copyvar isInside = Phaser.Geom.Ellipse.ContainsPoint(ellipse, point);

```hljs js
Copyvar isInside = Phaser.Geom.Ellipse.ContainsRect(ellipse, rect); // rect : 4 points

### Empty

```hljs js
Copyellipse.setEmpty(); // ellipse.width = 0, ellipse.height = 0

```hljs js
Copyvar isEmpty = ellipse.isEmpty(); // ellipse.width <= 0 || ellipse.height <= 0

### Equal

```hljs js
Copyvar isEqual = Phaser.Geom.Ellipse.Equals(ellipse0, ellipse1);

Position and width, height are equal.

## Line

### Create line

```hljs js
Copyvar line = new Phaser.Geom.Line(x1, y1, x2, y2);

### Clone line

```hljs js
Copyvar line1 = Phaser.Geom.Line.Clone(line0);

### Draw on Graphics object

```hljs js
Copy// graphics.lineStyle(lineWidth, color, alpha); // color: 0xRRGGBB
graphics.strokeLineShape(line);

### Set properties

```hljs js
Copyline.setTo(x1, y1, x2, y2);

```hljs js
CopyPhaser.Geom.Line.CopyFrom(source, dest);

```hljs js
Copyline.x1 = 0;
line.y1 = 0;
line.x2 = 0;
line.y2 = 0;

```hljs js
Copyline.left = 0; // min(x1, x2)
line.top = 0; // min(y1, y2)
line.right = 0; // max(x1, x2)
line.bottom = 0; // max(y1, y2)

- Offset start, end

```hljs js
Copyvar line = Phaser.Geom.Line.Offset(line, dx, dy);
// line.x1 += dx, line.y1 += dy, line.x2 += dx, line.y2 += dy

- Set center position

```hljs js
Copyvar line = Phaser.Geom.Line.CenterOn(line, x, y);

- Start point, angle, length

```hljs js
Copyvar line = Phaser.Geom.Line.SetToAngle(line, x, y, angle, length);

- `line` : The line to set

- `x` , `y` : start point

- `angle` : The angle of the line in **radians**

```hljs js
Copyvar rad = Phaser.Math.DegToRad(deg);

- `length` :　 The length of the line
- Rotate
- Rotate around **midpoint**

```hljs js
Copyvar line = Phaser.Geom.Line.Rotate(line, angle);

- Rotate around point

```hljs js
Copyvar line = Phaser.Geom.Line.RotateAroundPoint(line, point, angle);

```hljs js
Copyvar line = Phaser.Geom.Line.RotateAroundXY(line, x, y, angle);

- Extend

```hljs js
Copyvar line = Phaser.Geom.Line.Extend(line, left, right);

### Get properties

```hljs js
Copyvar x1 = line.x1;
var y1 = line.y1;
var x2 = line.x2;
var y2 = line.y2;
var top = line.top; // min(x1, x2)
var left = line.left; // min(y1, y2)
var right = line.right; // max(x1, x2)
var bottom = line.bottom; // max(y1, y2)

- Start point

```hljs js
Copyvar start = line.getPointA(); // start: {x, y}
var start = line.getPointA(start); // push start

- End point

```hljs js
Copyvar end = line.getPointB(); // end: {x, y}
var end = line.getPointB(end); // push end

- Middle point

```hljs js
Copyvar middle = Phaser.Geom.Line.GetMidPoint(line); // middle: {x, y}
// var middle = Phaser.Geom.Line.GetMidPoint(line, middle);

- Length

```hljs js
Copyvar length = Phaser.Geom.Line.Length(line);

- Width : Abs(x1 - x2)

```hljs js
Copyvar width = Phaser.Geom.Line.Width(line);

- Height : Abs(y1 - y2)

```hljs js
Copyvar width = Phaser.Geom.Line.Height(line);

- Slope
- Slope : (y2 - y1) / (x2 - x1)

```hljs js
Copyvar slope = Phaser.Geom.Line.Slope(line);

- Perpendicular slope : -((x2 - x1) / (y2 - y1))

```hljs js
Copyvar perpSlope = Phaser.Geom.Line.PerpSlope(line);

- Angle
- Angle

```hljs js
Copyvar angle = Phaser.Geom.Line.Angle(line);

```hljs js
Copyvar deg = Phaser.Math.RadToDeg(rad); // deg : -180 ~ 180

- Normal angle (angle - 90 degrees)
- Normal angle

```hljs js
Copyvar normalAngle = Phaser.Geom.Line.NormalAngle(line);

- Normal vector

```hljs js
Copyvar normal = Phaser.Geom.Line.GetNormal(line); // normal: {x, y}
// var normal = Phaser.Geom.Line.GetNormal(line, normal); // push normal

```hljs js
Copyvar normalX = Phaser.Geom.Line.NormalX(line);
var normalY = Phaser.Geom.Line.NormalY(line);

- Reflect angle

```hljs js
Copyvar reflectAngle = Phaser.Geom.Line.ReflectAngle(aimLine, reflectingLine);

```hljs js
Copyvar type = line.type; // GEOM_CONST.LINE or 2

### Point(s) & shape

```hljs js
Copyvar point = line.getPoint(t);
// var point = line.getPoint(t, point);

- Arguments:
- `t` : A value between 0 and 1, where 0 is the start, 0.5 is the middle and 1 is the end point of the line.
- `point` : an existing point or returns a new point if point is not provided
- Get a random point inside shape

```hljs js
Copyvar point = line.getRandomPoint();
// var point = line.getRandomPoint(point); // modify point

```hljs js
Copyvar points = line.getPoints(quantity);
// var points = line.getPoints(quantity, null, pointsArray); // push points

```hljs js
Copyvar points = line.getPoints(false, stepRate);
// var points = line.getPoints(false, stepRate, pointsArray); // If pointsArray not provided a new array will be created.

- `pointsArray` : an existing array
- `stepRate` : distance between each point on the line
- Get points using _Bresenham_'s line algorithm

```hljs js
Copyvar points = Phaser.Geom.Line.BresenhamPoints(line, step);
// var points = Phaser.Geom.Line.BresenhamPoints(line, step, points); // push points

- Get points using easing function

```hljs js
Copyvar points = Phaser.Geom.Line.GetEasedPoints(line, ease, quantity);
// var points = Phaser.Geom.Line.GetEasedPoints(line, ease, quantity, collinearThreshold, easeParams);

- `ease` : String of ease function, or a custom function ( `function (t) { return value}`).
- `quantity` : The number of points to return.
- `collinearThreshold` : Each point is spaced out at least this distance apart. This helps reduce clustering in noisey eases.
- `easeParams` : Array of ease parameters to go with the ease.
- Get the nearest point on a line perpendicular to the given point.

```hljs js
Copyvar point = Phaser.Geom.Line.GetNearestPoint(line, pointIn);
// var point = Phaser.Geom.Line.GetNearestPoint(line, pointIn, point);

- Get the shortest distance from a Line to the given Point.

```hljs js
Copyvar distance = Phaser.Geom.Line.GetShortestDistance(line, point);

### Equal

```hljs js
Copyvar isEqual = Phaser.Geom.Line.Equals(line0, line1);

x1, y2, x2, y2 are equal.

#### Line to circle

#### Line to rectangle

```hljs js
Copyvar result = Phaser.Geom.Intersects.LineToRectangle(line, rect);

```hljs js
Copyvar result = Phaser.Geom.Intersects.GetLineToRectangle(line, rect);
// var out = Phaser.Geom.Intersects.GetLineToRectangle(line, rect, out);

#### Line to triangle

```hljs js
Copyvar result = Phaser.Geom.Intersects.TriangleToLine(triangle, line);

```hljs js
Copyvar result = Phaser.Geom.Intersects.GetTriangleToLine(triangle, line);
// var out = Phaser.Geom.Intersects.GetTriangleToLine(triangle, line, out);

#### Line to line

```hljs js
Copyvar isIntersection = Phaser.Geom.Intersects.LineToLine(line1, line2);

- `isIntersection` : Return `true` if line1 and line2 are intersectioned
- Get intersection point

```hljs js
Copyvar isIntersection = Phaser.Geom.Intersects.LineToLine(line1, line2, out);

- `isIntersection` : Return `true` if line1 and line2 are intersectioned
- `out` : intersected point

## Point

### Create point

```hljs js
Copyvar point = new Phaser.Geom.Point(x, y);

### Clone point

```hljs js
Copyvar point1 = Phaser.Geom.Point.Clone(point0);

### Draw on Graphics object

```hljs js
Copy// graphics.fillStyle(color, alpha); // color: 0xRRGGBB
graphics.fillPointShape(point, size);

### Set properties

```hljs js
Copypoint.setTo(x, y);

```hljs js
CopyPhaser.Geom.Point.CopyFrom(source, dest);

```hljs js
Copypoint.x = 0;
point.y = 0;

- Round
- Ceil : Apply `Math.ceil()` to each coordinate of the given Point

```hljs js
Copyvar point = Phaser.Geom.Point.Ceil(point);

- Floor : Apply `Math.floor()` to each coordinate of the given Point.

```hljs js
Copyvar point = Phaser.Geom.Point.Floor(point);

### Symmetry

- Invert : x = y, y = x

```hljs js
Copyvar point = Phaser.Geom.Point.Invert(point);

- Negative : x = -x, y = -y

```hljs js
Copyvar out = Phaser.Geom.Point.Negative(point);
// var out = Phaser.Geom.Point.Negative(point, out); // modify out

### Get properties

```hljs js
Copyvar x = point.x;
var y = point.y;

```hljs js
Copyvar type = point.type; // GEOM_CONST.POINT or 3

### Equal

```hljs js
Copyvar isEqual = Phaser.Geom.Point.Equals(point0, point1);

x, y are equal.

### Points

- Centroid : center-point over some points

```hljs js
Copyvar out = Phaser.Geom.Point.GetCentroid(points);
// var out = Phaser.Geom.Point.GetCentroid(points, out); // modify out

- Calculates the Axis Aligned Bounding Box (or aabb) from an array of points ( rectangle)

```hljs js
Copyvar rect = Phaser.Geom.Point.GetRectangleFromPoints(points);
// var rect = Phaser.Geom.Point.GetRectangleFromPoints(points, rect); // modify rect

- Interpolate

```hljs js
Copyvar out = Phaser.Geom.Point.Interpolate(pointA, pointB, t); // out : point
// var out = Phaser.Geom.Point.Interpolate(pointA, pointB, t, out); // modify out

### Intersection

- Point to line

```hljs js
Copyvar result = Phaser.Geom.Intersects.PointToLine(point, line);
// var result = Phaser.Geom.Intersects.PointToLine(point, line, lineThickness);

```hljs js
Copyvar result = Phaser.Geom.Intersects.PointToLineSegment(point, line);

### Point as Vector

Vector starting at (0,0)

- Magnitude : sqrt( (x \_ x) + (y \_ y) )

```hljs js
Copyvar magnitude = Phaser.Geom.Point.GetMagnitude(point);

```hljs js
Copyvar magnitudeSq = Phaser.Geom.Point.GetMagnitudeSq(point);

- Project

```hljs js
Copyvar out = Phaser.Geom.Point.Project(from, to);
// var out = Phaser.Geom.Point.Project(from, to, out); // modify out

```hljs js
Copyvar out = Phaser.Geom.Point.ProjectUnit(from, to); // vector `from` and `to` are unit vector (length = 1)
// var out = Phaser.Geom.Point.ProjectUnit(from, to, out); // modify out

## Polygon

### Create polygon

```hljs js
Copyvar polygon = new Phaser.Geom.Polygon(points);

- `points` :
- An array of number : `[x0, y0, x1, y1, ...]`
- An array of points : `[{x:x0, y:y0}, {x:x1, y:y1}, ...]`
- A string : `'x0 y0 x1 y1 ...'`

### Clone polygon

```hljs js
Copyvar polygon1 = Phaser.Geom.Polygon.Clone(polygon0);

### Draw on Graphics object

```hljs js
Copy// graphics.fillStyle(color, alpha); // color: 0xRRGGBB
graphics.fillPoints(polygon.points, true);

```hljs js
Copy// graphics.lineStyle(lineWidth, color, alpha); // color: 0xRRGGBB
graphics.strokePoints(polygon.points, true);

### Set properties

```hljs js
Copypolygon.setTo(points);
// points = [x0, y0, x1, y1, x2, y2, ...] , or [{x,y}, {x,y}, {x,y}, ...]

### Get properties

- Points

```hljs js
Copyvar points = polygon.points; // array of points {x,y}

- Area

```hljs js
Copyvar area = polygon.area;

- Number array

```hljs js
Copyvar out = Phaser.Geom.Polygon.GetNumberArray(polygon);
// var out = Phaser.Geom.Polygon.GetNumberArray(polygon, out); // modify out

- `arr` : \[x0, y0, x1, y1, x2, y2, ...\]
- AABB (A minimum rectangle to cover this polygon)

```hljs js
Copyvar out = Phaser.Geom.Polygon.GetAABB(polygon);
// var out = Phaser.Geom.Polygon.GetAABB(polygon, out);

- `out` : A rectangle
- Type:

```hljs js
Copyvar type = polygon.type; // GEOM_CONST.POLYGON or 4

### Point(s) & shape

- Point is inside shape

```hljs js
Copyvar isInside = polygon.contains(x, y);

```hljs js
Copyvar isInside = Phaser.Geom.Polygon.ContainsPoint(polygon, point);

- Translate : Shift points.

```hljs js
CopyPhaser.Geom.Polygon.Translate(polygon, x, y);

- Reverse the order of points.

```hljs js
Copyvar polygon = Phaser.Geom.Polygon.Reverse(polygon);

- Smooth : Takes a Polygon object and applies Chaikin's smoothing algorithm on its points.

```hljs js
CopyPhaser.Geom.Polygon.Smooth(polygon);

- Simplify : Simplifies the points by running them through a combination of
Douglas-Peucker and Radial Distance algorithms. Simplification dramatically
reduces the number of points in a polygon while retaining its shape, giving
a huge performance boost when processing it and also reducing visual noise.

```hljs js
Copyvar polygon = Phaser.Geom.Polygon.Simplify(polygon);
// var polygon = Phaser.Geom.Polygon.Simplify(polygon, tolerance, highestQuality);

- Get points around the polygon's perimeter.

```hljs js
Copyvar points = polygon.getPoints(quantity);
// var points = polygon.getPoints(quantity, null, pointsArray); // If pointsArray not provided a new array will be created.

```hljs js
Copyvar points = polygon.getPoints(false, stepRate);
// var points = polygon.getPoints(false, stepRate, pointsArray); // If pointsArray not provided a new array will be created.

- `pointsArray` : an existing array
- `stepRate` : sets the quantity by getting the perimeter of the Polygon divided it by the stepRate

### Vector to polygon

- Get closest point of intersection between a vector and an array of polygons

```hljs js
Copyvar result = Phaser.Geom.Intersects.GetLineToPolygon(line, polygons);
// var out = Phaser.Geom.Intersects.GetLineToPolygon(line, polygons, isRay, out);

- `line` : Vector of line object
- `polygons` : A single polygon, or array of polygons
- `isRay` : Is `line` a ray or a line segment?
- `out` :
- `out.x`, `out.y` : Intersection point
- `out.z` : Closest intersection distance
- `out.w` : Index of the polygon
- Projects rays out from the given point to each line segment of the polygons.

```hljs js
Copyvar out = Phaser.Geom.Intersects.GetRaysFromPointToPolygon(x, y, polygons);

- `x`, `y` : The point to project the rays from.
- `polygons` : A single polygon, or array of polygons
- `out` : An array containing all intersections
- `out[i].x`, `out[i].y` : Intersection point
- `out[i].z` : Angle of intersection
- `out[i].w` : Index of the polygon

## Rectangle

### Create rectangle

```hljs js
Copyvar rect = new Phaser.Geom.Rectangle(x, y, width, height);

### Create rectangle from points

All of the given points are on or within its bounds.

```hljs js
Copyvar rect = Phaser.Geom.Rectangle.FromPoints(points);
// var rect = Phaser.Geom.Rectangle.FromPoints(points, rect); // push rect

- `points` : an array with 4 points. `[x, y]`, or `{x:0, y:0}`

```hljs js
Copyvar rect = Phaser.Geom.Rectangle.FromXY(x1, y1, x2, y2);
// var rect = Phaser.Geom.Rectangle.FromXY(x1, y1, x2, y2, rect); // push rect

### Clone rectangle

```hljs js
Copyvar rect1 = Phaser.Geom.Rectangle.Clone(rect0);

### Draw on Graphics object

```hljs js
Copy// graphics.fillStyle(color, alpha); // color: 0xRRGGBB
graphics.fillRectShape(rect);

```hljs js
Copy// graphics.lineStyle(lineWidth, color, alpha); // color: 0xRRGGBB
graphics.strokeRectShape(rect);

`x` with positive/negative width is left/right bound

`y` with positive/negative height is top/bottom bound

### Set properties

```hljs js
Copyrect.setTo(x, y, width, height);

```hljs js
CopyPhaser.Geom.Rectangle.CopyFrom(source, dest);

```hljs js
Copyrect.setPosition(x, y);

```hljs js
Copyrect.x = 0;
rect.y = 0;

```hljs js
Copyrect.left = 0; // rect.x, rect.width
rect.top = 0; // rect.y, rect.height
// rect.right = 0; // rect.x, rect.width
// rect.bottom = 0; // rect.y, rect.height
rect.centerX = 0; // rect.x
rect.centerY = 0; // rect.y

```hljs js
CopyPhaser.Geom.Rectangle.Offset(rect, dx, dy); // rect.x += dx, rect.y += dy

```hljs js
CopyPhaser.Geom.Rectangle.OffsetPoint(rect, point); // rect.x += point.x, rect.y += point.y

```hljs js
CopyPhaser.Geom.Rectangle.CenterOn(rect, x, y); // rect.x = x - (rect.width / 2), rect.y = y - (rect.height / 2)

- Size

```hljs js
Copyrect.setSize(width, height);
// rect.setSize(width); // height = width

```hljs js
Copyrect.width = 0;
rect.height = 0;

- Scale

```hljs js
CopyPhaser.Geom.Rectangle.Scale(rect, x, y); // rect.width *= x, rect.height *= y;
// Phaser.Geom.Rectangle.Scale(rect, x); // y = x

- Extend size to include points

```hljs js
CopyPhaser.Geom.Rectangle.MergePoints(rect, points);

- `points` : an array of points. `[x, y]`, or `{x:0, y:0}`
- Extend size to include another rectangle

```hljs js
CopyPhaser.Geom.Rectangle.MergeRect(target, source);

- Inflate

```hljs js
CopyPhaser.Geom.Rectangle.Inflate(rect, x, y);

1. change size to `width += x*2, height += y*2`
2. center on previous position
- Fits the target rectangle into the source rectangle

```hljs js
CopyPhaser.Geom.Rectangle.FitInside(target, source);

Preserves aspect ratio, scales and centers the target rectangle to the source rectangle

- Fits the target rectangle around the source rectangle

```hljs js
CopyPhaser.Geom.Rectangle.FitOutside(target, source);

- Ceil

```hljs js
CopyPhaser.Geom.Rectangle.Ceil(rect); // ceil x, y

```hljs js
CopyPhaser.Geom.Rectangle.CeilAll(rect); // ceil x, y, width, height

- Floor

```hljs js
CopyPhaser.Geom.Rectangle.Floor(rect); // floor x, y

```hljs js
CopyPhaser.Geom.Rectangle.FloorAll(rect); // floor x, y, width, height

### Get properties

```hljs js
Copyvar x = rect.x;
var y = rect.y;

- Bound

```hljs js
Copyvar top = rect.top;
var left = rect.left;
var right = rect.right;
var bottom = rect.bottom;

```hljs js
Copyvar points = Phaser.Geom.Rectangle.Decompose(rect);
// var points = Phaser.Geom.Rectangle.Decompose(rect, points); // push result points

- `points` : top-left, top-right, bottom-right, bottom-left
- Center

```hljs js
Copyvar centerX = rect.centerX;
var centerY = rect.centerY;

```hljs js
Copyvar point = Phaser.Geom.Rectangle.GetCenter(rect);
// var point = Phaser.Geom.Rectangle.GetCenter(rect, point);

```hljs js
Copyvar width = rect.width;
var height = rect.height;

```hljs js
Copyvar point = Phaser.Geom.Rectangle.GetSize(rect); // {x: rect.width, y: rect.height}

```hljs js
Copyvar area = Phaser.Geom.Rectangle.Area(rect);

- Perimeter

```hljs js
Copyvar perimeter = Phaser.Geom.Rectangle.Perimeter(rect); // 2 * (rect.width + rect.height)

- Aspect ratio

```hljs js
Copyvar aspectRatio = Phaser.Geom.Rectangle.GetAspectRatio(rect); // rect.width / rect.height

- Lines around rectangle

```hljs js
Copyvar topLine = rect.getLineA(); // top line of this rectangle
var rightLine = rect.getLineB(); // right line of this rectangle
var bottomLine = rect.getLineC(); // bottom line of this rectangle
var leftLine = rect.getLineD(); // left line of this rectangle
// var out = rect.getLineA(out); // top line of this rectangle

```hljs js
Copyvar type = rect.type; // GEOM_CONST.RECTANGLE or 5

### Point(s) & shape

```hljs js
Copyvar point = rect.getPoint(t); // t : 0 ~ 1 (0= top-left, 0.5= bottom-right, 1= top-left)
// var point = rect.getPoint(t, point);

- Arguments:
- `t` : A value of 0 or 1 is at the top left corner, 0.5 is at the bottom right corner. Values 0 to 0.5 are on the top or the right side, values 0.5 to 1 are on the bottom or the left side.
- `point` : an existing point or returns a new point if point is not provided

```hljs js
Copyvar point = Phaser.Geom.Rectangle.PerimeterPoint(rect, angle); // angle in degrees
// var point = Phaser.Geom.Rectangle.PerimeterPoint(rect, angle, point); // push point

```hljs js
Copyvar points = rect.getPoints(quantity);
// var points = rect.getPoints(quantity, null, pointsArray); // push points

```hljs js
Copyvar points = rect.getPoints(false, stepRate);
// var points = rect.getPoints(false, stepRate, pointsArray); // If pointsArray not provided a new array will be created.

- `pointsArray` : an existing array
- `stepRate` : if quantity is 0, determines the normalized distance between each returned point
- Point is inside shape

```hljs js
Copyvar isInside = rect.contains(x, y);

```hljs js
Copyvar isInside = Phaser.Geom.Rectangle.ContainsPoint(rect, point);

```hljs js
Copyvar point = rect.getRandomPoint();
// var point = rect.getRandomPoint(point); // modify point

- Get a random point outside shape

```hljs js
Copyvar point = Phaser.Geom.Rectangle.RandomOutside(outer, inner);
// var point = Phaser.Geom.Rectangle.RandomOutside(outer, inner, point); // modify point

```hljs js
Copyvar isInside = Phaser.Geom.Rectangle.ContainsRect(rectA, rectB); // rectB is inside rectA

### Multiple rectangles

- Is overlapping

```hljs js
Copyvar isOverlapping = Phaser.Geom.Rectangle.Overlaps(rectA, rectB);

- Get intersection rectangle

```hljs js
Copyvar rect = Phaser.Geom.Rectangle.Intersection(rectA, rectB);
var rect = Phaser.Geom.Rectangle.Intersection(rectA, rectB, rect); // push rect

- Get union rectangle

```hljs js
Copyvar rect = Phaser.Geom.Rectangle.Union(rectA, rectB);
var rect = Phaser.Geom.Rectangle.Union(rectA, rectB, rect); // push rect

### Empty

```hljs js
Copyrect.setEmpty(); // rect.x = 0, rect.y = 0, rect.width = 0, rect.height = 0

```hljs js
Copyvar isEmpty = rect.isEmpty(); // rect.radius <= 0;

### Equal

- Position, width, and height are the same

```hljs js
Copyvar isEqual = Phaser.Geom.Rectangle.Equals(rect0, rect1);

- Width and height are the same

```hljs js
Copyvar isEqual = Phaser.Geom.Rectangle.SameDimensions(rect0, rect1);

#### Rectangle to circle

#### Rectangle to rectangle

```hljs js
Copyvar result = Phaser.Geom.Intersects.RectangleToRectangle(rectA, rectB);

```hljs js
Copyvar result = Phaser.Geom.Intersects.GetRectangleToRectangle(rectA, rectB);
// var out = Phaser.Geom.Intersects.GetRectangleToRectangle(rectA, rectB, out);

#### Rectangle to triangle

```hljs js
Copyvar result = Phaser.Geom.Intersects.RectangleToTriangle(rect, triangle);

```hljs js
Copyvar result = Phaser.Geom.Intersects.GetRectangleToTriangle(rect, triangle);
// var out = Phaser.Geom.Intersects.GetRectangleToTriangle(rect, triangle, out);

#### Rectangle to line

## Triangle

### Create triangle

```hljs js
Copyvar triangle = new Phaser.Geom.Triangle(x1, y1, x2, y2, x3, y3);

### Clone triangle

```hljs js
Copyvar triangle1 = Phaser.Geom.Triangle.Clone(triangle0);

### Equilateral triangle

```hljs js
Copyvar triangle = Phaser.Geom.Triangle.BuildEquilateral(x1, y1, length);

### Right triangle

```hljs js
Copyvar triangle = Phaser.Geom.Triangle.BuildRight(x1, y1, width, height);

### Polygon to triangles

```hljs js
Copyvar out = Phaser.Geom.Triangle.BuildFromPolygon(data);
// var out = Phaser.Geom.Triangle.BuildFromPolygon(data, holes, scaleX, scaleY);
// out = Phaser.Geom.Triangle.BuildFromPolygon(data, holes, scaleX, scaleY, out);

- `data` : A flat array of vertice coordinates like `[x0,y0, x1,y1, x2,y2, ...]`
- `out` : Array of triangles

### Draw on Graphics object

```hljs js
Copy// graphics.fillStyle(color, alpha); // color: 0xRRGGBB
graphics.fillTriangleShape(triangle);

```hljs js
Copy// graphics.lineStyle(lineWidth, color, alpha); // color: 0xRRGGBB
graphics.strokeTriangleShape(triangle);

### Set properties

```hljs js
Copytriangle.setTo(x1, y1, x2, y2, x3, y3);

```hljs js
CopyPhaser.Geom.Triangle.CopyFrom(source, dest);

```hljs js
Copytriangle.x1 = 0;
triangle.y1 = 0;
triangle.x2 = 0;
triangle.y2 = 0;
triangle.x3 = 0;
triangle.y3 = 0;

```hljs js
Copytriangle.left = 0; // triangle.x1, triangle.x2, triangle.x3
triangle.top = 0; // triangle.y1, triangle.y2, triangle.y3
// triangle.right = 0; // triangle.x1, triangle.x2, triangle.x3
// triangle.bottom = 0; // triangle.y1, triangle.y2, triangle.y3

```hljs js
CopyPhaser.Geom.Triangle.Offset(triangle, dx, dy); // triangle.x += dx, triangle.y += dy

```hljs js
CopyPhaser.Geom.Triangle.CenterOn(triangle, x, y);

- Rotate
- Rotate around center (incenter)

```hljs js
Copyvar triangle = Phaser.Geom.Triangle.Rotate(triangle, angle);

- `angle` : Radian
- Rotate around point

```hljs js
Copyvar triangle = Phaser.Geom.Triangle.RotateAroundPoint(
triangle,
point,
angle
);

- `point` : `{x, y}`
- `angle` : Radian
- Rotate around (x,y)

```hljs js
Copyvar triangle = Phaser.Geom.Triangle.RotateAroundXY(triangle, x, y, angle);

- `angle` : Radian

### Get properties

```hljs js
Copyvar x1 = triangle.x1;
var y1 = triangle.y1;
var x2 = triangle.x2;
var y2 = triangle.y2;
var x3 = triangle.x3;
var y3 = triangle.y3;
var top = triangle.top;
var left = triangle.left;
var right = triangle.right;
var bottom = triangle.bottom;

```hljs js
Copyvar out = Phaser.Geom.Triangle.Decompose(triangle); // out: [{x1,y1}, {x2,y2}, {x3,y3}]
// var out = Phaser.Geom.Triangle.Decompose(triangle, out);

```hljs js
Copyvar perimeter = Phaser.Geom.Triangle.Perimeter(triangle);

```hljs js
Copyvar area = Phaser.Geom.Triangle.Area(triangle);

- Lines around triangle

```hljs js
Copyvar line12 = rect.getLineA(); // line from (x1, y1) to (x2, y2)
var line23 = rect.getLineB(); // line from (x2, y2) to (x3, y3)
var line31 = rect.getLineC(); // line from (x3, y3) to (x1, y1)

- Centroid

```hljs js
Copyvar out = Phaser.Geom.Triangle.Centroid(triangle); // out: {x,y}

- Incenter

```hljs js
Copyvar out = Phaser.Geom.Triangle.InCenter(triangle); // out: {x,y}
// var out = Phaser.Geom.Triangle.InCenter(triangle, out);

- Circumcenter

```hljs js
Copyvar out = Phaser.Geom.Triangle.CircumCenter(triangle); // out: {x,y}
// var out = Phaser.Geom.Triangle.CircumCenter(triangle, out);

- Circumcircle

```hljs js
Copyvar out = Phaser.Geom.Triangle.CircumCircle(triangle); // out: a circle object
// var out = Phaser.Geom.Triangle.CircumCircle(triangle, out);

```hljs js
Copyvar type = triangle.type; // GEOM_CONST.TRIANGLE or 6

### Point(s) & shape

```hljs js
Copyvar point = triangle.getPoint(t);
// var point = triangle.getPoint(t, point);

- Arguments:
- `t` : A value of 0 or 1 is the first point. Values 0 to 1 returns a point along the perimeter of the triangle.
- `point` : an existing point or returns a new point if point is not provided
- Get a random point inside shape

```hljs js
Copyvar point = triangle.getRandomPoint();
// var point = triangle.getRandomPoint(point); // modify point

- Get points around triangle's edge

```hljs js
Copyvar points = triangle.getPoints(quantity);
// var points = triangle.getPoints(quantity, null, points); // push points

```hljs js
Copyvar points = triangle.getPoints(false, stepRate);
// var points = triangle.getPoints(false, stepRate, points); // If pointsArray not provided a new array will be created.

- `pointsArray` : an existing array
- `stepRate` : used only when quantity is falsey and is the distance between two points
- Point is inside shape

```hljs js
Copyvar isInside = triangle.contains(x, y);

```hljs js
Copyvar isInside = Phaser.Geom.Triangle.ContainsPoint(triangle, point);

- Points inside shape

```hljs js
Copyvar out = Phaser.Geom.Triangle.ContainsArray(triangle, points, returnFirst);
// var out = Phaser.Geom.Triangle.ContainsArray(triangle, points, returnFirst, out);

- `out` : Points inside triangle
- `returnFirst` : True to get fist matched point

### Equal

```hljs js
Copyvar isEqual = Phaser.Geom.Triangle.Equals(triangle0, triangle1);

#### Triangle to circle

#### Triangle to rectangle

#### Triangle to triangle

```hljs js
Copyvar result = Phaser.Geom.Intersects.TriangleToTriangle(triangleA, triangleB);

```hljs js
Copyvar result = Phaser.Geom.Intersects.GetTriangleToTriangle(
triangleA,
triangleB
);
// var out = Phaser.Geom.Intersects.GetTriangleToTriangle(triangleA, triangleB, out);

#### Triangle to line

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Video

Input

---

# https://docs.phaser.io/phaser/concepts/time

# Time

Time

Every Scene has an instance of the Clock class. It's responsible for keeping track of the elapsed time, delta time, and other time related values. It also allows you to create Timer Events, which are events that fire after a given amount of time has passed. For example, you can create a Timer Event that fires after 5 seconds, or 10 seconds, or 1 minute. You can also create Timer Events that repeat, such as every 5 seconds, or every 10 seconds.

The Clock that belongs to a Scene is used by all Scene systems, such as tweens and sound. It's also used by Game Objects, such as the Sprite animation system. This means that all of these systems are synchronized to the same clock. You have the ability to 'scale' the time of an individual clock, thus slowing down, or speeding-up the systems running within a single Scene.

## Timer

Execute callback when time-out, built-in object of phaser.

### Start timer

- Looped timer

```hljs js
Copyvar timer = this.time.addEvent({
delay: 500, // ms
callback: callback,
//args: [],
callbackScope: thisArg,
loop: true,
});

- Repeat timer

```hljs js
Copyvar timer = this.time.addEvent({
delay: 500, // ms
callback: callback,
//args: [],
callbackScope: thisArg,
repeat: 4,
});

- Delayed timer

```hljs js
Copyvar timer = this.time.delayedCall(delay, callback, args, scope); // delay in ms

- All properties of timer

```hljs js
Copyvar timer = this.time.addEvent({
delay: 500, // ms
callback: callback,
args: [],
callbackScope: thisArg,
loop: false,
repeat: 0,
startAt: 0,
timeScale: 1,
paused: false,
});

- Reset and reuse timer

```hljs js
Copytimer.reset({
delay: 500, // ms
callback: callback,
args: [],
callbackScope: thisArg,
loop: false,
repeat: 0,
startAt: 0,
timeScale: 1,
paused: false,
});
this.time.addEvent(timer);

### Pause/resume

- Pause timer

```hljs js
Copytimer.paused = true;

- Resume timer

```hljs js
Copytimer.paused = false;

- Is paused

```hljs js
Copyvar isPaused = timer.paused;

### Stop timer

- Stop a running timer

```hljs js
Copytimer.remove();

- Remove from timeline's all internal lists, for timer re-using

```hljs js
Copythis.time.removeEvent(timer);

### Time scale

Scale the timer using a multiplier.

- Set

```hljs js
Copytimer.timeScale = 0.5; // half speed
//timer.timeScale = 2; // double speed

- Get

```hljs js
Copyvar timeScale = timer.timeScale;

### Other properties

- Get elapsed time

```hljs js
Copyvar elapsed = timer.getElapsed(); // ms
var elapsed = timer.getElapsedSeconds(); // sec
// var elapsed = timer.elapsed; // ms

- Get remaining time

```hljs js
Copyvar remaining = timer.getRemaining(); // ms
var remaining = timer.getRemainingSeconds(); // sec
// var remaining = timer.getOverallRemaining(); // ms
// var remaining = timer.getOverallRemainingSeconds(); // sec

- Get repeat count

```hljs js
Copyvar repeat = timer.getRepeatCount();

- Gets the progress of the current iteration

```hljs js
Copyvar progress = timer.getProgress(); // elapsed / delay

- Gets the progress of the timer overall, factoring in repeats.

```hljs js
Copyvar progress = timer.getOverallProgress(); // totalElapsed / totalDuration

- Get delay time

```hljs js
Copyvar delay = timer.delay; // ms

## Timeline

A Timeline is a way to schedule the running of callbacks, events and other actions at specific times in the future. It is a Scene level system meaning each Timeline belongs to its own Scene. You can use multiple Timelines running at the same time in the same scene.

If the Scene is paused, the Timeline will also pause. If the Scene is destroyed, the Timeline will be automatically destroyed. However, you can control the Timeline directly, pausing, resuming and stopping it at any time.

### Create timeline

```hljs js
Copyvar timeline = this.add.timeline([\
{\
// Time condition\
at: 0,\
in:\
from:\
\
// Enable condition\
if(event) {\
// this: target parameter\
return true; // false\
},\
\
set: {\
key: value,\
},\
\
tween: {\
targets: gameObject,\
alpha: 1,\
ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'\
duration: 1000,\
repeat: 0, // -1: infinity\
yoyo: false\
},\
\
run(){\
// this: target parameter\
},\
\
loop() {\
\
},\
\
sound: '',\
\
event: '',\
\
// target: this,\
\
// once: false,\
// stop: false,\
},\
\
// ...\
])

- Time :
- `at` : Absolute delay time after starting in ms.
- `in` : Absolute delay time after current time in ms.
- `from` : Relative delay time after previous event in ms
- Enable :
- `if` : A function. Invoking every tick, run actions when it returns `true`.
- Actions :
- `set` : A key-value object of properties to set on the `target`.

- `tween` : tween config

- `run` : A function which will be called when the Event fires.

```hljs js
Copyfunction() {
// this: target parameter
}

- `loop` : A function which will be called when the Event sequence repeat again.

- `sound` :
- A string : A key from the Sound Manager to play

- A config object for a sound to play when the Event fires.

```hljs js
Copy{
key, config;
}

- `key` : The key of the sound to play
- `config` : config of playing sound
- `event` : String-based event name to emit when the Event fires. The event is emitted from the Timeline instance.

```hljs js
Copytimeline.on(eventName);

- `target` : The scope ( `this` object) with which to invoke the `run`.
- Control
- `once` : If set, the Event will be removed from the Timeline when it fires.
- `stop` : If set, the Timeline will stop and enter a complete state when this Event fires, even if there are other events after it.

The Timeline always starts paused.

### Steps of commands

For each tick, for each command :

1. Test time ( `at`, `in`, `from`)
2. Test enable ( `if`)
3. Run actions ( `set`, `tween`, `run`, `sound`, `event`)
4. Control ( `once`, `stop`)

### Start

```hljs js
Copytimeline.play();

#### Restart

```hljs js
Copytimeline.play(true);

#### Start with repeat

- Repeat infinite

```hljs js
Copytimeline.repeat().play();
// timeline.repeat(true).play();
// timeline.repeat(-1).play();

- Amount of times to repeat

```hljs js
Copytimeline.repeat(amount).play();

- `amount` : A positive number
- No repeat

```hljs js
Copytimeline.repeat(false);

- Current loop counter

```hljs js
Copyvar loopCounter = timeline.iteration;

### Stop

```hljs js
Copytimeline.stop();

### Pause / Resume

```hljs js
Copytimeline.pause();
// timeline.paused = true;

```hljs js
Copytimeline.resume();
// timeline.paused = false;

### Reset

Resets this Timeline ;

### Clear all commands

```hljs js
Copytimeline.clear();

### Events

- On all commands are completed

```hljs js
Copytimeline.on("complete", function () {});

### Other properties

- Timeline is currently playing, not paused or not complete.

```hljs js
Copyvar isPlaying = timeline.isPlaying();

```hljs js
Copyvar isPaused = timeline.paused;

- All commands are complete

```hljs js
Copyvar isCompleted = timeline.complete;

### Destroy

Also remove updating.

```hljs js
Copytimeline.destroy();

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Textures

Tweens

---

# https://docs.phaser.io/phaser/concepts/tweens

# Tweens

Tweens

Tweens are an important part of most games, although it's entirely possible you have never come across the term before. Phaser has a built-in Tween Manager that allows you to create smooth, time-based changes to object properties. For example, you can tween the position of a Sprite from one coordinate to another, over a given duration of time. Or you can tween the alpha value of a Game Object from 1 to 0, making it appear to fade out. The Tween Manager is a Scene-based system, and each Scene has its own instance of it.

Although most often used on Game Objects, tweens can actually adjust any object at all. For example, you can tween the volume of a sound, or the position of a Camera. You can even tween the properties of a JavaScript object, such as an object containing a players score, or health points.

Tweens have a whole raft of features built into them. They can be set to repeat, yoyo, tween multiple objects at once, set multiple properties at once, each with their own custom values, have delays, interpolation, a variety of different smoothing effects and much, much more. They can even be chained together, so that one starts as soon as another finishes. As a result, they are a very powerful system and one that you'll find yourself using a lot in your games.

We will cover tweens in much more depth in a later chapter, but the take-away here is that a 'tween' is when the value of an object is changed over a period of time.

## Basic usage

### Creating a tween

```hljs js
Copyvar tween = scene.tweens.add({
targets: gameObject,
x: 1,
// x: '+=1',
// x: '-=1',
// x: '*=1',
// x: '/=1',
// x: 'random(0.25, 0.75)',
// x: 'int(10, 100)',
// x: [100, 300, 200, 600],
// x: { from: 0, to: 1 },
// x: { start: 0, to: 1 },
// x: { start: value0, from: value1, to: value2 },
// x: {
// getActive: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; },
// getStart: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; },
// getEnd: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; }
// },
ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'
duration: 1000,
repeat: 0, // -1: infinity
yoyo: false,

// interpolation: null,
});

- `key: value2` : Tween to `value2`.
- `key: '+=deltaValue'` : Tween to current value + deltaValue
- Support these expressions : `key: '+=deltaValue'`, `key: '-=deltaValue'`, `key: '*=deltaValue'`, `key: '/=deltaValue'`
- `key: 'random(10, 100)'` : Tween to a random float value.
- `key: 'int(10, 100)'` : Tween to a random int value.
- `key: [100, 300, 200, 600]` : Use `interpolation` to determine the value.
- `key: { from: value1, to: value2 }` : Set the property to `value11` when tween started after delay, then tween to `value2`.
- `value1`, `value2` : A number, string, or callback( `function(target, key, value, targetIndex, totalTargets, tween) { return newValue; }`)
- `key: { start: value0, to: value2 }` : Set the property to `value0` immediately, then tween to `value2`.
- `value1`, `value2` : A number, string, or callback( `function(target, key, value, targetIndex, totalTargets, tween) { return newValue; }`)
- `key: { start: value0, from: value1, to: value2 }` : Set the property to `value0` immediately, then set to `value1` when tween started after delay, then tween to `value2`.
- `value0`, `value1`, `value2` : A number, string, or callback( `function(target, key, value, targetIndex, totalTargets, tween) { return newValue; }`)
- `key: function(target, key, value, targetIndex, totalTargets, tween) { return newValue; }`
- `target` :　The tween target.
- `key` : The target property.
- `value` : The current value of the target property.
- `targetIndex` : The index of the target within the Tween.
- `totalTargets` : The total number of targets in this Tween.
- `tween` : The Tween that invoked this callback.
- `key: { getActive:callback, getStart:callback, getEnd:callback}`
- `callback` : `function(target, key, value, targetIndex, totalTargets, tween) { return newValue; }`

or

```hljs js
Copyvar tween = scene.tweens.add({
targets: gameObject,
paused: false,
callbackScope: tween,

// timming/callback of each state
onStart: function () {},
onStartParams: [],

// initial delay
delay: 0, // function(target, targetKey, value, targetIndex, totalTargets, tween) { },

// tween duration
duration: 1000,
ease: 'Linear',
easeParams: null,

onActive: function () {},
onUpdate: function (tween, target, key, current, previous, param) {},
onUpdateParams: [],

// delay between tween and yoyo
hold: 0,
yoyo: false, // true to tween backward
flipX: false,
flipY: false,
onYoyo: function (tween, target, key, current, previous, param) {},
onYoyoParams: [],

// repeat count (-1: infinite)
repeat: 0,
onRepeat: function (tween, target, key, current, previous, param) {},
onRepeatParams: [],
// delay to next pass
repeatDelay: 0,

// loop count (-1: infinite)
loop: 0,
onLoop: function () {},
onLoopParams: [],
// delay to next loop
loopDelay: 0,

// delay to onComplete callback
completeDelay: 0,
onComplete: function () {},
onCompleteParams: [],
// timming/callback of each state

onStop: function () {},
onPause: function () {},
onResume: function () {},

// properties:
x: '+=600', // start from current value
y: 500,
rotation: ...
angle: ...
alpha: ...
// ...

// or
props: {
x: { value: '+=600', duration: 3000, ease: 'Power2' },
y: { value: '500', duration: 1500, ease: 'Bounce.easeOut' }
},

// or
props: {
x: {
duration: 400,
yoyo: true,
repeat: 8,
ease: 'Sine.easeInOut',
value: {
getActive: function (target, key, value, targetIndex, totalTargets, tween)
{
return value;
},
getStart: function (target, key, value, targetIndex, totalTargets, tween)
{
return value + 30;
},
getEnd: function (target, key, value, targetIndex, totalTargets, tween)
{
destX -= 30;
return destX;
}
}
},
....
},

persist: false,

interpolation: null,
interpolationData: null,

});

- `targets` : The targets the tween is updating.
- `delay` : The time the tween will wait before it first starts
- A number, for all targets
- A callback function, built via stagger builder :
- From `0` to `endValue` :
- `scene.tweens.stagger(endValue)`
- From `startValue` to `endValue` :
- `scene.tweens.stagger([startValue, endValue])`
- From `0` to `endValue`, with specific ease function :
- `scene.tweens.stagger(endValue, {ease: 'cubic.inout'})`
- From `startValue` to `endValue`, with specific ease function :
- `scene.tweens.stagger([startValue, endValue], {ease: 'cubic.inout'})`
- From `0` to `endValue`, with specific start index :
- `scene.tweens.stagger(endValue, {from: 'last'})`
- `scene.tweens.stagger(endValue, {from: 'center'})`
- `scene.tweens.stagger(endValue, {from: index})`
- From `startValue` to `endValue`, , with specific start index :
- `scene.tweens.stagger([startValue, endValue], {from: 'last'})`
- `scene.tweens.stagger([startValue, endValue], {from: 'center'})`
- `scene.tweens.stagger([startValue, endValue], {from: index})`
- From `0` to `endValue`, with specific ease function, with specific start index :
- `scene.tweens.stagger(endValue, {from: 'last', ease: 'cubic.inout'})`
- From `startValue` to `endValue`, with specific ease function , with specific start index :
- `scene.tweens.stagger([startValue, endValue], {from: 'last', ease: 'cubic.inout'})`
- Grid mode. From `0` to `endValue`.
- `scene.tweens.stagger(endValue, {grid: [gridWidth, gridHeight], })`
- `scene.tweens.stagger(endValue, {grid: [gridWidth, gridHeight], from: 'center'})`
- `scene.tweens.stagger(endValue, {grid: [gridWidth, gridHeight], from: 'center', ease: 'cubic.inout'})`
- Grid mode. From `startValue` to `endValue`.
- `scene.tweens.stagger([startValue, endValue], {grid: [gridWidth, gridHeight], })`
- `scene.tweens.stagger([startValue, endValue], {grid: [gridWidth, gridHeight], from: 'center'})`
- `scene.tweens.stagger([startValue, endValue], {grid: [gridWidth, gridHeight], from: 'center', ease: 'cubic.inout'})`
- `duration` : The duration of the tween
- `ease` : The ease function used by the tween
- `easeParams` : The parameters to go with the ease function (if any)
- `hold` : The time the tween will pause before running a yoyo
- `repeat` : The number of times the tween will repeat itself (a value of 1 means the tween will play twice, as it repeated once)
- `repeatDelay` : The time the tween will pause for before starting a repeat. The tween holds in the start state.
- `yoyo` : boolean - Does the tween reverse itself (yoyo) when it reaches the end?
- `flipX` : flip X the GameObject on tween end
- `flipY` : flip Y the GameObject on tween end
- `completeDelay` : The time the tween will wait before the onComplete event is dispatched once it has completed
- `loop` : `-1` for an infinite loop
- `loopDelay`
- `paused` : Does the tween start in a paused state, or playing?
- `props` : The properties being tweened by the tween
- `onActive` : Tween becomes active within the Tween Manager.

```hljs js
Copyfunction(tween, target) { }

- `onStart` : A tween starts.

```hljs js
Copyfunction(tween, targets) { }

- `onUpdate` : Callback which fired when tween task updated

```hljs js
Copyfunction(tween, target, key, current, previous, param) { }

- `onComplete` : Tween completes or is stopped.

- `onYoyo` : A function to call each time the tween yoyos. Called once per property per target.

- `onLoop` : A function to call each time the tween loops.

- `onRepeat` : A function to call each time the tween repeats. Called once per property per target.

- `onStop` : A function to call when the tween is stopped.

- `onPause` : A function to call when the tween is paused.

- `onResume` : A function to call when the tween is resumed after being paused.

- `persist` : Will the Tween be automatically destroyed on completion, or retained for future playback?
- `interpolation` : The interpolation function to use if the `value` given is an array of numbers.
- `'linear'`, `'bezier'`, `'catmull'` (or `'catmullrom'`)

Tween task will not manipulate any property that begins with an **underscore**.

## Easing equations

- `Power0` : Linear
- `Power1` : Quadratic.Out
- `Power2` : Cubic.Out
- `Power3` : Quartic.Out
- `Power4` : Quintic.Out
- `Linear`
- `Quad` : Quadratic.Out
- `Cubic` : Cubic.Out
- `Quart` : Quartic.Out
- `Quint` : Quintic.Out
- `Sine` : Sine.Out
- `Expo` : Expo.Out
- `Circ` : Circular.Out
- `Elastic` : Elastic.Out
- `Back` : Back.Out
- `Bounce` : Bounce.Out
- `Stepped`
- `Quad.easeIn`
- `Cubic.easeIn`
- `Quart.easeIn`
- `Quint.easeIn`
- `Sine.easeIn`
- `Expo.easeIn`
- `Circ.easeIn`
- `Back.easeIn`
- `Bounce.easeIn`
- `Quad.easeOut`
- `Cubic.easeOut`
- `Quart.easeOut`
- `Quint.easeOut`
- `Sine.easeOut`
- `Expo.easeOut`
- `Circ.easeOut`
- `Back.easeOut`
- `Bounce.easeOut`
- `Quad.easeInOut`
- `Cubic.easeInOut`
- `Quart.easeInOut`
- `Quint.easeInOut`
- `Sine.easeInOut`
- `Expo.easeInOut`
- `Circ.easeInOut`
- `Back.easeInOut`
- `Bounce.easeInOut`

Demo

### Pause / Resume task

```hljs js
Copytween.pause();

```hljs js
Copytween.resume();

#### Stop task

```hljs js
Copytween.complete();

```hljs js
Copytween.stop();

Won't invoke `onComplete` callback ( `'complete'` event)

#### Play task

```hljs js
Copytween.play();

#### Restart task

```hljs js
Copytween.restart();

#### Seek

```hljs js
Copytween.seek(amount);
// tween.seek(amount, delta, emit);

- `amount` : The number of milliseconds to seek into the Tween from the beginning.
- `delta` : The size of each step when seeking through the Tween. Default value is `16.6` (1000/60)
- `emit` : While seeking, should the Tween emit any of its events or callbacks? The default is `false`.

#### Remove task

Removes this Tween from the TweenManager

```hljs js
Copytween.remove();

#### Destroy task

Free tween task from memory

```hljs js
Copytween.destroy();

A Tween that has been destroyed cannot ever be played or used again.

#### Get tweens

- Tweens of a target

```hljs js
Copyvar tweens = scene.tweens.getTweensOf(target);
// var tweens = scene.tweens.getTweensOf(target, includePending);

- `tweens` : Array of tweens, or timelines.
- `includePending` : Set `true` to search pending tweens.
- All tweens

```hljs js
Copyvar tweens = scene.tweens.getTweens();

#### Destroy task of a target

```hljs js
Copyscene.tweens.killTweensOf(target);

- `target` : The target to kill the tweens of. Provide an array to use multiple targets.

#### Time-scale

```hljs js
Copytween.setTimeScale(v);
// tween.timeScale = timescale;

```hljs js
Copyvar timeScale = tween.getTimeScale();
// var timeScale = tween.timeScale;

##### Global time-scale

```hljs js
Copyvar timeScale = scene.tweens.timeScale;

```hljs js
Copyscene.tweens.timeScale = timescale;

#### Events

- Tween becomes active within the Tween Manager.

```hljs js
Copytween.on('active', function(tween, targets){

}, scope);

- Tween completes or is stopped.

```hljs js
Copytween.on('complete', function(tween, targets){

- A tween loops, after any loop delay expires.

```hljs js
Copytween.on('loop', function(tween, targets){

- A tween property repeats, after any repeat delay expires.

```hljs js
Copytween.on('repeat', function(tween, key, target){

- A tween starts.

```hljs js
Copytween.on('start', function(tween, targets){

- A tween property updates.

```hljs js
Copytween.on('update', function(tween, key, target, current, previous){

- `tween` : A reference to the Tween instance that emitted the event.
- `key` : The property that was updated, i.e. `x` or `scale`.
- `target` : The target object that was updated. Usually a Game Object, but can be of any type.
- `current` : The current value of the property that was tweened.
- `previous` : The previous value of the property that was tweened, prior to this update.
- A tween property pause.

```hljs js
Copytween.on('pause', function(tween, key, target){

- A tween property resume.

```hljs js
Copytween.on('resume', function(tween, key, target){

- A tween property yoyos.

```hljs js
Copytween.on('yoyo', function(tween, key, target){

- A tween stopped.

```hljs js
Copytween.on('stop', function(tween, targets){

#### Set callbacks

```hljs js
Copytween.setCallback(type, callback, param);

- `type` :
- `'onActive'` : When the Tween is first created it moves to an 'active' state when added to the Tween Manager. 'Active' does not mean 'playing'.
- `'onStart'` : When the Tween starts playing after a delayed or paused state. This will happen at the same time as `onActive` if the tween has no delay and isn't paused.
- `'onLoop'` : When a Tween loops, if it has been set to do so. This happens _after_ the `loopDelay` expires, if set.
- `'onComplete'` : When the Tween finishes playback fully. Never invoked if the Tween is set to repeat infinitely.
- `'onStop'` : Invoked only if the `Tween.stop` method is called.
- `'onPause'` : Invoked only if the `Tween.pause` method is called. Not invoked if the Tween Manager is paused.
- `'onResume'` : Invoked only if the `Tween.resume` method is called. Not invoked if the Tween Manager is resumed.
- `'onYoyo'` : When a TweenData starts a yoyo. This happens _after_ the `hold` delay expires, if set.
- `'onRepeat'` : When a TweenData repeats playback. This happens _after_ the `repeatDelay` expires, if set.
- `'onUpdate'` : When a TweenData updates a property on a source target during playback.
- `callback` :
- `'onRepeat'`, `'onUpdate'`, `'onYoyo'`

```hljs js
Copyfunction(tween, targets, key, current, previous, param) {

}

- `'onActive'`, `'onLoop'`, `'onPause'`, `'onResume'`, `'onComplete'`, `'onStart'`, `'onStop'`,

```hljs js
Copyfunction(tween, targets, param) {

#### State

- Is playing

```hljs js
Copyvar isPlaying = tween.isPlaying();

- Is paused

```hljs js
Copyvar isPaused = tween.isPaused();

- Is actively and not just in a delayed state

```hljs js
Copyvar hasStarted = tween.hasStarted;

#### Custom ease function

```hljs js
Copyvar tween = scene.tweens.add({
targets: gameObject,
// ...
ease: function (t) { // t: 0~1
return value; // value: 0~1
},
// ...
});

#### Has target

```hljs js
Copyvar hasTarget = tween.hasTarget(gameObject);

#### Tween value

- Create tween task

```hljs js
Copyvar tween = scene.tweens.addCounter({
from: 0,
to: 1,
ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'
duration: 1000,
repeat: 0, // -1: infinity
yoyo: false,
onUpdate(tween, targets, key, current, previous, param) {
// var value = current;
// var value = tween.getValue();
}
});

- More config parameters...
- Get value

```hljs js
Copyvar value = tween.getValue();

## Chain

### Create chain

```hljs js
Copyvar chain = scene.tweens.chain({
targets: null,
tweens: [\
{\
// targets: gameObject,\
alpha: 1,\
ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'\
duration: 1000,\
repeat: 0, // -1: infinity\
yoyo: false\
},\
// ...\
],

delay: 0,
completeDelay: 0,
loop: 0, // repeat: 0,
repeatDelay: 0,
paused: false,
persist: true,
// callbackScope: this,
})

- `targets`, or `tweenConfig.targets`
- `tweens` : Array of tween config

### Pause / Resume chain

```hljs js
Copychain.pause();

```hljs js
Copychain.resume();

### Restart chain

```hljs js
Copychain.restart();

### Add tween task

```hljs js
Copychain.add({
targets: gameObject,
alpha: 1,
ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'
duration: 1000,
repeat: 0, // -1: infinity
yoyo: false
})

```hljs js
Copychain.add([tweenConfig0, tweenConfig1, ...]);

### Remove tween task

```hljs js
Copychain.remove(tweenTask);

### Has target

```hljs js
Copyvar hasTarget = chain.hasTarget(gameObject);

## Flow chart

Yes

No

Start

Callback: onStart

delay

Tween forward

Callback: onUpdate

(duration)

hold

Is yoyo

Callback: onYoyo

Tween backword

Callback: onRepeat

repeatDelay

Callback: onLoop

loopDelay

completeDelay

Callback: onComplete

End

## Tween data

- `tween.data` : An array of TweenData objects, each containing a unique property and target being tweened.
- `tween.data[i].key` : The property of the target to tween.
- `tween.data[i].start`, `tween.data[i].end`, `tween.data[i].current` : Ease Value Data.

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Time

Utils

---

# https://docs.phaser.io/phaser/concepts/textures

# Textures

A Guide to Phaser Textures and the Texture Manager

The primary role of the Texture Manager is to create and store instances of the Phaser Texture class. The Texture class contains all of the data that Phaser requires in order to use that texture internally. For example, a Sprite contains a reference to both the Texture and Frame it is using. The underlying texture resides in the global Texture Manager. This means that it's very common for multiple Game Objects to all use the same Texture instance.

A Texture is made up from one or more Frames. You can think of a Frame as being a rectangular area within the Texture. By using Frames you can split a single Texture into lots of different sections. When you tell a Sprite which texture to use, you can also tell it which frame from that texture to use. If you had a texture that contained frames, you could tell a Sprite to use just frame 5 from it.

You may have heard of the term Sprite Sheet or Texture Atlas before. In Phaser, the underlying sprite sheet or atlas would be a single Texture instance that contains as many Frame instances as required to represent the frames in the sheet. The task of the majority of the Texture Manager Parsers is to take image and data files and then create all of the Frames it needs based on that information.

The concept of Frames is also how Phaser handles animations, by 'playing' the Frames in a sequence that you define, at a given frame rate.

There are more advanced types of Texture, such as the Dynamic Texture and the Canvas Texture, which we will cover later. Fundamentally, though, the majority of Phaser Game Objects use a Texture and Frame to render themselves to the screen.

## Textures

**Textures** have a key, a first frame name, a map of frames, one or more source images (canvas, image, or video), and zero or more data source images (normal maps). There are three texture classes, CanvasTexture, DynamicTexture, and Texture.

The maximum texture dimensions depend on the device; you can check `renderer.getMaxTextureSize()`. 2048px for mobile and 4096px for desktop should be safe.

### Default textures

- Default : `'__DEFAULT'`
- Missing : `'__MISSING'`
- 4x4 white : `'__WHITE'`

### Get texture keys in the manager

```hljs js
Copyconst keys = this.textures.getTextureKeys(); // → ['mummy', 'bat', 'torch', …]

### Get a texture from the manager

`textures.get()` **always** returns a texture; it will be the `__MISSING` texture if no such key exists. So you should use `textures.exists()` first.

```hljs js
Copyconst texture = this.textures.exists("mummy")
? this.textures.get("mummy")
: null;

### Generate texture from array

```hljs js
Copyvar config = {
data: data,
// 3x3:
// [ '...',\
// '...',\
// '...' ]
pixelWidth: 1, // pixel width of each data
pixelHeight: 1, // pixel height of each data
preRender: null, // callback, function(canvas, ctx) {}
postRender: null, // callback, function(canvas, ctx) {}

canvas: null, // create a canvas if null
resizeCanvas: true,
clearCanvas: true,
};
var texture = this.textures.generate(key, config);

#### Verify existing texture

```hljs js
Copyvar hasKey = this.textures.exists(key);

### Get base64

```hljs js
Copyvar s = this.textures.getBase64(key); // type= 'image/png', encoderOptions= 0.92
// var s = this.textures.getBase64(key, frame, type, encoderOptions);

### Get pixel color

```hljs js
Copyvar color = this.textures.getPixel(x, y, key);
// var color = this.textures.getPixel(x, y, key, frame);

Properties of `color`

- `r` : 0 ~ 255
- `g` : 0 ~ 255
- `b` : 0 ~ 255
- `a` : 0 ~ 255

```hljs js
Copyvar alpha = this.textures.getPixelAlpha(x, y, key);
// var alpha = this.textures.getPixelAlpha(x, y, key, frame);

alpha : 0 ~ 255

Return `null` if the coordinates were out of bounds.

### Remove texture

Remove texture stored in texture cache.

```hljs js
Copythis.textures.remove(key);

### Loading images for textures

Usually you won't be creating textures directly. Phaser creates textures for you when you load images.

- `load.image()` creates a texture with the single frame `__BASE`.
- `load.spritesheet()` creates a texture with frames named as integers starting from `0`, plus `__BASE`.
- `load.atlas()` or `load.unityAtlas()` creates a texture with frames named in the atlas data, plus `__BASE`.
- `load.multiatlas()` creates the same, with multiple source images

In Phaser terms a "spritesheet" has uniform cells in rows or columns and an "atlas" has frames in any size and position. Phaser can load atlases created by Texture Packer (any "Phaser 3" format) or Unity.

Phaser can use any image format that the browser can display. SVGs are rasterized (by the browser) when a texture is created. Phaser v3.60 supports WebGL compressed textures.

- How to create sprite sheets for Phaser 3 with TexturePacker

#### Usage

- Load image texture

```hljs js
Copythis.load.image(key, url);

- Load image texture via base64 string

```hljs js
Copythis.textures.addBase64(key, data);

- Get image texture

```hljs js
Copyvar texture = this.textures.get(key);
var image = texture.getSourceImage();
// var width = image.width;
// var height = image.height;

- Get image texture from frame object

```hljs js
Copyvar texture = this.textures.get(frameObject);

### Textures from complete images

If you already have a complete image or canvas somehow, you can add it to the Texture Manager directly using methods such as `addImage()`, `addSpriteSheet()`, `addAtlas()`. These methods are very similar to the corresponding load methods, but they take a `sourceImage` argument (the image or canvas) instead of an URL.

You can make a second texture from the same source this way, maybe if you wanted to create a different frame set:

```hljs js
Copythis.textures.addImage(
"mummyCopy",
this.textures.get("mummy").getSourceImage()
);

### Canvas Texture

A Canvas Texture has a canvas with a 2d rendering context as its source. You can use any of the Canvas API on it. You can draw texture frames on it, but not game objects (cf. Dynamic Texture).

You can create a blank canvas texture with `createCanvas()`:

`const texture = this.textures.createCanvas('key', width, height);`

Or use an existing canvas:

`const texture = this.textures.addCanvas('key', canvas);`

Use `drawFrame()` to draw another texture frame onto the Canvas Texture:

`texture.drawFrame('mummy', 1, x, y);`

or `draw()` if you have a source image (unusual):

`texture.draw(sourceImage, x, y);`

If you work on the canvas context directly, refresh the texture when finished:

```hljs js
Copyconst ctx = texture.getContext();

// CanvasTexture has its own `width` and `height`.
// You could also read these from the base frame, as with the Texture class.
const { width, height } = texture;

ctx.fillStyle = "ghostwhite";
ctx.fillRect(0, 0, width, height);

texture.refresh();

`refresh()` is required to update the texture for display in WebGL rendering mode. Don't call `refresh()` after `draw()` or `drawFrame()`; it's already included.

If you need to use `getPixel()` or `getPixels()` after drawing, call `update()` instead of `refresh()`.

#### Usage

- Create canvas texture

```hljs js
Copyvar texture = scene.textures.createCanvas(key, width, height);

- Get canvas element

```hljs js
Copyvar canvas = texture.getCanvas();
var context = texture.getContext();

Canvas api

- Draw frame

```hljs js
Copytexture.drawFrame(key, frame, x, y);
// texture.drawFrame(key, frame, x, y, update);

- `update` : Update the internal ImageData buffer and arrays. Default value is `true`.
- Draw image

```hljs js
Copytexture.draw(x, y, source);
// texture.draw(x, y, source, update);

- `source` : The HTML Image element, or HTML Canvas element to draw to this canvas.
- `update` : Update the internal ImageData buffer and arrays. Default value is `true`.
- Clear

```hljs js
Copytexture.clear();

or

```hljs js
Copytexture.clear(x, y, width, height);
// // texture.clear(x, y, width, height, update);

- `update` : Update the internal ImageData buffer and arrays. Default value is `true`.
- Refresh texture

```hljs js
Copytexture.refresh();

- Color texture
- Get pixel color

```hljs js
Copyvar color = texture.getPixel(x, y);
// var color = texture.getPixel(x, y, color);

```hljs js
Copyvar colors = texture.getPixels(x, y, width, height);

- `colors` : `[{x, y, color, alpha}, ...]`
- Set pixel color

```hljs js
Copytexture.setPixel(x, y, red, green, blue);
// texture.setPixel(x, y, red, green, blue, alpha);

- Image data
- Get image data

```hljs js
Copyvar imageData = texture.getData(x, y, width, height);

- Set image data

```hljs js
Copytexture.putData(imageData, x, y);

- Add frame

```hljs js
Copytexture.add(name, sourceIndex, x, y, width, height);

- `name` : The name of this Frame. The name is unique within the Texture.
- `sourceIndex` : The index of the TextureSource that this Frame is a part of.
- `x` : The x coordinate of the top-left of this Frame.
- `y` : The y coordinate of the top-left of this Frame.
- `width` : The width of this Frame.
- `height` : The height of this Frame.

### Dynamic Texture

A Dynamic Texture is a special texture that allows you to draw textures, frames and most kind of Game Objects directly to it.

#### Usage

- Create dynamic texture

```hljs js
Copyvar texture = scene.textures.addDynamicTexture(key, width, height);

Disable `texture.isSpriteTexture` if this texture is not a base texture for Sprite Game Objects.

```hljs js
Copytexture.setIsSpriteTexture(false);
// texture.isSpriteTexture = false;

- Set size

```hljs js
Copytexture.setSize(width, height);

- Fill color

```hljs js
Copytexture.fill(rgb);
// texture.fill(rgb, alpha, x, y, width, height);

- `rgb` : The number color to fill this Dynamic Texture with.
- `alpha` : The alpha value used by the fill. Default value is `1`.
- `x`, `y`, `width`, `height` : The area of the fill rectangle. Default behavior is filling whole size.
- Clear

```hljs js
Copytexture.clear(x, y, width, height);

- Draw game object

```hljs js
Copytexture.draw(entries);
// texture.draw(entries,x, y);
// texture.draw(entries, x, y, alpha, tint);

- `entries` :
- Any renderable Game Object, such as a Sprite, Text, Graphics or TileSprite.
- Tilemap Layers.
- A Group. The contents of which will be iterated and drawn in turn.
- A Container. The contents of which will be iterated fully, and drawn in turn.
- A Scene Display List. Pass in `Scene.children` to draw the whole list.
- Another Dynamic Texture, or a Render Texture.
- A Texture Frame instance.
- A string. This is used to look-up the texture from the Texture Manager.
- `x`, `y` : The x/y position to draw the Frame at, or the offset applied to the object.
- If the object is a Group, Container or Display List, the coordinates are _added_ to the positions of the children.
- For all other types of object, the coordinates are exact.
- `alpha`, `tint` : Only used by Texture Frames.
- Game Objects use their own alpha and tint values when being drawn.
- Erase

```hljs js
Copytexture.erase(entries);
// texture.erase(entries, x, y);

- `entries` :
- Any renderable Game Object, such as a Sprite, Text, Graphics or TileSprite.
- Tilemap Layers.
- A Group. The contents of which will be iterated and drawn in turn.
- A Container. The contents of which will be iterated fully, and drawn in turn.
- A Scene Display List. Pass in `Scene.children` to draw the whole list.
- Another Dynamic Texture, or a Render Texture.
- A Texture Frame instance.
- A string. This is used to look-up the texture from the Texture Manager.
- `x`, `y` : The x/y position to draw the Frame at, or the offset applied to the object.
- If the object is a Group, Container or Display List, the coordinates are _added_ to the positions of the children.
- For all other types of object, the coordinates are exact.
- Draw frame

```hljs js
Copytexture.stamp(key, frame, x, y, {
alpha: 1,
tint: 0xffffff,
angle: 0,
rotation: 0,
scale: 1,
scaleX: 1,
scaleY: 1,
originX: 0.5,
originY: 0.5,
blendMode: 0,
erase: false,
skipBatch: false,
});

```hljs js
Copytexture.drawFrame(key, frame, x, y);
// texture.drawFrame(key, frame, x, y, alpha, tint);

- `x`, `y` : Top-left position
- Draw repeat frames
- Repeat frames full of size

```hljs js
Copytexture.repeat(key, frame);

- Repeat in an area

```hljs js
Copytexture.repeat(key, frame, x, y, width, height);
// texture.repeat(key, frame, x, y, width, height, alpha, tint, skipBatch);

- `name` : The name of this Frame. The name is unique within the Texture.
- `sourceIndex` : The index of the TextureSource that this Frame is a part of.
- `x` : The x coordinate of the top-left of this Frame.
- `y` : The y coordinate of the top-left of this Frame.
- `width` : The width of this Frame.
- `height` : The height of this Frame.
- Batch draw
1. Begin

```hljs js
Copytexture.beginDraw();

2. Draw
- Draw game object

```hljs js
Copytexture.batchDraw(entries, x, y, alpha, tint);

- `entries` :
- Any renderable Game Object, such as a Sprite, Text, Graphics or TileSprite.
- Tilemap Layers.
- A Group. The contents of which will be iterated and drawn in turn.
- A Container. The contents of which will be iterated fully, and drawn in turn.
- A Scene Display List. Pass in `Scene.children` to draw the whole list.
- Another Dynamic Texture, or a Render Texture.
- A Texture Frame instance.
- A string. This is used to look-up the texture from the Texture Manager.
- Draw frame

```hljs js
Copytexture.batchDrawFrame(key, frame, x, y, alpha, tint);

- Draw image

```hljs js
Copytexture.stamp(key, frame, x, y, {
// ...
skipBatch: true,
});

- Draw repeat images

```hljs js
Copytexture.repeat(key, frame, x, y, width, height, alpha, tint, true);

3. End

```hljs js
Copytexture.endDraw();

- Internal camera

Internal camera `texture.camera`
- Scroll (offset)

```hljs js
Copytexture.camera.setScroll(x, y);

- Zoom (scale)

```hljs js
Copytexture.camera.setZoom(zoom);

- Rotate

```hljs js
Copytexture.camera.setAngle(angle); // angle in degrees

- Snapshot
- Snapshot area

```hljs js
Copytexture.snapshot(callback);
// texture.snapshot(callback, type, encoderOptions);

```hljs js
Copytexture.snapshotArea(x, y, width, height, callback, type, encoderOptions);

- `callback` : The Function to invoke after the snapshot image is created.

```hljs js
Copyfunction(imageElement) {
}

- `imageElement` : HTMLImageElement.
- `type` : The format of the image to create, usually `'image/png'` or `'image/jpeg'`. Default value is `'image/png'`.

- `encoderOptions` : The image quality, between `0` and `1`. Used for image formats with lossy compression, such as `'image/jpeg'`. Default value is `0.92`.

- `x`, `y`, `width`, `height` : Snapshot area.
- Get color of a pixel

```hljs js
Copytexture.snapshotPixel(x, y, callback);

- `x`, `y` : The x/y coordinate of the pixel to get.

```hljs js
Copyfunction(colorObject) {
}

- `colorObject` : Either a Color object if a single pixel is being grabbed, or a new Image which contains a snapshot of the canvas contents.

#### Render Texture

A Render Texture is essentially an Image holding a Dynamic Texture.

### Events

- Texture manager is ready

```hljs js
Copythis.textures.on("ready", function () {});

- Add texture

```hljs js
Copythis.textures.on("addtexture", function (key) {});

```hljs js
Copythis.textures.on("addtexture-" + key, function () {});

- Error when adding texture

```hljs js
Copythis.textures.on("onerror", function (key) {});

- Remove texture

```hljs js
Copythis.textures.on("removetexture", function (key) {});

```hljs js
Copythis.textures.on("removetexture-" + key, function () {});

## Frames

**Frames** are rectangular areas on a texture. Frames have a name, position, several dimensions ( `realWidth` and `realHeight` are most important), and an optional custom pivot point. The docs call frame names "names" (for atlas textures) and "indexes" (for spritesheet textures) but they are all the same thing. All textures have a special frame, named `__BASE`, that represents the entire texture.

Textures are stored in the Texture Manager, `this.textures` in a scene or `game.textures`. Textured game objects hold their current texture and frame in their `texture` and `frame` properties.

There are three built-in textures: `__DEFAULT` (32 × 32 transparent), `__MISSING` (32 × 32 green slashed box), and `__WHITE` (4 × 4 white).

### Get frame names for a texture

```hljs js
Copyconst frameNames = this.textures.get("mummy").getFrameNames(); // → [0, 1, 2, …]

- Example: Get frame names from atlas texture

### Get all texture keys and frame names

```hljs js
Copyfor (const textureKey of this.textures.getTextureKeys()) {
console.info(textureKey, this.textures.get(textureKey).getFrameNames(true));
}

#### Usage

- Get frame from a texture

```hljs js
Copyvar frame = this.textures.getFrame(key, frame);

- Frame properties
- `frame.source.image` : Image of texture source.
- `frame.cutX` : X position within the source image to cut from.
- `frame.cutY` : Y position within the source image to cut from.
- `frame.cutWidth` : The width of the area in the source image to cut.
- `frame.cutHeight` : The height of the area in the source image to cut.
- Examples:

```hljs js
Copyconst mummyFrame1 = this.textures.getFrame("mummy", 1);
// OR
const mummyFrame1 = this.textures.get("mummy").get(1);

A texture itself has no dimensions, technically; for those you want to read from the base frame:

```hljs js
Copyconst { realWidth, realHeight } = this.textures.getFrame("mummy", "__BASE");

##### Set a texture's filter mode

```hljs js
Copy// Nearest-neighbor filter (pixelated)
this.textures.get("mummy").setFilterMode(Phaser.Textures.FilterMode.NEAREST);

// Linear filter (antialiased)
this.textures.get("mummy").setFilterMode(Phaser.Textures.FilterMode.LINEAR);

##### Working from a game object

A game object's `texture` and `frame` hold its current texture and frame, so you can access them there instead of from the texture manager. Just remember that you're working with shared objects.

```hljs js
Copyconst mummy = this.add.sprite(0, 0, "mummy", 1);

console.log(mummy.texture.key); // → 'mummy'
console.log(mummy.frame.name); // → 1

const mummyFrame1 = mummy.texture.get(1);

### Setting custom pivot points (origin)

```hljs js
Copyfor (const frame of Object.values(this.textures.get("sprites").frames)) {
if (frame.name === "__BASE") {
continue;
}

frame.customPivot = true;
frame.pivotX = 0.5;
frame.pivotY = 1;

console.log(frame.texture.key, frame.name, frame.pivotX, frame.pivotY);
}

### Add frames

`texture.add(frameName, sourceIndex, x, y, width, height);`

You can use numeric or string frame names. `sourceIndex` is `0` for single-source textures.

Frames can be cloned but you then have to add the new frame object manually:

```hljs js
Copy// Clone frame 0 of texture "asp".
const aspFrame = this.textures.cloneFrame("asp", 0);

// Add it as frame 0 of the "bat" texture.
const batTexture = this.textures.get("bat");

batTexture.frames[aspFrame.name] = aspFrame;

batTexture.frameTotal += 1;

You can add frames to any texture. Here you can "convert" a single-frame texture into a multi-frame spritesheet texture:

```hljs js
Copythis.load.image("example", "example.png");

const texture = this.textures.get("image");

texture.firstFrame = 0;

texture.add(0 /* … */);
texture.add(1 /* … */);
texture.add(2 /* … */);

});

In practice you usually add frames to create a multi-frame Canvas Texture or Dynamic Texture (see below).

### Add atlas

```hljs js
Copythis.textures.addAtlas(key, HTMLImageElement, data);
// this.textures.addAtlas(key, HTMLImageElement, data, dataSource);

- `key` : The unique string-based key of the Texture.

- `HTMLImageElement` : HTML Image element/s.

- `data` : The Texture Atlas data/s.

```hljs js
Copy{
frames: [\
{\
// Location of frame image\
frame: {\
x, y, w, h\
},\
\
// trimmed\
trimmed:\
sourceSize: {\
w, h\
},\
spriteSourceSize: {\
x, y, w, h\
},\
\
rotated:\
\
// Custom origin\
anchor:\
pivot: {\
x, y\
},\
\
// Other custom properties of this frame ...\
}\
],

// Other custom properties of this texture ...
}

- `dataSource` : An optional data Image element (normal map).

```hljs js
Copythis.textures.addAtlas(undefined, texture, data);
// this.textures.addAtlas(undefined, texture, data, dataSource);

- `texture` : Phaser Texture.

### Add sprite sheet

```hljs js
Copythis.textures.addSpriteSheet(key, HTMLImageElement, config);
// this.textures.addAtlas(key, HTMLImageElement, config, dataSource);

- `config` : The configuration object for this Sprite Sheet.

```hljs js
Copy{
frameWidth: ,
frameHeight: ,
startFrame: 0,
endFrame: -1,
margin: 0,
spacing: 0
}

```hljs js
Copythis.textures.addSpriteSheet(undefined, texture, config);
// this.textures.addSpriteSheet(undefined, texture, config, dataSource);

## Author Credits

Content on this page includes work by:

- RexRainbow
- samme

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Cross Scene Communication

Time

---

# https://docs.phaser.io/phaser/concepts/utils

# Utils

Utils

Phaser's collection of utility functions and helper classes that provide various functionalities designed simplify common tasks.

## Phaser.Utils.Array

Provides a variety of utility methods for working with arrays.

### Adding elements

- Add an item to an array.

```hljs js
CopyAdd(array, item, [limit], [callback], [context]);

- `item` : The item, or array of items, to add to the array. Each item must be unique within the array.
- Optional `limit` : Optional limit which caps the size of the array.
- Optional `callback` : A call
- Optional `context` : The context in which the callback is invoked.

Example

```hljs js
Copylet array = [1, 2, 3];
Phaser.Utils.Array.Add(array, 4); // Adds 4 to the array
console.log(array); // [1, 2, 3, 4]

- Add an item to the array at the specified index.

```hljs js
Copylet array = [1, 2, 3];
Phaser.Utils.Array.AddAt(array, 4, 1); // Inserts 4 at index 1
console.log(array); // [1, 4, 2, 3]

### Removing elements

- Remove the first occurrence of a specified item from an array.

```hljs js
CopyRemove(array, item, [callback], [context]);

- `item` : The item, or array of items, to be removed from the array.
- Optional `callback` : A call
- Optional `context` : The context in which the callback is invoked.

```hljs js
Copylet array = [1, 2, 3, 2];
Phaser.Utils.Array.Remove(array, 2); // Removes the first occurrence of 2
console.log(array); // [1, 3, 2]

- Remove an element at the specified index.

```hljs js
CopyRemoveAt(array, index, [callback], [context]);

- `index` : The array index to remove the item from. The index must be in bounds or it will throw an error.
- Optional `callback` : A call
- Optional `context` : The context in which the callback is invoked.

```hljs js
Copylet array = [1, 2, 3];
Phaser.Utils.Array.RemoveAt(array, 1); // Removes the element at index 1
console.log(array); // [1, 3]

- Removes elements between `startIndex` and `endIndex` (inclusive).

```hljs js
CopyRemoveBetween(array, startIndex, endIndex, [callback], [context]);

- `startIndex` : Includes the start index to removing from.
- `endIndex` : Excludes the end index to remove to.
- `callback` : A call
- `context` : The context in which the callback is invoked.

```hljs js
Copylet array = [1, 2, 3, 4, 5];
Phaser.Utils.Array.RemoveBetween(array, 1, 3); // Removes elements from index 1 to 3
console.log(array); // [1, 4, 5]

- Removes and returns one random element from the array.

```hljs js
CopyRemoveRandomElement(array, [start], [length]);

- `start` : The array index to start the search from. Defaults to 0.
- `length` : Optional restriction on the number of elements to randomly select from. Defaults to array length.

```hljs js
Copylet array = [1, 2, 3];
let randomItem = Phaser.Utils.Array.RemoveRandomElement(array);
console.log(randomItem); // Random item removed (e.g., 2)
console.log(array); // [1, 3]

- Remove one element from the array at the specified index.

```hljs js
CopySpliceOne(array, index);

- `index` : The index of the item which should be spliced.

```hljs js
Copylet array = [1, 2, 3];
Phaser.Utils.Array.SpliceOne(array, 1); // Removes element at index 1
console.log(array); // [1, 3]

### Moving elements

- Moves the specified item to a new index.

```hljs js
CopyMoveTo(array, item, index);

- `item` : The element to move.
- `index` : The new index that the element will be moved to.

```hljs js
Copylet array = [1, 2, 3, 4];
Phaser.Utils.Array.MoveTo(array, 3, 1); // Moves 3 to index 1
console.log(array); // [1, 3, 2, 4]

- Moves the specified item up by one index in the array.

```hljs js
CopyMoveUp(array, item);

- `item` : The element to move up the array.

```hljs js
Copylet array = [1, 2, 3];
Phaser.Utils.Array.MoveUp(array, 2); // Moves 2 up one index
console.log(array); // [1, 3, 2]

- Moves the specified item down by one index in the array.

```hljs js
CopyMoveDown(array, item);

- `item` : The element to move down the array.

```hljs js
Copylet array = [1, 2, 3];
Phaser.Utils.Array.MoveDown(array, 2); // Moves 2 down one index
console.log(array); // [2, 1, 3]

- Move item one position above `baseElement` or one index after `baseElement`. If the given element is already above `baseElement`, it isn't moved.

```hljs js
CopyMoveAbove(array, item, baseElement);

- `item` : The element to move above base element.
- `baseElement` : The base element.

```hljs js
Copylet array = [1, 2, 3, 4];
Phaser.Utils.Array.MoveAbove(array, 1, 3); // Moves 1 above 3
console.log(array); // [2, 3, 4, 1]

- Move item one position below `baseElement` or one index after `baseElement`. If the given element is already above `baseElement`, it isn't moved.

```hljs js
CopyMoveBelow(array, item, baseElement);

- `item` : The element to move below base element.
- `baseElement` : The base element.

```hljs js
Copylet array = [1, 2, 3, 4];
Phaser.Utils.Array.MoveBelow(array, 4, 2); // Moves 4 below 2
console.log(array); // [1, 4, 2, 3]

### Sorting & Shuffling

Functions for sorting and shuffling arrays.

- Shuffles the elements of the array randomly.

```hljs js
CopySortByDigits(array);

```hljs js
Copylet array = [1, 2, 3];
Phaser.Utils.Array.Shuffle(array); // Randomly shuffles the array
console.log(array); // Random order (e.g., [3, 1, 2])

- Sorts an array of strings by the numeric part of the strings, ignoring any non-numeric characters.

```hljs js
Copylet array = ["item20", "item5", "item100", "item1"];
Phaser.Utils.Array.SortByDigits(array);
console.log(array); // ['item1', 'item5', 'item20', 'item100']

- A stable sort that maintains the relative order of equal elements.

```hljs js
CopyStableSort(array, compare);

- `compare` : The comparison function.

```hljs js
Copylet array = [5, 2, 9, 1];

console.log(array); // [1, 2, 5, 9]

- Rearrange an array so that all items in the \[left, k\] range are smaller than all items in \[k, right\]; The k-th element will have the (k - left + 1)th smallest value in \[left, right\].

```hljs js
CopyQuickSelect(array, k, [left], [right], [compare]);

- `k` : The k-th element index.
- `left` : The index of the left part of the range.
- `right` : The index of the right part of the range.
- `compare` : An optional comparison function. Is passed two elements and should return 0, 1 or -1.

```hljs js
Copyvar array = [10, 4, 5, 8, 6, 11, 26];
Phaser.Utils.Array.QuickSelect(array, 2);
console.log(array); // [ 4, 5, 6, 8, 10, 11, 26 ]

### Retrieving Elements

Methods for retrieving elements based on different conditions.

- Returns the first element in the array with optional matching criterias using `property` and `value`. If no matching element is found, it returns `null`.

```hljs js
CopyGetFirst(array, [property], [value], [startIndex], [endIndex]);

- `property` : The property to test on each array element.
- `value` : The value to test the property against. Must pass a strict (===) comparison check.
- `startIndex` : Includes the optional start index to search from. Defaults to 0.
- `endIndex` : Excludes the optional end index to search up to. Defaults to `array` length.

Example 1: Get first item matching a property with a specific value

```hljs js
Copyvar array = [\
{ name: "apple", color: "red" },\
{ name: "banana", color: "yellow" },\
{ name: "grape", color: "purple" },\
{ name: "strawberry", color: "red" },\
{ name: "squash", color: "yellow" },\
{ name: "eggplant", color: "purple" },\
];

var result = Phaser.Utils.Array.GetFirst(array, "color", "yellow");
console.log(result); // Output: { name: 'banana', color: 'yellow' }

Example 2: Get first item matching a property, regardless of value

```hljs js
Copyvar array = [\
{ name: "apple" },\
{ name: "banana", color: "yellow" },\
{ name: "grape", color: "purple" },\
{ name: "strawberry", color: "red" },\
{ name: "squash", color: "yellow" },\
{ name: "eggplant", color: "purple" },\
];

var result = Phaser.Utils.Array.GetFirst(array, "color");
console.log(result); // Output: { name: 'banana', color: 'yellow' }

Example 3: Get first item without specifying a property

var result = Phaser.Utils.Array.GetFirst(array);
console.log(result); // Output: { name: 'apple', color: 'red' }

Example 4: Get first item matching a property and index including `startIndex` and excluding `endIndex`.

var result = Phaser.Utils.Array.GetFirst(array, "color", "purple", 3, 6);
console.log(result); // Output: { name: 'eggplant', color: 'purple' }

- Returns a random element from the array.

```hljs js
CopyGetRandom(array, [startIndex], [length]);

- `startIndex` : An optional start index. Defaults to 0.
- `length` : An optional length, the total number of elements (from the startIndex) to choose from. Defaults to the `array` length.

Example 1: Get a random element

```hljs js
Copylet array = [1, 2, 3, 4, 5];
let randomItem = Phaser.Utils.Array.GetRandom(array);
console.log(randomItem); // Output: 2

Example 2: Get a random element from a subarray

```hljs js
Copylet array = [1, 2, 3, 4, 5];
let randomItem = Phaser.Utils.Array.GetRandom(array, 2, 2); // Consider elements from index 2 to index 3
console.log(randomItem); // Output: 3 or 4

- Finds the closest `value` to the given number in a sorted array.

```hljs js
CopyFindClosestInSorted(value, array, [key]);

- `value` : The value to search for in the array.
- `array` : The array to search, which must be sorted.
- `key` : An optional property key. If specified the array elements property will be checked against value.

Example 1

```hljs js
Copylet array = [1, 3, 7, 10];
let closest = Phaser.Utils.Array.FindClosestInSorted(5, array); // Closest to 5
console.log(closest); // 7

Example 2: Array of objects

```hljs js
Copyvar array = [\
{ id: 1, value: 10 },\
{ id: 2, value: 20 },\
{ id: 3, value: 30 },\
{ id: 4, value: 40 },\
];

var closest = Phaser.Utils.Array.FindClosestInSorted(35, array, "value");
console.log(closest); // Output: { id: 4, value: 40 }

* * *

### Array Creation

Methods for creating arrays

- Flatten a multi-dimensional array into a one-dimensional array.

```hljs js
CopyFlatten(array, [output]);

- `output` : An optinal array to hold the results in.

```hljs js
Copylet array = [\
[1, 2],\
[3, 4],\
];
let flat = Phaser.Utils.Array.Flatten(array);
console.log(flat); // [1, 2, 3, 4]

- Creates an array with numbers from `start` to `end`.

```hljs js
CopyNumberArray(start, end, [prefix], [suffix]);

```hljs js
Copylet array = Phaser.Utils.Array.NumberArray(1, 5);
console.log(array); // [1, 2, 3, 4, 5]

- Creates an array from `start` to `end`, incremented by `step`.

```hljs js
CopyNumberArrayStep([start], [end], [step]);

- `start` : The start of the range.
- `end` : The end of the range.
- `step` : The value to increment or decrement by.

```hljs js
Copylet array = Phaser.Utils.Array.NumberArrayStep(1, 10, 2);
console.log(array); // [1, 3, 5, 7, 9]

- Create an array with a range of values, based on the given arguments and configuration.

```hljs js
CopyRange(a, b, [options]);

- `options` : A range configuration object. Can contain: `repeat`, `random`, `randomB`, `yoyo`, `max`, `qty`.
- `max`: Maximum number of elements to generate. Defaults to 0 (no limit).
- `qty`: Number of times to repeat each element from the combination of `a` and `b`. Defaults to 1.
- `random`: Shuffle the generated array? Defaults to `false`.
- `randomB`: Shuffle `b` before generating the output? Defaults to `false`.
- `repeat`: Number of repetitions combining `a` and `b`. Set to `-1` for infinite repetition. Defaults to 0 (no repetition).
- `yoyo`: Reverse the order of the generated array and concatenate it again? Creates a mirrored output. Defaults to `false`.

Example 1: Basic usage

```hljs js
Copyvar a = [1, 2];
var b = ["A", "B"];
var options = { qty: 1, repeat: 0 };

var result = Phaser.Utils.Array.Range(a, b, options);
console.log(result); // Output: [1A, 1B, 2A, 2B]
/*
Output: [\
{ a: 1, b: 'A' },\
{ a: 1, b: 'B' },\
{ a: 2, b: 'A' },\
{ a: 2, b: 'B' }\
]
*/

Example 2: Repeating and `yoyo` effect

```hljs js
Copyvar a = [1, 2];
var b = ["A", "B"];
var options = { qty: 1, repeat: 1, yoyo: true };

var result = Phaser.Utils.Array.Range(a, b, options);
console.log(result); // Output: [1A, 1B, 2A, 2B, 2B, 2A, 1B, 1A, 1A, 1B, 2A, 2B, 2B, 2A, 1B, 1A]
/*
Output: [\
{ a: 1, b: 'A' }, { a: 1, b: 'B' },\
{ a: 2, b: 'A' }, { a: 2, b: 'B' },\
{ a: 2, b: 'B' }, { a: 2, b: 'A' },\
{ a: 1, b: 'B' }, { a: 1, b: 'A' },\
{ a: 1, b: 'A' }, { a: 1, b: 'B' },\
{ a: 2, b: 'A' }, { a: 2, b: 'B' },\
{ a: 2, b: 'B' }, { a: 2, b: 'A' },\
{ a: 1, b: 'B' }, { a: 1, b: 'A' }\
]
*/

Example 3: Limit the number of generated elements with `max`

```hljs js
Copyvar a = [1, 2];
var b = ["A", "B"];
var options = { qty: 1, repeat: -1, max: 5 };

var result = Phaser.Utils.Array.Range(a, b, options);
console.log(result); // Output: [1A, 1B, 2A, 2B, 1A]

/*
Output: [\
{ a: 1, b: 'A' },\
{ a: 1, b: 'B' },\
{ a: 2, b: 'A' },\
{ a: 2, b: 'B' },\
{ a: 1, b: 'A' }\
]
*/

Example 4: Randomizing the Output

```hljs js
Copyvar a = [1, 2];
var b = ["A", "B"];
var options = { qty: 1, random: true };

var result = Phaser.Utils.Array.Range(a, b, options);
console.log(result); // Output: [2B, 1A, 1B, 2A] (randomized order)
/*
Output: [\
{ a: 2, b: 'B' },\
{ a: 1, b: 'A' },\
{ a: 1, b: 'B' },\
{ a: 2, b: 'A' },\
]
*/

### Array Manipulation

- Moves the specified item to the top of the array.

```hljs js
CopyBringToTop(array, item);

- `item` : The element to move.

```hljs js
Copylet array = [1, 2, 3];
Phaser.Utils.Array.BringToTop(array, 1);
console.log(array); // [2, 3, 1]

- Moves the specified item to the back of the array.

```hljs js
CopySendToBack(array, item);

```hljs js
Copylet array = [1, 2, 3];
Phaser.Utils.Array.SendToBack(array, 3);
console.log(array); // [3, 1, 2]

- Swaps the elements at the given indices.

```hljs js
CopySwap(array, item1, item2);

- `item1` : The first element to swap.
- `item2` : The second element to swap.

```hljs js
Copylet array = [1, 2, 3, 4, 5];
Phaser.Utils.Array.Swap(array, 2, 5);
console.log(array); // [1, 5, 3, 4, 2]

### Bulk Operations

These methods apply to all or most elements of an array.

- Counts how many elements in the array have a property matching the given value.

```hljs js
CopyCountAllMatching(array, property, value, [startIndex], [endIndex]);

- `property` : The property to test on each array element.
- `value` : The value to test the property against. Must pass a strict (===) comparison check.
- `startIndex` : Includes the optional start index to search from. Defaults to 0.
- `endIndex` : Excludes the optional end index. Defaults to `array` length.

```hljs js
Copylet array = [{ score: 10 }, { score: 20 }, { score: 10 }];
let count = Phaser.Utils.Array.CountAllMatching(array, "score", 10);
console.log(count); // 2

Example 2: Limiting search range

```hljs js
Copyvar array = [\
{ name: "apple", color: "red" },\
{ name: "banana", color: "yellow" },\
{ name: "cherry", color: "red" },\
{ name: "grape", color: "purple" },\
];

var result = Phaser.Utils.Array.CountAllMatching(array, "color", "red", 1, 3);
console.log(result); // Output: 1

- Calls a callback for each element in the array.

```hljs js
CopyEach(array, callback, context, [args]);

- `callback` : A call
- `context` : The context in which the callback is invoked.
- `args` : Additional arguments that will be passed to the callback, after the current array item.

```hljs js
Copylet array = [1, 2, 3];

// Output: 1, 2, 3

Example 2: Custom Context

```hljs js
Copyvar array = [1, 2, 3];
var context = { multiplier: 2 };

Phaser.Utils.Array.Each(
array,
function (element) {
console.log(element * this.multiplier);
},
context
);
// Output: 2, 4, 6

Example 3: Passing arguments

```hljs js
Copyvar array = [1, 2, 3];

Phaser.Utils.Array.Each(
array,
function (element, factor) {
console.log(element * factor);
},
null,
5
);
// Output: 5, 10, 15

Example 4: Multiple arguments

```hljs js
Copyvar array = ["apple", "banana"];

Phaser.Utils.Array.Each(
array,
function (element, prefix, suffix) {
console.log(prefix + element + suffix);
},
null,
"Fruit: ",
" is tasty"
);
/* Output:
Fruit: apple is tasty
Fruit: banana is tasty
*/

- Calls a callback for each element within a specified index range.

```hljs js
CopyEachInRange(array, callback, context, startIndex, endIndex, [args]);

- `callback` : A call
- `context` : The context in which the callback is invoked.
- `startIndex` : Includes the start index to search from.
- `endIndex` : Excludes the end index to search to.
- `args` : Optional arguments that will be passed to the callback.

Example 1: Specifying a range

```hljs js
Copyvar array = [1, 2, 3, 4, 5];
Phaser.Utils.Array.EachInRange(
array,
function (element) {
console.log(element);
},
null,
1,
4
);
// Output: 2, 3, 4

Example 2: Custom context

```hljs js
Copyvar array = [1, 2, 3, 4, 5];
var context = { multiplier: 2 };

Phaser.Utils.Array.EachInRange(
array,
function (element) {
console.log(element * this.multiplier);
},
context,
3,
5
);
// Output: 8, 10

Example 3: Specifying a range and passing arguments

```hljs js
Copyvar array = [1, 2, 3, 4, 5];

Phaser.Utils.Array.EachInRange(
array,
function (element, prefix, suffix) {
console.log(prefix + element + suffix);
},
null,
1,
4,
"Element: ",
"!"
);
/* Output:
Element: 2!
Element: 3!
Element: 4!
*/

- Sets the same property value for all elements in the array.

```hljs js
CopySetAll(array, property, value, [startIndex], [endIndex]);

- `property` : The property to test for on each array element.
- `value` : The value to set the property to.
- `startIndex` : Includes the optional start index to search from.
- `endIndex` : Excludes the optional end index to search to.

```hljs js
Copylet array = [{ score: 10 }, { score: 20 }];
Phaser.Utils.Array.SetAll(array, "score", 5);
console.log(array);
/* Output:
[\
{ score: 5 },\
{ score: 5 }\
]
*/

Example 2: Specifying a range

```hljs js
Copylet array = [{ score: 10 }, { score: 20 }, { score: 30 }, { score: 40 }];
Phaser.Utils.Array.SetAll(array, "score", 5, 1, 3);
console.log(array);
/* Output:
[\
{ score: 10 },\
{ score: 5 },\
{ score: 5 },\
{ score: 40 }\
]
*/

- Replaces the first occurrence of `oldItem` with `newItem`.

```hljs js
CopyReplace(array, oldItem, newItem);

- `oldItem` : The element in the array that will be replaced.
- `newItem` : The element to be inserted into the array at the position of oldChild.

```hljs js
Copylet array = [1, 2, 3];
Phaser.Utils.Array.Replace(array, 2, 4);
console.log(array); // [1, 4, 3]

### Rotation

Methods for rotating elements within an array.

- Rotates the elements of the array to the left by the specified count.

```hljs js
CopyRotateLeft(array, [total]);

- `total` : The number of times to shift the array.

```hljs js
Copylet array = [1, 2, 3, 4];
Phaser.Utils.Array.RotateLeft(array, 2);
console.log(array); // [3, 4, 1, 2]

- Rotates the elements of the array to the right by the specified count.

```hljs js
CopyRotateRight(array, [total]);

```hljs js
Copylet array = [1, 2, 3, 4];
Phaser.Utils.Array.RotateRight(array, 1);
console.log(array); // [4, 1, 2, 3]

### Safe Range

- Ensures that the index is within the bounds of the array.

```hljs js
CopySafeRange(array, startIndex, endIndex, [throwError]);

- `startIndex` : The start index.
- `endIndex` : The end index.
- `throwError` : Throws an error if set to `true` and the range is out of bounds.

```hljs js
Copylet array = [1, 2, 3];
let isValid = Phaser.Utils.Array.SafeRange(array, 2);
console.log(isValid); // true

## Phaser.Utils.Base64

Provides utility methods for encoding and decoding Base64, specifically converting between ArrayBuffer and Base64 encoded strings. It is used to work with binary data such as images, audio files, or other media types, enabling the transformation of binary data into Base64 strings for transmission or storage.

### ArrayBufferToBase64

Converts an `arrayBuffer` into a base64 string. The resulting string can optionally be a data uri if the `mediaType` argument is provided.

```hljs js
CopyArrayBufferToBase64(arrayBuffer, [mediaType]);

- `mediaType` : An optional media type, i.e. `audio/ogg` or `image/jpeg`

```hljs js
Copyvar buffer = new Uint8Array([72, 101, 108, 108, 111]).buffer; // "Hello" in binary

// Convert the ArrayBuffer to Base64
var base64String = Phaser.Utils.Base64.ArrayBufferToBase64(buffer);

console.log(base64String); // Output: "SGVsbG8="

### Base64ToArrayBuffer

Converts a `base64` string, either with or without a data uri, into an Array Buffer.

```hljs js
CopyBase64ToArrayBuffer(base64);

```hljs js
Copy// Assume you have a Base64 string (e.g., retrieved from a database or an API)
var base64String = "SGVsbG8="; // Base64 for "Hello"

// Convert the Base64 string

- `object` : The object to be cloned.

```hljs js
Copyvar original = { a: 1, b: [2, 3], c: { d: 4 } };
var copy = Phaser.Utils.Objects.Clone(original);
console.log(copy);
/*
{
a: 1,
b: [2, 3],
c: {
d: 4
}
}

copy.b is a new array, changing values in original.b or copy.b does not affect either array.
copy.c is a reference to the same object as original.c, changes in original.c is automatically reflected in copy.c
*/

### DeepCopy

Creates a deep copy of an object. This method recursively copies all properties, including nested objects, ensuring that the new object is entirely independent of the original.

```hljs js
CopyDeepCopy(source)

- `object` : The object to deep copy.

```hljs js
Copyvar original = {
a: 1,
b: [2, 3, { d: 4 }],
c: { e: 5, f: [6, 7] }
};
var copy = Phaser.Utils.Objects.DeepCopy(original);
console.log(copy);
/*
{
a: 1,
b: [2, 3, { d: 4 }],
c: {
e: 5,
f: [6, 7]
}
}
*/

### Extend

This is a slightly modified version of Used to merge properties from one or more objects into a target object. It can perform both shallow and deep copies, depending on the deep flag.

```hljs js
CopyExtend(object, source1, source2, ...)

- `object` : The object to extend.
- `source1`, `source2`, ... : One or more source objects whose properties will be copied to the target.

Example 1: Shallow copy, the `b` property from `obj1` is completely overwritten by the `b` property from `obj2`.

```hljs js
Copyvar obj1 = { a: 1, b: { c: 2 } };
var obj2 = { b: { d: 3 }, e: 4 };

var result = Phaser.Utils.Objects.Extend({}, obj1, obj2);
console.log(result);
/*
{
a: 1,
b: {
d: 3
},
e: 4
}
*/

Example 2: Deep copy, the `b` properties from both `obj1` and `obj2` are merged, preserving the nested structure.

### GetAdvancedValue

Retrieves a value from an object with advanced selection options.

```hljs js
CopyGetAdvancedValue(source, key, defaultValue)

- `source` : The object from which to get the value.
- `key` : The key of the value to retrieve.
- `defaultValue` : The default value to return if the key does not exist.

```hljs js
Copyvar source = {
a: [1, 2, 3],
b: { randInt: [5, 10] },
c: { randFloat: [0.1, 0.9] },
d: function (key) { return key + " processed"; },
e: 42,
f: null
};

console.log(Phaser.Utils.Objects.GetAdvancedValue(source, 'a', 0)); // Random element from [1, 2, 3]
console.log(Phaser.Utils.Objects.GetAdvancedValue(source, 'b', 0)); // Random integer between 5 and 10
console.log(Phaser.Utils.Objects.GetAdvancedValue(source, 'c', 0)); // Random float between 0.1 and 0.9
console.log(Phaser.Utils.Objects.GetAdvancedValue(source, 'd', 0)); // "d processed"
console.log(Phaser.Utils.Objects.GetAdvancedValue(source, 'e', 0)); // 42
console.log(Phaser.Utils.Objects.GetAdvancedValue(source, 'f', 100)); // 100 (default value as 'f' is null)

### GetFastValue

Finds the key within the top level of the source object, or returns `defaultValue`.

```hljs js
CopyGetFastValue(source, key, defaultValue)

```hljs js
Copyvar obj = { a: 10, b: 20, c: undefined };

console.log(Phaser.Utils.Objects.GetFastValue(obj, 'a', 0)); // Output: 10
console.log(Phaser.Utils.Objects.GetFastValue(obj, 'b', 0)); // Output: 20
console.log(Phaser.Utils.Objects.GetFastValue(obj, 'c', 0)); // Output: 0 (defaultValue because 'c' is undefined)
console.log(Phaser.Utils.Objects.GetFastValue(obj, 'd', 0)); // Output: 0 (defaultValue because 'd' doesn't exist)
console.log(Phaser.Utils.Objects.GetFastValue(null, 'a', 0)); // Output: 0 (defaultValue because source is null)
console.log(Phaser.Utils.Objects.GetFastValue(42, 'a', 0)); // Output: 0 (defaultValue because source is a number)

### GetMinMaxValue

Retrieves a value from an object, constrained by minimum and maximum values.

```hljs js
CopyGetMinMaxValue(source, key, min, max, defaultValue)

- `source` : The object from which to get the value.
- `key` : The key of the value to retrieve.
- `min` : The minimum allowed value.
- `max` : The maximum allowed value.
- `defaultValue` : The default value to return if the key does not exist.

```hljs js
Copyvar source = { speed: 120 };

console.log(Phaser.Utils.Objects.GetMinMaxValue(source, 'speed', 50, 100, 75)); // Output: 100 (clamped to max)
console.log(Phaser.Utils.Objects.GetMinMaxValue(source, 'speed', 50, 150, 75)); // Output: 120 (within range)
console.log(Phaser.Utils.Objects.GetMinMaxValue(source, 'acceleration', 50, 100, 75)); // Output: 75 (uses default value)
console.log(Phaser.Utils.Objects.GetMinMaxValue(source, 'acceleration', 50, 100)); // Output: 50 (default is set to min)

### GetValue

Retrieves a value from an object, falling ); // Output: true (both 'a' and 'b' are present)
console.log(Phaser.Utils.Objects.HasAll(obj, ['a', 'd'])); // Output: false ('d' is missing)
console.log(Phaser.Utils.Objects.HasAll(obj, ['a', 'b', 'c'])); // Output: true (all keys are present)

### HasAny

Checks if an object has any of the specified keys.

```hljs js
CopyHasAny(source, keys)

- `source` : The object to check.
- `keys` : An array of keys to check for.

```hljs js
Copyvar obj = { a: 1, b: 2, c: 3 };

console.log(Phaser.Utils.Objects.HasAny(obj, ['a', 'd'])); // Output: true ('a' is found)
console.log(Phaser.Utils.Objects.HasAny(obj, ['x', 'y'])); // Output: false (none of the keys are found)
console.log(Phaser.Utils.Objects.HasAny(obj, ['b', 'c'])); // Output: true ('b' is found)

### HasValue

Checks if an object has a key with a specific value.

```hljs js
CopyHasValue(source, key)

- `source` : The object to check.
- `key` : The key to check for.

```hljs js
Copyvar obj = { name: 'Alice', age: 25 };

console.log(Phaser.Utils.Objects.HasValue(obj, 'name')); // Output: true (because 'name' is a property of obj)
console.log(Phaser.Utils.Objects.HasValue(obj, 'gender')); // Output: false (because 'gender' is not a property of obj)

### IsPlainObject

Checks if a given value is a plain object (i.e., created using `{}` or `new Object()`).

```hljs js
Copyconsole.log(Phaser.Utils.Objects.IsPlainObject({})); // true (plain object)
console.log(Phaser.Utils.Objects.IsPlainObject(new Object())); // true (plain object)
console.log(Phaser.Utils.Objects.IsPlainObject([])); // false (array, not a plain object)
console.log(Phaser.Utils.Objects.IsPlainObject(document.body)); // false (DOM node, not a plain object)
console.log(Phaser.Utils.Objects.IsPlainObject(window)); // false (window object, not a plain object)
console.log(Phaser.Utils.Objects.IsPlainObject(null)); // false (null, not an object)

- `object` : The value to check.

```hljs js
Copy
var isPlainObject = Phaser.Utils.Objects.IsPlainObject(obj);

### Merge

Creates a new Object using all values from `obj1` and `obj2`. If a value exists in both obj1 and obj2, the value in obj1 is used. This is only a shallow copy. Deeply nested objects are not cloned, so be sure to only use this function on shallow objects.

```hljs js
CopyMerge(obj1, obj2)

- `obj1` : The first object.
- `obj2` : The second object.

```hljs js
Copyvar obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };

var result = Phaser.Utils.Objects.Merge(obj1, obj2);

console.log(result); // Output: { a: 1, b: 2, c: 4 }
console.log(obj1); // Output: { a: 1, b: 2 } (unchanged)
console.log(obj2); // Output: { b: 3, c: 4 } (unchanged)

### MergeRight

Creates a new Object using all values from `obj1`. Then scans `obj2`. If a property is found in `obj2` that also exists in `obj1`, the value from `obj2` is used, otherwise the property is skipped.

```hljs js
CopyMergeRight(obj1, obj2)

- `obj1` : The first object to merge.
- `obj2` : The second object to merge. Keys from this object which also exist in `obj1` will be copied to `obj1`.

```hljs js
Copyvar obj1 = { a: 1, b: 2, c: 3 };
var obj2 = { b: 20, c: 30, d: 40 };

var result = Phaser.Utils.Objects.MergeRight(obj1, obj2);

console.log(result); // Output: { a: 1, b: 20, c: 30 }
console.log(obj1); // Output: { a: 1, b: 2, c: 3 } (unchanged)
console.log(obj2); // Output: { b: 20, c: 30, d: 40 } (unchanged)

### Pick

Returns a new object that only contains the `keys` that were found on the object provided. If no keys are found, an empty object is returned.

```hljs js
CopyPick(source, keys)

- `source` : The object to pick properties from.
- `keys` : An array of properties to retrieve from the provided object.

```hljs js
Copyvar person = { name: 'Alice', age: 30, city: 'New York', occupation: 'Engineer' };
var selectedKeys = ['name', 'city'];

var result = Phaser.Utils.Objects.Pick(person, selectedKeys);

console.log(result); // Output: { name: 'Alice', city: 'New York' }

### SetValue

Sets a value in an object, creating the property path if necessary.

```hljs js
CopySetValue(source, key, value)

- `source` : The object to set the value in.
- `key` : The property path (e.g., `'a.b.c'`).
- `value` : The value to set.

```hljs js
Copyvar obj = {
a: {
b: {
c: 10
}
}
};

// Set a simple property
var results = Phaser.Utils.Objects.SetValue(obj, 'a', 100); // Returns true
console.log(obj); // { a: 100 }

// Set a nested property
var results = Phaser.Utils.Objects.SetValue(obj, 'a.b.c', 20); // Returns true
console.log(obj); // { a: { b: { c: 20 } } }

// Try to set a non-existent nested property
var results = Phaser.Utils.Objects.SetValue(obj, 'a.x.y', 50); // Returns false
console.log(obj); // no change to obj

## Phaser.Utils.String

Contains utility functions for manipulating and formatting strings. It simplifies common string operations such as formatting, padding, and reversing strings.

### Format

Takes a string and replaces instances of markers with values in the given array. The markers take the form of `%1`, `%2`, etc. I.e.: `Format("The %1 is worth %2 gold", [ 'Sword', 500 ])`

```hljs js
CopyFormat(string, values);

- `string` (string): The string containing the replacement markers.
- `values` (object): An array containing values that will replace the markers. If no value exists an empty string is inserted instead.

Example:

```hljs js
Copyvar string = "Player %1 scored %2 points";
var values = ["Alice", 100];
var result = Phaser.Utils.String.Format(string, values);
console.log(result); // result: "Player Alice scored 100 points"

### Pad

Takes the given string and pads it out, to the length required, using the character specified.

```hljs js
CopyPad(str, [len], [pad], [dir])

Parameters:

- `str` : The original string to pad.
- `len` : The target length of the resulting string.
- `pad` : The character(s) to pad the string with.
- `dir` : The direction of padding. Use:
- `1` for right padding,
- `2` for left padding,
- `3` for both sides padding.

```hljs js
Copyvar padLeft = Phaser.Utils.String.Pad("7", 3, "0", 1); // Left Padding (dir = 1): "007"
var padRight = Phaser.Utils.String.Pad("7", 3, "0", 2); // Right Padding (dir = 2 or any other value): "700"
var padBoth = Phaser.Utils.String.Pad("7", 3, "0", 3); // Both Sides Padding (dir = 3): "070"

### RemoveAt

Takes a string and removes the character at the given index.

```hljs js
CopyRemoveAt(string, index)

- `string` : The original string.
- `index` : The zero-based index of the character to remove.

```hljs js
Copyconst result = Phaser.Utils.String.RemoveAt("Phaser", 2); // result: "Phser"

### Reverse

Takes the given string and reverses it, returning the reversed string.

```hljs js
CopyReverse(string)

- `string` : The string to reverse.

```hljs js
Copyconst result = Phaser.Utils.String.Reverse("Phaser"); // result: "resahP"

### UppercaseFirst

Capitalizes the first letter of a string if there is one.

```hljs js
CopyUppercaseFirst(string)

- `string` (string): The string to modify.

```hljs js
Copyconst result = Phaser.Utils.String.UppercaseFirst("phaser"); // result: "Phaser"

### UUID

Creates and returns a random RFC4122 version 4 compliant universally unique identifier (UUID).

The string is in the form: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` where each `x` is replaced with a random hexadecimal digit from 0 to f, and `y` is replaced with a random hexadecimal digit from 8 to b.

```hljs js
CopyUUID()

```hljs js
Copyconst uuid = Phaser.Utils.String.UUID();
// result: "3b42e58f-0d1c-4b2a-b8f7-e123456789ab"

Updated onJuly30, 2025, 3:14 PMUTC

Tweens

---

# https://docs.phaser.io/phaser/concepts/gameobjects

# Game Objects

Phaser Game Objects

All Game Objects in Phaser extend from a base class called `Phaser.GameObjects.GameObject`. On its own, this class can't do much. It cannot render, for example, or be added to the display list. What it does do is provide all of the building blocks and core functionality that Game Objects need.

In this section we will cover the properties and methods that the base Game Object class has. This means, anything you read in this section is also available in every other Game Object within Phaser.

## Scene

A Game Object can only belong to one Scene. A reference to the Scene it belongs to is available in the `scene` property:

```hljs js
Copyconst scene = sprite.scene;

Although it isn't, for internal reasons, you should consider this property as read-only. You cannot change the Scene that a Game Object belongs to once it has been created. The `scene` property is passed in the constructor of the Game Object and is set immediately.

When a Game Object is destroyed, the reference to the Scene is nulled-out. If you get any errors in your code relating to an 'undefined' Scene, then make sure you are not dealing with a destroyed Game Object.

Game Objects have two callbacks that are invoked when they are added to, or removed from, a Scene:

```hljs js
Copyclass MySprite extends Phaser.GameObjects.Sprite
{
constructor (scene, x, y, texture, frame)
{
super(scene, x, y, texture, frame);
}

addedToScene ()
{
super.addedToScene();

// This Game Object has been added to a Scene
}

removedFromScene ()
{
super.removedFromScene();

// This Game Object has been removed from a Scene
}
}

You are free to use these callbacks in your custom Game Objects, in order to set-up any Scene specific data, or to perform any tasks that need to happen when the Game Object is added to, or removed from, a Scene. Be aware that some Game Objects, such as Sprites, use these callbacks, so make sure you always call `super` when overriding them, as in the example above.

Instead of using the callbacks, you can listen for the `ADDED_TO_SCENE` and `REMOVED_FROM_SCENE` events instead:

```hljs js
Copysprite.on(Phaser.GameObjects.Events.ADDED_TO_SCENE, handler);
sprite.on(Phaser.GameObjects.Events.REMOVED_FROM_SCENE, handler);

Both event handlers are sent a reference to the Game Object as the first parameter, and the Scene as the second.

## Creating a game object

Usually, create and add game objects in the scene's `create()` method.

The `add` methods create and add at once:

```hljs js
Copyconst sprite = this.add.sprite(0, 0, 'mummy');

The `make` methods do the same, when given `add: true`:

```hljs js
Copyconst sprite = this.make.sprite({ x: 0, y: 0, key: 'mummy', add: true });
// OR
const sprite = this.make.sprite({ x: 0, y: 0, key: 'mummy' }, true);

Game objects can be instantiated and then added manually:

```hljs js
Copyconst sprite = this.add.existing(new Phaser.GameObjects.Sprite(this, 0, 0, 'mummy'));

Game objects can be created in a disabled or invisible state:

```hljs js
Copyconst sprite = this.add.sprite(0, 0, 'mummy').setActive(false).setVisible(false);

With `add: false`, the `make` methods do not add the new game object to the scene display list:

```hljs js
Copyconst sprite = this.make.sprite({ x: 0, y: 0, key: 'mummy', add: false });
// OR
const sprite = this.make.sprite({ x: 0, y: 0, key: 'mummy' }, false);

These game objects aren't displayed at all.

Game objects instantiated directly are not added to the scene display list or update list:

```hljs js
Copyconst sprite = new Phaser.GameObjects.Sprite(this, 0, 0, 'mummy');

The update list will also update any object with `active: true` and a `preUpdate()` method:

```hljs js
Copythis.sys.updateList.add({
active: true,

});

## Removing a game object

Temporarily remove a game object:

```hljs js
Copysprite.setActive(false).setVisible(false);

Permanently remove a game object:

```hljs js
Copysprite.destroy();

Destroyed game objects can't be reused. You can detect a destroyed game object by `gameObject.scene === undefined`. (It has `active === false` and `visible === false` as well.)

All game objects are destroyed when the scene is stopped, so you don't need to do that yourself.

## Display List

If the Game Object resides on a Display List, which most do, then this is available via the `displayList` property:

```hljs js
Copyconst list = sprite.displayList;

A Game Object can either be on a Display List that belongs to its parent Scene, or it can be on a Layer that belongs to the Scene. This property can also be `null`. As with the `scene` property, you should consider this property as read-only and never change it directly.

The `displayList` property is set when the methods `addToDisplayList` and `removeFromDisplayList` are called. This happens automatically when you create a Game Object via the Game Object Factory, or add or remove it from a Layer.

A Game Object can only exist on one Display List or Layer at any given time, but may move freely between them. If the Game Object is already on another Display List when this method is called, it will first be removed from it, before being added to the new list.

If a Game Object isn't on any Display List, it will not be rendered. If you just wish to temporarly disable it from rendering, consider using the `setVisible` method, instead of adding and removing it.

The act of adding and removing a Game Object will emit the `ADDED_TO_SCENE` and `REMOVED_FROM_SCENE` events respectively.

It's not common to need to call these methods directly, but they are exposed should you require them.

## State and Name

The `state` property is a number or string value that you can use to store the current state of a Game Object. Use this property to track the state of a Game Object during its lifetime. For example, it could change from a state of 'moving', to 'attacking', to 'dead'. The state value should be an integer (ideally mapped to a constant in your game code), or a string. These are recommended to keep it light and simple, with fast comparisons. If you need to store complex data about your Game Object, look at using the Data Component instead.

```hljs js
Copysprite.state = 'ALIVE';

You can also call the chainable `setState` method:

```hljs js
Copysprite.setState('ALIVE');

The `name` property is a string-based name that you can use to identify a Game Object. For example, you could use it to store the type of Game Object, such as `player` or `enemy`.

```hljs js
Copysprite.name = 'player';

You can also call the chainable `setName` method:

```hljs js
Copysprite.setName('player');

Neither of these properties are ever used by Phaser directly. They are made available purely for you to take advantage of to help structure your games.

## Update List and Active

Every Scene has an Update List. This is a special type of list that is responsible for calling the `preUpdate` method on all Game Objects on the list, once per game step. Some Game Objects need this, others don't. For example, a Sprite needs to have its Animation component updated every frame, so it adds itself to the Update List. However, a Text object doesn't have any components that require updating, so it doesn't add itself to the Update List. If you create a customn class, then you can choose if it should be added to the Update List, or not. You can do this by calling its `addToUpdateList` method:

```hljs js
Copysprite.addToUpdateList();

As long as the Game Object has a `preUpdate` method, and doesn't already exist on the Scene Update List, it will be added. You can then use the `preUpdate` method to run any customn logic that your Game Object requires, i.e.:

```hljs js
Copyclass Bullet extends Phaser.GameObjects.Image
{
constructor (scene, x, y)
{
super(scene, x, y, 'bullet');

this.addToUpdateList();
}

preUpdate (time, delta)
{
this.x += 10;

{
this.setActive(false);
this.setVisible(false);
}
}
}

Here we have a custom Game Object called `Bullet`. It extends from `Phaser.GameObjects.Image`, which doesn't use the Update List by itself usually. This is why we call `addToUpdateList` in the constructor. It then uses the `preUpdate` method to move itself across the screen, and if it goes off the edge, it deactivates itself. This means it will no longer be updated by the Update List, and will be skipped in future game steps.

When `preUpdate` is called, it is sent two parameters by the Update List. The first is the current timestamp, as generated by the browser. The second is the delta value, which is derived from the timestamp. This is the difference between the current frame and the previous frame. It is a value expressed in milliseconds and is the amount of time that elapsed between frames. This is what you should use to update your Game Object, rather than relying on `setTimeout` or other methods, because it handles pauses and slowdowns in the browser.

Related to the Update List, the `active` property is a boolean that controls if the Game Object is processed by the Update List, or not. A Game Object that is `active` will have its `preUpdate` method called during the game step, otherwise it will be skipped:

```hljs js
Copysprite.active = false;

You can also set the active state of a Game Object by calling the chainable `setActive` method:

```hljs js
Copysprite.setActive(false);

As mentioned, not all Game Objects are added to the Update List. For example, toggling this property on a basic Image Game Object won't actually change anything, because Images are not updated by the Update List. However, if you have a custom Game Object that is on the Update List, this is how you toggle it being processed, or not, without needing to add and remove it from the list.

## Parent Containers

A Game Object can only have one parent Container. A reference to the Container it belongs to is available in the `parentContainer` property:

```hljs js
Copyconst container = sprite.parentContainer;

You should consider this property as read-only. It is set automatically when you add the Game Object to a Container, and nulled when it is removed, or destroyed.

Related to this is the method `getIndexList`. This will return an array of all the indexes of the Game Objects ancestors, going from its position up to the root of the Display List, via any parent Containers:

```hljs js
Copyconst indexes = sprite.getIndexList();

Internally, this is used by the Input Plugin. But you can call it directly if you need to know the depth of the Game Object within the Display List hierarchy.

## Visibility

Game objects can be made invisible or hidden. An invisible game object will skip rendering, but will still process update logic.

- Get a game object's visibility:

```hljs javascript
Copyvar visible = gameObject.visible; // returns true or false

- Set a game object's visibility:

```hljs javascript
CopygameObject.visible = visible;
gameObject.setVisible(visible);

## Textures

Certain game objects hold a texture and texture frame.

- Create a game object with a texture and frame:

```hljs js
Copyconst gameObject = this.add.sprite(0, 0, key, frame);

- `key` :　The key of the texture to be used, stored in the Texture Manager, or a Texture instance.
- `frame` :　The name or index of the frame within the Texture.
- Get texture:

```hljs javascript
Copyvar texture = gameObject.texture;
var frame = gameObject.frame;

- Get texture key, frame name:

```hljs javascript
Copyvar textureKey = gameObject.texture.key;
var frameName = gameObject.frame.name;

- Example:

```hljs js
Copyconst sprite = this.add.sprite(0, 0, 'mummy', 1);

The `texture` argument ( `'mummy'`) is the key (name) of the texture to load into the sprite when creating it.

Game objects can't be created without a texture. Instead they will receive the "default" texture and frame (32 × 32 transparent):

```hljs js
Copyconst sprite = this.add.sprite(0, 0);
console.log(sprite.texture.key); // → '__DEFAULT'
console.log(sprite.displayWidth, sprite.displayHeight); // → 32, 32

To change texture frames:

- Set frame

```hljs javascript
CopygameObject.setFrame(frame);
// gameObject.setFrame(frame, updateSize, updateOrigin);

- `frame` :　The name or index of the frame within the Texture.
- `updateSize` : Should this call adjust the size of the Game Object?
- `updateOrigin` : Should this call adjust the origin of the Game Object?
- Set frame by frame object

```hljs javascript
CopygameObject.setFrame(frameObject);
// gameObject.setFrame(frameObject, updateSize, updateOrigin);

```hljs js
Copy// Spritesheet-style frame names
sprite.setFrame(2);
sprite.setFrame('2');

// Atlas-style frame names
sprite.setFrame('walkLeft');

To change textures:

- Set texture via key string

```hljs javascript
CopygameObject.setTexture(key);
// gameObject.setTexture(key, frame);
// gameObject.setTexture(key, frame, updateSize, updateOrigin);

sprite.setTexture('bat');
console.log(sprite.texture.key); // → 'bat'

Loading or playing an animation can also change a Sprite's texture:

sprite.play('snakeAttack');
console.log(sprite.texture.key); // → 'snake'

## Position, origin, and size

`x` and `y` are the game object's local position (if within a Container) or local and world position (if not within a Container). `z` and `w` aren't used by Phaser, so you could use them yourself. `z` is not `depth`.

- Get a game object's position:

```hljs javascript
Copyvar x = gameObject.x;
var y = gameObject.y;

- Set a game object's position:

```hljs javascript
CopygameObject.x = 0;
gameObject.y = 0;
gameObject.setPosition(x,y);
gameObject.setX(x);
gameObject.setY(y);

- Setting a random position:

````hljs javascript
CopygameObject.setRandomPosition(x, y, width, height);
// gameObject.setRandomPosition(); // x=0, y=0, width=game.width, height=game.height

`width` and `height` are a game object's intrinsic or unscaled size. For frame-based objects (Image, Sprite), these are the size of the current texture frame and you shouldn't set them. For others (Container, TileSprite), you can set an intrinsic size this way.

- Get a game object's size:

```hljs javascript
Copyvar width = gameObject.width;
var height = gameObject.height;

- Set a game object's size:

```hljs javascript
CopygameObject.setSize(width, height);

or

```hljs javascript
CopygameObject.width = width;
gameObject.height = height;

`originX` and `originY` are the game object's visual origin, in normalized coordinates: (0, 0) is the top-left and (1, 1) is the bottom-right. Rotation and scaling happen from the origin; flipping happens across the center. Most game objects have a default origin of (0.5, 0.5), the center. Render Texture, Text, and Bitmap Text game objects have a default origin of (0, 0), the top-left. Container game objects have a nonconfigurable origin of (0.5, 0.5) for a few special purposes. Blitter and Graphics game objects have a nominal origin of (0, 0), as they're dimensionless.

- Get a game object's origin:

```hljs javascript
Copyvar originX = gameObject.originX;
var originY = gameObject.originY;

- Set a game object's origin:

```hljs javascript
CopygameObject.setOrigin(x, y);
// gameObject.setOrigin(x); // y = x if y is not set

- Set a game object's origin to top-left

```hljs javascript
CopygameObject.setOrigin(0);

- Set a game object's origin to top-center

```hljs javascript
CopygameObject.setOrigin(0.5, 0);

- Set a game object's origin to top-right

```hljs javascript
CopygameObject.setOrigin(1, 0);

- Set a game object's origin to left-center

```hljs javascript
CopygameObject.setOrigin(0, 0.5);

- Set a game object's origin to center

```hljs javascript
CopygameObject.setOrigin(0.5);

- Set a game object's origin to right-center

```hljs javascript
CopygameObject.setOrigin(1, 0.5);

- Set a game object's origin to bottom-left

```hljs javascript
CopygameObject.setOrigin(0, 1);

- Set a game object's origin to bottom-center

```hljs javascript
CopygameObject.setOrigin(0.5, 1);

- Set a game object's origin to bottom-right

```hljs javascript
CopygameObject.setOrigin(1);

`flipX` and `flipY` are the game object's rendering toggle to flip the rendered texture on the horizontal or vertical axis. It does not affect the game object's scale value or physics body.

- Get a game object's flip values:

```hljs javascript
Copyvar flip = gameObject.flipX; // flip: true/false
var flip = gameObject.flipY; // flip: true/false

- Set a game object's flip values:

```hljs javascript
CopygameObject.flipX = flip;
gameObject.flipY = flip;
gameObject.setFlipX(flip);
gameObject.setFlipY(flip);
gameObject.setFlip(flipX, flipY);
gameObject.toggleFlipX();
gameObject.toggleFlipY();
gameObject.resetFlip(); // equal to gameObject.setFlip(false, false);

`displayOriginX` and `displayOriginY` are the game object's origin in unscaled pixel coordinates:

Copy(displayOriginX, displayOriginY) == (width, height) * (originX, originY)

They are unrelated to `displayWidth` and `displayHeight`, since they refer to the intrinsic size.

`displayWidth` and `displayHeight` are the game object's scaled dimensions, in pixel coordinates:

Copy(displayWidth, displayHeight) == (width, height) * (scaleX, scaleY)

- Get a game object's display size:

```hljs javascript
Copyvar displayWidth = gameObject.displayWidth;
var displayHeight = gameObject.displayHeight;

- Set a game object's display size:

```hljs javascript
CopygameObject.setDisplaySize(displayWidth, displayHeight);

```hljs javascript
CopygameObject.displayWidth = displayWidth;
gameObject.displayHeight = displayHeight;

- Get a game object's scale:

```hljs javascript
Copyvar scaleX = gameObject.scaleX;
var scaleY = gameObject.scaleY;

```hljs javascript
Copyvar scale = gameObject.scale; // Returns (scaleX + scaleY)/2

- Set a game object's scale:

```hljs javascript
CopygameObject.setScale(scaleX, scaleY);

```hljs javascript
CopygameObject.scaleX = scaleX;
gameObject.scaleY = scaleY;

```hljs javascript
CopygameObject.scale = scale; // Set scaleX, scaleY to scale

You can get or set a game object's visual size from these. There's no need to set both `displayWidth` and `scaleX` or `displayHeight` and `scaleY`, because both properties are doing the same thing.

Frame-based game objects (Image, Sprite) may change size when switching frames or textures.

When a texture frame has a custom pivot set (usually in the texture atlas), the game object origin is updated automatically when changing frames.

`angle` (degrees, -180 to 180) and `rotation` (radians, -π to π) are the same attribute, in different units. In its initial position, a game object has angle and rotation 0.

- Get a game object's angle:

```hljs javascript
Copyvar angle = gameObject.angle;
var radians = gameObject.rotation; // angle in radians

- Set a game object's angle:

```hljs javascript
CopygameObject.angle = degrees;
gameObject.rotation = radians;
gameObject.setAngle(degrees);
gameObject.setRotation(radians);

## Local position and bounds

For game objects not in Containers, local coordinates are also world coordinates.

The local center is `gameObject.x`, `gameObject.y` for origin (0.5, 0.5) or `gameObject.getCenter()` for any origin.

The local, unrotated, unscaled bounds are given by

```hljs js
Copyconst rect = Phaser.Display.Bounds.GetBounds(gameObject);
// → Rectangle { x, y, width, height, left, top, right, bottom … }

This is a rectangle with dimensions identical to the game object's `width` and `height`, positioned by its origin.

You can get the edge coordinates separately:

```hljs js
Copyconst left = Phaser.Display.Bounds.GetLeft(gameObject);

And you can set them:

```hljs js
CopyPhaser.Display.Bounds.SetLeft(gameObject, 0);

You can calculate the local, unrotated, scaled bounds yourself:

```hljs js
Copyconst left = gameObject.x - gameObject.originX * gameObject.displayWidth;
const top = gameObject.y - gameObject.originY * gameObject.displayHeight;

The local, rotated, scaled coordinates of the four corners and four edge midpoints are given by `getTopLeft()`, `getLeftCenter()`, etc.

The `getLocalPoint()` method converts world coordinates into a game object's **own** coordinate space (including transforms). For an image, these are also texture coordinates. For a shape, these may be similar to the geometry coordinates. For a container, these are the child object's local coordinates.

```hljs javascript
Copyvar point = gameObject.getLocalPoint(x, y); // point : {x, y}
// var out = gameObject.getLocalPoint(x, y, out);

```hljs javascript
Copyvar out = gameObject.getLocalPoint(x, y, out, camera);

## World position and bounds

These are for game objects in Containers. (For game objects not in Containers, world coordinates are also local coordinates.)

The game object's position in world coordinates is

```hljs js
Copyconst { tx, ty } = gameObject.getWorldTransformMatrix();

The bounds in world coordinates are

```hljs js
Copyconst bounds = gameObject.getBounds();
// → Rectangle { x, y, width, height, left, top, right, bottom, centerX, centerY, … }

This is the smallest axis-aligned rectangle containing the rotated, scaled corners of the game object.

The transformed corners in world coordinates are:

```hljs js
Copyconst { x, y } = gameObject.getTopLeft(undefined, true);
const { x, y } = gameObject.getTopCenter(undefined, true);
const { x, y } = gameObject.getTopRight(undefined, true);
const { x, y } = gameObject.getLeftCenter(undefined, true);
const { x, y } = gameObject.getRightCenter(undefined, true);
const { x, y } = gameObject.getBottomLeft(undefined, true);
const { x, y } = gameObject.getBottomCenter(undefined, true);
const { x, y } = gameObject.getBottomRight(undefined, true);

And the center in world coordinates is

```hljs js
Copyconst { x, y } = gameObject.prepareBoundsOutput(gameObject.getCenter(), true);

or (Phaser v3.60)

```hljs js
Copyconst { x, y } = gameObject.getCenter(undefined, true);

## Geometry

You can convert most game objects to a Geom point, circle, or rectangle for some calculations, such as intersection checks.

## Crop

Crop clips the visible area of a game object's texture frame.

- Applying a crop to a texture

```hljs javascript
CopygameObject.setCrop(x, y, width, height);

- Resetting crop

```hljs javascript
CopygameObject.setCrop();
// gameObject.isCropped = false;

```hljs js
Copyimage.setCrop(0, 0, 64, 32);

The values are in texture coordinates, where (0, 0) is the top-left of the texture.

Cropping doesn't change the game object's actual bounds or its input hit area.

## Input

Use `setInteractive()` to let a game object receive input events. Any game object can be made interactive, but only some have an automatic hit area. For the others you need to provide a hit area and hit test function.

- Basic usage:

```hljs javascript
CopygameObject.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
// ...
});

For game objects with a texture frame ( `frame`) or a nonzero `width` and `height`, `setInteractive()` with no arguments creates a rectangular hit area of the same size:

```hljs js
Copyconst sprite = this.add.sprite(0, 0, 'mummy').setInteractive();

console.log(sprite.input.hitArea); // → Rectangle { x: 0, y: 0, width: 32, height: 48 }

`hitArea` is in local coordinates, where (0, 0) is the top-left of the game object, regardless of origin.

You can construct the same hit area manually. You must pass a hit area **and** hit test function:

```hljs js
Copysprite.setInteractive(
new Phaser.Geom.Rectangle(0, 0, sprite.frame.realWidth, sprite.frame.realHeight),
Phaser.Geom.Rectangle.Contains
);

You can use any geometry shape, with the corresponding `Contains` function:

```hljs js
Copysprite.setInteractive(
new Phaser.Geom.Circle(sprite.displayOriginX, sprite.displayOriginY, sprite.width),
Phaser.Geom.Circle.Contains
);

You can use your own hit area and test function:

```hljs js
Copysprite.setInteractive({
hitArea: [\
new Phaser.Geom.Circle(0, 0, 32),\
new Phaser.Geom.Circle(64, 64, 32),\
new Phaser.Geom.Circle(128, 128, 32)\
],

return hitArea[0].contains(x, y) ||
hitArea[1].contains(x, y) ||
hitArea[2].contains(x, y);
}
});

## Alpha

Game objects with `alpha === 0` are invisible.

In WebGL mode the four corners of a texture can have different alpha values.

- Get a game object's alpha:

```hljs javascript
Copyvar alpha = gameObject.alpha; // 0~1

- Set a game object's alpha:

```hljs javascript
CopygameObject.setAlpha(alpha);
// gameObject.alpha = alpha;

or in WebGL mode:

```hljs javascript
CopygameObject.setAlpha(topLeft, topRight, bottomLeft, bottomRight);
// gameObject.alphaTopLeft = alpha;
// gameObject.alphaTopRight = alpha;
// gameObject.alphaBottomLeft = alpha;
// gameObject.alphaBottomRight = alpha;

- Clear (set to `1`)

```hljs javascript
CopygameObject.clearAlpha();

## Tint

**Tint** is a dye-like color effect on a game object's texture. It's WebGL only.

- Get a game object's tint:

```hljs javascript
Copyvar color = gameObject.tintTopLeft; // color: 0xRRGGBB
var color = gameObject.tintTopRight;
var color = gameObject.tintBottomLeft;
var color = gameObject.tintBottomRight;
var isTinted = gameObject.isTinted; // is the game object tinted?

Mathematically, tint multiplies each texture pixel by the tint color, so a tinted pixel is never brighter than an untinted one. White tint (0xffffff) has no effect and black tint (0x000000) makes all pixels black. In the texture, white pixels tint completely and black pixels not at all. So white images are good for tintable shapes or bitmap text.

**Tint fill** is an opaque fill, like a paint bucket fill:

```hljs js
Copysprite.setTintFill(0x01ff70);

`clearTint()` removes both kinds of tint.

The four corners of a game object's texture can be tinted separately, forming gradients:

```hljs js
Copysprite.setTint(0xff4136, 0xffdc00, 0x2ecc40, 0x0074d9);
// OR
sprite.tintTopLeft = 0xff4136; // etc.

`gameObject.tint` is a write-only property

## Depth and render order

Game objects are rendered by their position in the display list, start to end (or ; // keys: an array of keys
var value = gameObject.data.values[key];

Example:

```hljs js
Copymummy.getData('health'); // → 3

- Set a game object's data (automatically enables the Data Manager):

```hljs javascript
CopygameObject.setData(key, value);
gameObject.incData(key, value); // increments existing value or if the key doesn't exist, increases the value from 0
gameObject.setData(obj); // obj: {key0:value0, key1:value1, ...}
gameObject.data.values[key] = value;
gameObject.data.values[key] += inc;
gameObject.toggleData(key); // toggles a boolean value for the given key or if the key doesn't exist, toggles the value from false

```hljs js
Copymummy.setData('isAlive', true);
mummy.setData('health', 3);
mummy.incData('health', 3); // increments existing value (health += 3) or if the key doesn't exist, increases the value from 0

let obj = { health: 3 };
mummy.setData(obj);
mummy.data.values['health'] = 3;
mummy.data.values['health'] += 3;

mummy.toggleData('isAlive');

The data store emits events (from the game object itself) when values are added or changed. Be sure the data manager is enabled before binding any data-changed events.

- Set data evants

```hljs javascript
CopygameObject.on('setdata', function(gameObject, key, value){ /* ... */ });

- Change data events

```hljs javascript
CopygameObject.on('changedata', function(gameObject, key, value, previousValue){ /* ... */ });

```hljs javascript
CopygameObject.on('changedata-' + key, function(gameObject, value, previousValue){ /* ... */ });

```hljs js

You can store other objects like game objects, timer events, or tweens. The data store is cleared when the parent game object is destroyed, so there's no problem with cleanup.

```hljs js
Copyconst cat = this.add.sprite(/*…*/);

mummy.setData('familiar', cat);
// …
mummy.destroy();

## Name

You can use the `name` field to identify your game objects, either for game logic or debugging. Phaser doesn't use this field.

- Get a game object's name:

```hljs javascript
Copyvar name = gameObject.name;

- Set a game object's name:

```hljs javascript
CopygameObject.setName(name);
gameObject.name = name;

```hljs js
Copythis.add.sprite(0, 0, 'bat').setName('bat1');

mummy.setName('Reginald');

## Type

E.g., "TileSprite". Phaser uses this so you should leave it alone.

## Events

Game objects emit events directly.

Each game object emits ADDED\_TO\_SCENE, REMOVED\_FROM\_SCENE, and DESTROY. `ADDED_TO_SCENE` and `REMOVED_FROM_SCENE` are fired when adding to or removing from any display list, e.g., containers. Only `DESTROY` happens only once.

Animatable game objects (e.g. Sprite) also emit animation events.

Interactive game objects also emit interaction events.

Video game objects also emit playback events.

Game objects with a data store also emit data events.

## Creation patterns

The `make` methods are flexible and work well with structured data, like JSON.

Groups provide `create()` and `createMultiple()` methods.

There are simple ways to organize game object creation without extending classes:

```hljs js
Copyfunction create() {
const mummy = createMummy.call(this, 0, 0);
}

function createMummy(x, y) {
return this.add.mummy(x, y, 'mummy');
}

If you don't like `call()`:

```hljs js
Copyfunction create() {
const mummy = createMummy(this, 0, 0);
}

function createMummy(scene, x, y) {
return scene.add.mummy(x, y, 'mummy');
}

You can add creator and factory methods without extending classes:

```hljs js
Copyfunction create() {
const mummy = this.add.mummy(0, 0);
}

Phaser.GameObjects.GameObjectFactory.register('mummy', function (x, y) {
return this.sprite(x, y, 'mummy');
}

## Extending game objects

Most beginners shouldn't extend game object classes yet.

Choose a class to extend and call `super()` with all required arguments. Don't extend Phaser.GameObjects.GameObject by itself.

```hljs js
Copyclass MummySprite extends Phaser.GameObjects.Sprite {
constructor(scene, x, y, texture = 'mummy', frame = 0) {
super(scene, x, y, texture, frame);
// this.scene, this.x, this.y, this.texture, this.frame are set.
}
}

Phaser game object classes don't **add** themselves to the scene, so `super()` will not do that.

Add the game object separately, in the scene:

```hljs js
Copythis.add.existing(new MummySprite(this, 0, 0));

or add it from the class:

```hljs js
Copythis.scene.add.existing(this);

If you override the class's `preUpdate()` method, call the superclass method as well with the same arguments. Otherwise the game object may freeze.

```hljs js
Copyclass MummySprite extends Phaser.GameObjects.Sprite {
// …
preUpdate (time, delta) {
super.preUpdate(time, delta);
// …
}
}

If you override the class's `destroy()` method, call the superclass method also. Or consider using the DESTROY event instead.

A game object's `update()` method isn't called automatically. You can

- call the `update()` method yourself; or
- add the game object to a group with `runChildUpdate = true`; or
- bind the `update()` method to the scene's UPDATE event (the arguments match):

```hljs js
Copyclass MummySprite extends Phaser.GameObjects.Sprite {
constructor () {
// …
const { events } = this.scene;

events.on('update', this.update, this);

this.once('destroy', function () {
events.off('update', this.update, this);
}, this);
}

update (time, delta) {
// …
}
}

## Custom game object classes

- Creating a pure entity class holding a game object:

```hljs js
Copyclass Mummy {
constructor (scene, x, y) {
this.sprite = scene.add.sprite(x, y, 'mummy');

// You may need to reach the parent object from the sprite, e.g., from within a callback.
this.sprite.setData('parent', this);

this.sprite.once('destroy', this.onSpriteDestroyed, this);
}

onSpriteDestroyed (sprite) {
this.sprite = null;
}
}

- Creating a custom game object class:

```hljs javascript
Copyclass MyClass extends BaseClass {
constructor(scene, x, y) {
super(scene, x, y);
// ...
scene.add.existing(this);
}
// ...

// preUpdate(time, delta) {
// if (super.preUpdate) {
// super.preUpdate(time, delta);
// }
// }

// destroy(fromScene) {
// // This Game Object has already been destroyed
// if (!this.scene) {
// return;
// }
// super.destroy(fromScene);
// }
}

- `scene.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Some kinds of game object like Sprite, Dom-element has `preUpdate` method already.
- Creating a custom class instance:

```hljs javascript
Copyvar image = new MyClass(scene, x, y, key);

## Common Problems

### I added a game object but I can't see it

The game developer's lament.

- it's outside the camera viewport
- it's behind another game object
- it has the "default" (blank) texture
- it's not on the display list
- it has `visible === false`
- it has `alpha === 0`
- it has scale 0
- it's masked
- it was already destroyed

## Author Credits

Content on this page includes work by:

- RexRainbow
- samme

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Game

Game Object Components

---

# https://docs.phaser.io/phaser/concepts/physics/arcade

# Arcade Physics

A Guide to the Phaser Arcade Physics for simple, fast physics simulations

Arcade Physics is, as its name implies, meant for more 'arcade' or 'retro' style games, although is not limited just to those. It's a lightweight physics system that can only handle two different types of physics shapes: rectangles and circles. It's not meant for complex physics simulations, but rather for simple things like platformers, top-down games, or puzzle games. It's very fast and easy to use, with lots of helper functions, but due to its nature it does have its limitations.

Arcade Physics must be enabled before it can be used. This can be done via the Game Configuration or on a per-Scene basis. Once enabled, you can then add physics-enabled Game Objects to your game. This will allow you to control the Sprite using the built-in physics functions, such as velocity, acceleration, gravity, etc.

By default a Game Object is not enabled for physics. This is because not all Game Objects need to be. For example, a background image or game logo likely doesn't need to be affected by physics, but a player character does. Therefore, you must enable physics on the Game Objects that you specifically want to be affected by it. We will cover this in detail in later chapters.

Arcade Physics and Matter Physics are two separate systems. An Arcade Physics sprite, for example, cannot collide with a Matter Physics sprite. You cannot add the same Sprite to both systems, you need to pick one or the other. However, although it's unusual to do so, both systems can actually run in parallel in the same Scene. This means that you can have a Sprite that uses Arcade Physics and another that uses Matter Physics, and they will both work at the same time, although they will not interact together.

## Arcade World

The Arcade Physics World is the environment where all physics-based interactions occur within the Arcade Physics system. It manages the simulation of object movement, collisions, and responses to various forces. The Arcade Physics World tracks all the objects within it (referred to as "bodies"), handles their physical interactions, and updates their positions and velocities over time.

### Configuration

The Arcade Physics `config` object defines the behavior of the Arcade Physics system globally.

- Basic configuration object

```hljs js
Copyconst config = {
// ...
physics: {
default: 'arcade'
},
// ...
};

const game = new Phaser.Game(config);

- Full configuration

```hljs js
Copyconst config = {
// ...
physics: {
default: "arcade",
arcade: {
// x: 0,
// y: 0,
// width: scene.sys.scale.width,
// height: scene.sys.scale.height,
// gravity: {
// x: 0,
// y: 0
// },
// checkCollision: {
// up: true,
// down: true,
// left: true,
// right: true
// },
// customUpdate: false,
// fixedStep: true,
// fps: 60,
// timeScale: 1, // 2.0 = half speed, 0.5 = double speed
// customUpdate: false,
// overlapBias: 4,
// tileBias: 16,
// forceX: false,
// isPaused: false,
// debug: false,
// debugShowBody: true,
// debugShowStaticBody: true,
// debugShowVelocity: true,
// debugBodyColor: 0xff00ff,
// debugStaticBodyColor: 0x0000ff,
// debugVelocityColor: 0x00ff00,
// maxEntries: 16,

},
},
// ...
};
const game = new Phaser.Game(config);

### Update

- Default updating : World updating every tick

- Custom updating :
1. Set `customUpdate` of arcade config to `false`.
- Enable world updating : `this.physics.enableUpdate()`
- Disable world updating : `this.physics.disableUpdate()`
2. Run world updating manually

```hljs js
Copythis.physics.world.update(time, delta);

3. Enable/disable world updating
- Enable : `this.physics.enableUpdate()`
- Disable : `this.physics.disableUpdate()`

#### Step

- Advances the simulation by a single step.

```hljs js
Copythis.physics.world.singleStep();

- Advances the simulation by a time increment.

```hljs js
Copythis.physics.world.step(delta);

#### Pause

```hljs js
Copythis.physics.pause();

#### Resume

```hljs js
Copythis.physics.resume();

#### Duration per frame

- Time scale

```hljs js
Copythis.physics.world.timeScale = timeScale;

- 1.0 = normal speed
- 2.0 = half speed
- 0.5 = double speed
- Frames per second (FPS)

```hljs js
Copythis.physics.world.setFPS(framerate);

#### Tile filter options

```hljs js
Copyvar option = this.physics.world.tileFilterOptions;

- `option`

```hljs js
Copy{
isColliding: true,
isNotEmpty: true,
hasInterestingFace: true
}

#### Enable

```hljs js
Copythis.physics.world.enable(gameObject);
// this.physics.world.enable(gameObject, bodyType);

- `gameObject` : A game object, or array of game objects, or game objects in a `Group`.
- `bodyType` :
- `0` : Dynamic body. Default value.
- `1` : Static body.

Or

```hljs js
Copythis.physics.add.existing(gameObject, bodyType);

See arcade-body

#### Disable

```hljs js
Copythis.physics.world.disable(gameObject);

- `gameObject` : A game object, or array of game objects, or game objects in a `Group`.

#### Add/remove body

- Add body to the local search trees.

```hljs js
Copythis.physics.world.add(body);

- Remove body from the local search trees.

```hljs js
Copythis.physics.world.disableBody(body);

#### Set bound

See bound in body object, or game object.

#### Collider & callback

- Add collider
- Push out

```hljs js
Copythis.physics.add.collider(objectsA, objectsB);

- Performs a collision check and separation between the two physics enabled objects given.

```hljs js
Copyvar collider = this.physics.add.collider(
objectsA,
objectsB,
collideCallback
);
// var collider = this.physics.add.collider(objectsA, objectsB, collideCallback, processCallback, callbackContext);

- If you don't require separation then use `overlap` instead.

```hljs js
Copyvar collider = this.physics.add.overlap(
objectsA,
objectsB,
collideCallback
);
// var collider = this.physics.add.overlap(objectsA, objectsB, collideCallback, processCallback, callbackContext);

- Parameters
- `objectsA`, `objectsB` :
- A game object
- An array contains Game objects (Add or remove game objects)
- Physics group/Group (Add or remove game objects)
- An array contains Physics group/Group
- `collideCallback` :

```hljs js
Copyvar collideCallback = function (gameObject1, gameObject2) {
// ...
};

- `processCallback` : Fired when gameObject1 intersects gameObject2, optional.

```hljs js
Copyvar processCallback = function (gameObject1, gameObject2) {
return true; // return false will discard remaining collision checking
};

- Remove collider

```hljs js
Copythis.physics.world.removeCollider(collider);

- Deactivate collider

```hljs js
Copycollider.active = false; // Set true to activate again

- Name of collider (unused by engine)

```hljs js
Copycollider.name = name;

#### Testing without colliders

- Test overlapping

```hljs js
Copyvar isOverlapping = this.physics.world.overlap(object1, object2);

or

```hljs js
Copyvar isOverlapping = this.physics.world.overlap(
object1,
object2,
collideCallback
);
// var isOverlapping = this.physics.world.overlap(object1, object2, collideCallback, processCallback, callbackContext);

- Test colliding, also push out

```hljs js
Copyvar isCollided = this.physics.world.collide(object1, object2);

```hljs js
Copyvar isCollided = this.physics.world.collide(
object1,
object2,
collideCallback
);
// var isCollided = this.physics.world.collide(object1, object2, collideCallback, processCallback, callbackContext);

- A body overlaps with a Tile and has its `onOverlap` property set to `true`.

```hljs js
Copythis.physics.world.on("tileoverlap", function (gameObject, tile, body) {
/* ... */
});

- A body overlaps with a Tile and has its `onCollide` property set to `true`.

```hljs js
Copythis.physics.world.on("tilecollide", function (gameObject, tile, body) {
/* ... */
});

#### Enable

- Body : Set `body.setCollideWorldBounds()` to enable worldBounds property.

- World :
- Set bounds rectangle and enable bounds

```hljs js
Copythis.physics.world.setBounds(x, y, width, height);
// this.physics.world.setBounds(x, y, width, height, checkLeft, checkRight, checkUp, checkDown);

- Set bounds rectangle

```hljs js
Copythis.physics.world.bounds.setTo(x, y, width, height);

```hljs js
Copythis.physics.world.bounds.x = x;
this.physics.world.bounds.y = y;
this.physics.world.bounds.width = width;
this.physics.world.bounds.height = height;

- Enable bounds

```hljs js
Copythis.physics.world.setBoundsCollision();
// this.physics.world.setBoundsCollision(left, right, up, down);

```hljs js
Copythis.physics.world.checkCollision.left = left;
this.physics.world.checkCollision.right = right;
this.physics.world.checkCollision.up = up;
this.physics.world.checkCollision.down = down;

- Get bounds rectangle

```hljs js
Copyvar top = this.physics.world.bounds.top;
var bottom = this.physics.world.bounds.bottom;
var left = this.physics.world.bounds.left;
var right = this.physics.world.bounds.right;

### Bodies inside an area

- Overlap a rectangle area

```hljs js
Copyvar bodies = this.physics.overlapRect(
x,
y,
width,
height,
includeDynamic,
includeStatic
);

- `includeDynamic` : Set `true` to search Dynamic Bodies
- `includeStatic` : Set `true` to search Static Bodies
- Overlap a circle area

```hljs js
Copyvar bodies = this.physics.overlapCirc(
x,
y,
radius,
includeDynamic,
includeStatic
);

- `includeDynamic` : Set `true` to search Dynamic Bodies
- `includeStatic` : Set `true` to search Static Bodies

### Wrap

```hljs js
Copythis.physics.world.wrap(gameObject, padding);

- gameObject:
- game object
- group
- array of game objects

### Move to

- Move to position with a steady velocity

```hljs js
Copythis.physics.moveTo(gameObject, x, y, speed, maxTime);

- Move to object with a steady velocity

```hljs js
Copythis.physics.moveToObject(gameObject, destination, speed, maxTime);

### Accelerate to

- Accelerate to position

```hljs js
Copythis.physics.accelerateTo(
gameObject,
x,
y,
acceleration,
xSpeedMax,
ySpeedMax
);

- Accelerate to object

```hljs js
Copythis.physics.accelerateToObject(
gameObject,
destination,
acceleration,
xSpeedMax,
ySpeedMax
);

### Gravity

- Set

```hljs js
Copythis.physics.world.gravity.x = gx;
this.physics.world.gravity.y = gy;

- Get

```hljs js
Copyvar gx = this.physics.world.gravity.x;
var gy = this.physics.world.gravity.y;

Total Gravity = world.gravity + body.gravity

#### Closest/furthest

- Closest

```hljs js
Copyvar body = this.physics.closest(point); // point: {x,y}
// var body = this.physics.closest(point, targets);

- `targets` : Array of Arcade Physics Game Object, Body or Static Body.
- Furthest

```hljs js
Copyvar body = this.physics.furthest(point); // point: {x,y}
// var body = this.physics.furthest(point, targets);

- `targets` : Array of Arcade Physics Game Object, Body or Static Body.

#### Draw body & velocity

- Bounds of dynamic Body
- Enable drawing body

```hljs js
Copythis.physics.world.defaults.debugShowBody = true;

- Color

```hljs js
Copythis.physics.world.defaults.bodyDebugColor = 0xff00ff;

- Bounds of static Body
- Enable drawing body

```hljs js
Copythis.physics.world.defaults.debugShowStaticBody = true;

```hljs js
Copythis.physics.world.defaults.staticBodyDebugColor = 0x0000ff;

- Direction and magnitude of velocity
- Enable drawing body

```hljs js
Copythis.physics.world.defaults.debugShowVelocity = true;

```hljs js
Copythis.physics.world.defaults.velocityDebugColor = 0x00ff00;

#### Graphics

Draw debug body & velocity on a Graphics object.

```hljs js
Copyvar graphics = this.physics.world.debugGraphic;

- Set visible

```hljs js
Copythis.physics.world.debugGraphic.setVisible();

- Set invisible

```hljs js
Copythis.physics.world.debugGraphic.setVisible(false);

### Events

- World step

```hljs js
Copythis.physics.world.on("worldstep", function (delta) {
/* ... */
});

- `delta` : The delta time amount of this step, in seconds.
- Pause world

```hljs js
Copythis.physics.world.on("pause", function () {
/* ... */
});

- Resume world

```hljs js
Copythis.physics.world.on("resume", function () {
/* ... */
});

- Two bodies overlap and at least one of them has their `onOverlap` property set to `true`.

```hljs js
Copythis.physics.world.on(
"overlap",
function (gameObject1, gameObject2, body1, body2) {
/* ... */
}
);

- Two bodies overlap and at least one of them has their `onCollide` property set to `true`.

```hljs js
Copythis.physics.world.on(
"collide",
function (gameObject1, gameObject2, body1, body2) {
/* ... */
}
);

- World bounds

```hljs js
Copythis.physics.world.on(
"worldbounds",
function (body, blockedUp, blockedDown, blockedLeft, blockedRight) {
/* ... */
}
);

### Update loop

1. scene.sys.events: update
1. Update position & angle of each body
2. Process each collider
3. Update final position of each body
4. Emit `worldstep` event
2. scene.sys.events: postupdate
1. Draw debug graphics

scene.sys.events: update

Update arcade world

gameObject.preUpdate()

scene.update()

scene.sys.events: postupdate

Post update arcade world

Render

## Arcade Body

An Arcade Physics Body is associated with a game object and manages its physics properties and behaviors.

#### Get physics body

1. Enable physics world

2. Add existing game object(s) to physics world
- Add a game object

```hljs js
Copyvar gameObject = this.physics.add.existing(gameObject, bodyType);

- `bodyType` :
- `0` : Dynamic body
- `1` : Static body
- Add game objects

```hljs js
Copythis.physics.world.enable(gameObjects, bodyType);

- `gameObjects` : An array of game objects, or a group object
- `bodyType` :
- `0` : Dynamic body
- `1` : Static body
3. Get physics body

```hljs js
Copyvar body = gameObject.body;

#### Enable and disable

Whether this Body is updated by the physics simulation.

- Enable (default)

```hljs js
Copybody.setEnable();

```hljs js
Copybody.enable = true;

- Disable

```hljs js
Copybody.setEnable(false);

```hljs js
Copybody.enable = false;

#### Direct control

Enable `directControl` when game object is controlled by tween or dragging. Default behavior is disable.

- Enable

```hljs js
Copybody.setDirectControl(); // default argument is true
// body.setDirectControl(true);

```hljs js
Copybody.directControl = true;

```hljs js
Copybody.setDirectControl(false);

```hljs js
Copybody.directControl = false;

#### Immovable

Whether this Body can be moved by collisions with another Body.

```hljs js
Copybody.setImmovable();
// body.immovable = true;

- Disable (defalut)

```hljs js
Copybody.setImmovable(false);
// body.immovable = false;

```hljs js
Copyvar immovable = body.immovable;

#### Pushable

Sets if this Body can be pushed by another Body.

- Enable (default value of dynamic body)

```hljs js
Copybody.pushable = true;

- Disable, reflect back all of the velocity it is given to the colliding body.

```hljs js
Copybody.pushable = false;

```hljs js
Copyvar pushable = body.pushable;

#### Moveable

Whether the Body's position and rotation are affected by its velocity, acceleration, drag, and gravity.

```hljs js
Copybody.moves = true;

```hljs js
Copybody.moves = false;

```hljs js
Copyvar moves = body.moves;

#### Destroy

Physics body will be destroyed automatically when game object is destroyed.

##### Velocity

```hljs js
Copybody.setVelocity(x, y);

```hljs js
Copybody.setVelocityX(x);
body.setVelocityY(x);

```hljs js
Copyvar vx = body.velocity.x;
var vy = body.velocity.y;

##### Max speed

```hljs js
Copybody.setMaxSpeed(speed);

```hljs js
Copyvar speed = body.maxSpeed;

##### Max velocity

```hljs js
Copybody.setMaxVelocity(x, y);

```hljs js
Copybody.setMaxVelocityX(x);
body.setMaxVelocityY(y);

```hljs js
Copyvar vx = body.maxVelocity.x;
var vy = body.maxVelocity.y;

##### Acceleration

```hljs js
Copybody.setAcceleration(x, y);

```hljs js
Copybody.setAccelerationX(x);
body.setAccelerationY(y);

```hljs js
Copyvar ax = body.acceleration.x;
var ay = body.acceleration.y;

##### Gravity

```hljs js
Copybody.setGravity(x, y);

```hljs js
Copybody.setGravityX(x);
body.setGravityY(y);

```hljs js
Copyvar gx = body.gravity.x;
var gy = body.gravity.y;

- Enables (default)

```hljs js
Copybody.setAllowGravity();

```hljs js
Copybody.setAllowGravity(false);

##### Drag

Reduces speed per second.

```hljs js
Copybody.setDrag(x, y);

```hljs js
Copybody.setDragX(x);
body.setDragY(y);

```hljs js
Copyvar dx = body.drag.x;
var dy = body.drag.y;

```hljs js
Copybody.setAllowDrag();

```hljs js
Copybody.setAllowDrag(false);

- Enable Damping (default: disable)

```hljs js
Copybody.setDamping(true);
// body.useDamping = true;

##### Slide factor

The Slide Factor controls how much velocity is preserved when this Body is pushed by another Body.

```hljs js
Copybody.slideFactor.set(x, y);

- `x`, `y` :
- `1` : Take on all velocity given in the push. Default value.
- `0` : Allow this Body to be pushed but then remain completely still after the push ends,
such as you see in a game like _Sokoban_.
- Other value between `0` ~ `1` : Keep `x`/ `y` of the original velocity when the push ends.
- Combine this with the `setDrag()` method to create deceleration.

##### Reset position

```hljs js
Copybody.reset(x, y);

##### Stop

Sets acceleration, velocity, and speed to zero.

```hljs js
Copybody.stop();

###### Friction

If this Body is `immovable` and in motion, this the proportion of this Body's movement received by the riding body on each axis.

```hljs js
Copybody.setFriction(x, y);

```hljs js
Copybody.setFrictionX(x);
body.setFrictionY(y);

```hljs js
Copyvar fx = body.friction.x;
var fy = body.friction.y;

##### Speed

- The absolute (non-negative) change in this Body's horizontal/vertical position from the previous step.

```hljs js
Copyvar dx = body.deltaAbsX();
var dy = body.deltaAbsY();

##### Allow rotation

Whether this Body's rotation is affected by its angular acceleration and velocity.

```hljs js
Copybody.setAllowRotation();

```hljs js
Copybody.setAllowRotation(false);

```hljs js
Copyvar allowRotation = body.allowRotation;

##### Angular velocity

```hljs js
Copybody.setAngularVelocity(v);

```hljs js
Copyvar av = body.angularVelocity;

##### Angular acceleration

```hljs js
Copybody.setAngularAcceleration(v);

```hljs js
Copyvar aa = body.angularAcceleration;

##### Angular drag

Reduces angular speed per second.

```hljs js
Copybody.setAngularDrag(v);

```hljs js
Copyvar ad = body.angularDrag;

##### Collision category

By default all bodies collide with all other bodies. Collision categories define how different physics bodies interact with each other during collisions. It specifies which objects should collide and which should not. Collision categories are typically set using a bitmask, where each category is represented by a unique power of two. A body can collide with multiple collision categories.

- Collision category
- Get

```hljs js
Copyvar collisionCategory = body.collisionCategory;

```hljs js
Copybody.setCollisionCategory(category);

- `category` :
- `(1 << 0)`
- `(1 << 1)`
- `(1 << 2)`
- ...
- `(1 << 31)`
- Reset collision category, to default behavior (all bodies collide with all others)

```hljs js
Copybody.resetCollisionCategory();

- Set `collisionCategory` to `1`.
- Set `collisionMask` to `1`
- Collision mask
- Get

```hljs js
Copyvar collisionMask = body.collisionMask;

```hljs js
Copybody.setCollidesWith(categories);

- `categories` : A single category value, or an array of them.
- Add

```hljs js
Copybody.addCollidesWith(category):

- `category` : A single category value.
- Remove

```hljs js
Copybody.removeCollidesWith(category);

- `category` : A single category value.

##### Body collision bounds

Collision bounds define the area used for collision detection.

- Rectangle

```hljs js
Copybody.setSize(width, height, center);

- `center` : `false` to set body's offset to (0, 0).
- Not work in Graphics object.
- Circle

```hljs js
Copybody.setCircle(radius, offsetX, offsetY);

##### Collision Offset

Adjusts the position of a physics body's collision bounds relative to the sprite. Used when the sprite visual does not align with the collision area.

```hljs js
Copybody.setOffset(x, y);

##### Push out

Performs a collision check and separation between two physics enabled objects.

```hljs js
Copythis.physics.add.collider(objectsA, objectsB);

- `objectsA`, `objectsB` :
- A game object
- Game objects in array (Add or remove game objects)
- Physics group (Add or remove game objects)
- Group (Add or remove game objects)

##### Callbacks

Callbacks are functions that are called when collisions or overlaps occur between two objects every step.

```hljs js
Copyvar collider = this.physics.add.collider(objectsA, objectsB, collideCallback, processCallback, callbackContext);

- `collideCallback` : The call

- Custom world bounds :

```hljs js
Copybody.setBoundsRectangle(bounds);

- `bounds` : A rectangle object.
- Enable

```hljs js
Copybody.setCollideWorldBounds();

- Disable (default)

```hljs js
Copybody.setCollideWorldBounds(false);

- Get world bounds rectangle

```hljs js
Copyvar top = body.world.bounds.top;
var bottom = body.world.bounds.bottom;
var left = body.world.bounds.left;
var right = body.world.bounds.right;

##### Blocked

Check whether this Body is colliding with a tile or the world boundary.

- Blocked when moving down

```hljs js
Copyvar onFloor = body.onFloor();
// var onFloor = body.blocked.down

- Blocked when moving up

```hljs js
Copyvar onCeiling = body.onCeiling();
// var onCeiling = body.blocked.up

- Blocked when moving left or right

```hljs js
Copyvar onWall = body.onWall();
// var onLeftWall = body.blocked.left
// var onRightWall = body.blocked.right

- State

```hljs js
Copyvar blocked = body.blocked;

- `blocked` :

```hljs js
Copy{
none: true,
up: false,
down: false,
left: false,
right: false
}

#### Mass

The Body's inertia, relative to a default unit (1). With bounce, this affects the exchange of momentum (velocities) during collisions.

```hljs js
Copybody.setMass(m);

```hljs js
Copyvar m = body.mass;

#### Static body

A Static Arcade Physics Body never moves, and isn't automatically synchronized with its parent Game Object. Any changeg made to the parent's origin, position, or scale after creating or adding the body, requires manual update to the Static Body. A Static Body can collide with other Bodies, but is never moved by collisions.

##### Sync

Syncs the Bodies _position_ and _size_ with its parent Game Object.

```hljs js
Copybody.updateFromGameObject();

#### Debug

Draws a graphical representation of the StaticBody for visual debugging purposes.

- Bounds of Body
- Enable drawing body

```hljs js
Copybody.debugShowBody = true;

```hljs js
Copybody.debugBodyColor = 0xff00ff;

```hljs js
Copybody.debugShowVelocity = true;

## Arcade Game Object

Game Objects are the building blocks of your game. Common Arcade Game Objects include: Sprites, Images, and Groups.

##### Image object

- Static object, extends from Image object

```hljs js
Copyvar image = this.physics.add.staticImage(x, y, key);

- Dynamic object, extends from Image object

```hljs js
Copyvar image = this.physics.add.image(x, y, key);

##### Sprite object

- Static object, extends from Sprite object

```hljs js
Copyvar image = this.physics.add.staticSprite(x, y, key, frame);

- Dynamic object, extends from Sprite object

```hljs js
Copyvar image = this.physics.add.sprite(x, y, key, frame);

##### Group object

- Static sprite objects, extends from Group object

```hljs js
Copyvar group = this.physics.add.staticGroup(children, config);
// var group = this.physics.add.staticGroup(config);

- Dynamic sprite objects, extends from Group object

```hljs js
Copyvar group = this.physics.add.group(children, config);
// var group = this.physics.add.staticGroup(config);

- `config`

```hljs js
Copyvar config = {
classType: ArcadeSprite,
enable: true,
collideWorldBounds: false,
customBoundsRectangle: null,
accelerationX: 0,
accelerationY: 0,
allowDrag: true,
allowGravity: true,
allowRotation: true,
useDamping: false,
bounceX: 0,
bounceY: 0,
dragX: 0,
dragY: 0,
gravityX: 0,
gravityY: 0,
frictionX: 0,
frictionY: 0,
maxSpeed: -1,
velocityX: 0,
velocityY: 0,
maxVelocityX: 10000,
maxVelocityY: 10000,
angularVelocity: 0,
angularAcceleration: 0,
angularDrag: 0,
mass: 0,
immovable: false,

maxSize: -1,
runChildUpdate: false,
};

##### Enable body

- Enable body

```hljs js
CopygameObject.enableBody();
// gameObject.enableBody(false, 0, 0, enableGameObject, showGameObject);

- Enable and reset position

```hljs js
CopygameObject.enableBody(true, x, y);
// gameObject.enableBody(true, x, y, enableGameObject, showGameObject);

- `enableGameObject` : Also activate this Game Object.

- `showGameObject` : Also show this Game Object.
- Disable body

```hljs js
CopygameObject.disableBody();
// gameObject.disableBody(disableGameObject, hideGameObject);

- `disableGameObject` : Also deactivate this Game Object.
- `hideGameObject` : Also hide this Game Object.

##### Velocity

```hljs js
CopygameObject.setVelocity(x, y);

```hljs js
CopygameObject.setVelocityX(x);
gameObject.setVelocityY(y);

```hljs js
Copyvar vx = gameObject.body.velocity.x;
var vy = gameObject.body.velocity.y;

###### Max velocity

```hljs js
CopygameObject.setMaxVelocity(x, y);

```hljs js
Copyvar vx = gameObject.body.maxVelocity.x;
var vy = gameObject.body.maxVelocity.y;

##### Acceleration

```hljs js
CopygameObject.setAcceleration(x, y);

```hljs js
CopygameObject.setAccelerationX(x);
gameObject.setAccelerationY(y);

```hljs js
Copyvar ax = gameObject.body.acceleration.x;
var ay = gameObject.body.acceleration.y;

###### Gravity

```hljs js
CopygameObject.setGravity(x, y);

```hljs js
CopygameObject.setGravityX(x);
gameObject.setGravityY(y);

```hljs js
Copyvar gx = gameObject.body.gravity.x;
var gy = gameObject.body.gravity.y;

##### Drag

```hljs js
CopygameObject.setDrag(x, y);

```hljs js
CopygameObject.setDragX(x);
gameObject.setDragY(y);

```hljs js
Copyvar dx = gameObject.body.drag.x;
var dy = gameObject.body.drag.y;

- Enable damping

```hljs js
CopygameObject.setDamping(value);

##### Immovable

```hljs js
CopygameObject.setImmovable();

```hljs js
CopygameObject.setImmovable(false);

```hljs js
Copyvar immovable = gameObject.body.immovable;

##### Pushable

```hljs js
CopygameObject.setPushable();

```hljs js
CopygameObject.setPushable(false);

```hljs js
Copyvar pushable = gameObject.body.pushable;

###### Slide factor

```hljs js
CopygameObject.setSlideFactor(x, y);

###### Friction

```hljs js
CopygameObject.setFriction(x, y);

```hljs js
CopygameObject.setFrictionX(x);
gameObject.setFrictionY(y);

```hljs js
Copyvar fx = gameObject.body.friction.x;
var fy = gameObject.body.friction.y;

##### Direct control

```hljs js
CopygameObject.setDirectControl();
// gameObject.setDirectControl(true);

```hljs js
CopygameObject.setDirectControl(false);

Enable `setDirectControl` when game object is controlled by tween or dragging.

##### Allow rotation

```hljs js
Copyvar allowRotation = gameObject.body.allowRotation;

##### Angular velocity

```hljs js
CopygameObject.setAngularVelocity(v);

```hljs js
Copyvar av = gameObject.body.angularVelocity;

##### Angular acceleration

```hljs js
CopygameObject.setAngularAcceleration(v);

```hljs js
Copyvar aa = gameObject.body.angularAcceleration;

##### Angular drag

```hljs js
CopygameObject.setAngularDrag(v);

```hljs js
Copyvar ad = gameObject.body.angularDrag;

##### Collision category

```hljs js
Copyvar collisionCategory = gameObject.body.collisionCategory;

```hljs js
CopygameObject.setCollisionCategory(category);

```hljs js
CopygameObject.resetCollisionCategory();

```hljs js
Copyvar collisionMask = gameObject.body.collisionMask;

```hljs js
CopygameObject.setCollidesWith(categories);

```hljs js
CopygameObject.addCollidesWith(category):

```hljs js
CopygameObject.removeCollidesWith(category);

##### Game Object collision bounds

```hljs js
CopygameObject.setBodySize(width, height, center);

- `center` : `false` to set body's offset to (0, 0)
- Circle

```hljs js
CopygameObject.setCircle(radius, offsetX, offsetY);

###### Offset

```hljs js
CopygameObject.setOffset(x, y);

##### Push out

##### Callbacks

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Physics

Matter Physics

---

# https://docs.phaser.io/phaser/concepts/loader/cache

# Cache

A Guide to the Phaser Cache to manage game assets and resources

When a file is downloaded by the Loader it nearly always ends up stored in an internal Phaser Cache. There are different caches for different file types. For example, JSON files are stored in the JSON cache, Binary files in the Binary Cache, and so on. These caches are created automatically when the Phaser Game instance first starts up. Files are stored in them using unique string-based keys. If the file has come from the Loader, it will use the same key you used there, to store it in the Cache with.

The Phaser Cache is different to any cache that the browser itself may maintain, in that it only persists for the duration of your game. Once your game has been destroyed, either directly by you, or via a page navigation, the Phaser Cache is cleared. Unlike the browser cache, you are free to add to, and remove items from, any of the Phaser caches at will.

Items stored in a Phaser Cache are global, which means they can be accessed from any Scene in your game. Scene's do not maintain their own set of caches. Instead, they all share the same global set. This is important to understand, because it means that if you load a file in one Scene, it will be available in all other Scenes too.

Mostly, you don't need to worry about interacting with the Phaser Cache. It's primarily an internal system that is used by other systems, such as the Loader, to store and retrieve data. However, there are times when you may want to interact with it directly, and it has a public API for doing exactly this.

## Usage

- Getting cache data

```hljs js
Copyvar cache = scene.cache.text;
var data = cache.get(key);

- Adding cache data

```hljs js
Copyvar cache = scene.cache.text;
var data = cache.add(key);

- Removing cache data

```hljs js
Copyvar cache = scene.cache.text;
cache.remove(key);

- Verifying cache data

```hljs js
Copyvar cache = scene.cache.text;
var hasData = cache.exists(key);
// var hasData = cache.has(key);

## Events

- Adding an item

```hljs js
Copycache.events.on("add", function (cache, key, item) {});

- Removing an item

```hljs js
Copycache.events.on("remove", function (cache, key, item) {});

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Loader

Math

---

# https://docs.phaser.io/phaser/concepts/gameobjects/dom-element

# Dom Element

A Guide to the Phaser DOM Element Game Object

DOM Element Game Objects are a way to control and manipulate HTML Elements over the top of your game.

In order for DOM Elements to display you have to enable them by adding the following to your game configuration object:

```hljs js
Copydom {
createContainer: true
}

You must also have a `parent` container for Phaser. This is specified by the `parent` property in the game config. When these two things are added, Phaser will automatically create a DOM Container div that is positioned over the top of the game canvas. This div is sized to match the canvas, and if the canvas size changes, as a result of settings within the Scale Manager, the dom container is resized accordingly. Without providing a `parent`, the DOM Container _will not_ be created.

You can create a DOM Element by either passing in `DOMStrings`, or by passing in a reference to an existing Element that you wish to be placed under the control of Phaser. For example:

```hljs js
Copythis.add.dom(x, y, 'div', 'background-color: lime; width: 220px; height: 100px; font: 48px Arial', 'Phaser');

The above code will insert a div element into the DOM Container at the given x/y coordinate. The DOMString in the 4th argument sets the initial CSS style of the div and the final argument is the inner text. In this case, it will create a lime colored div that is 220px by 100px in size with the text Phaser in it, in an Arial font.

You should nearly always, without exception, use explicitly sized HTML Elements, in order to fully control alignment and positioning of the elements next to regular game content.

Rather than specify the CSS and HTML directly you can use the `load.html` File Loader to load it into the cache and then use the `createFromCache` method instead. You can also use `createFromHTML` and various other methods available in this class to help construct your elements.

Once the element has been created you can then control it like you would any other Game Object. You can set its position, scale, rotation, alpha and other properties. It will move as the main Scene Camera moves and be clipped at the edge of the canvas. It's important to remember some limitations of DOM Elements: The obvious one is that they appear above or below your game canvas. You cannot blend them into the display list, meaning you cannot have a DOM Element, then a Sprite, then another DOM Element behind it.

They also cannot be enabled for input. To do that, you have to use the `addListener` method to add native event listeners directly. The final limitation is to do with cameras. The DOM Container is sized to match the game canvas entirely and clipped accordingly. DOM Elements respect camera scrolling and scrollFactor settings, but if you change the size of the camera so it no longer matches the size of the canvas, they won't be clipped accordingly.

DOM Game Objects can be added to a Phaser Container, however you should only nest them **one level deep**. Any further down the chain and they will ignore all root container properties.

Also, all DOM Elements are inserted into the same DOM Container, regardless of which Scene they are created in.

Note that you should only have DOM Elements in a Scene with a _single_ Camera. If you require multiple cameras, use parallel scenes to achieve this.

DOM Elements are a powerful way to align native HTML with your Phaser Game Objects. For example, you can insert a login form for a multiplayer game directly into your title screen. Or a text input box for a highscore table. Or a banner ad from a 3rd party service. Or perhaps you'd like to use them for high resolution text display and UI. The choice is up to you, just remember that you're dealing with standard HTML and CSS floating over the top of your game, and should treat it accordingly.

## Configuration

- Set `parent` to divId
- Set `dom.createContainer` to `true`.

```hljs javascript
Copyvar config = {
// ...
parent: divId,
// fullscreenTarget: divId, // For fullscreen
dom: {
createContainer: true
},
input: {
mouse: {
target: divId
},
touch: {
target: divId
},
},
// ...
}
var game = new Phaser.Game(config);

## Add DOM element object

### Add html string

1. Load html string in preload stage

```hljs javascript
Copythis.load.html(key, url);

Reference: load html

2. Add DOM element object with html string from cache

```hljs javascript
Copyvar domElement = this.add.dom(x, y).createFromCache(key); // elementType = 'div'
// var domElement = this.add.dom(x, y).createFromCache(key, elementType);

- Add DOM element object with html string

```hljs javascript
Copyvar domElement = this.add.dom(x, y).createFromHTML(htmlString); // elementType = 'div'
// var domElement = this.add.dom(x, y).createFromHTML(htmlString, elementType);

- `elementType` : The tag name of the element into which all of the html will be inserted. Defaults to a plain div tag.

### Create element

```hljs javascript
Copythis.add.dom(x, y).createElement(tagName);
// this.add.dom(x, y).createElement(tagName, style, innerText);

- `tagName` : A string that specifies the type of element to be created. For example, `'div'`
- `style` : Either a DOMString that holds the CSS styles to be applied to the created element, or an object the styles will be readyfrom. Optional.
- `innerText` : A DOMString that holds the text that will be set as the innerText of the created element. Optional.

### Add existing DOM

1. Create DOM element

```hljs javascript
Copyvar el = document.createElement('div');
// el.style = '...';
// el.innerText = '...';

2. Add to scene

```hljs javascript
Copyvar domElement = this.add.dom(x, y, el);
// var domElement = this.add.dom(x, y, el, style, innerText);

## Custom class

```hljs javascript
Copyclass MyDOMElement extends Phaser.GameObjects.DOMElement {
constructor(scene, x, y, element, style, innerText) {
super(scene, x, y, element, style, innerText);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {
// super.preUpdate(time, delta);
// }
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.

Example

```hljs javascript
Copyvar domElement = new MyDOMElement(scene, x, y, element);

## Event of DOM element

- Add listener

```hljs javascript
CopydomElement.addListener(eventName);

- `eventName` : Event name
- Single string. ex. `'click'`
- Event name joined with `' '`
- Add event handler

```hljs javascript
Copyvar callback = function(event) {
// event.target.name
};
domElement.on(eventName, callback, scope);
// domElement.once(eventName, callback, scope);

Reference: event emitter

- Remove listener

```hljs javascript
CopydomElement.removeListener(eventName);

- `eventName` : Event name
- Single string. ex. `'click'`
- Event name joined with `' '`

## Get child

- Get child by name

```hljs javascript
Copyvar child = domElement.getChildByName(name)

- Get child by id

```hljs javascript
Copyvar child = domElement.getChildByID(id)

- Get child by property

```hljs javascript
Copyvar child = domElement.getChildByProperty(property, value)

## Set inner html string

```hljs javascript
Copythis.setHTML(html);

or

```hljs javascript
Copythis.setText(html);

## DOM Element

Each DOM element object has 1 DOM element.

- Set

```hljs javascript
CopydomElement.setElement(el);
// domElement.setElement(el, style, innerText);

- Get

```hljs javascript
Copyvar el = domElement.node;

## Depth

```hljs javascript
CopydomElement.setDepth(value);

## Set size

```hljs javascript
Copyvar style = domElement.node.style;
style.width = width + 'px';
style.height = height + 'px';
domElement.updateSize();

## Skew

```hljs javascript
CopydomElement.setSkew(x, y);

```hljs javascript
CopydomElement.skewX = x;
domElement.skewY = y;

## Rotate 3d

The rotate3d() CSS function defines a transformation that rotates an element around a fixed axis in 3D space, without deforming it.

```hljs javascript
CopydomElement.rotate3d.set(x, y, z, a);

```hljs javascript
CopydomElement.rotate3d.x = x;
domElement.rotate3d.y = y;
domElement.rotate3d.z = z;
domElement.rotate3d.w = a;

Reference

## Interactive with other game objects

1. DOM game object always put above game canvas, i.e. DOM game object will render above any other kind of game object.
2. DOM game object will receive touch event even if it is not the first touched game object.
3. P3's `'pointerdown'`, `'pointerup'` events will be fired above/under DOM game object.
4. P3's `'pointermove'` event won't be fired above/under DOM game object, except
- Setting DOM game object to be invisilbe.
- Assign input.mouse.target parameter of game config.
5. DOM game object only can be displayed by main camera. i.e. dom game object can't add to other camera.

## Other properties

See game object

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Display List

Graphics

---

# https://docs.phaser.io/phaser/concepts/gameobjects/factories

# Game Object Factories

A Guide to the Phaser Game Object Factories to create Game Objects

## Game Object Factory

The role of the Game Object Factory is to create Game Objects for you and add them to the Scene, making them immediately ready for use.

The Factory itself is a very small class, providing just a few properties and hooks. Its power comes from the fact that all Game Objects register themselves with it, dynamically extending the class with new methods. You can even create your own Game Objects that include a factory function, allowing you to extend the Factory to suit your own needs.

Every Scene has an instance of the `GameObjectFactory` class. By default, this is mapped to the Scene's `add` property. For example, here is how to create a Sprite via the Game Object Factory:

```hljs js
Copyconst sprite = this.add.sprite(x, y, key);

Internally, there is no actual `sprite` method in the Game Object Factory itself. If you were to open the class file in an editor, you won't find it. This is because each Game Object is responsible for its own factory function. Here is the one for the Sprite:

```hljs js
CopyGameObjectFactory.register('sprite', function (x, y, texture, frame)
{
return this.displayList.add(new Sprite(this.scene, x, y, texture, frame));
});

This code can be found in the `src/gameobjects/sprite/SpriteFactory.js` file within the Phaser repository. Nearly all Game Objects have similar `Factory.js` files, which are responsible for registering themselves with the Factory.

You can see the code is calling the static `GameObjectFactory.register` function and passing it the name of its own factory function, `sprite`, and a callback. The `register` function will take this callback and add it to the Factory, under the `sprite` property.

And it is this callback that is invoked whenever you call `this.add.sprite` in your game code. In this case, it's responsible for creating the Sprite instance and adding it to the display list, but any actual logic can take place here.

The callback is invoked using the Game Object Factory as the context, meaning that `this` within the callback is a reference to the Factory itself. This is why you can see it accessing the `this.displayList` property. This is a property available in the Game Object Factory class, which is a reference to the Scene Display List.

It's important to understand that while each Scene has its own instance of the Game Object Factory, registration of Game Objects with the Factory is global. This means that once a Game Object has been registered, its factory function is available to use from any Scene in your game.

At the end of the day, the Factory is all about convenience. It allows you to create Game Objects without having to worry about the internal details of how they are created. It also allows you to extend the Factory with your own Game Objects, or even override the existing ones, allowing you to customize the Factory to suit your own needs.

### How to bypass the Game Object Factory

If you wish to create a Game Object without using the Factory, you can do so by calling the Game Object constructor directly. For example, to create a Sprite you would do this:

```hljs js
Copyconst sprite = new Phaser.GameObjects.Sprite(scene, x, y, key);

sprite.addToDisplayList();

### Removing a Factory Function

If the Game Object Factory already has a function registered with a given name, it will simply skip any further registations for the same name. Therefore, if you wish to replace one of the internal Phaser Game Objects with your own, you will need to remove the existing entry first before adding yours.

You can do this by calling the `remove` method:

```hljs js
CopyPhaser.GameObjects.GameObjectFactory.remove('sprite');

This will remove the `sprite` method from the Factory, allowing you to then add your own with the same name. This process is immediate.

### Adding Custom Game Objects to the Game Object Factory

You can extend the Game Object Factory by adding your own Game Objects to it. This is done by calling the static `register` method on the Factory itself. This method takes two arguments: The name of the Game Object, and a callback function that will create an instance of it.

Here is a simple class for our custom Game Object:

```hljs js
Copyclass Bomb extends Phaser.GameObjects.Sprite
{
constructor (scene, x, y)
{
super(scene, x, y, 'bomb');

this.setScale(0.5);
}

preUpdate (time, delta)
{
super.preUpdate(time, delta);

this.rotation += 0.01;
}
}

This is a very simple Game Object that extends the Sprite class. It's a bomb that spins around on the screen, as managed by the rotation in the `preUpdate`. We will register this with the Game Object Factory using the `bomb` key. We'll do this in our Scene `init` method:

```hljs js
Copyclass Example extends Phaser.Scene
{
init ()
{
Phaser.GameObjects.GameObjectFactory.register('bomb', function (x, y)
{
return this.displayList.add(new Bomb(this.scene, x, y));
});
}
}

The `init` method is called first in a Scene. This means we can safely register our custom Game Object here, and it will be available for use in the Scene `create` method:

```hljs js
Copycreate ()
{
this.add.bomb(200, 200);
this.add.bomb(400, 300);
this.add.bomb(600, 400);
}

You can see the full example here: \[file: gameobjects/custom-factory.js\]

When coding your register functions you have access to the following properties:

| Property | Description |
| --- | --- |
| `this.scene` | A reference to the Scene that owns the Game Object Factory. |
| `this.systems` | A reference to the Scene Systems. |
| `this.events` | A reference to the Scene Event Emitter. |
| `this.displayList` | A reference to the Scene Display List. |
| `this.updateList` | A reference to the Scene Update List. |

In the example above we registered the Game Object in the Scene `init` method. However, it's also very common to register it in the Game Object file itself in order to keep things tidy and together.

Here is a variation of the Bomb Game Object that registers itself with the Factory:

```hljs js
Copyexport class Bomb extends Phaser.GameObjects.Sprite
{
constructor (scene, x, y)
{
super(scene, x, y, 'bomb');

Phaser.GameObjects.GameObjectFactory.register('bomb', function (x, y)
{
return this.displayList.add(new Bomb(this.scene, x, y));
});

We can then import this into our Scene:

```hljs js
Copyimport { Bomb } from './Bomb.js';

And call the `this.add.bomb` method as before.

## Game Object Creator

The role of the Game Object Creator is to create Game Objects based on configuration objects. You can also elect to have them automatically added them to the Scene, or not. This makes Creator functions very useful for creating Game Objects in advance, so you can avoid object instantiation during time-critical parts of your game, such as when it is running.

The main differernce between the Game Object Creator and the Game Object Factory is that all Creator functions take configuration objects. Where-as the Factory functions take fixed arguments. Which one you use is up to you. The Creator is more flexible and has some powerful features when parsing the config objects, but the Factory functions are easier to understand, remember and parse from languages like TypeScript.

The Creator itself is a very small class, providing just a few properties and hooks. Its power comes from the fact that all Game Objects register themselves with it, dynamically extending the class with new methods. You can even create your own Game Objects that include a creator function, allowing you to extend the Creator to suit your own needs.

Every Scene has an instance of the `GameObjectCreator` class. By default, this is mapped to the Scene's `make` property. For example, here is how to create a Sprite via the Game Object Creator:

```hljs js
Copyconst sprite = this.make.sprite({
x: 400,
y: 300,
key: 'playerAtlas',
frame: 'idle'
});

The above example makes some assumptions, such as the texture key and frame name, but you should take it as an example of a simple configuration object, rather than something you can copy and paste.

Internally, there is no actual `sprite` method in the Game Object Creator itself. If you were to open the class file in an editor, you won't find it. This is because each Game Object is responsible for its own creator function. The Sprite creator code can be found in the `src/gameobjects/sprite/SpriteCreator.js` file within the Phaser repository. Nearly all Game Objects have similar `Creator.js` files, which are responsible for registering themselves with the Creator.

All Creator functions call the static `GameObjectCreator.register` function, and pass it the name of its own creator function, `sprite`, and a callback. The `register` function will take this callback and add it to the Creator, under the `sprite` property.

And it is this callback that is invoked whenever you call `this.make.sprite` in your game code. In this case, it's responsible for creating the Sprite instance from the config object and adding it to the display list, but any actual logic can take place here.

The callback is invoked using the Game Object Creator as the context, meaning that `this` within the callback is a reference to the Creator itself.

It's important to understand that while each Scene has its own instance of the Game Object Creator, registration of Game Objects with the Creator is global. This means that once a Game Object has been registered, its creator function is available to use from any Scene in your game.

At the end of the day, the Creator is all about convenience. It allows you to create Game Objects without having to worry about the internal details of how they are created. It also allows you to extend the Creator with your own Game Objects, or even override the existing ones, allowing you to customize the Creator to suit your own needs.

### How to set Configuration Properties

As we've seen above, you pass in configuration objects to the Creator functions in order to make the Game Objects. These config objects are parsed by the Creator and the values are used to set the properties of the Game Object being created, such as its position, scale, or rotation.

However, the way in which these properties are parsed is where the real power of the Creator comes in. Most properties are set through a Phaser function called `GetAdvancedValue`, which allows the properties to expressed in 5 different ways.

For brevity we'll focus just on creating a Sprite and settings its x/y coordinates. However, you can actually use this approach on nearly all Game Object properties (see the table below).

#### 1\. Explicit Value

The first and most obvious way is to simply provide a fixed value:

```hljs js
Copyconst sprite = this.make.sprite({
x: 400
});

The Sprite will have an x position of 400.

#### 2\. Random Array Value

You can pass in an array of values, in which case a random element from the array will be selected and used:

```hljs js
Copyconst sprite = this.make.sprite({
x: [ 400, 500, 600 ]
});

The Sprite x position will be randomly picked from the given array. So, its x coordinate could be 400, 500 or 600. You can pass in as many values as you like, and the Creator will pick a random one from the array each time.

#### 3\. Random Integer Between Min and Max

You can pass in an object with a `randInt` property. This should be a 2 element array, where the first element is the minimum value and the second is the maximum. A random integer between the two will be selected and used:

```hljs js
Copyconst sprite = this.make.sprite({
x: { randInt: [ 100, 600 ]}
});

The Sprite x position will be a random integer between 100 and 600.

#### 4\. Random Float Between Min and Max

You can pass in an object with a `randFloat` property. This should be a 2 element array, where the first element is the minimum value and the second is the maximum. A random float between the two will be selected and used:

```hljs js
Copyconst sprite = this.make.sprite({
x: { randFloat: [ 100, 600 ]}
});

The Sprite x position will be a random float between 100 and 600.

#### 5\. Callback Value

Finally, you can pass in a callback function. This should return a value, which will be used as the property value:

```hljs js
Copyconst sprite = this.make.sprite({
x: function (key)
{
return Math.random() * 800;
}
});

The Sprite x position will be a random float between 0 and 800. The callback is sent one parameter, the key of the property being set. In the example above, `key` would be `x`.

### Game Object Configuration Properties

The following table lists all of the properties you can set on any Game Object. Most Game Objects have additional properties beyond this list, however, the following are common to all Game Objects.

All property values can be expressed via any of the 5 methods outlined above.

| Property | Data Type |
| --- | --- |
| `x` | `number` |
| `y` | `number` |
| `depth` | `number` |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `rotation` | `number` |
| `angle` | `number` |
| `flipX` | `boolean` |
| `flipY` | `boolean` |
| `visible` | `boolean` |
| `alpha` | `number` |
| `blendMode` | `number` |
| `scrollFactorX` | `number` |
| `scrollFactorY` | `number` |
| `originX` | `number` |
| `originY` | `number` |

There are also 3 special properties that act as combinations of the above:

| Property | Data Type |
| --- | --- |
| `scale` | `number` |
| `origin` | `number` |
| `scrollFactor` | `number` |

So, rather than specifying `scaleX` and `scaleY` separately, you can just specify `scale` and it will set both values. The same is true for `origin` and `scrollFactor`.

Internally in Phaser, setting all of the common properties is handled by the `BuildGameObject` function, which you can find in the `src/gameobjects/BuildGameObject.js` file. If you are developing your own Creator function, then you can use this function to handle the common properties for you.

### Animation Configuration

If you're creating a Game Object that supports animation, such as a Sprite, then you can also specify the animation details in the config object. For example, to create a Sprite and play an animation on it:

```hljs js
Copyconst sprite = this.make.sprite({
x: 400,
y: 300,
key: 'playerAtlas',
anims: 'idle'
});

The `anims` property is a special property that is parsed by the Sprite Creator function. It tells the Creator that you wish to play an animation on the Sprite. The value of the `anims` property can be either a string, or an object.

In the example above, we're telling it to play the 'idle' animation, as this is the animation key we have defined.

The Creator function does not _create_ animations, it just plays them. So you have to assume that the animation has already been defined in your game, prior to this call. If it hasn't, the Creator funtion won't find the animation and will skip setting it.

Rather than pass a string, you can also pass an object, which allows you to specify more details about the animation:

```hljs js
Copyconst sprite = this.make.sprite({
x: 400,
y: 300,
key: 'playerAtlas',
anims: {
key: 'idle',
yoyo: true,
repeat: -1
}
});

Internally in Phaser, this is handled by the `BuildGameObjectAnimation` function, which you can find in the `src/gameobjects/BuildGameObjectAnimation.js` file.

### Skipping the Display List

When you call a `make` function there is a second parameter you can pass, after the configuration object, which is `addToScene`. This is a boolean value that controls if the Game Object is automatically added to the Scene Display List, or not.

By default, this is `true`, however you can override in one of two ways. First, by simply passing `false` as the second parameter:

```hljs js
Copy
const config = {
x: 400,
y: 300,
key: 'playerAtlas',
frame: 'idle'
};

const sprite = this.make.sprite(config, false);

Or, by setting the `add` property in the configuration object itself to `false`:

```hljs js
Copyconst sprite = this.make.sprite({
x: 400,
y: 300,
key: 'playerAtlas',
frame: 'idle',
add: false
});

In both cases, the Sprite will be created, but not added to the Scene Display List. This allows you to pre-generate a batch of Sprites in advance, but leave them in a dormant state until you need them.

Also, some Game Objects never need to be added to the Display List. For example, if you create a Graphics Game Object specifically for use as a mask, then you won't need to actually display it, so this allows you to create it without adding it to the Display List.

### Removing a Creator Function

If the Game Object Creator already has a function registered with a given name, it will simply skip any further registations for the same name. Therefore, if you wish to replace one of the internal Phaser Game Objects with your own, you will need to remove the existing entry first before adding yours.

```hljs js
CopyPhaser.GameObjects.GameObjectCreator.remove('sprite');

This will remove the `sprite` method from the Creator, allowing you to then add your own with the same name. This process is immediate.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Game Object Components

Bitmap Text

---

# https://docs.phaser.io/phaser/concepts/gameobjects/text

# Text

A Guide to the Phaser Text Game Object

Text objects work by creating their own internal hidden Canvas and then renders text to it using the standard Canvas `fillText` API. It then creates a texture from this canvas which is rendered to your game during the render pass.

Because it uses the Canvas API you can take advantage of all the features this offers, such as applying gradient fills to the text, or strokes, shadows and more. You can also use custom fonts loaded externally, such as Google or TypeKit Web fonts.

Important: The font name must be quoted if it contains certain combinations of digits or special characters, either when creating the Text object, or when setting the font via `setFont` or `setFontFamily`, e.g.:

```hljs js
Copythis.add.text(0, 0, 'Hello World', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });

```hljs js
Copythis.add.text(0, 0, 'Hello World', { font: '"Press Start 2P"' });

You can only display fonts that are currently loaded and available to the browser: therefore fonts must be pre-loaded. Phaser does not do this for you, so you will require the use of a 3rd party font loader, or have the fonts ready available in the CSS on the page in which your Phaser game resides.

See this for the available default fonts across mobile browsers.

A note on performance: Every time the contents of a Text object changes, i.e. changing the text being displayed, or the style of the text, it needs to remake the Text canvas, and if on WebGL, re-upload the new texture to the GPU. This can be an expensive operation if used often, or with large quantities of Text objects in your game. If you run into performance issues you would be better off using Bitmap Text instead, as it benefits from batching and avoids expensive Canvas API calls.

## Add text object

```hljs javascript
Copyvar txt = this.add.text(x, y, 'hello');
// var txt = this.add.text(x, y, 'hello', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });

Default style

```hljs javascript
Copy{
fontFamily: 'Courier',
fontSize: '16px',
fontStyle: '',
backgroundColor: null,
color: '#fff',
stroke: '#fff',
strokeThickness: 0,
shadow: {
offsetX: 0,
offsetY: 0,
color: '#000',
blur: 0,
stroke: false,
fill: false
},
align: 'left', // 'left'|'center'|'right'|'justify'
padding: {
left: 0,
right: 0,
top: 0,
bottom: 0,
},
maxLines: 0,
lineSpacing: 0,
fixedWidth: 0,
fixedHeight: 0,
rtl: false,
testString: '|MÉqgy',
wordWrap: {
width: null,
callback: null,
callbackScope: null,
useAdvancedWrap: false
},
metrics: false,
// metrics: {
// ascent: 0,
// descent: 0,
// fontSize: 0
// },
}

Add text from JSON

```hljs javascript
Copyvar txt = this.make.text({
x: 100,
y: 100,
padding: {
left: 64,
right: 16,
top: 20,
bottom: 40
//x: 32, // 32px padding on the left/right
//y: 16 // 16px padding on the top/bottom
},
text: 'Text\nGame Object\nCreated from config',
style: {
fontSize: '64px',
fontFamily: 'Arial',
color: '#ffffff',
align: 'center', // 'left'|'center'|'right'|'justify'
backgroundColor: '#ff00ff'
},
// origin: {x: 0.5, y: 0.5},
add: true
});

## Custom class

- Define class

```hljs javascript
Copyclass MyText extends Phaser.GameObjects.Text {
constructor(scene, x, y, text, style) {
super(scene, x, y, text, style);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs javascript
Copyvar txt = new MyText(scene, x, y, 'hello');

## Word wrap

- Wrap by width

```hljs javascript
Copyvar txt = this.make.text({
x: 400,
y: 100,
text: 'The sky above the port was the color of television, tuned to a dead channel.',
origin: { x: 0.5, y: 0.5 },
style: {
font: 'bold 25px Arial',
fill: 'white',
wordWrap: { width: 300 }
},
// origin: {x: 0.5, y: 0.5},
});

- Wrap by callback

```hljs javascript
Copyvar txt = this.make.text({
x: 400,
y: 300,
text: 'The sky above the port was the color of television, tuned to a dead channel.',
origin: 0.5,
style: {
font: 'bold 30px Arial',
fill: 'white',
wordWrap: { callback: wordWrap, scope: this }
},
// origin: {x: 0.5, y: 0.5},
});

function wordWrap (text, textObject)
{
// First parameter will be the string that needs to be wrapped
// Second parameter will be the Text game object that is being wrapped currently

// This wrap just puts each word on a separate line, but you could inject your own
// language-specific logic here.
var words = text.split(' ');

// You can return either an array of individual lines or a string with line breaks (e.g. \n) in
// the correct place.
return words;
}

- Wrap width
- Get

```hljs javascript
Copyvar width = txt.style.wordWrapWidth;
var useAdvancedWrap = txt.style.wordWrapUseAdvanced;

- Set

```hljs javascript
Copytxt.setWordWrapWidth(width);
// txt.setWordWrapWidth(width, useAdvancedWrap);

- Wrap callback
- Get

```hljs javascript
Copyvar callback = txt.style.wordWrapCallback;
var scope = txt.style.wordWrapCallbackScope;

```hljs javascript
Copytxt.setWordWrapCallback(callback, scope);

## Content

- Get

```hljs javascript
Copyvar content = txt.text;

```hljs javascript
Copytxt.setText(text);
// txt.text = text;

- Append

```hljs javascript
Copytxt.appendText(text);
// txt.text += '\n' + text;

or

```hljs javascript
Copytxt.appendText(text, false);
// txt.text += text;

## Set style

```hljs javascript
Copytxt.setStyle(style);
txt.setFont(font);
txt.setFontFamily(family);
txt.setFontSize(size);
txt.setFontStyle(style);

## Set align

```hljs javascript
Copytxt.setAlign(align);

- `align` : `'left'`, `'center'`, `'right'`, `'justify'`

## Color

- Text color
- Get

```hljs javascript
Copyvar color = txt.style.color;

```hljs javascript
Copytxt.setColor(color);

```hljs javascript
Copytxt.setFill(color);

- Stroke color, thickness
- Get

```hljs javascript
Copyvar color = txt.style.stroke;
var thickness = txt.style.strokeThickness;

```hljs javascript
Copytxt.setStroke(color, thickness);

- Clear

```hljs javascript
Copytxt.setStroke();

- Background color
- Get

```hljs javascript
Copyvar color = txt.style.backgroundColor;

```hljs javascript
Copytxt.setBackgroundColor(color);

- Shadow
- Get

```hljs javascript
Copyvar color = txt.style.shadowColor;
var offsetX = txt.style.shadowOffsetX;
var offsetY = txt.style.shadowOffsetY;
var blur = txt.style.shadowBlur;
var stroke = txt.style.shadowStroke;
var enabled = txt.style.shadowFill;

```hljs javascript
Copytxt.setShadow(x, y, color, blur, shadowStroke, shadowFill);
txt.setShadowOffset(x, y);
txt.setShadowColor(color);
txt.setShadowBlur(blur);
txt.setShadowStroke(enabled);
txt.setShadowFill(enabled);

## Line spacing

This value is _added_ to the height of the font when calculating the overall line height.

```hljs javascript
Copyvar lineSpacing = txt.lineSpacing;

```hljs javascript
Copytxt.setLineSpacing(value);

## Letter spacing

```hljs javascript
Copyvar letterSpacing = txt.letterSpacing;

```hljs javascript
Copytxt.setLetterSpacing(value);

- `value` : Positive or negative value.

Enabling this feature will cause Phaser to render each character in this Text object
one by one, rather than use a draw for the whole string.
This makes it extremely expensive when used with either long strings, or lots of strings in total.

## Padding

```hljs javascript
Copyvar left = txt.padding.left;
var top = txt.padding.top;
var right = txt.padding.right;
var bottom = txt.padding.bottom;

```hljs javascript
Copytxt.setPadding(left, top, right, bottom);
// txt.setPadding(padding); // padding: {left, top, right, bottom}

## Max lines

```hljs javascript
Copyvar maxLines = txt.style.maxLines;

```hljs javascript
Copytxt.setMaxLines(max);

## Fixed size

```hljs javascript
Copyvar width = txt.style.fixedWidth;
var height = txt.style.fixedHeight;

```hljs javascript
Copytxt.setFixedSize(width, height);

## Test string

Set the test string to use when measuring the font.

```hljs javascript
Copytxt.style.setTestString(text);

## RTL

- Set `rtl` in style config when creating this text game object

- Change `rtl` during runtime

```hljs javascript
Copytxt.setRTL(rtl).setText(newContent);

- Invoke `setRTL` method before setting new content.

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = txt.createBitmapMask();

See mask

## Shader effects

Support preFX and postFX effects

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Sprite

Tile Sprite

---

# https://docs.phaser.io/phaser/concepts/gameobjects/display-list

# Display List

A Guide to the Phaser Display List to manage Game Object rendering order

Phaser uses a Display List to manage the order of Game Objects within the World. Every Scene has its own Display List. When you add a Game Object to a Scene, it is automatically added to the Display List. The Display List is a special type of container that allows you to control the order in which the Game Objects are rendered. By default, Game Objects are rendered in the order in which they were added to the Display List.

The Display List is also responsible for managing the position of Game Objects within the World. When you add a Game Object to the Display List, it is automatically positioned at the bottom of the list. This means that it will be rendered first, and therefore appear behind all other Game Objects.

You can change the position of a Game Object within the Display List by using its helper functions such as `sendToBack`, `moveDown`, `bringToTop` and `moveUp`. These allow you to move a Game Object around the Display List, thus influencing the order which things are rendered or checked for input events, as objects "on the top" get input priority.

In Phaser 2 it was possible to add a Game Object as a child of another Game Object. They were, in effect, self-contained Display Lists. This is no longer the case in Phaser 3. The only Game Object in Phaser 3 that can have children is the Container Game Object.

## Accessing the Display List in a Scene

Each Scene has a property called `children`, which is a reference to that Scene's Display List. This `children` property allows you to change each game object's rendering order.

```hljs js
Copylet displayList = this.children;

- `this` : Refers to the current scene.
- `children` : Represents the Display List object of the scene.

## Display List methods

Whenever you create a game object (e.g., sprites, images, text), Phaser automatically adds it to the scene's Display List. However, you can also manually add objects to the Display List if needed. The order in which objects are rendered depends on their order in the Display List. Objects added later are rendered above those added earlier unless you modify their depth or re-arrange them using various Display List methods.

### Adding Game Objects to the Display List

- Create a new Game Object and adding it using the Scene Game Object Factory.

```hljs js
Copylet player = this.add.sprite(400, 300, "player");

- Adding an existing Game Object

```hljs js
Copyconst player = new Phaser.GameObjects.Sprite(this, x, y, "player");
player.addToDisplayList();

Or

```hljs js
Copyconst player = new Phaser.GameObjects.Sprite(this, x, y, "player");
this.children.add(player);

- `this` : Refers to the current Scene

### Removing Game Objects from the Display List

- Use `destroy()` to remove a Game Object from your game if you don't ever plan to use it again. `destroy()` also removes it from the Display List, Update List, Input Manager and Physics Manager. As long as no reference to the Game Object exists within your own code it should become free for garbage collection by the browser.

```hljs js
Copylet player = this.add.sprite(400, 300, "player");
player.destroy();

- Removing an existing Game Object from the Scene's Display List.

```hljs js
Copylet player = this.add.sprite(400, 300, "player");
player.removeFromDisplayList();

```hljs js
Copylet player = this.add.sprite(400, 300, "player");
this.children.remove(player);

### Sorting Game Objects

- Move a Game Object to the top of the Display List.

```hljs js
Copythis.children.bringToTop(gameObject); // gameObject renders above all other objects

- Move a Game Object to the bottom of the Display List.

```hljs js
Copythis.children.sendToBack(gameObject); // gameObject renders below all other objects

- Sorting by Depth

By default Game Objects are created with a depth of 0. A Game Object with a higher depth value will always render in front of one with a lower value.
- Get Game Object depth

```hljs js
Copyconst depth = gameObject.depth; // Returns the depth of this Game Object within the Scene.

- Set Game Object depth

```hljs js
CopygameObject.setDepth(depth);

- Example

```hljs js
Copyplayer.setDepth(2); // Set a higher depth for the player to render above other objects
background.setDepth(0); // Set a lower depth for the background
this.children.depthSort(); // Sort all game objects based on their depth values

- Moving Game Objects up or down
- Move a Game Object up one position

```hljs js
Copythis.children.moveUp(gameObject);

- Move a Game Object down one position

```hljs js
Copythis.children.moveDown(gameObject);

### Retrieving a Game Object from the Display List

```hljs js
Copylet gameObject = this.children.getAt(index);

- `index` : The position of the game object in the Display List (starting at 0).

Example:

```hljs js
Copylet firstObject = this.children.getAt(0); // Retrieves the first object in the Display List

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Container

Dom Element

---

# https://docs.phaser.io/phaser/concepts/scenes/cross-scene-communication

# Cross Scene Communication

Phaser Cross Scene Communication

Now we know how to create and configure Scenes, let's get them talking to each other. There are several ways to achieve this: Calling a function directly, listening for an event or exchanging data via the registry. We'll cover each now:

### Calling a Scene Function

First we'll create two basic Scenes:

```hljs js
Copyclass SceneA extends Phaser.Scene {

constructor ()
{
super('MyFirstScene');
}

preload ()
{
this.load.image('asuna', 'assets/sprites/asuna_by_vali233.png');
}

create ()
{
this.input.on('pointerup', this.clickHandler, this);

this.add.text(10, 10, 'Click to get image', { font: '16px Courier', fill: '#00ff00' }).setDepth(1000);
}

clickHandler ()
{
let sceneB = this.scene.get('MySecondScene');

let position = sceneB.getPosition();

this.add.image(position.x, position.y, 'asuna');
}

}

class SceneB extends Phaser.Scene {

constructor ()
{
super('MySecondScene');
}

getPosition ()
{
let x = Phaser.Math.Between(0, 800);
let y = Phaser.Math.Between(0, 600);

return new Phaser.Math.Vector2(x, y);
}

Here `SceneA` listens out for pointer events. When it receives one it calls the `clickHandler` method. In here we grab a reference to SceneB. This is done using the Scenes key, which is `MySecondScene`. Once we have that, we can call any public methods which it exposes. In this case we're calling `getPosition`. This method returns a vec2 with a random location in it. We then add an image at that location.

It's not exactly a complex example, but you should get the idea: Any public function defined on a Scene can be called by any other scene.

### Listening for Scene Events

In this example instead of calling a function on SceneB directly, we're going to have it listen for events from SceneA. The set-up is the same as before, but our clickHandler is different:

constructor ()
{
super('GameScene');
}

preload ()
{
this.load.image('bg', 'assets/skies/sky4.png');
this.load.image('crate', 'assets/sprites/crate.png');
}

create ()
{
this.add.image(400, 300, 'bg');

for (let i = 0; i < 64; i++)
{
let x = Phaser.Math.Between(0, 800);
let y = Phaser.Math.Between(0, 600);

this.add.image(x, y, 'crate').setInteractive();
}

this.input.on('gameobjectup', this.clickHandler, this);
}

clickHandler (pointer, box)
{
// Disable our box
box.input.enabled = false;
box.setVisible(false);

// Dispatch a Scene event
this.events.emit('addScore');
}

Here, when a box is clicked, we dispatch the `addScore` event. Our SceneB looks like this:

```hljs js
Copyclass SceneB extends Phaser.Scene {

constructor ()
{
super({ key: 'UIScene', active: true });

this.score = 0;
}

create ()
{
// Our Text object to display the Score
let info = this.add.text(10, 10, 'Score: 0', { font: '48px Arial', fill: '#000000' });

// Grab a reference to the Game Scene
let ourGame = this.scene.get('GameScene');

// Listen for events from it
ourGame.events.on('addScore', function () {

this.score += 10;

info.setText('Score: ' + this.score);

}, this);
}
}

It creates a text object to display the score, gets a reference to SceneA and then listens for `addScore` events from it. When it receives one it updates the local score and Text object.

The advantage to this approach is that SceneA is not tightly coupled to your SceneB. As long as the event names don't change, SceneA can happily sit there, dispatching events as long as it likes, knowing that any other Scenes interested in them will pick them up. However, it does mean that SceneB is coupled to SceneA, as it needs a reference to it in order to listen to its event emitter. We can avoid this entirely by using the Game Registry.

### Exchange Data via the Game Registry

We're going to expand upon the previous example slightly. This time we will be using the Game Registry, which is an instance of the Data Manager Plugin, in order to exchange data. This is SceneA, our GameScene. It's the same as before, except we tint every other box red. If you click a red box then you lose one of your lives. If you click a normal box, you gain a point:

constructor ()
{
super('GameScene');

this.score = 0;
this.lives = 6;
}

create ()
{
// Store the score and lives in the Game Registry
this.registry.set('score', this.score);
this.registry.set('lives', this.lives);

this.add.image(400, 300, 'bg');

let box = this.add.image(x, y, 'crate').setInteractive();

if (i % 2)
{
box.setTint(0xff0000);
}
}

clickHandler (pointer, box)
{
if (this.lives === 0)
{
return;
}

// Disable our box
box.input.enabled = false;
box.setVisible(false);

// If the box was tinted red, you lose a life
if (box.tintTopLeft === 255)
{
this.lives--;
this.registry.set('lives', this.lives);
}
else
{
this.score++;
this.registry.set('score', this.score);
}
}

As the boxes are clicked we updated the respective values in the registry using the `registry.set` call.

Now to SceneB. This Scene is the same as before, except we've added another Text object to display the lives remaining:

this.scoreText;
this.livesText;
}

create ()
{
// Our Text object to display the Score
this.scoreText = this.add.text(10, 10, 'Score: 0', { font: '32px Arial', fill: '#000000' });
this.livesText = this.add.text(10, 48, 'Lives: 6', { font: '32px Arial', fill: '#000000' });

// Check the Registry and hit our callback every time the 'score' value is updated
this.registry.events.on('changedata', this.updateData, this);
}

updateData (parent, key, data)
{
if (key === 'score')
{
this.scoreText.setText('Score: ' + data);
}
else if (key === 'lives')
{
this.livesText.setText('Lives: ' + data);
}
}
}

It listens out for a `changedata` event from the Registry and invokes the `updateData` method if it receives one. This method is set 3 items: the parent, i.e. the owner of the Data Manager, which in this case is the Game. It then receives the string-based key of the entry that was changed, and then finally the new value of this entry.

By checking the key we can tell if it was the score or the lives that were changed and update our text objects respectively.

As you can see, using the Game Registry gives us a fully decoupled method of communication between multiple Scenes.

## Scene Updating and Rendering

We mentioned that the Game owns the truly global classes - two of these are the renderer and the Scene Manager. When the game steps, usually as a result of a Request Animation Frame update in the browser, it will tell the Scene Manager to update. The Scene Manager is responsible for looking after all Scenes in your game. It can add new ones, start and stop them and also takes direction from the game as to when to update them.

Scenes are stored in the Scene Manager in a list. The order of the Scenes in this list control two important factors. The first is that it controls the order in which Scenes are rendered. The second is that it controls the order in which Scenes are updated.

Each game step the Scene Manager will iterate through all of its Scenes in _reverse_ order, updating each one of them in turn. It first checks to see if the Scene is active (i.e. hasn't been sent to sleep or shut down) and then tells the Scene Systems to update. This in turn tells all Scene plugins to update, which tells all Game Objects to update, and so on. Essentially, everything your Scene does that isn't related to rendering happens at this point.

Once the update loop has completed, the Scene Manager then iterates through all Scenes, from ;
}
}

let config = {
type: Phaser.AUTO,
width: 800,
height: 600,
backgroundColor: '#392542',
parent: 'phaser-example',
scene: [ SceneA ]
};

let game = new Phaser.Game(config);

If you run the code as-is you'll see this:

**INSERT PICTURE HERE**

Now, let's add another Scene. It's going to do the same again but with a different color:

constructor ()
{
super({ key: 'SceneB', active: true });
}

create ()
{
let graphics = this.add.graphics();

graphics.fillStyle(0xff9933, 1);

graphics.fillRect(100, 200, 600, 300);
graphics.fillRect(200, 100, 100, 100);

this.add.text(220, 110, 'B', { font: '96px Courier', fill: '#000000' });
}
}

We need to update the scene array in the Game Config to add in this new Scene:

```hljs js
Copyscene: [ SceneA, SceneB ]

and the result is, as you'd expect, this:

Scene B appears over the top of Scene A because it has been added second in the Scene array passed in the Game Config. If you were to swap the order in this array, Scene A would appear on the top.

We'll add one final Scene just to complete the effect. Scene C is exactly the same as before. Our final order looks like this:

Because we used this array in the Game Config:

```hljs js
Copyscene: [ SceneA, SceneB, SceneC ]

Swap any of those elements around and you'll impact the order in which they are rendered and updated. Of course, you're not limited to just the order in which you specify the Scenes in your config. You can manipulate them using the ScenePlugin, which we'll demonstrate fully in a moment.

### Scene List Input

You may wonder why the Scene Manager iterates through the Scenes in reverse order when updating them. The reason is to do with Input. If you look at the image above you can see that our UI Scene is the top-most Scene in the display, because naturally we'd want the UI to sit over the top of the game itself. But imagine you have an interactive object in your game, such as a clickable area, and the UI overlaps with it. You'd nearly always want the UI to receive the input event, not the interactive object it is overlapping. This is why we iterate in reverse, so the Input Plugin has a chance to process the top-most items on the display list _and_ the top-most Scenes on the scene list first.

By default, if a Scene at the top of the scene list receives _and handles_ a valid input request, then all of the Scenes below that one will just skip their input processing in order to save time. You can change this behavior by calling `this.input.setGlobalTopOnly(false)` from any Scene. Every Scene will then process input, regardless of its position in the scene list.

By iterating in this order we're also able to have a UI Scene control the game scene immediately. For example, you could have a Pause icon, and clicking it would have a chance to tell the game to pause straight away, without having to wait for the next frame first. It just makes your game feel more responsive.

## Controlling Scene Order

The Scene Plugin has a selection of methods that allow you to precisely control the order of the Scenes in the scene list. This is crucial because their position in the list dictates the order in which they are drawn. It's not always possible to know in advance the order of your scenes when creating them, or which scenes are going to be running at the same time, so it's vital you can easily control their order.

It's worth stating that all interactions with Scenes should be done via the Scene Plugin. Every Scene owns an instance of this core plugin and it acts as an interface to the Scene Manager. You should rarely, if ever, access the Scene Manager directly. If you find yourself calling methods on the Scene Manager then change your code, because it likely has structural problems that will grow over time.

In short, use `this.scene` and **not** `this.game.scene`. I cannot iterate this enough.

The Scene Plugin has a lot more methods available on it. For example, you can do `this.scene.restart`, or `this.scene.launch` from the Scene Plugin, but _not_ from the Scene Manager. If you try calling a method and it complains it doesn't exist, double-check you're not going in via `game` by mistake, and correct your approach.

### Moving Scenes

There are 6 main commands you can use to arrange the Scene List:

```hljs js
CopybringToTop()
sendToBack()
moveUp()
moveDown()
moveAbove()
moveBelow()

You access these methods via the Scene Plugin:

```hljs js
Copythis.scene.bringToTop();

If you do not provide an argument then the action takes place on the current Scene, i.e. the one from which you called the method. So, the code above will try and move the current Scene to the top of the Scene List (assuming it is not already there.)

You can optionally provide a Scene to move:

```hljs js
Copythis.scene.bringToTop('SceneB');

This will try and move the Scene referenced by the key `SceneB` to the top of the Scene List. As well as a string you could also pass in a reference to the target Scene itself.

The `moveAbove` and `moveBelow` methods require you to provide a target Scene:

```hljs js
Copythis.scene.moveAbove('Game', 'PauseScreen');

The code above will move the `PauseScreen` Scene to be above the `Game` Scene in the Scene List. If you omit the 2nd argument then it would try to move the current (calling) Scene to be above the `Game` Scene.

### Scene Ordering Demo

Using just these 6 methods you can construct complete Scene layouts. Let's make an example to demonstrate this in action, as it's the kind of thing that is easier to see running than to read about.

Dull colored boxes, like in our previous example, are all good and well but it's time to spice things up. We're going to create an example with 7 Scenes. One of them will be our Controller Scene. This Scene will house the UI that you can use to manipulate the other Scenes. The other scenes will be unique graphical effects. Using a set of sci-fi game graphics we'll create Scenes for a rotating nebula, a glowing sun, an asteroid field, a planet, a space ship with an exhaust trail and some spinning space mines.

All of the code and assets for this example can be found in the Phaser 3 Examples repo. Because there is quite a lot of code I'm only going to cover the parts that are directly related to moving Scenes, but it's well worth digging through the files to get some ideas for other aspects of how Phaser 3 works.

The UI will allow you to select a Scene, then move it around the Scene List, toggle its active state and toggle visibility. Here is what it looks like:

The buttons on the left allow you to select a Scene. The one with the light on is the current Scene, the name of which is also displayed in the LCD screen. Below it, you can see which index it currently holds in the Scene List. In the image above the Nebula Scene is index 1, which means it is rendering right at the back. Using the d-pad you can adjust this position. Finally, the two toggles on the right control the visible and active state of the selected Scene.

All of the code for this UI can be found in the Controller.js file. It's nothing more than a few images and input events but you'll see in the events how we link from the Controller Scene to the target scene.

As you've seen in the UI there are 6 Scenes to select from. In the following screen shot you can see them all running together. Click the shot for a link to the example so you can play with it:

By using the controls you can re-arrange the Scenes. In the following we've hidden the Nebula entirely, bought the sun right to the front and made the ship fly behind the planet.

Play with the controls and view the source until you've got a good feel for how the Scene List works.

## Spawning Multiple Scenes

Things are going to get a bit more crazy now. So far we have worked on the basis of one class = one Scene. However, that doesn't have to be the case. You can actually spawn multiple versions of the same Scene over and over again, all running at the same time if you so wish.

Here's a basic Scene class called `Spawn`:

```hljs js
Copyclass Spawn extends Phaser.Scene {

constructor (handle)
{
super(handle);
}

create ()
{
this.add.image(0, 0, 'phaserRulez');
}

Rather than adding this to the scene array in the Game Config, let's create an instance of it at run-time:

```hljs js
Copylet key = 'Spawn1';
let spawned = new Spawn(key);

this.scene.add(key, spawned, true);

We define a key, create a new Spawn class and then add it into the Scene Manager (the final argument tells the Scene Manager to run it immediately)

Now, imagine that in a loop:

```hljs js
Copyfor (let i = 0; i < 10; i++)
{
let key = 'Spawn' + i;
let spawned = new Spawn(key);

this.scene.add(key, spawned, true);
}

Suddenly you've got 10 copies of the Spawn Scene running. You can get to any of them using their key:

```hljs js
Copylet ref = this.scene.get('Spawn5');

Once you have a reference to the Scene you can control it just like any other. Move it around the Scene List, pause it, hide it and so on.

There's one more element we need to cover before we can build our demo showing this all off, and that's how Scenes render.

### Scene Rendering

We've already covered in detail that the order of the Scene on the Scene List controls when it renders, and it's visible state controls if it renders at all. However, there's one last element to consider: the visual size of the Scene.

By default a new Scene will be the same size as your game. It will create its own Camera Manager and the default camera will be set to your game dimensions. This is fine in lots of cases, but not all. You can change that behavior by setting the size of the default camera:

```hljs js
Copyclass MiniScene extends Phaser.Scene {

create ()
{
this.cameras.main.setViewport(0, 0, 300, 200);
}

The above code tells our Scene that it has one camera that is 300 x 200 pixels in size and top-left positioned at 0 x 0. We can now add whatever we like to the Scene: graphics, images, animations, physics, but they will only render within the 300 x 200 window. Everything else gets clipped away.

In this code the Scene is a fixed size and in a fixed position. It can be moved by simply moving the main camera:

```hljs js
Copythis.cameras.main.setPosition(128, 256);

Now the Scene will render at 128 x 256. It is still 300 x 200 in size, we only changed where within the game canvas it is rendering at. There are no restrictions on where the Scene can be placed (within reason) and they can be stacked on-top of each other as much as you like.

If you factor in these two things: That Scenes can have a size other than the game canvas size, and you can position them anywhere, you should start to get an inkling of what's possible. Which leads us nicely onto our final demo.

### Multi Scene Demo

In order to demonstrate the ability to spawn multiple Scenes and move them around the canvas I'm going to create a mock desktop environment, leaning on my love of retro and borrowing the Amiga workbench as my source of inspiration. As with the previous demo everything has been split into single files and is available in the examples repo, so you can pick it apart at will.

The concept for this demo is as follows:

You will see an emulated Amiga desktop with a single disk icon. Clicking the icon will open a window containing six different demos. Clicking any of the icons will launch that demo. You can click the demo icons as many times as you like, it will just keep on spawning copies of the demos all over the screen. You can drag any of the windows around and doing so brings the window to the top of the Scene List. Finally, the demo will run at the size of the browser and will respond to resize events.

Although visually there are controls for resizing and closing the windows we're not going to implement that here for the sake of brevity. Feel free to do so if you wish though, and make sure to send me a link to your demo :)

The six different demos you can launch are:

1. **Eyes** \- a pair of googly eyes that follow the pointer around the screen. If you spawn a bunch of these it can get quite surreal!
2. **Starfield** \- a classic demo effect using a Blitter to draw some stars.
3. **Juggler** \- an example of a looped animation playing.
4. **Boing** \- a small physics demo. The ball is bouncing within an Arcade Physics world set to the size of the window.
5. **Clock** \- a real clock based on your system time.
6. **Invaders** \- a playable Space Invaders game. Use the left/right cursors to control the ship. It will automatically fire. Spawn a whole bunch of these and you can play them all at once!

Finally, here is a screen shot of each of the demos running. Click it to open the demo so you can experience it for yourself:

Honestly, I'm quite pleased with this :) It's important to remember that every little window that opens is like its own Phaser Game instance in its own right, isolated from everything else.

The above demo even runs on tablets, and likely phones too although the screen would be tiny. You can't play the invaders game on mobile but even so, you can spawn demos and drag them around. It's quite surprising how many you can get running before it starts to suffer.

If you look at the code for each Scene you'll see they are fundamentally quite simple. There's very little in them that you will not have encountered before. The Controller is the Scene in charge of handling the 'desktop' and preloading all of the demo assets. It does all of the grunt work and then manages the windows as they open up. As with the Scene Ordering demo there's very little in the Controller beyond images and input events, although there is one thing worth covering in more detail: How to drag the Scenes around.

### How the Scene dragging is done

There are lots of different ways you could achieve this effect, but for the sake of this demo I went with the following. When you click a demo icon, such as the Juggler, it calls this function:

```hljs js
CopycreateWindow (func)
{
var x = Phaser.Math.Between(400, 600);
var y = Phaser.Math.Between(64, 128);

var handle = 'window' + this.count++;

var win = this.add.zone(x, y, func.WIDTH, func.HEIGHT).setInteractive().setOrigin(0);

var demo = new func(handle, win);

this.input.setDraggable(win);

win.on('drag', function (pointer, dragX, dragY) {

this.x = dragX;
this.y = dragY;

demo.refresh()

});

this.scene.add(handle, demo, true);
}

this.createWindow(Juggler);

We pass in a reference to the Scene class we wish to spawn. It then assigns it a new key (i.e. `window7`) and creates a Zone Game Object within the Controller Scene. This Zone is in the same position and the same size as the Scene that was just created. It is set to be interactive and draggable. Finally, we listen for its drag event and then call the `refresh` function on the Scene it is linked to. All `refresh` does is call Camera setPosition and brings the Scene to the top.

Zones are non-rendering Game Objects. They have no visual attributes and don't take up any rendering time - but you can still make them interactive and click or drag them and we utilize this fact to link the invisible Zone to our visible Scene.

It's not authentic because it means you can drag the window from any point, not just from the title bar like in a real OS, but that would be easy to change by just giving the Zone a smaller height. Alternatively, you could allow the Scene to deal with the input events itself and drag it from there, but I liked the simplicity of this method so kept it in this demo. Remember, there's rarely one way to skin a cat.

I hope you've had fun learning about what Scenes can do, how they work and how to visually manipulate them. As mentioned before, all of the code can be found in the repo and will work with Phaser 3.7.0 and above.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Scenes

Textures

---

# https://docs.phaser.io/phaser/concepts/gameobjects/particles

# Particles

A Guide to the Phaser Particle System

A Particle Emitter is a special kind of Game Object that controls a pool of Particles.

Particle Emitters are created via a configuration object. The properties of this object can be specified in a variety of formats, given you plenty of scope over the values they return, leading to complex visual effects. Here are the different forms of configuration value you can give:

## An explicit static value:

```hljs js
Copyx: 400

The x value will always be 400 when the particle is spawned.

## A random value:

```hljs js
Copyx: [ 100, 200, 300, 400 ]

The x value will be one of the 4 elements in the given array, picked at random on emission.

## A custom callback:

```hljs js

return value + 50;
}

The x value is the result of calling this function. This is only used when the particle is emitted, so it provides it's initial starting value. It is not used when the particle is updated (see the onUpdate callback for that)

## A start / end object:

This allows you to control the change in value between the given start and end parameters over the course of the particles lifetime:

```hljs js
Copyscale: { start: 0, end: 1 }

The particle scale will start at 0 when emitted and ease to a scale of 1 over the course of its lifetime. You can also specify the ease function used for this change (the default is Linear):

```hljs js
Copyscale: { start: 0, end: 1, ease: 'bounce.out' }

## A start / end random object:

The start and end object can have an optional `random` parameter. This forces it to pick a random value between the two values and use this as the starting value, then easing to the 'end' parameter over its lifetime.

```hljs js
Copyscale: { start: 4, end: 0.5, random: true }

The particle will start with a random scale between 0.5 and 4 and then scale to the end value over its lifetime. You can combine the above with the `ease` parameter as well to control the value easing.

## An interpolation object:

You can provide an array of values which will be used for interpolation during the particles lifetime. You can also define the interpolation function to be used. There are three provided: `linear` (the default), `bezier` and `catmull`, or you can provide your own function.

```hljs js
Copyx: { values: [ 50, 500, 200, 800 ], interpolation: 'catmull' }

The particle scale will interpolate from 50 when emitted to 800 via the other points over the course of its lifetime. You can also specify an ease function used to control the rate of change through the values (the default is Linear):

```hljs js
Copyx: { values: [ 50, 500, 200, 800 ], interpolation: 'catmull', ease: 'bounce.out }

## A stepped emitter object:

The `steps` parameter allows you to control the placement of sequential particles across the start-end range:

```hljs js
Copyx: { steps: 32, start: 0, end: 576 }

Here we have a range of 576 (start to end). This is divided into 32 steps.

The first particle will emit at the x position of 0. The next will emit at the next 'step' along, which would be 18. The following particle will emit at the next step, which is 36, and so on. Because the range of 576 has been divided by 32, creating 18 pixels steps. When a particle reaches the 'end' value the next one will start from the beginning again.

## A stepped emitter object with yoyo:

You can add the optional `yoyo` property to a stepped object:

```hljs js
Copyx: { steps: 32, start: 0, end: 576, yoyo: true }

As with the stepped emitter, particles are emitted in sequence, from 'start' to 'end' in step sized jumps. Normally, when a stepped emitter reaches the end it snaps around to the start value again. However, if you provide the 'yoyo' parameter then when it reaches the end it will reverse direction and start emitting back down to 'start' again. Depending on the effect you require this can often look better.

## A min / max object:

This allows you to pick a random float value between the min and max properties:

```hljs js
Copyx: { min: 100, max: 700 }

The x value will be a random float between min and max.

You can force it select an integer by setting the 'int' flag:

```hljs js
Copyx: { min: 100, max: 700, int: true }

Or, you could use the 'random' array approach (see below)

## A random object:

This allows you to pick a random integer value between the first and second array elements:

```hljs js
Copyx: { random: [ 100, 700 ] }

The x value will be a random integer between 100 and 700 as it takes the first element in the 'random' array as the 'min' value and the 2nd element as the 'max' value.

## Custom onEmit and onUpdate callbacks:

If the above won't give you the effect you're after, you can provide your own callbacks that will be used when the particle is both emitted and updated:

```hljs js
Copyx: {

return value;
},

return value;
}
}

You can provide either one or both functions. The `onEmit` is called at the start of the particles life and defines the value of the property on birth.

The `onUpdate` function is called every time the Particle Emitter updates until the particle dies. Both must return a value.

The properties are:

`particle` \- A reference to the Particle instance.
`key` \- The string based key of the property, i.e. 'x' or 'lifespan'.
`t` \- The current normalized lifetime of the particle, between 0 (birth) and 1 (death).
`value` \- The current property value. At a minimum you should return this.

By using the above configuration options you have an unlimited about of control over how your particles behave.

## v3.55 Differences

Prior to v3.60 Phaser used a `ParticleEmitterManager`. This was removed in v3.60 and now calling `this.add.particles` returns a `ParticleEmitter` instance instead.

In order to streamline memory and the display list we have removed the `ParticleEmitterManager` entirely. When you call `this.add.particles` you're now creating a `ParticleEmitter` instance, which is being added directly to the
display list and can be manipulated just like any other Game Object, i.e. scaled, rotated, positioned, added to a Container, etc. It now extends the `GameObject` base class, meaning it's also an event emitter, which allowed us
to create some handy new events for particles.

So, to create an emitter, you now give it an xy coordinate, a texture and an emitter configuration object (you can also set this later, but most commonly you'd do it on creation). I.e.:

```hljs js
Copyconst emitter = this.add.particles(100, 300, 'flares', {
frame: 'red',
angle: { min: -30, max: 30 },
speed: 150
});

This will create a 'red flare' emitter at 100 x 300.

Please update your code to ensure it adheres to the new function signatures.

## Advanced Emitter Examples

First, load an image:

```hljs javascript
Copythis.load.image(key, url);

Reference: load image

## Add particle

```hljs javascript
Copyvar particles = this.add.particles(x, y, texture, {

// EmitterOp
accelerationX: 0,
accelerationY: 0,
alpha: 1,
angle: { min: 0, max: 360 },
bounce: 0,
color: undefined,
delay: 0,
hold: 0,
lifespan: 1000,
maxVelocityX: 10000,
maxVelocityY: 10000,
moveToX: 0,
moveToY: 0,
quantity: 1,
rotate: 0,
scaleX: 1,
scaleY: 1,
// scale:
speedX: 0,
speedY: 0,
speed:
tint: 0xffffff,
x: 0,
y: 0,

// Emitter properties
active:
advance:
blendMode:
colorEase:
deathCallback:
deathCallbackScope:
duration:
emitCallback:
emitCallbackScope:
// callbackScope
frequency:
gravityX:
gravityY:
maxAliveParticles:
maxParticles:
name:
emitting:
particleBringToTop:
particleClass:
radial:
sortCallback:
sortOrderAsc:
sortProperty:
stopAfter:
tintFill:
timeScale:
trackVisible:
visible:

// Position
// emitZone : random-zone, edge-zone
// random-zone
emitZone: {
type: 'random',
source: geom,
},

// edge-zone
emitZone:{
type: 'edge',
source: geom,
quantity: 1,
stepRate: 0,
total: -1,
yoyo: false,
seamless: true
},

deathZone: {
type: 'onEnter', // 'onEnter', or 'onLeave'
source: geom,
},

bounds: // {x, y, w, h}, or {x, y, width, height}, or Phaser.Geom.Rectangle
collideLeft: true,
collideRight: true,
collideTop: true,
collideBottom: true,

follow:
followOffset:{
x: 0,
y: 0
},

// Texture
texture:
frame:
anim: [], // string, or array of string

reserve: 0,
advance: 0
});

- Parameters of EmitterOp : Number, Random Array, Custom Callback, Stepped start/end, Eased start/end, min/max, Random object, Custom onEmit onUpdate, Interpolation
- A number

- `{min, max}` : Pick a random value between min and max

- `{min, max, int}`

- `{start, end}` : Pick values incremented continuously across a range. ( `ease` = `'Linear'`)
- `{start, end, ease}`
- `{start, end, ease, easeParams}`
- `{start, end, steps}` : Pick values incremented by steps across a range.

- `{start, end, steps, yoyo: true}`

- `{start, end, random}`
- `random`: `true` or `false`
- `{random: [start, end]}` : Pick a random number between start and and.

- `[a, b, c, d]` : Pick a random number from an array.

- `{min, max, steps}` : Pick values between min to max, with steps.

- `{ values: [ a, b, c, d ], interpolation: 'catmull', ease: 'linear' }` : Interpolation ( `linear`, `bezier`, `catmull`) in values array.

- `function(particle, key, t, value) { return value; }`

- `{onEmit, onUpdate}` : Get return value from a function invoking.

```hljs javascript
Copyfunction(particle, key, t, value) {
return value;
}

- `active` : Whether this emitter updates itself and its particles.
- `false` : Equal to pause.
- `advance` : If you wish to _fast forward_ the emitter in time, set this value to a number representing the amount of ms the emitter should advance.

- `blendMode` : See blend mode

- `colorEase` : The string-based name of the Easing function to use if you have enabled Particle color interpolation via the `color` property, otherwise has no effect.

- `deathCallback`, `deathCallbackScope`

```hljs javascript
Copyfunction(particle) {

}

- `emitCallback`, `emitCallbackScope`

```hljs javascript
Copyfunction(particle, emitter) {

- `duration` : Limit the emitter to emit particles for a maximum of `duration` ms.
- `0` : Forever, default behavior.
- `follow` : A Game Object whose position is used as the particle origin.

- `followOffset` : The offset of the particle origin from thefollow target.

- `frequency`
- `0` : One particle flow cycle for each logic update (the maximum flow frequency).

- `-1` : Exploding emitter.
- `hold` : Frozen or 'held in place' after it has finished its lifespan for a set number of ms

- `gravityX`, `gravityY`

- `maxAliveParticles`

- `maxParticles`
- `0` : Unlimited.

- `frames` : One or more texture frames, or a configuration object.
- String or number value

- Array of string or number value

- Configuration object :

```hljs javascript
Copy{
frames: [],
cycle: false,
quantity: 1
}

- `anim` :
- String

- Array of string

```hljs javascript
Copy{
anim: [], // Array of string
cycle: false,
quantity: 1
}

- `particleBringToTop` :
- `true` : Newly emitted particles are added to the top of the particle list, i.e. rendered above those already alive. Default behavior.
- `sortCallback` : The callback used to sort the particles.

- `sortProperty` : Optionally sort the particles before they render based on this property. The property must exist on the `Particle` class, such as `y`, `lifeT`, `scaleX`, etc.

- `sortOrderAsc` : When `sortProperty` is defined this controls the sorting order, either ascending or descending.

- `stopAfter` : The Particle Emitter will stop emitting particles once this total has been reached. It will then enter a 'stopped' state, firing the `STOP` event.

- `radial` : A radial emitter will emit particles in all directions between angle min and max,

Already alive particles will continue to update until they expire.
- `false` : Equal to stop
- `tintFill` :

- `timeScale` : The time rate applied to active particles, affecting lifespan, movement, and tweens. Values larger than 1 are faster than normal.

- `trackVisible` : Whether the emitter's `visible` state will track the follow target's visibility state.

- `emitZone` :
- Emit zone

```hljs javascript
Copy{
type: 'random',
source: geom,
}

- Emit edge

```hljs javascript
Copy{
type: 'edge',
source: curve,

quantity: 1,
stepRate: 0,
yoyo: false,
seamless: true
}

- `deathZone`

```hljs javascript
Copy{
type: 'onEnter', // 'onEnter', or 'onLeave'
source: geom
}

- `bounds` : `{x, y, w, h}`, or `{x, y, width, height}`, or Rectangle.

- `collideLeft`, `collideRight`, `collideTop`, `collideBottom` : Whether particles interact with the left/right/top/bottom edge of the bounds.

- `name`

- `particleClass`

## Control

- Start

```hljs javascript
Copyemitter.start();
// emitter.start(advance, duration);

- `advance` : Advance this number of ms in time through the emitter.
- `duration` : Limit this emitter to only emit particles for the given number of ms. Setting this parameter will override any duration already set in the Emitter configuration object.
- Stop

```hljs javascript
Copyemitter.stop();
// emitter.stop(kill);

- `kill` :
- `true` : Kill all particles immediately
- `false` : Leave them to die after their lifespan expires. Default behavior.
- Pause

```hljs javascript
Copyemitter.pause(); // set `active` to false

- Resume

```hljs javascript
Copyemitter.resume(); // set `active` to true

- Starts (or restarts) a particle flow.

```hljs javascript
Copyemitter.flow(frequency, count, stopAfter);

- `frequency` :

- `-1` : Explosion mode.
- `count` : The number of particles to emit at each flow cycle.
- `stopAfter` : Stop this emitter from firing any more particles once this value is reached.
- Setting this parameter will override any `stopAfter` value already set in the Emitter configuration object.
- `0` : Unlimited
- Explode : Puts the emitter in explode mode ( `frequency` = `-1`), stopping any current particle flow, and emits several particles all at once.

```hljs javascript
Copyemitter.explode();
// emitter.explode(count, x, y);

- `count` : The number of Particles to emit.
- `x`, `y` : The x, y coordinate to emit the Particles from.
- Emit : Emits particles at the given position. If no position is given, it will emit from this Emitters current location.

```hljs javascript
Copyemitter.emitParticleAt();
// emitter.emitParticleAt(x, y, count);

or

```hljs javascript
Copyemitter.emitParticle(count, x, y);

- `count` : The number of Particles to emit.
- `x`, `y` : The x, y coordinate to emit the Particles from.
- Fast forward

```hljs javascript
Copyemitter.fastForward(time, delta);

- `time` : The number of ms to advance the Particle Emitter by.
- `delta` : The amount of delta to use for each step. Defaults to `1000 / 60`.
- Kill all alive particles

```hljs javascript
Copyemitter.killAll()

## Follow target

```hljs javascript
Copyemitter.startFollow(target);
// emitter.startFollow(target, offsetX, offsetY, trackVisible);

- `target` : The Game Object to follow.
- `offsetX`, `offsetY` : Horizontal/vertical offset of the particle origin from the Game Object.
- `trackVisible` : Whether the emitter's visible state will track the target's visible state.
- Stop

```hljs javascript
Copyemitter.stopFollow();

## Frame

```hljs javascript
Copyemitter.setEmitterFrame(frames);
// emitter.setEmitterFrame(frames, pickRandom, quantity);

- `pickRandom` :
- `true` : Whether frames should be assigned at random from `frames`. Default behavior.
- `quantity` : The number of consecutive particles that will receive each frame. Default value is `1`.

## Animation

```hljs javascript
Copyemitter.setAnim(anims);
// emitter.setAnim(anims, pickRandom, quantity);

- `anims` : One or more animations, or a configuration object.
- String

```hljs javascript
Copy{
anims: [],
cycle: false,
quantity: 1
}

- `anims` : One or more animations names, or Play Animation Config objects.
- String
- Array of string
- Animation config
- Array of Animation config
- `pickRandom` :
- `true` : Whether frames should be assigned at random from `frames`. Default behavior.
- `quantity` : The number of consecutive particles that will receive each frame. Default value is `1`.

## Particle

- Speed

```hljs javascript
Copyemitter.setParticleSpeed(x, y);

```hljs javascript
Copyemitter.speedX = x;
emitter.speedY = y;

- Changes the emitter from radial to a point emitter
- Bounce

```hljs javascript
Copyemitter.bounce = value;

- `0` : No bounce
- `1` : Full rebound
- Max velocity

```hljs javascript
Copyemitter.maxVelocityX = x;
emitter.maxVelocityY = y;

- Gravity

```hljs javascript
Copyemitter.setParticleGravity(x, y);

```hljs javascript
Copyemitter.gravityX = x;
emitter.gravityY = y;

- Acceleration

```hljs javascript
Copyemitter.accelerationX = x;
emitter.accelerationY = y;

- Lifespan : Sets the lifespan of newly emitted particles in milliseconds.

```hljs javascript
Copyemitter.setParticleLifespan(time);

```hljs javascript
Copyemitter.lifespan = time

- The number of milliseconds to wait after emission before the particles start updating.

```hljs javascript
Copyemitter.delay = time;

- The number of milliseconds to wait after a particle has finished its life before it will be removed.

```hljs javascript
Copyemitter.hold = time;

- Tint

```hljs javascript
Copyemitter.setParticleTint(tint);

```hljs javascript
Copyemitter.particleTint = tint;

- Webgl only
- Color

```hljs javascript
Copyemitter.particleColor = color; // WebGL only.
emitter.colorEase = easeName;

- Webgl only
- Alpha

```hljs javascript
Copyemitter.setParticleAlpha(alpha);

```hljs javascript
Copyemitter.setAlpha(alpha);

```hljs javascript
Copyemitter.particleAlpha = alpha;

- Scale : Sets the vertical and horizontal scale of the emitted particles.

```hljs javascript
Copyemitter.setParticleScale(x, y);

```hljs javascript
Copyemitter.setScale(x, y);

```hljs javascript
Copyemitter.particleScaleX = x;
emitter.particleScaleY = y;

- Position

```hljs javascript
Copyemitter.particleX = x;
emitter.particleY = y;

- Position to move toward

```hljs javascript
Copyemitter.moveToX = x;
emitter.moveToY = y;

- The angle at which the particles are emitted.

```hljs javascript
Copyemitter.particleAngle = angle; // degrees

- The rotation (or angle) of each particle when it is emitted.

```hljs javascript
Copyemitter.particleRotate = rotation; // degrees

- The number of particles that are emitted each time an emission occurs

```hljs javascript
Copyemitter.quantity = quantity;

- Hard limit the amount of particle objects

```hljs javascript
Copyvar count = emitter.maxParticles;

- Whether this emitter is at its limit

```hljs javascript
Copyvar atLimit = emitter.atLimit();

- Alive (active) particles
- Amount of alive particles

```hljs javascript
Copyvar count = emitter.getAliveParticleCount();

```hljs javascript
Copyvar count = emitter.alive.length;

- Add callback for newly emitted particle

```hljs javascript
Copyvar callback = function(particle, emitter) { /* ... */ }
emitter.onParticleEmit(callback, context);

- Clear callback

```hljs javascript
Copyemitter.onParticleEmit();

- For each alive particle

```hljs javascript
Copyvar callback = function(particle, emitter) { /* ... */ }
emitter.forEachAlive(callback, context);

- Dead (inactive) particles
- Amount of dead particles

```hljs javascript
Copyvar count = emitter.getDeadParticleCount();

```hljs javascript
Copyvar count = emitter.dead.length;

- Add callback for each particle death

```hljs javascript
Copyvar callback = function(particle, emitter) { /* ... */ }
emitter.onParticleDeath(callback, context);

```hljs javascript
Copyemitter.onParticleDeath();

- For each dead particle

```hljs javascript
Copyvar callback = function(particle, emitter) { /* ... */ }
emitter.forEachDead(callback, context);

- Add dead particles into pool

```hljs javascript
Copyemitter.reserve(count);

- Total (alive + dead) number of particles.

```hljs javascript
Copyvar count = emitter.getParticleCount();

- Active particles overlaps with a Rectangle Geometry object or an Arcade Physics Body.

```hljs javascript
Copyvar particles = emitter.overlap(target);

- `target` :
- A Rectangle.
- Arcade Physics Body.
- `particles` : An array of Particles that overlap with the given target
- Gets a bounds Rectangle calculated from the bounds of all currently active Particles

```hljs javascript
Copyemitter.getBounds(padding, advance, delta, output);

- `padding` : The amount of padding, in pixels, to add to the bounds Rectangle.
- `advance`, `delta` : _Fast forward_ in time to try and allow the bounds to be more accurate.
- `output` : The Rectangle to store the results in.
- Gets the bounds of this particle as a Geometry Rectangle

```hljs javascript
Copyparticle.getBounds();

### Render order

- Sort by property

```hljs javascript
Copyemitter.setSortProperty(property, ascending);

- `property` : The property on the `Particle` class to sort by.
- `ascending` : Should the particles be sorted in ascending or descending order?
- Sort by callback

```hljs javascript
Copyvar callback = function(particleA, particleB) {
return 1; // 0,1,-1
}
emitter.setSortCallback(callback);

## Emitter

- Frequency

```hljs javascript
Copyemitter.setFrequency(frequency);
// emitter.setFrequency(frequency, quantity);

- `-1` : Explosion mode.
- `quantity` : The number of particles to release at each flow cycle or explosion.
- Quantity

```hljs javascript
Copyemitter.setQuantity(quantity);

- `quantity` : The number of particles to release at each flow cycle or explosion.

## Zone

## Emit zone

### Add emit zone

```hljs javascript
Copyvar zone = emitter.addEmitZone({
type: 'random',
source: geom,
});

- `source` : Geom like Circle, Ellipse, Rectangle, Triangle, Polygon, or Path or Curve, which has `getRandomPoint(point)` method
- Custom zone

```hljs javascript
Copy{
getRandomPoint: function(point) {
// point.x = ...
// point.y = ...
return point;
}
}

### Add emit edge

```hljs javascript
Copyvar zone = emitter.addEmitZone({
type: 'edge',
source: curve,

quantity: 1,
stepRate: 0,
yoyo: false,
seamless: true,
total: -1
});

- `source` : Geom like Circle, Ellipse, Rectangle, Triangle, Polygon, or Path or Curve, which has `getPoints(quantity, stepRate)` method
- Custom edge

```hljs javascript
Copy{
getPoints: function(quantity, stepRate) {
// output = [point0, point1, ...]; // point: Phaser.Math.Vector2, or {x, y}
return output;
}
}

- `quantity` : The number of particles to place on the source edge. Set to 0 to use `stepRate` instead.

- `stepRate` : The distance between each particle. When set, `quantity` is implied and should be set to 0.

- `yoyo` : Whether particles are placed from start to end and then end to start. Default is `false`.

- `seamless` : Whether one endpoint will be removed if it's identical to the other. Default is `true`.

- `total` : The total number of particles this zone will emit before passing over to the next emission zone in the Emitter.

\- Any geometry like circle, ellipse, line, polygon, rectangle, triangle source has _quantity_, or _stepRate_
\- Curve source has _quantity_, or _stepRate_
\- Path source only has _quantity_

### Set emit zone

```hljs javascript
Copyemitter.setEmitZone(zone);

- `zone` : The Emit Zone to set as the active zone.
- A zone object
- A number as index

### Zone source

- Get

```hljs javascript
Copy// var zone = emitter.emitZones[i];
var source = zone.source;

- (Edge type only) Update points of curve source

```hljs javascript
Copyzone.updateSource();

- (Edge type only) Set source to another curve, also update points

```hljs javascript
Copyzone.changeSource(curve);

### Remove emit zone

```hljs javascript
Copyemitter.removeEmitZone(zone)

### Clear emit zone

```hljs javascript
Copyemitter.clearEmitZones();

```hljs javascript
Copyemitter.emitZones.length = 0;
emitter.zoneIndex = 0;

## Death zone

```hljs javascript
Copyvar zone = emitter.addDeathZone({
type: 'onEnter',
source: geom
});

- `type` : `'onEnter'` or `'onLeave'`
- `source` : Geom like Circle, Ellipse, Rectangle, Triangle, Polygon
- Custom `source` :

```hljs javascript
Copy{
contains: function (x, y) {
// ...
return bool;
}
}

### Remove death zone

```hljs javascript
Copyemitter.removeDeathZone(zone)

### Clear death zone

```hljs javascript
Copyemitter.clearDeathZones();

```hljs javascript
Copyemitter.deathZones.length = 0;

## Events

- Starts emission of particles.

```hljs javascript
Copyemitter.on('start', function(emitter) {

})

- Explodes a set of particles.

```hljs javascript
Copyemitter.on('explode', function(emitter, particle) {

- Death Zone kills a Particle instance.

```hljs javascript
Copyemitter.on('deathzone', function(emitter, particle, zone) {

- Stops emission

```hljs javascript
Copyemitter.on('stop', function(emitter) {

- Directly call the `ParticleEmitter.stop` method.
- Stop after a set time via the `duration` property.
- Stop after a set number of particles via the `stopAfter` property.
- Complete Event, no particles are still rendering at this point in time.

```hljs javascript
Copyemitter.on('complete', function(emitter) {

## Bounds

- Add bounds

```hljs javascript
Copyvar bounds = emitter.addParticleBounds(x, y, width, height);
// var bounds = emitter.addParticleBounds(x, y, width, height, collideLeft, collideRight, collideTop, collideBottom);

```hljs javascript
Copyvar bounds = emitter.addParticleBounds(rect);

- `x, y, width, height`, `{x, y, width, height}`, or `{x, y, w, h}`, or Rectangle : Bounds
- `collideLeft`, `collideRight`, `collideTop`, `collideBottom` : Whether particles interact with the left/right/top/bottom edge of the bounds.
- Collide edges

```hljs javascript
Copybounds.collideLeft = enabled;
bounds.collideRight = enabled;
bounds.collideTop = enabled;
bounds.collideBottom = enabled;

- Bound rectangle

```hljs javascript
Copyvar rect = bounds.bounds;

- `rect` : Rectangle

## Gravity well

- Create a gravity well

```hljs javascript
Copyvar well = particles.createGravityWell({
// x: 0,
// y: 0,
// power: 0,
// epsilon: 100,
// gravity: 50
});

- Enable
- Active

```hljs javascript
Copywell.active = true;

- Inactive

```hljs javascript
Copywell.active = false;

```hljs javascript
Copywell.x = x;
well.y = y;

```hljs javascript
Copywell.gravity = value;

- Power

```hljs javascript
Copywell.power = value;

## Custom Particle Processor

- Declare Particle Processor class

```hljs javascript
Copyclass MyParticleProcessor extends Phaser.GameObjects.Particles.ParticleProcessor {
constructor() {
super(x, y, active);
// ...
}

update(particle, delta, step, t) {
// particle : The Particle to update.
// delta : The delta time in ms.
// step : The delta value divided by 1000.
// t : The current normalized lifetime of the particle, between 0 (birth) and 1 (death).
}

destroy() {
super.destroy();
}
}

- Override `update` method
- Add to emitter

```hljs javascript
Copyvar myParticleProcessor = emitter.addParticleProcessor(new MyParticleProcessor);

## Custom particle class

```hljs javascript
Copyclass MyParticle extends Phaser.GameObjects.Particles.Particle {
constructor (emitter) {
super(emitter);
/* ... */
}

update (delta, step, processors) {
super.update(delta, step, processors);
/* ... */
}
}

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = emitter.createBitmapMask();

See mask

## Shader effects

Support postFX effects

No preFX effect support

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Nine Slice

Plane

---

# https://docs.phaser.io/phaser/concepts/gameobjects/graphics

# Graphics

A Guide to the Phaser Graphics Game Object

A Graphics object is a way to draw primitive shapes to your game. Primitives include forms of geometry, such as Rectangles, Circles, and Polygons. They also include lines, arcs and curves. When you initially create a Graphics object it will be empty. To draw to it you must first specify a line style or fill style (or both), draw shapes using paths, and finally fill or stroke them.

```hljs js
Copygraphics.lineStyle(5, 0xff00ff, 1.0);
graphics.beginPath();
graphics.moveTo(100, 100);
graphics.lineTo(200, 200);
graphics.closePath();
graphics.strokePath();

There are also many helpful methods that draw and fill/stroke common shapes for you.

```hljs js
Copygraphics.lineStyle(5, 0xff00ff, 1.0);
graphics.fillStyle(0xffffff, 1.0);
graphics.fillRect(50, 50, 400, 200);
graphics.strokeRect(50, 50, 400, 200);

When a Graphics object is rendered it will render differently based on if the game is running under Canvas or WebGL. Under Canvas it will use the HTML Canvas context drawing operations to draw the path. Under WebGL the graphics data is decomposed into polygons. Both of these are expensive processes, especially with complex shapes.

If your Graphics object doesn't change much (or at all) once you've drawn your shape to it, then you will help performance by calling Phaser.GameObjects.Graphics#generateTexture. This will 'bake' the Graphics object into a Texture, and return it. You can then use this Texture for Sprites or other display objects. If your Graphics object updates frequently then you should avoid doing this, as it will constantly generate new textures, which will consume memory.

As you can tell, Graphics objects are a bit of a trade-off. While they are extremely useful, you need to be careful in their complexity and quantity of them in your game.

## Basic usage

### Add graphics object

```hljs js
Copyvar graphics = this.add.graphics();

or

```hljs js
Copyvar graphics = this.add.graphics({
x: 0,
y: 0,

// lineStyle: {
// width: 1,
// color: 0xffffff,
// alpha: 1
// },
// fillStyle: {
// color: 0xffffff,
// alpha: 1
// },

add: true,
});

### Custom class

- Define class

```hljs js
Copyclass MyGraphics extends Phaser.GameObjects.Graphics {
constructor(scene, options) {
super(scene, options);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs js
Copyvar graphics = new MyGraphics(this, options);

## Drawing commands

### Set line and fill style

- Set default line style and fill style

```hljs js
Copygraphics.setDefaultStyles({
lineStyle: {
width: 1,
color: 0xffffff,
alpha: 1,
},
fillStyle: {
color: 0xffffff,
alpha: 1,
},
});

- Set line style

```hljs js
Copygraphics.lineStyle(lineWidth, color, alpha); // color: 0xRRGGBB

- Set fill style
- Fill color

```hljs js
Copygraphics.fillStyle(color, alpha); // color: 0xRRGGBB

- Fill gradient color (WebGL only)

```hljs js
Copygraphics.fillGradientStyle(
topLeft,
topRight,
bottomLeft,
bottomRight,
alpha
); // alpha= 1
// graphics.fillGradientStyle(topLeft, topRight, bottomLeft, bottomRight, alphaTopLeft, alphaTopRight, alphaBottomLeft, alphaBottomRight);

- `topLeft` : The tint being applied to the top-left of the Game Object.
- `topRight` : The tint being applied to the top-right of the Game Object.
- `bottomLeft` : The tint being applied to the bottom-left of the Game Object.
- `bottomRight` : The tint being applied to the bottom-right of the Game Object.
- `alphaTopLeft` : The top left alpha value.
- `alphaTopRight` : The top right alpha value.
- `alphaBottomLeft` : The bottom left alpha value.
- `alphaBottomRight` : The bottom right alpha value.

### Clear/Erase all drawings

```hljs js
Copygraphics.clear();

### Drawing paths

```hljs js
Copygraphics.beginPath();
graphics.closePath();
graphics.fillPath(); // = graphics.fill()
graphics.strokePath(); // = graphics.stroke()

### Drawing rectangles

```hljs js
Copygraphics.fillRectShape(rect); // rect: {x, y, width, height}
graphics.fillRect(x, y, width, height);
graphics.strokeRectShape(rect); // rect: {x, y, width, height}
graphics.strokeRect(x, y, width, height);

### Drawing rounded rectangles

```hljs js
Copygraphics.fillRoundedRect(x, y, width, height, radius);
graphics.strokeRoundedRect(x, y, width, height, radius);

- `radius` : number or an object `{tl, tr, bl, br}`,
- Positive value : Convex corner.
- Negative value : Concave corner.

### Drawing triangles

```hljs js
Copygraphics.fillTriangleShape(triangle); // triangle: {x1, y1, x2, y2, x3, y3}
graphics.fillTriangle(x1, y1, x2, y2, x3, y3);
graphics.strokeTriangleShape(triangle); // triangle: {x1, y1, x2, y2, x3, y3}
graphics.strokeTriangle(x1, y1, x2, y2, x3, y3);

### Drawing points

```hljs js
Copygraphics.fillPointShape(point, size); // point: {x, y}
graphics.fillPoint(x, y, size);

### Drawing lines

```hljs js
Copygraphics.strokeLineShape(line); // line: {x1, y1, x2, y2}
graphics.lineBetween(x1, y1, x2, y2);
graphics.lineTo(x, y);
graphics.moveTo(x, y);

### Drawing a series of lines

```hljs js
Copygraphics.strokePoints(points, closeShape, closePath, endIndex); // points: [{x, y}, ...]
graphics.fillPoints(points, closeShape, closePath, endIndex); // points: [{x, y}, ...]

- `points` : Array of `{x, y}`
- `closeShape` : When `true`, the shape is closed by joining the last point to the first point.
- `closePath` : When `true`, the path is closed before being stroked.
- `endIndex` : The index of `points` to stop drawing at. Defaults to `points.length`.

### Drawing circles

```hljs js
Copygraphics.fillCircleShape(circle); // circle: {x, y, radius}
graphics.fillCircle(x, y, radius);
graphics.strokeCircleShape(circle); // circle: {x, y, radius}
graphics.strokeCircle(x, y, radius);

Draw or fill circle shape by points.

### Drawing ellipses

```hljs js
Copygraphics.strokeEllipseShape(ellipse, smoothness); // ellipse: Phaser.Geom.Ellipse
graphics.strokeEllipse(x, y, width, height, smoothness);
graphics.fillEllipseShape(ellipse, smoothness); // ellipse: Phaser.Geom.Ellipse
graphics.fillEllipse(x, y, width, height, smoothness);

Draw or fill ellipse shape by points.

### Drawing arcs

```hljs js
Copygraphics.arc(x, y, radius, startAngle, endAngle, anticlockwise);
graphics.arc(x, y, radius, startAngle, endAngle, anticlockwise, overshoot);

Draw arc curve by points.

### Drawing pie-chart slices

```hljs js
Copygraphics.slice(x, y, radius, startAngle, endAngle, anticlockwise);
graphics.slice(x, y, radius, startAngle, endAngle, anticlockwise, overshoot);

Draw pie-chart slice shape by points.

Fill this shape

```hljs js
Copygraphics.fillPath();

### Clear pattern

```hljs js
Copygraphics.setTexture();

### Transfer

```hljs js
Copygraphics.save();
graphics.restore();
graphics.translateCanvas(x, y);
graphics.scaleCanvas(x, y);
graphics.rotateCanvas(radians);

### Generate texture

```hljs js
Copygraphics.generateTexture(key, width, height); // key: texture key

### Create mask

```hljs js
Copyvar mask = graphics.createGeometryMask();

## Shapes

### Arc

Draws an arc shape. You can control the start and end angles of the arc, as well as if the angles are winding clockwise or anti-clockwise. The default settings renders a complete circle.

#### Create shape

```hljs js
Copyvar arc = this.add.arc(
x,
y,
radius,
startAngle,
endAngle,
anticlockwise,
fillColor
);
// var arc = this.add.arc(x, y, radius, startAngle, endAngle, anticlockwise, fillColor, fillAlpha);

#### Custom class

```hljs js
Copyclass MyArc extends Phaser.GameObjects.Arc {
constructor(
scene,
x,
y,
radius,
startAngle,
endAngle,
anticlockwise,
fillColor
) {
super(
scene,
x,
y,
radius,
startAngle,
endAngle,
anticlockwise,
fillColor
);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar arc = new MyArc(
scene,
x,
y,
radius,
startAngle,
endAngle,
anticlockwise,
fillColor
);

#### Color

- Fill color
- Get

```hljs js
Copyvar color = arc.fillColor;
var alpha = arc.fillAlpha;

- Set

```hljs js
Copyarc.setFillStyle(color, alpha);

- Clear

```hljs js
Copyarc.setFillStyle();

- Stroke color
- Get

```hljs js
Copyvar color = arc.strokeColor;

```hljs js
Copyarc.setStrokeStyle(lineWidth, color, alpha);

```hljs js
Copyarc.setStrokeStyle();

Uses `arc.setFillStyle(color, alpha)` to change color.

#### Alpha

- Get

```hljs js
Copyvar alpha = arc.alpha;

```hljs js
Copyarc.setAlpha(alpha);
// arc.alpha = alpha;

#### Angle

- Start angle, in degrees.
- Get

```hljs js
Copyvar startAngle = arc.startAngle;

```hljs js
Copyarc.setStartAngle(startAngle);
// arc.setStartAngle(startAngle, anticlockwise);

```hljs js
Copyarc.startAngle = startAngle;

- End angle, in degrees.
- Get

```hljs js
Copyvar endAngle = arc.endAngle;

```hljs js
Copyarc.seEndAngle(endAngle);

```hljs js
Copyarc.endAngle = endAngle;

- Anticlockwise ( `true`, or `false`)
- Get

```hljs js
Copyvar anticlockwise = arc.anticlockwise;

```hljs js
Copyarc.anticlockwise = anticlockwise;

#### Radius

```hljs js
Copyvar radius = arc.radius;

```hljs js
Copyarc.setRadius(radius);

```hljs js
Copyarc.radius = radius;

#### Smoother arcs

Increase this value for smoother arcs, at the cost of more polygons being rendered. Default is `0.01`

```hljs js
Copyvar iterations = arc.iterations;

```hljs js
Copyarc.iterations = iterations;

#### Display size

```hljs js
Copyvar width = arc.displayWidth;
var height = arc.displayHeight;

```hljs js
Copyarc.setDisplaySize(width, height);

```hljs js
Copyarc.displayWidth = width;
arc.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = arc.createGeometryMask();

### Circle

Draws a circle shape.

#### Create shape object

```hljs js
Copyvar circle = this.add.circle(x, y, radius, fillColor);
// var circle = this.add.circle(x, y, radius, fillColor, fillAlpha);

#### Custom class

```hljs js
Copyclass MyCircle extends Phaser.GameObjects.Arc {
constructor(scene, x, y, radius, fillColor, fillAlpha) {
super(scene, x, y, radius, 0, 360, false, fillColor, fillAlpha);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar circle = new MyCircle(scene, x, y, radius, fillColor, fillAlpha);

#### Color

```hljs js
Copyvar color = circle.fillColor;
var alpha = circle.fillAlpha;

```hljs js
Copycircle.setFillStyle(color, alpha);

```hljs js
Copycircle.setFillStyle();

```hljs js
Copyvar color = circle.strokeColor;

```hljs js
Copycircle.setStrokeStyle(lineWidth, color, alpha);

```hljs js
Copycircle.setStrokeStyle();

Uses `circle.setFillStyle(color, alpha)` to change color.

#### Alpha

```hljs js
Copyvar alpha = circle.alpha;

```hljs js
Copycircle.setAlpha(alpha);
// circle.alpha = alpha;

#### Radius

- Radius
- Get

```hljs js
Copyvar radius = circle.radius;

```hljs js
Copycircle.setRadius(radius);

```hljs js
Copycircle.radius = radius;

#### Smoother arcs

```hljs js
Copyvar iterations = circle.iterations;

```hljs js
Copycircle.iterations = iterations;

#### Display size

```hljs js
Copyvar width = circle.displayWidth;
var height = circle.displayHeight;

```hljs js
Copycircle.setDisplaySize(width, height);

```hljs js
Copycircle.displayWidth = width;
circle.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = circle.createGeometryMask();

### Curve

Draw a curve shape.

#### Create shape object

```hljs js
Copyvar curve = this.add.curve(x, y, path, fillColor);
// var curve = this.add.curve(x, y, path, fillColor, fillAlpha);

- `path` : Path object.

#### Custom class

```hljs js
Copyclass MyCurve extends Phaser.GameObjects.Curve {
constructor(scene, x, y, path, fillColor, fillAlpha) {
super(scene, x, y, path, fillColor, fillAlpha);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar curve = new MyCurve(scene, x, y, path, fillColor, fillAlpha);

#### Color

```hljs js
Copyvar color = curve.fillColor;
var alpha = curve.fillAlpha;

```hljs js
Copycurve.setFillStyle(color, alpha);

```hljs js
Copycurve.setFillStyle();

```hljs js
Copyvar color = curve.strokeColor;

```hljs js
Copycurve.setStrokeStyle(lineWidth, color, alpha);

```hljs js
Copycurve.setStrokeStyle();

Uses `curve.setFillStyle(color, alpha)` to change color.

#### Alpha

```hljs js
Copyvar alpha = curve.alpha;

```hljs js
Copycurve.setAlpha(alpha);
// curve.alpha = alpha;

#### Smoothness

The number of points used when rendering it. Increase this value for smoother curves, at the cost of more polygons being rendered.

```hljs js
Copycurve.setSmoothness(smoothness);

```hljs js
Copycurve.smoothness = smoothness;

#### Display size

```hljs js
Copyvar width = curve.displayWidth;
var height = curve.displayHeight;

```hljs js
Copycurve.setDisplaySize(width, height);

```hljs js
Copycurve.displayWidth = width;
curve.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = curve.createGeometryMask();

### Ellipse

Draw an ellipse shape.

#### Create shape object

```hljs js
Copyvar ellipse = this.add.ellipse(x, y, width, height, fillColor);
// var ellipse = this.add.ellipse(x, y, width, height, fillColor, fillAlpha);

#### Custom class

```hljs js
Copyclass MyEllipse extends Phaser.GameObjects.Ellipse {
constructor(scene, x, y, width, height, fillColor, fillAlpha) {
super(scene, x, y, width, height, fillColor, fillAlpha);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar ellipse = new MyEllipse(scene, x, y, width, height, fillColor, fillAlpha);

#### Color

```hljs js
Copyvar color = ellipse.fillColor;
var alpha = ellipse.fillAlpha;

```hljs js
Copyellipse.setFillStyle(color, alpha);

```hljs js
Copyellipse.setFillStyle();

```hljs js
Copyvar color = ellipse.strokeColor;

```hljs js
Copyellipse.setStrokeStyle(lineWidth, color, alpha);

```hljs js
Copyellipse.setStrokeStyle();

Uses `ellipse.setFillStyle(color, alpha)` to change color.

#### Alpha

```hljs js
Copyvar alpha = ellipse.alpha;

```hljs js
Copyellipse.setAlpha(alpha);
// ellipse.alpha = alpha;

#### Size

```hljs js
Copyvar width = ellipse.width;
var height = ellipse.height;

```hljs js
Copyellipse.setSize(width, height);

#### Display size

```hljs js
Copyvar width = ellipse.displayWidth;
var height = ellipse.displayHeight;

```hljs js
Copyellipse.setDisplaySize(width, height);

```hljs js
Copyellipse.displayWidth = width;
ellipse.displayHeight = height;

#### Smoothness

```hljs js
Copyellipse.setSmoothness(smoothness);

```hljs js
Copyellipse.smoothness = smoothness;

#### Create mask

```hljs js
Copyvar mask = ellipse.createGeometryMask();

### Grid

Draw a grid shape.

#### Create shape object

```hljs js
Copyvar grid = this.add.grid(
x,
y,
width,
height,
cellWidth,
cellHeight,
fillColor,
fillAlpha,
outlineFillColor,
outlineFillAlpha
);

#### Custom class

```hljs js
Copyclass MyGrid extends Phaser.GameObjects.Grid {
constructor(
scene,
x,
y,
width,
height,
cellWidth,
cellHeight,
fillColor,
fillAlpha,
outlineFillColor,
outlineFillAlpha
) {
super(
scene,
x,
y,
width,
height,
cellWidth,
cellHeight,
fillColor,
fillAlpha,
outlineFillColor,
outlineFillAlpha
);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar grid = new MyGrid(
scene,
x,
y,
width,
height,
cellWidth,
cellHeight,
fillColor,
fillAlpha,
outlineFillColor,
outlineFillAlpha
);

#### Color

```hljs js
Copyvar color = grid.fillColor;
var alpha = grid.fillAlpha;

```hljs js
Copygrid.setFillStyle(color, alpha);

```hljs js
Copygrid.setFillStyle();

```hljs js
Copyvar color = grid.strokeColor;

```hljs js
Copygrid.setStrokeStyle(lineWidth, color, alpha);

```hljs js
Copygrid.setStrokeStyle();

- Alternating color
- Get

```hljs js
Copyvar color = grid.altFillColor;

```hljs js
Copygrid.setAltFillStyle(color, alpha);

```hljs js
Copygrid.setAltFillStyle();

- Outline color
- Get

```hljs js
Copyvar color = grid.outlineFillColor;

```hljs js
Copygrid.setOutlineStyle(color, alpha;

```hljs js
Copygrid.setOutlineStyle();

Uses `grid.setFillStyle(color, alpha)` to change color.

#### Alpha

```hljs js
Copyvar alpha = grid.alpha;

```hljs js
Copygrid.setAlpha(alpha);
// grid.alpha = alpha;

#### Display size

```hljs js
Copyvar width = grid.displayWidth;
var height = grid.displayHeight;

```hljs js
Copygrid.setDisplaySize(width, height);

```hljs js
Copygrid.displayWidth = width;
grid.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = grid.createGeometryMask();

### IsoBox

An IsoBox is an 'isometric' rectangle. Each face of it has a different fill color. You can set the color of the top, left and right faces of the rectangle respectively. You can also choose which of the faces are rendered via the `showTop`, `showLeft` and `showRight` properties.

You cannot view an IsoBox from under-neath, however you can change the 'angle' by setting the `projection` property.

#### Create shape object

```hljs js
Copyvar isoBox = this.add.isobox(
x,
y,
width,
height,
fillTop,
fillLeft,
fillRight
);

#### Custom class

```hljs js
Copyclass MyIsoBox extends Phaser.GameObjects.IsoBox {
constructor(scene, x, y, width, height, fillTop, fillLeft, fillRight) {
super(scene, x, y, width, height, fillTop, fillLeft, fillRight);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar isoBox = new MyIsoBox(
scene,
x,
y,
width,
height,
fillTop,
fillLeft,
fillRight
);

#### Set color

- Fill color

```hljs js
CopyisoBox.setFillStyle(fillTop, fillLeft, fillRight);

- Show face

```hljs js
CopyisoBox.setFaces(showTop, showLeft, showRight);

- `showTop`, `showLeft`, `showRight`: Set `true` to show that face

Uses `isoBox.setFillStyle(fillTop, fillLeft, fillRight)` to change color.

#### Alpha

```hljs js
Copyvar alpha = isoBox.alpha;

```hljs js
CopyisoBox.setAlpha(alpha);
// isoBox.alpha = alpha;

#### Projection

The `projection` level of the iso box. Change this to change the 'angle' at which you are looking at the box.

```hljs js
Copyvar projection = isoBox.projection;

```hljs js
CopyisoBox.setProjection(value);

```hljs js
CopyisoBox.projection = value;

#### Display size

```hljs js
Copyvar width = isoBox.displayWidth;
var height = isoBox.displayHeight;

```hljs js
CopyisoBox.setDisplaySize(width, height);

```hljs js
CopyisoBox.displayWidth = width;
isoBox.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = isoBox.createGeometryMask();

### IsoTriangle

An IsoTriangle is an 'isometric' triangle. Think of it like a pyramid. Each face has a different fill color. You can set the color of the top, left and right faces of the triangle respectively You can also choose which of the faces are rendered via the `showTop`, `showLeft` and `showRight` properties.

You cannot view an IsoTriangle from under-neath, however you can change the 'angle' by setting the `projection` property. The `reversed` property controls if the IsoTriangle is rendered upside down or not.

#### Create shape object

```hljs js
Copyvar isoTriangle = this.add.isotriangle(
x,
y,
width,
height,
reversed,
fillTop,
fillLeft,
fillRight
);

#### Custom class

```hljs js
Copyclass MyIsoTriangle extends Phaser.GameObjects.IsoTriangle {
constructor(
scene,
x,
y,
width,
height,
reversed,
fillTop,
fillLeft,
fillRight
) {
super(scene, x, y, width, height, reversed, fillTop, fillLeft, fillRight);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar isoTriangle = new MyIsoTriangle(
scene,
x,
y,
width,
height,
reversed,
fillTop,
fillLeft,
fillRight
);

#### Set color

```hljs js
CopyisoTriangle.setFillStyle(fillTop, fillLeft, fillRight);

```hljs js
CopyisoTriangle.setFaces(showTop, showLeft, showRight);

Uses `isoTriangle.setFillStyle(fillTop, fillLeft, fillRight)` to change color.

#### Alpha

```hljs js
Copyvar alpha = isoTriangle.alpha;

```hljs js
CopyisoTriangle.setAlpha(alpha);
// isoTriangle.alpha = alpha;

#### Projection

```hljs js
Copyvar projection = isoTriangle.projection;

```hljs js
CopyisoTriangle.setProjection(value);

```hljs js
CopyisoTriangle.projection = value;

#### Reverse

```hljs js
Copyvar isReversed = isoTriangle.isReversed;

```hljs js
CopyisoTriangle.setReversed(reversed);

```hljs js
CopyisoTriangle.reversed = reversed;

- Set `true` to render upside down.

#### Display size

```hljs js
Copyvar width = isoTriangle.displayWidth;
var height = isoTriangle.displayHeight;

```hljs js
CopyisoTriangle.setDisplaySize(width, height);

```hljs js
CopyisoTriangle.displayWidth = width;
isoTriangle.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = isoTriangle.createGeometryMask();

### Line

A Line Shape allows you to draw a line between two points in your game. You can control the stroke color and thickness of the line. In WebGL only you can also specify a different thickness for the start and end of the line, allowing you to render lines that taper-off.

If you need to draw multiple lines in a sequence you may wish to use the Polygon Shape instead.

#### Create shape object

```hljs js
Copyvar line = this.add.line(x, y, x1, y1, x2, y2, strokeColor);
// var line = this.add.line(x, y, x1, y1, x2, y2, strokeColor, strokeAlpha);

#### Custom class

```hljs js
Copyclass MyCurve extends Phaser.GameObjects.Line {
constructor(scene, x, y, x1, y1, x2, y2, strokeColor) {
super(scene, x, y, x1, y1, x2, y2, strokeColor);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar line = new MyLine(scene, x, y, x1, y1, x2, y2, strokeColor);

#### Set color

```hljs js
Copyvar color = line.fillColor;
var alpha = line.fillAlpha;

```hljs js
Copyline.setFillStyle(color, alpha);

```hljs js
Copyline.setFillStyle();

```hljs js
Copyvar color = line.strokeColor;

```hljs js
Copyline.setStrokeStyle(lineWidth, color, alpha);

```hljs js
Copyline.setStrokeStyle();

Uses `line.setFillStyle(color, alpha)` to change color.

#### Alpha

```hljs js
Copyvar alpha = line.alpha;

```hljs js
Copyline.setAlpha(alpha);
// line.alpha = alpha;

#### Set end points

```hljs js
Copyline.setTo(x1, y1, x2, y2);

#### Line width

```hljs js
Copyline.setLineWidth(startWidth, endWidth);

- `endWidth` : The end width of the line. Only used in WebGL.

#### Display size

```hljs js
Copyvar width = line.displayWidth;
var height = line.displayHeight;

```hljs js
Copyline.setDisplaySize(width, height);

```hljs js
Copyline.displayWidth = width;
line.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = line.createGeometryMask();

### Polygon

The Polygon Shape is created by providing a list of points, which are then used to create an internal Polygon geometry object. The points can be set from a variety of formats:

- A string containing paired values separated by a single space: `'40 0 40 20 100 20 100 80 40 80 40 100 0 50'`
- An array of Point or Vector2 objects: `[new Phaser.Math.Vector2(x1, y1), ...]`
- An array of objects with public x/y properties: `[obj1, obj2, ...]`
- An array of paired numbers that represent point coordinates: `[x1,y1, x2,y2, ...]`
- An array of arrays with two elements representing x/y coordinates: `[[x1, y1], [x2, y2], ...]`

By default the `x` and `y` coordinates of this Shape refer to the center of it. However, depending on the coordinates of the points provided, the final shape may be rendered offset from its origin.

Note: The method `getBounds` will return incorrect bounds if any of the points in the Polygon are negative. If this is the case, please use the function `Phaser.Geom.Polygon.GetAABB(polygon.geom)` instead and then adjust the returned Rectangle position accordingly.

#### Create shape object

```hljs js
Copyvar polygon = this.add.polygon(x, y, points, fillColor);
// var polygon = this.add.polygon(x, y, points, fillColor, fillAlpha);

- `points` :
- An array of number : `[x0, y0, x1, y1, ...]`
- An array of points : `[{x:x0, y:y0}, {x:x1, y:y1}, ...]`
- A string : `'x0 y0 x1 y1 ...'`

Shift given points to align position **(0, 0)**

#### Custom class

```hljs js
Copyclass MyPolygon extends Phaser.GameObjects.Polygon {
constructor(scene, x, y, points, fillColor) {
super(scene, x, y, points, fillColor);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar polygon = new MyPolygon(scene, x, y, points, fillColor);

#### Color

```hljs js
Copyvar color = polygon.fillColor;
var alpha = polygon.fillAlpha;

```hljs js
Copypolygon.setFillStyle(color, alpha);

```hljs js
Copypolygon.setFillStyle();

```hljs js
Copyvar color = polygon.strokeColor;

```hljs js
Copypolygon.setStrokeStyle(lineWidth, color, alpha);

```hljs js
Copypolygon.setStrokeStyle();

Uses `polygon.setFillStyle(color, alpha)` to change color.

#### Alpha

```hljs js
Copyvar alpha = polygon.alpha;

```hljs js
Copypolygon.setAlpha(alpha);
// polygon.alpha = alpha;

#### Smooth

Smooths the polygon over the number of iterations specified.

```hljs js
Copypolygon.smooth(iterations);

#### Set points

```hljs js
Copypolygon.setTo(points);

- `point` :
- A string containing paired values separated by a single space : `'40 0 40 20 100 20 100 80 40 80 40 100 0 50'`
- An array of Point objects : `[new Phaser.Point(x1, y1), ...]`
- An array of objects with public x/y properties : `[obj1, obj2, ...]`
- An array of paired numbers that represent point coordinates : `[x1,y1, x2,y2, ...]`
- An array of arrays with two elements representing x/y coordinates : `[[x1, y1], [x2, y2], ...]`

#### Display size

```hljs js
Copyvar width = polygon.displayWidth;
var height = polygon.displayHeight;

```hljs js
Copypolygon.setDisplaySize(width, height);

```hljs js
Copypolygon.displayWidth = width;
polygon.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = polygon.createGeometryMask();

### Rectangle

Draw a rectangle shape.

#### Create shape object

```hljs js
Copyvar rect = this.add.rectangle(x, y, width, height, fillColor);
// var rect = this.add.rectangle(x, y, width, height, fillColor, fillAlpha);

#### Custom class

```hljs js
Copyclass MyRectangle extends Phaser.GameObjects.Rectangle {
constructor(scene, x, y, width, height, fillColor) {
super(scene, x, y, width, height, fillColor);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar rect = new MyRectangle(scene, x, y, width, height, fillColor);

#### Color

```hljs js
Copyvar color = rect.fillColor;
var alpha = rect.fillAlpha;

```hljs js
Copyrect.setFillStyle(color, alpha);

```hljs js
Copyrect.setFillStyle();

```hljs js
Copyvar color = rect.strokeColor;

```hljs js
Copyrect.setStrokeStyle(lineWidth, color, alpha);

```hljs js
Copyrect.setStrokeStyle();

Uses `rect.setFillStyle(color, alpha)` to change color.

#### Alpha

```hljs js
Copyvar alpha = rect.alpha;

```hljs js
Copyrect.setAlpha(alpha);
// rect.alpha = alpha;

#### Size

```hljs js
Copyvar width = rect.width;
var height = rect.height;

```hljs js
Copyrect.setSize(width, height);

```hljs js
Copyrect.width = width;
rect.height = height;

#### Display size

```hljs js
Copyvar width = rect.displayWidth;
var height = rect.displayHeight;

```hljs js
Copyrect.setDisplaySize(width, height);

```hljs js
Copyrect.displayWidth = width;
rect.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = rect.createGeometryMask();

### Star

Draw a star shape. You can control several aspects of it including the number of points that constitute the star. The default is 5. If you change it to 4 it will render as a diamond. If you increase them, you'll get a more spiky star shape.

You can also control the inner and outer radius, which is how 'long' each point of the star is. Modify these values to create more interesting shapes.

#### Create shape object

```hljs js
Copyvar star = this.add.star(x, y, points, innerRadius, outerRadius, fillColor);
// var star = this.add.star(x, y, points, innerRadius, outerRadius, fillColor, fillAlpha);

- `points` : The number of points on the star. Default is 5.
- `innerRadius` : The inner radius of the star. Default is 32.
- `outerRadius` : The outer radius of the star. Default is 64.

#### Custom class

```hljs js
Copyclass MyStar extends Phaser.GameObjects.Star {
constructor(scene, x, y, points, innerRadius, outerRadius, fillColor) {
super(scene, x, y, points, innerRadius, outerRadius, fillColor);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar star = new MyStar(
scene,
x,
y,
points,
innerRadius,
outerRadius,
fillColor
);

#### Color

```hljs js
Copyvar color = star.fillColor;
var alpha = star.fillAlpha;

```hljs js
Copystar.setFillStyle(color, alpha);

```hljs js
Copystar.setFillStyle();

```hljs js
Copyvar color = star.strokeColor;

```hljs js
Copystar.setStrokeStyle(lineWidth, color, alpha);

```hljs js
Copystar.setStrokeStyle();

Uses `star.setFillStyle(color, alpha)` to change color.

#### Alpha

```hljs js
Copyvar alpha = star.alpha;

```hljs js
Copystar.setAlpha(alpha);
// star.alpha = alpha;

#### Radius

- Inner radius
- Get

```hljs js
Copyvar innerRadius = star.innerRadius;

```hljs js
Copystar.setInnerRadius(innerRadius);

```hljs js
Copystar.innerRadius = innerRadius;

- Outer radius
- Get

```hljs js
Copyvar outerRadius = star.outerRadius;

```hljs js
Copystar.setOuterRadius(outerRadius);

```hljs js
Copystar.outerRadius = outerRadius;

- Points
- Get

```hljs js
Copyvar points = star.points;

```hljs js
Copystar.setPoints(points);

```hljs js
Copystar.points = points;

#### Display size

```hljs js
Copyvar width = star.displayWidth;
var height = star.displayHeight;

```hljs js
Copystar.setDisplaySize(width, height);

```hljs js
Copystar.displayWidth = width;
star.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = star.createGeometryMask();

### Triangle

Draw a triangle shape. The Triangle consists of 3 lines, joining up to form a triangular shape. You can control the position of each point of these lines. The triangle is always closed and cannot have an open face. If you require that, use a Polygon.

#### Create shape object

```hljs js
Copyvar triangle = this.add.triangle(x, y, x1, y1, x2, y2, x3, y3, fillColor);
// var triangle = this.add.triangle(x, y, x1, y1, x2, y2, x3, y3, fillColor, fillAlpha);

#### Custom class

```hljs js
Copyclass MyTriangle extends Phaser.GameObjects.Triangle {
constructor(scene, x, y, x1, y1, x2, y2, x3, y3, fillColor) {
super(scene, x, y, x1, y1, x2, y2, x3, y3, fillColor);
// ...
this.add.existing(this);
}
// ...

```hljs js
Copyvar triangle = new MyTriangle(scene, x, y, x1, y1, x2, y2, x3, y3, fillColor);

#### Color

```hljs js
Copyvar color = triangle.fillColor;
var alpha = triangle.fillAlpha;

```hljs js
Copytriangle.setFillStyle(color, alpha);

```hljs js
Copytriangle.setFillStyle();

```hljs js
Copyvar color = triangle.strokeColor;

```hljs js
Copytriangle.setStrokeStyle(lineWidth, color, alpha);

```hljs js
Copytriangle.setStrokeStyle();

Uses `triangle.setFillStyle(color, alpha)` to change color.

#### Alpha

```hljs js
Copyvar alpha = triangle.alpha;

```hljs js
Copytriangle.setAlpha(alpha);
// triangle.alpha = alpha;

#### Set vertices

```hljs js
Copytriangle.setTo(x1, y1, x2, y2, x3, y3);

#### Triangle width

```hljs js
Copytriangle.setLineWidth(startWidth, endWidth);

- `endWidth` : The end width of the triangle. Only used in WebGL.

#### Display size

```hljs js
Copyvar width = triangle.displayWidth;
var height = triangle.displayHeight;

```hljs js
Copytriangle.setDisplaySize(width, height);

```hljs js
Copytriangle.displayWidth = width;
triangle.displayHeight = height;

#### Create mask

```hljs js
Copyvar mask = triangle.createGeometryMask();

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Dom Element

Group

---

# https://docs.phaser.io/phaser/concepts/gameobjects/image

# Image

A Guide to the Phaser Image Game Object

An Image is a light-weight Game Object useful for the display of static images in your game, such as logos, backgrounds, scenery or other non-animated elements. Images can have input events and physics bodies, or be tweened, tinted or scrolled. The main difference between an Image and a Sprite is that you cannot animate an Image as they do not have the Animation component.

## Load texture

```hljs javascript
Copythis.load.image(key, url);

Reference: load image

## Add image object

```hljs javascript
Copyvar image = this.add.image(x, y, key);
// var image = this.add.image(x, y, key, frame);

Add image from JSON

```hljs javascript
Copyvar image = this.make.image({
x: 0,
y: 0,
key: '',
// frame: '',

// angle: 0,
// alpha: 1,
// flipX: true,
// flipY: true,
// scale : {
// x: 1,
// y: 1
//},
// origin: {x: 0.5, y: 0.5},

add: true
});

- `key`, `frame` :
- A string
- An array of string to pick one element at random
- `x`, `y`, `scale.x`, `scale.y` :
- A number

- A call

```hljs javascript
Copyfunction() { return 0; }

- Random integer between min and max

```hljs javascript
Copy{ randInt: [min, max] }

- Random float between min and max

```hljs javascript
Copy{ randFloat: [min, max] }

## Custom class

```hljs javascript
Copyclass MyImage extends Phaser.GameObjects.Image {
constructor(scene, x, y, texture, frame) {
super(scene, x, y, texture, frame);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.

Example

```hljs javascript
Copyvar image = new MyImage(scene, x, y, key);

## Texture

See game object - texture

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = image.createBitmapMask();

See mask

## Shader effects

Support preFX and postFX effects

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Group

Layer

---

# https://docs.phaser.io/phaser/concepts/gameobjects/shader

# Shader

A Guide to the Phaser Shader Game Object

This Game Object allows you to easily add a quad with its own shader into the display list, and manipulate it as you would any other Game Object, including scaling, rotating, positioning and adding to Containers. Shaders can be masked with either Bitmap or Geometry masks and can also be used as a Bitmap Mask for a Camera or other Game Object. They can also be made interactive and used for input events.

It works by taking a reference to a `Phaser.Display.BaseShader` instance, as found in the Shader Cache. These can be created dynamically at runtime, or loaded in via the GLSL File Loader:

```hljs js
Copyfunction preload ()
{
this.load.glsl('fire', 'shaders/fire.glsl.js');
}

function create ()
{
this.add.shader('fire', 400, 300, 512, 512);
}

Please see the Phaser 3 Examples GitHub repo for examples of loading and creating shaders dynamically.

Due to the way in which they work, you cannot directly change the alpha or blend mode of a Shader. This should be handled via exposed uniforms in the shader code itself.

By default a Shader will be created with a standard set of uniforms. These were added to match those found on sites such as ShaderToy or GLSLSandbox, and provide common functionality a shader may need, such as the timestamp, resolution or pointer position. You can replace them by specifying your own uniforms in the Base Shader.

These Shaders work by halting the current pipeline during rendering, creating a viewport matched to the size of this Game Object and then renders a quad using the bound shader. At the end, the pipeline is restored.

Because it blocks the pipeline it means it will interrupt any batching that is currently going on, so you should use these Game Objects sparingly. If you need to have a fully batched custom shader, then please look at using a custom pipeline instead. However, for background or special masking effects, they are extremely effective.

## Load GLSL

```hljs javascript
Copythis.load.glsl(key, url);

Reference: load glsl

## Add shader object

```hljs javascript
Copyvar shader = this.add.shader(key, x, y, width, height, textures);

- `key` : The key of the shader to use from the _shader cache_, or a BaseShader instance.
- `x`, `y` : Position.
- `width`, `height` : Size.
- `textures` : Optional array of texture keys to bind to the iChannel0, iChannel1, iChannel2, iChannel3 uniforms.

Lots of shaders expect textures to be **power-of-two sized**.

Add shader object from JSON

```hljs javascript
Copyvar shader = this.make.shader({
x: 0,
y: 0,
key: '',

// angle: 0,
// alpha: 1
// flipX: true,
// flipY: true,
// scale : {
// x: 1,
// y: 1
//},
// origin: {x: 0.5, y: 0.5},

add: true
});

- `key` : The key of the shader to use from the shader cache, or a BaseShader instance.
- A string
- An array of string to pick one element at random
- `x`, `y`, `scale.x`, `scale.y` :
- A number

- A call

```hljs javascript
Copyfunction() { return 0; }

- Random integer between min and max

```hljs javascript
Copy{ randInt: [min, max] }

- Random float between min and max

```hljs javascript
Copy{ randFloat: [min, max] }

## Custom class

- Define class

```hljs javascript
Copyclass MyShader extends Phaser.GameObjects.Shader {
constructor(scene, key, x, y, width, height, textures) {
super(scene, key, x, y, width, height, textures);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs javascript
Copyvar shader = new MyShader(scene, key, x, y, width, height, textures);

## Sampler2D uniform

- Default uniform mappings :
- `resolution` (2f) - Set to the size of this shader.
- `uniform vec2 resolution;` in GLSL.
- `time` (1f) - The elapsed game time, in seconds.
- `uniform float time;` in GLSL.
- `mouse` (2f) - If a pointer has been bound (with `setPointer`), this uniform contains its position each frame.
- `uniform vec2 mouse;` in GLSL.
- `date` (4fv) - A vec4 containing the year, month, day and time in seconds.
- `uniform vec4 date;` in GLSL.
- `sampleRate` (1f) - Sound sample rate. 44100 by default.
- `uniform float sampleRate;` in GLSL.
- `iChannel0...3` (sampler2D) - Input channels 0 to 3. `null` by default.
`uniform sampler2D iChannel0;` in GLSL.
- Get uniform object

```hljs javascript
Copyvar uniform = shader.getUniform(key);

- Texture key

```hljs javascript
Copyvar textureKey = uniform.textureKey;

- Get texture key of `iChannel0`, `iChannel1`, `iChannel2`, `iChannel3` sampler2D uniform.

```hljs javascript
Copyvar textureKey = shader.getUniform('iChannel0').textureKey;
var textureKey = shader.getUniform('iChannel1').textureKey;
var textureKey = shader.getUniform('iChannel2').textureKey;
var textureKey = shader.getUniform('iChannel3').textureKey;

- Sets a property of a uniform already present on this shader.

```hljs javascript
Copyshader.setUniform(key, value);

- `key` : The key of the uniform to modify. Use dots for deep properties, i.e. `resolution.value.x`.
- Sets a sampler2D uniform from texture manager.

```hljs javascript
Copyshader.setChannel0(textureKey);
shader.setChannel1(textureKey);
shader.setChannel2(textureKey);
shader.setChannel3(textureKey);
// shader.setChannel0(textureKey, textureData);
// shader.setChannel1(textureKey, textureData);
// shader.setChannel2(textureKey, textureData);
// shader.setChannel3(textureKey, textureData);

or

```hljs javascript
Copyshader.setSampler2D(uniformKey, textureKey, textureIndex);
// shader.setSampler2D(uniformKey, textureKey, textureIndex, textureData);

- `uniformKey` : `'iChannel0'`, `'iChannel1'`, `'iChannel2'`, or `'iChannel3'`.
- `textureIndex` : `0`(for iChannel0), `1`(for iChannel1), `2`(for iChannel2), `3`(for iChannel3).
- `textureData` : Additional texture data.
- `textureKey`: Key from the Texture Manager cache. It cannot be a single frame from a texture, only the full image. Lots of shaders expect textures to be **power-of-two sized**.
- Sets a sampler2D uniform from a webgl texture.

```hljs javascript
Copyshader.setSampler2DBuffer(uniformKey, texture, width, height, textureIndex);
// shader.setSampler2DBuffer(uniformKey, texture, width, height, textureIndex, textureData);

- `uniformKey` : `'iChannel0'`, `'iChannel1'`, `'iChannel2'`, or `'iChannel3'`.
- `width`, `height` : The width, height of the texture.
- `textureIndex` : `0`(for iChannel0), `1`(for iChannel1), `2`(for iChannel2), `3`(for iChannel3).
- `textureData` : Additional texture data.

## Other uniforms

- `mouse`, a pointer parameter.
- Get

```hljs javascript
Copyvar pointer = shader.pointer;

- Set

```hljs javascript
Copyshader.setPointer(pointer);

- `pointer` : `{x, y}`
- `time`, the elapsed game time, in _seconds_.
- Get

```hljs javascript
Copyvar time = shader.getUniform('time').value;
// var time = shader.uniforms.time.value

```hljs javascript
Copyshader.setUniform('time.value', time);

## Output

- Render to Display list, by default.

- Redirect render result to internal webgl texture.

```hljs javascript
Copyshader.setRenderToTexture();
var texture = shader.glTexture;

- Redirect render result to internal webgl texture, and sample2D from buffer.

```hljs javascript
Copyshader.setRenderToTexture(undefined, true);
var texture = shader.glTexture;

- Redirect render result to texture manager, for texture-based game object.

```hljs javascript
Copyshader.setRenderToTexture(textureKey);
// var texture = shader.glTexture;

- Redirect render result to texture manager, and Sample2D from buffer.

```hljs javascript
Copyshader.setRenderToTexture(textureKey, true);
// var texture = shader.glTexture;

## Texture routing

Input

Output

shader.setSampler2D()

shader.setRenderToTexture()

Texture key

shader.setSampler2DBuffer()

Texture manager

Samplers:

iChannel0

iChannel1

iChannel2

iChannel3

shader

Shader game object

Display list

shader.glTexture

Image game object

WebGl texture

gameObject.glTexture

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = shader.createBitmapMask();

See mask

## BaseShader

```hljs javascript
Copyvar baseShader = new Phaser.Display.BaseShader(key, fragmentSrc, vertexSrc, uniforms);

- `key` : The key of this shader

- `fragmentSrc` : The fragment source for the shader.

- `vertexSrc` : The vertex source for the shader.
- `undefined`, or `''` : Use default vertex source.
- `uniforms` : Optional object defining the uniforms the shader uses.

```hljs javascript
Copy{
uniformName : {type: uniformType, value: initValue},
...
}

- `uniformName` : Uniform name in fragment source.
- `uniformType`, `initValue` : Type and initial value of uniform.
- `'1f'` : `initValue` is a single float value.
- Example : `time: { type: '1f', value: 0 }`
- `'2f'` : `initValue` is float numbers `{x, y}`.
- Example : `resolution: { type: '2f', value: { x: this.width, y: this.height } }`
- `'3f'` : `initValue` is float numbers `{x, y, z}`.
- Example : `color: { type: '3f', value: {x: 0, y: 0, z: 0}}`
- `'4f'` : `initValue` is float numbers `{x, y, z, w}`.

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Rope

Sprite

---

# https://docs.phaser.io/phaser/concepts/gameobjects/sprite

# Sprite

A Guide to the Phaser Sprite Game Object

A Sprite Game Object is used for the display of both static and animated images in your game. Sprites can have input events and physics bodies. They can also be tweened, tinted, scrolled and animated.

The main difference between a Sprite and an Image Game Object is that you cannot animate Images. As such, Sprites take a fraction longer to process and have a larger API footprint due to the Animation Component. If you do not require animation then you can safely use Images to replace Sprites in all cases.

## Load texture

Texture for static image

```hljs javascript
Copythis.load.image(key, url);

Reference: load image

## Load atlas

Atlas for animation images

```hljs javascript
Copythis.load.atlas(key, textureURL, atlasURL);

Reference: load atlas

## Add sprite object

```hljs javascript
Copyvar sprite = this.add.sprite(x, y, key);
// var sprite = this.add.sprite(x, y, key, frame);

Add sprite from JSON

```hljs javascript
Copyvar sprite = this.make.sprite({
x: 0,
y: 0,
key: '',
// frame: '',

// angle: 0,
// alpha: 1
// flipX: true,
// flipY: true,
// scale : {
// x: 1,
// y: 1
//},

// anims: {
// key: ,
// repeat: ,
// ...
// },
// origin: {x: 0.5, y: 0.5},

add: true
});

- `key` :
- A string
- An array of string to pick one element at random
- `x`, `y`, `scale.x`, `scale.y` :
- A number

- A call

```hljs javascript
Copyfunction() { return 0; }

- Random integer between min and max

```hljs javascript
Copy{ randInt: [min, max] }

- Random float between min and max

```hljs javascript
Copy{ randFloat: [min, max] }

## Custom class

- Define class

```hljs javascript
Copyclass MySprite extends Phaser.GameObjects.Sprite {
constructor(scene, x, y, texture, frame) {
super(scene, x, y, texture, frame);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {
// super.preUpdate(time, delta);
// }
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs javascript
Copyvar sprite = new MySprite(scene, x, y, key);

## Texture

See game object - texture

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = sprite.createBitmapMask();

See mask

## Shader effects

Support preFX and postFX effects

## Animation

### Create animation

- Global animation for all sprites

```hljs javascript
Copythis.anims.create(config);

- Private animation for this sprite

```hljs javascript
Copysprite.anims.create(config);

`config` : See Add animation section.

### Create Aseprite animation

- Global Aseprite animation for all sprites

```hljs javascript
Copythis.anims.createFromAseprite(key, tags);

- Private Aseprite animation for this sprite

```hljs javascript
Copysprite.anims.createFromAseprite(key, tags);

#### Remove animation

- Remove from global animation manager

```hljs javascript
Copythis.anims.remove(key);

or

```hljs javascript
Copysprite.anims.globalRemove(key);

- Remove from private animation state

```hljs javascript
Copysprite.anims.remove(key);

#### Get animation

- Get global animation object

```hljs javascript
Copyvar anim = this.anims.get(key);

- Get private animation object

```hljs javascript
Copyvar anim = sprite.anims.get(key);

#### Has animation

- Has global animation object

```hljs javascript
Copyvar hasAnim = this.anims.exists(key);

```hljs javascript
Copyvar hasAnim = sprite.anims.exists(key);

### Play animation

- Play

```hljs javascript
Copysprite.play(key);
// sprite.play(key, ignoreIfPlaying);

- `key` : Animation key string, or animation config
- String key of animation

- Animation config, to override default config

```hljs javascript
Copy{
key,
frameRate,
duration,
delay,
repeat,
repeatDelay,
yoyo,
showOnStart,
hideOnComplete,
startFrame,
timeScale
}

- Play in reverse

```hljs javascript
Copysprite.playReverse(key);
// sprite.playReverse(key, ignoreIfPlaying);

- `key` : Animation key string, or animation config
- Play after delay

```hljs javascript
Copysprite.playAfterDelay(key, delay);

- `key` : Animation key string, or animation config
- Play after repeat

```hljs javascript
Copysprite.playAfterRepeat(key, repeatCount);

- `key` : Animation key string, or animation config

### Chain

- Chain next animation

```hljs javascript
Copysprite.chain(key);

- `key` : Animation key string, or animation config
- Chain next and next animation

```hljs javascript
Copysprite.chain(key0).chain(key1);

- `key0`, `key1` : Animation key string, or animation config

### Stop

- Immediately stop

```hljs javascript
Copysprite.stop();

- Stop after delay

```hljs javascript
Copysprite.stopAfterDelay(delay);

- Stop at frame

```hljs javascript
Copysprite.stopOnFrame(frame);

- `frame` : Frame object in current animation.

```hljs javascript
Copyvar currentAnim = sprite.anims.currentAnim;
var frame = currentAnim.getFrameAt(index);

- Stop after repeat

```hljs javascript
Copysprite.stopAfterRepeat(repeatCount);

### Restart

```hljs javascript
Copysprite.anims.restart();
// sprite.anims.restart(includeDelay, resetRepeats);

### Time scale

- Get

```hljs javascript
Copyvar timeScale = sprite.anims.globalTimeScale;

- Set

```hljs javascript
Copysprite.anims.globalTimeScale = timeScale;

See also Global time scale

### Properties

- Has started

```hljs javascript
Copyvar hasStarted = sprite.anims.hasStarted;

- Is playing

```hljs javascript
Copyvar isPlaying = sprite.anims.isPlaying;

- Is paused

```hljs javascript
Copyvar isPaused = sprite.anims.isPaused;

- Total frames count

```hljs javascript
Copyvar frameCount = sprite.anims.getTotalFrames();

- Delay

```hljs javascript
Copyvar delay = sprite.anims.delay;

- Repeat
- Total repeat count

```hljs javascript
Copyvar repeatCount = sprite.anims.repeat;

- Repeat counter

```hljs javascript
Copyvar repeatCount = sprite.anims.repeatCounter;

- Repeat delay

```hljs javascript
Copyvar repeatDelay = sprite.anims.repeatDelay;

- Yoyo

```hljs javascript
Copyvar repeatDelay = sprite.anims.yoyo;

- Current animation key

```hljs javascript
Copyvar key = sprite.anims.getName();

- `key` : Return `''` if not playing any animation.
- Current frame name

```hljs javascript
Copyvar frameName = sprite.anims.getFrameName();

- `frameName` : Return `''` if not playing any animation.
- Current animation

```hljs javascript
Copyvar currentAnim = sprite.anims.currentAnim;

- Current frame

```hljs javascript
Copyvar currentFrame = sprite.anims.currentFrame;

### Events

- On start

```hljs javascript
Copysprite.on('animationstart', function(currentAnim, currentFrame, sprite){});

```hljs javascript
Copysprite.on('animationstart-' + key, function(currentAnim, currentFrame, sprite){});

- On restart

```hljs javascript
Copysprite.on('animationrestart', function(currentAnim, currentFrame, sprite){});

```hljs javascript
Copysprite.on('animationrestart-' + key, function(currentAnim, currentFrame, sprite){});

- On complete

```hljs javascript
Copysprite.on('animationcomplete', function(currentAnim, currentFramee, sprite){});

```hljs javascript
Copysprite.on('animationcomplete-' + key, function(currentAnim, currentFramee, sprite){});

- On stop

```hljs javascript
Copysprite.on('animationstop', function(currentAnim, currentFrame, sprite){});

```hljs javascript
Copysprite.on('animationstop-' + key, function(currentAnim, currentFrame, sprite){});

- On update

```hljs javascript
Copysprite.on('animationupdate', function(currentAnim, currentFrame, sprite){});

```hljs javascript
Copysprite.on('animationupdate-' + key, function(currentAnim, currentFrame, sprite){});

- On repeat

```hljs javascript
Copysprite.on('animationrepeat', function(currentAnim, currentFrame, sprite){});

```hljs javascript
Copysprite.on('animationrepeat-' + key, function(currentAnim, currentFrame, sprite){});

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Shader

Text

---

# https://docs.phaser.io/phaser/concepts/gameobjects/bitmap-text

# Bitmap Text

A Guide to creating and using Bitmap Text in Phaser

A Bitmap Text Game Object is created from a bitmap based texture file such as a PNG file. This texture contains each character arranged in a fixed structure. The following image is an example of a Bitmap Text texture file:

The texture file is nearly always accompanied by an XML or JSON based file that describes the font structure. This file contains the positions of each character in the texture, so the renderer knows how to cut them out, along with kerning data.

Because the font comes from a texture, there is no worrying about if it's installed on the users system. Or about loading it such as with Web Fonts. However, as a result of being drawn from a texture, you are more limited in what you can do with them. For example, you cannot do things like apply a stroke or fill pattern to a Bitmap Text. Also, you are limited to only the characters in the texture file, so if your game needs to support multiple languages, it has to cater for this in the font textures directly.

On the plus side, under WebGL Bitmap Texts are extremely fast to render and unlike Text Game Objects, you don't incur any speed penalty when updating their content because the underlying texture doesn't change. You can also create visually impressive fonts by preparing them in an image editor, applying fills and any other effect required. As you can see in the image above, this style would be extremely hard to achieve with a Web Font.

## Bitmap Text Creation Software

To create a Bitmap Text data files you need a 3rd party app. Here are four of the most common:

- BMFont (Windows, free)
- Glyph Designer (macOS, commercial)
- SnowB BMF (web-based, free)
- Littera (Flash-based - yes, really, free)

In most use cases it is recommended to use the XML file format. For example, BMFont generates its data as XML. When it saves the files they have a `.fnt` extension, but you can simply rename them to `.xml`.

If you wish to use JSON, the formatting should be equal to the result of converting a valid XML file through the popular X2JS library. An online tool for conversion can be found on the Code Beautify site.

### From an image and font data

Bitmap font generators make an image and XML data file. Use `load.bitmapFont()`:

```hljs js
Copythis.load.bitmapFont('key', 'font.png', 'font.xml');

To create multi-line text insert \\r, \\n or \\r\\n escape codes into the text string.

### From an atlas and font data

Load the image and XML data separately, then call `ParseFromAtlas()` to create the font.

- bitmap text from atlas

### From a "retro font" image

Load the image and then call `RetroFont.Parse()` with the font data.

- retro text 1

## Bitmap text

These are game objects that display text using the font. There are two classes, BitmapText and DynamicBitmapText. They are both "dynamic" in the sense that you can change the text contents at any time. The difference is that DynamicBitmapText has callbacks for per-character rendering effects and scrolling.

### Load bitmap font

- Load bitmap font from texture and xml configuration

```hljs js
Copythis.load.bitmapFont(key, textureURL, xmlURL);

- Reference: load bitmap font

- Loaded texture also can be used for Image, Sprite, or Arcade Image, Arcade Sprite

Copy```js
this.add.image(x, y, key, char);

- Load retro bitmap font from texture and JSON configuration
1. Load texture in _preload_ stage

```hljs js
Copythis.load.image(key, url);

Reference: load image

2. Add retro bitmap font

```hljs js
Copyvar config = {
// image
image: '',
offset: {
x: 0,
y: 0
},
// characters
width: 32,
height: 32,
chars: '',
charsPerRow: 10,
// spacing
spacing: {
x: 0,
y: 0
},
lineSpacing: 0
}
this.cache.bitmapFont.add(key, Phaser.GameObjects.RetroFont.Parse(scene, config));

- Image :
- `image` : The key of the image containing the font.
- `offset` : If the font set doesn't start at the top left of the given image, specify the X/Y coordinate offset here.
- Characters :
- `width` : The width of each character in the font set.
- `height` : The height of each character in the font set.
- `chars` : The characters used in the font set, in display order.
- Default characters set
- `charsPerRow` : The number of characters per row in the font set. If not given charsPerRow will be the image width / characterWidth.
- Spacing :
- `spacing` : If the characters in the font set have horizontal/vertical spacing between them set the required amount here.
- `lineSpacing` : The amount of vertical space to add to the line height of the font.

### Add bitmap text object

```hljs js
Copyvar txt = this.add.bitmapText(x, y, key, text);
// var txt = this.add.bitmapText(x, y, key, text, size, align);

- `size` : The size of the font
- `align` : The alignment of the text in a _multi-line_ BitmapText object.
- `0` : Left aligned (default)
- `1` : Middle aligned
- `2` : Right aligned

Add text from JSON

```hljs js
Copyvar txt = this.make.bitmapText({
x: 0,
y: 0,
text: 'Text\nGame Object\nCreated from config',
font: '',
size: false,
align: 0,
// origin: {x: 0.5, y: 0.5},
add: true
});

### Custom class

- Define class

```hljs js
Copyclass MyText extends Phaser.GameObjects.BitmapText {
constructor(scene, x, y, key, text, size, align) {
super(scene, x, y, key, text, size, align);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs js
Copyvar txt = new MyText(scene, x, y, key, text);

### Set text

```hljs js
Copytxt.setText('...');

or

```hljs js
Copytxt.text = '...';

### Set align

- Left aligned

```hljs js
Copytxt.setLeftAlign();

- Middle aligned

```hljs js
Copytxt.setCenterAlign();

- Right aligned

```hljs js
Copytxt.setRightAlign();

```hljs js
Copytxt.align = align;

- `align` :
- `0` : Left aligned (default)
- `1` : Middle aligned
- `2` : Right aligned

### Set letter spacing

```hljs js
Copytxt.setLetterSpacing(spacing);

```hljs js
Copytxt.letterSpacing = spacing;

Can be a positive value to increase the space, or negative to reduce it.

### Set line spacing

```hljs js
Copytxt.setLineSpacing(spacing);

```hljs js
Copytxt.lineSpacing = spacing;

### Set font size

```hljs js
Copytxt.setFontSize(size);

```hljs js
Copytxt.fontSize = size;

### Set font

```hljs js
Copytxt.setFont(key);
// txt.setFont(key, size, align);

### Tint

See Tint.

### Color of characters

- By character

```hljs js
Copytxt.setCharacterTint(start, length, tintFill, color);
// txt.setCharacterTint(start, length, tintFill, topLeft, topRight, bottomLeft, bottomRight);

- `start` : Index starting character.
- `< 0` : Counts back from the end of the text.
- `length` : Number of characters to tint.
- `-1` : All characters from `start`
- `tintFill` :
- `true` : Fill-based tint
- `false` : Additive tint
- `color`, or `topLeft, topRight, bottomLeft, bottomRight` : Color integer.
- By word

```hljs js
Copytxt.setWordTint(word, count, tintFill, color);
// txt.setWordTint(word, count, tintFill, topLeft, topRight, bottomLeft, bottomRight);

- `word` : The word to search for.
- A string
- An index of the word in the words array.
- `count` : Number of matching words to tint.
- `-1` : All matching words
- `tintFill` :
- `true` : Fill-based tint
- `false` : Additive tint
- `color`, or `topLeft, topRight, bottomLeft, bottomRight` : Color integer.

### Drop shadow effect

```hljs js
Copytxt.setDropShadow(x, y, color, alpha);

```hljs js
Copytxt.dropShadowX = x;
txt.dropShadowY = y;
txt.dropShadowColor = color;
txt.dropShadowAlpha = alpha;

- `x`, `y` : The horizontal/vertical offset of the drop shadow.
- `color` : The color of the drop shadow.
- `alpha` : The alpha of the drop shadow.

WebGL only

### Wrap

- Wrap

```hljs js
Copytxt.setMaxWidth(width);
// txt.setMaxWidth(width, wordWrapCharCode);

- `width` : Line width in pixels.
- `wordWrapCharCode` : The character code to check for when word wrapping. Defaults to 32 (the _space_ character)
- Disable wrapping

```hljs js
Copytxt.setMaxWidth(0);

### Get bounds

```hljs js
Copyvar width = txt.width;
var height = txt.height;

```hljs js
Copyvar bounds = txt.getTextBounds(round);
// bounds = {
// local: {
// x: 0,
// y: 0,
// width: 0,
// height: 0
// },
// global: {
// x: 0,
// y: 0,
// width: 0,
// height: 0
// },
// lines: {
// shortest: 0,
// longest: 0,
// lengths: null,
// height: 0
// },
// wrappedText: '',
// words: [],
// characters: [],
// scaleX: 0,
// scaleY: 0
// };

- `round` : Set `true` to round the results to the nearest integer.

- `local` : The BitmapText based on fontSize and 0x0 coords.

- `global` : The BitmapText, taking into account scale and world position.

- `lines` : The BitmapText line data.

- `wrappedText` : Wrapped content joined with `'\n'`.

- `characters` : Information of each character.

```hljs js
Copy{
char, code, i, idx, x, y, w, h, t, b, r, line
}

- `char` : Character (string).
- `code`: Character code (number)
- `i` : Index of character
- `x` , `y` : World position of this character
- `w`, `h` : Width/height of this character
- `t`, `b` : The top/bottom of the line this character is on.
- `r` : The right-most point of this character, including xAdvance.
- `line` : The line number the character appears on.
- `words` : Information of each word.

```hljs js
Copy{
word, i, x, y, w, h, cr

}

- `word` : Word string.
- `i` : Index of start character
- `x`, `y` : World position of start character
- `w` , `h` : Width/height of word
- `cr` : Is last word of current line
- `scaleX`, `scaleY` : Scale of width and height.

#### Get information of character

```hljs js
Copyvar data = txt.getCharacterAt(x, y);
// var data = txt.getCharacterAt(x, y, camera);

- `x`, `y` : World position.

- `camera` : The Camera which is being tested against.

- `data` : Information of character at world position.

```hljs js
Copy{
char, code, i, x, y, w, h, t, b, r, line
}

- `char` : Character (string).
- `code`: Character code (number)
- `i` : Index of character
- `x` , `y` : World position of this character
- `w`, `h` : Width/height of this character
- `t`, `b` : The top/bottom of the line this character is on.
- `r` : The right-most point of this character, including xAdvance.
- `line` : The line number the character appears on.

### Other properties

See game object

### Create mask

```hljs js
Copyvar mask = txt.createBitmapMask();

### Shader effects

Only supports postFX effects.

## Appendix

### Default characters set of retro font

- `Phaser.GameObjects.RetroFont.TEXT_SET1` :

- `Phaser.GameObjects.RetroFont.TEXT_SET2` :

- `Phaser.GameObjects.RetroFont.TEXT_SET3` :

Copy'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '

- `Phaser.GameObjects.RetroFont.TEXT_SET4` :

Copy'ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789'

- `Phaser.GameObjects.RetroFont.TEXT_SET5` :

Copy'ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() \'!?-*:0123456789'

- `Phaser.GameObjects.RetroFont.TEXT_SET6` :

Copy'ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789"(),-.\' '

- `Phaser.GameObjects.RetroFont.TEXT_SET7` :

Copy'AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW")28FLRX-\'39'

- `Phaser.GameObjects.RetroFont.TEXT_SET8` :

Copy'0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ'

- `Phaser.GameObjects.RetroFont.TEXT_SET9` :

Copy'ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,\'"?!'

- `Phaser.GameObjects.RetroFont.TEXT_SET10` :

Copy'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

- `Phaser.GameObjects.RetroFont.TEXT_SET11` :

Copy'ABCDEFGHIJKLMNOPQRSTUVWXYZ.,"-+!?()\':;0123456789'

## Author Credits

Content on this page includes work by:

- RexRainbow
- samme

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Game Object Factories

Blitter

---

# https://docs.phaser.io/phaser/concepts/gameobjects/blitter

# Blitter

A Guide to the Phaser Blitter Game Object

The Blitter Game Object is a special kind of container that creates, updates and manages Bob objects. Bobs are designed for rendering speed rather than flexibility. They consist of a texture, or frame from a texture, a position and an alpha value. You cannot scale or rotate them. They use a batched drawing method for speed during rendering.

A Blitter Game Object has one texture bound to it. Bobs created by the Blitter can use any Frame from this Texture to render with, but they cannot use any other Texture. It is this single texture-bind that allows them their speed.

If you have a need to blast a large volume of frames around the screen then Blitter objects are well worth investigating. They are especially useful for using as a base for your own special effects systems.

## Load texture

```hljs javascript
Copythis.load.image(key, url);

Reference: load image

## Add blitter container

Add blitter container

```hljs javascript
Copyvar blitter = this.add.blitter(x, y, key);

- `key` : The key of the texture this Game Object will use for rendering. The Texture must already exist in the Texture Manager.

Add blitter container from JSON

```hljs javascript
Copyvar blitter = this.make.blitter({
x: 0,
y: 0,
key: '',

// angle: 0,
// alpha: 1
// flipX: true,
// flipY: true,
// origin: {x: 0.5, y: 0.5},

add: true
});

## Custom class

```hljs javascript
Copyclass MyBlitter extends Phaser.GameObjects.Blitter {
constructor(scene, x, y, texture, frame) {
super(scene, x, y, texture, frame);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.

Example

```hljs javascript
Copyvar blitter = new MyBlitter(scene, x, y, key);

## Add bob object

```hljs javascript
Copyvar bob = blitter.create(x, y);
// var bob = blitter.create(x, y, frame, visible, index);

- `frame` : The Frame the Bob will use. It must be part of the Texture the parent Blitter object is using.
- `visible` : Should the created Bob render or not?
- `index` : The position in the Blitters Display List to add the new Bob at. Defaults to the top of the list.

### Add mutiple bob objects

```hljs javascript
Copyvar bobs = blitter.createMultiple(quantity, frame, visible);

- `quantity` : The quantity of Bob objects to create.

### Add bob object from callback

```hljs javascript
Copyvar bobs = blitter.createFromCallback(callback, quantity, frame, visible);
// var callback = function(bob, i){};

## Get bob objects

```hljs javascript
Copyvar bobs = blitter.children.list;

## Clear all bob objects

```hljs javascript
Copyblitter.clear();

## Bob object

A Bob has a position, `alpha` value and a `frame` from a texture that it uses to render with. You can also toggle the flipped and visible state of the Bob.

### Position

- Get

```hljs javascript
Copyvar x = bob.x;
var y = bob.y;

- Set

```hljs javascript
Copybob.setPosition(x, y);
// bob.x = 0;
// bob.y = 0;

or

```hljs javascript
Copybob.reset(x, y);
// bob.reset(x, y, frame);

### Frame

```hljs javascript
Copyvar frame = bob.frame;

- `frame` : Frame object.
- Set

```hljs javascript
Copybob.setFrame(frame);

### Flip

```hljs javascript
Copyvar flipX = bob.flipX;
var flipY = bob.flipY;

```hljs javascript
Copybob.setFlip(boolX, boolY);
// bob.setFlipX(boolean);
// bob.setFlipY(boolean);
// bob.flipX = flipX;
// bob.flipY = flipY;

```hljs javascript
Copybob.resetFlip(); // bob.setFlip(false, false)

### Visible

```hljs javascript
Copyvar visible = bob.visible;

```hljs javascript
Copybob.setVisible(boolean);
// bob.visible = v;

### Alpha

```hljs javascript
Copyvar alpha = bob.alpha;

```hljs javascript
Copybob.setAlpha(v);
// bob.aplha = v;

### Tint

```hljs javascript
Copyvar tint = bob.tint;

```hljs javascript
Copybob.setTint(tint);
// bob.tint = tint;

- `tint` : Tint value, between `0` and `0xffffff`.

### Destroy

```hljs javascript
Copybob.destroy();

### Data

```hljs javascript
Copyvar data = bob.data; // {}

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = bob.createBitmapMask();

See mask

## Shader effects

Support postFX effects

No preFX effect support

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Bitmap Text

Container

---

# https://docs.phaser.io/phaser/concepts/physics/matter

# Matter Physics

A Guide to the Phaser Matter Physics system for advanced physics simulations and interactions

Matter Physics is an open-source third party physics library and Phaser has its own custom version of it bundled. The reason for including Matter is that it provides a more advanced 'full body' physics system. If you need to move beyond rectangles and circles, with more complex physics shapes, and features such as constraints, joints and behaviours, then Matter is the system to use.

Matter physics must be enabled before it can be used. This can be done via the Game Configuration or on a per-Scene basis. Once enabled, you can then add physics-enabled Game Objects to your game. This will allow you to control the Sprite using the built-in physics functions, such as velocity, acceleration, gravity, etc.

By default a Game Object is not enabled for physics. This is because not all Game Objects need to be. For example, a background image or game logo likely doesn't need to be affected by physics, but a player character does. Therefore, you must enable physics on the Game Objects that you specifically want to be affected by it. We will cover this in detail in later chapters.

Arcade Physics and Matter Physics are two separate systems. An Arcade Physics sprite, for example, cannot collide with a Matter Physics sprite. You cannot add the same Sprite to both systems, you need to pick one or the other. However, although it's unusual to do so, both systems can actually run in parallel in the same Scene. This means that you can have a Sprite that uses Arcade Physics and another that uses Matter Physics, and they will both work at the same time, although they will not interact together.

## Matter world

The Matter Physics World provides a more advanced and realistic simulation of physics interactions compared to the Arcade Physics. Built on the Matter.js library it allows more complex physics behavior such as rigid body dynamics, constraints, and advanced collision detection.

### World configuration

The Matter Physics `config` object defines the behavior of the Matter Physics system globally.

- Basic configuration object

```hljs js
Copyconst config = {
// ...
physics: {
default: "matter",
},
// ...
};

const game = new Phaser.Game(config);

- Full configuration

```hljs js
Copyvar config = {
// ...
physics: {
default: "matter",
matter: {
// enabled: true,
// positionIterations: 6,
// velocityIterations: 4,
// constraintIterations: 2,
// enableSleeping: false,
// plugins: {
// attractors: false,
// wrap: false,
// },
// gravity: {
// x: 0,
// y: 0,
// }
// setBounds: {
// x: 0,
// y: 0,
// width: scene.sys.scale.width,
// height: scene.sys.scale.height,
// thickness: 64,
// left: true,
// right: true,
// top: true,
// bottom: true,
// },
// timing: {
// timestamp: 0,
// timeScale: 1,
// },
// correction: 1,
// getDelta: (function() { return 1000 / 60; }),
// autoUpdate: true,
// debug: false,
// debug: {
// showAxes: false,
// showAngleIndicator: false,
// angleColor: 0xe81153,
// showBroadphase: false,
// broadphaseColor: 0xffb400,
// showBounds: false,
// boundsColor: 0xffffff,
// showVelocity: false,
// velocityColor: 0x00aeef,
// showCollisions: false,
// collisionColor: 0xf5950c,
// showSeparations: false,
// separationColor: 0xffa500,
// showBody: true,
// showStaticBody: true,
// showInternalEdges: false,
// renderFill: false,
// renderLine: true,
// fillColor: 0x106909,
// fillOpacity: 1,
// lineColor: 0x28de19,
// lineOpacity: 1,
// lineThickness: 1,
// staticFillColor: 0x0d177b,
// staticLineColor: 0x1327e4,
// showSleeping: false,
// staticBodySleepOpacity: 0.7,
// sleepFillColor: 0x464646,
// sleepLineColor: 0x999a99,
// showSensors: true,
// sensorFillColor: 0x0d177b,
// sensorLineColor: 0x1327e4,
// showPositions: true,
// positionSize: 4,
// positionColor: 0xe042da,
// showJoint: true,
// jointColor: 0xe0e042,
// jointLineOpacity: 1,
// jointLineThickness: 2,
// pinSize: 4,
// pinColor: 0x42e0e0,
// springColor: 0xe042e0,
// anchorColor: 0xefefef,
// anchorSize: 4,
// showConvexHulls: false,
// hullColor: 0xd703d0
// }
},
},
// ...
};
var game = new Phaser.Game(config);

#### Pause

```hljs js
Copythis.matter.world.pause();

#### Resume

```hljs js
Copythis.matter.world.resume();

#### Drag object

```hljs js
Copythis.matter.add.mouseSpring();
// this.matter.add.mouseSpring(options);

- `options`

```hljs js
Copy{
length: 0.01,
stiffness: 0.1,
damping: 0,
angularStiffness: 1,
collisionFilter: {
category: 0x0001,
mask: 0xFFFFFFFF,
group: 0
}
}

- `collisionFilter` : Drag filter, see collision.

#### Enable

- World :
- Set bounds

Copy```js
this.matter.world.setBounds(x, y, width, height);
// this.matter.world.setBounds(x, y, width, height, thickness, left, right, top, bottom);

- `thickness` : The thickness of each wall, in pixels.
- `left`, `right`, `top`, `bottom` : If true will create the left/right/top/bottom bounds wall.

### Gravity

- Set

```hljs js
Copythis.matter.world.setGravity(x, y);
// this.matter.world.setGravity(x, y, scale);

- Disable

```hljs js
Copythis.matter.world.disableGravity();

#### Constraint of 2 game objects

```hljs js
Copyvar constraint = this.matter.add.constraint(gameObjectA, gameObjectB);
// var constraint = this.matter.add.constraint(gameObjectA, gameObjectB, length, stiffness, options);

- `gameObjectA`, `gameObjectB` : Matter game object, or matter body object.

- `length` : The target resting length of the constraint.
- `undefined` : Current distance between gameObjectA and gameObjectB. (Default value)
- `stiffness` : The stiffness of the constraint.
- `1` : Very stiff. (Default value)
- `0.2` : Acts as a soft spring.
- `options` :

```hljs js
Copy{
pointA: {
x: 0,
y: 0,
},
pointB: {
x: 0,
y: 0,
},
damping: 0,
angularStiffness: 0,
// render: {
// visible: true
// }
}

- `pointA`, `pointB` : Offset position of `gameObjectA`, `gameObjectB`.

Alias:

```hljs js
Copyvar constraint = this.matter.add.spring(
gameObjectA,
gameObjectB,
length,
stiffness,
options
);
var constraint = this.matter.add.joint(
gameObjectA,
gameObjectB,
length,
stiffness,
options
);

#### Constraint to world position

```hljs js
Copyvar constraint = this.matter.add.worldConstraint(
gameObjectB,
length,
stiffness,
options
);

- `gameObjectB` : Matter game object, or matter body object.

- `pointA` : World position.
- `pointB` : Offset position of `gameObjectB`.

#### Chain game objects

```hljs js
Copyvar composite = this.matter.add.chain(
composite,
xOffsetA,
yOffsetA,
xOffsetB,
yOffsetB,
options
);

- `composite` : Image composite

- `xOffsetA`, `yOffsetA` : Offset position of gameObjectA, in scale.
- xOffset = (Offset distance / width)
- yOffset = (Offset distance / height)
- `xOffsetB`, `yOffsetB` : Offset position of gameObjectB, in scale.

- `options` :

```hljs js
Copy{
length: undefined,
stiffness: 1,
damping: 0,
angularStiffness: 0,
// render: {
// visible: true
// }
}

- `length` : The target resting length of the constraint.
- `undefined` : Current distance between gameObjectA and gameObjectB. (Default value)
- `stiffness` : The stiffness of the constraint.
- `1` : Very stiff. (Default value)
- `0.2` : Acts as a soft spring.
- `composite`
- `composite.bodies` : An array of bodies.
- `composite.constraints` : An array of constraints

#### Remove constraint

```hljs js
Copythis.matter.world.removeConstraint(constraint);

## Matter Game Object

Game Objects are the building blocks of your game. Common Matter Game Objects include: Sprites, Images and TileBody.

#### Add Game Objects

Enable physics world.

##### Image object

```hljs js
Copyvar image = this.matter.add.image(x, y, key, frame);
// var image = this.matter.add.image(x, y, key, frame, config);

- `config` : Config object

##### Sprite object

```hljs js
Copyvar image = this.matter.add.sprite(x, y, key, frame);
// var image = this.matter.add.sprite(x, y, key, frame, config);

##### Any game object

```hljs js
Copyvar gameObject = this.matter.add.gameObject(gameObject);
// var gameObject = this.matter.add.gameObject(gameObject, config);

##### Image composite

Create a new composite containing Matter Image objects created in a grid arrangement.

```hljs js
Copyvar composite = this.matter.add.imageStack(key, frame, x, y, columns, rows);
// var composite = this.matter.add.imageStack(key, frame, x, y, columns, rows, columnGap, rowGap, options);

- `key`, `frame` : Texture key and frame name.
- `x`, `y` : Top-left position of these game objects.
- `columns`, `rows` : The number of columns/rows in the grid.
- `columnGap`, `rowGap` : The distance between each column/row.
- `config` : Config object
- `composite` : Composite matter object.
- `composite.bodies` : An array of bodies.

##### Game Object configuration

```hljs js
Copy{
label: 'Body',
shape: 'rectangle',
chamfer: null,

isStatic: false,
isSensor: false,
isSleeping: false,
ignoreGravity: false,
ignorePointer: false,

sleepThreshold: 60,
density: 0.001,
restitution: 0,
friction: 0.1,
frictionStatic: 0.5,
frictionAir: 0.01,

force: { x: 0, y: 0 },
angle: 0,
torque: 0,

collisionFilter: {
group: 0,
category: 0x0001,
mask: 0xFFFFFFFF,
},

// parts: [],

// plugin: {
// attractors: [\
// (function(bodyA, bodyB) { return {x, y}}),\
// ]
// },

slop: 0.05,

timeScale: 1,
}

- `label` : An arbitrary `String` name to help the user identify and manage bodies.

- `shape` :
- A string : `'rectangle'`, `'circle'`, `'trapezoid'`, `'polygon'`, `'fromVertices'`, `'fromPhysicsEditor'`

- An object :
- Rectangle shape

Copy ```js
{
type: 'rectangle',
// width: gameObject.width
// height: gameObject.height
}

- Circle shape

Copy ```js
{
type: 'circle',
// radius: (Math.max(gameObject.width, gameObject.height) / 2),
// maxSides: 25
}

- Trapezoid shape

Copy ```js
{
type: 'trapezoid',
// slope: 0.5,
}

- Polygon shape

Copy ```js
{
type: 'polygon',
// radius: (Math.max(gameObject.width, gameObject.height) / 2),
// sides: 5,
}

- Vertices

Copy ```js
{
type: 'fromVertices',
verts: points,
// flagInternal: false,
// removeCollinear: 0.01,
// minimumArea: 10,
}

- `points` :
- A string : `'x0 y0 x1 y1 ...'`
- An array of points : `[{x:x0, y:y0}, {x:x1, y:y1}, ...]`
- `chamfer` :
- `null`
- A number
- `{radius: value}`
- `{radius: [topLeft, topRight, bottomRight, bottomLeft]}`
- `isStatic` : A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.

- `isSensor` : A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.

- `isSleeping` : A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.

- `sleepThreshold` : The number of updates in which this body must have _near-zero velocity_ before it is set as sleeping.

- `density` : Density of the body, that is its mass per unit area.

- `restitution` : The restitution/bounce/elasticity of the body. The value is always positive and is in the range `(0, 1)`.
- `0` : Collisions may be perfectly inelastic and no bouncing may occur.
- `0.8` : The body may bounce back with approximately 80% of its kinetic energy.
- `friction` : Friction of the body. The value is always positive and is in the range `(0, 1)`.
- `0` : The body may slide indefinitely.
- `1` : The body may come to a stop almost instantly after a force is applied.
- `frictionStatic` : The static friction of the body (in the Coulomb friction model).
- `0` : The body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
- `10` : The higher the value, the more force it will take to initially get the body moving when nearly stationary.
- `frictionAir` : The air friction of the body (air resistance).
- `0` : The body will never slow as it moves through space.
- The higher the value, the faster a body slows when moving through space.
- `force` : The force to apply in the current step.

- `angle` : Angle of the body, in radians.

- `torque` : the torque (turning force) to apply in the current step.

- `collisionFilter` : An `Object` that specifies the collision filtering properties of this body.
- `collisionFilter.group`
- `collisionFilter.category` : A bit field that specifies the collision category this body belongs to.
- `collisionFilter.mask` : A bit mask that specifies the collision categories this body may collide with.
- `slop` : A tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
- The default should generally suffice, although very large bodies may require larger values for stable stacking.

###### Game Object collision

Collisions between two bodies will obey the following rules:

- Collision = (groupA == groupB)
- (grpupA == 0) \|\| (groupB == 0) :
- Collision = ((categoryA & maskB) !== 0) && ((categoryB & maskA) !== 0)

##### Velocity

```hljs js
CopygameObject.setVelocity(x, y);

```hljs js
CopygameObject.setVelocityX(x);

```hljs js
CopygameObject.setVelocityY(x);

###### Force

- Applies a force to a body.

```hljs js
CopygameObject.applyForce(force);

- `force` : `{x, y}`
- Applies a force to a body from a given position.

```hljs js
CopygameObject.applyForceFrom(position, force); // position, force: {x, y}

- `position` : `{x, y}`
- `force` : `{x, y}`
- Apply thrust to the forward position of the body.

```hljs js
CopygameObject.thrust(speed);

- `speed` : A number.
- Apply thrust to the left position of the body.

```hljs js
CopygameObject.thrustLeft(speed);

- `speed` : A number.
- Apply thrust to the right position of the body.

```hljs js
CopygameObject.thrustRight(speed);

- `speed` : A number.
- Apply thrust to the back position of the body.

```hljs js
CopygameObject.thrustBack(speed);

- `speed` : A number.

###### Gravity

- Ignore world gravity

```hljs js
CopygameObject.setIgnoreGravity(ignore);

- `ignore` : Set to true to ignore the effect of world gravity

###### Friction

```hljs js
CopygameObject.setFriction(value, air, fstatic);

```hljs js
CopygameObject.setFrictionAir(v);

```hljs js
CopygameObject.setFrictionStatic(v);

##### Fixed rotation

```hljs js
CopygameObject.setFixedRotation();

##### Angular velocity

```hljs js
CopygameObject.setAngularVelocity(v);

##### Enable

- Get

```hljs js
Copyvar isSensor = gameObject.isSensor();

```hljs js
CopygameObject.setSensor(value);

- `value` : Set `true` to enable sensor.

##### Collision group

- Collision grpup

```hljs js
CopygameObject.setCollisionGroup(value);

- Collision category
1. Get new collision category

```hljs js
Copyvar category = this.matter.world.nextCategory();

- `category` : An one-shot number (1, 2, 4, 8, ...., 2147483648 (1<<31))
2. Set collision category of game object

```hljs js
CopygameObject.setCollisionCategory(category);

3. Set category mask

```hljs js
CopygameObject.setCollidesWith([categoryA, categoryB, ...]);
// gameObject.setCollidesWith(categoryA);

##### Collision event

```hljs js
Copythis.matter.world.on("collisionstart", function (event, bodyA, bodyB) {
// var pairs = event.pairs;
});

- `event` :
- `event.pairs` : An array of collision pairs
- `event.pairs[i].bodyA`, `event.pairs[i].bodyB` : Matter body object.
- `body.gameObject` : Game object of matter body.
- `bodyA`, `bodyB` : Equal to `event.pairs[0].bodyA`, `event.pairs[0].bodyB`.

##### Collision bound

- Rectangle

```hljs js
CopygameObject.setRectangle(width, height, options);

- Circle

```hljs js
CopygameObject.setCircle(radius, options);

- Polygon

```hljs js
CopygameObject.setPolygon(radius, sides, options);

- Trapezoid

```hljs js
CopygameObject.setTrapezoid(width, height, slope, options);

- Any

```hljs js
CopygameObject.setBody(config, options);

- `config` :
- Rectangle shape

##### Bounce

```hljs js
CopygameObject.setBounce(v);

- restitution

#### Mass

```hljs js
CopygameObject.setMass(v);

```hljs js
CopygameObject.setDensity(v);

##### Enable

```hljs js
Copyvar config = {
// ...
physics: {
matter: {
// ...
enableSleeping: true,
// ...
},
},
};

##### Sleep threshold

```hljs js
CopygameObject.setSleepThreshold(value);

##### Sleep events

- Sleeping start

```hljs js
Copythis.matter.world.on("sleepstart", function (event, body) {});

- Sleeping end

```hljs js
Copythis.matter.world.on("sleepend", function (event, body) {});

## Author Credits

Content on this page includes work by:

- RexRainbow
- samme

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Arcade Physics

Scale Manager

---

# https://docs.phaser.io/phaser/concepts/gameobjects/container

# Container

A Guide to the Phaser Container Game Object

A Container, as the name implies, can 'contain' other types of Game Object. When a Game Object is added to a Container, the Container becomes responsible for the rendering of it. By default it will be removed from the Display List and instead added to the Containers own internal list.

The position of the Game Object automatically becomes relative to the position of the Container.

The transform point of a Container is \[0, 0\] (local space) and that cannot be changed. The children you add to the Container should be positioned with this value in mind. I.e. you should treat \[0, 0\] as being the _center_ of the Container, and position children positively and negative around it as required.

When the Container is rendered, all of its children are rendered as well, in the order in which they exist within the Container. Container children can be repositioned using methods such as MoveUp, MoveDown and SendToBack.

If you modify a transform property of the Container, such as Container.x or Container.rotation then it will automatically influence all children as well.

Containers can include other Containers for deeply nested transforms.

Containers can have masks set on them and can be used as a mask too. However, Container children cannot be masked. The masks do not 'stack up'. Only a Container on the root of the display list will use its mask.

Containers can be enabled for input. Because they do not have a texture you need to provide a shape for them to use as their hit area. Container children can also be enabled for input, independent of the Container.

If input enabling a child you should not set both the origin and a negative scale factor on the child, or the input area will become misaligned.

Containers can be given a physics body for either Arcade Physics, Impact Physics or Matter Physics. However, if Container children are enabled for physics you may get unexpected results, such as offset bodies, if the Container itself, or any of its ancestors, is positioned anywhere other than at 0 x 0. Container children with physics do not factor in the Container due to the excessive extra calculations needed. Please structure your game to work around this.

It's important to understand the impact of using Containers. They add additional processing overhead into every one of their children. The deeper you nest them, the more the cost escalates. This is especially true for input events. You also loose the ability to set the display depth of Container children in the same flexible manner as those not within them. In short, don't use them for the sake of it. You pay a small cost every time you create one, try to structure your game around avoiding that where possible.

## Add container

```hljs javascript
Copyvar container = this.add.container(x, y);
// var container = this.add.container(x, y, children); // children: an array of game object

## Custom class

- Define class

```hljs javascript
Copyclass MyContainer extends Phaser.GameObjects.Container {
constructor(scene, x, y, children) {
super(scene, x, y, children);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs javascript
Copyvar container = new MyContainer(scene, x, y, children);

## Destroy container

```hljs javascript
Copycontainer.destroy();

Also destroy all children game objects.

## Set properties

Reference game object, to set position, angle, visible, alpha, etc...

## Set size

```hljs javascript
Copycontainer.setSize(width, height);

Default `width` and `height` is 0.

## Set scroll factor

```hljs javascript
Copycontainer.setScrollFactor(x, y);

Apply this scrollFactor to all Container children.

```hljs javascript
Copycontainer.setScrollFactor(x, y, true);

## Hit area

```hljs javascript
Copycontainer.setInteractive(new Phaser.Geom.Circle(0, 0, radius), Phaser.Geom.Circle.Contains);
// container.setInteractive(false); // disable

Assign hit area with a circle shape.

## Non-exclusive

```hljs javascript
Copycontainer.setExclusive(false);

Allows a game object added to container many times.

## Children

### Add child

```hljs javascript
Copycontainer.add(child); // child: a game object or an array of game objects

```hljs javascript
Copycontainer.addAt(child, index);

### Child exists in container

```hljs javascript
Copyvar hasChild = container.exists(child);

### Get child

```hljs javascript
Copyvar firstChild = container.first;
var nextChild = container.next;
var prevChild = container.previous;
var lastChild = container.last;

```hljs javascript
Copyvar child = container.getByName(name);

```hljs javascript
Copyvar child = container.getRandom(startIndex, length);

```hljs javascript
Copyvar child = container.getFirst(property, value, startIndex, endIndex);
// value: the value to test the property against. Must pass a strict (`===`) comparison check.

```hljs javascript
Copyvar children = container.getAll(property, value, startIndex, endIndex);
// value: the value to test the property against. Must pass a strict (`===`) comparison check.

```hljs javascript
Copyvar amount = container.count(property, value, startIndex, endIndex);
// value: the value to test the property against. Must pass a strict (`===`) comparison check.

### Sort children

Sort the contents of this Container so the items are in order based on the given property. For example: `sort('alpha')` would sort the elements based on the value of their alpha property.

```hljs javascript
Copycontainer.sort(property);

```hljs javascript
Copycontainer.sort(property, function(childA, childB){
return 0; // 0, 1, -1
});

### Remove child

```hljs javascript
Copycontainer.remove(child);
// container.remove(child, true); // remove child object and destroy it

```hljs javascript
Copycontainer.removeAt(index);
// container.removeAt(index, true); // remove child object and destroy it

```hljs javascript
Copycontainer.removeBetween(startIndex, endIndex);
// container.removeBetween(startIndex, endIndex, true); // remove children objects and destroy them

```hljs javascript
Copycontainer.removeAll();
// container.removeAll(true); // remove all children objects and destroy them

Removing child from container without destroying will put back into scene's display list.

### Order of child

```hljs javascript
Copycontainer.moveTo(child, index);

```hljs javascript
Copycontainer.bringToTop(child);

```hljs javascript
Copycontainer.sendToBack(child);

```hljs javascript
Copycontainer.moveUp(child);

```hljs javascript
Copycontainer.moveDown(child);

```hljs javascript
Copycontainer.moveAbove(child1, child2); // Move child1 above child2

```hljs javascript
Copycontainer.moveBelow(child1, child2); // Move child1 below child2

```hljs javascript
Copycontainer.swap(child1, child2);

```hljs javascript
Copycontainer.reverse();

```hljs javascript
Copycontainer.shuffle();

### Replace child

```hljs javascript
Copycontainer.replace(oldChild, newChild);
// container.replace(oldChild, newChild, true); // destroy oldChild

### Set properties

```hljs javascript
Copycontainer.setAll(property, value, startIndex, endIndex);

### For each child

- Iterate current children list

```hljs javascript
Copycontainer.iterate(callback);
// container.iterate(callback, context);
// container.iterate(callback, context, arg0, arg1, ...);

- `callback` :

Copy```javascript
function(child, arg0, arg1, ...) {

}

- Iterate a copy of current children list

```hljs javascript
Copycontainer.each(callback);
// container.each(callback, context);
// container.each(callback, context, arg0, arg1, ...);

### Get world position, rotation, scale

```hljs javascript
Copyvar matrix = child.getWorldTransformMatrix();
var x = matrix.tx;
var y = matrix.ty;
var rotation = matrix.rotation;
var scaleX = matrix.scaleX;
var scaleY = matrix.scaleY;

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = container.createBitmapMask();

See mask

## Shader effects

Support postFX effects

No preFX effect support

## Compare with group object

- Container and group objects are all have a children list.
- Container has position, angle, alpha, visible, ...etc, but group does not have.
- Container controls properties of children (position, angle, alpha, visible, ...etc), but group won't.
- A game object could be added to many groups, but it only could be added to one container ( `exclusive` mode).

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Blitter

Display List

---

# https://docs.phaser.io/phaser/concepts/gameobjects/light

# Light

A Guide to the Phaser Light Game Object and Lights Manager

A 2D Light created by the `Phaser.GameObjects.LightsManager`, available from within a scene via `this.lights`.

Any Game Objects using the Light2D pipeline will then be affected by these Lights as long as they have a normal map.

They can also simply be used to represent a point light for your own purposes.

Lights cannot be added to Containers. They are designed to exist in the root of a Scene.

It only works in WebGL render mode.

## Lights Manager

### Enable Lights Manager

- Enable

```hljs javascript
Copythis.lights.enable();

- Disable

```hljs javascript
Copythis.lights.disable();

or

```hljs javascript
Copythis.lights.active = false;

### Ambient color

```hljs javascript
Copythis.lights.setAmbientColor(color);

- `color` : Integer color value.

### Get all lights managed by this Lights Manager

```hljs javascript
Copy var lightsCount = this.lights.getLightCount();

### Get all lights seen by the given Camera

```hljs javascript
Copy var visibleLights = this.lights.getLights(camera);

- `camera` : The Camera to cull Lights for.

### Get maximum number of Lights allowed to appear

```hljs javascript
Copy var maxVisibleLights = this.lights.getMaxVisibleLights();

### Shut down the Lights Manager

Recycles all active Lights into the Light pool, resets ambient light color and clears the lists of Lights and culled Lights.

```hljs javascript
Copy this.lights.shutdown();

## Light Game Object

- Add

```hljs javascript
Copyvar light = this.lights.addLight(x, y, radius);
// var light = this.lights.addLight(x, y, radius, color, intensity);

- `x`, `y` : The horizontal/vertical position of the Light. Default is 0.
- `radius` : The radius of the Light. Default is 128. Default is 0.
- `color` : The integer RGB color of the light. Default is `0xffffff`.
- `intensity` : The intensity of the Light. Default is 1.
- Add Point Light
- The Point Light Game Object provides a way to add a point light effect into your game, without the expensive shader processing requirements of the traditional Light Game Object. It renders using a custom shader, designed to give the impression of a point light source, of variable radius, intensity and color, in your game. However, unlike the Light Game Object, it does not impact any other Game Objects, or use their normal maps for calcuations. This makes them extremely fast to render compared to Lights and perfect for special effects, such as flickering torches or muzzle flashes.

```hljs javascript
Copyvar light = this.lights.addPointLight(x, y, color, radius, intensity, attenuation);

- `x`, `y` : The horizontal/vertical position of the Light.

- `color` : The integer RGB color of the light. Default is `0xffffff`.

- `radius` : The radius of the Light. Default is 128.

- `intensity` : The intensity of the Light. Default is 1.

- `attenuation` : The attenuation of the Point Light. This is the reduction of light from the center point. Default is 0.1.
- Remove

```hljs javascript
Copythis.lights.removeLight(light);

- Destroy

```hljs javascript
Copythis.lights.destroy();

### Position

- Set

```hljs javascript
Copylight.setPosition(x, y);

```hljs javascript
Copylight.x = x;
light.y = y;

- Get

```hljs javascript
Copyvar x = light.x;
var y = light.y;

### Color

- Set
- Red, green, blue

```hljs javascript
Copylight.color.set(red, green, blue);

```hljs javascript
Copylight.color.r = red;
light.color.g = green;
light.color.b = blue;

- Integer value

```hljs javascript
Copylight.setColor(colorInteger);

- Get
- Red, green, blue

```hljs javascript
Copyvar red = light.color.r;
var green = light.color.g;
var blue = light.color.b;

### Size

```hljs javascript
Copylight.setRadius(radius);
// light.radius = radius;

```hljs javascript
Copylight.diameter = diameter;
// light.width = diameter;
// light.height = diameter;
// light.displayWidth = diameter;
// light.displayHeight = diameter;

```hljs javascript
Copyvar radius = light.radius;

```hljs javascript
Copyvar diameter = light.diameter;
// var diameter = light.displayWidth;
// var diameter = light.displayHeight;
// var diameter = light.width;
// var diameter = light.height;

### Intensity

```hljs javascript
Copylight.setIntensity(intensity);

```hljs javascript
Copylight.intensity = intensity;

```hljs javascript
Copyvar intensity = light.intensity;

## Game object

### Load texture with normal map

```hljs javascript
Copythis.load.image(key, [url, normalMapUrl]);

- `url` : Url of texture.
- `url` : Url of texture.
- `normalMapUrl` : Url of normal map.

### Apply light pipeline

```hljs javascript
CopygameObject.setPipeline('Light2D');

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Layer

Mesh

---

# https://docs.phaser.io/phaser/concepts/gameobjects/components

# Game Object Components

A Guide to the Phaser Components System

## Alpha Component

The Alpha Component is responsible for setting the alpha value of a Game Object. This is a value between 0 and 1. A value of 1 is fully opaque, where-as a value of 0 is fully transparent. By default, Game Objects have an alpha value of 1.

The current local alpha value of a Game Object is stored in its `alpha` property:

```hljs js
Copyconst alpha = player.alpha;

To set the alpha you can use the chainable `setAlpha` method:

```hljs js
Copyplayer.setAlpha(alpha);

Or, you can set the `alpha` property directly:

```hljs js
Copyplayer.alpha = alpha;

By default, Game Objects will have an alpha value of 1. This means they will be fully visible. You can reset the alpha of a Game Object either by setting its `alpha` property to 1, or by calling the chainable `clearAlpha` method:

```hljs js
Copyplayer.clearAlpha();

You can use this property to create effects such as a Game Object 'fading out' over time, or to make a Game Object appear to be semi-transparent. As an internal optimization, Game Objects with an alpha value of 0 will be skipped by the renderer.

### Per Vertex Alpha

For some Game Objects it's possible to set a different alpha value per corner. This is known as vertex alpha. It allows you to create effects such as a Game Object fading out from one corner to another, or to make a Game Object appear to be semi-transparent at one corner, but not the other. Not all Game Objects support vertex alpha, but those that do will have a `setAlpha` method that accepts 4 values, one for each corner.

The corners are given in the order: Top Left, Top Right, Bottom Left and Bottom Right:

```hljs js
Copyplayer.setAlpha(topLeft, topRight, bottomLeft, bottomRight);

You can also set the properties directly:

```hljs js
Copyplayer.alphaTopLeft = topLeft;
player.alphaTopRight = topRight;
player.alphaBottomLeft = bottomLeft;
player.alphaBottomRight = bottomRight;

The ability to set per-vertex alpha is a WebGL only feature.

### Alpha and Parents

When a Game Object has its alpha property set it will multiply its alpha value with that of its parent Container, if it has one. For example, if you have a parent Game Object with an alpha value of 0.5, and a child with an alpha value of 0.5, then the child will be rendered at 0.25 alpha as it's multiplied with the parent's alpha:

```hljs js
Copycontainer.setAlpha(0.5);
child.setAlpha(0.5);

## Blend Mode Component

The Blend Mode Component allows Game Objects to set a blend mode which is used during rendering. Blend modes allow for different types of combining / blending of the pixels in Game Objects with those of the background.

The current blend mode of a Game Object is stored in its `blendMode` numeric property:

```hljs js
Copyconst blendMode = sprite.blendMode;

You can set the blend mode of a Game Object using the chainable `setBlendMode` method:

```hljs js
Copysprite.setBlendMode(mode);

Or, you can set the `blendMode` property directly:

```hljs js
Copysprite.blendMode = mode;

The mode value can be one of the `BlendModes` constants, such as `Phaser.BlendModes.SCREEN`. It can also be a string, such as `SCREEN`, or an integer, such as `3`. If you give a string, it must be all upper-case and match exactly those available in the `BlendModes` constants list. If you give an integer, it must be a valid Blend Mode constant ID from the list below.

The default value is zero, which is the `NORMAL` blend mode.

### Blend Mode Constants

The available blend modes are:

| ID | Constant | Description |
| --- | --- | --- |
| 0 | `NORMAL` | Normal blend mode. For Canvas and WebGL. |
| 1 | `ADD` | Add blend mode. For Canvas and WebGL. |
| 2 | `MULTIPLY` | Multiply blend mode. For Canvas and WebGL. |
| 3 | `SCREEN` | Screen blend mode. For Canvas and WebGL. |
| 4 | `OVERLAY` | Overlay blend mode. For Canvas only. |
| 5 | `DARKEN` | Darken blend mode. For Canvas only. |
| 6 | `LIGHTEN` | Lighten blend mode. For Canvas only. |
| 7 | `COLOR_DODGE` | Color dodge blend mode. For Canvas only. |
| 8 | `COLOR_BURN` | Color burn blend mode. For Canvas only. |
| 9 | `HARD_LIGHT` | Hard light blend mode. For Canvas only. |
| 10 | `SOFT_LIGHT` | Soft light blend mode. For Canvas only. |
| 11 | `DIFFERENCE` | Difference blend mode. For Canvas only. |
| 12 | `EXCLUSION` | Exclusion blend mode. For Canvas only. |
| 13 | `HUE` | Hue blend mode. For Canvas only. |
| 14 | `SATURATION` | Saturation blend mode. For Canvas only. |
| 15 | `COLOR` | Color blend mode. For Canvas only. |
| 16 | `LUMINOSITY` | Luminosity blend mode. For Canvas only. |
| 17 | `ERASE` | Erase blend mode. For Canvas and WebGL. |
| 18 | `SOURCE_IN` | Source in blend mode. For Canvas only. |
| 19 | `SOURCE_OUT` | Source out blend mode. For Canvas only. |
| 20 | `SOURCE_ATOP` | Source atop blend mode. For Canvas only. |
| 21 | `DESTINATION_OVER` | Destination over blend mode. For Canvas only. |
| 22 | `DESTINATION_IN` | Destination in blend mode. For Canvas only. |
| 23 | `DESTINATION_OUT` | Destination out blend mode. For Canvas only. |
| 24 | `DESTINATION_ATOP` | Destination atop blend mode. For Canvas only. |
| 25 | `LIGHTER` | Xor blend mode. For Canvas only. |
| 26 | `COPY` | Copy blend mode. For Canvas only. |
| 27 | `XOR` | Xor blend mode. For Canvas only. |

### Canvas vs. WebGL

The Canvas Renderer supports all blend modes. However, the WebGL Renderer only supports the following blend modes:

- `NORMAL`
- `ADD`
- `MULTIPLY`
- `SCREEN`
- `ERASE`

If you set a blend mode that is not supported by the WebGL Renderer, it will instead use the `NORMAL` blend mode.

Under WebGL you can create your own custom blend modes.

The Canvas Renderer will use the Canvas `globalCompositeOperation` feature which is part of the browsers Canvas API. This is why it has so many additional blend modes available.

### WebGL Performance Considerations

The Phaser WebGL Renderer will use the built-in GL Blending functions, which are extremely fast. However, they are more limited in scope than the Canvas Renderer, which is why you only have 5 available by default. Because they use the GL blend functions it means they require a batch flush before they can be set. So, if you have a series of Game Objects that are together in a batch, but one of them has a blend mode set different from the rest, the renderer will stop the batch, draw them all, set the blend mode, draw that one Game Object, then start a new batch again for the rest.

While modern GPUs are designed to handle tasks like this with ease, you should always be mindful of the potential impact this constant batch flushing can have. If you need to change blend modes often, try to organize your Game Objects so that those with shared blend modes are added to the display list consecutively, without breaks, as this will allow them to be rendered in as few batches as possible.

## Bounds Component

The Bounds Component is responsible for providing methods you can call that will return various bounds related values from a Game Object.

The 'bounds' of a Game Object can be summed-up as a rectangle that fully encapsulates the visual bounds of the Game Object, taking into account its scale and rotation.

Not all Game Objects have a bounds. For example, the Graphics Game Object does not have an instrinsic bounds because of the way in which it works. However, most texture-based Game Objects, such as Sprites, Text and TileSprites can return their bounds.

If the Game Object has a parent container, then its bounds will be factored based on its influence from the Container.

The bounds of a Game Object can be obtained by calling its `getBounds` method:

```hljs js
Copyconst bounds = sprite.getBounds();

This will return a `Rectangle` Shape object, where the `x` and `y` values are the top-left of the bounds, and the `width` and `height` values are the width and height of the bounds.

You can also pass in a Rectangle object to the `getBounds` method, and it will set the values based on the bounds of the Game Object:

```hljs js
Copyconst rect = new Phaser.Geom.Rectangle();

sprite.getBounds(rect);

If you don't pass in a Rectangle then a new instance will be created and returned to you. So, if you need to call this method frequently, pass in a Rectangle instance to help ease object creation.

Every time you call this method the bounds are calculated fresh. They are not cached internally, or updated automatically. So be aware of this if you are using bounds in any kind of update loop, or at scale.

### Bounds Related Points

As well as the `getBounds` method, there are also a number of other methods available that return specific points from the bounds of the Game Object. If you don't require the full bounds then getting just the point you do need is more efficient.

These methods are:

- `getTopLeft`
- `getTopCenter`
- `getTopRight`
- `getLeftCenter`
- `getCenter`
- `getRightCenter`
- `getBottomLeft`
- `getBottomCenter`
- `getBottomRight`

They all operate in the same way. You can optionally pass them a Vector2 instance in which to store the resulting point, or they can create one for you. They all also have the `includeParent` boolean, which allows them to involve a parent container, if the Game Object has one, in the calculations, or not.

For example, here is how to use the `getTopLeft` method without factoring in a parent:

```hljs js
Copyconst point = sprite.getTopLeft();

And here is how to use it, but factor in a parent:

```hljs js
Copyconst point = sprite.getTopLeft(null, true);

And here is how to use it, but factor in a parent, and store the result in a pre-created Vector2:

```hljs js
Copyconst point = new Phaser.Math.Vector2();

sprite.getTopLeft(point, true);

All of the listed methods can be used in this way.

None of the bounds methods allow you to set the bounds. They are all 'read only' methods.

## Crop Component

The Crop Component allows texture-based Game Objects to 'crop' themselves. A crop is a rectangle that limits the area of the texture frame that is visible during rendering.

Cropping a Game Object does not change its size, dimensions, physics body or hit area, it just visually changes what you can see of it during the render-pass.

The current crop state of a Game Object is stored in its `isCropped` boolean:

```hljs js
Copyconst isCropped = player.isCropped;

To crop a Game Object you can use the chainable `setCrop` method:

```hljs js
Copyplayer.setCrop(x, y, width, height);

It takes four arguments that represent the x/y coordinate to start the crop from, and the width and height of the crop. A crop is always a rectangle and cannot be any other shape.

The coordinates are relative to the Game Object, so 0 x 0 is the top-left of the Game Object texture frame.

Instead of passing in numeric values directly, or you can provide a single Rectangle Geometry object instance as the first and only parameter:

```hljs js
Copyconst rect = new Phaser.Geom.Rectangle(x, y, width, height);

player.setCrop(rect);

Note that this is a Geometry object, not a Rectangle Shape object.

One set, to adjust the crop you can call the `setCrop` method again with new values, or pass in an updated Rectangle instance.

If you wish to remove the crop from a Game Object, resetting it to show the entire texture again, call the `setCrop` method with no arguments:

```hljs js
Copyplayer.setCrop();

### Crop Limitations

Internally, the crop works by adjusting the textures UV coordinates prior to rendering. Therefore the crop can only ever be a rectangle that fits inside the existing texture area.

You cannot crop a Game Object to show more of the texture than originally allowed, or use any other shape than a rectangle.

Because it works by just adjusting the UV coordinates it does provide a way to do super-fast masking, if you need a rectangular mask.

## Depth Component

The Depth Component allows Game Objects to be sorted within the Scene based on their 'depth' value, allowing them to move in front or behind other Game Objects. In some game frameworks this is known as the 'z-index'.

When a Scene Camera is preparing to render each frame, it will sort all the renderable Game Objects in the Scene based on their depth value. Those with the lowest depth values are rendered first, with the Game Objects with the highest depth values being rendered last, or 'on top' of the earlier ones.

By default, all Game Objects are given a depth value of zero, meaning they are all sorted based on their creation order, and placement in the Display List. The Depth Component allows you to override this.

The current depth of a Game Object is stored in its `depth` numeric property:

```hljs js
Copyconst depth = sprite.depth;

You can set the depth of a Game Object using the chainable `setDepth` method:

```hljs js
Copysprite.setDepth(value);

Or, you can modify the `depth` property directly:

```hljs js
Copysprite.depth = value;

The value can be any number, either an integer or a float. The default value is zero.

There is no upper or lower bounds on what the value can be and the numbers do not have to be assigned consecutively. If it's easier for you to give a Game Object a depth of 1000, and another a depth of 500, then you're free to do so.

You can also bind the depth property to a Game Objects position. For example, it's quite common to bind the depth of a Game Object to its `y` position, so that the higher it is in the Scene, the higher its depth value:

```hljs js
Copyupdate ()
{
sprite.setDepth(sprite.y);
}

If one or more Game Objects share the same `depth` value, then they are sorted based on their index within the Display List. The first one in the list is rendered first, and so on.

### Depth Updates

When the `depth` property of any Game Object is modified, the Depth Component tells the Scene that it needs to run a depth sort on the Display List. This is done by the component calling the `DisplayList.queueDepthSort` method and it happens automatically, you don't need to do anything else.

Because sorting the rendering list can be a costly operation if there are a lot of Game Objects, Phaser will queue the depth sort and only execute it at render time. If no Game Objects have had their depth changed since the last frame, the depth sort is skipped entirely.

Creating new Game Objects, or removing existing ones, will also cause the depth sort to be queued.

### Depth and Containers

Container Game Objects can have their depth property set just like any other Game Object and it will influence at which point they are rendered. However, when a child is placed inside a Container, its own depth value is ignored. Instead, the depth of the Container is used by all children and cannot be overidden.

If you wish to adjust the order of children within a Container, there are specific methods available to do this, such as `moveUp`, `moveDown`, `sendToBack` and so on. See the Container documentation for more details.

## Flip Component

The Flip Component allows for texture-based Game Objects to 'flip' themselves either horizontally, vertically or both. As the name implies, this means the texture being displayed by the Game Object is inverted on the respective axis.

The current flip of a Game Object is stored in its `flipX` and `flipY` boolean properties:

```hljs js
Copyconst flipX = player.flipX;
const flipY = player.flipY;

To set the flipped state of a Game Object you can use the chainable `setFlip`, `setFlipX` and `setFlipY` methods:

```hljs js
Copyplayer.setFlip(x, y);
player.setFlipX(x);
player.setFlipY(y);

Or, you can set the `flipX` and `flipY` properties directly:

```hljs js
Copyplayer.flipX = true;
player.flipY = false;

### Toggle and Reset a Flip

There are two helper methods available which will toggle the current flipX or flipY state:

```hljs js
Copyplayer.toggleFlipX();
player.toggleFlipY();

You can reset the flipped state of a Game Object by calling the `resetFlip` method:

```hljs js
Copyplayer.resetFlip();

### Flip vs. Scale

As you may have read in the Scale section of the guide, you can achieve the same visual effect as Flip by setting the scale to a negative value.

However, flip works independently of scale and is set as a boolean, not a ratio. This allows you to flip a Game Object based on an event, such as a patrolling enemy reaching a wall, irrespective of its scale value.

Game Objects always flip based on the center of their texture frame. You cannot set the origin of a flip.

## Mask Component

The Mask Component allows you to set if a Game Object should be 'masked' during rendering. A mask controls which pixels of the Game Object are visible during rendering. Anything outside of the mask is not rendered. In Phaser there are two types of mask: a Bitmap Mask and a Geometry Mask.

The current mask of a Game Object is stored in its `mask` property:

```hljs js
Copyconst mask = sprite.mask;

You can set the mask of a Game Object using the chainable `setMask` method:

```hljs js
Copysprite.setMask(mask);

Or, you can set the `mask` property directly:

```hljs js
Copysprite.mask = mask;

To remove a mask, you can either call the chainable `clearMask` method:

```hljs js
Copysprite.clearMask();

Or, set the `mask` property to `null`:

```hljs js
Copysprite.mask = null;

When using the `clearMask` method you also have the option of destroying the mask currently attached to the Gamne Object:

```hljs js
Copysprite.clearMask(true);

### How Masks Work in Phaser

There are two types of mask in Phaser, which we will cover in the next two sections. Although they offer different features they are both created and applied in the same way.

Masks are global objects. They are not bound to, or belong to any one single Game Object. You can, and often should, use the same mask on as many different Game Objects as you like, at the same time.

Masks are created and positioned in world space only. They are not applied relative to the Game Object they are masking. For example, if you create a mask positioned at world coordinates 200x300, then it will be positioned at 200x300 regardless of where the Game Object it is masking is.

Masks themselves are not Game Objects, they do not live on the display list and cannot be modified like a Game Object, i.e. you cannot set their rotation or scale as you would a Sprite. That does not mean you cannot modify a mask post-creation, it simply means that mask objects do not have a Transform component.

### Geometry Mask

A Geometry Mask is a special type of mask that uses the path information from a Graphics Game Object in order to define its shape.

With the Canvas Renderer it uses the 'clipping path' feature of the Canvas API. The WebGL Renderer uses a built-in WebGL feature called the Stencil Buffer.

It's called a Geometry Mask because it uses geometric data in order to create itself. Graphics Game Objects have lots of features available for generating these paths, including `lineTo`, `arc`, `ellipse` and more. Please see the Graphics Game Object documentation for more details.

Because it uses path data for the mask it means you cannot do 'per pixel' masking with this type of mask. It's not suitable for creating a mask from a sprite with a gradient texture, for example. For that you should use a Bitmap Mask instead.

Geometry Masks have the ability to set their `invertAlpha` boolean properties. This is a WebGL only feature and allows you to 'invert' which area of the mask is applied, or not.

### Bitmap Mask

A Bitmap Mask uses a texture in order to control which pixels will be 'masked out' of the target Game Object during rendering. In order to achieve this it uses a special internal pipeline called the BitmapMask Pipeline. Because of this, it only works with the WebGL Renderer.

As it uses a texture for the shader input it means you can mask things on a per-pixel level, something not possible with the Geometry Mask. The source of the Bitmap Mask can be either a texture-based Game Object, such as a Sprite, or a Dynamic Texture instance.

The Bitmap Mask shader works by taking the alpha level from the mask texture and the alpha level of the masked Game Object and calculating the final resulting alpha level from the two, per pixel. It does not matter what color the mask texture is drawn in, all it looks at is the alpha value of each pixel. For example, if the mask has an alpha value of 0.95 for a specific pixel, and the Game Object texture has an alpha of 0.5 for the same pixel, the final alpha value when rendered will be 0.45. Naturally, the lower the resulting alpha value, the less the Game Object will be visible through it.

Bitmap Masks have the ability to set their `invertAlpha` boolean properties. This allows you to invert the alpha comparison, so that a low alpha value in the mask texture results in a high alpha value in the masked Game Object, and vice versa.

Note that you cannot set a Bitmap Mask and a Blend Mode on a single Game Object.

### Performance Considerations

When using Geometry Masks you should keep in mind the complexity of the path, i.e. how many points it has in it. The more complex the path, the longer it will take both Canvas and WebGL to render the masked Game Objects.

When using Bitmap Masks you should keep in mind the size of the masked texture. The larger it is, the more pixels have to be passed through the mask shader and the more GPU power will be required to render the masked Game Objects.

With both types of mask, the renderer needs to perform a lot of additional calculations to handle the masking. This includes breaking the batch in WebGL, enabling the stencil functions or mask shader and then rendering the masked Game Objects. For this reason you should never apply a mask to a Game Object that doesn't yet require it.

Masks are, however, batched. This means if you have a group of masked Game Objects in sequence in the Display List, all sharing the same mask, then you will only pay the cost of establishing that mask once.

## Origin Component

By default most Game Objects are _centered_ on their `x` and `y` coordinates. This means that if you create a Sprite at the coordinates 300x200, then the _center_ of the Sprite will be placed at 300x200.

In some game frameworks the default origin is the top-left, and in others the bottom-left. It is also sometimes known as the 'anchor point' or 'pivot point'. However, in Phaser it's called the origin and it defaults to the center. You can change this via the methods available from the Origin Component.

The current origin of a Game Object is stored in its `originX` and `originY` numeric properties:

```hljs js
Copyconst originX = player.originX;
const originY = player.originY;

To set the origin of a Game Object you can use the chainable `setOrigin` method:

```hljs js
Copyplayer.setOrigin(x, y);

Or, you can set the `originX` and `originY` properties directly:

```hljs js
Copyplayer.originX = 0.5;
player.originY = 0.5;

The values are given as a normalized value between 0 and 1. For example, setting the origin to 0.5 means it will be placed exactly in the center of the Game Object, no matter what its dimensions. A value of 0 would be the top-left of the Game Object, and 1 would be the bottom-right.

The origin controls both the placement of the Game Object and also the point around which it rotates. If you wanted to rotate a Game Object around its top-left corner, you would set its origin to be 0x0.

Or, if you wanted to position a Game Object in the bottom-right of the screen, and the screen was 800x600 in size, you could set the origin to be 1x1 and its position to be 800x600.

Game Objects can only have one origin. For example, they do not have a unique origin for rotation and another for position, or scale. If you need to emulate this behavior, you can create use a Container Game Object and then add your other Game Objects to it.

### The Display Origin

Phaser also offers what is known as the Display Origin. This is a way to set the origin of a Game Object using pixel values instead of normalized ones. The range of the values is between 0 and the base width or height of the Game Object.

To set the display origin of a Game Object you can use the chainable `setDisplayOrigin` method:

```hljs js
Copyplayer.setDisplayOrigin(x, y);

Or, you can set the `displayOriginX` and `displayOriginY` properties directly:

```hljs js
Copyplayer.displayOriginX = 256;
player.displayOriginY = 128;

### Custom Frame Pivot

Some software, such as Texture Packer, allows you to define a specific 'pivot point' for a texture frame. This is then exported in the JSON data that Texture Packer creates. Phaser will look for these custom pivot points and then set the origin of the Game Object to match it. This is done via the method `setOriginFromFrame`:

```hljs js
Copyplayer.setOriginFromFrame();

This is called automatically if you create a Sprite and provide it with a texture frame that has a custom pivot point in the data. But you can also call it directly, if you need to.

## Pipeline Component

The Pipeline Component controls which rendering pipeline the Game Object uses to render with. This is only set if the Phaser Game is using the WebGL Renderer. The Canvas Renderer does not use custom pipelines.

A Pipeline is an internal term and class construct that Phaser uses to handle rendering different types of Game Object. For example, there is the Multi Pipeline, which Sprites use, a Rope Pipeline for the Rope Game Object, and so on. You can also create your own custom pipelines, which can give you a lot of flexibility and power when it comes to rendering. The Pipeline Component is how you set a pipeline on a Game Object.

The current pipeline of a Game Object is stored in its `pipeline` property:

```hljs js
Copyconst pipeline = sprite.pipeline;

This will be `null` by default. It is not set until the Game Object is instantiated. As part of that process, all Game Objects call the `initPipeline` method, which is responsible for setting the default pipeline the Game Object uses. This is an internal method and should not be called directly.

You can set the pipeline of a Game Object using the chainable `setPipeline` method:

```hljs js
Copysprite.setPipeline(pipeline);

Or, you can set the `pipeline` property directly:

```hljs js
Copysprite.pipeline = pipeline;

When using the `setPipeline` method you can pass either a string, or an instance of a `WebGLPipeline` to the method. Regardless of which you pass, it will look-up the pipeline in the Pipeline Manager and if found it will be set on the Game Object. If you pass a string that doesn't match any pipeline, it will be ignored. If you pass a pipeline that isn't found in the Pipeline Manager, it will be ignored.

To remove a pipeline, you can either call the chainable `resetPipeline` method:

```hljs js
Copysprite.resetPipeline();

Or, set the `pipeline` property to match the `defaultPipeline` property:

```hljs js
Copysprite.pipeline = sprite.defaultPipeline;

The `defaultPipeline` property is set when the Game Object is first created and should be treated as read-only.

If you wish to get the string-based name of the pipeline the Game Object is using, you can call the `getPipelineName` method:

```hljs js
Copyconst name = sprite.getPipelineName();

### Pipeline Data

The Pipeline Component also has a `pipelineData` property, which is an object that contains data that the pipeline may need during rendering. You can set a key-value object to be used as the pipeline data by passing it to the `setPipeline` method:

```hljs js
Copysprite.setPipeline(pipeline, { foo: 1, bar: 2 });

Or, you can call the `setPipelineData` method:

```hljs js
Copysprite.setPipelineData('key', value);

Pipeline data is not used by any of the default pipelines in Phaser, but is made available for your own custom pipelines. For example, if you wanted to create a pipeline that colored Game Objects in a special way, you could store the color of the Game Object in the pipeline data, ready for it to read prior to rendering.

Creating custom pipelines is an advanced feature of Phaser and requires a good understanding of WebGL and GLSL shaders. It will be covered elsewhere in this guide.

## Scroll Factor Component

The Scroll Factor Component allows you to control the scroll factor of a Game Object. The "scroll factor" is how much influence a camera will exert upon a Game Object as the camera scrolls around the game world.

As covered in the Transform section, Game Objects have a position within the world. This position is combined with the Scene camera and used to calculate where the Game Object should be rendered on-screen. If the camera is moving around the world, the Game Object will appear to move with it, even though its position hasn't changed, simply by virtue of the fact that the camera is now looking at another part of the world.

The scroll factor allows you to modify the relationship between the Game Objects position and how the Camera projects it. Setting a scroll factor never changes the position of the Game Object, or any related physics bodies, it just changes where they are rendered by the camera.

The current scroll factor of a Game Object is stored in its `scrollFactorX` and `scrollFactorY` numeric properties:

```hljs js
Copyconst scrollFactorX = player.scrollFactorX;
const scrollFactorY = player.scrollFactorY;

To set the scroll factor of a Game Object you can use the chainable `setScrollFactor` method:

```hljs js
Copyplayer.setScrollFactor(x, y);

Or, you can set the `scrollFactorX` and `scrollFactorY` properties directly:

```hljs js
Copyplayer.scrollFactorX = 0.5;
player.scrollFactorY = 0.5;

The default value for each axis is 1. This means as the camera scrolls, the Game Object will appear to move at the exact same rate.

A value of zero will stop the Game Object from being influenced by the camera. This will effectively 'lock' it in place on the screen. This can be useful if you wish to create a UI or other interface element that remains in the same place regardless of where the camera is looking.

A value of 0.5 will make the Game Object move at half the rate of the camera. The scroll factor can be any value from zero and above, although realistically you would likely clamp it to a value between 0 and 1.

## Size Component

The Size Component is responsible for managing both the base and display size of a Game Object.

Most Game Objects have an instrinsic, or base size. For texture-based Game Objects, such as Sprites, the size is set automatically to match the size of the texture frame the Sprite is using. When the frame changes, the size is updated automatically. Some Game Objects have a size that you specify upon creation, such as the Tile Sprite.

It is very rare for you to need to change the base size of a Game Object. However, there are some Game Objects, such as Containers, which do not have a base size. In these cases, the `setSize` method is used to set the size of the Game Object.

The current base size of a Game Object is stored in its `width` and `height` numeric properties:

```hljs js
Copyconst width = player.width;
const height = player.height;

To set the size you can use the chainable `setSize` method:

```hljs js
Copyplayer.setSize(width, height);

Or, you can set the `width` and `height` properties directly:

```hljs js
Copyplayer.width = 128;
player.height = 128;

The size is used in lots of internal places, from creating input hit areas, to physics bodies, to calculating the bounds of a Game Object. As mentioned, it's not common to adjust it, however the properties are public should you need to. Just be aware it may have unintended consequences.

### Display Size

Unlike the Game Object's size, its Display Size was created specifically for you to modify as needed.

The Display Size is, for a texture-based Game Object, its frame size multiplied by its local scale. For example, if a Sprite has a 128x128 texture frame set and a scale of 2.0, then its display width and height would be 256x256.

The current display size of a Game Object is stored in its `displayWidth` and `displayHeight` numeric properties:

```hljs js
Copyconst width = player.displayWidth;
const height = player.displayHeight;

To set the size you can use the chainable `setDisplaySize` method:

```hljs js
Copyplayer.setDisplaySize(width, height);

Or, you can set the `displayWidth` and `displayHeight` properties directly:

```hljs js
Copyplayer.displayWidth = 128;
player.displayHeight = 128;

The values are given in pixels.

Setting these values, either directly or via the method, will adjust the local _scale_ of the Game Object. It provides a way for you to set the size in pixels that you wish the Game Object to be displayed at, rather than as a scale ratio.

### Parent Size

A Game Object Container has no size by default. You can set its size via the `setSize` method, but it will only impact the Container itself, not any of its children. If you wish to set the size of the Container and all children, you should scale it instead.

If a Game Object has a parent Container then the display size of the parent is automatically factored in to the Game Object's size. For example, if you have a Sprite that is 128x128 in size, but its parent Container has a scale of 0.5, then the Sprite will be displayed at 64x64 pixels. This is because it's scaled by the Container.

If you set the display width or height of a Game Object to zero, it will be skipped for rendering. This is because the Game Object has no dimensions, so it cannot be seen. Therefore, to optimize the rendering pass, Phaser will skip it entirely.

## Transform Component

The Transform Component is responsible for managing the position, scale and rotation of a Game Object.

Most Game Objects have this component, but you can test for it programatically by checking if the `hasTransformComponent` property exists and is `true`:

```hljs js
Copyif (player.hasTransformComponent)
{
// This Game Object has a Transform Component
}

### Position

The current local position of a Game Object is stored in its `x` and `y` properties.

```hljs js
Copyconst x = player.x;
const y = player.y;

You can set the position using the chainable `setPosition`, `setX` and `setY` methods:

```hljs js
Copyplayer.setPosition(x, y);
player.setX(x);
player.setY(y);

Or, you can set the `x` and `y` properties directly:

```hljs js
Copyplayer.x = x;
player.y = y;

They can be either negative or positive values, and whole numbers or floats.

The position of a Game Object is always relative to its parent Container, if it has one. If it doesn't have a parent, then the position is its location within the Game World.

For example:

```hljs js
Copycontainer.setPosition(300, 200);
child.setPosition(100, 100);

In the code above, the Container is positioned at 300 x 200 in the game world. The child of the Container is positioned at 100 x 100. This means that the child will appear at 400 x 300 in the game world, because its position is relative to the Container.

```hljs js
Copycontainer.setPosition(300, 200);
child.setPosition(-100, -100);

In this code, the child will appear at 200 x 100 in the game world, because it has a negative position, relative to its parent.

The position is always set and returned as a number. This allows you to use the position directly in further calculations, or manipulate it as you would any other number:

```hljs js
Copyenemy.x = player.x;
enemy.y = player.y - 100;

See the Origin Component to learn how Phaser knows which point of the Game Object to use as its x/y anchor.

Phaser also has two additional position related properties: `z` and `w`. You can set these optional values when calling `setPosition`, or they have their own chainable methods `setZ` and `setW`. These properties are not typically used internally by Phaser, but are made available should you require them for more advanced position, such as depth sorting.

The `copyPosition` method allows you to copy a Game Objects position directly to another object:

```hljs js
Copyenemy.copyPosition(player);

The target object can be any object that has public `x` and `y` properties, such as another Game Object, or a Vector2.

You can also set the Game Object to have a random position with the `setRandomPosition` method:

```hljs js
Copyenemy.setRandomPosition();

By default, if you don't provide any parameters, the Game Object will be given a position anywhere without the size set by the Scale Manager. However, you can also pass in x, y, width and height parameters to the method, to control a rectangle in which the random position will be set:

```hljs js
Copyenemy.setRandomPosition(100, 100, 600, 400);

The Geometry classes have a variety of similar methods, for positioning objects within geometric shapes, however this method is handy if you just want to quickly position an object anywhere on-screen.

### Scale

The current local scale of a Game Object is stored in its `scaleX` and `scaleY` properties.

```hljs js
Copyconst scaleX = player.scaleX;
const scaleY = player.scaleY;

You can set the scale using the chainable `setScale` method:

```hljs js
Copyplayer.setScale(x, y);

Or, you can set the `scaleX` and `scaleY` properties directly:

```hljs js
Copyplayer.scaleX = x;
player.scaleY = y;

There is also a special property called `scale` which allows you to set both the x and y scale at the same time, to the same value:

```hljs js
Copyplayer.scale = 2;

Scale values can be either negative or positive, and whole numbers or floats.

By default, Game Objects have a scale value of 1, meaning they will be rendered at the same size as their texture frame. By adjusting the scale properties you can make them appear bigger or smaller. The number you give is multiplied by their base size. For example, a scale value of 0.5 would halve the displayed size of the Game Object, where as a value of 2 would double it.

Setting a scale does not change the actual underlying size of the Game Object. If you were to read the width or height of a Game Object after adjusting its scale, the returned values would be the un-scaled original sizes. You can read more about this in the Size Component section.

The scale is always set and returned as a number. This allows you to use the scale directly in further calculations, or manipulate it as you would any other number.

Scaling always takes place around the center of the Game Object, regardless of the Game Objects origin, and cannot be changed.

The scale of a Game Object is always relative to its parent Container, if it has one.

```hljs js
Copycontainer.setScale(2, 2);

In the code above, the Container is scaled by 2 on each axis, meaning and all of its children will be doubled in size.

```hljs js
Copycontainer.setScale(2, 2);
child.setScale(2, 2);

In this code, the child will appear at 4x the size of the container, because it has been scaled twice itself and also inherits the double scale from its parent.

If you scale any axis of a Game Object to zero, it will be skipped for rendering. This is because a Game Object with a scale of zero has no dimensions, so it cannot be seen. Therefore, to optimize the rendering pass, Phaser will skip those Game Objects entirely.

If you scale a Game Object negatively, an interesting effect happens. The Game Object will appear flipped. For example:

```hljs js
Copyplayer.scaleX = -1;

This will render the Game Object as if it was flipped horizontally. This is handy for characters that need to face in two directions but you only need to store the textures drawn in one direction, using the negative scale them to render the opposites at run-time. Note that Phaser also has a 'Flip Component' that can be used to flip a Game Object without adjusting its scale.

When you scale a texture based Game Object it's important to understand that the renderer will need to 'guess' at any pixels that are now present because of the increased size of the Game Object. For example, if you have a 16x16 texture and you scale it by 4, it will appear as 64x64 on screen. All of those extra pixels that didn't exist before in the original texture are created by the GPU during the rendering process. A similar thing happens if you scale a texture down. The GPU has to decide which pixels to not display and tries to create an average that best represents the orignal image.

Lots of art software, like Photoshop, have the ability to apply special filters and effects when resizing images to create more refined results. However, WebGL and Canvas don't have this feature and they tend to favor speed over visual fidelity. After all, unlike Photoshop, they have to do this 60 times a second, or more. If you see a drop in visual quality worse than you were expecting, then you should consider using a smaller, or larger, texture that was pre-scaled in an art package instead.

### Rotation

The current local rotation of a Game Object is stored in its `rotation` property:

```hljs js
Copyconst rotation = player.rotation;

The `rotation` value is always in radians. If you prefer to work with degrees, you can use the `angle` property instead:

```hljs js
Copyconst angle = player.angle;

To set the rotation, or angle, you can use the chainable `setRotation` and `setAngle` methods:

```hljs js
Copyplayer.setRotation(rotation);
player.setAngle(angle);

Or, you can set the `rotation` and `angle` properties directly:

```hljs js
Copyplayer.rotation = rotation;
player.angle = angle;

Phaser uses a right-handed coordinate system, where 0 is East, to the right, and 3.14 (or 180 degrees) is West, to the left. South is 1.57, or 90 degrees and North is -1.57 (or -90 degrees). If you visualise the rotation as a circle, the bottom half is positive and the top-half is negative. This is the same as Adobe Flash, from which the first version of Phaser took its inspiration.

Rotation in Phaser always takes place around the origin of the Game Object. Which means by default Game Objects typically rotate around their center. As you've read, you can adjust the origin. This changes where both the position and rotation occurs. You cannot change the rotation point of a Game Object, only its origin.

The rotation of a Game Object is always relative to its parent Container, if it has one.

```hljs js
Copycontainer.setRotation(0.75);

In the code above, the Container is rotated by 0.75 radians, meaning all of its children will be rotated by the same amount.

```hljs js
Copycontainer.setRotation(0.75);
child.setRotation(0.75);

In this code, the child will be rotated by 1.5 radians in total, because it inherits the rotation from its parent, then adds its own.

The `rotation` property only contains the local rotation value. If you wish to get the sum rotation of the Game Object taking into account all of its ancestors, you can use the `getParentRotation` method:

```hljs js
Copyconst rotation = player.getParentRotation();

This will return the total rotation of all parent Containers, in radians. If you need the world rotation, then add the Game Objects rotation to the final value:

```hljs js
Copyconst rotation = player.getParentRotation() + player.rotation;

### Local and World Transforms

The Transform Component has a couple of methods that allow you to return a Transform Matrix instance that has been set to be either the local or world transform for the Game Object.

A Transform Matrix is a 3x3 identity matrix use for perform affine transformations. In Phaser, the operations are performed in the order of Translation, Rotation and then Scale, always in that order.

The method `getLocalTransformMatrix` will return a purely local Transform Matrix:

```hljs js
Copyconst matrix = player.getLocalTransformMatrix();

This matrix will not include any transforms from parent Containers. It will only contain the transforms of the Game Object itself.

The method `getWorldTransformMatrix` will return a Transform Matrix that contains the Game Objects local transforms, multiplied with those of all of its parent Containers:

```hljs js
Copyconst matrix = player.getWorldTransformMatrix();

Both methods have the option to be passed Transform Matrix instances. If given, the values will be set in those, instead of a new instance being created and returned. If you are calling either of these methods a lot, i.e. in a constant update loop, or en-masse, then you should create some temporary matrices to pass to them, to avoid the constant creation of new objects:

```hljs js
Copyconst tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();

player.getLocalTransformMatrix(tempMatrix);

Or:

```hljs js
Copyconst tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
const tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();

player.getWorldTransformMatrix(tempMatrix, tempParentMatrix);

## Visible Component

The Visible Component is responsible for setting the visible state of a Game Object.

A Game Object with a visible state of `true` is rendered to the display, where-as one with a visible state of `false` is not. By default, Game Objects have a visible state of `true`.

The current local visible state of a Game Object is stored in its `visible` boolean property:

```hljs js
Copyconst visible = player.visible;

To set the visible state you can use the chainable `setVisible` method:

```hljs js
Copyplayer.setVisible(visible);

Or, you can set the `visible` boolean directly:

```hljs js
Copyplayer.visible = false;

By default, Game Objects will have a visible state of `true`. This means they will be rendered.

Being able to toggle the visibility of a Game Object is very useful for quickly showing or hiding Game Objects, without impacting their positions or other properties.

Hidden Game Objects are skipped by the renderer, saving cycle time, but still retain their internal position and state. This means that you can hide a Game Object, then make it visible again at a later stage, without having to reposition it or set other properties again.

An invisible Game Object is still updated, however. For example, if you had an animated Sprite that was playing through an animation sequence, then setting it to be invisible would not cause the animation to pause as it would still be updating. The same goes for other actions, such as tweens, or physics collisions. The visible state is purely a rendering toggle.

### Parent Visibility

If a Game Object has a parent Container, then the visible state of the parent will control if any of its children are rendered, or not. An invisible parent will skip rendering of all children, regardless of their own visible settings. However, if the parent is visible, then the childs visibliity will be used instead.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Game Objects

Game Object Factories

---

# https://docs.phaser.io/phaser/concepts/gameobjects/group

# Group

A Guide to the Phaser Group to manage Game Objects collections

A Group is a way for you to create, manipulate, or recycle similar Game Objects. Group membership is non-exclusive. A Game Object can belong to several groups, one group, or none.

Groups themselves aren't displayable, and can't be positioned, rotated, scaled, or hidden.

## Add group object

```hljs javascript
Copyvar group = this.add.group(config);
// var group = this.add.group(gameObjects, config); // Add game objects into group

- `config`

```hljs javascript
Copy{
classType: Phaser.GameObjects.Sprite,
defaultKey: null,
defaultFrame: null,
active: true,
maxSize: -1,
runChildUpdate: false,
createCallback: null,
removeCallback: null,
createMultipleCallback: null
}

- `classType` :
- Sprite : `Phaser.GameObjects.Sprite`
- Image : `Phaser.GameObjects.Image`
- `runChildUpdate` : Set `true` to run `gameObject.update()` every tick.

- `createCallback` : A function to be called when adding or creating group members.

```hljs javascript
Copyvar callback = function(gameObject) {
}

- `removeCallback` : A function to be called when removing group members.

- `createMultipleCallback` : A function to be called when creating several group members at once.

```hljs javascript
Copyvar callback = function(gameObjects) {
}

## Add game object

```hljs javascript
Copygroup.add(gameObject);
// group.add(gameObject, true); // add this game object to display and update list of scene

```hljs javascript
Copygroup.addMultiple(gameObjects); // array of game objects
// group.addMultiple(gameObjects, true);

- Game object will only be added once.
- Game object will be removed automatically when destroyed.

## Remove game object

```hljs javascript
Copygroup.remove(gameObject);
// group.remove(gameObject, true); // also remove this game object from display and update list of scene

Remove all game objects

```hljs javascript
Copygroup.clear();
// group.clear(removeFromScene, destroyChild);

## Get game objects

- Get all game objects.

```hljs javascript
Copyvar gameObjects = group.getChildren(); // array of game objects

- Get all matching game objects

```hljs javascript
Copyvar gameObjects = group.getMatching(property, value);
// var gameObjects = group.getMatching(property, value, startIndex, endIndex);

- Amount of game objects.

```hljs javascript
Copyvar len = group.getLength();

- Group is full. Maximun size is set in `maxSize`.

```hljs javascript
Copyvar isFull = group.isFull();

- Game object is in group.

```hljs javascript
Copyvar isInGroup = group.contains(child);

## Group actions

### Property

- Set property

```hljs javascript
Copygroup.propertyValueSet(key, value);
// group.propertyValueSet(key, value, step, index, direction);

- `direction` :
- `1` : From beginning to end
- `-1` : From end to beginning
- Increase property

```hljs javascript
Copygroup.propertyValueInc(key, value);
// group.propertyValueInc(key, value, step, index, direction);

- `direction` :
- `1` : From beginning to end
- `-1` : From end to beginning

### Position

- Set Position

```hljs javascript
Copygroup.setX(value);
// group.setX(value, step);
group.setX(value);
// group.setY(value, step);
group.setXY(x, y);
// group.setXY(x, y, stepX, stepY);

- Increase Position

```hljs javascript
Copygroup.incX(value);
// group.incX(value, step);
group.incY(value);
// group.incY(value, step);
group.incXY(x, y);
// group.incXY(x, y, stepX, stepY);

- Shift position

```hljs javascript
Copygroup.shiftPosition(x, y);
// group.shiftPosition(x, y, direction);

- `direction` :
- `0` : First to last
- `1` : Last to first

### Angle

- Set angle

```hljs javascript
Copygroup.angle(value);
// group.angle(value, step);

or

```hljs javascript
Copygroup.rotate(value);
// group.rotate(value, step);

- Rotate around

```hljs javascript
Copygroup.rotateAround(point, angle);

```hljs javascript
Copygroup.rotateAroundDistance(point, angle, distance);

### Visible

- Set visible

```hljs javascript
Copygroup.setVisible(value);
// group.setVisible(value, index, direction);

- `index` : An optional offset to start searching from within the items array.
- `direction` : The direction to iterate through the array.
- `1` : From beginning to end
- `-1` : From end to beginning
- Toggle visible

```hljs javascript
Copygroup.toggleVisible();

### Alpha

- Set alpha

```hljs javascript
Copygroup.setAlpha(value);
// group.setAlpha(value, step);

### Tint

- Set tint

```hljs javascript
Copygroup.setTint(value);
// group.setTint(topLeft, topRight, bottomLeft, bottomRight);

### Blend mode

- Set blend mode

```hljs javascript
Copygroup.setBlendMode(value);

### Scale

- Set scale

```hljs javascript
Copygroup.scaleX(value);
// group.scaleX(value, step);
group.scaleY(value);
// group.scaleY(value, step);
group.scaleXY(scaleX, scaleY);
// group.scaleXY(scaleX, scaleY, stepX, stepY);

### Origin

- Set origin

```hljs javascript
Copygroup.setOrigin(originX, originY);
// group.setOrigin(originX, originY, stepX, stepY);

### Depth

- Set depth

```hljs javascript
Copygroup.setDepth(value, step);

### Animation

- Play animation

```hljs javascript
Copygroup.playAnimation(key, startFrame);

### Hit area

- Set hit-area

```hljs javascript
Copygroup.setHitArea();
// group.setHitArea(hitArea, hitAreaCallback);

### Shuffle

- Shuffle array

```hljs javascript
Copygroup.shuffle();

## Active/inactive game objects

- Set inactive

```hljs javascript
Copygroup.kill(gameObject); // gameObject.setActive(false)
group.killAndHide(gameObject); // gameObject.setActive(false).setVisible(false)

- Amount of active game objects

```hljs javascript
Copyvar activeCount = group.countActive();

```hljs javascript
Copyvar activeCount = group.getTotalUsed();

```hljs javascript
Copyvar inactiveCount = group.countActive(false);

- Amount of free (maxSize - activeCount) game objects

```hljs javascript
Copyvar freeCount = group.getTotalFree(); // group.maxSize - group.getTotalUsed()

- Get first active/inactive game object,
- Return `null` if no game object picked.

```hljs javascript
Copyvar gameObject = group.getFirst(active); // active = true/false
var gameObject = group.getFirstAlive(); // Equal to group.getFirst(true, ...)
var gameObject = group.getFirstDead(); // Equal to group.getFirst(false, ...)

- Create one if no game object picked.

```hljs javascript
Copyvar gameObject = group.getFirst(active, true, x, y, key, frame, visible); // active = true/false
var gameObject = group.getFirstAlive(true, x, y, key, frame, visible); // Equal to group.getFirst(true, ...)
var gameObject = group.getFirstDead(true, x, y, key, frame, visible); // Equal to group.getFirst(false, ...)
var gameObject = group.get(x, y, key, frame, visible); // Equal to group.getFirst(false, true, ...)

- Use ( `x`, `y`, `key`, `frame`) to create Image/ Sprite game object.

```hljs javascript
Copyvar newGameObject = new GameObjectClass(x, y, key, frame);

## Create game objects

```hljs javascript
Copyvar gameObjects = group.createFromConfig(config);
var gameObjects = group.createMultiple(config); // config in array

```hljs javascript
Copy{
classType: this.classType,
key: undefined, // Required
frame: null,
visible: true,
active: true,
repeat: 0, // Create (1 + repeat) game objects
createCallback: undefined, // Override this.createCallback if not undefined

// Position
setXY: {
x:0,
y:0,
stepX:0,
stepY:0
},
// Actions.SetXY(gameObjects, x, y, stepX, stepY)
gridAlign: false,
// {
// width: -1,
// height: -1,
// cellWidth: 1,
// cellHeight: 1,
// position: Phaser.Display.Align.TOP_LEFT,
// x: 0,
// y: 0
// }
// Actions.GridAlign(gameObjects, gridAlign)

// Angle
setRotation: {
value: 0,
step:
},
// Actions.SetRotation(gameObjects, value, step)

// Scale
setScale: {
x:0,
y:0,
stepX:0,
stepY:0
},
// Actions.SetScale(gameObjects, x, y, stepX, stepY)

// Alpha
setAlpha: {
value: 0,
step:
},
// Actions.SetAlpha(gameObjects, value, step)

setOrigin: {
x:0,
y:0,
stepX:0,
stepY:0
},

// Input
hitArea: null,
hitAreaCallback: null,
// Actions.SetHitArea(gameObjects, hitArea, hitAreaCallback)
}

- `classType` :
- Sprite: `Phaser.GameObjects.Sprite`
- Image: `Phaser.GameObjects.Image`

## Destroy

- Destroy group only

```hljs javascript
Copygroup.destroy();

- Destroy group and children

```hljs javascript
Copygroup.destroy(true);

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Graphics

Image

---

# https://docs.phaser.io/phaser/concepts/gameobjects/layer

# Layer

A Guide to the Phaser Layer to group 'layers' of Game Objects

A Layer is a special type of Game Object that acts as a Display List. You can add any type of Game Object to a Layer, just as you would to a Scene. Layers can be used to visually group together 'layers' of Game Objects:

```hljs js
Copyconst spaceman = this.add.sprite(150, 300, 'spaceman');
const bunny = this.add.sprite(400, 300, 'bunny');
const elephant = this.add.sprite(650, 300, 'elephant');

const layer = this.add.layer();

layer.add([ spaceman, bunny, elephant ]);

The 3 sprites in the example above will now be managed by the Layer they were added to. Therefore, if you then set `layer.setVisible(false)` they would all vanish from the display.

You can also control the depth of the Game Objects within the Layer. For example, calling the `setDepth` method of a child of a Layer will allow you to adjust the depth of that child within the Layer itself, rather than the whole Scene. The Layer, too, can have its depth set as well.

The Layer class also offers many different methods for manipulating the list, such as the methods `moveUp`, `moveDown`, `sendToBack`, `bringToTop` and so on. These allow you to change the display list position of the Layers children, causing it to adjust the order in which they are rendered. Using `setDepth` on a child allows you to override this.

Layers can have Post FX Pipelines set, which allows you to easily enable a post pipeline across a whole range of children, which, depending on the effect, can often be far more efficient that doing so on a per-child basis.

Layers have no position or size within the Scene. This means you cannot enable a Layer for physics or input, or change the position, rotation or scale of a Layer. They also have no scroll factor, texture, tint, origin, crop or bounds.

If you need those kind of features then you should use a Container instead. Containers can be added to Layers, but Layers cannot be added to Containers.

However, you can set the Alpha, Blend Mode, Depth, Mask and Visible state of a Layer. These settings will impact all children being rendered by the Layer.

## Add layer

```hljs javascript
Copyvar layer = this.add.layer();
// var layer = this.add.layer(children);

- `children` : Array of game objects added to this layer.

## Custom class

```hljs javascript
Copyclass MyLayer extends Phaser.GameObjects.Layer {
constructor(scene, children) {
super(scene, children);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.

Example

```hljs javascript
Copyvar layer = new MyLayer(scene, children);

## Add child

- Add child

```hljs javascript
Copylayer.add(gameObject);
// layer.add(gameObjects);

- `gameObject` : A game object, or an array of game objects.
- Add child at

```hljs javascript
Copylayer.addAt(gameObject, index);

- Replace child

```hljs javascript
Copylayer.replace(oldGameObject, newGameObject);

## Remove child

- Remove child

```hljs javascript
Copyvar removed = layer.remove(gameObject);

- Remove child at

```hljs javascript
Copyvar removed = layer.removeAt(index);

- Remove children between indexes

```hljs javascript
Copyvar removed = layer.removeBetween(startIndex, endIndex);

- Remove all children

```hljs javascript
Copylayer.removeAll();

Removed game object won't be added to display list of scene, use

```hljs javascript
CopygameObject.addToDisplayList();

to add it

## Create mask

```hljs javascript
Copyvar mask = layer.createBitmapMask();

See mask

## Shader effects

Support postFX effects

No preFX effect support

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Image

Light

---

# https://docs.phaser.io/phaser/concepts/gameobjects/video

# Video

A Guide to the Phaser Video Game Object

This Game Object is capable of handling playback of a video file, video stream or media stream.

You can optionally 'preload' the video into the Phaser Video Cache:

```hljs js
Copypreload () {
this.load.video('ripley', 'assets/aliens.mp4');
}

create () {
this.add.video(400, 300, 'ripley');
}

You don't have to 'preload' the video. You can also play it directly from a URL:

```hljs js
Copycreate () {
this.add.video(400, 300).loadURL('assets/aliens.mp4');
}

To all intents and purposes, a video is a standard Game Object, just like a Sprite. And as such, you can do all the usual things to it, such as scaling, rotating, cropping, tinting, making interactive, giving a physics body, etc.

Transparent videos are also possible via the WebM file format. Providing the video file has was encoded with an alpha channel, and providing the browser supports WebM playback (not all of them do), then it will render in-game with full transparency.

Playback is handled entirely via the Request Video Frame API, which is supported by most modern browsers. A polyfill is provided for older browsers.

**Autoplaying Videos**

Videos can only autoplay if the browser has been unlocked with an interaction, or satisfies the MEI settings. The policies that control autoplaying are vast and vary between browser. You can, and should, read more about it here:

If your video doesn't contain any audio, then set the noAudio parameter to true when the video is loaded, and it will often allow the video to play immediately:

```hljs js
Copypreload () {
this.load.video('pixar', 'nemo.mp4', true);
}

The 3rd parameter in the load call tells Phaser that the video doesn't contain any audio tracks. Video without audio can autoplay without requiring a user interaction. Video with audio cannot do this unless it satisfies the browsers MEI settings. See the MDN Autoplay Guide for further details.

Or:

```hljs js
Copycreate () {
this.add.video(400, 300).loadURL('assets/aliens.mp4', true);
}

You can set the noAudio parameter to true even if the video does contain audio. It will still allow the video to play immediately, but the audio will not start.

Note that due to a bug in IE11 you cannot play a video texture to a Sprite in WebGL. For IE11 force Canvas mode.

More details about video playback and the supported media formats can be found on MDN:

-
-

## Load video

```hljs javascript
Copythis.load.video(key, url, noAudio);

Reference: load video

Can't load video cross-origin via `this.load.video(...)`.

Using `this.add.video(x, y).loadURL(urls, noAudio, crossOrigin)` to load video cross-origin.

## Add video object

### Reference video from Video Cache

```hljs javascript
Copyvar video = this.add.video(x, y, key);

- `key` : Key of the Video this Game Object will play, as stored in the Video Cache.

### Load video from URL

1. Add video object

```hljs javascript
Copyvar video = this.add.video(x, y);

2. Play video from URL

```hljs javascript
Copyvideo.loadURL(url);
// video.loadURL(urls, noAudio, crossOrigin);

- `noAudio` : Does the video have an audio track? If not you can enable auto-playing on it.
- `false` : Has audio track. Default behavior.
- `crossOrigin` : The value to use for the `crossOrigin` property in the video load request.
- `undefined` : `crossorigin` will not be set in the request. Default behavior.
- `'anonymous'`
- `'use-credentials'`

### Load video from MediaStream

```hljs javascript
Copyvideo.loadMediaStream(stream);
// video.loadMediaStream(stream, noAudio, crossOrigin);

- `stream` : The MediaStream object.
- `noAudio` : Does the video have an audio track? If not you can enable auto-playing on it.
- `false` : Has audio track. Default behavior.
- `crossOrigin` : The value to use for the `crossOrigin` property in the video load request.
- `undefined` : `crossorigin` will not be set in the request. Default behavior.
- `'anonymous'`
- `'use-credentials'`

```hljs javascript
Copynavigator.mediaDevices.getUserMedia({ video: true, audio: false })
.then(function(stream) {
video.loadMediaStream(stream, true);
video.play();
})
.catch(function(err) {

})

- navigator.mediaDevices.getUserMedia

### Size

- Initial size : 256x265 ( `video.setSize(256, 256)`)
- Size after playing : Size of video from metadata

## Play

```hljs javascript
Copyvideo.play();
// video.play(loop, markerIn, markerOut);

- `loop` : Should the video loop automatically when it reaches the end? Please note that not all browsers support _seamless_ video looping for all encoding formats.
- `markerIn`, `markerOut` : Optional in/out marker time, in seconds, for playback of a sequence of the video.

Call `video.play()` when playing video first time.

If you need audio in your videos, then you'll have to consider the fact that
**the video cannot start playing until the user has interacted with the browser**, into your game flow.

## Pause

- Pause

```hljs javascript
Copyvideo.setPaused();
// video.setPaused(true);

- Resume

```hljs javascript
Copyvideo.setPaused(false);

Call `video.setPaused(false)` to resume playing.

## Stop

Stops the video playing and clears all internal event listeners.

```hljs javascript
Copyvideo.stop();

## Is playing

- Is playing

```hljs javascript
Copyvar isPlaying = video.isPlaying(); // (not PAUSE) and (not not ENDED)

- Is paused

```hljs javascript
Copyvar isPaused = video.isPaused();

## Playback time

- Get

```hljs javascript
Copyvar playbackTime = video.getCurrentTime();

or

```hljs javascript
Copyvar t = video.getProgress(); // t: 0~1

- Set
- Set to

```hljs javascript
Copyvideo.setCurrentTime(playbackTime); // time in seconds

```hljs javascript
Copyvideo.seekTo(t); // t: 0~1

- Is seeking

```hljs javascript
Copyvar isSeeking = video.isSeeking();

- Forward

```hljs javascript
Copyvideo.setCurrentTime('+' + time); // time in seconds
// video.setCurrentTime('+2');

- Backeard

```hljs javascript
Copyvideo.setCurrentTime('-' + time); // time in seconds
// video.setCurrentTime('-2');

## Playback rate

```hljs javascript
Copyvar rate = video.getPlaybackRate();

- Set

```hljs javascript
Copyvideo.setPlaybackRate(rate);

## Duration

```hljs javascript
Copyvar duration = video.getDuration(); // time in seconds

## Volume

```hljs javascript
Copyvar volume = video.getVolume(); // volume: 0~1

```hljs javascript
Copyvideo.setVolume(volume); // volume: 0~1

## Mute

```hljs javascript
Copyvar muted = video.isMuted(); // muted: true/false

```hljs javascript
Copyvideo.setMute(muted); // muted: true/false

## Loop

```hljs javascript
Copyvar loop = video.getLoop(); // loop: true/false

```hljs javascript
Copyvideo.setLoop(loop); // loop: true/false

## Video key

```hljs javascript
Copyvar key = video.getVideoKey();

- Change video key (video source)

```hljs javascript
Copyvideo.changeSource(key);
// video.changeSource(key, autoplay, loop, markerIn, markerOut);

- `autoplay` : Should the video start playing immediately, once the swap is complete?
- `loop` : Should the video loop automatically when it reaches the end? **Not all browsers support _seamless_ video looping for all encoding formats**.
- `markerIn`, `markerOut` : Optional in/out marker time, in _seconds_, for playback of a sequence of the video.

## Marks

- Add mark

```hljs javascript
Copyvideo.addMarker(key, markerIn, markerOut);

- `key` : A unique name to give this marker.
- `markerIn`, `markerOut` : The time, in seconds, representing the start/end of this marker.
- Play mark

```hljs javascript
Copyvideo.playMarker(key, loop);

- Remove mark

```hljs javascript
Copyvideo.removeMarker(key);

## Snapshot

1. Allocate a canvas texrure

```hljs javascript
Copyvideo.saveSnapshotTexture(key);

- `key` : Texture key.
2. Take a snapshot

```hljs javascript
Copyvar canvasTexture = video.video.snapshot();
// var canvasTexture = video.snapshot(width, height);

```hljs javascript
Copyvar canvasTexture = video.snapshotArea(x, y, srcWidth, srcHeight);
// var canvasTexture = video.snapshotArea(x, y, srcWidth, srcHeight, destWidth, destHeight);

- `x`, `y` : The horizontal/vertical location of the top-left of the area to grab from.
- `srcWidth`, `srcHeight` : The width/height of area to grab from the video.
- `destWidth`, `destHeight` : The destination width/height of the grab, allowing you to resize it.
- `canvasTexture` : Canvas texture object.
- Get key of texture

```hljs javascript
Copyvar key = canvasTexture.key;

## Save texture

The saved texture is automatically updated as the video plays. If you pause this video, or change its source, then the saved texture updates instantly.

```hljs javascript
Copyvar texture = video.saveTexture(key);
// var texture = video.saveTexture(key, flipY);

- `flipY` : Set to `true` if use it as the input for a Shader.

## Events

- The media source doesn't represent a supported media format.

```hljs javascript
Copyvideo.on('unsupported', function(video, error){

}, scope);

- A Video is unlocked by a user gesture.

```hljs javascript
Copyvideo.on('unlocked', function(video, error){

- A Video tries to play a source that does not exist, or is the wrong file type.

```hljs javascript
Copyvideo.on('error', function(video, error){

- A Video has access to the metadata.

```hljs javascript
Copyvideo.on('metadata', function(video){

- A Video has exhausted its allocated time while trying to connect to a video source to start playback.

```hljs javascript
Copyvideo.on('timeout', function(video){

- A Video begins playback.

```hljs javascript
Copyvideo.on('play', function(video){

- First started or restarted.

```hljs javascript
Copyvideo.on('playing', function(video){

- The video has finished loading enough data for its first frame.

```hljs javascript
Copyvideo.on('textureready', function(video){

- A Video finishes playback by reaching the end of its duration, or `markerOut`.

```hljs javascript
Copyvideo.on('complete', function(video){

- A Video that is currently playing has looped.

```hljs javascript
Copyvideo.on('loop', function(video){

- A Video _begins_ seeking to a new point in its timeline.

```hljs javascript
Copyvideo.on('seeking', function(video){

- A Video completes seeking to a new point in its timeline.

```hljs javascript
Copyvideo.on('seeked', function(video){

- Enough of the video source has been loaded, that the browser is able to render a frame from it.

```hljs javascript
Copyvideo.on('created', function(video, width, height){

- Stalled by `stalled`, `suspend`, `waiting` DOM event.

```hljs javascript
Copyvideo.on('stalled', function(video, width, height){

- A Video is stopped from playback via a call to the `Video.stop` method,

```hljs javascript
Copyvideo.on('stop', function(video){

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = video.createBitmapMask();

See mask

## Shader effects

Support preFX and postFX effects

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Tile Sprite

Geometry

---

# https://docs.phaser.io/phaser/concepts/gameobjects/nine-slice

# Nine Slice

A Guide to the Phaser Nine Slice Game Object for scalable UI elements

A Nine Slice Game Object allows you to display a texture-based object that can be stretched both horizontally and vertically, but that retains fixed-sized corners. The dimensions of the corners are set via the parameters to this class.

This is extremely useful for UI and button like elements, where you need them to expand to accommodate the content without distorting the texture.

The texture you provide for this Game Object should be based on the following layout structure:

```hljs js
Copy A B
+---+----------------------+---+
C | 1 | 2 | 3 |
+---+----------------------+---+
| | | |
| 4 | 5 | 6 |
| | | |
+---+----------------------+---+
D | 7 | 8 | 9 |
+---+----------------------+---+

When changing this objects width and / or height:

- areas 1, 3, 7 and 9 (the corners) will remain unscaled
- areas 2 and 8 will be stretched horizontally only
- areas 4 and 6 will be stretched vertically only
- area 5 will be stretched both horizontally and vertically

You can also create a 3 slice Game Object:

This works in a similar way, except you can only stretch it horizontally. Therefore, it requires less configuration:

```hljs js
Copy A B
+---+----------------------+---+
| | | |
C | 1 | 2 | 3 |
| | | |
+---+----------------------+---+

When changing this objects width (you cannot change its height)

- areas 1 and 3 will remain unscaled
- area 2 will be stretched horizontally

The above configuration concept is adapted from the Pixi NineSlicePlane.

To specify a 3 slice object instead of a 9 slice you should only provide the `leftWidth` and `rightWidth` parameters. To create a 9 slice you must supply all parameters.

The _minimum_ width this Game Object can be is the total of `leftWidth` \+ `rightWidth`. The minimum height this Game Object can be is the total of `topHeight` \+ `bottomHeight`. If you need to display this object at a smaller size, you can scale it.

In terms of performance, using a 3 slice Game Object is the equivalent of having 3 Sprites in a row. Using a 9 slice Game Object is the equivalent of having 9 Sprites in a row. The vertices of this object are all batched together and can co-exist with other Sprites and graphics on the display list, without incurring any additional overhead.

As of Phaser 3.60 this Game Object is **WebGL only**.

As of Phaser 3.70 this Game Object can now populate its values automatically if they have been set within Texture Packer 7.1.0 or above and exported with the atlas json. If this is the case, you can just call this method without specifying anything more than the texture key and frame and it will pull the area data from the atlas.

## Load texture

```hljs javascript
Copythis.load.image(key, url);

Reference: load image

## Add nine slice object

```hljs javascript
Copyvar nineSlice = this.add.nineslice(x, y, texture, frame, width, height, leftWidth, rightWidth, topHeight, bottomHeight);

or

```hljs javascript
Copyvar nineSlice = this.add.nineslice(x, y, texture, frame, width, height);
// var nineSlice = this.add.nineslice(x, y, texture, frame);

- If that frame (indexed by `texture`, `frame`) is generated by Texture Packer.

Add nine slice from JSON

```hljs javascript
Copyvar nineSlice = this.make.nineslice({
x: 0,
y: 0,
key: '',
// frame: '',

// width: 256,
// height: 256,
// leftWidth: 10,
// rightWidth: 10,
// topHeight: 0,
// bottomHeight: 0,

// angle: 0,
// alpha: 1,
// scale : {
// x: 1,
// y: 1
//},
// origin: {x: 0.5, y: 0.5},

add: true
});

## Custom class

- Define class

```hljs javascript
Copyclass MyNineSlice extends Phaser.GameObjects.NineSlice {
constructor(scene, x, y, texture, frame, width, height, leftWidth, rightWidth, topHeight, bottomHeight) {
super(scene, x, y, texture, frame, width, height, leftWidth, rightWidth, topHeight, bottomHeight);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs javascript
Copyvar nineSlice = new MyNineSlice(scene, x, y, texture, frame, width, height, leftWidth, rightWidth, topHeight, bottomHeight);

## Resize

```hljs javascript
CopynineSlice.setSize(width, height);

## Set texture of source image

```hljs javascript
CopynineSlice.setTexture(texture, frame);
nineSlice.setSlices(width, height, leftWidth, rightWidth, topHeight, bottomHeight);

## Texture

See game object - texture

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = nineSlice.createBitmapMask();

See mask

## Shader effects

Support postFX effects

No preFX effect support

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Mesh

Particles

---

# https://docs.phaser.io/phaser/concepts/gameobjects/mesh

# Mesh

A Guide to the Phaser Mesh Game Object to render textured vertices

The Mesh Game Object allows you to render a group of textured vertices and manipulate the view of those vertices, such as rotation, translation or scaling.

Support for generating mesh data from grids, model data or Wavefront OBJ Files is included.

Although you can use this to render 3D objects, its primary use is for displaying more complex Sprites, or Sprites where you need fine-grained control over the vertex positions in order to achieve special effects in your games. Note that rendering still takes place using Phaser's orthographic camera (after being transformed via `projectionMesh`, see `setPerspective`, `setOrtho`, and `panZ` methods). As a result, all depth and face tests are done in an eventually orthographic space.

The rendering process will iterate through the faces of this Mesh and render out each face that is considered as being in view of the camera. No depth buffer is used, and because of this, you should be careful not to use model data with too many vertices, or overlapping geometry, or you'll probably encounter z-depth fighting. The Mesh was designed to allow for more advanced 2D layouts, rather than displaying 3D objects, even though it can do this to a degree.

In short, if you want to remake Crysis, use a 3D engine, not a Mesh. However, if you want to easily add some small fun 3D elements into your game, or create some special effects involving vertex warping, this is the right object for you. Mesh data becomes part of the WebGL batch, just like standard Sprites, so doesn't introduce any additional shader overhead. Because the Mesh just generates vertices into the WebGL batch, like any other Sprite, you can use all of the common Game Object components on a Mesh too, such as a custom pipeline, mask, blend mode or texture.

Note that the Mesh object is WebGL only and does not have a Canvas counterpart.

The Mesh origin is always 0.5 x 0.5 and cannot be changed.

## Basic usage

1. Load texture

```hljs js
Copythis.load.image(key, url);

2. Add mesh object

```hljs js
Copyvar mesh = this.add.mesh(x, y, texture, frame);

or

```hljs js
Copyvar mesh = this.make.mesh({
x: 0,
y: 0,
add: true,

key: null,
frame: null,
});

3. Set perspective or orthographic projection
- Perspective projection

```hljs js
Copymesh.setPerspective(width, height, fov);
// mesh.setPerspective(width, height, fov, near, far);

- `width`, `height` : The width/height of the projection matrix. Typically the same as the Mesh and/or Renderer.
- `fov` : The field of view, in degrees.
- `near`, `far` : The near/far value of the view. Default value are `0.01`/ `1000`.
- Orthographic projection

```hljs js
Copymesh.setOrtho(mesh.width / mesh.height, 1);
// mesh.setOrtho(scaleX, scaleY, near, far);

- `scaleX`, `scaleY` : The default horizontal/vertical scale in relation to the Mesh / Renderer dimensions.
- `near`, `far` : The near/far value of the view. Default value are `0.01`/ `1000`.
4. Creates a grid of vertices

```hljs js
CopyPhaser.Geom.Mesh.GenerateGridVerts({
mesh: mesh,
texture: textureKey,
frame: frameName,
width: 1,
height: 1,
widthSegments: 1,
heightSegments: 1,

// x: 0,
// y: 0,
// colors: 0xffffff,
// alphas: 1,
// tile: false,
// isOrtho: false
});

- `mesh` : The vertices of the generated grid will be added to this Mesh Game Object.

- `texture` : The texture to be used for this Grid.

- `frame` : The name or index of the frame within the Texture.

- `width` , `height` : The width/height of the grid in 3D units.

```hljs js
Copy{
// ...
width: (frameWidth/frameHeight),
height: (frameHeight/frameHeight)
// ...
}

- `widthSegments`, `heightSegments` : The number of segments to split the grid horizontally/vertically in to.

- `colors` : An array of colors, one per vertex, or a single color value applied to all vertices.

- `alphas` An array of alpha values, one per vertex, or a single alpha value applied to all vertices.

- `tile` :
- `false` : Display as a single texture. Default value.
- `true` : Texture tile (repeat) across the grid segments.

## Model

1. Load 3D model from OBJ file

```hljs js
Copythis.load.obj(key, url, objURL, matURL);

- `objURL` : URL to load the obj file.
- `matURL` : URL to load the material file.
2. Add mesh object

```hljs js
Copyvar mesh = this.add.mesh(x, y);

```hljs js
Copyvar mesh = this.make.mesh({
x: 0,
y: 0,
add: true,
});

3. Add model

```hljs js
Copymesh.addVerticesFromObj(
key,
scale,
x,
y,
z,
rotateX,
rotateY,
rotateZ,
zIsUp
);

- `key` : The key of the model data in the OBJ Cache to add to this Mesh.
- `scale` : An amount to scale the model data by. Default is `1`.
- `x`, `y`, `z` : Translate the model x/y/z position by this amount.
- `rotateX`, `rotateY`, `rotateZ` : Rotate the model on the x/y/z axis by this amount, in radians.
- `zIsUp` :
- `true` : Z axis is up.
- `false` : Y axis is up.

## Plane

The Plane Game Object takes the Mesh Game Object and extends it, allowing for fast and easy creation of Planes. A Plane is a one-sided grid of cells, where you specify the number of cells in each dimension. The Plane can have a texture that is either repeated (tiled) across each cell, or applied to the full Plane.

The Plane can then be manipulated in 3D space, with rotation across all 3 axis.

This allows you to create effects not possible with regular Sprites, such as perspective distortion. You can also adjust the vertices on a per-vertex basis. Plane data becomes part of the WebGL batch, just like standard Sprites, so doesn't introduce any additional shader overhead. Because the Plane just generates vertices into the WebGL batch, like any other Sprite, you can use all of the common Game Object components on a Plane too, such as a custom pipeline, mask, blend mode or texture.

### Add plane object

```hljs js
Copyvar plane = this.add.plane(x, y, key);
// var plane = this.add.plane(x, y, key, frame);
// var plane = this.add.plane(x, y, texture, frame, width, height, tile);

- `x`, `y` : Position
- `key`, `frame` : Texture key of
- `width`, `height` : The width/height of this Plane, **in cells**, not pixels.
- `tile` : Is the texture tiled? I.e. repeated across each cell.

Add plane from JSON

```hljs js
Copyvar plane = this.make.plane({
x: 0,
y: 0,
key: "",
// frame: '',
// width: 8,
// height: 8,
// tile: false,
// checkerboard: null,
// checkerboard: { color1, color2, alpha1, alpha2, height }

// angle: 0,
// alpha: 1,
// scale : {
// x: 1,
// y: 1
//},
// origin: {x: 0.5, y: 0.5},

add: true,
});

### Custom class

- Define class

```hljs js
Copyclass MyPlane extends Phaser.GameObjects.Plane {
constructor(scene, x, y, texture, frame, width, height, tile) {
super(scene, x, y, texture, frame, width, height, tile);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs js
Copyvar plane = new MyPlane(scene, x, y, texture, frame, width, height, tile);

### Animation

Animations in Phaser can either belong to the global Animation Manager, or specifically to this Plane.

#### Play animation

- Play the given animation on this Plane.

```hljs js
Copyplane.play(key);
// plane.play(key, ignoreIfPlaying);

- `key` : Animation key string, or animation config
- String key of animation

- Animation config, to override default config

```hljs js
Copy{
key,
frameRate,
duration,
delay,
repeat,
repeatDelay,
yoyo,
showOnStart,
hideOnComplete,
startFrame,
timeScale;
}

- Play in reverse

```hljs js
Copyplane.playReverse(key);
// plane.playReverse(key, ignoreIfPlaying);

- `key` : Animation key string, or animation config
- Play after delay

```hljs js
Copyplane.playAfterDelay(key, delay);

- `key` : Animation key string, or animation config
- Play after repeat

```hljs js
Copyplane.playAfterRepeat(key, repeatCount);

- `key` : Animation key string, or animation config

#### Stop

- Immediately stop

```hljs js
Copyplane.stop();

- Stop after delay

```hljs js
Copyplane.stopAfterDelay(delay);

- Stop at frame

```hljs js
Copyplane.stopOnFrame(frame);

- `frame` : Frame object in current animation.

```hljs js
Copyvar currentAnim = plane.anims.currentAnim;
var frame = currentAnim.getFrameAt(index);

- Stop after repeat

```hljs js
Copyplane.stopAfterRepeat(repeatCount);

#### Properties

- Has started

```hljs js
Copyvar hasStarted = plane.anims.hasStarted;

- Is playing

```hljs js
Copyvar isPlaying = plane.anims.isPlaying;

- Is paused

```hljs js
Copyvar isPaused = plane.anims.isPaused;

- Total frames count

```hljs js
Copyvar frameCount = plane.anims.getTotalFrames();

- Delay

```hljs js
Copyvar delay = plane.anims.delay;

- Repeat
- Total repeat count

```hljs js
Copyvar repeatCount = plane.anims.repeat;

- Repeat counter

```hljs js
Copyvar repeatCount = plane.anims.repeatCounter;

- Repeat delay

```hljs js
Copyvar repeatDelay = plane.anims.repeatDelay;

- Yoyo

```hljs js
Copyvar repeatDelay = plane.anims.yoyo;

- Current animation key

```hljs js
Copyvar key = plane.anims.getName();

- `key` : Return `''` if not playing any animation.
- Current frame name

```hljs js
Copyvar frameName = plane.anims.getFrameName();

- `frameName` : Return `''` if not playing any animation.
- Current animation

```hljs js
Copyvar currentAnim = plane.anims.currentAnim;

- Current frame

```hljs js
Copyvar currentFrame = plane.anims.currentFrame;

### Interactive

To test if pointer is on any face of this mesh game object.

```hljs js
Copyplane.setInteractive();

### Checkerboard

Creates a checkerboard style texture, based on the given colors and alpha values and applies it to this Plane, replacing any current texture it may have.

- Create

```hljs js
Copyplane.createCheckerboard(color1, color2, alpha1, alpha2, height);

- Remove

```hljs js
Copyplane.removeCheckerboard();

### Create mask

```hljs js
Copyvar mask = plane.createBitmapMask();

## Custom mesh class

```hljs js
Copyclass MyMesh extends Phaser.GameObjects.mesh {
constructor(
scene,
x,
y,
texture,
frame,
vertices,
uvs,
indicies,
containsZ,
normals,
colors,
alphas
) {
super(
scene,
x,
y,
texture,
frame,
vertices,
uvs,
indicies,
containsZ,
normals,
colors,
alphas
);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {
// super.preUpdate(time, delta);
// }
}

```hljs js
Copyvar mesh = new MyMesh(scene, x, y, texture, frame);

## Control

### View

- Translates the view position of this Mesh on the x/y/z axis by the given amount.

```hljs js
Copymesh.panX(x);
mesh.panY(y);
mesh.panZ(z);

### Model

- Position

```hljs js
Copymesh.modelPosition.x = x;
mesh.modelPosition.y = y;
mesh.modelPosition.z = z;

- `x`, `y`, `z` : Offset position.
- `z+` : Near
- `z-` : Far
- `x-` : Left
- `x+` : Right
- `y+` : Up
- `y-` : Down
- Rotation

```hljs js
Copymesh.modelRotation.x = radiansX;
mesh.modelRotation.y = radiansY;
mesh.modelRotation.z = radiansZ;

```hljs js
Copymesh.rotateX = degreesX;
mesh.rotateY = degreesY;
mesh.rotateZ = degreesZ;

- `radiansX`, `radiansY`, `radiansZ` : Rotation angle in radians.
- `degreesX`, `degreesY`, `degreesZ` : Rotation angle in degrees.
- Scale

```hljs js
Copymesh.modelScale.x = scaleX;
mesh.modelScale.y = scaleY;
mesh.modelScale.z = scaleZ;

- `scaleX`, `scaleY`, `scaleZ` : Scale value, `1` is origin size.

## Backward facing Faces

- Hide backward facing Faces. Default behavior.

```hljs js
Copymesh.hideCCW = true;

- Show backward facing Faces

```hljs js
Copymesh.hideCCW = false;

## Faces

Meshes are composed of triangle faces.

```hljs js
Copyvar faces = mesh.faces;

### Contains

- Has any face which contains point

```hljs js
Copyvar isHit = mesh.hasFaceAt(worldX, worldY);
// var isHit = mesh.hasFaceAt(worldX, worldY, camera);

- Get face contains point

```hljs js
Copyvar face = mesh.getFaceAt(worldX, worldY);
// var face = mesh.getFaceAt(worldX, worldY, camera);

### Properties

- Alpha
- Get

```hljs js
Copyvar alpha = face.alpha;

- Set

```hljs js
Copyface.alpha = alpha;

- Angle
- Rotate

```hljs js
CopyPhaser.Geom.Mesh.RotateFace(face, radians);

- Center position
- Get

```hljs js
Copyvar x = face.x;
var y = face.y;

- `x` : 0(left) ~ 1(right)
- `y` : 1(top) ~ 0(bottom)
- Set

```hljs js
Copyface.x = x;
face.y = y;

```hljs js
Copyface.translate(x, y);

- `x` : 0(left) ~ 1(right)
- `y` : 1(top) ~ 0(bottom)

## Vertices

Each face has 3 vertices.

```hljs js
Copyvar vertices = mesh.vertices;

- `vertices` : Array of vertex.

### Properties

```hljs js
Copyvar alpha = vertex.alpha;

```hljs js
Copyvertex.alpha = alpha;

- Tint
- Get

```hljs js
Copyvar color = vertex.color;

```hljs js
Copyvertex.color = color;

#### Update properties

- Start updating

```hljs js
Copymesh.ignoreDirtyCache = true;

- Stop updating

```hljs js
Copymesh.ignoreDirtyCache = false;

## Interactive

To test if pointer is at any face of this mesh game object.

```hljs js
Copymesh.setInteractive();

## Debug

1. Set debug Graphics

```hljs js
Copyvar debugGraphics = this.add.graphics();
mesh.setDebug(debugGraphics);

2. Update Graphics in `this.update()` method.

```hljs js
CopydebugGraphics.clear();
debugGraphics.lineStyle(1, 0x00ff00);

## Create mask

```hljs js
Copyvar mask = mesh.createBitmapMask();

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Light

Nine Slice

---

# https://docs.phaser.io/phaser/concepts/gameobjects/rope

# Rope

A Guide to the Phaser Rope Game Object

The Rope object is _WebGL only_ and does not have a Canvas counterpart.

A Rope is a special kind of Game Object that has a texture is stretched along its entire length.

Unlike a Sprite, it isn't restricted to using just a quad and can have as many vertices as you define when creating it. The vertices can be arranged in a horizontal or vertical strip and have their own color and alpha values as well.

A Ropes origin is always 0.5 x 0.5 and cannot be changed.

## Load texture

```hljs javascript
Copythis.load.image(key, url);

Reference: load image

## Add object

```hljs javascript
Copyvar rope = this.add.rope(x, y, texture, frame, points, horizontal);
// var rope = this.add.rope(x, y, texture, frame, points, horizontal, colors, alphas);

- `points` :
- A number : Segments to split the texture frame into.
- An number array : An array containing the vertices data.
- `horizontal` :
- `true` : Vertices of this Rope be aligned horizontally.
- `false` : Vertices of this Rope be aligned vertically.
- `colors` : An optional array containing the color data for this Rope. One color value per pair of vertices.
- `alphas` : An optional array containing the alpha data for this Rope. One alpha value per pair of vertices.

Add rope from JSON

```hljs javascript
Copyvar rope = this.make.rope({
x: 0,
y: 0,
key: '',
frame: null,
horizontal: true,
points: undefined,
colors: undefined,
alphas: undefined,

// angle: 0,
// alpha: 1
// flipX: true,
// flipY: true,
// origin: {x: 0.5, y: 0.5},

add: true
});

## Custom rope class

- Define class

```hljs javascript
Copyclass MyRope extends Phaser.GameObjects.Rope {
constructor(scene, x, y, texture, frame, points, horizontal, colors, alphas) {
super(scene, x, y, texture, frame, points, horizontal, colors, alphas);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs javascript
Copyvar rope = new MyRope(scene, x, y, texture, frame, points, horizontal);

## Origin

## Set vertices

Set vertices via

```hljs javascript
Copyrope.setPoints(points);
// rope.setPoints(points, colors, alphas);

- `points` :
- A number : Segments to split the texture frame into.
- An number array : An array containing the vertices data.
- `colors` : An optional array containing the color data for this Rope. One color value per pair of vertices.
- `alphas` : An optional array containing the alpha data for this Rope. One alpha value per pair of vertices.

Also change horizontal mode :

- Change vertical rope to horizontal rope, do nothing if rope is horizontal mode already

```hljs javascript
Copyrope.setHorizontal(points);
// rope.setHorizontal(points, colors, alphas);

- Change horizontal rope to vertical rope, do nothing if rope is vertical mode already

```hljs javascript
Copyrope.setVertical(points);
// rope.setVertical(points, colors, alphas);

Or set `rope.points` directly :

1. Change `rope.points`
- Horizontal rope : `rope.points[i].y = newY`
- Vertical rope : `rope.points[i].x = newX`
2. Call `rope.setDirty()`, or `rope.updateVertices()`

Each point is relative to position of rope object, get points of world via

```hljs javascript
Copyvar worldX = rope.points[i].x + rope.x;
var worldY = rope.points[i].y + rope.y;

## Play animation

```hljs javascript
Copyrope.play(key);
// rope.play(key, ignoreIfPlaying, startFrame);

- `ignoreIfPlaying` : If an animation is already playing then ignore this call. Default value is `false`.
- `startFrame` : Optionally start the animation playing from this frame index. Default value is `0`.

## Alpha

- Single alpha

```hljs javascript
Copyrope.setAlphas(alpha);

- Top - bottom alpha

```hljs javascript
Copyrope.setAlphas(topAlpha, bottomAlpha);

- Alpha array for each point

```hljs javascript
Copyrope.setAlphas(alphaArray);

- `alphaArray` : Array of alpha value.

## Color tint

- Single color tint

```hljs javascript
Copyrope.setColors(color);

- Color tint array for each point

```hljs javascript
Copyrope.setAlphas(colorArray);

- `colorArray` : Array of color tint value.

### Tint fill mode

Sets the tint fill mode.

```hljs javascript
Copyrope.setTintFill(mode);

- `mode` :
- `0` : Additive tint, blends the vertices colors with the texture. Default behavior.
- `1` : Fill tint with alpha.
- `2` : Fill tint without alpha.

## Flip

```hljs javascript
Copyrope.flipX = flip;
rope.flipY = flip;

If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

## Debug

Draw debug mesh each render tick.

```hljs javascript
Copyrope.setDebug(graphic);
// rope.setDebug(graphic, callback);

- `graphic` : Graphics game object

- `callback` : Callback of rendering debug graphics ( default callback)

```hljs javascript
Copyfunction(rope, meshLength, verts) {
// var graphic = rope.debugGraphic;
}

- `rope` : Rope instance.
- `rope.debugGraphic` : Graphics game object
- `meshLength` : The number of mesh vertices in total.
- `verts` : An array of the translated vertex coordinates.

Clear Debug graphics ( `rope.debugGraphic.clear()`) during scene's update stage ( `this.update() { }`)

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Render Texture

Shader

---

# https://docs.phaser.io/phaser/concepts/gameobjects/plane

# Plane

A Guide to the Phaser Plane Game Object

The Plane Game Object is a helper class that takes the Mesh Game Object and extends it, allowing for fast and easy creation of Planes. A Plane is a one-sided grid of cells, where you specify the number of cells in each dimension. The Plane can have a texture that is either repeated (tiled) across each cell, or applied to the full Plane.

The Plane can then be manipulated in 3D space, with rotation across all 3 axis.

This allows you to create effects not possible with regular Sprites, such as perspective distortion. You can also adjust the vertices on a per-vertex basis. Plane data becomes part of the WebGL batch, just like standard Sprites, so doesn't introduce any additional shader overhead. Because the Plane just generates vertices into the WebGL batch, like any other Sprite, you can use all of the common Game Object components on a Plane too, such as a custom pipeline, mask, blend mode or texture.

You can use the `uvScroll` and `uvScale` methods to adjust the placement and scaling of the texture if this Plane is using a single texture, and not a frame from a texture atlas or sprite sheet.

The Plane Game Object also has the Animation component, allowing you to play animations across the Plane just as you would with a Sprite. The animation frame size must be fixed as the first frame will be the size of the entire animation, for example use a `SpriteSheet`.

Note that the Plane object is WebGL only and does not have a Canvas counterpart.

The Plane origin is always 0.5 x 0.5 and _cannot be changed_.

## Load texture

```hljs javascript
Copythis.load.image(key, url);

Reference: load image

## Add plane object

```hljs javascript
Copyvar plane = this.add.plane(x, y, key);
// var plane = this.add.plane(x, y, key, frame);
// var plane = this.add.plane(x, y, texture, frame, width, height, tile);

- `x`, `y` : Position
- `key`, `frame` : Texture key of
- `width`, `height` : The width/height of this Plane, **in cells**, not pixels.
- `tile` : Is the texture tiled? I.e. repeated across each cell.

Add plane from JSON

```hljs javascript
Copyvar plane = this.make.plane({
x: 0,
y: 0,
key: '',
// frame: '',
// width: 8,
// height: 8,
// tile: false,
// checkerboard: null,
// checkerboard: { color1, color2, alpha1, alpha2, height }

// angle: 0,
// alpha: 1,
// scale : {
// x: 1,
// y: 1
//},
// origin: {x: 0.5, y: 0.5},

add: true
});

## Custom class

- Define class

```hljs javascript
Copyclass MyPlane extends Phaser.GameObjects.Plane {
constructor(scene, x, y, texture, frame, width, height, tile) {
super(scene, x, y, texture, frame, width, height, tile);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs javascript
Copyvar plane = new MyPlane(scene, x, y, texture, frame, width, height, tile);

## Texture

See game object - texture

## Animation

See Sprite's animation section.

### Play animation

- Play

```hljs javascript
Copyplane.play(key);
// plane.play(key, ignoreIfPlaying);

- `key` : Animation key string, or animation config
- String key of animation

- Animation config, to override default config

```hljs javascript
Copy{
key,
frameRate,
duration,
delay,
repeat,
repeatDelay,
yoyo,
showOnStart,
hideOnComplete,
startFrame,
timeScale
}

- Play in reverse

```hljs javascript
Copyplane.playReverse(key);
// plane.playReverse(key, ignoreIfPlaying);

- `key` : Animation key string, or animation config
- Play after delay

```hljs javascript
Copyplane.playAfterDelay(key, delay);

- `key` : Animation key string, or animation config
- Play after repeat

```hljs javascript
Copyplane.playAfterRepeat(key, repeatCount);

- `key` : Animation key string, or animation config

### Stop

- Immediately stop

```hljs javascript
Copyplane.stop();

- Stop after delay

```hljs javascript
Copyplane.stopAfterDelay(delay);

- Stop at frame

```hljs javascript
Copyplane.stopOnFrame(frame);

- `frame` : Frame object in current animation.

```hljs javascript
Copyvar currentAnim = plane.anims.currentAnim;
var frame = currentAnim.getFrameAt(index);

- Stop after repeat

```hljs javascript
Copyplane.stopAfterRepeat(repeatCount);

### Properties

- Has started

```hljs javascript
Copyvar hasStarted = plane.anims.hasStarted;

- Is playing

```hljs javascript
Copyvar isPlaying = plane.anims.isPlaying;

- Is paused

```hljs javascript
Copyvar isPaused = plane.anims.isPaused;

- Total frames count

```hljs javascript
Copyvar frameCount = plane.anims.getTotalFrames();

- Delay

```hljs javascript
Copyvar delay = plane.anims.delay;

- Repeat
- Total repeat count

```hljs javascript
Copyvar repeatCount = plane.anims.repeat;

- Repeat counter

```hljs javascript
Copyvar repeatCount = plane.anims.repeatCounter;

- Repeat delay

```hljs javascript
Copyvar repeatDelay = plane.anims.repeatDelay;

- Yoyo

```hljs javascript
Copyvar repeatDelay = plane.anims.yoyo;

- Current animation key

```hljs javascript
Copyvar key = plane.anims.getName();

- `key` : Return `''` if not playing any animation.
- Current frame name

```hljs javascript
Copyvar frameName = plane.anims.getFrameName();

- `frameName` : Return `''` if not playing any animation.
- Current animation

```hljs javascript
Copyvar currentAnim = plane.anims.currentAnim;

- Current frame

```hljs javascript
Copyvar currentFrame = plane.anims.currentFrame;

## Interactive

To test if pointer is at any face of this mesh game object.

```hljs javascript
Copyplane.setInteractive();

## Checkerboard

Creates a checkerboard style texture,
based on the given colors and alpha values and applies it to this Plane,
replacing any current texture it may have.

- Create

```hljs javascript
Copyplane.createCheckerboard(color1, color2, alpha1, alpha2, height)

- Remove

```hljs javascript
Copyplane.removeCheckerboard();

## Other properties

See Mesh game object, game object

## Create mask

```hljs javascript
Copyvar mask = plane.createBitmapMask();

See mask

## Shader effects

Support postFX effects

No preFX effect support

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Particles

Render Texture

---

# https://docs.phaser.io/phaser/concepts/gameobjects/render-texture

# Render Texture

A Guide to the Phaser Render Texture for dynamic texture creation

A Render Texture is a combination of Dynamic Texture and an Image Game Object, that uses the Dynamic Texture to display itself with.

A Dynamic Texture is a special texture that allows you to draw textures, frames and most kind of Game Objects directly to it.

You can take many complex objects and draw them to this one texture, which can then be used as the base texture for other Game Objects, such as Sprites. Should you then update this texture, all Game Objects using it will instantly be updated as well, reflecting the changes immediately.

It's a powerful way to generate dynamic textures at run-time that are WebGL friendly and don't invoke expensive GPU uploads on each change.

In versions of Phaser before 3.60 a Render Texture was the only way you could create a texture like this, that had the ability to be drawn on. But in 3.60 we split the core functions out to the Dynamic Texture class as it made a lot more sense for them to reside in there. As a result, the Render Texture is now a light-weight shim that sits on-top of an Image Game Object and offers proxy methods to the features available from a Dynamic Texture.

**When should you use a Render Texture vs. a Dynamic Texture?**

You should use a Dynamic Texture if the texture is going to be used by multiple Game Objects, or you want to use it across multiple Scenes, because textures are globally stored.

You should use a Dynamic Texture if the texture isn't going to be displayed in-game, but is instead going to be used for something like a mask or shader.

You should use a Render Texture if you need to display the texture in-game on a single Game Object, as it provides the convenience of wrapping an Image and Dynamic Texture together for you.

Under WebGL1, a FrameBuffer, which is what this Dynamic Texture uses internally, cannot be anti-aliased. This means that when drawing objects such as Shapes or Graphics instances to this texture, they may appear to be drawn with no aliasing around the edges. This is a technical limitation of WebGL1. To get around it, create your shape as a texture in an art package, then draw that to this texture.

## Add render texture object

- Create an empty render texture object.

```hljs javascript
Copyvar rt = this.add.renderTexture(x, y, width, height);

Add render texture from JSON

```hljs javascript
Copyvar rt = this.make.renderTexture({
x: 0,
y: 0,
width: 32,
height: 32,

// angle: 0,
// alpha: 1
// flipX: true,
// flipY: true,
// scale : {
// x: 1,
// y: 1
//},
// origin: {x: 0.5, y: 0.5},

add: true
});

Origin position of this render texture is `(0, 0)` (top-left)

## Custom class

- Define class

```hljs javascript
Copyclass MyRenderTexture extends Phaser.GameObjects.RenderTexture {
constructor(scene, x, y, width, height) {
super(scene, x, y, width, height);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs javascript
Copyvar rt = new MyRenderTexture(scene, x, y, width, height);

## Set size

```hljs javascript
Copyrt.setSize(width, height);

## Fill color

```hljs javascript
Copyrt.fill(rgb);
// rt.fill(rgb, alpha, x, y, width, height);

- `rgb` : The number color to fill this Dynamic Texture with.
- `alpha` : The alpha value used by the fill. Default value is `1`.
- `x`, `y`, `width`, `height` : The area of the fill rectangle. Default behavior is filling whole size.

## Clear

```hljs javascript
Copyrt.clear();

```hljs javascript
Copyrt.clear(x, y, width, height);

## Draw game object

```hljs javascript
Copyrt.draw(entries);
// rt.draw(entries,x, y);
// rt.draw(entries, x, y, alpha, tint);

- `entries` :
- Any renderable Game Object, such as a Sprite, Text, Graphics or TileSprite.
- Tilemap Layers.
- A Group. The contents of which will be iterated and drawn in turn.
- A Container. The contents of which will be iterated fully, and drawn in turn.
- A Scene Display List. Pass in `Scene.children` to draw the whole list.
- Another Dynamic Texture, or a Render Texture.
- A Texture Frame instance.
- A string. This is used to look-up the texture from the Texture Manager.
- `x`, `y` : The x/y position to draw the Frame at, or the offset applied to the object.
- If the object is a Group, Container or Display List, the coordinates are _added_ to the positions of the children.
- For all other types of object, the coordinates are exact.
- `alpha`, `tint` : Only used by Texture Frames.
- Game Objects use their own alpha and tint values when being drawn.

## Erase

```hljs javascript
Copyrt.erase(entries);
// rt.erase(entries, x, y);

- `entries` :
- Any renderable Game Object, such as a Sprite, Text, Graphics or TileSprite.
- Tilemap Layers.
- A Group. The contents of which will be iterated and drawn in turn.
- A Container. The contents of which will be iterated fully, and drawn in turn.
- A Scene Display List. Pass in `Scene.children` to draw the whole list.
- Another Dynamic Texture, or a Render Texture.
- A Texture Frame instance.
- A string. This is used to look-up the texture from the Texture Manager.
- `x`, `y` : The x/y position to draw the Frame at, or the offset applied to the object.
- If the object is a Group, Container or Display List, the coordinates are _added_ to the positions of the children.
- For all other types of object, the coordinates are exact.

## Draw frame

```hljs javascript
Copyrt.stamp(key, frame, x, y, {
alpha: 1,
tint: 0xffffff,
angle: 0,
rotation: 0,
scale: 1,
scaleX: 1,
scaleY: 1,
originX: 0.5,
originY: 0.5,
blendMode: 0,
erase: false,
skipBatch: false
})

or

```hljs javascript
Copyrt.drawFrame(key, frame, x, y);
// rt.drawFrame(key, frame, x, y, alpha, tint);

- `x`, `y` : Top-left position

## Draw repeat frames

- Repeat frames full of size

```hljs javascript
Copyrt.repeat(key, frame);

- Repeat in an area

```hljs javascript
Copyrt.repeat(key, frame, x, y, width, height);
// rt.repeat(key, frame, x, y, width, height, alpha, tint, skipBatch);

## Batch draw

1. Begin

```hljs javascript
Copyrt.beginDraw();

2. Draw
- Draw game object

```hljs javascript
Copyrt.batchDraw(entries, x, y, alpha, tint);

- `entries` :
- Any renderable Game Object, such as a Sprite, Text, Graphics or TileSprite.
- Tilemap Layers.
- A Group. The contents of which will be iterated and drawn in turn.
- A Container. The contents of which will be iterated fully, and drawn in turn.
- A Scene Display List. Pass in `Scene.children` to draw the whole list.
- Another Dynamic Texture, or a Render Texture.
- A Texture Frame instance.
- A string. This is used to look-up the texture from the Texture Manager.
- Draw frame

```hljs javascript
Copyrt.batchDrawFrame(key, frame, x, y, alpha, tint);

- Draw image

```hljs javascript
Copyrt.stamp(key, frame, x, y, {
// ...
skipBatch: true
})

- Draw repeat images

```hljs javascript
Copyrt.repeat(key, frame, x, y, width, height, alpha, tint, true);

3. End

```hljs javascript
Copyrt.endDraw();

## Internal camera

Internal camera `rt.camera`

- Scroll (offset)

```hljs javascript
Copyrt.camera.setScroll(x, y);

- Zoom (scale)

```hljs javascript
Copyrt.camera.setZoom(zoom);

- Rotate

```hljs javascript
Copyrt.camera.setAngle(angle); // angle in degrees

## Snapshot

### Snapshot area

```hljs javascript
Copytexture.snapshot(callback);
// texture.snapshot(callback, type, encoderOptions);

```hljs javascript
Copytexture.snapshotArea(x, y, width, height, callback, type, encoderOptions);

- `callback` : The Function to invoke after the snapshot image is created.

```hljs javascript
Copyfunction(imageElement) {
}

- `imageElement` : HTMLImageElement.
- `type` : The format of the image to create, usually `'image/png'` or `'image/jpeg'`. Default value is `'image/png'`.

- `encoderOptions` : The image quality, between `0` and `1`. Used for image formats with lossy compression, such as `'image/jpeg'`. Default value is `0.92`.

- `x`, `y`, `width`, `height` : Snapshot area.

### Get color of a pixel

```hljs javascript
Copytexture.snapshotPixel(x, y, callback);

- `x`, `y` : The x/y coordinate of the pixel to get.

```hljs javascript
Copyfunction(color) {
}

- `color` : Color object.

## Global alpha

```hljs javascript
Copyrt.setGlobalAlpha(alpha);
// rt.globalAlpha = alpha;

## Global tint

```hljs javascript
Copyrt.setGlobalTint(tint);
// rt.globalTint = tint;

## Save texture

Stores a copy of this Render Texture in the Texture Manager using the given key.

```hljs javascript
Copyrt.saveTexture(key);

Calling `saveTexture` again will not save another copy of the same texture, it will just rename the key of the existing copy.

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = rt.createBitmapMask();

See mask

## Shader effects

Support preFX and postFX effects

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Plane

Rope

---

# https://docs.phaser.io/phaser/concepts/gameobjects/tile-sprite

# Tile Sprite

A Guide to the Phaser TileSprite to create repeating, scrollable textures

A TileSprite is a Sprite that has a repeating texture.

The texture can be scrolled and scaled independently of the TileSprite itself. Textures will automatically wrap and are designed so that you can create game backdrops using seamless textures as a source.

You shouldn't ever create a TileSprite any larger than your actual canvas size. If you want to create a large repeating background that scrolls across the whole map of your game, then you create a TileSprite that fits the canvas size and then use the `tilePosition` property to scroll the texture as the player moves. If you create a TileSprite that is thousands of pixels in size then it will consume huge amounts of memory and cause performance issues. Remember: use `tilePosition` to scroll your texture and `tileScale` to adjust the scale of the texture - don't resize the sprite itself or make it larger than it needs.

An important note about Tile Sprites and NPOT textures: Internally, TileSprite textures use GL\_REPEAT to provide seamless repeating of the textures. This, combined with the way in which the textures are handled in WebGL, means they need to be POT (power-of-two) sizes in order to wrap. If you provide a NPOT (non power-of-two) texture to a TileSprite it will generate a POT sized canvas and draw your texture to it, scaled up to the POT size. It's then scaled back down again during rendering to the original dimensions. While this works, in that it allows you to use any size texture for a Tile Sprite, it does mean that NPOT textures are going to appear anti-aliased when rendered, due to the interpolation that took place when it was resized into a POT texture. This is especially visible in pixel art graphics. If you notice it and it becomes an issue, the only way to avoid it is to ensure that you provide POT textures for Tile Sprites.

## Load texture

```hljs javascript
Copythis.load.image(key, url);

Reference: load image

## Add tile sprite object

```hljs javascript
Copyvar image = this.add.tileSprite(x, y, width, height, textureKey);

Add tile sprite from JSON

```hljs javascript
Copyvar image = this.make.tileSprite({
x: 0,
y: 0,
width: 512,
height: 512,
key: '',

// angle: 0,
// alpha: 1
// flipX: true,
// flipY: true,
// scale : {
// x: 1,
// y: 1
//},
// origin: {x: 0.5, y: 0.5},

add: true
});

## Custom class

- Define class

```hljs javascript
Copyclass MyTileSprite extends Phaser.GameObjects.TileSprite {
constructor(scene, x, y, width, height, texture, frame) {
super(scene, x, y, width, height, texture, frame);
// ...
this.add.existing(this);
}
// ...

// preUpdate(time, delta) {}
}

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
- If the Game Object renders, it will be added to the Display List.
- If it has a `preUpdate` method, it will be added to the Update List.
- Create instance

```hljs javascript
Copyvar image = new MyTileSprite(scene, x, y, key);

## Properties of tiles

- Position

```hljs javascript
Copyimage.setTilePosition(x, y);

or

```hljs javascript
Copyimage.tilePositionX = x;
image.tilePositionY = y;

- Scale

```hljs javascript
Copyimage.setTileScale(scaleX, scaleY);

```hljs javascript
Copyimage.tileScaleX = scaleX;
image.tileScaleY = scaleY;

## Other properties

See game object

## Create mask

```hljs javascript
Copyvar mask = image.createBitmapMask();

See mask

## Shader effects

Support preFX and postFX effects

## Author Credits

Content on this page includes work by:

- RexRainbow

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Text

Video

---

