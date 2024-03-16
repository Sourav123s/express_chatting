import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoSearchSharp } from "react-icons/io5";
import useCoversations from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversations.js'
const SearchInput = () => {
    const [search, setSearch] = useState("");

    const { setSelectedConversation } = useCoversations();
    const { conversations } = useGetConversation()

    const handelSubmit = async (e) => {
        console.log(e);
        e.preventDefault()

        if (!search) return;
        if (search.length < 3) return toast.error('Search must be at least 3 characters long');

        const conversation = conversations.find((conversation) => conversation.fullName.toLowerCase().includes(search.toLocaleLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch('')
        } else {
            return toast.error('No such user found!')
        }

    }
    return (
        <div>
            <form className=' flex  items-center gap-2' onSubmit={handelSubmit}>
                <input type="text" placeholder='Search...' className='input input-bordered rounded-full'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                />
                <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                    <IoSearchSharp className='w-6 h-6 outline-none' />
                </button>
            </form>
        </div>
    )
}

export default SearchInput
