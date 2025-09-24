const fileIcons = {
	TextDoc  : '/icons/files/TextDoc.svg',
	Video    : '/icons/files/Video.svg',
	Music    : '/icons/files/Music.svg',
	Image    : '/icons/files/Image.svg',
	Pdf      : '/icons/files/Pdf.svg',
	Svg      : '/icons/files/Svg.svg',
};

const fileExtensions = {
	TextDoc  : 'txt',
	Video    : 'vid',
	Music    : 'mp3',
	Image    : 'png',
	Pdf      : 'pdf',
	Svg      : 'svg',
};

const fileSizes = {
	TextDoc : {
		isFullscreen  : false,
		width         : 630,
		height        : 450,
		top           : 110,
		left          : 440,
	},
	Video   : {
		isFullscreen  : false,
		width         : 500,
		height        : 620,
		top           : 110,
		left          : 440,
	},
	Image   : {
		isFullscreen  : false,
		width         : 555,
		height        : 580,
		top           : 180,
		left          : 340,
	},
	Pdf     : {
		isFullscreen  : false,
		width         : window.innerWidth,
		height        : window.innerHeight,
		top           : 0,
		left          : 0,
	},
	Svg     : {
		isFullscreen  : false,
		width         : 555,
		height        : 580,
		top           : 180,
		left          : 340,
	},
};

export function getFileIcon(ext) {
	return fileIcons[ext];
};

export function getFileExtension(ext) {
	return fileExtensions[ext];
};

export function getFileSizes(ext) {
	return fileSizes[ext];
};