var item = [] 
var data = document.getElementById("data")
console.log(data.value)




function edit(component){
    var comp = component.parentNode.parentNode.firstElementChild
     console.log(comp)
     
     var newText = prompt("Enter New Text ")
     
     if(newText == "" ){
         alert("its Empty bruhhh")
        }
        else{
            comp.innerText= newText
        }
    }
    
function del(component){
    //gets the present component and we have to access so we have to remove the parent div
    component.parentNode.parentNode.remove()
    
}

// <div class="item">
//   <div class="text">dsadas</div>
//   <div class="btns">
//                  <button  onclick="edit" >Edit</button> 
//                  <button  onclick="del">DELETE</button>
//    </div>
// </div>
function getData(){
    //Creating item div
    var data = document.getElementById("data")
    
    var item1 = document.createElement("div")
    item1.setAttribute("class","item")
    
    

    //Creating item Text which is child of item 
    var itemText = document.createElement("div")
    itemText.setAttribute("class","text")
    var text = document.createTextNode(data.value)
    itemText.appendChild(text)
    // Creating item btns part which is also part of item div
    var itemBtns = document.createElement("div")
    itemBtns.setAttribute("class","btns")

    item1.appendChild(itemText)
    item1.appendChild(itemBtns)

    //Creating 2  Btns child of itemBtns
    var editBtns = document.createElement("button")
    editBtns.setAttribute("onclick","edit(this)")
    editBtns.setAttribute("class","btn")
    editBtns.appendChild(document.createTextNode("Edit"))
    itemBtns.appendChild(editBtns)

    //Creating 2  Btns child of itemBtns
    var delBtns = document.createElement("button")
    delBtns.appendChild(document.createTextNode("Delete"))
    delBtns.setAttribute("class","btn red")
    
    delBtns.setAttribute("onclick","del(this)")
    itemBtns.appendChild(delBtns)

    var display = document.getElementById("disp")
    display.appendChild(item1)
    console.log(item1)
    

    data.value = ""

}