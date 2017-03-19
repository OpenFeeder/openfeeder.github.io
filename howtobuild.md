
# How to build this site

This procedure was tested on Lubuntu 16.04 LTS Xenial Xerus on March 2017. It might change on a different OS.


1. Install nodejs

    [Node.js®](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine. 

    It is necessary for the package manager named npm. This later and the following required tools are written entirely in JavaScript and depends very heavily on Node.js APIs. 

    Go to NodeJs website and follow the [instructions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

    For convenience, the commands are presented below.
    ```bash
    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y build-essential
    ```

2. Install gulp & its dependencies

    ```bash
    sudo npm install 
    ```
    A node_modules folder should appear filled with all dependencies required to build the site.

3. Clone website repository

   We assume `git` is installed.
   
   You have to clone the remote repository to a local folder. Follow the following [procedure](
   https://help.github.com/articles/cloning-a-repository/). If you are on Windows or Mac, you might use [Github Desktop](
   https://guides.github.com/introduction/getting-your-project-on-github/#intro).

4. Build the site

     To ease the development, you can sync the renderer content each time you edit and save a modification in any file.

    ```bash
    gulp dev
    ```

    The following messages appear in the console.

    ```
    ...
    [16:24:47] Finished 'browserSync' after 15 ms                    [16:24:47] Starting 'dev'...                                     [16:24:47] Finished 'dev' after 14 ms                            [BS] Access URLs:                                                -------------------------------------                            Local: http://localhost:3000
    External: http://192.168.0.10:3000 -------------------------------------
    UI: http://localhost:3001
    UI External: http://192.168.0.10:3001
    -------------------------------------
    [BS] Serving files from: ./   
    ```

    The default browser window pops out. If you want to use another browser, just go to :

    ```
    http://localhost:3000
    ```

5. Commit changes to github

    We assume you have proper `github` credentials to push the changes to github.

    After making change to local files, you have to commit and push the modifications to remote server. You can use [git commands](https://www.sitepoint.com/git-for-beginners/) or [Git Desktop](https://guides.github.com/introduction/getting-your-project-on-github/#intro).
