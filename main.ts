let sonar2 = 0
cuteBot.motors(70, 70)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
basic.forever(function () {
    if (sonar2 > 4 && sonar2 < 20) {
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
basic.forever(function () {
    sonar2 = 0.65 * cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar2 > 4 && sonar2 < 20) {
        if (randint(1, 2) == 2) {
            cuteBot.motors(randint(1, 100), randint(-100, 1))
        }
    } else {
        cuteBot.forward()
    }
})
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    basic.pause(100)
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(-20, -20)
    }
})
