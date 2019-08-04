---
title: 'The Back Path'
tags: ["nodejs","javascript","mongodb"]
published: true
date: '2019-08-04'
---
When javascript started, it was a front-end language for creating dynamic as well as static front-end web applications and web-pages. Popular sites which used Javascript as their front-end framework were overall happy with the language, yet they wanted it to do much more.

<h1>Front-End vs Back-End</h1>

There is a major difference between the front-end and the backend of a website or any application. Explaining this difference to a layman is a mammoth task. No matter how corny it may sound, but working with both the technologies I have understood an easy way to explain the difference to anyone.

The Front-end is what you see of an application(no matter what sort of application it may be) and the Back-end is the inner functionality of a website which usually the common user never sees or even feels about.

The Back-end includes the connectivity to a database or any sort of a structure which holds data(information) and does some computation on it and gives something useful for the functionality of an Application.

Many websites don’t even require a backend, many require only a minimalistic back-end framework. Single page websites, such as portfolios, blogs, about-us webpages, don’t require a back-end and hence work very well with Front-end heavy Javascript libraries and frameworks like React and Gatsby.

But even if you have a basic idea of what the back-end is, where can you start. Which framework has better performance, which is easier to learn? I will try to answer these questions with my experience on web-development.

<h1>Server-Side Scripting Language</h1>
  
Learning a server-side scripting language is the first step towards back-end programming. The most famous server-side languages include PHP, Java, Python, Ruby, Node.js etc. The topic(language) if concern for this article will be Node.js.

<h2>Node.js</h2>

Node.js is not a programming language but a Javascript run-time environment primarily developed for the Chrome V8 Engine. So yeah, contrary to the popular misconception that Node might be a language or a library or even a framework, its none of them, its an environment for generating and executing backend frameworks.

Node is a growing area of interest for the next generation of Web-developers, due to its asynchronous nature and faster route calls, better documentation, easier implementation, and growing popularity.

There is a crazy amount of APIs that integrate well with Node and make it a de-facto standard for creating web-apps.
Node does replace conventional backend frameworks, like PHP, Java etc as a Front-end Developer well versed in Javascript can dive right in and start developing Restful Applications in Node.

Installing Node is pretty easy, you start with installing Node from the official website using their installers or packages as listed in the documentation.

  <i>  https://nodejs.org/en/download/ </i>

NPM is something a web developer has typically used from his/her prior experience in Web Dev. But for someone new, it’s interesting and important to understand what NPM.

To get started with Node we cd into the project directory and command

   <i> node init </i>

and then answer the questions as required. This will help you get started.
My primary source of knowledge for creating Node routes and frameworks came from the basic documentation and Youtube Tutorials. Youtube always helps!

Speaking about creating routes, the framework you would primarily use for your projects is Express.

<h2>Express</h2>

Express is a backend framework made especially for Node.js. Its open-sourced, well documented and has a wide range of developers continuously working on it, hence it has good community support. According to Wiki, It has been called the de facto standard server framework for Node.js, and quite aptly so because any application that I developed in Node used express framework only and quite frankly I haven’t even heard about any other frameworks.

It’s fairly easy, it just helps you make many lines of code that you would have used to create the routeing architecture in Node compact into lesser lines of code.

Well, that’s what frameworks do, they help reduce the redundancy in coding and make the lives of a developer much easier.

Express is a must for any aspiring web-developer because it saves you a ton of time and helps you easily create the Architecture which otherwise was quite complex when written just in Javascript(Node).

Well, you have started learning Node along with Express, now what? What are you integrating the backend with? Where is the data getting stored? What type of architecture do you need to create?
All of these questions would be answered in the following section.

<h1>MongoDB</h1>

The first database language that many learn conventionally is SQL(Structured query language), or a Relational Database Language, creating tables and storing data in the rows and fields creating relations and functions. Well, what if the data you want to store isn’t meant for just tables, like PDFs, Videos, MP3 files,
APKs and so much more.

The answer lies in NoSql databases, and the most widely used is MongoDB

MongoDB is a cross-platform document-oriented database program. It uses JSON(Javascript object notation)-like documents with the schema.

MongoDB is the database you want to connect to, build schemas for storing data on, and creating complex functions on the Database to retrieve data and do complex computations on the data. Mongo packs with itself a bunch load of tools like the cloud connectivity MongoDB Atlas. Creating clusters is easy, fully automated, monitoring is convenient and it’s considered highly secure.
All the Mongo Services

Creating a full-stack application might sound like a nightmare at the start, but following a systematic approach to creating the app, by dividing the frontend and backend components and then connecting them to form into a whole app.

After doing a lot of reading on creating web-apps, the best route I follow is
a) Create a solid Backend Framework, with proper routes for every rest calls. The Push, Get requests well implemented and connectivity to the DB also well tested.
b) After creating the backend then start creating your front-end app over the Node Backend and this leads to better clarity of what you want the App to do.

There are a lot of APIs that you will encounter while writing code and creating projects. It’s impossible to know about all the APIs but it’s important for you to learn how to connect those APIs with the framework using the documentation well.

   <i> Its always the journey that matters, never the destination.</i>
