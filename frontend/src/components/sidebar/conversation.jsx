import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://scontent-ccu1-2.xx.fbcdn.net/v/t39.30808-6/423715118_2108262482853311_4430258683633338159_n.jpg?_nc_cat=105&cb=99be929b-8d691acd&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=qlU6daK-N1oAX8yrA6l&_nc_ht=scontent-ccu1-2.xx&oh=00_AfDuapBkrDPAUGTZBr9tBMGUaG_YC7pGTOk_1_Qu-Z7bpg&oe=65E32BC0" alt="user avatar" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-2 justify-between">
                        <p className="font-bold text-gray-200">
                            Sourav Pramanik
                        </p>
                        <span className='text-xl'>🤣</span>
                    </div>
                </div>
            </div>

            <div className="divider my-0 py-0 h-1" />
        </>
    )
}

export default Conversation
