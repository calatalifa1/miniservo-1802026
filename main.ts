basic.forever(function () {
    motor.servo(motor.Servos.S5, 0)
    basic.pause(1000)
    motor.servo(motor.Servos.S5, 180)
    basic.pause(1000)
})
