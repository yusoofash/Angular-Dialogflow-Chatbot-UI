export interface Intent {
    name: string;
    displayName: string;
    messages: {
        message: 'text' | 'image';
        text: {
            text: string[];
        }
    }[];
    trainingPhrases: {
        parts: {
            text: string;
        }[];
    }[];
}
