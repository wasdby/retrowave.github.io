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
function buttonclick(){
    let user = document.body.getElementsByClassName('user')[0];
    let user_to_html = document.createElement('p');
    user_to_html.innerHTML = user.value;  

    let feedback_text = document.getElementsByClassName('feedback_text')[0];
    let feedback_text_to_html = document.createElement('p');
    feedback_text_to_html.innerHTML = feedback_text.value;

    if(!feedback_text.value || !user){
        alert("Заполните все поля.")
    }else{
        let div = document.createElement('div');
        let line = document.createElement('hr');
        let img = document.createElement('img');
        img.src = "../feedback/data/img/user.svg";
        let profile = document.createElement('div');
        profile.className = 'profile';

        profile.appendChild(img);
        profile.appendChild(user_to_html);
        div.appendChild(profile);
        div.appendChild(line);
        div.appendChild(feedback_text_to_html);
        
        user_to_html.className = 'name';
        feedback_text_to_html.className = 'text'
        div.className = 'item';

        let catalog_items = document.body.getElementsByClassName('right')[0];
        catalog_items.append(div);
        document.location = "#footer";
    }

    
}

