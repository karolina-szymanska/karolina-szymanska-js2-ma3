# JS2 Module Assignment 3

## Goal

This assignment will test the JavaScript concepts you have learned in this module.

## Brief

You will need to create a local Strapi instance for this assignment.

The focus is on the JavaScript code in this assignment, but as a frontend developer the user interfaces you develop should always be presentable and make sense.

You can use any UI library like Bootstrap for the assignment or use simple CSS styles.

Use modules where appropriate.

## Level 1

Create a login form that accepts a username and password.

When the form is submitted, add simple validation that checks that there is at least a value in each input.

If validation passes, make a request to your local Strapi API to login.

If the login is successful, store the returned JWT in localStorage and redirect to another page. It doesn't matter which page you redirect to.

If the login is not successful, display a message indicating that to the user.