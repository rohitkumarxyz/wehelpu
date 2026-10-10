export const site = {
  name: "WeHelpU",
  domain: "wehelpu.in",
  url: "https://wehelpu.in",
  email: "rs326989@gmail.com",
  phone: "+91 88606 65226",
  phoneRaw: "918860665226",
  location: "India",
  hours: "Monday to Saturday, 10:00 AM to 7:00 PM IST",
  policyUpdated: "10 October 2026",
  copyrightYear: 2026,
  tagline: "AI and automation for small businesses",
};

export const whatsappLink = (text = "Hi WeHelpU, I'd like to discuss a project.") =>
  `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const policyNav = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund & Cancellation" },
  { href: "/shipping-policy", label: "Shipping & Delivery" },
];
