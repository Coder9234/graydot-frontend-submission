let lists = document.querySelectorAll(".list");
let reset = document.querySelector(".reset");
let rightBox = document.querySelector(".right");
let leftBox = document.querySelector(".left");

// function simply used to define a list
function listDefiner(lists) {
    for (list of lists) {
        list.addEventListener("dragstart", (e) => {
            let selected = e.target;
            selected.classList.add("list-drageffect");
            rightBox.addEventListener("dragover", (e) => {
                console.log("dragged over")
                e.preventDefault();
            })
    
            rightBox.addEventListener("drop", (e) => {
                rightBox.appendChild(selected);
                selected = null;
            })
    
            leftBox.addEventListener("dragover", (e) => {
                e.preventDefault();
            })
    
            leftBox.addEventListener("drop", (e) => {
                leftBox.appendChild(selected);
                selected = null;
            })
        })   
        
        list.addEventListener("dragend", (e) => {
            let selected = e.target;
            selected.classList.remove("list-drageffect");
    
        })
    }
}



reset.addEventListener("click", () => {
    // removing all elements of right box
    while(rightBox.firstChild) {
        rightBox.removeChild(rightBox.firstChild);
    }

    // removing all elements of left box
    while(leftBox.firstChild) {
        leftBox.removeChild(leftBox.firstChild);
    }

    // reset left box
    var count;
    for (count = 1; count <= 4; count++) {
        // new div element
        let listItem = document.createElement("div");
        listItem.draggable = true;
        listItem.classList.add("list");
        listItem.innerHTML = `List Item ${count}`;
        leftBox.appendChild(listItem);
    }
    lists = document.querySelectorAll(".list");
    listDefiner(lists);
})

// call for initiating the lists
listDefiner(lists);