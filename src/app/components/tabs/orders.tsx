import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'

export default function OrdersTab() {
    const orders = [
        {
            id: 'dfhsdbgutut4i498588',
            serial_no: "123",
            createdAt: Date.now(),
            status: 'completed',
            total: '$100',
            items_number: '1'
          },
          {
            id: 'sdfhdfaduyu4565',
            serial_no: "256",
            createdAt: Date.now(),
            status: 'Processing',
            total: '$200',
            items_number: '3'
          },
          {
            id: 'dsfgdvfg4757bdsf',
            serial_no: "345",
            createdAt: Date.now(),
            status: 'Cancelled',
            total: '$100',
            items_number: '2'
          },
    ]
    let counter = 1
  return (
    <div>
    
    <div className="py-4">
    <h3 className="py-4 text-2xl fontsemibold" >Orders</h3>
    <hr className="py-4"/>
    <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ORDER.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  DATE
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  STATUS
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  TOTAL
                </th>
               
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map(order => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
              
                      <div className="text-sm text-gray-900">
                        {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
                        <p>{counter++}</p>
                      </div>
                     
                   
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                        {dayjs(order.createdAt).format('MMMM DD, YYYY')}
                        
                      </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.status}</div>
                
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="text-sm text-gray-900"
                    >
                      {order.total} for {order.items_number} item
                    </span>
                  </td>
                
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex justify-items-center items-center gap-2">
                      
                    <Link href={`/order/${order.id}`}  className="px-4 py-2 rounded bg-blue-400 text-white hover:text-indigo-900">
                      View
                    </Link>
                    
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}
