// let todo=[];
// let req = prompt("Enter request to perform the task");
// while(true){
//     if(req=="quit"){
//         console.log(" You Quit the todo");
//         break;
//     }
    
//     if(req=="list"){
//         console.log("----------");
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("----------");
//     }else if(req=="add"){
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("added successfully")
//     }else if(req=="delete"){
//         let idx = prompt("Please enter the task index you want to delete");
//         todo.splice(idx,1);
//         console.log("deleted succesfully");
//     }else{
//         console.log("You enterd a wrong request")
//     }
//     req = prompt("Enter request to perform the task");
// }



// Todo App using only JS//
let heading=document.querySelector("h1");
let input= document.querySelector("input");
let addbtn= document.querySelector("button");
let ul= document.querySelector("ul");

addbtn.addEventListener("click", function(){
    let item= document.createElement("li");
    item.innerText=input.value;
    ul.appendChild(item);
    input.value="";

    let deletebtn= document.createElement("button");
    deletebtn.classList.add("delete");
    deletebtn.innerText="Delete";
    item.appendChild(deletebtn);
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem= event.target.parentElement;
        listItem.remove();
    }
});
    
    
     















