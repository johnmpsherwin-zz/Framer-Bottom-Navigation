# Setup

# Import Module
{ BottomNavigation } = require "BottomNavigation"

# Configure Item Data
itemData = [["Movies", "movie", "#0F6FFF"], ["Books", "book", "#EE4444"], ["Music", "album", "#7143E5"], ["Favorites", "star", "#FF5722"]]

# Set Default Title
AppBarTitle.text = itemData[0][0]

# Init Bottom Navigation
bottomNavigation = new BottomNavigation
	colorRipple: true
	defaultActiveTab: 0
	items: itemData
	color: 'rgba(0, 0, 0, .54)'
	activeColor: 'rgb(255, 255, 255)'
	withSystemNav: true
	materialIcons: true

# Set Up Views
viewController = new PageComponent
	size: Screen.size
	parent: App
	index: -1
viewController.scroll = false

# Add Views
views = []
for i in [0...4]
	view = new Layer
		size: Screen.size
		parent: viewController.content
		x: Screen.width * i
		backgroundColor: "#FFF"
		name: itemData[i][0]
	views.push(view)


views.forEach (view) ->
	label = new TextLayer
		parent: view
		point: Align.center()
		text: view.name
		font: "300 32px/1.5 Roboto"
		color: "#000"

# Bottom Navigation Interactions
for item in bottomNavigation.viewItems
	item.onTap ->
		i = @index
		AppBar.animate
			backgroundColor: itemData[i][2]
			options: { time: .2 }
		AppBarTitle.text = itemData[i][0]
		
		# Go To View 
		viewController.snapToPage(viewController.content.children[i])


