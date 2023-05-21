interface ComponentProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}

export default function Text({ children }: ComponentProps) {
  return <>{children}</>;
}
