"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./PrivacyContent.module.css";

const sections = [
  { id: "introduction", label: "01. Introduction" },
  { id: "application-policy", label: "02. Application Policy & Permissions" },
  { id: "information-we-collect", label: "03. Information We Collect" },
  { id: "log-data", label: "04. Log Data & Analytics" },
  { id: "collection-and-use", label: "05. Collection & Use of Information" },
  { id: "security", label: "06. Security Safeguards" },
  { id: "data-retention", label: "07. Data Retention & Deletion" },
  { id: "childrens-privacy", label: "08. Children’s Privacy" },
  { id: "international-transfers", label: "09. International Data Transfers" },
  { id: "user-rights", label: "10. Your Rights & Data Control" },
  { id: "limits-of-policy", label: "11. Limits of Our Policy" },
  { id: "policy-changes", label: "12. Changes to This Policy" },
  { id: "contact-us", label: "13. Contact & Inquiries" },
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* =========================================
            HIGHLIGHT PILLARS
        ========================================= */}
        <div className={styles.pillarsGrid} data-reveal="up">
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Data Protection</h3>
            <p>Commercially acceptable encryption standards and safeguards to preserve your privacy.</p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <h3>Application Transparency</h3>
            <p>Dedicated customer & technician portal for maintenance, AMC tracking, and ticketing.</p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 10h.01M12 10h.01M16 10h.01" />
              </svg>
            </div>
            <h3>SMS OTP Verification</h3>
            <p>Secure SMS read permission strictly scoped to auto-filling authentication tokens.</p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <polyline points="17 11 19 13 23 9" />
              </svg>
            </div>
            <h3>User Autonomy</h3>
            <p>Complete control to access, rectify, or request deletion of personal information.</p>
          </div>
        </div>

        {/* =========================================
            MAIN CONTENT WITH STICKY SIDEBAR
        ========================================= */}
        <div className={styles.layout}>
          {/* STICKY SIDEBAR */}
          <aside className={styles.sidebar}>
            <div className={styles.stickyBox}>
              <div className={styles.sidebarHeader}>
                <span className={styles.tocTitle}>Table of Contents</span>
                <span className={styles.tocCount}>{sections.length} Sections</span>
              </div>

              <nav className={styles.tocNav}>
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`${styles.tocLink} ${activeSection === item.id ? styles.activeLink : ""}`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className={styles.sidebarCard}>
                <h4>Need assistance?</h4>
                <p>Have questions regarding our privacy practices or data handling?</p>
                <a href="mailto:sales@teknixelevators.com" className={styles.contactBtn}>
                  Contact Privacy Team
                </a>
              </div>
            </div>
          </aside>

          {/* POLICY BODY */}
          <article className={styles.contentBody}>
            {/* 01. INTRODUCTION */}
            <section id="introduction" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 01</div>
              <h2>Privacy Policy Overview</h2>
              <p>
                Your privacy is important to us. It is <strong>Teknix Elevators Pvt. Ltd.</strong> company policy to
                respect your privacy and comply with any applicable law and regulation regarding any personal
                information we may collect about you, including across our official website,{" "}
                <Link href="https://www.teknixelevators.com" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                  https://www.teknixelevators.com
                </Link>
                , and other digital properties, applications, and services we own and operate.
              </p>
              <p>
                Personal information is any information about you which can be used to identify you. This includes
                information about you as a person (such as name, address, and date of birth), your devices, payment
                details, and even information about how you use a website or online service.
              </p>
            </section>

            {/* 02. APPLICATION POLICY */}
            <section id="application-policy" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 02</div>
              <h2>Application Policy & Mobile Permissions</h2>
              <p>
                Teknix Elevators provides a specialized mobile application platform engineered to service both our
                valued <strong>customers</strong> and <strong>field service technicians</strong>. The application acts as a
                centralized vertical transportation lifecycle management dashboard.
              </p>

              <div className={styles.featureBox}>
                <h4 className={styles.boxTitle}>Comprehensive In-App Capabilities</h4>
                <ul className={styles.featureList}>
                  <li>
                    <strong>Elevator Installation & Equipment Records:</strong> Detailed specifications, technical
                    diagrams, model configurations, and installation metrics.
                  </li>
                  <li>
                    <strong>Service & Ticketing:</strong> Rapid logging of breakdown reports, scheduled maintenance
                    requests, proactive inspection logs, and real-time technician dispatch tracking.
                  </li>
                  <li>
                    <strong>Parts Procurement:</strong> Genuine OEM spare parts catalog, component pricing, requisition
                    workflows, and parts order history.
                  </li>
                  <li>
                    <strong>Warranty Management:</strong> Instant tracking of active equipment warranty periods,
                    terms of coverage, and expiration timelines.
                  </li>
                  <li>
                    <strong>AMC (Annual Maintenance Contract) Administration:</strong> Complete visibility into
                    current AMC packages (Silver, Gold, Platinum), coverage scope, renewal plans, payment history, and
                    service milestone completion.
                  </li>
                </ul>
              </div>

              <div className={styles.permissionCard}>
                <div className={styles.permissionHeader}>
                  <div className={styles.permissionIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4>SMS & OTP Auto-Fill Permission</h4>
                    <span className={styles.subtext}>Used solely for frictionless, secure authentication</span>
                  </div>
                </div>
                <p>
                  To deliver a secure and seamless login experience, users authenticate using their registered mobile
                  telephone number. A unique One-Time Password (OTP) is transmitted via SMS to verify device
                  ownership and user identity.
                </p>
                <p>
                  Our mobile application requests permission for <strong>Mobile OTP Read (SMS Read)</strong> to
                  automatically detect and fill the incoming OTP verification token. This permission is strictly utilized
                  to complete instantaneous authentication. <em>Teknix Elevators does not read, store, transmit, or
                  inspect any personal messages, external SMS logs, or third-party communications.</em>
                </p>
              </div>
            </section>

            {/* 03. INFORMATION WE COLLECT */}
            <section id="information-we-collect" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 03</div>
              <h2>Information We Collect</h2>
              <p>
                Information we collect falls into two categories: information you knowingly and actively provide us, and
                information automatically transmitted by your devices when interacting with our digital interfaces.
              </p>
              <div className={styles.splitGrid}>
                <div className={styles.infoCard}>
                  <h4>Information You Provide</h4>
                  <ul>
                    <li>Contact details (name, email address, telephone number)</li>
                    <li>Property, residential villa, or commercial site addresses</li>
                    <li>Project lift requirements and architectural drawings</li>
                    <li>Support inquiries, feedback, and customer service requests</li>
                    <li>AMC selection and billing/payment documentation</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h4>Information Sent Automatically</h4>
                  <ul>
                    <li>Device model, operating system, and hardware identifiers</li>
                    <li>IP address and approximate geographic geolocation</li>
                    <li>Network connection status and mobile network carrier</li>
                    <li>App performance telemetry and crash logs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 04. LOG DATA */}
            <section id="log-data" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 04</div>
              <h2>Log Data & Technical Analytics</h2>
              <p>
                When you visit our website or interact with our web services, our servers may automatically log the
                standard technical data provided by your web browser. This may include:
              </p>
              <ul className={styles.styledList}>
                <li>Your device’s Internet Protocol (IP) address.</li>
                <li>Browser type, configuration, engine, and version.</li>
                <li>The pages visited on our website, entry and exit paths, and referrers.</li>
                <li>The timestamp and date of your visit, along with time spent on specific pages.</li>
                <li>Diagnostic parameters and technical details accompanying any errors encountered.</li>
              </ul>
              <p className={styles.callout}>
                Please be aware that while this technical information may not be personally identifying on its own, it
                may be possible to correlate it with other authenticated account data to determine individual identities.
              </p>
            </section>

            {/* 05. COLLECTION AND USE */}
            <section id="collection-and-use" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 05</div>
              <h2>Collection and Use of Information</h2>
              <p>
                We may collect personal information from you when you do any of the following on our website or mobile
                application:
              </p>
              <ul className={styles.styledList}>
                <li>Use a mobile device or web browser to explore our products, catalogues, and resources.</li>
                <li>Contact our engineering, sales, or customer support teams via email, phone, or digital forms.</li>
                <li>Submit technical consultation requests or request elevator dimension quotes.</li>
                <li>When you interact with or mention our brand across social media channels.</li>
              </ul>
              <p>
                We collect, hold, use, and disclose personal data strictly for legitimate operational purposes,
                including processing service agreements, scheduling preventative maintenance, dispatching technicians,
                and updating warranty records. Personal information will not be processed in any manner incompatible
                with these stated purposes.
              </p>
              <p>
                We may occasionally combine your information with general industry insights or validated research data
                received from authorized business partners and suppliers.
              </p>
            </section>

            {/* 06. SECURITY */}
            <section id="security" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 06</div>
              <h2>Security of Your Personal Information</h2>
              <p>
                When we collect and process personal information, and while we retain this information, we will protect
                it within commercially acceptable means to prevent loss, theft, unauthorized access, disclosure,
                copying, use, or modification.
              </p>
              <div className={styles.securityGrid}>
                <div className={styles.securityItem}>
                  <div className={styles.secDot} />
                  <div>
                    <h5>Encrypted Communication</h5>
                    <p>All data transit is guarded with modern SSL/TLS encryption protocols.</p>
                  </div>
                </div>
                <div className={styles.securityItem}>
                  <div className={styles.secDot} />
                  <div>
                    <h5>Strict Access Control</h5>
                    <p>Technician and administrative access is scoped by role-based authorization.</p>
                  </div>
                </div>
                <div className={styles.securityItem}>
                  <div className={styles.secDot} />
                  <div>
                    <h5>Breach Notification</h5>
                    <p>We comply fully with applicable statutory guidelines in respect of any data breach.</p>
                  </div>
                </div>
              </div>
              <p className={styles.subtleNote}>
                Although we take every reasonable measure to protect your personal information, no method of electronic
                transmission or storage is 100% secure, and absolute data security cannot be guaranteed. You are
                responsible for selecting strong passwords and safeguarding physical access to your mobile device.
              </p>
            </section>

            {/* 07. DATA RETENTION */}
            <section id="data-retention" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 07</div>
              <h2>How Long We Keep Your Personal Information</h2>
              <p>
                We keep your personal information only for as long as strictly necessary. This time period depends on the
                nature of your relationship with Teknix Elevators, the lifecycle of installed equipment, and our legal,
                accounting, safety, and regulatory compliance obligations.
              </p>
              <p>
                If your personal information is no longer required, we securely delete it or make it completely
                anonymous by removing all identifying indicators. If retention is legally required—such as for statutory
                elevator safety logs, warranty liability, accounting, or archiving in the public interest—it will be
                safeguarded against unauthorized active use.
              </p>
            </section>

            {/* 08. CHILDREN'S PRIVACY */}
            <section id="childrens-privacy" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 08</div>
              <h2>Children’s Privacy</h2>
              <p>
                Our commercial websites, applications, and elevator engineering services are designed for property
                owners, architects, builders, and adult facility managers. We do not direct any of our products or
                services to children under the age of 13, and we do not knowingly collect personal information about
                children under 13.
              </p>
            </section>

            {/* 09. INTERNATIONAL TRANSFERS */}
            <section id="international-transfers" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 09</div>
              <h2>International Transfers of Personal Information</h2>
              <p>
                The personal information we collect is stored and processed in secure server environments where we, our
                affiliates, cloud infrastructure providers, and third-party vendors maintain operations.
              </p>
              <p>
                Please be aware that the locations where personal information is stored or processed may have data
                protection regulations differing from your home jurisdiction. Whenever cross-border transfers occur, we
                ensure they comply with applicable legal frameworks and enforce the protections set forth in this Privacy
                Policy.
              </p>
            </section>

            {/* 10. USER RIGHTS */}
            <section id="user-rights" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 10</div>
              <h2>Your Rights and Controlling Your Personal Information</h2>
              <p>
                You retain the fundamental right to withhold personal information from us, understanding that certain
                features (such as personalized AMC reminders or mobile app ticketing) may be restricted. We will not
                discriminate against you for exercising any of your privacy rights.
              </p>

              <div className={styles.rightsGrid}>
                <div className={styles.rightCard}>
                  <h5>Right to Access & Disclosure</h5>
                  <p>You may request full copies of all personal records and equipment logs held under your account.</p>
                </div>
                <div className={styles.rightCard}>
                  <h5>Right to Rectification</h5>
                  <p>Request immediate correction of any inaccurate, incomplete, or out-of-date personal information.</p>
                </div>
                <div className={styles.rightCard}>
                  <h5>Marketing Opt-Out</h5>
                  <p>Unsubscribe from commercial emails or promotional alerts at any time via provided links.</p>
                </div>
                <div className={styles.rightCard}>
                  <h5>Complaints & Dispute Resolution</h5>
                  <p>
                    Submit formal grievances regarding data handling. You also retain the right to approach regulatory
                    authorities.
                  </p>
                </div>
              </div>
              <p>
                If you are a third party providing personal information about another person, you represent and warrant
                that you have received that individual’s explicit consent to share the information with us.
              </p>
            </section>

            {/* 11. LIMITS OF OUR POLICY */}
            <section id="limits-of-policy" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 11</div>
              <h2>Limits of Our Policy & External Links</h2>
              <p>
                Our digital properties and mobile applications may provide links to external websites, partner portals,
                or regulatory resources that are not operated by Teknix Elevators. Please be advised that we exercise no
                control over the content, security, or terms of third-party platforms and cannot accept responsibility or
                liability for their individual privacy practices.
              </p>
            </section>

            {/* 12. CHANGES TO THIS POLICY */}
            <section id="policy-changes" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 12</div>
              <h2>Changes to This Policy</h2>
              <p>
                At our discretion, we may update our Privacy Policy to reflect ongoing developments in our business
                processes, mobile application capabilities, industry standards, or legislative regulations.
              </p>
              <p>
                Any changes will be published directly on this page at the same URL. Where legally mandated, we will
                notify registered users and seek affirmative consent before processing personal data under materially
                expanded parameters.
              </p>
            </section>

            {/* 13. CONTACT US */}
            <section id="contact-us" className={styles.section} data-reveal="up">
              <div className={styles.sectionBadge}>Section 13</div>
              <h2>Contact Us & Privacy Office</h2>
              <p>
                For any questions, concerns, clarification, or requests regarding this Privacy Policy or your personal
                information, please reach out to our dedicated privacy and governance team:
              </p>

              <div className={styles.contactCard}>
                <div className={styles.contactDetails}>
                  <h3>Teknix Elevators Pvt. Ltd.</h3>
                  <p className={styles.corporateSub}>Vertical Transportation & Engineered Mobility Solutions</p>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Email:</span>
                    <a href="mailto:sales@teknixelevators.com" className={styles.contactEmail}>
                      sales@teknixelevators.com
                    </a>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Website:</span>
                    <Link href="https://www.teknixelevators.com" target="_blank" rel="noopener noreferrer">
                      https://www.teknixelevators.com
                    </Link>
                  </div>
                </div>

                <div className={styles.actionBlock}>
                  <a href="mailto:sales@teknixelevators.com?subject=Privacy%20Policy%20Inquiry" className={styles.primaryBtn}>
                    Send Inquiries
                  </a>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </section>
  );
}
