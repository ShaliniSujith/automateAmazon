import Page from "../Page";
import HomePage from '../Home.page';

class SearchSection extends Page {

    performSearch(searchText) {
        HomePage.searchDropDown.click();
        HomePage.bookOption.click();
        HomePage.searchTextBox.click();
        HomePage.searchTextBox.setValue(searchText);
        HomePage.submitButton.click();
    }


}
export default new SearchSection();