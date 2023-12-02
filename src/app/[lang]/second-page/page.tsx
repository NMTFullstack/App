import Link from "next/link";
import { useTranslation } from "@/common/i18n";
import { Footer } from "../components/Footer";

export default async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const { t } = await useTranslation(lang, "second-page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lang}`}>{t("back-to-home")}</Link>
      <Footer lang={lang} />
    </>
  );
}
