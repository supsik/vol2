const fileIcons = {
	TextDoc  : '/icons/files/text-doc.svg',
	Video    : '/icons/files/video.svg',
	Musik    : '/icons/files/musik.svg',
	Image    : '/icons/files/image.svg',
	Pdf      : '/icons/files/pdf.svg',
	Svg      : '/icons/files/svg.svg',
};

const fileExtensions = {
	TextDoc  : 'txt',
	Video    : 'vid',
	Musik    : 'mp3',
	Image    : 'png',
	Pdf      : 'pdf',
	Svg      : 'svg',
};

export function getFileIcon(ext) {
	return fileIcons[ext];
};

export function getFileExtension(ext) {
	return fileExtensions[ext];
};