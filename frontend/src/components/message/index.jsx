import React from 'react'

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="user impage" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-bubble text-white bg-blue-400">I hate you!</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-blue-50">
                Seen at 12:46
            </div>
        </div>
    )
}

export default Message
