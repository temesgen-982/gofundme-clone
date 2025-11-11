import Link from "next/link";
import { FlipVertical, Bird, TvMinimalPlay } from "lucide-react"; // Social icons

export function MainFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "About Us",
      links: [
        { name: "Our Mission", href: "/mission" },
        { name: "How it Works", href: "/how-it-works" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Trust & Safety", href: "/safety" },
        { name: "Refund Policy", href: "/refund" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Fundraising Tips", href: "/tips" },
        { name: "Success Stories", href: "/stories" },
        { name: "Partners", href: "/partners" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Info & Social Media */}
        <div className="col-span-1 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <span className="font-bold text-2xl text-gofundmeBlue">FundSphere</span>
          </Link>
          <p className="text-sm max-w-sm mb-6">
            Connecting generosity with those in need. Support causes you care about.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <FlipVertical className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <Bird className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <Bird className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-white transition-colors">
              <TvMinimalPlay className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright Section */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        &copy; {currentYear} FundSphere. All rights reserved.
      </div>
    </footer>
  );
}
