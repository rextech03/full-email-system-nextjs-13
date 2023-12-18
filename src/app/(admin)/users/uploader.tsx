
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
// import { FaSpinner } from 'react-icons/fa6';
import UploadForm from './UploadForm';



 function Home({ userId }: { userId: string }) {
 
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add a New Image</h2>
     <UploadForm userId={userId} />
    </div>
  )
}

export default Home;