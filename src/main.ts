import "babel-polyfill";
import Konan from "./Konan";
import "./model/KonanInput"

window.onload = function () {
    console.log("onload")
};

(async function () {
    // Konan.setArgs("abc", "defg")
    const text1 = await Konan.execute("#talkString", "abc", "defg")
    console.log("talk: " + text1.toString());

    // Konan.setArgs(111)
    const text2 = await Konan.execute("#talkNum", 111)
    console.log("talk: " + text2.toString());

    ["a", "b", "c", "ab"].forEach((it) => {
        Konan.execute(`#${it}`).then((text) => {
            console.log(`${it}: ${text.toString()}`);
        })
    });

    ["one", "two"].forEach((it) => {
        Konan.execute(`#${it}`).then((text) => {
            console.log(`${it}: ${text.toInt()}`);
        })
    });

    ["boolTrue", "boolFalse"].forEach((it) => {
        Konan.execute(`#${it}`).then((text) => {
            console.log(`${it}: ${text.toBoolean()}`);
        })
    });

    ["floatNum", "longNum"].forEach((it) => {
        Konan.execute(`#${it}`).then((text) => {
            console.log(`${it}: ${text.toInt()}`);
        })
    });
})();

Konan.execute("#hello").then(() => {
    const startTime1 = performance.now();
    for (let step = 0; step < 100; step++) Konan.execute("#talkString").then((text) => {});
    // console.log(performance.now() - startTime1);

    const startTime2 = performance.now();
    for (let step = 0; step < 100; step++) Konan.execute("#a").then((text) => {});
    // console.log(performance.now() - startTime2);

    const startTime3 = performance.now();
    for (let step = 0; step < 100; step++) "aaaa" + "bbbb"
    // console.log(performance.now() - startTime3);
});
