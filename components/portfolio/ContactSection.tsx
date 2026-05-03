"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      window.alert("Please fill in name, email, and message.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to_name: "Prathamesh",
          from_name: name,
          from_email: email,
          number: "",
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Message request failed");
      }

      form.reset();
      window.alert("Message sent successfully.");
    } catch {
      window.alert("Message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
        <section id="contact" className="section-pad relative" x-file-name="Contact" x-line-number="33" x-column="4"
          x-component="section" x-id="Contact_33_4" x-dynamic="false">
          <div className="max-w-7xl mx-auto px-6 lg:px-10" x-file-name="Contact" x-line-number="34" x-column="6"
            x-component="div" x-id="Contact_34_6" x-dynamic="false">
            <div className="grid lg:grid-cols-12 gap-10" x-file-name="Contact" x-line-number="35" x-column="8" x-component="div"
              x-id="Contact_35_8" x-dynamic="false">
              <div className="lg:col-span-5" x-file-name="Contact" x-line-number="37" x-column="10" x-component="div"
                x-id="Contact_37_10" x-dynamic="false">
                <p className="reveal label-mono mb-4" x-file-name="Contact" x-line-number="38" x-column="12" x-component="p"
                  x-id="Contact_38_12" x-dynamic="false"><span className="text-accent" x-file-name="Contact" x-line-number="38"
                    x-column="50" x-component="span" x-id="Contact_38_50" x-dynamic="false">05.</span> Contact</p>
                <h2 className="reveal font-display text-4xl sm:text-5xl font-bold leading-tight" x-file-name="Contact"
                  x-line-number="39" x-column="12" x-component="h2" x-id="Contact_39_12" x-dynamic="false">Let&apos;s build
                  something <span className="text-accent" x-file-name="Contact" x-line-number="40" x-column="36"
                    x-component="span" x-id="Contact_40_36" x-dynamic="false">great</span>.</h2>
                <p className="reveal mt-5 text-muted-foreground leading-relaxed max-w-md" x-file-name="Contact"
                  x-line-number="42" x-column="12" x-component="p" x-id="Contact_42_12" x-dynamic="false">Have a project in
                  mind, a role to fill, or just want to say hi? My inbox is always open — I&apos;ll do my best to get back to you
                  within a day.</p>
                <div className="reveal mt-8 space-y-3" x-file-name="Contact" x-line-number="47" x-column="12" x-component="div"
                  x-id="Contact_47_12" x-dynamic="false"><a href="mailto:prathamesh.mathapati.pm@gmail.com"
                    className="flex items-center justify-between gap-3 p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-colors group"
                    x-file-name="Contact" x-line-number="48" x-column="14" x-component="a" x-id="Contact_48_14"
                    x-dynamic="false"><span className="flex items-center gap-3" x-file-name="Contact" x-line-number="52"
                      x-column="16" x-component="span" x-id="Contact_52_16" x-dynamic="false"><svg
                        xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-mail text-accent" aria-hidden="true" x-file-name="Contact" x-line-number="53"
                        x-column="18" x-component="Mail" x-id="Contact_53_18" x-dynamic="false">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg><span className="font-mono text-sm" x-file-name="Contact" x-line-number="54" x-column="18"
                        x-component="span" x-id="Contact_54_18" x-dynamic="true" x-source-type="static-imported"
                        x-source-var="personal" x-source-file="../mock" x-source-file-abs="/app/frontend/src/mock.js"
                        x-source-line="4" x-source-path="email"
                        x-source-editable="true">prathamesh.mathapati.pm@gmail.com</span></span><svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-arrow-up-right opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-hidden="true" x-file-name="Contact" x-line-number="56" x-column="16" x-component="ArrowUpRight"
                          x-id="Contact_56_16" x-dynamic="false">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg></a><a href="tel:+917387918711"
                      className="flex items-center justify-between gap-3 p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-colors group"
                      x-file-name="Contact" x-line-number="58" x-column="14" x-component="a" x-id="Contact_58_14"
                      x-dynamic="false"><span className="flex items-center gap-3" x-file-name="Contact" x-line-number="62"
                        x-column="16" x-component="span" x-id="Contact_62_16" x-dynamic="false"><svg
                          xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-phone text-accent" aria-hidden="true" x-file-name="Contact" x-line-number="63"
                          x-column="18" x-component="Phone" x-id="Contact_63_18" x-dynamic="false">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                        </path>
                      </svg><span className="font-mono text-sm" x-file-name="Contact" x-line-number="64" x-column="18"
                        x-component="span" x-id="Contact_64_18" x-dynamic="true" x-source-type="static-imported"
                        x-source-var="personal" x-source-file="../mock" x-source-file-abs="/app/frontend/src/mock.js"
                        x-source-line="4" x-source-path="phone" x-source-editable="true">+91 73879 18711</span></span><svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-arrow-up-right opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-hidden="true" x-file-name="Contact" x-line-number="66" x-column="16" x-component="ArrowUpRight"
                          x-id="Contact_66_16" x-dynamic="false">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg></a>
                  <div className="flex items-center gap-3 p-4 rounded-xl border border-border" x-file-name="Contact"
                    x-line-number="68" x-column="14" x-component="div" x-id="Contact_68_14" x-dynamic="false"><svg
                      xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-map-pin text-accent" aria-hidden="true" x-file-name="Contact" x-line-number="69"
                      x-column="16" x-component="MapPin" x-id="Contact_69_16" x-dynamic="false">
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                      </path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg><span className="font-mono text-sm" x-file-name="Contact" x-line-number="70" x-column="16"
                      x-component="span" x-id="Contact_70_16" x-dynamic="true" x-source-type="static-imported"
                      x-source-var="personal" x-source-file="../mock" x-source-file-abs="/app/frontend/src/mock.js"
                      x-source-line="4" x-source-path="location" x-source-editable="true">Hadapsar, Pune</span></div>
                </div>
                <div className="reveal mt-8 flex items-center gap-3" x-file-name="Contact" x-line-number="74" x-column="12"
                  x-component="div" x-id="Contact_74_12" x-dynamic="false"><a href="https://github.com/prathamesh-mathapati" target="_blank" aria-label="GitHub"
                    className="w-11 h-11 rounded-lg border border-border grid place-items-center hover:border-accent hover:text-accent transition-colors"
                    x-file-name="Contact" x-line-number="75" x-column="14" x-component="a" x-id="Contact_75_14"
                    x-dynamic="false"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-github" aria-hidden="true" x-file-name="Contact" x-line-number="80" x-column="16"
                      x-component="Github" x-id="Contact_80_16" x-dynamic="false">
                      <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                      </path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg></a><a href="https://www.linkedin.com/in/prathamesh-mathapati-aaaa80263/" aria-label="LinkedIn" target="_blank"
                      className="w-11 h-11 rounded-lg border border-border grid place-items-center hover:border-accent hover:text-accent transition-colors"
                      x-file-name="Contact" x-line-number="82" x-column="14" x-component="a" x-id="Contact_82_14"
                      x-dynamic="false"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-linkedin" aria-hidden="true" x-file-name="Contact" x-line-number="87"
                        x-column="16" x-component="Linkedin" x-id="Contact_87_16" x-dynamic="false">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg></a></div>
              </div>
              <form onSubmit={handleSubmit} className="reveal lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5"
                x-file-name="Contact" x-line-number="93" x-column="10" x-component="form" x-id="Contact_93_10"
                x-dynamic="false">
                <div className="grid sm:grid-cols-2 gap-5" x-file-name="Contact" x-line-number="97" x-column="12"
                  x-component="div" x-id="Contact_97_12" x-dynamic="false">
                  <div x-file-name="Contact" x-line-number="131" x-column="4" x-component="div" x-id="Contact_131_4"
                    x-dynamic="false"><label className="label-mono block mb-2" htmlFor="name" x-file-name="Contact"
                      x-line-number="132" x-column="6" x-component="label" x-id="Contact_132_6" x-dynamic="true"
                      x-source-type="computed" x-source-editable="false"><span className="text-accent" x-file-name="Contact"
                        x-line-number="133" x-column="8" x-component="span" x-id="Contact_133_8" x-dynamic="false">$</span>
                      name</label><input id="name" placeholder="Jane Doe"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
                        x-file-name="Contact" x-line-number="135" x-column="6" x-component="input" x-id="Contact_135_6"
                        x-dynamic="false" type="text" defaultValue="" name="name" required /></div>
                  <div x-file-name="Contact" x-line-number="131" x-column="4" x-component="div" x-id="Contact_131_4"
                    x-dynamic="false"><label className="label-mono block mb-2" htmlFor="email" x-file-name="Contact"
                      x-line-number="132" x-column="6" x-component="label" x-id="Contact_132_6" x-dynamic="true"
                      x-source-type="computed" x-source-editable="false"><span className="text-accent" x-file-name="Contact"
                        x-line-number="133" x-column="8" x-component="span" x-id="Contact_133_8" x-dynamic="false">$</span>
                      email</label><input id="email" placeholder="jane@company.com"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
                        x-file-name="Contact" x-line-number="135" x-column="6" x-component="input" x-id="Contact_135_6"
                        x-dynamic="false" type="email" defaultValue="" name="email" required /></div>
                </div>
                <div x-file-name="Contact" x-line-number="101" x-column="12" x-component="div" x-id="Contact_101_12"
                  x-dynamic="false"><label className="label-mono block mb-2" htmlFor="message" x-file-name="Contact"
                    x-line-number="102" x-column="14" x-component="label" x-id="Contact_102_14" x-dynamic="false"><span
                      className="text-accent" x-file-name="Contact" x-line-number="103" x-column="16" x-component="span"
                      x-id="Contact_103_16" x-dynamic="false">$</span> message</label><textarea id="message" name="message"
                        rows={6} placeholder="Tell me about your project, timeline, and goals..." required
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none"
                        x-file-name="Contact" x-line-number="105" x-column="14" x-component="textarea" x-id="Contact_105_14"
                        x-dynamic="false"></textarea></div><button type="submit" disabled={isSubmitting}
                          className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                          x-file-name="Contact" x-line-number="115" x-column="12" x-component="button" x-id="Contact_115_12"
                          x-dynamic="true" x-source-type="computed" x-source-editable="false"><svg
                            xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-send" aria-hidden="true" x-file-name="Contact" x-line-number="120" x-column="43"
                            x-component="Send" x-id="Contact_120_43" x-dynamic="false">
                    <path
                      d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                    </path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg> {isSubmitting ? "Sending..." : "Send message"}</button>
              </form>
            </div>
          </div>
        </section>
  );
}
