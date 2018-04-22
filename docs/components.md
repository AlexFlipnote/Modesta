# Forcing style
These classes will enforce style to an object, so you don't need to use `style=""` on many objects. If there's a need for more, please say so on the issue tab.

NOTE: All objects are presented as **span** for example, can be used
on anything if you want.
```html
<span class="box-shadow">Add box shadow on any box</span>
<span class="bold">Make any text bold</span>
<span class="no-margin">Remove margin from object</span>
<span class="no-padding">Remove padding from object</span>
<span class="transparent">Make the object's background transparent</span>
<span class="center">Make anything inside center aligned</span>
<span class="center-text">Only make the text inside center aligned</span>
```


# Colours/Colors
```html
<span class="COLOUR">Make the object's background into colour</span>
<span class="COLOUR-text">Make the object's text into colour</span>
<span class="COLOUR-dropshadow">Add a dropshadow of colour choice</span>
```
If you want a preview of all colours, please check the file **colours.html** inside **examples**<br>
or visit [this website](https://modesta.alexflipnote.xyz/examples/colours.html)


# Cards
The cards you make must always be inside a card container.
If you're making multiple, just add all the card classes inside the container.
```html
<section class="card-container">
  <div class="card">
    <div class="avatar">
      <img src="URL/PATH">
    </div>
    <h1 class="title">Username</h1>
    <p class="description">Text under username</p>
    <div class="footer">
      <a href="#">Website</a>
      <a href="#">Website 2</a>
    </div>
  </div>

  <div class="card">...
</section>
```

# Fullscreen
This will fill the current screen 100% on height and width.
You can also do `<section class="fullscreen half">` to only fill 50% of the screen.
If you add anything under it, then of course more content will be under, but you will always
start with a fullscreen/half screen on the start.
```html
<section class="fullscreen">
  <div class="background" style="background-image: url('URL/PATH');"></div>
  <div class="center-object">
    <section class="me">
      <img draggable="false" src="URL/PATH" class="image-title">
      <h1 class="title">Username</h1>
      <span class="undertitle">Text under username</span>
    </section>
    <div class="buttons">
      <a href="#" class="btn animation turquoise" target="_blank">Website 1</a>
      <a href="#" class="btn animation nephritis-flat" target="_blank">Website 2</a>
    </div>
  </div>
</section>
```

# Navbar
Navigation bar is made to be responsive, but do not add too many links.
```html
<div class="nav-container">
  <span id="menu-icon"></span>
  <h1 class="nav-title">Cool website</h1>
  <div id="navside" class="sidenav">
    <span class="closebtn">&times;</span>
    <a href="#" class="current">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
  <script>
    var navside = document.getElementById('navside');
    document.getElementById("menu-icon").onclick = function() { navside.style.width = "250px"; }
    document.getElementsByClassName("closebtn")[0].onclick = function() { navside.style.width = "0"; }
  </script>
</div>
```

# Box container
If you even need a nice box around something with a colour, use this.
```html
<div class="box-container emerald">
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur...</p>
</div>
```
**Preview:**<br>
![preview](https://i.alexflipnote.xyz/265c8f.png)


# Loading
It will only import the loading animation, not the text above.
```html
<div class="loader">Loading...</div>
```
**Preview:**<br>
![preview](https://i.alexflipnote.xyz/9cd957.gif)


# Table content
This table content is not responsive due to impossible task of merging this into one object-friendly for phone.
You can if you want, remove the dropshadow from the table box.
If you don't want the table to be center, just remove **table-center**
```html
<div class="table-container table-center">
  <table class="box-shadow white-dropshadow black-text">
    <thead>
      <tr>
        <th>Material</th>
        <th>Quantity</th>
        <th>Unit price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Acrylic (Transparent)</td>
        <td class="numeric">25</td>
        <td class="numeric">$2.90</td>
      </tr>
      <tr>
        <td>Plywood (Birch)</td>
        <td class="numeric">50</td>
        <td class="numeric">$1.25</td>
      </tr>
      <tr>
        <td>Laminate (Gold on Blue)</td>
        <td class="numeric">10</td>
        <td class="numeric">$2.35</td>
      </tr>
    </tbody>
  </table>
</div>
```
**Preview:**<br>
![preview](https://i.alexflipnote.xyz/bd6121.png)


# Comments
This will both support a normal comment and a reply to that one, by only using an extra reply tag.
You can as well make it have a reply inside a reply.
```html
<div class="box-container turquoise">
  <h1 class="center-text">Comment section builder</h1>
  <section class="comment-section">
    <div class="comment-container">
      <div class="avatar">
        <img src="../css/images/avatar.png">
      </div>
      <div class="text">
        <h1 class="author">Username</h1>
        <span class="comment">This is a nice comment</span>
      </div>
    </div>

    <div class="comment-container reply">
      <div class="avatar">
        <img src="../css/images/avatar.png">
      </div>
      <div class="text">
        <h1 class="author">Username</h1>
        <span class="comment">Cool! :3</span>
      </div>
    </div>
  </section>
</div>
```
**Preview:**<br>
![preview](https://i.alexflipnote.xyz/e289b2.png)


# Modal
This will make it so you have a nice popout.
Remember that this also requires JavaScript, which can be found in the **js** folder.
If you need an example, check it in the **example** folder.
```html
<a id="trigger">Click me</a>
<!-- Modal popout screen -->
<div id="modal" class="modal modal--close">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h1>Hello world!</h1>
    <p>This is simple just a test modal for my website :3</h1>
  </div>
</div>
```
