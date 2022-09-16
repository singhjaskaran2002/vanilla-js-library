let _routes_;

function _routing_(paths) {
	_routes_ = paths;
}

function _renderHTML_(element) {
	const root = document.getElementById("root");
	root.innerHTML = element;
}

function _renderPath_(path) {
	window.history.pushState({ path }, path, path);
	_renderHTML_(_routes_.find((r) => r.path === path).element);
}
