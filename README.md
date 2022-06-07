# Habarci

- [Setting Up](#setting-up)
- [User Stories](#user-stories)
- [Components](#components)
    - [Main Components](#main-components)
    - [Features](#features)
- [Architecture](#architecture)
    - [Design Diagrams](#design-diagrams)
    - [Processes](#processes)
- [Dev Ops](#dev-ops)
- [System Testing](#system-testing)
- [Appendix](#appendix)



## <a name="setting-up"></a>Setting Up
### Setting up the project on local machine **(example using Mac OSX):**

**Prerequisites:**

- An IDE, eg. Visual Studio Code
- Python 3.7
- pip (Python package installer) available for download : [https://pip.pypa.io/en/stable/installing/](https://pip.pypa.io/en/stable/installing/)
- Node.js(for npm package manager) download at: [https://nodejs.org/en/](https://nodejs.org/en/)
- Conda, for managing virtual environments, download at : [https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#)
- MongoDB, download at : [https://docs.mongodb.com/manual/administration/install-community/](https://docs.mongodb.com/manual/administration/install-community/)


**Setting up Project:**
- Open the project in IDE(VSCode)
- Open Terminal(for MacOS)
- Start mongoDB
  - Run 
  `brew services start mongodb-community@4.2`
- To start the **frontend** server:
  - cd into /frontend directory
  - Run `npm install` (This will install the dependencies required for project to run)
  - Run `npm start`
  - Once you see that it has compiled successfully means the server is active



Next, open a New terminal with the + button on the top right hand corner

- To start the **backend** server:
  - cd into /backend directory
  - Set up virtual environment (so that pip packages will be contained in the environment)
    - Run `conda create -n myenv python **=** x.x anaconda`(replace x.x with python version, in our case python 3.7)
    - This will create a virtual environment named myenv. Run `conda env list` to check if the environment is created. You should see an environment myenv.
    - Next we will activate the virtual environment by running `conda activate myenv`

You should see a (myenv) at the front:



- After our virtual environment has been set up, we need to install our requirements for the backend.
  - Run `pip install -r requirements.txt`
- To start the backend server:
  - Run `python wsgi.py`
  - You should see something like this:


Now that the frontend and backend servers are running you may test the application out with your own google accounts.

Note: App runs on local database as this app is in development mode.



## <a name="user-stories"></a>User Stories

**High priority \> Must Have: \* \* \***

**Medium priority \> Should Have: \* \***

**Low priority \> Good to Have: \***

**A User is a general term for any one who uses our application, this includes a user that needs parcel delivered as well as deliverers.**

| **Priority** | **As a...** | **I want to be able to ...** | **So that I can ...** |
| --- | --- | --- | --- |
| \* \* \* | Sender | Add a delivery job | Have my parcel delivered by a deliverer |
| \* \* \* | User | Login securely | Keep my account safe |
| \* \* \* | User | View my job history | Keep a track record of all my previous transactions and jobs |
| \* \* \* | User | View my ongoing jobs | Keep a track record of the status of my ongoing jobs |
| \* \* \* | User | View my personal information | Ensure my information is correct |
| \* \* \* | Deliverer | View a list of all the jobs available | Accept jobs from the list |
| \* \* \* | Deliverer | Search and filter through the list of jobs | Find the jobs that is convenient and suitable for me |
| \* \* | Sender | Cancel a job i posted if it has not been accepted | Remove a job if i no longer need it |
| \* \* | Sender | View details of deliverer who accepted the job I posted | Keep in contact the deliverer |
| \* \* | Sender | Have a confirmation that my delivery was complete | Know when the delivery was completed |
| \* \* | User | Exchange reviews after a job | Provide my feedback based on the service provided|
| \* | Administrator | Warn or ban users who are irresponsible on the platform | Prevent abuse of the application |
| \* | User | Communicate with the other party | Keep in contact with the other party should there be any issues |
| \* | Sender | Edit a delivery job&#39;s details if it has not been accepted | Change the details should there be any mistakes |

_Note: all the low priority features (features that we deem non vital for normal use of the application), will be mentioned in the section [Possible Future Implementations](#future-features)

## <a name="components"></a>Components
### <a name="main-components"></a>Main Components
Our web-application&#39;s frontend is made up of these main components:

- Landing Page
- About Page
- Dashboard
- Job Listings Page
- Jobs Accepted Page
- Jobs Posted Page
- Schedule Job Page
- User Information Page
- View Feedback Page

### <a name="features"></a>Features

A **Web-application** that supports three main features. The user will be able to view their information on the profile tab, including their jobs accepted, jobs posted. Secondly, the user will be able to view all the job listings and accept jobs that they want to take up. Lastly the user will be able to post jobs up for delivery.


a. Login to account

- New User Sign Up
- Log out

b. User Profile

- User information
  - Displays user&#39;s name and email address
- Jobs Accepted:
  - Job History
    - List of all past jobs and its information
    - Filter search:
      - Parcel size (small/medium/large/extra large)
      - Pick up Location
      - Destination Location
      - Fragile?
    - Status: Completed
  - Ongoing Jobs
    - List of all jobs where parcel picked up and on the way
      - Button to mark the job as complete.
      - Status: On the Way
    - List of all jobs where parcel has not been picked up
      - Button to click when the parcel has been picked up.
      - Status: Accepted(not picked up)
    - Filter search:
      - Parcel size (small/medium/large/extra large)
      - Pick up Location
      - Destination Location
      - Fragile?
      - Status
      
- Jobs Posted:
  - Job History
    - List of all past jobs and its information
    - Filter search:
      - Parcel size (small/medium/large/extra large)
      - Pick up Location
      - Destination Location
      - Fragile?
    - Status: Completed
  - Ongoing Jobs
    - List of all jobs where parcel picked up and on the way
      - Status: On the Way
    - List of all jobs where parcel has not been picked up
      - Status: Accepted(not picked up)
    - Filter search:
      - Parcel size (small/medium/large/extra large)
      - Pick up Location
      - Destination Location
      - Fragile?
      - Status
  - Pending
    - List of all jobs that have not been accepted by a deliverer
    - Filter search:
      - Parcel size (small/medium/large/extra large)
      - Pick up Location
      - Destination Location
      - Fragile?

c. Job Listings

- A list of jobs available to be accepted
- Filter search:
  - Parcel size (small / medium / large / extra large)
  - Pick up Location
  - Destination Location
  - Fragile?

d. Schedule a new job

- A form to fill in the details of the job:
  - Parcel size (small/medium/large/extra large)
  - Pick up Location
  - Destination Location
  - Fragile?
  - Sender&#39;s information
  - Recipient&#39;s information
  - Comments
- Form validation (Required fields)


#### <a name="future-features"></a>**Possible Future Implementations:**

1. Integrating our own user database to store information about a user. Currently our user data is managed by Auth0, by using our own user database we will be able to store more information about a user (ie contact number and address). This will allow us to extend more features like auto-filling their contact number and address when they are scheduling jobs.
   - Implementation: API call to user DB when user logs in. Checks if user is a new user, if new user

2. Notification alert when status of the job changes (eg. when a deliverer accepts a job, when a deliverer marks the job as complete, the deliverer left feedback for the sender etc.) This way users will be notified immediately on any updates to their jobs.
    - Implementation: eg. Look into Telegram API to send Telegram message as a notification

3. Payment System to give deliverers extra incentive when helping to deliver a parcel.


### <a name="processes"></a>Processes

**Tech Stack**

Frontend User Interface (Client side):

- HTML/CSS/Javascript (Languages)
- React.JS (Library)

Backend (Server side):

- Python (Language)
- Flask (Python framework)
- MongoDB (Database)

Extras:

- Auth0 - for users to log in to the application and authentication
- GmailAPI - sends an email to the user when delivery is complete

**Backend API Documentation:**

[https://docs.google.com/document/d/1_4IjvSwAHokij3ccYTrRX2Z84ONMiN84iqqYPeFY04U/edit?usp=sharing](https://docs.google.com/document/d/1_4IjvSwAHokij3ccYTrRX2Z84ONMiN84iqqYPeFY04U/edit?usp=sharing "https://docs.google.com/document/d/1_4IjvSwAHokij3ccYTrRX2Z84ONMiN84iqqYPeFY04U/edit?usp=sharing")

**Frontend Development:**

**Auth0:**

We decided to use Auth0&#39;s services as it can add authentication and authorization services to our application. Auth0 is flexible, secure and scalable. Auth0 is able to provide social connections to other social platforms like facebook, which can be implemented in the future.

**ReactJS**

We decided to use ReactJS because ReactJS is lightweight, and flexible.

We used npm package manager for JavaScript which is the default package manager for the JavaScript runtime environment Node.js. This allows us to specifically install dependencies required for our project.

Dependencies installed:

- &quot;@auth0/auth0-spa-js&quot;: &quot;^1.8.2&quot;
  - For login and authentication.
- &quot;axios&quot;: &quot;^0.19.2&quot;
  - To make API requests (CRUD functions).
- &quot;bootstrap&quot;: &quot;^4.5.0&quot;
  - CSS Framework for styling components.
- &quot;formik&quot;: &quot;^2.1.4&quot;
  - For creating forms.
- &quot;react-bootstrap&quot;: &quot;^1.0.1&quot;
  - ReactJS framework, with components prebuilt.
- &quot;react-bootstrap-table-next&quot;: &quot;^4.0.3&quot;
  - To implement a table component
- &quot;react-bootstrap-table2-filter&quot;: &quot;^1.3.3&quot;
  - To implement filter search function with react-bootstrap-table-next
- &quot;react-bootstrap-table2-paginator&quot;: &quot;^2.1.2&quot;
  - To implement pagination for react-bootstrap-table-next
- &quot;yup&quot;: &quot;^0.29.1&quot;
  - For validation(form input)

**Issues faced:**

Auth0:

We had trouble implementing the authorization with the backend to make API requests. Console was showing an error &quot;Uncaught (in promise)&quot; in react-auth0-spa.js, which was obtained from the Auth0 tutorial. This error was caused by including the API audience identifier in our auth\_config.json file. However it was strange that the error was gone after a day. We concluded that it could have been an issue with the server on Auth0&#39;s side.

**Backend Development:**

**Python Flask**

We chose to use Python for the backend for ease of future implementation with AI components for a recommendation engine for jobs. We are using Flask for its extensibility and flexibility and it is relatively lightweight compared to django.

**MongoDB**

We choose to change the database to mongoDB due to ease of use with Python and also flexibility of the documents stored.

Python Dependencies Installed:

- Flask
  - To create a backend server for the frontend to call
- Pymongo
  - Connection layer between flask server and MongoDB
- Python-jose-cryptodome
  - Decoding of JWT returned by Auth0
- See requirements.txt in the folder for packages version information

## <a name="dev-ops"></a>Dev Ops
### Deployment to remote machine(example using Heroku)

**Prerequisites:**

- git
- A Heroku Account
- A Mongo Atlas account
- Heroku CLI (install from: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli))


**Setting for up deployment:**
- To set up DB
  - Login to mongo atlas and create a cluster, inside the cluster create a database and inside the database create a collection called jobs
- To deploy the **backend** API service:
  - Open a terminal
  - cd into /backend directory
  - Run ```heroku login -i``` and login to your heroku account
  - Run ```heroku config:set DB_USERNAME=<your_db_username> DB_PASSWORD= <your_db_password> DB_NAME=<habarci> CLUSTER_URL=<your_cluster_url>```
  - Cluster url highlighted in the example below
  - Run heroku create <name_of_your_backend_API>
  - Run git push heroku master
- To deploy the **frontend** UI:
  - cd into the /frontend directory
  - Run heroku create <name_of_your_app> --buildpack mars/create-react-app
  - Run git push heroku master
  - Your app is now deployed!!

## <a name="appendix"></a>7. Appendix
### <a name="appendixA"></a>**Appendix A - Gmail API Integration:**

1. Before integration you will need an API credentials file from Google. Follow step one from this link and click on enable Gmail API. This will result in you getting a credentials.json file from Google.
2. Clear the folder backend/src/creds (relative to the root folder) and put the credentials.json file there.
3. Run the backend of the app, it should pop open a browser that will prompt you to log in to google. The account that you log in with here will be the account that will be used to send out the confirmation email.
4. This flow will only need to happen once. If you need to change the account used to send out the email, delete the token.pickle file in backend/src/creds and run the backend of the app again.
5. NOTE: This generation of creds should only be done in development and the creds folder should be securely stored in deployment with proper access permissions set.
