import { applications } from "../../components/app";
import {Poppins} from "next/font/google";

const writing = Poppins({subsets:["latin"],weight:["400", "500"]});


export default function Applications() {
  return (
    <div>
        <h2 className="text-2xl font-bold">Applications</h2>
        {applications.map((application) => (
            <div key={application.id}>
                <h3  className={`${writing.className} mt-4 space-y-3 text-base text-gray-700`}>{application.title}</h3>
                <p>Company: {application.company}</p>
                <p>Status: {application.status}</p>
                <br/>
            </div>
        ))} 
    </div>
     
  );
}