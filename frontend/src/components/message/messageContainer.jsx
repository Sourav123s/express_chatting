import React from 'react'
import Messages from './messages'
import MessageInput from './messageInput'
import { TiMessages } from 'react-icons/ti'
const MessageContainer = () => {
    const noChatSelected = false
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {noChatSelected ? (
                <NoChatSelected />
            ) : (<>
                <div className="bg-slate-500 px-4 py-2 mb-2 ">
                    {/* <div className="w-10 rounded-full">
                        <img alt="user impage" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full' />
                    </div> */}
                    <span className="label-text">To: </span>
                    <span className="text-gray-900 font-bold">John Doe</span>
                </div>
                <Messages />
                <MessageInput />
            </>)}
        </div >
    )
}

export default MessageContainer

const NoChatSelected = () => {
    // const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋  ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};