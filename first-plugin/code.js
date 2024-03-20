function runFunction() {
    // Get the number of selected elements
    let selectedElements = figma.currentPage.selection.length;

    if (selectedElements === 0) {
        figma.closePlugin("No elements selected");
        return;
    }

    if (selectedElements > 1) {
        figma.closePlugin("Please select a single element");
        return;
    }

    // find the name of the selected plugin
    let selectedElementName = figma.currentPage.selection[0].name;

    const hasSameName = (node) => {
        return node.name === selectedElementName;
    };

    // call back function for same name
    let withSameName = figma.currentPage.findAll(hasSameName);

    figma.currentPage.selection = withSameName;

    figma.closePlugin(withSameName.length + " Elements selected ");

    return;
}

runFunction();
