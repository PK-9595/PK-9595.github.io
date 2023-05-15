// For Javascript geometric properties testing - related to box model


// Add a box right below the cursor, including the coordinates of the cursor pointer.
// Add a pointer event so it'll move with the cursor
document.addEventListener("mousemove",trackCursor)
function trackCursor(event){
    cursorCoordinates.style.left= event.clientX + 'px'
    cursorCoordinates.style.top= event.clientY + 20 + 'px'
    cursorCoordinates.textContent = '<' + (event.clientX + window.scrollX) + ' , ^' + (event.clientY + window.scrollY)
}

// Experiments