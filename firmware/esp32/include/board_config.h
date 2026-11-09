#pragma once

#include <Arduino.h>

namespace modurehab::board {

// Verified on the physical YD-style ESP32-S3 N16R8 board.
inline constexpr uint8_t kRgbLedPin = 48;

// Selected for the shared sensor I2C bus. Electrical communication will be
// verified when the first soldered I2C module is available.
inline constexpr uint8_t kI2cSdaPin = 8;
inline constexpr uint8_t kI2cSclPin = 9;
inline constexpr uint32_t kI2cFrequencyHz = 100000;

}  // namespace modurehab::board
