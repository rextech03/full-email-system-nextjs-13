import { Button } from '@/components/ui/button'
import React from 'react'

export default function PaymentsTab() {
  return (
    <div>
        <div className="border-2 w-full py-4">
            <p>Na saved payments method found.</p>
        </div>
        <Button className='bg-blue-500' >Add Payment Method</Button>
    </div>
  )
}
