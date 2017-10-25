function smartMerge(target, patch) {
	return Object
		.keys(patch)
		.reduce((acc, key) => {
			const patchValue = patch[key];

			if (Array.isArray(patchValue) && Array.isArray(acc[key])) {
				acc[key] = acc[key].concat(patchValue);
			} else {
				acc[key] = patchValue;
			}

			return acc;
		}, Object.assign({}, target));
}

function getBabelConfig(config) {
	const base = {
		plugins: [
			// WARNING: lodash plugin breaks the order of imports
			// ['lodash', {id: ['lodash', 'recompose', 'async']}]
		],
		presets: ['es2015', 'react']
	};

	return smartMerge(base, config);
}

module.exports = getBabelConfig;
