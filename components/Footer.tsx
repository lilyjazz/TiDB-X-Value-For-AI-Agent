import React from 'react';
import { TiDBLogo } from './Icons';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-brand-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <TiDBLogo />
            <p className="mt-6 text-sm text-gray-500 leading-relaxed">
              TiDB X is an advanced hybrid database platform designed to power the next generation of AI applications.
            </p>
            <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-500 hover:text-white"><Github className="w-5 h-5"/></a>
                <a href="#" className="text-gray-500 hover:text-white"><Twitter className="w-5 h-5"/></a>
                <a href="#" className="text-gray-500 hover:text-white"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-red">TiDB Serverless</a></li>
              <li><a href="#" className="hover:text-brand-red">Vector Search</a></li>
              <li><a href="#" className="hover:text-brand-red">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-red">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Use Cases</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-red">AI Agents</a></li>
              <li><a href="#" className="hover:text-brand-red">Real-time Analytics</a></li>
              <li><a href="#" className="hover:text-brand-red">Financial Services</a></li>
              <li><a href="#" className="hover:text-brand-red">Gaming</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-red">About Us</a></li>
              <li><a href="#" className="hover:text-brand-red">Careers</a></li>
              <li><a href="#" className="hover:text-brand-red">Contact</a></li>
              <li><a href="#" className="hover:text-brand-red">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2026 TiDB X / PingCAP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;