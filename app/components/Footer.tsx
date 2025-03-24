'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 Nicolás. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="hover:text-blue-400"
            >
              <FaTwitter className="text-xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="hover:text-blue-600"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="hover:text-gray-400"
            >
              <FaGithub className="text-xl" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
} 