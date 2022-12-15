let input = document.querySelector(".form-control");
let btnprimary = document.querySelector(".btn");
let todoArray = [];
let list_cont = document.querySelector(".list-cont");
let parent3 = document.querySelectorAll(".parent3");

let showButton = document
  .querySelector(".showButton")
  .addEventListener("click", () => {
    localStorage.clear();
 
    list_cont.innerHTML = "";
  });

if (localStorage.getItem("testObject")) {
  todoArray.push(...JSON.parse(localStorage.getItem("testObject")));
  todoArray.forEach((v, i) => {
    creattodofunc(v.value);

    if (v.checked == true) {
      let divval = document.querySelectorAll(".todoItemvalue");
      divval[i].style.textDecoration = "line-through";
      let checkinp = document.querySelectorAll(".checkinp");

      checkinp[i].checked = true;
    }
  });
}

function remove(del, fromLocal) {
  del.forEach((v, delindex) => {
    v.addEventListener("click", () => {
      fromLocal.forEach((valid, ind) => {
        if (valid.checked === true && ind ==delindex) {
              console.log(valid);

          fromLocal.splice(delindex, 1);
          list_cont.innerHTML = "";
          fromLocal.forEach((v) => creattodofunc(v.value));
          localStorage.setItem("testObject", JSON.stringify(fromLocal));
        }
      });
    });
  });
}

function creattodofunc(input) {
  let parent3 = document.createElement("div");
  parent3.classList.add("parent3");

  parent3.innerHTML = ` <div class="sections1">

                              <h5 class='todoItemvalue' contenteditable="true">${input}</h5>
                              </div>
                              <div class="sections">

                              <i class="bi bi-check2"></i>

                              <input type="checkbox" class="checkinp" >
                              
                              <i class="bi bi-trash-fill del"></i>
                              </div> `;
  list_cont.append(parent3);

  let checkinp = document.querySelectorAll(".checkinp");
  let fromLocal = JSON.parse(localStorage.getItem("testObject"));
  let del = document.querySelectorAll(".del");

  checkinp.forEach((val, index) => {
    val.addEventListener("click", () => {
      checkingFunk(val, index, fromLocal);
    });
  });

  remove(del, fromLocal);
}

function checkingFunk(val, index, fromLocal) {
  let divval = document.querySelectorAll(".todoItemvalue");
  if (val.checked === true) {
    fromLocal[index].checked = true;
    divval[index].style.textDecoration = "line-through";
    localStorage.setItem("testObject", JSON.stringify(fromLocal));
  } else {
    divval[index].style.textDecoration = "none";
    fromLocal[index].checked = false;
    localStorage.setItem("testObject", JSON.stringify(fromLocal));
  }
}

let createtodoitems = () => {
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

    // let answer = document.querySelector(".todoItemvalue").contentEditable;
    return todoArray;
  }
};

btnprimary.addEventListener("click", () => {
  createtodoitems();
});
btnprimary.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    createtodoitems();
  }
});
