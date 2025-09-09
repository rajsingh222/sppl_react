import React from 'react';

// No-op Reveal: renders children immediately with no animation
export default function Reveal({ children, as: Tag = 'div', className = '', ...rest }) {
	return (
		<Tag className={className} {...rest}>
			{children}
		</Tag>
	);
}
