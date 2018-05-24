# Project-2 (Game Blog)
### Developed by: Anthony Napolitano,  Vincent DeStefano, Jason Gomez, Abu Iqubal
### ReadMe by: Anthony Napolitano

[Live Site Here](https://stark-cliffs-26986.herokuapp.com/)

## Site Summary

![SITEGIF](https://raw.githubusercontent.com/aNap73/Bootstrap-Portfolio.github.io/master/assets/images/Project2Splash.png)

The basic idea behind Game Blog was to create a place that we could chat about intersting games and gaming news, write articles and interact with a gaming community.

Throughout the project we had many set backs. Illness, new jobs, unplanned buisness trips, and the fact MVC, Handlebars and Passport contributed to alot of features being cut. 

Fortunately, we rallied in the end and given some VERY latenights.. We got our site up on heroku with what I would call minimal functionality. In my opinion this was a great success as in the real world Project teams can get even crazier as can life. 

## First of all Alex Rosenkranz...

Our fearless leader. Thanks Alex, for ALL the help, the merging advice, the support, not to mention all the learnings. Thank you so much! I know I speak for all of us when I say that you have really helped us grow as web developers. 

## Project Plan

![ProjectPlan](https://media.giphy.com/media/mciMfMijRXIfm/giphy.gif)

I was responsible for turning the informal group project discussions into a project plan that we then discussed and altered, before I broke it down quickly into tasks, which I wish I would have done differently but, that's how we learn folks. I think next time, I'll seperate concerns differently as the merge that followed whew... thank you source safe for teaching me to 'ride the beast'.  

You may get a kick out of the MS Paint speed specs I was deployed to illustrate our plans, sadly my favorite teddy pixel bear never made it in because we don't have cloudinary atm, but they get the point across and the humor of it was alot of fun for us.

While our project did not reach the full depth of the plans, and lots was forgotten or changed during the battle,  in the end we got our site up, and secured. Cause that's what devs do. 

We hope someday to finish these items and all the others in our heads, I'm sure we will and more.

[For a hoot check out the original project plan](https://docs.google.com/document/d/1orlH0IazXP3EhP4c3Up1wwwvlq-nKstTUYJT41yhEfY/edit?usp=sharing)

## MVC
![FRAMEWORK](https://media.giphy.com/media/UcK7JalnjCz0k/giphy.gif)

While I was hard at work building the plan, Jason was hard at work building and deploying our MVC base model and file structure to our git repo. This was great as a basic MVC model already has it's own plan and jason was quick to get it delivered and working.

It's interesting how MVC seems like a burden at first, but once you get rolling and have the things your looking for in obvious places, it makes things ... possible and even easy.

## Data Base, Passport, Login

![TECH](https://media.giphy.com/media/DnVvp3yHjdhyo/giphy.gif)

Once the MVC framework was deployed the next task fell to me. I built the database managed by a sequelize orm, our original four tables got paired down to two tables and the database got deployed. 

The next part of the task was to integrate passport and bCrypt. I was pretty happy when I was able to get user passwords encrypted through passport. Feels like magestic magic... 

### OnBoarding(Register, Email validation and Eula with auto site logon)

![TITANIC](https://media.giphy.com/media/XOY5y7YXjTD7q/giphy.gif)

On Boarding, having intimate knowledge of the sites db models and passport installation and having written it before. I went a head and did this also. I did stop working here to let my team catch up and contribute a little, as I had more time then they did for the project.

There are some pretty cool security features in this process. The email has a random id associated with the user. The user must have access to a valid email account and since that email is unique in all the world, we have a way to control our users a bit...

The email itself contains a link (correctly either prod, or local depeding on the environment variables) that returns to a route that requires the random onBoard Id and the users email.  

I'd like to take a moment to say Abu's work on getting nodemailer to work was crucial to our sites succes! Thanks Abu!

If the route detects a valid user registration request, it displays the site EULA, makes the users onBoarding null (to defeat using eula as login), and autologin completes their registration process leaving them able to log on and start commenting.

It was a difficult task and it went longer than we expected, but having a secure on boarding and a system to track user content, is VERY IMPORTANT and can quickly end your enterprise or worse if not done correctly.

### Main page, Article Edit, Profanity filter, CSS styling

![CSS](https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif)

Vinny was responsible for main site look and feel, and even though he landed a new part time job and began working in the middle of the project (YEA VIN! WOOT), he still burnt late hours with Ant debugging... He was able to get his part of our project done. After his work we had less of a cruddy blob and more of a less cruddy blob. Like I said... we were in a hurry. DEAD LINES. 

Vinny also made our Article Edit page only which is only available to admins, and allows us to create new Articles, we'd love it to edit existing Articles and hopefully, we will collectively have time to do this in the future. 

In addition Vinny added our profanity filter which I believe is one of the requirements for this assignment of which we also implemented bCrypt, passport and nodemailer. While you can still shenanigan yourself around our filter it does help with basic cursing.
 
I'm sure we'd all like to really get the site polished and we plan on still working on it. 

### Admin Page

![BAN MUPPETS](https://media.giphy.com/media/MoiWQjQ2JZdDO/giphy.gif)

BAN HAMMER! INCOMING!
THE INTERNETS; OMG ITS FULL OF MUPPETS!

While Vinny was hard at work styling our site, Jason was hard at work building our administrative tool. This task he managed with very little group help and produced our current admin page. Not an easy task at all as it was one of the most complicated and interactive pages on our site. Great Job and thanks Jason. 

The admin page is secured by the user role administrator. Administrators however can use this impressive page to remove articles, comments and ban users... that's alot of routes in a very little time folks. Nice Job! WOOT! 

### Debugging, Merging and Heroku deploy

![DEBUG](http://wanna-joke.com/wp-content/uploads/2014/02/funny-gif-programming-is-hard.gif)

This project had a few moments that I thought were going to end it. The worst however was merging conflicts and debugging. Did I mention late nights? 

I also deployed the site to Heroku, which... as always is a pleasure... <3 Heroku
<3 ma Team. I realized after backing off a bit to let the guys have some fun... we might not make the deadline so... I went HAM... anywho... heroku is so easy... god I love it.

## My Closing Thoughts

This project really felt a bit like the [Kobayashi_Maru](https://en.wikipedia.org/wiki/Kobayashi_Maru). It was a great learning experience and I wouldn't change a thing, I learned ALOT about managing a project, splitting up work, and a alot of new tech also. 

While I can't speak for Jason and Vinny totally, I know I've watched them both "get it" as we worked on the MVC views models and passport stuff together alot. I hope they also learned a ton. We all had fun reprograming the simulator btw...  ;) and that's how we have a site!   

I hope that we continue to work together on this site in Project3 as there is alot I think we can do with it to upgrade it. Images, password reset, etc...

## However for now...

![VACATION](https://media.giphy.com/media/5qoRdabXeT4GY/giphy.gif)

