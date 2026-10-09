import Link from "next/link";
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <section className="bg-blue-900 text-white rounded-lg p-8">
      <h1 className="text-3xl font-bold">Yehia's Career Path</h1>
      <p className="mt-3 text-gray-200">Welcome to my career path page!</p>
      <p className="mt-1 text-gray-200">Here, you can learn about my journey and the experiences that have shaped my career.</p>
      <br/>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/plan" className="px-5 py-2 rounded-lg bg-gray-200 text-blue-900 hover:bg-white transition-colors">View My Plan</Link>
        <Link href="/opportunities" className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">View Opportunities</Link>
      </div>
      </section>
    </main>
  );
}
