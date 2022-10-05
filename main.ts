basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
