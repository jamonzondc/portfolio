import { Component, inject, OnInit } from '@angular/core';
import { AzureStorageService } from '../../core/services/azure-storage/azure-storage.service';
import { BlogComponent } from '../blog/blog.component';
import { TextMachineComponent } from '@shared/components/text-machine/text-machine.component';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { BlogsComponent } from './components/blogs/blogs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogComponent, TextMachineComponent, BannerComponent, BlogsComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly azureStorageService: AzureStorageService = inject(AzureStorageService);
  markdown: string = '';

  ngOnInit(): void {
    this.azureStorageService.downloadBlobAsText('blogs', 'm.md').subscribe((data: any): void => {
      this.markdown = data;
    });
  }

}
