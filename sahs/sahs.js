
const karalisB = document.getElementById("melnais karalis")

const karalisW = document.getElementById("baltais karalis")
const karalieneW = document.getElementById("balta karaliene")
const laidnisW = document.getElementById("balts laidnis")
const zirgsW = document.getElementById("balts zirgs")
const tornisW = document.getElementById("balts tornis")


const squares = document.querySelectorAll(".square")
const infoDisplay = document.querySelector("#info")

karalisW.addEventListener("drag", dragging)
karalisW.addEventListener("dragstart", dragStart)

karalieneW.addEventListener("drag", dragging)
karalieneW.addEventListener("dragstart", dragStart)

laidnisW.addEventListener("drag", dragging)
laidnisW.addEventListener("dragstart", dragStart)

zirgsW.addEventListener("drag", dragging)
zirgsW.addEventListener("dragstart", dragStart)

tornisW.addEventListener("drag", dragging)
tornisW.addEventListener("dragstart", dragStart)





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
