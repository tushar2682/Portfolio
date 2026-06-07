import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Aegis Fintech Transaction Monitoring",
    description:
      "A state-of-the-art, event-driven transaction monitoring system designed to intercept, analyze, and flag fraudulent financial transactions in real-time. Built on a scalable microservices architecture.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Aegis Fintech Transaction Monitoring Dashboard",
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "React"],
    stats: [
      { value: "Real-time", label: "Fraud Detection" },
      { value: "Event-driven", label: "Architecture" },
    ],
    period: "2024",
    github: "https://github.com/tushar2682/Ai-powered-Fintech-Monitoring.git"
  },
  {
    id: "02",
    title: "CloudPool Orchestration Platform",
    description:
      "A high-performance developer Backend-as-a-Service (BaaS) and cloud resource orchestration platform, automating database provisioning and server deployments.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "CloudPool Platform Architecture",
    technologies: ["Java", "Docker", "Spring Boot", "Redis", "AWS"],
    stats: [
      { value: "Automated", label: "Provisioning" },
      { value: "BaaS", label: "Developer Platform" },
    ],
    period: "2024",
    github: "https://github.com/tushar2682/CloudPool.git"
  },
  {
    id: "03",
    title: "Stock Broker Backend System",
    description:
      "An enterprise-grade stock brokerage backend. Core functionalities include transaction matching, secure portfolio balance management, and processing market orders.",
    image:
      "https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Stock Broker System Backend",
    technologies: ["Node.js", "Express", "SQL", "JWT Authentication"],
    stats: [
      { value: "Secure", label: "Ledger" },
      { value: "High-throughput", label: "Trading" },
    ],
    period: "2023",
    github: "https://github.com/tushar2682/stock-broker-system.git"
  },
  {
    id: "04",
    title: "Virtual Multithreaded File System",
    description:
      "A virtual file system in Java supporting concurrent file modifications. Implements multithreaded readers-writers locks, custom inode directories, and crash resiliency.",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "File System Architecture",
    technologies: ["Java", "Multithreading", "OS Architecture", "Concurrency"],
    stats: [
      { value: "Concurrent", label: "Locks" },
      { value: "Virtual VFS", label: "Storage" },
    ],
    period: "2023",
    github: "https://github.com/tushar2682/multithreaded-file-system.git"
  },
  {
    id: "05",
    title: "Secure Payment Gateway API",
    description:
      "A robust financial API handling online checkouts. Supports multi-processor routing, payment tokenization for PCI-compliance, and transaction ledger reconciliation.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Secure Payment Gateway Interface",
    technologies: ["Node.js", "Express", "Crypto API", "Stripe SDK"],
    stats: [
      { value: "Secure", label: "Tokenization" },
      { value: "Reconciled", label: "Ledgers" },
    ],
    period: "2024",
    github: "https://github.com/tushar2682/payment-gateway.git"
  },
  {
    id: "06",
    title: "Decentralized P2P File Transfer",
    description:
      "A custom P2P protocol application built from scratch. Utilizes network sockets, concurrent thread pools, chunk-based splitting, and MD5 file validation.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "P2P Network Diagram",
    technologies: ["Java", "Socket Programming", "Cryptography", "Concurrency"],
    stats: [
      { value: "Decentralized", label: "Sharing" },
      { value: "Thread-pooled", label: "Transfers" },
    ],
    period: "2023",
    github: "https://github.com/tushar2682/p2p-file.git"
  },
  {
    id: "07",
    title: "Compiler Lexical Analyzer",
    description:
      "A compilation compiler front-end tokenizing custom programming languages. Features structural code optimization and syntax checking.",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Lexical Compiler Structure",
    technologies: ["Java", "Regular Expressions", "Compiler Design"],
    stats: [
      { value: "Optimized", label: "Lexing" },
      { value: "Tokenized", label: "Grammar" },
    ],
    period: "2023",
    github: "https://github.com/tushar2682/lex-Compiler.git"
  },
  {
    id: "08",
    title: "Secure MERN Auth with OTP",
    description:
      "A secure verification module featuring Nodemailer OTP verification, password hashing, and token-based session cookies.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "MERN Authentication OTP System",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Nodemailer"],
    stats: [
      { value: "Verified", label: "OTP Code" },
      { value: "Hashed", label: "Passwords" },
    ],
    period: "2023",
    github: "https://github.com/tushar2682/mern-authentication-with-otp-verification.git"
  },
  {
    id: "09",
    title: "Vercel Build Server Orchestrator",
    description:
      "A custom deployment server orchestrating project cloning, package dependency installs, code builds, and static hosting uploads.",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98aedd07871?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Vercel Build Orchestrator",
    technologies: ["TypeScript", "Node.js", "CLI Tools", "Shell Scripting"],
    stats: [
      { value: "Automated", label: "Builds" },
      { value: "Isolated", label: "Cloning" },
    ],
    period: "2024",
    github: "https://github.com/tushar2682/vercel.git"
  },
  {
    id: "10",
    title: "Web3 Decentralized Asset Ledger",
    description:
      "A Web3 project implementing decentralized smart contracts, enabling transparent peer-to-peer asset transfers on a distributed ledger.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Web3 Ledger System",
    technologies: ["Solidity", "Hardhat", "Ether.js", "React.js"],
    stats: [
      { value: "Smart", label: "Contracts" },
      { value: "Transparent", label: "Ledger" },
    ],
    period: "2024",
    github: "https://github.com/tushar2682/web3.git"
  },
  {
    id: "11",
    title: "Interactive Metaverse Environment",
    description:
      "An interactive, three-dimensional metaverse environment built with Three.js and custom shader physics, showcasing digital spatial computing.",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Interactive Metaverse Scene",
    technologies: ["JavaScript", "Three.js", "WebGL", "HTML5 Canvas"],
    stats: [
      { value: "3D Spatial", label: "Computing" },
      { value: "Real-time", label: "Physics" },
    ],
    period: "2023",
    github: "https://github.com/tushar2682/Metaverse.git"
  }
];

