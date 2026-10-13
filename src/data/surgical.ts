import { SurgicalProduct } from '../types';

export const SURGICAL_PRODUCTS: SurgicalProduct[] = [
  {
    id: 'surg-scissors',
    title: 'Surgical Operating & Dissecting Scissors',
    category: 'Cutting & Dissection',
    material: 'AISI 420 Martensitic Stainless Steel / Tungsten Carbide (TC) Inserts',
    finish: 'Satin Anti-Glare Finish with Gold-Plated Rings for TC identification',
    autoclavable: 'Fully Autoclavable at 134°C / 273°F (Steam & Dry Heat)',
    certifications: ['ISO 13485:2016', 'CE Mark (MDR 2017/745 Class I)', 'FDA Device Listed'],
    packagingBadge: 'Export Blister Packing / Individual Medical Pouch',
    hsCode: '9018.90.00',
    moq: '50 Pieces per SKU (OEM Branding Available)',
    hardness: 'Rockwell HRC 54–56 (Cutting Edges) / HRC 44–46 (Body)',
    description: 'Precision hand-crafted surgical scissors including Metzenbaum, Mayo straight & curved, Iris fine dissection, and TC gold-handle supercut models. Ground with micro-serrated and razor-sharp beveled edges for clean, drag-free tissue resection.',
    technicalSpecs: [
      { label: 'Available Patterns', value: 'Metzenbaum (14cm–23cm), Mayo (14cm–17cm), Iris (11.5cm), Stevens Tenotomy' },
      { label: 'Steel Standard', value: 'DIN 1.4021 / ASTM F899 Surgical Grade Stainless Steel' },
      { label: 'Passivation Testing', value: '100% ASTM A967 Citric/Nitric Passivated (Zero Corrosion)' },
      { label: 'Blade Geometry', value: 'Curved / Straight with tungsten carbide welded inserts' }
    ],
    packagingOptions: [
      'Individually sealed in medical grade Tyvek peel pouches',
      'Protective silicone blade tip guard with barcode tracking',
      'Master export carton: 50 pcs per inner box / 500 pcs outer carton'
    ],
    // IMAGE SOURCE: High-resolution studio photograph of precision tungsten-carbide surgical scissors
    imageUrl: '/images/surgical_scissors.jpg',
    imageSourceComment: 'Local high-res commercial studio photography: /images/surgical_scissors.jpg (Tungsten Carbide surgical dissecting scissors with gold handles)'
  },
  {
    id: 'surg-hemostatic-forceps',
    title: 'Hemostatic Forceps & Artery Clamps',
    category: 'Hemostasis & Clamping',
    material: 'AISI 420 / 410 Surgical Stainless Steel',
    finish: 'Satin Matte (Prevents surgical theatre glare)',
    autoclavable: 'Autoclavable at 134°C / 273°F (Compatible with EO Gas & Plasma)',
    certifications: ['ISO 13485:2016', 'CE Marking Class I', 'cGMPS Certified'],
    packagingBadge: 'Individual Medical Pouch / OEM Blister Pack',
    hsCode: '9018.90.00',
    moq: '100 Pieces (Bulk Hospital & Distributor Packs)',
    hardness: 'Rockwell HRC 46–48 (Flexibility with non-deforming ratchet)',
    description: 'Multi-position interlocking ratchet artery clamps designed for reliable vessel occlusion and delicate tissue grasp. Features Halsted Mosquito (12.5cm), Kelly straight/curved (14cm), Crile, and Rochester-Pean configurations with ultra-fine cross-serrations.',
    technicalSpecs: [
      { label: 'Ratchet Design', value: '3-to-4 stage positive lock ratchet with smooth finger release' },
      { label: 'Serration Pitch', value: 'Precision transverse milling to prevent vascular slippage' },
      { label: 'Jaw Profiles', value: 'Full serration (Crile) / Half serration (Kelly) / Micro-tip (Mosquito)' },
      { label: 'Ultrasonic Decontamination', value: 'Pre-cleaned and degreased to ISO 11737 bioburden standards' }
    ],
    packagingOptions: [
      'Sterile peelable EO pouch or bulk non-sterile hospital supply',
      'Corrugated B2B shipping carton with anti-corrosion VCI paper lining',
      'Custom laser etching of hospital initials / batch UID numbers'
    ],
    // IMAGE SOURCE: Studio photograph of medical-grade hemostatic clamps and Kelly forceps
    imageUrl: '/images/surgical_forceps.jpg',
    imageSourceComment: 'Local high-res commercial studio photography: /images/surgical_forceps.jpg (Triple configuration straight and curved Kelly & Mosquito forceps)'
  },
  {
    id: 'surg-scalpel-handles',
    title: 'Precision Scalpel Handles & Safety Blade Ejectors',
    category: 'Incision & Excision',
    material: 'AISI 316L / AISI 304 Austenitic Surgical Stainless Steel',
    finish: 'Anti-Slip Cross-Hatched Satin Finish',
    autoclavable: 'Autoclavable at 134°C / Thermal Washer-Disinfector Safe',
    certifications: ['ISO 13485:2016', 'CE Mark (MDR compliant)', 'ISO 7153-1'],
    packagingBadge: 'Custom Velvet Box / Export Blister Packing',
    hsCode: '9018.90.00',
    moq: '100 Pieces',
    hardness: 'Rockwell HRC 40–44 (High tensile ductility)',
    description: 'Ergonomic surgical scalpel handles engineered with micrometric blade mount fitting for #10 through #25 surgical blades. Includes standard No. 3, No. 4, No. 7 long slim handles, and graduated metric ruler calibrations on handle sides.',
    technicalSpecs: [
      { label: 'Fitting Compatibility', value: 'No. 3 fits blades #10-#15 | No. 4 fits blades #20-#25 | No. 7 slim neck' },
      { label: 'Graduation Scale', value: 'Precision laser-engraved 0-5cm metric measurement on spine' },
      { label: 'Grip Ergonomics', value: 'Fluted knurling and transverse finger ribs for wet grip security' },
      { label: 'Corrosion Resistance', value: 'Boil water test (ISO 13402) passed without surface staining' }
    ],
    packagingOptions: [
      'Rigid plastic blister card with hang tab for retail distribution',
      'Lined velvet presentation instrument box for surgical gift/specialist sets',
      'Bulk 20-unit master cartons with desiccant silica gel packets'
    ],
    // IMAGE SOURCE: Studio photograph of calibrated scalpel handles and fine wound retractors
    imageUrl: '/images/surgical_scalpels.jpg',
    imageSourceComment: 'Local high-res commercial studio photography: /images/surgical_scalpels.jpg (Scalpel handles #3, #4, #7 with Senn retractor hooks)'
  },
  {
    id: 'surg-retractors-specula',
    title: 'Surgical Retractors & Self-Retaining Specula',
    category: 'Exposure & Retraction',
    material: 'AISI 304 / 420 Surgical Stainless Steel',
    finish: 'Dull Satin Electro-Polished (Zero Visual Distortion)',
    autoclavable: 'Autoclavable at 134°C (Resistant to heavy chemical disinfection)',
    certifications: ['ISO 13485:2016', 'CE Certified Class I', 'FDA Listed'],
    packagingBadge: 'Heavy Duty Autoclave Cassette / Export Carton',
    hsCode: '9018.90.00',
    moq: '25 Sets or 50 Individual Units',
    hardness: 'Rockwell HRC 42–46',
    description: 'Comprehensive retraction systems for general, abdominal, and plastic surgery. Includes handheld Langenbeck, Senn-Miller double-ended prongs, Volkman bone hooks, and self-retaining Weitlaner and Balfour retractors with adjustable side-blades.',
    technicalSpecs: [
      { label: 'Retractor Models', value: 'Senn-Miller (3 sharp/blunt prongs), Langenbeck, Weitlaner 3x4, Balfour 180mm' },
      { label: 'Atraumatic Edges', value: 'Deburred chamfered edges to eliminate tissue laceration risks' },
      { label: 'Locking Mechanism', value: 'Smooth ratchet cam-lock on self-retaining retractors' },
      { label: 'Weight Balance', value: 'Center-balanced shafts for surgeon comfort during prolonged procedures' }
    ],
    packagingOptions: [
      'Perforated stainless steel sterilization tray with silicone dividers',
      'Individual heavy-duty vinyl storage sleeve',
      'Export multi-ply corrugated box with shock-absorbing foam inserts'
    ],
    // IMAGE SOURCE: Studio layout of surgical retractors and scalpel handles
    imageUrl: '/images/surgical_scalpels.jpg',
    imageSourceComment: 'Local high-res commercial studio photography: /images/surgical_scalpels.jpg (Precision wound retractors and scalpel components)'
  },
  {
    id: 'surg-tc-needle-holders',
    title: 'Tungsten Carbide (TC) Needle Holders',
    category: 'Suturing & Wound Closure',
    material: 'AISI 420 Stainless Steel with Sintered Tungsten Carbide Jaws',
    finish: 'Mirror/Satin Body with 24K Gold-Plated Handle Rings',
    autoclavable: 'Autoclavable at 134°C / Chemiclave Compatible',
    certifications: ['ISO 13485:2016', 'CE Mark MDR 2017/745', 'ISO 7153-1'],
    packagingBadge: 'Custom Velvet Box / Individual Medical Pouch',
    hsCode: '9018.90.00',
    moq: '30 Pieces',
    hardness: 'Rockwell HRC 70+ on TC Jaw Pyramid Inlays (Maximum Grip)',
    description: 'Gold-standard surgical needle holders featuring micro-serrated tungsten carbide inserts permanently brazed to the jaws. Prevents needle twisting and slippage during delicate microsurgical, ophthalmic, and general wound closures.',
    technicalSpecs: [
      { label: 'Common Patterns', value: 'Mayo-Hegar (14cm–20cm), Olsen-Hegar (Scissor Combo), Castroviejo Micro' },
      { label: 'TC Serration Pitch', value: '0.4mm pitch for 4-0 to 6-0 sutures / 0.5mm pitch for general 2-0 to 3-0' },
      { label: 'Hinge Construction', value: 'Box joint with hand-adjusted tension for frictionless actuation' },
      { label: 'Jaw Durability', value: 'Over 10,000 suture cycles without tooth stripping' }
    ],
    packagingOptions: [
      'Custom plush velvet-lined presentation case with gold foil brand imprint',
      'Heat-sealed medical Tyvek blister with sterilization indicator dot',
      'Barcoded inner boxes of 10 units for hospital inventory automation'
    ],
    // IMAGE SOURCE: Studio photograph of gold-handled TC needle holders and micro forceps
    imageUrl: '/images/surgical_needle_holders.jpg',
    imageSourceComment: 'Local high-res commercial studio photography: /images/surgical_needle_holders.jpg (Mayo-Hegar and Castroviejo TC needle holders with Adson forceps)'
  },
  {
    id: 'surg-tissue-tweezers',
    title: 'Tissue & Dressing Forceps / Precision Tweezers',
    category: 'Tissue Grasping & Handling',
    material: 'AISI 316L / AISI 410 Surgical Grade Stainless Steel',
    finish: 'Satin Non-Reflective Finish with Ribbed Thumb Pads',
    autoclavable: 'Autoclavable at 134°C / 273°F',
    certifications: ['ISO 13485:2016', 'CE Certified', 'ASTM F899'],
    packagingBadge: 'Individual Medical Pouch / Blister Packaging',
    hsCode: '9018.90.00',
    moq: '100 Pieces',
    hardness: 'Rockwell HRC 44–48',
    description: 'High-tactility thumb forceps designed for anatomical exploration and tissue manipulation. Available in Adson 1x2 mouse-teeth, Adson micro-delicate, DeBakey atraumatic vascular serrated, and standard dressing forceps.',
    technicalSpecs: [
      { label: 'Tip Configurations', value: '1x2 Mouse Teeth, Plain Serrated, Fenestrated, DeBakey Ribbed' },
      { label: 'Spring Action', value: 'Consistent calibrated leaf spring tension to prevent operator fatigue' },
      { label: 'Tip Alignment', value: '100% optical inspection for microscopic 0.05mm tip alignment' },
      { label: 'Length Options', value: '12cm (Micro), 15cm, 18cm, 20cm, 25cm Long Deep Cavity' }
    ],
    packagingOptions: [
      'Medical pouch with transparent front and batch sterilization strip',
      'Heavy-duty plastic protective cap on precision tips',
      'Export master cartons with internal cushioning'
    ],
    // IMAGE SOURCE: Studio photo showing fine forceps and needle drivers
    imageUrl: '/images/surgical_needle_holders.jpg',
    imageSourceComment: 'Local high-res commercial studio photography: /images/surgical_needle_holders.jpg (Micro-Adson forceps and fine surgical tweezers)'
  },
  {
    id: 'surg-diagnostic-ent-sets',
    title: 'Diagnostic & ENT Examination Instruments',
    category: 'Diagnostic & ENT Surgery',
    material: 'AISI 304 / Chrome-Plated Brass & Surgical Stainless Steel',
    finish: 'High-Polish Mirror & Satin Chrome Finish',
    autoclavable: 'All stainless steel components Autoclavable at 134°C',
    certifications: ['ISO 13485:2016', 'CE Mark (Directive 93/42/EEC)', 'IEC 60601 Compliant'],
    packagingBadge: 'Custom Velvet Box / Hard-Shell Protective Case',
    hsCode: '9018.19.00',
    moq: '25 Complete Sets',
    hardness: 'HRC 42–45',
    description: 'Complete clinical diagnostic solutions including fiber-optic LED otoscopes, ophthalmoscopes, Hartmann medical tuning forks (C128, C256, C512 Hz), laryngeal mirrors, nasal specula, and ear dressing forceps.',
    technicalSpecs: [
      { label: 'Illumination', value: 'High CRI 95+ cool LED / halogen illumination with fiber optics' },
      { label: 'Specula Sizes', value: 'Includes reusable 2.5mm, 3.0mm, 4.0mm, 5.0mm autoclavable ear specula' },
      { label: 'Tuning Fork Alloy', value: 'Medical-grade aluminum alloy / stainless steel with exact pitch tuning' },
      { label: 'Storage', value: 'Impact-resistant hard storage case with custom molded EVA foam' }
    ],
    packagingOptions: [
      'Luxury leatherette / velvet hard presentation case with magnetic latch',
      'Drop-tested outer export carton compliant with ISTA-1A standards',
      'Multilingual instruction manual and calibration certificate included'
    ],
    // IMAGE SOURCE: Studio photograph of sterile surgical equipment and diagnostic instruments
    imageUrl: '/images/surgical_hero_banner.jpg',
    imageSourceComment: 'Local high-res commercial photography: /images/surgical_hero_banner.jpg (Surgical diagnostic and theater instruments on sterile field)'
  },
  {
    id: 'surg-dental-instruments',
    title: 'Dental Extraction & Periodontal Surgical Instruments',
    category: 'Dental & Oral Surgery',
    material: 'French / Japanese AISI 420 High-Carbon Stainless Steel',
    finish: 'Mirror Polish / Satin Dual-Tone with knurled non-slip handles',
    autoclavable: 'Autoclavable at 134°C / Ultrasonic Cleaner Compatible',
    certifications: ['ISO 13485:2016', 'CE Marked (MDR)', 'FDA Dental Device #872.4840'],
    packagingBadge: 'Heavy Duty Autoclave Cassette / Custom Velvet Box',
    hsCode: '9018.49.00',
    moq: '50 Sets or 100 Individual Pieces',
    hardness: 'Rockwell HRC 52–54 (High torque resistance on beak tips)',
    description: 'Comprehensive dental surgery instrumentation covering English & American pattern tooth extraction forceps, Coupland/Cryer luxating elevators, sickle scalers, gracey curettes, and root tip picks engineered for atraumatic exodontia.',
    technicalSpecs: [
      { label: 'Forceps Patterns', value: 'Upper/Lower incisors, premolars, molars, and wisdom teeth (Fig 1 to Fig 86)' },
      { label: 'Elevator Edges', value: 'Hand-honed micro-beveled tips for effortless periodontal ligament severance' },
      { label: 'Handle Grip', value: 'Hollow lightweight ergonomic handles (10mm dia) for tactile feedback' },
      { label: 'Hinge Joint', value: 'Teflon-bushing smooth action hinges that never seize during autoclave cycles' }
    ],
    packagingOptions: [
      'Stainless steel wire mesh sterilization cassette with silicone clips (5/10/20 instrument capacity)',
      'Individual sealed medical grade pouch with transparent window',
      'Rigid export shipper with moisture desiccant'
    ],
    // IMAGE SOURCE: Studio photograph of dental and orthopedic surgery instruments in wire sterilization basket
    imageUrl: '/images/surgical_ortho_dental.jpg',
    imageSourceComment: 'Local high-res commercial studio photography: /images/surgical_ortho_dental.jpg (Dental extraction forceps, root elevators, and orthopedic bone instruments in autoclave wire basket)'
  },
  {
    id: 'surg-orthopedic-instruments',
    title: 'Orthopedic Bone Surgery Instruments & Rongeurs',
    category: 'Orthopedic & Trauma Surgery',
    material: 'AISI 440C Premium Surgical Alloy & Custom Forged Tool Steel',
    finish: 'Heavy-Duty Satin Matte with Electropolished Beaks',
    autoclavable: 'Autoclavable at 134°C / 273°F (Steam Sterilizer Cycle)',
    certifications: ['ISO 13485:2016', 'CE Mark (Class IIa compliant)', 'ASTM F899'],
    packagingBadge: 'Heavy Duty Autoclave Cassette / Export Foam Crate',
    hsCode: '9018.90.00',
    moq: '20 Pieces or 10 Surgical Set Trays',
    hardness: 'Rockwell HRC 56–58 (Heavy bone cutting resilience)',
    description: 'High-leverage orthopedic instruments for bone excision, contouring, and osteosynthesis. Features Ruskin & Stille-Luer double-action bone rongeurs, Liston bone cutting forceps, bone holding Verbrugge clamps, Lambotte osteotomes, and surgical mallets.',
    technicalSpecs: [
      { label: 'Mechanical Advantage', value: 'Double-action compounding hinges multiply hand grip force by 3.5x' },
      { label: 'Spring System', value: 'Heavy-gauge replaceable stainless leaf springs for rapid cycle return' },
      { label: 'Bite Capacities', value: '2mm to 8mm cup rongeurs for spinal and extremities surgery' },
      { label: 'Passivation Testing', value: 'Boil test & copper sulfate test passed per ISO 13402' }
    ],
    packagingOptions: [
      'Heavy-gauge anodized aluminum or stainless wire mesh DIN sterilization basket',
      'Custom pre-cut foam lined export wooden / hard-shell case',
      'Batch-serialized with laser etched UDI (Unique Device Identifier) code'
    ],
    // IMAGE SOURCE: Studio photograph of bone rongeurs, bone cutters and dental extraction instruments in wire tray
    imageUrl: '/images/surgical_ortho_dental.jpg',
    imageSourceComment: 'Local high-res commercial studio photography: /images/surgical_ortho_dental.jpg (Heavy-duty bone rongeurs, double-action forceps and osteotomes in surgical sterilization basket)'
  },
  {
    id: 'surg-microsurgery-cardio',
    title: 'Cardiovascular & Microsurgery Micro-Instruments',
    category: 'Microsurgery & Cardiovascular',
    material: 'Grade 5 Medical Titanium (Ti-6Al-4V) / AISI 420 High-Spec Steel',
    finish: 'Anodized Non-Reflective Royal Blue / Satin Matte',
    autoclavable: 'Autoclavable at 134°C / 273°F (Plasma & Flash Sterilization Safe)',
    certifications: ['ISO 13485:2016', 'CE Mark MDR 2017/745', 'ISO 7153-1'],
    packagingBadge: 'Custom Velvet Box / Precision Silicone Bed Tray',
    hsCode: '9018.90.00',
    moq: '20 Pieces (High-Value Specialized Instruments)',
    hardness: 'Ultra-lightweight high modulus titanium alloy (Zero Magnetic Interference)',
    description: 'Ultra-delicate micro instruments designed for operating under 10x-40x surgical microscopes. Includes Castroviejo micro scissors (straight & curved spring action), jeweler tweezers, titanium DeBakey micro vascular clamps, and adventitia scissors.',
    technicalSpecs: [
      { label: 'Tip Precision', value: 'Micro-ground tips measuring down to 0.15mm thickness' },
      { label: 'Titanium Advantage', value: '45% lighter than stainless steel, 100% non-magnetic and MRI-safe' },
      { label: 'Spring Hinge', value: 'Precision feather-touch flat spring prevents surgeon tremor fatigue' },
      { label: 'Vascular Atrauma', value: 'Calibrated closing pressure (0.25N) to prevent vascular endothelial crush' }
    ],
    packagingOptions: [
      'Deluxe lockable case with shock-absorbent silicone finger matting',
      'Clear acrylic protective sleeves over micro-blades',
      'Factory Certificate of Conformance (CoC) and Material Test Report (MTR)'
    ],
    // IMAGE SOURCE: Studio photograph of micro needle drivers, spring scissors and fine forceps
    imageUrl: '/images/surgical_needle_holders.jpg',
    imageSourceComment: 'Local high-res commercial studio photography: /images/surgical_needle_holders.jpg (Spring-action microsurgical Castroviejo instruments and micro forceps)'
  }
];

