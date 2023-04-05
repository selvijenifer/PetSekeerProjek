import '../component/cat-list.js';
import '../component/search-bar.js';
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const catListElement = document.querySelector('cat-list');

  const onButtonSearchClicked = async() => {
    try{
      const result = await DataSource.searchCat(searchElement.value);
      renderResult(result);
    }catch(message){
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    catListElement.cats = results;
  };

  const fallbackResult = message => {
    catListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;