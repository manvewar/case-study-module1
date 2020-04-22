
main_table.onclick=function(ev){
    if(ev.target.matches("td")){
        // access edit
        if(ev.target.name === "edit"){

            let tr_tag = ev.target.parentNode;
            let td_child= tr_tag.children;
            let id = tr_tag.firstChild.innerText-1;
            if (phone_name.value ===""){
                phone_name.value=arrayPhone[id].name;
                phone_ram.value=arrayPhone[id].ram;
                phone_cpu.value=arrayPhone[id].cpu;
                phone_display.value=arrayPhone[id].display;
                phone_camera.value=arrayPhone[id].camera;
                phone_memory.value=arrayPhone[id].memory;
            }else{

                arrayPhone[id].name=phone_name.value;
                arrayPhone[id].ram=phone_ram.value;
                arrayPhone[id].cpu=phone_cpu.value;
                arrayPhone[id].display=phone_display.value;
                arrayPhone[id].camera=phone_camera.value;
                arrayPhone[id].memory=phone_memory.value;
                td_child[1].innerText=phone_name.value;
                td_child[2].innerText=phone_ram.value;
                td_child[3].innerText=phone_cpu.value;
                td_child[4].innerText=phone_camera.value;
                td_child[5].innerText=phone_memory.value;
                td_child[6].innerText=phone_display.value;
                clearInput();
            }
        }
        // access delete
        if(ev.target.name ==="delete"){

            let tr_tag = ev.target.parentNode;``
            let id = tr_tag.firstChild.innerText-1;
            main_table.removeChild(tr_tag);
            arrayPhone.splice(id,1);
        }
    }
}