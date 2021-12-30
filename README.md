# TGCAssignment3

# React and Backend Framework Project – 'Get-A-Room Booking Engine'

## Context
This project develops a mobile-responsive web-based booking engine called 'Get-A-Room', for consumers to book private rooms on hourly basis, mostly for the purpose of having quiet & comfortable space to work. It also builds a backend portal for staff working at this room rental company to load room types, timeslots and check bookings.

The idea was conceptualized upon seeing many popular family KTV outlets going bust during this prolonged pandemic of nearly 2 years. A few of such family KTV chains are pivoting to shared-office space with private rooms for hourly rentals, but they are barely surviving due to lack of digital skills in navigating this drastic transition. One of their pain points is lack of online booking system. The KTV outlet I often visited in the north of Singapore relies on visitors to the store to check on availability over the counter or past customers calling them to inquire. Both are very outdated and inefficient. This project aims to provide an integrated customer-facing booking engine and administrative backend portal for such KTV business pivoting to hourly room rental business.

As the project is produced in 14 days (5 weekends and 4 additional off-days), primary development effort is focused on the functionalities and key user flows. This is due to both sheer practicality of very short timeframe and also a conscientious effort to prioritize the development of a functional system for immediate usage. 

## Demo
A live website of the application can be found here: .

## Index
1. UX
2. Technologies Used
3. Future Features To Implement
4. Testing/ Test Cases
5. Known Bugs
6. Deployment
7. Credits and Acknoledgement

# 1. User Experience (UX)
## (i) Project Strategy
Following closely the objectives of this interactive web application (i.e. to allow users to search and contribute to snippets of safe-for-work content), these user goals were identified and served as guidelines for the features that were implemented.

User Stories | Features
-------------|-------------
User can see all snippets contributed by other users so far in this web app. | When a user clicks on 'Snippets' at the navigation bar, the app displays the titles of all snippets crowd-sourced so far in accordion style. User can click on a title to read the content, the categories it belongs to and a list of user comments on this snippet.
User can filter snippets by theme, type, length, occasion and key word search of title and content. | In the snippet view, there is a filter control button. Upon clicking on it, a user can select multiple criteria to filter the snippets, according to theme, type, length, occasion and key word presence in title or content.
User can edit an existing snippet. | In the snippet view, when a snippet is clicked and is expanded to display, there is an Edit button. Upon clicking on it, a user is shown a modal display with a form containing the current content and categories of this snippet. The user can then make changes and save.
User can create a new snippet. | In the snippet view, there is an Add button. Upon clicking on it, a user is shown a modal display with an empty snippet form. The user can then fill in the title, content and all the applicable categories and save.
User can delete an existing snippet. | In the snippet view, when a snippet is clicked and is expanded to display, there is a Delete button. Upon clicking on it, a user is shown a modal display with a warning message asking the user to confirm or cancel the deletion. The user can either confirm to delete, or cancel the delete request.
User can read a list of comments related to a snippet. | In the snippet view, when a snippet is clicked and is expanded to display, there is a button showing the number of comments associated with this snippet. Upon clicking on it, a user is shown a list of comments posted by other users. 
User can post comment to a snippet | In the snippet view, when a snippet is clicked and is expanded to display, there is a Add Comment button. Upon clicking on it, a user is shown a modal display with an empty comment form, where the user can enter her comment and post it. The comment is displayed in this snippet's comment list immediately with timestamp.
User can edit comment posted to a snippet. | In the snippet view where a list of comment is expanded to display, there is an Edit button associated with each comment. Upon clicking on it, a user is shown a display modal with a comment form filled with current content and username. The user can then modify the comment and post it. The updated comment is displayed in the comment list immediately with timestamp.
User can delete comment posted to a snippet. | In the snippet view where a list of comment is expanded to display, there is an Delete button associated with each comment. Upon clicking on it, a user is shown a display modal with a warning message asking the user to confirm or cancel the deletion. The user can either confirm to delete, or cancel the delete request.
All user inputs are validated before making changes to the database. | Each user input is validated by frontend logic, enforcing various rules based on the data field, e.g. regular expression pattern checking valid email address/ snippet title name, each category type must have a valid input for the option selected, etc. In addition, each API call to express server is also validated by backend logic, enforcing the same rules based on the data field. Only when the user input/collection of user inputs pass both frontend and backend validation, then express server communicates the CRUD operations to MongoDB.
User can view all the categories and options under each category. | Clicking on the Categories tab at navigation bar opens a dropdown menu which shows a list of categories. Clicking on a category refreshes the page to display all the options under this category. E.g. clicking on Theme shows a list of themes in card display. Within each card, it shows a brief decription of the theme, the number of snippets associated with this theme, number of comments gathered under this theme and how many users have collected snippets under this theme.
User can find out more about the rationale behind this project and how to make the best use of it. | Clicking on 'About' in the navigation bar brings the user to the About page, which explains how the project was conceptualized, what problems it solves and how to navigate the web app effectively.

