import useSWR from "swr";

import fetch from "./fetch";

function useHoroscopeChinesse() {
    const { data, error } = useSWR("https://qacronosservices.glr.pe/api/spotlight?site_id=larepublica&_id=600863edae8c7e50bd428c64&no-api-cache=1&no-cache=1&status=1", fetch);
    return {
        horoscopeChinesse: data?.data?.spotlight?.data,
        isLoading: !error && !data,
        isError: error,
    };
}

export default useHoroscopeChinesse;
