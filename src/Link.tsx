type LinkProps = {
    url: string;
    children: React.ReactNode;
}

export const Link = ({ url, children }: LinkProps) => (
    <a href={url} className="mylink">{children}</a>
)