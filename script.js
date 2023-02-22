const grid = document.getElementById("grid");


function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "cell";
        cell.onmouseover = sketch;
      };
    };
};  

var sketch = function() {
    this.style.background = 'black';
};


let clear = document.getElementById("clear");
    clear.onclick = function() {
    var elements = document.getElementsByClassName('cell');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = "ghostwhite";
    };
};

let clear1 = document.getElementById("clear1");
    clear1.onclick = function() {
        var elements = document.getElementsByClassName('cell');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background = "ghostwhite";
        };
    };

makeGrid(106, 199);

sketch();
