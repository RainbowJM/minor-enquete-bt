# Browser Technologies - Minor Enquête

## Table of content
- [General](#general)
    - [User story](#user-story)
- [Minor Enquête](#minor-enqu%C3%AAte)
    - [Intro](#intro)
    - [Questions](#questions)
    - [Features](#features)
    - [Core](#core)
    - [Requirements](#requirements)
    - [Browser](#browser)
    - [Test](#test)
    - [Layer](#layer)
    - [Nice to have](#nice-to-have)
    - [Source](#source)
---
# General
For the course Browser Technologies, had to make a interactive application with the knowledge we gain about Progressive Enhancement.

## User Story
I want to be able to fill out a survey about the Web Development minor, with different response options. I want to see clearly where I am and how much I have left to do. I want to be able to revise previously completed questions. If I don't finish the survey, I want to pick up where I left off later.

# [Minor Enquête](rainbowjm.github.io/minor-enquete-bt/)
## Intro
The final product is a application where you can fill the enquête, no matter what device you are using. 

The enquête consiste of a part where the student entrees his/hers information and then they get access to do the enquête.

![Screenshot 2023-04-05 at 18 52 10](https://user-images.githubusercontent.com/59873140/230149991-e510c237-79d8-4d02-92fe-aa5d194dcd82.png)

![Screenshot 2023-04-05 at 18 52 57](https://user-images.githubusercontent.com/59873140/230150181-e54e35e2-ef80-4f24-8e4e-1b765e5be39f.png)

## Questions:
1. How good was this course?*
2. In which semester did you follow this course?*
3. What number would you give the difficulty of the curriculum?*
4. Give you opinion about the course:
5. What number would you give curriculum explanation?*
6. How good did you understand this course?*

For each course the studtent has to answer the same question, out of the 6 question, 5 of them are mandatory(*).

The aspect that was taken while making this application was, that the user has to be validated before theuy can fill in the enquête.
Another aspect that could have been taken was, that you can fill the enquête as anonouymos, with this version you would get more sincere answer.

## Features
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

## Core
### Functionalities
The funtionalities of the application will be the following:
- The form should be clear without css.
- Labels, input and the submit button should be able to work.
- Users should have a clear view of what is required to fill in.
- Indicate which input fields are required to be filled in.
- Form should have good contrast between foreground and background.
- Can navigate to the following pages
- Indication of where you are in the form.
- Users should know when they have entered the correct information.
- Should be accessibilty approved.
- You can use a keyboard to navigate.
- You can complete the survey on small screens.

## Requirements
There are a few criteria which the application needs to fulfil.

The are criteria are:
- User should not see all the question at once
- Validation of filling in the form
- You can pick up where you left off
- Can go back to previous questions
- Can see where you are 
- No use of visible radio buttons
- The form must have a light mode and dark mode.

### Questions
For a better user experience, you only see thw question of 1 course at the time. 
With a `<a>` tag, is it possible to navigate to the other courses to fill in the questions that were asked.
In totale there is 8 courses. And this is a solution tah makes it possible to work with javascript. It's all HTML based.

### Validation
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

![Screenshot 2023-04-05 at 19 46 43](https://user-images.githubusercontent.com/59873140/230161850-5c47c757-06a7-4947-9b58-115e1495a31a.png)
Because `:required` was used in the HTML, is the iput field is not filled when submit.
It will indicate this

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
When it's invalid the border of the input field will be red, and when it valid the border will turn green and the text 'Nice! you did it!' will appear.
<img width="1352" alt="Screenshot 2023-04-04 at 16 31 52" src="https://user-images.githubusercontent.com/59873140/230160668-250cd518-3ad9-4947-965c-53888a420976.png">

<img width="1352" alt="Screenshot 2023-04-04 at 16 32 18" src="https://user-images.githubusercontent.com/59873140/230160607-19ad9072-9c05-4815-a22f-6ea607ed8240.png">

There is also a validation done by javascript, when the user select a score it will indicate this to the user.
![Screenshot 2023-04-05 at 19 43 14](https://user-images.githubusercontent.com/59873140/230161058-b2905d27-94c7-48b3-8365-405f38b7a86e.png)

### Local Storage
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

### Navigation
For the navigation part you will be able to go to the previous answered forms and to the next one when you are done filling the current form.
![Screenshot 2023-04-05 at 19 51 43](https://user-images.githubusercontent.com/59873140/230163016-a94d4cd4-bc79-4531-bee6-374fa56d29bc.png)

Also at the top of the form you wil find a navigation header where you can skip questions.
![Screenshot 2023-04-05 at 19 52 46](https://user-images.githubusercontent.com/59873140/230163194-64d85ec3-6c1e-4704-b95c-63fd2d09cac9.png)

### Progress
While you are filling the form you will find at the bottom a progress bar where you can see how far you are.
<img width="1352" alt="Screenshot 2023-04-04 at 16 33 08" src="https://user-images.githubusercontent.com/59873140/230163278-5bd60db6-1f72-4521-b270-9eb3476b98c8.png">

### Radio buttons
We all know that the default radio buttons are not the best looking radio buttons out there, so in this case when CSS is on your wouldn't see any radio buttons. 
```css
input[type="radio"] {
    position: absolute;
    appearance: none;
    opacity: 0;
}
```

### Light/Dark Mode
![Screenshot 2023-04-05 at 17 30 32](https://user-images.githubusercontent.com/59873140/230163786-e3abe1f8-088f-4d38-9de6-26f720466d65.png)
![Screenshot 2023-04-05 at 17 30 40](https://user-images.githubusercontent.com/59873140/230163804-2b660845-3d2c-4d8b-bbf7-ff85de7030cd.png)

For dark/light mode you can add the tag of `<meta name="color-scheme" content="light dark">` and it will take care of it for you

But to style it in css, it requires some extra work. Here is were `prefers-color-scheme: dark` will come in handy. 
With `:root` and `var()` you can create your color pallete for each.

```css
:root {
    --font-type: 'Open Sans', 'Arial', 'Helvatica', sans-serif;
    --font-size-title: 2.5em;

    --background-color: white;
    --form-background-color: #f76faf;

    --button-color: #e24b92;
    --shadow-color: #300118;
    --title-color: #500a2c;
    --text-color: black;
    --fieldset-color: #f42086;
    --select-background-color: #e16ca3;
    --input-background: #ffffff;
    --progress-bar-moz: #500a2c;

    --valid: green;
    --invalid: red;
}

@media (prefers-color-scheme: dark) {
    :root {
        --font-type: 'Open Sans', 'Arial', 'Helvatica', sans-serif;
        --font-size-title: 2.5em;
        --font-size: 0.8em;

        --background-color: #500a2c;
        --form-background-color: #b02f6b;
        --button-color: #e16ca3;
        --shadow-color: #300118;
        --title-color: rgb(252, 214, 220);
        --text-color: white;
        --fieldset-color: #500A2C;
        --select-background-color: #e16ca3;
        --input-background: #884373;
        --progress-bar-moz: #500a2c;

        --valid: rgb(5, 237, 5);
        --invalid: rgb(255, 0, 0);
    }

}
```
## Test
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
Like, going to the next form, validation, light/dark mode

<img width="1156" alt="Screenshot 2023-04-05 at 20 06 39" src="https://user-images.githubusercontent.com/59873140/230166288-10c4f2e8-cad6-4105-8852-5543b30abd82.png">

#### Bad broadband
On some occations you can have the issues of not having the best internet connection.
When it come to these situation we would still want the user to be able to fill the form, that is why we made this website een progressive app.
It will still work under these conditions, You wouldn't get the best design but it will still work.

#### Custom fonts
To make you text more attractive you can use custom fonts, but this means that you are depende on a third party.
This you can link it in you `head` of your HTMl page
```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Calligraffitti">
```
But It not sure that it will always work so that is why you need a fallback
`font-family: 'Calligraffitti', 'Open Sans', 'Arial', 'Helvatica', sans-serif;`

#### Color
Not everyone can see all colors. This phenomenon is called color blindness. 
When you design a Web site, you have to take into account people who are color blind.

So you can't being completely dependent with color. 
In the normal situation if you enter something wrong in the form, you will see a red border. 
But for people who can't see red, they don't know they had entered something wrong. 
So best practice to indicate error message with clear solution.
Have enough contrast between the components.

You can test color contrast while you are developing your application with differen tools.

Color contrast analyzer (cca) & WCAG (Web Content accessibilty guidelines)
According to the WCAG (Web Content accessibilty guidelines), color contrast must have at least a contrast ratio of 4.5:1. 

![Screenshot 2023-04-05 at 14 05 33](https://user-images.githubusercontent.com/59873140/230168916-793a9c7c-0994-4f30-9da8-8fe16b698c10.png)
![Screenshot 2023-04-05 at 14 05 45](https://user-images.githubusercontent.com/59873140/230168928-8dea8b3e-a347-496a-a859-9e0e61d62a21.png)
![Screenshot 2023-04-05 at 14 06 05](https://user-images.githubusercontent.com/59873140/230168941-1c89a2e4-5cf7-4721-9bc1-f03eb3a04920.png)
![Screenshot 2023-04-05 at 14 06 22](https://user-images.githubusercontent.com/59873140/230168960-388b0697-c19f-4c6e-b5ca-f2243dfaa4eb.png)
![Screenshot 2023-04-05 at 14 25 19](https://user-images.githubusercontent.com/59873140/230168974-81fadf3b-999c-4a01-b33c-91af855fcbdd.png)
![Screenshot 2023-04-05 at 14 26 12](https://user-images.githubusercontent.com/59873140/230168981-2799605b-b707-4eaf-b9bc-d19547d3f6ad.png)
![Screenshot 2023-04-05 at 14 26 50](https://user-images.githubusercontent.com/59873140/230169013-962b0891-7e73-4404-91e0-fc6a4c6e78c0.png)
![Screenshot 2023-04-05 at 14 28 58](https://user-images.githubusercontent.com/59873140/230169036-45f2d2a8-f57f-45af-be56-3a08325ea9b5.png)
![Screenshot 2023-04-05 at 14 29 53](https://user-images.githubusercontent.com/59873140/230169062-32081e0c-0c5f-4c59-ba39-ced1a6b3b227.png)

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
```html
<li><a aria-label="Home" href="../index.html">General</a></li>
                    <li><a aria-label="Web app from scratch" href="./wafs.html">1</a></li>
                    <li><a aria-label="CSS to the rescue" href="./cssttr.html">2</a></li>
                    <li><a aria-label="Browser technologies" href="./bt.html">3</a></li>
                    <li><a aria-label="Progressive web app" href="./pwa.html">4</a></li>
                    <li><a aria-label="Real time web" href="./rtw.html">5</a></li>
                    <li><a aria-label="Human centered design" href="./hcd.html">6</a></li>
                    <li><a aria-label="Meesterproef" href="./mp.html">7</a></li>
                    <li><a aria-label="Weekly Nerd" class="current" href="./wn.html">8</a></li>
          ```
![Screenshot 2023-04-05 at 15 01 35](https://user-images.githubusercontent.com/59873140/230169884-5d90402a-33dd-4f7e-bb82-e606365164f2.png)

![Screenshot 2023-04-05 at 15 06 26](https://user-images.githubusercontent.com/59873140/230169944-4305de91-ac77-451d-be1e-18f9d5ffd25f.png)

## Browser
The following browser will be used to test the application:
- Safari iphone
- Safari mac
- Samsung internet mobile
- Google chrome desktop
- PrinceXML 

### Chrome
Chrome was the main browser while testing this application as you could have seen based on the picture above.
<img width="1352" alt="Screenshot 2023-04-04 at 16 33 08" src="https://user-images.githubusercontent.com/59873140/230171194-f622409f-384b-4887-a1fe-cdbff133c984.png">

Chrome supports allmost everything:
- `:has()` selector 
- Form validation with css 
- It looks good on mobile
- Dark mode and light mode 
- Data is stored in local storage

### Safari MacOS
Safari is also one of the browser that supports almost everything

![Screenshot 2023-04-05 at 17 19 32](https://user-images.githubusercontent.com/59873140/230172483-5f2faa6a-8185-46f5-9b38-efb14893cdc8.png)

![Screenshot 2023-04-05 at 17 19 08](https://user-images.githubusercontent.com/59873140/230172519-9b686206-13f5-45c0-a712-344f7f016002.png)

### Safari IOS
Safari is also one of the browser that supports almost everything

![IMG_8750](https://user-images.githubusercontent.com/59873140/230172984-8062ee05-6b01-479c-9924-8b88ade425b4.PNG)
![IMG_8749](https://user-images.githubusercontent.com/59873140/230173010-327be260-fd90-4638-b380-4ec892ff44b5.PNG)

### Firefox
Firefox is one of the browser that doesn't support everything yet.
Like `:has()` it doesn't support it, but it for that you can use other css selector

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
![Screenshot 2023-04-05 at 17 30 40](https://user-images.githubusercontent.com/59873140/230173809-24a69a76-d189-49c9-8073-9b8b2e7d3d9d.png)

And for the progress bar you have to use `-moz-...` otherwise it won't work in firefox

```css
progress::-moz-progress-bar {
    background-color: var(--progress-bar-moz);
    border-radius: 7px;
}
```
### Samsung Internet
Almost everything works like it should on this browser, only one thing didn't
It ignores my color pallete

![a4d6eebf-940f-42d3-a2d0-febd863754d3](https://user-images.githubusercontent.com/59873140/230174108-32f72a72-5cb1-4a5f-a58c-d9893e948720.JPG)

![4d93bee1-3791-4f2a-a540-4aea7e77ee1e](https://user-images.githubusercontent.com/59873140/230174131-625af3ed-ba5e-4015-94b9-892cb7210ad6.JPG)

### PrinceXML
PrinceXML is a browser where you can convert HTML pages and CSS into a PDF file. 
![Screenshot 2023-04-05 at 20 40 23](https://user-images.githubusercontent.com/59873140/230174635-2310166b-f433-426f-aae1-d744e5e1d371.png)

You add your HTML file
![Screenshot 2023-04-05 at 20 40 43](https://user-images.githubusercontent.com/59873140/230174726-949b141e-3713-47f7-8c00-4d6afa282843.png)

Then you add your css file
![Screenshot 2023-04-05 at 20 41 15](https://user-images.githubusercontent.com/59873140/230174832-8157df32-c663-419e-a416-ec022bf446c3.png)

If you havve other files you add them 
![Screenshot 2023-04-05 at 20 41 46](https://user-images.githubusercontent.com/59873140/230174938-c4587a78-2dac-42c4-8d04-73048b9bc4b4.png)

And the it will generate the `pdf` file for you.

But it doesn't support everything:
```prince: script/app.js: error: can't open input file: No such file or directory
prince: style.css:27: warning: unknown media feature 'prefers-color-scheme'
prince: style.css:122: warning: unknown pseudo-element '::placeholder'
prince: style.css:225: warning: unknown pseudo-element '::placeholder'
prince: style.css: warning: unsupported properties: gap
```
## Layers
The final product consist of 3 layers. 
The core functionalities of the form are that the user can enter and submit their information, but also the user needs to know what they entered wrong and right so form validation and gives feedback. 

### Functional layer
In the functional layer, you have the semantic HTML structure. For a form, you have to use the form tag. To fill in data you use the input element. Every part of the form that has something to do with each other goes into a fieldset.

In the functional layer you can validate the input of the user. In the HTML you have to use the correct input types. like, email, nummer,text and give it a pattern. And this is also important for screen readers.

### Usuable layer
In the usuable layer is more about the design patterns that was used. 
For form, the labels should be under each other otherwise you have to scan a lot with your eyes. 
Then I considered consistency, for example all buttons have the same shape and color, input fields have the same color. 
All pages are the same etc.

In this layer came the progressive enhancement, the formatting. From a normal html page to a nice formatted pages.

- Color added with separate color for dark and light mode
- Custom fonts added above the system fonts
- Invisible radio buttons
- Different `:focus`, `:hover` state
- CSS form validation with `:valid` and `:invalid` 
- Give error message with `::after`
- Form can also be completed with smaller screens

### Pleasureble layer
This is the part where users get a good feeling when he uses the site. 
Usually the site is very beautiful, with lots of animation and transitions. 
Javascript is an enhancement. Because with javascript, users can save data in the form and fill it in further later. 
Also, there are more personalized feedback sent to the users.

- Javascript form validation
- Feedback 
- Data are stored with LocalStorage

## Nice to have
### Feature
- [ ] Fill the enquête as anonouymous
- [ ] Better transation between pages
- [ ] Server for the application

### Source
- [Principes](https://www.w3.org/DesignIssues/Principles.html)
- [Het web is voor iedereen](https://www.youtube.com/watch?v=UMNFehJIi0E)
- [Replace localstorage](https://dev.to/rdegges/please-stop-using-local-storage-1i04)
---
