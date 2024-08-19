import {decrypt} from 'utils/Decrypt';

class DecryptMessage {
  private static instance: DecryptMessage | null = null;
  private static key: string;
  private constructor(decodeKey: string) {
    DecryptMessage.key = decodeKey;
  }
  public static getInstance(): DecryptMessage {
    if (!DecryptMessage.instance) {
      DecryptMessage.instance = new DecryptMessage('DECODE_PRICE_KEY');
    }
    return DecryptMessage.instance;
  }

  public decrypt(str: string, defaultValue?: any) {
    if (!!str) {
      const encodeValue = decrypt(DecryptMessage.key, str || '');
      return encodeValue || '';
    }
    return defaultValue;
  }
}

export default DecryptMessage;
