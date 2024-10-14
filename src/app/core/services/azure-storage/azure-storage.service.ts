import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzureStorageService {
  private readonly httpClient: HttpClient = inject(HttpClient);



  public downloadBlobAsText(containerName: string, blobName: string): Observable<any> {
    const blobUrl = `https://jamcblogstorage.blob.core.windows.net/${containerName}/${blobName}`;
    return this.httpClient.get(blobUrl, { responseType: 'text' });
  }

  private blobToString(blob: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(blob);
    });
  }
}
