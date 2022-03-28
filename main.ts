input.onGesture(Gesture.Shake, function () {
    nukes_taken += 1
})
let nukes_taken = 0
basic.forever(function () {
    basic.showNumber(nukes_taken)
    led.stopAnimation()
})
