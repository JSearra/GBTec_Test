# GBTec

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Functionality
The web application provides the following functionality:

Photo Search: Users can enter a search term and click the search button to retrieve up to 10 photos related to the search term. If there are more results, users can click the "Load More" button to display additional results.
Photo Details: Users can click on a photo to view more details, including the photo's description, author, and download link.

## Technical Implementation
The Photo Search web application was built using the following technologies:

Angular
Bootstrap
Unsplash API
TypeScript

## Architecture
The Photo Search web application follows the following architecture:

Components: Angular components are used to encapsulate the application's views and behavior. The application contains two main components: the SearchComponent for the photo search functionality and the DetailsComponent for displaying photo details.
Services: Angular services are used to encapsulate the application's business logic and to communicate with external APIs. The UnsplashService is used to call the Unsplash API to retrieve photo data.
Models: TypeScript models are used to represent photo data retrieved from the Unsplash API.

## Installation
To install and run the Photo Search web application, follow these steps:

Clone the repository to your local machine.
Install the required dependencies using the following command: npm install.
Start the web application using the following command: ng serve.
Open a web browser and navigate to http://localhost:4200