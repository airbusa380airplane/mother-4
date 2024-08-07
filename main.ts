namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const MrSaturnSpawn = SpriteKind.create()
    export const SaturnIII = SpriteKind.create()
    export const SATURN4 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -51
    while (controller.up.isPressed()) {
        mySprite.setImage(assets.image`nestenwalk1`)
        pause(5)
        mySprite.setImage(assets.image`nestenwalk0`)
        pause(5)
    }
    mySprite.vy = 0
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.setVelocity(0, 0)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SaturnIII, function (sprite2, otherSprite) {
    story.spriteSayText(sprite3, "WELCOME TO SATURN VALLEY. WE ALL MR SATURN. DEVELOPER TOO LAZY TO MAKE OTHER SPECIES TALK.")
    pause(6000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = -51
    while (controller.left.isPressed()) {
        mySprite.setImage(assets.image`nestenleft1`)
        pause(5)
        mySprite.setImage(assets.image`nestenleft2`)
        pause(5)
    }
    mySprite.vx = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MrSaturnSpawn, function (sprite2, otherSprite) {
    story.spriteSayText(mySprite2, "AM MR SATURN. AM FISHING. AM NOT FISH.")
    pause(5000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 51
    while (controller.right.isPressed()) {
        mySprite.setImage(assets.image`nestenleft0`)
        pause(5)
        mySprite.setImage(assets.image`nestenleft3`)
        pause(5)
    }
    mySprite.vx = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = 51
    while (controller.down.isPressed()) {
        mySprite.setImage(assets.image`nestenwalk`)
        pause(5)
        mySprite.setImage(assets.image`nestenwalk2`)
        pause(5)
    }
    mySprite.vy = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SATURN4, function (sprite2, otherSprite) {
    story.spriteSayText(_4, "WATCHING SKY. NO CLOUD TODAY. YELLOW SUN.")
    pause(6000)
})
let sprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let _4: Sprite = null
mySprite = sprites.create(assets.image`nestenidle`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.MrSaturnSpawn)
mySprite2.setPosition(100, 100)
sprite3 = sprites.create(assets.image`myImage0`, SpriteKind.SaturnIII)
sprite3.setPosition(550, 100)
_4 = sprites.create(assets.image`myImage0`, SpriteKind.SATURN4)
_4.setPosition(535, 150)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level0`)
tileUtil.setWalls(assets.tile`myTile15`, true)
tileUtil.setWalls(assets.tile`myTile11`, true)
tileUtil.setWalls(assets.tile`brick1`, true)
tileUtil.setWalls(assets.tile`mrsaturn`, true)
tileUtil.setWalls(assets.tile`myTile50`, true)
tileUtil.setWalls(assets.tile`myTile49`, true)
tileUtil.setWalls(assets.tile`myTile52`, true)
tileUtil.setWalls(assets.tile`myTile53`, true)
tileUtil.setWalls(assets.tile`myTile54`, true)
tileUtil.setWalls(assets.tile`brick6`, true)
tileUtil.setWalls(assets.tile`brick4`, true)
tileUtil.setWalls(assets.tile`brick5`, true)
tileUtil.setWalls(assets.tile`brick3`, true)
tileUtil.setWalls(assets.tile`myTile34`, true)
tileUtil.setWalls(assets.tile`myTile35`, true)
tileUtil.setWalls(assets.tile`myTile9`, true)
tileUtil.setWalls(assets.tile`myTile0`, true)
tileUtil.setWalls(assets.tile`myTile1`, true)
tileUtil.setWalls(assets.tile`myTile2`, true)
tileUtil.setWalls(assets.tile`myTile3`, true)
tileUtil.setWalls(assets.tile`myTile5`, true)
tileUtil.setWalls(assets.tile`myTile6`, true)
tileUtil.setWalls(assets.tile`myTile36`, true)
tileUtil.setWalls(assets.tile`myTile7`, true)
tileUtil.setWalls(assets.tile`myTile8`, true)
tileUtil.setWalls(assets.tile`myTile4`, true)
tileUtil.setWalls(assets.tile`myTile0`, true)
tileUtil.setWalls(assets.tile`myTile68`, true)
game.onUpdate(function () {
	
})
forever(function () {
	
})
