import React, { useState } from 'react';
import { Car, Search, User, Filter, Edit, CheckCircle, Trash2, CalendarIcon } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import '../Dashboard/Dashboard.css';

const AdminBookings = () => {
    const [bookings] = useState([
        { id: 'RN-2026-X82', car: 'Toyota Land Cruiser', client: 'NGO World', dates: 'Feb 20 - Feb 23, 2026', total: '$450', status: 'Upcoming', return: 'Feb 23, 2026', paid: 'Yes' },
        { id: 'RN-2026-A12', car: 'Hyundai H1', client: 'Tourism Grp', dates: 'Jan 15 - Jan 18, 2026', total: '$420', status: 'Completed', return: 'Jan 18, 2026', paid: 'Yes' },
        { id: 'RN-2026-B32', car: 'Range Rover HSE', client: 'VIP Client', dates: 'Feb 21 - Feb 28, 2026', total: '$1,200', status: 'Pending', return: 'Feb 28, 2026', paid: 'No' },
        { id: 'RN-2026-C44', car: 'Ford Ranger XLT', client: 'Mining Corp', dates: 'Feb 10 - Feb 20, 2026', total: '$800', status: 'Active', return: 'Feb 20, 2026', paid: 'Yes' },
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Active': return 'status-badge status-intransit';
            case 'Upcoming':
            case 'Pending': return 'status-badge status-pending';
            case 'Completed': return 'status-badge status-delivered';
            default: return 'status-badge bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="dashboard-wrapper">
            <AdminSidebar />

            <main className="dashboard-main bg-slate-50">
                <header className="dashboard-topbar backdrop-blur-sm bg-white/90 sticky top-0 z-10 flex justify-between items-center">
                    <div>
                        <h1 className="page-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">Car Rentals</h1>
                        <p className="page-subtitle">Manage client bookings and fleet scheduling</p>
                    </div>
                    <button className="btn btn-primary flex items-center shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5">
                        View Calendar
                    </button>
                </header>

                <div className="dashboard-content">
                    {/* Filters & Search */}
                    <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 w-1/3 border border-gray-200">
                            <Search size={18} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search Booking ID or Client..."
                                className="bg-transparent border-none outline-none w-full text-sm text-gray-700"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                                <Filter size={16} /> Filter Status
                            </button>
                        </div>
                    </div>

                    <div className="data-table-container">
                        <div className="data-table-header">
                            <h2>All Reservations</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Vehicle</th>
                                        <th>Client</th>
                                        <th>Period</th>
                                        <th>Payment</th>
                                        <th>Status</th>
                                        <th className="text-right">Manage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking) => (
                                        <tr key={booking.id} className="cursor-pointer hover:bg-gray-50">
                                            <td className="font-bold text-gray-800 text-sm">{booking.id}</td>
                                            <td>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-primary">{booking.car}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center text-gray-700 font-medium">
                                                    <User size={14} className="mr-2 text-gray-400" />
                                                    {booking.client}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-gray-700 mb-1">{booking.dates}</span>
                                                    <span className="text-xs text-orange-500 font-semibold flex items-center">
                                                        Return: {booking.return}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-gray-800">{booking.total}</span>
                                                    <span className={`text-xs font-bold ${booking.paid === 'Yes' ? 'text-green-500' : 'text-red-500'}`}>
                                                        {booking.paid === 'Yes' ? 'Paid' : 'Unpaid'}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={getStatusStyle(booking.status)}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    {booking.status === 'Pending' && (
                                                        <button title="Approve Booking" className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors border border-transparent">
                                                            <CheckCircle size={18} />
                                                        </button>
                                                    )}
                                                    <button title="Edit" className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent">
                                                        <Edit size={16} />
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

export default AdminBookings;
