import Page from "./Page";

class HomePage extends Page {
    get searchIcon() { return $(".nav-search-facade i"); }
    get searchDropDown() { return $(".nav-search-dropdown.searchSelect"); }
    get bookOption() { return $("#searchDropdownBox *[value*='books']"); }
    get searchTextBox() { return $("#twotabsearchtextbox"); }
    get submitButton() { return $(".nav-input"); }

    open() {
        super.open("/");
    }
}
export default new HomePage();