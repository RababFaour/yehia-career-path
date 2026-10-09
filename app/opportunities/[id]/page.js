import {Suspense} from "react";
import Link from "next/link";
import   { Opportunities } from "../../components/opp";

export function generateStaticParams() {
    return Opportunities.map((opportunity) => ({
        id: opportunity.id,
    }));
}
export default async function OpportunityPage({params}) {
    const { id } = await params;
    const selectedOpportunity = Opportunities.find(
  (opportunity) => opportunity.id === id );
  if (!selectedOpportunity) {
    return (
    <main className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
       <h1 className="text-2xl font-bold text-blue-900">Opportunity not found</h1>
         <Link href="/opportunities" className=" inline-block mt-6 px-5 py-2  px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">Back To Opportunities</Link>
        </div>
        </main>);
  }
  return(
  <main className="max-w-4xl mx-auto p-4">
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
       <h1 className="text-3xl font-bold text-blue-900">{selectedOpportunity.title}</h1>
       <p className="mt-2 text-gray-600">{selectedOpportunity.company}</p>
    </section>

    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
        <div className="flex flex-wrap gap-6">
            <div>
                <p className="text-sm text-gray-500">Company</p>
                <p className="font-medium text-gray-800">{selectedOpportunity.company}</p>
            </div>
            <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-800">{selectedOpportunity.location}</p>
            </div>
        </div>
        <h2 className="mt-6 text-xl font-semibold text-blue-900">Description</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">{selectedOpportunity.description}</p>
    </section>
    <div>
      <Link href="/opportunities" className="inline-block mt-6 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">Back To Opportunities</Link>
  </div>
  </main>)
}