import React from "react";
import { Breadcrumbs,Link,Typography } from "@material-ui/core";
import {useLocation} from "react-router-dom"




const Breadcrumbsall = () =>{
    const location = useLocation()
    let crumbLink =''
    const crumsPath = location.pathname.split('/')
                      .filter((pathss) => pathss !== '')
                      .map((crumb) =>{
                        crumbLink += `/${crumb}`
                        return <Link to={crumbLink} key={crumb}>
                          {crumb}
                        </Link>
                      })
    console.log(crumsPath)

    return(
        <Breadcrumbs aria-label="breadcrumb">
        {crumsPath}  
        </Breadcrumbs>
    )
}



export default Breadcrumbsall