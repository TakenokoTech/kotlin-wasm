import kotlinx.wasm.jsinterop.Konan_js_getProperty

fun main() {
    println("Hello, Kotlin/Native!")
}

@Retain fun hello() = println("Hello from Kotlin")
@Retain fun talkString(): String = "I am ${stringParam(0)}"
@Retain fun talkNum(): String = "number is ${numberParam(0)}"
@Retain fun a(): String = "a"
@Retain fun b(): String = "b"
@Retain fun c(): String = "c"
@Retain fun ab(): String = "ab"
@Retain fun one(): Int = 1
@Retain fun two(): Int = 2
@Retain fun floatNum(): Float = 0.12345678F
@Retain fun longNum(): Long = 1000L
@Retain fun boolTrue(): Boolean = true
@Retain fun boolFalse(): Boolean = false
