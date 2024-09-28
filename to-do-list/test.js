let form = document.querySelector(".form-list");
let text1 = document.querySelector("#abc12");
let ullist = document.querySelector("#ullist");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  addEl(text1);
});
 
function addEl(txt) {
  let newLi = document.createElement("li");
  if (txt.value.trim() !== "") {
    newLi.innerHTML = `<h2>${txt.value}</h2>
                <input type="checkbox">
                <button class="deletes">Delete</button>
                <button class=" edits">edit</button>`;
  }
    ullist.append(newLi);
  txt.value = "";

  let deletebtn=document.querySelectorAll('.deletes')

deletebtn.forEach((btn)=>{
    btn.addEventListener('click',function(){
        this.closest('li').remove()
    })
})


}


