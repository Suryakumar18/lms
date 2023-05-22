import { Space, Typography,Card, Statistic, Table } from "antd";
import {ReadOutlined ,UserOutlined ,WomanOutlined } from "@ant-design/icons"
import React, { useEffect, useState } from 'react';
import { AppstoreAddOutlined,BookOutlined,DiffOutlined,TeamOutlined  } from "@ant-design/icons"
import { addedCourses ,getRrecords,getAllCourses} from "../../API";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import AppHeader from "../../components/AppHeader";
import SideMenu from "../../components/SideMenu";


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
//   const blogdata=[
//     {
//         label:"Dashboard",
//         yyy:'/dashboard'
//     },
//     {
//         label:"Courses",
//         yyy:'/Courses',
      
//     },
//     {
//         label:"Assignments",
//         yyy:'/addassignment',
     
//     },
//     {
//         label:"StudentDetails",
//         yyy:'/StudentDetails',
     
//     }
// ]

function DashBoard(){



        return <div>
            
            <AppHeader />

            <div style={{display:"flex"}}>
            <div>
                <SideMenu />
            </div>
            
            <div>

           <Space size={20} direction="vertical">
            <Typography.Title level={4}></Typography.Title>
            <Space direction="horizontal" style={{marginLeft:"100px"}}>
                <DashboardCard icon={<ReadOutlined style={{color:"green",backgroundColor:"rgba(0,255,0,0.25)",borderRadius:20,fontSize:24,padding:8}} />} title={"COURSES"} value={122}  />
                <DashboardCard icon={<UserOutlined style={{color:"purple",backgroundColor:"rgba(0,255,255,0.25)",borderRadius:20,fontSize:24,padding:8}} />} title={"Students"} value={10023} />
                <DashboardCard icon={<WomanOutlined style={{color:"red",backgroundColor:"rgba(255,0,0,0.25)",borderRadius:20,fontSize:24,padding:8}} />} title={"Teachers"} value={122} />
                <DashboardCard icon={<WomanOutlined style={{color:"red",backgroundColor:"rgba(255,0,0,0.25)",borderRadius:20,fontSize:24,padding:8}} />} title={"Teachers"} value={122} />
                <DashboardCard icon={<WomanOutlined style={{color:"red",backgroundColor:"rgba(255,0,0,0.25)",borderRadius:20,fontSize:24,padding:8}} />} title={"Teachers"} value={122} />
            </Space>

            <Space style={{marginLeft:"100px"}}>
                    <RecentOrders  />
                    <DashBoardChart />
            </Space>
          
            </Space>
            </div>
            </div>
        </div>
}


function DashboardCard({title,value,icon}){
    return(
        <Card>
                    <Space direction="horizontal">
                        {icon} 
                        <Statistic title={title} value={value} />
                     </Space>
      </Card>

    )
}



function RecentOrders(){


    const [dataSource,setDataSource]  = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        addedCourses().then(res=>{
            setDataSource(res.products.splice(0,3));
            setLoading(false);

        })


    }, [])

    return (
    <>
    <Typography.Text>Recently Added Courses</Typography.Text>
        <Table
    columns={[
        {
            title:'Course ID',
            dataIndex:'id'
        },

        {
            title:'CourseName',
            dataIndex:'title'
        },

        {
            title:'Level',
            dataIndex:'quantity'
        },
        {
            title:'CoursePercentage',
            dataIndex:'discountedPrice'
        },
    ]}
    
    dataSource={dataSource}
    loading={loading}
    pagination={false}
    >
        
    </Table>
    </>
    )
}



function DashBoardChart(){
    const [CourseData,setCourseData] = useState({
        labels:[],
        datasets:[]
    })


    useEffect(()=>{
        getRrecords().then(res=>{
            const labels = res.carts.map(cart=>{
                return `User-${cart.userId}`
            });


            const data = res.carts.map(cart=>{
                return cart.discountedTotal
            });

            const dataSource =  {
                labels,
                datasets: [
                    {
                    label: 'Courses',
                    data: data,
                    backgroundColor: 'rgba(255, 0, 0, 1)',
                    }
                ],
                };

        setCourseData(dataSource)





        })
    },[])






 const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'CourseAccess',
          },
        },
      };

      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


    return (

        <Card style={{width:500,height:250}}>
                 <Bar options={options} data={CourseData} />;
        </Card>
    )
    
   
}






export default DashBoard;