import React from 'react'

export default function Footer() {
    return (
        <div style={{height:250}} className='container-fluid mt-5 align-content-center bg-light'>
            <div className='container'>
                <div className='d-flex gap-2 justify-content-center'>
                    <a href="#" className='text-decoration-none'>Home</a>
                    <a href="#" className='text-decoration-none'>About</a>
                    <a href="#" className='text-decoration-none'>Skill</a>
                    <a href="#" className='text-decoration-none'>Education</a>
                    <a href="#" className='text-decoration-none'>Projects</a>
                    <a href="#" className='text-decoration-none'>Contact Us</a>
                </div>
                <div className='border border-primary border-1 my-3'>

                </div>
                <div className='text-center'>
                    <p className='text-primary'>© 2025 theakhilsarkar</p>
                </div>
            </div>
        </div>
    )
}
