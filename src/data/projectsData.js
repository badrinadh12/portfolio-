// Centralized projects dataset strictly adhering to exact specified order and verified features.
export const PROJECTS = [
  {
    id: 'deepshield-ai',
    number: '01',
    code: 'SEC-01',
    title: 'DeepShield AI',
    category: 'Digital Banking Fraud Protection',
    badge: 'CYBERSECURITY DEFENSE',
    theme: 'cyber',
    accentColor: '#00F0FF',
    glowColor: 'rgba(0, 240, 255, 0.45)',
    bgGradient: 'radial-gradient(circle at 50% 20%, rgba(0, 240, 255, 0.15), transparent 70%)',
    summary:
      'A fraud detection system built during a hackathon to help identify suspicious digital banking activity in real time.',
    problemSolved:
      'Digital banking transactions face rapid credential stuffing, unauthorized device takeovers, and fraudulent QR redirects that bypass conventional password security.',
    practicalValue:
      'Enables banking operations teams to triage transactions within milliseconds through an automated ALLOW / VERIFY / BLOCK decision matrix.',
    hasWhatsApp: false,
    verifiedFeatures: [
      {
        title: 'Behavioral Authentication',
        detail: 'Analyzes user interaction cadence, keystroke telemetry, and session navigation dynamics.',
      },
      {
        title: 'Fake QR Fraud Detection',
        detail: 'Parses QR payment payloads to detect malicious redirect vectors, suspicious domains, and spoofed merchant endpoints.',
      },
      {
        title: 'Transaction Anomaly Detection',
        detail: 'Flags atypical spending spikes, rapid-succession transfers, and abnormal geolocation deviations.',
      },
      {
        title: 'Device-Based Verification & Fingerprinting',
        detail: 'Validates cryptographic session tokens, browser canvas fingerprints, and hardware integrity.',
      },
      {
        title: 'Location-Based Fraud Checks',
        detail: 'Cross-references IP geography with recent account activity to prevent remote takeover attempts.',
      },
      {
        title: 'ALLOW / VERIFY / BLOCK Dashboard',
        detail: 'Real-time operational triage panel classifying transactions into instantaneous risk categories.',
      },
    ],
    technologies: ['Python', 'AI/ML Behavioral Logic', 'FastAPI', 'Security Telemetry', 'RESTful API'],
    visualIdentity: 'Cybersecurity HUD interface with neon cyan metrics, terminal telemetry, and security shields.',
  },
  {
    id: 'carbon-comply',
    number: '02',
    code: 'SEC-02',
    title: 'Carbon Comply',
    category: 'Carbon Footprint Tracking and Automation',
    badge: 'ECO AUTOMATION',
    theme: 'eco',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    bgGradient: 'radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.15), transparent 70%)',
    summary:
      'A carbon footprint tracking application that estimates emissions associated with transport and electricity usage with automated reporting.',
    problemSolved:
      'Individuals and organizations struggle to accurately calculate multimodal commute emissions and household power impacts without cumbersome manual logging.',
    practicalValue:
      'Delivers immediate personal accountability through automated weekly target rollover tracking and direct WhatsApp alert notifications.',
    hasWhatsApp: true,
    whatsAppDescription:
      'Automated WhatsApp notification pipeline that sends weekly emission summaries, target rollover alerts, and instant breach notifications directly to user phones.',
    verifiedFeatures: [
      {
        title: 'Carbon Footprint Tracking',
        detail: 'Monitors ongoing emissions across transportation and electricity consumption categories.',
      },
      {
        title: 'Emissions Estimation',
        detail: 'Calculates CO2 equivalent impact from vehicle types, distances traveled, and kilowatt-hour baselines.',
      },
      {
        title: 'Weekly Emissions Targets',
        detail: 'Enforces cyclical emission caps with dynamic rollover tracking across consecutive weeks.',
      },
      {
        title: 'Reminders & Over-Target Notifications',
        detail: 'Automated threshold warning system that alerts users when approaching 80% and 100% of weekly budgets.',
      },
      {
        title: 'Supabase-Backed Architecture',
        detail: 'Relational persistence layer storing historical emission entries, user profiles, and audit timestamps.',
      },
      {
        title: 'WhatsApp Integration & Webhooks',
        detail: 'Triggered messaging dispatch providing weekly reports and instant alerts without requiring the app to be open.',
      },
      {
        title: 'Website-Triggered Automation',
        detail: 'Event-driven triggers that initiate notification workflows upon logging new transport or power entries.',
      },
    ],
    technologies: ['Next.js', 'React', 'Supabase', 'WhatsApp API / Webhooks', 'Tailwind / Vanilla CSS'],
    visualIdentity: 'Clean emerald-slate environmental theme with real-time analytics graphs and emission rings.',
  },
  {
    id: 'dbms-railway-management',
    number: '03',
    code: 'SEC-03',
    title: 'DBMS Railway Management System',
    category: 'Database Management System',
    badge: 'DATABASE ARCHITECTURE',
    theme: 'database',
    accentColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.45)',
    bgGradient: 'radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.15), transparent 70%)',
    summary:
      'An academic database engineering project focused on railway-related records, relational schema design, and operational queries.',
    problemSolved:
      'Managing massive, interconnected railway data across trains, stations, routes, seat allocations, and passenger schedules requires strict normalization to prevent anomalies.',
    practicalValue:
      'Demonstrates rigorous database normalization (3NF), complex multi-table relational queries, and referential integrity constraints.',
    hasWhatsApp: false,
    verifiedFeatures: [
      {
        title: 'Relational Database Schema (3NF)',
        detail: 'Fully normalized database structure eliminating data redundancy and update anomalies.',
      },
      {
        title: 'Entity-Relationship (ER) Architecture',
        detail: 'Formal ER modeling capturing cardinalities between Trains, Stations, Routes, Compartments, and Passengers.',
      },
      {
        title: 'Advanced SQL Query Engine',
        detail: 'Complex multi-table JOINs, nested subqueries, aggregations, and indexed queries for schedule lookups.',
      },
      {
        title: 'Railway Operational Records',
        detail: 'Data models for train numbers, schedule timings, station stop sequences, and seat availability tracking.',
      },
      {
        title: 'Integrity Constraints & Triggers',
        detail: 'Primary key / foreign key constraints preventing orphaned bookings or duplicate station allocations.',
      },
    ],
    technologies: ['SQL', 'Relational DBMS', 'ER Diagramming', 'Database Normalization', 'Schema Design'],
    visualIdentity: 'Amber and warm bronze industrial database blueprint aesthetic with ER schema diagrams.',
  },
  {
    id: 'elevator-digital-logic',
    number: '04',
    code: 'SEC-04',
    title: 'Elevator Digital Logic',
    category: 'Digital Logic and Hardware Design',
    badge: 'HARDWARE & CIRCUITS',
    theme: 'hardware',
    accentColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.45)',
    bgGradient: 'radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.15), transparent 70%)',
    summary:
      'An academic engineering project demonstrating elevator control concepts through fundamental digital logic and circuit architecture.',
    problemSolved:
      'Translating multi-floor button requests, directional priority, and door safety interlocks into deterministic digital state transitions.',
    practicalValue:
      'Provides a foundational hardware model for priority floor arbitration and digital safety interlocks using Boolean logic.',
    hasWhatsApp: false,
    verifiedFeatures: [
      {
        title: 'Logic Gate Combinations',
        detail: 'Implementation utilizing fundamental AND, OR, NOT, and XOR gate matrices to evaluate control inputs.',
      },
      {
        title: 'Digital Circuit Schematic Design',
        detail: 'Interconnected combinatorial and sequential circuits mapping floor inputs to motor drive signals.',
      },
      {
        title: 'Floor Selection & Priority Logic',
        detail: 'Priority encoders that arbitrate between simultaneous requests based on current elevator direction (UP/DOWN).',
      },
      {
        title: 'State Transitions & Flip-Flops',
        detail: 'Synchronous clock-driven state machine transitioning through IDLE, MOVING_UP, MOVING_DOWN, and DOOR_OPEN.',
      },
      {
        title: 'Safety Interlocks & Control Signals',
        detail: 'Hardware interlocks preventing cabin movement while door proximity sensors or emergency flags are active.',
      },
    ],
    technologies: ['Digital Logic', 'Boolean Algebra', 'Circuit Simulation', 'Truth Tables', 'State Machine Design'],
    visualIdentity: 'Vibrant ultraviolet PCB circuitry aesthetic with glowing logic gates and bus traces.',
  },
  {
    id: 'luna-dental',
    number: '05',
    code: 'SEC-05',
    title: 'Luna Dental',
    category: 'Dental Website and Appointment Experience',
    badge: 'COMMERCIAL HEALTHCARE',
    theme: 'clinical',
    accentColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    bgGradient: 'radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.15), transparent 70%)',
    summary:
      'A professional, patient-centered clinic website built for a dentist featuring appointment booking, Supabase integration, and WhatsApp communication.',
    problemSolved:
      'Dental practices often lose prospective patients due to cumbersome phone-only booking or slow response times on clinic websites.',
    practicalValue:
      'Streamlines patient inquiries into direct Supabase database records while facilitating instant one-tap WhatsApp communication.',
    hasWhatsApp: true,
    whatsAppDescription:
      'Direct WhatsApp chat integration allowing patients to immediately confirm appointment requests, inquire about treatments, or reach the clinic staff with pre-formatted inquiry text.',
    verifiedFeatures: [
      {
        title: 'Professional Dental Clinic Web Experience',
        detail: 'Clean, calming, and responsive clinic presence with high visual fidelity across desktop, tablet, and mobile.',
      },
      {
        title: 'Appointment Request Engine',
        detail: 'Structured patient booking flow capturing preferred procedure, doctor preference, date, and contact information.',
      },
      {
        title: 'Supabase Backend Integration',
        detail: 'Secure cloud database storing appointment inquiries, contact submissions, and practice notifications.',
      },
      {
        title: 'WhatsApp Patient Communication',
        detail: 'One-tap communication workflow enabling patients to instantly verify booking details via WhatsApp.',
      },
      {
        title: 'Treatment & Services Catalog',
        detail: 'Organized informational breakdowns of dental hygiene, cosmetic dentistry, orthodontics, and restorative care.',
      },
    ],
    technologies: ['Next.js', 'React', 'Supabase Database', 'WhatsApp API / URL Schemes', 'Tailwind CSS'],
    visualIdentity: 'Serene cyan and clean medical white glassmorphic aesthetic with clinical precision typography.',
  },
  {
    id: 'ecommerce-website',
    number: '06',
    code: 'SEC-06',
    title: 'E-commerce Website',
    category: 'E-commerce and Business Automation',
    badge: 'LOVABLE STOREFRONT',
    theme: 'commerce',
    accentColor: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.45)',
    bgGradient: 'radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.15), transparent 70%)',
    summary:
      'An e-commerce storefront built using Lovable featuring an online shopping interface, product presentation, and WhatsApp-driven ordering workflows.',
    problemSolved:
      'Modern small businesses require sleek, low-friction storefronts that convert visitors into orders through high-touch conversational commerce.',
    practicalValue:
      'Bridges modern web product presentation with direct customer communication, enabling instant sales inquiries via WhatsApp.',
    hasWhatsApp: true,
    whatsAppDescription:
      'Integrated WhatsApp checkout and customer inquiry flow allowing shoppers to dispatch pre-filled cart summaries directly to the store manager via WhatsApp.',
    verifiedFeatures: [
      {
        title: 'Online Shopping & Product Interface',
        detail: 'Modern product catalog with image galleries, category filtering, detailed descriptions, and pricing displays.',
      },
      {
        title: 'Lovable-Powered Rapid Architecture',
        detail: 'Built utilizing AI-assisted developer workflows in Lovable to rapidly prototype and deploy interactive UI components.',
      },
      {
        title: 'WhatsApp Ordering & Communication Workflow',
        detail: 'Customer action buttons that format item names, quantities, and customer details into instant WhatsApp messages.',
      },
      {
        title: 'Interactive Product Exploration',
        detail: 'Smooth hover zooms, product card reveals, and responsive mobile-optimized shopping ergonomics.',
      },
    ],
    technologies: ['Lovable', 'React', 'Modern UI Frameworks', 'WhatsApp Chat Bridge', 'Responsive CSS'],
    visualIdentity: 'Vibrant neon fuchsia and modern commercial dark-mode styling with product spotlight cards.',
  },
  {
    id: 'smart-address',
    number: '07',
    code: 'SEC-07',
    title: 'Smart Address',
    category: 'Smart Address Application',
    badge: 'ADDRESS MANAGEMENT',
    theme: 'smart',
    accentColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.45)',
    bgGradient: 'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.15), transparent 70%)',
    summary:
      'A dedicated smart address management application designed to organize, validate, and manage modern contact coordinates and address books.',
    problemSolved:
      'Managing decentralized contact books and fragmented address formats across teams and mobile devices.',
    practicalValue:
      'Structured contact book and address directory with extensible search, categorization, and export capabilities.',
    hasWhatsApp: false,
    verifiedFeatures: [
      {
        title: 'Smart Contact Book Architecture',
        detail: 'Normalized address records managing names, phone numbers, email coordinates, and residential details.',
      },
      {
        title: 'CSV Data Integration & Export',
        detail: 'Structured contact schema supporting synchronized CSV import and export workflows.',
      },
      {
        title: 'Address Categorization & Fast Lookup',
        detail: 'Instant indexing allowing rapid search and filtering across contact records.',
      },
      {
        title: 'Extensible Implementation Foundation',
        detail: 'Modular component architecture ready for custom API connectors and location validation integrations.',
      },
    ],
    technologies: ['JavaScript / React', 'Contact Data Models', 'CSV Parser', 'Responsive UI'],
    visualIdentity: 'Electric indigo and modern directory aesthetic with interactive address ledger cards.',
  },
];
