# Turbo-Parakeet 

Turbo-Parakeet is an application designed for the Texas Tech University Cognitive Anthrozoology lab by a first-year Ph.D student. The concept is an interface between ordinary people and an API that enables users to analyze images of faces for emotion, managing to be both lightweight and simple to use. 

Create React App, Node.js, and Express will be used to create a serverless Netlify-based application that allows a user to login, upload files (images of faces for now), pin those files to IPFS or alternatively serve them from directories at the deployment URL, retrieve the or URL of each file, and then, at a rate of 20/minute or slower, send each image to the SmartClick API (or other API in the future) and display the results returned from SmartClick to the user. The results will appear in a modal and a CSV file that the user can download. After the user logs off, the pins to IPFS documents are removed and the server cache is cleared - the application is reset and ready for the next user. No personal data has been compromised or leaked. 

## Relevant technologies:

Create React App: sets up React front end
Express: middleware
Node.js: Node backend
IPFS: image storage, image URL/CID generation
SmartClick Emotion Detection API: Reads emotion in images
(additional API): does something similar but hits non-SmartClick endpoint etc


# File Upload App with Netlify Serverless Functions
This project is a file upload application built with React and Netlify Serverless Functions. It allows users to upload files from their local machine, which are temporarily stored on the server during processing and then automatically deleted after the operation is complete. This approach ensures that sensitive data is not persistently stored on the server, enhancing security and compliance with regulations like HIPAA or IRB standards.

# Project Overview
The application is designed to provide a secure and compliant way of handling file uploads, particularly for sensitive data or applications that require strict data handling and disposal practices. By leveraging Netlify's serverless architecture and ephemeral file storage, the risk of data breaches or unauthorized access to the uploaded files is minimized.

The client-side application is built with React and handles the user interface for file selection and upload. The server-side functionality is implemented using Netlify Serverless Functions, which are stateless and automatically scale based on incoming requests.

## Features
Secure File Uploads: Files are uploaded over an encrypted HTTPS connection, ensuring secure data transmission.
Ephemeral File Storage: Uploaded files are stored locally within the Netlify Function's instance and are automatically deleted after processing, preventing persistent storage on the server.
Authentication and Authorization: Netlify Functions can be configured to require authentication and authorization for access, ensuring that only authorized users or applications can upload files.
Audit Logging: Netlify provides logging capabilities for functions, enabling audit logging and monitoring of file upload activities.
Compliance-friendly: By ensuring that uploaded files are not persistently stored and are automatically deleted after processing, the application can potentially comply with regulations like HIPAA or IRB standards that require strict data handling and disposal practices for sensitive information.


# Getting Started
To get started with the project, follow these steps:

Clone the repository: git clone https://github.com/ipfsnut/turbo-parakeet.git
Navigate to the project directory: cd turbo-parakeet
Install dependencies: npm install
Start the development server: npm start
### Deployment
The application is designed to be deployed to Netlify, which will automatically detect and deploy the Netlify Serverless Functions along with the client-side application. Follow the Netlify documentation for deployment instructions.

## Contributing
Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
