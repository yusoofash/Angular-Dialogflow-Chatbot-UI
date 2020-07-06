import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChatUiService } from 'src/app/shared/services/chat-ui.service';
import { Intent } from 'src/app/shared/models/showIntent.model';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-intent',
  templateUrl: './show-intent.component.html',
  styleUrls: ['./show-intent.component.scss']
})
export class ShowIntentComponent implements OnInit {

  $intents: Observable<Intent[]>;

  constructor(
    private chatService: ChatUiService,
    private dialogService: NbDialogService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.fetchIntents();
  }

  fetchIntents() {
    this.$intents = this.chatService.showIntent();
  }

  confirmDelete(template: TemplateRef<any>, intentName: string) {
    this.dialogService.open(template, { context: 'Are you sure?' })
      .onClose.subscribe(isDelete => {
        if (isDelete) {
          this.deleteIntent(intentName);
        }
      });
  }

  private deleteIntent(intentName: string) {
    this.chatService.deleteIntent(intentName)
      .subscribe(() => {
        this.toastr.success('Intent Deleted');
        this.ngOnInit();
      }, err => {
        this.toastr.error(err.error.message || 'An error occured');
      });
  }

}
