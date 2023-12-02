
import { revalidatePath } from 'next/cache';
import cloudinary from '@/lib/cloudinary';
import { Button, buttonVariants } from "@/components/ui/button"
import { uploadImageAction } from "../actions/categoriescrud";


cloudinary.config({
  cloud_name: 'dqojz5vft', 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function Home({ categoryId }: { categoryId: string }) {
  const { resources: sneakers } = await cloudinary.api.resources_by_tag('nextjs-server-actions-upload-sneakers', { context: true });

  async function create(formData: FormData) {
    'use server'
    const file = formData.get('image') as File;
    const id = formData.get(categoryId);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({
        tags: ['nextjs-server-actions-upload-sneakers']
      }, function (error, result) {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
        // console.log(result);

        const data = {categoryId, result }
        console.log(data);
       
        uploadImageAction(data);
        
      })
      .end(buffer);
    });
    
  
   
    revalidatePath(`/categories/${id}`)
  }
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add a New Image</h2>
      <form action={create} className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6">
        <div className="mb-6">
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
        <Button>Submit</Button>
      </form>
    </div>
  )
}

export default Home;