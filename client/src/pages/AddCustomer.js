import React from 'react'
import Navbar from '../components/Navbar'

export default function AddCustomer() {
  return (
    <>
      <Navbar />
      <div className='flex items-center flex-col'>
        <h3 className='text-2xl font-semibold my-10'>Enter the Building details</h3>
        <form action="/buildings" method="post">
          <div className="font-normal text-md">
            <div className="flex justify-between mb-3">
              <label for="name">Enter building name</label>
              <input type="text" name="name" id="name" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" />
            </div>

            <div className="flex justify-between mb-3">
              <label for="count">Enter the number of houses</label>
              <input type="number" name="house_count" id="house_count" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" />
            </div>

            <div className="flex justify-between mb-3">
              <label for="rent">Enter the building rent</label>
              <input type="text" name="rent" id="rent" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" />
            </div>
            <input type="submit" className="rounded-md shadow-sm text-white font-semibold bg-teal-500 px-4 py-1" />
          </div>
        </form>
      </div>
    </>
  )
}
