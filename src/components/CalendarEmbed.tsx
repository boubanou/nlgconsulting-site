import { useEffect } from "react";

export default function CalendarEmbed() {
  useEffect(() => {
    const id = "calendly-lib";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      className="w-full min-h-[900px]"
      data-auto-load="false"
    >
      <iframe
        title="Book a 15-min call"
        src="https://calendly.com/greg-nlgconsulting/15min?hide_gdpr_banner=1"
        className="w-full h-[900px] border-0"
      />
    </div>
  );
}
