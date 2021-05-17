input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Happy)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.A, function () {
    按键 = 1
    转动()
})
input.onButtonPressed(Button.B, function () {
    按键 = 2
    转动()
})
function 转动 () {
    if (转动中) {
        转动中 = false
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else {
        转动中 = true
        if (按键 == 1) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 50)
        } else {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 50)
        }
    }
}
input.onSound(DetectedSound.Loud, function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.rgb(randint(0, 0), randint(0, 255), randint(0, 255)))
    basic.pause(100)
})
let 按键 = 0
let 转动中 = false
转动中 = false
basic.forever(function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.rgb(randint(0, 255), 0, 0))
    basic.pause(100)
})
