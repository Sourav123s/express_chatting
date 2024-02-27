import React from 'react'

const GenderCheckbox = () => {
    return (
        <div className='flex'>
            <div className='from-control'>
                <label htmlFor="male" className={'label gap-2 cursor-pointer'}>
                    <span className=' text-base-100 label-text'>Male</span>
                    <input type="checkbox" className='checkbox border-slate-900' />
                </label>
            </div>
            <div className='from-control'>
                <label htmlFor="female" className={'label gap-2 cursor-pointer'}>
                    <span className=' text-base-100 label-text'>Female</span>
                    <input type="checkbox" className='checkbox border-slate-900' />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox
