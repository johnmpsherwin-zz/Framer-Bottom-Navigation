(function(scope) {var App = new Layer({"name":"App","backgroundColor":"hsl(203, 27%, 96%)","width":360,"height":720,"constraintValues":{"height":720,"heightFactor":1,"width":360,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var AppBar = new Layer({"parent":App,"name":"AppBar","shadows":[{"spread":0,"x":0,"type":"box","y":2,"blur":5,"color":"hsla(0, 0%, 0%, 0.16)"}],"backgroundColor":"#0F6FFF","width":360,"height":80,"constraintValues":{"height":80,"centerAnchorX":0.5,"width":360,"right":0,"centerAnchorY":0.055555555555555552},"blending":"normal","clip":false,"borderStyle":"solid"});var AppBarTitle = new TextLayer({"parent":AppBar,"name":"AppBarTitle","backgroundColor":null,"width":143,"x":16,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"20px","WebkitTextFillColor":"#FFFFFF","whiteSpace":"pre","fontWeight":500,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"Roboto-Medium\", \"Roboto\", sans-serif","lineHeight":"1.2"},"startIndex":0,"endIndex":16}],"text":"Navigation Title"}]},"height":24,"constraintValues":{"left":16,"height":24,"centerAnchorX":0.1361111111111111,"width":143,"top":40,"centerAnchorY":0.38235294117647056},"blending":"normal","autoSize":true,"y":40});var Status = new Layer({"parent":App,"name":"Status","backgroundColor":"hsla(0, 0%, 0%, 0.16)","width":360,"height":24,"constraintValues":{"height":24,"centerAnchorX":0.5,"width":360,"right":0,"centerAnchorY":0.016666666666666666},"blending":"normal","clip":false,"borderStyle":"solid"});if(Status !== undefined){Status.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Status","targetName":"Status","vekterClass":"FrameNode"}};if(App !== undefined){App.__framerInstanceInfo = {"deviceName":"Google Pixel 2 XL","framerClass":"Layer","hash":"#vekter|App","targetName":"App","vekterClass":"FrameNode","deviceType":"google-pixel-2-xl-just-black"}};if(AppBarTitle !== undefined){AppBarTitle.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|AppBarTitle","targetName":"AppBarTitle","vekterClass":"TextNode","text":"Navigation Title"}};if(AppBar !== undefined){AppBar.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|AppBar","targetName":"AppBar","vekterClass":"FrameNode"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {App, AppBar, AppBarTitle, Status});scope["__vekterVariables"] = ["App", "AppBar", "AppBarTitle", "Status"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);