---
layout: page
title: ESP32-S3 Board Validation
permalink: /design/esp32-s3-board-validation.html
---

# ESP32-S3 board validation

## Board identification

The ModuRehab firmware currently targets a dual-USB-C, 44-pin ESP32-S3
development board fitted with an ESP32-S3 N16R8 module. Runtime and upload
tests confirmed the following properties:

| Property | Confirmed value |
| --- | --- |
| Chip | ESP32-S3, revision 2 |
| CPU frequency | 240 MHz |
| Flash | 16 MB |
| PSRAM | 8 MB |
| Native USB | USB Serial/JTAG operational |
| Onboard RGB LED | Addressable LED on GPIO 48 |

## Exposed header labels

With the antenna at the top and the USB-C connectors at the bottom, the board
silkscreen exposes these pins from top to bottom:

| Left header | Right header |
| --- | --- |
| 3V3 | GND |
| 3V3 | TX / GPIO 43 |
| RST | RX / GPIO 44 |
| GPIO 4 | GPIO 1 |
| GPIO 5 | GPIO 2 |
| GPIO 6 | GPIO 42 |
| GPIO 7 | GPIO 41 |
| GPIO 15 | GPIO 40 |
| GPIO 16 | GPIO 39 |
| GPIO 17 | GPIO 38 |
| GPIO 18 | GPIO 37 |
| GPIO 8 | GPIO 36 |
| GPIO 3 | GPIO 35 |
| GPIO 46 | GPIO 0 |
| GPIO 9 | GPIO 45 |
| GPIO 10 | GPIO 48 |
| GPIO 11 | GPIO 47 |
| GPIO 12 | GPIO 21 |
| GPIO 13 | GPIO 20 |
| GPIO 14 | GPIO 19 |
| 5V | 5V |
| GND | GND |

## Reserved and restricted pins

| GPIO | Status | Reason |
| --- | --- | --- |
| 48 | Reserved | Verified onboard addressable RGB LED. |
| 19, 20 | Reserved | Native USB D- and D+ while native USB is in use. |
| 43, 44 | Reserved | UART TX and RX used by the board's serial interface. |
| 35, 36, 37 | Do not use | Connected internally to octal PSRAM on the N16R8 module. |
| 0, 3, 45, 46 | Avoid | Boot-strapping pins; external circuits can prevent startup. |

## Current ModuRehab allocation

| Function | GPIO | Validation state |
| --- | --- | --- |
| Onboard RGB LED | 48 | Physically verified with red, green, blue, white and off states. |
| I2C SDA | 8 | Controller initialized; awaiting a soldered I2C device. |
| I2C SCL | 9 | Controller initialized; awaiting a soldered I2C device. |

Pins for EMG, HX711 and the elbow and wrist encoders remain unassigned until
their exact electrical interfaces are confirmed. This avoids committing to a
pin map before voltage levels, interrupt requirements and encoder types are
known.

## Completed tests

1. Built and uploaded firmware through PlatformIO.
2. Confirmed 16 MB flash and 8 MB PSRAM at runtime.
3. Confirmed native USB Serial operation at 115200 baud.
4. Confirmed the GPIO 48 RGB LED colour sequence physically.
5. Initialized I2C at 100 kHz on GPIO 8 and GPIO 9.
6. Confirmed that the disconnected I2C bus reports no false devices.

The BMI160 test is pending soldered header connections. EMG testing is pending
a protected split supply, voltage-divider components, a multimeter and a safe
isolated acquisition arrangement.
