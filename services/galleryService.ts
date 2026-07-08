import { apiClient } from "./apiClient";
import { ApiSuccessResponse, GalleryItem } from "../types";

export interface GalleryFormValues {
  title: string;
  caption?: string;
  image?: FileList;
}

function toFormData(values: GalleryFormValues) {
  const formData = new FormData();
  formData.append("title", values.title);
  if (values.caption) formData.append("caption", values.caption);
  if (values.image && values.image.length > 0) {
    formData.append("image", values.image[0]);
  }
  return formData;
}

export const galleryService = {
  getAll: async () => {
    const { data } = await apiClient.get<ApiSuccessResponse<GalleryItem[]>>("/gallery");
    return data.data;
  },
  getById: async (id: string) => {
    const { data } = await apiClient.get<ApiSuccessResponse<GalleryItem>>(`/gallery/${id}`);
    return data.data;
  },
  create: async (values: GalleryFormValues) => {
    const { data } = await apiClient.post<ApiSuccessResponse<GalleryItem>>(
      "/gallery",
      toFormData(values),
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return data.data;
  },
  update: async (id: string, values: GalleryFormValues) => {
    const { data } = await apiClient.put<ApiSuccessResponse<GalleryItem>>(
      `/gallery/${id}`,
      toFormData(values),
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return data.data;
  },
  delete: async (id: string) => {
    await apiClient.delete(`/gallery/${id}`);
  },
};
