import { Box } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import { useEffect, useState } from 'react';
import {
    styled
  } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const SideBarBox = styled(Box)(
    ( theme ) => `
        height:100vh;
        padding:18px;
        background: #fff;
        box-shadow: 0px 4px 6px rgba(214, 214, 214, 0.8);
        position:fixed;
        display:flex;
        flex-direction: column;
        justify-content: space-between;

        .active{
            box-shadow: 0px 2px 20px rgba(1, 96, 90, 0.1) ;

            svg{
                color:#01605a !important
            }
            
        }
  `
);



function SideBar() {
    const [active,setActive] = useState(1)

    useEffect(()=>{
        if(window.location.pathname === "/users"){
            setActive(2)
        }
        if(window.location.pathname === "/"){
            setActive(1)
        }

        console.log();
    },[])

    const siderBarItemStyle = {
        width:"60px",
        height:"60px",
        // ,
        borderRadius:"12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor:"pointer",
        marginBottom:"40px"
    }

    return (
        <SideBarBox>
            <Box>
                <Link href="/" legacyBehavior>
                    <a >
                        <Image width={60} height={60} src="/img/logo.svg" alt="logo" />
                    </a>
                </Link>
               
            </Box>
            <Box>
                <Link href="/" legacyBehavior>
                        <a >
                            <Box 
                                sx={siderBarItemStyle}
                                className={active === 1 ? "active" : ""}
                                onClick={()=> setActive(1)}
                            >
                                <FilterFramesOutlinedIcon style={{fontSize:"40px",color:"#171A23"}}/>
                            </Box>
                        </a>
                </Link>

                <Link href="/users" legacyBehavior>
                    <a >

                        <Box 
                            sx={siderBarItemStyle}
                            className={active === 2 ? "active" : ""}
                            onClick={()=> setActive(2)}
                        >   
                            <GroupsIcon style={{fontSize:"40px",color:"#171A23"}}/>
                        </Box>
                        
                    </a>
                </Link>
              
               
            </Box>
            <Box sx={{width:"40px",height:"40px",borderRadius:"50%",overflow:"hidden"}}>
                <Link href="/" legacyBehavior>
                    <a>
                        <Image style={{objectFit:"cover"}} width={40} height={40} src="/img/logo.svg" alt="logo" /> 
                    </a>
                </Link>
                
            </Box>
        
        </SideBarBox>
    )
}

export default SideBar
