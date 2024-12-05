import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import {FiSearch} from 'react-icons/fi';
import {FaPlusCircle } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import {CgProfile} from 'react-icons/cg';
import {RiEditCircleLine } from 'react-icons/ri';
import {AiFillDelete} from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import contactCard from './components/ContactCard';

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
      
    const getContacts = async()=>{
        try{
          const contactref = collection(db , "contacts");
          const contactsSnapshots = await getDocs(contactref);
          const contactLists = contactsSnapshots.docs.map( (doc)=> {
              return{
                id: doc.id,
                ...doc.data(),
              };
          });
          setContacts(contactLists);
          console.log(contactLists);
          // console.log(contactsSnapshots);
        }catch(error){
          console.log(error);
        }
    };
    getContacts();

  },[]);



  return (
    <>
     <div className='mx-auto max-w-[370px] px-4 ' >
        <Navbar/>
     
        <div className="flex  gap-2">
          <FiSearch className="absolute ml-1 mt-1 text-3xl text-white "  />
          <div className="relative flex flex-grow items-centere">
              <input 
                type='text'
                className=' h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white' 
              />
          </div>
          <FaPlusCircle className="  text-5xl text-white cursor-pointer " />

        </div>
        
        <contactCard contacts={contacts} />
     </div>
    </>
  )
}

export default App;

