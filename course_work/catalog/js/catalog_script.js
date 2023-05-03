let xmlhttp = new XMLHttpRequest;
xmlhttp.open("GET", "../catalog/xml/catalog_data.xml", false);
xmlhttp.send();
let xmlDoc = xmlhttp.responseXML;
let len = xmlDoc.getElementsByTagName('item').length;

for(let i = 0; i < len; i++){
    let item = xmlDoc.getElementsByTagName('item')[i].childNodes;
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = item[1].innerHTML;
    let model = document.createElement('p');
    model.innerHTML = item[3].innerHTML;
    let price = document.createElement('p');
    price.innerHTML = item[5].innerHTML;

    var button = document.createElement('button');
    button.textContent = 'Подробнее...'; 
    button.onclick =  function()
    {
        window.location = "item_page/item_page.html?id=" + i;
    }
    div.appendChild(img);
    div.appendChild(model);
    div.appendChild(price);
    div.appendChild(button);
    
    model.className = 'model';
    price.className = 'price'
    div.className = 'item';
    
    let catalog_items = document.body.getElementsByClassName('items')[0];
    catalog_items.append(div);
}
