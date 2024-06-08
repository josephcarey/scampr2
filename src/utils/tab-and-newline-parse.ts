export const tabAndNewlineParse = (lines: string[][]) =>
    lines.map((line) => line.join('\t')).join('\n')
