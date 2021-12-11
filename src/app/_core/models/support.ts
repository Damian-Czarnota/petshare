export interface Support {
  title: string;
  description: string;
  request: string[] | null;
  author: SupportAuthor;
}

export interface SupportAuthor {
  company: boolean;
  verified: boolean;
  name: string;
  contact: {
    phone: string;
    email: string;
  }
}
