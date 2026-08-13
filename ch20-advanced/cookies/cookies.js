// Save a cookie
function saveCookie() {

    let username = document.getElementById("username").value;

    document.cookie = "username=" + username + "; max-age=3600; path=/";

    document.getElementById("result").textContent =
        "Cookie saved!";
}


// Get the cookie
function getCookie() {

    let cookies = document.cookie.split("; ");

    let usernameCookie = cookies.find(function(cookie) {
        return cookie.startsWith("username=");
    });

    if (usernameCookie) {

        let username = usernameCookie.split("=")[1];

        document.getElementById("result").textContent =
            "Welcome, " + username;

    } else {

        document.getElementById("result").textContent =
            "No cookie found!";
    }
}


// Delete the cookie
function deleteCookie() {

    document.cookie =
        "username=; max-age=0; path=/";

    document.getElementById("result").textContent =
        "Cookie deleted!";
}