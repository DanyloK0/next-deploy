import { useTranslations } from "next-intl";

export default function Viste() {
    const t = useTranslations('Index');
    return (
        <div >
            <h1>{t("readOnly")}</h1>
        </div>
    )
}
