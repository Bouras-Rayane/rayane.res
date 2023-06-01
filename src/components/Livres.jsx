import React from 'react'
import "../App.css"
// On met un props en paramétre
export default function Livres({ listeBooks }) {

    return (
        <div>
            <h1>Liste des livres</h1>
            <a href="#livre-6">GO DOWN</a>
            {/* On map la liste des livres récupéré du props dans l'HTML */}
            <div className='liste-livre'>
                {listeBooks.map((livre, i) => {
                    return (
                        <div className="livre" id={"livre-" + i}>
                            <img width={200} src={livre.image} />
                            <h2>Titre {i} : {livre.title}</h2>
                            <h2>Auteur {i} : {livre.author}</h2>
                            <h6>Price : {livre.price}</h6>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
