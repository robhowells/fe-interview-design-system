import "./Badge.css";

export interface BadgeProps {
  text: string;
  variant: string;
}

export default function Badge({ text, variant }: BadgeProps) {
  return (
    <span
      className={`badge badge--${variant}`}
      data-testid={`badge-${variant}`}
    >
      {text}
    </span>
  );
}
