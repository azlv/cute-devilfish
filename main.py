def on_logo_touched():
    basic.show_icon(IconNames.HAPPY)
    Tinybit.RGB_Car_Program().show_color(neopixel.colors(NeoPixelColors.BLACK))
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_sound_loud():
    Tinybit.RGB_Car_Program().show_color(neopixel.rgb(randint(0, 0), randint(0, 255), randint(0, 255)))
    basic.pause(100)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

basic.show_number(0)

def on_forever():
    Tinybit.RGB_Car_Program().show_color(neopixel.rgb(randint(0, 255), 0, 0))
    basic.pause(100)
basic.forever(on_forever)
