import Link from "next/link";
import { Opportunities } from "../components/opp";

export default function Opportunity() {
    return(
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-blue-900 text-white rounded-lg p-8">
            <h1 className="text-3xl font-bold">Career Opportunities</h1>
            <p className="mt-2 text-gray-200">Browse the available career opportunities below:</p>
            </div>
           { Opportunities.map((opportunity)=> {
              const destination = `/opportunities/${opportunity.id}`;
              return(
              <div key={opportunity.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-blue-900">{opportunity.title}</h2>
                    <p className="mt-1 text-gray-700">{opportunity.company}</p>
                    <p className="text-sm text-gray-500">{opportunity.location}</p>
                    </div>
                    <Link href={destination} className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">View Details</Link>
              </div>  )}
            )}
                <Link href="/" className="inline-block mt-6 px-5 py-2 rounded-lg bg-gray-200 text-blue-900 hover:bg-white transition-colors">Back To Home</Link>
           
        </div>
    )
}