/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* First test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Second test - it tests to make sure that each feed
         * in the allFeeds object has a URL defined
         * and that the URL is not empty.
         */
         it('each feed has a URL defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
         });


        /* Third test - it tests to make sure that each feed
         * in the allFeeds object has a name defined
         * and that the name is not empty.
         */
         it('each feed has a name defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
         });
    });

    /* This is our second test suite - a test suite just contains
    * a related set of tests. This suite is all about the menu
    * definitions.
    */
    describe('The menu', function() {
        /* Fourth test - it tests to ensure the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Fifth test - it tests to ensure the menu changes
         * visibility when the menu icon is clicked. This test
         * ensure both that the menu is visible when clicked once
         * and is not visible when clicked a second time.
         */
        it('changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This is our third test suite - a test suite just contains
    * a related set of tests. This suite is all about testing the
    * loading of the initial feed.
    */
    describe('Initial Entries', function() {
        /* Sixth test - it tests to ensure when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('has at least one entry in the feed container', function(done) {
            expect($('.feed').children().length).toBeGreaterThan(0);
            done();
        });
    });



    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
