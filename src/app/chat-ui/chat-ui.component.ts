import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.scss']
})
export class ChatUiComponent implements OnInit {

  messages: any[] = [
    {
      text: 'Welcome to SAPi AMS Chatbot',
      date: new Date(),
      reply: false,
      user: {
        name: 'Bot',
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    }
  ];
  message = '';
  ws: WebSocket;

  questions = [
    'ABAP',
    'JAVA',
    'BOBJ',
    'BODS',
    'Web Dispatcher',
    'SAP CC',
    'App Dynamics',
    'Cloud Connector',
    'SAP Upgrade',
    'SAP Refresh',
    'SAP Export/Import',
    'SAP HANA'
  ];

  constructor() { }

  ngOnInit() {
    this.ws = new WebSocket(environment.wsEndpoint);
    this.ws.onopen = () => {
      console.log('Connected successfuly');
    };
    this.ws.onerror = (err) => {
      console.log('Error connecting to websocket', err);
    };
    this.ws.onmessage = this.messageResponse.bind(this);
  }

  addQuestion(question: string) {
    this.message = question;
  }

  sendMessage(event) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    this.ws.send(event.message);
  }

  private messageResponse({ data }: { data: string }) {
    this.messages.push({
      text: data,
      date: new Date(),
      reply: false,
      user: {
        name: 'Bot',
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    });
  }

}
