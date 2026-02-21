import React from 'react';
import { LayoutDashboard, Truck, CalendarCheck, Users, FileText, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import '../../pages/Dashboard/Dashboard.css';

const AdminSidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <aside className="dashboard-sidebar" style={{ backgroundColor: '#0f172a' }}>
            <div className="sidebar-header">
                <span className="logo-text-sm text-white">SACH ADMIN</span>
                <span className="logo-subtext-sm text-gold">Control Panel</span>
            </div>
            <nav className="sidebar-nav">
                <Link to="/admin" className={`nav-item ${currentPath === '/admin' ? 'active' : ''}`}>
                    <LayoutDashboard size={20} /> Overview
                </Link>
                <Link to="/admin/fleet" className={`nav-item ${currentPath.includes('/admin/fleet') ? 'active' : ''}`}>
                    <Truck size={20} /> Fleet Mgmt
                </Link>
                <Link to="/admin/quotes" className={`nav-item ${currentPath.includes('/admin/quotes') ? 'active' : ''}`}>
                    <FileText size={20} /> Logistics Quotes
                </Link>
                <Link to="/admin/bookings" className={`nav-item ${currentPath.includes('/admin/bookings') ? 'active' : ''}`}>
                    <CalendarCheck size={20} /> Car Rentals
                </Link>
                <Link to="/admin/clients" className={`nav-item ${currentPath.includes('/admin/clients') ? 'active' : ''}`}>
                    <Users size={20} /> Clients CRM
                </Link>
            </nav>

            <div className="user-profile-mini">
                <div className="avatar bg-blue-600">A</div>
                <div className="user-info">
                    <span className="name">Admin User</span>
                    <span className="role">System Administrator</span>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <Link to="/" className="btn-return-home flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                    <LogOut size={16} /> <span>Exit Admin</span>
                </Link>
            </div>
        </aside>
    );
};

export default AdminSidebar;
