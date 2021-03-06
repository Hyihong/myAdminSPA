const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
 
module.exports = 
{
  assets:
  {

    images:
    {
      extensions: ['png', 'jpg', 'gif', 'ico', 'svg']
    },
    style_modules:
    {
      extensions: ['less'],
      filter: function(module, regex, options, log)
      {
        if (options.development)
        {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log)
        }
        return regex.test(module.name)
      },
      path: function(module, options, log)
      {
        if (options.development)
        {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
        }

        return module.name
      },
      parser: function(module, options, log)
      {
        if (options.development)
        {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
        }
        return module.source
      }
    },
    // styles:
		// {
		// 	extension: 'less',
		// 	filter(module, regular_expression, options, log)
		// 	{
		// 		if (options.development)
		// 		{
		// 			// In development mode there's Webpack "style-loader",
		// 			// which outputs `module`s with `module.name == asset_path`,
		// 			// but those `module`s do not contain CSS text.
		// 			//
		// 			// The `module`s containing CSS text are
		// 			// the ones loaded with Webpack "css-loader".
		// 			// (which have kinda weird `module.name`)
		// 			//
		// 			// Therefore using a non-default `filter` function here.
		// 			//
		// 			return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regular_expression, options, log)
		// 		}

		// 		// In production mode there will be no CSS text at all
		// 		// because all styles will be extracted by Webpack Extract Text Plugin
		// 		// into a .css file (as per Webpack configuration).
		// 		//
		// 		// Therefore in production mode `filter` function always returns non-`true`.
		// 	},

		// 	// How to correctly transform kinda weird `module.name`
		// 	// of the `module` created by Webpack "css-loader"
		// 	// into the correct asset path:
		// 	path: WebpackIsomorphicToolsPlugin.style_loader_path_extractor,

		// 	// How to extract these Webpack `module`s' javascript `source` code.
		// 	// Basically takes `module.source` and modifies its `module.exports` a little.
		// 	parser: WebpackIsomorphicToolsPlugin.css_loader_parser
		// }

  }
}