import { Component } from '@angular/core';

@Component({
  selector: 'app-flip-tile',
  template: `
    <ix-flip-tile>
      <div slot="header">Flip header</div>

      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div class="d-flex align-items-center">
          <ix-icon name="info" size="16"></ix-icon>2021-06-22
        </div>
      </div>

      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
    </ix-flip-tile>

    <ix-flip-tile state="Primary">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div class="d-flex align-items-center">
          <ix-icon name="info" size="16"></ix-icon>2021-06-22
        </div>
      </div>
      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
    </ix-flip-tile>

    <ix-flip-tile state="Info">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div class="d-flex align-items-center">
          <ix-icon name="info" size="16"></ix-icon>2021-06-22
        </div>
      </div>
      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
    </ix-flip-tile>

    <ix-flip-tile state="Warning">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div class="d-flex align-items-center">
          <ix-icon name="info" size="16"></ix-icon>2021-06-22
        </div>
      </div>
      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
    </ix-flip-tile>

    <ix-flip-tile state="Alarm">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div class="d-flex align-items-center">
          <ix-icon name="info" size="16"></ix-icon>2021-06-22
        </div>
      </div>
      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
    </ix-flip-tile>
  `,
})
export class FlipTile {}
