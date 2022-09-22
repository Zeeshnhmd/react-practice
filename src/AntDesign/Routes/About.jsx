import React from 'react';
import CollapseLayout from '../Layout/CollapseLayout';

const About = () => {
	return (
		<CollapseLayout>
			<div
				className="site-layout-background"
				style={{
					padding: 24,
					textAlign: 'center',
				}}
			>
				<h1>About</h1>
				{
					// indicates very long content
					Array.from(
						{
							length: 100,
						},
						(_, index) => (
							<React.Fragment key={index}>
								{index % 20 === 0 && index ? 'more' : '...'}
								<br />
							</React.Fragment>
						)
					)
				}
			</div>
		</CollapseLayout>
	);
};

export default About;