export default function Projects() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-16 md:py-32 relative" ref={elementRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 md:mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="text-gradient">Completed Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A showcase of software engineering projects demonstrating expertise in Java backend architectures,
            decentralized P2P networks, secure payment processing systems, and fintech solutions.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`section-enter ${isVisible ? "visible" : ""}`}
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                <motion.div
                  className={`${index % 2 === 0
                    ? "order-2 lg:order-1"
                    : "order-1 lg:order-2"
                    }`}
                  whileHover={{
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 5 : -5,
                    rotateX: 2
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ perspective: "1000px" }}
                >
                  <GlassCard className="p-4 sm:p-6 md:p-8 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-platinum/10 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl mb-4 md:mb-6"
                      data-testid={`img-project-${project.id}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {project.stats.length > 0 && (
                      <div className={`grid ${project.stats.length === 2 ? 'grid-cols-2' : project.stats.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'} gap-3 md:gap-4`}>
                        {project.stats.map((stat, statIndex) => (
                          <motion.div
                            key={stat.label}
                            className="text-center"
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              className="text-lg sm:text-xl md:text-2xl font-bold text-luxury-gold"
                              data-testid={`stat-${stat.label.toLowerCase()}-${project.id}`}
                              animate={{
                                textShadow: [
                                  "0 0 10px rgba(255, 215, 0, 0.5)",
                                  "0 0 20px rgba(255, 215, 0, 0.8)",
                                  "0 0 10px rgba(255, 215, 0, 0.5)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {stat.value}
                            </motion.div>
                            <div className="text-sm text-gray-400">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    <motion.div
                      className="absolute -top-2 -left-2 w-8 h-8 bg-luxury-gold rounded-full opacity-20"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />

                    <motion.div
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-luxury-platinum rounded-full opacity-30"
                      animate={{
                        x: [0, 10, 0],
                        rotate: [0, 180, 360],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </GlassCard>
                </motion.div>

                <motion.div
                  className={`${index % 2 === 0
                    ? "order-1 lg:order-2"
                    : "order-2 lg:order-1"
                    } px-4 sm:px-0`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  <motion.span
                    className="text-luxury-gold font-mono text-xs sm:text-sm block mb-3 md:mb-4"
                    animate={{
                      textShadow: [
                        "0 0 5px rgba(255, 215, 0, 0.5)",
                        "0 0 15px rgba(255, 215, 0, 0.8)",
                        "0 0 5px rgba(255, 215, 0, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {project.id}
                  </motion.span>

                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4 text-gradient"
                    data-testid={`title-project-${project.id}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-xs sm:text-sm text-luxury-gold mb-3 md:mb-4 font-medium"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    {project.period}
                  </motion.p>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.4 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 md:mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-luxury-gold/20 border border-luxury-gold/40 text-luxury-gold text-xs sm:text-sm rounded-full font-medium backdrop-blur-sm"
                        data-testid={`tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${project.id}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + techIndex * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 215, 0, 0.3)",
                          borderColor: "rgba(255, 215, 0, 0.7)",
                          boxShadow: "0 0 10px rgba(255, 215, 0, 0.4)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateX: -10, rotateY: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ perspective: "1000px" }}
                      className="flex-1 sm:flex-none"
                    >
                      <Button
                        className="premium-button w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-500 font-bold text-sm md:text-base tracking-wide shadow-lg relative overflow-hidden"
                        data-testid={`button-demo-${project.id}`}
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        View Project
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotateX: -10, rotateY: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ perspective: "1000px" }}
                      className="flex-1 sm:flex-none"
                    >
                      <Button
                        className="outline-button w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-500 font-bold text-sm md:text-base tracking-wide relative overflow-hidden"
                        data-testid={`button-code-${project.id}`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-l from-luxury-gold/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-600"
                          initial={{ x: "100%" }}
                          whileHover={{ x: "-100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        Technical Details
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}