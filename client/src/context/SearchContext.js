import React, { useState, createContext } from 'react'

export const SearchContextProvider = createContext();

function SearchContext({ children }) {
    const [search, setSearch] = useState('');
    const contexts = {
        search: search,
        setSearch: setSearch
    };

    return (
        <SearchContextProvider.Provider value={contexts}>
            { children }
        </SearchContextProvider.Provider>
    )
}

export default SearchContext
