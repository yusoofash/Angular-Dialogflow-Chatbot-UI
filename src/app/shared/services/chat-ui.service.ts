import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Intent } from '../models/showIntent.model';
import { CommonAPIResponse } from '../models/commonAPIResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ChatUiService {

  constructor(
    private http: HttpClient
  ) { }

  private static readonly apiURL = environment.apiEndpoint + '/admin/intent';

  static getIntentId(intentName: string) {
    return intentName.split('/').reverse()[0];
  }

  showIntent(): Observable<Intent[]> {
    const url = ChatUiService.apiURL;
    return this.http.get<CommonAPIResponse<Intent[]>>(url)
      .pipe(
        map(r => { console.log(r); return r; }),
        map(r => r.data)
      );
  }

  showIntentById(intentName: string): Observable<Intent> {
    const intentId = ChatUiService.getIntentId(intentName);
    const url = ChatUiService.apiURL + '/' + intentId;
    return this.http.get<CommonAPIResponse<Intent>>(url)
      .pipe(
        map(r => { console.log(r); return r; }),
        map(r => r.data)
      );
  }

  deleteIntent(intentName: string) {
    const intentId = ChatUiService.getIntentId(intentName);
    const url = ChatUiService.apiURL;
    return this.http.delete(url + '/' + intentId);
  }

  patchIntent(intent: Partial<Intent>) {
    const url = ChatUiService.apiURL;
    return this.http.patch(url, intent);
  }

  postIntent(intent: Partial<Intent>) {
    const url = ChatUiService.apiURL;
    return this.http.post(url, intent);
  }


}
