class sdwFlags extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.innerHTML = shadows[this.constructor.name].html
        this.elmRoot.classList.add("autocenter")
    }
}