from smbus2 import SMBus

class M5Unit8Servos:
	
	MODE_SERVO = 0x03
	
	REG_MODE_BASE = 0x00
	REG_ANGLE_BASE = 0x50
	
	def __init__(self, bus: int = 1, address: int = 0x25):
		self.bus = bus
		self.address = address
		
	def _validate_channel(self, channel = int):
		if not 0 <= channel <= 7:
			raise ValueError(f"Channel must be between 0 and 7 - got {channel}")
	
	def SetServoMode(self, channel: int):
		self._validate_channel(channel)
		with SMBus(self.bus) as i2c:
			i2c.write_byte_data(self.address, self.REG_MODE_BASE + channel, self.MODE_SERVO)
			
	def SetAngle(self, channel = int, angle = int):
		self._validate_channel(channel)
		ClampedAngle = max(0, min(180, int(angle)))
		with SMBus(self.bus) as i2c:
			i2c.write_byte_data(self.address, self.REG_ANGLE_BASE + channel, ClampedAngle)
