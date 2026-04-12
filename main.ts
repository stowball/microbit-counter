input.onButtonPressed(Button.A, function () {
    Count += 10
})
input.onButtonPressed(Button.B, function () {
    Count += 1
})
let Heart = false
let Count = 3567
basic.forever(function () {
    basic.showString("" + (Count))
    if (Heart) {
        basic.showIcon(IconNames.Heart)
        Heart = false
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        Heart = true
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
