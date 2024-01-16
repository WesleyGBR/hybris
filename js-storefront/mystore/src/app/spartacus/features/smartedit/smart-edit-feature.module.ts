import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from "@spartacus/core";
import { SmartEditConfig, SmartEditRootModule, SMART_EDIT_FEATURE } from "@spartacus/smartedit/root";
import {SmartEditService} from "@spartacus/smartedit/core";

@NgModule({
  declarations: [],
  imports: [
    SmartEditRootModule
  ],
  providers: [
    provideConfig(<CmsConfig>{
    featureModules: {
      [SMART_EDIT_FEATURE]: {
        module: () =>
          import('@spartacus/smartedit').then((m) => m.SmartEditModule),
      },
    },
  }),
  provideConfig(<SmartEditConfig>{
    smartEdit: {
      storefrontPreviewRoute: 'cx-preview',
      allowOrigin: 'localhost:9002',
    },
  })
  ]
})
export class SmartEditFeatureModule {
  constructor(private smartEditService: SmartEditService) {
    this.smartEditService.processCmsPage();
  }
}