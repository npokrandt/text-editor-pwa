# The TExtditor

## Author

Nathan Pokrandt

## Technologies Used

This PWA is powered by webpack for bundling and the manifest, and workbox for the service worker. Node is used as well

## Description

The TExtditor is an easy-to-use text editor that is a progressive web application. It can be downloaded as an app onto your computer and works offline!

## Installation

Installing the app is easy: just click the install button. An alert will verify that you want to install the app, and once clicked, the app will open and its icon appear on the desktop and the taskbar. It can be used online or offline

## Usage

Usage is pretty simple: you are presented with a page to type in, with each of the lines numbered. Type whatever you want into it, and indexedDB will save that data for later. To install the editor as an app, just hit the 'install' button and you will be taken straight to the open app page. In the background a service worker allows the app to function properly even offline!

![textditor picture](/TextditorPic.PNG)

## Link

Link to heroku deployment
https://npokrandt-text-editor-pwa-a4319b937d84.herokuapp.com/

## Credits

Lots of help from stackoverflow and the chrome docs about service workers, and other stuff taken from previous assignments, but the rest of the code is my own