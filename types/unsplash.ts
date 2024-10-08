// types/unsplash.d.ts
export interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
  user: {
    name: string;
    location?: string;
  };
}

export interface UnsplashPhoto extends UnsplashImage {
  description?: string;
  alt_description?: string;
  // Add other fields you may need from the detailed photo response
}

export interface UnsplashService {
  getPhotos(query: string): Promise<UnsplashImage[]>;
  getPhoto(photoId: string): Promise<UnsplashPhoto>;
}
