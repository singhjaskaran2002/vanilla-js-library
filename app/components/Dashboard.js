class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	get count() {
		return this.getAttribute("count");
	}

	set count(val) {
		this.setAttribute("count", val);
	}

	increment() {
		this.count++;
	}

	static get observedAttributes() {
		return ["count"];
	}

	attributeChangedCallback(prop, oldVal, newVal) {
		if (prop === "count") {
			this.render();
			let btn = this.shadow.querySelector("#btn");
			btn.addEventListener("click", this.increment.bind(this));
		}
	}

	connectedCallback() {
		this.render();
		let btn = this.shadow.querySelector("#btn");
		btn.addEventListener("click", this.increment.bind(this));
	}

	render() {
		this.shadow.innerHTML = `
            <h1>Counter ${this.count}</h1>
            <button id="btn">Increment</button>
        `;
	}
}

customElements.define("my-dashboard", Dashboard);
