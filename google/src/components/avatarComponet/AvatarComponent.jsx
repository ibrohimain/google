import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import user from '../../assets/bg.jpg'
import Lists from '../../container/Lists';
import { Padding } from '@mui/icons-material';

const AvatarComponent = () => {
    return (
        <div className='w-[100%] h-[100%] bg-[#272727] rounded-[10px]'>
            <div className='flex justify-between w-[100%] h-[50px]'>
                <h2 className='w-[80%] flex justify-end items-center font-semibold text-white'>umarabdullayev333@gmail.com</h2>
                <IconButton>
                    <CloseIcon sx={{ marginRight: "10px", color: "white" }} />

                </IconButton>
            </div>
            <div className='w-[100%] h-[200px] flex flex-col items-center mt-[5px]'>
                <img src={user} alt="" className='w-[100px] h-[100px] rounded-[50%] object-cover' />
                <h2 className='text-[white] font-semibold text-[24px] text-center'>Hi Umar</h2>
                <button className='w-[220px] h-[40px] border text-white rounded-[20px] transition-[0.2s] mt-[10px] hover:bg-[rgba(117,117,117,0.2)]'><a href="#">Manage your google acount</a></button>
            </div>
            <div className='w-[100%] h-[230px]'>
                <Lists />
                {/* <Lists/> */}
            </div>
            <div className='w-[100%] h-[140px] flex flex-col justify-center text-white'>
                <div className='w-[95%] mx-auto h-[50%] flex items-center justify-between '>
                    <div className='cursor-pointer w-[170px] h-[80%] rounded-[10px] flex items-center gap-1 border-[1px] border-[rgba(122,122,122,0.15)] transition-[0.2s] hover:bg-[rgba(149,148,148,0.5)]'>
                        <AddIcon sx={{ marigingLeft: "10px" }} />
                        Add acount
                    </div>
                    <div className='cursor-pointer w-[170px] h-[80%] rounded-[10px] flex items-center gap-1 border-[1px] border-[rgba(122,122,122,0.15)] transition-[0.2s] hover:bg-[rgba(149,148,148,0.5)]'>
                        <LogoutIcon sx={{ marginLeft: "10px" }} />
                        Remov acount
                    </div>
                </div>
                <div className='w-[100%] h-[50%] flex items-center justify-center'>
                    <Button variant='`'><a href="#" className='text-[12px]'>Privacy Policy</a> </Button>
                    <p>
                        •
                    </p>
                    <Button variant='`'><a href="#" className='text-[12px]'>Terms of Service</a></Button>
                </div>
            </div>
        </div>
    )
}

export default AvatarComponent
