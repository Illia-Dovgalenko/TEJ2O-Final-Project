/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Sep 2026
 * This program 
*/

let distance = 0

let servoDirection = 0
let motionDetected = false

basic.forever(function () {
   
    distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    if (distance > 0 && distance < 10) {
        
        if (!motionDetected) {
            motionDetected = true

            pins.digitalWritePin(DigitalPin.P8, 1)
            
            if (servoDirection == 0) {
                
                robotbit.Servo(robotbit.Servos.S8, 45)
                servoDirection = 1
            } else {
                
                robotbit.Servo(robotbit.Servos.S8, 135)
                servoDirection = 0
            }

            basic.pause(800)
        }

    } else {
        
        motionDetected = false
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.clearScreen()
    }

    basic.pause(100)
})