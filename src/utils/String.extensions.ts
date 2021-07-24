export {};

declare global {
    interface String {
        charMap<T>(block: (arg: number) => T): T[];
    }
}

String.prototype.charMap = function<T>(block: (arg: number) => T): T[] {
    const list = []
    for (let i = 0; i < this.length; i++) {
        list.push(block(this.charCodeAt(i)))
    }
    return list
};
