---
title: 'Deployment Demystified'
tags: ["linux","ubuntu"]
published: true
date: '2019-07-30'
---
The one thing that a young developer is never told in his/her college days is that what to do once you have developed a Web Project. Our majority focus always lies in the fact about developing content-rich websites and more useful web-apps, but the area of concern after you have developed your app comes in the form of Deployment.

There are plenty of web hosting services that will help you to host, deploy, access, test and do various functions on the website/web-app that you have created. And many of them are free, free for students and many have the pay-as-you-go models.

So, in easy terms, this article gets you started on what you may do once you have created a website/web-app (At least what I did!)

Pre-Requisite:-
Before we start with the actual deployment, do cover the basic fundamental elements I list below so that you have a basic idea of some relevant tech. that will help for the current project and many more projects to come.

    1. Learn or have BASIC knowledge about one of the many version controls, for example, I learnt Git and have an active GitHub account. Git was one of the first things I learnt when I was starting out for web-development and it still remains one of my favorite tools. More details about version control and Git would be out of the scope of this article and hence I will cover it another blog.

    2. Learn basic Linux/Bash/Shell commands. It’s not a necessary condition again, but yet again these will take you a long ay and you will actually understand what is happening in the background.

Let's just dive right in and know more about the deployment services that help a lot.

<h1>HEROKU</h1>

Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. Heroku was the first service I used to deploy a Stripe application I created and it will always stay close to my heart. You can directly build and deploy your React, Node apps from your GitHub account onto Heroku.

Heroku has Continous Integration and Continous Delivery Pipelines(CI/CD) which means that it is directly linked to the master branch of your GitHub repo, and will directly deploy the latest commit without any delay and lack of availability period. This means that the moment you create a new build for your website and push in onto your GitHub, Heroku will pick up the changes and hence deploy the new version of the site.
To get started, install the Heroku CLI using npm.

And then in the main repository enter the command in terminal:

    $ heroku create

If you have already created your Heroku app, you can easily add a remote to your local repository with the heroku git: remote command. All you need is your Heroku app’s name:

    $ heroku git:remote -a app-name-for-heroku

And then deploy onto heroku with the simple command:

    $ git push heroku master



Voila!! It was so easy, with a few commands, you can deploy your web-app onto Heroku.

<h1>FireBase</h1>

Firebase is a mobile and web application development platform, now owned by Google. Firebase is your one-stop destination to maintaining everything related to your web-application. It has a wide range of products helpful for testing, building, machine learning, analytics, business intelligence, deployment, hosting and so much more.

I had just created a Full-Stack application for my internship project and I wanted to host it somewhere, Firebase was suggested to me and I looked into what Firebase can do and it amazed me. Firebase Functions help to manage the routes and the back-end related connections that I created and for the various API’s I used. All the hosting and Firebase Functions was free and they have a very interesting and affordable revenue model too. The cost for different analytics and testing services for an Enterprise is also a fun area to explore.
To use firebase you would have to install the Firebase-CLI and the manually integrate firebase into your project. This actually took quite some time for me to get around and the vast Firebase documentation did help a lot along with their official Youtube Channel, which gives you an in-detail guide to do various functions on Firebase.

Check out their wide range of products and well-maintained documentation here.

    https://firebase.google.com/

<h1>Netlify</h1>

Netlify offers hosting and serverless backend services for static websites. It was while I was creating a Gatsby generated a static website for a client I stumbled upon this wonderful service, which features continuous deployment from Git across a global application delivery network.

Netlify offers its own CMS(content management system), which is very easy to understand and implement if you are trying to make contentful websites like a Blog. My current Blog and Highlights website that I created in Gatsby are maintained and hosted by Netlify. It's completely free for hosting and has many other backed functions with complete support for AWS LAMBDA. And for more complex usage and usage related to enterprises, it has a very competitive pricing model.

Hosting onto Netlify is very easy, you just have to your code on either of the Git platforms like Github, Gitbucket, Gitlab and it will create an encrypted connection to your account and host the site directly from you repo(which you choose obviously!)


Once you have hosted the website or project you want onto one of these services you can also get a domain name. Like if your website is a commercial website or an enterprise website, a domain name helps customers reach to you easily.

<h2>Website vs. Domain Name</h2>

A website is a collection of web pages grouped together for a single purpose. A domain name is the website address that a website owner needs to register before customers can access the site. The web address or domain name is what visitors will have to type in the address bar of their browser to get to your website. Anyone can register a web domain and choose not to do anything with it, but you can’t have a website without a domain.

Once you have selected a domain and created a website, you’ll need a web host to make the site visible to customers. This is where the above-named services come into practice.