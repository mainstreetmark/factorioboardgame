module.exports = {
  root: true,
  env: {
    node: true,
  },
//   extends: ["plugin:vue/essential"],
  extends: ["plugin:vue/essential"],
  parserOptions: {
    parser: "babel-eslint",
  },
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		// allow paren-less arrow functions
		'arrow-parens': 'off',
		'one-var': 'off',
		'no-tabs': 0,
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'no-mixed-spaces-and-tabs': 0,
		'no-unused-variables': 'off',
		camelcase: [0, { properties: 'always' }],
		//   "indent": ["error", "tab"],
		//   'indent': 'off',
		'import/first': 'off',
		// 'import/named': 'error',
		// 'import/namespace': 'error',
		// 'import/default': 'error',
		// 'import/export': 'error',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'prefer-promise-reject-errors': 'off',

		// allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
};
