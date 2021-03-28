const inp = document.querySelector('#basic-url')

const btn = document.getElementById('addTodo')
const list = document.getElementById('list')
btn.onclick=function (e){
    console.log("clicked")

    const todoText = inp.value;
    const li = document.createElement('li');
    li.innerText=todoText;
    list.append(li);
    li.classList.add("list-group-item");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    inp.value="";
    span.onclick=function(e){
        li.remove();
    }
    



    
    
}
