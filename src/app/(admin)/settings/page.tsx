import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EditProfile from '@/app/components/settings_tab/EditProfile'
import Billing from '@/app/components/settings_tab/Billing'
import Shipping from '@/app/components/settings_tab/Shipping'
import Password from '@/app/components/settings_tab/Password'


export default function page() {
    
  return (
    <div className="min-h-screen w-full">

<Tabs defaultValue="account" className="m-8  ">
  <TabsList className="w-full justify-between px-8 rounded-lg bg-gray-200">
    
    <TabsTrigger value="account"  className="py-2">Edit Profile</TabsTrigger>
    <TabsTrigger value="billing">Edit Billing Address</TabsTrigger>
    <TabsTrigger value="shipping">Edit Shipping Address</TabsTrigger>
    <TabsTrigger value="password">Change Password</TabsTrigger>
    
  </TabsList>
  <TabsContent value="account"><EditProfile /></TabsContent>
  <TabsContent value="billing"><Billing /></TabsContent>
  <TabsContent value="shipping"><Shipping /></TabsContent>
  <TabsContent value="password"><Password /></TabsContent>
</Tabs>
</div>
  )
}
