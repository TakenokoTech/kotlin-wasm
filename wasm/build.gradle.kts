plugins {
    kotlin("multiplatform") version "1.5.21"
}

group = "tech.takenoko"
version = "1.0-SNAPSHOT"
val staticDir = file("./build/libs")

repositories {
    google()
    mavenCentral()
}

kotlin {
    wasm32 {
        binaries {
            executable()
        }
    }
    sourceSets {
        val commonMain by getting {
            dependencies {
            }
        }
        val wasm32Main by getting {
            dependencies {
            }
        }
    }
}
