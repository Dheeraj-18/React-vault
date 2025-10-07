//                                     < Source Map> 

// NOTE_1: Source map play a crucial role in our development while bcz without this Debugging the react code very difficult 
// NOTE_2: while we use babel CDN it auto add CDN in transform file but here we use CLI via npm so we tell explicitly to the babel 
//         for the source map 
// NOTE_3: For doing this we add command in our build script command i.e --source-maps then after run a npm run build it create a one more file 
//         in lib folder i.e script.js.map and a source map url is auto add link  in transformation file 

// NOTE_4: Browser never send request to our original script.js file yes so How we check in Dev tool for any js code line it redirects to our 
//         original script.js file code? SO yes this because of source map when browser see the source map url in the transformation script file which 
//        is embedded by the babel code in our index.html file head tag. so browser send request this file i.e script.js.map which in lib folder SO this 
//         is the special code which understand by the browser but in browser network this request not shows bcz this is devtools request and on 
//         network tab only page request are shown 

// NOTE-5: SO, yes this source map file paly a crucial role while debugging in dev tools bcz it's redirects our original written code without sending 
//         the request , only bcz of source map file 

// NOTE_6: and there is a another senario even if add source map and generate a map file but if we disable setting from the browser i.e javascript
//         source map so browser never send the request of this map even if we add a source map url 

// NOTE_7: Second way to add source map => add another key-pair in the .babelrc file i.e "sourceMaps":true  and run npm run build it add a map file in 
//         lib folder 

// NOTE_8: build": "babel ./script.js -d lib --watch"      this command run and we write our code and compile continuously without run every time
//         npm run build so this is a watch command 



const container = (
  <div className="container" id="container">
    <section>
      <p>The library for web and native user interfaces</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
        style={{
          width: 200,
          backgroundColor: 'teal',
          borderRadius: 8,
          padding: 16,
        }}
      />
    </section>
    <section>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
      </form>
    </section>
  </div>
)

console.log(container);
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)
