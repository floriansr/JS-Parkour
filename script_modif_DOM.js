function changeTitles() {
let a = document.querySelectorAll('h1.jumbotron-heading');
console.log(a[0].innerHTML="Ce que j'ai appris à THP");
//
let b = document.querySelectorAll('p.lead.text-muted');
console.log(b[0].innerHTML="THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");
}


function changeCallToActions() {
let c = document.getElementsByTagName('a');
console.log(c[4].innerHTML="OK je veux tester !");
console.log(c[4].attributes.href.nodeValue ="http://www.thehackingproject.org");
let d = document.getElementsByTagName('a');
console.log(d[5].innerHTML="Non merci!");
console.log(d[5].attributes.href.nodeValue ="https://www.pole-emploi.fr/accueil/");
}


function changeLogoName() {
	let e = document.querySelectorAll('a.navbar-brand');
	console.log(e[0].childNodes[3].innerHTML = "The THP Experience");
	console.log(e[0].lastElementChild.style.fontSize = "2em");
}

function populateImages() {


let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
 let cards = document.querySelectorAll('.card img');

  for (let i = 0; i < cards.length; i++) 
    cards[i].setAttribute("src", imagesArray[i]);
}

function deleteLastCards() {
  let cards = document.querySelectorAll('.row .col-md-4');
  
  for (var i = 1; i <= 3; i++)
    cards[cards.length-i].remove()
}


function changeCardsText() {
  let texts = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
  let cards = document.querySelectorAll('.row .col-md-4');
  
  for (var i = 0; i < 3; i++)
    cards[i].querySelectorAll('.card-body p.card-text')[0].textContent = texts[i]
}

function changeViewButtons() {
  let elements = document.getElementsByClassName("btn-group")

  for (var i = 0; i < elements.length; i++) {
    elements[i].childNodes[1].classList.remove("btn-outline-secondary")
    elements[i].childNodes[1].classList.add("btn-success")
  }
}

function modifTordue() {
  let div = document.createElement("div")
  div.classList.add("row")
  div.appendChild(document.querySelectorAll('.row .col-md-4')[2])
  document.getElementsByClassName("row")[1].parentNode.appendChild(div)
}

changeCallToActions();
changeTitles();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();
modifTordue();