export const SURGICAL_CERTIFICATIONS = [
  {
    code: 'ISO 13485:2016',
    title: 'Medical Devices — Quality Management Systems',
    authority: 'TÜV Rheinland / Lloyd’s Register Certified',
    description: 'Comprehensive quality management across all design, forging, CNC machining, manual filing, heat treatment, ultrasonic cleaning, and cleanroom packaging stages.',
    badge: 'Core Medical Standard',
    icon: 'fa-solid fa-certificate'
  },
  {
    code: 'CE Marking (MDR 2017/745)',
    title: 'European Medical Device Regulation Compliance',
    authority: 'EU Notified Body Audited',
    description: 'Fully compliant with Class I & Class IIa reusable surgical instruments. Complete Technical Documentation, Clinical Evaluation Reports, and Declaration of Conformity available.',
    badge: 'EU Hospital Clearance',
    icon: 'fa-solid fa-shield-halved'
  },
  {
    code: 'ASTM F899 & ISO 7153-1',
    title: 'Standard Specification for Wrought Stainless Steels for Surgical Instruments',
    authority: 'Independent Metallurgical Lab Verified',
    description: 'Strict chemical composition verification for AISI 410, 420A/B/C, 440C, and 316L grades. Verified carbon, chromium, and molybdenum ratios guarantee zero pit corrosion.',
    badge: 'Material Authenticity',
    icon: 'fa-solid fa-microscope'
  },
  {
    code: 'ASTM A967 & ISO 13402',
    title: 'Chemical Passivation & Corrosion Resistance Testing',
    authority: '100% Batch Tested',
    description: 'Every production batch undergoes 30-minute boiling water tests and copper sulfate immersion tests to guarantee impervious chromium-oxide passive layers.',
    badge: 'Zero Corrosion Guarantee',
    icon: 'fa-solid fa-vial-circle-check'
  }
];

