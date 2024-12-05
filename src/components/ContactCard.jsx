import React from 'react';



const ContactCard = ({contact}) => {
  return (
    <>
    <div className="mt-4">
          {
            contacts.map((contact)=>(
              <div key={contact.id} className='bg-yellow flex items-center justify-around p-2 rounded-lg ' >
                <div className="flex gap-1 ">
                  <CgProfile className='text-4xl text-orange' />

                  <div className="text-white ">
                      <h1 className='font-medium'>{contact.name}</h1>
                      <p className='text-sm'>{contact.email}</p>
                  </div>
                </div>
                <div className=" flex text-3xl">
                  <RiEditCircleLine className='text-green-300' />
                  <IoMdTrash className='text-orange-300' />
                  
                </div>


              </div>
            ))
          }
        </div>
      
    </>
  )
}

export default ContactCard
