namespace SpriteKind {
    export const follower = SpriteKind.create()
    export const Food2 = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    ice_cream = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
})
sprites.onCreated(SpriteKind.Food2, function (sprite) {
    sprite.setImage(img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 5 5 d 3 d 5 5 5 5 3 . 
        . . . 3 d 5 5 5 d 5 5 5 d 3 1 3 
        . . 3 d d 5 5 5 d d 5 5 5 3 3 3 
        . 3 5 5 d 5 5 5 5 d d 5 5 b . . 
        . 3 5 5 5 d 5 5 5 5 5 d 5 5 3 . 
        . b d 5 5 5 d 5 5 5 5 5 5 5 3 . 
        . 4 b 5 5 5 5 d d 5 5 5 5 d 3 . 
        . 4 4 d 5 5 5 5 5 5 d d d b b . 
        . 4 d b d 5 5 5 5 5 5 5 5 3 . . 
        4 d d 5 b d 5 5 5 5 5 5 5 3 . . 
        4 5 d 5 5 b b d 5 5 5 5 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `)
    sprite.setPosition(randint(8, 152), randint(19, 112))
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    sprite.setImage(img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `)
    sprite.setPosition(randint(8, 152), randint(19, 112))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    ice_cream.destroy()
    info.changeScoreBy(1)
})
sprites.onDestroyed(SpriteKind.Food2, function (sprite) {
    ice_cream = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    ice_cream_2.destroy()
    info.changeScoreBy(1)
})
let ice_cream_2: Sprite = null
let ice_cream: Sprite = null
info.startCountdown(30)
game.splash("The Eating Game")
game.splash("Arrows to move")
game.splash("Eat as much as possible")
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . 1 1 . . . . 1 1 . . . . 
    . 2 2 2 1 f 2 2 2 2 1 f 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 1 f 1 f 1 f 1 f 1 f 2 2 . 
    . 2 2 f f f f f f f f f 1 2 2 . 
    . 2 2 1 f f f f f f f f f 2 2 . 
    . 2 2 f f f f f f f f f 1 2 2 . 
    . 2 2 1 f f f f f f f f f 2 2 . 
    . 2 2 f f f f f f f f f 1 2 2 . 
    . 2 2 1 f f f f f f f f f 2 2 . 
    . 2 2 f f f f f f f f f 1 2 2 . 
    . 2 2 1 f f f f f f f f f 2 2 . 
    . 2 2 f 1 f 1 f 1 f 1 f 1 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
ice_cream = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
ice_cream_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food2)
mySprite.setBounceOnWall(true)
game.onUpdate(function () {
    mySprite.x += controller.dx(175)
    mySprite.y += controller.dy(175)
})
