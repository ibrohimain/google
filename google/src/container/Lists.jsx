import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import user from '../assets/bg.jpg'

export default function Lists() {
    return (
        <div className='w-[95%] mx-auto mt-[10px]'>
            <Accordion sx={{backgroundColor:"#383737", border:"none", color:"white" }}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon sx={{color:"white"}} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Recomended actions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>
                            <div className='w-[100%] h-[50px] flex items-center  mb-[2px]'>
                                <img src={user} alt="" className='w-[50px] h-[50px] rounded-[50%] block' />
                                <p className='text-[#d3d3d3] text-[14px] text-end w-[100%]'>umarabdullayev338@gmail.com</p>
                            </div>
                            <div className='w-[100%] h-[50px] flex items-center  mt-[10px]'>
                                <img src={user} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                                <p className='text-[#d3d3d3] text-[14px] text-end w-[100%]'>ibrohimabdullayev111@gmail.com</p>
                            </div>
                        </>
                    </Typography>
                </AccordionDetails>
            </Accordion> 
        </div>
    );
}