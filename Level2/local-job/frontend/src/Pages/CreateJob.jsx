import React ,{useState} from 'react'
import { useForm } from 'react-hook-form'
import CreatableSelect from "react-select/creatable";
// import '../App.css'

const CreateJob = () => {

  const [selectedOption , setSelectedOption] = useState(null);

    const {register ,
         handleSubmit ,
          formState : { errors },
          reset,
        } = useForm()

    const onSubmit = (data) => {
      data.skills = selectedOption;
      // console.log(data);
      fetch("http://localhost:4000/post-jobs" , {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then((result)=>{
        console.log(result);
        if(result.aclnowledged === true ){
          alert("Posted successfully")
        }
        reset();
      })
    }


    const options = [
          {value : "JavaScript" , label : "JavaScript"},
          {value : "C++" , label : "C++"},
          {value : "Java" , label : "Java"},
          {value : "ML" , label : "ML"},
          {value : "React" , label : "React"}
    ]


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      {/* form */}
      <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5' >

          <div className ='create-job-flex' >
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Title </label>
                    <input type="text" defaultValue={"web devloper"} {...register("jobTitle" )} className="create-job-input" />
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company </label>
                    <input type="text" placeholder="Ex. Google" {...register("companyName" )} className="create-job-input" />
            </div>
          </div>


          <div className ='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Minimum Salary </label>
                    <input type="text" placeholder='20000' {...register("minPrice" )} className="create-job-input" />
           
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Maximum Salary </label>
                    <input type="text" placeholder="30000" {...register("maxPrice" )} className="create-job-input" />
            </div>
          </div>


          <div className ='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>   Salary Type </label>
                  <select {...register("salaryType", {required : true})} className='create-job-input'>
                      <option value="">Choose Type</option>
                      <option value="Hourly">Hourly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Yearly">Yearly</option>          
                  </select>
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Location </label>
                    <input type="text" placeholder="Ex. Pune" {...register("jobLocation" )} className="create-job-input" />
            </div>
          </div>


          <div className ='create-job-flex'>
          <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Posting Date </label>
                    <input type="date" placeholder="Ex. 2023/11/03" {...register("postingDate" )} className="create-job-input" />
            </div>
            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Exprience Level </label>
                  <select {...register("experienceLevel", {required : true})} className='create-job-input'>
                      <option value="">Required Experience</option>
                      <option value="NoExperience">Fresher</option>
                      <option value="Internship">Internship</option>
                      <option value="workRemotly">Work remotly</option>          
                  </select>
            </div>
            
          </div>


          <div  >
             <label className ='block mb-2 text-lg'>Require Skill Set: </label>
             <CreatableSelect defaultValue={selectedOption}
             onChange={setSelectedOption} options={options}
             isMulti  className='create-job-input py-4' />
              
          </div>
            
          
          <div className ='create-job-flex'>
          <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Logo </label>
                    <input type="url" placeholder="company Logo url" {...register("companyLogo" )} className="create-job-input" />
            </div>
            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Eployment Type </label>
                  <select {...register("employmentType", {required : true})} className='create-job-input'>
                      <option value="">Required Experience</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Temorary">Temorary</option>          
                  </select>
            </div>
            
          </div>


          <div className='w-full'>
            <label className='block mb-2 text-lg'> Job Description</label>
            <textarea className='w-full pl-3 py-1.5 focus:outline-none' {...register("description")} rows={6} placeholder='job descriptions here' defaultValue={"Gleaming stars whisper tales in cosmic dance, echoing ancient dreams. Whimsical clouds cradle the moon, painting the night with ethereal hues. Time weaves secrets into the tapestry of existence."} />
          </div>


          <div className='w-full'>
            <label className='block mb-2 text-lg'>
              Job posted by 
            </label> 
            <input type="email"
              {...register("postedBy")}
               placeholder='your mail'
               className='create-job-input' />
          </div> 
          

           <input type="submit" className='my-5 py-2 px-5 border rounded text-white bg-blue' />
      
          
      </form>

      </div>
    </div>
  )
}

export default CreateJob


