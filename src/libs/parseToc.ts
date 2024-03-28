import { Toc } from '@/types/toc-type';
import GithubSlugger from 'github-slugger';

export const parseToc = (raw: string) => {
  const calculateHeaderLevels = (arr: Array<number>) => {
    const sorted = [...arr].sort((a, b) => a - b);
    const min = sorted[0];
    const adjusted = arr.map((value) => value - min + 1);
    return adjusted;
  };

  // heading 요소 찾기
  const regex = /\n(?<flag>#{1,3})\s+(?<text>.+)/g;
  const headerMatches = Array.from(raw.matchAll(regex));

  // tag level 구하기
  const headerLevels = calculateHeaderLevels(
    headerMatches.map((match) => match.groups?.flag.length!)
  ) as Array<1 | 2 | 3>;

  const slugger = new GithubSlugger();

  const headers: Toc[] = headerMatches.map((header, i) => {
    const { text } = header.groups || { text: '' };
    const slug = slugger.slug(text);
    return { level: headerLevels[i], text, slug };
  });
  return headers;
};
