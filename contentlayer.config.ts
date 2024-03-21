import { defineDocumentType, makeSource } from 'contentlayer/source-files';

/* ----- content type 정의 ----- */
const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  // 작성한 글 정보에 대해 입력해야하는 필드 정의
  fields: {
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

export default makeSource({
  contentDirPath: 'src/posts', // 파일이 있는 루트 폴더
  documentTypes: [Post],
});
