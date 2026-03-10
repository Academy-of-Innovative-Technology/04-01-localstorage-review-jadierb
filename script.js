var key = "userData";


// SAVE
document.querySelector(".save").onclick = function() {

    const saveKey = document.querySelector("#saveKey").value;
    const saveValue = document.querySelector("#saveValue").value;
    localStorage.setItem(saveKey, saveValue);
};


// LOAD
document.querySelector(".load").onclick = function() {

};

// LOAD
document.querySelector(".update").onclick = function() {

};

// DELETE
document.querySelector(".delete").onclick = function() {

};
