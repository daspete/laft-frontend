# laft-frontend

## Requirements
- node.js >= 8.6 - can be installed with [nvm](https://github.com/creationix/nvm)

## Installation
- run ``` npm install ``` to install the vendor packages

## Tasks

### npm run dev
This task starts a local webserver and watches all files for changes to recompile

you can reach the frontend in your browser at [http://localhost:3000](http://localhost:3000)

### npm run build
This tasks creates a built version of the current frontend, this can be used to create a production preview

### npm run dist
This task creates all HTML-Files with all the assets of your web app. You will find the result in the ``` /dist ``` folder.

## Global store
You will find the global store object in ``` /store/index.js ```

## Layouts
You will find the layouts in ``` /layouts/ ```

With them, you can create master layouts, in which the pages live

## Pages
You will find the vue pages in ``` /pages/ ```

## Assets
You can store your assets in the ``` /assets/ ``` folder

## Components
You can store your reusable components in the ``` /components/ ``` folder

## API backend solution
There is a package called [laft-laravel-api](https://github.com/daspete/laft-laravel-api) with which you can handle the api calls with jwt authentication