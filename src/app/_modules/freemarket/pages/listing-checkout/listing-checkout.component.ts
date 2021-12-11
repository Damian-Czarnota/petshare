import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ListingItem } from '@app/_core/models/listing-item';
import { first } from 'rxjs/operators';
import { LISTING_DATA } from 'src/data/listing.const';

@Component({
  templateUrl: './listing-checkout.component.html',
  styleUrls: ['./listing-checkout.component.scss']
})
export class ListingCheckoutComponent {
  item: ListingItem;
  
  constructor(private _activatedRoute: ActivatedRoute, private _title: Title) {
    _activatedRoute.params
      .pipe(first())
      .subscribe(params => {
        this.item = LISTING_DATA.find(p => p.slug === params.slug) || LISTING_DATA[0];
        
        _title.setTitle(`${this.item.title} - checkout | Pluto for You!`)
      })
    }

}
