import Link from "next/link";
export default function DashboardLayout({ children }) {
  return (
    <section className="max-w-4xl mx-auto p-4">
     <nav className="bg-blue-900 text-white p-4 rounded-lg flex gap-3">
        
          <Link href="/dashboard" className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">Dashboard</Link>
          <Link href="/dashboard/applications" className="px-4 py-2 rounded-lg bg-gray-200 text-blue-900 hover:bg-white transition-colors"> Applications</Link>
      </nav>
      <div className="bg-white mt-4 p-6 rounded-lg shadow-sm">{children}</div>
    </section>
  );
}