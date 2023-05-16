// For Javascript geometric properties testing - related to box model


// Add a box right below the cursor, including the coordinates of the cursor pointer.
// Add a pointer event so it'll move with the cursor
document.addEventListener("mousemove",trackCursor)
function trackCursor(event){
    cursorCoordinates.style.left= event.clientX + 'px'
    cursorCoordinates.style.top= event.clientY + 20 + 'px'
    cursorCoordinates.textContent = '<' + (event.clientX + window.scrollX) + ' , ^' + (event.clientY + window.scrollY)
}

let container = document.querySelector('.container'); //console.log(container)
let box1 = document.querySelector('#box1'); //console.log(box1)
let box2 = document.querySelector('#box2'); //console.log(box2)
let box3 = document.querySelector('#box3'); //console.log(box2)
let box4 = document.querySelector('#box4'); //console.log(box2)
box1.style.overflow='scroll'
box3.style.overflow='scroll'

box1.style.left='0px'; box1.style.top='0px';
box2.style.right='0px'; box2.style.top='0px';
box3.style.left='0px'; box3.style.bottom='0px';
box4.style.right='0px'; box4.style.bottom='0px';
let boxes=document.querySelectorAll('.box')
for (box of boxes){
    box.style.width = '100px'
    box.style.height = '100px'
}

// Experiments

    // .offset
    console.log('box1.offsetLeft: ', box1.offsetLeft) // 10, outer border of inner elem to content box of offset parent.
    console.log('box3.offsetTop: ', box3.offsetTop) // 290, outer border of inner elem to content box of offset parent
    console.log('box4.offsetWidth: ', box4.offsetWidth) // 100, outer border to outer border
    console.log('box2.offsetHeight: ', box2.offsetHeight) // 170, outer border to outer border

    console.log("")

    // .client
    console.log('box1.clientLeft: ', box1.clientLeft) // 15, left border thickness - dk how test for scrollbar thickness, chatGPT say wont include
    console.log('box2.clientLeft: ', box2.clientLeft) // 15, left border thickness - dk how test for scrollbar thickness, chatGPT say wont include
    console.log('box3.clientLeft: ', box3.clientLeft) // 15, left border thickness - dk how test for scrollbar thickness, chatGPT say wont include
    console.log('box4.clientLeft: ', box4.clientLeft) // 15, left border thickness - dk how test for scrollbar thickness, chatGPT say wont include
    console.log('box1.clientWidth: ', box1.clientWidth) // 130, outer padding to outer padding - scrollbar excluded
    console.log('box2.clientWidth: ', box2.clientWidth) // 140, outer padding to outer padding - scrollbar excluded
    console.log('box3.clientWidth: ', box3.clientWidth) // 61, outer padding to outer padding - scrollbar excluded
    console.log('box4.clientWidth: ', box4.clientWidth) // 70 , outer padding to outer padding - scrollbar excluded
    // Scrollbars, from a CSS perspective do not affect the size of the content box or padding box. Instead,
    // they overlay on top of the box model within the area of the padding box and content box.
    // This might cause the visible padding to appear smaller since the scrollbar overlaps the edge of the padding box and content box.
    // Additionally, the content might wrap earlier due to the reduced visible space, which can give 
    // the illusion that the content box is smaller while padding thickness remains the same.
    // *Exact behaviour depends on browser and user system settings


    console.log('')
    
    // .style - content-box / border-box, absolute
    console.log('box1.style.left: ', box1.style.left) // 0, outer margin of inner elem to content box of outer elem
    console.log('box1.style.top: ', box1.style.top) // 0, outer margin of inner elem to content box of outer elem
    console.log('box2.style.top: ', box2.style.top) // 0, outer margin of inner elem to content box of outer elem
    console.log('box2.style.right: ', box2.style.right) // 0, outer margin of inner elem to content box of outer elem
    console.log('box3.style.bottom: ', box3.style.bottom) // 0, outer margin of inner elem to content box of outer elem
    console.log('box3.style.left: ', box3.style.left) // 0, outer margin of inner elem to content box of outer elem
    console.log('box4.style.bottom: ', box4.style.bottom) // 0, outer margin of inner elem to content box of outer elem
    console.log('box4.style.right: ', box4.style.right) // 0, outer margin of inner elem to content box of outer elem
    console.log('box1.style.width: ', box1.style.width) // 100, content box width to CSS - same with and without scrollbars
    console.log('box2.style.width: ', box2.style.width) // 100, content box width to CSS
    console.log('box3.style.width: ', box3.style.width) // 100, outer border to outer border width
    console.log('box4.style.width: ', box4.style.width) // 100, outer border to outer border width
