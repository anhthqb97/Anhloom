import { OptimizedImage, type OptimizedImageProps } from "@/components/OptimizedImage";
import { urlFor } from "@/lib/sanity";

type SanityImageProps = Omit<OptimizedImageProps, "src" | "alt"> & {
  source: Parameters<typeof urlFor>[0];
  alt: string;
  width: number;
  height: number;
};

export function SanityImage({
  source,
  alt,
  width,
  height,
  ...props
}: SanityImageProps) {
  const imageUrl = urlFor(source).width(width).height(height).auto("format").url();

  return (
    <OptimizedImage
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
}
