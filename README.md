# Project-2 (Game Blog)
### Developed by: Anthony Napolitano,  Vincent DeStefano, Jason Gomez, Abu Iqubal
### ReadMe by: Anthony Napolitano

[Live Site Here](https://stark-cliffs-26986.herokuapp.com/)

## Site Summary

![SITEGIF](https://raw.githubusercontent.com/aNap73/Bootstrap-Portfolio.github.io/master/assets/images/Project2Splash.png)

The basic idea behind Game Blog was to create a place that we could chat about intersting games and gaming news, write articles and interact with a gaming community.

The original project plan was written by Anthony and accepted and altered by the group before we split up the work and began. Throughout the project we had many set backs. Illness, new jobs, unplanned buisness trips, and the fact MVC, Handlebars and Passport contributed to alot of features being cut. 

Fortunately, we rallied in the end and given some VERY latenights.. We got our site up on heroku with what I would call minimal functionality. In my opinion this was a great success as in the real world Project teams can get even crazier as can life. 


## Project Plan

![ProjectPlan](https://media.giphy.com/media/mciMfMijRXIfm/giphy.gif)

Anthony was responsible for turning the informal group project discussions into a project plan.
You can get a kick out of the MS Paint speed specs as I was forced to write our plan in one long night.

While our project did not reach the full depth of the plan and a few things were forgoten in the plan... password reset.. lol

We hope someday to finish these items.

[Check out the original project plan](https://docs.google.com/document/d/1orlH0IazXP3EhP4c3Up1wwwvlq-nKstTUYJT41yhEfY/edit?usp=sharing)

## MVC
![FRAMEWORK](https://media.giphy.com/media/UcK7JalnjCz0k/giphy.gif)

While Anthony was hard at work building the plan, Jason was hard at work building and deploying our MVC base model and file structure to our git repo.

It's interesting how MVC seems like a burden at first, but once you get rolling and have the things your looking for in obvious places, it makes things ... possible and even easy.

## Data Base, Passport, Login

![TECH](https://media.giphy.com/media/DnVvp3yHjdhyo/giphy.gif)

Once the MVC framework was deployed the next task fell to Anthony who built a mysql database managed by a sequelize orm, our original four tables got paired down to two tables and the database got deployed. 

The next part of the task was to integrate passport and bCrypt. I was pretty happy when I was able to get user passwords encrypted through passport. Feels like magestic magic...

### OnBoarding(Register, Email validation and Eula with auto site logon)

![TITANIC](https://media.giphy.com/media/XOY5y7YXjTD7q/giphy.gif)

Anthony was the obvious choice for onBoarding, having intimate knowledge of the sites db models and passport installation and having written it before.

There are some pretty cool security features in this process. The email has a random id associated with the user. The user must have access to a valid email account and since that email is unique in all the world, we have a way to control our users a bit...

The email itself contains a link (correctly either prod, or local depeding on the environment variables) that returns to a route that requires the onBoard Random Id and the users email.

If the route detects a valid user registration request it displays the site EULA, makes the users onBoarding null (to defeat using eula as login), and autologin completes their registration process leaving them able to comment.

It was a difficult task and it went longer than expected, but having a secure onBoarding and login system for a site where users are generating content, is VERY IMPORTANT.

### Main page, Article Edit, Profanity filter, CSS styling

![CSS](https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif)

Vinny was responsible for main site look and feel, and even though he landed a new part time job and began working in the middle of the project, still burnt late hours with Ant debugging... He was able to get his part of our project done. After his work we had less of a cruddy blob and more of a less cruddy blob. Like I said... we were in a hurry. DEAD LINES. 

The Article Edit page only available to admins allows us to create new Articles, we'd love it to edit existing Articles and hopefully, we collectively have time to do this. This was another page Vin developed for our site.

In addition Vin added our profanity filter which I believe is one of our star new techs along with the bCrypt, sequelize, passport and node mailer. While you can still shenanigan yourself around our filter it does help with basic cursing.
 
I'm sure we'd all like to really get the site polished and we plan on still working on it. 

### Admin Page

![BAN MUPPETS](https://media.giphy.com/media/MoiWQjQ2JZdDO/giphy.gif)

While Vinny was hard at work styling our site, Jason was hard at work building our administrative tool. This task he managed with very little group help and produced our current admin page. 

The admin page is secured by the user role administrator. Administrators however can use this impressive page to remove articles and comments and ban users... 

BAN HAMMER! INCOMING!

### Debugging, Merging and Heroku deploy

![DEBUG](http://wanna-joke.com/wp-content/uploads/2014/02/funny-gif-programming-is-hard.gif)

This project had a few moments that Ant thought were going to end it. The worst however was merging conflicts and debugging. Did I mention late nights? 

Anthony also deployed the site to Heroku, which... as always is a pleasure... <3 Heroku
<3 ma Team.

## Ant's Closing Thoughts

This project really felt like the [Kobayashi_Maru](https://en.wikipedia.org/wiki/Kobayashi_Maru). It was a great learning experience I (Anthony)learned ALOT about managing a project, and a alot of new tech also. While I can't speak for Jason and Vinny totally, I know I've watched them both "get it" as we worked on the MVC views models and passport stuff together alot. I hope they also learned a ton.   

I hope that we continue to work together on this site in Project3 as there is alot I think we can do with it to upgrade it

## However for now...

![VACATION](https://media.giphy.com/media/5qoRdabXeT4GY/giphy.gif)

