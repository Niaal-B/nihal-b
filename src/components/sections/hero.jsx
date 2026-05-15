"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import XTwitterIcon from "@/components/icons/x-twitter";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import DiscordIcon from "@/components/icons/discord";
import { IoIosMail } from "react-icons/io";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";
import { GeistPixelSquare } from "geist/font/pixel";
import GitHubContributionGraph from "./contribution-graph";
import ClipboardIcon from "@/components/icons/clipboard";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { notableAchievements, events } from "@/constants";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import LocationIcon from "@/components/icons/location";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] },
});

const socialLinks = [
  {
    label: "Github",
    href: "https://github.com/Niaal-B",
    icon: <GithubIcon className="h-3.5 w-3.5" />,
    external: true,
    platform: "github",
    username: "Niaal-B",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nihal-b-b07408254/",
    icon: <LinkedinIcon className="h-3.5 w-3.5" />,
    external: true,
    platform: "linkedin",
    username: "nihal-b-b07408254",
  },
  {
    label: "Email",
    href: "mailto:nihnihal504@gmail.com",
    icon: <IoIosMail size="14px" />,
    external: true,
  },
];

const achievementStats = [
  { value: "Full Stack", label: "Developer" },
  { value: "Django", label: "Expertise" },
  { value: "React", label: "Frontend" },
  { value: "Docker", label: "Infra" },
];

const achievementMeta = {
  "Production Systems": {
    kicker: "Architecture",
    signal: "Scalability",
  },
  "Real-time Systems": {
    kicker: "Communication",
    signal: "WebSockets",
  },
  Infrastructure: {
    kicker: "Deployment",
    signal: "Docker",
  },
};

const hatchDividerClassName =
  "h-8 w-full border-y border-black/[0.08] text-foreground opacity-[0.06] [background-image:repeating-linear-gradient(-45deg,transparent,transparent_2px,currentColor_2px,currentColor_3px,transparent_3px,transparent_6px)] dark:border-[#eee] dark:text-white";

const dotMatrixDividerClassName =
  "h-7 w-full border-b border-black/[0.08] text-foreground opacity-[0.08] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:12px_12px] dark:border-white/[0.1] dark:text-white";

function AchievementBody({ body }) {
  if (!Array.isArray(body)) return body;

  return body.map((seg, i) =>
    seg.href === "/events" ? (
      <EventsHoverLink key={i} />
    ) : seg.href ? (
      <Link
        key={i}
        href={seg.href}
        className="font-semibold text-foreground underline underline-offset-2 transition-colors hover:text-foreground/70"
      >
        {seg.text}
      </Link>
    ) : seg.bold ? (
      <strong key={i} className="font-semibold text-foreground">
        {seg.text}
      </strong>
    ) : (
      <span key={i}>{seg.text}</span>
    ),
  );
}

