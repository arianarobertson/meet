Meet App

Introduction

Meet App is a serverless Progressive Web Application (PWA) built with React. Utilizing a Test-Driven Development (TDD) approach, this app seamlessly integrates with the Google Calendar API to fetch and display upcoming events.

Objective

Create a serverless, progressive web application (PWA) in React following the test-driven development (TDD) approach, integrating with Google Calendar API to fetch and showcase upcoming events.

Context

Merging serverless computing and PWAs paves the way for modern web development, with perks like:

Serverless Advantages:

Backend-free upkeep
Elastic scalability
Optimal availability
Economical
PWA Advantages:

Immediate load times
Offline accessibility
Push alerts
Fluid design
Universal platform support
The Meet app is designed to curate events based on city inputs, with data visualization illuminating event distribution by location and popularity of event genres.

The 5 Ws

Who: Targeted at Meet app users – including peers, professionals, potential recruiters.
What: A PWA employing serverless architecture and sculpted through TDD.
When: Usable whenever users aspire to explore upcoming events in a chosen city.
Where: Seamless cloud hosting ensures both online and offline accessibility.
Why: To harness the power of contemporary cloud solutions, presenting unparalleled user experience via PWAs, and ensuring impeccable quality via TDD.

User Stories, Scenarios, and Acceptance Criteria

Key Features

Filter Events by City
Toggle Event Information
Dictate Event Quantity
Offline Functionality
App Shortcut Addition to Home
Visual Charts of Event Statistics

Filter Events by City:
As a user, I should be able to filter events by city, so that I can easily find and attend events in my preferred location.

Show/Hide Event Details:
As an event attendee, I should be able to show or hide event details, so that I can focus on the information that is most relevant to me and customize my event-viewing experience.

Specify Number of Events:
As a user, I should be able to specify the number of events displayed on a page, so that I can control the amount of information presented at a given time and tailor my browsing experience.

Use the App When Offline:
As a user, I should be able to use the app when offline, so that I can access event information even without an active internet connection, ensuring uninterrupted usage.

Add an App Shortcut to the Home Screen:
As a user, I should be able to add an app shortcut to my home screen, so that I can quickly access the app without navigating through multiple menus, improving convenience and accessibility.

Display Charts Visualizing Event Details:
As a data-oriented user, I should be able to view charts that visualize event details, so that I can quickly grasp trends, statistics, and key insights about events, enhancing my understanding and decision-making.

User stories

Feature: Event Filtering by City

  Scenario: User filters events by city
    Given the user is on the Events page
    When the user selects the "City" filter
    And chooses a specific city, such as "New York"
    Then the events displayed should be filtered to only show events in the selected city
    And the user should see a clear indication that the events are filtered by city

Feature: Show/Hide Event Details

  Scenario: User shows/hides event details
    Given the user is viewing the details of a particular event
    When the user chooses to hide the event details
    Then the event details should be hidden from view
    And the user should be able to easily show the event details again

Feature: Specify Number of Events

  Scenario: User specifies the number of events to display
    Given the user is on the Events page
    When the user selects the option to specify the number of events
    And enters a specific number, such as "10"
    Then the page should display only the specified number of events
    And the user should be able to scroll or navigate to view additional events if needed

Feature: Use the App When Offline

  Scenario: User uses the app when offline
    Given the user has previously accessed the app and loaded event data
    When the user loses internet connectivity
    Then the user should still be able to access and view previously loaded event data
    And the app should provide a clear indication when operating in offline mode

Feature: Add App Shortcut to Home Screen

  Scenario: User adds app shortcut to home screen
    Given the user has the app installed on their device
    When the user selects the option to add a shortcut to the home screen
    Then a shortcut icon for the app should be added to the device's home screen
    And the user should be able to launch the app by tapping the shortcut

Feature: Display Charts Visualizing Event Details

  Scenario: User views charts visualizing event details
    Given the user is viewing the details of a particular event
    When the user selects the option to view charts
    Then the app should display visual charts presenting relevant details about the event
    And the user should be able to interpret key insights from the visual representation

Serverless Functions

Serverless functions will have a pivotal function within the Meet app, particularly in managing authorization for accessing public calendar events through the Google Calendar API. Authorization is essential for users to fetch event data for display within the React app. These serverless functions serve as a streamlined alternative to constructing and upkeeping a complete server dedicated to this task. In this scenario, the serverless functions will be responsible for generating and furnishing access tokens, guaranteeing secure access to the Google Calendar API. The selected cloud-service provider for implementing these serverless functions is AWS Lambda, enhancing the app's architecture in terms of scalability and cost-effectiveness.

Technical Stack

Frontend: Developed using React, incorporating Progressive Web App (PWA) technologies for a responsive and offline-capable user experience.
Backend: Serverless architecture leveraging AWS Lambda for scalable, maintenance-free backend solutions. Serverless functions are utilized to handle dynamic backend processes such as authentication, data processing, and integration with the Google Calendar API. This approach allows for efficient scaling, cost-effective operations (as costs are based on actual usage), and eliminates the need for dedicated server management, making the app more reliable and easier to maintain.
API Integration: Utilizing the Google Calendar API with OAuth2 authentication for secure and reliable data fetching.
Testing: Adhering to Test-Driven Development (TDD) principles with a target of at least 90% test coverage to ensure code reliability and quality.
Deployment: The app is hosted on GitHub Pages and is designed to be compatible across major browsers, ensuring a seamless user experience on various devices.
Project Requirements

React Application: The app is built using React, following best practices and modern development standards.

Serverless Functions: Implementation of serverless functions, preferably AWS Lambda, for handling backend processes, including authorization.

Deployment Strategy: Deployment on GitHub Pages, emphasizing accessibility and performance across different browsers and devices.

PWA Compliance: Adhering to Lighthouse's PWA checklist to guarantee a high-quality Progressive Web App experience.

Offline Functionality: Ensuring robust offline functionality using service workers for a seamless user experience even without internet connectivity.

Data Visualization: Integration of data visualization tools for effective representation of event data.

Testing and Performance:

Comprehensive Testing: Embracing a thorough Test-Driven Development (TDD) approach, the application undergoes extensive testing. This includes:
Unit Testing: Ensuring individual components function correctly.
Integration Testing: Validating the interaction between various components.
End-to-End Testing: Testing the entire application workflow as experienced by the end user.
Performance Optimization: Performance assessments are conducted through tools such as Google Lighthouse to ensure optimal application speed and efficiency. Key focus areas include: - Load Time: Minimizing the time it takes for the app to become fully operational. - Responsiveness: Ensuring the app responds swiftly to user interactions regardless of the device or browser. - Resource Efficiency: Optimizing the use of resources to ensure a smooth, lag-free experience, especially in offline mode.