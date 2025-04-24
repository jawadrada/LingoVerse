import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { US, LB } from "country-flag-icons/react/3x2";
import "./CommonTranslations.css";

function CommonTranslations() {
  type CommonTranslation = {
    id: number;
    text: string;
    translated_text: string;
    count: number;
  };

  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [commonTranslations, setCommontranslations] = useState<CommonTranslation[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    async function fectchCommonTranslations() {
      try {
        setIsFetching(true);
        const response = await fetch("http://127.0.0.1:8000/api/translations/");

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setCommontranslations(data.response);
      } catch (err) {
        setError((err as Error).message);
        console.log(error);
        console.error(
          "Failed to fetch common translations:",
          (err as Error).message
        );
      } finally {
        setIsFetching(false);
      }
    }

    fectchCommonTranslations();
  }, [error]);

  return isFetching ? (
    <p>Fetching translations please wait...</p>
  ) : (
    <>
      <div className="common-translation-container">
        <h2>{t("Commonly Traslated Title")}</h2>
        <table>
          <thead>
            <tr>
              <th>
                <US
                  style={{
                    width: "20px",
                    verticalAlign: "middle",
                    height: "auto",
                    borderRadius: "1px",
                  }}
                />{" "}
                {t('common_translations_source')}
              </th>
              <th>
                <LB
                  style={{
                    width: "20px",
                    verticalAlign: "middle",
                    height: "auto",
                    borderRadius: "1px",
                  }}
                />{" "}
                {t('common_translations_target')}
              </th>
            </tr>
          </thead>
          <tbody>
            {commonTranslations.slice(0, 10).map((translation, index) => (
              <tr key={index}>
                <td>
                  {translation.text.charAt(0).toUpperCase() +
                    translation.text.slice(1).toLowerCase()}
                </td>
                <td>{translation.translated_text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CommonTranslations;
