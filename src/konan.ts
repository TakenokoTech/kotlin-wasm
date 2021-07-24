import KonanOutput from "./model/KonanOutput";

interface KonanParam {
    libraries: []
    exports: { [name: string]: () => any }
}

class Konan {
    loadingId: any
    loadingPromise: Promise<void>
    konan: KonanParam
    _args: { [name: number]: number[] } = {}

    constructor() {
        this.konan = { libraries: [], exports: {} }
        this.loadingPromise = new Promise(resolve => {
            this.loadingId = setInterval(() => this.load(resolve), 10)
        })
    }

    private load = (resolve: any) => {
        if(instance == null) return
        for (let n in instance.exports) {
            if (n.startsWith("kfun:")) {
                const fn_name = n.substring(5, n.indexOf("("));
                this.konan.exports[fn_name] = instance.exports[n];
            }
        }
        if(this.loadingId) clearTimeout(this.loadingId)
        // console.log(`loaded.`, this.konan.exports)
        resolve()
    }

    async execute<T>(name: string, ...args: any[]): Promise<KonanOutput> {
        await this.loadingPromise
        let value = this.konan.exports[name]();
        return new KonanOutput(value)
    }

    setArgs(...args: any[]) {
        this._args = {}
        for (const [index, arg] of args.entries()) {
            switch(typeof(arg)) {
                case "number":
                    this._args[index] = [arg]
                    break
                case "string":
                    this._args[index] = arg.charMap(n => n)
                    break
            }
        }
    }

    getArgs(arg: number) {
        return this._args[arg]
    }
}

export default new Konan()