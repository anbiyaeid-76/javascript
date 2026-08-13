// Save name
function saveName() {

    let name = document.getElementById("name").value;

    sessionStorage.setItem("studentName", name);

    document.getElementById("result").textContent =
        "Saved: " + name;
}


// Get saved name when the page loads
window.onload = function () {

    let savedName = sessionStorage.getItem("studentName");

    if (savedName) {

        document.getElementById("name").value = savedName;

        document.getElementById("result").textContent =
            "Welcome back, " + savedName;
    }
};


// Delete name
function deleteName() {

    sessionStorage.removeItem("studentName");

    document.getElementById("name").value = "";

    document.getElementById("result").textContent =
        "Name deleted!";
}