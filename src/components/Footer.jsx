import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-3">About</h3>
          <p className="text-sm">
            I'm a passionate MERN Stack developer showcasing my journey through real-world React projects. Follow along and explore my creations!
          </p>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-lg font-bold mb-3">Projects</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Web Development</a></li>
            <li><a href="#" className="hover:text-yellow-300">Mobile Apps</a></li>
            <li><a href="#" className="hover:text-yellow-300">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-yellow-300">Open Source</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:you@example.com" className="hover:text-yellow-300">you@example.com</a></li>
            <li>Phone: <a href="tel:+919876543210" className="hover:text-yellow-300">+91 98765 43210</a></li>
            <li>Location: Kolkata, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-3">Follow Me</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-yellow-300"><Facebook /></a>
            <a href="#" className="hover:text-yellow-300"><Twitter /></a>
            <a href="#" className="hover:text-yellow-300"><Linkedin /></a>
            <a href="#" className="hover:text-yellow-300"><Github /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
}
