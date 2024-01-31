import { Link } from 'react-router-dom';
import icon from '../../assets/icons/location2.png'
import money from '../../assets/icons/money.png'

const Job = ({job}) => {
    const{id,logo , job_title, company_name, remote_or_onsite,location, job_type, salary} = job
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="flex gap-14 mt-4">
    <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
    <button className="btn btn-outline btn-primary">{job_type}</button>
    </div>
    <div className="flex justify-between mt-4">
      <div className='flex'>
        <img src={icon} alt="" />
        <p>{location}</p>
      </div>
      <div className='flex'>
        <img src={money} alt="" />
        <p>{salary}</p>
      </div>
       
       
    </div>
    <div className="card-actions mt-4">
      <Link to ={`/job/${id}`}>
      <button className="btn btn-primary">View details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;