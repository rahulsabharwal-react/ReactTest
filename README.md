# ReactTest

 This repository has 2 projects. 
 - reactApp - This is react application.
 - server - This is node express api application


## How to run the API
 - In your terminal, navigate to the api directory.
 - Run npm install to install all dependencies.
 - Run npm start to start the app.
 - Navigate to http://localhost:4000 to verify node app is running. You should see a message in browser **Welcome to React Test API!**
 
## How to run the Client
 - In another terminal, navigate to the client directory.
 - Run npm install to install all dependencies.
 - Run npm start to start the app
 - Navigate to http://localhost:3000 to visit the Subscribe form
 
 ## reactAPP
 
 #### Libraries used in the project
  - **React-Redux** - React components read data from a Redux store, and dispatch actions to the store to update data.
  - **Formik** - user form handling
  - **Yup** - for client validation
  - **axios** - for rest api calls
  - **Webpack4** - for bundling support. For more info visit my [Github repo - Webpack4](https://github.com/amicalrahul/Webpack4Migration)
  
   #### Application Structure
 - **components** - all react components go into this folder. Every feature will have its own foder. and, the feature folder will have the react components.
 - **store** - redux store is placed in this folder 
 - **reducers** - redux reducers are placed in this folder. Every feature will have its own reducer.
 - **actions** - all the actions from components are placed in action.js files.
 - **api** - this folder will have api calls 
 - **constants** - all application level constants are saved in this folder
 - **css** - style sheet are placed in this folder
 
 
 ## server

  - This is node express application. This app exposes the end point for react app to submit the user subscribe form and then further calls the [reacttestform - external api](https://ckzvgrbymezqegu.form.io/reacttestform/submission) to submit the form.


## This application needs Node 9.10 or higher version to run.
  
