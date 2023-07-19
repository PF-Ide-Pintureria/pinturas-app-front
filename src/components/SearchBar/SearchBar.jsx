import React from 'react';
const SearchBar = () => {
    const handleSubmit = () => {
        // do something with the form data here...
        alert('Buscar');
    }
    
    return (
        <div className='flex justify-center container'>
            <form onSubmit={handleSubmit} className='flex justify-center'>
                <input type='text' placeholder='Buscar'></input>
                <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
                </svg></button>
            </form>
        </div>
    )
}

export default SearchBar;