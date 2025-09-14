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
        "2 logo Concepts",
        "4 Revisions",
        "Final Files PNG, JPG, PDF.",
        "24-36 Hours Turn Around",
        "100% Ownership Rights",
        "Complete Customer Satisfaction"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "platinum",
      name: "Platinum Logo Package",
      features: [
        "4 Logo Concepts",
        "8 Revisions",
        "18-24 Hours Turn Around",
        "Designed by 2 Dedicated Designers",
        "Final Files PNG, JPG, PDF, SVG, EPS.",
        "Business Card Design",
        "Favicon",
        "100% Ownership Rights",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee*"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "diamond",
      name: "Diamond Logo Package",
      features: [
        "6 Logo Concepts",
        "12 Revisions",
        "Flyer Design",
        "Brochure Design",
        "Social Media Icon",
        "Favicon",
        "Final Files PNG, JPG, PDF, SVG, PSD, EPS.",
        "Designed by 4 Award Winning Designers",
        "12-18 Hours Turn Around",
        "Any Changes Within 30 Days Will Be Free",
        "100% Ownership Rights",
        "Designing Until Complete Satisfaction"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
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
        "Mobile Responsive Will Be Additional $200*",
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
        "Mobile Responsive will be Additional $150*"
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
      name: "Bronze Monthly Package",
      features: [
        "Total Post 12/3 Post a Week",
        "3 Reels Per Month",
        "4 Graphic Posts",
        "5 Carousel",
        "4 Stories + Highlights (Complimentary)",
        "Facebook",
        "Instagram",
        "Facebook and Instagram Ads",
        "Total 1 Campaign Per Month",
        "5 Adsets Per Month",
        "Account Setup/Optimization (Cover Photo, About Section, Display Picture, and More)",
        "Monthly Social Posts Scheduling",
        "Meta Business Manager Setup",
        "CRM Integeration (Database Management)",
        "Cross-Platform Integration (Facebook, Whatsapp, Instagram, Pixels)",
        "01 Dedicated Social Media Copywriter",
        "01 Dedicated Graphic Designer",
        "01 Dedicated Ads Expert",
        "01 Dedicated Account Manager"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "standard",
      name: "Standard Monthly Package",
      features: [
        "Total Post 16/4 Post a Week",
        "4 Reels Per Month",
        "6 Graphic Posts",
        "6 Carousel",
        "6 Stories + Highlights (Complimentary)",
        "Facebook",
        "Instagram",
        "Tiktok/LinkedIn",
        "Campaigns on FB, Insta, and Tiktok/LinkedIn",
        "Total 3 Campaign Per Month",
        "Unlimited Adsets Per Month",
        "Detailed Campaign Monitering",
        "All Ad Objectives Supported",
        "Account Setup/Optimization (Cover Photo, About Section, Display Picture, and More)",
        "Monthly Social Posts Scheduling",
        "Meta Business Manager Setup",
        "Tiktok/LinkedIn Ads Account Setup",
        "CRM Integeration (Database Management)",
        "Cross-Platform Integration (Facebook, Whatsapp, Instagram, Pixels)",
        "02 Dedicated Social Media Copywriter",
        "02 Dedicated Graphic Designer",
        "02 Dedicated Ads Expert",
        "01 Dedicated Account Manager"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
    },
    {
      id: "pro",
      name: "Pro Monthly Package",
      features: [
        "Total Post 24/6 Post a Week",
        "6 Reels Per Month",
        "9 Graphic Posts",
        "9 Carousel",
        "6 Stories + Highlights (Complimentary)",
        "Facebook",
        "Instagram",
        "Tiktok/LinkedIn",
        "Twitter",
        "LinkedIn",
        "Pinterest",
        "Snapchat",
        "Unlimited Campaigns on FB, Insta, Tiktok, LinkedIn, Snapchat, Pinterest, and Twitter",
        "Unlimited Campaigns Per Month",
        "Detailed Campaign Monitering",
        "All Ad Objectives Supported",
        "Account Setup/Optimization (Cover Photo, About Section, Display Picture, and More)",
        "Monthly Social Posts Scheduling",
        "Meta Business Manager Setup",
        "All Ads Account Setup (FB, Insta, Tiktok, LinkedIn, Snapchat, Pinterest, and Twitter)",
        "CRM Integration (Database Management)",
        "Cross-Platform Integeration (Facebook, WhatsApp, Instagram, Pixels)",
        "Social Community Management (Query + Commnet Responses)",
        "03 Dedicated Social Media Copywriter",
        "03 Dedicated Graphic Designer",
        "03 Dedicated Ads Expert",
        "01 Dedicated Account Manager"
      ],
      description: "Suitable for potential super-startups and brand revamps for companies."
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
