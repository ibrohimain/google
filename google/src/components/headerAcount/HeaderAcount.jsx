import { Apps, Science } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import AvatarComponent from '../avatarComponet/AvatarComponent';
import AppContainer from '../appContainer/AppContainer';
import { appData } from '../../data';

const HeaderAcount = () => {
    const [app, setApp] = useState(false)
    const [avatar, setAvatar] = useState(false)

    return (
        <div className='flex relative justify-end gap-3 items-center p-[25px]'>
            <button className='text-[white]'>Gmail</button>
            <button className='text-[white]'>Images</button>
            <IconButton>
                <Science sx={{ color: "#fff" }} />
            </IconButton>

            <div>
                <IconButton onClick={() => setApp(!app)}>
                    <Apps sx={{ color: "#fff" }} />
                </IconButton>
                {app && (
                    <div className='flex justify-evenly flex-wrap w-[370px] absolute right-8 top-[90px] h-[470px] rounded-3xl bg-[#292929] overflow-y-scroll text-white  overflow-y-scroll h-64 scrollbar-thin hover:scrollbar-thumb-gray-500 hover:scrollbar-track-gray-300'>
                        {
                            appData.map((app, index) => (
                                <AppContainer key={index} img={app.img} title={app.name} />
                            ))}
                    </div>
                )}
            </div>

            <div className=''>
                <IconButton onClick={() => setAvatar(!avatar)}>
                    <Avatar />
                </IconButton>
                {avatar && (
                    <div className='w-[370px] absolute right-8 top-[90px] h-[633px] rounded-3xl bg-white'>
                        <AvatarComponent />
                    </div>
                )}
            </div>
        </div>

    );
};

export default HeaderAcount;
