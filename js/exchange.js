const showmoreButton = document.getElementById("showmoreExchangePage");
const moreOne = document.getElementById("moreOne");
const moreTwo = document.getElementById("moreTwo");

showmoreButton.addEventListener("click", ()=>{
    moreOne.style.display = "grid";
    moreTwo.style.display = "grid";
})