import "babel-polyfill";
import Konan from "./Konan";
import "./model/KonanInput"

window.onload = function() {
    console.log("onload")
}

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

Konan.execute("#hello").then(() => {
    const startTime1 = performance.now();
    for (let step = 0; step < 100; step++) Konan.execute("#talk").then((text) => {});
    console.log(performance.now() - startTime1);

    const startTime2 = performance.now();
    for (let step = 0; step < 100; step++) Konan.execute("#a").then((text) => {});
    console.log(performance.now() - startTime2);

    const startTime3 = performance.now();
    for (let step = 0; step < 100; step++) "aaaa" + "bbbb"
    console.log(performance.now() - startTime3);
})
