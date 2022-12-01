import { Box, Button, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { instance } from "../axios"
import Image from "next/image"
import SimpleTypography from "../src/Components/SimpleTypegraphy"


function Banners() {
    const [banners,setBanners] = useState()
    const [refresh,setRefresh] = useState(true)
    const [loading,setLoading] = useState(false)

    useEffect(()=> {
        instance.get('landing/banners').then((res)=> {
            setBanners(res.data.data.banners)
            setLoading(true)
        })
    },[refresh])

    function addBannerHandler(e) {
        console.log(e.target.files[0]);
        let data = new FormData();
        data.append("images", e.target.files[0])
        instance.post('landing/banners',
                data
            ,
           { headers: {
                'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0Z2lkIjpudWxsLCJpZCI6MSwicm9sZSI6MiwiaWF0IjoxNjY4MjQwODI0fQ.GC9BeyDthf00OqLrY8ffqWuqBLhggszpdV6enyrlhdk"
            } }
        ).then((res)=>{
            console.log(res);
            setRefresh(!refresh)
        }).catch((err)=>{
            console.log(err);
        })
        
    }

    function ChangeActiveHandler(id,type) {
        instance.put(`landing/banners/${id}`,
            {
                is_active:type
            }
            ,
        { headers: {
                'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0Z2lkIjpudWxsLCJpZCI6MSwicm9sZSI6MiwiaWF0IjoxNjY4MjQwODI0fQ.GC9BeyDthf00OqLrY8ffqWuqBLhggszpdV6enyrlhdk"
            } }
        ).then((res)=>{
            console.log(res);
            setRefresh(!refresh)
        }).catch((err)=>{
            console.log(err);
        })
       
    }
        

    console.log(banners);
    if(loading) {
        return (
            <Box sx={{paddingLeft:"150px",paddingTop:"40px",paddingRight:"48px"}}>
                <Box sx={{display:"flex",flexWrap: "wrap"}}>
                    <Box sx={{position:"relative",borderRadius: "10px",width:"300px",height:"300px",marginRight:"10px",marginBottom:"10px",border:"1.5px dashed #171a23"}}>
                        <input onChange={(e)=> addBannerHandler(e)} style={{display:"none"}} type="file" id="upload" /> 
                        <label style={{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",top:"0",left:"0",width:"100%",height:"100%",position:"absolute"}}  htmlFor="upload">
                            <Image   src={`/img/upload.svg`} alt="banner" width={200} height={200} />
                        </label>
                    </Box>
                            
                    {
                        banners?.map(item => (
                            <Box key={item.id} sx={{position:"relative",marginRight:"10px",marginBottom:"10px"}}>
                                {
                                    item.is_active ? <SimpleTypography variant="span" className="accepted__img" text="Active" /> : <SimpleTypography variant="span" className="unaccepted__img" text="Inactive" />
                                }
                                
                                <Image key={item.id} style={{border:"1px solid #ccc",objectFit:"cover",borderRadius:"10px"}} src={`https://api.monestore.uz/uploads/landing/${item.image_src}`} alt="banner" width={300} height={260} />
                                <Box sx={{display:"flex",justifyContent:'space-between'}}>
                                    <Button onClick={() => ChangeActiveHandler(item.id,true)} variant="outlined">Active</Button>
                                    <Button onClick={() => ChangeActiveHandler(item.id,false)} variant="outlined" color="error">InActive</Button>
                                </Box>
                            </Box>
                            
                        ))
                    }
                    
                </Box>
           
                
            </Box>
        )
    }
    else{
        return(
            <Box sx={{ display: 'flex',alignItems:"center",justifyContent:"center",height:"93vh" }}>
                <CircularProgress  />
            </Box>
        )
    }
   
}

export default Banners
