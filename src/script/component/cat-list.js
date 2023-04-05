import './cat-item.js';
class CatList extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }
    set cats(cats){
        this._cats = cats;
        this.render();
    }
    renderError(message){
        this.shadowDOM.innerHTML = '';
        this.shadowDOM.innerHTML += `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
        </style>
        <h2 class="placeholder"> ${message}</h2>`;
    }
    render(){
        this.shadowDOM.innerHTML='';
        this._cats.forEach(cat => {
            const catItemElement = document.createElement('cat-item');
            catItemElement.cat = cat;
            this.shadowDOM.appendChild(catItemElement);

        });
    }

}
customElements.define('cat-list', CatList);