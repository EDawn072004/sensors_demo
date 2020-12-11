input.onGesture(Gesture.EightG, function on_gesture_eight_g() {
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # . . . .
        `)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.clearScreen()
})
let degrees = 0
basic.showLeds(`
    . . . . .
    . # # # .
    . . # . .
    . . # . .
    . . . . .
    `)
input.setAccelerometerRange(AcceleratorRange.EightG)
radio.setGroup(204)
basic.forever(function on_forever() {
    radio.sendNumber(input.acceleration(Dimension.Z))
})
basic.forever(function on_forever2() {
    
    degrees = input.compassHeading()
    if (degrees < 45) {
        radio.sendString("North")
    } else if (degrees < 135) {
        radio.sendString("East")
    } else if (degrees < 225) {
        radio.sendString("South")
    } else if (degrees < 315) {
        radio.sendString("West")
    } else {
        radio.sendString("North")
    }
    
})
