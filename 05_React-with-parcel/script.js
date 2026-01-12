//                                 Summary-Note

// Note-1: Before this we use CDN link for using any library and also for rendering on browser use another library call react-dom
//         Using CDN but inPractice this not good way , We use Bundlers which Bundle all necessary files and make a single file and
//         serve on browser . SO yes Parcel is one of the Bundler which we use here.
// Note-2: For import and export in jS we use ES6 modules and it works well because it's a javascript and browser understand it well
//         but for import file from node module we use slightly diff syntax which work well with node , like direct give file name for
//         import like import React from "react" but Browser not understand this because React is a client side library and our
//         node_modules is on server so this is a server syntax for import and if we import even from our node_module but or browser
//         not server it using this sever import syntax..
//
// Note-3: SO Here for this problem Bundlers comes into the picture to do it , SO Parcel understand well this to import form node_module
//         and even it also add babel in the  dev dependency SO it auto convert JSX
// Note-4: By running this npx parcel index.html it start a server and create dist folder and in the folder another index.html and there
//         own generated .js file and .js.map file included and it serve that index.html file on browser with and in script src there .js file
//
// Note-5: Parcel do many things first start a Dev Server and second HOT Reloading i.e changes are automatic update on browser but
//         we do same with normal live server extension but in that every time change reload complete page But here there is a concept
//         Called HMR (Hot module Replacement) using this all changes update on browser without page reload.  For using this add some
//         code in our js file to use this facility. if(module.hot){ module.hot.accept()} and another thing parcel do Diagnostic do various
//         things tree shaking , minification , code splitting , image optimization ...
//      -> and it also add source map in .js file which they sever by giving in the src of script tag in index.html severing file
//
// Note-6: Now in all build tools and new react version allow we using react in our code without adding the import React when we write
//         JSX it understand and import itself.
// Note-7: But we need to import the react-dom library from  react-dom/client otherwise only with react-dom through error

// Note-8: So , Parcel is work well we have a another option i.e create ReactApp earlier this is official but in new react versions
//         this in deprecated and now make react app using Next js was official on there doc but for working we use Parcel  

// npm init -y
// npm i react react react-dom
// npm install --save-dev parcel     < install Parcel as a dev depend>
// npx parcel index.html             <line meaning: execute parcel using npm entry file name is index.html>
//

// import { user } from './data.js'

// import React from 'react'
// if (module.hot) {
//   module.hot.accept()
// }

import { createRoot } from 'react-dom/client'
const h1 = <h1>Hello World!!</h1>

const root = createRoot(document.querySelector('#root'))

root.render(h1)
