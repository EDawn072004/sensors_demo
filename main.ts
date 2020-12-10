input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showString("T")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showString("R")
})
radio.setGroup(204)
