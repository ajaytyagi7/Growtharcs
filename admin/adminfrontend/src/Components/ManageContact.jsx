import React from 'react'

const ManageContact = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-center mt-10'>Manage Contact</h1>
        <div className='flex justify-center mt-5'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>View Contacts</button>
        </div>
        <div className='mt-10'>
            {/* Here you can add a list of contacts with options to view or delete */} 
            <p className='text-center'>List of contacts will be displayed here.</p>
        </div>
      
    </div>
  )
}

export default ManageContact
