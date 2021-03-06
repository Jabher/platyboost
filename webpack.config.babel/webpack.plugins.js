import webpack, {optimize} from 'webpack';
import config from 'config';

const DEV = config.env.dev;


const basePlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': DEV ? '"development"' : '"production"',
        __DEV__: String(DEV)
    })
];

const devPlugins = [
    new optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];

const prodPlugins = [
    new (require('extract-text-webpack-plugin'))('style.css'),
    new optimize.UglifyJsPlugin(),
    new optimize.DedupePlugin(),
    new optimize.AggressiveMergingPlugin()
];

export default DEV ? [...basePlugins, ...devPlugins] : [...basePlugins, ...prodPlugins];