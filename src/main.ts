import "babel-polyfill";
import Konan from "./Konan";

Konan.execute("#hello");

Konan.execute("#talk").then((text) => {
    console.log("talk: " + text.toString())
});

["a", "b", "c", "ab"].forEach((it) => {
    Konan.execute(`#${it}`).then((text) => {
        console.log(`${it}: ${text.toString()}`);
    })
});

["one", "two"].forEach((it) => {
    Konan.execute(`#${it}`).then((text) => {
        console.log(`${it}: ${text.toInt()}`);
    })
})

// new Promise(resolve => {})
// window.onload = function() { console.log("onload") }