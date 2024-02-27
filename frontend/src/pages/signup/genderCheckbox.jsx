import React from 'react'

const GenderCheckbox = ({ onCheckboxChange, selectedgender }) => {
    return (
        <div className='flex'>
            <div className='from-control'>
                <label htmlFor="male" className={`label gap-2 cursor-pointer ${selectedgender === "male" ? "selected" : ""}`}>
                    <span className=' text-base-100 label-text'>Male</span>
                    <input type="checkbox" className='checkbox border-slate-900'
                        checked={selectedgender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className='from-control'>
                <label htmlFor="female" className={`label gap-2 cursor-pointer${selectedgender === "female" ? "selected" : ""}`}>
                    <span className=' text-base-100 label-text'>Female</span>
                    <input type="checkbox" className='checkbox border-slate-900'
                        checked={selectedgender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox
