export default function SecondaryButton({
  type = "button",
  className = "",
  title,
  disabled,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      type={type}
      title={title}
      className={
        `inline-flex items-center px-4 py-2 bg-black border border-gray-300 rounded-md font-semibold text-xs text-gray-300 uppercase tracking-widest shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