export const SURGICAL_QUALITY_STEPS = [
  {
    step: '01',
    title: 'Raw Material Metallurgical Audit',
    desc: 'Spectrometric analysis of imported Japanese (SUS420J2) and German (1.4021) stainless steel billets. Strict verification of hardness and alloy ratios before forging begins.',
    icon: 'fa-solid fa-cubes-stacked'
  },
  {
    step: '02',
    title: 'Precision Drop Forging & CNC Milling',
    desc: 'Closed-die hot forging aligns grain flow for supreme structural strength. 5-axis CNC machining centers mill box-joints, ratchets, and blade curvature to micron-level tolerances.',
    icon: 'fa-solid fa-gears'
  },
  {
    step: '03',
    title: 'Vacuum Heat Treatment & Hardening',
    desc: 'Computerized vacuum quenching and multi-stage tempering cycles achieve Rockwell HRC 48-56 depending on instrument cutting versus clamping requirements.',
    icon: 'fa-solid fa-fire-burner'
  },
  {
    step: '04',
    title: 'Master Craftsman Filing & Setting',
    desc: 'Experienced surgical artisans hand-hone scissors blades, hand-fit box joints, and balance needle holders to ensure seamless glide and smooth ratchet snap.',
    icon: 'fa-solid fa-hands'
  },
  {
    step: '05',
    title: 'Ultrasonic Degreasing & Passivation',
    desc: 'Multi-chamber ultrasonic baths eliminate residual grinding oils. Nitric and citric acid passivation baths form a non-reactive chromium oxide armor against corrosion.',
    icon: 'fa-solid fa-soap'
  },
  {
    step: '06',
    title: '100% Q.A. Inspection & Laser UDI Marking',
    desc: 'Every piece is optically inspected for burrs, checked for ratchet alignment, autoclave tested, and laser-marked with CE symbols, lot numbers, and GS1 2D DataMatrix barcodes.',
    icon: 'fa-solid fa-barcode'
  }
];
