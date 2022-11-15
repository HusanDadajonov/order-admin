import { Box } from '@mui/system';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { instance } from '../../axios';
import SimpleTypegraphy from '../../src/Components/SimpleTypegraphy';
import {Button, CircularProgress, styled} from '@mui/material';
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
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import SimpleTypography from '../../src/Components/SimpleTypegraphy';

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


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline:"none",
    boxShadow: "28px 8px 54px rgba(0, 0, 0, 0.15)",
    borderRadius:"15px",
    background:"#fff",
    p: "40px",
  };



function Order() {
    const [order,setOrder] = useState(null)
    const [age, setAge] = useState();
    const router = useRouter();
    const [color,setColor] = useState(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cost,setCost] = useState()
    const [loading,setLoading] = useState(false)
    const [paymentBtns,setPaymentBtns] = useState(true)
    const [refresh, setRefresh] = useState(false);

    useEffect(()=> {
       if(router.isReady){
        instance.get(
            `orders/${router.query.id}`,{headers: {
                'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0Z2lkIjpudWxsLCJpZCI6MSwicm9sZSI6MiwiaWF0IjoxNjY4MjUyNTU1fQ.KOXs06thZAisjqPr1ICoJTHNQL4WzXgD2M59V-LJ3JI"
              }}
          )
          .then(function(response) {
            setOrder(response.data.data.order)
            setLoading(true)
          })
          .catch(function(error) {
            console.log(error);
          });
       }

       setRefresh(false);
    },[router.query.id, refresh])


    const handleChange = (event) => {
        setAge(event.target.value);
        setColor(statuses[event.target.value].color)
    }


    function DeliveredHandler() {
        setRefresh(true)
        instance.put(
            `/orders/status/${router.query.id}`, 
            {
                status: 5 
            },
          {  
            
            headers: {
                    'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0Z2lkIjpudWxsLCJpZCI6MSwicm9sZSI6MiwiaWF0IjoxNjY4MjQwODI0fQ.GC9BeyDthf00OqLrY8ffqWuqBLhggszpdV6enyrlhdk"
            } 
          }
             
          )
          .then(function(response) {
            setLoading(true)
          })
          .catch(function(error) {
            console.log(error);
          });
    }

    function checkPayment(bool) {
        if(order?.payment_image_id){
            instance.put(
                `/orders/verification/${router.query.id}`, 
                {
                    is_paid: bool 
                },
              {  
                
                headers: {
                        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0Z2lkIjpudWxsLCJpZCI6MSwicm9sZSI6MiwiaWF0IjoxNjY4MjQwODI0fQ.GC9BeyDthf00OqLrY8ffqWuqBLhggszpdV6enyrlhdk"
                } 
              }
                 
              )
              .then(function(response) {
              })
              .catch(function(error) {
                console.log(error);
              });
        }

        // if(router.isReady){
        //     instance.get(
        //         `orders/${router.query.id}`,{headers: {
        //             'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0Z2lkIjpudWxsLCJpZCI6MSwicm9sZSI6MiwiaWF0IjoxNjY4MjUyNTU1fQ.KOXs06thZAisjqPr1ICoJTHNQL4WzXgD2M59V-LJ3JI"
        //           }}
        //       )
        //       .then(function(response) {
        //         setOrder(response.data.data.order)
        //         setLoading(true)
        //       })
        //       .catch(function(error) {
        //         console.log(error);
        //       });
        //    }
    }

 

    function FormHandler(e) {
        e.preventDefault()
        if(cost){
            instance.put(
                `orders/cost/${router.query.id}`, 
                {
                    cost,
                    text:""
                },
              {  
                
                headers: {
                        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0Z2lkIjpudWxsLCJpZCI6MSwicm9sZSI6MiwiaWF0IjoxNjY4MjQwODI0fQ.GC9BeyDthf00OqLrY8ffqWuqBLhggszpdV6enyrlhdk"
                } 
              }
                 
              )
              .then(function(response) {
              })
              .catch(function(error) {
                console.log(error);
              });
              handleClose()
              setCost()
        }
    
    }


    if(loading){
        return (
            <Box sx={{paddingLeft:"150px",paddingTop:"40px",paddingRight:"48px"}}>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <SimpleTypegraphy variant={"h3"} className="cost__title" text="Narx belgilash"/>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { marginBottom:"24px", width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={(e)=> FormHandler(e)}
                    >
                        <TextField
                            label="Narx"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            width="100%"
                            type={"number"}
                            value={cost}
                            onChange={(e)=> setCost(e.target.value)}
                        />
                        <Button type='submit' className='btn' sx={{width:"100%",background:"#01605a",borderRadius: "10px",marginBottom:"8px",padding:"13px 0",color:"#fff"}}>O’zgarishlarni saqlash</Button>
                        <Button onClick={handleClose}  sx={{width:"100%",background:"rgba(23, 26, 35, 0.06);",borderRadius: "10px",padding:"13px 0",color:"#000"}}>Bekor qilish</Button>
                    </Box>

                </Box>
            </Modal>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"30px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                    <Box sx={{display:"flex",alignItems: "center"}}>
                        <SimpleTypegraphy text={"Buyurtma"} variant={"h2"} className="user__name"/>
                        <SimpleTypegraphy text={`#${order?.id}`} variant={"p"} className="user__id"/>
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                        {
                            order.status === 4 ? <Button onClick={DeliveredHandler} sx={{"&:hover":{background:"#b9d6f2"},marginRight:"10px",background:"#a2D2ff",borderRadius: "5px",padding:"10px",color:"#0053A0"}}>YETQAZILDI</Button> : ""
                        }
                    </Box>
                
                </Box>
                <Box sx={{display:"flex"}}>
                    <Box sx={{width:"25%",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                        <Box>
                            <SimpleTypegraphy text={`phone number`} variant={"p"} className="user__sub--title"/>
                            <SimpleTypegraphy text={order?.user?.phone_number} variant={"h2"} className="user__title"/>
                        </Box>
                    </Box>
                    <Box sx={{width:"25%",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                        <Box>
                            <SimpleTypegraphy text={`Ism va Familiya`} variant={"p"} className="user__sub--title"/>
                            <SimpleTypegraphy text={order?.user?.full_name} variant={"h2"} className="user__title"/>
                        </Box>
                    </Box>
                    <Box sx={{width:"25%",marginRight:"16px",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
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
                                order?.status === 4 ?  <SimpleTypegraphy className="order__verify" variant={"span"} text={`YO'LDA (TO'LANDI)`} /> : null
                            }
                            {
                                order?.status === 5 ?  <SimpleTypegraphy className="order__delivered" variant={"span"} text={`YETQAZILGAN`} /> : null
                            }
                            {
                                order?.status === 3 ?  <SimpleTypegraphy className="order__checking" variant={"span"} text={`TEKSHRILMOQDA`} /> : null
                            }
                                    
                        </Box>
                    </Box>
                    <Box sx={{width:"25%",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                        <Box>
                            <SimpleTypegraphy text={`Buyurmalar soni`} variant={"p"} className="user__sub--title"/>
                            <SimpleTypegraphy className="order__items" variant={"span"} text={`${order?.order_items.length} ta`} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:"flex"}}>
                <Box sx={{width:"78%",height:"480px",marginRight:"16px",padding:"24px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <SimpleTypegraphy variant={"h3"} className="orders__count" text={`Mahsulotlar (${order?.order_items.length})`}/>
                        <Box onClick={handleOpen} sx={{cursor:"pointer"}}>
                            <EditIcon sx={{color:"#731694"}}/>
                        </Box>
                    </Box>
                
                    <TableContainer sx={{background:"transparent",boxShadow: "none !important",height:"90%",overflow:"hi"}} component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <StyledRow sx={{background:"#f6f6f6"}}>
                                    <TableCell sx={{width:"14.2%"}}>
                                        <SimpleTypegraphy className="table__title" variant={"span"} text={"№"} />
                                    </TableCell>
                                    <TableCell sx={{width:"14.2%"}} >
                                        <SimpleTypegraphy className="table__title" variant={"span"} text={"Mahsulot"} />
                                    </TableCell>
                                    <TableCell sx={{width:"14.2%"}} >
                                        <SimpleTypegraphy className="table__title" variant={"span"} text={"Qo'shilgan"} />
                                    </TableCell>
                                    <TableCell sx={{width:"14.2%"}} >
                                        <SimpleTypegraphy className="table__title" variant={"span"} text={"Hajm"} />
                                    </TableCell>
                                    <TableCell sx={{width:"14.2%"}} >
                                        <SimpleTypegraphy className="table__title" variant={"span"} text={"Miqdor"} />
                                    </TableCell>
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
                                    {
                                        item.link !== null ?  
                                        <TableCell ><Link target="_blank" href={item.link ? item.link : "#"} legacyBehavior><a style={{color:"#4e4efd"}}>Link</a></Link></TableCell> 
                                        
                                        :
                                        <TableCell >
                                            <Image alt="order-img" style={{objectFit:"cover"}} src={`http://137.184.3.22:3000/uploads/files/${item?.image_id}`} width={40} height={40}/>
                                        </TableCell>
                                        
                                    }
                                
                                    
                                    <TableCell >{item?.created_at.slice(0,10)}</TableCell>
                                    <TableCell >{item?.size}</TableCell>
                                    <TableCell >{item?.amount}</TableCell>
                                </StyledRow>
                            ))}
                            
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Box>
                        <Box sx={{width:"25%",padding:"20px",marginBottom:"16px",background: "#fff",boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.04)",borderRadius: "8px"}}>
                        <Box sx={{display:"flex",alignItems:"center",marginBottom:"16px"}}>
                            <SimpleTypography className="orders__check" variant="h3" text="Chek"/>
                            {
                                order?.status === 4 ? <SimpleTypography className="order__new" variant="span" text="TO'LANGAN"/> : null
                            }

                            {
                                order?.status === 2 ? <SimpleTypography className="order__checking" variant="span" text="KUTILMOQDA"/> : null
                            }

                            {
                                order?.status === 3 ? <SimpleTypography className="order__checking" variant="span" text="TEKSHIRILMOQDA"/> : null
                            }

                            
                            
                        </Box>
                        <Box sx={{display:"flex",flexDirection:"column"}}>
                            {
                                order?.transactions.map(item => (
                                    order?.payment_image_id ?
                                    <Box sx={{position:"relative"}} key={item.id}>
                                        {
                                            item.valid ?  <SimpleTypography variant="span" className="accepted__img" text="Muvaffaqiyatli" /> : null
                                        }
                                        {
                                            item.valid === false ?   <SimpleTypography variant="span" className="unaccepted__img" text="Muammoli" /> : null
                                        }
                                            
                                           
                                        
                                        <Image alt='payment' src={`http://137.184.3.22:3000/uploads/files/${item?.image_id}`} width={279} style={{objectFit:"cover"}} height={260}/>
                                    </Box>
                                : <Image src={"/img/no-image.png"} width={279} style={{objectFit:"cover"}} height={300} alt="default-img"/>
                                    
                                ))
                                
                            }

                            {
                                order?.transactions.map(item => (
                                    item.valid === null ?( 
                                    <Box key={item.id} sx={{display:"flex",margin:"24px 0",alignItems:"center",justifyContent:"space-between"}}>
                                        <Button onClick={()=> {checkPayment(true); setRefresh(!refresh)}}  sx={{"&:hover":{background:"#b9d6f2"},width:"90%",marginRight:"10px",background:"#a2D2ff",borderRadius: "10px",padding:"13px 0",color:"#0053A0"}}>Tasdiqlash</Button>
                                        <Button onClick={()=> {checkPayment(false); setRefresh(!refresh)}} sx={{"&:hover":{background:"rgb(243 131 161 / 12%)"},width:"90%",background:"rgba(238, 36, 90, 0.12)",borderRadius: "10px",padding:"13px 0",color:"#dd144a"}}>Xatolik</Button>
                                    </Box> ) : null
                                ))
                                
                                
                            }

                          
                    
                        </Box>
                         
                        
                        <Box sx={{borderBottom:"1px solid #ccc",borderTop:"1px solid #ccc",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"17px 0"}}>
                            <SimpleTypography variant="p" text={"Umumiy chek"} />
                            <SimpleTypography variant="p"  className="order__price" text={`${order?.price ? Math.round(order?.price) + " so'm" : "KIRITILMAGAN"}`} />
                        </Box>
                      
                        </Box>
                    </Box>
            </Box>
        )
    }
    else{
      return(
        <Box sx={{ display: 'flex',alignItems:"center",justifyContent:"center",height:"93vh" }}>
            <CircularProgress  sx={{width:"150px !important",height:"150px !important"}} />
        </Box>
      )
    }
}

export default Order