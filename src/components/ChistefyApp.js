import React, { useState }  from 'react';
import Header from './Header'
import Footer from './Footer'
import { AddCategory } from './addCategory';

// main app file. called from index.js
export const ChistefyApp = () => {

    // useState bring capabilities to be handled with a function.
    const [categories, setCategories] = useState([ 'Jaimito', 'Animales', 'Verdes', 'Humor Negro', 'Argentinos' ]);
    
 
    return (
        <>
            <Header />
            <div className="container my-4">
                <h2>Categorias</h2>
                <AddCategory setCategories={setCategories} />
                <ol>
                    {
                        // const categories is printed by a map() that receives a callback function to alter it. 
                        categories.map( category => {
                            return <li key={category}> {category}</li>
                        })
                    }
                </ol>

            </div>
            <Footer />
        </>
    )
}

export default ChistefyApp;