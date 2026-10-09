import Link from "next/link";
import {Poppins} from "next/font/google";

const handwriting= Poppins({subsets:["latin"],weight:["400", "500"]});

export default function Plan(){
    return(
        <div className="checkboxes max-w-4xl mx-auto p-4">
           <div className="bg-blue-900 text-white rounded-lg p-8">
            <h3 className="text-3xl font-bold">Yehia's 2-Month Career Plan</h3>
            <p className="mt-2 text-gray-200">Tick each task as you complete it.</p>
            </div>

           <section className="phase bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
            <h4 className="text-2xl font-semibold text-blue-900">1-Prepare</h4>
            <p className="mt-2 text-gray-500 mt-1">Get ready forthe job search</p>
            <ul className={`${handwriting.className} mt-4 space-y-3 text-base text-gray-700`}>
                <li><label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 cursor-pointer"><input type="checkbox" className="h-5 w-5 accent-green-600" />Improve CV</label></li>
                <li><label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 cursor-pointer"><input type="checkbox" className="h-5 w-5 accent-green-600" />Organize Portfolio</label></li>
                <li><label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 cursor-pointer"><input type="checkbox" className="h-5 w-5 accent-green-600" />Choose Target Role</label></li>
            </ul>
            </section>

            <section className="phase bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
            <h4 className="text-2xl font-semibold text-blue-900">2-Practice</h4>
            <p className="mt-2 text-gray-500">Enhance your skills and knowledge</p>
            <ul className={`${handwriting.className} mt-4 space-y-3 text-base text-gray-700`}>
                <li><label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 cursor-pointer"><input type="checkbox" className="h-5 w-5 accent-green-600" />Strengthen Technical Skills</label></li>
                <li><label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 cursor-pointer"><input type="checkbox" className="h-5 w-5 accent-green-600" />Prepare Answers to Common Interview Questions</label></li>
            </ul>
            </section>

            <section className="phase bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
            <h4 className="text-2xl font-semibold text-blue-900">3-Apply</h4>
            <p className="mt-2 text-gray-500">Start applying for jobs</p>
            <ul className={`${handwriting.className} mt-4 space-y-3 text-base text-gray-700`}>
                <li><label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 cursor-pointer"><input type="checkbox" className="h-5 w-5 accent-green-600" />Explore Suitable Opportunities</label></li>
                <li><label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 cursor-pointer"><input type="checkbox" className="h-5 w-5 accent-green-600" />Submit Applications</label></li>
                <li><label className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 cursor-pointer"><input type="checkbox" className="h-5 w-5 accent-green-600" />Follow Up</label></li>
            </ul>
            </section>
            <br/>
            <Link href="/" className="inline-block mt-4 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">Back To Home</Link>

        </div>
    )
}