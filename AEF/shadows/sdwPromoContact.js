class sdwPromoContact extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.innerHTML = this.innerHTML
        this.elmRoot.classList.add("autocenter")
    }
}