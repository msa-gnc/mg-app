import React, { useEffect, useState} from 'react'
import axios from "axios"
import { Box, Container, Typography } from '@mui/material'


const DataList = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
    try{
        const res = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick")
        setData(res.data) ;
        console.log(res)
     

    } catch(error) { console.log(error)}
 
}

fetchData()
    },[])

  return (

    <Container sx={{display: "flex",  justifyContent: "center", alignItems:"center", border:"2px solid red", height:"100vh" }}>



  {data.map((item)=>(
    <Box sx={{display: "flex",  flexDirection:"column", alignItems:"center", justifyContent:"center", flexWrap: "wrap", gap: 1, border:"2px solid green", height:"80vh"}} >

    <Box sx={{flexGrow:4}} >
        <img src={item.image_link
} alt="" />

    </Box>

{item.name}

</Box>
  ))}
 

 </Container>
 
  )
}

export default DataList