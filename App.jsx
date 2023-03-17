import './App.css'
import Livres from './components/Livres';
import AddLivres from './components/AddLivres';
import { useState } from 'react';


function App() {
  const [listeBooks, setListeBooks] = useState([
    
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
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504611957l/9577857._SX318_.jpg",
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
  ]);
 fetch("https://jsonplaceholder.typicode.com/users")
 .then(Response=>Response.json())
 .then(data=>console.log(data))
  

  return (
    <div className="App">
      {/* On passe la liste des livres en props vers l'enfant Livres */}
      <AddLivres listeBooks={listeBooks} setListeBooks={setListeBooks} />
      <Livres listeBooks={listeBooks} />
      
    </div>
  )
}

export default App
