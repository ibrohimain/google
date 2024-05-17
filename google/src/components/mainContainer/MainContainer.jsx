import React, { useState } from 'react';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { IconButton } from '@mui/material';

const MainContainer = ({ image, titles }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='w-[90px] h-[110px] rounded transition-[0.2s] hover:bg-[rgba(22,22,22,0.5)] flex flex-col items-center gap-[15px] ' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className='flex justify-center relative' >
                <div className={`w-[50px] h-[50px] flex items-center justify-center rounded-[50%] bg-[#323232] mt-[5px] `}>
                    <img src={image} alt="icon" className='w-[28px] h-[28px]' />
                </div>
                {isHovered && <IconButton sx={{ position: "absolute", left: "80%", color:"white" }}><MoreVertSharpIcon /></IconButton>}
            </div>
            <h2>{titles}</h2>
        </div>
    );
};

export default MainContainer;
