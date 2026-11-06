import { useEffect, useState } from "react"

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

type IconName = "layers" | "sensor" | "chart" | "shield" | "arrow" | "check" | "menu" | "close" | "play" | "pulse" | "user" | "clock" | "sun" | "moon" | "calibrate" | "github" | "linkedin" | "mail"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    layers: (
      <>
        <path d="m3 8 9-5 9 5-9 5-9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    sensor: (
      <>
        <circle cx="12" cy="12" r="2.5" />
        <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.6 4.6a10.5 10.5 0 0 0 0 14.8M19.4 4.6a10.5 10.5 0 0 1 0 14.8" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 4-4 3 2 5-6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    play: <path d="m9 7 8 5-8 5V7Z" />,
    pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
    user: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20c.5-4 2.8-6 7-6s6.5 2 7 6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    moon: <path d="M20 15.2A8.2 8.2 0 0 1 8.8 4a8.2 8.2 0 1 0 11.2 11.2Z" />,
    calibrate: (
      <>
        <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
        <circle cx="16" cy="7" r="2" />
        <circle cx="8" cy="17" r="2" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4 1.2-4-2-5-2" />
        <path d="M15 22v-3.1c0-1 .1-1.7-.5-2.4 2.8-.3 5.7-1.4 5.7-6.2A4.9 4.9 0 0 0 19 6.9c.1-.4.5-1.7-.1-3.4 0 0-1-.3-3.6 1.3a12.4 12.4 0 0 0-6.6 0C6.1 3.2 5.1 3.5 5.1 3.5c-.6 1.7-.2 3-.1 3.4a4.9 4.9 0 0 0-1.2 3.4c0 4.8 2.9 5.9 5.7 6.2-.5.6-.6 1.2-.5 2.4V22" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="9" width="4" height="11" rx=".5" />
        <circle cx="5" cy="5" r="1.5" />
        <path d="M11 20V9h4v1.8c.8-1.2 1.9-2 3.5-2 2.7 0 3.5 1.8 3.5 4.8V20h-4v-5.6c0-1.5-.3-2.4-1.5-2.4-1.4 0-1.5 1.2-1.5 2.6V20h-4Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="ModuRehab main page">
      <img className="brand-icon" src={asset("favicon.svg?v=modurehab-1")} alt="" width="42" height="42" />
      <span>
        MODU<span>REHAB</span>
      </span>
    </a>
  )
}

