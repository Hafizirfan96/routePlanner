import { api } from '@/services/api';

export const tourApi = api.injectEndpoints({
  endpoints: build => ({
    fetchTourByCode: build.query({
      query: code => `api/Tour/${code}`,
    }),
  }),
  overrideExisting: false,
});
export const { useFetchTourByCodeQuery, useLazyFetchTourByCodeQuery } = tourApi;
