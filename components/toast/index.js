function toastBarFunc() {
    let x = document.getElementById("baseline-toast");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

// tostbar2
function leadingToastFunc() {
    let snackbarTwo = document.getElementById("leading-toast");
    snackbarTwo.className = "show";
    setTimeout(function () {
        snackbarTwo.className = snackbarTwo.className.replace("show", "");
    }, 3000);
}
