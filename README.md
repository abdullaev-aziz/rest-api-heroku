# rest-api-heroku
## Basic Rest API supporting CRUD operations, built with Node.js/Express/MongoDB & deployed to Heroku

## Routes:
### The default URL:
- https://restapi-express.herokuapp.com/ 
### Fetching all posts:
- https://restapi-express.herokuapp.com/posts
### Fetching a specific post by providing ID:
- https://restapi-express.herokuapp.com/posts/:id

## Errors/Bugs met during development/deployment:
- The app couldn't start because Heroku server didn't know where is the server.js file is. 
Fixed by creating a Procfile in the root directory (at the same level with package.json) and adding the following line:
`web: node src/server.js`

More on that: https://devcenter.heroku.com/articles/procfile

- Heroku couldn't load environment variables, because the .env file on my machine, even when exposed to the repo, wasn't properly used by heroku.
Solved by setting environment variables using heroku CLI: 
`heroku config:set ENV_VARIABLE_NAME=ENV_VALUE`  
More on that: https://devcenter.heroku.com/articles/config-vars#accessing-config-var-values-from-code

App chashes after connecting to GitHub