export interface InputLabelModel {
  isFor: string;
  title: string;
}

export interface InputItemModel {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange?: (event: any) => void;
  isReadOnly: boolean;
  isDefaultValue?: string;
}

export interface TextareaItemModel {
  id: string;
  name: string;
  value: string;
  onChange?: (event: any) => void;
  isReadOnly: boolean;
  isDefaultValue?: string;
}
