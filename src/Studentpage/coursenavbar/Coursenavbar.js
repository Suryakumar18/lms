import { AppstoreAddOutlined,BookOutlined,DiffOutlined,TeamOutlined  } from "@ant-design/icons"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom"





function CourseNavbar(){
    const navigate = useNavigate()
    return <div className="SideMenu" style={{background:""}}>

        <Menu  style={{background:"white",height:"671px" ,color:"black",borderRight:"2px solid black",width:"230px"}}
        onClick={(items)=>{
                navigate(items.key)
        }}
        
        
        items={[
            {
                label:"CourseContent",
                icon:<AppstoreAddOutlined />,
                key:''
            },
            {
                label:"Assignment",
                key:'',
                icon:<BookOutlined />
            },
            {
                label:"Assesment",
                key:'/codemirror',
                icon:<TeamOutlined />
            },
            
        ]}>

        </Menu>
    </div>
}


export default CourseNavbar