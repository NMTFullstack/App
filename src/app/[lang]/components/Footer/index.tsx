"use client";

import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/common/i18n/settings";
import { useTranslation } from "@/common/i18n";

export const Footer = async ({ lang }: { lang: string }) => {
  const { t } = await useTranslation(lang, "footer");
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lang}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lang !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};
