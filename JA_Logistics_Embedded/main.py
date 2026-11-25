from servoController import M5Unit8Servos
from flask import Flask , render_template

app = Flask(__name__)

AllServoChannels = [0,1,2,3,4]
Controller = M5Unit8Servos(bus = 1, address = 0x25)

for servo in AllServoChannels:
	Controller.SetServoMode(servo)
	print(f"Initialised servo {servo}")


@app.route('/')
def home():
    # This serves the HTML file found in the 'templates' folder
    return render_template('index.html')

if __name__ == '__main__':
    # debug=True allows the server to auto-reload when you change code
    app.run(debug=True, port=5050)