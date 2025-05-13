import { SafeView } from './SafeView';

type ScreenContentProps = {
  children?: React.ReactNode;
};

export const ScreenContent = ({ children }: ScreenContentProps) => {
  return <SafeView className="flex-1 items-center justify-end bg-black">{children}</SafeView>;
};
