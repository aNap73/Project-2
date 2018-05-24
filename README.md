# Project-2 (Game Blog)
### Developed by: Anthony Napolitano,  Vincent DeStefano, Jason Gomez, Abu Iqubal
### ReadMe by: Anthony Napolitano

[Live Site Here](https://stark-cliffs-26986.herokuapp.com/)

## Site Summary

![SITEGIF](https://raw.githubusercontent.com/aNap73/Bootstrap-Portfolio.github.io/master/assets/images/Project2Splash.png)

The basic idea behind Game Blog was to create a place that we could chat about intersting games and gaming news, write articles and interact with a gaming community.

Throughout the project we had many set backs. Illness, acclimating to new jobs, unplanned buisness trips, and the our general newness with some of this tech, contributed to a alot of features being cut. Mistakes and mistake fixing. In other words.... we learned a ton.

Fortunately, we rallied in the end and given some VERY latenights.. We got our site up on heroku with what I would call minimal functionality. In my opinion, this was a great success as in the, real world Project don't get any easier in my experience. 

## First of all [Alex Rosenkranz...](https://github.com/arosenkranz)

Our fearless leader. Thanks Alex, for ALL the help, the merging advice, the support, not to mention all the learnings. Thank you so much! I know I speak for all of us when I say that you have really helped us grow as web developers.

## Project Plan

![ProjectPlan](https://media.giphy.com/media/mciMfMijRXIfm/giphy.gif)

I was responsible for turning the informal group project discussions into a project plan that we then discussed and altered, before I broke it down quickly, into tasks. I wish I would have done that a little differently, but I guess that's how we learn folks. Next time, I'll seperate concerns as to reduce critical path and merge times, it's helpful to have that experience for sure. 

I've included our Project plan as it shows how the site progressed and also how bad I am at MS paint ;P 

Sadly, my favorite teddy pixel bear, never made it in. Cloudinary was our first feature pull, but the document gets the point across and the humor of it was alot of fun for us. 

The text of the docuent is not very friendly or readable, please forgive me for that. It was done in a huge rush, and was mostly to remind a bunch of devs about a ton of conversations, slacks, thoughts, conversations, telepathy, smoke signals and other communications, while keeping us on the same page. That it did very well.

While our project did not reach the full depth of the plans, and lots was forgotten or changed during the battle,  in the end we got our site up, and secured. Cause that's what devs do. I'm very proud of our team. It's cool to see the site evolve.

We hope someday, to finish these items and all the others in our heads, I'm sure we will and more.

Given I've seen teams take months to put up a site, what we did here in 2 weeks with lots of bad timing and luck... impressive in my opinion.

[For a hoot check out the original project plan](https://docs.google.com/document/d/1orlH0IazXP3EhP4c3Up1wwwvlq-nKstTUYJT41yhEfY/edit?usp=sharing)

## MVC
![FRAMEWORK](https://media.giphy.com/media/UcK7JalnjCz0k/giphy.gif)

While I was hard at work building the plan, Jason was hard at work, at work, and also was able to build and deploying our MVC base model and file structure to the git repo for out team. This was great as a basic MVC model already has it's own plan and jason was quick to get it delivered and working, while I was trying to document our planning meetings in the Project docs.

It's interesting how MVC seems like a burden at first, but once you get rolling and have the things your looking for in obvious places, it makes things ... possible, and easy.

## Data Base, Passport, Login

![TECH](https://media.giphy.com/media/DnVvp3yHjdhyo/giphy.gif)

Once the MVC framework was deployed the next task that fell to me was to build the database with the sequelize orm (Object Relational Model), our original four tables got paired down to two tables and the database got deployed. In a two week run, I just let basic truth tables go... no need to over engineer. I'm an old Db hacker do I was happy to just eat the sequelize stuff up... nom nom...

The next part of the task was to integrate passport and bCrypt. I was pretty happy when I was able to get user passwords encrypted and logging in through passport. Feels like magestic magic...

### OnBoarding (Register, Email validation and Eula with auto site logon)

![TITANIC](https://media.giphy.com/media/XOY5y7YXjTD7q/giphy.gif)

On Boarding, having intimate knowledge of the sites db models and passport installation and having written it on boarding before. I went a head and did this also. I did stop working after this task however as I need some rest and my team was raring to go, I had more time then they did for the project, so I did my best to share, and balance, I hope I did ok.

There are some pretty cool security features in this process. It works just like alot of the best sites using an email address to id a user, and using 1 way hashed passwords. Setting this up with passport and sequelize for a more seasoned developer was a bit scary. It's hard to give up wanting to know how ALL the things work... I may never.

So this task went a little longer than I expected, and it contributed to increasing our critical path, but having a secure on boarding system to track user content, is VERY IMPORTANT and can quickly end your enterprise or worse if not done correctly. So I feel it was time well spent.

I'd like to take a moment to say thank you for Abu's work on getting nodemailer up and running. Unfortunately Abu, was very busy with work and other responsiblites at this time, but his help is always welcome effective and efficient, once again thanks Abu.

### Main page, Article Edit, Profanity filter, CSS styling

![CSS](https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif)

Vinny was responsible for entire site look and feel and while I made horrible MS paint drawings and cut a ton of stuff away he did all this, while landing a new part time job (YEA VIN!). 

He also burnt late hours and early early pre class hours debugging with Ant adding critical fixes and helping out a ton... Both Vinny and Jason have great "eyes" as we call it when you can see bugs fast, it's awesome to have help with this, I'm not used to it, but man, it's great. Vinny was able to get his part of our project DONE and it looks pretty great, although I know he wishes he had more time. After his work we had less of a cruddy blob and more of a Gamer Blog. 

Vinny also made our Article Edit page.  The Article Edit page allows admins to create new Articles, in the future maybe we'll add an edit feature as well. 

In addition Vinny added our profanity filter, which was one of our new techs as required by the Project. We also implemented bCrypt, passport and nodemailer. While you can still shenanigan yourself around our filter it does help with basic cursing.

### Admin Page

![BAN MUPPETS](https://media.giphy.com/media/MoiWQjQ2JZdDO/giphy.gif)

BAN HAMMER! INCOMING!
THE INTERNETS; OMG ITS FULL OF MUPPETS!

While Vinny was hard at work styling our site, Jason was hard at work building our administrative tool. This task he managed with very little group help and produced our current admin page. Not an easy task at all, as it was one of the most complicated and interactive pages on our site. Great Job and thanks Jason. 

The admin page is secured by the user role administrator. Administrators however can use this impressive page to remove articles, comments and ban users... that's alot of routes in a very little time folks. Nice Job! WOOT! 

### Debugging, Merging and Heroku deploy

![DEBUG](http://wanna-joke.com/wp-content/uploads/2014/02/funny-gif-programming-is-hard.gif)

This project had a few moments that I thought were going to end it. The worst however was merging conflicts and debugging. Did I mention late nights? 

I also deployed the site to Heroku, which... as always is a pleasure... <3 Heroku.. so much better than IIS and the never ending hell of rights and priviledges on a Win Machine.

I realized after backing off a bit to let the guys have some fun... we might not make the deadline so... I went HAM and got us up and running... anywho... heroku is so easy... god I love it. 

## My Closing Thoughts

This project really felt a bit like the [Kobayashi_Maru](https://en.wikipedia.org/wiki/Kobayashi_Maru). It was a great learning experience and I wouldn't change a thing, I learned ALOT about managing a project, splitting up work, and a alot of new tech also. 

While, I can't speak for Jason and Vinny totally, I know I've watched them both "get it" as we worked on the MVC views models and passport stuff together alot. I know they also learned a ton and are becoming excellent full stack developers. In the end we all had fun reprograming the starfleet simulator for game news...  ;) and that's the story of how we have a site!   

I hope that we continue to work together on this site in Project3 as there is alot I think we can do with it to upgrade it. Images, password reset, etc...

Thanks team... and thank you for reading our projecty 2 readme!

## However for now...

![VACATION](https://media.giphy.com/media/5qoRdabXeT4GY/giphy.gif)

