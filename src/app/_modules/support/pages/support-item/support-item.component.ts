import { Component, OnInit } from '@angular/core';
import { Support } from '@app/_core/models/support';
import { SUPPORT_DATA } from 'src/data/support.const';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-support-item',
  templateUrl: './support-item.component.html',
  styleUrls: ['./support-item.component.scss']
})
export class SupportItemComponent implements OnInit {

  data: Support;

  constructor(private _activatedRoute: ActivatedRoute, private _title: Title) {
    _activatedRoute.params
      .pipe(first())
      .subscribe(params => {
        this.data = SUPPORT_DATA.find(p => p.slug === params.slug) || SUPPORT_DATA[0];

        _title.setTitle(`${this.data.title} | Pluto for You!`)
      })

  }

  ngOnInit(): void {
  }

}
