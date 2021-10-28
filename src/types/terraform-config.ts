export type TerraformConfig = {
  pattern: RegExp;
  initial?: () => void;
  modifiers?: Record<string, () => HTMLElement[]>;
}
