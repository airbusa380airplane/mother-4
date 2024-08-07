@namespace
class SpriteKind:
    NPC = SpriteKind.create()
    MrSaturnSpawn = SpriteKind.create()
"""

"""

def on_up_pressed():
    mySprite.vy = -51
    while controller.up.is_pressed():
        mySprite.set_image(assets.image("""
            nestenwalk1
        """))
        pause(5)
        mySprite.set_image(assets.image("""
            nestenwalk0
        """))
        pause(5)
    mySprite.vy = 0
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_hit_wall(sprite, location):
    mySprite.set_velocity(0, 0)
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def on_b_pressed():
    pass
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap(sprite2, otherSprite):
    story.sprite_say_text(mySprite2, "AM MR SATURN. AM FISHING. AM NOT FISH.")
    pause(5000)
sprites.on_overlap(SpriteKind.player, SpriteKind.MrSaturnSpawn, on_on_overlap)

def on_a_pressed():
    mySprite.x += 5
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    mySprite.vx = -51
    while controller.left.is_pressed():
        mySprite.set_image(assets.image("""
            nestenleft1
        """))
        pause(5)
        mySprite.set_image(assets.image("""
            nestenleft2
        """))
        pause(5)
    mySprite.vx = 0
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    mySprite.vx = 51
    while controller.right.is_pressed():
        mySprite.set_image(assets.image("""
            nestenleft0
        """))
        pause(5)
        mySprite.set_image(assets.image("""
            nestenleft3
        """))
        pause(5)
    mySprite.vx = 0
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    mySprite.vy = 51
    while controller.down.is_pressed():
        mySprite.set_image(assets.image("""
            nestenwalk
        """))
        pause(5)
        mySprite.set_image(assets.image("""
            nestenwalk2
        """))
        pause(5)
    mySprite.vy = 0
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

mySprite2: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(assets.image("""
    nestenidle
"""), SpriteKind.player)
mySprite2 = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.MrSaturnSpawn)
mySprite2.set_position(100, 100)
scene.camera_follow_sprite(mySprite)
tiles.set_current_tilemap(tilemap("""
    level0
"""))

def on_on_update():
    pass
game.on_update(on_on_update)

def on_forever():
    pass
forever(on_forever)
