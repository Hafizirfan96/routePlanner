import { api } from '@/services/api';

export const logout = api.injectEndpoints({
  endpoints: builder => ({
    logOut: builder.mutation({
      query(deviceId) {
        return {
          url: `api/tour/logout/${deviceId}`,
          method: 'Delete',
        };
      },
    }),
  }),
});

export const { useLogOutMutation } = logout;
