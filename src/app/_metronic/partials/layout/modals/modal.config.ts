export interface ModalConfig {
  modalTitle: string;
  dismissButtonLabel: 'Ajouter' | 'Modifier' ;
  btnClass?: string;
  deleteButtonLabel?: string;
  shouldClose?(): Promise<boolean> | boolean;
  shouldDismiss?(): Promise<boolean> | boolean;
  onClose?(): Promise<boolean> | boolean;
  onDismiss?(): Promise<boolean> | boolean;
  disableCloseButton?(): boolean;
  disableDismissButton?(): boolean;
  hideCloseButton?(): boolean;
  hideDismissButton?(): boolean;
}
