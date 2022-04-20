import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex justify-between p-3 py-4 bg-spartecblue text-lg font-medium px-16">
      <div className='text-xl text-white'>Spartec Consortium</div>
      <div>
        <ul className="flex space-x-4 text-white text-base">
          <li className="border-b-4 border-gold">Orders</li>
          <li>Invoices</li>
          <li>Create LPO</li>
        </ul>
      </div>
    </nav>
  )
}
