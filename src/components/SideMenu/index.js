import { AppstoreAddOutlined,BookOutlined,DiffOutlined,TeamOutlined  } from "@ant-design/icons"
import { Menu } from "antd"
import { NavLink, useNavigate } from "react-router-dom"




function SideMenu(){
    const navigate = useNavigate()
    return <div className="SideMenu" style={{background:""}}>

        <Menu  style={{background:"white",height:"671px" ,color:"black",borderRight:"2px solid black",width:"230px"}}
        onClick={(items)=>{
                navigate(items.key)
        }}
        
        
        items={[
            {
                label:"Dashboard",
                icon:<AppstoreAddOutlined />,
                key:'/dashboard'
            },
            {
                label:"Courses",
                key:'/Courses',
                icon:<BookOutlined />
            },
            {
                label:"Assignments",
                key:'/addassignment',
                icon:<TeamOutlined />
            },
            {
                label:"StudentDetails",
                key:'/StudentDetails',
                icon:<TeamOutlined />
            },
        
            
        ]}>

        </Menu>
    </div>
}



export default SideMenu