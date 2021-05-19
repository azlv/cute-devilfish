input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    动动爪子()
})
function 叮叮当 () {
    音乐暂停时间 = 60
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    basic.pause(音乐暂停时间)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    basic.pause(音乐暂停时间)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    basic.pause(音乐暂停时间)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(音乐暂停时间)
    basic.pause(音乐暂停时间)
    basic.pause(音乐暂停时间)
    basic.pause(音乐暂停时间)
    music.playTone(392, music.beat(BeatFraction.Whole))
}
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
function 动动爪子 () {
    if (爪子动) {
        return
    }
    爪子动 = true
    Tinybit.RGB_Car_Program().showColor(neopixel.rgb(30, 0, 0))
    basic.showIcon(IconNames.Happy)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    basic.pause(4000)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
    basic.pause(4000)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    爪子动 = false
    basic.showIcon(IconNames.Heart)
    Tinybit.RGB_Car_Program().showColor(neopixel.rgb(0, 10, 0))
}
let 按键 = 0
let 音乐暂停时间 = 0
let 爪子动 = false
let 转动中 = false
basic.showIcon(IconNames.Heart)
Tinybit.RGB_Car_Program().showColor(neopixel.rgb(0, 10, 0))
转动中 = false
爪子动 = false
叮叮当()
basic.forever(function () {
	
})
