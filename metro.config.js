const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
module.exports = getDefaultConfig(__dirname);

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');
const config = getDefaultConfig(projectRoot);
config.watchFolders = [workspaceRoot];

config.resolver.assetExts = [
  ...config.resolver.assetExts,
  'cjs', // CommonJS 파일 확장자 추가
  'svg',  // SVG 이미지 처리
  'png',  // PNG 이미지 처리
  'jpg',  // JPG 이미지 처리
  'jpeg', // JPEG 이미지 처리
];

config.resolver.sourceExts = [
  'ts',
  'tsx',
  'js',
  'json',
  'jsx',
  'mjs',
  'cjs',
];