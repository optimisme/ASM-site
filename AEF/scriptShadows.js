var shadows = {}

window.addEventListener("load", loadShadows)

async function loadShadows () {

    let keys = Object.keys(shadows)
    for (let cnt = 0; cnt < keys.length; cnt = cnt + 1) {
        let name = keys[cnt]
        let tag = shadows[name].tag
        eval(`customElements.define("${tag}", ${name})`)
    }
}

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

shadows["sdwAcademyCoaches"] = {
	tag: "sdw-academy-coaches",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    background-color: white;
    display: block;
}

.root {
    align-items: stretch;
    background-color: white;
    display: flex;
    justify-content: center;
    overflow: hidden;
}

@media only screen and (max-width: 768px) {
    .root {
        flex-direction: column;
    }
}

.root p {
    margin: 8px 0;
}

.root .coach {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%;
    padding: 16px;
}

@media only screen and (max-width: 768px) {
    .root .coach {
        max-width: 100%;
    }
}

.root .coach img {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2), 0 2px 17px 0 rgba(0,0,0,0.2);
    border-radius: 16px;
    overflow: hidden;
    object-fit: cover;
    height: 150px;
    margin-bottom: 16px;
    max-width: 100px;
}

.root .coach .name {
    font-weight: bold;
    margin: 0;
}`,
	html: `
` 
}

class sdwAcademyCoaches extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.classList.add("autocenter")
    }
}

shadows["sdwAcademyRow"] = {
	tag: "sdw-academy-row",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    background-color: white;
    display: block;
}

.root {
    align-items: stretch;
    background-color: white;
    display: flex;
    justify-content: center;
    overflow: hidden;
}

@media only screen and (max-width: 768px) {
    .root {
        flex-direction: column;
    }
}

.root p {
    margin: 8px 0;
}

.root .text {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    justify-content: center;
    padding: 0 32px;
    text-align: left;
}

@media only screen and (max-width: 768px) {
    .root .text {
        font-size: 1em;
        text-align: center;
        width: 100%;
    }
}

.root .containerImage {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    padding: 16px 0;
    justify-content: center;
    width: 50%;
}

@media only screen and (max-width: 768px) {
    .root .containerImage {
        width: 100%;
    }
}

.root .containerImage img {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2), 0 2px 17px 0 rgba(0,0,0,0.2);
    border-radius: 16px;
    filter: saturate(1.25);
    max-height: 300px;
    object-fit: cover;
    overflow: hidden;
    width: 100%;
}

.root .imageJoeur  {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    padding: 16px 32px;
    width: 50%;
}

@media only screen and (max-width: 768px) {
    .root .imageJoeur {
        width: 100%;
    }
}

.root .imageJoeur img {
    object-fit: cover;
    overflow: hidden;
    width: 300px;
}

.root .imageCarousel  {
    box-sizing: border-box;
    display: flex;
    height: 300px;
    padding: 16px 32px;
    width: 50%;
}

@media only screen and (max-width: 768px) {
    .root .imageCarousel {
        width: 100%;
    }
}

.root .imageCarousel sdw-carousel-arrows {
    border-radius: 16px;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2), 0 2px 17px 0 rgba(0,0,0,0.2);
    overflow: hidden;
}`,
	html: `
` 
}

class sdwAcademyRow extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.classList.add("autocenter")
    }
}

shadows["sdwAcademySignature"] = {
	tag: "sdw-academy-signature",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    background-color: white;
    display: block;
}

.root {
    align-items: stretch;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.root .text {
    font-size: 1.2em;
    font-style: italic;
    margin-bottom: 0;
}

.root .signature {
    color: rgb(107, 107, 107);
    text-align: right;
    margin-top: 0;
}`,
	html: `
` 
}

class sdwAcademySignature extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.classList.add("autocenter")
    }
}

shadows["sdwAcademyTalent"] = {
	tag: "sdw-academy-talent",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    background-color: white;
    display: block;
}

.root {
    align-items: stretch;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.root .title {
    background-color: lightgray;
    border-radius: 8px;
    margin: 16px 0;
    text-align: center;
    padding: 16px;
}

.root .squares {
    align-items: stretch;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
}

@media only screen and (max-width: 768px) {
    .root .squares {
        flex-wrap: wrap;
    }
}

.root .squares > div {
    align-items: center;
    background-color: rgb(232, 232, 232);
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    margin: 0 8px;
    padding: 16px;
    text-align: center;
    width: 150px;
}

@media only screen and (max-width: 768px) {
    .root .squares > div {
        margin: 8px 0;
        width: 45%;
    }
}

.root .squares > div:first-child {
    margin-left: 0;
}

.root .squares > div:last-child {
    margin-right: 0;
}

.root > h2 {
    color: #0280cd;
    font-weight: lighter;
    margin: 16px 0;
    text-align: left;
}

@media only screen and (max-width: 768px) {
    .root > h2 {
        font-size: 1.25em;
    }
}`,
	html: `
` 
}

