import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-intent',
  templateUrl: './edit-intent.component.html',
  styleUrls: ['./edit-intent.component.scss']
})
export class EditIntentComponent implements OnInit {

  name: string = null;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.queryParamMap.get('name');
  }

}
