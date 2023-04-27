export default function AddLivres({ listeBooks, setListeBooks }) {

    function ajouterLivre(event) {
        event.preventDefault();


        // On crée 
        var newBook = {
            image: "https://thumbs.dreamstime.com/z/green-silhouette-open-book-question-mark-flying-out-isolated-white-background-flat-reading-icon-unknown-pictogram-ask-107585582.jpg",
            title: event.target.title.value,
            author: event.target.author.value,
            price: event.target.prix.value
        }

        let findBook = listeBooks.find(livre => newBook.title == livre.title)

        if (!findBook) {
            setListeBooks([...listeBooks, newBook])
        } else {
            alert('this book already exist')
        }
    }

    return (
        <div>
            <h1>Ajouter un livre</h1>
            <form onSubmit={ajouterLivre}>
                <input name="title" type="text" placeholder="Title" />
                <input name="author" type="text" placeholder="Author" />
                <input name="prix" type="number" placeholder="Prix" />

                <button type="submit">Add book</button>
            </form>
        </div>
    )
}