## (ii) Project Scope
The project skeleton and UI layout (wireframes) can be found in the git repository > design assets. React component logical flow can also be found the same folder.

## (iii) Design
The bootstrap framework was used in for the front-end development of the website as it allows for mobile responsive design and easy grid layout.

As the name of the web application suggests, 'Safe-For-Work Snippets', the colour palette and general design of the website takes after the colours of a formal, streamlined and functional internal corporate website. As the focus of the project is to crowdsource real-life wisdom and fun yet safe-for-work snippets of content, the layout of the webapp is straightforward and interactivity is intuitive. Any user action is generally achieved within 3 clicks.

Colors used:
#A1A3A5 #FAE8E0 #DDEEBC
All these are light, warm colors that fit well with clean and professional business context.

Topography used:
Verdana, Geneva, Tahoma, sans-serif;
This font series is among the most commonly used and hence most familiar to the general public. Verdana is professional looking without appearing too formal, perfect for fact-based presentation.

# 2. Technologies Used
* HTML 5
The project uses HTML5 to structure the content of the website in a semantically meaningful way.
* CSS
The project uses CSS to add stylistic touches to the website.
* Bootstrap
The project uses native Bootstrap CSS to structure the layout of the website (e.g. Navbar, Accordion for snippet view, Card for category view etc.) and ensure website is mobile responsiveness. Bootstrap JS is not used. All the interactivity of Bootstrap elements are implemented with my own javascript functions in React, by storing the changes as state variables and manipulating these state variables.
* React Javascript Framework
The project uses React to code the web app by components. A parent component stores the state variables and state setter functions; parent component passes the relevant state variables and state setter functions as props to its child components, which are fully managed functional components. There are also class components with its own state variables and props from other components. Such components may re-render when its own state variables or props from other components change. All the UI changes and user inputs are managed via state variable changes.
* Express
The project uses Express to run backend server, creating multiple routings and exposing them as API endpoints for the frontend React app to consume. Express server then validates the API requests, and if valid, performs API calls to MongoDB to execute CRUD operations. 
* MongoDB
The project uses MongoDB as its database technology. There are multiple collections of documents. One-to-Many relationship between snippet and comment is stored as embedded documents under a snippet document. Many-to-Many relationship between snippet and category is stored as key word reference. 
* AJAX
The project uses AJAX extensively to perform CRUD from multiple API endpoints exposed by Express server. Similarly, Express server also perform CRUD to MongoDB using AJAX calls.
* CSS Modification
The project manipulates CSS styling based on conditional rendering of JSX and state variable changes.
* Regular Expression
The project uses regular expressions to validate user input, enforcing rules for a valid email address, snippet name etc.


# 3. Future Features To Implement
* Username validation to mimic login, so that a user can only edit her own comment or snippet.
* Grey out username when editing a snippet or comment, to enforce the rule that a username associated with a snippet or comment cannot be changed.
* Implement ‘to collect’ feature in snippet view. Similar to ‘like’ feature popularised by social media
* Implement offcanvas effect for the snippet filter control
* Display a completion message to show the user when a Create/Update/Delete action is performed. E.g. when a user confirms the deletion, app shows a message prompt saying ‘snippet is successfully deleted’. 
* Display server side error messages to frontend users in React.
* Implement a user view, where a user can log in and see her comments, her collected snippets etc.
* Change from hard-coding theme/occasion/type/length selection in snippet view to dynamic update based on category collection in MongoDB, such that whenever a new category document is created in MongoDB category collection, the snippet form in React auto-populates the new category option as a selection value. 

