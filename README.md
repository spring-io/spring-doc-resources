# Spring Doc Resources

This project holds the static resources that Spring uses for document production. That includes the following:

* `/src/main/resources/stylesheets/spring.css`: The stylesheet for the HTML versions of the Spring reference guides.
* `/src/main/resources/javascript/tocbot`: The javascript library that creates the dynamic table of contents for the HTML versions of the Spring reference guides.
* `/src/main/resources/html/docinfo.html` and `html/docinfo-footer.html`: The static HTML files that tocbot needs.
* `/src/main/assembly/dep.xml`: The Maven assembly file to build a zip file (which ends up in the `/target` directory).
* `pom.xml`: The Maven build file for this project. All it does is make a zip file that contains the resources.
* `README.md`: This file.
