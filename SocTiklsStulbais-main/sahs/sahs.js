

// izveidojam const prieks katra kaulina 
const karalisW = document.getElementById("baltais karalis")
const karalieneW = document.getElementById("balta karaliene")
const laidnisW1 = document.getElementById("balts laidnis1")
const zirgsW1 = document.getElementById("balts zirgs1")
const tornisW1 = document.getElementById("balts tornis1")
const laidnisW2 = document.getElementById("balts laidnis2")
const zirgsW2 = document.getElementById("balts zirgs2")
const tornisW2 = document.getElementById("balts tornis2")

const karalisB = document.getElementById("melnais karalis")
const karalieneB = document.getElementById("melna karaliene")
const laidnisB1 = document.getElementById("melnais laidnis1")
const zirgsB1 = document.getElementById("melnais zirgs1")
const tornisB1 = document.getElementById("melnais tornis1")
const laidnisB2 = document.getElementById("melnais laidnis2")
const zirgsB2 = document.getElementById("melnais zirgs2")
const tornisB2 = document.getElementById("melnais tornis2")


const squares = document.querySelectorAll(".square")
const infoDisplay = document.querySelector("#info")


// katram kaulinam pieliekam klat eventus kas atlauj vinu dragot apkart
karalisW.addEventListener("drag", dragging)
karalisW.addEventListener("dragstart", dragStart)

karalieneW.addEventListener("drag", dragging)
karalieneW.addEventListener("dragstart", dragStart)

laidnisW1.addEventListener("drag", dragging)
laidnisW1.addEventListener("dragstart", dragStart)

zirgsW1.addEventListener("drag", dragging)
zirgsW1.addEventListener("dragstart", dragStart)

tornisW1.addEventListener("drag", dragging)
tornisW1.addEventListener("dragstart", dragStart)

laidnisW2.addEventListener("drag", dragging)
laidnisW2.addEventListener("dragstart", dragStart)

zirgsW2.addEventListener("drag", dragging)
zirgsW2.addEventListener("dragstart", dragStart)

tornisW2.addEventListener("drag", dragging)
tornisW2.addEventListener("dragstart", dragStart)


karalisB.addEventListener("drag", dragging)
karalisB.addEventListener("dragstart", dragStart)

karalieneB.addEventListener("drag", dragging)
karalieneB.addEventListener("dragstart", dragStart)

laidnisB1.addEventListener("drag", dragging)
laidnisB1.addEventListener("dragstart", dragStart)

zirgsB1.addEventListener("drag", dragging)
zirgsB1.addEventListener("dragstart", dragStart)

tornisB1.addEventListener("drag", dragging)
tornisB1.addEventListener("dragstart", dragStart)

laidnisB2.addEventListener("drag", dragging)
laidnisB2.addEventListener("dragstart", dragStart)

zirgsB2.addEventListener("drag", dragging)
zirgsB2.addEventListener("dragstart", dragStart)

tornisB2.addEventListener("drag", dragging)
tornisB2.addEventListener("dragstart", dragStart)



// tbh es nezinu pavaica girtam
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
