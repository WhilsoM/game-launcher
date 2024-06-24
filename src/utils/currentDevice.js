import platform from 'platform'

document.addEventListener('DOMContentLoaded', function () {
	const platformInfo = platform

	if (
		platformInfo.os.family === 'iOS' ||
		platformInfo.os.family === 'Android'
	) {
		window.location.href = './../../mobileWarning.html'
	}
})
