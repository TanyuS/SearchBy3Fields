import React from 'react';

export default styleContent => (
	React.createElement('style', {
		dangerouslySetInnerHTML: {
			__html: styleContent
		}
	})
);
