class sdwPromoRow extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.innerHTML = shadows[this.constructor.name].html
        this.elmRoot.querySelector(".content").innerHTML = this.innerHTML
        this.elmRoot.classList.add("autocenter")
    }
}