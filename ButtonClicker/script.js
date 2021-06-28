function signOut(element) {
    if (element.innerText == "Login") {
        element.innerText = "Sign Out";
    }
    else {
        element.innerText = "Login";
    }
}

function hide(element) {
    element.remove();
}