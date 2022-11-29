let input = document.querySelector(".form-control");
let btnprimary = document.querySelector(".btn");
let todoArray = [];
let list_cont = document.querySelector(".list-cont");

// let crossLinefunc = ()=>{
//       document.querySelectorAll(".todoItemvalue").forEach((el, i) => {
//         el.addEventListener("click", (v, i) => {
//                v.style.textDecoration = "underline overline";

//         });
//       });
// }
// crossLinefunc()
// function remove() {
//     document.querySelectorAll('.del').forEach((el, i) => {
//         el.addEventListener("click", (v,i) => {
//             // if (todoArray[i].checked===true) {
//                     el.parentNode.remove()
//         todoArray.splice(i,1)

//             // }
//         })
//     })
// }
//   remove();


let checkingFunk = () => {
  let checkinp = document.querySelectorAll(".checkinp");

  checkinp.forEach((v, index) => {

      v.addEventListener("click", (value) => {
        linethroughFunk ()

      if (todoArray[index].checked === false) {
          todoArray[index].checked = true;
        

      } else {
          todoArray[index].checked = false;
      
          // linethroughFunk ()

    }
    });
  });
};

let linethroughFunk = ()=>{
       
          document.querySelectorAll(".todoItemvalue").forEach((el, valueIndex) => {

                 if (todoArray[valueIndex].checked==true) {

                    el.style.textDecoration = "line-through";
                    console.log(valueIndex);
            
                }
                if (todoArray[valueIndex].checked==false) {
                     el.style.textDecoration = "none";
                      
                }
            
         
      })

       //     document.querySelectorAll(".todoItemvalue").forEach((el, i) => {
      //       if (index==i) {
      //         console.log(index,i);

      //     el.style.textDecoration = "none";
      //       }
      // }) 
}
let creattodofunc = (inputvalue) => {
  let parent3 = document.createElement("div");
  parent3.classList.add("parent3");

  parent3.innerHTML = `       <div class="sections1">
                              <h5 class='todoItemvalue'>${inputvalue}</h5>
                              </div>

                              <div class="sections">
                              <input type="checkbox" class="checkinp" id="myCheck">
                              <p class="del">X</p>
                              </div>
                      `;
  list_cont.append(parent3);
  checkingFunk();
};

let todoaddingFunc = () => {
  let inputvalue = input.value;
  if (inputvalue) {
    let todoitoms = {
      id: new Date().getSeconds(),
      todoitem: inputvalue,
      checked: false,
    };

    todoArray.push(todoitoms);
    creattodofunc(inputvalue);
    input.value = "";

    return todoArray;
  }
};

btnprimary.addEventListener("click", () => {
  todoaddingFunc();
});
btnprimary.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    todoaddingFunc();
    // setMyLocalStorage(todoArray);
  }
});

// ------------------------------------------------------------------
// let showButton = document.querySelector(".showButton").addEventListener('click',()=>{
// soweArray();
// // setMyLocalStorage(todoArray);
// })

// function soweArray() {
//     let retrievedObject = JSON.parse(localStorage.getItem("testObject"));
//     console.log(retrievedObject);
// }
// function setMyLocalStorage(todoArray) {
//   let myArray = JSON.parse(localStorage.getItem("testObject"))
//   if (myArray != null) {
//     console.log(myArray);
//   } else {
//     localStorage.setItem("testObject", JSON.stringify(todoArray));
//   }
// }
// setInterval(()=>{
// console.log(todoArray);
// },1000)
// somenewArr.forEach((val, index) => {
//         if (somenewArr.length > 0) {
//           somenewArr.splice(index, 1);
//         }
//       });
// ------------------------------------------------------------------

// somenewArr.forEach((val, index) => {
//         if (somenewArr.length > 0) {
//           somenewArr.splice(index, 1);
//         }
//       });

// edoed-----------------------------------------------------------------------------
// let input = document.querySelector(".form-control");
// let btnprimary = document.querySelector(".btn");
// let todoArray = [];
// let list_cont = document.querySelector(".list-cont");


// function todoaddingFunc() {
//     let parent3 = document.createElement("div");
//     parent3.classList.add(".parent3");

//     parent3.innerHTML = `
//                             <h5>${input.value}</h5>
//                             <input class="form-check-input checkinp" type="checkbox" value="" id="flexCheckIndeterminate">
//                             <p class="del">X</p>`;
//     list_cont.append(parent3);
//     remove()
// };

// btnprimary.addEventListener("click", () => {
//     todoaddingFunc();
// });

// btnprimary.addEventListener("keypress", (e) => {
//     if (e.keyCode === 13) {
//         todoaddingFunc();
//     }
// });

// function remove() {
//     document.querySelectorAll('.del').forEach((el, i) => {
//         el.addEventListener("click", () => {
//             el.parentNode.remove()
//         })
//     })
// }

// function remove() {
//     document.querySelectorAll('.del').forEach((el, i) => {
//         el.addEventListener("click", (v,i) => {
//             // if (todoArray[i].checked===true) {
//                     el.parentNode.remove()    
//         todoArray.splice(i,1)

//             // }
//         })
//     })
// }
//   remove();