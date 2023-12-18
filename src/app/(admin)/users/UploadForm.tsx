"use client";
import { Button } from '@/components/ui/button';
import React from 'react';
import { redirect } from 'next/navigation'

import { editImage } from '@/app/actions/userscrud'
import { SaveButton } from '@/app/components/SaveButton';

function UploadForm({ userId }: { userId: string }) {
  return (
    <form action={
        async formData=>{
            await editImage(formData)
            // redirect('/auth/signout')
            console.log("editImage");
        }
    } 
    className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6">
    <div className="mb-6">
    <input
        id="userId"
        className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        type="hidden"
        name="userId"
        value={userId}
      />
      <label htmlFor="image" className="block font-semibold text-sm mb-2">
        Select an Image to Upload
      </label>
      <input
        id="image"
        className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        type="file"
        name="image"
        required
      />
    </div>
    <SaveButton />
    {/* <Button>Submit</Button> */}
  </form>
  )
}

export default UploadForm