import config from 'config';
import loaders from './webpack.loaders';

export {default as plugins} from './webpack.plugins';
export {default as postcss} from './webpack.postcss';

const DEV = config.env.dev;

export const context = config.paths.baseDir;

export const entry = {
    vendor: ['babel-polyfill', 'whatwg-fetch'],
    webapp: DEV ? ['webpack-hot-middleware/client', config.paths.webappDir] : config.paths.webappDir
};
export const output = {
    path: '/',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].[name].js'
};
export const devtool = 'source-map';
export const module = {loaders};
export const cache = DEV;
export const debug = DEV;