function DeviceRender() {
  return (
    <div
      className="device-stage"
      aria-label="Concept render of the ModuRehab table-mounted upper-limb rehabilitation device"
    >
      <div className="device-grid" />
      <div className="device-shadow" />
      <svg className="device-render" viewBox="0 0 620 620" role="img">
        <defs>
          <linearGradient id="aluminium" x1="0" x2="1">
            <stop offset="0" stopColor="#aebdca" />
            <stop offset=".45" stopColor="#f5f8fa" />
            <stop offset="1" stopColor="#8196a8" />
          </linearGradient>
          <linearGradient id="rail" x1="0" x2="1">
            <stop offset="0" stopColor="#10273c" />
            <stop offset=".55" stopColor="#39546c" />
            <stop offset="1" stopColor="#0b1d2e" />
          </linearGradient>
          <filter id="productShadow">
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="14"
              floodColor="#061829"
              floodOpacity=".28"
            />
          </filter>
        </defs>
        <g filter="url(#productShadow)">
          <path
            d="M105 426 357 350l167 74-251 90-168-88Z"
            fill="#dce5eb"
            stroke="#94a9b9"
            strokeWidth="2"
          />
          <path d="m105 426 168 88v25l-168-91Z" fill="#91a5b5" />
          <path d="m273 514 251-90v24l-251 91Z" fill="#b8c6d0" />
          <path
            d="M170 402 354 347l101 45-185 65-100-55Z"
            fill="#f5f8fa"
            stroke="#a5b5c1"
            strokeWidth="2"
          />
          <rect
            x="193"
            y="280"
            width="42"
            height="139"
            rx="12"
            fill="url(#aluminium)"
            transform="rotate(-10 193 280)"
          />
          <path
            d="M203 292 165 251"
            stroke="#10273c"
            strokeWidth="25"
            strokeLinecap="round"
          />
          <circle
            cx="159"
            cy="246"
            r="43"
            fill="#f5f8fa"
            stroke="#8299aa"
            strokeWidth="7"
          />
          <circle cx="159" cy="246" r="25" fill="#12324e" />
          <circle cx="159" cy="246" r="10" fill="#1672f3" />
          <path
            d="M180 226 369 144"
            stroke="url(#rail)"
            strokeWidth="31"
            strokeLinecap="round"
          />
          <path
            d="M185 218 366 139"
            stroke="#577087"
            strokeWidth="7"
            strokeLinecap="round"
            opacity=".75"
          />
          <path
            d="M224 205 244 250l80-34-20-46Z"
            fill="#d5e1e9"
            stroke="#869bab"
            strokeWidth="2"
          />
          <path d="M230 207 248 238l66-28-15-33Z" fill="#4a6981" opacity=".4" />
          <path
            d="M329 157 352 207l63-28-23-50Z"
            fill="#d5e1e9"
            stroke="#869bab"
            strokeWidth="2"
          />
          <path d="M338 159 355 194l50-21-17-36Z" fill="#4a6981" opacity=".4" />
          <path
            d="M366 144 419 122"
            stroke="#10273c"
            strokeWidth="27"
            strokeLinecap="round"
          />
          <rect
            x="407"
            y="84"
            width="31"
            height="99"
            rx="14"
            fill="#146ef5"
            transform="rotate(-22 407 84)"
          />
          <rect
            x="263"
            y="369"
            width="112"
            height="61"
            rx="10"
            fill="#0b2033"
            stroke="#4f687d"
            strokeWidth="2"
          />
          <rect x="276" y="380" width="86" height="37" rx="5" fill="#103555" />
          <path
            d="M285 402h14l6-13 10 20 8-10 8 3 8-11 8 11h7"
            fill="none"
            stroke="#59b8ff"
            strokeWidth="2"
          />
          <circle cx="353" cy="389" r="3" fill="#53d39e" />
          <path
            d="M218 284c13 40 28 67 64 91M171 271c-2 50 14 82 36 111"
            fill="none"
            stroke="#146ef5"
            strokeWidth="3"
          />
          <rect x="127" y="446" width="44" height="13" rx="5" fill="#10273c" />
          <rect x="452" y="431" width="44" height="13" rx="5" fill="#10273c" />
        </g>
        <g className="device-callout">
          <path
            d="M159 202V112H76"
            fill="none"
            stroke="#8ba2b7"
            strokeWidth="1.5"
          />
          <circle cx="159" cy="202" r="4" fill="#146ef5" />
          <rect
            x="28"
            y="73"
            width="132"
            height="43"
            rx="8"
            fill="white"
            stroke="#dbe5ed"
          />
          <text x="42" y="91" fill="#18324b" fontSize="10" fontWeight="700">
            ELBOW ENCODER
          </text>
          <text x="42" y="105" fill="#6e8497" fontSize="8">
            JOINT ANGLE ACQUISITION
          </text>
        </g>
        <g className="device-callout">
          <path
            d="M370 207h113l24 23"
            fill="none"
            stroke="#8ba2b7"
            strokeWidth="1.5"
          />
          <circle cx="370" cy="207" r="4" fill="#146ef5" />
          <rect
            x="455"
            y="229"
            width="137"
            height="43"
            rx="8"
            fill="white"
            stroke="#dbe5ed"
          />
          <text x="468" y="247" fill="#18324b" fontSize="10" fontWeight="700">
            FOREARM SUPPORT
          </text>
          <text x="468" y="261" fill="#6e8497" fontSize="8">
            ADJUSTABLE POSITIONING
          </text>
        </g>
      </svg>
      <div className="render-tag">
        <span>CONCEPT 01</span>
        <small>NON-POWERED ELBOW MODULE</small>
      </div>
    </div>
  )
}

