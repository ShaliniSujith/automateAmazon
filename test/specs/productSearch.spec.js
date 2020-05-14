import homePage from '../pageObjects/Home.page';
import SearchSection from '../pageObjects/sections/Search.section';
import SearchResults from '../pageObjects/SearchResults.page';
const expect = require('chai').expect;

describe('Amazon: Product Search', () => {
    it('should succesfully search for a book', () => {
        const bookName = "How to Use Python to Automate Almost Anything";

        homePage.open();
        SearchSection.performSearch(bookName);

        expect(SearchResults.searchedBookIsDisplayed(bookName)).to.be.true;
    })
})