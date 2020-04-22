let phone_name= document.getElementById("phone_name");
let phone_ram= document.getElementById("phone_ram");
let phone_cpu= document.getElementById("phone_cpu");
let phone_memory= document.getElementById("phone_memory");
let phone_display= document.getElementById("phone_display");
let phone_camera= document.getElementById("phone_camera");
let add_phone= document.getElementById("add_phone");
let main_table= document.getElementById("main_table");
let arrayPhone= [];
let iphone= new Phone("Iphone","3gb","i3","12mpx","6inch","16gb",arrayPhone.length+1);
    arrayPhone.push(iphone);
let sony= new Phone("Sony Experia","2gb","i5","10mpx","5inch","32gb",arrayPhone.length+1);
    arrayPhone.push(sony);



displayTable(arrayPhone);