class sdwAcademyTalent extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.classList.add("autocenter")
    }
}

shadows["sdwAcademyTitle"] = {
	tag: "sdw-academy-title",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    background-color: white;
    display: block;
}

.root {
    padding-top: 16px;
}

.root h1 {
    color: #0280cd;
    margin: 0;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    .root h1 {
        font-size: 1.75em;
    }
}`,
	html: `
` 
}

class sdwAcademyTitle extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.classList.add("autocenter")
    }
}

shadows["sdwCarouselArrows"] = {
	tag: "sdw-carousel-arrows",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    width: 100%;
}

.root {
    height: 100%;
    overflow: hidden;
    position: relative;
}

.contents { 
    box-sizing: border-box;
    display: flex;
    height: 100%;
    transform: translate3d(0, 0, 0);
    transition: transform 250ms 0ms ease;
}

.content { 
    background-color: lightgrey;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    min-width: 100%;
    object-fit: cover;
    position: relative;
}

.content .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}

.content p {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    color: #fff;
    font-size: 1.2em;
    left: 0;
    line-height: 1.5;
    margin: 0;
    padding: 16px 64px;
    position: absolute;
    right: 0;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 1);
    z-index: 1;
}

.root .leftArrowBox { 
    align-items: center;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transform: scale3d(0, 0, 1);
    transition: transform 250ms 0ms ease, opacity 250ms 0ms ease;
    width: 50px;
}

.root .leftArrow { 
    border-right: solid 8px white;
    border-top: solid 8px white;
    cursor: pointer;
    height: 16px;
    transform: rotate3d(0, 0, 1, 225deg);
    width: 16px;
}

.root .rightArrowBox { 
    align-items: center;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 250ms 0ms ease, opacity 250ms 0ms ease;
    width: 50px;
}

.root .rightArrow { 
    border-right: solid 8px white;
    border-top: solid 8px white;
    cursor: pointer;
    height: 16px;
    transform: rotate3d(0, 0, 1, 45deg);
    width: 16px;
}`,
	html: `
<div class="contents" data-carousel="contents">

</div>
<div class="leftArrowBox">
    <div class="leftArrow"></div>
</div>
<div class="rightArrowBox" data-carousel="rightArrow">
    <div class="rightArrow"></div>
</div>
` 
}

class sdwCarouselArrows extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.querySelector(".contents").innerHTML = this.innerHTML
        this.elmRoot.querySelector(".leftArrow").addEventListener('click', () => { this.setCarouselArrows('left') })
        this.elmRoot.querySelector(".rightArrow").addEventListener('click', () => { this.setCarouselArrows('right') })
    }

    setCarouselArrows(direction) {

        let num = 0
        let refContents = this.elmRoot.querySelector('.contents')
        let refLeftArrowBox = this.elmRoot.querySelector('.leftArrowBox')
        let refRightArrowBox = this.elmRoot.querySelector('.rightArrowBox')
        let numContents = (refContents.children.length - 1)
    
        if (refContents.style.transform != '') {
            num = -1 * (parseInt((refContents.style.transform.replace('translateX(', '')).replace('%)', '')) / 100)
        }
        
        if (direction == 'left') { num = num - 1; } else { num = num + 1; }
        
        if (num <= 0) { 
            refLeftArrowBox.style.opacity = '0'
            refLeftArrowBox.style.transform = 'scale3d(0, 0, 0)'
            refLeftArrowBox.style.pointerEvents = 'none'
        } else {
            refLeftArrowBox.style.opacity = '1'
            refLeftArrowBox.style.transform = 'scale3d(1, 1, 1)'
            refLeftArrowBox.style.pointerEvents = 'initial'
        }
        if (num >= numContents) { 
            refRightArrowBox.style.opacity = '0'
            refRightArrowBox.style.transform = 'scale3d(0, 0, 0)'
            refRightArrowBox.style.pointerEvents = 'none'
        } else {
            refRightArrowBox.style.opacity = '1'
            refRightArrowBox.style.transform = 'scale3d(1, 1, 1)'
            refRightArrowBox.style.pointerEvents = 'initial'
        }
    
        refContents.style.transform = 'translateX(-' + (num * 100) + '%)'
    }
}

