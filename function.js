
function clearInput(){
    phone_name.value="";
    phone_cpu.value="";
    phone_camera.value="";
    phone_display.value="";
    phone_memory.value="";
    phone_ram.value="";
}
function displayTable(arr){
    for (let i=0;i<arr.length;i++){
        addRow(arr[i]);
    }
}
function addRow(arr){
    let tr= document.createElement("tr");
    let td_id= document.createElement("td");
    let td_name=document.createElement("td");
    let td_ram=document.createElement("td");
    let td_cpu=document.createElement("td");
    let td_camera=document.createElement("td");
    let td_memory=document.createElement("td");
    let td_display=document.createElement("td");
    let td_edit=document.createElement("td");
    let td_delete=document.createElement("td");
    td_edit.name="edit";
    td_edit.classList="edit";
    td_edit.innerHTML="Edit";
    td_delete.name="delete";
    td_delete.classList="delete";
    td_delete.innerHTML="Delete";
    td_id.innerText=arr.id;
    td_name.innerText=arr.name;
    td_ram.innerText=arr.ram;
    td_cpu.innerText=arr.cpu;
    td_camera.innerText=arr.camera;
    td_memory.innerText=arr.memory;
    td_display.innerText=arr.display;
    tr.appendChild(td_id);
    tr.appendChild(td_name);
    tr.appendChild(td_ram);
    tr.appendChild(td_cpu);
    tr.appendChild(td_camera);
    tr.appendChild(td_memory);
    tr.appendChild(td_display);
    tr.appendChild(td_edit);
    tr.appendChild(td_delete);
    main_table.appendChild(tr);
}