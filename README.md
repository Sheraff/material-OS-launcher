Launcher prototype for Quantum OS
====================

This is a first 1 hour draft, just to get the idea.

So that anyone can contribute easily, first steps will be:
 - static mockups
 - code cleanup
   - css to less
   - clean js
   
The idea behind this project is to make a great app launcher / file search bar for [Quantum OS](http://quantum-os.github.io/), an operating system based upon Linux which conforms to Google’s [Material Design guidelines](http://www.google.com/design/spec/material-design/introduction.html).

The main goal of such a launch bar is to provide a quick way to open apps, find local files, perform simple tasks (ie. calculate, kill process, convert units...) and get formated information (ie. google search results, weather in location, time in location...). As far as functionnality goes, this project takes it's inspiration from [Alfred App](www.alfredapp.com), [OSX Yosemite's Spotlight](http://support.apple.com/kb/PH18828), and all standard launchers like [Window's Start menu](http://windows.microsoft.com/en-us/windows/start-menu-overview#1TC=windows-7), [gnome's Gnome Do](http://do.cooperteam.net/), [OSX's launchpad](http://support.apple.com/en-us/HT202635)...

For consistency, we want this design to be fully integrated to the rest of the OS and not a simple overlay. This is why it should deal with the multitasking view (switching between apps and windows) and the notification/widget center.
