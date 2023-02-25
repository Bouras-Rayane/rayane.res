// LISTE DES UTILISATEURS
const users = [
  { nom: "Omar", email: "omar@gmail.com", password: "test" },
  { nom: "Djaafer", email: "djaafer@gmail.com", password: "test1"},
  { nom: "Said", email: "said@gmail.com", password: "test2" },
];

// function pour login
function Login() {
  // Récupérer les données des inputs LOGIN
  var userEmail = document.getElementById("loginEmail").value;
  var userPassword = document.getElementById("loginPassword").value;

  // On check si le lien entre les inputs et la function marche
  console.log(userEmail, userPassword);

  // On récupére une div pour afficher si il y'as une erreur dans le login
  var errorDiv = document.getElementById("error");

  // On récupére la div qui regroupe le button login et register dans la nav
  var navBtns = document.getElementById("btn-container");

  //  On loop sur la liste des users
  for (var i = 0; i < users.length; i++) {
    // on check si l'email & le mot de passe écrit par le user existe dans la liste de users

    if (userEmail === users[i].email && userPassword === users[i].password) {
      // Si l'email et le pwd éxistent on affiche le nom du user à la place des buttons login et register
      navBtns.innerHTML = `<h3>Bienvenue ${users[i].nom}</h3>`;
      break;
    } else {
      // Si l'email et le pwd n'éxistent pas on affiche une erreur dans la div avec l'id error
      errorDiv.innerHTML = '<p class="text-danger">Email or pwd not found</p>';
    }
  }
}

function Register() {
  // Récupérer les données des inputs register
  var userEmail = document.getElementById("registerEmail").value;
  var userPassword = document.getElementById("registerPassword").value;
  var userNom = document.getElementById("registerNom").value;

  const newUser = { nom: userNom, email: userEmail, password: userPassword };

  users.push(newUser);

  // On store la valeur de users dans le localstorage
  localStorage.setItem("users", userNom);

  // On récupére la valeur users du localstorage

  const localuser = localStorage.getItem("users");

  // On check si le lien entre les inputs et la function marche
  console.log(userEmail, userPassword);

  // On récupére une div pour afficher si il y'as une erreur dans le register
  var errorDiv = document.getElementById("error");

  // On récupére la div qui regroupe le button register et register dans la nav
  var navBtns = document.getElementById("btn-container");

  //  On loop sur la liste des users
  for (var i = 0; i < users.length; i++) {
    // on check si l'email & le mot de passe écrit par le user existe dans la liste de users

    if (userEmail !== users[i].email) {
      // Si l'email éxistent on affiche le nom du user à la place des buttons login et register
      navBtns.innerHTML = `<h3>Bienvenue ${localuser}</h3>`;
    } else {
      // Si l'email et le pwd éxistent on affiche une erreur dans la div avec l'id error
      errorDiv.innerHTML = '<p class="text-danger">Email already exists!</p>';
    }
  }
}

var books = [
  {
    title: "L'étranger",
    author: "Albert Camus",
    date_publication: "10/05/1946",
    genre: ["Roman", "Philosophie"],
    stars: 5,
    price: 700,
    image: "https://m.media-amazon.com/images/I/8130inT26AL.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    date_publication: "10/05/1947",
    genre: ["Aventure", "Romance", "Action", "Policier"],
    stars: 4,
    price: 800,
    image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504611957l/9577857._SX318_.jpg",
  },
  {
    title: "Cousine K",
    author: "Yasmina Khedra",
    date_publication: "10/05/2010",
    genre: ["Aventure", "Romance", "Policier"],
    stars: 3,
    price: 1000,
    image: "https://m.media-amazon.com/images/I/71b7rrzSHkL.jpg",
  },
  {
    title: "Fareinheit 451",
    author: "Ray Bradbury",
    date_publication: "10/05/2007",
    genre: ["Dystopie", "Romance", "Policier"],
    stars: 2,
    price: 1500,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
  },
  {
    title: "L'art de la guerre",
    author: "Sun Tzu",
    date_publication: "300BC",
    genre: ["Guerre", "Politique"],
    stars: 5,
    price: 700,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328137993i/2207458.jpg",
  },
  {
    title: "Les Fleurs du Mal",
    author: "Beaudelaire",
    date_publication: "01/02/1940",
    genre: ["Poésie", "Romance"],
    stars: 5,
    price: 500,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388667125i/203220.jpg",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    date_publication: "18/03/2003",
    genre: ["Thriller", "Romance", "Mystére", "Suspense"],
    stars: 1,
    price: 1000,
    image: "https://m.media-amazon.com/images/I/41KuPr7kpZL._AC_SY780_.jpg ",
  },
];

