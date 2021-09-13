import React, {useState, useEffect} from 'react'
import Card from "../components/card/card"
import Table from "../components/tenantTable/table"
import Modal from "../components/modal/modal"
import Form from "../components/Forms/addUser"
import DateRange from "../components/DateRange/DatePicker"
import SearchBar from "../components/SearchComponent/SearchBar"
import { Divider } from '@material-ui/core'
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from "../businessLogic";
import { ActionCreators } from "../../src/ReduxFile/actions/actionCreator";

function Tenants() {
    const [value, setSearch] = useState("")
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    const allUsers = useSelector((state) => state.users);

    useEffect(() => {
        const users = async() => {
            const availableUsers = await getUsers(value)
            await dispatch( ActionCreators.allUserData(availableUsers.data.users))
        }
        users()
    },[value])

    const setSearchValue = (val) => {
        setSearch(val)
    }

    const actionText = user && user.users.whoYouAre === "Hotel" ? "Add Guest" :
        user && user.users.whoYouAre === "Corporate office" ? "Add Staff" :
            user && user.users.whoYouAre === "Residential" ? "Add Family Member" :
                user && user.users.whoYouAre === "Estate" ? "Add Tenant" : ""

    const title = user && user.users.whoYouAre === "Hotel" ? "Guests" :
    user && user.users.whoYouAre === "Corporate office" ? "Staff" :
        user && user.users.whoYouAre === "Residential" ? "Family Members" :
            user && user.users.whoYouAre === "Estate" ? "Tenants" : ""  
            

    return (
        <div>
            {
                user && user.users ? (
                    <div>
                        <Card />
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 50, marginBottom: 20 }}>
                            <div style={{ width: "10%", height: 50, textAlign: "center" }}>
                                <h1 style={{ fontSize: 18 }}>{title}</h1>
                            </div>
                            <Modal Component={Form} buttonTitle={actionText} title={actionText} button />
                        </div>

                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                            <div style={{ width: "100%" }}>
                                <SearchBar setValue={(val) => setSearchValue(val)}/>
                            </div>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <Table allUsers={allUsers} />
                        </div>
                    </div>
                ) : 
                    <Loader
                        type="TailSpin"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                
            }


        </div>
    )
}

export default Tenants
