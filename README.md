# /scripts/

+---------->8----------+

Snippets, mostly work related
### This git is for storing simple scripts authored for use at my job.

+---------->8----------+

#### Bundled
> _This category contains files with multiple syntaxes rolled up into one snippet. ie HTML/CSS/JS_

##### gdprpopup.html
> _(for Volusion stores) Pops over a web page with a text box to alert the user to an update._

+---------->8----------+

#### JavaScript
> _A lot of these js scripts rely on jQuery. It is safe to assume any one of these relies on jQuery_


##### CheckAcc.js
> (for Volusion stores) Replaces #user_icon with a different image if the user is logged in

#### disableOOS.js
> (for Volusion stores) Makes the table holding "add to cart" and similar information invisible when an item is out of stock.

##### mobile_img.js
> (for Volusion stores) Whenever the window size changes, check the width. If the width is under or over a particular breakpoint, change the logo img's src to match.

##### ThumbRollover.js
> _pure js_
> (for Volusion stores) Targets all images which match a particular querySelector and adds a mouseover/mouseout pair of events which change the displayed image if an alternate exists.

+---------->8----------+

#### Python 3
> _These are most likely to be Python 3.6_


##### compressor.py
>_Depends on PIL (pillow)_

>_\>pip3 install pillow_

> Compresses all of the jpegs in the cwd from which it's run using pillow

##### email.py
> modifies the "index.html" file from an InkBrush export to replace references to images with direct links pulled manually from photobucket.

> _Looking forward to using a different image hosting service with a functional API to be able to upload images and get links automatically._

##### renamer.py
> Very simple script which changes the names of files in it's own directory to remove "\_mini.jpg"
