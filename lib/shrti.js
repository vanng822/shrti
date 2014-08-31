
var base36String = '0123456789abcdefghijklmnopqrstuvwxyz';

var startLength = 4;

/**
 * array for mapping maxlength is 16
 * You should generate a new mapping and set it from application
 *
 * @formatter:off
 */
var mapping = null;

var checkMapping = function() {
	if (!mapping) {
		throw new Error('No mapping is set. Run "nodejs bin/mapping.js" for the mapping and set it from your application');
	}
}
module.exports.setStartLength = function(length) {
	startLength = parseInt(length) || 1;
	if(startLength > 16) {
		startLength = 16;
	}
};
module.exports.setMapping = function(m) {
	mapping = m;
};


module.exports.decode = function(encoded, radix) {
	var i, len, decoded, maxLength;
	var encoded = String(encoded).toLowerCase();
	decoded = '';
	
	checkMapping();
	
	for( i = 0, len = encoded.length; i < len; i++) {
		decoded += base36String[mapping[i].indexOf(encoded[i])];
	}

	switch(radix) {
		case 36:
			maxLength = 11;
			break;
		case 10:
			maxLength = 16;
			break;
		case 16:
			maxLength = 14;
			break;
		default:
			maxLength = 11;
			radix = 36;
	}
	/* naive check */
	if(decoded.length > maxLength) {
		throw new Error('Integer out of range');
	}

	return parseInt(decoded, radix);
};
/**
 *
 *
 *
 * @param uniqueInt Integer
 * 		This is an integer in mathematics and can be
 * 		max equal to the length of mapping. You should always modify
 * 		the mapping and shuffle the content
 * 		before using it.
 * 		run "nodejs bin/mapping.js"
 * 		Max integer for javascript is 9007199254740992 => 11 chars long if base 36
 *
 * @param radix Integer
 * 		if using base 10, 16, 36
 * 		default is 36 to reduce the length of output
 *
 * @return encoded String
 *
 */
module.exports.encode = function(uniqueInt, radix) {
	var i, len, uniqueBaseString, encoded;
	var uniqueIntNumber = new Number(uniqueInt);
	var returnLength = startLength;
	
	checkMapping();
	
	if(uniqueIntNumber > new Number(9007199254740992)) {
		throw new Error('Integer can not be larger than 9007199254740992 due to limit in javascript');
	}

	switch(radix) {
		case 36:
			uniqueBaseString = uniqueIntNumber.toString(36);
			if(returnLength > 11) {
				returnLength = 11;
			}
			break;
		case 10:
			uniqueBaseString = uniqueIntNumber.toString(10);
			if(returnLength > 16) {
				returnLength = 16;
			}
			break;
		case 16:
			uniqueBaseString = uniqueIntNumber.toString(16);
			if(returnLength > 14) {
				returnLength = 14;
			}
			break;
		default:
			uniqueBaseString = uniqueIntNumber.toString(36);
			if(returnLength > 11) {
				returnLength = 11;
			}
			break;
	}

	if(uniqueBaseString.length < returnLength) {
		uniqueBaseString = ('000000000000000000000000000000000000' + uniqueBaseString).slice(-returnLength);
	}
	encoded = '';

	for( i = 0, len = uniqueBaseString.length; i < len; i++) {
		encoded += mapping[i][base36String.indexOf(uniqueBaseString[i])]
	}

	return encoded;
};