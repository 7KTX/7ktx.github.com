// Read the plaintext file
fetch("plaintext_resume.txt")
    .then(response => response.text())
    .then(text => {
        // Split the text into lines
        var lines = text.split("\n");

        // Initialize a variable to hold the current section
        var currentSection = "";

        // Iterate through each line
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            // Check if the line starts with a '^' symbol
            if (line.startsWith("^")) {
                // Get the section title by removing the '^' symbol
                var sectionTitle = line.substring(1);
                // Create a new section element in the HTML
                var section = document.createElement("section");
                // Set the innerHTML of the section to the section title
                section.innerHTML = sectionTitle;
                // Append the section to the HTML
                document.getElementById("resume").appendChild(section);
                // Update the current section variable
                currentSection = section;
            } else if (line.startsWith("$")) {
                // Get the sub-section title by removing the '$' symbol
                var subSectionTitle = line.substring(1);
                // Create a new div element for the sub-section
                var subSection = document.createElement("div");
                // Set the innerHTML of the div to the sub-section title
                subSection.innerHTML = subSectionTitle;
                // Append the div to the current section
                currentSection.appendChild(subSection);
            } else if (line.startsWith("*")) {
                // Get the bullet point by removing the '*' symbol
                var bulletPoint = line.substring(1);
                // Create a new li element for the bullet point
                var bullet = document.createElement("li");
                // Set the innerHTML of the li to the bullet point
                bullet.innerHTML = bulletPoint;
                // Append the li to the current sub-section
                subSection.appendChild(bullet);
                } else {
                // This line is regular text, you can add it to the current sub-section
                var textNode = document.createTextNode(line);
                subSection.appendChild(textNode);
                }
                }
                })
                .catch(error => {
                console.log("An error occurred: ", error);
                });
