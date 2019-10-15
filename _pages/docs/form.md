---
layout: docs
permalink: /form

title: Form
description: Template of making a form for emails, feedback, etc
---
Create a form for people to submit login information or just use it for a contact placement.
This is also great to be used with [columns](#columns) and other things you might want.
```html
<form>
  <div class="flex-grid">
    <div class="col-xs-6">
      <label for="exampleEmail">Your email</label>
      <input class="full-width" type="email" placeholder="test@example.com" id="exampleEmail">
    </div>
    <div class="col-xs-6">
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
  <input class="btn highlight" type="submit" value="Submit">
</form>
```

# Preview
<form>
  <div class="flex-grid">
    <div class="col-xs-6">
      <label for="exampleEmail">Your email</label>
      <input class="full-width" type="email" placeholder="test@example.com" id="exampleEmail">
    </div>
    <div class="col-xs-6">
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
  <input class="btn highlight" type="submit" value="Submit">
</form>
