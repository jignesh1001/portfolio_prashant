import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-screen-xl mx-auto px-4 py-10">
                <div className="md:flex md:justify-between md:items-start border-b border-gray-700 pb-8">
                    {/* Logo */}
                    <div className="mb-8 md:mb-0">
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM2rHayO79hkx6dxEzpIsZrAk7wZfKP57Lg&s"
                                alt="Logo"
                                className="h-14"
                            />
                            <span className="text-white text-xl font-semibold">Heisenberg</span>
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
                        {/* Pages */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 uppercase">Pages</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-white transition-colors">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Me */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 uppercase">Follow Me</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://www.instagram.com/prashantt.shinde/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/prashanttshinde"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 uppercase">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p className="text-center sm:text-left">
                        © 2025 <span className="text-white font-semibold">Heisenberg</span>. All rights reserved.
                    </p>
                    <div className="mt-4 sm:mt-0 flex space-x-4">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
