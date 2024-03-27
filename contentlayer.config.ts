import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';

/* ----- content type 정의 ----- */
const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  // 작성한 글 정보에 대해 입력해야하는 필드 정의
  fields: {
    id: { type: 'string', required: true },
    title: { type: 'string', required: true },
    description: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    createdAt: { type: 'date', required: true },
  },
  // post url 생성
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: 'material-theme-darker',
  // github-dark-default, material-theme-ocean, material-theme-darker, night-owl, one-dark-pro, rose-pine, rose-pine-moon, vesper
};

const rehypePrettyCodePluginWithOptions = rehypePrettyCode as any;

export default makeSource({
  contentDirPath: 'src/posts', // 파일이 있는 루트 폴더
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCodePluginWithOptions, prettyCodeOptions]],
  },
});