const features = [
  {
    icon: "layers" as IconName,
    code: "01",
    title: "Upper-limb modularity",
    copy: "Proposed modular elbow and wrist attachments support upper-limb sensing; mechanical details remain under development.",
  },
  {
    icon: "sensor" as IconName,
    code: "02",
    title: "Multimodal sensing",
    copy: "Joint angle, arm motion, muscle activity, and interaction force provide a fuller movement record.",
  },
  {
    icon: "chart" as IconName,
    code: "03",
    title: "Immediate guidance",
    copy: "Planned local processing would count repetitions and provide feedback without depending on an internet connection.",
  },
  {
    icon: "shield" as IconName,
    code: "04",
    title: "Therapist oversight",
    copy: "Approved plans and synchronized session records support review between clinic appointments.",
  },
]

const capabilities = [
  {
    icon: "calibrate" as IconName,
    title: "Prescribe",
    copy: "Therapist sets the exercise plan",
  },
  {
    icon: "sensor" as IconName,
    title: "Calibrate",
    copy: "System verifies modules and sensors",
  },
  {
    icon: "play" as IconName,
    title: "Practice",
    copy: "Patient exercises with local guidance",
  },
  {
    icon: "chart" as IconName,
    title: "Review",
    copy: "Records sync for therapist review",
  },
]

function Architecture() {
  return (
    <div className="architecture-panel reveal">
      <div className="arch-labels">
        <span>PHYSICAL MODULE</span>
        <span>EMBEDDED ACQUISITION</span>
        <span>LOCAL CYBER LAYER</span>
        <span>CLOUD REVIEW</span>
      </div>
      <div className="arch-flow">
        <div className="arch-block">
          <div className="arch-icon">
            <Icon name="sensor" />
          </div>
          <div>
            <small>MEASURE</small>
            <strong>Elbow / wrist module</strong>
            <p>Encoder · IMUs · EMG · force</p>
          </div>
        </div>
        <div className="flow-line">
          <span>WIRED</span>
          <Icon name="arrow" />
        </div>
        <div className="arch-block primary">
          <div className="arch-icon">
            <Icon name="pulse" />
          </div>
          <div>
            <small>ACQUIRE</small>
            <strong>ESP32 controller</strong>
            <p>Timestamp · buffer · status</p>
          </div>
        </div>
        <div className="flow-line">
          <span>TRANSPORT TBD</span>
          <Icon name="arrow" />
        </div>
        <div className="arch-block">
          <div className="arch-icon">
            <Icon name="chart" />
          </div>
          <div>
            <small>PROCESS</small>
            <strong>Patient laptop</strong>
            <p>Filter · assess · guide · cache</p>
          </div>
        </div>
        <div className="flow-line">
          <span>SYNC TBD</span>
          <Icon name="arrow" />
        </div>
        <div className="arch-block">
          <div className="arch-icon">
            <Icon name="chart" />
          </div>
          <div>
            <small>REVIEW</small>
            <strong>Cloud + therapist</strong>
            <p>Plans · summaries · progress</p>
          </div>
        </div>
      </div>
      <div className="control-loop">
        <span>Immediate feedback remains local</span>
        <div className="loop-line" />
        <span>
          <i /> Offline records queue for sync
        </span>
      </div>
      <div className="architecture-note">
        <strong>Two connected paths.</strong> The patient receives immediate
        local guidance during exercise; the longer clinical path synchronizes
        records and returns therapist-approved plans when internet is available.
      </div>
    </div>
  )
}

