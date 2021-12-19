# Dinner For You


## Description
A simple app in which a user can generate a random recipe to use to cook themselves a hearty meal. 
Recipes include ingredient list, cooking instructions, occasional youtube videos, and a tasty looking photograph of the dish. 
This app also allows the user to email themselves a copy of the recipe and all related information to their email address of choice.


## Contributors
Dan Doherty - github profile link
Sadi Abdurraouf - github profile link
Curtis Hong - Github profile link
Eiko Ujifusa - Github profile Link

## Technologies Used

- HTML/CSS
- JavaScript
- jQuery
- Materialize
- The Meal DB API
- EasyMail

## Development

Development initially started on an app called Table Ready, which used an API to scan the ID of a customer at a restaurant to get their informaiton and create a profile of them for the restaurant. MVP included functionality to put the customer on a waitlist and send a text to them when their table was ready. The project was scrapped early due to issues with the ID scanning OCR API.

Development shifted to the current MVP, Dinner For You. Using integrated Github kanban board team split tasks into user interface, recipe history, client side storage, and the API calls. Team communicated well to build components separately and then join them to create seamless app.

## Future Development

### Additional Features

- "Clear" or "Delete" functionality for recipe history buttons
- Dynamically generate site headers "Meal", "Category", "Region", "Ingredients", "Measure", "Instructions" to clean up UI when app loads.
- Parse instructions so that numbered steps have line breaks to make more readable

### Next Direction

The next direction for this concept is to integrate the functionality with an app that delivers the ingredients, e.g. Blue Apron. While such an app offers varied meal packages, incorporating fully randomized meal choice from accross the world would increase user interactivity and increase interest in the service.

## Use

App is fully live and ready to use. User interacts with app starting with the Get Recipie button, which pulls a random recipe from the database. Then user can select from past recipies using those dynamically generated buttons, view an instructional YouTube video, or email the recipe to their desired email address. 

Our only issue with the MVP's functionality has been the email API, which went down for a few days (2021-Dec-15 through 2021-Dec-17), and as of this writing is back up. This may be due to call limit on the API, but given that any reference to the API was removed from RapidAPI for those days, team assumes lapse in functionality was due to an API update and functionality should resume as normal indefinitely.


# Screen Capture of the Working App

![Screenshot (16)](https://user-images.githubusercontent.com/89751266/146664325-27e406be-2110-4bce-bcfd-c20662d5e80d.png)



# Link to the GitHub Page #

[Live App](https://ddoherty6.github.io/dinner-for-you/)
                    
