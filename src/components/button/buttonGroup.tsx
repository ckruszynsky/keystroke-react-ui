const ButtonGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="inline-flex">{children}</div>;
};

ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
