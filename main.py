"""
def on_received_string(receivedString):
    acceleration = ""
    if receivedString == "transmitter":
        basic.show_string("R")
        radio.send_value(acceleration, input.acceleration(Dimension.X))
    if receivedString == acceleration:
        serial.write_string("" + (acceleration))
radio.on_received_string(on_received_string)
"""
basic.show_string("T")
input.set_accelerometer_range(AcceleratorRange.FOUR_G)
radio.set_group(204)