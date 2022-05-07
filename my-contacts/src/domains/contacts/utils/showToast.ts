import { toast } from 'react-toastify';

type TToastTypes = 'success' | 'warn' | 'error';

export function showToast(message: string, type?: TToastTypes): void {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message);
  }
}
