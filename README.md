# React-marfeel-test Sofía Rodríguez

This project is my technical challenge for Marfeel. The goal of the test is the following:

```
The main goal of this tech test is to create a client side web application that reproduces the screenshot on the previous page. 
We will evaluate the client side code and the criteria will be based mainly on: 
● Clean, maintainable, easy-to-read and unit tested code 
● Good architectural practices 
● Good management of component styles 
We will check by relevance: 
● Produce a reusable component 
● Produce a reliable and unit tested code 
● There's a clear separation of concerns 
● Good use of libraries 
```

This is a CRA 

## Features of the app

- [X] Customizations of the UI from a mocked API
- [X] Header with sections
- [X] Sections hidden on scroll
- [X] Hamburger Menu (with UI changes on scroll)
- [X] Articles (title + description + image) 
- [x] Lateral menu

## Setup

1. Clone the repo
```
git clone https://github.com/sofiaromorales/react-marfeel-test.git
cd react-marfeel-test
```
2. Install packages
```
npm install
```
3. Open a new Terminal tab and run the web server
```
npm start
```
4. App should open in the browser at `localhost:3000`

## Testing
Implemented with Jest and React Testing library

1. Open command line and cd to project
2. Run `npm run test`

The test resides in
```
|_  src
    |__ tests

```

## API (Mock)
All the data is being fetched from a mocked API using [json-server](https://www.npmjs.com/package/json-server)

The data fetched is
- Customizations
- Articles
- Sections

The json resides in
```
|_  api
    |__ mocks
        |__ mockAPI.json

```
And the endpoints are
- `http://localhost:3001/api/mocks/header`
- `http://localhost:3001/api/mocks/articles`
- `http://localhost:3001/api/mocks/sections`

## Libraries and packages used

- `sass` as a css preprocesor
- `json server` for mocking the API
- `testing-library` for implementing the tests

## Considerations

1. App only tested for Chrome
2. SSR considered but not implemented due to the need FOR backed development
3. Any component library was used for the development of this app, all the styles can be found on the `styles` folder
4. The app has to be run in a local environment. Deployment of the app is not available


### **Thanks Marfeel 💜**
**Developed by Sofía Rodríguez**
