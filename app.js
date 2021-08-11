/*phil welsby 10 aug 2021 - key code challenge*/

/*set variables*/
let heading = document.getElementById('heading')
let eventKey = document.getElementById('eventKey')
let eventCode = document.getElementById('eventCode')
let eventWhich = document.getElementById('eventWhich')
let key = document.getElementById('key')

/*main program*/
document.addEventListener('keydown', () => {
    heading.textContent = event.keyCode
    eventKey.textContent = event.key
    eventCode.textContent = event.code
    eventWhich.textContent = event.charCode
    console.dir(event)
})



