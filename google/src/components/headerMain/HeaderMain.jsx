import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import mikro from '../../assets/Mikirafon.png'
import camera from '../../assets/Camera.png'
import MainContainer from '../mainContainer/MainContainer';
import { appImg } from '../../main';

const HeaderMain = () => {
    return (
        <div className='w-[600px] h-[500px]'>
            <h1 className='text-white font-semibold text-[80px] text-center odd:text-yellow-500'>Google</h1>
            <div className='flex items-center justify-between w-[100%] border h-[45px] rounded-[20px] bg-white mt-[20px]'>
                <SearchIcon sx={{ width: "30px", marginLeft: "5px", color: "gray" }} />
                <input type="text" className='w-[490px] h-[100%] outline-none' name="" id="" placeholder='Search Google or type in URL' />
                <img src={mikro} alt="" className='w-[15px] MR-[5px]' />
                <img src={camera} alt="" className='w-[17px] mr-[15px]' />
            </div>
            <div className='text-white w-[90%] h-[270px] mx-auto mt-[20px] grid grid-cols-5' >
                {
                    appImg.map((main, item) => (
                        <MainContainer key={item} image={main.image} titles={main.name} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default HeaderMain
