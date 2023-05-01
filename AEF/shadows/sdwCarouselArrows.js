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