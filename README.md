# Browser Technologies - Minor Enquête

## Table of content
- [General](#general)
- [User story](#user-story)
- [Minor Enquête](#minor-enqu%C3%AAte)
- [Features](#features)
- [Source](#source)
---
# General
For the course Browser Technologies, had to make a interactive application with the knowledge we gain about Progressive Enhancement.

## User Story
I want to be able to fill out a survey about the Web Development minor, with different response options. I want to see clearly where I am and how much I have left to do. I want to be able to revise previously completed questions. If I don't finish the survey, I want to pick up where I left off later.

## [Minor Enquête](rainbowjm.github.io/minor-enquete-bt/)
### Intro
The final product is a application where you can fill the enquête, no matter what device you are using. 

The enquête consiste of a part where the student entrees his/hers information and then they get access to do the enquête.

![General - Safari on Mac](https://user-images.githubusercontent.com/59873140/229367927-849d3528-c793-4974-a07c-8052db2e746f.png)

### Questions:
1. How good was this course?*
2. In which semester did you follow this course?*
3. What number would you give the difficulty of the curriculum?*
4. Give you opinion about the course:
5. What number would you give curriculum explanation?*
6. How good did you understand this course?*

For each course the studtent has to answer the same question, out of the 6 question, 5 of them are mandatory(*).

The aspect that was taken while making this application was, that the user has to be validated before theuy can fill in the enquête.
Another aspect that could have been taken was, that you can fill the enquête as anonouymos, with this version you would get more sincere answer.

### Features
- [X] Works with only HTML
- [X] Validation done via HTML
- [X] Validation done via CSS
- [X] See only a few questions a the time
- [X] Save your progress 
- [X] Show your progress
- [X] When CSS is on you do not see radio buttons
- [X] Has dark/light mode
- [X] Screenreader works with the application
- [X] Fill the enquête as a student
- [ ] Fill the enquête as anonouymous

### Browser
--- what works/ what does not ---
- Safari iphone
- Safari mac
- Samsung internet mobile
- Google chrome desktop
- PrinceXML 

#### CSS Selector
firefox
```#general label input[type="text"]:valid+span::after {
    content: 'Nice! You did it!';
    position: absolute;
    transform: translateY(.5em);
    font-size: 14px;
}
```

chrome
```#general label:has(input[type="text"]:valid)::after {
  content: 'Nice! You did it!';
    position: absolute;
    transform: translateY(.5em);
    font-size: 14px;
}
```
### Requirements
#### Validation
As a student you have to enter your information before, you start filling in the question.
This requirement was handle by making thw first home page `index.html` the place where the student fills in his/hers information.
```html
<form action="./html/wafs.html">
  <fieldset id="general">
    <h2>Minor Web Design & Development Enquête</h2>
    <label for="name">Name
      <input type="text" id="name" name="name" placeholder="Name..." required><br>
    </label><br>

    <label for="snummer">Student nummer
      <br><input type="text" inputmode="numeric" pattern="[0-9][0-9]{8}" id="snummer" name="snummer" placeholder="Nummer..." minlength="1" maxlength="9" required><br>
    </label><br>

    <label for="email">Email
       <input type="email" id="email" name="email" placeholder="Email.." pattern="[a-zA-Z0-9._-]*@[a-zA-Z]*\.[a-zA-Z]{2,3}" required><br><br>
    </label><br>
  </fieldset>
  <ul>
    <li><button class="next" type="submit" value="button">Next</button></li>
  </ul>
</form>
```
As you can see for the each of the input area it is required to fill it in, this is the validation part done by the HTML.
A few of the HTML attributes that were used:
- `pattern`: This will check of the filled info follows the pattern that was given
- `placeholder`: Give the visual of teh info that is excepted
- `type`: Indicates which kind of input field it is
- `required`: Makes the it that you must fill in something in
- `minlength`: The minimun length of the input
- `maxlength`: The maximun length of the input 

Also there is a validation done by `css`
```css
input[type="email"]:invalid,
input:required {
    border: 2px solid var(--invalid);
}

input[type="email"]:valid,
input[type="text"]:valid{
    border: 2px solid var(--valid);
}
#general label input[type="text"]:valid+span::after {
    content: 'Nice! You did it!';
    position: absolute;
    transform: translateY(.5em);
    font-size: 14px;
}
```
When it's invalid the border of the input fiel will be red, and when it valid the border will turn green and the text 'Nice! you did it!' will appear.


--- validation javascript ----
#### Information
Foor a better user experience, you only see thw question of 1 course at the time. With a `<a>` tag, is it possible to navigate to the other courses to fill in the questions that were asked.
In totale there is 8 courses. And this is a solution tah makes it possible to work with javascript. It's all HTML based.

#### Local Storage
Each time that you fill a part it will be storage in tha local storage of your browser, this makes it possible that when you have to go back. 
All the information that you have already filled will be there, and it would not be lost. Local storage is considered the client-side part of the application. This part is without security. If you want to add the application you can use cookies or a client-side storage database.

```javascript
const inputRadios = document.querySelectorAll("input[type='radio']");

loadRadioValue();

inputRadios.forEach(radio => {
    radio.addEventListener('change', saveRadioValue);
})

function saveRadioValue(){
    inputRadios.forEach(radio => {
        const radioName = radio.name;
        const radioValue = radio.value;
        if (radio.checked) {
            localStorage.setItem(radioName, radioValue)
        }
    });
}

function loadRadioValue() {
    inputRadios.forEach(input => {
        const radioName = input.name;
        let storedValue = localStorage.getItem(radioName);
        if (storedValue && input.value === storedValue) {
            input.checked = true;
        }
    });
}
```

How it works is that it will get all the `input[type='radio']` based changes made on teh radio buttons it will make a call to the function `saveRadioValue`
This funtion will then getter all the information, and set the name an the value in the local storage.
With the function `loadRadioValue` it will get all the informations that were stored in the local storage based on the input name.

All of this can happend due to Javascript, but what happens when there is no Javascript
check [Turn off Javascript](#turn-off-javascript)

### Radio buttons
We all know that the default radio buttons are not the best looking radio buttons out there, so in this case when CSS is on your wouldn't see any radio buttons. 
```css
input[type="radio"] {
    position: absolute;
    appearance: none;
    opacity: 0;
}
```

#### Navigation
For the navigation part you will be able to go to the previous answered forms and to the next one when you are done filling the current form.

<img width="253" alt="Screenshot 2023-04-02 at 22 50 50" src="https://user-images.githubusercontent.com/59873140/229378353-d5fb2b62-0638-4a35-8ba9-f38f6584dd7b.png">

Also at the top of the form you wil find a navigation header where you can skip questions.
![Screenshot 2023-04-03 at 00 43 31](https://user-images.githubusercontent.com/59873140/229383092-bd5f03af-e70e-4df3-8d4e-2665c2e8516b.png)

#### Progress
While you are filling the form you will find at the bottom a progress bar where you can see how far you are.
![Screenshot 2023-04-03 at 00 39 53](https://user-images.githubusercontent.com/59873140/229383043-0b39d578-85ff-45ed-819b-f63122033039.png)

#### Light/Dark Mode
--- light/Dark Mood ---- 

### Progressive Enhancement
#### Turn off Javascript
Mayority of all the website out there are running on Javascript, Javascript has a big role
- How can you deal with it when you turn off Javascript of a website?
- What happens when Javascript i turn off with localstorage?

How you can handle this, is by adding a server-side component to the website ans a database.
To save your data in to a database you will need a few things to create it and run it.

Tools:
- Express.js 
- Parser (for body/cookie/cookie sessions) express middleware 
- Database 
- Template engine 

Data can easily be send to the server-side by using the `POST` method. 
The data that was send will be validate by teh parser, and then sent to the database of your choice. 
Not everything the data that was send will be in a JSON format, so the parser will take care of that part.

For the part of saving the previous data that was filled, you can use a framework that will do this for you. 

At the end the server will send a verification that the data was submited, and you will get a overview of your answers.

Futheron the validation done by javascript, won't be avaible.

#### Turn off CSS
When you turn you will end up with a simple HTML page, It won't have any styling anymore.
You can see the radio buttons.

All the part that the HTML does will still work.
Like, going to teh next form, validation, light/dark mode

#### Bad broadband
On some occations you can have the issues of not having the best internet connection.
When it come to these situation we would still want the user to be able to fill the form, that is why we made this website een progressive app.
It will still work under thesew conditions, You wouldn't get the best design but it will still work.

#### Custom fonts
--- custom fonts----

#### Color
--- color----

#### Accessibility/Screenreader
Sometimes you mouse or track pad doesn't work, or due to your condition you can not use it.
That is why there were a few extra implementation do to the website.

Implementations usage:
- Tab
- Shift + Tab
- Entre
- Space bar
- Arrow keys

To make it more visual, `:focus` and `:hover` was used to outline it
```css
button:hover,
button:focus {
    outline-style: inset;
    outline-width: 3px;
    outline-color: var(--text-color);
    color: var(--blue-color);
    cursor: pointer;
}
```
Also you have `tabindex`
```html
<p tabindex="0">In which semester did you follow this course?</p>
<p tabindex="0">Week 42 to week 44 (semester 1) or week 12 to week 14 (semester 2)</p>
```
### Source
- [Principes](https://www.w3.org/DesignIssues/Principles.html)
- [Het web is voor iedereen](https://www.youtube.com/watch?v=UMNFehJIi0E)
- [Replace localstorage](https://dev.to/rdegges/please-stop-using-local-storage-1i04)
---
