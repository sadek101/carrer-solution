import { useLoaderData, useParams } from "react-router-dom";
import doller from '../../assets/icons/money.png'
import calendar from "../../assets/icons/calendar.png"
import phone from '../../assets/icons/phone.png'
import email from '../../assets/icons/email.png'
import location from '../../assets/icons/location2.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utilty/localstorge";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idnt = parseInt(id);
    const job = jobs.find (job => job.id == idnt)
    console.log(job);

const handleApplyJob = () => {
   saveJobApplication(id);
    toast("you have applied job succusfully");
}

    return (
        <div>
            <h2>job details of  {id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 "> 
                <h2 className="my-12"><span className="font-bold ">Job Description:</span> {job.job_description}</h2>
                <h2 className="my-12"><span className="font-bold ">job responsibility:</span> {job.job_responsibility}</h2>
                <h2 className="font-bold my-8">educational requirements</h2>
                <h2>{job.educational_requirements}</h2>
                <h2 className="font-bold my-4">experiences: </h2>
                <h2 className="my-8">{job.experiences}</h2>
                </div>
                <div className="border">
                    <h2 className="text-3xl">Job Details</h2>
                    <div className="flex items-center mt-8">
                        <img src={doller} alt="" />
                    <h2><span className="font-bold"> Salary:</span> {job.salary} (per month)</h2>
                    </div>
                    <div className="flex items-center mt-8">
                        <img src={calendar} alt="" />
                    <h2><span className="font-bold"> Job title:</span> {job.job_title}</h2>
                    </div>
                    
                    <h2 className="text-3xl my-12">Contact Information</h2>

                    <div className="flex items-center my-8">
                        <img src={phone} alt="" />
                        <h2> <span className="font-bold">Phone: </span> {job.contact_information.phone}</h2>
                    </div>
                    <div className="flex items-center my-8">
                        <img src={email} alt="" />
                        <h2> <span className="font-bold">Email:</span> {job.contact_information.email}</h2>
                    </div>
                    <div className="flex items-center my-8">
                        <img src={location} alt="" />
                        <h2> <span className="font-bold">Address</span> {job.contact_information.address}</h2>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;