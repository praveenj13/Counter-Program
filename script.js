
// Counter Program 

const decreaseBtn = document.getElementById("decreaseBtn").value;
const resetBtn = document.getElementById("resetBtn").value;
const increaseBtn = document.getElementById("increaseBtn").value;

let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count--; 
    document.getElementById("countLabel").textContent = count;
    if (count < 0) {
        document.getElementById("countLabel").style.color = "red";
    }
    else if (count > 0) {
        document.getElementById("countLabel").style.color = "green";
    }
    else {
        document.getElementById("countLabel").style.color = "black";
    }

}

document.getElementById("resetBtn").onclick = function() {
    count = 0; 
    document.getElementById("countLabel").textContent = count;
    document.getElementById("countLabel").style.color = "black";
}

document.getElementById("increaseBtn").onclick = function() {
    count++; 
    document.getElementById("countLabel").textContent = count;
    if (count < 0) {
        document.getElementById("countLabel").style.color = "red";
    }
    else if (count > 0) {
        document.getElementById("countLabel").style.color = "green";
    }
    else {
        document.getElementById("countLabel").style.color = "black";
    }
  
}