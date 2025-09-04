import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, as: Tag = 'div' }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					obs.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	return (
		<Tag
			ref={ref}
			style={{ transitionDelay: `${delay}ms` }}
			className={
				`will-change-transform opacity-0 translate-y-4 scale-[0.99] ` +
				(visible ? 'opacity-100 translate-y-0 scale-100 transition duration-700 ease-out' : 'transition duration-700 ease-out')
			}
		>
			{children}
		</Tag>
	);
}
