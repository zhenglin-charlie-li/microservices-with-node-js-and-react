# 01 - Fundamental Ideas Around Microservices

# What Is a Microservice?


Microservices are basiclly software broken into functional components, components that are independent, autonomous processes and are not dependents on others. You no longer have one huge app and a databases. You have decentralised data management. Each component should be replaceable and upgradable


A single microservice contains

Routing
Middleware
Business Logic
Database access to implement all features of our app









# Data in Microservices


Data management between services:


1. how we store data: Each service gets its own database (if it needs one)


2. how we access it: Services will never, ever reach into another services database
 

Why Database-Per-Service pattern?

We want **each service to run independently** of other services  
Database schema/structure might change unexpectedly 
Some services might function more efficiently with different types of DB's (sql vs nosql)


Big Problems with Data
   



# Sync Communication Between Services
Communication Strategies Between Services

Sync: Services communicate with each other using direct requests
Async: Services communicate with each other using events

Event is from source to destination while requests is for destination to source.

Request : someone ask for information

Event : someone notify information to registered client






















