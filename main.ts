input.onGesture(Gesture.EightG, function () {
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
})
let degrees = 0
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    `)
input.setAccelerometerRange(AcceleratorRange.EightG)
radio.setGroup(204)
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.clearScreen()
        led.toggle(2, 0)
    } else if (degrees < 135) {
        basic.clearScreen()
        led.toggle(4, 2)
    } else if (degrees < 225) {
        basic.clearScreen()
        led.toggle(2, 4)
    } else if (degrees < 315) {
        basic.clearScreen()
        led.toggle(0, 2)
    } else {
        basic.clearScreen()
        led.toggle(2, 0)
    }
})
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Z))
})
