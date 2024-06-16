export interface Message {
    message: string;
    userInfo: {
      userId: number;
      username: string;
    };
    time: string;
  }