function TherapistDashboard() {
  return (
    <div className="dashboard therapist-ui">
      <div className="dash-sidebar">
        <div className="mini-logo">M</div>
        <span className="active" />
        <span />
        <span />
        <span />
        <div className="side-avatar">AK</div>
      </div>
      <div className="dash-main">
        <div className="dash-top">
          <div>
            <small>THERAPIST CONSOLE</small>
            <strong>Good morning, Dr. Kim</strong>
          </div>
          <div className="status-pill">
            <i /> Device connected
          </div>
        </div>
        <div className="patient-row">
          <div className="patient-id">
            <div className="avatar">JR</div>
            <div>
              <strong>James R.</strong>
              <small>Upper-limb plan · Week 6</small>
            </div>
          </div>
          <button>Start session</button>
        </div>
        <div className="metric-grid">
          <div>
            <small>RANGE OF MOTION</small>
            <strong>112°</strong>
            <em>+8° this week</em>
          </div>
          <div>
            <small>REPETITIONS</small>
            <strong>
              18<sup>/20</sup>
            </strong>
            <em>2 incomplete</em>
          </div>
          <div>
            <small>COMPLETION</small>
            <strong>
              87<sup>%</sup>
            </strong>
            <em>26 of 30 reps</em>
          </div>
        </div>
        <div className="chart-panel">
          <div className="chart-heading">
            <strong>Elbow range trend</strong>
            <span>Last 8 sessions</span>
          </div>
          <svg viewBox="0 0 500 130" preserveAspectRatio="none">
            <path
              d="M0 104H500M0 70H500M0 36H500"
              stroke="#e5ebf0"
              strokeWidth="1"
            />
            <path
              d="M0 105C45 101 53 84 92 88s55-27 92-17 61-24 101-15 55-25 96-17 69-22 119-28"
              fill="none"
              stroke="#146ef5"
              strokeWidth="3"
            />
            <path
              d="M0 110C50 108 64 105 102 101s54-4 91-10 64-3 100-10 58-4 96-10 70-5 111-11"
              fill="none"
              stroke="#82a7c9"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

function PatientDashboard() {
  return (
    <div className="dashboard patient-ui">
      <div className="mobile-head">
        <Logo />
        <div className="avatar">JR</div>
      </div>
      <div className="session-intro">
        <small>TODAY'S SESSION</small>
        <h3>Elbow flexion</h3>
        <p>Guided mobility · 18 min</p>
      </div>
      <div className="ring-wrap">
        <div className="progress-ring">
          <strong>18</strong>
          <span>/ 24 reps</span>
        </div>
        <div>
          <small>Current angle</small>
          <strong>92°</strong>
          <em>Target range 85–100°</em>
        </div>
      </div>
      <div className="live-feedback">
        <Icon name="check" size={18} />
        <div>
          <strong>Controlled movement</strong>
          <span>Keep this pace</span>
        </div>
      </div>
      <button className="patient-button" disabled title="Illustrative interface; sessions are not implemented">
        <Icon name="play" size={17} /> Continue set
      </button>
    </div>
  )
}

const gallery = [
  {
    tag: "EMBEDDED CONTROL",
    title: "ESP32 acquisition board",
    type: "controller",
    copy: "Coordinates multi-sensor sampling and local communication.",
    image: asset("modurehab/renders/esp32.svg"),
  },
  {
    tag: "MOTION SENSING",
    title: "Inertial measurement unit",
    type: "sensor",
    copy: "Captures orientation and dynamic upper-limb movement.",
    image: asset("modurehab/renders/imu.svg"),
  },
  {
    tag: "BIOSIGNAL INPUT",
    title: "Surface EMG module",
    type: "biosignal",
    copy: "Measures muscle activation during prescribed exercises.",
    image: asset("modurehab/renders/emg.svg"),
  },
  {
    tag: "FORCE SENSING",
    title: "Load measurement module",
    type: "force",
    copy: "Tracks applied force for effort-aware rehabilitation tasks.",
    image: asset("modurehab/renders/force-module.png"),
  },
  {
    tag: "ELBOW REHABILITATION",
    title: "Adjustable elbow module",
    type: "mechanism",
    copy: "Supports guided flexion and extension across a set range.",
    image: asset("modurehab/renders/elbow-module.svg"),
  },
  {
    tag: "WRIST REHABILITATION",
    title: "Rotational wrist module",
    type: "mechanism",
    copy: "Provides a compact interface for controlled wrist practice.",
    image: asset("modurehab/renders/wrist-module.svg"),
  },
]

const audiences: {
  icon: IconName
  label: string
  title: string
  copy: string
}[] = [
  {
    icon: "user",
    label: "PATIENTS",
    title: "People rebuilding upper-limb movement",
    copy: "Designed for prescribed elbow and wrist practice at home, with clear guidance throughout each exercise.",
  },
  {
    icon: "chart",
    label: "THERAPISTS",
    title: "Clinicians guiding recovery",
    copy: "Configure exercise plans, review objective session data, and adjust progression with a continuous record.",
  },
  {
    icon: "shield",
    label: "CARE TEAMS",
    title: "Clinics extending care beyond appointments",
    copy: "Connect supervised rehabilitation with structured home practice through one shared sensing and software workflow.",
  },
]

const workflow: {
  icon: IconName
  title: string
  copy: string
}[] = [
  {
    icon: "calibrate",
    title: "Configure",
    copy: "The therapist selects the module, movement range, repetitions, and session targets.",
  },
  {
    icon: "layers",
    title: "Set up",
    copy: "The patient attaches the prescribed elbow or wrist module and follows the guided calibration.",
  },
  {
    icon: "pulse",
    title: "Practice",
    copy: "Sensors measure movement and muscle activity while local software provides immediate feedback.",
  },
  {
    icon: "chart",
    title: "Review",
    copy: "Session summaries help the therapist assess progress and prepare the next exercise plan.",
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("modurehab-theme")
    if (saved === "light" || saved === "dark") return saved
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem("modurehab-theme", theme)
  }, [theme])

  return (
    <div id="top">
      <header>
        <div className="nav-shell">
          <Logo />
          <nav id="main-navigation" className={menuOpen ? "open" : ""} aria-label="Main navigation">
            <a href="#platform" onClick={() => setMenuOpen(false)}>
              Platform
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <a href="#prototype" onClick={() => setMenuOpen(false)}>
              Prototype
            </a>
            <a href="#team" onClick={() => setMenuOpen(false)}>
              Team
            </a>
            <a
              className="nav-cta"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Follow the project <Icon name="arrow" size={16} />
            </a>
          </nav>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } theme`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              <span className="theme-icon">
                <Icon name={theme === "light" ? "moon" : "sun"} size={17} />
              </span>
              <span className="theme-label">
                {theme === "light" ? "Dark" : "Light"}
              </span>
            </button>
            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">MODULAR REHABILITATION SYSTEM</div>
            <h1>
              Engineering better
              <br />
              <span>recovery.</span>
            </h1>
            <p>
              A modular upper-limb rehabilitation platform connecting sensed
              exercise, immediate guidance, and therapist review from clinic to
              home.
            </p>
            <div className="hero-actions">
              <a className="button primary-button" href="#prototype">
                Explore the platform <Icon name="arrow" />
              </a>
              <a className="text-link" href="#how-it-works">
                <span className="play-circle">
                  <Icon name="play" size={16} />
                </span>{" "}
                See how it works
              </a>
            </div>
            <div className="hero-specs">
              <div>
                <strong>2 modules</strong>
                <span>Elbow + wrist</span>
              </div>
              <div>
                <strong>Offline first</strong>
                <span>Local feedback</span>
              </div>
              <div>
                <strong>4 signals</strong>
                <span>Angle · motion · EMG · force</span>
              </div>
            </div>
          </div>
          <div
            className="device-stage"
            aria-label="ModuRehab modular upper-limb rehabilitation device"
          >
            <div className="device-grid" />
            <div className="device-shadow" />
            <img
              className="product-cutout"
              src={asset("modurehab/device-cutout.png")}
              alt="ModuRehab adjustable elbow rehabilitation device with integrated sensing and electronics"
            />
            <div className="part-callout part-upper callout-left">
              <strong>UPPER-ARM SUPPORT</strong>
              <small>ADJUSTABLE STRAPPING</small>
            </div>
            <div className="part-callout part-elbow callout-left">
              <strong>ELBOW ENCODER</strong>
              <small>JOINT ANGLE ACQUISITION</small>
            </div>
            <div className="part-callout part-forearm callout-right">
              <strong>FOREARM SUPPORT</strong>
              <small>ERGONOMIC POSITIONING</small>
            </div>
            <div className="part-callout part-control callout-right">
              <strong>PROCESSING MODULE</strong>
              <small>LOCAL SENSOR ACQUISITION</small>
            </div>
            <div className="render-tag">
              <span>DEVICE CONCEPT</span>
              <small>MODULAR UPPER-LIMB PLATFORM</small>
            </div>
          </div>
        </section>

        <section className="trust-bar">
          <span>CLINIC-TO-HOME WORKFLOW</span>
          <div>
            <b>01</b> Therapist prescribes
          </div>
          <div>
            <b>02</b> Patient practices
          </div>
          <div>
            <b>03</b> Therapist reviews
          </div>
        </section>

        <section className="section use-section" id="audience">
          <div className="section-heading reveal">
            <div>
              <div className="eyebrow">WHO IT&apos;S FOR</div>
              <h2>
                Built around the people
                <br />
                behind every recovery.
              </h2>
            </div>
            <p>
              ModuRehab connects the patient&apos;s daily practice with the
              therapist&apos;s clinical plan, helping structured rehabilitation
              continue beyond the clinic.
            </p>
          </div>
          <div className="audience-grid">
            {audiences.map((audience, i) => (
              <article
                className="audience-card reveal"
                style={{ animationDelay: `${i * 90}ms` }}
                key={audience.label}
              >
                <div className="audience-icon">
                  <Icon name={audience.icon} size={25} />
                </div>
                <span>{audience.label}</span>
                <h3>{audience.title}</h3>
                <p>{audience.copy}</p>
              </article>
            ))}
          </div>

          <figure className="home-use-story reveal">
            <div className="home-use-image">
              <img
                src={asset("modurehab/patient-home.jpg")}
                alt="Patient completing a guided elbow rehabilitation session at home with ModuRehab and a connected tablet"
              />
              <span>ILLUSTRATIVE HOME-USE CONCEPT</span>
            </div>
            <figcaption>
              <small>DESIGNED FOR DAILY PRACTICE</small>
              <h3>Clinical structure, in a familiar environment.</h3>
              <p>
                The proposed system would guide each repetition while the
                connected interface shows progress, movement quality, and
                immediate feedback.
              </p>
              <div>
                <span>
                  <Icon name="check" size={15} /> Guided repetitions
                </span>
                <span>
                  <Icon name="check" size={15} /> Live sensing
                </span>
                <span>
                  <Icon name="check" size={15} /> Therapist review
                </span>
              </div>
            </figcaption>
          </figure>

          <div className="workflow-panel" id="how-it-works">
            <div className="workflow-heading reveal">
              <div>
                <div className="eyebrow">HOW IT WORKS</div>
                <h2>One connected recovery loop.</h2>
              </div>
              <p>
                A simple four-step workflow keeps clinical intent, guided
                practice, and measurable progress connected.
              </p>
            </div>
            <div className="workflow-grid">
              {workflow.map((step, i) => (
                <article
                  className="workflow-step reveal"
                  style={{ animationDelay: `${i * 90}ms` }}
                  key={step.title}
                >
                  <div className="workflow-step-top">
                    <span>0{i + 1}</span>
                    <div>
                      <Icon name={step.icon} size={21} />
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                  {i < workflow.length - 1 && (
                    <span className="workflow-arrow">
                      <Icon name="arrow" size={17} />
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section features-section" id="platform">
          <div className="section-heading reveal">
            <div>
              <div className="eyebrow">THE PLATFORM</div>
              <h2>
                One system. Every stage
                <br />
                of rehabilitation.
              </h2>
            </div>
            <p>
              One shared sensing and software workflow designed for measurable
              upper-limb practice at home.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((f, i) => (
              <article
                className="feature-card reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
                key={f.title}
              >
                <div className="feature-top">
                  <div className="icon-box">
                    <Icon name={f.icon} size={25} />
                  </div>
                  <span>{f.code}</span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.copy}</p>
                <div className="card-line" />
              </article>
            ))}
          </div>
          <div className="capability-strip reveal">
            {capabilities.map((capability) => (
              <div className="capability" key={capability.title}>
                <Icon name={capability.icon} size={18} />
                <div>
                  <strong>{capability.title}</strong>
                  <span>{capability.copy}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="architecture-section" id="technology">
          <div className="section narrow">
            <div className="section-heading light reveal">
              <div>
                <div className="eyebrow">SYSTEM ARCHITECTURE</div>
                <h2>
                  From movement to
                  <br />
                  meaningful data.
                </h2>
              </div>
              <p>
                One proposed deployment could keep assessment on a local computer while
                plans and summaries synchronize through a future backend. Transport and hosting remain undecided.
              </p>
            </div>
            <Architecture />
          </div>
        </section>

        <section className="section software-section">
          <div className="section-heading reveal">
            <div>
              <div className="eyebrow">SOFTWARE CONCEPTS</div>
              <h2>
                Clarity for clinicians.
                <br />
                Momentum for patients.
              </h2>
            </div>
            <p>
              Illustrative interfaces with fictional sample readings, not live patient data. Planned experiences would share a record of
              recovery.
            </p>
          </div>
          <div className="software-grid">
            <div className="software-card reveal">
              <div className="software-meta">
                <span>01 / THERAPIST — MOCKUP</span>
                <p>Configure protocols and track objective outcomes.</p>
              </div>
              <div className="dashboard-image">
                <img
                  src={asset("modurehab/dashboard-full.jpg")}
                  alt="ModuRehab clinical dashboard showing joint angle curves, repetition count, sensor data, and therapist progress metrics"
                />
              </div>
            </div>
            <div className="software-card patient-card reveal">
              <div className="software-meta">
                <span>02 / PATIENT — MOCKUP</span>
                <p>Simple guidance and real-time performance feedback.</p>
              </div>
              <PatientDashboard />
            </div>
          </div>
        </section>

        <section className="prototype-section" id="prototype">
          <div className="prototype-inner">
            <div className="section-heading reveal">
              <div>
                <div className="eyebrow">PROTOTYPE DEVELOPMENT</div>
                <h2>
                  The proposed
                  <br />
                  prototype stack.
                </h2>
              </div>
              <p>
                Six proposed elements would combine sensing, acquisition, and
                replaceable rehabilitation mechanics in one modular system.
              </p>
            </div>
            <figure className="system-showcase reveal">
              <div className="system-showcase-visual">
                <img
                  src={asset("modurehab/system-overview.jpg")}
                  alt="Annotated ModuRehab system showing the force sensor, elbow encoder, processing module, muscle engagement feedback, and patient guidance"
                />
                <span className="showcase-label">SYSTEM CONCEPT</span>
              </div>
              <figcaption>
                <div>
                  <small>MODUREHAB · SYSTEM OVERVIEW</small>
                  <strong>
                    Sensing, processing, and guided rehabilitation in one
                    connected platform.
                  </strong>
                </div>
                <div className="showcase-status">
                  <span>
                    <i /> Local feedback
                  </span>
                  <span>Cloud-ready records</span>
                </div>
              </figcaption>
            </figure>
            <div className="gallery-grid">
              {gallery.map((item, i) => (
                <article
                  className="gallery-card reveal"
                  style={{ animationDelay: `${i * 70}ms` }}
                  key={item.title}
                >
                  <div className={`gallery-visual ${item.type}`}>
                    <img src={item.image} alt={item.title} />
                    <span className="image-label">PROPOSED COMPONENT</span>
                    <span className="image-index">0{i + 1}</span>
                  </div>
                  <div className="gallery-caption">
                    <div>
                      <small>{item.tag}</small>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section team-section" id="team">
          <div className="team-intro reveal">
            <div className="team-copy">
              <div className="eyebrow">THE TEAM</div>
              <h2>
                Clinical insight.
                <br />
                Engineering rigor.
              </h2>
            </div>
            <div className="team-summary">
              <p>
                Group 18 combines mechanical design, embedded sensing, machine
                learning, and interface engineering in one integrated
                cyber-physical system.
              </p>
              <a
                className="text-arrow"
                href="https://github.com/cepdnaclk/e22-3yp-modu-rehab-home"
                target="_blank"
                rel="noreferrer"
              >
                View project repository <Icon name="arrow" />
              </a>
            </div>
          </div>

          <article className="supervisor-card reveal">
            <div className="supervisor-photo">
              <img
                src={asset("modurehab/team/yasodha.png")}
                alt="Ms. Yasodha Vimukthi"
              />
              <span>PROJECT SUPERVISOR</span>
            </div>
            <div className="supervisor-info">
              <div>
                <small>ACADEMIC GUIDANCE</small>
                <h3>Ms. Yasodha Vimukthi</h3>
                <p>
                  Department of Computer Engineering
                  <br />
                  University of Peradeniya
                </p>
              </div>
              <a
                className="supervisor-email"
                href="mailto:yasodhav@eng.pdn.ac.lk"
                aria-label="Email Ms. Yasodha Vimukthi"
              >
                <Icon name="mail" size={18} />
                <span>
                  <small>CONTACT</small>
                  yasodhav@eng.pdn.ac.lk
                </span>
              </a>
            </div>
          </article>

          <div className="team-label reveal">
            <span>GROUP 18</span>
            <span>UNIVERSITY OF PERADENIYA · E/22</span>
          </div>
          <div className="team-members">
            {[
              {
                initials: "MM",
                name: "Matheesha Bimsara",
                id: "E/22/052",
                focus: "Mechanical · Embedded",
                image: asset("modurehab/team/matheesha.png"),
                github: "mbimsara",
                email: "e22052@eng.pdn.ac.lk",
                linkedin:
                  "https://www.linkedin.com/in/matheesha-bimsara-38001a34a",
              },
              {
                initials: "SK",
                name: "Shehani Weerasekara",
                id: "E/22/419",
                focus: "AI / ML · Software",
                image: asset("modurehab/team/shehani.png"),
                github: "shehani419",
                email: "e22419@eng.pdn.ac.lk",
                linkedin:
                  "https://www.linkedin.com/in/shehani-weerasekara-101463367",
              },
              {
                initials: "TS",
                name: "Tharuka Cooray",
                id: "E/22/058",
                focus: "Embedded · Systems",
                image: asset("modurehab/team/tharuka.jpg"),
                github: "tharuka058",
                email: "e22058@eng.pdn.ac.lk",
                linkedin: "https://www.linkedin.com/in/tharuka-cooray",
              },
              {
                initials: "SS",
                name: "Samara Gunawardhana",
                id: "E/22/127",
                focus: "Software · Integration",
                image: asset("modurehab/team/samara.png"),
                github: "samara328",
                email: "e22127@eng.pdn.ac.lk",
                linkedin:
                  "https://www.linkedin.com/in/samara-gunawardhana-184633398",
              },
            ].map((member, i) => (
              <article
                className="member-card reveal"
                style={{ animationDelay: `${i * 90}ms` }}
                key={member.id}
              >
                <div className="member-photo">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <span>{member.initials}</span>
                  )}
                </div>
                <div className="member-info">
                  <span>{member.focus}</span>
                  <h3>{member.name}</h3>
                  <small>{member.id}</small>
                  <div className="member-socials">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      title="LinkedIn"
                    >
                      <Icon name="linkedin" size={16} />
                    </a>
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on GitHub`}
                      title={`GitHub: @${member.github}`}
                    >
                      <Icon name="github" size={16} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      title={member.email}
                    >
                      <Icon name="mail" size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="cta-inner reveal">
            <div>
              <div className="eyebrow">PROJECT DEVELOPMENT</div>
              <h2>
                Follow the build from
                <br />
                concept to prototype.
              </h2>
            </div>
            <div>
              <p>
                Explore the engineering work, integration progress, and project
                documentation.
              </p>
              <a
                className="button white-button"
                href="https://github.com/cepdnaclk/e22-3yp-modu-rehab-home"
                target="_blank"
                rel="noreferrer"
              >
                View project repository <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
        <aside className="project-status" aria-label="Project status and safety">
          <strong>Research &amp; development</strong>
          <p>Initial ESP32 Serial firmware is implemented; device renders and application screens illustrate planned functionality. This is not a clinically validated medical device. AI will not diagnose, prescribe treatment, or override independent safety controls.</p>
        </aside>
      </main>
      <footer>
        <Logo />
        <p><a href="https://github.com/cepdnaclk/e22-3yp-Modu-Rehab-Home/blob/main/docs/design/software-architecture.md">Architecture &amp; documentation</a></p>
        <div>
          <span>© 2026 MODUREHAB</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
