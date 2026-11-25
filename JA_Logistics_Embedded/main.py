from servoController import M5Unit8Servos


AllServoChannels = [0,1,2,3,4]
Controller = M5Unit8Servos(bus = 1, address = 0x25)

for servo in AllServoChannels:
	Controller.SetServoMode(servo)
	Controller.SetAngle(servo, 90)
	print(f"Initialised servo {servo}")


#Controller.SetAngle(4,40)
