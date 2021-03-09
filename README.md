# rest-api-heroku
## Basic Rest API supporting CRUD operations, built with Node.js/Express/MongoDB & deployed to Heroku

## Routes:
### The default URL:
- https://restapi-express.herokuapp.com/  

### Fetching all posts:
- https://restapi-express.herokuapp.com/posts  
Supported Operations: **GET**  

### Fetching a specific post by providing ID:
- https://restapi-express.herokuapp.com/posts/:id  
Supported Operations: **GET, POST, DELETE, PATCH**

## Errors/Bugs met during development/deployment:
- The app couldn't start because Heroku server didn't know where is the server.js file is. 
Fixed by creating a Procfile in the root directory (at the same level with package.json) and adding the following line:
`web: node src/server.js`

More on that: https://devcenter.heroku.com/articles/procfile

- Heroku couldn't load environment variables, because the .env file on my machine, even when exposed to the repo, wasn't seen & used by heroku.
Solved by setting environment variables using heroku CLI: 
`heroku config:set ENV_VARIABLE_NAME=ENV_VALUE`  
More on that: https://devcenter.heroku.com/articles/config-vars#accessing-config-var-values-from-code

- The API started crashing after adding environment variables into the code:  

**Heroku Logs**:
`
2021-03-09T03:54:23.291218+00:00 app[web.1]:     at Module._compile (internal/modules/cjs/loader.js:1063:30)
2021-03-09T03:54:23.291218+00:00 app[web.1]:     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
2021-03-09T03:54:23.291218+00:00 app[web.1]:     at Module.load (internal/modules/cjs/loader.js:928:32)
2021-03-09T03:54:23.291219+00:00 app[web.1]:     at Function.Module._load (internal/modules/cjs/loader.js:769:14)
2021-03-09T03:54:23.291224+00:00 app[web.1]:     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12) {
2021-03-09T03:54:23.291225+00:00 app[web.1]:   code: 'MODULE_NOT_FOUND',
2021-03-09T03:54:23.291225+00:00 app[web.1]:   requireStack: [ '/app/src/server.js' ]
2021-03-09T03:54:23.291226+00:00 app[web.1]: }
2021-03-09T03:54:23.395243+00:00 heroku[web.1]: Process exited with status 1
2021-03-09T03:54:23.492347+00:00 heroku[web.1]: State changed from starting to crashed
`

The solution was found on stackoverflow by changing dotenv module from a dev dependency to a regular one in package.json:

More on that: https://stackoverflow.com/questions/22422883/heroku-deploy-error-cannot-get-node-app-running-after-deploy-cannot-find-modu
