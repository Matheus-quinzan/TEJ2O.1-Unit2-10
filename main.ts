/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matheus Quinzan
 * Created on: Oct 2025
 * This program shows the light level by how many neopixels turn on.
*/

// variables
let lightLevelOfMicrobit: number = 0
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
lightLevelOfMicrobit = input.lightLevel()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Duck)

input.onButtonPressed(Button.A, function () {
    // get light level
    lightLevelOfMicrobit = input.lightLevel()
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    basic.showString("" + lightLevelOfMicrobit.toString())

    // checks lightLevel and turns on neopixels
    if (lightLevelOfMicrobit <= 51) {
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Yes)
        pause(500)
        basic.showIcon(IconNames.Duck)
    }

    if (lightLevelOfMicrobit > 52) {
        // turns on one neopixel
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
        basic.showIcon(IconNames.Yes)
        pause(500)
        basic.showIcon(IconNames.Duck)
    }

    if (lightLevelOfMicrobit > 104) {
        // turns on two neopixels
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
        basic.showIcon(IconNames.Yes)
        pause(500)
        basic.showIcon(IconNames.Duck)
    }

    if (lightLevelOfMicrobit > 156) {
        // turns on three neopixels
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
        basic.showIcon(IconNames.Yes)
        pause(500)
        basic.showIcon(IconNames.Duck)
    }

    if (lightLevelOfMicrobit > 208) {
        // turns on four neopixels
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
        basic.showIcon(IconNames.Yes)
        pause(500)
        basic.showIcon(IconNames.Duck)
    }

})
