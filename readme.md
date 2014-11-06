A simple errors app initially from the discover meteor book.It creates a local collection that holds the errors for a specified period of time. Errors are initially displayed in the browser and then fade out . 

##Usage: 
  ```javascript
  Errors.throw(message)
  ```

Styling is required - no css included, discover meteor tutorial uses the following plus a bit of bootstrap3: 
```css
.errors{
  position: fixed;
  z-index: 10000;
  padding: 10px;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  pointer-events: none;
}
.alert {
          animation: fadeOut 2700ms ease-in 0s 1 forwards;
  -webkit-animation: fadeOut 2700ms ease-in 0s 1 forwards;
     -moz-animation: fadeOut 2700ms ease-in 0s 1 forwards;
  width: 250px;
  float: right;
  clear: both;
  margin-bottom: 5px;
  pointer-events: auto;
}

```
