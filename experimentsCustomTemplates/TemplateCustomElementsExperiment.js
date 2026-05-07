class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` <h1>Header Experiment File!</h1> `
    }
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` <h1>Footer Experiment File!</h1> `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)

// Better Advanced Version (Shadow DOM)
class SpecialNavbar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                h1 {
                    color: red;
                }
            </style>

            <header>
                <h1>Navbar</h1>
            </header>
        `;
    }
}

customElements.define('special-navbar', SpecialNavbar);
