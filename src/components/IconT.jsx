import { iconPaths } from "./IconPath";

export default function icon(props) {
    const { name } = props;

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g dangerouslySetInnerHTML={{ __html: iconPaths[name] }} />
            </svg>
        </>
    );
}
