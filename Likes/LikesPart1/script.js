var num = 0;
var likeElement = document.querySelector("#likeUp");

function addLike() {
    num++;
    likeElement.innerText = num + " Like(s)";
}