//                                     < Source Map> 

// NOTE_1: Source map play a crucial role in our development while bcz without this Debugging the react code very difficult 
// NOTE_2: while we use babel CDN it auto add CDN in transform file but here we use CLI via npm so we tell explicitly to the babel 
//         for the source map 
// NOTE_3: For doing this we add command in our build script command i.e --source-maps then after run a npm run build it create a one more file 
//         in lib folder i.e script.js.map and a source map url is auto add link  in transformation file 

const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, "The library for web and native user interfaces"), /*#__PURE__*/React.createElement("img", {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
  style: {
    width: 200,
    backgroundColor: 'teal',
    borderRadius: 8,
    padding: 16
  }
})), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "Username"), /*#__PURE__*/React.createElement("input", {
  id: "username"
})), /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password"
}, "Password"), /*#__PURE__*/React.createElement("input", {
  id: "password",
  type: "password"
})))));
console.log(container);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);
//# sourceMappingURL=script.js.map