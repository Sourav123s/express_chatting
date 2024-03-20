import React from 'react'
import { useAuthContext } from '../../context/authContext.jsx'
import useCoversations from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime.js';
const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useCoversations();
    const fromMe = message.senderId == authUser._id
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser?.profilePicture : selectedConversation?.profilePicture; //
    const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-700'
    const itsShaked = message.shouldShake ? 'shake' : ''
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="user impage" src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-400 ${bubbleBgColor} ${itsShaked} pb-2`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-blue-50">
                {extractTime(message.createdAt)}
            </div>
        </div>
    )
}

export default Message
