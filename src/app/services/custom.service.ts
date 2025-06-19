import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getFaviconQuery } from '../graphql/queries/queries';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  apollo = inject(Apollo);

  getAndSetFavicon() {
    this.apollo.query({
      query: getFaviconQuery
    }).subscribe(({ data }: any) => {
      const { base64, contentType } = data.profileImage;
      const byteCharacters = atob(base64);
      const byteNumbers = Array.from(byteCharacters).map(c => c.charCodeAt(0));
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: contentType });
      const blobUrl = URL.createObjectURL(blob);
      this.setFaviconFromBlob(blobUrl);
    });
  }

  setFaviconFromBlob(blobUrl: string): void {
    const img = new Image();
    img.onload = () => {
      const size = 32; // Standard favicon size
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Optional: Crop into a circle
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      ctx.drawImage(img, 0, 0, size, size);

      const resizedFaviconUrl = canvas.toDataURL('image/png');

      // Replace or create the favicon link tag
      let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }

      link.type = 'image/png';
      link.href = resizedFaviconUrl;

      // Revoke object URL to free memory
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    };

    img.onerror = () => console.error("Failed to load blob image for favicon.");
    img.src = blobUrl;
  }

  isValidNumber(str: string): boolean {
    if (str.trim() === '') return false;
    return !isNaN(Number(str));
  }

  setFavicon(iconUrl: string): void {
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");

    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    link.type = 'image/png';
    link.href = iconUrl;
  }
}
