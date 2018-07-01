---
layout: docs
permalink: /docs/form

title: Form
description: Template of making a form for emails, feedback, etc
---
Make a form for people to submit within login or just have a contact placemenet.
This is also great to be used with [columns](#columns) and other things you might want.
```html
<div class="form-container">
  <form>
    <div class="row">
      <div class="one-half column">
        <label for="exampleEmail">Your email</label>
        <input class="full-width" type="email" placeholder="test@example.com" id="exampleEmail">
      </div>
      <div class="one-half column">
        <label for="exampleSelect">Reason of conteact</label>
        <select class="full-width" id="exampleSelect">
          <option value="option1">Memes</option>
          <option value="option2">Facebook</option>
          <option value="option3">Instagram</option>
        </select>
      </div>
    </div>
    <label for="exampleMessage">Message</label>
    <textarea class="full-width" placeholder="Text..." id="exampleMessage"></textarea>
    <input class="btn" type="submit" value="Submit">
  </form>
</div>
```

# Preview
<div class="form-container">
  <form>
    <div class="row">
      <div class="one-half column">
        <label for="exampleEmail">Your email</label>
        <input class="full-width" type="email" placeholder="test@example.com" id="exampleEmail">
      </div>
      <div class="one-half column">
        <label for="exampleSelect">Reason of conteact</label>
        <select class="full-width" id="exampleSelect">
          <option value="option1">Memes</option>
          <option value="option2">Facebook</option>
          <option value="option3">Instagram</option>
        </select>
      </div>
    </div>
    <label for="exampleMessage">Message</label>
    <textarea class="full-width" placeholder="Text..." id="exampleMessage"></textarea>
    <input class="btn" type="submit" value="Submit">
  </form>
</div>
