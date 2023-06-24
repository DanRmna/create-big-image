input.onButtonPressed(Button.A, function () {
    arrows.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    arrows.showImage(5, 400)
})
let arrows: Image = null
arrows = images.createBigImage(`
    . . # . . . . # . .
    . # # # . . . # . .
    # . # . # # . # . #
    . . # . . . # # # .
    . . # . . . . # . .
    `)
