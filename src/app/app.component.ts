import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-keep-clone';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer)
  {
    this.matIconRegistry.addSvgIcon(
      'bulb', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/bulb.svg')
      );

      this.matIconRegistry.addSvgIcon(
        'bell', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/bell.svg')
        );

        this.matIconRegistry.addSvgIcon(
          'pen', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/pen.svg')
          );

          this.matIconRegistry.addSvgIcon(
            'archive', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/archive.svg')
            );

            this.matIconRegistry.addSvgIcon(
              'bin', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/bin.svg')
              );
  }
}
