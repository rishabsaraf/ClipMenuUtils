var removeOuterBrackets = function(clipMenuText) {
	if ((clipMenuText[0] == '(' && clipMenuText[clipMenuText.length - 1] == ')') || 
		(clipMenuText[0] == '[' && clipMenuText[clipMenuText.length - 1] == ']') ||
		(clipMenuText[0] == '{' && clipMenuText[clipMenuText.length - 1] == '}') ) {
		return clipMenuText.slice(1, clipMenuText.length -1)
	}
	return clipMenuText;
}

return removeOuterBrackets(clipText);