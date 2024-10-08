//type declaration
export interface UnsplashImage {
  id: string;
  urls: {
    regular: string; // URL for the regular-sized image
  };
  user: {
    name: string;
    location?: string; // Optional location of the user
  };
}

export interface UnsplashPhoto extends UnsplashImage {
  description?: string;
  alt_description?: string;
}

export interface UnsplashService {
  getPhotos(query: string): Promise<UnsplashImage[]>; // Fetch a list of photos based on a search query
  getPhoto(photoId: string): Promise<UnsplashPhoto>; // Fetch detailed info for a specific photo
}
