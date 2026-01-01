import { Button } from "@/components/ui/button";
import { openCookiePreferences } from "./CookieConsent";

export const CookieSettingsLink = () => {
  return (
    <Button
      variant="link"
      onClick={openCookiePreferences}
      className="text-sm text-muted-foreground hover:text-primary p-0 h-auto"
    >
      Customize Cookies
    </Button>
  );
};
