import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        transition(':enter', [
            style({
                opacity: 0,
            }),
            animate('150ms ease-in', style({
                opacity: 1,
            }))
        ]),
        transition(':leave', [
            style({
                opacity: 1,
            }),
            animate('150ms ease-out', style({
                opacity: 0,
            }))
        ])
    ]);
