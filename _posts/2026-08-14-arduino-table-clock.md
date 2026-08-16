---
layout: post
title: "My Table Clock Broke, so I Built One"
---

## Motivation

My table clock did not function well since I dropped it onto the floor. Two of the segments were broken so sometimes it showed 3 instead of 8. Then, why don't I make one?

## Circuit Diagram

![Table Clock Diagram](/images/Table%20Clock%20Diagram.png)

## Code

[TM1637 7-segment Display Library](https://github.com/avishorp/TM1637)

```C
#include <Arduino.h>
#include <TM1637Display.h>

#define CLK 2
#define DIO 3
#define BTN_HOUR 5
#define BTN_MINUTE 6

#define INTERVAL 60000
#define BRIGHTNESS 2
#define BITMASK_COLON 0b01000000

int hour = 0;
int minute = 0;

unsigned long last_time = 0;

bool hourState = LOW;
bool minuteState = LOW;
bool lastHourState = LOW;
bool lastMinuteState = LOW;

TM1637Display display(CLK, DIO);

void setup() {
  // put your setup code here, to run once:
  display.setBrightness(BRIGHTNESS);
  display.showNumberDecEx(hour*100+minute, BITMASK_COLON);
  pinMode(BTN_HOUR, INPUT);
  pinMode(BTN_MINUTE, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  unsigned long current_time = millis();

  // detect if buttons are pushed and increment hour/minute
  hourState = digitalRead(BTN_HOUR);
  minuteState = digitalRead(BTN_MINUTE);
  if (digitalRead(BTN_HOUR) == HIGH && lastHourState == LOW) {
    if (++hour == 24) hour = 0;
  }
  if (digitalRead(BTN_MINUTE) == HIGH && lastMinuteState == LOW) {
    if (++minute == 60) minute = 0;
  }
  lastHourState = hourState;
  lastMinuteState = minuteState;
  display.showNumberDecEx(hour*100+minute, BITMASK_COLON, true);

  // update displayed time
  if (current_time - last_time > INTERVAL) {
    display.showNumberDecEx(hour*100+minute, BITMASK_COLON, true);
    if (hour == 23 && minute == 59) {
      hour = 0;
      minute = 0;
    } else if (minute == 59) {
      hour++;
      minute = 0;
    } else {
      minute++;
    }
    last_time = current_time;
  }
}
```

## Results

![Table Clock](/images/Table%20Clock.jpg)

Features:
- Display set time
- Adjust hour and minute by pushing buttons

Bugs:
- Sometimes button is read as pushed twice due to bouncing

Detecting whether a button is 'pushed', or not, was the biggest challenge. Since the circuitry inside a button is connected when pushed and disconnected when not, I had to edge-detect its state. This means that simply sensing HIGH or LOW does not work, but tracking the state going from LOW to HIGH and then LOW again would work. Still, this method does not remove bouncing, so sometimes it's read as pushed twice.

## Conclusion

It was a pretty challenging project than I initially thought. Though I can't use this clock because it has red LEDs (you don't want to sleep with red flashes next to you, right??), it was fun building it.