function SocialPreviewCard({ loading, data, platform, username }) {
  if (loading) {
    return (
      <div className="flex w-[320px] animate-pulse flex-col gap-4 font-space-mono">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-full bg-muted"></div>
          <div className="flex flex-col gap-2">
            <div className="h-4 w-32 rounded bg-muted"></div>
            <div className="h-3 w-20 rounded bg-muted"></div>
          </div>
        </div>
        <div className="h-10 w-full rounded bg-muted"></div>
        <div className="h-4 w-24 rounded bg-muted"></div>
        <div className="mt-2 flex gap-4">
          <div className="h-4 w-16 rounded bg-muted"></div>
          <div className="h-4 w-16 rounded bg-muted"></div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="flex w-[320px] flex-col gap-2 text-left font-space-mono">
      {data.banner && (
        <div className="-mx-4 -mt-4 mb-2 h-20 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.banner}
            alt="Banner"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div
        className={`relative z-10 flex gap-3 ${data.banner ? "-mt-12 flex-col items-start" : "items-center"}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.avatar || "https://github.com/shivabhattacharjee.png"}
          alt={data.name}
          className={`rounded-full bg-background object-cover ${data.banner ? "h-[68px] w-[68px] border-[3px] border-card" : "h-14 w-14 border border-border"}`}
        />
        <div className={`flex flex-col ${data.banner ? "-mt-1" : ""}`}>
          <span className="font-doto text-base font-bold text-foreground">
            {data.name}
          </span>
          <span className="text-sm text-muted-foreground">{data.username}</span>
        </div>
      </div>
      {data.bio && (
        <p className="line-clamp-3 text-sm text-foreground">{data.bio}</p>
      )}
      {data.location && (
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <LocationIcon className="h-4 w-4 shrink-0" />
          <span className="line-clamp-1">{data.location}</span>
        </div>
      )}
      {data.stats && data.stats.length > 0 && (
        <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
          {data.stats.map((stat, i) => (
            <span key={i}>
              <strong className="font-doto font-semibold text-foreground">
                {stat.value}
              </strong>{" "}
              {stat.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function AchievementLinkIcon({ href, label }) {
  const normalizedHref = href?.toLowerCase() ?? "";
  const normalizedLabel = label?.toLowerCase() ?? "";

  if (
    normalizedHref.includes("github.com") ||
    normalizedLabel.includes("github")
  ) {
    return <GithubIcon className="h-3 w-3" />;
  }

  if (
    normalizedHref.includes("x.com") ||
    normalizedHref.includes("twitter.com") ||
    normalizedLabel.includes("x")
  ) {
    return <XTwitterIcon className="h-3 w-3" />;
  }

  return <ExternalLink className="h-3 w-3" />;
}

function openAchievementLink(href) {
  const opened = window.open(href, "_blank", "noopener,noreferrer");

  if (opened) {
    opened.opener = null;
  }
}

function EventsHoverLink() {
  const [isHovered, setIsHovered] = useState(false);
  const [canShowPreview, setCanShowPreview] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updatePreviewMode = () => {
      setCanShowPreview(mediaQuery.matches);
    };

    updatePreviewMode();
    mediaQuery.addEventListener("change", updatePreviewMode);

    return () => mediaQuery.removeEventListener("change", updatePreviewMode);
  }, []);

  const handleMouseMove = (e) => {
    const tooltipWidth = Math.min(480, window.innerWidth - 16);
    const nextX = Math.min(
      Math.max(8, e.clientX - tooltipWidth / 2),
      window.innerWidth - tooltipWidth - 8,
    );
    const nextY = Math.min(e.clientY + 12, window.innerHeight - 8);

    x.set(nextX);
    y.set(nextY);
  };

  const handleMouseEnter = (e) => {
    const tooltipWidth = Math.min(480, window.innerWidth - 16);
    const nextX = Math.min(
      Math.max(8, e.clientX - tooltipWidth / 2),
      window.innerWidth - tooltipWidth - 8,
    );
    const nextY = Math.min(e.clientY + 12, window.innerHeight - 8);

    x.set(nextX);
    y.set(nextY);
    springX.jump(nextX);
    springY.jump(nextY);
    setIsHovered(true);
  };

  const wins = events.filter((h) => h.placement);

  return (
    <span
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Link href="/events" className="font-semibold text-foreground underline underline-offset-2">
        {events.length} {events.length === 1 ? "event" : "events"}
      </Link>
      <AnimatePresence>
        {canShowPreview && isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex w-[min(480px,calc(100vw-1rem))] flex-col gap-3 overflow-hidden rounded-xl border border-white/20 bg-background/30 p-4 shadow-2xl backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10"
            style={{
              position: "fixed",
              left: springX,
              top: springY,
              zIndex: 9999,
              pointerEvents: "none",
            }}
          >
            <p className="font-space-mono text-[10px] uppercase text-muted-foreground">
              hackathon wins
            </p>
            <ul className="flex flex-col gap-2">
              {wins.map((h) => (
                <li key={h.title} className="flex items-center justify-between gap-2 font-space-mono text-xs">
                  <span className="font-semibold text-foreground">{h.title}</span>
                  <span className="shrink-0 text-muted-foreground">{h.placement} · {h.event}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

function SocialButton({
  label,
  href,
  icon,
  external,
  platform,
  username,
  data,
  loading,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    x.set(e.clientX - 160);
    y.set(e.clientY + 12);
  };

  const handleMouseEnter = (e) => {
    x.set(e.clientX - 160);
    y.set(e.clientY + 12);
    springX.jump(e.clientX - 160);
    springY.jump(e.clientY + 12);
    setIsHovered(true);
  };

  const content = (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <CornerBrackets>
        <Button size="sm" variant="noShadow">
          {icon}
          <span className="ml-1.5">{label}</span>
        </Button>
      </CornerBrackets>
    </Link>
  );

  if (platform && username) {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative"
      >
        {content}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex w-[320px] flex-col gap-3 overflow-hidden rounded-xl border border-white/20 bg-background/30 p-4 shadow-2xl backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10"
              style={{
                position: "fixed",
                left: springX,
                top: springY,
                zIndex: 9999,
                pointerEvents: "none",
              }}
            >
              <SocialPreviewCard
                platform={platform}
                username={username}
                data={data}
                loading={loading}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return content;
}

const WaveEmoji = () => {
  const [phase, setPhase] = useState("idle");
  const [key, setKey] = useState(0);

  useEffect(() => {
    setPhase("waving");
    const timer = setTimeout(() => setPhase("grayscale"), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setKey((k) => k + 1);
    setPhase("hover-wave");
  };

  const handleMouseLeave = () => {
    setPhase("grayscale");
  };

  const isWaving = phase === "waving" || phase === "hover-wave";
  const isGrayscale = phase === "grayscale";

  return (
    <span
      key={key}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block origin-[70%_70%] cursor-default transition-all duration-500 ${isWaving ? "animate-wave-slow" : ""} ${isGrayscale ? "grayscale" : ""}`}
    >
      👋🏻
    </span>
  );
};

const Hero = ({ contributionData = [], lifetimeTotal = 0 }) => {
  const [socialData, setSocialData] = useState(null);
  const [socialsLoading, setSocialsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/api/socials")
      .then((res) => res.json())
      .then((data) => {
        if (mounted && !data.error) {
          setSocialData(data);
        }
        if (mounted) setSocialsLoading(false);
      })
      .catch(() => {
        if (mounted) setSocialsLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="mx-auto flex flex-col gap-10 md:max-w-4xl">
      <motion.div className="flex flex-col gap-6" {...fadeUp(0)}>
        <div className={GeistPixelSquare.className}>
          <p className="mb-3 font-doto text-xs text-muted-foreground md:text-sm">
            Hola I&apos;m <WaveEmoji />
          </p>

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h1 className="text-2xl font-bold uppercase tracking-tight md:text-4xl">
              Nihal B
            </h1>
          </div>

          <p className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground md:text-sm">
            Full Stack Developer focused on building complete web solutions
          </p>
        </div>

        <motion.div
          className={`flex flex-row items-end gap-4 p-1 ${GeistPixelSquare.className}`}
          {...fadeUp(0.08)}
        >
        </motion.div>
      </motion.div>

      <div className="space-y-8">
        <motion.div {...fadeUp(0.15)}>
          <h5 className="mb-4 font-doto text-2xl font-medium md:text-3xl">
            About Me
          </h5>
          <p className="font-space-mono text-xs text-muted-foreground md:text-base md:leading-relaxed">
            I&apos;m Nihal, a{" "}
            <strong className="font-semibold text-foreground">
              Full Stack Developer
            </strong>{" "}
            passionate about building complete, production-style web applications. My primary expertise includes Python, Django, React, Next.js, FastAPI, PostgreSQL, Docker, and real-time systems.
          </p>
          <p className="mt-4 font-space-mono text-xs text-muted-foreground md:text-base md:leading-relaxed">
            I&apos;ve built projects ranging from mentorship platforms with real-time communication to full-stack e-commerce solutions. I enjoy solving complex architecture problems across the entire stack, from building robust APIs to crafting intuitive user interfaces.
          </p>
          <p className="mt-4 font-space-mono text-xs text-muted-foreground md:text-base md:leading-relaxed">
            I&apos;ve also undergone intensive practical training through a bootcamp environment, which strengthened my problem-solving skills, self-learning ability, and hands-on development experience.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.25)}>
          <p className="mb-3 text-xs text-muted-foreground md:text-sm">
            My{" "}
            <span className="font-semibold text-foreground">social links</span>{" "}
            if you wish to connect with me
          </p>
          <div className="flex flex-wrap gap-2 p-1">
            {socialLinks.map(
              ({ label, href, icon, external, platform, username }) => (
                <SocialButton
                  key={label}
                  label={label}
                  href={href}
                  icon={icon}
                  external={external}
                  platform={platform}
                  username={username}
                  data={socialData?.[platform]}
                  loading={socialsLoading}
                />
              ),
            )}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.35)}>
          <GitHubContributionGraph
            data={contributionData}
            lifetimeTotal={lifetimeTotal}
          />
        </motion.div>

        <motion.div {...fadeUp(0.45)}>
          <h5 className="mb-4 font-doto text-2xl font-medium md:text-3xl">
            Notable achievements
          </h5>
          <ul className="list-disc list-inside space-y-4 marker:text-muted-foreground/40">
            {notableAchievements.map(({ title, body, link, linkLabel }) => (
              <li
                key={title}
                className="font-space-mono text-xs text-muted-foreground md:text-base md:leading-relaxed"
              >
                <strong className="font-semibold text-foreground">
                  {title}
                </strong>
                {" — "}
                <AchievementBody body={body} />
                {link && (
                  <>
                    {" "}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-foreground/70 underline underline-offset-2 hover:text-foreground"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {linkLabel && <span>{linkLabel}</span>}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
