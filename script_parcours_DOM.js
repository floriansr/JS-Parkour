
// Combien y a-t-il d'éléments <p> présents dans la page HTML ?
let allp = document.getElementsByTagName('p');
console.log(allp.length);

//  Quel est le contenu texte de l'élément portant l'id coucou ?
let idcoucou = document.getElementById('coucou');
console.log(idcoucou.innerText);

// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?
let a = document.getElementsByTagName('a');
console.log(a[2].attributes.href.nodeValue);

// Combien d'éléments portent la classe compte-moi ?
let classname = document.getElementsByClassName('compte-moi');
console.log(classname.length);

// Combien d'éléments <li> portent la classe compte-moi ?
let elements = document.querySelectorAll('li.compte-moi');
console.log(elements.length);

// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?
let b = document.querySelectorAll('li.compte-moi') && document.querySelectorAll('ol.li');
console.log(b.length);

// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu.
let e = document.getElementsByTagName("div");
b = e[0].childNodes[11];
c = b.children[0];
console.log(c.innerText);