@RetainForTarget("wasm32")
@SymbolName("Konan_js_getSize")
external public fun getSize(arg: Int): Int


@RetainForTarget("wasm32")
@SymbolName("Konan_js_getChar")
external public fun getChar(arg: Int, index: Int): Int


internal fun stringParam(arg: Int) = (0 until getSize(arg))
    .joinToString("") { getChar(arg, it).toChar().toString() }