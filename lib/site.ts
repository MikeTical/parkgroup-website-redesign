export const siteConfig = {
  name: 'Park Group of Companies',
  shortName: 'Park Group',
  url: 'https://www.parkgroupofcompanies.com',
  phone: '905-572-7275',
  phoneDisplay: '(905) 572-PARK (7275)',
  email: 'contact@parkgroupofcompanies.com',
  address: {
    streetAddress: '101 Valley Road',
    addressLocality: 'Dundas',
    addressRegion: 'ON',
    postalCode: 'L9H 5S4',
    addressCountry: 'CA'
  },
  serviceAreas: ['Hamilton', 'Dundas', 'Ancaster', 'Burlington', 'Stoney Creek', 'Binbrook'],
  primaryServices: [
    { label: 'HVAC installation and repair', href: '/services/hvac' },
    { label: 'Air conditioning service', href: '/services/hvac' },
    { label: 'Heating service', href: '/services/hvac' },
    { label: 'Gas fitting', href: '/services/gas' },
    { label: 'Commercial mechanical service', href: '/services/commercial' },
    { label: 'Radiant heating solutions', href: '/services/commercial' }
  ],
  // LinkedIn pending a confirmed company page URL from the client.
  social: {
    facebook: 'https://www.facebook.com/share/1B1SgaQ3So/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/parkgroupofcompanies?igsh=MTZ5cm13YnY1c3ZnZA==',
    linkedin: '#'
  }
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services/hvac', label: 'HVAC' },
  { href: '/services/gas', label: 'Gas' },
  { href: '/services/residential', label: 'Residential' },
  { href: '/services/commercial', label: 'Commercial' },
];