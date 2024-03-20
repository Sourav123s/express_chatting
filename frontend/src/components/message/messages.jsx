import React, { useEffect, useRef } from 'react'
import Message from './index.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'
import MessageSkeleton from '../skeletons/messageSkeleton.jsx'
import useListenMessages from '../../hooks/useListenMessages.js'
const Messages = () => {
    const { messages, loading } = useGetMessages();
    const lastMessageRef = useRef();
    useListenMessages(); // this custome hooks are used to load new messages
    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100)

    }, [messages])
    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading && messages.length > 0 && messages.map((message) =>
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>

            )}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && messages.length === 0 && (
                <p className='text-center text-gray-500'>Send a message to start the conversations</p>
            )}
        </div>
    )
}

export default Messages
