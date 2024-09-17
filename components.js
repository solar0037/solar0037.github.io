class MyHeader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const headerTemplate = document.createElement('template');
        headerTemplate.innerHTML = `
            <style>
                header {
                    background-color: #3266a8;
                    color: white;
                    padding: 10px;
                    padding-left: 20px;
                    text-align: center;
                    flex: 0 1 auto;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                ul {

                    display: flex;
                    flex-direction: row;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                li {
                    list-style: none;
                    padding: 10px;
                }
            </style>
            <header>
                <a href="/"><h1>솔라의 연구실</h1></a>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
        shadow.appendChild(headerTemplate.content.cloneNode(true));
    }
}

class MainContent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const mainTemplate = document.createElement('template');
        mainTemplate.innerHTML = `
            <style>
                main {
                    padding: 20px;
                    max-width: 800px;
                    flex: 1 1 auto;
                }
            </style>
            <main>
                <slot name="my-article"></slot>
            </main>
        `;
        shadow.appendChild(mainTemplate.content.cloneNode(true));
    }
}

class MyArticle extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const title = this.getAttribute('title');

        const articleTemplate = document.createElement('template');
        articleTemplate.innerHTML = `
            <style>
                article {
                    border-bottom: 1px solid #ddd;
                    padding: 20px 0;
                }
                header {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                footer {
                    font-size: 14px;
                    color: #555;
                    margin-top: 10px;
                }
            </style>
            <article>
                <header>
                    <h2>${title}</h2>
                </header>
                <section>
                    <slot></slot>
                </section>
                <footer>
                </footer>
            </article>
        `;

        shadow.appendChild(articleTemplate.content.cloneNode(true));
    }
}

class MyFooter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const footerTemplate = document.createElement('template');
        footerTemplate.innerHTML = `
            <style>
                footer {
                    background-color: #3266a8;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    flex: 0 1 40px;
                }
            </style>
            <footer>
                <p>©2024 솔라의 연구실. All rights reserved.</p>
            </footer>
        `;
        shadow.appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('my-header', MyHeader);
customElements.define('main-content', MainContent);
customElements.define('my-article', MyArticle);
customElements.define('my-footer', MyFooter);
