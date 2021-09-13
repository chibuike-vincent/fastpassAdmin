import { GrOverview } from "react-icons/gr";
import {FaAngleRight} from "react-icons/fa"
import {IoIosPeople} from "react-icons/io"
import {AiTwotoneSecurityScan} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {FiLogOut} from "react-icons/fi"

export const navigations = [
    {
        name: 'Overview',
        mainIcon: <GrOverview size={30} color="white"/>,
        arrow: <FaAngleRight size={15} color="white"/>,
        route: "/dashboard"
    },
    {
        name: '',
        mainIcon: <IoIosPeople size={30}/>,
        arrow: <FaAngleRight size={15} color="white"/>,
        route: "/dashboard/users"
    },
    {
        name: 'Security',
        mainIcon: <AiTwotoneSecurityScan size={30}/>,
        arrow: <FaAngleRight size={15} color="white"/>,
        route: "/dashboard/security"
    },
    {
        name: 'Visitors',
        mainIcon: <IoIosPeople size={30}/>,
        arrow: <FaAngleRight size={15} color="white"/>,
        route: "/dashboard/visitors"
    },
]

export const Secondnavigations = [
    
    {
        name: 'Settings',
        mainIcon: <FiSettings size={30}/> ,
        arrow: <FaAngleRight size={15} color="white"/>,
        route: "/dashboard/settings"
    },
    {
        name: "Logout",
        mainIcon: <FiLogOut size={30}/>,
        arrow: <FaAngleRight size={15} color="white"/>,
        route: ""
    }
]