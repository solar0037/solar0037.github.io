---
layout: post
title: "Controlling an LED's Brightness by PID Control"
---

## Motivation

When I learned control theory in college, I wanted to implement it with real hardware, so I decided to give it a try. I chose to control an LED by sensing brightness with a photoresistor to maintain a certain brightness value, since I do not have a DC motor with an encoder at home.

## PID Control

PID control is a method to control a plant by comparing the actual output to the desired value. The controller tries to minimize the error by calculating a weighted sum of the proportional(P), integral(I), and derivative(D) values of the error. We start with P-control to minimize the error, use PI-control to remove the steady-state error, and finally use PID-control to minimize overshoot. PID control is simple but used in numerous applications such as cruise control.

## Circuit Diagram

![LED PID Controller Diagram](/images/LED%20PID%20Controller%20Diagram.png)

## Code

[Original PID Controller Code](https://microcontrollerslab.com/pid-controller-implementation-using-arduino/)

```C
double sensed_output, control_signal;
double setpoint;
double Kp, Ki, Kd;
int T; // sample time in milliseconds (ms)
unsigned long last_time;
double error, total_error, delta_error, last_error;
int max_control, min_control;

int photoPin = A0;
int ledPin = 3;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  sensed_output = 0;
  control_signal = 0; // start at 0% brightness
  setpoint = 750;
  Kp = 0.2;
  Ki = 0.1;
  Kd = 0.1;
  T = 100;
  last_time = 0;
  total_error = 0;
  last_error = 0;
  max_control = 255;
  min_control = 0;
}

void loop() {
  PID_Control(); // calls the PID function every T interval and outputs a control signal
}

void PID_Control() {
  unsigned long current_time = millis();
  int delta_time = current_time - last_time;

  if (delta_time >= T) {
    analogWrite(ledPin, (int)control_signal); // send PWM signal to LED
    sensed_output = analogRead(photoPin);

    Serial.print("Control Signal: ");
    Serial.print(control_signal);
    Serial.print(" Sensed Output: ");
    Serial.println(sensed_output);

    error = setpoint - sensed_output;

    total_error += error;
    if (total_error >= max_control) total_error = max_control;
    else if (total_error <= min_control) total_error = min_control;

    delta_error = error - last_error;

    control_signal = Kp * error + (Ki * T) * total_error + (Kd / T) * delta_error;
    control_signal = min(control_signal, max_control);
    control_signal = max(control_signal, min_control);

    last_error = error;
    last_time = current_time;
  }
}
```

## Results

![LED PID Controller](/images/LED%20PID%20Controller.jpg)

With P-control(Kp=0.2, Ki=0, Kd=0), the sensed output did converge, but with a negative offset.

With PI-control(Kp=0.2, Ki=0.1, Kd=0), the sensed output converged to 748, almost near to the setpoint.

With PD-control(Kp=0.2, Ki=0, Kd=0.1), the results were similar to P-control. The output did not converge to the setpoint.

With PID-control(Kp=0.2, Ki=0.1, Kd=0.1), the results were similar to PI-control. I guess it is because overshoot is not a big factor in this system.

## Conclusion

I was able to control the brightness around the photoresistor by using PID-control. I observed that the effects of the proportional and integral components were easily recognizable, but derivative component needed more precise inspection. Also, I might experiment with different parameters next time, when my DC motor arrives home.
