import { TestBed } from '@angular/core/testing';

import { ChatUiService } from './chat-ui.service';

describe('ChatUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatUiService = TestBed.get(ChatUiService);
    expect(service).toBeTruthy();
  });
});
