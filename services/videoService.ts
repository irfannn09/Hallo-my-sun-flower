import { apiClient } from "./apiClient";
import { ApiSuccessResponse, VideoItem } from "../types";

export interface VideoFormValues {
  title: string;
  caption?: string;
  video?: FileList;
}

function toFormData(values: VideoFormValues) {
  const formData = new FormData();
  formData.append("title", values.title);
  if (values.caption) formData.append("caption", values.caption);
  if (values.video && values.video.length > 0) {
    formData.append("video", values.video[0]);
  }
  return formData;
}

export const videoService = {
  getAll: async () => {
    const { data } = await apiClient.get<ApiSuccessResponse<VideoItem[]>>("/videos");
    return data.data;
  },
  getById: async (id: string) => {
    const { data } = await apiClient.get<ApiSuccessResponse<VideoItem>>(`/videos/${id}`);
    return data.data;
  },
  create: async (values: VideoFormValues) => {
    const { data } = await apiClient.post<ApiSuccessResponse<VideoItem>>(
      "/videos",
      toFormData(values),
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return data.data;
  },
  update: async (id: string, values: VideoFormValues) => {
    const { data } = await apiClient.put<ApiSuccessResponse<VideoItem>>(
      `/videos/${id}`,
      toFormData(values),
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return data.data;
  },
  delete: async (id: string) => {
    await apiClient.delete(`/videos/${id}`);
  },
};
