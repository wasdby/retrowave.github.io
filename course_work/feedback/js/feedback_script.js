let xmlhttp = new XMLHttpRequest;
xmlhttp.open("GET", "../feedback/xml/feedback_data.xml", false);
xmlhttp.send();
let xmlDoc = xmlhttp.responseXML;
let len = xmlDoc.getElementsByTagName('feedback').length;

for(let i = 0; i < len; i++){
    let item = xmlDoc.getElementsByTagName('feedback')[i].childNodes;
    let div = document.createElement('div');

    let name = document.createElement('p');
    name.innerHTML = item[1].innerHTML;

    let img = document.createElement('img');
    img.src = "../feedback/data/img/user.svg";
    
    let profile = document.createElement('div');

    profile.className = 'profile';
    profile.appendChild(img);
    profile.appendChild(name);

    let line = document.createElement('hr');

    let text = document.createElement('p');
    text.innerHTML = item[3].innerHTML;
    
    div.appendChild(profile);
    div.appendChild(line);
    div.appendChild(text);
    
    name.className = 'name';
    text.className = 'text'
    div.className = 'item';
    
    let catalog_items = document.body.getElementsByClassName('right')[0];
    catalog_items.append(div);
    
}