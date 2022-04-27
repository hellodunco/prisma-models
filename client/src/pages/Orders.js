import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Orders() {

  return (
    <div>
      <Navbar />
      <div className='flex my-5 w-2/3 justify-center mx-60 space-x-52'>
        <h3 className='text-2xl font-semibold'>Building x tenants</h3>
        <form method="get">
          <label htmlFor="building" className='text-lg font-semibold'>Select building</label>
          <select name="building" id="building" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" >
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
            <option value="Four">Four</option>
            <option value="Five">Five</option>
          </select>
        </form>
      </div>
      <div className='bg-gray-200'>
        <div className='mt-2 rounded-md flex flex-col items-center overflow-y-scroll '>
          <div className='bg-white rounded-sm shadow-sm py-3 px-3 cursor-pointer my-2 mx-4 hover:shadow-md w-2/3'>
            <Link to={`/tenants/:id`}>
              <div className='flex justify-between mx-3'>
                <span>Tenant name</span>
                <span>phone</span>
                <span>house</span>
                <span>building</span>
                <span>status</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
