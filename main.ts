/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Sep 2026
 * This program Automatic light switching
*/

// variables
let distance = 0
let servoDirection = 0
let motionDetected = false

// setup of Sonar
basic.forever(function () {
   
    distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    //sensor response range
    if (distance > 0 && distance < 10) {
     
     //when the sensor was triggered
     if (!motionDetected) {
      motionDetected = true
        
        //turning on the LED
        pins.digitalWritePin(DigitalPin.P8, 1)
            
        //Servo positions
        if (servoDirection == 0) {
                
                //change the servo position to 0 degrees
                robotbit.Servo(robotbit.Servos.S8, 0)
                servoDirection = 1
        } else {
                //change the servo position to 180 degrees
                robotbit.Servo(robotbit.Servos.S8, 180)
                servoDirection = 0
        }

        basic.pause(800)
        }

    } else {
        //turning off the LED
        motionDetected = false
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.clearScreen()
    }

    basic.pause(100)
})