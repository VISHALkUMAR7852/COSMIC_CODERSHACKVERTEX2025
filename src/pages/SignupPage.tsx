import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../types';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Fetch existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]') as User[];
    // Check if email already exists
    if (users.some((u: User) => u.email === email)) {
      alert('Email already registered!');
      return;
    }
    // Add new user

    users.push({ id: crypto.randomUUID(), username: name, name, email, password });
    try {
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch {
      alert('Failed to register user.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <FontAwesomeIcon icon={faUserPlus} className="mx-auto h-12 w-auto text-green-500" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Specified a different type instead of 'any'
// Removed unused variable 'err'
// Specified a different type instead of 'any'
// Removed unused variable 'err'
// Specified a different type instead of 'any'
// Removed unused variable 'err'
// Specified a different type instead of 'any'
// Removed unused variable 'err'
// Specified a different type instead of 'any'
// Removed unused variable 'err'
// Specified a different type instead of 'any'