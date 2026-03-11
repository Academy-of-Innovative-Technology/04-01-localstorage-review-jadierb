var key = "userData";


// SAVE
document.querySelector(".save").onclick = function() {

    const saveKey = document.querySelector("#saveKey").value;
    const saveValue = document.querySelector("#saveValue").value;

    if (saveKey && saveValue) {
        localStorage.setItem(saveKey, saveValue);

        document.querySelector("#saveKey").value = "";
        document.querySelector("#saveValue").value = "";
        alert("Data saved successfully;");
    } else {
        alert("please enter both key and value fields.");
    }

    };
    

    


// LOAD
document.querySelector(".load").onclick = function() {
const loadKey = document.querySelector("#loadkey").value;

if (loadKey) {}
const loadedValue = localStorage.getItem(loadKey);

if (loadedValue !== null) {
    document.querySelector("#loadValue").value = loadedvalues;
} else {
    alert("Please enter a key name.");

}
};


// LOAD
document.querySelector(".update").onclick = function() {

};

// DELETE
document.querySelector(".delete").onclick = function() {

};
