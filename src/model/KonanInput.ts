import "../utils/String.extensions"

konan_dependencies.env["Konan_js_getSize"] = (arg: number): number => {
    return stringArgs[arg]?.length ?? 0
}

konan_dependencies.env["Konan_js_getChar"] = (arg: number, index: number): number => {
    return stringArgs[arg]?.[index] ?? null
}

export function setStringArgs(...args: String[]) {
    stringArgs = {}
    for (const [index, arg] of args.entries()) {
        stringArgs[index] = arg.charMap(n => n)
    }
}

let stringArgs: { [name: number]: number[] } = {}
setStringArgs("abc", "defg")
