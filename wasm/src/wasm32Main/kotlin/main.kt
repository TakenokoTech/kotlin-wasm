//@SymbolName("getString")
//external fun getString(): Int

fun main() {
    println("Hello, Kotlin/Native!")
}

@Retain
fun hello() {
    println("Hello from Kotlin")
}

@Retain
fun talk(): String {
    val name = "" //getString()
    return "I am ${name}"
}

@Retain
fun a(): String {
    return "a"
}

@Retain
fun b(): String {
    return "b"
}

@Retain
fun c(): String {
    return "c"
}

@Retain
fun ab(): String {
    return "ab"
}

@Retain
fun one(): Int {
    return 1
}

@Retain
fun two(): Int {
    return 2
}
