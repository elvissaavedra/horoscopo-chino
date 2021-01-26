import useSWR from "swr";
import { ArrayHoroscope } from "../shared/constant/ConstantHoroscope";

import fetch from "./fetch";

function useHoroscopeChinesse() {
    const { data, error } = useSWR(`${process.env.REACT_APP_GRAPHQL_ENDPOINT}?site_id=larepublica&_id=${process.env.REACT_APP_SPOTLIGHT_ID}&status=1&cache=1440`, fetch);
    return {
        horoscopeChinesse: data?.data?.spotlight?.data
            ?.map((sign) =>
                sign?.data?.map((zodiacSign) => ({
                    ...zodiacSign?.fields?.reduce((prev, current) => {
                        prev[current.name] = current.value;
                        return prev;
                    }, {}),
                    ...ArrayHoroscope.find((sign) => zodiacSign.fields.find((item) => item.name === "url").value === sign.url),
                }))
            )[0]
            .sort((prev, curr) => {
                return prev.year - curr.year;
            }),
        isLoading: !error && !data,
        isError: error,
    };
}

export default useHoroscopeChinesse;
