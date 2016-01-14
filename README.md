# OCS 3.0 phase1 prototype
  * v.2015 refactoried with Backbone.js
  * take a look at v.2014
   * [github repo.](https://github.com/sunnyork/htmlprototype-ocs)
   * [page list](http://sunnyork.github.io/htmlprototype-ocs/index.html)

## Javascript Compatibility and Requirements

* Fundamental
 * Bootstrap 3.2.0 / grid system and part of ui widgets
 * Backbone.js 1.2.3 / M.V.C.
 * Require.js 2.1.22 / js dependency
 * firebase.js (for demonstration)
 * firebase.backbone.js (for demonstration)

* Library
 * jQuery 1.11.3
 * Underscore.js 1.8.3

* Plugin
 * starRate.js 1.1 / on-page rating widget used to specify the question difficulty
 * modalInit.js 1.0 / used to integrate bootstrap modal widget with this system

* 3-party Plugin
 * bootstrap-datepicker.js / pop-up calendar
 * jquery.validate.js / validate form via specific rules before submitting
 * jquery-validate.bootstrap-tooltip.js / enhance look n' feel for bootstrap tooltip widget

* Cross-browser hack
 * html5shiv.min.js 3.7.2 / ie8 media query hack)
 * respond.min.js 1.4.2
 * ie10-viewport-bog-workaround.js

## Pages

### Pages for different kind of users

* Admin
 * query and maintain questions / [online demo.](http://sunnyork.github.io/frontend-ocs/manageTestData.html)
 * upload new questions
 * upload new examinees

* Exam manager
 * manage exams
 * book exams / [online demo.](/frontend-ocs/reserveTest.html)

* Examinee
 * view booked exams
 * do exams

### Generic Pages

* HTML template
* login page
* error page

## Style Sheets

* bootstrap.min.css
* ocs30.css
* starRate.css
* datepicker3.css

## Directory Structure
* for static files

``` 
 /static
 :
 :-- /css
 :  :-- bootstrap css
 :  :-- OCS css
 :  :-- misc
 :
 :-- /images
 :  :-- css sprites images
 :  :-- non-spirites images
 :
 :-- /js
 :  :-- config.js (js dependency)
 :  :
 :  :-- /app
 :  :   :-- application entries
 :  :
 :  :-- /collection
 :  :   :-- backbone model collections
 :  :
 :  :-- /lib
 :  :   :-- backbone.js
 :  :   :-- underscore.js
 :  :   :-- jquery.js
 :  :   :-- etc
 :  :
 :  :-- /model
 :  :   :-- backbone models
 :  :   
 :  :-- /plugin
 :  :   :-- newly implemented js plugins
 :  :   :-- 3rd-party js plugins
 :  :   
 :  :-- /util
 :  :   :-- utility js
 :  :   
 :  :-- /view
 :      :-- backbone views
 :    
 :-- /tpl
       :-- backbone template files
```