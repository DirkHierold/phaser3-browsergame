<!--
Downloaded via https://llm.codes by @steipete on August 15, 2025 at 07:42 AM
Source URL: https://docs.phaser.io/phaser-editor/
Total pages processed: 135
URLs filtered: Yes
Content de-duplicated: Yes
Availability strings filtered: Yes
Code blocks only: No
-->

# https://docs.phaser.io/phaser-editor/

# Welcome

Welcome to Phaser Editor v4 documentation!

Phaser Editor is a powerful and user-friendly development environment tailored for creating games with the Phaser game framework. Whether you're a seasoned developer or just starting with game development, Phaser Editor streamlines the process of building interactive and immersive 2D games.

This documentation provides a comprehensive guide to using Phaser Editor's rich set of tools, from loading the assets to setting up your animations and scenes. You’ll find detailed explanations of all the core features, including Project Templates, Assets Management, Visual Scene Editor, Animations Editor, Code Assistance, and much more.

## Why Phaser Editor?

Phaser Editor accelerates your workflow by offering a fully integrated game development experience. It's built specifically to work seamlessly with the Phaser framework, ensuring that you can focus on creating amazing games without getting bogged down by complex setup or configuration.

With Phaser Editor you can start new projects but you can also migrate "handmade" Phaser projects relatively easily.

Let’s dive in and start creating incredible games together!

## Main features

### Asset Pack Editor

The Asset Pack Editor allows you to import the asset files into an Asset Pack file. This pack file is used by other components of the IDE, like the Scene Editor and is a built-in Phaser format. This means, that you can load it in any Phaser game, no matter if it was created by Phaser Editor or another tool.

Often, Phaser game developers have to write by hand the code to load the asset files. With the Asset Pack Editor this process is fully visual and assisted.

Learn more about the Asset Pack Editor

### Scene Editor

The Scene Editor is a visual tool to create Phaser scenes by positioning images and other types of objects.

It supports a wide range of Phaser game objects and features. You can create complex scenes. A powerful system of prefabs, user components, and script nodes allows you to create reusable scenes and behaviors.

The Scene Editor supports multiple third-party formats like Spine animations and Tiled maps.

This a quick index of the main features:

- A wide spectrum of game objects like image, sprite, nine-slice, bitmap text, layer, and more.
- Sprite animations
- Tilemaps
- Arcade physics
- Shader effects
- Spine animations
- Particle emitters
- Prefabs
- User components
- Script nodes
- Layout tools

The Scene Editor is a visual tool and uses a custom scene format, but it does not hide the Phaser code. You can see the code of the scene and edit it directly in the editor or an external JavaScript editor like Visual Studio Code.

Learn more about the Scene Editor

### Animations Editor

The Animations Editor helps to create sprite-based animations. It creates a JSON file that can be loaded into the game using the Phaser Loader API or using the Asset Pack Editor.

A handy tool provided by the Animations Editor is the automatic creation of the animations.

### Code Editor

An advanced coding tool is out of the scope of this version of the IDE. There are free and commercial third-party coding editors that work pretty well, with special mention of Visual Studio Code.

Phaser Editor can be integrated very well with Visual Studio Code. The project templates include the Visual Studio Code the configuration and type files required to get a project ready for Visual Studio Code.

However, many users may want to try the editor just as it is and quickly create prototypes of games. For those users, we included in the IDE a basic code tooling for JavaScript, TypeScript, HTML, CSS, and JSON files. These tools are based on the Monaco editor, the one that is used by Visual Studio Code.

You can edit the code of your game and get nice features like auto-completion across multiple files, an outline of the code, documentation of the language elements, and others.

Learn more about the Code Editor

### Project templates

Phaser is a framework and it does not require a particular layout for your projects. A Phaser game is just a web application, and there are a lot of options to organize and build your game files.

Phaser Editor does not require any special project layout neither, however, it provides a couple of project templates that help you to do an initial setup of your game. For example, it adds configuration files ready to be used by Visual Studio Code and other files commonly used by the IDE, like an Asset Pack file or a first Scene Editor file.

Also, you can create projects based on demos, and learn Phaser and Phaser Editor.

Learn more about project templates

### Lightweight and cross-platform

The IDE is available in the main Operating Systems: Windows, macOS, and Linux.

The big part (the client application) should run in any modern browser (tested on Google Chrome, Firefox, and Opera), and is served by a small native program, available for the mentioned platforms.

The client application is accelerated by the browser and all the I/O operations are asynchronous. It feels lightweight in terms of operability, but it may push the browser to consume an extra 150MB/300MB of memory. It depends the amount of images present in the project.

On the desktop, it loads pretty fast. In a network, the fetching of all the resources may delay, it depends on your network speed.

### Ready for the desktop and the cloud

The editor is distributed as two different products, the Phaser Editor Core and the Phaser Editor Desktop.

The Phaser Editor Core can be integrated into a modern web development stack and cloud-based development environments (like Gitpod and GitHub Codespaces).

The Phaser Editor Desktop is a desktop application that provides a traditional IDE-like experience.

## Tutorials

A lo largo de la vida del editor varios creadores de contenidos han elaborado tutoriales para aprender a utilizar Phaser Editor. Aquí te dejamos las referencias a algunos de ellos:

Phaser Studio YouTube channel!phaser youtube channel

Scott Westover - Phaser Editor playlist!scott channel

Legacy Phaser Editor 2D tutorials

Legacy Ourcade/SuperTommy tutorials

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Distributions

---

# https://docs.phaser.io/phaser-editor/first-steps/download-and-install

# Download and install

Phaser Editor is built with web technologies. You can run it on your desktop, your private network, or in the cloud.

We provide two different types of distributions: Phaser Editor Core and Phaser Editor Desktop. Each distribution is available for Windows, macOS, and Linux.

Download Phaser Editor

In this chapter we cover how to install both distributions.

## Install Phaser Editor Desktop

The Phaser Editor Desktop distribution wraps Phaser Editor Core in an ElectronJS application. It works like a common desktop application and allows the opening of multiple projects and windows. It also provides project templates for creating new projects.

Each platform has a different way of installing Phaser Editor Desktop.

### Windows installation

Click the **Windows** option in the **Desktop** section of the downloads page. It should start the download of the MSI (Microsoft Installer) file. Execute it and follow the steps.

You can configure the installation by pressing the **Configure** option in the **Install** menu:

### macOS installation

Click the **macOS (Apple silicone)** option to download the image file. Open it (double click), and drag the `Phaser Editor` icon to the `Applications` folder.

Note there are two installers for macOS. One for ARM-based Macs and another for Intel-based Macs. The ARM-based Macs are the new Macs with the M1 chip. If you are not sure which one to download, you can download the ARM-based version.

### Linux installation

We don't have a proper installer for the Linux, so we distribute the binaries in a ZIP file.

Click the **Linux** option to download the file and unzip it. Open the terminal and run the `PhaserEditor` file:

```hljs bash
Copy$ ./PhaserEditor

However, we recommend creating a shortcut in the desktop and a menu entry in the Desktop Environment. To do this, execute the script `install.sh`:

```hljs bash
Copy$ ./install.sh

And `uninstall.sh` to remove the shortcuts:

```hljs bash
Copy$ ./uninstall.sh

In both cases, you don’t have to provide `root` privileges.

The Phaser Editor Core binaries are in the `resources/app/server` folder. You can run it alone.

## Install Phaser Editor Core

Phaser Editor Core is a server application that serves the Phaser Editor IDE in a web browser. It is a lightweight server that provides the necessary services to run Phaser Editor in the cloud or the desktop.

Phaser Editor Core is distributed as a ZIP file. To download it, click the platform option of the **Core** section in the Downloads page.

Un-compress the downloaded file, open the terminal and run:

```hljs bash
Copy$ cd /path/to/downloaded/PhaserEditor
$ ./PhaserEditor -project path/to/project

The server starts and opens the default browser in the address: `http://127.0.0.1:1959/editor`.

The `-project` flag is mandatory, its value must be the path to the game project.

Check the Create your first project section for creating a new game.

By default, the server runs in application-mode. It means it does its best on providing better integration with your OS:

- It opens the default browser at the right URL (you can change it with the `-browser-command` option).
- It allows launching third-party OS applications like Visual Studio Code or the file manager (Windows Explorer, macOS Finder, etc…).
- It denies remote connections.

However, you can run the server in a remote host using the `-public` option:

```hljs bash
Copy$ ./PhaserEditor -public

It allows remote connections but disables all the OS integration described before.

Learn more about all the command line options

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Change Log

Create your first project

---

# https://docs.phaser.io/phaser-editor/intro/distributions

# Distributions

Phaser Editor is distributed as two different products:

Both products are available for Linux, Windows, and macOS.

Why two different products?

When you develop an HTML5 game with Phaser, there are two tech stacks you need to get familiar with: game development tooling and web development tooling.

The game development tooling is the most important one (it includes map editors, texture packers, animation tools), however, when you are making professional games, it is recommended to add a modern web development tech stack to your workflow. For example a static-typed coding language like TypeScript. A package management tool like NPM. A web bundler like WebpackJS.

Probably, developers coming from the mainstream game development world, are not familiar with the web development stack, and look to Phaser Editor as an alternative to mainstream editors like Unity Editor, Godot, Construct, etc…

For those users, there is the Phaser Editor Desktop product. It wraps Phaser Editor Core (the editor’s server and client) in an ElectronJS app and provides an experience similar to traditional IDEs: project templates, and a deeper integration with the local Operating System.

On the other side, there is Phaser Editor Core. It contains the server and client of the editor. Its architecture allows better integration with the web development toolings.

Modern web development is moving to the cloud, using platforms like Gitpod and GitHub Codespaces. Phaser Editor Core allows using the editor in these cloud-based development environments.

## Phaser Editor Core

The Phaser Editor Core distribution is a tiny, focused distribution of Phaser Editor.

It is tiny because it includes only the editor’s server and client, and provides only the Phaser game development tools (especially, the Scene Editor plugin), delegating to third-party tools questions like code editing.

Being tiny doesn’t mean it is missing something, it means it is focused on the hard problem: designing Phaser scenes. It allows integrating the editor in different scenarios, like developing in a local desktop or a remote cloud-based environment (let’s say Gitpod or GitHub Codespaces).

You can add Phaser Editor Core to a Docker file, add it as a dependency to a Node package, or just download it and execute it in your OS.

## Phaser Editor Desktop

The Phaser Editor Desktop distribution wraps the Phaser Editor Core distribution in an ElectronJS app, adding more features and integration with the Operating System.

This is the distribution we recommend to you if you are not familiar with the web development tooling (TypeScript, NPM, WebpackJS).

This distribution provides:

- An installer for Phaser Editor.
- A start page for opening & creating projects.
- Multiple project templates configured for all modern bundlers and front-end frameworks. Including some example games.
- An internal Node distribution to install and run the local development server.

Start page, project list:

Start page, project templates:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Welcome

Collaboration

---

# https://docs.phaser.io/phaser-editor/workbench/main-menu

# Main menu

The Main menu lists common general commands. You can open it by pressing in the menu button at the right of the Main toolbar:

- **Open Project**: launches the native directory chooser to open a new project.
- **Close Project**: closes the current project and returns to the Start page.
- **Reload Project**: reloads the project files.
- **Compile Project**: compiles all compilable files of the project. For example, the scene and component files. This does not include TypeScript files or any other format with external compilers.
- **Open Visual Studio Code**: opens the project in a local Visual Studio Code instance. This is available only if the Phaser Editor server is running in desktop mode. You can configure a different external editor. Check the **-external-editor-command** server option.
- **Layout**: It shows a list of supported window layouts.
- **Select Color Theme**: opens the Color Themes dialog.
- **Command Palette**: opens the Command Palette.
- **Settings**: opens the Settings dialog.
- **Check For Updates**: checks if there is a new version.
- **Phaser Explorer**: opens a new window with the Phaser Explorer, an advanced tool to browse the Phaser API and examples.
- **Help**: opens this documentation in the browser.
- **About**: opens the About dialog.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Main toolbar

Window Layout

---

# https://docs.phaser.io/phaser-editor/scene-editor/spine-animations

# Spine animations

Spine is a popular and powerful editor for making 2D skeletal animations. It provides an official runtime for Phaser.

The Spine Phaser runtime provides a rich set of features for loading, controlling, and customizing the Spine animations in a Phaser game. All these features are available to you via the runtime API. In Phaser Editor, as a plus, we are including the basic and most important features in the visual tools. This is a gradual process, but the current set of Spine features supported by Phaser Editor will help you to integrate the Spine animations in your games and boost your productivity.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Sprite animations

Installing the Spine plugin in your game

---

# https://docs.phaser.io/phaser-editor/workbench/views

# Views

A view is a panel that can be used for any purpose. In the IDE they are used mostly to display structured data or the properties of an object.

There are a couple of views in the IDE: some of them show content related to the active editor, content related to the selected element in the workbench, or content of the project.

At this moment, the views can be resized but not dragged, docked or stacked in other places in the workbench, or closed and opened (as you can do in other IDEs). We should add those features in a future version of IDE.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Introduction

Editors

---

# https://docs.phaser.io/phaser-editor/workbench/projects

# Projects

A Phaser Editor project is just a folder. It contains the files of your game and generally it is the root of the web path of the game. This means, that probably you should place the `index.html` file in the root of the folder.

There are project setups (for example, based on WebpackJS) where the project folder isn’t the root of the game.

Learn more about setting the public root of the project

In Phaser Editor Core, you should pass the project path as a program argument:

```hljs bash
Copy$ PhaserEditor -project /path/to/project

In Phaser Editor Desktop, you can select the project folder or create a new one.

Learn how to create your first project

## Reload project

Phaser Editor is not created with collaborative editing in mind. This means, that it assumes that only one user is working on the same project at the same time. You can use source control managers like `Git` to collaborate with your team.

However, it may be possible that you change the project files with external tools and you need to refresh that changes in the IDE. When the IDE gets the focus, it does an incremental reload of the changes made by external tools, but you can force (and we recommend) a full reload of the project:

- Pressing `Ctrl+Alt+R`.
- Or clicking on the **Reload Project** option of the Main menu.

A full reload of the project also may help to fix a glitch with the Scene Editor or any other editor.

A reload of the project is different from a reload of the whole web page because only the files of the project are requested again. But a full web page reload is a good procedure if you see your IDE is consuming a lot of memory resources.

You can read the Resources caching section for additional information.

## Excluding files from project

It is possible that you merge Phaser Editor files with other files from other tools. In this case, you can filter the files shown in the Files view.

Learn how to filter resources in the project

## Files cache

Phaser Editor caches the files of the project to improve the performance of the IDE. This cache is stored mainly in the memory and browser's storage. It is not common, but if you see that the IDE is showing outdated files or in case of huge projects that consume a lot of memory, you can clear the cache by refreshing the page ( `Ctrl+R`).

Learn more about resources cache.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Playing the project

New File dialog

---

# https://docs.phaser.io/phaser-editor/intro/collaboration

# Collaboration

Your collaboration is welcome!

You can help us by reporting issues, providing ideas, sending code modifications, writing tutorials. In anyway you think it could improve the product or making easier the adoption of it.

The main place to report issues is the Phaser Editor's bug tracker repository in GitHub.

Also, you can contact us in our social channels:

X @phaser\_

Phaser Discord

YouTube channel

Or just write an email to `support@phaser.io`.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Distributions

Change Log

---

# https://docs.phaser.io/phaser-editor/workbench/blocks-view

# Blocks view

The Blocks view shows the building blocks of the current editor. This is a concept a bit different from other visual tools.

The common in other videogame creation tools is to provide an asset browser that displays all the assets present in the project.

The Blocks view displays only the assets, or “blocks”, that can be used in a particular editor.

For example, in the Asset Pack Editor, the user adds files to the Asset Pack file. These files are shown as blocks in the Blocks view, but when a user adds a file to the editor, that file is hidden from the Blocks view because it is already present there.

The Inspector view shows the properties of the elements selected in the Blocks view, or operations you can apply to them.

The Blocks view is a content viewer: it shows an inline preview of its elements, you can zoom in/out it and filter its content.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Outline view

Main toolbar

---

# https://docs.phaser.io/phaser-editor/asset-pack-editor/create-asset-pack-file

# Create a new Asset Pack file

The project templates provided by Phaser Editor contain at least one Asset Pack file. You can use it to configure the assets of your project. However, if you want to load a group of assets at a certain moment of the game, and another group in another moment of the game, you can create a new Asset Pack file.

To create the new file, open the New File dialog and select the **Asset Pack file** option. It will open the **New Asset Pack File** dialog:

Select the folder where you want to create the file and write the file’s name. You don’t need to add the `.json` extension to the file, the dialog does this automatically.

When the file is created, the IDE opens it in the Asset Pack Editor.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Introduction

Asset Pack File

---

# https://docs.phaser.io/phaser-editor/intro/changelog

# Change Log

## v4.11.2 - May 8, 2025

- Fixes incremental number field event handling.
- Fixes children disposing and creation of nested prefab instances of filters.
- Fixes Object List code generation of nested prefab variables.
- Discovers script libraries from dependencies.
- Fixes in-scene sprite animations creation.
- Fixes particle emitter frames section of nested prefabs.

## v4.11.1 - Mar 24, 2025

- Fixes checkbox layout in Inspector view.
- Fixes Phaser Studio color theme on disable buttons.
- Fixes Inspector view show nested prefab variants properties.

Release notes

## v4.11.0 - Mar 17, 2025

- Show Phaser news and editor tutorials in the Start page.
- Show a project thumbnail image for every project in the Start page.
- Show a "resume your project" section in the Start page.
- The editor doesn't open the latest project automatically. It is highlighted in the Start page.
- Removes chat window.
- Adds Phaser Studio color theme to start screens of the desktop edition.
- Adds Phaser Studio color theme to the workbench, and set it by default.
- Adds the Theme section to the Settings dialog.
- Adds Telemetry.
- Detects if the project is a Phaser 4 project. Disables FX and Spine features if the project is Phaser 4.

## v4.10.0 - Mar 10, 2025

- Updates templates to Phaser 3.88.2.
- Adds in-scene Spine animation preview.
- Allows setting a preview atlas key to the spine assets in the Asset Pack editor.
- Fixes bugs in nested prefab serialization.
- Allows editing nested prefabs of Box2D bodies and shapes.
- Allows editing the skeleton of Spine prefabs and nested prefabs.
- Fixes bug with default blendMode code generation for container, layer, and spine objects.
- Fixes regression bug with adding objects to a container or layer.
- Adds new parameter to include/exclude the code generation of the `this.gameObject` field in user components.

## v4.9.0 - Feb 18, 2025

- Removes delete confirmation dialog in Desktop edition.
- Adds support to Box2D.
- Fixes a bug regarding the selection of "ghost" objects when the editor gets the focus.

## v4.8.1 - Dec 18, 2024

- Fixes viewer rendering regression.

## v4.8.0 - Dec 16, 2024

- Adds support to compressed textures.
- Never shows assets preview and image file preview at the same time.
- Fix bug in setSizeToFrame method for inline sprite animation.
- #53 Compiler's JavaScript output is adding redundant lines of code.
- #54 Adds support to `quality` and `distance` parameters in Glow FX object.
- #58 Adds Blend Mode support.
- #55 (Fix) Arrow keys in Outline view move the selected objects.
- #21 A command to open the OS Terminal.
- #26 Delete files operation now send the files to the recycle bin (Desktop edition).
- #33 Adds the "visible" parameter to the Asset Pack editor. Allows hide/show assets in the scene tools.
- #2 Fixes scene editor grid rendering when the browser has a huge zoom in factor.

## v4.7.1 - Dec 2, 2024

- #50 Fixes tilemap layer serialization inside a layer or container.

## v4.7.0 - Nov 27, 2024

- Removes enable/disable Pixel art commands.
- Removes set canvas context to WebGL/Canvas type commands.
- Welcome the new Settings UI (Default apps, Keyboard shortcuts, Scene settings).
- #49 Fixes tilemap accidental deletion on depth order operation.
- Updates internal editors to Phaser 3.87.
- Adds Font loader support to Asset Pack and Scene Editor.

## 4.6.1 - Nov 10, 2024

- Fixes regression bug with Text object code generation.

## 4.6.0 - Nov 7, 2024

- Editable tilemap support.
- #44 Adds sprite animation support to ArcadeSprite objects.
- #46 Adds resolution property to Text object.
- #43 Updates all help links to the new help website.

## v4.5.1 - Oct 13, 2024

- Updates to Phaser 3.86.
- Fixes tilemap pixel rounding issue in the Scene Editor.
- Desktop: shows a new page to wait while the editor's server starts.
- Desktop: fixes npm install when proxy is configured but disabled.
- #41 Fixes variable name generation.

## v4.5.0 - Sep 26, 2024

- Scene compiler doesn't import Phaser from "phaser" module.
- Removes the basic typescript template.
- Group by folder the script nodes in the Add Script dialog.
- Group by folder the script nodes in the Go To dialog.
- Replaces the CodeMirror editor by the Monaco editor, for better coding experience.
- Allow dropping a folder in the dock icon in macOS.
- Allow dropping a folder in the Start page of the Desktop editor.
- Exclude Desktop plugins when the editor is running in the browser (regression).

## v4.4.1 - Sep 23, 2024

- Fixes user auth behind a proxy.

## v4.4.0 - Sep 17, 2024

- In-scene preview of the sprite animations.
- Uses a "find" button for the Go To Scene dialog.
- New Go To dialog replaces the Go To Scene dialog. It includes asset packs and user components.
- Adds sort commands to the scene tools pane.
- Adds "Open in external editor" action to the main toolbar ( `Ctrl+Alt+E`).
- Makes the "Open in external editor" action smart enough to open source code files (scenes, user components).
- Adds a Chat with Phaser Studio support team.
- Workbench: fixed default scene settings computation.
- Updates to 3.85.2.

## v4.3.0 - Sep 9, 2024

- Rework the workflow for uploading files.
- Uses "Add Files" instead of "Upload Files" in the Files view.
- Improves the "Add Files" section (former "Upload Files") in the Inspector view. It shows a drop area and an Add Files button.
- Allows adding external folders to the project.
- Shows asset image frames in Inspector view when you select atlas or image files in the Files view.
- The "there is a new update" message now opens the Phaser downloads if you click it.
- Workbench: fixes dragging split panes while there is an active dialog.
- Implements a Trial time or the editor.
- Adds an "Open Scene" button to the main toolbar.
- Fixes screen bounds computation of a Layer object.
- 30 Fixes duplicate command of script nodes and containers.
- Updates to Phaser 3.85.
- Workbench: shows script nodes at the end of the Go To Scene dialog.
- Workbench: fixes issue with selection when the IDE window is activated.
- Workbench: fixes scene panning when the mouse gets out.

## v4.2.0 - Aug 6, 2024

- Adds duplicate command.
- Updates Electron to v31.2.0.
- Adds support to proxy configuration. Includes proxy configuration page in Phaser Editor Desktop.
- Fixes issue detecting dev server running with disabled CORS.
- Adds cancel button to the Go To Scene dialog.
- Checks if the selected directory is not empty before creating a project.
- Adds Video game object.
- Adds Video and Audio file and asset preview sections.
- Adds Pan tool to the main toolbar of the Scene Editor.
- #24 Passing polygon points in `super()` call.
- #23 Starting Dev Server with Vite configuration on Mac.
- #29 Workbench: fixed set snapping to object size command.
- Ask the user to confirm the Phaser EULA before starting the app.
- Updates logo win welcome page.
- Adds the beginners guide link to the Welcome page.

## v4.1.0 - Jul 11, 2024

