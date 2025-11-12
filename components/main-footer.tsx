import Link from "next/link";
import { SiYoutube, SiX, SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";

export function MainFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "About Us",
      links: [
        { name: "Our Mission", href: "/" },
        { name: "How it Works", href: "/" },
        { name: "Careers", href: "/" },
        { name: "Press", href: "/" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Fundraising Tips", href: "/" },
        { name: "Success Stories", href: "/" },
        { name: "Partners", href: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Help Center", href: "/" },
        { name: "Terms of Service", href: "/" },
        { name: "Privacy Policy", href: "/" },
        { name: "Cookie Policy", href: "/" },
      ],
    },
  ];

  return (
    <footer className="w-full py-12 border-t border-gray-400">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              <SiFacebook size={24} />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <SiX size={24} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <SiInstagram size={24} />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-white transition-colors">
              <SiYoutube size={24} />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
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
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
        &copy; {currentYear} FundSphere. All rights reserved.
      </div>
    </footer>
  );
}
