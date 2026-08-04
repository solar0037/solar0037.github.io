---
layout: post
title: "How I Gave a Lecture on Physical Computing at My Alma Mater"
---

## My Alma Mater

Never heard of this word 'alma mater' before lol. It's always a good thing to learn new words. Anyways, I went to my old high school and gave a lecture on physical computing. I thought it would be a great opportunity to teach AI with embedded development in this menacing 'AI era'. And it turned out great! Though the process was very painful.

### About the Lecture

This class is divided into two sections: raspberry pi basics and advanced. Part 1: raspberry pi basics covers how to connect to the pi remotely and how to use the GPIO pins. Part 2: advanced is about building an image classifier using Google's Teachable Machine and the camera module. Perhaps students will be more interested in part 2, rather than merely using the pi as an alternative version of arduino.

### Preparation

I had to go to school in advance to set up all the hardware that could possibly be used in the lecture. There was a dedicated classroom for IoT, which is pretty cool. I had to prepare twelve raspberry pi's, with an OS installed to each of their microSD cards. The installation process took a whole day, due to the slow speed of SD cards. My teacher and I also dug out jumper wires, breadboards, LEDs, resistors, sensors, and power adapters out of the messy school drawers. Though for part 2, it was much easier since I had installed all the OS and just had to test if the cameras work well.

### D-Day

Seventeen students came to attend my lecture: five (actually four; one was absent) in the morning, and tweleve in the afternoon. I faced a ton of unexpected stuff. Some students used Macbooks. A student did not bring their laptop charger. Some students progressed faster than others, so they stayed idle while I ran across the room to help those who faced errors. I made students download the wrong version of VNC Viewer, which requires logging in before using.

However, almost all students had success on blinking an LED. This means they connected remotely to the pi and ran a python program. It was so satisfying to see them help each other after having success on their own. I even found out how to connect on a Mac right in the middle of class.

![Raspberry Pi with an LED and a button](/images/20260421_214149.jpg) Blink an LED with a button.

![Aftermath](/images/20260506_155618.jpg) What a mess!

Day 2 was much worse. The teachable machine stuff went really smooth, but things were about to change.

- Policies for VNC Viewer had changed, so somehow we had to create an account to use it. I quickly thought of solutions such as Windows remote desktop and Raspberry Pi Connect. The xrdp did not work for most students. For rpi connect, it required a wayland configuration, but since I thought wayland was the problem, I had disabled it beforehand. Blah blah blah technical difficulties...
- Anyways rpi connect did work, but it was too late to upload and test the model. Though we had success in using the camera.

### Conclusion

My first class wasn't very smooth, but it went way better than I expected. My second class went bad, but it was still a meaningful experience. If I'm teaching again, maybe I'll choose an easier topic that doesn't require complex hardware setup.
