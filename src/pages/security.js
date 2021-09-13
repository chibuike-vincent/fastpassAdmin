import React,{useEffect} from 'react'
import Card from "../components/card/card"
import Table from "../components/securityTable/table"
import Modal from "../components/modal/modal"
import Form from "../components/Forms/addSecurity"
import { useDispatch, useSelector } from 'react-redux'
import { getSecurities } from "../businessLogic";
import { ActionCreators } from "../../src/ReduxFile/actions/actionCreator";

function Security() {
    const dispatch = useDispatch()
    const allSecurities = useSelector((state) => state.securities);

    useEffect(() => {
        const securities = async() => {
            const availableSecurities = await getSecurities()
            await dispatch( ActionCreators.allSecurityData(availableSecurities.data.securities))
        }
        securities()
    },[])

    console.log(allSecurities, "allSecurities")
    return (
        <div>
            <Card />
            <div style ={{width: "100%", display: "flex", justifyContent: "space-between", marginTop:50, marginBottom: 20}}>
                <div style={{width:"10%",height:50, textAlign:"center"}}>
                    <h1 style={{fontSize:18}}>Security</h1>
                </div>
                <Modal Component={Form} button buttonTitle="Add Security" title="Add Security"/>
            </div>
            <Table allSecurities={allSecurities} />
        </div>
    )
}

export default Security
