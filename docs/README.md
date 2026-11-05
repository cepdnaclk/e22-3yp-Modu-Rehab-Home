---
layout: home
permalink: index.html
repository-name: e22-3yp-Modu-Rehab-Home
title: ModuRehab Home
---

# ModuRehab Home — Modular Upper-Limb Rehabilitation Platform

An AI-enabled university Cyber Physical Systems project for clinic-to-home
elbow and wrist rehabilitation. The proposed platform combines modular
attachments, ESP32-based sensing, BMI160 motion tracking, surface EMG,
load-cell force measurement, and joint encoders with planned session monitoring
and movement-quality feedback. Repository foundations and basic Serial firmware
are prepared; sensor integration, applications, and AI capabilities remain
planned. This development prototype is not a clinically validated medical device.

---

## Team

- E/22/052, K.H.D.M.Bimsara, [email](mailto:e22052@eng.pdn.ac.lk)
- E/22/419, R.G.S.T.Weerasekara, [email](mailto:e22419@eng.pdn.ac.lk)
- E/22/058, M.M.T.Cooray, [email](mailto:e22058@eng.pdn.ac.lk)
- E/22/127, S.I.Gunawardhana, [email](mailto:e22127@eng.pdn.ac.lk)

The separate project metadata file still contains template entries and awaits
confirmation and synchronization. **Supervisors: details to be confirmed.**

---

