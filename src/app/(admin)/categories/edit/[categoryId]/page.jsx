"use client";
import { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios";

export default function Page({ params }) {
  const  categoryId  = params.categoryId;
  // console.log(categoryId);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [featuredImage, setFeaturedImage] = useState('');
  const [grouperId, setGrouperId] = useState('');
  const [message, setMessage] = useState('')
  const [users, setUsers] = useState([]);

  const getPostCategory = async () => {
    
    
    try {
    const res = await axios.get(
        `https://www.phoenixcreedacademy.com/api/categories` 
    );
    setUsers(res.data.users);
    } catch (error) {
        console.log(error);
    }
};
  
    useEffect(() => {
      getPostCategory();
    }, [categoryId]);
  
      const handleSubmit = (event) => {
        event.preventDefault();

      try {
        const response =  fetch('https://www.phoenixcreedacademy.com/api/categories', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({categoryId, title, content, published, grouperId }),
        });
        // const { message } =  res.JSON()
        // alert(message);
      } catch (error) {
        console.error(error);
      }
    };

    const handleChange = (event) => {
      setPublished(event.target.checked);
    }

  return (
    <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg"></div>
    <form onSubmit={handleSubmit} >
      
      <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">
                  Edit Category
                </CardTitle>
                <CardDescription className="text-center">
                  Edit A Category
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">   
      <div className="form-control sm:max-w-sm">
        <Label className="label" htmlFor="name">
          <span className="label-text">Title</span>
        </Label>
        <Input
          type="text"
          className="input input-bordered sm:max-w-sm"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </CardContent>
    <CardContent className="grid gap-4">
      <div className="form-control sm:max-w-sm">
        <Label className="label" htmlFor="content">
          <span className="label-text">Content</span>
        </Label>
        <Textarea name="content" id="content" cols="30" rows="10" 
        className="input input-bordered sm:max-w-sm"
        onChange={(e) =>setContent(e.target.value)} 
        />
      </div>
      </CardContent>
      <CardContent className="grid gap-4 w-[180px]">
      <div className=" flex justify-items-end items-center">
      
       <input
          type="checkbox"
          name="agreement"
          onChange={handleChange}
        />

      <label
        htmlFor="published"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 px-2"
      >Published</label>
       
        
      </div>
      </CardContent>
   
  
    <CardContent className="grid gap-4">
      <div className="sm:min-w-md">
        <Label className="w-[180px]" htmlFor="sectionId">
          <span className="label-text">Relate a User</span>
        </Label>

        <div>
      <select 
      className="peer h-full w-full rounded border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      value={grouperId} 
      onChange={(event) => setGrouperId(event.target.value)}>
        {users.map((option, index) => (
          <option key={index} value={option.id}>{option.name}</option>
        ))}
      </select>

    </div>
        
      </div>
      </CardContent>
       <CardFooter className="flex flex-col">
      <div className="form-control sm:max-w-sm my-6">
        <Button
          className="w-full"
          type="submit"
         
        >
          Save
        </Button>
      </div>
      </CardFooter>
      <p aria-live="polite" className="sr-only">
        {message}
      </p>
      </Card>
              
    </form>
    </div>
    
  );
};


