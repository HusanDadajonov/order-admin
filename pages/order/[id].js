import { Box } from '@mui/system';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { instance } from '../../axios';
import SimpleTypegraphy from '../../src/Components/SimpleTypegraphy';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {styled} from '@mui/material';
import {  TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from "next/image"
import Link from 'next/link'
import EditIcon from '@mui/icons-material/Edit';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const StyledRow = styled(TableRow)(
    ( theme ) => `
        background:#fff;
        border: 1px solid #f1f1f2;
        border-radius:10px;
        padding:14px 21px;
        height:50px;
        cursor:pointer;
        margin-bottom:1px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width:100%;

        &:hover{
            background:#fafafa
        }

        td,th{
            border: 0;
            width:14.2%
        }
  `
  );




function Order() {
    const [order,setOrder] = useState(null)
    const [age, setAge] = useState();
    const router = useRouter();
    const [color,setColor] = useState(null)

    const statuses = [
        {
            id:0,
            text:"BEKOR_QILINGAN",
            color:"#dd144A"
        },
        {
            id:1,
            text:"YANGI",
            color:"#84ff9c"
        },
        {
            id:2,
            text:"TO'LOVDA",
            color: "#f7e65c",
        },
        {
            id:3,
            text:"TEKSHRILMOQDA",
            color: "#f7e65c",
        },
        {
            id:4,
            text:"TASDIQLANGAN",
            color:"#84ff9c"
        },
        {
            id:5,
            text:"YETQAZILGAN",
            color:"#84ff9c"
        },
    ]

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


    
    console.log(age);

    const handleChange = (event) => {
        setAge(event.target.value);
        setColor(statuses[event.target.value].color)
    }

    return (
        <Box sx={{paddingLeft:"150px",paddingTop:"40px",paddingRight:"48px"}}>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"30px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                <Box sx={{display:"flex",alignItems: "center"}}>
                    <SimpleTypegraphy text={"Buyurtma"} variant={"h2"} className="user__name"/>
                    <SimpleTypegraphy text={`#${order?.id}`} variant={"p"} className="user__id"/>
                </Box>
                <Box sx={{display:"flex",alignItems:"center"}}>
                    <FormControl sx={{width:"240px"}} size="small">
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            sx={{color:color}}
                        >
                            {
                                statuses.map(item => (
                                    <MenuItem key={item.id}   value={item.id}>{item.text}</MenuItem>
                                ))
                            }
               
                        </Select>
                    </FormControl>
                </Box>
               
            </Box>
            <Box sx={{display:"flex"}}>
                <Box sx={{width:"309px",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                    <Box>
                        <SimpleTypegraphy text={`phone number`} variant={"p"} className="user__sub--title"/>
                        <SimpleTypegraphy text={order?.user?.phone_number} variant={"h2"} className="user__title"/>
                    </Box>
                </Box>
                <Box sx={{width:"309px",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                    <Box>
                        <SimpleTypegraphy text={`Ism va Familiya`} variant={"p"} className="user__sub--title"/>
                        <SimpleTypegraphy text={order?.user?.full_name} variant={"h2"} className="user__title"/>
                    </Box>
                </Box>
                <Box sx={{width:"309px",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                    <Box>
                        <SimpleTypegraphy text={`Status`} variant={"p"} className="user__sub--title"/>
                        
                        {
                            order?.status === 1 ?  <SimpleTypegraphy className="order__new" variant={"span"} text={`YANGI`} /> : null
                        }
                        {
                            order?.status === 0 ?  <SimpleTypegraphy className="order__cancelled" variant={"span"} text={`BEKOR_QILINGAN`} /> : null
                        }
                        {
                            order?.status === 2 ?  <SimpleTypegraphy className="order__pending" variant={"span"} text={`TO'LOVDA`} /> : null
                        }
                        {
                            order?.status === 4 ?  <SimpleTypegraphy className="order__verify" variant={"span"} text={`TASDIQLANGAN`} /> : null
                        }
                        {
                            order?.status === 5 ?  <SimpleTypegraphy className="order__delivered" variant={"span"} text={`YETQAZILGAN`} /> : null
                        }
                        {
                            order?.status === 3 ?  <SimpleTypegraphy className="order__checking" variant={"span"} text={`TEKSHRILMOQDA`} /> : null
                        }
                                
                    </Box>
                </Box>
                <Box sx={{width:"309px",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                    <Box>
                        <SimpleTypegraphy text={`Buyurmalar soni`} variant={"p"} className="user__sub--title"/>
                        <SimpleTypegraphy className="order__items" variant={"span"} text={`${order?.order_items.length} ta`} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{width:"964px",height:"450px",marginRight:"16px",padding:"24px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
              <SimpleTypegraphy variant={"h3"} className="orders__count" text={`Mahsulotlar (${order?.order_items.length})`}/>

              <TableContainer sx={{background:"transparent",boxShadow: "none !important",height:"90%",overflow:"hi"}} component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <StyledRow sx={{background:"#f6f6f6"}}>
                                <TableCell sx={{width:"14.2%"}}><SimpleTypegraphy className="table__title" variant={"span"} text={"№"} /></TableCell>
                                <TableCell sx={{width:"14.2%"}} ><SimpleTypegraphy className="table__title" variant={"span"} text={"Rasm"} /></TableCell>
                                <TableCell sx={{width:"14.2%"}} ><SimpleTypegraphy className="table__title" variant={"span"} text={"Mahsulot linki"} /></TableCell>
                                <TableCell sx={{width:"14.2%"}} ><SimpleTypegraphy className="table__title" variant={"span"} text={"Qo'shilgan"} /></TableCell>
                                <TableCell sx={{width:"14.2%"}} ><SimpleTypegraphy className="table__title" variant={"span"} text={"Hajm"} /></TableCell>
                                <TableCell sx={{width:"14.2%"}} ><SimpleTypegraphy className="table__title" variant={"span"} text={"Miqdor"} /></TableCell>
                                <TableCell sx={{width:"14.2%"}} ><SimpleTypegraphy className="table__title" variant={"span"} text={"Narxi"} /></TableCell>
                            </StyledRow>
                        </TableHead>
                        <TableBody >
                        {order?.order_items?.map((item,index) => (

                            <StyledRow
                                key={index}
                            >
                                <TableCell  component="th" scope="row">
                                    <SimpleTypegraphy className="table__id" variant={"span"} text={`#${index + 1}`} />
                                </TableCell>
                                <TableCell >
                                    <Image alt="order-img" style={{objectFit:"cover"}} src={"/img/default-img.png"} width={40} height={40}/>
                                </TableCell>
                                <TableCell ><Link target="_blank" href={item.link ? item.link : "#"} legacyBehavior><a style={{color:"#4e4efd"}}>Link</a></Link></TableCell>
                                <TableCell >{item?.created_at.slice(0,10)}</TableCell>
                                <TableCell >{item?.size}</TableCell>
                                <TableCell >{item?.amount}</TableCell>
                                <TableCell>
                                    <Box>
                                        <EditIcon sx={{color:"#731694"}}/>
                                    </Box>
                                    
                                </TableCell>
                            </StyledRow>
                        ))}
                        
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default Order