import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    window.location.assign("https://www.linkedin.com/company/makeaton/posts/");
  });
  return <></>;
}
