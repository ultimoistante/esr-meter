export const getProperty = (object, path, fallbackValue) => {
	let properties = path.split('.');
	let value = object;
	let index = -1;
	let lastIndex = (properties.length - 1);
	while (++index <= lastIndex) {
		if (value != null && value.hasOwnProperty(properties[index])) {
			value = value[properties[index]];
			continue;
		} else {
			return fallbackValue != null ? fallbackValue : null;
		}
	}
	return value;
}
