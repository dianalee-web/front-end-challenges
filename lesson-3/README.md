# Lesson 3: Layout Positioning

As a front end developer, you will often be handed comps from a designer that you then have to build. You will need to be able to take a graphic file and recreate it with code. This means that you'll have to be able to think through how you're going to get all the elements in that comp where they need to be, and that requires a solid understanding of how to position HTML elements with CSS.

### Requirements

In this exercise, we'll take a series of simple comps and recreate each of them. Within the "wrapper" `<div>` will make the appropriate number of `<div>` tags with the div numbers indicated in the comps, give them a `<height>`, `<width>`, and `background-color` and then make them match the layout in the comp. Here's an example of what this might look like in your HTML and CSS:

#### Your HTML:

```
<div class="div1">
  div1
</div>

<div class="div2">
  div2
</div>
```

#### Your CSS:

```
div {
  width: 100px;
  height: 100px;
  background-color: black;
  color: white;
}
.div1 {
  float: right;
}

.div2 {
  float: left;
}
```

- Use the `index.html` page as a template and create 15 additional pages based on that page. Label them `layout-1.html` and so forth.
- On the `index.html` page, add an `<h1>` and input "Table of Contents".
- Look through the `/layouts` directory and starting from `layout-1.png`, go through the exercises in numerical order and position the divs based on the image.
- Use either an in document or external stylesheet.
- For each lesson you complete, add it to the table of contents as `<ol>` list item and link it to the appropriate exercise.

#### Tips:

- Remember, we've talked about several ways to position elements on the page. These include but are not necessarily limited to `display: block` and `display: inline-block`, `position: relative` and `position: absolute`, `margin`, `padding`, and the infamous `float`.
- If the layout dictates, some of the divs may be nested within other divs. Use your best judgement!
- See how many different ways you can achieve the same result and consider the pros/cons of solution!

### Key Concepts

- Given a layout comp, replicate it using HTML & CSS.

## Links

- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_modelm)
- [CSS-Tricks: Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS)
