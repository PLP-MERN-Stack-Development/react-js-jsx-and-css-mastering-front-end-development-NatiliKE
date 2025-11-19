import React from 'react';
import PropTypes from 'prop-types';

/**
 * Loading Spinner Component
 * @param {Object} props - Component props
 * @param {string} props.size - Size of the spinner (sm, md, lg)
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.text - Loading text to display
 * @returns {JSX.Element} - Loading component
 */
const Loading = ({ size = 'md', className = '', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <div className="relative">
        <div
          className={`${sizeClasses[size]} border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin`}
        ></div>
      </div>
      {text && (
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

/**
 * Loading Skeleton Component for content placeholders
 */
const LoadingSkeleton = ({ className = '', rows = 3 }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          {index < rows - 1 && <div className="my-4"></div>}
        </div>
      ))}
    </div>
  );
};

/**
 * Card Loading Skeleton
 */
const CardSkeleton = ({ count = 1, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  text: PropTypes.string,
};

LoadingSkeleton.propTypes = {
  className: PropTypes.string,
  rows: PropTypes.number,
};

CardSkeleton.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string,
};

// Export compound components
Loading.Skeleton = LoadingSkeleton;
Loading.CardSkeleton = CardSkeleton;

export default Loading;