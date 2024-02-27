import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/253265822_4189352744508761_4097723498375115354_n.jpg?_nc_cat=111&cb=99be929b-8d691acd&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Z02iXsX9-_oAX_Dppsz&_nc_ht=scontent.fccu5-1.fna&oh=00_AfBc9pUtupnWFsU2vwxSXkwjZX0GI7gAZ6MG0SIa_LkQyg&oe=65E2B90C" alt="user avatar" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-2 justify-between">
                        <p className="font-bold text-gray-200">
                            Khankir Chele
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
