import useSWR from 'swr';

import fetch from './fetch';

function useHoroscopeChinesse() {
  const { data, error } = useSWR('https://cronosservices.glr.pe/api/spotlight?site_id=comercial&_id=', fetch);
  return {
    horoscopeChinesse: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useHoroscopeChinesse;
