import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'

export default function AddOrder() {
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [passport_id, setPassportId] = useState(null);
  const [house_no, setHouseNo] = useState(null);
  const [building_id, setBuildingId] = useState(null);
  const [status, setStatus] = useState(null);

  const submitTenant = (e) => {
    e.preventDefault()
    fetch("http://localhost:3333/tenants/add", {
      name, email, phone, passport_id, house_no, building_id, status
    }).then(() => alert("Tenant added"));

    console.log({ name, email, phone, passport_id, house_no, building_id, status });

    navigate('/tenants')

  }

  return (
    <>
      <Navbar />
      <div className='flex items-center flex-col'>
        <h3 className='text-2xl font-semibold my-10'>Enter new tenant details</h3>
        <form action="http://localhost:3333/tenants/add" method="post" className="w-1/3">
          <div className="font-normal text-md">
            <div className="flex justify-between mb-3" >
              <label htmlFor="name">Enter name</label>
              <input type="text" name="name" id="name" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="flex justify-between mb-3" >
              <label htmlFor="email">Enter email</label>
              <input type="email" name="email" id="email" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="flex justify-between mb-3">
              <label htmlFor="phone">Enter phone number</label>
              <input type="tel" name="phone" id="phone" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="flex justify-between mb-3">
              <label htmlFor="id">Enter tenant ID no.</label>
              <input type="number" name="passport_id" id="id" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" onChange={(e) => setPassportId(e.target.value)} />
            </div>

            <div className="flex justify-between mb-3">
              <label htmlFor="house_no">Enter house number</label>
              <input type="text" name="house_no" id="house_no" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" onChange={(e) => setHouseNo(e.target.value)} />
            </div>

            <div className="flex justify-between mb-3">
              <label htmlFor="floor">Enter the building</label>
              <input type="number" name="building_id" id="building_id" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" onChange={(e) => setBuildingId(e.target.value)} />
            </div>

            <div className="flex justify-between mb-3">
              <label htmlFor="status">Select rent status</label>
              <select name="status" id="status" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" onChange={(e) => setStatus(e.target.value)}>
                <option value="pain">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div>

              <input type="submit" className="rounded-md shadow-sm text-white font-semibold bg-teal-500 px-4 py-1 cursor-pointer" onSubmit={submitTenant} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
