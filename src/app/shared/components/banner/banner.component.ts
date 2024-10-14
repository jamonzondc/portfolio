import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnInit, PLATFORM_ID, Renderer2, Signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  styles: [`
  .canvasWrapper {
    padding: 6px;
}
    `],
  template: `
  <div class="canvasWrapper">
  <canvas #canvas id="tetrisBoardId"></canvas>
</div>
`
})
export class BannerComponent implements AfterViewInit {
  private platformId: Object = inject(PLATFORM_ID);
  protected canvas!: HTMLCanvasElement | null;
  protected context!: CanvasRenderingContext2D | null | undefined;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.canvas = document.querySelector('#tetrisBoardId');
    this.context = this.canvas?.getContext('2d');
    if (!this.canvas) return;

    this.canvas.style.width = '100%';
    this.canvas.height = 150;
    this.drawLoop();
  }

  //TODO refactory for get less code lines
  private async drawLoop(time: number = 0): Promise<void> {
    this.draw();
    requestAnimationFrame((time: number = 0) => this.drawLoop(time));
  }

  protected draw(updateHint?: boolean): void {
    if (!this.canvas || !this.context) return;
    this.drawBoard();

  }

  protected drawBoard(): void {
    this.context!.fillStyle = '#000';
    this.context!.fillRect(0, 0, this.canvas!.width, this.canvas!.height);

  }
}
