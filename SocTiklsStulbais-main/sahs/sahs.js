const karalis = document.querySelector(".chess-piece")
const squares = document.querySelectorAll(".square")
const infoDisplay = document.querySelector("#info")

karalis.addEventListener("drag", dragging)
karalis.addEventListener("dragstart", dragStart)



squares.forEach(squares => {
    squares.addEventListener("dragover", dragOver)
    squares.addEventListener("dragenter", dragEnter)
    squares.addEventListener("dragleave", dragLeave)
    squares.addEventListener("drop", dragDrop)
    squares.addEventListener("dragend", dragEnd)
})

let beingDragged

function dragStart(e){
    beingDragged = e.target
}

function dragging(e){
    infoDisplay.textContent = "Tu šobrīd kustini: " + beingDragged.id
}


function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e){
    e.target.classList.add("highlight")
}


function dragLeave (e) { 
    e.target.classList.remove("highlight")
}

function dragDrop(e){
    e.target.append(beingDragged)
    e.target.classList.remove("highlight")
}

function dragEnd(e) {
    e.target.classList.add("target")
    setTimeout(() => e.target.classList.remove("target"), 100)
}
