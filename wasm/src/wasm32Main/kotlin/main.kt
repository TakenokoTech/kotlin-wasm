fun main() {
    println("Hello, Kotlin/Native!")
}

@Retain
fun hello() {
    println("Hello from Kotlin")
}

@Retain
fun talk(name: String): String {
    return "I am ${name}"
}
