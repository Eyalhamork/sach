import React, { useState } from 'react';
import { FileText, CheckCircle, XCircle, Search, Mail, Clock, CalendarIcon } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import '../Dashboard/Dashboard.css';

const AdminQuotes = () => {
    const [quotes] = useState([
        { id: 'Q-2026-891', client: 'Liberia Mining Co.', contact: 'procurement@lmc.lr', type: 'Haulage', from: 'Monrovia', to: 'Yekepa', status: 'Pending', date: 'Feb 20, 2026', reqDate: 'Mar 01, 2026' },
        { id: 'Q-2026-892', client: 'Acme Logistics', contact: 'john@acme.com', type: 'Freight', from: 'Freeport', to: 'Buchanan', status: 'Pending', date: 'Feb 19, 2026', reqDate: 'Feb 25, 2026' },
        { id: 'Q-2026-885', client: 'Global Tech', contact: 'shipping@gtech.com', type: 'Distribution', from: 'RIA', to: 'Monrovia', status: 'Responded', date: 'Feb 18, 2026', reqDate: 'Feb 22, 2026' },
        { id: 'Q-2026-880', client: 'Local Farms Ltd', contact: 'supply@localfarms.lr', type: 'Cargo', from: 'Gbarnga', to: 'Monrovia', status: 'Accepted', date: 'Feb 15, 2026', reqDate: 'Feb 20, 2026' },
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Pending': return 'status-badge status-pending';       // orange
            case 'Responded': return 'status-badge status-intransit';   // blue
            case 'Accepted': return 'status-badge status-delivered';    // green
            case 'Rejected': return 'status-badge bg-red-100 text-red-700'; // red
            default: return 'status-badge bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="dashboard-wrapper">
            <AdminSidebar />

            <main className="dashboard-main bg-slate-50">
                <header className="dashboard-topbar backdrop-blur-sm bg-white/90 sticky top-0 z-10 flex justify-between items-center">
                    <div>
                        <h1 className="page-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">Logistics Quotes</h1>
                        <p className="page-subtitle">Manage client requests for freight, haulage, and distribution.</p>
                    </div>
                </header>

                <div className="dashboard-content">
                    {/* Filter Bar */}
                    <div className="flex gap-4 mb-6">
                        <div className="flex bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden flex-1">
                            <span className="p-3 text-gray-400 bg-gray-50 border-r border-gray-100"><Search size={18} /></span>
                            <input
                                type="text"
                                placeholder="Search quote ID, Client, or Location..."
                                className="px-4 py-2 w-full outline-none text-sm text-gray-700"
                            />
                        </div>
                        <select className="bg-white shadow-sm border border-gray-100 rounded-lg px-4 py-2 text-sm text-gray-700 outline-none hover:bg-gray-50 cursor-pointer">
                            <option>All Statuses</option>
                            <option>Pending</option>
                            <option>Responded</option>
                            <option>Accepted</option>
                        </select>
                        <select className="bg-white shadow-sm border border-gray-100 rounded-lg px-4 py-2 text-sm text-gray-700 outline-none hover:bg-gray-50 cursor-pointer">
                            <option>All Types</option>
                            <option>Freight</option>
                            <option>Haulage</option>
                            <option>Distribution</option>
                            <option>Cargo</option>
                        </select>
                    </div>

                    <div className="data-table-container">
                        <div className="data-table-header">
                            <h2>Review Queue</h2>
                            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">2 Needs Attention</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Quote ID</th>
                                        <th>Client Details</th>
                                        <th>Service Details</th>
                                        <th>Route</th>
                                        <th>Timeline</th>
                                        <th>Status</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {quotes.map((quote) => (
                                        <tr key={quote.id} className="cursor-pointer hover:bg-gray-50">
                                            <td className="font-bold text-gray-800 text-sm">{quote.id}</td>
                                            <td>
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-primary">{quote.client}</span>
                                                    <span className="flex items-center text-xs text-gray-500 mt-1">
                                                        <Mail size={12} className="mr-1" /> {quote.contact}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold uppercase overflow-hidden whitespace-nowrap">
                                                    {quote.type}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="flex flex-col text-sm text-gray-600">
                                                    <span className="font-semibold">{quote.from}</span>
                                                    <span className="text-xs text-gray-400">to {quote.to}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-col">
                                                    <span className="flex items-center text-xs text-gray-500 mb-1">
                                                        <Clock size={12} className="mr-1" /> Requested {quote.date}
                                                    </span>
                                                    <span className="flex items-center text-xs font-semibold text-gray-700">
                                                        <CalendarIcon size={12} className="mr-1" /> For {quote.reqDate}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={getStatusStyle(quote.status)}>
                                                    {quote.status}
                                                </span>
                                            </td>
                                            <td className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    {quote.status === 'Pending' && (
                                                        <button className="flex items-center text-xs px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold rounded-lg transition-colors border border-blue-200">
                                                            Respond
                                                        </button>
                                                    )}
                                                    <button className="p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-colors border border-transparent">
                                                        <FileText size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminQuotes;
