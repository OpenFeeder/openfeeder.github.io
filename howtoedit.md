

# How to edit the site

# Site folder layout

This is the website folder layout:

  - index.html <- html containing the whole site with navbar, image carousel and text content
  - assets <- folder with images, favicons, less and  js
     - favicons <- website icons for different devices
     - images <- folder containing all images
     - js <- javascript to initialize tooltip and drop menu
     - less <- *not used*
  - dist <- containing processed css/js
     - css <-- minified css
        - bootstrap.min.css <- bootswatch theme
        - theme.css <- style customization


# Change the text content

=> Edit the file `index.html`
    
## Edit an existing section

The file `index.html` contains the whole one page website. 
The web site text content starts at the line containing the comment:

```html
<!-- content section : ... -->
```

Choose a given section.

```html
<div class="row section container-fluid">
    <div class="col-xs-12">
          ...
          write text here
          ...
    </div>
</div>
``` 

Inside this section, you can write some [HTML](http://www.cheat-sheets.org/sites/html.su/) code. However, since this site is built over Bootstrap, you can also use predefined [Bootstrap typography styles](https://www.w3schools.com/bootstrap/bootstrap_typography.asp).

## Add a section

Each section is enclosed within two `div` tags with classes `row` and `col-xs-12`. If you want to add a section, keep these two `div` to get a responsive [bootstrap grid](https://www.w3schools.com/bootstrap/bootstrap_grid_basic.asp) layout!

You might also edit the navbar to add a entry corresponding to the added section. Go to the following line containing the comment:

```html
<!-- content section : ... -->
```

Add a list item entry (tag `li`) with the label *entry_label* referring to the section identified by *my_section_anchor* 

```html
<li><a href="#_my_section_anchor_">entry_label</a></li>
```

Do not forget to identify the added section (*my_section_anchor*):

```html
<div id="_my_section_anchor_" class="row section container-fluid">
    <div class="col-xs-12">
          My section content
          ...
    </div>
</div>
``` 

# Add pictures to carousel

=> edit the file `index.html`

1. add images in `assets/images` folder

2. add carousel indicators (see `li` tags within in the class `carousel-indicators` )

Increment the number *_increment_number_* (here, it should be equal to 4)

```html
...
<ol class="carousel-indicators">
   ...
   <li data-target="#myCarousel" data-slide-to="3"></li>
   <li data-target="#myCarousel" data-slide-to="_increment_number_"></li>
</ol>
```

3. add slide containing image (see `div` tags within the div of class `carousel-inner`). 

```html
<div class="item">
    <img src="./assets/images/_my_image_filename._" alt="Carte" class="img-rounded img-responsive center-block">    
</div>
```

4. The carousel caption (class `carousel-caption`) is optional.

```html
<div class="item">
    <img ...>
    <div class="carousel-caption">
        <h4>_caption_title_</h4>
        <small>_caption_text_</small>
    </div>
</div>
```

# Change the style

=> edit the file `dist/css/theme.css`

The theme is mainly defined by `bootstrap.min.css`. 
You can override some settings by editing the [cascading style sheet](https://www.w3schools.com/css/default.asp) `theme.css`.


    