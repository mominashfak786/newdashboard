import React from 'react'

const Commission = () => {
  return (
      <>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-4 ml-3 mr-3 mt-5">
  <div className="flex mb-4">
    <div className="w-1/3">
      <p className="font-medium">Select Category:</p>
    </div>
    <div className="w-2/3">
      <select className="form-select block w-full py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <option>--Select--</option>
        <option>Data</option>
        <option>Data</option>
        <option>Data</option>
        <option>Data</option>
      </select>
    </div>
  </div>
  <div className="overflow-x-auto">
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr className="text-left">
          <th className="px-4 py-2 text-gray-600 font-medium">Date</th>
          <th className="px-4 py-2 text-gray-600 font-medium">Name of the lead</th>
          <th className="px-4 py-2 text-gray-600 font-medium">Solution Type</th>
          <th className="px-4 py-2 text-gray-600 font-medium">Commission Amount</th>
          <th className="px-4 py-2 text-gray-600 font-medium">Payment Mode</th>
       
              </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">02/01/2022</td>
          <td className="border px-4 py-2">Mr. Avinash Sharma</td>
          <td className="border px-4 py-2">Full Solution Package</td>
             
                <td className="border px-4 py-2">SGD XXXXX</td>
          <td className="border px-4 py-2">Bank Transfer</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">01/05/2022</td>
          <td className="border px-4 py-2">Mr. Prasad Tetme</td>
          <td className="border px-4 py-2">Energy Audit</td>
              
                <td className="border px-4 py-2">SGD XXXXX</td>
          <td className="border px-4 py-2">Bank Transfer</td>
              </tr>
              <tr>
          <td className="border px-4 py-2">01/02/2021</td>
          <td className="border px-4 py-2">Mr. Avinash Sharma</td>
          <td className="border px-4 py-2">Full Solution Package</td>
               
                <td className="border px-4 py-2">SGD XXXXX</td>
          <td className="border px-4 py-2">Bank Transfer</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">01/02/2023</td>
          <td className="border px-4 py-2">Mr. Prasad Tetme</td>
          <td className="border px-4 py-2">Energy Audit</td>
             
                <td className="border px-4 py-2">SGD XXXXX</td>
          <td className="border px-4 py-2">Bank Transfer</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

          
      </>
  )
}

export default Commission;