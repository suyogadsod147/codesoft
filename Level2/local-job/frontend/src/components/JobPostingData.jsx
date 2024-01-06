import React from 'react'
import Inputfield from './Inputfield';

const JobPostingData = ({handleChange}) => {

    const now = new Date();
    // console.log(now)
    const tweetyFourHoursAgo = new Date(now- 24*60*60*1000);
    
    const sevenDaysAgo = new Date(now- 7*24*60*60*1000);
    const thirtyDaysAgo = new Date(now- 30*24*60*60*1000);
    
    const twentyFourHoursAgoDate = tweetyFourHoursAgo.toISOString().slice(0,10)
    
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10)
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0,10)

  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Posting Date</h4>
      <div>
        <label className='sidebar-label-container' >
           <input type="radio" name="test" id="test" value=""
           onChange={handleChange} />
           <span className='checkmark'></span>All Time
        </label>
        <Inputfield handleChange={handleChange} value={twentyFourHoursAgoDate} title="Last 24 Hour" name="test"/>
        <Inputfield handleChange={handleChange} value={sevenDaysAgoDate} title="Last 7 days" name="test"/>
        <Inputfield handleChange={handleChange} value={thirtyDaysAgoDate} title="Last 30 days" name="test"/>
        
      </div>
    </div>
  )
}

export default JobPostingData
