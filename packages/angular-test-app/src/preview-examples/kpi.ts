import { Component } from '@angular/core';

@Component({
  selector: 'app-kpi',
  template: `
    <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>
    <ix-kpi label="Motor speed" value="{122.6}" unit="rpm"></ix-kpi>
    <ix-kpi label="Motor speed" value="{122.6}" state="alarm"></ix-kpi>
    <ix-kpi label="Motor speed" value="{122.6}" state="warning"></ix-kpi>

    <ix-kpi label="Motor speed" value="Nominal" orientation="vertical"></ix-kpi>
    <ix-kpi
      label="Motor speed"
      value="{122.6}"
      unit="rpm"
      state="alarm"
      orientation="vertical"
    ></ix-kpi>
  `,
})
export class Kpi {}
