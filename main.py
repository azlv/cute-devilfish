def on_logo_touched():
    basic.show_icon(IconNames.HAPPY)
    Tinybit.RGB_Car_Program().show_color(neopixel.colors(NeoPixelColors.BLACK))
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_button_pressed_a():
    global 按键
    按键 = 1
    转动()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global 按键
    按键 = 2
    转动()
input.on_button_pressed(Button.B, on_button_pressed_b)

def 转动():
    global 转动中
    if 转动中:
        转动中 = False
        Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    else:
        转动中 = True
        if 按键 == 1:
            Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 50)
        else:
            Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_BACK, 50)

def on_sound_loud():
    Tinybit.RGB_Car_Program().show_color(neopixel.rgb(randint(0, 0), randint(0, 255), randint(0, 255)))
    basic.pause(100)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

按键 = 0
转动中 = False
转动中 = False

def on_forever():
    Tinybit.RGB_Car_Program().show_color(neopixel.rgb(randint(0, 255), 0, 0))
    basic.pause(100)
basic.forever(on_forever)
