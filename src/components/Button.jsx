import React from 'react';

function Button({ children, type = 'primary', size = 'medium', rounded = false, className = '', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const typeStyles = {
    primary: 'bg-Moss/600 text-white hover:bg-Moss/700 focus:ring-Moss/500',
    secondary: 'bg-Grayiron/100 text-Grayiron/700 hover:bg-Grayiron/200 focus:ring-Grayiron/500',
    warning: 'bg-Warning/400 text-white hover:bg-Warning/500 focus:ring-Warning/500',
  };

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const roundedStyle = rounded ? 'rounded-full' : 'rounded-lg';

  return (
    <button
      className={`${baseStyles} ${typeStyles[type]} ${sizeStyles[size]} ${roundedStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button }; 