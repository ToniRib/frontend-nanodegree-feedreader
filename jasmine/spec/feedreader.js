// feedreader.js
// Test the basic functionality of the feed reader app using
// the test suites below

// Don't run the tests until the DOM is ready
$(function() {
    // Test Suite 1
    // RSS feeds definitions & the allFeeds variable
    describe('RSS Feeds', function() {
        // Test 1a
        // Ensures the allFeeds variable is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test 1b
        // Ensures that each feed has a url defined and is not empty
        it('each feed has a URL defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        // Test 1c
        // Ensures that each feed has a name defined and is not empty
        it('each feed has a name defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });

    // Test Suite 2
    // Menu visibility
    describe('The menu', function() {
        // Test 2a
        // Ensures the menu is hidden when the page is loaded
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Test 2b
        // Ensures the menu toggles visibility when the menu icon is clicked
        it('changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // Test Suite 3
    // Load of initial entries
    describe('Initial Entries', function() {

        // load the initial feed
        beforeEach(function(done) {
            loadFeed(0, done); // wait for the function to finish
        });

        // Test 3a
        // Ensures the initial feed has at least one entry (is not empty)
        it('has at least one entry in the feed container', function(done) {
            expect($('.feed').children().length).toBeGreaterThan(0);
            done();
        });
    });

    // Test Suite 4
    // Change of content when new feed is loaded
    describe('New Feed Selection', function() {
        var initialContent,
            newContent;

        // load the initial feed & get the feed content
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialContent = $('.feed').html();
                done(); // wait for the function to finish
            });
        });

        // load a new feed & get the feed content
        beforeEach(function(done) {
            loadFeed(1, function() {
                newContent = $('.feed').html();
                done(); // wait for the function to finish
            });
        });

        // Test 4a
        // Ensures the content changes when a different feed is selected
        // and that the new content isn't undefined
        it('changes content when a new feed is selected', function() {
            expect(newContent).not.toBe(initialContent);
            expect(newContent).not.toBe(undefined);
        });
    });
}());
