# Errors and Alerts
A simple errors app initially from the discover meteor book.It creates a local collection that holds the errors for a specified period of time. Errors are initially displayed in the browser and then fade out .

## Usage:
Add the template to your layout:
```html
{{> meteorErrors}}
```
and then whenever you want to throw an error just drop the following in:
```javascript
Errors.throw(message, alertType)
```
message is the text of the message
alertType is the status type of the alert:
```css
alert-success
alert-info
alert-warning
alert-danger
```
