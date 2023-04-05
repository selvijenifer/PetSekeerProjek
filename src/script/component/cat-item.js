class CatItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }
    set cat(cat) {
        this._cat = cat;
        this.render();
    }
 
  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :host{
    background: white;
    display: block;
    margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
  }
      
      .Image {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center;
      }
      
      .cat-info {
        padding: 24px;
      }
      
      .cat-info > h2 {
        font-weight: lighter;
      }
      
      .cat-info > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
      }
    </style>
    <img class="Image" src="${this._cat.Image}" alt="img">
          <div class="cat-info">
          <h2>${this._cat.name}</h2>
          <p>${this._cat.description}</p>
          </div>
    `;
  }
}
customElements.define('cat-item', CatItem);