- Adds ParticleEmitter game object support.
- Fixes serialization of the NineSlice object with the size smaller than the border values.
- #7 Adds support to more audio formats.
- Logs all server and desktop messages and errors to `server.log` and `desktop.log`.
- Server: adds support to WEBP image support.
- \ [#1\] Fixes bad layout in Inspector view when imports multiple images.
- Desktop: improves marketplace templates fetching, organization, and filtering.
- Desktop: added new Vite built-in project template.
- Desktop: installs project dependencies automatically.
- Desktop: starts development server before running the game. It installs dependencies if needed.
- Desktop: shows guidance UI if npm is not installed.
- Desktop: removes legacy (Gumroad) license key support.
- Desktop: clicking on the profile image or name opens the Phaser account in a browser.

### v4.0.2 - May 20, 2024

- Improves Spritesheet Preview section.
- Shows Spritesheet Preview section when selecting an object in the SceneEditor.
- Uses object bounds to select a BitmapText.
- Fixes ColorMatrix FX code generation.
- #1 Fixed compatibility issues with v3 configuration files and the `-max-number-files` flag.

## v4.0.1 - May 4, 3034

- Updates the link to the issues repo in the welcome page.
- #3 Fixes confirm dialog in Windows 11.

### Online

- Allows working in multiple projects at the same time.

## v4.0.0 - Apr 29, 2024

- Shows welcome page.
- #314: (Fix) Pasting multiple script nodes changes their ordering.
- #316: (Fix) Hides user component in prefab instance.
- Removes number of files limits.
- Requires authentication with the Phaser.io users.
- The free mode is not available for the desktop version.
- New icon.
- Workbench: fixes `openfile` command when there is a the welcome page.
- Removes sub-sections from the Files view.
- Adds support to multiple window layout.
- Updates to latest Monaco Editor v0.47.

## v3.67.0, Feb 22

- Updates to latest TypeScript 5.3.3.
- Updates to latest CodeMirror 5.66.16.
- Adds support to Phaser 3.80.
- Save all editors when the user executes the Play commands.
- Depth order commands now works with Mac keyboard with a numeric pad, in its default config.
- Fixes bug with opening multiple context menus.
- Color Picker shows realtime preview of the color.
- Allows changing numeric values with the mouse wheel.
- Allows changing numeric values with the Up/Down keys. If Shift is pressed, it increments it by 10.
- Allows changing numeric values by dragging the label.
- Adds support to Shader Effects objects, Glow and Shadow.
- Uses the Text's internal canvas to render the Text object in the Outline view.
- Use the \_\_MISSING texture by default in NineSlice and ThreeSlice.

## v3.66.0 - Jan 11, 2024

- Allows to set a display name to game objects.
- The display name formatting expression #{x} expands to "x".
- The display name formatting shows prepends the `TargetActionComp.target` value, if present.
- Fixes name collision when copying a game objects tree.
- Fixes duplicating children objects on a tree copy/paste.
- Fixes getting user components of nested prefabs.
- Allows user component object formatting.
- Allow read-only editors.
- Set read-only to editors of node\_module files.

## v3.65.0 - Dec 13, 2024

- Allows using prefabs and user components from node modules.
- Allows tagging folders as "copied" libraries, with the `library.txt` file.
- Adds onWorldBounds property to the Arcade Physics Body.
- The Add Script Node dialog groups scripts by folder and node modules.
- The Blocks view groups the scripts by folder and node modules.
- Allows custom display format of prefab instances, using ${} and #{} expressions.
- Shows tooltip with prefab property info.
- Allows setting a Scene Display Name for scenes.
- Allows setting the Display Name of user components.
- Migrates all project templates to the new script libraries.

## v3.64.0 - Nov 10, 2023

- Fixes making thumbnails of single-layer prefabs.
- Allows merging Import and Open buttons in the Asset Pack Entry section.
- #251 Fixes sprite positioning in Animations Editor.
- #209 Improves scene border painting.
- Improves animations preview UI:
- New Animation preview section.
- New Animations Preview section.
- Shows a preview button in the Animation Key user property.
- Adds new Animation section to Sprite game objects. It is about to auto-start a sprite animation.
- Adds `showBeforeDelay` to the Animations Editor.
- Shows Sprite Animation blocks in the Scene Editor's Blocks view.
- Aseprite animations support.
- New Code Snippets scene elements.
- Optimizes pooling of WEBGL contexts.
- #295 Fixes tilemapLayer nullable method factory.

## v3.63.0 - Sep 30, 2023

- Opens the file given in the `openfile` URL search parameter. Like in `?openfile=some/file`.
- Show splash before loading the workbench.
- Boost load speed: migrates editor's icons from single files to a texture atlas.
- Boost load speed: bundle all IDE text resources into a single res.json file.
- Improves browser cache managing. Loads way faster when running in the cloud.
- Shows property shortcuts in the prefab properties section.
- Shows Prefab Properties section also when a property is selected.
- Show event icons in the Event property's dialog.
- Allows downloading all v3 files from the Phaser Editor 2D website.
- 249 Auto compile the scene file when it is created.
- Adds support to Spine animations.
- Adds spine project template to marketplace.
- #289 Fixes hit area computation on nested containers.

## v3.62.2, Jul 2, 2023

- Fixes exporting user components in prefabs.

## v3.62.1, Jun 30, 2023

- Fixes KeyCode user property editor.

## v3.62.0, Jun 29, 2023

- New Event user property.
- #284 Fixes hit area rendering for containers.
- A new Add Prefab Property command that shows a dialog.
- Replaces the Object Depth commands for the Edit move commands.
- Replaces the Object List sort commands by the Editor move commands.
- Allows change prefab properties with the Edit move commands. Remove the Move options from the Prefab Properties section's menu.
- Allows copy/cut/paste of prefab properties.
- Allows copy/cut/paste keyboard keys.
- Shows Keyboard.Key and Object List objects in the Object Variable user property's dialog..
- Adds the new KeyCode User Property.
- Fixes hit area serialization.
- Removes the User Components section and shows user components properties as individual sections:
- Renames the Scripts context menu to Scripting and include:
- Add User Component ( `M` key)
- Browse User Components ( `Shift+M` key)
- Removes user component nodes from the Outline view.
- Removes the Prefab Instance section, shows the prefab instance user properties as individual sections.
- The Replace Texture Frame command responds to the `F` key.
- Fixes adding a script node to all selected game objects.
#223 Fixed tab-focus on the DOM elements of the user properties.

## v3.61.0 - May 18, 2023

- Checks if a scene file was generated by a newer and incompatible version of the editor.
- Shows Object List items in the Outline view. Allows ordering the items with the Up, Down, Top, Down, commands.
- A new game object scope: LOCAL. The LOCAL scope is now the default scope for objects and has the same meaning of METHOD scope before. Now the METHOD scope forces the creation of a variable for the object.
- Auto computes the middle-private nested prefabs. It doesn't require to declare a parent of a nested prefab as nested prefab.
- Improves Outline elements tagging. It uses tahs like `#prefab_inst` `#nested_prefab_inst` `#scope_local` `#scope_nested_prefab`... So you can search for it in the Outline filter box.
- Allows enabling input in objects.
- Adds the Name parameter to the Variable section of a nested prefab instance.
- #282 Use full nested prefab path in user object variable properties.
- Excludes script node prefabs from the Blocks view when editing a non-script node scene.

## v3.60.3 - Apr 27, 2023

- Fixes regression bug with the Play command.

## v3.60.2 - Apr 27, 2023

- Fixes creating a prefab layer with a selected container or layer.
- Updates the ScriptNode resources with the bug fixes.

## v3.60.1 - Apr 21, 2023

- Fixes plain object serialization (keyboard keys, colliders,...).

## v3.60.0 - Apr 16, 2023

- Fixes labels of the Size section in the Inspector view.
- Scene compiler: fixes class-field declaration.
- Scene compiler: fixes nested prefab varname resolution.
- Improves folder icons.
- Adds command for enable/disable pixel art rendering mode.
- New game objects support: NineSlice and ThreeSlice.
- Removes Parent section.
- Supports the new ScriptNode object.
- Updates the app icon.
- Updates to Phaser 3.60.
- Updates allInOne built-in templates to support Phaser 3.60 and script nodes.

## v3.36.2 - Dec 14, 2022

- Get latest update from Core:
- Fixes email notification with license keys generated by the License Manager.

## v3.36.1 - Dec 12, 2022

- Get latest changes from Core.

## v3.36.0 - Nov 15, 2022

- Animations Editor: allows creating an animation with a single frame.
- Animations Editor: allows compiling the animation keys as JavaScript/TypeScript constants.
- Scene Editor: adds Keyboard.Key object support.

## v3.35.2 - Nov 10, 2022

- Refactored migration process. Fixes running migrations when creating the scene thumbnails.
- Adds migration for `Text.align` property.
- Fixes bug when opening the Command Palette and no editor is open.
- Adds a **Migrate & Compile All Scenes** command.
- #250: Fixes adding a physics body to a scaled object.

## v3.35.1 - Nov 3, 2022

- Removes extra collideWorldBounds parameter in Inspector section.
- Shows prefab properties as independent elements in the Outline view.
- User Components Editor: shows & edits properties as independent entities.
- Bug fix: doesn't keep user comonents in object when convert it to prefab.
- Fixes background for the "New update available" notification. If you click the notification panel, it opens the `https://phasereditor2d.com/downloads` page.
- Shows User Components as children nodes of the objects in the Outline view.
- A new Export parameter in the user components of prefab objects.

## v3.35.0 - Oct 14, 2022

- Allows append objects to a prefab instance.
- Fixes Users Components files serialization. The `app` field is `Phaser Editor 2D - User Components Editor`, and the `contentType` field is `phasereditor2d.core.scene.UserComponents`.
- Removes Monaco-based editors.
- Uses colors for XY labels in the Inspector view.
- Adds support for Arcade physics. The Arcade Image & Sprite. And the body tools.
- Adds APPLE\_M1\_README.txt file to All-in-One/macOS-arm dist.
- Fixes bug with Replace Type command: wrong unlocking position properties.

## v3.34.0 - Aug 12, 2022

- Fixes assets preloading when paste a layer/container prefab from another scene.
- Removes the `Key` and `Digit` prefixes from the label of commands.
- Scene Editor: fixes layout operations with scaled images.
- Scene Editor: improves layout toolbar. Adds origin actions.
- #229 Fixes serialization of tilemap layers as children of containers and layers.
- #227 Adds the Polygon shape game object.

## v3.33.2 - May 31, 2022

- Improves Size tool modifiers.
- Avoids caching of plugin resources.
- Scene Editor: skips refreshing the scene after the paste operation. Fixes object's loader extensions.
- Exports Tint properties to plugins.
- Origin tool allows custom origin properties (like in in a NinePatchContainer).
- Improves support for third-party game object plugins.
- Adds Alpha component to the Container game object.
- Fixes layout commands for objects with custom origin.
- Fixes tilemap's field code generation.
- Fixes tilemap's layer selection in scene.

## v3.33.1 - May 10, 2022

- #210 Missing Variable Pane. Removes everythign related to the Inspector view sections.
- #212 The new Object Constructor user property type.
- #216 No Textures are Available to Select from the Select Texture Window When Using Components.

## v3.33.0 - April 18, 2022

### Added

- #195 The new GO Name parameter.
- #144 Scene Editor: allows paste in place.
- Scene Editor: supports new Scene Key user property type.
- Scene Editor: supports new Object Variable user property type.
- #181 Scene Editor: supports new Color user property type.

### Changed

- Scene Editor: removes the Details sub-tab from the Inspector view.
- Scene Editor: the Reset Zoom button restores the zoom and position (0, 0) of the camera.
- #182 macOS error: exec: "code": Executable file not found in $PATH.
- #185 Allows uploading files with more than 10MB using the Upload dialog.

### Fixes

- Scene Editor: fixes TileSprite hit area computation in CANVAS mode. A work around Phaser's bug in RenderTexture.shapnshotPixel method.
- Scene Editor: fixes the scene thumbnail maker. Invisible containers/layers are not included in the thumbnail.
- Scene Editor: fixes viewer rendering of objects with 0 width/height. Like a Text game object with a `""` value.
- Scene Editor: fixes picking of objects under hidden parents.
- Scene Editor: fixes ordering of objects when moving to a new parent.
- Scene Editor: prevents scrolling the whole page on macOS with scrolling inertia enabled.
- Scene Editor: fixes panning with ALT key when the pointer is close to the Translate tool handlers.
- Scene Editor: fixes selection changed when panning with the ALT key.
- Scene Editor: fixes command for opening a scene file in macOS (⌘+⌥+O).
- #200 BitmapText aligned cause NaN position.
- Scene Editor: fixes Text Content's textarea parameter in Inspector view.
- Scene Editor: adjusts the loading message position to the DPR.
- Scene Editor: adds missing `light/bitmapfont-type@2x.png` icon.
- #29 Fixes drag & drop image in Safari.
- Workbench: prevents Safari to include the address bar in the tab/focus order.
- #149 Renames children when pasting a container. Fixes trimming of numbering in new names.
- Editor tab label: fixes cursor type in Safari.

## v3.32.1 - Feb 27, 2022

- Scene compiler: generates the import of the super class of a scene if it is also a scene.
- #190 Structuring the generated code so that vscode doesn't add imports to the section that gets overwritten.
- #185 Your project exceeded the maximum number of files allowed.
- #183 Component Option Type Scroll Issue.

## v3.32.0 - Jan 12, 2022

- Customize the editor with the new `phasereditor2d.config.json` file.
- #168 Down Arrow in Command Palette closes palette, moves select Image in Scene Editor.
- #171 Consistent use of "Import" throughout editors.

## v3.31.2 - Dec 14, 2021

- Update version.

## v3.31.1 - Dec 14, 2021

### Fixes

- Starter templates: webpack split chunks.
- Fixes webpack build of A day in the beach example.
- Monaco editor loads Phaser built-in type defs. It doesn't require to read the `.d.ts` files from the project.
- Property section: fixes show three-dots menu and collapsing.

## v3.31.0 - Nov 29, 2021

### Added

- #145: BitmapText: adds support for `maxWidth` property.
- Scene editor: commands for setting default render type.

### Changed

- AllInOne: the Play Project command opens the default browser.
- Scene compiler: formats Text style JSON with a VSCode similar formatting.

### Fixed

- Scene editor: fixes Break Parent command.
- #143 Fixes bitmap font loading when pasting a bitmap text object from other scene.
- #154 Incorrect position values passed to super call in derived class of nested prefab.
- 150 Incorrect editor representation: Unlocked nested prefab properties aren't applied to instances of the prefab.
- Fixes serialization of default origin values in Text and BitmapText objects. It now uses `(0, 0)` in those cases.
- Always include the value of an unlocked property in the scene serialization and the code generation.
- Scene Editor: allows changing the origin of a container prefab instance with unlocked position.
- Scene Editor: fixes var name of nested prefabs.

## v3.30.0 - Sep 18, 2021

### Added

- The CodeMirror text editors.
- The allInOne commands: Open project, Close project.

### Updated

- The Monaco editor always runs on advanced mode.
- Update to latest Phaser 3.55.2.

### Remove

- Removes all features related to create and load projects. It now shows a single project at the time.

## v3.20.0 - Aug 23, 2021

### Added

- Nested prefabs:
- Nested prefabs support.
- Uses nullish operator ( `??`) in prefab constructors.
- Allows unlock the position of prefab instances. This change introduces a new scene format that is not compatible with previous versions of the editor.
- Good bye `prefab-awake` & `components-awake` events. Welcome `scene-awake`.
- Updates `UserComponent.js` templates.
- Scene Editor: new Show Children In Outline parameter in the Children section.
- #136 Prefabs: `generateAwakeHandler`.
- Compiler: adds the **Fields In Constructor (JS)** flag. Allows generating field initialization code in the constructor and no as class fields. Some transpilers don't support class fields.
- NinePatch game object support, as part of the Phaser Editor 2D Extras project.

### Updated

- #140 Scene compiler generates code with a format compatible with VS Code. It doesn't create unneeded git diffs.
- Scene Editor: the Change Texture command allows auto unlocking the texture property.
- Scene Editor: the Layout operations allows auto unlocking of the texture property.
- Scene Editor: replaces the Container section by the Children section, and applies for Layer objects too.
- #139\[Feature Request\] add type for method in typescript.
- #136 Prefabs: constructor ordering of custom definition props and START-USER-CTR-CODE.

### Fixed

- Scene Editor (BitmapText): fixes error when the font data isn't available in the cache.
- #134 Creating a list in the editor results in an initialized array in the generated code.
- #135 Word wrap width does not behave correctly
- Scene Editor: fixes Move To Parent dialog in context of prefab scenes.
- Scene Editor: fixes Scene section layout when shows a prefab's instance.
- #142 Animations Editor: fixes changing multiple properties of the same animation.

### Removed

- Removes Parcel templates.

## v3.15.0 - Jul 11, 2021

### Fixed

- Catches project resources preloader errors.
- #127 Fixed: the scroll height is wrong when a section is opened by default.
- Animations editor: allows setting a float value to the `frameRate`.

### Added

- Scene Editor: Select Children command.
- Scene Editor: Layout actions: Align, Align To Border, Grid.
- Scene Editor: Toggle Visibility command auto unlock prefab's visible property.
- #132 Scene Editor: custom property definition.
- Scene compiler: emits the "prefab-awake" event in prefab instances.
- #131 Scene Editor: supports Text word wrap properties.

## Update

- Updates Monaco Editor to v0.25.2. Improves JavaScript worker loading.
- Updates the Webpack project template. Now it uses the Phaser Asset Pack Hashing tool for distribute the files.

## v3.14.0 - May 29, 2021

### Added

- Scene Editor: **Add Component** button opens a dialog. Components are grouped by the container file.
- Scene Editor: adds the Settings option in the Scene menu of the context menu.
- Asset Pack Editor: adds the Blocks property section. It shows an option for displaying all files in the Blocks view.
- Asset Pack Editor: shows a Settings option in the context menu.
- Scene Editor: when enable a tool (like the Scale Tool), it asks for unlocking the scale properties of the selected objects. This applies to Rotate Tool, Scale Tool, Origin Tool, and Size Tool.

### Updated

- Viewer: optimize internal structure with paint information. Rendering is now way faster.
- Viewer: auto-hide scrollbar.
- Main menu: shows Unofficial Phaser Help Center option.

### Fixed

- Fixed null-pointer on context menu item with no bitmap icon.
- Viewer: fixes scrolls when all sections are collapsed.
- Asset Pack Editor: Add Asset dialog shows all files if the flag is enabled.
- Fixed Get License button from the Unlock Dialog.
- Asset Key property: fixes rendering of animations in the selection dialog.
- Scene Editor: method `removeFromDisplayList()` and `removeFromUpdateList()` is not present in `Phaser.GameObjects.Layer`. Skip it.
- Scene Editor: fixes copy/paste layer objects.
- Scene compiler: fixes "components-awake" event emitting of prefab's children.
- Scene compiler: fixes asset pack file url when a `publicroot` file is present.
- Inspector: fixed the many images viewer.
- #89 Scene Editor: remembers last selected objects when opens.
- Menu: items show the negative icon on mouse hover.
- Menu: fixes positioning on buttons and similar elements.
- Menu: fixes color of "checked" icon on mouse hover.

## v3.13.0 - Apr 2, 2021

### Added

- Code editor: enables ES modules (exportClass, autoImport settings and code generation).
- The new "public root" concept. You can configure different public folders inside the project. Now an url of a pack file is computed based on the public root containing the pack file.
- Files view: highlights "publicroot" files and the container folder.
- User components: options button for the component's **Game Object Type** & **Super Class** fields.
- User components: the new `UserComponent.(js|ts)` class generator.
- Webpack project templates for JavaScript and TypeScript.
- Parcel project templates for JavaScript and TypeScript.

### Updated

- Update to Phaser v3.54.0.
- Inspector view: improves style of color buttons in Dark theme.
- Code generator: always use class fields. Init all fields in the declaration. Init in constructor is not used anymore.
- Default User Components File has the `Behaviors.components` name.
- Replace Type dialog: groups built-in types in sections: Texture, String, Shapes...
- By default, a new scene has `editorCreate()` as name of the "Create Method". The user code is generator calling `editorCreate()` within a handwritten `create()` method.
- User Component compiler: fixes TypeScript error when `strict` mode is enabled.
- Organize New Project dialog. It shows new categories: **Basic**, **Game Demos**, **Parcel**, and **Webpack**.
- Updated the basic project templates with a similar behavior to the webpack and parcel templates.

## v3.12.0 - Mar 12, 2021

### Added

- View: the tab sections are collapsible.
- Go To Scene dialog: scene files are grouped by the Phaser type.
- Scene Editor Blocks: when Prefabs tab-section is selected, the prefabs are grouped by Phaser type.
- Files view: the Design and Assets section.

### Updated

- Get latest Phaser v3.53.1.
- Viewer: improves cell renderer. It is always square by default.
- Assets Viewer: improves BitmapFont cell renderer.
- Set dark theme by default.

### Fixes

- Asset Pack Editor: fixes duplicate context menu.
- Scene Editor: panning with Alt key is selecting object under cursor. Fixed.
- Blocks view sections: collapsing sections changes the tab's label height. Fixed.

## v3.11.0 - Mar 5, 2021

### Added

- Scene Editor: command `V` toggles the visibility of the selected objects.
- Scene Editor: non-visible objects are shown with a "hidden" suffix in the Outline view labels.
- Scene Editor: the Change Texture dialog groups the items by type.
- Scene Editor: support SVG assets in the Blocks view.
- Scene Editor: show option to open an object's texture in the Asset Pack Editor.
- Scene Editor: allows changing texture's frame of an object ( `M`).
- #90 Scene Editor: shows the Add Object sub-menu in the context menu.
- #90 Scene Editor: shows the Add Object dialog. You can open it with the `A` shortcut.
- Scene Editor: allows panning the scene by pressing `Alt+MouseLeftButton`.
- #105 Scene Editor: the Select Texture dialog allows grouping the assets by type, asset pack, or location.
- Adds key-binding ( `Ctrl+Alt+E`) for the command to open the output file in the configured external editor. This command is available in the Scene Editor and the User Components Editor.
- Scene Editor: new command to open a scene file ( `Ctrl+Alt+O`).
- Scene Editor: Blocks content filtering via view's tab-sections.
- Asset Pack Editor: allows setting the scale of the SVG assets.
- Animations Editor: allows grouping the blocks by type, pack, and location.
- Viewer: advanced filtering by default. Allows matching different words.
- Viewer: filtering isn't triggered at every key.
- #103: Close editor's tab with the mouse middle button.
- Allows adding the selected object to a new object list.
- Asset Pack Editor: Blocks are grouped by folder.
- #109: Double click a folder to expand.
- Viewer: default context menu and three dots button.

### Fixed

- Scene Editor: Change Texture dialog allows selecting a texture with double-click.
- Scene Editor: `Text.lineSpacing` is ignored in code generation when it has the default value ( `0`).
- Scene Editor: keep same origin when change the texture.

- Scene Editor: fixes code generation of the Text's `lineSpacing` property.
- Scene Editor: fixes change texture command. D\*oesn't apply to non-texture objects. Fixes when selecting a new image (instead of atlas frame).
- Viewer: fixes Collapse All command, when the viewer is scrolled.
- Viewer: fixes Collapse/Expand branch command, when the viewer is scrolled.
- #112 Asset Pack: skipping frames from spritesheets.

## v3.10.2 - Jan 17, 2021

- Scene Editor: Improve error handling when creating an object from JSON data.
- Scene Editor: Fixes scene creation when a BitmapText font key is not found.
- Files view: fixes bug on opening the context menu for files without an registered editor.
- Go To File dialog shows the file path.
- Commands dialog: highlights the keys.
- #99 Scene Editor: string user property allows multi-line text.
- Update to Phaser 3.52.0.

## v3.10.1 - January 7, 2021

### Updated

- Theme restoring is managed by the colibri platform. This is not backward-compatible, your saved theme id will be ignored the first time you run this version of the editor.
- Moved `phasereditor2d.inspector` plugin to `colibri.inspector`.
- Get Phaser v3.51.0.

## v3.10.0 - Dec 22, 2020

### Added

- Scene Editor: support for all tilemap orientation.
- Scene Editor: Bitmap Text shadow properties.
- Scene Editor: Layer object.

### Updated

- Adopt Phaser v3.50.
- Scene Editor: uses WEBGL for scene's thumbnail generation.
- Scene Editor: set origin commands now uses Ctrl+Numpad instead Shift+Numpad.
- Project templates:
- Migrated Sunny Land template to Phaser v3.50.
- When running the server in `-dev` mode, don't use Monaco editor dev files. This fixes the `-dev` option when it's used along.

### Fixed

- Editor tab context menu misspelling "Close to the right Right".
- Scene Editor: validates a tilemap's tileset doesn't have an external source.
- Scene Editor: catches error when accessing localforage for storing the thumbnail image.

## Version 3.9.2 - Dec 7, 2020

- Viewer: massive improvement of rendering performance.
- Viewer: fixes layout request in filtered viewers.
- Viewer-based dialogs: allows open an item with the Enter key.
- Scene Editor: caches scene file thumbnails in local browser Indexed DB.
- Scene Editor: more accuracy on thumbnail generation of container-based prefabs.
- Restore custom "alert" message dialog.

## Version 3.9.1 - Nov 30, 2020

- Check if a new version is available at startup.
- _Check For Updates_ is a new option in the main menu. It shows a message if there is a new version.

## Version 3.9.0 - Nov 24, 2020

### Added

- Scene Editor: supports new Shape objects:
- Rectangle.
- Ellipse.
- Triangle.
- Scene Editor: the Tilemap Layer Outline cell renderer draws the layer.
- Scene Editor: group built-in types by category, in the Blocks view.
- Electron:
- Allows changing the workspace.
- A main menu option to unlock the editor, when it runs in application mode.
- Shows license activation status in title bar and About dialog.

### Modified

- The **Resize TileSprite Tool** was renamed to **Resize Tool**. It also allows resize shape objects.

### Fixed

- Fixes regression sorting atlas frames in viewers.

## Version 3.8.1 - Nov 1, 2020

### Fixed

- Fixes atlas thumbnail generation when atlas URL is pointing to a missing file.

## Version 3.8.0 - Oct 30, 2020

### Added

- User property: Texture Config type shows the texture as the search-button icon.
- User property: Animation Key type shows the middle frame as the search-button icon.
- User property: Asset Key (and derived) properties reveal current value when the search dialog is open.
- Blocks view of Scene Editor shows built-in type blocks, ready to be dropped into the scene.
- Files view: Open a file with the default editor if no other editor is available for it.
- Files view: shows the Open With option in the context menu.
- Remember the editor type when open a file at startup.
- User components editor: complete the Compiler menu in the context menu. With commands to open the output file.
- User components editor: shows the context menu in the Outline view.
- Scene Editor: allows writing an expression in property fields.
- New Sunny Land project template, based on Tiled maps.
- Scene Editor:Tilemap, StaticTilemapLayer and DynamicTilemapLayer support.

### Removed

- Removed the Add Object dialog. Instead, you should use the Blocks view.
- Removed old Dark theme. Renamed Dark Plus theme to Dark.

### Modified

- Improves performance of the viewer cell renderers of atlas assets.
- Improves some colors in the blue theme: scene editor, buttons and toolbar items.
- Allows add more files to the Upload dialog.
- Scene Editor: groups the compiler commands in the compiler section of the context menu.
- Scene Editor: improves performance of the Inspector view updating when transforming an object.

### Fixes

- Fixed the clicking-area of the titles in the Inspector sections.
- Fixes `Ctrl+S` when the Quick Edit Dialog is active.
- Scene Editor: uses spritesheet name on objects created with a spritesheet frame.
- Scene Editor: show a message when you open the Quick Editor dialog but no output file is generated yet.
- Scene Editor: fixes layout of image preview in the Texture section of the Inspector view.
- Scene Editor: fixes picking of flipped objects.
- Viewer: fixed filtering, now it does not expand mismatching parent items.
- JavaScript editor: fixes the file-rename operation handling.

## Version 3.7.1 - Sep 22, 2020

### Fixes

- Animations Editor: fixes display and serialization of animations based on simple image files.

## Version 3.7.0 - Sep 19, 2020

### Added

- Scene Editor: add more user property types:
- Texture Config
- Animation Key
- Audio Key.
- Asset Key
- Scene Editor: allows change type of the selected objects in the Variable section.
- Scene Editor: allows change type of user properties.
- Asset Pack Editor: adds support of the Scripts asset type. To load multiple scripts in a predictable order.

### Modified

- Some icons updated.
- The Delete command is mapped to the `Backspace` key (in addition to the `Delete` one). It is more friendly for macOS users.

### Fixed

- Viewer: ignore mouse-up event if it was originated outside the viewer.
- Assets: increase the limit of spritesheet frames to 1000.
- Animations Editor: handles asset missing errors.
- Scene Editor: does not sort the content of the Add Object dialog.
- Keys: in macOS, the `Command` and `Ctrl` keys are handled as the same key.
- Code editor: when is active, the `Ctrl+P` keys open the Go To File dialog, and not the printing dialog.
- Fixed: Scene Editor captures the key commands even if a dialog is open.

## Version 3.6.0 Sep 7, 2020

### Added

- The Animations Editor.

### Fixed

- #71 Files view: fixes files sorting. Folders go first.
- Viewer: scrolling when distant elements are selected.
- Scene Editor: better scene thumbnail generation.
- Viewers in Inspector view: removes the lag when updating the viewer size with its parent.

### Modified

- Viewers: Pads with `0` chars the labels of spritesheet frames. It helps with sorting: `001`, `002`,..., `126`.

## Version 3.5.0 Aug 19, 2020

### Added

- Scene Editor: shows error dialog when multiple files share the same scene id.
- #63 Scene Editor: the **Fix Duplicated Scenes ID** command assign new IDs to the newer scene files.

- #65 Scene Editor: the **Insert Spaces** and **Tab Size** parameters. To convert tabs to spaces in the compiler output.
- Scene Editor: the new created scenes will get the following parameters value from the latest modified scene: **compilerOutputLanguage**, **compilerInsertSpaces**, **compilerTabSize**, **borderWidth**, **borderHeight**, **borderX**, **borderY**.
- SceneEditor: the Pan scene tool.
- Scene Editor: allows move up/down the user components.
- User Components Editor: the **Insert Spaces** and **Tab Size** parameters.
- Saves the zooming state of all viewers in views, editors, dialogs, etc...
- #59 Option to exclude a directory from the project.

### Modified

- #61 Alphabetic sorting of viewer content.
- #47 Inspector view: clearing content of a number field resets it to the default value.

### Fixes

- Scene Editor: fixes serialization of user number properties with `null` as default value.
- Scene Editor: fixes ID generation when pasting container objects.
- #62 Scene Editor: fixes prefab constructor code generation when the texture is empty.

## Version 3.4.0 - Aug 4, 2020

### Added

- User Component Editor.
- Scene Editor: in Prefab Instance section shows a menu next to each prefab, to select all prefab instances.
- Scene Editor: adds user property of boolean type.
- Scene Editor: added a Compile Project command. It compiles all compilable files of the project (scenes, components).
- Volcano project template.

### Removed

- **User Init Method** parameter and **Compiler Prefab Settings** section. Now you can insert code directly in the constructor of the prefab.
- Show size info of images, atlas frames and spritesheet frames in the Inspector view.
- Scene Editor: the Texture section shows the image size.
- Scene Editor: removed the Compile Scenes command. The Compile Project command compiles all files including the scenes.
- Flying Dragon project template.

### Modified

- Scene Editor: Object Lists are created first as temporal variables, and, if the scope is CLASS or PUBLIC, a field is generated.
- Scene Editor: in prefab scenes, the Outline view displays the non-prefab objects with transparency.
- Scene Editor: in prefab scenes, when the prefab object is selected, the Variable section is not shown in the Inspector view.
- Scene Editor: a new object is added to a container if the container is selected or a child of it.
- Scene Editor: in prefab scenes, when add an object it is added to the root object if it is a container, else, a new container is created, to wrap the root object and the newly added.
- Inspector view: use rounded background for title and sub-titles of the sections.

### Fixed

- Scene Editor: fixes command to create a prefab with the selected object. The new prefab is positioned at `0,0`.
- Scene Editor: fixes scene thumbnail generator when the scene is a prefab with a container that wraps an object.

## Version 3.3.1 - July 15, 2020

### Added

- Phaser 3.24.1 support.

### Fixed

- #52 Moving objects with arrow keys is not updating the properties in the Inspector view.
- #54 Asset Pack Editor: fixes delete items with context menu Delete option.
- Fixes Asset Pack file selection dialog in **Compiler Scene Settings**.
- FileEditor clears undo history when a file is modified in an external editor.

### Added

- Asset Pack: allows to import SVG files as HTML Image.
- Asset Pack: adds an Open button to the File Key section.
- Asset Pack: shows a Help link in the menu of the Inspector sections.
- Closes a couple of Input dialogs (New File, New Project, Rename File) when press ENTER in the input field.
- **Go To File** command `Ctrl+P`.
- Viewer dialog selects visible (or selected) item with the ENTER key.
- Filtered Viewer: allows pressing the Up/Down keys to focus the filter text or the viewer.
- Filtered Viewer: shows zoom buttons.
- Upload dialog: allows to drop files.
- Scene Editor: the Select Region tool.
- Scene Editor: scale proportionally if the `Shift` key is pressed when using the Scale tool.
- Scene Editor: arrow keys commands to change the position of the objects. Press `Shift` for 10x. It respects snap values.
- Scene Editor: enables copy/paste objects across scenes.
- Scene Editor: Inspector view sections show a menu with a Help item and related commands.
- Scene Editor: automatic creation of root container in a prefab scene.
- Scene Editor: in a prefab scene, non-prefab objects are renderer with transparency.
- #41 Scene Editor: zoom in/out buttons.

### Modified

- Improved Asset Pack File section in Inspector view.
- #44 Workbench: does not validate if there is an `index.html` file in the root folder.

### Fixed

- Fixes menu vertical positioning when there is few space at the top.
- Scene Editor: shows message when a prefab is not found.
- Scene Editor: fixes user property declaration when no initial value is provided.
- #59 Scene Editor: compiler skips using field declarations in JavaScript output. It is not supported in Safari.
- Scene Editor: fixes scene compiler code merging when the output file was modified by formatters that replace tab chars with spaces.
- Scene Editor: fixes mouse wheel click on Safari.

## Version 3.2.0 - June 14, 2020

### Added

- #32 In-App update. With `PhaserEditor2D -update` the server downloads the latest version and replace the old files with the new files. With `PhaserEditor2D -download`, the server downloads the latest version zip, and you can install it manually.
- Prefab user properties. You can add user properties to prefabs and change the values in the prefab instances.
- Scene Editor: create a prefab file with the selected object.
- Scene Editor: new command (with key `Q`) to open a Quick Editor Dialog to edit the compiler output file.
- Scene Editor: open compiler output file in VS Code. Enabled when the IDE runs in Desktop mode.
- Scene Editor: the Replace Type dialog provides the option "Keep the original texture", used when you are morphing an object to a prefab type.
- Scene Editor: removes extra blank lines in generated code.
- Open Visual Studio Code command in main menu. Bound to the `Ctrl+Alt+U` key.
- A Comment Dialog ( `Ctrl+Alt+Space`), to write messages in presentations or video-recording.

### Modified

- Files view: the context menu **New** option does not open the **New File** dialog. Now it is a sub-menu with the shortcuts to create a new file of any supported content type.
- Scene Editor: the translate and rotate manipulators set integer values to objects.
- Scene Editor: in a prefab scene, the non-prefab objects are rendered with transparency, in the Outline view.
- Scene Editor: in a prefab scene, does not show the Inspector view's Variable and Lists sections if the selected object is the prefab object.
- Scene Editor: auto creates a container when add new objects to a prefab scene.
- Scene Editor: removes redundant `sceneType` attribute in scene file serialization.

### Fixed

- Don't activate the editor when clicking on the close button.
- Image Editor: registers the right content type association.
- Monaco editor: on a model change, if the model content is the same of the file content then the editor is not marked as dirty (unsaved).
- Scene Editor: fixes the type inference of an empty Object List.
- Pre-load content type of uploaded files.

## Version 3.1.1 - May 25, 2020

### Fixed

- #33 Wrong BitmapText default origin.
- #32 The server checks if there is a new version available.
- Monaco (code) editor updates content with external changes only if the flag `-enable-advanced-js-editor` is set. Now it updates always.
- #37 TypeScript project template opens the README file the first time, with the instructions to run the project.
- Scene Editor: does not compile a scene if the output file is open in a dirty (unsaved) editor.

## Version 3.1.0 - May 24, 2020

### Added

- Scene Editor: use a color picker for the color properties in the Inspector view.
- Scene Editor: the origin manipulator. To select it press `O` or select it in the context menu or toolbar. It also support containers.
- Scene Editor: the Tint properties.

- Server: shows helpful welcome messages.
- Persist the collapsing state of the Inspector view sections.

### Removed

- The TypeScript template does not include the compiler output files ( `game.js`). The user should compile the project before play it.

### Modified

- Scene Editor: the **Set Origin To** commands modify the origin of the object but keep it's global position.
- Replace usage of EventTarget with a custom event emitter.

### Fixed

- Scene Editor: fixes the Translate manipulator when the objects are children of a transformed container.
- Deep nested menus are closed well.
- Sub-menus do not overlap with the parent menu.
- #26: File upload in Windows.
- Scene Editor: fixes picking of a container prefab instance.
- Scene Editor: fixes the Parent dialog in the Parent properties section. Now it does not show container prefab instances.

### Compatibility

- Safari browser: EventTarget is not supported as constructor. We replaced it by a custom event emitter (colibri.ui.controls.ListenerList).

## Version 3.0.1 - May 16, 2020

### Bug fixes

- #15: Blurry text in HiDPI screens.
- Scene Editor: improves picking of objects.
- SceneEditor: improves Outline view rendering of BitmapText objects.
- Inspector view: hides overflow text in the sections title.

## Version 3.0.0 - May 5, 2020

First public release

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Collaboration

Download and install

---

# https://docs.phaser.io/phaser-editor/asset-pack-editor/asset-pack-file

# Asset Pack File

The Asset Pack file is a manifest (in JSON format) of the files you can load in a game. It is built-in in Phaser and you can use it without Phaser Editor.

Learn more about Asset Pack loading in Phaser

This file is intensively used in the IDE. Tools like the Scene Editor depends on the information provided in the asset pack files.

You can have multiple asset pack files in the project. In fact, it is a good practice in large games to split the assets in different groups (asset pack files) and load them only when it is required.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Create a new Asset Pack file

Editor content layout

---

# https://docs.phaser.io/phaser-editor/animations-editor/intro

# Introduction

Sprite animations are the most frequent option to animate characters in Phaser games. The principle of this animation technique is the displaying of a sequence of images (frames), at a given “speed” or frame rate.

Animation:

Animation frames:

In Phaser v3, the animations are created as global objects, in the animations manager:

You can create a single animation:

```hljs javascript
Copythis.anims.create({
"key": "acorn",
"frameRate": 12,
"repeat": -1,
"frames": [\
{\
"key": "atlas",\
"frame": "acorn-1"\
},\
{\
"key": "atlas",\
"frame": "acorn-2"\
},\
{\
"key": "atlas",\
"frame": "acorn-3"\
}\
]
});

Or multiple animations:

```hljs javascript
Copythis.anims.fromJSON(
"anims": [\
{\
"key": "acorn",\
// ....\
},\
{\
"key": "player",\
// ....\
}\
]
);

in the practice, you create all the animations once in the game, probably in the preloader scene. Then, you can play an animation on a sprite object passing the animation key to the play() method:

```hljs javascript
CopymySprite.play("acorn");

Other way to create the animations is packing them all in a single JSON file, and load the file using the this.load.animation(..) method:

```hljs javascript
Copythis.load.animation("my-anims", "assets/animations.json");

Phaser Editor provides the Animations Editor, to create the animations JSON file. So, the workflow is very simple:

- Create the animations JSON file with the Animations Editor.
- Import the animations JSON file into an **Asset Pack** file with the Asset Pack Editor.
- Play the animations in your code, with the play() method or by using the animation properties of the sprites or user components and prefabs.

In the next section we cover all aspects of the Animations Editor.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Troubleshooting

Create a new Animations file

---

# https://docs.phaser.io/phaser-editor/scene-editor/input

# Input

We are exploring on the ways of helping you with the handling of the input of your game. As a start, we are supporting the Phaser.Input.Keyboard.Key API in the Scene Editor and the Hit Area of an object.

## Keyboard Key object

The Scene Editor supports adding a Phaser.Input.Keyboard.Key object to the scene. Just drag the **Keyboard.Key** object from the Blocks view and drop it into the scene:

The editor shows the **Key** objects in the **Input** section of the Outline view:

Select a key for editing its properties in the Inspector view:

The **Variable** properties:

- **Name**: The name of the variable for the Key object.
- **Scope**: The scope of the variable. It may be `LOCAL`, `METHOD`, `CLASS`, or `PUBLIC`. By default it is `PUBLIC`. You can learn more about the variable scopes.

The **Keyboard Key** properties:

- **Key Code**: the keyCode. Click on the button for selecting the code:

The code generated for the key code is like this:

```hljs javascript
Copy// in the context of a scene:

const jumpKey = this.input.keyboard
.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

// in the context of a prefab:

const jumpKey = this.scene.input.keyboard
.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

A common usage of the keys, is to assign it to a field (set the `Class` scope) and check for its **down** state in the **update** method:

```hljs javascript
Copyupdate() {

if (this.jumpKey,isDown) {

this.player.body.velocity.y = -400;
}
}

## Hit Area

Making interactive objects is part of almost every game. You can enable an interactive hit area for an object right in the Inspector view. You can select in the **Hit Area** section the shape for the interactive area of an object. By default, the shape is `NONE`, which means the object doesn’t have a hit are at all.

The available hit area shapes are:

- Rectangle
- Ellipse
- Circle
- Polygon
- Pixel Perfect

Each shape has a dedicated section for the shape’s properties. In addition of the section, you can activate the **Edit Hit Area** tool ( `I`) and change the properties of the area by dragging handlers in the scene.

### Rectangle Hit Area

To set a rectangular hit are on the object, select the `RECTANGLE` option in the **Shape** parameter of the **Hit Area** section. It enables the **Hit Area (Rectangle)** section where you can set the position and size of the area:

Also, you can change the values with the **Edit Hit Area** tool ( `I`):

When you create a rectangle hit area, the scene compiler generates a code like this:

```hljs javascript
Copy// eye
const eye = this.add.image(369, 277, "lance-overdose-loader-eye");
eye.setInteractive(
new Phaser.Geom.Rectangle(17, 16, 90, 80),
Phaser.Geom.Rectangle.Contains);

### Ellipse Hit Area

You can set an ellipse as shape for the hit area of an object. Select the `ELLIPSE` option in the **Shape** parameter and changes the ellipse properties in the **Hit Area (Ellipse)** section:

Also, you can change the ellipse properties with the **Edit Hit Area Tool** ( `I`):

The scene compiler generates the hit are shape code like this:

```hljs javascript
Copy// chicken
const chicken = this.add.image(684, 126, "budbrain_chick");
chicken.setInteractive(
new Phaser.Geom.Ellipse(30, 70, 66, 133),
Phaser.Geom.Ellipse.Contains);

### Circle Hit Area

You can add a circular hit are to an object by seleting the `CIRCLE` shape in the **Hit Area** section. Then you can change the radius and position of the circle in the **Hit Area (Circle)** section:

Also, you can change the circle properties with the **Edit Hit Area Tool** ( `I`):

The scene compiler generates code for setting the circle area in this way:

```hljs javascript
Copy// wizball
const wizball = this.add.image(191, 161, "wizball");
wizball.setInteractive(
new Phaser.Geom.Circle(46, 46, 46),
Phaser.Geom.Circle.Contains);

### Polygon Hit Area

You can set a polygon hit area to an object by selecting the `POLYGON` option in the **Shape** parameter in the **Hit Area** section. The polygon is made with an array points. The points are represented in a string of numbers, with this syntax: `"{P1.x} {P2.y} ... {Pn.x} {Pn.y}"`. You can change the points in the **Hit Area (Polygon)**:

You can click in the 3-dots button for getting a bigger text box and edit all the points:

Or you can use the **Edit Hit Area Tool** ( `I`) for adding, deleting, and changing the points of the polygon:

You can add a point by placing the mouse in a line and dragging the pink point:

You can delete a polygon point by placing the mouse pointer on top of it and pressing the `Delete` key. The point to delete is highlighted in red:

To modify a point, drag it 🙂.

The scene compiler generates the code for setting the polygon hit area like this:

```hljs javascript
Copy// car
const car = this.add.image(616, 523, "supercars-parsec");
car.setInteractive(
new Phaser.Geom.Polygon(
"1 85 83 37 245 -0 381 3 574 13 597 57 586 76 603 88 562 115 548 140 510 162 456 147 316 139 158 146 110 160 68 149 0 138"
), Phaser.Geom.Polygon.Contains);

### Pixel Perfect Hit Area

To enable the pixel-perfect hit area in an object, select the `PIXEL_PERFECT` option in the **Hit Area** section and set the `alphaTolerance` in the **Hit Area (Pixel Perfect)** section:

The **Alpha Tolerance** parameter is “the alpha level that the pixel should be above to be included as a successful interaction”.

The scene compiler generates the code for setting pixel perfect hit area in this way:

```hljs javascript
Copyconst ship = this.add.image(1000, 281, "thrust_ship2");
ship.setInteractive(this.input.makePixelPerfect());

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Object List

Prefabs

---

# https://docs.phaser.io/phaser-editor/workbench/intro

# Introduction

The workbench is the sum of all the parts of the IDE: the editors, views, dialogs, menus, commands, themes, extensions, storage. Is the basement for the tools included in the IDE.

If you are a Phaser Editor v2 user, this new version of the IDE should result in very familiar to you. It has a similar layout but removes all the complexity of a general-purpose IDE, and shows to you only the tools you need.

The IDE includes elements present in other game development tools:

- The Outline view shows the content of the active editor but with a hierarchical structure.
- The Inspector view shows the properties of the objects selected in the active editor or active view. We can say all objects you can edit in the IDE are modified in the Inspector view.
- The Blocks view shows the elements you can use to build the objects of the active editor. If the active editor is the Scene Editor, the Blocks view shows the assets you can drop into the scene. If the active editor is the Asset Pack Editor, then it shows the files you can import into the Asset Pack file. Maybe this view is not so common in the market, but the concept is simple.
- The Files view displays the files of the project. It is just like any other file explorer. It allows to delete, rename, move, upload the files. Open the files in an editor and other file related actions. Like the other views, when you select a file, the Inspector view shows the properties and other actions related to the file.
- The Main toolbar and Main menu provides commands (or actions) that affect the current editor or the whole IDE.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Add an image to the scene

Views

---

# https://docs.phaser.io/phaser-editor/code-editor/intro

# Coding in Phaser Editor

Phaser Editor is focused mainly on provide design tools. You can code your game using advanced third-party editors.

You can use any coding editor, but we recommend Visual Studio Code. Actually, the projects generated by the IDE are full compatible with that editor and includes the configuration files.

However, we included basic code editors inside Phaser Editor so you can do a quick preview or modification of the code.

These editors are based based in the Monaco editor, and have a decent amount of features, especially for JavaScript development. If you are using an advanced toolchain for coding your game, like using a bundler, we strongly recommend you to use Visual Studio Code.

Phaser Editor runs on the desktop or in the cloud, and you can find excelent code editors in both environments. Especially, those editors based on Visual Studio Code. Learn how Phaser Editor integrates with Visual Studio Code in the next section.

## Visual Studio Code compatibility

The Visual Studio Code editor is prefect for writing the code of the Phaser Editor games. First, t is extremely popular and powerful. Second, cause the projects created by Phaser Editor contains the files needed by Visual Studio Code to provide a good coding experience with Phaser.

### Project structure

The JavaScript project templates include these files:

1. The file `lib/phaser.js`. It is the Phaser runtime.
2. The Phaser type definition files: `types/phaser.d.ts` and `types/matter.d.ts`. Those files are provided by Phaser and are used by the Visual Studio Code to “understand” the Phaser API.
3. The project configuration file: `jsconfig.json`. If it is a TypeScript project, then it includes the tsconfig.json file, instead of the `jsconfig.json` file.

### Code Server

If you are using a remote instance of Phaser Editor, you can try Code Server. It allows to run VS Code in the same Phaser Editor server and edit the game code in your local browser.

Also, you can use cloud services like GitHub Codespace or Gitpod. In both cases you can install Phaser Editor Core as a project dependency and run it alongside with VS Code.

### Visual Studio Code & Phaser Editor integration

You can launch Visual Studio Code from Phaser Editor. The command is **Open Visual Studio Code** `(Ctrl+Alt+U)`. It is a smart command, so it addition to open the project in Visual Studio Code, it finds the right file to open in Visual Studio Code.

If the file in Phaser Editor is a scene, it will open the scene’s source file. If the current file is the User Components editor, it will open the selected component's source file.

This command is fundamental to quickly navigate between the design tools and the code editor. You can trigger it from the main toolbar:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Compiling animation key constants

Project configuration

---

# https://docs.phaser.io/phaser-editor/asset-pack-editor/inspector-view

# Inspector view integration

The Inspector view connects with the active Asset Pack Editor and shows property editors to change the file configurations.

In addition to property editors, in some cases, the Inspector view shows a preview of the selected configuration.

This preview section is shown when you select a file key in other parts of the IDE, like the Blocks view in the Scene Editor.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Outline view integration

Introduction

---

# https://docs.phaser.io/phaser-editor/scene-editor/sprite-animations

# Sprite animations

A Sprite game object is an image object with the capability of displaying frame-by-frame animations.

In Phaser Editor there are two workflows for making animations in your game:

## Workflow 1

Using the Animations Editor. It gets the image frames from an Asset Pack file and groups the frames into animations. You can set different properties to the animation, like the frame rate, repetitions, delay, etc… and finally, you load the animation file into the Asset Pack file.

## Workflow 2

Exporting the animations from the Asesprite software. It outputs Asperite animation files that are Phaser-compatible and that you can load in an Asset Pack file.

## Finally

Once the animation assets (produced by the Animations Editor or Asesprite) are defined in the Asset Pack file, you can use them in different tools of the Scene Editor:

- The animation blocks in the Blocks view. You can create a Sprite game object by dropping an animation block into the scene.

- The Animation and Animation Configuration sections of the **Inspector** view. It allows playing an animation on a Sprite game object.

If you tick the **Animation Preview** parameter, it will play the animation in real-time in the scene editor.

- The Animation Key user property type. It allows selecting the name of an animation defined in an Asset Pack file.

## Sprite animation preview

Phaser Editor provides a dialog for previewing the sprite animations:

You can open this dialog in different contexts:

- In the Asset Pack Editor, when you select a Sprite animation in the Outline view:

- In the Blocks view of the Scene Editor, as a Sprite animation block:

- In the Animation properties section, when selecting a Sprite game object in the Scene Editor:

## Aseprite animation support

Aseprite ( www.aseprite.org) is a popular software for making pixel art and animations. Phaser provides an Aseprite files loader and a method for making animations with the files.

This is the workflow for working with Aseprite animations in Phaser Editor:

- Export the Asesprite files to the Phaser Editor project. You should follow these instructions for exporting the files. The following image shows the atlas and PNG files of the “paladin” and “tank” animations:

- Import the Asesprite files in an Asset Pack file. You can select the atlas files ( `.json`) and import them with the import buttons of the Inspector view:

You can check the files are correctly defined in the Asset Pack file:

- Now the Asesprite files are in the Asset Pack file you can access the animations in the different tools of the editor:

## Aseprite Code Snippets

In Phaser, before playing an Asesprite animation in a sprite, you should create the animations in the Animations Manager.

For creating the animations you should call the createFromAseprite and pass as argument the Asesprite asset key.

In Phaser Editor you can add this chunk of code in an assisted way:

- Right-click on the scene. It opens the context menu. In the **Code Snippet** menu, select the **Add Create Animations From Aseprite** option.

- It opens a dialog with all the Asesprite asset keys defined in the Asset Pack files of the project. Select the one you want to use in your project. Probably all of them:

- Finally, when you compile the scene, it generates these lines of codes at the first lines of the **create()** method of the scene:

```hljs javascript
Copy// snippets
this.anims.createFromAseprite("paladin");
this.anims.createFromAseprite("tank");

### Aseprite exporting instructions

Taken from the Phaser documentation:

To export a compatible JSON file in Aseprite, please do the following:

- Go to "File - Export Sprite Sheet"
- On the Layout tab: 2a. Set the “Sheet type” to “Packed” 2b. Set the “Constraints” to “None” 2c. Check the “Merge Duplicates” checkbox
- On the Sprite tab: 3a. Set “Layers” to “Visible layers” 3b. Set “Frames” to “All frames”, unless you only wish to export a sub-set of tags
- On the Borders tab: 4a. Check the “Trim Sprite” and “Trim Cells” options 4b. Ensure “Border Padding”, “Spacing” and “Inner Padding” are all 0 (1 is usually enough)
- On the Output tab: 5a. Check “Output File”, give your image a name and make sure you choose “png files” as the file type 5b. Check “JSON Data” and give your json file a name 5c. The JSON Data type can be either a Hash or Array, Phaser doesn’t mind. 5d. Make sure “Tags” is checked in the Meta options 5e. In the “Item Filename” input box, make sure it says just “{frame}” and nothing more.
- Click export.

This was tested with Aseprite 1.2.25.

This will export a png and json file which you can load using the Aseprite Loader

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Box2D shapes

Spine animations

---

# https://docs.phaser.io/phaser-editor/workbench/inspector-view

# Inspector view

The Inspector view shows the properties of the objects selected in the active view or editor.

The properties are grouped into sections. The sections can be collapsed/expanded.

The label of the property supports tooltip. Usually, this tooltip is the correspondent Phaser API documentation of the property.

In addition to common properties, a section can display preview images or buttons to apply certain operations to the selected objects.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Files view

Outline view

---

# https://docs.phaser.io/phaser-editor/animations-editor/add-animation

# Adding animations to the file

To create a new animation, press the **Add Animation** button in the toolbar. It shows a dialog to enter the animation name:

Because empty animations are not allowed, it opens a dialog to select the initial animation's frames. If you select a texture atlas or spritesheet, all the frames will be added to the animation:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Create a new Animations file

Automatic creation of the animations

---

# https://docs.phaser.io/phaser-editor/asset-pack-editor/organizing-the-assets

# Organizing the Asset Pack files

You can place an Asset Pack file in any folder, however, we recommend placing these files in the folders dedicated to the game assets, for example: `assets/pack.json`.

You usually need more than one Asset Pack file: at least, one for the Preloader scene and another for the rest of the game scenes.

Sometimes, you need to use “helper” assets in the Scene Editor, assets that you use in the Scene Editor as a reference but are not included in the game. You can group all these assets with their own Asset Pack file in a separate folder, and exclude the folder from the game build.

This could be the structure of your project:

```hljs bash
Copyassets/
preload/
preload-pack.json
... # preloader assets
levels/
levels-pack.json
... # level assets
helpers/
helper-pack.json
... # helper assets

The Asset Pack Editor searches for files inside the folder containing the Asset Pack file, and you can make it more effective if the structure of the project is well organized.

Learn how to add entries to an Asset Pack file

## Skin-like assets

If your game has characters or objects with different skins, you can organize the assets in a way that makes it easy to switch between skins. For example, you can create a folder for each skin and place the assets inside it. Then, you can create an Asset Pack file for each skin. In the **Asset Pack Settings**, you can turn an asset pack visible or invisible, so you can switch between skins by enabling or disabling the Asset Pack file. This **Asset Pack Visible** parameter only applies to the editor tools, because in the game you can still load all the skins (asset pack files). The "visible" property is only a trick to make filter assets in the editor:

The **Asset Pack Settings** shows in the Inspector view when no object is selected in the Asset Pack editor.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Importing files

Outline view integration

---

# https://docs.phaser.io/phaser-editor/workbench/editors

# Editors

An editor is a panel that is dedicated to editing an object or input. It has a title and a content area. The title shows the name or identifier of the input object and the content area provides the UI elements to edit the input. In the majority of the cases, the input of an editor is a file.

## Dirty state

An important characteristic of the editors is the “dirty” state. When the user changes something in the editor, the editor is labeled as “dirty” and indicates that it should be saved to persist the changes. If you close an editor but it is dirty, it shows a confirmation message, because the changes will be lost.

## Title image

The title of an editor, in many cases, shows a preview of the content of the input. It is the case of scenes or images. This helps to identify the input of an editor when you have some of them open.

You can make the title image bigger or smaller, by pressing `Ctrl+3` and `Ctrl+4`:

## Title menu

The editor’s title provides a context menu with a couple of options. To close the editor, close other editors or change the title’s image size:

## Restore editors

When you open a project, the IDE opens the editors used in the previous session. This information is stored in the local storage of the browser. This means, it is not present in other browser instance or you can remove it by clearing the browser private data.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Views

Files view

---

# https://docs.phaser.io/phaser-editor/first-steps/create-first-project

# Create your first project

Phaser Editor Desktop provides a way to create a new project from a template.

Most of the templates are downloaded from the internet and are updated frequently. The first templates in the list are built-in and are available offline.

Each project template has a README file with the instructions for installing dependencies and running the project.

## Creating a project

Click on the **New Project** button:

Select one of the project templates. Those provided in the Built-in section are available offline. The other project templates are downloaded from the internet for the first time:

When you select a project template, the IDE opens the OS file explorer. Select an empty directory (or create a new one) where the project content will be copied. If the template is downloaded from the internet, it may take some time to fetch the files:

If the template is based on web technologies like bundlers or front-end frameworks, the editor will ask you to install the dependencies automatically. You select the **Discard** option if you want to install them later. Installing the dependencies may take a few minutes. In a Windows machine, it should show the installation process in a "black terminal" window.

Finally, the project is open in the IDE:

It shows the Welcome page. You can click on the **Open Scene** button to open any of the scenes of the project. Also, you can browse all project files in the **Files** view.

When you click the **Open Scene** button, the editor will open the Go To dialog, where you can select the scene to open:

## Running the project

To run your project, click on the **Play** button at the beginning of the toolbar:

Phaser Editor provides a built-in HTTP server to run plain JavaScript projects. However, most of the projects are based on modern web technologies like Webpack, Parcel, or Vite. In this case, you should run a development server manually. If you don't run the development server, the editor may detect the development server is not running and show a dialog with the option to run it:

If you click the **Start Dev Server** button, the editor will run the development server and open the default browser with the project running. The browser may open before the server is ready. In this case, you can refresh the browser manually.

The process of starting the development server may require the installation of the project dependencies, so it may take a few minutes.

## Node and NPM

Most of the modern front-end web technology is based on Node.js and NPM. The editor contains an internal distribution of Node and NPM to run the automatic tasks. If your project depends on a specific version of Node or NPM, you can run all commands manually in the OS terminal app.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Download and install

Add an image to the scene

---

# https://docs.phaser.io/phaser-editor/asset-pack-editor/overview

# Introduction

In a Phaser game, you load the files using the methods of the Phaser.Loader.LoaderPlugin class. This is how you can load a sprite-sheet file:

```hljs javascript
Copythis.load.spritesheet("bot", "images/robot.png", {
frameWidth: 32,
frameHeight: 38,
});

You pass a key ( `'bot'`) to identify the file in the game cache, the URL of the file ( `'images/robot.png'`) and a sprite-sheet configuration object, with other information like the frame size.

Or you can load the file by passing a single argument, a SpriteSheetFileConfig configuration object:

```hljs javascript
Copythis.load.spritesheet({
key: "bot",
url: "images/robot.png",
frameConfig: {
frameWidth: 32,
frameHeight: 38,
},
});

Every file type can be loaded using its configuration object, that is just a JSON object. Following this logic, Phaser has a special type of files that contains the configurations of other files: the Asset Pack file.

You can load an Asset Pack file using the `pack(...)` method of the loader:

```hljs javascript
Copythis.load.pack("level1", "assets/pack.json");

The Asset Pack Editor allows you to edit an Asset Pack file, making it very easy to load the assets in your game. Instead of spending precious time writing the JSON file by hand, with the Asset Pack Editor you can load your assets with a visual tool and smart operations.

The Asset Pack file is relevant in the IDE for two main reasons:

- It is a Phaser built-in format. This means you can create an Asset Pack file with Phaser Editor and use it in any Phaser project, even if you are using another IDE.
- The Scene Editor and eventually other tools provided by the IDE are based on Phaser. This means that the IDE can reuse the Asset Pack file information to load the assets into its internal tools.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Settings

Create a new Asset Pack file

---

# https://docs.phaser.io/phaser-editor/workbench/files-view

# Files view

The Files view shows the files of the project. The files are displayed in a tree structure, like in many other file navigators.

Like the other content viewers present in the IDE, the Files view shows inline previews of a certain type of files. At the same time, you can zoom in/out them by pressing the `Shift` key and rolling the mouse wheel.

## Context menu

The context menu lists a couple of common file operations.

The **New…** sub-menu shows shortcuts to create new files related to the IDE tools.

The **Open With** sub-menu shows all the editors you can use to open a selected file.

There **Rename**, **Move**, **Copy To** and **Move to Trash** options work just like in any other file manager. But warning, at this moment, these operations cannot be undone, so take care of them. In the Desktop distribution of the editor, the **Move to Trash** operation moves the file to the system trash.

If you run the server locally (not using the `-public` option), then the context menu shows the **Locate File** item. It opens the default file manager of your OS at the location of the selected file or folder.

Similarly, the **Open in Terminal** command opens the OS terminal at the location of the selected file or folder.

The **Add Files** opens the UI to copy external files to the project.

## Inspector view integration

The Inspector view shows the properties of the objects selected in the active view or part. When you select a file in the Files view, the Inspector view displays different property sections of the file.

In all cases, the Inspector view shows the **File** section. It displays the **Name**, **Full Name**, **Size**, and a button to open the file in an editor.

In addition, plugins can provide their own file property sections for Inspector view. There are the cases of the images preview, the scenes preview or the Asset Pack Editor section, which allow importing the files to the assets manifest.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Editors

Inspector view

---

# https://docs.phaser.io/phaser-editor/scene-editor/inspector-view

# Inspector view

The **Inspector**, is a general view for showing the properties of the objects selected in other parts of the IDE.

When the Scene Editor is active, the Inspector view shows the properties of the objects selected in the scene.

It groups the properties in sections:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Adding an object to the scene

Game Object types

---

# https://docs.phaser.io/phaser-editor/asset-pack-editor/outline-view

# Outline view integration

The general purpose Outline view connects with the active Asset Pack Editor and shows all the file configurations grouped by type. In the case of complex files, like atlas or sprite-sheet files, it shows the frames too.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Organizing the Asset Pack files

Inspector view integration

---

# https://docs.phaser.io/phaser-editor/first-steps/add-image-to-scene

# Add an image to the scene

Let’s add an image to the `Level.scene` file created by the **Basic JavaScript** project template.

1. To upload an image to the project, right-click on the `assets` folder and select the **Add Files** option from the context menu. This will open the operating system's file chooser dialog.

2. Select the desired image, such as `background.png`. The image will be uploaded to the `assets` folder and displayed in the Files view.

3. Ensure the new image is selected in the Files view. In the Inspector view, you will find the properties of the image file. In the **Asset Pack Entry** section, there are two buttons to import the image into an Asset Pack file. Click the **Import as image** button and select **Add To /assets/asset-pack.json**.

The `assets/asset-pack.json` file is a Phaser configuration file that contains all the files you can load into a game. The Scene Editor uses this file to access images and other resources. You can add image files to the Asset Pack file using the previous method, or by opening the `assets-pack.json` file in the Asset Pack Editor.

4. Now, in the Blocks view, you will see the new image. Drag the image and drop it into the middle of the scene. Press the `End` key to move the image to the bottom of the scene, or right-click on the image and select the **Edit** → **Move Bottom** option:

5. Save the scene ( `Ctrl+S`) and play the project ( `F12`).

There are multiple ways to add an image to the project, such as selecting the file in the system explorer and dropping it into the editor window. You can learn more about this process here.

## Community tutorials

There are several content creators who have produced tutorials on Phaser Editor. In this section we recommend some of them:

Phaser Editor v4 Beginner's Guide: Make Games Fast with Phaser 3! by Scott Westover.

Make your first Phaser game by Arian Fornaris (made for version 3 of the editor, but can still be helpful for beginners)

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Create your first project

Introduction

---

# https://docs.phaser.io/phaser-editor/misc/resources-filtering

# Resources filtering

Phaser Editor is the typical web application with a server layer and a client (browser) layer. Because the browser has no direct access to the file of the projects, the editor loads many resources in memory. For this reason, you must keep a low number of files in the project. Usually, HTML5 games need a few files, but you may include the files of third-party tools or the files of the server side of the game.

If you cannot change the structure of your project, you can exclude files from the Phaser Editor project by using `.skip` files. It is similar to how you can exclude files from a Git repository, using `.gitignore` files.

You can create a `.skip` file in a folder of the project, and write the file name patterns you want to exclude.

This is an example of a `.skip` file:

```hljs bash
Copy
# exclude all node_modules folders in the project.
**/node_modules

# exclude a single file in the current directory
my-private-secret.data

# exclude all files in the form @2x.png, @2x.json,...
**/*@2x.*

If the `.skip` file is empty, then the editor assumes it has a `*` pattern. It means it will exclude all the folder’s content. We did it that way for backward compatibility with previous versions of the editor.

In addition to the `.skip` files you create in each project, you can edit the `default-skip` file that is placed in the Phaser Editor install directory. The patterns defined in that file will be applied to all projects. By default, it includes the patterns to skip all files starting in a dor ( `.`), all `node_modules` folders, and all `__MACOSX` files.

Another way of filtering the files, is using the `skip` setting of the project configuration file. You can set an array of “skipping rules”, the same used in the `.skip` file:

```hljs bash
Copy// phasereditor2d.config.json

{
"skip": ["my-private-secret.data", "**/*@2x.*"]
}

## Patterns

We use the doublestart project for pattern matching. Following is a part of the documentation of that project:

Special terms in the patterns:

| Special Terms | Meaning |
| --- | --- |
| `*` | matches any sequence of non-path-separators |
| `**` | matches any sequence of characters, including path separators |
| `?` | matches any single non-path-separator character |
| `[class]` | matches any single non-path-separator character against a class of characters (see below) |
| `{alt1,...}` | matches a sequence of characters if one of the comma-separated alternatives matches |

Character classes support the following:

| Class | Meaning |
| --- | --- |
| `[abc]` | matches any single character within the set |
| `[a-z]` | matches any single character in the range |
| `[^class]` | matches any single character which does _not_ match the class |

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Resources caching

Proxy Configuration

---

# https://docs.phaser.io/phaser-editor/animations-editor/auto-build-animations

# Automatic creation of the animations

The most powerful feature of the Animations Editor is the automatic creation of the animations.

It is a process that allows us to create multiple animations by selecting all the frames required by all the animations.

This is how it works:

- Select a couple of frames in the Blocks view. If you select a texture map or spritesheet, all their frames will be considered too.

- The **Auto Build Animations** section in the Inspector view shows a list of animations that can be created. Press the **Build animations** button.

Alternatively, you can drag the frames and drop them into the editor.

- It shows a dialog asking for a prefix to be added to the generated animations. It is optional. This could be needed for disambiguation. For example, if the animations to be added has the names **run**, **walk**, **jump**, you can add a prefix like **player-** or **enemy-**, so the animations will have the names **player-run**, **player-walk**, **player-jump**.

- All the animations will be created with the same parameters ( **frameRate**, **repeat**, etc…) but you can change them in the Inspector view.

The process of grouping the frames by a common prefix is very simple. To get the prefix of a frame, it removes all the non-alpha characters at the end:

**Input**

`acorn-1` `acorn-2` `acorn-3` `ant-1` `ant-2` `ant-3` `ant-4` `ant-5` `ant-6`

**Output**

- `acorn` animation
- `acorn-1` frame
- `acorn-2` frame
- `acorn-3` frame
- `ant` animation
- `ant-2` frame
- `ant-3` frame
- `ant-4` frame
- `ant-5` frame
- `ant-6` frame

Some texture packing tools include the extension of the images in the name of the frames, for example, `ant-1.png`. It breaks the algorithm of extracting the prefix of a frame. For that reason, it first does the removal of all the image extensions of the frame names, if it is the case. Then `ant-1.png` is converted to `ant-1`, and the prefix will be `ant`.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Adding animations to the file

Editing the properties of the animations

---

# https://docs.phaser.io/phaser-editor/workbench/new-file-dialog

# New File dialog

The **New File dialog** shows the different types of files you can create. When you select a type of file, it launches a dedicated dialog to create the file. These specific file dialogs are contributed by the different plugins.

To open the New File dialog you can click on the **New File** button of the Main toolbar or press the `Ctrl+Alt+N` keys.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Projects

Uploading files

---

# https://docs.phaser.io/phaser-editor/scene-editor/working-with-spritesheets

# Working with sprite-sheets

There are multiple ways of packing "sprite images" into a single image. One of the most popular is the sprite-sheet.

In Phaser Editor you can define a sprite-sheet asset in the Asset Pack Editor:

Once you have defined the sprite-sheet asset, you can use it in the Scene Editor.

Like any other asset, the sprite-sheet is shown in the Blocks view, and like the atlas-based assets, you can expand a sprite-sheet block to get the frames and drop it into the scene:

Sprite-sheets are very common in retro-pixel art games. Most of these games use tile maps to create the levels or an important part of the levels. In Phaser Editor you can import a tile map into a scene, however, you may like to add a couple of elements on top of the tilemap and use regular sprite game objects.

There are sprite sheets where the position of the tiles is important, so splitting them as a list in the Blocks view makes it harder to read by the human eyes. In that case, you can get the frames from the Spritesheet Preview section of the Inspector view. This viewer shows the original sprite sheet image but allows picking a frame and dragging it onto the scene. It has a similar behavior to tile sets in map editors like Tiled:

The image may be large, but you can hold the `Alt` or `Option` key and drag the mouse to translate the image.

The Inspector view shows the Spritesheet Preview section when you select a sprite sheet asset in the Blocks view, but it also shows the viewer when you select an object in the scene with a sprite sheet texture.

The Spritesheet Preview viewer lacks some features like selecting multiple frames or zooming in/out. In the next releases, we will keep improving it and giving steps toward full support to tilemap creation.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Shader Effects

Working with parent objects

---

# https://docs.phaser.io/phaser-editor/workbench/color-themes

# Color themes

Phaser Editor supports a couple of light and dark color themes. You can select a color theme by pressing the `Ctrl+2` keys or selecting the **Select Color Theme** option in the Main menu.

The color themes are contributed by plugins. We should write how to create your custom theme in a future Plugin Developer Guide.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Uploading files

Command palette

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/editable-tilemap-object

# Editable Tilemap

In Phaser Editor we have two types of tilemaps, those that you can create in Tiled and import them into the scene editor, and those that you can create directly in the editor.

Tiled is a map editor that has been around for years and has incorporated all kinds of tools that make level creation easier for you. It is still one of the best options you have access to. However, a map editor built into Phaser Editor brings significant advantages when it comes to integrating the tilemap with other objects in the scene. In this section we will discuss how to create a tilemap using the tools in the scene editor.

## Creating an editable tilemap

To create an editable tilemap, drag the **Editable Tilemap** block from the Blocks view and drop it into the scene:

The editor immediately displays a dialog for setting the basic parameters of the tilemap, such as the number of columns and rows, and the size of the tiles:

The new tilemap object appears in the **Tile Map** category of the Outline view. You can change the name of the object in the **Variable** section of the Inspector view:

A tilemap is primarily made up of tilesets and tilemap layers. A tileset is an image that contains the tiles you will use to build the map. A tilemap layer is the game object where the tiles are drawn.

### Creating a tileset

The **Tilemap** section of the Inspector shows the tilesets and layers of the map. First, we need to create a tileset. To do this, we press the add button found in the **TILE SETS** section: !Add tileset It opens a dialog with all the images and spritesheets defined in the asset packs of the projects. Pick the one for the tileset: !Select tileset image When you hit the **Select** button, it creates the new tileset for the map, with the same name of the asset. A tileset has multiple parameters. If you create it with a spritesheet asset as image, the tileset will copy many of the parameters of the spritesheet, like margin, spacing, tile width and tile height.

The new tileset is listed in the **TILE SETS** section:

You can click on the **Trash** icon to delete it or you can click on its name to change its properties:

In the tileset properties you can change its size and its image. Also, that section shows the **Edit Map** button which you can press to go

The new layer will automatically take a name.

To change the name and other properties, you can click on the layer name or select the layer in the scene.

(To

To delete a layer you follow the same procedure as any other game object, select it and press **Delete**.

## Drawing on a tilemap layer

To draw the cells of the tilemap, certain requirements must be met:

- Select an editable tilemap in the Outline view. This activates the "Edit tilemap" mode.
- Add at least one tileset and one tilemap layer.
- In the **Tilemap Palette** section of the Inspector view, select the tileset you want to draw with and the tilemap layer you want to draw on. Tiles are always drawn on a specific layer.

When you select the tilemap layer you want to draw, it is highlighted in the scene with an orange border and shows the grid on which you can paint the tiles.

The next step would be to select the tool you want to paint with, and the portion of the tileset you will use as a brush.

The next section explains in details how the tilemap tools works.

## Tilemap tools

At this point the tilemap editor provides some basic tools for painting on a tilemap layer. As explained in the previous section, to activate the "tilemap editor" mode you must select an editable tilemap, and select a tileset and a tilemap layer to paint on.

The tools are displayed in the toolbar, where you can select them. These are the tools available so far:

- **Stamp**: use the brush to stamp on the tilemap layer.
- **Bucket Fill**: use the brush to fill all empty cells or those with the same tile ID.
- **Rectangle Fill**: use the brush to fill a rectangular area.
- **Eraser**: to erase cells. It can use a bucket-fill like algorithm to delete the cells.
- **Rectangular Selection**: to select a region in the tilemap layer. It can be used to erase cells or create a brush with the selected cells.

### The brush

Many of the tools use a brush. Before we explain how each tool works, let's explain how you can select a brush.

A brush is a rectangular portion of the tileset. To select this portion, you must first select a tool that supports brushes, such as Stamp, Bucket fill, etc... Then, you must drag the mouse, starting from the top left corner of the brush to the bottom right corner. As you drag the mouse, you can see that the brush area is highlighted:

By the way, you can zoom in/out the tileset image with the mouse wheel, and pan the image by pressing the `Alt` key and dragging the mouse. Also, in the bottom of the image there are buttons to control the zoom.

### Stamp tool

The Stamp tool is the most basic one. With it you can stamp the brush on the tilemap layer. To draw, you select a brush, then go to the tilemap layer and press the left mouse button. You can click to stamp the brush at the mouse position, or you can drag the mouse with the left mouse button pressed to paint the entire stroke:

### Bucket Fill tool

With the bucket-fill tool you can fill the entire space where you click. The space to fill is determined by those tiles that have the same ID and are neighbors.

### Rectangular Fill tool

With the rectangular-fill tool you can fill a rectangular space in the tilemap layer. The fill covers the entire rectangular area you select and draws a brush pattern.

### Eraser tool

With this tool you can erase the cells of the tilemap layer. You do not need to select a brush. Just drag the mouse over the layer to delete all the cells where the cursor passes. You also have the option to hold the `Shift` key and click on a cell to delete all neighboring cells with the same tile ID, following the bucket-fill algorithm.

### Rectangular Selection tool

With the rectangular selection tool you can select an area on the map and do two things: delete it by pressing the `Delete` key, or create a brush with the selection. To create a brush with the selection you must follow these steps:

- Select an area on the map.
- Press `Ctrl+C` (or `Ctrl+X` if you also want to cut the area). Automatically the editor activates the **Stamp** tool and loads the selected tiles as a brush.
- Draw on the map as you do regularly with the **Stamp** tool.

## Code generation

The usual practice in Phaser is to load tilemaps from an external file, such as an asset. This is because maps are designed with third-party tools and also because it makes it easier to load maps on demand. However, with this tilemap editor that we have incorporated into Phaser Editor we do things a little differently. Instead of saving the map data in an external file, such as a JSON file, we embed this data directly into the scene code. This may seem counterproductive to the developer who is used to the previous methods, however, it was the simplest option we found to release the first version of the tilemap editor. Including the tilemap data in the code (a long array of integers), also does not go against the philosophy of the editor, since no matter how large a scene of any type is, all objects are created through the code generated by the scene compiler. However, for future versions of the editor we may provide the option to generate the tilemap data in a separate file.

So when you create an editable tilemap, the compiler generates the code that loads a JSON object, in the format Tiled, into the loader cache. In this way, the tilemap instance is created using the usual Phaser API.

The code would look like this. First, the tilemap data is saved in the cache, following the `Tiled` format.

```hljs js
Copy// levelMap
this.cache.tilemap.add("levelMap_5ca7319c-74c6-458a-8589-37cef0ce2ff4", {
format: 1,
data: {
width: 50,
height: 30,
orientation: "orthogonal",
tilewidth: 16,
tileheight: 16,
tilesets: [\
{\
columns: 20,\
margin: 0,\
spacing: 0,\
tilewidth: 16,\
tileheight: 16,\
tilecount: 240,\
firstgid: 1,\
image: "tileset",\
name: "tileset",\
imagewidth: 320,\
imageheight: 192,\
},\
],
layers: [\
{\
type: "tilelayer",\
name: "mainLayer",\
width: 50,\
height: 15,\
opacity: 1,\
data: [0, 0, , 109, 109, 109, 109, ..., 109, 109, 109, 109],\
},\
],
},
});

Then the tilemap is created using the key of the data in the cache:

```hljs js
Copyconst levelMap = this.add.tilemap("levelMap_5ca7319c-74c6-458a-8589-37cef0ce2ff4");

The tilesets are also created in the usual way. The `addTilesetImage()` method takes the name of the tileset as an argument:

```hljs js
CopyevelMap.addTilesetImage("tileset");

And finally, in the order they appear in the scene, the layers are created with the `createLayer()` method. This method receives as arguments the name of the layer, the tilesets used, and the position of the layer:

```hljs js
Copy// mainLayer
const mainLayer = levelMap.createLayer("mainLayer", ["tileset"], 0, 0);

Both the tilemap instance and the instances of the tilemap layers can be assigned to variables with different scopes, just as you can do with any other object in the scene.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

TilemapLayer

Editable Tilemap Layer

---

# https://docs.phaser.io/phaser-editor/scene-editor/box2d-physics

# Box2D Physics

Box2D has been one of the most popular physics engines in the gaming industry. Recently, Phaser has added support for this library. The Phaser team did a direct translation of Box2D's C code into JavaScript, and just added a few utilities to integrate it with Phaser API.

Take a look at the Phaser Box2D implementation page

In addition to the Box2D library, the team is working on tools for Phaser Editor that allow you to create and configure Box2D physics objects visually. It's a work in progress, but you can start creating your physics scenes now.

We highly recommend you to read the official Box2D documentation to understand the concepts and the API. The Phaser Box2D API is very similar to the original Box2D API, so you can use the official documentation to learn how to use it.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Arcade physics collider

Preparing a scene for Box2D physics

---

# https://docs.phaser.io/phaser-editor/scene-editor/script-node

# Script Nodes

A ScriptNode is a new type of object. It isn’t a display object, else a logical object you can use with different purposes, especially, for expressing simple and complex behaviors.

Until now, user components were the only way you had to add extra functionality to a game object. The ScriptNode is a more powerful and general tool, that you can use with the same purpose.

Basically, a ScriptNode is a logical object you can add to an scene, a game object, or another ScriptNode. But what is even more exciting, is that you can make reusable and extensible script nodes in the same way you make reusable and extensible game objects: using prefabs.

This means, you can make a prefab of a ScriptNode, add custom properties, create variants of the prefab, create nested prefabs, and append script nodes to prefab instances.

This allows expressing complex behaviors combining logical building blocks (ScriptNode prefabs) in a hierarchical structure.

This concept of script nodes is inspired by the visual programming languages and concepts like the behavior tree. However, we don’t pretend to create a complete, full-featured, visual language. Our advice is using the script nodes for making the blocks of repeated behaviors in your game. You can use it for dealing with the UI interface, menu screens, intro screens. You can use it in your gameplay, but not by combining a lot of general-purpose blocks, else by combining blocks you did specifically for your gameplay.

An argument about the advantage of using a visual scripting language is that creators with no traditional programming experience can make a game. But our concept with the script nodes, is that you, the JavaScript advanced programmer, can implement the script nodes “framework” for your game, and deliver it to the game level designer for connecting the scripts with the game objects and scenes.

Script nodes are optional for your game. If you are those who prefer to code everything, you don't need script nodes at all. However, we find there are many cases where using script nodes could be a time saver. Think on behaviors like:

- When click this button, start X scene.
- When the scene start, fade-in this object.
- When the scene start, play this sound.

You can create those behaviors by using script nodes and user components, and connect them with the game objects and scenes by only using visual tools. You can create the **OnClick** and **OnSceneStart** script nodes, that are event-like nodes. And create the **FadeIn**, **PlaySound**, **StartScene** script nodes, that are action-like nodes. Then, you can connect them in the scene editor, and you have a complete behavior without writing a single line of code.

## Tutorials

So far we don't have many educational materials regarding script nodes, however, Scott Westover has done a brilliant job in one of his videos where he explains in detail how you can create your own script nodes:

Phaser Editor v4 Script Nodes Crash Course - Modular Game Development

![Scott video in youtube](https://www.youtube.com/watch?v=MI80DpDbwYg)

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Using a prefab as a black box

Script Nodes vs User Components

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects

# Game Object types

The Scene Editor is in active development and only supports a very basic set of game object types. Eventually, we should add more types and more properties.

However, the way the prefabs work allows to use a Prefab as a black box. This black box can be added to the scene, but you can provide a custom implementation. This technique is covered in the section Using a prefab as a black box. In addition, you can add new game objects via plugins.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Inspector view

Game Object common object properties

---

# https://docs.phaser.io/phaser-editor/animations-editor/new-file-wizard

# Create a new Animations file

To create an Animations file, open the New File dialog and select the **Animations File** option:

It opens the **New Animations File** dialog and asks for the name of the file and the location:

The file is created and opened in the Animations Editor.

In the majority of the cases, you want to add the animations file to an Asset Pack file. To do this, select the file in the Files view and the Inspector view will show you the option to add the animations to an Asset Pack file:

Also, you can load the animations file using the Animations Loader:

```hljs javascript
Copythis.load.animation("playerAnimations", "assets/animations.json");

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Introduction

Adding animations to the file

---

# https://docs.phaser.io/phaser-editor/workbench/layouts

# Window Layout

You can change the layout of the views and editors in the window.

In the main menu expand the **Layout** sub-menu and select one option:

The **Default Layout** shows all views. Each view in its folder:

The **Large Scene Layout** re-arrange the views and folds the Files view with the Outline view, giving all the vertical space to the editor area:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Main menu

Playing the project

---

# https://docs.phaser.io/phaser-editor/animations-editor/adding-deleting-frames

# Adding and deleting frames

The quickest way to create the animations is using the provided automatic process. However, you may want to change the frames of the animations, delete them, or add them.

To delete a couple of frames, select them in the Outline view and execute the **Delete** command (press the `Del` key or select **Delete** in the context menu).

To add frames, select an animation and choose to insert them at the start or the end:

It opens a dialog with all the images-related assets (frames, texture maps, sprite-sheets). You can select the frames to add:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Editing the properties of the animations

Compiling animation key constants

---

# https://docs.phaser.io/phaser-editor/workbench/upload-dialog

# Uploading files

To upload files or folders to your project you only need to drag the files from the Operating System Explorer (like Windows Explorer or Finder) and drop them into the app. You can drop the files on any part of the app. It then opens a dialog to select the destination folder in the project:

After selecting the destination folder, the files are uploaded to the project. The next time, the dialog will open in the last selected folder.

In addition to dropping the files on any part of the app, you can select a folder in the Files view and drop the files in the Inspector view. This section also shows a **Browser Files** button to open the Operating System file chooser dialog:

Also, you can select a folder in the Files view, right-click, and select the **Add Files** option. It opens the Operating System file chooser dialog:

When the files are uploaded to the project, they are selected in the Files view and the Inspector view shows the **Asset Pack Entry** section. The **Asset Pack Entry** section allows you to add new files to an Asset Pack file, which makes it ready for using the assets in the Scene Editor.

In Phaser Editor, you must declare the assets in an Asset Pack manifest so the engine can load them. The Asset Pack manifest is a JSON file that contains the list of assets. Learn more about the Asset Pack manifest and about how you can import the files.

The **Asset Pack Entry** section shows different buttons to import files with different possible types. In the next screenshot, it shows the options to import a texture atlas:

As soon as the files are imported into the Asset Pack, the Inspector view will show a Preview of the assets so you can add them to the Scene Editor:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

New File dialog

Color themes

---

# https://docs.phaser.io/phaser-editor/scene-editor/add-object

# Adding an object to the scene

There are multiple ways to create new objects in the scene. Dropping an asset or built-in type from the Blocks view. Or pasting an object (including those from other scenes).

Also, following a set of rules, the editor determines (or create) the parent for the new object.

## Blocks view integration

When the Scene Editor is active, the Blocks view shows the “blocks” you can get and drop into the scene, to create new objects. These are the blocks:

- Built-in types. Phaser types and other Phaser Editor related types.
- Assets defined in the Asset Pack file, like images, spritesheet frames, animations, spine animations, etc...
- The prefabs you created.

The first items shown in the Blocks view are the primitive object types supported by the Scene Editor. You can drag on type on drop it into the scene to create an instance of the type, with the default values.

In case of images, sprites or tile-sprites, the new instance does not contain a texture. If you want to set a texture to the object, you can select one in the Texture section.

However, if you drop an image or texture frame into the scene, the editor creates a new Image object and sets the dropped texture as the object’s texture.

Maybe, instead of an Image, you need to create a TileSprite with the same texture, in that case, you can just convert it to a TileSprite.

If you drop a **BitmapFont**, the editor creates a Bitmap Text.

If you drop a Prefab, the editor creates an instance of it.

The context menu shows different options for grouping the assets: by type, by Asset Pack file, and by file location:

Also, the Blocks view’s tab, shows “tab sections” which you can select for filtering the content:

Notice that there are three options:

**Built-in**: only the built-in types are shown in the view.

**Prefabs**: only the prefab files are shown.

**Assets**: only the assets defined in Asset Pack files are shown.

## Add built-in object from context menu

The Scene Editor’s context menu shows different options for creating a new built-in object.

The **Add Object** sub-menu shows all categories of the built-in object types:

Also, the **Add…** ( `A`) option opens a dialog with all the built-in types. That’s great for quickly adding a new object:

## Automatic parenting of new objects

When a new object is created (by dropping a block, or by pasting the object) a set of rules are evaluated to determine the parent of the new object:

- If there is an object selected in the scene:
- If it is a container, then the new object will be added to it.
- Else, if it has a parent container, then the new object will be added to the parent.
- If the scene is a prefab scene:
- If the scene is empty, the new object is added to the scene.
- If the root object is a container, then the new object will be added to it.
- Else, a new container is created and the old root object and the newly added object will be added to the new container. So the scene will have a new root object: the automatically created container.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Create a new Scene file

Inspector view

---

# https://docs.phaser.io/phaser-editor/scene-editor/create-new-scene-file

# Create a new Scene file

These are the steps to create a new scene file:

1. Open the New File dialog.
2. Select the **Scene File** option. This opens the **New Scene File** dialog.
3. In the new dialog, select the location of the new file.
4. Write the name of the scene file. The `.scene` extension is added automatically, if not set.
5. Press the **Create** button. The file will be created and opened in the Scene Editor.

## Settings

When a new scene is created, it will use the default settings. However, if there are other scene files, some general settings will be taken from the latest modified scene. This allows to keep the same general settings for all the scenes of your project. In the future, we should implement a better way to set general project settings.

These are the settings that are copied when creating a new scene file:

- **borderX**
- **borderY**
- **borderWidth**
- **borderHeight**
- **compilerOutputLanguage**
- **compilerInsertSpaces**
- **compilerTabSize**

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Introduction

Adding an object to the scene

---

# https://docs.phaser.io/phaser-editor/misc/content-viewers

# Content viewers

Viewers are elements to show structured data. In the major of the cases, these elements have a text and an icon. The icon could be a regular icon or a thumbnail image, an in-line preview of the element. It is the case of image files, scene files, asset pack elements like atlases, and sprite-sheets.

All viewers share a common set of features:

- You can zoom in/out the images. Press the `Ctrl` key and roll the mouse wheel.
- The viewer can have a tree layout or a grid layout. In the case of the grid layout, if you zoom out enough, it will switch to the tree layout.
- You can filter the content of the viewer, displaying only the items with a label that matches the text in the search box. If you clean the search box, all items are shown.
- Both, the grid and tree layout, allow collapsing/expanding the items. With the `Space` key you collapse/expand the selected item. With the `C` key you can collapse all the items.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Local preferences

Updating the editor

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/particle-emitter-object

# ParticleEmitter

The ParticleEmitter game object is an amazing and large feature of Phaser.

It allows you to create animations of particles, from fluids to explosions.

Phaser Editor supports adding particle emitters to the scene, tweaking their properties, and previewing them. Since it uses the same Phaser API, the animations you get in the scene editor are the same as you get in your game.

## Create a Particle Emitter game object

You can create a Particle Emitter object by dropping a Particle Emitter built-in type from the Blocks view. It is the same workflow as the other game objects:

Right away after dropping the Particle Emitter block, it opens a dialog to select the frames of the emitter. You can select an image texture or multiple frames from a texture atlas:

After pressing **Select**, the Particle Emitter is created in the scene:

The next step is changing any of the properties of the editor. You can change them in the **Inspector** view. For the sake of this example, we will change the **Speed** property, to the value of 200:

### Play and Refresh the scene

After changing the speed, you can see the changes in the scene editor. But you have to move a bit the scene. By default, the Scene Editor does not run the update loop of the game, so you get a static picture of the emitter. To move it and see the particle animation, you can press the **Play** button in the in-scene toolbar at the bottom of the scene. Next to the **Play** button, you can see the **Refresh** button. You can use it to rebuild the scene and see the emitters from its fresh state. There are behaviors you can set to an emitter, like a **duration**, that you only can repeat by refreshing/re-creating the scene:

### Code generation

When you add a particle emitter to the scene, the scene compiler generates a code like this:

```hljs javascript
Copythis.add.particles(305, 343, "flares", {frame: ["red", "white"], speed: 200});

All properties you set to the emitter are passed as part of the configuration argument of the `particles` method.
As with any other game object, you can create a prefab of a particle emitter.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Polygon

Particle Emitter properties

---

# https://docs.phaser.io/phaser-editor/scene-editor/user-components

# User Components

A Component is a design pattern that you can use to create reusable code and extend the behavior and data of a game object, using composition over inheritance.

For example, an **HorizontalMove** component can be added to any kind of enemy object that moves horizontally from one position to another. This component class can be written more or less like this (see the User Components compiler section for a real example):

```hljs javascript
Copyclass HorizontalMove {

constructor(gameObject) {

// in the component, keep a reference to the entity
this.gameObject = gameObject;
// in the entity, keep a reference ('horizontalMove') to the component
this.gameObject.horizontalMove = this;
// init properties with default values
this.minX = 0;
this.maxX = 800;
this.horizVelocity = 10;
}

start() {
this.gameObject.body.velocity.x = this.horizVelocity;
}

update() {

// the behavior of the component

const velocity = this.gameObject.body.velocity;

if (this.gameObject.x < this.minX) {
velocity.x = Math.abs(this.horizVelocity);
}

velocity.x = -Math.abs(this.horizVelocity);
}
}
}

In the scene, you can create objects and add the **HorizontalMove** component to them. Then, update the components at every game loop step:

```hljs javascript
Copyclass Level extends Phaser.Scene {

create() {

// create two objects, alien and spider, and add the HorizontalMove
// component to both, but with different property values.

this.alien = this.add.sprite(10, 10, "enemies", "alien");
const alienMove = new HorizontalMove(this.alien);
alienMove.minX = 10;
alienMove.maxX = 100;
alienMove.horizVelocity = 40;
alienMove.start();

this.spider = this.add.sprite(80, 100, "enemies", "spider");
const spiderMove = new HorizontalMove(this.spider);
spiderMove.minX = 50;
spiderMove.maxX = 200;
spiderMove.horizVelocity = -20;
spiderMove.start();
}

// update the HorizontalMove component of each object

this.alien.horizontalMove.update();
this.spider.horizontalMove.update();

// in a real case, the component can register
// a listener to the UPDATE event of the scene.
}
}

In Phaser Editor, we provide a way to create game object components (we name it **User Components**, to make a difference with the built-in Phaser components) and use them in the Scene Editor. The prefabs system is another way to create reusable behaviors and data but has the limitation that it uses inheritance.

Like the Scene Editor, we provide a User Components Editor.

The User Components Editor allows you to create User Components configuration files. A User Components configuration file ( `*.components`) contains a list of component configurations that are compiled into JavaScript (or TypeScript) code. It is pretty similar to the scene compiler.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

ScriptNode's properties

Create a new User Components file

---

# https://docs.phaser.io/phaser-editor/scene-editor/scene-properties

# Scene properties

The scene has different properties that are not part of the editor or the compiler.

The properties are shown in the Inspector view when no object is selected. It means, if you click on a blank space of the scene or press the `ESC` key, the scene properties will be shown.

The compiler settings are covered in the Scene Compiler chapter.

## Snapping properties

The snapping properties allow you to divide the scene into a grid and place the objects in the cells of the grid. This is a very useful technique to keep the objects properly aligned.

- **Enabled property**: activates the snapping. You can change the value in the Inspector view with the `E` key.
- **Snapping Width and Height**: is the size of the grid to snap the objects. You can change it in the Inspector view. Also, you can select an object and execute the **Snap To Object Size** command.

### Context menu

The context menu of the scene shows the **Snapping** sub-menu with the snapping commands:

- Toggle Snapping ( `E`).
- Snap To Object Size ( `W`). This command takes the size of the selected object and sets it as the snapping size values of the scene.
- Move Object Position commands. These translate the selected object in any direction by the snapping size ( `Arrow keys`) or 10x the snapping size ( `Shift+Arrow keys`). If snapping is disabled, these commands translate the selected object by 1 or 10 pixels.

## Border properties

The Scene Editor shows a frame, or border, that you can use as reference of the game size, a Prefab size, or whatever you need to frame.

It is not part of the Phaser API, it is just an editor resource and does not affect the game in any way.

You can change the border values in the Inspector view. It has a position and a size.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Replacing the type of an object

Arcade Physics

---

# https://docs.phaser.io/phaser-editor/asset-pack-editor/add-file

# Importing files

Before you can use a file in your game, you must create a configuration entry for it in an Asset Pack file. This is called **importing** the file.

You can import a file using the Asset Pack Editor’s Main toolbar or Blocks view,
or using the Files view. We’ll discuss each of these in the following sections.

You can un-import a file, removing its Asset Pack file entry, by pressing the `Delete` key in the Asset Pack Editor or the Outline view, or from their context menus.

## Importing using the Main toolbar

These are the steps:

1. With the Asset Pack Editor active, press the **Import File** button in the Main toolbar (also available in the context menu or by pressing the `A` key.)

2. It opens a dialog with all the file types. Select the type of file you want to add.

3. When you select a file type, it opens a dialog with a list of candidate files to be added. The candidate files are selected following these rules:

- The files belong to the folder, or sub-folder, of the editor input file. It is not a restriction of the Asset Pack file, but we use it to simplify the process of importing the files.
- The content type or extension of the file names are compatible with the type selected. For example, if you select to add an Image, then only image files are shown.
- The files are not included in any other Asset Pack file in the project.

However, you always have the option of select any file by pressing the **Show All Files** button of the dialog.

4. Change the properties of the file configuration in the Inspector view. Many of the values of the fields are set automatically. The file URL is computed using its relative path in the project. Read Setting the root folder for the asset files to learn more about the asset file URLs.

## Importing from the Blocks view

The Blocks view is a general-purpose view that connects with the active editor and provides the “blocks” needed to build the objects of the editor.

When the Asset Pack Editor is active, the Blocks view shows the files that are candidates to be imported. A file is a candidate to be imported if:

- The file belongs to the folder, or sub-folder, of the Asset Pack file that is the input of the editor (unless you disable this restriction, as discussed at the end of this section).

- The file is not present in any other Asset Pack file in the project.

- If the file has a content type or file name extension that we know is never loaded in games:
- TypeScript files ( `.ts`).
- Scene Editor files ( `.scene`).
- Another Asset Pack file.

1. Select the files to be imported in the Blocks view.

2. Select one of the importing options listed in the **Asset Pack Entry** section of the Inspector view.

3. When the files are imported, edit the new configurations in the Inspector view.

This is simpler than using the Main toolbar button: once you select the files the editor shows only the relevant importing options, based on their content type and name.

## Showing all files in the Blocks view

As we mentioned before, the Blocks view only shows the files in the same folder (or sub-folder) as the Asset Pack file. You can disable this restriction by checking the **Show All Files in Project** settings in the Inspector view:

## Importing from the Files view

Importing from the Files view is very similar to importing from the Blocks view, but you don’t need to open the Asset Pack Editor.

Whether or not the Asset Pack Editor is active, you can select a one or more file in the Files view and, in the **Asset Pack Entry** section of the Inspector view, select the option to import the file into an existent Asset Pack file or a new one.

If any file you selected in the Files view already has a configuration entry in an Asset Pack file, then the Inspector view shows a button to open that Asset Pack file in the Asset Pack Editor.

## Setting the root folder for the asset files

That’s fine for a lot of cases. However, if you use web bundlers, like WebpackJS or Parcel, it could be different. Maybe the relative path of the assets is not the same in the project and the website.

Let’s see an example. The WebpackJS project template of Phaser Editor has this layout:

Notice that if you add the `FufuSuperDino.png` file to an asset pack, it sets the URL of the image to `static/assets/FufuSuperDino.png`. However, the `static` folder is not present in the distribution build (in the website). It only copies its content to the distribution build folder. So, when you open the game in the browser, the path of the image file is `assets/FufuSuperDino.png` (without the `static` element).

The rule is simple. When you add an entry to an Asset Pack for a new file, it builds the file’s URL using the relative path to a root folder. To find the root folder, it checks each parent folder of the Asset Pack file until it finds one containing a `publicroot` file. That folder is then taken as the root folder to build the URL. If no `publicroot` file is found, it defaults to the root folder for the project.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Editor content layout

Organizing the Asset Pack files

---

# https://docs.phaser.io/phaser-editor/misc/plugins

# Plugins

The Phaser Editor Workbench and Phaser development tools are based on plugins.

There are two groups of plugins, built-in and user plugins. The built-in plugins are provided by the editor’s installation. You can install user plugins in your game project or globally.

## Built-in plugins

The editor’s built-in plugins are included in the installation of the editor. These plugins contain the whole workbench and Phaser development tools. You never need to “touch” these plugins, unless you want to run a different version of the editor. For example, if you want to try an in-development version of the editor, you can use the `-editor` flag for setting the path to another implementation of the editor, including the new plugins.

```hljs bash
Copy$ PhaserEditor -project "/path/to/project" -editor "path/to/another/editor"

## Global plugins

## Project’s plugins

You can provision plugins only for your project. The way is to specify the plugins folders in the project configuration file `phasereditor2d.config.json`:

```hljs bash
Copy{
"plugins": ["./my-fonts-plugins", "./my-gameobjects-plugins"]
}

All paths are relative to the project’s location.

## Project’s NPM packages

You can install plugins via NPM packages.

When you start Phaser Editor Core in a project, it looks for all node modules installed in the `devDependencies` section of the `package.json` file and loads the plugins wrapped by the packages.

For example, you can install the phasereditor2d-ninepatch-plugin this way:

```hljs bash
Copy$ npm install phasereditor2d-ninepatch-plugin --save-dev

We recommend installing third-party plugins this way.

## Extra plugins

You can use the `-plugins` flag of Phaser Editor Core for loading extra plugins:

```hljs bash
Copy$ PhaserEditor -plugins "/demo/plugins;/some/extra/plugins" -project .

The argument of the `-plugins` flag is a string with the absolute paths of the extra plugins, separated by a semicolon `;`.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Updating the editor

Troubleshooting

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs

# Prefabs

A Prefab is a key concept in the Scene Editor. It allows for creating reusable, customized objects. It borrows some concepts from the Unity Engine prefabs.

In a game level, there are many objects with a common behavior and appearance. For example, several enemies look the same and act the same. Or there are the “coins” that have the same animation and play the same sound when are taken. Or the player object is the same in all the levels. All these objects are perfect candidates to be created as prefab instance.

You can see a Prefab as the template of multiple objects. Or you can see a Prefab as a class, so you can create multiple instances of that class and place them in a scene.

In the end, a Prefab is just a class. If you look into the code generated by the scene compiler, a Prefab scene is compiled into a class that extends a Phaser built-in type, a ScriptNode, or another Prefab class. And the prefab instance are just instances of the generated class.

At the same time, you can customize prefab instance by changing the value of its properties. If a property of the Prefab (the class) is modified, this modification is applied to all the prefab instance, if it is not overriding in the prefab instance.

A very precise way to know how prefabs work, is to look into the code generated by the scene compiler. You will realize that it is just about Object Oriented Programming concepts like class, inheritance, properties, composition, and instances.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Input

Creating a prefab file

---

# https://docs.phaser.io/phaser-editor/scene-editor/layout-tools

# Layout tools

Laying out the objects in a scene is one of the most attractive features the Scene Editor provides. The Layout tools are shortcuts for aligning and distributing the objects of a scene. You can find the tools in the Layout context menu or the Layout toolbar.

It works this way:

- Select the objects you want to layout:

- Execute a layout operation, selecting a layout tool in the Layout context menu or the Layout toolbar. You can undo or redo this operation:

- If the tool requires parameters, set them in the parameters pane of the Layout toolbar:

You can show/hide the Layout toolbar by checking the **Show Layout Bar** option in the Layout menu:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Manipulation tools

Align layout tools

---

# https://docs.phaser.io/phaser-editor/scene-editor/intro

# Introduction

The Scene Editor is the most important editor of the IDE: it provides the visual tools to create scenes (levels) and reusable game objects (prefabs).

The Scene Editor is similar to other scene maker tools. The most peculiar characteristic is that this editor compiles the scene into readable Phaser code.

Phaser provides support for certain file formats like the Asset Pack file (edited by the Asset Pack Editor), but it lacks a full-feature Scene file format suitable for level editors. Maybe it should be that way because Phaser is a framework and you may use it in very different ways and very different contexts.

How can we develop a scene editor? We know we need to save the scene in a custom format. We have two main options:

1. We can create a custom runtime, or plugin, to load the scene files in the game and create the objects in the fly.
2. We can create a scene compiler, that translates the scene data file into Phaser code.

The second option plays much better with the Phaser Editor philosophy of being fully compatible with a vanilla Phaser runtime. So this compiler gets a scene data file ( `.scene`) and generates a clean, readable, hand-writing-like Phaser code. Even this option has other advantages: it is very easy to debug the scene and knowing exactly how the objects are created and modified.

In previous desktop-based versions of Phaser Editor, the Scene Editor used a custom renderer to build the scene. This render was based on desktop UI toolkits. In this version, we use Phaser and the browser to render the scene in the editor. It is a huge advantage, now what you see in the Scene Editor is what you get in the game.

This chapter covers in-depth the Scene Editor tools and concepts, if you want a quick tutorial to create a scene, read the First steps chapter.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Inspector view integration

Create a new Scene file

---

# https://docs.phaser.io/phaser-editor/animations-editor/compiler

# Compiling animation key constants

You can enable compiling a code file with constant definitions for the animation keys.

For each animation, the compiler will generate a constant declaration. Like this:

If you have a lot of animations in your game, we recommend using this feature. You can reference animations using constants (and auto-completion) instead of writing the key names “by hand”.

By default, the compiler is disabled. You can enable it in the **Compiler Settings** section. This section shows when no animation is selected:

This a table with the parameters:

- **Generate Code**: Enable the code generation.
- **Output Language**: Choose between JavaScript and TypeScript.
- **ES Module**: If selected, it generates an ES module file.
- **Output Folder**: Choose the parent folder for the output file. If you are using a WebPack or similar bundler, you may want to generate the code in a sub-directory of the src folder.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Adding and deleting frames

Coding in Phaser Editor

---

# https://docs.phaser.io/phaser-editor/scene-editor/troubleshooting

# Troubleshooting

This is a chapter dedicated to common mistakes or issues you can find using the Scene Editor.

## Scene dependencies model

The Scene Editor is a complex tool. It depends on the state of the whole project. A change in an asset file, a Asset Pack file or a Prefab file, can affect to the Scene Editor content. For that reason, you may find a glitch or something weird in the editor, like an object without an image or an object with an out-dated image. In this case, you can do any other following steps:

- Execute the **Refresh Scene** command: press `Ctrl+Alt+U` or find it in the context menu.
- Reload the project assets: press `Ctrl+Alt+R` or click on the **Reload Project** option in the Main menu.

## Outdated generated code

It is possible that when you execute the game, the scene you see is different. A possible cause could be that the scene was not re-compiled after a Prefab file change.

If you change a Prefab file, for example, you change the type of the prefab object, then you should re-compile all the scenes referencing that Prefab file. The quick solution is to re-compile the whole project: press `Ctrl+Alt+B` or select the **Compile Project** option in the Main menu.

## Duplicated scene identifier

Each scene file has an identifier that should be unique in the project. When you create a new scene file, a new identifier is generated for it. However, if you copy the content of a scene file and create a new file with it, then you will get different files with the same identifier.

If it is the case, the editor will show an error message with the files with the same identifier:

You must fix that error because it could create unexpected behaviors.

To fix it, open the Command Palette ( `Ctrl+K`) and run the **Fix Duplicated Scenes ID** command.

This command will generate a new identifier for all the scene files that share the same identifier. Only the original file is not modified, in this case, the file with the older modification time.

We recommend to use the **Fix Duplicated Scenes ID** command, but you can modify the scene identifier manually. Just open the file in a text editor and change the `id` field.

```hljs javascript
Copy{
id: "write-here-a-unique-identifier",
// ...
}

The Scene Editor uses the `Phaser.Utils.String.UUID()` function to generate a new identifier. You can do the same.

## Disable Pixel Art rendering

By default, the Scene Editor creates a game with the pixelArt rendering flag enabled. You can change this configuration by executing the **Scene Editor: Disable Pixel Art Rendering** command and refreshing the page.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Miscellaneous

Introduction

---

# https://docs.phaser.io/phaser-editor/scene-editor/working-with-parent-objects

# Working with parent objects

In Phaser, only two type of scene objects can be used as a “container” or a “parent” of other objects: the Container, and the Layer objects.

In the next section you can learn about operations common to both type of objects.

## Parent context menu

The **Parent** sub-menu of the scene context menu shows the commands you can apply to containers and layers. Many of those commands are compatible with both types:

## Moving an object to a parent

You can move an object to a new parent. The command **Move To Parent** opens the **Parent** dialog. This dialog shows all the available parents for the object (including the scene) and you can select the new parent.

The command can be executed by pressing the `Shift+P` keys or selecting the **Move To Parent** option in the context menu.

## Breaking a parent

The **Break Parent** command removes a Container or Layer, but keeps its children. The children are added to the parent of the parent, and their preserve the same absolute position.

You can execute the command by pressing the `Shift+B` keys or selecting the **Break Parent** option of the Parent context menu.

## Selecting the parent of an object

The **Select Parent** command selects the parent of an object. To execute the command press the `P` key or click on the **Select Parent** option of the Parent context menu.

## Selecting the children of an object

The **Select Children** command selects the children of a container or a layer. To execute this command, press the `N` key or click on the **Select Children** option in the Parent context menu.

## Changing the rendering order of children

You can change the rendering order of an object. The context menu shows the **Edit** → **Move** commands, to move the objects in different depth directions:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Working with sprite-sheets

Object List

---

# https://docs.phaser.io/phaser-editor/scene-editor/object-list

# Object List

Often, you need to group objects with a common property or type, or with a common goal in the game. For example, you need to group the enemy objects, the pickable items, the platform objects, so you can test if the player collides with them.

For this purpose, the Scene Editor allows grouping the objects of the scene into a JavaScript array.

You can create an Object List by dropping a List built-in block on the scene:

Or you can create a new list when adding an object to the list:

To add an object to an Object List, select the object and look for the **Lists** section. Click on the drop-down of the **Lists** property, it shows the lists availables in the scene with the option of add the selected object to a list or remove it from a list:

The Outline view shows the Object Lists of your scene, in the **Lists** category. It also shows the objects of every list:

You can remove items from a list by selecting them in the outline and pressing the **Delete** command ( `Del`).

Also, you can sort the items in the list with the Move commands, just like you order the game objects in the scene:

You can locate the a list item in the scene. Select the list item, and in the **List Item** section of the Inspector view, click on the **Select Game Object** button:

## Object List properties

The Object List type is not part of the Phaser API, it is something introduced by the Scene Editor. In the **Variable** section of the Inspector view, it shows the Variable properties:

In this section you can modify the name of the list, see the inferred type of the list items, and change the scope ( `CLASS` by default) of the object list variable.

## Object List code generation

The code generated by the scene compiler, to create a list, is like this:

```hljs javascript
Copythis.pickableItems = [melon, melon_1, melon_2, bomb, bomb_1, bomb_2];

If the output language is TypeScript, the scene compiler generates a field declaration for the list:

```hljs javascript

Note that the scene compiler infers the type of the array elements: a union of `Melon` and `Bomb`, that are prefabs. It also infers the type of the elements if are Phaser built-in types:

```hljs javascript
Copyprivate parallax: Phaser.GameObjects.Image[];

This detailed type declaration of the arrays allows that code editors like Visual Studio Code can provide a smarter coding experience.

## Object List vs Phaser Group

Traditionally, Phaser uses the Group game object to join objects around a common purpose. But grouping is not the only feature of a Group game object:

- It implements an object pool.
- Is a data structure with methods for sorting and iterate the items.
- Can be used as a proxy to modify the state of the items.
- To call a method of the items.
- To apply game-related global operations to the items.

So, why the Scene Editor is not using the Group game object?

1. Many of the features of a Group game object are especially helpful to implement the logic of the game, but what a level maker needs is just to organize the objects, we think.
2. The Group game object type is not parameterized. A code editor type-inference/auto-completion engine works much better with a simple JavaScript array. When you write `const enemies = [enemy1, enemy2, ...]`, a code editor like Visual Studio Code can infer the type of the array items.
3. Even for a human, a simple JavaScript array could be more comprehensible.
4. If you need a Group game object, you can create it with the array of objects generated by the Scene Editor:

```hljs javascript
Copyconst pickableItemsGroup = this.add.group(this.pickableItems);

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Working with parent objects

Input

---

# https://docs.phaser.io/phaser-editor/misc/resources-caching

# Resources caching

Many of the resources of the IDE and the projects are cached in the browser. If you experience a weird behavior with the IDE or the files, try cleaning the browser cache with the Developers Tools, and refresh the page.

Also, the IDE creates a memory cache of the files of the project. This means, you should keep in the project only the files related to the game, so you keep the memory free of extra, unneeded data.

The best way to clean the memory used by the IDE is by refreshing the browser page.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Server options

Resources filtering

---

# https://docs.phaser.io/phaser-editor/workbench/playing-project

# Playing the project

To run a game in Phaser Editor, just click the **Play** button at the top-left toolbar of the editor, or press `F12`:

This action opens the editor in a web browser and runs the game. However, there are some complexities that we need to address.

Games developed in Phaser are based on web technology. This means that the game needs two parts to run: a web server and a web browser. The web has a wide variety of development tools and technologies on both the server and client side. Your Phaser game, being web-based, can also make use of all those tools, such as popular front-end frameworks React, Angular, and many others.

However, Phaser Editor provides a web server that is sufficient to run the most basic of projects, those based on the **Basic JavaScript** template, or any other static content project.

If your project was created with any of the templates that use web bundlers, such as Webpack, Vite, ESBuild, etc... then the editor will detect that before running the game it must run a local web server provided by these third-party tools.

The usual thing is that these local servers are run through a command like `npm start` or `npm run dev`. For this, the editor opens a window and runs the command for you:

If If you want to run the web server manually from another application, such as VSCode or your system's terminal, then you can click the **Skip** button. If you want Phaser Editor to run the web server for you, then click the **Start Dev Server** button.

## Troubleshooting

As I explained, running the game can involve several steps, which the editor can do for you automatically, however, it is possible that they fail or you have overlooked them. For this reason, it is possible that sometimes the game will not run and the browser will show you a "Page not found" message. In that case you should check that the game's web server is running. Since there is such a variety of web technologies and Phaser project templates, we recommend that you read the `README.md` file that is present in the root of each project. In this document you will find the appropriate instructions for running the game's web server.

## Play the game in an internal window

By default, when you click the **Play** button, the editor opens the system browser and runs the game. You also have the option to run the game directly in the editor, in an internal window. To do this, you must click the **Quick Play Project** command or press `F10`:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Window Layout

Projects

---

# https://docs.phaser.io/phaser-editor/scene-editor/shader-effects

# Shader Effects

In version 3.60, Phaser introduced a couple of special effects. The effects are built-in, ready to use, and can be applied to any Game Object.

We encourage you to read the release notes and the Phaser documentation about it.

In Phaser Editor you can add effects to a Game Object, tweak the properties, and see the result in the Scene Editor.

Currently, we support two effects: the Glow and Shadow effects.

## Adding an effect to a game object

Every game object has an **FX Shaders** section in the Inspector view:

It contains the **Add** button that allows you to add a new effect to the game object. When you click the **Add** button, the **Shader Effects** dialog appears:

There you can select an FX, and then click the **Add** button to add it to the game object.

Another way to add an effect is to select a game object in the scene, open the context menu and populate the **FX** submenu. It shows the options to add a specific effect:

You can add multiple effects to a game object. They are listed in the Outline view just like any other scene object:

You can select an FX object and delete it, copy/paste it, change its rendering order, or tweak its properties.

The FX object is like any other scene object that you can assign to a variable, or a field, or set as a nested prefab.

## Game Object properties

You can add an FX object to any game object. The **FX Shaders** section in the Inspector view shows the properties of a game object that are related to the effects.

It contains the **Add** button, to add a new FX object.

And contains the **Padding** property, to set the padding to be used by the pre-FX pipeline.

Learn more about padding in the Phaser documentation.

## An effect as a scene object

An effect is a scene object that you can select in the Outline view:

You can select the FX object and delete it, copy/paste it, change its rendering order, or tweak its properties.

The Variable properties are also valid for the FX objects. You can assign the FX to a variable or a field, and use it for implementing custom actions.

Let’s say you want to tween the intensity of the shadow FX. You can assign the FX to a field by setting the variable scope to **CLASS**:

Then the scene compiler generates a variable and field for the FX object:

```hljs javascript
CopyeditorCreate() {
...
// shadowFx
const shadowFx = logo.preFX!.addShadow(0, 0, 0.1, 1, 0, 6, 1);
...
this.shadowFx = shadowFx;
}

private shadowFx!: Phaser.FX.Shadow;

Then, in the **create** method, you can tween the intensity of the shadow FX:

```hljs javascript
Copycreate() {
...
this.add.tween({
targets: this.shadowFx,
intensity: 1,
});
}

Not only you can assign an FX to a variable, but you can also make a nested prefab with it. This way, you can reuse the FX in different scenes.

## Effect properties

Every FX type shares a common set of properties. You can edit these properties in the **FX** section. For now, it only contains a button to change the FX to the `preFX` or the `postFX` pipeline:

## Glow FX

The Glow FX is a simple effect that adds a glow to the edges of the image. It is a post-processing effect that can be applied to any image.

Learn more about the Phaser.FX.Glow properties in the Phaser documentation

## Shadow FX

The Shadow FX is a simple and easy-to-use shadowing effect for your images. You can learn more about its properties in the Phaser.FX.Shadow Phaser documentation.

## Pixelate FX

The Pixelate effect is a visual technique that deliberately reduces the resolution or detail of an image, creating a blocky or mosaic appearance composed of large, visible pixels. This effect can be used for stylistic
purposes, as a homage to retro gaming, or as a means to obscure certain elements within the game, such as during a transition or to censor specific content.

Learn more about the Phaser.FX.Pixelate properties in the Phaser documentation

## Vignette FX

The vignette effect is a visual technique where the edges of the screen, or a Game Object, gradually darken or blur, creating a frame-like appearance. This effect is used to draw the player’s focus towards the central action or subject,
enhance immersion, and provide a cinematic or artistic quality to the game’s visuals.

Learn more about the Phaser.FX.Vignette properties in the Phaser documentation

## Shine FX

The shine effect is a visual technique that simulates the appearance of reflective or glossy surfaces by passing a light beam across a Game Object. This effect is used to enhance visual appeal, emphasize certain features, and create a sense of depth or material properties.

Learn more about the Phaser.FX.Shine properties in the Phaser documentation

## Blur FX

A Gaussian blur is the result of blurring an image by a Gaussian function. It is a widely used effect,
typically to reduce image noise and reduce detail. The visual effect of this blurring technique is a
smooth blur resembling that of viewing the image through a translucent screen, distinctly different
from the bokeh effect produced by an out-of-focus lens or the shadow of an object under usual illumination.

Learn more about the Phaser.FX.Blur properties in the Phaser documentation

## Gradient FX

The gradient overlay effect is a visual technique where a smooth color transition is applied over Game Objects, such as sprites or UI components. This effect is used to enhance visual appeal, emphasize depth, or create stylistic and atmospheric variations. It can also be utilized to convey information, such as representing progress or health status through color changes.

Learn more about the Phaser.FX.Gradient properties in the Phaser documentation

## Bloom FX

Bloom is an effect used to reproduce an imaging artifact of real-world cameras. The effect produces fringes of light extending from the borders of bright areas in an image, contributing to the illusion of an extremely bright light overwhelming the camera or eye capturing the scene.

Learn more about the Phaser.FX.Bloom properties in the Phaser documentation

## Circle FX

This effect will draw a circle around the texture of the Game Object, effectively masking off any area outside of the circle without the need for an actual mask. You can control the thickness of the circle, the color of the circle and the color of the background, should the texture be transparent. You can also control the feathering applied to the circle, allowing for a harsh or soft edge.

Please note that adding this effect to a Game Object will not change the input area or physics body of the Game Object, should it have one.

Learn more about the Phaser.FX.Circle properties in the Phaser documentation

## Barrel FX

A barrel effect allows you to apply either a ‘pinch’ or ‘expand’ distortion to
a Game Object. The amount of the effect can be modified in real-time.

Learn more about the Phaser.FX.Barrel properties in the Phaser documentation

## Displacement FX

This effect will draw a displacement around the texture of the Game Object, effectively masking off any area outside of the displacement without the need for an actual mask. You can control the thickness of the displacement, the color of the displacement and the color of the background, should the texture be transparent. You can also control the feathering applied to the displacement, allowing for a harsh or soft edge.

Learn more about the Phaser.FX.Displacement properties in the Phaser documentation

## Wipe FX

The wipe or reveal effect is a visual technique that gradually uncovers or conceals elements
in the game, such as images, text, or scene transitions. This effect is often used to create
a sense of progression, reveal hidden content, or provide a smooth and visually appealing transition
between game states.

It is up to you to set the progress value yourself, i.e. via a Tween, in order to transition the effect.

Learn more about the Phaser.FX.Wipe properties in the Phaser documentation

## Bokeh FX

Bokeh refers to a visual effect that mimics the photographic technique of creating a shallow depth of field. This effect is used to emphasize the game’s main subject or action, by blurring the background or foreground elements, resulting in a more immersive and visually appealing experience. It is achieved through rendering techniques that simulate the out-of-focus areas, giving a sense of depth and realism to the game’s graphics.

See also Tilt Shift.

Learn more about the Phaser.FX.Bokeh properties in the Phaser documentation

## ColorMatrix FX

ColorMatrix refers to a visual effect that mimics the photographic technique of creating a shallow depth of field. This effect is used to emphasize the game’s main subject or action, by blurring the background or foreground elements, resulting in a more immersive and visually appealing experience. It is achieved through rendering techniques that simulate the out-of-focus areas, giving a sense of depth and realism to the game’s graphics.

Learn more about the Phaser.FX.ColorMatrix properties in the Phaser documentation

The ColorMatrix FX has different presets that can be used to create different effects.

The presets are:

All presets have in common the following properties:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

SpineGameObject user properties

Working with sprite-sheets

---

# https://docs.phaser.io/phaser-editor/scene-editor/manipulation-tools

# Manipulation tools

The manipulator tools are in-scene tools that allow changing properties of the objects.

Each tool has a command to activate/deactivate it. You can execute the command using a key, the context menu, or the Main toolbar.

You can activate one tool or the time. Or deactivate the tool.

## Coordinates

Some tools can be used in a local or global coordinates. You can change the coords in the **Coords** menu of the context menu:

## Translate tool

This tool allows you to move the objects on the screen. It affects the **X** and **Y** properties.

You can activate it with the `T` key, or in the context menu or the Main toolbar.

Drag the red arrow to change the **X**, and the green arrow to change the **Y**.

## Scale tool

Activate this tool to change the scale of an object. You can activate it in the context menu, the Main toolbar, or with the `S` key. Keep pressing the `Shift` key if you want to scale proportionally.

## Rotate tool

This tool changes the angle of the object. You can activate it in the context menu, the Main toolbar, or with the `R` key.

## Origin tool

With this tool, you can edit the origin of an object. You can activate it in the context menu, the Main toolbar, or with the `O` key.

In Phaser v3, the rotation pivot of containers is fixed at `x=0, y=0`. You cannot change it. However, the origin tool simulates a change of the pivot by moving around the children of the container but keeping the same global position.

## Slice tool

This is a tool for changing the size of the slices of a NineSlice object. You can activate it in the context menu, with the **Tools → Slice Tool** option. Or you can activate it in the Nine Slice properties section, by clicking the **Edit Slices** button:

The tools shows four maniputaros for changing the size of the slices:

If you want to change the width of the **left** and **rigth** slices at the same time and with the same value, you can press and hold the `Shift` key. It also applies to the height of the **top** and **bottom** slices.

If the object is in a 3 slices mode, it only shows the manipulators for the width slices:

## Resize tool

This tool allows for changing the size of some objects like TileSprite, Rectangle, and Ellipse. You can activate it in the context menu or with the `Z` key. Resize the object is not the same of scaling it.

## Polygon tool

The Polygon tool (that you can activate with the `Y` key) shows the polygon’s points in the scene. It allows you:

- Change the position of a point: drag the point with the mouse cursor.
- Delete a point: move the mouse cursor over the point and press the Delete key (or double click). When the cursor is over the point, it is painted in red color.

- Add a new point: move the mouse cursor over a line. It shows a white handler under the cursor, you can drag it for creating a new point.

## Arcade Physics Body tool

This tool allows changing the size and offset of an Arcade physics body. You can activate the tool in the scene context menu of by pressing the `B` key.

There are two type of bodies: circular and rectangular bodies. When you are editing a circular body, the tool shows the body’s circle, the center (offset), and the radius handlers:

If the object has a rectangular body, then the tool shows the offset and size handlers:

## Hit Area tool

This tool allows changing the interactive hit area of an object. You can activate this tool with the `I` command or selecting it in the **Tools** context menu.

A hit area has a shape of different types. This tool provides different manipulators for each type of shape:

- Rectangle
- Ellipse
- Circle
- Polygon

## Pan tool

This tool allows you to pan the scene. You can activate it with the `Space` key. When it is selected, the mouse cursor is shown with a “grabbing” icon, then you can click on the scene and drag it.

Also, you can pan the scene by pressing the `Alt` key and dragging the mouse. This method does not require to activate the Pan tool.

## Select Region tool

This tool allows you to draw a region in the scene and select all objects inside that zone. You can select it in the toolbar, the context menu or by pressing the `Shift+S` keys. If you keep pressing the Ctrl key, the previous selected objects will remain selected.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Adding User Components to a Prefab

Layout tools

---

# https://docs.phaser.io/phaser-editor/misc/update

# Updating the editor

When you start the server, it connects with the updates site in Internet and checks if there is a new version. If there is a new version then it shows a message with the version number and some headlines of the release notes.

The Phaser Editor Desktop distribution shows a message when there is a new update, but you should download the new version manually.

In v3 of the editor, you had the option of installing/updating Phaser Editor Core from NPM. Yet it is not available in Phaser Editor v4.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Content viewers

Plugins

---

# https://docs.phaser.io/phaser-editor/workbench/command-palette

# Command palette

The Command palette is a dialog that shows the commands available in the **current context**. You can open it by pressing `Ctrl+K` or clicking on the **Command Palette** option of the Main menu.

Not all commands are shown, those that do not apply to the **current context** (active view, active editor or active dialog) are omitted.

In the dialog, you can select a command and execute it by pressing the **Execute** button.

Commands are contributed to the workbench, by plugins.

You can change the key bindings of the commands in the Keyboard settings.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Color themes

Settings

---

# https://docs.phaser.io/phaser-editor/asset-pack-editor/editor-content-layout

# Editor content layout

The Asset Pack Editor layout is focused on provides visual and assisted experience. The editor is split into sections, and each section is dedicated to a particular file type. Inside the section, the file configurations are shown in a row layout.

The editor uses a content viewer, so it shows an inline preview of the elements, it can be zoomed in/out (pressing `Shift` and rolling the mouse wheel) and filter its context.

In addition, the Outline view provides a hierarchical presentation of the editor content.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Asset Pack File

Importing files

---

# https://docs.phaser.io/phaser-editor/animations-editor/edit-animations-properties

# Editing the properties of the animations

These are the properties of an animation:

**Key**: The identifier of the animations. Used to play the animation in a sprite: `sprite.play("walk")`.

**Frame Rate**: The frame rate of playback in frames per second (default 24).

**Delay**: Delay before starting playback. Value given in milliseconds.

**Repeat**: Number of times to repeat the animation (-1 for infinity).

**Repeat Delay**: Delay before the animation repeats. Value given in milliseconds.

**Yoyo**: Should the animation yoyo? (reverse back down to the start) before repeating?

**Show On Start**: Should sprite.visible = true when the animation starts to play?

**Hide On Complete**: Should `sprite.visible = false` when the animation finishes.

**Skip Missed Frames**: Skip frames if the time lags, or always advanced anyway?

By default, the editor shows all the animations and in the Inspector view shows the properties of all of them. However, you can click on an animation in the editor, to edit the properties of that single animation. Or select a couple of animations in the Outline view.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Automatic creation of the animations

Adding and deleting frames

---

# https://docs.phaser.io/phaser-editor/workbench/outline-view

# Outline view

The purpose of the Outline view is to show the content of the active editor but with a hierarchical structure.

An editor contributes to the Outline view with content but also with a context menu and Inspector view support.

Like the other content viewers, it shows an inline preview of the items and can be zoomed in/out, and the content can be filtered.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Inspector view

Blocks view

---

# https://docs.phaser.io/phaser-editor/scene-editor/misc

# Miscellaneous

## Preview active scene

The Scene Editor runs a Phaser scene inside it, which means, it shows you a pixel-perfect image of the scene you are creating. But sometimes you want to see the scene in action, with the physics, the inputs, the animations. For this purpose there is a trick: the **Preview Scene** ( `Ctrl+0`) command.

This command opens your game in the default (or configured) browser but adds the start parameter to the URL, and sets the name of the current scene as value. If the current scene is a prefab, then it uses the last valid scene.

For example, if you are editing the **LevelCompleted** scene, and you run the **Preview Scene** command, the editor launches the browser and opens the URL:

Now, in the code of your game, you have to read the value of the start parameter and start the scene with the same name. This is something you have to code manually, however, the built-in Phaser Editor project templates contain the code for reading the `start` parameter. It looks like this:

```hljs javascript
Copyif (process.env.NODE_ENV === "development") {

const start = new URLSearchParams(location.search).get("start");

if (start) {

console.log(`Development: jump to ${start}`);
this.scene.start(start);
return;
}
}

The `process.env.NODE_ENV === "development"` expression is replaced by webpack at compile time, by `true` or `false` in regarding you are working on a development or production build.

You can place that code in the **Preloader** scene or any other scene after setting up a consistent game state.

## Numeric input field

You can change the value of a numeric input fields in different ways:

- By writing a new value in the input field.
- By rolling the mouse wheel over the input field.
- By dragging the mouse over the input field’s label.

In the last two methods, the value will be increased or decreased by a certain amount. The amount depends on the domain of the values of the property associated with the input field. For example, if the property is a float between 0 and 1, the value will be increased or decreased by 0.01. If the property is an integer, the value will be increased or decreased by 1.

## Scene Tools Panel

At the bottom of the scene, there is a panel with shortcuts to tools and other functions of the scene:

Going from left to right:

- The align tools.
- The align to border tools.
- The origin tools.
- The sorting tools.
- The grid tools.

Other special buttons are as follows:

### Play scene update loop

The common in a Phaser scene is to run a loop to update and render the scene. However, the Scene Editor doesn't run the loop by default, else it updates/renders the scene only when the user modifies it. This works for most of the cases, but there are game objects that can be animated in real-time, like the Sprite animations, Particle Emitters, Spine animations, or Video objects. For these cases, you can enable the scene update loop by clicking the play button. This button starts the scene loop so the animations are updated smoothly. You can click the button again to pause the loop.

### Scene refresh button

The Refresh button re-creates the scene again. You can use it to reset a complex animation to its first state, like in a particle emitter.

### Audio mute button

The audio mute button mutes all the sounds of the scene. It applies when you preview video game objects.

## Go To dialog

In Phaser Editor you create scenes, prefabs, script nodes, user components, asset packs, animations... and an important part of your daily workflow is navigating between these files. The **Go To dialog** is a powerful tool that helps you to find and open any file in your project. When you open this dialog, it shows all relevant files and definitions and you can quickly search to find the file you are looking for. You can open the dialog with the `Ctrl+Alt+O` ( `Cmd+Opt+O` on macOS) shortcut, or click the **Go To** button in the main toolbar.

You can zoom in/out of the dialog's content by holding the `Shift` key and scrolling the mouse wheel. You can also click on the zoom buttons in the bottom/right corner of the dialog.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

The scene compiler

Troubleshooting

---

# https://docs.phaser.io/phaser-editor/misc/project-config

# Project configuration

Any folder is a valid Phaser Editor project. However, it is convenient to create a `phasereditor2d.config.json` project configuration file, it the root of the project’s folder.

Every Phaser Editor’s project template contains this file so probably you don’t have to create it yourself.

These are the settings supported by the project configuration:

| Name | Value |
| --- | --- |
| `skip` | An array with the patterns for filtering the project resources. |
| `plugins` | An array with the path to user plugins. |
| `flags` | An array with the server options. |
| `playUrl` | A string with the address to open in the browser when you execute a Play command ( `F12` or `F10`). |
| `settings` | An object with the UI settings parameters. |

This is an example:

```hljs bash
Copy{
"skip": ["dist/", "editor-plugins/"],
"settings": {
"phasereditor2d.scene.enablePixelArt": true
},
"plugins":
[\
"editor-plugins/my-fonts-plugins",\
"editor-plugins/my-awesome-plugins"\
],
"flags": ["-port", "7171"],
"playUrl": "http://localhost:4200"
}

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Coding in Phaser Editor

Server options

---

# https://docs.phaser.io/phaser-editor/scene-editor/arcade-physics

# Arcade Physics

Arcade is a physics system very popular in Phaser. Phaser Editor provides visual tools for creating and configuring Arcade physics objects.

You can create a `Phaser.Physics.Arcade.Image` or `Phaser.Physics.Arcade.Sprite` game object or you can enable a physics body in any other game object.

With the visual tools, you can change the body size and offset. With the Inspector view editors, you can adjust the physics properties like velocity, mass, etc…

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Scene properties

Creating Arcade Image and Sprite objects

---

# https://docs.phaser.io/phaser-editor/misc/server-options

# Server options

To get the full list of options of the Phaser Editor server you can use the `--help` option. Here we explain them in detail.

```hljs bash
Copy$ PhaserEditor --help

Following,

**-login**
: Authenticate and unlock the editor with a Phaser.io user.

**-logout**
: Log-out the current Phaser.io user session.

**-public**

By default, the editor starts as a local application. It allows you to execute third-party tools like Visual Studio Code or the File Manager and opens the default web browser automatically at the startup.

However, you may want to execute the server in a remote machine. To do this, you have to use the `-public` option. when it is set, the server allows remote connections and disables all the integration with the remote host applications.

**-disable-gzip**

By default, the server gzip compresses the files sent over the network. It requires an extra usage of the CPU, so you may disable it if you want to use less CPU in the server machine.

**-disable-open-browser**

If you don’t want to open the default browser at the server startup. Not needed if you run the server with the `-public` option.

**-browser-command**

When the server starts it opens the default browser of the OS. If you want it to launch a different browser, you can use the **-browser-command** option:

```hljs bash
Copy$ PhaserEditor -browser-command "/path/to/firefox $URL"

In the above command, the server will start firefox. Note the `$URL` variable is replaced by the URL of the editor.

We recommend using Google Chrome. It has an application mode that runs the editor similar to a desktop application. Try running the editor like this:

```hljs bash
Copy$ PhaserEditor -browser-command '/path/to/google-chrome "--app=$URL"'

**-external-editor-command**

When the server runs in application mode, the IDE allows launching an external editor. By default, it is configured to run Visual Studio Code (the `code` command).

However, you can change the command to launch a different external editor. For example, if instead of Visual Studio Code you want to launch the Atom editor, you can run the server with these options:

```hljs bash
Copy$ PhaserEditor -external-editor-command '/path/to/atom "$LOC"' -external-editor-name Atom

Note the `$LOC` variable will be expanded to the location of the project.

**-external-editor-name**

The display name of the external editor. Used in the UI. By default it is **Visual Studio Code**.

**-editor string**

In the installation folder of Phaser Editor there is the `editor` folder. It contains the code of the IDE. If you want to load other implementation of the IDE, you can use the `-editor /other/editor/implementation` option. This is useful for testing or developing a different version of the IDE.

**-lickey string**

**-port int**

By default, the server uses the `1959` port for HTTP networking. You can use this option to change it.

**-project string**

This is a mandatory flag. Use it for setting the project path:

```hljs bash
Copy$ PhaserEditor -project /path/to/project

## Getting the options from a file

You may run the editor always with the same options, and it could be a waste of time typing each option every time.

If this is the case, you can create a script (a batch) to run the editor with the desired options. Or, you can change the `flags.txt` file in the root of the editor installation.

When the editor starts, it reads the `flags.txt` file and reads the options provided there. It is a way to configure the editor.

The format of the `flags.txt` file is simple. Each line contains an argument. For example, if you always want to run the server like this:

```hljs bash
Copy$ PhaserEditor -public -port 80 -project /path/to/project

You can write this content in the `flags.txt` file:

```hljs bash
Copy-public
-port
80

Also, you can write blank lines and comments. Comments are lines that start with the `#` character:

```hljs bash
Copy-public

# -port

# 80

If you have Google Chrome installed, let’s say, in a Windows machine, you can write these lines in the file:

```hljs bash
Copy-browser-command
"C:\Program Files\Google\Chrome\Application\chrome.exe" "--app=$URL"

It will open the editor in an instance of the Google Chrome browser but in application mode.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Project configuration

Resources caching

---

# https://docs.phaser.io/phaser-editor/misc/proxy

# Proxy Configuration

Phaser Editor uses different technologies: Go, Electron, NodeJS. Setting a proxy for all of them could be challenging, and some of you are working in corporate networks. In v4.2.0, we introduced a new UI to set a unified proxy configuration.

When you first open the editor, it shows a page to log in with your Phaser account. In the bottom/left corner there is a link to open the proxy settings:

If you are already logged in, you can find the link in the settings of the projects page:

It opens the Proxy configuration page. There you can set the different parameters and save. To make the proxy settings effective, you should restart the editor.

```hljs json
Copy{
"proxy": "http://myuser:mypassword@proxy.mycompany.com:8080",
}

It is a single string with the URL of the proxy server. The URL can contain the user and password, and the port. You are free to change it, but you should restart the editor to make the changes effective.

Also, there is the `proxyDisabled` field. It is a boolean value that indicates if the proxy is enabled or not. If you want to disable the proxy, you can set this field to `false`.

```hljs json
Copy{
"proxyDisabled": true
}

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Resources filtering

Local preferences

---

# https://docs.phaser.io/phaser-editor/workbench/main-toolbar

# Main toolbar

The Main toolbar is placed at the top of the window. The toolbar is divided into three areas: left, center and right.

In the left area there are buttons to trigger global commands:

- Open the New File dialog.
- Play the project.
- Quick search.
- Open external code editor.

The center area is dynamic. Its content is contributed by the active editor. This means, the buttons shown there fire commands that only affect the active editor. For example, the Scene Editor contributes the transformation commands to the center area of the toolbar. If the editor is closed, the buttons are removed.

The right area shows a button to open the Support Chat window and other to open the Main menu.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Blocks view

Main menu

---

# https://docs.phaser.io/phaser-editor/workbench/settings

# Settings

In this chapter we will learn about the settings UI in Phaser Editor.

You can open the settings dialog by clicking on the main menu, in the **Settings** option:

The settings dialog contains multiple tabs with different settings:

- Default Apps tab
- Keyboard tab
- Scene tab

There are settings that are stored globally, and others that are stored per project. In a following section we explain in details the different settings storages.

## Default Apps settings

Phaser Editor may use external applications to do two main tasks:

- Open the game in a browser.
- Open the project in an external code editor.

In this tab, you can set the default applications to use for these tasks.

### Default system browser

The **Browser** section contains the settings to open the game in a browser.

You can select the **Use Default System Browser** parameter to use the default system browser no matter the value of the other parameters:

### Custom browser

If you want to use a specific browser, you can set the **External Browser** parameter to the path of the browser executable. It is important to write the path between quotes ( `"`) if it contains spaces. This is an example of path in macOS:

Copy"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

Note, in the right of the text field there is a three-dots menu with the following options:

- **Configure Chrome** \- set a predefined path for Google Chrome.
- **Configure Firefox** \- set a predefined path for Mozilla Firefox.
- **Configure Other...** \- opens the system file chooser dialog to select the browser executable.

With the **External Browser Arguments** parameter, you can set the arguments to pass to the browser executable. The most important argument is the `$URL` variable, which contain the URL of the game to open:

### Custom code editor

In the **External Code Editor** section, you can set the default code editor to open the project files. The settings are similar to the browser settings. The **External Code Editor** parameter contains the path to the editor's executable. You should write the path between quotes ( `"`) if it contains spaces. This is an example of the Visual Studio Code path in macOS:

Copy"/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"

In the right of the text field there is a three-dots menu with the following options:

- **Configure Visual Studio Code** \- set a predefined path for Visual Studio Code.
- **Configure JetBrains WebStorm** \- set a predefined path for JetBrains WebStorm.
- **Configure JetBrains Rider** \- set a predefined path for JetBrains Rider.
- **Configure Other...** \- opens the system file chooser dialog to select the editor executable.

The **External Code Editor Arguments** parameter contains the arguments to pass to the editor executable. The most important argument is the `$LOC` variable, which contains the path of the file to open or the project's folder to open. You can add additional arguments.

The **External Code Editor Display Name** parameter is the name of the editor to display in the different places of the Phaser Editor's UI.

## Keyboard settings

In the **Keyboard** tab, you can set the keyboard shortcuts for the different commands in the Phaser Editor. The settings are stored globally, so they are the same for all the projects.

The tab shows all the commands and their current shortcuts. The commands with a custom key binding are highlighted and shown at the beginning of the list.

To change a shortcut, follow this steps:

- Select the command.
- Press the **Edit** button.
- Press the new key combination.
- If you want to cancel the change, press the **Cancel** button.

Also, you can reset the key bindings of a command by selecting it and pressing the **Reset** button.

## Theme settings

This section shows the Color Themes available in Phaser Editor. You can select the theme to use in the workbench. The settings are stored globally local for each project.

## Scene settings

In the **Scene** tab, you can set the default properties of the scenes created in the Scene Editor.

The **Phaser Renderer Type** parameter is the renderer type to use in the scenes. The available options are: WebGL and Canvas.

The **Enable Pixel Art** parameter is a flag to enable the pixel art mode in the scenes. Tick this option of your game is pixel art.

The settings are stored per project, in the `phasereditor2d.config.json` file, so they are different for each project. Learn more about the project's configuration file.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Command palette

Introduction

---

# https://docs.phaser.io/phaser-editor/misc/local-preferences

# Local preferences

There are a couple of preferences that are stored in the browser: the last open project. The last open editors. The last color theme. All these preferences are stored in the browser’s local storage. You can clean it with the Developer Tools of the browser.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Proxy Configuration

Content viewers

---

# https://docs.phaser.io/phaser-editor/scene-editor/scene-compiler

# The scene compiler

Traditionally, a game engine has its file format to create scenes and part of its API is focused on the integration with a scene editor.

Phaser is not a traditional game engine, it is a framework, and is not attached to any particular tool. To create a Phaser game you only need a simple text editor.

Of course, Phaser provides API to interact with some widely used, third-party formats like texture atlas, tilemap, bitmap fonts, etc… But there is not a complete scene format where all the elements could be integrated.

For the Scene Editor, we use a custom scene-file format, but instead of creating a custom library to parse and create the Phaser scenes on the fly, we created a compiler.

The scene compiler takes as input the custom scene files (based on JSON) and generates well-written Phaser code. In other words, the scene compiler writes the Phaser code for you.

This has some advantages:

- Your game doesn’t need to load an extra, third-party library.
- You have full comprehension of how the scene objects are created.
- A modern JavaScript editor can process the scene code and integrates it with the content assist tools.
- You can customize certain aspects of the generated code and/or insert your code.

## Executing the compiler

You have multiple options to compile a scene file:

- When you save the modifications of a scene file in the Scene Editor the scene is compiled automatically.
- In the context menu of the Scene Editor you can click on the **Compile Scene** command.

- The **Compile Project** command compiles all the files of the project, including the scene files. You can execute the command with the `Ctrl+Alt+B` keys. It is also available in the Main menu.

## User code

The Scene Editor helps to build game levels, but it is far away to cover all aspects of a game. Especially, the game logic should be implemented by you, writing code.

In Phaser programming, it is common to see, in the same file, code to create the objects of the level (what the Scene Editor is good for) and code to handle the interaction between the objects (the game logic, that is not targeted by the Scene Editor).

We designed the scene compiler to allow you to merge the generated code with your code, in the same file.

The concept is simple:

- The scene compiler creates the initial JavaScript file.
- The initial file contains protected regions, where the user can insert its code. These regions are delimited by JavaScript comments like `/* START-USER-CODE */` and `/* END-USER-CODE */`.
- You can insert your code inside the protected regions.
- The next time the file is updated by the compiler, the user protected regions are preserved, it means, your code is not changed, only the code generated by the compiler is updated.

The scene compiler uses different comments to delimit the user code:

- From the beginning of the file to the start of the `/* START OF COMPILED CODE */` comment.
- From the end of the `/* END OF COMPILED CODE */` comment to the end of the file.
- From the end of the `/* START-USER-IMPORT */` comment to the start of the `/* END-USER-IMPORT-CODE */` comment.
- From the end of the `/* START-USER-CTR-CODE */` comment to the start of the `/* END-USER-CTR-CODE */` comment.
- From the end of the `/* START-USER-CODE */` comment to the start of the `/* END-USER-CODE */` comment.

The next image is an example. Look that you can import a `MyUtils` class and use it in the `create()` method:

### Editing the generated code

The code generated by the scene compiler can be edited in an external editor (like Visual Studio Code) or using the Monaco editor that is built-in in Phaser Editor.

We recommend you to read the Code Editor chapter.

The Scene Editor provides two commands to quickly edit the code file generated by the scene compiler:

The **Open Output File** command opens the generated file in a new Code Editor, in the traditional way.

The **Open Output File in VS Code** ( `Ctrl+Alt+E`) command launches a local Visual Studio Code instance (or any other configured external editor) that opens the generated file.

The **Quick Edit Output File** command (bound to the `Q` key) opens the generated file in a Code Editor that is embedded in a modal dialog. This way is perfect for quick modifications, however, intellisense and all the other Monaco editor features are enabled, so you have a similar experience in comparison with the traditional way of editing.

## Compiler settings

The scene compiler uses two different sets of parameters to refine the code generation of a Phaser scene and a prefab file. However, there are general, or shared settings, used in both cases:

The parameters:

- **Generate Code**: un-check it if you don’t want the compiler to compile the file. In the Using a prefab as a black box section there is an example that uses a scene file without code generation.
- **Output Language**: you can select if the scene is compiled into JavaScript or TypeScript. In case you select TypeScript, you need to compile yourself the TypeScript generated files, with the TypeScript compiler ( `tsc`).
- **Fields In Constructor (JS)**: enable this for generating the initialization of the attributes in the class constructor. By default it is false and the fields are initialized in the class declaration. This parameter is used only when the output language is JavaScript.
- **Declare Fields (JS)**: disable this field to skip declaring the fields in the class. This is useful when you want to use the fields in the class without declaring them. This parameter is used only when the output language is JavaScript.
- **Export Class (ES Module)**: includes the `export default` class modifiers.
- **Auto Import (ES Module)**: adds “import” statements for importing the types used in different parts of the code generation. Code written by the user is not processed. If you use other types, you should import them manually.
- **Super Class**: you can force the generated class (prefab or scene), to extends the given class. If empty, the compiler will detect the appropriate class.
- **Insert Spaces**: if checked, the tabs will be converted to spaces.
- **Tab Size**: the number of spaces to be used if the **Insert Spaces** option is checked.

By the way, the name of the file and the class that is generated by the compiler is the same as the scene file. For example, a `Zombie.scene` file is compiled into `Zombie.js` (or `Zombie.ts`) and the name of the class will be `Zombie`.

## Scene settings

The compilation of a Phaser scene can be tweaked with the **Compiler Scene Settings**:

- **Scene Key**: you can set the Phaser.Scene configuration key. Is optional.

- **Only Generate Methods**: if checked, instead of generate a Phaser.Scene class, the compiler generates only the **create** and **preload** methods:

This could be useful if you want to create the objects using any context:

```hljs javascript
Copycreate.call(anySceneLikeContext);

- **Create Method**: the compiler generates all the “creation code” in a method with the name you set in this parameter. By default, the name is `editorCreate`. The first time you create a scene, it has a `create` method that calls the `editorCreate` method generated by the editor:

```hljs javascript
Copy/* START OF COMPILED CODE */

class Level2 extends Phaser.Scene {

constructor() {
super("Level2");

}

editorCreate() {

// dino
const dino = this.add.image(346, 233, "dino");

// fields
this.dino = dino;
}

/* START-USER-CODE */

// this is the method called by Phaser,
// when the scene is created.
create() {

this.editorCreate();

// you can add more code here

this.dino.setInteractive()
.on("pointerdown", () ={
// do something
});
}

/* END-USER-CODE */
}

/* END OF COMPILED CODE */

- **Preload Pack Files**: you can select the pack files to be loaded in the scene. If you click on the button, it opens the **Select Pack Files** dialog:

If you select to load a pack file, then the compiler generates a **preload** method:

```hljs javascript
Copyclass Level extends Phaser.Scene {

preload() {
this.load.pack("asset-pack", "assets/asset-pack.json");
}

create() {
// ...
}
}

- **Preload Method**: like the **Create Method**, you can change the name of the **preload** method generated by the compiler. Then, you can write your own **preload** method and call the one of the editor.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Sorting layout tools

Miscellaneous

---

# https://docs.phaser.io/phaser-editor/scene-editor/spine-animations/spine-animations-assets-preview

# Spine assets preview

There are different contexts in Phaser Editor where there are Spine assets and you can preview them: in the Asset Pack Editor and the Blocks view of the Scene Editor.

For displaying and inspecting Spine objects, the Spine Phaser runtime requires the skeleton data file and the atlas files. If you follow the default Spine assets naming rules, then Phaser Editor can build the skeleton instances and preview them.

In the next sections we explain it in details.

## Preview Spine atlas assets

The Asset Pack Editor shows the Spine atlas assets you add to an Asset Pack file. If you select it in the editor, the Inspector view shows you all the atlas frames:

## Preview Spine skeleton and animation data

You can select a Spine skeleton data in the Asset Pack Editor or the Blocks view of the Scene Editor. In both cases, the Inspector view shows two sections of properties: the **Spine Skeleton** and the **Spine Preview**.

The **Spine Skeleton** shows the **Skeleton Key** and **Preview Atlas Key**. By default it guesses the atlas key from the skeleton key, but you can change it if you need to.

The **Spine Preview** section displays the skins defined in the skeleton data:

## Preview Spine animations

Notice the **Spine Skeleton** section contains a **Preview Animations** button. It opens the **Spine Preview** dialog.

In this dialog, you can play the skeleton animations and change other properties like the skin.

Let’s go parameter by parameter.

### Skin preview

You can change the preview skin by pressing in the **Skin** button:

### Animation and Track

With Spine you can play simultaneous animations on different tracks. With the **Track** button you can select the track ID for playing the animation you select in the **Animation** button.

In the next image, you can see it is playing the **idle** animation in **Track 0**, and the **shoot** animation in **Track 1**.

When you select an animation in the **Animation** button, it plays it immediately on the selected track:

The animation is played in a loop if the **Loop** parameter is checked.

If the **Events** parameter is checked, then the canvas shows the name of the events the animation emits. Look in this image the **footstep** events:

Also, you can set the **Default Mix** and **Time Scale** of the animation. The **Default Mix** is applied when you change from one animation to another.

Learn more about applying animations in the Spine Phaser runtime

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Loading the Spine assets

Creating a SpineGameObject

---

# https://docs.phaser.io/phaser-editor/scene-editor/spine-animations/spine-animations-loading

# Loading the Spine assets

To load a Spine animation into a Phaser game, you first have to export the animation from the Spine editor.

Exporting an animation produces the following assets:

- Skeleton and animation data.
- Texture atlas with the images of the skeleton.

You can export the skeleton and animation data to a JSON file or a binary file ( `.skel`). Phaser Editor supports both formats. Also, you can export the skeleton images into a texture atlas. It produces a `.atlas` file with the frames info and the `.png` images.

Learn more about Assets Management in the Spine editor

The common way to import the Spine assets into a Phaser game is using the Phaser loader methods:

- `spineBinary(key, url)` \- Loads `.skel` files containing skeleton and animation data.
- `spineJson(key, url)` \- Loads the `.json` files containing skeleton and animation data.
- `spineAtlas(key, url, premultipliedAlpha)` \- Loads the texture atlas files.

This is an example:

```hljs javascript
Copypreload() {
this.load.spineBinary("skeleton", "path/to/skeleton.skel");
this.load.spineAtlas("skeleton-atlas", "path/to/skeleton.atlas");
}

However, Phaser Editor provides the Asset Pack Editor, which is a visual tool for loading the assets into the Phaser games.

The workflow for importing the Spine assets into the Asset Pack file is:

- Export the assets from the Spine editor into the “assets” folder of the game project:

- In the Files view, select the data `.json` file (or `.skel` if it is exported with the binary format):

- In the Inspector view, the **Asset Pack Entry** section shows a button for importing the selected file into an Asset Pack file:

- Do the same process but with the `.atlas` file. Select it in the Files view and add it to an asset pack:

- Open the `asset-pack.json` file in the Asset Pack Editor and check the Spine assets are there:

If everything is well, you will find both the data file and the atlas file in the pack editor. If you select the data file entry, the Inspector view shows the info and the animation preview. You can click on the **Preview Animations** button. It opens a dialog where you can play the animations. We talk more about this dialog later.

## Spine assets default naming rules

**Important** The Spine Phaser runtime allows using a different atlas for the same skeleton. For previewing a skeleton, the editor looks for an atlas asset with the same key but with the `-atlas` suffix. In the above example, the skeleton data has the `spineboy` key, and the atlas asset the `spineboy-atlas` key:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Installing the Spine plugin in your game

Spine assets preview

---

# https://docs.phaser.io/phaser-editor/scene-editor/spine-animations/spine-animations-game-object

# Creating a SpineGameObject

The SpineGameObject is the Phaser game object implementation to display, control, and customize Spine animations.

The Spine Phaser runtime provides the `spine()` factory for creating a SpineGameObject. This is an example:

```hljs javascript
Copyconst spineObject = this.add.spine(400, 500, "spineboy", "spineboy-atlas");

But you don’t need to write that code. The Scene Editor can generate that code for you. You only need to drag a Spine block from the Blocks view and drop it on the scene.

Let’s see the different ways of doing this.

## Create a Spine object with a SpineGameObject built-in block

The main way of adding a SpineGameObject to the scene is by dropping the **SpineGameObject** block on the scene. This block is located in the **Built-in** section of the Blocks view, under the **Spine** folder. Drag it and drop it on the scene:

It opens a configuration dialog for selecting the skeleton data key and the atlas key to be used by the SpineGameObject. Every SpineGameObject requires a reference to the skeleton data and the atlas. This means, you first have to add the skeleton data and atlas files to an Asset Pack file. In addition, the Scene Editor requires that you select the skin of the animation.

This is the workflow:

- Select the skeleton data and press **Next**:

- Select the atlas and press **Next**:

- Select the skin and press **Finish**:

- Finally, it adds the SpineGameObject to the scene:

## Create a Spine object with a skeleton data block

The **Spine JSON** and **Spine Binary** sections of the Blocks view show all the skeleton data you defined in the Asset Pack file. You can drag a skeleton data block and drop it on the scene. It shows the configuration dialog to select the atlas and the skin, just like in the previous section. The next image shows the `spineboy` skeleton block:

## Create a Spine object with a skeleton’s skin block

If you imported the skeleton data and the atlas assets in the Asset Pack following the default naming rules, then the Blocks view shows a special **skin** block inside the skeleton data block.

Drag this skin block and drop it on the scene. It creates the SpineGameObject right away, without showing the configuration dialog:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Spine assets preview

SpineGameObject properties

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/common-object-properties

# Game Object common object properties

The properties of the objects are listed and grouped in the Inspector view. In this view, you can modify the properties of the selected objects.

In this chapter, we cover the properties that are common to different game objects.

## Variable properties

The variable properties are introduced by the Scene Editor to be used by the Outline view and the scene compiler.

## Name property

This name is auto generated by the editor:

It is used as the label in the Outline view:

And as a variable name in the generated code:

## Display Name property

You can change the default text of the game object in the Outline view by setting the **Display Name** property. This display name is used only by the UI.

## Game Object Name property

The **GO Name** property indicates if the previous **Name** property’s value will be set as value to the Game Object’s name property.

Check the **GO Name** property:

For generating the `name` value in code:

## Type property

This property shows the type of the selected object. In the case of prefabs, it shows the name of the prefab and the Phaser type that is the root of the prefab. For example: `prefab PlayButton (Image)`.

Also, you can click on the type name to change the type of the selected objects. It opens the Replace Type dialog:

## Scope property

The scope property refers to the lexical scope of the variable that references the object. The possible values are:

- `LOCAL`: The variable is local to the creation of the object. It is optional, the compiler may generate it or not according if the object properties are modified.
- `METHOD`: The variable is available in the method’s scope.
- `CLASS`: The variable is assigned to a private class field. The object is accessible from any other method of the class.
- `PUBLIC`: Like the `CLASS` scope, but it is referenced by a public field. The object is accessible to any client of the class.
- `NESTED_PREFAB`: Like `PUBLIC`, but the object is also available as nested prefab instance in the Scene Editor. It means, you can change its properties using the scene editor.

By default, the scope is set to `LOCAL`. In previous versions of the editor, the default value was `METHOD`, but now we are using `METHOD` to ensuring the scene compiler generates a variable for the object.

## Lists properties

The Lists property is not part of the Phaser API. It is a property used by the Scene Editor to add objects to a list. It is the “parent lists” of the object.

As you can learn in the Object List section, the editor allows to group objects in lists.

The button next to the property shows the lists that the object belongs to. You can click on the button to:

- Add the object to another list.
- Remove the object from a list.

## Parent properties

The Parent property shows the parent’s (a Container, a Layer, or the scene) of the selected object.

You can click on the button to move the object to new parent.

When you change the parent of an object, the local position of the object is modified to keep the same absolute position.

Also, you can open this dialog with the Move To Parent command.

## Children properties

The containers and layers are objects with children, and share children-based properties.

The **Children** properties are not part of the Phaser API, they are used only by the editor, in design-time.

The **Allow Picking Children In Scene** property allows picking a child in the scene. If it is disable, you cannot pick a child by clicking in the scene. This is useful if you want to manipulate the parent container (or layer) and children as a single object.

The **Show Children In Outline** parameter is similar. It allows showing the container or layer children in the Outline view.

The **Allow Append Children** parameter indicates this Layer or Container allows adding new children in prefab instances. This parameter has sense only if the object has a nested prefab scope. Learn more about adding children to a prefab instance.

## Transform properties

The transform properties of the object can be modified in the Inspector view or by using the manipulation tools.

- The X and Y of the position. See the position manipulation tool.
- The scaleX and scaleY. The default value is `1`. See the scale manipulation tool.
- The angle, in degrees. The default value is `0`. See the rotate manipulation tool.

## Origin properties

The origin properties of the object can be modified in the Inspector view:

There are commands to change the origin to a preset value. These commands are available in the scene context menu or by pressing a key shortcut:

Also, you can change the origin of an object with the origin manipulator tool or the origin layout tool.

## Size properties

The size properties of the object can be modified in the Inspector view or by using the manipulation tools.

These properties, **Width** and **Height**, are available for game objects like the TileSprite, Rectangle, Ellipse, the NineSlice, and others.

In addition to writing the values into the property editors, you can use the Resize manipulator tool ( `Z`) for changing the size of the object in the scene.

## Flip properties

The flipX and flipY properties of the object.

## Visible property

The visible property of the object.

## Alpha properties

These properties allow setting transparency to the objects.

The alpha property sets global transparency to the object. The `alphaTopLeft`, `alphaTopRight`, `alphaBottomLeft` and `alphaBottomRight` properties of the Alpha component add interpolated transparency to the corners of the object.

## Alpha single property

The alpha property sets global transparency to the object.

## Blend Mode properties

The blendMode property sets the who the game object blends with the objects behind it.

## Tint properties

The tint properties of the object are shown in the **Tint** section of the Inspector view:

By default, the tint properties have a default value of `#FFFFFF`. To reset it to the default value you can delete it in the text field. You can write any CSS valid color format ( `#ff0000`, `red`, `rgb(255, 0, 0)`).
At code generation, the value is converted to an integer, as the tint properties requires.

## Texture property

The Scene Editor supports a couple of object types with texture:

- Image
- Sprite
- Tile Sprite

The Scene Editor provides an Inspector view section to set the texture of an object:

It shows a button with the key of the image in the Asset Pack file. If the texture is taken from a texture map or sprite-sheet, then it shows that key too.

To change the texture of the object, click on the button, it will open the **Select Texture** dialog. This dialog shows all the textures available in the Asset Pack file, and you can select the new texture for the object.

You can open the dialog with the **Replace Texture** command. This command can be executed by pressing the `X` key, selecting it in the context menu or the Command Palette.

The **Replace Texture Frame** ( `M`) is a special command that allows you selecting a different texture frame for the object. It means, it will show all the frames of the same atlas (or sprite-sheet):

The context menu also shows the **Select All With Same Texture** command. This command selects all the objects with a texture equals to the texture of the selected object. It can help you to replace an old texture with a new texture of all the objects of a scene.

The **Show Texture in Asset Pack Editor** option opens the Asset Pack File where the texture is defined.

## Animation properties

The animation properties section contains the parameters of the play() method of the Sprite game object:

The **Animation Preview** parameter allows you to play the animation in real-time in the scene editor. It is disabled by default. When you enable it, it starts the scene's update loop and shows the animation in the scene editor:

The **Action** parameter indicates what method execute to play the animation:

- **NONE** (default): Doesn’t call any method, doesn’t play any animation.
- **PLAY**: Calls the play() method.
- **PLAY\_REVERSE**: Calls the playReverse() method.

The **Animation Key** parameter contains the key of the animation to play:

Next to the key name, there are two buttons. A button for opening an animation key selection dialog and a button for previewing the selected animation.

The animation key selection dialog:

The animation preview dialog:

This dialog searches for animations defined in a Phaser animations file or in the Aseprite assets included in an Asset Pack file.

This is the code the scene compiler generates for playing the animation:

```hljs javascript
Copydragon.play("dragon - dragon/Moving Forward");

Or, if you select the **PLAY\_REVERSE** action:

```hljs javascript
Copydragon.playReverse("dragon - dragon/Moving Forward");

When you define the animations in the Animations Editor or in Asesprite, you configure parameters like repetitions, duration, direction, etc… However, in the scene, you can pass a custom configuration to the play() method. To do this in the Scene Editor you have to check the **Custom Config** parameter.

If the **Custom Config** parameter is selected, then it shows the **Animation Configuration** section. It shows all the parameters you can set to an animation:

When you set the custom configuration, the scene compiler generates this code:

```hljs javascript
Copydragon.play({
"key": "dragon - dragon/Moving Forward"
"frameRate": 10,
"repeat": -1
});

## Text property

There are a couple of object types in Phaser dedicated to displaying a text. The Scene Editor, for now, supports the BitmapText and Text types.

The text property can be edited in the **Text Content** section of the Inspector view.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Game Object types

Image

---

# https://docs.phaser.io/phaser-editor/scene-editor/spine-animations/spine-animations-game-object-user-properties

# SpineGameObject user properties

In Phaser Editor you can encapsulate game object behavior into prefabs, user components, and script nodes. These mechanisms use the user properties to customize the behaviors.

For a better implementation of behaviors related to Spine game objects, we provide two user property types:

- Spine Skin Name property type
- Spine Animation Name property type

In addition, the Event property type allows Spine events.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

SpineGameObject properties

Shader Effects

---

# https://docs.phaser.io/phaser-editor/scene-editor/spine-animations/spine-animations-game-object-properties

# SpineGameObject properties

The Inspector view shows the properties of the SpineGameObject instance you select in the scene.

The **Spine** section shows the **Data Key**, **Atlas Key**, and the **Skin** name.

You can re-configure these values by pressing the **Configure** button. It shows a configuration dialog where you can select skeleton, atlas, and skin:

That’s the only way of changing the skeleton and atlas of an object, but you can change the skin straight in the **Skin** parameter:

The **Data Key** and **Atlas Key** properties can be set to the Spine object only via the constructor. For that reason, the scene compiler uses the especial **xargs** argument to set these properties on nested prefabs. Learn more about the xargs.

## Bounds provider properties

The bounds provider is responsible for computing the size of the SpineGameObject. By default, it uses the setup pose bounding box. There are two built-in implementations of the bounding box: the **SetupPoseBoundsProvider** (default) and the **SkinsAndAnimationBoundsProvider**.

The **Spine** section in the Inspector view contains the parameters for setting the bounding box to the game object:

With the **BP Type** you select the bounds provider type: **SETUP\_POSE** ( ```SetupPoseBoundsProvider``) or **SKINS_AND_ANIMATION** (``` SkinsAndAnimationBoundsProvider\`).

The other parameters are only valid if you select the **SKINS\_AND\_ANIMATION** bounds provider. This provider uses an animation and an array of skins for computing the bounds.

You can select the skins for the bounds provider in the **BP Skin** parameter. It gives you two options: **CURRENT** (uses the current skin in the game object) or **ALL** (uses all skins available in the game object’s skeleton data).

With the **BP Animation** parameter you can select what animation to use for the bounds provider. It lists all the animations available in the skeleton data.

With the **BP Time Step** parameter you can set the precision of the algorithm for computing the bounding size. A smaller time step means more precision, but slower calculation.

## Animations properties

The **Spine Animation** section contains the animation properties.

**Time Scale**: To play the animations and mixes slower or faster. Default `1`.

**Default Mix**: The mix duration to use when no mix duration is defined in the between two animations.

**Mixes**: The mix duration between two animations.

The **Mixes** button shows the number of defined animation mixes. Click on it to edit the mixes. It opens the Spine Game Object preview dialog where you can edit and preview the mixes:

## SpineGameObject in-scene preview

De la misma forma que puedes previsualizar las sprite animations y los particle emitters, también puedes visualizar las Spine animations en la propia escena del editor.

To enable the in-scene preview, you must first select the \* **Run Preview Animation** option from the **Spine Preview** section. The following parameters **Preview Loop**, **Preview Time**, and **Preview Animation** are only dedicated to the in-scene preview, and do not affect the state of the object in the game.

The **Preview Animation** will select the animation to preview. The **Preview Loop** will play the animation in a loop. The **Preview Time** will advance the preview animation to the given time in milliseconds. It doesn't require that you run the update loop. It is useful to get a static preview of the animation at a specific moment.

That's important that you have enable the update loop in the scene editor, otherwise the preview animation will not run smoothly.

## SpineGameObject preview window

You can preview a SpineGameObject by pressing the **Preview Window** button in the **Spine Preview** section.

It opens the a preview dialog where you can select the animation name, the animation track, and other parameters.

This dialog is similar to the Spine Preview dialog, but it also allows editing some properties of the game object, like the default mix, the animation mix, and the time scale:

The dialog has two sections: **Preview** and **Settings**. The Preview section has the **Preview Track**, **Preview Animation**, **Preview Loop**, and **Preview Events** parameters. It works just like in the Spine Preview dialog, and it doesn’t affect the object state.

The **Settings** contains the **Time Scale** and **Default Mix** parameters. If you change those parameters and press the **Update** button, then values are set to the game object and persisted in the scene.

In addition, you can set the animation mix values of the game object:

Learn more about the Spine animation concepts

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Creating a SpineGameObject

SpineGameObject user properties

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/tilemap-object

# Tilemap

The Tilemap is a built-in Phaser type: Phaser.Tilemaps.Tilemap. It is not a display object, it just stores the data of the maps. The display maps are added to the scene using TilemapLayer objects.

The Scene Editor only supports maps created by Tiled (the popular third-party tool) with the JSON format. Since Phaser v3.50, the following map orientations are supported: Orthogonal, Isometric, Hexagonal, and Staggered.

This is the workflow:

- Create a map with Tiled.
- Export the map using the JSON format.
- Import the map (and the tileset images) into Phaser Editor using the Asset Pack Editor.
- Create a Tilemap object (and TilemapLayer objects) in the Scene Editor.

To create a Tilemap object, you can drag the **Tilemap** element from the Blocks view and drop it into the scene:

Immediately, it shows a wizard to configure the Tilemap. This wizard shows three pages:

- A page to select the tilemap key (defined in the Asset Pack Editor).
- A page to assign the images to the tilesets of the tilemap.
- A page to select a tilemap layer to be created together with the tilemap. But this one is optional.

The first step is to select the **Tilemap Key**. It is the same key you used to import the Tiled JSON map in the Asset Pack Editor:

Then, the wizard shows the name of the tilesets, and you have to select the image for each tileset. Select a tileset and click on the **Set Tileset Image** button. It opens a dialog with all the images (and sprite-sheets) defined in the Asset Pack files. Also, you can double click on the tileset name to open the dialog:

When all the tileset images are set, the **Finish** button is enabled. Click on it to finish the process. Or you can continue to the next page to select a Tilemap Layer. In that case, a new Tilemap and Tilemap Layer are created.

Because a Tilemap is not a display object, it is not shown in the scene, else in the Outline view, together with the tilesets:

When you select a Tilemap, the Inspector view shows some of its properties:

Also, if you select the tileset the Inspector view show its properties and the option to change the associated image:

Tilemap objects are code-generated by the scene compiler using the tilemap factory . And the tileset images are created using the Tilemap.addTilesetImage method:

```hljs javascript
Copy// super_mario_1
const super_mario_1 = this.add.tilemap("super-mario_1");
super_mario_1.addTilesetImage("SuperMarioBros-World1-1", "super-mario");

By default, a Tilemap is created with a CLASS scope. It means, a field code is generated to reference the object, so you can manually configure other aspects of the map or manually create the layers:

```hljs javascript
Copythis.super_mario_1 = super_mario_1;

However, for creating the layers, you have the TilemapLayer objects support in the Scene Editor, which is explained in the next section.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

BitmapText

TilemapLayer

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/sprite-object

# Sprite

The Sprite is a built-in Phaser object type: Phaser.GameObjects.Sprite. It is like the Image type, but also it can play sprite animations. This means, that you may use a Sprite object only if it will be animated in the game, otherwise, the better is to use an Image.

A Sprite is created in code using the sprite factory. This is how the scene compiler generates the code of a Sprite:

```hljs javascript
Copyconst player = this.add.sprite(192, 512, "dragon-atlas", "idle-000");

To create a Sprite object, you can:

- Drop a Sprite built-in block on the scene:

- Drop an animation block on the scene:

- Or you can convert an Image or TileSprite into a Sprite.

Learn more about type conversion

If you create a sprite, probably you want to play an animation with it. To do this you can set the Animation properties.

The Sprite type has properties common to other object types:

- Variable properties
- Lists properties
- Transform properties
- Origin properties
- Flip properties
- Visible property
- Alpha properties
- Animation properties
- Texture property

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Image

TileSprite

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/shape-triangle-object

# Triangle

TODO

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Ellipse

Polygon

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/nine-slice-object

# NineSlice

The Nine Slice is a built-in Phaser object type: Phaser.GameObjects.NineSlice. This type allows you to display a texture-based object that can be stretched both horizontally and vertically, but that retains fixed-sized corners.

A Nine Slice is created in code using the nineSlice factory. This is how the scene compiler generates the code of a Nine Slice:

```hljs javascript
Copyconst nineslice = this.add.nineslice(
0, 600, // x, y
"ui", "green-button", // texture, frame
300, 200, // width, height
70, 70, // leftWidth, rightWith
60, 60); // topHeight, bottomHeight

To create a Nine Slice object in the scene, you should follow these steps:

- Drop a NineSlice built-in block on the scene:

- Select a texture for the object by pressing X or opening the Texture Dialog in the Texture section:

- Change the size of the object. In the Size section, you can set the width and height of the object. Also you can use the Resize tool (press the `Z` key):

- In the Nine Slice properties section, change the size of the slices. Also you can activate the Nine Slice tool, and change the sizes in the scene:

By the way, you can convert an Image or Sprite or any other game object into a Nine Slice.

## Nine Slice properties

The Nine Slice type shares properties with other object types:

- Variable properties
- Lists properties
- Transform properties
- Origin properties
- Size properties
- Visible property
- Alpha single property
- Tint properties
- Texture property

But also it has particular properties:

- The leftWidth and rightWidth properties. It changes the size of the horizontal slices.
- The topHeight and bottomHeight properties. It changes the size of the vertical slices.

## Three Slice mode

The NineSlice object can be created with only three horizontal slices. This is an optimization for objects you only need to stretch horizontally. This optimization is activated if you set the **top** and **bottom height** to `0`.

In Phaser Editor, we provide a **ThreeSlice** blocks for creating this particular configuration of the Nine Slice object. You can drop this block into the scene for creating the object:

When the Nine Slice object is in the 3-slices mode, you can change the size of the slices with the Slice Tool and the **Three Slice properties** section. Note it only shows the width properties and manipulators:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

TileSprite

Text

---

# https://docs.phaser.io/phaser-editor/scene-editor/script-node/script-node-vs-user-component

# Script Nodes vs User Components

Now you have two mechanisms for assigning behaviors to an object: the ScriptNode and the user components, and you have to decide when to use one or another. In this chapter, we try to provide you with a small guide.

**When to use a User Component?**

Many users find a user component very handy because you can edit its properties right away, in the same place as the object’s properties. You don’t need to browse an object’s tree of nodes. Also, components are familiar philosophy in the Phaser API. However, user components have a main restriction: it has a one-to-one relationship with the object. It means, you can assign only a single type of component to the object, so it should implement the whole behavior as a unit.

These are some examples of modeling behaviors with user components:

- An **AutoplayAnimation** user component that you can add to sprites. It has an **animationKey** property that is played automatically. Because you can play only one animation at a time in a sprite, it fits well in the one-to-one relationship constraint of user components.
- A **BorderAnchor** component, with an **anchorTo** property with values like `left`, `top`, `right`, `bottom`. This component will auto-re-position the object in a responsive scene. Because an object has only one position, it fits in the one-to-one restriction of user components.
- A **DurationConfig** component, with info about the duration of an animation. You can add it to a script node or a prefab, that performs an animation. It means you can use a user component for adding extra configuration to a certain action or object.

**When to use a Script Node?**

The script nodes are logical game objects and you can make prefabs of them. The prefabs system in the editor is powerful and you can express complex behaviors in a hierarchical relationship. Also, you can add script nodes not only to objects else to scenes too. However, it is very easy you start abusing the use of script nodes and making large hierarchies of logical nodes. We think for now it isn’t a good idea, but in the end, it is up to you.

Script nodes are very flexible, and you can model different behaviors, however, it has worked better for us to use the concept of event and action. That is, you create a group of script nodes that cover the events of your game, and another group of script nodes that cover the actions. This way, you can combine events and actions to create complex behaviors.

If you take a look at the @phaserjs/editor-scripts-quick library, it contains a series of script nodes that cover common events and actions in a game. You can use this library as a basis for your own script nodes.

Here are some of the behaviors you can express with this library:

- When you click on a button, the X scene starts.
- When you click on a button, it plays a sound.
- When two objects collide, play an animation, play a sound, and destroy the second object.
- When the scene starts, do a fade-in animation of an object.
- When the scene starts, moves an object from the bottom edge of the screen to its original place.

As we said previously, it is up to you when to use the script nodes and how much you split the behaviors in a tree of small logical units. Our advice is to keep it simple and learn first from your game before making a complex framework of script nodes.

If you are an advanced coder, you may find script nodes too cumbersome, and you may be right. However, perhaps you can design your own script nodes so that others in the team can create game prototypes more quickly.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Script Nodes

Script Nodes libraries

---

# https://docs.phaser.io/phaser-editor/scene-editor/user-components/user-components-compiler

# The User Components compiler

The user components are configured in `*.components` files and used by the Scene Editor. It is a concept of Phaser Editor, not Phaser. So we use the same Scene Editor philosophy, it compiles our custom configurations into plain, readable, fully Phaser compatible code.

Following, look at how an **HorizontalMove** component is compiled into JavaScript.

The component information:

The properties of the component:

**Horizontal Velocity**

**Min X**

**Max X**

The generated code:

```hljs javascript
Copy// You can write more code here

/* START OF COMPILED CODE */

class HorizontalMove extends BaseComponent {

constructor(gameObject) {
gameObject["__HorizontalMove"] = this;

/** @type {Phaser.GameObjects.Image} */
this.gameObject = gameObject;
/** @type {number} */
this.horizVelocity = 0;
/** @type {number} */
this.minX = 0;
/** @type {number} */
this.maxX = 3070;

/* START-USER-CTR-CODE */
// Write your code here.
/* END-USER-CTR-CODE */
}

/** @returns {HorizontalMove} */
static getComponent(gameObject) {
return gameObject["__HorizontalMove"];
}

/* START-USER-CODE */
// Write your code here.
/* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here

The generated class is very simple, next we explain it part by part:

## The super class

If a value (in this case `BaseComponent`) is set to the **Super Class** parameter. Then the class code is generated like this:

```hljs javascript
Copyclass HorizontalMove extends BaseComponent {
...
}

A super class allows to create behaviors that are common to certain components, or provide helper methods. It is the case of the **UserComponent** class, explained in the Starting and updating the User Components section.

## The constructor

The component has a constructor where all properties are initialized and you can add your initialization code too.

The constructor is used to create the component and add it to the game object:

```hljs javascript
Copyconst enemy = this.add.image(...);
const enemyMove = new HorizontalMove(enemyMove);
enemyMove.maxX = 400;

## The component accessor method

The `getComponent()` method gets the component from a game object, if exists:

```hljs javascript
Copyclass HorizontalMove {

...

/** @returns {HorizontalMove} */
static getComponent(gameObject) {
return gameObject["__HorizontalMove"];
}
}

// in a random part of the game
const enemy = ...;
const horizMove = HorizontalMove.getComponent(enemy);
horizMove.minX = 10;

## The user members of the component

You can add members to the component class. Just write them inside the `/* STAR-USER-CODE */` and `/* END-USER-CODE */` comments.

Probably, you would like to write a **start** and **update** method, like is explained in the Starting and updating components section.

## Compiler settings

The User Components compiler supports two JavaScript and TypeScript as output languages. You can select this language in the Inspector view, when no component is selected. Also, you can select if insert spaces for indentation, the tab size, or the auto export/import of ES modules:

The settings have default values, but if there are other scene files or user components files, the default values will be taken from the latest modified file (scene file if not components files are available).

When the **Export Class (ES Module)** parameter is on, the compiler includes the `export default` class modifiers.

When the **Auto Import (ES Module)** parameter is on, the compiler adds “import” statements for importing the types used in different parts of the code generation. Code written by the user is not processed. If you use other types, you should import them manually.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

User Components Editor

Implementing behaviors with the Phaser events

---

# https://docs.phaser.io/phaser-editor/scene-editor/script-node/script-node-class

# The ScriptNode class

When you create an instance of a ScriptNode, the scene compiler generates a code like this:

```hljs javascript
Copynew ScriptNode(parent);

It means it creates an instance of the `ScriptNode` class. But this class is not part of the Phaser API, it is a class you should code yourself.

The protocol of this class is simple, it needs a constructor that receives a parent argument. Something like this:

```hljs javascript
Copyclass ScriptNode {

constructor(parent) {
}
}

It is simple, but if you need to, you can create a prefab with more features, like handling children, events, etc…

The good news is that this class is included in the Phaser Editor project templates. If your project is not based on a template, you can install it from the `@phaserjs/editor-scripts-core` script library. Learn more about the script libraries.

Also, Phaser Editor can generate the default implementation of this class for you, with the basic features:

1. In the Files view, select the folder when you want to add the class file.
2. Open the Command Palette ( `Ctrl+K`) and search for `script`.
3. Select the command with the desired format (TypeScript, JavaScript, ES modules,…).
4. **Execute** the command and it generates the class file in the selected folder.

This built-in class the editor provides contains a couple of features:

- Keeps a reference to the scene, the game object, and the parent.
- Manages an array of the children nodes.
- Registers listeners to the scene and game object for implementing the **awake**, **start**, **update**, and **destroy** events. It follows the same logic as the User Components events.
- Provides an interface for “action nodes”.

## The parent

When a new instance of the `ScriptNode` class is created, it receives a parent node as an argument. This parent could be a scene, a game object, or another script node.

The script node instance keeps a reference to the parent, but also keeps a reference to the game object and the scene. Sure, if the node is added to a scene, the game object reference is not updated, it keeps `undefined`.

Related to the parent, the class provides the following properties:

- `parent()`: it’s type is `Phaser.Scene | Phaser.GameObjects.GameObject | ScriptNode`.
- `gameObject()`: it’s type is `Phaser.GameObjects.GameObject | undefined`.
- `scene()`: it’s type is `Phaser.Scene`.

## The children

The `ScriptNode` class has an array of nodes for keeping the children. This array is updated when a new node is created. It also provides some related methods:

- `children ()`: A property for iterating the children.
- `add()`: A method for adding new children. This method is called automatically when a new child is created.

## The events

The `ScriptNode` class provides a couple of methods for handling special events that may help you implement the behaviors. It works just like the User Components events. The methods are:

- `awake()`: It is called when all the objects of the scene are created. The values of the user properties (prefab) will be available at this time, so you can override this method for making computations that require the value of the properties. It works like the UserComponent “awake” method.
- `start()`: It is called the first time the scene updates.
- `update()`: It is called each time the scene updates.
- `destroy()`: It is called when the game object is destroyed or the scene is shut down.

## The action methods

We find it convenient to establish a protocol for action script nodes. An action script is a script node that will execute a certain task. For that purpose, the class provides the following methods:

- `execute()`: Contains the code of the action.
- `executeChildren()`: Executes the children.

In the next chapter, we mention a project with basic node implementations that you can include in your game. These scripts provide a protocol or style you can adopt for your game.

## The action’s target

Most of the action nodes modify or read the game object of the node. This is fine for a lot of cases, but a bit limited. Let’s see an example.

You want to make a collider between a player object and a list of coin objects and destroy the coin when the player touches it:

We have a **Make Collider Action** node that you can add to the player. This node has a parameter to select the other object you want to collide with. In this case, it is a container with the coins:

When the collision happens, the collider node executes the children and passes the two objects as arguments. In the first argument goes the player, and in the second argument goes the coin.

So, we add **Destroy Object Action** to the collider node. This node is an action to destroy an object. By default, it destroys the game object associated with it: the player. But we want to destroy the coin, not the player. So we need to change the target of the destroy action from the game object to the second argument.

To do this, we add the **Action Target Config** user component to the destroy object action, and set the **Target** to **ARG\_2**. The destroy action then will get the second argument and destroy it.

The **Target** parameter shows an array of options, **GAME\_OBJECT** (default), **ARG\_1**, …, **ARG\_8**.

In addition to the **Target**, you can set the **Target Name** of the action. This name is only about syntax sugar and makes the node more readable in the Outline view. Look in the previous screenshot, the node starts with the value of **Target** plus the **Target Name**.

## Custom action script node

Making a new action node is very simple. Just create a prefab of a **Script Node**, and implement the `execute()` method. If you want to support the **Action Target Config** component, you can use the `ScriptNode.getActionTargetObject()` utility method:

```hljs javascript
Copyexecute(...args: any[]) {

const obj = this.getActionTargetObject(args);

obj.doSomething();
}

That utility method does the following:

- Check if the **Action Target Config** user component is present in the node. If it is present and has a target configured to return an argument, then returns the right argument.
- Else, it returns the node’s game object.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Creating a Script Node

Making a ScriptNode prefab

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/image-object

# Image

The Image is a built-in Phaser object type: Phaser.GameObjects.Image.

You can create an Image object by dropping an Image built-in type or texture from the Blocks view.

The main difference between an Image and a Sprite is that the Image objects cannot play sprite animations.

An Image is created in code using the image factory. This is how the scene compiler generates the code of an Image:

```hljs javascript
Copyconst branch_1 = this.add.image(192, 512, "atlas-props", "branch-01");

The Image has properties common to other object types:

- Variable properties
- Lists properties
- Transform properties
- Origin properties
- Flip properties
- Visible property
- Alpha properties
- Texture property

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Game Object common object properties

Sprite

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/tile-sprite-object

# TileSprite

The Tile Sprite is a built-in Phaser object type: Phaser.GameObjects.TileSprite. This type allows creating objects with repeating textures, like background elements.

A Tile Sprite is created in code using the tileSprite factory. This is how the scene compiler generates the code of a Tile Sprite:

```hljs javascript
Copy// x = 0, y = 600, width = 600, height = 800, texture = "rocks_1"
const rocks = this.add.tileSprite(0, 600, 800, 225, "rocks_1");

To create a Tile Sprite object in the scene, you can drop a TileSprite built-in block on the scene.

Or convert an Image or Sprite into a Tile Sprite.

## Tile Sprite properties

The Tile Sprite type shares properties with other object types:

- Variable properties
- Lists properties
- Transform properties
- Origin properties
- Size properties
- Flip properties
- Visible property
- Alpha properties
- Texture property

But also it has particular properties:

- The width and height size properties. If the size of the object is bigger than the original texture, then the object is rendered repeating the texture. You can change these properties in the Inspector view or using the Resize manipulator tool: press the `Z` key or select **Tools** → **Resize Tool** in the context menu.
- The tilePositionX and tilePositionY properties. It changes the offset of the original texture rendering. You can modify it in the Inspector view.
- The tileScaleX and tileScaleY properties. It changes the scale of the original texture rendering (not the scale of the object). You can modify it in the Inspector view.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Sprite

NineSlice

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/bitmap-text-object

# BitmapText

The Phaser.GameObjects.BitmapText is widely used in Phaser game development, to display texts.

You can create a Bitmap Text object in two ways:

- Dragging a BitmapText built-in block and dropping it on the scene.
- Dragging a BitmapFontFile key from the Blocks view and dropping it in the scene. The BitmapFontFile should be present in an Asset Pack file.

Bitmap Text objects are created in code using the bitmapText factory:

```hljs javascript
Copythis.add.bitmapText(100, 150, "desyrel", "Hello bitmap text!", 70, 0);

## The Bitmap Text properties

The Bitmap Text type contains many of the common object properties:

- Variable properties
- Lists properties
- Transform properties
- Origin properties
- Flip properties
- Visible property
- Alpha properties

It also contains the Text property, that is dedicated to all the objects with texts, and its specific properties:

- The font property shows the key of the BitmapFont in the Asset Pack file. To change the font, click on the button. It opens the **Select Bitmap Font** dialog.

- The fontSize property.
- The align property.
- The letterSpacing property.
- The dropShadow related properties.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Text

Tilemap

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/shape-object

# Shape

The Shape objects are geometric-based display objects. You can add them to a Scene, a Container or a Group.

All Shape objects extends the Phaser.GameObjects.Shape class and share these common properties:

- Variable properties
- Lists properties
- Transform properties
- Origin properties
- Size properties
- Visible property
- Alpha properties

But they have the following properties:

- Is Filled: Controls if this Shape is filled or not. Note that some Shapes do not support being filled (such as Line shapes).
- Fill Color: The fill color used by this Shape.
- Fill Alpha: The fill alpha value used by this Shape.
- Is Stroked: Controls if this Shape is stroked or not. Note that some Shapes do not support being stroked (such as Iso Box shapes).
- Stroke Color: The stroke color used by this Shape.
- Stroke Alpha: The stroke alpha value used by this Shape.
- Line Width: The stroke line width used by this Shape.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Editable Tilemap Layer

Rectangle

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/layer-object

# Layer

The Phaser.GameObjects.Layer object type allows grouping objects. Unlike the Container objects, a layer cannot be transformed. It doesn’t have position, angle or scale. Its only purpose is to sort the objects for rendering, quickly.

Learn more about Layers in the Phaser docs.

Learn more about working with parent objects in the Scene Editor.

You can create a Layer by dropping a Layer built-in block on the scene, or with the Create Layer with Selection command.

The code generated by the scene compiler, to create a Layer, is like this:

```hljs javascript
Copy// create the layer
const layer_1 = this.add.layer();

// create an object and add it to the layer
const someObject = ... ;
layer_1.add(someObject);

## Grouping objects in a Layer

You can create a layer with a couple of objects. You can do this by selecting the objects and executing the Create Layer with Selection command. The command is available in the Parent context menu.

When you execute the command, the selected objects are removed from the original parents and added to the new layer. All objects keep the same absolute position. If all objects are children of a common layer, then the new layer will be added to the original parent layer.

## Layer properties

The Layer type contains some of the common object properties:

- Variable properties
- Lists properties
- Children properties
- Visible property
- Alpha property

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Container

Video

---

# https://docs.phaser.io/phaser-editor/scene-editor/layout-tools/layout-tools-align

# Align layout tools

The Align tools provides shortcuts for laying out objects in the same line. The alignment line could be one of the following: **Left**, **Center**, **Right**, **Top**, **Middle**, and **Bottom**.

Let’s see the lines starting with this configuration:

**Align Left**

Align to the vertical line with a minimus X:

**Align Center**

Align to the vertical line with the average X:

**Align Right**

Align to the vertical line with a maximum X:

**Align Top**

Align to the horizontal line with a minimus Y:

**Align Middle**

Align to the horizontal line with the average Y:

**Align Bottom**

Align to the horizontal line with a maximum Y:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Layout tools

Align To Border layout tools

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-instance-children

# Adding children to a prefab instance

Since v3.35.0 of Phaser Editor you can add children to a prefab instance. Sure, it should be an instance of a Layer or Container prefab.

For backward compatibility, this behavior is disabled by default in prefabs. You should enable it in the Children properties section, setting on the **Allow Append Children** parameter. It means you have to checkmark that parameter in a Container or Layer prefab or nested prefab.

This is a handy feature for creating reusable objects. Let’s see the next example.

We want to create a reusable dialog object that we can use for showing _Level Complete_ dialog or a _Game Paused_ dialog.

We create a **DialogPrefab** with a basic structure: a **background** image and a close button. In addition to the structure, it also has a basic behavior: it animates from the bottom of the screen and if you click the **close** button it closes the dialog:

Some considerations:

- For allowing adding new children to the prefab instances, we should check the **Allow Append Children** parameter we mentioned before.
- Maybe we want to change the texture of the **close** button in prefab instances, so we make it a nested prefab.

Now let’s create the **LevelCompleteDialogPrefab**. It is a new prefab that is a variant of the **DialogPrefab**. It means, the `LevelCompleteDialogPrefab` class extends the `DialogPrefab` class. In this new dialog, we add the **Level Complete** message and three reward stars and change the texture of the **close** button (to green).

Notice the new **levelCompleteRibbon**, and the **star1**, **star2**, and **star3** objects, are children of an instance of the **DialogPrefab** prefab. In previous versions of the editor, for getting a similar structure, you had to wrap a **DialogPrefab** with a new container and add the new objects to it. But now, you can add new children to the same prefab instance and at the same time, it inherits the behaviors of the **DialogPrefab**. It doesn’t require any manual delegation of behaviors.

As result, we get the following code of the `LevelCompletePrefab` class:

```hljs javascript
Copyclass LevelCompleteDialogPrefab extends DialogPrefab {

constructor(scene: Phaser.Scene, x?: number, y?: number) {
super(scene, x ?? 400, y ?? 303);

this.closeButton.setTexture("Button Pack - Green_Button Green - Close");

// levelCompleteRibbon
const levelCompleteRibbon = scene.add.image(0, -30, "Casual Game GUI_Attribute - Ribbon Green");
levelCompleteRibbon.scaleX = 0.5;
levelCompleteRibbon.scaleY = 0.5;
this.add(levelCompleteRibbon);

// star1
const star1 = scene.add.image(-89, 81, "Casual Game GUI_Icon - Star Yellow");
star1.scaleX = 0.5;
star1.scaleY = 0.5;
star1.angle = -10;
this.add(star1);

// star2
const star2 = scene.add.image(-2, 71, "Casual Game GUI_Icon - Star Yellow");
star2.scaleX = 0.5;
star2.scaleY = 0.5;
this.add(star2);

// star3
const star3 = scene.add.image(85, 81, "Casual Game GUI_Icon - Star Yellow");
star3.scaleX = 0.5;
star3.scaleY = 0.5;
star3.angle = 10;
this.add(star3);
}
}

Following the same pattern then we can create a **PauseDialogPrefab**:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Nested prefabs

Using a prefab as a black box

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-display-properties

# Prefab instance display properties

When you create a prefab instance, the Outline view shows the variable’s name as the display name of the object.

Let’s see this example.

The variable name of the button is **buttonDown**:

… and the Outline view uses the same name for labeling the object:

However, you can change the labeling of the object with a more descriptive name. You can set the **Object Display Name** in the **Prefab Display** properties section of the prefab’s scene:

The display name for the button instances will be `Button - ${action}`. It is a name template with placeholders, and the `${action}` placeholder is filled with the value of the **Action** prefab property of the button.

The `action` name is the variable name of the user property `Action`. You can hover the mouse in the property to get the property information:

Now, the buttons are shown in the Outline view with the new display names. Note the `${action}` expression is replaced by `UP`, `DOWN`, or `FIRE` depending on the value of the **Action** property:

This technique is particularly useful when you add objects but their variable names are not relevant to the game implementation. Or when you want to provide more detailed information about the objects.

This is the case of many script nodes:

In addition to the `${propName}` syntax, you can use a `#{propName}` expression. It will be replaced by the name of the property ( `propName`) if the value of the property is `true`, `undefined`, `""`, or the equivalent in JavaScript.

This is an example. The display name is `Collide #{up} #{down}`. If the value of the `up` property is `true` and the `down` property is `false`, then the final display name will be `Collide #up`.

It means you can use this syntax for showing “tags”.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Creating a prefab instance

Prefab code generation

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/shape-rectangle-object

# Rectangle

You can create a Rectangle by dropping the **Rectangle** block, from the Blocks view, on the scene.

You can change the size of the Rectangle in the **Size section** or you can use the Size tool.

The Rectangle code is generated by the scene compiler using the rectangle object factory:

```hljs javascript
Copyconst rectangle = this.add.rectangle(10, 10, 100, 100);

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Shape

Ellipse

---

# https://docs.phaser.io/phaser-editor/scene-editor/layout-tools/layout-tools-align-to-border

# Align To Border layout tools

Like the Align tools, the Align To Border tools place the objects in a line, but this line is one of the borders or the scene.

The borders of the scene are set in the Scene’s properties.

Starting with this configuration:

The border alignment lines are:

**Left**

**Center**

**Right**

**Top**

**Middle**

**Bottom**

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Align layout tools

Origin layout tools

---

# https://docs.phaser.io/phaser-editor/scene-editor/box2d-physics/box2d-physics-prepare-scene

# Preparing a scene for Box2D physics

Box2D is not a native Phaser API, so some additional steps are required to prepare the project and the scenes where we will create the Box2D worlds.

## Preparing the project

To use Box2D in a Phaser project, you must first add the Box2D library to the project. To do this, you must get the `PhaserBox2D.js` file from its repository, and then copy it to your project.

It is important that you keep the same name of the `PhaserBox2D.js` file, since Phaser Editor will use it to import the library in all the code that is generated.

An easy way to get started with Box2D and Phaser Editor is to create a project using the **Box2D Starter** project template, or the **Angry Balls** example template, available in the desktop version of Phaser Editor.

## Setting up the scene

To get physical bodies with Box2D, you must first create a world where these bodies will exist. Since Box2D is an API independent of Phaser, you must also run some routines to sync the physical bodies with Phaser visual objects.

All this code is generated by Phaser Editor, you just need to enable the corresponding parameters. In the Inspector view, the **Box2D** section is displayed:

By default, the scene does not generate the code to create the world, so the first step is to enable the **Generate Box2D World Code** parameter.

Once enabled, you will be able to verify the creation of the world in your scene:

```hljs javascript
Copy// Box2D world creation
SetWorldScale(40);
const world = CreateWorld({ worldDef: {
...b2DefaultWorldDef()
}});
this.worldId = world.worldId;

As soon as you enable world code generation, a new section appears in the Inspector, where you can configure the world parameters:

### The update method

The Box2D world must be updated in each frame. To do this, you must enable the **Generate Box2D Update World Code** parameter. This will generate the code to update the world in the scene's `update` method:

```hljs javascript
Copyupdate(time, delta) {

WorldStep({ worldId: this.worldId, deltaTime: delta });
UpdateWorldSprites(this.worldId);
}

However, you may need to write your own update method, so you can disable this parameter and write the code manually. In that case, the editor generates an `updateWorld()` method that you can call from your custom `update` method.

This is the method generated by the editor:

```hljs javascript
CopyupdateWord(time, delta) {

And this is how you can call it from your custom `update` method:

this.updateWorld(time, delta);

// your custom code here
}

### The debug draw

In a physics game, it is very useful to visualize the physical bodies. You have two parameters related to debug drawing. The first one is to enable the debug draw in the editor, and the second one is to enable the debug draw in the game (generated code).

So, when you enable **Debug Box2D In Editor**, the scene will display the physical bodies in the editor:

If you enable the parameter **Generate Box2D Debug Code**, the editor will generate the code to draw the physical bodies in the game. In this matter it is important that you copy the `PhaserDebugDraw.js` file in your project, since it contains all the debug drawing routines. You can get it from its repository.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Box2D Physics

Add a Box2D body

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/shape-polygon-object

# Polygon

You can create Polygon object by dropping the **Polygon** block, from the Blocks view, on the scene.

A polygon is made with points. You can edit the points in the **Polygon section** or with the Polygon tool.

The Polygon section shows the Points field. The points are presented as a string of the X Y pairs of the points, separated by a space.

The Polygon tool (that you can activate with the `Y` key) shows the polygon’s points in the scene. It allows you:

- Change the position of a point: drag the point with the mouse cursor.
- Delete a point: move the mouse cursor over the point and press the Delete key (or double click). When the cursor is over the point, it is painted in red color.

- Add a new point: move the mouse cursor over a line. It shows a white handler under the cursor, you can drag it for creating a new point.

The Polygon code is generated by the scene compiler using the polygon object factory:

```hljs javascript
Copyconst polygon = this.add.polygon(10, 10, "0 0 20 70 100 100 80 20");

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Triangle

ParticleEmitter

---

# https://docs.phaser.io/phaser-editor/scene-editor/script-node/script-node-create

# Creating a Script Node

A ScriptNode object shares a lot with the game objects, you can add it to the scene by dragging it from the Blocks view and dropping it on the scene:

That action creates an instance of the ScriptNode class and adds it to the object selected in the scene. If no object is selected, then it adds the script node to the scene.

In addition to an instance of the ScriptNode class, you can add an instance of a ScriptNode prefab: select the **Add Script** option in the **Scripting** context menu or press the **Add Script** command ( `U`).

It opens the **Add Script** dialog. There you can select the script you want to add:

## Browsing the Script Nodes

The script nodes are displayed in the Outline view, below the parent object, or the scene:

Also, you can browse the scripts of an object by pressing the command `Shift+U`. The command is also available in the **Scripting** section of the context menu. That command opens the **Browse Scripts** dialog:

## Code generation of the creation of a script

When you add a ScriptNode to an object, it generates a code like this:

```hljs javascript
CopyeditorCreate() {
// btn
const btn = this.add.image(359, 223, "ui", "btn.png");

// onPointerDownScript
new OnPointerDownScript(btn);
...
}

It is the code generated by the scene compiler when you add a script node prefab. If you add an instance of the built-in ScriptNode, the code is similar, but using the ScriptNode class:

```hljs javascript
CopyeditorCreate() {

// btn
const btn = this.add.image(359, 223, "ui", "btn.png");

// scriptnode_1
new ScriptNode(btn);
...
}

The **ScriptNode** class is not part of Phaser, but it could be generated by Phaser Editor. The next section is about it.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Script Nodes libraries

The ScriptNode class

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/tilemap-layer-object

# TilemapLayer

A **Tilemap Layer** is a display object that shows a map based on tiles. There are two Phaser built-in types dedicated to this, the StaticTilemapLayer and the the DynamicTilemapLayer.

The main difference is that a static layer is read-only but faster, while you can modify the tiles of a dynamic layer.

To create a tilemap layer, first, you have to create a Tilemap object. Then, you can drag the **StaticTilemapLayer** or **DynamicTilemapLayer** from the Blocks view and drop it in the scene:

The Scene Editor does not support empty tilemap layers, and you have to select one of the layers defined in any of the tilemaps created in the scene:

And that’s all, the tilemap layer is displayed in the scene:

When you save the scene, the scene compiler generates the code of the tilemap layer using the createStaticLayer or createDynamicLayer methods.

In the next code, a new static layer is created, using the the `World1` layer data and the `SuperMarioBros-World1-1` tileset:

```hljs javascript
Copy// world1
super_mario_1.createStaticLayer("World1", ["SuperMarioBros-World1-1"], 107, 110);

A layer may use only a subset of the tilesets defined in a tilemap. The compiler scans all the layer’s tiles and uses as argument only the name of the tilesets referenced in the tiles.

A tilemap layer has a lot of utility methods and properties, so probably you may want to assign it to a field by setting its variable scope to `Class`.

When you select a tilemap layer, the Inspector view shows some of the properties of the layer (all of them are read-only):

Also, because it is a display object, other common properties are available:

- Variable properties
- Lists properties
- Transform properties
- Visible property

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Tilemap

Editable Tilemap

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/editable-tilemap-layer-object

# Editable Tilemap Layer

The **Editable Tilemap Layer** is an object of type Phaser.Tilemaps.TilemapLayer that you can create using the tilemap editor included in Phaser Editor. This object is similar to TilemapLayer only instead of loading the tilemap from an external file designed in a third-party tool, the Editable Tilemap Layer can be edited in the scene editor.

When you select an object of this type, you can perform the operations common to all game objects, such as editing it, deleting it, moving it in the display list, etc... However, what you will generally need to do is edit its content, the tilemap. To do this, you must select the tilemap it belongs to and use the tools provided. Click on the **Edit Map** button or press the `P` key. In the EditableTilemapLayer section you will find a guide to editing the map.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Editable Tilemap

Shape

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-code

# Prefab code generation

A Prefab file is a scene and is compiled into JavaScript (or TypeScript) code. A regular scene file is compiled into a class that extends the Phaser.Scene class. It is a scene after all. However, the Prefab file is compiled into a custom object class.

The Prefab class generated by the scene compiler extends a game object class, like an Image, a BitmapText, etc… or another prefab class.

This is the code generated after compile the **Dragon** prefab:

```hljs javascript
Copyclass Dragon extends Phaser.GameObjects.Image {

constructor(scene, x, y, texture, frame) {
super(scene, x ?? 100, y ?? 100, texture || "dragon", frame ?? "dragon/flamming_00");

this.scaleX = 0.7;
this.scaleY = 0.7;
}
}

Note the Prefab class extends the Phaser.GameObjects.Image class, because the prefab object is an Image.

The constructor of the **Dragon** class has the same arguments of the Image class, but by default, it uses the texture set in the prefab object. Also, in the body of the constructor, are set the properties modified in the prefab object:

```hljs javascript
Copythis.scaleX = 0.7;
this.scaleY = 0.7;

When the scene compiler compiles a regular scene file, the prefab instance in it are generated as instances of the Prefab class:

```hljs javascript
Copyclass Level extends Phaser.Scene {

constructor() {
super("Level");
}

create() {
...

// create the instance of the Dragon prefab class
const dragon = new Dragon(this, 190, 120);
// add the instance to the display list
this.add.existing(dragon);
// modify the 'angle' property of the instance
dragon.angle = -30;
...
}
}

Also, the Prefab class can be instantiated manually by you, at any time in your game. It is just a custom object class that looks like if you write it by hand.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Prefab instance display properties

Changing a property of a prefab instance

---

# https://docs.phaser.io/phaser-editor/scene-editor/arcade-physics/arcade-physics-add-object

# Creating Arcade Image and Sprite objects

The simplest way of creating an object with an Arcade physics body is by adding a Phaser.Physics.Arcade.Image or Phaser.Physics.Arcade.Sprite object to the scene. Both types are available in the Arcade section of the Blocks view:

When you drop it to the scene, it shows a dialog for selecting a texture:

Arcade game objects are generated in code with the image and sprite factories of the Arcade physics system:

```hljs javascript
Copy// gorilla
const gorilla = this.physics.add.image(310, 313, "gorilla");
gorilla.body.setOffset(216, 58);
gorilla.body.setSize(186, 365, false);

The **Arcade Image** and **Arcade Sprite** game object types provide helper methods for configuring the physics body. However, you can enable an Arcade physics body in any other game object.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Arcade Physics

Enabling the Arcade physics on a game object

---

# https://docs.phaser.io/phaser-editor/scene-editor/script-node/script-node-prefab

# Making a ScriptNode prefab

The power of the script nodes is that you can create prefabs of them. Prefabs are a central feature of the editor. You are used to create prefabs of your characters, game items, UI elements. Prefabs provide a flexible architecture ( nested prefabs, prefab variants, prefab properties, appendable prefabs) for creating reusable objects. And now it is also available for you to create the behaviors (or part of the beaviors) of your game.

You can create a script node prefab in the same way you create a prefab of a game object:

1. Create a prefab file.
2. Add a script node to the scene.

If you add a script node prefab to a prefab scene, then it creates a prefab variant. It works the same as the game object prefabs. You can add custom properties.

If you are using the built-in ScriptNode class (what we recommend you to do), then you can implement any of the methods provided by that class, like the **awake** or **execute** methods.

The code generated for a script node prefab looks like this:

```hljs javascript
Copy// You can write more code here

/* START OF COMPILED CODE */

import OnEventScript from "./OnEventScript";
import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnPointerDownScript extends OnEventScript {

constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
super(parent);

// this (prefab fields)
this.eventName = "pointerdown";

/* START-USER-CTR-CODE */
// Write your code here.
/* END-USER-CTR-CODE */
}

/* START-USER-CODE */

override awake(): void {

this.gameObject.setInteractive();

super.awake();
}

/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

The above code is TypeScript. It is the implementation of the **OnPointerDownScript**, which is a prefab variant of the **OnEventScript** prefab. Both prefabs are part of the Quick Scripts project.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

The ScriptNode class

ScriptNode's properties

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/text-object

# Text

The Text type allows to create Text objects.

based on HTML fonts. It allows customizing the color of the text, the shadows, the stroke, etc…

You can create a Text object by dropping a Text built-in block on the scene.

Also, using the type replacing dialog, you can convert a Bitmap Text (or any other object) into a Text object.

The Text objects are created in code using the text factory. This is how the scene compiler generates that code:

```hljs javascript
Copyconst text_1 = this.add.text(90, 385, "", {});
text_1.text = "New Text object";
text_1.setStyle({
"backgroundColor":"blue",
"color":"orange",
"fontFamily":"serif",
"fontSize":"60px",
"fontStyle":"bold italic",
"stroke":"orange",
"shadow.offsetX":5,
"shadow.offsetY":5,
"shadow.color":"brown",
"shadow.blur":7,
"shadow.stroke":true,
"shadow.fill":true});
text_1.setPadding({"left":10,"top":10,"right":10,"bottom":10});

## Font family property

One especial property in the Text game object is the **Font Family**. You can write any font name supported by the browser, like "Arial", "Verdana", "Monospace", etc.. or you can use custom fonts loaded in your game.

Phaser provides a simple Loader API to load custom fonts in your games:

```hljs javascript
Copythis.load.font({
key: "Nokia",
url: "assets/nokia.ttf",
format: "truetype",
descriptors: { style: "normal", weight: "400" }
});

Then, you can use the font in your Text objects:

```hljs javascript
Copythis.add.text(x, y, "Hello World", {
fontFamily: "Nokia",
fontSize: 48
});

With Phaser Editor the workflow is same, you can load the font in the Asset Pack editor and use it in the **Font Family** property.

You can follow this steps:

- Upload the font file to the project.

- Select the font file in the Files view:

- Click the **Import as font** button in the Inspector view:

- In the **Font Family** property, you can write the font name or select it from the three-dots menu:

Scott Westover did an amazing video tutorial about how to add custom fonts to a Phaser game. Check it out!

Phaser Editor v4 Tutorial: Native Custom Fonts!

![Phaser Editor v4 Tutorial: Native Custom Fonts!](https://www.youtube.com/watch?v=QnDJkBdAz0k)

## Text type properties

The Text type contains many of the common object properties:

- Variable properties
- Lists properties
- Transform properties
- Origin properties
- Flip properties
- Visible property
- Alpha properties

It also contains the Text property, that is dedicated to all the objects with texts, and its specific properties:

- The TextStyle properties.
- The TextShadow properties.
- The TextPadding properties.
- The TextWordWrap properties.

In the Inspector view, hover the mouse in the label of each property to get a tooltip with the Phaser API.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

NineSlice

BitmapText

---

# https://docs.phaser.io/phaser-editor/scene-editor/layout-tools/layout-tools-grid

# Grid layout tools

The Grid layout tools are place the objects in a grid. You can change some parameters like padding or number columns and rows.

Starting with this configuration:

The different layouts are:

**Row**

Arranges the items in a row. The **Padding** parameter is the space between columns:

**Column**

Arranges the items in a column. The **Padding** parameter is the space between rows:

**Grid**

Arranges the items in a grid (table). The **Columns** parameter sets the number of columns. Items are placed starting in a row, counting the number of columns. The number of rows are computed in dependence of the number or columns and the items.

The **Cell Width** and **Cell Height** parameters set the size of the grid’s cells. If 0, the size is computed with the maximum width and height of all the objects.

The **Padding** parameter is the space between the cells.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Origin layout tools

Sorting layout tools

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-nested

# Nested prefabs

The nested prefab is a powerful concept. Like the overall prefab concept, it is inspired by Unity Engine. Its name describes its purpose: allow nesting prefabs.

There are many cases where your prefab is a compound of objects, and you would like to modify them in prefab instances. For example, look at this **AlienShip** prefab:

It is a container, with an **alien** and a **ship** children.

When you create an instance of the **AlienPrefab** (that is an instance of a container), you can change its position, its scale. It’s custom properties. But you cannot change the properties of the **ship** or the **alien** children.

But if you declare the **alien** and **ship** objects as nested prefab, you can access them in the prefab instance.

For setting an object as nested prefab, you select the **NESTED\_PREFAB** option in the **Scope** parameter of the **Variable** section:

Variables with a **NESTED\_PREFAB** scopes are generated in code as public fields. It is like the **PUBLIC** scope but allowing to modify the object in prefab instances.

## Nested prefab instances

When you create an instance of a prefab that contains nested prefabs, the Outline view shows the nested prefabs. Also, the Scene Editor allows selecting the nested prefab instance:

Note the nested prefab instance **ship** of the **AlienShip**’s prefab instance, has a different texture. Nested prefab instances work just like prefab instances: for changing a property, it first requires unlocking the property:

The code generated for the **alien1** object is like this:

```hljs javascript
Copy// alien1
const alien1 = new AlienShip(this, 142, 398);
this.add.existing(alien1);
alien1.ship.setTexture("shipYellow");

Note the nested prefab instance **ship** is a field of the prefab instance **alien1**.

## The nested prefab constructor and the xargs

In most cases, when the user modifies a property of a nested prefab in the scene, the scene compiler generates a code like the one we saw in the previous example:

```hljs javascript
Copyalien1 = new AlienShip(this, 142, 398);
// ...
// change the texture of the nested prefab instance **ship**
alien1.ship.setTexture("shipYellow");

Where `alien1` is the instance of the parent prefab, and `ship` is the instance of the nested prefab, and `setTexture()` is a method to modify the `texture` property. This is true for the vast majority of object types supported by Phaser, however, there are some object types that only receive their properties in the constructor. This means that once the object is created, it cannot be modified through a property.

Suppose the nested prefab **ship** does not allow its texture to be modified through a method or property, but must be passed in the constructor. However, from the scene we only create the instance of the parent prefab **AlienShip**. It is in the **AlienShip** class where the **ship** object is created:

```hljs javascript
Copyclass AlienShip extends Phaser.GameObjects.Container {

constructor(scene, x, y) {
super()
// ...
this.ship = scene.add.image(10, 10, "shipBlue");
}
}

As you can see, **ship** receives the texture **`shipBlue`** in its constructor. If we want to change the texture of **ship** in the scene, we should pass as argument also the texture of **ship**. It would look something like this:

```hljs javascript
Copyclass AlienShip {
constructor(scene, x, y, key, frame, ship_key, ship_frame) {
// ...
this.ship = scene.add.image(scene, 10, 10, ship_key ?? "shipBlue", ship_frame);
}
}

And the code in the scene would be:

```hljs javascript
Copyalien1 = new AlienShip(this, 142, 398, "shipYellow");

This could be an option, but it has the disadvantage that in cases where the prefab contains several nested prefabs, and in turn each nested prefab has other nested prefabs, the constructor of the parent prefab becomes very long and difficult to read, since it would have to include all the parameters of all the nested prefabs.

Therefore, to simplify the constructor, the scene compiler will use a special argument to the prefab constructor called **xargs** (extra arguments). This argument contains the configuration of all nested prefabs in the format of a plain JavaScript object, and the nested prefabs will access it to take its parameters. The generated code for the above example would look something like this:

In the parent prefab **AlienShip**:

```hljs javascript
Copyclass AlienShip {
constructor(scene, x, y, xargs) {
// ...
this.ship = scene.add.image(scene, 10, 10, xargs?.ship?.key ?? "shipBlue", xargs?.ship?.frame);
}
}

On the scene:

```hljs javascript
Copyalien1 = new AlienShip(this, 142, 398, {
ship: {
key: "shipYellow"
}
});

Suppose the nested prefab **ship** were itself a prefab that has a nested prefab **engine**. In this case, the code in the parent prefab **AlienShip** would look something like this:

```hljs javascript
Copyclass AlienShip {
constructor(scene, x, y, xargs) {
// ...
this.ship = new Ship(scene, 10, 10, xargs?.ship?.key ?? "shipBlue", xargs?.ship?.frame, { ...xargs?.ship, engine: xargs?.ship?.engine });
}
}

y en la escena quedaría:

```hljs javascript
Copyalien1 = new AlienShip(this, 142, 398, {
ship: {
key: "shipYellow",
engine: {
key: "engines",
frame: "red"
}
}
});

So far, only the SpineGameObject type and all Box2D object types are the ones that require the use of the **xargs** argument.

## Things you cannot do with nested prefab instances

In practice, nested prefabs are like prefabs, with certain differences:

(Remember a prefab is a type, a template, and a prefab instance is the realization of the prefab in the scene)

- In code, a prefab is a user JavaScript class. A nested prefab is part of a prefab. It is an object referenced by a prefab class field.
- You cannot define user properties for a nested prefab (check the comment below).
- You cannot delete a nested prefab instance.
- You cannot change the type of a nested prefab instance.

A nested prefab is an object that is part of a prefab. Its type can be a built-in Phaser type or a prefab. You cannot define user properties for the nested prefab if it has a Phaser built-in type. But, if it has a prefab as a type, you can define user properties for that prefab. Saying it in other words. If you need to add custom properties to a nested prefab ( **A**), then you can create a separated prefab scene ( **B**) with user properties, and use that prefab **B** as type creating the nested prefab **A**.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Prefab variants

Adding children to a prefab instance

---

# https://docs.phaser.io/phaser-editor/scene-editor/script-node/script-node-libraries

# Script Nodes libraries

In v3.65 of Phaser Editor we introduced the scripts libraries. A script library is a Node module you can install in your project. It works just like any other Node library. You can create common behaviors for your games and distribute them as a Node library.

In Phaser Editor we created a few libraries with basic behaviors. We should keep working on these libraries adding more behaviors:

- @phaserjs/editor-scripts-base: It is a tiny library with the basic scripts and user components for every game or any other script libraries. It is included by default in all project templates.
- @phaserjs/editor-scripts-quick: This is a larger library with script nodes and user components to cover different areas of game development. It is in active development and should evolve in time adding more events and actions.

Please, check every repository for detailed information.

## Installing a script library

As we mentioned before, the script libraries are just Node modules, and you install them as any other node module:

```hljs bash
Copynpm install @phaserjs/editor-scripts-quick

The next step is to add the library to the `scripts` section of the `phasereditor2d.config.json` file:

```hljs javascript
Copy{
"plugins": [],
"scripts": [\
"@phaserjs/editor-scripts-base",\
"@phaserjs/editor-scripts-quick"\
],
"skip": [\
"dist"\
],
"playUrl": "http://localhost:8080"
}

You can check the libraries are installed in the Files view:

If you look inside the libraries, it contains scene and user component files just like in any project. You can browse, open, and use them as any other script node in your project. Just try not to modify them.

Also, you will notice the script nodes do an extensive usage of the scene display name and the prefab instance display name.

By default, the `node_modules` folder is excluded from the Phaser Editor project. However, when you install a script library, it will include in the project only the files related to the libraries. It means, please, keep excluding the Node modules from your game project.

### Script Node libraries for vanilla JavaScript

Many of you like to code or prototype your games with vanilla JavaScript, with no bundler or compiler. You are covered. In the `browser` folder of every script library, there are the files you can include in your project. Please, read the README file of the library for detailed instructions.

When you “copy” a library into your project, there is a `library.txt` file that contains the version of the library. Also, the editor uses that file to present the library files with a lighter color.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Script Nodes vs User Components

Creating a Script Node

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/spine-game-object

# SpineGameObject

Spine is a popular and powerful editor for making 2D skeletal animations. It provides an official runtime for Phaser.

The SpineGameObject is a Phaser game object for display and control Spine animations.

The Spine Phaser runtime provides a rich set of features for loading, controlling and customizing the Spine animations in a Phaser game. All these features are available to you via the runtime API. In Phaser Editor, as a plus, we are including the basic and most important features into the visual tools. This is a gradual process, but the current set of Spine features supported by Phaser Editor will help you to integrate the Spine animations in your games and boost your productivity.

Because this is a large topic, it has a dedicated chapter in this documentation:

Learn more about Spine animations in Phaser Editor.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Video

Replacing the type of an object

---

# https://docs.phaser.io/phaser-editor/scene-editor/user-components/user-components-start-update-methods

# Implementing behaviors with the Phaser events

Many user components you will create will implement certain behavior of an object. This behavior should be initialized and later updated at every step of the game loop.

Game engines like Unity, that support a similar design pattern, use a Start and Update methods to implement the behavior of the component.

The Phaser framework does not provide a similar approach, components are not part of the Phaser API. However, Phaser provides a lot of events that you can handle and implement the gameplay. For example, you can simulate the Unity scripting using the user components and the Phaser events. You can create an **EventComponent** class that handles the events:

```hljs javascript
Copyclass EventComponent {

/**
* @param {Phaser.GameObjects.GameObject} gameObject
*/
constructor(gameObject) {

this.scene = gameObject.scene;

// first time the scene is updated, call the `start` method
this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
// each time the scene is updated, call the `update` method
this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
// if the object is destroyed, call the `destroy` method
gameObject.on(Phaser.GameObjects.Events.DESTROY, this.destroy, this);
}

start() {
// to be overridden in derived classes
}

update() {
// to be overridden in derived classes
}

destroy() {
// the object is destroyed, so we remove all the event handlers
this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.start, this);
this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
}
}

Then, you can set the **EventComponent** class as super class to all your components:

Now, you can override the **start**, **update**, and **destroy** methods in the component classes.

```hljs javascript
Copyclass HorizontalMove extends EventComponent {

...

update() {

this.gameObject.x += this.deltaX;
}
}

The `EventComponent` class is just an example of what you can do. It has a weak point: not all components need to listen to all the events. It is a waste of resources adding scene listeners in all the cases.

Since v3.13.0, the editor can “write” for you a base class that could be a better solution. However, you can change its code and adapt it to your specific domain. Check the next section for more details.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

The User Components compiler

A base class for your components

---

# https://docs.phaser.io/phaser-editor/scene-editor/user-components/user-components-awake-event

# The awake event

We propose using Phaser events for implementing the User Components behaviors. However, the events provided in Phaser are not enough. When you create a component, all properties are set with the default values. Then, you set the value of each property. However, maybe you want to perform a custom initialization routine after all properties are set.

Looking into the Phaser events, you can do it in the first scene’s update. It means you can listen once for the **UPDATE** event and run the initialization routine. It may work in many cases. But maybe, you want to run this routine just after all properties are set, and before the game starts the update loop.

For this reason, the scene compiler generates code for emitting a custom event, the `scene-awake` event, just after it generates the code that creates the objects in the scene, and all their properties are set:
.. code:

```hljs javascript
Copy// code generated by the compiler:

editorCreate() {

// creates the game object
const dino = this.add.image(400, 240, "FufuSuperDino");

// creates the PushOnClick component
const dinoPushOnClick = new PushOnClick(dino);

// sets the component's properties
dinoPushOnClick.pushDelay = 500;

// emit the scene-awake event, after all objects are created
// and all properties are set
dino.emit("scene-awake");
}

When you implement a component, you can register a listener on the **scene-awake** event:

```hljs javascript
Copyclass PushOnClick {

constructor(gameObject) {
...

this.gameObject = gameObject;

// I register a "pointerdown"
// event for "animating" the game object
// with a push effect

// I set a pixel perfect handler
// with certain alpha-tolerance
const handler = this.scene.input
.makePixelPerfect(this.alphaTolerance);

this.gameObject.setInteractive(handler)

// animate the object with the push effect
this.gameObject.scene.add.tween(...);
});
});
}

/** @type {number} **/
alphaTolerance = 100;
}

In the section A base class for your components), we explain how you can use a common super-class for all the components. It simplifies the listening of Phaser events, and it also includes the **scene-awake** event. So you can rewrite the previous **PushOnClick** component in this way:

```hljs javascript
Copyclass PushOnClick extends UserComponent {

constructor(gameObject) {
super(gameObject);
}

awake() {

// Instead of registering a scene-awake event listener
// you can override this method.

...

this.gameObject.setInteractive(...)
.on("pointerdown", ...);
...
}
...
}

The `scene-awake` event is emitted in the `editorCreate()` method of a scene. So, if you create a new component and this component listens to the `scene-awake` event, then you should emit that event manually:

```hljs javascript
Copyconst comp = new PushOnClick(someSprite);
comp.alphaTolerance = 50;
// emit the awake event so the component can be notified
this.events.emit("scene-awake");

Emitting the `scene-awake` event later in the game is safe because components and prefabs handle this event only once in their lifetime.

The prefabs also listens to the `scene-awake` event. Learn more about it.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

A base class for your components

Adding User Components to a Game Object

---

# https://docs.phaser.io/phaser-editor/scene-editor/arcade-physics/arcade-physics-add-body

# Enabling the Arcade physics on a game object

You can enable an Arcade physics body in any game object:

- Select the object and open the context menu.

- In the **Arcade Physics** menu, select the **Add Body** option.

- Press the `B` key for editing the body’s offset & size:

- Or edit any other body’s property in the Inspector view:

You can remove the body of the object. In the same **Arcade Physics**, select the **Remove Body** option. This option is only available if the selected object is not a built-in Arcade Image or Arcade Sprite object.

When you add a physics body to the object, the code for creating the object is generated like this:

```hljs javascript
Copyconst gorilla = this.add.image(379, 271, "gorilla")
as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
this.physics.add.existing(gorilla, false);

Notice the `as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body }` expression. It is telling to the TypeScript compiler the object created by the the `image(...)` method is an `Image` but also has an Arcade body. That annotation is required for generating valid TypeScript code.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Creating Arcade Image and Sprite objects

Arcade physics body properties

---

# https://docs.phaser.io/phaser-editor/scene-editor/user-components/user-components-create-file

# Create a new User Components file

These are the steps to create a new user components file:

1. Open the New File dialog.
2. Select the **User Components File** option. This opens the **New User Components File** dialog.
3. In the new dialog, select the location of the new file.
4. Write the name of the new file. The `.components` extension is added automatically, if not set.
5. Press the **Create** button. The file will be created and opened in the User Components Editor.

#### WARNING

The `*.components` files are only used by the editor. It is recommended to exclude them from the final release of the game. Only the generated JavaScript files are relevant to the game files.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

User Components

User Components Editor

---

# https://docs.phaser.io/phaser-editor/scene-editor/arcade-physics/arcade-physics-collider

# Arcade physics collider

A Collider is an object for checking collisions between multiple physics objects. The Scene Editor allows creating a collider by dragging it from the Blocks view to the scene:

The collider objects are shown in the **Arcade** section of the Outline view:

When you select it, it shows the collider properties in the Inspector view. Each parameter corresponds to a parameter in the Collider constructor:

The properties are:

- overlapOnly
- object1
- object2
- collideCallback
- processCallback
- callbackContext

The scene compiler verbatim-compies the values of the parameters (excepting **overlapOnly**) into the code. So you can write any JavaScript valid expression as value for the parameter.

In the case of the **Object 1** and **Object 2** parameters, you have the option of selecting the variable name of an object of the scene:

In addition to objects, you can reference an Object List.

So, the collider object is generated in code using the collider or overlap methods of the Arcade Factory class. Something like this:

```hljs javascript
Copyconst collider_stone = this.physics.add.collider(gorilla, stone, this.onCollideGorillaWithStone, undefined, this);

Or, if the **Overlap Only** parameter is selected:

```hljs javascript
Copyconst collider_stone = this.physics.add.overlap(gorilla, stone, this.onCollideGorillaWithStone, undefined, this);

In addition to the Collider properties, it contains the Variable properties.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Arcade physics body properties

Box2D Physics

---

# https://docs.phaser.io/phaser-editor/scene-editor/layout-tools/layout-tools-origin

# Origin layout tools

The Origin tool provides shortcuts for setting the origin to objects and preserving the same prosition:

It is a visual representation of the origin commands.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Align To Border layout tools

Grid layout tools

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-create-instance

# Creating a prefab instance

You can create a prefab instance by dropping a Prefab file into the scene, dragging it from the Files view or the Blocks view.

When the active editor is a Scene Editor, the Blocks view shows the Asset Pack file items and the Prefab files:

You can open the Prefab file of a prefab instance with the **Open Prefab** command. You can press the `F` key or execute the command in the context menu, in the **Prefab** sub-menu:

The Inspector view shows a section for each prefab (and prefab variant) of the selected objects. In the menu of the section, you can click the **Open Prefab** option:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Prefab user properties

Prefab instance display properties

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/video-object

# Video

The Video is a built-in Phaser object type: Phaser.GameObjects.Video.

A Video object is created in code using the video factory. This is how the scene compiler generates the code of a Video:

```hljs javascript
Copyconst player = this.add.video(192, 512, "my-video");

The first two arguments are the position of the video. The last argument `"my-video"` is the key to the video asset in the asset pack.

To create a video object, you can drag the Video block and drop it in the scene:

The video object requires a video file to open. When you drop the Video block, it shows a dialog to select one of the video keys defined in the asset pack files:

Once you select the video key, the video object is created in the scene:

You can create the same video object by dragging the video key from the Blocks view and dropping it in the scene:

## Video properties

The Video object has the following properties:

- **Auto Play**: If checked, the video starts playing when the scene starts.
- **Loop**: If checked, the video plays in a loop.
- **Current Time**: Seek the video to the given time in seconds.
- **Video Key**: The key to the video asset in the asset pack.

To change the video key (file), click on the **Video Key** button. It opens the dialog to select another video key:

In addition to the properties, the Video section has a playback toolbar to play the video in the scene. It has the play, pause, seek to start, and seek to end buttons:

The Video type has other properties that are common to other object types:

- Variable properties
- Lists properties
- Transform properties
- Origin properties
- Flip properties
- Visible property
- Alpha properties
- Tint
- FX Shaders
- Hit Area

## Update loop

The Video object shows the next video frame each time the scene is updated. By default, and for performance considerations, the Scene Editor runs the update loop step by step, only when the user does an operation in the scene. For that reason, you may see that the video doesn't play. To see the video continuously, you can enable the **Run Update Loop** option in the Scene Editor toolbar:

This toolbar also contains a button to mute on/off the audio of all videos in the scene.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Layer

SpineGameObject

---

# https://docs.phaser.io/phaser-editor/scene-editor/box2d-physics/box2d-physics-add-body

# Add a Box2D body

Box2D bodies are independent objects from Phaser game objects, you can add them to a scene or associate them with a game object.

To add a Box2D body to a scene, you have two options:

1. Drag the b2Body block from the Blocks view and drop it into the scene:

2. Open the scene context menu (right-click), and select the **Box2D Physics** → **Add Body To Scene** option:

To add a body to a Phaser game object, you must first select the object in the scene, and then activate the **Box2D Physics** → **Add Body To Sprite** option from the context menu:

\
Once the body is in the scene, you can edit its properties in the Inspector view:\
\

\
## Box2D body transform properties\
\
Since a Box2D body is independent of Phaser game objects, they have position and rotation. However, if the body is attached to a game object, the position of the body is synchronized with the position of the game object, so those fields are disabled.\
\
The Translate and Rotate manipulation tools are also available for Box2D bodies, which is an effective way to adjust the position and rotation of bodies. As mentioned, **Translate** can only be used on bodies that are not associated with a game object.\
\
The following image shows a static body that is not associated with a game object. Visually it corresponds to two stone blocks forming a platform, but in the scene the body is independent of these blocks:\
\

## Box2D body as a variable\
\
\
For Phaser Editor, a Box2D body is not a game object, but it is an object in the scene that shares many characteristics with game objects:\
\
- They are an independent object.\
- You can assign a scope and a name to it, so the editor generates code to access them, such as fields and temporary variables.\
- Although you cannot create a prefab of a Box2D body, you can declare them as a nested prefab.\
- The Variable section is shared by both game objects and Box2D bodies.\
\
## Box2D body as nested prefab\
\
The usual way to configure a Box2D body is through the configuration object that we pass in its constructor. For this reason, the nested prefabs of bodies need a special way to modify their properties. We call this special way **xargs**. You can learn more about **xargs** in the section The nested prefab constructor and the xargs.\
\
Updated onJuly30, 2025, 3:14 PMUTC\
\
* * *\
\
Preparing a scene for Box2D physics\
\
Box2D shapes

---

# https://docs.phaser.io/phaser-editor/scene-editor/user-components/user-components-instancing

# Adding User Components to a Game Object

You can add a user component to an object (entity) in two ways: manually, and with the Scene Editor.

Adding a component to an object manually:

```hljs javascript
Copyconst platform = ...;
const move = new HorizontalMove(platform);
move.minX = 100;
move.maxX = 400;

The constructor of the user component **HorizontalMove** adds the component to the object. You can keep a reference to the component or get the component from the game object, with the **getComponent** method:

```hljs javascript
Copyconst move = HorizontalMove.getComponent(platform);

However, the interesting is adding components to objects in the Scene Editor.

This is possible with the **Add User Component** command:

- Select an object.

- Execute the **Add User Component** command ( `M`). It is also available in the context menu **Scripting** → **Add User Component**.

- The command opens a dialog with all the components defined in the project (grouped by the `*.components` files). Select the one you want to add:

- The Inspector view provides a new **HorizontalMove** section with the properties of the component:

## Generating the code for a component in an object

The user components compiler will generate the code to create the component, just like if you write it by hand:

```hljs javascript
Copy// bridge2 (components)
const bridge2HorizontalMove = new HorizontalMove(bridge2);
bridge2HorizontalMove.horizVelocity = 100;
bridge2HorizontalMove.minX = 10;
bridge2HorizontalMove.maxX = 400;

## Actions for a component

These are the actions associated to the user component of an object:

- **Select Objects With HorizontalMove**: selects in the scene all objects containing the **HorizontalMove** component.
- **Open Definition Of HorizontalMove**: opens the definition of the component in the User Components Editor.
- **Move Up**, **Move Down**: changes the order of the component.
- **Delete**: deletes the component from the object.

## Browsing the User Components in a scene

You can take an overview of all the user components in all the objects of the scene with the **Browse User Components** ( `Shift+M`) command:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

The awake event

Adding User Components to a Prefab

---

# https://docs.phaser.io/phaser-editor/scene-editor/user-components/user-components-super-class

# A base class for your components

In the previous section, we explored how you can implement behaviors by listening to Phaser events. There, we implemented an `EventComponent` base class for all the components.

The components concept provided by Phaser Editor is flexible. However, we think it is a good idea to propose a way of implementing the components.

For this reason, we created a **UserComponent** class that you can use as the base class for all your components. This class is included in the phasereditor2d-scripts-core library and should be included in your project if you created it with a Phaser Editor project template.

Learn more about script libraries

If you are not using script libraries, you have the option of telling the editor to generate the **UserComponent** class and it will create a file and “write the code for you”.

The procedure is simple, just open the context menu of the User Components Editor. In the **Resources** menu, there are options for creating the `UserComponent.js` files in different formats:

The options are:

- **Create UserComponent.js**: creates a `UserComponent.js` file with JavaScript code.
- **Create UserComponent.ts**: creates a `UserComponent.ts` file with TypeScript code.
- **Create UserComponent.js (ES Modules)**: creates a `UserComponent.js` file with a JavaScript file, using the ES module exporting rules.
- **Create UserComponent.ts (ES Module)**: creates a `UserComponent.ts` file with TypeScript code, using the ES module exporting rules.

If the file exists, the editor asks if you confirm replacing it.

You can do this operation just once unless you mess up the file content and want to reset it.

Once the file is created, you can use the **UserComponent** class as the super-class of your components.

## Inside the UserComponent class

In the Implementing behaviors with the Phaser events section, we explain how a component can register listeners to the Phaser events, for implementing a particular behavior. The **UserComponent** class does the same. It listens for Phaser events and calls special methods that could be overridden in derived classes. These are the methods present by the **UserComponent** class:

```hljs javascript
Copyclass UserComponent {

constructor(gameObject) {
// registers the event listeners and call the methods
}

awake() { }

start() { }

update() { }

destroy() { }
}

It registers the event listeners in the constructor:

```hljs javascript
Copyconstructor(gameObject) {

this.scene = gameObject.scene;

const listenAwake =
this.awake !== UserComponent.prototype.awake;
const listenStart =
this.start !== UserComponent.prototype.start;
const listenUpdate =
this.update !== UserComponent.prototype.update;
const listenDestroy =
this.destroy !== UserComponent.prototype.destroy;

if (listenAwake) {

this.scene.events.once("scene-awake", this.awake, this);
}

if (listenStart) {

this.scene.events.once(
Phaser.Scenes.Events.UPDATE, this.start, this);
}

if (listenUpdate) {

this.scene.events.on(
Phaser.Scenes.Events.UPDATE, this.update, this);
}

if (listenStart || listenUpdate || listenDestroy) {

this.scene.events.off(
Phaser.Scenes.Events.UPDATE, this.start, this);
this.scene.events.off(
Phaser.Scenes.Events.UPDATE, this.update, this);

if (listenDestroy) {

this.destroy();
}
});
}
}

