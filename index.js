 let listcontainer = document.getElementById("list-container");
      let inputbox  = document.getElementById ("input-box");
      
      function addTask(){
        if(inputbox.value =="")
      {
        alert("you must write somentihng")
      }
      else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
         deletetask(li);

        
   
      }

      inputbox.value = ""
      }deletbtn.onclick

      function deletetask(li){
       let deletbtn = document.createElement("button");
       deletbtn.textContent = "delete";
       li.appendChild(deletbtn)
       deletbtn.onclick = function(){
        li.remove();
       }
      }