shadows["sdwFeatured"] = {
	tag: "sdw-featured",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    align-items: center;
    background-image: url("images/introBack.jpg");
    background-position: left center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(0.8);
    display: flex;
    height: 500px;
}

@media only screen and (max-width: 768px) {
    :host {
        height: 300px;
    }
}

.root {
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
}

h1 {
    font-size: 2.5em;
}

@media only screen and (max-width: 768px) {
    h1 {
        font-size: 1.5em;
    }
}

p {
    font-size: 1.25em;
    margin: 0;
}`,
	html: `
` 
}

class sdwFeatured extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.classList.add("autocenter")
    }
}

shadows["sdwFlags"] = {
	tag: "sdw-flags",
	css: `
:host {
    display: block;
}

.root {
    display: flex;
    height: 20px;
    width: 100%;
}

.flag {
    background-repeat: repeat-x;
    width: 50%;
}

.flagCI {
    background-image: url("images/flagCI.svg");
}

.flagSP {
    background-image: url("images/flagSP.svg");
}`,
	html: `
<div class="flag flagCI"></div>
<div class="flag flagSP"></div>` 
}

class sdwFlags extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.classList.add("autocenter")
    }
}

shadows["sdwHeader"] = {
	tag: "sdw-header",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    background-color: rgba(255, 255, 255, 0.65);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    backdrop-filter: blur(10px) saturate(180%);
    display: block;
    position: sticky;
    top: 0;
    z-index: 10000;
}

.root {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
}

img {
    height: 50px;
    transform: scale(1.35);
}

h1 {
    animation: titleShine 15s linear infinite;
    background: linear-gradient(45deg, goldenrod, rgb(234, 184, 58), #f5e473, goldenrod);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 2.25em;
    margin: 0;
}

@media only screen and (max-width: 768px) {
    h1 {
        font-size: 1.15em;
        max-width: 50%;
        text-align: right;
    }
}

@keyframes titleShine {
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
}`,
	html: `
` 
}

class sdwHeader extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.classList.add("autocenter")
    }
}

shadows["sdwPromoContact"] = {
	tag: "sdw-promo-contact",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    background-color: #443B24;
    display: block;
    padding: 16px 0;
}

.root {
    align-items: center;
    background-color: white;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    overflow: hidden;
    padding: 16px 0;
}

@media only screen and (max-width: 768px) {
    .root {
        font-size: 0.9em;
    }
}

.root .row {
    display: flex;
    margin: 8px 0;
    width: 100%;
}

@media only screen and (max-width: 768px) {
    .root .row {
        flex-direction: column;
        width: 90%;
    }
}

.root .row .field {
    box-sizing: border-box;
    color: gray;
    padding: 0 2px;
    text-align: right;
    width: 50%;
}

@media only screen and (max-width: 768px) {
    .root .row .field {
        text-align: left;
    }
}`,
	html: `
` 
}

class sdwPromoContact extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.classList.add("autocenter")
    }
}

shadows["sdwPromoRow"] = {
	tag: "sdw-promo-row",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    background-color: #443B24;
    display: block;
}

.root {
    padding-top: 16px;
}

.content {
    align-items: stretch;
    background-color: white;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    margin: 0;
    overflow: hidden;
}

@media only screen and (max-width: 768px) {
    .content {
        flex-direction: column;
    }
}

.content .text {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    justify-content: center;
    padding: 16px 32px;
    text-align: center;
    width: 50%;
}

@media only screen and (max-width: 768px) {
    .content .text {
        font-size: 1em;
        width: 100%;
    }
}

.content img {
    /* filter: saturate(1.5) hue-rotate(-30deg); */
    filter: saturate(1.5);
    height: 300px;
    object-fit: cover;
    width: 50%;
}

@media only screen and (max-width: 768px) {
    .content img {
        width: 100%;
    }
}`,
	html: `
<div class="content"></div>` 
}

class sdwPromoRow extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.querySelector(".content").innerHTML = this.innerHTML
        this.elmRoot.classList.add("autocenter")
    }
}

shadows["sdwPromoTitle"] = {
	tag: "sdw-promo-title",
	css: `
.autocenter {
    margin: 0 auto;
    width: calc(100% - 32px);
    max-width: 1024px;
}

a {
    color: #0280cd;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #0280cd;
    text-decoration: none;
}

:host {
    background-color: #443B24;
    display: block;
}

.root {
    padding-top: 16px;
}

.root h1 {
    color: white;
    margin: 0;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    .root h1 {
        font-size: 1.75em;
    }
}`,
	html: `
` 
}

class sdwPromoTitle extends ShadowObject {
    
    constructor () {
        super()
    }

    async load () {
        this.elmRoot.classList.add("autocenter")
    }
}
