/**
 * ref: github.com/boyanio/wasm-wheel/blob/master/src/langs/kotlin/format-wasm-loader.js
 */
export default class KonanOutput {
    private value: number

    constructor(value: number) {
        this.value = value
    }

    toInt() {
        return this.value
    }

    toString() {
        const size = this.getInt(this.value + 4);
        return toUTF16String(this.value + 8, size * 2);
    }

    toBoolean() {
        return this.value == 1
    }

    private getInt = (offset: number) => heap[offset] | heap[offset + 1] << 8 | heap[offset + 2] << 16 | heap[offset + 3] << 24;
}