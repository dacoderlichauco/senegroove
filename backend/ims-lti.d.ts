declare module 'ims-lti' {
    import { Request } from 'express';
  
    class Provider {
      constructor(consumerKey: string, consumerSecret: string);
      valid_request(
        req: Request,
        callback: (err: Error | null, isValid: boolean) => void
      ): void;
    }
  
    export { Provider };
  }
  