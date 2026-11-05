---
layout: default
title: Planned software architecture
---

# Planned software architecture

This document describes intended communication, not implemented interfaces.
The existing ESP32 Arduino project currently prints Serial status messages;
sensor acquisition and communication with application services are future work.

## Components

| Component | Location | Planned responsibility |
| --- | --- | --- |
| ESP32 | `firmware/esp32/` | Acquire IMU, EMG, load-cell, and encoder measurements; timestamp and transmit data; enforce local device limits. |
| Backend | `software/backend/app/` | Validate device records, coordinate sessions, manage future persistence, and serve application interfaces. |
| Dashboard | `software/web_dashboard/frontend/` | Display session status, measurements, progress, and reviewed insights through backend interfaces. |
| Data processing | `software/data_processing/` | Calibrate, filter, synchronize, and derive features from measurements. |
| ML | `software/ml/` | Train and evaluate models offline and provide versioned inference results through backend integration. |
| AI assistant | `software/ai_assistant/` | Explain authorized session summaries and approved context through backend integration. |
| Public website | `docs/` | Publish static project documentation through the existing GitHub Pages/Jekyll setup. |

## Planned communication

```text
Sensors -> ESP32 -> Backend <-> Future persistence
                      |
                      +<-> Data processing <-> ML inference
                      +<-> Dashboard
                      +<-> AI assistant

Public website (docs/) -> Static project documentation for visitors
```

1. ESP32 firmware will package readings with device/session identifiers,
   timestamps, units, and quality indicators. Serial can support initial
   development; the device-to-backend transport remains to be selected.
2. The backend will validate records and associate them with sessions before
   forwarding them to processing and future persistence.
3. Processing will return calibrated measurements and derived features.
   Processing functions should also support offline analysis of recorded data.
4. ML training will use curated datasets offline. Backend integration will
   request inference from evaluated models and retain model versions and result
   quality alongside session results.
5. The dashboard will obtain measurements and results from the backend.
   Polling or streaming may provide live updates; no API routes are fixed yet.
6. The backend will provide authorized summaries to the AI assistant and return
   explanations to the dashboard. Any external service credentials belong on
   the backend.

ML and assistant results are advisory. Future device commands require validated
backend handling and firmware-side limits. Safe behavior during connectivity
loss and detailed control policies remain future design work.

## Public website boundary

`docs/README.md` already uses `layout: home` and `permalink: index.html`; it
remains the home page. `docs/_config.yml` remains the only site configuration.
A second `index.md` is unnecessary and would risk competing for the home page.

GitHub Pages publishes documentation, not the backend or database. Public docs
must not contain private rehabilitation records or credentials.
`docs/data/index.json` remains project-page metadata, not sensor/session storage.

## Future decisions and verification

Before implementation, define schemas, sampling rates, calibration formats,
transport/reconnection behavior, authentication, access control, retention, and
error handling. Frameworks, database technology, and deployment remain undecided.

- `firmware/esp32/test/`: firmware tests.
- `software/backend/tests/`: backend unit and integration tests.
- `tests/sensors/`: sensor acquisition and calibration verification.
- `tests/system/`: end-to-end device, backend, and dashboard verification.

No dashboard, backend, database, API, sensor integration, ML model, or AI
assistant is implemented by this structure and documentation preparation.
