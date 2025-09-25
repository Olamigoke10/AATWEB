import React from 'react'
import contactImg from '../../public/assets/imgs/contactImg.png'

const Contact1 = () => {
  return (
    <div className=''>
        <div className='flex md:flex-row max-w-4xl mx-auto shadow-md rounded-md bg-primary my-12 gap-7 p-10 items-center'>
            <div className='text-primary-foreground leading-5'>
                <form action="" className='p-5 space-y-5'>
                    <div className='flex flex-col'>
                    <label htmlFor=""  className='font-bold text-lg text-chart-2'>Name:</label>
                    <input type="text" className='p-6 border-chart-2 outline-chart-2 shadow-chart-2'  placeholder='Enter your name'/>
                    </div>

                    <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold text-lg text-chart-2'>Email:</label>
                    <input type="email" name="" id="" className='p-6 border-none outline-chart-2 shadow-chart-2'  placeholder='Enter a valid email'/>
                    </div>
                    
                    <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold text-lg text-chart-2'>Message:</label>
                    <textarea name=""  className='p-6 border-none outline-chart-2 shadow-chart-2' id="" placeholder='Talk To Us'></textarea>
                    </div>
                </form>

            </div>

            <div>
                <img src={contactImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact1