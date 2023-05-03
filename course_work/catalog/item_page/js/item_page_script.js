str = window.location + "0"
str = str.slice(58,-1);

let xmlhttp = new XMLHttpRequest;
xmlhttp.open("GET", "../../catalog/xml/catalog_data.xml", false);
xmlhttp.send();
let xmlDoc = xmlhttp.responseXML;

let item = xmlDoc.getElementsByTagName('item')[+str].childNodes

let div = document.createElement('div');
let img = document.createElement('img');
img.src = "../"+item[1].innerHTML;
let model = document.createElement('p');
model.innerHTML = item[3].innerHTML;
let price = document.createElement('p');
price.innerHTML = item[5].innerHTML;
let add = document.createElement('p')
add.innerHTML = item[7].innerHTML;

let item_info = document.body.getElementsByClassName('info')[0];
item_info.append(div);

let text = document.createElement('div'); 
text.appendChild(model);
text.appendChild(price);
text.appendChild(add);
item_info.appendChild(img);
item_info.appendChild(text)

    
model.className = 'model';
price.className = 'price';
add.className = 'add';


function buttonclick() {
let form = document.forms[0];
let name = form.elements.name.value;
let surname = form.elements.surname.value;
let mail = form.elements.mail.value;
let comment = form.elements.comment.value;
let option = form.elements.select.value;

if(!form || !name || !surname || !mail || !comment) {
    alert("Заполните все поля.")
}else{
    str ="Мы с вами свяжимся.\nВаши данные:\nИмя: " + name + "\nФамилия: " +surname + "\nEmail: " + mail + "\nКомментарий к заказу: " + comment + "\nСпособ оплаты: " + option;
    alert(str);
}
}