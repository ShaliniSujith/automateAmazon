describe('Amazon homepage', () => {
    it('Get title of amazon homepage', () => {
        browser.url('https://www.amazon.com/');
        const title = browser.getTitle();
        console.log('Title is', title);
    })
})