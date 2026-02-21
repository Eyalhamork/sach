import React from 'react';
import { Package, Truck, Car, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import '../../pages/Dashboard/Dashboard.css';

const DashboardSidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <aside className="dashboard-sidebar">
            <div className="sidebar-header">
                <span className="logo-text-sm">SACH</span>
                <span className="logo-subtext-sm">Logistics</span>
            </div>
            <nav className="sidebar-nav">
                <Link to="/dashboard" className={`nav-item ${currentPath === '/dashboard' ? 'active' : ''}`}>
                    <Package size={20} /> Dashboard
                </Link>
                <Link to="/dashboard/shipments" className={`nav-item ${currentPath === '/dashboard/shipments' ? 'active' : ''}`}>
                    <Truck size={20} /> My Shipments
                </Link>
                <Link to="/dashboard/rentals" className={`nav-item ${currentPath === '/dashboard/rentals' ? 'active' : ''}`}>
                    <Car size={20} /> Car Rentals
                </Link>
                <Link to="/dashboard/new" className={`nav-item ${currentPath === '/dashboard/new' ? 'active' : ''}`}>
                    <Plus size={20} /> New Request
                </Link>
            </nav>
            <div className="user-profile-mini">
                <div className="avatar">DU</div>
                <div className="user-info">
                    <span className="name">Demo User</span>
                    <span className="role">Premium Client</span>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
                <Link to="/" className="btn-return-home flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                    <span>&larr; Return to Website</span>
                </Link>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
