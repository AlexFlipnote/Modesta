---
layout: docs
permalink: /docs/columns

title: Columns
description: Columns objects to split website content into different shapes
---
## Flex columns
```html
<div class="flex-grid">
  <div class="col-xs">
    <h4>2 Column</h4>
  </div>
  <div class="col-xs">
    <h4>Magic</h4>
  </div>
</div>
```
Columns will change depending on how many you add.

# Preview
<div class="flex-grid">
  <div class="col-xs">
    <div class="box-container turquoise-flat"><h4>4</h4></div>
  </div>
  <div class="col-xs">
    <div class="box-container turquoise-flat"><h4>Column</h4></div>
  </div>
  <div class="col-xs">
    <div class="box-container turquoise-flat"><h4>Magic</h4></div>
  </div>
  <div class="col-xs">
    <div class="box-container turquoise-flat"><h4>:D</h4></div>
  </div>
</div>

<div class="flex-grid">
  <div class="col-xs">
    <div class="box-container turquoise-flat"><h4>3</h4></div>
  </div>
  <div class="col-xs">
    <div class="box-container turquoise-flat"><h4>Column</h4></div>
  </div>
  <div class="col-xs">
    <div class="box-container turquoise-flat"><h4>Magic</h4></div>
  </div>
</div>

<div class="flex-grid">
  <div class="col-xs">
    <div class="box-container turquoise-flat"><h4>2 Column</h4></div>
  </div>
  <div class="col-xs">
    <div class="box-container turquoise-flat"><h4>Magic</h4></div>
  </div>
</div>

<div class="flex-grid">
  <div class="col-xs">
    <div class="box-container turquoise-flat"><h4>Kinda explains itself at this point...</h4></div>
  </div>
</div>

## Flex columns 1-12
```html
<div class="flex-grid">
  <div class="col-xs-4">
    <h4>Column</h4>
  </div>
  <div class="col-xs-8">
    <h4>Magic</h4>
  </div>
</div>
```
<br>
<div class="flex-grid">
  <div class="col-xs-4">
    <div class="box-container turquoise-flat"><h4>Coulumn</h4></div>
  </div>
  <div class="col-xs-8">
    <div class="box-container turquoise-flat"><h4>Magic</h4></div>
  </div>
</div>

Basically, in this example, **4 + 8 = 12**.
You can add as many as you desire to one line, as long as all columns equals **12**

-----------------------------

## Manual columns
```html
<div class="row">
  <div class="one-half column">
    <h4>2 Column</h4>
  </div>
  <div class="one-half column">
    <h4>Magic</h4>
  </div>
</div>
```
Column choices:
- none ( 1/1 ) [ but why... ]
- one-half ( 1/2  1/2 )
- one-third ( 1/3  1/3  1/3 )
- one-fourth ( 1/4  1/4  1/4  1/4 )

# Preview
<div class="row center-text">
  <div class="one-fourth column">
    <div class="box-container turquoise-flat"><h4>4</h4></div>
  </div>
  <div class="one-fourth column">
    <div class="box-container turquoise-flat"><h4>Column</h4></div>
  </div>
  <div class="one-fourth column">
    <div class="box-container turquoise-flat"><h4>Magic</h4></div>
  </div>
  <div class="one-fourth column">
    <div class="box-container turquoise-flat"><h4>:D</h4></div>
  </div>
</div>

<div class="row center-text">
  <div class="one-third column">
    <div class="box-container turquoise-flat"><h4>3</h4></div>
  </div>
  <div class="one-third column">
    <div class="box-container turquoise-flat"><h4>Column</h4></div>
  </div>
  <div class="one-third column">
    <div class="box-container turquoise-flat"><h4>Magic</h4></div>
  </div>
</div>

<div class="row center-text">
  <div class="one-half column">
    <div class="box-container turquoise-flat"><h4>2 Column</h4></div>
  </div>
  <div class="one-half column">
    <div class="box-container turquoise-flat"><h4>Magic</h4></div>
  </div>
</div>

<div class="row center-text">
  <div class="column">
    <div class="box-container turquoise-flat"><h4>Kinda explains itself at this point...</h4></div>
  </div>
</div>
