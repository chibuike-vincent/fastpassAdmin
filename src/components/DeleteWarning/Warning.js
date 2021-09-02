import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

function Warning() {
    return (
        <div >
            <div>
                <FaTrashAlt color="salmon"/>
                <h4 style={{color: "salmon"}}>Delete Tenant</h4>
            </div>
            <p>Deleting this tenant will delete all visitors linked to his account</p>
            <div style={{width: "50%", display:"flex", marginLeft: "25%", justifyContent:"space-between"}}>
                <button style={{width:"30%", border: "none", cursor:"pointer", padding:10, borderRadius: 7}}>Cancel</button>
                <button style={{width:"30%", border: "none", cursor:"pointer", padding:10, borderRadius: 7, backgroundColor:"red", color:"white"}}>Delete</button>
            </div>
        </div>
    )
}

export default Warning
