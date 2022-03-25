# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ivanna Kreshchenetska**

Time spent: **20** hours spent in total

[Link](https://glitch.com/edit/#!/deluxe-rhetorical-bunny) to project.

## Required Functionality

The following **required** functionality is complete:

* [+] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [+] "Start" button toggles between "Start" and "Stop" when clicked. 
* [+] Game buttons each light up and play a sound when clicked. 
* [+] Computer plays back sequence of clues including sound and visual cue for each button
* [+] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [+] User wins the game after guessing a complete pattern
* [+] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [+] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [+] Buttons use a pitch (frequency) other than the ones in the tutorial
* [+] More than 4 functional game buttons
* [+] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [+] Player only loses after 3 mistakes (instead of on the first mistake)
* [+] Game button appearance change goes beyond color (e.g. add an image)
* [+] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

Comment on an **attemted** optional feature:

I tried creating lists with random values from 1 to 4 each time the game starts in the commented line 153 of the js file. 
However, it didn't work out most likely because the list cannot be defined inside the function itself. I inducted so because even if you put a valid list [2, 2, 4, 3, 2, 1, 2, 4] inside line 153, it still doesn't work. Therefore, I am likely using the wrong code hierarchy. I don't know how else I can update a list for each game in js, though, yet.
Also, since I cannot even use the list inside the function, I cannot be sure that implementing a random list I found is correct. 
Oh well. 


## Video Walkthrough (GIF)

![Alt Text](https://cdn.glitch.global/7f47bedb-841f-4d51-9af5-88428ab6871d/Memory%20Game%20Recording%20Hopefully%20Final.gif)

Also, since GIFs have no sound I additionally recorded a Loom  [video](https://www.loom.com/share/e249afd48d374dec9329b883927fa8f8) with the walkthrough.

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 


The [website with the color names](https://www.w3schools.com/colors/colors_names.asp) I used for the color palette of the web page.


The [website with the information on how to create a gradient button](https://wpforms.com/how-to-customize-button-styles-with-css-with-examples/) that I used to make the "start" button more interesting.


The [website with examples of how to use images in CSS](https://css-tricks.com/almanac/properties/b/background-image/).


The [website with the frequencies](https://pages.mtu.edu/~suits/notefreqs.html) of the tones that I used to provide buttons that together can play valid musical chords such as c major chord (which is the first 3 buttons played together).


The [StackOverflow page](https://stackoverflow.com/questions/9419263/how-to-play-audio) where I got the code for creating a list of random numbers from 1 to 4 including (the one I didn't end up using).

I had troubles rendering the gif directly in the README.md file, so I used this external [source](https://stackoverflow.com/questions/34341808/is-there-a-way-to-add-a-gif-to-a-markdown-file) to figure that out.

Finally, my favorite... The [website with the soundtrack](https://www.myinstants.com/instant/x-files/?utm_source=copy&utm_medium=share) form X-files. To get the URL for the actual mp3 file, I inspected the webpage and found it inside the information about the button that can be found using the following fullXpath: /html/body/div[2]/div[3]/div[3]


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (288 words) 

The biggest challenge I faced was a bug I spent hours finding.


At some point, I was happy and ready to record gifs and the interview, but then as I was going through the necessary features to implement, I realized my game doesn't play the sequence, and I was basically just guessing the tones. For some reason, at first, it made sense to me. Because, well, it's probably guessing for a reason. 


Then I looked through all the material realized that in the very first video, the sequence was played, and it was not an additional feature. 


Then I reviewed my whole code and compared it to the one in the instructions. I couldn't find any prominent differences at first. Eventually, I realized that I didn't make the references to buttons consistent throughout the code. At some point, I referred to them as in the instructions as "btn1" even though I called them "Btn1", etc.


But I am kind of happy I had that bug. I am on a break right now, and I spent extra time learning js. As I looked for the bug, I altered the code quite a lot. For example, I was changing and playing around with the input parameters needed for functions such as playSingleClue(). At some point, I even tried creating a separate code from scratch that would ensure that the sequence is incrementally played throughout the game. This experience helped me not just get introduced to js but also deepen my understanding as much as I could after spending this specific amount of time on the project.


Otherwise, searching stuff online, such as playing a soundtrack in js, took quite a lot of time. But it is expected and simultaneously fun.  


3. What questions about web development do you have after completing your submission? (183 words) 


After spending this much time on a relatively basic web game development, I wonder how much on the Internet right now is actually coded just using js and not using software such as WordPress. Which industries would such an approach be most prevalent in? In which contexts besides educational js is essential. 


Also, how can one make the website super cute, minimalistic, and fancy using js, CSS, and HTML solely?


To address the optional features I didn't manage to implement, I would love to get to know how to limit the time users have to repeat sequences. How could I add a timer to track how much time the user has left to guess the sequence? As I was googling all of this, I couldn't find solutions that were simple and clear enough for me to understand truly. All of the ones I encountered were quite overcomplicated, I think. 


How often realistically do web developers do initial research on potential users to understand what they'd really like to see on a website? Or is this something solely UI/UX designers would worry about? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (399 words) 


I would do my best to implement the final optional features: random sequences (as mentioned in the comment on an attemted optional feature) of the tones for each game (or just different ones from a list of lists) and limiting time for the guessing. For the lists, I'd have to play around with placing the randomly generated list in the js file or create a list of lists and iterate through them throughout the games. To iterate through lists in the list, I could potentially keep track of the total number of games played so far (let's say variable total_games). Then I'd use the list that has an index equal to the remainder after deletion of the length of the list of the lists by the total_games.


Besides, I could add counters for the games won and lost that would be displayed on the page and updated after each game. I'd create the global variables for these counters and increment them correspondingly each time a game is won or lost. 


In addition, I should somehow make the last button with the hamster and X-files soundtrack stop playing music if I press it for the 2nd time, for example. I should create a variable that would turn false only when the music is not playing (e.g., variable playing). Then if that variable is valid and a button is pressed again, I should ensure that the music is turned off.  


Also, it would be cool if the picture on the last button was visible when the music is playing. For that, I could use playing variable again, and if it is true, the picture must be displayed. 


Plus, I am not sure why, but as the computer plays the sequence, the hamster picture appears on the fourth button. It is kinda funny but not really intentional. It would be worthwhile debugging. Although the image is clearly connected only to the 5th button, there might be a bug somewhere in the js file.


Finally, I think it would be helpful to show the user how many more mistakes they can make before losing. For that, I would have to display the mistakeCounter from the js file through the HTML file. And also, a message telling the user that they don't play from the beginning after making a mistake would be useful. I didn't understand that at first, and I believe it can be confusing.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/35ad6809a5d942798be7a0d54e8bf23d)


## License

    Copyright [Ivanna Kreshchenetska]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.