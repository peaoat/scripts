# /scripts/

+---------->8----------+

Snippets, mostly work related
### This git is for storing simple scripts authored for use at my job.


#### JavaScript
> _A lot of these js scripts rely on jQuery. It is safe to assume any one of these relies on jQuery_


##### CheckAcc.js
> (for Volusion stores) Replaces #user_icon with a different image if the user is logged in

##### mobile_img.js
> (for Volusion stores) Whenever the window size changes, check the width. If the width is under or over a particular breakpoint, change the logo img's src to match.

##### ThumbRollover.js
> (for Volusion stores) Targets all images which match the '.category img[src\*="/v/vspfiles/photos/"]' selector and gives a mouseover/mouseout pair of events which change the displayed image if one exists.


#### Python3
##### compressor.py
>_Depends on PIL (pillow)_

>_\>pip3 install pillow_

> Compresses all of the jpegs in the cwd from which it's run using pillow

##### email.py
> modifies the "index.html" file from an InkBrush export to replace references to images with direct links pulled manually from photobucket.

> _Looking forward to using a different image hosting service with a functional API to be able to upload images and get links automatically._

##### renamer.py
> Changes the names of files in it's own directory to remove "\_mini.jpg"

> _Would like to set up to remove other phrases with re._