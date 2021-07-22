import "babel-polyfill";
import Konan from "./konan";

Konan.execute("#hello")

Konan.execute("#talk").then((text) => {
    console.log("a: " + text)
})


// new Promise(resolve => {})
// window.onload = function() { console.log("onload") }