import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {baseQuery} from "./baseQuery";
import {customHeaders} from "../constants/headers";

const baseUrl = process.env.BASE_URL;

export const generateApi = (config) => createApi({
  reducerPath: config.name,
  tagTypes: [config.name],
  baseQuery: baseQuery(baseUrl, customHeaders),
  endpoints: (build) => ({
    // getConfigs: build.query<void, void>({
    //   query: () => ({
    //     url: 'config.endpoints.getList.endpoint',
    //     method: 'config.endpoints.getList.method',
    //   }),
    //   providesTags: () => [config.name],
    // }),
    getList: build.query<void, void>({
      query: () => ({
        url: config.endpoints.getList.endpoint,
        method: config.endpoints.getList.method,
      }),
      providesTags: () => [config.name],
    }),
    
    create: build.mutation<void, void>({
      query: (element) => ({
        url: config.endpoints.create.endpoint,
        method: config.endpoints.create.method,
        body: element,
      }),
      invalidatesTags: () => [config.name],
    }),
  
    getOne: build.mutation<void, string>({
      query: (id) => ({
        url: `${config.endpoints.getOne.endpoint}/${id}`,
        method: config.endpoints.getOne.method,
      }),
      invalidatesTags: [config.name],
    }),
    
    update: build.mutation<void, void>({
      query: (element) => ({
        url: config.endpoints.update.endpoint,
        method: config.endpoints.update.method,
        body: element,
      }),
      invalidatesTags: [config.name],
    }),
    
    remove: build.mutation<void, string>({
      query: (id) => ({
        url: `${config.endpoints.delete.endpoint}/${id}`,
        method: config.endpoints.delete.method,
      }),
      invalidatesTags: [config.name],
    }),
  }),
})
