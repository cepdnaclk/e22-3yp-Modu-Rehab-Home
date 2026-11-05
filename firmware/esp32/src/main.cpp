#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  Serial.println("ModuRehab ESP32 Starting");
}

void loop() {
  Serial.println("ESP32 is working!");
  delay(1000);
}
