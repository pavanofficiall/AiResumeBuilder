import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Loader2, Plus } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { useState } from "react";
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import GlobalApi from '../../../service/GlobalApi';
  import { useUser } from '@clerk/clerk-react'
  import { Navigate, useNavigate } from 'react-router-dom'

// import { error } from 'console';

function AddResume() {

    const [openDialog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState();
    const user = useUser();
    const [loading,setLoading] = useState(false);
    const navigation=useNavigate();

    const onCreate =()=>{
      setLoading(true);
      const uuid = uuidv4();
      const data={
        data:{
          title:resumeTitle,
          resumeId:uuid,
          userEmail:user?.primaryEmailAddress?.emailAddress,
          userName:user?.fullName
        }
      }
      GlobalApi.CreateNewResume(data).then(resp=>{
        console.log(resp.data.data.documentId);
        if(resp){
          setLoading(false);
          navigation('/builder_dashboard/resume/'+resp.data.data.documentId+"/edit");
        }
      },(error)=>{
        setLoading(false);
      })
    }
  return (

    <div >
<div className='p-14 py-24 border 
        items-center flex 
        justify-center bg-secondary
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed' 
        onClick={() => setOpenDialog(true)}
        >
<Plus/>
</div>    
<Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Crete New Resume</DialogTitle>
      <DialogDescription>
        <p>Add Title For Your New Resume</p>
      <Input className='my-2'
       placeholder='Ex.frontend Devloper'
       onChange={(e) => setResumeTitle(e.target.value)}
       />
        <div className='flex justify-end gap-3'>
            <Button onClick={()=> setOpenDialog(false)} variant='ghost'>Cancel</Button>
            <Button onClick={()=> onCreate()}
              disabled={!resumeTitle|| loading}  
              >
                {loading?
              <Loader2 className='animate-spin'/> : 'Create'
              
                }</Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume