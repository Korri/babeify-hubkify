#Babeify & Hunkify
> Bookmarklet that replace all images with randome images from [bonjourmadame.fr](http://bonjourmadame.fr) or [bonjourmonsieur.fr](http://bonjourmonsieur.fr)

More info at [http://korri.github.io/babeify-hunkify](http://korri.github.io/babeify-hunkify)

##Babeify code
```javascript
javascript:(function(){function%20forge_url(a,b)%7Breturn%22http://babeholder.pixoil.com/img/%22+a+%22/%22+b+%22/%22+1e4*Math.random()%7Dwindow.jQuery%7C%7Cdocument.write(%22%3Cscript%20src='https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'%3E%3C/script%3E%22),function(a)%7Ba(%22img%22).each(function()%7Bvar%20b=a(this);b.attr(%22src%22,%22http://babeholder.pixoil.com/img/%22+b.width()+%22/%22+b.height()+%22/%22+1e4*Math.random())%7D),a(%22*%22).filter(function()%7Bvar%20a=%22none%22;return%20this.currentStyle&&(a=this.currentStyle.backgroundImage),window.getComputedStyle&&(a=document.defaultView.getComputedStyle(this,null).getPropertyValue(%22background-image%22)),%22none%22!==a&&a.match(/url%5C(/i)%7D).each(function()%7Bvar%20b=a(this);a(%22%3Cimg/%3E%22).bind(%22load%22,function()%7Bb.css(%22background-image%22,'url(%22'+forge_url(a(this).width(),a(this).height())+'%22)'),a(this).remove()%7D).hide().appendTo(%22body%22).attr(%22src%22,b.css(%22background-image%22).replace(%22url(%22,%22%22).replace(%22)%22,%22%22).replace(%22'%22,%22%22).replace('%22',%22%22))%7D)%7D(window.jQuery,forge_url);})();
```

##Hunkify code
```javascript
javascript:(function(){function%20forge_url(a,b)%7Breturn%22http://hunkholder.pixoil.com/img/%22+a+%22/%22+b+%22/%22+1e4*Math.random()%7Dwindow.jQuery%7C%7Cdocument.write(%22%3Cscript%20src='https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'%3E%3C/script%3E%22),function(a)%7Ba(%22img%22).each(function()%7Bvar%20b=a(this);b.attr(%22src%22,%22http://babeholder.pixoil.com/img/%22+b.width()+%22/%22+b.height()+%22/%22+1e4*Math.random())%7D),a(%22*%22).filter(function()%7Bvar%20a=%22none%22;return%20this.currentStyle&&(a=this.currentStyle.backgroundImage),window.getComputedStyle&&(a=document.defaultView.getComputedStyle(this,null).getPropertyValue(%22background-image%22)),%22none%22!==a&&a.match(/url%5C(/i)%7D).each(function()%7Bvar%20b=a(this);a(%22%3Cimg/%3E%22).bind(%22load%22,function()%7Bb.css(%22background-image%22,'url(%22'+forge_url(a(this).width(),a(this).height())+'%22)'),a(this).remove()%7D).hide().appendTo(%22body%22).attr(%22src%22,b.css(%22background-image%22).replace(%22url(%22,%22%22).replace(%22)%22,%22%22).replace(%22'%22,%22%22).replace('%22',%22%22))%7D)%7D(window.jQuery,forge_url);})();
```

###How it works
The script finds every image and background image in the website, get there size and replaces them with images from [babeholder](http://babeholder.pixoil.com/) or [hunkholder](http://hunkholder.pixoil.com/).

###Limitations
As of now, it does not work on secure websites because [babeholder](http://babeholder.pixoil.com/) and [hunkholder](http://hunkholder.pixoil.com/) do not support HTTPS.
