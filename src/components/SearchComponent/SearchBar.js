import React, {useState} from 'react'
import SearchBar from "material-ui-search-bar"

function SearchBarComponent({setValue}) {
     
    return (
        <div>
            <SearchBar
                placeholder="Search by name or email"
                onChange={(newValue) => setValue(newValue)}
            />
        </div>
    )
}

export default SearchBarComponent
