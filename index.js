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

// Experiments
box1.style.position='absolute'
box1.style.bottom = 10 + 'px'