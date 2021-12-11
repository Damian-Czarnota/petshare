export interface Support {
  slug: string;
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
  },
  address: {
    city: string;
  }
}
