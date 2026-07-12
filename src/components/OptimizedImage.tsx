import Image, { type ImageProps } from "next/image";

export type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  priority?: boolean;
};

export function OptimizedImage({
  alt,
  priority = false,
  loading,
  sizes = "(max-width: 768px) 100vw, 50vw",
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      alt={alt}
      sizes={sizes}
      loading={priority ? undefined : (loading ?? "lazy")}
      priority={priority}
      {...props}
    />
  );
}
