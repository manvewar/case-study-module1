add_phone.onclick=function(){
    let name=phone_name.value;
    let ram=phone_ram.value;
    let cpu=phone_cpu.value;
    let memory=phone_memory.value;
    let display=phone_display.value;
    let camera=phone_camera.value;
    arrayPhone.push(new Phone(name,ram,cpu,camera,display,memory,arrayPhone.length+1));
    addRow(arrayPhone[arrayPhone.length-1]);
    clearInput();
}