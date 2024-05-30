import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('correct year', () => {
    expect(getFullYear()).toBe(2024);
});

test('correct footer string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('check return string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});