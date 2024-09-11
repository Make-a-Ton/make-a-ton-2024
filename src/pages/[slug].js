import { useRouter } from "next/router";
import { useEffect } from "react";

const SocialRedirect = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      const socialLinks = {
        wa: "https://whatsapp.com/channel/0029ValGCQM60eBjNF5wS10C",
        twitter: "https://www.twitter.com/MakeaTonCusat",
        x: "https://www.twitter.com/MakeaTonCusat",
        linkedin: "https://www.linkedin.com/company/makeaton/posts/",
        telegram: "https://t.me/makeaton7",
        insta: "https://instagram.com/makeaton.cusat",
        instagram: "https://instagram.com/makeaton.cusat",
        rr: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

        // Add more mappings here
      };

      const url = socialLinks[slug];
      if (url) {
        window.location.href = url;
      } else {
        // Handle unknown slugs
        router.push("/");
      }
    }
  }, [slug, router]);

  return null;
};

export default SocialRedirect;
