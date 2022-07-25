bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    music.playMelody(music.createSoundEffect(WaveShape.Triangle, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9999; index++) {
        for (let index = 0; index < 2; index++) {
            keyboard.sendString("c")
            keyboard.sendString("c")
            basic.pause(500)
            keyboard.sendString(keyboard.modifiers(keyboard._Modifier.control))
            keyboard.sendString(keyboard.modifiers(keyboard._Modifier.control))
            basic.pause(500)
            keyboard.sendString(keyboard.modifiers(keyboard._Modifier.control))
            keyboard.sendString(keyboard.modifiers(keyboard._Modifier.control))
            basic.pause(500)
            keyboard.sendString(keyboard.modifiers(keyboard._Modifier.control))
            keyboard.sendString(keyboard.modifiers(keyboard._Modifier.control))
            basic.pause(400)
        }
        for (let index = 0; index < 5; index++) {
            keyboard.sendString(keyboard.keys(keyboard._Key.right))
        }
        for (let index = 0; index < 2; index++) {
            keyboard.sendString("c")
            basic.pause(500)
            keyboard.sendString(keyboard.modifiers(keyboard._Modifier.control))
            basic.pause(500)
            keyboard.sendString(keyboard.modifiers(keyboard._Modifier.control))
            basic.pause(500)
            keyboard.sendString(keyboard.modifiers(keyboard._Modifier.control))
            basic.pause(400)
        }
        for (let index = 0; index < 5; index++) {
            keyboard.sendString(keyboard.keys(keyboard._Key.left))
        }
    }
})
input.onButtonPressed(Button.B, function () {
    while (keyboard.isEnabled()) {
        basic.showIcon(IconNames.No)
    }
})
keyboard.startKeyboardService()
basic.forever(function () {
    if (keyboard.isEnabled()) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
    }
})
