class Welcome extends HTMLElement {
	constructor() {
		super();
		this.name = "";
	}

	connectedCallback() {
		this.name = this.getAttribute("name");
		this.render();
	}

	render() {
		this.innerHTML = `<h1>Welcome ${this.name}</h1>`;
	}
}

customElements.define("wel-come", Welcome);
