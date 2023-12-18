import { redirect } from "next/navigation";
import prisma from "./prisma";

type postData = {

  title: string;
  content: string | null;
  published: boolean;
  // featuredImage: string ;
  // courseVideo: string| null;
  finalCourse: boolean| null;
  authorId: string;
  sectionId: string;

  }

  type updatePostData = {
    title: string;
    content: string | null;
    published: boolean;
    // featuredImage: string | null;
    finalCourse: boolean| null;
    authorId: string;
  }

  type uploadData = {
    id: string,
    featuredImage: string | null;
  }

  type uploadVideo = {
    id: string,
    courseVideo: string | null;
  }
  

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title:true,
        content: true,
        published: true,
        courseVideo: true,
        featuredImage: true,
        finalCourse: true,
        section:{
              
            },
            author: {
              
            },
            updatedAt: true,
   },
   orderBy: {
    createdAt: 'desc',
  },
  });
  
    return { posts };
  } catch (error) {
    return { error };
  }
};


export const getPost = async (id: string) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        section: {},
        author: {}
      },
    });
    // console.log(post);
    return { post };
  } catch (error) {
    return { error };
  }
};

export const getCategoryPost = async (id: string | undefined) => {
  try {
    const [post, count] = await prisma.$transaction([
      prisma.post.findMany( {
        where: {
          sectionId: id, 
        },
        include: {
          section: {},
          author: {}
        },
      }),
    prisma.post.count({ where: {
      sectionId: id, 
    }, })
    ])
    
    
    // console.log(count);
    return { 
      pagination: {
        total: count
      },
      data: post
    };
  } catch (error) {
    return { error };
  }
};

export const createPost = async (postData: postData) => {
  try {
    const newPost = await prisma.post.create({ data: postData });
    return { post: newPost };
  } catch (error) {
    return { error };
  }
};

export const updatePost = async (id:string, postData:updatePostData) => {
  try {
    await prisma.post.update({ where: { id }, data: postData });
    return { post: postData };
  } catch (error) {
    return { error };
  }
};

export const deletePost = async (id:string) => {
  try {
    await prisma.post.delete({ where: { id } });
    return redirect("/posts");
  } catch (error) {
    return { error };
  }
};

export const uploadImage = async ( uploadData:uploadData) => {
  try {
    await prisma.post.update({ where: { id: uploadData.id }, data: uploadData });
    return { post: uploadData };
  } catch (error) {
    return { error };
  }
};

export const uploadVideo = async ( uploadVideo:uploadVideo) => {
  try {
    await prisma.post.update({ where: { id: uploadVideo.id }, data: uploadVideo });
    return { post: uploadVideo };
  } catch (error) {
    return { error };
  }
};