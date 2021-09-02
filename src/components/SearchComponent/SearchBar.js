import React, {useState} from 'react'
import SearchBar from "material-ui-search-bar"

function SearchBarComponent() {
    const [state, setState] = useState("")

    const doSomethingWith = (value) => {
        console.log(value)
    }

    return (
        <div>
            <SearchBar
                value={state}
                onChange={(newValue) => setState(newValue)}
                onRequestSearch={() => doSomethingWith(state)}
            />
        </div>
    )
}

export default SearchBarComponent
