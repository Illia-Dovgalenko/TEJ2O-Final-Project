/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Sep 2026
 * This program 
*/

let distance = 0

basic.forever(function () {
   
    distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    if (distance > 0 && distance < 10) {

       
        pins.digitalWritePin(DigitalPin.P8, 1) 
       
    } else {

   
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.clearScreen()

    }

    basic.pause(100)
})
