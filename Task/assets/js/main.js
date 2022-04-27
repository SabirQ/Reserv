window.onload=function(){
    const button=document.getElementById("cus-btn");
    const form=document.getElementById("todo-form");
    button.onclick=function(){
        const inputValue = document.getElementById("getValue").value;

       if(inputValue.trim()==""){
          alert("please fill out text area")
       }
       else{
        
        const newDiv=document.createElement("div");
        newDiv.classList.add("todo-list");
        newDiv.innerHTML='<i id="icon" class="fa-regular fa-trash-can"></i>'
        const newSpan=document.createElement("span");
        newSpan.classList.add("cus-span");
        const textSpan=document.createTextNode(inputValue);
        newSpan.appendChild(textSpan);
        form.appendChild(newDiv);
        newDiv.appendChild(newSpan);
       }
           
    };
}