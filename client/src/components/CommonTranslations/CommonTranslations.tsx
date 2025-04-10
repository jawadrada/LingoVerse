import { useState, useEffect } from "react";

function CommonTranslations() {
    type CommonTranslation = {
        id: number,
        text: string,
        translated_text: string,
        count: number,
    };

    const [error, setError] = useState(""); 
    const [isFetching, setIsFetching] = useState(false);
    const [commonTranslations, setCommontranslations] = useState<CommonTranslation[]>([]);

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
            } catch(error) {
                setError((error as Error).message);
                console.error("Failed to fetch common translations:", (error as Error).message);
            } finally {
                setIsFetching(false);
            }
        };

        fectchCommonTranslations();
    }, []);


  return (
    isFetching ? (
        <p>Fetching translations please wait...</p>
    ) : (
    <>
        <h3>Commonly Translated Words & Phrases</h3>
        {commonTranslations.map((translation) => (
            <li key={translation.id}>
                {translation.text} : {translation.translated_text}
            </li>
        ))}
    </> 
    )
  );
}

export default CommonTranslations;