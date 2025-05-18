import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-300">
      <div className="text-center space-y-6 p-8">
        <div className="text-8xl font-bold text-primary">404</div>
        <h1 className="text-4xl font-bold text-dark-50">Page Not Found</h1>
        <p className="text-dark-50/70 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
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

export default NotFound;