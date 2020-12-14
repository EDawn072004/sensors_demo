input.onGesture(Gesture.EightG, function () {
    basic.clearScreen()
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . . # . .
        . . . . .
        `)
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
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Z))
})
basic.forever(function () {
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
