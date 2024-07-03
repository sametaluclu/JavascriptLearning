let formDom =document.querySelector(`#userForm`)
let taskDom=document.querySelector(`#task`)
formDom.addEventListener(`submit`, formSubmit)
document.addEventListener("DOMContentLoaded",showItem)
let arr=[]

function formSubmit(event){
  event.preventDefault();
  const task=taskDom.value
  if (task === "") {
    alert("Boş Geçilemez!")
    return; // Eğer task boş ise fonksiyondan çık
  }
  addItem(task)
}
let userListDom=document.querySelector(`#userList`)


let siler=document.querySelectorAll(`.remover`)
siler.forEach(item=>{
item.addEventListener(`click`, remover);
}
)

function addItem(task){

  let liDom=document.createElement("li")
  liDom.innerHTML= `${task}
        <button class="remover">Tamamla</button>
  `
  userListDom.append(liDom)
  arr.push(task)
  localStorage.setItem("key", JSON.stringify(arr));
  let newSiler = document.querySelectorAll(".remover");
      newSiler.forEach(item => {
        item.addEventListener("click", remover);
    })
  taskDom.innerHTML.replace()
}

function remover(event){
  const taskItem = event.target.closest('li');
  const taskText = taskItem.firstChild.textContent.trim();
  const index = arr.indexOf(taskText);
      if (index !== -1) {
        arr.splice(index, 1);
        console.log(`"${taskText}" görevi listeden çıkarıldı.`);
      } else {
        console.error(`"${taskText}" görevi dizide bulunamadı.`);
      }
      taskItem.remove();
      let newarr=arr
      localStorage.setItem("key" , JSON.stringify(newarr))
}

function showItem(){
  if (localStorage.getItem("key")) {
    eleman=JSON.parse(localStorage.getItem("key"))
    arr = eleman;

    for(i=0;i<arr.length;i++){
      let liDom=document.createElement("li")
      liDom.innerHTML= `${arr[i]}
      <button class="remover">Tamamla</button>
      `
      userListDom.append(liDom)
      let newSiler = document.querySelectorAll(".remover");
      newSiler.forEach(item => {
        item.addEventListener("click", remover);
    })
  }}}
