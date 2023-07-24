import { iconPaths } from "./IconPath";

export default function icon(props) {
    const { name } = props;
    const gradientId =
        "icon-gradient-" + Math.round(Math.random() * 10e12).toString(36);
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                aria-hidden="true"
                // stroke={`url(#${gradientId})`}
                fill={`url(#${gradientId})`}
            >
                <g dangerouslySetInnerHTML={{ __html: iconPaths[name] }} />
                {
                    <linearGradient
                        id={gradientId}
                        x2="1"
                        y2="1"
                    >
                        <stop stopColor="var(--gradient-stop-1)" />
                        <stop offset=".5" stopColor="var(--gradient-stop-2)" />
                        <stop offset="1" stopColor="var(--gradient-stop-3)" />
                    </linearGradient>
                }
            </svg>
        </>
    );
}
