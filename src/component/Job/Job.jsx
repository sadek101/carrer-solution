

const Job = ({job}) => {
    const{logo , job_title, company_name, remote_or_onsite,location, job_type, salary} = job
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="flex gap-14">
    <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
    <button className="btn btn-outline btn-primary">{job_type}</button>
    </div>
    <div className="flex gap-3">
        <p>{location}</p>
        <p>{salary}</p>
    </div>
    <div className="card-actionsjustify-end">
      <button className="btn btn-error">View details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;