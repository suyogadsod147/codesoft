import React from 'react'
import { Link } from 'react-router-dom';
import { FaCalendar, FaDollarSign, FaMapPin, FaClock } from 'react-icons/fa';
import '../App.css';

const Card = ({ data}) => {

    const {companyName ,jobTitle, companyLogo , minPrice , maxPrice , salaryType , jobLocation ,
         postingDate , experienceLevel , employmentType , description} = data;

  return (
    <section className='card'>
        <Link to='/' className='flex gap-4 flex-col sm:flex-row items-start' >
            <img src={companyLogo} alt="" />
            <div>
                <h4 className='text-primary mb-1'>{companyName}</h4>
                <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>

                <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                    <span className='flex items-center gap-2'><FaMapPin/>{jobLocation}</span>
                    <span className='flex items-center gap-2'><FaClock/>{employmentType}</span>
                    <span className='flex items-center gap-2'><FaDollarSign/>{maxPrice}-{minPrice}</span>
                    <span className='flex items-center gap-2'><FaCalendar/>{postingDate}</span>
                </div>
                <p className='text-base text-primary'>{description}</p>
            </div>
        </Link>
    </section>
  )
}

export default Card
