import React from 'react'
import Card from "../components/card/card"
import Table from "../components/tenantTable/table"
import Modal from "../components/modal/modal"
import Form from "../components/Forms/addTenant"

function Tenants() {
    return (
        <div>
            <Card />
            <div style ={{width: "100%", display: "flex", justifyContent: "space-between", marginTop:50, marginBottom: 20}}>
                <div style={{width:"10%",height:50, textAlign:"center"}}>
                    <h1 style={{fontSize:18}}>Tenants</h1>
                </div>
                <Modal Component={Form} buttonTitle="Add Tenant" title="Add Tenant" button/>
            </div>
            <Table />
        </div>
    )
}

export default Tenants
