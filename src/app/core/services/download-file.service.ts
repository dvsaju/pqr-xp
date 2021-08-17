import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor() { }

  public descargarArchivo() {

    // this.writeContents()
  }

  private writeContents(content, filename, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.setAttribute('style', 'display: none');
    a.download = filename;
    a.href = URL.createObjectURL(file);
    a.click();
    a.remove(); // remove the element
  }


}
