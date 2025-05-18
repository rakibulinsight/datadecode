import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const ServerError: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-300">
      <div className="text-center space-y-6 p-8">
        <div className="text-8xl font-bold text-primary">500</div>
        <h1 className="text-4xl font-bold text-dark-50">Server Error</h1>
        <p className="text-dark-50/70 max-w-md mx-auto">
          Something went wrong on our servers. We're working to fix it.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ServerError;