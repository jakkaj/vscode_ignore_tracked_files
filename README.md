# Git Ignore Tracked Files extension README

Ever wanted to check in a .env file or a config.yaml file as a template for others, then change that file with your own local settings without ever checking it in again?

Well this extension allows you to do that!

It's based on the git command `git update-index --skip-worktree`. This command let's you basically ignore a file that's already been tracked, thus never checking it in again. 

## Features

Open the file you want to stop tracking in VS Code and run `Git: Ignore this tracked file from now (--skip-work-tree)`. 

You can of course undo this but running the `Git: Include this file from now (track it again and undo --skip-work-tree)`.


### 1.0.0

Initial release of the Visual Studio Code Git Ignore Tracked Files extension. 
