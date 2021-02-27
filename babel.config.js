module.exports = {
	presets: [
		[
			'@vue/app',
			{
				useBuiltIns: 'entry',
			},
		],
		[
			'@babel/preset-env',
			{
				exclude: ['transform-async-to-generator', 'transform-regenerator'],
			},
		],
	],
	plugins: [
		'@babel/plugin-transform-runtime',
		[
			'module:fast-async',
			{
				spec: true,
			},
		],
	],
}
