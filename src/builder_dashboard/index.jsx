import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
  const { user, isLoaded } = useUser(); // Check if user data is loaded
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    if (isLoaded && user) {
      console.log("User Object:", user); // Debugging
      console.log("User Email:", user?.primaryEmailAddress?.emailAddress); // Debugging
      GetResumesList();
    }
  }, [isLoaded, user]);
  
  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then((resp) => {
        console.log("Fetched Resumes:", resp.data.data); // Debugging
        setResumeList(resp.data.data);
      })
      .catch((error) => console.error("Error fetching resumes:", error));
  };

  console.log("User Object:", user); // Debugging
  

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className='grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      '>
        <AddResume />
        {resumeList.length > 0 ? resumeList.map((resume, index) => (
          <ResumeCardItem resume={resume} key={index} />
        )) :
          [1, 2, 3, 4].map((item, index) => (
            <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard;