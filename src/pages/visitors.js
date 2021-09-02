import React from 'react'
import Card from "../components/card/card"
import Table from "../components/visitorTable/table"


function Visitors() {
    return (
        <div>
            <Card />

            <h1 style={{marginTop: 50}}>Visitors</h1>
            
            <div style={{marginTop: 10}}>
            <Table />
            </div>
        </div>
    )
}

export default Visitors

