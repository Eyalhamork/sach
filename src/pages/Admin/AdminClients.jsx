import React, { useState } from 'react';
import { Search, Mail, Phone, MapPin, Building, Activity, MoreVertical, Plus, Users, Briefcase, Award, Filter, ArrowUp } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import '../Dashboard/Dashboard.css';

const AdminClients = () => {
    const [clients] = useState([
        { id: 'C-001', name: 'Liberia Mining Co.', type: 'Corporate', email: 'procurement@lmc.lr', phone: '+231 77 000 1111', location: 'Yekepa, Nimba', activeBookings: 3, totalSpent: '$15,400', status: 'Active' },
        { id: 'C-002', name: 'Acme Logistics', type: 'B2B', email: 'john@acme.com', phone: '+231 88 111 2222', location: 'Freeport, Monrovia', activeBookings: 5, totalSpent: '$42,000', status: 'Active' },
        { id: 'C-003', name: 'John Doe', type: 'Individual', email: 'johndoe@gmail.com', phone: '+231 77 555 6666', location: 'Sinkor, Monrovia', activeBookings: 0, totalSpent: '$450', status: 'Inactive' },
        { id: 'C-004', name: 'Global Tech', type: 'Corporate', email: 'shipping@gtech.com', phone: '+231 88 999 8888', location: 'Congo Town', activeBookings: 1, totalSpent: '$8,200', status: 'Active' },
        { id: 'C-005', name: 'Tourism Grp', type: 'Agency', email: 'tours@group.lr', phone: '+231 77 444 3333', location: 'Mamba Point', activeBookings: 2, totalSpent: '$5,600', status: 'Active' },
    ]);

    const getStatusStyle = (status) => {
        return status === 'Active' ? 'status-badge status-delivered' : 'status-badge bg-gray-100 text-gray-500';
    };

    return (
        <div className="dashboard-wrapper">
            <AdminSidebar />

            <main className="dashboard-main bg-slate-50">
                <header className="dashboard-topbar backdrop-blur-sm bg-white/90 sticky top-0 z-10 flex justify-between items-center">
                    <div>
                        <h1 className="page-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">Clients CRM</h1>
                        <p className="page-subtitle">Manage customer profiles and historical data</p>
                    </div>
                    <button className="btn btn-primary flex items-center shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5">
                        <Plus size={18} className="mr-2" /> Add Client
                    </button>
                </header>

                <div className="dashboard-content">
                    {/* CRM KPIs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-gray-500 text-sm font-medium">Total Active Clients</span>
                                <div className="p-2 bg-green-50 rounded-lg text-green-600">
                                    <Users size={20} />
                                </div>
                            </div>
                            <div className="flex items-end justify-between mt-auto">
                                <h3 className="text-3xl font-bold text-gray-800">142</h3>
                                <span className="text-green-500 flex items-center text-sm font-bold bg-green-50 px-2 py-1 rounded-full">
                                    <ArrowUp size={14} className="mr-1" /> 8 this month
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-gray-500 text-sm font-medium">Corporate Accounts</span>
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                    <Briefcase size={20} />
                                </div>
                            </div>
                            <div className="flex items-end justify-between mt-auto">
                                <h3 className="text-3xl font-bold text-gray-800">35</h3>
                                <span className="text-blue-500 text-sm font-bold bg-blue-50 px-2 py-1 rounded-full">
                                    65% of revenue
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-gray-500 text-sm font-medium">Client Retention</span>
                                <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
                                    <Award size={20} />
                                </div>
                            </div>
                            <div className="flex items-end justify-between mt-auto">
                                <h3 className="text-3xl font-bold text-gray-800">92%</h3>
                                <span className="text-green-500 flex items-center text-sm font-bold bg-green-50 px-2 py-1 rounded-full">
                                    Excellent
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Filters & Search */}
                    <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 w-1/3 border border-gray-200">
                            <Search size={18} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search by name, email, or ID..."
                                className="bg-transparent border-none outline-none w-full text-sm text-gray-700"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                                <Filter size={16} /> Filter Types
                            </button>
                        </div>
                    </div>

                    <div className="data-table-container">
                        <div className="data-table-header">
                            <h2>Client Directory</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Client Name / ID</th>
                                        <th>Contact Info</th>
                                        <th>Details</th>
                                        <th>Activity</th>
                                        <th>Status</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {clients.map((client) => (
                                        <tr key={client.id} className="cursor-pointer hover:bg-gray-50">
                                            <td>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-gray-800">{client.name}</span>
                                                    <span className="text-xs text-gray-400">{client.id}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-col space-y-1">
                                                    <span className="flex items-center text-xs text-gray-600">
                                                        <Mail size={12} className="mr-1.5 text-gray-400" /> {client.email}
                                                    </span>
                                                    <span className="flex items-center text-xs text-gray-600">
                                                        <Phone size={12} className="mr-1.5 text-gray-400" /> {client.phone}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-col space-y-1">
                                                    <span className="flex items-center text-xs text-gray-600">
                                                        <Building size={12} className="mr-1.5 text-gray-400" /> {client.type}
                                                    </span>
                                                    <span className="flex items-center text-xs text-gray-600">
                                                        <MapPin size={12} className="mr-1.5 text-gray-400" /> {client.location}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-gray-800 text-sm mb-1">{client.totalSpent}
                                                        <span className="text-xs font-normal text-gray-500 ml-1">Spent</span>
                                                    </span>
                                                    {client.activeBookings > 0 ? (
                                                        <span className="text-xs font-bold text-blue-600 flex items-center">
                                                            <Activity size={12} className="mr-1" /> {client.activeBookings} Active
                                                        </span>
                                                    ) : (
                                                        <span className="text-xs text-gray-400">No active bookings</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                <span className={getStatusStyle(client.status)}>
                                                    {client.status}
                                                </span>
                                            </td>
                                            <td className="text-right">
                                                <button className="p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-colors border border-transparent">
                                                    <MoreVertical size={16} />
                                                </button>
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

export default AdminClients;
