import type { UnsplashImage, UnsplashPhoto } from '~/types/unsplash'; // Import types

export class UnsplashServiceFunction {
  // I used environment variable for client ID to keep the key secure
  private client_id = import.meta.env.VITE_UNSPLASH_CLIENT_ID;


  // This fetches a list of photos from Unsplash based on the search query
  async getPhotos(query: string = 'africa'): Promise<UnsplashImage[]> {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${this.client_id}&query=${query}`
    );
    const data = await response.json();
    return data.results as UnsplashImage[];  
  }

  // This fetches a single photo's details from Unsplash by photo ID
  async getPhoto(photoId: string): Promise<UnsplashPhoto> {
    const response = await fetch(
      `https://api.unsplash.com/photos/${photoId}/?client_id=${this.client_id}`
    );
    const data = await response.json();
    return data as UnsplashPhoto;  
  }
}
