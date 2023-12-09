'use client'
import { uploadFile } from "@/app/actions";
import { toast } from 'react-hot-toast';
import { SubmitButton } from "@/app/SubmitButton";


const UploadForm = () => {

  async function wrapper(data) {
    const {type, message} = await uploadFile(data)
    if (type == 'success') toast.success(message)
    if (type == 'error') toast.error(message)
  }

  return (
    <form action={wrapper}>
      <input type="file" name="file" required accept="image/*" />
      <SubmitButton />
    </form>
  );
};

export default UploadForm;
