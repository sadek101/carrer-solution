import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
     const [jobs, setjobs]= useState([]);

     useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setjobs(data));
     })
    return (
        <div>
           <div className="text-center">
            <h2 className="text-4xl"> Featured Jobs</h2>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div> 
            <div className="grid grid-cols-2 gap-6 mt-6">
                {
                    jobs.map(job=> <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;