import React from 'react'
import Sidebar from '../../components/sidebar'
import MessageContainer from '../../components/message/messageContainer'

const Home = () => {
    return (
        <div className=' flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home
