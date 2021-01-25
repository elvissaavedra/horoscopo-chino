import useSWR from "swr";
import { ArrayHoroscope } from "../shared/constant/ConstantHoroscope";

import fetch from "./fetch";

function useHoroscopeChinesse() {
    console.log("environment", process.env.GRAPHQLENDPOINT);
    const { data, error } = useSWR(`${process.env.GRAPHQLENDPOINT}?site_id=larepublica&_id=${process.env.SPOTLIGHT_ID}&no-api-cache=1&no-cache=1&status=1`, fetch);
    console.log("data", data);
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
