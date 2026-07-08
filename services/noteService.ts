import { apiClient } from "./apiClient";
import { ApiSuccessResponse, NoteItem, NoteColor } from "../types";

export interface NoteFormValues {
  title: string;
  content: string;
  color?: NoteColor;
}

export const noteService = {
  getAll: async () => {
    const { data } = await apiClient.get<ApiSuccessResponse<NoteItem[]>>("/notes");
    return data.data;
  },
  getById: async (id: string) => {
    const { data } = await apiClient.get<ApiSuccessResponse<NoteItem>>(`/notes/${id}`);
    return data.data;
  },
  create: async (values: NoteFormValues) => {
    const { data } = await apiClient.post<ApiSuccessResponse<NoteItem>>("/notes", values);
    return data.data;
  },
  update: async (id: string, values: NoteFormValues) => {
    const { data } = await apiClient.put<ApiSuccessResponse<NoteItem>>(`/notes/${id}`, values);
    return data.data;
  },
  delete: async (id: string) => {
    await apiClient.delete(`/notes/${id}`);
  },
};
