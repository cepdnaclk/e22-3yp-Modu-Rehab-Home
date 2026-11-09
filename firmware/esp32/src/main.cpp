#include <Arduino.h>

namespace {
constexpr unsigned long kDiagnosticIntervalMs = 10000;
unsigned long lastDiagnosticReportMs = 0;

void printHardwareReport() {
  Serial.println();
  Serial.println("ModuRehab ESP32-S3 Starting");
  Serial.println("--------------------------------");
  Serial.printf("Chip model: %s\n", ESP.getChipModel());
  Serial.printf("Chip revision: %d\n", ESP.getChipRevision());
  Serial.printf("CPU frequency: %lu MHz\n",
                static_cast<unsigned long>(ESP.getCpuFreqMHz()));
  Serial.printf("Flash size: %lu MB\n",
                static_cast<unsigned long>(ESP.getFlashChipSize()) /
                    (1024UL * 1024UL));

  if (psramFound()) {
    Serial.printf("PSRAM: detected (%lu MB)\n",
                  static_cast<unsigned long>(ESP.getPsramSize()) /
                      (1024UL * 1024UL));
    Serial.printf("Free PSRAM: %lu bytes\n",
                  static_cast<unsigned long>(ESP.getFreePsram()));
  } else {
    Serial.println("PSRAM: not detected");
  }

  Serial.println("--------------------------------");
  Serial.println("ESP32-S3 hardware check complete");
}
}  // namespace

void setup() {
  Serial.begin(115200);

  // Allow the native USB Serial connection a short time to become available.
  const unsigned long serialWaitStarted = millis();
  while (!Serial && millis() - serialWaitStarted < 3000) {
    delay(10);
  }

  printHardwareReport();
  lastDiagnosticReportMs = millis();
}

void loop() {
  Serial.println("ModuRehab ESP32-S3 is working!");
  delay(1000);

  if (millis() - lastDiagnosticReportMs >= kDiagnosticIntervalMs) {
    printHardwareReport();
    lastDiagnosticReportMs = millis();
  }
}
