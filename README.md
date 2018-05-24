# Project-2 (Game Blog)
###Developed by: Anthony Napolitano,  Vincent DeStefano, Jason Gomez, Abu Iqubal
###Read Me: Anthony Napolitano
[Live Site Here](https://hidden-depths-72803.herokuapp.com/)
![SITEGIF](https://raw.githubusercontent.com/aNap73/Bootstrap-Portfolio.github.io/master/assets/images/Project2Splash.png)

## Site Summary

The basic idea behind Game Blog was to create a place that we could chat about intersting games and gaming news, write articles and interact with a gaming community.

The original project plan was written by Anthony and accepted and altered by the group before we split up the work and began. Throughout the project we had many set backs. Illness, new jobs, unplanned buisness trips, and the fact MVC, Handlebars and Passport contributed to alot of features being cut. 

Fortunately, we rallied in the end and given some latenights.. heh really late nights.. we got our site up on heroku with what I would call minimal functionality. In my opinion this was a great success as in the real world Project teams can get even crazier as can life. 


## Project Plan
![Project Plan](https://media.giphy.com/media/r6nDKpBpVKz2U/giphy.gif)

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

The next part of the task was to integrate passport and bCrypt. I was pretty happy when

### OnBoarding(Register, Email validation and Eula with auto site logon)
![TITANIC](https://media.giphy.com/media/XOY5y7YXjTD7q/giphy.gif)

The next task was to build a system that would allow a user to register on our site to comment.

Anthony was the obvious choice for this having intimate knowledge of the sites db models and passport installation.

Some cool features in this process is that it is as secure as Ant could make it.  The email has a random id associated with the user. 

The email itself contains a link (correctly either prod, or local depeding on dev or prod mode)
The link has the users email and their random registration id.

The link leads to a route that looks up the user and their random id. When the user accepts the site EULA their onBoarding id is made null, and autologin completes their registration process leaving them able to comment.

It was a difficult task and it went longer than expected, but having a secure onBoarding and login system for a site where users are generating content, is VERY IMPORTANT.

### Main page, Article Edit, Profanity filter, CSS styling
![CSS](https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif)

Vinny was responsible for main site look and feel, and even though he landed a new job and began working in the middle of the project still burnt late hours with Ant debugging... (GO VINNY WOOT WOOT) he was able to get his part of our project done. After his work we had less of a cruddy blob and more of a less cruddy blob. 

The Article Edit page only available to admins allows us to create new Articles, we'd love it to edit existing Articles and hopefully, we collectively have time to do this.

In addition Vin added our profanity filter which I believe is one of our star new techs along with bCrypt, sequelize, passport and node mailer.

I'm sure we'd all like to really get to polishing the site look and feel but we got kind of stymied by images. Were working on it. 

### Admin Page
![BAN MUPPETS](https://media.giphy.com/media/MoiWQjQ2JZdDO/giphy.gif)

While Vinny was hard at work styling our site, Jason was hard at work building our administrative tool. This task he managed with very little group help and produced our current admin page. 

The admin page is secured by the user role administrator. Administrators however can use this impressive page to remove articles and comments and ban users... 

BAN HAMMER!

### Debugging, Merging and Heroku deploy
![BAN MUPPETS](https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif)

This project had a few moments that Ant thought were going to end us. The worst however was merging conflicts and Debugging, alot of this work fell to Ant, which he loves, however the late nights are catching up to him. 

Anthony also deployed the site to Heroku, which... as always is a pleasure... <3 Heroku
  
## Ant's Closing Thoughts

This project really felt like the [Kobayashi_Maru](https://en.wikipedia.org/wiki/Kobayashi_Maru). It was a great learning experience. Anthony learned ALOT about managing and a project and a team let alone alot of tech. While I can't speak for Jason and Vinny totally, I know I've watched them both "get it" as we worked on the MVC views models and passport stuff together alot.

I hope that we continue to work together on this site in Project3 as there is alot I think we can do with it.

However for now... 
![VACATION](https://media.giphy.com/media/5qoRdabXeT4GY/giphy.gif)