But let’s go step by step. First, it checks what events to listen to. Notice that the methods **awake()**, **start()**, etc…, are empty. So, if the component instance doesn’t provide a different implementation for one of these methods, then it means it can skip calling that method. Then the first thing is to know what methods to call:

```hljs javascript
Copyconst listenAwake =
this.awake !== UserComponent.prototype.awake;

const listenStart =
this.start !== UserComponent.prototype.start;

const listenUpdate =
this.update !== UserComponent.prototype.update;

const listenDestroy =
this.destroy !== UserComponent.prototype.destroy;

In the following lines, it adds the listeners to the Phaser events, but only if it is needed:

```hljs javascript
Copy...
if (listenStart) {

this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
}

this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
}
...

At the end of the constructor, it registers a listener to the game object’s destroy event and removes all the listeners. It does it to avoid calling a method if the object is not active.

When you create a new component, you can update it by just implementing the **update()** method:

```hljs javascript
Copyclass RotateObject extends UserComponent {

constructor(gameObject) {
super(gameObject);
}

...

update() {

// this method is called when the scene
// emits the UPDATE event

this.gameObject.angle += 1;
}
}

The **UserComponent** class is “good enough” for many cases, but you can modify it or use a completely different one. Or use the Phaser events directly in your components.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Implementing behaviors with the Phaser events

The awake event

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-new-file

# Creating a prefab file

A Prefab is a scene file that you can create with the New File dialog. In the dialog, select the **Prefab File** option. It opens the **New Prefab** dialog, where you can choose the parent folder and the name for the new Prefab file. That name will be used to generate the class name of the Prefab, so let’s write a valid class name.

Notice that the Prefab file is just a scene file. When it is created, it is empty; you should create an object that will be the prefab object.

Also, you can create a Prefab directly in the Scene Editor. This operation is very handy. You can select and object and convert it to a new prefab:

- Select an object in the scene.

- Open the context menu and select the **Prefab** → **Create Prefab With Object** option.

- It opens the **New Prefab File** dialog. Select the file name and the location.

- The selected object is converted to an instance of the new Prefab. The new Prefab is listed in the Blocks view and is ready to create new instances.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Prefabs

The prefab object

---

# https://docs.phaser.io/phaser-editor/scene-editor/user-components/user-components-in-prefab-object

# Adding User Components to a Prefab

In the previous section we shown how you can add a user component to an object. But, what does happen if you add a user component to a prefab? It is practically the same, but this component will be present in all the prefab instances too.

Let’s see this example of a moving platform prefab. It contains the **HorizontalMove** component:

When you select an instance of this **MovingPlatform1** prefab, it also shows the **HorizontalMove** component, but highlighting that it belongs to the **MovingPlatform1** prefab.

The section’s title contains the component’s name and the name of the prefab it belongs to. The section’s body shows the component’s properties and look you can lock/unlock them:

## Generating the code for a component in a prefab instance

The user components compiler will generate the code to changing the component’s properties like this:

```hljs javascript
Copy// movingPlatform2 (components)
const movingPlatform2HorizontalMove = HorizontalMove
.getComponent(movingPlatform2);
movingPlatform2HorizontalMove.horizVelocity = -50;
movingPlatform2HorizontalMove.minX = 540;
movingPlatform2HorizontalMove.maxX = 1170;

