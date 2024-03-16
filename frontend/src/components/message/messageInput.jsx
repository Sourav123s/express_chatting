import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessages from '../../hooks/useSendMessages';
const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessages();

    const handleSumbit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("")
    }
    return (
        <form className='px-4 my-3' onSubmit={handleSumbit}>
            <div className="w-full relative">
                <input type="text" className=" broder text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                    placeholder='Type a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    {loading ? <div className='loading loading-spinner'></div> : <IoMdSend />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput
