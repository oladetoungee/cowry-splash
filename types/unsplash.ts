//type declaration
export interface UnsplashImage {
  id: string;
  urls: {
    regular: string; 
  };

  user: {
    name: string;
    location?: string; 
  };
  alt_description?: string;
}

export interface UnsplashPhoto extends UnsplashImage {
  description?: string;
  alt_description?: string;
}

export interface UnsplashService {
  getPhotos(query: string): Promise<UnsplashImage[]>; // Fetch a list of photos based on a search query
  getPhoto(photoId: string): Promise<UnsplashPhoto>; // Fetch detailed info for a specific photo
}
