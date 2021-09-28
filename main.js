function newElement() {
    if (getInputVal()){
        document.getElementById("list").appendChild(createLiItem());
        $(".success").toast("show");
    }
    else {
        $(".error").toast("show");
    }

}

function createLiItem() {
  let newListItem = document.createElement("li");
 
  let textnode = document.createTextNode(getInputVal());
  newListItem.appendChild(textnode);
  newListItem.appendChild(createDelButton());
  return newListItem;
}
function createDelButton() {
  let closeButton = document.createElement("button");
  closeButton.innerHTML = "x";
  closeButton.setAttribute("class", "float-right btn btn-danger");
    closeButton.onclick = function(){
this.parentElement.remove(this);
    }
  return closeButton;
}

function getInputVal() {
  return document.getElementById("task").value===""  ?  false :document.getElementById("task").value;
}

let listCheckToggle = document.querySelector("ul");

listCheckToggle.addEventListener("click", function(e){
e.target.classList.toggle("checked");
});