import { Box } from '@mui/system';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { instance } from '../../axios';
import SimpleTypography from '../../src/Components/SimpleTypegraphy';

function Order() {
    const [order,setOrder] = useState(null)
    const router = useRouter()

    useEffect(()=> {
       if(router.isReady){
        instance.get(
            `orders/${router.query.id}`,{headers: {
                'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0Z2lkIjpudWxsLCJpZCI6MSwicm9sZSI6MiwiaWF0IjoxNjY4MjUyNTU1fQ.KOXs06thZAisjqPr1ICoJTHNQL4WzXgD2M59V-LJ3JI"
              }}
          )
          .then(function(response) {
            setOrder(response.data.data.order)
          })
          .catch(function(error) {
            console.log(error);
          });
       }
    },[router.query.id])

    console.log(order);

    return (
        <Box sx={{paddingLeft:"150px",paddingTop:"40px",paddingRight:"48px"}}>
            <Box sx={{padding:"30px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                <Box sx={{display:"flex",alignItems: "center"}}>
                    <SimpleTypography text={"Buyurtma"} variant={"h2"} className="user__name"/>
                    <SimpleTypography text={`#${order?.id}`} variant={"p"} className="user__id"/>
                </Box>
                
            </Box>
            <Box sx={{display:"flex"}}>
                <Box sx={{width:"309px",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                    <Box>
                        <SimpleTypography text={`phone number`} variant={"p"} className="user__sub--title"/>
                        <SimpleTypography text={order?.user?.phone_number} variant={"h2"} className="user__title"/>
                    </Box>
                </Box>
                <Box sx={{width:"309px",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                    <Box>
                        <SimpleTypography text={`Ism va Familiya`} variant={"p"} className="user__sub--title"/>
                        <SimpleTypography text={order?.user?.full_name} variant={"h2"} className="user__title"/>
                    </Box>
                </Box>
                <Box sx={{width:"309px",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                    <Box>
                        <SimpleTypography text={`Status`} variant={"p"} className="user__sub--title"/>
                        
                        {
                            order?.status === 1 ?  <SimpleTypography className="order__new" variant={"span"} text={`YANGI`} /> : null
                        }
                        {
                            order?.status === 0 ?  <SimpleTypography className="order__cancelled" variant={"span"} text={`BEKOR_QILINGAN`} /> : null
                        }
                        {
                            order?.status === 2 ?  <SimpleTypography className="order__pending" variant={"span"} text={`TO'LOVDA`} /> : null
                        }
                        {
                            order?.status === 4 ?  <SimpleTypography className="order__verify" variant={"span"} text={`TASDIQLANGAN`} /> : null
                        }
                        {
                            order?.status === 5 ?  <SimpleTypography className="order__delivered" variant={"span"} text={`YETQAZILGAN`} /> : null
                        }
                        {
                            order?.status === 3 ?  <SimpleTypography className="order__checking" variant={"span"} text={`TEKSHRILMOQDA`} /> : null
                        }
                                
                    </Box>
                </Box>
                <Box sx={{width:"309px",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                    <Box>
                        <SimpleTypography text={`Buyurmalar soni`} variant={"p"} className="user__sub--title"/>
                        <SimpleTypography className="order__items" variant={"span"} text={`${order?.order_items.length} ta`} />
                    </Box>
                </Box>
            </Box>
          
        </Box>
    )
}

export default Order