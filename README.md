# Rock, Paper, Scissors

![Am I responsive image](readme-assets/am-i-responsive.jpg)

<hr>
<hr>
<hr>

With this site, I want to give users the opportunity to play the world-famous game ‘Rock, Paper, Scissors’ and displaying the score result. The live site can be found [here](https://carinaaj.github.io/p2-rock-paper-scissors/).

# Table of contents
- [Design](#design)
- [Features](#features)
    - [Existing Features](#existing-features)
        - [Landing Page](#landing-page)
        - [Footer](#footer)
- [Testing](#testing)
- [Credits](#credits)

# Design

**Text & Background color**

To give my white Rock, Paper, Scissors buttons with their white circles a nice contrast, I decided to go with a teal colour. The text color is black and it works well together with teal. It has been checked with a Contrast Checker (see testing section).

![Background color](readme-assets/background-color.jpg)


# Features

## Existing Features:

### Landing Page

Each page consists of a different hero banner to show the variety of the Aurora and keep the interest of the user rather than using the same image across all pages. In addition it should also intrigue the user to learn more about it and to go through all three pages. 


### Footer

The footer section features links to both of my social media sites (Github and LinkedIn) and upon clicking, a new tab will open.

![Social Media Links](readme-assets/social-links.jpg)

---

## Future Features

- To determine a winner after a set amount of rounds played
- Expand to Rock, Paper, Scissors, Lizard, Spock

# Testing

The site has been tested by friends and family on a variety of mobile devices as well as different web browsers (Chrome, Firefox, Safari) and all links, videos, audio and the contact form functioned as it should. All input fields of the contact form function correctly, and require the requested input fields before submitting. 

I personally tested the site extensively with dev tools to ensure the site works responsively not only on mobile devices but also on medium to larger screens.

After deciding to use hero banners across all pages I struggled to figure out how to even get started with this task. So I looked again for guidance on the Love Running banner and the properties. I then knew that I should either find or edit an image to roughly a width of 2000px and a size of under 200kb. The programs used are mentioned in the credits.

One of the biggest problems I encountered from the beginning was aligning my logo together with the navigation menu. I initally looked at the Love Running site for guidance but despite applying the same code structue it didn't work for my site. After checking with the Slack community and my Mentor I started looking into flexbox as it seems to be the easiest solution. I knew I could have used this across other parts for the website but because I was running out of time I looked only at the basics to make it work for my purposes. 

So after applying display:flex to my logo and the navigation bar and giving my logo an appropriate line-height it finally ligned up.

Applying media queries however has been the biggest challenge during this project. 

The first issue I faced was after applying the first rules to my media queries and I didn't notice that on smaller devices was a horizontal scrollbar. All styles I applied before had to be checked again after this discovery. But before this I had to find out how to eliminate the scrollbar in the first place. The website which provided me with the solution has been credited in the credits section.

Another big challenge was to center the Youtube videos and Sound Cloud audio. This took a lot of trial and error. Depending on the device the solution was either changing the width or adjusting the margin.

## Validator Testing

**HTML**

No errors were returned when passing through the official W3C validator

![W3C Validator](readme-assets/w3c-validator.jpg)

**CSS**

No errors were found when passing through the official (Jigsaw) validator

![W3C CSS Validator](readme-assets/w3c-css-validator.jpg)

**Lighthouse**

The page achieved great performance on mobile and desktop

Mobile:

![Lighthouse mobile report](readme-assets/lighthouse-mobile-report.jpg)

Desktop:

![Lighthouse desktop report](readme-assets/lighthouse-desktop-report.jpg)


### Unfixed Bugs

I noticed that on larger screens (1800px and up) when zooming out (90%) that my second hero banner does not stretch through the entirety on the screen anymore. This is due to the fact that the width of the image is only 1950px. For the main and contact section I used images with over 2000px in width. It took me a long time to find a suitable banner and adjust it for my purposes so I decided to leave it for now as it is a very specific scenario but plan to address it in the future.

I would have liked to implement a 'back to top' button as the site contains a lot of text. During my research it seemed that I could have worked around it with the 'a' tag, and the best solution seems to be javascript which is outside this first module. So I decided to leave it out completely.

### Libraries & Programs used:

- Github, to store my repository
- Gitpod, to create my html and css files
- Google Fonts, for my font family 'Indie Flower'
- Font Awesome, for my social media icons 
- Balsamiq, to create my wireframe
- Am I Responsive?
- Dev Tools, to ensure the site looked good across different devices



## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

In the GitHub repository, navigate to the Settings tab. On the left-hand side under ‘Code and automation’, select ‘Pages’ and from the source section drop-down menu, select the Master Branch. Once the master branch has been selected, the page will be automatically refresh with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - 
https://carinaaj.github.io/p2-rock-paper-scissors/

# Credits





**For JavaScript issues I encountered these sites have been used for reference:**


- For general information [W3 Schools ](https://www.w3schools.com/) and [Developer Mozilla](https://developer.mozilla.org/en-US/)
- For guidance I looked at these tutorials on Youtube
- (https://www.youtube.com/watch?v=Qqy8Ov3NWvQ_
- (https://www.youtube.com/watch?v=RwFeg0cEZvQ)
- (https://www.youtube.com/watch?v=qWPtKtYEsN4)
- To assist me with setting the score code has been adapted from (https://www.youtube.com/watch?v=qWPtKtYEsN4)
- For eventListener clarification [Freecodecamp](https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/)




** Additional sites:**

-[HTML Color codes](https://html-color.codes/css/lightseagreen) for my teal background
-[Unicode](https://unicode.org/emoji/charts/full-emoji-list.html#smileys_&_emotion) for my emojis when displaying the result 


### Media

All images for my Rock, Paper, Scissor buttons have been taken from banners have been taken from https://icon-library.com/

Lastly, I wanted to thank my fiancé, Dave Browning, for being an amazing Rubber Duck when I needed one❤️ 



