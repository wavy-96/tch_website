"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/contact-modal";

type ServiceCategoryId = "logo-design" | "website-development" | "ecommerce" | "branding" | "video-animation" | "seo" | "social-media";

const serviceCategories = [
  { id: "logo-design" as ServiceCategoryId, name: "Logo Design", selected: true },
  { id: "website-development" as ServiceCategoryId, name: "Website Development", selected: false },
  { id: "ecommerce" as ServiceCategoryId, name: "E-Commerce Website", selected: false },
  { id: "branding" as ServiceCategoryId, name: "Branding", selected: false },
  { id: "video-animation" as ServiceCategoryId, name: "Video Animation", selected: false },
  { id: "seo" as ServiceCategoryId, name: "Seo", selected: false },
  { id: "social-media" as ServiceCategoryId, name: "Social Media Marketing", selected: false }
];

const servicePackages = {
  "logo-design": [
    {
      id: "gold",
      name: "Gold Logo Package",
      features: [
        "2 Logo Concepts",
        "2 Revisions",
        "Mini Brand Sheet",
        "Primary + Secondary Logo",
        "Favicon + Social Icon",
        "File Bundle (AI, EPS, PNG, JPG, PDF)",
        "5–7 Days Turnaround",
        "Full Ownership"
      ],
      description: "Perfect for startups and small businesses looking for professional branding."
    },
    {
      id: "platinum",
      name: "Platinum Logo Package",
      features: [
        "3 Logo Concepts",
        "4 Revisions",
        "Moodboard + Strategy",
        "Primary + Secondary + Monogram",
        "Color Palette + Typography",
        "Social Media Kit (3 posts)",
        "Business Card + Letterhead",
        "Brand Guidelines (10 pages)",
        "File Bundle (AI, EPS, SVG, PNG, JPG, PDF)",
        "10–14 Days Turnaround",
        "Full Ownership"
      ],
      description: "Comprehensive branding solution for growing businesses and established companies."
    },
    {
      id: "diamond",
      name: "Diamond Logo Package",
      features: [
        "5 Logo Concepts",
        "6 Revisions",
        "Brand Workshop",
        "Logo Family + Brand Pattern",
        "Icon Mini Set (6–8)",
        "Logo Animation (MP4/GIF)",
        "Social Kit (10 Canva templates)",
        "Presentation Deck",
        "Extended Guidelines (24 pages)",
        "Launch Mockups",
        "File Bundle (AI, EPS, SVG, PSD, PNG, JPG, PDF)",
        "3–4 Weeks Turnaround",
        "Full Ownership"
      ],
      description: "Complete brand identity system for enterprise-level businesses and major rebrands."
    }
  ],
  "website-development": [
    {
      id: "startup",
      name: "Start-up Website",
      features: [
        "5 Unique Pages Website",
        "5 Stock Photos",
        "3 Banner Designs",
        "jQuery Slider Banner",
        "Google Friendly Sitemap",
        "Call To Action (CTA) Buttons",
        "Complete Deployment",
        "Social Links Integration",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
        "Mobile Responsive",
        "CMS Will Be Additional $250*"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "professional",
      name: "Professional Website",
      features: [
        "10 Unique Pages Website",
        "8 Stock Images",
        "5 Banner Designs",
        "jQuery Slider Banner",
        "FREE Google Friendly Sitemap",
        "W3C Certified HTML",
        "Call To Action (CTA) Buttons",
        "Admin Panel Support",
        "Content Management System (CMS)",
        "Complete Deployment",
        "Social Links Integration",
        "Unique Design Guarantee",
        "User Journey",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
        "Mobile Responsive"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "corporate",
      name: "Corporate Website",
      features: [
        "Custom-Made, Dynamic, Interactive Design",
        "17-20 Unique Pages Website",
        "10 Stock Images",
        "8 Banner Design",
        "jQuery Slider Banner",
        "FREE Google Friendly Sitemap",
        "W3C Certified HTML",
        "Call To Action (CTA) Buttons",
        "FREE Favicon",
        "Mobile Responsiveness",
        "Special Effects",
        "Content Management System (CMS)",
        "Sign-Up Area (Form Integration)",
        "Advanced Admin Panel",
        "Unlimited Revisions",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    }
  ],
  "ecommerce": [
    {
      id: "basic",
      name: "Basic E-commerce Package",
      features: [
        "5 Product Pages",
        "Shopping Cart Integration",
        "Payment Gateway Setup",
        "Product Management System",
        "Order Management",
        "Basic SEO Optimization",
        "Mobile Responsive Design",
        "SSL Certificate",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "advanced",
      name: "Advanced E-commerce Package",
      features: [
        "Unlimited Product Pages",
        "Advanced Shopping Cart",
        "Multiple Payment Gateways",
        "Inventory Management",
        "Order Tracking System",
        "Customer Account System",
        "Advanced SEO Optimization",
        "Mobile Responsive Design",
        "SSL Certificate",
        "Analytics Integration",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "enterprise",
      name: "Enterprise E-commerce Package",
      features: [
        "Custom E-commerce Solution",
        "Unlimited Products & Categories",
        "Multi-vendor Support",
        "Advanced Analytics",
        "CRM Integration",
        "API Development",
        "Custom Payment Solutions",
        "Advanced Security Features",
        "24/7 Technical Support",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    }
  ],
  "branding": [
    {
      id: "basic",
      name: "Basic Branding Package",
      features: [
        "Logo Design (3 Concepts)",
        "Business Card Design",
        "Letterhead Design",
        "Color Palette",
        "Typography Guidelines",
        "Basic Brand Guidelines",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "comprehensive",
      name: "Comprehensive Branding Package",
      features: [
        "Logo Design (5 Concepts)",
        "Business Card Design",
        "Letterhead Design",
        "Envelope Design",
        "Color Palette",
        "Typography Guidelines",
        "Brand Guidelines Document",
        "Social Media Kit",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "complete",
      name: "Complete Branding Package",
      features: [
        "Logo Design (8 Concepts)",
        "Complete Stationery Set",
        "Brand Guidelines Document",
        "Social Media Kit",
        "Website Branding",
        "Marketing Materials",
        "Content Creation",
        "Photography",
        "Banner Design",
        "Flyer Design",
        "Brand Strategy Consultation",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    }
  ],
  "video-animation": [
    {
      id: "basic",
      name: "Basic Animation Package",
      features: [
        "30 Second Video",
        "Basic Scriptwriting",
        "Simple Animation",
        "Basic Transitions",
        "Background Music",
        "HD Export",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "premium",
      name: "Premium Animation Package",
      features: [
        "90 Second Video",
        "Professional Scriptwriting",
        "Storyboard Design",
        "Quality Transitions",
        "Motion Graphics",
        "Animation (Intro/Outro)",
        "Kinetic Typography",
        "VFX",
        "Background Music & Foley",
        "Professional Voice Over (1 Language)",
        "Basic Color Grading",
        "Subtitles / Captions (Optional)",
        "HD Export"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "deluxe",
      name: "Deluxe Animation Package",
      features: [
        "180s Second Video",
        "Professional Script",
        "Storyboard Design",
        "Character Animation",
        "Motion Graphics",
        "Whiteboard Animation",
        "2D & 3D Animation",
        "Explainer Video Production",
        "Logo Animation / Intro & Outro",
        "Kinetic Typography",
        "Infographic Animation",
        "Quality Transitions",
        "VFX",
        "Professional Voice Over",
        "Background Music & Foley",
        "Color Grading & Correction",
        "Subtitles & Captions",
        "Brand Integration & Custom Elements",
        "High-Resolution Export"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    }
  ],
  "seo": [
    {
      id: "startup",
      name: "Startup Plan Package",
      features: [
        "Campaign Setup And Optimization",
        "Website Audit",
        "Pages Optimized (10 Pages)",
        "15 Selected Keywords Targeting",
        "Keyword Research",
        "Keyword Grouping",
        "Keyword Mapping",
        "On-Page Optimization",
        "SEO Road Map",
        "Blog Creation",
        "Webpage Copywriting (3 Pages, 350 Words Per Page)",
        "Title Tag Optimization (10 Titles)",
        "Meta Description Optimization (10 Meta Description)",
        "Meta Keyword Optimization (10 Meta Keywords)",
        "Domain Redirect Optimization (10 Domain Redirects)",
        "Xml Sitemap Optimization",
        "Robots.Txt Check",
        "URL Rewrites (10 URL Rewrites)",
        "Broken Link Report",
        "Rich Snippet Recommendations",
        "Breadcrumbs",
        "Initial Off-Page SEO",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ's",
        "Link Building",
        "Directory Submission",
        "Local Business Listings"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "scaling",
      name: "Scaling Plan Package",
      features: [
        "Prior Analysis",
        "Business Analysis",
        "Consumer Analysis",
        "Competitor Analysis",
        "35 Selected Keywords Targeting",
        "15 Pages Keyword Targeted",
        "Webpage Optimization",
        "Meta Tags Creation",
        "Keyword Optimization",
        "Image Optimization",
        "Inclusion Of Anchors",
        "Tracking & Analysis",
        "Google Analytics Installation",
        "Google Webmaster Installation",
        "Call To Action Plan",
        "Creation Of Sitemaps",
        "Reporting",
        "Monthly Reporting",
        "Recommendation",
        "Email Support",
        "Phone Support",
        "Off Page Optimization",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ's",
        "Link Building",
        "Directory Submission",
        "Local Business Listings"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "venture",
      name: "Venture Plan Package",
      features: [
        "Prior Analysis",
        "Business Analysis",
        "Consumer Analysis",
        "Competitor Analysis",
        "60+ Selected Keywords Targeting",
        "30 Pages Keyword Targeted",
        "Webpage Optimization",
        "Meta Tags Creation",
        "Keyword Optimization",
        "Image Optimization",
        "Inclusion Of Anchors Tags",
        "Inclusion Of Anchors Indexing Modifications",
        "Tracking & Analysis",
        "Google Places Inclusions",
        "Google Analytics Installation",
        "Google Webmaster Installation",
        "Call To Action Plan",
        "Creation Of Sitemaps",
        "Reporting",
        "Monthly Reporting",
        "Recommendation",
        "Email Support",
        "Phone Support",
        "Off Page Optimization",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ's",
        "Link Building",
        "Directory Submission",
        "Local Business Listings"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    }
  ],
  "social-media": [
    {
      id: "bronze",
      name: "Bronze Monthly Package (Starter Plan)",
      features: [
        "Total 12 Posts / 3 per Week",
        "Facebook + Instagram",
        "Stories + Highlights (Complimentary)",
        "Reels, Graphics, Carousels Included",
        "1 Campaign / Month",
        "Ad Setup + Management",
        "Account Setup & Optimization",
        "Monthly Scheduling",
        "Meta Business Manager Setup",
        "CRM Integration",
        "Cross-Platform Integration",
        "Dedicated Team Support"
      ],
      description: "Perfect for small businesses and startups looking to establish their social media presence."
    },
    {
      id: "silver",
      name: "Silver Monthly Package (Standard Plan)",
      features: [
        "Total 16 Posts / 4 per Week",
        "Facebook + Instagram + TikTok/LinkedIn",
        "Stories + Highlights (Complimentary)",
        "Reels, Graphics, Carousels Included",
        "3 Campaigns / Month",
        "Ad Setup + Management",
        "Detailed Campaign Monitoring",
        "All Ad Objectives Supported",
        "Account Setup & Optimization",
        "Monthly Scheduling",
        "Meta Business Manager Setup",
        "CRM Integration",
        "Cross-Platform Integration",
        "Dedicated Team Support"
      ],
      description: "Comprehensive social media solution for growing businesses with multi-platform presence."
    },
    {
      id: "gold",
      name: "Gold Monthly Package (Pro Plan)",
      features: [
        "Total 24 Posts / 6 per Week",
        "Facebook + Instagram + TikTok + LinkedIn + Twitter + Pinterest + Snapchat",
        "Stories + Highlights (Complimentary)",
        "Reels, Graphics, Carousels Included",
        "Unlimited Campaigns / Month",
        "Ad Setup + Management",
        "Detailed Campaign Monitoring",
        "All Ad Objectives Supported",
        "Account Setup & Optimization",
        "Monthly Scheduling",
        "Meta Business Manager Setup",
        "CRM Integration",
        "Cross-Platform Integration",
        "Social Community Management",
        "Dedicated Team Support"
      ],
      description: "Complete social media management for enterprise-level businesses with full platform coverage."
    }
  ]
};

export function PackagesSection() {
  const [selectedService, setSelectedService] = useState<ServiceCategoryId>("logo-design");
  const currentPackages = servicePackages[selectedService] || servicePackages["logo-design"];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-h2 font-roboto font-bold text-primary-navy mb-4">
            Tailor our services to fit your needs
          </h2>
          <p className="text-body text-gray-dark max-w-2xl mx-auto">
            Select the perfect package custom for your business needs and budget
          </p>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-4 gap-0 min-h-[400px]">
            {/* Left Sidebar - Services */}
            <div className="lg:col-span-1 bg-gradient-to-b from-primary-navy to-blue-900 p-6 rounded-l-2xl">
              <h3 className="text-lg font-roboto font-bold text-white mb-6">
                Choose your plan
              </h3>
              <div className="space-y-4">
                {serviceCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`flex items-center gap-4 cursor-pointer transition-all duration-200 ${
                      selectedService === category.id
                        ? 'text-white' 
                        : 'text-blue-100 hover:text-white'
                    }`}
                    onClick={() => setSelectedService(category.id)}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      selectedService === category.id
                        ? 'bg-white border-white' 
                        : 'border-blue-300 hover:border-blue-200'
                    }`}>
                      {selectedService === category.id && (
                        <Check className="w-4 h-4 text-primary-navy" />
                      )}
                    </div>
                    <span className="font-medium text-lg">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Package Cards */}
            <div className="lg:col-span-3 p-6 bg-white">
              <div className="grid md:grid-cols-3 gap-6 h-full">
                {currentPackages.map((pkg) => (
                  <Card key={pkg.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-roboto font-bold text-black">
                        {pkg.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      {/* Scrollable Features List */}
                      <div className="flex-1 overflow-y-auto max-h-80 pr-2">
                        <ul className="space-y-3">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Fixed Bottom Section */}
                      <div className="pt-4 mt-auto">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
