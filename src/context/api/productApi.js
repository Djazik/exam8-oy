import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({ 
        url: '/product', 
        params 
      }),
      providesTags:["Product"]
    }),
    getCategory: build.query({
      query: (params) => ({ 
        url: '/category', 
        params 
      }),
      providesTags:["Category"]
    }),
    getDetailProduct: build.query({
      query: (id) => ({ 
        url: `/product/${id}`
      }),
      providesTags:["Product"]
    }),
    createProduct: build.mutation({
      query: (body)=> ({
        url:"/product",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    deleteProduct: build.mutation({
      query: (id)=> ({
        url:`/product/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    }),
    updateProduct: build.mutation({
      query: ({id, body})=> ({
        url:`/product/${id}`,
        method: "PUT", // or "PATCH"
        body
      }),
      invalidatesTags: ["Product"]
    }),
    getSearchProducts: build.query({
      query: function(params){
        return {
          url: `/product?search`,
          method: "GET",
          params
        }
      }
    }),
    invalidatesTags: ["Product"]

  }),
})

export const {
  useGetProductsQuery,
  useGetCategoryQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetDetailProductQuery,
  useGetSearchProductsQuery
  
  } = productApi