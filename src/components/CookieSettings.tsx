import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { openCookiePreferences } from "./CookieConsent";

export const CookieSettingsLink = () => {
  const { t } = useTranslation();

  return (
    <Button
      variant="link"
      onClick={openCookiePreferences}
      className="text-sm text-muted-foreground hover:text-primary p-0 h-auto"
    >
      {t("cookie.customize")}
    </Button>
  );
};