for (let i = 0; i < books.length; i++) {
  // On récupére la section pour afficher tout les livres
  var ciblehtml = document.getElementById("all-books");

  // On met books[i] en tant que variable book pour facilité l'écriture
  var book = books[i];

  // On change l'HTML de la section voulu et on affiche chaque livre de la liste

  /* html */
  ciblehtml.innerHTML += `
      <div class='book'>
          <img class='book-img' src=${book.image} width='200px' height="320px" alt="">
          <h1>${book.title}</h1>
          <h5>${book.author}</h5>
          <div class='d-flex justify-content-between'>
              <h6>${book.date_publication}</h6>
              <h6>${book.stars} étoiles</h6>
          </div>
          <h3>${book.price}.00 DA</h3>
            <!-- On ajoute un evenement on click et on le lie avec la function commander, puis on passe en argument l'index actuel de la loop -->
          <button onclick='commander(${i})'>Commander</button>
      </div>
    `;

  // On récupére les div où on veut mettre les livres pas chers et mieux notés
  var best_books = document.getElementById("best-books");
  var cheap_books = document.getElementById("cheap-books");

  if (book.price <= 800) {
    /* html */
    cheap_books.innerHTML += `
      <div class='book'>
          <img class='book-img' src=${book.image} width='200px' height="320px" alt="">
          <h1>${book.title}</h1>
          <h5>${book.author}</h5>
          <div class='d-flex justify-content-between'>
              <h6>${book.date_publication}</h6>
              <h6>${book.stars} étoiles</h6>
          </div>
          <h3>${book.price}.00 DA</h3>
            <!-- On ajoute un evenement on click et on le lie avec la function commander, puis on passe en argument l'index actuel de la loop -->
          <button onclick='commander(${i})'>Commander</button>
      </div>
    `;
  }
  if (book.stars >= 4) {
    /* html */
    best_books.innerHTML += `
      <div class='book'>
          <img class='book-img' src=${book.image} width='200px' height="320px" alt="">
          <h1>${book.title}</h1>
          <h5>${book.author}</h5>
          <div class='d-flex justify-content-between'>
              <h6>${book.date_publication}</h6>
              <h6>${book.stars} étoiles</h6>
          </div>
          <h3>${book.price}.00 DA</h3>
            <!-- On ajoute un evenement on click et on le lie avec la function commander, puis on passe en argument l'index actuel de la loop -->
          <button onclick='commander(${i})'>Commander</button>
      </div>
    `;
  }
}

// On crée notre function pour afficher l'alert quand on click sur le button commander
// On met un paramétre pour récupéré la valeur de l'index du livre

function commander(bookIndex) {
  alert(
    `Merci d'avoir commandé ${books[bookIndex].title} au prix de ${books[bookIndex].price}.00 DA`
  );
}

function AjouterLivre() {
  // On arécupérer les valeurs des inputs
  var titre = document.getElementById("titre").value;
  var auteur = document.getElementById("auteur").value;
  var prix = document.getElementById("prix").value;
  var stars = document.getElementById("stars").value;
  var date = document.getElementById("date").value;

  // Condition pour que tout les champs soient remplis
  if (titre.length > 0 && auteur.length > 0 && prix > 100 && date.length > 0) {
    // On a crée un objet du nouveau livre
    let newBook = {
      title: titre,
      author: auteur,
      date_publication: date,
      genre: ["Roman", "Philosophie"],
      stars: stars,
      price: prix,
      image:
        "https://thumbs.dreamstime.com/z/green-silhouette-open-book-question-mark-flying-out-isolated-white-background-flat-reading-icon-unknown-pictogram-ask-107585582.jpg",
    };

    // On push l'objet du nouveau livre vers la liste des livres principale
    books.push(newBook);

    var currentIndex = books.length - 1;

    alert("Livre ajouté!");
    // On récupére la section pour afficher tout les livres
    var ciblehtml = document.getElementById("all-books");

    // On change l'HTML de la section voulu et on affiche chaque livre de la liste

    /* html */
    ciblehtml.innerHTML += `
      <div class='book'>
          <img class='book-img' src=${newBook.image} width='200px' height="320px" alt="">
          <h1>${titre}</h1>
          <h5>${auteur}</h5>
          <div class='d-flex justify-content-between'>
              <h6>${date}</h6>
              <h6>${stars} étoiles</h6>
          </div>
          <h3>${prix}.00 DA</h3>
            <!-- On ajoute un evenement on click et on le lie avec la function commander, puis on passe en argument l'index actuel de la loop -->
          <button onclick='commander(${currentIndex})'>Commander</button>
      </div>
    `;
  } else {
    alert("Tout les champs doivent être remplies");
  }
}

function darkMode() {
  // On check si le background est dark ou pas
  if (document.querySelector("body").style.background == "grey") {
    // On store la valeur darkmode en false
    localStorage.setItem("darkmode", false);
    document.querySelector("body").style.background = "#fff";
  } else {
    // On store la valeur darkmode en true
    localStorage.setItem("darkmode", true);
    document.querySelector("body").style.background = "grey";
  }
}

// On récupére la valeur de la variable 'darkmode' qui est storé dans le local storage
var dm = localStorage.getItem("darkmode");

// On utilise la valeur pour mettre le bg en gris ou en blanc par rapport à la valeur storé en local storage
if (dm == "true") {
  document.querySelector("body").style.background = "grey";
} else {
  document.querySelector("body").style.background = "#fff";
}
