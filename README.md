# hotspots-site
![Build Status](https://codeship.com/projects/65ae58e0-d19e-0137-cf54-261d00880206/status?branch=master)  

Hotspots Version 1.0 10/25/19
Contributors: Ted Wollman, Oliver Thayer, Will Glynn, Stephen Fang

Hotspots is a website to help people find the best (and avoid the worst) public wifi
hotspots in a given location. After signing up as a member, you have the ability to
give ratings and reviews for existing locations, as well as add new locations that
may not have been created yet!

## How to Use Hotspots
1. Visit https://wifi-hotspots.herokuapp.com
2. Click on location to view reviews and information about that location.
3. To be able to submit your own reviews or new locations, click on "Sign Up"
at the top right corner of the page to create an account.

## Installation
1. Click the green "Clone or Download" on the top right corner of this page.
2. Click on the clipboard icon to copy the URL to your clip board.
3. In your terminal run `git clone https://github.com/TheTedder/hotspots-site.git` to clone the repository into your current folder.
4. In terminal run `bundle install`
5. After this has finished installing, run `bundle exec rails db:create` to create your database.
6. In Terminal run `bundle exec rails db:migrate` to run all the migrations provided.
**
You will need a Google Places API key to place in the .env file.
In the .env file assign a variable PLACES_KEY="Your API key"
If you do not, then the program will not be able to grab pictures for the locations.
**
7. Run `bundle exec rails db:seed` in your terminal.
8. To get the server running, open two terminals. Run `bundle exec rails s` in one and `yarn run start` in the other.
9. The app will be available at localhost:3000 by default.

## TODO list
* Integrate Google Maps to help automatically show locations based on the current users geo location.

* Add a search bar, so that users can narrow down the populated list of locations

* Add categories to locations, so that a user can see locations grouped by a certain category.
