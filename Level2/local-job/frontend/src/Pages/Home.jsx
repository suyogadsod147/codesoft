import React, {useState , useEffect} from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card' 
import Jobs from './Jobs'
import Sidebar from '../components/Sidebar'


const Home = () => {
    const [selectedCategory , setSelectedCaegory] = useState("")
    const [jobs , setJobs] = useState([]);

    const [isLoading , setIsLoading] = useState(true)
    const [currentPage , setCurrentPage] = useState(1);
    const itemsPerPage = 6;



    useEffect(()=>{
      setIsLoading(true);
        fetch("http://localhost:4000/all-jobs").then((res)=>res.json()).then(data =>{
            // console.log(data)
            setJobs(data)
            setIsLoading(false)
        })
    } , [])

    const [query , setQuery] = useState("");
    const handleInputChange = (event)=>{
        setQuery(event.target.value)
    }

    // filter by job title
    const filterItems = jobs.filter( (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1  )
    // console.log(filterItems)

    // radio filter
    const handleChange = (event)=>{
      setSelectedCaegory(event.target.value)
    }

    // button filter 
    const handleClick = (event)=>{
      setSelectedCaegory(event.target.value)
    }

    const calculatePageRange = ()=>{
      const startIndex = (currentPage-1) * itemsPerPage; 
      const endIndex = startIndex + itemsPerPage;
      return {startIndex , endIndex }
    }


    const nextPage = ()=>{
      if(currentPage < Math.ceil(filterItems.length/itemsPerPage)){
        setCurrentPage(currentPage+1)
      }
    }

    const prevPage = ()=>{
      if(currentPage > 1){
        setCurrentPage(currentPage-1)
      }
    }


    const filteredData = (jobs ,selected ,query)=>{

      let filterdJobs = jobs;

      if(query){
        filterdJobs = filterItems;
      }

      if(selected){
         filterdJobs = filterdJobs.filter(({jobLocation , maxPrice ,  salaryType, postingDate,
          employmentType })=>
           postingDate >= selected||
           jobLocation.toLowerCase() === selected.toLowerCase()||
           parseInt(maxPrice) <= parseInt(selected) || 
           salaryType.toLowerCase() === selected.toLowerCase()||
           employmentType.toLowerCase() === selected.toLowerCase()
          
          ) 
        console.log(filterdJobs);
      }

      const {startIndex , endIndex } = calculatePageRange();
      filterdJobs = filterdJobs.slice(startIndex, endIndex)

      return filterdJobs.map((data , i)=><Card key={i} data={data}/>)

    }

   
    const result = filteredData(jobs , selectedCategory , query);



  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>

      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

          {/* left side */}
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange}  handleClick={handleClick}/>
        </div>


        {/* middle */}
        <div className='col-span-2 bg-white p-4 rounded-sm'>
        {
          isLoading?(<p className='font-medium '>Loading....</p>) : result.length > 0 ? (
            <Jobs result={result}/>) : <>
            <h3 className='text-lg font-bold mb-2' >{result.length} Jobs</h3>
            <p>No data found</p>
          </>
        }

        {/* pagination */}
        {
          result.length > 0 ? (
            <div className='flex justify-center mt-4 space-x-8'>
              <button onClick={prevPage} disabled={currentPage===1}  className='hover:underline'>Priveous</button>
              
              <span className='mx-2' >Page {currentPage} of {Math.ceil(filterItems.length / itemsPerPage)}</span>
              <button onClick={nextPage} disabled ={currentPage === Math.ceil(filterItems.length / itemsPerPage)} className='hover:underline' >Next</button>
            </div>
          ) : ""
        }

        </div>


        {/* right */}
        <div className='bg-white p-4 rounded'>right</div>
        
      </div>
    </div>
  )
}

export default Home

