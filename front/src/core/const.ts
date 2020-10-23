export const SocketOuputMessageLiteral = {
  MESSAGE: 'message',
};

export const SocketEmitMessageTypes = {
  TRAINER_APPEND_TEXT: 'TRAINER_APPEND_TEXT', // Master creates a user story
  TRAINER_REQUEST_FULL_CONTENT: 'TRAINER_REQUEST_FULL_CONTENT', // Trainer checks if there's previous session content when connecting
  STUDENT_REQUEST_FULL_CONTENT: 'STUDENT_REQUEST_FULL_CONTENT', // Student checks if there's previous session content when connecting
};

export const SocketReceiveMessageTypes = {
  CONNECTION_ACK: 'CONNECTION_ACK',
  APPEND_TEXT: 'APPEND_TEXT',
  REPLACE_FULL_TEXT: 'REPLACE_FULL_TEXT',
  TRAINER_GET_FULL_CONTENT: 'TRAINER_GET_FULL_CONTENT',
  STUDENT_GET_FULL_CONTENT: 'STUDENT_GET_FULL_CONTENT',
};

export const lineSeparator = '\n\n*********************************\n';
