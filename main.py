radio.set_group(1337)
msgs = {"01":"test"}
m = "Hello, World!"

def on_button_pressed_a():
    global m
    radio.send_string(m)

def on_received_string(receivedString):
    global msgs
    _id, _msg = receivedString.split(":")
    msgs[_id] = _msg

radio.on_received_string(on_received_string)
input.on_button_pressed(Button.A, on_button_pressed_a)