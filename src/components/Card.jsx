import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.variant - Card variant (default, elevated, outlined)
 * @param {boolean} props.interactive - Whether the card is interactive (hover effects)
 * @param {function} props.onClick - Click handler for interactive cards
 * @returns {JSX.Element} - Card component
 */
const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  interactive = false,
  onClick,
  ...rest 
}) => {
  // Base classes
  const baseClasses = 'rounded-lg border transition-all duration-200';
  
  // Variant classes
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm',
    elevated: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg',
    outlined: 'bg-transparent border-gray-300 dark:border-gray-600',
  };
  
  // Interactive classes
  const interactiveClasses = interactive 
    ? 'cursor-pointer hover:shadow-md hover:-translate-y-1 hover:scale-[1.02]' 
    : '';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${interactiveClasses} ${className}`;
  
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      className={cardClasses}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Component>
  );
};

/**
 * Card Header component
 */
const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

/**
 * Card Content component
 */
const CardContent = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

/**
 * Card Footer component
 */
const CardFooter = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 rounded-b-lg ${className}`}>
    {children}
  </div>
);

/**
 * Card Title component
 */
const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${className}`}>
    {children}
  </h3>
);

/**
 * Card Description component
 */
const CardDescription = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-600 dark:text-gray-400 ${className}`}>
    {children}
  </p>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined']),
  interactive: PropTypes.bool,
  onClick: PropTypes.func,
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardDescription.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Export compound component
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;