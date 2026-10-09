import {Poppins} from "next/font/google";

const font = Poppins({subsets:["latin"],weight:["400", "500"]});

export default function Dashboard(){
    const count = 3;
    return(
        <div>
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <p>Total Applications : {count}</p>
            <p  className={`${font.className} mt-4 space-y-3 text-base text-gray-700`}>keep going!</p>
        </div>
    )
}