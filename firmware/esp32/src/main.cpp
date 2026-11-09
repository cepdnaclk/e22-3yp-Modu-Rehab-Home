#include <Arduino.h>
#include <Wire.h>
#include <esp32-hal-rgb-led.h>

#include "board_config.h"

namespace {
constexpr unsigned long kScanIntervalMs = 5000;

void scanI2cBus() {
  uint8_t deviceCount = 0;

  Serial.println();
  Serial.println("Scanning I2C bus...");

  for (uint8_t address = 1; address < 127; ++address) {
    Wire.beginTransmission(address);
    const uint8_t error = Wire.endTransmission();

    if (error == 0) {
      Serial.printf("I2C device found at 0x%02X\n", address);
      ++deviceCount;
    } else if (error == 4) {
      Serial.printf("Unknown I2C error at 0x%02X\n", address);
    }
  }

  if (deviceCount == 0) {
    Serial.println("No I2C devices found");
  } else {
    Serial.printf("Scan complete: %u device(s) found\n", deviceCount);
  }
}
}  // namespace

void setup() {
  Serial.begin(115200);

  const unsigned long serialWaitStarted = millis();
  while (!Serial && millis() - serialWaitStarted < 3000) {
    delay(10);
  }

  rgbLedWrite(modurehab::board::kRgbLedPin, 0, 0, 0);

  Serial.println();
  Serial.println("ModuRehab ESP32-S3 I2C Scanner");
  Serial.printf("SDA: GPIO %u\n", modurehab::board::kI2cSdaPin);
  Serial.printf("SCL: GPIO %u\n", modurehab::board::kI2cSclPin);
  Serial.printf("Frequency: %lu Hz\n",
                static_cast<unsigned long>(modurehab::board::kI2cFrequencyHz));

  if (!Wire.begin(modurehab::board::kI2cSdaPin,
                  modurehab::board::kI2cSclPin,
                  modurehab::board::kI2cFrequencyHz)) {
    Serial.println("Failed to initialize I2C controller");
    return;
  }

  scanI2cBus();
}

void loop() {
  delay(kScanIntervalMs);
  scanI2cBus();
}
