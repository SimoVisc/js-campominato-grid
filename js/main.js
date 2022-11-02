

const boardContainer = document.querySelector(".board");
for( let i=1; i<=100; i++) {
    const boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("board-number");
    boardCell.addEventListener("click", function colorFunction(){
        console.log(this);
        this.style.backgroundColor = 'red';
    })
    boardContainer.append(boardCell);
}