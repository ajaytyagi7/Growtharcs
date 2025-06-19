import React from 'react'

const ManageBlog = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-center mt-10'>Manage Blog</h1>
        <div className='flex justify-center mt-5'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>Add New Blog</button>
        </div>
        <div className='mt-10'>
            {/* Here you can add a list of blogs with options to edit or delete */}
            <p className='text-center'>List of blogs will be displayed here.</p>
        </div>
      
    </div>
  )
}

export default ManageBlog
