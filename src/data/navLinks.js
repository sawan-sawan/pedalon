export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Road Bikes", href: "/services/road-bikes" },
      { name: "Mountain Bikes", href: "/services/mountain-bikes" },
      { name: "Cycling Gears", href: "/services/cycling-gears" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];
