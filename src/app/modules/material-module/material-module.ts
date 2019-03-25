import { NgModule } from '@angular/core';

import {
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,

  } from '@angular/material';

  @NgModule({
    imports: [
      MatFormFieldModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      MatCheckboxModule, 
      MatFormFieldModule,

    ],
    exports: [
      MatSelectModule,
      MatFormFieldModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      MatCheckboxModule,
      MatFormFieldModule,
    ]
  })
  export class MaterialModule {}
