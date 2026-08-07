import React, { useEffect, useState } from 'react'
import { baseBookURL } from '../axiosInstance';

const Home1 = () => {

     const [booklist,setBookList]=useState([])
      
      const getBookList=async()=>{
        try{
       const {data}=await baseBookURL.get("getbook");
       setBookList(data?.Booklist)
       console.log(data.Booklist);
       }catch(err){
          console.log(err.Message);
          
        }
      }
      //reload 
      useEffect(()=>{
         getBookList()
         
         
      },[])
       

  return (
   <div>
     <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Add a Book</h1>

      <form className="bg-white shadow-md rounded-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          
          {/* Book Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Book Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter book name"
              
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter author"
              
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter title"
              
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="$0.00"
             
            />
          </div>

          {/* Publish Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Publish Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-3 py-2"
               
            />
          </div>

        </div>

        <div className="mt-6">
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
               
          >
            Submit
          </button>

          {/* submitted for */}
            {/* Static Table */}
       <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submitted Books</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                <th className="px-4 py-2 border-b">Book Name</th>
                <th className="px-4 py-2 border-b">Author</th>
                <th className="px-4 py-2 border-b">Price</th>
                <th className="px-4 py-2 border-b">Publish Date</th>
                <th className="px-4 py-2 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
               {
              booklist?.map((book,index)=>{
                return <tr key={index}>
                <td className="px-4 py-2 border-b">{book?.bookName}</td>
                <td className="px-4 py-2 border-b">{book?.bookAuthor}</td>
                <td className="px-4 py-2 border-b">{book?.bookPrice}</td>
                <td className="px-4 py-2 border-b">{book?.publishDate}</td>
                <td className="px-4 py-2 border-b text-center space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm" onClick={(e)=>handleUpdate(book,e)} >
                    Update
                  </button>
               
                  
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm" onClick={()=>{handleDelete(book?._id)}}>
                    Delete
                  </button>
                </td>
              </tr>
              })
            }

              {/* Add more static rows if needed */}
            </tbody>
          </table>
        </div>
      </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Home1