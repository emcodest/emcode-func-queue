
class FuncQueue {

    constructor() {
        this.list = []
    }

    Enqueue(item) {
        if (process.env.NODE_ENV != "production")
            console.log('\x1b[41m%s\x1b[0m', 'ENQUEUING.....', item)
        this.list.push(item)
    }
    Dequeue() {
        return this.list.shift()
    }
    List() {
        return this.list
    }

    async RunJobInQueue(fxn, params, delay_per_job_secs = 1, cb=false) {
        if (this.List().length <= 0) {
            this.Enqueue(params)
            while (this.List().length > 0) {
                await new Promise((r) => setTimeout(r, delay_per_job_secs * 1000))
                const job = this.Dequeue()
                const rst = await fxn(...job)
                 if (process.env.NODE_ENV != "production")
                console.log('\x1b[41m%s\x1b[0m', 'result: ...', rst)
                if(cb)
                  cb({job: params, result: rst})
            }

        } else {

            this.Enqueue(params)
        }

    }


}
module.exports = FuncQueue
