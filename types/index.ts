export interface GalleryItem {
  id: string;
  title: string;
  caption?: string | null;
  imageUrl: string;
  imagePath: string;
  createdAt: string;
  updatedAt: string;
}

export type NoteColor = "pink" | "blue" | "white" | "lavender";

export interface NoteItem {
  id: string;
  title: string;
  content: string;
  color: NoteColor;
  createdAt: string;
  updatedAt: string;
}

export interface Admin {
  id: string;
  email: string;
}

export interface ApiSuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: unknown;
}
