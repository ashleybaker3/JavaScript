var num = [0,0,0]
var likeElement = [document.querySelector("#neilUp"), document.querySelector("#nicholeUp"), document.querySelector("#jimUp")];

function addLike(index) {

    num[index]++;
    likeElement[index].innerText = num[index] + " Like(s)";
}