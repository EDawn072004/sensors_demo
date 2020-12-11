// def on_received_string(receivedString):
// acceleration = ""
// if receivedString == "transmitter":
// basic.show_string("R")
// radio.send_value(acceleration, input.acceleration(Dimension.X))
// if receivedString == acceleration:
// serial.write_string("" + (acceleration))
// radio.on_received_string(on_received_string)
basic.showString("T")
input.setAccelerometerRange(AcceleratorRange.FourG)
radio.setGroup(204)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Z))
})
