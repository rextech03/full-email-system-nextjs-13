import Link from 'next/link'
import React from 'react'
import { getCategoryPost, getPost } from '@/app/lib/tutorialscrud'
import { Button } from "@/components/ui/button"
import { authOptions } from "../../../../api/auth/[...nextauth]/route";
import { getServerSession } from 'next-auth/next';
import prisma from "../../../../lib/prisma";

export default async function page({params}) {
  // const { data: session, status } = useSession()
  const sessiondata = await getServerSession(authOptions);
  const id = params.tutorialId
  const data = await getPost(id);
  const post = data.post;

  const categoryId = post.sectionId;

  const categoryData = await getCategoryPost(categoryId);

  const categoryPost = categoryData.data;

  const categoryPostCount = categoryData.pagination.total;
//  console.log(categoryData)
  async function markComplete() {
    'use server'
    
    try {
      await prisma.post.update({ where: { id }, completed: sessiondata?.user?.name });
      return { post: postData };
    } catch (error) {
      return { error };
    }
  }
  
  return (
    <div className='container'>
      <div className="flex justify-items-center items-start">
        <div className="w-1/3 py-4">
          <div></div>
          <Link href='/tutorial' className='py-2 px-4 bg-black text-white rounded' >Back to Course</Link>
          <p className='py-4'>{post?.section.title}</p>
          <hr />
          {categoryPost.map((data) => (
            <div key={data.id}>
              <Link href={`/tutorial/complete/${data.id}`} className=''>
                {data.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="w-2/3 py-4">
          <div className="flex">
           <p> {post?.section.title} &gt; {post?.title} </p>
           </div>
           <hr/>
           <div>
            <p>Lesson 1 of {categoryPostCount}</p>
            <form action={markComplete}>
            <Button type='submit'>Complete</Button>
            </form>
            <p>{post?.title} </p>
            <p>{sessiondata?.user?.name} 
            {/* <Date dateString={post?.createdAt} /> */}
            </p>
            <video src={post?.courseVideo} controls />
          </div>
        </div>
      </div>
    </div>
  )
}
