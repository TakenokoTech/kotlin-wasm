import "../utils/String.extensions"
import Konan from "../Konan";

konan_dependencies.env["Konan_js_getSize"] = (arg: number): number => {
    return Konan.getArgs(arg)?.length ?? 0
}

konan_dependencies.env["Konan_js_getArgs"] = (arg: number, index: number): number => {
    return Konan.getArgs(arg)?.[index] ?? null
}
