import React, { useState } from 'react';
import { Truck, Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import '../Dashboard/Dashboard.css';

const AdminFleet = () => {
    const [vehicles] = useState([
        { id: 'V-001', name: 'Toyota Hilux 2024', type: 'SUV/4x4', plate: 'LB-4592', status: 'Available', lastMaintained: 'Feb 10, 2026' },
        { id: 'V-002', name: 'Range Rover HSE', type: 'Luxury', plate: 'LB-VIP-1', status: 'Rented', lastMaintained: 'Jan 22, 2026' },
        { id: 'V-003', name: 'Mack Vision Truck', type: 'Haulage', plate: 'LB-9021', status: 'In Transit', lastMaintained: 'Feb 15, 2026' },
        { id: 'V-004', name: 'Hyundai H1', type: 'Van', plate: 'LB-3341', status: 'Maintenance', lastMaintained: 'Feb 19, 2026' },
        { id: 'V-005', name: 'Ford Ranger XLT', type: 'SUV/4x4', plate: 'LB-7742', status: 'Available', lastMaintained: 'Dec 10, 2025' },
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Available': return 'status-badge status-delivered'; // green
            case 'Rented':
            case 'In Transit': return 'status-badge status-intransit'; // blue
            case 'Maintenance': return 'status-badge status-pending'; // orange
            default: return 'status-badge bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="dashboard-wrapper">
            <AdminSidebar />

            <main className="dashboard-main bg-slate-50">
                <header className="dashboard-topbar backdrop-blur-sm bg-white/90 sticky top-0 z-10 flex justify-between items-center">
                    <div>
                        <h1 className="page-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">Fleet Management</h1>
                        <p className="page-subtitle">Add, edit, and track your logistics and rental vehicles</p>
                    </div>
                    <button className="btn btn-primary flex items-center shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5">
                        <Plus size={18} className="mr-2" /> Add Vehicle
                    </button>
                </header>

                <div className="dashboard-content">
                    {/* Filters & Search */}
                    <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 w-1/3 border border-gray-200">
                            <Search size={18} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search vehicles by name or plate..."
                                className="bg-transparent border-none outline-none w-full text-sm text-gray-700"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                                <Filter size={16} /> Filter: All types
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                                Status: All
                            </button>
                        </div>
                    </div>

                    {/* Main Table */}
                    <div className="data-table-container">
                        <div className="data-table-header">
                            <h2>All Vehicles ({vehicles.length})</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Vehicle Info</th>
                                        <th>License Plate</th>
                                        <th>Status</th>
                                        <th>Last Maintenance</th>
                                        <th className="text-right">Manage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicles.map((vehicle) => (
                                        <tr key={vehicle.id} className="cursor-pointer hover:bg-gray-50">
                                            <td className="font-bold text-gray-700 text-sm">{vehicle.id}</td>
                                            <td>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-primary">{vehicle.name}</span>
                                                    <span className="text-xs text-gray-500">{vehicle.type}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="bg-gray-100 border border-gray-200 text-gray-700 px-2 py-1 rounded font-mono text-xs font-bold tracking-wider">
                                                    {vehicle.plate}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={getStatusColor(vehicle.status)}>
                                                    {vehicle.status}
                                                </span>
                                            </td>
                                            <td className="text-sm text-gray-600">{vehicle.lastMaintained}</td>
                                            <td className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                        <Edit size={16} />
                                                    </button>
                                                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                        <Trash2 size={16} />
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

export default AdminFleet;
