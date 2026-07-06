import Link from "next/link";
import { Mail } from "lucide-react";
import SearchPanel from "./SearchPanel";
import InstagramIcon from "./InstagramIcon";
import TikTokIcon from "./TikTokIcon";

const INSTAGRAM_URL = "https://www.instagram.com/itschevere/";
const TIKTOK_URL = "https://www.tiktok.com/@itschevere";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="header-logo" href="/" aria-label="chévere home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo.png" alt="chévere" />
      </Link>
      <div className="header-actions">
        <SearchPanel />
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
          <InstagramIcon />
        </a>
        <a href={TIKTOK_URL} target="_blank" rel="noopener" aria-label="TikTok" title="TikTok">
          <TikTokIcon />
        </a>
        <Link href="/#newsletter" aria-label="Newsletter sign-up" title="Newsletter">
          <Mail strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
