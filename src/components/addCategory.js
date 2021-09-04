import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    // inputValue is the form value. To be added to ChistefyApp (our core file).
    const [inputValue, setInputValue] = useState('')

    // this function allow us to modify just an array or object or whatever in real-time in DOM.
    // when user submit form
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    // Validate 
    const handleSubmit = (e) => {
        e.preventDefault();

        // checks if there's almost 3 letters in the input (inputValue).
        if ( inputValue.trim().length > 2 ) {
            
            // uses Hook useState (with const and function hooked to alter the main const)
            setCategories( cats => [...cats, inputValue]);

            // clean input value. this mothefucker value that want to be the main const variable of our useState variable of main ChistefyApp
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="add_category" className="form-label">Agregar Categoría</label>
            <input
                className="form-control mb-4"
                id="add_category"
                type="text"
                placeholder="..."
                value={inputValue}
                onChange={ handleInputChange }>
            </input>        
        </form>
    )
}

// Validator of the setCategories value needed to be handled. 
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}