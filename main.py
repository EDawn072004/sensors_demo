def on_gesture_eight_g():
    basic.show_leds("""
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # . . . .
        """)
input.on_gesture(Gesture.EIGHT_G, on_gesture_eight_g)

def on_button_pressed_a():
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

# def on_received_string(receivedString):
# acceleration = ""
# if receivedString == "transmitter":
# basic.show_string("R")
# radio.send_value(acceleration, input.acceleration(Dimension.X))
# if receivedString == acceleration:
# serial.write_string("" + (acceleration))
# radio.on_received_string(on_received_string)
basic.show_string("T")
input.set_accelerometer_range(AcceleratorRange.EIGHT_G)
radio.set_group(204)

def on_forever():
    radio.send_number(input.acceleration(Dimension.Z))
basic.forever(on_forever)

degrees = 0

def compass():
    global degrees
    degrees = input.compass_heading()
    if degrees < 45:
        basic.show_string("N")
    elif degrees < 135:
        basic.show_string("E")
    elif degrees < 225:
        basic.show_string("S")
    elif degrees < 315:
        basic.show_string("W")
    else:
        basic.show_string("N")
basic.forever(compass)