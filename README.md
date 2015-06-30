# Schedule Script

This project to update the tutoring schedules for Lansing Community College. It replaced several schedules on the site that were either long pages of HTML or PDF files. 
Progressive functionality allows users without JavaScript enabled to use the site.

CSS was originally generated using LESS.

## Planned Upgrades
* Bring into WCAG 2.0 and Section 508 Compliance
* Convert styling to SASS
* Add Smooth Scrolling to schedule after user selects the course subject
* Convert from jQuery to vanilla JavaScript

## FAQ

### Where did this project originate?

This schedule started off existing online as only a PDF of the printed schedule students could pick up. This was a cumbersome process because due to the speed at which changes occurred. The printed flyer was slow to update and the only sign that it updated the was the paper changing color.

At first a giant table replicating the printed flyer was the first online solution. This solution suffered from readability problems. So the next solution was to break the table up by department that offered and place them in separate tables with a anchor links.

When I started playing around with jQuery I took a copy of the page and started experimenting. I liked what was happening so I decided to keep evolving it to make it better for use on future projects.

## Why not use a Content Management System?

Unfortunately I was constrained to a SharePoint system where I had limited access and could only really control what would appear in a center column about 530px wide.

### Why convert the jQuery to JavaScript?

Without wading into the debate on jQuery versus JavaScript, the simple answer is I feel that using jQuery is a little overkill.

My script is small and I estimate that it will cap out at around 10k. jQuery v1.11.x is around 95k. Since my goal is to keep this thing as lean as I can, I cannot justify a 950% increase in script size just to add jQuery.

On top of that, I feel that I should also have a better grasp of vanilla JavaScript first before I use a library to take shortcuts.
