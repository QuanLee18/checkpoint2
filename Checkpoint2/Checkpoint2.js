document.querySelector("#menu_nhahang");

let menu = ["rau xào","thịt luộc","gà rán"];
let menu1 = document.getElementById('menuC')
let menu2 = document.getElementById('menuR')
let menu3 = document.getElementById('menuU')
let menu4 = document.getElementById('menuD')
if(menu1.value.length==0){
    alert("Bạn chưa điền yêu cầu");
}

else if(localStorage.menu1){
    prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
    let menu1 = JSON.parse(localStorage.menu1);
    localStorage.setItem("menu1", JSON.stringify("menu1"));
}
else if(localStorage.menu2){
    alert(menu.join(menu1))
}
else if(localStorage.menu3){
    prompt("Mời người dùng nhập vào tên món muốn update")
    menu.join(menu1).indexOf("") 
    prompt("Mời người dùng nhập vào tên món ăn mới")
    let menu3 = JSON.parse(localStorage.menu3);
    localStorage.setItem("menu3", JSON.stringify("menu3"));
}
else if(localStorage.menu4){
    prompt("Mời người dùng nhập vào tên món muốn Delete")
    menu.join(menu1).indexOf("")
    localStorage.removeItem("menu4",JSON.stringify("menu4"));
    menu.splice();
}
