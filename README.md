# OCS 3.1 prototype / v.2015

## Compatibility and Requirements

* Fundamental
** Bootstrap 3.2.0
** Backbone.js 1.2.3
** Require.js 2.1.22
** firebase.js (for demonstration)
** firebase.backbone.js (for demonstrantion)

* JS library
** jQuery 1.11.3
** Underscore.js 1.8.3

* JS plugin
** starRate.js 1.1
** modalInit.js 1.0

* 3-party JS plugin
** bootstrap-datepicker.js
** jquery.validate.js
** jquery-validate.bootstrap-tooltip.js

* Cross-browser hack
** html5shiv.min.js 3.7.2 (ie8 media query hack)
** respond.min.js 1.4.2
** ie10-viewport-bog-workaround.js

```
UNDER CONSTRUCTION ......
```

## HTML

### global

* page.0 template / [00template.html](00template.html)
* page.10 login / [10.html](10.html)
* page.500 error mssage / [err.html](err.html)

### inside

* page.11 question management / [11j.html](11j.html)

question query (AJAX GET) / request
  ```PARAM
  keyword {str} // keyword of question
  rowSize {num} // qty. of pages in pagination
  toPage {num} // destination page
  ```
question query / response
  ```PARAM
  {
    "pagination" : { // {obj} pagination param.
      "current" : 1, // {num} current page
      "startPage" : 1, // {num} fist page(number)of pagination
      "pagesLength" : 10, // {num} pages to show in pagination
      "finalPage" : 16 // {num} total qty. of pages (in this query)
    },
    "dataObj" :{ // {obj} query result
      "ID00001" : { // {str} question ID
        "desc" : "blah blah", // {str} question description
        "date" : "2014/12/25" // {date/str} established date
      },
      // etc......
    }
  }
  ```

delete question (AJAX POST) / request
  ```PARAM
  exam-id {str} question ID
  ```

delete question / response
  ```PARAM
  {str} result

  case: 1 success

  case: 0 fail
  ```

replace question (AJAX POST)/ request
  ```PARAM
  exam-file {file} new questions(*.xls)
  exam-id {str} exam id of the question to be replaced
  ```

* page.12 upload question / [12j.html](12j.html)
* page.13 upload examinee / [13.html](13.html)

### manager

* page.21 questions overview / [21j.html](21j.html)

delete exam (AJAX POST) / request
  ```PARAM
  id {str} id of the exam to be removed
  ```

delete exam / response
  ```PARAM
  {str} result
  case: 1 success
  case: 0 fail
  ```

re-send exam invitation (AJAX POST) / request
  ```PARAM
  id {str} id of the exam
  ```

re-send exam invitation / response
  ```PARAM
  {str} result
  case: 1 success
  case: 0 fail
  ```

* page.21a question detail / [21a.html](21a.html)
* page.22 booking exam / [22j.html](22j.html)
* page.22a booking exam ~ result / [22aj.html](22aj.html)

form submit (POST)
  ```PARAM
  (exam info)
  examDuration {num} time limit (min.)
  examStartDate {date} eg:2014/12/01
  dxamEndDate {date} eg:2014/12/31
  examineeList[] {arr} examinee list by id, eg: ['a001','a001','a003']

  (questions detail)
  questionBrand[] {arr} brand id of vehicle maker, eg: ['brand001','brand002']
  questionCount[] {arr} question qty.
  questionLevel[] {arr} question level
  ```