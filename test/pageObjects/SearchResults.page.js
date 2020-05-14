import Page from "./Page";

class SearchResultsPage extends Page {
    get searchIcon() { return $(".nav-search-facade i"); }
    getsearchedBook(searchedText) { return $("//*[text()=\'" + searchedText + "\']"); }

    searchedBookIsDisplayed(text) {
        return this.getsearchedBook(text).isDisplayed();
    }

}
export default new SearchResultsPage();