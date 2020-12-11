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

degrees = 0
basic.show_leds("""
    . . . . .
    . # # # .
    . . # . .
    . . # . .
    . . . . .
    """)
input.set_accelerometer_range(AcceleratorRange.EIGHT_G)
radio.set_group(204)

def on_forever():
    radio.send_number(input.acceleration(Dimension.Z))
basic.forever(on_forever)

def on_forever2():
    global degrees
    degrees = input.compass_heading()
    if degrees < 45:
        radio.send_string("North")
    elif degrees < 135:
        radio.send_string("East")
    elif degrees < 225:
        radio.send_string("South")
    elif degrees < 315:
        radio.send_string("West")
    else:
        radio.send_string("North")
basic.forever(on_forever2)
