import React from 'react'

const AppContainer = ({ img, title }) => {
    return (
        <div className='w-[110px] h-[120px] hover:bg-[rgba(22,22,22,0.5)] flex items-center justify-center flex-col gap-1 rounded-lg'>
            <img
                src={img}
                alt='icon' 
                className='w-[50px] h-[50px] rounded-full object-contain'
                />
                <h2>{title}</h2>
                
        </div>
    )
}

export default AppContainer
