class sdwPromoRow extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.querySelector(".content").innerHTML = this.innerHTML
        this.elmRoot.classList.add("autocenter")
    }
}