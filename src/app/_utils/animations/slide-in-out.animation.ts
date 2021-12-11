import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '500px', overflow: 'hidden'
        })),
        state('out', style({
            'max-height': '0px', overflow: 'hidden'
        })),
        state('out-32px', style({
            'max-height': '32px', overflow: 'hidden'
        })),
        transition('in => out', [group([
                animate('600ms ease-in-out', style({
                    'max-height': '0px'
                })),
            ]
        )]),
        transition('in => out-32px', [group([
                animate('600ms ease-in-out', style({
                    'max-height': '32px'
                })),
            ]
        )]),
        transition('out => in', [group([
                animate('600ms ease-in-out', style({
                    'max-height': '500px'
                }))
            ]
        )]),
        transition('out-32px => in', [group([
                animate('600ms ease-in-out', style({
                    'max-height': '500px'
                }))
            ]
        )])
    ]),
];
