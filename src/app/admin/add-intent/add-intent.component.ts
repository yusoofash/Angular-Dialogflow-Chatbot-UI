import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ChatUiService } from 'src/app/shared/services/chat-ui.service';
import { Intent } from 'src/app/shared/models/showIntent.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface IntentClient {
  displayName: string;
  trainingPhrasesParts: string[];
  messageTexts: string[];
}

@Component({
  selector: 'app-add-intent',
  templateUrl: './add-intent.component.html',
  styleUrls: ['./add-intent.component.scss']
})
export class AddIntentComponent implements OnInit {

  intentForm: FormGroup;
  @Input()
  title = 'Add';
  @Input()
  name: string = null;

  constructor(
    private fb: FormBuilder,
    private chatService: ChatUiService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createForm();
    if (this.name) {
      this.findDataAndPatchForm();
    } else {
      // push empty values
      this.pushTrainingPhrase();
      this.pushMessageText();
    }
  }

  get f() {
    return this.intentForm.controls;
  }

  private findDataAndPatchForm() {
    this.chatService.showIntentById(this.name)
      .subscribe(res => {
        this.intentForm.patchValue({
          displayName: res.displayName,
        });

        // push response
        res.messages.forEach(msg => {
          msg.text.text.forEach(text => this.pushMessageText(text));
        });

        // push training phrase
        res.trainingPhrases.forEach(phrase => {
          phrase.parts.forEach(text => this.pushTrainingPhrase(text.text));
        });
      });
  }

  pushTrainingPhrase(phrase = '') {
    (this.f.trainingPhrasesParts as FormArray).push(
      this.fb.control(phrase, Validators.required)
    );
  }

  removeTrainingPhrase(i: number) {
    (this.f.trainingPhrasesParts as FormArray).removeAt(i);
  }

  pushMessageText(msg = '') {
    (this.f.messageTexts as FormArray).push(
      this.fb.control(msg, Validators.required)
    );
  }

  removeMessageText(i: number) {
    (this.f.messageTexts as FormArray).removeAt(i);
  }

  private createForm() {
    this.intentForm = this.fb.group({
      displayName: ['', Validators.required],
      trainingPhrasesParts: this.fb.array([]),
      messageTexts: this.fb.array([]),
      // inputContextNames,
      // outputContexts
    });
  }

  onSubmit(data: IntentClient) {
    if (this.name) {
      this.editIntent(data);
    } else {
      this.saveIntent(data);
    }
  }

  private editIntent(data: IntentClient) {
    const intent: Partial<Intent> = {
      name: this.name,
      displayName: data.displayName,
      messages: [{
        message: 'text',
        text: { text: data.messageTexts.map(msg => msg) }
      }],
      trainingPhrases: data.trainingPhrasesParts.map(phrase => ({
        parts: data.trainingPhrasesParts.map(text => ({
          text
        }))
      })),
    };

    this.chatService.patchIntent(intent)
      .subscribe(() => {
        this.toastr.success('Intent edited successfully!');
        this.router.navigate(['/admin']);
      }, err => {
        this.toastr.error(err.error.message || 'An error occured');
      });
  }

  private saveIntent(intent: IntentClient) {
    this.chatService.postIntent(intent)
      .subscribe(() => {
        this.toastr.success('Intent created successfully!');
        this.router.navigate(['/admin']);
      }, err => {
        this.toastr.error(err.error.message || 'An error occured');
      });
  }

}