Note it doesn’t create the component, else it gets the component from the **movingPlatform2** prefab instance.

## Hiding a component to the prefab instances

Maybe you don’t want to show the component of a prefab in the prefab instances. Because it is a component with local properties and behaviors and it could be perfectly hidden to the prefab instances. For doing this, you can uncheck the **Export** parameter of the component in the prefab:

## Actions for a component in a prefab instance

These are the actions associated to the user component of a prefab instance:

- **Select Objects With HorizontalMove**: selects in the scene all objects containing the **HorizontalMove** component.
- **Open Definition Of HorizontalMove**: opens the definition of the component in the User Components Editor.
- **Reveal in MovingPlatform1 File**: opens the prefab in a new Scene Editor and selects the **HorizontalMove** component.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Adding User Components to a Game Object

Manipulation tools

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-black-box

# Using a prefab as a black box

At this moment, the Scene Editor supports a small subset of the object types present in the Phaser API. Eventually, we will implement support for all the built-in object types.

However, if you need to add to the scene an object of an unsupported type (a Phaser object type or any other no fully supported by Phaser) you can “cheat” the Scene Editor using a Prefab as a black box.

A Prefab as a black box is a very simple concept: it is a Prefab that is not compiled by the scene compiler, so you should write the code of the Prefab class manually.

