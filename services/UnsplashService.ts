// services/UnsplashService.ts
import type { UnsplashImage, UnsplashPhoto } from '~/types/unsplash'; // Import types as 'type'

export class UnsplashServiceFunction {
  private client_id = 'ehvujvFwz-J0t9jR8afwI8oRLLO3BJBwIEObcT7Qz7E';

  async getPhotos(query: string = 'africa'): Promise<UnsplashImage[]> {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${this.client_id}&query=${query}`
    );
    const data = await response.json();
    return data.results as UnsplashImage[];  // Cast the return type
  }

  async getPhoto(photoId: string): Promise<UnsplashPhoto> {
    const response = await fetch(
      `https://api.unsplash.com/photos/${photoId}/?client_id=${this.client_id}`
    );
    const data = await response.json();
    return data as UnsplashPhoto;  // Cast the return type
  }
}
