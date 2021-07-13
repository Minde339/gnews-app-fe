# GNEWS App

_GNEWS App_ is a web application that uses "GNEWS" API to search, list and preview articles, while logging user actions in the backend.
Live application example: http://18.197.112.132/

## Table of contents

- [Setup](#setup)
- [Features](#features)
- [Technologies](#technologies)

## Setup

#### 1. Necessary resources

1. For proper app functionality first step is to clone and configure backend server according to instructions from [this repository](https://github.com/Minde339/gnews-app-be).
2. Install [node.js](https://nodejs.org/en/) to be able to use npm commands.
3. Register to https://gnews.io/register, ADD .env file in gnews-app-fe/src folder with REACT_APP_GNEWS_API_KEY=<YOUR API KEY>

#### 2. Starting application

```
# Clone this repository
$ git clone https://github.com/Minde339/gnews-app-fe.git

# Go into the repository folder
$ cd gnews-app-fe

# Install dependencies
$ npm install

# Run the app
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view app in the browser.

## Features

- The application reads data from ('https://gnews.io/api/v4/search?q=example&token=API-Token').
- Data retrieved is shown as seperated Articles. (Limited Value to 9 Articles)
- Article Description is truncated with ellipsis if description reaches more than 125 characters.
- Search Input is validated to allow only alphanumeric + space characters up to 40 characters.
- Searched and Clicked Article values are sent to Backend as seperated requests.

## Technologies

- React 17.0.2
- React-Bootstrap 1.6.1
- axios 0.21.1