For example, let’s say you want to add to the scene some objects with a texture that is generated on the fly, with shapes of random colors and positions. Let’s name them “doodles”.

First, create a texture similar to what you want, at least, with the same dimensions (100x100 in this example).

Something like this:

It is a reference texture. Upload it to the project and add it to the Asset Pack file. You can create a new Asset Pack file that will be used only by the editor, so you can exclude it from the distribution build of the game.

So, create a **Doodle** Prefab with the **doodle** texture:

We have our Prefab. But you want to generate the texture on the fly. To do this, first disable the compilation of the scene, in the Scene compiler settings:

Now that you disabled the code compilation, you have to write the `Doodle` class in the `Doodle.js` file. It is a simple class, it extends the Phaser.GameObjects.Image but instead of a real image texture it will generate its texture, on the fly:

```hljs javascript
Copyclass Doodle extends Phaser.GameObjects.Image {

static ID = 0;
static COLORS = ["red", "blue", "orange"];

/**
* @param scene {Phaser.Scene}
*/
constructor(scene, x, y) {
super(scene, x, y);

// create a new texture key
Doodle.ID++;
const key = "doodle-" + Doodle.ID;

// create a new canvas-based texture and add it
// to the TextureManager with the new key
const texture = scene.textures.createCanvas(key, 200, 200);

// get the context of the texture and draw the random doodle
const ctx = texture.getContext();

ctx.strokeStyle = "black";

// draw 5 shapes
for (let i = 0; i < 5; i++) {

ctx.save();

// add a little rotation to the shape
const angle = Phaser.Math.RND.integerInRange(-10, 10);
ctx.rotate(Phaser.Math.DegToRad(angle));

ctx.beginPath();

// draw a rect, at a random position with a random size
ctx.rect(
Phaser.Math.RND.integerInRange(0, 50),
Phaser.Math.RND.integerInRange(0, 50),
Phaser.Math.RND.integerInRange(20, 50),
Phaser.Math.RND.integerInRange(20, 50));

// fill it with a random color
const color = Phaser.Math.RND.pick(Doodle.COLORS);
ctx.fillStyle = color;

ctx.fill();
ctx.stroke();

ctx.restore();
}

// needed if the game is using the WebGL renderer
texture.refresh();

// set the new texture to the object
this.setTexture(key);
}

}

The **Doodle** Prefab is ready. Open the **Level** scene file and add a couple of **Doodle** prefab instance to it:

Note all **Doodle** instances look the same. The custom code you wrote is executed in the game, not in the editor. The editor is using the `doodle.png` image you created as a reference.

Look in the `Level.js` file: the prefab instance are created as expected. The trick here is that the code inside the **Doodle** constructor is your code, not the code generated by the scene compiler. You only need to write a constructor signature that is compatible with the code of the `Level.js` file:

```hljs javascript
Copyclass Level extends Phaser.Scene {

constructor() {
super("Level");

create() {

// ...

// doodle
const doodle = new Doodle(this, 388, 105);
this.add.existing(doodle);

// doodle_1
const doodle_1 = new Doodle(this, 380, 240);
this.add.existing(doodle_1);

// doodle_2
const doodle_2 = new Doodle(this, 530, 170);
this.add.existing(doodle_2);

// ...
}

So, run the game now: you will see the **Doodle** instances are rendered with random shapes and colors. The instances are using your custom code and your way to create the textures:

This “black box” trick is not perfect. An ideal editor should run your **Doodle** custom code and show the prefab instance in the Scene Editor with the custom textures. But it is something very complex to implement.

With a black box Prefab, you can do “black magic”. Think that using it you can place 3D objects in the scene, by using a third-party framework and the Extern game object. Or complex 2D objects modeled by animation tools. Or tile-maps created with a Phaser unsupported format.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Adding children to a prefab instance

Script Nodes

---

# https://docs.phaser.io/phaser-editor/scene-editor/layout-tools/layout-tools-sorting

# Sorting layout tools

Game objects have an order in the display list of the scene. The order is the index of the game object in the display list. The game object with the lowest index is the first to render, and the game object with the highest index is the last to render. In the Outline view of the Scene Editor, the last object in the display list is stacked at the top of the Outline view.

You can change the order of the objects by using the sorting commands. You can execute them context menu. Select the objects, right click, and select the **Edit** submenu:

Look it shows the keyboard shortcuts for each command.

In addition you can execute the commands in the tools panel:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Grid layout tools

The scene compiler

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/shape-ellipse-object

# Ellipse

You can create an Ellipse by dropping the **Ellipse** block, from the Blocks view, on the scene.

You can change the size of the Ellipse in the **Size section** or you can use the Size tool.

In addition, the Ellipse has the Smoothness property (the number of points used when rendering it):

The Ellipse code is generated by the scene compiler using the ellipse object factory:

```hljs javascript
Copyconst ellipse = this.add.ellipse(10, 10, 100, 100);

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Rectangle

Triangle

---

# https://docs.phaser.io/phaser-editor/scene-editor/script-node/script-node-properties

# ScriptNode's properties

The script node objects have no built-in properties. When you select a script node in the scene, the Inspector view shows a few sections related only to the editor.

It is the case of the Variable properties. Like the game objects, a script node can be referenced by a variable, and you can set its scope to the method, the class, or declare it as a nested prefab:

A script node also can be added to an Object List:

And because it could be created as a prefab instance, it shows the Prefab Instance properties:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Making a ScriptNode prefab

User Components

---

# https://docs.phaser.io/phaser-editor/scene-editor/arcade-physics/arcade-physics-properties

# Arcade physics body properties

When you select an object, the Inspector view shows the editors for editing the Arcade body of the object.

The properties are grouped by sections:

## Arcade Physics Body section

It allows changing the type of body to dynamic or static. And set the enable flag:

## Arcade Physics Body Geometry section

This section contains the properties for setting the offset & size of the body. You can select the body’s shape in the **Geometry** parameter. If the body is rectangular, you can change its Size. If the body is circular, you can change its Radius. In both cases, you can change the Offset.

Another way of changing the body’s offset and size is activating the Arcade Physics Body Tool.

Also, in the scene context menu, in the **Arcade Physics**, there are the options **Center Body** and **Resize Body To Object Size**. Those commands are also available in the three-dots menu of the properties section:

The **Center Arcade Body** commands places the body at the center of the object. The **Resize Body To Object Size** command centers the body and resizes it to fill the whole object. If the body is circular, it changes the radius to fill the object’s width.

## Arcade Physics Body Movement section

This sections contains all body’s properties related to the movement:

- Move
- Velocity
- Max Velocity
- Max Speed
- Allow Gravity
- Gravity
- Acceleration
- Use Damping
- Allow Drag
- Drag
- Allow Rotation
- Angular Velocity
- Angular Acceleration
- Angular Drag
- Max Angular

## Arcade Physics Body Collision section

This section contains the body’s properties related to collision:

- Pushable
- Immovable
- Mass
- Bounce
- Friction
- Overlap
- OverlapR
- Collide World Bounds
- On World Bounds
- Check Collision

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Enabling the Arcade physics on a game object

Arcade physics collider

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-set-properties

# Changing a property of a prefab instance

As we explained in the previous sections, a Prefab is just a class that extends other Prefab class or a Phaser built-in type.

When you create a prefab instance, the new object gets the properties set in the Prefab. For example, the texture of the new instance is the same texture set in the Prefab (in the constructor of the Prefab class).

If you change the texture in the Prefab, all the prefab instance will use the new texture. However, you can unlock the texture property of certain instances and set a different texture.

Note that when you select a prefab instance, the Inspector view shows a “lock” icon next to the object properties. That icon is saying that the property is locked. If you click the icon, it is changed to an “unlocked” icon and means that the property is unlocked.

When you unlock a property, you can change its value, and it is not going to be updated if the property is changed in the Prefab. An unlocked property is not linked to the Prefab anymore.

It is easy to understand if you see it in terms of a class and a class instance. By default, the instance gets the properties set in the class constructor. But you can change that value when you create the instance, and it will remain the same no matter if you change the class constructor.

Now, if you lock the property again, the property will get the value set in the Prefab. Unlocking a property is like reset it to the Prefab value.

Let’s see an example step by step:

- Create two instances of the **Dragon** Prefab. Both instances use the same texture of the Prefab: a green dragon:

- You want to change the texture of the first instance, so you unlock the texture property and select a new image:

- You want to see how it looks with a purple texture, but you change it in the **Dragon** Prefab file, so, the second prefab instance will be updated automatically to show the new purple dragon texture:

- Ok, you love the purple color of the dragon, so you want all the **Dragon** prefab instance to have the same color. To do this, you lock again the texture property of the first (yet brown) dragon and it gets the Prefab texture: the purple one:

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Prefab code generation

Prefab variants

---

# https://docs.phaser.io/phaser-editor/scene-editor/user-components/user-components-editor

# User Components Editor

Components (or similar patterns) are widely used in popular game engines or editors. Many of these tools use custom scripting languages or certain elements of a language (like metadata or attributes) to provide the components information, like properties description, default values, UI rendering, etc… The code of the component has the metadata of the component as part of its implementation.

In Phaser Editor, for now, it is different. We use configurations (JSON) files and a User Components compiler that parses these files and generates the JavaScript (or TypeScript) code of the components. Or better say, a part of the component’s code, because, just like the Scene Editor does with the scene files, you can insert your code inside the output of the User Components compiler.

The information available in the configuration ( `*.components`) files are used by the Scene Editor for building the UI elements needed to add and edit the components of a game object. It is not required by the game at run-time. We strongly recommend to exclude it from the distribution build of your game.

## Add new component

To add a new user component you can: press the `A` key, click in the **Add Component** button in the Main toolbar or select the **Add Component** option in the context menu.

The newly created component has a default name, so probably you would like to change it, in the Inspector view.

As you can see in the image, the components are shown in a viewer and are rendered like class declarations: with the class name and the name and type of the properties.

To delete a component select it and press the `Delete` key. Or select the **Delete** option in the context menu.

## Edit the component info

A component is a class that adds state and behaviors to a game object, using composition. To edit the information of a component, you can select it in the editor and edit the values in the Inspector view.

This is the component metadata you can edit:

- The name of the component class.
- The type of the game object (or entity). Next to the field, you can open a menu with common possible options.
- The super-class of the component class. It is optional. Next to the field, you can open a menu with common possible options and names used in other components.
- The display name of the component. This is the name used in different parts of the editor. It is optional and empty by default. When the **Display Name** is empty, the **Name** is used instead.
- The object display format. This is a template string for showing the component info next to the prefab instance display name, in the Outline view. It works just like the prefab display properties. It is optional.

The properties work the same as the Prefab user properties.

You can add new properties by pressing the **Add Property** button.

The above image shows the **HorizontalMove** component. It has a game object type `Phaser.GameObjects.Image`. It means you should add this component to that type of objects (entities). And the **horizVelocity**, **minX** and **minY** properties.

For editing the info of a property, select it in the editor and set the values in the Inspector view:

This component is compiled into this JavaScript code:

```hljs javascript
Copy// You can write more code here

/* START OF COMPILED CODE */

class HorizontalMove {

constructor(gameObject) {
gameObject["__HorizontalMove"] = this;

/** @type {Phaser.GameObjects.Image} */
this.gameObject = gameObject;
/** @type {number} */
this.horizVelocity = 0;
/** @type {number} */
this.minX = 0;
/** @type {number} */
this.maxX = 3070;

/* START-USER-CTR-CODE */
// You can write code here
/* END-USER-CTR-CODE */
}

/** @returns {HorizontalMove} */
static getComponent(gameObject) {
return gameObject["__HorizontalMove"];
}

/* START-USER-CODE */
// You can write code here
/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

Check the User Components compiler section to learn more about how the components are translated into JavaScript code.

## Edit the component code

To edit the code generated for a component, you can double click on a component in the editor. It will open the component code file in the built-in code editor.

Also, you can select the component and press the `Q` key. It will open a Quick Edit dialog with a code editor:

The context menu shows all the options to edit the output file of a component:

The **Open Output File in Visual Studio Code** ( `Ctrl+Alt+E`) command opens the output file in the configured external editor.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Create a new User Components file

The User Components compiler

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/particle-emitter-object-properties

# Particle Emitter properties

The Particle Emitter has a massive amount of properties. You can edit the properties in the Inspector view. The properties are divided into sections.

## Preview properties

The preview properties are not part of the Particle Emitter configuration. They are only for the Scene Editor to show the emitter in the scene editor. The preview properties are:

- **Preview Active**: a flag to enable/disable the preview of the emitter. It remains visible, but the particles are not updated.
- **Preview Advance**: before starting the emitter, it advances the animation of the particles in the given number of milliseconds. By default, it advances the animation in 1 second. If you like to see the animation from the start, you can set this parameter to 0 and refresh the scene.

## Configuration properties

Before continuing with the remaining properties, we should explain the different values you can set to a kind of properties of the emitter.

Particle Emitters are created via a configuration object. The properties of this object can be specified in a variety of formats, giving you plenty of scope over the values they return, leading to complex visual effects.

In the editor, you can select the format of a property, and next it shows the different parameters associated with that configuration.

Following are the different forms of configuration value you can give to a property.

### Empty

By default, the property has no value, so the editor doesn't include it in the configuration object.

### An explicit value

```hljs js
Copyx: 400

The x value will always be 400 when the particle is spawned.

### A random value:

```hljs js
Copyx: [ 100, 200, 300, 400 ]

The x value will be one of the 4 elements in the given array, picked at random on emission.

Note that in the editor's UI you must write the array values separated by commas.

### A start/end configuration:

This allows you to control the change in value between the given start and end parameters over the course of the particles lifetime:

```hljs js
Copyscale: { start: 0, end: 1 }

The particle scale will start at 0 when emitted and ease to a scale of 1 over the course of its lifetime. You can also specify the ease function used for this change (the default is Linear):

```hljs js
Copyscale: { start: 0, end: 1, ease: "Bounce.easeOut" }

The start and end configuration can have an optional `random` parameter. This forces it to pick a random value between the two values and use this as the starting value, then easing to the "end" parameter over its lifetime.

```hljs js
Copyscale: { start: 4, end: 0.5, random: true }

The particle will start with a random scale between 0.5 and 4 and then scale to the end value over its lifetime. You can combine the above with the ease parameter as well to control the value easing.

Here is how you see it in the editor's UI:

### An interpolation configuration

You can provide an array of values which will be used for interpolation during the particles lifetime. You can also define the interpolation function to be used. There are three provided: linear (the default), bezier and catmull, or you can provide your own function.

```hljs js
Copyx: { values: [ 50, 500, 200, 800 ], interpolation: "catmull" }

The particle scale will interpolate from 50 when emitted to 800 via the other points over the course of its lifetime. You can also specify an ease function used to control the rate of change through the values (the default is Linear):

```hljs js
Copyx: { values: [ 50, 500, 200, 800 ], interpolation: "catmull", ease: "Bounce.easeOut" }

This is how you configure it in the editor:

Note the **Values** parameter allows writing the values separated by commas.

### A stepped configuration

The steps parameter allows you to control the placement of sequential particles across the start-end range:

```hljs js
Copyx: { steps: 32, start: 0, end: 576 }

Here we have a range of 576 (start to end). This is divided into 32 steps.

The first particle will emit at the x position of 0. The next will emit at the next 'step' along, which would be 18. The following particle will emit at the next step, which is 36, and so on. Because the range of 576 has been divided by 32, creating 18 pixels steps. When a particle reaches the 'end' value the next one will start from the beginning again.

You can add the optional yoyo property to a stepped object:

```hljs js
Copyx: { steps: 32, start: 0, end: 576, yoyo: true }

As with the stepped emitter, particles are emitted in sequence, from 'start' to 'end' in step sized jumps. Normally, when a stepped emitter reaches the end it snaps around to the start value again. However, if you provide the 'yoyo' parameter then when it reaches the end it will reverse direction and start emitting back down to 'start' again. Depending on the effect you require this can often look better.

### A min/max configuration:

This allows you to pick a random float value between the min and max properties:

```hljs js
Copyx: { min: 100, max: 700 }

The x value will be a random float between min and max.

You can force it to select an integer by setting the 'int' flag:

```hljs js
Copyx: { min: 100, max: 700, int: true }

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

The arguments are:

- **particle** \- A reference to the Particle instance.
- **key** \- The string based key of the property, i.e. 'x' or 'lifespan'.
- **t** \- The current normalized lifetime of the particle, between 0 (birth) and 1 (death).
- **value** \- The current property value. At a minimum you should return this.

By using the above configuration options you have an unlimited amount of control over how your particles behave.

## Transform properties

We divided the Particle Emitter properties into sections. The first section is the transform properties. These properties are related to the position, scale, and rotation of the emitter.

- x
- y
- moveToX
- moveToY
- scale
- particleScaleX
- particleScaleY
- particleAngle
- particleRotate

## Physics properties

This section contains the Particle Emitter properties dedicated to physics.

- accelerationX
- accelerationY
- maxVelocityX
- maxVelocityY
- speed
- speedX
- speedY
- gravityX
- gravityY
- radial

## Timing properties

This section contains the Particle Emitter properties dedicated to timing.

- delay
- hold
- lifespan
- quantity
- duration
- frequency
- maxAliveParticles
- maxParticles
- stopAfter
- advance
- timeScale

## Color properties

This section contains the Particle Emitter properties dedicated to color.

- particleAlpha
- particleTint
- particleColor
- colorEase
- blendMode
- tintFill

## Sorting properties

This section contains the Particle Emitter properties dedicated to sorting.

- particleBringToTop
- sortOrderAsc
- sortProperty

## Following properties

This section contains the Particle Emitter properties dedicated to following an object.

- follow \- In the editor, you can write the variable name of the object to follow or click the "browse" button to select the object from the scene.
- trackVisible

## Texture frame properties

This section contains the Particle Emitter properties dedicated to the texture frames.

To add a new frame, click the "Add" button. It shows a dialog with the frames of the same texture and all the other remaining textures. Select there the frames you want to add.

If you select to add frames from other textures, then the editor will replace (instead of append) the current frames with the new frames selected. It follows that rule because a particle emitter only allows frames from the same texture.

To remove a frame, select it and click the "Delete" button.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

ParticleEmitter

Container

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-object

# The prefab object

The prefab object is the object at the top of the Prefab file. You can add many objects to the scene, but only the one at the top will be considered as the real Prefab, the other objects will be ignored.

We did it this way for simplicity, but it also allows us to create different versions of the prefab object and move them to the top of the list in case we want to promote a different object as the prefab object.

Look in the next image, it shows the **Dragon** prefab. There are three objects in the file, but only the **green dragon** object will be used as the prefab object of the **Dragon** Prefab. Also, look the others, non-top objects are rendered transparent in the Outline view:

If later you decided to use a different dragon for your Prefab, then you can move it to the top of the scene and that’s all:

Another characteristic of the prefab object is that you cannot edit its Variable properties, because, in the generated code, it is not referenced as a variable, it is referenced as `this`.

The prefab object could be any object of any type (an Image, a Text, a container, whatever type supported by the Scene Editor), even, it could be a prefab instance. When the prefab object is a prefab instance (of the Prefab **SomePrefab**) then we say it is a prefab variant of the **SomePrefab** Prefab.

## Automatic Container creation

In many cases, your Prefab will be a single object, like an image. In other cases, you do group several objects in a container.

To simplify the workflow of creating a Prefab, the Scene Editor will follow these rules:

- If you add an object in an empty Prefab scene, the new object will be the prefab object.
- If you create an object, but the Prefab scene already contains a prefab object, then:
- If the prefab object is a container , the new object is added to it.
- If the prefab object is not a container, then a new container will be created to group the old prefab object and the new object. Finally, the newly created container will be the new prefab object.

In a few words, following these rules, the Scene Editor automatically group the objects in a container, if needed.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Creating a prefab file

Prefab user properties

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-variant

# Prefab variants

A prefab variant is a Prefab that extends other Prefab. This is a concept similar to the Unity Engine **prefab variants** so we use the same name. However, like everything else in the Scene Editor, the best way to understand the prefab variant is looking into the generated code. Then you realize that a variant of a Prefab is a sub-class of the Prefab class.

A prefab variant inherits the properties and values of the base Prefab, however, you can unlock the properties and modify them.

Learn more about unlock a prefab property.

You can create a prefab variant very easy, the only thing you need is to use a Prefab as the prefab object of the Prefab file.

Let’s say we want to create a purple-skinned prefab variant of the **Dragon** Prefab. These are the steps:

- Create a new Prefab file, name it **PurpleDragon**. Learn how to create a prefab file.

- Drop the **Dragon** Prefab on the scene. This creates a prefab instance that is the prefab object of the file.

- Unlock the texture property of the object and change it to the purple dragon texture. Save the file.

- Open the **Level** scene file, and look in the Blocks view there are the **Dragon** Prefab and the **PurpleDragon** Prefab. Drop the **PurpleDragon** Prefab on the scene. It will create a new, purple, prefab instance.

- But you want to reduce the size of both dragons. To do this, you change the scale of the X-axis of the **Dragon** Prefab. It will affect both instances, the **Dragon** and **PurpleDragon** instances, because the **PurpleDragon** is a variant of the now scaled **Dragon** Prefab.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

Changing a property of a prefab instance

Nested prefabs

---

# https://docs.phaser.io/phaser-editor/scene-editor/prefabs/prefab-user-properties

# Prefab user properties

As we mentioned in previous sections, a Prefab extends a Phaser built-in type or another Prefab. This means a Prefab inherits the properties defined in the Phaser built-in types. However, you have the option to define new properties.

With Prefab user properties, you can create more reusable prefabs. You can express gameplay concepts: the “health” of a player, the “value” of a coin, the “speed” of an enemy, etc.

## Creating a prefab user property

The **Prefab Properties** section of the Inspector view shows a button to create a new user property. This section is shown when you select the scene (click on a blank space of the scene), or when you select the **Prefab Properties** element in the Outline view:

Click on the **Add Property** button to create a new property. It opens a dialog with the different type of properties:

The properties are shown as children of the **Prefab Properties** element. Click a property for editing it in the Inspector view:

All type of properties requires some common parameters that you should provide:

- The **Name** of the property. It is used by the compiler to generate a property declaration code. It should be a valid JavaScript identifier.
- The **Label**. It is a UI friendly version of the **Name**. For example, the label for the **maxSpeed** name could be **Maximum Speed**. In code, is generated a **maxSpeed** field, but the UI shows **Maximum Speed**.
- The **Tooltip**. Used in the UI as documentation of the property.
- The **Default** value.
- The **Custom Definition** flag. If enabled, the scene compiler skips the generation of the code with the property declaration. It allows you writing a custom implementation of the property. For example, using a custom getter and setter. Learn more about using properties with custom definition.

The menu of the property section shows the following actions:

- Change the type of the property.
- Delete the property.

To change the order of the properties, go with the context menu’s **Edit** → **Move** commands.

You can undo/redo all these changes.

## Simple property type

The **Number**, **String**, and **Boolean** properties are the simplest. The scene compiler generates the properties as class fields. Note that each property is set to the **Default** value:

```hljs javascript
Copyclass Dragon extends Phaser.GameObjects.Sprite {

constructor(scene, x, y, texture, frame) {
super(...);

...
}

/** @type {number} */
maxSpeed = 100;

/** @type {"fire"|"smoke"|"laser"} */
flameType = "fire";

}

## Option property type

The Option type allows the user to select one of the predefined string values. It is like traditional enum types. In addition to the common parameters, the Option properties have the **Options** parameter. You should write all the possible values with a valid JSON array syntax:

Note the **Default** value should be one of the possible values.

The compiled property is like this:

constructor(...) {
super(...);
...
}

/** @type {"fire"|"smoke"|"laser"} */
flameType = "fire";
}

## Color property type

The color property type accepts string values with the format of colors. It provides a dialog for picking a color and returns it with a hex format (including the alpha component).

The scene compiler generates the code for defining a Color property like this:

```hljs javascript
Copyclass GoToSceneButton extends Phaser.GameObjects.Image {

...

/** @type {string} */
fadeOutColor = "#ffffffff";
}

And generates the code for setting the property in a scene:

```hljs javascript
Copy// goToSceneButton (prefab fields)
goToSceneButton.fadeOutColor = "#ff00b5ff";

There are many different ways of representing a color, you can use the Phaser.Display.Color class for converting to different formats.

## Expression property type

The Expression type is the way you have to create a property of any type. You can use any type for the values and any JavaScript expression for setting the values. For example, you can use it to create a property to reference an event handler (or callback function):

The scene compiler generates Expression properties like this:

constructor(..) {
...
}

## Object Variable property type

This user property type is dedicated for referencing objects in the scene. It provides a dialog for selecting an object in the scene and sets as value of the property, the name of the variable referencig the object:

This property type if a subset of the Expression property type. You can define the type of the property. By default, it is `Phaser.GameObjects.Game`, but you can write any other type.

```hljs javascript
Copyclass Eagle extends Phaser.GameObjects.Sprite {

/** @type {Phaser.GameObjects.GameObject} */
attackTarget;
}

The value set to this property is is verbatim-copied to the generated code:

```hljs javascript
Copy// eagle (prefab fields)
eagle.attackTarget = player;

## Object Constructor property type

With this property type you can create a user property for holding an object constructor (saying it in another way: a class). It’s like the Expression property type, but with a dialog for selecting a prefab class or built-in game object class.

Look in the next image, how you can select a prefab or a built-in Phaser type as expression:

It will generate a property definition like this:

```hljs javascript
CopybulletCtr!: typeof Cherry & typeof Gem = Cherry;

This means, that you can use that property for creating a new object, a **Cherry** or **Gem** object:

```hljs javascript
CopycreateBullet(x: number, y: number) {

const bullet = new this.bulletCtr(this.scene, x, y);

return bullet;
}

## Event property type

This type of property allows selecting an event name from a list of the Phaser events plus custom-defined events. It also allows writing any arbitrary event name.

To open the list of available events, click on the search button. It opens a dialog with the Phaser and custom events:

When you click on an event name, the bottom pane of the dialog shows the documentation.

### Dynamic keyboard events

Phaser provides the special `Phaser.Input.Keyboard.Events.KEY_DOWN` and `Phaser.Input.Keyboard.Events.KEY_UP` events. These events allow listening to the keys defined in the `KeyCodes` class, combining in this way:

```hljs javascript
Copythis.input.keyboard.on('keydown-SPACE', listener);

Where `SPACE` is a constant in the `KeyCodes` class, and `keydown` (or `keyup`) is the name of the event.

The Event property dialog shows all combinations of `keydown-` and `keyup-` with the `KeyCodes` values.

### Dynamic animation events

From the Phaser documentation:

The Animation Complete Dynamic Key Event.

This event is dispatched by a Sprite when an animation playing on it completes playback.
This happens when the animation gets to the end of its sequence, factoring in any delays
or repeats it may have to process.

The difference between this and the **ANIMATION\_COMPLETE** event is that this one has a dynamic event name that contains the name of the animation within it.
For example, if you had an animation called explode you could listen for the completion of that specific animation by using:

`sprite.on('animationcomplete-explode', listener)`

The Event property dialog collects all the animations available in the animation files of your project and generates the `animationcomplete-key` events:

### Dynamic Spine events

Spine skeletons contain user events that are fired at a certain moment of an animation. The Event property dialog shows all the events defined in all the Spine skeleton assets present in the Asset Pack files:

Learn more about the Spine events

### Custom events

In addition to the Phaser events, the dialog shows custom events defined in an `events.txt` file. Since version 3.62.0 of the editor, this file is included in all project templates. However, you can create this file yourself in any folder of your project. The syntax is very simple. In every line, you define an event, and the name and the documentation are separated with a space. Like this:

```hljs bash
Copymy-event-name My event name documentation

# the editor ignores all lines starting with #
other-event My other event.

Then, the Event property dialog will show the custom events at the beginning of the list:

### Event code generation

The scene compiler generates the Event properties like this:

```hljs bash
Copyclass Dragon extends Phaser.GameObjects.Sprite {

jumpEvent = Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN;
}

## Key Code property type

This type of property allows selecting one of the key codes available in the `Phaser.Input.Keyboard.KeyCodes` class:

You can use properties of this type for binding the behavior of an object or a game action with a certain keyboard key.

## Property code generation

The scene compiler generates the Key Code properties like this:

private jumpKey: number = Phaser.Input.Keyboard.KeyCodes.UP;
}

## Texture Config property type

This type of property allows to select a texture between all the textures defined in the an Asset Pack file. When the texture is selected, the property gets as value the configuration of the texture. For example, if the selected texture is an image with key **background**, the property is set to:

```hljs javascript
Copy{ "key": "background" }

If the selected texture is the frame **branch-01** of the atlas **atlas-props**, then the property is set to:

```hljs javascript
Copy{ "key": "atlas-props", "frame": "branch-01" }

The scene compiler generates Texture Config properties like this:

/** @type {{key:string,frame?:string|number}} */
myTexture = {"key":"atlas-props","frame":"branch-01"};
}

## Asset Key property type

The Asset Key property type is just like a simple String property type, but it allows to open a dialog with all the Asset Pack file keys defined in the project. Then, when you select a key in the dialog, it will be set as value to the property.

The scene compiler generates Asset Key properties like this:

/** @type {string} */
myAssetKey = "acorn-3";
}

## Animation Key property type

This type is just like the Asset Key property type but the dialog only shows the animations defined in the project.

Next to the animation key field, there is a button for selecting the animation key and a button for previewing the selected animation:

This is the dialog for selecting the animation key:

This is the dialog for previewing the selected animation:

## Audio Key property type

This type is like the Asset Key property type but the dialog only shows the audio assets:

## Scene Key property type

This user property type allows any string values but provides a dialog for selecting a scene key. This dialog shows all the scenes of the project and you can pick one. Then, its key is set as a value.

The scene compiler generates Scene Key properties like this:

```hljs javascript
Copyclass GoToSceneButton extends Phaser.GameObjects.Sprite {

/** @type {string} */
jumpTo;
}

And the code it generates in the scene is like this:

```hljs javascript
Copy// goToSceneButton (prefab fields)
goToSceneButton.jumpTo = "Level";

## Spine Skin Name property type

This user property type allows any string values but provides a dialog for selecting a Spine skeleton skin. This dialog lists the names of all skins defined in all the Spine skeleton assets in the Asset Pack files of the project. You can pick one name, then it is set as a value of the property.

The scene compiler generates Spine Skin Name properties like this:

```hljs javascript
Copyclass Player extends SpineGameObject {

theSkin: string;
}

```hljs javascript
Copyplayer.theSkin = "Wolf02";

## Spine Animation Name property type

This user property type allows any string values but provides a dialog for selecting an animation name. This dialog lists the names of all animations defined in all the Spine skeleton assets in the Asset Pack files of the project. You can pick one name, then it is set as a value of the property.

The scene compiler generates Spine Animation Name properties like this:

startAnimation: string;
}

```hljs javascript
Copyplayer.startAnimation = "idle";

## Initializing other properties

It’s possible you want to change other properties of the prefab instance, in dependence of the values of the user properties. For example, if the **flameType** property value is `"fire"`, then you set the mass of the body to `50`. Because the property values are not set in the constructor, you can listen to the `scene-awake` event and setup the body properties:

constructor(scene,...) {
...

/* START-USER-CTR-CODE */

scene.events.once("scene-awake", this.awake, this);

/* END-USER-CTR-CODE */
}

/* START-USER-CODE */

awake() {

// at this point, all objects in the scene are created
// and the user properties are set with new values

if (this.flameType === "fire") {
this.body.mass = 50;
}
}

/* END-USER-CODE */
}

If you enable the **Generate Awake Handler** flag in the **Compiler Prefab Settings**, the scene compiler will generate this code for you:

```hljs javascript
Copyclass Level extends Phaser.GameObjects.Image {

constructor(scene,...) {

// awake handler

...
}
}

It is your responsibility to write the `awake` method.

### The `scene-awake` event

The `scene-awake` event is not part of the Phaser API. It’s a custom event the Scene Editor uses as convention. When the scene compiler generates the code of a scene, it also generates the code for emitting the `scene-awake` event. This event is emitted just after all objects are created:

```hljs javascript
Copyclass Level extends Phaser.Scene {
...
editorCreate() {
...

// dragon
const dragon = new Dragon(this, 370, 218);
this.add.existing(dragon);

// dragon (prefab fields)
dragon.maxSpeed = 300;
dragon.flameType = "smoke";

this.events.emit("scene-awake");
}
...
}

As we mentioned in the previous sections, prefabs and user components can listen to this event for reading the values set to the user properties.

It is important that you keep in mind that if you create a dynamic prefab instance, and it requires the `scene-awake` event, then you should call it manually:

```hljs javascript
CopyspawnDino(scene, x, y, flame) {

const dragon = new Dragon(scene, x, y);
dragon.flameType = flame;
// send the awake notification to the new object
scene.events.emit("scene-awake");
}

Because the `scene-awake` event is listened once in prefabs and user components, only the new objects will be notified.

As alternative to the `scene-awake` event, you can listen the `Phaser.Scenes.Events.UPDATE` event. It is emitted by the scene at every tick, so you just need to register the listener to be called **once**:

```hljs javascript
Copyscene.events.once("Phaser.Scenes.Events.UPDATE", this.start, this);

Note that if you need to “awake” prefab before the game starts updating, you should listen to the `scene-awake` event.

The `scene-awake` event is also used by components, learn more about it.

## Using properties with custom definition

You can set a user property with a **Custom Definition**:

This means, the scene compiler skips the definition of the property. For example, if you set the `flameType` as **Custom Definition**, the `flameType` property declaration isn’t generated. Instead, a `flameType` property initialization is included in the constructor:

// the compiler adds this
this.flameType = "fire";
}

