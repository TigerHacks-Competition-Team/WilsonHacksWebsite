# Wilson Hackathon Website

## Nav Bar
The Nav Bar consists of a title on the left and an inline list of pages on the right. When you add a new page please update the Nav Bar page list in every file.

The class **current_page_item** specifies that it is the current page and should be set for every page and no class should be set in for the other pages.

## Home Page
### index.html

The index.html file controls the home page.

The differnet wrappers indicate differently formated content.

#### wrapper style1
List of images.

#### wrapper style2
Two side by side headings with captions and buttons.

#### wrapper style3
Left large image or other contnent combined with a spotlight. section on the right which consists of an images with a title and caption.

## Details
### details.html

The details.html file controls the details page.

It consists of a Nav Bar at the top, a sidebar for the different details pages, and a center section to display the different details pages.

#### Sidebar
The Sidebar consists of a list of buttons that run the **load()** JavaScript function defined in the **script** tags at the top. Each button passes a path in the form of a string into the load function which references the html page in the **details** folder. An example is an on press field that looks like **onPress="load('/details/hackathons/winter.html')"**.

#### Dynamic
The Dynamic section is defined by a **div** tag with the id **dynamic**. It is the object that the **load()** function loads the other html files into. Please do not change any of its properties unless needed for all sidebar pages.

#### JavaScript
The **script** section at the top consists of an onload function that is triggered on page load to load the default **dynamic page**. It should be set to the upcomming hackathon or other most important information if there are no hackathons scheduled. The next function is the **load()** function which is called by the sidebar buttons to load **dynamic** content. A file path to the page to load should be provided in the form of a string when calling the **load()** function.

Within the **load()** function there is a **JQuery** line that first identifies the view to load the content into. **#dynamic**, and then loads the html from the **path** provided when the function is called. 

By using these functions, the details page's content can be changed dynamically without reloading and in a more elegent manner.

#### File Hierarchy
The **details folder** is where all files should be stored for viewing on the details page through the **load()** function. Hackathon pages should be stored in the **hackathons** folder while other content like About Us and Meet the Team should just be stored in the root of the **details folder**.