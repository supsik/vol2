const fileIcons = {
	textDoc  : '/icons/files/text-doc.svg',
	video    : '/icons/files/video.svg',
	musik    : '/icons/files/music.svg',
	image    : '/icons/files/image.svg',
	pdf      : '/icons/files/pdf.svg',
	svg      : '/icons/files/svg.svg',
};

const fileExtensions = {
	textDoc  : 'txt',
	video    : 'vid',
	musik    : 'mp3',
	image    : 'png',
	pdf      : 'pdf',
	svg      : 'svg',
};

export function getFileIcon(ext) {
	return fileIcons[ext];
};

export function getFileExtension(ext) {
	return fileExtensions[ext];
};