# 4. Testing & Test Cases
Test Case Description | Result
----------------------|-----------
To test the website is mobile responsive, that snippets in accordion display, categories in card display and nav bar resize according to the viewing device | pass
The single-page application changes display according to user interaction on the navigation menu, while staying on the same HMTL page | pass
User is able to create/update/delete snippet and user input is validated at the frontend and backend. There is immediate prompt to the user when any input does not fulfill the data field requirements. | pass
User is able to create/update/delete comments and user input is validated at the frontend and backend. There is immediate prompt to the user when any input does not fulfill the data field requirements. | pass
Any changes made by the user, once validated by both frontend and backend rules, are immediately updated in DB. | pass
Any changes made by the user, once validated by both frontend and backend rules, are immediately updated and displayed in UI.  | pass
User is able to search snippets by filtering any of the categories available. | pass
User is able to search snippets by any words in the snippet title or snippet content. | pass
Express server is able to expose different API endpoints for search, update, delete and insert. | pass
Express server is able to validate parameters and body of API requests, and respond with relevant error messages for invalid data, or perform CRUD at DB for valid data. | pass

# 5. Known Bugs
* There are several un-intuitive designs which are de-prioritized due to the compressed timeline. There are detailed out at the section 3 for future improvements. 

# 6. Deployment
* The React app is deployed in Netlify: https://cocky-morse-b2d9a6.netlify.app/. 
* The Express app is deployed in Heroku: https://sfw-express.herokuapp.com

# 7. Credits and Acknowledge
## Credits
* Picture sources for this project:
* https://time.com/14047/what-10-things-should-you-do-every-day-to-improve-your-life/
* https://stickybranding.com/smart-dedicated-and-hard-working-are-not-differentiators/
* https://www.happiness.com/magazine/science-psychology/benefits-of-kindness/ 
* https://www.shrm.org/resourcesandtools/hr-topics/compensation/pages/incidental-bonuses-alternative-rewards.aspx
* https://www.entrepreneur.com/article/240700
* https://www.verlingue.co.uk/news/bonus-sacrifice-arrangement-how-to-provide-a-cost-efficient-reward-to-your-employees-225/
* https://nationaltoday.com/national-fun-at-work-day/ 
* https://www.reddit.com/r/memes/comments/aslhl4/definitely_not_safe_for_work/ 
* https://www.vectorstock.com/royalty-free-vector/happy-smiling-people-having-fun-young-men-vector-25098181 
* https://www.howtogeek.com/438957/what-does-nsfw-mean-and-how-do-you-use-it/ 
* https://chrome.google.com/webstore/detail/quotes/napnlheijpokljocbmigochahnlakhbp
* https://blog.arkadin.com/en/the-business-case-for-laughter-why-humor-is-key-to-success/
* https://www.coe.int/en/web/committee-on-combatting-hate-speech/-/full-composition-of-the-new-expert-committee-on-combating-hate-speech-announced?fbclid=IwAR15r1fNDhawGtGMHMTngYaHhc8f-ASYmf_4S3yJkX72DvBfrnMhhErxb5M
## Acknowledgement
This project would not be possible without the generous support and timely guidance from the following individuals from Trent Global College:
### Paul for his highly comprehensible web development course and teaching, magical touch on problem-solving.
### Chen Yun, Haryati and John for their vast knowledge on all key technologies used in this project, generous support in troubleshooting and timely advice.
### Alex for his constant encouragement and course coordination during the pandemic.
### All fellow learners from batch 14 for your camaraderie, for inspiring me to do better and work harder, for pointing me to quick fixes & tips, and most importantly, for the great company in this learning journey. 