// the compiler skips this:
// flameType = "fire";
}

Then, you can write a custom setter and initialize other fields of the prefab:

constructor(scene,...) {
...
this.flameType = "fire";
}

set flameType(flameType) {

// update the body with the flameType

if (flameType === "fire") {
this.body.mass = 50;
}
}

Note that you don’t need to listen for the `prefab-awake` event anymore. Setting the `flameType` property will update the prefab state in the expected way. It’s possible you also need to define a getter for the `flameType`. If that’s the case, you can store its value in a new field, or compute it.

## User properties in a prefab instance

This is how the properties you defined in a Prefab are presented in the **Prefab Instance** section of a Prefab instance:

The Inspector view shows a section for every Prefab (and prefab variant) of the object. The user properties are shown just like any other property of a Prefab instance.

Each section contains a menu with the options:

- **Open Prefab**: opens the prefab file.
- **Select All**: select all objects in the scene instancing the same prefab.

The code, generated by the scene compiler, that creates the Prefab instance and initialize the properties will look like following. Note the **dragon** instance is created first, and the user properties are initialized later, at the end of the method. By setting the user properties at the end, it allows you to set references to another objects created in the scene:

```hljs javascript
Copyclass Level extends Phaser.Scene {
...
create() {
...

dragon.emit("prefab-awake");
...
}
...
}

In the next sections are covered the topics to create Prefab instances and to change the properties.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

The prefab object

Creating a prefab instance

---

# https://docs.phaser.io/phaser-editor/scene-editor/game-objects/replace-object-type

# Replacing the type of an object

When you drop a Blocks view item into the scene, a new object is created. If the item you drop is an image or atlas frame, it creates an Image object.

However, you can change the type of the Image object to another, like a Sprite or TileSprite. You can convert any type of object to any other type. We name it object type replacement.

To replace the type, execute the **Replace Type** command that is shown in the **Type** sub-menu of the context menu. That command opens the **Replace Type** dialog. The dialog shows the different types supported by the editor, including your prefabs. Select the new type and press **Replace**.

For example, you can convert a Text object to a BitmapText:

- Select the Text object, open the context menu and launch the **Replace Type** dialog:

- In the **Replace Type** dialog, select the BitmapText type. It opens the **Select Bitmap Font** dialog. Select the desired font for the new object (you cannot create a BitmapText object without a font):

- Finally, the object is converted to a BitmapText. Note the properties shared by both types are conserved the same. The Text property is an example of that:

## Keeping the original texture

The **Replace Type** dialog has the option of keep the original texture when you are replacing an image object with a Prefab type. By default, the object will get the texture of the Prefab. However, if you select the **Keep the original texture** option, after the type replacing, the object will unlock the texture property and use the original texture.

Updated onJuly30, 2025, 3:14 PMUTC

* * *

SpineGameObject

Scene properties

---

