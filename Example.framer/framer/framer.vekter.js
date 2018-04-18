(function(scope) {var App = new Layer({"name":"App","backgroundColor":"hsl(203, 27%, 96%)","width":360,"height":720,"constraintValues":{"height":720,"heightFactor":1,"width":360,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var AppBar = new Layer({"parent":App,"name":"AppBar","shadows":[{"spread":0,"x":0,"type":"box","y":2,"blur":5,"color":"hsla(0, 0%, 0%, 0.16)"}],"backgroundColor":"#0F6FFF","width":360,"height":80,"constraintValues":{"height":80,"centerAnchorX":0.5,"width":360,"right":0,"centerAnchorY":0.055555555555555552},"blending":"normal","clip":false,"borderStyle":"solid"});var AppBarTitle = new TextLayer({"parent":AppBar,"name":"AppBarTitle","backgroundColor":null,"width":143,"x":16,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"20px","WebkitTextFillColor":"#FFFFFF","whiteSpace":"pre","fontWeight":500,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"Roboto-Medium\", \"Roboto\", sans-serif","lineHeight":"1.2"},"startIndex":0,"endIndex":16}],"text":"Navigation Title"}]},"height":24,"constraintValues":{"left":16,"height":24,"centerAnchorX":0.1361111111111111,"width":143,"top":40,"centerAnchorY":0.38235294117647056},"blending":"normal","autoSize":true,"y":40});var __layer_0__ = new SVGLayer({"parent":AppBar,"backgroundColor":null,"width":24,"x":320,"htmlIntrinsicSize":{"height":24,"width":24},"color":"#FFFFFF","height":24,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":24,"centerAnchorX":0.92222222222222228,"width":24,"bottom":16,"right":16,"top":null,"centerAnchorY":0.65000000000000002},"blending":"normal","y":40,"svg":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"><\/path><\/svg>"});var __layer_1__ = new SVGLayer({"parent":AppBar,"name":"filter","backgroundColor":null,"width":24,"x":280,"htmlIntrinsicSize":{"height":24,"width":24},"color":"#FFFFFF","height":24,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":24,"centerAnchorX":0.81111111111111112,"width":24,"bottom":16,"right":56,"top":null,"centerAnchorY":0.65000000000000002},"blending":"normal","y":40,"svg":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\"><\/path><\/svg>"});var Status = new Layer({"parent":App,"name":"Status","backgroundColor":"hsla(0, 0%, 0%, 0.16)","width":360,"height":24,"constraintValues":{"height":24,"centerAnchorX":0.5,"width":360,"right":0,"centerAnchorY":0.016666666666666666},"blending":"normal","clip":false,"borderStyle":"solid"});if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"originalFilename":"filter_list","framerClass":"SVGLayer","hash":"#vekter|__layer_1__","vekterClass":"SVGNode"}};if(Status !== undefined){Status.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Status","targetName":"Status","vekterClass":"FrameNode"}};if(App !== undefined){App.__framerInstanceInfo = {"deviceName":"Google Pixel 2 XL","framerClass":"Layer","hash":"#vekter|App","targetName":"App","vekterClass":"FrameNode","deviceType":"google-pixel-2-xl-just-black"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"originalFilename":"search","framerClass":"SVGLayer","hash":"#vekter|__layer_0__","vekterClass":"SVGNode"}};if(AppBarTitle !== undefined){AppBarTitle.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|AppBarTitle","targetName":"AppBarTitle","vekterClass":"TextNode","text":"Navigation Title"}};if(AppBar !== undefined){AppBar.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|AppBar","targetName":"AppBar","vekterClass":"FrameNode"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {App, AppBar, AppBarTitle, Status});scope["__vekterVariables"] = ["App", "AppBar", "AppBarTitle", "Status"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);