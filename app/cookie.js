function _getCookie(name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
}

function _setCookie(cookie_data) {
	let cookie_string = "";
	Object.keys(cookie_data).forEach((item) => {
		cookie_string += `${item}=${cookie_data[item]}; `;
	});
	document.cookie = cookie_string;
}

function _deleteCookie(name) {
	document.cookie = `${name}=${getCookie(name)}; max-age=0;`;
}
