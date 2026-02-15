import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img src="/logo.svg" className="h-9 w-9" alt="NeighborWeb Logo" />
                            <span className="font-bold text-xl tracking-tight text-white">NeighborWeb</span>
                        </Link>
                        <p className="text-slate-400 text-sm mb-4">
                            Helping local businesses win online with high-converting, AI-powered websites.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-slate-400 hover:text-white text-sm">Web Design</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-white text-sm">AI Integration</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-white text-sm">SEO Setup</Link></li>
                            <li><Link to="/pricing" className="text-slate-400 hover:text-white text-sm">Maintenance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-slate-400 hover:text-white text-sm">About Us</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm">Contact</Link></li>
                            <li><Link to="/pricing" className="text-slate-400 hover:text-white text-sm">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:pixelweldstudios@gmail.com" className="hover:text-white">pixelweldstudios@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-800 pt-8">
                    <p className="text-base text-slate-500 text-center">
                        &copy; {new Date().getFullYear()} NeighborWeb Studios. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
