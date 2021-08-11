const ImgWithFallback = ({
    src,
    fallback,
    className,
    alt,
    type = 'image/webp'
}) => {
    return (
        <picture>
            <source srcSet={src} type={type} />
            <img src={fallback} className={className} alt={alt} />
        </picture>
    );
};

export default ImgWithFallback