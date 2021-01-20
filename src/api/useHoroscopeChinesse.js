import useSWR from 'swr';

import fetch from './fetch';

function useHoroscopeChinesse() {
  const { data, error } = useSWR(
    'https://qacronosservices.glr.pe/api/spotlight?site_id=larepublica&_id=600865a8b511317c0f5b7cb4&no-api-cache=1&no-cache=1&status=1',
    fetch
  );
  console.log(data);
  return {
    horoscopeChinesse: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useHoroscopeChinesse;
