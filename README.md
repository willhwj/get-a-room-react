# TGCAssignment3

# React and Backend Framework Project – 'Get-A-Room Booking Engine'

## Context
This project develops a mobile-responsive web-based booking engine called 'Get-A-Room', for consumers to book private rooms on hourly basis, mostly for the purpose of having quiet & comfortable space to work. It also builds a backend portal for staff working at this room rental company to load room types, timeslots and check bookings.

The idea was conceptualized upon seeing many popular family KTV outlets going bust during this prolonged pandemic of nearly 2 years. A few of such family KTV chains are pivoting to shared-office space with private rooms for hourly rentals, but they are barely surviving due to lack of digital skills in navigating this drastic transition. One of their pain points is lack of online booking system. The KTV outlet I often visited in the north of Singapore relies on visitors to the store to check on availability over the counter or past customers calling them to inquire. Both are very outdated and inefficient. This project aims to provide an integrated customer-facing booking engine and administrative backend portal for such KTV business pivoting to hourly room rental business.

As the project is produced in 14 days (5 weekends and 4 additional off-days), primary development effort is focused on the functionalities and key user flows. This is due to both sheer practicality of very short timeframe and also a conscientious effort to prioritize the development of a functional system for immediate usage. 

## Demo
A live website of the administrative portal for store staff can be found here: https://get-a-room-hwj.herokuapp.com/
consumer-facing booking engine can be found here: https://gracious-cori-a0b9cb.netlify.app/ 

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
Following closely the objectives of this project (to allow staff to manage room slot inventory, to allow consumers to book room slots), these user goals were identified and served as guidelines for the features that were implemented.

User Stories | Features
-------------|-------------
Staff can create account in the admin portal, log into existing account at the admin portal and create room slots. | Staff can click on registration to create an account and log into her account. Once logged in, staff user can create room slots by different criteria.
Staff can search slots by room types, date, timings and amenities.  | Once a staff user is logged into her account, she is able to search for the relevant slots by the specified criteria.
Staff can create new rooms and new room types. | Once a staff user is logged into her account, she is able to create new rooms under the specified room type. She is also able to create new room types
Staff can create new amenities and assign to room types. | Once a staff user is logged into her account, she is able to create new amenities and assign those amenities to respective room types.
Consumers can check the availability and price instantly without creating any account in the booking engine. | Consumers can see available room types at different timings and dates, as well as their respective prices, immediately at the booking engine, without any login. 
Consumers can filter timeslots. | In the booking engine, consumers can filter slots by date, timings and room types, without any login.
Consumers must register an account and log into their account in order to make a booking. | Non-logged-in consumers can select products into cart. To confirm a booking, the consumer must register for an account and must be logged in.
The booking engine collects payment immediately at the time of booking. | When a logged-in consumer confirms to book, she is redirected to stripe hosted payment page to make payment. Payment is collected by stripe on behalf of the business immediately.
Logged consumers can check their bookings. | When a consumer is logged into her account at the booking engine, she can access all her bookings made in the past.
Both logged-in consumers and non-logged-in consumers can send in enquiries or feedback. | A contact-us form is provided in the booking engine, which can be submitted without any login.
Common data access use cases are abstracted as a data access layer for easy code re-use. | This is only partially fulfilled, as some routes rely on a data access layers and some routes directly access SQL DB for CRUD operations.

## (ii) Project Scope
The project consists of a backend framework built on top of SQL database, express server, caolan form, HBS template engine. This backend framework powers the admin portal for store staff and the APIs consumed by the consumer-facing booking engine. 

The product sold is hourly room rental, which is the combination of room types (a collection of individual rooms with similar characteristics) and timeslots. It's ultimately selling perishable space with limited inventory per timeslot.

## (iii) Design
The bootstrap framework was used in for the front-end development of the website as it allows for mobile responsive design and easy layout component.

The layout of the booking engine is straightforward and interactivity is intuitive. Any user action is generally achieved within 3 clicks. Design and aesthetics of the booking engine are not considered in the current phase. How to make the booking engine visually compelling will be looked at in subsequent phase, including colors and topography.


# 2. Technologies Used
* React, React-Router-Dom, Context API, other React Hooks 
The consuming-facing booking engine is built using React and a few plugins like React-Router-Dom, Context API, useState, etc. The entire app is built on functional components.
* Bootstrap and React Bootstrap
The project uses native Bootstrap and its React version to structure the layout of the consumer-facing booking engine (e.g. Navbar, Accordion, Card, Offcanvas etc.) and ensure the booking engine is mobile responsiveness.
* Express
The project uses Express to run backend server, creating multiple routings and exposing them as API endpoints for the frontend React app to consume. Express server then validates the API requests, and if valid, performs API calls to SQL database to execute CRUD operations. 
* SQL
The project uses SQL as its database technology. At local server, it's run as mysql; upon deployment at Heroku, it's on postgresql. 
* AJAX
The project uses AJAX extensively to perform CRUD from multiple API endpoints exposed by Express server. Similarly, Express server also perform CRUD to MongoDB using AJAX calls.
* HBS Template Engine
The staff-facing administrative portal is built using HBS template engine and a few HBS helper functions.
* Caolan Form
The staff-facing administrative portal uses Caolan Form plugin for form building and validation.
* DB-migrate
database is constructed with DB-migrate in Express server
* Bookshelf ORM
Object relational modelling is done via Bookshelf

# 3. Future Features To Implement
* Implement a more smooth account registration and login flow at React booking engine. Right now the login feature is implemented in a fragmented way, using a collection of context API, local storage of JWT access token, useEffect hook. As a result, right now sometimes the logged-in state takes time to sync and may need a second click or page refresh to sync the state. 
* Add CSS styling and layout optimization to the React booking engine.
* Display server side error messages to frontend users in React.
* Implement a user view, where a user can log in and see her comments, her collected snippets etc.
* Shopping cart table in DB is currently not in use. One enhancement is to use this table to store shopping cart for logged-in consumer, so that she can pick up again her cart and continue checking out.
* To display the current order details immediately upon successful payment at Stripe. Right now Stripe redirects to a generic page, which then ask consumer to go to My Profile page to see all orders, including the current order. To display order details in booking engine immediately after successful payment at Stripe, an order must be created first as tentative status with order ID stored in React before redirecting to Stripe for payment
* To handle non-successful-payment scenarios at Stripe, such as failure, or session expiry after 24 hours
* To enhance admin portal such that staff can search all orders
* To enhance admin portal such that staff can create rooms and timeslots more efficiently

# 4. Deployment
* The React app (consumer booking engine) is deployed in Netlify: https://gracious-cori-a0b9cb.netlify.app/  
* The Express app (staff admin portal) is deployed in Heroku: https://get-a-room-hwj.herokuapp.com/

# 5. Credits and Acknowledge
## Credits
* Picture sources for this project:
* https://www.turbosquid.com/3d-models/office-room-model-1346539
* https://www.iconfinder.com/icons/2577133/boss_computer_drinking_employer_office_room_sitting_icon  
## Acknowledgement
This project would not be possible without the generous support and timely guidance from the following individuals from Trent Global College:
### Paul for his highly comprehensible web development course and teaching, magical touch on problem-solving.
### Chen Yun, Shun and John for their vast knowledge on all key technologies used in this project, generous support in troubleshooting and timely advice.
### Alex for his constant encouragement and course coordination during the pandemic.
### All fellow learners from batch 14 for your camaraderie, for inspiring me to do better and work harder, for pointing me to quick fixes & tips, and most importantly, for the great company in this learning journey. 