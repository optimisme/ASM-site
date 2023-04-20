
function setCarouselArrows(ref, direction) {
    let num = 0
    let obj = ref.parentNode.parentNode
    let refContents = obj.querySelector('.contents')
    let numContents = (refContents.children.length - 1)

    if (refContents.style.transform != '') {
        num = -1 * (parseInt((refContents.style.transform.replace('translateX(', '')).replace('%)', '')) / 100)
    }
    
    if (direction == 'left') { num = num - 1; } else { num = num + 1; }
    
    if (num <= 0) { 
        obj.querySelector('.leftArrowBox').style.opacity = '0'
        obj.querySelector('.leftArrowBox').style.transform = 'scale3d(0, 0, 0)'
        obj.querySelector('.leftArrowBox').style.pointerEvents = 'none'
    } else {
        obj.querySelector('.leftArrowBox').style.opacity = '1'
        obj.querySelector('.leftArrowBox').style.transform = 'scale3d(1, 1, 1)'
        obj.querySelector('.leftArrowBox').style.pointerEvents = 'initial'
    }
    if (num >= numContents) { 
        obj.querySelector('.rightArrowBox').style.opacity = '0'
        obj.querySelector('.rightArrowBox').style.transform = 'scale3d(0, 0, 0)'
        obj.querySelector('.rightArrowBox').style.pointerEvents = 'none'
    } else {
        obj.querySelector('.rightArrowBox').style.opacity = '1'
        obj.querySelector('.rightArrowBox').style.transform = 'scale3d(1, 1, 1)'
        obj.querySelector('.rightArrowBox').style.pointerEvents = 'initial'
    }

    refContents.style.transform = 'translateX(-' + (num * 100) + '%)'
}
