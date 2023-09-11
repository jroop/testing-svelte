export function helloShared({ name }: Shared): string {
  return `hello, ${name} from helloShared`;
}

export interface Shared {
  name: string;
}