[Introduction](#introduction) · [Objectives](#aim-and-objectives) ·
[Architecture](#solution-architecture) · [Roadmap](#development-roadmap) ·
[Budget](#detailed-budget) · [Safety](#limitations-and-safety)

## Introduction

ModuRehab Home proposes a modular platform for upper-limb rehabilitation focused
on elbow and wrist exercises. The intended system combines joint measurements,
inertial motion tracking, muscle activity, and interaction-force sensing with
session management and movement-quality feedback.

The clinic-to-home concept is to let a therapist configure an appropriate
exercise session, establish device setup and limits, and review recorded
progress. A user would then perform the configured exercises at home using
suitable attachments. This workflow is a design objective; clinical suitability,
usability, and effectiveness have not been demonstrated.

## Problem statement

The project addresses an engineering question: how can a modular device capture
useful information about upper-limb exercises and present it clearly for users
and therapists outside continuous in-person observation?

Movement measurements alone do not establish rehabilitation benefit. The
proposed system therefore considers motion, muscle activity, and force together,
while recognizing that calibration, interpretation, safety, and evaluation must
be established before clinical use can be considered.

## Aim and objectives

**Aim:** develop and evaluate an engineering prototype that supports measurement
and feedback for modular elbow and wrist rehabilitation exercises.

The proposed objectives are to:

1. Develop interchangeable attachments for elbow and wrist exercise scenarios.
2. Acquire joint position, inertial motion, surface EMG, and interaction-force data.
3. Calibrate and synchronize measurements for repeatable analysis.
4. Support therapist-configured sessions and rehabilitation progress review.
5. Explore movement-quality assessment using rule-based methods and ML.
6. Provide AI-assisted explanations without diagnostic or treatment authority.
7. Design for safe behavior and useful local operation when connectivity is lost.

## Proposed solution and key features

| Proposed capability | Intended role | Current status |
| --- | --- | --- |
| Modular attachments | Adapt the platform to elbow and wrist exercises. | Mechanical design under development; no completed CAD designs in the repository. |
| Joint and motion tracking | Combine encoder measurements and BMI160 IMU readings. | Planned; sensor integration not implemented. |
| Muscle and force measurement | Acquire surface EMG and load-cell/HX711 signals. | Planned; acquisition not implemented. |
| Therapist-configured exercises | Associate exercise setup and limits with sessions. | Planned; no session interface implemented. |
| Progress monitoring | Present measurements and session summaries through a dashboard. | Planned; dashboard, backend, and storage not implemented. |
| Movement-quality assessment | Compare processed features with defined baselines and evaluated models. | Planned; no models or results available. |
| AI assistance | Explain authorized summaries and assist users and therapists. | Planned; no assistant implemented. |
| Offline operation | Preserve essential local behavior and support recording during connectivity loss. | Proposed; buffering, storage limits, and later synchronization remain design decisions. |

Offline behavior must not depend on cloud inference for safety. The handling of
missing data, reconnection, and session reconciliation remains to be specified.

## Solution architecture

The following diagram shows the planned relationships using text that works
without additional Jekyll plugins. It does not describe deployed services.

```text
BMI160 IMUs / EMG / Load cells + HX711 / Encoders
                       |
                       v
                 ESP32 firmware
                       |
                Measurement records
                       v
                  Backend / API
                       |
        +--------------+--------------+
        |              |              |
        v              v              v
 Data processing   Session storage  Web dashboard
        |                             ^
        v                             |
 ML assessment ----> Backend results -+
                       |
                       v
                  AI assistant
                       |
              Advisory explanations
                       v
               Backend -> Dashboard
```

The backend will coordinate validated records, processing, persistence, and
application access. Data processing will calibrate, filter, synchronize, and
extract features. ML results and assistant explanations will return through
backend interfaces to the dashboard. Dashboard requests will also support future
session configuration and review.

Transport protocols, schemas, database technology, and deployment remain
undecided. See the
[planned software architecture]({{ '/design/software-architecture.html' | relative_url }})
for responsibilities and future interface decisions.

## Hardware design

| Subsystem | Proposed purpose |
| --- | --- |
| ESP32 controller | Coordinate acquisition and local device behavior. The current firmware uses a generic `esp32dev` PlatformIO configuration pending confirmation of the physical board. |
| BMI160 IMUs | Capture inertial measurements for motion analysis. |
| Surface EMG | Capture muscle-activity signals for later processing and evaluation. |
| Load cells and HX711 | Measure interaction force through calibrated acquisition. |
| Joint encoders | Measure elbow and wrist joint movement. |
| Modular mechanical attachments | Support different exercise configurations with validated fit, travel, and loading. |
| Independent safety controls | Provide hardware travel limits, emergency stop, and protections separate from AI decisions. These controls are requirements, not completed implementations. |

Hardware design is at the planning and development stage. The CAD, mechanical,
schematic, and PCB directories currently contain placeholders. Exact sensor
counts, pin assignments, ratings, and operating limits are not yet confirmed.

## Software design

| Component | Intended responsibility | Repository location |
| --- | --- | --- |
| Embedded firmware | Acquisition, timestamps, local operation, and validated communication. | `firmware/esp32/` |
| Data processing | Calibration, filtering, synchronization, and feature extraction. | `software/data_processing/` |
| Backend and storage integration | Device ingestion, session management, persistence, and application access. | `software/backend/` |
| Rehabilitation dashboard | Exercise configuration, session visualization, and progress review. | `software/web_dashboard/` |
| ML subsystem | Offline training, model evaluation, and versioned inference. | `software/ml/` |
| AI assistant | Advisory explanations using authorized context through backend integration. | `software/ai_assistant/` |

Only basic firmware exists: it initializes Serial at 115200 baud, prints a startup
message, and repeats a status message every second. It has been compiled during
initial setup; physical ESP32 upload and operation are not yet confirmed.

The backend, dashboard, database, and application APIs have not been implemented.
The public website is static documentation and does not run those services or
store private rehabilitation records.

## AI and machine learning

The proposed ML subsystem will explore movement-quality assessment using features
from synchronized sensor measurements. Evaluation will compare model performance
against rule-based baselines before any claim of useful assessment is made.
Training data, labels, metrics, and model choices remain to be defined.

The proposed AI assistant will explain session summaries and provide assistance
to users and therapists through the backend. It will not diagnose conditions,
prescribe treatment, or directly operate safety-critical hardware. No models,
assistant integration, validated datasets, or assessment results are available yet.

## Testing and evaluation

All evaluation methods below are **planned**; the repository contains no completed
sensor evaluation or integrated rehabilitation-system results.

| Evaluation | Planned method |
| --- | --- |
| Joint-angle measurement | Compare encoder and motion-derived angles against reference measurements; record error and repeatability. |
| Interaction force | Calibrate the load-cell/HX711 chain against known loads and assess repeatability. |
| Surface EMG | Assess signal quality, interference, and repeatability under defined acquisition conditions. |
| Movement assessment | Compare ML classification with rule-based baselines on held-out data and report limitations. |
| Reliability | Test missing samples, timing, connectivity loss, reconnection, and session consistency. |
| Safety | Validate mechanical/electrical limits and independent protections before considering human testing. |

A firmware compilation verifies build compatibility only. It does not demonstrate
physical operation, sensor accuracy, safety, or rehabilitation effectiveness.
Technical findings will be added to the
[project reports directory](https://github.com/cepdnaclk/e22-3yp-Modu-Rehab-Home/tree/main/docs/reports)
when available; it currently contains only a placeholder.

## Development roadmap

The roadmap describes proposed sequencing, not committed dates or completed tests.

| Stage | Scope | Status |
| --- | --- | --- |
| Foundation | Repository structure, PlatformIO setup, architecture documentation, and Serial test sketch. | Prepared; sketch compiled during setup. |
| Hardware confirmation | Confirm ESP32 model, upload firmware, and verify physical Serial output. | Pending. |
| Initial sensing | Develop and verify one BMI160, followed by multiple IMUs. | Planned. |
| Additional sensing | Develop load-cell/HX711, encoder, and EMG acquisition individually. | Planned. |
| Measurement pipeline | Calibrate, synchronize, and process sensor data. | Planned. |
| Rehabilitation application | Develop backend, session storage, and web dashboard. | Planned. |
| Assessment and assistance | Evaluate movement assessment and add bounded AI assistance. | Planned. |
| Integrated evaluation | Validate mechanical/electronic designs, reliability, and independent safety controls. | Future work before any approved human evaluation. |

Mechanical and electronic design planning is ongoing; completed design artifacts
are not yet available in the repository. No sensor integration is presented as
in progress without supporting code.

## Detailed budget

**The budget is being finalized.** No verified bill of materials or component
prices are available in the repository. The previous template's sample price is
not a project cost and has been removed from this page.

The future budget should identify components, quantities, supplier quotations,
currency, quotation dates, and totals for sensors, electronics, mechanical parts,
fabrication, and safety hardware. No cost estimate is claimed here.

## Limitations and safety

- This is a non-clinical development prototype, not a clinically validated medical
  device. Therapeutic benefit and suitability for unsupervised home use have not
  been established.
- AI does not diagnose or prescribe treatment and must never override independent
  hardware safety controls.
- Do not test powered movement on a person during early development.
- Powered movement and human/patient testing require appropriate mechanical and
  electrical validation, institutional approval, and clinical supervision.
- Hardware travel limits, emergency stop, and independent protections must remain
  separate from AI inference and network-dependent services.
- Calibration, synchronization, robustness, privacy, and offline behavior remain
  unresolved design and validation tasks. Private session data must not be placed
  on this public website or committed to the repository.

## Conclusion and future development

ModuRehab Home has established its repository organization, initial embedded
project, and planned software architecture. The next steps are physical board
verification and individual sensor development, supported by documented
calibration and testing.

Future work will connect validated measurements to rehabilitation applications,
evaluate assessment methods, and refine modular hardware. Any progression toward
human evaluation depends on independent safety validation and the required
institutional and clinical oversight.

## Links and references

- [Project repository](https://github.com/cepdnaclk/{{ page.repository-name }})
- [Developer onboarding and contribution guide](https://github.com/cepdnaclk/{{ page.repository-name }}/blob/main/README.md)
- [Planned software architecture]({{ '/design/software-architecture.html' | relative_url }})
- [Project metadata]({{ '/data/index.json' | relative_url }}) — currently contains template team and supervisor entries.
- [Project reports](https://github.com/cepdnaclk/{{ page.repository-name }}/tree/main/docs/reports) — reports pending.
- [Project home]({{ '/' | relative_url }})
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [Faculty of Engineering, University of Peradeniya](https://eng.pdn.ac.lk/)

The architecture document and repository are the current technical references.
Component datasheets, experimental reports, and research references should be
added when specific designs and evaluations are documented. No test-result or
product images are presented because none have been verified for this prototype.
