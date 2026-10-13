// CISM study guide content — follows the CISM exam content outline effective 3 Nov 2026.
// Each topic: id, title, summary (plain English), points (key facts), tip (exam angle), cissp (overlap).
window.CISM_DOMAINS = [
{
  n: 1, key: "d1", name: "Information Security Governance", short: "Governance", weight: 18, prev: 17,
  blurb: "How security is directed and controlled from the top so it supports business goals. Think board, CISO, strategy and frameworks.",
  subs: [
  { id: "1A", name: "Enterprise Governance", topics: [
    { id: "1A-1", title: "Organisational culture",
      summary: "How people across the company think and behave about security. Culture decides whether controls are followed or quietly bypassed.",
      points: [
        "Security culture is shaped by <b>senior management's visible commitment</b>, not by policies alone.",
        "Signs of a weak culture: workarounds, shadow IT, incidents not reported, security seen as 'IT's problem'.",
        "Culture change levers: leadership messaging, awareness programs, incentives, making secure behaviour the easy path.",
        "Risk culture links to <b>risk appetite</b>: a risk-averse bank and a fast-moving start-up need different approaches."
      ],
      tip: "If a question asks the BEST way to improve compliance across the business, look for <b>senior management support / tone at the top</b> before technical enforcement.",
      cissp: "D1 Security & Risk Mgmt" },
    { id: "1A-2", title: "Legal, regulatory & contractual requirements",
      summary: "Laws, regulations and contract clauses the organisation must meet. Security must know them and build them into requirements.",
      points: [
        "Examples: GDPR, India DPDP Act, HIPAA, PCI DSS (contractual), SOX, sector regulators (RBI, SEBI, OSFI).",
        "The security manager <b>identifies</b> requirements and their impact; <b>legal counsel interprets</b> them.",
        "Requirements flow into policies, standards and controls — map each control back to an obligation.",
        "Cross-border data flows, data residency and breach notification deadlines are frequent exam themes.",
        "Contractual requirements (client SLAs, security schedules) are as binding as regulation for the business."
      ],
      tip: "When a new regulation appears, the FIRST step is usually a <b>gap analysis / impact assessment</b>, not buying a tool or rewriting all policies.",
      cissp: "D1 (legal & regulatory)" },
    { id: "1A-3", title: "Organisational structures, roles & responsibilities",
      summary: "Who decides, who does, and who is accountable for security.",
      points: [
        "<b>Board</b>: ultimate accountability, sets risk appetite, oversees. <b>Senior management</b>: implements governance, allocates resources.",
        "<b>Steering committee</b>: cross-functional leaders who prioritise security initiatives and resolve conflicts.",
        "<b>CISO / ISM</b>: designs and runs the program; should report high enough to stay independent (ideally not under the CIO).",
        "<b>Data/asset owner</b>: business person accountable for an asset, decides its classification and access. <b>Custodian</b>: IT, protects it day-to-day.",
        "RACI charts make Responsible, Accountable, Consulted and Informed explicit — exactly one 'A' per activity."
      ],
      tip: "Accountability for business risk sits with the <b>business owner</b>, not with the security manager or IT.",
      cissp: "D1 + D2 (owner vs custodian)" }
  ]},
  { id: "1B", name: "Information Security Strategy", topics: [
    { id: "1B-1", title: "Developing the security strategy",
      summary: "A long-term plan that moves security from where it is today to where the business needs it to be.",
      points: [
        "Start from <b>business strategy and objectives</b>, then define the desired security state.",
        "Assess the <b>current state</b> (maturity models such as CMMI, risk assessments, audits) → <b>gap analysis</b> → <b>roadmap</b>.",
        "Strategy inputs: business goals, risk appetite, regulations, culture, resources, threat landscape.",
        "Strategy constraints: budget, people/skills, legal, culture, time, existing architecture.",
        "Outcome of good governance: <b>strategic alignment, risk management, value delivery, resource optimisation, performance measurement</b>."
      ],
      tip: "The MOST important factor in a security strategy is <b>alignment with business objectives</b>. A technically perfect strategy that ignores the business is wrong on CISM.",
      cissp: "D1 (governance principles)" },
    { id: "1B-2", title: "Governance frameworks & standards",
      summary: "Proven models that give the security program structure and make it auditable.",
      points: [
        "<b>COBIT</b>: governance and management of enterprise IT; separates governance (EDM) from management.",
        "<b>ISO/IEC 27001</b>: certifiable ISMS requirements. <b>27002</b>: control guidance.",
        "<b>NIST CSF 2.0</b>: Govern, Identify, Protect, Detect, Respond, Recover.",
        "Frameworks are <b>adapted</b> to the organisation, not adopted blindly.",
        "Governance = setting direction and oversight. Management = planning, building, running and monitoring."
      ],
      tip: "Choose a framework based on business needs and regulatory context, not popularity.",
      cissp: "D1" },
    { id: "1B-3", title: "Strategic planning: budget, resources & business case",
      summary: "Getting the money and people to execute the strategy, and showing management the value.",
      points: [
        "A <b>business case</b> links an investment to risk reduction and business value (cost-benefit, ROSI).",
        "Budget requests succeed when framed in <b>business risk terms</b>, not technical terms.",
        "Resource options: in-house, outsourced, managed services, contractors.",
        "Governance metrics: <b>KGIs</b> (did we achieve the goal?) and <b>KPIs</b> (how well is the process performing?)."
      ],
      tip: "To obtain senior management buy-in, the BEST approach is to present security in terms of <b>business impact and risk</b>.",
      cissp: "D1 (lightly covered)" }
  ]}
  ]
},
{
  n: 2, key: "d2", name: "Information Security Risk Management", short: "Risk Management", weight: 20, prev: 20,
  blurb: "Finding what could go wrong, how bad it would be, and deciding what to do about it, within the organisation's risk appetite.",
  subs: [
  { id: "2A", name: "Risk Assessment", topics: [
    { id: "2A-1", title: "Emerging risk & threat landscape",
      summary: "Keeping track of new and changing threats so risk assessments stay current.",
      points: [
        "Examples: ransomware-as-a-service, AI-generated phishing, deepfake fraud, supply-chain compromise, cloud misconfiguration.",
        "Sources: threat intelligence feeds, ISACs, vendor advisories, regulators, internal incident data.",
        "New technology (AI, IoT, cloud) and business change (M&A, new markets) trigger reassessment.",
        "Threat × vulnerability × impact = risk. A threat with no exploitable vulnerability is low risk."
      ],
      tip: "Risk assessment is <b>continuous</b>, not annual. A major business change should trigger a new assessment.",
      cissp: "D1 (threat modelling)" },
    { id: "2A-2", title: "Vulnerability & control deficiency analysis",
      summary: "Finding weaknesses in systems and gaps where controls are missing or not working.",
      points: [
        "Vulnerabilities: unpatched systems, weak configurations, missing MFA, untrained staff.",
        "Control deficiency = a control that is missing, poorly designed, or not operating effectively.",
        "Sources: vulnerability scans, pen tests, audits, control self-assessments, incidents.",
        "Prioritise by <b>risk to the business</b>, not by count or CVSS score alone."
      ],
      tip: "When an audit finds a control gap, the manager's next step is to <b>assess the risk</b> it creates before choosing a fix.",
      cissp: "D1 + D6" },
    { id: "2A-3", title: "Risk assessment & analysis",
      summary: "Working out how likely a risk is and how much damage it could do.",
      points: [
        "<b>Qualitative</b>: High/Medium/Low, fast, subjective. <b>Quantitative</b>: money values, slower, needs data. <b>Semi-quantitative</b>: scored scales.",
        "<b>SLE</b> = Asset value × Exposure factor. <b>ALE</b> = SLE × ARO.",
        "<b>Inherent risk</b>: before controls. <b>Residual risk</b>: after controls. Residual must sit within risk appetite.",
        "<b>Risk appetite</b>: how much risk the organisation is willing to accept. <b>Tolerance</b>: acceptable deviation. <b>Capacity</b>: the most it can absorb without failing.",
        "Risk scenarios describe a threat acting on an asset with a business impact — the basis of good analysis."
      ],
      tip: "Risk appetite is set by <b>senior management / the board</b>, not the security manager.",
      cissp: "D1 (SLE/ALE/ARO tested heavily)" }
  ]},
  { id: "2B", name: "Risk Response", topics: [
    { id: "2B-1", title: "Risk treatment options",
      summary: "The four ways to respond to a risk.",
      points: [
        "<b>Mitigate</b>: add or improve controls to reduce likelihood or impact.",
        "<b>Transfer / share</b>: insurance, outsourcing, contracts. Accountability is <b>never</b> transferred.",
        "<b>Avoid</b>: stop the activity that creates the risk.",
        "<b>Accept</b>: live with it — must be a formal, documented decision by the right risk owner.",
        "Choose based on cost-benefit: a control should not cost more than the risk it reduces."
      ],
      tip: "If residual risk is still above appetite, escalate to the risk owner / senior management for a decision — the security manager does not accept risk on the business's behalf.",
      cissp: "D1" },
    { id: "2B-2", title: "Risk & control ownership",
      summary: "Every risk and every control needs a named person who is accountable.",
      points: [
        "<b>Risk owner</b>: business manager accountable for the risk and the treatment decision.",
        "<b>Control owner</b>: accountable for a control working as designed.",
        "Ownership drives action — unowned risks don't get fixed.",
        "The security manager <b>facilitates and advises</b>; the business owns."
      ],
      tip: "Questions asking 'who should accept / decide on this risk' → the <b>business/process owner</b> with authority.",
      cissp: "D1" },
    { id: "2B-3", title: "Risk monitoring & reporting",
      summary: "Tracking risks over time and keeping leadership informed.",
      points: [
        "<b>Risk register</b>: central list of risks, owners, ratings, treatments and status.",
        "<b>KRIs</b> (key risk indicators): early warnings that a risk is rising, e.g. % unpatched critical systems.",
        "Report to the board in <b>business language</b>: trends, exposure vs appetite, decisions needed.",
        "Reassess when the environment changes — new systems, threats, regulations or business lines.",
        "Third-party risk is monitored too: vendor assessments, SOC 2 / ISO reports, contract reviews."
      ],
      tip: "A good KRI is <b>predictive</b> — it warns before the impact happens.",
      cissp: "D1 + D6 (metrics)" }
  ]}
  ]
},
{
  n: 3, key: "d3", name: "Information Security Program", short: "Security Program", weight: 33, prev: 33,
  blurb: "Building and running the day-to-day security function: resources, assets, policies, architecture, controls, training and vendors. The largest domain.",
  subs: [
  { id: "3A", name: "Program Development", topics: [
    { id: "3A-1", title: "Program resources",
      summary: "The people, tools, technology and budget needed to deliver the security program.",
      points: [
        "People: skills inventory, roles, training, succession; build vs buy vs outsource.",
        "Tools & technology: chosen to meet requirements from the strategy, not the other way round.",
        "The program scope and charter define what the security function is responsible for.",
        "Resource gaps are reported as <b>risk</b>, with options for management."
      ],
      tip: "Before buying a tool, confirm the <b>requirement and risk</b> it addresses.",
      cissp: "D1" },
    { id: "3A-2", title: "Asset identification & classification",
      summary: "Knowing what information and systems you have, and labelling how sensitive and critical they are.",
      points: [
        "You can't protect what you don't know: start with an <b>asset inventory</b>.",
        "Classification levels, e.g. Public / Internal / Confidential / Restricted.",
        "The <b>data owner</b> classifies; protection requirements follow the label.",
        "Classify by <b>sensitivity</b> (confidentiality impact) and <b>criticality</b> (availability impact on the business).",
        "Reclassify over time; define handling, retention and secure disposal per level."
      ],
      tip: "The PRIMARY purpose of classification is to apply <b>protection proportional to value/risk</b> — over-protecting wastes money.",
      cissp: "D2 Asset Security" },
    { id: "3A-3", title: "Enterprise & information security architecture",
      new: true,
      summary: "How business processes, data, applications and technology fit together — and building security into that design from the start.",
      points: [
        "<b>Enterprise architecture (EA)</b>: the blueprint of business, data, application and technology layers (e.g. TOGAF, Zachman).",
        "<b>Security architecture</b>: how security controls are structured across that blueprint (e.g. SABSA, which is business-driven).",
        "<b>Security by design</b>: involve security early in projects; it costs far less than retrofitting.",
        "<b>Zero trust</b>: never trust by network location; verify identity, device and context for every request.",
        "Defence in depth, segmentation, least privilege and secure cloud reference architectures are recurring patterns.",
        "The security architecture must <b>align with the EA and business strategy</b>."
      ],
      tip: "New in the 2026 outline. Expect manager-level questions: the BEST time to add security to a new system is <b>during design/requirements</b>.",
      cissp: "D3 Architecture & Engineering (much deeper)" },
    { id: "3A-4", title: "Standards & frameworks for the program",
      summary: "Using industry standards to design and benchmark the security program.",
      points: [
        "ISO 27001/27002, NIST CSF & SP 800-53, CIS Controls, COBIT, PCI DSS.",
        "Benchmarking against a framework shows gaps and maturity.",
        "Frameworks should be tailored to risk, size and industry."
      ],
      tip: "A framework is a means, not the goal — the goal is managing risk to an acceptable level.",
      cissp: "D1" },
    { id: "3A-5", title: "Policies, standards, procedures & guidelines",
      summary: "The documents that turn strategy into rules people follow.",
      points: [
        "<b>Policy</b>: high-level statement of intent from management (what and why). Mandatory.",
        "<b>Standard</b>: specific mandatory requirement (e.g. AES-256, 12-character passwords).",
        "<b>Procedure</b>: step-by-step instructions (how).",
        "<b>Guideline</b>: recommended practice, not mandatory.",
        "Policies need management approval, regular review and an <b>exception process</b> with risk acceptance."
      ],
      tip: "Policies should be stable; detailed technical rules belong in standards so policies don't need constant rewrites.",
      cissp: "D1" },
    { id: "3A-6", title: "Program metrics",
      summary: "Measuring whether security is working and showing value.",
      points: [
        "Good metrics are <b>meaningful to the audience, accurate, timely, cost-effective and actionable</b>.",
        "Operational metrics (patch rates, phishing click rates) for managers; risk and value metrics for the board.",
        "KGI = goal achieved? KPI = process performing? KRI = risk rising?",
        "Metrics must link to strategy objectives — otherwise they are just numbers."
      ],
      tip: "The BEST metric for senior management shows <b>business risk and alignment</b>, not technical counts.",
      cissp: "D6 (KPIs/KRIs)" }
  ]},
  { id: "3B", name: "Program Management", topics: [
    { id: "3B-1", title: "Control design & selection",
      summary: "Choosing the right controls for the risk.",
      points: [
        "By function: <b>preventive</b> (MFA, firewall), <b>detective</b> (logs, SIEM), <b>corrective</b> (restore from backup), <b>deterrent</b>, <b>compensating</b> (alternative when the primary control isn't feasible).",
        "By type: administrative/managerial, technical/logical, physical.",
        "Selection is based on risk assessment, cost-benefit, and fit with business processes.",
        "Prefer controls that are automated and built in over manual ones."
      ],
      tip: "A compensating control is accepted when it reduces risk to an acceptable level and is documented and approved.",
      cissp: "D1 + D3" },
    { id: "3B-2", title: "Control implementation & integration",
      summary: "Putting controls in place so they fit with how the business works.",
      points: [
        "Integrate security into SDLC, change management, procurement and project management.",
        "Controls that block business get bypassed — usability matters.",
        "Use change management for every control change; test before production.",
        "Infrastructure-as-code and cloud guardrails help apply controls consistently."
      ],
      tip: "Embedding security into <b>existing business processes</b> beats running it as a separate activity.",
      cissp: "D7 + D8" },
    { id: "3B-3", title: "Control testing & evaluation",
      summary: "Checking that controls are designed correctly and actually work.",
      points: [
        "<b>Design effectiveness</b>: would it work if operated? <b>Operating effectiveness</b>: does it work consistently?",
        "Methods: audits, control self-assessments, vulnerability scans, pen tests, red teaming, continuous control monitoring.",
        "Independent testing (internal audit, third parties) adds credibility.",
        "Failed controls are tracked as findings with owners and deadlines."
      ],
      tip: "The security manager <b>uses</b> audit results; internal audit should stay independent from the function it audits.",
      cissp: "D6 Assessment & Testing" },
    { id: "3B-4", title: "Awareness & training",
      summary: "Teaching people to recognise threats and behave securely.",
      points: [
        "Role-based: general staff, developers, executives, privileged admins all need different content.",
        "Measure behaviour change (phishing simulation results, incident reporting rates), not just attendance.",
        "Start at onboarding; refresh regularly; tie to policy acknowledgement.",
        "Awareness is a key lever for changing culture."
      ],
      tip: "The BEST indicator of an effective awareness program is <b>change in behaviour</b>, e.g. more phishing reports.",
      cissp: "D1" },
    { id: "3B-5", title: "Managing external services & third parties",
      summary: "Making sure vendors, outsourcers and cloud providers protect your data as you would.",
      points: [
        "Due diligence <b>before</b> contracting: security questionnaires, SOC 2 / ISO 27001 reports, financial stability.",
        "Contracts: security requirements, <b>right to audit</b>, breach notification, SLAs, data return/destruction, subcontractor rules.",
        "Cloud <b>shared responsibility</b>: provider secures the cloud; customer secures what it puts in the cloud.",
        "Ongoing monitoring and periodic reassessment, based on vendor risk tier.",
        "Outsourcing transfers work, never accountability."
      ],
      tip: "The BEST time to set security requirements for a vendor is <b>before the contract is signed</b>.",
      cissp: "D1 + D7" },
    { id: "3B-6", title: "Program communications & reporting",
      summary: "Sharing program status with leadership, the board and staff in a way each audience understands.",
      points: [
        "Board: risk posture vs appetite, major incidents, investment decisions.",
        "Management: progress against roadmap, metrics, issues.",
        "Staff: policies, expectations, how to report incidents.",
        "Regular cadence plus escalation for significant events."
      ],
      tip: "Tailor reporting to the audience — the board wants business risk, not firewall statistics.",
      cissp: "D6" }
  ]}
  ]
},
{
  n: 4, key: "d4", name: "Incident Management", short: "Incident Management", weight: 29, prev: 30,
  blurb: "Preparing for incidents (plans, BIA, continuity, testing) and handling them when they happen (detect, contain, communicate, recover, learn).",
  subs: [
  { id: "4A", name: "Incident Management Readiness", topics: [
    { id: "4A-1", title: "Incident response plan (IRP)",
      summary: "The playbook for what to do, who to call and who decides when an incident happens.",
      points: [
        "Contents: scope, definitions, roles (IR team, incident manager), severity levels, escalation, communications, playbooks.",
        "Phases (common model): <b>Prepare → Identify/Detect → Contain → Eradicate → Recover → Lessons learned</b>.",
        "Needs senior management approval and must be kept current with contact lists.",
        "Event = any observable occurrence. Incident = an event that harms or threatens the organisation."
      ],
      tip: "An IRP is only useful if <b>tested and up to date</b>. An untested plan is a common 'GREATEST concern' answer.",
      cissp: "D7 Security Operations" },
    { id: "4A-2", title: "Business impact analysis (BIA)",
      summary: "Finds which business processes matter most and how quickly each must be restored.",
      points: [
        "Identifies critical processes, their dependencies and the impact of downtime over time.",
        "<b>RTO</b>: maximum time to restore a process. <b>RPO</b>: maximum acceptable data loss (point in time).",
        "<b>MTD/MTPD</b>: maximum tolerable downtime before damage is unacceptable. RTO must be ≤ MTD.",
        "<b>SDO</b>: service delivery objective — level of service needed during recovery.",
        "Business process owners provide the input; the BIA drives recovery strategy and spending."
      ],
      tip: "The BIA comes <b>before</b> choosing recovery strategies. Lower RTO/RPO = higher cost.",
      cissp: "D1 (BCP) + D7" },
    { id: "4A-3", title: "Business continuity plan (BCP)",
      summary: "Keeping critical business functions running during a major disruption.",
      points: [
        "Covers people, processes, facilities, suppliers — not just IT.",
        "Includes alternate work arrangements, manual workarounds and crisis management.",
        "Owned by the business; security contributes and ensures security still applies during disruption."
      ],
      tip: "Human safety is always the first priority in any continuity scenario.",
      cissp: "D1 + D7" },
    { id: "4A-4", title: "Disaster recovery plan (DRP)",
      summary: "Restoring IT systems and data after a major failure.",
      points: [
        "<b>Hot site</b>: fully equipped, recovery in hours, most expensive. <b>Warm site</b>: partial equipment, days. <b>Cold site</b>: space and power only, weeks, cheapest.",
        "Others: mirrored/active-active site, mobile site, reciprocal agreement (hard to enforce), cloud DR.",
        "Backups: full, incremental, differential; keep offline/immutable copies against ransomware.",
        "Recovery site choice is driven by RTO/RPO from the BIA."
      ],
      tip: "Match the recovery option to the RTO — a hot site for a 2-hour RTO, not a cold site.",
      cissp: "D7" },
    { id: "4A-5", title: "Incident classification & categorisation",
      summary: "Deciding how serious an incident is so the response matches the impact.",
      points: [
        "Severity based on business impact: data sensitivity, number of users, regulatory exposure, reputational effect.",
        "Defined levels (e.g. P1–P4) trigger different escalation paths and response times.",
        "Clear criteria prevent under-reacting to big incidents and over-reacting to small ones."
      ],
      tip: "Severity is judged by <b>business impact</b>, not by how technically interesting the attack is.",
      cissp: "D7" },
    { id: "4A-6", title: "Training, testing & evaluation of plans",
      summary: "Proving plans work and people know their roles.",
      points: [
        "Test types (least to most disruptive): <b>checklist review → tabletop/walkthrough → simulation → parallel test → full interruption</b>.",
        "Tabletop: talk through a scenario — cheap, great for roles and decisions.",
        "Parallel: recovery site runs alongside production. Full interruption: production is shut down — highest risk.",
        "Update plans after tests, organisational changes and real incidents."
      ],
      tip: "The FIRST test of a new plan is usually a <b>checklist or tabletop</b>, not a full interruption.",
      cissp: "D7" }
  ]},
  { id: "4B", name: "Incident Management Operations", topics: [
    { id: "4B-1", title: "Tools & techniques",
      summary: "The technology used to detect, analyse and respond to incidents.",
      points: [
        "SIEM (log correlation and alerting), EDR/XDR, IDS/IPS, SOAR (automated playbooks), threat intelligence.",
        "Good logging and time synchronisation (NTP) are prerequisites for investigation.",
        "Tools need tuning: too many false positives cause alert fatigue."
      ],
      tip: "Detection capability depends on <b>logging being enabled and reviewed</b> — tools alone don't help.",
      cissp: "D7" },
    { id: "4B-2", title: "Investigation & evaluation",
      summary: "Finding out what happened, how far it spread and how bad it is.",
      points: [
        "Confirm whether it is a real incident, determine scope and root cause.",
        "<b>Preserve evidence</b>: forensic images, logs; maintain <b>chain of custody</b>.",
        "Involve legal early if litigation, law enforcement or regulators may be involved.",
        "Order of volatility: capture memory before disk."
      ],
      tip: "Don't let IT 'clean up' a system before evidence is preserved if legal action is possible.",
      cissp: "D7 (forensics) + D1" },
    { id: "4B-3", title: "Containment",
      summary: "Stopping the incident from spreading or causing more damage.",
      points: [
        "Examples: isolate hosts, disable accounts, block IPs/domains, segment networks.",
        "Short-term containment buys time; long-term containment keeps the business running safely.",
        "Containment decisions balance business impact against further damage."
      ],
      tip: "After confirming an incident, the FIRST priority is usually <b>containment</b> to limit damage.",
      cissp: "D7" },
    { id: "4B-4", title: "Incident response communications",
      summary: "Telling the right people the right things at the right time.",
      points: [
        "Internal: senior management, legal, HR, PR, business owners, per the escalation plan.",
        "External: regulators (often with strict deadlines), customers, law enforcement, insurers, media.",
        "Use pre-approved templates and a single spokesperson; avoid speculation.",
        "Use out-of-band channels if email or chat may be compromised."
      ],
      tip: "External communication should go through <b>designated, authorised people</b> (PR/legal), not the technical team.",
      cissp: "D7" },
    { id: "4B-5", title: "Eradication & recovery",
      summary: "Removing the cause and safely bringing systems back.",
      points: [
        "Eradication: remove malware, close the vulnerability, reset credentials, rebuild from known-good images.",
        "Recovery: restore from clean backups, validate integrity, monitor closely for re-infection.",
        "Business owners confirm systems are working before returning to normal operations."
      ],
      tip: "Restore from backups <b>known to be clean</b>; restoring infected backups restarts the incident.",
      cissp: "D7" },
    { id: "4B-6", title: "Post-incident review",
      summary: "Learning from the incident so it doesn't happen again.",
      points: [
        "Blameless review: what happened, what worked, what didn't, root cause.",
        "Outputs: updated plans, new controls, training, risk register updates.",
        "Track actions to closure; report lessons to management.",
        "Metrics: time to detect, time to contain, time to recover, cost."
      ],
      tip: "The PRIMARY purpose of a post-incident review is to <b>improve the response and prevent recurrence</b>, not to assign blame.",
      cissp: "D7" }
  ]}
  ]
}
];

// "Think like a manager" — cross-domain decision rules for CISM questions.
window.CISM_MINDSET = [
  ["Business first", "Security exists to support business objectives. Pick the answer that aligns with the business."],
  ["Risk-based", "Assess the risk before acting. 'Perform a risk assessment' is often the FIRST step."],
  ["Owners decide", "Business/data owners accept risk and decide; the security manager advises and facilitates."],
  ["Senior management support", "Lasting change needs leadership commitment. It is often the MOST important success factor."],
  ["Policy before tools", "Governance, policy and requirements come before buying or configuring technology."],
  ["Manager, not technician", "Choose the answer a CISO would give: coordinate, escalate, report, plan. Avoid hands-on fixes."],
  ["People safety first", "In any incident or disaster, human life and safety come first."],
  ["Accountability stays", "You can transfer or outsource risk and work, but never accountability."],
  ["Prevent > detect > correct", "When all else is equal, prefer preventive controls built into processes."],
  ["Read the qualifier", "MOST, BEST, FIRST, PRIMARY — several answers may be true; pick the one that fits the qualifier."]
];
