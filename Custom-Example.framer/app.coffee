# Setup

# Import Module
{ BottomNavigation } = require "BottomNavigation"

# Icon Data
photos = "M6 0h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6zm9.99 8.223a5 5 0 1 1-9.893 1.467 5 5 0 0 1 9.892-1.467zM11.482 7.99a3 3 0 1 0-.88 5.935 3 3 0 0 0 .88-5.935z"

cloud = "M19,7 C22.3137085,7 25,9.6862915 25,13 C25,16.3137085 22.3137085,19 19,19 L10.0007458,18.9999997 C5.32284225,19.0034883 1.42217322,15.422732 1.02631629,10.7616065 C0.63045935,6.10048104 3.87141022,1.91320601 8.48290511,1.12777084 C12.8344008,0.386619033 17.037084,2.90772308 18.4797644,7 L19,7 Z M19,9 L17.74,9 C17.2840018,9 16.8857539,8.69151858 16.7717542,8.25000028 C15.8621606,4.72716353 12.4054297,2.48848379 8.8187115,3.09937781 C5.23199326,3.71027184 2.71125369,6.9670413 3.01914242,10.5923611 C3.32703115,14.2176809 6.36088483,17.0027136 10,17 L19,17 C21.209139,17 23,15.209139 23,13 C23,10.790861 21.209139,9 19,9 Z"

compass = "M11,22 C4.92486775,22 0,17.0751322 0,11 C0,4.92486775 4.92486775,0 11,0 C17.0751322,0 22,4.92486775 22,11 C22,17.0751322 17.0751322,22 11,22 Z M11,20 C15.9705627,20 20,15.9705627 20,11 C20,6.02943725 15.9705627,2 11,2 C6.02943725,2 2,6.02943725 2,11 C2,15.9705627 6.02943725,20 11,20 Z M16.1886833,7.07622777 L14.0686833,13.4362278 C13.9691483,13.7348328 13.7348328,13.9691483 13.4362278,14.0686833 L7.07622777,16.1886833 C6.29446974,16.4492693 5.55073069,15.7055303 5.8113167,14.9237722 L7.9313167,8.56377223 C8.0308517,8.26516724 8.26516724,8.0308517 8.56377223,7.9313167 L14.9237722,5.8113167 C15.7055303,5.55073069 16.4492693,6.29446974 16.1886833,7.07622777 Z M9.67056942,9.67056942 L8.34113883,13.6588612 L12.3294306,12.3294306 L13.6588612,8.34113883 L9.67056942,9.67056942 Z"

camera = "M17.5351838,3 L21,3 C22.6568542,3 24,4.34314575 24,6 L24,17 C24,18.6568542 22.6568542,20 21,20 L3,20 C1.34314575,20 3.33066907e-16,18.6568542 0,17 L0,6 C-2.22044605e-16,4.34314575 1.34314575,3 3,3 L6.46481624,3 L8.16794971,0.445299804 C8.35341548,0.167101135 8.66564681,0 9,0 L15,0 C15.3343532,0 15.6465845,0.167101135 15.8320503,0.445299804 L17.5351838,3 Z M9.53518376,2 L7.83205029,4.5547002 C7.64658452,4.83289886 7.33435319,5 7,5 L3,5 C2.44771525,5 2,5.44771525 2,6 L2,17 C2,17.5522847 2.44771525,18 3,18 L21,18 C21.5522847,18 22,17.5522847 22,17 L22,6 C22,5.44771525 21.5522847,5 21,5 L17,5 C16.6656468,5 16.3534155,4.83289886 16.1679497,4.5547002 L14.4648162,2 L9.53518376,2 Z M12,16 C9.23857625,16 7,13.7614237 7,11 C7,8.23857625 9.23857625,6 12,6 C14.7614237,6 17,8.23857625 17,11 C17,13.7614237 14.7614237,16 12,16 Z M12,14 C13.6568542,14 15,12.6568542 15,11 C15,9.34314575 13.6568542,8 12,8 C10.3431458,8 9,9.34314575 9,11 C9,12.6568542 10.3431458,14 12,14 Z"


# Configure Item Data
itemData = [["Photos", photos, "#0F6FFF"],["Cloud", cloud, "#0ECFB8"], ["Explore", compass, "#8920E6"], ["Camera", camera, "#F5A613"]]

# Set Default Title
AppBarTitle.text = itemData[0][0]


# Init Bottom Navigation
bottomNavigation = new BottomNavigation
	colorRipple: true
	defaultActiveTab: 0
	items: itemData
	color: 'rgba(255, 255, 255, .54)'
	activeColor: 'rgb(255, 255, 255)'
	withSystemNav: true
	materialIcons: false

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

