def on_logo_pressed():
    动动爪子()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

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
def 动动爪子():
    global 爪子动
    if 爪子动:
        return
    爪子动 = True
    Tinybit.RGB_Car_Program().show_color(neopixel.rgb(30, 0, 0))
    basic.show_icon(IconNames.HAPPY)
    Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 100)
    basic.pause(5000)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    basic.pause(1000)
    Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_BACK, 100)
    basic.pause(5000)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    爪子动 = False
    basic.show_icon(IconNames.HEART)
    Tinybit.RGB_Car_Program().show_color(neopixel.rgb(0, 10, 0))
按键 = 0
爪子动 = False
转动中 = False
basic.show_icon(IconNames.HEART)
Tinybit.RGB_Car_Program().show_color(neopixel.rgb(0, 10, 0))
转动中 = False
爪子动 = False

def on_forever():
    pass
basic.forever(on_forever)
