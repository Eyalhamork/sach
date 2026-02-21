import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, Chrome, ShieldAlert } from 'lucide-react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        console.log('Logging in with:', email, password);
        // In a real app, we would validate credentials here
        navigate('/dashboard');
    };

    const handleDemoLogin = () => {
        setEmail('demo@sach.com');
        setPassword('demo123');
        // Small timeout to simulate filling then submitting, or just submit directly
        setTimeout(() => {
            navigate('/dashboard');
        }, 500);
    };

    const handleAdminLogin = () => {
        setEmail('admin@sach.com');
        setPassword('admin123');
        setTimeout(() => {
            navigate('/admin');
        }, 500);
    };

    return (
        <div className="login-page">
            <div className="login-container container">
                <div className="login-card glass-card hover-lift">
                    <div className="login-header text-center">
                        <h1 className="login-title">Welcome Back</h1>
                        <p className="login-subtitle">Access your logistics dashboard</p>
                    </div>

                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-wrapper">
                                <Mail size={18} className="input-icon" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="form-input with-icon"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <Lock size={18} className="input-icon" />
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="form-input with-icon"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-options">
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>

                        <button className="btn btn-primary btn-full animate-pulse-gold-hover mb-4">
                            Sign In <LogIn size={18} className="ml-2" />
                        </button>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button type="button" onClick={handleDemoLogin} className="btn py-3 px-4 bg-orange-50 text-orange-600 hover:bg-orange-100 font-semibold rounded-lg flex items-center justify-center transition-colors border border-orange-200">
                                Client Demo
                            </button>
                            <button type="button" onClick={handleAdminLogin} className="btn py-3 px-4 bg-slate-900 text-white hover:bg-slate-800 font-semibold rounded-lg flex items-center justify-center transition-colors">
                                <ShieldAlert size={16} className="mr-2 text-gold" /> Admin Panel
                            </button>
                        </div>

                        <div className="divider">
                            <span>Or continue with</span>
                        </div>

                        <button type="button" className="btn btn-outline btn-full google-btn">
                            <Chrome size={18} className="mr-2" /> Google
                        </button>
                    </form>

                    <div className="login-footer text-center">
                        <p>Don't have an account? <a href="#" className="register-link">Register New Account</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
