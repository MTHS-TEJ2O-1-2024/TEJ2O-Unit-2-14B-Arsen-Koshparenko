/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arsen Koshparenko
 * Created on: Oct 2024
 * This program turn on small pixel on the microbit
*/

let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.Happy)

//Button A is pressed
input.onButtonPressed(Button.A, function () {
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

//Button b is pressed
input.onButtonPressed(Button.B, function () {
    let loopCounter = 0
    let sprite = game.createSprite(0, 0)

    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
