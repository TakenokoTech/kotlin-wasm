export default class Queue<T> {
    queue: Promise<T>

    constructor(def: T) {
        this.queue = Promise.resolve(def)
        this.add = this.add.bind(this)
    }

    add(job: () => Promise<T>): Promise<T> {
        this.queue = this.queue.then(job);
        return this.queue
    }
}
