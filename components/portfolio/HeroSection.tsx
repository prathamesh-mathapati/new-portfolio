import Link from "next/link";

export default function HeroSection() {
  return (
        <section id="top" className="relative section-pad pt-32 md:pt-40" x-file-name="Hero" x-line-number="9" x-column="4"
          x-component="section" x-id="Hero_9_4" x-dynamic="false">
          <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" x-file-name="Hero" x-line-number="11"
            x-column="6" x-component="div" x-id="Hero_11_6" x-dynamic="false"></div>
          <div className="absolute -top-20 right-0 w-[40rem] h-[40rem] rounded-full bg-accent/10 blur-3xl pointer-events-none"
            x-file-name="Hero" x-line-number="12" x-column="6" x-component="div" x-id="Hero_12_6" x-dynamic="false"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center" x-file-name="Hero"
            x-line-number="14" x-column="6" x-component="div" x-id="Hero_14_6" x-dynamic="false">
            <div className="lg:col-span-7" x-file-name="Hero" x-line-number="15" x-column="8" x-component="div" x-id="Hero_15_8"
              x-dynamic="false">
              <p className="reveal label-mono mb-6 flex items-center gap-2 is-visible" x-file-name="Hero" x-line-number="16"
                x-column="10" x-component="p" x-id="Hero_16_10" x-dynamic="true" x-source-type="computed"
                x-source-editable="false"><span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"
                  x-file-name="Hero" x-line-number="17" x-column="12" x-component="span" x-id="Hero_17_12"
                  x-dynamic="false"></span>Open to opportunities</p>
              <h1
                className="reveal font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight is-visible"
                x-file-name="Hero" x-line-number="21" x-column="10" x-component="h1" x-id="Hero_21_10" x-dynamic="false">Hi,
                I&apos;m <span className="text-foreground" x-file-name="Hero" x-line-number="22" x-column="20" x-component="span"
                  x-id="Hero_22_20" x-dynamic="true" x-source-type="unknown" x-source-path="[0]"
                  x-source-editable="false">Prathamesh</span>
                <br
                  x-file-name="Hero"
                  x-line-number="23"
                  x-column="12"
                  x-component="br"
                  x-id="Hero_23_12"
                  x-dynamic="false"
                />
                <span className="text-muted-foreground"
                  x-file-name="Hero" x-line-number="24" x-column="12" x-component="span" x-id="Hero_24_12"
                  x-dynamic="false">I craft </span><span className="relative inline-block" x-file-name="Hero" x-line-number="25"
                    x-column="12" x-component="span" x-id="Hero_25_12" x-dynamic="false"><span className="relative z-10"
                      x-file-name="Hero" x-line-number="26" x-column="14" x-component="span" x-id="Hero_26_14"
                      x-dynamic="false">web experiences</span><span
                        className="absolute left-0 right-0 bottom-1 h-3 bg-accent/40 -z-0 rounded-sm" x-file-name="Hero"
                        x-line-number="27" x-column="14" x-component="span" x-id="Hero_27_14"
                        x-dynamic="false"></span></span><span className="text-muted-foreground" x-file-name="Hero"
                          x-line-number="29" x-column="12" x-component="span" x-id="Hero_29_12" x-dynamic="false">.</span></h1>
              <p className="reveal mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed is-visible"
                x-file-name="Hero" x-line-number="32" x-column="10" x-component="p" x-id="Hero_32_10" x-dynamic="true"
                x-source-type="static-imported" x-source-var="personal" x-source-file="../mock"
                x-source-file-abs="/app/frontend/src/mock.js" x-source-line="4" x-source-path="tagline"
                x-source-editable="true">I build scalable, high-performance web applications with React, Next.js, and modern
                JavaScript.</p>
              <div className="reveal mt-9 flex flex-wrap items-center gap-3 is-visible" x-file-name="Hero" x-line-number="36"
                x-column="10" x-component="div" x-id="Hero_36_10" x-dynamic="false"><Link href="#projects"
                  className="btn-accent inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
                  x-file-name="Hero" x-line-number="37" x-column="12" x-component="a" x-id="Hero_37_12"
                  x-dynamic="false">View my work <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg></Link><a href="/Prathamesh.pdf"
                    target="_blank"
                    className="btn-ghost-border inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
                    x-file-name="Hero" x-line-number="43" x-column="12" x-component="a" x-id="Hero_43_12"
                    x-dynamic="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-download" aria-hidden="true" x-file-name="Hero" x-line-number="47" x-column="14"
                      x-component="Download" x-id="Hero_47_14" x-dynamic="false">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg> Resume</a></div>
              <div className="reveal mt-10 flex items-center gap-5 text-muted-foreground is-visible" x-file-name="Hero"
                x-line-number="51" x-column="10" x-component="div" x-id="Hero_51_10" x-dynamic="false"><a href="https://github.com/prathamesh-mathapati"
                  target="_blank" aria-label="GitHub" className="hover:text-accent transition-colors" x-file-name="Hero" x-line-number="52"
                  x-column="12" x-component="a" x-id="Hero_52_12" x-dynamic="false"><svg xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github" aria-hidden="true"
                    x-file-name="Hero" x-line-number="53" x-column="14" x-component="Github" x-id="Hero_53_14"
                    x-dynamic="false">
                    <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                    </path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg></a><a href="https://www.linkedin.com/in/prathamesh-mathapati-aaaa80263/" target="_blank" aria-label="LinkedIn" className="hover:text-accent transition-colors" x-file-name="Hero"
                    x-line-number="55" x-column="12" x-component="a" x-id="Hero_55_12" x-dynamic="false"><svg
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-linkedin" aria-hidden="true" x-file-name="Hero" x-line-number="56" x-column="14"
                      x-component="Linkedin" x-id="Hero_56_14" x-dynamic="false">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg></a><a href="mailto:prathamesh.mathapati.pm@gmail.com" aria-label="Email"
                    className="hover:text-accent transition-colors" x-file-name="Hero" x-line-number="58" x-column="12"
                    x-component="a" x-id="Hero_58_12" x-dynamic="false"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                      height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" aria-hidden="true"
                      x-file-name="Hero" x-line-number="59" x-column="14" x-component="Mail" x-id="Hero_59_14"
                      x-dynamic="false">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg></a><span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs" x-file-name="Hero"
                    x-line-number="61" x-column="12" x-component="span" x-id="Hero_61_12" x-dynamic="true"
                    x-source-type="static-imported" x-source-var="personal" x-source-file="../mock"
                    x-source-file-abs="/app/frontend/src/mock.js" x-source-line="4" x-source-path="location"
                    x-source-editable="true"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" className="lucide lucide-map-pin" aria-hidden="true" x-file-name="Hero"
                      x-line-number="62" x-column="14" x-component="MapPin" x-id="Hero_62_14" x-dynamic="false">
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                    </path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg> Hadapsar, Pune</span></div>
            </div>
            <div className="lg:col-span-5 reveal is-visible" x-file-name="Hero" x-line-number="68" x-column="8"
              x-component="div" x-id="Hero_68_8" x-dynamic="false">
              <div className="relative float-slow" x-file-name="Hero" x-line-number="69" x-column="10" x-component="div"
                x-id="Hero_69_10" x-dynamic="false">
                <div className="absolute -inset-1 bg-accent/20 blur-2xl rounded-2xl" x-file-name="Hero" x-line-number="70"
                  x-column="12" x-component="div" x-id="Hero_70_12" x-dynamic="false"></div>
                <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-2xl" x-file-name="Hero"
                  x-line-number="71" x-column="12" x-component="div" x-id="Hero_71_12" x-dynamic="false">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40" x-file-name="Hero"
                    x-line-number="72" x-column="14" x-component="div" x-id="Hero_72_14" x-dynamic="false"><span
                      className="w-3 h-3 rounded-full bg-rose-400/70" x-file-name="Hero" x-line-number="73" x-column="16"
                      x-component="span" x-id="Hero_73_16" x-dynamic="false"></span><span
                        className="w-3 h-3 rounded-full bg-amber-400/70" x-file-name="Hero" x-line-number="74" x-column="16"
                        x-component="span" x-id="Hero_74_16" x-dynamic="false"></span><span
                          className="w-3 h-3 rounded-full bg-emerald-400/70" x-file-name="Hero" x-line-number="75" x-column="16"
                          x-component="span" x-id="Hero_75_16" x-dynamic="false"></span><span
                            className="ml-3 font-mono text-xs text-muted-foreground" x-file-name="Hero" x-line-number="76"
                            x-column="16" x-component="span" x-id="Hero_76_16" x-dynamic="false">~/prathamesh — zsh</span></div>
                  <pre className="terminal-body p-5 font-mono text-[12.5px] leading-relaxed text-foreground/90 overflow-x-auto"
                    x-file-name="Hero" x-line-number="78" x-column="14" x-component="pre" x-id="Hero_78_14" x-dynamic="true"
                    x-source-type="template"
                    x-source-editable="false">{`> whoami
prathamesh_mathapati

> cat role.txt
React.js Developer

> ls skills/
react.js  next.js  redux  typescript
tailwind  electron.js  rest-apis

> git log --oneline -3
* 4y    shipped 15+ production apps
* 1y    optimized perf by ~20%
* 6mo   mentored junior devs

> echo $STATUS
AVAILABLE_FOR_WORK`}<span className="text-accent" x-file-name="Hero" x-line-number="96" x-column="16" x-component="span" x-id="Hero_96_16" x-dynamic="false">_</span><span className="cursor-blink text-accent" x-file-name="Hero" x-line-number="97" x-column="16" x-component="span" x-id="Hero_97_16" x-dynamic="false">|</span></pre>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
