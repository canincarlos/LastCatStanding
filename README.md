# Last Cat Standing

This is a coding exam to create a single-elimination tournament for 16 photos obtained via API endpoint, using HTML, CSS & JavaScript

After accomplishing the initial goals, as well as the extra points; I decided to use the project as an opportunity to compare the CSS framework Bootstrap & TailwindCSS.

In this write-up I will first explain my process and provide a few examples discuss this comparison, after which cover a few difficulties, before talking about possible solutions via Bootstrap or Tailwind.


## Build Process

Upon receiving the assignment, my first step was to create a user path; the question for our tournament being, *what happens once one of the two pictures is chosen?*

Using JavaScript's jQuery library, an on('click') event would be triggered by the choice:

1) One photo will be discarded
2) One photo will be saved
3) Get the next set of two photos
4) Repeat until no more photos
5) Move winners to staging array

Pen and paper was used to record this, after which it was improved to say the following:

Consume API > get all photos (post in staging array)
Display first two photos
Select 1 photo (post in the winner's array)
Last photo set > swap winners & staging array
Empty the winner's list and repeat
if len(winner's list ==1) ?

### Initial Coding Build

Boiler plate HTML, CSS and JavaScript were implemented that utilized jQuery and Bootstrap.

Next the onClick event was coded with photo URL's hardcoded and the winner array created and tested. After which the API endpoint was connected; and the tournament mechanics fine-tuned to achieve their goal.

Now that the mechanics of the application were established, code optimization took centerstage; the first step was moving the processVote, roundChange, and winRound mechanics out of the onClick event, and into their own functions. Next was cleaning up the CSS, an odd combination of classes and ids were used to identify DOM elements and coordinate their changes, in accordance with gameplay.

Now I added preliminary flourishes, and the extra-credit option, that would help going forward.

Background-color for the competition space
Preparing Local Storage to retain winning images
Adding a headline to track competition rounds.

### Complications

I knew there would be issues with normalizing images sizes, as well as centering images across screensizes.

Lastly, when implementing Local Storage; after clearing the local storage the page needs to be refreshed immediately, otherwise the Local Storage won't be cleared.

# Bootstrap VS TailwindCSS

Bootstrap was initially used for basic formatting (background colors, buttons, etc). I've always had difficulty centering objects with Bootstrap; and this time was no different. So I removed all of the Bootstrap CSS, and copied the barebones of the SPA into the basicapp folder.

**Quick Comparison**

Bootstrap == straightforward, accessible syntax; difficulty centering

Tailwind == explicit syntax, better grid/centering control - more divs required though; need to create btn classes separately

