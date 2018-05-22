# User tracker client

This is an application that consume an API to track users. The application has the following features:

- Add users.
- Add connections between users.
- List users connected with a given user.
- Show the percentage of user connected about the number of users.

## Tech considerations
To make this app, I use Angular 6. This framework provide many tools to build web applications and fast development.

Bootstrap 4 has been chosen to add style to HTML.

## Installation (optional)
This section is optional, due to you only need it if you want to make any change.

- Install Node.js 8+
- Install Angular CLI.

## Deploy
To deploy this applicacion, copy the content of *dist/ClientTrackerUser* folder to a web server that support statics files. A quick way its type the following commands:

- `cd dist/ClientTrackerUser`
- `python -m http.server`

These instructions start a local server to serve static files on 8080 port. You want to use the server of your preference.

## Usage

The application has four views:

- Add user: Add a user to database. You only need to provide a unique username and click to the *Add user* button.

- Add connection: Add a connection between two existing users and click to *Add connection* button.

- User connections: Show a list of all users connected with the given user. To use this feature, type and existing user on the navbar input.

- Stats: Show a table with all users and the connections percent with other users.