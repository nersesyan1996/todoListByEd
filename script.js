let input = document.querySelector(".form-control");
let btnprimary = document.querySelector(".btn");
let todoArray = [];
let list_cont = document.querySelector(".list-cont");

btnprimary.addEventListener("click", () => {
  createtodoitems(input.value);
editfunction() 
// removeList()
});
btnprimary.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    createtodoitems(input.value);
editfunction() 
// removeList() 
  }
});


function creattodofunc(input) {

  let parent3 = document.createElement("div");
  parent3.classList.add("parent3"); 

  parent3.innerHTML = ` <div class="sections ">
                              <div class="sections1">
                              <h5 class='todoItemvalue' contenteditable="false" >${input}</h5>
                              </div>
                              <div class="sections2">

                                    <i class="bi bi-check2 ready displayNone" ></i>
                                    <i class="bi bi-pen edit" ></i>

                                    <input type="checkbox" class="checkinp" >
                                    <i class="bi bi-trash-fill del " ></i>
                              </div>
                       </div> `;
  list_cont.append(parent3);

  crossingline()
}

function createtodoitems(){

  if (input.value) {
    let todoitem = {
      value: input.value,
      checked: false,
    };

    input.value = "";
    todoArray.push(todoitem);
    localStorage.setItem("testObject", JSON.stringify(todoArray));
    let fromLocal = JSON.parse(localStorage.getItem("testObject"));
    
    creattodofunc(fromLocal[fromLocal.length - 1].value);
    return todoArray;

  }

};

if (localStorage.getItem("testObject")) {
  todoArray.push(...JSON.parse(localStorage.getItem("testObject")));
  todoArray.forEach((v, i) => {
    creattodofunc(v.value);
      if (v.checked == true) {

        let divval = document.querySelectorAll(".todoItemvalue");
        let checkinp = document.querySelectorAll(".checkinp");
        divval[i].style.textDecoration = "line-through";
        checkinp[i].checked = true;
      }
  });

}
 
function crossingline() {

  let checkinp = document.querySelectorAll(".checkinp");
  checkinp.forEach((val,ind)=>{
    val.addEventListener("click",()=>{
      todoArray.length = 0
      todoArray.push(...JSON.parse(localStorage.getItem("testObject")));

      let divval = document.querySelectorAll(".todoItemvalue");
      if (val.checked==true) {

        divval[ind].style.textDecoration = "line-through";
        todoArray[ind].checked=val.checked
        localStorage.setItem("testObject", JSON.stringify(todoArray));
        removeList()

        
      } else {

        divval[ind].style.textDecoration = "none";
        todoArray[ind].checked=val.checked
        localStorage.setItem("testObject", JSON.stringify(todoArray));
        removeList()

      }
     
    })
   
  })
}
function removeList() {
  let del = document.querySelectorAll(".del");
  let parent3 = document.querySelectorAll(".parent3");
  // todoArray.length = 0
  // todoArray.push(...JSON.parse(localStorage.getItem("testObject")));

  del.forEach((val,ind)=>{
    val.addEventListener("click",()=>{
  
      if (todoArray[ind].checked===true) {
        console.log(ind);
          // parent3[ind].remove()
          // todoArray.splice(ind,1)
          // let user = todoArray.filter(v => v.value != undefined);
         
      
          
          // let list_cont = document.querySelector(".list-cont");
          // list_cont.innerHTML = ''
          // user.forEach((v, i) => {
          //   creattodofunc(v.value);
          //     if (v.checked == true) {
        
          //       let divval = document.querySelectorAll(".todoItemvalue");
          //       let checkinp = document.querySelectorAll(".checkinp");
          //       divval[i].style.textDecoration = "line-through";
          //       checkinp[i].checked = true;
          //     }
          // });


          // localStorage.setItem("testObject", JSON.stringify(user));
      }
    })
   })


//    function arrayRemove(arr, value) { 
    
//     return arr.filter(function(ele){ 
//         return ele != value; 
//     });
// }

// var result = arrayRemove(array, 6);


}


function editfunction() {
  let edit = document.querySelectorAll('.edit')
  let ready = document.querySelectorAll('.ready')
  let todoItemvalue = document.querySelectorAll('.todoItemvalue')

edit.forEach((v,ind)=>{
      v.addEventListener('click',()=>{
        todoItemvalue[ind].setAttribute('contenteditable',true)

      v.classList.add("displayNone");
      ready[ind].classList.remove("displayNone");
    })
})
ready.forEach((v,ind)=>{
  v.addEventListener('click',()=>{
               todoItemvalue[ind].setAttribute('contenteditable',false)
               todoArray.length=0  
               todoArray.push(...JSON.parse(localStorage.getItem("testObject")));
               todoArray[ind].value=todoItemvalue[ind].textContent
               localStorage.setItem("testObject", JSON.stringify(todoArray));
  v.classList.add("displayNone");
  edit[ind].classList.remove("displayNone");
})
})


}
editfunction() 
removeList()
