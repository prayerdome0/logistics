export const site = {
  brand: "SWDL",
  legal: "Seedwel Investment Limited",
  tagline: "Global freight. Local precision.",
  email: "xxxxx",
  phone: "xxxxx",
  address: "abc",
  salePrice: "Available on request",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/tracking", label: "Tracking" },
  { href: "/for-sale", label: "For Sale" },
  { href: "/contact", label: "Contact" },
];

export const unsplash = {
  containers:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=80",
  highway:
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=80",
  forklift:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
  ship:
    "https://images.unsplash.com/photo-1494412574643-ff11af0c31dd?auto=format&fit=crop&w=1800&q=80",
  plane:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=80",
  boxes:
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=80",
  dock:
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1800&q=80",
  nightTruck:
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1800&q=80",
  map:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80",
  crane:
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
  pallet:
    "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1600&q=80",
  cityVan:
    "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=1600&q=80",
  workers:
    "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1600&q=80",
  cargoHold:
    "https://images.unsplash.com/photo-1544620341-11cb2cd7c626?auto=format&fit=crop&w=1600&q=80",
};

export const heroSlides = [
  {
    src: "/images/hero-fleet.jpg",
    kicker: "Road network",
    title: "A fleet built for the last mile and the long haul.",
    copy: "Dedicated linehaul, regional distribution and timed city deliveries under one SWDL contract.",
  },
  {
    src: "/images/hero-port.jpg",
    kicker: "Ocean freight",
    title: "Port-to-door ocean programmes that actually keep schedule.",
    copy: "FCL, LCL and project cargo with bonded yards and live berth visibility.",
  },
  {
    src: "/images/hero-air.jpg",
    kicker: "Air cargo",
    title: "Priority air when the window is measured in hours.",
    copy: "Charter, consolidation and next-flight-out for high-value and perishable freight.",
  },
  {
    src: "/images/warehouse.jpg",
    kicker: "Fulfilment",
    title: "Warehouses that pick, pack and ship as if they were yours.",
    copy: "Bonded, ambient and cold-chain nodes with WMS inventory you can audit in real time.",
  },
];

export const galleryStrip = [
  { src: "/images/hero-fleet.jpg", label: "Linehaul fleet" },
  { src: "/images/hero-port.jpg", label: "Deep-water ports" },
  { src: "/images/hero-air.jpg", label: "Air cargo" },
  { src: "/images/warehouse.jpg", label: "Fulfilment" },
  { src: "/images/lastmile.jpg", label: "Last mile" },
  { src: "/images/rail.jpg", label: "Rail corridors" },
  { src: "/images/customs.jpg", label: "Customs" },
  { src: "/images/control-room.jpg", label: "Control tower" },
  { src: unsplash.containers, label: "Containers" },
  { src: unsplash.highway, label: "Highway" },
  { src: unsplash.forklift, label: "Yard ops" },
  { src: unsplash.ship, label: "Ocean" },
];

export const services = [
  {
    slug: "ocean",
    title: "Ocean freight",
    image: "/images/hero-port.jpg",
    blurb: "FCL, LCL, break-bulk and project cargo with nominated carriers and port agency.",
  },
  {
    slug: "air",
    title: "Air cargo",
    image: "/images/hero-air.jpg",
    blurb: "Airport-to-airport and door-to-door, including dangerous goods and temperature control.",
  },
  {
    slug: "road",
    title: "Road & last mile",
    image: "/images/lastmile.jpg",
    blurb: "FTL, LTL, milk runs and timed urban deliveries with proof of delivery.",
  },
  {
    slug: "rail",
    title: "Rail corridors",
    image: "/images/rail.jpg",
    blurb: "Intermodal block trains that cut cost and carbon on long inland hauls.",
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    image: "/images/warehouse.jpg",
    blurb: "Cross-dock, storage, kitting, returns and e-commerce fulfilment.",
  },
  {
    slug: "customs",
    title: "Customs & compliance",
    image: "/images/customs.jpg",
    blurb: "Brokerage, bonded cargo, HS classification and trade documentation.",
  },
];
