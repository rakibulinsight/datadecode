import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-300">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">
          {statusCode ? `Error ${statusCode}` : 'An error occurred'}
        </h1>
        <p className="text-dark-50/70">
          {statusCode
            ? `A ${statusCode} error occurred on the server`
            : 'An error occurred on the client'}
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;