class ShadowObject extends HTMLElement {
    
    constructor () {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    static get observedAttributes() { return []; }

    attributeChangedCallback(name, oldValue, newValue) { }

    connectedCallback () {

        this.elmStyle = document.createElement("style")
        this.shadow.appendChild(this.elmStyle)

        this.elmRoot = document.createElement("div")
        this.elmRoot.className = "root"
        this.shadow.appendChild(this.elmRoot)

        this.elmStyle.textContent = shadows[this.constructor.name].css
        if (shadows[this.constructor.name].html.length > 1) {
            this.elmRoot.innerHTML = shadows[this.constructor.name].html
        } else {
            this.elmRoot.innerHTML = this.innerHTML
        }
    
        this.load()
    }

    async load () { }
}