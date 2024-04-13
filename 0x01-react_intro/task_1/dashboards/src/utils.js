export function getFullYear () {
    const currentDate = new Date();
    return (
        currentDate.getFullYear()
    );
}

export default function getFooterCopy (isIndex) {
    if (isIndex) {
        return ("Holberton School")
    }
    return ("Holberton School main dashboard")
}