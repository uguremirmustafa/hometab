import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'text' | 'contained' | 'outlined';
}
function Button(props: IProps) {
  const { children, size = 'md', variant = 'contained', className, ...rest } = props;

  const cls = `${className ?? ''} btn btn-${size} btn-${variant}`;

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export default Button;
