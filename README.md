# testdoublegrunt
History:
* Version:
* 0.1, 2020/04/20, Initial release.
* Author: Laurent Matheo.


# What is this? :)
This repository hosts an example of doing double grunt (application and library).
You can request a free of charge development environment on the BMC Developer Portal (https://developers.bmc.com/site/global/home/index.gsp).
This repository is coming from a question on BMC Communities:
https://communities.bmc.com/thread/203224


# Full examples:
Please check this repository for full examples:
https://github.com/lmame/Sample-Library-Public


# Installation (using the zip files):
You can Just deploy the file "com.example.testdoubleapp-1.0-SNAPSHOT.zip" and "com.example.testdoublelib-1.0-SNAPSHOT.zip" on your development environment.
https://docs.bmc.com/docs/helixplatform/deploying-application-tailoring-changes-851871221.html


# Updating your SDK / Developer Environment (if needed):
https://docs.bmc.com/docs/helixplatform/upgrading-bmc-helix-platform-sdk-to-19-11-851083022.html


# Build and installation using the source code:
Please follow those steps:
* Create your developer environment:
* https://docs.bmc.com/docs/helixplatform/setting-up-your-ide-and-installing-bmc-helix-platform-sdk-851871275.html
* You will need nodeJs, maven, Yarn, Grunt and Java.

To deploy:
* https://docs.bmc.com/docs/helixplatform/creating-a-project-using-maven-and-the-archetype-851871283.html
* https://docs.bmc.com/docs/helixplatform/deploying-your-digital-service-application-for-the-first-time-to-start-working-in-bmc-helix-innovation-studio-851871286.html

Here are the steps:
* Clone this repository,
* Change the content of the parent "pom.xml" files (application and library) to insert your credentials:
```xml
    <!-- START: Bundle specific configuration. Verify and Change as per environment -->
    <developerUserName>developer</developerUserName>
    <developerPassword>password</developerPassword>
    <!-- Server name with Jetty port. -->
    <webUrl>https://developerXXXX.innovate.bmc.com</webUrl>
    <!-- END: Bundle specific configuration.-->
```
* Run the command "mvn clean install -Pdeploy" to deploy the application on your developer environment,


# Disclaimer:
These samples are released by Laurent Matheo and are released "as is" as code samples. There is no warranty, liability or support on those examples.


# Support:
Please find support on the Developer BMC Community if you have any questions or feel gree to use this git repo features (bug report etc...).


# Links:
* BMC Innovation Youtube channel (https://www.youtube.com/bmcdigitalinnovator),
* BMC Helix Youtube channel (https://www.youtube.com/channel/UCufKJEem7x7_IaTUPbTYuww),
* BMC Developer portal (https://developers.bmc.com/site/global/home/index.gsp),
* BMC Developer Community (https://communities.bmc.com/community/developer/content?filterID=contentstatus%5Bpublished%5D~objecttype~objecttype%5Bthread%5D),
* BMC Documentation for BMC Helix Platform (https://docs.bmc.com/docs/helixplatform/),


# Most important:
I hope it helps :)
