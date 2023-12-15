# logs-example
# Set up

mkdir captains_log,
cd catpains_log,
create a new express app,
npm init -y,
npm i express,
code . ,
basic app code in server.js ,
nodemon,
mkdir models,
cd models,
touch logs.js,
cd ..  ,
mkdir views,
cd views,
touch Edit.jsx Index.jsx New.jsx Show.jsx,
cd ..  ,
touch .gitignore,
touch .env,
in .gitignore => .env and node_modules,
npm i jsx-view-engine react react-dom --save,
npm i dotenv,
npm i method-override

# New
create a newroute in your server.js- be sure to follow the Restful convention
just have it res.send('new')as the response for now
make a views directory
install jsx-view-engine react react-dom
touch views/New.jsx
Create the view, it should contain a form with the following:
formwith action="/logs"and method="POST"
inputtype text for a title
inputtype textarea for an entry
inputtype checkbox for shipIsBroken
inputtype submit
change your res.sendto res.renderthis view

# Create
create a createroute in your server.js- be sure to follow the Restful convention
just have it res.send('received')as the response for now
use and configure body-parserin your server.js(note, this package was once separate, but has been added back in to express more details)
check to make sure it works by changing the res.sendfrom a string to sending the req.body- it should send the data you inputted to your newform
upgrade your data
change the input of your checkbox to be true/false rather than on
now when you check your res.send(req.body)you should see true/false rather than 'on/off' - the rest of your data should stay the same

# Mongo
install mongoose and configure it in your server.js

# Logs Model
Create the logs schema
title: string
entry: string
shipIsBroken: Boolean (bonus: set a default to true)

Super bonus:

as a second argument to mongoose.Schema(), add { timestamps: true }

# Upgrade your Create Route
upgrade your code to create your log in MongoDB
have your route redirect to the show page after create

# Index Route
In server.jsmake an index route, be sure to follow the Restful convention
first, just test it by having it res.send('index')
Don't forget to fill out your Restful table!
create Index.jsxand change your res.sendto res.renderthis page
upgrade your route and jsx to render all the logs in your database, just make an unordered list of the titles for now
Add a link to the create page

# Show Route
Fill out your Restful table
In server.jsmake a show route, be sure to follow the Restful convention
create a mongo query and res.sendyour data as a string
upgrade your Index.jsxso that each title links to its show page
Create a Show.jsxand add HTML
show the title
show the entry
show whether the ship is broken or not
add a link back to the index page
bonus:
if you had added time stamps to your model, display the date the entry was created
upgrade your res.sendto a res.renderof your Show.jsx

# Delete Route
Fill out your Restful table
in your Index.jsx, add a delete form
install and configure method-override
upgrade your delete form to have the appropriate action and method
make your delete route in your server.js
make your delete route delete your log and redirect back to your index route

# Edit Route
Fill out your Restful table
in your Index.jsx, add a link to your edit route
create your edit route in your server.js
create your Edit.jsx
test it to make sure it works as expected (be sure to populate your form with your log's data)

# Update Route
Fill out your Restful table
upgrade yourEdit.jsxform to have the appropriate action and method
create your PUT route
First, just have it res.sendthe updated log and check it is as expected
change the res.sendto a res.redirectto your index page

# Router
mkdir controllers
touch controllers/logs.js
work on refactoring your code so your logs routes are in your controller file, rather than in server.js


# models/fruit.js- handles the getting the database connection and defining the fruit model (share of data)
# views/fruits/- this folder contains all our views/templates for our fruits
# controllers/fruit.js- creates all our routes which pull data from the model and sends them over to the templates